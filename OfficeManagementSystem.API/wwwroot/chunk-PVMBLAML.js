import {
  Router,
  RouterModule
} from "./chunk-NPJF3A32.js";
import {
  CommonModule,
  Component,
  LangService,
  Location,
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
} from "./chunk-OWCDAEJQ.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/not-found/not-found.ts
var NotFound = class _NotFound {
  location;
  router;
  translationService;
  langService;
  currentLang = "en";
  constructor(location, router, translationService, langService) {
    this.location = location;
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
  goHome() {
    this.router.navigate(["/dashboard"]);
  }
  goBack() {
    this.location.back();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], standalone: false, decls: 34, vars: 7, consts: [[1, "not-found-container"], [1, "language-toggle"], [1, "lang-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], [1, "content"], [1, "error-icon"], [1, "search-icon"], [1, "search-circle"], [1, "search-handle"], [1, "search-dot"], [1, "error-number"], [1, "error-message"], [1, "error-title"], [1, "error-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M19 12H5M12 19l-7-7 7-7"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function NotFound_Template_button_click_2_listener() {
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
      \u0275\u0275element(12, "div", 10)(13, "div", 11)(14, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275text(16, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "h1", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 16);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 17)(23, "button", 18);
      \u0275\u0275listener("click", function NotFound_Template_button_click_23_listener() {
        return ctx.goHome();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 3);
      \u0275\u0275element(25, "path", 19)(26, "polyline", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 21);
      \u0275\u0275listener("click", function NotFound_Template_button_click_29_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 3);
      \u0275\u0275element(31, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.currentLang === "en" ? "\u0627\u0644\u0639\u0631\u0628\u064A\u0629" : "English");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.translate("not_found.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("not_found.description"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.translate("not_found.back_to_earth"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("not_found.go_back"));
    }
  }, styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.not-found-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #F9F7ED 0%,\n      #F2ECCF 100%);\n  padding: 2rem;\n  position: relative;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #B68A35;\n  border-radius: 8px;\n  color: #1B1D21;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(191, 171, 134, 0.3);\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  width: 100%;\n}\n.error-icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.search-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #B68A35;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(191, 171, 134, 0.3);\n}\n.search-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid white;\n  border-radius: 50%;\n  position: relative;\n}\n.search-handle[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 16px;\n  background: white;\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  transform: rotate(45deg);\n  border-radius: 2px;\n}\n.search-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.error-number[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  letter-spacing: -0.02em;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.error-description[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #5F646D;\n  line-height: 1.6;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 160px;\n  justify-content: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  box-shadow: 0 4px 14px 0 rgba(191, 171, 134, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #92722A 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px 0 rgba(191, 171, 134, 0.5);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #1B1D21;\n  border: 1px solid #B68A35;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #F9F7ED;\n  border-color: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.not-found-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .not-found-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .language-toggle[_ngcontent-%COMP%] {\n    right: auto;\n    left: 1rem;\n  }\n  .content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .error-number[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .error-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 280px;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n@media (max-width: 480px) {\n  .error-number[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .search-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .search-circle[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .search-handle[_ngcontent-%COMP%] {\n    width: 2px;\n    height: 12px;\n    bottom: -6px;\n    right: -6px;\n  }\n  .search-dot[_ngcontent-%COMP%] {\n    width: 4px;\n    height: 4px;\n  }\n}\n/*# sourceMappingURL=not-found-GP3SACLD.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: false, template: `<div class="not-found-container" [class.rtl]="isRTL()">\r
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
    <!-- 404 Icon -->\r
    <div class="error-icon">\r
      <div class="search-icon">\r
        <div class="search-circle"></div>\r
        <div class="search-handle"></div>\r
        <div class="search-dot"></div>\r
      </div>\r
    </div>\r
\r
    <!-- Error Number -->\r
    <div class="error-number">404</div>\r
\r
    <!-- Error Message -->\r
    <div class="error-message">\r
      <h1 class="error-title">{{ translate('not_found.title') }}</h1>\r
      <p class="error-description">\r
        {{ translate('not_found.description') }}\r
      </p>\r
    </div>\r
\r
    <!-- Action Buttons -->\r
    <div class="action-buttons">\r
      <button class="btn btn-primary" (click)="goHome()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>\r
          <polyline points="9,22 9,12 15,12 15,22"></polyline>\r
        </svg>\r
        <span>{{ translate('not_found.back_to_earth') }}</span>\r
      </button>\r
      <button class="btn btn-secondary" (click)="goBack()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M19 12H5M12 19l-7-7 7-7"></path>\r
        </svg>\r
        <span>{{ translate('not_found.go_back') }}</span>\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/components/not-found/not-found.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.not-found-container {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #F9F7ED 0%,\n      #F2ECCF 100%);\n  padding: 2rem;\n  position: relative;\n}\n.language-toggle {\n  position: absolute;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10;\n}\n.lang-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #B68A35;\n  border-radius: 8px;\n  color: #1B1D21;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn:hover {\n  background: #B68A35;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(191, 171, 134, 0.3);\n}\n.not-found-container.rtl .language-toggle {\n  right: auto;\n  left: 2rem;\n}\n.content {\n  text-align: center;\n  max-width: 500px;\n  width: 100%;\n}\n.error-icon {\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.search-icon {\n  width: 80px;\n  height: 80px;\n  background: #B68A35;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: 0 10px 25px rgba(191, 171, 134, 0.3);\n}\n.search-circle {\n  width: 32px;\n  height: 32px;\n  border: 3px solid white;\n  border-radius: 50%;\n  position: relative;\n}\n.search-handle {\n  width: 3px;\n  height: 16px;\n  background: white;\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  transform: rotate(45deg);\n  border-radius: 2px;\n}\n.search-dot {\n  width: 6px;\n  height: 6px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.error-number {\n  font-size: 4rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  letter-spacing: -0.02em;\n}\n.error-message {\n  margin-bottom: 3rem;\n}\n.error-title {\n  font-size: 1.875rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.error-description {\n  font-size: 1.125rem;\n  color: #5F646D;\n  line-height: 1.6;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.action-buttons {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  min-width: 160px;\n  justify-content: center;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  box-shadow: 0 4px 14px 0 rgba(191, 171, 134, 0.4);\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #92722A 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px 0 rgba(191, 171, 134, 0.5);\n}\n.btn-secondary {\n  background: white;\n  color: #1B1D21;\n  border: 1px solid #B68A35;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn-secondary:hover {\n  background: #F9F7ED;\n  border-color: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.not-found-container.rtl {\n  direction: rtl;\n  text-align: right;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.not-found-container.rtl .content {\n  text-align: center;\n}\n.not-found-container.rtl .action-buttons {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl .btn {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .not-found-container {\n    padding: 1rem;\n  }\n  .language-toggle {\n    top: 1rem;\n    right: 1rem;\n  }\n  .not-found-container.rtl .language-toggle {\n    right: auto;\n    left: 1rem;\n  }\n  .content {\n    max-width: 100%;\n  }\n  .error-number {\n    font-size: 3rem;\n  }\n  .error-title {\n    font-size: 1.5rem;\n  }\n  .error-description {\n    font-size: 1rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    max-width: 280px;\n  }\n  .not-found-container.rtl .action-buttons {\n    flex-direction: column;\n  }\n  .not-found-container.rtl .btn {\n    flex-direction: row;\n  }\n}\n@media (max-width: 480px) {\n  .error-number {\n    font-size: 2.5rem;\n  }\n  .error-title {\n    font-size: 1.25rem;\n  }\n  .search-icon {\n    width: 60px;\n    height: 60px;\n  }\n  .search-circle {\n    width: 24px;\n    height: 24px;\n  }\n  .search-handle {\n    width: 2px;\n    height: 12px;\n    bottom: -6px;\n    right: -6px;\n  }\n  .search-dot {\n    width: 4px;\n    height: 4px;\n  }\n}\n/*# sourceMappingURL=not-found-GP3SACLD.css.map */\n'] }]
  }], () => [{ type: Location }, { type: Router }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "src/app/components/not-found/not-found.ts", lineNumber: 13 });
})();

// src/app/components/not-found/not-found-routing-module.ts
var routes = [
  {
    path: "",
    component: NotFound
  }
];
var NotFoundRoutingModule = class _NotFoundRoutingModule {
  static \u0275fac = function NotFoundRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotFoundRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/not-found/not-found-module.ts
var NotFoundModule = class _NotFoundModule {
  static \u0275fac = function NotFoundModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFoundModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NotFoundModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    NotFoundRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFoundModule, [{
    type: NgModule,
    args: [{
      declarations: [
        NotFound
      ],
      imports: [
        CommonModule,
        NotFoundRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  NotFoundModule
};
//# sourceMappingURL=chunk-PVMBLAML.js.map
