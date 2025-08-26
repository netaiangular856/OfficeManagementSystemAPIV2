using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Meeting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class Meeting
    {
        public int Id { get; set; }

        public string Title { get; set; } = default!;
        public string? Agenda { get; set; }
        public MeetingType Type { get; set; } = MeetingType.Internal;
        public MeetingLocationMode LocationMode { get; set; } = MeetingLocationMode.InPerson;

        public string OrganizerUserId { get; set; } = default!;
        public AppUser Organizer { get; set; } = default!;

        // أوقات الاجتماع الأساسية (مطلووبة)
        public DateTime StartAt { get; set; }
        public DateTime? EndAt { get; set; }

        public MeetingStatus Status { get; set; } = MeetingStatus.Scheduled;

        // مكان أو رابط
        public string? LocationText { get; set; }
        public string? OnlineUrl { get; set; }            // لو الاجتماع أونلاين/هايبرد

        // تتبّع وإنشاء
        public string CreatedByUserId { get; set; } = default!;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }

        // علاقات
        public MeetingMinutes? Minutes { get; set; }      // واحد لكل ميتنج
        public ICollection<MeetingAttendee> Attendees { get; set; } = new List<MeetingAttendee>();
        public ICollection<Recommendation> Recommendations { get; set; } = new List<Recommendation>();
        public ICollection<MeetingAttachment> Attachments { get; set; } = new List<MeetingAttachment>();  // Attachments عامة للميتنج
    }
}
