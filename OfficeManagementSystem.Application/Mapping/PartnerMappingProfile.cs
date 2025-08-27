using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Partners;
using System;

namespace OfficeManagementSystem.Application.Mapping
{
    public class PartnerMappingProfile : Profile
    {
        public PartnerMappingProfile()
        {
            // Partner mappings
            CreateMap<CreatePartnerDto, Partner>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<UpdatePartnerDto, Partner>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore());

            CreateMap<Partner, PartnerDto>()
                .ForMember(dest => dest.CreatedByName, 
                opt => opt.MapFrom(src => src.CreatedByUser != null ? $"{src.CreatedByUser.FirstName} {src.CreatedByUser.LastName}" : ""));

            // Partner Contact mappings
            CreateMap<CreatePartnerContactDto, PartnerContact>();
            CreateMap<UpdatePartnerContactDto, PartnerContact>();
            CreateMap<PartnerContact, PartnerContactDto>();
        }
    }
}
