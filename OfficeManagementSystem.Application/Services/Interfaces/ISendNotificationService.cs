using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ISendNotificationService
    {
        Task SendNotificationAsync(string title, string message, List<string> userIds,string? type, string? htmlContent=null);

    }
}
