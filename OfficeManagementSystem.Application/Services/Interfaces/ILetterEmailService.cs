using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ILetterEmailService 
    {
        Task<bool> SendLetterEmailAsync(SendLetterEmailDto emailDto, string pdfPath, Letter letter);
    }
}
