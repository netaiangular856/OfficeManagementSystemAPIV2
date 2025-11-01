# تحديث نظام الإشعارات - إضافة Reference للأحداث

## 📋 ملخص التعديلات

تم تحديث نظام الإشعارات بالكامل لدعم ربط الإشعارات بالأحداث المصدرية (Meeting, Task, Visit, Travel) مما يسمح للمستخدم بالانتقال مباشرة إلى الحدث عند النقر على الإشعار.

---

## 🔧 الملفات المعدلة

### 1. Domain Layer

#### ✅ `NotificationReferenceType.cs` (جديد)
```csharp
public enum NotificationReferenceType
{
    None = 0,
    Meeting = 1,
    Task = 2,
    Visit = 3,
    Travel = 4
}
```

#### ✅ `Notification.cs`
أضيف:
- `int? ReferenceId` - معرف الحدث المرتبط
- `NotificationReferenceType ReferenceType` - نوع الحدث

---

### 2. Application Layer - DTOs

#### ✅ `NotificationDto.cs`
أضيف:
- `int? ReferenceId`
- `NotificationReferenceType ReferenceType`

#### ✅ `CreateNotificationDto.cs`
أضيف:
- `int? ReferenceId`
- `NotificationReferenceType ReferenceType = NotificationReferenceType.None`

#### ✅ `NotificationReferenceDto.cs` (جديد)
```csharp
public class NotificationReferenceDto
{
    public int NotificationId { get; set; }
    public int? ReferenceId { get; set; }
    public NotificationReferenceType ReferenceType { get; set; }
    public string ReferenceTypeName { get; set; }
}
```

---

### 3. Application Layer - Services

#### ✅ `ISendNotificationService.cs`
تم تحديث الـ method signature:
```csharp
Task SendNotificationAsync(
    string title, 
    string message, 
    List<string> userIds, 
    string? type, 
    string? htmlContent = null, 
    int? referenceId = null,                    // 👈 جديد
    NotificationReferenceType referenceType = NotificationReferenceType.None  // 👈 جديد
);
```

#### ✅ `SendNotificationService.cs`
تم تحديث Implementation لحفظ ReferenceId و ReferenceType في قاعدة البيانات.

#### ✅ `INotificationService.cs`
أضيف method جديد:
```csharp
Task<ApiResponse<NotificationReferenceDto>> GetNotificationReference(int notificationId, string userId);
```

#### ✅ `NotificationService.cs`
تم تنفيذ `GetNotificationReference` للحصول على معلومات الـ Reference.

---

### 4. Application Layer - Service Implementations

#### ✅ `MeetingService.cs`
تم تحديث استدعاءات الإشعارات في:
- `SendMeetingInvitationsAsync` - عند إنشاء meeting جديد
- `SendMeetingInvitationsIndevedualAsync` - عند إضافة attendee جديد

**مثال:**
```csharp
await _notificationService.SendNotificationAsync(
    title, 
    message, 
    attendeeUserIds, 
    "Meeting", 
    null, 
    meeting.Id,                          // 👈 معرف الاجتماع
    NotificationReferenceType.Meeting    // 👈 نوع الحدث
);
```

#### ✅ `TaskService.cs`
تم تحديث استدعاءات الإشعارات في:
- `CreateTaskAsync` - عند إنشاء task جديد
- `BulkReassignTasksAsync` - عند إعادة تعيين tasks
- `CreateTaskFeedbackAsync` - عند إضافة feedback

**مثال:**
```csharp
await _notificationService.SendNotificationAsync(
    "New Task Assigned",
    message,
    new List<string> { task.AssigneeUserId },
    "Task",
    null,
    task.Id,                           // 👈 معرف المهمة
    NotificationReferenceType.Task     // 👈 نوع الحدث
);
```

#### ✅ `TaskUpdateService.cs`
تم تحديث:
- `CreateTaskUpdateAsync` - عند إضافة تحديث للمهمة

#### ✅ `VisitService.cs`
تم تحديث استدعاءات الإشعارات في:
- `SendVisitInvitationsAsync` - عند إنشاء visit جديد
- `SendVisitInvitationIndividualAsync` - عند إضافة participant جديد

**مثال:**
```csharp
await _notificationService.SendNotificationAsync(
    title,
    message,
    participantUserIds,
    "Visit",
    null,
    visit.Id,                          // 👈 معرف الزيارة
    NotificationReferenceType.Visit    // 👈 نوع الحدث
);
```

#### ℹ️ `TravelService.cs` & `TravelResultService.cs`
لا يرسلان إشعارات حالياً - جاهزون للاستخدام المستقبلي.

---

### 5. API Layer

#### ✅ `NotificationController.cs`
أضيف endpoint جديد:
```csharp
[HttpGet("{id}/reference")]
public async Task<IActionResult> GetNotificationReference(int id)
{
    var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
    if (userId == null)
    {
        return Unauthorized();
    }

    var result = await _notificationService.GetNotificationReference(id, userId);
    if (!result.Success)
    {
        return NotFound(result.Message);
    }

    return Ok(result);
}
```

---

### 6. Infrastructure Layer

#### ✅ Migration: `20251101145346_AddNotificationReference.cs`
تم إنشاء migration لإضافة الحقول الجديدة:
- `ReferenceId` (int, nullable)
- `ReferenceType` (int, not null, default: 0)

---

## 🚀 كيفية الاستخدام

### في الباك إند

عند إنشاء أي حدث يتطلب إرسال إشعار، استخدم:

```csharp
await _notificationService.SendNotificationAsync(
    title: "عنوان الإشعار",
    message: "محتوى الإشعار",
    userIds: new List<string> { "user-id-1", "user-id-2" },
    type: "Meeting",              // نوع الإشعار (للتصنيف)
    htmlContent: null,            // محتوى HTML اختياري
    referenceId: eventId,         // 👈 معرف الحدث
    referenceType: NotificationReferenceType.Meeting  // 👈 نوع الحدث
);
```

### في الفرونت إند

#### 1. عرض الإشعارات مع زر الانتقال

```typescript
interface Notification {
  id: number;
  title: string;
  message: string;
  referenceId?: number;
  referenceType: number;
}

function NotificationItem({ notification }: { notification: Notification }) {
  const navigate = useNavigate();
  
  const handleGoToEvent = async () => {
    if (!notification.referenceId) return;
    
    switch (notification.referenceType) {
      case 1: // Meeting
        navigate(`/meetings/${notification.referenceId}`);
        break;
      case 2: // Task
        navigate(`/tasks/${notification.referenceId}`);
        break;
      case 3: // Visit
        navigate(`/visits/${notification.referenceId}`);
        break;
      case 4: // Travel
        navigate(`/travels/${notification.referenceId}`);
        break;
    }
  };
  
  return (
    <div className="notification">
      <h4>{notification.title}</h4>
      <p>{notification.message}</p>
      {notification.referenceId && (
        <button onClick={handleGoToEvent}>
          انتقل إلى الحدث
        </button>
      )}
    </div>
  );
}
```

#### 2. استخدام API endpoint للحصول على تفاصيل Reference

```typescript
async function getNotificationReference(notificationId: number) {
  const response = await fetch(`/api/Notification/${notificationId}/reference`);
  const result = await response.json();
  
  if (result.success) {
    return {
      referenceId: result.data.referenceId,
      referenceType: result.data.referenceType,
      referenceTypeName: result.data.referenceTypeName
    };
  }
  
  return null;
}
```

---

## 📊 أمثلة على الإشعارات المرسلة

### Meeting Notification
```json
{
  "title": "دعوة لحضور اجتماع: اجتماع الإدارة",
  "message": "تمت دعوتك لحضور اجتماع...",
  "type": "Meeting",
  "referenceId": 123,
  "referenceType": 1
}
```

### Task Notification
```json
{
  "title": "New Task Assigned",
  "message": "A new task has been assigned to you...",
  "type": "Task",
  "referenceId": 456,
  "referenceType": 2
}
```

### Visit Notification
```json
{
  "title": "دعوة للمشاركة في زيارة: زيارة ميدانية",
  "message": "تمت دعوتك للمشاركة في زيارة...",
  "type": "Visit",
  "referenceId": 789,
  "referenceType": 3
}
```

---

## 🎯 الخطوات التالية

### 1. تطبيق Migration
```bash
cd OfficeManagementSystem.Infrastructure
dotnet ef database update --startup-project ../OfficeManagementSystem.API/OfficeManagementSystem.API.csproj
```

### 2. إضافة Notifications للـ Travel (إذا لزم الأمر)

في `TravelService.cs`، يمكن إضافة:
```csharp
await _notificationService.SendNotificationAsync(
    "إشعار سفر جديد",
    $"تم تعيينك في سفرية: {travel.Title}",
    userIds,
    "Travel",
    null,
    travel.Id,
    NotificationReferenceType.Travel
);
```

### 3. تحديث الفرونت إند

- إضافة enum للـ NotificationReferenceType
- إضافة زر "انتقل إلى الحدث" في قائمة الإشعارات
- تنفيذ navigation logic بناءً على النوع

---

## ✅ الفوائد

1. **تجربة مستخدم أفضل**: المستخدم يمكنه الانتقال مباشرة للحدث المرتبط بالإشعار
2. **تنظيم أفضل**: ربط واضح بين الإشعارات والأحداث
3. **مرونة**: يمكن إضافة أنواع جديدة من الأحداث بسهولة
4. **قابلية التوسع**: البنية تدعم إضافة features جديدة
5. **Tracking أفضل**: يمكن تتبع الإشعارات المرتبطة بكل حدث

---

## 📝 ملاحظات

- جميع الـ parameters الجديدة optional بقيم افتراضية لضمان عدم كسر الكود الموجود
- الـ ReferenceId nullable لدعم الإشعارات العامة
- يتم التحقق من صلاحيات المستخدم قبل إرجاع معلومات الـ Reference
- جميع الإشعارات الحالية ستعمل بدون مشاكل (backward compatible)

---

تم التنفيذ بنجاح! 🎉

