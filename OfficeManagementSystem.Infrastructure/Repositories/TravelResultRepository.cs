using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class TravelResultRepository : GenericRepository<TravelResult>, ITravelResultRepository
    {
        public TravelResultRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<TravelResult?> GetByIdWithDetailsAsync(int id)
        {
            return await _context.TravelResults
                .Include(tr => tr.Travel)
                .FirstOrDefaultAsync(tr => tr.Id == id);
        }

        public async Task<IEnumerable<TravelResult>> GetAllWithDetailsAsync(
            Expression<Func<TravelResult, bool>>? filter = null,
            Func<IQueryable<TravelResult>, IOrderedQueryable<TravelResult>>? orderBy = null)
        {
            IQueryable<TravelResult> query = _context.TravelResults
                .Include(tr => tr.Travel);

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (orderBy != null)
            {
                return await orderBy(query).ToListAsync();
            }

            return await query.ToListAsync();
        }
    }
}
