using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using System.Security.Claims;
using System.Threading.Tasks;

namespace OfficeManagementSystem.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly INotificationService _notificationService;

        public NotificationController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }
        [HttpPost]
        public async Task<IActionResult> AddNotification(CreateNotificationDto notificationDto)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            if(notificationDto == null)
            {
                return BadRequest();
            }
            var result=await _notificationService.AddNotification(notificationDto);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpGet("user")]
        public async Task<IActionResult> GetUserNotification()
        {
            var userId=User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(userId == null)
            {
                return NotFound();
            }
            var result=await _notificationService.GetUserNotifications(userId);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpGet("user/filtered")]
        public async Task<IActionResult> GetUserNotificationWithFilter([FromQuery] NotificationFilterDto filter)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return NotFound();
            }
            var result = await _notificationService.GetUserNotificationsWithFilter(userId, filter);
            if (!result.Success)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if(userId == null)
            {
                return NotFound();
            }
            var notification = await _notificationService.MarkAsReadAsync(id, userId);
            if (!notification.Success)
            {
                return NotFound();
            }
            return Ok(notification);
        }
        [HttpPatch("mark-all")]
        public async Task<IActionResult> MarkallAsRead()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return NotFound();
            }
            var notification = await _notificationService.MarkAllAsReadAsync(userId);
            if (!notification.Success)
            {
                return NotFound();
            }
            return Ok(notification);
        }

        [HttpGet("{id}/reference")]
        public async Task<IActionResult> GetNotificationReference(int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
            {
                return Unauthorized();
            }

            var result = await _notificationService.GetNotificationReference(id, userId);
            if (!result.Success)
            {
                return NotFound(result.Message);
            }

            return Ok(result);
        }
    }
}
