using System;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskAssignment
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public TaskItem Task { get; set; } = default!;

        public string EmployeeUserId { get; set; } = default!;
        public Employee Employee { get; set; } = default!;

        public bool IsPrimary { get; set; }
        public DateTime AssignedAt { get; set; } = DateTime.UtcNow;
    }
}


