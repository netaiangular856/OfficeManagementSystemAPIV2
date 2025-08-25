using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Sharing
{
    public class Params
    {
        public string? Search { get; set; }
        public int pageSize { get; set; } = 10;
        public int PageNumber { get; set; } = 1;
    }
}
