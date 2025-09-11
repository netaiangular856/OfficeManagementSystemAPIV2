import {
  Router,
  RouterModule
} from "./chunk-AKEMWEBI.js";
import {
  CommonModule,
  Component,
  NgForOf,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UOGSXFNT.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/unauthorized/unauthorized.component.ts
function UnauthorizedComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
var UnauthorizedComponent = class _UnauthorizedComponent {
  router;
  translationService;
  particles = [];
  constructor(router, translationService) {
    this.router = router;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.generateParticles();
  }
  generateParticles() {
    for (let i = 0; i < 50; i++) {
      this.particles.push(i);
    }
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
    return new (__ngFactoryType__ || _UnauthorizedComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnauthorizedComponent, selectors: [["app-unauthorized"]], standalone: false, decls: 42, vars: 7, consts: [[1, "unauthorized-container"], [1, "background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "shape", "shape-5"], [1, "gradient-overlay"], [1, "content"], [1, "error-number"], [1, "four"], [1, "zero"], [1, "zero-inner"], [1, "lock-icon"], [1, "lock-body"], [1, "lock-shackle"], [1, "three"], [1, "error-message"], [1, "error-title"], [1, "error-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-dashboard"], [1, "btn", "btn-secondary", 3, "click"], [1, "icon-back"], [1, "security-elements"], [1, "shield", "shield-1"], [1, "shield", "shield-2"], [1, "key"], [1, "key-body"], [1, "key-teeth"], [1, "particles"], ["class", "particle", 4, "ngFor", "ngForOf"], [1, "particle"]], template: function UnauthorizedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "span", 11);
      \u0275\u0275text(12, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 12)(14, "div", 13)(15, "div", 14);
      \u0275\u0275element(16, "div", 15)(17, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "span", 17);
      \u0275\u0275text(19, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 18)(21, "h1", 19);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 20);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 21)(26, "button", 22);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_26_listener() {
        return ctx.goToDashboard();
      });
      \u0275\u0275element(27, "i", 23);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 24);
      \u0275\u0275listener("click", function UnauthorizedComponent_Template_button_click_30_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(31, "i", 25);
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 26);
      \u0275\u0275element(35, "div", 27)(36, "div", 28);
      \u0275\u0275elementStart(37, "div", 29);
      \u0275\u0275element(38, "div", 30)(39, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 32);
      \u0275\u0275template(41, UnauthorizedComponent_div_41_Template, 1, 0, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("unauthorized.description"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.back_to_dashboard"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("unauthorized.go_back"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.particles);
    }
  }, dependencies: [NgForOf], styles: ['@import "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.unauthorized-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Space Grotesk", sans-serif;\n}\n.background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0c0c0c 0%,\n      #001031 25%,\n      #0d1325 50%,\n      #0a3001f5 75%,\n      #072700 100%);\n  z-index: 1;\n}\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0.05));\n  animation: _ngcontent-%COMP%_float 20s infinite linear;\n}\n.shape-1[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.shape-2[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 60%;\n  right: 15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 80%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 20s;\n}\n.shape-4[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  top: 10%;\n  right: 30%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.shape-5[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  top: 40%;\n  left: 5%;\n  animation-delay: -20s;\n  animation-duration: 15s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateY(100vh) rotate(0deg);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100px) rotate(360deg);\n    opacity: 0;\n  }\n}\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(120, 119, 198, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 80%,\n      rgba(255, 119, 198, 0.2) 0%,\n      transparent 50%);\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 2rem;\n}\n.error-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  font-family: "Orbitron", monospace;\n  font-weight: 900;\n}\n.four[_ngcontent-%COMP%] {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.three[_ngcontent-%COMP%] {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.zero[_ngcontent-%COMP%] {\n  position: relative;\n  width: clamp(8rem, 15vw, 12rem);\n  height: clamp(8rem, 15vw, 12rem);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zero-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 8px solid transparent;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  background-clip: padding-box;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease-in-out infinite, _ngcontent-%COMP%_rotate 10s linear infinite;\n  position: relative;\n  overflow: hidden;\n}\n.lock-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.lock-body[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e8e8,\n      #f5f5f5);\n  border-radius: 8px 8px 0 0;\n  position: relative;\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.lock-shackle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 4px solid #e8e8e8;\n  border-radius: 50%;\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom: none;\n  border-right: none;\n  animation: _ngcontent-%COMP%_lockPulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_lockPulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(-50%) scale(1.1);\n    opacity: 0.8;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffffff,\n      #e0e0e0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.error-description[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 50px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #158638,\n      #09365F);\n  color: white;\n  box-shadow: 0 4px 15px rgba(21, 134, 56, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.6);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n}\n.security-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.shield[_ngcontent-%COMP%] {\n  position: absolute;\n  animation: _ngcontent-%COMP%_shieldFloat 15s linear infinite;\n}\n.shield-1[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      45deg,\n      #158638,\n      #47AD94);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  top: 20%;\n  right: 10%;\n  animation-delay: 0s;\n  box-shadow: 0 0 20px rgba(21, 134, 56, 0.5);\n}\n.shield-2[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      45deg,\n      #09365F,\n      #3289EE);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  bottom: 30%;\n  left: 15%;\n  animation-delay: -7s;\n  box-shadow: 0 0 15px rgba(9, 54, 95, 0.5);\n}\n@keyframes _ngcontent-%COMP%_shieldFloat {\n  0% {\n    transform: rotate(0deg) translateX(0) translateY(0);\n  }\n  25% {\n    transform: rotate(90deg) translateX(50px) translateY(-30px);\n  }\n  50% {\n    transform: rotate(180deg) translateX(0) translateY(0);\n  }\n  75% {\n    transform: rotate(270deg) translateX(-50px) translateY(30px);\n  }\n  100% {\n    transform: rotate(360deg) translateX(0) translateY(0);\n  }\n}\n.key[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  animation: _ngcontent-%COMP%_keyMove 12s linear infinite;\n}\n.key-body[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 15px;\n  background:\n    linear-gradient(\n      45deg,\n      #043DFF,\n      #3289EE);\n  border-radius: 3px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(4, 61, 255, 0.5);\n}\n.key-teeth[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background:\n    linear-gradient(\n      45deg,\n      #043DFF,\n      #3289EE);\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  right: -4px;\n  transform: translateY(-50%);\n}\n@keyframes _ngcontent-%COMP%_keyMove {\n  0% {\n    transform: translateX(0) translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateX(100px) translateY(-50px) rotate(90deg);\n  }\n  50% {\n    transform: translateX(200px) translateY(0) rotate(180deg);\n  }\n  75% {\n    transform: translateX(100px) translateY(50px) rotate(270deg);\n  }\n  100% {\n    transform: translateX(0) translateY(0) rotate(360deg);\n  }\n}\n.particles[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  height: 2px;\n  background: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_particleFloat 8s linear infinite;\n  opacity: 0.6;\n}\n.particle[_ngcontent-%COMP%]:nth-child(odd) {\n  animation-delay: -2s;\n  animation-duration: 10s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(even) {\n  animation-delay: -4s;\n  animation-duration: 12s;\n}\n@keyframes _ngcontent-%COMP%_particleFloat {\n  0% {\n    transform: translateY(100vh) translateX(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.6;\n  }\n  90% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateY(-100px) translateX(100px);\n    opacity: 0;\n  }\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .error-number[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n  .security-elements[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .error-number[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .zero[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .unauthorized-container.rtl[_ngcontent-%COMP%]   .error-number[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=unauthorized.component-NOO565GG.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnauthorizedComponent, [{
    type: Component,
    args: [{ selector: "app-unauthorized", standalone: false, template: `<div class="unauthorized-container" [class.rtl]="isRTL()">\r
  <!-- Animated Background -->\r
  <div class="background">\r
    <div class="floating-shapes">\r
      <div class="shape shape-1"></div>\r
      <div class="shape shape-2"></div>\r
      <div class="shape shape-3"></div>\r
      <div class="shape shape-4"></div>\r
      <div class="shape shape-5"></div>\r
    </div>\r
    <div class="gradient-overlay"></div>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div class="content">\r
    <!-- 403 Number with Animation -->\r
    <div class="error-number">\r
      <span class="four">4</span>\r
      <span class="zero">\r
        <div class="zero-inner">\r
          <div class="lock-icon">\r
            <div class="lock-body"></div>\r
            <div class="lock-shackle"></div>\r
          </div>\r
        </div>\r
      </span>\r
      <span class="three">3</span>\r
    </div>\r
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
        <i class="icon-dashboard"></i>\r
        <span>{{ translate('unauthorized.back_to_dashboard') }}</span>\r
      </button>\r
      <button class="btn btn-secondary" (click)="goBack()">\r
        <i class="icon-back"></i>\r
        <span>{{ translate('unauthorized.go_back') }}</span>\r
      </button>\r
    </div>\r
\r
    <!-- Security Elements -->\r
    <div class="security-elements">\r
      <div class="shield shield-1"></div>\r
      <div class="shield shield-2"></div>\r
      <div class="key">\r
        <div class="key-body"></div>\r
        <div class="key-teeth"></div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Particles -->\r
  <div class="particles">\r
    <div class="particle" *ngFor="let particle of particles"></div>\r
  </div>\r
</div>\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/unauthorized/unauthorized.component.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.unauthorized-container {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Space Grotesk", sans-serif;\n}\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #0c0c0c 0%,\n      #001031 25%,\n      #0d1325 50%,\n      #0a3001f5 75%,\n      #072700 100%);\n  z-index: 1;\n}\n.floating-shapes {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.shape {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0.05));\n  animation: float 20s infinite linear;\n}\n.shape-1 {\n  width: 80px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.shape-2 {\n  width: 120px;\n  height: 120px;\n  top: 60%;\n  right: 15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.shape-3 {\n  width: 60px;\n  height: 60px;\n  top: 80%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 20s;\n}\n.shape-4 {\n  width: 100px;\n  height: 100px;\n  top: 10%;\n  right: 30%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.shape-5 {\n  width: 40px;\n  height: 40px;\n  top: 40%;\n  left: 5%;\n  animation-delay: -20s;\n  animation-duration: 15s;\n}\n@keyframes float {\n  0% {\n    transform: translateY(100vh) rotate(0deg);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100px) rotate(360deg);\n    opacity: 0;\n  }\n}\n.gradient-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(120, 119, 198, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 80%,\n      rgba(255, 119, 198, 0.2) 0%,\n      transparent 50%);\n}\n.content {\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 2rem;\n}\n.error-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  font-family: "Orbitron", monospace;\n  font-weight: 900;\n}\n.four {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.three {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.zero {\n  position: relative;\n  width: clamp(8rem, 15vw, 12rem);\n  height: clamp(8rem, 15vw, 12rem);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zero-inner {\n  width: 100%;\n  height: 100%;\n  border: 8px solid transparent;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      #ff6b6b,\n      #4ecdc4,\n      #45b7d1,\n      #96ceb4);\n  background-size: 400% 400%;\n  background-clip: padding-box;\n  animation: gradientShift 3s ease-in-out infinite, rotate 10s linear infinite;\n  position: relative;\n  overflow: hidden;\n}\n.lock-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  height: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.lock-body {\n  width: 40px;\n  height: 30px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e8e8,\n      #f5f5f5);\n  border-radius: 8px 8px 0 0;\n  position: relative;\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.lock-shackle {\n  width: 20px;\n  height: 20px;\n  border: 4px solid #e8e8e8;\n  border-radius: 50%;\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom: none;\n  border-right: none;\n  animation: lockPulse 2s ease-in-out infinite;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lockPulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(-50%) scale(1.1);\n    opacity: 0.8;\n  }\n}\n.error-message {\n  margin-bottom: 3rem;\n}\n.error-title {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffffff,\n      #e0e0e0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.error-description {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.action-buttons {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n.btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 50px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn:hover::before {\n  left: 100%;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      45deg,\n      #158638,\n      #09365F);\n  color: white;\n  box-shadow: 0 4px 15px rgba(21, 134, 56, 0.4);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.6);\n}\n.btn-secondary {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n}\n.security-elements {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.shield {\n  position: absolute;\n  animation: shieldFloat 15s linear infinite;\n}\n.shield-1 {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      45deg,\n      #158638,\n      #47AD94);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  top: 20%;\n  right: 10%;\n  animation-delay: 0s;\n  box-shadow: 0 0 20px rgba(21, 134, 56, 0.5);\n}\n.shield-2 {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      45deg,\n      #09365F,\n      #3289EE);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  bottom: 30%;\n  left: 15%;\n  animation-delay: -7s;\n  box-shadow: 0 0 15px rgba(9, 54, 95, 0.5);\n}\n@keyframes shieldFloat {\n  0% {\n    transform: rotate(0deg) translateX(0) translateY(0);\n  }\n  25% {\n    transform: rotate(90deg) translateX(50px) translateY(-30px);\n  }\n  50% {\n    transform: rotate(180deg) translateX(0) translateY(0);\n  }\n  75% {\n    transform: rotate(270deg) translateX(-50px) translateY(30px);\n  }\n  100% {\n    transform: rotate(360deg) translateX(0) translateY(0);\n  }\n}\n.key {\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  animation: keyMove 12s linear infinite;\n}\n.key-body {\n  width: 30px;\n  height: 15px;\n  background:\n    linear-gradient(\n      45deg,\n      #043DFF,\n      #3289EE);\n  border-radius: 3px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(4, 61, 255, 0.5);\n}\n.key-teeth {\n  width: 8px;\n  height: 8px;\n  background:\n    linear-gradient(\n      45deg,\n      #043DFF,\n      #3289EE);\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  right: -4px;\n  transform: translateY(-50%);\n}\n@keyframes keyMove {\n  0% {\n    transform: translateX(0) translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateX(100px) translateY(-50px) rotate(90deg);\n  }\n  50% {\n    transform: translateX(200px) translateY(0) rotate(180deg);\n  }\n  75% {\n    transform: translateX(100px) translateY(50px) rotate(270deg);\n  }\n  100% {\n    transform: translateX(0) translateY(0) rotate(360deg);\n  }\n}\n.particles {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.particle {\n  position: absolute;\n  width: 2px;\n  height: 2px;\n  background: white;\n  border-radius: 50%;\n  animation: particleFloat 8s linear infinite;\n  opacity: 0.6;\n}\n.particle:nth-child(odd) {\n  animation-delay: -2s;\n  animation-duration: 10s;\n}\n.particle:nth-child(even) {\n  animation-delay: -4s;\n  animation-duration: 12s;\n}\n@keyframes particleFloat {\n  0% {\n    transform: translateY(100vh) translateX(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.6;\n  }\n  90% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateY(-100px) translateX(100px);\n    opacity: 0;\n  }\n}\n.unauthorized-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.unauthorized-container.rtl .content {\n  text-align: center;\n}\n.unauthorized-container.rtl .error-number {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl .action-buttons {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl .btn {\n  flex-direction: row-reverse;\n}\n.unauthorized-container.rtl .btn i {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n@media (max-width: 768px) {\n  .content {\n    padding: 1rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    max-width: 300px;\n  }\n  .security-elements {\n    display: none;\n  }\n  .unauthorized-container.rtl .action-buttons {\n    flex-direction: column;\n  }\n  .unauthorized-container.rtl .btn {\n    flex-direction: row;\n  }\n  .unauthorized-container.rtl .btn i {\n    margin-left: 0;\n    margin-right: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .error-number {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .zero {\n    margin: 0;\n  }\n  .unauthorized-container.rtl .error-number {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=unauthorized.component-NOO565GG.css.map */\n'] }]
  }], () => [{ type: Router }, { type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnauthorizedComponent, { className: "UnauthorizedComponent", filePath: "src/app/components/unauthorized/unauthorized.component.ts", lineNumber: 11 });
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
//# sourceMappingURL=chunk-YTLNVRW2.js.map
