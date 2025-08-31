using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TravelRepository : GenericRepository<Travel>, ITravelRepository
    {
        public TravelRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Travel?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(t => t.CreatedByUser)
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<Travel>> GetAllWithDetailsAsync(
            Expression<Func<Travel, bool>>? filter = null,
            Func<IQueryable<Travel>, IOrderedQueryable<Travel>>? orderBy = null)
        {
            IQueryable<Travel> query = _dbSet
                .Include(t => t.CreatedByUser);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Travel>> GetByCreatorAsync(string createdByUserId)
        {
            return await _dbSet
                .Include(t => t.CreatedByUser)
                .Where(t => t.CreatedBy == createdByUserId)
                .OrderByDescending(t => t.StartDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<Travel>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(t => t.CreatedByUser)
                .Where(t => t.StartDate >= from && t.EndDate <= to)
                .OrderBy(t => t.StartDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<Travel>> GetByDestinationAsync(string destination)
        {
            return await _dbSet
                .Include(t => t.CreatedByUser)
                .Where(t => t.Destination.Contains(destination))
                .OrderByDescending(t => t.StartDate)
                .ToListAsync();
        }
    }
}
