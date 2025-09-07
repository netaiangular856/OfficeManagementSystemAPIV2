using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.BackgroundServices
{
    public class MonthlyKpiCalculationService : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider;
        private readonly ILogger<MonthlyKpiCalculationService> _logger;
        private readonly TimeSpan _checkInterval = TimeSpan.FromHours(1); // Check every hour
        private readonly int _targetDayOfMonth = 1; // Calculate KPIs on the 1st of each month
        private readonly TimeSpan _targetTime = new TimeSpan(14, 0, 0); // At 2:00 AM

        public MonthlyKpiCalculationService(
            IServiceProvider serviceProvider,
            ILogger<MonthlyKpiCalculationService> logger)
        {
            _serviceProvider = serviceProvider;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("Monthly KPI Calculation Service started");

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    var now = DateTime.UtcNow;
                    
                    // Check if it's time to calculate KPIs (1st of month at 2:00 AM)
                    if (ShouldCalculateKpis(now))
                    {
                        _logger.LogInformation("Starting monthly KPI calculation for {Month}/{Year}", now.Month, now.Year);
                        
                        await CalculateMonthlyKpisAsync();
                        
                        _logger.LogInformation("Completed monthly KPI calculation for {Month}/{Year}", now.Month, now.Year);
                    }

                    // Wait for the next check
                    await Task.Delay(_checkInterval, stoppingToken);
                }
                catch (OperationCanceledException)
                {
                    // Service is stopping
                    break;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error occurred in Monthly KPI Calculation Service");
                    await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken); // Wait 5 minutes before retrying
                }
            }

            _logger.LogInformation("Monthly KPI Calculation Service stopped");
        }

        private bool ShouldCalculateKpis(DateTime now)
        {
            return now.Day == _targetDayOfMonth && 
                   now.TimeOfDay >= _targetTime && 
                   now.TimeOfDay < _targetTime.Add(TimeSpan.FromHours(1));
        }

        private async Task CalculateMonthlyKpisAsync()
        {
            using var scope = _serviceProvider.CreateScope();
            var kpiService = scope.ServiceProvider.GetRequiredService<IEmployeeKpiService>();

            try
            {
                // Calculate KPIs for the previous month
                var previousMonth = DateTime.UtcNow.AddMonths(-1);
                var periodStart = new DateOnly(previousMonth.Year, previousMonth.Month, 1);
                var periodEnd = new DateOnly(previousMonth.Year, previousMonth.Month, 
                    DateTime.DaysInMonth(previousMonth.Year, previousMonth.Month));

                var result = await kpiService.RecalculateKpisForPeriodAsync(periodStart, periodEnd);

                if (result.Success)
                {
                    _logger.LogInformation("Monthly KPI calculation completed successfully. " +
                        "Processed: {Total}, Successful: {Successful}, Failed: {Failed}",
                        result.Data.TotalEmployeesProcessed,
                        result.Data.SuccessfulCalculations,
                        result.Data.FailedCalculations);

                    if (result.Data.Errors.Any())
                    {
                        _logger.LogWarning("Some KPI calculations failed: {Errors}", 
                            string.Join("; ", result.Data.Errors));
                    }
                }
                else
                {
                    _logger.LogError("Monthly KPI calculation failed: {Error}", result.Message);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred during monthly KPI calculation");
            }
        }
    }
}
