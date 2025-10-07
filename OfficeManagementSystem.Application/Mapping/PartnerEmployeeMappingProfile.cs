using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Partners;
using System;

namespace OfficeManagementSystem.Application.Mapping;

public class PartnerEmployeeMappingProfile : Profile
{
    public PartnerEmployeeMappingProfile()
    {
        // PartnerEmployee mappings
        CreateMap<CreatePartnerEmployeeDto, PartnerEmployee>()
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.IsActive, opt => opt.MapFrom(src => true))
            .ForMember(dest => dest.Id, opt => opt.Ignore())
            .ForMember(dest => dest.Partner, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedByUser, opt => opt.Ignore())
            .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore());

        CreateMap<UpdatePartnerEmployeeDto, PartnerEmployee>()
            .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
            .ForMember(dest => dest.Id, opt => opt.Ignore())
            .ForMember(dest => dest.PartnerId, opt => opt.Ignore())
            .ForMember(dest => dest.Partner, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedByUser, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedAt, opt => opt.Ignore());

        CreateMap<PartnerEmployee, PartnerEmployeeDto>()
            .ForMember(dest => dest.PartnerName, opt => opt.MapFrom(src => src.Partner != null ? src.Partner.Name : ""))
            .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedByUser != null ? $"{src.CreatedByUser.FirstName} {src.CreatedByUser.LastName}" : ""));
    }
}
