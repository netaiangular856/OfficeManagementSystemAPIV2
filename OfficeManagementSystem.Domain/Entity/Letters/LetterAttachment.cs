using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;

namespace OfficeManagementSystem.Domain.Entity.Letters;

public class LetterAttachment
{
    public int Id { get; set; }

    public int LetterId { get; set; }
    public Letter Letter { get; set; } = default!;

    public int DocumentId { get; set; }
    public Document Document { get; set; } = default!;

    public string UploadedByUserId { get; set; } = default!;
    public AppUser UploadedBy { get; set; } = default!;
    public DateTime UploadedAt { get; set; } = DateTime.UtcNow;

    public string? Note { get; set; }
}