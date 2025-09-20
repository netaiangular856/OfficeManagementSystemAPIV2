using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Letters;
using System;
using Newtonsoft.Json;

namespace OfficeManagementSystem.Application.Mapping
{
    public class LetterMappingProfile : Profile
    {
        public LetterMappingProfile()
        {
            // Letter mappings
            CreateMap<CreateLetterDto, Letter>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.BodyHtml, opt => opt.MapFrom(src => src.BodyHtml))
                ;

            CreateMap<UpdateLetterDto, Letter>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.BodyHtml, opt => opt.MapFrom(src => src.BodyHtml))
                ;

            CreateMap<Letter, LetterDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? $"{src.CreatedBy.FirstName} {src.CreatedBy.LastName}" : ""))
                .ForMember(dest => dest.ApprovedByName, opt => opt.MapFrom(src => src.ApprovedBy != null ? $"{src.ApprovedBy.FirstName} {src.ApprovedBy.LastName}" : ""))
                ;

            // Letter Attachment mappings
            CreateMap<CreateLetterAttachmentDto, LetterAttachment>();
            CreateMap<LetterAttachment, LetterAttachmentDto>()
                .ForMember(dest => dest.FilePath, opt => opt.MapFrom(src => src.Document.StoragePath))
                .ForMember(dest => dest.FileName, opt => opt.MapFrom(src => src.Document.Title))
                .ForMember(dest => dest.FileType, opt => opt.MapFrom(src => Path.GetExtension(src.Document.StoragePath)))
                .ForMember(dest => dest.UploadedByUserId, opt => opt.MapFrom(src => src.Document.CreatedByUserId))
                .ForMember(dest => dest.UploadedByName, opt => opt.MapFrom(src => src.Document.CreatedBy != null ? $"{src.Document.CreatedBy.FirstName} {src.Document.CreatedBy.LastName}" : ""))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Document.Description))
                .ForMember(dest => dest.UploadedAt, opt => opt.MapFrom(src => src.Document.CreatedAt))
                .ForMember(dest => dest.DocumentSource, opt => opt.MapFrom(src => src.Document.DocumentSource));
                
        }

        private long GetFileSize(string filePath)
        {
            try
            {
                if (System.IO.File.Exists(filePath))
                {
                    var fileInfo = new System.IO.FileInfo(filePath);
                    return fileInfo.Length;
                }
            }
            catch
            {
                // Ignore errors
            }
            return 0;
        }
    }
}
