using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Enums.Calendar;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    /// <summary>
    /// خدمة التقويم
    /// </summary>
    public interface ICalendarService
    {
        /// <summary>
        /// الحصول على أحداث المستخدم (اجتماعات، مهام)
        /// </summary>
        /// <param name="userId">معرف المستخدم</param>
        /// <returns>قائمة الأحداث للمستخدم</returns>
        Task<ApiResponse<List<CalendarEventDto>>> GetUserEventsAsync(string userId);

        /// <summary>
        /// الحصول على جميع الأحداث في النظام
        /// </summary>
        /// <returns>قائمة جميع الأحداث</returns>
        Task<ApiResponse<List<CalendarEventDto>>> GetAllSystemEventsAsync();

        /// <summary>
        /// الحصول على إحصائيات التقويم للمستخدم
        /// </summary>
        /// <param name="userId">معرف المستخدم</param>
        /// <param name="period">الفترة الزمنية</param>
        /// <returns>إحصائيات التقويم</returns>
        Task<ApiResponse<CalendarStatsDto>> GetCalendarStatsAsync(string userId, CalendarPeriod period = CalendarPeriod.Day);
    }
}
