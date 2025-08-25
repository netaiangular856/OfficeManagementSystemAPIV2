namespace OfficeManagementSystem.Domain.Entity.Partners;

public class PartnerContact
{
    public int Id { get; set; }
    public int PartnerId { get; set; }
    public Partner Partner { get; set; } = default!;
    public string FullName { get; set; } = default!;
    public string? Position { get; set; }
    public string? Email { get; set; }
    public string? Phone { get; set; }
    public string? Mobile { get; set; }
    public string PreferredChannel { get; set; } = "email";
    public bool IsPrimary { get; set; }
}
