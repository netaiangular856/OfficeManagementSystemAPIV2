import {
  AddNotificationModalComponent,
  NotificationDropdownComponent,
  SharedModule,
  SidebarComponent
} from "./chunk-NGX3ER46.js";
import "./chunk-ROWEGEGF.js";
import {
  AuthService
} from "./chunk-UUDIADNF.js";
import "./chunk-P4Q5J7RB.js";
import {
  Router,
  RouterModule,
  RouterOutlet
} from "./chunk-IHVPCVXT.js";
import "./chunk-KSXFQXVU.js";
import "./chunk-A4IG6PG4.js";
import "./chunk-TBUK7V5T.js";
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
} from "./chunk-MGTM5SLA.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/layout/layout.component.ts
function LayoutComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function LayoutComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLogoutConfirm());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function LayoutComponent_div_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 19);
    \u0275\u0275element(4, "path", 20)(5, "polyline", 21)(6, "line", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "button", 26);
    \u0275\u0275listener("click", function LayoutComponent_div_22_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeLogoutConfirm());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 27);
    \u0275\u0275listener("click", function LayoutComponent_div_22_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
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
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: false, decls: 24, vars: 17, consts: [[1, "app-layout", "custom-scrollbar"], [3, "collapsedChange", "logoutConfirmRequested", "notificationModalRequested", "rtl"], [1, "content-area"], [1, "app-header"], [1, "header-content"], [1, "header-actions"], [1, "language-toggle"], [1, "lang-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], [1, "header-notification-dropdown", 3, "isRTL"], [1, "main-content", "custom-scrollbar"], ["class", "logout-confirm-overlay", 3, "click", 4, "ngIf"], [3, "closeModal", "sendNotification", "isRTL", "isOpen"], [1, "logout-confirm-overlay", 3, "click"], [1, "logout-confirm-modal", 3, "click"], [1, "logout-confirm-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16,17 21,12 16,7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "logout-confirm-title"], [1, "logout-confirm-message"], [1, "logout-confirm-actions"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-logout", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-sidebar", 1);
      \u0275\u0275listener("collapsedChange", function LayoutComponent_Template_app_sidebar_collapsedChange_1_listener($event) {
        return ctx.onSidebarCollapsed($event);
      })("logoutConfirmRequested", function LayoutComponent_Template_app_sidebar_logoutConfirmRequested_1_listener() {
        return ctx.onLogoutConfirmRequested();
      })("notificationModalRequested", function LayoutComponent_Template_app_sidebar_notificationModalRequested_1_listener() {
        return ctx.openNotificationModal();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "header", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_7_listener() {
        return ctx.setLanguage("en");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "circle", 9)(10, "line", 10)(11, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " EN ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_13_listener() {
        return ctx.setLanguage("ar");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 8);
      \u0275\u0275element(15, "circle", 9)(16, "line", 10)(17, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " AR ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(19, "app-notification-dropdown", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "main", 13);
      \u0275\u0275element(21, "router-outlet");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, LayoutComponent_div_22_Template, 16, 4, "div", 14);
      \u0275\u0275elementStart(23, "app-add-notification-modal", 15);
      \u0275\u0275listener("closeModal", function LayoutComponent_Template_app_add_notification_modal_closeModal_23_listener() {
        return ctx.closeNotificationModal();
      })("sendNotification", function LayoutComponent_Template_app_add_notification_modal_sendNotification_23_listener($event) {
        return ctx.onSendNotification($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", ctx.sidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentLang() === "en");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("active", ctx.currentLang() === "ar");
      \u0275\u0275advance(6);
      \u0275\u0275property("isRTL", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showLogoutConfirm());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL())("isOpen", ctx.showNotificationModal());
    }
  }, dependencies: [NgIf, RouterOutlet, SidebarComponent, NotificationDropdownComponent, AddNotificationModalComponent], styles: ['\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  margin: 1rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 2rem;\n  flex-direction: row;\n}\n.header-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir[ltr] {\n  flex-direction: row-reverse !important;\n  justify-content: start !important;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n  padding: 0.5rem;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.1);\n  transform: translateY(-1px);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #09365F;\n  white-space: nowrap;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  order: 2;\n}\n.header-actions.rtl[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions[_ngcontent-%COMP%]:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.25rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 36px;\n  min-width: 48px;\n  justify-content: center;\n}\n.lang-btn.active[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 8px rgba(21, 134, 56, 0.3);\n}\n.lang-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: rgba(229, 231, 235, 0.8);\n  color: #374151;\n}\n.lang-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  right: auto;\n  left: -5px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: var(--brand-green);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 2rem;\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 768px) {\n  .content-area[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n  .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n  .app-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0.5rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .header-actions.rtl[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions[_ngcontent-%COMP%]:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    padding: 0.125rem;\n  }\n  .lang-btn[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.75rem;\n    font-size: 0.8rem;\n    min-width: 40px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.logout-confirm-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.logout-confirm-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.logout-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n  }\n  .logout-confirm-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: false, template: `<div class="app-layout custom-scrollbar" [class.rtl]="isRTL()">\r
  <app-sidebar \r
    [rtl]="isRTL()" \r
    (collapsedChange)="onSidebarCollapsed($event)"\r
    (logoutConfirmRequested)="onLogoutConfirmRequested()"\r
    (notificationModalRequested)="openNotificationModal()">\r
  </app-sidebar>\r
  \r
  <div class="content-area" [class.sidebar-collapsed]="sidebarCollapsed()">\r
    <header class="app-header" [class.rtl]="isRTL()">\r
      <div class="header-content">\r
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
`, styles: ['/* src/app/components/layout/layout.component.css */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr,\nhtml[dir=ltr] .app-layout {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl,\nhtml[dir=rtl] .app-layout {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl .content-area {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout .content-area.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl .content-area.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header {\n  background: transparent;\n  padding: 1rem 2rem;\n  border-radius: 15px;\n  margin: 1rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 2rem;\n  flex-direction: row;\n}\n.header-content :dir[ltr] {\n  flex-direction: row-reverse !important;\n  justify-content: start !important;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 8px;\n  padding: 0.5rem;\n}\n.user-profile:hover {\n  background: rgba(21, 134, 56, 0.1);\n  transform: translateY(-1px);\n}\n.user-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #09365F;\n  white-space: nowrap;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  order: 2;\n}\n.header-actions.rtl {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown {\n  position: relative;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.25rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-btn {\n  background: transparent;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-height: 36px;\n  min-width: 48px;\n  justify-content: center;\n}\n.lang-btn.active {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 8px rgba(21, 134, 56, 0.3);\n}\n.lang-btn:hover:not(.active) {\n  background: rgba(229, 231, 235, 0.8);\n  color: #374151;\n}\n.lang-btn svg {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active svg {\n  transform: scale(1.1);\n}\n.app-header.rtl .header-content {\n  justify-content: flex-start;\n}\n.app-header.rtl .header-actions {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header:not(.rtl) .header-content {\n  justify-content: flex-end;\n}\n.app-header:not(.rtl) .header-actions {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl .notification-badge {\n  right: auto;\n  left: -5px;\n}\n.page-title {\n  color: var(--brand-green);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content {\n  flex: 1;\n  background-color: white;\n  padding: 2rem;\n}\n.main-content.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl .main-content.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 768px) {\n  .content-area {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n  .main-content.sidebar-collapsed {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl .main-content.sidebar-collapsed {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n  .app-header {\n    padding: 1rem;\n    margin: 0.5rem;\n  }\n  .header-content {\n    gap: 1rem;\n  }\n  .header-actions {\n    gap: 1rem;\n  }\n  .header-actions.rtl {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name {\n    font-size: 0.875rem;\n  }\n  .language-toggle {\n    padding: 0.125rem;\n  }\n  .lang-btn {\n    padding: 0.375rem 0.75rem;\n    font-size: 0.8rem;\n    min-width: 40px;\n  }\n  .main-content {\n    padding: 1rem;\n  }\n  .app-layout .content-area {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout .content-area {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #ef4444;\n}\n.logout-confirm-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.logout-confirm-message {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.logout-confirm-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .main-content {\n    padding: 0.2rem;\n  }\n  .logout-confirm-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */\n'] }]
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

// src/app/components/layout/layout-routing.module.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-3VCB2EUU.js").then((m) => m.DashboardModule)
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-WNSMQSUU.js").then((m) => m.UsersModule)
      },
      {
        path: "employees",
        loadChildren: () => import("./chunk-HKITRM24.js").then((m) => m.EmployeesModule)
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-4BJPQ5JW.js").then((m) => m.ProfileComponent)
      },
      {
        path: "departments",
        loadChildren: () => import("./chunk-CSKJKWZG.js").then((m) => m.DepartmentsModule)
      },
      {
        path: "tasks",
        loadChildren: () => import("./chunk-4IT5LWIL.js").then((m) => m.TasksModule)
      },
      {
        path: "partners",
        loadChildren: () => import("./chunk-NLAHZ2CL.js").then((m) => m.PartnersModule)
      },
      {
        path: "visits",
        loadChildren: () => import("./chunk-D2FSA7BE.js").then((m) => m.VisitsModule)
      },
      {
        path: "travel",
        loadChildren: () => import("./chunk-MW64N6HA.js").then((m) => m.TravelModule)
      },
      {
        path: "meetings",
        loadChildren: () => import("./chunk-7HMQGXM3.js").then((m) => m.MeetingsModule)
      },
      {
        path: "letters",
        loadChildren: () => import("./chunk-LPOMGDWZ.js").then((m) => m.LettersModule)
      },
      {
        path: "documents",
        loadChildren: () => import("./chunk-R73G62XF.js").then((m) => m.DocumentsModule)
      },
      {
        path: "workflow",
        loadChildren: () => import("./chunk-ZK27OVNX.js").then((m) => m.WorkflowModule)
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
//# sourceMappingURL=chunk-LZOBJAN7.js.map
