using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Documents;
using System;

namespace OfficeManagementSystem.Application.Mapping
{
    public class DocumentMappingProfile : Profile
    {
        public DocumentMappingProfile()
        {
            // Document mappings
            CreateMap<CreateDocumentDto, Document>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.StoragePath, opt => opt.Ignore()); // Will be set by service

            CreateMap<UpdateDocumentDto, Document>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.StoragePath, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore());

            CreateMap<Document, DocumentDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? $"{src.CreatedBy.FirstName} {src.CreatedBy.LastName}" : ""))
                .ForMember(dest => dest.FileName, opt => opt.MapFrom(src => System.IO.Path.GetFileNameWithoutExtension(src.StoragePath)))
                .ForMember(dest => dest.FileExtension, opt => opt.MapFrom(src => System.IO.Path.GetExtension(src.StoragePath)))
               ;
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
