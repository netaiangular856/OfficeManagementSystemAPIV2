# TravelResult API Documentation

## نظرة عامة

تم إنشاء API كامل لإدارة نتائج السفر (Travel Results) في نظام إدارة المكاتب. يتضمن هذا API جميع العمليات الأساسية: إنشاء، قراءة، تحديث، وحذف نتائج السفر.

**ملاحظة مهمة**: هذا API مخصص لعرض النتائج/الإنجازات في تفاصيل السفر نفسه، وليس كـ entity منفصل.

## بنية TravelResult Entity

```csharp
public class TravelResult
{
    public int Id { get; set; }
    public int TravelId { get; set; }   // FK
    public Travel Travel { get; set; } = default!;
    public string? Achievements { get; set; } // الإنجازات / النتائج المحققة
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
```

## المكونات المُنشأة

### 1. DTOs

- **CreateTravelResultDto**: لإنشاء نتيجة سفر جديدة
- **UpdateTravelResultDto**: لتحديث نتيجة سفر موجودة
- **TravelResultDto**: لعرض بيانات نتيجة السفر
- **TravelResultQueryDto**: للبحث والتصفية مع pagination (يتطلب travelId)

### 2. Repository Layer

- **ITravelResultRepository**: واجهة repository
- **TravelResultRepository**: تطبيق repository مع دعم العلاقات

### 3. Service Layer

- **ITravelResultService**: واجهة الخدمة
- **TravelResultService**: تطبيق الخدمة مع منطق العمل

### 4. Controller

- **TravelResultController**: API controller مع جميع الـ endpoints

### 5. AutoMapper

- **TravelResultMappingProfile**: ملف mapping للتحويل بين DTOs والـ entities

## API Endpoints

### 1. إنشاء نتيجة سفر جديدة

```
POST /api/TravelResult
```

**Body:**

```json
{
  "travelId": 1,
  "achievements": "تم إنجاز جميع المهام المطلوبة بنجاح:\n- الحصول على جميع الوثائق المطلوبة\n- إتمام الاجتماعات المخطط لها\n- تحقيق الأهداف المرجوة من السفر"
}
```

### 2. جلب نتائج السفر لسفر معين

```
GET /api/TravelResult?travelId=1&pageNumber=1&pageSize=10
```

**Query Parameters:**

- `travelId`: معرف السفر (مطلوب)
- `pageNumber`: رقم الصفحة
- `pageSize`: حجم الصفحة
- `search`: البحث في الإنجازات
- `from`: تاريخ البداية
- `to`: تاريخ النهاية

### 3. جلب نتيجة سفر بالمعرف

```
GET /api/TravelResult/{id}
```

### 4. تحديث نتيجة سفر

```
PUT /api/TravelResult/{id}
```

**Body:**

```json
{
  "achievements": "تم إنجاز جميع المهام المطلوبة بنجاح مع تحديثات إضافية:\n- الحصول على جميع الوثائق المطلوبة\n- إتمام الاجتماعات المخطط لها\n- تحقيق الأهداف المرجوة من السفر\n- إضافة مهام جديدة تم إنجازها"
}
```

### 5. حذف نتيجة سفر

```
DELETE /api/TravelResult/{id}
```

## الأمان

- جميع الـ endpoints محمية بـ JWT authentication
- تتطلب صلاحية `travelresult.index`
- يتم التحقق من وجود المستخدم والسفر قبل العمليات

## الاستجابة

جميع الـ endpoints ترجع `ApiResponse<T>` مع:

- `Success`: حالة النجاح
- `Message`: رسالة وصفية
- `Data`: البيانات المطلوبة
- `Errors`: قائمة الأخطاء (إن وجدت)

## أمثلة الاستجابة

### نجاح العملية

```json
{
  "success": true,
  "message": "تم إنشاء نتيجة السفر بنجاح",
  "data": {
    "id": 1,
    "travelId": 1,
    "travelTitle": "السفر إلى دبي",
    "achievements": "تم إنجاز جميع المهام المطلوبة بنجاح:\n- الحصول على جميع الوثائق المطلوبة\n- إتمام الاجتماعات المخطط لها\n- تحقيق الأهداف المرجوة من السفر",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": null
  },
  "errors": null
}
```

### خطأ في العملية

```json
{
  "success": false,
  "message": "السفر غير موجود",
  "data": null,
  "errors": ["السفر غير موجود"]
}
```

## الميزات الخاصة

- **بنية مبسطة**: تحتوي على الحقول الأساسية فقط
- **ربط مع Travel**: كل نتيجة مرتبطة بسفر محدد
- **تتبع التواريخ**: CreatedAt و UpdatedAt للتتبع
- **البحث الذكي**: البحث في الإنجازات
- **Pagination**: دعم التصفح عبر الصفحات
- **Filtering**: تصفية حسب التواريخ
- **الاستخدام الصحيح**: مخصص لعرض النتائج في تفاصيل السفر

## الاختبار

تم إنشاء ملف `travelresult.http` يحتوي على أمثلة لاختبار جميع الـ endpoints.

## التكامل

تم تسجيل جميع الخدمات في dependency injection container وتم إضافة TravelResults إلى AppDbContext.

