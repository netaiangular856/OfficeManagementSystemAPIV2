using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class EmployeeNoteConfiguration : IEntityTypeConfiguration<EmployeeNote>
    {
        public void Configure(EntityTypeBuilder<EmployeeNote> b)
        {
            b.ToTable("EmployeeNotes");
            b.HasKey(x => x.Id);

            b.Property(x => x.Note).IsRequired().HasMaxLength(4000);
            b.Property(x => x.CreatedAt).HasDefaultValueSql("GETUTCDATE()");

            b.HasOne(x => x.Employee)
             .WithMany()
             .HasForeignKey(x => x.EmployeeUserId)
             .HasPrincipalKey(e => e.Id)
             .OnDelete(DeleteBehavior.Cascade);

            b.HasOne(x => x.AddedBy)
             .WithMany()
             .HasForeignKey(x => x.AddedByUserId)
             .OnDelete(DeleteBehavior.Restrict);

            b.HasIndex(x => new { x.EmployeeUserId, x.CreatedAt });
        }
    }

}
