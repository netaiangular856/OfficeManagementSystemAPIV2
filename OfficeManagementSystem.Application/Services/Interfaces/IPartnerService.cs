using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IPartnerService
    {
        // Main Partner operations
        Task<ApiResponse<PartnerDto>> CreateAsync(CreatePartnerDto createDto, string userId);
        Task<ApiResponse<PaginatedResult<PartnerDto>>> GetAllAsync(PartnerQueryDto queryDto);
        Task<ApiResponse<PartnerDto>> GetByIdAsync(int id);
        Task<ApiResponse<PartnerDto>> UpdateAsync(int id, UpdatePartnerDto updateDto);
        Task<ApiResponse<bool>> DeleteAsync(int id);

        // Partner Contacts
        Task<ApiResponse<List<PartnerContactDto>>> GetContactsAsync(int partnerId);
        Task<ApiResponse<PartnerContactDto>> AddContactAsync(int partnerId, CreatePartnerContactDto contactDto);
        Task<ApiResponse<PartnerContactDto>> UpdateContactAsync(int partnerId, int contactId, UpdatePartnerContactDto contactDto);
        Task<ApiResponse<bool>> RemoveContactAsync(int partnerId, int contactId);
    }
}
