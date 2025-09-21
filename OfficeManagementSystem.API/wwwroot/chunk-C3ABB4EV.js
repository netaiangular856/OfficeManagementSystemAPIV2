import {
  AddNotificationModalComponent,
  NotificationDropdownComponent,
  SharedModule,
  SidebarComponent
} from "./chunk-Q3OCNH2X.js";
import "./chunk-AB3H54HS.js";
import {
  AuthService
} from "./chunk-MTXLR2EH.js";
import "./chunk-WEYYT6CR.js";
import "./chunk-N3L5GGM5.js";
import {
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-O632SAIF.js";
import "./chunk-FKP4CUQH.js";
import "./chunk-OTJ6H5LH.js";
import "./chunk-ODVCO6WW.js";
import {
  CommonModule,
  Component,
  Injectable,
  LangService,
  NgIf,
  NgModule,
  TranslationService,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-66AA6EL7.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/layout/layout.component.ts
function LayoutComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function LayoutComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMobileSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 19);
    \u0275\u0275element(2, "line", 20)(3, "line", 21)(4, "line", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r1.mobileSidebarOpen())("aria-label", ctx_r1.mobileSidebarOpen() ? "Close sidebar" : "Open sidebar");
  }
}
function LayoutComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function LayoutComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function LayoutComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLogoutConfirm());
    });
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275listener("click", function LayoutComponent_div_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 27);
    \u0275\u0275element(4, "path", 28)(5, "polyline", 29)(6, "line", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33)(12, "button", 34);
    \u0275\u0275listener("click", function LayoutComponent_div_24_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLogoutConfirm());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 35);
    \u0275\u0275listener("click", function LayoutComponent_div_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.logout_confirmation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.logout_confirm_message"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("sidebar.logout"), " ");
  }
}
var LayoutComponent = class _LayoutComponent {
  langService;
  authService;
  router;
  translationService;
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  user;
  sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  showLogoutConfirm = signal(false, ...ngDevMode ? [{ debugName: "showLogoutConfirm" }] : []);
  showNotificationModal = signal(false, ...ngDevMode ? [{ debugName: "showNotificationModal" }] : []);
  isMobile = signal(false, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  mobileSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileSidebarOpen" }] : []);
  constructor(langService, authService, router, translationService) {
    this.langService = langService;
    this.authService = authService;
    this.router = router;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
      const stored = localStorage.getItem("user");
      this.user = stored ? JSON.parse(stored) : null;
    });
    this.checkScreenSize();
    window.addEventListener("resize", () => this.checkScreenSize());
    console.log("Layout component initialized");
  }
  onSidebarCollapsed(collapsed) {
    this.sidebarCollapsed.set(collapsed);
  }
  setLanguage(lang) {
    this.langService.setLanguage(lang);
    console.log("Language changed to:", lang);
  }
  onLogoutConfirmRequested() {
    this.showLogoutConfirm.set(true);
  }
  closeLogoutConfirm() {
    this.showLogoutConfirm.set(false);
  }
  // Notification modal methods
  openNotificationModal() {
    this.showNotificationModal.set(true);
  }
  closeNotificationModal() {
    this.showNotificationModal.set(false);
  }
  onSendNotification(notification) {
    console.log("Notification sent:", notification);
    this.closeNotificationModal();
  }
  logout() {
    this.showLogoutConfirm.set(false);
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/auth/login"]);
      },
      error: (error) => {
        console.error("Logout error:", error);
        this.router.navigate(["/auth/login"]);
      }
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    this.isMobile.set(isMobile);
    if (!isMobile && this.mobileSidebarOpen()) {
      this.mobileSidebarOpen.set(false);
    }
  }
  toggleMobileSidebar() {
    this.mobileSidebarOpen.update((open) => !open);
  }
  closeMobileSidebar() {
    this.mobileSidebarOpen.set(false);
  }
  ngOnDestroy() {
    window.removeEventListener("resize", () => this.checkScreenSize());
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: false, decls: 26, vars: 21, consts: [[1, "app-layout", "custom-scrollbar"], [3, "collapsedChange", "logoutConfirmRequested", "notificationModalRequested", "mobileSidebarClose", "rtl", "isMobile", "mobileOpen"], [1, "content-area"], [1, "app-header"], [1, "header-content"], ["class", "mobile-sidebar-toggle", 3, "click", 4, "ngIf"], [1, "header-actions"], [1, "language-toggle"], [1, "lang-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], [1, "header-notification-dropdown", 3, "isRTL"], [1, "main-content", "custom-scrollbar"], ["class", "mobile-sidebar-overlay", 3, "click", 4, "ngIf"], ["class", "logout-confirm-overlay", 3, "click", 4, "ngIf"], [3, "closeModal", "sendNotification", "isRTL", "isOpen"], [1, "mobile-sidebar-toggle", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "mobile-sidebar-overlay", 3, "click"], [1, "logout-confirm-overlay", 3, "click"], [1, "logout-confirm-modal", 3, "click"], [1, "logout-confirm-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16,17 21,12 16,7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "logout-confirm-title"], [1, "logout-confirm-message"], [1, "logout-confirm-actions"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-logout", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidebar", 1);
      \u0275\u0275listener("collapsedChange", function LayoutComponent_Template_app_sidebar_collapsedChange_1_listener($event) {
        return ctx.onSidebarCollapsed($event);
      })("logoutConfirmRequested", function LayoutComponent_Template_app_sidebar_logoutConfirmRequested_1_listener() {
        return ctx.onLogoutConfirmRequested();
      })("notificationModalRequested", function LayoutComponent_Template_app_sidebar_notificationModalRequested_1_listener() {
        return ctx.openNotificationModal();
      })("mobileSidebarClose", function LayoutComponent_Template_app_sidebar_mobileSidebarClose_1_listener() {
        return ctx.closeMobileSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "div", 4);
      \u0275\u0275template(5, LayoutComponent_button_5_Template, 5, 2, "button", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_8_listener() {
        return ctx.setLanguage("en");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "circle", 10)(11, "line", 11)(12, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " EN ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_14_listener() {
        return ctx.setLanguage("ar");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 9);
      \u0275\u0275element(16, "circle", 10)(17, "line", 11)(18, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " AR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(20, "app-notification-dropdown", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "main", 14);
      \u0275\u0275element(22, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(23, LayoutComponent_div_23_Template, 1, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, LayoutComponent_div_24_Template, 16, 4, "div", 16);
      \u0275\u0275elementStart(25, "app-add-notification-modal", 17);
      \u0275\u0275listener("closeModal", function LayoutComponent_Template_app_add_notification_modal_closeModal_25_listener() {
        return ctx.closeNotificationModal();
      })("sendNotification", function LayoutComponent_Template_app_add_notification_modal_sendNotification_25_listener($event) {
        return ctx.onSendNotification($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("rtl", ctx.isRTL())("isMobile", ctx.isMobile())("mobileOpen", ctx.mobileSidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", ctx.sidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isMobile());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentLang() === "en");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.currentLang() === "ar");
      \u0275\u0275advance(6);
      \u0275\u0275property("isRTL", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isMobile() && ctx.mobileSidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLogoutConfirm());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL())("isOpen", ctx.showNotificationModal());
    }
  }, dependencies: [NgIf, RouterOutlet, SidebarComponent, NotificationDropdownComponent, AddNotificationModalComponent], styles: ['\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  margin: 1rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  flex-direction: row;\n}\n.header-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir[ltr] {\n  flex-direction: row !important;\n  justify-content: space-between !important;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n  padding: 0.5rem;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 170, 58, 0.1);\n  transform: translateY(-1px);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #5F646D;\n  white-space: nowrap;\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border: none;\n  color: #FFFFFF;\n  padding: 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]:hover {\n  background: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.4);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.mobile-sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 998;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  order: 2;\n}\n.header-actions.rtl[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions[_ngcontent-%COMP%]:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.25rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #5F646D;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 36px;\n  min-width: 48px;\n  justify-content: center;\n}\n.lang-btn.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.lang-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #E6D7A2;\n  color: #5F646D;\n}\n.lang-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  right: auto;\n  left: -5px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: var(--brand-green);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 2rem;\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 768px) {\n  .mobile-sidebar-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0.5rem 1rem !important;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .header-actions.rtl[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions[_ngcontent-%COMP%]:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    padding: 0.125rem;\n  }\n  .lang-btn[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.75rem;\n    font-size: 0.8rem;\n    min-width: 40px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.logout-confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.logout-confirm-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.logout-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n  }\n  .logout-confirm-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component-HHNVSHQJ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: false, template: `<div class="app-layout custom-scrollbar" [class.rtl]="isRTL()">\r
  <app-sidebar \r
    [rtl]="isRTL()" \r
    [isMobile]="isMobile()"\r
    [mobileOpen]="mobileSidebarOpen()"\r
    (collapsedChange)="onSidebarCollapsed($event)"\r
    (logoutConfirmRequested)="onLogoutConfirmRequested()"\r
    (notificationModalRequested)="openNotificationModal()"\r
    (mobileSidebarClose)="closeMobileSidebar()">\r
  </app-sidebar>\r
  \r
  <div class="content-area" [class.sidebar-collapsed]="sidebarCollapsed()">\r
    <header class="app-header" [class.rtl]="isRTL()">\r
      <div class="header-content">\r
        <!-- Mobile Sidebar Toggle Button -->\r
        <button \r
          *ngIf="isMobile()"\r
          class="mobile-sidebar-toggle"\r
          (click)="toggleMobileSidebar()"\r
          [attr.aria-expanded]="mobileSidebarOpen()"\r
          [attr.aria-label]="mobileSidebarOpen() ? 'Close sidebar' : 'Open sidebar'">\r
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="3" y1="12" x2="21" y2="12"></line>\r
            <line x1="3" y1="6" x2="21" y2="6"></line>\r
            <line x1="3" y1="18" x2="21" y2="18"></line>\r
          </svg>\r
        </button>\r
        \r
        <div class="header-actions" [class.rtl]="isRTL()">\r
          <div class="language-toggle">\r
            <button class="lang-btn" [class.active]="currentLang() === 'en'" (click)="setLanguage('en')">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="12" cy="12" r="10"></circle>\r
                <line x1="2" y1="12" x2="22" y2="12"></line>\r
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>\r
              </svg>\r
              EN\r
            </button>\r
            \r
            <button class="lang-btn" [class.active]="currentLang() === 'ar'" (click)="setLanguage('ar')">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="12" cy="12" r="10"></circle>\r
                <line x1="2" y1="12" x2="22" y2="12"></line>\r
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>\r
              </svg>\r
              AR\r
            </button>\r
          </div>\r
          <!-- Notification Dropdown -->\r
          <app-notification-dropdown \r
            [isRTL]="isRTL()"\r
            class="header-notification-dropdown">\r
          </app-notification-dropdown>\r
        </div>\r
      </div>\r
    </header>\r
    \r
    <main class="main-content custom-scrollbar">\r
      <router-outlet></router-outlet>\r
    </main>\r
  </div>\r
  \r
  <!-- Mobile Sidebar Overlay -->\r
  <div \r
    *ngIf="isMobile() && mobileSidebarOpen()"\r
    class="mobile-sidebar-overlay"\r
    (click)="closeMobileSidebar()">\r
  </div>\r
</div>\r
\r
<!-- Logout Confirmation Modal - Outside sidebar for proper overlay -->\r
<div class="logout-confirm-overlay" *ngIf="showLogoutConfirm()" (click)="closeLogoutConfirm()">\r
  <div class="logout-confirm-modal" (click)="$event.stopPropagation()">\r
    <div class="logout-confirm-icon">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>\r
        <polyline points="16,17 21,12 16,7"></polyline>\r
        <line x1="21" y1="12" x2="9" y2="12"></line>\r
      </svg>\r
    </div>\r
    <h3 class="logout-confirm-title">{{ translate('sidebar.logout_confirmation') }}</h3>\r
    <p class="logout-confirm-message">{{ translate('sidebar.logout_confirm_message') }}</p>\r
    <div class="logout-confirm-actions">\r
      <button class="btn btn-cancel" (click)="closeLogoutConfirm()">\r
        {{ translate('common.cancel') }}\r
      </button>\r
      <button class="btn btn-logout" (click)="logout()">\r
        {{ translate('sidebar.logout') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Add Notification Modal - Outside sidebar for proper overlay -->\r
<app-add-notification-modal\r
  [isRTL]="isRTL()"\r
  [isOpen]="showNotificationModal()"\r
  (closeModal)="closeNotificationModal()"\r
  (sendNotification)="onSendNotification($event)">\r
</app-add-notification-modal>\r
\r
\r
\r
\r
`, styles: ['/* src/app/components/layout/layout.component.css */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr,\nhtml[dir=ltr] .app-layout {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl,\nhtml[dir=rtl] .app-layout {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl .content-area {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout .content-area.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl .content-area.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header {\n  background: transparent;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  margin: 1rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  flex-direction: row;\n}\n.header-content :dir[ltr] {\n  flex-direction: row !important;\n  justify-content: space-between !important;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n  padding: 0.5rem;\n}\n.user-profile:hover {\n  background: rgba(212, 170, 58, 0.1);\n  transform: translateY(-1px);\n}\n.user-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #5F646D;\n  white-space: nowrap;\n}\n.mobile-sidebar-toggle {\n  background: #B68A35;\n  border: none;\n  color: #FFFFFF;\n  padding: 0.75rem;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.mobile-sidebar-toggle:hover {\n  background: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.4);\n}\n.mobile-sidebar-toggle:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.mobile-sidebar-toggle svg {\n  transition: transform 0.3s ease;\n}\n.mobile-sidebar-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 998;\n  opacity: 0;\n  animation: fadeIn 0.3s ease forwards;\n}\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  order: 2;\n}\n.header-actions.rtl {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown {\n  position: relative;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.25rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn {\n  background: transparent;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #5F646D;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 36px;\n  min-width: 48px;\n  justify-content: center;\n}\n.lang-btn.active {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.lang-btn:hover:not(.active) {\n  background: #E6D7A2;\n  color: #5F646D;\n}\n.lang-btn svg {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active svg {\n  transform: scale(1.1);\n}\n.app-header.rtl .header-content {\n  justify-content: flex-start;\n}\n.app-header.rtl .header-actions {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header:not(.rtl) .header-content {\n  justify-content: flex-end;\n}\n.app-header:not(.rtl) .header-actions {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl .notification-badge {\n  right: auto;\n  left: -5px;\n}\n.page-title {\n  color: var(--brand-green);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content {\n  flex: 1;\n  background-color: white;\n  padding: 2rem;\n}\n.main-content.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl .main-content.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 768px) {\n  .mobile-sidebar-toggle {\n    display: flex;\n  }\n  .content-area {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .main-content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-layout.rtl .main-content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-header {\n    padding: 1rem;\n    margin: 0.5rem 1rem !important;\n  }\n  .header-content {\n    gap: 1rem;\n  }\n  .header-actions {\n    gap: 1rem;\n  }\n  .header-actions.rtl {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name {\n    font-size: 0.875rem;\n  }\n  .language-toggle {\n    padding: 0.125rem;\n  }\n  .lang-btn {\n    padding: 0.375rem 0.75rem;\n    font-size: 0.8rem;\n    min-width: 40px;\n  }\n  .main-content {\n    padding: 1rem;\n  }\n  .app-layout .content-area {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout .content-area {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.logout-confirm-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.logout-confirm-message {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.logout-confirm-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .main-content {\n    padding: 0.2rem;\n  }\n  .logout-confirm-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component-HHNVSHQJ.css.map */\n'] }]
  }], () => [{ type: LangService }, { type: AuthService }, { type: Router }, { type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/components/layout/layout.component.ts", lineNumber: 14 });
})();

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  router;
  authService;
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: AuthService }], null);
})();

// src/app/guards/permission.guard.ts
var PermissionGuard = class _PermissionGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }
    const requiredPermission = route.data["permission"];
    if (!requiredPermission) {
      return true;
    }
    const hasPermission = this.authService.hasPermission(requiredPermission);
    if (!hasPermission) {
      this.router.navigate(["/unauthorized"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function PermissionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionGuard, factory: _PermissionGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/components/layout/layout-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-XVY5WPN4.js").then((m) => m.DashboardModule),
        canActivate: [PermissionGuard],
        data: { permission: "dashboard.index" }
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-LFWJYN6P.js").then((m) => m.UsersModule),
        canActivate: [PermissionGuard],
        data: { permission: "user.index" }
      },
      {
        path: "roles",
        loadChildren: () => import("./chunk-GJQSRXJ6.js").then((m) => m.RolesModule),
        canActivate: [PermissionGuard],
        data: { permission: "admin.index" }
      },
      {
        path: "employees",
        loadChildren: () => import("./chunk-Y3SFJ7DL.js").then((m) => m.EmployeesModule),
        canActivate: [PermissionGuard],
        data: { permission: "employee.index" }
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-QUBNDZ44.js").then((m) => m.ProfileComponent)
      },
      {
        path: "departments",
        loadChildren: () => import("./chunk-HBNBMZMP.js").then((m) => m.DepartmentsModule),
        canActivate: [PermissionGuard],
        data: { permission: "department.index" }
      },
      {
        path: "tasks",
        loadChildren: () => import("./chunk-VICGLTXX.js").then((m) => m.TasksModule),
        canActivate: [PermissionGuard],
        data: { permission: "task.index" }
      },
      {
        path: "partners",
        loadChildren: () => import("./chunk-HMZ6HJKG.js").then((m) => m.PartnersModule),
        canActivate: [PermissionGuard],
        data: { permission: "partners.index" }
      },
      {
        path: "visits",
        loadChildren: () => import("./chunk-3J3WIMDX.js").then((m) => m.VisitsModule),
        canActivate: [PermissionGuard],
        data: { permission: "visits.index" }
      },
      {
        path: "travel",
        loadChildren: () => import("./chunk-YABVEQFC.js").then((m) => m.TravelModule),
        canActivate: [PermissionGuard],
        data: { permission: "travel.index" }
      },
      {
        path: "meetings",
        loadChildren: () => import("./chunk-R2APWEJP.js").then((m) => m.MeetingsModule),
        canActivate: [PermissionGuard],
        data: { permission: "meeting.index" }
      },
      {
        path: "my-calendar",
        loadChildren: () => import("./chunk-H7YNEM3U.js").then((m) => m.CalendarModule),
        canActivate: [PermissionGuard],
        data: { permission: "calendar.index" }
      },
      {
        path: "calendar",
        loadChildren: () => import("./chunk-SPEXXWSL.js").then((m) => m.SystemCalendarModule),
        canActivate: [PermissionGuard],
        data: { permission: "calendar.events.get" }
      },
      {
        path: "letters",
        loadChildren: () => import("./chunk-CXI6XI3R.js").then((m) => m.LettersModule),
        canActivate: [PermissionGuard],
        data: { permission: "letter.index" }
      },
      {
        path: "documents",
        loadChildren: () => import("./chunk-XGZAWJVN.js").then((m) => m.DocumentsModule),
        canActivate: [PermissionGuard],
        data: { permission: "documents.index" }
      },
      {
        path: "workflow",
        loadChildren: () => import("./chunk-7MRLBUMV.js").then((m) => m.WorkflowModule),
        canActivate: [PermissionGuard],
        data: { permission: "workFlow.index" }
      }
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ],
    canActivate: [AuthGuard]
  }
];
var LayoutRoutingModule = class _LayoutRoutingModule {
  static \u0275fac = function LayoutRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/layout/layout.module.ts
var LayoutModule = class _LayoutModule {
  static \u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LayoutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    LayoutRoutingModule,
    SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LayoutComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        LayoutRoutingModule,
        SharedModule
      ],
      exports: [
        LayoutComponent
      ]
    }]
  }], null, null);
})();
export {
  LayoutModule
};
//# sourceMappingURL=chunk-C3ABB4EV.js.map
