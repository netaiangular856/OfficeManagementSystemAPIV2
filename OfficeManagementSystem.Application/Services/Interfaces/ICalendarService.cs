using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Enums.Calendar;
using System;
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
        /// <param name="specificDate">تاريخ معين (اختياري) - إذا لم يتم تحديده سيتم استخدام التاريخ الحالي</param>
        /// <returns>إحصائيات التقويم</returns>
        Task<ApiResponse<CalendarStatsDto>> GetCalendarStatsAsync(string userId, CalendarPeriod period = CalendarPeriod.Day, DateTime? specificDate = null);

        /// <summary>
        /// الحصول على تفاصيل كاملة لأحداث المستخدم
        /// </summary>
        /// <param name="userId">معرف المستخدم</param>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول التفاصيل الكاملة لأحداث المستخدم</returns>
        Task<ApiResponse<DetailedCalendarTableDto>> GetUserDetailedEventsAsync(string userId, DateTime? fromDate = null, DateTime? toDate = null);

        /// <summary>
        /// الحصول على تفاصيل كاملة لجميع أحداث النظام
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول التفاصيل الكاملة لجميع الأحداث</returns>
        Task<ApiResponse<DetailedCalendarTableDto>> GetAllDetailedSystemEventsAsync(DateTime? fromDate = null, DateTime? toDate = null);

        /// <summary>
        /// الحصول على أحداث المستخدم المبسطة (جدول بسيط)
        /// </summary>
        /// <param name="userId">معرف المستخدم</param>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول مبسط لأحداث المستخدم</returns>
        Task<ApiResponse<SimpleCalendarTableDto>> GetUserSimpleEventsAsync(string userId, DateTime? fromDate = null, DateTime? toDate = null);

        /// <summary>
        /// الحصول على جميع أحداث النظام المبسطة (جدول بسيط)
        /// </summary>
        /// <param name="fromDate">تاريخ البداية (اختياري)</param>
        /// <param name="toDate">تاريخ النهاية (اختياري)</param>
        /// <returns>جدول مبسط لجميع الأحداث</returns>
        Task<ApiResponse<SimpleCalendarTableDto>> GetAllSimpleSystemEventsAsync(DateTime? fromDate = null, DateTime? toDate = null);
    }
}
