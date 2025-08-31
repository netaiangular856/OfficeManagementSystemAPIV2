using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ITravelService
    {
        Task<ApiResponse<TravelDto>> CreateAsync(CreateTravelDto createDto, string userId);
        Task<ApiResponse<PaginatedResult<TravelDto>>> GetAllAsync(TravelQueryDto queryDto);
        Task<ApiResponse<TravelDto>> GetByIdAsync(int id);
        Task<ApiResponse<TravelDto>> UpdateAsync(int id, UpdateTravelDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);
    }
}
