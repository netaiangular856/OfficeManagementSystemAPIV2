using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Visit
{
    public class Travel
    {
        public int Id { get; set; }

        [MaxLength(200)]
        public string Title { get; set; } = default!; // اسم الرحلة أو المهمة

        [MaxLength(100)]
        public string Destination { get; set; } = default!; // الوجهة (المدينة / الدولة)

        [MaxLength(400)]
        public string? Purpose { get; set; } // الغرض من السفر

        public DateTime StartDate { get; set; } // تاريخ بداية السفر
        public DateTime EndDate { get; set; }   // تاريخ انتهاء السفر

        public string? TransportMode { get; set; } // وسيلة السفر (طيران، قطار، سيارة..)
        public string? Accommodation { get; set; } // مكان الإقامة (فندق/شقة...)


        public string? CreatedBy { get; set; }
        public AppUser? CreatedByUser { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }

}
