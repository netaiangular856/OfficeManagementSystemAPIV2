using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Visit;
using OfficeManagementSystem.Domain.Enums.Meeting;
using OfficeManagementSystem.Domain.Enums.Visit;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class VisitService : IVisitService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly ISendNotificationService _notificationService;
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;

        public VisitService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            ISendNotificationService notificationService,
            IEmailService emailService,
            IConfiguration configuration)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _notificationService = notificationService;
            _emailService = emailService;
            _configuration = configuration;
        }

        public async Task<ApiResponse<VisitDto>> CreateAsync(CreateVisitDto createDto, string organizerUserId)
        {
            try
            {
                // Validate organizer exists
                var organizer = await _userManager.FindByIdAsync(organizerUserId);
                if (organizer == null)
                {
                    return ApiResponse<VisitDto>.ErrorResponse("منظم الزيارة غير موجود");
                }

                // Create visit
                var visit = _mapper.Map<Visit>(createDto);
                visit.CreatedBy = organizerUserId;

                await _unitOfWork.VisitRepository.AddAsync(visit);
                await _unitOfWork.SaveAsync();

                // Get visit with details
                var result = await _unitOfWork.VisitRepository.GetByIdWithDetailsAsync(visit.Id);
                var dto = _mapper.Map<VisitDto>(result);

                // Send notifications to participants
                await SendVisitInvitationsAsync(visit);

                return ApiResponse<VisitDto>.SuccessResponse(dto, "تم إنشاء الزيارة بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<VisitDto>.ErrorResponse($"خطأ في إنشاء الزيارة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<VisitDto>>> GetAllAsync(VisitQueryDto queryDto)
        {
            try
            {
                Expression<Func<Visit, bool>>? filter = null;

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    filter = v => v.Title.Contains(queryDto.Search) || 
                                 (v.Purpose != null && v.Purpose.Contains(queryDto.Search)) ||
                                 v.Address.Contains(queryDto.Search);
                }

                if (queryDto.Type.HasValue)
                {
                    var typeFilter = (Expression<Func<Visit, bool>>)(v => v.Type == queryDto.Type.Value);
                    filter = filter == null ? typeFilter : filter.And(typeFilter);
                }

                if (queryDto.From.HasValue)
                {
                    var fromFilter = (Expression<Func<Visit, bool>>)(v => v.VisitDate >= queryDto.From.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.To.HasValue)
                {
                    var toFilter = (Expression<Func<Visit, bool>>)(v => v.VisitDate <= queryDto.To.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                var visits = await _unitOfWork.VisitRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(v => v.VisitDate));

                var totalCount = visits.Count();
                var items = visits
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<VisitDto>>(items);

                var result = new PaginatedResult<VisitDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<VisitDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<VisitDto>>.ErrorResponse($"خطأ في جلب الزيارات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<VisitDto>> GetByIdAsync(int id)
        {
            try
            {
                var visit = await _unitOfWork.VisitRepository.GetByIdWithDetailsAsync(id);
                if (visit == null)
                {
                    return ApiResponse<VisitDto>.ErrorResponse("الزيارة غير موجودة");
                }

                var dto = _mapper.Map<VisitDto>(visit);
                return ApiResponse<VisitDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<VisitDto>.ErrorResponse($"خطأ في جلب الزيارة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<VisitDto>> UpdateAsync(int id, UpdateVisitDto updateDto)
        {
            try
            {
                var visit = await _unitOfWork.VisitRepository.GetByIdAsync(id);
                if (visit == null)
                {
                    return ApiResponse<VisitDto>.ErrorResponse("الزيارة غير موجودة");
                }

                _mapper.Map(updateDto, visit);
                visit.UpdatedAt = DateTime.UtcNow;

                await _unitOfWork.VisitRepository.UpdateAsync(visit);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.VisitRepository.GetByIdWithDetailsAsync(id);
                var dto = _mapper.Map<VisitDto>(result);

                return ApiResponse<VisitDto>.SuccessResponse(dto, "تم تحديث الزيارة بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<VisitDto>.ErrorResponse($"خطأ في تحديث الزيارة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteAsync(int id)
        {
            try
            {
                var visit = await _unitOfWork.VisitRepository.GetByIdAsync(id);
                if (visit == null)
                {
                    return ApiResponse<bool>.ErrorResponse("الزيارة غير موجودة");
                }

                await _unitOfWork.VisitRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف الزيارة بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف الزيارة: {ex.Message}");
            }
        }

        // Visit Participants
        public async Task<ApiResponse<List<VisitParticipantDto>>> GetParticipantsAsync(int visitId)
        {
            try
            {
                var visit = await _unitOfWork.VisitRepository.GetByIdWithDetailsAsync(visitId);
                if (visit == null)
                {
                    return ApiResponse<List<VisitParticipantDto>>.ErrorResponse("الزيارة غير موجودة");
                }

                var dtos = _mapper.Map<List<VisitParticipantDto>>(visit.Participants);
                return ApiResponse<List<VisitParticipantDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<VisitParticipantDto>>.ErrorResponse($"خطأ في جلب المشاركين: {ex.Message}");
            }
        }

        public async Task<ApiResponse<VisitParticipantDto>> AddParticipantAsync(int visitId, CreateVisitParticipantDto participantDto)
        {
            try
            {
                var visit = await _unitOfWork.VisitRepository.GetByIdAsync(visitId);
                if (visit == null)
                {
                    return ApiResponse<VisitParticipantDto>.ErrorResponse("الزيارة غير موجودة");
                }

                // Validate internal participant
                if (participantDto.Kind == AttendeeKind.Internal && !string.IsNullOrEmpty(participantDto.UserId))
                {
                    var user = await _userManager.FindByIdAsync(participantDto.UserId);
                    if (user == null)
                    {
                        return ApiResponse<VisitParticipantDto>.ErrorResponse("المستخدم غير موجود");
                    }
                }

                var participant = _mapper.Map<VisitParticipant>(participantDto);
                participant.VisitId = visitId;

                await _unitOfWork.VisitParticipantRepository.AddAsync(participant);
                await _unitOfWork.SaveAsync();

                var result = await _unitOfWork.VisitParticipantRepository.GetByIdAsync(participant.Id);
                var dto = _mapper.Map<VisitParticipantDto>(result);

                await SendVisitInvitationIndividualAsync(visit, result);

                return ApiResponse<VisitParticipantDto>.SuccessResponse(dto, "تم إضافة المشارك بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<VisitParticipantDto>.ErrorResponse($"خطأ في إضافة المشارك: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> RemoveParticipantAsync(int visitId, int participantId)
        {
            try
            {
                var participant = await _unitOfWork.VisitParticipantRepository.GetByIdAsync(participantId);
                if (participant == null || participant.VisitId != visitId)
                {
                    return ApiResponse<bool>.ErrorResponse("المشارك غير موجود");
                }

                await _unitOfWork.VisitParticipantRepository.DeleteAsync(participantId);
                await _unitOfWork.SaveAsync();

                return ApiResponse<bool>.SuccessResponse(true, "تم حذف المشارك بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse($"خطأ في حذف المشارك: {ex.Message}");
            }
        }

        // Private helper methods
        private async Task SendVisitInvitationsAsync(Visit visit)
        {
            try
            {
                var participantUserIds = new List<string>();
                var externalEmails = new List<string>();

                foreach (var participant in visit.Participants)
                {
                    if (participant.Kind == AttendeeKind.Internal && !string.IsNullOrEmpty(participant.UserId))
                    {
                        participantUserIds.Add(participant.UserId);
                    }
                    else if (participant.Kind == AttendeeKind.External && !string.IsNullOrEmpty(participant.Email))
                    {
                        externalEmails.Add(participant.Email);
                    }
                }

                // Send notifications to internal users
                if (participantUserIds.Any())
                {
                    var title = $"دعوة للمشاركة في زيارة: {visit.Title}";
                    var message = $"تمت دعوتك للمشاركة في زيارة '{visit.Title}' في {visit.VisitDate:dd/MM/yyyy}";
                    
                    await _notificationService.SendNotificationAsync(title, message, participantUserIds, "Visit");
                }

                // Send emails to external participants
                if (externalEmails.Any())
                {
                    var title = $"دعوة للمشاركة في زيارة: {visit.Title}";
                    var message = $"تمت دعوتك للمشاركة في زيارة '{visit.Title}' في {visit.VisitDate:dd/MM/yyyy}";

                    foreach(var externalEmail in externalEmails)
                    {
                        var emaildto = new EmailDTO(
                        externalEmail,
                        _configuration["EmailSetting:From"],
                        title,
                        message
                        );

                        await _emailService.SendEmail(emaildto);
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the error but don't fail the visit creation
                Console.WriteLine($"Error sending visit invitations: {ex.Message}");
            }
        }

        private async Task SendVisitInvitationIndividualAsync(Visit visit, VisitParticipant participant)
        {
            try
            {
                // Send notifications to internal users
                if (participant.UserId != null && participant.Kind == AttendeeKind.Internal)
                {
                    var title = $"دعوة للمشاركة في زيارة: {visit.Title}";
                    var message = $"تمت دعوتك للمشاركة في زيارة '{visit.Title}' في {visit.VisitDate:dd/MM/yyyy}";

                    await _notificationService.SendNotificationAsync(title, message, new List<string> { participant.UserId }, "Visit");
                }

                // Send emails to external participants
                if (!string.IsNullOrEmpty(participant.Email) && participant.Kind == AttendeeKind.External)
                {
                    var title = $"دعوة للمشاركة في زيارة: {visit.Title}";
                    var message = $"تمت دعوتك للمشاركة في زيارة '{visit.Title}' في {visit.VisitDate:dd/MM/yyyy}";

                    var emaildto = new EmailDTO(
                    participant.Email,
                    _configuration["EmailSetting:From"],
                    title,
                    message
                    );

                    await _emailService.SendEmail(emaildto);
                }
            }
            catch (Exception ex)
            {
                // Log the error but don't fail the visit creation
                Console.WriteLine($"Error sending visit invitations: {ex.Message}");
            }
        }
    }
}
