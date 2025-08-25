using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingAttachmentConfiguration : IEntityTypeConfiguration<MeetingAttachment>
    {
        public void Configure(EntityTypeBuilder<MeetingAttachment> builder)
        {
            builder.ToTable("MeetingAttachments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.UploadedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.UploadedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Document)
                .WithMany()
                .HasForeignKey(x => x.DocumentId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.UploadedBy)
                .WithMany()
                .HasForeignKey(x => x.UploadedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.DocumentId);
            builder.HasIndex(x => x.UploadedByUserId);
        }
    }
}
