import {
  CalendarService,
  EventStatus,
  EventType
} from "./chunk-6TD7CEID.js";
import {
  RouterModule
} from "./chunk-LQXSMMP4.js";
import {
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-HY6UJAEU.js";
import {
  CommonModule,
  Component,
  DatePipe,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
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
} from "./chunk-J5ZZ35GX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/components/calendar/system-calendar/system-calendar.component.ts
var _c0 = () => ["month", "week", "day"];
function SystemCalendarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function SystemCalendarComponent_button_9_Template_button_click_0_listener() {
      const mode_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewModeChange(mode_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.viewMode() === mode_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar." + mode_r2), " ");
  }
}
function SystemCalendarComponent_div_61_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r4, " ");
  }
}
function SystemCalendarComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, SystemCalendarComponent_div_61_div_1_Template, 2, 1, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function SystemCalendarComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h2", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDayName(ctx_r2.currentDate()));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, ctx_r2.currentDate(), "fullDate"));
  }
}
function SystemCalendarComponent_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(date_r6.getDate());
  }
}
function SystemCalendarComponent_div_64_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDayName(date_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(date_r6.getDate());
  }
}
function SystemCalendarComponent_div_64_div_3_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "div", 62);
    \u0275\u0275elementStart(2, "div", 63)(3, "div", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 66);
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
function SystemCalendarComponent_div_64_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "h3", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59);
    \u0275\u0275template(4, SystemCalendarComponent_div_64_div_3_div_1_div_4_Template, 11, 12, "div", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.events"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(date_r6));
  }
}
function SystemCalendarComponent_div_64_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2, "No events for this day");
    \u0275\u0275elementEnd()();
  }
}
function SystemCalendarComponent_div_64_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, SystemCalendarComponent_div_64_div_3_div_1_Template, 5, 2, "div", 55)(2, SystemCalendarComponent_div_64_div_3_div_2_Template, 3, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length === 0);
  }
}
function SystemCalendarComponent_div_64_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
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
function SystemCalendarComponent_div_64_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "+" + (ctx_r2.getEventsForDate(date_r6).length - 3) + " more events");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getEventsForDate(date_r6).length - 3, " ");
  }
}
function SystemCalendarComponent_div_64_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, SystemCalendarComponent_div_64_div_4_div_1_Template, 3, 6, "div", 69)(2, SystemCalendarComponent_div_64_div_4_div_2_Template, 2, 2, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(date_r6).slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length > 3);
  }
}
function SystemCalendarComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_64_Template_div_click_0_listener() {
      const date_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(date_r6));
    });
    \u0275\u0275template(1, SystemCalendarComponent_div_64_div_1_Template, 2, 1, "div", 48)(2, SystemCalendarComponent_div_64_div_2_Template, 5, 2, "div", 49)(3, SystemCalendarComponent_div_64_div_3_Template, 3, 2, "div", 50)(4, SystemCalendarComponent_div_64_div_4_Template, 3, 2, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
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
function SystemCalendarComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275element(1, "div", 74);
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
function SystemCalendarComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_66_Template_button_click_5_listener() {
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
function SystemCalendarComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
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
function SystemCalendarComponent_div_68_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r11.description);
  }
}
function SystemCalendarComponent_div_68_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 88)(2, "h4", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SystemCalendarComponent_div_68_div_12_p_4_Template, 2, 1, "p", 89);
    \u0275\u0275elementStart(5, "div", 90)(6, "span", 65);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 91);
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
function SystemCalendarComponent_div_68_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function SystemCalendarComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 81);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 82)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 83);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 84);
    \u0275\u0275element(8, "line", 85)(9, "line", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 87)(11, "div", 59);
    \u0275\u0275template(12, SystemCalendarComponent_div_68_div_12_Template, 14, 16, "div", 60)(13, SystemCalendarComponent_div_68_div_13_Template, 3, 1, "div", 56);
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
function SystemCalendarComponent_div_69_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.no_events_found"), " ");
  }
}
function SystemCalendarComponent_div_69_div_7_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r13.description, " ");
  }
}
function SystemCalendarComponent_div_69_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 104);
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
function SystemCalendarComponent_div_69_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "div", 97)(2, "h3", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 98);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 63);
    \u0275\u0275template(7, SystemCalendarComponent_div_69_div_7_p_7_Template, 2, 1, "p", 89);
    \u0275\u0275elementStart(8, "div", 90)(9, "div", 99);
    \u0275\u0275element(10, "i", 100);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SystemCalendarComponent_div_69_div_7_div_15_Template, 4, 1, "div", 101);
    \u0275\u0275elementStart(16, "div", 99);
    \u0275\u0275element(17, "i", 102);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 99);
    \u0275\u0275element(21, "i", 103);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r13.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r13.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r13.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 10, event_r13.startDate, "short"), " - ", \u0275\u0275pipeBind2(14, 13, event_r13.endDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r13.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getEventStatusLabel(event_r13.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getPriorityColor(event_r13.priority));
  }
}
function SystemCalendarComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllSystemEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 81);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 82)(3, "h2", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275template(6, SystemCalendarComponent_div_69_div_6_Template, 2, 1, "div", 56)(7, SystemCalendarComponent_div_69_div_7_Template, 24, 16, "div", 95);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl", ctx_r2.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.all_system_events"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.systemEvents().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.systemEvents());
  }
}
var SystemCalendarComponent = class _SystemCalendarComponent {
  calendarService;
  translationService;
  langService;
  // Signals for reactive state management
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
    const systemEventsSub = this.calendarService.getSystemEvents(this.filters().type, this.filters().status).subscribe({
      next: (response) => {
        if (response.success) {
          const eventsWithColors = response.data.map((event) => __spreadProps(__spreadValues({}, event), {
            color: this.getEventTypeColor(event.type)
          }));
          this.systemEvents.set(eventsWithColors);
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
  getEventTypeColor(type) {
    return this.calendarService.getEventTypeColor(type);
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
  static \u0275fac = function SystemCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemCalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemCalendarComponent, selectors: [["app-system-calendar"]], standalone: false, decls: 70, vars: 35, consts: [[1, "calendar-container"], [1, "calendar-header"], [1, "header-left"], [1, "calendar-title"], [1, "calendar-subtitle"], [1, "header-right"], [1, "view-mode-toggle"], ["class", "view-mode-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "calendar-navigation"], [1, "nav-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-right-icon", "lucide-arrow-right"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7"], [1, "today-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-left-icon", "lucide-arrow-left"], ["d", "m12 19-7-7 7-7"], ["d", "M19 12H5"], [1, "calendar-filters"], [1, "filter-group"], [1, "filter-select", 3, "change"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "events-summary"], [1, "summary-card"], [1, "events-count"], [1, "view-all-btn", 3, "click"], [1, "calendar-grid"], ["class", "week-days", 4, "ngIf"], ["class", "day-view-header", 4, "ngIf"], [1, "calendar-days"], ["class", "calendar-day", 3, "day-view-day", "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "no-events-state", 4, "ngIf"], ["class", "day-events-modal", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "view-mode-btn", 3, "click"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "week-day"], [1, "day-view-header"], [1, "day-name"], [1, "day-date"], [1, "calendar-day", 3, "click"], ["class", "day-number", 4, "ngIf"], ["class", "day-header-small", 4, "ngIf"], ["class", "day-view-content", 4, "ngIf"], ["class", "day-events", 4, "ngIf"], [1, "day-number"], [1, "day-header-small"], [1, "day-view-content"], ["class", "day-events-section", 4, "ngIf"], ["class", "no-events", 4, "ngIf"], [1, "day-events-section"], [1, "section-title"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], [1, "event-item"], [1, "event-dot"], [1, "event-details"], [1, "event-title"], [1, "event-time"], [1, "event-type"], [1, "no-events"], [1, "day-events"], ["class", "event-bullet", 3, "color", "title", 4, "ngFor", "ngForOf"], ["class", "more-events-indicator", 3, "title", 4, "ngIf"], [1, "event-bullet", 3, "title"], [1, "more-events-indicator", 3, "title"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"], [1, "retry-btn", 3, "click"], [1, "no-events-state"], [1, "no-events-icon"], [1, "day-events-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-status"], [1, "event-description"], [1, "modal-overlay", 3, "click"], [1, "modal-title"], ["class", "event-card", 4, "ngFor", "ngForOf"], [1, "event-card"], [1, "event-header"], [1, "event-type-badge"], [1, "meta-item"], [1, "fas", "fa-clock"], ["class", "meta-item", 4, "ngIf"], [1, "fas", "fa-flag"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-map-marker-alt"]], template: function SystemCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275template(9, SystemCalendarComponent_button_9_Template, 2, 3, "button", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_11_listener() {
        return ctx.previousMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11)(14, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_15_listener() {
        return ctx.goToToday();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_17_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 14);
      \u0275\u0275element(19, "path", 15)(20, "path", 16);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "label");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 19);
      \u0275\u0275listener("change", function SystemCalendarComponent_Template_select_change_25_listener($event) {
        return ctx.onTypeFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(26, "option", 20);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 22);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 23);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 24);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 18)(37, "label");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 19);
      \u0275\u0275listener("change", function SystemCalendarComponent_Template_select_change_39_listener($event) {
        return ctx.onStatusFilterChange($event.target.value);
      });
      \u0275\u0275elementStart(40, "option", 20);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 22);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 23);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 24);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 25);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 26)(53, "div", 27)(54, "h3");
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 28);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 29);
      \u0275\u0275listener("click", function SystemCalendarComponent_Template_button_click_58_listener($event) {
        return ctx.viewAllSystemEvents($event);
      });
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 30);
      \u0275\u0275template(61, SystemCalendarComponent_div_61_Template, 2, 1, "div", 31)(62, SystemCalendarComponent_div_62_Template, 6, 5, "div", 32);
      \u0275\u0275elementStart(63, "div", 33);
      \u0275\u0275template(64, SystemCalendarComponent_div_64_Template, 5, 12, "div", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(65, SystemCalendarComponent_div_65_Template, 4, 1, "div", 35)(66, SystemCalendarComponent_div_66_Template, 7, 2, "div", 36)(67, SystemCalendarComponent_div_67_Template, 5, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, SystemCalendarComponent_div_68_Template, 14, 6, "div", 38)(69, SystemCalendarComponent_div_69_Template, 8, 5, "div", 39);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("calendar.system_calendar"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.subtitle"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(34, _c0));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.today"), " ");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.translate("calendar.all_types"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("calendar.all_types"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_types.meeting"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_types.task"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_types.visit"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_types.travel"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("calendar.all_statuses"), ":");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("calendar.all_statuses"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_statuses.scheduled"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_statuses.in_progress"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_statuses.completed"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_statuses.cancelled"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.event_statuses.overdue"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("calendar.system_events"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.systemEvents().length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.view_all"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("day-view", ctx.viewMode() === "day")("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode() !== "day");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode() === "day");
      \u0275\u0275advance();
      \u0275\u0275classProp("day-view-days", ctx.viewMode() === "day");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.calendarDays);
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
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DatePipe], styles: ["\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 100vh;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn[_ngcontent-%COMP%]:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  color: white;\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn[_ngcontent-%COMP%], \n.today-btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.nav-btn[_ngcontent-%COMP%]:hover, \n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #BFAB86;\n}\n.today-btn[_ngcontent-%COMP%] {\n  background: #BFAB86;\n  color: white;\n  border-color: #BFAB86;\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.calendar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 14px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dadce0;\n  border-radius: 6px;\n  background: white;\n  font-size: 14px;\n  color: #5f6368;\n  min-width: 150px;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.2);\n}\n.events-summary[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #BFAB86;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #BFAB86;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  border: 2px solid #BFAB86;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  overflow: hidden;\n}\n.event-bullet[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n}\n.event-bullet[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  background: #f0f0f0;\n  padding: 2px 4px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n}\n.more-events-indicator[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .week-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #BFAB86;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #d33b2c;\n}\n.no-events-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header[_ngcontent-%COMP%]   .rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: 0.5s ease;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #BFAB86;\n  transition: 0.5s ease;\n}\n.event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time[_ngcontent-%COMP%] {\n  color: #5f6368;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.event-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.day-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #e9ecef;\n}\n.event-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #BFAB86;\n  transition: 0.5s ease;\n}\n.event-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #BFAB86;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (min-width: 1400px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n.calendar-grid.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  min-height: 600px;\n}\n.day-view-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 400;\n}\n.calendar-days.day-view-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.calendar-day.day-view-day[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 30px;\n  gap: 30px;\n}\n.day-events-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e9ecef;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.event-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.event-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0 0 5px 0;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #495057;\n  margin: 0;\n  font-weight: 500;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  font-style: italic;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .day-view-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.calendar-grid.rtl.day-view[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n  padding: 20px !important;\n  gap: 20px !important;\n  flex: 1 !important;\n  overflow-y: auto !important;\n}\n.day-events-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 15px 0 !important;\n  padding-bottom: 8px !important;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 10px !important;\n  max-height: 100% !important;\n  overflow-y: auto !important;\n  padding-right: 10px !important;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 15px !important;\n  background: #f8f9fa !important;\n  border-radius: 8px !important;\n  border: 1px solid #e9ecef !important;\n  transition: all 0.2s ease !important;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef !important;\n  transform: translateY(-1px) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 50% !important;\n  flex-shrink: 0 !important;\n  margin-top: 4px !important;\n}\n.event-details[_ngcontent-%COMP%] {\n  flex: 1 !important;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 6px 0 !important;\n  line-height: 1.3 !important;\n}\n.event-time[_ngcontent-%COMP%] {\n  font-size: 0.85rem !important;\n  color: #6c757d !important;\n  margin: 0 0 4px 0 !important;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  margin: 0 !important;\n  font-weight: 500 !important;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center !important;\n  padding: 40px 20px !important;\n  color: #6c757d !important;\n  font-style: italic !important;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  font-size: 1rem !important;\n}\n@media (max-width: 1399px) {\n  .day-view-header[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .calendar-grid.day-view[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    height: calc(100vh - 200px) !important;\n    min-height: 600px !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-days.day-view-days[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex: 1 !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-day.day-view-day[_ngcontent-%COMP%] {\n    flex: 1 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    background: white !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    overflow: hidden !important;\n    width: 100% !important;\n    max-width: 800px !important;\n    max-height: 600px !important;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    text-align: center !important;\n    padding: 20px !important;\n    background:\n      linear-gradient(\n        135deg,\n        #f8f9fa 0%,\n        #e9ecef 100%) !important;\n    border-radius: 12px 12px 0 0 !important;\n    width: 100% !important;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n    font-size: 1.5rem !important;\n    font-weight: 700 !important;\n    color: #2c3e50 !important;\n    margin: 0 0 8px 0 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 1px !important;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    width: 40px !important;\n    height: 40px !important;\n    line-height: 40px !important;\n    text-align: center !important;\n    border-radius: 50% !important;\n    background: #BFAB86 !important;\n    border: 2px solid #B68A35 !important;\n    font-weight: 600 !important;\n    font-size: 1.2rem !important;\n    color: white !important;\n    margin-bottom: 10px !important;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .calendar-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    padding: 10px !important;\n  }\n  .calendar-content[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .day-header-small[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .calendar-day.day-view-day[_ngcontent-%COMP%]   .day-events[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media (max-width: 991px) {\n  .calendar-days[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(7, 1fr);\n    width: 100%;\n    gap: 1px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 0.8rem;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4px 2px;\n    width: 100%;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.8rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .day-date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .event-item[_ngcontent-%COMP%] {\n    padding: 15px;\n    gap: 12px;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 2px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n  }\n  .day-header-small[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 6px 3px;\n    width: 100%;\n  }\n  .day-header-small[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.85rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 1px 3px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .calendar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .calendar-filters[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    max-height: 25px;\n    gap: 1px;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 7px;\n    padding: 1px 2px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 360px) {\n  .calendar-grid[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    min-width: 320px;\n  }\n  .week-days[_ngcontent-%COMP%], \n   .calendar-days[_ngcontent-%COMP%] {\n    min-width: 320px;\n  }\n  .week-day[_ngcontent-%COMP%], \n   .calendar-day[_ngcontent-%COMP%] {\n    min-width: 45px;\n  }\n}\n/*# sourceMappingURL=system-calendar.component-DMXPV34X.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-system-calendar", standalone: false, template: `<div class="calendar-container">\r
  <!-- Header -->\r
  <div class="calendar-header">\r
    <div class="header-left">\r
      <h1 class="calendar-title">{{ translate('calendar.system_calendar') }}</h1>\r
      <p class="calendar-subtitle">{{ translate('calendar.subtitle') }}</p>\r
    </div>\r
    \r
    <div class="header-right">\r
      <!-- View Mode Toggle -->\r
      <div class="view-mode-toggle">\r
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
  <!-- Filters -->\r
  <div class="calendar-filters">\r
    <div class="filter-group">\r
      <label>{{ translate('calendar.all_types') }}:</label>\r
      <select \r
        class="filter-select"\r
        (change)="onTypeFilterChange($any($event.target).value)">\r
        <option value="">{{ translate('calendar.all_types') }}</option>\r
        <option value="0">{{ translate('calendar.event_types.meeting') }}</option>\r
        <option value="1">{{ translate('calendar.event_types.task') }}</option>\r
        <option value="2">{{ translate('calendar.event_types.visit') }}</option>\r
        <option value="3">{{ translate('calendar.event_types.travel') }}</option>\r
      </select>\r
    </div>\r
    \r
    <div class="filter-group">\r
      <label>{{ translate('calendar.all_statuses') }}:</label>\r
      <select \r
        class="filter-select"\r
        (change)="onStatusFilterChange($any($event.target).value)">\r
        <option value="">{{ translate('calendar.all_statuses') }}</option>\r
        <option value="0">{{ translate('calendar.event_statuses.scheduled') }}</option>\r
        <option value="1">{{ translate('calendar.event_statuses.in_progress') }}</option>\r
        <option value="2">{{ translate('calendar.event_statuses.completed') }}</option>\r
        <option value="3">{{ translate('calendar.event_statuses.cancelled') }}</option>\r
        <option value="4">{{ translate('calendar.event_statuses.overdue') }}</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- System Events Summary -->\r
  <div class="events-summary">\r
    <div class="summary-card">\r
      <h3>{{ translate('calendar.system_events') }}</h3>\r
      <div class="events-count">{{ systemEvents().length }}</div>\r
      <button \r
        class="view-all-btn"\r
        (click)="viewAllSystemEvents($event)">\r
        {{ translate('calendar.view_all') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Calendar Grid -->\r
  <div class="calendar-grid" [class.day-view]="viewMode() === 'day'" [class.rtl]="isRTL()">\r
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
            *ngFor="let event of getEventsForDate(date).slice(0, 3); let eventIndex = index"\r
            class="event-bullet"\r
            [style.color]="event.color"\r
            [title]="event.title + ' - ' + (event.startDate | date:'shortTime')">\r
            \u25CF\r
          </div>\r
          <!-- Show "more" indicator if there are too many events -->\r
          <div \r
            *ngIf="getEventsForDate(date).length > 3" \r
            class="more-events-indicator"\r
            [title]="'+' + (getEventsForDate(date).length - 3) + ' more events'">\r
            +{{ getEventsForDate(date).length - 3 }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
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
              <span>{{ event.startDate | date:'short' }} - {{ event.endDate | date:'short' }}</span>\r
            </div>\r
            \r
            <div *ngIf="event.location" class="meta-item">\r
              <i class="fas fa-map-marker-alt"></i>\r
              <span>{{ event.location }}</span>\r
            </div>\r
            \r
            <div class="meta-item">\r
              <i class="fas fa-flag"></i>\r
              <span>{{ getEventStatusLabel(event.status) }}</span>\r
            </div>\r
            \r
            <div class="meta-item">\r
              <i class="fas fa-exclamation-circle"></i>\r
              <span>{{ getPriorityColor(event.priority) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/calendar/system-calendar/system-calendar.component.css */\n.calendar-container {\n  padding: 20px;\n  min-height: 100vh;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.header-left h1 {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left p {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.view-mode-toggle {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active {\n  background: #BFAB86;\n  color: white;\n}\n.calendar-navigation {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn,\n.today-btn {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.nav-btn:hover,\n.today-btn:hover {\n  background: #f8f9fa;\n  border-color: #BFAB86;\n}\n.today-btn {\n  background: #BFAB86;\n  color: white;\n  border-color: #BFAB86;\n}\n.today-btn:hover {\n  background: #B68A35;\n}\n.calendar-filters {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filter-group label {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 14px;\n}\n.filter-select {\n  padding: 8px 12px;\n  border: 1px solid #dadce0;\n  border-radius: 6px;\n  background: white;\n  font-size: 14px;\n  color: #5f6368;\n  min-width: 150px;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #BFAB86;\n  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.2);\n}\n.events-summary {\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-card h3 {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #BFAB86;\n}\n.view-all-btn {\n  padding: 10px 20px;\n  background: #BFAB86;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn:hover {\n  background: #B68A35;\n}\n.calendar-grid {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day:last-child {\n  border-right: none;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day {\n  padding: 10px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n}\n.calendar-day:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today {\n  background: #e3f2fd;\n}\n.calendar-day.selected {\n  background: #e8f0fe;\n  border: 2px solid #BFAB86;\n}\n.calendar-day.other-month {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month .day-number {\n  color: #bdbdbd;\n}\n.day-number {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  overflow: hidden;\n}\n.event-bullet {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n}\n.event-bullet:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator {\n  font-size: 10px;\n  color: #666;\n  background: #f0f0f0;\n  padding: 2px 4px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n}\n.more-events-indicator:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl .week-day {\n  text-align: right;\n}\n.calendar-grid.rtl .calendar-day {\n  text-align: right;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #BFAB86;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state p {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn:hover {\n  background: #d33b2c;\n}\n.no-events-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.day-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header .rtl {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr] .modal-header {\n  flex-direction: row !important;\n}\n.day-events-modal .modal-header h3 {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal .close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal .close-btn:hover {\n  background: #e0e0e0;\n}\n.day-events-modal .modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n  transition: 0.5s ease;\n}\n.day-events-modal .event-item:hover {\n  border: 1px solid #BFAB86;\n  transition: 0.5s ease;\n}\n.event-content {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal .event-title {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal .event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal .event-meta span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time {\n  color: #5f6368;\n}\n.event-type {\n  font-weight: 600;\n}\n.event-status {\n  font-weight: 600;\n}\n.day-events-modal .no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn:hover {\n  background: #e0e0e0;\n}\n.modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #e9ecef;\n}\n.event-card:hover {\n  border: 1px solid #BFAB86;\n  transition: 0.5s ease;\n}\n.event-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card .event-title {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item i {\n  color: #BFAB86;\n}\n.no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (min-width: 1400px) {\n  .event-bullet {\n    width: 20px;\n    height: 20px;\n  }\n}\n.calendar-grid.day-view {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 200px);\n  min-height: 600px;\n}\n.day-view-header {\n  text-align: center;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.day-name {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date {\n  font-size: 1.2rem;\n  color: #6c757d;\n  margin: 0;\n  font-weight: 400;\n}\n.calendar-days.day-view-days {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n.calendar-day.day-view-day {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.day-view-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 30px;\n  gap: 30px;\n}\n.day-events-section {\n  flex: 1;\n  min-height: 0;\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #e9ecef;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 10px;\n}\n.events-list::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n  padding: 20px;\n  background: #f8f9fa;\n  border-radius: 12px;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.event-dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.event-details {\n  flex: 1;\n}\n.event-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n}\n.event-time {\n  font-size: 0.9rem;\n  color: #6c757d;\n  margin: 0 0 5px 0;\n}\n.event-type {\n  font-size: 0.85rem;\n  color: #495057;\n  margin: 0;\n  font-weight: 500;\n}\n.no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  font-style: italic;\n}\n.no-events p {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.calendar-grid.rtl.day-view .day-view-header {\n  text-align: center;\n}\n.calendar-grid.rtl.day-view .event-item {\n  flex-direction: row-reverse;\n}\n.calendar-grid.rtl.day-view .event-details {\n  text-align: right;\n}\n.day-view-content {\n  display: flex !important;\n  flex-direction: column !important;\n  height: 100% !important;\n  padding: 20px !important;\n  gap: 20px !important;\n  flex: 1 !important;\n  overflow-y: auto !important;\n}\n.day-events-section {\n  flex: 1;\n  min-height: 0;\n}\n.section-title {\n  font-size: 1.2rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 15px 0 !important;\n  padding-bottom: 8px !important;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.events-list {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 10px !important;\n  max-height: 100% !important;\n  overflow-y: auto !important;\n  padding-right: 10px !important;\n}\n.event-item {\n  display: flex !important;\n  align-items: flex-start !important;\n  gap: 12px !important;\n  padding: 15px !important;\n  background: #f8f9fa !important;\n  border-radius: 8px !important;\n  border: 1px solid #e9ecef !important;\n  transition: all 0.2s ease !important;\n}\n.event-item:hover {\n  background: #e9ecef !important;\n  transform: translateY(-1px) !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;\n}\n.event-dot {\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 50% !important;\n  flex-shrink: 0 !important;\n  margin-top: 4px !important;\n}\n.event-details {\n  flex: 1 !important;\n}\n.event-title {\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  color: #2c3e50 !important;\n  margin: 0 0 6px 0 !important;\n  line-height: 1.3 !important;\n}\n.event-time {\n  font-size: 0.85rem !important;\n  color: #6c757d !important;\n  margin: 0 0 4px 0 !important;\n}\n.event-type {\n  font-size: 0.8rem !important;\n  margin: 0 !important;\n  font-weight: 500 !important;\n}\n.no-events {\n  text-align: center !important;\n  padding: 40px 20px !important;\n  color: #6c757d !important;\n  font-style: italic !important;\n}\n.no-events p {\n  margin: 0 !important;\n  font-size: 1rem !important;\n}\n@media (max-width: 1399px) {\n  .day-view-header {\n    display: none !important;\n  }\n  .calendar-grid.day-view {\n    display: flex !important;\n    flex-direction: column !important;\n    height: calc(100vh - 200px) !important;\n    min-height: 600px !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-days.day-view-days {\n    display: flex !important;\n    flex: 1 !important;\n    width: 100% !important;\n    justify-content: center !important;\n    align-items: center !important;\n  }\n  .calendar-day.day-view-day {\n    flex: 1 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    background: white !important;\n    border-radius: 12px !important;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    overflow: hidden !important;\n    width: 100% !important;\n    max-width: 800px !important;\n    max-height: 600px !important;\n  }\n  .day-header-small {\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    text-align: center !important;\n    padding: 20px !important;\n    background:\n      linear-gradient(\n        135deg,\n        #f8f9fa 0%,\n        #e9ecef 100%) !important;\n    border-radius: 12px 12px 0 0 !important;\n    width: 100% !important;\n  }\n  .day-header-small .day-name {\n    font-size: 1.5rem !important;\n    font-weight: 700 !important;\n    color: #2c3e50 !important;\n    margin: 0 0 8px 0 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 1px !important;\n  }\n  .day-header-small .day-number {\n    display: inline-block !important;\n    width: 40px !important;\n    height: 40px !important;\n    line-height: 40px !important;\n    text-align: center !important;\n    border-radius: 50% !important;\n    background: #BFAB86 !important;\n    border: 2px solid #B68A35 !important;\n    font-weight: 600 !important;\n    font-size: 1.2rem !important;\n    color: white !important;\n    margin-bottom: 10px !important;\n  }\n  .day-events {\n    display: none !important;\n  }\n  .calendar-container {\n    width: 100% !important;\n    max-width: 100% !important;\n    padding: 10px !important;\n  }\n  .calendar-content {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid-container {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-grid {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-days {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .calendar-day {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n  }\n}\n@media (min-width: 1400px) {\n  .day-header-small {\n    display: none !important;\n  }\n  .calendar-day.day-view-day .day-events {\n    display: none !important;\n  }\n}\n@media (max-width: 991px) {\n  .calendar-days {\n    grid-template-columns: repeat(7, 1fr);\n    width: 100%;\n    gap: 1px;\n  }\n  .calendar-day {\n    width: 100%;\n    max-width: 100%;\n    min-width: 0;\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number {\n    width: 24px;\n    height: 24px;\n    font-size: 0.8rem;\n  }\n  .event-bullet {\n    width: 8px;\n    height: 8px;\n  }\n  .day-header-small {\n    text-align: center;\n    padding: 4px 2px;\n    width: 100%;\n  }\n  .day-header-small .day-number {\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    line-height: 28px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.8rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .day-view-content {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name {\n    font-size: 2rem;\n  }\n  .day-date {\n    font-size: 1rem;\n  }\n  .section-title {\n    font-size: 1.3rem;\n  }\n  .event-item {\n    padding: 15px;\n    gap: 12px;\n  }\n  .event-title {\n    font-size: 1rem;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 2px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet {\n    width: 18px;\n    height: 18px;\n  }\n  .day-header-small {\n    text-align: center;\n    padding: 6px 3px;\n    width: 100%;\n  }\n  .day-header-small .day-number {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 50%;\n    background: #f8f9fa;\n    border: 2px solid #e9ecef;\n    font-weight: 600;\n    font-size: 0.85rem;\n    color: #2c3e50;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container {\n    padding: 10px;\n  }\n  .calendar-header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days {\n    min-height: 60px;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet {\n    width: 12px;\n    height: 12px;\n  }\n  .more-events-indicator {\n    font-size: 8px;\n    padding: 1px 3px;\n  }\n  .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .day-events-modal .modal-header {\n    padding: 15px;\n  }\n  .day-events-modal .modal-header h3 {\n    font-size: 1.3rem;\n  }\n  .day-events-modal .modal-body {\n    padding: 15px;\n  }\n  .day-events-modal .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .calendar-container {\n    padding: 5px;\n  }\n  .calendar-header {\n    padding: 15px;\n  }\n  .calendar-header h1 {\n    font-size: 1.5rem;\n  }\n  .calendar-filters {\n    padding: 15px;\n  }\n  .summary-card {\n    padding: 15px;\n  }\n  .calendar-days {\n    min-height: 50px;\n  }\n  .calendar-day {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .day-number {\n    font-size: 14px;\n  }\n  .day-events {\n    max-height: 25px;\n    gap: 1px;\n  }\n  .event-bullet {\n    width: 10px;\n    height: 10px;\n  }\n  .more-events-indicator {\n    font-size: 7px;\n    padding: 1px 2px;\n  }\n  .week-day {\n    padding: 10px 5px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 360px) {\n  .calendar-grid {\n    overflow-x: auto;\n    min-width: 320px;\n  }\n  .week-days,\n  .calendar-days {\n    min-width: 320px;\n  }\n  .week-day,\n  .calendar-day {\n    min-width: 45px;\n  }\n}\n/*# sourceMappingURL=system-calendar.component-DMXPV34X.css.map */\n"] }]
  }], () => [{ type: CalendarService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemCalendarComponent, { className: "SystemCalendarComponent", filePath: "src/app/components/calendar/system-calendar/system-calendar.component.ts", lineNumber: 19 });
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
    SystemCalendarRoutingModule
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
        SystemCalendarRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  SystemCalendarModule
};
//# sourceMappingURL=chunk-PZ2Y7TIM.js.map
