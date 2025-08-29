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
        Task
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
}
