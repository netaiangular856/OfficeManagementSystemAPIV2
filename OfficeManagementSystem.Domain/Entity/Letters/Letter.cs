using OfficeManagementSystem.Domain.Enums.Letters;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Domain.Entity.Letters;

public class Letter
{
    public int Id { get; set; }

    // معلومات الخطاب
    public LetterDirection Direction { get; set; }
    public string Subject { get; set; } = default!;
    public string Body { get; set; } = default!;        // نص/HTML
    public Confidentiality Confidentiality { get; set; } = Confidentiality.Public;

    // المرسل إليهم — بدل جدول Recipients: حقول نصية بسيطة (تفصل بـ ; أو سطر جديد)
    public string To { get; set; } = default!;          // أسماء/إيميلات المستلمين الأساسيين
    public string? Cc { get; set; }                     // اختياري
    public string? Bcc { get; set; }                    // اختياري


    public DateTime? LetterDate { get; set; }


    // المرجعيات البسيطة (بديل LetterReference): نص حر لو حابب تربط بأرقام خطابات أخرى
    public string? ReferenceNumbers { get; set; }       // مثال: "2025/OUT/123; 2025/IN/77"

    // التتبع
    public string CreatedByUserId { get; set; } = default!;
    public AppUser CreatedBy { get; set; } = default!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // مرفقات
    public ICollection<LetterAttachment> Attachments { get; set; } = new List<LetterAttachment>();
}
