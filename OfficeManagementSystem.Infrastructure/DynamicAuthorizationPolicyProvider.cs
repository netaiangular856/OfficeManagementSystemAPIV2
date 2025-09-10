using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using OfficeManagementSystem.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure
{
    public class DynamicAuthorizationPolicyProvider : DefaultAuthorizationPolicyProvider
    {
        private readonly AuthorizationOptions _options;
        private readonly IServiceProvider _serviceProvider;

        public DynamicAuthorizationPolicyProvider(
            IOptions<AuthorizationOptions> options,
            IServiceProvider serviceProvider)
            : base(options)
        {
            _options = options.Value;
            _serviceProvider = serviceProvider;
        }

        public override async Task<AuthorizationPolicy?> GetPolicyAsync(string policyName)
        {
            // لو الـ policy مبنية بالفعل رجعها
            var policy = await base.GetPolicyAsync(policyName);
            if (policy != null) return policy;

            // هنا نجيب الصلاحيات من الداتابيز
            using var scope = _serviceProvider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            var permissionExists = await context.Permissions
                .AnyAsync(p => p.Name == policyName);

            if (permissionExists)
            {
                var newPolicy = new AuthorizationPolicyBuilder()
                    .RequireClaim("permission", policyName)
                    .Build();

                // optional: تقدر تضيفها للـ options بحيث مايتطلبش query كل مرة
                _options.AddPolicy(policyName, newPolicy);

                return newPolicy;
            }

            return null;
        }
    }

}
