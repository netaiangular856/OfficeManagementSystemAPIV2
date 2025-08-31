using OfficeManagementSystem.Domain.Entity.Visit;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ITravelRepository : IGenericRepository<Travel>
    {
        Task<Travel?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Travel>> GetAllWithDetailsAsync(
            Expression<Func<Travel, bool>>? filter = null,
            Func<IQueryable<Travel>, IOrderedQueryable<Travel>>? orderBy = null);
        Task<IEnumerable<Travel>> GetByCreatorAsync(string createdByUserId);
        Task<IEnumerable<Travel>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<Travel>> GetByDestinationAsync(string destination);
    }
}
