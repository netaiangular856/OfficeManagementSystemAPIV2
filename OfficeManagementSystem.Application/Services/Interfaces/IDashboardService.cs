using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    /// <summary>
    /// خدمة الـ dashboard
    /// </summary>
    public interface IDashboardService
    {
        /// <summary>
        /// الحصول على ملخص عام للنظام
        /// </summary>
        Task<SystemOverviewDto> GetSystemOverviewAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على ملخص المهام
        /// </summary>
        Task<TasksOverviewDto> GetTasksOverviewAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على اتجاه المهام
        /// </summary>
        Task<TasksTrendDto> GetTasksTrendAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على ملخص الاجتماعات
        /// </summary>
        Task<MeetingsOverviewDto> GetMeetingsOverviewAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على ملخص المراسلات
        /// </summary>
        Task<LettersOverviewDto> GetLettersOverviewAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على المراسلات الشهرية
        /// </summary>
        Task<LettersMonthlyDto> GetLettersMonthlyAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على اتجاه KPI الموظفين
        /// </summary>
        Task<EmployeeKpiTrendDto> GetEmployeeKpiTrendAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على قائمة المتصدرين
        /// </summary>
        Task<EmployeeLeaderboardDto> GetEmployeeLeaderboardAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على ملخص الزيارات
        /// </summary>
        Task<VisitsOverviewDto> GetVisitsOverviewAsync(DashboardDateFilterDto filter);

        /// <summary>
        /// الحصول على ملخص السفريات
        /// </summary>
        Task<TravelsOverviewDto> GetTravelsOverviewAsync(DashboardDateFilterDto filter);
    }
}
