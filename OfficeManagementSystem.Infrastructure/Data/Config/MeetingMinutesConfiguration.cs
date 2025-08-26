using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class MeetingMinutesConfiguration : IEntityTypeConfiguration<MeetingMinutes>
    {
        public void Configure(EntityTypeBuilder<MeetingMinutes> builder)
        {
            builder.ToTable("MeetingMinutes");

            builder.HasKey(x => x.Id);

            // áæ åÊÍÊÝÙ ÈÜ AttachmentsCount (ÛíÑ ãÝÖøá ÍÇáíÇð)
            builder.Ignore(x => x.AttachmentsCount); // Ãæ ÇÔØÈ ÇáÎÇÕíÉ ãä ÇáãæÏíá

            builder.Property(x => x.Notes);
            builder.Property(x => x.SummaryAI);

            // Unique Úáì MeetingId (1:1)
            builder.HasIndex(x => x.MeetingId).IsUnique();
        }
    }

}
