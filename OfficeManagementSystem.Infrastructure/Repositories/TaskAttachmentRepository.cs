using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TaskAttachmentRepository : GenericRepository<TaskAttachment>, ITaskAttachmentRepository
    {
        public TaskAttachmentRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<TaskAttachment>> GetAttachmentsByTaskIdAsync(int taskId)
        {
            return await _context.TaskAttachments
                .Include(a => a.UploadedBy)
                .Where(a => a.TaskItemId == taskId)
                .OrderByDescending(a => a.UploadedAt)
                .ToListAsync();
        }

        public async Task<TaskAttachment?> GetAttachmentByTaskIdAndIdAsync(int taskId, int attachmentId)
        {
            return await _context.TaskAttachments
                .Include(a => a.UploadedBy)
                .FirstOrDefaultAsync(a => a.TaskItemId == taskId && a.Id == attachmentId);
        }
    }
}
