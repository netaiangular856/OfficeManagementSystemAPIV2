using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class TaskAssignmentConfiguration : IEntityTypeConfiguration<TaskAssignment>
    {
        public void Configure(EntityTypeBuilder<TaskAssignment> builder)
        {
            builder.ToTable("TaskAssignments");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.EmployeeUserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(x => x.AssignedAt)
                .HasDefaultValueSql("GETUTCDATE()");

            builder.HasOne(x => x.Task)
                .WithMany(t => t.Assignees)
                .HasForeignKey(x => x.TaskItemId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(x => x.Employee)
                .WithMany()
                .HasForeignKey(x => x.EmployeeUserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasIndex(x => new { x.TaskItemId, x.EmployeeUserId });
        }
    }
}


