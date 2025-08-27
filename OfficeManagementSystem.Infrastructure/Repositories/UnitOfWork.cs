using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public IDepartmentRepository DepartmentRepository { get; }
        public ITaskRepository TaskRepository { get; }
        public ITaskUpdateRepository TaskUpdateRepository { get; }
        public ITaskAttachmentRepository TaskAttachmentRepository { get; }

        public IDocumentRepository DocumentRepository { get; }

        public INotificationRepository NotificationRepository { get; }

        public IGenericRepository<UserNotification> UserNotifications { get; }

        // Meeting repositories
        public IMeetingRepository MeetingRepository { get; }
        public IGenericRepository<MeetingAttendee> MeetingAttendeeRepository { get; }
        public IGenericRepository<MeetingMinutes> MeetingMinutesRepository { get; }
        public IGenericRepository<Recommendation> RecommendationRepository { get; }
        public IGenericRepository<MeetingAttachment> MeetingAttachmentRepository { get; }

        // Visit repositories
        public IVisitRepository VisitRepository { get; }
        public IGenericRepository<VisitParticipant> VisitParticipantRepository { get; }

        //Partner
        public IPartnerRepository PartnerRepository { get; }
        public IGenericRepository<PartnerContact> PartnerContactRepository { get; }

        //Letter
        public IGenericRepository<LetterAttachment> LetterAttachmentRepository { get; }
        public ILetterRepository LetterRepository { get; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            DepartmentRepository = new DepartmentRepository(_context);
            TaskRepository = new TaskRepository(_context);
            TaskUpdateRepository = new TaskUpdateRepository(_context);
            TaskAttachmentRepository = new TaskAttachmentRepository(_context);
            DocumentRepository = new DocumentRepository(_context);
            NotificationRepository = new NotificationRepository(_context);
            UserNotifications = new GenericRepository<UserNotification>(_context);

            // Meeting repositories
            MeetingRepository = new MeetingRepository(_context);
            MeetingAttendeeRepository = new GenericRepository<MeetingAttendee>(_context);
            MeetingMinutesRepository = new GenericRepository<MeetingMinutes>(_context);
            RecommendationRepository = new GenericRepository<Recommendation>(_context);
            MeetingAttachmentRepository = new GenericRepository<MeetingAttachment>(_context);

            // Visit repositories
            VisitRepository = new VisitRepository(_context);
            VisitParticipantRepository = new GenericRepository<VisitParticipant>(_context);

            // Partner repositories
            PartnerRepository = new PartnerRepository(_context);
            PartnerContactRepository = new GenericRepository<PartnerContact>(_context);

            // Letter repositories
            LetterRepository = new LetterRepository(_context);
            LetterAttachmentRepository = new GenericRepository<LetterAttachment>(_context);
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
