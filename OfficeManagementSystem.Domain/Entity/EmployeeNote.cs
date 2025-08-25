using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity
{
    public class EmployeeNote
    {
        public int Id { get; set; }

        // نفس معرف الموظف = userId (string)
        public string EmployeeUserId { get; set; } = default!;
        public Employee Employee { get; set; } = default!;

        [MaxLength(4000)] public string Note { get; set; } = default!;
        public bool VisibleToEmployee { get; set; } = false;

        public string AddedByUserId { get; set; } = default!;
        public AppUser AddedBy { get; set; } = default!;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
    }
}
