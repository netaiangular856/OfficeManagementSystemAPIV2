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
    public class VisitConfiguration : IEntityTypeConfiguration<Visit>
    {
        public void Configure(EntityTypeBuilder<Visit> builder)
        {
            builder.ToTable("Visits");

            builder.HasKey(v => v.Id);

            builder.Property(v => v.Title)
                   .IsRequired()
                   .HasMaxLength(200);

            builder.Property(v => v.Type)
                   .IsRequired();

            builder.Property(v => v.Address)
                   .IsRequired()
                   .HasMaxLength(100);

            builder.Property(v => v.Purpose)
                   .HasMaxLength(400);

            builder.Property(v => v.VisitDate)
                   .IsRequired();

            builder.Property(v => v.CreatedAt)
                   .HasDefaultValueSql("GETUTCDATE()");

            // نخلي UpdatedAt يحدد من الكود (بدون default)
            builder.Property(v => v.UpdatedAt);

            // Creator (اختياري)
            builder.Property(v => v.CreatedBy).HasMaxLength(450);

            builder.HasOne(v => v.CreatedByUser)
                   .WithMany()
                   .HasForeignKey(v => v.CreatedBy)
                   .OnDelete(DeleteBehavior.Restrict);

            // Participants
            builder.HasMany(v => v.Participants)
                   .WithOne(p => p.Visit)
                   .HasForeignKey(p => p.VisitId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Indexes مفيدة للفلترة
            builder.HasIndex(v => v.VisitDate);
            builder.HasIndex(v => v.Type);
            builder.HasIndex(v => v.CreatedBy);
        }
    }
}
