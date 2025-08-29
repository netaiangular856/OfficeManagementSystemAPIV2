using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class EmployeeKpiRepository : GenericRepository<EmployeeKPI>, IEmployeeKpiRepository
    {
        public EmployeeKpiRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<EmployeeKPI?> GetLatestKpiByEmployeeAsync(string employeeId)
        {
            return await _dbSet
                .Include(k => k.Employee)
                .Where(k => k.EmployeeId == employeeId)
                .OrderByDescending(k => k.PeriodEnd)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<EmployeeKPI>> GetKpisByEmployeeAsync(string employeeId, int count = 12)
        {
            return await _dbSet
                .Include(k => k.Employee)
                .Where(k => k.EmployeeId == employeeId)
                .OrderByDescending(k => k.PeriodEnd)
                .Take(count)
                .ToListAsync();
        }

        public async Task<IEnumerable<EmployeeKPI>> GetKpisByPeriodAsync(DateOnly periodStart, DateOnly periodEnd)
        {
            return await _dbSet
                .Include(k => k.Employee)
                .Where(k => k.PeriodStart >= periodStart && k.PeriodEnd <= periodEnd)
                .OrderByDescending(k => k.PeriodEnd)
                .ToListAsync();
        }

        public async Task<EmployeeKPI?> GetKpiByEmployeeAndPeriodAsync(string employeeId, DateOnly periodStart, DateOnly periodEnd)
        {
            return await _dbSet
                .Include(k => k.Employee)
                .FirstOrDefaultAsync(k => k.EmployeeId == employeeId && 
                                        k.PeriodStart == periodStart && 
                                        k.PeriodEnd == periodEnd);
        }

        public async Task<bool> ExistsKpiForPeriodAsync(string employeeId, DateOnly periodStart, DateOnly periodEnd)
        {
            return await _dbSet
                .AnyAsync(k => k.EmployeeId == employeeId && 
                              k.PeriodStart == periodStart && 
                              k.PeriodEnd == periodEnd);
        }

        public async Task<IEnumerable<EmployeeKPI>> GetLatestKpisForAllEmployeesAsync()
        {
            // Get the latest KPI for each employee
            var latestKpis = await _dbSet
                .Include(k => k.Employee)
                .GroupBy(k => k.EmployeeId)
                .Select(g => g.OrderByDescending(k => k.PeriodEnd).First())
                .ToListAsync();

            return latestKpis;
        }

        public async Task DeleteOldKpisAsync(int monthsToKeep = 24)
        {
            var cutoffDate = DateOnly.FromDateTime(DateTime.UtcNow.AddMonths(-monthsToKeep));
            
            var oldKpis = await _dbSet
                .Where(k => k.PeriodEnd < cutoffDate)
                .ToListAsync();

            if (oldKpis.Any())
            {
                _dbSet.RemoveRange(oldKpis);
            }
        }
    }
}
