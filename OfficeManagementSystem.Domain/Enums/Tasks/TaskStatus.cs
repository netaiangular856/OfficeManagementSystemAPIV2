using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Enums.Tasks
{
    public enum TaskStatus
    {
        New,
        In_Progress,
        Done,
        Stopped,
        Late,
        returned,
        Review
    }
}
