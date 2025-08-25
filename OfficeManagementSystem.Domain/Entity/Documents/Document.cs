using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace OfficeManagementSystem.Domain.Entity.Documents
{
    public class Document
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public DocumentType Type { get; set; }
        public string StoragePath { get; set; } = default!;
        public string? Description { get; set; }
        public string CreatedByUserId { get; set; } = default!;
        public AppUser CreatedBy { get; set; } = default!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        public ICollection<TaskAttachment> TaskAttachments { get; set; } = new List<TaskAttachment>();
    }
}
