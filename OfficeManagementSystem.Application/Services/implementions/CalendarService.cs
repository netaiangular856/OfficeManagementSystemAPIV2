using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
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

                var allEvents = new List<CalendarEventDto>();
                allEvents.AddRange(userMeetings);
                allEvents.AddRange(userTasks);

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

                var allEvents = new List<CalendarEventDto>();
                allEvents.AddRange(allMeetings);
                allEvents.AddRange(allTasks);

                // ترتيب الأحداث حسب التاريخ
                var orderedEvents = allEvents.OrderBy(e => e.StartDate).ToList();

                return ApiResponse<List<CalendarEventDto>>.SuccessResponse(orderedEvents);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<CalendarEventDto>>.ErrorResponse($"خطأ في جلب جميع الأحداث: {ex.Message}");
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

        #endregion
    }
}
