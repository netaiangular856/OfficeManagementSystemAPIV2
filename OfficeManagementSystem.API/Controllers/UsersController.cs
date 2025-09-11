using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Sharing;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UsersController> _logger;

        public UsersController(IUserService userService, ILogger<UsersController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        /// <summary>
        /// Get all users with pagination and search
        /// </summary>
        /// <param name="search">Search term for first name, last name, or email</param>
        /// <param name="page">Page number (default: 1)</param>
        /// <param name="pageSize">Page size (default: 10)</param>
        /// <returns>Paginated list of users</returns>
        [HttpGet]
        [ProducesResponseType(typeof(ApiResponse<PaginatedResult<UserDto>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> GetUsers(
            [FromQuery] string? search,
            [FromQuery] int page = 1,
            [FromQuery] int pageSize = 10)
        {
            try
            {
                var parameters = new Params
                {
                    Search = search,
                    PageNumber = page,
                    pageSize = pageSize
                };

                var result = await _userService.GetUsersAsync(parameters);

                if (!result.Success)
                {
                    _logger.LogWarning("Failed to retrieve users. Error: {Error}", result.Message);
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving users");
                return StatusCode(500, "Internal server error occurred while retrieving users");
            }
        }

        /// <summary>
        /// Get current user profile
        /// </summary>
        /// <returns>Current user details</returns>
        [HttpGet("profile")]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> GetCurrentUserProfile()
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("User ID not found in token");
                }

                var result = await _userService.GetUserByIdAsync(userId);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to retrieve user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving current user profile");
                return StatusCode(500, "Internal server error occurred while retrieving user profile");
            }
        }

        /// <summary>
        /// Get user by ID
        /// </summary>
        /// <param name="userId">User ID</param>
        /// <returns>User details</returns>
        [HttpGet("{userId}")]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> GetUserById(string userId)
        {
            try
            {
                var result = await _userService.GetUserByIdAsync(userId);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to retrieve user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving user: {UserId}", userId);
                return StatusCode(500, "Internal server error occurred while retrieving user");
            }
        }

        /// <summary>
        /// Create a new user
        /// </summary>
        /// <param name="createUserRequest">User creation data</param>
        /// <returns>Created user details</returns>
        [HttpPost]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequestDto createUserRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _userService.CreateUserAsync(createUserRequest);

                if (!result.Success)
                {
                    _logger.LogWarning("Failed to create user {Email}. Error: {Error}", 
                        createUserRequest.Email, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User created successfully: {Email}", createUserRequest.Email);
                return CreatedAtAction(nameof(GetUserById), new { userId = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while creating user: {Email}", createUserRequest.Email);
                return StatusCode(500, "Internal server error occurred while creating user");
            }
        }

        /// <summary>
        /// Update user details
        /// </summary>
        /// <param name="userId">User ID</param>
        /// <param name="updateUserRequest">Updated user data</param>
        /// <returns>Updated user details</returns>
        [HttpPut("{userId}")]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> UpdateUser(string userId, [FromBody] UpdateUserRequestDto updateUserRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _userService.UpdateUserAsync(userId, updateUserRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User updated successfully: {UserId}", userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user: {UserId}", userId);
                return StatusCode(500, "Internal server error occurred while updating user");
            }
        }

        /// <summary>
        /// Delete user (logical deletion - sets IsActive to false)
        /// </summary>
        /// <param name="userId">User ID</param>
        /// <returns>Success status</returns>
        [HttpDelete("{userId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> DeleteUser(string userId)
        {
            try
            {
                var result = await _userService.DeleteUserAsync(userId);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to delete user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User deleted successfully: {UserId}", userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while deleting user: {UserId}", userId);
                return StatusCode(500, "Internal server error occurred while deleting user");
            }
        }

        /// <summary>
        /// Update user role
        /// </summary>
        /// <param name="userId">User ID</param>
        /// <param name="updateRoleRequest">New role data</param>
        /// <returns>Success status</returns>
        [HttpPut("{userId}/role")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> UpdateUserRole(string userId, [FromBody] UpdateUserRoleRequestDto updateRoleRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _userService.UpdateUserRoleAsync(userId, updateRoleRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update role for user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User role updated successfully: {UserId} -> {Role}", userId, updateRoleRequest.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user role: {UserId}", userId);
                return StatusCode(500, "Internal server error occurred while updating user role");
            }
        }

        /// <summary>
        /// Update user status (enable/disable)
        /// </summary>
        /// <param name="userId">User ID</param>
        /// <param name="updateStatusRequest">Status update data</param>
        /// <returns>Success status</returns>
        [HttpPatch("{userId}/status")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> UpdateUserStatus(string userId, [FromBody] UpdateUserStatusRequestDto updateStatusRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _userService.UpdateUserStatusAsync(userId, updateStatusRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update status for user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User status updated successfully: {UserId} -> {IsActive}", userId, updateStatusRequest.IsActive);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user status: {UserId}", userId);
                return StatusCode(500, "Internal server error occurred while updating user status");
            }
        }

        /// <summary>
        /// Update current user profile (including image)
        /// </summary>
        /// <param name="updateProfileRequest">Profile update data</param>
        /// <returns>Updated user details</returns>
        [HttpPut("profile")]
        [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [Authorize(Policy = "user.index")]
        public async Task<IActionResult> UpdateCurrentUserProfile([FromForm] UpdateUserProfileRequestDto updateProfileRequest)
        {
            try
            {
                var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("User ID not found in token");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _userService.UpdateUserProfileAsync(userId, updateProfileRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("User not found: {UserId}", userId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update profile for user {UserId}. Error: {Error}", userId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("User profile updated successfully: {UserId}", userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating user profile");
                return StatusCode(500, "Internal server error occurred while updating user profile");
            }
        }

        [HttpGet("names")]
        public async Task<ActionResult<ApiResponse<IEnumerable<UserNameIdDto>>>> GetUserNames([FromQuery] string? search)
        {
            var result =await _userService.GetUserNameIdAsync(search);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
