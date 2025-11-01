using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Visit
{
    public class TravelPartner
    {
        public int Id { get; set; }

        public int TravelId { get; set; }
        public Travel Travel { get; set; } = default!;

        [MaxLength(200)]
        [Required]
        public string Name { get; set; } = default!; // اسم الشريك

        [MaxLength(200)]
        [EmailAddress]
        public string? Email { get; set; } // البريد الإلكتروني

        [MaxLength(200)]
        public string? JobTitle { get; set; } // المسمى الوظيفي
    }
}

