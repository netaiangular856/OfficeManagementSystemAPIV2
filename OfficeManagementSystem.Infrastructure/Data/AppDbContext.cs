using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Entity.Visit;

namespace OfficeManagementSystem.Infrastructure.Data
{
    public class AppDbContext : IdentityDbContext<AppUser, AppRole, string>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Auth
        public virtual DbSet<Permission> Permissions { get; set; }
        public virtual DbSet<RolePermission> RolePermissions { get; set; }

        // Core
        public virtual DbSet<Department> Departments { get; set; }

        public virtual DbSet<Employee> Employees { get; set; }

        public virtual DbSet<EmployeeNote> EmployeeNotes { get; set; }
        public virtual DbSet<EmployeeKPI> EmployeeKPIs { get; set; }
        public virtual DbSet<WorkflowLog> WorkflowLogs { get; set; }


        // Documents
        public virtual DbSet<Document> Documents { get; set; }

        // Letters
        public virtual DbSet<Letter> Letters { get; set; }
        public virtual DbSet<LetterAttachment> LetterAttachments { get; set; }

        // Partners
        public virtual DbSet<Partner> Partners { get; set; }
        public virtual DbSet<PartnerContact> PartnerContacts { get; set; }

        // Meetings
        public virtual DbSet<Meeting> Meetings { get; set; }
        public virtual DbSet<MeetingAttendee> MeetingAttendees { get; set; }
        public virtual DbSet<MeetingAttachment> MeetingAttachments { get; set; }
        public virtual DbSet<MeetingMinutes> MeetingMinutes { get; set; }
        public virtual DbSet<Recommendation> Recommendations { get; set; }

        // Tasks
        public virtual DbSet<TaskItem> Tasks { get; set; }
        public virtual DbSet<TaskAttachment> TaskAttachments { get; set; }
        public virtual DbSet<TaskUpdate> TaskUpdates { get; set; }
        public virtual DbSet<TaskFeedback> TaskFeedbacks { get; set; }

        //Notifications
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<UserNotification> UserNotifications { get; set; }

        //Visits
        public virtual DbSet<Visit> Visits { get; set; }
        public virtual DbSet<VisitParticipant> VisitParticipants { get; set; }

        //Travels
        public virtual DbSet<Travel> Travels { get; set; }

        //Reminders
        public virtual DbSet<Reminder> Reminders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Apply all configurations from the Config folder
            builder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        }
    }
}
