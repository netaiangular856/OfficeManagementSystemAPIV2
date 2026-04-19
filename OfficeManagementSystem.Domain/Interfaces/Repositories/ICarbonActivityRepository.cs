using OfficeManagementSystem.Domain.Entity.Carbon;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ICarbonActivityRepository : IGenericRepository<CarbonActivity>
    {
        Task<CarbonActivity?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<CarbonActivity>> GetAllWithDetailsAsync(
            Expression<Func<CarbonActivity, bool>>? filter = null,
            Func<IQueryable<CarbonActivity>, IOrderedQueryable<CarbonActivity>>? orderBy = null);
        Task<decimal> GetTotalEmissionsByDateRangeAsync(DateTime from, DateTime to);
        Task<decimal> GetTotalEmissionsByMonthAsync(int year, int month);
        Task<IEnumerable<CarbonActivity>> GetByDateRangeAsync(DateTime from, DateTime to);
    }
}

