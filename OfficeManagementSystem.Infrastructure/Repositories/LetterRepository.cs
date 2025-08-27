using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class LetterRepository : GenericRepository<Letter>, ILetterRepository
    {
        public LetterRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Letter?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .FirstOrDefaultAsync(l => l.Id == id);
        }

        public async Task<IEnumerable<Letter>> GetAllWithDetailsAsync(
            Expression<Func<Letter, bool>>? filter = null,
            Func<IQueryable<Letter>, IOrderedQueryable<Letter>>? orderBy = null)
        {
            IQueryable<Letter> query = _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Letter>> GetByCreatorAsync(string creatorUserId)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .Where(l => l.CreatedByUserId == creatorUserId)
                .OrderByDescending(l => l.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Letter>> GetByDirectionAsync(LetterDirection direction)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .Where(l => l.Direction == direction)
                .OrderByDescending(l => l.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Letter>> GetByConfidentialityAsync(Confidentiality confidentiality)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .Where(l => l.Confidentiality == confidentiality)
                .OrderByDescending(l => l.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Letter>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .Where(l => l.CreatedAt >= from && l.CreatedAt <= to)
                .OrderByDescending(l => l.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Letter>> GetBySubjectAsync(string subject)
        {
            return await _dbSet
                .Include(l => l.CreatedBy)
                .Include(l => l.Attachments)
                    .ThenInclude(a => a.Document)
                .Where(l => l.Subject.Contains(subject))
                .OrderByDescending(l => l.CreatedAt)
                .ToListAsync();
        }

        public async Task<bool> ExistsBySubjectAsync(string subject, int? excludeId = null)
        {
            var query = _dbSet.Where(l => l.Subject == subject);
            
            if (excludeId.HasValue)
                query = query.Where(l => l.Id != excludeId.Value);

            return await query.AnyAsync();
        }
    }
}
