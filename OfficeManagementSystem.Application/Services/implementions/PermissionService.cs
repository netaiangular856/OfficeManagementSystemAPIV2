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
    public class PermissionService : IPermissionService
    {
        private readonly IPermissionRepository _permissionRepository;
        private readonly IUnitOfWork _unitOfWork;

        public PermissionService(IPermissionRepository permissionRepository, IUnitOfWork unitOfWork)
        {
            _permissionRepository = permissionRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<ApiResponse<PaginatedResult<PermissionDto>>> GetAllAsync(PermissionQueryDto queryDto)
        {
            try
            {
                var permissions = await _permissionRepository.GetAllAsync(
                    filter: p => (string.IsNullOrEmpty(queryDto.Search) || 
                                 p.Name.Contains(queryDto.Search) || 
                                 p.DisplayName!.Contains(queryDto.Search) ||
                                 p.Controller!.Contains(queryDto.Search)),
                    orderBy: q => q.OrderByDescending(p => p.CreatedAt),
                    disableTracking: false
                );

                var totalCount = permissions.Count();

                var paginatedPermissions = permissions
                    .Skip((queryDto.Page - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .Select(p => new PermissionDto
                    {
                        Id = p.Id,
                        Name = p.Name,
                        DisplayName = p.DisplayName,
                        Description = p.Description,
                        Controller = p.Controller,
                        Action = p.Action,
                        IsActive = p.IsActive,
                        CreatedAt = p.CreatedAt
                    })
                    .ToList();

                var result = new PaginatedResult<PermissionDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.Page,
                    PageSize = queryDto.PageSize,
                    Items = paginatedPermissions
                };

                return ApiResponse<PaginatedResult<PermissionDto>>.SuccessResponse(result, "Permissions retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<PermissionDto>>.ErrorResponse($"Error retrieving permissions: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PermissionDto>> GetByIdAsync(int id)
        {
            try
            {
                var permission = await _permissionRepository.GetByIdAsync(id);
                if (permission == null)
                {
                    return ApiResponse<PermissionDto>.ErrorResponse("Permission not found");
                }

                var permissionDto = new PermissionDto
                {
                    Id = permission.Id,
                    Name = permission.Name,
                    DisplayName = permission.DisplayName,
                    Description = permission.Description,
                    Controller = permission.Controller,
                    Action = permission.Action,
                    IsActive = permission.IsActive,
                    CreatedAt = permission.CreatedAt
                };

                return ApiResponse<PermissionDto>.SuccessResponse(permissionDto, "Permission retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PermissionDto>.ErrorResponse($"Error retrieving permission: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PermissionDto>> CreateAsync(CreatePermissionDto createDto)
        {
            try
            {
                if (await _permissionRepository.ExistsByNameAsync(createDto.Name))
                {
                    return ApiResponse<PermissionDto>.ErrorResponse("Permission with this name already exists");
                }

                var permission = new Permission
                {
                    Name = createDto.Name,
                    DisplayName = createDto.DisplayName,
                    Description = createDto.Description,
                    Controller = createDto.Controller,
                    Action = createDto.Action,
                    IsActive = createDto.IsActive,
                    CreatedAt = DateTime.UtcNow
                };

                await _permissionRepository.AddAsync(permission);
                await _unitOfWork.SaveAsync();

                var permissionDto = new PermissionDto
                {
                    Id = permission.Id,
                    Name = permission.Name,
                    DisplayName = permission.DisplayName,
                    Description = permission.Description,
                    Controller = permission.Controller,
                    Action = permission.Action,
                    IsActive = permission.IsActive,
                    CreatedAt = permission.CreatedAt
                };

                return ApiResponse<PermissionDto>.SuccessResponse(permissionDto, "Permission created successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PermissionDto>.ErrorResponse($"Error creating permission: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PermissionDto>> UpdateAsync(int id, UpdatePermissionDto updateDto)
        {
            try
            {
                var permission = await _permissionRepository.GetByIdAsync(id);
                if (permission == null)
                {
                    return ApiResponse<PermissionDto>.ErrorResponse("Permission not found");
                }

                if (await _permissionRepository.ExistsByNameExcludingIdAsync(updateDto.Name, id))
                {
                    return ApiResponse<PermissionDto>.ErrorResponse("Permission with this name already exists");
                }

                permission.Name = updateDto.Name;
                permission.DisplayName = updateDto.DisplayName;
                permission.Description = updateDto.Description;
                permission.Controller = updateDto.Controller;
                permission.Action = updateDto.Action;
                permission.IsActive = updateDto.IsActive;

                await _permissionRepository.UpdateAsync(permission);
                await _unitOfWork.SaveAsync();

                var permissionDto = new PermissionDto
                {
                    Id = permission.Id,
                    Name = permission.Name,
                    DisplayName = permission.DisplayName,
                    Description = permission.Description,
                    Controller = permission.Controller,
                    Action = permission.Action,
                    IsActive = permission.IsActive,
                    CreatedAt = permission.CreatedAt
                };

                return ApiResponse<PermissionDto>.SuccessResponse(permissionDto, "Permission updated successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<PermissionDto>.ErrorResponse($"Error updating permission: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var permission = await _permissionRepository.GetByIdAsync(id);
                if (permission == null)
                {
                    return ApiResponse<bool>.ErrorResponse("Permission not found");
                }

                await _permissionRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "Permission deleted successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"Error deleting permission: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<PermissionDto>>> GetAllActiveAsync()
        {
            try
            {
                var permissions = await _permissionRepository.GetAllAsync(
                    filter: p => p.IsActive,
                    orderBy: q => q.OrderBy(p => p.Name),
                    disableTracking: false
                );

                var permissionDtos = permissions.Select(p => new PermissionDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    DisplayName = p.DisplayName,
                    Description = p.Description,
                    Controller = p.Controller,
                    Action = p.Action,
                    IsActive = p.IsActive,
                    CreatedAt = p.CreatedAt
                }).ToList();

                return ApiResponse<List<PermissionDto>>.SuccessResponse(permissionDtos, "Active permissions retrieved successfully");
            }
            catch (Exception ex)
            {
                return ApiResponse<List<PermissionDto>>.ErrorResponse($"Error retrieving active permissions: {ex.Message}");
            }
        }
    }
}
