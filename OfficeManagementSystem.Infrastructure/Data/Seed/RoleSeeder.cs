using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class RoleSeeder
    {
        public static async Task SeedRoles(IServiceProvider serviceProvider)
        {
            var roleManager = serviceProvider.GetRequiredService<RoleManager<AppRole>>();

            var roles = new List<AppRole>
            {
                new AppRole { Name = "Admin", Description = "System Administrator with full permissions" },
                new AppRole { Name = "Manager", Description = "Department Manager with elevated permissions" },
                new AppRole { Name = "Secretary", Description = "Secretary with limited permissions for scheduling" },
                new AppRole { Name = "Employee", Description = "Regular employee with basic permissions" }
            };

            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role.Name))
                {
                    role.NormalizedName = role.Name.ToUpper();
                    await roleManager.CreateAsync(role);
                }
            }
        }
    }

}
