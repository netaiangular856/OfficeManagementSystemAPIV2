using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Domain.Sharing;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IUserService
    {
        Task<ApiResponse<PaginatedResult<UserDto>>> GetUsersAsync(Params parameters);
        Task<ApiResponse<UserDto>> GetUserByIdAsync(string userId);
        Task<ApiResponse<UserDto>> CreateUserAsync(CreateUserRequestDto createUserRequest);
        Task<ApiResponse<UserDto>> UpdateUserAsync(string userId, UpdateUserRequestDto updateUserRequest);
        Task<ApiResponse<bool>> DeleteUserAsync(string userId);
        Task<ApiResponse<bool>> UpdateUserRoleAsync(string userId, UpdateUserRoleRequestDto updateRoleRequest);
        Task<ApiResponse<bool>> UpdateUserStatusAsync(string userId, UpdateUserStatusRequestDto updateStatusRequest);
        Task<ApiResponse<UserDto>> UpdateUserProfileAsync(string userId, UpdateUserProfileRequestDto updateProfileRequest);
        Task<ApiResponse<IEnumerable<UserNameIdDto>>> GetUserNameIdAsync(string? search);
    }
}
