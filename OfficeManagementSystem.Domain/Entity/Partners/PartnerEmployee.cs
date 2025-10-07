using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Domain.Entity.Partners;

public class PartnerEmployee
{
    public int Id { get; set; }
    public int PartnerId { get; set; }
    public Partner Partner { get; set; } = default!;
    
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? JobTitle { get; set; }
    
    public string CreatedByUserId { get; set; } = default!;
    public AppUser CreatedByUser { get; set; } = default!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public bool IsActive { get; set; } = true;
}
