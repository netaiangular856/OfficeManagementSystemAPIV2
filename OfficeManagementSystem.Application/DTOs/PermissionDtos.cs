using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.DTOs
{
    public class CreatePermissionDto
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(150)]
        public string? DisplayName { get; set; }

        [MaxLength(300)]
        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Controller { get; set; }

        [MaxLength(50)]
        public string? Action { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class UpdatePermissionDto
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(150)]
        public string? DisplayName { get; set; }

        [MaxLength(300)]
        public string? Description { get; set; }

        [MaxLength(100)]
        public string? Controller { get; set; }

        [MaxLength(50)]
        public string? Action { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class PermissionQueryDto
    {
        public string? Search { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 12;
    }

    public class PermissionDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? DisplayName { get; set; }
        public string? Description { get; set; }
        public string? Controller { get; set; }
        public string? Action { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
