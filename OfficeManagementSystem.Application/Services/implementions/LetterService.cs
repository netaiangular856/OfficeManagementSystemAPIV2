using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterService : ILetterService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly IAttachmentFileService _attachmentFileService;

        public LetterService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            IAttachmentFileService attachmentFileService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _attachmentFileService = attachmentFileService;
        }

        public async Task<ApiResponse<LetterDto>> CreateAsync(CreateLetterDto createDto, string userId)
        {
            try
            {
                // Validate user exists
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("المستخدم غير موجود");
                }

                // Check if letter with same subject exists
                var existsBySubject = await _unitOfWork.LetterRepository.ExistsBySubjectAsync(createDto.Subject);
                if (existsBySubject)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("يوجد خطاب بنفس الموضوع");
                }

                // Create letter
                var letter = _mapper.Map<Letter>(createDto);
                letter.CreatedByUserId = userId;

                await _unitOfWork.LetterRepository.AddAsync(letter);
                await _unitOfWork.SaveAsync();

                // Get letter with details
                var result = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letter.Id);
                var dto = _mapper.Map<LetterDto>(result);

                return ApiResponse<LetterDto>.SuccessResponse(dto, "تم إنشاء الخطاب بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في إنشاء الخطاب: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<LetterDto>>> GetAllAsync(LetterQueryDto queryDto)
        {
            try
            {
                Expression<Func<Letter, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = l => l.Subject.Contains(queryDto.Search) || 
                                 l.Body.Contains(queryDto.Search) ||
                                 l.To.Contains(queryDto.Search) ||
                                 (l.ReferenceNumbers != null && l.ReferenceNumbers.Contains(queryDto.Search));
                }

                if (queryDto.Direction.HasValue)
                {
                    var directionFilter = (Expression<Func<Letter, bool>>)(l => l.Direction == queryDto.Direction.Value);
                    filter = filter == null ? directionFilter : filter.And(directionFilter);
                }

                if (queryDto.Confidentiality.HasValue)
                {
                    var confidentialityFilter = (Expression<Func<Letter, bool>>)(l => l.Confidentiality == queryDto.Confidentiality.Value);
                    filter = filter == null ? confidentialityFilter : filter.And(confidentialityFilter);
                }

                if (queryDto.From.HasValue)
                {
                    var fromFilter = (Expression<Func<Letter, bool>>)(l => l.CreatedAt >= queryDto.From.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.To.HasValue)
                {
                    var toFilter = (Expression<Func<Letter, bool>>)(l => l.CreatedAt <= queryDto.To.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                var letters = await _unitOfWork.LetterRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(l => l.CreatedAt));

                var totalCount = letters.Count();
                var items = letters
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<LetterDto>>(items);

                var result = new PaginatedResult<LetterDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<LetterDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<LetterDto>>.ErrorResponse($"خطأ في جلب الخطابات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<LetterDto>> GetByIdAsync(int id)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(id);
                if (letter == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("الخطاب غير موجود");
                }

                var dto = _mapper.Map<LetterDto>(letter);
                return ApiResponse<LetterDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في جلب الخطاب: {ex.Message}");
            }
        }

        public async Task<ApiResponse<LetterDto>> UpdateAsync(int id, UpdateLetterDto updateDto)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(id);
                if (letter == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("الخطاب غير موجود");
                }

                // Check if letter with same subject exists (excluding current letter)
                var existsBySubject = await _unitOfWork.LetterRepository.ExistsBySubjectAsync(updateDto.Subject, id);
                if (existsBySubject)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("يوجد خطاب بنفس الموضوع");
                }

                _mapper.Map(updateDto, letter);
                letter.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.LetterRepository.UpdateAsync(letter);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<LetterDto>(result);

                return ApiResponse<LetterDto>.SuccessResponse(dto, "تم تحديث الخطاب بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في تحديث الخطاب: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(id);
                if (letter == null)
                {
                    return ApiResponse<bool>.ErrorResponse("الخطاب غير موجود");
                }

                await _unitOfWork.LetterRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف الخطاب بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف الخطاب: {ex.Message}");
            }
        }

        // Letter Attachments
        public async Task<ApiResponse<List<LetterAttachmentDto>>> GetAttachmentsAsync(int letterId)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letterId);
                if (letter == null)
                {
                    return ApiResponse<List<LetterAttachmentDto>>.ErrorResponse("الخطاب غير موجود");
                }

                var dtos = _mapper.Map<List<LetterAttachmentDto>>(letter.Attachments);
                return ApiResponse<List<LetterAttachmentDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<LetterAttachmentDto>>.ErrorResponse($"خطأ في جلب المرفقات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<LetterAttachmentDto>> AddAttachmentAsync(int letterId, CreateLetterAttachmentDto attachmentDto, string currentUserId)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(letterId);
                if (letter == null)
                {
                    return ApiResponse<LetterAttachmentDto>.ErrorResponse("الخطاب غير موجود");
                }

                // Save file to storage
                var filePath = await _attachmentFileService.SaveAttachmentAsync(attachmentDto.File, "Tasks");
                // Create Document record
                var document = new Document
                {
                    Title = Path.GetFileNameWithoutExtension(attachmentDto.File.FileName),
                    Type = DocumentType.Task,
                    DocumentSource = attachmentDto.DocumentSource,// حط enum مناسب عندك
                    StoragePath = filePath,
                    Description = attachmentDto.Description,
                    CreatedByUserId = currentUserId,
                    CreatedAt = DateTime.UtcNow,
                };

                await _unitOfWork.DocumentRepository.AddAsync(document);
                await _unitOfWork.SaveAsync();

                // Create TaskAttachment record linking task & document
                var attachment = new LetterAttachment
                {
                    LetterId = letterId,
                    DocumentId = document.Id
                };

                await _unitOfWork.LetterAttachmentRepository.AddAsync(attachment);
                await _unitOfWork.SaveAsync();

                // Prepare DTO
                var dto = new LetterAttachmentDto
                {
                    Id = attachment.Id,
                    LetterId = letterId,
                    FilePath = document.StoragePath,
                    FileType = Path.GetExtension(attachmentDto.File.FileName).ToLowerInvariant(),
                    FileName = attachmentDto.File.FileName,
                    UploadedByUserId = document.CreatedByUserId,
                    UploadedByName = letter.CreatedBy?.UserName ?? string.Empty, // أو هاتها من الـ UserService
                    UploadedAt = document.CreatedAt,
                    Description = document.Description,
                    DocumentSource = attachmentDto.DocumentSource
                };

                return ApiResponse<LetterAttachmentDto>.SuccessResponse(dto, "تم إضافة المرفق بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterAttachmentDto>.ErrorResponse($"خطأ في إضافة المرفق: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveAttachmentAsync(int letterId, int attachmentId)
        {
            try
            {
                var attachment = await _unitOfWork.LetterAttachmentRepository.GetByIdAsync(attachmentId);
                if (attachment == null || attachment.LetterId != letterId)
                {
                    return ApiResponse<bool>.ErrorResponse("المرفق غير موجود");
                }

                await _unitOfWork.LetterAttachmentRepository.DeleteAsync(attachmentId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف المرفق بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف المرفق: {ex.Message}");
            }
        }
    }
}
