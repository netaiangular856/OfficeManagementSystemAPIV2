using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Auth
{
    public class RolePermission
    {
        [MaxLength(450)]                         // نفس طول مفاتيح Identity العادية
        public string RoleId { get; set; } = default!;
        public AppRole Role { get; set; } = default!;

        public DateTime AssignedAt { get; set; } = DateTime.Now;

        public int PermissionId { get; set; }
        public Permission Permission { get; set; } = default!;
    }
}
