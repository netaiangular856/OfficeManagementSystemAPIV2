using Microsoft.Extensions.Configuration;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Letters;
using MimeKit;
using MailKit.Net.Smtp;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterEmailService : ILetterEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _smtpUsername;
        private readonly string _smtpPassword;
        private readonly bool _enableSsl;

        public LetterEmailService(IConfiguration configuration)
        {
            _configuration = configuration;
            _smtpHost = _configuration["EmailSetting:Smtp"] ?? "smtp.gmail.com";
            _smtpPort = int.Parse(_configuration["EmailSetting:Port"] ?? "465");
            _smtpUsername = _configuration["EmailSetting:UserName"] ?? "";
            _smtpPassword = _configuration["EmailSetting:Password"] ?? "";
            _enableSsl = true; // Gmail requires SSL
        }

        public async Task<bool> SendLetterEmailAsync(SendLetterEmailDto emailDto, string pdfPath, Letter letter)
        {
            try
            {
                
                MimeMessage message = new MimeMessage();
                message.From.Add(new MailboxAddress("نظام إدارة المكاتب", _smtpUsername));
                
                // Set subject
                message.Subject = !string.IsNullOrEmpty(emailDto.EmailSubject) 
                    ? emailDto.EmailSubject 
                    : $"خطاب رسمي - {letter.Subject}";

                // Add recipients
                bool hasValidRecipients = false;

                // Add test email
                hasValidRecipients = true;

                // Add recipients from letter fields
                if (!string.IsNullOrEmpty(letter.To))
                {
                    var toItems = letter.To.Split(',', ';').Select(e => e.Trim()).Where(e => !string.IsNullOrEmpty(e));
                    foreach (var item in toItems)
                    {
                        if (IsValidEmail(item))
                        {
                            message.To.Add(new MailboxAddress(item, item));
                            hasValidRecipients = true;
                        }
                    }
                }

                if (!string.IsNullOrEmpty(letter.Cc))
                {
                    var ccItems = letter.Cc.Split(',', ';').Select(e => e.Trim()).Where(e => !string.IsNullOrEmpty(e));
                    foreach (var item in ccItems)
                    {
                        if (IsValidEmail(item))
                        {
                            message.Cc.Add(new MailboxAddress(item, item));
                            hasValidRecipients = true;
                        }
                    }
                }

                if (!string.IsNullOrEmpty(letter.Bcc))
                {
                    var bccItems = letter.Bcc.Split(',', ';').Select(e => e.Trim()).Where(e => !string.IsNullOrEmpty(e));
                    foreach (var item in bccItems)
                    {
                        if (IsValidEmail(item))
                        {
                            message.Bcc.Add(new MailboxAddress(item, item));
                            hasValidRecipients = true;
                        }
                    }
                }

                if (!hasValidRecipients)
                {
                    Console.WriteLine("لا يوجد مستلمين صالحين للإرسال");
                    return false;
                }


                // Create multipart body
                var multipart = new Multipart("mixed");

                // Add email body
                var emailBody = GenerateDefaultEmailBody(letter);

                var bodyPart = new TextPart(MimeKit.Text.TextFormat.Html)
                {
                    Text = emailBody
                };
                multipart.Add(bodyPart);

                Console.WriteLine($"Email Body Length: {emailBody.Length}");

                // Add PDF attachment
                if (File.Exists(pdfPath))
                {
                    var pdfAttachment = new MimePart("application", "pdf")
                    {
                        Content = new MimeContent(File.OpenRead(pdfPath)),
                        ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                        ContentTransferEncoding = ContentEncoding.Base64,
                        FileName = $"Letter_{letter.Id}.pdf"
                    };
                    multipart.Add(pdfAttachment);
                }
                else
                {
                    Console.WriteLine($"ملف PDF غير موجود: {pdfPath}");
                }

                // Add letter attachments
                Console.WriteLine($"عدد المرفقات: {letter.Attachments?.Count ?? 0}");
                if (letter.Attachments != null && letter.Attachments.Any())
                {
                    foreach (var letterAttachment in letter.Attachments)
                    {
                        
                        
                        if (letterAttachment.Document != null)
                        {
                            // بناء المسار الكامل للملف
                            var fullPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", letterAttachment.Document.StoragePath);
                           
                            
                            if (File.Exists(fullPath))
                            {
                               
                                
                                // تحديد نوع الملف بناءً على الامتداد
                                var extension = Path.GetExtension(letterAttachment.Document.StoragePath).ToLowerInvariant();
                                string mimeType = extension switch
                                {
                                    ".pdf" => "application/pdf",
                                    ".jpg" or ".jpeg" => "image/jpeg",
                                    ".png" => "image/png",
                                    ".gif" => "image/gif",
                                    ".webp" => "image/webp",
                                    ".bmp" => "image/bmp",
                                    ".doc" => "application/msword",
                                    ".docx" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                    ".xls" => "application/vnd.ms-excel",
                                    ".xlsx" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    ".ppt" => "application/vnd.ms-powerpoint",
                                    ".pptx" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    ".txt" => "text/plain",
                                    ".csv" => "text/csv",
                                    ".zip" => "application/zip",
                                    ".rar" => "application/x-rar-compressed",
                                    ".7z" => "application/x-7z-compressed",
                                    ".mp4" => "video/mp4",
                                    ".avi" => "video/x-msvideo",
                                    ".mov" => "video/quicktime",
                                    ".mp3" => "audio/mpeg",
                                    ".wav" => "audio/wav",
                                    ".json" => "application/json",
                                    ".xml" => "application/xml",
                                    ".html" => "text/html",
                                    ".css" => "text/css",
                                    ".js" => "application/javascript",
                                    _ => "application/octet-stream"
                                };
                                
                                var attachment = new MimePart(mimeType.Split('/')[0], mimeType.Split('/')[1])
                                {
                                    Content = new MimeContent(File.OpenRead(fullPath)),
                                    ContentDisposition = new ContentDisposition(ContentDisposition.Attachment),
                                    ContentTransferEncoding = ContentEncoding.Base64,
                                    FileName = letterAttachment.Document.Title + extension
                                };
                                multipart.Add(attachment);
                                Console.WriteLine($"تم إضافة المرفق: {letterAttachment.Document.Title}");
                            }
                            else
                            {
                                Console.WriteLine($"المرفق غير موجود في المسار: {fullPath}");
                            }
                        }
                    }
                }
                else
                {
                    Console.WriteLine("لا توجد مرفقات للخطاب");
                }

                message.Body = multipart;


                using (var smtp = new SmtpClient())
                {
                    try
                    {
                        await smtp.ConnectAsync(_smtpHost, _smtpPort, true);
                        await smtp.AuthenticateAsync(_smtpUsername, _smtpPassword);
                        await smtp.SendAsync(message);

                        return true;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"خطأ في إرسال الميل: {ex.Message}");
                        Console.WriteLine($"Stack trace: {ex.StackTrace}");
                        return false;
                    }
                    finally
                    {
                        smtp.Disconnect(true);
                        smtp.Dispose();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطأ عام في إرسال الميل: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                return false;
            }
        }

        private string GenerateDefaultEmailBody(Letter letter)
        {
            return $@"
                <html>
                <body dir='rtl' style='font-family: Arial, sans-serif;'>
                    <div style='background-color: #f8f9fa; padding: 20px; border-radius: 10px;'>
                        <h2 style='color: #d4af37; text-align: center;'>خطاب رسمي</h2>
                        
                       
                        
                        <div style='margin: 20px 0; padding: 15px; background-color: white; border-radius: 5px;'>
                            <h3 style='color: #d4af37;'>محتوى الرسالة:</h3>
                            <p style='line-height: 1.6;'>{letter.Body}</p>
                        </div>
                        
                        <div style='margin-top: 30px; text-align: center; color: #666;'>
                            <p>تم إرسال هذا الخطاب من نظام إدارة المكاتب</p>
                            <p>يرجى الاطلاع على المرفق للتفاصيل الكاملة</p>
                        </div>
                    </div>
                </body>
                </html>";
        }

        public async Task SendEmail(EmailDTO email)
        {
            // يمكن استخدام نفس منطق الإرسال أو استدعاء EmailService الموجود
            // للآن سنتركه فارغاً كما هو في EmailService
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
