using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Application.DTOs.Common
{
    public class PaginationDto
    {
        [Range(1, int.MaxValue, ErrorMessage = "رقم الصفحة يجب أن يكون أكبر من 0")]
        public int PageNumber { get; set; } = 1;

        [Range(1, 100, ErrorMessage = "حجم الصفحة يجب أن يكون بين 1 و 100")]
        public int PageSize { get; set; } = 10;
    }
}
