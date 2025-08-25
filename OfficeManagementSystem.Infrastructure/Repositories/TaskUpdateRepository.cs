using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TaskUpdateRepository : GenericRepository<TaskUpdate>, ITaskUpdateRepository
    {
        public TaskUpdateRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<TaskUpdate>> GetUpdatesByTaskIdAsync(int taskId)
        {
            return await _context.TaskUpdates
                .Include(u => u.CreatedBy)
                .Where(u => u.TaskItemId == taskId)
                .OrderByDescending(u => u.CreatedAt)
                .ToListAsync();
        }
    }
}
