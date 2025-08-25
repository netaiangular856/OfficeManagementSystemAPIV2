using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TaskUpdateConfiguration : IEntityTypeConfiguration<TaskUpdate>
    {
        public void Configure(EntityTypeBuilder<TaskUpdate> builder)
        {
            builder.ToTable("TaskUpdates");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Note)
                .HasMaxLength(2000);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.Task)
                .WithMany(x => x.Updates)
                .HasForeignKey(x => x.TaskItemId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.CreatedBy)
                .WithMany()
                .HasForeignKey(x => x.CreatedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.TaskItemId);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
