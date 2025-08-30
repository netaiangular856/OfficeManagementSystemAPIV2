using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Visit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Entity;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IUnitOfWork:IDisposable
    {
        IDepartmentRepository DepartmentRepository { get; }
        ITaskRepository TaskRepository { get; }
        ITaskUpdateRepository TaskUpdateRepository { get; }
        ITaskAttachmentRepository TaskAttachmentRepository { get; }

        IDocumentRepository DocumentRepository { get; }
        INotificationRepository NotificationRepository { get; }
        IGenericRepository<UserNotification> UserNotifications { get; }
        
        // Meeting repositories
        IMeetingRepository MeetingRepository { get; }
        IGenericRepository<MeetingAttendee> MeetingAttendeeRepository { get; }
        IGenericRepository<MeetingMinutes> MeetingMinutesRepository { get; }
        IGenericRepository<Recommendation> RecommendationRepository { get; }
        IGenericRepository<MeetingAttachment> MeetingAttachmentRepository { get; }
        
        // Visit repositories
        IVisitRepository VisitRepository { get; }
        IGenericRepository<VisitParticipant> VisitParticipantRepository { get; }
        
        // Partner repositories
        IPartnerRepository PartnerRepository { get; }
        IGenericRepository<PartnerContact> PartnerContactRepository { get; }
        
        // Letter repositories
        ILetterRepository LetterRepository { get; }
        IGenericRepository<LetterAttachment> LetterAttachmentRepository { get; }
        
        // Employee KPI repository
        IEmployeeKpiRepository EmployeeKpiRepository { get; }

        //WorkFlowLog
        IGenericRepository<WorkflowLog> WorkFlowLogRepository { get; }
        
        // Permission repository
        IPermissionRepository PermissionRepository { get; }
        
        // Role Permission repository
        IRolePermissionRepository RolePermissionRepository { get; }

        Task<int> SaveAsync();
    }
}
