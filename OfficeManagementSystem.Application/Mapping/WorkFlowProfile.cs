using AutoMapper;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Mapping
{
    public class WorkFlowProfile:Profile
    {
        public WorkFlowProfile()
        {
            CreateMap<WorkflowLog, WorkflowLogDto>().ReverseMap();
        }
    }
}
