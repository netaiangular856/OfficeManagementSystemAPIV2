using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IDocumentService
    {
        // Main Document operations
        Task<ApiResponse<DocumentDto>> CreateAsync(CreateDocumentDto createDto, string userId);
        Task<ApiResponse<PaginatedResult<DocumentDto>>> GetAllAsync(DocumentQueryDto queryDto);
        Task<ApiResponse<DocumentDto>> GetByIdAsync(int id);
        Task<ApiResponse<DocumentDto>> UpdateAsync(int id, UpdateDocumentDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);
        Task<ApiResponse<byte[]>> DownloadAsync(int id);
    }
}
