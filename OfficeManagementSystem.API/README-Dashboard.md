# Dashboard API Documentation

## نظرة عامة

يوفر نظام Dashboard API مجموعة شاملة من النقاط النهائية (endpoints) لعرض إحصائيات وملخصات النظام بأكمله. جميع النقاط النهائية تتطلب مصادقة JWT وتدعم فلترة البيانات حسب التاريخ.

## النقاط النهائية المتاحة

### 1. ملخص عام للنظام

```
GET /api/v1/dashboard/overview
```

**الوصف:** يعرض ملخص شامل لجميع جوانب النظام (المهام، الاجتماعات، المراسلات، الموظفين)

**المعاملات:**

- `fromDate` (اختياري): تاريخ البداية (YYYY-MM-DD)
- `toDate` (اختياري): تاريخ النهاية (YYYY-MM-DD)

**مثال الاستجابة:**

```json
{
  "totalTasks": 150,
  "completedTasks": 120,
  "pendingTasks": 25,
  "overdueTasks": 5,
  "taskCompletionRate": 80.0,
  "totalMeetings": 45,
  "completedMeetings": 35,
  "upcomingMeetings": 8,
  "cancelledMeetings": 2,
  "totalLetters": 200,
  "incomingLetters": 120,
  "outgoingLetters": 80,
  "pendingLetters": 15,
  "totalEmployees": 50,
  "activeEmployees": 48,
  "averageKpiScore": 85.5
}
```

### 2. ملخص المهام

```
GET /api/v1/dashboard/tasks/overview
```

**الوصف:** يعرض إحصائيات مفصلة عن المهام مع توزيع الحالات والأولويات

**مثال الاستجابة:**

```json
{
  "totalTasks": 150,
  "completedTasks": 120,
  "pendingTasks": 25,
  "overdueTasks": 5,
  "completionRate": 80.0,
  "statusDistribution": [
    {
      "status": "Done",
      "count": 120,
      "percentage": 80.0
    },
    {
      "status": "In_Progress",
      "count": 20,
      "percentage": 13.3
    }
  ],
  "priorityDistribution": [
    {
      "priority": "High",
      "count": 45,
      "percentage": 30.0
    },
    {
      "priority": "Medium",
      "count": 75,
      "percentage": 50.0
    }
  ]
}
```

### 3. اتجاه المهام

```
GET /api/v1/dashboard/tasks/trend
```

**الوصف:** يعرض اتجاه المهام على مدار الوقت (المهام المنشأة، المكتملة، المتأخرة)

**مثال الاستجابة:**

```json
{
  "trendData": [
    {
      "date": "2024-01-01T00:00:00",
      "createdTasks": 5,
      "completedTasks": 3,
      "overdueTasks": 1
    },
    {
      "date": "2024-01-02T00:00:00",
      "createdTasks": 8,
      "completedTasks": 6,
      "overdueTasks": 0
    }
  ]
}
```

### 4. ملخص الاجتماعات

```
GET /api/v1/dashboard/meetings/overview
```

**الوصف:** يعرض إحصائيات الاجتماعات مع توزيع الحالات والأنواع

**مثال الاستجابة:**

```json
{
  "totalMeetings": 45,
  "completedMeetings": 35,
  "upcomingMeetings": 8,
  "cancelledMeetings": 2,
  "completionRate": 77.8,
  "statusDistribution": [
    {
      "status": "Done",
      "count": 35,
      "percentage": 77.8
    },
    {
      "status": "Scheduled",
      "count": 8,
      "percentage": 17.8
    }
  ],
  "typeDistribution": [
    {
      "type": "Internal",
      "count": 30,
      "percentage": 66.7
    },
    {
      "type": "External",
      "count": 15,
      "percentage": 33.3
    }
  ]
}
```

### 5. ملخص المراسلات

```
GET /api/v1/dashboard/letters/overview
```

**الوصف:** يعرض إحصائيات المراسلات مع توزيع الأنواع والحالات

**مثال الاستجابة:**

```json
{
  "totalLetters": 200,
  "incomingLetters": 120,
  "outgoingLetters": 80,
  "pendingLetters": 15,
  "responseRate": 87.5,
  "typeDistribution": [
    {
      "type": "In",
      "count": 120,
      "percentage": 60.0
    },
    {
      "type": "Out",
      "count": 80,
      "percentage": 40.0
    }
  ],
  "statusDistribution": [
    {
      "status": "Sent",
      "count": 150,
      "percentage": 75.0
    },
    {
      "status": "Draft",
      "count": 15,
      "percentage": 7.5
    }
  ]
}
```

### 6. المراسلات الشهرية

```
GET /api/v1/dashboard/letters/monthly
```

**الوصف:** يعرض حجم المراسلات شهرياً

**مثال الاستجابة:**

```json
{
  "monthlyData": [
    {
      "month": "2024-01",
      "incomingLetters": 25,
      "outgoingLetters": 15,
      "totalLetters": 40
    },
    {
      "month": "2024-02",
      "incomingLetters": 30,
      "outgoingLetters": 20,
      "totalLetters": 50
    }
  ]
}
```

### 7. اتجاه KPI الموظفين

```
GET /api/v1/dashboard/employees/kpi-trend
```

**الوصف:** يعرض اتجاه أداء الموظفين على مدار الوقت

**مثال الاستجابة:**

```json
{
  "trendData": [
    {
      "date": "2024-01-01T00:00:00",
      "averageKpiScore": 85.5,
      "totalEmployees": 50,
      "highPerformers": 20,
      "averagePerformers": 25,
      "lowPerformers": 5
    }
  ]
}
```

### 8. قائمة المتصدرين

```
GET /api/v1/dashboard/employees/leaderboard
```

**الوصف:** يعرض قائمة أفضل 10 موظفين حسب الأداء

**مثال الاستجابة:**

```json
{
  "topPerformers": [
    {
      "employeeId": 1,
      "employeeName": "أحمد محمد",
      "department": "تكنولوجيا المعلومات",
      "kpiScore": 95.5,
      "completedTasks": 25,
      "totalTasks": 28,
      "taskCompletionRate": 89.3,
      "rank": 1
    },
    {
      "employeeId": 2,
      "employeeName": "فاطمة علي",
      "department": "الموارد البشرية",
      "kpiScore": 92.0,
      "completedTasks": 22,
      "totalTasks": 25,
      "taskCompletionRate": 88.0,
      "rank": 2
    }
  ]
}
```

## استخدام الفلترة بالتاريخ

جميع النقاط النهائية تدعم فلترة البيانات حسب التاريخ باستخدام المعاملات التالية:

- `fromDate`: تاريخ البداية (YYYY-MM-DD)
- `toDate`: تاريخ النهاية (YYYY-MM-DD)

**أمثلة:**

```
# الشهر الحالي
GET /api/v1/dashboard/overview?fromDate=2024-01-01&toDate=2024-01-31

# الربع الأخير
GET /api/v1/dashboard/tasks/overview?fromDate=2023-10-01&toDate=2023-12-31

# السنة الحالية
GET /api/v1/dashboard/letters/monthly?fromDate=2024-01-01&toDate=2024-12-31
```

## رموز الحالة

### المهام

- `New`: جديدة
- `In_Progress`: قيد التنفيذ
- `Done`: مكتملة
- `Stopped`: متوقفة
- `Late`: متأخرة

### الاجتماعات

- `Scheduled`: مجدولة
- `InProgress`: قيد التنفيذ
- `Done`: مكتملة
- `Cancelled`: ملغية

### المراسلات

- `Draft`: مسودة
- `Approved`: معتمدة
- `Sent`: مرسلة
- `Archived`: مؤرشفة

## الأخطاء المحتملة

### 401 Unauthorized

```json
{
  "message": "غير مصرح بالوصول"
}
```

### 500 Internal Server Error

```json
{
  "message": "حدث خطأ أثناء جلب البيانات",
  "error": "تفاصيل الخطأ"
}
```

## ملاحظات مهمة

1. **المصادقة:** جميع النقاط النهائية تتطلب مصادقة JWT
2. **التوقيت:** جميع التواريخ تُعرض بالتوقيت المحلي
3. **الأداء:** يُنصح باستخدام فلترة التاريخ لتقليل حجم البيانات المُرجعة
4. **التحديث:** البيانات تُحدث في الوقت الفعلي من قاعدة البيانات

## أمثلة الاستخدام

### باستخدام cURL

```bash
# الحصول على ملخص النظام للشهر الحالي
curl -X GET "http://localhost:5000/api/v1/dashboard/overview?fromDate=2024-01-01&toDate=2024-01-31" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# الحصول على قائمة المتصدرين
curl -X GET "http://localhost:5000/api/v1/dashboard/employees/leaderboard" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### باستخدام JavaScript

```javascript
// الحصول على ملخص المهام
const response = await fetch(
  "/api/v1/dashboard/tasks/overview?fromDate=2024-01-01&toDate=2024-01-31",
  {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
);
const data = await response.json();
```

### باستخدام Python

```python
import requests

# الحصول على اتجاه المراسلات
response = requests.get(
    'http://localhost:5000/api/v1/dashboard/letters/monthly',
    headers={'Authorization': f'Bearer {token}'},
    params={'fromDate': '2024-01-01', 'toDate': '2024-12-31'}
)
data = response.json()
```
