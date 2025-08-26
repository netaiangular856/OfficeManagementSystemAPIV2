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

            builder.Property(x => x.LocationMode)
                .IsRequired();

            builder.Property(x => x.LocationText)
                .HasMaxLength(500);

            builder.Property(x => x.OnlineUrl)
                .HasMaxLength(1000);

            builder.Property(x => x.CreatedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            // Îáíå nullable ÈÏæä Defaultº åäÍÏøËå ãä ÇáßæÏ ÚäÏ ÇáÊÚÏíá
            builder.Property(x => x.UpdatedAt);

            // ÚáÇÞÇÊ
            builder.HasOne(x => x.Organizer)
                .WithMany()
                .HasForeignKey(x => x.OrganizerUserId)
                .OnDelete(DeleteBehavior.Restrict);

            // Minutes 1:1
            builder.HasOne(x => x.Minutes)
                .WithOne(x => x.Meeting)
                .HasForeignKey<MeetingMinutes>(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);


            // ÝåÇÑÓ
            builder.HasIndex(x => x.Type);
            builder.HasIndex(x => x.Status);
            builder.HasIndex(x => x.StartAt);
            builder.HasIndex(x => x.OrganizerUserId);
            builder.HasIndex(x =>  x.LocationMode);
            builder.HasIndex(x => x.CreatedByUserId);
        }
    }

}
