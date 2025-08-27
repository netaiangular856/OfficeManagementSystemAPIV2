using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class DocumentRepository : GenericRepository<Document>, IDocumentRepository
    {
        public DocumentRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Document?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(d => d.CreatedBy)
                .FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<IEnumerable<Document>> GetAllWithDetailsAsync(
            Expression<Func<Document, bool>>? filter = null,
            Func<IQueryable<Document>, IOrderedQueryable<Document>>? orderBy = null)
        {
            IQueryable<Document> query = _dbSet
                .Include(d => d.CreatedBy);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Document>> GetByCreatorAsync(string creatorUserId)
        {
            return await _dbSet
                .Include(d => d.CreatedBy)
                .Where(d => d.CreatedByUserId == creatorUserId)
                .OrderByDescending(d => d.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Document>> GetByTypeAsync(DocumentType type)
        {
            return await _dbSet
                .Include(d => d.CreatedBy)
                .Where(d => d.Type == type)
                .OrderByDescending(d => d.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Document>> GetByDocumentSourceAsync(DocumentSource documentSource)
        {
            return await _dbSet
                .Include(d => d.CreatedBy)
                .Where(d => d.DocumentSource == documentSource)
                .OrderByDescending(d => d.CreatedAt)
                .ToListAsync();
        }

        public async Task<IEnumerable<Document>> GetByDateRangeAsync(DateTime from, DateTime to)
        {
            return await _dbSet
                .Include(d => d.CreatedBy)
                .Where(d => d.CreatedAt >= from && d.CreatedAt <= to)
                .OrderByDescending(d => d.CreatedAt)
                .ToListAsync();
        }

        public async Task<bool> ExistsByTitleAsync(string title, int? excludeId = null)
        {
            var query = _dbSet.Where(d => d.Title == title);
            
            if (excludeId.HasValue)
                query = query.Where(d => d.Id != excludeId.Value);

            return await query.AnyAsync();
        }
    }
}
