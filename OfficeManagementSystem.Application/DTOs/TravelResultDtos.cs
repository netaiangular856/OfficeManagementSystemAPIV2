using System.ComponentModel.DataAnnotations;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.DTOs
{
    public class CreateTravelResultDto
    {
        [Required(ErrorMessage = "معرف السفر مطلوب")]
        public int TravelId { get; set; }

        [MaxLength(1500, ErrorMessage = "الإنجازات لا يمكن أن تتجاوز 1500 حرف")]
        public string? Achievements { get; set; }
    }

    public class UpdateTravelResultDto
    {
        [MaxLength(1500, ErrorMessage = "الإنجازات لا يمكن أن تتجاوز 1500 حرف")]
        public string? Achievements { get; set; }
    }

    public class TravelResultDto
    {
        public int Id { get; set; }
        public int TravelId { get; set; }
        public string TravelTitle { get; set; } = default!;
        public string? Achievements { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class TravelResultQueryDto : PaginationDto
    {
        [Required(ErrorMessage = "معرف السفر مطلوب")]
        public int TravelId { get; set; }
        public string? Search { get; set; }
        public DateTime? From { get; set; }
        public DateTime? To { get; set; }
    }
}
