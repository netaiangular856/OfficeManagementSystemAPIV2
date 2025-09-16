using OfficeManagementSystem.Domain.Entity.Auth;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class Recommendation
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;
        public string Text { get; set; } = default!;
        public string? AssigneeUserId { get; set; }
        [ForeignKey(nameof(AssigneeUserId))]
        public AppUser? User { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public DateTime? DueDate { get; set; }
    }
}