using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Application.Mapping
{
    public class TravelMappingProfile : Profile
    {
        public TravelMappingProfile()
        {
            // TravelPartner mappings
            CreateMap<TravelPartnerDto, TravelPartner>()
                .ReverseMap();

            // Travel mappings
            CreateMap<CreateTravelDto, Travel>()
                .ForMember(dest => dest.Partners, opt => opt.MapFrom(src => src.Partners));

            CreateMap<UpdateTravelDto, Travel>()
                .ForMember(dest => dest.Partners, opt => opt.Ignore()); // نتعامل مع الشركاء بشكل منفصل في الـ Service

            CreateMap<Travel, TravelDto>()
                .ForMember(dest => dest.CreatedByUserName, opt => opt.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.FirstName+' '+src.CreatedByUser.LastName : null))
                .ForMember(dest => dest.Partners, opt => opt.MapFrom(src => src.Partners));
        }
    }
}
