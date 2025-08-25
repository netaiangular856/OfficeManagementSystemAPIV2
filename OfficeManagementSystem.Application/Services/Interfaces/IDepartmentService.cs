using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IDepartmentService
    {
        Task<ApiResponse<DepartmentDto>> CreateAsync(CreateDepartmentDto createDto);
        Task<ApiResponse<PaginatedResult<DepartmentDto>>> GetAllAsync(DepartmentQueryDto queryDto);
        Task<ApiResponse<List<DepartmentTreeDto>>> GetTreeAsync();
        Task<ApiResponse<DepartmentDto>> GetByIdAsync(int id);
        Task<ApiResponse<DepartmentDto>> UpdateAsync(int id, UpdateDepartmentDto updateDto);
        Task<ApiResponse<bool>> MoveAsync(int id, MoveDepartmentDto moveDto);
        Task<ApiResponse<bool>> AssignManagerAsync(int id, AssignManagerDto assignDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);
    }
}
