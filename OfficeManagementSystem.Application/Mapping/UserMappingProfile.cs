using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Application.Mapping
{
    public class UserMappingProfile : Profile
    {
        public UserMappingProfile()
        {
            // AppUser to UserDto
            CreateMap<AppUser, UserDto>()
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => src.Department != null ? src.Department.NameAr : null))
                .ForMember(dest => dest.Roles, opt => opt.Ignore()); // Will be populated in service

            // CreateUserRequestDto to AppUser
            CreateMap<CreateUserRequestDto, AppUser>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.LastLoginAt, opt => opt.Ignore())
                .ForMember(dest => dest.Department, opt => opt.Ignore());

            // UpdateUserRequestDto to AppUser (for updates)
            CreateMap<UpdateUserRequestDto, AppUser>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.Email, opt => opt.Ignore())
                .ForMember(dest => dest.UserName, opt => opt.Ignore())
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.LastLoginAt, opt => opt.Ignore())
                .ForMember(dest => dest.Department, opt => opt.Ignore())
                .ForMember(dest => dest.IsActive, opt => opt.Ignore());
        }
    }
}
