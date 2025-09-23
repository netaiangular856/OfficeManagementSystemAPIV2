using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using Microsoft.AspNetCore.Identity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Text;
using System.Text.RegularExpressions;
using IronPdf;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterPdfServiceIronPdf : ILetterPdfService
    {
        private readonly UserManager<AppUser> _userManager;

        public LetterPdfServiceIronPdf(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<byte[]> GenerateLetterPdfAsync(Letter letter)
        {
            try
            {
                var userSignature = await _userManager.Users.OfType<Employee>()
                    .FirstOrDefaultAsync(m => m.Id == letter.ApprovedByUserId);

                // إنشاء HTML مع CSS متقدم
                var htmlContent = await GenerateLetterHtmlAsync(letter, userSignature);

                // تحويل HTML إلى PDF وإرجاعه كـ byte array
                var pdfBytes = await ConvertHtmlToPdfAsync(htmlContent);

                return pdfBytes;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطأ في إنشاء PDF: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                throw;
            }
        }

        private async Task<byte[]> ConvertHtmlToPdfAsync(string htmlContent)
        {
            try
            {
                // إعداد محول HTML إلى PDF
                var renderer = new ChromePdfRenderer();
                
                // إعدادات الصفحة - نفس إعدادات PuppeteerSharp
                var pdfOptions = new ChromePdfRenderOptions
                {
                    PaperSize = IronPdf.Rendering.PdfPaperSize.A4,
                    MarginTop = 0,
                    MarginRight = 0,
                    MarginBottom = 0,
                    MarginLeft = 0,
                    PrintHtmlBackgrounds = true,
                    CssMediaType = IronPdf.Rendering.PdfCssMediaType.Print,
                    ViewPortWidth = 1400,
                    ViewPortHeight = 800,
                    EnableJavaScript = true
                };
                
                // تحويل HTML إلى PDF
                var pdf = await renderer.RenderHtmlAsPdfAsync(htmlContent);
                
                // إرجاع PDF كـ byte array
                return pdf.BinaryData;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطأ في تحويل HTML إلى PDF: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                throw;
            }
        }

        private async Task<string> GenerateLetterHtmlAsync(Letter letter, Employee? userSignature)
        {
            var isArabic = IsArabicText(letter.Subject ?? "");
            // استخدام BodyHtml دائماً إذا كان موجود
            var bodyContent = letter.BodyHtml ?? "لا يوجد محتوى";
                
            // Debug: طباعة المحتوى للتأكد (يمكن إزالته في الإنتاج)
            if (string.IsNullOrWhiteSpace(letter.BodyHtml))
            {
                Console.WriteLine($"Warning: BodyHtml is empty, using Body instead");
            }

            var html = new StringBuilder();
            html.AppendLine("<!DOCTYPE html>");
            html.AppendLine("<html dir='" + (isArabic ? "rtl" : "ltr") + "'>");
            html.AppendLine("<head>");
            html.AppendLine("<meta charset='UTF-8'>");
            html.AppendLine("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
            html.AppendLine("<title>Letter</title>");
            html.AppendLine(GetAdvancedCSS());
            html.AppendLine("</head>");
            html.AppendLine("<body>");
            html.AppendLine("<div class='page-container'>");
            
            // Professional Header
            html.AppendLine("<div class='letter-header'>");
            html.AppendLine($"<h1 class='letter-title'>{letter.Subject}</h1>");
            html.AppendLine("</div>");
            
            // Professional Content
            html.AppendLine("<div class='letter-content'>");
            // إدراج المحتوى HTML مباشرة
            html.Append(bodyContent);
            html.AppendLine("</div>");
            
            // Signature Section
            if (letter.Status == LetterStatus.Approved && !string.IsNullOrEmpty(letter.SignatureImagePath))
            {
                html.AppendLine("<div class='signature-section'>");
                
                // إصلاح مسار صورة التوقيع
                var signaturePath = Path.IsPathRooted(letter.SignatureImagePath)
                    ? letter.SignatureImagePath
                    : Path.Combine("wwwroot", letter.SignatureImagePath.TrimStart('/', '\\'));

                // التحقق من وجود الصورة وإضافة المسار الصحيح
                if (File.Exists(signaturePath))
                {
                    try
                    {
                        // تحويل الصورة إلى Base64 للتأكد من ظهورها في PDF
                        var imageBytes = await File.ReadAllBytesAsync(signaturePath);
                        var base64Image = Convert.ToBase64String(imageBytes);
                        var extension = Path.GetExtension(signaturePath).ToLower();
                        var mimeType = extension switch
                        {
                            ".png" => "image/png",
                            ".jpg" or ".jpeg" => "image/jpeg",
                            ".gif" => "image/gif",
                            ".bmp" => "image/bmp",
                            _ => "image/jpeg"
                        };
                        
                        html.AppendLine($"<img src='data:{mimeType};base64,{base64Image}' class='signature-image' alt='Signature'>");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"خطأ في تحميل صورة التوقيع: {ex.Message}");
                        html.AppendLine("<div class='signature-placeholder'>[خطأ في تحميل صورة التوقيع]</div>");
                    }
                }
                else
                {
                    // إذا لم توجد الصورة، أضف placeholder
                    html.AppendLine("<div class='signature-placeholder'>[صورة التوقيع غير متوفرة]</div>");
                }

                // الاسم والوظيفة تحت الصورة
                var approverFullName = $"{userSignature?.FirstName} {userSignature?.LastName}".Trim();
                var approverJobTitle = userSignature?.JobTitle ?? "";

                html.AppendLine("<div class='signature-info'>");
                if (!string.IsNullOrWhiteSpace(approverFullName))
                    html.AppendLine($"<div class='signature-name'>{approverFullName}</div>");
                if (!string.IsNullOrWhiteSpace(approverJobTitle))
                    html.AppendLine($"<div class='signature-title'>{approverJobTitle}</div>");
                html.AppendLine("</div>");
                
                html.AppendLine("</div>");
            }
            
            // Professional Footer
            html.AppendLine("<div class='letter-footer'>");
            html.AppendLine("<div class='page-info'>");
            html.AppendLine("<span class='footer-text'>صفحة <span class='page-number'></span> من <span class='total-pages'></span></span>");
            html.AppendLine("<span class='footer-separator'> | </span>");
            html.AppendLine("<span class='footer-date'>تاريخ الطباعة: " + DateTime.Now.ToString("dd/MM/yyyy") + "</span>");
            html.AppendLine("</div>");
            html.AppendLine("</div>");
            html.AppendLine("</div>"); // Close page-container
            
            html.AppendLine("</body>");
            html.AppendLine("</html>");

            return html.ToString();
        }

        private string GetAdvancedCSS()
        {
            return @"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Amiri', 'Arial', sans-serif;
        line-height: 1.6;
        color: #2C3E50;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        min-height: 100vh;
        position: relative;
    }
    
    /* Professional Page Layout */
    .page-container {
        background: white;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        overflow: visible;
        position: relative;
        width: 100%;
        min-height: 100vh;
    }
    
    /* Professional Header */
    .letter-header {
        background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
        padding: 30px 20px;
        text-align: center;
        color: white;
        margin-bottom: 30px;
        border-bottom: 4px solid #A67C00;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        position: relative;
    }
    
    .letter-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #A67C00, #D4AF37, #A67C00);
    }
    
    .letter-title {
        font-size: 28px;
        font-weight: bold;
        margin: 0;
        font-family: 'Amiri', 'Arial', sans-serif;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    /* Professional Content */
    .letter-content {
        padding: 30px 25px;
        font-size: 17px;
        line-height: 2.2;
        background: white;
        border-radius: 8px;
        margin: 30px 20px;
        border: 1px solid #e9ecef;
    }
    
    /* Advanced Text Formatting Support */
    .letter-content h1, .letter-content h2, .letter-content h3,
    .letter-content h4, .letter-content h5, .letter-content h6 {
        margin: 20px 0 15px 0;
        font-weight: bold;
        font-family: 'Amiri', 'Arial', sans-serif;
        color: #2C3E50;
    }
    
    .letter-content h2 {
        font-size: 24px;
        border-bottom: 2px solid #D4AF37;
        padding-bottom: 10px;
    }
    
    .letter-content p {
        margin: 15px 0;
        text-align: justify;
        line-height: 1.8;
    }
    
    .letter-content ul, .letter-content ol {
        margin: 15px 0;
        padding-right: 30px;
        padding-left: 30px;
    }
    
    .letter-content li {
        margin: 8px 0;
        line-height: 1.6;
    }
    
    /* Support for mixed content (Arabic/English) */
    .letter-content strong, .letter-content b {
        font-weight: bold;
        color: #2C3E50;
    }
    
    .letter-content em, .letter-content i {
        font-style: italic;
    }
    
    .letter-content u {
        text-decoration: underline;
    }
    
    /* Text Alignment Support */
    .letter-content .ql-align-center {
        text-align: center;
    }
    
    .letter-content .ql-align-right {
        text-align: right;
    }
    
    .letter-content .ql-align-left {
        text-align: left;
    }
    
    .letter-content .ql-align-justify {
        text-align: justify;
    }
    
    /* Font Weight Support */
    .letter-content strong, .letter-content b {
        font-weight: bold;
    }
    
    /* Color Support */
    .letter-content .ql-color-red { color: #e74c3c; }
    .letter-content .ql-color-blue { color: #3498db; }
    .letter-content .ql-color-green { color: #27ae60; }
    .letter-content .ql-color-yellow { color: #f1c40f; }
    .letter-content .ql-color-purple { color: #9b59b6; }
    .letter-content .ql-color-orange { color: #e67e22; }
    
    /* Background Color Support */
    .letter-content .ql-bg-red { background-color: #e74c3c; color: white; }
    .letter-content .ql-bg-blue { background-color: #3498db; color: white; }
    .letter-content .ql-bg-green { background-color: #27ae60; color: white; }
    .letter-content .ql-bg-yellow { background-color: #f1c40f; color: black; }
    
    /* Font Size Support */
    .letter-content .ql-size-small { font-size: 12px; }
    .letter-content .ql-size-large { font-size: 18px; }
    .letter-content .ql-size-huge { font-size: 22px; }
    
    /* RTL Support */
    [dir='rtl'] .letter-content ul,
    [dir='rtl'] .letter-content ol {
        padding-right: 30px;
        padding-left: 0;
    }
    
     .letter-content .ql-align-right {
        text-align: right;
    }
    
    /* Signature Section */
    .signature-section {
        margin-top: 40px;
        margin-bottom: 20px;
        padding: 20px;
        //border-top: 2px solid #D4AF37;
        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        border-radius: 8px;
        //box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        text-align: left;
    }
    
    .signature-image {
        max-height: 100px;
        max-width: 300px;
        margin-bottom: 20px;
        display: block;
        //border: 2px solid #D4AF37;
        border-radius: 4px;
        padding: 8px;
        //background: white;
        //box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-left: 0;
        margin-right: auto;
    }
    
    .signature-placeholder {
        height: 100px;
        width: 300px;
        border: 2px dashed #D4AF37;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        background: #f8f9fa;
        color: #6c757d;
        font-style: italic;
        border-radius: 4px;
        font-family: 'Amiri', 'Arial', sans-serif;
        margin-left: 0;
        margin-right: auto;
    }
    
    .signature-info {
        margin-top: 15px;
        padding: 15px;
        //background: white;
        border-radius: 6px;
        //border-left: 4px solid #D4AF37;
    }
    
    [dir='rtl'] .signature-info {
        border-left: none;
        //border-right: 4px solid #D4AF37;
    }
    
    .signature-name {
        font-weight: bold;
        font-size: 18px;
        color: #2C3E50;
        margin-bottom: 8px;
        font-family: 'Amiri', 'Arial', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .signature-title {
        font-size: 16px;
        color: #495057;
        font-family: 'Amiri', 'Arial', sans-serif;
        margin-bottom: 0;
        font-weight: 500;
    }
    
    /* Professional Footer */
    .letter-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #D4AF37 0%, #B8941F 100%);
        padding: 8px 20px;
        text-align: center;
        color: white;
        font-size: 12px;
        border-top: 2px solid #A67C00;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        margin-bottom: 0;
    }
    
    .page-info {
        font-family: 'Amiri', 'Arial', sans-serif;
        font-weight: 600;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .footer-text, .footer-date {
        font-size: 11px;
        opacity: 0.95;
    }
    
    .footer-separator {
        opacity: 0.7;
        font-weight: 300;
    }
    
    /* Add margin to content to avoid footer overlap */
    body {
        margin: 0;
        padding: 0;
    }
    
    /* Ensure content doesn't overlap with footer */
    .page-container {
        min-height: auto;
        padding-bottom: 50px;
        margin: 0;
    }
    
    /* Ensure proper page breaks */
    .signature-section {
        page-break-inside: avoid;
        margin-bottom: 40px;
    }
    
    /* Ensure content doesn't overlap with footer */
    .letter-content ol,
    .letter-content ul {
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
    
    .letter-content ol li,
    .letter-content ul li {
        margin-bottom: 8px;
    }
    
    /* Print Styles */
    @media print {
        body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin-bottom: 0;
        }
        
        .letter-header,
        .letter-footer {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
        }
        
        /* Ensure footer appears on every page */
        .letter-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
        }
        
        /* Add page margins to avoid content overlap */
        @page {
            margin: 0;
            size: A4;
        }
        
        /* Remove extra spacing on subsequent pages */
        .page-container {
            min-height: auto;
            padding-bottom: 50px;
        }
        
        /* Ensure content starts at top of page */
        .letter-content {
            margin-top: 0;
        }
        
        /* Add margin-top for subsequent pages */
        .page-break + .letter-content {
            margin-top: 20px;
        }
        
        /* Add margin-top for content after page break */
        .letter-content:first-child {
            margin-top: 20px;
        }
        
        /* Remove extra spacing from header */
        .letter-header {
            margin-bottom: 20px;
        }
        
        /* Ensure proper spacing for signature */
        .signature-section {
            margin-top: 40px;
            margin-bottom: 20px;
        }
        
        /* Ensure content doesn't overlap with footer in print */
        .letter-content ol,
        .letter-content ul {
            margin-bottom: 20px;
            padding-bottom: 20px;
        }
        
        .letter-content ol li,
        .letter-content ul li {
            margin-bottom: 8px;
        }
    }
    
    /* CKEditor/Quill Specific Styles */
    .letter-content .ql-editor {
        padding: 0;
    }
    
    /* Custom styles for inline formatting */
    .letter-content span[style*='color'] {
        color: inherit !important;
    }
    
    .letter-content span[style*='background-color'] {
        background-color: inherit !important;
    }
    
    .letter-content span[style*='font-weight'] {
        font-weight: inherit !important;
    }
    
    /* Page Break Support */
    .page-break {
        page-break-before: always;
        break-before: page;
        margin: 0;
        border-top: 2px solid #D4AF37;
        padding-top: 20px;
    }
    
    /* Ensure proper page breaks and spacing */
    .letter-content + .page-break {
        margin-top: 0;
    }
    
    /* Add margin-top for content after page breaks */
    .page-break + .letter-content {
        margin-top: 20px;
        padding-top: 0;
    }
    
    /* Add margin-top for first content on new pages */
    .letter-content:first-child {
        margin-top: 20px;
    }
    
    /* Ensure proper text rendering */
    .letter-content * {
        max-width: 100%;
        word-wrap: break-word;
    }
.letter-content table { width:100%; border-collapse:collapse; table-layout:fixed; margin:16px 0; }
.letter-content th, .letter-content td { border:1px solid #dee2e6; padding:8px 10px; vertical-align:top; word-break:break-word; }
.letter-content thead { display: table-header-group; }
.letter-content tfoot { display: table-footer-group; }
.letter-content tr { page-break-inside: avoid; break-inside: avoid; }

/* دعم محاذاة جاية من Quill أو CKEditor */
.letter-content .ql-align-right, .letter-content [style*=""text-align:right""]  { text-align:right !important; }
.letter-content .ql-align-center, .letter-content [style*=""text-align:center""]{ text-align:center !important; }
.letter-content .ql-align-left,  .letter-content [style*=""text-align:left""]   { text-align:left !important; }

/* فاصل صفحة */
.page-break { page-break-before: always; break-before: page; }


</style>";
        }

        private static bool IsArabicText(string s)
        {
            if (string.IsNullOrWhiteSpace(s)) return false;

            foreach (var c in s)
            {
                if (char.IsWhiteSpace(c) || char.IsControl(c)) continue;

                // Arabic blocks
                int u = c;
                bool isArabic =
                    (u >= 0x0600 && u <= 0x06FF) ||   // Arabic
                    (u >= 0x0750 && u <= 0x077F) ||   // Arabic Supplement
                    (u >= 0x08A0 && u <= 0x08FF) ||   // Arabic Extended-A
                    (u >= 0xFB50 && u <= 0xFDFF) ||   // Arabic Presentation Forms-A
                    (u >= 0xFE70 && u <= 0xFEFF);     // Arabic Presentation Forms-B

                return isArabic;
            }
            return false;
        }
    }
}
