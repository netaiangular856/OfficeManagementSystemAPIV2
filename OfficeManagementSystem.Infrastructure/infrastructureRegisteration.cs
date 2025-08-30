using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;
using OfficeManagementSystem.Application.Mapping;
using OfficeManagementSystem.Application.Services.implementions;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Infrastructure.Data;
using OfficeManagementSystem.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.FileProviders;
using OfficeManagementSystem.Application.Services.BackgroundServices;

namespace OfficeManagementSystem.Infrastructure
{
    public static class infrastructureRegisteration
    {
        public static IServiceCollection infrastructureConfiguration(this IServiceCollection services, IConfiguration configuration)
        {

            //IGenericRepository
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));


            //services
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IDepartmentService, DepartmentService>();
            services.AddScoped<ITaskService, TaskService>();
            services.AddScoped<ITaskUpdateService, TaskUpdateService>();
            services.AddScoped<ITaskAttachmentService, TaskAttachmentService>();
            
            // Meeting services
            services.AddScoped<IMeetingService, MeetingService>();
            
            // Visit services
            services.AddScoped<IVisitService, VisitService>();
            
            // Document services
            services.AddScoped<IDocumentService, DocumentService>();
            
            // Partner services
            services.AddScoped<IPartnerService, PartnerService>();
            
            // Letter services
            services.AddScoped<ILetterService, LetterService>();
            
            // Employee KPI services
            services.AddScoped<IEmployeeKpiService, EmployeeKpiService>();
            
            // Calendar services
            services.AddScoped<ICalendarService, CalendarService>();
            
            // Register Dashboard Service
            services.AddScoped<IDashboardService, DashboardService>();

            // Background services
            services.AddHostedService<MonthlyKpiCalculationService>();

            //WorkFlowLogs
            services.AddScoped<IWorkFlowLogsService, WorkFlowLogsService>();
            
            // Permission and Role services
            services.AddScoped<IPermissionService, PermissionService>();
            services.AddScoped<IRoleService, RoleService>();





            //IUnitOfWork
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            // Repositories
            services.AddScoped<IPermissionRepository, PermissionRepository>();
            services.AddScoped<IRolePermissionRepository, RolePermissionRepository>();
            services.AddScoped<ISendNotificationService, SendNotificationService>();
            services.AddScoped<INotificationService, NotificationService>();

            services.AddScoped<IImageMangementService, ImageMangementService>();
            services.AddScoped<IAttachmentFileService, AttachmentFileService>();

            //File
            services.AddSingleton<IFileProvider>(
                new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")));

            

            //AutoMapper
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


            //AppDBContext
            services.AddDbContext<AppDbContext>(op =>
            {
                op.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            }
            );

            //JWT
            services.AddIdentity<AppUser, AppRole>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();
            services.AddAuthentication(op =>
            {
                op.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                op.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                op.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                //op.DefaultSignInScheme= JwtBearerDefaults.AuthenticationScheme;
            }).AddCookie(o =>
            {
                o.Cookie.Name = "token";
                o.Events.OnRedirectToLogin = context =>
                {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    return Task.CompletedTask;
                };
            }).AddJwtBearer(op =>
            {
                op.SaveToken = true;
                op.RequireHttpsMetadata = false;
                op.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Token:Secret"])),
                    ValidateIssuer = true,
                    ValidIssuer = configuration["Token:Issure"],
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
                op.Events = new JwtBearerEvents()
                {
                    OnMessageReceived = context =>
                    {
                        context.Token = context.Request.Cookies["token"];
                        return Task.CompletedTask;
                    }
                };
            });

            //Logging
            services.AddLogging(logging =>
            {
                logging.ClearProviders();
                logging.AddConsole();
                logging.AddDebug();
            });


            return services;
        }
    }
}
