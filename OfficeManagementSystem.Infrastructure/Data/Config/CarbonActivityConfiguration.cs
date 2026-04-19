using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Carbon;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class CarbonActivityConfiguration : IEntityTypeConfiguration<CarbonActivity>
    {
        public void Configure(EntityTypeBuilder<CarbonActivity> builder)
        {
            builder.ToTable("CarbonActivities");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.ActivityType)
                .IsRequired()
                .HasConversion<int>();

            builder.Property(x => x.TransportType)
                .IsRequired()
                .HasConversion<int>();

            builder.Property(x => x.Distance)
                .IsRequired()
                .HasColumnType("decimal(18,2)");

            builder.Property(x => x.ParticipantsCount)
                .IsRequired();

            builder.Property(x => x.EmissionValue)
                .IsRequired()
                .HasColumnType("decimal(18,2)");

            builder.Property(x => x.Description)
                .HasMaxLength(200);

            builder.Property(x => x.Destination)
                .HasMaxLength(100);

            builder.Property(x => x.Origin)
                .HasMaxLength(100);

            builder.Property(x => x.ActivityDate)
                .IsRequired();

            builder.Property(x => x.RelatedEntityType)
                .HasMaxLength(50);

            builder.Property(x => x.CreatedBy)
                .HasMaxLength(450);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            // Relationships
            builder.HasOne(x => x.CreatedByUser)
                .WithMany()
                .HasForeignKey(x => x.CreatedBy)
                .OnDelete(DeleteBehavior.SetNull);

            // Indexes
            builder.HasIndex(x => x.ActivityType);
            builder.HasIndex(x => x.TransportType);
            builder.HasIndex(x => x.ActivityDate);
            builder.HasIndex(x => x.CreatedBy);
            builder.HasIndex(x => new { x.RelatedEntityType, x.RelatedEntityId });
        }
    }
}

