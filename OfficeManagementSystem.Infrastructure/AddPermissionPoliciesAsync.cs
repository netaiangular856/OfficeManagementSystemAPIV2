using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure
{
    public static class AuthorizationPoliciesExtension
    {
        public static void AddPermissionPolicies(this IServiceCollection services, IConfiguration configuration)
        {
            // نجيب الكونكشن من الـ configuration
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));

            using var context = new AppDbContext(optionsBuilder.Options);

            var permissions = context.Permissions
                .Select(p => p.Name)
                .ToList();

            services.AddAuthorization(options =>
            {
                foreach (var permission in permissions)
                {
                    options.AddPolicy(permission, policy =>
                        policy.RequireClaim("permission", permission));
                }
            });
        }
    }


}
