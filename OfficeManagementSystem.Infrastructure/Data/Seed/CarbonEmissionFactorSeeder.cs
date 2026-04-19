using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Carbon;
using OfficeManagementSystem.Domain.Enums.Carbon;
using OfficeManagementSystem.Infrastructure.Data;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class CarbonEmissionFactorSeeder
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            if (await context.CarbonEmissionFactors.AnyAsync())
            {
                return; // Factors already seeded
            }

            var factors = new List<CarbonEmissionFactor>
            {
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.DomesticFlight,
                    Name = "Domestic Flight",
                    NameAr = "طيران داخلي",
                    Factor = 0.15m, // كجم CO₂/كم لكل راكب
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للطيران الداخلي",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.InternationalFlight,
                    Name = "International Flight",
                    NameAr = "طيران دولي",
                    Factor = 0.18m, // كجم CO₂/كم لكل راكب
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للطيران الدولي",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.SmallCar,
                    Name = "Small Car",
                    NameAr = "سيارة صغيرة",
                    Factor = 0.12m, // كجم CO₂/كم
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للسيارة الصغيرة",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.SUV,
                    Name = "SUV",
                    NameAr = "SUV",
                    Factor = 0.18m, // كجم CO₂/كم
                    Unit = "kg/km",
                    Description = "معامل الانبعاث لسيارة SUV",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.ElectricCar,
                    Name = "Electric Car",
                    NameAr = "سيارة كهربائية",
                    Factor = 0.05m, // كجم CO₂/كم
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للسيارة الكهربائية",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.Bus,
                    Name = "Bus",
                    NameAr = "حافلة",
                    Factor = 0.08m, // كجم CO₂/كم (تقديري)
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للحافلة",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                },
                new CarbonEmissionFactor
                {
                    TransportType = TransportType.Boat,
                    Name = "Boat",
                    NameAr = "قارب",
                    Factor = 0.20m, // كجم CO₂/كم (تقديري)
                    Unit = "kg/km",
                    Description = "معامل الانبعاث للقارب",
                    IsActive = true,
                    CreatedAt = DateTime.Now
                }
            };

            await context.CarbonEmissionFactors.AddRangeAsync(factors);
            await context.SaveChangesAsync();
        }
    }
}

