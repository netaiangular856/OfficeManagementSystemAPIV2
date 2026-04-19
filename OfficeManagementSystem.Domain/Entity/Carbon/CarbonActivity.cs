using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Carbon;
using System;
using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Domain.Entity.Carbon
{
    public class CarbonActivity
    {
        public int Id { get; set; }

        [Required]
        public ActivityType ActivityType { get; set; }

        [Required]
        public TransportType TransportType { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "المسافة يجب أن تكون أكبر من صفر")]
        public decimal Distance { get; set; } // بالكيلومتر

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "عدد المشاركين يجب أن يكون على الأقل 1")]
        public int ParticipantsCount { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "قيمة الانبعاث يجب أن تكون أكبر من أو تساوي صفر")]
        public decimal EmissionValue { get; set; } // بالكيلوجرام CO₂

        [MaxLength(200)]
        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Destination { get; set; }

        [MaxLength(100)]
        public string? Origin { get; set; }

        public DateTime ActivityDate { get; set; }

        public int? RelatedEntityId { get; set; } // ID للكيان المرتبط (Travel, Visit, etc.)

        [MaxLength(50)]
        public string? RelatedEntityType { get; set; } // نوع الكيان المرتبط

        public string? CreatedBy { get; set; }
        public AppUser? CreatedByUser { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
    }
}

