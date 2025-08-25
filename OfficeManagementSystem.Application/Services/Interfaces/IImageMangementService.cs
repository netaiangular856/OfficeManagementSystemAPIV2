using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IImageMangementService
    {
        Task<string> SaveFileAsync(IFormFile file, string src);
        void DeleteImage(string src);
    }
}
