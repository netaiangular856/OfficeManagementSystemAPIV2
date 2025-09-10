using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Policy = "partners.index")]
    public class PartnersController : ControllerBase
    {
        private readonly IPartnerService _partnerService;

        public PartnersController(IPartnerService partnerService)
        {
            _partnerService = partnerService;
        }

        /// <summary>
        /// إنشاء شريك جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreatePartnerDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _partnerService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع الشركاء مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] PartnerQueryDto queryDto)
        {
            var result = await _partnerService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب شريك محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _partnerService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث شريك محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdatePartnerDto updateDto)
        {
            var result = await _partnerService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف شريك
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _partnerService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Partner Contacts
        /// <summary>
        /// جلب جهات اتصال الشريك
        /// </summary>
        [HttpGet("{id}/contacts")]
        public async Task<IActionResult> GetContacts(int id)
        {
            var result = await _partnerService.GetContactsAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// إضافة جهة اتصال للشريك
        /// </summary>
        [HttpPost("{id}/contacts")]
        public async Task<IActionResult> AddContact(int id, [FromBody] CreatePartnerContactDto contactDto)
        {
            var result = await _partnerService.AddContactAsync(id, contactDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تحديث جهة اتصال الشريك
        /// </summary>
        [HttpPut("{id}/contacts/{contactId}")]
        public async Task<IActionResult> UpdateContact(int id, int contactId, [FromBody] UpdatePartnerContactDto contactDto)
        {
            var result = await _partnerService.UpdateContactAsync(id, contactId, contactDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف جهة اتصال من الشريك
        /// </summary>
        [HttpDelete("{id}/contacts/{contactId}")]
        public async Task<IActionResult> RemoveContact(int id, int contactId)
        {
            var result = await _partnerService.RemoveContactAsync(id, contactId);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
