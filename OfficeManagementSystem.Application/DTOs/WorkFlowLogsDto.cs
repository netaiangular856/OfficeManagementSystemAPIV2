using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.DTOs
{
    public class WorkflowLogDto
    {
        public int Id { get; set; }
        public string EntityName { get; set; } = default!;
        public int EntityId { get; set; }
        public string ActionType { get; set; } = default!; // string بدل enum
        public string Description { get; set; } = default!;
        public string UserId { get; set; } = default!;
        public string UserName { get; set; } = default!;
        public DateTime CreatedAt { get; set; }
    }

    public class WorkFlowLogFilterRequest
    {
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string? Search { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
