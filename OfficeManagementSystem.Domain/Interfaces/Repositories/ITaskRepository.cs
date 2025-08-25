using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITaskRepository : IGenericRepository<TaskItem>
    {
        Task<IEnumerable<TaskItem>> GetTasksWithDetailsAsync();
        Task<TaskItem?> GetTaskWithDetailsAsync(int id);
        Task<IEnumerable<TaskUpdate>> GetTaskUpdatesAsync(int taskId);
        Task<IEnumerable<TaskAttachment>> GetTaskAttachmentsAsync(int taskId);
        Task<TaskAttachment?> GetTaskAttachmentAsync(int taskId, int attachmentId);
    }
}
