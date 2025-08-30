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

            // Assign all permissions to Admin role
            var context = serviceProvider.GetRequiredService<AppDbContext>();
            var adminRole = await roleManager.FindByNameAsync("Admin");
            if (adminRole != null)
            {
                var allPermissions = context.Permissions.Select(p => p.Id).ToList();
                var existingPermissions = context.RolePermissions.Where(rp => rp.RoleId == adminRole.Id).Select(rp => rp.PermissionId).ToList();
                var newPermissions = allPermissions.Except(existingPermissions).ToList();
                if (newPermissions.Any())
                {
                    var rolePermissions = newPermissions.Select(pid => new RolePermission
                    {
                        RoleId = adminRole.Id,
                        PermissionId = pid,
                        AssignedAt = DateTime.Now
                    }).ToList();
                    context.RolePermissions.AddRange(rolePermissions);
                    await context.SaveChangesAsync();
                }
            }
        }
    }

}
