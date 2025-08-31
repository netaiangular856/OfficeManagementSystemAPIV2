using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Sharing;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IEmailService emailService;

        public AuthService(
            UserManager<AppUser> userManager,
            RoleManager<AppRole> roleManager,
            SignInManager<AppUser> signInManager,
            IConfiguration configuration, IEmailService emailService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _configuration = configuration;
            this.emailService = emailService;
        }



        public async Task<ApiResponse<LoginResponseDto>> LoginAsync(LoginRequestDto loginRequest)
        {
            try
            {
                var user = await _userManager.FindByEmailAsync(loginRequest.Email);
                if (user == null)
                {
                    return ApiResponse<LoginResponseDto>.ErrorResponse("Invalid email or password");
                }

                var result = await _signInManager.CheckPasswordSignInAsync(user, loginRequest.Password, lockoutOnFailure: true);
                if (!result.Succeeded)
                {
                    if (result.IsLockedOut)
                    {
                        return ApiResponse<LoginResponseDto>.ErrorResponse("Account is locked due to multiple failed login attempts");
                    }
                    return ApiResponse<LoginResponseDto>.ErrorResponse("Invalid email or password");
                }

                var token = await GenerateJwtTokenAsync(user);

                var userRoles = await _userManager.GetRolesAsync(user);
                user.LastLoginAt = DateTime.UtcNow;
                await _userManager.UpdateAsync(user);

                var response = new LoginResponseDto
                {
                    UserId = user.Id,
                    Email = user.Email!,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = token,
                    TokenExpiry = DateTime.UtcNow.AddDays(30),
                    Roles = userRoles.ToList(),
                    LastLoginAt= user.LastLoginAt,
                };
                var emaildto = new EmailDTO(
                    user.Email,
                  _configuration["EmailSetting:From"],
                "Login Notification",
                    EmailStringBodyMS.Send(
                        $"Dear {user.FirstName +' '+user.LastName ?? user.Email},\n\n" +
                        $"You have successfully logged into your account on {DateTime.Now:dddd, dd MMMM yyyy hh:mm tt}.\n\n" +
                        "If this wasn’t you, please secure your account immediately.\n\n" +
                        "Best regards,\n" +
                        "Your Support Team"
                    )
                    );
                await emailService.SendEmail(emaildto);

                return ApiResponse<LoginResponseDto>.SuccessResponse(response, "Login successful");
            }
            catch (Exception ex)
            {
                return ApiResponse<LoginResponseDto>.ErrorResponse($"Login failed: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> ChangePasswordAsync(string userId, ChangePasswordRequestDto changePasswordRequest)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<bool>.ErrorResponse("User not found");
                }

                var result = await _userManager.ChangePasswordAsync(user, changePasswordRequest.CurrentPassword, changePasswordRequest.NewPassword);
                if (!result.Succeeded)
                {
                    var errors = result.Errors.Select(e => e.Description).ToList();
                    return ApiResponse<bool>.ErrorResponse("Password change failed", errors);
                }

                // Update security stamp to invalidate existing tokens
                await _userManager.UpdateSecurityStampAsync(user);

                var emaildto = new EmailDTO(
                user.Email,
                _configuration["EmailSetting:From"],
                "Password Change Notification",
                EmailStringBodyMS.Send(
                    $"Dear {user.FirstName+' '+user.LastName ?? user.Email},\n\n" +
                    $"Your account password was successfully changed on {DateTime.Now:dddd, dd MMMM yyyy hh:mm tt}.\n\n" +
                    "If you did not request this change, please reset your password immediately or contact our support team.\n\n" +
                    "Best regards,\n" +
                    "Your Support Team"
                )
            );
                await emailService.SendEmail(emaildto);

                return ApiResponse<bool>.SuccessResponse(true, "Password changed successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Password change failed: {ex.Message}");
            }
        }

        public async Task SendEmail(string email, string? code, string? component, string subject, string message)
        {
            var result = new EmailDTO(email,
                _configuration["EmailSetting:From"],
                subject,
                EmailStringBodyRF.Send(email, code, component, message));
            await emailService.SendEmail(result);
        }

        public async Task<bool> SendEmailForForgetPassword(string email)
        {
            var findUser = await _userManager.FindByEmailAsync(email);
            if (findUser is null)
            {
                return false;
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(findUser);
            await SendEmail(findUser.Email, token, "reset-password", "Reset Password", "Rest Your Password");
            return true;

        }

        public async Task<string> ResetPassword(ResetPasswordDTO resetPasswordDTO)
        {
            var findUser = await _userManager.FindByEmailAsync(resetPasswordDTO.Email);
            if (findUser is null)
            {
                return null;
            }
            var result = await _userManager.ResetPasswordAsync(findUser, resetPasswordDTO.Token, resetPasswordDTO.Password);
            if (result.Succeeded)
            {
                return "done";
            }

            var emaildto = new EmailDTO(
            resetPasswordDTO.Email,
          _configuration["EmailSetting:From"],
        "Password Reset Successful",
            $"You Have Reset Your Password successfull at {DateTime.Now}"
            );

            await emailService.SendEmail(emaildto);

            return result.Errors.ToList()[0].Description;
        }

        private async Task<string> GenerateJwtTokenAsync(AppUser user)
        {
            var userRoles = await _userManager.GetRolesAsync(user);
            var claims = new List<Claim>
            {
                new(ClaimTypes.NameIdentifier, user.Id),
                new(ClaimTypes.Name, user.UserName!),
                new(ClaimTypes.Email, user.Email!),
                new("FirstName", user.FirstName),
                new("LastName", user.LastName),
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Iat, new DateTimeOffset(DateTime.UtcNow).ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
            };

            foreach (var role in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Token:Secret"]!));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Token:Issure"],
                audience: _configuration["Token:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddDays(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
