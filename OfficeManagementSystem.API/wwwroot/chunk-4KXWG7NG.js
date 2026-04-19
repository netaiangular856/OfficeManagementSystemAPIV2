import {
  AddNotificationModalComponent,
  NotificationsService,
  SharedModule
} from "./chunk-MEXZR5J4.js";
import "./chunk-3KSNCDS2.js";
import "./chunk-LL4SE2Y3.js";
import {
  AuthService
} from "./chunk-WFDNWXZA.js";
import "./chunk-3NDCE7HG.js";
import "./chunk-N3R5LOFH.js";
import "./chunk-P35E4WF6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-2OJPVZW4.js";
import "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  LangService,
  NgForOf,
  NgIf,
  Router,
  TranslationService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-L7ZNDW2L.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/components/notifications/notifications.ts
function NotificationsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function NotificationsComponent_div_17_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_1_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const notification_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.navigateToReference(notification_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 33)(3, "circle", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r0.translate("notifications.view_details"));
  }
}
function NotificationsComponent_div_17_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function NotificationsComponent_div_17_div_1_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const notification_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsRead(notification_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "polyline", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("title", ctx_r0.translate("notifications.mark_as_read"));
  }
}
function NotificationsComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "h3", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275template(6, NotificationsComponent_div_17_div_1_button_6_Template, 4, 1, "button", 27)(7, NotificationsComponent_div_17_div_1_button_7_Template, 3, 1, "button", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notification_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notification_r3.isRead)("rtl", ctx_r0.isRTL);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(notification_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.canNavigateToReference(notification_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notification_r3.isRead);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r3.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(notification_r3.createdAt));
  }
}
function NotificationsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, NotificationsComponent_div_17_div_1_Template, 12, 9, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function NotificationsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 39)(3, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.translate("notifications.no_notifications"));
  }
}
function NotificationsComponent_div_19_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function NotificationsComponent_div_19_button_4_Template_button_click_0_listener() {
      const page_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r7 === ctx_r0.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r7, " ");
  }
}
function NotificationsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 42);
    \u0275\u0275listener("click", function NotificationsComponent_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 43);
    \u0275\u0275element(3, "polyline");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NotificationsComponent_div_19_button_4_Template, 2, 3, "button", 44);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function NotificationsComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 43);
    \u0275\u0275element(7, "polyline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("points", ctx_r0.isRTL ? "9,18 15,12 9,6" : "15,18 9,12 15,6");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getVisiblePages());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("points", ctx_r0.isRTL ? "15,18 9,12 15,6" : "9,18 15,12 9,6");
  }
}
var NotificationReferenceType;
(function(NotificationReferenceType2) {
  NotificationReferenceType2[NotificationReferenceType2["None"] = 0] = "None";
  NotificationReferenceType2[NotificationReferenceType2["Meeting"] = 1] = "Meeting";
  NotificationReferenceType2[NotificationReferenceType2["Task"] = 2] = "Task";
  NotificationReferenceType2[NotificationReferenceType2["Visit"] = 3] = "Visit";
  NotificationReferenceType2[NotificationReferenceType2["Travel"] = 4] = "Travel";
})(NotificationReferenceType || (NotificationReferenceType = {}));
var NotificationsComponent = class _NotificationsComponent {
  notificationsService;
  translationService;
  langService;
  authService;
  router;
  notifications = [];
  isLoading = false;
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 0;
  searchTerm = "";
  isRTL = false;
  showNotificationModal = false;
  constructor(notificationsService, translationService, langService, authService, router) {
    this.notificationsService = notificationsService;
    this.translationService = translationService;
    this.langService = langService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.isRTL = this.langService.isRTL();
    this.loadNotifications();
  }
  loadNotifications() {
    this.isLoading = true;
    this.notificationsService.getFilteredNotifications(this.currentPage, this.pageSize, this.searchTerm).subscribe({
      next: (response) => {
        if (response && response.success && response.data) {
          this.notifications = response.data.items.map((notification) => {
            const currentUser = this.authService.getCurrentUser();
            const userNotification = notification.userNotifications.find((un) => un.userId === currentUser?.id);
            return __spreadProps(__spreadValues({}, notification), {
              isRead: userNotification ? userNotification.isRead : false
            });
          });
          this.totalCount = response.data.totalCount;
          this.totalPages = Math.ceil(this.totalCount / this.pageSize);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading notifications:", error);
        this.isLoading = false;
      }
    });
  }
  onSearch() {
    this.currentPage = 1;
    this.loadNotifications();
  }
  onPageChange(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadNotifications();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  getVisiblePages() {
    const maxVisible = 5;
    const pages = [];
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, startPage + maxVisible - 1);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  }
  markAsRead(notification) {
    if (notification.isRead)
      return;
    this.notificationsService.markAsRead(notification.id).subscribe({
      next: () => {
        notification.isRead = true;
      },
      error: (error) => {
        console.error("Error marking notification as read:", error);
      }
    });
  }
  canNavigateToReference(notification) {
    if (!notification.referenceType || notification.referenceType === NotificationReferenceType.None) {
      return false;
    }
    if (!notification.referenceId) {
      return false;
    }
    const requiredPermission = this.getRequiredPermission(notification.referenceType);
    if (!requiredPermission) {
      return false;
    }
    return this.authService.hasPermission(requiredPermission);
  }
  getRequiredPermission(referenceType) {
    switch (referenceType) {
      case NotificationReferenceType.Meeting:
        return "meeting.index";
      case NotificationReferenceType.Task:
        return "task.index";
      case NotificationReferenceType.Visit:
        return "visits.index";
      case NotificationReferenceType.Travel:
        return "travel.index";
      default:
        return null;
    }
  }
  navigateToReference(notification) {
    if (!this.canNavigateToReference(notification)) {
      return;
    }
    if (!notification.isRead) {
      this.markAsRead(notification);
    }
    const referenceId = notification.referenceId;
    const referenceType = notification.referenceType;
    switch (referenceType) {
      case NotificationReferenceType.Meeting:
        this.router.navigate(["/meetings/details", referenceId]);
        break;
      case NotificationReferenceType.Task:
        this.router.navigate(["/tasks/details", referenceId]);
        break;
      case NotificationReferenceType.Visit:
        this.router.navigate(["/visits/details", referenceId]);
        break;
      case NotificationReferenceType.Travel:
        this.router.navigate(["/travel/details", referenceId]);
        break;
      default:
        console.warn("Unknown referenceType:", referenceType);
    }
  }
  getNotificationIcon(type) {
    switch (type.toLowerCase()) {
      case "success":
        return "\u2713";
      case "warning":
        return "\u26A0";
      case "error":
        return "\u2717";
      case "reminder":
        return "\u{1F514}";
      case "meeting":
        return "\u{1F4C5}";
      case "task":
        return "\u{1F4CB}";
      case "visit":
        return "\u{1F3E2}";
      case "travel":
        return "\u2708\uFE0F";
      default:
        return "\u2139";
    }
  }
  getNotificationClass(type) {
    return `notification-${type.toLowerCase()}`;
  }
  formatDate(dateString) {
    const now = /* @__PURE__ */ new Date();
    const dateStr = dateString.includes("Z") || dateString.includes("+") || dateString.includes("-", 10) ? dateString : dateString + "Z";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1e3);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInSeconds < 30)
      return this.translate("notifications.justNow");
    if (diffInMinutes < 1)
      return this.translate("notifications.justNow");
    if (diffInMinutes < 60)
      return `${diffInMinutes} ${this.translate("notifications.minutesAgo")}`;
    if (diffInHours < 24)
      return `${diffInHours} ${this.translate("notifications.hoursAgo")}`;
    if (diffInDays < 7)
      return `${diffInDays} ${this.translate("notifications.daysAgo")}`;
    return date.toLocaleDateString(this.isRTL ? "ar-EG" : "en-US");
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  openNotificationModal() {
    this.showNotificationModal = true;
  }
  closeNotificationModal() {
    this.showNotificationModal = false;
  }
  onSendNotification(notification) {
    this.loadNotifications();
    this.closeNotificationModal();
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(NotificationsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 21, vars: 12, consts: [[1, "notifications-page", "rounded-5"], [1, "page-header"], [1, "page-title"], [1, "header-actions"], [1, "send-notification-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 2L11 13"], ["points", "22,2 15,22 11,13 2,9 22,2"], [1, "search-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "search-btn", 3, "click"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["class", "loading-container", 4, "ngIf"], ["class", "notifications-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "closeModal", "sendNotification", "isRTL", "isOpen"], [1, "loading-container"], [1, "spinner"], [1, "notifications-grid"], ["class", "notification-card", 3, "unread", "rtl", 4, "ngFor", "ngForOf"], [1, "notification-card"], [1, "notification-content"], [1, "notification-header"], [1, "notification-title"], [1, "notification-actions"], ["class", "action-btn view-btn", 3, "title", "click", 4, "ngIf"], ["class", "action-btn read-btn", 3, "title", "click", 4, "ngIf"], [1, "notification-message"], [1, "notification-time"], [1, "action-btn", "view-btn", 3, "click", "title"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "action-btn", "read-btn", 3, "click", "title"], ["points", "20,6 9,17 4,12"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "pagination"], [1, "page-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-btn", 3, "click"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_5_listener() {
        return ctx.openNotificationModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6)(8, "polygon", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 8)(11, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function NotificationsComponent_Template_input_keyup_enter_11_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_12_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 5);
      \u0275\u0275element(14, "circle", 11)(15, "path", 12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(16, NotificationsComponent_div_16_Template, 4, 1, "div", 13)(17, NotificationsComponent_div_17_Template, 2, 1, "div", 14)(18, NotificationsComponent_div_18_Template, 6, 1, "div", 15)(19, NotificationsComponent_div_19_Template, 8, 5, "div", 16);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "app-add-notification-modal", 17);
      \u0275\u0275listener("closeModal", function NotificationsComponent_Template_app_add_notification_modal_closeModal_20_listener() {
        return ctx.closeNotificationModal();
      })("sendNotification", function NotificationsComponent_Template_app_add_notification_modal_sendNotification_20_listener($event) {
        return ctx.onSendNotification($event);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("notifications.pageTitle"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("notifications.send_notification_btn"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275property("placeholder", ctx.translate("notifications.searchPlaceholder"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notifications.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL)("isOpen", ctx.showNotificationModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SharedModule, AddNotificationModalComponent], styles: ["\n\n.notifications-page[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  background: #f9fafb;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.125rem;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.3125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.send-notification-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.625rem 1.25rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.send-notification-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.send-notification-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.4rem 0.875rem;\n  min-width: 260px;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.8125rem;\n  color: #111827;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.search-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  color: #b68a35;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #b68a35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.8125rem;\n  margin: 0;\n}\n.notifications-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 0.75rem;\n}\n.notification-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.625rem;\n  transition: all 0.15s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 110px;\n}\n.notification-card[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n.notification-card.unread[_ngcontent-%COMP%] {\n  background: #fffbf5;\n  border-left: 3px solid #b68a35;\n}\n.notification-card.unread[_ngcontent-%COMP%]:hover {\n  background: #fffaf0;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.notification-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n  font-size: 0.75rem;\n  line-height: 1.3;\n  flex: 1;\n}\n.notification-card.unread[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.notification-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 auto 0;\n  font-size: 0.7rem;\n  line-height: 1.35;\n  line-clamp: 3;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.notification-time[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.625rem;\n  font-weight: 400;\n  margin-top: 0.4rem;\n  display: block;\n}\n.notification-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  flex-shrink: 0;\n}\n.action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.2rem;\n  border-radius: 4px;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #b68a35;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.75rem;\n  color: #9ca3af;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 0.875rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n  color: #6b7280;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 1.5rem;\n  padding-top: 1.125rem;\n  border-top: 1px solid #e5e7eb;\n}\n.page-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  color: #6b7280;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.6rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  font-weight: 600;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.notifications-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.notifications-page.rtl[_ngcontent-%COMP%]   .notification-card.unread[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 3px solid #b68a35;\n}\n@media (max-width: 1200px) {\n  .notifications-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .notifications-page[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .send-notification-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.55rem 1.1rem;\n    font-size: 0.75rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .notifications-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    gap: 0.65rem;\n  }\n  .notification-card[_ngcontent-%COMP%] {\n    padding: 0.575rem;\n    min-height: 100px;\n  }\n  .notification-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .notification-message[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .page-btn[_ngcontent-%COMP%] {\n    min-width: 28px;\n    height: 28px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .notifications-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=notifications-TF42BNLX.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, imports: [
      CommonModule,
      FormsModule,
      SharedModule
    ], template: `<div class="notifications-page rounded-5" [class.rtl]="isRTL">\r
   <!-- Header -->\r
   <div class="page-header">\r
    <h1 class="page-title">{{ translate("notifications.pageTitle") }}</h1>\r
\r
    <div class="header-actions">\r
      <!-- Send Notification Button -->\r
      <button class="send-notification-btn" (click)="openNotificationModal()">\r
        <svg\r
          width="18"\r
          height="18"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path d="M22 2L11 13"></path>\r
          <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>\r
        </svg>\r
        {{ translate("notifications.send_notification_btn") }}\r
      </button>\r
\r
      <!-- Search Bar -->\r
      <div class="search-container">\r
      <input\r
        type="text"\r
        class="search-input"\r
        [(ngModel)]="searchTerm"\r
        (keyup.enter)="onSearch()"\r
        [placeholder]="translate('notifications.searchPlaceholder')"\r
      />\r
      <button class="search-btn" (click)="onSearch()">\r
        <svg\r
          width="18"\r
          height="18"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="11" cy="11" r="8"></circle>\r
          <path d="m21 21-4.35-4.35"></path>\r
        </svg>\r
      </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="loading-container">\r
    <div class="spinner"></div>\r
    <p>{{ translate("common.loading") }}</p>\r
  </div>\r
\r
  <!-- Notifications List -->\r
  <div\r
    *ngIf="!isLoading && notifications.length > 0"\r
    class="notifications-grid"\r
  >\r
    <div\r
      *ngFor="let notification of notifications"\r
      class="notification-card"\r
      [class.unread]="!notification.isRead"\r
      [class.rtl]="isRTL"\r
    >\r
      <!-- Content -->\r
      <div class="notification-content">\r
        <div class="notification-header">\r
          <h3 class="notification-title">{{ notification.title }}</h3>\r
          <div class="notification-actions">\r
            <button\r
              *ngIf="canNavigateToReference(notification)"\r
              class="action-btn view-btn"\r
              (click)="navigateToReference(notification)"\r
              [title]="translate('notifications.view_details')"\r
            >\r
              <svg\r
                width="14"\r
                height="14"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>\r
                <circle cx="12" cy="12" r="3"></circle>\r
              </svg>\r
            </button>\r
\r
            <button\r
              *ngIf="!notification.isRead"\r
              class="action-btn read-btn"\r
              (click)="markAsRead(notification)"\r
              [title]="translate('notifications.mark_as_read')"\r
            >\r
              <svg\r
                width="14"\r
                height="14"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <polyline points="20,6 9,17 4,12"></polyline>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
        <p class="notification-message">{{ notification.message }}</p>\r
        <span class="notification-time">{{\r
          formatDate(notification.createdAt)\r
        }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!isLoading && notifications.length === 0" class="empty-state">\r
    <svg\r
      width="64"\r
      height="64"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="1"\r
    >\r
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>\r
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>\r
    </svg>\r
    <p>{{ translate("notifications.no_notifications") }}</p>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="!isLoading && totalPages > 1" class="pagination">\r
    <button\r
      class="page-btn"\r
      [disabled]="currentPage === 1"\r
      (click)="onPageChange(currentPage - 1)"\r
    >\r
      <svg\r
        width="16"\r
        height="16"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <polyline\r
          [attr.points]="isRTL ? '9,18 15,12 9,6' : '15,18 9,12 15,6'"\r
        ></polyline>\r
      </svg>\r
    </button>\r
\r
    <button\r
      *ngFor="let page of getVisiblePages()"\r
      class="page-btn"\r
      [class.active]="page === currentPage"\r
      (click)="onPageChange(page)"\r
    >\r
      {{ page }}\r
    </button>\r
\r
    <button\r
      class="page-btn"\r
      [disabled]="currentPage === totalPages"\r
      (click)="onPageChange(currentPage + 1)"\r
    >\r
      <svg\r
        width="16"\r
        height="16"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <polyline\r
          [attr.points]="isRTL ? '15,18 9,12 15,6' : '9,18 15,12 9,6'"\r
        ></polyline>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <!-- Send Notification Modal -->\r
  <app-add-notification-modal\r
    [isRTL]="isRTL"\r
    [isOpen]="showNotificationModal"\r
    (closeModal)="closeNotificationModal()"\r
    (sendNotification)="onSendNotification($event)">\r
  </app-add-notification-modal>\r
</div>\r
`, styles: ["/* src/app/components/notifications/notifications.css */\n.notifications-page {\n  padding: 1rem;\n  max-width: 1600px;\n  margin: 0 auto;\n  background: #f9fafb;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.125rem;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-title {\n  font-size: 1.3125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.send-notification-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.625rem 1.25rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.send-notification-btn:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.send-notification-btn svg {\n  width: 18px;\n  height: 18px;\n}\n.search-container {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 0.4rem 0.875rem;\n  min-width: 260px;\n}\n.search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.8125rem;\n  color: #111827;\n}\n.search-input::placeholder {\n  color: #9ca3af;\n}\n.search-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.15s ease;\n}\n.search-btn:hover {\n  color: #b68a35;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  gap: 1rem;\n}\n.spinner {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #b68a35;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading-container p {\n  color: #6b7280;\n  font-size: 0.8125rem;\n  margin: 0;\n}\n.notifications-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 0.75rem;\n}\n.notification-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.625rem;\n  transition: all 0.15s ease;\n  display: flex;\n  flex-direction: column;\n  min-height: 110px;\n}\n.notification-card:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);\n}\n.notification-card.unread {\n  background: #fffbf5;\n  border-left: 3px solid #b68a35;\n}\n.notification-card.unread:hover {\n  background: #fffaf0;\n}\n.notification-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.notification-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.4rem;\n  margin-bottom: 0.4rem;\n}\n.notification-title {\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n  font-size: 0.75rem;\n  line-height: 1.3;\n  flex: 1;\n}\n.notification-card.unread .notification-title {\n  font-weight: 600;\n}\n.notification-message {\n  color: #6b7280;\n  margin: 0 0 auto 0;\n  font-size: 0.7rem;\n  line-height: 1.35;\n  line-clamp: 3;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.notification-time {\n  color: #9ca3af;\n  font-size: 0.625rem;\n  font-weight: 400;\n  margin-top: 0.4rem;\n  display: block;\n}\n.notification-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  flex-shrink: 0;\n}\n.action-btn {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.2rem;\n  border-radius: 4px;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-btn:hover {\n  background: #f3f4f6;\n  color: #b68a35;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.75rem;\n  color: #9ca3af;\n  text-align: center;\n}\n.empty-state svg {\n  margin-bottom: 0.875rem;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 0.875rem;\n  margin: 0;\n  color: #6b7280;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  margin-top: 1.5rem;\n  padding-top: 1.125rem;\n  border-top: 1px solid #e5e7eb;\n}\n.page-btn {\n  background: white;\n  border: 1px solid #e5e7eb;\n  color: #6b7280;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.6rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-btn:hover:not(:disabled):not(.active) {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.page-btn.active {\n  background: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  font-weight: 600;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.notifications-page.rtl {\n  direction: rtl;\n}\n.notifications-page.rtl .notification-card.unread {\n  border-left: none;\n  border-right: 3px solid #b68a35;\n}\n@media (max-width: 1200px) {\n  .notifications-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .notifications-page {\n    padding: 0.875rem;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-top {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .page-title {\n    font-size: 1.125rem;\n  }\n  .send-notification-btn {\n    width: 100%;\n    justify-content: center;\n    padding: 0.55rem 1.1rem;\n    font-size: 0.75rem;\n  }\n  .search-container {\n    min-width: 100%;\n  }\n  .notifications-grid {\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    gap: 0.65rem;\n  }\n  .notification-card {\n    padding: 0.575rem;\n    min-height: 100px;\n  }\n  .notification-title {\n    font-size: 0.7rem;\n  }\n  .notification-message {\n    font-size: 0.65rem;\n  }\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .page-btn {\n    min-width: 28px;\n    height: 28px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 640px) {\n  .notifications-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=notifications-TF42BNLX.css.map */\n"] }]
  }], () => [{ type: NotificationsService }, { type: TranslationService }, { type: LangService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/components/notifications/notifications.ts", lineNumber: 50 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-4KXWG7NG.js.map
