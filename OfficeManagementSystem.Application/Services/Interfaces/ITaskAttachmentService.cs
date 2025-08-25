using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using Microsoft.AspNetCore.Http;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ITaskAttachmentService
    {
        Task<ApiResponse<TaskAttachmentDto>> UploadAttachmentAsync(int taskId, UplodeTaskDto UplodeDto, string currentUserId);
        Task<ApiResponse<List<TaskAttachmentDto>>> GetTaskAttachmentsAsync(int taskId);
        Task<ApiResponse<bool>> DeleteAttachmentAsync(int taskId, int attachmentId);
    }
}
