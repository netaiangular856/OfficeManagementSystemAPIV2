using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class TravelService : ITravelService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public TravelService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<ApiResponse<TravelDto>> CreateAsync(CreateTravelDto createDto, string userId)
        {
            try
            {
                // Validate user exists
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<TravelDto>.ErrorResponse("المستخدم غير موجود");
                }

                // Validate dates
                if (createDto.StartDate >= createDto.EndDate)
                {
                    return ApiResponse<TravelDto>.ErrorResponse("تاريخ بداية السفر يجب أن يكون قبل تاريخ انتهاء السفر");
                }

                // Create travel
                var travel = _mapper.Map<Travel>(createDto);
                travel.CreatedBy = userId;

                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travel.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New travel added '{travel.Title}",
                    UserId = travel.CreatedBy // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TravelRepository.AddAsync(travel);
                await _unitOfWork.SaveAsync();

                // Get travel with details
                var result = await _unitOfWork.TravelRepository.GetByIdWithDetailsAsync(travel.Id);
                var dto = _mapper.Map<TravelDto>(result);

                return ApiResponse<TravelDto>.SuccessResponse(dto, "تم إنشاء السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelDto>.ErrorResponse($"خطأ في إنشاء السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<TravelDto>>> GetAllAsync(TravelQueryDto queryDto)
        {
            try
            {
                Expression<Func<Travel, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = t => t.Title.Contains(queryDto.Search) || 
                                 (t.Purpose != null && t.Purpose.Contains(queryDto.Search)) ||
                                 t.Destination.Contains(queryDto.Search);
                }

                if (queryDto.From.HasValue)
                {
                    var fromFilter = (Expression<Func<Travel, bool>>)(t => t.StartDate >= queryDto.From.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.To.HasValue)
                {
                    var toFilter = (Expression<Func<Travel, bool>>)(t => t.EndDate <= queryDto.To.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                var travels = await _unitOfWork.TravelRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(t => t.StartDate));

                var totalCount = travels.Count();
                var items = travels
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<TravelDto>>(items);

                var result = new PaginatedResult<TravelDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<TravelDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<TravelDto>>.ErrorResponse($"خطأ في جلب السفرات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TravelDto>> GetByIdAsync(int id)
        {
            try
            {
                var travel = await _unitOfWork.TravelRepository.GetByIdWithDetailsAsync(id);
                if (travel == null)
                {
                    return ApiResponse<TravelDto>.ErrorResponse("السفر غير موجود");
                }

                var dto = _mapper.Map<TravelDto>(travel);
                return ApiResponse<TravelDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelDto>.ErrorResponse($"خطأ في جلب السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TravelDto>> UpdateAsync(int id, UpdateTravelDto updateDto)
        {
            try
            {
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(id);
                if (travel == null)
                {
                    return ApiResponse<TravelDto>.ErrorResponse("السفر غير موجود");
                }

                // Validate dates
                if (updateDto.StartDate >= updateDto.EndDate)
                {
                    return ApiResponse<TravelDto>.ErrorResponse("تاريخ بداية السفر يجب أن يكون قبل تاريخ انتهاء السفر");
                }

                _mapper.Map(updateDto, travel);
                travel.UpdatedAt = DateTime.UtcNow;

                
                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travel.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Update travel '{travel.Title}",
                    UserId = travel.CreatedBy // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.TravelRepository.UpdateAsync(travel);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.TravelRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<TravelDto>(result);

                return ApiResponse<TravelDto>.SuccessResponse(dto, "تم تحديث السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelDto>.ErrorResponse($"خطأ في تحديث السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(id);
                if (travel == null)
                {
                    return ApiResponse<bool>.ErrorResponse("السفر غير موجود");
                }

                
                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travel.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Delete travel '{travel.Title}",
                    UserId = travel.CreatedBy // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TravelRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف السفر: {ex.Message}");
            }
        }
    }
}
