using System.ComponentModel.DataAnnotations;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Enums.Carbon;

namespace OfficeManagementSystem.Application.DTOs
{
    public class CarbonActivityDto
    {
        public int Id { get; set; }
        public ActivityType ActivityType { get; set; }
        public string ActivityTypeName { get; set; } = string.Empty;
        public TransportType TransportType { get; set; }
        public string TransportTypeName { get; set; } = string.Empty;
        public decimal Distance { get; set; }
        public int ParticipantsCount { get; set; }
        public decimal EmissionValue { get; set; }
        public string? Description { get; set; }
        public string? Destination { get; set; }
        public string? Origin { get; set; }
        public DateTime ActivityDate { get; set; }
        public int? RelatedEntityId { get; set; }
        public string? RelatedEntityType { get; set; }
        public string? CreatedBy { get; set; }
        public string? CreatedByUserName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class CreateCarbonActivityDto
    {
        [Required(ErrorMessage = "نوع النشاط مطلوب")]
        public ActivityType ActivityType { get; set; }

        [Required(ErrorMessage = "نوع وسيلة النقل مطلوب")]
        public TransportType TransportType { get; set; }

        [Required(ErrorMessage = "المسافة مطلوبة")]
        [Range(0.01, double.MaxValue, ErrorMessage = "المسافة يجب أن تكون أكبر من صفر")]
        public decimal Distance { get; set; }

        [Required(ErrorMessage = "عدد المشاركين مطلوب")]
        [Range(1, int.MaxValue, ErrorMessage = "عدد المشاركين يجب أن يكون على الأقل 1")]
        public int ParticipantsCount { get; set; }

        [MaxLength(200)]
        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Destination { get; set; }

        [MaxLength(100)]
        public string? Origin { get; set; }

        [Required(ErrorMessage = "تاريخ النشاط مطلوب")]
        public DateTime ActivityDate { get; set; }

        public int? RelatedEntityId { get; set; }
        public string? RelatedEntityType { get; set; }
    }

    public class CalculateEmissionDto
    {
        [Required(ErrorMessage = "نوع وسيلة النقل مطلوب")]
        public TransportType TransportType { get; set; }

        [Required(ErrorMessage = "المسافة مطلوبة")]
        [Range(0.01, double.MaxValue, ErrorMessage = "المسافة يجب أن تكون أكبر من صفر")]
        public decimal Distance { get; set; }

        [Required(ErrorMessage = "عدد المشاركين مطلوب")]
        [Range(1, int.MaxValue, ErrorMessage = "عدد المشاركين يجب أن يكون على الأقل 1")]
        public int ParticipantsCount { get; set; }
    }

    public class EmissionCalculationResultDto
    {
        public decimal EmissionValue { get; set; } // بالكيلوجرام
        public decimal EmissionValueInTons { get; set; } // بالأطنان
        public decimal Factor { get; set; }
        public string FactorName { get; set; } = string.Empty;
        public string FactorNameAr { get; set; } = string.Empty;
    }

    public class CarbonDashboardDto
    {
        public decimal MonthlyTotal { get; set; } // إجمالي الشهري بالكيلوجرام
        public decimal MonthlyTotalInTons { get; set; } // إجمالي الشهري بالأطنان
        public decimal TravelEmissions { get; set; } // انبعاثات السفر
        public decimal AvoidedEmissions { get; set; } // الانبعاثات التي تم تجنبها
        public List<MonthlyEmissionDto> MonthlyBreakdown { get; set; } = new();
        public List<ActivityTypeEmissionDto> ByActivityType { get; set; } = new();
        public List<TransportTypeEmissionDto> ByTransportType { get; set; } = new();
    }

    public class MonthlyEmissionDto
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public string MonthName { get; set; } = string.Empty;
        public decimal TotalEmission { get; set; }
    }

    public class ActivityTypeEmissionDto
    {
        public ActivityType ActivityType { get; set; }
        public string ActivityTypeName { get; set; } = string.Empty;
        public decimal TotalEmission { get; set; }
        public int ActivityCount { get; set; }
    }

    public class TransportTypeEmissionDto
    {
        public TransportType TransportType { get; set; }
        public string TransportTypeName { get; set; } = string.Empty;
        public decimal TotalEmission { get; set; }
        public int ActivityCount { get; set; }
    }

    public class CarbonEmissionFactorDto
    {
        public int Id { get; set; }
        public TransportType TransportType { get; set; }
        public string TransportTypeName { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string NameAr { get; set; } = string.Empty;
        public decimal Factor { get; set; }
        public string? Unit { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class UpdateEmissionFactorDto
    {
        [Required(ErrorMessage = "معامل الانبعاث مطلوب")]
        [Range(0.001, double.MaxValue, ErrorMessage = "معامل الانبعاث يجب أن يكون أكبر من صفر")]
        public decimal Factor { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class CarbonActivityQueryDto : PaginationDto
    {
        public ActivityType? ActivityType { get; set; }
        public TransportType? TransportType { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string? Search { get; set; }
    }
}

