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
    public byte? RelationshipScore { get; set; }
    public string? Tags { get; set; }
    public string CreatedByUserId { get; set; } = default!;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public bool IsActive { get; set; } = true;

    public ICollection<PartnerContact> Contacts { get; set; } = new List<PartnerContact>();
}
