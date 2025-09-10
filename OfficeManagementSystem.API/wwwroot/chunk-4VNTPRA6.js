import {
  SharedModule
} from "./chunk-T2M6TRAH.js";
import "./chunk-IGRVTAS5.js";
import "./chunk-ZROT3MZN.js";
import "./chunk-BPNSXQDF.js";
import {
  RouterModule
} from "./chunk-EQNMQ4JF.js";
import "./chunk-WSKIHX7F.js";
import "./chunk-GXYKXPSU.js";
import {
  FormsModule,
  ReactiveFormsModule,
  environment
} from "./chunk-DECC4EAS.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  HttpClientModule,
  HttpParams,
  Injectable,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  SlicePipe,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NBW6TLAW.js";
import {
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/models/calendar.model.ts
var EventType;
(function(EventType2) {
  EventType2[EventType2["Meeting"] = 0] = "Meeting";
  EventType2[EventType2["Task"] = 1] = "Task";
})(EventType || (EventType = {}));
var EventStatus;
(function(EventStatus2) {
  EventStatus2[EventStatus2["Scheduled"] = 0] = "Scheduled";
  EventStatus2[EventStatus2["InProgress"] = 1] = "InProgress";
  EventStatus2[EventStatus2["Completed"] = 2] = "Completed";
  EventStatus2[EventStatus2["Cancelled"] = 3] = "Cancelled";
  EventStatus2[EventStatus2["Overdue"] = 4] = "Overdue";
})(EventStatus || (EventStatus = {}));

// src/app/services/calendar.service.ts
var CalendarService = class _CalendarService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getUserEvents() {
    return this.http.get(`${this.baseUrl}/Calendar/user/events`);
  }
  getSystemEvents(type, status, search) {
    let params = new HttpParams();
    if (type !== void 0) {
      params = params.set("type", type.toString());
    }
    if (status !== void 0) {
      params = params.set("status", status.toString());
    }
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.baseUrl}/Calendar/system/events`, {
      params
    });
  }
  getEventTypeLabel(type) {
    switch (type) {
      case EventType.Meeting:
        return "calendar.event_types.meeting";
      case EventType.Task:
        return "calendar.event_types.task";
      default:
        return "Unknown";
    }
  }
  getEventStatusLabel(status) {
    switch (status) {
      case EventStatus.Scheduled:
        return "calendar.event_statuses.scheduled";
      case EventStatus.InProgress:
        return "calendar.event_statuses.in_progress";
      case EventStatus.Completed:
        return "calendar.event_statuses.completed";
      case EventStatus.Cancelled:
        return "calendar.event_statuses.cancelled";
      case EventStatus.Overdue:
        return "calendar.event_statuses.overdue";
      default:
        return "Unknown";
    }
  }
  getEventStatusColor(status) {
    switch (status) {
      case EventStatus.Scheduled:
        return "#4285F4";
      case EventStatus.InProgress:
        return "#FBBC04";
      case EventStatus.Completed:
        return "#34A853";
      case EventStatus.Cancelled:
        return "#EA4335";
      case EventStatus.Overdue:
        return "#FF6B6B";
      default:
        return "#6C757D";
    }
  }
  getPriorityColor(priority) {
    switch (priority) {
      case 1:
        return "#34A853";
      // High priority - Green
      case 2:
        return "#FBBC04";
      // Medium priority - Yellow
      case 3:
        return "#EA4335";
      // Low priority - Red
      default:
        return "#6C757D";
    }
  }
  static \u0275fac = function CalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/calendar/calendar.component.ts
function CalendarComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "h4", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left-color", event_r1.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, event_r1.startDate, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(event_r1.type), " ");
  }
}
function CalendarComponent_div_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275listener("click", function CalendarComponent_div_22_div_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewAllUserEvents($event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.view_all"));
  }
}
function CalendarComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275template(7, CalendarComponent_div_22_div_7_Template, 9, 10, "div", 36);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275template(9, CalendarComponent_div_22_div_9_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.my_events"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userEvents().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 4, ctx_r1.userEvents(), 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.userEvents().length > 5);
  }
}
function CalendarComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 39)(2, "h4", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left-color", event_r4.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, event_r4.startDate, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r4.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(event_r4.type), " ");
  }
}
function CalendarComponent_div_23_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275listener("click", function CalendarComponent_div_23_div_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewAllSystemEvents($event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.view_all"));
  }
}
function CalendarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 33)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 46);
    \u0275\u0275template(7, CalendarComponent_div_23_div_7_Template, 9, 10, "div", 47);
    \u0275\u0275pipe(8, "slice");
    \u0275\u0275template(9, CalendarComponent_div_23_div_9_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.system_events"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.systemEvents().length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(8, 4, ctx_r1.systemEvents(), 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.systemEvents().length > 5);
  }
}
function CalendarComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r6, " ");
  }
}
function CalendarComponent_div_41_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", event_r9.color);
    \u0275\u0275property("title", event_r9.title);
  }
}
function CalendarComponent_div_41_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarComponent_div_41_ng_container_4_div_1_Template, 1, 3, "div", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getUserEventsForDate(day_r8));
  }
}
function CalendarComponent_div_41_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 57);
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", event_r10.color);
    \u0275\u0275property("title", event_r10.title);
  }
}
function CalendarComponent_div_41_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarComponent_div_41_ng_container_5_div_1_Template, 1, 3, "div", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSystemEventsForDate(day_r8));
  }
}
function CalendarComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function CalendarComponent_div_41_Template_div_click_0_listener() {
      const day_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateClick(day_r8));
    });
    \u0275\u0275elementStart(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275template(4, CalendarComponent_div_41_ng_container_4_Template, 2, 1, "ng-container", 53)(5, CalendarComponent_div_41_ng_container_5_Template, 2, 1, "ng-container", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("today", ctx_r1.isToday(day_r8))("selected", ctx_r1.isSelectedDate(day_r8))("other-month", !ctx_r1.isCurrentMonth(day_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r8.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.calendarMode() === "user");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calendarMode() === "system");
  }
}
function CalendarComponent_div_42_div_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r12.description);
  }
}
function CalendarComponent_div_42_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "h4", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_42_div_12_p_5_Template, 2, 1, "p", 71);
    \u0275\u0275elementStart(6, "div", 72)(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r12.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r12.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r12.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r12.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r12.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r12.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(event_r12.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getEventStatusColor(event_r12.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventStatusLabel(event_r12.status), " ");
  }
}
function CalendarComponent_div_42_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function CalendarComponent_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CalendarComponent_div_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 61);
    \u0275\u0275listener("click", function CalendarComponent_div_42_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 17);
    \u0275\u0275element(8, "line", 62)(9, "line", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 64)(11, "div", 65);
    \u0275\u0275template(12, CalendarComponent_div_42_div_12_Template, 15, 18, "div", 66)(13, CalendarComponent_div_42_div_13_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, ctx_r1.selectedDate(), "fullDate"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.getEventsForDate(ctx_r1.selectedDate()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getEventsForDate(ctx_r1.selectedDate()).length === 0);
  }
}
function CalendarComponent_div_43_div_11_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r14.description);
  }
}
function CalendarComponent_div_43_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "h4", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_43_div_11_p_5_Template, 2, 1, "p", 71);
    \u0275\u0275elementStart(6, "div", 72)(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r14.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r14.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r14.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r14.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r14.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r14.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(event_r14.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getEventStatusColor(event_r14.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventStatusLabel(event_r14.status), " ");
  }
}
function CalendarComponent_div_43_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_found"));
  }
}
function CalendarComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function CalendarComponent_div_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllUserEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CalendarComponent_div_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function CalendarComponent_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllUserEventsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 17);
    \u0275\u0275element(7, "line", 62)(8, "line", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 64)(10, "div", 65);
    \u0275\u0275template(11, CalendarComponent_div_43_div_11_Template, 15, 18, "div", 66)(12, CalendarComponent_div_43_div_12_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.all_my_events"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.userEvents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userEvents().length === 0);
  }
}
function CalendarComponent_div_44_div_11_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r16.description);
  }
}
function CalendarComponent_div_44_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "h4", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_44_div_11_p_5_Template, 2, 1, "p", 71);
    \u0275\u0275elementStart(6, "div", 72)(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r16.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r16.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r16.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r16.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r16.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(event_r16.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getEventStatusColor(event_r16.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventStatusLabel(event_r16.status), " ");
  }
}
function CalendarComponent_div_44_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_found"));
  }
}
function CalendarComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275listener("click", function CalendarComponent_div_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllSystemEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function CalendarComponent_div_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 61);
    \u0275\u0275listener("click", function CalendarComponent_div_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllSystemEventsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 17);
    \u0275\u0275element(7, "line", 62)(8, "line", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 64)(10, "div", 65);
    \u0275\u0275template(11, CalendarComponent_div_44_div_11_Template, 15, 18, "div", 66)(12, CalendarComponent_div_44_div_12_Template, 3, 1, "div", 67);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.all_system_events"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.systemEvents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.systemEvents().length === 0);
  }
}
function CalendarComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275element(2, "div", 82);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.loading"));
  }
}
function CalendarComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 85);
    \u0275\u0275element(3, "circle", 86)(4, "line", 87)(5, "line", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 89);
    \u0275\u0275listener("click", function CalendarComponent_div_46_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryLoadEvents());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("calendar.retry"), " ");
  }
}
var CalendarComponent = class _CalendarComponent {
  calendarService;
  translationService;
  langService;
  // Signals for reactive state management
  userEvents = signal([], ...ngDevMode ? [{ debugName: "userEvents" }] : []);
  systemEvents = signal([], ...ngDevMode ? [{ debugName: "systemEvents" }] : []);
  filteredEvents = signal([], ...ngDevMode ? [{ debugName: "filteredEvents" }] : []);
  currentDate = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentDate" }] : []);
  selectedDate = signal(null, ...ngDevMode ? [{ debugName: "selectedDate" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // Filter state
  filters = signal({}, ...ngDevMode ? [{ debugName: "filters" }] : []);
  // Calendar view state
  viewMode = signal("month", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  showUserEvents = signal(true, ...ngDevMode ? [{ debugName: "showUserEvents" }] : []);
  calendarMode = signal("user", ...ngDevMode ? [{ debugName: "calendarMode" }] : []);
  showAllUserEventsModal = signal(false, ...ngDevMode ? [{ debugName: "showAllUserEventsModal" }] : []);
  showAllSystemEventsModal = signal(false, ...ngDevMode ? [{ debugName: "showAllSystemEventsModal" }] : []);
  // Calendar data
  calendarDays = [];
  weekDays = [];
  monthNames = [];
  subscriptions = [];
  constructor(calendarService, translationService, langService) {
    this.calendarService = calendarService;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.initializeCalendar();
    this.loadEvents();
    this.setupLanguageSubscription();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  initializeCalendar() {
    this.generateCalendarDays();
    this.setupWeekDays();
    this.setupMonthNames();
  }
  setupLanguageSubscription() {
    const langSub = this.langService.currentLang$.subscribe((lang) => {
      this.isRTL.set(lang === "ar");
      this.setupWeekDays();
      this.setupMonthNames();
    });
    this.subscriptions.push(langSub);
  }
  setupWeekDays() {
    if (this.isRTL()) {
      this.weekDays = ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"];
    } else {
      this.weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    }
  }
  setupMonthNames() {
    if (this.isRTL()) {
      this.monthNames = [
        "\u064A\u0646\u0627\u064A\u0631",
        "\u0641\u0628\u0631\u0627\u064A\u0631",
        "\u0645\u0627\u0631\u0633",
        "\u0623\u0628\u0631\u064A\u0644",
        "\u0645\u0627\u064A\u0648",
        "\u064A\u0648\u0646\u064A\u0648",
        "\u064A\u0648\u0644\u064A\u0648",
        "\u0623\u063A\u0633\u0637\u0633",
        "\u0633\u0628\u062A\u0645\u0628\u0631",
        "\u0623\u0643\u062A\u0648\u0628\u0631",
        "\u0646\u0648\u0641\u0645\u0628\u0631",
        "\u062F\u064A\u0633\u0645\u0628\u0631"
      ];
    } else {
      this.monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    }
  }
  generateCalendarDays() {
    const current = this.currentDate();
    const year = current.getFullYear();
    const month = current.getMonth();
    const day = current.getDate();
    this.calendarDays = [];
    if (this.viewMode() === "month") {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDate = new Date(firstDay);
      const dayOfWeek = firstDay.getDay();
      startDate.setDate(startDate.getDate() - dayOfWeek);
      const endDate = new Date(lastDay);
      endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));
      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        this.calendarDays.push(new Date(d));
      }
    } else if (this.viewMode() === "week") {
      const startOfWeek = new Date(current);
      const dayOfWeek = current.getDay();
      startOfWeek.setDate(current.getDate() - dayOfWeek);
      for (let i = 0; i < 7; i++) {
        const day2 = new Date(startOfWeek);
        day2.setDate(startOfWeek.getDate() + i);
        this.calendarDays.push(day2);
      }
    } else if (this.viewMode() === "day") {
      this.calendarDays.push(new Date(current));
    }
  }
  loadEvents() {
    this.loading.set(true);
    this.error.set(null);
    if (this.calendarMode() === "user") {
      const userEventsSub = this.calendarService.getUserEvents().subscribe({
        next: (response) => {
          if (response.success) {
            this.userEvents.set(response.data);
            this.systemEvents.set([]);
            this.updateFilteredEvents();
          }
          this.loading.set(false);
        },
        error: (error) => {
          console.error("Error loading user events:", error);
          this.error.set("Failed to load user events");
          this.loading.set(false);
        }
      });
      this.subscriptions.push(userEventsSub);
    } else {
      const systemEventsSub = this.calendarService.getSystemEvents(this.filters().type, this.filters().status).subscribe({
        next: (response) => {
          if (response.success) {
            this.systemEvents.set(response.data);
            this.userEvents.set([]);
            this.updateFilteredEvents();
          }
          this.loading.set(false);
        },
        error: (error) => {
          console.error("Error loading system events:", error);
          this.error.set("Failed to load system events");
          this.loading.set(false);
        }
      });
      this.subscriptions.push(systemEventsSub);
    }
  }
  updateFilteredEvents() {
    const allEvents = [...this.userEvents(), ...this.systemEvents()];
    let filtered = allEvents;
    if (this.filters().type !== void 0) {
      filtered = filtered.filter((event) => event.type === this.filters().type);
    }
    if (this.filters().status !== void 0) {
      filtered = filtered.filter((event) => event.status === this.filters().status);
    }
    this.filteredEvents.set(filtered);
  }
  // Navigation methods
  previousMonth() {
    const current = this.currentDate();
    current.setMonth(current.getMonth() - 1);
    this.currentDate.set(new Date(current));
    this.generateCalendarDays();
  }
  nextMonth() {
    const current = this.currentDate();
    current.setMonth(current.getMonth() + 1);
    this.currentDate.set(new Date(current));
    this.generateCalendarDays();
  }
  goToToday() {
    this.currentDate.set(/* @__PURE__ */ new Date());
    this.generateCalendarDays();
  }
  // Event handling
  onDateClick(date) {
    this.selectedDate.set(date);
  }
  onFilterChange(filters) {
    this.filters.set(filters);
    this.loadEvents();
  }
  onTypeFilterChange(value) {
    const newFilters = __spreadValues({}, this.filters());
    newFilters.type = value ? +value : void 0;
    this.onFilterChange(newFilters);
  }
  onStatusFilterChange(value) {
    const newFilters = __spreadValues({}, this.filters());
    newFilters.status = value ? +value : void 0;
    this.onFilterChange(newFilters);
  }
  retryLoadEvents() {
    this.loadEvents();
  }
  onViewModeChange(mode) {
    this.viewMode.set(mode);
    this.generateCalendarDays();
  }
  toggleUserEvents() {
    this.showUserEvents.update((current) => !current);
  }
  switchToUserCalendar() {
    this.calendarMode.set("user");
    this.loadEvents();
  }
  switchToSystemCalendar() {
    this.calendarMode.set("system");
    this.loadEvents();
  }
  viewAllUserEvents(event) {
    console.log("View All button clicked");
    event.preventDefault();
    event.stopPropagation();
    this.showAllUserEventsModal.set(true);
    console.log("All user events modal opened");
  }
  closeAllUserEventsModal() {
    this.showAllUserEventsModal.set(false);
  }
  viewAllSystemEvents(event) {
    console.log("View All System Events button clicked");
    event.preventDefault();
    event.stopPropagation();
    this.showAllSystemEventsModal.set(true);
    console.log("All system events modal opened");
  }
  closeAllSystemEventsModal() {
    this.showAllSystemEventsModal.set(false);
  }
  // Helper methods
  getEventsForDate(date) {
    const dateStr = date.toISOString().split("T")[0];
    return this.filteredEvents().filter((event) => {
      const eventDate = new Date(event.startDate).toISOString().split("T")[0];
      return eventDate === dateStr;
    });
  }
  getUserEventsForDate(date) {
    const dateStr = date.toISOString().split("T")[0];
    return this.userEvents().filter((event) => {
      const eventDate = new Date(event.startDate).toISOString().split("T")[0];
      return eventDate === dateStr;
    });
  }
  getSystemEventsForDate(date) {
    const dateStr = date.toISOString().split("T")[0];
    return this.systemEvents().filter((event) => {
      const eventDate = new Date(event.startDate).toISOString().split("T")[0];
      return eventDate === dateStr;
    });
  }
  isToday(date) {
    const today = /* @__PURE__ */ new Date();
    return date.toDateString() === today.toDateString();
  }
  isSelectedDate(date) {
    const selected = this.selectedDate();
    return selected ? date.toDateString() === selected.toDateString() : false;
  }
  isCurrentMonth(date) {
    const current = this.currentDate();
    return date.getMonth() === current.getMonth() && date.getFullYear() === current.getFullYear();
  }
  getEventTypeLabel(type) {
    const key = this.calendarService.getEventTypeLabel(type);
    return this.translate(key);
  }
  getEventStatusLabel(status) {
    const key = this.calendarService.getEventStatusLabel(status);
    return this.translate(key);
  }
  getEventStatusColor(status) {
    return this.calendarService.getEventStatusColor(status);
  }
  getPriorityColor(priority) {
    return this.calendarService.getPriorityColor(priority);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  // Enum getters for template
  get EventType() {
    return EventType;
  }
  get EventStatus() {
    return EventStatus;
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], standalone: false, decls: 47, vars: 31, consts: [[1, "calendar-container", "rounded-5"], [1, "calendar-header"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "view-mode-toggle"], [1, "view-btn", 3, "click"], [1, "calendar-mode-toggle"], [1, "mode-buttons"], [1, "mode-btn", 3, "click"], [1, "calendar-content"], ["class", "user-events-widget", 4, "ngIf"], ["class", "system-events-widget", 4, "ngIf"], [1, "calendar-grid-container"], [1, "calendar-navigation"], [1, "nav-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "current-month"], ["points", "9,18 15,12 9,6"], [1, "today-btn", 3, "click"], [1, "calendar-grid"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "calendar-days"], ["class", "calendar-day", 3, "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], ["class", "event-details-modal", 3, "click", 4, "ngIf"], ["class", "all-user-events-modal", 3, "click", 4, "ngIf"], ["class", "all-system-events-modal", 3, "click", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "user-events-widget"], [1, "widget-header"], [1, "event-count"], [1, "user-events-list"], ["class", "user-event-item", 3, "border-left-color", 4, "ngFor", "ngForOf"], ["class", "view-all-link", 4, "ngIf"], [1, "user-event-item"], [1, "event-info"], [1, "event-title"], [1, "event-date"], [1, "event-type-badge"], [1, "view-all-link"], [1, "view-all-btn", 3, "click"], [1, "system-events-widget"], [1, "system-events-list"], ["class", "system-event-item", 3, "border-left-color", 4, "ngFor", "ngForOf"], [1, "system-event-item"], [1, "week-day"], [1, "calendar-day", 3, "click"], [1, "day-number"], [1, "day-events"], [4, "ngIf"], ["class", "event-dot user-event", 3, "background-color", "title", 4, "ngFor", "ngForOf"], [1, "event-dot", "user-event", 3, "title"], ["class", "event-dot system-event", 3, "background-color", "title", 4, "ngFor", "ngForOf"], [1, "event-dot", "system-event", 3, "title"], [1, "event-details-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], ["class", "no-events", 4, "ngIf"], [1, "event-item"], [1, "event-color-bar"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-time"], [1, "event-type"], [1, "event-status"], [1, "event-description"], [1, "no-events"], [1, "all-user-events-modal", 3, "click"], [1, "all-system-events-modal", 3, "click"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner"], [1, "error-message"], [1, "error-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_9_listener() {
        return ctx.onViewModeChange("month");
      });
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_11_listener() {
        return ctx.onViewModeChange("week");
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_13_listener() {
        return ctx.onViewModeChange("day");
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "button", 10);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_17_listener() {
        return ctx.switchToUserCalendar();
      });
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_19_listener() {
        return ctx.switchToSystemCalendar();
      });
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 11);
      \u0275\u0275template(22, CalendarComponent_div_22_Template, 10, 8, "div", 12)(23, CalendarComponent_div_23_Template, 10, 8, "div", 13);
      \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "button", 16);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_26_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 17);
      \u0275\u0275element(28, "polyline", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 19)(30, "h2");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "button", 16);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_32_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 17);
      \u0275\u0275element(34, "polyline", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "button", 21);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_35_listener() {
        return ctx.goToToday();
      });
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 22)(38, "div", 23);
      \u0275\u0275template(39, CalendarComponent_div_39_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 25);
      \u0275\u0275template(41, CalendarComponent_div_41_Template, 6, 9, "div", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(42, CalendarComponent_div_42_Template, 14, 6, "div", 27)(43, CalendarComponent_div_43_Template, 13, 3, "div", 28)(44, CalendarComponent_div_44_Template, 13, 3, "div", 29)(45, CalendarComponent_div_45_Template, 5, 1, "div", 30)(46, CalendarComponent_div_46_Template, 10, 2, "div", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("calendar.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.subtitle"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.viewMode() === "month");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.month"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "week");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.week"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "day");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.day"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.calendarMode() === "user");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.my_calendar"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.calendarMode() === "system");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.system_calendar"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.calendarMode() === "user");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.calendarMode() === "system");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.monthNames[ctx.currentDate().getMonth()], " ", ctx.currentDate().getFullYear());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.today"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.weekDays);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.calendarDays);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllUserEventsModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllSystemEventsModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
    }
  }, dependencies: [NgForOf, NgIf, SlicePipe, DatePipe], styles: ['\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.calendar-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #09365f;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n.calendar-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.mode-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.mode-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.mode-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n.calendar-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1200px) {\n  .calendar-content[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n  }\n}\n.user-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-count[_ngcontent-%COMP%] {\n  background: #043DFF;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.user-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-event-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.user-event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.event-date[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 8px;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #043DFF;\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: inline-block;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9ff;\n  text-decoration: underline;\n}\n.view-all-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.system-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.system-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-event-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.system-event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.calendar-grid-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e9ecef;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #043DFF;\n  color: #043DFF;\n}\n.current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.today-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #043DFF;\n  background: #043DFF;\n  color: white;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n  border-color: #0056b3;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  margin-bottom: 8px;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 0.9rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 120px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border: 2px solid #2196f3;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #043DFF;\n  color: white;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #adb5bd;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n.day-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-top: auto;\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-dot.user-event[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n.event-dot.system-event[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.event-details-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .event-details-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #e9ecef17;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef98;\n  color: #495057;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n}\n.event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.event-type[_ngcontent-%COMP%], \n.event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n.all-user-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-user-events-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #09365f;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .all-user-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.all-system-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-system-events-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #09365f;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n.all-system-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .all-system-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #043DFF;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-weight: 500;\n}\n.error-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #f8d7da;\n  color: #721c24;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 1px solid #f5c6cb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-width: 400px;\n}\n.error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.error-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #721c24;\n  background: transparent;\n  color: #721c24;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #721c24;\n  color: white;\n}\n@media (max-width: 1200px) {\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n    max-width: 100%;\n  }\n  .calendar-mode-toggle[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .mode-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mode-btn[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 6px;\n    height: 6px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin: 0 -8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n}\n@media (max-width: 576px) {\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-mode-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .mode-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mode-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 2px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 12px;\n    margin: 0 -8px;\n    width: calc(100% + 16px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 16px);\n    margin: 0 -8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    margin-bottom: 4px;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 2px 5px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 430px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin: 0 -4px;\n    width: calc(100% + 8px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 8px);\n    margin: 0 -4px;\n    padding: 12px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 6px;\n    margin-bottom: 6px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 3px;\n    line-height: 1.2;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 4px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 2px 6px;\n  }\n  .widget-header[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n    padding-bottom: 8px;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .today-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 1px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 4px;\n    height: 4px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n}\n@media (max-width: 390px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 6px;\n    margin: 0 -2px;\n    width: calc(100% + 4px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 4px);\n    margin: 0 -2px;\n    padding: 8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 4px;\n    margin-bottom: 4px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n    line-height: 1.1;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    margin-bottom: 3px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n    padding: 1px 3px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 1px 4px;\n  }\n  .widget-header[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n    padding-bottom: 6px;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .today-btn[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 0.7rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 45px;\n    padding: 0.5px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 3px;\n    height: 3px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 4px 1px;\n    font-size: 0.65rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 2px;\n    max-height: 98vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .event-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    gap: 6px;\n  }\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 12px 48px 12px 16px;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 16px;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  order: 1;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  order: 0;\n}\n/*# sourceMappingURL=calendar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", standalone: false, template: `<div class="calendar-container rounded-5" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="calendar-header">\r
    <div class="header-left">\r
      <h1 class="page-title">{{ translate('calendar.title') }}</h1>\r
      <p class="page-subtitle">{{ translate('calendar.subtitle') }}</p>\r
    </div>\r
    \r
    <div class="header-actions">\r
      <!-- View Mode Toggle -->\r
      <div class="view-mode-toggle">\r
        <button \r
          class="view-btn" \r
          [class.active]="viewMode() === 'month'"\r
          (click)="onViewModeChange('month')"\r
        >\r
          {{ translate('calendar.month') }}\r
        </button>\r
        <button \r
          class="view-btn" \r
          [class.active]="viewMode() === 'week'"\r
          (click)="onViewModeChange('week')"\r
        >\r
          {{ translate('calendar.week') }}\r
        </button>\r
        <button \r
          class="view-btn" \r
          [class.active]="viewMode() === 'day'"\r
          (click)="onViewModeChange('day')"\r
        >\r
          {{ translate('calendar.day') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Calendar Mode Toggle -->\r
  <div class="calendar-mode-toggle">\r
    <div class="mode-buttons">\r
      <button \r
        class="mode-btn"\r
        [class.active]="calendarMode() === 'user'"\r
        (click)="switchToUserCalendar()"\r
      >\r
        {{ translate('calendar.my_calendar') }}\r
      </button>\r
      <button \r
        class="mode-btn"\r
        [class.active]="calendarMode() === 'system'"\r
        (click)="switchToSystemCalendar()"\r
      >\r
        {{ translate('calendar.system_calendar') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div class="calendar-content">\r
    <!-- User Events Widget -->\r
    <div class="user-events-widget" *ngIf="calendarMode() === 'user'">\r
      <div class="widget-header">\r
        <h3>{{ translate('calendar.my_events') }}</h3>\r
        <span class="event-count">{{ userEvents().length }}</span>\r
      </div>\r
      <div class="user-events-list">\r
        <div \r
          class="user-event-item" \r
          *ngFor="let event of userEvents() | slice:0:5"\r
          [style.border-left-color]="event.color"\r
        >\r
          <div class="event-info">\r
            <h4 class="event-title">{{ event.title }}</h4>\r
            <p class="event-date">{{ event.startDate | date:'short' }}</p>\r
            <span \r
              class="event-type-badge"\r
              [style.background-color]="event.color"\r
            >\r
              {{ getEventTypeLabel(event.type) }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="view-all-link" *ngIf="userEvents().length > 5">\r
          <div class="view-all-btn" (click)="viewAllUserEvents($event); $event.stopPropagation()">{{ translate('calendar.view_all') }}</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- System Events Widget -->\r
    <div class="system-events-widget" *ngIf="calendarMode() === 'system'">\r
      <div class="widget-header">\r
        <h3>{{ translate('calendar.system_events') }}</h3>\r
        <span class="event-count">{{ systemEvents().length }}</span>\r
      </div>\r
      <div class="system-events-list">\r
        <div \r
          class="system-event-item" \r
          *ngFor="let event of systemEvents() | slice:0:5"\r
          [style.border-left-color]="event.color"\r
        >\r
          <div class="event-info">\r
            <h4 class="event-title">{{ event.title }}</h4>\r
            <p class="event-date">{{ event.startDate | date:'short' }}</p>\r
            <span \r
              class="event-type-badge"\r
              [style.background-color]="event.color"\r
            >\r
              {{ getEventTypeLabel(event.type) }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="view-all-link" *ngIf="systemEvents().length > 5">\r
          <div class="view-all-btn" (click)="viewAllSystemEvents($event); $event.stopPropagation()">{{ translate('calendar.view_all') }}</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Calendar Grid -->\r
    <div class="calendar-grid-container">\r
      <!-- Calendar Navigation -->\r
      <div class="calendar-navigation">\r
        <button class="nav-btn" (click)="previousMonth()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
        </button>\r
        \r
        <div class="current-month">\r
          <h2>{{ monthNames[currentDate().getMonth()] }} {{ currentDate().getFullYear() }}</h2>\r
        </div>\r
        \r
        <button class="nav-btn" (click)="nextMonth()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
        \r
        <button class="today-btn" (click)="goToToday()">\r
          {{ translate('calendar.today') }}\r
        </button>\r
      </div>\r
\r
      <!-- Calendar Grid -->\r
      <div class="calendar-grid">\r
        <!-- Week Days Header -->\r
        <div class="week-days">\r
          <div class="week-day" *ngFor="let day of weekDays">\r
            {{ day }}\r
          </div>\r
        </div>\r
\r
        <!-- Calendar Days -->\r
        <div class="calendar-days">\r
          <div \r
            class="calendar-day"\r
            *ngFor="let day of calendarDays"\r
            [class.today]="isToday(day)"\r
            [class.selected]="isSelectedDate(day)"\r
            [class.other-month]="!isCurrentMonth(day)"\r
            (click)="onDateClick(day)"\r
          >\r
            <div class="day-number">{{ day.getDate() }}</div>\r
            \r
             <!-- Events for this day -->\r
             <div class="day-events">\r
               <!-- User Events (only in user mode) -->\r
               <ng-container *ngIf="calendarMode() === 'user'">\r
                 <div \r
                   class="event-dot user-event"\r
                   *ngFor="let event of getUserEventsForDate(day)"\r
                   [style.background-color]="event.color"\r
                   [title]="event.title"\r
                 ></div>\r
               </ng-container>\r
               \r
               <!-- System Events (only in system mode) -->\r
               <ng-container *ngIf="calendarMode() === 'system'">\r
                 <div \r
                   class="event-dot system-event"\r
                   *ngFor="let event of getSystemEventsForDate(day)"\r
                   [style.background-color]="event.color"\r
                   [title]="event.title"\r
                 ></div>\r
               </ng-container>\r
             </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Event Details Modal (when a date is selected) -->\r
  <div class="event-details-modal" *ngIf="selectedDate()" (click)="selectedDate.set(null)">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ selectedDate() | date:'fullDate' }}</h3>\r
        <button class="close-btn" (click)="selectedDate.set(null)">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <div class="events-list">\r
          <div \r
            class="event-item"\r
            *ngFor="let event of getEventsForDate(selectedDate()!)"\r
          >\r
            <div class="event-color-bar" [style.background-color]="event.color"></div>\r
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              <p class="event-description" *ngIf="event.description">{{ event.description }}</p>\r
              <div class="event-meta">\r
                <span class="event-time">\r
                  {{ event.startDate | date:'short' }} - {{ event.endDate | date:'short' }}\r
                </span>\r
                <span \r
                  class="event-type"\r
                  [style.color]="event.color"\r
                >\r
                  {{ getEventTypeLabel(event.type) }}\r
                </span>\r
                <span \r
                  class="event-status"\r
                  [style.color]="getEventStatusColor(event.status)"\r
                >\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="no-events" *ngIf="getEventsForDate(selectedDate()!).length === 0">\r
            <p>{{ translate('calendar.no_events_today') }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- All User Events Modal -->\r
  <div class="all-user-events-modal" *ngIf="showAllUserEventsModal()" (click)="closeAllUserEventsModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ translate('calendar.all_my_events') }}</h3>\r
        <button class="close-btn" (click)="closeAllUserEventsModal()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <div class="events-list">\r
          <div \r
            class="event-item"\r
            *ngFor="let event of userEvents()"\r
          >\r
            <div class="event-color-bar" [style.background-color]="event.color"></div>\r
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              <p class="event-description" *ngIf="event.description">{{ event.description }}</p>\r
              <div class="event-meta">\r
                <span class="event-time">\r
                  {{ event.startDate | date:'short' }} - {{ event.endDate | date:'short' }}\r
                </span>\r
                <span \r
                  class="event-type"\r
                  [style.color]="event.color"\r
                >\r
                  {{ getEventTypeLabel(event.type) }}\r
                </span>\r
                <span \r
                  class="event-status"\r
                  [style.color]="getEventStatusColor(event.status)"\r
                >\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="no-events" *ngIf="userEvents().length === 0">\r
            <p>{{ translate('calendar.no_events_found') }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- All System Events Modal -->\r
  <div class="all-system-events-modal" *ngIf="showAllSystemEventsModal()" (click)="closeAllSystemEventsModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ translate('calendar.all_system_events') }}</h3>\r
        <button class="close-btn" (click)="closeAllSystemEventsModal()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <div class="events-list">\r
          <div \r
            class="event-item"\r
            *ngFor="let event of systemEvents()"\r
          >\r
            <div class="event-color-bar" [style.background-color]="event.color"></div>\r
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              <p class="event-description" *ngIf="event.description">{{ event.description }}</p>\r
              <div class="event-meta">\r
                <span class="event-time">\r
                  {{ event.startDate | date:'short' }} - {{ event.endDate | date:'short' }}\r
                </span>\r
                <span \r
                  class="event-type"\r
                  [style.color]="event.color"\r
                >\r
                  {{ getEventTypeLabel(event.type) }}\r
                </span>\r
                <span \r
                  class="event-status"\r
                  [style.color]="getEventStatusColor(event.status)"\r
                >\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="no-events" *ngIf="systemEvents().length === 0">\r
            <p>{{ translate('calendar.no_events_found') }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-overlay" *ngIf="loading()">\r
    <div class="loading-spinner">\r
      <div class="spinner"></div>\r
      <p>{{ translate('calendar.loading') }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div class="error-message" *ngIf="error()">\r
    <div class="error-content">\r
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="12" cy="12" r="10"></circle>\r
        <line x1="15" y1="9" x2="9" y2="15"></line>\r
        <line x1="9" y1="9" x2="15" y2="15"></line>\r
      </svg>\r
      <p>{{ error() }}</p>\r
      <button class="retry-btn" (click)="retryLoadEvents()">\r
        {{ translate('calendar.retry') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/calendar/calendar.component.css */\n.calendar-container {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.calendar-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #09365f;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.view-mode-toggle {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.view-btn {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.view-btn:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.view-btn.active {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n.calendar-mode-toggle {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.mode-buttons {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.mode-btn {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.mode-btn:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.mode-btn.active {\n  background: #158638;\n  color: white;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n.calendar-content {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1200px) {\n  .calendar-content {\n    grid-template-columns: 300px 1fr;\n  }\n}\n.user-events-widget {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.widget-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-count {\n  background: #043DFF;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.user-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-event-item {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.user-event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-info h4 {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.event-date {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.event-type-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.view-all-link {\n  text-align: center;\n  margin-top: 8px;\n}\n.view-all-btn {\n  background: none;\n  border: none;\n  color: #043DFF;\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: inline-block;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.view-all-btn:hover {\n  background: #f8f9ff;\n  text-decoration: underline;\n}\n.view-all-btn:active {\n  transform: translateY(1px);\n}\n.system-events-widget {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.system-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-event-item {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.system-event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.calendar-grid-container {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.calendar-navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e9ecef;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.nav-btn:hover {\n  background: #f8f9fa;\n  border-color: #043DFF;\n  color: #043DFF;\n}\n.current-month h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.today-btn {\n  padding: 8px 16px;\n  border: 1px solid #043DFF;\n  background: #043DFF;\n  color: white;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.today-btn:hover {\n  background: #0056b3;\n  border-color: #0056b3;\n}\n.calendar-grid {\n  display: flex;\n  flex-direction: column;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  margin-bottom: 8px;\n}\n.week-day {\n  padding: 12px 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 0.9rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calendar-day {\n  background: white;\n  min-height: 120px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-day:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today {\n  background: #e3f2fd;\n  border: 2px solid #2196f3;\n}\n.calendar-day.selected {\n  background: #043DFF;\n  color: white;\n}\n.calendar-day.other-month {\n  background: #f8f9fa;\n  color: #adb5bd;\n}\n.day-number {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n.day-events {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-top: auto;\n}\n.event-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-dot.user-event {\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n.event-dot.system-event {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.event-details-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .event-details-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #e9ecef17;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.close-btn:hover {\n  background: #e9ecef98;\n  color: #495057;\n}\n.modal-body {\n  padding: 24px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.event-content {\n  flex: 1;\n  padding: 16px;\n}\n.event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.event-meta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n}\n.event-time {\n  color: #6c757d;\n}\n.event-type,\n.event-status {\n  font-weight: 500;\n}\n.no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n.all-user-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-user-events-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-user-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-user-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.all-user-events-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #09365f;\n}\n.all-user-events-modal .modal-body {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-user-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-user-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-user-events-modal .event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-user-events-modal .event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-user-events-modal .event-content {\n  flex: 1;\n  padding: 16px;\n}\n.all-user-events-modal .event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-user-events-modal .event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-user-events-modal .event-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal .event-time {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-user-events-modal .event-type,\n.all-user-events-modal .event-status {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal .event-type {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-user-events-modal .event-status {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-user-events-modal .no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-user-events-modal .modal-content {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-user-events-modal .modal-header,\n  .all-user-events-modal .modal-body {\n    padding: 16px;\n  }\n  .all-user-events-modal .events-list {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-user-events-modal .event-item {\n    flex-direction: column;\n  }\n  .all-user-events-modal .event-color-bar {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-user-events-modal .modal-content {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-user-events-modal .modal-header h3 {\n    font-size: 1.25rem;\n  }\n  .all-user-events-modal .event-content h4 {\n    font-size: 1rem;\n  }\n  .all-user-events-modal .event-meta {\n    font-size: 0.75rem;\n  }\n}\n.all-system-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-system-events-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-system-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-system-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 12px 12px 0 0;\n}\n.all-system-events-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #09365f;\n}\n.all-system-events-modal .modal-body {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-system-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-system-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-system-events-modal .event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-system-events-modal .event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-system-events-modal .event-content {\n  flex: 1;\n  padding: 16px;\n}\n.all-system-events-modal .event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-system-events-modal .event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-system-events-modal .event-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-system-events-modal .event-time {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-system-events-modal .event-type,\n.all-system-events-modal .event-status {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-system-events-modal .event-type {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-system-events-modal .event-status {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-system-events-modal .no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-system-events-modal .modal-content {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-system-events-modal .modal-header,\n  .all-system-events-modal .modal-body {\n    padding: 16px;\n  }\n  .all-system-events-modal .events-list {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-system-events-modal .event-item {\n    flex-direction: column;\n  }\n  .all-system-events-modal .event-color-bar {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-system-events-modal .modal-content {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-system-events-modal .modal-header h3 {\n    font-size: 1.25rem;\n  }\n  .all-system-events-modal .event-content h4 {\n    font-size: 1rem;\n  }\n  .all-system-events-modal .event-meta {\n    font-size: 0.75rem;\n  }\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #043DFF;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner p {\n  margin: 0;\n  color: #6c757d;\n  font-weight: 500;\n}\n.error-message {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #f8d7da;\n  color: #721c24;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 1px solid #f5c6cb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-width: 400px;\n}\n.error-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.error-content svg {\n  flex-shrink: 0;\n}\n.error-content p {\n  margin: 0;\n  flex: 1;\n}\n.retry-btn {\n  padding: 6px 12px;\n  border: 1px solid #721c24;\n  background: transparent;\n  color: #721c24;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.retry-btn:hover {\n  background: #721c24;\n  color: white;\n}\n@media (max-width: 1200px) {\n  .user-events-widget,\n  .system-events-widget {\n    padding: 20px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-content {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    position: static;\n    order: -1;\n    max-width: 100%;\n  }\n  .calendar-mode-toggle {\n    margin-bottom: 16px;\n  }\n  .mode-buttons {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mode-btn {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container {\n    padding: 16px;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .calendar-navigation {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month h2 {\n    font-size: 1.25rem;\n  }\n  .calendar-day {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number {\n    font-size: 0.8rem;\n  }\n  .event-dot {\n    width: 6px;\n    height: 6px;\n  }\n  .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 16px;\n    margin: 0 -8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 12px;\n  }\n  .event-info h4 {\n    font-size: 0.9rem;\n  }\n  .event-date {\n    font-size: 0.8rem;\n  }\n  .event-type-badge {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n}\n@media (max-width: 576px) {\n  .header-actions {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-mode-toggle {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-btn {\n    flex: 1;\n  }\n  .mode-buttons {\n    width: 100%;\n  }\n  .mode-btn {\n    flex: 1;\n  }\n  .calendar-days {\n    gap: 0;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 2px;\n  }\n  .week-day {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 12px;\n    margin: 0 -8px;\n    width: calc(100% + 16px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 16px);\n    margin: 0 -8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .event-info h4 {\n    font-size: 0.85rem;\n    margin-bottom: 4px;\n  }\n  .event-date {\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n  .event-type-badge {\n    font-size: 0.65rem;\n    padding: 2px 5px;\n  }\n  .widget-header h3 {\n    font-size: 1.1rem;\n  }\n  .event-count {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 430px) {\n  .calendar-container {\n    padding: 8px;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .page-subtitle {\n    font-size: 0.9rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 8px;\n    margin: 0 -4px;\n    width: calc(100% + 8px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 8px);\n    margin: 0 -4px;\n    padding: 12px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 6px;\n    margin-bottom: 6px;\n  }\n  .event-info h4 {\n    font-size: 0.8rem;\n    margin-bottom: 3px;\n    line-height: 1.2;\n  }\n  .event-date {\n    font-size: 0.7rem;\n    margin-bottom: 4px;\n  }\n  .event-type-badge {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .widget-header h3 {\n    font-size: 1rem;\n  }\n  .event-count {\n    font-size: 0.65rem;\n    padding: 2px 6px;\n  }\n  .widget-header {\n    margin-bottom: 12px;\n    padding-bottom: 8px;\n  }\n  .calendar-navigation {\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n  .nav-btn {\n    width: 32px;\n    height: 32px;\n  }\n  .current-month h2 {\n    font-size: 1.1rem;\n  }\n  .today-btn {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .calendar-day {\n    min-height: 50px;\n    padding: 1px;\n  }\n  .day-number {\n    font-size: 0.75rem;\n  }\n  .event-dot {\n    width: 4px;\n    height: 4px;\n  }\n  .week-day {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .modal-content {\n    margin: 5px;\n    max-height: 95vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 12px;\n  }\n  .modal-header h3 {\n    font-size: 1.1rem;\n  }\n  .event-content h4 {\n    font-size: 0.9rem;\n  }\n  .event-description {\n    font-size: 0.8rem;\n  }\n  .event-meta {\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n}\n@media (max-width: 390px) {\n  .calendar-container {\n    padding: 4px;\n  }\n  .page-title {\n    font-size: 1.3rem;\n  }\n  .page-subtitle {\n    font-size: 0.8rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 6px;\n    margin: 0 -2px;\n    width: calc(100% + 4px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 4px);\n    margin: 0 -2px;\n    padding: 8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 4px;\n    margin-bottom: 4px;\n  }\n  .event-info h4 {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n    line-height: 1.1;\n  }\n  .event-date {\n    font-size: 0.65rem;\n    margin-bottom: 3px;\n  }\n  .event-type-badge {\n    font-size: 0.55rem;\n    padding: 1px 3px;\n  }\n  .widget-header h3 {\n    font-size: 0.9rem;\n  }\n  .event-count {\n    font-size: 0.6rem;\n    padding: 1px 4px;\n  }\n  .widget-header {\n    margin-bottom: 8px;\n    padding-bottom: 6px;\n  }\n  .calendar-navigation {\n    gap: 6px;\n  }\n  .nav-btn {\n    width: 28px;\n    height: 28px;\n  }\n  .current-month h2 {\n    font-size: 1rem;\n  }\n  .today-btn {\n    padding: 4px 8px;\n    font-size: 0.7rem;\n  }\n  .calendar-day {\n    min-height: 45px;\n    padding: 0.5px;\n  }\n  .day-number {\n    font-size: 0.7rem;\n  }\n  .event-dot {\n    width: 3px;\n    height: 3px;\n  }\n  .week-day {\n    padding: 4px 1px;\n    font-size: 0.65rem;\n  }\n  .modal-content {\n    margin: 2px;\n    max-height: 98vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 8px;\n  }\n  .modal-header h3 {\n    font-size: 1rem;\n  }\n  .event-content h4 {\n    font-size: 0.85rem;\n  }\n  .event-description {\n    font-size: 0.75rem;\n  }\n  .event-meta {\n    font-size: 0.65rem;\n    gap: 6px;\n  }\n}\n.calendar-container.rtl .search-input {\n  padding: 12px 48px 12px 16px;\n}\n.calendar-container.rtl .search-icon {\n  left: auto;\n  right: 16px;\n}\n.calendar-container.rtl .event-color-bar {\n  order: 1;\n}\n.calendar-container.rtl .event-content {\n  order: 0;\n}\n/*# sourceMappingURL=calendar.component.css.map */\n'] }]
  }], () => [{ type: CalendarService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/components/calendar/calendar.component.ts", lineNumber: 19 });
})();

// src/app/components/calendar/calendar-routing.module.ts
var routes = [
  {
    path: "",
    component: CalendarComponent
  }
];
var CalendarRoutingModule = class _CalendarRoutingModule {
  static \u0275fac = function CalendarRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CalendarRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/calendar/calendar.module.ts
var CalendarModule = class _CalendarModule {
  static \u0275fac = function CalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CalendarModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [CalendarService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    CalendarRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      declarations: [
        CalendarComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        SharedModule,
        CalendarRoutingModule
      ],
      providers: [CalendarService],
      exports: [
        CalendarComponent
      ]
    }]
  }], null, null);
})();
export {
  CalendarModule
};
//# sourceMappingURL=chunk-4VNTPRA6.js.map
