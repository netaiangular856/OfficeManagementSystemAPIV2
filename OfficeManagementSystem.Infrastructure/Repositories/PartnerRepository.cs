using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Enums.Partners;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class PartnerRepository : GenericRepository<Partner>, IPartnerRepository
    {
        public PartnerRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Partner?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IEnumerable<Partner>> GetAllWithDetailsAsync(
            Expression<Func<Partner, bool>>? filter = null,
            Func<IQueryable<Partner>, IOrderedQueryable<Partner>>? orderBy = null)
        {
            IQueryable<Partner> query = _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetByCreatorAsync(string creatorUserId)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.CreatedByUserId == creatorUserId)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetByCategoryAsync(PartnerCategory category)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.Category == category)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetByCountryAsync(string country)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.Country == country)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetByCityAsync(string city)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.City == city)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.CreatedAt >= from && p.CreatedAt <= to)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Partner>> GetActivePartnersAsync()
        {
            return await _dbSet
                .Include(p => p.CreatedByUser)
                .Include(p => p.Contacts)
                .Where(p => p.IsActive)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<bool> ExistsByNameAsync(string name, int? excludeId = null)
        {
            var query = _dbSet.Where(p => p.Name == name);
            
            if (excludeId.HasValue)
                query = query.Where(p => p.Id != excludeId.Value);

            return await query.AnyAsync();
        }
    }
}
