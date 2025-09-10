using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IReminderService
    {
        /// <summary>
        /// إنشاء تذكير جديد
        /// </summary>
        Task<ApiResponse<ReminderDto>> CreateReminderAsync(string userId,CreateReminderDto createReminderDto);
        
        /// <summary>
        /// إنشاء تذكير سريع
        /// </summary>
        Task<ApiResponse<ReminderDto>> CreateQuickReminderAsync(string userId, QuickReminderDto quickReminderDto);
        
        /// <summary>
        /// تحديث تذكير موجود
        /// </summary>
        Task<ApiResponse<ReminderDto>> UpdateReminderAsync(UpdateReminderDto updateReminderDto);
        
        /// <summary>
        /// حذف تذكير
        /// </summary>
        Task<ApiResponse<bool>> DeleteReminderAsync(int reminderId);
        
        /// <summary>
        /// جلب تذكيرات مستخدم معين
        /// </summary>
        Task<ApiResponse<List<ReminderDto>>> GetUserRemindersAsync(string userId);
        
        /// <summary>
        /// معالجة التذكيرات المعلقة وإرسالها
        /// </summary>
        Task ProcessPendingRemindersAsync();
    }
}
