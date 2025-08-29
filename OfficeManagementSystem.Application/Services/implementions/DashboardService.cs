using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    /// <summary>
    /// خدمة الـ dashboard
    /// </summary>
    public class DashboardService : IDashboardService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DashboardService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        /// <summary>
        /// الحصول على ملخص عام للنظام
        /// </summary>
        public async Task<SystemOverviewDto> GetSystemOverviewAsync(DashboardDateFilterDto filter)
        {
            try
            {
                var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
                var toDate = filter.ToDate ?? DateTime.Now;

                // المهام
                var tasks = await _unitOfWork.TaskRepository.GetAllAsync(
                    t => t.CreatedAt >= fromDate && t.CreatedAt <= toDate);

                var totalTasks = tasks.Count();
                var completedTasks = tasks.Count(t => t.Status == Domain.Enums.Tasks.TaskStatus.Done);
                var pendingTasks = tasks.Count(t => t.Status == Domain.Enums.Tasks.TaskStatus.New || t.Status == Domain.Enums.Tasks.TaskStatus.In_Progress);
                var overdueTasks = tasks.Count(t => t.DueDate < DateTime.Now && t.Status != Domain.Enums.Tasks.TaskStatus.Done);

                // الاجتماعات
                var meetings = await _unitOfWork.MeetingRepository.GetAllAsync(
                    m => m.CreatedAt >= fromDate && m.CreatedAt <= toDate);

                var totalMeetings = meetings.Count();
                var completedMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Done);
                var upcomingMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Scheduled);
                var cancelledMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Cancelled);

                // المراسلات
                var letters = await _unitOfWork.LetterRepository.GetAllAsync(
                    l => l.CreatedAt >= fromDate && l.CreatedAt <= toDate);

                var totalLetters = letters.Count();
                var incomingLetters = letters.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.In);
                var outgoingLetters = letters.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.Out);

                // الموظفين
                var employees = await _unitOfWork.EmployeeKpiRepository.GetAllAsync();
                var totalEmployees = employees.Count();
                var activeEmployees = employees.Count(e => e.Employee?.IsActive == true);
                var averageKpiScore = employees.Any() ? employees.Average(e => e.Score) : 0;

                return new SystemOverviewDto
                {
                    TotalTasks = totalTasks,
                    CompletedTasks = completedTasks,
                    PendingTasks = pendingTasks,
                    OverdueTasks = overdueTasks,
                    TaskCompletionRate = totalTasks > 0 ? (double)completedTasks / totalTasks * 100 : 0,

                    TotalMeetings = totalMeetings,
                    CompletedMeetings = completedMeetings,
                    UpcomingMeetings = upcomingMeetings,
                    CancelledMeetings = cancelledMeetings,

                    TotalLetters = totalLetters,
                    IncomingLetters = incomingLetters,
                    OutgoingLetters = outgoingLetters,

                    TotalEmployees = totalEmployees,
                    AverageKpiScore = (double)averageKpiScore
                };
            }
            catch (Exception ex)
            {
                // تسجيل الخطأ للتشخيص
                Console.WriteLine($"SystemOverview Error: {ex}");
                throw;
            }
        }

        /// <summary>
        /// الحصول على ملخص المهام
        /// </summary>
        public async Task<TasksOverviewDto> GetTasksOverviewAsync(DashboardDateFilterDto filter)
        {
            try
            {
                var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
                var toDate = filter.ToDate ?? DateTime.Now;

                var tasks = await _unitOfWork.TaskRepository.GetAllAsync(
                    t => t.CreatedAt >= fromDate && t.CreatedAt <= toDate);

                var totalTasks = tasks.Count();
                var completedTasks = tasks.Count(t => t.Status == Domain.Enums.Tasks.TaskStatus.Done);
                var pendingTasks = tasks.Count(t => t.Status == Domain.Enums.Tasks.TaskStatus.New || t.Status == Domain.Enums.Tasks.TaskStatus.In_Progress);
                var overdueTasks = tasks.Count(t => t.DueDate < DateTime.Now && t.Status != Domain.Enums.Tasks.TaskStatus.Done);

                // توزيع الحالة
                var statusDistribution = tasks
                    .GroupBy(t => t.Status)
                    .Select(g => new TaskStatusDistributionDto
                    {
                        Status = g.Key.ToString(),
                        Count = g.Count(),
                        Percentage = totalTasks > 0 ? (double)g.Count() / totalTasks * 100 : 0
                    })
                    .ToList();

                // توزيع الأولوية
                var priorityDistribution = tasks
                    .GroupBy(t => t.Priority)
                    .Select(g => new TaskPriorityDistributionDto
                    {
                        Priority = g.Key.ToString(),
                        Count = g.Count(),
                        Percentage = totalTasks > 0 ? (double)g.Count() / totalTasks * 100 : 0
                    })
                    .ToList();

                return new TasksOverviewDto
                {
                    TotalTasks = totalTasks,
                    CompletedTasks = completedTasks,
                    PendingTasks = pendingTasks,
                    OverdueTasks = overdueTasks,
                    CompletionRate = totalTasks > 0 ? (double)completedTasks / totalTasks * 100 : 0,
                    StatusDistribution = statusDistribution,
                    PriorityDistribution = priorityDistribution
                };
            }
            catch (Exception ex)
            {
                Console.WriteLine($"TasksOverview Error: {ex}");
                throw;
            }
        }

        /// <summary>
        /// الحصول على اتجاه المهام
        /// </summary>
        public async Task<TasksTrendDto> GetTasksTrendAsync(DashboardDateFilterDto filter)
        {
            var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
            var toDate = filter.ToDate ?? DateTime.Now;

            var tasks = await _unitOfWork.TaskRepository.GetAllAsync(
                t => t.CreatedAt >= fromDate && t.CreatedAt <= toDate);

            var trendData = new List<TaskTrendDataDto>();

            // تجميع البيانات حسب التاريخ
            var dailyGroups = tasks
                .GroupBy(t => t.CreatedAt.Date)
                .OrderBy(g => g.Key);

            foreach (var group in dailyGroups)
            {
                var createdTasks = group.Count();
                var completedTasks = group.Count(t => t.Status == Domain.Enums.Tasks.TaskStatus.Done);
                var overdueTasks = group.Count(t => t.DueDate < DateTime.Now && t.Status != Domain.Enums.Tasks.TaskStatus.Done);

                trendData.Add(new TaskTrendDataDto
                {
                    Date = group.Key,
                    CreatedTasks = createdTasks,
                    CompletedTasks = completedTasks,
                    OverdueTasks = overdueTasks
                });
            }

            return new TasksTrendDto { TrendData = trendData };
        }

        /// <summary>
        /// الحصول على ملخص الاجتماعات
        /// </summary>
        public async Task<MeetingsOverviewDto> GetMeetingsOverviewAsync(DashboardDateFilterDto filter)
        {
            var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
            var toDate = filter.ToDate ?? DateTime.Now;

            var meetings = await _unitOfWork.MeetingRepository.GetAllAsync(
                m => m.CreatedAt >= fromDate && m.CreatedAt <= toDate);

            var totalMeetings = meetings.Count();
            var completedMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Done);
            var upcomingMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Scheduled);
            var cancelledMeetings = meetings.Count(m => m.Status == Domain.Enums.Meeting.MeetingStatus.Cancelled);

            // توزيع الحالة
            var statusDistribution = meetings
                .GroupBy(m => m.Status)
                .Select(g => new MeetingStatusDistributionDto
                {
                    Status = g.Key.ToString(),
                    Count = g.Count(),
                    Percentage = totalMeetings > 0 ? (double)g.Count() / totalMeetings * 100 : 0
                })
                .ToList();

            // توزيع النوع
            var typeDistribution = meetings
                .GroupBy(m => m.Type)
                .Select(g => new MeetingTypeDistributionDto
                {
                    Type = g.Key.ToString(),
                    Count = g.Count(),
                    Percentage = totalMeetings > 0 ? (double)g.Count() / totalMeetings * 100 : 0
                })
                .ToList();

            return new MeetingsOverviewDto
            {
                TotalMeetings = totalMeetings,
                CompletedMeetings = completedMeetings,
                UpcomingMeetings = upcomingMeetings,
                CancelledMeetings = cancelledMeetings,
                CompletionRate = totalMeetings > 0 ? (double)completedMeetings / totalMeetings * 100 : 0,
                StatusDistribution = statusDistribution,
                TypeDistribution = typeDistribution
            };
        }

        /// <summary>
        /// الحصول على ملخص المراسلات
        /// </summary>
        public async Task<LettersOverviewDto> GetLettersOverviewAsync(DashboardDateFilterDto filter)
        {
            var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
            var toDate = filter.ToDate ?? DateTime.Now;

            var letters = await _unitOfWork.LetterRepository.GetAllAsync(
                l => l.CreatedAt >= fromDate && l.CreatedAt <= toDate);

            var totalLetters = letters.Count();
            var incomingLetters = letters.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.In);
            var outgoingLetters = letters.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.Out);


            // توزيع النوع
            var typeDistribution = letters
                .GroupBy(l => l.Direction)
                .Select(g => new LetterTypeDistributionDto
                {
                    Type = g.Key.ToString(),
                    Count = g.Count(),
                    Percentage = totalLetters > 0 ? (double)g.Count() / totalLetters * 100 : 0
                })
                .ToList();

            return new LettersOverviewDto
            {
                TotalLetters = totalLetters,
                IncomingLetters = incomingLetters,
                OutgoingLetters = outgoingLetters,
                TypeDistribution = typeDistribution,

            };
        }

        /// <summary>
        /// الحصول على المراسلات الشهرية
        /// </summary>
        public async Task<LettersMonthlyDto> GetLettersMonthlyAsync(DashboardDateFilterDto filter)
        {
            var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-6);
            var toDate = filter.ToDate ?? DateTime.Now;

            var letters = await _unitOfWork.LetterRepository.GetAllAsync(
                l => l.CreatedAt >= fromDate && l.CreatedAt <= toDate);

            var monthlyData = letters
                .GroupBy(l => new { l.CreatedAt.Year, l.CreatedAt.Month })
                .OrderBy(g => g.Key.Year)
                .ThenBy(g => g.Key.Month)
                .Select(g => new LetterMonthlyDataDto
                {
                    Month = $"{g.Key.Year}-{g.Key.Month:D2}",
                    IncomingLetters = g.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.In),
                    OutgoingLetters = g.Count(l => l.Direction == Domain.Enums.Letters.LetterDirection.Out),
                    TotalLetters = g.Count()
                })
                .ToList();

            return new LettersMonthlyDto { MonthlyData = monthlyData };
        }

        /// <summary>
        /// الحصول على اتجاه KPI الموظفين
        /// </summary>
        public async Task<EmployeeKpiTrendDto> GetEmployeeKpiTrendAsync(DashboardDateFilterDto filter)
        {
            var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
            var toDate = filter.ToDate ?? DateTime.Now;

            var kpis = await _unitOfWork.EmployeeKpiRepository.GetAllAsync();

            var trendData = kpis
                .GroupBy(k => k.PeriodStart)
                .OrderBy(g => g.Key)
                .Select(g => new EmployeeKpiTrendDataDto
                {
                    Date = g.Key.ToDateTime(TimeOnly.MinValue),
                    AverageKpiScore = (double)g.Average(k => k.Score),
                    TotalEmployees = g.Count(),
                    HighPerformers = g.Count(k => k.Score >= 80),
                    AveragePerformers = g.Count(k => k.Score >= 60 && k.Score < 80),
                    LowPerformers = g.Count(k => k.Score < 60)
                })
                .ToList();

            return new EmployeeKpiTrendDto { TrendData = trendData };
        }

        /// <summary>
        /// الحصول على قائمة المتصدرين
        /// </summary>
        public async Task<EmployeeLeaderboardDto> GetEmployeeLeaderboardAsync(DashboardDateFilterDto filter)
        {
            try
            {
                var fromDate = filter.FromDate ?? DateTime.Now.AddMonths(-1);
                var toDate = filter.ToDate ?? DateTime.Now;

                var employees = await _unitOfWork.EmployeeKpiRepository.GetAllAsync(
                    includeProperties: "Employee,Employee.Department");

                var tasks = await _unitOfWork.TaskRepository.GetAllAsync(
                    t => t.CreatedAt >= fromDate && t.CreatedAt <= toDate);

                var leaderboard = employees
                    .Select(e => new EmployeeLeaderboardItemDto
                    {
                        EmployeeId = e.EmployeeId,
                        EmployeeName = $"{e.Employee?.FirstName} {e.Employee?.LastName}" ?? "غير محدد",
                        Department = e.Employee?.Department?.NameAr ?? "غير محدد",
                        KpiScore = (double)e.Score,
                        CompletedTasks = tasks.Count(t => t.AssigneeUserId == e.EmployeeId && t.Status == Domain.Enums.Tasks.TaskStatus.Done),
                        TotalTasks = tasks.Count(t => t.AssigneeUserId == e.EmployeeId),
                        TaskCompletionRate = tasks.Count(t => t.AssigneeUserId == e.EmployeeId) > 0 
                            ? (double)tasks.Count(t => t.AssigneeUserId == e.EmployeeId && t.Status == Domain.Enums.Tasks.TaskStatus.Done) / tasks.Count(t => t.AssigneeUserId == e.EmployeeId) * 100 
                            : 0,
                        Rank = 0
                    })
                    .OrderByDescending(e => e.KpiScore)
                    .ThenByDescending(e => e.TaskCompletionRate)
                    .Take(10)
                    .ToList();

                // إضافة الرتب
                for (int i = 0; i < leaderboard.Count; i++)
                {
                    leaderboard[i].Rank = i + 1;
                }

                return new EmployeeLeaderboardDto { TopPerformers = leaderboard };
            }
            catch (Exception ex)
            {
                // تسجيل الخطأ للتشخيص
                Console.WriteLine($"EmployeeLeaderboard Error: {ex}");
                throw;
            }
        }
    }
}
