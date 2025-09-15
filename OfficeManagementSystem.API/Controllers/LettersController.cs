using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Policy = "letter.index")]
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
            if (!result.Success)
                return NotFound();
            return Ok(result);
        }
        [HttpGet("approval")]
        public async Task<IActionResult> GetAllForApproval([FromQuery] LetterQueryDto queryDto)
        {
            var result = await _letterService.GetAllForApprovalAsync(queryDto);
            if (!result.Success)
                return NotFound();
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

        // Approval Endpoints
        /// <summary>
        /// تقديم الخطاب للاعتماد
        /// </summary>
        [HttpPost("{id}/submit-for-approval")]
        public async Task<IActionResult> SubmitForApproval(int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _letterService.SubmitForApprovalAsync(id, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// اعتماد الخطاب مع التوقيع
        /// </summary>
        [HttpPost("{id}/approve")]
        public async Task<IActionResult> ApproveLetter(int id, [FromForm] ApproveLetterDto approveDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _letterService.ApproveLetterAsync(id, approveDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// رفض الخطاب
        /// </summary>
        [HttpPost("{id}/reject")]
        public async Task<IActionResult> RejectLetter(int id, [FromBody] RejectLetterDto rejectDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _letterService.RejectLetterAsync(id, rejectDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Email Sending Endpoints
        /// <summary>
        /// إرسال الخطاب عبر الميل
        /// </summary>
        [HttpPost("{id}/send-email")]
        public async Task<IActionResult> SendLetterEmail(int id, [FromBody] SendLetterEmailDto emailDto)
        {
            
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            
            var result = await _letterService.SendLetterEmailAsync(id, emailDto, userId);
            
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpGet("{id}/download-pdf")]
        public async Task<IActionResult> DownloadLetterPdf(int id)
        {
            try
            {

                
                var letter = await _letterService.GetByIdAsync(id);
                if (!letter.Success)
                {

                    return NotFound(ApiResponse<object>.ErrorResponse("الخطاب غير موجود"));
                }

                // Get the actual Letter entity from the service
                var letterEntity = await _letterService.GetByIdWithDetailsAsync(id);
                if (!letterEntity.Success)
                {

                    return NotFound(ApiResponse<object>.ErrorResponse("الخطاب غير موجود"));
                }

                // Generate PDF
                var pdfService = HttpContext.RequestServices.GetRequiredService<ILetterPdfService>();
                var pdfPath = await pdfService.GenerateLetterPdfAsync(letterEntity.Data);
                
                if (!System.IO.File.Exists(pdfPath))
                {

                    return NotFound(ApiResponse<object>.ErrorResponse("ملف PDF غير موجود"));
                }


                
                var fileBytes = await System.IO.File.ReadAllBytesAsync(pdfPath);
                var fileName = $"Letter_{id}_{DateTime.Now:yyyyMMdd_HHmmss}.pdf";
                
                return File(fileBytes, "application/pdf", fileName);
            }
            catch (Exception ex)
            {
                return BadRequest(ApiResponse<object>.ErrorResponse($"خطأ في تحميل PDF: {ex.Message}"));
            }
        }

        /// <summary>
        /// جلب حالة الخطاب
        /// </summary>
        //[HttpGet("{id}/status")]
        //public async Task<IActionResult> GetLetterStatus(int id)
        //{
        //    var letter = await _letterService.GetByIdAsync(id);
        //    if (!letter.Success)
        //    {
        //        return NotFound(letter);
        //    }

        //    return Ok(ApiResponse<object>.SuccessResponse(new 
        //    { 
        //        Id = letter.Data.Id,
        //        Status = letter.Data.Status.ToString(),
        //        Subject = letter.Data.Subject,
        //        IsEmailSent = letter.Data.IsEmailSent,
        //        EmailSentAt = letter.Data.EmailSentAt
        //    }));
        //}

        /// <summary>
        /// جلب حالة إرسال الميل للخطاب
        /// </summary>
        //[HttpGet("{id}/email-status")]
        //public async Task<IActionResult> GetEmailStatus(int id)
        //{
        //    var letter = await _letterService.GetByIdAsync(id);
        //    if (!letter.Success)
        //    {
        //        return NotFound(letter);
        //    }

        //    var emailStatus = new LetterEmailStatusDto
        //    {
        //        IsEmailSent = letter.Data.IsEmailSent,
        //        EmailSentAt = letter.Data.EmailSentAt,
        //        PdfPath = letter.Data.PdfPath
        //    };

        //    return Ok(ApiResponse<LetterEmailStatusDto>.SuccessResponse(emailStatus));
        //}
    }
}
