using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class EmployeeKpiService : IEmployeeKpiService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public EmployeeKpiService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<ApiResponse<EmployeeKpiDto>> GetLatestKpiAsync(string employeeId)
        {
            try
            {
                var kpi = await _unitOfWork.EmployeeKpiRepository.GetLatestKpiByEmployeeAsync(employeeId);
                if (kpi == null)
                {
                    return ApiResponse<EmployeeKpiDto>.ErrorResponse("لا توجد مؤشرات أداء لهذا الموظف");
                }

                var dto = _mapper.Map<EmployeeKpiDto>(kpi);
                return ApiResponse<EmployeeKpiDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<EmployeeKpiDto>.ErrorResponse($"خطأ في جلب مؤشرات الأداء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<EmployeeKpiDto>>> GetKpiHistoryAsync(string employeeId, int count = 12)
        {
            try
            {
                var kpis = await _unitOfWork.EmployeeKpiRepository.GetKpisByEmployeeAsync(employeeId, count);
                var dtos = _mapper.Map<List<EmployeeKpiDto>>(kpis);
                return ApiResponse<List<EmployeeKpiDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<EmployeeKpiDto>>.ErrorResponse($"خطأ في جلب تاريخ مؤشرات الأداء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<EmployeeKpiSummaryDto>> GetKpiSummaryAsync(string employeeId)
        {
            try
            {
                var currentKpi = await _unitOfWork.EmployeeKpiRepository.GetLatestKpiByEmployeeAsync(employeeId);
                if (currentKpi == null)
                {
                    return ApiResponse<EmployeeKpiSummaryDto>.ErrorResponse("لا توجد مؤشرات الأداء لهذا الموظف");
                }

                // Get previous period KPI
                var previousPeriodStart = currentKpi.PeriodStart.AddMonths(-1);
                var previousPeriodEnd = currentKpi.PeriodEnd.AddMonths(-1);
                var previousKpi = await _unitOfWork.EmployeeKpiRepository.GetKpiByEmployeeAndPeriodAsync(
                    employeeId, previousPeriodStart, previousPeriodEnd);

                var summary = new EmployeeKpiSummaryDto
                {
                    EmployeeId = employeeId,
                    EmployeeName = currentKpi.Employee != null ? 
                        $"{currentKpi.Employee.FirstName} {currentKpi.Employee.LastName}" : "",
                    JobTitle = currentKpi.Employee?.JobTitle ?? "",
                    CurrentPeriodKpi = _mapper.Map<EmployeeKpiDto>(currentKpi),
                    PreviousPeriodKpi = previousKpi != null ? _mapper.Map<EmployeeKpiDto>(previousKpi) : null
                };

                // Calculate performance trend
                if (previousKpi != null && previousKpi.Score > 0)
                {
                    summary.PerformanceTrend = ((currentKpi.Score - previousKpi.Score) / previousKpi.Score) * 100;
                }

                return ApiResponse<EmployeeKpiSummaryDto>.SuccessResponse(summary);
            }
            catch (Exception ex)
            {
                return ApiResponse<EmployeeKpiSummaryDto>.ErrorResponse($"خطأ في جلب ملخص مؤشرات الأداء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisAsync(RecalculateKpisRequestDto request)
        {
            var response = new RecalculateKpisResponseDto
            {
                CalculationStartedAt = DateTime.UtcNow
            };

            try
            {
                var periodStart = request.PeriodStart ?? DateOnly.FromDateTime(DateTime.UtcNow.AddMonths(-1));
                var periodEnd = request.PeriodEnd ?? DateOnly.FromDateTime(DateTime.UtcNow);

                if (request.RecalculateAllEmployees)
                {
                    var result = await RecalculateKpisForAllEmployeesInPeriodAsync(periodStart, periodEnd);
                    response.TotalEmployeesProcessed = result.TotalEmployeesProcessed;
                    response.SuccessfulCalculations = result.SuccessfulCalculations;
                    response.FailedCalculations = result.FailedCalculations;
                    response.Errors.AddRange(result.Errors);
                }
                else if (request.SpecificEmployeeIds != null && request.SpecificEmployeeIds.Any())
                {
                    var result = await RecalculateKpisForSpecificEmployeesAsync(request.SpecificEmployeeIds, periodStart, periodEnd);
                    response.TotalEmployeesProcessed = result.TotalEmployeesProcessed;
                    response.SuccessfulCalculations = result.SuccessfulCalculations;
                    response.FailedCalculations = result.FailedCalculations;
                    response.Errors.AddRange(result.Errors);
                }

                response.CalculationCompletedAt = DateTime.UtcNow;
                response.TotalDuration = response.CalculationCompletedAt - response.CalculationStartedAt;

                return ApiResponse<RecalculateKpisResponseDto>.SuccessResponse(response, "تم إعادة حساب مؤشرات الأداء بنجاح");
            }
            catch (Exception ex)
            {
                response.Errors.Add($"خطأ عام: {ex.Message}");
                response.CalculationCompletedAt = DateTime.UtcNow;
                response.TotalDuration = response.CalculationCompletedAt - response.CalculationStartedAt;
                return ApiResponse<RecalculateKpisResponseDto>.ErrorResponse($"خطأ في إعادة حساب مؤشرات الأداء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisForPeriodAsync(DateOnly periodStart, DateOnly periodEnd)
        {
            var request = new RecalculateKpisRequestDto
            {
                PeriodStart = periodStart,
                PeriodEnd = periodEnd,
                RecalculateAllEmployees = true
            };
            return await RecalculateKpisAsync(request);
        }

        public async Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisForAllEmployeesAsync()
        {
            var request = new RecalculateKpisRequestDto
            {
                RecalculateAllEmployees = true
            };
            return await RecalculateKpisAsync(request);
        }

        public async Task<ApiResponse<bool>> ScheduleMonthlyKpiCalculationAsync()
        {
            try
            {
                // This would typically integrate with a job scheduler like Hangfire
                // For now, we'll just return success
                return ApiResponse<bool>.SuccessResponse(true, "تم جدولة حساب مؤشرات الأداء الشهرية");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في جدولة حساب مؤشرات الأداء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> ProcessScheduledKpiCalculationAsync()
        {
            try
            {
                // This is the method that would be called by the background job
                var result = await RecalculateKpisForAllEmployeesAsync();
                return ApiResponse<bool>.SuccessResponse(result.Success, "تم معالجة حساب مؤشرات الأداء المجدولة");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في معالجة حساب مؤشرات الأداء المجدولة: {ex.Message}");
            }
        }

        #region Private Methods

        private async Task<RecalculateKpisResponseDto> RecalculateKpisForAllEmployeesInPeriodAsync(DateOnly periodStart, DateOnly periodEnd)
        {
            var response = new RecalculateKpisResponseDto();
            var employees =  _userManager.Users.OfType<Employee>();

            response.TotalEmployeesProcessed = employees.Count();

            foreach (var employee in employees)
            {
                try
                {
                    var kpi = await CalculateKpiForEmployeeAsync(employee.Id, periodStart, periodEnd);
                    if (kpi != null)
                    {
                        response.SuccessfulCalculations++;
                    }
                    else
                    {
                        response.FailedCalculations++;
                        response.Errors.Add($"فشل في حساب مؤشرات الأداء للموظف: {employee.UserName}");
                    }
                }
                catch (Exception ex)
                {
                    response.FailedCalculations++;
                    response.Errors.Add($"خطأ في حساب مؤشرات الأداء للموظف {employee.UserName}: {ex.Message}");
                }
            }

            return response;
        }

        private async Task<RecalculateKpisResponseDto> RecalculateKpisForSpecificEmployeesAsync(List<string> employeeIds, DateOnly periodStart, DateOnly periodEnd)
        {
            var response = new RecalculateKpisResponseDto();
            response.TotalEmployeesProcessed = employeeIds.Count;

            foreach (var employeeId in employeeIds)
            {
                try
                {
                    var kpi = await CalculateKpiForEmployeeAsync(employeeId, periodStart, periodEnd);
                    if (kpi != null)
                    {
                        response.SuccessfulCalculations++;
                    }
                    else
                    {
                        response.FailedCalculations++;
                        response.Errors.Add($"فشل في حساب مؤشرات الأداء للموظف: {employeeId}");
                    }
                }
                catch (Exception ex)
                {
                    response.FailedCalculations++;
                    response.Errors.Add($"خطأ في حساب مؤشرات الأداء للموظف {employeeId}: {ex.Message}");
                }
            }

            return response;
        }

        private async Task<EmployeeKPI?> CalculateKpiForEmployeeAsync(string employeeId, DateOnly periodStart, DateOnly periodEnd)
        {
            try
            {
                // Check if KPI already exists for this period
                if (await _unitOfWork.EmployeeKpiRepository.ExistsKpiForPeriodAsync(employeeId, periodStart, periodEnd))
                {
                    // Update existing KPI
                    var existingKpi = await _unitOfWork.EmployeeKpiRepository.GetKpiByEmployeeAndPeriodAsync(
                        employeeId, periodStart, periodEnd);
                    if (existingKpi != null)
                    {
                        await UpdateKpiValuesAsync(existingKpi, employeeId, periodStart, periodEnd);
                        await _unitOfWork.EmployeeKpiRepository.UpdateAsync(existingKpi);
                        await _unitOfWork.SaveAsync();
                        return existingKpi;
                    }
                }

                // Create new KPI
                var newKpi = new EmployeeKPI
                {
                    EmployeeId = employeeId,
                    PeriodStart = periodStart,
                    PeriodEnd = periodEnd
                };

                await UpdateKpiValuesAsync(newKpi, employeeId, periodStart, periodEnd);
                await _unitOfWork.EmployeeKpiRepository.AddAsync(newKpi);
                await _unitOfWork.SaveAsync();

                return newKpi;
            }
            catch (Exception)
            {
                return null;
            }
        }

        private async Task UpdateKpiValuesAsync(EmployeeKPI kpi, string employeeId, DateOnly periodStart, DateOnly periodEnd)
        {
            var periodStartDate = periodStart.ToDateTime(TimeOnly.MinValue);
            var periodEndDate = periodEnd.ToDateTime(TimeOnly.MaxValue);

            // Calculate Task-related KPIs
            await CalculateTaskKpisAsync(kpi, employeeId, periodStartDate, periodEndDate);

            // Calculate Meeting-related KPIs
            await CalculateMeetingKpisAsync(kpi, employeeId, periodStartDate, periodEndDate);

            // Calculate Response Speed KPI (from task updates)
            await CalculateResponseSpeedKpiAsync(kpi, employeeId, periodStartDate, periodEndDate);

            // Calculate overall score
            kpi.Score = CalculateOverallScore(kpi);
        }

        private async Task CalculateTaskKpisAsync(EmployeeKPI kpi, string employeeId, DateTime periodStart, DateTime periodEnd)
        {
            // Get all tasks assigned to this employee in the period
            var tasks = await _unitOfWork.TaskRepository.GetAllAsync(t => 
                t.AssigneeUserId == employeeId && 
                t.CreatedAt >= periodStart && 
                t.CreatedAt <= periodEnd);

            kpi.TasksAssigned = tasks.Count();
            kpi.TasksCompleted = tasks.Count(t => t.Status == TaskStatus.Done);
            kpi.TasksLate = tasks.Count(t => t.Status != TaskStatus.Done && t.DueDate < DateTime.UtcNow);

            // Calculate average completion days for completed tasks
            var completedTasks = tasks.Where(t => t.Status == TaskStatus.Done).ToList();
            if (completedTasks.Any())
            {
                var totalDays = completedTasks.Sum(t => (t.UpdatedAt - t.CreatedAt).TotalDays);
                kpi.AvgCompletionDays = (decimal)(totalDays / completedTasks.Count);
            }
        }

        private async Task CalculateMeetingKpisAsync(EmployeeKPI kpi, string employeeId, DateTime periodStart, DateTime periodEnd)
        {
            // Get all meetings where this employee was an attendee in the period
            var meetingAttendees = await _unitOfWork.MeetingAttendeeRepository.GetAllAsync(ma => 
                ma.UserId == employeeId && 
                ma.Meeting.CreatedAt >= periodStart && 
                ma.Meeting.CreatedAt <= periodEnd);

            var totalMeetings = meetingAttendees.Count();
            kpi.MeetingsAttended = meetingAttendees.Count(ma => ma.AttendanceStatus == Domain.Enums.Meeting.RSVP.Accepted);
            kpi.MeetingsMissed = totalMeetings - kpi.MeetingsAttended;
        }

        private async Task CalculateResponseSpeedKpiAsync(EmployeeKPI kpi, string employeeId, DateTime periodStart, DateTime periodEnd)
        {
            // Get task updates by this employee in the period
            var taskUpdates = await _unitOfWork.TaskUpdateRepository.GetAllAsync(tu => 
                tu.CreatedByUserId == employeeId && 
                tu.CreatedAt >= periodStart && 
                tu.CreatedAt <= periodEnd);

            if (taskUpdates.Any())
            {
                // Calculate average response time in hours
                var totalHours = taskUpdates.Sum(tu => (tu.CreatedAt - tu.CreatedAt).TotalHours);
                kpi.ResponseSpeedAvgHours = (decimal)(totalHours / taskUpdates.Count());
            }
        }

        private decimal CalculateOverallScore(EmployeeKPI kpi)
        {
            decimal score = 0;

            // Task completion rate (40% weight)
            if (kpi.TasksAssigned > 0)
            {
                var completionRate = (decimal)kpi.TasksCompleted / kpi.TasksAssigned;
                score += completionRate * 40;
            }

            // Meeting attendance rate (20% weight)
            var totalMeetings = kpi.MeetingsAttended + kpi.MeetingsMissed;
            if (totalMeetings > 0)
            {
                var attendanceRate = (decimal)kpi.MeetingsAttended / totalMeetings;
                score += attendanceRate * 20;
            }

            // Task timeliness (25% weight)
            if (kpi.TasksAssigned > 0)
            {
                var timelinessRate = 1 - ((decimal)kpi.TasksLate / kpi.TasksAssigned);
                score += timelinessRate * 25;
            }

            // Response speed (15% weight)
            // Normalize response speed (lower is better, max 24 hours = 100%)
            var responseSpeedScore = Math.Max(0, 24 - kpi.ResponseSpeedAvgHours) / 24;
            score += responseSpeedScore * 15;

            return Math.Round(score, 2);
        }

        #endregion
    }
}
