using OfficeManagementSystem.Domain.Enums;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace OfficeManagementSystem.Application.DTOs
{
    // Main Document DTOs
    public class CreateDocumentDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        public DocumentType Type { get; set; } = DocumentType.Other;
        public DocumentSource? DocumentSource { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        public IFormFile File { get; set; }
    }

    public class UpdateDocumentDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        public DocumentType Type { get; set; } = DocumentType.Other;
        public DocumentSource? DocumentSource { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }
    }

    public class DocumentDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public DocumentType Type { get; set; }
        public DocumentSource? DocumentSource { get; set; }
        public string StoragePath { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string CreatedByUserId { get; set; } = string.Empty;
        public string CreatedByName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string FileExtension { get; set; } = string.Empty;
        public long? FileSize { get; set; }
    }

    public class DocumentQueryDto
    {
        public string? Search { get; set; }
        public DocumentType? Type { get; set; }
        public DocumentSource? DocumentSource { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
        public int PageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }
}
