import {
  AuthService
} from "./chunk-PNMAZEJT.js";
import "./chunk-SG2HFLTC.js";
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
} from "./chunk-NCA4XVJW.js";
import "./chunk-6Z2ZBWA2.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  LangService,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
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
} from "./chunk-YBWKTZKF.js";
import "./chunk-XWLXMCJQ.js";

// src/app/components/auth/login/login.component.ts
function LoginComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function LoginComponent__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53)(2, "circle", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 55)(2, "path", 56)(3, "path", 57)(4, "line", 58);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("password"), " ");
  }
}
function LoginComponent_span_55_Template(rf, ctx) {
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
function LoginComponent_span_56_Template(rf, ctx) {
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
function LoginComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 70, vars: 37, consts: [[1, "login-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "login-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "login-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], [1, "password-input-container"], ["id", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], ["class", "eye-icon", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "login-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], ["routerLink", "/auth/request-reset", 1, "forgot-password-link"], ["class", "error-message", 4, "ngIf"], [1, "login-side"], [1, "side-overlay"], [1, "side-content"], [1, "brand"], ["src", "/logo-white.png", "alt", "EcoOffice", 1, "brand-mark"], [1, "side-title"], [1, "side-subtitle"], [1, "form-error"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "eye-icon"], ["d", "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M9.88 9.88a3 3 0 1 0 4.24 4.24"], ["d", "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"], ["d", "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"], ["x1", "2", "x2", "22", "y1", "2", "y2", "22"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7)(8, "clipPath", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 15);
      \u0275\u0275text(16, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17)(21, "path", 18)(22, "path", 19)(23, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 21);
      \u0275\u0275elementStart(27, "button", 22);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 23)(29, "div", 24)(30, "h1", 25);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 26);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "h2");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "form", 29);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(39, "div", 30)(40, "label", 31);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 32);
      \u0275\u0275template(43, LoginComponent_div_43_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 30)(45, "label", 31);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 34);
      \u0275\u0275element(48, "input", 35);
      \u0275\u0275elementStart(49, "button", 36);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_49_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275template(50, LoginComponent__svg_svg_50_Template, 3, 0, "svg", 37)(51, LoginComponent__svg_svg_51_Template, 5, 0, "svg", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(52, LoginComponent_div_52_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 38)(54, "button", 39);
      \u0275\u0275template(55, LoginComponent_span_55_Template, 2, 1, "span", 40)(56, LoginComponent_span_56_Template, 2, 1, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 41)(58, "a", 42);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, LoginComponent_div_60_Template, 2, 1, "div", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 44)(62, "div", 45)(63, "div", 46)(64, "div", 47);
      \u0275\u0275element(65, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h1", 49);
      \u0275\u0275text(67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 50);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.login-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  height: 100vh;\n  padding: 0;\n  position: relative;\n  background-color: #F2ECCE;\n  border-radius: 24px;\n  margin: 20px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .login-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 6px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.login-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 40px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  border-radius: 24px;\n  overflow: hidden;\n  margin: 0 30px;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #F2ECCE 0%,\n      #F2ECCE 50%,\n      #F2ECCE 100%);\n  background-size: cover;\n  background-position: center;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.side-overlay[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      rgba(0, 0, 0, 0.6) 100%);\n  border-radius: 24px;\n  z-index: 1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nbody.rtl[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \n.rtl[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      135deg,\n      #d4af5fa9 20%,\n      #18181836 100%),\n    url(/bg-side.png) !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \nbody.ltr[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%], \n.ltr[_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      -135deg,\n      #d4af5fa9 20%,\n      #18181836 100%),\n    url(/bg-side-en.png) !important;\n}\n.side-overlay[_ngcontent-%COMP%]:not([dir]) {\n  background-image:\n    linear-gradient(\n      135deg,\n      #eba51abd 20%,\n      #3a362777 100%),\n    url(/bg-side-en.png) !important;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  padding: clamp(20px, 4vw, 40px);\n  max-width: 780px;\n  width: 100%;\n  height: 100%;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.brand-mark[_ngcontent-%COMP%] {\n  max-height: clamp(60px, 8vw, 81px);\n  max-width: clamp(150px, 20vw, 207px);\n  display: block;\n  width: auto;\n  height: auto;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.side-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: clamp(32px, 4.5vw, 48px);\n  letter-spacing: -0.5px;\n  text-align: center;\n  color: white;\n  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  line-height: 1.6;\n  font-size: clamp(16px, 2vw, 20px);\n  opacity: 0.9;\n  max-width: 52ch;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 1280px) {\n  .login-side[_ngcontent-%COMP%] {\n    height: 780px;\n  }\n  .side-content[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex: 1;\n  border-radius: 24px;\n  padding: 20px;\n  margin: 0 10px;\n  height: calc(100vh - 40px);\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  width: 100%;\n  max-width: 480px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 2vw, 32px);\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 12px 0;\n  line-height: 1.2;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(16px, 1.4vw, 18px);\n  opacity: 0.7;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.form-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid #B68A35;\n  width: 100%;\n  max-width: 480px;\n  position: relative;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  font-size: 13px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 20px;\n  border: 2px solid #e8f0fe;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  min-height: 56px;\n  background-color: #fafbff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  background-color: white;\n  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.15);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 6px;\n}\n.password-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-input-container[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-main-2);\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  left: 16px;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--color-main);\n}\n.eye-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: translateX(-1) !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  min-height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.login-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.6s ease;\n}\n.login-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-100%, -100%);\n  transition: width 0.6s ease, height 0.6s ease;\n}\n.login-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #8B6B1F 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.login-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.login-btn[_ngcontent-%COMP%]:hover::after {\n  width: 300px;\n  height: 300px;\n}\n.login-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.login-btn[_ngcontent-%COMP%]:active::after {\n  width: 0;\n  height: 0;\n}\n.login-btn.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.8;\n}\n.login-btn.loading[_ngcontent-%COMP%]::before {\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.forgot-password-link[_ngcontent-%COMP%] {\n  color: var(--color-main-2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.forgot-password-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-main);\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 24px;\n  text-align: center;\n  font-size: 14px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .forgot-password-link[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .side-title[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .side-subtitle[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 1024px) {\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    height: 100vh;\n    margin: 10px;\n  }\n  .login-side[_ngcontent-%COMP%] {\n    height: 40vh;\n    min-height: 200px;\n    margin: 0;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    height: 60vh;\n    margin: 0;\n    padding: 10px;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n    border-top-right-radius: 24px !important;\n    border-bottom-right-radius: 24px !important;\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  [dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n    border-top-left-radius: 24px !important;\n    border-bottom-left-radius: 24px !important;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .top-header[_ngcontent-%COMP%] {\n    padding: 16px 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .side-content[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: transparent;\n    margin: 5px;\n    height: 100vh;\n  }\n  .login-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding-top: 80px;\n    flex: none;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    padding: 80px 20px 20px 20px;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 640px) {\n  .login-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n    height: 100vh;\n    margin: 5px;\n  }\n  .login-form[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    justify-self: center;\n    flex: none;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    padding: 80px 16px 20px 16px;\n    width: 95% !important;\n  }\n  .welcome-block[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n    width: 95% !important;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=login.component-5RFLFVQV.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: false, template: `<div class="login-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
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
`, styles: ['/* src/app/components/auth/login/login.component.css */\n:host {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.login-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  height: 100vh;\n  padding: 0;\n  position: relative;\n  background-color: #F2ECCE;\n  border-radius: 24px;\n  margin: 20px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n[dir=rtl] .login-layout {\n  flex-direction: row;\n}\n[dir=ltr] .login-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 6px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.login-side {\n  position: relative;\n  height: calc(100vh - 40px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  border-radius: 24px;\n  overflow: hidden;\n  margin: 0 30px;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #F2ECCE 0%,\n      #F2ECCE 50%,\n      #F2ECCE 100%);\n  background-size: cover;\n  background-position: center;\n  border-radius: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.side-overlay::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.4) 0%,\n      rgba(0, 0, 0, 0.2) 50%,\n      rgba(0, 0, 0, 0.6) 100%);\n  border-radius: 24px;\n  z-index: 1;\n}\n[dir=rtl] .side-overlay,\nhtml[dir=rtl] .side-overlay,\nbody.rtl .side-overlay,\n.rtl .side-overlay {\n  background-image:\n    linear-gradient(\n      135deg,\n      #d4af5fa9 20%,\n      #18181836 100%),\n    url(/bg-side.png) !important;\n}\n[dir=ltr] .side-overlay,\nhtml[dir=ltr] .side-overlay,\nbody.ltr .side-overlay,\n.ltr .side-overlay {\n  background-image:\n    linear-gradient(\n      -135deg,\n      #d4af5fa9 20%,\n      #18181836 100%),\n    url(/bg-side-en.png) !important;\n}\n.side-overlay:not([dir]) {\n  background-image:\n    linear-gradient(\n      135deg,\n      #eba51abd 20%,\n      #3a362777 100%),\n    url(/bg-side-en.png) !important;\n}\n.side-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  padding: clamp(20px, 4vw, 40px);\n  max-width: 780px;\n  width: 100%;\n  height: 100%;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: white;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.brand-mark {\n  max-height: clamp(60px, 8vw, 81px);\n  max-width: clamp(150px, 20vw, 207px);\n  display: block;\n  width: auto;\n  height: auto;\n}\n.brand-name {\n  font-weight: 600;\n  font-size: 16px;\n}\n.side-title {\n  margin: 0;\n  font-weight: 700;\n  line-height: 1.2;\n  font-size: clamp(32px, 4.5vw, 48px);\n  letter-spacing: -0.5px;\n  text-align: center;\n  color: white;\n  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n}\n.side-subtitle {\n  margin: 0;\n  font-weight: 400;\n  line-height: 1.6;\n  font-size: clamp(16px, 2vw, 20px);\n  opacity: 0.9;\n  max-width: 52ch;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.9);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n@media (min-width: 1280px) {\n  .login-side {\n    height: 780px;\n  }\n  .side-content {\n    gap: 10px;\n  }\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex: 1;\n  border-radius: 24px;\n  padding: 20px;\n  margin: 0 10px;\n  height: calc(100vh - 40px);\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n.welcome-block {\n  text-align: center;\n  margin-bottom: 32px;\n  width: 100%;\n  max-width: 480px;\n}\n.welcome-title {\n  font-size: clamp(24px, 2vw, 32px);\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 12px 0;\n  line-height: 1.2;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.welcome-subtitle {\n  font-size: clamp(16px, 1.4vw, 18px);\n  opacity: 0.7;\n  color: #4a5568;\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 500;\n}\n.form-container {\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid #B68A35;\n  width: 100%;\n  max-width: 480px;\n  position: relative;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  font-size: 13px;\n}\n.form-control {\n  width: 100%;\n  padding: 16px 20px;\n  border: 2px solid #e8f0fe;\n  border-radius: 12px;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  min-height: 56px;\n  background-color: #fafbff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  background-color: white;\n  box-shadow: 0 4px 16px rgba(74, 144, 226, 0.15);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 13px;\n  margin-top: 6px;\n}\n.password-input-container {\n  position: relative;\n}\n[dir=rtl] .password-input-container {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--color-main-2);\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr] .password-toggle {\n  right: 16px;\n}\n[dir=rtl] .password-toggle {\n  left: 16px;\n}\n.password-toggle:hover {\n  color: var(--color-main);\n}\n.eye-icon {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl] .eye-icon {\n  transform: translateX(-1) !important;\n}\n[dir=ltr] .eye-icon {\n  transform: scaleX(1);\n}\n.form-actions {\n  margin-top: 24px;\n}\n.login-btn {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  min-height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.login-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.6s ease;\n}\n.login-btn::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-100%, -100%);\n  transition: width 0.6s ease, height 0.6s ease;\n}\n.login-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #8B6B1F 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.login-btn:hover::before {\n  left: 100%;\n}\n.login-btn:hover::after {\n  width: 300px;\n  height: 300px;\n}\n.login-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.login-btn:active::after {\n  width: 0;\n  height: 0;\n}\n.login-btn.loading {\n  pointer-events: none;\n  opacity: 0.8;\n}\n.login-btn.loading::before {\n  animation: shimmer 1.5s infinite;\n}\n@keyframes shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.forgot-password-link {\n  color: var(--color-main-2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n}\n.forgot-password-link:hover {\n  color: var(--color-main);\n}\n.error-message {\n  background-color: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  margin-top: 24px;\n  text-align: center;\n  font-size: 14px;\n}\n[dir=ltr] .welcome-title,\n[dir=ltr] .welcome-subtitle,\n[dir=ltr] .form-title h2,\n[dir=ltr] .form-label,\n[dir=ltr] .form-control,\n[dir=ltr] .login-btn,\n[dir=ltr] .forgot-password-link {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl] .welcome-title,\n[dir=rtl] .welcome-subtitle,\n[dir=rtl] .form-title h2,\n[dir=rtl] .form-label,\n[dir=rtl] .form-control,\n[dir=rtl] .login-btn,\n[dir=rtl] .forgot-password-link,\n[dir=rtl] .side-title,\n[dir=rtl] .side-subtitle,\n[dir=rtl] .brand-name {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 1024px) {\n  .login-layout {\n    flex-direction: column;\n    gap: 20px;\n    height: 100vh;\n    margin: 10px;\n  }\n  .login-side {\n    height: 40vh;\n    min-height: 200px;\n    margin: 0;\n  }\n  .login-form {\n    height: 60vh;\n    margin: 0;\n    padding: 10px;\n  }\n  [dir=rtl] .side-overlay {\n    border-top-right-radius: 24px !important;\n    border-bottom-right-radius: 24px !important;\n    border-top-left-radius: 0 !important;\n    border-bottom-left-radius: 0 !important;\n  }\n  [dir=ltr] .side-overlay {\n    border-top-left-radius: 24px !important;\n    border-bottom-left-radius: 24px !important;\n    border-top-right-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n  .welcome-block {\n    margin-bottom: 20px;\n  }\n  .form-container {\n    padding: 24px 20px;\n  }\n  .welcome-title {\n    font-size: 22px;\n  }\n}\n@media (max-width: 768px) {\n  .top-header {\n    padding: 16px 20px;\n  }\n  .form-container {\n    width: 95% !important;\n  }\n  .eco-logo {\n    width: 28px;\n    height: 28px;\n  }\n  .login-form {\n    width: 95% !important;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .side-content {\n    padding: 0 24px;\n  }\n  .form-container {\n    padding: 24px 20px;\n  }\n  .welcome-title {\n    font-size: 20px;\n  }\n  .form-title h2 {\n    font-size: 18px;\n  }\n  .login-layout {\n    padding: 0;\n    background-color: transparent;\n    margin: 5px;\n    height: 100vh;\n  }\n  .login-side {\n    display: none;\n  }\n  .login-layout {\n    flex-direction: column;\n    gap: 0;\n  }\n  .login-form {\n    justify-content: flex-start;\n    padding-top: 80px;\n    flex: none;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    padding: 80px 20px 20px 20px;\n  }\n  .welcome-block {\n    margin-bottom: 20px;\n  }\n  .form-container {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 640px) {\n  .login-side {\n    display: none;\n  }\n  .login-form {\n    width: 95% !important;\n  }\n  .form-container {\n    width: 95% !important;\n  }\n  .login-layout {\n    flex-direction: column;\n    gap: 0;\n    height: 100vh;\n    margin: 5px;\n  }\n  .login-form {\n    justify-content: flex-start;\n    justify-self: center;\n    flex: none;\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    padding: 80px 16px 20px 16px;\n    width: 95% !important;\n  }\n  .welcome-block {\n    margin-bottom: 20px;\n  }\n  .form-container {\n    padding: 20px 16px;\n    width: 95% !important;\n  }\n  .top-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=login.component-5RFLFVQV.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/auth/login/login.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/request-reset/request-reset.component.ts
function RequestResetComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function RequestResetComponent_span_46_Template(rf, ctx) {
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
function RequestResetComponent_span_47_Template(rf, ctx) {
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
function RequestResetComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestResetComponent, selectors: [["app-request-reset"]], standalone: false, decls: 53, vars: 26, consts: [[1, "request-reset-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "request-reset-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "request-reset-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "reset-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-to-login-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function RequestResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7)(8, "clipPath", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 15);
      \u0275\u0275text(16, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17)(21, "path", 18)(22, "path", 19)(23, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 21);
      \u0275\u0275elementStart(27, "button", 22);
      \u0275\u0275listener("click", function RequestResetComponent_Template_button_click_27_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 23)(29, "div", 24)(30, "h1", 25);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 26);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "h2");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "form", 29);
      \u0275\u0275listener("ngSubmit", function RequestResetComponent_Template_form_ngSubmit_38_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(39, "div", 30)(40, "label", 31);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 32);
      \u0275\u0275template(43, RequestResetComponent_div_43_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 34)(45, "button", 35);
      \u0275\u0275template(46, RequestResetComponent_span_46_Template, 2, 1, "span", 36)(47, RequestResetComponent_span_47_Template, 2, 1, "span", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 37)(49, "a", 38);
      \u0275\u0275listener("click", function RequestResetComponent_Template_a_click_49_listener() {
        return ctx.goToLogin();
      });
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, RequestResetComponent_div_51_Template, 2, 1, "div", 39)(52, RequestResetComponent_div_52_Template, 2, 1, "div", 40);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n\n\n.request-reset-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .request-reset-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .request-reset-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #1B1D21;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 10px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.toggle-option[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.globe-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.request-reset-form[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.reset-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link[_ngcontent-%COMP%] {\n  color: #B68A35;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link[_ngcontent-%COMP%]:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.request-reset-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.92),\n      rgba(27, 29, 33, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .request-reset-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .request-reset-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-main: #B68A35;\n  --color-main-dark: #B68A35;\n  --color-main-2: #1B1D21;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=request-reset.component-HBZ3ASIA.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestResetComponent, [{
    type: Component,
    args: [{ selector: "app-request-reset", standalone: false, template: `<div class="request-reset-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
      \r
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
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/auth/request-reset/request-reset.component.css */\n.request-reset-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl] .request-reset-layout {\n  flex-direction: row;\n}\n[dir=ltr] .request-reset-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #1B1D21;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #1B1D21;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 10px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option:hover:not(.active) {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.toggle-option:active {\n  transform: scale(0.98);\n}\n.globe-icon {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.request-reset-form {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr] .welcome-title {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr] .welcome-subtitle {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-subtitle {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr] .form-title h2 {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-title h2 {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr] .form-label {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-label {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr] .form-control {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-control {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr] .form-error {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-error {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions {\n  margin-top: 24px;\n}\n.reset-btn {\n  width: 100%;\n  padding: 14px 24px;\n  background: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr] .reset-btn {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .reset-btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.reset-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link {\n  color: #B68A35;\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr] .back-to-login-link {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .back-to-login-link {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr] .success-message,\n[dir=ltr] .error-message {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .success-message,\n[dir=rtl] .error-message {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.request-reset-side {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(212, 170, 58, 0.92),\n      rgba(27, 29, 33, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl] .side-overlay {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .side-overlay {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand {\n  margin-bottom: 24px;\n}\n.brand-mark {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .request-reset-layout {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .request-reset-form {\n    padding: 0;\n  }\n  .form-container {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n:root {\n  --color-main: #B68A35;\n  --color-main-dark: #B68A35;\n  --color-main-2: #1B1D21;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=request-reset.component-HBZ3ASIA.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestResetComponent, { className: "RequestResetComponent", filePath: "src/app/components/auth/request-reset/request-reset.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/reset-password/reset-password.component.ts
function ResetPasswordComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("newPassword"), " ");
  }
}
function ResetPasswordComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirmPassword"), " ");
  }
}
function ResetPasswordComponent_span_61_Template(rf, ctx) {
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
function ResetPasswordComponent_span_62_Template(rf, ctx) {
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
function ResetPasswordComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
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
    this.route.queryParams.subscribe((params) => {
      this.email = params["email"] || "";
      this.token = params["code"] || params["token"] || "";
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
        password: this.resetForm.get("newPassword")?.value
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: false, decls: 68, vars: 46, consts: [[1, "reset-password-layout", 3, "dir"], [1, "top-header"], [1, "top-logo"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "reset-password-form"], [1, "welcome-block"], [1, "welcome-title"], [1, "welcome-subtitle"], [1, "form-container"], [1, "form-title"], [1, "reset-password-form-content", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], [1, "password-input-container"], ["id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "toggle-icon"], ["class", "form-error", 4, "ngIf"], ["id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type", "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "reset-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-to-login-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7)(8, "clipPath", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span", 15);
      \u0275\u0275text(16, "EN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 16);
      \u0275\u0275element(20, "path", 17)(21, "path", 18)(22, "path", 19)(23, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25, "AR");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "div", 21);
      \u0275\u0275elementStart(27, "button", 22);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_27_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 23)(29, "div", 24)(30, "h1", 25);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 26);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "h2");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "form", 29);
      \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_38_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(39, "div", 30)(40, "label", 31);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 32);
      \u0275\u0275element(43, "input", 33);
      \u0275\u0275elementStart(44, "button", 34);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_44_listener() {
        return ctx.togglePasswordVisibility("newPassword");
      });
      \u0275\u0275elementStart(45, "span", 15);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(48, ResetPasswordComponent_div_48_Template, 2, 1, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 30)(50, "label", 31);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 32);
      \u0275\u0275element(53, "input", 37);
      \u0275\u0275elementStart(54, "button", 34);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_button_click_54_listener() {
        return ctx.togglePasswordVisibility("confirmPassword");
      });
      \u0275\u0275elementStart(55, "span", 15);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, ResetPasswordComponent_div_58_Template, 2, 1, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 38)(60, "button", 39);
      \u0275\u0275template(61, ResetPasswordComponent_span_61_Template, 2, 1, "span", 40)(62, ResetPasswordComponent_span_62_Template, 2, 1, "span", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 41)(64, "a", 42);
      \u0275\u0275listener("click", function ResetPasswordComponent_Template_a_click_64_listener() {
        return ctx.goToLogin();
      });
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(66, ResetPasswordComponent_div_66_Template, 2, 1, "div", 43)(67, ResetPasswordComponent_div_67_Template, 2, 1, "div", 44);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n\n\n.reset-password-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-password-layout[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-password-layout[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .top-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.top-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.eco-logo[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #09365F;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #09365F;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #b08333;\n  border-color: #b08333;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 10px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #158638;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #09365F !important;\n  left: 1px !important;\n  transform: translateX(100%) !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: var(--color-main);\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #09365F !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option[_ngcontent-%COMP%]:hover:not(.active) {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-option[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.globe-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.reset-password-form[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .welcome-subtitle[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.password-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  padding-right: 50px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-main);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-main);\n  font-weight: 500;\n}\n[dir=ltr][_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: var(--color-main);\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  padding-left: 50px;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.reset-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 24px;\n  background: var(--color-main);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-main);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(221, 164, 9, 0.3);\n}\n.reset-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link[_ngcontent-%COMP%] {\n  color: var(--color-main);\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .back-to-login-link[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-main-dark);\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-password-side[_ngcontent-%COMP%] {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.92),\n      rgba(9, 54, 95, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr][_ngcontent-%COMP%]   .side-overlay[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.brand-mark[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title[_ngcontent-%COMP%] {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .reset-password-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .reset-password-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reset-password-form[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --color-main: #158636;\n  --color-main-dark: #0f5f28;\n  --color-main-2: #1a1a1a;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=reset-password.component-YIUMWFZ2.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", standalone: false, template: `<div class="reset-password-layout" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Top Header with Logo and Language Toggle -->\r
  <div class="top-header">\r
    <div class="top-logo">\r
      \r
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
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/auth/reset-password/reset-password.component.css */\n.reset-password-layout {\n  display: flex;\n  flex-direction: row;\n  gap: clamp(24px, 3vw, 48px);\n  align-items: center;\n  min-height: 100vh;\n  padding-block: clamp(24px, 5vh, 60px);\n  position: relative;\n}\n[dir=rtl] .reset-password-layout {\n  flex-direction: row;\n}\n[dir=ltr] .reset-password-layout {\n  flex-direction: row-reverse;\n}\n.top-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n}\n[dir=rtl] .top-header {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .top-header {\n  flex-direction: row;\n}\n.top-logo {\n  display: flex;\n  align-items: center;\n}\n.eco-logo {\n  width: 48px;\n  height: 48px;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n}\n.toggle-container {\n  position: relative;\n  width: 140px;\n  height: 44px;\n  background: #09365F;\n  border-radius: 22px;\n  padding: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid #09365F;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container:hover {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.rtl {\n  background: #b08333;\n  border-color: #b08333;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #09365F;\n  border-color: #09365F;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 10px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #158638;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #09365F !important;\n  left: 1px !important;\n  transform: translateX(100%) !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: var(--color-main);\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #09365F !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.toggle-option:hover:not(.active) {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-option:active {\n  transform: scale(0.98);\n}\n.globe-icon {\n  width: 16px;\n  height: 16px;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.toggle-container:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-1px);\n}\n.toggle-container:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.reset-password-form {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 clamp(24px, 5vw, 80px);\n  position: relative;\n}\n.welcome-block {\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.welcome-title {\n  font-size: clamp(24px, 4vw, 32px);\n  font-weight: 700;\n  color: var(--color-main-2);\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n[dir=ltr] .welcome-title {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.welcome-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  color: var(--color-text-secondary);\n  margin: 0;\n  line-height: 1.5;\n}\n[dir=ltr] .welcome-subtitle {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .welcome-subtitle {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-container {\n  width: 100%;\n  max-width: 400px;\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(225, 229, 233, 0.5);\n}\n.form-title {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.form-title h2 {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-main-2);\n  margin: 0;\n}\n[dir=ltr] .form-title h2 {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-title h2 {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-main-2);\n  margin-bottom: 8px;\n}\n[dir=ltr] .form-label {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-label {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.password-input-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-control {\n  width: 100%;\n  padding: 12px 16px;\n  padding-right: 50px;\n  border: 2px solid #e1e5e9;\n  border-radius: 8px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  box-sizing: border-box;\n}\n[dir=ltr] .form-control {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-control {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--color-main);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.password-toggle {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.password-toggle:hover {\n  background-color: rgba(21, 134, 56, 0.1);\n}\n.toggle-text {\n  font-size: 12px;\n  color: var(--color-main);\n  font-weight: 500;\n}\n[dir=ltr] .toggle-text {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .toggle-text {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.toggle-icon {\n  width: 16px;\n  height: 16px;\n  color: var(--color-main);\n}\n[dir=rtl] .password-toggle {\n  right: auto;\n  left: 8px;\n}\n[dir=rtl] .form-control {\n  padding-right: 16px;\n  padding-left: 50px;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 12px;\n  margin-top: 4px;\n}\n[dir=ltr] .form-error {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .form-error {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.form-actions {\n  margin-top: 24px;\n}\n.reset-btn {\n  width: 100%;\n  padding: 14px 24px;\n  background: var(--color-main);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n[dir=ltr] .reset-btn {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .reset-btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-btn:hover:not(:disabled) {\n  background: var(--color-main);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(221, 164, 9, 0.3);\n}\n.reset-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-footer {\n  text-align: center;\n  margin-top: 20px;\n}\n.back-to-login-link {\n  color: var(--color-main);\n  text-decoration: none;\n  font-size: 14px;\n  cursor: pointer;\n  transition: color 0.3s ease;\n}\n[dir=ltr] .back-to-login-link {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .back-to-login-link {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.back-to-login-link:hover {\n  color: var(--color-main-dark);\n  text-decoration: underline;\n}\n.success-message {\n  background: #d4edda;\n  color: #155724;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n.error-message {\n  background: #f8d7da;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  text-align: center;\n}\n[dir=ltr] .success-message,\n[dir=ltr] .error-message {\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .success-message,\n[dir=rtl] .error-message {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.reset-password-side {\n  position: relative;\n  height: clamp(600px, 60vh, 870px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.side-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.92),\n      rgba(9, 54, 95, 0.88)),\n    url(/bg-side.png);\n  background-size: cover;\n  background-position: center;\n  border-radius: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n[dir=rtl] .side-overlay {\n  border-top-right-radius: 24px;\n  border-bottom-right-radius: 24px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n[dir=ltr] .side-overlay {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.side-content {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: white;\n  padding: 40px;\n}\n.brand {\n  margin-bottom: 24px;\n}\n.brand-mark {\n  width: 80px;\n  height: 80px;\n  filter: brightness(0) invert(1);\n}\n.side-title {\n  font-size: clamp(20px, 3vw, 28px);\n  font-weight: 700;\n  margin: 0 0 16px 0;\n  line-height: 1.3;\n}\n.side-subtitle {\n  font-size: clamp(14px, 2vw, 16px);\n  margin: 0;\n  line-height: 1.6;\n  opacity: 0.9;\n}\n@media (max-width: 768px) {\n  .reset-password-layout {\n    flex-direction: column;\n    gap: 24px;\n    padding: 20px;\n  }\n  .top-header {\n    position: relative;\n    padding: 16px;\n  }\n  .eco-logo {\n    width: 32px;\n    height: 32px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .reset-password-side {\n    display: none;\n  }\n  .reset-password-form {\n    padding: 0;\n  }\n  .form-container {\n    padding: 24px;\n    margin: 0 16px;\n  }\n}\n:root {\n  --color-main: #158636;\n  --color-main-dark: #0f5f28;\n  --color-main-2: #1a1a1a;\n  --color-text-secondary: #666;\n}\n/*# sourceMappingURL=reset-password.component-YIUMWFZ2.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: AuthService }, { type: Router }, { type: ActivatedRoute }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/components/auth/reset-password/reset-password.component.ts", lineNumber: 14 });
})();

// src/app/components/auth/change-password/change-password.component.ts
function ChangePasswordComponent__svg_svg_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "circle", 45);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent__svg_svg_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 46)(2, "path", 47)(3, "path", 48)(4, "line", 49);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_42_Template(rf, ctx) {
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
function ChangePasswordComponent__svg_svg_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "circle", 45);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 46)(2, "path", 47)(3, "path", 48)(4, "line", 49);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_51_Template(rf, ctx) {
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
function ChangePasswordComponent__svg_svg_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "circle", 45);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent__svg_svg_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 46)(2, "path", 47)(3, "path", 48)(4, "line", 49);
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("confirmNewPassword"), " ");
  }
}
function ChangePasswordComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("login.change_password"));
  }
}
function ChangePasswordComponent_span_64_Template(rf, ctx) {
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
function ChangePasswordComponent_div_68_Template(rf, ctx) {
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
function ChangePasswordComponent_div_69_Template(rf, ctx) {
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
  showconfirmNewPassword = false;
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
      confirmNewPassword: ["", [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }
  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/auth/login"]);
    }
  }
  passwordMatchValidator(form) {
    const newPassword = form.get("newPassword");
    const confirmNewPassword = form.get("confirmNewPassword");
    if (newPassword && confirmNewPassword && newPassword.value !== confirmNewPassword.value) {
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
      case "confirmNewPassword":
        this.showconfirmNewPassword = !this.showconfirmNewPassword;
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
        confirmNewPassword: this.changePasswordForm.get("confirmNewPassword")?.value
      };
      this.authService.changePassword(request).subscribe({
        next: (response) => {
          this.loading = false;
          this.successMessage = this.translate("login.password_changed");
          this.changePasswordForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || this.translate("login.change_password_failed");
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
        return this.translate(`login.${fieldName}_required`);
      }
      if (field.errors["minlength"]) {
        return this.translate("login.password_min_length");
      }
    }
    if (fieldName === "confirmNewPassword" && this.changePasswordForm.errors?.["passwordMismatch"]) {
      return this.translate("login.passwords_not_match");
    }
    return "";
  }
  goBack() {
    this.router.navigate(["/profile"]);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], standalone: false, decls: 70, vars: 53, consts: [[1, "change-password-container", 3, "dir"], [1, "language-toggle"], [1, "toggle-container"], [1, "toggle-option"], [1, "flag-container"], ["viewBox", "0 0 60 30", "width", "20", "height", "15", 1, "flag"], ["id", "uk-flag"], ["d", "M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"], ["d", "M0,0 v30 h60 v-30 z", "fill", "#012169"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#fff", "stroke-width", "6"], ["d", "M0,0 L60,30 M60,0 L0,30", "stroke", "#C8102E", "stroke-width", "4", "clip-path", "url(#uk-flag)"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#fff", "stroke-width", "10"], ["d", "M30,0 v30 M0,15 h60", "stroke", "#C8102E", "stroke-width", "6"], [1, "toggle-text"], ["viewBox", "0 0 640 480", "width", "20", "height", "15", 1, "flag"], ["fill", "#00732f", "d", "M0 0h640v160H0z"], ["fill", "#fff", "d", "M0 160h640v160H0z"], ["fill", "#000", "d", "M0 320h640v160H0z"], ["fill", "#ff0000", "d", "M0 0h180v480H0z"], [1, "toggle-slider"], [1, "toggle-button", 3, "click"], [1, "form-section"], [1, "form-container"], [1, "form-header"], [1, "title"], [1, "subtitle"], [1, "change-password-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label", 3, "for"], [1, "password-input-container"], ["id", "currentPassword", "formControlName", "currentPassword", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle", 3, "click"], ["class", "eye-icon", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "form-error", 4, "ngIf"], ["id", "newPassword", "formControlName", "newPassword", 1, "form-control", 3, "type", "placeholder"], ["id", "confirmNewPassword", "formControlName", "confirmNewPassword", 1, "form-control", 3, "type", "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "change-btn", 3, "disabled"], [4, "ngIf"], [1, "form-footer"], [1, "back-link", 3, "click"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "eye-icon"], ["d", "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M9.88 9.88a3 3 0 1 0 4.24 4.24"], ["d", "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"], ["d", "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"], ["x1", "2", "x2", "22", "y1", "2", "y2", "22"], [1, "form-error"], [1, "success-message"], [1, "error-message"]], template: function ChangePasswordComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(26, "div", 21)(27, "div", 22)(28, "div", 23)(29, "h1", 24);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 25);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "form", 26);
      \u0275\u0275listener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_33_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(34, "div", 27)(35, "label", 28);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 29);
      \u0275\u0275element(38, "input", 30);
      \u0275\u0275elementStart(39, "button", 31);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_39_listener() {
        return ctx.togglePasswordVisibility("currentPassword");
      });
      \u0275\u0275template(40, ChangePasswordComponent__svg_svg_40_Template, 3, 0, "svg", 32)(41, ChangePasswordComponent__svg_svg_41_Template, 5, 0, "svg", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, ChangePasswordComponent_div_42_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 27)(44, "label", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 29);
      \u0275\u0275element(47, "input", 34);
      \u0275\u0275elementStart(48, "button", 31);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_48_listener() {
        return ctx.togglePasswordVisibility("newPassword");
      });
      \u0275\u0275template(49, ChangePasswordComponent__svg_svg_49_Template, 3, 0, "svg", 32)(50, ChangePasswordComponent__svg_svg_50_Template, 5, 0, "svg", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(51, ChangePasswordComponent_div_51_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 27)(53, "label", 28);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 29);
      \u0275\u0275element(56, "input", 35);
      \u0275\u0275elementStart(57, "button", 31);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_button_click_57_listener() {
        return ctx.togglePasswordVisibility("confirmNewPassword");
      });
      \u0275\u0275template(58, ChangePasswordComponent__svg_svg_58_Template, 3, 0, "svg", 32)(59, ChangePasswordComponent__svg_svg_59_Template, 5, 0, "svg", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, ChangePasswordComponent_div_60_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 36)(62, "button", 37);
      \u0275\u0275template(63, ChangePasswordComponent_span_63_Template, 2, 1, "span", 38)(64, ChangePasswordComponent_span_64_Template, 2, 1, "span", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 39)(66, "a", 40);
      \u0275\u0275listener("click", function ChangePasswordComponent_Template_a_click_66_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(67);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, ChangePasswordComponent_div_68_Template, 2, 1, "div", 41)(69, ChangePasswordComponent_div_69_Template, 2, 1, "div", 42);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
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
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("login.change_password"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("login.changepass_hint"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.changePasswordForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "currentPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("login.current_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("currentPassword"));
      \u0275\u0275property("type", ctx.showCurrentPassword ? "text" : "password")("placeholder", ctx.translate("login.current_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showCurrentPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showCurrentPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCurrentPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("currentPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "newPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("login.new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("newPassword"));
      \u0275\u0275property("type", ctx.showNewPassword ? "text" : "password")("placeholder", ctx.translate("login.new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showNewPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showNewPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNewPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("newPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("for", "confirmNewPassword");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("login.confirm_new_password"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("error", ctx.getFieldError("confirmNewPassword"));
      \u0275\u0275property("type", ctx.showconfirmNewPassword ? "text" : "password")("placeholder", ctx.translate("login.confirm_new_password"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showconfirmNewPassword ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showconfirmNewPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showconfirmNewPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("confirmNewPassword"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("login.profile"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.change-password-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #F2ECCE;\n  position: relative;\n  padding: 20px;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  z-index: 100;\n}\n[dir=rtl][_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 24px;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container.rtl[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option[_ngcontent-%COMP%]:first-child {\n  left: 10px;\n}\n.toggle-option[_ngcontent-%COMP%]:last-child {\n  right: 6px;\n}\n.toggle-option.active[_ngcontent-%COMP%] {\n  color: white;\n}\n.toggle-option.active.rtl[_ngcontent-%COMP%] {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl[_ngcontent-%COMP%] {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .flag-container[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active[_ngcontent-%COMP%]   .flag-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option[_ngcontent-%COMP%]:not(.active)   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active[_ngcontent-%COMP%]   .toggle-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.form-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid #B68A35;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 8px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 500;\n}\n.change-password-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #1B1D21;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  background-color: #fafbff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  min-height: 56px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  background-color: white;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 14px;\n  margin-top: 6px;\n  font-weight: 500;\n}\n.password-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-input-container[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .password-toggle[_ngcontent-%COMP%] {\n  left: 16px;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: #B68A35;\n}\n.eye-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: translateX(-1) !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.change-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  min-height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.change-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.6s ease;\n}\n.change-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-100%, -100%);\n  transition: width 0.6s ease, height 0.6s ease;\n}\n.change-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #8B6B1F 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.change-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.change-btn[_ngcontent-%COMP%]:hover::after {\n  width: 300px;\n  height: 300px;\n}\n.change-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.change-btn[_ngcontent-%COMP%]:active::after {\n  width: 0;\n  height: 0;\n}\n.change-btn[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.change-btn.loading[_ngcontent-%COMP%]::before {\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.form-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #1B1D21;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message[_ngcontent-%COMP%] {\n  background-color: #f5f0e5;\n  border: 1px solid #B68A35;\n  color: #8B6B1F;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 16px;\n  font-weight: 500;\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border: 1px solid #dc3545;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 16px;\n  font-weight: 500;\n}\n[dir=ltr][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .change-btn[_ngcontent-%COMP%], \n[dir=ltr][_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .change-btn[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 768px) {\n  .language-toggle[_ngcontent-%COMP%] {\n    top: 16px;\n    right: 16px;\n  }\n  [dir=rtl][_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n    right: auto;\n    left: 16px;\n  }\n  .toggle-container[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text[_ngcontent-%COMP%] {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 13px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .change-password-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 14px;\n    font-size: 15px;\n  }\n  .change-btn[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n    font-size: 15px;\n    min-height: 52px;\n  }\n}\n/*# sourceMappingURL=change-password.component-TZSB3GY3.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: false, template: `<div class="change-password-container" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
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
  <!-- Form Section -->\r
  <div class="form-section">\r
    <div class="form-container">\r
      <div class="form-header">\r
        <h1 class="title">{{ translate('login.change_password') }}</h1>\r
        <p class="subtitle">{{ translate('login.changepass_hint') }}</p>\r
      </div>\r
\r
      <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()" class="change-password-form">\r
        <div class="form-group">\r
          <label [for]="'currentPassword'" class="form-label">{{ translate('login.current_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showCurrentPassword ? 'text' : 'password'"\r
              id="currentPassword"\r
              formControlName="currentPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('currentPassword')"\r
              [placeholder]="translate('login.current_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('currentPassword')"\r
              [attr.aria-label]="showCurrentPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <svg *ngIf="!showCurrentPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>\r
                <circle cx="12" cy="12" r="3"/>\r
              </svg>\r
              <svg *ngIf="showCurrentPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>\r
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>\r
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"/>\r
                <line x1="2" x2="22" y1="2" y2="22"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('currentPassword')">\r
            {{ getFieldError('currentPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'newPassword'" class="form-label">{{ translate('login.new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showNewPassword ? 'text' : 'password'"\r
              id="newPassword"\r
              formControlName="newPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('newPassword')"\r
              [placeholder]="translate('login.new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('newPassword')"\r
              [attr.aria-label]="showNewPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <svg *ngIf="!showNewPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>\r
                <circle cx="12" cy="12" r="3"/>\r
              </svg>\r
              <svg *ngIf="showNewPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>\r
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>\r
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"/>\r
                <line x1="2" x2="22" y1="2" y2="22"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('newPassword')">\r
            {{ getFieldError('newPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label [for]="'confirmNewPassword'" class="form-label">{{ translate('login.confirm_new_password') }}</label>\r
          <div class="password-input-container">\r
            <input\r
              [type]="showconfirmNewPassword ? 'text' : 'password'"\r
              id="confirmNewPassword"\r
              formControlName="confirmNewPassword"\r
              class="form-control"\r
              [class.error]="getFieldError('confirmNewPassword')"\r
              [placeholder]="translate('login.confirm_new_password')"\r
            >\r
            <button\r
              type="button"\r
              class="password-toggle"\r
              (click)="togglePasswordVisibility('confirmNewPassword')"\r
              [attr.aria-label]="showconfirmNewPassword ? translate('login.hide') : translate('login.show')"\r
            >\r
              <svg *ngIf="!showconfirmNewPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>\r
                <circle cx="12" cy="12" r="3"/>\r
              </svg>\r
              <svg *ngIf="showconfirmNewPassword" class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>\r
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>\r
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.39-1.61"/>\r
                <line x1="2" x2="22" y1="2" y2="22"/>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="getFieldError('confirmNewPassword')">\r
            {{ getFieldError('confirmNewPassword') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button\r
            type="submit"\r
            class="btn btn-primary change-btn"\r
            [disabled]="loading"\r
          >\r
            <span *ngIf="!loading">{{ translate('login.change_password') }}</span>\r
            <span *ngIf="loading">{{ translate('login.loading') }}</span>\r
          </button>\r
        </div>\r
\r
        <div class="form-footer">\r
          <a (click)="goBack()" class="back-link">\r
            {{ translate('login.profile') }}\r
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
`, styles: ['/* src/app/components/auth/change-password/change-password.component.css */\n:host {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.change-password-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #F2ECCE;\n  position: relative;\n  padding: 20px;\n}\n.language-toggle {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  z-index: 100;\n}\n[dir=rtl] .language-toggle {\n  right: auto;\n  left: 24px;\n}\n.toggle-container {\n  position: relative;\n  width: 160px;\n  height: 54px;\n  background: #1B1D21;\n  border-radius: 50px;\n  padding: 8px;\n  padding-left: 16px !important;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toggle-container.rtl {\n  background: #B68A35;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-container.ltr {\n  background: #1B1D21;\n  border-color: #1B1D21;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.toggle-option {\n  position: absolute;\n  top: 6px;\n  width: calc(40% - 6px);\n  height: calc(100% - 12px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  border-radius: 18px;\n  transition: all 0.3s ease;\n  z-index: 2;\n  pointer-events: none;\n}\n.toggle-option:first-child {\n  left: 10px;\n}\n.toggle-option:last-child {\n  right: 6px;\n}\n.toggle-option.active {\n  color: white;\n}\n.toggle-option.active.rtl {\n  color: white;\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  color: white;\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) {\n  color: rgba(255, 255, 255, 0.6);\n  display: none;\n}\n.flag-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.flag {\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  flex-shrink: 0;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));\n}\n.toggle-text {\n  font-size: 13px;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  font-family: inherit;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n.toggle-slider {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  width: calc(60% - 16px);\n  height: calc(100% - 12px);\n  border-radius: 18px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);\n}\n.toggle-slider.rtl {\n  transform: translateX(90%);\n  background: #B68A35;\n}\n.toggle-slider.ltr {\n  transform: translateX(100%);\n  background: #1B1D21 !important;\n}\n.toggle-option:not(.active) .flag-container {\n  opacity: 0;\n  transform: scale(0.7);\n  pointer-events: none;\n}\n.toggle-option.active .flag-container {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-option:not(.active) .toggle-text {\n  opacity: 0.6;\n  transform: scale(0.95);\n}\n.toggle-option.active .toggle-text {\n  opacity: 1;\n  transform: scale(1);\n}\n.toggle-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  z-index: 3;\n}\n.form-section {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-container {\n  width: 100%;\n  background: white;\n  border-radius: 24px;\n  padding: 48px;\n  border: 1px solid #B68A35;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-header {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 8px;\n}\n.subtitle {\n  font-size: 16px;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 500;\n}\n.change-password-form {\n  width: 100%;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #1B1D21;\n  font-size: 14px;\n}\n.form-control {\n  width: 100%;\n  padding: 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  background-color: #fafbff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  min-height: 56px;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  background-color: white;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.form-control.error {\n  border-color: #dc3545;\n}\n.form-error {\n  color: #dc3545;\n  font-size: 14px;\n  margin-top: 6px;\n  font-weight: 500;\n}\n.password-input-container {\n  position: relative;\n}\n[dir=rtl] .password-input-container {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.password-toggle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.2s ease;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=ltr] .password-toggle {\n  right: 16px;\n}\n[dir=rtl] .password-toggle {\n  left: 16px;\n}\n.password-toggle:hover {\n  color: #B68A35;\n}\n.eye-icon {\n  width: 20px;\n  height: 20px;\n}\n[dir=rtl] .eye-icon {\n  transform: translateX(-1) !important;\n}\n[dir=ltr] .eye-icon {\n  transform: scaleX(1);\n}\n.form-actions {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.change-btn {\n  width: 100%;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  min-height: 56px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.change-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.4),\n      transparent);\n  transition: left 0.6s ease;\n}\n.change-btn::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  transform: translate(-100%, -100%);\n  transition: width 0.6s ease, height 0.6s ease;\n}\n.change-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #8B6B1F 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.change-btn:hover::before {\n  left: 100%;\n}\n.change-btn:hover::after {\n  width: 300px;\n  height: 300px;\n}\n.change-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.change-btn:active::after {\n  width: 0;\n  height: 0;\n}\n.change-btn:disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.change-btn.loading::before {\n  animation: shimmer 1.5s infinite;\n}\n@keyframes shimmer {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n.form-footer {\n  text-align: center;\n  margin-bottom: 16px;\n}\n.back-link {\n  color: #1B1D21;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.back-link:hover {\n  color: #B68A35;\n  text-decoration: underline;\n}\n.success-message {\n  background-color: #f5f0e5;\n  border: 1px solid #B68A35;\n  color: #8B6B1F;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 16px;\n  font-weight: 500;\n}\n.error-message {\n  background-color: #f8d7da;\n  border: 1px solid #dc3545;\n  color: #721c24;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 14px;\n  text-align: center;\n  margin-top: 16px;\n  font-weight: 500;\n}\n[dir=ltr] .title,\n[dir=ltr] .subtitle,\n[dir=ltr] .form-label,\n[dir=ltr] .form-control,\n[dir=ltr] .change-btn,\n[dir=ltr] .back-link {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n[dir=rtl] .title,\n[dir=rtl] .subtitle,\n[dir=rtl] .form-label,\n[dir=rtl] .form-control,\n[dir=rtl] .change-btn,\n[dir=rtl] .back-link {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n@media (max-width: 768px) {\n  .language-toggle {\n    top: 16px;\n    right: 16px;\n  }\n  [dir=rtl] .language-toggle {\n    right: auto;\n    left: 16px;\n  }\n  .toggle-container {\n    width: 120px;\n    height: 40px;\n  }\n  .toggle-text {\n    font-size: 12px;\n    letter-spacing: 0.3px;\n  }\n  .flag {\n    width: 18px;\n    height: 13px;\n  }\n  .form-container {\n    padding: 32px 24px;\n  }\n  .title {\n    font-size: 24px;\n  }\n  .subtitle {\n    font-size: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .change-password-container {\n    padding: 12px;\n  }\n  .form-container {\n    padding: 24px 20px;\n    border-radius: 16px;\n  }\n  .title {\n    font-size: 22px;\n  }\n  .form-control {\n    padding: 14px;\n    font-size: 15px;\n  }\n  .change-btn {\n    padding: 14px 20px;\n    font-size: 15px;\n    min-height: 52px;\n  }\n}\n/*# sourceMappingURL=change-password.component-TZSB3GY3.css.map */\n'] }]
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
//# sourceMappingURL=chunk-VQG65OWC.js.map
