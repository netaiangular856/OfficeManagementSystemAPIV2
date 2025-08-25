using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskAttachment
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public TaskItem Task { get; set; } = default!;

        public int DocumentId { get; set; }
        public Document Document { get; set; } = default!;
    }
}