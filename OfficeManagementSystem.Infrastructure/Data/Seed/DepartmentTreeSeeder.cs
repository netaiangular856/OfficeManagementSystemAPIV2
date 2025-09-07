using Microsoft.EntityFrameworkCore;
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
        public static async Task SeedAsync(AppDbContext context)
        {
            if (await context.Departments.AnyAsync()) return;
            //await context.Database.ExecuteSqlRawAsync("DELETE FROM Departments");
            //await context.Database.ExecuteSqlRawAsync("DBCC CHECKIDENT ('Departments', RESEED, 0)");


            var created = new DateTime(2025, 1, 1);

            var departments = new List<Department>
        {
            // المستوى الأعلى
            new Department { Id=1, Code="CHA", NameAr="رئيس مجلس الإدارة", NameEn="Chairman of the Board of Directors", Type=0, Order=0, ParentId=null, IsActive=true, CreatedAt=created },

            // يتبع الرئيس
            new Department { Id=2, Code="AUD", NameAr="مكتب التدقيق الداخلي", NameEn="Internal Audit Office", Type=0, Order=0, ParentId=1, IsActive=true, CreatedAt=created },
            new Department { Id=3, Code="BDR", NameAr="مجلس الإدارة", NameEn="Board of Directors", Type=0, Order=1, ParentId=1, IsActive=true, CreatedAt=created },

            // مدير الهيئة تحت مجلس الإدارة
            new Department { Id=4, Code="DIR", NameAr="مدير الهيئة", NameEn="Director of the Authority", Type=0, Order=0, ParentId=3, IsActive=true, CreatedAt=created },

            // مكاتب المدير
            new Department { Id=5,  Code="DOF", NameAr="مكتب المدير", NameEn="Director's Office", Type=0, Order=0, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=6,  Code="SFO", NameAr="مكتب الاستراتيجية والمستقبل", NameEn="Strategy and Future Office", Type=0, Order=1, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=7,  Code="GCO", NameAr="مكتب الاتصال الحكومي", NameEn="Government Communication Office", Type=0, Order=2, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=8,  Code="LAO", NameAr="مكتب الشؤون القانونية", NameEn="Legal Affairs Office", Type=0, Order=3, ParentId=4, IsActive=true, CreatedAt=created },

            // وحدات مكتب المدير
            new Department { Id=9,  Code="FCU", NameAr="وحدة المتابعة والتنسيق", NameEn="Follow-up & Coordination Unit", Type=0, Order=0, ParentId=5, IsActive=true, CreatedAt=created },
            new Department { Id=10, Code="CSU", NameAr="وحدة مساعدة المتعاملين", NameEn="Customer Support Unit", Type=0, Order=1, ParentId=5, IsActive=true, CreatedAt=created },

            // وحدات مكتب الشؤون القانونية
            new Department { Id=11, Code="CLU", NameAr="وحدة العقود والامتثال القانوني", NameEn="Contracts & Legal Compliance Unit", Type=0, Order=0, ParentId=8, IsActive=true, CreatedAt=created },
            new Department { Id=12, Code="DLU", NameAr="وحدة المنازعات والاستشارات القانونية", NameEn="Disputes & Legal Advisory Unit", Type=0, Order=1, ParentId=8, IsActive=true, CreatedAt=created },

            // وحدات مكتب الاستراتيجية والمستقبل
            new Department { Id=13, Code="SPU", NameAr="وحدة التخطيط الاستراتيجي وإدارة الأداء", NameEn="Strategic Planning & Performance Unit", Type=0, Order=0, ParentId=6, IsActive=true, CreatedAt=created },
            new Department { Id=14, Code="IFU", NameAr="وحدة التمويل المؤسسي", NameEn="Institutional Funding Unit", Type=0, Order=1, ParentId=6, IsActive=true, CreatedAt=created },
            new Department { Id=15, Code="INU", NameAr="وحدة الابتكار", NameEn="Innovation Unit", Type=0, Order=2, ParentId=6, IsActive=true, CreatedAt=created },
            new Department { Id=16, Code="CCU", NameAr="وحدة الاتصال المؤسسي والشراكات", NameEn="Corporate Communications & Partnerships Unit", Type=0, Order=0, ParentId=7, IsActive=true, CreatedAt=created },
            new Department { Id=17, Code="DMU", NameAr="وحدة الإعلام الرقمي", NameEn="Digital Media Unit", Type=0, Order=1, ParentId=7, IsActive=true, CreatedAt=created },

            // الإدارات الرئيسية
            new Department { Id=18, Code="SSD", NameAr="إدارة الخدمات المساندة", NameEn="Support Services Department", Type=0, Order=0, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=19, Code="EQD", NameAr="إدارة الجودة البيئية", NameEn="Environmental Quality Department", Type=0, Order=1, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=20, Code="BND", NameAr="إدارة التنوع البيولوجي والموارد الطبيعية", NameEn="Biodiversity & Natural Resources Department", Type=0, Order=2, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=21, Code="IKD", NameAr="إدارة المعلومات والمعرفة", NameEn="Information & Knowledge Department", Type=0, Order=3, ParentId=4, IsActive=true, CreatedAt=created },
            new Department { Id=22, Code="ERD", NameAr="إدارة البحوث والنشريات البيئية", NameEn="Environmental Research & Publications Department", Type=0, Order=4, ParentId=4, IsActive=true, CreatedAt=created },

            // أقسام الخدمات المساندة
            new Department { Id=23, Code="HR",  NameAr="قسم الموارد البشرية", NameEn="Human Resources Section", Type=0, Order=0, ParentId=18, IsActive=true, CreatedAt=created },
            new Department { Id=24, Code="FIN", NameAr="قسم الشؤون المالية", NameEn="Finance Section", Type=0, Order=1, ParentId=18, IsActive=true, CreatedAt=created },
            new Department { Id=25, Code="LOG", NameAr="قسم الدعم اللوجستي", NameEn="Logistics Support Section", Type=0, Order=2, ParentId=18, IsActive=true, CreatedAt=created },
            new Department { Id=26, Code="DIG", NameAr="قسم التحول الرقمي", NameEn="Digital Transformation Section", Type=0, Order=3, ParentId=18, IsActive=true, CreatedAt=created },

            // أقسام الجودة البيئية
            new Department { Id=27, Code="LIC", NameAr="قسم التراخيص والتقييم البيئي", NameEn="Environmental Licensing & EIA Section", Type=0, Order=0, ParentId=19, IsActive=true, CreatedAt=created },
            new Department { Id=28, Code="INS", NameAr="قسم التفتيش والامتثال البيئي", NameEn="Environmental Inspection & Compliance Section", Type=0, Order=1, ParentId=19, IsActive=true, CreatedAt=created },
            new Department { Id=29, Code="WAC", NameAr="قسم النفايات والمواد الكيميائية", NameEn="Waste & Chemicals Section", Type=0, Order=2, ParentId=19, IsActive=true, CreatedAt=created },
            new Department { Id=30, Code="AIR", NameAr="قسم جودة الهواء", NameEn="Air Quality Section", Type=0, Order=3, ParentId=19, IsActive=true, CreatedAt=created },

            // أقسام التنوع البيولوجي
            new Department { Id=31, Code="TER", NameAr="قسم التنوع البيولوجي البري والمحميات", NameEn="Terrestrial Biodiversity Section", Type=0, Order=0, ParentId=20, IsActive=true, CreatedAt=created },
            new Department { Id=32, Code="MAR", NameAr="قسم التنوع البيولوجي البحري والمحميات", NameEn="Marine & Coastal Biodiversity Section", Type=0, Order=1, ParentId=20, IsActive=true, CreatedAt=created },
            new Department { Id=33, Code="WRS", NameAr="قسم الموارد المائية", NameEn="Water Resources Section", Type=0, Order=2, ParentId=20, IsActive=true, CreatedAt=created },

            // أقسام المعلومات والمعرفة
            new Department { Id=34, Code="DAT", NameAr="قسم إدارة البيانات والمعلومات البيئية", NameEn="Environmental Data & Information Section", Type=0, Order=0, ParentId=21, IsActive=true, CreatedAt=created },
            new Department { Id=35, Code="REP", NameAr="قسم التحليل والتقارير البيئية", NameEn="Environmental Analysis & Reporting Section", Type=0, Order=1, ParentId=21, IsActive=true, CreatedAt=created },
            new Department { Id=36, Code="EDU", NameAr="قسم التوعية والتثقيف البيئي", NameEn="Environmental Awareness & Education Section", Type=0, Order=2, ParentId=21, IsActive=true, CreatedAt=created },

            // أقسام البحوث والنشريات
            new Department { Id=37, Code="RES", NameAr="قسم البحوث والدراسات البيئية", NameEn="Environmental Research & Studies Section", Type=0, Order=0, ParentId=22, IsActive=true, CreatedAt=created },
            new Department { Id=38, Code="LEG", NameAr="قسم التشريعات والسياسات البيئية", NameEn="Environmental Legislation & Policies Section", Type=0, Order=1, ParentId=22, IsActive=true, CreatedAt=created },
        };

            using var transaction = await context.Database.BeginTransactionAsync();
            await context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT Departments ON");
            await context.Departments.AddRangeAsync(departments);
            await context.SaveChangesAsync();
            await context.Database.ExecuteSqlRawAsync("SET IDENTITY_INSERT Departments OFF");

            await transaction.CommitAsync();
        }
    }


}
