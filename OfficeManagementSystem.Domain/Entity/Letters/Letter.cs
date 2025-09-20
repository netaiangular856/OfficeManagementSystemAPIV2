using OfficeManagementSystem.Domain.Enums.Letters;
using OfficeManagementSystem.Domain.Entity.Auth;
using System.ComponentModel.DataAnnotations.Schema;
using OfficeManagementSystem.Domain.Enums.Meeting;

namespace OfficeManagementSystem.Domain.Entity.Letters;

public class Letter
{
    public int Id { get; set; }

    // معلومات الخطاب الأساسية
    public LetterDirection Direction { get; set; }
    public string Subject { get; set; } = default!;
    public string Body { get; set; } = default!;        // نص الرسالة
    public string? BodyHtml { get; set; }               // نص الرسالة بتنسيق HTML (من CKEditor/Quill)
    //public Confidentiality Confidentiality { get; set; } = Confidentiality.Public;

    // المرسل إليهم
    public AttendeeKind Kind { get; set; } = AttendeeKind.Internal;

    public string? UserId { get; set; }
    public AppUser? User { get; set; }
    public string? To { get; set; } = default!;          // أسماء المستلمين الأساسيين
    public string? Cc { get; set; }                     // اختياري
    public string? Bcc { get; set; }                    // اختياري


    public DateTime? LetterDate { get; set; }
    public string? ReferenceNumbers { get; set; }       // مثال: "2025/OUT/123; 2025/IN/77"

    // تنسيق الرسالة
    //public string? BodyFormatting { get; set; }         // JSON للتنسيق (ألوان، خط، حجم، إلخ)
                                                        // 
    // حالة الاعتماد والتوقيع
    public LetterStatus Status { get; set; } = LetterStatus.Draft;
    public string? ApprovedByUserId { get; set; }       // من وافق على الرسالة
    [ForeignKey(nameof(ApprovedByUserId))]
    public AppUser? ApprovedBy { get; set; }
    public DateTime? ApprovedAt { get; set; }
    public string? SignatureImagePath { get; set; }     // مسار صورة التوقيع
    public string? ApprovalNotes { get; set; }          // ملاحظات الاعتماد

    // إرسال الميل
    public bool IsEmailSent { get; set; } = false;
    public DateTime? EmailSentAt { get; set; }
    public string? PdfPath { get; set; }                // مسار ملف PDF المرسل

    // التتبع
    public string CreatedByUserId { get; set; } = default!;
    public AppUser CreatedBy { get; set; } = default!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    // مرفقات
    public ICollection<LetterAttachment> Attachments { get; set; } = new List<LetterAttachment>();
}
