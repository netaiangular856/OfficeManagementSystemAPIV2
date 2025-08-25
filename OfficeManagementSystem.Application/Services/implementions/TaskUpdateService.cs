using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class TaskUpdateService : ITaskUpdateService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TaskUpdateService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ApiResponse<TaskUpdateDto>> CreateTaskUpdateAsync(int taskId, CreateTaskUpdateDto createUpdateDto, string currentUserId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<TaskUpdateDto>.ErrorResponse("Task not found");

                var taskUpdate = _mapper.Map<TaskUpdate>(createUpdateDto);
                taskUpdate.TaskItemId = taskId;
                taskUpdate.CreatedByUserId = currentUserId;

                await _unitOfWork.TaskUpdateRepository.AddAsync(taskUpdate);
                await _unitOfWork.SaveAsync();

                var taskUpdateDto = _mapper.Map<TaskUpdateDto>(taskUpdate);
                return ApiResponse<TaskUpdateDto>.SuccessResponse(taskUpdateDto, "Task update created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskUpdateDto>.ErrorResponse($"Error creating task update: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<TaskUpdateDto>>> GetTaskUpdatesAsync(int taskId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<List<TaskUpdateDto>>.ErrorResponse("Task not found");

                var updates = await _unitOfWork.TaskUpdateRepository.GetUpdatesByTaskIdAsync(taskId);
                var updateDtos = _mapper.Map<List<TaskUpdateDto>>(updates);

                return ApiResponse<List<TaskUpdateDto>>.SuccessResponse(updateDtos, "Task updates retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<List<TaskUpdateDto>>.ErrorResponse($"Error retrieving task updates: {ex.Message}");
            }
        }
    }
}
