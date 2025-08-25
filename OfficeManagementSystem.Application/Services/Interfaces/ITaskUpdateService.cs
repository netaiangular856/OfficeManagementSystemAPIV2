using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ITaskUpdateService
    {
        Task<ApiResponse<TaskUpdateDto>> CreateTaskUpdateAsync(int taskId, CreateTaskUpdateDto createUpdateDto, string currentUserId);
        Task<ApiResponse<List<TaskUpdateDto>>> GetTaskUpdatesAsync(int taskId);
    }
}
