using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Notifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Mapping
{
    public class NotificationProfile : Profile
    {
        public NotificationProfile()
        {
            // Notification → NotificationDto
            CreateMap<Notification, NotificationDto>()
                .ForMember(dest => dest.UserNotifications,
                           opt => opt.MapFrom(src => src.UserNotifications));

            // NotificationDto → Notification
            CreateMap<NotificationDto, Notification>()
                .ForMember(dest => dest.UserNotifications,
                           opt => opt.MapFrom(src => src.UserNotifications));

            // UserNotification → UserNotificationDto
            CreateMap<UserNotification, UserNotificationDto>();
                

            // UserNotificationDto → UserNotification
            CreateMap<UserNotificationDto, UserNotification>();
        }
    }
}
