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

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class PartnerService : IPartnerService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;

        public PartnerService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }

        public async Task<ApiResponse<PartnerDto>> CreateAsync(CreatePartnerDto createDto, string userId)
        {
            try
            {
                // Validate user exists
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<PartnerDto>.ErrorResponse("المستخدم غير موجود");
                }

                // Check if partner with same name exists
                var existsByName = await _unitOfWork.PartnerRepository.ExistsByNameAsync(createDto.Name);
                if (existsByName)
                {
                    return ApiResponse<PartnerDto>.ErrorResponse("يوجد شريك بنفس الاسم");
                }

                // Create partner
                var partner = _mapper.Map<Partner>(createDto);
                partner.CreatedByUserId = userId;

                await _unitOfWork.PartnerRepository.AddAsync(partner);
                await _unitOfWork.SaveAsync();

                // Get partner with details
                var result = await _unitOfWork.PartnerRepository.GetByIdWithDetailsAsync(partner.Id);
                var dto = _mapper.Map<PartnerDto>(result);

                return ApiResponse<PartnerDto>.SuccessResponse(dto, "تم إنشاء الشريك بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<PartnerDto>.ErrorResponse($"خطأ في إنشاء الشريك: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<PartnerDto>>> GetAllAsync(PartnerQueryDto queryDto)
        {
            try
            {
                Expression<Func<Partner, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = p => p.Name.Contains(queryDto.Search) || 
                                 (p.Sector != null && p.Sector.Contains(queryDto.Search)) ||
                                 (p.Address != null && p.Address.Contains(queryDto.Search));
                }

                if (queryDto.Category.HasValue)
                {
                    var categoryFilter = (Expression<Func<Partner, bool>>)(p => p.Category == queryDto.Category.Value);
                    filter = filter == null ? categoryFilter : filter.And(categoryFilter);
                }


                var partners = await _unitOfWork.PartnerRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(p => p.CreatedAt));

                var totalCount = partners.Count();
                var items = partners
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<PartnerDto>>(items);

                var result = new PaginatedResult<PartnerDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<PartnerDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<PartnerDto>>.ErrorResponse($"خطأ في جلب الشركاء: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PartnerDto>> GetByIdAsync(int id)
        {
            try
            {
                var partner = await _unitOfWork.PartnerRepository.GetByIdWithDetailsAsync(id);
                if (partner == null)
                {
                    return ApiResponse<PartnerDto>.ErrorResponse("الشريك غير موجود");
                }

                var dto = _mapper.Map<PartnerDto>(partner);
                return ApiResponse<PartnerDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<PartnerDto>.ErrorResponse($"خطأ في جلب الشريك: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PartnerDto>> UpdateAsync(int id, UpdatePartnerDto updateDto)
        {
            try
            {
                var partner = await _unitOfWork.PartnerRepository.GetByIdAsync(id);
                if (partner == null)
                {
                    return ApiResponse<PartnerDto>.ErrorResponse("الشريك غير موجود");
                }

                // Check if partner with same name exists (excluding current partner)
                var existsByName = await _unitOfWork.PartnerRepository.ExistsByNameAsync(updateDto.Name, id);
                if (existsByName)
                {
                    return ApiResponse<PartnerDto>.ErrorResponse("يوجد شريك بنفس الاسم");
                }

                _mapper.Map(updateDto, partner);
                partner.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.PartnerRepository.UpdateAsync(partner);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.PartnerRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<PartnerDto>(result);

                return ApiResponse<PartnerDto>.SuccessResponse(dto, "تم تحديث الشريك بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<PartnerDto>.ErrorResponse($"خطأ في تحديث الشريك: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var partner = await _unitOfWork.PartnerRepository.GetByIdAsync(id);
                if (partner == null)
                {
                    return ApiResponse<bool>.ErrorResponse("الشريك غير موجود");
                }

                await _unitOfWork.PartnerRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف الشريك بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف الشريك: {ex.Message}");
            }
        }

        // Partner Contacts
        public async Task<ApiResponse<List<PartnerContactDto>>> GetContactsAsync(int partnerId)
        {
            try
            {
                var partner = await _unitOfWork.PartnerRepository.GetByIdWithDetailsAsync(partnerId);
                if (partner == null)
                {
                    return ApiResponse<List<PartnerContactDto>>.ErrorResponse("الشريك غير موجود");
                }

                var dtos = _mapper.Map<List<PartnerContactDto>>(partner.Contacts);
                return ApiResponse<List<PartnerContactDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<PartnerContactDto>>.ErrorResponse($"خطأ في جلب جهات الاتصال: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PartnerContactDto>> AddContactAsync(int partnerId, CreatePartnerContactDto contactDto)
        {
            try
            {
                var partner = await _unitOfWork.PartnerRepository.GetByIdAsync(partnerId);
                if (partner == null)
                {
                    return ApiResponse<PartnerContactDto>.ErrorResponse("الشريك غير موجود");
                }

                var contact = _mapper.Map<PartnerContact>(contactDto);
                contact.PartnerId = partnerId;

                await _unitOfWork.PartnerContactRepository.AddAsync(contact);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.PartnerContactRepository.GetByIdAsync(contact.Id);
                var dto = _mapper.Map<PartnerContactDto>(result);

                return ApiResponse<PartnerContactDto>.SuccessResponse(dto, "تم إضافة جهة الاتصال بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<PartnerContactDto>.ErrorResponse($"خطأ في إضافة جهة الاتصال: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PartnerContactDto>> UpdateContactAsync(int partnerId, int contactId, UpdatePartnerContactDto contactDto)
        {
            try
            {
                var contact = await _unitOfWork.PartnerContactRepository.GetByIdAsync(contactId);
                if (contact == null || contact.PartnerId != partnerId)
                {
                    return ApiResponse<PartnerContactDto>.ErrorResponse("جهة الاتصال غير موجودة");
                }

                _mapper.Map(contactDto, contact);

                await _unitOfWork.PartnerContactRepository.UpdateAsync(contact);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.PartnerContactRepository.GetByIdAsync(contactId);
                var dto = _mapper.Map<PartnerContactDto>(result);

                return ApiResponse<PartnerContactDto>.SuccessResponse(dto, "تم تحديث جهة الاتصال بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<PartnerContactDto>.ErrorResponse($"خطأ في تحديث جهة الاتصال: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveContactAsync(int partnerId, int contactId)
        {
            try
            {
                var contact = await _unitOfWork.PartnerContactRepository.GetByIdAsync(contactId);
                if (contact == null || contact.PartnerId != partnerId)
                {
                    return ApiResponse<bool>.ErrorResponse("جهة الاتصال غير موجودة");
                }

                await _unitOfWork.PartnerContactRepository.DeleteAsync(contactId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف جهة الاتصال بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف جهة الاتصال: {ex.Message}");
            }
        }
    }
}
