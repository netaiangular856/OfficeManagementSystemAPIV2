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


            // Relationships
            builder.HasOne(x => x.Task)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.TaskItemId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Document)
            .WithMany(x => x.TaskAttachments)
            .HasForeignKey(x => x.DocumentId)
            .OnDelete(DeleteBehavior.Cascade);


            // Indexes
            builder.HasIndex(x => x.TaskItemId);
            builder.HasIndex(x => x.DocumentId);
        }
    }
}
