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
    public class PartnerEmployeesController : ControllerBase
    {
        private readonly IPartnerEmployeeService _partnerEmployeeService;

        public PartnerEmployeesController(IPartnerEmployeeService partnerEmployeeService)
        {
            _partnerEmployeeService = partnerEmployeeService;
        }

        /// <summary>
        /// إنشاء موظف شريك جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreatePartnerEmployeeDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _partnerEmployeeService.CreateAsync(createDto, userId);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع موظفي الشركاء مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] PartnerEmployeeQueryDto queryDto)
        {
            var result = await _partnerEmployeeService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب موظف شريك محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _partnerEmployeeService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث موظف شريك محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdatePartnerEmployeeDto updateDto)
        {
            var result = await _partnerEmployeeService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف موظف شريك
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _partnerEmployeeService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع موظفي شريك محدد
        /// </summary>
        [HttpGet("partner/{partnerId}")]
        public async Task<IActionResult> GetByPartnerId(int partnerId)
        {
            var result = await _partnerEmployeeService.GetByPartnerIdAsync(partnerId);
            return Ok(result);
        }
    }
}
