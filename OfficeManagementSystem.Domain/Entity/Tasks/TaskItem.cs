using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Tasks;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public string? Description { get; set; }
        public int? DeptId { get; set; }
        public Department Dept { get; set; } = default!;
        public string? AssigneeUserId { get; set; } = default!;
        public Employee Assignee { get; set; } = default!;
        public TaskPriority Priority { get; set; }
        public DateTime DueDate { get; set; }
        public TaskStatus Status { get; set; }
        public TaskSourceType SourceType { get; set; }
        public int? SourceId { get; set; }
        public string CreatedByUserId { get; set; } = default!;
        public AppUser CreatedBy { get; set; } = default!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public ICollection<TaskUpdate> Updates { get; set; } = new List<TaskUpdate>();
        public ICollection<TaskAttachment> Attachments { get; set; } = new List<TaskAttachment>();
        public ICollection<TaskFeedback> Feedbacks { get; set; } = new List<TaskFeedback>();
    }
}
