# نظام إدارة الرسائل - Letter Management System

## نظرة عامة

تم تطوير نظام إدارة الرسائل ليكون بديلاً شاملاً لنظام الميل التقليدي، مع إضافة ميزات الاعتماد والتوقيع الرقمي وإرسال الميل التلقائي.

## الميزات الجديدة

### 1. تنسيق الرسائل

- دعم تنسيق النص (خط، حجم، لون، محاذاة)
- إمكانية إضافة تنسيق مخصص للرسائل
- حفظ التنسيق في قاعدة البيانات بصيغة JSON

### 2. نظام الاعتماد والتوقيع

- **مسودة (Draft)**: حالة الرسالة عند الإنشاء
- **في انتظار الاعتماد (PendingApproval)**: عند تقديم الرسالة للاعتماد
- **معتمد (Approved)**: بعد اعتماد الرسالة مع التوقيع
- **مرفوض (Rejected)**: عند رفض الرسالة
- **تم الإرسال (Sent)**: بعد إرسال الرسالة عبر الميل

### 3. إرسال الميل التلقائي

- إنشاء PDF منظم مع التوقيع
- إرسال الميل مع مرفق PDF
- تتبع حالة الإرسال

## API Endpoints

### العمليات الأساسية

- `POST /api/letters` - إنشاء رسالة جديدة
- `GET /api/letters` - جلب جميع الرسائل مع إمكانية البحث والتصفية
- `GET /api/letters/{id}` - جلب رسالة محددة
- `PUT /api/letters/{id}` - تحديث رسالة
- `DELETE /api/letters/{id}` - حذف رسالة

### نظام الاعتماد

- `POST /api/letters/{id}/submit-for-approval` - تقديم الرسالة للاعتماد
- `POST /api/letters/{id}/approve` - اعتماد الرسالة مع التوقيع
- `POST /api/letters/{id}/reject` - رفض الرسالة

### إرسال الميل

- `POST /api/letters/{id}/send-email` - إرسال الرسالة عبر الميل
- `GET /api/letters/{id}/email-status` - جلب حالة إرسال الميل

### المرفقات

- `GET /api/letters/{id}/attachments` - جلب مرفقات الرسالة
- `POST /api/letters/{id}/attachments` - إضافة مرفق
- `DELETE /api/letters/{id}/attachments/{attachmentId}` - حذف مرفق

## نماذج البيانات (DTOs)

### CreateLetterDto

```json
{
  "direction": "Out",
  "subject": "موضوع الرسالة",
  "body": "محتوى الرسالة",
  "confidentiality": "Public",
  "to": "المستلم",
  "cc": "نسخة إلى",
  "bcc": "نسخة مخفية",
  "letterDate": "2025-01-01",
  "referenceNumbers": "رقم المرجع",
  "bodyFormatting": {
    "fontFamily": "Arial",
    "fontSize": 12,
    "fontWeight": "Normal",
    "color": "#000000",
    "alignment": "Left",
    "isItalic": false,
    "isUnderline": false
  }
}
```

### ApproveLetterDto

```json
{
  "signatureImage": "ملف صورة التوقيع",
  "approvalNotes": "ملاحظات الاعتماد"
}
```

### SendLetterEmailDto

```json
{
  "toEmail": "recipient@example.com",
  "ccEmail": "cc@example.com",
  "bccEmail": "bcc@example.com",
  "emailSubject": "موضوع الميل",
  "emailBody": "محتوى الميل"
}
```

## إعدادات الميل

### appsettings.json

```json
{
  "EmailSettings": {
    "SmtpHost": "smtp.gmail.com",
    "SmtpPort": 587,
    "SmtpUsername": "your-email@gmail.com",
    "SmtpPassword": "your-app-password",
    "EnableSsl": true
  }
}
```

## خط السير (Workflow)

1. **إنشاء الرسالة**: المستخدم ينشئ رسالة جديدة مع التنسيق المطلوب
2. **تقديم للاعتماد**: المستخدم يقدم الرسالة للمدير للاعتماد
3. **الاعتماد**: المدير يراجع الرسالة ويضيف التوقيع الرقمي
4. **الإرسال**: بعد الاعتماد، يمكن إرسال الرسالة عبر الميل مع PDF منظم

## الملفات المهمة

### النماذج (Models)

- `OfficeManagementSystem.Domain/Entity/Letters/Letter.cs` - نموذج الرسالة الرئيسي
- `OfficeManagementSystem.Domain/Enums/Letters/LetterStatus.cs` - حالات الرسالة
- `OfficeManagementSystem.Domain/Enums/Letters/TextFormatting.cs` - تنسيق النص

### الخدمات (Services)

- `OfficeManagementSystem.Application/Services/implementions/LetterService.cs` - خدمة الرسائل الرئيسية
- `OfficeManagementSystem.Application/Services/implementions/LetterPdfService.cs` - خدمة إنشاء PDF
- `OfficeManagementSystem.Application/Services/implementions/EmailService.cs` - خدمة إرسال الميل

### Controllers

- `OfficeManagementSystem.API/Controllers/LettersController.cs` - API endpoints

## التبعيات المطلوبة

### NuGet Packages

- `QuestPDF` - لإنشاء ملفات PDF
- `Newtonsoft.Json` - لمعالجة JSON
- `AutoMapper` - لتحويل البيانات
- `Microsoft.AspNetCore.Identity` - لإدارة المستخدمين

## ملاحظات مهمة

1. **أمان التوقيع**: يتم حفظ صور التوقيع في مجلد منفصل مع حماية خاصة
2. **تنسيق PDF**: يستخدم النظام ألوان ذهبية وتصميم منظم للـ PDF
3. **تتبع الإرسال**: يتم حفظ تفاصيل إرسال الميل في قاعدة البيانات
4. **دعم المرفقات**: يمكن إضافة مرفقات متعددة للرسالة

## التطوير المستقبلي

- إضافة توقيع رقمي متقدم
- دعم تنسيقات إضافية للـ PDF
- إشعارات تلقائية للمستخدمين
- تقارير مفصلة عن الرسائل المرسلة
