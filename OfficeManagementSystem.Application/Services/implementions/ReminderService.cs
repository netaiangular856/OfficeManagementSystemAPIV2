using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class ReminderService : IReminderService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ISendNotificationService _sendNotificationService;
        private readonly UserManager<AppUser> _userManager;

        public ReminderService(
            IUnitOfWork unitOfWork, 
            IMapper mapper,
            ISendNotificationService sendNotificationService,
            UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _sendNotificationService = sendNotificationService;
            _userManager = userManager;
        }

        public async Task<ApiResponse<ReminderDto>> CreateReminderAsync(string userId,CreateReminderDto createReminderDto)
        {
            try
            {
                // التحقق من صحة البيانات
                if (createReminderDto.ReminderTime >= createReminderDto.EventTime)
                {
                    return ApiResponse<ReminderDto>.ErrorResponse("وقت التذكير يجب أن يكون قبل وقت الحدث");
                }

                // التحقق من وجود المستخدم
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<ReminderDto>.ErrorResponse("المستخدم غير موجود");
                }

                var reminder = _mapper.Map<Reminder>(createReminderDto);
                reminder.UserId=userId;
                await _unitOfWork.ReminderRepository.AddAsync(reminder);
                await _unitOfWork.SaveAsync();

                var reminderDto = _mapper.Map<ReminderDto>(reminder);
                reminderDto.UserName = user.UserName ?? user.Email ?? "غير محدد";

                return ApiResponse<ReminderDto>.SuccessResponse(reminderDto);
            }
            catch (Exception ex)
            {
                return ApiResponse<ReminderDto>.ErrorResponse($"خطأ في إنشاء التذكير: {ex.Message}");
            }
        }

        public async Task<ApiResponse<ReminderDto>> CreateQuickReminderAsync(string userId, QuickReminderDto quickReminderDto)
        {
            try
            {
                var reminderTime = CalculateReminderTime(quickReminderDto.EventTime, quickReminderDto.TimeOption);
                
                var createReminderDto = new CreateReminderDto
                {
                    Title = "تذكير حدث",
                    Description = quickReminderDto.CustomMessage ?? "لديك حدث قريباً",
                    EventTime = quickReminderDto.EventTime,
                    ReminderTime = reminderTime
                };

                return await CreateReminderAsync(userId,createReminderDto);
            }
            catch (Exception ex)
            {
                return ApiResponse<ReminderDto>.ErrorResponse($"خطأ في إنشاء التذكير السريع: {ex.Message}");
            }
        }

        public async Task<ApiResponse<ReminderDto>> UpdateReminderAsync(UpdateReminderDto updateReminderDto)
        {
            try
            {
                var reminder = await _unitOfWork.ReminderRepository.GetByIdAsync(updateReminderDto.Id);
                if (reminder == null)
                {
                    return ApiResponse<ReminderDto>.ErrorResponse("التذكير غير موجود");
                }

                if (reminder.IsSent)
                {
                    return ApiResponse<ReminderDto>.ErrorResponse("لا يمكن تعديل التذكير بعد إرساله");
                }

                reminder.Title = updateReminderDto.Title;
                reminder.Description = updateReminderDto.Description;
                reminder.ReminderTime = updateReminderDto.ReminderTime;
                reminder.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.SaveAsync();

                var reminderDto = _mapper.Map<ReminderDto>(reminder);
                var user = await _userManager.FindByIdAsync(reminder.UserId);
                reminderDto.UserName = user?.UserName ?? user?.Email ?? "غير محدد";

                return ApiResponse<ReminderDto>.SuccessResponse(reminderDto);
            }
            catch (Exception ex)
            {
                return ApiResponse<ReminderDto>.ErrorResponse($"خطأ في تحديث التذكير: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteReminderAsync(int reminderId)
        {
            try
            {
                var reminder = await _unitOfWork.ReminderRepository.GetByIdAsync(reminderId);
                if (reminder == null)
                {
                    return ApiResponse<bool>.ErrorResponse("التذكير غير موجود");
                }

                await _unitOfWork.ReminderRepository.DeleteAsync(reminderId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف التذكير: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<ReminderDto>>> GetUserRemindersAsync(string userId)
        {
            try
            {
                var reminders = await _unitOfWork.ReminderRepository.GetUserRemindersAsync(userId);
                var reminderDtos = new List<ReminderDto>();

                foreach (var reminder in reminders)
                {
                    var reminderDto = _mapper.Map<ReminderDto>(reminder);
                    reminderDto.UserName = reminder.User?.UserName ?? reminder.User?.Email ?? "غير محدد";
                    reminderDtos.Add(reminderDto);
                }

                return ApiResponse<List<ReminderDto>>.SuccessResponse(reminderDtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<ReminderDto>>.ErrorResponse($"خطأ في جلب تذكيرات المستخدم: {ex.Message}");
            }
        }


        public async Task ProcessPendingRemindersAsync()
        {
            try
            {
                var currentTime = DateTime.UtcNow;
                var pendingReminders = await _unitOfWork.ReminderRepository.GetPendingRemindersAsync(currentTime);
                
                foreach (var reminder in pendingReminders)
                {
                    try
                    {
                        // إرسال الإشعار
                        var userIds = new List<string> { reminder.UserId };
                        var notificationTitle = $"تذكير: {reminder.Title}";
                        var notificationMessage = reminder.Description ?? "لديك تذكير";
                        
                        await _sendNotificationService.SendNotificationAsync(
                            notificationTitle, 
                            notificationMessage, 
                            userIds,
                            "Reminder"
                        );

                        // تحديث حالة التذكير
                        await _unitOfWork.ReminderRepository.MarkAsSentAsync(reminder.Id);
                    }
                    catch (Exception ex)
                    {
                        // في حالة فشل الإرسال، تحديث الحالة إلى فشل
                        reminder.UpdatedAt = DateTime.UtcNow;
                    }
                }

                await _unitOfWork.SaveAsync();
            }
            catch (Exception ex)
            {
                // تسجيل الخطأ في السجل
                Console.WriteLine( "خطأ في معالجة التذكيرات المعلقة");
            }
        }

        #region Private Methods

        private DateTime CalculateReminderTime(DateTime eventTime, ReminderTimeOption timeOption)
        {
            if (timeOption == ReminderTimeOption.Custom)
            {
                return eventTime.AddMinutes(-30); // افتراضي 30 دقيقة
            }

            return eventTime.AddMinutes(-(int)timeOption);
        }

        #endregion
    }
}
