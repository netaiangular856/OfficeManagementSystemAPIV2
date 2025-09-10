using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Application.Mapping
{
    public class ReminderMappingProfile : Profile
    {
        public ReminderMappingProfile()
        {
            CreateMap<CreateReminderDto, Reminder>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                
                .ForMember(dest => dest.IsSent, opt => opt.MapFrom(src => false))
                .ForMember(dest => dest.SentAt, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore());

            CreateMap<Reminder, ReminderDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? (src.User.UserName ?? src.User.Email) : "غير محدد"));

            CreateMap<UpdateReminderDto, Reminder>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.UserId, opt => opt.Ignore())
                .ForMember(dest => dest.User, opt => opt.Ignore())
                .ForMember(dest => dest.EventTime, opt => opt.Ignore())
                .ForMember(dest => dest.IsSent, opt => opt.Ignore())
                .ForMember(dest => dest.SentAt, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));
        }
    }
}
