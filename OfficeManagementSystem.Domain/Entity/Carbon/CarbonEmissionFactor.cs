using System;
using System.ComponentModel.DataAnnotations;
using OfficeManagementSystem.Domain.Enums.Carbon;

namespace OfficeManagementSystem.Domain.Entity.Carbon
{
    public class CarbonEmissionFactor
    {
        public int Id { get; set; }

        [Required]
        public TransportType TransportType { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = default!; // اسم وسيلة النقل (عربي/إنجليزي)

        [Required]
        [MaxLength(100)]
        public string NameAr { get; set; } = default!; // الاسم بالعربية

        [Required]
        [Range(0.001, double.MaxValue, ErrorMessage = "معامل الانبعاث يجب أن يكون أكبر من صفر")]
        public decimal Factor { get; set; } // معامل الانبعاث (كجم CO₂/كم)

        [MaxLength(50)]
        public string? Unit { get; set; } = "kg/km"; // الوحدة

        [MaxLength(500)]
        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
    }
}

