using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Partners;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions;

public class PartnerEmployeeService : IPartnerEmployeeService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly UserManager<AppUser> _userManager;

    public PartnerEmployeeService(
        IUnitOfWork unitOfWork,
        IMapper mapper,
        UserManager<AppUser> userManager)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
        _userManager = userManager;
    }

    public async Task<ApiResponse<PartnerEmployeeDto>> CreateAsync(CreatePartnerEmployeeDto createDto, string userId)
    {
        try
        {
            // Validate user exists
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return ApiResponse<PartnerEmployeeDto>.ErrorResponse("المستخدم غير موجود");
            }

            // Validate partner exists
            var partner = await _unitOfWork.PartnerRepository.GetByIdAsync(createDto.PartnerId);
            if (partner == null)
            {
                return ApiResponse<PartnerEmployeeDto>.ErrorResponse("الشريك غير موجود");
            }

            // Create partner employee
            var partnerEmployee = _mapper.Map<PartnerEmployee>(createDto);
            partnerEmployee.CreatedByUserId = userId;

            await _unitOfWork.PartnerEmployeeRepository.AddAsync(partnerEmployee);
            await _unitOfWork.SaveAsync();

            // Get partner employee with details
            var result = await _unitOfWork.PartnerEmployeeRepository.GetByIdWithDetailsAsync(partnerEmployee.Id);
            var dto = _mapper.Map<PartnerEmployeeDto>(result);

            return ApiResponse<PartnerEmployeeDto>.SuccessResponse(dto, "تم إنشاء موظف الشريك بنجاح");
        }
        catch (Exception ex)
        {
            return ApiResponse<PartnerEmployeeDto>.ErrorResponse($"خطأ في إنشاء موظف الشريك: {ex.Message}");
        }
    }

    public async Task<ApiResponse<PaginatedResult<PartnerEmployeeDto>>> GetAllAsync(PartnerEmployeeQueryDto queryDto)
    {
        try
        {
            Expression<Func<PartnerEmployee, bool>>? filter = null;

            if (queryDto.PartnerId.HasValue)
            {
                filter = pe => pe.PartnerId == queryDto.PartnerId.Value;
            }

            if (!string.IsNullOrWhiteSpace(queryDto.Search))
            {
                var searchFilter = (Expression<Func<PartnerEmployee, bool>>)(pe => 
                    (pe.Name != null && pe.Name.Contains(queryDto.Search)) ||
                    (pe.Email != null && pe.Email.Contains(queryDto.Search)) ||
                    (pe.PhoneNumber != null && pe.PhoneNumber.Contains(queryDto.Search)) ||
                    (pe.JobTitle != null && pe.JobTitle.Contains(queryDto.Search)));
                
                filter = filter == null ? searchFilter : filter.And(searchFilter);
            }

            if (!string.IsNullOrWhiteSpace(queryDto.JobTitle))
            {
                var jobTitleFilter = (Expression<Func<PartnerEmployee, bool>>)(pe => 
                    pe.JobTitle != null && pe.JobTitle.Contains(queryDto.JobTitle));
                filter = filter == null ? jobTitleFilter : filter.And(jobTitleFilter);
            }

            if (queryDto.IsActive.HasValue)
            {
                var activeFilter = (Expression<Func<PartnerEmployee, bool>>)(pe => pe.IsActive == queryDto.IsActive.Value);
                filter = filter == null ? activeFilter : filter.And(activeFilter);
            }

            var partnerEmployees = await _unitOfWork.PartnerEmployeeRepository.GetAllWithDetailsAsync(
                filter,
                q => q.OrderByDescending(pe => pe.CreatedAt));

            var totalCount = partnerEmployees.Count();
            var items = partnerEmployees
                .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                .Take(queryDto.PageSize)
                .ToList();

            var dtos = _mapper.Map<List<PartnerEmployeeDto>>(items);

            var result = new PaginatedResult<PartnerEmployeeDto>
            {
                TotalCount = totalCount,
                Page = queryDto.PageNumber,
                PageSize = queryDto.PageSize,
                Items = dtos
            };

            return ApiResponse<PaginatedResult<PartnerEmployeeDto>>.SuccessResponse(result);
        }
        catch (Exception ex)
        {
            return ApiResponse<PaginatedResult<PartnerEmployeeDto>>.ErrorResponse($"خطأ في جلب موظفي الشركاء: {ex.Message}");
        }
    }

    public async Task<ApiResponse<PartnerEmployeeDto>> GetByIdAsync(int id)
    {
        try
        {
            var partnerEmployee = await _unitOfWork.PartnerEmployeeRepository.GetByIdWithDetailsAsync(id);
            if (partnerEmployee == null)
            {
                return ApiResponse<PartnerEmployeeDto>.ErrorResponse("موظف الشريك غير موجود");
            }

            var dto = _mapper.Map<PartnerEmployeeDto>(partnerEmployee);
            return ApiResponse<PartnerEmployeeDto>.SuccessResponse(dto);
        }
        catch (Exception ex)
        {
            return ApiResponse<PartnerEmployeeDto>.ErrorResponse($"خطأ في جلب موظف الشريك: {ex.Message}");
        }
    }

    public async Task<ApiResponse<PartnerEmployeeDto>> UpdateAsync(int id, UpdatePartnerEmployeeDto updateDto)
    {
        try
        {
            var partnerEmployee = await _unitOfWork.PartnerEmployeeRepository.GetByIdAsync(id);
            if (partnerEmployee == null)
            {
                return ApiResponse<PartnerEmployeeDto>.ErrorResponse("موظف الشريك غير موجود");
            }

            _mapper.Map(updateDto, partnerEmployee);
            partnerEmployee.UpdatedAt = DateTime.UtcNow;

            await _unitOfWork.PartnerEmployeeRepository.UpdateAsync(partnerEmployee);
            await _unitOfWork.SaveAsync();

            var result = await _unitOfWork.PartnerEmployeeRepository.GetByIdWithDetailsAsync(id);
            var dto = _mapper.Map<PartnerEmployeeDto>(result);

            return ApiResponse<PartnerEmployeeDto>.SuccessResponse(dto, "تم تحديث موظف الشريك بنجاح");
        }
        catch (Exception ex)
        {
            return ApiResponse<PartnerEmployeeDto>.ErrorResponse($"خطأ في تحديث موظف الشريك: {ex.Message}");
        }
    }

    public async Task<ApiResponse<bool>> DeleteAsync(int id)
    {
        try
        {
            var partnerEmployee = await _unitOfWork.PartnerEmployeeRepository.GetByIdAsync(id);
            if (partnerEmployee == null)
            {
                return ApiResponse<bool>.ErrorResponse("موظف الشريك غير موجود");
            }

            await _unitOfWork.PartnerEmployeeRepository.DeleteAsync(id);
            await _unitOfWork.SaveAsync();

            return ApiResponse<bool>.SuccessResponse(true, "تم حذف موظف الشريك بنجاح");
        }
        catch (Exception ex)
        {
            return ApiResponse<bool>.ErrorResponse($"خطأ في حذف موظف الشريك: {ex.Message}");
        }
    }

    public async Task<ApiResponse<IEnumerable<PartnerEmployeeDto>>> GetByPartnerIdAsync(int partnerId)
    {
        try
        {
            var partnerEmployees = await _unitOfWork.PartnerEmployeeRepository.GetByPartnerIdAsync(partnerId);
            var dtos = _mapper.Map<List<PartnerEmployeeDto>>(partnerEmployees);

            return ApiResponse<IEnumerable<PartnerEmployeeDto>>.SuccessResponse(dtos);
        }
        catch (Exception ex)
        {
            return ApiResponse<IEnumerable<PartnerEmployeeDto>>.ErrorResponse($"خطأ في جلب موظفي الشريك: {ex.Message}");
        }
    }
}
