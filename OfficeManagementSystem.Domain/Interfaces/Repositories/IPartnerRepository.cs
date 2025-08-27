using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Enums.Partners;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IPartnerRepository : IGenericRepository<Partner>
    {
        Task<Partner?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Partner>> GetAllWithDetailsAsync(
            Expression<Func<Partner, bool>>? filter = null,
            Func<IQueryable<Partner>, IOrderedQueryable<Partner>>? orderBy = null);
        Task<IEnumerable<Partner>> GetByCreatorAsync(string creatorUserId);
        Task<IEnumerable<Partner>> GetByCategoryAsync(PartnerCategory category);
        Task<IEnumerable<Partner>> GetByCountryAsync(string country);
        Task<IEnumerable<Partner>> GetByCityAsync(string city);
        Task<IEnumerable<Partner>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<Partner>> GetActivePartnersAsync();
        Task<bool> ExistsByNameAsync(string name, int? excludeId = null);
    }
}
