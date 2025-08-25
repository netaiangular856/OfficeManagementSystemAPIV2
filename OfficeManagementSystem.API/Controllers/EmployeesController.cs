using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Sharing;

namespace OfficeManagementSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly ILogger<EmployeesController> _logger;

        public EmployeesController(IEmployeeService employeeService, ILogger<EmployeesController> logger)
        {
            _employeeService = employeeService;
            _logger = logger;
        }

        /// <summary>
        /// Get all employees with pagination and search
        /// </summary>
        /// <param name="search">Search term for first name, last name, email, or job title</param>
        /// <param name="page">Page number (default: 1)</param>
        /// <param name="pageSize">Page size (default: 10)</param>
        /// <returns>Paginated list of employees</returns>
        [HttpGet]
        [ProducesResponseType(typeof(ApiResponse<PaginatedResult<EmployeeDto>>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetEmployees(
            [FromQuery]Params? parameters)

        {
            try
            {
                

                var result = await _employeeService.GetEmployeesAsync(parameters);

                if (!result.Success)
                {
                    _logger.LogWarning("Failed to retrieve employees. Error: {Error}", result.Message);
                    return NotFound(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving employees");
                return StatusCode(500, "Internal server error occurred while retrieving employees");
            }
        }

        /// <summary>
        /// Get current employee profile
        /// </summary>
        /// <returns>Current employee details</returns>
        [HttpGet("profile")]
        [ProducesResponseType(typeof(EmployeeDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetCurrentEmployeeProfile()
        {
            try
            {
                var employeeId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(employeeId))
                {
                    return Unauthorized("Employee ID not found in token");
                }

                var result = await _employeeService.GetEmployeeByIdAsync(employeeId);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", employeeId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to retrieve employee {EmployeeId}. Error: {Error}", employeeId, result.Message);
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving current employee profile");
                return StatusCode(500, "Internal server error occurred while retrieving employee profile");
            }
        }

        /// <summary>
        /// Get employee by ID
        /// </summary>
        /// <param name="id">Employee ID</param>
        /// <returns>Employee details</returns>
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(EmployeeDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetEmployeeById(string id)
        {
            try
            {
                var result = await _employeeService.GetEmployeeByIdAsync(id);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", id);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to retrieve employee {EmployeeId}. Error: {Error}", id, result.Message);
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while retrieving employee: {EmployeeId}", id);
                return StatusCode(500, "Internal server error occurred while retrieving employee");
            }
        }

        /// <summary>
        /// Create a new employee
        /// </summary>
        /// <param name="createEmployeeRequest">Employee creation data</param>
        /// <returns>Created employee details</returns>
        [HttpPost]
        [ProducesResponseType(typeof(EmployeeDto), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> CreateEmployee([FromBody] CreateEmployeeRequestDto createEmployeeRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _employeeService.CreateEmployeeAsync(createEmployeeRequest);

                if (!result.Success)
                {
                    _logger.LogWarning("Failed to create employee {Email}. Error: {Error}", 
                        createEmployeeRequest.Email, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee created successfully: {Email}", createEmployeeRequest.Email);
                return CreatedAtAction(nameof(GetEmployeeById), new { id = result.Data!.Id }, result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while creating employee: {Email}", createEmployeeRequest.Email);
                return StatusCode(500, "Internal server error occurred while creating employee");
            }
        }

        /// <summary>
        /// Update employee details
        /// </summary>
        /// <param name="id">Employee ID</param>
        /// <param name="updateEmployeeRequest">Updated employee data</param>
        /// <returns>Updated employee details</returns>
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(EmployeeDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateEmployee(string id, [FromBody] UpdateEmployeeRequestDto updateEmployeeRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _employeeService.UpdateEmployeeAsync(id, updateEmployeeRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", id);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update employee {EmployeeId}. Error: {Error}", id, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee updated successfully: {EmployeeId}", id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee: {EmployeeId}", id);
                return StatusCode(500, "Internal server error occurred while updating employee");
            }
        }

        /// <summary>
        /// Delete employee
        /// </summary>
        /// <param name="id">Employee ID</param>
        /// <returns>Success status</returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> DeleteEmployee(string id)
        {
            try
            {
                var result = await _employeeService.DeleteEmployeeAsync(id);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", id);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to delete employee {EmployeeId}. Error: {Error}", id, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee deleted successfully: {EmployeeId}", id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while deleting employee: {EmployeeId}", id);
                return StatusCode(500, "Internal server error occurred while deleting employee");
            }
        }

        /// <summary>
        /// Update employee role
        /// </summary>
        /// <param name="id">Employee ID</param>
        /// <param name="updateRoleRequest">New role data</param>
        /// <returns>Success status</returns>
        [HttpPatch("{id}/role")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateEmployeeRole(string id, [FromBody] UpdateEmployeeRoleRequestDto updateRoleRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _employeeService.UpdateEmployeeRoleAsync(id, updateRoleRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", id);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update role for employee {EmployeeId}. Error: {Error}", id, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee role updated successfully: {EmployeeId} -> {Role}", id, updateRoleRequest.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee role: {EmployeeId}", id);
                return StatusCode(500, "Internal server error occurred while updating employee role");
            }
        }

        /// <summary>
        /// Update employee status (enable/disable)
        /// </summary>
        /// <param name="id">Employee ID</param>
        /// <param name="updateStatusRequest">Status update data</param>
        /// <returns>Success status</returns>
        [HttpPatch("{id}/status")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateEmployeeStatus(string id, [FromBody] UpdateEmployeeStatusRequestDto updateStatusRequest)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _employeeService.UpdateEmployeeStatusAsync(id, updateStatusRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", id);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update status for employee {EmployeeId}. Error: {Error}", id, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee status updated successfully: {EmployeeId} -> {IsActive}", id, updateStatusRequest.IsActive);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee status: {EmployeeId}", id);
                return StatusCode(500, "Internal server error occurred while updating employee status");
            }
        }

        /// <summary>
        /// Update current employee profile (including image)
        /// </summary>
        /// <param name="updateProfileRequest">Profile update data</param>
        /// <returns>Updated employee details</returns>
        [HttpPut("profile")]
        [ProducesResponseType(typeof(EmployeeDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateCurrentEmployeeProfile([FromForm] UpdateEmployeeProfileRequestDto updateProfileRequest)
        {
            try
            {
                var employeeId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(employeeId))
                {
                    return Unauthorized("Employee ID not found in token");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var result = await _employeeService.UpdateEmployeeProfileAsync(employeeId, updateProfileRequest);

                if (!result.Success)
                {
                    if (result.Message.Contains("not found"))
                    {
                        _logger.LogWarning("Employee not found: {EmployeeId}", employeeId);
                        return NotFound(result);
                    }
                    
                    _logger.LogWarning("Failed to update profile for employee {EmployeeId}. Error: {Error}", employeeId, result.Message);
                    return BadRequest(result);
                }

                _logger.LogInformation("Employee profile updated successfully: {EmployeeId}", employeeId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while updating employee profile");
                return StatusCode(500, "Internal server error occurred while updating employee profile");
            }
        }
    }
}
