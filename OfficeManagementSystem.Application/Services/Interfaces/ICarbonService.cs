using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ICarbonService
    {
        Task<ApiResponse<EmissionCalculationResultDto>> CalculateEmissionAsync(CalculateEmissionDto calculateDto);
        Task<ApiResponse<CarbonActivityDto>> CreateActivityAsync(CreateCarbonActivityDto createDto, string userId);
        Task<ApiResponse<CarbonDashboardDto>> GetDashboardAsync(DateTime? fromDate = null, DateTime? toDate = null);
        Task<ApiResponse<CarbonEmissionFactorDto>> UpdateEmissionFactorAsync(int factorId, UpdateEmissionFactorDto updateDto);
        Task<ApiResponse<List<CarbonEmissionFactorDto>>> GetAllEmissionFactorsAsync();
        Task<ApiResponse<PaginatedResult<CarbonActivityDto>>> GetActivitiesAsync(CarbonActivityQueryDto queryDto);
        Task<ApiResponse<CarbonActivityDto>> GetActivityByIdAsync(int id);
        Task<ApiResponse<List<CarbonActivityDto>>> GetActivitiesByRelatedEntityAsync(int relatedEntityId, string relatedEntityType);
        Task<ApiResponse<bool>> DeleteActivityAsync(int id);
        Task<ApiResponse<bool>> DeleteActivitiesByRelatedEntityAsync(int relatedEntityId, string relatedEntityType);
    }
}

