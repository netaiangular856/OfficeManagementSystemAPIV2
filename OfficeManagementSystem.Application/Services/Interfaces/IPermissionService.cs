using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IPermissionService
    {
        Task<ApiResponse<PaginatedResult<PermissionDto>>> GetAllAsync(PermissionQueryDto queryDto);
        Task<ApiResponse<PermissionDto>> GetByIdAsync(int id);
        Task<ApiResponse<PermissionDto>> CreateAsync(CreatePermissionDto createDto);
        Task<ApiResponse<PermissionDto>> UpdateAsync(int id, UpdatePermissionDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);
        Task<ApiResponse<List<PermissionDto>>> GetAllActiveAsync();
    }
}
