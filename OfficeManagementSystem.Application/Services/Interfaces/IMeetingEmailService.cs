using OfficeManagementSystem.Domain.Entity.Meeting;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IMeetingEmailService
    {
        Task<bool> SendMeetingMinutesEmailAsync(Meeting meeting, MeetingMinutes minutes);
    }
}

