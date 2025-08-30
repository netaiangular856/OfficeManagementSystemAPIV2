using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IRolePermissionRepository : IGenericRepository<RolePermission>
    {
        Task<List<RolePermission>> GetByRoleIdAsync(string roleId);
        Task<RolePermission?> GetByRoleIdAndPermissionIdAsync(string roleId, int permissionId);
        Task DeleteByRoleIdAndPermissionIdAsync(string roleId, int permissionId);
        Task DeleteByRoleIdAsync(string roleId);
    }
}
