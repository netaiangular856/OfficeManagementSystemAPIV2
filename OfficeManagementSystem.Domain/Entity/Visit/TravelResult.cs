using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Visit
{
    public class TravelResult
    {
        public int Id { get; set; }

        [Required]
        public int TravelId { get; set; }   // FK
        public Travel Travel { get; set; } = default!;

        [MaxLength(1500)]
        public string? Achievements { get; set; } // الإنجازات / النتائج المحققة

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }

}
