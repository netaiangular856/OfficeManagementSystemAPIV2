using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces;

public interface IPartnerEmployeeService
{
    Task<ApiResponse<PartnerEmployeeDto>> CreateAsync(CreatePartnerEmployeeDto createDto, string userId);
    Task<ApiResponse<PaginatedResult<PartnerEmployeeDto>>> GetAllAsync(PartnerEmployeeQueryDto queryDto);
    Task<ApiResponse<PartnerEmployeeDto>> GetByIdAsync(int id);
    Task<ApiResponse<PartnerEmployeeDto>> UpdateAsync(int id, UpdatePartnerEmployeeDto updateDto);
    Task<ApiResponse<bool>> DeleteAsync(int id);
    Task<ApiResponse<IEnumerable<PartnerEmployeeDto>>> GetByPartnerIdAsync(int partnerId);
}
