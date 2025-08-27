using AutoMapper;
using LinqKit;
using MailKit.Search;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class DepartmentService : IDepartmentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public DepartmentService(IUnitOfWork unitOfWork, IMapper mapper,UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<ApiResponse<DepartmentDto>> CreateAsync(CreateDepartmentDto createDto)
        {
            try
            {
                // Check if code already exists
                if (await _unitOfWork.DepartmentRepository.CodeExistsAsync(createDto.Code))
                {
                    return ApiResponse<DepartmentDto>.ErrorResponse("رمز القسم موجود مسبقاً");
                }

                // Validate parent department exists if provided
                if (createDto.ParentId.HasValue)
                {
                    var parent = await _unitOfWork.DepartmentRepository.GetByIdAsync(createDto.ParentId.Value);
                    if (parent == null)
                    {
                        return ApiResponse<DepartmentDto>.ErrorResponse("القسم الأب غير موجود");
                    }
                }

                // Set order if not provided
                if (createDto.Order == 0)
                {
                    createDto.Order = await _unitOfWork.DepartmentRepository.GetMaxOrderAsync(createDto.ParentId) + 1;
                }

                var department = _mapper.Map<Department>(createDto);
                await _unitOfWork.DepartmentRepository.AddAsync(department);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.DepartmentRepository.GetByIdWithDetailsAsync(department.Id);
                var dto = _mapper.Map<DepartmentDto>(result);

                return ApiResponse<DepartmentDto>.SuccessResponse(dto, "تم إنشاء القسم بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<DepartmentDto>.ErrorResponse($"خطأ في إنشاء القسم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<DepartmentDto>>> GetAllAsync(DepartmentQueryDto queryDto)
        {
            try
            {
                Expression<Func<Department, bool>>? filter = null;
                
                if (!string.IsNullOrWhiteSpace(queryDto.SearchTerm))
                {
                    filter = d => d.Code.Contains(queryDto.SearchTerm) || 
                                 d.NameAr.Contains(queryDto.SearchTerm) || 
                                 (d.NameEn != null && d.NameEn.Contains(queryDto.SearchTerm));
                }

                if (queryDto.Type.HasValue)
                {
                    var typeFilter = (Expression<Func<Department, bool>>)(d => d.Type == queryDto.Type.Value);
                    filter = filter == null ? typeFilter : filter.And(typeFilter);
                }

                if (queryDto.IsActive.HasValue)
                {
                    var activeFilter = (Expression<Func<Department, bool>>)(d => d.IsActive == queryDto.IsActive.Value);
                    filter = filter == null ? activeFilter : filter.And(activeFilter);
                }

                if (queryDto.ParentId.HasValue)
                {
                    var parentFilter = (Expression<Func<Department, bool>>)(d => d.ParentId == queryDto.ParentId.Value);
                    filter = filter == null ? parentFilter : filter.And(parentFilter);
                }

                //var departments = await _unitOfWork.DepartmentRepository.GetAllWithDetailsAsync(
                //    filter,
                //    q => q.OrderBy(d => d.Order));

                var departments = await _unitOfWork.DepartmentRepository
                    .GetAllAsync(filter,orderBy:m => m.OrderByDescending(m => m.Order));

                var totalCount = departments.Count();
                var items = departments
                    .Skip((queryDto.Page - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .Select(d => _mapper.Map<DepartmentDto>(d))
                    .ToList();

                var result = new PaginatedResult<DepartmentDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.Page,
                    PageSize = queryDto.PageSize,
                    Items = items
                };

                return ApiResponse<PaginatedResult<DepartmentDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<DepartmentDto>>.ErrorResponse($"خطأ في جلب الأقسام: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<DepartmentTreeDto>>> GetTreeAsync()
        {
            try
            {
                // هات كل الأقسام مرة واحدة مع Include للـ Children
                var allDepartments = (await _unitOfWork.DepartmentRepository.GetAllWithDetailsAsync(
                    orderBy: q => q.OrderBy(d => d.Order)
                )).ToList();

                // EF Core هيعمل relationship fix-up ويملأ Children لكل المستويات تلقائيًا
                // اختار الـ roots بس
                var rootDepartments = allDepartments.Where(d => d.ParentId == null).ToList();

                // اعمل Map للـ roots فقط — والـ Children تحتهم (وأحفادهم) هتتبعت عادي
                var tree = _mapper.Map<List<DepartmentTreeDto>>(rootDepartments);

                return ApiResponse<List<DepartmentTreeDto>>.SuccessResponse(tree);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<DepartmentTreeDto>>.ErrorResponse($"خطأ في جلب شجرة الأقسام: {ex.Message}");
            }
        }


        public async Task<ApiResponse<DepartmentDto>> GetByIdAsync(int id)
        {
            try
            {
                var department = await _unitOfWork.DepartmentRepository.GetByIdWithDetailsAsync(id);
                if (department == null)
                {
                    return ApiResponse<DepartmentDto>.ErrorResponse("القسم غير موجود");
                }

                var dto = _mapper.Map<DepartmentDto>(department);
                return ApiResponse<DepartmentDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<DepartmentDto>.ErrorResponse($"خطأ في جلب القسم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<DepartmentDto>> UpdateAsync(int id, UpdateDepartmentDto updateDto)
        {
            try
            {
                var department = await _unitOfWork.DepartmentRepository.GetByIdAsync(id);
                if (department == null)
                {
                    return ApiResponse<DepartmentDto>.ErrorResponse("القسم غير موجود");
                }


                // Validate parent department exists if provided
                if (updateDto.ParentId.HasValue)
                {
                    var parent = await _unitOfWork.DepartmentRepository.GetByIdAsync(updateDto.ParentId.Value);
                    if (parent == null)
                    {
                        return ApiResponse<DepartmentDto>.ErrorResponse("القسم الأب غير موجود");
                    }

                    // Prevent circular reference
                    if (updateDto.ParentId.Value == id)
                    {
                        return ApiResponse<DepartmentDto>.ErrorResponse("لا يمكن أن يكون القسم أباً لنفسه");
                    }
                }

                _mapper.Map(updateDto, department);
                await _unitOfWork.DepartmentRepository.UpdateAsync(department);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.DepartmentRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<DepartmentDto>(result);

                return ApiResponse<DepartmentDto>.SuccessResponse(dto, "تم تحديث القسم بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<DepartmentDto>.ErrorResponse($"خطأ في تحديث القسم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> MoveAsync(int id, MoveDepartmentDto moveDto)
        {
            try
            {
                var department = await _unitOfWork.DepartmentRepository.GetByIdAsync(id);
                if (department == null)
                {
                    return ApiResponse<bool>.ErrorResponse("القسم غير موجود");
                }

                // Validate new parent if provided
                if (moveDto.NewParentId.HasValue)
                {
                    var newParent = await _unitOfWork.DepartmentRepository.GetByIdAsync(moveDto.NewParentId.Value);
                    if (newParent == null)
                    {
                        return ApiResponse<bool>.ErrorResponse("القسم الأب الجديد غير موجود");
                    }

                    // Prevent circular reference
                    if (moveDto.NewParentId.Value == id)
                    {
                        return ApiResponse<bool>.ErrorResponse("لا يمكن نقل القسم إلى نفسه");
                    }
                }

                department.ParentId = moveDto.NewParentId;
                department.Order = moveDto.NewOrder;
                department.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.DepartmentRepository.UpdateAsync(department);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم نقل القسم بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في نقل القسم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> AssignManagerAsync(int id, AssignManagerDto assignDto)
        {
            try
            {
                var department = await _unitOfWork.DepartmentRepository.GetByIdAsync(id);
                if (department == null)
                {
                    return ApiResponse<bool>.ErrorResponse("القسم غير موجود");
                }

                var manager = await _userManager.Users.OfType<Employee>().FirstOrDefaultAsync(m => m.Id == assignDto.ManagerUserId);

                if (manager == null)
                {
                    return ApiResponse<bool>.ErrorResponse("المدير غير مسجل علي النظام");
                }

                manager.DepartmentId = department.Id;

                await _userManager.UpdateAsync(manager);

                // TODO: Validate that the user exists and has appropriate role
                // This would require access to user repository

                department.ManagerUserId = assignDto.ManagerUserId;
                department.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.DepartmentRepository.UpdateAsync(department);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم تعيين المدير بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في تعيين المدير: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var department = await _unitOfWork.DepartmentRepository.GetByIdAsync(id);
                if (department == null)
                {
                    return ApiResponse<bool>.ErrorResponse("القسم غير موجود");
                }

                // Check if department has children
                if (await _unitOfWork.DepartmentRepository.HasChildrenAsync(id))
                {
                    return ApiResponse<bool>.ErrorResponse("لا يمكن حذف القسم لأنه يحتوي على أقسام فرعية");
                }

                // Check if department has employees
                if (department.Employees != null && department.Employees.Any())
                {
                    return ApiResponse<bool>.ErrorResponse("لا يمكن حذف القسم لأنه يحتوي على موظفين");
                }

                await _unitOfWork.DepartmentRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف القسم بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف القسم: {ex.Message}");
            }
        }

        public async Task<ApiResponse<IEnumerable<DepartmentNameIdDto>>> GetDepartmentsNamesAsync(string? search)
        {
            try
            {
                var departments = await _unitOfWork.DepartmentRepository
                    .GetAllAsync(m=>string.IsNullOrEmpty(search)||
                   m.NameEn.ToLower().Contains(search.ToLower())||
                   m.NameAr.ToLower().Contains(search.ToLower()));
                if (!departments.Any())
                {
                    return ApiResponse<IEnumerable<DepartmentNameIdDto>>.ErrorResponse("no department to show");
                }
                // أو _context.Departments
                var result = departments.Select(d => new DepartmentNameIdDto
                {
                    Id = d.Id,
                    Name = d.NameEn // أو d.Name لو عندك حقل واحد
                });

                return ApiResponse<IEnumerable<DepartmentNameIdDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<IEnumerable<DepartmentNameIdDto>>.ErrorResponse("An error occurred while retrieving departments");
            }
        }
    }
}
