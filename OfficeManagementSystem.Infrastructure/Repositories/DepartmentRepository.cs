using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class DepartmentRepository : GenericRepository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Department?> GetByIdWithDetailsAsync(int id)
        {
            return await _dbSet
                .Include(d => d.Parent)
                .Include(d => d.Children)
                .Include(d => d.ManagerUser)
                .Include(d => d.Employees)
                .FirstOrDefaultAsync(d => d.Id == id);
        }

        public async Task<IEnumerable<Department>> GetAllWithDetailsAsync(
            Expression<Func<Department, bool>>? filter = null,
            Func<IQueryable<Department>, IOrderedQueryable<Department>>? orderBy = null)
        {
            IQueryable<Department> query = _dbSet
                .Include(d => d.Parent)
                .Include(d => d.Children)
                .Include(d => d.ManagerUser)
                .Include(d => d.Employees);

            if (filter != null)
                query = query.Where(filter);

            return orderBy != null ? await orderBy(query).ToListAsync() : await query.ToListAsync();
        }

        public async Task<IEnumerable<Department>> GetRootDepartmentsAsync()
        {
            return await _dbSet
                .Include(d => d.Children)
                .Include(d => d.ManagerUser)
                .Include(d => d.Employees)
                .Where(d => d.ParentId == null)
                .OrderBy(d => d.Order)
                .ToListAsync();
        }

        public async Task<IEnumerable<Department>> GetChildrenAsync(int parentId)
        {
            return await _dbSet
                .Include(d => d.Children)
                .Include(d => d.ManagerUser)
                .Include(d => d.Employees)
                .Where(d => d.ParentId == parentId)
                .OrderBy(d => d.Order)
                .ToListAsync();
        }

        public async Task<bool> HasChildrenAsync(int departmentId)
        {
            return await _dbSet.AnyAsync(d => d.ParentId == departmentId);
        }

        public async Task<bool> CodeExistsAsync(string code, int? excludeId = null)
        {
            return await _dbSet.AnyAsync(d => d.Code == code && (!excludeId.HasValue || d.Id != excludeId.Value));
        }

        public async Task<int> GetMaxOrderAsync(int? parentId = null)
        {
            var maxOrder = await _dbSet
                .Where(d => d.ParentId == parentId)
                .MaxAsync(d => (int?)d.Order);
            return maxOrder ?? 0;
        }

        public async Task<IEnumerable<Department>> SearchAsync(string searchTerm, DepartmentType? type = null, bool? isActive = null)
        {
            var query = _dbSet
                .Include(d => d.Parent)
                .Include(d => d.ManagerUser)
                .Include(d => d.Employees)
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(searchTerm))
            {
                query = query.Where(d => 
                    d.Code.Contains(searchTerm) || 
                    d.NameAr.Contains(searchTerm) || 
                    (d.NameEn != null && d.NameEn.Contains(searchTerm)));
            }

            if (type.HasValue)
                query = query.Where(d => d.Type == type.Value);

            if (isActive.HasValue)
                query = query.Where(d => d.IsActive == isActive.Value);

            return await query.OrderBy(d => d.Order).ToListAsync();
        }

        public async Task<Department?> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task DeleteAsync(int id)
        {
            var entity = await GetByIdAsync(id);
            if (entity != null)
                _dbSet.Remove(entity);
        }
    }
}
