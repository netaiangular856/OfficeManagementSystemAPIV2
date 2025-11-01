import {
  CalendarService,
  CalendarTableViewComponent,
  EventStatus,
  EventType
} from "./chunk-NM43KBPT.js";
import {
  FormsModule
} from "./chunk-NCA4XVJW.js";
import "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  RouterModule,
  TranslationService,
  setClassMetadata,
  signal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YBWKTZKF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/components/calendar/system-calendar/system-calendar.component.ts
var _c0 = () => ["month", "week", "day"];
var _c1 = () => [];
function SystemCalendarComponent_div_25_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_25_button_1_Template_button_click_0_listener() {
      const mode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onViewModeChange(mode_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.viewMode() === mode_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar." + mode_r2), " ");
  }
}
function SystemCalendarComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, SystemCalendarComponent_div_25_button_1_Template, 2, 3, "button", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function SystemCalendarComponent_div_45_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r4, " ");
  }
}
function SystemCalendarComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, SystemCalendarComponent_div_45_div_1_div_1_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function SystemCalendarComponent_div_45_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h2", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDayName(ctx_r2.currentDate()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, ctx_r2.currentDate(), "fullDate"));
  }
}
function SystemCalendarComponent_div_45_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(date_r6.getDate());
  }
}
function SystemCalendarComponent_div_45_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDayName(date_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(date_r6.getDate());
  }
}
function SystemCalendarComponent_div_45_div_4_div_3_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "div", 67);
    \u0275\u0275elementStart(2, "div", 68)(3, "div", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 70);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 71);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r7.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(7, 6, event_r7.startDate, "shortTime"), " - ", \u0275\u0275pipeBind2(8, 9, event_r7.endDate, "shortTime"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.type);
  }
}
function SystemCalendarComponent_div_45_div_4_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "h3", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64);
    \u0275\u0275template(4, SystemCalendarComponent_div_45_div_4_div_3_div_1_div_4_Template, 11, 12, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.events"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(date_r6));
  }
}
function SystemCalendarComponent_div_45_div_4_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "p");
    \u0275\u0275text(2, "No events for this day");
    \u0275\u0275elementEnd()();
  }
}
function SystemCalendarComponent_div_45_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, SystemCalendarComponent_div_45_div_4_div_3_div_1_Template, 5, 2, "div", 60)(2, SystemCalendarComponent_div_45_div_4_div_3_div_2_Template, 3, 0, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length === 0);
  }
}
function SystemCalendarComponent_div_45_div_4_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275text(2, " \u25CF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    \u0275\u0275styleProp("color", event_r8.color);
    \u0275\u0275property("title", event_r8.title + " - " + \u0275\u0275pipeBind2(1, 3, event_r8.startDate, "shortTime"));
  }
}
function SystemCalendarComponent_div_45_div_4_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", "+" + (ctx_r2.getEventsForDate(date_r6).length - 5) + " more events");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getEventsForDate(date_r6).length - 5, " ");
  }
}
function SystemCalendarComponent_div_45_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275template(1, SystemCalendarComponent_div_45_div_4_div_4_div_1_Template, 3, 6, "div", 74)(2, SystemCalendarComponent_div_45_div_4_div_4_div_2_Template, 2, 2, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(date_r6).slice(0, 5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length > 5);
  }
}
function SystemCalendarComponent_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_45_div_4_Template_div_click_0_listener() {
      const date_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDateClick(date_r6));
    });
    \u0275\u0275template(1, SystemCalendarComponent_div_45_div_4_div_1_Template, 2, 1, "div", 53)(2, SystemCalendarComponent_div_45_div_4_div_2_Template, 5, 2, "div", 54)(3, SystemCalendarComponent_div_45_div_4_div_3_Template, 3, 2, "div", 55)(4, SystemCalendarComponent_div_45_div_4_div_4_Template, 3, 2, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("day-view-day", ctx_r2.viewMode() === "day")("today", ctx_r2.isToday(date_r6))("selected", ctx_r2.isSelectedDate(date_r6))("other-month", !ctx_r2.isCurrentMonth(date_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
  }
}
function SystemCalendarComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, SystemCalendarComponent_div_45_div_1_Template, 2, 1, "div", 42)(2, SystemCalendarComponent_div_45_div_2_Template, 6, 5, "div", 43);
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275template(4, SystemCalendarComponent_div_45_div_4_Template, 5, 12, "div", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("day-view", ctx_r2.viewMode() === "day")("rtl", ctx_r2.isRTL());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275classProp("day-view-days", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.calendarDays);
  }
}
function SystemCalendarComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "app-calendar-table-view", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("events", ctx_r2.systemEvents())("simpleEvents", ctx_r2.simpleEvents())("reminders", \u0275\u0275pureFunction0(3, _c1));
  }
}
function SystemCalendarComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "div", 81);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.loading"));
  }
}
function SystemCalendarComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 84);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retryLoadEvents());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.retry"), " ");
  }
}
function SystemCalendarComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_found"));
  }
}
function SystemCalendarComponent_div_50_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r11.description);
  }
}
function SystemCalendarComponent_div_50_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 95)(2, "h4", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SystemCalendarComponent_div_50_div_12_p_4_Template, 2, 1, "p", 96);
    \u0275\u0275elementStart(5, "div", 97)(6, "span", 70);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 71);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 98);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r11.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r11.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 10, event_r11.startDate, "short"), " - ", \u0275\u0275pipeBind2(9, 13, event_r11.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r11.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r11.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r11.status), " ");
  }
}
function SystemCalendarComponent_div_50_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function SystemCalendarComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_50_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_50_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 89)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 90);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_50_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 91);
    \u0275\u0275element(8, "line", 92)(9, "line", 93);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 94)(11, "div", 64);
    \u0275\u0275template(12, SystemCalendarComponent_div_50_div_12_Template, 14, 16, "div", 65)(13, SystemCalendarComponent_div_50_div_13_Template, 3, 1, "div", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, ctx_r2.selectedDate(), "fullDate"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(ctx_r2.selectedDate()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(ctx_r2.selectedDate()).length === 0);
  }
}
function SystemCalendarComponent_div_51_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.no_events_found"), " ");
  }
}
function SystemCalendarComponent_div_51_div_6_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.location);
  }
}
function SystemCalendarComponent_div_51_div_6_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.assignedEmployeeName);
  }
}
function SystemCalendarComponent_div_51_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "h3", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 97)(8, "div", 107);
    \u0275\u0275element(9, "i", 108);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 107);
    \u0275\u0275element(13, "i", 109);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, SystemCalendarComponent_div_51_div_6_div_2_div_16_Template, 4, 1, "div", 110)(17, SystemCalendarComponent_div_51_div_6_div_2_div_17_Template, 4, 1, "div", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.subject);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getEventTypeColor(ctx_r2.getEventTypeFromName(event_r13.eventTypeName)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r13.eventTypeName, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", event_r13.dayName, " - ", event_r13.dateFormatted);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r13.timeFormatted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.assignedEmployeeName);
  }
}
function SystemCalendarComponent_div_51_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SystemCalendarComponent_div_51_div_6_div_1_Template, 2, 1, "div", 61)(2, SystemCalendarComponent_div_51_div_6_div_2_Template, 18, 9, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.simpleEvents().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.simpleEvents());
  }
}
function SystemCalendarComponent_div_51_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.no_events_found"), " ");
  }
}
function SystemCalendarComponent_div_51_div_7_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r14.description, " ");
  }
}
function SystemCalendarComponent_div_51_div_7_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i", 111);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r14.location);
  }
}
function SystemCalendarComponent_div_51_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "h3", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 68);
    \u0275\u0275template(7, SystemCalendarComponent_div_51_div_7_div_2_p_7_Template, 2, 1, "p", 96);
    \u0275\u0275elementStart(8, "div", 97)(9, "div", 107);
    \u0275\u0275element(10, "i", 109);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, SystemCalendarComponent_div_51_div_7_div_2_div_13_Template, 4, 1, "div", 110);
    \u0275\u0275elementStart(14, "div", 107);
    \u0275\u0275element(15, "i", 113);
    \u0275\u0275elementStart(16, "span", 114);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 107);
    \u0275\u0275element(19, "i", 115);
    \u0275\u0275elementStart(20, "span", 116);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r14.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r14.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r14.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r14.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.formatEventDateTime(event_r14.startDate), " - ", ctx_r2.formatEventDateTime(event_r14.endDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r14.location);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r14.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r14.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r2.getPriorityColor(event_r14.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPriorityLabel(event_r14.priority), " ");
  }
}
function SystemCalendarComponent_div_51_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, SystemCalendarComponent_div_51_div_7_div_1_Template, 2, 1, "div", 61)(2, SystemCalendarComponent_div_51_div_7_div_2_Template, 22, 14, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.systemEvents().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.systemEvents());
  }
}
function SystemCalendarComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_51_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllSystemEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 88);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_51_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 89)(3, "h2", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 94);
    \u0275\u0275template(6, SystemCalendarComponent_div_51_div_6_Template, 3, 2, "div", 102)(7, SystemCalendarComponent_div_51_div_7_Template, 3, 2, "div", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl", ctx_r2.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.all_system_events"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.displayMode() === "table");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.displayMode() === "calendar");
  }
}
var SystemCalendarComponent = class _SystemCalendarComponent {
  calendarService;
  translationService;
  langService;
  // Signals for reactive state management
  systemEvents = signal([], ...ngDevMode ? [{ debugName: "systemEvents" }] : []);
  simpleEvents = signal([], ...ngDevMode ? [{ debugName: "simpleEvents" }] : []);
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
  displayMode = signal("calendar", ...ngDevMode ? [{ debugName: "displayMode" }] : []);
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
    this.loadSystemEvents();
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
  loadSystemEvents() {
    this.loading.set(true);
    this.error.set(null);
    const loadRegularEvents = this.calendarService.getSystemEvents(this.filters().type, this.filters().status);
    const loadSimpleEvents = this.calendarService.getSystemEventsSimple();
    const regularEventsSub = loadRegularEvents.subscribe({
      next: (response) => {
        if (response.success) {
          const eventsWithColors = response.data.map((event) => __spreadProps(__spreadValues({}, event), {
            color: this.getEventTypeColor(event.type)
          }));
          this.systemEvents.set(eventsWithColors);
          this.updateFilteredEvents();
        }
      },
      error: (error) => {
        console.error("Error loading system events:", error);
        this.error.set("Failed to load system events");
      }
    });
    const simpleEventsSub = loadSimpleEvents.subscribe({
      next: (response) => {
        if (response.success) {
          this.simpleEvents.set(response.data.events);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading simple system events:", error);
        this.loading.set(false);
      }
    });
    this.subscriptions.push(regularEventsSub, simpleEventsSub);
  }
  updateFilteredEvents() {
    let filtered = this.systemEvents();
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
    this.loadSystemEvents();
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
    this.loadSystemEvents();
  }
  onViewModeChange(mode) {
    this.viewMode.set(mode);
    this.generateCalendarDays();
  }
  onDisplayModeChange(mode) {
    this.displayMode.set(mode);
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
  formatDateForComparison(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  getEventsForDate(date) {
    const dateStr = this.formatDateForComparison(date);
    return this.filteredEvents().filter((event) => {
      const eventDate = this.formatDateForComparison(new Date(event.startDate));
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
  getDayName(date) {
    if (this.isRTL()) {
      const dayNames = ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"];
      return dayNames[date.getDay()];
    } else {
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return dayNames[date.getDay()];
    }
  }
  getTodayDate() {
    const today = /* @__PURE__ */ new Date();
    return today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
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
  getPriorityLabel(priority) {
    switch (priority) {
      case 1:
        return this.translate("calendar.priority.high");
      case 2:
        return this.translate("calendar.priority.medium");
      case 3:
        return this.translate("calendar.priority.low");
      default:
        return this.translate("calendar.priority.normal");
    }
  }
  formatEventDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getEventTypeColor(type) {
    return this.calendarService.getEventTypeColor(type);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getEventTypeFromName(typeName) {
    const typeMap = {
      "\u0627\u062C\u062A\u0645\u0627\u0639": EventType.Meeting,
      "\u0645\u0647\u0645\u0629": EventType.Task,
      "\u0632\u064A\u0627\u0631\u0629": EventType.Visit,
      "\u0633\u0641\u0631": EventType.Travel,
      "meeting": EventType.Meeting,
      "task": EventType.Task,
      "visit": EventType.Visit,
      "travel": EventType.Travel,
      "Meeting": EventType.Meeting,
      "Task": EventType.Task,
      "Visit": EventType.Visit,
      "Travel": EventType.Travel
    };
    return typeMap[typeName] || EventType.Meeting;
  }
  // Enum getters for template
  get EventType() {
    return EventType;
  }
  get EventStatus() {
    return EventStatus;
  }
  static \u0275fac = function SystemCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemCalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemCalendarComponent, selectors: [["app-system-calendar"]], standalone: false, decls: 52, vars: 22, consts: [[1, "calendar-container", "rounded-3"], [1, "calendar-header"], [1, "header-left"], [1, "calendar-title"], [1, "calendar-subtitle"], [1, "today-date"], [1, "today-label"], [1, "today-value"], [1, "header-right"], [1, "display-mode-toggle"], [1, "display-mode-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["d", "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"], ["class", "view-mode-toggle", 4, "ngIf"], [1, "calendar-navigation"], [1, "nav-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-right-icon", "lucide-arrow-right"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7"], [1, "today-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-left-icon", "lucide-arrow-left"], ["d", "m12 19-7-7 7-7"], ["d", "M19 12H5"], [1, "events-summary"], [1, "summary-card"], [1, "events-count"], [1, "view-all-btn", 3, "click"], ["class", "calendar-grid", 3, "day-view", "rtl", 4, "ngIf"], ["class", "system-calendar-table-view", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "no-events-state", 4, "ngIf"], ["class", "day-events-modal", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "view-mode-toggle"], ["class", "view-mode-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "view-mode-btn", 3, "click"], [1, "calendar-grid"], ["class", "week-days", 4, "ngIf"], ["class", "day-view-header", 4, "ngIf"], [1, "calendar-days"], ["class", "calendar-day", 3, "day-view-day", "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "week-day"], [1, "day-view-header"], [1, "day-name"], [1, "day-date"], [1, "calendar-day", 3, "click"], ["class", "day-number", 4, "ngIf"], ["class", "day-header-small", 4, "ngIf"], ["class", "day-view-content", 4, "ngIf"], ["class", "day-events", 4, "ngIf"], [1, "day-number"], [1, "day-header-small"], [1, "day-view-content"], ["class", "day-events-section", 4, "ngIf"], ["class", "no-events", 4, "ngIf"], [1, "day-events-section"], [1, "section-title"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], [1, "event-item"], [1, "event-dot"], [1, "event-details"], [1, "event-title"], [1, "event-time"], [1, "event-type"], [1, "no-events"], [1, "day-events"], ["class", "event-bullet", 3, "color", "title", 4, "ngFor", "ngForOf"], ["class", "more-events-indicator", 3, "title", 4, "ngIf"], [1, "event-bullet", 3, "title"], [1, "more-events-indicator", 3, "title"], [1, "system-calendar-table-view"], [3, "events", "simpleEvents", "reminders"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"], [1, "retry-btn", 3, "click"], [1, "no-events-state"], [1, "no-events-icon"], [1, "day-events-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-status"], [1, "event-description"], [1, "modal-overlay", 3, "click"], [1, "modal-title"], [4, "ngIf"], ["class", "event-card", 4, "ngFor", "ngForOf"], [1, "event-card"], [1, "event-header"], [1, "event-type-badge"], [1, "meta-item"], [1, "fas", "fa-calendar"], [1, "fas", "fa-clock"], ["class", "meta-item", 4, "ngIf"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-user"], [1, "fas", "fa-flag"], [1, "status-badge"], [1, "fas", "fa-exclamation-circle"], [1, "priority-badge"]], template: function SystemCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_14_listener() {
        return ctx.onDisplayModeChange("calendar");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 11);
      \u0275\u0275element(16, "rect", 12)(17, "line", 13)(18, "line", 14)(19, "line", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "button", 10);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_21_listener() {
        return ctx.onDisplayModeChange("table");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 11);
      \u0275\u0275element(23, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(25, SystemCalendarComponent_div_25_Template, 2, 2, "div", 17);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_27_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 20);
      \u0275\u0275element(29, "path", 21)(30, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "button", 23);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_31_listener() {
        return ctx.goToToday();
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 19);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_33_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(34, "svg", 24);
      \u0275\u0275element(35, "path", 25)(36, "path", 26);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 27)(38, "div", 28)(39, "h3");
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 29);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 30);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_43_listener($event) {
        return ctx.viewAllSystemEvents($event);
      });
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(45, SystemCalendarComponent_div_45_Template, 5, 9, "div", 31)(46, SystemCalendarComponent_div_46_Template, 2, 4, "div", 32)(47, SystemCalendarComponent_div_47_Template, 4, 1, "div", 33)(48, SystemCalendarComponent_div_48_Template, 7, 2, "div", 34)(49, SystemCalendarComponent_div_49_Template, 5, 1, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, SystemCalendarComponent_div_50_Template, 14, 6, "div", 36)(51, SystemCalendarComponent_div_51_Template, 8, 5, "div", 37);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("calendar.system_calendar"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.subtitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("calendar.today"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getTodayDate());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.displayMode() === "calendar");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.calendar_view"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.displayMode() === "table");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.table_view.title"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "calendar");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.today"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.translate("calendar.system_events"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.displayMode() === "table" ? ctx.simpleEvents().length : ctx.systemEvents().length, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.view_all"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "calendar");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.filteredEvents().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllSystemEventsModal());
    }
  }, dependencies: [NgForOf, NgIf, CalendarTableViewComponent, DatePipe], styles: ['\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 25px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.today-date[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border: 1px solid #B68A35;\n  display: inline-block;\n}\n.today-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-right: 8px;\n}\n.today-value[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-weight: 500;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.display-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 4px;\n  border: 1px solid #e9ecef;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.display-mode-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  min-width: 120px;\n  justify-content: center;\n}\n.display-mode-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n  color: #495057;\n  transform: translateY(-1px);\n}\n.display-mode-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF37 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.display-mode-btn.active[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A67C00 0%,\n      #C19A00 100%);\n  transform: translateY(-1px);\n}\n.display-mode-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n}\n.display-mode-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.system-calendar-table-view[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  margin-top: 20px;\n  overflow: hidden;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn[_ngcontent-%COMP%]:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn[_ngcontent-%COMP%], \n.today-btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white !important;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368 !important;\n  transition: all 0.2s ease;\n}\n.nav-btn[_ngcontent-%COMP%]:hover, \n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35 !important;\n  color: white !important;\n}\n.today-btn[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.events-summary[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 25px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #B68A35;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-right: 1px solid #5f5f5f50;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n  border-radius: 10px !important;\n  margin: 2px !important;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  border: 2px solid #B68A35;\n  position: relative;\n}\n.calendar-day.today[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 8px;\n  height: 8px;\n  background: #B68A35;\n  border-radius: 50%;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  border: 2px solid #B68A35;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  min-height: 16px;\n  overflow: hidden;\n}\n.event-bullet[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  min-width: 12px;\n  min-height: 12px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n  flex-shrink: 0;\n}\n.event-bullet[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #666;\n  background: #f0f0f0;\n  padding: 1px 3px;\n  border-radius: 2px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n  min-width: 12px;\n  text-align: center;\n}\n.more-events-indicator[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .week-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #d33b2c;\n}\n.no-events-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  max-width: 1200px;\n  width: 95%;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header[_ngcontent-%COMP%]   .rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: 0.5s ease;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #B68A35;\n  transition: 0.5s ease;\n}\n.event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time[_ngcontent-%COMP%] {\n  color: #5f6368;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.event-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.day-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  max-width: 1200px;\n  width: 95%;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 15px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #B68A35;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  background: #ffffff;\n}\n.event-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B68A35;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (max-width: 1400px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    min-width: 18px !important;\n    min-height: 18px !important;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    min-height: 20px !important;\n    gap: 4px !important;\n  }\n}\n.calendar-grid.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  min-height: 600px;\n}\n.day-view-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 400;\n}\n.calendar-days.day-view-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.calendar-day.day-view-day[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 30px;\n  gap: 30px;\n}\n.day-events-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e9ecef;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.event-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.event-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0 0 5px 0;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #495057;\n  margin: 0;\n  font-weight: 500;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  font-style: italic;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .day-view-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n  padding: 20px !important;\n  gap: 20px !important;\n  flex: 1 !important;\n  overflow-y: auto !important;\n}\n.day-events-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 15px 0 !important;\n  padding-bottom: 8px !important;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 10px !important;\n  max-height: 100% !important;\n  overflow-y: auto !important;\n  padding-right: 10px !important;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 15px !important;\n  background: #f8f9fa !important;\n  border-radius: 8px !important;\n  border: 1px solid #e9ecef !important;\n  transition: all 0.2s ease !important;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef !important;\n  transform: translateY(-1px) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 50% !important;\n  flex-shrink: 0 !important;\n  margin-top: 4px !important;\n}\n.event-details[_ngcontent-%COMP%] {\n  flex: 1 !important;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 6px 0 !important;\n  line-height: 1.3 !important;\n}\n.event-time[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n  color: #6c757d !important;\n  margin: 0 0 4px 0 !important;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  margin: 0 !important;\n  font-weight: 500 !important;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding: 40px 20px !important;\n  color: #6c757d !important;\n  font-style: italic !important;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 1rem !important;\n}\n@media (max-width: 1399px) {\n  .day-view-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .calendar-grid.day-view[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    height: calc(100vh - 200px) !important;\n    min-height: 600px !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-days.day-view-days[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex: 1 !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-day.day-view-day[_ngcontent-%COMP%] {\n    flex: 1 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    background: white !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    overflow: hidden !important;\n    width: 100% !important;\n    max-width: 800px !important;\n    max-height: 600px !important;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    text-align: center !important;\n    padding: 20px !important;\n    background:\n      linear-gradient(\n        135deg,\n        #f8f9fa 0%,\n        #e9ecef 100%) !important;\n    border-radius: 12px 12px 0 0 !important;\n    width: 100% !important;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem !important;\n    font-weight: 700 !important;\n    color: #2c3e50 !important;\n    margin: 0 0 8px 0 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 1px !important;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    width: 40px !important;\n    height: 40px !important;\n    line-height: 40px !important;\n    text-align: center !important;\n    border-radius: 50% !important;\n    background: #B68A35 !important;\n    border: 2px solid #B68A35 !important;\n    font-weight: 600 !important;\n    font-size: 1.2rem !important;\n    color: white !important;\n    margin-bottom: 10px !important;\n  }\n  .calendar-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    padding: 10px !important;\n  }\n  .calendar-content[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n  }\n}\n@media (max-width: 991px) {\n  .calendar-days[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(7, 1fr);\n    width: 100%;\n    gap: 1px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 0.8rem;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 4px;\n    height: 4px;\n    min-width: 3px;\n    min-height: 3px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    min-height: 8px;\n    gap: 1px;\n  }\n  .week-days[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 8px 2px;\n    font-size: 0.8rem;\n    font-weight: 500;\n    line-height: 1.2;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4px 2px;\n    width: 100%;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.8rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .day-date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .event-item[_ngcontent-%COMP%] {\n    padding: 15px;\n    gap: 12px;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 2px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    min-width: 16px;\n    min-height: 16px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    min-height: 18px;\n    gap: 3px;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 6px 3px;\n    width: 100%;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.85rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 12px !important;\n    height: 12px !important;\n    min-width: 10px !important;\n    min-height: 10px !important;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    min-height: 16px;\n    gap: 2px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 5px;\n    padding: 1px 1px;\n    min-width: 8px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 95vh;\n    width: 98%;\n    max-width: none;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 95vh;\n    width: 98%;\n    max-width: none;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .event-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .event-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    white-space: normal;\n    max-width: 100%;\n  }\n  .event-type[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n  .event-status[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n  .event-time[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-filters[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-days[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%] {\n    max-height: 25px;\n    min-height: 6px;\n    gap: 1px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .event-bullet[_ngcontent-%COMP%] {\n    width: 3px;\n    height: 3px;\n    min-width: 2px;\n    min-height: 2px;\n  }\n  .event-meta[_ngcontent-%COMP%]   .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 4px !important;\n    padding: 1px 1px !important;\n    min-width: 6px !important;\n  }\n  .event-meta[_ngcontent-%COMP%]   .week-day[_ngcontent-%COMP%] {\n    padding: 6px 1px;\n    font-size: 0.6rem;\n    font-weight: 500;\n    line-height: 1.1;\n  }\n  .event-meta[_ngcontent-%COMP%]   .week-days[_ngcontent-%COMP%] {\n    padding: 6px 1px;\n  }\n  @media (max-width: 360px) {\n    .calendar-grid[_ngcontent-%COMP%] {\n      overflow-x: auto;\n      min-width: 320px;\n    }\n    .permission-item.assigned[_ngcontent-%COMP%] {\n      justify-content: center !important;\n    }\n    .week-days[_ngcontent-%COMP%], \n   .calendar-days[_ngcontent-%COMP%] {\n      min-width: 320px;\n    }\n    .week-day[_ngcontent-%COMP%], \n   .calendar-day[_ngcontent-%COMP%] {\n      min-width: 45px;\n    }\n    .week-day[_ngcontent-%COMP%] {\n      padding: 4px 0px;\n      font-size: 0.55rem;\n      font-weight: 500;\n      line-height: 1;\n    }\n    .week-days[_ngcontent-%COMP%] {\n      padding: 4px 0px;\n    }\n  }\n}\n/*# sourceMappingURL=system-calendar.component-BLOW2PHF.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-system-calendar", standalone: false, template: `<div class="calendar-container rounded-3">\r
  <!-- Header -->\r
  <div class="calendar-header">\r
    <div class="header-left">\r
      <h1 class="calendar-title">{{ translate('calendar.system_calendar') }}</h1>\r
      <p class="calendar-subtitle">{{ translate('calendar.subtitle') }}</p>\r
      <div class="today-date">\r
        <span class="today-label">{{ translate('calendar.today') }}:</span>\r
        <span class="today-value">{{ getTodayDate() }}</span>\r
      </div>\r
    </div>\r
    \r
    <div class="header-right">\r
      <!-- Display Mode Toggle -->\r
      <div class="display-mode-toggle">\r
        <button \r
          class="display-mode-btn"\r
          [class.active]="displayMode() === 'calendar'"\r
          (click)="onDisplayModeChange('calendar')">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
          </svg>\r
          {{ translate('calendar.calendar_view') }}\r
        </button>\r
        <button \r
          class="display-mode-btn"\r
          [class.active]="displayMode() === 'table'"\r
          (click)="onDisplayModeChange('table')">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>\r
          </svg>\r
          {{ translate('calendar.table_view.title') }}\r
        </button>\r
      </div>\r
\r
      <!-- View Mode Toggle (only show when in calendar mode) -->\r
      <div class="view-mode-toggle" *ngIf="displayMode() === 'calendar'">\r
        <button \r
          *ngFor="let mode of ['month', 'week', 'day']"\r
          class="view-mode-btn"\r
          [class.active]="viewMode() === mode"\r
          (click)="onViewModeChange($any(mode))">\r
          {{ translate('calendar.' + mode) }}\r
        </button>\r
      </div>\r
      \r
      <!-- Navigation -->\r
      <div class="calendar-navigation">\r
        <button class="nav-btn" (click)="previousMonth()">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>\r
        </button>\r
        <button class="today-btn" (click)="goToToday()">\r
            {{ translate('calendar.today') }}\r
        </button>\r
        <button class="nav-btn" (click)="nextMonth()">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
  <!-- System Events Summary -->\r
  <div class="events-summary">\r
    <div class="summary-card">\r
      <h3>{{ translate('calendar.system_events') }}</h3>\r
      <div class="events-count">\r
        {{ displayMode() === 'table' ? simpleEvents().length : systemEvents().length }}\r
      </div>\r
      <button \r
        class="view-all-btn"\r
        (click)="viewAllSystemEvents($event)">\r
        {{ translate('calendar.view_all') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Calendar Grid (only show when in calendar mode) -->\r
  <div *ngIf="displayMode() === 'calendar'" class="calendar-grid" [class.day-view]="viewMode() === 'day'" [class.rtl]="isRTL()">\r
    <!-- Week Days Header - Hidden in day view -->\r
    <div class="week-days" *ngIf="viewMode() !== 'day'">\r
      <div \r
        *ngFor="let day of weekDays" \r
        class="week-day">\r
        {{ day }}\r
      </div>\r
    </div>\r
\r
    <!-- Day View Header - Only shown in day view -->\r
    <div class="day-view-header" *ngIf="viewMode() === 'day'">\r
      <h2 class="day-name">{{ getDayName(currentDate()) }}</h2>\r
      <h3 class="day-date">{{ currentDate() | date:'fullDate' }}</h3>\r
    </div>\r
    \r
    <!-- Calendar Days -->\r
    <div class="calendar-days" [class.day-view-days]="viewMode() === 'day'">\r
      <div \r
        *ngFor="let date of calendarDays; let i = index"\r
        class="calendar-day"\r
        [class.day-view-day]="viewMode() === 'day'"\r
        [class.today]="isToday(date)"\r
        [class.selected]="isSelectedDate(date)"\r
        [class.other-month]="!isCurrentMonth(date)"\r
        (click)="onDateClick(date)">\r
        \r
        <!-- Regular month/week view content -->\r
        <div *ngIf="viewMode() !== 'day'" class="day-number">{{ date.getDate() }}</div>\r
        \r
\r
        <!-- Regular day header for small/medium screens in day view -->\r
        <div *ngIf="viewMode() === 'day'" class="day-header-small">\r
          <div class="day-name">{{ getDayName(date) }}</div>\r
          <div class="day-number">{{ date.getDate() }}</div>\r
        </div>\r
\r
        <!-- Day content for small/medium screens in day view -->\r
        <div *ngIf="viewMode() === 'day'" class="day-view-content">\r
          <!-- Events Section -->\r
          <div class="day-events-section" *ngIf="getEventsForDate(date).length > 0">\r
            <h3 class="section-title">{{translate('calendar.events')}}</h3>\r
            <div class="events-list">\r
              <div \r
                class="event-item"\r
                *ngFor="let event of getEventsForDate(date)"\r
              >\r
                <div \r
                  class="event-dot"\r
                  [style.background-color]="event.color"\r
                ></div>\r
                <div class="event-details">\r
                  <div class="event-title">{{ event.title }}</div>\r
                  <div class="event-time">{{ event.startDate | date:'shortTime' }} - {{ event.endDate | date:'shortTime' }}</div>\r
                  <div class="event-type">{{ event.type }}</div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- No events message -->\r
          <div class="no-events" *ngIf="getEventsForDate(date).length === 0">\r
            <p>No events for this day</p>\r
          </div>\r
        </div>\r
        \r
        <!-- System Events for this day (month/week view only) -->\r
        <div class="day-events" *ngIf="viewMode() !== 'day'">\r
          <div \r
            *ngFor="let event of getEventsForDate(date).slice(0, 5); let eventIndex = index"\r
            class="event-bullet"\r
            [style.color]="event.color"\r
            [title]="event.title + ' - ' + (event.startDate | date:'shortTime')">\r
            \u25CF\r
          </div>\r
          <!-- Show "more" indicator if there are more than 5 events -->\r
          <div \r
            *ngIf="getEventsForDate(date).length > 5" \r
            class="more-events-indicator"\r
            [title]="'+' + (getEventsForDate(date).length - 5) + ' more events'">\r
            +{{ getEventsForDate(date).length - 5 }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table View (only show when in table mode) -->\r
  <div *ngIf="displayMode() === 'table'" class="system-calendar-table-view">\r
    <app-calendar-table-view \r
      [events]="systemEvents()"\r
      [simpleEvents]="simpleEvents()"\r
      [reminders]="[]">\r
    </app-calendar-table-view>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-state">\r
    <div class="spinner"></div>\r
    <p>{{ translate('calendar.loading') }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error()" class="error-state">\r
    <div class="error-icon">\u26A0\uFE0F</div>\r
    <p>{{ error() }}</p>\r
    <button class="retry-btn" (click)="retryLoadEvents()">\r
      {{ translate('calendar.retry') }}\r
    </button>\r
  </div>\r
\r
  <!-- No Events State -->\r
  <div *ngIf="!loading() && !error() && filteredEvents().length === 0" class="no-events-state">\r
    <div class="no-events-icon">\u{1F4C5}</div>\r
    <p>{{ translate('calendar.no_events_found') }}</p>\r
  </div>\r
</div>\r
\r
<!-- Day Events Modal (when a date is selected) -->\r
<div class="day-events-modal" *ngIf="selectedDate()" (click)="selectedDate.set(null)">\r
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
<!-- All System Events Modal -->\r
<div \r
  *ngIf="showAllSystemEventsModal()" \r
  class="modal-overlay"\r
  (click)="closeAllSystemEventsModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header" [class.rtl]="isRTL()">\r
      <h2 class="modal-title">{{ translate('calendar.all_system_events') }}</h2>\r
    </div>\r
    \r
    <div class="modal-body">\r
      <!-- Show simple events when in table mode -->\r
      <div *ngIf="displayMode() === 'table'">\r
        <div *ngIf="simpleEvents().length === 0" class="no-events">\r
          {{ translate('calendar.no_events_found') }}\r
        </div>\r
        \r
        <div *ngFor="let event of simpleEvents()" class="event-card">\r
          <div class="event-header">\r
            <h3 class="event-title">{{ event.subject }}</h3>\r
            <span \r
              class="event-type-badge"\r
              [style.background-color]="getEventTypeColor(getEventTypeFromName(event.eventTypeName))">\r
              {{ event.eventTypeName }}\r
            </span>\r
          </div>\r
          \r
          <div class="event-details">\r
            <div class="event-meta">\r
              <div class="meta-item">\r
                <i class="fas fa-calendar"></i>\r
                <span>{{ event.dayName }} - {{ event.dateFormatted }}</span>\r
              </div>\r
              \r
              <div class="meta-item">\r
                <i class="fas fa-clock"></i>\r
                <span>{{ event.timeFormatted }}</span>\r
              </div>\r
              \r
              <div *ngIf="event.location" class="meta-item">\r
                <i class="fas fa-map-marker-alt"></i>\r
                <span>{{ event.location }}</span>\r
              </div>\r
              \r
              <div *ngIf="event.assignedEmployeeName" class="meta-item">\r
                <i class="fas fa-user"></i>\r
                <span>{{ event.assignedEmployeeName }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Show regular events when in calendar mode -->\r
      <div *ngIf="displayMode() === 'calendar'">\r
        <div *ngIf="systemEvents().length === 0" class="no-events">\r
          {{ translate('calendar.no_events_found') }}\r
        </div>\r
        \r
        <div *ngFor="let event of systemEvents()" class="event-card">\r
          <div class="event-header">\r
            <h3 class="event-title">{{ event.title }}</h3>\r
            <span \r
              class="event-type-badge"\r
              [style.background-color]="event.color">\r
              {{ getEventTypeLabel(event.type) }}\r
            </span>\r
          </div>\r
          \r
          <div class="event-details">\r
            <p *ngIf="event.description" class="event-description">\r
              {{ event.description }}\r
            </p>\r
            \r
            <div class="event-meta">\r
              <div class="meta-item">\r
                <i class="fas fa-clock"></i>\r
                <span>{{ formatEventDateTime(event.startDate) }} - {{ formatEventDateTime(event.endDate) }}</span>\r
              </div>\r
              \r
              <div *ngIf="event.location" class="meta-item">\r
                <i class="fas fa-map-marker-alt"></i>\r
                <span>{{ event.location }}</span>\r
              </div>\r
              \r
              <div class="meta-item">\r
                <i class="fas fa-flag"></i>\r
                <span class="status-badge" [style.color]="getEventStatusColor(event.status)">\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
              </div>\r
              \r
              <div class="meta-item">\r
                <i class="fas fa-exclamation-circle"></i>\r
                <span class="priority-badge" [style.color]="getPriorityColor(event.priority)">\r
                  {{ getPriorityLabel(event.priority) }}\r
                </span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/calendar/system-calendar/system-calendar.component.css */\n.calendar-container {\n  padding: 20px;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 25px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.header-left h1 {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left p {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.today-date {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 8px;\n  border: 1px solid #B68A35;\n  display: inline-block;\n}\n.today-label {\n  font-weight: 600;\n  color: #2c3e50;\n  margin-right: 8px;\n}\n.today-value {\n  color: #5f6368;\n  font-weight: 500;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.display-mode-toggle {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 4px;\n  border: 1px solid #e9ecef;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.display-mode-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6c757d;\n  min-width: 120px;\n  justify-content: center;\n}\n.display-mode-btn:hover {\n  background: rgba(255, 255, 255, 0.8);\n  color: #495057;\n  transform: translateY(-1px);\n}\n.display-mode-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF37 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.display-mode-btn.active:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A67C00 0%,\n      #C19A00 100%);\n  transform: translateY(-1px);\n}\n.display-mode-btn svg {\n  width: 16px;\n  height: 16px;\n  transition: transform 0.2s ease;\n}\n.display-mode-btn:hover svg {\n  transform: scale(1.1);\n}\n.system-calendar-table-view {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  margin-top: 20px;\n  overflow: hidden;\n}\n.view-mode-toggle {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active {\n  background: #B68A35;\n  color: white;\n}\n.calendar-navigation {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn,\n.today-btn {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white !important;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368 !important;\n  transition: all 0.2s ease;\n}\n.nav-btn:hover,\n.today-btn:hover {\n  background: #B68A35 !important;\n  color: white !important;\n}\n.today-btn {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.today-btn:hover {\n  background: #B68A35;\n}\n.events-summary {\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: white;\n  padding: 25px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.summary-card h3 {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #B68A35;\n}\n.view-all-btn {\n  padding: 10px 20px;\n  background: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn:hover {\n  background: #B68A35;\n}\n.calendar-grid {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day:last-child {\n  border-right: none;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day {\n  padding: 10px;\n  border-right: 1px solid #5f5f5f50;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n  border-radius: 10px !important;\n  margin: 2px !important;\n}\n.calendar-day:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today {\n  background:\n    linear-gradient(\n      135deg,\n      #e3f2fd 0%,\n      #bbdefb 100%);\n  border: 2px solid #B68A35;\n  position: relative;\n}\n.calendar-day.today::before {\n  content: "";\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 8px;\n  height: 8px;\n  background: #B68A35;\n  border-radius: 50%;\n}\n.calendar-day.selected {\n  background: #e8f0fe;\n  border: 2px solid #B68A35;\n}\n.calendar-day.other-month {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month .day-number {\n  color: #bdbdbd;\n}\n.day-number {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  min-height: 16px;\n  overflow: hidden;\n}\n.event-bullet {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  min-width: 12px;\n  min-height: 12px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n  flex-shrink: 0;\n}\n.event-bullet:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator {\n  font-size: 12px !important;\n  color: #666;\n  background: #f0f0f0;\n  padding: 1px 3px;\n  border-radius: 2px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n  min-width: 12px;\n  text-align: center;\n}\n.more-events-indicator:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl .week-day {\n  text-align: right;\n}\n.calendar-grid.rtl .calendar-day {\n  text-align: right;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state p {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn:hover {\n  background: #d33b2c;\n}\n.no-events-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal .modal-content {\n  background: white;\n  border-radius: 20px;\n  max-width: 1200px;\n  width: 95%;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.day-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header .rtl {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr] .modal-header {\n  flex-direction: row !important;\n}\n.day-events-modal .modal-header h3 {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal .close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal .close-btn:hover {\n  background: #e0e0e0;\n}\n.day-events-modal .modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: 0.5s ease;\n}\n.day-events-modal .event-item:hover {\n  border: 1px solid #B68A35;\n  transition: 0.5s ease;\n}\n.event-content {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal .event-title {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal .event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal .event-meta span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time {\n  color: #5f6368;\n}\n.event-type {\n  font-weight: 600;\n}\n.event-status {\n  font-weight: 600;\n}\n.day-events-modal .no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.modal-content {\n  background: white;\n  border-radius: 20px;\n  max-width: 1200px;\n  width: 95%;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn:hover {\n  background: #e0e0e0;\n}\n.modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 15px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.event-card:hover {\n  border: 1px solid #B68A35;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  background: #ffffff;\n}\n.event-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card .event-title {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item i {\n  color: #B68A35;\n}\n.status-badge {\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.priority-badge {\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (max-width: 1400px) {\n  .event-bullet {\n    width: 20px;\n    height: 20px;\n    min-width: 18px !important;\n    min-height: 18px !important;\n  }\n  .day-events {\n    min-height: 20px !important;\n    gap: 4px !important;\n  }\n}\n.calendar-grid.day-view {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  min-height: 600px;\n}\n.day-view-header {\n  text-align: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.day-name {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 400;\n}\n.calendar-days.day-view-days {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.calendar-day.day-view-day {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.day-view-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 30px;\n  gap: 30px;\n}\n.day-events-section {\n  flex: 1;\n  min-height: 0;\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e9ecef;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.events-list::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.event-dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.event-details {\n  flex: 1;\n}\n.event-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.event-time {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0 0 5px 0;\n}\n.event-type {\n  font-size: 0.85rem;\n  color: #495057;\n  margin: 0;\n  font-weight: 500;\n}\n.no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  font-style: italic;\n}\n.no-events p {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.calendar-grid.rtl.day-view .day-view-header {\n  text-align: center;\n}\n.calendar-grid.rtl.day-view .event-item {\n  flex-direction: row-reverse;\n}\n.calendar-grid.rtl.day-view .event-details {\n  text-align: right;\n}\n.day-view-content {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n  padding: 20px !important;\n  gap: 20px !important;\n  flex: 1 !important;\n  overflow-y: auto !important;\n}\n.day-events-section {\n  flex: 1;\n  min-height: 0;\n}\n.section-title {\n  font-size: 1.2rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 15px 0 !important;\n  padding-bottom: 8px !important;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.events-list {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 10px !important;\n  max-height: 100% !important;\n  overflow-y: auto !important;\n  padding-right: 10px !important;\n}\n.event-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 15px !important;\n  background: #f8f9fa !important;\n  border-radius: 8px !important;\n  border: 1px solid #e9ecef !important;\n  transition: all 0.2s ease !important;\n}\n.event-item:hover {\n  background: #e9ecef !important;\n  transform: translateY(-1px) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n}\n.event-dot {\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 50% !important;\n  flex-shrink: 0 !important;\n  margin-top: 4px !important;\n}\n.event-details {\n  flex: 1 !important;\n}\n.event-title {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 6px 0 !important;\n  line-height: 1.3 !important;\n}\n.event-time {\n  font-size: 0.85rem !important;\n  color: #6c757d !important;\n  margin: 0 0 4px 0 !important;\n}\n.event-type {\n  font-size: 0.8rem !important;\n  margin: 0 !important;\n  font-weight: 500 !important;\n}\n.no-events {\n  text-align: center !important;\n  padding: 40px 20px !important;\n  color: #6c757d !important;\n  font-style: italic !important;\n}\n.no-events p {\n  margin: 0 !important;\n  font-size: 1rem !important;\n}\n@media (max-width: 1399px) {\n  .day-view-header {\n    display: none !important;\n  }\n  .calendar-grid.day-view {\n    display: flex !important;\n    flex-direction: column !important;\n    height: calc(100vh - 200px) !important;\n    min-height: 600px !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-days.day-view-days {\n    display: flex !important;\n    flex: 1 !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-day.day-view-day {\n    flex: 1 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    background: white !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    overflow: hidden !important;\n    width: 100% !important;\n    max-width: 800px !important;\n    max-height: 600px !important;\n  }\n  .day-header-small {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    text-align: center !important;\n    padding: 20px !important;\n    background:\n      linear-gradient(\n        135deg,\n        #f8f9fa 0%,\n        #e9ecef 100%) !important;\n    border-radius: 12px 12px 0 0 !important;\n    width: 100% !important;\n  }\n  .day-header-small .day-name {\n    font-size: 1.5rem !important;\n    font-weight: 700 !important;\n    color: #2c3e50 !important;\n    margin: 0 0 8px 0 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 1px !important;\n  }\n  .day-header-small .day-number {\n    display: inline-block !important;\n    width: 40px !important;\n    height: 40px !important;\n    line-height: 40px !important;\n    text-align: center !important;\n    border-radius: 50% !important;\n    background: #B68A35 !important;\n    border: 2px solid #B68A35 !important;\n    font-weight: 600 !important;\n    font-size: 1.2rem !important;\n    color: white !important;\n    margin-bottom: 10px !important;\n  }\n  .calendar-container {\n    width: 100% !important;\n    max-width: 100% !important;\n    padding: 10px !important;\n  }\n  .calendar-content {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid-container {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-days {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-day {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n  }\n}\n@media (max-width: 991px) {\n  .calendar-days {\n    grid-template-columns: repeat(7, 1fr);\n    width: 100%;\n    gap: 1px;\n  }\n  .calendar-day {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number {\n    width: 24px;\n    height: 24px;\n    font-size: 0.8rem;\n  }\n  .event-bullet {\n    width: 4px;\n    height: 4px;\n    min-width: 3px;\n    min-height: 3px;\n  }\n  .day-events {\n    min-height: 8px;\n    gap: 1px;\n  }\n  .week-days {\n    padding: 8px 2px;\n  }\n  .week-day {\n    padding: 8px 2px;\n    font-size: 0.8rem;\n    font-weight: 500;\n    line-height: 1.2;\n  }\n  .day-header-small {\n    text-align: center;\n    padding: 4px 2px;\n    width: 100%;\n  }\n  .day-header-small .day-number {\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.8rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .day-view-content {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name {\n    font-size: 2rem;\n  }\n  .day-date {\n    font-size: 1rem;\n  }\n  .section-title {\n    font-size: 1.3rem;\n  }\n  .event-item {\n    padding: 15px;\n    gap: 12px;\n  }\n  .event-title {\n    font-size: 1rem;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 2px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet {\n    width: 18px;\n    height: 18px;\n    min-width: 16px;\n    min-height: 16px;\n  }\n  .day-events {\n    min-height: 18px;\n    gap: 3px;\n  }\n  .day-header-small {\n    text-align: center;\n    padding: 6px 3px;\n    width: 100%;\n  }\n  .day-header-small .day-number {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.85rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container {\n    padding: 10px;\n  }\n  .calendar-header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days {\n    min-height: 60px;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet {\n    width: 12px !important;\n    height: 12px !important;\n    min-width: 10px !important;\n    min-height: 10px !important;\n  }\n  .day-events {\n    min-height: 16px;\n    gap: 2px;\n  }\n  .more-events-indicator {\n    font-size: 5px;\n    padding: 1px 1px;\n    min-width: 8px;\n  }\n  .modal-content {\n    margin: 5px;\n    max-height: 95vh;\n    width: 98%;\n    max-width: none;\n  }\n  .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal .modal-content {\n    margin: 5px;\n    max-height: 95vh;\n    width: 98%;\n    max-width: none;\n  }\n  .day-events-modal .modal-header {\n    padding: 15px;\n  }\n  .day-events-modal .modal-header h3 {\n    font-size: 1.3rem;\n  }\n  .day-events-modal .modal-body {\n    padding: 15px;\n  }\n  .day-events-modal .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .event-content {\n    min-width: 0;\n  }\n  .event-description {\n    font-size: 0.75rem !important;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    white-space: normal;\n    max-width: 100%;\n  }\n  .event-type {\n    font-size: 0.75rem !important;\n  }\n  .event-status {\n    font-size: 0.75rem !important;\n  }\n  .event-title {\n    font-size: 0.75rem !important;\n  }\n  .event-time {\n    font-size: 0.75rem !important;\n  }\n  .event-meta .calendar-container {\n    padding: 5px;\n  }\n  .event-meta .calendar-header {\n    padding: 15px;\n  }\n  .event-meta .calendar-header h1 {\n    font-size: 1.5rem;\n  }\n  .event-meta .calendar-filters {\n    padding: 15px;\n  }\n  .event-meta .summary-card {\n    padding: 15px;\n  }\n  .event-meta .calendar-days {\n    min-height: 50px;\n  }\n  .event-meta .calendar-day {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .event-meta .day-number {\n    font-size: 14px;\n  }\n  .event-meta .day-events {\n    max-height: 25px;\n    min-height: 6px;\n    gap: 1px;\n  }\n  .event-meta .event-bullet {\n    width: 3px;\n    height: 3px;\n    min-width: 2px;\n    min-height: 2px;\n  }\n  .event-meta .more-events-indicator {\n    font-size: 4px !important;\n    padding: 1px 1px !important;\n    min-width: 6px !important;\n  }\n  .event-meta .week-day {\n    padding: 6px 1px;\n    font-size: 0.6rem;\n    font-weight: 500;\n    line-height: 1.1;\n  }\n  .event-meta .week-days {\n    padding: 6px 1px;\n  }\n  @media (max-width: 360px) {\n    .calendar-grid {\n      overflow-x: auto;\n      min-width: 320px;\n    }\n    .permission-item.assigned {\n      justify-content: center !important;\n    }\n    .week-days,\n    .calendar-days {\n      min-width: 320px;\n    }\n    .week-day,\n    .calendar-day {\n      min-width: 45px;\n    }\n    .week-day {\n      padding: 4px 0px;\n      font-size: 0.55rem;\n      font-weight: 500;\n      line-height: 1;\n    }\n    .week-days {\n      padding: 4px 0px;\n    }\n  }\n}\n/*# sourceMappingURL=system-calendar.component-BLOW2PHF.css.map */\n'] }]
  }], () => [{ type: CalendarService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemCalendarComponent, { className: "SystemCalendarComponent", filePath: "src/app/components/calendar/system-calendar/system-calendar.component.ts", lineNumber: 20 });
})();

// src/app/components/calendar/system-calendar/system-calendar-routing.module.ts
var routes = [
  {
    path: "",
    component: SystemCalendarComponent
  }
];
var SystemCalendarRoutingModule = class _SystemCalendarRoutingModule {
  static \u0275fac = function SystemCalendarRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemCalendarRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SystemCalendarRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemCalendarRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/calendar/system-calendar/system-calendar.module.ts
var SystemCalendarModule = class _SystemCalendarModule {
  static \u0275fac = function SystemCalendarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemCalendarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SystemCalendarModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    SystemCalendarRoutingModule,
    CalendarTableViewComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemCalendarModule, [{
    type: NgModule,
    args: [{
      declarations: [
        SystemCalendarComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        SystemCalendarRoutingModule,
        CalendarTableViewComponent
      ]
    }]
  }], null, null);
})();
export {
  SystemCalendarModule
};
//# sourceMappingURL=chunk-MXXBZZFI.js.map
