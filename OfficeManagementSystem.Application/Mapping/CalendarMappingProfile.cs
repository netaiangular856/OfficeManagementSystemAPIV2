using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Tasks;
using TaskStatus = OfficeManagementSystem.Domain.Enums.Tasks.TaskStatus;

namespace OfficeManagementSystem.Application.Mapping
{
    public class CalendarMappingProfile : Profile
    {
        public CalendarMappingProfile()
        {
            // Mapping for Meeting to CalendarEventDto
            CreateMap<Meeting, CalendarEventDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Agenda))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartAt))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndAt))
                .ForMember(dest => dest.Type, opt => opt.MapFrom(src => EventType.Meeting))
                .ForMember(dest => dest.Location, opt => opt.MapFrom(src => src.LocationText))
                .ForMember(dest => dest.OnlineUrl, opt => opt.MapFrom(src => src.OnlineUrl))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => MapMeetingStatus(src.Status)))
                .ForMember(dest => dest.OrganizerName, opt => opt.MapFrom(src => 
                    src.Organizer != null ? $"{src.Organizer.FirstName} {src.Organizer.LastName}" : ""))
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => 
                src.Organizer.Department.NameEn))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => 1))
                .ForMember(dest => dest.Color, opt => opt.MapFrom(src => GetMeetingColor(src.Type)))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt));

            // Mapping for TaskItem to CalendarEventDto
            CreateMap<TaskItem, CalendarEventDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.CreatedAt))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.DueDate))
                .ForMember(dest => dest.Type, opt => opt.MapFrom(src => EventType.Task))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => MapTaskStatus(src.Status)))
                .ForMember(dest => dest.AssigneeName, opt => opt.MapFrom(src => 
                    src.Assignee != null ? $"{src.Assignee.FirstName} {src.Assignee.LastName}" : ""))
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => 
                    src.Dept.NameEn))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => (int)src.Priority))
                .ForMember(dest => dest.Color, opt => opt.MapFrom(src => GetTaskColor(src.Priority, src.Status)))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt));

            // Mapping for Visit to CalendarEventDto
            CreateMap<Visit, CalendarEventDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Purpose))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.VisitDate))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.VisitDate.AddHours(2))) // افتراض ساعتين للزيارة
                .ForMember(dest => dest.Type, opt => opt.MapFrom(src => EventType.Visit))
                .ForMember(dest => dest.Location, opt => opt.MapFrom(src => src.Address))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.IsCompleted ? EventStatus.Completed : EventStatus.Scheduled))
                .ForMember(dest => dest.OrganizerName, opt => opt.MapFrom(src => 
                    src.CreatedByUser != null ? $"{src.CreatedByUser.FirstName} {src.CreatedByUser.LastName}" : ""))
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => 
                    src.CreatedByUser != null && src.CreatedByUser.Department != null ? src.CreatedByUser.Department.NameEn : ""))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => 2))
                .ForMember(dest => dest.Color, opt => opt.MapFrom(src => "#9C27B0")) // Purple for visits
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt));

            // Mapping for Travel to CalendarEventDto
            CreateMap<Travel, CalendarEventDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Purpose))
                .ForMember(dest => dest.StartDate, opt => opt.MapFrom(src => src.StartDate))
                .ForMember(dest => dest.EndDate, opt => opt.MapFrom(src => src.EndDate))
                .ForMember(dest => dest.Type, opt => opt.MapFrom(src => EventType.Travel))
                .ForMember(dest => dest.Location, opt => opt.MapFrom(src => src.Destination))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => 
                    src.EndDate < DateTime.UtcNow ? EventStatus.Completed : EventStatus.Scheduled))
                .ForMember(dest => dest.OrganizerName, opt => opt.MapFrom(src => 
                    src.CreatedByUser != null ? $"{src.CreatedByUser.FirstName} {src.CreatedByUser.LastName}" : ""))
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => 
                    src.CreatedByUser != null && src.CreatedByUser.Department != null ? src.CreatedByUser.Department.NameEn : ""))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => 3))
                .ForMember(dest => dest.Color, opt => opt.MapFrom(src => "#FF9800")) // Orange for travel
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt));
        }

        private static EventStatus MapMeetingStatus(Domain.Enums.Meeting.MeetingStatus status)
        {
            return status switch
            {
                Domain.Enums.Meeting.MeetingStatus.Scheduled => EventStatus.Scheduled,
                Domain.Enums.Meeting.MeetingStatus.InProgress => EventStatus.InProgress,
                Domain.Enums.Meeting.MeetingStatus.Done => EventStatus.Completed,
                Domain.Enums.Meeting.MeetingStatus.Cancelled => EventStatus.Cancelled,
                _ => EventStatus.Scheduled
            };
        }

        private static EventStatus MapTaskStatus(TaskStatus status)
        {
            return status switch
            {
                TaskStatus.New => EventStatus.Scheduled,
                TaskStatus.In_Progress => EventStatus.InProgress,
                TaskStatus.Done => EventStatus.Completed,
                TaskStatus.Stopped => EventStatus.Cancelled,
                TaskStatus.Late => EventStatus.Overdue,
                _ => EventStatus.Scheduled
            };
        }

        private static string GetMeetingColor(Domain.Enums.Meeting.MeetingType type)
        {
            return type switch
            {
                Domain.Enums.Meeting.MeetingType.Internal => "#4285F4", // Blue
                Domain.Enums.Meeting.MeetingType.External => "#34A853", // Green
                _ => "#9AA0A6" // Gray
            };
        }

        private static string GetTaskColor(TaskPriority priority, TaskStatus status)
        {
            if (status == TaskStatus.Late)
                return "#EA4335"; // Red for overdue

            return priority switch
            {
                TaskPriority.Low => "#34A853", // Green
                TaskPriority.Medium => "#FBBC04", // Yellow
                TaskPriority.High => "#EA4335", // Red
                _ => "#9AA0A6" // Gray
            };
        }
    }
}
