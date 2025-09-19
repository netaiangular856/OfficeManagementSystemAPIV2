import {
  UsersService
} from "./chunk-QDTX3YAA.js";
import {
  AuthService
} from "./chunk-DNZ6YJ3A.js";
import {
  ConfirmationModalComponent
} from "./chunk-WRZNWFAQ.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-LQXSMMP4.js";
import {
  ImageService
} from "./chunk-P32CWFJ2.js";
import {
  ProfileService
} from "./chunk-TNFDJQHP.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  environment,
  ɵNgNoValidate
} from "./chunk-HY6UJAEU.js";
import {
  CommonModule,
  Component,
  Directive,
  EventEmitter,
  HostListener,
  HttpClient,
  Injectable,
  Input,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  TemplateRef,
  TranslationService,
  ViewContainerRef,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-J5ZZ35GX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/services/sidebar.service.ts
var SidebarService = class _SidebarService {
  // Mapping of routes to their required permissions
  routePermissions = {
    "dashboard": "dashboard.index",
    "users": "user.index",
    "employees": "employee.index",
    "departments": "department.index",
    "tasks": "task.index",
    "my-tasks": "task.index",
    // My Tasks uses the same permission as tasks
    "partners": "partners.index",
    "visits": "visits.index",
    "travel": "travel.index",
    "meetings": "meeting.index",
    "calendar": "calendar.events.get",
    "my-calendar": "calendar.index",
    "letters": "letter.index",
    "documents": "documents.index",
    "workflow": "workFlow.index",
    "roles": "admin.index"
  };
  // Get permission for a specific route
  getRoutePermission(route) {
    return this.routePermissions[route] || null;
  }
  // Get all route permissions
  getAllRoutePermissions() {
    return __spreadValues({}, this.routePermissions);
  }
  // Check if a route has a permission requirement
  hasPermissionRequirement(route) {
    return this.routePermissions.hasOwnProperty(route);
  }
  // Get all available routes (for debugging)
  getAvailableRoutes() {
    return Object.keys(this.routePermissions);
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/shared/sidebar/sidebar.component.ts
var _c0 = () => ({ exact: true });
function SidebarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function SidebarComponent_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileSidebar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "line", 30)(3, "line", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", "Close sidebar");
  }
}
function SidebarComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function SidebarComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCollapse());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "polyline", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-expanded", !ctx_r1.isCollapsed())("aria-label", ctx_r1.isCollapsed() ? "Expand sidebar" : "Collapse sidebar");
    \u0275\u0275advance();
    \u0275\u0275classProp("rotated", ctx_r1.isCollapsed());
  }
}
function SidebarComponent_li_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.dashboard"));
  }
}
function SidebarComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 37)(4, "polyline", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_li_7_span_5_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-current", ctx_r1.isActiveRoute("dashboard") ? "page" : null);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.users"));
  }
}
function SidebarComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 41)(4, "circle", 42)(5, "path", 43)(6, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SidebarComponent_li_8_span_7_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-current", ctx_r1.isActiveRoute("users") ? "page" : null);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_9_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.employees"));
  }
}
function SidebarComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "circle", 42)(4, "path", 47)(5, "circle", 48)(6, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SidebarComponent_li_9_span_7_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-current", ctx_r1.isActiveRoute("employees") ? "page" : null);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_10_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.tasks"));
  }
}
function SidebarComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 51)(4, "polyline", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SidebarComponent_li_10_span_5_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.myTasks"));
  }
}
function SidebarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 54)(4, "rect", 55)(5, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_11_span_6_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.partners"));
  }
}
function SidebarComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "path", 59)(4, "path", 60)(5, "path", 61)(6, "path", 62)(7, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SidebarComponent_li_12_span_8_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_13_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.visits"));
  }
}
function SidebarComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "rect", 65)(4, "line", 66)(5, "line", 67)(6, "line", 68)(7, "circle", 69)(8, "circle", 70)(9, "circle", 71)(10, "circle", 72)(11, "line", 73)(12, "line", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SidebarComponent_li_13_span_13_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.travel"));
  }
}
function SidebarComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 76);
    \u0275\u0275element(3, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SidebarComponent_li_14_span_4_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.meetings"));
  }
}
function SidebarComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "path", 79)(4, "path", 80)(5, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_15_span_6_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.my_calendar"));
  }
}
function SidebarComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "rect", 65)(4, "line", 66)(5, "line", 67)(6, "line", 68)(7, "circle", 83)(8, "circle", 84)(9, "circle", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SidebarComponent_li_16_span_10_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_17_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.calendar"));
  }
}
function SidebarComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "rect", 65)(4, "line", 66)(5, "line", 67)(6, "line", 68)(7, "circle", 83)(8, "circle", 84)(9, "circle", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SidebarComponent_li_17_span_10_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_18_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.letters"));
  }
}
function SidebarComponent_li_18__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "polyline", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rotated", ctx_r1.isSubmenuOpen("letters"));
  }
}
function SidebarComponent_li_18_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 95)(1, "li", 96)(2, "a", 97)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "li", 96)(6, "a", 98)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("open", ctx_r1.isSubmenuOpen("letters"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isActiveRoute("letters") && !ctx_r1.isActiveRoute("letters/approval"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.all_letters"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.isActiveRoute("letters/approval"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.letters_approval"));
  }
}
function SidebarComponent_li_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 35)(1, "div", 87);
    \u0275\u0275listener("click", function SidebarComponent_li_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSubmenu("letters"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 88)(4, "polyline", 89)(5, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_18_span_6_Template, 2, 1, "span", 15)(7, SidebarComponent_li_18__svg_svg_7_Template, 2, 2, "svg", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SidebarComponent_li_18_ul_8_Template, 9, 8, "ul", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isActiveRoute("letters") || ctx_r1.isSubmenuOpen("letters"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.documents"));
  }
}
function SidebarComponent_li_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 100)(4, "polyline", 101)(5, "line", 102)(6, "line", 103)(7, "polyline", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SidebarComponent_li_19_span_8_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.workflow"));
  }
}
function SidebarComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 106)(4, "path", 107)(5, "path", 108)(6, "path", 109)(7, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SidebarComponent_li_20_span_8_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_21_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.departments"));
  }
}
function SidebarComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "rect", 112)(4, "rect", 113)(5, "rect", 114)(6, "rect", 115);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SidebarComponent_li_21_span_7_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_li_24_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.roles"));
  }
}
function SidebarComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "a", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 117);
    \u0275\u0275element(3, "path", 118)(4, "path", 119)(5, "circle", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SidebarComponent_li_24_span_6_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-current", ctx_r1.isActiveRoute("roles") ? "page" : null);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isCollapsed() || ctx_r1.isExpanded() || ctx_r1._mobileOpen());
  }
}
function SidebarComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.send_notification"));
  }
}
function SidebarComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "span", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFullName());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPrimaryRole());
  }
}
function SidebarComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("sidebar.logout"));
  }
}
var SidebarComponent = class _SidebarComponent {
  router;
  translationService;
  langService;
  authService;
  profileService;
  imageService;
  sidebarService;
  set rtl(value) {
    this.isRTL.set(value);
  }
  set isMobile(value) {
    this._isMobile.set(value);
  }
  set mobileOpen(value) {
    this._mobileOpen.set(value);
  }
  collapsedChange = new EventEmitter();
  logoutConfirmRequested = new EventEmitter();
  notificationModalRequested = new EventEmitter();
  mobileSidebarClose = new EventEmitter();
  isCollapsed = signal(false, ...ngDevMode ? [{ debugName: "isCollapsed" }] : []);
  isExpanded = signal(false, ...ngDevMode ? [{ debugName: "isExpanded" }] : []);
  // For small screen expansion
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  _isMobile = signal(false, ...ngDevMode ? [{ debugName: "_isMobile" }] : []);
  _mobileOpen = signal(false, ...ngDevMode ? [{ debugName: "_mobileOpen" }] : []);
  // User profile data
  userProfile = signal(null, ...ngDevMode ? [{ debugName: "userProfile" }] : []);
  // Submenu state
  openSubmenus = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "openSubmenus" }] : []);
  constructor(router, translationService, langService, authService, profileService, imageService, sidebarService) {
    this.router = router;
    this.translationService = translationService;
    this.langService = langService;
    this.authService = authService;
    this.profileService = profileService;
    this.imageService = imageService;
    this.sidebarService = sidebarService;
  }
  ngOnInit() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
    this.loadUserProfile();
    console.log("Sidebar component initialized");
  }
  ngOnDestroy() {
  }
  loadUserProfile() {
    this.profileService.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          this.userProfile.set(response.data);
        }
      },
      error: (error) => {
        console.error("Error loading user profile:", error);
      }
    });
  }
  // Check if sidebar should be visible (not hidden on mobile)
  isSidebarVisible() {
    if (this._isMobile()) {
      return this._mobileOpen();
    }
    return true;
  }
  toggleCollapse() {
    this.isCollapsed.update((current) => !current);
    this.collapsedChange.emit(this.isCollapsed());
  }
  toggleExpand() {
    this.isExpanded.update((current) => !current);
  }
  closeMobileSidebar() {
    this.mobileSidebarClose.emit();
  }
  isActiveRoute(route) {
    const currentUrl = this.router.url;
    if (route === "letters") {
      return currentUrl === "/letters" || currentUrl.startsWith("/letters/") && currentUrl !== "/letters/approval";
    }
    if (route === "letters/approval") {
      return currentUrl === "/letters/approval";
    }
    return currentUrl === `/${route}` || currentUrl.startsWith(`/${route}/`);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  openLogoutConfirm() {
    this.logoutConfirmRequested.emit();
  }
  openNotificationModal() {
    this.notificationModalRequested.emit();
  }
  closeNotificationModal() {
  }
  onSendNotification(notificationData) {
    console.log("Sending notification:", notificationData);
    this.closeNotificationModal();
  }
  getFullName() {
    const profile = this.userProfile();
    if (profile) {
      return `${profile.firstName} ${profile.lastName}`;
    }
    return "User";
  }
  getPrimaryRole() {
    const profile = this.userProfile();
    if (profile && profile.roles && profile.roles.length > 0) {
      return profile.roles[0];
    }
    return "User";
  }
  getUserImageUrl() {
    const profile = this.userProfile();
    if (profile) {
      return this.imageService.getImageUrl(profile.imageUrl, `${profile.firstName} ${profile.lastName}`);
    }
    return this.imageService.getImageUrl();
  }
  getUserInitials() {
    const profile = this.userProfile();
    if (profile) {
      return this.imageService.getUserInitials(profile.firstName, profile.lastName);
    }
    return "U";
  }
  // Check if user has permission for a specific route
  hasRoutePermission(route) {
    const requiredPermission = this.sidebarService.getRoutePermission(route);
    if (!requiredPermission) {
      return false;
    }
    return this.authService.hasPermission(requiredPermission);
  }
  // Get permission for a route (used in template)
  getRoutePermission(route) {
    const permission = this.sidebarService.getRoutePermission(route);
    return permission || "";
  }
  // Submenu functionality
  toggleSubmenu(menuName) {
    const currentOpen = this.openSubmenus();
    const newOpen = new Set(currentOpen);
    if (newOpen.has(menuName)) {
      newOpen.delete(menuName);
    } else {
      newOpen.add(menuName);
    }
    this.openSubmenus.set(newOpen);
  }
  isSubmenuOpen(menuName) {
    return this.openSubmenus().has(menuName);
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(SidebarService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], inputs: { rtl: "rtl", isMobile: "isMobile", mobileOpen: "mobileOpen" }, outputs: { collapsedChange: "collapsedChange", logoutConfirmRequested: "logoutConfirmRequested", notificationModalRequested: "notificationModalRequested", mobileSidebarClose: "mobileSidebarClose" }, standalone: false, decls: 46, vars: 34, consts: [[1, "sidebar"], [1, "sidebar-header"], ["class", "logo-section", 4, "ngIf"], ["class", "mobile-close-btn", 3, "click", 4, "ngIf"], ["class", "collapse-btn", 3, "click", 4, "ngIf"], [1, "sidebar-nav", "custom-scrollbar"], [1, "nav-list"], ["class", "nav-item", 4, "ngIf"], [1, "nav-divider"], [1, "sidebar-bottom"], [1, "bottom-section"], [1, "nav-link", "notification-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Send notification", "role", "img", 1, "nav-icon"], ["d", "M18 10a6 6 0 10-12 0v2c0 1.6-.6 3.1-1.6 4.2h15.2A6.2 6.2 0 0 1 18 12v-2"], ["d", "M13.5 20a1.5 1.5 0 0 1-3 0"], ["class", "nav-text", 4, "ngIf"], ["routerLink", "/profile", 1, "user-profile-section", 2, "cursor", "pointer"], [1, "user-profile-info"], [1, "user-avatar"], [1, "profile-pic", 3, "error", "src", "alt"], ["class", "user-details", 4, "ngIf"], [1, "nav-link", "logout-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-icon"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16,17 21,12 16,7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "logo-section"], ["src", "/logo.png", "alt", "EcoOffice", 1, "logo"], [1, "mobile-close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "collapse-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chevron-icon"], ["points", "15,18 9,12 15,6"], [1, "nav-item"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], [1, "nav-text"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-link"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 1 0 7.75"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/employees", "routerLinkActive", "active", 1, "nav-link"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "nav-icon"], ["d", "M3 21v-2a4 4 0 0 1 4-4h4"], ["cx", "20", "cy", "9", "r", "3"], ["d", "M17 21v-2a3 3 0 0 1 3-3h3"], ["routerLink", "/tasks", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], ["routerLink", "/tasks/my-tasks", "routerLinkActive", "active", 1, "nav-link"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["x", "8", "y", "2", "width", "8", "height", "4", "rx", "1", "ry", "1"], ["d", "M9 12l2 2 4-4"], ["routerLink", "/partners", "routerLinkActive", "active", 1, "nav-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-handshake-icon", "lucide-handshake"], ["d", "m11 17 2 2a1 1 0 1 0 3-3"], ["d", "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"], ["d", "m21 3 1 11h-2"], ["d", "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"], ["d", "M3 4h8"], ["routerLink", "/visits", "routerLinkActive", "active", 1, "nav-link"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["cx", "8", "cy", "14", "r", "1.5", "fill", "currentColor"], ["cx", "12", "cy", "14", "r", "1.5", "fill", "currentColor"], ["cx", "16", "cy", "14", "r", "1.5", "fill", "currentColor"], ["cx", "12", "cy", "18", "r", "2"], ["x1", "12", "y1", "18", "x2", "12", "y2", "16", "stroke-width", "1.5"], ["x1", "12", "y1", "18", "x2", "13.5", "y2", "18", "stroke-width", "1.5"], ["routerLink", "/travel", "routerLinkActive", "active", 1, "nav-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-plane-icon", "lucide-plane"], ["d", "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"], ["routerLink", "/meetings", "routerLinkActive", "active", 1, "nav-link"], ["d", "M2 3h20"], ["d", "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"], ["d", "m7 21 5-5 5 5"], ["routerLink", "/my-calendar", "routerLinkActive", "active", 1, "nav-link"], ["cx", "8", "cy", "14", "r", "1"], ["cx", "12", "cy", "14", "r", "1"], ["cx", "16", "cy", "14", "r", "1"], ["routerLink", "/calendar", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-link", 3, "click"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["d", "M2 8l10 5 10-5"], ["class", "nav-arrow", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 3, "rotated", 4, "ngIf"], ["class", "submenu", 3, "open", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-arrow"], ["points", "6,9 12,15 18,9"], [1, "submenu"], [1, "submenu-item"], ["routerLink", "/letters", 1, "submenu-link"], ["routerLink", "/letters/approval", 1, "submenu-link"], ["routerLink", "/documents", "routerLinkActive", "active", 1, "nav-link"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10,9 9,9 8,9"], ["routerLink", "/workflow", "routerLinkActive", "active", 1, "nav-link"], ["d", "M3 3h6l3 3h9v12H3z"], ["d", "M9 3v6h6"], ["d", "M12 9h6"], ["d", "M12 12h6"], ["d", "M12 15h6"], ["routerLink", "/departments", "routerLinkActive", "active", 1, "nav-link"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["routerLink", "/roles", "routerLinkActive", "active", 1, "nav-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-shield-user-icon", "lucide-shield-user"], ["d", "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"], ["d", "M6.376 18.91a6 6 0 0 1 11.249.003"], ["cx", "12", "cy", "11", "r", "4"], [1, "user-details"], [1, "user-name"], [1, "user-role"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1);
      \u0275\u0275template(2, SidebarComponent_div_2_Template, 2, 0, "div", 2)(3, SidebarComponent_button_3_Template, 4, 1, "button", 3)(4, SidebarComponent_button_4_Template, 3, 4, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav", 5)(6, "ul", 6);
      \u0275\u0275template(7, SidebarComponent_li_7_Template, 6, 2, "li", 7)(8, SidebarComponent_li_8_Template, 8, 2, "li", 7)(9, SidebarComponent_li_9_Template, 8, 2, "li", 7)(10, SidebarComponent_li_10_Template, 6, 3, "li", 7)(11, SidebarComponent_li_11_Template, 7, 1, "li", 7)(12, SidebarComponent_li_12_Template, 9, 1, "li", 7)(13, SidebarComponent_li_13_Template, 14, 1, "li", 7)(14, SidebarComponent_li_14_Template, 5, 1, "li", 7)(15, SidebarComponent_li_15_Template, 7, 1, "li", 7)(16, SidebarComponent_li_16_Template, 11, 1, "li", 7)(17, SidebarComponent_li_17_Template, 11, 1, "li", 7)(18, SidebarComponent_li_18_Template, 9, 5, "li", 7)(19, SidebarComponent_li_19_Template, 9, 1, "li", 7)(20, SidebarComponent_li_20_Template, 9, 1, "li", 7)(21, SidebarComponent_li_21_Template, 8, 1, "li", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "div", 8);
      \u0275\u0275elementStart(23, "ul", 6);
      \u0275\u0275template(24, SidebarComponent_li_24_Template, 7, 2, "li", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9)(27, "div", 10)(28, "button", 11);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_28_listener() {
        return ctx.openNotificationModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 12);
      \u0275\u0275element(30, "path", 13)(31, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, SidebarComponent_span_32_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 10)(34, "div", 16)(35, "div", 17)(36, "div", 18)(37, "img", 19);
      \u0275\u0275listener("error", function SidebarComponent_Template_img_error_37_listener($event) {
        return $event.target.src = "assets/images/user.png";
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, SidebarComponent_div_38_Template, 5, 2, "div", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 10)(40, "button", 21);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_40_listener() {
        return ctx.openLogoutConfirm();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 22);
      \u0275\u0275element(42, "path", 23)(43, "polyline", 24)(44, "line", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, SidebarComponent_span_45_Template, 2, 1, "span", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("collapsed", ctx.isCollapsed())("expanded", ctx.isExpanded())("rtl", ctx.isRTL())("mobile-hidden", ctx._isMobile() && !ctx._mobileOpen())("mobile-visible", ctx._isMobile() && ctx._mobileOpen());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isCollapsed() || ctx.isExpanded() || ctx._mobileOpen());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx._isMobile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx._isMobile());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("dashboard"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("users"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("employees"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("tasks"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("my-tasks"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("partners"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("visits"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("travel"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("meetings"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("my-calendar"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("calendar"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("letters"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("documents"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("workflow"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("departments"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.hasRoutePermission("roles"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", !ctx.isCollapsed() || ctx.isExpanded() || ctx._mobileOpen());
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.getUserImageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx.getFullName());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed() || ctx.isExpanded() || ctx._mobileOpen());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", !ctx.isCollapsed() || ctx.isExpanded() || ctx._mobileOpen());
    }
  }, dependencies: [NgIf, RouterLink, RouterLinkActive], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 10px;\n  left: 0;\n  height: 100vh;\n  width: var(--sidebar-w);\n  background-color: #FFFFFF;\n  -webkit-backdrop-filter: blur(50px) !important;\n  backdrop-filter: blur(50px) !important;\n  border-right: 1px solid var(--border-color);\n  transition:\n    width 0.3s ease,\n    padding 0.3s ease,\n    left 0.3s ease,\n    right 0.3s ease;\n  overflow: hidden;\n  border-radius: 0 30px 30px 0;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar.rtl[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0px;\n  border-right: none;\n  border-left: 1px solid var(--border-color);\n  border-radius: 30px 0px 0px 0px;\n}\n.sidebar[_ngcontent-%COMP%]:not(.rtl) {\n  left: 0px;\n  right: auto;\n  border-right: 1px solid var(--border-color);\n  border-radius: 0px 30px 0px 0px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-w-collapsed);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n  display: none;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n  background-color: white;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 2px solid rgb(0, 0, 0, 0.12);\n  color: #8b8b8b !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  color: var(--text-secondary);\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  background-color: #BFAB86;\n  color: #ecf4e9 !important;\n  color: var(--text-primary);\n}\n.mobile-expand-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #158638;\n  color: #158638 !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-expand-btn[_ngcontent-%COMP%]:hover {\n  background-color: #158638;\n  color: #ecf4e9 !important;\n}\n.mobile-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 2px solid #ef4444;\n  color: #ef4444 !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n}\n.mobile-close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ef4444;\n  color: white !important;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.chevron-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 151px;\n  height: 50px;\n  object-fit: contain;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  color: var(--brand-green);\n  font-size: 1.25rem;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  height: calc(100vh - 270px);\n  display: flex;\n  background-color: #ffffff;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 0.375rem;\n  font-size: 16px !important;\n  margin: 0 0.5rem;\n  font-weight: 600;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    box-shadow 0.2s ease;\n  position: relative;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: #e6d7a22d;\n  color: #5F646D;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: var(--shadow-light);\n}\n.nav-link.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-link.rtl.active[_ngcontent-%COMP%]::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-icon[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #5F646D;\n}\n.nav-text[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 18px !important;\n  font-weight: 600;\n  white-space: nowrap;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  width: 95%;\n  text-align: start;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1) !important;\n  color: #ef4444 !important;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);\n}\n.logout-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.nav-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: var(--border-color);\n  margin: 1rem 0.5rem;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  inset-inline-start: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--text-primary);\n  color: white;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  z-index: 1001;\n  margin-inline-start: 0.5rem;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n}\n.sidebar.rtl.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  inset-inline-end: 100%;\n  inset-inline-start: auto;\n  margin-inline-end: 0.5rem;\n  margin-inline-start: 0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 280px;\n    z-index: 999;\n    transition: transform 0.3s ease, visibility 0.3s ease;\n    transform: translateX(-100%);\n    visibility: hidden;\n    pointer-events: none;\n  }\n  .sidebar.mobile-visible[_ngcontent-%COMP%] {\n    pointer-events: auto;\n  }\n  .sidebar.rtl[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .sidebar.mobile-visible[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    visibility: visible;\n    pointer-events: auto;\n  }\n  .sidebar.rtl.mobile-visible[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    pointer-events: auto;\n  }\n  .mobile-close-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .collapse-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar.mobile-visible[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%], \n   .sidebar.mobile-visible[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%], \n   .sidebar.mobile-visible[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n    display: flex;\n  }\n  .sidebar.mobile-visible[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 0.75rem 1rem;\n  }\n}\n@media (min-width: 769px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: none !important;\n    visibility: visible !important;\n    width: var(--sidebar-w);\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: var(--sidebar-w-collapsed);\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n    display: none;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n    display: none;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 1rem 0.5rem;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .mobile-expand-btn[_ngcontent-%COMP%], \n   .mobile-close-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collapse-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sidebar.mobile-hidden[_ngcontent-%COMP%], \n   .sidebar.mobile-visible[_ngcontent-%COMP%] {\n    transform: none !important;\n    visibility: visible !important;\n  }\n}\n.user-profile-section[_ngcontent-%COMP%] {\n  color: #09365f;\n  margin: 0 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  width: 95%;\n}\n.user-profile-info[_ngcontent-%COMP%]:hover {\n  background: #BFAB86 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);\n}\n.user-profile-info[_ngcontent-%COMP%]:hover   .user-name[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n.user-profile-section[_ngcontent-%COMP%]:hover   .user-role[_ngcontent-%COMP%] {\n  color: #ebd5ab !important;\n}\n.user-profile-info[_ngcontent-%COMP%] {\n  border: 1px solid #BFAB86 !important;\n  border-radius: 12px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.user-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #8b8b8b;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8b8b8b;\n  font-weight: 500;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: #ffdcd4 !important;\n  color: #ff7253 !important;\n  border-radius: 8px !important;\n  margin: 0 0.5rem !important;\n  padding: 0.75rem 1rem !important;\n  font-weight: 600 !important;\n  transition: all 0.3s ease !important;\n  margin-bottom: 1rem !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626 !important;\n  border-color: #dc2626 !important;\n  color: white !important;\n  transform: translateY(-2px) !important;\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4) !important;\n}\n.logout-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3) !important;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  background: white;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 10;\n}\n.bottom-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  background: #F2ECCF !important;\n  color: #7C5E24 !important;\n  border: 1px solid #CBA344 !important;\n  border-radius: 12px !important;\n  padding: 0.75rem 1rem !important;\n  width: 100% !important;\n  transition: all 0.3s ease !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 0.5rem !important;\n  justify-content: center !important;\n}\n.notification-btn[_ngcontent-%COMP%]:hover {\n  background: #E6D7A2 !important;\n  color: #92722A !important;\n  border: 1px solid #CBA344 !important;\n  box-shadow: 0 4px 15px rgba(230, 215, 18, 0.3) !important;\n}\n.notification-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n  box-shadow: 0 2px 8px rgba(2, 119, 189, 0.3) !important;\n}\n@media (max-width: 768px) {\n  .sidebar-bottom[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .bottom-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .notification-btn[_ngcontent-%COMP%], \n   .logout-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    justify-content: center !important;\n  }\n  .user-profile-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .user-profile-info[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-bottom[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .bottom-section[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .notification-btn[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  width: 100% !important;\n  justify-content: center !important;\n  padding: 0.75rem !important;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .user-profile-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .user-profile-info[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  padding: 0.75rem !important;\n}\n.sidebar[_ngcontent-%COMP%]:not(.collapsed)   .sidebar-bottom[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.sidebar.rtl[_ngcontent-%COMP%]   .sidebar-bottom[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n}\n.sidebar-bottom[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background-color: rgba(223, 183, 54, 0.329);\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.submenu.open[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n.submenu-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.submenu-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem 0.5rem 2.5rem;\n  color: #333333;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  border-radius: 6px;\n  margin: 0.25rem 0;\n}\n.submenu-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: var(--primary-color);\n}\n.submenu-link.active[_ngcontent-%COMP%] {\n  background-color: #BFAB86;\n  color: white;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.nav-link[class*=active][_ngcontent-%COMP%] {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: var(--shadow-light);\n}\n.nav-link[class*=active][_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-link.rtl[class*=active][_ngcontent-%COMP%]::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-item[_ngcontent-%COMP%]:has(.submenu.open)   .nav-link[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.nav-item[_ngcontent-%COMP%]:has(.submenu.open)   .nav-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-item[_ngcontent-%COMP%]:has(.submenu.open)   .nav-link.rtl[_ngcontent-%COMP%]::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-item[_ngcontent-%COMP%]:has(.submenu.open)   .nav-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.nav-arrow[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  margin-left: auto;\n}\n.nav-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.sidebar.rtl[_ngcontent-%COMP%]   .submenu-link[_ngcontent-%COMP%] {\n  padding: 0.5rem 2.5rem 0.5rem 1rem;\n}\n.sidebar.rtl[_ngcontent-%COMP%]   .nav-arrow[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=sidebar.component-ZFYCGBEA.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: false, template: `<aside\r
  class="sidebar"\r
  [class.collapsed]="isCollapsed()"\r
  [class.expanded]="isExpanded()"\r
  [class.rtl]="isRTL()"\r
  [class.mobile-hidden]="_isMobile() && !_mobileOpen()"\r
  [class.mobile-visible]="_isMobile() && _mobileOpen()"\r
>\r
  <div class="sidebar-header">\r
    <div class="logo-section" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">\r
      <img src="/logo.png" alt="EcoOffice" class="logo" />\r
    </div>\r
    \r
    <!-- Mobile close button -->\r
    <button\r
      *ngIf="_isMobile()"\r
      class="mobile-close-btn"\r
      (click)="closeMobileSidebar()"\r
      [attr.aria-label]="'Close sidebar'"\r
    >\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
      </svg>\r
    </button>\r
    \r
    <!-- Desktop collapse button -->\r
    <button\r
      *ngIf="!_isMobile()"\r
      class="collapse-btn"\r
      (click)="toggleCollapse()"\r
      [attr.aria-expanded]="!isCollapsed()"\r
      [attr.aria-label]="isCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"\r
    >\r
      <svg\r
        class="chevron-icon"\r
        [class.rotated]="isCollapsed()"\r
        width="20"\r
        height="20"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <polyline points="15,18 9,12 15,6"></polyline>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <nav class="sidebar-nav custom-scrollbar">\r
    <ul class="nav-list">\r
      <li class="nav-item" *ngIf="hasRoutePermission('dashboard')">\r
        <a\r
          routerLink="/dashboard"\r
          routerLinkActive="active"\r
          class="nav-link"\r
          [attr.aria-current]="isActiveRoute('dashboard') ? 'page' : null"\r
        >\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>\r
            <polyline points="9,22 9,12 15,12 15,22"></polyline>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.dashboard")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('users')">\r
        <a\r
          routerLink="/users"\r
          routerLinkActive="active"\r
          class="nav-link"\r
          [attr.aria-current]="isActiveRoute('users') ? 'page' : null"\r
        >\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
            <circle cx="9" cy="7" r="4"></circle>\r
            <path d="M23 21v-2a4 4 0 0 1 0 7.75"></path>\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.users")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('employees')">\r
        <a\r
          routerLink="/employees"\r
          routerLinkActive="active"\r
          class="nav-link"\r
          [attr.aria-current]="isActiveRoute('employees') ? 'page' : null"\r
        >\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <circle cx="9" cy="7" r="4"></circle>\r
            <path d="M3 21v-2a4 4 0 0 1 4-4h4"></path>\r
            <circle cx="20" cy="9" r="3"></circle>\r
            <path d="M17 21v-2a3 3 0 0 1 3-3h3"></path>\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.employees")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('tasks')">\r
        <a routerLink="/tasks" \r
           routerLinkActive="active" \r
           [routerLinkActiveOptions]="{ exact: true }"\r
           class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
            <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.tasks")\r
          }}</span>\r
        </a>\r
      </li>\r
      \r
      <li class="nav-item" *ngIf="hasRoutePermission('my-tasks')">\r
        <a routerLink="/tasks/my-tasks" \r
           routerLinkActive="active" \r
           class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\r
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\r
            <path d="M9 12l2 2 4-4"></path>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.myTasks")\r
          }}</span>\r
        </a>\r
      </li>\r
      <li class="nav-item" *ngIf="hasRoutePermission('partners')">\r
        <a routerLink="/partners" routerLinkActive="active" class="nav-link">\r
          <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="lucide lucide-handshake-icon lucide-handshake"\r
          >\r
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />\r
            <path\r
              d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"\r
            />\r
            <path d="m21 3 1 11h-2" />\r
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />\r
            <path d="M3 4h8" />\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.partners")\r
          }}</span>\r
        </a>\r
      </li>\r
      <li class="nav-item" *ngIf="hasRoutePermission('visits')">\r
        <a routerLink="/visits" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <!-- Calendar with visit indicator -->\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
            <!-- Visit dots -->\r
            <circle cx="8" cy="14" r="1.5" fill="currentColor"></circle>\r
            <circle cx="12" cy="14" r="1.5" fill="currentColor"></circle>\r
            <circle cx="16" cy="14" r="1.5" fill="currentColor"></circle>\r
            <!-- Clock for appointment time -->\r
            <circle cx="12" cy="18" r="2"></circle>\r
            <line x1="12" y1="18" x2="12" y2="16" stroke-width="1.5"></line>\r
            <line x1="12" y1="18" x2="13.5" y2="18" stroke-width="1.5"></line>\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.visits")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('travel')">\r
        <a routerLink="/travel" routerLinkActive="active" class="nav-link">\r
          <svg\r
            xmlns="http://www.w3.org/2000/svg"\r
            width="24"\r
            height="24"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
            class="lucide lucide-plane-icon lucide-plane"\r
          >\r
            <path\r
              d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"\r
            />\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.travel")\r
          }}</span>\r
        </a>\r
      </li>\r
      <li class="nav-item" *ngIf="hasRoutePermission('meetings')">\r
        <a routerLink="/meetings" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <path d="M2 3h20" />\r
            <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />\r
            <path d="m7 21 5-5 5 5" />\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.meetings")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('my-calendar')">\r
        <a routerLink="/my-calendar" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
            <circle cx="8" cy="14" r="1"></circle>\r
            <circle cx="12" cy="14" r="1"></circle>\r
            <circle cx="16" cy="14" r="1"></circle>\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.my_calendar")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('calendar')">\r
        <a routerLink="/calendar" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
            <circle cx="8" cy="14" r="1"></circle>\r
            <circle cx="12" cy="14" r="1"></circle>\r
            <circle cx="16" cy="14" r="1"></circle>\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.calendar")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('letters')">\r
        <div class="nav-link" (click)="toggleSubmenu('letters')" [class.active]="isActiveRoute('letters') || isSubmenuOpen('letters')">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"\r
            ></path>\r
            <polyline points="22,6 12,13 2,6"></polyline>\r
            <path d="M2 8l10 5 10-5"></path>\r
          </svg>\r
\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.letters")\r
          }}</span>\r
          \r
          <svg \r
            class="nav-arrow" \r
            width="16" \r
            height="16" \r
            viewBox="0 0 24 24" \r
            fill="none" \r
            stroke="currentColor" \r
            stroke-width="2"\r
            [class.rotated]="isSubmenuOpen('letters')"\r
            *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()"\r
          >\r
            <polyline points="6,9 12,15 18,9"></polyline>\r
          </svg>\r
        </div>\r
        \r
        <ul class="submenu" [class.open]="isSubmenuOpen('letters')" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">\r
          <li class="submenu-item">\r
            <a routerLink="/letters" \r
               [class.active]="isActiveRoute('letters') && !isActiveRoute('letters/approval')" \r
               class="submenu-link">\r
              <span>{{ translate("sidebar.all_letters") }}</span>\r
            </a>\r
          </li>\r
          <li class="submenu-item">\r
            <a routerLink="/letters/approval" \r
               [class.active]="isActiveRoute('letters/approval')" \r
               class="submenu-link">\r
              <span>{{ translate("sidebar.letters_approval") }}</span>\r
            </a>\r
          </li>\r
        </ul>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('documents')">\r
        <a routerLink="/documents" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"\r
            ></path>\r
            <polyline points="14,2 14,8 20,8"></polyline>\r
            <line x1="16" y1="13" x2="8" y2="13"></line>\r
            <line x1="16" y1="17" x2="8" y2="17"></line>\r
            <polyline points="10,9 9,9 8,9"></polyline>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.documents")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('workflow')">\r
        <a routerLink="/workflow" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M3 3h6l3 3h9v12H3z"></path>\r
            <path d="M9 3v6h6"></path>\r
            <path d="M12 9h6"></path>\r
            <path d="M12 12h6"></path>\r
            <path d="M12 15h6"></path>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.workflow")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('departments')">\r
        <a routerLink="/departments" routerLinkActive="active" class="nav-link">\r
          <svg\r
            class="nav-icon"\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.departments")\r
          }}</span>\r
        </a>\r
      </li>\r
    </ul>\r
\r
    <div class="nav-divider"></div>\r
\r
    <ul class="nav-list">\r
\r
      <li class="nav-item" *ngIf="hasRoutePermission('roles')">\r
        <a\r
          routerLink="/roles"\r
          routerLinkActive="active"\r
          class="nav-link"\r
          [attr.aria-current]="isActiveRoute('roles') ? 'page' : null"\r
        >\r
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>\r
          <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
            translate("sidebar.roles")\r
          }}</span>\r
        </a>\r
      </li>\r
\r
    </ul>\r
    <div class="nav-divider"></div>\r
\r
  </nav>\r
\r
  <!-- Fixed Bottom Section -->\r
  <div class="sidebar-bottom">\r
    <!-- Send Notifications Button -->\r
    <div class="bottom-section">\r
      <button class="nav-link notification-btn" (click)="openNotificationModal()">\r
        <svg\r
          class="nav-icon"\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
          stroke-linecap="round"\r
          stroke-linejoin="round"\r
          aria-label="Send notification"\r
          role="img"\r
        >\r
          <path\r
            d="M18 10a6 6 0 10-12 0v2c0 1.6-.6 3.1-1.6 4.2h15.2A6.2 6.2 0 0 1 18 12v-2"\r
          />\r
          <path d="M13.5 20a1.5 1.5 0 0 1-3 0" />\r
        </svg>\r
        <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
          translate("sidebar.send_notification")\r
        }}</span>\r
      </button>\r
    </div>\r
\r
    <!-- User Profile Section -->\r
    <div class="bottom-section">\r
      <div\r
        class="user-profile-section"\r
        routerLink="/profile"\r
        style="cursor: pointer"\r
      >\r
        <div class="user-profile-info">\r
          <div class="user-avatar">\r
            <img\r
              [src]="getUserImageUrl()"\r
              [alt]="getFullName()"\r
              class="profile-pic"\r
              (error)="$event.target.src = 'assets/images/user.png'"\r
            />\r
          </div>\r
          <div class="user-details" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">\r
            <span class="user-name">{{ getFullName() }}</span>\r
            <span class="user-role">{{ getPrimaryRole() }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Logout Button -->\r
    <div class="bottom-section">\r
      <button class="nav-link logout-btn" (click)="openLogoutConfirm()">\r
        <svg\r
          class="nav-icon"\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>\r
          <polyline points="16,17 21,12 16,7"></polyline>\r
          <line x1="21" y1="12" x2="9" y2="12"></line>\r
        </svg>\r
        <span class="nav-text" *ngIf="!isCollapsed() || isExpanded() || _mobileOpen()">{{\r
          translate("sidebar.logout")\r
        }}</span>\r
      </button>\r
    </div>\r
  </div>\r
</aside>\r
`, styles: ['/* src/app/components/shared/sidebar/sidebar.component.css */\n.sidebar {\n  position: fixed;\n  top: 10px;\n  left: 0;\n  height: 100vh;\n  width: var(--sidebar-w);\n  background-color: #FFFFFF;\n  -webkit-backdrop-filter: blur(50px) !important;\n  backdrop-filter: blur(50px) !important;\n  border-right: 1px solid var(--border-color);\n  transition:\n    width 0.3s ease,\n    padding 0.3s ease,\n    left 0.3s ease,\n    right 0.3s ease;\n  overflow: hidden;\n  border-radius: 0 30px 30px 0;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar.rtl {\n  left: auto;\n  right: 0px;\n  border-right: none;\n  border-left: 1px solid var(--border-color);\n  border-radius: 30px 0px 0px 0px;\n}\n.sidebar:not(.rtl) {\n  left: 0px;\n  right: auto;\n  border-right: 1px solid var(--border-color);\n  border-radius: 0px 30px 0px 0px;\n}\n.sidebar.collapsed {\n  width: var(--sidebar-w-collapsed);\n}\n.sidebar.collapsed .logo-section {\n  opacity: 0;\n  pointer-events: none;\n  display: none;\n}\n.sidebar.collapsed .nav-text {\n  opacity: 0;\n  pointer-events: none;\n  display: none;\n}\n.sidebar-header {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n  background-color: white;\n}\n.collapse-btn {\n  background: none;\n  border: 2px solid rgb(0, 0, 0, 0.12);\n  color: #8b8b8b !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  color: var(--text-secondary);\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.collapse-btn:hover {\n  background-color: #BFAB86;\n  color: #ecf4e9 !important;\n  color: var(--text-primary);\n}\n.mobile-expand-btn {\n  background: none;\n  border: 1px solid #158638;\n  color: #158638 !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n}\n.mobile-expand-btn:hover {\n  background-color: #158638;\n  color: #ecf4e9 !important;\n}\n.mobile-close-btn {\n  background: none;\n  border: 2px solid #ef4444;\n  color: #ef4444 !important;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 999rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n}\n.mobile-close-btn:hover {\n  background-color: #ef4444;\n  color: white !important;\n}\n.chevron-icon {\n  transition: transform 0.3s ease;\n}\n.chevron-icon.rotated {\n  transform: rotate(180deg);\n}\n.logo-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.logo {\n  width: 151px;\n  height: 50px;\n  object-fit: contain;\n}\n.logo-text {\n  font-family: "Poppins", sans-serif;\n  font-weight: 600;\n  color: var(--brand-green);\n  font-size: 1.25rem;\n}\n.sidebar-nav {\n  padding: 1rem 0;\n  height: calc(100vh - 270px);\n  display: flex;\n  background-color: #ffffff;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.sidebar-nav::-webkit-scrollbar {\n  display: none;\n}\n.nav-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-item {\n  margin: 0.25rem 0;\n}\n.nav-link {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 0.375rem;\n  font-size: 16px !important;\n  margin: 0 0.5rem;\n  font-weight: 600;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease,\n    box-shadow 0.2s ease;\n  position: relative;\n}\n.nav-link:hover {\n  background-color: #e6d7a22d;\n  color: #5F646D;\n}\n.nav-link.active {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: var(--shadow-light);\n}\n.nav-link.active::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-link.rtl.active::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-icon .active {\n  flex-shrink: 0;\n  color: #5F646D;\n}\n.nav-text {\n  font-family: inherit;\n  font-size: 18px !important;\n  font-weight: 600;\n  white-space: nowrap;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n.logout-btn {\n  background: transparent;\n  border: none;\n  width: 95%;\n  text-align: start;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.logout-btn:hover {\n  background: rgba(239, 68, 68, 0.1) !important;\n  color: #ef4444 !important;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);\n}\n.logout-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.nav-divider {\n  height: 1px;\n  background-color: var(--border-color);\n  margin: 1rem 0.5rem;\n}\n.sidebar.collapsed .nav-link {\n  position: relative;\n}\n.sidebar.collapsed .nav-link::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  inset-inline-start: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  background-color: var(--text-primary);\n  color: white;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n  z-index: 1001;\n  margin-inline-start: 0.5rem;\n}\n.sidebar.collapsed .nav-link:hover::after {\n  opacity: 1;\n}\n.sidebar.rtl.collapsed .nav-link::after {\n  inset-inline-end: 100%;\n  inset-inline-start: auto;\n  margin-inline-end: 0.5rem;\n  margin-inline-start: 0;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 280px;\n    z-index: 999;\n    transition: transform 0.3s ease, visibility 0.3s ease;\n    transform: translateX(-100%);\n    visibility: hidden;\n    pointer-events: none;\n  }\n  .sidebar.mobile-visible {\n    pointer-events: auto;\n  }\n  .sidebar.rtl {\n    left: auto;\n    right: 0;\n    transform: translateX(100%);\n  }\n  .sidebar.mobile-visible {\n    transform: translateX(0);\n    visibility: visible;\n    pointer-events: auto;\n  }\n  .sidebar.rtl.mobile-visible {\n    transform: translateX(0);\n    pointer-events: auto;\n  }\n  .mobile-close-btn {\n    display: flex;\n  }\n  .collapse-btn {\n    display: none;\n  }\n  .sidebar.mobile-visible .logo-section,\n  .sidebar.mobile-visible .nav-text,\n  .sidebar.mobile-visible .user-details {\n    opacity: 1;\n    pointer-events: auto;\n    display: flex;\n  }\n  .sidebar.mobile-visible .nav-link {\n    justify-content: flex-start;\n    padding: 0.75rem 1rem;\n  }\n}\n@media (min-width: 769px) {\n  .sidebar {\n    transform: none !important;\n    visibility: visible !important;\n    width: var(--sidebar-w);\n  }\n  .sidebar.collapsed {\n    width: var(--sidebar-w-collapsed);\n  }\n  .sidebar.collapsed .logo-section {\n    opacity: 0;\n    pointer-events: none;\n    display: none;\n  }\n  .sidebar.collapsed .nav-text {\n    opacity: 0;\n    pointer-events: none;\n    display: none;\n  }\n  .sidebar.collapsed .nav-link {\n    justify-content: center;\n    padding: 1rem 0.5rem;\n  }\n  .sidebar.collapsed .nav-link svg {\n    margin: 0;\n  }\n  .mobile-expand-btn,\n  .mobile-close-btn {\n    display: none;\n  }\n  .collapse-btn {\n    display: flex;\n  }\n  .sidebar.mobile-hidden,\n  .sidebar.mobile-visible {\n    transform: none !important;\n    visibility: visible !important;\n  }\n}\n.user-profile-section {\n  color: #09365f;\n  margin: 0 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 0.3s ease;\n  cursor: pointer;\n  width: 95%;\n}\n.user-profile-info:hover {\n  background: #BFAB86 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);\n}\n.user-profile-info:hover .user-name {\n  color: #ffffff !important;\n}\n.user-profile-section:hover .user-role {\n  color: #ebd5ab !important;\n}\n.user-profile-info {\n  border: 1px solid #BFAB86 !important;\n  border-radius: 12px;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.user-avatar {\n  flex-shrink: 0;\n}\n.user-avatar .profile-pic {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n}\n.user-avatar svg {\n  width: 40px;\n  height: 40px;\n  color: #8b8b8b;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.user-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.user-name {\n  font-weight: 600;\n  color: #333333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  font-size: 12px;\n  color: #8b8b8b;\n  font-weight: 500;\n}\n.logout-btn {\n  background: #ffdcd4 !important;\n  color: #ff7253 !important;\n  border-radius: 8px !important;\n  margin: 0 0.5rem !important;\n  padding: 0.75rem 1rem !important;\n  font-weight: 600 !important;\n  transition: all 0.3s ease !important;\n  margin-bottom: 1rem !important;\n}\n.logout-btn:hover {\n  background: #dc2626 !important;\n  border-color: #dc2626 !important;\n  color: white !important;\n  transform: translateY(-2px) !important;\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4) !important;\n}\n.logout-btn:active {\n  transform: translateY(0) !important;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3) !important;\n}\n.sidebar-bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem;\n  background: white;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 10;\n}\n.bottom-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.notification-btn {\n  background: #F2ECCF !important;\n  color: #7C5E24 !important;\n  border: 1px solid #CBA344 !important;\n  border-radius: 12px !important;\n  padding: 0.75rem 1rem !important;\n  width: 100% !important;\n  transition: all 0.3s ease !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 0.5rem !important;\n  justify-content: center !important;\n}\n.notification-btn:hover {\n  background: #E6D7A2 !important;\n  color: #92722A !important;\n  border: 1px solid #CBA344 !important;\n  box-shadow: 0 4px 15px rgba(230, 215, 18, 0.3) !important;\n}\n.notification-btn:active {\n  transform: translateY(0) !important;\n  box-shadow: 0 2px 8px rgba(2, 119, 189, 0.3) !important;\n}\n@media (max-width: 768px) {\n  .sidebar-bottom {\n    padding: 0.75rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .bottom-section {\n    width: 100%;\n  }\n  .notification-btn,\n  .logout-btn {\n    width: 100% !important;\n    justify-content: center !important;\n  }\n  .user-profile-section {\n    width: 100%;\n  }\n  .user-profile-info {\n    justify-content: center !important;\n  }\n}\n.sidebar.collapsed .sidebar-bottom {\n  padding: 0.5rem;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n}\n.sidebar.collapsed .bottom-section {\n  width: 100%;\n  justify-content: center;\n}\n.sidebar.collapsed .notification-btn,\n.sidebar.collapsed .logout-btn {\n  width: 100% !important;\n  justify-content: center !important;\n  padding: 0.75rem !important;\n}\n.sidebar.collapsed .user-profile-section {\n  width: 100%;\n}\n.sidebar.collapsed .user-profile-info {\n  justify-content: center !important;\n  padding: 0.75rem !important;\n}\n.sidebar:not(.collapsed) .sidebar-bottom {\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.sidebar.rtl .sidebar-bottom {\n  left: 0;\n  right: 0;\n}\n.sidebar-bottom {\n  transition: all 0.3s ease;\n}\n.submenu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background-color: rgba(223, 183, 54, 0.329);\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.submenu.open {\n  max-height: 200px;\n}\n.submenu-item {\n  margin: 0;\n}\n.submenu-link {\n  display: block;\n  padding: 0.5rem 1rem 0.5rem 2.5rem;\n  color: #333333;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  border-radius: 6px;\n  margin: 0.25rem 0;\n}\n.submenu-link:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: var(--primary-color);\n}\n.submenu-link.active {\n  background-color: #BFAB86;\n  color: white;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.3);\n}\n.nav-link[class*=active] {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: var(--shadow-light);\n}\n.nav-link[class*=active]::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-link.rtl[class*=active]::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-item:has(.submenu.open) .nav-link {\n  background: #BFAB86;\n  color: #FFFFFF;\n  font-size: 18px !important;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.nav-item:has(.submenu.open) .nav-link::before {\n  content: "";\n  position: absolute;\n  inset-inline-start: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 20px;\n  background-color: #ffffff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-item:has(.submenu.open) .nav-link.rtl::before {\n  inset-inline-end: 0;\n  inset-inline-start: auto;\n  border-radius: 2px 0 0 2px;\n}\n.nav-item:has(.submenu.open) .nav-arrow {\n  transform: rotate(180deg);\n}\n.nav-arrow {\n  transition: transform 0.3s ease;\n  margin-left: auto;\n}\n.nav-arrow.rotated {\n  transform: rotate(180deg);\n}\n.sidebar.rtl .submenu-link {\n  padding: 0.5rem 2.5rem 0.5rem 1rem;\n}\n.sidebar.rtl .nav-arrow {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=sidebar.component-ZFYCGBEA.css.map */\n'] }]
  }], () => [{ type: Router }, { type: TranslationService }, { type: LangService }, { type: AuthService }, { type: ProfileService }, { type: ImageService }, { type: SidebarService }], { rtl: [{
    type: Input
  }], isMobile: [{
    type: Input
  }], mobileOpen: [{
    type: Input
  }], collapsedChange: [{
    type: Output
  }], logoutConfirmRequested: [{
    type: Output
  }], notificationModalRequested: [{
    type: Output
  }], mobileSidebarClose: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/components/shared/sidebar/sidebar.component.ts", lineNumber: 18 });
})();

// src/app/services/notifications.service.ts
var NotificationsService = class _NotificationsService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Notification`;
  constructor(http) {
    this.http = http;
  }
  getUserNotification(userId) {
    return this.http.get(`${this.apiUrl}/user`);
  }
  markAsRead(id) {
    return this.http.patch(`${this.apiUrl}/${id}`, {});
  }
  markAllAsRead() {
    return this.http.patch(`${this.apiUrl}/mark-all`, {});
  }
  addNotification(data) {
    return this.http.post(`${this.apiUrl}`, data);
  }
  static \u0275fac = function NotificationsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationsService, factory: _NotificationsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/shared/notification-dropdown/notification-dropdown.component.ts
function NotificationDropdownComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rtl", ctx_r0.isRTL);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount() > 99 ? "99+" : ctx_r0.unreadCount(), " ");
  }
}
function NotificationDropdownComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function NotificationDropdownComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDropdown());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r0.isOpen());
  }
}
function NotificationDropdownComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function NotificationDropdownComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("notifications.mark_all_read"), " ");
  }
}
function NotificationDropdownComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 20);
    \u0275\u0275element(2, "circle", 21)(3, "line", 22)(4, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function NotificationDropdownComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 25)(2, "circle", 26);
    \u0275\u0275element(3, "animate", 27)(4, "animate", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function NotificationDropdownComponent_div_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function NotificationDropdownComponent_div_15_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const notification_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAsRead(notification_r5.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "polyline", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", ctx_r0.translate("notifications.mark_as_read"));
  }
}
function NotificationDropdownComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 33)(5, "h4", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275template(12, NotificationDropdownComponent_div_15_button_12_Template, 3, 1, "button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("unread", !notification_r5.isRead)("read", notification_r5.isRead)("rtl", ctx_r0.isRTL);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getNotificationClass(notification_r5.type || "info"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getNotificationIcon(notification_r5.type || "info"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTimeAgo(notification_r5.timestamp));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !notification_r5.isRead);
  }
}
function NotificationDropdownComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 3)(3, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.translate("notifications.no_notifications"));
  }
}
var NotificationDropdownComponent = class _NotificationDropdownComponent {
  translationService;
  notificationService;
  authService;
  isRTL = false;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  notifications = [];
  unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  currentUserId = "";
  constructor(translationService, notificationService, authService) {
    this.translationService = translationService;
    this.notificationService = notificationService;
    this.authService = authService;
  }
  ngOnInit() {
    this.getCurrentUserId();
    this.loadNotifications();
  }
  getCurrentUserId() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.currentUserId = currentUser.id;
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          this.currentUserId = user.id;
        } catch (e) {
          console.error("Error parsing stored user:", e);
        }
      }
    }
  }
  loadNotifications() {
    this.isLoading.set(true);
    this.error.set("");
    this.notificationService.getUserNotification().subscribe({
      next: (response) => {
        console.log("Notifications loaded:", response);
        if (response.success && response.data) {
          this.notifications = response.data.map((apiNotification) => {
            const userNotification = apiNotification.userNotifications[0];
            const isRead = userNotification ? userNotification.isRead : false;
            return {
              id: apiNotification.id,
              title: apiNotification.title,
              message: apiNotification.message,
              timestamp: new Date(apiNotification.createdAt),
              isRead,
              type: apiNotification.type.toLowerCase()
            };
          });
          this.updateUnreadCount();
        } else {
          this.notifications = [];
          this.error.set("Failed to load notifications");
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        if (err.status === 400 && err.error === "No Notification To Show") {
          this.notifications = [];
          this.error.set("");
        } else {
          console.error("Error loading notifications:", err);
          this.error.set("Failed to load notifications");
        }
        this.isLoading.set(false);
      }
    });
  }
  toggleDropdown() {
    this.isOpen.update((current) => !current);
  }
  closeDropdown() {
    this.isOpen.set(false);
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!this.isOpen())
      return;
    if (!target.closest(".notification-container")) {
      this.closeDropdown();
    }
  }
  onEscapeKey(event) {
    if (this.isOpen()) {
      this.closeDropdown();
    }
  }
  markAsRead(notificationId) {
    this.notificationService.markAsRead(notificationId).subscribe({
      next: (response) => {
        console.log("Notification marked as read:", response);
        const notification = this.notifications.find((n) => n.id === notificationId);
        if (notification) {
          notification.isRead = true;
          this.updateUnreadCount();
        }
      },
      error: (err) => {
        console.error("Error marking notification as read:", err);
        this.error.set("Failed to mark notification as read");
      }
    });
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().subscribe({
      next: (response) => {
        console.log("All notifications marked as read:", response);
        this.notifications.forEach((notification) => {
          notification.isRead = true;
        });
        this.updateUnreadCount();
      },
      error: (err) => {
        console.error("Error marking all notifications as read:", err);
        this.error.set("Failed to mark all notifications as read");
      }
    });
  }
  updateUnreadCount() {
    if (this.notifications && Array.isArray(this.notifications)) {
      const unreadCount = this.notifications.filter((notification) => !notification.isRead).length;
      this.unreadCount.set(unreadCount);
    } else {
      this.unreadCount.set(0);
    }
  }
  getTimeAgo(date) {
    const now = /* @__PURE__ */ new Date();
    const notificationDate = new Date(date);
    if (isNaN(notificationDate.getTime())) {
      return "Invalid date";
    }
    const diffInMs = now.getTime() - notificationDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1e3 * 60));
    const diffInHours = Math.floor(diffInMs / (1e3 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
    if (diffInMinutes < 1)
      return "Just now";
    if (diffInMinutes < 60)
      return `${diffInMinutes}m ago`;
    if (diffInHours < 24)
      return `${diffInHours}h ago`;
    return `${diffInDays}d ago`;
  }
  getNotificationIcon(type) {
    switch (type) {
      case "success":
        return "\u2713";
      case "warning":
        return "\u26A0";
      case "error":
        return "\u2717";
      default:
        return "\u2139";
    }
  }
  getNotificationClass(type) {
    return `notification-${type}`;
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  static \u0275fac = function NotificationDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationDropdownComponent)(\u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(NotificationsService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationDropdownComponent, selectors: [["app-notification-dropdown"]], hostBindings: function NotificationDropdownComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NotificationDropdownComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function NotificationDropdownComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { isRTL: "isRTL" }, standalone: false, decls: 17, vars: 16, consts: [[1, "notification-container"], [1, "notification-bell", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "bell-icon"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], ["class", "unread-badge", 3, "rtl", 4, "ngIf"], ["class", "notification-backdrop", 3, "open", "click", 4, "ngIf"], [1, "notification-dropdown", 3, "click"], [1, "dropdown-header"], [1, "header-title"], ["class", "mark-all-read-btn", 3, "click", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "notifications-list"], ["class", "loading-state", 4, "ngIf"], ["class", "notification-item", 3, "unread", "read", "rtl", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "unread-badge"], [1, "notification-backdrop", 3, "click"], [1, "mark-all-read-btn", 3, "click"], [1, "error-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "loading-state"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "loading-spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "31.416", "stroke-dashoffset", "31.416"], ["attributeName", "stroke-dasharray", "dur", "2s", "values", "0 31.416;15.708 15.708;0 31.416", "repeatCount", "indefinite"], ["attributeName", "stroke-dashoffset", "dur", "2s", "values", "0;-15.708;-31.416", "repeatCount", "indefinite"], [1, "loading-text"], [1, "notification-item"], [1, "notification-icon"], [1, "icon-text"], [1, "notification-content"], [1, "notification-title"], [1, "notification-message"], [1, "notification-time"], [1, "notification-actions"], ["class", "mark-read-btn", 3, "click", 4, "ngIf"], [1, "mark-read-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "20,6 9,17 4,12"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 1, "empty-icon"], [1, "empty-text"]], template: function NotificationDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_button_click_1_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3)(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, NotificationDropdownComponent_span_5_Template, 2, 3, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, NotificationDropdownComponent_div_6_Template, 1, 2, "div", 6);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275listener("click", function NotificationDropdownComponent_Template_div_click_7_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(8, "div", 8)(9, "h3", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, NotificationDropdownComponent_button_11_Template, 2, 1, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, NotificationDropdownComponent_div_12_Template, 6, 1, "div", 11);
      \u0275\u0275elementStart(13, "div", 12);
      \u0275\u0275template(14, NotificationDropdownComponent_div_14_Template, 7, 1, "div", 13)(15, NotificationDropdownComponent_div_15_Template, 13, 13, "div", 14)(16, NotificationDropdownComponent_div_16_Template, 6, 1, "div", 15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.translate("notifications.toggle_notifications"))("aria-expanded", ctx.isOpen());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.unreadCount() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isOpen())("rtl", ctx.isRTL);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("notifications.notifications"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.unreadCount() > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.notifications);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.notifications.length === 0);
    }
  }, dependencies: [NgForOf, NgIf], styles: ['\n\n.notification-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.notification-bell[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #BFAB86;\n  color: #BFAB86 !important;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  position: relative;\n}\n.notification-bell[_ngcontent-%COMP%]:hover {\n  background: rgba(212, 170, 58, 0.1);\n  color: #BFAB86 !important;\n  transform: translateY(-1px);\n}\n.bell-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  color: currentColor;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #dc2626;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .unread-badge[_ngcontent-%COMP%] {\n  right: auto;\n  left: -5px;\n}\n.notification-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 9999;\n}\n.notification-backdrop.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 400px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px) scale(0.95);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n  margin-top: 0.5rem;\n}\n.notification-dropdown.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0) scale(1);\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 16px 16px 0 0;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.mark-all-read-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #BFAB86;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.mark-all-read-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem 1.5rem;\n  margin: 0 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #dc2626;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 0 1.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n  color: #BFAB86;\n  margin-bottom: 0.5rem;\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.notification-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f1f5f9;\n  transition: all 0.2s ease;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease forwards;\n}\n.notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.notification-item.unread[_ngcontent-%COMP%] {\n  background-color: #f0f9ff;\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  border-left: 3px solid #BFAB86;\n}\n.notification-item.read[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  opacity: 0.8;\n}\n.notification-item.read[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.notification-item.read[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.notification-item.read[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.notification-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.notification-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B8941F 100%);\n  color: white;\n}\n.notification-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2BA149 0%,\n      #1E7E34 100%);\n  color: white;\n}\n.notification-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F59E0B 0%,\n      #D97706 100%);\n  color: white;\n}\n.notification-error[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  color: white;\n}\n.icon-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.notification-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notification-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.notification-message[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notification-time[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.notification-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.mark-read-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #BFAB86;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mark-read-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #9ca3af;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.dropdown-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 16px 16px;\n  text-align: center;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  color: #BFAB86;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #B8941F;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .notification-backdrop[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .notification-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.95);\n    width: 90vw;\n    max-width: 400px;\n    right: auto;\n    margin-top: 0;\n    z-index: 10000;\n  }\n  .notification-dropdown.open[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .notification-container.rtl[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.95);\n    right: auto;\n    margin-top: 0;\n  }\n  .notification-container.rtl[_ngcontent-%COMP%]   .notification-dropdown.open[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .dropdown-header[_ngcontent-%COMP%], \n   .notifications-list[_ngcontent-%COMP%], \n   .dropdown-footer[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .notification-item[_ngcontent-%COMP%]:hover, \n   .notification-item.unread[_ngcontent-%COMP%] {\n    margin: 0 -1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 769px) {\n  .notification-backdrop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .notification-dropdown[_ngcontent-%COMP%] {\n    width: 95vw;\n    max-width: 350px;\n  }\n  .notification-container.rtl[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%] {\n    width: 95vw;\n    max-width: 350px;\n  }\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .notification-dropdown[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover, \n.notification-container.rtl[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 3px solid #158638;\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .mark-all-read-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n.notification-container.rtl[_ngcontent-%COMP%]   .notification-actions[_ngcontent-%COMP%] {\n  order: -1;\n}\n.notification-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.notification-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.notification-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.notification-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.notification-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.25s;\n}\n/*# sourceMappingURL=notification-dropdown.component-TAJYJ2O6.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-notification-dropdown", standalone: false, template: `<div class="notification-container" [class.rtl]="isRTL">\r
  <!-- Notification Bell Button -->\r
  <button \r
    class="notification-bell" \r
    (click)="toggleDropdown()"\r
    [attr.aria-label]="translate('notifications.toggle_notifications')"\r
    [attr.aria-expanded]="isOpen()">\r
    \r
    <!-- Bell Icon -->\r
    <svg class="bell-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>\r
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>\r
    </svg>\r
    \r
    <!-- Unread Badge -->\r
    <span \r
      class="unread-badge" \r
      *ngIf="unreadCount() > 0"\r
      [class.rtl]="isRTL">\r
      {{ unreadCount() > 99 ? '99+' : unreadCount() }}\r
    </span>\r
  </button>\r
\r
  <!-- Backdrop for Mobile -->\r
  <div \r
    class="notification-backdrop" \r
    [class.open]="isOpen()"\r
    (click)="closeDropdown()"\r
    *ngIf="isOpen()">\r
  </div>\r
\r
  <!-- Notification Dropdown -->\r
  <div \r
    class="notification-dropdown" \r
    [class.open]="isOpen()"\r
    [class.rtl]="isRTL"\r
    (click)="$event.stopPropagation()">\r
    \r
    <!-- Header -->\r
    <div class="dropdown-header">\r
      <h3 class="header-title">{{ translate('notifications.notifications') }}</h3>\r
      <button \r
        class="mark-all-read-btn"\r
        (click)="markAllAsRead()"\r
        *ngIf="unreadCount() > 0">\r
        {{ translate('notifications.mark_all_read') }}\r
      </button>\r
    </div>\r
\r
    <!-- Error Message -->\r
    <div *ngIf="error()" class="error-message">\r
      <svg class="error-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="12" cy="12" r="10"></circle>\r
        <line x1="15" y1="9" x2="9" y2="15"></line>\r
        <line x1="9" y1="9" x2="15" y2="15"></line>\r
      </svg>\r
      {{ error() }}\r
    </div>\r
\r
    <!-- Notifications List -->\r
    <div class="notifications-list">\r
      <!-- Loading State -->\r
      <div *ngIf="isLoading()" class="loading-state">\r
        <svg class="loading-spinner" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10" stroke-dasharray="31.416" stroke-dashoffset="31.416">\r
            <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>\r
            <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>\r
          </circle>\r
        </svg>\r
        <p class="loading-text">{{ translate('common.loading') }}</p>\r
      </div>\r
\r
      <!-- Notifications -->\r
      <div \r
        *ngFor="let notification of notifications"\r
        class="notification-item"\r
        [class.unread]="!notification.isRead"\r
        [class.read]="notification.isRead"\r
        [class.rtl]="isRTL">\r
        \r
        <!-- Notification Icon -->\r
        <div class="notification-icon" [class]="getNotificationClass(notification.type || 'info')">\r
          <span class="icon-text">{{ getNotificationIcon(notification.type || 'info') }}</span>\r
        </div>\r
        \r
        <!-- Notification Content -->\r
        <div class="notification-content">\r
          <h4 class="notification-title">{{ notification.title }}</h4>\r
          <p class="notification-message">{{ notification.message }}</p>\r
          <span class="notification-time">{{ getTimeAgo(notification.timestamp) }}</span>\r
        </div>\r
        \r
        <!-- Action Buttons -->\r
        <div class="notification-actions">\r
          <button \r
            *ngIf="!notification.isRead"\r
            class="mark-read-btn"\r
            (click)="markAsRead(notification.id)"\r
            [attr.aria-label]="translate('notifications.mark_as_read')">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="20,6 9,17 4,12"></polyline>\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
      \r
      <!-- Empty State -->\r
      <div *ngIf="!isLoading() && notifications.length === 0" class="empty-state">\r
        <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>\r
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>\r
        </svg>\r
        <p class="empty-text">{{ translate('notifications.no_notifications') }}</p>\r
      </div>\r
    </div>\r
\r
  \r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/shared/notification-dropdown/notification-dropdown.component.css */\n.notification-container {\n  position: relative;\n  display: inline-block;\n}\n.notification-bell {\n  background: transparent;\n  border: 1px solid #BFAB86;\n  color: #BFAB86 !important;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  position: relative;\n}\n.notification-bell:hover {\n  background: rgba(212, 170, 58, 0.1);\n  color: #BFAB86 !important;\n  transform: translateY(-1px);\n}\n.bell-icon {\n  width: 20px;\n  height: 20px;\n  color: currentColor;\n}\n.unread-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #dc2626;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Poppins", sans-serif;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.notification-container.rtl .unread-badge {\n  right: auto;\n  left: -5px;\n}\n.notification-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 9999;\n}\n.notification-backdrop.open {\n  opacity: 1;\n  visibility: visible;\n}\n.notification-dropdown {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 400px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-10px) scale(0.95);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1000;\n  margin-top: 0.5rem;\n}\n.notification-dropdown.open {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0) scale(1);\n}\n.notification-container.rtl .notification-dropdown {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 16px 16px 0 0;\n}\n.header-title {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.mark-all-read-btn {\n  background: none;\n  border: none;\n  color: #BFAB86;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.mark-all-read-btn:hover {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.error-message {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem 1.5rem;\n  margin: 0 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n}\n.error-icon {\n  flex-shrink: 0;\n  color: #dc2626;\n}\n.notifications-list {\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 0 1.5rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  animation: spin 2s linear infinite;\n  color: #BFAB86;\n  margin-bottom: 0.5rem;\n}\n.loading-text {\n  font-size: 0.875rem;\n  margin: 0;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.notification-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f1f5f9;\n  transition: all 0.2s ease;\n  animation: slideIn 0.3s ease forwards;\n}\n.notification-item:last-child {\n  border-bottom: none;\n}\n.notification-item:hover {\n  background-color: #f8fafc;\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.notification-item.unread {\n  background-color: #f0f9ff;\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  border-left: 3px solid #BFAB86;\n}\n.notification-item.read {\n  background-color: #f9fafb;\n  opacity: 0.8;\n}\n.notification-item.read .notification-title {\n  color: #6b7280;\n}\n.notification-item.read .notification-message {\n  color: #9ca3af;\n}\n.notification-item.read .notification-time {\n  color: #d1d5db;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.notification-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.notification-info {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B8941F 100%);\n  color: white;\n}\n.notification-success {\n  background:\n    linear-gradient(\n      135deg,\n      #2BA149 0%,\n      #1E7E34 100%);\n  color: white;\n}\n.notification-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #F59E0B 0%,\n      #D97706 100%);\n  color: white;\n}\n.notification-error {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  color: white;\n}\n.icon-text {\n  font-size: 1rem;\n}\n.notification-content {\n  flex: 1;\n  min-width: 0;\n}\n.notification-title {\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.notification-message {\n  color: #64748b;\n  margin: 0 0 0.5rem 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notification-time {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.notification-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.mark-read-btn {\n  background: none;\n  border: none;\n  color: #BFAB86;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mark-read-btn:hover {\n  background-color: rgba(212, 170, 58, 0.1);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #9ca3af;\n  text-align: center;\n}\n.empty-icon {\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-text {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.dropdown-footer {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 16px 16px;\n  text-align: center;\n}\n.view-all-link {\n  color: #BFAB86;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.view-all-link:hover {\n  color: #B8941F;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .notification-backdrop {\n    display: block;\n  }\n  .notification-dropdown {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.95);\n    width: 90vw;\n    max-width: 400px;\n    right: auto;\n    margin-top: 0;\n    z-index: 10000;\n  }\n  .notification-dropdown.open {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .notification-container.rtl .notification-dropdown {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0.95);\n    right: auto;\n    margin-top: 0;\n  }\n  .notification-container.rtl .notification-dropdown.open {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  .dropdown-header,\n  .notifications-list,\n  .dropdown-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .notification-item:hover,\n  .notification-item.unread {\n    margin: 0 -1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media (min-width: 769px) {\n  .notification-backdrop {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .notification-dropdown {\n    width: 95vw;\n    max-width: 350px;\n  }\n  .notification-container.rtl .notification-dropdown {\n    width: 95vw;\n    max-width: 350px;\n  }\n}\n.notification-container.rtl .notification-dropdown {\n  direction: rtl;\n}\n.notification-container.rtl .notification-item:hover,\n.notification-container.rtl .notification-item.unread {\n  margin: 0 -1.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.notification-container.rtl .notification-item.unread {\n  border-left: none;\n  border-right: 3px solid #158638;\n}\n.notification-container.rtl .mark-all-read-btn {\n  margin-left: 0;\n  margin-right: auto;\n}\n.notification-container.rtl .notification-actions {\n  order: -1;\n}\n.notification-item:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.notification-item:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.notification-item:nth-child(3) {\n  animation-delay: 0.15s;\n}\n.notification-item:nth-child(4) {\n  animation-delay: 0.2s;\n}\n.notification-item:nth-child(5) {\n  animation-delay: 0.25s;\n}\n/*# sourceMappingURL=notification-dropdown.component-TAJYJ2O6.css.map */\n'] }]
  }], () => [{ type: TranslationService }, { type: NotificationsService }, { type: AuthService }], { isRTL: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationDropdownComponent, { className: "NotificationDropdownComponent", filePath: "src/app/components/shared/notification-dropdown/notification-dropdown.component.ts", lineNumber: 38 });
})();

// src/app/components/shared/add-notification-modal/add-notification-modal.component.ts
var _c02 = () => ({ standalone: true });
function AddNotificationModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "circle", 35)(3, "line", 36)(4, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function AddNotificationModalComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 42);
    \u0275\u0275listener("click", function AddNotificationModalComponent_div_23_div_1_Template_button_click_3_listener() {
      const userId_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeUser(userId_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 43);
    \u0275\u0275element(5, "line", 6)(6, "line", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const userId_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getSelectedUsersNames()[ctx_r0.form().selectedUsers.indexOf(userId_r3)]);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r0.translate("notifications.remove_user"));
  }
}
function AddNotificationModalComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, AddNotificationModalComponent_div_23_div_1_Template, 7, 2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.form().selectedUsers);
  }
}
function AddNotificationModalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45)(2, "circle", 46);
    \u0275\u0275element(3, "animate", 47)(4, "animate", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function AddNotificationModalComponent_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r5.departmentName);
  }
}
function AddNotificationModalComponent_div_32__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 58);
    \u0275\u0275element(1, "polyline", 59);
    \u0275\u0275elementEnd();
  }
}
function AddNotificationModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function AddNotificationModalComponent_div_32_Template_div_click_0_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleUserSelection(user_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53)(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AddNotificationModalComponent_div_32_div_7_Template, 2, 1, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 55);
    \u0275\u0275template(9, AddNotificationModalComponent_div_32__svg_svg_9_Template, 2, 0, "svg", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.isUserSelected(user_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getUserInitials(user_r5.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r5.departmentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isUserSelected(user_r5.id));
  }
}
function AddNotificationModalComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 61);
    \u0275\u0275element(2, "path", 62)(3, "circle", 63)(4, "path", 64)(5, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("notifications.no_users_found"));
  }
}
function AddNotificationModalComponent__svg_svg_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 67);
    \u0275\u0275element(1, "path", 68)(2, "polygon", 69);
    \u0275\u0275elementEnd();
  }
}
function AddNotificationModalComponent__svg_svg_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 70)(1, "circle", 46);
    \u0275\u0275element(2, "animate", 47)(3, "animate", 48);
    \u0275\u0275elementEnd()();
  }
}
var AddNotificationModalComponent = class _AddNotificationModalComponent {
  translationService;
  usersService;
  notificationsService;
  isRTL = false;
  isOpen = false;
  closeModal = new EventEmitter();
  sendNotification = new EventEmitter();
  form = signal({
    title: "",
    message: "",
    selectedUsers: []
  }, ...ngDevMode ? [{ debugName: "form" }] : []);
  users = [];
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  filteredUsers = signal([], ...ngDevMode ? [{ debugName: "filteredUsers" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor(translationService, usersService, notificationsService) {
    this.translationService = translationService;
    this.usersService = usersService;
    this.notificationsService = notificationsService;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading.set(true);
    this.error.set("");
    this.usersService.getUserNames().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers.set(users);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Error loading users:", err);
        this.error.set("Failed to load users. Please try again.");
        this.isLoading.set(false);
      }
    });
  }
  onSearchChange(term) {
    this.searchTerm.set(term);
    const searchTermLower = term.toLowerCase();
    if (!searchTermLower) {
      this.filteredUsers.set(this.users);
    } else {
      const filtered = this.users.filter((user) => user.name && user.name.toLowerCase().includes(searchTermLower) || user.departmentName && user.departmentName.toLowerCase().includes(searchTermLower));
      this.filteredUsers.set(filtered);
    }
  }
  toggleUserSelection(userId) {
    const currentSelection = this.form().selectedUsers;
    const isSelected = currentSelection.includes(userId);
    if (isSelected) {
      this.form.update((form) => __spreadProps(__spreadValues({}, form), {
        selectedUsers: currentSelection.filter((id) => id !== userId)
      }));
    } else {
      this.form.update((form) => __spreadProps(__spreadValues({}, form), {
        selectedUsers: [...currentSelection, userId]
      }));
    }
  }
  isUserSelected(userId) {
    return this.form().selectedUsers.includes(userId);
  }
  getSelectedUsersCount() {
    return this.form().selectedUsers.length;
  }
  getSelectedUsersNames() {
    return this.form().selectedUsers.map((userId) => {
      const user = this.users.find((u) => u.id === userId);
      return user ? user.name : "";
    }).filter((name) => name);
  }
  removeUser(userId) {
    this.form.update((form) => __spreadProps(__spreadValues({}, form), {
      selectedUsers: form.selectedUsers.filter((id) => id !== userId)
    }));
  }
  clearForm() {
    this.form.set({
      title: "",
      message: "",
      selectedUsers: []
    });
    this.searchTerm.set("");
    this.filteredUsers.set(this.users);
    this.error.set("");
  }
  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading.set(true);
      this.error.set("");
      const notificationData = {
        title: this.form().title,
        message: this.form().message,
        userIds: this.form().selectedUsers
      };
      this.notificationsService.addNotification(notificationData).subscribe({
        next: (response) => {
          console.log("Notification sent successfully:", response);
          this.sendNotification.emit(this.form());
          this.clearForm();
          this.closeModal.emit();
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error("Error sending notification:", err);
          this.error.set("Failed to send notification. Please try again.");
          this.isLoading.set(false);
        }
      });
    }
  }
  isFormValid() {
    return this.form().title.trim() !== "" && this.form().message.trim() !== "" && this.form().selectedUsers.length > 0;
  }
  onClose() {
    this.clearForm();
    this.closeModal.emit();
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  onEscapeKey(event) {
    if (this.isOpen) {
      this.onClose();
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getUserInitials(name) {
    if (!name) {
      return "";
    }
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.charAt(0) ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
    return `${first}${last}`.toUpperCase();
  }
  static \u0275fac = function AddNotificationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddNotificationModalComponent)(\u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(NotificationsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddNotificationModalComponent, selectors: [["app-add-notification-modal"]], hostBindings: function AddNotificationModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function AddNotificationModalComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { isRTL: "isRTL", isOpen: "isOpen" }, outputs: { closeModal: "closeModal", sendNotification: "sendNotification" }, standalone: false, decls: 41, vars: 30, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], ["class", "error-message", 4, "ngIf"], [1, "notification-form", 3, "ngSubmit"], [1, "form-group"], ["for", "notification-title", 1, "form-label"], ["id", "notification-title", "type", "text", "name", "title", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "notification-message", 1, "form-label"], ["id", "notification-message", "name", "message", "rows", "4", "required", "", 1, "form-textarea", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-label"], ["class", "selected-users", 4, "ngIf"], [1, "user-search"], [1, "search-input-wrapper"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["type", "text", 1, "search-input", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "users-list"], ["class", "loading-state", 4, "ngIf"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "empty-users", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-icon", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "loading-spinner-small", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "error-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "selected-users"], ["class", "selected-user-tag", 4, "ngFor", "ngForOf"], [1, "selected-user-tag"], [1, "user-name"], ["type", "button", 1, "remove-user-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "loading-state"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "loading-spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "31.416", "stroke-dashoffset", "31.416"], ["attributeName", "stroke-dasharray", "dur", "2s", "values", "0 31.416;15.708 15.708;0 31.416", "repeatCount", "indefinite"], ["attributeName", "stroke-dashoffset", "dur", "2s", "values", "0;-15.708;-31.416", "repeatCount", "indefinite"], [1, "loading-text"], [1, "user-item", 3, "click"], [1, "user-avatar"], [1, "avatar-text"], [1, "user-info"], ["class", "user-department", 4, "ngIf"], [1, "selection-indicator"], ["class", "check-icon", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "user-department"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "check-icon"], ["points", "20,6 9,17 4,12"], [1, "empty-users"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 1, "empty-icon"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 1 0 7.75"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "empty-text"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["d", "M22 2L11 13"], ["points", "22,2 15,22 11,13 2,9 22,2"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "loading-spinner-small"]], template: function AddNotificationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddNotificationModalComponent_Template_div_click_0_listener($event) {
        return ctx.onBackdropClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function AddNotificationModalComponent_Template_button_click_5_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "line", 6)(8, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275template(10, AddNotificationModalComponent_div_10_Template, 6, 1, "div", 9);
      \u0275\u0275elementStart(11, "form", 10);
      \u0275\u0275listener("ngSubmit", function AddNotificationModalComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 11)(13, "label", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AddNotificationModalComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form().title, $event) || (ctx.form().title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "label", 14);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AddNotificationModalComponent_Template_textarea_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form().message, $event) || (ctx.form().message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "label", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, AddNotificationModalComponent_div_23_Template, 2, 1, "div", 17);
      \u0275\u0275elementStart(24, "div", 18)(25, "div", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 20);
      \u0275\u0275element(27, "circle", 21)(28, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "input", 23);
      \u0275\u0275listener("ngModelChange", function AddNotificationModalComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 24);
      \u0275\u0275template(31, AddNotificationModalComponent_div_31_Template, 7, 1, "div", 25)(32, AddNotificationModalComponent_div_32_Template, 10, 6, "div", 26)(33, AddNotificationModalComponent_div_33_Template, 8, 1, "div", 27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 28)(35, "button", 29);
      \u0275\u0275listener("click", function AddNotificationModalComponent_Template_button_click_35_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(36, AddNotificationModalComponent__svg_svg_36_Template, 3, 0, "svg", 30)(37, AddNotificationModalComponent__svg_svg_37_Template, 4, 0, "svg", 31);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 32);
      \u0275\u0275listener("click", function AddNotificationModalComponent_Template_button_click_39_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen)("rtl", ctx.isRTL);
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("notifications.send_new_notification"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.translate("common.close"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("notifications.title"), " * ");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form().title);
      \u0275\u0275property("placeholder", ctx.translate("notifications.title_placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("notifications.message"), " * ");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form().message);
      \u0275\u0275property("placeholder", ctx.translate("notifications.message_placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("notifications.select_users"), " * ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getSelectedUsersCount() > 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.searchTerm())("ngModelOptions", \u0275\u0275pureFunction0(29, _c02))("placeholder", ctx.translate("notifications.search_users_placeholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredUsers());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.filteredUsers().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isFormValid() || ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading() ? ctx.translate("common.sending") : ctx.translate("notifications.send_notification"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.modal-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #1B1D21;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin: 0;\n  order: 1;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(27, 29, 33, 0.1);\n  color: #1B1D21;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.error-message[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #dc2626;\n}\n.notification-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.selected-users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.selected-user-tag[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.remove-user-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.125rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.remove-user-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.user-search[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  color: #9ca3af;\n  z-index: 1;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.users-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n  color: #BFAB86;\n  margin-bottom: 0.5rem;\n}\n.loading-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.user-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.user-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n}\n.user-item.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n}\n.user-item.selected[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.user-item.selected[_ngcontent-%COMP%]   .user-department[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.avatar-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selection-indicator[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.check-icon[_ngcontent-%COMP%] {\n  color: #BFAB86;\n}\n.user-item.selected[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.empty-users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #9ca3af;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n  text-align: center;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n  color: currentColor;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.875rem;\n    min-width: 100px;\n  }\n  .users-list[_ngcontent-%COMP%] {\n    max-height: 250px;\n  }\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 2.5rem;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-container.rtl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=add-notification-modal.component-74KSBOWR.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddNotificationModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-notification-modal", standalone: false, template: `<div \r
  class="modal-overlay" \r
  [class.open]="isOpen"\r
  [class.rtl]="isRTL"\r
  (click)="onBackdropClick($event)">\r
  \r
  <div class="modal-container" [class.rtl]="isRTL">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ translate('notifications.send_new_notification') }}</h2>\r
      <button \r
        class="close-btn"\r
        (click)="onClose()"\r
        [attr.aria-label]="translate('common.close')">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <!-- Error Message -->\r
      <div *ngIf="error()" class="error-message">\r
        <svg class="error-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="15" y1="9" x2="9" y2="15"></line>\r
          <line x1="9" y1="9" x2="15" y2="15"></line>\r
        </svg>\r
        {{ error() }}\r
      </div>\r
\r
      <form (ngSubmit)="onSubmit()" class="notification-form">\r
        <!-- Title Field -->\r
        <div class="form-group">\r
          <label for="notification-title" class="form-label">\r
            {{ translate('notifications.title') }} *\r
          </label>\r
          <input\r
            id="notification-title"\r
            type="text"\r
            [(ngModel)]="form().title"\r
            name="title"\r
            class="form-input"\r
            [placeholder]="translate('notifications.title_placeholder')"\r
            required>\r
        </div>\r
\r
        <!-- Message Field -->\r
        <div class="form-group">\r
          <label for="notification-message" class="form-label">\r
            {{ translate('notifications.message') }} *\r
          </label>\r
          <textarea\r
            id="notification-message"\r
            [(ngModel)]="form().message"\r
            name="message"\r
            class="form-textarea"\r
            [placeholder]="translate('notifications.message_placeholder')"\r
            rows="4"\r
            required></textarea>\r
        </div>\r
\r
        <!-- User Selection Section -->\r
        <div class="form-group">\r
          <label class="form-label">\r
            {{ translate('notifications.select_users') }} *\r
          </label>\r
          \r
          <!-- Selected Users Display -->\r
          <div class="selected-users" *ngIf="getSelectedUsersCount() > 0">\r
            <div \r
              *ngFor="let userId of form().selectedUsers"\r
              class="selected-user-tag">\r
              <span class="user-name">{{ getSelectedUsersNames()[form().selectedUsers.indexOf(userId)] }}</span>\r
              <button \r
                type="button"\r
                class="remove-user-btn"\r
                (click)="removeUser(userId)"\r
                [attr.aria-label]="translate('notifications.remove_user')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <line x1="18" y1="6" x2="6" y2="18"></line>\r
                  <line x1="6" y1="6" x2="18" y2="18"></line>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
\r
          <!-- User Search -->\r
          <div class="user-search">\r
            <div class="search-input-wrapper">\r
              <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="11" cy="11" r="8"></circle>\r
                <path d="M21 21l-4.35-4.35"></path>\r
              </svg>\r
              <input\r
                type="text"\r
                [ngModel]="searchTerm()"\r
                (ngModelChange)="onSearchChange($event)"\r
                [ngModelOptions]="{standalone: true}"\r
                class="search-input"\r
                [placeholder]="translate('notifications.search_users_placeholder')">\r
            </div>\r
          </div>\r
\r
          <!-- Users List -->\r
          <div class="users-list">\r
            <!-- Loading State -->\r
            <div *ngIf="isLoading()" class="loading-state">\r
              <svg class="loading-spinner" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="12" cy="12" r="10" stroke-dasharray="31.416" stroke-dashoffset="31.416">\r
                  <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>\r
                  <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>\r
                </circle>\r
              </svg>\r
              <p class="loading-text">{{ translate('common.loading') }}</p>\r
            </div>\r
\r
            <!-- Users List -->\r
            <div \r
              *ngFor="let user of filteredUsers()"\r
              class="user-item"\r
              [class.selected]="isUserSelected(user.id)"\r
              (click)="toggleUserSelection(user.id)">\r
              \r
              <!-- User Avatar -->\r
              <div class="user-avatar">\r
                <span class="avatar-text">{{ getUserInitials(user.name) }}</span>\r
              </div>\r
              \r
              <!-- User Info -->\r
              <div class="user-info">\r
                <div class="user-name">{{ user.name }}</div>\r
                <div class="user-department" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
              </div>\r
              \r
              <!-- Selection Indicator -->\r
              <div class="selection-indicator">\r
                <svg \r
                  *ngIf="isUserSelected(user.id)"\r
                  class="check-icon" \r
                  width="20" \r
                  height="20" \r
                  viewBox="0 0 24 24" \r
                  fill="none" \r
                  stroke="currentColor" \r
                  stroke-width="2">\r
                  <polyline points="20,6 9,17 4,12"></polyline>\r
                </svg>\r
              </div>\r
            </div>\r
            \r
            <!-- Empty State -->\r
            <div *ngIf="!isLoading() && filteredUsers().length === 0" class="empty-users">\r
              <svg class="empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
                <circle cx="9" cy="7" r="4"></circle>\r
                <path d="M23 21v-2a4 4 0 0 1 0 7.75"></path>\r
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
              </svg>\r
              <p class="empty-text">{{ translate('notifications.no_users_found') }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button \r
        type="submit"\r
        class="btn btn-primary"\r
        [disabled]="!isFormValid() || isLoading()"\r
        (click)="onSubmit()">\r
        <svg *ngIf="!isLoading()" class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 2L11 13"></path>\r
          <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>\r
        </svg>\r
        <svg *ngIf="isLoading()" class="loading-spinner-small" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10" stroke-dasharray="31.416" stroke-dashoffset="31.416">\r
            <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>\r
            <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>\r
          </circle>\r
        </svg>\r
        {{ isLoading() ? translate('common.sending') : translate('notifications.send_notification') }}\r
      </button>\r
      <button \r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="onClose()"\r
        [disabled]="isLoading()">\r
        {{ translate('common.cancel') }}\r
      </button>\r
      \r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/shared/add-notification-modal/add-notification-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open .modal-container {\n  transform: scale(1) translateY(0);\n}\n.modal-container.rtl {\n  direction: rtl;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #1B1D21;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1B1D21;\n  margin: 0;\n  order: 1;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(27, 29, 33, 0.1);\n  color: #1B1D21;\n}\n.modal-container.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.modal-container.rtl .modal-title {\n  order: 2;\n}\n.modal-container.rtl .close-btn {\n  order: 1;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.error-message {\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n}\n.error-icon {\n  flex-shrink: 0;\n  color: #dc2626;\n}\n.notification-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-textarea {\n  padding: 0.75rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.selected-users {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.selected-user-tag {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.remove-user-btn {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.125rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background-color 0.2s ease;\n}\n.remove-user-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.user-search {\n  margin-bottom: 1rem;\n}\n.search-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.search-icon {\n  position: absolute;\n  left: 1rem;\n  color: #9ca3af;\n  z-index: 1;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s ease;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.users-list {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  animation: spin 2s linear infinite;\n  color: #BFAB86;\n  margin-bottom: 0.5rem;\n}\n.loading-text {\n  font-size: 0.875rem;\n  margin: 0;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.user-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n}\n.user-item:last-child {\n  border-bottom: none;\n}\n.user-item:hover {\n  background-color: #f8fafc;\n}\n.user-item.selected {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n}\n.user-item.selected .user-email,\n.user-item.selected .user-department {\n  color: rgba(255, 255, 255, 0.8);\n}\n.user-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.avatar-image {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.avatar-text {\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.user-info {\n  flex: 1;\n  min-width: 0;\n}\n.user-name {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-email {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-department {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selection-indicator {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.check-icon {\n  color: #BFAB86;\n}\n.user-item.selected .check-icon {\n  color: white;\n}\n.empty-users {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #9ca3af;\n}\n.empty-icon {\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-text {\n  font-size: 0.875rem;\n  margin: 0;\n  text-align: center;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #BFAB86 0%,\n      #B68A35 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-icon {\n  flex-shrink: 0;\n}\n.loading-spinner-small {\n  animation: spin 2s linear infinite;\n  color: currentColor;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    width: 95%;\n    margin: 1rem;\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .modal-title {\n    font-size: 1.25rem;\n  }\n  .btn {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.875rem;\n    min-width: 100px;\n  }\n  .users-list {\n    max-height: 250px;\n  }\n}\n.modal-container.rtl .search-icon {\n  left: auto;\n  right: 1rem;\n}\n.modal-container.rtl .search-input {\n  padding-left: 1rem;\n  padding-right: 2.5rem;\n}\n.modal-container.rtl .modal-footer {\n  justify-content: flex-start;\n}\n.modal-container.rtl .btn {\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=add-notification-modal.component-74KSBOWR.css.map */\n"] }]
  }], () => [{ type: TranslationService }, { type: UsersService }, { type: NotificationsService }], { isRTL: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], sendNotification: [{
    type: Output
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddNotificationModalComponent, { className: "AddNotificationModalComponent", filePath: "src/app/components/shared/add-notification-modal/add-notification-modal.component.ts", lineNumber: 24 });
})();

// src/app/directives/has-permission.directive.ts
var HasPermissionDirective = class _HasPermissionDirective {
  templateRef;
  viewContainer;
  authService;
  appHasPermission = "";
  appHasPermissionMode = "any";
  // 'any' means user needs at least one permission, 'all' means user needs all permissions
  permissionSubscription;
  hasView = false;
  constructor(templateRef, viewContainer, authService) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.authService = authService;
  }
  ngOnInit() {
    this.permissionSubscription = this.authService.permissions$.subscribe(() => {
      this.updateView();
    });
  }
  ngOnDestroy() {
    if (this.permissionSubscription) {
      this.permissionSubscription.unsubscribe();
    }
  }
  updateView() {
    const hasPermission = this.checkPermission();
    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  checkPermission() {
    if (!this.appHasPermission) {
      return true;
    }
    const permissions = Array.isArray(this.appHasPermission) ? this.appHasPermission : [this.appHasPermission];
    if (this.appHasPermissionMode === "all") {
      return this.authService.hasAllPermissions(permissions);
    } else {
      return this.authService.hasAnyPermission(permissions);
    }
  }
  static \u0275fac = function HasPermissionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HasPermissionDirective)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { appHasPermission: "appHasPermission", appHasPermissionMode: "appHasPermissionMode" }, standalone: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HasPermissionDirective, [{
    type: Directive,
    args: [{
      selector: "[appHasPermission]",
      standalone: false
    }]
  }], () => [{ type: TemplateRef }, { type: ViewContainerRef }, { type: AuthService }], { appHasPermission: [{
    type: Input
  }], appHasPermissionMode: [{
    type: Input
  }] });
})();

// src/app/components/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SidebarComponent,
        NotificationDropdownComponent,
        AddNotificationModalComponent,
        HasPermissionDirective
      ],
      imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ConfirmationModalComponent
      ],
      exports: [
        SidebarComponent,
        NotificationDropdownComponent,
        AddNotificationModalComponent,
        ConfirmationModalComponent,
        HasPermissionDirective
      ]
    }]
  }], null, null);
})();

export {
  SidebarComponent,
  NotificationDropdownComponent,
  AddNotificationModalComponent,
  SharedModule
};
//# sourceMappingURL=chunk-QXZVBEOJ.js.map
