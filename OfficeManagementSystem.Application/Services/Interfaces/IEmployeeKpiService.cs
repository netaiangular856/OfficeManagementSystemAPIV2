using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IEmployeeKpiService
    {
        // Get KPI operations
        Task<ApiResponse<EmployeeKpiDto>> GetLatestKpiAsync(string employeeId);
        Task<ApiResponse<List<EmployeeKpiDto>>> GetKpiHistoryAsync(string employeeId, int count = 12);
        Task<ApiResponse<EmployeeKpiSummaryDto>> GetKpiSummaryAsync(string employeeId);

        // Recalculate KPI operations
        Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisAsync(RecalculateKpisRequestDto request);
        Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisForPeriodAsync(DateOnly periodStart, DateOnly periodEnd);
        Task<ApiResponse<RecalculateKpisResponseDto>> RecalculateKpisForAllEmployeesAsync();
        
        // Background job operations
        Task<ApiResponse<bool>> ScheduleMonthlyKpiCalculationAsync();
        Task<ApiResponse<bool>> ProcessScheduledKpiCalculationAsync();
    }
}
