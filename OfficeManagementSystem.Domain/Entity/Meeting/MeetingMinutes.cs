namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class MeetingMinutes
    {
        public int Id { get; set; }
        public int MeetingId { get; set; }
        public Meeting Meeting { get; set; } = default!;
        public string? Notes { get; set; }
        public int AttachmentsCount { get; set; }
        public string? SummaryAI { get; set; }
    }
}