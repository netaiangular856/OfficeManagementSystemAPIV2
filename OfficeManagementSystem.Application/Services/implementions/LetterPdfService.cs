using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterPdfService : ILetterPdfService
    {
        public async Task<string> GenerateLetterPdfAsync(Letter letter)
        {
            try
            {
                QuestPDF.Settings.License = LicenseType.Community;

                // تسجيل الخطوط العربية للنتيجة الأرقى
                // FontManager.RegisterFontFromFile("wwwroot/fonts/Amiri-Regular.ttf");
                // FontManager.RegisterFontFromFile("wwwroot/fonts/Amiri-Bold.ttf");

                bool IsArabicStart(string s) => !string.IsNullOrWhiteSpace(s) && Regex.IsMatch(s, @"^\s*\p{IsArabic}");
                string FontFor(bool ar, bool bold = false) =>
                    ar ? (bold ? "Amiri Bold" : "Amiri") : (bold ? "Arial Bold" : "Arial");

                bool subjectAr = IsArabicStart(letter?.Subject ?? "");
                bool bodyAr = IsArabicStart(letter?.Body ?? "");

                var fileName = $"Letter_{letter.Id}_{DateTime.Now:yyyyMMdd_HHmmss}.pdf";
                var directory = Path.Combine("wwwroot", "pdfs");
                if (!Directory.Exists(directory)) Directory.CreateDirectory(directory);
                var filePath = Path.Combine(directory, fileName);

                const string Gold = "#D4AF37";
                const string TextDark = "#2C3E50";
                const string TextBody = "#34495E";

                var document = Document.Create(container =>
                {
                    container.Page(page =>
                    {
                        page.Size(PageSizes.A4);
                        //page.Margin(2.5f, Unit.Centimetre);
                        page.PageColor(Colors.White);
                        page.DefaultTextStyle(x => x.FontSize(13).FontFamily("Arial"));

                        // ===== Header: خلفية ذهبية مع نص في المنتصف =====
                        page.Header()
                            .Background(Gold)
                            .PaddingTop(10)
                            .AlignCenter()
                            .PaddingVertical(10, Unit.Point)
                            .Text(t =>
                            {
                                t.Span(letter.Subject??"")
                                 .FontSize(22).Bold().FontColor("#2C3E50")
                                 .FontFamily(FontFor(true, bold: true));
                                t.Line("");
                                
                            });

                        // ===== المحتوى الرئيسي =====
                        page.Content()
                            .PaddingVertical(40, Unit.Point)
                            .Column(x =>
                            {
                               

                                // النص الرئيسي - محاذاة حسب اللغة
                                x.Item().PaddingBottom(20).Element(body =>
                                {
                                    if (bodyAr)
                                    {
                                        body.AlignRight()
                                            .PaddingHorizontal(15, Unit.Point)
                                            .Text(t =>
                                            {
                                                t.DefaultTextStyle(s => s.LineHeight(2.0f));
                                                t.Span(letter.Body ?? "")
                                                 .FontSize(15).FontColor(TextBody)
                                                 .FontFamily(FontFor(bodyAr));
                                            });
                                    }
                                    else
                                    {
                                        body.AlignLeft()
                                            .PaddingHorizontal(15, Unit.Point)
                                            .Text(t =>
                                            {
                                                t.DefaultTextStyle(s => s.LineHeight(2.0f));
                                                t.Span(letter.Body ?? "")
                                                 .FontSize(15).FontColor(TextBody)
                                                 .FontFamily(FontFor(bodyAr));
                                            });
                                    }
                                });

                            });

                        // ===== Footer: خلفية ذهبية مع ترقيم في المنتصف =====
                        page.Footer()
     .Background(Colors.White)
     //.PaddingVertical(10)
     //.PaddingHorizontal(30)
     .Element(footer =>
     {
         if (letter.Status == LetterStatus.Approved)
         {
             footer.Column(col =>
             {
                 // التوقيع على اليمين (زي ما هو)
                 col.Item().AlignRight().Width(250)
                     .Column(sigCol =>
                     {
                         sigCol.Spacing(8);

                         sigCol.Item()
                             .Background("#FFFFFF")
                             .Padding(10)
                             .Column(signatureContent =>
                             {
                                 var signaturePath = !string.IsNullOrEmpty(letter.SignatureImagePath)
                                     ? (Path.IsPathRooted(letter.SignatureImagePath)
                                         ? letter.SignatureImagePath
                                         : Path.Combine("wwwroot", letter.SignatureImagePath.TrimStart('/', '\\')))
                                     : null;

                                 if (!string.IsNullOrEmpty(signaturePath) && File.Exists(signaturePath))
                                 {
                                     signatureContent.Item().AlignRight()
                                         .Height(40, Unit.Point)
                                         .Width(150, Unit.Point)
                                         .Image(signaturePath)
                                         .FitArea();
                                 }
                                 else
                                 {
                                     signatureContent.Item().AlignCenter()
                                         .Text("التوقيع")
                                         .FontSize(14).Bold()
                                         .FontColor("#D4AF37")
                                         .FontFamily(FontFor(true, bold: true));
                                 }
                             });
                     });

                 // خط أفقي بعرض الصفحة تحت التوقيع
                 col.Item()
                    //.PaddingTop(10)
                    .Height(40, Unit.Point)              // ارتفاع بسيط علشان يرسم الحد
                    .Background("#D4AF37")
                    .BorderTop(10, Unit.Point)
                    .BorderColor("#D4AF37");
             });
         }
     });



                    });
                });

                document.GeneratePdf(filePath);
                return filePath;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"خطأ في إنشاء PDF: {ex.Message}");
                Console.WriteLine($"Stack trace: {ex.StackTrace}");
                throw;
            }
        }

        //private TextFormattingDto? DeserializeFormatting(string? formattingJson)
        //{
        //    if (string.IsNullOrEmpty(formattingJson))
        //        return null;

        //    try
        //    {
        //        return JsonConvert.DeserializeObject<TextFormattingDto>(formattingJson);
        //    }
        //    catch
        //    {
        //        return null;
        //    }
        //}
    }
}
