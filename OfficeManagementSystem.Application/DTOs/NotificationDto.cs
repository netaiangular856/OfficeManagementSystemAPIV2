using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.DTOs
{
    public class NotificationDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public string? Message { get; set; }
        public string? Type { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<UserNotificationDto> UserNotifications { get; set; } = new List<UserNotificationDto>();
    }
    public class UserNotificationDto
    {
        public int Id { get; set; }
        public string UserId { get; set; } 
        public int NotificationId { get; set; }
        public bool IsRead { get; set; } = false;
        public DateTime? ReadAt { get; set; }
    }
    public class CreateNotificationDto
    {
        public string Title { get; set; } = default!;
        public string? Message { get; set; }
        public string? Type { get; set; }
        public List<string> UserIds { get; set; } = new();

    }
}
