using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TaskRepository : GenericRepository<TaskItem>, ITaskRepository
    {
        public TaskRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<TaskItem>> GetTasksWithDetailsAsync()
        {
            return await _context.Tasks
                .Include(t => t.Dept)
                .Include(t => t.Assignee)
                .Include(t => t.CreatedBy)
                .Include(t => t.Updates)
                .Include(t => t.Attachments)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
        }

        public async Task<TaskItem?> GetTaskWithDetailsAsync(int id)
        {
            return await _context.Tasks
                .Include(t => t.Dept)
                .Include(t => t.Assignee)
                .Include(t => t.CreatedBy)
                .Include(t => t.Updates)
                    .ThenInclude(u => u.CreatedBy)
                .Include(t => t.Attachments)
                    .ThenInclude(a => a.Document)
                        .ThenInclude(m => m.CreatedBy)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<TaskUpdate>> GetTaskUpdatesAsync(int taskId)
        {
            return await _context.TaskUpdates
                .Include(u => u.CreatedBy)
                .Where(u => u.TaskItemId == taskId)
                .OrderByDescending(u => u.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<TaskAttachment>> GetTaskAttachmentsAsync(int taskId)
        {
            return await _context.TaskAttachments
                .Include(a => a.Document)
                    .ThenInclude(m => m.CreatedBy)
                .Where(a => a.TaskItemId == taskId)
                .OrderByDescending(a => a.Document.CreatedAt)
                .ToListAsync();
        }

        public async Task<TaskAttachment?> GetTaskAttachmentAsync(int taskId, int attachmentId)
        {
            return await _context.TaskAttachments

                .Include(a => a.Document)
                    .ThenInclude(m=> m.CreatedBy)
                .FirstOrDefaultAsync(a => a.TaskItemId == taskId && a.Id == attachmentId);
        }
    }
}
