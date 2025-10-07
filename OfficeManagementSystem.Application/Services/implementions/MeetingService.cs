using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Documents;
using OfficeManagementSystem.Domain.Entity.Meeting;
using OfficeManagementSystem.Domain.Entity.Tasks;
using OfficeManagementSystem.Domain.Enums;
using OfficeManagementSystem.Domain.Enums.Meeting;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using OfficeManagementSystem.Domain.Sharing;
using System.Linq.Expressions;
using System.Net.Mail;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class MeetingService : IMeetingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly ISendNotificationService _notificationService;
        private readonly IEmailService _emailService;
        private readonly IMeetingEmailService _meetingEmailService;
        private readonly IConfiguration _configuration;
        private readonly IAttachmentFileService _attachmentFileService;
        private readonly IWebHostEnvironment _env;

        public MeetingService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            ISendNotificationService notificationService,
            IEmailService emailService,
            IMeetingEmailService meetingEmailService,
            IConfiguration configuration,
            IAttachmentFileService attachmentFileService,
            IWebHostEnvironment env)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _notificationService = notificationService;
            _emailService = emailService;
            _meetingEmailService = meetingEmailService;
            _configuration = configuration;
            _attachmentFileService = attachmentFileService;
            _env = env;
        }

        public async Task<ApiResponse<MeetingDto>> CreateAsync(CreateMeetingDto createDto, string organizerUserId)
        {
            try
            {
                // Validate organizer exists
                var organizer = await _userManager.FindByIdAsync(organizerUserId);
                if (organizer == null)
                {
                    return ApiResponse<MeetingDto>.ErrorResponse("منظم الاجتماع غير موجود");
                }

                // Check for place conflicts if place is specified
                if (!string.IsNullOrEmpty(createDto.LocationText))
                {
                    var hasConflict = await _unitOfWork.MeetingRepository.HasConflictingMeetingsAsync(
                        createDto.LocationText, createDto.StartAt, createDto.EndAt);
                    
                    if (hasConflict)
                    {
                        return ApiResponse<MeetingDto>.ErrorResponse("المكان محجوز في هذا الوقت");
                    }
                }

                // Create meeting
                var meeting = _mapper.Map<Meeting>(createDto);
                meeting.OrganizerUserId = organizerUserId;
                meeting.CreatedByUserId = organizerUserId;
                meeting.Status = MeetingStatus.Scheduled;

                var worklog = new WorkflowLog
                {
                    EntityName = "Meeting",
                    EntityId = meeting.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"New Meeting Create '{meeting.Title}' At {DateTime.UtcNow} Meeting Date From {meeting.StartAt} To {meeting.EndAt} , Meeting Location {meeting.LocationText ?? meeting.OnlineUrl}",
                    UserId = meeting.CreatedByUserId,
                };
                
                await _unitOfWork.MeetingRepository.AddAsync(meeting);
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.SaveAsync();


                // Get meeting with details
                var result = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meeting.Id);
                var dto = _mapper.Map<MeetingDto>(result);

                // Send notifications to attendees
                await SendMeetingInvitationsAsync(meeting);

                return ApiResponse<MeetingDto>.SuccessResponse(dto, "تم إنشاء الاجتماع بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingDto>.ErrorResponse($"خطأ في إنشاء الاجتماع: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<MeetingDto>>> GetAllAsync(MeetingQueryDto queryDto)
        {
            try
            {
                Expression<Func<Meeting, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = m => m.Title.Contains(queryDto.Search) || 
                                 (m.Agenda != null && m.Agenda.Contains(queryDto.Search));
                }

                if (queryDto.Status.HasValue)
                {
                    var statusFilter = (Expression<Func<Meeting, bool>>)(m => m.Status == queryDto.Status.Value);
                    filter = filter == null ? statusFilter : filter.And(statusFilter);
                }

                if (queryDto.From.HasValue)
                {
                    var fromFilter = (Expression<Func<Meeting, bool>>)(m => m.StartAt >= queryDto.From.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.To.HasValue)
                {
                    var toFilter = (Expression<Func<Meeting, bool>>)(m => m.StartAt <= queryDto.To.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                var meetings = await _unitOfWork.MeetingRepository.GetAllAsync(
                    filter,
                    q => q.OrderByDescending(m => m.StartAt));

                var totalCount = meetings.Count();
                var items = meetings
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<MeetingDto>>(items);

                var result = new PaginatedResult<MeetingDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<MeetingDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<MeetingDto>>.ErrorResponse($"خطأ في جلب الاجتماعات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingDto>> GetByIdAsync(int id)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(id);
                if (meeting == null)
                {
                    return ApiResponse<MeetingDto>.ErrorResponse("الاجتماع غير موجود");
                }

                var dto = _mapper.Map<MeetingDto>(meeting);
                return ApiResponse<MeetingDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingDto>.ErrorResponse($"خطأ في جلب الاجتماع: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingDto>> UpdateAsync(int id, UpdateMeetingDto updateDto, string userId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(id);
                if (meeting == null)
                {
                    return ApiResponse<MeetingDto>.ErrorResponse("الاجتماع غير موجود");
                }

                // Check for place conflicts if place is being changed
                if (!string.IsNullOrEmpty(updateDto.LocationText) && updateDto.LocationText != meeting.LocationText)
                {
                    var hasConflict = await _unitOfWork.MeetingRepository.HasConflictingMeetingsAsync(
                        updateDto.LocationText, updateDto.StartAt, updateDto.EndAt, id);
                    
                    if (hasConflict)
                    {
                        return ApiResponse<MeetingDto>.ErrorResponse("المكان محجوز في هذا الوقت");
                    }
                }

                _mapper.Map(updateDto, meeting);
                meeting.UpdatedAt = DateTime.UtcNow;
                var worklog = new WorkflowLog
                {
                    EntityName = "Meeting",
                    EntityId = meeting.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Meeting Update '{meeting.Title}' At {DateTime.UtcNow} Meeting Date From {meeting.StartAt} To {meeting.EndAt} , Meeting Location {meeting.LocationText ?? meeting.OnlineUrl}",
                    UserId = userId,
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.MeetingRepository.UpdateAsync(meeting);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<MeetingDto>(result);

                return ApiResponse<MeetingDto>.SuccessResponse(dto, "تم تحديث الاجتماع بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingDto>.ErrorResponse($"خطأ في تحديث الاجتماع: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> UpdateStatusAsync(int id, UpdateMeetingStatusDto statusDto,string userId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(id);
                if (meeting == null)
                {
                    return ApiResponse<bool>.ErrorResponse("الاجتماع غير موجود");
                }
                var oldStatus = meeting.Status.ToString();
                meeting.Status = statusDto.Status;
                meeting.UpdatedAt = DateTime.UtcNow;

                var worklog = new WorkflowLog
                {
                    EntityName = "Meeting",
                    EntityId = meeting.Id,
                    ActionType = WorkflowActionType.StatusChanged,
                    Description = $"Meeting '{meeting.Title}' status changed from {oldStatus} to {meeting.Status.ToString()}",
                    UserId = userId,
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingRepository.UpdateAsync(meeting);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم تحديث حالة الاجتماع بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في تحديث حالة الاجتماع: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id, string userId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(id);
                if (meeting == null)
                {
                    return ApiResponse<bool>.ErrorResponse("الاجتماع غير موجود");
                }
                var worklog = new WorkflowLog
                {
                    EntityName = "Meeting",
                    EntityId = meeting.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Meeting '{meeting.Title}' Deleted",
                    UserId = userId,
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف الاجتماع بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف الاجتماع: {ex.Message}");
            }
        }

        // Meeting Attachments
        public async Task<ApiResponse<List<MeetingAttachmentDto>>> GetAttachmentsAsync(int meetingId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<List<MeetingAttachmentDto>>.ErrorResponse("الاجتماع غير موجود");
                }

                var attachments = await _unitOfWork.MeetingAttachmentRepository.GetAllAsync(m=>m.MeetingId == meetingId,includeProperties: "Document");

                // Include Document info in DTO
                var attachmentDtos = attachments.Select(a => new MeetingAttachmentDto
                {
                    Id = a.Id,
                    MeetingId = a.MeetingId,
                    FilePath = a.Document.StoragePath,
                    FileType = Path.GetExtension(a.Document.StoragePath).ToLowerInvariant(),
                    FileName = a.Document.Title,
                    UploadedByUserId = a.Document.CreatedByUserId,
                    UploadedByName = (a.Document.CreatedBy != null) ? $"{a.Document.CreatedBy.FirstName} {a.Document.CreatedBy.LastName}" : "",
                    UploadedAt = a.Document.CreatedAt,
                    Description = a.Document.Description,
                    DocumentSource=a.Document.DocumentSource
                }).ToList();
                return ApiResponse<List<MeetingAttachmentDto>>.SuccessResponse(attachmentDtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<MeetingAttachmentDto>>.ErrorResponse($"خطأ في جلب المرفقات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingAttachmentDto>> AddAttachmentAsync(int meetingId, CreateMeetingAttachmentDto attachmentDto,string userId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<MeetingAttachmentDto>.ErrorResponse("الاجتماع غير موجود");
                }
                var filePath = await _attachmentFileService.SaveAttachmentAsync(attachmentDto.File, "Meeting");

                // Create Document record
                var document = new Document
                {
                    Title = Path.GetFileNameWithoutExtension(attachmentDto.File.FileName),
                    Type = DocumentType.Task, // حط enum مناسب عندك
                    StoragePath = filePath,
                    Description = attachmentDto.Description,
                    CreatedByUserId = userId,
                    CreatedAt = DateTime.UtcNow,
                    DocumentSource=attachmentDto.DocumentSource,
                    FileSize=attachmentDto.File.Length
                };
                var worklog = new WorkflowLog
                {
                    EntityName = "Meeting",
                    EntityId = meeting.Id,
                    ActionType = WorkflowActionType.AttachmentAdded,
                    Description = $"New Attachment For  Meeting '{meeting.Title}' ",
                    UserId = userId,
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.DocumentRepository.AddAsync(document);
                await _unitOfWork.SaveAsync();

                var attachment = new MeetingAttachment
                {
                    MeetingId = meetingId,
                    DocumentId = document.Id
                };


                await _unitOfWork.MeetingAttachmentRepository.AddAsync(attachment);
                await _unitOfWork.SaveAsync();

                // Prepare DTO
                var dto = new MeetingAttachmentDto
                {
                    Id = attachment.Id,
                    MeetingId = meetingId,
                    FilePath = document.StoragePath,
                    FileType = Path.GetExtension(attachmentDto.File.FileName).ToLowerInvariant(),
                    FileName = attachmentDto.File.FileName,
                    UploadedByUserId = document.CreatedByUserId,
                    UploadedAt = document.CreatedAt,
                    Description = document.Description,
                    DocumentSource=document.DocumentSource,
                    DocumentId=document.Id,
                };

                return ApiResponse<MeetingAttachmentDto>.SuccessResponse(dto, "تم إضافة المرفق بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingAttachmentDto>.ErrorResponse($"خطأ في إضافة المرفق: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveAttachmentAsync(int meetingId, int attachmentId, string userId)
        {
            try
            {
                var attachment = await _unitOfWork.MeetingAttachmentRepository.GetByIdAsync(attachmentId);
                if (attachment == null || attachment.MeetingId != meetingId)
                {
                    return ApiResponse<bool>.ErrorResponse("المرفق غير موجود");
                }
                var worklog = new WorkflowLog
                {
                    EntityName = "Attachment",
                    EntityId = attachment.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Attachment added to Meeting '{attachment.MeetingId}'",
                    UserId = userId // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);
                await _unitOfWork.MeetingAttachmentRepository.DeleteAsync(attachmentId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف المرفق بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف المرفق: {ex.Message}");
            }
        }

        public async Task<ApiResponse<FileDownloadDto>> DownloadAttachmentAsync(int meetingId, int attachmentId)
        {
            try
            {
                var attachment = await _unitOfWork.MeetingAttachmentRepository.GetByIdAsync(attachmentId);
                if (attachment == null || attachment.MeetingId != meetingId)
                {
                    return ApiResponse<FileDownloadDto>.ErrorResponse("المرفق غير موجود");
                }

                var document = await _unitOfWork.DocumentRepository.GetByIdAsync(attachment.DocumentId);
                if (document == null)
                {
                    return ApiResponse<FileDownloadDto>.ErrorResponse("المستند غير موجود");
                }

                var filePath = Path.Combine(_env.WebRootPath, document.StoragePath);
                if (!System.IO.File.Exists(filePath))
                {
                    return ApiResponse<FileDownloadDto>.ErrorResponse("الملف غير موجود على الخادم");
                }

                var fileBytes = await System.IO.File.ReadAllBytesAsync(filePath);
                var contentType = GetContentType(Path.GetExtension(document.StoragePath));

                var downloadDto = new FileDownloadDto
                {
                    FileBytes = fileBytes,
                    ContentType = contentType,
                    FileName = document.Title + Path.GetExtension(document.StoragePath)
                };

                return ApiResponse<FileDownloadDto>.SuccessResponse(downloadDto, "تم تحميل الملف بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<FileDownloadDto>.ErrorResponse($"خطأ في تحميل الملف: {ex.Message}");
            }
        }

        // Meeting Attendees
        public async Task<ApiResponse<List<MeetingAttendeeDto>>> GetAttendeesAsync(int meetingId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<List<MeetingAttendeeDto>>.ErrorResponse("الاجتماع غير موجود");
                }

                var dtos = _mapper.Map<List<MeetingAttendeeDto>>(meeting.Attendees);
                return ApiResponse<List<MeetingAttendeeDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<MeetingAttendeeDto>>.ErrorResponse($"خطأ في جلب الحضور: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingAttendeeDto>> AddAttendeeAsync(int meetingId, CreateMeetingAttendeeDto attendeeDto)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<MeetingAttendeeDto>.ErrorResponse("الاجتماع غير موجود");
                }

                // Validate internal attendee
                if (attendeeDto.Kind == AttendeeKind.Internal && !string.IsNullOrEmpty(attendeeDto.UserId))
                {
                    var user = await _userManager.FindByIdAsync(attendeeDto.UserId);
                    if (user == null)
                    {
                        return ApiResponse<MeetingAttendeeDto>.ErrorResponse("المستخدم غير موجود");
                    }
                }

                var attendee = _mapper.Map<MeetingAttendee>(attendeeDto);
                attendee.MeetingId = meetingId;
                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingAttendee",
                    EntityId = attendee.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"Attendee '{attendeeDto.DisplayName ?? attendeeDto.UserId}' added to Meeting '{meeting.Title}'",
                    UserId = meeting.CreatedByUserId // أو خده من الـ Context حسب المستخدم الحالي
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingAttendeeRepository.AddAsync(attendee);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendee.Id);
                var dto = _mapper.Map<MeetingAttendeeDto>(result);

                await SendMeetingInvitationsIndevedualAsync(meeting, result);

                return ApiResponse<MeetingAttendeeDto>.SuccessResponse(dto, "تم إضافة الحضور بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingAttendeeDto>.ErrorResponse($"خطأ في إضافة الحضور: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingAttendeeDto>> UpdateAttendeeAsync(int meetingId, int attendeeId, UpdateMeetingAttendeeDto attendeeDto,string UserId)
        {
            try
            {
                var attendee = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendeeId);
                if (attendee == null || attendee.MeetingId != meetingId)
                {
                    return ApiResponse<MeetingAttendeeDto>.ErrorResponse("الحضور غير موجود");
                }

                _mapper.Map(attendeeDto, attendee);

                // 📝 Log
                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingAttendee",
                    EntityId = attendee.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Attendee '{attendeeDto.DisplayName ?? attendee.UserId}' updated in Meeting '{attendee.MeetingId}'",
                    UserId = UserId  // لو عندك UserId للـ actor
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingAttendeeRepository.UpdateAsync(attendee);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendeeId);
                var dto = _mapper.Map<MeetingAttendeeDto>(result);

                return ApiResponse<MeetingAttendeeDto>.SuccessResponse(dto, "تم تحديث الحضور بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingAttendeeDto>.ErrorResponse($"خطأ في تحديث الحضور: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveAttendeeAsync(int meetingId, int attendeeId,string userID)
        {
            try
            {
                var attendee = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendeeId);
                if (attendee == null || attendee.MeetingId != meetingId)
                {
                    return ApiResponse<bool>.ErrorResponse("الحضور غير موجود");
                }

                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingAttendee",
                    EntityId = attendeeId,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Attendee '{attendee.UserId}' removed from Meeting '{meetingId}'",
                    UserId = userID // أو الـ UserId بتاع اللي عمل الحذف
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingAttendeeRepository.DeleteAsync(attendeeId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف الحضور بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف الحضور: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingAttendeeDto>> UpdateAttendeeStatusAsync(int meetingId, int attendeeId, UpdateAttendeeStatusDto statusDto, string userId)
        {
            try
            {
                var attendee = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendeeId);
                if (attendee == null || attendee.MeetingId != meetingId)
                {
                    return ApiResponse<MeetingAttendeeDto>.ErrorResponse("الحضور غير موجود");
                }

                var oldStatus = attendee.AttendanceStatus.ToString();
                attendee.AttendanceStatus = statusDto.AttendanceStatus;
                
                if (!string.IsNullOrEmpty(statusDto.Notes))
                {
                    attendee.Notes = statusDto.Notes;
                }

                // Log the status change
                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingAttendee",
                    EntityId = attendeeId,
                    ActionType = WorkflowActionType.StatusChanged,
                    Description = $"Attendee '{attendee.UserId ?? attendee.DisplayName}' status changed from {oldStatus} to {attendee.AttendanceStatus.ToString()} in Meeting '{meetingId}'",
                    UserId = userId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingAttendeeRepository.UpdateAsync(attendee);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingAttendeeRepository.GetByIdAsync(attendeeId);
                var dto = _mapper.Map<MeetingAttendeeDto>(result);

                return ApiResponse<MeetingAttendeeDto>.SuccessResponse(dto, "تم تحديث حالة الحضور بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingAttendeeDto>.ErrorResponse($"خطأ في تحديث حالة الحضور: {ex.Message}");
            }
        }

        // Meeting Minutes
        public async Task<ApiResponse<MeetingMinutesDto>> GetMinutesAsync(int meetingId)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<MeetingMinutesDto>.ErrorResponse("الاجتماع غير موجود");
                }

                if (meeting.Minutes == null)
                {
                    return ApiResponse<MeetingMinutesDto>.ErrorResponse("لا توجد محاضر لهذا الاجتماع");
                }

                var dto = _mapper.Map<MeetingMinutesDto>(meeting.Minutes);
                return ApiResponse<MeetingMinutesDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingMinutesDto>.ErrorResponse($"خطأ في جلب المحاضر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingMinutesDto>> CreateMinutesAsync(int meetingId, CreateMeetingMinutesDto minutesDto)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<MeetingMinutesDto>.ErrorResponse("الاجتماع غير موجود");
                }

                var existingMinutes = await _unitOfWork.MeetingMinutesRepository.GetAllAsync(
                    m => m.MeetingId == meetingId);

                if (existingMinutes.Any())
                {
                    return ApiResponse<MeetingMinutesDto>.ErrorResponse("يوجد محاضر لهذا الاجتماع بالفعل");
                }

                var minutes = _mapper.Map<MeetingMinutes>(minutesDto);
                minutes.MeetingId = meetingId;

                // 📝 Log
                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingMinutes",
                    EntityId = minutes.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"Minutes created for Meeting '{meeting.Title}' at {DateTime.UtcNow}",
                    UserId = meeting.CreatedByUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingMinutesRepository.AddAsync(minutes);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingMinutesRepository.GetByIdAsync(minutes.Id);
                var dto = _mapper.Map<MeetingMinutesDto>(result);

                // إرسال محضر الاجتماع عبر البريد الإلكتروني لجميع الحضور
                try
                {
                    var meetingWithDetails = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meetingId);
                    if (meetingWithDetails != null)
                    {
                        
                        
                        var emailSent = await _meetingEmailService.SendMeetingMinutesEmailAsync(meetingWithDetails, minutes);
                        
                    }
                    
                }
                catch (Exception emailEx)
                {
                    Console.WriteLine($"❌ خطأ في إرسال البريد الإلكتروني: {emailEx.Message}");
                    Console.WriteLine($"Stack trace: {emailEx.StackTrace}");
                    // لا نوقف العملية، المحضر تم حفظه بنجاح
                }

                return ApiResponse<MeetingMinutesDto>.SuccessResponse(dto, "تم إنشاء المحاضر بنجاح وإرسال البريد الإلكتروني");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingMinutesDto>.ErrorResponse($"خطأ في إنشاء المحاضر: {ex.Message}");
            }
        }

        public async Task<ApiResponse<MeetingMinutesDto>> UpdateMinutesAsync(int meetingId, UpdateMeetingMinutesDto minutesDto,string userId)
        {
            try
            {
                var minutes = await _unitOfWork.MeetingMinutesRepository.GetAllAsync(m => m.MeetingId == meetingId);
                var existingMinutes = minutes.FirstOrDefault();

                if (existingMinutes == null)
                {
                    return ApiResponse<MeetingMinutesDto>.ErrorResponse("لا توجد محاضر لهذا الاجتماع");
                }

                _mapper.Map(minutesDto, existingMinutes);
                // 📝 Log
                var worklog = new WorkflowLog
                {
                    EntityName = "MeetingMinutes",
                    EntityId = existingMinutes.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Minutes updated for Meeting '{meetingId}' at {DateTime.UtcNow}",
                    UserId = userId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.MeetingMinutesRepository.UpdateAsync(existingMinutes);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.MeetingMinutesRepository.GetByIdAsync(existingMinutes.Id);
                var dto = _mapper.Map<MeetingMinutesDto>(result);

                // إرسال محضر الاجتماع المحدث عبر البريد الإلكتروني لجميع الحضور
                try
                {
                    Console.WriteLine($"🔄 محاولة إرسال محضر الاجتماع المحدث للاجتماع رقم: {meetingId}");
                    var meetingWithDetails = await _unitOfWork.MeetingRepository.GetByIdWithDetailsAsync(meetingId);
                    if (meetingWithDetails != null)
                    {
                        Console.WriteLine($"✓ تم جلب تفاصيل الاجتماع بنجاح");
                        Console.WriteLine($"عدد الحضور المحملين: {meetingWithDetails.Attendees?.Count ?? 0}");
                        
                        var emailSent = await _meetingEmailService.SendMeetingMinutesEmailAsync(meetingWithDetails, existingMinutes);
                        if (emailSent)
                        {
                            Console.WriteLine("✅ تم إرسال محضر الاجتماع المحدث عبر البريد الإلكتروني بنجاح");
                        }
                        else
                        {
                            Console.WriteLine("❌ فشل في إرسال محضر الاجتماع المحدث عبر البريد الإلكتروني");
                        }
                    }
                    else
                    {
                        Console.WriteLine($"❌ فشل في جلب تفاصيل الاجتماع للاجتماع رقم: {meetingId}");
                    }
                }
                catch (Exception emailEx)
                {
                    Console.WriteLine($"❌ خطأ في إرسال البريد الإلكتروني: {emailEx.Message}");
                    Console.WriteLine($"Stack trace: {emailEx.StackTrace}");
                    // لا نوقف العملية، المحضر تم تحديثه بنجاح
                }

                return ApiResponse<MeetingMinutesDto>.SuccessResponse(dto, "تم تحديث المحاضر بنجاح وإرسال البريد الإلكتروني");
            }
            catch (Exception ex)
            {
                return ApiResponse<MeetingMinutesDto>.ErrorResponse($"خطأ في تحديث المحاضر: {ex.Message}");
            }
        }

        // Recommendations
        public async Task<ApiResponse<List<RecommendationDto>>> GetRecommendationsAsync(int meetingId)
        {
            try
            {
                var Recommendations = await _unitOfWork.RecommendationRepository
                    .GetAllAsync(m=>m.MeetingId==meetingId,
                    includeProperties: "User");
                if (Recommendations == null)
                {
                    return ApiResponse<List<RecommendationDto>>.ErrorResponse("الاجتماع غير موجود");
                }

                var dtos = _mapper.Map<List<RecommendationDto>>(Recommendations);
                return ApiResponse<List<RecommendationDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<RecommendationDto>>.ErrorResponse($"خطأ في جلب التوصيات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RecommendationDto>> AddRecommendationAsync(int meetingId, CreateRecommendationDto recommendationDto)
        {
            try
            {
                var meeting = await _unitOfWork.MeetingRepository.GetByIdAsync(meetingId);
                if (meeting == null)
                {
                    return ApiResponse<RecommendationDto>.ErrorResponse("الاجتماع غير موجود");
                }

                var recommendation = _mapper.Map<Recommendation>(recommendationDto);
                recommendation.MeetingId = meetingId;
                

                var worklog = new WorkflowLog
                {
                    EntityName = "Recommendation",
                    EntityId = recommendation.Id,
                    ActionType = WorkflowActionType.Created,
                    Description = $"Recommendation  added to Meeting '{meeting.Title}' at {DateTime.UtcNow}",
                    UserId = meeting.CreatedByUserId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.RecommendationRepository.AddAsync(recommendation);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.RecommendationRepository.GetByIdAsync(recommendation.Id);
                var dto = _mapper.Map<RecommendationDto>(result);

                return ApiResponse<RecommendationDto>.SuccessResponse(dto, "تم إضافة التوصية بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<RecommendationDto>.ErrorResponse($"خطأ في إضافة التوصية: {ex.Message}");
            }
        }

        public async Task<ApiResponse<RecommendationDto>> UpdateRecommendationAsync(int recommendationId, UpdateRecommendationDto recommendationDto,string userId)
        {
            try
            {
                var recommendation = await _unitOfWork.RecommendationRepository.GetByIdAsync(recommendationId);
                if (recommendation == null)
                {
                    return ApiResponse<RecommendationDto>.ErrorResponse("التوصية غير موجودة");
                }

                _mapper.Map(recommendationDto, recommendation);
                //  Log
                var worklog = new WorkflowLog
                {
                    EntityName = "Recommendation",
                    EntityId = recommendation.Id,
                    ActionType = WorkflowActionType.Updated,
                    Description = $"Recommendation updated at {DateTime.UtcNow}",
                    UserId = userId
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.RecommendationRepository.UpdateAsync(recommendation);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.RecommendationRepository.GetByIdAsync(recommendationId);
                var dto = _mapper.Map<RecommendationDto>(result);

                return ApiResponse<RecommendationDto>.SuccessResponse(dto, "تم تحديث التوصية بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<RecommendationDto>.ErrorResponse($"خطأ في تحديث التوصية: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveRecommendationAsync(int recommendationId, string userId)
        {
            try
            {
                var recommendation = await _unitOfWork.RecommendationRepository.GetByIdAsync(recommendationId);
                if (recommendation == null)
                {
                    return ApiResponse<bool>.ErrorResponse("التوصية غير موجودة");
                }

                // 📝 Log
                var worklog = new WorkflowLog
                {
                    EntityName = "Recommendation",
                    EntityId = recommendation.Id,
                    ActionType = WorkflowActionType.Deleted,
                    Description = $"Recommendation removed from Meeting '{recommendation.MeetingId}' at {DateTime.UtcNow}",
                    UserId = userId // أو المستخدم الحالي اللي عمل الحذف
                };
                await _unitOfWork.WorkFlowLogRepository.AddAsync(worklog);

                await _unitOfWork.RecommendationRepository.DeleteAsync(recommendationId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف التوصية بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف التوصية: {ex.Message}");
            }
        }

        

        // Private helper methods
        private string GetContentType(string fileExtension)
        {
            return fileExtension.ToLowerInvariant() switch
            {
                ".pdf" => "application/pdf",
                ".doc" => "application/msword",
                ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ".xls" => "application/vnd.ms-excel",
                ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ".ppt" => "application/vnd.ms-powerpoint",
                ".pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                ".txt" => "text/plain",
                ".jpg" or ".jpeg" => "image/jpeg",
                ".png" => "image/png",
                ".gif" => "image/gif",
                ".zip" => "application/zip",
                ".rar" => "application/x-rar-compressed",
                _ => "application/octet-stream"
            };
        }

        private async Task SendMeetingInvitationsAsync(Meeting meeting)
        {
            try
            {
                var attendeeUserIds = new List<string>();
                var externalEmails = new List<string>();

                foreach (var attendee in meeting.Attendees)
                {
                    if (attendee.Kind == AttendeeKind.Internal && !string.IsNullOrEmpty(attendee.UserId))
                    {
                        attendeeUserIds.Add(attendee.UserId);
                    }
                    else if (attendee.Kind == AttendeeKind.External && !string.IsNullOrEmpty(attendee.Email))
                    {
                        externalEmails.Add(attendee.Email);
                    }
                }

                // Send notifications to internal users
                if (attendeeUserIds.Any())
                {
                    var title = $"دعوة لحضور اجتماع: {meeting.Title}";
                    var message =
                        $"تمت دعوتك لحضور اجتماع بعنوان: \"{meeting.Title}\".\n\n" +
                        $"🗓 التاريخ: {meeting.StartAt:dddd, dd/MM/yyyy}\n" +
                        $"⏰ الوقت: {meeting.StartAt:HH:mm}\n\n" +
                        "يرجى التأكيد على حضورك، وشكرًا لتعاونك.";

                    await _notificationService.SendNotificationAsync(title, message, attendeeUserIds, "Meeting");
                }

                // Send emails to external attendees
                if (externalEmails.Any())
                {
                    var title = $"دعوة لحضور اجتماع: {meeting.Title}";
                    var message =
                        $"تمت دعوتك لحضور اجتماع بعنوان: \"{meeting.Title}\".\n\n" +
                        $"🗓 التاريخ: {meeting.StartAt:dddd, dd/MM/yyyy}\n" +
                        $"⏰ الوقت: {meeting.StartAt:HH:mm}\n\n" +
                        "يرجى التأكيد على حضورك، وشكرًا لتعاونك.";

                    // For external attendees, we'll need to implement email sending
                    // This would require extending the notification service or creating a separate email service

                    foreach (var externalEmail in externalEmails)
                    {
                        var emaildto = new EmailDTO(
                        externalEmail,
                        _configuration["EmailSetting:From"],
                        title,
                        EmailStringBodyMS.Send(message)
                        );

                        await _emailService.SendEmail(emaildto);
                    }
                    
                }
            }
            catch (Exception ex)
            {
                // Log the error but don't fail the meeting creation
                Console.WriteLine($"Error sending meeting invitations: {ex.Message}");
            }
        }
        private async Task SendMeetingInvitationsIndevedualAsync(Meeting meeting ,MeetingAttendee meetingAttendee)
        {
            try
            {
                

                // Send notifications to internal users
                if (meetingAttendee.UserId!=null&& meetingAttendee.Kind== AttendeeKind.Internal)
                {
                    var title = $"دعوة لحضور اجتماع: {meeting.Title}";
                    var message =
                        $"تمت دعوتك لحضور اجتماع بعنوان: \"{meeting.Title}\".\n\n" +
                        $"🗓 التاريخ: {meeting.StartAt:dddd, dd/MM/yyyy}\n" +
                        $"⏰ الوقت: {meeting.StartAt:HH:mm}\n\n" +
                        "يرجى التأكيد على حضورك، وشكرًا لتعاونك.";

                    await _notificationService.SendNotificationAsync(title, message, new List<string> { meetingAttendee.UserId }, "Meeting");
                }

                // Send emails to external attendees
                if (!string.IsNullOrEmpty(meetingAttendee.Email)&&meetingAttendee.Kind == AttendeeKind.External)
                {
                    var title = $"دعوة لحضور اجتماع: {meeting.Title}";
                    var message =
                        $"تمت دعوتك لحضور اجتماع بعنوان: \"{meeting.Title}\".\n\n" +
                        $"🗓 التاريخ: {meeting.StartAt:dddd, dd/MM/yyyy}\n" +
                        $"⏰ الوقت: {meeting.StartAt:HH:mm}\n\n" +
                        "يرجى التأكيد على حضورك، وشكرًا لتعاونك.";

                    // For external attendees, we'll need to implement email sending
                    // This would require extending the notification service or creating a separate email service
                    var emaildto = new EmailDTO(
                        meetingAttendee.Email,
                        _configuration["EmailSetting:From"],
                        title,
                        EmailStringBodyMS.Send(message)
                        );

                        await _emailService.SendEmail(emaildto);
                }
            }
            catch (Exception ex)
            {
                // Log the error but don't fail the meeting creation
                Console.WriteLine($"Error sending meeting invitations: {ex.Message}");
            }
        }
    }
}
