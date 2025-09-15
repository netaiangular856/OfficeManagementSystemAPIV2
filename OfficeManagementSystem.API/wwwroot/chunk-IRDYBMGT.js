import {
  Router,
  RouterModule
} from "./chunk-LQXSMMP4.js";
import {
  CommonModule,
  Component,
  Location,
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
} from "./chunk-J5ZZ35GX.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/not-found/not-found.ts
function NotFound_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
}
var NotFound = class _NotFound {
  location;
  router;
  translationService;
  particles = [];
  constructor(location, router, translationService) {
    this.location = location;
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
    return new (__ngFactoryType__ || _NotFound)(\u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["app-not-found"]], standalone: false, decls: 43, vars: 7, consts: [[1, "not-found-container"], [1, "background"], [1, "floating-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], [1, "shape", "shape-4"], [1, "shape", "shape-5"], [1, "gradient-overlay"], [1, "content"], [1, "error-number"], [1, "four"], [1, "zero"], [1, "zero-inner"], [1, "astronaut-helmet"], [1, "helmet-glass"], [1, "helmet-reflection"], [1, "error-message"], [1, "error-title"], [1, "error-description"], [1, "action-buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "icon-home"], [1, "btn", "btn-secondary", 3, "click"], [1, "icon-back"], [1, "space-elements"], [1, "planet", "planet-1"], [1, "planet", "planet-2"], [1, "satellite"], [1, "satellite-body"], [1, "satellite-panel", "panel-1"], [1, "satellite-panel", "panel-2"], [1, "particles"], ["class", "particle", 4, "ngFor", "ngForOf"], [1, "particle"]], template: function NotFound_Template(rf, ctx) {
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
      \u0275\u0275elementStart(18, "span", 11);
      \u0275\u0275text(19, "4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 17)(21, "h1", 18);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 20)(26, "button", 21);
      \u0275\u0275listener("click", function NotFound_Template_button_click_26_listener() {
        return ctx.goHome();
      });
      \u0275\u0275element(27, "i", 22);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 23);
      \u0275\u0275listener("click", function NotFound_Template_button_click_30_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(31, "i", 24);
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 25);
      \u0275\u0275element(35, "div", 26)(36, "div", 27);
      \u0275\u0275elementStart(37, "div", 28);
      \u0275\u0275element(38, "div", 29)(39, "div", 30)(40, "div", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 32);
      \u0275\u0275template(42, NotFound_div_42_Template, 1, 0, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.translate("not_found.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("not_found.description"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("not_found.back_to_earth"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("not_found.go_back"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.particles);
    }
  }, dependencies: [NgForOf], styles: ['@import "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";\n\n\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.not-found-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Space Grotesk", sans-serif;\n}\n.background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #1B1D21 0%,\n      #34495E 25%,\n      #E6D7A2 50%,\n      #2BA149 75%,\n      #E54B1D 100%);\n  z-index: 1;\n}\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0.05));\n  animation: _ngcontent-%COMP%_float 20s infinite linear;\n}\n.shape-1[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.shape-2[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 60%;\n  right: 15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.shape-3[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 80%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 20s;\n}\n.shape-4[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  top: 10%;\n  right: 30%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.shape-5[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  top: 40%;\n  left: 5%;\n  animation-delay: -20s;\n  animation-duration: 15s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateY(100vh) rotate(0deg);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100px) rotate(360deg);\n    opacity: 0;\n  }\n}\n.gradient-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(120, 119, 198, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 80%,\n      rgba(255, 119, 198, 0.2) 0%,\n      transparent 50%);\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 2rem;\n}\n.error-number[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  font-family: "Orbitron", monospace;\n  font-weight: 900;\n}\n.four[_ngcontent-%COMP%] {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149,\n      #E6D7A2,\n      #34495E);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.zero[_ngcontent-%COMP%] {\n  position: relative;\n  width: clamp(8rem, 15vw, 12rem);\n  height: clamp(8rem, 15vw, 12rem);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zero-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 8px solid transparent;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149,\n      #E6D7A2,\n      #34495E);\n  background-size: 400% 400%;\n  background-clip: padding-box;\n  animation: _ngcontent-%COMP%_gradientShift 3s ease-in-out infinite, _ngcontent-%COMP%_rotate 10s linear infinite;\n  position: relative;\n  overflow: hidden;\n}\n.astronaut-helmet[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  height: 60%;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e8e8,\n      #f5f5f5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);\n}\n.helmet-glass[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(100, 200, 255, 0.3),\n      rgba(200, 255, 255, 0.1));\n  border-radius: 50%;\n  position: relative;\n}\n.helmet-reflection[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  width: 30%;\n  height: 30%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.8),\n      transparent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_reflection 2s ease-in-out infinite alternate;\n}\n@keyframes _ngcontent-%COMP%_gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_reflection {\n  from {\n    opacity: 0.3;\n  }\n  to {\n    opacity: 0.8;\n  }\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.error-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffffff,\n      #e0e0e0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.error-description[_ngcontent-%COMP%] {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 50px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149);\n  color: white;\n  box-shadow: 0 4px 15px rgba(229, 75, 29, 0.4);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(229, 75, 29, 0.6);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n}\n.space-elements[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.planet[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_orbit 20s linear infinite;\n}\n.planet-1[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      45deg,\n      #E6D7A2,\n      #2BA149);\n  top: 20%;\n  right: 10%;\n  animation-delay: 0s;\n  box-shadow: 0 0 20px rgba(230, 215, 162, 0.5);\n}\n.planet-2[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      45deg,\n      #34495E,\n      #E54B1D);\n  bottom: 30%;\n  left: 15%;\n  animation-delay: -10s;\n  box-shadow: 0 0 15px rgba(52, 73, 94, 0.5);\n}\n@keyframes _ngcontent-%COMP%_orbit {\n  0% {\n    transform: rotate(0deg) translateX(100px) rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg) translateX(100px) rotate(-360deg);\n  }\n}\n.satellite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  animation: _ngcontent-%COMP%_satelliteMove 15s linear infinite;\n}\n.satellite-body[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background:\n    linear-gradient(\n      45deg,\n      #B45253,\n      #E54B1D);\n  border-radius: 3px;\n  position: relative;\n}\n.satellite-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  background:\n    linear-gradient(\n      45deg,\n      #E6D7A2,\n      #2BA149);\n  border-radius: 2px;\n}\n.panel-1[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 8px;\n  top: 6px;\n  left: -5px;\n  transform: rotate(-45deg);\n}\n.panel-2[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 8px;\n  top: 6px;\n  right: -5px;\n  transform: rotate(45deg);\n}\n@keyframes _ngcontent-%COMP%_satelliteMove {\n  0% {\n    transform: translateX(0) translateY(0);\n  }\n  25% {\n    transform: translateX(200px) translateY(-50px);\n  }\n  50% {\n    transform: translateX(400px) translateY(0);\n  }\n  75% {\n    transform: translateX(200px) translateY(50px);\n  }\n  100% {\n    transform: translateX(0) translateY(0);\n  }\n}\n.particles[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  height: 2px;\n  background: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_particleFloat 8s linear infinite;\n  opacity: 0.6;\n}\n.particle[_ngcontent-%COMP%]:nth-child(odd) {\n  animation-delay: -2s;\n  animation-duration: 10s;\n}\n.particle[_ngcontent-%COMP%]:nth-child(even) {\n  animation-delay: -4s;\n  animation-duration: 12s;\n}\n@keyframes _ngcontent-%COMP%_particleFloat {\n  0% {\n    transform: translateY(100vh) translateX(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.6;\n  }\n  90% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateY(-100px) translateX(100px);\n    opacity: 0;\n  }\n}\n.not-found-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .error-number[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n  .space-elements[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .error-number[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .zero[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .not-found-container.rtl[_ngcontent-%COMP%]   .error-number[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=not-found-6K7LFUBJ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "app-not-found", standalone: false, template: `<div class="not-found-container" [class.rtl]="isRTL()">\r
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
    <!-- 404 Number with Animation -->\r
    <div class="error-number">\r
      <span class="four">4</span>\r
      <span class="zero">\r
        <div class="zero-inner">\r
          <div class="astronaut-helmet">\r
            <div class="helmet-glass"></div>\r
            <div class="helmet-reflection"></div>\r
          </div>\r
        </div>\r
      </span>\r
      <span class="four">4</span>\r
    </div>\r
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
        <i class="icon-home"></i>\r
        <span>{{ translate('not_found.back_to_earth') }}</span>\r
      </button>\r
      <button class="btn btn-secondary" (click)="goBack()">\r
        <i class="icon-back"></i>\r
        <span>{{ translate('not_found.go_back') }}</span>\r
      </button>\r
    </div>\r
\r
    <!-- Fun Elements -->\r
    <div class="space-elements">\r
      <div class="planet planet-1"></div>\r
      <div class="planet planet-2"></div>\r
      <div class="satellite">\r
        <div class="satellite-body"></div>\r
        <div class="satellite-panel panel-1"></div>\r
        <div class="satellite-panel panel-2"></div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Floating Particles -->\r
  <div class="particles">\r
    <div class="particle" *ngFor="let particle of particles"></div>\r
  </div>\r
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/not-found/not-found.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.not-found-container {\n  min-height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Space Grotesk", sans-serif;\n}\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      #1B1D21 0%,\n      #34495E 25%,\n      #E6D7A2 50%,\n      #2BA149 75%,\n      #E54B1D 100%);\n  z-index: 1;\n}\n.floating-shapes {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.shape {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.1),\n      rgba(255, 255, 255, 0.05));\n  animation: float 20s infinite linear;\n}\n.shape-1 {\n  width: 80px;\n  height: 80px;\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n  animation-duration: 25s;\n}\n.shape-2 {\n  width: 120px;\n  height: 120px;\n  top: 60%;\n  right: 15%;\n  animation-delay: -5s;\n  animation-duration: 30s;\n}\n.shape-3 {\n  width: 60px;\n  height: 60px;\n  top: 80%;\n  left: 20%;\n  animation-delay: -10s;\n  animation-duration: 20s;\n}\n.shape-4 {\n  width: 100px;\n  height: 100px;\n  top: 10%;\n  right: 30%;\n  animation-delay: -15s;\n  animation-duration: 35s;\n}\n.shape-5 {\n  width: 40px;\n  height: 40px;\n  top: 40%;\n  left: 5%;\n  animation-delay: -20s;\n  animation-duration: 15s;\n}\n@keyframes float {\n  0% {\n    transform: translateY(100vh) rotate(0deg);\n    opacity: 0;\n  }\n  10% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-100px) rotate(360deg);\n    opacity: 0;\n  }\n}\n.gradient-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      rgba(120, 119, 198, 0.3) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 70% 80%,\n      rgba(255, 119, 198, 0.2) 0%,\n      transparent 50%);\n}\n.content {\n  position: relative;\n  z-index: 10;\n  text-align: center;\n  color: white;\n  max-width: 800px;\n  padding: 2rem;\n}\n.error-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n  font-family: "Orbitron", monospace;\n  font-weight: 900;\n}\n.four {\n  font-size: clamp(8rem, 15vw, 12rem);\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149,\n      #E6D7A2,\n      #34495E);\n  background-size: 400% 400%;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradientShift 3s ease-in-out infinite;\n  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);\n}\n.zero {\n  position: relative;\n  width: clamp(8rem, 15vw, 12rem);\n  height: clamp(8rem, 15vw, 12rem);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zero-inner {\n  width: 100%;\n  height: 100%;\n  border: 8px solid transparent;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149,\n      #E6D7A2,\n      #34495E);\n  background-size: 400% 400%;\n  background-clip: padding-box;\n  animation: gradientShift 3s ease-in-out infinite, rotate 10s linear infinite;\n  position: relative;\n  overflow: hidden;\n}\n.astronaut-helmet {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  height: 60%;\n  background:\n    linear-gradient(\n      135deg,\n      #e8e8e8,\n      #f5f5f5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);\n}\n.helmet-glass {\n  width: 80%;\n  height: 80%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(100, 200, 255, 0.3),\n      rgba(200, 255, 255, 0.1));\n  border-radius: 50%;\n  position: relative;\n}\n.helmet-reflection {\n  position: absolute;\n  top: 20%;\n  left: 20%;\n  width: 30%;\n  height: 30%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.8),\n      transparent);\n  border-radius: 50%;\n  animation: reflection 2s ease-in-out infinite alternate;\n}\n@keyframes gradientShift {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes reflection {\n  from {\n    opacity: 0.3;\n  }\n  to {\n    opacity: 0.8;\n  }\n}\n.error-message {\n  margin-bottom: 3rem;\n}\n.error-title {\n  font-size: clamp(2rem, 5vw, 3.5rem);\n  font-weight: 700;\n  margin-bottom: 1rem;\n  background:\n    linear-gradient(\n      45deg,\n      #ffffff,\n      #e0e0e0);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.error-description {\n  font-size: clamp(1rem, 2.5vw, 1.2rem);\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 600px;\n  margin: 0 auto;\n}\n.action-buttons {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n.btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 50px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn:hover::before {\n  left: 100%;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      45deg,\n      #E54B1D,\n      #2BA149);\n  color: white;\n  box-shadow: 0 4px 15px rgba(229, 75, 29, 0.4);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(229, 75, 29, 0.6);\n}\n.btn-secondary {\n  background: transparent;\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.btn-secondary:hover {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n}\n.space-elements {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.planet {\n  position: absolute;\n  border-radius: 50%;\n  animation: orbit 20s linear infinite;\n}\n.planet-1 {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      45deg,\n      #E6D7A2,\n      #2BA149);\n  top: 20%;\n  right: 10%;\n  animation-delay: 0s;\n  box-shadow: 0 0 20px rgba(230, 215, 162, 0.5);\n}\n.planet-2 {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      45deg,\n      #34495E,\n      #E54B1D);\n  bottom: 30%;\n  left: 15%;\n  animation-delay: -10s;\n  box-shadow: 0 0 15px rgba(52, 73, 94, 0.5);\n}\n@keyframes orbit {\n  0% {\n    transform: rotate(0deg) translateX(100px) rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg) translateX(100px) rotate(-360deg);\n  }\n}\n.satellite {\n  position: absolute;\n  top: 15%;\n  left: 20%;\n  animation: satelliteMove 15s linear infinite;\n}\n.satellite-body {\n  width: 20px;\n  height: 20px;\n  background:\n    linear-gradient(\n      45deg,\n      #B45253,\n      #E54B1D);\n  border-radius: 3px;\n  position: relative;\n}\n.satellite-panel {\n  position: absolute;\n  background:\n    linear-gradient(\n      45deg,\n      #E6D7A2,\n      #2BA149);\n  border-radius: 2px;\n}\n.panel-1 {\n  width: 30px;\n  height: 8px;\n  top: 6px;\n  left: -5px;\n  transform: rotate(-45deg);\n}\n.panel-2 {\n  width: 30px;\n  height: 8px;\n  top: 6px;\n  right: -5px;\n  transform: rotate(45deg);\n}\n@keyframes satelliteMove {\n  0% {\n    transform: translateX(0) translateY(0);\n  }\n  25% {\n    transform: translateX(200px) translateY(-50px);\n  }\n  50% {\n    transform: translateX(400px) translateY(0);\n  }\n  75% {\n    transform: translateX(200px) translateY(50px);\n  }\n  100% {\n    transform: translateX(0) translateY(0);\n  }\n}\n.particles {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.particle {\n  position: absolute;\n  width: 2px;\n  height: 2px;\n  background: white;\n  border-radius: 50%;\n  animation: particleFloat 8s linear infinite;\n  opacity: 0.6;\n}\n.particle:nth-child(odd) {\n  animation-delay: -2s;\n  animation-duration: 10s;\n}\n.particle:nth-child(even) {\n  animation-delay: -4s;\n  animation-duration: 12s;\n}\n@keyframes particleFloat {\n  0% {\n    transform: translateY(100vh) translateX(0);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.6;\n  }\n  90% {\n    opacity: 0.6;\n  }\n  100% {\n    transform: translateY(-100px) translateX(100px);\n    opacity: 0;\n  }\n}\n.not-found-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.not-found-container.rtl .content {\n  text-align: center;\n}\n.not-found-container.rtl .error-number {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl .action-buttons {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl .btn {\n  flex-direction: row-reverse;\n}\n.not-found-container.rtl .btn i {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n@media (max-width: 768px) {\n  .content {\n    padding: 1rem;\n  }\n  .action-buttons {\n    flex-direction: column;\n    align-items: center;\n  }\n  .btn {\n    width: 100%;\n    max-width: 300px;\n  }\n  .space-elements {\n    display: none;\n  }\n  .not-found-container.rtl .action-buttons {\n    flex-direction: column;\n  }\n  .not-found-container.rtl .btn {\n    flex-direction: row;\n  }\n  .not-found-container.rtl .btn i {\n    margin-left: 0;\n    margin-right: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .error-number {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .zero {\n    margin: 0;\n  }\n  .not-found-container.rtl .error-number {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=not-found-6K7LFUBJ.css.map */\n'] }]
  }], () => [{ type: Location }, { type: Router }, { type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "src/app/components/not-found/not-found.ts", lineNumber: 12 });
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
//# sourceMappingURL=chunk-IRDYBMGT.js.map
