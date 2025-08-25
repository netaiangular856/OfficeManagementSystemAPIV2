using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class RolePermissionConfiguration : IEntityTypeConfiguration<RolePermission>
    {
        public void Configure(EntityTypeBuilder<RolePermission> builder)
        {
            builder.ToTable("RolePermissions");

            builder.HasKey(x => new { x.RoleId, x.PermissionId });

            builder.Property(x => x.RoleId)
                .IsRequired()
                .HasMaxLength(450);

            // Relationships
            builder.HasOne(x => x.Role)
                .WithMany(x => x.Permissions)
                .HasForeignKey(x => x.RoleId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Permission)
                .WithMany(x => x.Roles)
                .HasForeignKey(x => x.PermissionId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
