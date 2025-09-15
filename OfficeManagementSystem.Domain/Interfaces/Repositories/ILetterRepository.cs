using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface ILetterRepository : IGenericRepository<Letter>
    {
        Task<Letter?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Letter>> GetAllWithDetailsAsync(
            Expression<Func<Letter, bool>>? filter = null,
            Func<IQueryable<Letter>, IOrderedQueryable<Letter>>? orderBy = null);
        Task<IEnumerable<Letter>> GetByCreatorAsync(string creatorUserId);
        Task<IEnumerable<Letter>> GetByDirectionAsync(LetterDirection direction);
        Task<IEnumerable<Letter>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<Letter>> GetBySubjectAsync(string subject);
        Task<bool> ExistsBySubjectAsync(string subject, int? excludeId = null);
    }
}
