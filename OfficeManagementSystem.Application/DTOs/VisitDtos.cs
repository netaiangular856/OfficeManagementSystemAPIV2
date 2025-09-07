using OfficeManagementSystem.Domain.Enums.Visit;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using OfficeManagementSystem.Domain.Enums.Meeting;

namespace OfficeManagementSystem.Application.DTOs
{
    // Main Visit DTOs
    public class CreateVisitDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        public VisitType Type { get; set; } = VisitType.Visit;

        [Required]
        [MaxLength(100)]
        public string Address { get; set; } = string.Empty;

        [MaxLength(400)]
        public string? Purpose { get; set; }

        [Required]
        public DateTime VisitDate { get; set; }

        public List<CreateVisitParticipantDto> Participants { get; set; } = new();
    }

    public class UpdateVisitDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        public VisitType Type { get; set; } = VisitType.Visit;

        [Required]
        [MaxLength(100)]
        public string Address { get; set; } = string.Empty;

        [MaxLength(400)]
        public string? Purpose { get; set; }

        [Required]
        public DateTime VisitDate { get; set; }

        public bool IsCompleted { get; set; } = false;
    }

    public class VisitDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public VisitType Type { get; set; }
        public string Address { get; set; } = string.Empty;
        public string? Purpose { get; set; }
        public DateTime VisitDate { get; set; }
        public string? CreatedBy { get; set; }
        public string? CreatedByName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public bool IsCompleted { get; set; } = false;
        public List<VisitParticipantDto> Participants { get; set; } = new();
    }

    public class VisitQueryDto
    {
        public string? Search { get; set; }
        public VisitType? Type { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
        public int PageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }

    // Visit Participant DTOs
    public class CreateVisitParticipantDto
    {
        [EnumDataType(typeof(AttendeeKind), ErrorMessage = "ﬁÌ„… Kind €Ì— ’ÕÌÕ…")]
        public AttendeeKind Kind { get; set; } = AttendeeKind.Internal;
        public string? UserId { get; set; } // For internal participants
        public string? DisplayName { get; set; } // For external participants
        public string? Organization { get; set; }
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
    }

    public class VisitParticipantDto
    {
        public int Id { get; set; }
        public int VisitId { get; set; }
        public AttendeeKind Kind { get; set; }
        public string? UserId { get; set; }
        public string? UserName { get; set; }
        public string? DisplayName { get; set; }
        public string? Organization { get; set; }
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
    }
}
