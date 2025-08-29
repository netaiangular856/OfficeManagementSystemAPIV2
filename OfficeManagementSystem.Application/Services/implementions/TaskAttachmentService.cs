using AutoMapper;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Reflection.Metadata;
using Document = OfficeManagementSystem.Domain.Entity.Documents.Document;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class TaskAttachmentService : ITaskAttachmentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IAttachmentFileService _attachmentFileService;

        public TaskAttachmentService(IUnitOfWork unitOfWork, IMapper mapper, IAttachmentFileService attachmentFileService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _attachmentFileService = attachmentFileService;
        }

        public async Task<ApiResponse<TaskAttachmentDto>> UploadAttachmentAsync(int taskId, UplodeTaskDto UplodeDto, string currentUserId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<TaskAttachmentDto>.ErrorResponse("Task not found");

                // Save file to storage
                var filePath = await _attachmentFileService.SaveAttachmentAsync(UplodeDto.File, "Tasks");

                // Create Document record
                var document = new Document
                {
                    Title = Path.GetFileNameWithoutExtension(UplodeDto.File.FileName),
                    Type = DocumentType.Task,
                    DocumentSource=UplodeDto.DocumentSource,// Õÿ enum „‰«”» ⁄‰œﬂ
                    StoragePath = filePath,
                    Description = UplodeDto.Description,
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow,
                };

                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.AttachmentAdded,
                    Description = $"New Attachment added to Task '{task.Title}'",
                    UserId = currentUserId // √Ê ŒœÂ „‰ «·‹ Context Õ”» «·„” Œœ„ «·Õ«·Ì
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.DocumentRepository.AddAsync(document);
                await _unitOfWork.SaveAsync();

                // Create TaskAttachment record linking task & document
                var attachment = new TaskAttachment
                {
                    TaskItemId = taskId,
                    DocumentId = document.Id
                };

                await _unitOfWork.TaskAttachmentRepository.AddAsync(attachment);
                await _unitOfWork.SaveAsync();

                // Prepare DTO
                var attachmentDto = new TaskAttachmentDto
                {
                    Id = attachment.Id,
                    TaskItemId = taskId,
                    FilePath = document.StoragePath,
                    FileType = Path.GetExtension(UplodeDto.File.FileName).ToLowerInvariant(),
                    FileName = UplodeDto.File.FileName,
                    UploadedByUserId = document.CreatedByUserId,
                    UploadedByName = task.CreatedBy?.UserName ?? string.Empty, // √Ê Â« Â« „‰ «·‹ UserService
                    UploadedAt = document.CreatedAt,
                    Description=document.Description,
                    DocumentSource=UplodeDto.DocumentSource
                };

                return ApiResponse<TaskAttachmentDto>.SuccessResponse(attachmentDto, "Attachment uploaded successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskAttachmentDto>.ErrorResponse($"Error uploading attachment: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<TaskAttachmentDto>>> GetTaskAttachmentsAsync(int taskId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<List<TaskAttachmentDto>>.ErrorResponse("Task not found");

                var attachments = await _unitOfWork.TaskAttachmentRepository.GetAttachmentsByTaskIdAsync(taskId);


                // Include Document info in DTO
                var attachmentDtos = attachments.Select(a => new TaskAttachmentDto
                {
                    Id = a.Id,
                    TaskItemId = a.TaskItemId,
                    FilePath = a.Document.StoragePath,
                    FileType = Path.GetExtension(a.Document.StoragePath).ToLowerInvariant(),
                    FileName = a.Document.Title,
                    UploadedByUserId = a.Document.CreatedByUserId,
                    UploadedByName = (a.Document.CreatedBy != null) ? $"{a.Document.CreatedBy.FirstName} {a.Document.CreatedBy.LastName}" : "",
                    UploadedAt = a.Document.CreatedAt,
                    Description = a.Document.Description,
                    DocumentSource = a.Document.DocumentSource,
                }).ToList();

                return ApiResponse<List<TaskAttachmentDto>>.SuccessResponse(attachmentDtos, "Task attachments retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<List<TaskAttachmentDto>>.ErrorResponse($"Error retrieving task attachments: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAttachmentAsync(int taskId, int attachmentId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<bool>.ErrorResponse("Task not found");

                // Get attachment
                var attachment = await _unitOfWork.TaskAttachmentRepository.GetAttachmentByTaskIdAndIdAsync(taskId, attachmentId);
                if (attachment == null)
                    return ApiResponse<bool>.ErrorResponse("Attachment not found");

                // Delete file from storage
                _attachmentFileService.DeleteAttachment(attachment.Document.StoragePath);

                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Delete Task Attachment task Name: '{task.Title}'",
                    UserId = task.CreatedByUserId // √Ê ŒœÂ „‰ «·‹ Context Õ”» «·„” Œœ„ «·Õ«·Ì
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                // Delete document + attachment
                await _unitOfWork.TaskAttachmentRepository.DeleteAsync(attachmentId);
                await _unitOfWork.DocumentRepository.DeleteAsync(attachment.DocumentId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "Attachment deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error deleting attachment: {ex.Message}");
            }
        }
    }

}
