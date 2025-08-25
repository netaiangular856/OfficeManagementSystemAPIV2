using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingConfiguration : IEntityTypeConfiguration<Meeting>
    {
        public void Configure(EntityTypeBuilder<Meeting> builder)
        {
            builder.ToTable("Meetings");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(300);

            builder.Property(x => x.Agenda)
                .HasMaxLength(2000);

            builder.Property(x => x.OrganizerUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.CreatedByUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.LocationText)
                .HasMaxLength(500);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.Property(x => x.UpdatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Relationships
            builder.HasOne(x => x.Organizer)
                .WithMany()
                .HasForeignKey(x => x.OrganizerUserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.Minutes)
                .WithOne(x => x.Meeting)
                .HasForeignKey<MeetingMinutes>(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            // Indexes
            builder.HasIndex(x => x.Type);
            builder.HasIndex(x => x.Status);
            builder.HasIndex(x => x.StartAt);
            builder.HasIndex(x => x.OrganizerUserId);
            builder.HasIndex(x => x.CreatedByUserId);
        }
    }
}
