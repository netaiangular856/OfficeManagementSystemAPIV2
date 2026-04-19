using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Carbon;

namespace OfficeManagementSystem.Application.Mapping
{
    public class CarbonMappingProfile : Profile
    {
        public CarbonMappingProfile()
        {
            // CarbonActivity mappings
            CreateMap<CreateCarbonActivityDto, CarbonActivity>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.EmissionValue, opt => opt.Ignore()) // سيتم حسابه في الـ Service
                .ForMember(dest => dest.CreatedBy, opt => opt.Ignore()) // سيتم تعيينه في الـ Service
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedByUser, opt => opt.Ignore());

            CreateMap<CarbonActivity, CarbonActivityDto>()
                .ForMember(dest => dest.CreatedByUserName, opt => opt.MapFrom(src => 
                    src.CreatedByUser != null ? 
                        (src.CreatedByUser.UserName ?? src.CreatedByUser.Email ?? "غير محدد") : 
                        "غير محدد"))
                .ForMember(dest => dest.ActivityTypeName, opt => opt.Ignore()) // سيتم تعيينه في الـ Service
                .ForMember(dest => dest.TransportTypeName, opt => opt.Ignore()); // سيتم تعيينه في الـ Service

            // CarbonEmissionFactor mappings
            CreateMap<CarbonEmissionFactor, CarbonEmissionFactorDto>()
                .ForMember(dest => dest.TransportTypeName, opt => opt.Ignore()); // سيتم تعيينه في الـ Service
        }
    }
}

