using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Partners;

namespace OfficeManagementSystem.Domain.Entity.Partners;

public class Partner
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public PartnerCategory Category { get; set; }
    public string? Sector { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public string? Address { get; set; }
    public string? Website { get; set; }
    public string CreatedByUserId { get; set; } = default!;
    public AppUser CreatedByUser { get; set; }
    public DateTime? ContractStartDate { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
    public bool IsActive { get; set; } = true;
    public string? Note { get; set; }

    public ICollection<PartnerContact> Contacts { get; set; } = new List<PartnerContact>();
}
