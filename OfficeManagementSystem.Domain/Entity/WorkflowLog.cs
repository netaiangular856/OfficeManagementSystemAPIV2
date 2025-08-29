using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity
{
    public class WorkflowLog
    {
        public int Id { get; set; }

        // نوع الكيان: Task, Meeting, User, Recommendation, إلخ
        public string EntityName { get; set; } = default!;

        // رقم الـ Entity نفسه (مثلاً TaskId = 5)
        public int EntityId { get; set; }

        // نوع العملية: Created, Updated, Deleted, StatusChanged
        public WorkflowActionType ActionType { get; set; }

        // وصف تفصيلي للعملية
        public string Description { get; set; } = default!;

        // مين اللي عمل الحركة
        public string UserId { get; set; } = default!;
        public AppUser User { get; set; } = default!;

        // الوقت
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
