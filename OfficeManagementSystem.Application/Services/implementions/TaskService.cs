using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Enums.Tasks;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq;
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
                var normalizedAssignees = NormalizeAssigneeIds(createTaskDto.AssigneeUserIds);
                if (!normalizedAssignees.Any())
                {
                    return ApiResponse<TaskDto>.ErrorResponse("At least one assignee is required");
                }

                var task = _mapper.Map<TaskItem>(createTaskDto);

                var user = await _userManager.FindByIdAsync(currentUserId);
                if (user == null)
                {
                    return ApiResponse<TaskDto>.ErrorResponse("Manager Not Found");
                }

                task.CreatedByUserId = currentUserId;
                task.Status = TaskStatus.New;
                task.DeptId = user.DepartmentId;
                task.Assignees = normalizedAssignees
                    .Select((userId, index) => new TaskAssignment
                    {
                        EmployeeUserId = userId,
                        IsPrimary = index == 0
                    })
                    .ToList();

                var assignees = await _userManager.Users
                    .Where(u => normalizedAssignees.Contains(u.Id))
                    .ToListAsync();

                var assigneeNames = assignees
                    .Select(u => $"{u.FirstName} {u.LastName}".Trim())
                    .Where(name => !string.IsNullOrWhiteSpace(name))
                    .ToList();

                var assigneeDisplay = assigneeNames.Any()
                    ? string.Join(", ", assigneeNames)
                    : string.Join(", ", normalizedAssignees);

                var worklog = new WorkflowLog
                {
                    EntityName = "Task",
                    EntityId = task.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New Task added '{task.Title}' and assigned to {assigneeDisplay}",
                    UserId = task.CreatedByUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskRepository.AddAsync(task);
                await _unitOfWork.SaveAsync();

                var createdTask = await _unitOfWork.TaskRepository.GetTaskWithDetailsAsync(task.Id);
                if (createdTask == null)
                {
                    return ApiResponse<TaskDto>.ErrorResponse("Task created but failed to load details");
                }

                var taskDto = _mapper.Map<TaskDto>(createdTask);
                await _notificationService.SendNotificationAsync(
                    "New Task Assigned",
                    $"A new task has been assigned to you: {task.Title} deadline : {task.DueDate},Please check your task list for details.",
                    normalizedAssignees,
                    "Task",
                    null,
                    task.Id,
                    Domain.Enums.NotificationReferenceType.Task
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
                    .GetAllAsync(
                        includeProperties: "Dept,Assignees,Assignees.Employee,Assignees.Employee.Department,CreatedBy,CreatedBy.Department",
                        orderBy: m => m.OrderByDescending(t => t.DueDate));

                // Apply filters in memory
                var filteredTasks = allTasks.AsQueryable();

                if (filter.Status.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.Status == filter.Status.Value);

                if (filter.DueDateFrom.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate >= filter.DueDateFrom.Value);

                if (filter.DueDateTo.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate <= filter.DueDateTo.Value);

                if (!string.IsNullOrEmpty(filter.UserSearchId))
                {
                    filteredTasks = filteredTasks.Where(t =>
                        t.Assignees.Any(a => a.Employee != null &&
                                             a.Employee.Department != null &&
                                             a.Employee.Department.ManagerUserId == filter.UserSearchId) ||
                        t.Assignees.Any(a => a.EmployeeUserId == filter.UserSearchId) ||
                        t.CreatedByUserId == filter.UserSearchId
                    );
                }

                if (filter.DepartmentId.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DeptId == filter.DepartmentId.Value);

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

        public async Task<ApiResponse<PaginatedResult<TaskDto>>> GetTasksAsync(TaskFilterDto filter)
        {
            try
            {
                var allTasks = await _unitOfWork.TaskRepository
                    .GetAllAsync(
                        includeProperties: "Dept,Assignees,Assignees.Employee,Assignees.Employee.Department,CreatedBy,CreatedBy.Department",
                        orderBy: m => m.OrderByDescending(t => t.DueDate));
                
                // Apply filters in memory
                var filteredTasks = allTasks.AsQueryable();
                
                if (filter.Status.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.Status == filter.Status.Value);

                if (filter.DueDateFrom.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate >= filter.DueDateFrom.Value);

                if (filter.DueDateTo.HasValue)
                    filteredTasks = filteredTasks.Where(t => t.DueDate <= filter.DueDateTo.Value);

                if (!string.IsNullOrEmpty(filter.UserSearchId))
                    filteredTasks = filteredTasks.Where(t => t.Assignees.Any(a => a.EmployeeUserId == filter.UserSearchId));

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
                var task = await _unitOfWork.TaskRepository.GetTaskWithDetailsAsync(id);
                if (task == null)
                    return ApiResponse<TaskDto>.ErrorResponse("Task not found");

                _mapper.Map(updateTaskDto, task);
                task.UpdatedAt = DateTime.UtcNow;

                if (updateTaskDto.AssigneeUserIds != null)
                {
                    var normalizedAssignees = NormalizeAssigneeIds(updateTaskDto.AssigneeUserIds);
                    if (!normalizedAssignees.Any())
                    {
                        return ApiResponse<TaskDto>.ErrorResponse("At least one assignee is required");
                    }

                    SyncTaskAssignments(task, normalizedAssignees);
                }

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

                var refreshedTask = await _unitOfWork.TaskRepository.GetTaskWithDetailsAsync(id);
                if (refreshedTask == null)
                {
                    return ApiResponse<TaskDto>.ErrorResponse("Task updated but failed to load details");
                }

                var taskDto = _mapper.Map<TaskDto>(refreshedTask);
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
                    UserId = task.CreatedByUserId // �� �������� ������
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

                //if (task.Status == TaskStatus.Done || task.Status == TaskStatus.Stopped)
                //    return ApiResponse<bool>.ErrorResponse("Task is already closed");

                //if(task.Status==closeTaskDto.Status)
                //    return ApiResponse<bool>.ErrorResponse($"Task is already {task.Status}");

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
                    EntityId = 0, // �� ���� ������ null / ��� TaskId
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
                var normalizedAssignees = NormalizeAssigneeIds(bulkReassignDto.NewAssigneeUserIds);
                if (!normalizedAssignees.Any())
                {
                    return ApiResponse<bool>.ErrorResponse("At least one new assignee is required");
                }

                var tasks = (await _unitOfWork.TaskRepository.GetAllAsync(
                    filter: t => bulkReassignDto.TaskIds.Contains(t.Id),
                    includeProperties: "Assignees",
                    disableTracking: false))
                    .ToList();
                var updates = new List<TaskUpdate>();

                foreach (var task in tasks)
                {
                    SyncTaskAssignments(task, normalizedAssignees);
                    task.UpdatedAt = DateTime.UtcNow;

                    var taskUpdate = new TaskUpdate
                    {
                        TaskItemId = task.Id,
                        Note = bulkReassignDto.Note ?? "Task reassigned to new users",
                        CreatedByUserId = currentUserId,
                        CreatedAt = DateTime.UtcNow
                    };
                    updates.Add(taskUpdate);
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
                    Description = $"{tasks.Count} tasks reassigned to users {string.Join(", ", normalizedAssignees)} at {DateTime.UtcNow}",
                    UserId = currentUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.SaveAsync();

                await _notificationService.SendNotificationAsync(
                "Tasks Reassigned",
                $"Tasks have been reassigned to you. Please check your task list for details.",
                normalizedAssignees,
                "Task",
                null,
                null,
                Domain.Enums.NotificationReferenceType.Task
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
                    .GetAllAsync(
                        filter: m => m.Assignees.Any(a => a.EmployeeUserId == employeeId)
                            && (m.Status == TaskStatus.New || m.Status == TaskStatus.In_Progress || m.Status == TaskStatus.returned),
                        includeProperties: "Dept,Assignees,Assignees.Employee,Assignees.Employee.Department,CreatedBy",
                        orderBy: m => m.OrderByDescending(t => t.DueDate));

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
                    UserId = currentUserId // �� ��� �� ��� Context ��� �������� ������
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TaskFeedbackRepository.AddAsync(taskFeedback);
                await _unitOfWork.SaveAsync();

                var taskFeedbackDto = _mapper.Map<TaskFeedbackDto>(taskFeedback);

                await _notificationService.SendNotificationAsync(
                "New Task Feedback",
                $"A new task feedback has been Added to task {task.Title},Please check your task list for details.",
                new List<string> { task.CreatedByUserId },
                "Task",
                null,
                task.Id,
                Domain.Enums.NotificationReferenceType.Task
                );

                return ApiResponse<TaskFeedbackDto>.SuccessResponse(taskFeedbackDto, "Task Feedback created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<TaskFeedbackDto>.ErrorResponse($"Error creating task Feedback: {ex.Message}");
            }
        }

        private static List<string> NormalizeAssigneeIds(IEnumerable<string>? assigneeIds)
        {
            if (assigneeIds == null)
            {
                return new List<string>();
            }

            return assigneeIds
                .Where(id => !string.IsNullOrWhiteSpace(id))
                .Select(id => id.Trim())
                .Distinct()
                .ToList();
        }

        private static void SyncTaskAssignments(TaskItem task, IReadOnlyList<string> desiredAssigneeIds)
        {
            if (task.Assignees == null)
            {
                task.Assignees = new List<TaskAssignment>();
            }

            var currentAssignments = task.Assignees.ToList();
            foreach (var assignment in currentAssignments.Where(a => !desiredAssigneeIds.Contains(a.EmployeeUserId)))
            {
                task.Assignees.Remove(assignment);
            }

            foreach (var userId in desiredAssigneeIds)
            {
                if (task.Assignees.All(a => a.EmployeeUserId != userId))
                {
                    task.Assignees.Add(new TaskAssignment
                    {
                        EmployeeUserId = userId,
                        AssignedAt = DateTime.UtcNow
                    });
                }
            }

            var primaryAssignee = desiredAssigneeIds.FirstOrDefault();
            foreach (var assignment in task.Assignees)
            {
                assignment.IsPrimary = assignment.EmployeeUserId == primaryAssignee;
            }
        }
    }
}
