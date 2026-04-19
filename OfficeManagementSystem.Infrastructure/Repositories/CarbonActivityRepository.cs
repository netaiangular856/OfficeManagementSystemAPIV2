using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Carbon;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class CarbonActivityRepository : GenericRepository<CarbonActivity>, ICarbonActivityRepository
    {
        public CarbonActivityRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<CarbonActivity?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(c => c.CreatedByUser)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<CarbonActivity>> GetAllWithDetailsAsync(
            Expression<Func<CarbonActivity, bool>>? filter = null,
            Func<IQueryable<CarbonActivity>, IOrderedQueryable<CarbonActivity>>? orderBy = null)
        {
            IQueryable<CarbonActivity> query = _dbSet
                .Include(c => c.CreatedByUser);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<decimal> GetTotalEmissionsByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Where(c => c.ActivityDate >= from && c.ActivityDate <= to)
                .SumAsync(c => c.EmissionValue);
        }

        public async Task<decimal> GetTotalEmissionsByMonthAsync(int year, int month)
        {
            return await _dbSet
                .Where(c => c.ActivityDate.Year == year && c.ActivityDate.Month == month)
                .SumAsync(c => c.EmissionValue);
        }

        public async Task<IEnumerable<CarbonActivity>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(c => c.CreatedByUser)
                .Where(c => c.ActivityDate >= from && c.ActivityDate <= to)
                .OrderByDescending(c => c.ActivityDate)
                .ToListAsync();
        }
    }
}

