using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IEmployeeKpiRepository : IGenericRepository<EmployeeKPI>
    {
        Task<EmployeeKPI?> GetLatestKpiByEmployeeAsync(string employeeId);
        Task<IEnumerable<EmployeeKPI>> GetKpisByEmployeeAsync(string employeeId, int count = 12);
        Task<IEnumerable<EmployeeKPI>> GetKpisByPeriodAsync(DateTime periodStart, DateTime periodEnd);
        Task<EmployeeKPI?> GetKpiByEmployeeAndPeriodAsync(string employeeId, DateTime periodStart, DateTime periodEnd);
        Task<bool> ExistsKpiForPeriodAsync(string employeeId, DateTime periodStart, DateTime periodEnd);
        Task<IEnumerable<EmployeeKPI>> GetLatestKpisForAllEmployeesAsync();
        Task DeleteOldKpisAsync(int monthsToKeep = 24);
    }
}
