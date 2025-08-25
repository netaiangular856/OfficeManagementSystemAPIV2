using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity
{

    public class Department
    {
        public int Id { get; set; }

        [MaxLength(30)] public string Code { get; set; } = default!;
        [MaxLength(200)] public string NameAr { get; set; } = default!;
        [MaxLength(200)] public string? NameEn { get; set; }

        public DepartmentType Type { get; set; } = DepartmentType.Department;

        public int? ParentId { get; set; }
        public Department? Parent { get; set; }
        public ICollection<Department> Children { get; set; } = new List<Department>();

        public int Order { get; set; }

        // مدير القسم (ع المفتاح النصي بتاع الهوية)
        public string? ManagerUserId { get; set; }
        public AppUser? ManagerUser { get; set; }

        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public ICollection<AppUser> Employees { get; set; }=new List<AppUser>();
    }
}
