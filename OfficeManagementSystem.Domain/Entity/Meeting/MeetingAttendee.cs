using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Enums.Meeting;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class MeetingAttendee
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;
        public string UserId { get; set; } = default!;
        public AppUser User { get; set; } = default!;
        public string RoleInMeeting { get; set; } = "required"; // required|optional|speaker
        public RSVP AttendanceStatus { get; set; } = RSVP.Invited;
        public string? Notes { get; set; }
    }
}