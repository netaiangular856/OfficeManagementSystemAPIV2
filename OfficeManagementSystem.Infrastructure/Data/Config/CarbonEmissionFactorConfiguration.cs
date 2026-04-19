using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Carbon;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class CarbonEmissionFactorConfiguration : IEntityTypeConfiguration<CarbonEmissionFactor>
    {
        public void Configure(EntityTypeBuilder<CarbonEmissionFactor> builder)
        {
            builder.ToTable("CarbonEmissionFactors");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.TransportType)
                .IsRequired()
                .HasConversion<int>();

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.NameAr)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.Factor)
                .IsRequired()
                .HasColumnType("decimal(18,4)");

            builder.Property(x => x.Unit)
                .HasMaxLength(50)
                .HasDefaultValue("kg/km");

            builder.Property(x => x.Description)
                .HasMaxLength(500);

            builder.Property(x => x.IsActive)
                .HasDefaultValue(true);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            // Indexes
            builder.HasIndex(x => new { x.TransportType, x.IsActive });
            builder.HasIndex(x => x.IsActive);
        }
    }
}

