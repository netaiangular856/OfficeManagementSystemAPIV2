using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class RecommendationConfiguration : IEntityTypeConfiguration<Recommendation>
    {
        public void Configure(EntityTypeBuilder<Recommendation> builder)
        {
            builder.ToTable("Recommendations");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Text)
                .IsRequired()
                .HasMaxLength(1000);

            builder.Property(x => x.OwnerUserId)
                .HasMaxLength(450);

            builder.Property(x => x.Status)
                .IsRequired()
                .HasMaxLength(50)
                .HasDefaultValue("open");

            // Relationships
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Recommendations)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Owner)
                .WithMany()
                .HasForeignKey(x => x.OwnerUserId)
                .OnDelete(DeleteBehavior.SetNull);

            // Indexes
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.OwnerUserId);
            builder.HasIndex(x => x.Status);
            builder.HasIndex(x => x.DueDate);
        }
    }
}
