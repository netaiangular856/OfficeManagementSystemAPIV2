using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class DepartmentConfiguration : IEntityTypeConfiguration<Department>
    {
        public void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.ToTable("Departments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Code)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(x => x.NameAr)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.NameEn)
                .HasMaxLength(200);

            builder.Property(x => x.ManagerUserId)
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Self-referencing relationship
            builder.HasOne(x => x.Parent)
                .WithMany(x => x.Children)
                .HasForeignKey(x => x.ParentId)
                .OnDelete(DeleteBehavior.Restrict);

            // Manager relationship
            builder.HasOne(x => x.ManagerUser)
                .WithMany()
                .HasForeignKey(x => x.ManagerUserId)
                .OnDelete(DeleteBehavior.SetNull);

            // Employees relationship
            builder.HasMany(x => x.Employees)
                .WithOne(x => x.Department)
                .HasForeignKey(x => x.DepartmentId)
                .OnDelete(DeleteBehavior.SetNull);

            // Indexes
            builder.HasIndex(x => x.Code).IsUnique();
            builder.HasIndex(x => x.ParentId);
            builder.HasIndex(x => x.ManagerUserId);
            builder.HasIndex(x => x.IsActive);
        }
    }
}
