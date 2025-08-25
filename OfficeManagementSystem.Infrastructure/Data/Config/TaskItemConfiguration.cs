using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TaskItemConfiguration : IEntityTypeConfiguration<TaskItem>
    {
        public void Configure(EntityTypeBuilder<TaskItem> builder)
        {
            builder.ToTable("Tasks");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(300);

            builder.Property(x => x.Description)
                .HasMaxLength(2000);

            builder.Property(x => x.AssigneeUserId)
                .HasMaxLength(450);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.UpdatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.Dept)
                .WithMany()
                .HasForeignKey(x => x.DeptId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.Assignee)
                .WithMany()
                .HasForeignKey(x => x.AssigneeUserId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasOne(x => x.CreatedBy)
                .WithMany()
                .HasForeignKey(x => x.CreatedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.DeptId);
            builder.HasIndex(x => x.AssigneeUserId);
            builder.HasIndex(x => x.Priority);
            builder.HasIndex(x => x.Status);
            builder.HasIndex(x => x.DueDate);
            builder.HasIndex(x => x.SourceType);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
