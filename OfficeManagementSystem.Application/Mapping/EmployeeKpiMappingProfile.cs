using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Application.Mapping
{
    public class EmployeeKpiMappingProfile : Profile
    {
        public EmployeeKpiMappingProfile()
        {
            // EmployeeKPI mappings
            CreateMap<EmployeeKPI, EmployeeKpiDto>()
                .ForMember(dest => dest.EmployeeName, opt => opt.MapFrom(src => 
                    src.Employee != null ? $"{src.Employee.FirstName} {src.Employee.LastName}" : ""))
                .ForMember(dest => dest.JobTitle, opt => opt.MapFrom(src => 
                    src.Employee != null ? src.Employee.JobTitle : ""))
                .ForMember(dest => dest.CalculatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            // Reverse mapping for creating new KPIs
            CreateMap<EmployeeKpiDto, EmployeeKPI>();
        }
    }
}
