using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IPermissionService _permissionService;
        private readonly IRoleService _roleService;

        public AdminController(IPermissionService permissionService, IRoleService roleService)
        {
            _permissionService = permissionService;
            _roleService = roleService;
        }

        #region Permissions Endpoints

        /// <summary>
        /// Get all permissions with pagination and filtering
        /// </summary>
        [HttpGet("permissions")]
        public async Task<IActionResult> GetPermissions([FromQuery] PermissionQueryDto queryDto)
        {
            try
            {
                var result = await _permissionService.GetAllAsync(queryDto);
                return result.Success ? Ok(result) : BadRequest(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message, stackTrace = ex.StackTrace });
            }
        }

        /// <summary>
        /// Get all permissions without pagination (for testing)
        /// </summary>
        [HttpGet("permissions/all")]
        public async Task<IActionResult> GetAllPermissions()
        {
            try
            {
                var queryDto = new PermissionQueryDto { Page = 1, PageSize = 1000 };
                var result = await _permissionService.GetAllAsync(queryDto);
                return result.Success ? Ok(result) : BadRequest(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message, stackTrace = ex.StackTrace });
            }
        }

        /// <summary>
        /// Create a new permission
        /// </summary>
        [HttpPost("permissions")]
        public async Task<IActionResult> CreatePermission([FromBody] CreatePermissionDto createDto)
        {
            try
            {
                var result = await _permissionService.CreateAsync(createDto);
                return result.Success ? Ok(result) : BadRequest(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message, stackTrace = ex.StackTrace });
            }
        }

        /// <summary>
        /// Update an existing permission
        /// </summary>
        [HttpPut("permissions/{permissionId}")]
        public async Task<IActionResult> UpdatePermission(int permissionId, [FromBody] UpdatePermissionDto updateDto)
        {
            var result = await _permissionService.UpdateAsync(permissionId, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Delete a permission
        /// </summary>
        [HttpDelete("permissions/{permissionId}")]
        public async Task<IActionResult> DeletePermission(int permissionId)
        {
            var result = await _permissionService.DeleteAsync(permissionId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        #endregion

        #region Roles Endpoints

        /// <summary>
        /// Get all roles with pagination
        /// </summary>
        [HttpGet("roles")]
        public async Task<IActionResult> GetRoles([FromQuery] RoleQueryDto queryDto)
        {
            var result = await _roleService.GetAllAsync(queryDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Get a specific role by ID
        /// </summary>
        [HttpGet("roles/{roleId}")]
        public async Task<IActionResult> GetRole(string roleId)
        {
            var result = await _roleService.GetByIdAsync(roleId);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// Create a new role
        /// </summary>
        [HttpPost("roles")]
        public async Task<IActionResult> CreateRole([FromBody] CreateRoleDto createDto)
        {
            var result = await _roleService.CreateAsync(createDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Update an existing role
        /// </summary>
        [HttpPut("roles/{roleId}")]
        public async Task<IActionResult> UpdateRole(string roleId, [FromBody] UpdateRoleDto updateDto)
        {
            var result = await _roleService.UpdateAsync(roleId, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Delete a role
        /// </summary>
        [HttpDelete("roles/{roleId}")]
        public async Task<IActionResult> DeleteRole(string roleId)
        {
            var result = await _roleService.DeleteAsync(roleId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        #endregion

        #region Role Permissions Endpoints

        /// <summary>
        /// Get permissions for a specific role
        /// </summary>
        [HttpGet("roles/{roleId}/permissions")]
        public async Task<IActionResult> GetRolePermissions(string roleId)
        {
            var result = await _roleService.GetRolePermissionsAsync(roleId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Assign permissions to a role
        /// </summary>
        [HttpPost("roles/{roleId}/permissions")]
        public async Task<IActionResult> AssignPermissionsToRole(string roleId, [FromBody] AssignPermissionsDto assignDto)
        {
            var result = await _roleService.AssignPermissionsToRoleAsync(roleId, assignDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// Remove a specific permission from a role
        /// </summary>
        [HttpDelete("roles/{roleId}/permissions/{permissionId}")]
        public async Task<IActionResult> RemovePermissionFromRole(string roleId, int permissionId)
        {
            var result = await _roleService.RemovePermissionFromRoleAsync(roleId, permissionId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        #endregion
    }
}
