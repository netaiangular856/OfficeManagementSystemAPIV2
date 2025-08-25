using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using System.Reflection.Metadata;
using Document = OfficeManagementSystem.Domain.Entity.Documents.Document;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class MeetingAttachment
    {
        public int Id { get; set; }

        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;

        public int DocumentId { get; set; }   // ارتباط مع ARC.Document
        public Document Document { get; set; } = default!;

        public string UploadedByUserId { get; set; } = default!;
        public AppUser UploadedBy { get; set; } = default!;

        public DateTime UploadedAt { get; set; }
    }
}