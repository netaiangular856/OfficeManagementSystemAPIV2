using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Domain.Entity.Auth
{
    public class Permission
    {
        public int Id { get; set; }

        [MaxLength(80)]
        public string Key { get; set; } = default!;  // مثال: "tasks.read", "letters.approve"

        [MaxLength(150)]
        public string? Name { get; set; }            // اسم عربي/معرّف للعرض

        [MaxLength(300)]
        public string? Description { get; set; }

        [MaxLength(40)]
        public string? Category { get; set; }        // tasks / meetings / letters / ...

        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public ICollection<RolePermission> Roles { get; set; } = new List<RolePermission>();
    }
}