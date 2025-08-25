using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITaskAttachmentRepository : IGenericRepository<TaskAttachment>
    {
        Task<IEnumerable<TaskAttachment>> GetAttachmentsByTaskIdAsync(int taskId);
        Task<TaskAttachment?> GetAttachmentByTaskIdAndIdAsync(int taskId, int attachmentId);
    }
}
