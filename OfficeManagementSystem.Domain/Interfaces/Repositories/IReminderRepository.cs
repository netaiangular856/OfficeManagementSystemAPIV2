using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IReminderRepository : IGenericRepository<Reminder>
    {
        /// <summary>
        /// جلب التذكيرات المعلقة التي حان وقت إرسالها
        /// </summary>
        Task<IEnumerable<Reminder>> GetPendingRemindersAsync(DateTime currentTime);
        
        /// <summary>
        /// جلب تذكيرات مستخدم معين
        /// </summary>
        Task<IEnumerable<Reminder>> GetUserRemindersAsync(string userId);
        
        /// <summary>
        /// تحديث حالة التذكير إلى تم الإرسال
        /// </summary>
        Task MarkAsSentAsync(int reminderId);
    }
}
