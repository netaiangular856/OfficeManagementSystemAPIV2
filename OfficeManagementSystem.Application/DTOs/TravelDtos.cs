using System.ComponentModel.DataAnnotations;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.DTOs
{
    public class CreateTravelDto
    {
        [Required(ErrorMessage = "العنوان مطلوب")]
        [MaxLength(200, ErrorMessage = "العنوان لا يمكن أن يتجاوز 200 حرف")]
        public string Title { get; set; } = default!;

        [Required(ErrorMessage = "الوجهة مطلوبة")]
        [MaxLength(100, ErrorMessage = "الوجهة لا يمكن أن تتجاوز 100 حرف")]
        public string Destination { get; set; } = default!;

        [MaxLength(400, ErrorMessage = "الغرض لا يمكن أن يتجاوز 400 حرف")]
        public string? Purpose { get; set; }

        [Required(ErrorMessage = "تاريخ بداية السفر مطلوب")]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage = "تاريخ انتهاء السفر مطلوب")]
        public DateTime EndDate { get; set; }

        public string? TransportMode { get; set; }
        public string? Accommodation { get; set; }
    }

    public class UpdateTravelDto
    {
        [Required(ErrorMessage = "العنوان مطلوب")]
        [MaxLength(200, ErrorMessage = "العنوان لا يمكن أن يتجاوز 200 حرف")]
        public string Title { get; set; } = default!;

        [Required(ErrorMessage = "الوجهة مطلوبة")]
        [MaxLength(100, ErrorMessage = "الوجهة لا يمكن أن تتجاوز 100 حرف")]
        public string Destination { get; set; } = default!;

        [MaxLength(400, ErrorMessage = "الغرض لا يمكن أن يتجاوز 400 حرف")]
        public string? Purpose { get; set; }

        [Required(ErrorMessage = "تاريخ بداية السفر مطلوب")]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage = "تاريخ انتهاء السفر مطلوب")]
        public DateTime EndDate { get; set; }

        public string? TransportMode { get; set; }
        public string? Accommodation { get; set; }
    }

    public class TravelDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = default!;
        public string Destination { get; set; } = default!;
        public string? Purpose { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string? TransportMode { get; set; }
        public string? Accommodation { get; set; }
        public string? CreatedBy { get; set; }
        public string? CreatedByUserName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class TravelQueryDto : PaginationDto
    {
        public string? Search { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }

    }
}
