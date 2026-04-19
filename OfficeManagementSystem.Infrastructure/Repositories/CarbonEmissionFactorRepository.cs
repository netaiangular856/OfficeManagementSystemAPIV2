using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Carbon;
using OfficeManagementSystem.Domain.Enums.Carbon;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class CarbonEmissionFactorRepository : GenericRepository<CarbonEmissionFactor>, ICarbonEmissionFactorRepository
    {
        public CarbonEmissionFactorRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<CarbonEmissionFactor?> GetByTransportTypeAsync(TransportType transportType)
        {
            return await _dbSet
                .FirstOrDefaultAsync(f => f.TransportType == transportType && f.IsActive);
        }

        public async Task<IEnumerable<CarbonEmissionFactor>> GetActiveFactorsAsync()
        {
            return await _dbSet
                .Where(f => f.IsActive)
                .OrderBy(f => f.TransportType)
                .ToListAsync();
        }
    }
}

