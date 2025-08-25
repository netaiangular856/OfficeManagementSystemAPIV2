using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IAttachmentFileService
    {
        Task<string> SaveAttachmentAsync(IFormFile file, string folderName);
        void DeleteAttachment(string relativePath); // Optional
    }
}
