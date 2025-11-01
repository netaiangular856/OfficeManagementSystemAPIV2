using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Enums;
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

        // Reference to the source entity (Meeting, Task, Visit, Travel)
        public int? ReferenceId { get; set; }
        public NotificationReferenceType ReferenceType { get; set; }

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

        // Reference to the source entity
        public int? ReferenceId { get; set; }
        public NotificationReferenceType ReferenceType { get; set; } = NotificationReferenceType.None;
    }

    public class NotificationFilterDto
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string? SearchTerm { get; set; }
        public string? Type { get; set; }
        public bool? IsRead { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
    }

    public class NotificationReferenceDto
    {
        public int NotificationId { get; set; }
        public int? ReferenceId { get; set; }
        public NotificationReferenceType ReferenceType { get; set; }
        public string ReferenceTypeName { get; set; } = default!;
    }
}
