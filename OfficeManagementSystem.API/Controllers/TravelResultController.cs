using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;

namespace OfficeManagementSystem.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Policy = "travelresult.index")]
    public class TravelResultController : ControllerBase
    {
        private readonly ITravelResultService _travelResultService;

        public TravelResultController(ITravelResultService travelResultService)
        {
            _travelResultService = travelResultService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTravelResultDto createDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            var result = await _travelResultService.CreateAsync(createDto, userId);
            if (!result.Success)
            {
                return BadRequest();
            }
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetByTravelId([FromQuery] int travelId)
        {
            var result = await _travelResultService.GetAllAsync(travelId);
            if (!result.Success)
            {
                return NotFound();
            } 
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _travelResultService.GetByIdAsync(id);
            if (!result.Success)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateTravelResultDto updateDto)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }
            var result = await _travelResultService.UpdateAsync(id, updateDto, userId);
            if (!result.Success)
            {
                return BadRequest();
            }
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }
            var result = await _travelResultService.DeleteAsync(id, userId);
            if (!result.Success)
            {
                return BadRequest();
            }
            return Ok(result);
        }
    }
}
