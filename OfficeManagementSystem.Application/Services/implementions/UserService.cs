using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Domain.Sharing;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class UserService : IUserService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<UserService> _logger;
        private readonly IImageMangementService _imageService;
        private readonly IConfiguration _configuration;
        private readonly IEmailService emailService;

        public UserService(
            UserManager<AppUser> userManager,
            RoleManager<AppRole> roleManager,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            ILogger<UserService> logger,
            IImageMangementService imageService,
            IConfiguration configuration,
            IEmailService emailService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
            _imageService = imageService;
            _configuration = configuration;
            this.emailService = emailService;
        }

        public async Task<ApiResponse<PaginatedResult<UserDto>>> GetUsersAsync(Params parameters)
        {
            try
            {
                var query = _userManager.Users
                    .Include(u => u.Department)
                    .Where(u => string.IsNullOrEmpty(parameters.Search) ||
                                u.FirstName.Contains(parameters.Search) ||
                                u.LastName.Contains(parameters.Search) ||
                                u.Email.Contains(parameters.Search))
                    .OrderByDescending(u => u.CreatedAt)
                    .AsQueryable();

                var totalCount = await query.CountAsync();

                var users = await query
                    .Skip((parameters.PageNumber - 1) * parameters.pageSize)
                    .Take(parameters.pageSize)
                    .ToListAsync();

                var userDtos = _mapper.Map<List<UserDto>>(users);

                var paginatedResult = new PaginatedResult<UserDto>
                {
                    TotalCount = totalCount,
                    Page = parameters.PageNumber,
                    PageSize = parameters.pageSize,
                    Items = userDtos
                };

                return ApiResponse<PaginatedResult<UserDto>>.SuccessResponse(paginatedResult);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting users");
                return ApiResponse<PaginatedResult<UserDto>>.ErrorResponse("An error occurred while retrieving users");
            }
        }


        public async Task<ApiResponse<UserDto>> GetUserByIdAsync(string userId)
        {
            try
            {
                var user = await _userManager.Users
                    .Include(u => u.Department)
                    .FirstOrDefaultAsync(u => u.Id == userId);

                if (user == null)
                {
                    return ApiResponse<UserDto>.ErrorResponse("User not found");
                }

                var userDto = _mapper.Map<UserDto>(user);
                userDto.Roles = await GetUserRolesAsync(user);

                return ApiResponse<UserDto>.SuccessResponse(userDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting user with ID: {UserId}", userId);
                return ApiResponse<UserDto>.ErrorResponse("An error occurred while retrieving the user");
            }
        }

        public async Task<ApiResponse<UserDto>> CreateUserAsync(CreateUserRequestDto createUserRequest)
        {
            try
            {
                // Check if user already exists
                var existingUser = await _userManager.FindByEmailAsync(createUserRequest.Email);
                if (existingUser != null)
                {
                    return ApiResponse<UserDto>.ErrorResponse("User with this email already exists");
                }

                // Check if role exists
                if (!await _roleManager.RoleExistsAsync(createUserRequest.Role))
                {
                    return ApiResponse<UserDto>.ErrorResponse($"Role '{createUserRequest.Role}' does not exist");
                }

                // Create user
                var user = _mapper.Map<AppUser>(createUserRequest);
                user.IsActive = true;
                user.CreatedAt = DateTime.UtcNow;

                var result = await _userManager.CreateAsync(user, createUserRequest.Password);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<UserDto>.ErrorResponse($"Failed to create user: {errors}");
                }

                // Assign role
                var roleResult = await _userManager.AddToRoleAsync(user, createUserRequest.Role);
                if (!roleResult.Succeeded)
                {
                    // If role assignment fails, delete the user
                    await _userManager.DeleteAsync(user);
                    var errors = string.Join(", ", roleResult.Errors.Select(e => e.Description));
                    return ApiResponse<UserDto>.ErrorResponse($"Failed to assign role: {errors}");
                }

                // Get the created user with roles
                var createdUser = await _userManager.Users
                    .Include(u => u.Department)
                    .FirstOrDefaultAsync(u => u.Id == user.Id);


                var emailBody = $@"
                <html>
                  <body style='font-family: Arial, sans-serif;'>
                    <h2>Welcome to Our System</h2>
                    <p>Dear {user.FirstName} {user.LastName},</p>
                    <p>Your account has been created successfully. Below are your login credentials:</p>

                    <p><b>Email:</b> {user.Email}</p>
                    <p><b>Password:</b> {createUserRequest.Password}</p>

                    <p style='color: red;'><b>For security reasons, please change your password immediately after logging in.</b></p>

                    <p>You can login here: <a href='{_configuration["AppSettings:LoginUrl"]}'>Login Page</a></p>

                    <br/>
                    <p>Best Regards,<br/>System Admin</p>
                  </body>
                </html>";

                var emaildto = new EmailDTO(
                user.Email,
                _configuration["EmailSetting:From"],
                "Your Account Details",
                emailBody
                );

                await emailService.SendEmail(emaildto);

                var userDto = _mapper.Map<UserDto>(createdUser);
                userDto.Roles = await GetUserRolesAsync(createdUser);

                _logger.LogInformation("User created successfully: {Email}", createUserRequest.Email);
                return ApiResponse<UserDto>.SuccessResponse(userDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while creating user: {Email}", createUserRequest.Email);
                return ApiResponse<UserDto>.ErrorResponse("An error occurred while creating the user");
            }
        }

        public async Task<ApiResponse<UserDto>> UpdateUserAsync(string userId, UpdateUserRequestDto updateUserRequest)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<UserDto>.ErrorResponse("User not found");
                }

                // Update user properties
                _mapper.Map(updateUserRequest, user);
                user.UpdatedAt = DateTime.UtcNow;

                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<UserDto>.ErrorResponse($"Failed to update user: {errors}");
                }

                // Get updated user with roles
                var updatedUser = await _userManager.Users
                    .Include(u => u.Department)
                    .FirstOrDefaultAsync(u => u.Id == userId);

                var userDto = _mapper.Map<UserDto>(updatedUser);
                userDto.Roles = await GetUserRolesAsync(updatedUser);

                _logger.LogInformation("User updated successfully: {UserId}", userId);
                return ApiResponse<UserDto>.SuccessResponse(userDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user: {UserId}", userId);
                return ApiResponse<UserDto>.ErrorResponse("An error occurred while updating the user");
            }
        }

        public async Task<ApiResponse<bool>> DeleteUserAsync(string userId)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<bool>.ErrorResponse("User not found");
                }

                // Hard delete - remove user completely
                var result = await _userManager.DeleteAsync(user);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to delete user: {errors}");
                }

                _logger.LogInformation("User deleted successfully: {UserId}", userId);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while deleting user: {UserId}", userId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while deleting the user");
            }
        }


        public async Task<ApiResponse<bool>> UpdateUserRoleAsync(string userId, UpdateUserRoleRequestDto updateRoleRequest)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<bool>.ErrorResponse("User not found");
                }

                // Check if role exists
                if (!await _roleManager.RoleExistsAsync(updateRoleRequest.Role))
                {
                    return ApiResponse<bool>.ErrorResponse($"Role '{updateRoleRequest.Role}' does not exist");
                }

                // Get current roles
                var currentRoles = await _userManager.GetRolesAsync(user);

                // Remove current roles
                if (currentRoles.Any())
                {
                    var removeResult = await _userManager.RemoveFromRolesAsync(user, currentRoles);
                    if (!removeResult.Succeeded)
                    {
                        var errors = string.Join(", ", removeResult.Errors.Select(e => e.Description));
                        return ApiResponse<bool>.ErrorResponse($"Failed to remove current roles: {errors}");
                    }
                }

                // Add new role
                var addResult = await _userManager.AddToRoleAsync(user, updateRoleRequest.Role);
                if (!addResult.Succeeded)
                {
                    var errors = string.Join(", ", addResult.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to assign new role: {errors}");
                }

                _logger.LogInformation("User role updated successfully: {UserId} -> {Role}", userId, updateRoleRequest.Role);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user role: {UserId}", userId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while updating the user role");
            }
        }

        public async Task<ApiResponse<bool>> UpdateUserStatusAsync(string userId, UpdateUserStatusRequestDto updateStatusRequest)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<bool>.ErrorResponse("User not found");
                }

                user.IsActive = updateStatusRequest.IsActive;
                user.UpdatedAt = DateTime.UtcNow;

                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to update user status: {errors}");
                }

                _logger.LogInformation("User status updated successfully: {UserId} -> {IsActive}", userId, updateStatusRequest.IsActive);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user status: {UserId}", userId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while updating the user status");
            }
        }

        public async Task<ApiResponse<UserDto>> UpdateUserProfileAsync(string userId, UpdateUserProfileRequestDto updateProfileRequest)
        {
            try
            {
                var user = await _userManager.Users
                    .Include(u => u.Department)
                    .FirstOrDefaultAsync(u => u.Id == userId);

                if (user == null)
                {
                    return ApiResponse<UserDto>.ErrorResponse("User not found");
                }

                // Update user properties
                if (!string.IsNullOrWhiteSpace(updateProfileRequest.FirstName))
                    user.FirstName = updateProfileRequest.FirstName;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.LastName))
                    user.LastName = updateProfileRequest.LastName;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.PhoneNumber))
                    user.PhoneNumber = updateProfileRequest.PhoneNumber;

                user.UpdatedAt = DateTime.UtcNow;

                // Handle image update
                if (updateProfileRequest.NewImage != null)
                {
                    // Delete old image if exists
                    if (!string.IsNullOrEmpty(user.ImageUrl))
                    {
                        _imageService.DeleteImage(user.ImageUrl);
                    }

                    // Save new image
                    var newImagePath = await _imageService.SaveFileAsync(updateProfileRequest.NewImage, "users");
                    user.ImageUrl = newImagePath;
                }

                var result = await _userManager.UpdateAsync(user);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<UserDto>.ErrorResponse($"Failed to update user profile: {errors}");
                }

                // Get updated user with roles
                var updatedUser = await _userManager.Users
                    .Include(u => u.Department)
                    .FirstOrDefaultAsync(u => u.Id == userId);

                var userDto = _mapper.Map<UserDto>(updatedUser);
                userDto.Roles = await GetUserRolesAsync(updatedUser);

                _logger.LogInformation("User profile updated successfully: {UserId}", userId);
                return ApiResponse<UserDto>.SuccessResponse(userDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user profile: {UserId}", userId);
                return ApiResponse<UserDto>.ErrorResponse("An error occurred while updating the user profile");
            }
        }

        private async Task<List<string>> GetUserRolesAsync(AppUser user)
        {
            try
            {
                var roles = await _userManager.GetRolesAsync(user);
                return roles.ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting roles for user: {UserId}", user.Id);
                return new List<string>();
            }
        }
    }
}
