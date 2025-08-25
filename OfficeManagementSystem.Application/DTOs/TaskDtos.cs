using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Enums.Tasks;
using System.ComponentModel.DataAnnotations;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Application.DTOs
{
    // Task DTOs
    public class CreateTaskDto
    {
        [Required]
        [MaxLength(300)]
        public string Title { get; set; } = string.Empty;
        
        [MaxLength(2000)]
        public string? Description { get; set; }
        
        public int? DeptId { get; set; }
        
        public string? AssigneeUserId { get; set; }
        
        [Required]
        public TaskPriority Priority { get; set; }
        
        [Required]
        public DateTime DueDate { get; set; }
        
        [Required]
        public TaskSourceType SourceType { get; set; }
        
        public int? SourceId { get; set; }
    }

    public class UpdateTaskDto
    {
        [Required]
        [MaxLength(300)]
        public string Title { get; set; } = string.Empty;
        
        [MaxLength(2000)]
        public string? Description { get; set; }
        
        public int? DeptId { get; set; }
        
        public string? AssigneeUserId { get; set; }
        
        [Required]
        public TaskPriority Priority { get; set; }
        
        [Required]
        public DateTime DueDate { get; set; }
        
        [Required]
        public TaskSourceType SourceType { get; set; }
        
        public int? SourceId { get; set; }
    }

    public class TaskDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int? DeptId { get; set; }
        public string? DeptName { get; set; }
        public string? AssigneeUserId { get; set; }
        public string? AssigneeName { get; set; }
        public TaskPriority Priority { get; set; }
        public DateTime DueDate { get; set; }
        public TaskStatus Status { get; set; }
        public TaskSourceType SourceType { get; set; }
        public int? SourceId { get; set; }
        public string CreatedByUserId { get; set; } = string.Empty;
        public string CreatedByName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int UpdatesCount { get; set; }
        public int AttachmentsCount { get; set; }
    }

    public class TaskFilterDto
    {
        public TaskStatus? Status { get; set; }
        public DateTime? DueDateFrom { get; set; }
        public DateTime? DueDateTo { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }

    // Task Update DTOs
    public class CreateTaskUpdateDto
    {
        [MaxLength(2000)]
        public string? Note { get; set; }
        
    }

    public class TaskUpdateDto
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public string? Note { get; set; }
        public string CreatedByUserId { get; set; } = string.Empty;
        public string CreatedByName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    // Task Attachment DTOs
    public class TaskAttachmentDto
    {
        public int Id { get; set; }
        public int TaskItemId { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public string? FileType { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string UploadedByUserId { get; set; } = string.Empty;
        public string UploadedByName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime UploadedAt { get; set; }
    }

    public class UplodeTaskDto
    {
        public IFormFile File { get; set; }
        public string? Description { get; set; }
    }

    // Bulk Operations DTOs
    public class BulkCloseTasksDto
    {
        [Required]
        public List<int> TaskIds { get; set; } = new();
        
        [Required]
        public TaskStatus Status { get; set; }
        
        [MaxLength(2000)]
        public string? Note { get; set; }
    }

    public class BulkReassignTasksDto
    {
        [Required]
        public List<int> TaskIds { get; set; } = new();
        
        [Required]
        public string NewAssigneeUserId { get; set; } = string.Empty;
        
        [MaxLength(2000)]
        public string? Note { get; set; }
    }

    // Close Task DTO
    public class CloseTaskDto
    {
        [Required]
        public TaskStatus Status { get; set; }
        
        [MaxLength(2000)]
        public string? Note { get; set; }
    }
}
