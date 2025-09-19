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
using System.Diagnostics;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class TravelResultService : ITravelResultService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public TravelResultService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<ApiResponse<TravelResultDto>> CreateAsync(CreateTravelResultDto createDto, string userId)
        {
            try
            {
                // Validate travel exists
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(createDto.TravelId);
                if (travel == null)
                {
                    return ApiResponse<TravelResultDto>.ErrorResponse("السفر غير موجود");
                }

                // Create travel result
                var travelResult = _mapper.Map<TravelResult>(createDto);

                await _unitOfWork.TravelResultRepository.AddAsync(travelResult);
                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travelResult.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New Travel Result for travel: '{travel.Title}",
                    UserId = userId // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.SaveAsync();

                // Get travel result with details
                var result = await _unitOfWork.TravelResultRepository.GetByIdWithDetailsAsync(travelResult.Id);
                var dto = _mapper.Map<TravelResultDto>(result);

                return ApiResponse<TravelResultDto>.SuccessResponse(dto, "تم إنشاء نتيجة السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelResultDto>.ErrorResponse($"خطأ في إنشاء نتيجة السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<IEnumerable<TravelResultDto>>> GetAllAsync(int travelId)
        {
            try
            {
                // Validate travel exists
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(travelId);
                if (travel == null)
                {
                    return ApiResponse<IEnumerable<TravelResultDto>>.ErrorResponse("السفر غير موجود");
                }    

                var travelResults = await _unitOfWork.TravelResultRepository.GetAllWithDetailsAsync(
                    m=>m.TravelId==travelId,
                    q => q.OrderByDescending(tr => tr.CreatedAt));

                var dtos = _mapper.Map<List<TravelResultDto>>(travelResults);



                return ApiResponse<IEnumerable<TravelResultDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<IEnumerable<TravelResultDto>>.ErrorResponse($"خطأ في جلب نتائج السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TravelResultDto>> GetByIdAsync(int id)
        {
            try
            {
                var travelResult = await _unitOfWork.TravelResultRepository.GetByIdWithDetailsAsync(id);
                if (travelResult == null)
                {
                    return ApiResponse<TravelResultDto>.ErrorResponse("نتيجة السفر غير موجودة");
                }

                var dto = _mapper.Map<TravelResultDto>(travelResult);
                return ApiResponse<TravelResultDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelResultDto>.ErrorResponse($"خطأ في جلب نتيجة السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<TravelResultDto>> UpdateAsync(int id, UpdateTravelResultDto updateDto,string userId)
        {
            try
            {
                var travelResult = await _unitOfWork.TravelResultRepository.GetByIdAsync(id);
                if (travelResult == null)
                {
                    return ApiResponse<TravelResultDto>.ErrorResponse("نتيجة السفر غير موجودة");
                }
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(travelResult.TravelId);
                if (travel == null)
                {
                    return ApiResponse<TravelResultDto>.ErrorResponse("السفر غير موجودة");
                }

                _mapper.Map(updateDto, travelResult);
                travelResult.UpdatedAt = DateTime.UtcNow;
                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travelResult.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"update Travel Result with id {travelResult.Id} for travel {travel.Title}",
                    UserId = userId// أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.TravelResultRepository.UpdateAsync(travelResult);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.TravelResultRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<TravelResultDto>(result);

                return ApiResponse<TravelResultDto>.SuccessResponse(dto, "تم تحديث نتيجة السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<TravelResultDto>.ErrorResponse($"خطأ في تحديث نتيجة السفر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id,string userId)
        {
            try
            {
                var travelResult = await _unitOfWork.TravelResultRepository.GetByIdAsync(id);
                if (travelResult == null)
                {
                    return ApiResponse<bool>.ErrorResponse("نتيجة السفر غير موجودة");
                }
                var travel = await _unitOfWork.TravelRepository.GetByIdAsync(travelResult.TravelId);
                if (travel == null)
                {
                    return ApiResponse<bool>.ErrorResponse("السفر غير موجودة");
                }
                var worklog = new WorkflowLog
                {
                    EntityName = "Travel",
                    EntityId = travelResult.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"delete Travel Result with id {travelResult.Id} for travel {travel.Title}",
                    UserId = userId// أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.TravelResultRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف نتيجة السفر بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف نتيجة السفر: {ex.Message}");
            }
        }
    }
}
