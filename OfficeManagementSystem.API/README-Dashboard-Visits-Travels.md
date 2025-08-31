# Dashboard - Visits & Travels Endpoints

## نظرة عامة

تم إضافة endpoints جديدة لملخص الزيارات والسفريات في نظام إدارة المكتب. هذه الـ endpoints توفر إحصائيات وتحليلات مفصلة حول الزيارات والسفريات في النظام.

## الـ Endpoints الجديدة

### 1. ملخص الزيارات

#### `GET /api/dashboard/visits/overview`

**الوصف:** الحصول على ملخص شامل للزيارات في النظام

**المعاملات:**

- `fromDate` (اختياري): تاريخ البداية للفلتر
- `toDate` (اختياري): تاريخ النهاية للفلتر

**الاستجابة:**

```json
{
  "totalVisits": 150,
  "completedVisits": 120,
  "upcomingVisits": 25,
  "overdueVisits": 5,
  "completionRate": 80.0,
  "typeDistribution": [
    {
      "type": "Visit",
      "count": 100,
      "percentage": 66.67
    },
    {
      "type": "Meeting",
      "count": 50,
      "percentage": 33.33
    }
  ],
  "monthlyData": [
    {
      "month": "2024-12",
      "totalVisits": 25,
      "completedVisits": 20,
      "upcomingVisits": 5
    }
  ]
}
```

**المعلومات المقدمة:**

- إجمالي عدد الزيارات
- عدد الزيارات المكتملة
- عدد الزيارات القادمة
- عدد الزيارات المتأخرة
- نسبة الإنجاز
- توزيع أنواع الزيارات
- البيانات الشهرية

### 2. ملخص السفريات

#### `GET /api/dashboard/travels/overview`

**الوصف:** الحصول على ملخص شامل للسفريات في النظام

**المعاملات:**

- `fromDate` (اختياري): تاريخ البداية للفلتر
- `toDate` (اختياري): تاريخ النهاية للفلتر

**الاستجابة:**

```json
{
  "totalTravels": 80,
  "completedTravels": 60,
  "upcomingTravels": 15,
  "ongoingTravels": 5,
  "completionRate": 75.0,
  "destinationDistribution": [
    {
      "destination": "القاهرة",
      "count": 30,
      "percentage": 37.5
    },
    {
      "destination": "الإسكندرية",
      "count": 25,
      "percentage": 31.25
    }
  ],
  "transportDistribution": [
    {
      "transportMode": "طيران",
      "count": 40,
      "percentage": 50.0
    },
    {
      "transportMode": "قطار",
      "count": 25,
      "percentage": 31.25
    }
  ],
  "monthlyData": [
    {
      "month": "2024-12",
      "totalTravels": 15,
      "completedTravels": 10,
      "upcomingTravels": 3,
      "ongoingTravels": 2
    }
  ]
}
```

**المعلومات المقدمة:**

- إجمالي عدد السفريات
- عدد السفريات المكتملة
- عدد السفريات القادمة
- عدد السفريات الجارية
- نسبة الإنجاز
- توزيع الوجهات
- توزيع وسائل النقل
- البيانات الشهرية

## أمثلة الاستخدام

### 1. الحصول على ملخص الزيارات للشهر الحالي

```
GET /api/dashboard/visits/overview?fromDate=2024-12-01&toDate=2024-12-31
```

### 2. الحصول على ملخص السفريات للربع الأخير

```
GET /api/dashboard/travels/overview?fromDate=2024-10-01&toDate=2024-12-31
```

### 3. الحصول على ملخص الزيارات للسنة كاملة

```
GET /api/dashboard/visits/overview?fromDate=2024-01-01&toDate=2024-12-31
```

## ملاحظات مهمة

1. **التواريخ:** إذا لم يتم تحديد التواريخ، سيتم استخدام الشهر السابق كافتراضي
2. **المصادقة:** جميع الـ endpoints تتطلب مصادقة (Bearer Token)
3. **معالجة الأخطاء:** يتم إرجاع رسائل خطأ واضحة في حالة حدوث مشاكل
4. **الأداء:** تم تحسين الاستعلامات لضمان الأداء الجيد حتى مع البيانات الكبيرة

## اختبار الـ Endpoints

يمكن استخدام ملف `dashboard-visits-travels.http` لاختبار الـ endpoints الجديدة. تأكد من تحديث `baseUrl` و `token` في الملف قبل التشغيل.

## التطوير المستقبلي

- إضافة فلترة إضافية حسب القسم أو الموظف
- إضافة رسوم بيانية تفاعلية
- إضافة تنبيهات للزيارات والسفريات المتأخرة
- إضافة تقارير PDF للتصدير
