using AutoMapper;
using LinqKit;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class WorkFlowLogsService : IWorkFlowLogsService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public WorkFlowLogsService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<PaginatedResult<WorkflowLogDto>> GetAuditLogsAsync(WorkFlowLogFilterRequest request)
        {
            var query = await _unitOfWork.WorkFlowLogRepository.GetAllAsync(
                filter: BuildFilter(request),
                orderBy: m => m.OrderByDescending(x => x.CreatedAt),
                disableTracking: true
            );


            var totalCount = query.Count();

            var pagedData = query
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .ToList();

            var mappedData = _mapper.Map<List<WorkflowLogDto>>(pagedData);

            return new PaginatedResult<WorkflowLogDto>
            {
                Items = mappedData,
                TotalCount = totalCount,
                Page = request.Page,
                PageSize = request.PageSize,
            };
        }
        private Expression<Func<WorkflowLog, bool>> BuildFilter(WorkFlowLogFilterRequest request)
        {
            Expression<Func<WorkflowLog, bool>> filter = x => true;

            if (request.FromDate.HasValue)
            {
                var fromDate = request.FromDate.Value.Date;
                filter = filter.And(x => x.CreatedAt.Date >= fromDate);
            }

            if (request.ToDate.HasValue)
            {
                var toDate = request.ToDate.Value.Date;
                filter = filter.And(x => x.CreatedAt.Date <= toDate);
            }

            if (!string.IsNullOrEmpty(request.Search))
            {
                var searchLower = request.Search.ToLower();

                filter = filter.And(x =>
                    x.EntityName.ToLower().Contains(searchLower) ||
                    x.Description.ToLower().Contains(searchLower) ||
                    x.EntityId.ToString().ToLower().Contains(searchLower) 
                );
            }

            return filter;
        }

    }
}
