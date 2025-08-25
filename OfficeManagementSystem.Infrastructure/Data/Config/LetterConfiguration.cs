using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class LetterConfiguration : IEntityTypeConfiguration<Letter>
    {
        public void Configure(EntityTypeBuilder<Letter> builder)
        {
            builder.ToTable("Letters");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Number)
                .HasMaxLength(100);

            builder.Property(x => x.Subject)
                .IsRequired()
                .HasMaxLength(500);

            builder.Property(x => x.Body)
                .IsRequired();

            builder.Property(x => x.To)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(x => x.Cc)
                .HasMaxLength(2000);

            builder.Property(x => x.Bcc)
                .HasMaxLength(2000);

            builder.Property(x => x.ReferenceNumbers)
                .HasMaxLength(500);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.UpdatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.CreatedBy)
                .WithMany()
                .HasForeignKey(x => x.CreatedByUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.Number);
            builder.HasIndex(x => x.Direction);
            builder.HasIndex(x => x.Confidentiality);
            builder.HasIndex(x => x.CreatedByUserId);
            builder.HasIndex(x => x.CreatedAt);
        }
    }
}
