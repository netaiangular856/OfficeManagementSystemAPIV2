using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Infrastructure.Data.Config
{
    public class ReminderConfiguration : IEntityTypeConfiguration<Reminder>
    {
        public void Configure(EntityTypeBuilder<Reminder> builder)
        {
            builder.HasKey(r => r.Id);

            builder.Property(r => r.Title)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(r => r.Description)
                .HasMaxLength(1000);

            builder.Property(r => r.UserId)
                .IsRequired()
                .HasMaxLength(450);

            builder.Property(r => r.ReminderTime)
                .IsRequired();

            builder.Property(r => r.EventTime)
                .IsRequired();

            builder.Property(r => r.IsSent)
                .IsRequired()
                .HasDefaultValue(false);

            builder.Property(r => r.CreatedAt)
                .IsRequired()
                .HasDefaultValueSql("GETUTCDATE()");

            // العلاقات
            builder.HasOne(r => r.User)
                .WithMany()
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // فهارس
            builder.HasIndex(r => r.UserId);
            builder.HasIndex(r => r.ReminderTime);
            builder.HasIndex(r => r.IsSent);

            // اسم الجدول
            builder.ToTable("Reminders");
        }
    }
}
