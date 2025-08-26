using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Visit;
using System;

namespace OfficeManagementSystem.Application.Mapping
{
    public class VisitMappingProfile : Profile
    {
        public VisitMappingProfile()
        {
            // Visit mappings
            CreateMap<CreateVisitDto, Visit>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<UpdateVisitDto, Visit>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<Visit, VisitDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedByUser != null ? $"{src.CreatedByUser.FirstName} {src.CreatedByUser.LastName}" : null));

            // Visit Participant mappings
            CreateMap<CreateVisitParticipantDto, VisitParticipant>();
            CreateMap<VisitParticipant, VisitParticipantDto>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? $"{src.User.FirstName} {src.User.LastName}" : null));
        }
    }
}
