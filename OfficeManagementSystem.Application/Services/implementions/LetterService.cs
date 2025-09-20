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
using OfficeManagementSystem.Domain.Enums.Letters;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Newtonsoft.Json;
using OfficeManagementSystem.Domain.Enums.Meeting;
using Org.BouncyCastle.Asn1;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Text.RegularExpressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterService : ILetterService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly IAttachmentFileService _attachmentFileService;
        private readonly ILetterPdfService _letterPdfService;
        private readonly ILetterEmailService _letterEmailService;

        public LetterService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            IAttachmentFileService attachmentFileService,
            ILetterPdfService letterPdfService,
            ILetterEmailService letterEmailService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _attachmentFileService = attachmentFileService;
            _letterPdfService = letterPdfService;
            _letterEmailService = letterEmailService;
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

                

                // Create letter
                var letter = _mapper.Map<Letter>(createDto);
                letter.CreatedByUserId = userId;
                letter.Status = LetterStatus.Draft;
                letter.Body = HtmlToPlainText(letter.BodyHtml);
                if (letter.Kind==AttendeeKind.Internal&& createDto.UserId!=null)
                {
                    var recever = await _userManager.FindByIdAsync(createDto.UserId);
                    if (recever == null)
                    {
                        return ApiResponse<LetterDto>.ErrorResponse("المستخدم غير موجود");
                    }
                    letter.To = recever.Email;
                }
                letter.ReferenceNumbers =await GenerateLetterNumberAsync();
                //// Serialize formatting to JSON
                //if (createDto.BodyFormatting != null)
                //{
                //    letter.BodyFormatting = JsonConvert.SerializeObject(createDto.BodyFormatting);
                //}

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
                if (queryDto.Status.HasValue)
                {
                    var statusFilter = (Expression<Func<Letter, bool>>)(l => l.Status == queryDto.Status);
                    filter = filter == null ? statusFilter : filter.And(statusFilter);
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

        public async Task<ApiResponse<PaginatedResult<LetterDto>>> GetAllForApprovalAsync(LetterQueryDto queryDto)
        {
            try
            {
                Expression<Func<Letter, bool>>? filter = l => l.Status == LetterStatus.PendingApproval;

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

        public async Task<ApiResponse<Letter>> GetByIdWithDetailsAsync(int id)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(id);
                if (letter == null)
                {
                    return ApiResponse<Letter>.ErrorResponse("الخطاب غير موجود");
                }

                return ApiResponse<Letter>.SuccessResponse(letter);
            }
            catch (Exception ex)
            {
                return ApiResponse<Letter>.ErrorResponse($"خطأ في جلب الخطاب: {ex.Message}");
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
                //if (existsBySubject)
                //{
                //    return ApiResponse<LetterDto>.ErrorResponse("يوجد خطاب بنفس الموضوع");
                //}

                _mapper.Map(updateDto, letter);
                letter.UpdatedAt = DateTime.UtcNow;
                letter.Body = HtmlToPlainText(letter.BodyHtml);
                if (letter.Kind == AttendeeKind.Internal && updateDto.UserId != null)
                {
                    var recever = await _userManager.FindByIdAsync(updateDto.UserId);
                    if (recever == null)
                    {
                        return ApiResponse<LetterDto>.ErrorResponse("المستخدم غير موجود");
                    }
                    letter.To = recever.Email;
                }
                letter.ReferenceNumbers = await GenerateLetterNumberAsync();

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

        // Approval Methods
        public async Task<ApiResponse<LetterDto>> SubmitForApprovalAsync(int letterId, string userId)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(letterId);
                if (letter == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("الخطاب غير موجود");
                }

                if (letter.Status != LetterStatus.Draft)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("لا يمكن تقديم هذا الخطاب للاعتماد");
                }

                letter.Status = LetterStatus.PendingApproval;
                letter.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.LetterRepository.UpdateAsync(letter);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letterId);
                var dto = _mapper.Map<LetterDto>(result);

                return ApiResponse<LetterDto>.SuccessResponse(dto, "تم تقديم الخطاب للاعتماد بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في تقديم الخطاب للاعتماد: {ex.Message}");
            }
        }

        public async Task<ApiResponse<LetterDto>> ApproveLetterAsync(int letterId, ApproveLetterDto approveDto, string approverUserId)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(letterId);
                if (letter == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("الخطاب غير موجود");
                }

                if (letter.Status != LetterStatus.PendingApproval)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("هذا الخطاب غير مقدم للاعتماد");
                }

                // Save signature image
                var signaturePath = await _attachmentFileService.SaveAttachmentAsync(approveDto.SignatureImage, "Signatures");
                
                letter.Status = LetterStatus.Approved;
                letter.ApprovedByUserId = approverUserId;
                letter.ApprovedAt = DateTime.UtcNow;
                letter.SignatureImagePath = signaturePath;
                letter.ApprovalNotes = approveDto.ApprovalNotes;
                letter.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.LetterRepository.UpdateAsync(letter);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letterId);
                var dto = _mapper.Map<LetterDto>(result);

                return ApiResponse<LetterDto>.SuccessResponse(dto, "تم اعتماد الخطاب بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في اعتماد الخطاب: {ex.Message}");
            }
        }

        public async Task<ApiResponse<LetterDto>> RejectLetterAsync(int letterId, RejectLetterDto rejectDto, string rejectorUserId)
        {
            try
            {
                var letter = await _unitOfWork.LetterRepository.GetByIdAsync(letterId);
                if (letter == null)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("الخطاب غير موجود");
                }

                if (letter.Status != LetterStatus.PendingApproval)
                {
                    return ApiResponse<LetterDto>.ErrorResponse("هذا الخطاب غير مقدم للاعتماد");
                }

                letter.Status = LetterStatus.Rejected;
                letter.ApprovedByUserId = rejectorUserId;
                letter.ApprovedAt = DateTime.UtcNow;
                letter.ApprovalNotes = rejectDto.RejectionReason;
                letter.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.LetterRepository.UpdateAsync(letter);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letterId);
                var dto = _mapper.Map<LetterDto>(result);

                return ApiResponse<LetterDto>.SuccessResponse(dto, "تم رفض الخطاب");
            }
            catch (Exception ex)
            {
                return ApiResponse<LetterDto>.ErrorResponse($"خطأ في رفض الخطاب: {ex.Message}");
            }
        }

        // Email Sending Methods
        public async Task<ApiResponse<LetterEmailStatusDto>> SendLetterEmailAsync(int letterId, SendLetterEmailDto emailDto, string senderUserId)
        {
            try
            {
               
                
                var letter = await _unitOfWork.LetterRepository.GetByIdWithDetailsAsync(letterId);
                if (letter == null)
                {
                   
                    return ApiResponse<LetterEmailStatusDto>.ErrorResponse("الخطاب غير موجود");
                }

                
                //if (letter.Attachments != null && letter.Attachments.Any())
                //{
                //    foreach (var attachment in letter.Attachments)
                //    {
                //        Console.WriteLine($"- مرفق: {attachment.Document?.Title}, المسار: {attachment.Document?.StoragePath}");
                //    }
                //}

                

                if (letter.Status != LetterStatus.Approved)
                {
                    
                    return ApiResponse<LetterEmailStatusDto>.ErrorResponse("يجب اعتماد الخطاب قبل الإرسال");
                }

                // Generate PDF with signature
                
                var pdfPath = await _letterPdfService.GenerateLetterPdfAsync(letter);
               
                
                // Send email with PDF attachment
               
                var emailSent = await _letterEmailService.SendLetterEmailAsync(emailDto, pdfPath, letter);
               
                
                if (emailSent)
                {
                    // Update letter status
                    letter.Status = LetterStatus.Sent;
                    letter.IsEmailSent = true;
                    letter.EmailSentAt = DateTime.UtcNow;
                    letter.PdfPath = pdfPath;
                    letter.UpdatedAt = DateTime.UtcNow;

                    await _unitOfWork.LetterRepository.UpdateAsync(letter);
                    await _unitOfWork.SaveAsync();

                    var statusDto = new LetterEmailStatusDto
                    {
                        IsEmailSent = true,
                        EmailSentAt = letter.EmailSentAt,
                        PdfPath = letter.PdfPath
                    };

                    return ApiResponse<LetterEmailStatusDto>.SuccessResponse(statusDto, "تم إرسال الخطاب بنجاح");
                }
                else
                {
                    
                    return ApiResponse<LetterEmailStatusDto>.ErrorResponse("فشل في إرسال الميل");
                }
            }
            catch (Exception ex)
            {
                
                return ApiResponse<LetterEmailStatusDto>.ErrorResponse($"خطأ في إرسال الخطاب: {ex.Message}");
            }
        }

        private async Task<string> GenerateLetterNumberAsync()
        {
            var year = DateTime.Now.Year;
            var month = DateTime.Now.Month;
            var random = new Random();
            var randomNumber = random.Next(100000, 999999);

            return $"LET-{year}-{month}-{randomNumber}";
        }
        private static string HtmlToPlainText(string html)
        {
            return Regex.Replace(html, "<.*?>", string.Empty)  // يشيل التاجات
                         .Replace("&nbsp;", " ")
                         .Trim();
        }


    }
}
