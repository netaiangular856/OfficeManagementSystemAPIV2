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

            // Relationships
            builder.HasOne(x => x.Letter)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.LetterId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Document)
                .WithMany()
                .HasForeignKey(x => x.DocumentId)
                .OnDelete(DeleteBehavior.Restrict);


            // Indexes
            builder.HasIndex(x => x.LetterId);
            builder.HasIndex(x => x.DocumentId);
        }
    }
}
