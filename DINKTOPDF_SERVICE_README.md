# LetterPdfServiceDinkToPdf

## نظرة عامة

هذه خدمة جديدة لتحويل الرسائل إلى PDF باستخدام مكتبة DinkToPdf بدلاً من PuppeteerSharp. تم إنشاؤها كبديل للخدمة الأصلية `LetterPdfService` مع الحفاظ على نفس الواجهة والوظائف.

## المميزات

- تحويل الرسائل إلى PDF باستخدام DinkToPdf
- دعم كامل للنصوص العربية والإنجليزية
- دعم تنسيقات النص المتقدمة (Bold, Italic, Underline, Colors, etc.)
- دعم الجداول والقوائم
- دعم صور التوقيع
- تصميم احترافي مع CSS متقدم
- دعم RTL للغة العربية

## التكوين المطلوب

### 1. مراجع NuGet

تم إضافة المرجع التالي إلى `OfficeManagementSystem.API.csproj`:

```xml
<PackageReference Include="DinkToPdf" Version="1.0.8" />
```

### 2. ملفات DLL

يجب أن تكون ملفات `wkhtmltox` موجودة في مجلد `wwwroot/wkhtmltox/`:

- `libwkhtmltox.dll`

### 3. تسجيل الخدمة

تم تسجيل الخدمة في `infrastructureRegisteration.cs`:

```csharp
// DinkToPdf Converter
services.AddSingleton(typeof(IConverter), new SynchronizedConverter(new PdfTools()));

// Letter PDF Service
services.AddScoped<ILetterPdfService, LetterPdfServiceDinkToPdf>();
```

## الاستخدام

الخدمة تستخدم نفس الواجهة `ILetterPdfService` مثل الخدمة الأصلية:

```csharp
public async Task<string> GenerateLetterPdfAsync(Letter letter)
```

## الفروق عن الخدمة الأصلية

1. **المحرك**: يستخدم DinkToPdf بدلاً من PuppeteerSharp
2. **الأداء**: أسرع في التحويل ولا يحتاج لتحميل متصفح
3. **الذاكرة**: استهلاك أقل للذاكرة
4. **الاعتمادية**: لا يحتاج لاتصال بالإنترنت لتحميل المتصفح

## إعدادات PDF

- **التوجه**: Portrait
- **الحجم**: A4
- **الهوامش**: 0cm من جميع الجهات
- **الجودة**: 100%
- **DPI**: 300
- **التشفير**: UTF-8

## دعم التنسيقات

- العناوين (H1-H6)
- الفقرات مع محاذاة مختلفة
- القوائم المرقمة وغير المرقمة
- الجداول
- الألوان والخلفيات
- أحجام الخطوط المختلفة
- الخطوط المخصصة (Amiri للعربية)

## ملاحظات مهمة

1. تأكد من وجود ملفات `wkhtmltox` في المسار الصحيح
2. الخدمة تدعم Base64 للصور للتأكد من ظهورها في PDF
3. يتم إنشاء ملفات PDF في مجلد `wwwroot/pdfs/`
4. أسماء الملفات تتضمن التاريخ والوقت لتجنب التضارب

## استكشاف الأخطاء

- تأكد من وجود ملفات DLL في المسار الصحيح
- تحقق من صلاحيات الكتابة في مجلد `wwwroot/pdfs/`
- راجع الـ logs للتفاصيل في حالة حدوث أخطاء
