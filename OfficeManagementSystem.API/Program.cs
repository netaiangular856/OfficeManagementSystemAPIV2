using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using OfficeManagementSystem.Infrastructure;
using OfficeManagementSystem.Infrastructure.Data;
using OfficeManagementSystem.Infrastructure.Data.Seed;
using System.ComponentModel;
namespace OfficeManagementSystem.API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // ======= Infrastructure Config (DI, DbContext, Identity, etc) =======
            builder.Services.infrastructureConfiguration(builder.Configuration);

            // ======= Controllers =======
            builder.Services.AddControllers();

            // ======= CORS Policy =======
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins", policy =>
                {
                    policy.WithOrigins(
                        "http://localhost:3000",
                        "https://localhost:3000",
                        "http://localhost:4200",
                        "https://localhost:4200")
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                });
            });

            // ======= Swagger =======
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Office Management API",
                    Version = "v1"
                });
            });
            // Add Permission Policies ÞÈá ãÇ ÊÚãá Build
            builder.Services.AddPermissionPolicies(builder.Configuration);
            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(options =>
                {
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "Office Management API V1");
                    options.RoutePrefix = "swagger"; 
                });
            }
            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Office Management API V1");
                options.RoutePrefix = "swagger"; 
            });

            // ======= Middleware =======
            app.UseHttpsRedirection();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors("AllowSpecificOrigins");
            app.UseAuthentication();
            app.UseAuthorization();


            // ======= Map Controllers =======
            app.MapControllers();
            app.MapFallbackToFile("/index.html");

            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var context = services.GetRequiredService<AppDbContext>();

                    await context.Database.MigrateAsync();
                    await PermissionSeeder.SeedAsync(context);
                    await RoleSeeder.SeedRoles(services);

                    await SeedEmail.SeedAsync(services);
                    await DepartmentTreeSeeder.SeedAsync(context);
                }
                catch (Exception ex)
                {
                    // Log the exception if needed
                    Console.WriteLine("Error during seeding: " + ex.Message);
                }
            }
            app.Run();
        }
    }
}
