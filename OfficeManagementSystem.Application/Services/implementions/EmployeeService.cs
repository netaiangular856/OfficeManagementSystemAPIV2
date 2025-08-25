using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Domain.Sharing;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class EmployeeService : IEmployeeService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger<EmployeeService> _logger;
        private readonly IImageMangementService _imageService;
        private readonly IConfiguration _configuration;
        private readonly IEmailService emailService;

        public EmployeeService(
            UserManager<AppUser> userManager,
            RoleManager<AppRole> roleManager,
            IUnitOfWork unitOfWork,
            IMapper mapper,
            ILogger<EmployeeService> logger,
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

        public async Task<ApiResponse<PaginatedResult<EmployeeDto>>> GetEmployeesAsync(Params parameters)
        {
            try
            {
                var query = _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .Where(u => string.IsNullOrEmpty(parameters.Search) ||
                                u.FirstName.Contains(parameters.Search) ||
                                u.LastName.Contains(parameters.Search) ||
                                u.Email.Contains(parameters.Search) ||
                                u.JobTitle.Contains(parameters.Search))
                    .OrderByDescending(u => u.CreatedAt)
                    .AsQueryable();

                var totalCount = await query.CountAsync();

                var employees = await query
                    .Skip((parameters.PageNumber - 1) * parameters.pageSize)
                    .Take(parameters.pageSize)
                    .ToListAsync();

                var employeeDtos = _mapper.Map<List<EmployeeDto>>(employees);

                    // Get roles and subordinates count for each employee
                    foreach (var employeeDto in employeeDtos)
                    {
                        var employee = employees.FirstOrDefault(e => e.Id == employeeDto.Id);

                    if (employee != null)
                    {
                        employeeDto.Roles = await GetEmployeeRolesAsync(employee);
                        employeeDto.SubordinatesCount = await GetSubordinatesCountAsync(employee.Id);
                    }
                    }

                    var paginatedResult = new PaginatedResult<EmployeeDto>
                {
                    TotalCount = totalCount,
                    Page = parameters.PageNumber,
                    PageSize = parameters.pageSize,
                    Items = employeeDtos
                };

                return ApiResponse<PaginatedResult<EmployeeDto>>.SuccessResponse(paginatedResult);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting employees");
                return ApiResponse<PaginatedResult<EmployeeDto>>.ErrorResponse("An error occurred while retrieving employees");
            }
        }

        public async Task<ApiResponse<EmployeeDto>> GetEmployeeByIdAsync(string employeeId)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .FirstOrDefaultAsync(u => u.Id == employeeId);

                if (employee == null)
                {
                    return ApiResponse<EmployeeDto>.ErrorResponse("Employee not found");
                }

                var employeeDto = _mapper.Map<EmployeeDto>(employee);
                employeeDto.Roles = await GetEmployeeRolesAsync(employee);
                employeeDto.SubordinatesCount = await GetSubordinatesCountAsync(employee.Id);

                return ApiResponse<EmployeeDto>.SuccessResponse(employeeDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting employee with ID: {EmployeeId}", employeeId);
                return ApiResponse<EmployeeDto>.ErrorResponse("An error occurred while retrieving the employee");
            }
        }

        public async Task<ApiResponse<EmployeeDto>> CreateEmployeeAsync(CreateEmployeeRequestDto createEmployeeRequest)
        {
            try
            {
                // Check if employee already exists
                var existingEmployee = await _userManager.FindByEmailAsync(createEmployeeRequest.Email);
                if (existingEmployee != null)
                {
                    return ApiResponse<EmployeeDto>.ErrorResponse("Employee with this email already exists");
                }

                // Check if role exists
                if (!await _roleManager.RoleExistsAsync(createEmployeeRequest.Role))
                {
                    return ApiResponse<EmployeeDto>.ErrorResponse($"Role '{createEmployeeRequest.Role}' does not exist");
                }

                // Check if manager exists (if provided)
                if (!string.IsNullOrEmpty(createEmployeeRequest.ManagerId))
                {
                    var manager = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == createEmployeeRequest.ManagerId);
                    if (manager == null)
                    {
                        return ApiResponse<EmployeeDto>.ErrorResponse("Manager not found");
                    }
                }

                // Create employee
                var employee = _mapper.Map<Employee>(createEmployeeRequest);
                employee.IsActive = true;
                employee.CreatedAt = DateTime.UtcNow;

                var result = await _userManager.CreateAsync(employee, createEmployeeRequest.Password);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<EmployeeDto>.ErrorResponse($"Failed to create employee: {errors}");
                }

                // Assign role
                var roleResult = await _userManager.AddToRoleAsync(employee, createEmployeeRequest.Role);
                if (!roleResult.Succeeded)
                {
                    // If role assignment fails, delete the employee
                    await _userManager.DeleteAsync(employee);
                    var errors = string.Join(", ", roleResult.Errors.Select(e => e.Description));
                    return ApiResponse<EmployeeDto>.ErrorResponse($"Failed to assign role: {errors}");
                }

                // Get the created employee with roles
                var createdEmployee = await _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .FirstOrDefaultAsync(u => u.Id == employee.Id);

                var emailBody = $@"
                <html>
                  <body style='font-family: Arial, sans-serif;'>
                    <h2>Welcome to Our System</h2>
                    <p>Dear {employee.FirstName} {employee.LastName},</p>
                    <p>Your employee account has been created successfully. Below are your login credentials:</p>

                    <p><b>Email:</b> {employee.Email}</p>
                    <p><b>Password:</b> {createEmployeeRequest.Password}</p>
                    <p><b>Job Title:</b> {employee.JobTitle}</p>

                    <p style='color: red;'><b>For security reasons, please change your password immediately after logging in.</b></p>

                    <p>You can login here: <a href='{_configuration["AppSettings:LoginUrl"]}'>Login Page</a></p>

                    <br/>
                    <p>Best Regards,<br/>System Admin</p>
                  </body>
                </html>";

                var emaildto = new EmailDTO(
                employee.Email,
                _configuration["EmailSetting:From"],
                "Your Employee Account Details",
                emailBody
                );

                await emailService.SendEmail(emaildto);

                var employeeDto = _mapper.Map<EmployeeDto>(createdEmployee);
                employeeDto.Roles = await GetEmployeeRolesAsync(createdEmployee);
                employeeDto.SubordinatesCount = await GetSubordinatesCountAsync(createdEmployee.Id);

                _logger.LogInformation("Employee created successfully: {Email}", createEmployeeRequest.Email);
                return ApiResponse<EmployeeDto>.SuccessResponse(employeeDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while creating employee: {Email}", createEmployeeRequest.Email);
                return ApiResponse<EmployeeDto>.ErrorResponse("An error occurred while creating the employee");
            }
        }

        public async Task<ApiResponse<EmployeeDto>> UpdateEmployeeAsync(string employeeId, UpdateEmployeeRequestDto updateEmployeeRequest)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == employeeId);
                if (employee == null)
                {
                    return ApiResponse<EmployeeDto>.ErrorResponse("Employee not found");
                }

                // Check if manager exists (if provided)
                if (!string.IsNullOrEmpty(updateEmployeeRequest.ManagerId))
                {
                    var manager = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == updateEmployeeRequest.ManagerId);
                    if (manager == null)
                    {
                        return ApiResponse<EmployeeDto>.ErrorResponse("Manager not found");
                    }
                }

                // Update employee properties
                _mapper.Map(updateEmployeeRequest, employee);
                employee.UpdatedAt = DateTime.UtcNow;

                var result = await _userManager.UpdateAsync(employee);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<EmployeeDto>.ErrorResponse($"Failed to update employee: {errors}");
                }

                // Get updated employee with roles
                var updatedEmployee = await _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .FirstOrDefaultAsync(u => u.Id == employeeId);

                var employeeDto = _mapper.Map<EmployeeDto>(updatedEmployee);
                employeeDto.Roles = await GetEmployeeRolesAsync(updatedEmployee);
                employeeDto.SubordinatesCount = await GetSubordinatesCountAsync(updatedEmployee.Id);

                _logger.LogInformation("Employee updated successfully: {EmployeeId}", employeeId);
                return ApiResponse<EmployeeDto>.SuccessResponse(employeeDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee: {EmployeeId}", employeeId);
                return ApiResponse<EmployeeDto>.ErrorResponse("An error occurred while updating the employee");
            }
        }

        public async Task<ApiResponse<bool>> DeleteEmployeeAsync(string employeeId)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == employeeId);
                if (employee == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Employee not found");
                }

                // Check if employee has subordinates
                var subordinatesCount = await GetSubordinatesCountAsync(employeeId);
                if (subordinatesCount > 0)
                {
                    return ApiResponse<bool>.ErrorResponse("Cannot delete employee with subordinates. Please reassign subordinates first.");
                }

                // Hard delete - remove employee completely
                var result = await _userManager.DeleteAsync(employee);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to delete employee: {errors}");
                }

                _logger.LogInformation("Employee deleted successfully: {EmployeeId}", employeeId);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while deleting employee: {EmployeeId}", employeeId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while deleting the employee");
            }
        }

        public async Task<ApiResponse<bool>> UpdateEmployeeRoleAsync(string employeeId, UpdateEmployeeRoleRequestDto updateRoleRequest)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == employeeId);
                if (employee == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Employee not found");
                }

                // Check if role exists
                if (!await _roleManager.RoleExistsAsync(updateRoleRequest.Role))
                {
                    return ApiResponse<bool>.ErrorResponse($"Role '{updateRoleRequest.Role}' does not exist");
                }

                // Get current roles
                var currentRoles = await _userManager.GetRolesAsync(employee);

                // Remove current roles
                if (currentRoles.Any())
                {
                    var removeResult = await _userManager.RemoveFromRolesAsync(employee, currentRoles);
                    if (!removeResult.Succeeded)
                    {
                        var errors = string.Join(", ", removeResult.Errors.Select(e => e.Description));
                        return ApiResponse<bool>.ErrorResponse($"Failed to remove current roles: {errors}");
                    }
                }

                // Add new role
                var addResult = await _userManager.AddToRoleAsync(employee, updateRoleRequest.Role);
                if (!addResult.Succeeded)
                {
                    var errors = string.Join(", ", addResult.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to assign new role: {errors}");
                }

                _logger.LogInformation("Employee role updated successfully: {EmployeeId} -> {Role}", employeeId, updateRoleRequest.Role);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee role: {EmployeeId}", employeeId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while updating the employee role");
            }
        }

        public async Task<ApiResponse<bool>> UpdateEmployeeStatusAsync(string employeeId, UpdateEmployeeStatusRequestDto updateStatusRequest)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(e => e.Id == employeeId);
                if (employee == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Employee not found");
                }

                employee.IsActive = updateStatusRequest.IsActive;
                employee.UpdatedAt = DateTime.UtcNow;

                var result = await _userManager.UpdateAsync(employee);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<bool>.ErrorResponse($"Failed to update employee status: {errors}");
                }

                _logger.LogInformation("Employee status updated successfully: {EmployeeId} -> {IsActive}", employeeId, updateStatusRequest.IsActive);
                return ApiResponse<bool>.SuccessResponse(true);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee status: {EmployeeId}", employeeId);
                return ApiResponse<bool>.ErrorResponse("An error occurred while updating the employee status");
            }
        }

        public async Task<ApiResponse<EmployeeDto>> UpdateEmployeeProfileAsync(string employeeId, UpdateEmployeeProfileRequestDto updateProfileRequest)
        {
            try
            {
                var employee = await _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .FirstOrDefaultAsync(u => u.Id == employeeId);

                if (employee == null)
                {
                    return ApiResponse<EmployeeDto>.ErrorResponse("Employee not found");
                }

                // Update employee properties
                if (!string.IsNullOrWhiteSpace(updateProfileRequest.FirstName))
                    employee.FirstName = updateProfileRequest.FirstName;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.LastName))
                    employee.LastName = updateProfileRequest.LastName;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.JobTitle))
                    employee.JobTitle = updateProfileRequest.JobTitle;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.PhoneNumber))
                    employee.PhoneNumber = updateProfileRequest.PhoneNumber;

                if (!string.IsNullOrWhiteSpace(updateProfileRequest.NationalId))
                    employee.NationalId = updateProfileRequest.NationalId;

                if (updateProfileRequest.HireDate.HasValue)
                    employee.HireDate = updateProfileRequest.HireDate;


                employee.UpdatedAt = DateTime.UtcNow;

                // Handle image update
                if (updateProfileRequest.NewImage != null)
                {
                    // Delete old image if exists
                    if (!string.IsNullOrEmpty(employee.ImageUrl))
                    {
                        _imageService.DeleteImage(employee.ImageUrl);
                    }

                    // Save new image
                    var newImagePath = await _imageService.SaveFileAsync(updateProfileRequest.NewImage, "employees");
                    employee.ImageUrl = newImagePath;
                }

                var result = await _userManager.UpdateAsync(employee);
                if (!result.Succeeded)
                {
                    var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                    return ApiResponse<EmployeeDto>.ErrorResponse($"Failed to update employee profile: {errors}");
                }

                // Get updated employee with roles
                var updatedEmployee = await _userManager.Users.OfType<Employee>()
                    .Include(u => u.Department)
                    .Include(u => u.Manager)
                    .FirstOrDefaultAsync(u => u.Id == employeeId);

                var employeeDto = _mapper.Map<EmployeeDto>(updatedEmployee);
                employeeDto.Roles = await GetEmployeeRolesAsync(updatedEmployee);
                employeeDto.SubordinatesCount = await GetSubordinatesCountAsync(updatedEmployee.Id);

                _logger.LogInformation("Employee profile updated successfully: {EmployeeId}", employeeId);
                return ApiResponse<EmployeeDto>.SuccessResponse(employeeDto);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee profile: {EmployeeId}", employeeId);
                return ApiResponse<EmployeeDto>.ErrorResponse("An error occurred while updating the employee profile");
            }
        }

        private async Task<List<string>> GetEmployeeRolesAsync(Employee employee)
        {
            try
            {
                var roles = await _userManager.GetRolesAsync(employee);
                return roles.ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting roles for employee: {EmployeeId}", employee.Id);
                return new List<string>();
            }
        }

        private async Task<int> GetSubordinatesCountAsync(string employeeId)
        {
            try
            {
                return await _userManager.Users.OfType<Employee>()
                    .Where(e => e.ManagerId == employeeId)
                    .CountAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while getting subordinates count for employee: {EmployeeId}", employeeId);
                return 0;
            }
        }
    }
}
