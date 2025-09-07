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
                .ForMember(dest => dest.OrganizerName, opt => opt.MapFrom(src => src.Organizer.FirstName+src.Organizer.LastName));
                

            // Meeting Attendee mappings
            CreateMap<CreateMeetingAttendeeDto, MeetingAttendee>();
            CreateMap<UpdateMeetingAttendeeDto, MeetingAttendee>();
            CreateMap<MeetingAttendee, MeetingAttendeeDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? src.User.FirstName + src.User.LastName : null));

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
            CreateMap<MeetingAttachment, MeetingAttachmentDto>()
                .ForMember(dest => dest.FilePath, opt => opt.MapFrom(src => src.Document.StoragePath))
                .ForMember(dest => dest.FileType, opt => opt.MapFrom(src => src.Document.Type.ToString())) // αζ DocumentType Enum
                .ForMember(dest => dest.FileName, opt => opt.MapFrom(src => src.Document.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Document.Description))
                .ForMember(dest => dest.UploadedByUserId, opt => opt.MapFrom(src => src.Document.CreatedByUserId))
                .ForMember(dest => dest.UploadedByName, opt => opt.MapFrom(src => src.Document.CreatedBy.UserName))
                .ForMember(dest => dest.UploadedAt, opt => opt.MapFrom(src => src.Document.CreatedAt))
                .ForMember(dest => dest.DocumentSource, opt => opt.MapFrom(src => src.Document.DocumentSource));


        }
    }
}
