using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class DocumentService : IDocumentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly IAttachmentFileService _attachmentFileService;
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public DocumentService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            IAttachmentFileService attachmentFileService,
            IConfiguration configuration,
            IWebHostEnvironment env)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _attachmentFileService = attachmentFileService;
            _configuration = configuration;
            _env = env;
        }

        public async Task<ApiResponse<DocumentDto>> CreateAsync(CreateDocumentDto createDto, string userId)
        {
            try
            {
                // Validate user exists
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<DocumentDto>.ErrorResponse("المستخدم غير موجود");
                }

                // Check if document with same title exists
                var existsByTitle = await _unitOfWork.DocumentRepository.ExistsByTitleAsync(createDto.Title);
                if (existsByTitle)
                {
                    return ApiResponse<DocumentDto>.ErrorResponse("يوجد مستند بنفس العنوان");
                }
                var fileSize = createDto.File.Length;
                // Save file
                var filePath = await _attachmentFileService.SaveAttachmentAsync(createDto.File, "Documents");


                // Create document
                var document = _mapper.Map<Document>(createDto);
                document.CreatedByUserId = userId;
                document.StoragePath = filePath;
                document.FileSize= fileSize;

                await _unitOfWork.DocumentRepository.AddAsync(document);
                await _unitOfWork.SaveAsync();

                // Get document with details
                var result = await _unitOfWork.DocumentRepository.GetByIdWithDetailsAsync(document.Id);
                var dto = _mapper.Map<DocumentDto>(result);

                return ApiResponse<DocumentDto>.SuccessResponse(dto, "تم إنشاء المستند بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<DocumentDto>.ErrorResponse($"خطأ في إنشاء المستند: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<DocumentDto>>> GetAllAsync(DocumentQueryDto queryDto)
        {
            try
            {
                Expression<Func<Document, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = d => d.Title.Contains(queryDto.Search) || 
                                 (d.Description != null && d.Description.Contains(queryDto.Search));
                }

                if (queryDto.Type.HasValue)
                {
                    var typeFilter = (Expression<Func<Document, bool>>)(d => d.Type == queryDto.Type.Value);
                    filter = filter == null ? typeFilter : filter.And(typeFilter);
                }

                if (queryDto.DocumentSource.HasValue)
                {
                    var sourceFilter = (Expression<Func<Document, bool>>)(d => d.DocumentSource == queryDto.DocumentSource.Value);
                    filter = filter == null ? sourceFilter : filter.And(sourceFilter);
                }

                if (queryDto.From.HasValue)
                {
                    var fromFilter = (Expression<Func<Document, bool>>)(d => d.CreatedAt >= queryDto.From.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.To.HasValue)
                {
                    var toFilter = (Expression<Func<Document, bool>>)(d => d.CreatedAt <= queryDto.To.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                var documents = await _unitOfWork.DocumentRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(d => d.CreatedAt));

                var totalCount = documents.Count();
                var items = documents
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<DocumentDto>>(items);

                var result = new PaginatedResult<DocumentDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<DocumentDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<DocumentDto>>.ErrorResponse($"خطأ في جلب المستندات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<DocumentDto>> GetByIdAsync(int id)
        {
            try
            {
                var document = await _unitOfWork.DocumentRepository.GetByIdWithDetailsAsync(id);
                if (document == null)
                {
                    return ApiResponse<DocumentDto>.ErrorResponse("المستند غير موجود");
                }

                var dto = _mapper.Map<DocumentDto>(document);
                return ApiResponse<DocumentDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<DocumentDto>.ErrorResponse($"خطأ في جلب المستند: {ex.Message}");
            }
        }

        public async Task<ApiResponse<DocumentDto>> UpdateAsync(int id, UpdateDocumentDto updateDto)
        {
            try
            {
                var document = await _unitOfWork.DocumentRepository.GetByIdAsync(id);
                if (document == null)
                {
                    return ApiResponse<DocumentDto>.ErrorResponse("المستند غير موجود");
                }

                // Check if document with same title exists (excluding current document)
                var existsByTitle = await _unitOfWork.DocumentRepository.ExistsByTitleAsync(updateDto.Title, id);
                if (existsByTitle)
                {
                    return ApiResponse<DocumentDto>.ErrorResponse("يوجد مستند بنفس العنوان");
                }

                _mapper.Map(updateDto, document);
                document.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.DocumentRepository.UpdateAsync(document);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.DocumentRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<DocumentDto>(result);

                return ApiResponse<DocumentDto>.SuccessResponse(dto, "تم تحديث المستند بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<DocumentDto>.ErrorResponse($"خطأ في تحديث المستند: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var document = await _unitOfWork.DocumentRepository.GetByIdAsync(id);
                if (document == null)
                {
                    return ApiResponse<bool>.ErrorResponse("المستند غير موجود");
                }

                // Check if document is used in any attachments
                var taskAttachments = await _unitOfWork.TaskAttachmentRepository.GetAllAsync(ta => ta.DocumentId == id);
                var meetingAttachments = await _unitOfWork.MeetingAttachmentRepository.GetAllAsync(ma => ma.DocumentId == id);

                if (taskAttachments.Any() || meetingAttachments.Any())
                {
                    return ApiResponse<bool>.ErrorResponse("لا يمكن حذف المستند لأنه مستخدم في مرفقات أخرى");
                }

                // Delete physical file
                try
                {
                    if (System.IO.File.Exists(document.StoragePath))
                    {
                        System.IO.File.Delete(document.StoragePath);
                    }
                }
                catch
                {
                    // Log error but continue with database deletion
                }

                await _unitOfWork.DocumentRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف المستند بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف المستند: {ex.Message}");
            }
        }

        public async Task<ApiResponse<byte[]>> DownloadAsync(int id)
        {
            try
            {
                var document = await _unitOfWork.DocumentRepository.GetByIdAsync(id);
                if (document == null)
                    return ApiResponse<byte[]>.ErrorResponse("المستند غير موجود");

                var filePath = Path.Combine(_env.WebRootPath, document.StoragePath);
                // تأكد إن document.StoragePath بيكون نسبي (مثلاً: "uploads/file.pdf")

                if (!System.IO.File.Exists(filePath))
                    return ApiResponse<byte[]>.ErrorResponse("ملف المستند غير موجود");

                var fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
                return ApiResponse<byte[]>.SuccessResponse(fileBytes, "تم تحميل المستند بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<byte[]>.ErrorResponse($"خطأ في تحميل المستند: {ex.Message}");
            }
        }
    }
}
