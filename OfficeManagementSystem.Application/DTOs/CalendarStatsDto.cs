using OfficeManagementSystem.Domain.Enums.Calendar;

namespace OfficeManagementSystem.Application.DTOs
{
    public class CalendarStatsDto
    {
        public CalendarPeriod Period { get; set; }
        public string PeriodName { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int MeetingsCount { get; set; }
        public int TasksCount { get; set; }
        public int VisitsCount { get; set; }
        public int TravelsCount { get; set; }
        public int TotalEventsCount { get; set; }
    }
}
