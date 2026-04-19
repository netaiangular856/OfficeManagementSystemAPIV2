using AutoMapper;
using LinqKit;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OfficeManagementSystem.Application.DTOs;
using OfficeManagementSystem.Application.DTOs.Common;
using OfficeManagementSystem.Application.Services.Interfaces;
using OfficeManagementSystem.Domain.Entity;
using OfficeManagementSystem.Domain.Entity.Auth;
using OfficeManagementSystem.Domain.Entity.Carbon;
using OfficeManagementSystem.Domain.Enums.Carbon;
using OfficeManagementSystem.Domain.Interfaces.Repositories;
using System.Linq;
using System.Linq.Expressions;

namespace OfficeManagementSystem.Application.Services.implementions
{
    public class CarbonService : ICarbonService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly ILogger<CarbonService> _logger;

        public CarbonService(
            IUnitOfWork unitOfWork,
            IMapper mapper,
            UserManager<AppUser> userManager,
            ILogger<CarbonService> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
            _logger = logger;
        }

        public async Task<ApiResponse<EmissionCalculationResultDto>> CalculateEmissionAsync(CalculateEmissionDto calculateDto)
        {
            try
            {
                // الحصول على معامل الانبعاث
                var factor = await _unitOfWork.CarbonEmissionFactorRepository
                    .GetByTransportTypeAsync(calculateDto.TransportType);

                if (factor == null)
                {
                    return ApiResponse<EmissionCalculationResultDto>.ErrorResponse(
                        $"معامل الانبعاث غير موجود لنوع النقل: {calculateDto.TransportType}");
                }

                // حساب الانبعاث
                // للطيران: المسافة × المعامل × عدد المشاركين
                // للسيارات: المسافة × المعامل (أو × عدد المشاركين حسب التصميم)
                decimal emissionValue;
                
                if (calculateDto.TransportType == TransportType.DomesticFlight || 
                    calculateDto.TransportType == TransportType.InternationalFlight)
                {
                    // للطيران: نحسب لكل راكب
                    emissionValue = calculateDto.Distance * factor.Factor * calculateDto.ParticipantsCount;
                }
                else
                {
                    // للسيارات والحافلات: نحسب للرحلة كاملة (يمكن تعديلها لتحسب لكل راكب)
                    emissionValue = calculateDto.Distance * factor.Factor * calculateDto.ParticipantsCount;
                }

                var result = new EmissionCalculationResultDto
                {
                    EmissionValue = emissionValue,
                    EmissionValueInTons = emissionValue / 1000, // تحويل من كجم إلى طن
                    Factor = factor.Factor,
                    FactorName = factor.Name,
                    FactorNameAr = factor.NameAr
                };

                return ApiResponse<EmissionCalculationResultDto>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<EmissionCalculationResultDto>.ErrorResponse(
                    $"خطأ في حساب الانبعاث: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CarbonActivityDto>> CreateActivityAsync(CreateCarbonActivityDto createDto, string userId)
        {
            try
            {
                // التحقق من وجود المستخدم
                var user = await _userManager.FindByIdAsync(userId);
                if (user == null)
                {
                    return ApiResponse<CarbonActivityDto>.ErrorResponse("المستخدم غير موجود");
                }

                // حساب الانبعاث
                var calculateDto = new CalculateEmissionDto
                {
                    TransportType = createDto.TransportType,
                    Distance = createDto.Distance,
                    ParticipantsCount = createDto.ParticipantsCount
                };

                var calculationResult = await CalculateEmissionAsync(calculateDto);
                if (!calculationResult.Success)
                {
                    return ApiResponse<CarbonActivityDto>.ErrorResponse(calculationResult.Message);
                }

                // إنشاء النشاط
                var activity = _mapper.Map<CarbonActivity>(createDto);
                activity.CreatedBy = userId;
                activity.EmissionValue = calculationResult.Data!.EmissionValue;

                await _unitOfWork.CarbonActivityRepository.AddAsync(activity);
                await _unitOfWork.SaveAsync();

                // جلب النشاط مع التفاصيل
                var result = await _unitOfWork.CarbonActivityRepository.GetByIdWithDetailsAsync(activity.Id);
                var dto = _mapper.Map<CarbonActivityDto>(result);
                
                if (result?.CreatedByUser != null)
                {
                    dto.CreatedByUserName = result.CreatedByUser.UserName ?? result.CreatedByUser.Email ?? "غير محدد";
                }

                return ApiResponse<CarbonActivityDto>.SuccessResponse(dto, "تم إنشاء النشاط بنجاح");
            }
            catch (Exception ex)
            {
                return ApiResponse<CarbonActivityDto>.ErrorResponse(
                    $"خطأ في إنشاء النشاط: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CarbonDashboardDto>> GetDashboardAsync(DateTime? fromDate = null, DateTime? toDate = null)
        {
            try
            {
                // تحديد النطاق الزمني (الشهر الحالي إذا لم يتم تحديده)
                if (!fromDate.HasValue || !toDate.HasValue)
                {
                    var now = DateTime.Now;
                    fromDate = new DateTime(now.Year, now.Month, 1);
                    toDate = fromDate.Value.AddMonths(1).AddDays(-1);
                }

                var activities = await _unitOfWork.CarbonActivityRepository.GetByDateRangeAsync(
                    fromDate.Value, toDate.Value);

                var monthlyTotal = activities.Sum(a => a.EmissionValue);
                var travelEmissions = activities
                    .Where(a => a.ActivityType == ActivityType.Travel)
                    .Sum(a => a.EmissionValue);

                // الانبعاثات التي تم تجنبها (يمكن حسابها بناءً على مقارنة مع فترة سابقة أو هدف معين)
                // هنا سنستخدم قيمة افتراضية - يمكن تحسينها لاحقًا
                var avoidedEmissions = 0m; // TODO: حساب الانبعاثات المتجنبة

                // تجميع حسب الشهر
                var monthlyBreakdown = activities
                    .GroupBy(a => new { a.ActivityDate.Year, a.ActivityDate.Month })
                    .Select(g => new MonthlyEmissionDto
                    {
                        Year = g.Key.Year,
                        Month = g.Key.Month,
                        MonthName = GetMonthName(g.Key.Month),
                        TotalEmission = g.Sum(a => a.EmissionValue)
                    })
                    .OrderBy(m => m.Year).ThenBy(m => m.Month)
                    .ToList();

                // تجميع حسب نوع النشاط
                var byActivityType = activities
                    .GroupBy(a => a.ActivityType)
                    .Select(g => new ActivityTypeEmissionDto
                    {
                        ActivityType = g.Key,
                        ActivityTypeName = GetActivityTypeName(g.Key),
                        TotalEmission = g.Sum(a => a.EmissionValue),
                        ActivityCount = g.Count()
                    })
                    .ToList();

                // تجميع حسب نوع وسيلة النقل
                var byTransportType = activities
                    .GroupBy(a => a.TransportType)
                    .Select(g => new TransportTypeEmissionDto
                    {
                        TransportType = g.Key,
                        TransportTypeName = GetTransportTypeName(g.Key),
                        TotalEmission = g.Sum(a => a.EmissionValue),
                        ActivityCount = g.Count()
                    })
                    .ToList();

                var dashboard = new CarbonDashboardDto
                {
                    MonthlyTotal = monthlyTotal,
                    MonthlyTotalInTons = monthlyTotal / 1000,
                    TravelEmissions = travelEmissions,
                    AvoidedEmissions = avoidedEmissions,
                    MonthlyBreakdown = monthlyBreakdown,
                    ByActivityType = byActivityType,
                    ByTransportType = byTransportType
                };

                return ApiResponse<CarbonDashboardDto>.SuccessResponse(dashboard);
            }
            catch (Exception ex)
            {
                return ApiResponse<CarbonDashboardDto>.ErrorResponse(
                    $"خطأ في جلب لوحة المعلومات: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CarbonEmissionFactorDto>> UpdateEmissionFactorAsync(int factorId, UpdateEmissionFactorDto updateDto)
        {
            try
            {
                _logger.LogInformation("بدء تحديث معامل الانبعاث {FactorId}", factorId);

                var factor = await _unitOfWork.CarbonEmissionFactorRepository.GetByIdAsync(factorId);
                if (factor == null)
                {
                    _logger.LogWarning("معامل الانبعاث {FactorId} غير موجود", factorId);
                    return ApiResponse<CarbonEmissionFactorDto>.ErrorResponse("معامل الانبعاث غير موجود");
                }

                factor.Factor = updateDto.Factor;
                factor.Description = updateDto.Description;
                factor.IsActive = updateDto.IsActive;
                factor.UpdatedAt = DateTime.Now;

                await _unitOfWork.CarbonEmissionFactorRepository.UpdateAsync(factor);
                await _unitOfWork.SaveAsync();

                var dto = _mapper.Map<CarbonEmissionFactorDto>(factor);
                dto.TransportTypeName = GetTransportTypeName(factor.TransportType);

                _logger.LogInformation("تم تحديث معامل الانبعاث {FactorId} بنجاح", factorId);
                return ApiResponse<CarbonEmissionFactorDto>.SuccessResponse(dto, "تم تحديث معامل الانبعاث بنجاح");
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "خطأ في قاعدة البيانات أثناء تحديث معامل الانبعاث {FactorId}", factorId);
                return ApiResponse<CarbonEmissionFactorDto>.ErrorResponse(
                    $"خطأ في قاعدة البيانات: {dbEx.Message}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ غير متوقع أثناء تحديث معامل الانبعاث {FactorId}", factorId);
                return ApiResponse<CarbonEmissionFactorDto>.ErrorResponse(
                    $"خطأ في تحديث معامل الانبعاث: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<CarbonEmissionFactorDto>>> GetAllEmissionFactorsAsync()
        {
            try
            {
                var factors = await _unitOfWork.CarbonEmissionFactorRepository.GetActiveFactorsAsync();
                var dtos = _mapper.Map<List<CarbonEmissionFactorDto>>(factors);
                
                foreach (var dto in dtos)
                {
                    dto.TransportTypeName = GetTransportTypeName((TransportType)dto.TransportType);
                }

                return ApiResponse<List<CarbonEmissionFactorDto>>.SuccessResponse(dtos);
            }
            catch (Exception ex)
            {
                return ApiResponse<List<CarbonEmissionFactorDto>>.ErrorResponse(
                    $"خطأ في جلب معاملات الانبعاث: {ex.Message}");
            }
        }

        public async Task<ApiResponse<PaginatedResult<CarbonActivityDto>>> GetActivitiesAsync(CarbonActivityQueryDto queryDto)
        {
            try
            {
                Expression<Func<CarbonActivity, bool>>? filter = null;

                if (queryDto.ActivityType.HasValue)
                {
                    filter = a => a.ActivityType == queryDto.ActivityType.Value;
                }

                if (queryDto.TransportType.HasValue)
                {
                    var transportFilter = (Expression<Func<CarbonActivity, bool>>)(a => a.TransportType == queryDto.TransportType.Value);
                    filter = filter == null ? transportFilter : filter.And(transportFilter);
                }

                if (queryDto.FromDate.HasValue)
                {
                    var fromFilter = (Expression<Func<CarbonActivity, bool>>)(a => a.ActivityDate >= queryDto.FromDate.Value);
                    filter = filter == null ? fromFilter : filter.And(fromFilter);
                }

                if (queryDto.ToDate.HasValue)
                {
                    var toFilter = (Expression<Func<CarbonActivity, bool>>)(a => a.ActivityDate <= queryDto.ToDate.Value);
                    filter = filter == null ? toFilter : filter.And(toFilter);
                }

                if (!string.IsNullOrWhiteSpace(queryDto.Search))
                {
                    var searchFilter = (Expression<Func<CarbonActivity, bool>>)(a => 
                        (a.Description != null && a.Description.Contains(queryDto.Search)) ||
                        (a.Destination != null && a.Destination.Contains(queryDto.Search)) ||
                        (a.Origin != null && a.Origin.Contains(queryDto.Search)));
                    filter = filter == null ? searchFilter : filter.And(searchFilter);
                }

                var activities = await _unitOfWork.CarbonActivityRepository.GetAllWithDetailsAsync(
                    filter,
                    q => q.OrderByDescending(a => a.ActivityDate));

                var totalCount = activities.Count();
                var items = activities
                    .Skip((queryDto.PageNumber - 1) * queryDto.PageSize)
                    .Take(queryDto.PageSize)
                    .ToList();

                var dtos = _mapper.Map<List<CarbonActivityDto>>(items);
                
                foreach (var dto in dtos)
                {
                    dto.ActivityTypeName = GetActivityTypeName(dto.ActivityType);
                    dto.TransportTypeName = GetTransportTypeName(dto.TransportType);
                }

                var result = new PaginatedResult<CarbonActivityDto>
                {
                    TotalCount = totalCount,
                    Page = queryDto.PageNumber,
                    PageSize = queryDto.PageSize,
                    Items = dtos
                };

                return ApiResponse<PaginatedResult<CarbonActivityDto>>.SuccessResponse(result);
            }
            catch (Exception ex)
            {
                return ApiResponse<PaginatedResult<CarbonActivityDto>>.ErrorResponse(
                    $"خطأ في جلب الأنشطة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<CarbonActivityDto>> GetActivityByIdAsync(int id)
        {
            try
            {
                var activity = await _unitOfWork.CarbonActivityRepository.GetByIdWithDetailsAsync(id);
                if (activity == null)
                {
                    return ApiResponse<CarbonActivityDto>.ErrorResponse("النشاط غير موجود");
                }

                var dto = _mapper.Map<CarbonActivityDto>(activity);
                dto.ActivityTypeName = GetActivityTypeName(activity.ActivityType);
                dto.TransportTypeName = GetTransportTypeName(activity.TransportType);
                
                if (activity.CreatedByUser != null)
                {
                    dto.CreatedByUserName = activity.CreatedByUser.UserName ?? activity.CreatedByUser.Email ?? "غير محدد";
                }

                return ApiResponse<CarbonActivityDto>.SuccessResponse(dto);
            }
            catch (Exception ex)
            {
                return ApiResponse<CarbonActivityDto>.ErrorResponse(
                    $"خطأ في جلب النشاط: {ex.Message}");
            }
        }

        public async Task<ApiResponse<List<CarbonActivityDto>>> GetActivitiesByRelatedEntityAsync(int relatedEntityId, string relatedEntityType)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(relatedEntityType))
                {
                    return ApiResponse<List<CarbonActivityDto>>.ErrorResponse("نوع الكيان المرتبط مطلوب");
                }

                // جلب جميع الأنشطة المرتبطة بالكيان
                var activities = await _unitOfWork.CarbonActivityRepository.GetAllWithDetailsAsync(
                    a => a.RelatedEntityId == relatedEntityId && 
                         a.RelatedEntityType == relatedEntityType,
                    q => q.OrderByDescending(a => a.ActivityDate)
                );

                var activitiesList = activities.ToList();

                if (!activitiesList.Any())
                {
                    return ApiResponse<List<CarbonActivityDto>>.SuccessResponse(
                        new List<CarbonActivityDto>(), 
                        "لا توجد أنشطة كربونية مرتبطة بهذا الكيان"
                    );
                }

                var dtos = _mapper.Map<List<CarbonActivityDto>>(activitiesList);
                
                foreach (var dto in dtos)
                {
                    dto.ActivityTypeName = GetActivityTypeName(dto.ActivityType);
                    dto.TransportTypeName = GetTransportTypeName(dto.TransportType);
                    
                    var activity = activitiesList.FirstOrDefault(a => a.Id == dto.Id);
                    if (activity?.CreatedByUser != null)
                    {
                        dto.CreatedByUserName = activity.CreatedByUser.UserName ?? activity.CreatedByUser.Email ?? "غير محدد";
                    }
                }

                _logger.LogInformation(
                    "تم جلب {Count} نشاط كربوني مرتبط بالكيان {EntityType} - {EntityId}", 
                    activitiesList.Count, 
                    relatedEntityType, 
                    relatedEntityId
                );

                return ApiResponse<List<CarbonActivityDto>>.SuccessResponse(
                    dtos, 
                    $"تم جلب {activitiesList.Count} نشاط كربوني بنجاح"
                );
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    ex, 
                    "خطأ غير متوقع أثناء جلب الأنشطة الكربونية للكيان {EntityType} - {EntityId}", 
                    relatedEntityType, 
                    relatedEntityId
                );
                return ApiResponse<List<CarbonActivityDto>>.ErrorResponse(
                    $"خطأ في جلب الأنشطة: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteActivityAsync(int id)
        {
            try
            {
                var activity = await _unitOfWork.CarbonActivityRepository.GetByIdAsync(id);
                if (activity == null)
                {
                    return ApiResponse<bool>.ErrorResponse("النشاط غير موجود");
                }

                await _unitOfWork.CarbonActivityRepository.DeleteAsync(id);
                await _unitOfWork.SaveAsync();

                _logger.LogInformation("تم حذف النشاط الكربوني {ActivityId} بنجاح", id);
                return ApiResponse<bool>.SuccessResponse(true, "تم حذف النشاط بنجاح");
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "خطأ في قاعدة البيانات أثناء حذف النشاط الكربوني {ActivityId}", id);
                return ApiResponse<bool>.ErrorResponse(
                    $"خطأ في قاعدة البيانات: {dbEx.Message}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "خطأ غير متوقع أثناء حذف النشاط الكربوني {ActivityId}", id);
                return ApiResponse<bool>.ErrorResponse(
                    $"خطأ في حذف النشاط: {ex.Message}");
            }
        }

        public async Task<ApiResponse<bool>> DeleteActivitiesByRelatedEntityAsync(int relatedEntityId, string relatedEntityType)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(relatedEntityType))
                {
                    return ApiResponse<bool>.ErrorResponse("نوع الكيان المرتبط مطلوب");
                }

                // جلب جميع الأنشطة المرتبطة بالكيان
                var activities = await _unitOfWork.CarbonActivityRepository.GetAllAsync(
                    a => a.RelatedEntityId == relatedEntityId && 
                         a.RelatedEntityType == relatedEntityType
                );

                var activitiesList = activities.ToList();

                if (!activitiesList.Any())
                {
                    return ApiResponse<bool>.SuccessResponse(true, "لا توجد أنشطة كربونية مرتبطة بهذا الكيان");
                }

                // حذف جميع الأنشطة المرتبطة
                foreach (var activity in activitiesList)
                {
                    await _unitOfWork.CarbonActivityRepository.DeleteAsync(activity.Id);
                }

                await _unitOfWork.SaveAsync();

                _logger.LogInformation(
                    "تم حذف {Count} نشاط كربوني مرتبط بالكيان {EntityType} - {EntityId}", 
                    activitiesList.Count, 
                    relatedEntityType, 
                    relatedEntityId
                );

                return ApiResponse<bool>.SuccessResponse(
                    true, 
                    $"تم حذف {activitiesList.Count} نشاط كربوني بنجاح"
                );
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(
                    dbEx, 
                    "خطأ في قاعدة البيانات أثناء حذف الأنشطة الكربونية للكيان {EntityType} - {EntityId}", 
                    relatedEntityType, 
                    relatedEntityId
                );
                return ApiResponse<bool>.ErrorResponse(
                    $"خطأ في قاعدة البيانات: {dbEx.Message}");
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    ex, 
                    "خطأ غير متوقع أثناء حذف الأنشطة الكربونية للكيان {EntityType} - {EntityId}", 
                    relatedEntityType, 
                    relatedEntityId
                );
                return ApiResponse<bool>.ErrorResponse(
                    $"خطأ في حذف الأنشطة: {ex.Message}");
            }
        }

        #region Private Helper Methods

        private string GetActivityTypeName(ActivityType activityType)
        {
            return activityType switch
            {
                ActivityType.Travel => "سفر",
                ActivityType.Visit => "زيارة",
                ActivityType.Meeting => "اجتماع",
                _ => "غير محدد"
            };
        }

        private string GetTransportTypeName(TransportType transportType)
        {
            return transportType switch
            {
                TransportType.DomesticFlight => "طيران داخلي",
                TransportType.InternationalFlight => "طيران دولي",
                TransportType.SmallCar => "سيارة صغيرة",
                TransportType.SUV => "SUV",
                TransportType.ElectricCar => "سيارة كهربائية",
                TransportType.Bus => "حافلة",
                TransportType.Boat => "قارب",
                _ => "غير محدد"
            };
        }

        private string GetMonthName(int month)
        {
            return month switch
            {
                1 => "يناير",
                2 => "فبراير",
                3 => "مارس",
                4 => "أبريل",
                5 => "مايو",
                6 => "يونيو",
                7 => "يوليو",
                8 => "أغسطس",
                9 => "سبتمبر",
                10 => "أكتوبر",
                11 => "نوفمبر",
                12 => "ديسمبر",
                _ => "غير محدد"
            };
        }

        #endregion
    }
}

