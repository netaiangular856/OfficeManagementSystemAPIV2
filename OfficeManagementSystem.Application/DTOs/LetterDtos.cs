using OfficeManagementSystem.Domain.Enums.Letters;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Domain.Enums;
using Newtonsoft.Json;

namespace OfficeManagementSystem.Application.DTOs
{
    // Text Formatting DTOs
    //public class TextFormattingDto
    //{
    //    public string? FontFamily { get; set; } = "Arial";
    //    public int FontSize { get; set; } = 12;
    //    public FontWeight FontWeight { get; set; } = FontWeight.Normal;
    //    public string? Color { get; set; } = "#000000";
    //    public TextAlignment Alignment { get; set; } = TextAlignment.Left;
    //    public bool IsItalic { get; set; } = false;
    //    public bool IsUnderline { get; set; } = false;
    //}

    // Main Letter DTOs
    public class CreateLetterDto
    {
        [Required]
        public LetterDirection Direction { get; set; }

        [Required]
        [MaxLength(500)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Body { get; set; } = string.Empty;


        [Required]
        [MaxLength(1000)]
        public string To { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Cc { get; set; }

        [MaxLength(1000)]
        public string? Bcc { get; set; }

        public DateTime? LetterDate { get; set; }

        [MaxLength(500)]
        public string? ReferenceNumbers { get; set; }

        // تنسيق الرسالة
        //public TextFormattingDto? BodyFormatting { get; set; }
    }

    public class UpdateLetterDto
    {
        [Required]
        public LetterDirection Direction { get; set; }

        [Required]
        [MaxLength(500)]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Body { get; set; } = string.Empty;


        [Required]
        [MaxLength(1000)]
        public string To { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string? Cc { get; set; }

        [MaxLength(1000)]
        public string? Bcc { get; set; }

        public DateTime? LetterDate { get; set; }

        [MaxLength(500)]
        public string? ReferenceNumbers { get; set; }

        // تنسيق الرسالة
        //public TextFormattingDto? BodyFormatting { get; set; }
    }

    public class LetterDto
    {
        public int Id { get; set; }
        public LetterDirection Direction { get; set; }
        public string Subject { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public string To { get; set; } = string.Empty;
        public string? Cc { get; set; }
        public string? Bcc { get; set; }
        public DateTime? LetterDate { get; set; }
        public string? ReferenceNumbers { get; set; }
        
        // تنسيق الرسالة
        //public TextFormattingDto? BodyFormatting { get; set; }
        
        // حالة الاعتماد والتوقيع
        public LetterStatus Status { get; set; }
        public string? ApprovedByUserId { get; set; }
        public string? ApprovedByName { get; set; }
        public DateTime? ApprovedAt { get; set; }
        public string? SignatureImagePath { get; set; }
        public string? ApprovalNotes { get; set; }
        
        // إرسال الميل
        public bool IsEmailSent { get; set; }
        public DateTime? EmailSentAt { get; set; }
        public string? PdfPath { get; set; }
        
        // التتبع
        public string CreatedByUserId { get; set; } = string.Empty;
        public string CreatedByName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<LetterAttachmentDto> Attachments { get; set; } = new();
    }

    public class LetterQueryDto
    {
        public string? Search { get; set; }
        public LetterDirection? Direction { get; set; }
        public LetterStatus? Status { get; set; }

        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
        public int PageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }

    // Letter Attachment DTOs
    public class CreateLetterAttachmentDto
    {
        public IFormFile File { get; set; }
        public string? Description { get; set; }
        public DocumentSource? DocumentSource { get; set; }
    }

    public class LetterAttachmentDto
    {
        public int Id { get; set; }
        public int LetterId { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public string? FileType { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string UploadedByUserId { get; set; } = string.Empty;
        public string UploadedByName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public DateTime UploadedAt { get; set; }
        public DocumentSource? DocumentSource { get; set; }
    }

    // Approval DTOs
    public class ApproveLetterDto
    {
        [Required]
        public IFormFile SignatureImage { get; set; } = default!;
        
        public string? ApprovalNotes { get; set; }
    }

    public class RejectLetterDto
    {
        [Required]
        public string RejectionReason { get; set; } = string.Empty;
    }

    // Email Sending DTOs
    public class SendLetterEmailDto
    {
        [MaxLength(500)]
        public string? EmailSubject { get; set; }
        
        public string? EmailBody { get; set; }
    }

    public class LetterEmailStatusDto
    {
        public bool IsEmailSent { get; set; }
        public DateTime? EmailSentAt { get; set; }
        public string? PdfPath { get; set; }
        public string? ErrorMessage { get; set; }
    }
}
