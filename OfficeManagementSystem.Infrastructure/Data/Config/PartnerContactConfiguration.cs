using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Partners;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class PartnerContactConfiguration : IEntityTypeConfiguration<PartnerContact>
    {
        public void Configure(EntityTypeBuilder<PartnerContact> builder)
        {
            builder.ToTable("PartnerContacts");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.FullName)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.Position)
                .HasMaxLength(150);

            builder.Property(x => x.Email)
                .HasMaxLength(200);

            builder.Property(x => x.Phone)
                .HasMaxLength(50);

            builder.Property(x => x.Mobile)
                .HasMaxLength(50);

            builder.Property(x => x.PreferredChannel)
                .IsRequired()
                .HasMaxLength(50)
                .HasDefaultValue("email");

            // Relationships
            builder.HasOne(x => x.Partner)
                .WithMany(x => x.Contacts)
                .HasForeignKey(x => x.PartnerId)
                .OnDelete(DeleteBehavior.Cascade);

            // Indexes
            builder.HasIndex(x => x.PartnerId);
            builder.HasIndex(x => x.Email);
            builder.HasIndex(x => x.IsPrimary);
        }
    }
}
