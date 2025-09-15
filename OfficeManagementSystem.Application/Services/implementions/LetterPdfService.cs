using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity.Letters;
using OfficeManagementSystem.Domain.Enums.Letters;
using Newtonsoft.Json;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class LetterPdfService : ILetterPdfService
    {
        public async Task<string> GenerateLetterPdfAsync(Letter letter)
        {
            try
            {
                QuestPDF.Settings.License = LicenseType.Community;

                var fileName = $"Letter_{letter.Id}_{DateTime.Now:yyyyMMdd_HHmmss}.pdf";
                var directory = Path.Combine("wwwroot", "pdfs");
                
                // Create directory if it doesn't exist
                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }
                
                var filePath = Path.Combine(directory, fileName);

                var document = Document.Create(container =>
                {
                    container.Page(page =>
                    {
                        page.Size(PageSizes.A4);
                        //page.Margin(2.5f, Unit.Centimetre);
                        page.PageColor(Colors.White);
                        page.DefaultTextStyle(x => x.FontSize(13));

                        // Professional Header
                        page.Header()
                            .Height(120, Unit.Point)
                            .Background(Colors.White)
                            .BorderBottom(2, Unit.Point)
                            .BorderColor("#D4AF37") // Gold border
                            .Padding(20, Unit.Point)
                            .Column(col =>
                            {
                                col.Item().AlignCenter()
                                    .Text("نظام إدارة المكاتب")
                                    .FontSize(24)
                                    .FontColor("#D4AF37") // Professional gold
                                    .Bold()
                                    .FontFamily("Arial");
                                
                                col.Item().PaddingTop(10).AlignCenter()
                                    .Text("Office Management System")
                                    .FontSize(10)
                                    .FontColor("#666666")
                                    .SemiBold();
                            });

                        page.Content()
                            .PaddingVertical(40, Unit.Point)
                            .Column(x =>
                            {
                                // Subject - Clean and Professional
                                x.Item().PaddingBottom(35, Unit.Point)
                                    .Text(letter.Subject)
                                    .FontSize(20)
                                    .Bold()
                                    .FontColor("#2C3E50") // Professional dark blue
                                    .AlignCenter()
                                    .FontFamily("Arial");

                                // Decorative line under subject
                                x.Item().PaddingBottom(30, Unit.Point)
                                    .BorderBottom(1, Unit.Point)
                                    .BorderColor("#D4AF37")
                                    .PaddingHorizontal(50, Unit.Point);

                                // Body content with professional formatting
                                x.Item().PaddingBottom(50, Unit.Point)
                                    .PaddingHorizontal(20, Unit.Point)
                                    .Text(letter.Body)
                                    .FontSize(14)
                                    .FontColor("#34495E") // Professional text color
                                    .LineHeight(1.9f)
                                    .AlignRight()
                                    .FontFamily("Arial");

                                // Professional Signature Section
                                if (letter.Status == LetterStatus.Approved && !string.IsNullOrEmpty(letter.SignatureImagePath))
                                {
                                    x.Item().AlignRight()
                                        .PaddingVertical(20, Unit.Point)
                                        .PaddingRight(10, Unit.Point)
                                        .Column(sigCol =>
                                        {
                                            // Signature border and background
                                            sigCol.Item()
                                                .Background("#ffffff")
                                                
                                                .Padding(20, Unit.Point)
                                                .Column(signatureContent =>
                                                {
                                                    // Check if signature image exists and display it
                                                    var signaturePath = Path.IsPathRooted(letter.SignatureImagePath) 
                                                        ? letter.SignatureImagePath 
                                                        : Path.Combine("wwwroot", letter.SignatureImagePath.TrimStart('/', '\\'));
                                                    
                                                    if (File.Exists(signaturePath))
                                                    {
                                                        signatureContent.Item().AlignCenter()
                                                            .Height(30, Unit.Point)
                                                            .Width(120, Unit.Point)
                                                            
                                                            .Image(signaturePath)
                                                            .FitArea();
                                                    }
                                                    else
                                                    {
                                                        signatureContent.Item().AlignCenter()
                                                            .Text("التوقيع")
                                                            .FontSize(14)
                                                            .FontColor("#BDC3C7")
                                                            .Bold();
                                                    }

                                                   

                                                });
                                        });
                                }
                            });

                        // Professional Footer
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
                Console.WriteLine($"تم إنشاء PDF بنجاح: {filePath}");
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
