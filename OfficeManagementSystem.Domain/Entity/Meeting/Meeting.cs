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
        public MeetingType Type { get; set; }
        public string OrganizerUserId { get; set; } = default!;
        public AppUser Organizer { get; set; } = default!;
        public DateTime StartAt { get; set; }
        public DateTime EndAt { get; set; }
        public MeetingStatus Status { get; set; }
        public string? LocationText { get; set; }
        public string CreatedByUserId { get; set; } = default!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public MeetingMinutes? Minutes { get; set; }
        public ICollection<MeetingAttendee> Attendees { get; set; } = new List<MeetingAttendee>();
        public ICollection<Recommendation> Recommendations { get; set; } = new List<Recommendation>();
        public ICollection<MeetingBooking> Bookings { get; set; } = new List<MeetingBooking>();
        public ICollection<MeetingAttachment> Attachments { get; set; } = new List<MeetingAttachment>();

    }
}
