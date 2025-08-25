using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Sharing;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IEmployeeService
    {
        Task<ApiResponse<PaginatedResult<EmployeeDto>>> GetEmployeesAsync(Params parameters);
        Task<ApiResponse<EmployeeDto>> GetEmployeeByIdAsync(string employeeId);
        Task<ApiResponse<EmployeeDto>> CreateEmployeeAsync(CreateEmployeeRequestDto createEmployeeRequest);
        Task<ApiResponse<EmployeeDto>> UpdateEmployeeAsync(string employeeId, UpdateEmployeeRequestDto updateEmployeeRequest);
        Task<ApiResponse<bool>> DeleteEmployeeAsync(string employeeId);
        Task<ApiResponse<bool>> UpdateEmployeeRoleAsync(string employeeId, UpdateEmployeeRoleRequestDto updateRoleRequest);
        Task<ApiResponse<bool>> UpdateEmployeeStatusAsync(string employeeId, UpdateEmployeeStatusRequestDto updateStatusRequest);
        Task<ApiResponse<EmployeeDto>> UpdateEmployeeProfileAsync(string employeeId, UpdateEmployeeProfileRequestDto updateProfileRequest);
    }
}
