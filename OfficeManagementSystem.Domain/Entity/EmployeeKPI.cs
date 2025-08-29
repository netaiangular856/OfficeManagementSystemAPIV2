using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity
{
    public class EmployeeKPI
    {
        public int Id { get; set; }
        public string EmployeeId { get; set; }
        public Employee Employee { get; set; } = default!;
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
    }
}
