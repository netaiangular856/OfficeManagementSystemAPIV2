using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class Recommendation
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;
        public string Text { get; set; } = default!;
        public string? OwnerUserId { get; set; }
        public AppUser? Owner { get; set; }
        public DateTime? DueDate { get; set; }
        public string Status { get; set; } = "open"; // open|in_progress|done|late
        public int? LinkedTaskId { get; set; } // TAS.TaskItem
    }
}