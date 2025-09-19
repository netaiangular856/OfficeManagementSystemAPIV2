import {
  AuthService
} from "./chunk-DNZ6YJ3A.js";
import "./chunk-CKE7UXF6.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-LQXSMMP4.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HY6UJAEU.js";
import {
  CommonModule,
  Component,
  LangService,
  NgIf,
  NgModule,
  TranslationService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J5ZZ35GX.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/auth/login/login.component.ts
function LoginComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function LoginComponent__svg_svg_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "path", 54)(2, "circle", 55);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 53);
    \u0275\u0275element(1, "path", 56)(2, "path", 57)(3, "path", 58)(4, "line", 59);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("password"), " ");
  }
}
function LoginComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("login.login"));
  }
}
function LoginComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("login.loading"));
  }
}
function LoginComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  translationService;
  langService;
  loginForm;
  showPassword = false;
  loading = false;
  errorMessage = "";
  constructor(fb, authService, router, translationService, langService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.translationService = translationService;
    this.langService = langService;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (response) => {
          this.loading = false;
          this.router.navigate(["/dashboard"]);
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 401 || error.status === 400) {
            this.errorMessage = this.translationService.translate("login.credentials_error");
          } else {
            this.errorMessage = this.translationService.translate("login.login_failed");
          }
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach((key) => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.loginForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return this.translationService.translate(`login.${fieldName}_required`);
      }
      if (field.errors["email"]) {
        return this.translationService.translate("login.email_invalid");
      }
      if (field.errors["minlength"]) {
        return this.translationService.translate("login.password_min_length");
      }
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  toggleLanguage() {
    this.langService.toggleLanguage();
  }
  setLanguage(lang) {
    if (this.langService.getCurrentLang() === lang) {
      return;
    }
    this.langService.setLanguage(lang);
  }
  isRTL() {
    return this.langService.getCurrentLang() === "ar";
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 71, vars: 37, consts: [[1, "login-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], ["src", "/logo-small.svg", "alt", "EcoOffice", 1, "eco-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "login-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "login-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], [1, "password-input-container"], ["id", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], ["class", "eye-icon", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "login-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/request-reset", 1, "forgot-password-link"], ["class", "error-message", 4, "ngIf"], [1, "login-side"], [1, "side-overlay"], [1, "side-content"], [1, "brand"], ["src", "/logo-white.png", "alt", "EcoOffice", 1, "brand-mark"], [1, "side-title"], [1, "side-subtitle"], [1, "form-error"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "eye-icon"], ["d", "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M9.88 9.88a3 3 0 1 0 4.24 4.24"], ["d", "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"], ["d", "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"], ["x1", "2", "x2", "22", "y1", "2", "y2", "22"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8)(9, "clipPath", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 16);
      \u0275\u0275text(17, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "path", 18)(22, "path", 19)(23, "path", 20)(24, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "div", 22);
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25)(31, "h1", 26);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 27);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29)(37, "h2");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "form", 30);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_39_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(40, "div", 31)(41, "label", 32);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 33);
      \u0275\u0275template(44, LoginComponent_div_44_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 31)(46, "label", 32);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 35);
      \u0275\u0275element(49, "input", 36);
      \u0275\u0275elementStart(50, "button", 37);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_50_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275template(51, LoginComponent__svg_svg_51_Template, 3, 0, "svg", 38)(52, LoginComponent__svg_svg_52_Template, 5, 0, "svg", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, LoginComponent_div_53_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 39)(55, "button", 40);
      \u0275\u0275template(56, LoginComponent_span_56_Template, 2, 1, "span", 41)(57, LoginComponent_span_57_Template, 2, 1, "span", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 42)(59, "a", 43);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(61, LoginComponent_div_61_Template, 2, 1, "div", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 45)(63, "div", 46)(64, "div", 47)(65, "div", 48);
      \u0275\u0275element(66, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h1", 50);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 51);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !ctx.isRTL());
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isRTL());
      \u0275\u0275advance(9);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.isRTL() ? "Switch to English" : "Switch to Arabic");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("login.welcome_back"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("login.login_hint"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("login.login"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "email");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("login.email"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.getFieldError("email"));
      \u0275\u0275property("placeholder", ctx.translate("login.email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("email"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "password");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("login.password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("password"));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password")("placeholder", ctx.translate("login.password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("password"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("login.forgot_password"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.translate("login.paperless_slogan_title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("login.paperless_slogan"));
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.login-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .login-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  border-color: #BFAB86;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 6px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #BFAB86;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: #BFAB86;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.login-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(400px, 40vh, 600px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 57, 0.315),\n      rgba(9, 54, 95, 0.171)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nbody.rtl[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \n.rtl[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-right-radius: var(--hero-radius) !important;\n  border-bottom-right-radius: var(--hero-radius) !important;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(253, 232, 111, 0.808),\n      rgba(12, 27, 41, 0.808)),\n    url(/bg-side.png) !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nbody.ltr[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \n.ltr[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-left-radius: var(--hero-radius) !important;\n  border-bottom-left-radius: var(--hero-radius) !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.945),\n      rgba(27, 29, 33, 0.767)),\n    url(/bg-side-en.png) !important;\n}\n.side-overlay[_ngcontent-%COMP%]:not([dir]) {\n  border-top-left-radius: var(--hero-radius) !important;\n  border-bottom-left-radius: var(--hero-radius) !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      -135deg,\n      rgba(212, 170, 58, 0.945),\n      rgba(27, 29, 33, 0.767)),\n    url(/bg-side-en.png) !important;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: var(--on-hero);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  padding: clamp(20px, 4vw, 40px);\n  max-width: 780px;\n  width: 100%;\n  height: 100%;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  color: var(--on-hero);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  max-height: clamp(60px, 8vw, 81px);\n  max-width: clamp(150px, 20vw, 207px);\n  display: block;\n  width: auto;\n  height: auto;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.side-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  line-height: 1.25;\n  font-size: clamp(28px, 4vw, 40px);\n  letter-spacing: .2px;\n  text-align: center;\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  line-height: 1.7;\n  font-size: var(--hero-sub-size);\n  opacity: .92;\n  max-width: 52ch;\n  text-align: center;\n}\n@media (min-width: 1280px) {\n  .login-side[_ngcontent-%COMP%] {\n    height: 780px;\n  }\n  .side-content[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex: 1;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  width: 100%;\n  max-width: 480px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 1.6vw, 24px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 1.2vw, 16px);\n  opacity: .8;\n  color: var(--color-main-2);\n  margin: 0;\n  line-height: 1.5;\n}\n.form-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid var(--color-main-2);\n  width: 100%;\n  max-width: 480px;\n  position: relative;\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  font-size: 13px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid #e1e5e9;\n  border-radius: 16px;\n  font-size: 15px;\n  transition: border-color 0.2s ease;\n  min-height: 52px;\n  background-color: white;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-main);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 6px;\n}\n.password-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-input-container[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-main-2);\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  left: 16px;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-main);\n}\n.eye-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: translateX(-1) !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 52px;\n  border-radius: 16px;\n  background-color: var(--cta-idle-bg);\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1B1D21,\n      #BFAB86) !important;\n}\n.login-btn[_ngcontent-%COMP%]:active {\n  background-color: var(--cta-active-bg);\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.forgot-password-link[_ngcontent-%COMP%] {\n  color: var(--color-main-2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.forgot-password-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-main);\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 24px;\n  text-align: center;\n  font-size: 14px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .side-title[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .side-subtitle[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 1024px) {\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 32px;\n  }\n  .login-side[_ngcontent-%COMP%] {\n    height: 30vh;\n    min-height: 250px;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n    border-top-right-radius: var(--hero-radius) !important;\n    border-bottom-right-radius: 32px !important;\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  [dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n    border-top-left-radius: var(--hero-radius) !important;\n    border-bottom-left-radius: 32px !important;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .top-header[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .side-content[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    padding-block: 16px;\n  }\n  .login-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding-top: 80px;\n    flex: none;\n    width: 100%;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 640px) {\n  .login-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    justify-self: center;\n    flex: none;\n    width: 100%;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n    width: 95% !important;\n  }\n}\n/*# sourceMappingURL=login.component-AQTNGZ5P.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: false, template: `<div class="login-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
      <img src="/logo-small.svg" alt="EcoOffice" class="eco-logo">\r
    </div>\r
    <div class="language-toggle">\r
      <div class="toggle-container" [class.rtl]="isRTL()">\r
        <div class="toggle-option" [class.active]="!isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 60 30" width="20" height="15">\r
              <clipPath id="uk-flag">\r
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>\r
              </clipPath>\r
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag)"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">EN</span>\r
        </div>\r
        <div class="toggle-option" [class.active]="isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 640 480" width="20" height="15">\r
              <path fill="#00732f" d="M0 0h640v160H0z"/>\r
              <path fill="#fff" d="M0 160h640v160H0z"/>\r
              <path fill="#000" d="M0 320h640v160H0z"/>\r
              <path fill="#ff0000" d="M0 0h180v480H0z"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">AR</span>\r
        </div>\r
        <div class="toggle-slider" [class.rtl]="isRTL()"></div>\r
        <button class="toggle-button" (click)="toggleLanguage()" [attr.aria-label]="isRTL() ? 'Switch to English' : 'Switch to Arabic'"></button>\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
\r
  <!-- Login Form Section -->\r
  <div class="login-form">\r
    <!-- Welcome text block aligned to form card edges -->\r
    <div class="welcome-block">\r
      <h1 class="welcome-title">{{ translate('login.welcome_back') }}</h1>\r
      <p class="welcome-subtitle">{{ translate('login.login_hint') }}</p>\r
    </div>\r
    \r
    <div class="form-container">\r
      <div class="form-title">\r
        <h2>{{ translate('login.login') }}</h2>\r
      </div>\r
\r
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form-content">\r
        <div class="form-group">\r
          <label [for]="'email'" class="form-label">{{ translate('login.email') }}</label>\r
          <input\r
            type="email"\r
            id="email"\r
            formControlName="email"\r
            class="form-control"\r
            [class.error]="getFieldError('email')"\r
            [placeholder]="translate('login.email')"\r
          >\r
          <div class="form-error" *ngIf="getFieldError('email')">\r
            {{ getFieldError('email') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'password'" class="form-label">{{ translate('login.password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showPassword ? 'text' : 'password'"\r
              id="password"\r
              formControlName="password"\r
              class="form-control"\r
              [class.error]="getFieldError('password')"\r
              [placeholder]="translate('login.password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility()"\r
              [attr.aria-label]="showPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <!-- Eye icon for show password - direction changes with language -->\r
              <svg *ngIf="!showPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>\r
                <circle cx="12" cy="12" r="3"/>\r
              </svg>\r
              <!-- Eye-off icon for hide password - direction changes with language -->\r
              <svg *ngIf="showPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>\r
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>\r
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"/>\r
                <line x1="2" x2="22" y1="2" y2="22"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('password')">\r
            {{ getFieldError('password') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button\r
            type="submit"\r
            class="btn btn-primary login-btn"\r
            [disabled]="loading"\r
          >\r
            <span *ngIf="!loading">{{ translate('login.login') }}</span>\r
            <span *ngIf="loading">{{ translate('login.loading') }}</span>\r
          </button>\r
        </div>\r
\r
        <div class="form-footer">\r
          <a routerLink="/auth/request-reset" class="forgot-password-link">\r
            {{ translate('login.forgot_password') }}\r
          </a>\r
        </div>\r
\r
        <div class="error-message" *ngIf="errorMessage">\r
          {{ errorMessage }}\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
    <!-- Side Section (Hero) -->\r
    <div class="login-side">\r
        <div class="side-overlay">\r
          <div class="side-content">\r
            <div class="brand">\r
              <img src="/logo-white.png" alt="EcoOffice" class="brand-mark">\r
            </div>\r
            <h1 class="side-title">{{ translate('login.paperless_slogan_title') }}</h1>\r
            <p class="side-subtitle">{{ translate('login.paperless_slogan') }}</p>\r
          </div>\r
        </div>\r
      </div>\r
</div>\r
`, styles: ['/* src/app/components/auth/login/login.component.css */\n.login-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl] .login-layout {\n  flex-direction: row;\n}\n[dir=ltr] .login-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #BFAB86;\n  border-color: #BFAB86;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 6px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #BFAB86;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: #BFAB86;\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.login-side {\n  position: relative;\n  height: clamp(400px, 40vh, 600px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 57, 0.315),\n      rgba(9, 54, 95, 0.171)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n[dir=rtl] .side-overlay,\nhtml[dir=rtl] .side-overlay,\nbody.rtl .side-overlay,\n.rtl .side-overlay {\n  border-top-right-radius: var(--hero-radius) !important;\n  border-bottom-right-radius: var(--hero-radius) !important;\n  border-top-left-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(253, 232, 111, 0.808),\n      rgba(12, 27, 41, 0.808)),\n    url(/bg-side.png) !important;\n}\n[dir=ltr] .side-overlay,\nhtml[dir=ltr] .side-overlay,\nbody.ltr .side-overlay,\n.ltr .side-overlay {\n  border-top-left-radius: var(--hero-radius) !important;\n  border-bottom-left-radius: var(--hero-radius) !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.945),\n      rgba(27, 29, 33, 0.767)),\n    url(/bg-side-en.png) !important;\n}\n.side-overlay:not([dir]) {\n  border-top-left-radius: var(--hero-radius) !important;\n  border-bottom-left-radius: var(--hero-radius) !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  background-image:\n    linear-gradient(\n      -135deg,\n      rgba(212, 170, 58, 0.945),\n      rgba(27, 29, 33, 0.767)),\n    url(/bg-side-en.png) !important;\n}\n.side-content {\n  position: relative;\n  z-index: 1;\n  color: var(--on-hero);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  padding: clamp(20px, 4vw, 40px);\n  max-width: 780px;\n  width: 100%;\n  height: 100%;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  color: var(--on-hero);\n}\n.brand-mark {\n  max-height: clamp(60px, 8vw, 81px);\n  max-width: clamp(150px, 20vw, 207px);\n  display: block;\n  width: auto;\n  height: auto;\n}\n.brand-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.side-title {\n  margin: 0;\n  font-weight: 600;\n  line-height: 1.25;\n  font-size: clamp(28px, 4vw, 40px);\n  letter-spacing: .2px;\n  text-align: center;\n}\n.side-subtitle {\n  margin: 0;\n  font-weight: 400;\n  line-height: 1.7;\n  font-size: var(--hero-sub-size);\n  opacity: .92;\n  max-width: 52ch;\n  text-align: center;\n}\n@media (min-width: 1280px) {\n  .login-side {\n    height: 780px;\n  }\n  .side-content {\n    gap: 10px;\n  }\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex: 1;\n}\n.welcome-block {\n  text-align: center;\n  margin-bottom: 32px;\n  width: 100%;\n  max-width: 480px;\n}\n.welcome-title {\n  font-size: clamp(20px, 1.6vw, 24px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.welcome-subtitle {\n  font-size: clamp(14px, 1.2vw, 16px);\n  opacity: .8;\n  color: var(--color-main-2);\n  margin: 0;\n  line-height: 1.5;\n}\n.form-container {\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid var(--color-main-2);\n  width: 100%;\n  max-width: 480px;\n  position: relative;\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  font-size: 13px;\n}\n.form-control {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid #e1e5e9;\n  border-radius: 16px;\n  font-size: 15px;\n  transition: border-color 0.2s ease;\n  min-height: 52px;\n  background-color: white;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--color-main);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 6px;\n}\n.password-input-container {\n  position: relative;\n}\n[dir=rtl] .password-input-container {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-main-2);\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr] .password-toggle {\n  right: 16px;\n}\n[dir=rtl] .password-toggle {\n  left: 16px;\n}\n.password-toggle:hover {\n  color: var(--color-main);\n}\n.eye-icon {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl] .eye-icon {\n  transform: translateX(-1) !important;\n}\n[dir=ltr] .eye-icon {\n  transform: scaleX(1);\n}\n.form-actions {\n  margin-top: 24px;\n}\n.login-btn {\n  width: 100%;\n  padding: 14px 24px;\n  font-size: 15px;\n  font-weight: 600;\n  min-height: 52px;\n  border-radius: 16px;\n  background-color: var(--cta-idle-bg);\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n.login-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #1B1D21,\n      #BFAB86) !important;\n}\n.login-btn:active {\n  background-color: var(--cta-active-bg);\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.forgot-password-link {\n  color: var(--color-main-2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.forgot-password-link:hover {\n  color: var(--color-main);\n}\n.error-message {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 24px;\n  text-align: center;\n  font-size: 14px;\n}\n[dir=ltr] .welcome-title,\n[dir=ltr] .welcome-subtitle,\n[dir=ltr] .form-title h2,\n[dir=ltr] .form-label,\n[dir=ltr] .form-control,\n[dir=ltr] .login-btn,\n[dir=ltr] .forgot-password-link {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl] .welcome-title,\n[dir=rtl] .welcome-subtitle,\n[dir=rtl] .form-title h2,\n[dir=rtl] .form-label,\n[dir=rtl] .form-control,\n[dir=rtl] .login-btn,\n[dir=rtl] .forgot-password-link,\n[dir=rtl] .side-title,\n[dir=rtl] .side-subtitle,\n[dir=rtl] .brand-name {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 1024px) {\n  .login-layout {\n    flex-direction: column;\n    gap: 32px;\n  }\n  .login-side {\n    height: 30vh;\n    min-height: 250px;\n  }\n  [dir=rtl] .side-overlay {\n    border-top-right-radius: var(--hero-radius) !important;\n    border-bottom-right-radius: 32px !important;\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  [dir=ltr] .side-overlay {\n    border-top-left-radius: var(--hero-radius) !important;\n    border-bottom-left-radius: 32px !important;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .welcome-block {\n    margin-bottom: 24px;\n  }\n  .form-container {\n    padding: 32px 24px;\n  }\n  .welcome-title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .top-header {\n    padding: 16px 20px;\n  }\n  .eco-logo {\n    width: 28px;\n    height: 28px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .side-content {\n    padding: 0 24px;\n  }\n  .form-container {\n    padding: 24px 20px;\n  }\n  .welcome-title {\n    font-size: 20px;\n  }\n  .form-title h2 {\n    font-size: 18px;\n  }\n  .login-layout {\n    padding-block: 16px;\n  }\n  .login-side {\n    display: none;\n  }\n  .login-layout {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form {\n    justify-content: flex-start;\n    padding-top: 80px;\n    flex: none;\n    width: 100%;\n  }\n  .welcome-block {\n    margin-bottom: 20px;\n  }\n  .form-container {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 640px) {\n  .login-side {\n    display: none;\n  }\n  .login-layout {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form {\n    justify-content: flex-start;\n    justify-self: center;\n    flex: none;\n    width: 100%;\n  }\n  .welcome-block {\n    margin-bottom: 20px;\n  }\n  .form-container {\n    padding: 20px 16px;\n    width: 95% !important;\n  }\n}\n/*# sourceMappingURL=login.component-AQTNGZ5P.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/auth/login/login.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/request-reset/request-reset.component.ts
function RequestResetComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function RequestResetComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("request_reset.send_button"));
  }
}
function RequestResetComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("login.loading"));
  }
}
function RequestResetComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function RequestResetComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var RequestResetComponent = class _RequestResetComponent {
  fb;
  authService;
  router;
  translationService;
  langService;
  resetForm;
  loading = false;
  successMessage = "";
  errorMessage = "";
  constructor(fb, authService, router, translationService, langService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.translationService = translationService;
    this.langService = langService;
    this.resetForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.resetForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";
      const email = this.resetForm.get("email")?.value;
      this.authService.sendResetEmail(email).subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = this.translate("request_reset.success_message");
          this.resetForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = this.translate("request_reset.error_message");
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.resetForm.controls).forEach((key) => {
      const control = this.resetForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.resetForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return this.translate(`login.${fieldName}_required`);
      }
      if (field.errors["email"]) {
        return this.translate("login.email_invalid");
      }
    }
    return "";
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  setLanguage(lang) {
    this.langService.setLanguage(lang);
  }
  toggleLanguage() {
    this.langService.toggleLanguage();
  }
  isRTL() {
    return this.langService.getCurrentLang() === "ar";
  }
  static \u0275fac = function RequestResetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestResetComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestResetComponent, selectors: [["app-request-reset"]], standalone: false, decls: 54, vars: 26, consts: [[1, "request-reset-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], ["src", "/logo-small.svg", "alt", "EcoOffice", 1, "eco-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "request-reset-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "request-reset-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "reset-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-to-login-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function RequestResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8)(9, "clipPath", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 16);
      \u0275\u0275text(17, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "path", 18)(22, "path", 19)(23, "path", 20)(24, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "div", 22);
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function RequestResetComponent_Template_button_click_28_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25)(31, "h1", 26);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 27);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29)(37, "h2");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "form", 30);
      \u0275\u0275listener("ngSubmit", function RequestResetComponent_Template_form_ngSubmit_39_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(40, "div", 31)(41, "label", 32);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 33);
      \u0275\u0275template(44, RequestResetComponent_div_44_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 35)(46, "button", 36);
      \u0275\u0275template(47, RequestResetComponent_span_47_Template, 2, 1, "span", 37)(48, RequestResetComponent_span_48_Template, 2, 1, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 38)(50, "a", 39);
      \u0275\u0275listener("click", function RequestResetComponent_Template_a_click_50_listener() {
        return ctx.goToLogin();
      });
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(52, RequestResetComponent_div_52_Template, 2, 1, "div", 40)(53, RequestResetComponent_div_53_Template, 2, 1, "div", 41);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !ctx.isRTL());
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isRTL());
      \u0275\u0275advance(9);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.isRTL() ? "Switch to English" : "Switch to Arabic");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("request_reset.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("request_reset.subtitle"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("request_reset.title"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "email");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("request_reset.email"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.getFieldError("email"));
      \u0275\u0275property("placeholder", ctx.translate("request_reset.email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("email"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("request_reset.back_to_login"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n\n\n.request-reset-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .request-reset-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .request-reset-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #1B1D21;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  border-color: #BFAB86;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 10px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #BFAB86;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: #BFAB86;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.toggle-option[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.globe-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.request-reset-form[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: #BFAB86;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.reset-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link[_ngcontent-%COMP%] {\n  color: #BFAB86;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link[_ngcontent-%COMP%]:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.request-reset-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.92),\n      rgba(27, 29, 33, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .request-reset-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .request-reset-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-main: #BFAB86;\n  --color-main-dark: #B68A35;\n  --color-main-2: #1B1D21;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=request-reset.component-WHUKU4DE.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestResetComponent, [{
    type: Component,
    args: [{ selector: "app-request-reset", standalone: false, template: `<div class="request-reset-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
      <img src="/logo-small.svg" alt="EcoOffice" class="eco-logo">\r
    </div>\r
    <div class="language-toggle">\r
      <div class="toggle-container" [class.rtl]="isRTL()">\r
        <div class="toggle-option" [class.active]="!isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 60 30" width="20" height="15">\r
              <clipPath id="uk-flag">\r
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>\r
              </clipPath>\r
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag)"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">EN</span>\r
        </div>\r
        <div class="toggle-option" [class.active]="isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 640 480" width="20" height="15">\r
              <path fill="#00732f" d="M0 0h640v160H0z"/>\r
              <path fill="#fff" d="M0 160h640v160H0z"/>\r
              <path fill="#000" d="M0 320h640v160H0z"/>\r
              <path fill="#ff0000" d="M0 0h180v480H0z"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">AR</span>\r
        </div>\r
        <div class="toggle-slider" [class.rtl]="isRTL()"></div>\r
        <button class="toggle-button" (click)="toggleLanguage()" [attr.aria-label]="isRTL() ? 'Switch to English' : 'Switch to Arabic'"></button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Request Reset Form Section -->\r
  <div class="request-reset-form">\r
    <!-- Welcome text block aligned to form card edges -->\r
    <div class="welcome-block">\r
      <h1 class="welcome-title">{{ translate('request_reset.title') }}</h1>\r
      <p class="welcome-subtitle">{{ translate('request_reset.subtitle') }}</p>\r
    </div>\r
    \r
    <div class="form-container">\r
      <div class="form-title">\r
        <h2>{{ translate('request_reset.title') }}</h2>\r
      </div>\r
\r
      <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="request-reset-form-content">\r
        <div class="form-group">\r
          <label [for]="'email'" class="form-label">{{ translate('request_reset.email') }}</label>\r
          <input\r
            type="email"\r
            id="email"\r
            formControlName="email"\r
            class="form-control"\r
            [class.error]="getFieldError('email')"\r
            [placeholder]="translate('request_reset.email')"\r
          >\r
          <div class="form-error" *ngIf="getFieldError('email')">\r
            {{ getFieldError('email') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button\r
            type="submit"\r
            class="btn btn-primary reset-btn"\r
            [disabled]="loading"\r
          >\r
            <span *ngIf="!loading">{{ translate('request_reset.send_button') }}</span>\r
            <span *ngIf="loading">{{ translate('login.loading') }}</span>\r
          </button>\r
        </div>\r
\r
        <div class="form-footer">\r
          <a (click)="goToLogin()" class="back-to-login-link">\r
            {{ translate('request_reset.back_to_login') }}\r
          </a>\r
        </div>\r
\r
        <div class="success-message" *ngIf="successMessage">\r
          {{ successMessage }}\r
        </div>\r
\r
        <div class="error-message" *ngIf="errorMessage">\r
          {{ errorMessage }}\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  \r
</div>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/auth/request-reset/request-reset.component.css */\n.request-reset-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl] .request-reset-layout {\n  flex-direction: row;\n}\n[dir=ltr] .request-reset-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #1B1D21;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #BFAB86;\n  border-color: #BFAB86;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 10px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #BFAB86;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: #BFAB86;\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option:hover:not(.active) {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.toggle-option:active {\n  transform: scale(0.98);\n}\n.globe-icon {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.request-reset-form {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr] .welcome-title {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr] .welcome-subtitle {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-subtitle {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr] .form-title h2 {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-title h2 {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr] .form-label {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-label {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr] .form-control {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-control {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr] .form-error {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-error {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions {\n  margin-top: 24px;\n}\n.reset-btn {\n  width: 100%;\n  padding: 14px 24px;\n  background: #BFAB86;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr] .reset-btn {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .reset-btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.reset-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link {\n  color: #BFAB86;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr] .back-to-login-link {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .back-to-login-link {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr] .success-message,\n[dir=ltr] .error-message {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .success-message,\n[dir=rtl] .error-message {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.request-reset-side {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.92),\n      rgba(27, 29, 33, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl] .side-overlay {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .side-overlay {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand {\n  margin-bottom: 24px;\n}\n.brand-mark {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .request-reset-layout {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .request-reset-form {\n    padding: 0;\n  }\n  .form-container {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n:root {\n  --color-main: #BFAB86;\n  --color-main-dark: #B68A35;\n  --color-main-2: #1B1D21;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=request-reset.component-WHUKU4DE.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestResetComponent, { className: "RequestResetComponent", filePath: "src/app/components/auth/request-reset/request-reset.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("newPassword"), " ");
  }
}
function ResetPasswordComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirmPassword"), " ");
  }
}
function ResetPasswordComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("reset_password.reset_button"));
  }
}
function ResetPasswordComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("login.loading"));
  }
}
function ResetPasswordComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ResetPasswordComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  fb;
  authService;
  router;
  route;
  translationService;
  langService;
  resetForm;
  showNewPassword = false;
  showConfirmPassword = false;
  loading = false;
  successMessage = "";
  errorMessage = "";
  token = "";
  email = "";
  constructor(fb, authService, router, route, translationService, langService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.translationService = translationService;
    this.langService = langService;
    this.resetForm = this.fb.group({
      newPassword: ["", [Validators.required, Validators.minLength(8), this.passwordStrengthValidator()]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  // Custom password strength validator
  passwordStrengthValidator() {
    return (control) => {
      const password = control.value;
      if (!password)
        return null;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const valid = hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
      return valid ? null : { passwordStrength: true };
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.token = params["token"] || "";
    });
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"] || "";
      if (!this.token || !this.email) {
        if (this.router.url.includes("reset-password")) {
          if (!this.token && !this.email) {
            this.errorMessage = this.translate("reset_password.invalid_reset_link");
          } else if (!this.token) {
            this.errorMessage = this.translate("reset_password.missing_token");
          } else if (!this.email) {
            this.errorMessage = this.translate("reset_password.missing_email");
          }
        }
      } else {
        this.errorMessage = "";
      }
    });
  }
  passwordMatchValidator(form) {
    const newPassword = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { "passwordMismatch": true };
    }
    return null;
  }
  togglePasswordVisibility(field) {
    if (field === "newPassword") {
      this.showNewPassword = !this.showNewPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
  onSubmit() {
    if (this.resetForm.valid && this.token && this.email) {
      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";
      const request = {
        email: this.email,
        token: this.token,
        newPassword: this.resetForm.get("newPassword")?.value,
        confirmPassword: this.resetForm.get("confirmPassword")?.value
      };
      this.authService.resetPassword(request).subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = this.translate("reset_password.success_message");
          setTimeout(() => {
            this.router.navigate(["/auth/login"]);
          }, 2e3);
        },
        error: (error) => {
          this.loading = false;
          if (error.status === 400) {
            this.errorMessage = this.translate("reset_password.validation_error");
          } else if (error.status === 401) {
            this.errorMessage = this.translate("reset_password.invalid_token");
          } else if (error.status === 404) {
            this.errorMessage = this.translate("reset_password.user_not_found");
          } else {
            this.errorMessage = this.translate("reset_password.error_message");
          }
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.resetForm.controls).forEach((key) => {
      const control = this.resetForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.resetForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        if (fieldName === "newPassword") {
          return this.translate("reset_password.new_password_required");
        } else if (fieldName === "confirmPassword") {
          return this.translate("reset_password.confirm_password_required");
        }
        return this.translate("reset_password.field_required");
      }
      if (field.errors["minlength"]) {
        return this.translate("login.password_min_length");
      }
      if (field.errors["passwordStrength"]) {
        return this.translate("reset_password.password_strength_error");
      }
    }
    if (fieldName === "confirmPassword" && this.resetForm.errors?.["passwordMismatch"]) {
      return this.translate("login.passwords_not_match");
    }
    return "";
  }
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  setLanguage(lang) {
    this.langService.setLanguage(lang);
  }
  toggleLanguage() {
    this.langService.toggleLanguage();
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: false, decls: 69, vars: 46, consts: [[1, "reset-password-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], ["src", "/logo-small.svg", "alt", "EcoOffice", 1, "eco-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "reset-password-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "reset-password-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], [1, "password-input-container"], ["id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "toggle-icon"], ["class", "form-error", 4, "ngIf"], ["id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type", "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "reset-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-to-login-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8)(9, "clipPath", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "span", 16);
      \u0275\u0275text(17, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 17);
      \u0275\u0275element(21, "path", 18)(22, "path", 19)(23, "path", 20)(24, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "div", 22);
      \u0275\u0275elementStart(28, "button", 23);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_28_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25)(31, "h1", 26);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 27);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29)(37, "h2");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "form", 30);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_39_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(40, "div", 31)(41, "label", 32);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 33);
      \u0275\u0275element(44, "input", 34);
      \u0275\u0275elementStart(45, "button", 35);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_45_listener() {
        return ctx.togglePasswordVisibility("newPassword");
      });
      \u0275\u0275elementStart(46, "span", 16);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, ResetPasswordComponent_div_49_Template, 2, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 31)(51, "label", 32);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 33);
      \u0275\u0275element(54, "input", 38);
      \u0275\u0275elementStart(55, "button", 35);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_55_listener() {
        return ctx.togglePasswordVisibility("confirmPassword");
      });
      \u0275\u0275elementStart(56, "span", 16);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "i", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(59, ResetPasswordComponent_div_59_Template, 2, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 39)(61, "button", 40);
      \u0275\u0275template(62, ResetPasswordComponent_span_62_Template, 2, 1, "span", 41)(63, ResetPasswordComponent_span_63_Template, 2, 1, "span", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 42)(65, "a", 43);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_a_click_65_listener() {
        return ctx.goToLogin();
      });
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(67, ResetPasswordComponent_div_67_Template, 2, 1, "div", 44)(68, ResetPasswordComponent_div_68_Template, 2, 1, "div", 45);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !ctx.isRTL());
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isRTL());
      \u0275\u0275advance(9);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.isRTL() ? "Switch to English" : "Switch to Arabic");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("reset_password.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("reset_password.subtitle"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("reset_password.title"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.resetForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "newPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("reset_password.new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("newPassword"));
      \u0275\u0275property("type", ctx.showNewPassword ? "text" : "password")("placeholder", ctx.translate("reset_password.new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showNewPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showNewPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showNewPassword ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("newPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "confirmPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("reset_password.confirm_new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("confirmPassword"));
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", ctx.translate("reset_password.confirm_new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showConfirmPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showConfirmPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showConfirmPassword ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("confirmPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || !ctx.token || !ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("reset_password.back_to_login"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n\n\n.reset-password-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-password-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-password-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #09365F;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #09365F;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #158638;\n  border-color: #158638;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 10px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #158638;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #09365F !important;\n  left: 1px !important;\n  transform: translateX(100%) !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: var(--color-main);\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #09365F !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-option[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.globe-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.reset-password-form[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.password-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  padding-right: 50px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-main);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-main);\n  font-weight: 500;\n}\n[dir=ltr][_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--color-main);\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  padding-left: 50px;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: var(--color-main);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-main-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.reset-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link[_ngcontent-%COMP%] {\n  color: var(--color-main);\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-main-dark);\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-password-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.92),\n      rgba(9, 54, 95, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .reset-password-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .reset-password-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reset-password-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-main: #158636;\n  --color-main-dark: #0f5f28;\n  --color-main-2: #1a1a1a;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=reset-password.component-TM2EJGJ5.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: false, template: `<div class="reset-password-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
      <img src="/logo-small.svg" alt="EcoOffice" class="eco-logo">\r
    </div>\r
    <div class="language-toggle">\r
      <div class="toggle-container" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
        <div class="toggle-option" [class.active]="!isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 60 30" width="20" height="15">\r
              <clipPath id="uk-flag">\r
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>\r
              </clipPath>\r
              <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>\r
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag)"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>\r
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">EN</span>\r
        </div>\r
        <div class="toggle-option" [class.active]="isRTL()">\r
          <div class="flag-container">\r
            <svg class="flag" viewBox="0 0 640 480" width="20" height="15">\r
              <path fill="#00732f" d="M0 0h640v160H0z"/>\r
              <path fill="#fff" d="M0 160h640v160H0z"/>\r
              <path fill="#000" d="M0 320h640v160H0z"/>\r
              <path fill="#ff0000" d="M0 0h180v480H0z"/>\r
            </svg>\r
          </div>\r
          <span class="toggle-text">AR</span>\r
        </div>\r
        <div class="toggle-slider" [class.rtl]="isRTL()" [class.ltr]="!isRTL()"></div>\r
        <button class="toggle-button" (click)="toggleLanguage()" [attr.aria-label]="isRTL() ? 'Switch to English' : 'Switch to Arabic'"></button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Reset Password Form Section -->\r
  <div class="reset-password-form">\r
    <!-- Welcome text block aligned to form card edges -->\r
    <div class="welcome-block">\r
      <h1 class="welcome-title">{{ translate('reset_password.title') }}</h1>\r
      <p class="welcome-subtitle">{{ translate('reset_password.subtitle') }}</p>\r
    </div>\r
    \r
    <div class="form-container">\r
      <div class="form-title">\r
        <h2>{{ translate('reset_password.title') }}</h2>\r
      </div>\r
\r
      <form [formGroup]="resetForm" (ngSubmit)="onSubmit()" class="reset-password-form-content">\r
        <div class="form-group">\r
          <label [for]="'newPassword'" class="form-label">{{ translate('reset_password.new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showNewPassword ? 'text' : 'password'"\r
              id="newPassword"\r
              formControlName="newPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('newPassword')"\r
              [placeholder]="translate('reset_password.new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('newPassword')"\r
              [attr.aria-label]="showNewPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <span class="toggle-text">{{ showNewPassword ? translate('login.hide') : translate('login.show') }}</span>\r
              <i class="toggle-icon" [class]="showNewPassword ? 'eye-off' : 'eye'"></i>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('newPassword')">\r
            {{ getFieldError('newPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'confirmPassword'" class="form-label">{{ translate('reset_password.confirm_new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showConfirmPassword ? 'text' : 'password'"\r
              id="confirmPassword"\r
              formControlName="confirmPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('confirmPassword')"\r
              [placeholder]="translate('reset_password.confirm_new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('confirmPassword')"\r
              [attr.aria-label]="showConfirmPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <span class="toggle-text">{{ showConfirmPassword ? translate('login.hide') : translate('login.show') }}</span>\r
              <i class="toggle-icon" [class]="showConfirmPassword ? 'eye-off' : 'eye'"></i>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('confirmPassword')">\r
            {{ getFieldError('confirmPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button\r
            type="submit"\r
            class="btn btn-primary reset-btn"\r
            [disabled]="loading || !token || !email"\r
          >\r
            <span *ngIf="!loading">{{ translate('reset_password.reset_button') }}</span>\r
            <span *ngIf="loading">{{ translate('login.loading') }}</span>\r
          </button>\r
        </div>\r
\r
        <div class="form-footer">\r
          <a (click)="goToLogin()" class="back-to-login-link">\r
            {{ translate('reset_password.back_to_login') }}\r
          </a>\r
        </div>\r
\r
        <div class="success-message" *ngIf="successMessage">\r
          {{ successMessage }}\r
        </div>\r
\r
        <div class="error-message" *ngIf="errorMessage">\r
          {{ errorMessage }}\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
</div>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/auth/reset-password/reset-password.component.css */\n.reset-password-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl] .reset-password-layout {\n  flex-direction: row;\n}\n[dir=ltr] .reset-password-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #09365F;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #09365F;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #158638;\n  border-color: #158638;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 10px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #158638;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #09365F !important;\n  left: 1px !important;\n  transform: translateX(100%) !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: var(--color-main);\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #09365F !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option:hover:not(.active) {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-option:active {\n  transform: scale(0.98);\n}\n.globe-icon {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.reset-password-form {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr] .welcome-title {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr] .welcome-subtitle {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-subtitle {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr] .form-title h2 {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-title h2 {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr] .form-label {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-label {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.password-input-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  padding-right: 50px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr] .form-control {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-control {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--color-main);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.password-toggle {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.password-toggle:hover {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-text {\n  font-size: 12px;\n  color: var(--color-main);\n  font-weight: 500;\n}\n[dir=ltr] .toggle-text {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .toggle-text {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.toggle-icon {\n  width: 16px;\n  height: 16px;\n  color: var(--color-main);\n}\n[dir=rtl] .password-toggle {\n  right: auto;\n  left: 8px;\n}\n[dir=rtl] .form-control {\n  padding-right: 16px;\n  padding-left: 50px;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr] .form-error {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-error {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions {\n  margin-top: 24px;\n}\n.reset-btn {\n  width: 100%;\n  padding: 14px 24px;\n  background: var(--color-main);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr] .reset-btn {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .reset-btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn:hover:not(:disabled) {\n  background: var(--color-main-dark);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.reset-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link {\n  color: var(--color-main);\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr] .back-to-login-link {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .back-to-login-link {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link:hover {\n  color: var(--color-main-dark);\n  text-decoration: underline;\n}\n.success-message {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr] .success-message,\n[dir=ltr] .error-message {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .success-message,\n[dir=rtl] .error-message {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-password-side {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.92),\n      rgba(9, 54, 95, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl] .side-overlay {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .side-overlay {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand {\n  margin-bottom: 24px;\n}\n.brand-mark {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .reset-password-layout {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .reset-password-side {\n    display: none;\n  }\n  .reset-password-form {\n    padding: 0;\n  }\n  .form-container {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n:root {\n  --color-main: #158636;\n  --color-main-dark: #0f5f28;\n  --color-main-2: #1a1a1a;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=reset-password.component-TM2EJGJ5.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/components/auth/reset-password/reset-password.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/change-password/change-password.component.ts
function ChangePasswordComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("currentPassword"), " ");
  }
}
function ChangePasswordComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("newPassword"), " ");
  }
}
function ChangePasswordComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirmPassword"), " ");
  }
}
function ChangePasswordComponent_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("change_password"));
  }
}
function ChangePasswordComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("loading"));
  }
}
function ChangePasswordComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ChangePasswordComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  fb;
  authService;
  router;
  translationService;
  langService;
  changePasswordForm;
  showCurrentPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  loading = false;
  successMessage = "";
  errorMessage = "";
  constructor(fb, authService, router, translationService, langService) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.translationService = translationService;
    this.langService = langService;
    this.changePasswordForm = this.fb.group({
      currentPassword: ["", [Validators.required]],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/auth/login"]);
    }
  }
  passwordMatchValidator(form) {
    const newPassword = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { "passwordMismatch": true };
    }
    return null;
  }
  togglePasswordVisibility(field) {
    switch (field) {
      case "currentPassword":
        this.showCurrentPassword = !this.showCurrentPassword;
        break;
      case "newPassword":
        this.showNewPassword = !this.showNewPassword;
        break;
      case "confirmPassword":
        this.showConfirmPassword = !this.showConfirmPassword;
        break;
    }
  }
  onSubmit() {
    if (this.changePasswordForm.valid) {
      this.loading = true;
      this.errorMessage = "";
      this.successMessage = "";
      const request = {
        currentPassword: this.changePasswordForm.get("currentPassword")?.value,
        newPassword: this.changePasswordForm.get("newPassword")?.value,
        confirmPassword: this.changePasswordForm.get("confirmPassword")?.value
      };
      this.authService.changePassword(request).subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = this.translate("password_changed");
          this.changePasswordForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || "Failed to change password. Please try again.";
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.changePasswordForm.controls).forEach((key) => {
      const control = this.changePasswordForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.changePasswordForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors["required"]) {
        return this.translate(`${fieldName}_required`);
      }
      if (field.errors["minlength"]) {
        return this.translate("password_min_length");
      }
    }
    if (fieldName === "confirmPassword" && this.changePasswordForm.errors?.["passwordMismatch"]) {
      return this.translate("passwords_not_match");
    }
    return "";
  }
  goBack() {
    this.router.navigate(["/dashboard"]);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  toggleLanguage() {
    this.langService.toggleLanguage();
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: false, decls: 83, vars: 56, consts: [[1, "change-password-container"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "hero-section"], [1, "hero-content"], [1, "logo-container"], ["src", "/logo-white.png", "alt", "EcoOffice", 1, "hero-logo"], [1, "logo-text"], [1, "slogan"], [1, "hero-illustration"], [1, "form-section"], [1, "form-container"], [1, "form-header"], [1, "title"], [1, "subtitle"], [1, "change-password-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], [1, "password-input-container"], ["id", "currentPassword", "formControlName", "currentPassword", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "toggle-icon"], ["class", "form-error", 4, "ngIf"], ["id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "type", "placeholder"], ["id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type", "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "change-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5)(6, "clipPath", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span", 13);
      \u0275\u0275text(14, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 3)(16, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 14);
      \u0275\u0275element(18, "path", 15)(19, "path", 16)(20, "path", 17)(21, "path", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "div", 19);
      \u0275\u0275elementStart(25, "button", 20);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_25_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 22)(28, "div", 23);
      \u0275\u0275element(29, "img", 24);
      \u0275\u0275elementStart(30, "span", 25);
      \u0275\u0275text(31, "EcoOffice");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 26)(33, "p");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(35, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 28)(37, "div", 29)(38, "div", 30)(39, "h1", 31);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 32);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "form", 33);
      \u0275\u0275listener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_43_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(44, "div", 34)(45, "label", 35);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 36);
      \u0275\u0275element(48, "input", 37);
      \u0275\u0275elementStart(49, "button", 38);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_49_listener() {
        return ctx.togglePasswordVisibility("currentPassword");
      });
      \u0275\u0275elementStart(50, "span", 13);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, ChangePasswordComponent_div_53_Template, 2, 1, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 34)(55, "label", 35);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 36);
      \u0275\u0275element(58, "input", 41);
      \u0275\u0275elementStart(59, "button", 38);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_59_listener() {
        return ctx.togglePasswordVisibility("newPassword");
      });
      \u0275\u0275elementStart(60, "span", 13);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(63, ChangePasswordComponent_div_63_Template, 2, 1, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 34)(65, "label", 35);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 36);
      \u0275\u0275element(68, "input", 42);
      \u0275\u0275elementStart(69, "button", 38);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_69_listener() {
        return ctx.togglePasswordVisibility("confirmPassword");
      });
      \u0275\u0275elementStart(70, "span", 13);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(73, ChangePasswordComponent_div_73_Template, 2, 1, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 43)(75, "button", 44);
      \u0275\u0275template(76, ChangePasswordComponent_span_76_Template, 2, 1, "span", 45)(77, ChangePasswordComponent_span_77_Template, 2, 1, "span", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 46)(79, "a", 47);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_a_click_79_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(80);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(81, ChangePasswordComponent_div_81_Template, 2, 1, "div", 48)(82, ChangePasswordComponent_div_82_Template, 2, 1, "div", 49);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", !ctx.isRTL());
      \u0275\u0275advance(12);
      \u0275\u0275classProp("active", ctx.isRTL());
      \u0275\u0275advance(9);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.isRTL() ? "Switch to English" : "Switch to Arabic");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.translate("paperless_slogan"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translate("change_password"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("login_hint"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.changePasswordForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "currentPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("current_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("currentPassword"));
      \u0275\u0275property("type", ctx.showCurrentPassword ? "text" : "password")("placeholder", ctx.translate("current_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showCurrentPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showCurrentPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showCurrentPassword ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("currentPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "newPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("newPassword"));
      \u0275\u0275property("type", ctx.showNewPassword ? "text" : "password")("placeholder", ctx.translate("new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showNewPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showNewPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showNewPassword ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("newPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "confirmPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("confirm_new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("confirmPassword"));
      \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", ctx.translate("confirm_new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showConfirmPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showConfirmPassword ? ctx.translate("hide") : ctx.translate("show"));
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.showConfirmPassword ? "eye-off" : "eye");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("confirmPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("profile"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: [`

.change-password-container[_ngcontent-%COMP%] {
  display: flex;
  min-height: 100vh;
  background-color: #fff;
}
.language-toggle[_ngcontent-%COMP%] {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
}
.rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {
  right: auto;
  left: 24px;
}
.toggle-container[_ngcontent-%COMP%] {
  position: relative;
  width: 140px;
  height: 44px;
  background: #1B1D21;
  border-radius: 22px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #1B1D21;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.toggle-container[_ngcontent-%COMP%]:hover {
  background: #1B1D21;
  border-color: #1B1D21;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-container.rtl[_ngcontent-%COMP%] {
  background: #BFAB86;
  border-color: #BFAB86;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-container.ltr[_ngcontent-%COMP%] {
  background: #1B1D21;
  border-color: #1B1D21;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-option[_ngcontent-%COMP%] {
  position: absolute;
  top: 6px;
  width: calc(40% - 6px);
  height: calc(100% - 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 18px;
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: none;
}
.toggle-option[_ngcontent-%COMP%]:first-child {
  left: 10px;
}
.toggle-option[_ngcontent-%COMP%]:last-child {
  right: 10px;
}
.toggle-option.active[_ngcontent-%COMP%] {
  color: white;
}
.toggle-option.active.rtl[_ngcontent-%COMP%] {
  color: white;
  background: #BFAB86;
}
.toggle-slider.ltr[_ngcontent-%COMP%] {
  color: white;
  background: #1B1D21 !important;
}
.toggle-option[_ngcontent-%COMP%]:not(.active) {
  color: rgba(255, 255, 255, 0.6);
  display: none;
}
.flag-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.flag[_ngcontent-%COMP%] {
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}
.toggle-text[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  font-family: inherit;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}
.toggle-slider[_ngcontent-%COMP%] {
  position: absolute;
  top: 6px;
  left: 6px;
  width: calc(60% - 16px);
  height: calc(100% - 12px);
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.toggle-slider.rtl[_ngcontent-%COMP%] {
  transform: translateX(90%);
  background: #BFAB86;
}
.toggle-slider.ltr[_ngcontent-%COMP%] {
  transform: translateX(100%);
  background: #1B1D21 !important;
}
.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {
  opacity: 0;
  transform: scale(0.7);
  pointer-events: none;
}
.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {
  opacity: 1;
  transform: scale(1);
}
.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {
  opacity: 0.6;
  transform: scale(0.95);
}
.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {
  opacity: 1;
  transform: scale(1);
}
.toggle-button[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
}
.hero-section[_ngcontent-%COMP%] {
  flex: 0 0 45%;
  background:
    linear-gradient(
      135deg,
      #BFAB86 0%,
      #1B1D21 100%);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rtl[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%] {
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}
.hero-content[_ngcontent-%COMP%] {
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
}
.logo-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.hero-logo[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  margin-inline-end: 12px;
}
.logo-text[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: white;
}
.slogan[_ngcontent-%COMP%] {
  max-width: 320px;
  margin: 0 auto;
}
.slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: white;
}
.hero-illustration[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(/bg-side.png);
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 1;
}
.form-section[_ngcontent-%COMP%] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.form-container[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 400px;
}
.form-header[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 32px;
}
.title[_ngcontent-%COMP%] {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-main-2);
  margin-bottom: 8px;
}
.subtitle[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #666;
  margin: 0;
}
.change-password-form[_ngcontent-%COMP%] {
  width: 100%;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.form-label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-main-2);
  font-size: 14px;
}
.form-control[_ngcontent-%COMP%] {
  width: 100%;
  padding: 16px;
  border: 2px solid #e1e5e9;
  border-radius: var(--radius-lg);
  font-size: 16px;
  transition: border-color var(--t-fast);
  background-color: white;
}
.form-control[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #BFAB86;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.form-control.error[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.form-error[_ngcontent-%COMP%] {
  color: #dc3545;
  font-size: 14px;
  margin-top: 6px;
  font-weight: 500;
}
.password-input-container[_ngcontent-%COMP%] {
  position: relative;
}
.password-toggle[_ngcontent-%COMP%] {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color var(--t-fast);
}
.rtl[_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {
  right: auto;
  left: 16px;
}
.password-toggle[_ngcontent-%COMP%]:hover {
  background-color: #f5f5f5;
}
.toggle-text[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 500;
}
.toggle-icon[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}
.toggle-icon.eye[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}
.toggle-icon.eye-off[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'/%3E%3Cline x1='1' y1='1' x2='23' y2='23'/%3E%3C/svg%3E");
}
.form-actions[_ngcontent-%COMP%] {
  margin-bottom: 24px;
}
.change-btn[_ngcontent-%COMP%] {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  min-height: 56px;
}
.form-footer[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 24px;
}
.back-link[_ngcontent-%COMP%] {
  color: #1B1D21;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color var(--t-fast);
}
.back-link[_ngcontent-%COMP%]:hover {
  color: #BFAB86;
  text-decoration: underline;
}
.success-message[_ngcontent-%COMP%] {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
}
.error-message[_ngcontent-%COMP%] {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
}
@media (max-width: 1024px) {
  .hero-section[_ngcontent-%COMP%] {
    flex: 0 0 40%;
  }
  .form-section[_ngcontent-%COMP%] {
    padding: 32px 24px;
  }
}
@media (max-width: 768px) {
  .change-password-container[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .hero-section[_ngcontent-%COMP%] {
    flex: none;
    height: 200px;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  }
  .rtl[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%] {
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  }
  .form-section[_ngcontent-%COMP%] {
    flex: 1;
    padding: 24px 16px;
  }
  .form-container[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .title[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .language-toggle[_ngcontent-%COMP%] {
    top: 16px;
    right: 16px;
  }
  .rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {
    right: auto;
    left: 16px;
  }
  .toggle-container[_ngcontent-%COMP%] {
    width: 120px;
    height: 40px;
  }
  .toggle-text[_ngcontent-%COMP%] {
    font-size: 12px;
    letter-spacing: 0.3px;
  }
  .flag[_ngcontent-%COMP%] {
    width: 18px;
    height: 13px;
  }
}
@media (max-width: 480px) {
  .hero-section[_ngcontent-%COMP%] {
    height: 160px;
  }
  .form-section[_ngcontent-%COMP%] {
    padding: 20px 12px;
  }
  .title[_ngcontent-%COMP%] {
    font-size: 22px;
  }
  .slogan[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    font-size: 14px;
  }
}
/*# sourceMappingURL=change-password.component-FUKFCHVE.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: false, template: `<div class="change-password-container">\r
  <!-- Language Toggle -->\r
  <div class="language-toggle">\r
    <div class="toggle-container" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="toggle-option" [class.active]="!isRTL()">\r
        <div class="flag-container">\r
          <svg class="flag" viewBox="0 0 60 30" width="20" height="15">\r
            <clipPath id="uk-flag">\r
              <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>\r
            </clipPath>\r
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>\r
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>\r
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#uk-flag)"/>\r
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>\r
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>\r
          </svg>\r
        </div>\r
        <span class="toggle-text">EN</span>\r
      </div>\r
      <div class="toggle-option" [class.active]="isRTL()">\r
        <div class="flag-container">\r
          <svg class="flag" viewBox="0 0 640 480" width="20" height="15">\r
            <path fill="#00732f" d="M0 0h640v160H0z"/>\r
            <path fill="#fff" d="M0 160h640v160H0z"/>\r
            <path fill="#000" d="M0 320h640v160H0z"/>\r
            <path fill="#ff0000" d="M0 0h180v480H0z"/>\r
          </svg>\r
        </div>\r
        <span class="toggle-text">AR</span>\r
      </div>\r
      <div class="toggle-slider" [class.rtl]="isRTL()" [class.ltr]="!isRTL()"></div>\r
      <button class="toggle-button" (click)="toggleLanguage()" [attr.aria-label]="isRTL() ? 'Switch to English' : 'Switch to Arabic'"></button>\r
    </div>\r
  </div>\r
\r
  <!-- Hero Section -->\r
  <div class="hero-section">\r
    <div class="hero-content">\r
      <div class="logo-container">\r
        <img src="/logo-white.png" alt="EcoOffice" class="hero-logo">\r
        <span class="logo-text">EcoOffice</span>\r
      </div>\r
      <div class="slogan">\r
        <p>{{ translate('paperless_slogan') }}</p>\r
      </div>\r
    </div>\r
    <div class="hero-illustration"></div>\r
  </div>\r
\r
  <!-- Form Section -->\r
  <div class="form-section">\r
    <div class="form-container">\r
      <div class="form-header">\r
        <h1 class="title">{{ translate('change_password') }}</h1>\r
        <p class="subtitle">{{ translate('login_hint') }}</p>\r
      </div>\r
\r
      <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()" class="change-password-form">\r
        <div class="form-group">\r
          <label [for]="'currentPassword'" class="form-label">{{ translate('current_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showCurrentPassword ? 'text' : 'password'"\r
              id="currentPassword"\r
              formControlName="currentPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('currentPassword')"\r
              [placeholder]="translate('current_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('currentPassword')"\r
              [attr.aria-label]="showCurrentPassword ? translate('hide') : translate('show')"\r
            >\r
              <span class="toggle-text">{{ showCurrentPassword ? translate('hide') : translate('show') }}</span>\r
              <i class="toggle-icon" [class]="showCurrentPassword ? 'eye-off' : 'eye'"></i>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('currentPassword')">\r
            {{ getFieldError('currentPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'newPassword'" class="form-label">{{ translate('new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showNewPassword ? 'text' : 'password'"\r
              id="newPassword"\r
              formControlName="newPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('newPassword')"\r
              [placeholder]="translate('new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('newPassword')"\r
              [attr.aria-label]="showNewPassword ? translate('hide') : translate('show')"\r
            >\r
              <span class="toggle-text">{{ showNewPassword ? translate('hide') : translate('show') }}</span>\r
              <i class="toggle-icon" [class]="showNewPassword ? 'eye-off' : 'eye'"></i>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('newPassword')">\r
            {{ getFieldError('newPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'confirmPassword'" class="form-label">{{ translate('confirm_new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showConfirmPassword ? 'text' : 'password'"\r
              id="confirmPassword"\r
              formControlName="confirmPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('confirmPassword')"\r
              [placeholder]="translate('confirm_new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('confirmPassword')"\r
              [attr.aria-label]="showConfirmPassword ? translate('hide') : translate('show')"\r
            >\r
              <span class="toggle-text">{{ showConfirmPassword ? translate('hide') : translate('show') }}</span>\r
              <i class="toggle-icon" [class]="showConfirmPassword ? 'eye-off' : 'eye'"></i>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('confirmPassword')">\r
            {{ getFieldError('confirmPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button\r
            type="submit"\r
            class="btn btn-primary change-btn"\r
            [disabled]="loading"\r
          >\r
            <span *ngIf="!loading">{{ translate('change_password') }}</span>\r
            <span *ngIf="loading">{{ translate('loading') }}</span>\r
          </button>\r
        </div>\r
\r
        <div class="form-footer">\r
          <a (click)="goBack()" class="back-link">\r
            {{ translate('profile') }}\r
          </a>\r
        </div>\r
\r
        <div class="success-message" *ngIf="successMessage">\r
          {{ successMessage }}\r
        </div>\r
\r
        <div class="error-message" *ngIf="errorMessage">\r
          {{ errorMessage }}\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: [`/* src/app/components/auth/change-password/change-password.component.css */
.change-password-container {
  display: flex;
  min-height: 100vh;
  background-color: #fff;
}
.language-toggle {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 10;
}
.rtl .language-toggle {
  right: auto;
  left: 24px;
}
.toggle-container {
  position: relative;
  width: 140px;
  height: 44px;
  background: #1B1D21;
  border-radius: 22px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #1B1D21;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.toggle-container:hover {
  background: #1B1D21;
  border-color: #1B1D21;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-container.rtl {
  background: #BFAB86;
  border-color: #BFAB86;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-container.ltr {
  background: #1B1D21;
  border-color: #1B1D21;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.toggle-option {
  position: absolute;
  top: 6px;
  width: calc(40% - 6px);
  height: calc(100% - 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 18px;
  transition: all 0.3s ease;
  z-index: 2;
  pointer-events: none;
}
.toggle-option:first-child {
  left: 10px;
}
.toggle-option:last-child {
  right: 10px;
}
.toggle-option.active {
  color: white;
}
.toggle-option.active.rtl {
  color: white;
  background: #BFAB86;
}
.toggle-slider.ltr {
  color: white;
  background: #1B1D21 !important;
}
.toggle-option:not(.active) {
  color: rgba(255, 255, 255, 0.6);
  display: none;
}
.flag-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.flag {
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}
.toggle-text {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  font-family: inherit;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
}
.toggle-slider {
  position: absolute;
  top: 6px;
  left: 6px;
  width: calc(60% - 16px);
  height: calc(100% - 12px);
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.toggle-slider.rtl {
  transform: translateX(90%);
  background: #BFAB86;
}
.toggle-slider.ltr {
  transform: translateX(100%);
  background: #1B1D21 !important;
}
.toggle-option:not(.active) .flag-container {
  opacity: 0;
  transform: scale(0.7);
  pointer-events: none;
}
.toggle-option.active .flag-container {
  opacity: 1;
  transform: scale(1);
}
.toggle-option:not(.active) .toggle-text {
  opacity: 0.6;
  transform: scale(0.95);
}
.toggle-option.active .toggle-text {
  opacity: 1;
  transform: scale(1);
}
.toggle-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;
}
.hero-section {
  flex: 0 0 45%;
  background:
    linear-gradient(
      135deg,
      #BFAB86 0%,
      #1B1D21 100%);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rtl .hero-section {
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}
.hero-content {
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.hero-logo {
  width: 32px;
  height: 32px;
  margin-inline-end: 12px;
}
.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: white;
}
.slogan {
  max-width: 320px;
  margin: 0 auto;
}
.slogan p {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: white;
}
.hero-illustration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(/bg-side.png);
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  z-index: 1;
}
.form-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.form-container {
  width: 100%;
  max-width: 400px;
}
.form-header {
  text-align: center;
  margin-bottom: 32px;
}
.title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-main-2);
  margin-bottom: 8px;
}
.subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
}
.change-password-form {
  width: 100%;
}
.form-group {
  margin-bottom: 24px;
}
.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--color-main-2);
  font-size: 14px;
}
.form-control {
  width: 100%;
  padding: 16px;
  border: 2px solid #e1e5e9;
  border-radius: var(--radius-lg);
  font-size: 16px;
  transition: border-color var(--t-fast);
  background-color: white;
}
.form-control:focus {
  outline: none;
  border-color: #BFAB86;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.form-control.error {
  border-color: #dc3545;
}
.form-error {
  color: #dc3545;
  font-size: 14px;
  margin-top: 6px;
  font-weight: 500;
}
.password-input-container {
  position: relative;
}
.password-toggle {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color var(--t-fast);
}
.rtl .password-toggle {
  right: auto;
  left: 16px;
}
.password-toggle:hover {
  background-color: #f5f5f5;
}
.toggle-text {
  font-size: 12px;
  font-weight: 500;
}
.toggle-icon {
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}
.toggle-icon.eye {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
}
.toggle-icon.eye-off {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'/%3E%3Cline x1='1' y1='1' x2='23' y2='23'/%3E%3C/svg%3E");
}
.form-actions {
  margin-bottom: 24px;
}
.change-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  min-height: 56px;
}
.form-footer {
  text-align: center;
  margin-bottom: 24px;
}
.back-link {
  color: #1B1D21;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color var(--t-fast);
}
.back-link:hover {
  color: #BFAB86;
  text-decoration: underline;
}
.success-message {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
}
.error-message {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
}
@media (max-width: 1024px) {
  .hero-section {
    flex: 0 0 40%;
  }
  .form-section {
    padding: 32px 24px;
  }
}
@media (max-width: 768px) {
  .change-password-container {
    flex-direction: column;
  }
  .hero-section {
    flex: none;
    height: 200px;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  }
  .rtl .hero-section {
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  }
  .form-section {
    flex: 1;
    padding: 24px 16px;
  }
  .form-container {
    max-width: 100%;
  }
  .title {
    font-size: 24px;
  }
  .slogan p {
    font-size: 16px;
  }
  .language-toggle {
    top: 16px;
    right: 16px;
  }
  .rtl .language-toggle {
    right: auto;
    left: 16px;
  }
  .toggle-container {
    width: 120px;
    height: 40px;
  }
  .toggle-text {
    font-size: 12px;
    letter-spacing: 0.3px;
  }
  .flag {
    width: 18px;
    height: 13px;
  }
}
@media (max-width: 480px) {
  .hero-section {
    height: 160px;
  }
  .form-section {
    padding: 20px 12px;
  }
  .title {
    font-size: 22px;
  }
  .slogan p {
    font-size: 14px;
  }
}
/*# sourceMappingURL=change-password.component-FUKFCHVE.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/components/auth/change-password/change-password.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/auth-routing.module.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "request-reset", component: RequestResetComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "reset-password/:token", component: ResetPasswordComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LoginComponent,
        RequestResetComponent,
        ResetPasswordComponent,
        ChangePasswordComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AuthRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-TN77XYAH.js.map
