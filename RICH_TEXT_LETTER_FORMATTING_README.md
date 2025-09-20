# 📝 نظام تنسيق النصوص الغني للرسائل

## 🎯 نظرة عامة

تم تطوير نظام متقدم لتنسيق النصوص في الرسائل يدعم:

- **تنسيق النصوص الغني** (Bold, Italic, Underline)
- **الألوان المخصصة**
- **المحاذاة المتقدمة** (يمين، يسار، وسط، مبرر)
- **العناوين والقوائم**
- **النصوص المختلطة** (عربي/إنجليزي)
- **Page Breaks** للانتقال بين الصفحات

## 🏗️ البنية التقنية

### 1. **Entity Layer** (`Letter.cs`)

```csharp
public class Letter
{
    public string Body { get; set; } = default!;        // نص الرسالة العادي
    public string? BodyHtml { get; set; }               // نص الرسالة بتنسيق HTML
    // ... باقي الخصائص
}
```

### 2. **DTOs** (`LetterDtos.cs`)

```csharp
public class CreateLetterDto
{
    public string Body { get; set; } = string.Empty;
    public string? BodyHtml { get; set; }  // HTML content from rich text editor
    // ... باقي الخصائص
}
```

### 3. **Mapping Profile** (`LetterMappingProfile.cs`)

```csharp
CreateMap<CreateLetterDto, Letter>()
    .ForMember(dest => dest.BodyHtml, opt => opt.MapFrom(src => src.BodyHtml))
    ;
```

### 4. **PDF Service** (`LetterPdfService.cs`)

- يستخدم **PuppeteerSharp** لتحويل HTML إلى PDF
- يدعم **CSS متقدم** للتنسيق
- **Base64 encoding** للصور
- **خطوط عربية** احترافية

## 🎨 الميزات المدعومة

### ✅ **تنسيق النصوص**

- **Bold**: `<strong>` أو `<b>`
- **Italic**: `<em>` أو `<i>`
- **Underline**: `<u>`
- **Colors**: `<span style='color:red;'>`

### ✅ **المحاذاة**

- **Center**: `class="ql-align-center"`
- **Right**: `class="ql-align-right"`
- **Left**: `class="ql-align-left"`
- **Justify**: `class="ql-align-justify"`

### ✅ **العناوين والقوائم**

- **Headings**: `<h1>`, `<h2>`, `<h3>`, إلخ
- **Lists**: `<ul>`, `<ol>`, `<li>`
- **Page Breaks**: `<div class="page-break"></div>`

### ✅ **النصوص المختلطة**

- **Arabic**: خط Amiri احترافي
- **English**: خط Arial
- **RTL Support**: دعم الكتابة من اليمين لليسار

## 🚀 كيفية الاستخدام

### 1. **Frontend (Angular)**

```typescript
// استخدام CKEditor 5 أو Quill
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({...})
export class LetterComponent {
  editor = ClassicEditor;
  editorConfig = {
    toolbar: ['bold', 'italic', 'underline', '|', 'alignment', '|', 'fontColor'],
    language: 'ar',
    direction: 'rtl'
  };

  onEditorReady(editor: any) {
    editor.model.document.on('change:data', () => {
      this.letterForm.patchValue({
        bodyHtml: editor.getData()
      });
    });
  }
}
```

### 2. **API Request**

```json
{
  "direction": 0,
  "subject": "خطاب رسمي متعدد اللغات",
  "body": "نص بسيط بدون تنسيق.",
  "bodyHtml": "<p><strong>سيتم عقد اجتماع الفريق</strong> يوم <u>الاثنين</u> الساعة <span style='color:red;'>10 صباحًا</span> في <em>قاعة الاجتماعات الرئيسية</em>.</p>",
  "to": "yosefys236@gmail.com",
  "letterDate": "2025-09-20T12:00:00.000Z"
}
```

### 3. **PDF Generation**

```csharp
// يتم استدعاؤها تلقائياً عند إنشاء PDF
var pdfPath = await pdfService.GenerateLetterPdfAsync(letterEntity.Data);
```

## 📋 أمثلة التنسيق

### مثال 1: نص مختلط

```html
<p>
  <strong>سيتم عقد اجتماع الفريق</strong> يوم <u>الاثنين</u> الساعة
  <span style="color:red;">10 صباحًا</span> في
  <em>قاعة الاجتماعات الرئيسية</em>.
</p>
```

### مثال 2: قائمة مع محاذاة

```html
<ul class="ql-align-right">
  <li>المكان: القاعة الرئيسية</li>
  <li>الزمان: 10 صباحًا</li>
  <li>الموضوع: تحسين بيئة العمل</li>
</ul>
```

### مثال 3: عنوان مع تنسيق

```html
<h2 style="text-align:center;color:#2C3E50;">إشعار مهم</h2>
```

### مثال 4: Page Break

```html
<div class="page-break"></div>
<p class="ql-align-right"><strong>مع الشكر،</strong><br />الإدارة العامة</p>
```

## 🎨 CSS المتقدم

### الخطوط

```css
body {
  font-family: "Amiri", "Arial", sans-serif;
  font-size: 14px;
  line-height: 1.6;
}
```

### الألوان

```css
.letter-header {
  background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
  color: white;
}
```

### المحاذاة

```css
.ql-align-center {
  text-align: center;
}
.ql-align-right {
  text-align: right;
}
.ql-align-left {
  text-align: left;
}
.ql-align-justify {
  text-align: justify;
}
```

## 🔧 استكشاف الأخطاء

### المشكلة: BodyHtml لا يظهر

**الحل**: تأكد من:

1. إرسال `bodyHtml` في الـ API request
2. تحديث الـ Database migration
3. فحص Console logs للـ debugging

### المشكلة: التنسيق لا يظهر في PDF

**الحل**: تأكد من:

1. استخدام PuppeteerSharp بدلاً من QuestPDF
2. CSS صحيح في `GetAdvancedCSS()`
3. HTML صالح

### المشكلة: الخطوط العربية لا تظهر

**الحل**: تأكد من:

1. تحميل خط Amiri
2. إعداد `font-family` صحيح
3. دعم RTL في CSS

## 📊 الأداء

### التحسينات المطبقة:

- **PuppeteerSharp**: تحويل HTML إلى PDF بجودة عالية
- **Base64 Images**: تضمين الصور مباشرة في HTML
- **CSS Optimization**: تحسين الـ CSS للأداء
- **Font Loading**: تحميل الخطوط بكفاءة

### المقارنة:

| الميزة       | QuestPDF | PuppeteerSharp |
| ------------ | -------- | -------------- |
| HTML Support | محدود    | كامل           |
| CSS Support  | أساسي    | متقدم          |
| Font Support | محدود    | كامل           |
| Performance  | سريع     | متوسط          |
| Quality      | جيد      | ممتاز          |

## 🚀 التطوير المستقبلي

### ميزات مخططة:

- [ ] دعم الجداول
- [ ] دعم الصور المضمنة
- [ ] قوالب جاهزة
- [ ] تصدير إلى Word
- [ ] دعم المزيد من الخطوط

### تحسينات مخططة:

- [ ] تحسين الأداء
- [ ] دعم المزيد من التنسيقات
- [ ] واجهة مستخدم محسنة
- [ ] دعم الوضع المظلم

## 📞 الدعم

للحصول على المساعدة:

1. تحقق من Console logs
2. راجع هذا الدليل
3. تحقق من الـ Database migration
4. تأكد من إرسال البيانات الصحيحة

---

**تم التطوير بواسطة**: فريق EXSUS  
**التاريخ**: 2025  
**الإصدار**: 1.0.0
