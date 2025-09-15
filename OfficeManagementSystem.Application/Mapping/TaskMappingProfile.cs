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
                .ForMember(dest => dest.AssigneeName, opt => opt.MapFrom(src => src.Assignee != null ? src.Assignee.FirstName+""+src.Assignee.LastName  : null))
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? src.Assignee.FirstName + "" + src.Assignee.LastName : null))
                .ForMember(dest => dest.UpdatesCount, opt => opt.MapFrom(src => src.Updates.Count))
                .ForMember(dest => dest.AttachmentsCount, opt => opt.MapFrom(src => src.Attachments.Count));

            CreateMap<CreateTaskDto, TaskItem>()
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => TaskStatus.New))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<UpdateTaskDto, TaskItem>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null));

            // Task Update mappings
            CreateMap<TaskUpdate, TaskUpdateDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? src.CreatedBy.FirstName+"" + src.CreatedBy.LastName : null));

            CreateMap<CreateTaskUpdateDto, TaskUpdate>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<TaskFeedback, TaskFeedbackDto>()
                .ForMember(dest => dest.EmployeeName, opt => opt.MapFrom(src => src.Employee != null ? src.Employee.FirstName + " " + src.Employee.LastName : null));



            CreateMap<CreateTaskFeedbackDto, TaskFeedback>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            // Task Attachment mappings
            CreateMap<TaskAttachment, TaskAttachmentDto>();
        }
    }
}
