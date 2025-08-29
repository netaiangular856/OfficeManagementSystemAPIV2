using OfficeManagementSystem.Domain.Entity.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Entity
{
    public class Employee:AppUser
    {
        public string JobTitle { get; set; } = null!;
        public string? NationalId { get; set; }

        public DateTime? HireDate { get; set; }

        public string? ManagerId { get; set; }
        public Employee? Manager { get; set; }
        public ICollection<Employee> Subordinates { get; set; } = new List<Employee>();
        public ICollection<EmployeeKPI> KPIs { get; set; } = new List<EmployeeKPI>();
    }
}
