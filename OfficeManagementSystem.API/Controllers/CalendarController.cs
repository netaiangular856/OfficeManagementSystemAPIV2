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
        [Authorize(Policy = "calendar.events.get")]
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
        [Authorize(Policy = "calendar.index")]
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
        /// <param name="specificDate">تاريخ معين (اختياري) - صيغة: yyyy-MM-dd</param>
        /// <returns>إحصائيات التقويم</returns>
        [HttpGet("user/stats")]
        [Authorize(Policy = "calendar.index")]
        [ProducesResponseType(typeof(ApiResponse<CalendarStatsDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUserCalendarStats([FromQuery] CalendarPeriod period = CalendarPeriod.Day, [FromQuery] DateTime? specificDate = null)
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

                var result = await _calendarService.GetCalendarStatsAsync(userId, period, specificDate);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب إحصائيات التقويم");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على تفاصيل كاملة لأحداث المستخدم
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول التفاصيل الكاملة لأحداث المستخدم</returns>
        [HttpGet("user/events/detailed")]
        [Authorize(Policy = "calendar.index")]
        [ProducesResponseType(typeof(ApiResponse<DetailedCalendarTableDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUserDetailedEvents([FromQuery] DateTime? fromDate = null, [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("معرف المستخدم غير موجود في الرمز المميز");
                }

                var result = await _calendarService.GetUserDetailedEventsAsync(userId, fromDate, toDate);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب تفاصيل أحداث المستخدم");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على تفاصيل كاملة لجميع أحداث النظام
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول التفاصيل الكاملة لجميع الأحداث</returns>
        [HttpGet("system/events/detailed")]
        [Authorize(Policy = "calendar.events.get")]
        [ProducesResponseType(typeof(ApiResponse<DetailedCalendarTableDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> GetAllDetailedSystemEvents([FromQuery] DateTime? fromDate = null, [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var result = await _calendarService.GetAllDetailedSystemEventsAsync(fromDate, toDate);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب تفاصيل جميع الأحداث");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على أحداث المستخدم المبسطة (جدول بسيط)
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول مبسط لأحداث المستخدم</returns>
        [HttpGet("user/events/simple")]
        [Authorize(Policy = "calendar.index")]
        [ProducesResponseType(typeof(ApiResponse<SimpleCalendarTableDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUserSimpleEvents([FromQuery] DateTime? fromDate = null, [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("معرف المستخدم غير موجود في الرمز المميز");
                }

                var result = await _calendarService.GetUserSimpleEventsAsync(userId, fromDate, toDate);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب أحداث المستخدم المبسطة");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }

        /// <summary>
        /// الحصول على جميع أحداث النظام المبسطة (جدول بسيط)
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول مبسط لجميع الأحداث</returns>
        [HttpGet("system/events/simple")]
        [Authorize(Policy = "calendar.events.get")]
        [ProducesResponseType(typeof(ApiResponse<SimpleCalendarTableDto>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        public async Task<IActionResult> GetAllSimpleSystemEvents([FromQuery] DateTime? fromDate = null, [FromQuery] DateTime? toDate = null)
        {
            try
            {
                var result = await _calendarService.GetAllSimpleSystemEventsAsync(fromDate, toDate);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ في جلب جميع الأحداث المبسطة");
                return StatusCode(500, "حدث خطأ داخلي في الخادم");
            }
        }
    }
}
