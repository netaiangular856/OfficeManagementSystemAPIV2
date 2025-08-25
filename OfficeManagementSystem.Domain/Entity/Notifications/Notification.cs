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
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation property
        public ICollection<UserNotification> UserNotifications { get; set; } = new List<UserNotification>();
    }
}
