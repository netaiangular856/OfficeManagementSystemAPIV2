import {
  environment
} from "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  LangService,
  NgForOf,
  NgIf,
  TranslationService,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L7ZNDW2L.js";

// src/app/models/calendar.model.ts
var EventType;
(function(EventType2) {
  EventType2[EventType2["Meeting"] = 0] = "Meeting";
  EventType2[EventType2["Task"] = 1] = "Task";
  EventType2[EventType2["Visit"] = 2] = "Visit";
  EventType2[EventType2["Travel"] = 3] = "Travel";
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
  getUserEventsSimple() {
    return this.http.get(`${this.baseUrl}/Calendar/user/events/simple`);
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
  getSystemEventsSimple() {
    return this.http.get(`${this.baseUrl}/Calendar/system/events/simple`);
  }
  getEventTypeLabel(type) {
    switch (type) {
      case EventType.Meeting:
        return "calendar.event_types.meeting";
      case EventType.Task:
        return "calendar.event_types.task";
      case EventType.Visit:
        return "calendar.event_types.visit";
      case EventType.Travel:
        return "calendar.event_types.travel";
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
        return "#D87E37";
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
        return "#D87E37";
      // Medium priority - Yellow
      case 3:
        return "#EA4335";
      // Low priority - Red
      default:
        return "#6C757D";
    }
  }
  getEventTypeColor(type) {
    switch (type) {
      case EventType.Meeting:
        return "#29ABE2";
      case EventType.Task:
        return "#D87E37";
      case EventType.Visit:
        return "#72444A";
      case EventType.Travel:
        return "#27AE60";
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

// src/app/components/calendar/calendar-table-view/calendar-table-view.component.ts
function CalendarTableViewComponent_ng_container_27_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td", 26)(6, "div", 27)(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 29)(10, "div", 30)(11, "div", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 33)(16, "div", 34)(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td", 36)(20, "div", 37)(21, "span", 38);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "td", 39)(24, "div", 40)(25, "span", 41);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 42);
    \u0275\u0275text(28, " \u0645\u062C\u062F\u0648\u0644 ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.dayName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.dateFormatted);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.subject);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getEventTypeColor(ctx_r1.getEventTypeFromName(event_r1.eventTypeName)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r1.eventTypeName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.timeFormatted);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.location || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.assignedEmployeeName || "-");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getEventStatusColor(0));
  }
}
function CalendarTableViewComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarTableViewComponent_ng_container_27_tr_1_Template, 29, 11, "tr", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.simpleEvents)("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function CalendarTableViewComponent_ng_container_28_tr_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.description);
  }
}
function CalendarTableViewComponent_ng_container_28_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 22)(1, "td", 23)(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "td", 26)(6, "div", 27)(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 29)(10, "div", 30)(11, "div", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CalendarTableViewComponent_ng_container_28_tr_1_div_13_Template, 3, 1, "div", 43);
    \u0275\u0275elementStart(14, "div", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td", 33)(17, "div", 34)(18, "span", 35);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 36)(21, "div", 37)(22, "span", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td", 39)(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 42);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.day);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.subject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.description);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getEventTypeColor(item_r3.eventType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(item_r3.eventType), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.time);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.assignedEmployee);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.getEventStatusColor(item_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventStatusLabel(item_r3.status), " ");
  }
}
function CalendarTableViewComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarTableViewComponent_ng_container_28_tr_1_Template, 30, 13, "tr", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getTableData())("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function CalendarTableViewComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 47);
    \u0275\u0275element(2, "rect", 4)(3, "line", 5)(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_today"));
  }
}
function CalendarTableViewComponent_ng_container_31_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", event_r4.location, " ");
  }
}
function CalendarTableViewComponent_ng_container_31_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F464} ", event_r4.assignedEmployeeName, " ");
  }
}
function CalendarTableViewComponent_ng_container_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 57)(13, "span", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 59);
    \u0275\u0275text(16, " \u0645\u062C\u062F\u0648\u0644 ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 60);
    \u0275\u0275template(18, CalendarTableViewComponent_ng_container_31_div_1_div_18_Template, 2, 1, "div", 61)(19, CalendarTableViewComponent_ng_container_31_div_1_div_19_Template, 2, 1, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r4.dayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.dateFormatted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.timeFormatted);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r4.subject);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getEventTypeColor(ctx_r1.getEventTypeFromName(event_r4.eventTypeName)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.eventTypeName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", event_r4.location && event_r4.location !== "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r4.assignedEmployeeName && event_r4.assignedEmployeeName !== "-");
  }
}
function CalendarTableViewComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarTableViewComponent_ng_container_31_div_1_Template, 20, 9, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.simpleEvents)("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.description);
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.getEventTypeColor(item_r5.eventType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventTypeLabel(item_r5.eventType), " ");
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", item_r5.status === 0 ? "#10b981" : item_r5.status === 1 ? "#f59e0b" : item_r5.status === 2 ? "#3b82f6" : item_r5.status === 3 ? "#ef4444" : "#6b7280");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEventStatusLabel(item_r5.status), " ");
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, CalendarTableViewComponent_ng_container_32_div_1_div_13_span_1_Template, 2, 3, "span", 68)(2, CalendarTableViewComponent_ng_container_32_div_1_div_13_span_2_Template, 2, 3, "span", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.eventType !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.status !== void 0);
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F4CD} ", item_r5.location, " ");
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F464} ", item_r5.assignedEmployee, " ");
  }
}
function CalendarTableViewComponent_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 55)(10, "div", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CalendarTableViewComponent_ng_container_32_div_1_div_12_Template, 2, 1, "div", 65)(13, CalendarTableViewComponent_ng_container_32_div_1_div_13_Template, 3, 2, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 60);
    \u0275\u0275template(15, CalendarTableViewComponent_ng_container_32_div_1_div_15_Template, 2, 1, "div", 61)(16, CalendarTableViewComponent_ng_container_32_div_1_div_16_Template, 2, 1, "div", 62);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.subject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.eventType !== void 0 || item_r5.status !== void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r5.location !== "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.assignedEmployee !== "-");
  }
}
function CalendarTableViewComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarTableViewComponent_ng_container_32_div_1_Template, 17, 8, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getTableData())("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function CalendarTableViewComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 72);
    \u0275\u0275element(2, "rect", 4)(3, "line", 5)(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("calendar.no_events_today"));
  }
}
var CalendarTableViewComponent = class _CalendarTableViewComponent {
  translationService;
  langService;
  events = [];
  simpleEvents = [];
  reminders = [];
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  subscriptions = [];
  constructor(translationService, langService) {
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.setupLanguageSubscription();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  setupLanguageSubscription() {
    const langSub = this.langService.currentLang$.subscribe((lang) => {
      this.isRTL.set(lang === "ar");
    });
    this.subscriptions.push(langSub);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getDayName(date) {
    if (this.isRTL()) {
      const dayNames = [
        "\u0627\u0644\u0623\u062D\u062F",
        "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
        "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
        "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
        "\u0627\u0644\u062E\u0645\u064A\u0633",
        "\u0627\u0644\u062C\u0645\u0639\u0629",
        "\u0627\u0644\u0633\u0628\u062A"
      ];
      return dayNames[date.getDay()];
    } else {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return dayNames[date.getDay()];
    }
  }
  getEventTypeLabel(type) {
    const typeLabels = {
      0: "meeting",
      1: "task",
      2: "visit",
      3: "travel"
    };
    const key = typeLabels[type] || "unknown";
    return this.translate(`calendar.event_types.${key}`);
  }
  getEventTypeFromName(typeName) {
    const typeMap = {
      "\u0627\u062C\u062A\u0645\u0627\u0639": 0,
      // meeting
      "\u0645\u0647\u0645\u0629": 1,
      // task
      "\u0632\u064A\u0627\u0631\u0629": 2,
      // visit
      "\u0633\u0641\u0631": 3,
      // travel
      "meeting": 0,
      "task": 1,
      "visit": 2,
      "travel": 3,
      "Meeting": 0,
      "Task": 1,
      "Visit": 2,
      "Travel": 3
    };
    return typeMap[typeName] || 0;
  }
  getEventStatusLabel(status) {
    const statusLabels = {
      0: "scheduled",
      1: "in_progress",
      2: "completed",
      3: "cancelled",
      4: "overdue"
    };
    const key = statusLabels[status] || "unknown";
    return this.translate(`calendar.event_statuses.${key}`);
  }
  getEventStatusColor(status) {
    const statusColors = {
      0: "#2196f3",
      // scheduled - blue
      1: "#ff9800",
      // in_progress - orange
      2: "#4caf50",
      // completed - green
      3: "#f44336",
      // cancelled - red
      4: "#9c27b0"
      // overdue - purple
    };
    return statusColors[status] || "#6c757d";
  }
  getEventTypeColor(type) {
    const typeColors = {
      0: "#2196f3",
      // meeting - blue
      1: "#4caf50",
      // task - green
      2: "#ff9800",
      // visit - orange
      3: "#9c27b0"
      // travel - purple
    };
    return typeColors[type] || "#6c757d";
  }
  formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }
  trackByFn(index, item) {
    return item.id || index;
  }
  // Combine events and reminders into a single table data source
  getTableData() {
    const tableData = [];
    if (this.simpleEvents && this.simpleEvents.length > 0) {
      this.simpleEvents.forEach((simpleEvent) => {
        const eventType = this.getEventTypeFromName(simpleEvent.eventTypeName);
        tableData.push({
          type: "simpleEvent",
          id: simpleEvent.originalEntityId,
          day: simpleEvent.dayName,
          date: simpleEvent.dateFormatted,
          subject: simpleEvent.subject,
          time: simpleEvent.timeFormatted,
          location: simpleEvent.location || "-",
          assignedEmployee: simpleEvent.assignedEmployeeName || "-",
          status: 0,
          // scheduled by default
          eventType,
          description: "",
          startDate: simpleEvent.dateFormatted,
          endDate: simpleEvent.dateFormatted
        });
      });
      return tableData.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    } else {
      this.events.forEach((event) => {
        tableData.push({
          type: "event",
          id: event.id,
          day: this.getDayName(new Date(event.startDate)),
          date: this.formatDate(event.startDate),
          subject: event.title,
          time: this.formatTime(event.startDate),
          location: event.location || "-",
          assignedEmployee: event.assigneeName || "-",
          status: event.status,
          eventType: event.type,
          description: event.description,
          startDate: event.startDate,
          endDate: event.endDate
        });
      });
      this.reminders.forEach((reminder) => {
        tableData.push({
          type: "reminder",
          id: reminder.id,
          day: this.getDayName(new Date(reminder.reminderTime)),
          date: this.formatDate(reminder.reminderTime),
          subject: reminder.title,
          time: this.formatTime(reminder.reminderTime),
          location: "-",
          assignedEmployee: "-",
          status: 0,
          // scheduled
          eventType: 0,
          // meeting
          description: reminder.description,
          startDate: reminder.reminderTime,
          endDate: reminder.reminderTime
        });
      });
      return tableData.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }
  }
  static \u0275fac = function CalendarTableViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarTableViewComponent)(\u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarTableViewComponent, selectors: [["app-calendar-table-view"]], inputs: { events: "events", simpleEvents: "simpleEvents", reminders: "reminders" }, decls: 34, vars: 15, consts: [[1, "calendar-table-view"], [1, "table-header"], [1, "table-title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "table-container"], [1, "table-wrapper"], [1, "calendar-table"], [1, "day-column"], [1, "date-column"], [1, "subject-column"], [1, "time-column"], [1, "location-column"], [1, "employee-column"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "mobile-cards"], ["class", "mobile-empty-state", 4, "ngIf"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row"], [1, "day-cell"], [1, "day-content"], [1, "day-name"], [1, "date-cell"], [1, "date-content"], [1, "date-value"], [1, "subject-cell"], [1, "subject-content"], [1, "subject-title"], [1, "type-badge"], [1, "time-cell"], [1, "time-content"], [1, "time-value"], [1, "location-cell"], [1, "location-content"], [1, "location-value"], [1, "employee-cell"], [1, "employee-content"], [1, "employee-value"], [1, "status-badge"], ["class", "subject-meta", 4, "ngIf"], [1, "subject-meta"], [1, "description"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["class", "mobile-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-card"], [1, "mobile-card-header"], [1, "mobile-card-date"], [1, "mobile-day"], [1, "mobile-date"], [1, "mobile-time"], [1, "mobile-card-content"], [1, "mobile-subject"], [1, "mobile-badges"], [1, "mobile-type-badge"], [1, "mobile-status-badge", 2, "background-color", "#10b981"], [1, "mobile-card-footer"], ["class", "mobile-location", 4, "ngIf"], ["class", "mobile-employee", 4, "ngIf"], [1, "mobile-location"], [1, "mobile-employee"], ["class", "mobile-description", 4, "ngIf"], ["class", "mobile-badges", 4, "ngIf"], [1, "mobile-description"], ["class", "mobile-type-badge", 3, "background-color", 4, "ngIf"], ["class", "mobile-status-badge", 3, "background-color", 4, "ngIf"], [1, "mobile-status-badge"], [1, "mobile-empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"]], template: function CalendarTableViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "rect", 4)(5, "line", 5)(6, "line", 6)(7, "line", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "table", 10)(12, "thead")(13, "tr")(14, "th", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th", 14);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 15);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 16);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "tbody");
      \u0275\u0275template(27, CalendarTableViewComponent_ng_container_27_Template, 2, 2, "ng-container", 17)(28, CalendarTableViewComponent_ng_container_28_Template, 2, 2, "ng-container", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(29, CalendarTableViewComponent_div_29_Template, 10, 2, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275template(31, CalendarTableViewComponent_ng_container_31_Template, 2, 2, "ng-container", 17)(32, CalendarTableViewComponent_ng_container_32_Template, 2, 2, "ng-container", 17)(33, CalendarTableViewComponent_div_33_Template, 10, 2, "div", 20);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.table_view.title"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.day"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.date"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.subject"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.time"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.location"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.table_view.assigned_employee"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.simpleEvents && ctx.simpleEvents.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.simpleEvents || ctx.simpleEvents.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.simpleEvents || ctx.simpleEvents.length === 0) && ctx.getTableData().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.simpleEvents && ctx.simpleEvents.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.simpleEvents || ctx.simpleEvents.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.simpleEvents || ctx.simpleEvents.length === 0) && ctx.getTableData().length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.calendar-table-view[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(216, 159, 46, 0.671);\n  position: relative;\n  overflow: hidden;\n  min-height: 400px;\n}\n.calendar-table-view.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.table-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #f7fafc;\n}\n.table-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1b1d21;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.table-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #b68a35;\n}\n.table-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.mobile-cards[_ngcontent-%COMP%] {\n  display: none;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: visible;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.calendar-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 0.9rem;\n}\n.calendar-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.calendar-table.rtl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.table-row[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  vertical-align: top;\n  border: none;\n}\n.day-column[_ngcontent-%COMP%] {\n  width: 120px;\n  min-width: 120px;\n}\n.day-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.day-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.85rem;\n}\n.date-column[_ngcontent-%COMP%] {\n  width: 100px;\n  min-width: 100px;\n}\n.date-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.date-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.date-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.85rem;\n}\n.subject-column[_ngcontent-%COMP%] {\n  min-width: 250px;\n  flex: 1;\n}\n.subject-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.subject-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2d3748;\n  font-size: 1rem;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n.subject-meta[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #718096;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: fit-content;\n}\n.time-column[_ngcontent-%COMP%] {\n  width: 100px;\n  min-width: 100px;\n}\n.time-cell[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.time-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.time-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2d3748;\n  font-size: 0.9rem;\n  background: #f7fafc;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.location-column[_ngcontent-%COMP%] {\n  width: 150px;\n  min-width: 150px;\n}\n.location-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.location-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4a5568;\n  font-size: 0.85rem;\n  line-height: 1.4;\n}\n.employee-column[_ngcontent-%COMP%] {\n  width: 180px;\n  min-width: 180px;\n}\n.employee-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.employee-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.85rem;\n  line-height: 1.4;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: fit-content;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #a0aec0;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #4a5568;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n@media (max-width: 1200px) {\n  .calendar-table-view[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n  }\n  .subject-column[_ngcontent-%COMP%] {\n    min-width: 200px;\n  }\n  .employee-column[_ngcontent-%COMP%] {\n    width: 150px;\n    min-width: 150px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-table-view[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .table-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 6px;\n    font-size: 0.8rem;\n  }\n  .day-column[_ngcontent-%COMP%], \n   .date-column[_ngcontent-%COMP%], \n   .time-column[_ngcontent-%COMP%] {\n    width: 80px;\n    min-width: 80px;\n  }\n  .location-column[_ngcontent-%COMP%] {\n    width: 120px;\n    min-width: 120px;\n  }\n  .employee-column[_ngcontent-%COMP%] {\n    width: 130px;\n    min-width: 130px;\n  }\n  .subject-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .type-badge[_ngcontent-%COMP%], \n   .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-table-view[_ngcontent-%COMP%] {\n    padding: 12px;\n    border-radius: 16px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n    padding-bottom: 12px;\n  }\n  .table-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-cards[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .mobile-card[_ngcontent-%COMP%] {\n    background: white;\n    border-radius: 12px;\n    padding: 16px;\n    margin-bottom: 12px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border: 1px solid #e2e8f0;\n  }\n  .mobile-card-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 12px;\n  }\n  .mobile-card-date[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 60px;\n  }\n  .mobile-day[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #4a5568;\n    font-size: 0.8rem;\n    margin-bottom: 2px;\n  }\n  .mobile-date[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: #2d3748;\n    font-size: 0.75rem;\n  }\n  .mobile-time[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #2d3748;\n    font-size: 0.8rem;\n    background: #f7fafc;\n    padding: 4px 8px;\n    border-radius: 6px;\n    border: 1px solid #e2e8f0;\n  }\n  .mobile-card-content[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-left: 12px;\n  }\n  .mobile-subject[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #2d3748;\n    font-size: 0.9rem;\n    line-height: 1.4;\n    margin-bottom: 6px;\n  }\n  .mobile-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: #718096;\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n  .mobile-badges[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n    margin-bottom: 8px;\n  }\n  .mobile-type-badge[_ngcontent-%COMP%], \n   .mobile-status-badge[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 12px;\n    color: white;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 8px;\n    padding-top: 8px;\n    border-top: 1px solid #f1f5f9;\n  }\n  .mobile-location[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: #4a5568;\n    font-size: 0.75rem;\n  }\n  .mobile-employee[_ngcontent-%COMP%] {\n    font-weight: 600;\n    color: #2d3748;\n    font-size: 0.75rem;\n  }\n  .mobile-empty-state[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 40px 20px;\n    color: #718096;\n  }\n  .mobile-empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    color: #cbd5e0;\n    margin-bottom: 16px;\n  }\n  .mobile-empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: #4a5568;\n    margin-bottom: 8px;\n  }\n  .mobile-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: #718096;\n    margin: 0;\n  }\n}\n@media (max-width: 576px) {\n  .calendar-table-view[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 12px;\n  }\n  .table-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    gap: 8px;\n  }\n  .table-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .day-column[_ngcontent-%COMP%], \n   .date-column[_ngcontent-%COMP%], \n   .time-column[_ngcontent-%COMP%] {\n    width: 60px;\n    min-width: 60px;\n  }\n  .location-column[_ngcontent-%COMP%] {\n    width: 80px;\n    min-width: 80px;\n  }\n  .employee-column[_ngcontent-%COMP%] {\n    width: 90px;\n    min-width: 90px;\n  }\n  .subject-title[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    -webkit-line-clamp: 1;\n  }\n  .time-value[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n  .type-badge[_ngcontent-%COMP%], \n   .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n.calendar-table-view.rtl[_ngcontent-%COMP%]   .table-title[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.calendar-table-view.rtl[_ngcontent-%COMP%]   .day-content[_ngcontent-%COMP%], \n.calendar-table-view.rtl[_ngcontent-%COMP%]   .date-content[_ngcontent-%COMP%], \n.calendar-table-view.rtl[_ngcontent-%COMP%]   .time-content[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.calendar-table-view.rtl[_ngcontent-%COMP%]   .subject-content[_ngcontent-%COMP%], \n.calendar-table-view.rtl[_ngcontent-%COMP%]   .location-content[_ngcontent-%COMP%], \n.calendar-table-view.rtl[_ngcontent-%COMP%]   .employee-content[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: right;\n}\n.calendar-table-view.rtl[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%], \n.calendar-table-view.rtl[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=calendar-table-view.component-LFAACKU5.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTableViewComponent, [{
    type: Component,
    args: [{ selector: "app-calendar-table-view", standalone: true, imports: [CommonModule], template: `<div class="calendar-table-view" [class.rtl]="isRTL()">\r
  <!-- Table Header -->\r
  <div class="table-header">\r
    <h3 class="table-title">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
        <line x1="16" y1="2" x2="16" y2="6"></line>\r
        <line x1="8" y1="2" x2="8" y2="6"></line>\r
        <line x1="3" y1="10" x2="21" y2="10"></line>\r
      </svg>\r
      {{ translate("calendar.table_view.title") }}\r
    </h3>\r
  </div>\r
\r
  <!-- Table Container -->\r
  <div class="table-container">\r
    <div class="table-wrapper">\r
      <table class="calendar-table">\r
        <thead>\r
          <tr>\r
            <th class="day-column">{{ translate("calendar.table_view.day") }}</th>\r
            <th class="date-column">{{ translate("calendar.table_view.date") }}</th>\r
            <th class="subject-column">{{ translate("calendar.table_view.subject") }}</th>\r
            <th class="time-column">{{ translate("calendar.table_view.time") }}</th>\r
            <th class="location-column">{{ translate("calendar.table_view.location") }}</th>\r
            <th class="employee-column">{{ translate("calendar.table_view.assigned_employee") }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <!-- Show simple events from API if available -->\r
          <ng-container *ngIf="simpleEvents && simpleEvents.length > 0">\r
            <tr *ngFor="let event of simpleEvents; trackBy: trackByFn" class="table-row">\r
            <td class="day-cell">\r
              <div class="day-content">\r
                <span class="day-name">{{ event.dayName }}</span>\r
              </div>\r
            </td>\r
            <td class="date-cell">\r
              <div class="date-content">\r
                <span class="date-value">{{ event.dateFormatted }}</span>\r
              </div>\r
            </td>\r
            <td class="subject-cell">\r
              <div class="subject-content">\r
                <div class="subject-title">{{ event.subject }}</div>\r
                <div class="type-badge" [style.background-color]="getEventTypeColor(getEventTypeFromName(event.eventTypeName))">\r
                  {{ event.eventTypeName }}\r
                </div>\r
              </div>\r
            </td>\r
            <td class="time-cell">\r
              <div class="time-content">\r
                <span class="time-value">{{ event.timeFormatted }}</span>\r
              </div>\r
            </td>\r
            <td class="location-cell">\r
              <div class="location-content">\r
                <span class="location-value">{{ event.location || '-' }}</span>\r
              </div>\r
            </td>\r
            <td class="employee-cell">\r
              <div class="employee-content">\r
                <span class="employee-value">{{ event.assignedEmployeeName || '-' }}</span>\r
                <div class="status-badge" [style.background-color]="getEventStatusColor(0)">\r
                  \u0645\u062C\u062F\u0648\u0644\r
                </div>\r
              </div>\r
            </td>\r
            </tr>\r
          </ng-container>\r
          \r
          <!-- Fallback to processed data if simple events not available -->\r
          <ng-container *ngIf="!simpleEvents || simpleEvents.length === 0">\r
            <tr *ngFor="let item of getTableData(); trackBy: trackByFn" class="table-row">\r
            <td class="day-cell">\r
              <div class="day-content">\r
                <span class="day-name">{{ item.day }}</span>\r
              </div>\r
            </td>\r
            <td class="date-cell">\r
              <div class="date-content">\r
                <span class="date-value">{{ item.date }}</span>\r
              </div>\r
            </td>\r
            <td class="subject-cell">\r
              <div class="subject-content">\r
                <div class="subject-title">{{ item.subject }}</div>\r
                <div class="subject-meta" *ngIf="item.description">\r
                  <span class="description">{{ item.description }}</span>\r
                </div>\r
                <div class="type-badge" [style.background-color]="getEventTypeColor(item.eventType)">\r
                  {{ getEventTypeLabel(item.eventType) }}\r
                </div>\r
              </div>\r
            </td>\r
            <td class="time-cell">\r
              <div class="time-content">\r
                <span class="time-value">{{ item.time }}</span>\r
              </div>\r
            </td>\r
            <td class="location-cell">\r
              <div class="location-content">\r
                <span class="location-value">{{ item.location }}</span>\r
              </div>\r
            </td>\r
            <td class="employee-cell">\r
              <div class="employee-content">\r
                <span class="employee-value">{{ item.assignedEmployee }}</span>\r
                <div class="status-badge" [style.background-color]="getEventStatusColor(item.status)">\r
                  {{ getEventStatusLabel(item.status) }}\r
                </div>\r
              </div>\r
            </td>\r
            </tr>\r
          </ng-container>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div class="empty-state" *ngIf="(!simpleEvents || simpleEvents.length === 0) && getTableData().length === 0">\r
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
        <line x1="16" y1="2" x2="16" y2="6"></line>\r
        <line x1="8" y1="2" x2="8" y2="6"></line>\r
        <line x1="3" y1="10" x2="21" y2="10"></line>\r
      </svg>\r
      <h4>{{ translate("calendar.no_events_found") }}</h4>\r
      <p>{{ translate("calendar.no_events_today") }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Mobile Cards Layout -->\r
  <div class="mobile-cards">\r
    <!-- Show simple events from API if available -->\r
    <ng-container *ngIf="simpleEvents && simpleEvents.length > 0">\r
      <div class="mobile-card" *ngFor="let event of simpleEvents; trackBy: trackByFn">\r
      <div class="mobile-card-header">\r
        <div class="mobile-card-date">\r
          <div class="mobile-day">{{ event.dayName }}</div>\r
          <div class="mobile-date">{{ event.dateFormatted }}</div>\r
        </div>\r
        <div class="mobile-time">{{ event.timeFormatted }}</div>\r
      </div>\r
      \r
      <div class="mobile-card-content">\r
        <div class="mobile-subject">{{ event.subject }}</div>\r
        \r
        <div class="mobile-badges">\r
          <span class="mobile-type-badge" [style.background-color]="getEventTypeColor(getEventTypeFromName(event.eventTypeName))">\r
            {{ event.eventTypeName }}\r
          </span>\r
          <span class="mobile-status-badge" style="background-color: #10b981">\r
            \u0645\u062C\u062F\u0648\u0644\r
          </span>\r
        </div>\r
      </div>\r
      \r
      <div class="mobile-card-footer">\r
        <div class="mobile-location" *ngIf="event.location && event.location !== '-'">\r
          \u{1F4CD} {{ event.location }}\r
        </div>\r
        <div class="mobile-employee" *ngIf="event.assignedEmployeeName && event.assignedEmployeeName !== '-'">\r
          \u{1F464} {{ event.assignedEmployeeName }}\r
        </div>\r
      </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- Fallback to processed data if simple events not available -->\r
    <ng-container *ngIf="!simpleEvents || simpleEvents.length === 0">\r
      <div class="mobile-card" *ngFor="let item of getTableData(); trackBy: trackByFn">\r
      <div class="mobile-card-header">\r
        <div class="mobile-card-date">\r
          <div class="mobile-day">{{ item.day }}</div>\r
          <div class="mobile-date">{{ item.date }}</div>\r
        </div>\r
        <div class="mobile-time">{{ item.time }}</div>\r
      </div>\r
      \r
      <div class="mobile-card-content">\r
        <div class="mobile-subject">{{ item.subject }}</div>\r
        <div class="mobile-description" *ngIf="item.description">{{ item.description }}</div>\r
        \r
        <div class="mobile-badges" *ngIf="item.eventType !== undefined || item.status !== undefined">\r
          <span class="mobile-type-badge" *ngIf="item.eventType !== undefined" \r
                [style.background-color]="getEventTypeColor(item.eventType)">\r
            {{ getEventTypeLabel(item.eventType) }}\r
          </span>\r
          <span class="mobile-status-badge" *ngIf="item.status !== undefined" \r
                [style.background-color]="item.status === 0 ? '#10b981' : item.status === 1 ? '#f59e0b' : item.status === 2 ? '#3b82f6' : item.status === 3 ? '#ef4444' : '#6b7280'">\r
            {{ getEventStatusLabel(item.status) }}\r
          </span>\r
        </div>\r
      </div>\r
      \r
      <div class="mobile-card-footer">\r
        <div class="mobile-location" *ngIf="item.location !== '-'">\r
          \u{1F4CD} {{ item.location }}\r
        </div>\r
        <div class="mobile-employee" *ngIf="item.assignedEmployee !== '-'">\r
          \u{1F464} {{ item.assignedEmployee }}\r
        </div>\r
      </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- Mobile Empty State -->\r
    <div class="mobile-empty-state" *ngIf="(!simpleEvents || simpleEvents.length === 0) && getTableData().length === 0">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
        <line x1="16" y1="2" x2="16" y2="6"></line>\r
        <line x1="8" y1="2" x2="8" y2="6"></line>\r
        <line x1="3" y1="10" x2="21" y2="10"></line>\r
      </svg>\r
      <h4>{{ translate("calendar.no_events_found") }}</h4>\r
      <p>{{ translate("calendar.no_events_today") }}</p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/calendar/calendar-table-view/calendar-table-view.component.css */\n.calendar-table-view {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(216, 159, 46, 0.671);\n  position: relative;\n  overflow: hidden;\n  min-height: 400px;\n}\n.calendar-table-view.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.table-header {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #f7fafc;\n}\n.table-title {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1b1d21;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.table-title svg {\n  color: #b68a35;\n}\n.table-container {\n  position: relative;\n  overflow: hidden;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.mobile-cards {\n  display: none;\n}\n.table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible;\n}\n.table-wrapper::-webkit-scrollbar {\n  height: 8px;\n}\n.table-wrapper::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-wrapper::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.calendar-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 0.9rem;\n}\n.calendar-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.calendar-table th {\n  padding: 16px 12px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: none;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.calendar-table.rtl th {\n  text-align: right;\n}\n.table-row {\n  transition: all 0.3s ease;\n  border-bottom: 1px solid #f1f5f9;\n}\n.table-row:hover {\n  background: #f8fafc;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.table-row:last-child {\n  border-bottom: none;\n}\n.calendar-table td {\n  padding: 16px 12px;\n  vertical-align: top;\n  border: none;\n}\n.day-column {\n  width: 120px;\n  min-width: 120px;\n}\n.day-cell {\n  text-align: center;\n}\n.day-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.day-name {\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.85rem;\n}\n.date-column {\n  width: 100px;\n  min-width: 100px;\n}\n.date-cell {\n  text-align: center;\n}\n.date-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.date-value {\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.85rem;\n}\n.subject-column {\n  min-width: 250px;\n  flex: 1;\n}\n.subject-content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.subject-title {\n  font-weight: 700;\n  color: #2d3748;\n  font-size: 1rem;\n  line-height: 1.4;\n  margin-bottom: 4px;\n}\n.subject-meta {\n  margin-bottom: 8px;\n}\n.description {\n  font-size: 0.8rem;\n  color: #718096;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.type-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: fit-content;\n}\n.time-column {\n  width: 100px;\n  min-width: 100px;\n}\n.time-cell {\n  text-align: center;\n}\n.time-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.time-value {\n  font-weight: 700;\n  color: #2d3748;\n  font-size: 0.9rem;\n  background: #f7fafc;\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n}\n.location-column {\n  width: 150px;\n  min-width: 150px;\n}\n.location-content {\n  display: flex;\n  flex-direction: column;\n}\n.location-value {\n  font-weight: 600;\n  color: #4a5568;\n  font-size: 0.85rem;\n  line-height: 1.4;\n}\n.employee-column {\n  width: 180px;\n  min-width: 180px;\n}\n.employee-content {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.employee-value {\n  font-weight: 600;\n  color: #2d3748;\n  font-size: 0.85rem;\n  line-height: 1.4;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  width: fit-content;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #a0aec0;\n}\n.empty-state svg {\n  margin-bottom: 20px;\n  opacity: 0.5;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #4a5568;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n@media (max-width: 1200px) {\n  .calendar-table-view {\n    padding: 20px;\n  }\n  .calendar-table th,\n  .calendar-table td {\n    padding: 12px 8px;\n  }\n  .subject-column {\n    min-width: 200px;\n  }\n  .employee-column {\n    width: 150px;\n    min-width: 150px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-table-view {\n    padding: 16px;\n  }\n  .table-title {\n    font-size: 1.3rem;\n  }\n  .calendar-table th,\n  .calendar-table td {\n    padding: 10px 6px;\n    font-size: 0.8rem;\n  }\n  .day-column,\n  .date-column,\n  .time-column {\n    width: 80px;\n    min-width: 80px;\n  }\n  .location-column {\n    width: 120px;\n    min-width: 120px;\n  }\n  .employee-column {\n    width: 130px;\n    min-width: 130px;\n  }\n  .subject-title {\n    font-size: 0.9rem;\n  }\n  .type-badge,\n  .status-badge {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-table-view {\n    padding: 12px;\n    border-radius: 16px;\n  }\n  .table-header {\n    margin-bottom: 16px;\n    padding-bottom: 12px;\n  }\n  .table-title {\n    font-size: 1.1rem;\n  }\n  .table-wrapper {\n    display: none;\n  }\n  .mobile-cards {\n    display: block;\n  }\n  .mobile-card {\n    background: white;\n    border-radius: 12px;\n    padding: 16px;\n    margin-bottom: 12px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border: 1px solid #e2e8f0;\n  }\n  .mobile-card-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 12px;\n  }\n  .mobile-card-date {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 60px;\n  }\n  .mobile-day {\n    font-weight: 700;\n    color: #4a5568;\n    font-size: 0.8rem;\n    margin-bottom: 2px;\n  }\n  .mobile-date {\n    font-weight: 600;\n    color: #2d3748;\n    font-size: 0.75rem;\n  }\n  .mobile-time {\n    font-weight: 700;\n    color: #2d3748;\n    font-size: 0.8rem;\n    background: #f7fafc;\n    padding: 4px 8px;\n    border-radius: 6px;\n    border: 1px solid #e2e8f0;\n  }\n  .mobile-card-content {\n    flex: 1;\n    margin-left: 12px;\n  }\n  .mobile-subject {\n    font-weight: 700;\n    color: #2d3748;\n    font-size: 0.9rem;\n    line-height: 1.4;\n    margin-bottom: 6px;\n  }\n  .mobile-description {\n    font-size: 0.75rem;\n    color: #718096;\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n  .mobile-badges {\n    display: flex;\n    gap: 6px;\n    flex-wrap: wrap;\n    margin-bottom: 8px;\n  }\n  .mobile-type-badge,\n  .mobile-status-badge {\n    display: inline-block;\n    padding: 3px 8px;\n    border-radius: 12px;\n    color: white;\n    font-size: 0.65rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n  }\n  .mobile-card-footer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 8px;\n    padding-top: 8px;\n    border-top: 1px solid #f1f5f9;\n  }\n  .mobile-location {\n    font-weight: 600;\n    color: #4a5568;\n    font-size: 0.75rem;\n  }\n  .mobile-employee {\n    font-weight: 600;\n    color: #2d3748;\n    font-size: 0.75rem;\n  }\n  .mobile-empty-state {\n    text-align: center;\n    padding: 40px 20px;\n    color: #718096;\n  }\n  .mobile-empty-state svg {\n    color: #cbd5e0;\n    margin-bottom: 16px;\n  }\n  .mobile-empty-state h4 {\n    font-size: 1rem;\n    font-weight: 600;\n    color: #4a5568;\n    margin-bottom: 8px;\n  }\n  .mobile-empty-state p {\n    font-size: 0.85rem;\n    color: #718096;\n    margin: 0;\n  }\n}\n@media (max-width: 576px) {\n  .calendar-table-view {\n    padding: 8px;\n    border-radius: 12px;\n  }\n  .table-title {\n    font-size: 1rem;\n    gap: 8px;\n  }\n  .table-title svg {\n    width: 16px;\n    height: 16px;\n  }\n  .calendar-table th,\n  .calendar-table td {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .day-column,\n  .date-column,\n  .time-column {\n    width: 60px;\n    min-width: 60px;\n  }\n  .location-column {\n    width: 80px;\n    min-width: 80px;\n  }\n  .employee-column {\n    width: 90px;\n    min-width: 90px;\n  }\n  .subject-title {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n  }\n  .description {\n    font-size: 0.65rem;\n    -webkit-line-clamp: 1;\n  }\n  .time-value {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n  .type-badge,\n  .status-badge {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .empty-state {\n    padding: 40px 16px;\n  }\n  .empty-state svg {\n    width: 48px;\n    height: 48px;\n  }\n  .empty-state h4 {\n    font-size: 1rem;\n  }\n  .empty-state p {\n    font-size: 0.8rem;\n  }\n}\n.calendar-table-view.rtl .table-title {\n  flex-direction: row;\n}\n.calendar-table-view.rtl .day-content,\n.calendar-table-view.rtl .date-content,\n.calendar-table-view.rtl .time-content {\n  align-items: center;\n}\n.calendar-table-view.rtl .subject-content,\n.calendar-table-view.rtl .location-content,\n.calendar-table-view.rtl .employee-content {\n  align-items: center;\n  text-align: right;\n}\n.calendar-table-view.rtl .type-badge,\n.calendar-table-view.rtl .status-badge {\n  align-items: center;\n}\n/*# sourceMappingURL=calendar-table-view.component-LFAACKU5.css.map */\n"] }]
  }], () => [{ type: TranslationService }, { type: LangService }], { events: [{
    type: Input
  }], simpleEvents: [{
    type: Input
  }], reminders: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarTableViewComponent, { className: "CalendarTableViewComponent", filePath: "src/app/components/calendar/calendar-table-view/calendar-table-view.component.ts", lineNumber: 16 });
})();

export {
  EventType,
  EventStatus,
  CalendarService,
  CalendarTableViewComponent
};
//# sourceMappingURL=chunk-QW3CMQIF.js.map
