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

        public async Task<ApiResponse<CalendarStatsDto>> GetCalendarStatsAsync(string userId, CalendarPeriod period = CalendarPeriod.Day, DateTime? specificDate = null)
        {
            try
            {
                var (startDate, endDate) = GetDateRange(period, specificDate);
                
                var stats = new CalendarStatsDto
                {
                    Period = period,
                    PeriodName = GetPeriodName(period, specificDate),
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

        /// <summary>
        /// جلب تفاصيل كاملة لأحداث المستخدم
        /// </summary>
        public async Task<ApiResponse<DetailedCalendarTableDto>> GetUserDetailedEventsAsync(string userId, DateTime? fromDate = null, DateTime? toDate = null)
        {
            try
            {
                var startDate = fromDate ?? DateTime.UtcNow.Date;
                var endDate = toDate ?? DateTime.UtcNow.Date.AddDays(30);

                var userMeetings = await GetUserDetailedMeetingsAsync(userId, startDate, endDate);
                var userTasks = await GetUserDetailedTasksAsync(userId, startDate, endDate);
                var userVisits = await GetUserDetailedVisitsAsync(userId, startDate, endDate);
                var userTravels = await GetUserDetailedTravelsAsync(userId, startDate, endDate);

                var allEvents = new List<DetailedCalendarEventDto>();
                allEvents.AddRange(userMeetings);
                allEvents.AddRange(userTasks);
                allEvents.AddRange(userVisits);
                allEvents.AddRange(userTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.StartDate).ToList();

                var result = new DetailedCalendarTableDto
                {
                    Events = orderedEvents,
                    TotalCount = orderedEvents.Count,
                    FromDate = startDate,
                    ToDate = endDate,
                    PeriodDescription = $"من {startDate:yyyy/MM/dd} إلى {endDate:yyyy/MM/dd}"
                };

                return ApiResponse<DetailedCalendarTableDto>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<DetailedCalendarTableDto>.ErrorResponse($"خطأ في جلب تفاصيل أحداث المستخدم: {ex.Message}");
            }
        }

        /// <summary>
        /// جلب تفاصيل كاملة لجميع أحداث النظام
        /// </summary>
        public async Task<ApiResponse<DetailedCalendarTableDto>> GetAllDetailedSystemEventsAsync(DateTime? fromDate = null, DateTime? toDate = null)
        {
            try
            {
                var startDate = fromDate ?? DateTime.UtcNow.Date;
                var endDate = toDate ?? DateTime.UtcNow.Date.AddDays(30);

                var allMeetings = await GetAllDetailedMeetingsAsync(startDate, endDate);
                var allTasks = await GetAllDetailedTasksAsync(startDate, endDate);
                var allVisits = await GetAllDetailedVisitsAsync(startDate, endDate);
                var allTravels = await GetAllDetailedTravelsAsync(startDate, endDate);

                var allEvents = new List<DetailedCalendarEventDto>();
                allEvents.AddRange(allMeetings);
                allEvents.AddRange(allTasks);
                allEvents.AddRange(allVisits);
                allEvents.AddRange(allTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.StartDate).ToList();

                var result = new DetailedCalendarTableDto
                {
                    Events = orderedEvents,
                    TotalCount = orderedEvents.Count,
                    FromDate = startDate,
                    ToDate = endDate,
                    PeriodDescription = $"من {startDate:yyyy/MM/dd} إلى {endDate:yyyy/MM/dd}"
                };

                return ApiResponse<DetailedCalendarTableDto>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<DetailedCalendarTableDto>.ErrorResponse($"خطأ في جلب تفاصيل جميع الأحداث: {ex.Message}");
            }
        }

        #region Private Methods

        private async Task<IEnumerable<CalendarEventDto>> GetUserMeetingsAsync(string userId)
        {
            var currentDate = DateTime.UtcNow;
            var meetingsQuery = await _unitOfWork.MeetingRepository.GetAllAsync(m => 
                (m.OrganizerUserId == userId || m.Attendees.Any(a => a.UserId == userId)) ); // فقط الاجتماعات القادمة

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
            var meetingsQuery = await _unitOfWork.MeetingRepository.GetAllAsync(); // فقط الاجتماعات القادمة

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
                v.CreatedBy == userId); // فقط الزيارات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(visitsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetUserTravelsAsync(string userId)
        {
            var travelsQuery = await _unitOfWork.TravelRepository.GetAllAsync(t => 
                t.CreatedBy == userId); // فقط السفريات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(travelsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllVisitsAsync()
        {
            var visitsQuery = await _unitOfWork.VisitRepository.GetAllAsync(); // فقط الزيارات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(visitsQuery);
        }

        private async Task<IEnumerable<CalendarEventDto>> GetAllTravelsAsync()
        {
            var travelsQuery = await _unitOfWork.TravelRepository.GetAllAsync(); // فقط السفريات القادمة

            return _mapper.Map<IEnumerable<CalendarEventDto>>(travelsQuery);
        }

        private (DateTime startDate, DateTime endDate) GetDateRange(CalendarPeriod period, DateTime? specificDate = null)
        {
            var targetDate = specificDate ?? DateTime.UtcNow;
            var startOfDay = new DateTime(targetDate.Year, targetDate.Month, targetDate.Day, 0, 0, 0, DateTimeKind.Utc);
            
            return period switch
            {
                CalendarPeriod.Day => (startOfDay, startOfDay.AddDays(1).AddTicks(-1)),
                CalendarPeriod.Week => (startOfDay.AddDays(-(int)startOfDay.DayOfWeek), startOfDay.AddDays(7 - (int)startOfDay.DayOfWeek).AddTicks(-1)),
                CalendarPeriod.Month => (new DateTime(targetDate.Year, targetDate.Month, 1), new DateTime(targetDate.Year, targetDate.Month, DateTime.DaysInMonth(targetDate.Year, targetDate.Month), 23, 59, 59, DateTimeKind.Utc)),
                _ => (startOfDay, startOfDay.AddDays(1).AddTicks(-1))
            };
        }

        private string GetPeriodName(CalendarPeriod period, DateTime? specificDate = null)
        {
            var targetDate = specificDate ?? DateTime.UtcNow;
            var monthNames = new[] { "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
                                   "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" };
            
            return period switch
            {
                CalendarPeriod.Day => $"اليوم {targetDate.Day}/{targetDate.Month}/{targetDate.Year}",
                CalendarPeriod.Week => $"أسبوع {targetDate.Day}/{targetDate.Month}/{targetDate.Year}",
                CalendarPeriod.Month => $"شهر {monthNames[targetDate.Month - 1]} {targetDate.Year}",
                _ => $"اليوم {targetDate.Day}/{targetDate.Month}/{targetDate.Year}"
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

        // Detailed Methods
        private async Task<List<DetailedCalendarEventDto>> GetUserDetailedMeetingsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var meetings = await _unitOfWork.MeetingRepository.GetAllWithDetailsAsync(m => 
                (m.OrganizerUserId == userId || m.Attendees.Any(a => a.UserId == userId)) &&
                m.StartAt >= startDate && m.StartAt <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var meeting in meetings)
            {
                var detailedEvent = await MapToDetailedEventAsync(meeting, EventType.Meeting);
                detailedEvent.MeetingType = meeting.Type.ToString();
                detailedEvent.Attendees = meeting.Attendees.Select(a => a.User?.FirstName + " " + a.User?.LastName).ToList();
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetUserDetailedTasksAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var tasks = await _unitOfWork.TaskRepository.GetTasksWithDetailsAsync();
            tasks = tasks.Where(t => 
                (t.AssigneeUserId == userId || t.CreatedByUserId == userId) &&
                t.CreatedAt >= startDate && t.CreatedAt <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var task in tasks)
            {
                var detailedEvent = await MapToDetailedEventAsync(task, EventType.Task);
                detailedEvent.TaskCategory = null; // TaskItem doesn't have Category property
                detailedEvent.AssignedEmployeeName = task.Assignee?.FirstName + " " + task.Assignee?.LastName ?? "";
                detailedEvent.AssignedEmployeeEmail = task.Assignee?.Email ?? "";
                detailedEvent.AssignedEmployeePhone = task.Assignee?.PhoneNumber ?? "";
                detailedEvent.AssignedEmployeeDepartment = task.Assignee?.Department?.NameAr ?? "";
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetUserDetailedVisitsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var visits = await _unitOfWork.VisitRepository.GetAllWithDetailsAsync(v => 
                v.CreatedBy == userId &&
                v.VisitDate >= startDate && v.VisitDate <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var visit in visits)
            {
                var detailedEvent = await MapToDetailedEventAsync(visit, EventType.Visit);
                detailedEvent.VisitPurpose = visit.Purpose;
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetUserDetailedTravelsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var travels = await _unitOfWork.TravelRepository.GetAllWithDetailsAsync(t => 
                t.CreatedBy == userId &&
                t.StartDate >= startDate && t.StartDate <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var travel in travels)
            {
                var detailedEvent = await MapToDetailedEventAsync(travel, EventType.Travel);
                detailedEvent.TravelDestination = travel.Destination;
                detailedEvent.TravelPurpose = travel.Purpose;
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetAllDetailedMeetingsAsync(DateTime startDate, DateTime endDate)
        {
            var meetings = await _unitOfWork.MeetingRepository.GetAllWithDetailsAsync(m => 
                m.StartAt >= startDate && m.StartAt <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var meeting in meetings)
            {
                var detailedEvent = await MapToDetailedEventAsync(meeting, EventType.Meeting);
                detailedEvent.MeetingType = meeting.Type.ToString();
                detailedEvent.Attendees = meeting.Attendees.Select(a => a.User?.FirstName + " " + a.User?.LastName).ToList();
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetAllDetailedTasksAsync(DateTime startDate, DateTime endDate)
        {
            var tasks = await _unitOfWork.TaskRepository.GetTasksWithDetailsAsync();
            tasks = tasks.Where(t => 
                t.CreatedAt >= startDate && t.CreatedAt <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var task in tasks)
            {
                var detailedEvent = await MapToDetailedEventAsync(task, EventType.Task);
                detailedEvent.TaskCategory = null; // TaskItem doesn't have Category property
                detailedEvent.AssignedEmployeeName = task.Assignee?.FirstName + " " + task.Assignee?.LastName ?? "";
                detailedEvent.AssignedEmployeeEmail = task.Assignee?.Email ?? "";
                detailedEvent.AssignedEmployeePhone = task.Assignee?.PhoneNumber ?? "";
                detailedEvent.AssignedEmployeeDepartment = task.Assignee?.Department?.NameAr ?? "";
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetAllDetailedVisitsAsync(DateTime startDate, DateTime endDate)
        {
            var visits = await _unitOfWork.VisitRepository.GetAllWithDetailsAsync(v => 
                v.VisitDate >= startDate && v.VisitDate <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var visit in visits)
            {
                var detailedEvent = await MapToDetailedEventAsync(visit, EventType.Visit);
                detailedEvent.VisitPurpose = visit.Purpose;
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<List<DetailedCalendarEventDto>> GetAllDetailedTravelsAsync(DateTime startDate, DateTime endDate)
        {
            var travels = await _unitOfWork.TravelRepository.GetAllWithDetailsAsync(t => 
                t.StartDate >= startDate && t.StartDate <= endDate);

            var detailedEvents = new List<DetailedCalendarEventDto>();
            
            foreach (var travel in travels)
            {
                var detailedEvent = await MapToDetailedEventAsync(travel, EventType.Travel);
                detailedEvent.TravelDestination = travel.Destination;
                detailedEvent.TravelPurpose = travel.Purpose;
                detailedEvents.Add(detailedEvent);
            }

            return detailedEvents;
        }

        private async Task<DetailedCalendarEventDto> MapToDetailedEventAsync(object entity, EventType eventType)
        {
            var detailedEvent = new DetailedCalendarEventDto
            {
                Type = eventType,
                TypeText = GetEventTypeText(eventType)
            };

            // تعيين البيانات الأساسية حسب نوع الكيان
            switch (entity)
            {
                case Domain.Entity.Meeting.Meeting meeting:
                    detailedEvent.Id = meeting.Id;
                    detailedEvent.Title = meeting.Title;
                    detailedEvent.Description = meeting.Agenda;
                    detailedEvent.StartDate = meeting.StartAt;
                    detailedEvent.EndDate = meeting.EndAt;
                    detailedEvent.Location = GetMeetingLocation(meeting);
                    detailedEvent.OnlineUrl = meeting.OnlineUrl;
                    detailedEvent.Status = MapToEventStatus(meeting.Status);
                    detailedEvent.OrganizerName = meeting.Organizer?.FirstName + " " + meeting.Organizer?.LastName ?? "";
                    detailedEvent.AssigneeName = detailedEvent.OrganizerName;
                    detailedEvent.DepartmentName = meeting.Organizer?.Department?.NameAr ?? "";
                    detailedEvent.Priority = 1; // Default priority for meetings
                    detailedEvent.PriorityText = GetPriorityText(detailedEvent.Priority);
                    detailedEvent.CreatedAt = meeting.CreatedAt;
                    detailedEvent.Color = GetEventColor(eventType);
                    detailedEvent.Subject = meeting.Title;
                    detailedEvent.EventTypeName = "اجتماع";
                    detailedEvent.OriginalEntityId = meeting.Id;
                    break;

                case Domain.Entity.Tasks.TaskItem task:
                    detailedEvent.Id = task.Id;
                    detailedEvent.Title = task.Title;
                    detailedEvent.Description = task.Description;
                    detailedEvent.StartDate = task.CreatedAt;
                    detailedEvent.EndDate = task.DueDate;
                    detailedEvent.Location = null; // TaskItem doesn't have Location property
                    detailedEvent.Status = MapToEventStatus(task.Status);
                    detailedEvent.OrganizerName = task.CreatedBy?.FirstName + " " + task.CreatedBy?.LastName ?? "";
                    detailedEvent.AssigneeName = task.Assignee?.FirstName + " " + task.Assignee?.LastName ?? "";
                    detailedEvent.DepartmentName = task.Assignee?.Department?.NameAr ?? "";
                    detailedEvent.Priority = (int)task.Priority;
                    detailedEvent.PriorityText = GetPriorityText(detailedEvent.Priority);
                    detailedEvent.CreatedAt = task.CreatedAt;
                    detailedEvent.Color = GetEventColor(eventType);
                    detailedEvent.Subject = task.Title;
                    detailedEvent.EventTypeName = "مهمة";
                    detailedEvent.OriginalEntityId = task.Id;
                    break;

                case Domain.Entity.Visit.Visit visit:
                    detailedEvent.Id = visit.Id;
                    detailedEvent.Title = visit.Title;
                    detailedEvent.Description = visit.Purpose;
                    detailedEvent.StartDate = visit.VisitDate;
                    detailedEvent.EndDate = visit.VisitDate.AddHours(1); // Default 1 hour duration
                    detailedEvent.Location = visit.Address;
                    detailedEvent.Status = EventStatus.Scheduled;
                    detailedEvent.StatusText = "مجدول";
                    detailedEvent.OrganizerName = visit.CreatedByUser?.FirstName + " " + visit.CreatedByUser?.LastName ?? "";
                    detailedEvent.AssigneeName = detailedEvent.OrganizerName;
                    detailedEvent.DepartmentName = visit.CreatedByUser?.Department?.NameAr ?? "";
                    detailedEvent.Priority = 1;
                    detailedEvent.PriorityText = "عادي";
                    detailedEvent.CreatedAt = visit.CreatedAt;
                    detailedEvent.Color = GetEventColor(eventType);
                    detailedEvent.Subject = visit.Title;
                    detailedEvent.EventTypeName = "زيارة";
                    detailedEvent.OriginalEntityId = visit.Id;
                    break;

                case Domain.Entity.Visit.Travel travel:
                    detailedEvent.Id = travel.Id;
                    detailedEvent.Title = travel.Title;
                    detailedEvent.Description = travel.Purpose;
                    detailedEvent.StartDate = travel.StartDate;
                    detailedEvent.EndDate = travel.EndDate;
                    detailedEvent.Location = travel.Destination;
                    detailedEvent.Status = EventStatus.Scheduled; // Default status for travel
                    detailedEvent.OrganizerName = travel.CreatedByUser?.FirstName + " " + travel.CreatedByUser?.LastName ?? "";
                    detailedEvent.AssigneeName = detailedEvent.OrganizerName;
                    detailedEvent.DepartmentName = travel.CreatedByUser?.Department?.NameAr ?? "";
                    detailedEvent.Priority = 1; // Default priority
                    detailedEvent.PriorityText = GetPriorityText(detailedEvent.Priority);
                    detailedEvent.CreatedAt = travel.CreatedAt;
                    detailedEvent.Color = GetEventColor(eventType);
                    detailedEvent.Subject = travel.Title;
                    detailedEvent.EventTypeName = "سفر";
                    detailedEvent.OriginalEntityId = travel.Id;
                    break;
            }

            // تعيين التفاصيل المشتركة
            detailedEvent.DayName = GetDayNameInArabic(detailedEvent.StartDate);
            detailedEvent.DateFormatted = detailedEvent.StartDate.ToString("yyyy/MM/dd");
            detailedEvent.TimeFormatted = detailedEvent.StartDate.ToString("HH:mm");
            detailedEvent.StatusText = GetEventStatusText(detailedEvent.Status);
            
            if (detailedEvent.EndDate.HasValue)
            {
                var duration = detailedEvent.EndDate.Value - detailedEvent.StartDate;
                detailedEvent.DurationFormatted = FormatDuration(duration);
            }

            return detailedEvent;
        }

        private string GetDayNameInArabic(DateTime date)
        {
            var days = new[] { "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت" };
            return days[(int)date.DayOfWeek];
        }

        private string GetEventTypeText(EventType eventType)
        {
            return eventType switch
            {
                EventType.Meeting => "اجتماع",
                EventType.Task => "مهمة",
                EventType.Visit => "زيارة",
                EventType.Travel => "سفر",
                _ => "غير محدد"
            };
        }

        private string GetEventStatusText(EventStatus status)
        {
            return status switch
            {
                EventStatus.Scheduled => "مجدول",
                EventStatus.InProgress => "قيد التنفيذ",
                EventStatus.Completed => "مكتمل",
                EventStatus.Cancelled => "ملغي",
                EventStatus.Overdue => "متأخر",
                _ => "غير محدد"
            };
        }

        private string GetPriorityText(int priority)
        {
            return priority switch
            {
                1 => "عادي",
                2 => "متوسط",
                3 => "عالي",
                4 => "عاجل",
                _ => "غير محدد"
            };
        }

        private string GetEventColor(EventType eventType)
        {
            return eventType switch
            {
                EventType.Meeting => "#3498db",
                EventType.Task => "#e74c3c",
                EventType.Visit => "#f39c12",
                EventType.Travel => "#9b59b6",
                _ => "#95a5a6"
            };
        }

        private string FormatDuration(TimeSpan duration)
        {
            if (duration.TotalHours >= 1)
                return $"{(int)duration.TotalHours} ساعة و {duration.Minutes} دقيقة";
            else
                return $"{duration.Minutes} دقيقة";
        }

        private EventStatus MapToEventStatus(object status)
        {
            // Mapping logic for different status types
            return status?.ToString() switch
            {
                "New" => EventStatus.Scheduled,
                "InProgress" => EventStatus.InProgress,
                "Completed" => EventStatus.Completed,
                "Cancelled" => EventStatus.Cancelled,
                "Overdue" => EventStatus.Overdue,
                _ => EventStatus.Scheduled
            };
        }


        #endregion

        #region Helper Methods

        private string GetMeetingLocation(Domain.Entity.Meeting.Meeting meeting)
        {
            var locations = new List<string>();
            
            if (!string.IsNullOrWhiteSpace(meeting.LocationText))
                locations.Add(meeting.LocationText);
                
            if (!string.IsNullOrWhiteSpace(meeting.OnlineUrl))
                locations.Add($"أونلاين: {meeting.OnlineUrl}");
            
            return locations.Count > 0 ? string.Join(" | ", locations) : "";
        }

        #endregion

        #region Simple Calendar Events (جدول بسيط)

        public async Task<ApiResponse<SimpleCalendarTableDto>> GetUserSimpleEventsAsync(string userId, DateTime? fromDate = null, DateTime? toDate = null)
        {
            try
            {
                var startDate = fromDate ?? DateTime.UtcNow.Date;
                var endDate = toDate ?? DateTime.UtcNow.Date.AddDays(30);

                var userMeetings = await GetUserSimpleMeetingsAsync(userId, startDate, endDate);
                var userTasks = await GetUserSimpleTasksAsync(userId, startDate, endDate);
                var userVisits = await GetUserSimpleVisitsAsync(userId, startDate, endDate);
                var userTravels = await GetUserSimpleTravelsAsync(userId, startDate, endDate);

                var allEvents = new List<SimpleCalendarEventDto>();
                allEvents.AddRange(userMeetings);
                allEvents.AddRange(userTasks);
                allEvents.AddRange(userVisits);
                allEvents.AddRange(userTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.DateFormatted).ToList();

                var result = new SimpleCalendarTableDto
                {
                    Events = orderedEvents,
                    TotalCount = orderedEvents.Count,
                    FromDate = startDate,
                    ToDate = endDate,
                    PeriodDescription = $"من {startDate:yyyy/MM/dd} إلى {endDate:yyyy/MM/dd}"
                };

                return ApiResponse<SimpleCalendarTableDto>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<SimpleCalendarTableDto>.ErrorResponse($"خطأ في جلب أحداث المستخدم المبسطة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<SimpleCalendarTableDto>> GetAllSimpleSystemEventsAsync(DateTime? fromDate = null, DateTime? toDate = null)
        {
            try
            {
                var startDate = fromDate ?? DateTime.UtcNow.Date;
                var endDate = toDate ?? DateTime.UtcNow.Date.AddDays(30);

                var allMeetings = await GetAllSimpleMeetingsAsync(startDate, endDate);
                var allTasks = await GetAllSimpleTasksAsync(startDate, endDate);
                var allVisits = await GetAllSimpleVisitsAsync(startDate, endDate);
                var allTravels = await GetAllSimpleTravelsAsync(startDate, endDate);

                var allEvents = new List<SimpleCalendarEventDto>();
                allEvents.AddRange(allMeetings);
                allEvents.AddRange(allTasks);
                allEvents.AddRange(allVisits);
                allEvents.AddRange(allTravels);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.DateFormatted).ToList();

                var result = new SimpleCalendarTableDto
                {
                    Events = orderedEvents,
                    TotalCount = orderedEvents.Count,
                    FromDate = startDate,
                    ToDate = endDate,
                    PeriodDescription = $"من {startDate:yyyy/MM/dd} إلى {endDate:yyyy/MM/dd}"
                };

                return ApiResponse<SimpleCalendarTableDto>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<SimpleCalendarTableDto>.ErrorResponse($"خطأ في جلب جميع الأحداث المبسطة: {ex.Message}");
            }
        }

        private async Task<List<SimpleCalendarEventDto>> GetUserSimpleMeetingsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var meetings = await _unitOfWork.MeetingRepository.GetAllWithDetailsAsync();
            meetings = meetings.Where(m => 
                (m.OrganizerUserId == userId || m.Attendees.Any(a => a.UserId == userId)) &&
                m.StartAt >= startDate && m.StartAt <= endDate);

            return meetings.Select(meeting => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(meeting.StartAt),
                DateFormatted = meeting.StartAt.ToString("yyyy/MM/dd"),
                Subject = meeting.Title,
                TimeFormatted = meeting.StartAt.ToString("hh:mm tt") + (meeting.EndAt.HasValue ? $" - {meeting.EndAt.Value:hh:mm tt}" : ""),
                Location = GetMeetingLocation(meeting),
                AssignedEmployeeName = meeting.Organizer?.FirstName + " " + meeting.Organizer?.LastName ?? "",
                EventTypeName = "اجتماع",
                OriginalEntityId = meeting.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetUserSimpleTasksAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var tasks = await _unitOfWork.TaskRepository.GetTasksWithDetailsAsync();
            tasks = tasks.Where(t => 
                (t.AssigneeUserId == userId || t.CreatedByUserId == userId) &&
                t.CreatedAt >= startDate && t.CreatedAt <= endDate);

            return tasks.Select(task => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(task.CreatedAt),
                DateFormatted = task.CreatedAt.ToString("yyyy/MM/dd"),
                Subject = task.Title,
                TimeFormatted = task.CreatedAt.ToString("hh:mm tt"),
                Location = "",
                AssignedEmployeeName = task.Assignee?.FirstName + " " + task.Assignee?.LastName ?? "",
                EventTypeName = "مهمة",
                OriginalEntityId = task.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetUserSimpleVisitsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var visits = await _unitOfWork.VisitRepository.GetAllWithDetailsAsync();
            visits = visits.Where(v => 
                v.CreatedBy == userId &&
                v.VisitDate >= startDate && v.VisitDate <= endDate);

            return visits.Select(visit => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(visit.VisitDate),
                DateFormatted = visit.VisitDate.ToString("yyyy/MM/dd"),
                Subject = visit.Title,
                TimeFormatted = visit.VisitDate.ToString("hh:mm tt"),
                Location = visit.Address,
                AssignedEmployeeName = visit.CreatedByUser?.FirstName + " " + visit.CreatedByUser?.LastName ?? "",
                EventTypeName = "زيارة",
                OriginalEntityId = visit.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetUserSimpleTravelsAsync(string userId, DateTime startDate, DateTime endDate)
        {
            var travels = await _unitOfWork.TravelRepository.GetAllWithDetailsAsync();
            travels = travels.Where(t => 
                t.CreatedBy == userId &&
                t.StartDate >= startDate && t.StartDate <= endDate);

            return travels.Select(travel => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(travel.StartDate),
                DateFormatted = travel.StartDate.ToString("yyyy/MM/dd"),
                Subject = travel.Title,
                TimeFormatted = travel.StartDate.ToString("hh:mm tt") + (travel.EndDate != travel.StartDate ? $" - {travel.EndDate:hh:mm tt}" : ""),
                Location = travel.Destination,
                AssignedEmployeeName = travel.CreatedByUser?.FirstName + " " + travel.CreatedByUser?.LastName ?? "",
                EventTypeName = "سفر",
                OriginalEntityId = travel.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetAllSimpleMeetingsAsync(DateTime startDate, DateTime endDate)
        {
            var meetings = await _unitOfWork.MeetingRepository.GetAllWithDetailsAsync();
            meetings = meetings.Where(m => m.StartAt >= startDate && m.StartAt <= endDate);

            return meetings.Select(meeting => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(meeting.StartAt),
                DateFormatted = meeting.StartAt.ToString("yyyy/MM/dd"),
                Subject = meeting.Title,
                TimeFormatted = meeting.StartAt.ToString("hh:mm tt") + (meeting.EndAt.HasValue ? $" - {meeting.EndAt.Value:hh:mm tt}" : ""),
                Location = GetMeetingLocation(meeting),
                AssignedEmployeeName = meeting.Organizer?.FirstName + " " + meeting.Organizer?.LastName ?? "",
                EventTypeName = "اجتماع",
                OriginalEntityId = meeting.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetAllSimpleTasksAsync(DateTime startDate, DateTime endDate)
        {
            var tasks = await _unitOfWork.TaskRepository.GetTasksWithDetailsAsync();
            tasks = tasks.Where(t => t.CreatedAt >= startDate && t.CreatedAt <= endDate);

            return tasks.Select(task => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(task.CreatedAt),
                DateFormatted = task.CreatedAt.ToString("yyyy/MM/dd"),
                Subject = task.Title,
                TimeFormatted = task.CreatedAt.ToString("hh:mm tt"),
                Location = "",
                AssignedEmployeeName = task.Assignee?.FirstName + " " + task.Assignee?.LastName ?? "",
                EventTypeName = "مهمة",
                OriginalEntityId = task.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetAllSimpleVisitsAsync(DateTime startDate, DateTime endDate)
        {
            var visits = await _unitOfWork.VisitRepository.GetAllWithDetailsAsync();
            visits = visits.Where(v => v.VisitDate >= startDate && v.VisitDate <= endDate);

            return visits.Select(visit => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(visit.VisitDate),
                DateFormatted = visit.VisitDate.ToString("yyyy/MM/dd"),
                Subject = visit.Title,
                TimeFormatted = visit.VisitDate.ToString("hh:mm tt"),
                Location = visit.Address,
                AssignedEmployeeName = visit.CreatedByUser?.FirstName + " " + visit.CreatedByUser?.LastName ?? "",
                EventTypeName = "زيارة",
                OriginalEntityId = visit.Id
            }).ToList();
        }

        private async Task<List<SimpleCalendarEventDto>> GetAllSimpleTravelsAsync(DateTime startDate, DateTime endDate)
        {
            var travels = await _unitOfWork.TravelRepository.GetAllWithDetailsAsync();
            travels = travels.Where(t => t.StartDate >= startDate && t.StartDate <= endDate);

            return travels.Select(travel => new SimpleCalendarEventDto
            {
                DayName = GetDayNameInArabic(travel.StartDate),
                DateFormatted = travel.StartDate.ToString("yyyy/MM/dd"),
                Subject = travel.Title,
                TimeFormatted = travel.StartDate.ToString("hh:mm tt") + (travel.EndDate != travel.StartDate ? $" - {travel.EndDate:hh:mm tt}" : ""),
                Location = travel.Destination,
                AssignedEmployeeName = travel.CreatedByUser?.FirstName + " " + travel.CreatedByUser?.LastName ?? "",
                EventTypeName = "سفر",
                OriginalEntityId = travel.Id
            }).ToList();
        }

        #endregion
    }
}
