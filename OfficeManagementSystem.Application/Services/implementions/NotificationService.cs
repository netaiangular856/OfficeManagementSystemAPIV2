using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Domain.Sharing;
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
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;
        private readonly UserManager<AppUser> _userManager;

        public NotificationService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            IEmailService emailService,
            IConfiguration configuration,
            UserManager<AppUser> userManager
            )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _emailService = emailService;
            _configuration = configuration;
            _userManager = userManager;
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
                    CreatedAt = DateTime.Now,
                    ReferenceId = notificationDto.ReferenceId,
                    ReferenceType = notificationDto.ReferenceType
                };
            var emailTasks = new List<Task>();
            foreach (var userid in notificationDto.UserIds)
            {
                var user = await _userManager.Users.FirstOrDefaultAsync(m => m.Id == userid);
                if (string.IsNullOrEmpty(user.Email)) continue;

                var emaildto = new EmailDTO(
                    user.Email,
                    _configuration["EmailSetting:From"],
                    notificationDto.Title,
                     EmailStringBodyMS.Send(notificationDto.Message)
                );

                emailTasks.Add(_emailService.SendEmail(emaildto));

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
            // Send all emails in parallel
            await Task.WhenAll(emailTasks);

            var result= _mapper.Map<NotificationDto>(notification);
            return ApiResponse<NotificationDto>.SuccessResponse(result);
            
        }

        public async Task<ApiResponse<IEnumerable<NotificationDto>>> GetUserNotifications(string userId)
        {

            var notifications=await _unitOfWork.NotificationRepository
                .GetAllAsync(m=>m.UserNotifications.Any(un => un.UserId == userId && !un.IsRead)&&m.CreatedAt>= DateTime.UtcNow.Date.AddDays(-7),
                m =>m.OrderByDescending(o=>o.CreatedAt),includeProperties: "UserNotifications");

            if (!notifications.Any())
                return ApiResponse<IEnumerable<NotificationDto>>.ErrorResponse("No Notification To Show");

            var result= _mapper.Map<IEnumerable<NotificationDto>>(notifications);

            return ApiResponse<IEnumerable<NotificationDto>>.SuccessResponse(result);
        }

        public async Task<ApiResponse<PaginatedResult<NotificationDto>>> GetUserNotificationsWithFilter(string userId, NotificationFilterDto filter)
        {
            // Build the base query
            var query = await _unitOfWork.NotificationRepository
                .GetAllAsync(
                    m => m.UserNotifications.Any(un => un.UserId == userId),
                    m => m.OrderByDescending(o => o.CreatedAt),
                    includeProperties: "UserNotifications"
                );

            // Apply filters
            var filteredNotifications = query.AsQueryable();

            // Filter by IsRead
            if (filter.IsRead.HasValue)
            {
                filteredNotifications = filteredNotifications.Where(n => 
                    n.UserNotifications.Any(un => un.UserId == userId && un.IsRead == filter.IsRead.Value));
            }

            // Filter by Type
            if (!string.IsNullOrEmpty(filter.Type))
            {
                filteredNotifications = filteredNotifications.Where(n => 
                    n.Type != null && n.Type.Contains(filter.Type, StringComparison.OrdinalIgnoreCase));
            }

            // Filter by SearchTerm (Title or Message)
            if (!string.IsNullOrEmpty(filter.SearchTerm))
            {
                filteredNotifications = filteredNotifications.Where(n => 
                    n.Title.Contains(filter.SearchTerm, StringComparison.OrdinalIgnoreCase) ||
                    (n.Message != null && n.Message.Contains(filter.SearchTerm, StringComparison.OrdinalIgnoreCase)));
            }

            // Filter by Date Range
            if (filter.FromDate.HasValue)
            {
                filteredNotifications = filteredNotifications.Where(n => n.CreatedAt >= filter.FromDate.Value);
            }

            if (filter.ToDate.HasValue)
            {
                filteredNotifications = filteredNotifications.Where(n => n.CreatedAt <= filter.ToDate.Value.AddDays(1));
            }

            // Get total count
            var totalCount = filteredNotifications.Count();

            // Apply pagination
            var notifications = filteredNotifications
                .Skip((filter.Page - 1) * filter.PageSize)
                .Take(filter.PageSize)
                .ToList();

            if (!notifications.Any())
                return ApiResponse<PaginatedResult<NotificationDto>>.ErrorResponse("No Notifications Found");

            var result = new PaginatedResult<NotificationDto>
            {
                TotalCount = totalCount,
                Page = filter.Page,
                PageSize = filter.PageSize,
                Items = _mapper.Map<List<NotificationDto>>(notifications)
            };

            return ApiResponse<PaginatedResult<NotificationDto>>.SuccessResponse(result);
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

        public async Task<ApiResponse<NotificationReferenceDto>> GetNotificationReference(int notificationId, string userId)
        {
            // Verify user has access to this notification
            var userNotification = await _unitOfWork.NotificationRepository.GetUserNotificationById(notificationId, userId);
            
            if (userNotification == null)
                return ApiResponse<NotificationReferenceDto>.ErrorResponse("Notification not found or access denied");

            var notification = await _unitOfWork.NotificationRepository.GetByIdAsync(notificationId);
            
            if (notification == null)
                return ApiResponse<NotificationReferenceDto>.ErrorResponse("Notification not found");

            var result = new NotificationReferenceDto
            {
                NotificationId = notification.Id,
                ReferenceId = notification.ReferenceId,
                ReferenceType = notification.ReferenceType,
                ReferenceTypeName = notification.ReferenceType.ToString()
            };

            return ApiResponse<NotificationReferenceDto>.SuccessResponse(result);
        }
    }
}
