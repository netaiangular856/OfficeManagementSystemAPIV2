using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingBookingConfiguration : IEntityTypeConfiguration<MeetingBooking>
    {
        public void Configure(EntityTypeBuilder<MeetingBooking> builder)
        {
            builder.ToTable("MeetingBookings");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Cost)
                .HasColumnType("decimal(18,2)");

            builder.Property(x => x.Currency)
                .HasMaxLength(10);

            // Relationships
            builder.HasOne(x => x.Meeting)
                .WithMany(x => x.Bookings)
                .HasForeignKey(x => x.MeetingId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Place)
                .WithMany(x => x.Bookings)
                .HasForeignKey(x => x.PlaceId)
                .OnDelete(DeleteBehavior.Restrict);

            // Indexes
            builder.HasIndex(x => x.MeetingId);
            builder.HasIndex(x => x.PlaceId);
            builder.HasIndex(x => x.Status);
            builder.HasIndex(x => new { x.PlaceId, x.StartAt, x.EndAt });
        }
    }
}
