using Microsoft.AspNetCore.Identity;
using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Auth
{
    public class AppUser :IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? DepartmentId { get; set; }
        public Department? Department { get; set; }
        public string? ImageUrl { get; set; }
        [MaxLength(64)]
        public string TimeZone { get; set; } = "Asia/Dubai";
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public bool IsActive { get; set; }
        //public string? JobTitle { get;set; }
    }
}
