using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public IDepartmentRepository DepartmentRepository { get; }
        public ITaskRepository TaskRepository { get; }
        public ITaskUpdateRepository TaskUpdateRepository { get; }
        public ITaskAttachmentRepository TaskAttachmentRepository { get; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            DepartmentRepository = new DepartmentRepository(_context);
            TaskRepository = new TaskRepository(_context);
            TaskUpdateRepository = new TaskUpdateRepository(_context);
            TaskAttachmentRepository = new TaskAttachmentRepository(_context);
        }

        public Task<int> SaveAsync()
        {
            return _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
