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

            var permissions = new List<Permission>
            {
                // Admin Controller Permissions
                #region
                new Permission { Name = "admin.permissions.get", DisplayName = "Get Permissions", Description = "View all permissions", Controller = "admin", Action = "permissions.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.permissions.create", DisplayName = "Create Permission", Description = "Create new permission", Controller = "admin", Action = "permissions.create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.permissions.update", DisplayName = "Update Permission", Description = "Update existing permission", Controller = "admin", Action = "permissions.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.permissions.delete", DisplayName = "Delete Permission", Description = "Delete permission", Controller = "admin", Action = "permissions.delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.get", DisplayName = "Get Roles", Description = "View all roles", Controller = "admin", Action = "roles.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.create", DisplayName = "Create Role", Description = "Create new role", Controller = "admin", Action = "roles.create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.update", DisplayName = "Update Role", Description = "Update existing role", Controller = "admin", Action = "roles.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.delete", DisplayName = "Delete Role", Description = "Delete role", Controller = "admin", Action = "roles.delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.permissions.get", DisplayName = "Get Role Permissions", Description = "View role permissions", Controller = "admin", Action = "roles.permissions.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.permissions.assign", DisplayName = "Assign Permissions to Role", Description = "Assign permissions to role", Controller = "admin", Action = "roles.permissions.assign", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "admin.roles.permissions.remove", DisplayName = "Remove Permission from Role", Description = "Remove permission from role", Controller = "admin", Action = "roles.permissions.remove", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion

                // Dashboard Controller Permissions

                #region
                new Permission {
                Name = "dashboard.overview.get",
                DisplayName = "Get System Overview",
                Description = "View system overview",
                Controller = "dashboard",
                Action = "overview.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.tasks.overview.get",
                DisplayName = "Get Tasks Overview",
                Description = "View tasks overview",
                Controller = "dashboard",
                Action = "tasks.overview.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.tasks.trend.get",
                DisplayName = "Get Tasks Trend",
                Description = "View tasks trend",
                Controller = "dashboard",
                Action = "tasks.trend.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.meetings.overview.get",
                DisplayName = "Get Meetings Overview",
                Description = "View meetings overview",
                Controller = "dashboard",
                Action = "meetings.overview.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.letters.overview.get",
                DisplayName = "Get Letters Overview",
                Description = "View letters overview",
                Controller = "dashboard",
                Action = "letters.overview.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.letters.monthly.get",
                DisplayName = "Get Letters Monthly",
                Description = "View monthly letters",
                Controller = "dashboard",
                Action = "letters.monthly.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.employees.kpi-trend.get",
                DisplayName = "Get Employee KPI Trend",
                Description = "View employee KPI trend",
                Controller = "dashboard",
                Action = "employees.kpi-trend.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },

            new Permission {
                Name = "dashboard.employees.leaderboard.get",
                DisplayName = "Get Employee Leaderboard",
                Description = "View employee leaderboard",
                Controller = "dashboard",
                Action = "employees.leaderboard.get",
                IsActive = true,
                CreatedAt = DateTime.UtcNow
            },
                #endregion

                // Calendar Controller Permissions
                #region
                new Permission { Name = "calendar.get", DisplayName = "Get Calendar", Description = "View calendar", Controller = "calendar", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "calendar.events.get", DisplayName = "Get Calendar Events", Description = "View calendar events For User", Controller = "calendar", Action = "events.get", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // WorkFlow Controller Permissions
                #region
                new Permission { Name = "workflow.get", DisplayName = "Get Workflow", Description = "View workflow", Controller = "workflow", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                #endregion
                // Meetings Controller Permissions
                #region
                new Permission {
                    Name = "meetings.create",
                    DisplayName = "Create Meeting",
                    Description = "Create a new meeting",
                    Controller = "meetings",
                    Action = "create",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.getall",
                    DisplayName = "Get All Meetings",
                    Description = "View all meetings with filters",
                    Controller = "meetings",
                    Action = "getall",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.getbyid",
                    DisplayName = "Get Meeting By Id",
                    Description = "View meeting details by id",
                    Controller = "meetings",
                    Action = "getbyid",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.update",
                    DisplayName = "Update Meeting",
                    Description = "Update meeting details",
                    Controller = "meetings",
                    Action = "update",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.updatestatus",
                    DisplayName = "Update Meeting Status",
                    Description = "Update meeting status",
                    Controller = "meetings",
                    Action = "updatestatus",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.delete",
                    DisplayName = "Delete Meeting",
                    Description = "Delete a meeting",
                    Controller = "meetings",
                    Action = "delete",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                // Attachments
                new Permission {
                    Name = "meetings.attachments.get",
                    DisplayName = "Get Meeting Attachments",
                    Description = "View meeting attachments",
                    Controller = "meetings",
                    Action = "attachments.get",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.attachments.add",
                    DisplayName = "Add Meeting Attachment",
                    Description = "Add attachment to a meeting",
                    Controller = "meetings",
                    Action = "attachments.add",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.attachments.remove",
                    DisplayName = "Remove Meeting Attachment",
                    Description = "Remove attachment from a meeting",
                    Controller = "meetings",
                    Action = "attachments.remove",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                // Attendees
                new Permission {
                    Name = "meetings.attendees.get",
                    DisplayName = "Get Meeting Attendees",
                    Description = "View meeting attendees",
                    Controller = "meetings",
                    Action = "attendees.get",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.attendees.add",
                    DisplayName = "Add Meeting Attendee",
                    Description = "Add attendee to a meeting",
                    Controller = "meetings",
                    Action = "attendees.add",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.attendees.update",
                    DisplayName = "Update Meeting Attendee",
                    Description = "Update meeting attendee details",
                    Controller = "meetings",
                    Action = "attendees.update",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.attendees.remove",
                    DisplayName = "Remove Meeting Attendee",
                    Description = "Remove attendee from a meeting",
                    Controller = "meetings",
                    Action = "attendees.remove",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                // Minutes
                new Permission {
                    Name = "meetings.minutes.get",
                    DisplayName = "Get Meeting Minutes",
                    Description = "View meeting minutes",
                    Controller = "meetings",
                    Action = "minutes.get",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.minutes.create",
                    DisplayName = "Create Meeting Minutes",
                    Description = "Create meeting minutes",
                    Controller = "meetings",
                    Action = "minutes.create",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.minutes.update",
                    DisplayName = "Update Meeting Minutes",
                    Description = "Update meeting minutes",
                    Controller = "meetings",
                    Action = "minutes.update",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                // Recommendations
                new Permission {
                    Name = "meetings.recommendations.get",
                    DisplayName = "Get Meeting Recommendations",
                    Description = "View meeting recommendations",
                    Controller = "meetings",
                    Action = "recommendations.get",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.recommendations.add",
                    DisplayName = "Add Meeting Recommendation",
                    Description = "Add recommendation to a meeting",
                    Controller = "meetings",
                    Action = "recommendations.add",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.recommendations.update",
                    DisplayName = "Update Meeting Recommendation",
                    Description = "Update meeting recommendation",
                    Controller = "meetings",
                    Action = "recommendations.update",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "meetings.recommendations.remove",
                    DisplayName = "Remove Meeting Recommendation",
                    Description = "Remove meeting recommendation",
                    Controller = "meetings",
                    Action = "recommendations.remove",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },
                #endregion


                // Employees Controller Permissions
                #region
                new Permission {
                    Name = "employees.getall",
                    DisplayName = "Get All Employees",
                    Description = "View all employees with pagination and search",
                    Controller = "employees",
                    Action = "getall",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.getprofile",
                    DisplayName = "Get Current Employee Profile",
                    Description = "View current logged-in employee profile",
                    Controller = "employees",
                    Action = "getprofile",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.getbyid",
                    DisplayName = "Get Employee By Id",
                    Description = "View employee details by id",
                    Controller = "employees",
                    Action = "getbyid",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.create",
                    DisplayName = "Create Employee",
                    Description = "Create a new employee",
                    Controller = "employees",
                    Action = "create",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.update",
                    DisplayName = "Update Employee",
                    Description = "Update employee details",
                    Controller = "employees",
                    Action = "update",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.delete",
                    DisplayName = "Delete Employee",
                    Description = "Delete employee by id",
                    Controller = "employees",
                    Action = "delete",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.updaterole",
                    DisplayName = "Update Employee Role",
                    Description = "Update role of an employee",
                    Controller = "employees",
                    Action = "updaterole",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.updatestatus",
                    DisplayName = "Update Employee Status",
                    Description = "Enable or disable an employee",
                    Controller = "employees",
                    Action = "updatestatus",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.updateprofile",
                    DisplayName = "Update Current Employee Profile",
                    Description = "Update profile of logged-in employee including image",
                    Controller = "employees",
                    Action = "updateprofile",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                // Employee KPI Endpoints
                new Permission {
                    Name = "employees.kpis.get",
                    DisplayName = "Get Employee KPIs",
                    Description = "View latest employee KPIs",
                    Controller = "employees",
                    Action = "kpis.get",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.kpis.history",
                    DisplayName = "Get Employee KPI History",
                    Description = "View KPI history of employee",
                    Controller = "employees",
                    Action = "kpis.history",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.kpis.summary",
                    DisplayName = "Get Employee KPI Summary",
                    Description = "View KPI summary with trend analysis",
                    Controller = "employees",
                    Action = "kpis.summary",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                new Permission {
                    Name = "employees.kpis.recalculate",
                    DisplayName = "Recalculate Employee KPIs",
                    Description = "Recalculate employee KPIs",
                    Controller = "employees",
                    Action = "kpis.recalculate",
                    IsActive = true,
                    CreatedAt = DateTime.UtcNow
                },

                #endregion
                // Users Controller Permissions
                #region
                new Permission { Name = "users.get", DisplayName = "Get Users", Description = "View all users", Controller = "users", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.get.byid", DisplayName = "Get User by ID", Description = "View specific user", Controller = "users", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.create", DisplayName = "Create User", Description = "Create new user", Controller = "users", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.update", DisplayName = "Update User", Description = "Update existing user", Controller = "users", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.delete", DisplayName = "Delete User", Description = "Delete user (soft delete)", Controller = "users", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.role.update", DisplayName = "Update User Role", Description = "Change user role", Controller = "users", Action = "role.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.status.update", DisplayName = "Update User Status", Description = "Enable/disable user", Controller = "users", Action = "status.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.profile.get", DisplayName = "Get Current User Profile", Description = "View current user profile", Controller = "users", Action = "profile.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "users.profile.update", DisplayName = "Update Current User Profile", Description = "Update current user profile", Controller = "users", Action = "profile.update", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion

                // Departments Controller Permissions
                #region
                new Permission { Name = "departments.get", DisplayName = "Get Departments", Description = "View all departments", Controller = "departments", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.get.byid", DisplayName = "Get Department by ID", Description = "View specific department", Controller = "departments", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.create", DisplayName = "Create Department", Description = "Create new department", Controller = "departments", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.update", DisplayName = "Update Department", Description = "Update existing department", Controller = "departments", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.delete", DisplayName = "Delete Department", Description = "Delete department", Controller = "departments", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.move", DisplayName = "Move Department", Description = "Move department", Controller = "departments", Action = "move", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.tree", DisplayName = "Department Tree", Description = "department Tree", Controller = "departments", Action = "tree", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "departments.assign", DisplayName = "Assign department Manager", Description = "Assign department Manager", Controller = "departments", Action = "assign", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // Letters Controller Permissions
                #region
                new Permission { Name = "letters.get", DisplayName = "Get Letters", Description = "View all letters", Controller = "letters", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.get.byid", DisplayName = "Get Letter by ID", Description = "View specific letter", Controller = "letters", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.create", DisplayName = "Create Letter", Description = "Create new letter", Controller = "letters", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.update", DisplayName = "Update Letter", Description = "Update existing letter", Controller = "letters", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.delete", DisplayName = "Delete Letter", Description = "Delete letter", Controller = "letters", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.attachments.get", DisplayName = "Get Letter Attachments", Description = "View letter attachments", Controller = "letters", Action = "attachments.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.attachments.upload", DisplayName = "Upload Letter Attachment", Description = "Upload letter attachment", Controller = "letters", Action = "attachments.upload", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "letters.attachments.delete", DisplayName = "Delete Letter Attachment", Description = "Delete letter attachment", Controller = "letters", Action = "attachments.delete", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // Partners Controller Permissions
                #region
                new Permission { Name = "partners.get", DisplayName = "Get Partners", Description = "View all partners", Controller = "partners", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.get.byid", DisplayName = "Get Partner by ID", Description = "View specific partner", Controller = "partners", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.create", DisplayName = "Create Partner", Description = "Create new partner", Controller = "partners", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.update", DisplayName = "Update Partner", Description = "Update existing partner", Controller = "partners", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.delete", DisplayName = "Delete Partner", Description = "Delete partner", Controller = "partners", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.contacts.get", DisplayName = "Get Partner Contacts", Description = "View partner contacts", Controller = "partners", Action = "contacts.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.contacts.create", DisplayName = "Create Partner Contact", Description = "Create partner contact", Controller = "partners", Action = "contacts.create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.contacts.update", DisplayName = "Update Partner Contact", Description = "Update partner contact", Controller = "partners", Action = "contacts.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "partners.contacts.delete", DisplayName = "Delete Partner Contact", Description = "Delete partner contact", Controller = "partners", Action = "contacts.delete", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // Documents Controller Permissions
                #region
                new Permission { Name = "documents.get", DisplayName = "Get Documents", Description = "View all documents", Controller = "documents", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "documents.get.byid", DisplayName = "Get Document by ID", Description = "View specific document", Controller = "documents", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "documents.create", DisplayName = "Create Document", Description = "Create new document", Controller = "documents", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "documents.update", DisplayName = "Update Document", Description = "Update existing document", Controller = "documents", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "documents.delete", DisplayName = "Delete Document", Description = "Delete document", Controller = "documents", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // Visits Controller Permissions
                #region
                new Permission { Name = "visits.get", DisplayName = "Get Visits", Description = "View all visits", Controller = "visits", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.get.byid", DisplayName = "Get Visit by ID", Description = "View specific visit", Controller = "visits", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.create", DisplayName = "Create Visit", Description = "Create new visit", Controller = "visits", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.update", DisplayName = "Update Visit", Description = "Update existing visit", Controller = "visits", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.delete", DisplayName = "Delete Visit", Description = "Delete visit", Controller = "visits", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.participants.get", DisplayName = "Get Visit Participants", Description = "View visit participants", Controller = "visits", Action = "participants.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.participants.add", DisplayName = "Add Visit Participant", Description = "Add participant to visit", Controller = "visits", Action = "participants.add", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "visits.participants.remove", DisplayName = "Remove Visit Participant", Description = "Remove participant from visit", Controller = "visits", Action = "participants.remove", IsActive = true, CreatedAt = DateTime.UtcNow },
#endregion
                // Notifications Controller Permissions
                #region
                new Permission { Name = "notifications.get", DisplayName = "Get Notifications", Description = "View all notifications", Controller = "notifications", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.get.byid", DisplayName = "Get Notification by ID", Description = "View specific notification", Controller = "notifications", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.create", DisplayName = "Create Notification", Description = "Create new notification", Controller = "notifications", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.update", DisplayName = "Update Notification", Description = "Update existing notification", Controller = "notifications", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.delete", DisplayName = "Delete Notification", Description = "Delete notification", Controller = "notifications", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.mark.read", DisplayName = "Mark Notification as Read", Description = "Mark notification as read", Controller = "notifications", Action = "mark.read", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "notifications.mark.unread", DisplayName = "Mark Notification as Unread", Description = "Mark notification as unread", Controller = "notifications", Action = "mark.unread", IsActive = true, CreatedAt = DateTime.UtcNow },

#endregion

                
                // Tasks Controller Permissions
                #region
                new Permission { Name = "tasks.get", DisplayName = "Get Tasks", Description = "View all tasks", Controller = "tasks", Action = "get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.get.byid", DisplayName = "Get Task by ID", Description = "View specific task", Controller = "tasks", Action = "get.byid", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.create", DisplayName = "Create Task", Description = "Create new task", Controller = "tasks", Action = "create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.update", DisplayName = "Update Task", Description = "Update existing task", Controller = "tasks", Action = "update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.delete", DisplayName = "Delete Task", Description = "Delete task", Controller = "tasks", Action = "delete", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.assign", DisplayName = "Assign Task", Description = "Assign task to user", Controller = "tasks", Action = "assign", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.status.update", DisplayName = "Update Task Status", Description = "Update task status", Controller = "tasks", Action = "status.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.priority.update", DisplayName = "Update Task Priority", Description = "Update task priority", Controller = "tasks", Action = "priority.update", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.updates.get", DisplayName = "Get Task Updates", Description = "View task updates", Controller = "tasks", Action = "updates.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.updates.create", DisplayName = "Create Task Update", Description = "Create task update", Controller = "tasks", Action = "updates.create", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.attachments.get", DisplayName = "Get Task Attachments", Description = "View task attachments", Controller = "tasks", Action = "attachments.get", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.attachments.upload", DisplayName = "Upload Task Attachment", Description = "Upload task attachment", Controller = "tasks", Action = "attachments.upload", IsActive = true, CreatedAt = DateTime.UtcNow },
                new Permission { Name = "tasks.attachments.delete", DisplayName = "Delete Task Attachment", Description = "Delete task attachment", Controller = "tasks", Action = "attachments.delete", IsActive = true, CreatedAt = DateTime.UtcNow }
#endregion
            };

            await _context.Permissions.AddRangeAsync(permissions);
            await _context.SaveChangesAsync();
        }
    }
}
