namespace OfficeManagementSystem.Domain.Enums.Letters;

public enum LetterStatus
{
    Draft,          // مسودة
    PendingApproval, // في انتظار الاعتماد
    Approved,       // معتمد
    Rejected,       // مرفوض
    Sent           // تم الإرسال
}