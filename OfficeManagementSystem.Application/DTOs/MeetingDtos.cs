using OfficeManagementSystem.Domain.Enums.Meeting;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Domain.Enums;

namespace OfficeManagementSystem.Application.DTOs
{
    // Main Meeting DTOs
    public class CreateMeetingDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Agenda { get; set; }

        public MeetingType Type { get; set; } = MeetingType.Internal;
        public MeetingLocationMode LocationMode { get; set; } = MeetingLocationMode.InPerson;

        [Required]
        public DateTime StartAt { get; set; }
        public DateTime? EndAt { get; set; }

        public string? LocationText { get; set; }
        public string? OnlineUrl { get; set; }

        public List<CreateMeetingAttendeeDto> Attendees { get; set; } = new();
    }

    public class UpdateMeetingDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Agenda { get; set; }

        public MeetingType Type { get; set; } = MeetingType.Internal;
        public MeetingLocationMode LocationMode { get; set; } = MeetingLocationMode.InPerson;

        [Required]
        public DateTime StartAt { get; set; }
        public DateTime? EndAt { get; set; }

        public string? LocationText { get; set; }
        public string? OnlineUrl { get; set; }
    }

    public class MeetingDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Agenda { get; set; }
        public MeetingType Type { get; set; }
        public MeetingLocationMode LocationMode { get; set; }
        public string OrganizerUserId { get; set; } = string.Empty;
        public string OrganizerName { get; set; } = string.Empty;
        public DateTime StartAt { get; set; }
        public DateTime? EndAt { get; set; }
        public MeetingStatus Status { get; set; }
        public string? LocationText { get; set; }
        public string? OnlineUrl { get; set; }
        public string CreatedByUserId { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<MeetingAttendeeDto> Attendees { get; set; } = new();
        public List<MeetingAttachmentDto> Attachments { get; set; } = new();
        public MeetingMinutesDto? Minutes { get; set; }
        public List<RecommendationDto> Recommendations { get; set; } = new();
    }

    public class MeetingQueryDto
    {
        public string? Search { get; set; }
        public MeetingStatus? Status { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
        public int PageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }

    public class UpdateMeetingStatusDto
    {
        [Required]
        public MeetingStatus Status { get; set; }
    }

    // Meeting Attendee DTOs
    public class CreateMeetingAttendeeDto
    {
        public AttendeeKind Kind { get; set; } = AttendeeKind.Internal;
        public string? UserId { get; set; } // For internal attendees
        public string? DisplayName { get; set; } // For external attendees
        public string? Organization { get; set; }
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
        public AttendeeRole Role { get; set; } = AttendeeRole.Required;
        public string? Notes { get; set; }
    }

    public class UpdateMeetingAttendeeDto
    {
        public AttendeeKind Kind { get; set; } = AttendeeKind.Internal;
        public string? UserId { get; set; }
        public string? DisplayName { get; set; }
        public string? Organization { get; set; }
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
        public AttendeeRole Role { get; set; } = AttendeeRole.Required;
        public RSVP AttendanceStatus { get; set; } = RSVP.Invited;
        public string? Notes { get; set; }
    }

    public class MeetingAttendeeDto
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public AttendeeKind Kind { get; set; }
        public string? UserId { get; set; }
        public string? UserName { get; set; }
        public string? DisplayName { get; set; }
        public string? Organization { get; set; }
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
        public AttendeeRole Role { get; set; }
        public RSVP AttendanceStatus { get; set; }
        public string? Notes { get; set; }
    }

    // Meeting Minutes DTOs
    public class CreateMeetingMinutesDto
    {
        [MaxLength(5000)]
        public string? Notes { get; set; }
        public string? SummaryAI { get; set; }
    }

    public class UpdateMeetingMinutesDto
    {
        [MaxLength(5000)]
        public string? Notes { get; set; }
        public string? SummaryAI { get; set; }
    }

    public class MeetingMinutesDto
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public string? Notes { get; set; }
        public int AttachmentsCount { get; set; }
        public string? SummaryAI { get; set; }
    }

    // Recommendation DTOs
    public class CreateRecommendationDto
    {
        [Required]
        [MaxLength(1000)]
        public string Text { get; set; } = string.Empty;
    }

    public class UpdateRecommendationDto
    {
        [Required]
        [MaxLength(1000)]
        public string Text { get; set; } = string.Empty;
    }

    public class RecommendationDto
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public string Text { get; set; } = string.Empty;
    }

    // Meeting Attachment DTOs
    public class CreateMeetingAttachmentDto
    {
        public IFormFile File { get; set; }
        public string? Description { get; set; }
        public DocumentSource? DocumentSource { get; set; }
    }

    public class MeetingAttachmentDto
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public string? FileType { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string UploadedByUserId { get; set; } = string.Empty;
        public string UploadedByName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime UploadedAt { get; set; }
        public DocumentSource? DocumentSource { get; set; }
    }


}
