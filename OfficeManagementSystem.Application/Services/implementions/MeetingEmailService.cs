using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Meeting;
using MimeKit;
using MailKit.Net.Smtp;
using OfficeManagementSystem.Domain.Enums.Meeting;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class MeetingEmailService : IMeetingEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;
        private readonly bool _enableSsl;

        public MeetingEmailService(IConfiguration configuration)
        {
            _configuration = configuration;
            _smtpHost = _configuration["EmailSetting:Smtp"] ?? "smtp.gmail.com";
            _smtpPort = int.Parse(_configuration["EmailSetting:Port"] ?? "465");
            _smtpUsername = _configuration["EmailSetting:UserName"] ?? "";
            _smtpPassword = _configuration["EmailSetting:Password"] ?? "";
            _enableSsl = true;
        }

        public async Task<bool> SendMeetingMinutesEmailAsync(Meeting meeting, MeetingMinutes minutes)
        {
            //try
            //{
               
                
            //    MimeMessage message = new MimeMessage();
            //    message.From.Add(new MailboxAddress("نظام إدارة المكاتب", _smtpUsername));
                
            //    // Set subject
            //    message.Subject = $"محضر اجتماع - {meeting.Title}";

            //    // Add recipients (all attendees)
            //    bool hasValidRecipients = false;

            //    if (meeting.Attendees != null && meeting.Attendees.Any())
            //    {
            //        Console.WriteLine($"معالجة الحضور...");
            //        foreach (var attendee in meeting.Attendees)
            //        {
            //            string? email = null;

            //            // للحضور الداخليين، استخدم بريد المستخدم
            //            if (attendee.Kind == AttendeeKind.Internal && attendee.User != null)
            //            {
            //                email = attendee.User.Email;
            //            }
            //            // للحضور الخارجيين، استخدم البريد المحفوظ
            //            else if (attendee.Kind == AttendeeKind.External && !string.IsNullOrEmpty(attendee.Email))
            //            {
            //                email = attendee.Email;
            //            }

            //            if (!string.IsNullOrEmpty(email) && IsValidEmail(email))
            //            {
            //                message.To.Add(new MailboxAddress(attendee.DisplayName ?? email, email));
            //                hasValidRecipients = true;
            //            }
            //            else
            //            {
            //                Console.WriteLine($"✗ بريد غير صالح أو مفقود للحاضر: {attendee.DisplayName ?? "غير محدد"}");
            //            }
            //        }
            //    }
               

            //    if (!hasValidRecipients)
            //    {
            //        return false;
            //    }
                

            //    // Generate email body with golden template
            //    var emailBody = GenerateMeetingMinutesEmailBody(meeting, minutes);

            //    var bodyPart = new TextPart(MimeKit.Text.TextFormat.Html)
            //    {
            //        Text = emailBody
            //    };

            //    message.Body = bodyPart;

            //    // Send email
            //    using (var smtp = new SmtpClient())
            //    {
            //        try
            //        {
            //            await smtp.ConnectAsync(_smtpHost, _smtpPort, true);
                        
            //            await smtp.AuthenticateAsync(_smtpUsername, _smtpPassword);
                        
            //            await smtp.SendAsync(message);

            //            return true;
            //        }
            //        catch (Exception ex)
            //        {
                        
            //            return false;
            //        }
            //        finally
            //        {
            //            if (smtp.IsConnected)
            //            {
            //                await smtp.DisconnectAsync(true);
            //            }
            //            smtp.Dispose();
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    return false;
            //}
            return true;
        }

        private string GenerateMeetingMinutesEmailBody(Meeting meeting, MeetingMinutes minutes)
        {
            // Format dates
            var startDate = meeting.StartAt.ToString("dd/MM/yyyy");
            var startTime = meeting.StartAt.ToString("hh:mm tt");
            var endTime = meeting.EndAt?.ToString("hh:mm tt") ?? "غير محدد";

            // Get location
            var location = meeting.LocationMode switch
            {
                MeetingLocationMode.InPerson => meeting.LocationText ?? "غير محدد",
                MeetingLocationMode.Online => $"اجتماع أونلاين: {meeting.OnlineUrl ?? "غير محدد"}",
                MeetingLocationMode.Hybrid => $"هجين - {meeting.LocationText ?? "غير محدد"} / {meeting.OnlineUrl ?? "غير محدد"}",
                _ => "غير محدد"
            };

            // Build attendees list
            var attendeesList = "";
            if (meeting.Attendees != null && meeting.Attendees.Any())
            {
                attendeesList = "<ul style='margin: 10px 0; padding-right: 20px; line-height: 2;'>";
                foreach (var attendee in meeting.Attendees)
                {
                    var name = attendee.Kind == AttendeeKind.Internal 
                        ? ((attendee.User?.FirstName +" "+attendee.User?.FirstName) ?? attendee.DisplayName ?? "غير محدد")
                        : attendee.DisplayName ?? "غير محدد";
                    
                    var roleIcon = attendee.Role switch
                    {
                        AttendeeRole.Required => "🔴",
                        AttendeeRole.Optional => "🟡",
                        AttendeeRole.Speaker => "🎤",
                        _ => "⚪"
                    };

                    var jobInfo = !string.IsNullOrEmpty(attendee.JobTitle) 
                        ? $" - <span style='color:#666;'>{attendee.JobTitle}</span>" 
                        : "";

                    attendeesList += $"<li>{roleIcon} <strong>{name}</strong>{jobInfo}</li>";
                }
                attendeesList += "</ul>";
            }
            else
            {
                attendeesList = "<p style='color:#999;'>لا يوجد حضور مسجلين</p>";
            }

            // Build recommendations list
            var recommendationsList = "";
            if (meeting.Recommendations != null && meeting.Recommendations.Any())
            {
                recommendationsList = "<ul style='margin: 10px 0; padding-right: 20px; line-height: 2;'>";
                foreach (var recommendation in meeting.Recommendations)
                {
                    var assignee = recommendation.User != null 
                        ? $" - <strong style='color:#d4af37;'>المسؤول: {recommendation.User.UserName}</strong>" 
                        : "";
                    
                    var dueDate = recommendation.DueDate.HasValue 
                        ? $" - <span style='color:#888;'>الموعد: {recommendation.DueDate.Value:dd/MM/yyyy}</span>" 
                        : "";

                    recommendationsList += $"<li>✓ {recommendation.Text}{assignee}{dueDate}</li>";
                }
                recommendationsList += "</ul>";
            }
            else
            {
                recommendationsList = "<p style='color:#999;'>لا توجد توصيات</p>";
            }

            // Notes section
            var notesSection = !string.IsNullOrWhiteSpace(minutes.Notes)
                ? $"<p style='white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px; border-right: 4px solid #d4af37;'>{minutes.Notes}</p>"
                : "<p style='color:#999;'>لا توجد ملاحظات إضافية</p>";

            // AI Summary section (if available)
            var aiSummarySection = !string.IsNullOrWhiteSpace(minutes.SummaryAI)
                ? $@"
            <div style='background: linear-gradient(135deg, #fff8e1, #fff); padding: 20px; border-radius: 8px; border: 2px solid #d4af37; margin: 20px 0;'>
                <h3 style='color:#d4af37; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;'>
                    🤖 ملخص ذكي بواسطة الذكاء الاصطناعي
                </h3>
                <p style='margin: 0; line-height: 1.8; color: #333;'>{minutes.SummaryAI}</p>
            </div>"
                : "";

            return $@"
    <html dir='rtl'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    </head>
    <body style='margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;'>
        <div style='max-width:750px; margin:40px auto; background:white; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.15); overflow:hidden;'>

            <!-- Header -->
            <div style='background:linear-gradient(90deg, #d4af37, #b8952f); padding:30px; text-align:center;'>
                <h1 style='color:#fff; margin:0; font-size:26px; letter-spacing:1px;'>📋 محضر اجتماع</h1>
                <p style='color:#fff; margin:10px 0 0 0; opacity:0.9; font-size:14px;'>نظام إدارة المكاتب</p>
            </div>

            <!-- Meeting Info Section -->
            <div style='padding:30px; border-bottom: 2px solid #f0f0f0;'>
                <h2 style='color:#d4af37; margin: 0 0 20px 0; font-size: 22px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;'>
                    {meeting.Title}
                </h2>
                
                <table style='width: 100%; border-collapse: collapse; margin: 15px 0;'>
                    <tr>
                        <td style='padding: 12px 15px; background: #f9f9f9; width: 30%; font-weight: bold; color: #555; border-radius: 5px 0 0 5px;'>
                            📅 التاريخ:
                        </td>
                        <td style='padding: 12px 15px; background: #fafafa; border-radius: 0 5px 5px 0;'>
                            {startDate}
                        </td>
                    </tr>
                    <tr>
                        <td style='padding: 12px 15px; background: #f9f9f9; font-weight: bold; color: #555; border-radius: 5px 0 0 5px;'>
                            ⏰ الوقت:
                        </td>
                        <td style='padding: 12px 15px; background: #fafafa; border-radius: 0 5px 5px 0;'>
                            من {startTime} إلى {endTime}
                        </td>
                    </tr>
                    <tr>
                        <td style='padding: 12px 15px; background: #f9f9f9; font-weight: bold; color: #555; border-radius: 5px 0 0 5px;'>
                            📍 المكان:
                        </td>
                        <td style='padding: 12px 15px; background: #fafafa; border-radius: 0 5px 5px 0;'>
                            {location}
                        </td>
                    </tr>
                    <tr>
                        <td style='padding: 12px 15px; background: #f9f9f9; font-weight: bold; color: #555; border-radius: 5px 0 0 5px;'>
                            👤 المنظم:
                        </td>
                        <td style='padding: 12px 15px; background: #fafafa; border-radius: 0 5px 5px 0;'>
                            {meeting.Organizer?.UserName ?? "غير محدد"}
                        </td>
                    </tr>
                </table>

                {(!string.IsNullOrWhiteSpace(meeting.Agenda) ? $@"
                <div style='margin: 20px 0;'>
                    <h3 style='color:#d4af37; margin: 0 0 10px 0; font-size: 18px;'>📝 جدول الأعمال:</h3>
                    <p style='background: #f9f9f9; padding: 15px; border-radius: 5px; border-right: 4px solid #d4af37; margin: 0; line-height: 1.8;'>{meeting.Agenda}</p>
                </div>" : "")}
            </div>

            {aiSummarySection}

            <!-- Attendees Section -->
            

            <!-- Minutes Notes Section -->
            <div style='padding:30px; border-bottom: 2px solid #f0f0f0;'>
                <h3 style='color:#d4af37; margin: 0 0 15px 0; font-size: 20px;'>📝 ملاحظات المحضر</h3>
                {notesSection}
            </div>

            <!-- Recommendations Section -->
            <div style='padding:30px; background-color:#fafafa;'>
                <h3 style='color:#d4af37; margin: 0 0 15px 0; font-size: 20px;'>✅ التوصيات والقرارات ({meeting.Recommendations?.Count ?? 0})</h3>
                {recommendationsList}
            </div>

            <!-- Footer -->
            <div style='background:linear-gradient(90deg, #d4af37, #b8952f); padding:20px; text-align:center;'>
                <p style='color:#fff; margin:5px 0; font-size:14px;'>
                    تم إرسال هذا المحضر تلقائياً من <strong>نظام إدارة المكاتب</strong>
                </p>
                <p style='color:#fff; margin:5px 0; font-size:12px; opacity:0.8;'>
                    تاريخ الإرسال: {DateTime.Now:dd/MM/yyyy hh:mm tt}
                </p>
            </div>
        </div>
    </body>
    </html>";
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}

