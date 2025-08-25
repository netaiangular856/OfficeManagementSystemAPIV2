using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Interfaces.Repositories
{
    public interface IUnitOfWork:IDisposable
    {
        IDepartmentRepository DepartmentRepository { get; }
        ITaskRepository TaskRepository { get; }
        ITaskUpdateRepository TaskUpdateRepository { get; }
        ITaskAttachmentRepository TaskAttachmentRepository { get; }
        Task<int> SaveAsync();
    }
}
