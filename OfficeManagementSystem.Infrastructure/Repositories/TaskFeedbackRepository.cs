using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TaskFeedbackRepository : GenericRepository<TaskFeedback>, ITaskFeedbackRepository
    {
        public TaskFeedbackRepository(AppDbContext context) : base(context)
        {
        }
        public async Task<IEnumerable<TaskFeedback>> GetTaskFeedbackAsync(int taskId)
        {
            return await _dbSet
                .Where(m => m.TaskItemId == taskId)
                .Include(m => m.Employee)
                .ToListAsync();
        }
    }
}
