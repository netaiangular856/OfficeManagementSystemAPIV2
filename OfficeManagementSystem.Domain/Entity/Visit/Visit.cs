using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Visit;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Visit
{
    public class Visit
    {
        public int Id { get; set; }
        [MaxLength(200)] public string Title { get; set; } = default!;
        public VisitType Type { get; set; } = VisitType.Visit;
        [MaxLength(100)] public string Address { get; set; } = default!;
        [MaxLength(400)] public string? Purpose { get; set; }
        public DateTime VisitDate { get; set; }
        public string? CreatedBy { get; set; }
        public AppUser? CreatedByUser { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public bool IsCompleted { get; set; } = false;

        public ICollection<VisitParticipant> Participants { get; set; } = new List<VisitParticipant>();
    }
}
