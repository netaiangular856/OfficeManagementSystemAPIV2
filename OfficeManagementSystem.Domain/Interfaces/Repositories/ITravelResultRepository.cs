using OfficeManagementSystem.Domain.Entity.Visit;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITravelResultRepository : IGenericRepository<TravelResult>
    {
        Task<TravelResult?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<TravelResult>> GetAllWithDetailsAsync(
            Expression<Func<TravelResult, bool>>? filter = null,
            Func<IQueryable<TravelResult>, IOrderedQueryable<TravelResult>>? orderBy = null);
    }
}
