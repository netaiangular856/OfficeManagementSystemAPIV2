using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class PermissionRepository : GenericRepository<Permission>, IPermissionRepository
    {
        public PermissionRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<bool> ExistsByNameAsync(string name)
        {
            return await _dbSet.AnyAsync(p => p.Name == name);
        }

        public async Task<bool> ExistsByNameExcludingIdAsync(string name, int id)
        {
            return await _dbSet.AnyAsync(p => p.Name == name && p.Id != id);
        }

        public async Task<List<Permission>> GetByRoleIdAsync(string roleId)
        {
            return await _dbSet
                .Where(p => p.Roles.Any(rp => rp.RoleId == roleId))
                .ToListAsync();
        }

        
    }
}
