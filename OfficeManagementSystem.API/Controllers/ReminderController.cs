using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class ReminderController : ControllerBase
    {
        private readonly IReminderService _reminderService;

        public ReminderController(IReminderService reminderService)
        {
            _reminderService = reminderService;
        }

        /// <summary>
        /// إنشاء تذكير جديد
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<ApiResponse<ReminderDto>>> CreateReminder([FromBody] CreateReminderDto createReminderDto)
        {
            try
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                if (userId == null)
                {
                    return BadRequest(ApiResponse<ReminderDto>.ErrorResponse("معرف المستخدم غير موجود"));
                }

                // التحقق من صحة البيانات
                if (createReminderDto == null)
                {
                    return BadRequest(ApiResponse<ReminderDto>.ErrorResponse("بيانات التذكير مطلوبة"));
                }

                if (string.IsNullOrEmpty(createReminderDto.Title))
                {
                    return BadRequest(ApiResponse<ReminderDto>.ErrorResponse("عنوان التذكير مطلوب"));
                }

                // تحويل التوقيت من توقيت الإمارات إلى UTC
                var uaeTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Arabian Standard Time");
                
                // تحديد أن التواريخ المرسلة هي بتوقيت الإمارات
                var reminderTimeWithKind = DateTime.SpecifyKind(createReminderDto.ReminderTime, DateTimeKind.Unspecified);
                var eventTimeWithKind = DateTime.SpecifyKind(createReminderDto.EventTime, DateTimeKind.Unspecified);
                
                // تحويل وقت التذكير من توقيت الإمارات إلى UTC
                createReminderDto.ReminderTime = TimeZoneInfo.ConvertTimeToUtc(reminderTimeWithKind, uaeTimeZone);
                
                // تحويل وقت الحدث من توقيت الإمارات إلى UTC
                createReminderDto.EventTime = TimeZoneInfo.ConvertTimeToUtc(eventTimeWithKind, uaeTimeZone);

                var result = await _reminderService.CreateReminderAsync(userId, createReminderDto);
                
                if (result.Success)
                    return Ok(result);
                
                return BadRequest(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ApiResponse<ReminderDto>.ErrorResponse($"خطأ في إنشاء التذكير: {ex.Message}"));
            }
        }
        

        ///// <summary>
        ///// إنشاء تذكير سريع
        ///// </summary>
        //[HttpPost("quick")]
        //public async Task<ActionResult<ApiResponse<ReminderDto>>> CreateQuickReminder([FromBody] QuickReminderDto quickReminderDto)
        //{
        //    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        //    if (userId == null)
        //    {
        //        return NotFound();
        //    }
        //    var result = await _reminderService.CreateQuickReminderAsync(userId,quickReminderDto);
            
        //    if (result.Success)
        //        return Ok(result);
            
        //    return BadRequest(result);
        //}

        /// <summary>
        /// تحديث تذكير موجود
        /// </summary>
        [HttpPut]
        public async Task<ActionResult<ApiResponse<ReminderDto>>> UpdateReminder([FromBody] UpdateReminderDto updateReminderDto)
        {
            // تحويل التوقيت من توقيت الإمارات إلى UTC
            var uaeTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Arabian Standard Time");
            
            // تحديد أن التواريخ المرسلة هي بتوقيت الإمارات
            var reminderTimeWithKind = DateTime.SpecifyKind(updateReminderDto.ReminderTime, DateTimeKind.Unspecified);
            var eventTimeWithKind = DateTime.SpecifyKind(updateReminderDto.EventTime, DateTimeKind.Unspecified);
            
            // تحويل وقت التذكير من توقيت الإمارات إلى UTC
            updateReminderDto.ReminderTime = TimeZoneInfo.ConvertTimeToUtc(reminderTimeWithKind, uaeTimeZone);
            
            // تحويل وقت الحدث من توقيت الإمارات إلى UTC
            updateReminderDto.EventTime = TimeZoneInfo.ConvertTimeToUtc(eventTimeWithKind, uaeTimeZone);

            var result = await _reminderService.UpdateReminderAsync(updateReminderDto);
            
            if (result.Success)
                return Ok(result);
            
            return BadRequest(result);
        }

        /// <summary>
        /// حذف تذكير
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeleteReminder(int id)
        {
            var result = await _reminderService.DeleteReminderAsync(id);
            
            if (result.Success)
                return Ok(result);
            
            return BadRequest(result);
        }

        /// <summary>
        /// جلب تذكيرات المستخدم الحالي
        /// </summary>
        [HttpGet("my-reminders")]
        public async Task<ActionResult<ApiResponse<List<ReminderDto>>>> GetMyReminders()
        {
            var userId = "65b6b144-5725-4d7b-a74d-8bb348cf1689"; // مؤقت للاختبار
            if (string.IsNullOrEmpty(userId))
            {
                return BadRequest(ApiResponse<List<ReminderDto>>.ErrorResponse("معرف المستخدم غير موجود"));
            }

            var result = await _reminderService.GetUserRemindersAsync(userId);
            
            if (result.Success && result.Data != null)
            {
                // تحويل التواريخ من UTC إلى توقيت الإمارات
                var uaeTimeZone = TimeZoneInfo.FindSystemTimeZoneById("Arabian Standard Time");
                
                foreach (var reminder in result.Data)
                {
                    reminder.ReminderTime = TimeZoneInfo.ConvertTimeFromUtc(reminder.ReminderTime, uaeTimeZone);
                    reminder.EventTime = TimeZoneInfo.ConvertTimeFromUtc(reminder.EventTime, uaeTimeZone);
                    reminder.CreatedAt = TimeZoneInfo.ConvertTimeFromUtc(reminder.CreatedAt, uaeTimeZone);
                    if (reminder.UpdatedAt.HasValue)
                    {
                        reminder.UpdatedAt = TimeZoneInfo.ConvertTimeFromUtc(reminder.UpdatedAt.Value, uaeTimeZone);
                    }
                    if (reminder.SentAt.HasValue)
                    {
                        reminder.SentAt = TimeZoneInfo.ConvertTimeFromUtc(reminder.SentAt.Value, uaeTimeZone);
                    }
                }
            }
            
            if (result.Success)
                return Ok(result);
            
            return BadRequest(result);
        }

        ///// <summary>
        ///// جلب خيارات أوقات التذكير المتاحة
        ///// </summary>
        //[HttpGet("time-options")]
        //public ActionResult GetReminderTimeOptions()
        //{
        //    var options = new[]
        //    {
        //        new { Value = (int)ReminderTimeOption.FiveMinutes, Label = "5 دقائق قبل", Minutes = 5 },
        //        new { Value = (int)ReminderTimeOption.FifteenMinutes, Label = "15 دقيقة قبل", Minutes = 15 },
        //        new { Value = (int)ReminderTimeOption.ThirtyMinutes, Label = "30 دقيقة قبل", Minutes = 30 },
        //        new { Value = (int)ReminderTimeOption.OneHour, Label = "ساعة واحدة قبل", Minutes = 60 },
        //        new { Value = (int)ReminderTimeOption.TwoHours, Label = "ساعتين قبل", Minutes = 120 },
        //        new { Value = (int)ReminderTimeOption.OneDay, Label = "يوم واحد قبل", Minutes = 1440 },
        //        new { Value = (int)ReminderTimeOption.Custom, Label = "وقت مخصص", Minutes = 0 }
        //    };

        //    return Ok(options);
        //}

       
    }
}
