using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Partners;

namespace OfficeManagementSystem.Infrastructure.Data.Config;

public class PartnerEmployeeConfiguration : IEntityTypeConfiguration<PartnerEmployee>
{
    public void Configure(EntityTypeBuilder<PartnerEmployee> builder)
    {
        builder.ToTable("PartnerEmployees");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .HasMaxLength(200);

        builder.Property(x => x.Email)
            .HasMaxLength(255);

        builder.Property(x => x.PhoneNumber)
            .HasMaxLength(50);

        builder.Property(x => x.JobTitle)
            .HasMaxLength(200);

        builder.Property(x => x.CreatedByUserId)
            .IsRequired()
            .HasMaxLength(450);

        builder.Property(x => x.CreatedAt)
            .HasDefaultValueSql("GETUTCDATE()");

        builder.Property(x => x.IsActive)
            .HasDefaultValue(true);

        // Relationships
        builder.HasOne(x => x.Partner)
            .WithMany(x => x.Employees)
            .HasForeignKey(x => x.PartnerId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.CreatedByUser)
            .WithMany()
            .HasForeignKey(x => x.CreatedByUserId)
            .OnDelete(DeleteBehavior.Restrict);

        // Indexes
        builder.HasIndex(x => x.PartnerId);
        builder.HasIndex(x => x.Email);
        builder.HasIndex(x => x.IsActive);
        builder.HasIndex(x => x.CreatedByUserId);
    }
}
