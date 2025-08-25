using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.Interfaces
{
    public interface IAuthService
    {
        Task<ApiResponse<LoginResponseDto>> LoginAsync(LoginRequestDto loginRequest);
        Task<ApiResponse<bool>> ChangePasswordAsync(string userId, ChangePasswordRequestDto changePasswordRequest);
        Task SendEmail(string email, string code, string component, string subject, string message);
        Task<bool> SendEmailForForgetPassword(string email);
        Task<string> ResetPassword(ResetPasswordDTO resetPasswordDTO);
    }
}
