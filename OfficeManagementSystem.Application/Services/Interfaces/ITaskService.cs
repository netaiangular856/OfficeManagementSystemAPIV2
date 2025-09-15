using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ITaskService
    {
        Task<ApiResponse<TaskDto>> CreateTaskAsync(CreateTaskDto createTaskDto, string currentUserId);
        Task<ApiResponse<PaginatedResult<TaskDto>>> GetTasksAsync(string managerId, TaskFilterDto filter);
        Task<ApiResponse<TaskDto>> GetTaskByIdAsync(int id);
        Task<ApiResponse<TaskDto>> UpdateTaskAsync(int id, UpdateTaskDto updateTaskDto);
        Task<ApiResponse<bool>> DeleteTaskAsync(int id);
        Task<ApiResponse<bool>> CloseTaskAsync(int id, CloseTaskDto closeTaskDto, string currentUserId);
        Task<ApiResponse<bool>> BulkCloseTasksAsync(BulkCloseTasksDto bulkCloseDto, string currentUserId);
        Task<ApiResponse<bool>> BulkReassignTasksAsync(BulkReassignTasksDto bulkReassignDto, string currentUserId);
        Task<ApiResponse<PaginatedResult<TaskDto>>> GetEmployeeTaskAsync(string employeeId, TaskFilterDto filter);
        Task<ApiResponse<IEnumerable<TaskFeedbackDto>>> GetTaskFeedbackAsync(int taskId);
        Task<ApiResponse<TaskFeedbackDto>> CreateTaskFeedbackAsync(int taskId, CreateTaskFeedbackDto createFeedbackDto, string currentUserId);
    }
}
