using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }
        [HttpPost("login")]
        [AllowAnonymous]
        [ProducesResponseType(typeof(LoginResponseDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto loginRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _authService.LoginAsync(loginRequest);

                if (!result.Success)
                {
                    _logger.LogWarning("Login failed for email: {Email}. Reason: {Message}",
                        loginRequest.Email, result.Message);
                    return Unauthorized(result);
                }

                // Set HTTP-only cookie with JWT token
                SetAuthCookie(result.Data!.Token);
                //SetRefreshTokenCookie(result.Data.RefreshToken);

                _logger.LogInformation("User {Email} logged in successfully", loginRequest.Email);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred during login for email: {Email}", loginRequest.Email);
                return StatusCode(500, "Internal server error occurred during login");
            }
        }
        [HttpPost("logout")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Logout()
        {
            try
            {
                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (!string.IsNullOrEmpty(userId))
                {
                    _logger.LogInformation("User {UserId} logged out successfully", userId);
                }

                // Clear auth cookie
                ClearAuthCookie();

                return Ok(new { message = "Logout successful" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred during logout");
                return StatusCode(500, "Internal server error occurred during logout");
            }
        }

        [HttpPost("change-password")]
        [Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordRequestDto changePasswordRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized("User ID not found in token");
                }

                var result = await _authService.ChangePasswordAsync(userId, changePasswordRequest);

                if (!result.Success)
                {
                    _logger.LogWarning("Password change failed for user: {UserId}. Errors: {Errors}",
                        userId, string.Join(", ", result.Errors));
                    return BadRequest(result);
                }

                // Clear auth cookie to force re-login with new password
                ClearAuthCookie();

                _logger.LogInformation("Password changed successfully for user: {UserId}", userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred during password change");
                return StatusCode(500, "Internal server error occurred during password change");
            }
        }


        [HttpGet("send-email-password")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> ForgetPassword([FromQuery] string email)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(email))
                {
                    return BadRequest("Email is required.");
                }

                var result = await _authService.SendEmailForForgetPassword(email);

                if (!result)
                {
                    _logger.LogWarning("ForgetPassword failed for email: {Email}", email);
                    return BadRequest(new { message = "Failed to send reset password email." });
                }

                _logger.LogInformation("Password reset email sent successfully to: {Email}", email);
                return Ok(new { message = "Reset password email sent successfully." });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while sending reset password email for: {Email}", email);
                return StatusCode(500, "Internal server error occurred while sending reset password email.");
            }
        }

        [HttpPost("reset-password")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDTO resetPasswordDTO)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _authService.ResetPassword(resetPasswordDTO);

                if (result == "done")
                {
                    _logger.LogInformation("Password reset successfully for email: {Email}", resetPasswordDTO.Email);
                    return Ok(new { message = "Password has been reset successfully." });
                }

                _logger.LogWarning("Failed to reset password for email: {Email}. Reason: {Reason}", resetPasswordDTO.Email, result);
                return BadRequest(new { message = result });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while resetting password for email: {Email}", resetPasswordDTO.Email);
                return StatusCode(500, "Internal server error occurred while resetting password.");
            }
        }
        private void SetAuthCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                IsEssential = true,
                //Domain = "localhost",
                Expires = DateTime.Now.AddDays(30)
            };

            Response.Cookies.Append("token", token, cookieOptions);
        }
        private void ClearAuthCookie()
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                IsEssential = true,
                //Domain = "localhost",
                Expires = DateTime.Now.AddDays(-1)
            };

            Response.Cookies.Append("token", "", cookieOptions);
        }
    }
}
