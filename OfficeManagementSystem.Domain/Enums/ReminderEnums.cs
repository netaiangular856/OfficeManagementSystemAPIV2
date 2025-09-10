using System;

namespace OfficeManagementSystem.Domain.Enums
{
    /// <summary>
    /// أنواع الأحداث المرتبطة بالتذكير
    /// </summary>
    public enum ReminderEventType
    {
        Meeting,    // اجتماع
        Task,       // مهمة
        Visit,      // زيارة
        Travel      // سفر
    }
    
    /// <summary>
    /// حالات التذكير
    /// </summary>
    public enum ReminderStatus
    {
        Pending,    // في الانتظار
        Sent,       // تم الإرسال
        Cancelled,  // تم الإلغاء
        Failed      // فشل الإرسال
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
