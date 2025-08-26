using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Enums.Meeting;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IMeetingRepository : IGenericRepository<Meeting>
    {
        Task<Meeting?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Meeting>> GetAllWithDetailsAsync(
            Expression<Func<Meeting, bool>>? filter = null,
            Func<IQueryable<Meeting>, IOrderedQueryable<Meeting>>? orderBy = null);
        Task<IEnumerable<Meeting>> GetByOrganizerAsync(string organizerUserId);
        Task<IEnumerable<Meeting>> GetByAttendeeAsync(string attendeeUserId);
        Task<IEnumerable<Meeting>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<Meeting>> GetByStatusAsync(MeetingStatus status);
        Task<IEnumerable<Meeting>> GetByTypeAsync(MeetingType type);
        Task<bool> HasConflictingMeetingsAsync(string location, DateTime startAt, DateTime? endAt, int? excludeMeetingId = null);
        Task<int> GetAttendeesCountAsync(int meetingId);
    }
}
