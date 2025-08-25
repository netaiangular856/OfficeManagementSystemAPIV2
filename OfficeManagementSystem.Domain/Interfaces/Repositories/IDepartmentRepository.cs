using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Enums;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IDepartmentRepository : IGenericRepository<Department>
    {
        Task<Department?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Department>> GetAllWithDetailsAsync(
            Expression<Func<Department, bool>>? filter = null,
            Func<IQueryable<Department>, IOrderedQueryable<Department>>? orderBy = null);
        Task<IEnumerable<Department>> GetRootDepartmentsAsync();
        Task<IEnumerable<Department>> GetChildrenAsync(int parentId);
        Task<bool> HasChildrenAsync(int departmentId);
        Task<bool> CodeExistsAsync(string code, int? excludeId = null);
        Task<int> GetMaxOrderAsync(int? parentId = null);
        Task<IEnumerable<Department>> SearchAsync(string searchTerm, DepartmentType? type = null, bool? isActive = null);
        Task<Department?> GetByIdAsync(int id);
        Task DeleteAsync(int id);
    }
}
