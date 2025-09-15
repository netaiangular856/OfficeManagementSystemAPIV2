using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ILetterPdfService
    {
        Task<string> GenerateLetterPdfAsync(Letter letter);
    }
}
