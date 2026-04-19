using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums.Tasks;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Application.Mapping
{
    public class TaskMappingProfile : Profile
    {
        public TaskMappingProfile()
        {
            // Task mappings
            CreateMap<TaskItem, TaskDto>()
                .ForMember(dest => dest.DeptName, opt => opt.MapFrom(src => src.Dept != null ? src.Dept.NameEn : null))
                .ForMember(dest => dest.AssigneeUserId, opt => opt.MapFrom(src =>
                    src.Assignees
                        .OrderByDescending(a => a.IsPrimary)
                        .ThenBy(a => a.Id)
                        .Select(a => a.EmployeeUserId)
                        .FirstOrDefault()))
                .ForMember(dest => dest.AssigneeName, opt => opt.MapFrom(src =>
                    string.Join(", ", src.Assignees
                        .Select(a => a.Employee != null ? $"{a.Employee.FirstName} {a.Employee.LastName}" : string.Empty)
                        .Where(name => !string.IsNullOrWhiteSpace(name)))))
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? src.CreatedBy.FirstName + " " + src.CreatedBy.LastName : null))
                .ForMember(dest => dest.UpdatesCount, opt => opt.MapFrom(src => src.Updates.Count))
                .ForMember(dest => dest.AttachmentsCount, opt => opt.MapFrom(src => src.Attachments.Count));

            CreateMap<CreateTaskDto, TaskItem>()
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => TaskStatus.New))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.Assignees, opt => opt.Ignore());

            CreateMap<UpdateTaskDto, TaskItem>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.Assignees, opt => opt.Ignore())
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            // Task Update mappings
            CreateMap<TaskUpdate, TaskUpdateDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? src.CreatedBy.FirstName+" " + src.CreatedBy.LastName : null));

            CreateMap<CreateTaskUpdateDto, TaskUpdate>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<TaskFeedback, TaskFeedbackDto>()
                .ForMember(dest => dest.EmployeeName, opt => opt.MapFrom(src => src.Employee != null ? src.Employee.FirstName + " " + src.Employee.LastName : null));



            CreateMap<CreateTaskFeedbackDto, TaskFeedback>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            // Task Attachment mappings
            CreateMap<TaskAttachment, TaskAttachmentDto>();

            CreateMap<TaskAssignment, TaskAssigneeDto>()
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.EmployeeUserId))
                .ForMember(dest => dest.FullName, opt => opt.MapFrom(src => src.Employee != null ? $"{src.Employee.FirstName} {src.Employee.LastName}" : string.Empty))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Employee != null ? src.Employee.Email : null))
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => src.Employee != null && src.Employee.Department != null ? src.Employee.Department.NameAr : null));
        }
    }
}
