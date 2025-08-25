using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class PermissionConfiguration : IEntityTypeConfiguration<Permission>
    {
        public void Configure(EntityTypeBuilder<Permission> builder)
        {
            builder.ToTable("Permissions");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Key)
                .IsRequired()
                .HasMaxLength(80);

            builder.Property(x => x.Name)
                .HasMaxLength(150);

            builder.Property(x => x.Description)
                .HasMaxLength(300);

            builder.Property(x => x.Category)
                .HasMaxLength(40);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Indexes
            builder.HasIndex(x => x.Key).IsUnique();
            builder.HasIndex(x => x.Category);
            builder.HasIndex(x => x.IsActive);
        }
    }
}
