using OfficeManagementSystem.Domain.Entity.Carbon;
using OfficeManagementSystem.Domain.Enums.Carbon;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ICarbonEmissionFactorRepository : IGenericRepository<CarbonEmissionFactor>
    {
        Task<CarbonEmissionFactor?> GetByTransportTypeAsync(TransportType transportType);
        Task<IEnumerable<CarbonEmissionFactor>> GetActiveFactorsAsync();
    }
}

