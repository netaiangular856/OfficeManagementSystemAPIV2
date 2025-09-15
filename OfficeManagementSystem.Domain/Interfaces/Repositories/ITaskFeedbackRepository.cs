using OfficeManagementSystem.Domain.Entity.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITaskFeedbackRepository:IGenericRepository<TaskFeedback>
    {
        Task<IEnumerable<TaskFeedback>> GetTaskFeedbackAsync(int taskId);
    }
}
