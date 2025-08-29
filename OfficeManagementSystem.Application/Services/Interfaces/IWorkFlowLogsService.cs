using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IWorkFlowLogsService
    {
        Task<PaginatedResult<WorkflowLogDto>> GetAuditLogsAsync(WorkFlowLogFilterRequest request);
    }
}
