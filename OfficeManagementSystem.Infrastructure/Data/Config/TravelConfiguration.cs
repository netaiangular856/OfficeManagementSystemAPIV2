using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TravelConfiguration : IEntityTypeConfiguration<Travel>
    {
        public void Configure(EntityTypeBuilder<Travel> builder)
        {
            builder.ToTable("Travels");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.Destination)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(x => x.Purpose)
                .HasMaxLength(400);

            builder.Property(x => x.CreatedBy)
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.CreatedByUser)
                .WithMany()
                .HasForeignKey(x => x.CreatedBy)
                .OnDelete(DeleteBehavior.SetNull);

            builder.HasMany(x => x.Partners)
                .WithOne(x => x.Travel)
                .HasForeignKey(x => x.TravelId)
                .OnDelete(DeleteBehavior.Cascade);

            // Indexes
            builder.HasIndex(x => x.CreatedBy);
            builder.HasIndex(x => x.StartDate);
            builder.HasIndex(x => x.EndDate);
        }
    }
}

