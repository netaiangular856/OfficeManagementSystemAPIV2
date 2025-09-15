import {
  CalendarService,
  EventStatus,
  EventType
} from "./chunk-RE5JEETO.js";
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
function SystemCalendarComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r4, " ");
  }
}
function SystemCalendarComponent_div_64_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275text(2, " \u25CF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    \u0275\u0275styleProp("color", event_r7.color);
    \u0275\u0275property("title", event_r7.title + " - " + \u0275\u0275pipeBind2(1, 3, event_r7.startDate, "shortTime"));
  }
}
function SystemCalendarComponent_div_64_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", "+" + (ctx_r2.getEventsForDate(date_r6).length - 3) + " more events");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r2.getEventsForDate(date_r6).length - 3, " ");
  }
}
function SystemCalendarComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_64_Template_div_click_0_listener() {
      const date_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(date_r6));
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275template(4, SystemCalendarComponent_div_64_div_4_Template, 3, 6, "div", 45)(5, SystemCalendarComponent_div_64_div_5_Template, 2, 2, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("today", ctx_r2.isToday(date_r6))("selected", ctx_r2.isSelectedDate(date_r6))("other-month", !ctx_r2.isCurrentMonth(date_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(date_r6.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getEventsForDate(date_r6).slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getEventsForDate(date_r6).length > 3);
  }
}
function SystemCalendarComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "div", 50);
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
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_66_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
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
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55);
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
function SystemCalendarComponent_div_68_div_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r10.description);
  }
}
function SystemCalendarComponent_div_68_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275element(1, "div", 68);
    \u0275\u0275elementStart(2, "div", 69)(3, "h4", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SystemCalendarComponent_div_68_div_12_p_5_Template, 2, 1, "p", 71);
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
    const event_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r10.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r10.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r10.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r10.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r10.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r10.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r10.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r10.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r10.status), " ");
  }
}
function SystemCalendarComponent_div_68_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "p");
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
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 58)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 59);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_68_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 60);
    \u0275\u0275element(8, "line", 61)(9, "line", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 63)(11, "div", 64);
    \u0275\u0275template(12, SystemCalendarComponent_div_68_div_12_Template, 15, 18, "div", 65)(13, SystemCalendarComponent_div_68_div_13_Template, 3, 1, "div", 66);
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
    \u0275\u0275elementStart(0, "div", 77);
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
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r12.description, " ");
  }
}
function SystemCalendarComponent_div_69_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r12.location);
  }
}
function SystemCalendarComponent_div_69_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "h3", 70);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 84);
    \u0275\u0275template(7, SystemCalendarComponent_div_69_div_7_p_7_Template, 2, 1, "p", 71);
    \u0275\u0275elementStart(8, "div", 72)(9, "div", 85);
    \u0275\u0275element(10, "i", 86);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SystemCalendarComponent_div_69_div_7_div_15_Template, 4, 1, "div", 87);
    \u0275\u0275elementStart(16, "div", 85);
    \u0275\u0275element(17, "i", 88);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 85);
    \u0275\u0275element(21, "i", 89);
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r12.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r12.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r12.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r12.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 10, event_r12.startDate, "short"), " - ", \u0275\u0275pipeBind2(14, 13, event_r12.endDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r12.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getEventStatusLabel(event_r12.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getPriorityColor(event_r12.priority));
  }
}
function SystemCalendarComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllSystemEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function SystemCalendarComponent_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 58)(3, "h2", 79);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 63);
    \u0275\u0275template(6, SystemCalendarComponent_div_69_div_6_Template, 2, 1, "div", 66)(7, SystemCalendarComponent_div_69_div_7_Template, 24, 16, "div", 80);
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
          this.systemEvents.set(response.data);
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
  getEventsForDate(date) {
    const dateStr = date.toISOString().split("T")[0];
    return this.filteredEvents().filter((event) => {
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
  static \u0275fac = function SystemCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SystemCalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemCalendarComponent, selectors: [["app-system-calendar"]], standalone: false, decls: 70, vars: 30, consts: [[1, "calendar-container"], [1, "calendar-header"], [1, "header-left"], [1, "calendar-title"], [1, "calendar-subtitle"], [1, "header-right"], [1, "view-mode-toggle"], ["class", "view-mode-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "calendar-navigation"], [1, "nav-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-right-icon", "lucide-arrow-right"], ["d", "M5 12h14"], ["d", "m12 5 7 7-7 7"], [1, "today-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-arrow-left-icon", "lucide-arrow-left"], ["d", "m12 19-7-7 7-7"], ["d", "M19 12H5"], [1, "calendar-filters"], [1, "filter-group"], [1, "filter-select", 3, "change"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "events-summary"], [1, "summary-card"], [1, "events-count"], [1, "view-all-btn", 3, "click"], [1, "calendar-grid"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "calendar-days"], ["class", "calendar-day", 3, "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "no-events-state", 4, "ngIf"], ["class", "day-events-modal", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "view-mode-btn", 3, "click"], [1, "week-day"], [1, "calendar-day", 3, "click"], [1, "day-number"], [1, "day-events"], ["class", "event-bullet", 3, "color", "title", 4, "ngFor", "ngForOf"], ["class", "more-events-indicator", 3, "title", 4, "ngIf"], [1, "event-bullet", 3, "title"], [1, "more-events-indicator", 3, "title"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"], [1, "retry-btn", 3, "click"], [1, "no-events-state"], [1, "no-events-icon"], [1, "day-events-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], ["class", "no-events", 4, "ngIf"], [1, "event-item"], [1, "event-color-bar"], [1, "event-content"], [1, "event-title"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-time"], [1, "event-type"], [1, "event-status"], [1, "event-description"], [1, "no-events"], [1, "modal-overlay", 3, "click"], [1, "modal-title"], ["class", "event-card", 4, "ngFor", "ngForOf"], [1, "event-card"], [1, "event-header"], [1, "event-type-badge"], [1, "event-details"], [1, "meta-item"], [1, "fas", "fa-clock"], ["class", "meta-item", 4, "ngIf"], [1, "fas", "fa-flag"], [1, "fas", "fa-exclamation-circle"], [1, "fas", "fa-map-marker-alt"]], template: function SystemCalendarComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(60, "div", 30)(61, "div", 31);
      \u0275\u0275template(62, SystemCalendarComponent_div_62_Template, 2, 1, "div", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 33);
      \u0275\u0275template(64, SystemCalendarComponent_div_64_Template, 6, 9, "div", 34);
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
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(29, _c0));
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
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.weekDays);
      \u0275\u0275advance(2);
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
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DatePipe], styles: ["\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 100vh;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn[_ngcontent-%COMP%]:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn[_ngcontent-%COMP%], \n.today-btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.nav-btn[_ngcontent-%COMP%]:hover, \n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #D4AA3A;\n}\n.today-btn[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n  border-color: #D4AA3A;\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.calendar-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 14px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #dadce0;\n  border-radius: 6px;\n  background: white;\n  font-size: 14px;\n  color: #5f6368;\n  min-width: 150px;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.2);\n}\n.events-summary[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #D4AA3A;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #D4AA3A;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #e8f0fe;\n  border: 2px solid #D4AA3A;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  color: #bdbdbd;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  overflow: hidden;\n}\n.event-bullet[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n}\n.event-bullet[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  background: #f0f0f0;\n  padding: 2px 4px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n}\n.more-events-indicator[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .week-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.calendar-grid.rtl[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #D4AA3A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #d33b2c;\n}\n.no-events-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header[_ngcontent-%COMP%]   .rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border-left: 4px solid #D4AA3A;\n}\n.event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  background: #D4AA3A;\n}\n.event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time[_ngcontent-%COMP%] {\n  color: #5f6368;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.event-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.day-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 15px;\n  border-left: 4px solid #D4AA3A;\n}\n.event-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description[_ngcontent-%COMP%] {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #D4AA3A;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (min-width: 1400px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    min-height: 60px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 8px;\n    padding: 1px 3px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .day-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .calendar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .calendar-filters[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    min-height: 50px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .day-events[_ngcontent-%COMP%] {\n    max-height: 25px;\n    gap: 1px;\n  }\n  .event-bullet[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 7px;\n    padding: 1px 2px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 360px) {\n  .calendar-grid[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    min-width: 320px;\n  }\n  .week-days[_ngcontent-%COMP%], \n   .calendar-days[_ngcontent-%COMP%] {\n    min-width: 320px;\n  }\n  .week-day[_ngcontent-%COMP%], \n   .calendar-day[_ngcontent-%COMP%] {\n    min-width: 45px;\n  }\n}\n/*# sourceMappingURL=system-calendar.component-VDP6VCHO.css.map */"] });
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
  <div class="calendar-grid" [class.rtl]="isRTL()">\r
    <!-- Week Days Header -->\r
    <div class="week-days">\r
      <div \r
        *ngFor="let day of weekDays" \r
        class="week-day">\r
        {{ day }}\r
      </div>\r
    </div>\r
    \r
    <!-- Calendar Days -->\r
    <div class="calendar-days">\r
      <div \r
        *ngFor="let date of calendarDays; let i = index"\r
        class="calendar-day"\r
        [class.today]="isToday(date)"\r
        [class.selected]="isSelectedDate(date)"\r
        [class.other-month]="!isCurrentMonth(date)"\r
        (click)="onDateClick(date)">\r
        \r
        <div class="day-number">{{ date.getDate() }}</div>\r
        \r
        <!-- System Events for this day -->\r
        <div class="day-events">\r
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
`, styles: ["/* src/app/components/calendar/system-calendar/system-calendar.component.css */\n.calendar-container {\n  padding: 20px;\n  min-height: 100vh;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.header-left h1 {\n  margin: 0;\n  color: #5F646D;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left p {\n  margin: 5px 0 0 0;\n  color: #7f8c8d;\n  font-size: 1rem;\n}\n.header-right {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.view-mode-toggle {\n  display: flex;\n  background: #f1f3f4;\n  border-radius: 8px;\n  padding: 4px;\n}\n.view-mode-btn {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.view-mode-btn:hover {\n  background: #e8eaed;\n}\n.view-mode-btn.active {\n  background: #D4AA3A;\n  color: white;\n}\n.calendar-navigation {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.nav-btn,\n.today-btn {\n  padding: 10px 16px;\n  border: 1px solid #dadce0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #5f6368;\n  transition: all 0.2s ease;\n}\n.nav-btn:hover,\n.today-btn:hover {\n  background: #f8f9fa;\n  border-color: #D4AA3A;\n}\n.today-btn {\n  background: #D4AA3A;\n  color: white;\n  border-color: #D4AA3A;\n}\n.today-btn:hover {\n  background: #B68A35;\n}\n.calendar-filters {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.filter-group label {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 14px;\n}\n.filter-select {\n  padding: 8px 12px;\n  border: 1px solid #dadce0;\n  border-radius: 6px;\n  background: white;\n  font-size: 14px;\n  color: #5f6368;\n  min-width: 150px;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.2);\n}\n.events-summary {\n  margin-bottom: 20px;\n}\n.summary-card {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.summary-card h3 {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n.events-count {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #D4AA3A;\n}\n.view-all-btn {\n  padding: 10px 20px;\n  background: #D4AA3A;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.view-all-btn:hover {\n  background: #B68A35;\n}\n.calendar-grid {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background: #f8f9fa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.week-day {\n  padding: 15px;\n  text-align: center;\n  font-weight: 600;\n  color: #5f6368;\n  font-size: 14px;\n  border-right: 1px solid #e0e0e0;\n}\n.week-day:last-child {\n  border-right: none;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  min-height: 500px;\n}\n.calendar-day {\n  padding: 10px;\n  border-right: 1px solid #e0e0e0;\n  border-bottom: 1px solid #e0e0e0;\n  min-height: 120px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  position: relative;\n}\n.calendar-day:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today {\n  background: #e3f2fd;\n}\n.calendar-day.selected {\n  background: #e8f0fe;\n  border: 2px solid #D4AA3A;\n}\n.calendar-day.other-month {\n  background: #fafafa;\n  color: #bdbdbd;\n}\n.calendar-day.other-month .day-number {\n  color: #bdbdbd;\n}\n.day-number {\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.day-events {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  align-items: center;\n  margin-top: 5px;\n  max-height: 40px;\n  overflow: hidden;\n}\n.event-bullet {\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  line-height: 1;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  text-align: center;\n  background-color: currentColor;\n  color: white;\n  font-size: 0;\n}\n.event-bullet:hover {\n  transform: scale(1.2);\n}\n.more-events-indicator {\n  font-size: 10px;\n  color: #666;\n  background: #f0f0f0;\n  padding: 2px 4px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-weight: 500;\n  line-height: 1;\n  display: inline-block;\n}\n.more-events-indicator:hover {\n  background: #e0e0e0;\n}\n.calendar-grid.rtl .week-day {\n  text-align: right;\n}\n.calendar-grid.rtl .calendar-day {\n  text-align: right;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #D4AA3A;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.error-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.error-state p {\n  color: #ea4335;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n}\n.retry-btn {\n  padding: 10px 20px;\n  background: #ea4335;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background 0.2s ease;\n}\n.retry-btn:hover {\n  background: #d33b2c;\n}\n.no-events-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.no-events-icon {\n  font-size: 48px;\n  margin-bottom: 20px;\n}\n.no-events-state p {\n  color: #5f6368;\n  font-size: 16px;\n  margin: 0;\n}\n.day-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.day-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.day-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  flex-direction: row !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header .rtl {\n  flex-direction: row-reverse !important;\n}\n[dir=ltr] .modal-header {\n  flex-direction: row !important;\n}\n.day-events-modal .modal-header h3 {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n}\n.day-events-modal .close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.day-events-modal .close-btn:hover {\n  background: #e0e0e0;\n}\n.day-events-modal .modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.day-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  border-left: 4px solid #D4AA3A;\n}\n.event-color-bar {\n  width: 4px;\n  background: #D4AA3A;\n}\n.event-content {\n  flex: 1;\n  padding: 15px;\n}\n.day-events-modal .event-title {\n  margin: 0 0 8px 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.day-events-modal .event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.day-events-modal .event-meta span {\n  font-size: 14px;\n  font-weight: 500;\n}\n.event-time {\n  color: #5f6368;\n}\n.event-type {\n  font-weight: 600;\n}\n.event-status {\n  font-weight: 600;\n}\n.day-events-modal .no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  color: #1B1D21;\n  font-size: 1.5rem;\n  flex: 1;\n}\n.modal-header.rtl {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.modal-header.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.close-btn {\n  background: none;\n  border: none;\n  font-size: 20px;\n  color: #1B1D21;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  transition: background 0.2s ease;\n}\n.close-btn:hover {\n  background: #e0e0e0;\n}\n.modal-body {\n  padding: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.event-card {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 15px;\n  border-left: 4px solid #D4AA3A;\n}\n.event-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.event-card .event-title {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.event-type-badge {\n  padding: 4px 8px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  font-weight: 500;\n}\n.event-description {\n  color: #5f6368;\n  margin: 0 0 10px 0;\n  line-height: 1.4;\n}\n.event-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #5f6368;\n  font-size: 14px;\n}\n.meta-item i {\n  color: #D4AA3A;\n}\n.no-events {\n  text-align: center;\n  color: #5f6368;\n  font-style: italic;\n  padding: 40px 20px;\n}\n@media (min-width: 1400px) {\n  .event-bullet {\n    width: 20px;\n    height: 20px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-bullet {\n    width: 18px;\n    height: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container {\n    padding: 10px;\n  }\n  .calendar-header {\n    flex-direction: column;\n    gap: 20px;\n    align-items: stretch;\n  }\n  .header-right {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .calendar-filters {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .summary-card {\n    flex-direction: column;\n    gap: 15px;\n    text-align: center;\n  }\n  .calendar-days {\n    min-height: 60px;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-events {\n    max-height: 30px;\n    gap: 2px;\n  }\n  .event-bullet {\n    width: 12px;\n    height: 12px;\n  }\n  .more-events-indicator {\n    font-size: 8px;\n    padding: 1px 3px;\n  }\n  .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .day-events-modal .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .day-events-modal .modal-header {\n    padding: 15px;\n  }\n  .day-events-modal .modal-header h3 {\n    font-size: 1.3rem;\n  }\n  .day-events-modal .modal-body {\n    padding: 15px;\n  }\n  .day-events-modal .event-meta {\n    flex-direction: column;\n    gap: 8px;\n  }\n}\n@media (max-width: 480px) {\n  .calendar-container {\n    padding: 5px;\n  }\n  .calendar-header {\n    padding: 15px;\n  }\n  .calendar-header h1 {\n    font-size: 1.5rem;\n  }\n  .calendar-filters {\n    padding: 15px;\n  }\n  .summary-card {\n    padding: 15px;\n  }\n  .calendar-days {\n    min-height: 50px;\n  }\n  .calendar-day {\n    min-height: 50px;\n    padding: 3px;\n  }\n  .day-number {\n    font-size: 14px;\n  }\n  .day-events {\n    max-height: 25px;\n    gap: 1px;\n  }\n  .event-bullet {\n    width: 10px;\n    height: 10px;\n  }\n  .more-events-indicator {\n    font-size: 7px;\n    padding: 1px 2px;\n  }\n  .week-day {\n    padding: 10px 5px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 360px) {\n  .calendar-grid {\n    overflow-x: auto;\n    min-width: 320px;\n  }\n  .week-days,\n  .calendar-days {\n    min-width: 320px;\n  }\n  .week-day,\n  .calendar-day {\n    min-width: 45px;\n  }\n}\n/*# sourceMappingURL=system-calendar.component-VDP6VCHO.css.map */\n"] }]
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
//# sourceMappingURL=chunk-5WVBJ5ZG.js.map
