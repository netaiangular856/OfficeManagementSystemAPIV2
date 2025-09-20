using AutoMapper;
using Microsoft.AspNetCore.Identity;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Net.Mail;
using System.Threading.Tasks;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class TaskService : ITaskService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ISendNotificationService _notificationService;
        private readonly UserManager<AppUser> _userManager;

        public TaskService(IUnitOfWork unitOfWork, IMapper mapper,ISendNotificationService notificationService,UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _notificationService = notificationService;
            _userManager = userManager;
        }

        public async Task<ApiResponse<TaskDto>> CreateTaskAsync(CreateTaskDto createTaskDto, string currentUserId)
        {
            try
            {
                var task = _mapper.Map<TaskItem>(createTaskDto);

                var user=await _userManager.FindByIdAsync(currentUserId);
                if(user == null)
                {
                    return ApiResponse<TaskDto>.ErrorResponse("Manager Not Found");
                }

                task.CreatedByUserId = currentUserId;
                task.Status = TaskStatus.New;
                task.DeptId = user.DepartmentId;

                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New Task added '{task.Title}' and assgin to {task.AssigneeUserId}",
                    UserId = task.CreatedByUserId // √Ê ŒœÂ „‰ «·‹ Context Õ”» «·„” Œœ„ «·Õ«·Ì
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskRepository.AddAsync(task);
                await _unitOfWork.SaveAsync();

                var taskDto = _mapper.Map<TaskDto>(task);
                await _notificationService.SendNotificationAsync(
                    "New Task Assigned",
                    $"A new task has been assigned to you: {task.Title} deadline : {task.DueDate},Please check your task list for details.",
                    new List<string> { task.AssigneeUserId },
                    "Task"
                );
                return ApiResponse<TaskDto>.SuccessResponse(taskDto, "Task created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskDto>.ErrorResponse($"Error creating task: {ex.Message}");
            }
        }
        public async Task<ApiResponse<PaginatedResult<TaskDto>>> GetAllTasksAsync(TaskFilterDto filter)
        {
            try
            {
                var allTasks = await _unitOfWork.TaskRepository
                    .GetAllAsync( includeProperties: "Dept,Assignee,CreatedBy");

                // Apply filters in memory
                var filteredTasks = allTasks.AsQueryable();

                if (filter.Status.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.Status == filter.Status.Value);

                if (filter.DueDateFrom.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate >= filter.DueDateFrom.Value);

                if (filter.DueDateTo.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate <= filter.DueDateTo.Value);

                // Get total count
                var totalCount = filteredTasks.Count();

                // Apply pagination
                var pagedTasks = filteredTasks
                    .Skip((filter.Page - 1) * filter.PageSize)
                    .Take(filter.PageSize)
                    .ToList();

                // Map to DTOs
                var taskDtos = _mapper.Map<List<TaskDto>>(pagedTasks);

                var result = new PaginatedResult<TaskDto>
                {
                    TotalCount = totalCount,
                    Page = filter.Page,
                    PageSize = filter.PageSize,
                    Items = taskDtos
                };

                return ApiResponse<PaginatedResult<TaskDto>>.SuccessResponse(result, "Tasks retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<TaskDto>>.ErrorResponse($"Error retrieving tasks: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<TaskDto>>> GetTasksAsync(string managerId,TaskFilterDto filter)
        {
            try
            {
                var allTasks = await _unitOfWork.TaskRepository
                    .GetAllAsync(filter:m=>m.Assignee.ManagerId== managerId, includeProperties: "Dept,Assignee,CreatedBy");
                
                // Apply filters in memory
                var filteredTasks = allTasks.AsQueryable();
                
                if (filter.Status.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.Status == filter.Status.Value);

                if (filter.DueDateFrom.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate >= filter.DueDateFrom.Value);

                if (filter.DueDateTo.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate <= filter.DueDateTo.Value);

                // Get total count
                var totalCount = filteredTasks.Count();

                // Apply pagination
                var pagedTasks = filteredTasks
                    .Skip((filter.Page - 1) * filter.PageSize)
                    .Take(filter.PageSize)
                    .ToList();

                // Map to DTOs
                var taskDtos = _mapper.Map<List<TaskDto>>(pagedTasks);

                var result = new PaginatedResult<TaskDto>
                {
                    TotalCount = totalCount,
                    Page = filter.Page,
                    PageSize = filter.PageSize,
                    Items = taskDtos
                };

                return ApiResponse<PaginatedResult<TaskDto>>.SuccessResponse(result, "Tasks retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<TaskDto>>.ErrorResponse($"Error retrieving tasks: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TaskDto>> GetTaskByIdAsync(int id)
        {
            try
            {
                var task = await _unitOfWork.TaskRepository.GetTaskWithDetailsAsync(id);
                if (task == null)
                    return ApiResponse<TaskDto>.ErrorResponse("Task not found");

                var taskDto = _mapper.Map<TaskDto>(task);
                return ApiResponse<TaskDto>.SuccessResponse(taskDto, "Task retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskDto>.ErrorResponse($"Error retrieving task: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TaskDto>> UpdateTaskAsync(int id, UpdateTaskDto updateTaskDto)
        {
            try
            {
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(id);
                if (task == null)
                    return ApiResponse<TaskDto>.ErrorResponse("Task not found");

                _mapper.Map(updateTaskDto, task);
                task.UpdatedAt = DateTime.UtcNow;

                //  Workflow log
                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Task '{task.Title}' updated at {DateTime.UtcNow}",
                    UserId = task.CreatedByUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskRepository.UpdateAsync(task);
                await _unitOfWork.SaveAsync();

                var taskDto = _mapper.Map<TaskDto>(task);
                return ApiResponse<TaskDto>.SuccessResponse(taskDto, "Task updated successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskDto>.ErrorResponse($"Error updating task: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteTaskAsync(int id)
        {
            try
            {
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(id);
                if (task == null)
                    return ApiResponse<bool>.ErrorResponse("Task not found");

                //  Workflow log
                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Task '{task.Title}' deleted at {DateTime.UtcNow}",
                    UserId = task.CreatedByUserId // √Ê «·„” Œœ„ «·Õ«·Ì
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "Task deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error deleting task: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> CloseTaskAsync(int id, CloseTaskDto closeTaskDto, string currentUserId)
        {
            try
            {
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(id);
                if (task == null)
                    return ApiResponse<bool>.ErrorResponse("Task not found");

                if (task.Status == TaskStatus.Done || task.Status == TaskStatus.Stopped)
                    return ApiResponse<bool>.ErrorResponse("Task is already closed");

                if(task.Status==closeTaskDto.Status)
                    return ApiResponse<bool>.ErrorResponse($"Task is already {task.Status}");

                task.Status = closeTaskDto.Status;
                task.UpdatedAt = DateTime.UtcNow;

                // Create task update for closing
                var taskUpdate = new TaskUpdate
                {
                    TaskItemId = id,
                    Note = closeTaskDto.Note ?? $"Task {closeTaskDto.Status.ToString().ToLower()}",
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow
                };

                // Workflow log
                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Task '{task.Title}' closed with status {task.Status} at {DateTime.UtcNow}",
                    UserId = currentUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskRepository.UpdateAsync(task);
                await _unitOfWork.TaskUpdateRepository.AddAsync(taskUpdate);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, $"Task Status Change To {closeTaskDto.Status} successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error closing task: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> BulkCloseTasksAsync(BulkCloseTasksDto bulkCloseDto, string currentUserId)
        {
            try
            {
                var tasks = new List<TaskItem>();
                var updates = new List<TaskUpdate>();

                foreach (var taskId in bulkCloseDto.TaskIds)
                {
                    var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                    if (task != null && task.Status != TaskStatus.Done && task.Status != TaskStatus.Stopped)
                    {
                        task.Status = bulkCloseDto.Status;
                        task.UpdatedAt = DateTime.UtcNow;
                        tasks.Add(task);

                        var taskUpdate = new TaskUpdate
                        {
                            TaskItemId = taskId,
                            Note = bulkCloseDto.Note ?? $"Task {bulkCloseDto.Status.ToString().ToLower()}",
                            CreatedByUserId = currentUserId,
                            CreatedAt = DateTime.UtcNow
                        };
                        updates.Add(taskUpdate);
                    }
                }

                foreach (var task in tasks)
                {
                    await _unitOfWork.TaskRepository.UpdateAsync(task);
                }

                foreach (var update in updates)
                {
                    await _unitOfWork.TaskUpdateRepository.AddAsync(update);
                }

                // Workflow log
                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = 0, // √Ê „„ﬂ‰  Œ·ÌÂ« null / √Ê· TaskId
                    ActionType = WorkflowActionType.Updated,
                    Description = $"{tasks.Count} tasks closed with status {bulkCloseDto.Status} at {DateTime.UtcNow}",
                    UserId = currentUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, $"{tasks.Count} tasks status Changes To {bulkCloseDto.Status} successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error bulk change tasks status: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> BulkReassignTasksAsync(BulkReassignTasksDto bulkReassignDto, string currentUserId)
        {
            try
            {
                var tasks = new List<TaskItem>();
                var updates = new List<TaskUpdate>();

                foreach (var taskId in bulkReassignDto.TaskIds)
                {
                    var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                    if (task != null)
                    {
                        task.AssigneeUserId = bulkReassignDto.NewAssigneeUserId;
                        task.UpdatedAt = DateTime.UtcNow;
                        tasks.Add(task);

                        var taskUpdate = new TaskUpdate
                        {
                            TaskItemId = taskId,
                            Note = bulkReassignDto.Note ?? $"Task reassigned to new user",
                            CreatedByUserId = currentUserId,
                            CreatedAt = DateTime.UtcNow
                        };
                        updates.Add(taskUpdate);
                    }
                }

                foreach (var task in tasks)
                {
                    await _unitOfWork.TaskRepository.UpdateAsync(task);
                }

                foreach (var update in updates)
                {
                    await _unitOfWork.TaskUpdateRepository.AddAsync(update);
                }

                // Workflow log
                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = 0,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"{tasks.Count} tasks reassigned to user {bulkReassignDto.NewAssigneeUserId} at {DateTime.UtcNow}",
                    UserId = currentUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.SaveAsync();

                await _notificationService.SendNotificationAsync(
                "Tasks Reassigned",
                $"A new tasks has been reassigned to you,Please check your task list for details.",
                new List<string> { bulkReassignDto.NewAssigneeUserId },
                "Task"
                );

                return ApiResponse<bool>.SuccessResponse(true, $"{tasks.Count} tasks reassigned successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error bulk reassigning tasks: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<TaskDto>>> GetEmployeeTaskAsync(string employeeId, TaskFilterDto filter)
        {

            try
            {
                var allTasks = await _unitOfWork.TaskRepository
                    .GetAllAsync(filter: m => (m.AssigneeUserId == employeeId)
                    &&(m.Status==TaskStatus.New|| m.Status == TaskStatus.In_Progress|| m.Status == TaskStatus.returned),
                    includeProperties: "Dept,Assignee,CreatedBy");

                // Apply filters in memory
                var filteredTasks = allTasks.AsQueryable();

                if (filter.Status.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.Status == filter.Status.Value);

                if (filter.DueDateFrom.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate >= filter.DueDateFrom.Value);

                if (filter.DueDateTo.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate <= filter.DueDateTo.Value);

                // Get total count
                var totalCount = filteredTasks.Count();

                // Apply pagination
                var pagedTasks = filteredTasks
                    .Skip((filter.Page - 1) * filter.PageSize)
                    .Take(filter.PageSize)
                    .ToList();

                // Map to DTOs
                var taskDtos = _mapper.Map<List<TaskDto>>(pagedTasks);

                var result = new PaginatedResult<TaskDto>
                {
                    TotalCount = totalCount,
                    Page = filter.Page,
                    PageSize = filter.PageSize,
                    Items = taskDtos
                };

                return ApiResponse<PaginatedResult<TaskDto>>.SuccessResponse(result, "Tasks retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<TaskDto>>.ErrorResponse($"Error retrieving tasks: {ex.Message}");
            }
        }

        public async Task<ApiResponse<IEnumerable<TaskFeedbackDto>>> GetTaskFeedbackAsync(int taskId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<IEnumerable<TaskFeedbackDto>>.ErrorResponse("Task not found");

                var feedbacks = await _unitOfWork.TaskFeedbackRepository.GetTaskFeedbackAsync(taskId);

                var feedbacksDtos = _mapper.Map<List<TaskFeedbackDto>>(feedbacks);
                

                return ApiResponse<IEnumerable<TaskFeedbackDto>>.SuccessResponse(feedbacksDtos, "Task feedbacks retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<IEnumerable<TaskFeedbackDto>>.ErrorResponse($"Error retrieving task feedbacks: {ex.Message}");
            }
        }
        public async Task<ApiResponse<TaskFeedbackDto>> CreateTaskFeedbackAsync(int taskId, CreateTaskFeedbackDto createFeedbackDto, string currentUserId)
        {
            try
            {
                // Verify task exists
                var task = await _unitOfWork.TaskRepository.GetByIdAsync(taskId);
                if (task == null)
                    return ApiResponse<TaskFeedbackDto>.ErrorResponse("Task not found");

                var taskFeedback = _mapper.Map<TaskFeedback>(createFeedbackDto);
                taskFeedback.TaskItemId = taskId;
                taskFeedback.EmployeeUserId = currentUserId;

                task.Status = TaskStatus.Review;

                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New Task Feedback to '{task.Title}",
                    UserId = currentUserId // √Ê ŒœÂ „‰ «·‹ Context Õ”» «·„” Œœ„ «·Õ«·Ì
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskFeedbackRepository.AddAsync(taskFeedback);
                await _unitOfWork.SaveAsync();

                var taskFeedbackDto = _mapper.Map<TaskFeedbackDto>(taskFeedback);

                await _notificationService.SendNotificationAsync(
                "New Task Feedback",
                $"A new task feedback has been Added to task {task.Title},Please check your task list for details.",
                new List<string> { task.CreatedByUserId },
                "Task"
                );

                return ApiResponse<TaskFeedbackDto>.SuccessResponse(taskFeedbackDto, "Task Feedback created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskFeedbackDto>.ErrorResponse($"Error creating task Feedback: {ex.Message}");
            }
        }
    }
}
