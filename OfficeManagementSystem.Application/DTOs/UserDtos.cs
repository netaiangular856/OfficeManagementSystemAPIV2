using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.DTOs
{
    // Request DTOs
    public record CreateUserRequestDto
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

        [Required(ErrorMessage = "Role is required")]
        public string Role { get; set; } = string.Empty;

        public int? DepartmentId { get; set; }
        public string? PhoneNumber { get; set; }
        public string TimeZone { get; set; } = "Asia/Dubai";
    }

    public record UpdateUserRequestDto
    {
        [Required(ErrorMessage = "First name is required")]
        [MaxLength(150, ErrorMessage = "First name cannot exceed 150 characters")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        [MaxLength(150, ErrorMessage = "Last name cannot exceed 150 characters")]
        public string LastName { get; set; } = string.Empty;

        public int? DepartmentId { get; set; }
        public string? PhoneNumber { get; set; }
        public string TimeZone { get; set; } = "Asia/Dubai";
    }

    public record UpdateUserRoleRequestDto
    {
        [Required(ErrorMessage = "Role is required")]
        public string Role { get; set; } = string.Empty;
    }

    public record UpdateUserStatusRequestDto
    {
        [Required(ErrorMessage = "IsActive status is required")]
        public bool IsActive { get; set; }
    }

    public record UpdateUserProfileRequestDto
    {
        [MaxLength(150, ErrorMessage = "First name cannot exceed 150 characters")]
        public string? FirstName { get; set; }

        [MaxLength(150, ErrorMessage = "Last name cannot exceed 150 characters")]
        public string? LastName { get; set; }

        public string? PhoneNumber { get; set; }
        public IFormFile? NewImage { get; set; }
    }

    // Response DTOs
    public record UserDto
    {
        public string Id { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public int? DepartmentId { get; set; }
        public string? DepartmentName { get; set; }
        public string? ImageUrl { get; set; }
        public string TimeZone { get; set; } = string.Empty;
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public List<string> Roles { get; set; } = new();
    }

    public record UserNameIdDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string DepartmentName { get; set; }
    }
}
