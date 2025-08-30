using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Domain.Entity.Auth
{
    public class Permission
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; } = default!;

        [MaxLength(150)]
        public string? DisplayName { get; set; }        

        [MaxLength(300)]
        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Controller { get; set; }        // tasks / meetings / letters / ...

        [StringLength(50)]
        public string? Action { get; set; } = string.Empty;

        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public ICollection<RolePermission> Roles { get; set; } = new List<RolePermission>();
    }
}