using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Policy = "documents.index")]
    public class DocumentsController : ControllerBase
    {
        private readonly IDocumentService _documentService;

        public DocumentsController(IDocumentService documentService)
        {
            _documentService = documentService;
        }

        /// <summary>
        /// إنشاء مستند جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] CreateDocumentDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _documentService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع المستندات مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] DocumentQueryDto queryDto)
        {
            var result = await _documentService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب مستند محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _documentService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث مستند محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateDocumentDto updateDto)
        {
            var result = await _documentService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف مستند
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _documentService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحميل مستند
        /// </summary>
        [HttpGet("{id}/download")]
        public async Task<IActionResult> Download(int id)
        {
            var result = await _documentService.DownloadAsync(id);
            if (!result.Success)
            {
                return BadRequest(result);
            }

            var document = await _documentService.GetByIdAsync(id);
            if (!document.Success)
            {
                return BadRequest(document);
            }

            var fileName = $"{document.Data.FileName}{document.Data.FileExtension}";
            var contentType = GetContentType(document.Data.FileExtension);

            return File(result.Data, contentType, fileName);
        }

        private string GetContentType(string extension)
        {
            return extension.ToLowerInvariant() switch
            {
                ".pdf" => "application/pdf",
                ".doc" => "application/msword",
                ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ".xls" => "application/vnd.ms-excel",
                ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ".ppt" => "application/vnd.ms-powerpoint",
                ".pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                ".jpg" => "image/jpeg",
                ".jpeg" => "image/jpeg",
                ".png" => "image/png",
                ".gif" => "image/gif",
                ".txt" => "text/plain",
                ".rtf" => "application/rtf",
                ".zip" => "application/zip",
                ".rar" => "application/x-rar-compressed",
                _ => "application/octet-stream"
            };
        }
    }
}
