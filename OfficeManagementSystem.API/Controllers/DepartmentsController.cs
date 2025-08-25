using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepartmentsController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentsController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        /// <summary>
        /// إنشاء قسم جديد
        /// </summary>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateDepartmentDto createDto)
        {
            var result = await _departmentService.CreateAsync(createDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// جلب جميع الأقسام مع إمكانية البحث والتصفية
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] DepartmentQueryDto queryDto)
        {
            var result = await _departmentService.GetAllAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب شجرة الأقسام (الهرمية)
        /// </summary>
        [HttpGet("tree")]
        public async Task<IActionResult> GetTree()
        {
            var result = await _departmentService.GetTreeAsync();
            return Ok(result);
        }

        /// <summary>
        /// جلب قسم محدد بالمعرف
        /// </summary>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _departmentService.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /// <summary>
        /// تحديث قسم محدد
        /// </summary>
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateDepartmentDto updateDto)
        {
            var result = await _departmentService.UpdateAsync(id, updateDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// نقل قسم إلى موقع جديد في الهرمية
        /// </summary>
        [HttpPost("{id}/move")]
        public async Task<IActionResult> Move(int id, [FromBody] MoveDepartmentDto moveDto)
        {
            var result = await _departmentService.MoveAsync(id, moveDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// تعيين مدير للقسم
        /// </summary>
        [HttpPost("{id}/manager")]
        public async Task<IActionResult> AssignManager(int id, [FromBody] AssignManagerDto assignDto)
        {
            var result = await _departmentService.AssignManagerAsync(id, assignDto);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>
        /// حذف قسم
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _departmentService.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
