using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Enums.Tasks;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TasksController : ControllerBase
    {
        private readonly ITaskService _taskService;
        private readonly ITaskUpdateService _taskUpdateService;
        private readonly ITaskAttachmentService _taskAttachmentService;

        public TasksController(
            ITaskService taskService,
            ITaskUpdateService taskUpdateService,
            ITaskAttachmentService taskAttachmentService)
        {
            _taskService = taskService;
            _taskUpdateService = taskUpdateService;
            _taskAttachmentService = taskAttachmentService;
        }

        private string GetCurrentUserId()
        {
            return User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? string.Empty;
        }

        // POST api/v1/tasks
        [HttpPost]
        public async Task<ActionResult<ApiResponse<TaskDto>>> CreateTask([FromBody] CreateTaskDto createTaskDto)
        {
            var currentUserId = GetCurrentUserId();
            var result = await _taskService.CreateTaskAsync(createTaskDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return CreatedAtAction(nameof(GetTaskById), new { id = result.Data!.Id }, result);
        }

        // GET api/v1/tasks
        [HttpGet]
        public async Task<ActionResult<ApiResponse<PaginatedResult<TaskDto>>>> GetTasks([FromQuery] TaskFilterDto filter)
        {
            var result = await _taskService.GetTasksAsync(filter);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // GET api/v1/tasks/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ApiResponse<TaskDto>>> GetTaskById(int id)
        {
            var result = await _taskService.GetTaskByIdAsync(id);
            
            if (!result.Success)
                return NotFound(result);
                
            return Ok(result);
        }

        // PUT api/v1/tasks/{id}
        [HttpPut("{id}")]
        public async Task<ActionResult<ApiResponse<TaskDto>>> UpdateTask(int id, [FromBody] UpdateTaskDto updateTaskDto)
        {
            var result = await _taskService.UpdateTaskAsync(id, updateTaskDto);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // DELETE api/v1/tasks/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeleteTask(int id)
        {
            var result = await _taskService.DeleteTaskAsync(id);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // POST api/v1/tasks/{id}/status
        [HttpPost("{id}/status")]
        public async Task<ActionResult<ApiResponse<bool>>> CloseTask(int id, [FromBody] CloseTaskDto closeTaskDto)
        {
            var currentUserId = GetCurrentUserId();
            var result = await _taskService.CloseTaskAsync(id, closeTaskDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // POST api/v1/tasks/bulk/status
        [HttpPost("bulk/status")]
        public async Task<ActionResult<ApiResponse<bool>>> BulkCloseTasks([FromBody] BulkCloseTasksDto bulkCloseDto)
        {
            var currentUserId = GetCurrentUserId();
            var result = await _taskService.BulkCloseTasksAsync(bulkCloseDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // POST api/v1/tasks/bulk/reassign
        [HttpPost("bulk/reassign")]
        public async Task<ActionResult<ApiResponse<bool>>> BulkReassignTasks([FromBody] BulkReassignTasksDto bulkReassignDto)
        {
            var currentUserId = GetCurrentUserId();
            var result = await _taskService.BulkReassignTasksAsync(bulkReassignDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // POST api/v1/tasks/{id}/updates
        [HttpPost("{id}/updates")]
        public async Task<ActionResult<ApiResponse<TaskUpdateDto>>> CreateTaskUpdate(int id, [FromBody] CreateTaskUpdateDto createUpdateDto)
        {
            var currentUserId = GetCurrentUserId();
            var result = await _taskUpdateService.CreateTaskUpdateAsync(id, createUpdateDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return CreatedAtAction(nameof(GetTaskUpdates), new { id }, result);
        }

        // GET api/v1/tasks/{id}/updates
        [HttpGet("{id}/updates")]
        public async Task<ActionResult<ApiResponse<List<TaskUpdateDto>>>> GetTaskUpdates(int id)
        {
            var result = await _taskUpdateService.GetTaskUpdatesAsync(id);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // POST api/v1/tasks/{id}/attachments
        [HttpPost("{id}/attachments")]
        public async Task<ActionResult<ApiResponse<TaskAttachmentDto>>> UploadAttachment(int id, [FromForm]UplodeTaskDto UplodeDto)
        {
            if (UplodeDto.File == null || UplodeDto.File.Length == 0)
                return BadRequest(ApiResponse<TaskAttachmentDto>.ErrorResponse("No file provided"));

            var currentUserId = GetCurrentUserId();
            var result = await _taskAttachmentService.UploadAttachmentAsync(id, UplodeDto, currentUserId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return CreatedAtAction(nameof(GetTaskAttachments), new { id }, result);
        }

        // GET api/v1/tasks/{id}/attachments
        [HttpGet("{id}/attachments")]
        public async Task<ActionResult<ApiResponse<List<TaskAttachmentDto>>>> GetTaskAttachments(int id)
        {
            var result = await _taskAttachmentService.GetTaskAttachmentsAsync(id);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }

        // DELETE api/v1/tasks/{id}/attachments/{attachmentId}
        [HttpDelete("{id}/attachments/{attachmentId}")]
        public async Task<ActionResult<ApiResponse<bool>>> DeleteAttachment(int id, int attachmentId)
        {
            var result = await _taskAttachmentService.DeleteAttachmentAsync(id, attachmentId);
            
            if (!result.Success)
                return BadRequest(result);
                
            return Ok(result);
        }
    }
}
