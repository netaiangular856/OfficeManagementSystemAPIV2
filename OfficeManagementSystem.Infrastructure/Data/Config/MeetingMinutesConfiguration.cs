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

            // �� ������ �� AttachmentsCount (��� ����� ������)
            builder.Ignore(x => x.AttachmentsCount); // �� ���� ������� �� �������

            builder.Property(x => x.Notes);
            builder.Property(x => x.SummaryAI);

            // Unique ��� MeetingId (1:1)
            builder.HasIndex(x => x.MeetingId).IsUnique();
        }
    }

}
