using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Visit;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IVisitRepository : IGenericRepository<Visit>
    {
        Task<Visit?> GetByIdWithDetailsAsync(int id);
        Task<IEnumerable<Visit>> GetAllWithDetailsAsync(
            Expression<Func<Visit, bool>>? filter = null,
            Func<IQueryable<Visit>, IOrderedQueryable<Visit>>? orderBy = null);
        Task<IEnumerable<Visit>> GetByOrganizerAsync(string organizerUserId);
        Task<IEnumerable<Visit>> GetByParticipantAsync(string participantUserId);
        Task<IEnumerable<Visit>> GetByDateRangeAsync(DateTime from, DateTime to);
        Task<IEnumerable<Visit>> GetByTypeAsync(VisitType type);
        Task<int> GetParticipantsCountAsync(int visitId);
    }
}
