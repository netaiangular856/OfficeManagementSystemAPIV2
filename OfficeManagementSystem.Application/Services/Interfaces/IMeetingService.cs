using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IMeetingService
    {
        // Main Meeting operations
        Task<ApiResponse<MeetingDto>> CreateAsync(CreateMeetingDto createDto, string organizerUserId);
        Task<ApiResponse<PaginatedResult<MeetingDto>>> GetAllAsync(MeetingQueryDto queryDto);
        Task<ApiResponse<MeetingDto>> GetByIdAsync(int id);
        Task<ApiResponse<MeetingDto>> UpdateAsync(int id, UpdateMeetingDto updateDto);
        Task<ApiResponse<bool>> UpdateStatusAsync(int id, UpdateMeetingStatusDto statusDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);

        // Meeting Attachments
        Task<ApiResponse<List<MeetingAttachmentDto>>> GetAttachmentsAsync(int meetingId);
        Task<ApiResponse<MeetingAttachmentDto>> AddAttachmentAsync(int meetingId, CreateMeetingAttachmentDto attachmentDto,string userId);
        Task<ApiResponse<bool>> RemoveAttachmentAsync(int meetingId, int attachmentId);

        // Meeting Attendees
        Task<ApiResponse<List<MeetingAttendeeDto>>> GetAttendeesAsync(int meetingId);
        Task<ApiResponse<MeetingAttendeeDto>> AddAttendeeAsync(int meetingId, CreateMeetingAttendeeDto attendeeDto);
        Task<ApiResponse<MeetingAttendeeDto>> UpdateAttendeeAsync(int meetingId, int attendeeId, UpdateMeetingAttendeeDto attendeeDto);
        Task<ApiResponse<bool>> RemoveAttendeeAsync(int meetingId, int attendeeId);

        // Meeting Minutes
        Task<ApiResponse<MeetingMinutesDto>> GetMinutesAsync(int meetingId);
        Task<ApiResponse<MeetingMinutesDto>> CreateMinutesAsync(int meetingId, CreateMeetingMinutesDto minutesDto);
        Task<ApiResponse<MeetingMinutesDto>> UpdateMinutesAsync(int meetingId, UpdateMeetingMinutesDto minutesDto);

        // Recommendations
        Task<ApiResponse<List<RecommendationDto>>> GetRecommendationsAsync(int meetingId);
        Task<ApiResponse<RecommendationDto>> AddRecommendationAsync(int meetingId, CreateRecommendationDto recommendationDto);
        Task<ApiResponse<RecommendationDto>> UpdateRecommendationAsync(int recommendationId, UpdateRecommendationDto recommendationDto);
        Task<ApiResponse<bool>> RemoveRecommendationAsync(int recommendationId);
    }
}
