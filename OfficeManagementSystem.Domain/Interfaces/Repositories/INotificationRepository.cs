using OfficeManagementSystem.Domain.Entity.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface INotificationRepository:IGenericRepository<Notification>
    {
        Task<Notification> GetWithDetials(int id);
        Task<UserNotification> GetUserNotificationById(int id,string userId);
        Task<int> MarkAllAsRead(string userId);
    }
}
