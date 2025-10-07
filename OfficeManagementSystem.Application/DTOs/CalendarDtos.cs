using System;

namespace OfficeManagementSystem.Application.DTOs
{
    /// <summary>
    /// DTO لحدث التقويم
    /// </summary>
    public class CalendarEventDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public EventType Type { get; set; }
        public string? Location { get; set; }
        public string? OnlineUrl { get; set; }
        public EventStatus Status { get; set; }
        public string? OrganizerName { get; set; }
        public string? AssigneeName { get; set; }
        public string? DepartmentName { get; set; }
        public int Priority { get; set; }
        public string Color { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    /// <summary>
    /// أنواع الأحداث
    /// </summary>
    public enum EventType
    {
        Meeting,
        Task,
        Visit,
        Travel
    }

    /// <summary>
    /// حالات الأحداث
    /// </summary>
    public enum EventStatus
    {
        Scheduled,
        InProgress,
        Completed,
        Cancelled,
        Overdue
    }

    /// <summary>
    /// DTO للتفاصيل الكاملة لحدث التقويم
    /// </summary>
    public class DetailedCalendarEventDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public EventType Type { get; set; }
        public string? Location { get; set; }
        public string? OnlineUrl { get; set; }
        public EventStatus Status { get; set; }
        public string? OrganizerName { get; set; }
        public string? AssigneeName { get; set; }
        public string? DepartmentName { get; set; }
        public int Priority { get; set; }
        public string Color { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        
        // تفاصيل إضافية
        public string DayName { get; set; } = string.Empty; // اليوم (السبت، الأحد، إلخ)
        public string DateFormatted { get; set; } = string.Empty; // التاريخ بصيغة مقروءة
        public string TimeFormatted { get; set; } = string.Empty; // الوقت بصيغة مقروءة
        public string DurationFormatted { get; set; } = string.Empty; // المدة بصيغة مقروءة
        public string Subject { get; set; } = string.Empty; // الموضوع
        public string AssignedEmployeeName { get; set; } = string.Empty; // الموظف المخول للمهمة
        public string AssignedEmployeeEmail { get; set; } = string.Empty; // إيميل الموظف المخول
        public string AssignedEmployeePhone { get; set; } = string.Empty; // تلفون الموظف المخول
        public string AssignedEmployeeDepartment { get; set; } = string.Empty; // قسم الموظف المخول
        public string StatusText { get; set; } = string.Empty; // حالة الحدث بالعربية
        public string PriorityText { get; set; } = string.Empty; // أولوية الحدث بالعربية
        public string TypeText { get; set; } = string.Empty; // نوع الحدث بالعربية
        
        // معلومات نوع الحدث والـ ID
        public string EventTypeName { get; set; } = string.Empty; // اسم نوع الحدث (اجتماع، مهمة، زيارة، سفر)
        public int OriginalEntityId { get; set; } // الـ ID الأصلي للكيان (اجتماع ID، مهمة ID، إلخ)
        
        // تفاصيل إضافية حسب نوع الحدث
        public List<string> Attendees { get; set; } = new(); // الحضور (للاجتماعات)
        public string? MeetingType { get; set; } // نوع الاجتماع
        public string? TaskCategory { get; set; } // فئة المهمة
        public string? VisitPurpose { get; set; } // غرض الزيارة
        public string? TravelDestination { get; set; } // وجهة السفر
        public string? TravelPurpose { get; set; } // غرض السفر
    }

    /// <summary>
    /// DTO مبسط لجدول التقويم
    /// </summary>
    public class SimpleCalendarEventDto
    {
        public string DayName { get; set; } = string.Empty; // اليوم (السبت، الأحد، إلخ)
        public string DateFormatted { get; set; } = string.Empty; // التاريخ بصيغة مقروءة
        public string Subject { get; set; } = string.Empty; // الموضوع
        public string TimeFormatted { get; set; } = string.Empty; // الوقت بصيغة مقروءة
        public string Location { get; set; } = string.Empty; // المكان
        public string AssignedEmployeeName { get; set; } = string.Empty; // الموظف المخول للمهمة
        public string EventTypeName { get; set; } = string.Empty; // نوع الحدث
        public int OriginalEntityId { get; set; } // الـ ID الأصلي
    }

    /// <summary>
    /// DTO لجدول التقويم المبسط
    /// </summary>
    public class SimpleCalendarTableDto
    {
        public List<SimpleCalendarEventDto> Events { get; set; } = new();
        public int TotalCount { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string PeriodDescription { get; set; } = string.Empty;
    }

    /// <summary>
    /// DTO لجدول التفاصيل الكاملة
    /// </summary>
    public class DetailedCalendarTableDto
    {
        public List<DetailedCalendarEventDto> Events { get; set; } = new();
        public int TotalCount { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string PeriodDescription { get; set; } = string.Empty;
    }
}
