using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class EmployeeSeeder
    {
        public static async Task SeedRoles(IServiceProvider serviceProvider, AppDbContext context)
        {
            if (await context.Employees.AnyAsync()) return;
            var roleManager = serviceProvider.GetRequiredService<RoleManager<AppRole>>();

            var employees = new List<Employee>
            {
                new Employee{Id=Guid.NewGuid().ToString(),FirstName="سعادة الأستاذة / أصيلة عبدالله",LastName="المعلا الهاشمي",DepartmentId=5,IsActive=true,JobTitle="مدير الهيئة ",NationalId="12633" },
                new Employee{Id=Guid.NewGuid().ToString(),FirstName="سعادة الأستاذة / أصيلة عبدالله",LastName="المعلا الهاشمي",DepartmentId=5,IsActive=true,JobTitle="مدير الهيئة ",NationalId="12633" },
            };

            using var transaction = await context.Database.BeginTransactionAsync();
            await context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT Employees ON");
            await context.Employees.AddRangeAsync(employees);
            await context.SaveChangesAsync();
            await context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT Employees OFF");

            await transaction.CommitAsync();

        }
    }
}
