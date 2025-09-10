using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    /// <summary>
    /// كنترولر الـ dashboard
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Policy = "dashboard.index")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardService _dashboardService;

        public DashboardController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        /// <summary>
        /// الحصول على ملخص عام للنظام
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص عام للنظام</returns>
        [HttpGet("overview")]
        public async Task<ActionResult<SystemOverviewDto>> GetSystemOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetSystemOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                // تسجيل الخطأ للتشخيص
                Console.WriteLine($"Dashboard Overview Error: {ex}");
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص النظام", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على ملخص المهام
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص المهام</returns>
        [HttpGet("tasks/overview")]
        public async Task<ActionResult<TasksOverviewDto>> GetTasksOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetTasksOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص المهام", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على اتجاه المهام
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>اتجاه المهام</returns>
        [HttpGet("tasks/trend")]
        public async Task<ActionResult<TasksTrendDto>> GetTasksTrend(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetTasksTrendAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب اتجاه المهام", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على ملخص الاجتماعات
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص الاجتماعات</returns>
        [HttpGet("meetings/overview")]
        public async Task<ActionResult<MeetingsOverviewDto>> GetMeetingsOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetMeetingsOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص الاجتماعات", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على ملخص المراسلات
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص المراسلات</returns>
        [HttpGet("letters/overview")]
        public async Task<ActionResult<LettersOverviewDto>> GetLettersOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetLettersOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص المراسلات", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على المراسلات الشهرية
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>المراسلات الشهرية</returns>
        [HttpGet("letters/monthly")]
        public async Task<ActionResult<LettersMonthlyDto>> GetLettersMonthly(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetLettersMonthlyAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب المراسلات الشهرية", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على اتجاه KPI الموظفين
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>اتجاه KPI الموظفين</returns>
        [HttpGet("employees/kpi-trend")]
        public async Task<ActionResult<EmployeeKpiTrendDto>> GetEmployeeKpiTrend(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetEmployeeKpiTrendAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب اتجاه KPI الموظفين", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على قائمة المتصدرين
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>قائمة المتصدرين</returns>
        [HttpGet("employees/leaderboard")]
        public async Task<ActionResult<EmployeeLeaderboardDto>> GetEmployeeLeaderboard(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetEmployeeLeaderboardAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                // تسجيل الخطأ للتشخيص
                Console.WriteLine($"Dashboard Leaderboard Error: {ex}");
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب قائمة المتصدرين", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على ملخص الزيارات
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص الزيارات</returns>
        [HttpGet("visits/overview")]
        public async Task<ActionResult<VisitsOverviewDto>> GetVisitsOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetVisitsOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص الزيارات", error = ex.Message });
            }
        }

        /// <summary>
        /// الحصول على ملخص السفريات
        /// </summary>
        /// <param name="fromDate">تاريخ البداية</param>
        /// <param name="toDate">تاريخ النهاية</param>
        /// <returns>ملخص السفريات</returns>
        [HttpGet("travels/overview")]
        public async Task<ActionResult<TravelsOverviewDto>> GetTravelsOverview(
            [FromQuery] DateTime? fromDate = null,
            [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var filter = new DashboardDateFilterDto
                {
                    FromDate = fromDate,
                    ToDate = toDate
                };

                var result = await _dashboardService.GetTravelsOverviewAsync(filter);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "حدث خطأ أثناء جلب ملخص السفريات", error = ex.Message });
            }
        }
    }
}
