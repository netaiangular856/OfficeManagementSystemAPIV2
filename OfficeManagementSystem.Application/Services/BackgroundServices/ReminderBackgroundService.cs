using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.BackgroundServices
{
    /// <summary>
    /// خدمة خلفية لمعالجة التذكيرات وإرسالها في الوقت المحدد
    /// </summary>
    public class ReminderBackgroundService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<ReminderBackgroundService> _logger;
        private readonly TimeSpan _checkInterval = TimeSpan.FromMinutes(1); // فحص كل دقيقة

        public ReminderBackgroundService(
            IServiceProvider serviceProvider,
            ILogger<ReminderBackgroundService> logger)
        {
            _serviceProvider = serviceProvider;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("خدمة التذكيرات الخلفية بدأت العمل");

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    using (var scope = _serviceProvider.CreateScope())
                    {
                        var reminderService = scope.ServiceProvider.GetRequiredService<IReminderService>();
                        await reminderService.ProcessPendingRemindersAsync();
                    }

                    _logger.LogDebug("تم فحص التذكيرات المعلقة");
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "خطأ في معالجة التذكيرات");
                }

                await Task.Delay(_checkInterval, stoppingToken);
            }

            _logger.LogInformation("خدمة التذكيرات الخلفية توقفت");
        }

        public override async Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("إيقاف خدمة التذكيرات الخلفية...");
            await base.StopAsync(cancellationToken);
        }
    }
}
