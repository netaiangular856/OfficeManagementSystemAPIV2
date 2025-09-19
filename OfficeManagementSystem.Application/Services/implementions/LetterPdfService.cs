using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using Newtonsoft.Json;
using System.Text.RegularExpressions;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using Microsoft.AspNetCore.Identity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity;
using Microsoft.EntityFrameworkCore;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterPdfService : ILetterPdfService
    {
        private readonly UserManager<AppUser> _userManager;

        public LetterPdfService(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<string> GenerateLetterPdfAsync(Letter letter)
        {
            try
            {
                QuestPDF.Settings.License = LicenseType.Community;

                // تسجيل الخطوط العربية للنتيجة الأرقى
                // FontManager.RegisterFontFromFile("wwwroot/fonts/Amiri-Regular.ttf");
                // FontManager.RegisterFontFromFile("wwwroot/fonts/Amiri-Bold.ttf");
                var userSignature = await _userManager.Users.OfType<Employee>()
                    .FirstOrDefaultAsync(m=>m.Id==letter.ApprovedByUserId);

                bool IsArabicStart(string s) => !string.IsNullOrWhiteSpace(s) && Regex.IsMatch(s, @"^\s*\p{IsArabic}");
                string FontFor(bool ar, bool bold = false) =>
                    ar ? (bold ? "Amiri Bold" : "Amiri") : (bold ? "Arial Bold" : "Arial");

                bool isAr = IsArabicText(letter?.Subject ?? "");
                //bool bodyAr = IsArabicText(letter?.Body ?? "");

                var fileName = $"Letter_{letter.Subject}_{DateTime.Now:yyyyMMdd_HHmmss}.pdf";
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
                                    if (isAr)
                                    {
                                        body
                                        .ContentFromRightToLeft()
                                        //.Padding(10,Unit.Point)
                                            .PaddingHorizontal(15, Unit.Point)
                                            
                                            .Text(t =>
                                            {
                                                t.DefaultTextStyle(s => s.LineHeight(2.0f));
                                                t.Span(letter.Body ?? "")
                                                 .FontSize(15).FontColor(TextBody)
                                                 .FontFamily(FontFor(isAr));
                                            });
                                    }
                                    else
                                    {
                                        body
                                        .AlignLeft()
                                            .PaddingHorizontal(15, Unit.Point)
                                            .Text(t =>
                                            {
                                                t.DefaultTextStyle(s => s.LineHeight(2.0f));
                                                t.Span(letter.Body ?? "")
                                                 .FontSize(15).FontColor(TextBody)
                                                 .FontFamily(FontFor(isAr));
                                            });
                                    }

                                    // Professional Signature Section
                                    // Professional Signature Section
                                    // Professional Signature Section
                                    if (letter.Status == LetterStatus.Approved && !string.IsNullOrEmpty(letter.SignatureImagePath))
                                    {
                                        x.Item()
                                         .PaddingVertical(20, Unit.Point)
                                         .PaddingLeft(10, Unit.Point)
                                         .Column(sigCol =>
                                         {
                                             sigCol.Item()
                                                   .Background("#ffffff")
                                                   .Padding(20, Unit.Point)
                                                   .Column(signatureContent =>
                                                   {
                                                       // Resolve signature image path
                                                       var signaturePath = Path.IsPathRooted(letter.SignatureImagePath)
                                                           ? letter.SignatureImagePath
                                                           : Path.Combine("wwwroot", letter.SignatureImagePath.TrimStart('/', '\\'));


                                                       // 1) صورة التوقيع (إن وُجدت)
                                                       if (File.Exists(signaturePath))
                                                       {
                                                           if (isAr)
                                                           {
                                                               signatureContent.Item()
                                                                               .AlignRight()
                                                                               .Height(30, Unit.Point)
                                                                               .Width(120, Unit.Point)
                                                                               .Image(signaturePath)
                                                                               
                                                                               .FitArea();
                                                           }
                                                           else
                                                           {
                                                               signatureContent.Item()
                                                                               .AlignLeft()
                                                                               .Height(30, Unit.Point)
                                                                               .Width(120, Unit.Point)
                                                                               .Image(signaturePath)
                                                                               .FitArea();
                                                           }
                                                       }
                                                       

                                                       // 2) الاسم الكامل والمسمى الوظيفي
                                                       var approverFullName = $"{userSignature?.FirstName} {userSignature?.LastName}".Trim();
                                                       var approverJobTitle = userSignature?.JobTitle ?? "";

                                                       // في حال اللغة عربية نخلي المحتوى RTL
                                                       signatureContent.Item()
                                                                       .PaddingTop(8)
                                                                       .Element(nameTitle =>
                                                                       {
                                                                           if (isAr)
                                                                           {
                                                                               nameTitle.ContentFromRightToLeft()
                                                                                        .Text(t =>
                                                                                        {
                                                                                            t.DefaultTextStyle(s => s.FontFamily(FontFor(true)).FontSize(12).FontColor("#2C3E50"));
                                                                                            if (!string.IsNullOrWhiteSpace(approverFullName))
                                                                                                t.Line(approverFullName).FontFamily(FontFor(true, bold: true)).Bold();
                                                                                            if (!string.IsNullOrWhiteSpace(approverJobTitle))
                                                                                                t.Line(approverJobTitle).FontFamily(FontFor(true)).FontSize(11).FontColor("#34495E");
                                                                                        });
                                                                           }
                                                                           else
                                                                           {
                                                                               nameTitle.AlignLeft()
                                                                                        .Text(t =>
                                                                                        {
                                                                                            t.DefaultTextStyle(s => s.FontFamily(FontFor(false)).FontSize(12).FontColor("#2C3E50"));
                                                                                            if (!string.IsNullOrWhiteSpace(approverFullName))
                                                                                                t.Line(approverFullName).FontFamily(FontFor(false, bold: true)).Bold();
                                                                                            if (!string.IsNullOrWhiteSpace(approverJobTitle))
                                                                                                t.Line(approverJobTitle).FontFamily(FontFor(false)).FontSize(11).FontColor("#34495E");
                                                                                        });
                                                                           }
                                                                       });
                                                   });
                                         });
                                    }


                                });

                            });

                        // ===== Footer: خلفية ذهبية مع ترقيم في المنتصف =====
                        page.Footer()
                            .Height(35, Unit.Point)
                            .Background("#D4AF37")
                            .BorderTop(1, Unit.Point)
                            .BorderColor("#D4AF37")
                            .AlignCenter()
                            .PaddingVertical(10, Unit.Point)
                            .Text(x =>
                            {
                                x.Span("صفحة ").FontSize(9).FontColor("#ffffff");
                                x.CurrentPageNumber().FontSize(9).FontColor("#ffffff");
                                x.Span(" من ").FontSize(9).FontColor("#ffffff");
                                x.TotalPages().FontSize(9).FontColor("#ffffff");
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
