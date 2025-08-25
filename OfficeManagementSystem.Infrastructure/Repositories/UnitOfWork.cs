using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Notifications;
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

        public IGenericRepository<Document> DocumentRepository { get; }

        public INotificationRepository NotificationRepository { get; }

        public IGenericRepository<UserNotification> UserNotifications { get; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            DepartmentRepository = new DepartmentRepository(_context);
            TaskRepository = new TaskRepository(_context);
            TaskUpdateRepository = new TaskUpdateRepository(_context);
            TaskAttachmentRepository = new TaskAttachmentRepository(_context);
            DocumentRepository = new GenericRepository<Document>(_context);
            NotificationRepository = new NotificationRepository(_context);
            UserNotifications=new GenericRepository<UserNotification>(_context);

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
