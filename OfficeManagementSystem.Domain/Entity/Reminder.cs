using OfficeManagementSystem.Domain.Entity.Auth;
using System;

namespace OfficeManagementSystem.Domain.Entity
{
    /// <summary>
    /// نموذج التذكير للأحداث في التقويم
    /// </summary>
    public class Reminder
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public string UserId { get; set; } = string.Empty;
        public AppUser User { get; set; } = default!;

        public DateTime ReminderTime { get; set; }

        public DateTime EventTime { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedAt { get; set; }
   
        public bool IsSent { get; set; } = false;

        public DateTime? SentAt { get; set; }
    }
}
