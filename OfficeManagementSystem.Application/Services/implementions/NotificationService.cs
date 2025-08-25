using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class NotificationService : INotificationService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public NotificationService(IUnitOfWork unitOfWork,IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ApiResponse<NotificationDto>> AddNotification(CreateNotificationDto notificationDto)
        {
            if (notificationDto.UserIds == null || !notificationDto.UserIds.Any())
                return ApiResponse<NotificationDto>.ErrorResponse("No User To Send Notification please enter user ids");


                var notification = new Notification
                {
                    Title = notificationDto.Title,
                    Message = notificationDto.Message,
                    Type = notificationDto.Type?? "General",
                    CreatedAt = DateTime.UtcNow,

                };
            foreach (var userid in notificationDto.UserIds)
            {
                var usernotification = new UserNotification
                {
                    UserId = userid,
                    NotificationId = notification.Id,
                    IsRead=false
                };
                notification.UserNotifications.Add(usernotification);
            }
            await _unitOfWork.NotificationRepository.AddAsync(notification);
            await _unitOfWork.SaveAsync();

            var result= _mapper.Map<NotificationDto>(notification);
            return ApiResponse<NotificationDto>.SuccessResponse(result);
            
        }

        public async Task<ApiResponse<IEnumerable<NotificationDto>>> GetUserNotifications(string userId)
        {

            var notifications=await _unitOfWork.NotificationRepository
                .GetAllAsync(m=>m.UserNotifications.Any(un => un.UserId == userId)&&m.CreatedAt>= DateTime.UtcNow.Date.AddDays(-7),
                m =>m.OrderByDescending(o=>o.CreatedAt),includeProperties: "UserNotifications");

            if (!notifications.Any())
                return ApiResponse<IEnumerable<NotificationDto>>.ErrorResponse("No Notification To Show");

            var result= _mapper.Map<IEnumerable<NotificationDto>>(notifications);

            return ApiResponse<IEnumerable<NotificationDto>>.SuccessResponse(result);
        }

        public async Task<ApiResponse<NotificationDto>> MarkAsReadAsync(int id, string userId)
        {
            var userNotification = await _unitOfWork.NotificationRepository.GetUserNotificationById(id,userId);

            if (userNotification == null)
                return ApiResponse<NotificationDto>.ErrorResponse("No Notification to show");

            userNotification.IsRead = !userNotification.IsRead;
            userNotification.ReadAt=DateTime.UtcNow;

            await _unitOfWork.UserNotifications.UpdateAsync(userNotification);
            await _unitOfWork.SaveAsync();
            var notification = await _unitOfWork.NotificationRepository.GetWithDetials(id);
            var result= _mapper.Map<NotificationDto>(notification);
            return ApiResponse<NotificationDto>.SuccessResponse(result);
        }

        public async Task<ApiResponse<bool>> MarkAllAsReadAsync(string userId)
        {
            var updatedCount = await _unitOfWork.NotificationRepository.MarkAllAsRead(userId);

            if (updatedCount == 0)
                return ApiResponse<bool>.ErrorResponse("No notifications to mark as read");

            return ApiResponse<bool>.SuccessResponse(true, "All notifications marked as read");
        }
    }
}
