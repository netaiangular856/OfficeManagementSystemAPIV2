using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class RoleService : IRoleService
    {
        private readonly RoleManager<AppRole> _roleManager;
        private readonly IUnitOfWork _unitOfWork;

        public RoleService(RoleManager<AppRole> roleManager, IUnitOfWork unitOfWork)
        {
            _roleManager = roleManager;
            _unitOfWork = unitOfWork;
        }

        public async Task<ApiResponse<PaginatedResult<RoleDto>>> GetAllAsync(RoleQueryDto queryDto)
        {
            try
            {
                var query = _roleManager.Roles.AsQueryable();

                if (!string.IsNullOrEmpty(queryDto.Search))
                {
                    query = query.Where(r => r.Name.Contains(queryDto.Search) || 
                                            r.Description!.Contains(queryDto.Search));
                }

                query = query.OrderByDescending(r => r.CreatedAt);

                var totalCount = await query.CountAsync();

                var roles = await query
                    .Skip((queryDto.Page - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .Select(r => new RoleDto
                    {
                        Id = r.Id,
                        Name = r.Name,
                        Description = r.Description,
                        CreatedAt = r.CreatedAt,
                        UpdatedAt = r.UpdatedAt
                    })
                    .ToListAsync();

                var result = new PaginatedResult<RoleDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.Page,
                    PageSize = queryDto.PageSize,
                    Items = roles
                };

                return ApiResponse<PaginatedResult<RoleDto>>.SuccessResponse(result, "Roles retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<RoleDto>>.ErrorResponse($"Error retrieving roles: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RoleDto>> GetByIdAsync(string id)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(id);
                if (role == null)
                {
                    return ApiResponse<RoleDto>.ErrorResponse("Role not found");
                }

                var roleDto = new RoleDto
                {
                    Id = role.Id,
                    Name = role.Name,
                    Description = role.Description,
                    CreatedAt = role.CreatedAt,
                    UpdatedAt = role.UpdatedAt
                };

                return ApiResponse<RoleDto>.SuccessResponse(roleDto, "Role retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<RoleDto>.ErrorResponse($"Error retrieving role: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RoleDto>> CreateAsync(CreateRoleDto createDto)
        {
            try
            {
                var role = new AppRole
                {
                    Name = createDto.Name,
                    Description = createDto.Description,
                    CreatedAt = DateTime.UtcNow
                };

                var result = await _roleManager.CreateAsync(role);
                if (!result.Succeeded)
                {
                    var errors = result.Errors.Select(e => e.Description).ToList();
                    return ApiResponse<RoleDto>.ErrorResponse("Failed to create role", errors);
                }

                var roleDto = new RoleDto
                {
                    Id = role.Id,
                    Name = role.Name,
                    Description = role.Description,
                    CreatedAt = role.CreatedAt,
                    UpdatedAt = role.UpdatedAt
                };

                return ApiResponse<RoleDto>.SuccessResponse(roleDto, "Role created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<RoleDto>.ErrorResponse($"Error creating role: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RoleDto>> UpdateAsync(string id, UpdateRoleDto updateDto)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(id);
                if (role == null)
                {
                    return ApiResponse<RoleDto>.ErrorResponse("Role not found");
                }

                role.Name = updateDto.Name;
                role.Description = updateDto.Description;
                role.UpdatedAt = DateTime.UtcNow;

                var result = await _roleManager.UpdateAsync(role);
                if (!result.Succeeded)
                {
                    var errors = result.Errors.Select(e => e.Description).ToList();
                    return ApiResponse<RoleDto>.ErrorResponse("Failed to update role", errors);
                }

                var roleDto = new RoleDto
                {
                    Id = role.Id,
                    Name = role.Name,
                    Description = role.Description,
                    CreatedAt = role.CreatedAt,
                    UpdatedAt = role.UpdatedAt
                };

                return ApiResponse<RoleDto>.SuccessResponse(roleDto, "Role updated successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<RoleDto>.ErrorResponse($"Error updating role: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(string id)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(id);
                if (role == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Role not found");
                }

                var result = await _roleManager.DeleteAsync(role);
                if (!result.Succeeded)
                {
                    var errors = result.Errors.Select(e => e.Description).ToList();
                    return ApiResponse<bool>.ErrorResponse("Failed to delete role", errors);
                }

                return ApiResponse<bool>.SuccessResponse(true, "Role deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error deleting role: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<PermissionDto>>> GetRolePermissionsAsync(string roleId)
        {
            try
            {
                var rolePermissions = await _unitOfWork.RolePermissionRepository.GetByRoleIdAsync(roleId);
                var permissionDtos = rolePermissions.Select(rp => new PermissionDto
                {
                    Id = rp.Permission.Id,
                    Name = rp.Permission.Name,
                    DisplayName = rp.Permission.DisplayName,
                    Description = rp.Permission.Description,
                    Controller = rp.Permission.Controller,
                    Action = rp.Permission.Action,
                    IsActive = rp.Permission.IsActive,
                    CreatedAt = rp.Permission.CreatedAt
                }).ToList();

                return ApiResponse<List<PermissionDto>>.SuccessResponse(permissionDtos, "Role permissions retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<List<PermissionDto>>.ErrorResponse($"Error retrieving role permissions: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> AssignPermissionsToRoleAsync(string roleId, AssignPermissionsDto assignDto)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(roleId);
                if (role == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Role not found");
                }

                // Clear existing permissions
                await _unitOfWork.RolePermissionRepository.DeleteByRoleIdAsync(roleId);

                // Add new permissions
                foreach (var permissionId in assignDto.PermissionIds)
                {
                    
  
                        var rolePermission = new RolePermission
                        {
                            RoleId = roleId,
                            PermissionId = permissionId,
                            AssignedAt = DateTime.UtcNow
                        };
                        await _unitOfWork.RolePermissionRepository.AddAsync(rolePermission);
            
                }

                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "Permissions assigned successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error assigning permissions: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemovePermissionFromRoleAsync(string roleId, int permissionId)
        {
            try
            {
                var role = await _roleManager.FindByIdAsync(roleId);
                if (role == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Role not found");
                }

                await _unitOfWork.RolePermissionRepository.DeleteByRoleIdAndPermissionIdAsync(roleId, permissionId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "Permission removed successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error removing permission: {ex.Message}");
            }
        }
    }
}
