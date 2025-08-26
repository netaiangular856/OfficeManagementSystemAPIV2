using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class VisitsController : ControllerBase
    {
        private readonly IVisitService _visitService;

        public VisitsController(IVisitService visitService)
        {
            _visitService = visitService;
        }

        /// <summary>
        /// إنشاء زيارة جديدة
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateVisitDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _visitService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع الزيارات مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] VisitQueryDto queryDto)
        {
            var result = await _visitService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب زيارة محددة بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _visitService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث زيارة محددة
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateVisitDto updateDto)
        {
            var result = await _visitService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف زيارة
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _visitService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Visit Participants
        /// <summary>
        /// جلب مشاركي الزيارة
        /// </summary>
        [HttpGet("{id}/participants")]
        public async Task<IActionResult> GetParticipants(int id)
        {
            var result = await _visitService.GetParticipantsAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// إضافة مشارك للزيارة
        /// </summary>
        [HttpPost("{id}/participants")]
        public async Task<IActionResult> AddParticipant(int id, [FromBody] CreateVisitParticipantDto participantDto)
        {
            var result = await _visitService.AddParticipantAsync(id, participantDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف مشارك من الزيارة
        /// </summary>
        [HttpDelete("{id}/participants/{participantId}")]
        public async Task<IActionResult> RemoveParticipant(int id, int participantId)
        {
            var result = await _visitService.RemoveParticipantAsync(id, participantId);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
