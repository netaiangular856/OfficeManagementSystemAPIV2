using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Tasks
{
    public class TaskFeedback
    {
        public int Id { get; set; }

        // ربط الفيدباك بالتاسك
        public int TaskItemId { get; set; }
        public TaskItem TaskItem { get; set; } = default!;

        // الموظف اللي كتب الفيدباك
        public string EmployeeUserId { get; set; } = default!;
        [ForeignKey(nameof(EmployeeUserId))]
        public AppUser Employee { get; set; } = default!;

        // محتوى الفيدباك
        public string FeedbackText { get; set; } = default!;


        // وقت إرسال الفيدباك
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
