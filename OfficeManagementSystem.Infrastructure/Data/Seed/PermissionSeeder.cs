using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class PermissionSeeder
    {


        public static async Task SeedAsync(AppDbContext _context)
        {
            if (await _context.Permissions.AnyAsync())
            {
                return; // Permissions already seeded
            }
            //await _context.Database.ExecuteSqlRawAsync("DELETE FROM Permissions");

            var permissions = new List<Permission>
            {
                // Admin Controller Permissions
                #region
                new Permission { Name = "admin.index", DisplayName = "Admin Page", Description = "View all permissions", Controller = "admin", Action = "permissions.get", IsActive = true, CreatedAt = DateTime.UtcNow },
               
#endregion

                // Dashboard Controller Permissions

                #region
                new Permission {
                Name = "dashboard.index",
                DisplayName = "Dashboard",
                Description = "View system overview",
                Controller = "dashboard",
                Action = "overview.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

                #endregion

                // Calendar Controller Permissions
                #region
                new Permission { Name = "calendar.index", DisplayName = "Calendar", Description = "View calendar", Controller = "calendar", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "calendar.events.get", DisplayName = "Get Calendar Events", Description = "View calendar events For User", Controller = "calendar", Action = "events.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                #endregion
                // WorkFlow Controller Permissions
                #region
                new Permission { Name = "workFlow.index", DisplayName = "Workflow", Description = "View workflow", Controller = "workflow", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                #endregion
                // Meetings Controller Permissions
                #region
                new Permission {
                    Name = "meeting.index",
                    DisplayName = "Meeting",
                    Description = "meeting Page",
                    Controller = "meetings",
                    Action = "create",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },
                #endregion


                // Employees Controller Permissions
                #region
                new Permission {
                    Name = "employee.index",
                    DisplayName = "Employees Page",
                    Description = "View all employees with pagination and search",
                    Controller = "employees",
                    Action = "getall",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                #endregion
                // Users Controller Permissions
                #region
                new Permission { Name = "user.index", DisplayName = "Users page", Description = "View all users", Controller = "users", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
              
#endregion

                // Departments Controller Permissions
                #region
                new Permission { Name = "department.index", DisplayName = "Departments page", Description = "View all departments", Controller = "departments", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
         
#endregion
                // Letters Controller Permissions
                #region
                new Permission { Name = "letter.index", DisplayName = "Letters page", Description = "View all letters", Controller = "letters", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
        
#endregion
                // Partners Controller Permissions
                #region
                new Permission { Name = "partners.index", DisplayName = "Partners page", Description = "View all partners", Controller = "partners", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                
#endregion
                // Documents Controller Permissions
                #region
                new Permission { Name = "documents.index", DisplayName = "Archive page", Description = "View all documents", Controller = "documents", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                
#endregion
                // Visits Controller Permissions
                #region
                new Permission { Name = "visits.index", DisplayName = "Visits page", Description = "View all visits", Controller = "visits", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                
#endregion   
                // Tasks Controller Permissions
                #region
                new Permission { Name = "task.index", DisplayName = "Tasks page", Description = "View all tasks", Controller = "tasks", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
               
#endregion
                // Tasks Controller Permissions
                #region
                new Permission { Name = "travel.index", DisplayName = "Travels page", Description = "View all travels", Controller = "travels", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
               
#endregion
            };
            
            await _context.Permissions.AddRangeAsync(permissions);
            await _context.SaveChangesAsync();
            
        }
    }
}
