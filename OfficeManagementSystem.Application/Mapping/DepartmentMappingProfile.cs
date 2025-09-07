using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Application.Mapping
{
    public class DepartmentMappingProfile : Profile
    {
        public DepartmentMappingProfile()
        {
            // CreateDepartmentDto -> Department
            CreateMap<CreateDepartmentDto, Department>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            // UpdateDepartmentDto -> Department
            CreateMap<UpdateDepartmentDto, Department>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            // Department -> DepartmentDto
            CreateMap<Department, DepartmentDto>()
                .ForMember(dest => dest.ManagerName, opt => opt.MapFrom(src => 
                    src.ManagerUser != null ? $"{src.ManagerUser.FirstName} {src.ManagerUser.LastName}" : null))
                .ForMember(dest => dest.EmployeesCount, opt => opt.MapFrom(src =>
                    src.Employees != null ? src.Employees.Count : 0))
                .ForMember(dest => dest.Children, opt => opt.MapFrom(src => src.Children));

            // Department -> DepartmentTreeDto
            CreateMap<Department, DepartmentTreeDto>()
                .ForMember(dest => dest.ManagerName, opt => opt.MapFrom(src => 
                    src.ManagerUser != null ? $"{src.ManagerUser.FirstName} {src.ManagerUser.LastName}" : null))
                .ForMember(dest => dest.EmployeesCount, opt => opt.MapFrom(src => 
                    src.Employees != null ? src.Employees.Count : 0))
                .ForMember(dest => dest.Children, opt => opt.MapFrom(src => src.Children));
        }
    }
}
