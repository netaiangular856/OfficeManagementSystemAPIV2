using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class AttachmentFileService : IAttachmentFileService
    {
        private readonly IWebHostEnvironment _environment;

        public AttachmentFileService(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public async Task<string> SaveAttachmentAsync(IFormFile file, string folderName)
        {
            if (file == null || file.Length == 0)
                throw new InvalidOperationException("Invalid file");

            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp", ".pdf", ".doc", ".docx" };
            var extension = Path.GetExtension(file.FileName).ToLowerInvariant();

            if (!allowedExtensions.Contains(extension))
                throw new InvalidOperationException("File type not allowed.");

            var uploadsFolder = Path.Combine(_environment.WebRootPath, "Files", folderName);
            if (!Directory.Exists(uploadsFolder))
                Directory.CreateDirectory(uploadsFolder);

            var uniqueFileName = $"{file.FileName}";
            var fullPath = Path.Combine(uploadsFolder, uniqueFileName);
            var relativePath = Path.Combine("Files", folderName, uniqueFileName).Replace("\\", "/");

            using var stream = new FileStream(fullPath, FileMode.Create);
            await file.CopyToAsync(stream);

            return relativePath;
        }

        public void DeleteAttachment(string relativePath)
        {
            var fullPath = Path.Combine(_environment.WebRootPath, relativePath);
            if (File.Exists(fullPath))
                File.Delete(fullPath);
        }
    }
}
