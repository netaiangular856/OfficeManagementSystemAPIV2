using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Application.DTOs;

public class CreatePartnerEmployeeDto
{
    [Required]
    public int PartnerId { get; set; }
    
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? JobTitle { get; set; }
}

public class UpdatePartnerEmployeeDto
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? JobTitle { get; set; }
}

public class PartnerEmployeeDto
{
    public int Id { get; set; }
    public int PartnerId { get; set; }
    public string PartnerName { get; set; } = string.Empty;
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? JobTitle { get; set; }
    public string CreatedByUserId { get; set; } = string.Empty;
    public string CreatedByName { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
    public bool IsActive { get; set; }
}

public class PartnerEmployeeQueryDto
{
    public int? PartnerId { get; set; }
    public string? Search { get; set; }
    public string? JobTitle { get; set; }
    public bool? IsActive { get; set; }
    public int PageSize { get; set; } = 10;
    public int PageNumber { get; set; } = 1;
}
