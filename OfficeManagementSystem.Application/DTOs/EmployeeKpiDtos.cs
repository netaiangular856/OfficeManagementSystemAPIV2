using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;

namespace OfficeManagementSystem.Application.DTOs
{
    public class EmployeeKpiDto
    {
        public int Id { get; set; }
        public string EmployeeId { get; set; } = string.Empty;
        public string EmployeeName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public DateOnly PeriodStart { get; set; }
        public DateOnly PeriodEnd { get; set; }
        public int TasksAssigned { get; set; }
        public int TasksCompleted { get; set; }
        public int TasksLate { get; set; }
        public decimal AvgCompletionDays { get; set; }
        public int MeetingsAttended { get; set; }
        public int MeetingsMissed { get; set; }
        public decimal ResponseSpeedAvgHours { get; set; }
        public decimal Score { get; set; }
        public DateTime CalculatedAt { get; set; }
    }

    public class EmployeeKpiSummaryDto
    {
        public string EmployeeId { get; set; } = string.Empty;
        public string EmployeeName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public EmployeeKpiDto? CurrentPeriodKpi { get; set; }
        public EmployeeKpiDto? PreviousPeriodKpi { get; set; }
        public decimal PerformanceTrend { get; set; } // Percentage change from previous period
    }

    public class RecalculateKpisRequestDto
    {
        public DateOnly? PeriodStart { get; set; }
        public DateOnly? PeriodEnd { get; set; }
        public bool RecalculateAllEmployees { get; set; } = true;
        public List<string>? SpecificEmployeeIds { get; set; }
    }

    public class RecalculateKpisResponseDto
    {
        public int TotalEmployeesProcessed { get; set; }
        public int SuccessfulCalculations { get; set; }
        public int FailedCalculations { get; set; }
        public List<string> Errors { get; set; } = new();
        public DateTime CalculationStartedAt { get; set; }
        public DateTime CalculationCompletedAt { get; set; }
        public TimeSpan TotalDuration { get; set; }
    }
}
