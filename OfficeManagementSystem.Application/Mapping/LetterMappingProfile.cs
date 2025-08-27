using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity.Letters;
using System;

namespace OfficeManagementSystem.Application.Mapping
{
    public class LetterMappingProfile : Profile
    {
        public LetterMappingProfile()
        {
            // Letter mappings
            CreateMap<CreateLetterDto, Letter>()
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateTime.UtcNow));

            CreateMap<UpdateLetterDto, Letter>()
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore());

            CreateMap<Letter, LetterDto>()
                .ForMember(dest => dest.CreatedByName, opt => opt.MapFrom(src => src.CreatedBy != null ? $"{src.CreatedBy.FirstName} {src.CreatedBy.LastName}" : ""));

            // Letter Attachment mappings
            CreateMap<CreateLetterAttachmentDto, LetterAttachment>();
            CreateMap<LetterAttachment, LetterAttachmentDto>();
                
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
