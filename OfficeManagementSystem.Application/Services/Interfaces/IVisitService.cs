using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IVisitService
    {
        // Main Visit operations
        Task<ApiResponse<VisitDto>> CreateAsync(CreateVisitDto createDto, string organizerUserId);
        Task<ApiResponse<PaginatedResult<VisitDto>>> GetAllAsync(VisitQueryDto queryDto);
        Task<ApiResponse<VisitDto>> GetByIdAsync(int id);
        Task<ApiResponse<VisitDto>> UpdateAsync(int id, UpdateVisitDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);

        // Visit Participants
        Task<ApiResponse<List<VisitParticipantDto>>> GetParticipantsAsync(int visitId);
        Task<ApiResponse<VisitParticipantDto>> AddParticipantAsync(int visitId, CreateVisitParticipantDto participantDto);
        Task<ApiResponse<bool>> RemoveParticipantAsync(int visitId, int participantId);
    }
}
