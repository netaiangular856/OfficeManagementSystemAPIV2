using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Domain.Entity.Notifications
{
    public class UserNotification
    {
        public int Id { get; set; }
        public string UserId { get; set; } = default!;
        public AppUser User { get; set; } = default!;

        public int NotificationId { get; set; }
        public Notification Notification { get; set; } = default!;

        public bool IsRead { get; set; } = false;
        public DateTime? ReadAt { get; set; }
    }
}