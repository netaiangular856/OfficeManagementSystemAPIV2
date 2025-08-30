using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IRoleService
    {
        Task<ApiResponse<PaginatedResult<RoleDto>>> GetAllAsync(RoleQueryDto queryDto);
        Task<ApiResponse<RoleDto>> GetByIdAsync(string id);
        Task<ApiResponse<RoleDto>> CreateAsync(CreateRoleDto createDto);
        Task<ApiResponse<RoleDto>> UpdateAsync(string id, UpdateRoleDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(string id);
        Task<ApiResponse<List<PermissionDto>>> GetRolePermissionsAsync(string roleId);
        Task<ApiResponse<bool>> AssignPermissionsToRoleAsync(string roleId, AssignPermissionsDto assignDto);
        Task<ApiResponse<bool>> RemovePermissionFromRoleAsync(string roleId, int permissionId);
    }
}
