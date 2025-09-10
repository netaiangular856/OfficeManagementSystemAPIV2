using System;

namespace OfficeManagementSystem.Application.DTOs
{
    /// <summary>
    /// DTO لإنشاء تذكير جديد
    /// </summary>
    public class CreateReminderDto
    {
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime EventTime { get; set; }
        public DateTime ReminderTime { get; set; }
    }
    
    /// <summary>
    /// DTO لتحديث تذكير موجود
    /// </summary>
    public class UpdateReminderDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime EventTime { get; set; }
        public DateTime ReminderTime { get; set; }
    }
    
    /// <summary>
    /// DTO لعرض التذكير
    /// </summary>
    public class ReminderDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string UserId { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public DateTime ReminderTime { get; set; }
        public DateTime EventTime { get; set; }
        public bool IsSent { get; set; }
        public DateTime? SentAt { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
    
    /// <summary>
    /// DTO لإنشاء تذكير سريع (مع خيارات مسبقة)
    /// </summary>
    public class QuickReminderDto
    {
        public DateTime EventTime { get; set; }
        public ReminderTimeOption TimeOption { get; set; }
        public string? CustomMessage { get; set; }
    }
    
    /// <summary>
    /// خيارات أوقات التذكير المسبقة
    /// </summary>
    public enum ReminderTimeOption
    {
        FiveMinutes = 5,      // 5 دقائق قبل
        FifteenMinutes = 15,  // 15 دقيقة قبل
        ThirtyMinutes = 30,   // 30 دقيقة قبل
        OneHour = 60,         // ساعة واحدة قبل
        TwoHours = 120,       // ساعتين قبل
        OneDay = 1440,        // يوم واحد قبل
        Custom = 0            // وقت مخصص
    }
}
