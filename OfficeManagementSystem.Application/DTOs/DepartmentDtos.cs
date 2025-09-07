using OfficeManagementSystem.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace OfficeManagementSystem.Application.DTOs
{
    // DTOs for Department operations
    public class CreateDepartmentDto
    {
        [Required]
        [MaxLength(30)]
        public string Code { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string NameAr { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? NameEn { get; set; }

        public DepartmentType Type { get; set; } = DepartmentType.Department;

        public int? ParentId { get; set; }

        public int Order { get; set; }

        public string? ManagerUserId { get; set; }
    }

    public class UpdateDepartmentDto
    {

        [Required]
        [MaxLength(200)]
        public string NameAr { get; set; } = string.Empty;

        [MaxLength(200)]
        public string? NameEn { get; set; }

        public DepartmentType Type { get; set; } = DepartmentType.Department;

        public int? ParentId { get; set; }

        public int Order { get; set; }

        public string? ManagerUserId { get; set; }

        public bool IsActive { get; set; } = true;
    }

    public class DepartmentDto
    {
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string NameAr { get; set; } = string.Empty;
        public string? NameEn { get; set; }
        public DepartmentType Type { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public string? ManagerUserId { get; set; }
        public string? ManagerName { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<DepartmentDto> Children { get; set; } = new();
        public int EmployeesCount { get; set; }
    }

    public class DepartmentTreeDto
    {
        public int Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public string NameAr { get; set; } = string.Empty;
        public string? NameEn { get; set; }
        public DepartmentType Type { get; set; }
        public int? ParentId { get; set; }
        public int Order { get; set; }
        public string? ManagerUserId { get; set; }
        public string? ManagerName { get; set; }
        public bool IsActive { get; set; }
        public List<DepartmentTreeDto> Children { get; set; } = new();
        public int EmployeesCount { get; set; }
    }

    public class MoveDepartmentDto
    {
        public int? NewParentId { get; set; }
        public int NewOrder { get; set; }
    }

    public class AssignManagerDto
    {
        [Required]
        public string ManagerUserId { get; set; } = string.Empty;
    }

    public class DepartmentQueryDto
    {
        public string? SearchTerm { get; set; }
        public DepartmentType? Type { get; set; }
        public bool? IsActive { get; set; }
        public int? ParentId { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
    public record DepartmentNameIdDto
    {
        public int Id { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
    }
}
