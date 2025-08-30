using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Infrastructure.Data.Seed
{
    public static class DepartmentTreeSeeder
    {
        public static async Task SeeadAsync(AppDbContext context)
        {
            var departments = new List<Department>
            {
                new Department
                {
                    Code = "ADM",
                    NameAr = "رئيس مجلس الاداره",
                    NameEn="Chairman of the Board of Directors",
                    Order = 1,
                    ParentId = null,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
            };
        }
    }
}
