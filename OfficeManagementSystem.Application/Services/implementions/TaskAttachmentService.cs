using AutoMapper;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;

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

        public async Task<ApiResponse<TaskAttachmentDto>> UploadAttachmentAsync(int taskId, IFormFile file, string currentUserId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<TaskAttachmentDto>.ErrorResponse("Task not found");

                // Save file
                var filePath = await _attachmentFileService.SaveAttachmentAsync(file, "Tasks");

                // Create attachment record
                var attachment = new TaskAttachment
                {
                    TaskItemId = taskId,
                    FilePath = filePath,
                    FileType = Path.GetExtension(file.FileName).ToLowerInvariant(),
                    UploadedByUserId = currentUserId,
                    UploadedAt = DateTime.UtcNow
                };

                await _unitOfWork.TaskAttachmentRepository.AddAsync(attachment);
                await _unitOfWork.SaveAsync();

                var attachmentDto = _mapper.Map<TaskAttachmentDto>(attachment);
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
                var attachmentDtos = _mapper.Map<List<TaskAttachmentDto>>(attachments);

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
                _attachmentFileService.DeleteAttachment(attachment.FilePath);

                // Delete from database
                await _unitOfWork.TaskAttachmentRepository.DeleteAsync(attachmentId);
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
