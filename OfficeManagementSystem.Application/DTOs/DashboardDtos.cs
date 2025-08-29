using System;
using System.Collections.Generic;

namespace OfficeManagementSystem.Application.DTOs
{
    /// <summary>
    /// DTO للفلتر بالتاريخ
    /// </summary>
    public class DashboardDateFilterDto
    {
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
    }

    /// <summary>
    /// ملخص عام للنظام
    /// </summary>
    public class SystemOverviewDto
    {
        public int TotalTasks { get; set; }
        public int CompletedTasks { get; set; }
        public int PendingTasks { get; set; }
        public int OverdueTasks { get; set; }
        public double TaskCompletionRate { get; set; }

        public int TotalMeetings { get; set; }
        public int CompletedMeetings { get; set; }
        public int UpcomingMeetings { get; set; }
        public int CancelledMeetings { get; set; }

        public int TotalLetters { get; set; }
        public int IncomingLetters { get; set; }
        public int OutgoingLetters { get; set; }

        public int TotalEmployees { get; set; }
        public double AverageKpiScore { get; set; }
    }

    /// <summary>
    /// ملخص المهام
    /// </summary>
    public class TasksOverviewDto
    {
        public int TotalTasks { get; set; }
        public int CompletedTasks { get; set; }
        public int PendingTasks { get; set; }
        public int OverdueTasks { get; set; }
        public double CompletionRate { get; set; }
        public List<TaskStatusDistributionDto> StatusDistribution { get; set; } = new();
        public List<TaskPriorityDistributionDto> PriorityDistribution { get; set; } = new();
    }

    /// <summary>
    /// توزيع حالة المهام
    /// </summary>
    public class TaskStatusDistributionDto
    {
        public string Status { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// توزيع أولوية المهام
    /// </summary>
    public class TaskPriorityDistributionDto
    {
        public string Priority { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// اتجاه المهام
    /// </summary>
    public class TasksTrendDto
    {
        public List<TaskTrendDataDto> TrendData { get; set; } = new();
    }

    /// <summary>
    /// بيانات اتجاه المهام
    /// </summary>
    public class TaskTrendDataDto
    {
        public DateTime Date { get; set; }
        public int CreatedTasks { get; set; }
        public int CompletedTasks { get; set; }
        public int OverdueTasks { get; set; }
    }

    /// <summary>
    /// ملخص الاجتماعات
    /// </summary>
    public class MeetingsOverviewDto
    {
        public int TotalMeetings { get; set; }
        public int CompletedMeetings { get; set; }
        public int UpcomingMeetings { get; set; }
        public int CancelledMeetings { get; set; }
        public double CompletionRate { get; set; }
        public List<MeetingStatusDistributionDto> StatusDistribution { get; set; } = new();
        public List<MeetingTypeDistributionDto> TypeDistribution { get; set; } = new();
    }

    /// <summary>
    /// توزيع حالة الاجتماعات
    /// </summary>
    public class MeetingStatusDistributionDto
    {
        public string Status { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// توزيع نوع الاجتماعات
    /// </summary>
    public class MeetingTypeDistributionDto
    {
        public string Type { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// ملخص المراسلات
    /// </summary>
    public class LettersOverviewDto
    {
        public int TotalLetters { get; set; }
        public int IncomingLetters { get; set; }
        public int OutgoingLetters { get; set; }
        public List<LetterTypeDistributionDto> TypeDistribution { get; set; } = new();
    }

    /// <summary>
    /// توزيع نوع المراسلات
    /// </summary>
    public class LetterTypeDistributionDto
    {
        public string Type { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// توزيع حالة المراسلات
    /// </summary>
    public class LetterStatusDistributionDto
    {
        public string Status { get; set; } = string.Empty;
        public int Count { get; set; }
        public double Percentage { get; set; }
    }

    /// <summary>
    /// المراسلات الشهرية
    /// </summary>
    public class LettersMonthlyDto
    {
        public List<LetterMonthlyDataDto> MonthlyData { get; set; } = new();
    }

    /// <summary>
    /// بيانات المراسلات الشهرية
    /// </summary>
    public class LetterMonthlyDataDto
    {
        public string Month { get; set; } = string.Empty;
        public int IncomingLetters { get; set; }
        public int OutgoingLetters { get; set; }
        public int TotalLetters { get; set; }
    }

    /// <summary>
    /// اتجاه KPI الموظفين
    /// </summary>
    public class EmployeeKpiTrendDto
    {
        public List<EmployeeKpiTrendDataDto> TrendData { get; set; } = new();
    }

    /// <summary>
    /// بيانات اتجاه KPI الموظفين
    /// </summary>
    public class EmployeeKpiTrendDataDto
    {
        public DateTime Date { get; set; }
        public double AverageKpiScore { get; set; }
        public int TotalEmployees { get; set; }
        public int HighPerformers { get; set; }
        public int AveragePerformers { get; set; }
        public int LowPerformers { get; set; }
    }

    /// <summary>
    /// قائمة المتصدرين
    /// </summary>
    public class EmployeeLeaderboardDto
    {
        public List<EmployeeLeaderboardItemDto> TopPerformers { get; set; } = new();
    }

    /// <summary>
    /// عنصر قائمة المتصدرين
    /// </summary>
    public class EmployeeLeaderboardItemDto
    {
        public string EmployeeId { get; set; } = string.Empty;
        public string EmployeeName { get; set; } = string.Empty;
        public string Department { get; set; } = string.Empty;
        public double KpiScore { get; set; }
        public int CompletedTasks { get; set; }
        public int TotalTasks { get; set; }
        public double TaskCompletionRate { get; set; }
        public int Rank { get; set; }
    }
}
