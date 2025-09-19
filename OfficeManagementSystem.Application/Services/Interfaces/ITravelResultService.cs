using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ITravelResultService
    {
        Task<ApiResponse<TravelResultDto>> CreateAsync(CreateTravelResultDto createDto, string userId);
        Task<ApiResponse<IEnumerable<TravelResultDto>>> GetAllAsync(int travelId);
        Task<ApiResponse<TravelResultDto>> GetByIdAsync(int id);
        Task<ApiResponse<TravelResultDto>> UpdateAsync(int id, UpdateTravelResultDto updateDto, string userId);
        Task<ApiResponse<bool>> DeleteAsync(int id, string userId);
    }
}
