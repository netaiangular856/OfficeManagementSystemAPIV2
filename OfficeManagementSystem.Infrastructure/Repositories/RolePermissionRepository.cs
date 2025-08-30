using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class RolePermissionRepository : IRolePermissionRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<RolePermission> _dbSet;

        public RolePermissionRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = context.Set<RolePermission>();
        }

        public async Task<List<RolePermission>> GetByRoleIdAsync(string roleId)
        {
            return await _dbSet
                .Where(rp => rp.RoleId == roleId)
                .Include(rp => rp.Permission)
                .ToListAsync();
        }

        public async Task<RolePermission?> GetByRoleIdAndPermissionIdAsync(string roleId, int permissionId)
        {
            return await _dbSet
                .FirstOrDefaultAsync(rp => rp.RoleId == roleId && rp.PermissionId == permissionId);
        }

        public async Task DeleteByRoleIdAndPermissionIdAsync(string roleId, int permissionId)
        {
            var rolePermission = await GetByRoleIdAndPermissionIdAsync(roleId, permissionId);
            if (rolePermission != null)
            {
                _dbSet.Remove(rolePermission);
            }
        }

        public async Task DeleteByRoleIdAsync(string roleId)
        {
            var rolePermissions = await GetByRoleIdAsync(roleId);
            _dbSet.RemoveRange(rolePermissions);
        }

        // IGenericRepository implementation
        public async Task<RolePermission?> GetByIdAsync(int id)
        {
            // RolePermission doesn't have a single int ID, so this method is not applicable
            throw new NotImplementedException("RolePermission uses composite key");
        }

        public async Task<IEnumerable<RolePermission>> GetAllAsync(
            Expression<Func<RolePermission, bool>>? filter = null,
            Func<IQueryable<RolePermission>, IOrderedQueryable<RolePermission>>? orderBy = null,
            string? includeProperties = null,
            bool disableTracking = true)
        {
            IQueryable<RolePermission> query = _dbSet;

            if (disableTracking)
                query = query.AsNoTracking();

            if (filter != null)
                query = query.Where(filter);

            if (includeProperties != null)
            {
                foreach (var includeProp in includeProperties.Split(',', StringSplitOptions.RemoveEmptyEntries))
                    query = query.Include(includeProp);
            }

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<RolePermission> AddAsync(RolePermission entity)
        {
            await _dbSet.AddAsync(entity);
            return entity;
        }

        public Task UpdateAsync(RolePermission entity)
        {
            _dbSet.Update(entity);
            return Task.CompletedTask;
        }

        public async Task DeleteAsync(int id)
        {
            // RolePermission doesn't have a single int ID, so this method is not applicable
            throw new NotImplementedException("RolePermission uses composite key");
        }

        public Task<bool> ExistsAsync(Expression<Func<RolePermission, bool>> predicate)
        {
            return _dbSet.AnyAsync(predicate);
        }
    }
}
