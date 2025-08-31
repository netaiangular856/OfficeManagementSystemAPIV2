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
                    Id=1,
                    Code = "ADM",
                    NameAr = "رئيس مجلس الاداره",
                    NameEn="Chairman of the Board of Directors",
                    Type=0,
                    Order = 0,
                    ParentId = null,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                 new Department
                {
                     Id=2,
                    Code = "ADM",
                    NameAr = "Internal Investigation Office",
                    NameEn="Chairman of the Board of Directors",
                    Type=0,
                    Order = 1,
                    ParentId = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                  new Department
                {
                    Id=3,
                    Code = "ADM",
                    NameAr = "مجلس الاداره",
                    NameEn="Board of Directors",
                    Type=0,
                    Order = 2,
                    ParentId = 1,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                  new Department
                {
                    Id=4,
                    Code = "ADM",
                    NameAr = "مدير الهيئه",
                    NameEn="Director of the Authority",
                    Type=0,
                    Order = 1,
                    ParentId = 3,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                 new Department
                {
                    Id=5,
                    Code = "ADM",
                    NameAr = "مكتب الاستراتجيه و المستقبل",
                    NameEn="Strategy and Future Office",
                    Type=0,
                    Order = 1,
                    ParentId = 4,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                
                new Department
                {
                    Id=6,
                    Code = "ADM",
                    NameAr = "مكتب المدير",
                    NameEn="Director's Office",
                    Type=0,
                    Order = 3,
                    ParentId = 4,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                 new Department
                {
                    Id=7,
                    Code = "ADM",
                    NameAr = "مكتب الاتصال الحكومي",
                    NameEn="Government Communication Office",
                    Type=0,
                    Order = 4,
                    ParentId = 4,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                    new Department
                {
                    Id=8,
                    Code = "ADM",
                    NameAr = "مكتب الشؤون القانونيه",
                    NameEn="Legal Affairs Office",
                    Type=0,
                    Order = 5,
                    ParentId = 4,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },
                        new Department
                {
                    Id=9,
                    Code = "ADM",
                    NameAr = "مكتب الشؤون القانونيه",
                    NameEn="Legal Affairs Office",
                    Type=0,
                    Order = 5,
                    ParentId = 4,
                    IsActive = true,
                    CreatedAt = new DateTime(2025, 1, 1)
                },

            };
        }
    }
}
