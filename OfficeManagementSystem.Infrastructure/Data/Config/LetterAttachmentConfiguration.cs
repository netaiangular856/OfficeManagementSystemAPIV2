using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class LetterAttachmentConfiguration : IEntityTypeConfiguration<LetterAttachment>
    {
        public void Configure(EntityTypeBuilder<LetterAttachment> builder)
        {
            builder.ToTable("LetterAttachments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.UploadedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.UploadedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.Note)
                .HasMaxLength(500);

            // Relationships
            builder.HasOne(x => x.Letter)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.LetterId)
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
            builder.HasIndex(x => x.LetterId);
            builder.HasIndex(x => x.DocumentId);
            builder.HasIndex(x => x.UploadedByUserId);
        }
    }
}
