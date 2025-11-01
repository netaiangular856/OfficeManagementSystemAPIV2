using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TravelPartnerConfiguration : IEntityTypeConfiguration<TravelPartner>
    {
        public void Configure(EntityTypeBuilder<TravelPartner> builder)
        {
            builder.ToTable("TravelPartners");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(x => x.Email)
                .HasMaxLength(200);

            builder.Property(x => x.JobTitle)
                .HasMaxLength(200);

            // Relationship
            builder.HasOne(x => x.Travel)
                .WithMany(x => x.Partners)
                .HasForeignKey(x => x.TravelId)
                .OnDelete(DeleteBehavior.Cascade);

            // Indexes
            builder.HasIndex(x => x.TravelId);
        }
    }
}

