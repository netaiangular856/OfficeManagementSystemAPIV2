using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Application.Mapping
{
    public class EmployeeMappingProfile : Profile
    {
        public EmployeeMappingProfile()
        {
            // Employee to EmployeeDto
            CreateMap<Employee, EmployeeDto>()
                .ForMember(dest => dest.DepartmentName, opt => opt.MapFrom(src => src.Department != null ? src.Department.NameAr : null))
                .ForMember(dest => dest.ManagerName, opt => opt.MapFrom(src => src.Manager != null ? $"{src.Manager.FirstName} {src.Manager.LastName}" : null))
                .ForMember(dest => dest.Roles, opt => opt.Ignore()) // Will be populated in service
                .ForMember(dest => dest.SubordinatesCount, opt => opt.Ignore()); // Will be populated in service

            // CreateEmployeeRequestDto to Employee
            CreateMap<CreateEmployeeRequestDto, Employee>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email))
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.LastLoginAt, opt => opt.Ignore())
                .ForMember(dest => dest.Department, opt => opt.Ignore())
                .ForMember(dest => dest.Manager, opt => opt.Ignore())
                .ForMember(dest => dest.Subordinates, opt => opt.Ignore());

            // UpdateEmployeeRequestDto to Employee (for updates)
            CreateMap<UpdateEmployeeRequestDto, Employee>()
                .ForMember(dest => dest.Id, opt => opt.Ignore())
                .ForMember(dest => dest.Email, opt => opt.Ignore())
                .ForMember(dest => dest.UserName, opt => opt.Ignore())
                .ForMember(dest => dest.PasswordHash, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.LastLoginAt, opt => opt.Ignore())
                .ForMember(dest => dest.Department, opt => opt.Ignore())
                .ForMember(dest => dest.Manager, opt => opt.Ignore())
                .ForMember(dest => dest.Subordinates, opt => opt.Ignore())
                .ForMember(dest => dest.IsActive, opt => opt.Ignore());
        }
    }
}
