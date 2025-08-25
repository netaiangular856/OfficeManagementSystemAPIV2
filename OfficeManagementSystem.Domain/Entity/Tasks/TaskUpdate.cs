using OfficeManagementSystem.Domain.Entity.Auth;
using System.Reflection.Metadata;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskUpdate
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public TaskItem Task { get; set; } = default!;
        public string? Note { get; set; }
        public string CreatedByUserId { get; set; } = default!;
        public AppUser CreatedBy { get; set; } = default!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}