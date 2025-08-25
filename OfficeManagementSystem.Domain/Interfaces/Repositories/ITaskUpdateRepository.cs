using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITaskUpdateRepository : IGenericRepository<TaskUpdate>
    {
        Task<IEnumerable<TaskUpdate>> GetUpdatesByTaskIdAsync(int taskId);
    }
}
