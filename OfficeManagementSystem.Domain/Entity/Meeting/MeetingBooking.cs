using OfficeManagementSystem.Domain.Enums.Meeting;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class MeetingBooking
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;
        public int PlaceId { get; set; }
        public MeetingPlace Place { get; set; } = default!;
        public DateTime StartAt { get; set; }
        public DateTime EndAt { get; set; }
        public BookingStatus Status { get; set; }
        public decimal? Cost { get; set; }
        public string? Currency { get; set; }
        public int? AttachmentId { get; set; } // ARC.Documents
    }
}