using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class NotificationRepository :GenericRepository<Notification> ,INotificationRepository
    {
        public NotificationRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<UserNotification> GetUserNotificationById(int id, string userId)
        {
            return await _context.UserNotifications
                .FirstOrDefaultAsync(m=>m.NotificationId==id&&m.UserId==userId);
        }

        public async Task<Notification> GetWithDetials(int id)
        {
            return await _dbSet
                .Include(m=>m.UserNotifications)
                .FirstOrDefaultAsync(m => m.Id == id);
        }
        public async Task<int> MarkAllAsRead(string userId)
        {
            var updatedCount = await _context.UserNotifications
                .Where(un => un.UserId == userId && !un.IsRead)
                .ExecuteUpdateAsync(updates => updates
                    .SetProperty(un => un.IsRead, true)
                    .SetProperty(un => un.ReadAt, DateTime.UtcNow));

            return updatedCount;
        }
    }
}
