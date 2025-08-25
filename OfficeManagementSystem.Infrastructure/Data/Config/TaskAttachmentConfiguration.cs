using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TaskAttachmentConfiguration : IEntityTypeConfiguration<TaskAttachment>
    {
        public void Configure(EntityTypeBuilder<TaskAttachment> builder)
        {
            builder.ToTable("TaskAttachments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.FilePath)
                .IsRequired()
                .HasMaxLength(1000);

            builder.Property(x => x.FileType)
                .HasMaxLength(100);

            builder.Property(x => x.UploadedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.UploadedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.Task)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.TaskItemId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.UploadedBy)
                .WithMany()
                .HasForeignKey(x => x.UploadedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.TaskItemId);
            builder.HasIndex(x => x.UploadedByUserId);
            builder.HasIndex(x => x.UploadedAt);
        }
    }
}
