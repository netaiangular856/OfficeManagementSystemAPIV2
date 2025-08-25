using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Partners;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class PartnerConfiguration : IEntityTypeConfiguration<Partner>
    {
        public void Configure(EntityTypeBuilder<Partner> builder)
        {
            builder.ToTable("Partners");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(300);

            builder.Property(x => x.Sector)
                .HasMaxLength(100);

            builder.Property(x => x.Country)
                .HasMaxLength(100);

            builder.Property(x => x.City)
                .HasMaxLength(100);

            builder.Property(x => x.Address)
                .HasMaxLength(500);

            builder.Property(x => x.Website)
                .HasMaxLength(300);

            builder.Property(x => x.Tags)
                .HasMaxLength(1000);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.UpdatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Indexes
            builder.HasIndex(x => x.Name);
            builder.HasIndex(x => x.Category);
            builder.HasIndex(x => x.Country);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.IsActive);
        }
    }
}
