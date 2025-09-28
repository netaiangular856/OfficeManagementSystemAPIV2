using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Documents;
using System.Reflection.Emit;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class DocumentConfiguration : IEntityTypeConfiguration<Document>
    {
        public void Configure(EntityTypeBuilder<Document> builder)
        {
            builder.ToTable("Documents");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(x => x.StoragePath)
                .IsRequired()
                .HasMaxLength(1000);


            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.Description)
                .HasMaxLength(500);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.CreatedBy)
                .WithMany()
                .HasForeignKey(x => x.CreatedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Document  TaskAttachments
            builder.HasMany(d => d.TaskAttachments)
                   .WithOne(t => t.Document)
                   .HasForeignKey(t => t.DocumentId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Document  MeetingAttachments
            builder.HasMany(d => d.MeetingAttachments)
                   .WithOne(m => m.Document)
                   .HasForeignKey(m => m.DocumentId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Document  LetterAttachments
            builder.HasMany(d => d.LetterAttachments)
                   .WithOne(l => l.Document)
                   .HasForeignKey(l => l.DocumentId)
                   .OnDelete(DeleteBehavior.Cascade);


            // Indexes
            builder.HasIndex(x => x.Type);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
