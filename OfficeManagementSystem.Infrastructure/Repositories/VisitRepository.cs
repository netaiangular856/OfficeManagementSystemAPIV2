using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Visit;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class VisitRepository : GenericRepository<Visit>, IVisitRepository
    {
        public VisitRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Visit?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants)
                    .ThenInclude(p => p.User)
                .FirstOrDefaultAsync(v => v.Id == id);
        }

        public async Task<IEnumerable<Visit>> GetAllWithDetailsAsync(
            Expression<Func<Visit, bool>>? filter = null,
            Func<IQueryable<Visit>, IOrderedQueryable<Visit>>? orderBy = null)
        {
            IQueryable<Visit> query = _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants)
                    .ThenInclude(p => p.User);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Visit>> GetByOrganizerAsync(string organizerUserId)
        {
            return await _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants)
                .Where(v => v.CreatedBy == organizerUserId)
                .OrderByDescending(v => v.VisitDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<Visit>> GetByParticipantAsync(string participantUserId)
        {
            return await _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants.Where(p => p.UserId == participantUserId))
                .Where(v => v.Participants.Any(p => p.UserId == participantUserId))
                .OrderByDescending(v => v.VisitDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<Visit>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants)
                .Where(v => v.VisitDate >= from && v.VisitDate <= to)
                .OrderBy(v => v.VisitDate)
                .ToListAsync();
        }

        public async Task<IEnumerable<Visit>> GetByTypeAsync(VisitType type)
        {
            return await _dbSet
                .Include(v => v.CreatedByUser)
                .Include(v => v.Participants)
                .Where(v => v.Type == type)
                .OrderByDescending(v => v.VisitDate)
                .ToListAsync();
        }

        public async Task<int> GetParticipantsCountAsync(int visitId)
        {
            return await _dbSet
                .Where(v => v.Id == visitId)
                .SelectMany(v => v.Participants)
                .CountAsync();
        }
    }
}
