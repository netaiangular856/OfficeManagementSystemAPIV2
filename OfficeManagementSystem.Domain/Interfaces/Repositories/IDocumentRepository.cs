using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Enums;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IDocumentRepository : IGenericRepository<Document>
    {
        Task<Document?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Document>> GetAllWithDetailsAsync(
            Expression<Func<Document, bool>>? filter = null,
            Func<IQueryable<Document>, IOrderedQueryable<Document>>? orderBy = null);
        Task<IEnumerable<Document>> GetByCreatorAsync(string creatorUserId);
        Task<IEnumerable<Document>> GetByTypeAsync(DocumentType type);
        Task<IEnumerable<Document>> GetByDocumentSourceAsync(DocumentSource documentSource);
        Task<IEnumerable<Document>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<bool> ExistsByTitleAsync(string title, int? excludeId = null);
    }
}
