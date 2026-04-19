import {
  PermissionGuard
} from "./chunk-SSHCWUIF.js";
import {
  AddNotificationModalComponent,
  NotificationDropdownComponent,
  SharedModule,
  SidebarComponent
} from "./chunk-MEXZR5J4.js";
import "./chunk-3KSNCDS2.js";
import "./chunk-LL4SE2Y3.js";
import {
  AuthService
} from "./chunk-WFDNWXZA.js";
import "./chunk-3NDCE7HG.js";
import {
  ImageService
} from "./chunk-N3R5LOFH.js";
import {
  ProfileService
} from "./chunk-P35E4WF6.js";
import "./chunk-2OJPVZW4.js";
import "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  HostListener,
  Injectable,
  LangService,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  RouterOutlet,
  TranslationService,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-L7ZNDW2L.js";
import "./chunk-XWLXMCJQ.js";

// src/app/components/layout/layout.component.ts
var _c0 = ["profileMenuContainer"];
function LayoutComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function LayoutComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMobileSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "line", 36)(3, "line", 37)(4, "line", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", ctx_r2.mobileSidebarOpen())("aria-label", ctx_r2.mobileSidebarOpen() ? "Close sidebar" : "Open sidebar");
  }
}
function LayoutComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.user == null ? null : ctx_r2.user.email);
  }
}
function LayoutComponent_div_31_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.user == null ? null : ctx_r2.user.email);
  }
}
function LayoutComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "img", 43);
    \u0275\u0275listener("error", function LayoutComponent_div_31_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAvatarError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44)(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LayoutComponent_div_31_span_7_Template, 2, 1, "span", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 47)(9, "button", 48);
    \u0275\u0275listener("click", function LayoutComponent_div_31_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProfileMenuSelect("profile"));
    });
    \u0275\u0275elementStart(10, "span", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 11);
    \u0275\u0275element(12, "path", 50)(13, "circle", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 52)(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 54);
    \u0275\u0275listener("click", function LayoutComponent_div_31_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProfileMenuSelect("logout"));
    });
    \u0275\u0275elementStart(18, "span", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 11);
    \u0275\u0275element(20, "path", 56)(21, "polyline", 57)(22, "line", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span", 52)(24, "span", 53);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rtl", ctx_r2.isRTL());
    \u0275\u0275attribute("id", ctx_r2.profileMenuId)("aria-label", ctx_r2.translate("login.profile"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.getUserImageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r2.getUserFullName());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getUserFullName(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.user == null ? null : ctx_r2.user.email);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.translate("login.profile"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.translate("login.logout"));
  }
}
function LayoutComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function LayoutComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function LayoutComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function LayoutComponent_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLogoutConfirm());
    });
    \u0275\u0275elementStart(1, "div", 62);
    \u0275\u0275listener("click", function LayoutComponent_div_36_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 64);
    \u0275\u0275element(4, "path", 56)(5, "polyline", 57)(6, "line", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 67)(12, "button", 68);
    \u0275\u0275listener("click", function LayoutComponent_div_36_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLogoutConfirm());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 69);
    \u0275\u0275listener("click", function LayoutComponent_div_36_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.translate("sidebar.logout_confirmation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("sidebar.logout_confirm_message"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("sidebar.logout"), " ");
  }
}
var LayoutComponent = class _LayoutComponent {
  langService;
  authService;
  router;
  translationService;
  profileService;
  imageService;
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  user;
  sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  showLogoutConfirm = signal(false, ...ngDevMode ? [{ debugName: "showLogoutConfirm" }] : []);
  showNotificationModal = signal(false, ...ngDevMode ? [{ debugName: "showNotificationModal" }] : []);
  isMobile = signal(false, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  mobileSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileSidebarOpen" }] : []);
  showProfileMenu = signal(false, ...ngDevMode ? [{ debugName: "showProfileMenu" }] : []);
  profileMenuId = "profile-menu-panel";
  defaultAvatar = "assets/images/user.png";
  profileSubscription;
  userProfile = null;
  profileMenuContainer;
  resizeListener = () => this.checkScreenSize();
  constructor(langService, authService, router, translationService, profileService, imageService) {
    this.langService = langService;
    this.authService = authService;
    this.router = router;
    this.translationService = translationService;
    this.profileService = profileService;
    this.imageService = imageService;
  }
  ngOnInit() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
      const stored = localStorage.getItem("user");
      this.user = stored ? JSON.parse(stored) : null;
    });
    this.loadUserProfile();
    this.checkScreenSize();
    window.addEventListener("resize", this.resizeListener);
  }
  onSidebarCollapsed(collapsed) {
    this.sidebarCollapsed.set(collapsed);
  }
  setLanguage(lang) {
    this.langService.setLanguage(lang);
    console.log("Language changed to:", lang);
  }
  toggleLanguage() {
    this.langService.toggleLanguage();
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
  toggleProfileMenu(event) {
    event.stopPropagation();
    this.showProfileMenu.update((open) => !open);
  }
  closeProfileMenu() {
    if (this.showProfileMenu()) {
      this.showProfileMenu.set(false);
    }
  }
  onProfileMenuSelect(action) {
    this.closeProfileMenu();
    if (action === "profile") {
      this.navigateToProfile();
    } else {
      this.onLogoutConfirmRequested();
    }
  }
  navigateToProfile() {
    this.router.navigate(["/profile"]);
  }
  getUserFullName() {
    if (this.userProfile) {
      const first = this.userProfile.firstName || "";
      const last = this.userProfile.lastName || "";
      const fullName = `${first} ${last}`.trim();
      if (fullName) {
        return fullName;
      }
      if (this.userProfile.email) {
        return this.userProfile.email;
      }
    }
    if (this.user) {
      const first = this.user.firstName || "";
      const last = this.user.lastName || "";
      const fullName = `${first} ${last}`.trim();
      if (fullName) {
        return fullName;
      }
      if (this.user.email) {
        return this.user.email;
      }
    }
    return this.translate("login.profile");
  }
  getUserInitials() {
    if (this.userProfile) {
      const first = (this.userProfile.firstName || "").charAt(0);
      const last = (this.userProfile.lastName || "").charAt(0);
      const initials = `${first}${last}`.trim();
      if (initials) {
        return initials.toUpperCase();
      }
      if (this.userProfile.email) {
        return this.userProfile.email.charAt(0).toUpperCase();
      }
    }
    if (this.user) {
      const first = (this.user.firstName || "").charAt(0);
      const last = (this.user.lastName || "").charAt(0);
      const initials = `${first}${last}`.trim();
      if (initials) {
        return initials.toUpperCase();
      }
      if (this.user.email) {
        return this.user.email.charAt(0).toUpperCase();
      }
    }
    return "U";
  }
  getUserImageUrl() {
    if (this.userProfile) {
      return this.imageService.getImageUrl(this.userProfile.imageUrl, this.getUserFullName());
    }
    if (this.user?.imageUrl) {
      return this.user.imageUrl;
    }
    return this.defaultAvatar;
  }
  onAvatarError(event) {
    const target = event.target;
    if (target && target.src !== this.defaultAvatar) {
      target.src = this.defaultAvatar;
    }
  }
  ngOnDestroy() {
    window.removeEventListener("resize", this.resizeListener);
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
  onDocumentClick(event) {
    if (!this.showProfileMenu()) {
      return;
    }
    const target = event.target;
    const container = this.profileMenuContainer?.nativeElement;
    if (container && !container.contains(target)) {
      this.closeProfileMenu();
    }
  }
  onEscapePress() {
    this.closeProfileMenu();
  }
  loadUserProfile() {
    this.profileSubscription = this.profileService.getProfile().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.userProfile = response.data;
        }
      },
      error: (error) => {
        console.error("Error loading user profile for header:", error);
      }
    });
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ImageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.profileMenuContainer = _t.first);
    }
  }, hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function LayoutComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function LayoutComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapePress();
      }, \u0275\u0275resolveDocument);
    }
  }, standalone: false, decls: 38, vars: 34, consts: [["profileMenuContainer", ""], [1, "app-layout", "custom-scrollbar"], [3, "collapsedChange", "logoutConfirmRequested", "notificationModalRequested", "mobileSidebarClose", "rtl", "isMobile", "mobileOpen"], [1, "content-area"], [1, "app-header"], [1, "header-content"], ["class", "mobile-sidebar-toggle", 3, "click", 4, "ngIf"], [1, "header-actions"], [1, "language-toggle"], [1, "lang-toggle", 3, "click"], [1, "icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], [1, "label"], [1, "pulse"], [1, "profile-toggle"], ["type", "button", "aria-haspopup", "menu", 1, "profile-btn", 3, "click"], [1, "profile-chip"], [1, "profile-avatar"], [1, "profile-avatar__img", 3, "error", "src", "alt"], [1, "profile-meta"], [1, "profile-meta__name"], ["class", "profile-meta__email", 4, "ngIf"], [1, "profile-chevron"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], ["class", "profile-menu", "role", "menu", 3, "rtl", 4, "ngIf"], [1, "header-notification-dropdown", 3, "isRTL"], [1, "main-content", "custom-scrollbar"], ["class", "mobile-sidebar-overlay", 3, "click", 4, "ngIf"], ["class", "logout-confirm-overlay", 3, "click", 4, "ngIf"], [3, "closeModal", "sendNotification", "isRTL", "isOpen"], [1, "mobile-sidebar-toggle", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "3", "y1", "12", "x2", "21", "y2", "12"], ["x1", "3", "y1", "6", "x2", "21", "y2", "6"], ["x1", "3", "y1", "18", "x2", "21", "y2", "18"], [1, "profile-meta__email"], ["role", "menu", 1, "profile-menu"], [1, "profile-menu__header"], [1, "profile-menu__avatar"], [1, "profile-menu__avatar-img", 3, "error", "src", "alt"], [1, "profile-menu__info"], [1, "profile-menu__name"], ["class", "profile-menu__email", 4, "ngIf"], [1, "profile-menu__actions"], ["type", "button", "role", "menuitem", 1, "profile-menu__item", 3, "click"], [1, "profile-menu__icon", "profile-menu__icon--primary"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "profile-menu__text"], [1, "profile-menu__title"], ["type", "button", "role", "menuitem", 1, "profile-menu__item", "profile-menu__item--danger", 3, "click"], [1, "profile-menu__icon", "profile-menu__icon--danger"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16,17 21,12 16,7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "profile-menu__email"], [1, "mobile-sidebar-overlay", 3, "click"], [1, "logout-confirm-overlay", 3, "click"], [1, "logout-confirm-modal", 3, "click"], [1, "logout-confirm-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "logout-confirm-title"], [1, "logout-confirm-message"], [1, "logout-confirm-actions"], [1, "btn", "btn-cancel", 3, "click"], [1, "btn", "btn-logout", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "app-sidebar", 2);
      \u0275\u0275listener("collapsedChange", function LayoutComponent_Template_app_sidebar_collapsedChange_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSidebarCollapsed($event));
      })("logoutConfirmRequested", function LayoutComponent_Template_app_sidebar_logoutConfirmRequested_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogoutConfirmRequested());
      })("notificationModalRequested", function LayoutComponent_Template_app_sidebar_notificationModalRequested_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNotificationModal());
      })("mobileSidebarClose", function LayoutComponent_Template_app_sidebar_mobileSidebarClose_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeMobileSidebar());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "header", 4)(4, "div", 5);
      \u0275\u0275template(5, LayoutComponent_button_5_Template, 5, 2, "button", 6);
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "button", 9);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleLanguage());
      });
      \u0275\u0275elementStart(9, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 11);
      \u0275\u0275element(11, "circle", 12)(12, "line", 13)(13, "path", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span", 15);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 17, 0)(19, "button", 18);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleProfileMenu($event));
      });
      \u0275\u0275elementStart(20, "span", 19)(21, "span", 20)(22, "img", 21);
      \u0275\u0275listener("error", function LayoutComponent_Template_img_error_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAvatarError($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "span", 22)(24, "span", 23);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, LayoutComponent_span_26_Template, 2, 1, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 25);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 26);
      \u0275\u0275element(29, "polyline", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(30, "span", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, LayoutComponent_div_31_Template, 26, 10, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "app-notification-dropdown", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "main", 30);
      \u0275\u0275element(34, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, LayoutComponent_div_35_Template, 1, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, LayoutComponent_div_36_Template, 16, 4, "div", 32);
      \u0275\u0275elementStart(37, "app-add-notification-modal", 33);
      \u0275\u0275listener("closeModal", function LayoutComponent_Template_app_add_notification_modal_closeModal_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeNotificationModal());
      })("sendNotification", function LayoutComponent_Template_app_add_notification_modal_sendNotification_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSendNotification($event));
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
      \u0275\u0275attribute("aria-label", ctx.currentLang() === "en" ? "Switch to Arabic" : "Switch to English");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.currentLang() === "en" ? "\u0639" : "EN");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("menu-open", ctx.showProfileMenu())("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275attribute("id", ctx.profileMenuId + "-trigger")("aria-controls", ctx.profileMenuId)("aria-expanded", ctx.showProfileMenu())("aria-label", ctx.translate("login.profile"));
      \u0275\u0275advance(3);
      \u0275\u0275property("src", ctx.getUserImageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx.getUserFullName());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.getUserFullName(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.user == null ? null : ctx.user.email);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.showProfileMenu());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showProfileMenu());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isMobile() && ctx.mobileSidebarOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLogoutConfirm());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL())("isOpen", ctx.showNotificationModal());
    }
  }, dependencies: [NgIf, RouterOutlet, SidebarComponent, NotificationDropdownComponent, AddNotificationModalComponent], styles: ['\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .app-layout[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .content-area.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0.33rem 0.33rem 0 0.33rem;\n  border-radius: 10px;\n  margin: 0.67rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.34rem;\n  flex-direction: row;\n}\n.header-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:dir[ltr] {\n  flex-direction: row !important;\n  justify-content: space-between !important;\n}\n.user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.67rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  padding: 0.33rem;\n}\n.user-profile[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 248, 220, 0.5);\n  transform: translateY(-1px);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.67rem;\n  font-weight: 700;\n  color: #5F646D;\n  white-space: nowrap;\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border: none;\n  color: #FFFFFF;\n  padding: 0.5rem;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]:hover {\n  background: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mobile-sidebar-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.mobile-sidebar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 998;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 2;\n}\n.header-actions.rtl[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions[_ngcontent-%COMP%]:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.17rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.33rem;\n  height: 27px;\n  padding: 0 0.58rem 0 0.42rem;\n  border: none;\n  cursor: pointer;\n  border-radius: 999px;\n  color: #111827;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f3f4f6 100%);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(0, 0, 0, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.3s ease,\n    background 0.3s ease;\n}\n.lang-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08), inset 0 -2px 6px rgba(0, 0, 0, 0.05);\n}\n.lang-toggle[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.lang-toggle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      90% 90% at 30% 30%,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.15), 0 6px 12px rgba(182, 138, 53, 0.35);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-toggle[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(12deg) scale(1.02);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-toggle[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.27px;\n  color: #374151;\n}\n.lang-toggle[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.lang-toggle[_ngcontent-%COMP%]:active   .pulse[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: inherit;\n  box-shadow: 0 0 0 0 rgba(182, 138, 53, 0.35);\n  animation: _ngcontent-%COMP%_pulseRing 0.5s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_pulseRing {\n  to {\n    box-shadow: 0 0 0 12px rgba(182, 138, 53, 0);\n  }\n}\n.profile-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.profile-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.45rem;\n  min-height: 36px;\n  padding: 0.22rem 0.62rem 0.22rem 0.4rem;\n  border: none;\n  cursor: pointer;\n  border-radius: 999px;\n  color: #111827;\n  background: rgba(248, 249, 251, 0.9);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 8px 20px rgba(17, 24, 39, 0.08);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.3s ease,\n    background 0.3s ease,\n    color 0.3s ease;\n}\n.profile-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 16px 30px rgba(17, 24, 39, 0.12);\n}\n.profile-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.profile-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.55);\n  outline-offset: 3px;\n}\n.profile-toggle.menu-open[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%] {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 18px 36px rgba(17, 24, 39, 0.16);\n  background: rgba(255, 255, 255, 0.92);\n}\n.profile-btn[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.profile-btn[_ngcontent-%COMP%]:active   .pulse[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: inherit;\n  box-shadow: 0 0 0 0 rgba(182, 138, 53, 0.35);\n  animation: _ngcontent-%COMP%_pulseRing 0.5s ease-out forwards;\n}\n.profile-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      90% 90% at 30% 30%,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.35), 0 6px 14px rgba(182, 138, 53, 0.35);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-avatar__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.05rem;\n  min-width: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .profile-meta[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.profile-meta__label[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  font-weight: 500;\n  color: #9CA3AF;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.profile-meta__name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.1;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-meta__email[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #6B7280;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-chevron[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: rgba(17, 24, 39, 0.05);\n  flex-shrink: 0;\n  transition: transform 0.3s ease, background 0.3s ease;\n}\n.profile-chevron[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: transform 0.3s ease;\n}\n.profile-chevron.open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.profile-btn[_ngcontent-%COMP%]:hover   .profile-chevron[_ngcontent-%COMP%] {\n  background: rgba(182, 138, 53, 0.15);\n}\n.profile-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(22px);\n  backdrop-filter: blur(22px);\n  border-radius: 14px;\n  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.14);\n  padding: 0.5rem 0.55rem;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_profileMenuFade 0.2s ease-out;\n  border: 1px solid rgba(182, 138, 53, 0.08);\n}\n.profile-menu[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -7px;\n  right: 28px;\n  width: 14px;\n  height: 14px;\n  background: inherit;\n  transform: rotate(45deg);\n  border-radius: 4px;\n  border: inherit;\n  border-bottom: none;\n  border-right: none;\n}\n.profile-menu.rtl[_ngcontent-%COMP%]::before {\n  right: auto;\n  left: 32px;\n}\n.profile-menu__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.08);\n  margin-bottom: 0.45rem;\n}\n.profile-menu__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 35%,\n      #80591F 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  box-shadow: 0 12px 24px rgba(182, 138, 53, 0.35);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-menu__avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-menu__avatar-initials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.profile-menu__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.profile-menu__label[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9CA3AF;\n}\n.profile-menu__name[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-menu__email[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: #6B7280;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-menu__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.profile-menu__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n  padding: 0.45rem;\n  border: none;\n  border-radius: 10px;\n  background: rgba(249, 250, 251, 0.8);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.3s ease;\n  text-align: left;\n}\n.profile-menu__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: rgba(182, 138, 53, 0.08);\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.08);\n}\n.profile-menu__item[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.profile-menu__item--danger[_ngcontent-%COMP%] {\n  background: rgba(254, 242, 242, 0.7);\n}\n.profile-menu__item--danger[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.16);\n}\n.profile-menu__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 10px;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.12);\n}\n.profile-menu__icon--primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n}\n.profile-menu__icon--danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #DC2626 0%,\n      #B91C1C 50%,\n      #991B1B 100%);\n}\n.profile-menu__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  color: #111827;\n}\n.profile-menu__title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.profile-menu__subtitle[_ngcontent-%COMP%] {\n  font-size: 0.52rem;\n  color: #6B7280;\n}\n.profile-menu__item--danger[_ngcontent-%COMP%]   .profile-menu__title[_ngcontent-%COMP%] {\n  color: #B91C1C;\n}\n.profile-menu__item--danger[_ngcontent-%COMP%]   .profile-menu__subtitle[_ngcontent-%COMP%] {\n  color: #B91C1C;\n  opacity: 0.8;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-btn[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.4rem 0.35rem 0.95rem;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-chevron[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-chevron.open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu__text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu__item[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-direction: row-reverse;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu__icon[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.12);\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu__header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.profile-toggle.rtl[_ngcontent-%COMP%]   .profile-menu__info[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n@keyframes _ngcontent-%COMP%_profileMenuFade {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-menu__item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.35);\n  outline-offset: 3px;\n}\n.profile-menu__item--danger[_ngcontent-%COMP%]:focus-visible {\n  outline-color: rgba(220, 38, 38, 0.4);\n}\n.profile-menu__item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.profile-toggle.menu-open[_ngcontent-%COMP%]   .profile-chevron[_ngcontent-%COMP%] {\n  background: rgba(182, 138, 53, 0.18);\n}\n[dir=rtl][_ngcontent-%COMP%]   .profile-meta__label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .profile-meta__name[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .profile-meta__email[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .profile-menu[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #5F646D;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  min-height: 24px;\n  min-width: 32px;\n  justify-content: center;\n}\n.lang-btn.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.lang-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #FFF8DC;\n  color: #B68A35;\n}\n.lang-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-content[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.app-header[_ngcontent-%COMP%]:not(.rtl)   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  right: auto;\n  left: -5px;\n}\n.page-title[_ngcontent-%COMP%] {\n  color: var(--brand-green);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.33rem;\n  border-radius: 0.25rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  padding: 0 0;\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl[_ngcontent-%COMP%]   .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0.67rem 0.33rem 0 0.33rem;\n    margin: 0.33rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    gap: 0.67rem;\n  }\n  .user-profile[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    padding: 0.27rem;\n  }\n  .user-avatar[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    font-size: 0.64rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    padding: 0.13rem;\n  }\n  .lang-btn[_ngcontent-%COMP%] {\n    padding: 0.27rem 0.57rem;\n    min-height: 21px;\n    font-size: 0.57rem;\n  }\n  .header-btn[_ngcontent-%COMP%] {\n    padding: 0.27rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 0.87rem;\n  }\n}\n@media (max-width: 768px) {\n  .mobile-sidebar-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-header[_ngcontent-%COMP%] {\n    padding: 0.33rem 0.33rem 0 0.33rem;\n    margin: 0.33rem 0.67rem !important;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    gap: 0.67rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 0.67rem;\n  }\n  .header-actions.rtl[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions[_ngcontent-%COMP%]:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name[_ngcontent-%COMP%] {\n    font-size: 0.58rem;\n  }\n  .language-toggle[_ngcontent-%COMP%] {\n    padding: 0.08rem;\n  }\n  .lang-btn[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.53rem;\n    min-width: 27px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 0.67rem;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 11px;\n  padding: 1.34rem;\n  max-width: 268px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  color: #ef4444;\n}\n.logout-confirm-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 0.67rem;\n  line-height: 1.4;\n}\n.logout-confirm-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 1.34rem;\n  line-height: 1.6;\n  font-size: 0.67rem;\n}\n.logout-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.67rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.58rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 67px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0.67rem;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 0.13rem;\n  }\n  .logout-confirm-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component-XFVCSOTI.css.map */'] });
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
            <button\r
              class="lang-toggle"\r
              (click)="toggleLanguage()"\r
              [attr.aria-label]="currentLang() === 'en' ? 'Switch to Arabic' : 'Switch to English'">\r
              <span class="icon">\r
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <circle cx="12" cy="12" r="10"></circle>\r
                  <line x1="2" y1="12" x2="22" y2="12"></line>\r
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>\r
                </svg>\r
              </span>\r
              <span class="label">{{ currentLang() === 'en' ? '\u0639' : 'EN' }}</span>\r
              <span class="pulse"></span>\r
            </button>\r
          </div>\r
          <!-- Profile Button -->\r
          <div \r
            class="profile-toggle" \r
            #profileMenuContainer\r
            [class.menu-open]="showProfileMenu()"\r
            [class.rtl]="isRTL()">\r
            <button\r
              type="button"\r
              class="profile-btn"\r
              (click)="toggleProfileMenu($event)"\r
              [attr.id]="profileMenuId + '-trigger'"\r
              [attr.aria-controls]="profileMenuId"\r
              aria-haspopup="menu"\r
              [attr.aria-expanded]="showProfileMenu()"\r
              [attr.aria-label]="translate('login.profile')">\r
              <span class="profile-chip">\r
                <span class="profile-avatar">\r
                  <img \r
                    [src]="getUserImageUrl()" \r
                    [alt]="getUserFullName()" \r
                    class="profile-avatar__img"\r
                    (error)="onAvatarError($event)">\r
                </span>\r
              </span>\r
              <span class="profile-meta">\r
                <span class="profile-meta__name">\r
                  {{ getUserFullName() }}\r
                </span>\r
                <span class="profile-meta__email" *ngIf="user?.email">{{ user?.email }}</span>\r
              </span>\r
              <span class="profile-chevron" [class.open]="showProfileMenu()">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6 9 12 15 18 9"></polyline>\r
                </svg>\r
              </span>\r
              <span class="pulse"></span>\r
            </button>\r
\r
            <div \r
              class="profile-menu" \r
              *ngIf="showProfileMenu()" \r
              role="menu"\r
              [attr.id]="profileMenuId"\r
              [attr.aria-label]="translate('login.profile')"\r
              [class.rtl]="isRTL()">\r
              <div class="profile-menu__header">\r
                <div class="profile-menu__avatar">\r
                  <img \r
                    [src]="getUserImageUrl()" \r
                    [alt]="getUserFullName()" \r
                    class="profile-menu__avatar-img"\r
                    (error)="onAvatarError($event)">\r
                </div>\r
                <div class="profile-menu__info">\r
                  <span class="profile-menu__name">\r
                    {{ getUserFullName() }}\r
                  </span>\r
                  <span class="profile-menu__email" *ngIf="user?.email">{{ user?.email }}</span>\r
                </div>\r
              </div>\r
              <div class="profile-menu__actions">\r
                <button \r
                  type="button" \r
                  class="profile-menu__item"\r
                  role="menuitem"\r
                  (click)="onProfileMenuSelect('profile')">\r
                  <span class="profile-menu__icon profile-menu__icon--primary">\r
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
                      <circle cx="12" cy="7" r="4"></circle>\r
                    </svg>\r
                  </span>\r
                  <span class="profile-menu__text">\r
                    <span class="profile-menu__title">{{ translate('login.profile') }}</span>\r
                  </span>\r
                </button>\r
                <button \r
                  type="button" \r
                  class="profile-menu__item profile-menu__item--danger"\r
                  role="menuitem"\r
                  (click)="onProfileMenuSelect('logout')">\r
                  <span class="profile-menu__icon profile-menu__icon--danger">\r
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>\r
                      <polyline points="16,17 21,12 16,7"></polyline>\r
                      <line x1="21" y1="12" x2="9" y2="12"></line>\r
                    </svg>\r
                  </span>\r
                  <span class="profile-menu__text">\r
                    <span class="profile-menu__title">{{ translate('login.logout') }}</span>\r
                  </span>\r
                </button>\r
              </div>\r
            </div>\r
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
`, styles: ['/* src/app/components/layout/layout.component.css */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n}\n.app-layout.ltr,\nhtml[dir=ltr] .app-layout {\n  font-family: "Poppins", sans-serif;\n}\n.app-layout.rtl,\nhtml[dir=rtl] .app-layout {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.app-layout.rtl {\n  direction: rtl;\n  flex-direction: row-reverse;\n}\n.content-area {\n  flex: 1;\n  margin-left: calc(var(--sidebar-w));\n  transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.app-layout.rtl .content-area {\n  margin-left: 0;\n  margin-right: var(--sidebar-w);\n}\n.app-layout .content-area.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n  margin-right: 0;\n}\n.app-layout.rtl .content-area.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n.app-header {\n  background: transparent;\n  padding: 0.33rem 0.33rem 0 0.33rem;\n  border-radius: 10px;\n  margin: 0.67rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1.34rem;\n  flex-direction: row;\n}\n.header-content :dir[ltr] {\n  flex-direction: row !important;\n  justify-content: space-between !important;\n}\n.user-profile {\n  display: flex;\n  align-items: center;\n  gap: 0.67rem;\n  order: 1;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n  padding: 0.33rem;\n}\n.user-profile:hover {\n  background: rgba(255, 248, 220, 0.5);\n  transform: translateY(-1px);\n}\n.user-avatar {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.profile-pic {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-name {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.67rem;\n  font-weight: 700;\n  color: #5F646D;\n  white-space: nowrap;\n}\n.mobile-sidebar-toggle {\n  background: #B68A35;\n  border: none;\n  color: #FFFFFF;\n  padding: 0.5rem;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mobile-sidebar-toggle:hover {\n  background: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.mobile-sidebar-toggle:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mobile-sidebar-toggle svg {\n  transition: transform 0.3s ease;\n}\n.mobile-sidebar-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 998;\n  opacity: 0;\n  animation: fadeIn 0.3s ease forwards;\n}\n@keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  order: 2;\n}\n.header-actions.rtl {\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.header-actions:not(.rtl) {\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.header-notification-dropdown {\n  position: relative;\n}\n.language-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  background: rgba(243, 244, 246, 0.8);\n  padding: 0.17rem;\n  border-radius: 999px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.lang-toggle {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.33rem;\n  height: 27px;\n  padding: 0 0.58rem 0 0.42rem;\n  border: none;\n  cursor: pointer;\n  border-radius: 999px;\n  color: #111827;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f3f4f6 100%);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06), inset 0 -2px 6px rgba(0, 0, 0, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.3s ease,\n    background 0.3s ease;\n}\n.lang-toggle:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08), inset 0 -2px 6px rgba(0, 0, 0, 0.05);\n}\n.lang-toggle:active {\n  transform: translateY(0);\n}\n.lang-toggle .icon {\n  width: 19px;\n  height: 19px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      90% 90% at 30% 30%,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.15), 0 6px 12px rgba(182, 138, 53, 0.35);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-toggle:hover .icon svg {\n  transform: rotate(12deg) scale(1.02);\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-toggle .label {\n  font-family: "Poppins", sans-serif;\n  font-size: 0.57rem;\n  font-weight: 700;\n  letter-spacing: 0.27px;\n  color: #374151;\n}\n.lang-toggle .pulse {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.lang-toggle:active .pulse::after {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: inherit;\n  box-shadow: 0 0 0 0 rgba(182, 138, 53, 0.35);\n  animation: pulseRing 0.5s ease-out forwards;\n}\n@keyframes pulseRing {\n  to {\n    box-shadow: 0 0 0 12px rgba(182, 138, 53, 0);\n  }\n}\n.profile-toggle {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.profile-btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.45rem;\n  min-height: 36px;\n  padding: 0.22rem 0.62rem 0.22rem 0.4rem;\n  border: none;\n  cursor: pointer;\n  border-radius: 999px;\n  color: #111827;\n  background: rgba(248, 249, 251, 0.9);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 8px 20px rgba(17, 24, 39, 0.08);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.3s ease,\n    background 0.3s ease,\n    color 0.3s ease;\n}\n.profile-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65), 0 16px 30px rgba(17, 24, 39, 0.12);\n}\n.profile-btn:active {\n  transform: translateY(0);\n}\n.profile-btn:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.55);\n  outline-offset: 3px;\n}\n.profile-toggle.menu-open .profile-btn {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 18px 36px rgba(17, 24, 39, 0.16);\n  background: rgba(255, 255, 255, 0.92);\n}\n.profile-btn .pulse {\n  position: absolute;\n  inset: 0;\n  border-radius: inherit;\n  pointer-events: none;\n}\n.profile-btn:active .pulse::after {\n  content: "";\n  position: absolute;\n  inset: -2px;\n  border-radius: inherit;\n  box-shadow: 0 0 0 0 rgba(182, 138, 53, 0.35);\n  animation: pulseRing 0.5s ease-out forwards;\n}\n.profile-chip {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      90% 90% at 30% 30%,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n  color: #fff;\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.35), 0 6px 14px rgba(182, 138, 53, 0.35);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-avatar__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.05rem;\n  min-width: 0;\n}\n[dir=rtl] .profile-meta {\n  align-items: flex-end;\n}\n.profile-meta__label {\n  font-size: 0.52rem;\n  font-weight: 500;\n  color: #9CA3AF;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.profile-meta__name {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.1;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-meta__email {\n  font-size: 0.6rem;\n  color: #6B7280;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-chevron {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: rgba(17, 24, 39, 0.05);\n  flex-shrink: 0;\n  transition: transform 0.3s ease, background 0.3s ease;\n}\n.profile-chevron svg {\n  transform: rotate(0deg);\n  transition: transform 0.3s ease;\n}\n.profile-chevron.open svg {\n  transform: rotate(180deg);\n}\n.profile-btn:hover .profile-chevron {\n  background: rgba(182, 138, 53, 0.15);\n}\n.profile-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  min-width: 180px;\n  background: rgba(255, 255, 255, 0.98);\n  -webkit-backdrop-filter: blur(22px);\n  backdrop-filter: blur(22px);\n  border-radius: 14px;\n  box-shadow: 0 12px 32px rgba(17, 24, 39, 0.14);\n  padding: 0.5rem 0.55rem;\n  z-index: 1000;\n  animation: profileMenuFade 0.2s ease-out;\n  border: 1px solid rgba(182, 138, 53, 0.08);\n}\n.profile-menu::before {\n  content: "";\n  position: absolute;\n  top: -7px;\n  right: 28px;\n  width: 14px;\n  height: 14px;\n  background: inherit;\n  transform: rotate(45deg);\n  border-radius: 4px;\n  border: inherit;\n  border-bottom: none;\n  border-right: none;\n}\n.profile-menu.rtl::before {\n  right: auto;\n  left: 32px;\n}\n.profile-menu__header {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding-bottom: 0.45rem;\n  border-bottom: 1px solid rgba(17, 24, 39, 0.08);\n  margin-bottom: 0.45rem;\n}\n.profile-menu__avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 35%,\n      #80591F 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  box-shadow: 0 12px 24px rgba(182, 138, 53, 0.35);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.profile-menu__avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.profile-menu__avatar-initials {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: 0.9rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.profile-menu__info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n.profile-menu__label {\n  font-size: 0.5rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9CA3AF;\n}\n.profile-menu__name {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #111827;\n  line-height: 1.2;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-menu__email {\n  font-size: 0.55rem;\n  color: #6B7280;\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.profile-menu__actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.profile-menu__item {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  width: 100%;\n  padding: 0.45rem;\n  border: none;\n  border-radius: 10px;\n  background: rgba(249, 250, 251, 0.8);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    background 0.3s ease;\n  text-align: left;\n}\n.profile-menu__item:hover {\n  transform: translateY(-1px);\n  background: rgba(182, 138, 53, 0.08);\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.08);\n}\n.profile-menu__item:active {\n  transform: translateY(0);\n}\n.profile-menu__item--danger {\n  background: rgba(254, 242, 242, 0.7);\n}\n.profile-menu__item--danger:hover {\n  background: rgba(220, 38, 38, 0.16);\n}\n.profile-menu__icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 10px;\n  color: #fff;\n  flex-shrink: 0;\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.12);\n}\n.profile-menu__icon--primary {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 45%,\n      #92722A 100%);\n}\n.profile-menu__icon--danger {\n  background:\n    linear-gradient(\n      135deg,\n      #DC2626 0%,\n      #B91C1C 50%,\n      #991B1B 100%);\n}\n.profile-menu__text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  color: #111827;\n}\n.profile-menu__title {\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.profile-menu__subtitle {\n  font-size: 0.52rem;\n  color: #6B7280;\n}\n.profile-menu__item--danger .profile-menu__title {\n  color: #B91C1C;\n}\n.profile-menu__item--danger .profile-menu__subtitle {\n  color: #B91C1C;\n  opacity: 0.8;\n}\n.profile-toggle.rtl .profile-btn {\n  padding: 0.35rem 0.4rem 0.35rem 0.95rem;\n}\n.profile-toggle.rtl .profile-menu {\n  right: auto;\n  left: 0;\n}\n.profile-toggle.rtl .profile-chevron {\n  transform: scaleX(-1);\n}\n.profile-toggle.rtl .profile-chevron.open svg {\n  transform: rotate(-180deg);\n}\n.profile-toggle.rtl .profile-menu__text {\n  text-align: right;\n}\n.profile-toggle.rtl .profile-menu__item {\n  text-align: right;\n  flex-direction: row-reverse;\n}\n.profile-toggle.rtl .profile-menu__icon {\n  box-shadow: 0 8px 16px rgba(17, 24, 39, 0.12);\n}\n.profile-toggle.rtl .profile-menu__header {\n  flex-direction: row-reverse;\n}\n.profile-toggle.rtl .profile-menu__info {\n  align-items: flex-end;\n}\n@keyframes profileMenuFade {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.profile-menu__item:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.35);\n  outline-offset: 3px;\n}\n.profile-menu__item--danger:focus-visible {\n  outline-color: rgba(220, 38, 38, 0.4);\n}\n.profile-menu__item svg {\n  flex-shrink: 0;\n}\n.profile-toggle.menu-open .profile-chevron {\n  background: rgba(182, 138, 53, 0.18);\n}\n[dir=rtl] .profile-meta__label,\n[dir=rtl] .profile-meta__name,\n[dir=rtl] .profile-meta__email {\n  text-align: right;\n}\n[dir=rtl] .profile-menu {\n  text-align: right;\n}\n.lang-btn {\n  background: transparent;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 999px;\n  font-family: "Poppins", sans-serif;\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #5F646D;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  min-height: 24px;\n  min-width: 32px;\n  justify-content: center;\n}\n.lang-btn.active {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.lang-btn:hover:not(.active) {\n  background: #FFF8DC;\n  color: #B68A35;\n}\n.lang-btn svg {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lang-btn.active svg {\n  transform: scale(1.1);\n}\n.app-header.rtl .header-content {\n  justify-content: flex-start;\n}\n.app-header.rtl .header-actions {\n  order: 1;\n  justify-content: flex-start;\n  margin-right: auto;\n}\n.app-header:not(.rtl) .header-content {\n  justify-content: flex-end;\n}\n.app-header:not(.rtl) .header-actions {\n  order: 2;\n  justify-content: flex-end;\n  margin-left: auto;\n}\n.app-header.rtl .notification-badge {\n  right: auto;\n  left: -5px;\n}\n.page-title {\n  color: var(--brand-green);\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.header-btn {\n  background: none;\n  border: none;\n  padding: 0.33rem;\n  border-radius: 0.25rem;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.header-btn:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.main-content {\n  flex: 1;\n  background-color: white;\n  padding: 0 0;\n}\n.main-content.sidebar-collapsed {\n  margin-left: var(--sidebar-w-collapsed);\n}\n.app-layout.rtl .main-content.sidebar-collapsed {\n  margin-left: 0;\n  margin-right: var(--sidebar-w-collapsed);\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .app-header {\n    padding: 0.67rem 0.33rem 0 0.33rem;\n    margin: 0.33rem;\n  }\n  .header-content {\n    gap: 0.67rem;\n  }\n  .user-profile {\n    gap: 0.5rem;\n    padding: 0.27rem;\n  }\n  .user-avatar {\n    width: 24px;\n    height: 24px;\n  }\n  .user-name {\n    font-size: 0.64rem;\n  }\n  .language-toggle {\n    padding: 0.13rem;\n  }\n  .lang-btn {\n    padding: 0.27rem 0.57rem;\n    min-height: 21px;\n    font-size: 0.57rem;\n  }\n  .header-btn {\n    padding: 0.27rem;\n  }\n  .page-title {\n    font-size: 0.87rem;\n  }\n}\n@media (max-width: 768px) {\n  .mobile-sidebar-toggle {\n    display: flex;\n  }\n  .content-area {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .main-content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-layout.rtl .main-content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .app-header {\n    padding: 0.33rem 0.33rem 0 0.33rem;\n    margin: 0.33rem 0.67rem !important;\n  }\n  .header-content {\n    gap: 0.67rem;\n  }\n  .header-actions {\n    gap: 0.67rem;\n  }\n  .header-actions.rtl {\n    justify-content: flex-start;\n    margin-right: auto;\n  }\n  .header-actions:not(.rtl) {\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n  .user-name {\n    font-size: 0.58rem;\n  }\n  .language-toggle {\n    padding: 0.08rem;\n  }\n  .lang-btn {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.53rem;\n    min-width: 27px;\n  }\n  .main-content {\n    padding: 0.67rem;\n  }\n  .app-layout .content-area {\n    transition: margin-left 0.3s ease, margin-right 0.3s ease;\n  }\n  .app-layout .content-area {\n    margin-left: var(--sidebar-w-collapsed);\n    margin-right: 0;\n  }\n  .app-layout.rtl .content-area {\n    margin-left: 0;\n    margin-right: var(--sidebar-w-collapsed);\n  }\n}\n.logout-confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.logout-confirm-modal {\n  background: white;\n  border-radius: 11px;\n  padding: 1.34rem;\n  max-width: 268px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-confirm-icon {\n  text-align: center;\n  margin-bottom: 1rem;\n  color: #ef4444;\n}\n.logout-confirm-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 0.67rem;\n  line-height: 1.4;\n}\n.logout-confirm-message {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 1.34rem;\n  line-height: 1.6;\n  font-size: 0.67rem;\n}\n.logout-confirm-actions {\n  display: flex;\n  gap: 0.67rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 0.58rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 67px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-logout {\n  background: #ef4444;\n  color: white;\n}\n.btn-logout:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n@media (max-width: 480px) {\n  .logout-confirm-modal {\n    padding: 1rem;\n    margin: 0.67rem;\n  }\n  .main-content {\n    padding: 0.13rem;\n  }\n  .logout-confirm-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=layout.component-XFVCSOTI.css.map */\n'] }]
  }], () => [{ type: LangService }, { type: AuthService }, { type: Router }, { type: TranslationService }, { type: ProfileService }, { type: ImageService }], { profileMenuContainer: [{
    type: ViewChild,
    args: ["profileMenuContainer"]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapePress: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/components/layout/layout.component.ts", lineNumber: 17 });
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
        loadChildren: () => import("./chunk-F7TBWCBF.js").then((m) => m.DashboardModule),
        canActivate: [PermissionGuard],
        data: { permission: "dashboard.index" }
      },
      {
        path: "users",
        loadChildren: () => import("./chunk-RPR6KCGQ.js").then((m) => m.UsersModule),
        canActivate: [PermissionGuard],
        data: { permission: "user.index" }
      },
      {
        path: "roles",
        loadChildren: () => import("./chunk-R4U5NPAN.js").then((m) => m.RolesModule),
        canActivate: [PermissionGuard],
        data: { permission: "admin.index" }
      },
      {
        path: "employees",
        loadChildren: () => import("./chunk-TADMIGNJ.js").then((m) => m.EmployeesModule),
        canActivate: [PermissionGuard],
        data: { permission: "employee.index" }
      },
      {
        path: "profile",
        loadComponent: () => import("./chunk-IC3SSSSL.js").then((m) => m.ProfileComponent)
      },
      {
        path: "departments",
        loadChildren: () => import("./chunk-PYV4YDSJ.js").then((m) => m.DepartmentsModule),
        canActivate: [PermissionGuard],
        data: { permission: "department.index" }
      },
      {
        path: "tasks",
        loadChildren: () => import("./chunk-C57MJMPA.js").then((m) => m.TasksModule)
      },
      {
        path: "partners",
        loadChildren: () => import("./chunk-WIR4VCKB.js").then((m) => m.PartnersModule),
        canActivate: [PermissionGuard],
        data: { permission: "partners.index" }
      },
      {
        path: "visits",
        loadChildren: () => import("./chunk-QKK35RBW.js").then((m) => m.VisitsModule),
        canActivate: [PermissionGuard],
        data: { permission: "visits.index" }
      },
      {
        path: "travel",
        loadChildren: () => import("./chunk-AYIBND4V.js").then((m) => m.TravelModule),
        canActivate: [PermissionGuard],
        data: { permission: "travel.index" }
      },
      {
        path: "meetings",
        loadChildren: () => import("./chunk-3NWQB4VG.js").then((m) => m.MeetingsModule),
        canActivate: [PermissionGuard],
        data: { permission: "meeting.index" }
      },
      {
        path: "my-calendar",
        loadChildren: () => import("./chunk-D3LYV4XL.js").then((m) => m.CalendarModule),
        canActivate: [PermissionGuard],
        data: { permission: "calendar.events.get" }
      },
      {
        path: "calendar",
        loadChildren: () => import("./chunk-45OU6DLM.js").then((m) => m.SystemCalendarModule),
        canActivate: [PermissionGuard],
        data: { permission: "calendar.index" }
      },
      {
        path: "letters",
        loadChildren: () => import("./chunk-4TTUHGGQ.js").then((m) => m.LettersModule)
      },
      {
        path: "documents",
        loadChildren: () => import("./chunk-4F7IEMWQ.js").then((m) => m.DocumentsModule),
        canActivate: [PermissionGuard],
        data: { permission: "documents.index" }
      },
      {
        path: "workflow",
        loadChildren: () => import("./chunk-7TRYBRVU.js").then((m) => m.WorkflowModule),
        canActivate: [PermissionGuard],
        data: { permission: "workFlow.index" }
      },
      {
        path: "notifications",
        loadComponent: () => import("./chunk-4KXWG7NG.js").then((m) => m.NotificationsComponent)
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
//# sourceMappingURL=chunk-CSGDRPCR.js.map
