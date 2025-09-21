using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Calendar;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class CalendarService : ICalendarService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CalendarService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ApiResponse<List<CalendarEventDto>>> GetUserEventsAsync(string userId)
        {
            try
            {
                var userMeetings = await GetUserMeetingsAsync(userId);
                var userTasks = await GetUserTasksAsync(userId);
                var userVisits = await GetUserVisitsAsync(userId);
                var userTravels = await GetUserTravelsAsync(userId);

                var allEvents = new List<CalendarEventDto>();
                allEvents.AddRange(userMeetings);
                allEvents.AddRange(userTasks);
                allEvents.AddRange(userVisits);
                allEvents.AddRange(userTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.StartDate).ToList();

                return ApiResponse<List<CalendarEventDto>>.SuccessResponse(orderedEvents);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<CalendarEventDto>>.ErrorResponse($"خطأ في جلب أحداث المستخدم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<CalendarEventDto>>> GetAllSystemEventsAsync()
        {
            try
            {
                var allMeetings = await GetAllMeetingsAsync();
                var allTasks = await GetAllTasksAsync();
                var allVisits = await GetAllVisitsAsync();
                var allTravels = await GetAllTravelsAsync();

                var allEvents = new List<CalendarEventDto>();
                allEvents.AddRange(allMeetings);
                allEvents.AddRange(allTasks);
                allEvents.AddRange(allVisits);
                allEvents.AddRange(allTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.StartDate).ToList();

                return ApiResponse<List<CalendarEventDto>>.SuccessResponse(orderedEvents);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<CalendarEventDto>>.ErrorResponse($"خطأ في جلب جميع الأحداث: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CalendarStatsDto>> GetCalendarStatsAsync(string userId, CalendarPeriod period = CalendarPeriod.Day)
        {
            try
            {
                var (startDate, endDate) = GetDateRange(period);
                
                var stats = new CalendarStatsDto
                {
                    Period = period,
                    PeriodName = GetPeriodName(period),
                    StartDate = startDate,
                    EndDate = endDate,
                    MeetingsCount = await GetMeetingsCountAsync(userId, startDate, endDate),
                    TasksCount = await GetTasksCountAsync(userId, startDate, endDate),
                    VisitsCount = await GetVisitsCountAsync(userId, startDate, endDate),
                    TravelsCount = await GetTravelsCountAsync(userId, startDate, endDate),
                    TotalEventsCount = 0
                };

                stats.TotalEventsCount = stats.MeetingsCount + stats.TasksCount + stats.VisitsCount + stats.TravelsCount;

                return ApiResponse<CalendarStatsDto>.SuccessResponse(stats);
            }
            catch (Exception ex)
            {
                return ApiResponse<CalendarStatsDto>.ErrorResponse($"خطأ في جلب إحصائيات التقويم: {ex.Message}");
            }
        }

        #region Private Methods

        private async Task<IEnumerable<CalendarEventDto>> GetUserMeetingsAsync(string userId)
        {
            var currentDate = DateTime.UtcNow;
            var meetingsQuery = await _unitOfWork.MeetingRepository.GetAllAsync(m => 
                (m.OrganizerUserId == userId || m.Attendees.Any(a => a.UserId == userId)) &&
                m.StartAt >= currentDate); // فقط الاجتماعات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(meetingsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetUserTasksAsync(string userId)
        {
            var tasksQuery = await _unitOfWork.TaskRepository.GetAllAsync(t => 
                (t.AssigneeUserId == userId || t.CreatedByUserId == userId) &&
                (t.Status == Domain.Enums.Tasks.TaskStatus.New || 
                 t.Status == Domain.Enums.Tasks.TaskStatus.In_Progress)); // فقط المهام النشطة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(tasksQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllMeetingsAsync()
        {
            var currentDate = DateTime.UtcNow;
            var meetingsQuery = await _unitOfWork.MeetingRepository.GetAllAsync(m => 
                m.StartAt >= currentDate); // فقط الاجتماعات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(meetingsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllTasksAsync()
        {
            var tasksQuery = await _unitOfWork.TaskRepository.GetAllAsync(t => 
                t.Status == Domain.Enums.Tasks.TaskStatus.New || 
                t.Status == Domain.Enums.Tasks.TaskStatus.In_Progress); // فقط المهام النشطة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(tasksQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetUserVisitsAsync(string userId)
        {
            var visitsQuery = await _unitOfWork.VisitRepository.GetAllAsync(v => 
                v.CreatedBy == userId &&
                v.VisitDate >= DateTime.UtcNow); // فقط الزيارات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(visitsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetUserTravelsAsync(string userId)
        {
            var travelsQuery = await _unitOfWork.TravelRepository.GetAllAsync(t => 
                t.CreatedBy == userId &&
                t.StartDate >= DateTime.UtcNow); // فقط السفريات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(travelsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllVisitsAsync()
        {
            var visitsQuery = await _unitOfWork.VisitRepository.GetAllAsync(v => 
                v.VisitDate >= DateTime.UtcNow); // فقط الزيارات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(visitsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllTravelsAsync()
        {
            var travelsQuery = await _unitOfWork.TravelRepository.GetAllAsync(t => 
                t.StartDate >= DateTime.UtcNow); // فقط السفريات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(travelsQuery);
        }

        private (DateTime startDate, DateTime endDate) GetDateRange(CalendarPeriod period)
        {
            var now = DateTime.UtcNow;
            var startOfDay = new DateTime(now.Year, now.Month, now.Day, 0, 0, 0, DateTimeKind.Utc);
            
            return period switch
            {
                CalendarPeriod.Day => (startOfDay, startOfDay.AddDays(1).AddTicks(-1)),
                CalendarPeriod.Week => (startOfDay.AddDays(-(int)startOfDay.DayOfWeek), startOfDay.AddDays(7 - (int)startOfDay.DayOfWeek).AddTicks(-1)),
                CalendarPeriod.Month => (new DateTime(now.Year, now.Month, 1), new DateTime(now.Year, now.Month, DateTime.DaysInMonth(now.Year, now.Month), 23, 59, 59, DateTimeKind.Utc)),
                _ => (startOfDay, startOfDay.AddDays(1).AddTicks(-1))
            };
        }

        private string GetPeriodName(CalendarPeriod period)
        {
            return period switch
            {
                CalendarPeriod.Day => "اليوم",
                CalendarPeriod.Week => "الأسبوع",
                CalendarPeriod.Month => "الشهر",
                _ => "اليوم"
            };
        }

        private async Task<int> GetMeetingsCountAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var meetings = await _unitOfWork.MeetingRepository.GetAllAsync(m => 
                (m.OrganizerUserId == userId || m.Attendees.Any(a => a.UserId == userId)) &&
                m.StartAt >= startDate && m.StartAt <= endDate);
            
            return meetings.Count();
        }

        private async Task<int> GetTasksCountAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var tasks = await _unitOfWork.TaskRepository.GetAllAsync(t => 
                (t.AssigneeUserId == userId || t.CreatedByUserId == userId) &&
                t.CreatedAt >= startDate && t.CreatedAt <= endDate);
            
            return tasks.Count();
        }

        private async Task<int> GetVisitsCountAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var visits = await _unitOfWork.VisitRepository.GetAllAsync(v => 
                v.CreatedBy == userId &&
                v.VisitDate >= startDate && v.VisitDate <= endDate);
            
            return visits.Count();
        }

        private async Task<int> GetTravelsCountAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var travels = await _unitOfWork.TravelRepository.GetAllAsync(t => 
                t.CreatedBy == userId &&
                t.StartDate >= startDate && t.StartDate <= endDate);
            
            return travels.Count();
        }

        #endregion
    }
}
