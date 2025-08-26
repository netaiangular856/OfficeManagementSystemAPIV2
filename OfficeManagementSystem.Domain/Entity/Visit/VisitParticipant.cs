using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Meeting;
using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Domain.Entity.Visit
{
    public class VisitParticipant
    {
        public int Id { get; set; }
        public int VisitId { get; set; }
        public Visit Visit { get; set; } = default!;

        public AttendeeKind Kind { get; set; } = AttendeeKind.Internal;


        // داخلي
        public string? UserId { get; set; }
        public AppUser? User { get; set; }

        // خارجي
        public string? DisplayName { get; set; }  // اسم الشخص
        public string? Organization { get; set; }           // اسم الجهة (لو داخلي ممكن تبقى اسم الشركة/القطاع)
        public string? JobTitle { get; set; }
        public string? Department { get; set; }
        public string? Email { get; set; }
    }
}