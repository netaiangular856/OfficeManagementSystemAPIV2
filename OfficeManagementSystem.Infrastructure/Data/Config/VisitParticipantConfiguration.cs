using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Visit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class VisitParticipantConfiguration : IEntityTypeConfiguration<VisitParticipant>
    {
        public void Configure(EntityTypeBuilder<VisitParticipant> builder)
        {
            builder.ToTable("VisitParticipants");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Kind).IsRequired();

            builder.Property(p => p.UserId).HasMaxLength(450);
            builder.Property(p => p.DisplayName).HasMaxLength(300);
            builder.Property(p => p.Organization).HasMaxLength(300);
            builder.Property(p => p.JobTitle).HasMaxLength(200);
            builder.Property(p => p.Department).HasMaxLength(200);
            builder.Property(p => p.Email).HasMaxLength(320);

            // العلاقة مع Visit — مطلوبة
            builder.HasOne(p => p.Visit)
                   .WithMany(v => v.Participants)
                   .HasForeignKey(p => p.VisitId)
                   .OnDelete(DeleteBehavior.Cascade);

            // العلاقة مع User — اختيارية
            builder.HasOne(p => p.User)
                   .WithMany()
                   .HasForeignKey(p => p.UserId)
                   .OnDelete(DeleteBehavior.SetNull);

            // فهارس
            builder.HasIndex(p => p.VisitId);
            builder.HasIndex(p => p.UserId);


        }
    }
}
