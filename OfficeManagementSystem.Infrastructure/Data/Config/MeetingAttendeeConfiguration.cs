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

            // ÃØæÇá ãÝíÏÉ
            builder.Property(x => x.UserId).HasMaxLength(450);
            builder.Property(x => x.DisplayName).HasMaxLength(300);
            builder.Property(x => x.Organization).HasMaxLength(300);
            builder.Property(x => x.JobTitle).HasMaxLength(200);
            builder.Property(x => x.Department).HasMaxLength(200);
            builder.Property(x => x.Notes).HasMaxLength(1000);

            builder.Property(x => x.Kind).IsRequired();
            builder.Property(x => x.Role).IsRequired();
            builder.Property(x => x.AttendanceStatus).IsRequired();

            // ÚáÇÞÇÊ
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Attendees)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.User)
                .WithMany()
                .HasForeignKey(x => x.UserId)
                .OnDelete(DeleteBehavior.SetNull); // Ãæ Restrict ÍÓÈ ÓíÇÓÊß

            // ÝåÇÑÓ ÚÇãÉ
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.UserId);
            builder.HasIndex(x => x.AttendanceStatus);
        }
    }

}
