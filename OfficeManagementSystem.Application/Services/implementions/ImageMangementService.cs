using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class ImageMangementService : IImageMangementService
    {
        private readonly IFileProvider _fileProvider;

        public ImageMangementService(IFileProvider fileProvider)
        {
            _fileProvider = fileProvider;
        }
        public async Task<string> SaveFileAsync(IFormFile file, string src)
        {
            var savedImagePath = "";
            var imageDirectory = Path.Combine("wwwroot", "Images", src);
            if (Directory.Exists(imageDirectory) is not true)
            {
                Directory.CreateDirectory(imageDirectory);
            }


            if (file is not null)
            {
                var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
                var extension = Path.GetExtension(file.FileName).ToLowerInvariant();
                if (!allowedExtensions.Contains(extension))
                    throw new InvalidOperationException("File type not allowed.");

                var uniqueName = $"{Guid.NewGuid()}{extension}";
                var fullPath = Path.Combine(imageDirectory, uniqueName);
                var imageSrc = $"Images/{src}/{uniqueName}";

                using var stream = new FileStream(fullPath, FileMode.Create);
                await file.CopyToAsync(stream);

                savedImagePath = imageSrc;


            }
            return savedImagePath;
        }

        public void DeleteImage(string src)
        {
            var info = _fileProvider.GetFileInfo(src);
            var root = info.PhysicalPath;
            if (File.Exists(root))
            {
                File.Delete(root);
            }
        }
    }
}
