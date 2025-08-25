using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    {
        
        public void Configure(EntityTypeBuilder<Employee> b)
        {
            // TPH مع Identity: Employee يرث AppUser (AspNetUsers + Discriminator)
            b.HasBaseType<AppUser>();

            b.Property(x => x.JobTitle).IsRequired().HasMaxLength(120);
            b.Property(x => x.NationalId).HasMaxLength(50);

            // Self-reference: مدير → مرؤوسين
            b.HasOne(e => e.Manager)
             .WithMany(m => m.Subordinates)
             .HasForeignKey(e => e.ManagerId)
             .OnDelete(DeleteBehavior.Restrict);

            b.HasIndex(e => e.ManagerId);

            // منع أن يكون الموظف مدير نفسه
            b.HasCheckConstraint("CK_Employee_ManagerNotSelf",
                "[ManagerId] IS NULL OR [ManagerId] <> [Id]");

            // لو حابب فهرس للبحث بالوظيفي/الرقم القومي:
            // b.HasIndex(e => e.NationalId).IsUnique(false);
        }
    }
}
