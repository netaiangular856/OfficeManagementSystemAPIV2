using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Documents;

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

            builder.Property(x => x.MimeType)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.CreatedBy)
                .WithMany()
                .HasForeignKey(x => x.CreatedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.Type);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
