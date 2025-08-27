using OfficeManagementSystem.Domain.Enums.Partners;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace OfficeManagementSystem.Application.DTOs
{
    // Main Partner DTOs
    public class CreatePartnerDto
    {
        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        public PartnerCategory Category { get; set; } = PartnerCategory.Other;

        [MaxLength(100)]
        public string? Sector { get; set; }

        [MaxLength(100)]
        public string? Country { get; set; }

        [MaxLength(100)]
        public string? City { get; set; }

        [MaxLength(500)]
        public string? Address { get; set; }

        [MaxLength(200)]
        public string? Website { get; set; }

        public DateTime? ContractStartDate { get; set; }

        [MaxLength(1000)]
        public string? Note { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class UpdatePartnerDto
    {
        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        public PartnerCategory Category { get; set; } = PartnerCategory.Other;

        [MaxLength(100)]
        public string? Sector { get; set; }

        [MaxLength(100)]
        public string? Country { get; set; }

        [MaxLength(100)]
        public string? City { get; set; }

        [MaxLength(500)]
        public string? Address { get; set; }

        [MaxLength(200)]
        public string? Website { get; set; }

        public DateTime? ContractStartDate { get; set; }

        [MaxLength(1000)]
        public string? Note { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class PartnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public PartnerCategory Category { get; set; }
        public string? Sector { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? Website { get; set; }
        public string CreatedByUserId { get; set; } = string.Empty;
        public string CreatedByName { get; set; } = string.Empty;
        public DateTime? ContractStartDate { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public bool IsActive { get; set; }
        public string? Note { get; set; }
        public List<PartnerContactDto> Contacts { get; set; } = new();
    }

    public class PartnerQueryDto
    {
        public string? Search { get; set; }
        public PartnerCategory? Category { get; set; }
        public int PageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }

    // Partner Contact DTOs
    public class CreatePartnerContactDto
    {
        [EmailAddress]
        [MaxLength(200)]
        public string? Email { get; set; }

        [MaxLength(20)]
        public string? Phone { get; set; }

        [MaxLength(20)]
        public string? Mobile { get; set; }
    }

    public class UpdatePartnerContactDto
    {
        [EmailAddress]
        [MaxLength(200)]
        public string? Email { get; set; }

        [MaxLength(20)]
        public string? Phone { get; set; }

        [MaxLength(20)]
        public string? Mobile { get; set; }
    }

    public class PartnerContactDto
    {
        public int Id { get; set; }
        public int PartnerId { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Mobile { get; set; }
    }
}
