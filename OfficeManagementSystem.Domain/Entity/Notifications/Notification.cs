using OfficeManagementSystem.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Notifications
{
    public class Notification
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public string? Message { get; set; }
        public string? Type { get; set; } = "General";
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        // Reference to the source entity (Meeting, Task, Visit, Travel)
        public int? ReferenceId { get; set; }
        public NotificationReferenceType ReferenceType { get; set; } = NotificationReferenceType.None;

        // Navigation property
        public ICollection<UserNotification> UserNotifications { get; set; } = new List<UserNotification>();
    }
}
