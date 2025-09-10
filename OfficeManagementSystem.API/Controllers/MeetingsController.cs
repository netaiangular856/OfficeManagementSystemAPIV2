using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Policy = "meeting.index")]
    public class MeetingsController : ControllerBase
    {
        private readonly IMeetingService _meetingService;

        public MeetingsController(IMeetingService meetingService)
        {
            _meetingService = meetingService;
        }

        /// <summary>
        /// إنشاء اجتماع جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateMeetingDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _meetingService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع الاجتماعات مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] MeetingQueryDto queryDto)
        {
            var result = await _meetingService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب اجتماع محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _meetingService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث اجتماع محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateMeetingDto updateDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _meetingService.UpdateAsync(id, updateDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث حالة الاجتماع
        /// </summary>
        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateMeetingStatusDto statusDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _meetingService.UpdateStatusAsync(id, statusDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف اجتماع
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var result = await _meetingService.DeleteAsync(id,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Meeting Attachments
        /// <summary>
        /// جلب مرفقات الاجتماع
        /// </summary>
        [HttpGet("{meetingId}/attachments")]
        public async Task<IActionResult> GetAttachments(int meetingId)
        {
            var result = await _meetingService.GetAttachmentsAsync(meetingId);
            return Ok(result);
        }

        /// <summary>
        /// إضافة مرفق للاجتماع
        /// </summary>
        [HttpPost("{meetingId}/attachments")]
        public async Task<IActionResult> AddAttachment(int meetingId, [FromForm] CreateMeetingAttachmentDto attachmentDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(userId == null)
            {
                return BadRequest();
            }
            var result = await _meetingService.AddAttachmentAsync(meetingId, attachmentDto,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف مرفق من الاجتماع
        /// </summary>
        [HttpDelete("{meetingId}/attachments/{id}")]
        public async Task<IActionResult> RemoveAttachment(int meetingId, int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.RemoveAttachmentAsync(meetingId, id, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Meeting Attendees
        /// <summary>
        /// جلب حضور الاجتماع
        /// </summary>
        [HttpGet("{id}/attendees")]
        public async Task<IActionResult> GetAttendees(int id)
        {
            var result = await _meetingService.GetAttendeesAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// إضافة حضور للاجتماع
        /// </summary>
        [HttpPost("{id}/attendees")]
        public async Task<IActionResult> AddAttendee(int id, [FromBody] CreateMeetingAttendeeDto attendeeDto)
        {
            var result = await _meetingService.AddAttendeeAsync(id, attendeeDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث حضور الاجتماع
        /// </summary>
        [HttpPut("{id}/attendees/{attendeeId}")]
        public async Task<IActionResult> UpdateAttendee(int id, int attendeeId, [FromBody] UpdateMeetingAttendeeDto attendeeDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.UpdateAttendeeAsync(id, attendeeId, attendeeDto,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف حضور من الاجتماع
        /// </summary>
        [HttpDelete("{id}/attendees/{attendeeId}")]
        public async Task<IActionResult> RemoveAttendee(int id, int attendeeId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.RemoveAttendeeAsync(id, attendeeId,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث حالة حضور الاجتماع (RSVP)
        /// </summary>
        [HttpPatch("{id}/attendees/{attendeeId}/status")]
        public async Task<IActionResult> UpdateAttendeeStatus(int id, int attendeeId, [FromBody] UpdateAttendeeStatusDto statusDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            
            var result = await _meetingService.UpdateAttendeeStatusAsync(id, attendeeId, statusDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Meeting Minutes
        /// <summary>
        /// جلب محاضر الاجتماع
        /// </summary>
        [HttpGet("{id}/minutes")]
        public async Task<IActionResult> GetMinutes(int id)
        {
            var result = await _meetingService.GetMinutesAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// إنشاء محاضر للاجتماع
        /// </summary>
        [HttpPost("{id}/minutes")]
        public async Task<IActionResult> CreateMinutes(int id, [FromBody] CreateMeetingMinutesDto minutesDto)
        {
            var result = await _meetingService.CreateMinutesAsync(id, minutesDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث محاضر الاجتماع
        /// </summary>
        [HttpPut("{id}/minutes")]
        public async Task<IActionResult> UpdateMinutes(int id, [FromBody] UpdateMeetingMinutesDto minutesDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.UpdateMinutesAsync(id, minutesDto,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Recommendations
        /// <summary>
        /// جلب توصيات الاجتماع
        /// </summary>
        [HttpGet("{id}/recommendations")]
        public async Task<IActionResult> GetRecommendations(int id)
        {
            var result = await _meetingService.GetRecommendationsAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// إضافة توصية للاجتماع
        /// </summary>
        [HttpPost("{id}/recommendations")]
        public async Task<IActionResult> AddRecommendation(int id, [FromBody] CreateRecommendationDto recommendationDto)
        {
            var result = await _meetingService.AddRecommendationAsync(id, recommendationDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث توصية
        /// </summary>
        [HttpPut("recommendations/{recId}")]
        public async Task<IActionResult> UpdateRecommendation(int recId, [FromBody] UpdateRecommendationDto recommendationDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.UpdateRecommendationAsync(recId, recommendationDto,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف توصية
        /// </summary>
        [HttpDelete("recommendations/{recId}")]
        public async Task<IActionResult> RemoveRecommendation(int recId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest();
            var result = await _meetingService.RemoveRecommendationAsync(recId,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
