using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeManagementSystem.Domain.Sharing
{
    public static class EmailStringBodyRF
    {
        public static string Send(string email, string token, string component, string message)
        {
            string encodeToken = Uri.EscapeDataString(token);
            return $@"
<!DOCTYPE html>
<html lang=""ar"" dir=""rtl"">
<head>
    <meta charset=""UTF-8"">
    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
    <title>تأكيد الحساب - الخدمات الحكومية</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: 'Cairo', 'Segoe UI', 'Tahoma', sans-serif;
            background: #f5f7fa;
            padding: 20px;
            color: #2c3e50;
            direction: rtl;
            text-align: right;
            line-height: 1.6;
        }}
        
        .email-wrapper {{
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #e1e8ed;
        }}
        
        .email-header {{
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }}
        
        .gov-logo {{
            width: 70px;
            height: 70px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            border: 2px solid rgba(255, 255, 255, 0.2);
        }}
        
        .header-title {{
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
        }}
        
        .header-subtitle {{
            font-size: 16px;
            opacity: 0.9;
            font-weight: 400;
        }}
        
        .email-body {{
            padding: 40px 35px;
        }}
        
        .greeting {{
            font-size: 20px;
            color: #1e40af;
            margin-bottom: 25px;
            font-weight: 600;
        }}
        
        .message-content {{
            font-size: 16px;
            color: #4b5563;
            margin-bottom: 30px;
            line-height: 1.7;
        }}
        
        .token-section {{
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }}
        
        .token-label {{
            font-size: 16px;
            color: #64748b;
            margin-bottom: 15px;
            font-weight: 500;
        }}
        
        .token-code {{
            background: #ffffff;
            border: 2px dashed #cbd5e1;
            border-radius: 6px;
            padding: 15px 20px;
            font-family: 'Courier New', monospace;
            font-size: 18px;
            font-weight: 700;
            color: #1e40af;
            letter-spacing: 2px;
            margin-bottom: 20px;
            word-break: break-all;
        }}
        
        .cta-button {{
            display: inline-block;
            background: #1e40af;
            color: white;
            padding: 14px 35px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            border-radius: 6px;
            transition: all 0.3s ease;
            border: 2px solid #1e40af;
        }}
        
        .cta-button:hover {{
            background: #1d4ed8;
            border-color: #1d4ed8;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }}
        
        .instructions {{
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }}
        
        .instructions-title {{
            font-size: 16px;
            font-weight: 600;
            color: #92400e;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }}
        
        .instructions-text {{
            font-size: 14px;
            color: #a16207;
            line-height: 1.6;
        }}
        
        .warning-notice {{
            background: #fef2f2;
            border: 1px solid #fca5a5;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }}
        
        .warning-title {{
            font-size: 16px;
            font-weight: 600;
            color: #dc2626;
            margin-bottom: 10px;
        }}
        
        .warning-text {{
            font-size: 14px;
            color: #991b1b;
            line-height: 1.6;
        }}
        
        .divider {{
            height: 1px;
            background: #e5e7eb;
            margin: 30px 0;
        }}
        
        .footer {{
            background: #f9fafb;
            padding: 30px 35px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
        }}
        
        .footer-text {{
            font-size: 14px;
            color: #6b7280;
            margin-bottom: 15px;
        }}
        
        .gov-info {{
            font-size: 12px;
            color: #9ca3af;
            margin-top: 20px;
            line-height: 1.5;
        }}
        
        .contact-info {{
            background: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }}
        
        .contact-title {{
            font-size: 16px;
            color: #1e40af;
            font-weight: 600;
            margin-bottom: 10px;
        }}
        
        .contact-text {{
            font-size: 14px;
            color: #3730a3;
        }}
        
        @media (max-width: 600px) {{
            body {{
                padding: 10px;
            }}
            
            .email-wrapper {{
                border-radius: 8px;
            }}
            
            .email-body, .footer {{
                padding: 25px 20px;
            }}
            
            .email-header {{
                padding: 30px 20px;
            }}
            
            .header-title {{
                font-size: 22px;
            }}
            
            .token-code {{
                font-size: 16px;
                letter-spacing: 1px;
            }}
            
            .cta-button {{
                padding: 12px 25px;
                font-size: 15px;
            }}
        }}
    </style>
</head>
<body>
    <div class=""email-wrapper"">
        <div class=""email-header"">
            <div class=""gov-logo"">🏛️</div>
            <h1 class=""header-title"">الخدمات الحكومية الإلكترونية</h1>
            <p class=""header-subtitle"">تأكيد الحساب الرسمي</p>
        </div>
        
        <div class=""email-body"">
            <div class=""greeting"">السلام عليكم ورحمة الله وبركاته</div>
            
            <div class=""message-content"">
                {message}
            </div>
            
            <div class=""token-section"">
                <div class=""token-label"">رمز التأكيد الخاص بك:</div>
                <div class=""token-code"">{token}</div>
                <a class=""cta-button"" href=""http://localhost:4200/auth/{component}?email={email}&code={encodeToken}"" target=""_blank"">
                    تأكيد الحساب
                </a>
            </div>
            
            <div class=""instructions"">
                <div class=""instructions-title"">
                    📋 تعليمات الاستخدام
                </div>
                <div class=""instructions-text"">
                    • انقر على زر ""تأكيد الحساب"" أعلاه لإكمال العملية<br>
                    • أو استخدم رمز التأكيد المرفق في الصفحة المخصصة<br>
                    • يُرجى إكمال العملية خلال 24 ساعة من استلام هذا الإيميل
                </div>
            </div>
            
            <div class=""warning-notice"">
                <div class=""warning-title"">⚠️ تنبيه أمني</div>
                <div class=""warning-text"">
                    إذا لم تكن قد طلبت تأكيد هذا الحساب، يُرجى تجاهل هذا الإيميل تماماً وعدم الضغط على أي رابط. 
                    للإبلاغ عن أي استخدام مشبوه، يُرجى التواصل مع الدعم الفني فوراً.
                </div>
            </div>
            
            <div class=""contact-info"">
                <div class=""contact-title"">هل تحتاج مساعدة؟</div>
                <div class=""contact-text"">
                    فريق الدعم الفني متاح على مدار 24 ساعة لمساعدتك
                </div>
            </div>
        </div>
        
        <div class=""footer"">
            <div class=""footer-text"">
                <strong>هذا إيميل تلقائي من النظام الحكومي الإلكتروني</strong><br>
                يُرجى عدم الرد على هذا الإيميل مباشرة
            </div>
            
            <div class=""divider"" style=""margin: 20px 0;""></div>
            
            <div class=""gov-info"">
                جمهورية مصر العربية - الحكومة الإلكترونية<br>
                جميع الحقوق محفوظة © 2025<br>
                للاستفسارات: يُرجى زيارة البوابة الإلكترونية الرسمية
            </div>
        </div>
    </div>
</body>
</html>";
        }
    }
}
