using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Enums.Meeting;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class MeetingRepository : GenericRepository<Meeting>, IMeetingRepository
    {
        public MeetingRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Meeting?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                    .ThenInclude(a => a.User)
                .Include(m => m.Attachments)
                    .ThenInclude(a => a.Document)
                .Include(m => m.Minutes)
                .Include(m => m.Recommendations)
                    .ThenInclude(m=>m.User)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<IEnumerable<Meeting>> GetAllWithDetailsAsync(
            Expression<Func<Meeting, bool>>? filter = null,
            Func<IQueryable<Meeting>, IOrderedQueryable<Meeting>>? orderBy = null)
        {
            IQueryable<Meeting> query = _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                    .ThenInclude(a => a.User)
                .Include(m => m.Attachments)
                    .ThenInclude(a => a.Document)
                .Include(m => m.Minutes)
                .Include(m => m.Recommendations)
                    .ThenInclude(m=>m.User);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Meeting>> GetByOrganizerAsync(string organizerUserId)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                .Where(m => m.OrganizerUserId == organizerUserId)
                .OrderByDescending(m => m.StartAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Meeting>> GetByAttendeeAsync(string attendeeUserId)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees.Where(a => a.UserId == attendeeUserId))
                .Where(m => m.Attendees.Any(a => a.UserId == attendeeUserId))
                .OrderByDescending(m => m.StartAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Meeting>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                .Where(m => m.StartAt >= from && m.StartAt <= to)
                .OrderBy(m => m.StartAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Meeting>> GetByStatusAsync(MeetingStatus status)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                .Where(m => m.Status == status)
                .OrderByDescending(m => m.StartAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Meeting>> GetByTypeAsync(MeetingType type)
        {
            return await _dbSet
                .Include(m => m.Organizer)
                .Include(m => m.Attendees)
                .Where(m => m.Type == type)
                .OrderByDescending(m => m.StartAt)
                .ToListAsync();
        }

        public async Task<bool> HasConflictingMeetingsAsync(string location, DateTime startAt, DateTime? endAt, int? excludeMeetingId = null)
        {
            var query = _dbSet.Where(m => m.LocationText == location && m.Status != MeetingStatus.Cancelled);

            if (excludeMeetingId.HasValue)
                query = query.Where(m => m.Id != excludeMeetingId.Value);

            if (endAt.HasValue)
            {
                // Check for overlapping meetings
                return await query.AnyAsync(m => 
                    (m.StartAt <= startAt && (m.EndAt ?? m.StartAt.AddHours(1)) > startAt) ||
                    (m.StartAt < endAt && (m.EndAt ?? m.StartAt.AddHours(1)) >= endAt) ||
                    (startAt <= m.StartAt && endAt >= (m.EndAt ?? m.StartAt.AddHours(1))));
            }
            else
            {
                // Check for meetings on the same day
                var dayStart = startAt.Date;
                var dayEnd = startAt.Date.AddDays(1);
                return await query.AnyAsync(m => m.StartAt >= dayStart && m.StartAt < dayEnd);
            }
        }

        public async Task<int> GetAttendeesCountAsync(int meetingId)
        {
            return await _dbSet
                .Where(m => m.Id == meetingId)
                .SelectMany(m => m.Attendees)
                .CountAsync();
        }
    }
}
