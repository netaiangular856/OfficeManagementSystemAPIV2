using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories;

public class PartnerEmployeeRepository : GenericRepository<PartnerEmployee>, IPartnerEmployeeRepository
{
    public PartnerEmployeeRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<PartnerEmployee?> GetByIdWithDetailsAsync(int id)
    {
        return await _dbSet
            .Include(pe => pe.Partner)
            .Include(pe => pe.CreatedByUser)
            .FirstOrDefaultAsync(pe => pe.Id == id);
    }

    public async Task<IEnumerable<PartnerEmployee>> GetAllWithDetailsAsync(
        Expression<Func<PartnerEmployee, bool>>? filter = null,
        Func<IQueryable<PartnerEmployee>, IOrderedQueryable<PartnerEmployee>>? orderBy = null)
    {
        IQueryable<PartnerEmployee> query = _dbSet
            .Include(pe => pe.Partner)
            .Include(pe => pe.CreatedByUser);

        if (filter != null)
            query = query.Where(filter);

        return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
    }

    public async Task<IEnumerable<PartnerEmployee>> GetByPartnerIdAsync(int partnerId)
    {
        return await _dbSet
            .Include(pe => pe.Partner)
            .Include(pe => pe.CreatedByUser)
            .Where(pe => pe.PartnerId == partnerId && pe.IsActive)
            .OrderByDescending(pe => pe.CreatedAt)
            .ToListAsync();
    }

    public async Task<IEnumerable<PartnerEmployee>> GetByJobTitleAsync(string jobTitle)
    {
        return await _dbSet
            .Include(pe => pe.Partner)
            .Include(pe => pe.CreatedByUser)
            .Where(pe => pe.JobTitle != null && pe.JobTitle.Contains(jobTitle) && pe.IsActive)
            .OrderByDescending(pe => pe.CreatedAt)
            .ToListAsync();
    }

    public async Task<IEnumerable<PartnerEmployee>> GetActiveEmployeesAsync()
    {
        return await _dbSet
            .Include(pe => pe.Partner)
            .Include(pe => pe.CreatedByUser)
            .Where(pe => pe.IsActive)
            .OrderByDescending(pe => pe.CreatedAt)
            .ToListAsync();
    }
}
