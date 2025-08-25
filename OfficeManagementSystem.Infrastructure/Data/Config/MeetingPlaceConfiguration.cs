using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingPlaceConfiguration : IEntityTypeConfiguration<MeetingPlace>
    {
        public void Configure(EntityTypeBuilder<MeetingPlace> builder)
        {
            builder.ToTable("MeetingPlaces");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.Location)
                .HasMaxLength(500);

            builder.Property(x => x.ContactInfoJson);

            // Indexes
            builder.HasIndex(x => x.Name);
            builder.HasIndex(x => x.Type);
        }
    }
}
