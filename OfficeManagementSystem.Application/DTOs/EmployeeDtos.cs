using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.DTOs
{
    // Request DTOs
    public record CreateEmployeeRequestDto
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "First name is required")]
        [MaxLength(150, ErrorMessage = "First name cannot exceed 150 characters")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        [MaxLength(150, ErrorMessage = "Last name cannot exceed 150 characters")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Job title is required")]
        [MaxLength(100, ErrorMessage = "Job title cannot exceed 100 characters")]
        public string JobTitle { get; set; } = string.Empty;

        [Required(ErrorMessage = "Role is required")]
        public string Role { get; set; } = string.Empty;

        public int? DepartmentId { get; set; }
        public string? PhoneNumber { get; set; }
        public string? NationalId { get; set; }
        public DateTime? HireDate { get; set; }
        public string? ManagerId { get; set; }
        public string TimeZone { get; set; } = "Asia/Dubai";
    }

    public record UpdateEmployeeRequestDto
    {
        [Required(ErrorMessage = "First name is required")]
        [MaxLength(150, ErrorMessage = "First name cannot exceed 150 characters")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        [MaxLength(150, ErrorMessage = "Last name cannot exceed 150 characters")]
        public string LastName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Job title is required")]
        [MaxLength(100, ErrorMessage = "Job title cannot exceed 100 characters")]
        public string JobTitle { get; set; } = string.Empty;

        public int? DepartmentId { get; set; }
        public string? PhoneNumber { get; set; }
        public string? NationalId { get; set; }
        public DateTime? HireDate { get; set; }
        public string? ManagerId { get; set; }
        public string TimeZone { get; set; } = "Asia/Dubai";
    }

    public record UpdateEmployeeRoleRequestDto
    {
        [Required(ErrorMessage = "Role is required")]
        public string Role { get; set; } = string.Empty;
    }

    public record UpdateEmployeeStatusRequestDto
    {
        [Required(ErrorMessage = "IsActive status is required")]
        public bool IsActive { get; set; }
    }

    public record UpdateEmployeeProfileRequestDto
    {
        [MaxLength(150, ErrorMessage = "First name cannot exceed 150 characters")]
        public string? FirstName { get; set; }

        [MaxLength(150, ErrorMessage = "Last name cannot exceed 150 characters")]
        public string? LastName { get; set; }

        [MaxLength(100, ErrorMessage = "Job title cannot exceed 100 characters")]
        public string? JobTitle { get; set; }

        public string? PhoneNumber { get; set; }
        public string? NationalId { get; set; }
        public DateTime? HireDate { get; set; }
        public IFormFile? NewImage { get; set; }
    }

    // Response DTOs
    public record EmployeeDto
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public string? NationalId { get; set; }
        public DateTime? HireDate { get; set; }
        public string? ManagerId { get; set; }
        public string? ManagerName { get; set; }
        public int? DepartmentId { get; set; }
        public string? DepartmentName { get; set; }
        public string? ImageUrl { get; set; }
        public string TimeZone { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public List<string> Roles { get; set; } = new();
        public int SubordinatesCount { get; set; }
    }
    public record EmployeeNamesDto
    {
        public string FullName { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}
