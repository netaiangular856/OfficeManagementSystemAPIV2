using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingAttendeeConfiguration : IEntityTypeConfiguration<MeetingAttendee>
    {
        public void Configure(EntityTypeBuilder<MeetingAttendee> builder)
        {
            builder.ToTable("MeetingAttendees");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.RoleInMeeting)
                .IsRequired()
                .HasMaxLength(50)
                .HasDefaultValue("required");

            builder.Property(x => x.Notes)
                .HasMaxLength(1000);

            // Relationships
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Attendees)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.User)
                .WithMany()
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Indexes
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.UserId);
            builder.HasIndex(x => x.AttendanceStatus);

            // Unique constraint
            builder.HasIndex(x => new { x.MeetingId, x.UserId }).IsUnique();
        }
    }
}
