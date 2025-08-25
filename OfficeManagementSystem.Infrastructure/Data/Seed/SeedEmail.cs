using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class SeedEmail
    {
        public static async Task SeedAsync(IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<AppUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<AppRole>>();

            string adminEmail = "admin@admin.com";
            string adminPassword = "Admin@Admin123";

            // 2. Ensure admin user exists
            var adminUser = await userManager.FindByEmailAsync(adminEmail);
            if (adminUser == null)
            {
                var user = new AppUser
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    FirstName = "System",
                    LastName = "Admin",
                    EmailConfirmed = true,
                };

                var result = await userManager.CreateAsync(user, adminPassword);
                if (result.Succeeded)
                {
                    if (await roleManager.RoleExistsAsync("Admin"))
                        await userManager.AddToRoleAsync(user, "Admin");

                }
                else
                {
                    throw new Exception("Failed to create admin user: " + string.Join(", ", result.Errors.Select(e => e.Description)));
                }
            }
        }
    }
}
