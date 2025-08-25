using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskAttachment
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public TaskItem Task { get; set; } = default!;
        public string FilePath { get; set; } = default!;
        public string? FileType { get; set; }
        public string UploadedByUserId { get; set; } = default!;
        public AppUser UploadedBy { get; set; } = default!;
        public DateTime UploadedAt { get; set; }
    }
}