using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Enums.Calendar;
using System;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    /// <summary>
    /// كنترولر التقويم
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CalendarController : ControllerBase
    {
        private readonly ICalendarService _calendarService;
        private readonly ILogger<CalendarController> _logger;

        public CalendarController(ICalendarService calendarService, ILogger<CalendarController> logger)
        {
            _calendarService = calendarService;
            _logger = logger;
        }

        /// <summary>
        /// الحصول على أحداث المستخدم (اجتماعات، مهام)
        /// </summary>
        /// <returns>قائمة الأحداث للمستخدم</returns>
        [HttpGet("user/events")]
        [Authorize(Policy = "calendar.index")]
        [ProducesResponseType(typeof(ApiResponse<List<CalendarEventDto>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUserEvents()
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("معرف المستخدم غير موجود في الرمز المميز");
                }

                var result = await _calendarService.GetUserEventsAsync(userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب أحداث المستخدم");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على جميع الأحداث في النظام
        /// </summary>
        /// <returns>قائمة جميع الأحداث</returns>
        [HttpGet("system/events")]
        [Authorize(Policy = "calendar.events.get")]
        [ProducesResponseType(typeof(ApiResponse<List<CalendarEventDto>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> GetAllSystemEvents()
        {
            try
            {
                var result = await _calendarService.GetAllSystemEventsAsync();
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب جميع الأحداث");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على إحصائيات التقويم للمستخدم
        /// </summary>
        /// <param name="period">الفترة الزمنية (1=اليوم, 2=الأسبوع, 3=الشهر)</param>
        /// <returns>إحصائيات التقويم</returns>
        [HttpGet("user/stats")]
        [Authorize(Policy = "calendar.index")]
        [ProducesResponseType(typeof(ApiResponse<CalendarStatsDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUserCalendarStats([FromQuery] CalendarPeriod period = CalendarPeriod.Day)
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("معرف المستخدم غير موجود في الرمز المميز");
                }

                // التحقق من صحة الفترة الزمنية
                if (!Enum.IsDefined(typeof(CalendarPeriod), period))
                {
                    return BadRequest("الفترة الزمنية غير صحيحة. القيم المسموحة: 1 (اليوم), 2 (الأسبوع), 3 (الشهر)");
                }

                var result = await _calendarService.GetCalendarStatsAsync(userId, period);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب إحصائيات التقويم");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }
    }
}
