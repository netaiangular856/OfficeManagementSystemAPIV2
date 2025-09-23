# DinkToPdf Configuration

## حل مشكلة تحميل libwkhtmltox.dll

إذا واجهت خطأ "Unable to load DLL 'libwkhtmltox' or one of its dependencies"، اتبع الخطوات التالية:

### 1. تأكد من وجود الملفات

تأكد من وجود الملفات التالية في مجلد `wwwroot/wkhtmltox/`:

- `libwkhtmltox.dll` (28MB)

### 2. إضافة مسار المكتبة إلى PATH

تم إضافة الكود التالي في `Program.cs` لإضافة مسار المكتبة إلى PATH البيئة:

```csharp
// إعداد مسار مكتبة wkhtmltox
var wkhtmltoxPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "wkhtmltox");
if (Directory.Exists(wkhtmltoxPath))
{
    var dllPath = Path.Combine(wkhtmltoxPath, "libwkhtmltox.dll");
    if (File.Exists(dllPath))
    {
        // إضافة المسار إلى PATH البيئة
        var currentPath = Environment.GetEnvironmentVariable("PATH") ?? "";
        if (!currentPath.Contains(wkhtmltoxPath))
        {
            Environment.SetEnvironmentVariable("PATH", $"{wkhtmltoxPath};{currentPath}");
        }
    }
}
```

### 3. التحقق من التبعيات

تأكد من تثبيت Visual C++ Redistributable على الخادم:

- Microsoft Visual C++ 2015-2022 Redistributable (x64)

### 4. إعدادات IIS (إذا كنت تستخدم IIS)

إذا كنت تستخدم IIS، تأكد من:

- إضافة مجلد `wkhtmltox` إلى مجلد `wwwroot`
- منح صلاحيات القراءة للمجلد
- إضافة مسار المكتبة إلى متغيرات البيئة في IIS

### 5. اختبار الحل

بعد تطبيق هذه الخطوات، أعد تشغيل التطبيق واختبر إنشاء PDF.

### 6. استكشاف الأخطاء الإضافية

إذا استمر الخطأ:

1. تحقق من وجود Visual C++ Redistributable
2. تأكد من أن النظام يدعم المكتبة (x64)
3. تحقق من صلاحيات الملفات
4. راجع الـ logs للتفاصيل الإضافية
