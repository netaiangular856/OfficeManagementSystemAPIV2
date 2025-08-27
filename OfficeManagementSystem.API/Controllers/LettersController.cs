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
    public class LettersController : ControllerBase
    {
        private readonly ILetterService _letterService;

        public LettersController(ILetterService letterService)
        {
            _letterService = letterService;
        }

        /// <summary>
        /// إنشاء خطاب جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateLetterDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _letterService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع الخطابات مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] LetterQueryDto queryDto)
        {
            var result = await _letterService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب خطاب محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _letterService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث خطاب محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateLetterDto updateDto)
        {
            var result = await _letterService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف خطاب
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _letterService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Letter Attachments
        /// <summary>
        /// جلب مرفقات الخطاب
        /// </summary>
        [HttpGet("{id}/attachments")]
        public async Task<IActionResult> GetAttachments(int id)
        {
            var result = await _letterService.GetAttachmentsAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// إضافة مرفق للخطاب
        /// </summary>
        [HttpPost("{id}/attachments")]
        public async Task<IActionResult> AddAttachment(int id, [FromForm] CreateLetterAttachmentDto attachmentDto)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return BadRequest();
            }
            var result = await _letterService.AddAttachmentAsync(id, attachmentDto,userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف مرفق من الخطاب
        /// </summary>
        [HttpDelete("{id}/attachments/{attachmentId}")]
        public async Task<IActionResult> RemoveAttachment(int id, int attachmentId)
        {
            var result = await _letterService.RemoveAttachmentAsync(id, attachmentId);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
