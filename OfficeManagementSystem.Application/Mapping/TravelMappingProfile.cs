using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Application.Mapping
{
    public class TravelMappingProfile : Profile
    {
        public TravelMappingProfile()
        {
            CreateMap<CreateTravelDto, Travel>();
            CreateMap<UpdateTravelDto, Travel>();
            CreateMap<Travel, TravelDto>()
                .ForMember(dest => dest.CreatedByUserName, opt => opt.MapFrom(src => src.CreatedByUser != null ? src.CreatedByUser.UserName : null));
        }
    }
}
