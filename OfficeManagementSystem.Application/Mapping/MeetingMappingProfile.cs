using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Enums.Meeting;
using System;

namespace OfficeManagementSystem.Application.Mapping
{
    public class MeetingMappingProfile : Profile
    {
        public MeetingMappingProfile()
        {
            // Meeting mappings
            CreateMap<CreateMeetingDto, Meeting>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => MeetingStatus.Scheduled));

            CreateMap<UpdateMeetingDto, Meeting>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<Meeting, MeetingDto>()
                .ForMember(dest => dest.OrganizerName, opt => opt.MapFrom(src => src.Organizer.UserName));
                

            // Meeting Attendee mappings
            CreateMap<CreateMeetingAttendeeDto, MeetingAttendee>();
            CreateMap<UpdateMeetingAttendeeDto, MeetingAttendee>();
            CreateMap<MeetingAttendee, MeetingAttendeeDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? src.User.UserName : null));

            // Meeting Minutes mappings
            CreateMap<CreateMeetingMinutesDto, MeetingMinutes>();
            CreateMap<UpdateMeetingMinutesDto, MeetingMinutes>();
            CreateMap<MeetingMinutes, MeetingMinutesDto>();

            // Recommendation mappings
            CreateMap<CreateRecommendationDto, Recommendation>();
            CreateMap<UpdateRecommendationDto, Recommendation>();
            CreateMap<Recommendation, RecommendationDto>();

            // Meeting Attachment mappings
            CreateMap<CreateMeetingAttachmentDto, MeetingAttachment>();
            CreateMap<MeetingAttachment, MeetingAttachmentDto>();


        }
    }
}
