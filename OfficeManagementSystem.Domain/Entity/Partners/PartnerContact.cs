namespace OfficeManagementSystem.Domain.Entity.Partners;

public class PartnerContact
{
    public int Id { get; set; }
    public int PartnerId { get; set; }
    public Partner Partner { get; set; } = default!;
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Mobile { get; set; }
}
