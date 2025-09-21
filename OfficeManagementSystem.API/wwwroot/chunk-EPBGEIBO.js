import {
  Router,
  RouterModule
} from "./chunk-O632SAIF.js";
import {
  CommonModule,
  Component,
  LangService,
  NgModule,
  TranslationService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-66AA6EL7.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/unauthorized/unauthorized.component.ts
var UnauthorizedComponent = class _UnauthorizedComponent {
  router;
  translationService;
  langService;
  currentLang = "en";
  constructor(router, translationService, langService) {
    this.router = router;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.currentLang = this.langService.getCurrentLang();
  }
  toggleLanguage() {
    this.currentLang = this.currentLang === "en" ? "ar" : "en";
    this.langService.setLanguage(this.currentLang);
  }
  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  goBack() {
    window.history.back();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function UnauthorizedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], standalone: false, decls: 35, vars: 7, consts: [[1, "unauthorized-container"], [1, "language-toggle"], [1, "lang-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], [1, "content"], [1, "error-icon"], [1, "lock-icon"], [1, "lock-body"], [1, "lock-shackle"], [1, "error-number"], [1, "error-message"], [1, "error-title"], [1, "error-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9"], ["x1", "9", "y1", "12", "x2", "15", "y2", "12"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M19 12H5M12 19l-7-7 7-7"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_2_listener() {
        return ctx.toggleLanguage();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "line", 5)(6, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
      \u0275\u0275element(12, "div", 10)(13, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12);
      \u0275\u0275text(15, "403");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13)(17, "h1", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 15);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 16)(22, "button", 17);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_22_listener() {
        return ctx.goToDashboard();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 3);
      \u0275\u0275element(24, "rect", 18)(25, "line", 19)(26, "line", 20)(27, "line", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 22);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_30_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 3);
      \u0275\u0275element(32, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.currentLang === "en" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "English");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("unauthorized.description"), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.back_to_dashboard"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.go_back"));
    }
  }, styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.unauthorized-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #F9F7ED 0%,\n      #F2ECCF 100%);\n  padding: 2rem;\n  position: relative;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #B68A35;\n  border-radius: 8px;\n  color: #1B1D21;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(191, 171, 134, 0.3);\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  width: 100%;\n}\n.error-icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.lock-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #B68A35;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(191, 171, 134, 0.3);\n}\n.lock-body[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 24px;\n  background: white;\n  border-radius: 6px 6px 0 0;\n  position: relative;\n}\n.lock-shackle[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 3px solid white;\n  border-radius: 50%;\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom: none;\n  border-right: none;\n}\n.error-number[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  letter-spacing: -0.02em;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.error-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #5F646D;\n  line-height: 1.6;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 160px;\n  justify-content: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  box-shadow: 0 4px 14px 0 rgba(191, 171, 134, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #92722A 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px 0 rgba(191, 171, 134, 0.5);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #1B1D21;\n  border: 1px solid #B68A35;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #F9F7ED;\n  border-color: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .unauthorized-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n    right: auto;\n    left: 1rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .error-number[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .error-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media (max-width: 480px) {\n  .error-number[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .lock-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .lock-body[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 18px;\n  }\n  .lock-shackle[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -6px;\n  }\n}\n/*# sourceMappingURL=unauthorized.component-Z3YHFIEO.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", standalone: false, template: `<div class="unauthorized-container" [class.rtl]="isRTL()">\r
  <!-- Language Toggle Button -->\r
  <div class="language-toggle">\r
    <button class="lang-btn" (click)="toggleLanguage()">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="12" cy="12" r="10"></circle>\r
        <line x1="2" y1="12" x2="22" y2="12"></line>\r
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>\r
      </svg>\r
      <span>{{ currentLang === 'en' ? '\u0627\u0644\u0639\u0631\u0628\u064A\u0629' : 'English' }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div class="content">\r
    <!-- 403 Icon -->\r
    <div class="error-icon">\r
      <div class="lock-icon">\r
        <div class="lock-body"></div>\r
        <div class="lock-shackle"></div>\r
      </div>\r
    </div>\r
\r
    <!-- Error Number -->\r
    <div class="error-number">403</div>\r
\r
    <!-- Error Message -->\r
    <div class="error-message">\r
      <h1 class="error-title">{{ translate('unauthorized.title') }}</h1>\r
      <p class="error-description">\r
        {{ translate('unauthorized.description') }}\r
      </p>\r
    </div>\r
\r
    <!-- Action Buttons -->\r
    <div class="action-buttons">\r
      <button class="btn btn-primary" (click)="goToDashboard()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>\r
          <line x1="9" y1="9" x2="15" y2="9"></line>\r
          <line x1="9" y1="12" x2="15" y2="12"></line>\r
          <line x1="9" y1="15" x2="15" y2="15"></line>\r
        </svg>\r
        <span>{{ translate('unauthorized.back_to_dashboard') }}</span>\r
      </button>\r
      <button class="btn btn-secondary" (click)="goBack()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M19 12H5M12 19l-7-7 7-7"></path>\r
        </svg>\r
        <span>{{ translate('unauthorized.go_back') }}</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/unauthorized/unauthorized.component.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.unauthorized-container {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #F9F7ED 0%,\n      #F2ECCF 100%);\n  padding: 2rem;\n  position: relative;\n}\n.language-toggle {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10;\n}\n.lang-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #B68A35;\n  border-radius: 8px;\n  color: #1B1D21;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn:hover {\n  background: #B68A35;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(191, 171, 134, 0.3);\n}\n.unauthorized-container.rtl .language-toggle {\n  right: auto;\n  left: 2rem;\n}\n.content {\n  text-align: center;\n  max-width: 500px;\n  width: 100%;\n}\n.error-icon {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.lock-icon {\n  width: 80px;\n  height: 80px;\n  background: #B68A35;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(191, 171, 134, 0.3);\n}\n.lock-body {\n  width: 32px;\n  height: 24px;\n  background: white;\n  border-radius: 6px 6px 0 0;\n  position: relative;\n}\n.lock-shackle {\n  width: 16px;\n  height: 16px;\n  border: 3px solid white;\n  border-radius: 50%;\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom: none;\n  border-right: none;\n}\n.error-number {\n  font-size: 4rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  letter-spacing: -0.02em;\n}\n.error-message {\n  margin-bottom: 3rem;\n}\n.error-title {\n  font-size: 1.875rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.error-description {\n  font-size: 1.125rem;\n  color: #5F646D;\n  line-height: 1.6;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.action-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 160px;\n  justify-content: center;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  box-shadow: 0 4px 14px 0 rgba(191, 171, 134, 0.4);\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #92722A 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px 0 rgba(191, 171, 134, 0.5);\n}\n.btn-secondary {\n  background: white;\n  color: #1B1D21;\n  border: 1px solid #B68A35;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn-secondary:hover {\n  background: #F9F7ED;\n  border-color: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.unauthorized-container.rtl {\n  direction: rtl;\n  text-align: right;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.unauthorized-container.rtl .content {\n  text-align: center;\n}\n.unauthorized-container.rtl .action-buttons {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl .btn {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .unauthorized-container {\n    padding: 1rem;\n  }\n  .language-toggle {\n    top: 1rem;\n    right: 1rem;\n  }\n  .unauthorized-container.rtl .language-toggle {\n    right: auto;\n    left: 1rem;\n  }\n  .content {\n    max-width: 100%;\n  }\n  .error-number {\n    font-size: 3rem;\n  }\n  .error-title {\n    font-size: 1.5rem;\n  }\n  .error-description {\n    font-size: 1rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    max-width: 280px;\n  }\n  .unauthorized-container.rtl .action-buttons {\n    flex-direction: column;\n  }\n  .unauthorized-container.rtl .btn {\n    flex-direction: row;\n  }\n}\n@media (max-width: 480px) {\n  .error-number {\n    font-size: 2.5rem;\n  }\n  .error-title {\n    font-size: 1.25rem;\n  }\n  .lock-icon {\n    width: 60px;\n    height: 60px;\n  }\n  .lock-body {\n    width: 24px;\n    height: 18px;\n  }\n  .lock-shackle {\n    width: 12px;\n    height: 12px;\n    top: -6px;\n  }\n}\n/*# sourceMappingURL=unauthorized.component-Z3YHFIEO.css.map */\n'] }]
  }], () => [{ type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/components/unauthorized/unauthorized.component.ts", lineNumber: 12 });
})();

// src/app/components/unauthorized/unauthorized-routing.module.ts
var routes = [
  {
    path: "",
    component: UnauthorizedComponent
  }
];
var UnauthorizedRoutingModule = class _UnauthorizedRoutingModule {
  static \u0275fac = function UnauthorizedRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UnauthorizedRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/unauthorized/unauthorized.module.ts
var UnauthorizedModule = class _UnauthorizedModule {
  static \u0275fac = function UnauthorizedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnauthorizedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UnauthorizedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    UnauthorizedRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        UnauthorizedComponent
      ],
      imports: [
        CommonModule,
        UnauthorizedRoutingModule
      ],
      exports: [
        UnauthorizedComponent
      ]
    }]
  }], null, null);
})();
export {
  UnauthorizedModule
};
//# sourceMappingURL=chunk-EPBGEIBO.js.map
