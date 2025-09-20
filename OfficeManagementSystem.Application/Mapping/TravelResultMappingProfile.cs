using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Application.Mapping
{
    public class TravelResultMappingProfile : Profile
    {
        public TravelResultMappingProfile()
        {
            CreateMap<CreateTravelResultDto, TravelResult>();
            CreateMap<UpdateTravelResultDto, TravelResult>();
            CreateMap<TravelResult, TravelResultDto>()
                .ForMember(dest => dest.TravelTitle, opt => opt.MapFrom(src => src.Travel.Title));
        }
    }
}

