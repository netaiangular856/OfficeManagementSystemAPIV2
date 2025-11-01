using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface INotificationService
    {
        Task<ApiResponse<NotificationDto>> AddNotification(CreateNotificationDto notificationDto);
        Task<ApiResponse<IEnumerable<NotificationDto>>> GetUserNotifications(string userId);
        Task<ApiResponse<PaginatedResult<NotificationDto>>> GetUserNotificationsWithFilter(string userId, NotificationFilterDto filter);
        Task<ApiResponse<NotificationDto>> MarkAsReadAsync(int id, string userId);
        Task<ApiResponse<bool>> MarkAllAsReadAsync(string userId);
        Task<ApiResponse<NotificationReferenceDto>> GetNotificationReference(int notificationId, string userId);
    }
}
