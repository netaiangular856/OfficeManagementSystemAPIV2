using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;

namespace OfficeManagementSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkFlowController : ControllerBase
    {
        private readonly IWorkFlowLogsService _service;

        public WorkFlowController(IWorkFlowLogsService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<ActionResult<PaginatedResult<WorkflowLogDto>>> GetAuditLogs([FromQuery] WorkFlowLogFilterRequest request)
        {
            try
            {
                var result = await _service.GetAuditLogsAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "حدث خطأ أثناء جلب البيانات", error = ex.Message });
            }
        }
    }
}
