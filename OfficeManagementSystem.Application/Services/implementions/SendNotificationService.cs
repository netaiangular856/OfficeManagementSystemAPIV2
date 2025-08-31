using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Notifications;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Domain.Sharing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class SendNotificationService : ISendNotificationService
    {
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;
        private readonly IUnitOfWork _uow;
        private readonly UserManager<AppUser> _userManager;

        public SendNotificationService(
            IEmailService emailService,
            IConfiguration configuration,
            IUnitOfWork uow,
            UserManager<AppUser> userManager)
        {
            _emailService = emailService;
            _configuration = configuration;
            _uow = uow;
            _userManager = userManager;
        }

        public async Task SendNotificationAsync(string title, string message, List<string> userIds,string? type,string? htmlContent=null)
        {
            var notification = new Notification
            {
                Title = title,
                Message = message,
                CreatedAt = DateTime.UtcNow,
                Type=type?? "General"
            };

            var users = await _userManager.Users
                .Where(u => userIds.Contains(u.Id))
                .ToListAsync();

            // Build emails
            var emailTasks = new List<Task>();
            foreach (var user in users)
            {
                if (string.IsNullOrEmpty(user.Email)) continue;

                var emaildto = new EmailDTO(
                    user.Email,
                    _configuration["EmailSetting:From"],
                    title,
                    htmlContent?? EmailStringBodyMS.Send(message)
                );

                emailTasks.Add(_emailService.SendEmail(emaildto));

                notification.UserNotifications.Add(new UserNotification
                {
                    UserId = user.Id,
                    IsRead = false
                });
            }

            await _uow.NotificationRepository.AddAsync(notification);
            await _uow.SaveAsync();

            // Send all emails in parallel
            await Task.WhenAll(emailTasks);
        }

    }
}
