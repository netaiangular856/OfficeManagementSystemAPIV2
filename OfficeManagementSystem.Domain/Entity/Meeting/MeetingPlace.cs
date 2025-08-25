using OfficeManagementSystem.Domain.Enums.Meeting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity.Meeting
{
    public class MeetingPlace
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public PlaceType Type { get; set; }
        public string? Location { get; set; }
        public int? Capacity { get; set; }
        public string? ContactInfoJson { get; set; }
        public ICollection<MeetingBooking> Bookings { get; set; } = new List<MeetingBooking>();
    }
}
