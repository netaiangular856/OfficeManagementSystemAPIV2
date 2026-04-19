using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using OfficeManagementSystem.Infrastructure;
using OfficeManagementSystem.Infrastructure.Data;
using OfficeManagementSystem.Infrastructure.Data.Seed;
using System.ComponentModel;
using DinkToPdf;
using DinkToPdf.Contracts;
using Microsoft.Extensions.Logging;
namespace OfficeManagementSystem.API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            //إعداد مسار مكتبة wkhtmltox بناءً على بنية النظام
            var wkhtmltoxBasePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "wkhtmltox");
            if (Directory.Exists(wkhtmltoxBasePath))
            {
                // تحديد بنية النظام (x86 أو x64)
                var architecture = Environment.Is64BitProcess ? "x64" : "x86";
                var architecturePath = Path.Combine(wkhtmltoxBasePath, architecture);
                
                // البحث عن الملف في المجلد المناسب للبنية
                var dllPath = Path.Combine(architecturePath, "libwkhtmltox.dll");
                
                // إذا لم يوجد في المجلد المحدد، جرب البحث في المجلد الآخر كبديل
                if (!File.Exists(dllPath))
                {
                    var alternativeArchitecture = architecture == "x64" ? "x86" : "x64";
                    var alternativePath = Path.Combine(wkhtmltoxBasePath, alternativeArchitecture, "libwkhtmltox.dll");
                    
                    if (File.Exists(alternativePath))
                    {
                        architecturePath = Path.Combine(wkhtmltoxBasePath, alternativeArchitecture);
                        dllPath = alternativePath;
                        Console.WriteLine($"Warning: Using {alternativeArchitecture} library instead of {architecture}");
                    }
                }
                
                if (File.Exists(dllPath))
                {
                    // إضافة المسار إلى PATH البيئة
                    var currentPath = Environment.GetEnvironmentVariable("PATH") ?? "";
                    if (!currentPath.Contains(architecturePath))
                    {
                        Environment.SetEnvironmentVariable("PATH", $"{architecturePath};{currentPath}");
                        Console.WriteLine($"Added wkhtmltox path to PATH: {architecturePath}");
                    }
                }
                else
                {
                    Console.WriteLine($"Warning: libwkhtmltox.dll not found. Checked paths:\n- {dllPath}");
                }
            }

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
            // Add Permission Policies Build
            //builder.Services.AddPermissionPolicies(builder.Configuration);
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
                var logger = services.GetRequiredService<ILogger<Program>>();
                try
                {
                    var context = services.GetRequiredService<AppDbContext>();

                    //await context.Database.MigrateAsync();
                    await PermissionSeeder.SeedAsync(context);
                    await RoleSeeder.SeedRoles(services);

                    await SeedEmail.SeedAsync(services);
                    await DepartmentTreeSeeder.SeedAsync(context);
                    await CarbonEmissionFactorSeeder.SeedAsync(context);
                    logger.LogInformation("Database seeding finished successfully.");
                }
                catch (Exception ex)
                {
                    logger.LogError(ex, "An error occurred while initializing the database and seeding initial data");

                }
            }
            app.Run();
        }
    }
}
