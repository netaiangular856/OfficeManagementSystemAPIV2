using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Repositories
{
    public class ReminderRepository : GenericRepository<Reminder>, IReminderRepository
    {
        public ReminderRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Reminder>> GetPendingRemindersAsync(DateTime currentTime)
        {
            var reminders = await _context.Reminders
                .Where(r => r.ReminderTime <= currentTime && 
                           !r.IsSent)
                .Include(r => r.User)
                .ToListAsync();
            
            return reminders;
        }

        public async Task<IEnumerable<Reminder>> GetUserRemindersAsync(string userId)
        {
            return await _context.Reminders
                .Where(r => r.UserId == userId)
                .Include(r => r.User)
                .OrderBy(r => r.ReminderTime)
                .ToListAsync();
        }

        public async Task MarkAsSentAsync(int reminderId)
        {
            var reminder = await _context.Reminders.FindAsync(reminderId);
            if (reminder != null)
            {
                reminder.IsSent = true;
                reminder.SentAt = DateTime.UtcNow;
                reminder.UpdatedAt = DateTime.UtcNow;
            }
        }

    }
}
