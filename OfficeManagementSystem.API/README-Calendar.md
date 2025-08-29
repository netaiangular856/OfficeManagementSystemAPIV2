# نظام إدارة الأحداث (Calendar Management System)

## نظرة عامة

نظام إدارة الأحداث يوفر عرض مباشر وبسيط لجميع الأحداث في النظام بما في ذلك الاجتماعات والمهام. النظام مقسم إلى جزئين رئيسيين:

1. **تقويم المستخدم**: يعرض الأحداث الخاصة بالمستخدم الحالي
2. **تقويم النظام**: يعرض جميع الأحداث في النظام (للمشرفين)

## الميزات الرئيسية

### للمستخدمين

- عرض الاجتماعات والمهام الخاصة بالمستخدم
- عرض مباشر بدون فلاتر معقدة
- ترتيب الأحداث حسب التاريخ

### للمشرفين

- عرض جميع الأحداث في النظام
- مراقبة شاملة للنشاط
- عرض مباشر بدون فلاتر

## أنواع الأحداث

### 1. الاجتماعات (Meetings)

- اجتماعات داخلية
- اجتماعات خارجية
- اجتماعات مع العملاء
- اجتماعات مراجعة

### 2. المهام (Tasks)

- مهام عادية
- مهام عالية الأولوية
- مهام حرجة
- مواعيد نهائية

### 3. حالات الأحداث

- مجدول (Scheduled)
- قيد التنفيذ (InProgress)
- مكتمل (Completed)
- ملغي (Cancelled)
- متأخر (Overdue)

## API Endpoints

### تقويم المستخدم

#### الحصول على أحداث المستخدم

```
GET /api/calendar/user/events
```

**لا توجد معاملات** - يعرض جميع الأحداث الخاصة بالمستخدم

### تقويم النظام (للمشرفين)

#### جميع الأحداث

```
GET /api/calendar/system/events
```

**لا توجد معاملات** - يعرض جميع الأحداث في النظام

## DTOs

### CalendarEventDto

```csharp
public class CalendarEventDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string? Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public EventType Type { get; set; }
    public string? Location { get; set; }
    public string? OnlineUrl { get; set; }
    public EventStatus Status { get; set; }
    public string? OrganizerName { get; set; }
    public string? AssigneeName { get; set; }
    public string? DepartmentName { get; set; }
    public int Priority { get; set; }
    public string Color { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

## الألوان والأولويات

### ألوان الاجتماعات

- **اجتماعات داخلية**: أزرق (#4285F4)
- **اجتماعات خارجية**: أخضر (#34A853)
- **اجتماعات مع العملاء**: أصفر (#FBBC04)
- **اجتماعات مراجعة**: أحمر (#EA4335)

### ألوان المهام

- **مهام منخفضة الأولوية**: أخضر (#34A853)
- **مهام متوسطة الأولوية**: أصفر (#FBBC04)
- **مهام عالية الأولوية**: أحمر (#EA4335)
- **مهام حرجة**: أحمر داكن (#8B0000)
- **مهام متأخرة**: أحمر (#EA4335)

## الأمان والصلاحيات

### المستخدمين العاديين

- الوصول لتقويمهم الشخصي فقط
- عرض الاجتماعات التي يحضرونها أو ينظمونها
- عرض المهام المخصصة لهم أو التي أنشأوها

### المشرفين والمديرين

- الوصول لجميع الأحداث في النظام
- مراقبة نشاط جميع الأقسام

## الاستخدام في Angular

### عرض الأحداث

```typescript
// جلب أحداث المستخدم
getUserEvents(): Observable<ApiResponse<CalendarEventDto[]>> {
  return this.http.get<ApiResponse<CalendarEventDto[]>>(
    `${this.baseUrl}/api/calendar/user/events`
  );
}

// جلب جميع الأحداث (للمشرفين)
getAllSystemEvents(): Observable<ApiResponse<CalendarEventDto[]>> {
  return this.http.get<ApiResponse<CalendarEventDto[]>>(
    `${this.baseUrl}/api/calendar/system/events`
  );
}
```

### عرض في التقويم

```typescript
// تحويل الأحداث لصيغة FullCalendar
transformToCalendarEvents(events: CalendarEventDto[]): any[] {
  return events.map(event => ({
    id: event.Id,
    title: event.Title,
    start: event.StartDate,
    end: event.EndDate,
    backgroundColor: event.Color,
    borderColor: event.Color,
    textColor: '#ffffff',
    extendedProps: {
      type: event.Type,
      status: event.Status,
      description: event.Description,
      location: event.Location
    }
  }));
}
```

## المراقبة والأداء

### التحسينات

- عرض مباشر للبيانات بدون فلاتر
- ترتيب الأحداث حسب التاريخ
- استخدام Indexes للتواريخ

## استكشاف الأخطاء

### رسائل الخطأ

- `401 Unauthorized`: المستخدم غير مسجل الدخول
- `403 Forbidden`: المستخدم لا يملك صلاحيات كافية
- `500 Internal Server Error`: خطأ في الخادم

## التطوير المستقبلي

### ميزات مقترحة

- إشعارات للأحداث القادمة
- تصدير التقويم (iCal)
- مزامنة مع تقويمات خارجية
- تقارير وإحصائيات متقدمة
