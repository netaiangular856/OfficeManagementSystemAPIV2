using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;
using System;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CarbonController : ControllerBase
    {
        private readonly ICarbonService _carbonService;

        public CarbonController(ICarbonService carbonService)
        {
            _carbonService = carbonService;
        }

        /// <summary>
        /// حساب قيمة الانبعاث لشحنة بيانات نشاط
        /// </summary>
        [HttpPost("calc")]
        public async Task<IActionResult> CalculateEmission([FromBody] CalculateEmissionDto calculateDto)
        {
            var result = await _carbonService.CalculateEmissionAsync(calculateDto);
            return Ok(result);
        }

        /// <summary>
        /// عرض لوحة معلومات البصمة الكربونية
        /// </summary>
        [HttpGet("dashboard")]
        public async Task<IActionResult> GetDashboard([FromQuery] DateTime? fromDate, [FromQuery] DateTime? toDate)
        {
            var result = await _carbonService.GetDashboardAsync(fromDate, toDate);
            return Ok(result);
        }

        /// <summary>
        /// تحديث معامل الانبعاث
        /// </summary>
        [HttpPost("factor/update/{factorId}")]
        //[Authorize(Policy = "carbon.manage")] // يمكن تعديل السياسة حسب الصلاحيات
        public async Task<IActionResult> UpdateEmissionFactor(int factorId, [FromBody] UpdateEmissionFactorDto updateDto)
        {
            try
            {
                if (updateDto == null)
                {
                    return BadRequest(new { success = false, message = "البيانات المرسلة غير صحيحة" });
                }

                var result = await _carbonService.UpdateEmissionFactorAsync(factorId, updateDto);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"خطأ في تحديث معامل الانبعاث: {ex.Message}" });
            }
        }

        /// <summary>
        /// إنشاء نشاط كربوني جديد
        /// </summary>
        [HttpPost("activity")]
        public async Task<IActionResult> CreateActivity([FromBody] CreateCarbonActivityDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _carbonService.CreateActivityAsync(createDto, userId);
            return Ok(result);
        }

        /// <summary>
        /// جلب جميع الأنشطة الكربونية
        /// </summary>
        [HttpGet("activities")]
        public async Task<IActionResult> GetActivities([FromQuery] CarbonActivityQueryDto queryDto)
        {
            var result = await _carbonService.GetActivitiesAsync(queryDto);
            return Ok(result);
        }

        /// <summary>
        /// جلب نشاط كربوني محدد
        /// </summary>
        [HttpGet("activity/{id}")]
        public async Task<IActionResult> GetActivityById(int id)
        {
            var result = await _carbonService.GetActivityByIdAsync(id);
            return Ok(result);
        }

        /// <summary>
        /// جلب جميع معاملات الانبعاث
        /// </summary>
        [HttpGet("factors")]
        public async Task<IActionResult> GetAllEmissionFactors()
        {
            var result = await _carbonService.GetAllEmissionFactorsAsync();
            return Ok(result);
        }

        /// <summary>
        /// جلب الأنشطة الكربونية المرتبطة بكيان معين
        /// </summary>
        [HttpGet("activities/by-entity")]
        public async Task<IActionResult> GetActivitiesByRelatedEntity(
            [FromQuery] int relatedEntityId, 
            [FromQuery] string relatedEntityType)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(relatedEntityType))
                {
                    return BadRequest(new { success = false, message = "نوع الكيان المرتبط مطلوب" });
                }

                var result = await _carbonService.GetActivitiesByRelatedEntityAsync(relatedEntityId, relatedEntityType);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"خطأ في جلب الأنشطة: {ex.Message}" });
            }
        }

        /// <summary>
        /// حذف نشاط كربوني
        /// </summary>
        [HttpDelete("activity/{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            try
            {
                var result = await _carbonService.DeleteActivityAsync(id);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"خطأ في حذف النشاط: {ex.Message}" });
            }
        }

        /// <summary>
        /// حذف جميع الأنشطة الكربونية المرتبطة بكيان معين
        /// </summary>
        [HttpDelete("activities/by-entity")]
        public async Task<IActionResult> DeleteActivitiesByRelatedEntity(
            [FromQuery] int relatedEntityId, 
            [FromQuery] string relatedEntityType)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(relatedEntityType))
                {
                    return BadRequest(new { success = false, message = "نوع الكيان المرتبط مطلوب" });
                }

                var result = await _carbonService.DeleteActivitiesByRelatedEntityAsync(relatedEntityId, relatedEntityType);
                
                if (!result.Success)
                {
                    return BadRequest(result);
                }

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { success = false, message = $"خطأ في حذف الأنشطة: {ex.Message}" });
            }
        }
    }
}

