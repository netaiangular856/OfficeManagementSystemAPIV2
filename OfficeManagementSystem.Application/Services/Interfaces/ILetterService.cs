using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Entity.Letters;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface ILetterService
    {
        // Main Letter operations
        Task<ApiResponse<LetterDto>> CreateAsync(CreateLetterDto createDto, string userId);
        Task<ApiResponse<PaginatedResult<LetterDto>>> GetAllAsync(LetterQueryDto queryDto);
        Task<ApiResponse<LetterDto>> GetByIdAsync(int id);
        Task<ApiResponse<Letter>> GetByIdWithDetailsAsync(int id);
        Task<ApiResponse<LetterDto>> UpdateAsync(int id, UpdateLetterDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);

        // Letter Attachments
        Task<ApiResponse<List<LetterAttachmentDto>>> GetAttachmentsAsync(int letterId);
        Task<ApiResponse<LetterAttachmentDto>> AddAttachmentAsync(int letterId, CreateLetterAttachmentDto attachmentDto, string currentUserId);
        Task<ApiResponse<bool>> RemoveAttachmentAsync(int letterId, int attachmentId);

        // Approval Methods
        Task<ApiResponse<LetterDto>> SubmitForApprovalAsync(int letterId, string userId);
        Task<ApiResponse<LetterDto>> ApproveLetterAsync(int letterId, ApproveLetterDto approveDto, string approverUserId);
        Task<ApiResponse<LetterDto>> RejectLetterAsync(int letterId, RejectLetterDto rejectDto, string rejectorUserId);

        // Email Sending Methods
        Task<ApiResponse<LetterEmailStatusDto>> SendLetterEmailAsync(int letterId, SendLetterEmailDto emailDto, string senderUserId);
        Task<ApiResponse<PaginatedResult<LetterDto>>> GetAllForApprovalAsync(LetterQueryDto queryDto);
    }
}
