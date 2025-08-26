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


            // Relationships
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Attachments)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Document)
                .WithMany(x=>x.MeetingAttachments)
                .HasForeignKey(x => x.DocumentId)
                .OnDelete(DeleteBehavior.Restrict);


            // Indexes
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.DocumentId);
        }
    }
}
