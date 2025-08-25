using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Auth;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class AppUserConfiguration : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> builder)
        {
            builder.Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(150);
            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(x => x.TimeZone)
                .IsRequired()
                .HasMaxLength(64)
                .HasDefaultValue("Asia/Dubai");

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.IsActive).HasDefaultValue(true);

            // Relationship with Department
            builder.HasOne(x => x.Department)
                .WithMany(x => x.Employees)
                .HasForeignKey(x => x.DepartmentId)
                .OnDelete(DeleteBehavior.SetNull);

            // Indexes
            builder.HasIndex(x => x.DepartmentId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
