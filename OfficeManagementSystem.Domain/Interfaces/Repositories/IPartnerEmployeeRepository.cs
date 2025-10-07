using OfficeManagementSystem.Domain.Entity.Partners;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories;

public interface IPartnerEmployeeRepository : IGenericRepository<PartnerEmployee>
{
    Task<PartnerEmployee?> GetByIdWithDetailsAsync(int id);
    Task<IEnumerable<PartnerEmployee>> GetAllWithDetailsAsync(
        Expression<Func<PartnerEmployee, bool>>? filter = null,
        Func<IQueryable<PartnerEmployee>, IOrderedQueryable<PartnerEmployee>>? orderBy = null);
    Task<IEnumerable<PartnerEmployee>> GetByPartnerIdAsync(int partnerId);
    Task<IEnumerable<PartnerEmployee>> GetByJobTitleAsync(string jobTitle);
    Task<IEnumerable<PartnerEmployee>> GetActiveEmployeesAsync();
}
