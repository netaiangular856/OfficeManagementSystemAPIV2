import {
  SharedModule
} from "./chunk-MEXZR5J4.js";
import {
  CalendarService,
  CalendarTableViewComponent,
  EventStatus,
  EventType
} from "./chunk-QW3CMQIF.js";
import "./chunk-3KSNCDS2.js";
import {
  ConfirmationModalComponent
} from "./chunk-LL4SE2Y3.js";
import "./chunk-WFDNWXZA.js";
import "./chunk-3NDCE7HG.js";
import "./chunk-N3R5LOFH.js";
import "./chunk-P35E4WF6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-2OJPVZW4.js";
import {
  environment
} from "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  HttpClientModule,
  Injectable,
  Input,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Router,
  RouterModule,
  SlicePipe,
  TranslationService,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-L7ZNDW2L.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/services/calendar-stats.service.ts
var CalendarPeriod;
(function(CalendarPeriod2) {
  CalendarPeriod2[CalendarPeriod2["Day"] = 1] = "Day";
  CalendarPeriod2[CalendarPeriod2["Week"] = 2] = "Week";
  CalendarPeriod2[CalendarPeriod2["Month"] = 3] = "Month";
})(CalendarPeriod || (CalendarPeriod = {}));
var CalendarStatsService = class _CalendarStatsService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Calendar`;
  constructor(http) {
    this.http = http;
  }
  getUserCalendarStats(period) {
    return this.http.get(`${this.apiUrl}/user/stats?period=${period}`);
  }
  static \u0275fac = function CalendarStatsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarStatsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarStatsService, factory: _CalendarStatsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarStatsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/reminder.service.ts
var ReminderService = class _ReminderService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  createReminder(reminder) {
    return this.http.post(`${this.baseUrl}/Reminder`, reminder);
  }
  updateReminder(reminder) {
    return this.http.put(`${this.baseUrl}/Reminder`, reminder);
  }
  deleteReminder(id) {
    return this.http.delete(`${this.baseUrl}/Reminder/${id}`);
  }
  getMyReminders() {
    return this.http.get(`${this.baseUrl}/Reminder/my-reminders`);
  }
  static \u0275fac = function ReminderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReminderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReminderService, factory: _ReminderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReminderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/calendar/add-reminder-modal/add-reminder-modal.component.ts
function AddReminderModalComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function AddReminderModalComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventTime"), " ");
  }
}
function AddReminderModalComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("reminderTime"), " ");
  }
}
function AddReminderModalComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function AddReminderModalComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
function AddReminderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AddReminderModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AddReminderModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function AddReminderModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 9)(10, "form", 10);
    \u0275\u0275listener("ngSubmit", function AddReminderModalComponent_div_0_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 13);
    \u0275\u0275template(15, AddReminderModalComponent_div_0_div_15_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "label", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "label", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 18);
    \u0275\u0275template(24, AddReminderModalComponent_div_0_div_24_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "label", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 20);
    \u0275\u0275template(29, AddReminderModalComponent_div_0_div_29_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AddReminderModalComponent_div_0_div_30_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(31, "div", 21)(32, "button", 22);
    \u0275\u0275listener("click", function AddReminderModalComponent_div_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275template(35, AddReminderModalComponent_div_0_span_35_Template, 1, 0, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.add_reminder"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.reminderForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.reminder_title"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r1.reminderForm.get("title")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.reminderForm.get("title")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r1.translate("reminders.title_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.reminder_description"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("reminders.description_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.event_time"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r1.reminderForm.get("eventTime")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.reminderForm.get("eventTime")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("eventTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.reminder_time"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_13_0 = ctx_r1.reminderForm.get("reminderTime")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.reminderForm.get("reminderTime")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("reminderTime"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || ctx_r1.reminderForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.submit"), " ");
  }
}
var AddReminderModalComponent = class _AddReminderModalComponent {
  fb;
  reminderService;
  translationService;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  reminderCreated = new EventEmitter();
  closeModal = new EventEmitter();
  reminderForm;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor(fb, reminderService, translationService) {
    this.fb = fb;
    this.reminderService = reminderService;
    this.translationService = translationService;
    this.reminderForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      eventTime: ["", Validators.required],
      reminderTime: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.reminderForm.valid) {
      const now = /* @__PURE__ */ new Date();
      const eventTime = new Date(this.reminderForm.value.eventTime);
      const reminderTime = new Date(this.reminderForm.value.reminderTime);
      if (eventTime < now || reminderTime < now) {
        this.error.set(this.translate("reminders.past_date_error"));
        return;
      }
      if (reminderTime >= eventTime) {
        this.error.set(this.translate("reminders.validation_error"));
        return;
      }
      this.loading.set(true);
      this.error.set(null);
      const formValue = this.reminderForm.value;
      const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      const eventTimeValue = formValue.eventTime;
      const reminderTimeValue = formValue.reminderTime;
      const eventTimeDate = new Date(eventTimeValue);
      const reminderTimeDate = new Date(reminderTimeValue);
      if (isNaN(eventTimeDate.getTime()) || isNaN(reminderTimeDate.getTime())) {
        this.error.set(this.translate("reminders.invalid_date_error"));
        this.loading.set(false);
        return;
      }
      const reminderData = {
        title: formValue.title,
        description: formValue.description || "",
        eventTime: eventTimeValue,
        // Local time as-is: "YYYY-MM-DDTHH:mm"
        reminderTime: reminderTimeValue,
        // Local time as-is: "YYYY-MM-DDTHH:mm"
        timezoneOffset: offset
        // Timezone offset in minutes
      };
      this.reminderService.createReminder(reminderData).subscribe({
        next: (response) => {
          this.loading.set(false);
          if (response.success) {
            this.reminderCreated.emit();
            this.closeModal.emit();
            this.resetForm();
          } else {
            let errorMessage = response.message;
            if (response.message) {
              errorMessage = response.message;
            } else {
              errorMessage = this.translate("reminders.create_error");
            }
            this.error.set(errorMessage);
          }
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error creating reminder:", error);
          let errorMessage = this.translate("reminders.create_error");
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          this.error.set(errorMessage);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  onCancel() {
    this.closeModal.emit();
    this.resetForm();
  }
  resetForm() {
    this.reminderForm.reset();
    this.error.set(null);
  }
  markFormGroupTouched() {
    Object.keys(this.reminderForm.controls).forEach((key) => {
      const control = this.reminderForm.get(key);
      control?.markAsTouched();
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.reminderForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("login.field_required");
      }
      if (field.errors["minlength"]) {
        return `${this.translate("login.min_length")} ${field.errors["minlength"].requiredLength}`;
      }
    }
    return "";
  }
  static \u0275fac = function AddReminderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddReminderModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddReminderModalComponent, selectors: [["app-add-reminder-modal"]], inputs: { isOpen: "isOpen" }, outputs: { reminderCreated: "reminderCreated", closeModal: "closeModal" }, standalone: false, decls: 1, vars: 1, consts: [["class", "add-reminder-modal", 3, "click", 4, "ngIf"], [1, "add-reminder-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["for", "eventTime"], ["type", "datetime-local", "id", "eventTime", "formControlName", "eventTime", 1, "form-control"], ["for", "reminderTime"], ["type", "datetime-local", "id", "reminderTime", "formControlName", "reminderTime", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "error-message"], [1, "spinner"]], template: function AddReminderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddReminderModalComponent_div_0_Template, 37, 23, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen());
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.add-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1 !important;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2 !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1 !important;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=add-reminder-modal.component-UYWCKUDJ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddReminderModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-reminder-modal", standalone: false, template: `<div class="add-reminder-modal" *ngIf="isOpen()" (click)="onCancel()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">{{ translate('reminders.add_reminder') }}</h3>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
    \r
    <div class="modal-body">\r
      <form [formGroup]="reminderForm" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
          <label for="title">{{ translate('reminders.reminder_title') }} *</label>\r
          <input\r
            type="text"\r
            id="title"\r
            formControlName="title"\r
            [placeholder]="translate('reminders.title_placeholder')"\r
            class="form-control"\r
            [class.error]="reminderForm.get('title')?.invalid && reminderForm.get('title')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('title')">\r
            {{ getFieldError('title') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="description">{{ translate('reminders.reminder_description') }}</label>\r
          <textarea\r
            id="description"\r
            formControlName="description"\r
            [placeholder]="translate('reminders.description_placeholder')"\r
            class="form-control"\r
            rows="3"\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="eventTime">{{ translate('reminders.event_time') }} *</label>\r
          <input\r
            type="datetime-local"\r
            id="eventTime"\r
            formControlName="eventTime"\r
            class="form-control"\r
            [class.error]="reminderForm.get('eventTime')?.invalid && reminderForm.get('eventTime')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('eventTime')">\r
            {{ getFieldError('eventTime') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="reminderTime">{{ translate('reminders.reminder_time') }} *</label>\r
          <input\r
            type="datetime-local"\r
            id="reminderTime"\r
            formControlName="reminderTime"\r
            class="form-control"\r
            [class.error]="reminderForm.get('reminderTime')?.invalid && reminderForm.get('reminderTime')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('reminderTime')">\r
            {{ getFieldError('reminderTime') }}\r
          </div>\r
        </div>\r
\r
        <div class="error-message" *ngIf="error()">\r
          {{ error() }}\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="onCancel()" [disabled]="loading()">\r
            {{ translate('reminders.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="loading() || reminderForm.invalid">\r
            <span *ngIf="loading()" class="spinner"></span>\r
            {{ translate('reminders.submit') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/calendar/add-reminder-modal/add-reminder-modal.component.css */\n.add-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1 !important;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2 !important;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\nhtml[dir=rtl] .modal-header {\n  flex-direction: row-reverse !important;\n}\nhtml[dir=rtl] .modal-title {\n  order: 1 !important;\n}\nhtml[dir=rtl] .close-btn {\n  text-align: right !important;\n}\nhtml[dir=rtl] .form-actions {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=add-reminder-modal.component-UYWCKUDJ.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ReminderService }, { type: TranslationService }], { isOpen: [{
    type: Input
  }], reminderCreated: [{
    type: Output
  }], closeModal: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddReminderModalComponent, { className: "AddReminderModalComponent", filePath: "src/app/components/calendar/add-reminder-modal/add-reminder-modal.component.ts", lineNumber: 13 });
})();

// src/app/components/calendar/edit-reminder-modal/edit-reminder-modal.component.ts
function EditReminderModalComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function EditReminderModalComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("eventTime"), " ");
  }
}
function EditReminderModalComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("reminderTime"), " ");
  }
}
function EditReminderModalComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.error(), " ");
  }
}
function EditReminderModalComponent_div_0_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
function EditReminderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EditReminderModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function EditReminderModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function EditReminderModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 9)(10, "form", 10);
    \u0275\u0275listener("ngSubmit", function EditReminderModalComponent_div_0_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 13);
    \u0275\u0275template(15, EditReminderModalComponent_div_0_div_15_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11)(17, "label", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "label", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 18);
    \u0275\u0275template(24, EditReminderModalComponent_div_0_div_24_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "label", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 20);
    \u0275\u0275template(29, EditReminderModalComponent_div_0_div_29_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, EditReminderModalComponent_div_0_div_30_Template, 2, 1, "div", 14);
    \u0275\u0275elementStart(31, "div", 21)(32, "button", 22);
    \u0275\u0275listener("click", function EditReminderModalComponent_div_0_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275template(35, EditReminderModalComponent_div_0_span_35_Template, 1, 0, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.edit_reminder"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r1.reminderForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.reminder_title"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r1.reminderForm.get("title")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.reminderForm.get("title")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r1.translate("reminders.title_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.reminder_description"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("reminders.description_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.event_time"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r1.reminderForm.get("eventTime")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.reminderForm.get("eventTime")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("eventTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.reminder_time"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_13_0 = ctx_r1.reminderForm.get("reminderTime")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.reminderForm.get("reminderTime")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("reminderTime"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading() || ctx_r1.reminderForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.update"), " ");
  }
}
var EditReminderModalComponent = class _EditReminderModalComponent {
  fb;
  reminderService;
  translationService;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  reminder = null;
  reminderUpdated = new EventEmitter();
  closeModal = new EventEmitter();
  reminderForm;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor(fb, reminderService, translationService) {
    this.fb = fb;
    this.reminderService = reminderService;
    this.translationService = translationService;
    this.reminderForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: [""],
      eventTime: ["", Validators.required],
      reminderTime: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnChanges(changes) {
    if (changes["reminder"] && this.reminder) {
      this.initializeForm();
    }
  }
  initializeForm() {
    if (this.reminder) {
      const eventTimeFormatted = this.formatDateTimeForInput(this.reminder.eventTime);
      const reminderTimeFormatted = this.formatDateTimeForInput(this.reminder.reminderTime);
      this.reminderForm.patchValue({
        title: this.reminder.title,
        description: this.reminder.description,
        eventTime: eventTimeFormatted,
        reminderTime: reminderTimeFormatted
      });
    }
  }
  formatDateTimeForInput(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  onSubmit() {
    if (this.reminderForm.valid && this.reminder) {
      const now = /* @__PURE__ */ new Date();
      const eventTime = new Date(this.reminderForm.value.eventTime);
      const reminderTime = new Date(this.reminderForm.value.reminderTime);
      if (eventTime < now || reminderTime < now) {
        this.error.set(this.translate("reminders.past_date_error"));
        return;
      }
      if (reminderTime >= eventTime) {
        this.error.set(this.translate("reminders.validation_error"));
        return;
      }
      this.loading.set(true);
      this.error.set(null);
      const formValue = this.reminderForm.value;
      const offset = (/* @__PURE__ */ new Date()).getTimezoneOffset();
      const eventTimeValue = formValue.eventTime;
      const reminderTimeValue = formValue.reminderTime;
      const eventTimeDate = new Date(eventTimeValue);
      const reminderTimeDate = new Date(reminderTimeValue);
      if (isNaN(eventTimeDate.getTime()) || isNaN(reminderTimeDate.getTime())) {
        this.error.set(this.translate("reminders.invalid_date_error"));
        this.loading.set(false);
        return;
      }
      const reminderData = {
        id: this.reminder.id,
        title: formValue.title,
        description: formValue.description || "",
        eventTime: eventTimeValue,
        // Local time as-is: "YYYY-MM-DDTHH:mm"
        reminderTime: reminderTimeValue,
        // Local time as-is: "YYYY-MM-DDTHH:mm"
        timezoneOffset: offset
        // Timezone offset in minutes
      };
      this.reminderService.updateReminder(reminderData).subscribe({
        next: (response) => {
          this.loading.set(false);
          if (response.success) {
            this.reminderUpdated.emit();
            this.closeModal.emit();
          } else {
            let errorMessage = response.message;
            if (response.message) {
              errorMessage = response.message;
            } else {
              errorMessage = this.translate("reminders.update_error");
            }
            this.error.set(errorMessage);
          }
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error updating reminder:", error);
          let errorMessage = this.translate("reminders.update_error");
          if (error.error && error.error.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          this.error.set(errorMessage);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  onCancel() {
    this.closeModal.emit();
  }
  markFormGroupTouched() {
    Object.keys(this.reminderForm.controls).forEach((key) => {
      const control = this.reminderForm.get(key);
      control?.markAsTouched();
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.reminderForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("field_required");
      }
      if (field.errors["minlength"]) {
        return `${this.translate("min_length")} ${field.errors["minlength"].requiredLength}`;
      }
    }
    return "";
  }
  static \u0275fac = function EditReminderModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditReminderModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditReminderModalComponent, selectors: [["app-edit-reminder-modal"]], inputs: { isOpen: "isOpen", reminder: "reminder" }, outputs: { reminderUpdated: "reminderUpdated", closeModal: "closeModal" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "edit-reminder-modal", 3, "click", 4, "ngIf"], [1, "edit-reminder-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["for", "eventTime"], ["type", "datetime-local", "id", "eventTime", "formControlName", "eventTime", 1, "form-control"], ["for", "reminderTime"], ["type", "datetime-local", "id", "reminderTime", "formControlName", "reminderTime", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "error-message"], [1, "spinner"]], template: function EditReminderModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditReminderModalComponent_div_0_Template, 37, 23, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen());
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.edit-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-PQYQPOSP.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditReminderModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-reminder-modal", standalone: false, template: `<div class="edit-reminder-modal" *ngIf="isOpen()" (click)="onCancel()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">{{ translate('reminders.edit_reminder') }}</h3>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
    \r
    <div class="modal-body">\r
      <form [formGroup]="reminderForm" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
          <label for="title">{{ translate('reminders.reminder_title') }} *</label>\r
          <input\r
            type="text"\r
            id="title"\r
            formControlName="title"\r
            [placeholder]="translate('reminders.title_placeholder')"\r
            class="form-control"\r
            [class.error]="reminderForm.get('title')?.invalid && reminderForm.get('title')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('title')">\r
            {{ getFieldError('title') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="description">{{ translate('reminders.reminder_description') }}</label>\r
          <textarea\r
            id="description"\r
            formControlName="description"\r
            [placeholder]="translate('reminders.description_placeholder')"\r
            class="form-control"\r
            rows="3"\r
          ></textarea>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="eventTime">{{ translate('reminders.event_time') }} *</label>\r
          <input\r
            type="datetime-local"\r
            id="eventTime"\r
            formControlName="eventTime"\r
            class="form-control"\r
            [class.error]="reminderForm.get('eventTime')?.invalid && reminderForm.get('eventTime')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('eventTime')">\r
            {{ getFieldError('eventTime') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="reminderTime">{{ translate('reminders.reminder_time') }} *</label>\r
          <input\r
            type="datetime-local"\r
            id="reminderTime"\r
            formControlName="reminderTime"\r
            class="form-control"\r
            [class.error]="reminderForm.get('reminderTime')?.invalid && reminderForm.get('reminderTime')?.touched"\r
          />\r
          <div class="error-message" *ngIf="getFieldError('reminderTime')">\r
            {{ getFieldError('reminderTime') }}\r
          </div>\r
        </div>\r
\r
        <div class="error-message" *ngIf="error()">\r
          {{ error() }}\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="onCancel()" [disabled]="loading()">\r
            {{ translate('reminders.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="loading() || reminderForm.invalid">\r
            <span *ngIf="loading()" class="spinner"></span>\r
            {{ translate('reminders.update') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/calendar/edit-reminder-modal/edit-reminder-modal.component.css */\n.edit-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-PQYQPOSP.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ReminderService }, { type: TranslationService }], { isOpen: [{
    type: Input
  }], reminder: [{
    type: Input
  }], reminderUpdated: [{
    type: Output
  }], closeModal: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditReminderModalComponent, { className: "EditReminderModalComponent", filePath: "src/app/components/calendar/edit-reminder-modal/edit-reminder-modal.component.ts", lineNumber: 13 });
})();

// src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.ts
function AllRemindersModalComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function AllRemindersModalComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "circle", 23)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 26);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadReminders());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.retry"), " ");
  }
}
function AllRemindersModalComponent_div_0_div_12_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reminder_r5.description);
  }
}
function AllRemindersModalComponent_div_0_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "h4", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AllRemindersModalComponent_div_0_div_12_div_1_p_4_Template, 2, 1, "p", 33);
    \u0275\u0275elementStart(5, "div", 34)(6, "div", 35)(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 35)(12, "span", 36);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 38)(17, "button", 39);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_12_div_1_Template_button_click_17_listener() {
      const reminder_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onEditReminder(reminder_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 40);
    \u0275\u0275element(19, "path", 41)(20, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 43);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_12_div_1_Template_button_click_21_listener() {
      const reminder_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeleteReminder(reminder_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 40);
    \u0275\u0275element(23, "polyline", 44)(24, "path", 45)(25, "line", 46)(26, "line", 47);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reminder_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reminder_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.event_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(reminder_r5.eventTime));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("reminders.reminder_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(reminder_r5.reminderTime));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("reminders.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("reminders.delete"));
  }
}
function AllRemindersModalComponent_div_0_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 50);
    \u0275\u0275element(2, "circle", 23)(3, "path", 51)(4, "line", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.no_reminders"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.no_reminders_description"));
  }
}
function AllRemindersModalComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, AllRemindersModalComponent_div_0_div_12_div_1_Template, 27, 8, "div", 28)(2, AllRemindersModalComponent_div_0_div_12_div_2_Template, 9, 2, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.reminders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reminders().length === 0);
  }
}
function AllRemindersModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "h3", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 10);
    \u0275\u0275element(7, "line", 11)(8, "line", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 13);
    \u0275\u0275template(10, AllRemindersModalComponent_div_0_div_10_Template, 4, 1, "div", 14)(11, AllRemindersModalComponent_div_0_div_11_Template, 9, 2, "div", 15)(12, AllRemindersModalComponent_div_0_div_12_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "app-edit-reminder-modal", 17);
    \u0275\u0275listener("reminderUpdated", function AllRemindersModalComponent_div_0_Template_app_edit_reminder_modal_reminderUpdated_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReminderUpdated());
    })("closeModal", function AllRemindersModalComponent_div_0_Template_app_edit_reminder_modal_closeModal_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditModalClose());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-confirmation-modal", 18);
    \u0275\u0275listener("confirm", function AllRemindersModalComponent_div_0_Template_app_confirmation_modal_confirm_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    })("cancel", function AllRemindersModalComponent_div_0_Template_app_confirmation_modal_cancel_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.all_reminders"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error() && !ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading() && !ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx_r1.showEditModal)("reminder", ctx_r1.selectedReminder());
    \u0275\u0275advance();
    \u0275\u0275property("isVisible", ctx_r1.showDeleteConfirm())("data", ctx_r1.deleteConfirmData())("isRTL", ctx_r1.isRTL);
  }
}
var AllRemindersModalComponent = class _AllRemindersModalComponent {
  reminderService;
  translationService;
  langService;
  isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : []);
  closeModal = new EventEmitter();
  reminderUpdated = new EventEmitter();
  reminders = signal([], ...ngDevMode ? [{ debugName: "reminders" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  selectedReminder = signal(null, ...ngDevMode ? [{ debugName: "selectedReminder" }] : []);
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showDeleteConfirm = signal(false, ...ngDevMode ? [{ debugName: "showDeleteConfirm" }] : []);
  reminderToDelete = signal(null, ...ngDevMode ? [{ debugName: "reminderToDelete" }] : []);
  showToast = signal(false, ...ngDevMode ? [{ debugName: "showToast" }] : []);
  constructor(reminderService, translationService, langService) {
    this.reminderService = reminderService;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.loadReminders();
  }
  get isRTL() {
    return this.langService.isRTL();
  }
  ngOnChanges(changes) {
    if (changes["isOpen"] && this.isOpen()) {
      this.loadReminders();
    }
  }
  // Also load reminders when the modal becomes visible
  ngAfterViewInit() {
    if (this.isOpen()) {
      this.loadReminders();
    }
  }
  // Add a method to be called when modal opens
  onModalOpen() {
    this.loadReminders();
  }
  loadReminders() {
    this.loading.set(true);
    this.error.set(null);
    this.reminderService.getMyReminders().subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success && response.data) {
          const remindersArray = Array.isArray(response.data) ? response.data : [response.data];
          this.reminders.set(remindersArray);
        } else {
          this.reminders.set([]);
        }
      },
      error: (error) => {
        this.loading.set(false);
        console.error("Error loading reminders:", error);
        this.error.set(this.translate("reminders.load_error"));
      }
    });
  }
  onEditReminder(reminder) {
    this.selectedReminder.set(reminder);
    this.showEditModal.set(true);
  }
  onDeleteReminder(reminder) {
    this.reminderToDelete.set(reminder);
    this.showDeleteConfirm.set(true);
  }
  confirmDelete() {
    const reminder = this.reminderToDelete();
    if (reminder) {
      this.loading.set(true);
      this.reminderService.deleteReminder(reminder.id).subscribe({
        next: (response) => {
          this.loading.set(false);
          if (response.success) {
            this.reminders.update((reminders) => reminders.filter((r) => r.id !== reminder.id));
            this.reminderUpdated.emit();
            this.showDeleteConfirm.set(false);
            this.reminderToDelete.set(null);
            this.showSuccessToast();
          } else {
            this.error.set(response.message || this.translate("reminders.delete_error"));
          }
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error deleting reminder:", error);
          this.error.set(this.translate("reminders.delete_error"));
        }
      });
    }
  }
  cancelDelete() {
    this.showDeleteConfirm.set(false);
    this.reminderToDelete.set(null);
  }
  onReminderUpdated() {
    this.loadReminders();
    this.reminderUpdated.emit();
    this.showEditModal.set(false);
    this.selectedReminder.set(null);
  }
  // Public method to refresh reminders
  refreshReminders() {
    this.loadReminders();
  }
  onEditModalClose() {
    this.showEditModal.set(false);
    this.selectedReminder.set(null);
  }
  onClose() {
    this.closeModal.emit();
  }
  formatDateTime(dateString) {
    if (!dateString)
      return "";
    let date;
    if (dateString.includes("Z") || dateString.includes("+") || dateString.includes("-", 10)) {
      date = new Date(dateString);
    } else {
      date = new Date(dateString);
    }
    return date.toLocaleString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  deleteConfirmData() {
    const reminder = this.reminderToDelete();
    return {
      title: this.translate("reminders.confirm_delete"),
      message: reminder ? `${this.translate("reminders.confirm_delete_message")} "${reminder.title}"?` : this.translate("reminders.confirm_delete_message"),
      confirmText: this.translate("reminders.delete"),
      cancelText: this.translate("reminders.cancel"),
      type: "delete"
    };
  }
  showSuccessToast() {
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
    }, 3e3);
  }
  static \u0275fac = function AllRemindersModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AllRemindersModalComponent)(\u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllRemindersModalComponent, selectors: [["app-all-reminders-modal"]], inputs: { isOpen: "isOpen" }, outputs: { closeModal: "closeModal", reminderUpdated: "reminderUpdated" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 6, vars: 6, consts: [["class", "all-reminders-modal", 3, "click", 4, "ngIf"], [1, "toast-notification"], [1, "toast-content"], [1, "fas", "fa-check-circle", "toast-icon"], [1, "toast-message"], [1, "all-reminders-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "reminders-list", 4, "ngIf"], [3, "reminderUpdated", "closeModal", "isOpen", "reminder"], [3, "confirm", "cancel", "isVisible", "data", "isRTL"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "reminders-list"], ["class", "reminder-item", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "reminder-item"], [1, "reminder-content"], [1, "reminder-title"], ["class", "reminder-description", 4, "ngIf"], [1, "reminder-dates"], [1, "date-item"], [1, "date-label"], [1, "date-value"], [1, "reminder-actions"], [1, "action-btn", "edit-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "action-btn", "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "reminder-description"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"]], template: function AllRemindersModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AllRemindersModalComponent_div_0_Template, 15, 9, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showToast())("rtl", ctx.isRTL);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("reminders.delete_success"));
    }
  }, dependencies: [NgForOf, NgIf, ConfirmationModalComponent, EditReminderModalComponent], styles: ['\n\n.all-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px !important;\n  box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 6px 8px -4px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 1200px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px 8px 0px 0px !important;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  text-align: center;\n  flex: 1;\n  height: 100%;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 10px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  width: 32px;\n  height: 32px;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 6px 12px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.65rem;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.reminders-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 4px;\n}\n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s;\n  min-height: 120px;\n  max-height: 180px;\n}\n.reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 10px;\n}\n.reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #111827;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #6b7280;\n  font-size: 0.65rem;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: calc(1.3em * 2);\n}\n.reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.6rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.date-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  min-width: auto;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: visible;\n}\n.action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  stroke: currentColor;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.edit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AF5F 0%,\n      #B68A35 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n}\n.action-btn[data-tooltip][_ngcontent-%COMP%]::before, \n.action-btn[data-tooltip][_ngcontent-%COMP%]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  z-index: 1000;\n}\n.action-btn[data-tooltip][_ngcontent-%COMP%]::before {\n  content: attr(data-tooltip);\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-5px);\n  margin-bottom: 8px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(30, 30, 30, 0.95) 100%);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 6px;\n  white-space: nowrap;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  letter-spacing: 0.3px;\n}\n.action-btn[data-tooltip][_ngcontent-%COMP%]::after {\n  content: "";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-2px);\n  margin-bottom: 2px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.95);\n}\n.action-btn[data-tooltip][_ngcontent-%COMP%]:hover::before, \n.action-btn[data-tooltip][_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 12px;\n  text-align: center;\n  color: #6b7280;\n  flex: 1;\n  height: 100%;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #d1d5db;\n  width: 48px;\n  height: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.3;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 5px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 10px;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.toast-notification[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  max-width: 350px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n  transform: translateX(100%);\n}\n.toast-notification.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.toast-notification.rtl[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n  transform: translateX(-100%);\n}\n.toast-notification.rtl.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.toast-content[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  padding: 10px 14px;\n  border-radius: 6px;\n  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 5px -2px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: white;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    max-width: 900px;\n    max-height: 90vh;\n    margin: 12px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 8px;\n    max-width: none;\n    max-height: 90vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 10px;\n  }\n  .reminder-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n  .reminder-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 3px 6px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 5px;\n  }\n  .reminder-item[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n    min-width: 0 !important;\n  }\n  .reminder-item[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    margin-bottom: 6px;\n  }\n  .reminder-dates[_ngcontent-%COMP%] {\n    gap: 2px;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .date-label[_ngcontent-%COMP%] {\n    min-width: 70px;\n  }\n  .reminder-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 6px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    padding: 0;\n  }\n  .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    max-height: 85vh;\n    max-width: 95vw !important;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .date-label[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n    padding: 0;\n  }\n  .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 24px 12px;\n  }\n  .empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-Y6U7TXRA.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllRemindersModalComponent, [{
    type: Component,
    args: [{ selector: "app-all-reminders-modal", standalone: false, template: `<div class="all-reminders-modal" *ngIf="isOpen()" (click)="onClose()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">{{ translate('reminders.all_reminders') }}</h3>\r
      <button class="close-btn" (click)="onClose()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
    \r
    <div class="modal-body">\r
      <!-- Loading State -->\r
      <div class="loading-state" *ngIf="loading()">\r
        <div class="spinner"></div>\r
        <p>{{ translate('common.loading') }}</p>\r
      </div>\r
\r
      <!-- Error State -->\r
      <div class="error-state" *ngIf="error() && !loading()">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="15" y1="9" x2="9" y2="15"></line>\r
          <line x1="9" y1="9" x2="15" y2="15"></line>\r
        </svg>\r
        <p>{{ error() }}</p>\r
        <button class="retry-btn" (click)="loadReminders()">\r
          {{ translate('common.retry') }}\r
        </button>\r
      </div>\r
\r
      <!-- Reminders List -->\r
      <div class="reminders-list" *ngIf="!loading() && !error()">\r
        <div class="reminder-item" *ngFor="let reminder of reminders()">\r
          <div class="reminder-content">\r
            <h4 class="reminder-title">{{ reminder.title }}</h4>\r
            <p class="reminder-description" *ngIf="reminder.description">{{ reminder.description }}</p>\r
            <div class="reminder-dates">\r
              <div class="date-item">\r
                <span class="date-label">{{ translate('reminders.event_time') }}:</span>\r
                <span class="date-value">{{ formatDateTime(reminder.eventTime) }}</span>\r
              </div>\r
              <div class="date-item">\r
                <span class="date-label">{{ translate('reminders.reminder_time') }}:</span>\r
                <span class="date-value">{{ formatDateTime(reminder.reminderTime) }}</span>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="reminder-actions">\r
            <button class="action-btn edit-btn" (click)="onEditReminder(reminder)" [attr.data-tooltip]="translate('reminders.edit')">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
              </svg>\r
            </button>\r
            <button class="action-btn delete-btn" (click)="onDeleteReminder(reminder)" [attr.data-tooltip]="translate('reminders.delete')">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="3,6 5,6 21,6"></polyline>\r
                <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>\r
                <line x1="10" y1="11" x2="10" y2="17"></line>\r
                <line x1="14" y1="11" x2="14" y2="17"></line>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Empty State -->\r
        <div class="empty-state" *ngIf="reminders().length === 0">\r
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
            <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
          </svg>\r
          <h4>{{ translate('reminders.no_reminders') }}</h4>\r
          <p>{{ translate('reminders.no_reminders_description') }}</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Edit Reminder Modal -->\r
  <app-edit-reminder-modal\r
    [isOpen]="showEditModal"\r
    [reminder]="selectedReminder()"\r
    (reminderUpdated)="onReminderUpdated()"\r
    (closeModal)="onEditModalClose()"\r
  ></app-edit-reminder-modal>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-confirmation-modal\r
    [isVisible]="showDeleteConfirm()"\r
    [data]="deleteConfirmData()"\r
    [isRTL]="isRTL"\r
    (confirm)="confirmDelete()"\r
    (cancel)="cancelDelete()">\r
  </app-confirmation-modal>\r
\r
</div>\r
\r
<!-- Toast Notification - Outside modal for proper positioning -->\r
<div class="toast-notification" [class.show]="showToast()" [class.rtl]="isRTL">\r
  <div class="toast-content">\r
    <i class="fas fa-check-circle toast-icon"></i>\r
    <span class="toast-message">{{ translate('reminders.delete_success') }}</span>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.css */\n.all-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 8px !important;\n  box-shadow: 0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 6px 8px -4px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 1200px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px 8px 0px 0px !important;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 3px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  text-align: center;\n  flex: 1;\n  height: 100%;\n}\n.spinner {\n  width: 24px;\n  height: 24px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 10px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px 12px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state svg {\n  margin-bottom: 10px;\n  width: 32px;\n  height: 32px;\n}\n.retry-btn {\n  margin-top: 10px;\n  padding: 6px 12px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.65rem;\n}\n.retry-btn:hover {\n  background-color: #B68A35;\n}\n.reminders-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 4px;\n}\n.reminder-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s;\n  min-height: 120px;\n  max-height: 180px;\n}\n.reminder-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content {\n  flex: 1;\n  margin-right: 10px;\n}\n.reminder-title {\n  margin: 0 0 6px 0;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #111827;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.reminder-description {\n  margin: 0 0 8px 0;\n  color: #6b7280;\n  font-size: 0.65rem;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: calc(1.3em * 2);\n}\n.reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.6rem;\n}\n.date-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.date-value {\n  color: #6b7280;\n}\n.reminder-actions {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  min-width: auto;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: visible;\n}\n.action-btn svg {\n  width: 16px;\n  height: 16px;\n  stroke: currentColor;\n}\n.edit-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.edit-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AF5F 0%,\n      #B68A35 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.delete-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.delete-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n}\n.action-btn[data-tooltip]::before,\n.action-btn[data-tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  z-index: 1000;\n}\n.action-btn[data-tooltip]::before {\n  content: attr(data-tooltip);\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-5px);\n  margin-bottom: 8px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(30, 30, 30, 0.95) 100%);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 6px;\n  white-space: nowrap;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  letter-spacing: 0.3px;\n}\n.action-btn[data-tooltip]::after {\n  content: "";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-2px);\n  margin-bottom: 2px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.95);\n}\n.action-btn[data-tooltip]:hover::before,\n.action-btn[data-tooltip]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.action-btn:active {\n  transform: translateY(0) !important;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 12px;\n  text-align: center;\n  color: #6b7280;\n  flex: 1;\n  height: 100%;\n}\n.empty-state svg {\n  margin-bottom: 10px;\n  color: #d1d5db;\n  width: 48px;\n  height: 48px;\n}\n.empty-state h4 {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.3;\n}\n.btn {\n  padding: 6px 12px;\n  border-radius: 5px;\n  font-size: 0.65rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .reminder-item {\n  flex-direction: row-reverse;\n}\n.rtl .reminder-content {\n  margin-right: 0;\n  margin-left: 10px;\n}\n.rtl .reminder-actions {\n  flex-direction: column;\n}\n.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n.toast-notification {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  max-width: 350px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out;\n  transform: translateX(100%);\n}\n.toast-notification.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.toast-notification.rtl {\n  right: auto;\n  left: 20px;\n  transform: translateX(-100%);\n}\n.toast-notification.rtl.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(0);\n}\n.toast-content {\n  background: #10b981;\n  color: white;\n  padding: 10px 14px;\n  border-radius: 6px;\n  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.1), 0 3px 5px -2px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 500;\n}\n.toast-icon {\n  font-size: 14px;\n  color: white;\n}\n.toast-message {\n  flex: 1;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .modal-content {\n    width: 98%;\n    max-width: 900px;\n    max-height: 90vh;\n    margin: 12px;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 10px;\n  }\n  .reminders-list {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .reminder-item {\n    padding: 10px;\n  }\n  .reminder-title {\n    font-size: 0.7rem;\n  }\n  .reminder-description {\n    font-size: 0.6rem;\n  }\n  .date-item {\n    font-size: 0.55rem;\n  }\n  .action-btn {\n    width: 28px;\n    height: 28px;\n  }\n  .action-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 8px;\n    max-width: none;\n    max-height: 90vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 10px;\n  }\n  .modal-title {\n    font-size: 0.8rem;\n  }\n  .reminders-list {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .reminder-item {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 10px;\n  }\n  .reminder-content {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n  .reminder-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 6px;\n  }\n  .status-badge {\n    font-size: 0.6rem;\n    padding: 3px 6px;\n  }\n  .reminder-title {\n    font-size: 0.7rem;\n    margin-bottom: 5px;\n  }\n  .reminder-item .reminder-content {\n    min-width: 0 !important;\n  }\n  .reminder-item .reminder-content .reminder-description {\n    font-size: 0.6rem;\n    margin-bottom: 6px;\n  }\n  .reminder-dates {\n    gap: 2px;\n  }\n  .date-item {\n    font-size: 0.55rem;\n  }\n  .date-label {\n    min-width: 70px;\n  }\n  .reminder-actions {\n    flex-direction: row;\n    justify-content: flex-start;\n    gap: 6px;\n  }\n  .action-btn {\n    width: 32px;\n    height: 32px;\n    padding: 0;\n  }\n  .action-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    max-height: 85vh;\n    max-width: 95vw !important;\n  }\n  .modal-header {\n    padding: 8px 12px;\n  }\n  .modal-body {\n    padding: 8px;\n  }\n  .modal-title {\n    font-size: 0.75rem;\n  }\n  .reminders-list {\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n  .reminder-item {\n    padding: 8px;\n  }\n  .reminder-title {\n    font-size: 0.65rem;\n  }\n  .reminder-description {\n    font-size: 0.55rem;\n  }\n  .date-item {\n    font-size: 0.5rem;\n  }\n  .date-label {\n    min-width: 60px;\n  }\n  .action-btn {\n    width: 28px;\n    height: 28px;\n    padding: 0;\n  }\n  .action-btn svg {\n    width: 12px;\n    height: 12px;\n  }\n  .empty-state {\n    padding: 24px 12px;\n  }\n  .empty-state svg {\n    width: 32px;\n    height: 32px;\n  }\n  .empty-state h4 {\n    font-size: 0.75rem;\n  }\n  .empty-state p {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-Y6U7TXRA.css.map */\n'] }]
  }], () => [{ type: ReminderService }, { type: TranslationService }, { type: LangService }], { isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], reminderUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllRemindersModalComponent, { className: "AllRemindersModalComponent", filePath: "src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.ts", lineNumber: 14 });
})();

// src/app/components/calendar/calendar.component.ts
var _c0 = ["allRemindersModal"];
function CalendarComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function CalendarComponent_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewModeChange("month"));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 37);
    \u0275\u0275listener("click", function CalendarComponent_div_29_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewModeChange("week"));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 37);
    \u0275\u0275listener("click", function CalendarComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewModeChange("day"));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.viewMode() === "month");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.month"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.viewMode() === "week");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.week"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.day"), " ");
  }
}
function CalendarComponent_div_31_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r5, " ");
  }
}
function CalendarComponent_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, CalendarComponent_div_31_div_14_div_1_Template, 2, 1, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function CalendarComponent_div_31_div_16_div_4_div_1_div_9_Template(rf, ctx) {
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
    const event_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r8.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 6, event_r8.startDate, "shortTime"), " - ", \u0275\u0275pipeBind2(8, 9, event_r8.endDate, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r8.type), " ");
  }
}
function CalendarComponent_div_31_div_16_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "h4", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "rect", 20)(4, "line", 21)(5, "line", 22)(6, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275template(9, CalendarComponent_div_31_div_16_div_4_div_1_div_9_Template, 11, 12, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.events"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUserEventsForDate(day_r7));
  }
}
function CalendarComponent_div_31_div_16_div_4_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "div", 76);
    \u0275\u0275elementStart(2, "div", 77)(3, "div", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 79);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reminder_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getReminderColor(reminder_r9, 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, reminder_r9.reminderTime, "shortTime"), " ");
  }
}
function CalendarComponent_div_31_div_16_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "h4", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "circle", 12)(4, "path", 16)(5, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 73);
    \u0275\u0275template(8, CalendarComponent_div_31_div_16_div_4_div_2_div_8_Template, 8, 7, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("reminders.all_reminders"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getRemindersForDate(day_r7));
  }
}
function CalendarComponent_div_31_div_16_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 81);
    \u0275\u0275element(2, "rect", 20)(3, "line", 21)(4, "line", 22)(5, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_31_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, CalendarComponent_div_31_div_16_div_4_div_1_Template, 10, 2, "div", 59)(2, CalendarComponent_div_31_div_16_div_4_div_2_Template, 9, 2, "div", 60)(3, CalendarComponent_div_31_div_16_div_4_div_3_Template, 8, 1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(day_r7).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getRemindersForDate(day_r7).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(day_r7).length === 0 && ctx_r2.getRemindersForDate(day_r7).length === 0);
  }
}
function CalendarComponent_div_31_div_16_div_5_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", item_r10.data.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.data.title, " ");
  }
}
function CalendarComponent_div_31_div_16_div_5_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", item_r10.data.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.data.title, " ");
  }
}
function CalendarComponent_div_31_div_16_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CalendarComponent_div_31_div_16_div_5_ng_container_1_div_1_Template, 2, 2, "div", 85)(2, CalendarComponent_div_31_div_16_div_5_ng_container_1_div_2_Template, 2, 2, "div", 86);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.type === "event");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.type === "reminder");
  }
}
function CalendarComponent_div_31_div_16_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" +", ctx_r2.getTotalItemsCountForDate(day_r7) - 2, " ", ctx_r2.translate("calendar.more"), " ");
  }
}
function CalendarComponent_div_31_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, CalendarComponent_div_31_div_16_div_5_ng_container_1_Template, 3, 2, "ng-container", 83);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, CalendarComponent_div_31_div_16_div_5_div_3_Template, 2, 2, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, ctx_r2.getCombinedItemsForDate(day_r7), 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getTotalItemsCountForDate(day_r7) > 2);
  }
}
function CalendarComponent_div_31_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function CalendarComponent_div_31_div_16_Template_div_click_0_listener() {
      const day_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r7));
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "div", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CalendarComponent_div_31_div_16_div_4_Template, 4, 3, "div", 56)(5, CalendarComponent_div_31_div_16_div_5_Template, 4, 6, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("day-view-day", ctx_r2.viewMode() === "day")("today", ctx_r2.isToday(day_r7))("selected", ctx_r2.isSelectedDate(day_r7))("other-month", !ctx_r2.isCurrentMonth(day_r7));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-events", ctx_r2.getUserEventsForDate(day_r7).length > 0)("has-reminders", ctx_r2.getRemindersForDate(day_r7).length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r7.getDate(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
  }
}
function CalendarComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "button", 40);
    \u0275\u0275listener("click", function CalendarComponent_div_31_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextMonth());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 41);
    \u0275\u0275element(4, "polyline", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 43)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 40);
    \u0275\u0275listener("click", function CalendarComponent_div_31_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.previousMonth());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 41);
    \u0275\u0275element(10, "polyline", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 45);
    \u0275\u0275listener("click", function CalendarComponent_div_31_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToToday());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 46);
    \u0275\u0275template(14, CalendarComponent_div_31_div_14_Template, 2, 1, "div", 47);
    \u0275\u0275elementStart(15, "div", 48);
    \u0275\u0275template(16, CalendarComponent_div_31_div_16_Template, 6, 15, "div", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r2.monthNames[ctx_r2.currentDate().getMonth()], " ", ctx_r2.currentDate().getFullYear(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTodayFormatted(), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("day-view", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
    \u0275\u0275advance();
    \u0275\u0275classProp("day-view-days", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.calendarDays);
  }
}
function CalendarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275element(1, "app-calendar-table-view", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("events", ctx_r2.userEvents())("simpleEvents", ctx_r2.simpleEvents())("reminders", ctx_r2.reminders());
  }
}
function CalendarComponent_div_33_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar." + ctx_r2.viewMode()));
  }
}
function CalendarComponent_div_33_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("calendar.loading"), "...");
  }
}
function CalendarComponent_div_33_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.getTotalEventsCount(), " ", ctx_r2.translate("calendar.total_events"));
  }
}
function CalendarComponent_div_33_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 116);
    \u0275\u0275element(4, "rect", 20)(5, "line", 21)(6, "line", 22)(7, "line", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 117)(9, "span", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 119);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 120)(14, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 116);
    \u0275\u0275element(16, "path", 121)(17, "path", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 117)(19, "span", 118);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 119);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 123)(24, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 116);
    \u0275\u0275element(26, "path", 124)(27, "polyline", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 117)(29, "span", 118);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 119);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 126)(34, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 116);
    \u0275\u0275element(36, "path", 127)(37, "path", 128)(38, "path", 129);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 117)(40, "span", 118);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 119);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.getMeetingsCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.meetings"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.getTasksCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.tasks"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.getVisitsCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.visits"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.getTravelsCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.travels"));
  }
}
function CalendarComponent_div_33_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131);
    \u0275\u0275element(2, "div", 132);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.loading"));
  }
}
function CalendarComponent_div_33_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getWeekDayAbbreviation(day_r11), " ");
  }
}
function CalendarComponent_div_33_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function CalendarComponent_div_33_div_30_Template_div_click_0_listener() {
      const day_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r13));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r13))("has-events", ctx_r2.getUserEventsForDate(day_r13).length > 0 || ctx_r2.getRemindersForDate(day_r13).length > 0)("other-month", !ctx_r2.isCurrentMonth(day_r13));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r13.getDate(), " ");
  }
}
function CalendarComponent_div_33_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 67);
    \u0275\u0275elementStart(5, "div", 135)(6, "div", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, event_r14.reminderTime || event_r14.startDate, "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r14.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r14.type));
  }
}
function CalendarComponent_div_33_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "div", 135)(2, "div", 137);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 70);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 138);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, reminder_r15.title, 0, 20), " ", reminder_r15.title.length > 20 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, reminder_r15.reminderTime, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("reminders.reminder"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getReminderColor(reminder_r15, 0));
  }
}
function CalendarComponent_div_33_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 139);
    \u0275\u0275element(2, "rect", 20)(3, "line", 21)(4, "line", 22)(5, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "h3");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 95);
    \u0275\u0275element(5, "rect", 20)(6, "line", 21)(7, "line", 22)(8, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CalendarComponent_div_33_span_9_Template, 2, 1, "span", 96)(10, CalendarComponent_div_33_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CalendarComponent_div_33_span_12_Template, 2, 2, "span", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CalendarComponent_div_33_div_13_Template, 44, 8, "div", 98)(14, CalendarComponent_div_33_ng_template_14_Template, 5, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 99)(17, "div", 100)(18, "h3");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 95);
    \u0275\u0275element(20, "rect", 20)(21, "line", 21)(22, "line", 22)(23, "line", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "span", 101);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 102)(27, "div", 103);
    \u0275\u0275template(28, CalendarComponent_div_33_div_28_Template, 2, 1, "div", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 105);
    \u0275\u0275template(30, CalendarComponent_div_33_div_30_Template, 2, 7, "div", 106);
    \u0275\u0275pipe(31, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 107)(33, "div", 100)(34, "h3");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 95);
    \u0275\u0275element(36, "circle", 12)(37, "polyline", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "span", 101);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "span", 109);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 110);
    \u0275\u0275template(43, CalendarComponent_div_33_div_43_Template, 10, 8, "div", 65)(44, CalendarComponent_div_33_div_44_Template, 11, 13, "div", 111)(45, CalendarComponent_div_33_div_45_Template, 8, 1, "div", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const loadingPeriod_r16 = \u0275\u0275reference(11);
    const loadingStats_r17 = \u0275\u0275reference(15);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r2.statsLoading())("ngIfElse", loadingPeriod_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.statsLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.statsLoading())("ngIfElse", loadingStats_r17);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.mini_calendar"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(31, 13, ctx_r2.calendarDays, 0, 35));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.todays_events"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getUserEventsForDate(ctx_r2.getToday()).length + ctx_r2.getRemindersForDate(ctx_r2.getToday()).length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUserEventsForDate(ctx_r2.getToday()));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getRemindersForDate(ctx_r2.getToday()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(ctx_r2.getToday()).length === 0 && ctx_r2.getRemindersForDate(ctx_r2.getToday()).length === 0);
  }
}
function CalendarComponent_div_34_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 170);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r20.description, " ");
  }
}
function CalendarComponent_div_34_div_12_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 171);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.location"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r20.location);
  }
}
function CalendarComponent_div_34_div_12_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 172);
    \u0275\u0275text(2, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 173);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.online_url"));
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275interpolate(event_r20.onlineUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r20.onlineUrl);
  }
}
function CalendarComponent_div_34_div_12_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 174);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.organizer"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r20.organizerName);
  }
}
function CalendarComponent_div_34_div_12_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 175);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.assignee"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r20.assigneeName);
  }
}
function CalendarComponent_div_34_div_12_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 176);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r20.departmentName);
  }
}
function CalendarComponent_div_34_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 149)(2, "h4", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CalendarComponent_div_34_div_12_p_4_Template, 2, 1, "p", 150);
    \u0275\u0275elementStart(5, "div", 151)(6, "div", 152)(7, "div", 153);
    \u0275\u0275text(8, "\u{1F552}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 154)(10, "span", 155);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 156);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, CalendarComponent_div_34_div_12_div_16_Template, 8, 2, "div", 157)(17, CalendarComponent_div_34_div_12_div_17_Template, 8, 4, "div", 157)(18, CalendarComponent_div_34_div_12_div_18_Template, 8, 2, "div", 157)(19, CalendarComponent_div_34_div_12_div_19_Template, 8, 2, "div", 157)(20, CalendarComponent_div_34_div_12_div_20_Template, 8, 2, "div", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 158)(22, "div", 159)(23, "div", 160)(24, "span", 161);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 162)(27, "span", 163);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 164)(30, "button", 165);
    \u0275\u0275listener("click", function CalendarComponent_div_34_div_12_Template_button_click_30_listener() {
      const event_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigateToEventDetails(event_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 11);
    \u0275\u0275element(32, "path", 166)(33, "circle", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "div", 168)(36, "span", 169);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const event_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", "#B68A35")("color", "white");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r20.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r20.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(14, 24, event_r20.startDate, "short"), " - ", \u0275\u0275pipeBind2(15, 27, event_r20.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r20.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r20.onlineUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r20.organizerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r20.assigneeName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r20.departmentName);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background-color", event_r20.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r20.type));
    \u0275\u0275advance();
    \u0275\u0275classMap("priority-" + event_r20.priority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPriorityLabel(event_r20.priority));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.view_details"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getEventStatusColor(event_r20.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventStatusLabel(event_r20.status));
  }
}
function CalendarComponent_div_34_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 142)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 143);
    \u0275\u0275listener("click", function CalendarComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 41);
    \u0275\u0275element(8, "line", 144)(9, "line", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 146)(11, "div", 64);
    \u0275\u0275template(12, CalendarComponent_div_34_div_12_Template, 38, 30, "div", 147)(13, CalendarComponent_div_34_div_13_Template, 3, 1, "div", 61);
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
function CalendarComponent_div_35_div_11_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 170);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r23.description, " ");
  }
}
function CalendarComponent_div_35_div_11_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 171);
    \u0275\u0275text(2, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.location"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r23.location);
  }
}
function CalendarComponent_div_35_div_11_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 172);
    \u0275\u0275text(2, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 173);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.online_url"));
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275interpolate(event_r23.onlineUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r23.onlineUrl);
  }
}
function CalendarComponent_div_35_div_11_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 174);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.organizer"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r23.organizerName);
  }
}
function CalendarComponent_div_35_div_11_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 175);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.assignee"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r23.assigneeName);
  }
}
function CalendarComponent_div_35_div_11_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 176);
    \u0275\u0275text(2, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 154)(4, "span", 155);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 156);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r23.departmentName);
  }
}
function CalendarComponent_div_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 179)(2, "div", 160)(3, "span", 161);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 162)(6, "span", 163);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 149)(9, "h4", 69);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CalendarComponent_div_35_div_11_p_11_Template, 2, 1, "p", 150);
    \u0275\u0275elementStart(12, "div", 151)(13, "div", 152)(14, "div", 153);
    \u0275\u0275text(15, "\u{1F552}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 154)(17, "span", 155);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 156);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, CalendarComponent_div_35_div_11_div_23_Template, 8, 2, "div", 157)(24, CalendarComponent_div_35_div_11_div_24_Template, 8, 4, "div", 157)(25, CalendarComponent_div_35_div_11_div_25_Template, 8, 2, "div", 157)(26, CalendarComponent_div_35_div_11_div_26_Template, 8, 2, "div", 157)(27, CalendarComponent_div_35_div_11_div_27_Template, 8, 2, "div", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 158)(29, "button", 165);
    \u0275\u0275listener("click", function CalendarComponent_div_35_div_11_Template_button_click_29_listener() {
      const event_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigateToEventDetails(event_r23));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 180);
    \u0275\u0275element(31, "path", 166)(32, "circle", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 168)(35, "span", 169);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r23.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r23.type));
    \u0275\u0275advance();
    \u0275\u0275classMap("priority-" + event_r23.priority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getPriorityLabel(event_r23.priority));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r23.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r23.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(21, 20, event_r23.startDate, "short"), " - ", \u0275\u0275pipeBind2(22, 23, event_r23.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", event_r23.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r23.onlineUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r23.organizerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r23.assigneeName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r23.departmentName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.view_details"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getEventStatusColor(event_r23.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventStatusLabel(event_r23.status));
  }
}
function CalendarComponent_div_35_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_found"));
  }
}
function CalendarComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 142)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 143);
    \u0275\u0275listener("click", function CalendarComponent_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 178);
    \u0275\u0275element(7, "line", 144)(8, "line", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 146)(10, "div", 64);
    \u0275\u0275template(11, CalendarComponent_div_35_div_11_Template, 37, 26, "div", 65)(12, CalendarComponent_div_35_div_12_Template, 3, 1, "div", 61);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl", ctx_r2.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.all_my_events"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.userEvents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userEvents().length === 0);
  }
}
function CalendarComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "div", 131);
    \u0275\u0275element(2, "div", 132);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.loading"));
  }
}
function CalendarComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "div", 183);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 180);
    \u0275\u0275element(3, "circle", 12)(4, "line", 184)(5, "line", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 186);
    \u0275\u0275listener("click", function CalendarComponent_div_37_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retryLoadEvents());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.retry"), " ");
  }
}
function CalendarComponent_div_41_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 203);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reminder_r27.description, " ");
  }
}
function CalendarComponent_div_41_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 189)(2, "h4", 78);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CalendarComponent_div_41_div_12_p_4_Template, 2, 1, "p", 190);
    \u0275\u0275elementStart(5, "div", 191)(6, "div", 192)(7, "span", 193);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 194);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 192)(12, "span", 193);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 194);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 9)(17, "button", 195);
    \u0275\u0275listener("click", function CalendarComponent_div_41_div_12_Template_button_click_17_listener() {
      const reminder_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEditDayReminder(reminder_r27));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 180);
    \u0275\u0275element(19, "path", 196)(20, "path", 197);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 198);
    \u0275\u0275listener("click", function CalendarComponent_div_41_div_12_Template_button_click_21_listener() {
      const reminder_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDeleteDayReminder(reminder_r27));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 180);
    \u0275\u0275element(23, "polyline", 199)(24, "path", 200)(25, "line", 201)(26, "line", 202);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const reminder_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r27.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reminder_r27.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.event_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r27.eventTime));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.reminder_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r27.reminderTime));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-tooltip", ctx_r2.translate("reminders.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-tooltip", ctx_r2.translate("reminders.delete"));
  }
}
function CalendarComponent_div_41_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 204);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 139);
    \u0275\u0275element(2, "circle", 12)(3, "path", 16)(4, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.translate("reminders.no_reminders"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("reminders.no_reminders_description"));
  }
}
function CalendarComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275listener("click", function CalendarComponent_div_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275elementStart(1, "div", 141);
    \u0275\u0275listener("click", function CalendarComponent_div_41_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 142)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 143);
    \u0275\u0275listener("click", function CalendarComponent_div_41_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 178);
    \u0275\u0275element(8, "line", 144)(9, "line", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 146)(11, "div", 73);
    \u0275\u0275template(12, CalendarComponent_div_41_div_12_Template, 27, 8, "div", 74)(13, CalendarComponent_div_41_div_13_Template, 9, 2, "div", 188);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, ctx_r2.selectedDayDate(), "fullDate"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.selectedDayReminders());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDayReminders().length === 0);
  }
}
var CalendarComponent = class _CalendarComponent {
  calendarService;
  calendarStatsService;
  translationService;
  langService;
  reminderService;
  router;
  // Signals for reactive state management
  userEvents = signal([], ...ngDevMode ? [{ debugName: "userEvents" }] : []);
  simpleEvents = signal([], ...ngDevMode ? [{ debugName: "simpleEvents" }] : []);
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
  displayMode = signal("calendar", ...ngDevMode ? [{ debugName: "displayMode" }] : []);
  showAllUserEventsModal = signal(false, ...ngDevMode ? [{ debugName: "showAllUserEventsModal" }] : []);
  // Calendar data
  calendarDays = [];
  weekDays = [];
  monthNames = [];
  // Reminder management
  reminders = signal([], ...ngDevMode ? [{ debugName: "reminders" }] : []);
  showAddReminderModal = signal(false, ...ngDevMode ? [{ debugName: "showAddReminderModal" }] : []);
  showAllRemindersModal = signal(false, ...ngDevMode ? [{ debugName: "showAllRemindersModal" }] : []);
  showDayRemindersModal = signal(false, ...ngDevMode ? [{ debugName: "showDayRemindersModal" }] : []);
  selectedDayReminders = signal([], ...ngDevMode ? [{ debugName: "selectedDayReminders" }] : []);
  selectedDayDate = signal(null, ...ngDevMode ? [{ debugName: "selectedDayDate" }] : []);
  showEditDayReminderModal = signal(false, ...ngDevMode ? [{ debugName: "showEditDayReminderModal" }] : []);
  editingDayReminder = signal(null, ...ngDevMode ? [{ debugName: "editingDayReminder" }] : []);
  showDeleteDayReminderConfirm = signal(false, ...ngDevMode ? [{ debugName: "showDeleteDayReminderConfirm" }] : []);
  reminderToDelete = signal(null, ...ngDevMode ? [{ debugName: "reminderToDelete" }] : []);
  // Calendar stats
  calendarStats = signal(null, ...ngDevMode ? [{ debugName: "calendarStats" }] : []);
  statsLoading = signal(false, ...ngDevMode ? [{ debugName: "statsLoading" }] : []);
  allRemindersModal;
  subscriptions = [];
  constructor(calendarService, calendarStatsService, translationService, langService, reminderService, router) {
    this.calendarService = calendarService;
    this.calendarStatsService = calendarStatsService;
    this.translationService = translationService;
    this.langService = langService;
    this.reminderService = reminderService;
    this.router = router;
  }
  ngOnInit() {
    this.initializeCalendar();
    this.loadEvents();
    this.loadReminders();
    this.loadCalendarStats();
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
      this.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
  }
  // Method to get weekday abbreviations for mini calendar
  // Always return English abbreviations for mini calendar regardless of language
  getWeekDayAbbreviation(dayName) {
    const arabicToEnglish = {
      "\u0627\u0644\u0623\u062D\u062F": "Sun",
      "\u0627\u0644\u0627\u062B\u0646\u064A\u0646": "Mon",
      "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621": "Tue",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621": "Wed",
      "\u0627\u0644\u062E\u0645\u064A\u0633": "Thu",
      "\u0627\u0644\u062C\u0645\u0639\u0629": "Fri",
      "\u0627\u0644\u0633\u0628\u062A": "Sat"
    };
    if (arabicToEnglish[dayName]) {
      return arabicToEnglish[dayName];
    }
    return dayName.substring(0, 3);
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
    if (this.displayMode() === "table") {
      this.loadSimpleEvents();
    } else {
      this.loadRegularEvents();
    }
  }
  loadSimpleEvents() {
    const simpleEventsSub = this.calendarService.getUserEventsSimple().subscribe({
      next: (response) => {
        if (response.success) {
          this.simpleEvents.set(response.data.events);
          this.userEvents.set([]);
          this.systemEvents.set([]);
          this.updateFilteredEvents();
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading simple events:", error);
        this.error.set("Failed to load events");
        this.loading.set(false);
        this.loadRegularEvents();
      }
    });
    this.subscriptions.push(simpleEventsSub);
  }
  loadRegularEvents() {
    const userEventsSub = this.calendarService.getUserEvents().subscribe({
      next: (response) => {
        if (response.success) {
          const eventsWithColors = response.data.map((event) => __spreadProps(__spreadValues({}, event), {
            color: this.getEventTypeColor(event.type)
          }));
          this.userEvents.set(eventsWithColors);
          this.simpleEvents.set([]);
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
  }
  updateFilteredEvents() {
    let filtered = this.userEvents();
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
    const dayReminders = this.getRemindersForDate(date);
    if (dayReminders.length > 0) {
      this.selectedDayReminders.set(dayReminders);
      this.selectedDayDate.set(date);
      this.showDayRemindersModal.set(true);
    }
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
    this.loadCalendarStats();
  }
  onDisplayModeChange(mode) {
    this.displayMode.set(mode);
    this.loadEvents();
  }
  viewAllUserEvents(event) {
    event.preventDefault();
    event.stopPropagation();
    this.showAllUserEventsModal.set(true);
  }
  closeAllUserEventsModal() {
    this.showAllUserEventsModal.set(false);
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
  getUserEventsForDate(date) {
    const dateStr = this.formatDateForComparison(date);
    return this.userEvents().filter((event) => {
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
    const key = this.calendarService.getEventTypeLabel(type);
    return this.translate(key);
  }
  getEventStatusLabel(status) {
    const key = this.calendarService.getEventStatusLabel(status);
    return this.translate(key);
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
  // Reminder management methods
  loadReminders() {
    this.reminderService.getMyReminders().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const remindersArray = Array.isArray(response.data) ? response.data : [response.data];
          this.reminders.set(remindersArray);
        } else {
          this.reminders.set([]);
        }
      },
      error: (error) => {
        console.error("Error loading reminders:", error);
        this.reminders.set([]);
      }
    });
  }
  openAddReminderModal() {
    this.showAddReminderModal.set(true);
  }
  closeAddReminderModal() {
    this.showAddReminderModal.set(false);
  }
  onReminderCreated() {
    this.loadReminders();
  }
  openAllRemindersModal() {
    this.showAllRemindersModal.set(true);
    this.loadReminders();
    setTimeout(() => {
      if (this.allRemindersModal) {
        this.allRemindersModal.refreshReminders();
      }
    }, 100);
  }
  closeAllRemindersModal() {
    this.showAllRemindersModal.set(false);
  }
  onReminderUpdated() {
    this.loadReminders();
  }
  getRemindersForDate(date) {
    const dateStr = this.formatDateForComparison(date);
    return this.reminders().filter((reminder) => {
      const reminderDate = this.formatDateForComparison(new Date(reminder.reminderTime));
      return reminderDate === dateStr;
    });
  }
  hasRemindersForDate(date) {
    return this.getRemindersForDate(date).length > 0;
  }
  getReminderColor(reminder, index) {
    return "#86888A";
  }
  // Day reminders modal methods
  closeDayRemindersModal() {
    this.showDayRemindersModal.set(false);
    this.selectedDayReminders.set([]);
    this.selectedDayDate.set(null);
  }
  onEditDayReminder(reminder) {
    this.editingDayReminder.set(reminder);
    this.showEditDayReminderModal.set(true);
  }
  closeEditDayReminderModal() {
    this.showEditDayReminderModal.set(false);
    this.editingDayReminder.set(null);
  }
  onDeleteDayReminder(reminder) {
    this.reminderToDelete.set(reminder);
    this.showDeleteDayReminderConfirm.set(true);
  }
  cancelDeleteDayReminder() {
    this.showDeleteDayReminderConfirm.set(false);
    this.reminderToDelete.set(null);
  }
  confirmDeleteDayReminder() {
    const reminder = this.reminderToDelete();
    if (!reminder) {
      return;
    }
    this.reminderService.deleteReminder(reminder.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.onDayReminderUpdated();
        } else {
          console.error("Error deleting reminder:", response.message);
        }
        this.cancelDeleteDayReminder();
      },
      error: (error) => {
        console.error("Error deleting reminder:", error);
        this.cancelDeleteDayReminder();
      }
    });
  }
  deleteDayReminderConfirmData() {
    const reminder = this.reminderToDelete();
    return {
      title: this.translate("reminders.confirm_delete"),
      message: reminder ? `${this.translate("reminders.confirm_delete_message")} "${reminder.title}"?` : this.translate("reminders.confirm_delete_message"),
      confirmText: this.translate("reminders.delete"),
      cancelText: this.translate("reminders.cancel"),
      type: "delete"
    };
  }
  formatDateTime(dateString) {
    if (!dateString)
      return "";
    let date;
    if (dateString.includes("Z") || dateString.includes("+") || dateString.includes("-", 10)) {
      date = new Date(dateString);
    } else {
      date = new Date(dateString);
    }
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
  onDayReminderUpdated() {
    this.loadReminders();
    if (this.selectedDayDate()) {
      const dayReminders = this.getRemindersForDate(this.selectedDayDate());
      this.selectedDayReminders.set(dayReminders);
    }
    this.closeEditDayReminderModal();
  }
  // Calendar stats methods
  loadCalendarStats() {
    this.statsLoading.set(true);
    let period;
    switch (this.viewMode()) {
      case "day":
        period = CalendarPeriod.Day;
        break;
      case "week":
        period = CalendarPeriod.Week;
        break;
      case "month":
        period = CalendarPeriod.Month;
        break;
      default:
        period = CalendarPeriod.Month;
    }
    const statsSub = this.calendarStatsService.getUserCalendarStats(period).subscribe({
      next: (response) => {
        if (response.success) {
          this.calendarStats.set(response.data);
        }
        this.statsLoading.set(false);
      },
      error: (error) => {
        console.error("Error loading calendar stats:", error);
        this.statsLoading.set(false);
      }
    });
    this.subscriptions.push(statsSub);
  }
  getStatsPeriodName() {
    const stats = this.calendarStats();
    return stats ? stats.periodName : "";
  }
  getTotalEventsCount() {
    const stats = this.calendarStats();
    return stats ? stats.totalEventsCount : 0;
  }
  getMeetingsCount() {
    const stats = this.calendarStats();
    return stats ? stats.meetingsCount : 0;
  }
  getTasksCount() {
    const stats = this.calendarStats();
    return stats ? stats.tasksCount : 0;
  }
  getVisitsCount() {
    const stats = this.calendarStats();
    return stats ? stats.visitsCount : 0;
  }
  getTravelsCount() {
    const stats = this.calendarStats();
    return stats ? stats.travelsCount : 0;
  }
  // Enum getter for template
  get CalendarPeriod() {
    return CalendarPeriod;
  }
  // Helper method to get today's date for template
  getToday() {
    return /* @__PURE__ */ new Date();
  }
  // Helper method to format today's date for the today button
  getTodayFormatted() {
    const today = /* @__PURE__ */ new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    if (this.isRTL()) {
      return `${this.translate("calendar.today")} ${day}/${month + 1}/${year}`;
    } else {
      return `${this.translate("calendar.today")} ${day}/${month + 1}/${year}`;
    }
  }
  isLargeScreen() {
    return window.innerWidth > 991;
  }
  getAdditionalEventsColor(day) {
    const userEvents = this.getUserEventsForDate(day);
    const reminders = this.getRemindersForDate(day);
    const visibleUserEvents = userEvents.slice(0, 3);
    const visibleReminders = reminders.slice(0, 3);
    if (visibleReminders.length > 0) {
      return "#86888A";
    }
    if (visibleUserEvents.length > 0) {
      return "#7C5E24";
    }
    return "#86888A";
  }
  // Combine events and reminders for a date (max 3 total)
  getCombinedItemsForDate(date) {
    const events = this.getUserEventsForDate(date);
    const reminders = this.getRemindersForDate(date);
    const combined = [];
    events.forEach((event) => {
      combined.push({ type: "event", data: event });
    });
    reminders.forEach((reminder) => {
      combined.push({ type: "reminder", data: reminder });
    });
    return combined;
  }
  // Get total count of events and reminders for a date
  getTotalItemsCountForDate(date) {
    const events = this.getUserEventsForDate(date);
    const reminders = this.getRemindersForDate(date);
    return events.length + reminders.length;
  }
  // Navigate to event details page based on event type
  navigateToEventDetails(event) {
    const eventType = event.eventTypeName;
    const entityId = event.originalEntityId;
    switch (eventType) {
      case EventType.Meeting:
        this.router.navigate(["/meetings/details", entityId]);
        break;
      case EventType.Task:
        this.router.navigate(["/tasks/details", entityId]);
        break;
      case EventType.Visit:
        this.router.navigate(["/visits/details", entityId]);
        break;
      case EventType.Travel:
        this.router.navigate(["/travel/details", entityId]);
        break;
      default:
        console.warn("Unknown event type:", eventType);
    }
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(CalendarStatsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.allRemindersModal = _t.first);
    }
  }, standalone: false, decls: 42, vars: 20, consts: [["allRemindersModal", ""], ["loadingPeriod", ""], ["loadingStats", ""], [1, "modern-calendar-container", "rounded-4"], [1, "calendar-header"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "reminder-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "display-mode-toggle"], [1, "display-btn", 3, "click"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["class", "view-mode-toggle", 4, "ngIf"], [1, "main-content"], ["class", "main-calendar-section", 4, "ngIf"], ["class", "main-table-section", 4, "ngIf"], ["class", "sidebar-section", 4, "ngIf"], ["class", "event-details-modal", 3, "click", 4, "ngIf"], ["class", "all-user-events-modal", 3, "click", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [3, "reminderCreated", "closeModal", "isOpen"], [3, "reminderUpdated", "closeModal", "isOpen"], ["class", "day-reminders-modal", 3, "click", 4, "ngIf"], [1, "view-mode-toggle"], [1, "view-btn", 3, "click"], [1, "main-calendar-section"], [1, "calendar-navigation", "ltr"], [1, "nav-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "current-month"], ["points", "9,18 15,12 9,6"], [1, "today-btn", 3, "click"], [1, "calendar-grid"], ["class", "week-days", 4, "ngIf"], [1, "calendar-days"], ["class", "calendar-day", 3, "day-view-day", "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "week-day"], [1, "calendar-day", 3, "click"], [1, "day-header"], [1, "day-number"], ["class", "day-view-content", 4, "ngIf"], ["class", "day-event-titles", 4, "ngIf"], [1, "day-view-content"], ["class", "day-events-section", 4, "ngIf"], ["class", "day-reminders-section", 4, "ngIf"], ["class", "no-events", 4, "ngIf"], [1, "day-events-section"], [1, "section-title"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], [1, "event-item"], [1, "event-dot"], [1, "event-details"], [1, "event-title"], [1, "event-time"], [1, "event-type"], [1, "day-reminders-section"], [1, "reminders-list"], ["class", "reminder-item", 4, "ngFor", "ngForOf"], [1, "reminder-item"], [1, "reminder-dot"], [1, "reminder-details"], [1, "reminder-title"], [1, "reminder-time"], [1, "no-events"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "day-event-titles"], [4, "ngFor", "ngForOf"], ["class", "more-events-indicator", 4, "ngIf"], ["class", "event-title user-event-title", 3, "title", 4, "ngIf"], ["class", "event-title reminder-event-title", 3, "title", 4, "ngIf"], [1, "event-title", "user-event-title", 3, "title"], [1, "event-title", "reminder-event-title", 3, "title"], [1, "more-events-indicator"], [1, "main-table-section"], [3, "events", "simpleEvents", "reminders"], [1, "sidebar-section"], [1, "calendar-stats-widget"], [1, "stats-header"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "margin-right", "5px"], ["class", "px-2", 4, "ngIf", "ngIfElse"], ["class", "total-events", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf", "ngIfElse"], [1, "mini-calendar-widget"], [1, "widget-header"], [1, "px-2"], [1, "mini-calendar"], [1, "mini-week-days"], ["class", "mini-week-day", 4, "ngFor", "ngForOf"], [1, "mini-calendar-days"], ["class", "mini-calendar-day", 3, "today", "has-events", "other-month", "click", 4, "ngFor", "ngForOf"], [1, "todays-events-widget"], ["points", "12,6 12,12 16,14"], [1, "event-count"], [1, "todays-events-list"], ["class", "event-item reminder-item", 4, "ngFor", "ngForOf"], [1, "total-events"], [1, "stats-grid"], [1, "stat-item", "meetings"], [1, "stat-icon"], ["width", "10", "height", "10", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "stat-info"], [1, "stat-count"], [1, "stat-label"], [1, "stat-item", "tasks"], ["d", "M9 11l3 3L22 4"], ["d", "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"], [1, "stat-item", "visits"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], [1, "stat-item", "travels"], ["d", "M12 2L2 7l10 5 10-5-10-5z"], ["d", "M2 17l10 5 10-5"], ["d", "M2 12l10 5 10-5"], [1, "stats-loading"], [1, "loading-spinner"], [1, "spinner"], [1, "mini-week-day"], [1, "mini-calendar-day", 3, "click"], [1, "event-info"], [1, "event-item", "reminder-item"], [1, "event-title-mini"], [1, "event-dot", "reminder-dot"], ["width", "21", "height", "21", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "event-details-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], ["class", "event-item event-details-item", 4, "ngFor", "ngForOf"], [1, "event-item", "event-details-item"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-details-grid"], [1, "detail-item"], [1, "detail-icon", "time-icon"], [1, "detail-content"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "event-footer"], [1, "event-header", "d-flex", "flex-row"], [1, "event-type-badge"], [1, "event-type-text"], [1, "priority-badge"], [1, "priority-text"], [1, "d-flex", "align-items-center", "gap-2"], [1, "view-details-btn", 3, "click"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "status-badge"], [1, "status-text"], [1, "event-description"], [1, "detail-icon", "location-icon"], [1, "detail-icon", "online-icon"], ["target", "_blank", 1, "detail-value", "link", 3, "href"], [1, "detail-icon", "organizer-icon"], [1, "detail-icon", "assignee-icon"], [1, "detail-icon", "department-icon"], [1, "all-user-events-modal", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "event-header"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "loading-overlay"], [1, "error-message"], [1, "error-content"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "day-reminders-modal", 3, "click"], ["class", "no-reminders", 4, "ngIf"], [1, "reminder-content"], ["class", "reminder-description", 4, "ngIf"], [1, "reminder-dates"], [1, "date-item"], [1, "date-label"], [1, "date-value"], [1, "action-btn", "edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "action-btn", "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "reminder-description"], [1, "no-reminders"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h1", 6);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 7);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 8)(8, "div", 9)(9, "button", 10);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddReminderModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 11);
      \u0275\u0275element(11, "circle", 12)(12, "line", 13)(13, "line", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "button", 15);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAllRemindersModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 11);
      \u0275\u0275element(17, "circle", 12)(18, "path", 16)(19, "line", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 18)(22, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDisplayModeChange("calendar"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 11);
      \u0275\u0275element(24, "rect", 20)(25, "line", 21)(26, "line", 22)(27, "line", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, CalendarComponent_div_29_Template, 7, 9, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "div", 25);
      \u0275\u0275template(31, CalendarComponent_div_31_Template, 17, 9, "div", 26)(32, CalendarComponent_div_32_Template, 2, 3, "div", 27)(33, CalendarComponent_div_33_Template, 46, 17, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, CalendarComponent_div_34_Template, 14, 6, "div", 29)(35, CalendarComponent_div_35_Template, 13, 5, "div", 30)(36, CalendarComponent_div_36_Template, 5, 1, "div", 31)(37, CalendarComponent_div_37_Template, 10, 2, "div", 32);
      \u0275\u0275elementStart(38, "app-add-reminder-modal", 33);
      \u0275\u0275listener("reminderCreated", function CalendarComponent_Template_app_add_reminder_modal_reminderCreated_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderCreated());
      })("closeModal", function CalendarComponent_Template_app_add_reminder_modal_closeModal_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAddReminderModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "app-all-reminders-modal", 34, 0);
      \u0275\u0275listener("reminderUpdated", function CalendarComponent_Template_app_all_reminders_modal_reminderUpdated_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderUpdated());
      })("closeModal", function CalendarComponent_Template_app_all_reminders_modal_closeModal_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllRemindersModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, CalendarComponent_div_41_Template, 14, 6, "div", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("calendar.my_calendar"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("calendar.subtitle"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("reminders.add_reminder"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("reminders.all_reminders"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.displayMode() === "calendar");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.title"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "calendar");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.displayMode() === "calendar");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.displayMode() === "calendar");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAllUserEventsModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showAddReminderModal);
      \u0275\u0275advance();
      \u0275\u0275property("isOpen", ctx.showAllRemindersModal);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showDayRemindersModal());
    }
  }, dependencies: [NgForOf, NgIf, CalendarTableViewComponent, AddReminderModalComponent, AllRemindersModalComponent, SlicePipe, DatePipe], styles: ['\n\n.modern-calendar-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f8f43d 0%,\n      #f0f4f12c 50%);\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 21px;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.34rem;\n  font-weight: 700;\n  color: #1b1d21;\n  margin: 0 0 3px 0;\n  line-height: 1.2;\n  position: relative;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  color: #718096;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  flex-wrap: wrap;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-right: 11px;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.58rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);\n  min-height: 28px;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  border: 2px solid #B68A35;\n  height: 100% !important;\n  line-height: 1.0;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #B68A35 100%);\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6C4527;\n  color: white;\n  border: 2px solid #6C4527;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(134, 136, 138, 0.4);\n  background: #6C4527;\n}\n.display-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  margin-right: 11px;\n}\n.display-btn[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.display-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.display-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  position: relative;\n  overflow: hidden;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 235px;\n  gap: 16px;\n  align-items: start;\n}\n.main-calendar-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.main-table-section[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  border-radius: 8px;\n  padding: 9px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: white;\n  transition: all 0.3s ease;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-count[_ngcontent-%COMP%] {\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  opacity: 0.9;\n  margin-top: 1px;\n  font-weight: 600;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .total-events[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.54rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.stats-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 27px 13px;\n}\n.stats-loading[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stats-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 8px;\n}\n.stats-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.6rem;\n}\n.stats-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 1;\n}\n.stats-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.07rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n.total-events[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 7px 12px;\n  border-radius: 17px;\n  font-size: 0.64rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 11px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 11px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.3s ease;\n  position: relative;\n  z-index: 1;\n}\n.stat-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 29px;\n  height: 29px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-count[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  line-height: 1;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.57rem;\n  opacity: 0.95;\n  margin-top: 3px;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 11px;\n  border-bottom: 2px solid #f7fafc;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29px;\n  height: 29px;\n  border: 2px solid #e2e8f0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #718096;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1b1d21;\n  text-align: center;\n  position: relative;\n}\n.today-btn[_ngcontent-%COMP%] {\n  padding: 8px 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white !important;\n  border: 1px solid #B68A35;\n  color: #ffffff;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  min-width: 107px;\n  white-space: nowrap;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 11px 5px;\n  text-align: center;\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.6rem;\n  background: #f7fafc;\n  border-radius: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 2px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 80px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  overflow: hidden;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f7fafc;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #B68A35;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border-color: #B68A35;\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  background: #92722A !important;\n  color: white !important;\n  margin: 3px;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border-color: #1b1d21;\n  box-shadow: 0 4px 15px rgba(27, 29, 33, 0.3);\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #f7fafc;\n  color: #a0aec0;\n  opacity: 0.6;\n}\n.day-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 5px;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.67rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  background: #f7fafc;\n  color: #4a5568;\n}\n.day-number.has-events[_ngcontent-%COMP%] {\n  background: #92722A;\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-number.has-reminders[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6C4527 0%,\n      #6C4527 100%);\n  color: white;\n}\n.calendar-grid.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n.calendar-days.day-view-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  background: transparent;\n}\n.calendar-day.day-view-day[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: white;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 21px;\n  gap: 11px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.day-header-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px;\n  background: #B68A35;\n  border-radius: 11px;\n  color: white;\n  margin-bottom: 0;\n  flex: 0 0 auto;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 1.67rem;\n  font-weight: 700;\n  margin: 0 0 5px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.67px;\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.day-events-section[_ngcontent-%COMP%], \n.day-reminders-section[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-height: 0;\n  width: 100%;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 13px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.events-list[_ngcontent-%COMP%], \n.reminders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item[_ngcontent-%COMP%], \n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  padding: 13px;\n  background: #f7fafc;\n  border-radius: 11px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover, \n.reminder-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.15);\n}\n.event-dot[_ngcontent-%COMP%], \n.reminder-dot[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.reminder-dot[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.event-details[_ngcontent-%COMP%], \n.reminder-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-title[_ngcontent-%COMP%], \n.reminder-title[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  line-height: 1.3;\n}\n.event-time[_ngcontent-%COMP%], \n.reminder-time[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #718096;\n  margin: 0 0 5px 0;\n  font-weight: 600;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.54rem;\n  color: #4a5568;\n  margin: 0;\n  font-weight: 600;\n  background: #e2e8f0;\n  padding: 3px 8px;\n  border-radius: 13px;\n  display: inline-block;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 13px;\n  color: #a0aec0;\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 0;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 11px 0 0 0;\n  font-size: 0.74rem;\n  font-weight: 600;\n}\n.day-event-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n  min-height: 0;\n  max-height: 87px !important;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  padding-right: 3px;\n  position: relative;\n  z-index: 1;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n.event-item[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  padding: 0 0 0 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  max-width: 100%;\n  display: block;\n}\n.event-item[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  padding: 0 0 0 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n  padding: 0 0 0 0;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  padding: 4px 7px;\n  border-radius: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n.event-title-mini[_ngcontent-%COMP%] {\n  font-size: 0.57rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  border-radius: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n.user-event-title[_ngcontent-%COMP%] {\n  background: #92722A;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  display: block;\n  position: relative;\n  z-index: 1;\n  min-height: 20px;\n}\n.user-event-title[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.reminder-event-title[_ngcontent-%COMP%] {\n  background: #6C4527;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  display: block;\n  position: relative;\n  z-index: 1;\n  min-height: 20px;\n}\n.reminder-event-title[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(134, 136, 138, 0.3);\n}\n.more-events-indicator[_ngcontent-%COMP%] {\n  font-size: 0.47rem;\n  font-weight: 700;\n  padding: 3px 5px;\n  border-radius: 8px;\n  white-space: nowrap;\n  background: #4a5568;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  margin-top: 3px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.more-events-indicator[_ngcontent-%COMP%]:hover {\n  background: #2d3748;\n}\n.sidebar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.calendar-stats-widget[_ngcontent-%COMP%], \n.mini-calendar-widget[_ngcontent-%COMP%], \n.todays-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(182, 138, 53, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]::before, \n.mini-calendar-widget[_ngcontent-%COMP%]::before, \n.todays-events-widget[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 11px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #f7fafc;\n}\n.widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #1B1D21;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.event-count[_ngcontent-%COMP%] {\n  background: #E8F3FF;\n  color: #A87D2A;\n  padding: 4px 9px;\n  border-radius: 13px;\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.mini-calendar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mini-week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.mini-week-day[_ngcontent-%COMP%] {\n  padding: 5px 3px;\n  text-align: center;\n  font-weight: 700;\n  color: #A87D2A;\n  font-size: 0.5rem;\n  background: #F2ECCF;\n  border-radius: 4px;\n}\n.mini-calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.mini-calendar-day[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.54rem;\n  font-weight: 600;\n  color: #4a5568;\n  background: #f7fafc;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.mini-calendar-day[_ngcontent-%COMP%]:hover {\n  background: #F2ECCF !important;\n}\n.mini-calendar-day.today[_ngcontent-%COMP%] {\n  background: #B68A35 !important;\n  color: #ffffff !important;\n}\n.mini-calendar-day.today[_ngcontent-%COMP%]:hover {\n  background: #A87D2A !important;\n  color: #ffffff;\n}\n.mini-calendar-day.has-events[_ngcontent-%COMP%] {\n  border: 1px solid #B68A35;\n  background: #E6D7A2;\n  color: #B68A35;\n}\n.mini-calendar-day.other-month[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  opacity: 0.5;\n}\n.todays-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 268px;\n  overflow-y: auto;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n  min-height: 107px;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n}\n.event-item[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #718096;\n  min-width: 100px;\n  margin: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-item[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #718096;\n  margin: 0;\n  background: #e2e8f0;\n  padding: 2px 8px;\n  border-radius: 12px;\n  display: inline-block;\n}\n.reminder-item[_ngcontent-%COMP%]   .event-dot[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.event-details-modal[_ngcontent-%COMP%], \n.all-user-events-modal[_ngcontent-%COMP%], \n.day-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.event-details-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 85vw;\n  width: 90%;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.event-details-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n  padding: 14px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: 268px;\n  gap: 14px;\n  padding: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  height: 100%;\n  align-items: start;\n}\n.event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-details-item[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: 11px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 268px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-details-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.12);\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 14px 8px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #ffffff59 100%);\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-type-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 11px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.53rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.event-details-modal[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.47rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.event-details-modal[_ngcontent-%COMP%]   .priority-badge.priority-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.event-details-modal[_ngcontent-%COMP%]   .priority-badge.priority-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.event-details-modal[_ngcontent-%COMP%]   .priority-badge.priority-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.event-details-modal[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%]:not(.priority-1):not(.priority-2):not(.priority-3) {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  padding: 11px;\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0 0 5px 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: white;\n  line-height: 1.3;\n  padding: 5px 8px;\n  border-radius: 5px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  word-break: break-word;\n  max-height: calc(1.3em * 2 + 10px);\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 0.6rem;\n  color: #64748b;\n  line-height: 1.4;\n  font-weight: 400;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  word-break: break-word;\n  max-height: calc(1.4em * 2);\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 5px;\n  padding: 5px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  transform: translateX(3px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  font-size: 8px;\n  flex-shrink: 0;\n  background: rgba(182, 138, 53, 0.1);\n  border: 1px solid rgba(182, 138, 53, 0.2);\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  max-height: calc(1.3em * 2);\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-value.link[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.event-details-modal[_ngcontent-%COMP%]   .detail-value.link[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.event-details-modal[_ngcontent-%COMP%]   .event-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  flex-shrink: 0;\n}\n.event-details-modal[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 11px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.53rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 13px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 70vw;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 21px;\n  border-bottom: 2px solid #f7fafc;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 27px;\n  height: 27px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 7px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 21px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  width: 95%;\n  height: 90vh;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));\n  gap: 16px;\n  padding: 0;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: 13px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  min-height: auto;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  box-shadow: 0 20px 40px rgba(182, 138, 53, 0.15);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.event-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 13px 16px 11px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border-radius: 13px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n  margin-right: 3px;\n  margin-left: 3px;\n}\n.event-type-badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.event-type-badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.event-type-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.priority-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 11px;\n  font-weight: 600;\n  font-size: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.priority-badge.priority-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.priority-badge.priority-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.priority-badge.priority-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.priority-badge[_ngcontent-%COMP%]:not(.priority-1):not(.priority-2):not(.priority-3) {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  margin: 0 0 11px 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e293b;\n  line-height: 1.4;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 0.67rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-weight: 400;\n}\n.event-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 11px;\n  margin-bottom: 16px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.detail-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.detail-icon[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  font-size: 11px;\n  flex-shrink: 0;\n  background: rgba(182, 138, 53, 0.1);\n  border: 1px solid rgba(182, 138, 53, 0.2);\n}\n.detail-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.54rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.4;\n}\n.detail-value.link[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.detail-value.link[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.event-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row-reverse;\n  padding-top: 11px;\n  border-top: 1px solid #f1f5f9;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border-radius: 13px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.status-badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.status-badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.status-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 80vw;\n  width: 90%;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 4px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  margin-bottom: 16px;\n  align-items: flex-start;\n  padding: 12px;\n  min-height: 170px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  background: #f7fafc;\n  min-height: 120px;\n  max-height: 180px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  background: white;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 1.2rem;\n  flex: 1;\n  margin-right: 10px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #2d3748;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #6b7280;\n  font-size: 0.65rem;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: calc(1.3em * 2);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.6rem;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  min-width: auto;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: visible;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  stroke: currentColor;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AF5F 0%,\n      #B68A35 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]::before, \n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  z-index: 9999;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]::before {\n  content: attr(data-tooltip);\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-5px);\n  margin-bottom: 8px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(30, 30, 30, 0.95) 100%);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 6px;\n  white-space: nowrap;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  letter-spacing: 0.3px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]::after {\n  content: "";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-2px);\n  margin-bottom: 2px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.95);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]:hover::before, \n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[data-tooltip][_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) !important;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  border-radius: 6px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.status-badge[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.status-badge[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.status-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.view-details-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.57rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.2);\n}\n.view-details-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #B68A35 100%);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.35);\n}\n.view-details-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(182, 138, 53, 0.25);\n}\n.view-details-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: white;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 12px;\n  text-align: center;\n  color: #6b7280;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #d1d5db;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.3;\n}\n@media (max-width: 1024px) {\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .day-reminders-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    max-height: 85vh;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%] {\n    font-size: 0.44rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 13px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.74rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 13px;\n  right: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  padding: 13px 16px;\n  border-radius: 11px;\n  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.3);\n  z-index: 1000;\n  max-width: 268px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n.error-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  font-weight: 600;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 5px 11px;\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.54rem;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #dc3545;\n  transform: scale(1.05);\n}\n@keyframes _ngcontent-%COMP%_reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1024px) {\n    body, \n     html {\n    overflow: hidden !important;\n    height: 100vh !important;\n    max-height: 100vh !important;\n  }\n  .modern-calendar-container[_ngcontent-%COMP%] {\n    padding: 7px;\n    min-height: 100vh;\n    max-height: 100vh;\n    height: 100vh;\n    overflow: hidden !important;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n  }\n  .modern-calendar-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n    gap: 5px;\n    flex-shrink: 0;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1px;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    margin: 0;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 200px;\n    gap: 8px;\n    max-height: calc(100vh - 120px);\n    overflow: hidden;\n    align-items: start;\n    flex: 1;\n    min-height: 0;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .main-calendar-section[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 8px;\n    max-height: calc(100vh - 120px);\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n  }\n  .calendar-grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 0;\n    overflow: hidden;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n  }\n  .calendar-days[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 4px;\n  }\n  .calendar-days[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 2px;\n  }\n  .calendar-days[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 2px;\n  }\n  .main-calendar-section[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 4px;\n  }\n  .main-calendar-section[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 2px;\n  }\n  .main-calendar-section[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 2px;\n  }\n  .calendar-stats-widget[_ngcontent-%COMP%], \n   .mini-calendar-widget[_ngcontent-%COMP%], \n   .todays-events-widget[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n    padding-bottom: 5px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.87rem;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .nav-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 11px;\n    height: 11px;\n  }\n  .today-btn[_ngcontent-%COMP%] {\n    padding: 5px 13px;\n    font-size: 0.5rem;\n    min-width: 80px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 5px 3px;\n    font-size: 0.5rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 4px;\n    overflow: hidden;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    font-size: 0.57rem;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.3rem;\n    padding: 3px 4px;\n    line-height: 1.1;\n  }\n  .stats-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 5px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    padding: 7px;\n    gap: 5px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 21px;\n    height: 21px;\n  }\n  .stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 11px;\n    height: 11px;\n  }\n  .stat-count[_ngcontent-%COMP%] {\n    font-size: 0.87rem;\n  }\n  .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.47rem;\n  }\n  .widget-header[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n    padding-bottom: 5px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.64rem;\n  }\n  .widget-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 11px;\n    height: 11px;\n  }\n  .mini-week-day[_ngcontent-%COMP%] {\n    padding: 3px 1px;\n    font-size: 0.44rem;\n  }\n  .mini-calendar-day[_ngcontent-%COMP%] {\n    font-size: 0.47rem;\n  }\n  .event-item[_ngcontent-%COMP%] {\n    padding: 5px;\n    min-height: 67px;\n  }\n  .event-item[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n    font-size: 0.44rem;\n    min-width: 50px;\n  }\n  .event-item[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .event-item[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .reminder-actions[_ngcontent-%COMP%] {\n    gap: 5px;\n    margin-right: 5px;\n  }\n  .reminder-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 5px 8px;\n    font-size: 0.5rem;\n  }\n  .reminder-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 9px;\n    height: 9px;\n  }\n  .display-btn[_ngcontent-%COMP%], \n   .view-btn[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 0.5rem;\n  }\n  .display-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .view-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 9px;\n    height: 9px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%], \n   .view-mode-toggle[_ngcontent-%COMP%] {\n    padding: 3px;\n  }\n  .todays-events-list[_ngcontent-%COMP%] {\n    max-height: 187px;\n    gap: 5px;\n  }\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 11px;\n    gap: 11px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .day-date[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n    margin-bottom: 8px;\n  }\n  .section-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 9px;\n    height: 9px;\n  }\n  .events-list[_ngcontent-%COMP%], \n   .reminders-list[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n  .event-item[_ngcontent-%COMP%], \n   .reminder-item[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .event-title[_ngcontent-%COMP%], \n   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .event-time[_ngcontent-%COMP%], \n   .reminder-time[_ngcontent-%COMP%] {\n    font-size: 0.54rem;\n  }\n  .day-event-titles[_ngcontent-%COMP%] {\n    max-height: 47px !important;\n    gap: 1px;\n  }\n  .more-events-indicator[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n    padding: 1px 3px;\n    margin-top: 1px;\n  }\n  .sidebar-section[_ngcontent-%COMP%] {\n    gap: 8px;\n    max-height: calc(100vh - 120px);\n    overflow-y: auto !important;\n    overflow-x: hidden;\n    padding-right: 3px;\n    position: relative;\n    height: 100%;\n    box-sizing: border-box;\n  }\n  .sidebar-section[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 5px;\n  }\n  .sidebar-section[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 3px;\n  }\n  .sidebar-section[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 3px;\n  }\n  .sidebar-section[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: #a8a8a8;\n  }\n  .calendar-stats-widget[_ngcontent-%COMP%] {\n    padding-bottom: 8px;\n  }\n  .stats-header[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n    padding-bottom: 4px;\n  }\n  .mini-calendar-widget[_ngcontent-%COMP%], \n   .todays-events-widget[_ngcontent-%COMP%] {\n    padding-bottom: 8px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 65vw;\n    width: 85%;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 11px 16px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 13px;\n    max-height: 68vh;\n  }\n}\n@media (max-width: 1200px) {\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 200px;\n    gap: 13px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .sidebar-section[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 16px;\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .modern-calendar-container[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.34rem;\n  }\n  .main-calendar-section[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    gap: 5px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 21px;\n    height: 21px;\n  }\n  .stat-count[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.94rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 54px;\n    padding: 5px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    font-size: 0.6rem;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.47rem;\n    padding: 3px 5px;\n  }\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 13px;\n    gap: 13px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 1.34rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-item[_ngcontent-%COMP%], \n   .reminder-item[_ngcontent-%COMP%] {\n    padding: 11px;\n    gap: 8px;\n  }\n  .event-title[_ngcontent-%COMP%], \n   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n  .mini-calendar-widget[_ngcontent-%COMP%], \n   .todays-events-widget[_ngcontent-%COMP%], \n   .quick-actions-widget[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n}\n@media (max-width: 576px) {\n  .modern-calendar-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%] {\n    margin-right: 0;\n    grid-auto-rows: 350px;\n    gap: 16px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .display-btn[_ngcontent-%COMP%] {\n    padding: 5px 11px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n    max-height: 350px;\n    border-radius: 14px;\n    margin-right: 0;\n    margin-bottom: 11px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .view-mode-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    border-radius: 8px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 14px 18px 10px 18px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .calendar-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 11px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 0.7rem;\n    border-radius: 14px;\n    height: 27px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .calendar-day[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    border-radius: 10px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n    padding: 18px;\n    height: 13px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n    padding: 8px 12px;\n    border-radius: 8px;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    white-space: nowrap;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    position: relative;\n    z-index: 1;\n    max-height: calc(1.4em * 2 + 16px);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n    margin-bottom: 16px;\n    overflow-wrap: break-word;\n    white-space: normal;\n    max-width: 100%;\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n    text-wrap: wrap;\n    max-height: calc(1.5em * 3);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .reminder-type[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-bottom: 16px;\n    font-size: 0.75rem !important;\n    text-wrap: wrap;\n    padding: 8px;\n    border-radius: 8px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n    min-width: 0 !important;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 8px;\n    word-wrap: break-word;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 3px 6px;\n    overflow-wrap: break-word;\n    white-space: nowrap;\n    max-width: 100%;\n    text-overflow: ellipsis;\n    max-height: calc(1.4em * 2);\n    position: relative;\n    z-index: 1;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    font-size: 0.8rem !important;\n    width: 80px !important;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .week-day[_ngcontent-%COMP%] {\n    padding: 5px 3px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .day-view-content[_ngcontent-%COMP%] {\n    padding: 11px;\n    gap: 11px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .day-date[_ngcontent-%COMP%] {\n    font-size: 0.67rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n    padding: 7px;\n    gap: 7px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .mini-calendar-widget[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .todays-events-widget[_ngcontent-%COMP%] {\n    padding: 7px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 7px;\n    max-height: 80vh;\n    max-width: 100vw !important;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .display-mode-toggle[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 11px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    padding: 22px;\n    max-height: 95vh;\n    max-width: 100vw !important;\n    width: 98%;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    margin: 0;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n    max-height: calc(1.4em * 2 + 22px);\n    padding: 16px 20px 12px 20px;\n    flex-direction: column;\n    gap: 8px;\n    font-size: 0.95rem;\n    margin-bottom: 20px;\n    margin-right: 5px;\n    align-items: flex-start;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-type-badge[_ngcontent-%COMP%] {\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n    border-radius: 16px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n    max-height: calc(1.5em * 3);\n    padding: 4px 8px;\n    font-size: 0.7rem;\n    border-radius: 12px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    gap: 14px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .all-user-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n    padding: 11px;\n    gap: 11px;\n    font-size: 1.3rem;\n    margin-bottom: 12px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-grid[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n    max-height: calc(1.4em * 2);\n    border-radius: 10px;\n    padding: 7px 14px;\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 5px 10px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-footer[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.75rem;\n    border-radius: 16px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 90vh;\n    max-width: 100vw !important;\n    width: 98%;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 8px;\n    flex: 1;\n    overflow: hidden;\n    min-height: 0;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 220px;\n    gap: 8px;\n    height: 100%;\n    overflow-y: auto;\n    align-items: start;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-details-item[_ngcontent-%COMP%] {\n    height: 100%;\n    max-height: 220px;\n    border-radius: 8px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-details-item[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n    border-radius: 6px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 6px 8px 5px 8px;\n    flex-direction: column;\n    gap: 4px;\n    align-items: flex-start;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-type-badge[_ngcontent-%COMP%] {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n    padding: 8px;\n    width: 100%;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    margin-bottom: 4px;\n    padding: 4px 6px;\n    border-radius: 4px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-height: calc(1.3em * 2 + 12px);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n    margin-bottom: 6px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-height: calc(1.4em * 2);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-details-grid[_ngcontent-%COMP%] {\n    gap: 4px;\n    margin-bottom: 6px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n    padding: 4px;\n    border-radius: 4px;\n    gap: 4px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]:hover {\n    transform: translateX(2px);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    font-size: 7px;\n    border-radius: 3px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n    max-height: calc(1.3em * 2);\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .event-footer[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n  .display-mode-toggle[_ngcontent-%COMP%]   .event-details-modal[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  @media (max-width: 768px) and (min-width: 577px) {\n    .all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n      gap: 20px;\n    }\n    .all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n      padding: 20px;\n    }\n    .all-user-events-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n      font-size: 0.8rem;\n    }\n    .all-user-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n      font-size: 0.67rem;\n    }\n    .event-details-grid[_ngcontent-%COMP%] {\n      gap: 14px;\n    }\n    .detail-item[_ngcontent-%COMP%] {\n      padding: 11px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n      max-width: 80vw;\n      width: 85%;\n      max-height: 90vh;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n      padding: 8px;\n      flex: 1;\n      overflow: hidden;\n      min-height: 0;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n      grid-auto-rows: 190px;\n      gap: 8px;\n      height: 100%;\n      overflow-y: auto;\n      align-items: start;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-details-item[_ngcontent-%COMP%] {\n      height: 100%;\n      max-height: 190px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n      padding: 8px;\n      width: 100%;\n      min-width: 0;\n      overflow: hidden;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n      font-size: 0.65rem;\n      padding: 4px 6px;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n      word-wrap: break-word;\n      word-break: break-word;\n      max-height: calc(1.3em * 2 + 12px);\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n      font-size: 0.55rem;\n      margin-bottom: 6px;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n      word-wrap: break-word;\n      word-break: break-word;\n      max-height: calc(1.4em * 2);\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-details-grid[_ngcontent-%COMP%] {\n      gap: 4px;\n      margin-bottom: 6px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n      padding: 4px;\n      gap: 4px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .detail-icon[_ngcontent-%COMP%] {\n      width: 12px;\n      height: 12px;\n      font-size: 7px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n      font-size: 0.5rem;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n      font-size: 0.55rem;\n      max-height: calc(1.3em * 2);\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-header[_ngcontent-%COMP%] {\n      padding: 6px 8px 5px 8px;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .event-type-badge[_ngcontent-%COMP%] {\n      padding: 3px 6px;\n      font-size: 0.5rem;\n    }\n    .event-details-modal[_ngcontent-%COMP%]   .priority-badge[_ngcontent-%COMP%] {\n      padding: 3px 6px;\n      font-size: 0.5rem;\n    }\n  }\n  .modern-calendar-container.rtl[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%], \n   .modern-calendar-container.rtl[_ngcontent-%COMP%]   .reminder-details[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n  }\n  .modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=calendar.component-EXK2ONLC.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", standalone: false, template: `<div class="modern-calendar-container rounded-4" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="calendar-header">\r
    <div class="header-left">\r
      <h1 class="page-title">{{ translate("calendar.my_calendar") }}</h1>\r
      <p class="page-subtitle">{{ translate("calendar.subtitle") }}</p>\r
    </div>\r
\r
    <div class="header-actions">\r
      <!-- Reminder Actions -->\r
      <div class="reminder-actions">\r
        <button class="btn btn-primary" (click)="openAddReminderModal()">\r
          <svg\r
            width="11"\r
            height="11"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <line x1="12" y1="8" x2="12" y2="16"></line>\r
            <line x1="8" y1="12" x2="16" y2="12"></line>\r
          </svg>\r
          {{ translate("reminders.add_reminder") }}\r
        </button>\r
        <button class="btn btn-secondary" (click)="openAllRemindersModal()">\r
          <svg\r
            width="11"\r
            height="11"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
            <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
          </svg>\r
          {{ translate("reminders.all_reminders") }}\r
        </button>\r
      </div>\r
\r
      <!-- Display Mode Toggle -->\r
      <div class="display-mode-toggle">\r
        <button\r
          class="display-btn"\r
          [class.active]="displayMode() === 'calendar'"\r
          (click)="onDisplayModeChange('calendar')"\r
        >\r
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
          </svg>\r
          {{ translate("calendar.title") }}\r
        </button>\r
        <!-- <button\r
          class="display-btn"\r
          [class.active]="displayMode() === 'table'"\r
          (click)="onDisplayModeChange('table')"\r
        >\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>\r
          </svg>\r
          {{ translate("calendar.table_view.title") }}\r
        </button> -->\r
      </div>\r
\r
      <!-- View Mode Toggle (only show in calendar mode) -->\r
      <div class="view-mode-toggle" *ngIf="displayMode() === 'calendar'">\r
        <button\r
          class="view-btn"\r
          [class.active]="viewMode() === 'month'"\r
          (click)="onViewModeChange('month')"\r
        >\r
          {{ translate("calendar.month") }}\r
        </button>\r
        <button\r
          class="view-btn"\r
          [class.active]="viewMode() === 'week'"\r
          (click)="onViewModeChange('week')"\r
        >\r
          {{ translate("calendar.week") }}\r
        </button>\r
        <button\r
          class="view-btn"\r
          [class.active]="viewMode() === 'day'"\r
          (click)="onViewModeChange('day')"\r
        >\r
          {{ translate("calendar.day") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Main Content Layout -->\r
  <div class="main-content">\r
    <!-- Calendar View -->\r
    <div class="main-calendar-section" *ngIf="displayMode() === 'calendar'">\r
      <!-- Calendar Navigation -->\r
      <div class="calendar-navigation ltr">\r
        \r
        <button class="nav-btn" (click)="nextMonth()">\r
          <svg\r
          width="13"\r
          height="13"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="15,18 9,12 15,6"></polyline>\r
        </svg>\r
\r
        </button>\r
\r
        <div class="current-month">\r
          <h2>\r
            {{ monthNames[currentDate().getMonth()] }}\r
            {{ currentDate().getFullYear() }}\r
          </h2>\r
        </div>\r
        <button class="nav-btn" (click)="previousMonth()">\r
         \r
          <svg\r
            width="13"\r
            height="13"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
      \r
        <button class="today-btn" (click)="goToToday()">\r
          {{ getTodayFormatted() }}\r
        </button>\r
      </div>\r
\r
      <!-- Main Calendar Grid -->\r
      <div class="calendar-grid" [class.day-view]="viewMode() === 'day'">\r
        <!-- Week Days Header - Hidden in day view -->\r
        <div class="week-days" *ngIf="viewMode() !== 'day'">\r
          <div class="week-day" *ngFor="let day of weekDays">\r
            {{ day }}\r
          </div>\r
        </div>\r
\r
        <!-- Calendar Days -->\r
        <div class="calendar-days" [class.day-view-days]="viewMode() === 'day'">\r
          <div\r
            class="calendar-day"\r
            [class.day-view-day]="viewMode() === 'day'"\r
            *ngFor="let day of calendarDays"\r
            [class.today]="isToday(day)"\r
            [class.selected]="isSelectedDate(day)"\r
            [class.other-month]="!isCurrentMonth(day)"\r
            (click)="onDateClick(day)"\r
          >\r
            <!-- Day Header -->\r
            <div class="day-header">\r
              <div\r
                class="day-number"\r
                [class.has-events]="getUserEventsForDate(day).length > 0"\r
                [class.has-reminders]="getRemindersForDate(day).length > 0"\r
              >\r
                {{ day.getDate() }}\r
              </div>\r
            </div>\r
\r
            <!-- Day View Content -->\r
            <div *ngIf="viewMode() === 'day'" class="day-view-content">\r
              <!-- <div class="day-header-info">\r
                <h3 class="day-name">{{ getDayName(day) }}</h3>\r
                <p class="day-date">{{ day | date : "fullDate" }}</p>\r
              </div> -->\r
\r
              <!-- Events Section -->\r
              <div\r
                class="day-events-section"\r
                *ngIf="getUserEventsForDate(day).length > 0"\r
              >\r
                <h4 class="section-title">\r
                  <svg\r
                    width="11"\r
                    height="11"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <rect\r
                      x="3"\r
                      y="4"\r
                      width="18"\r
                      height="18"\r
                      rx="2"\r
                      ry="2"\r
                    ></rect>\r
                    <line x1="16" y1="2" x2="16" y2="6"></line>\r
                    <line x1="8" y1="2" x2="8" y2="6"></line>\r
                    <line x1="3" y1="10" x2="21" y2="10"></line>\r
                  </svg>\r
                  {{ translate("calendar.events") }}\r
                </h4>\r
                <div class="events-list">\r
                  <div\r
                    class="event-item"\r
                    *ngFor="let event of getUserEventsForDate(day)"\r
                  >\r
                    <div\r
                      class="event-dot"\r
                      [style.background-color]="event.color"\r
                    ></div>\r
                    <div class="event-details">\r
                      <div class="event-title">{{ event.title }}</div>\r
                      <div class="event-time">\r
                        {{ event.startDate | date : "shortTime" }} -\r
                        {{ event.endDate | date : "shortTime" }}\r
                      </div>\r
                      <div class="event-type">\r
                        {{ getEventTypeLabel(event.type) }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Reminders Section -->\r
              <div\r
                class="day-reminders-section"\r
                *ngIf="getRemindersForDate(day).length > 0"\r
              >\r
                <h4 class="section-title">\r
                  <svg\r
                    width="11"\r
                    height="11"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <circle cx="12" cy="12" r="10"></circle>\r
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
                  </svg>\r
                  {{ translate("reminders.all_reminders") }}\r
                </h4>\r
                <div class="reminders-list">\r
                  <div\r
                    class="reminder-item"\r
                    *ngFor="let reminder of getRemindersForDate(day)"\r
                  >\r
                    <div\r
                      class="reminder-dot"\r
                      [style.background-color]="getReminderColor(reminder, 0)"\r
                    ></div>\r
                    <div class="reminder-details">\r
                      <div class="reminder-title">{{ reminder.title }}</div>\r
                      <div class="reminder-time">\r
                        {{ reminder.reminderTime | date : "shortTime" }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- No events message -->\r
              <div\r
                class="no-events"\r
                *ngIf="\r
                  getUserEventsForDate(day).length === 0 &&\r
                  getRemindersForDate(day).length === 0\r
                "\r
              >\r
                <svg\r
                  width="48"\r
                  height="48"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="1"\r
                >\r
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
                  <line x1="16" y1="2" x2="16" y2="6"></line>\r
                  <line x1="8" y1="2" x2="8" y2="6"></line>\r
                  <line x1="3" y1="10" x2="21" y2="10"></line>\r
                </svg>\r
                <p>{{ translate("calendar.no_events_today") }}</p>\r
              </div>\r
            </div>\r
\r
            <!-- Month/Week View - Event Titles -->\r
            <div class="day-event-titles" *ngIf="viewMode() !== 'day'">\r
              <!-- Combined Events and Reminders (max 3 total) -->\r
              <ng-container *ngFor="let item of getCombinedItemsForDate(day) | slice : 0 : 2">\r
                <!-- User Event -->\r
                <div\r
                  *ngIf="item.type === 'event'"\r
                  class="event-title user-event-title"\r
                  [title]="item.data.title"\r
                >\r
                  {{ item.data.title }}\r
                </div>\r
                \r
                <!-- Reminder -->\r
                <div\r
                  *ngIf="item.type === 'reminder'"\r
                  class="event-title reminder-event-title"\r
                  [title]="item.data.title"\r
                >\r
                  {{ item.data.title }}\r
                </div>\r
              </ng-container>\r
\r
              <!-- More events indicator -->\r
              <div\r
                class="more-events-indicator"\r
                *ngIf="getTotalItemsCountForDate(day) > 2"\r
              >\r
                +{{ getTotalItemsCountForDate(day) - 2 }}\r
                {{ translate("calendar.more") }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Table View -->\r
    <div class="main-table-section" *ngIf="displayMode() === 'table'">\r
      <app-calendar-table-view\r
        [events]="userEvents()"\r
        [simpleEvents]="simpleEvents()"\r
        [reminders]="reminders()">\r
      </app-calendar-table-view>\r
    </div>\r
\r
    <!-- Right Side - Mini Calendar & Events List -->\r
    <div class="sidebar-section" *ngIf="displayMode() === 'calendar'">\r
       <!-- Calendar Stats -->\r
       <div class="calendar-stats-widget">\r
        <div class="stats-header">\r
          <h3>\r
            <svg\r
              width="13"\r
              height="13"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 5px"\r
            >\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            <span class="px-2" *ngIf="!statsLoading(); else loadingPeriod">{{ translate("calendar." + viewMode())\r
            }}</span>\r
            <ng-template #loadingPeriod\r
              >{{ translate("calendar.loading") }}...</ng-template\r
            >\r
          </h3>\r
          <span class="total-events" *ngIf="!statsLoading()"\r
            >{{ getTotalEventsCount() }}\r
            {{ translate("calendar.total_events") }}</span\r
          >\r
        </div>\r
        <div class="stats-grid" *ngIf="!statsLoading(); else loadingStats">\r
          <div class="stat-item meetings">\r
            <div class="stat-icon">\r
              <svg\r
                width="10"\r
                height="10"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
                <line x1="16" y1="2" x2="16" y2="6"></line>\r
                <line x1="8" y1="2" x2="8" y2="6"></line>\r
                <line x1="3" y1="10" x2="21" y2="10"></line>\r
              </svg>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-count">{{ getMeetingsCount() }}</span>\r
              <span class="stat-label">{{\r
                translate("calendar.meetings")\r
              }}</span>\r
            </div>\r
          </div>\r
          <div class="stat-item tasks">\r
            <div class="stat-icon">\r
              <svg\r
                width="10"\r
                height="10"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M9 11l3 3L22 4"></path>\r
                <path\r
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"\r
                ></path>\r
              </svg>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-count">{{ getTasksCount() }}</span>\r
              <span class="stat-label">{{ translate("calendar.tasks") }}</span>\r
            </div>\r
          </div>\r
          <div class="stat-item visits">\r
            <div class="stat-icon">\r
              <svg\r
                width="10"\r
                height="10"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>\r
                <polyline points="9,22 9,12 15,12 15,22"></polyline>\r
              </svg>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-count">{{ getVisitsCount() }}</span>\r
              <span class="stat-label">{{ translate("calendar.visits") }}</span>\r
            </div>\r
          </div>\r
          <div class="stat-item travels">\r
            <div class="stat-icon">\r
              <svg\r
                width="10"\r
                height="10"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>\r
                <path d="M2 17l10 5 10-5"></path>\r
                <path d="M2 12l10 5 10-5"></path>\r
              </svg>\r
            </div>\r
            <div class="stat-info">\r
              <span class="stat-count">{{ getTravelsCount() }}</span>\r
              <span class="stat-label">{{\r
                translate("calendar.travels")\r
              }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Loading State -->\r
        <ng-template #loadingStats>\r
          <div class="stats-loading">\r
            <div class="loading-spinner">\r
              <div class="spinner"></div>\r
              <p>{{ translate("calendar.loading") }}</p>\r
            </div>\r
          </div>\r
        </ng-template>\r
      </div>\r
      <!-- Mini Calendar -->\r
      <div class="mini-calendar-widget">\r
        <div class="widget-header">\r
          <h3>\r
            <svg\r
              width="13"\r
              height="13"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 5px"\r
            >\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            <span class="px-2">{{ translate("calendar.mini_calendar") }}</span>\r
          </h3>\r
        </div>\r
        <div class="mini-calendar">\r
          <div class="mini-week-days">\r
            <div class="mini-week-day" *ngFor="let day of weekDays">\r
              {{ getWeekDayAbbreviation(day) }}\r
            </div>\r
          </div>\r
          <div class="mini-calendar-days">\r
            <div\r
              class="mini-calendar-day"\r
              *ngFor="let day of calendarDays | slice : 0 : 35"\r
              [class.today]="isToday(day)"\r
              [class.has-events]="\r
                getUserEventsForDate(day).length > 0 ||\r
                getRemindersForDate(day).length > 0\r
              "\r
              [class.other-month]="!isCurrentMonth(day)"\r
              (click)="onDateClick(day)"\r
            >\r
              {{ day.getDate() }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Today's Events -->\r
      <div class="todays-events-widget">\r
        <div class="widget-header">\r
          <h3>\r
            <svg\r
              width="13"\r
              height="13"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 5px"\r
            >\r
              <circle cx="12" cy="12" r="10"></circle>\r
              <polyline points="12,6 12,12 16,14"></polyline>\r
            </svg>\r
            <span class="px-2">{{ translate("calendar.todays_events") }}</span>\r
          </h3>\r
          <span class="event-count">{{\r
            getUserEventsForDate(getToday()).length +\r
              getRemindersForDate(getToday()).length\r
          }}</span>\r
        </div>\r
        <div class="todays-events-list">\r
          <!-- Today's User Events -->\r
          <div\r
            class="event-item"\r
            *ngFor="let event of getUserEventsForDate(getToday())"\r
          >\r
            <div class="event-time">\r
              {{ (event.reminderTime || event.startDate) | date : "shortTime" }}\r
            </div>\r
            <div class="event-dot" [style.background-color]="event.color"></div>\r
            <div class="event-info">\r
              <div class="event-title">{{ event.title }}</div>\r
              <div class="event-type">{{ getEventTypeLabel(event.type) }}</div>\r
            </div>\r
          </div>\r
\r
          <!-- Today's Reminders -->\r
          <div\r
            class="event-item reminder-item"\r
            *ngFor="let reminder of getRemindersForDate(getToday())"\r
          >\r
          <div class="event-info">\r
            <div class="event-title-mini ">{{ reminder.title | slice:0:20 }} {{ reminder.title.length > 20 ? '...' : '' }}</div>\r
            <div class="event-time">\r
              {{ reminder.reminderTime | date : "shortTime" }}\r
            </div>\r
            <div class="event-type">\r
              {{ translate("reminders.reminder") }}\r
            </div>\r
          </div>\r
            <div\r
              class="event-dot reminder-dot"\r
              [style.background-color]="getReminderColor(reminder, 0)"\r
            >\r
            </div>\r
            \r
          </div>\r
\r
          <!-- No events message -->\r
          <div\r
            class="no-events"\r
            *ngIf="\r
              getUserEventsForDate(getToday()).length === 0 &&\r
              getRemindersForDate(getToday()).length === 0\r
            "\r
          >\r
            <svg\r
              width="21"\r
              height="21"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="1"\r
            >\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            <p>{{ translate("calendar.no_events_today") }}</p>\r
          </div>\r
        </div>\r
      </div>\r
\r
     \r
    </div>\r
  </div>\r
\r
  <!-- Event Details Modal -->\r
  <div\r
    class="event-details-modal"\r
    *ngIf="selectedDate()"\r
    (click)="selectedDate.set(null)"\r
  >\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ selectedDate() | date : "fullDate" }}</h3>\r
        <button class="close-btn" (click)="selectedDate.set(null)">\r
          <svg\r
            width="13"\r
            height="13"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="events-list">\r
          <div\r
            class="event-item event-details-item"\r
            *ngFor="let event of getEventsForDate(selectedDate()!)"\r
          >\r
            <div class="event-content">\r
              <h4 class="event-title" [style.background-color]="'#B68A35'" [style.color]="'white'">{{ event.title }}</h4>\r
              \r
              <p class="event-description" *ngIf="event.description">\r
                {{ event.description }}\r
              </p>\r
              \r
              <div class="event-details-grid">\r
                <div class="detail-item">\r
                  <div class="detail-icon time-icon">\u{1F552}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.time") }}</span>\r
                    <span class="detail-value">\r
                      {{ event.startDate | date : "short" }} - {{ event.endDate | date : "short" }}\r
                    </span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.location">\r
                  <div class="detail-icon location-icon">\u{1F4CD}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.location") }}</span>\r
                    <span class="detail-value">{{ event.location }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.onlineUrl">\r
                  <div class="detail-icon online-icon">\u{1F4BB}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.online_url") }}</span>\r
                    <a href="{{ event.onlineUrl }}" target="_blank" class="detail-value link">{{ event.onlineUrl }}</a>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.organizerName">\r
                  <div class="detail-icon organizer-icon">\u{1F464}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.organizer") }}</span>\r
                    <span class="detail-value">{{ event.organizerName }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.assigneeName">\r
                  <div class="detail-icon assignee-icon">\u2705</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.assignee") }}</span>\r
                    <span class="detail-value">{{ event.assigneeName }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.departmentName">\r
                  <div class="detail-icon department-icon">\u{1F3E2}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.department") }}</span>\r
                    <span class="detail-value">{{ event.departmentName }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="event-footer">\r
                <div class="event-header d-flex flex-row">\r
                  <div class="event-type-badge" [style.background-color]="event.color">\r
                    <span class="event-type-text">{{ getEventTypeLabel(event.type) }}</span>\r
                  </div>\r
                  <div class="priority-badge" [class]="'priority-' + event.priority">\r
                    <span class="priority-text">{{ getPriorityLabel(event.priority) }}</span>\r
                  </div>\r
                </div>\r
                <div class="d-flex align-items-center gap-2">\r
                  <button class="view-details-btn" (click)="navigateToEventDetails(event)">\r
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                      <circle cx="12" cy="12" r="3"/>\r
                    </svg>\r
                    {{ translate("calendar.view_details") }}\r
                  </button>\r
                  <div class="status-badge" [style.background-color]="getEventStatusColor(event.status)">\r
                    <span class="status-text">{{ getEventStatusLabel(event.status) }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
\r
          </div>\r
          <div\r
            class="no-events"\r
            *ngIf="getEventsForDate(selectedDate()!).length === 0"\r
          >\r
            <p>{{ translate("calendar.no_events_today") }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- All User Events Modal -->\r
  <div\r
    class="all-user-events-modal"\r
    *ngIf="showAllUserEventsModal()"\r
    (click)="closeAllUserEventsModal()"\r
  >\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header" [class.rtl]="isRTL()">\r
        <h3>{{ translate("calendar.all_my_events") }}</h3>\r
        <button class="close-btn" (click)="closeAllUserEventsModal()">\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="events-list">\r
          <div class="event-item" *ngFor="let event of userEvents()">\r
            <div class="event-header">\r
              <div class="event-type-badge" [style.background-color]="event.color">\r
                <span class="event-type-text">{{ getEventTypeLabel(event.type) }}</span>\r
              </div>\r
              <div class="priority-badge" [class]="'priority-' + event.priority">\r
                <span class="priority-text">{{ getPriorityLabel(event.priority) }}</span>\r
              </div>\r
            </div>\r
            \r
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              \r
              <p class="event-description" *ngIf="event.description">\r
                {{ event.description }}\r
              </p>\r
              \r
              <div class="event-details-grid">\r
                <div class="detail-item">\r
                  <div class="detail-icon time-icon">\u{1F552}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.time") }}</span>\r
                    <span class="detail-value">\r
                      {{ event.startDate | date : "short" }} - {{ event.endDate | date : "short" }}\r
                    </span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.location">\r
                  <div class="detail-icon location-icon">\u{1F4CD}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.location") }}</span>\r
                    <span class="detail-value">{{ event.location }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.onlineUrl">\r
                  <div class="detail-icon online-icon">\u{1F4BB}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.online_url") }}</span>\r
                    <a href="{{ event.onlineUrl }}" target="_blank" class="detail-value link">{{ event.onlineUrl }}</a>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.organizerName">\r
                  <div class="detail-icon organizer-icon">\u{1F464}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.organizer") }}</span>\r
                    <span class="detail-value">{{ event.organizerName }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.assigneeName">\r
                  <div class="detail-icon assignee-icon">\u2705</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.assignee") }}</span>\r
                    <span class="detail-value">{{ event.assigneeName }}</span>\r
                  </div>\r
                </div>\r
\r
                <div class="detail-item" *ngIf="event.departmentName">\r
                  <div class="detail-icon department-icon">\u{1F3E2}</div>\r
                  <div class="detail-content">\r
                    <span class="detail-label">{{ translate("calendar.department") }}</span>\r
                    <span class="detail-value">{{ event.departmentName }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="event-footer">\r
                <button class="view-details-btn" (click)="navigateToEventDetails(event)">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                    <circle cx="12" cy="12" r="3"/>\r
                  </svg>\r
                  {{ translate("calendar.view_details") }}\r
                </button>\r
                <div class="status-badge" [style.background-color]="getEventStatusColor(event.status)">\r
                  <span class="status-text">{{ getEventStatusLabel(event.status) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <div class="no-events" *ngIf="userEvents().length === 0">\r
            <p>{{ translate("calendar.no_events_found") }}</p>\r
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
      <p>{{ translate("calendar.loading") }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div class="error-message" *ngIf="error()">\r
    <div class="error-content">\r
      <svg\r
            width="16"\r
            height="16"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <circle cx="12" cy="12" r="10"></circle>\r
        <line x1="15" y1="9" x2="9" y2="15"></line>\r
        <line x1="9" y1="9" x2="15" y2="15"></line>\r
      </svg>\r
      <p>{{ error() }}</p>\r
      <button class="retry-btn" (click)="retryLoadEvents()">\r
        {{ translate("calendar.retry") }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Modals -->\r
  <app-add-reminder-modal\r
    [isOpen]="showAddReminderModal"\r
    (reminderCreated)="onReminderCreated()"\r
    (closeModal)="closeAddReminderModal()"\r
  ></app-add-reminder-modal>\r
\r
  <app-all-reminders-modal\r
    #allRemindersModal\r
    [isOpen]="showAllRemindersModal"\r
    (reminderUpdated)="onReminderUpdated()"\r
    (closeModal)="closeAllRemindersModal()"\r
  ></app-all-reminders-modal>\r
\r
  <!-- Day Reminders Modal -->\r
  <div\r
    class="day-reminders-modal"\r
    *ngIf="showDayRemindersModal()"\r
    (click)="closeDayRemindersModal()"\r
  >\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ selectedDayDate() | date : "fullDate" }}</h3>\r
        <button class="close-btn" (click)="closeDayRemindersModal()">\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <div class="modal-body">\r
        <div class="reminders-list">\r
          <div\r
            class="reminder-item"\r
            *ngFor="let reminder of selectedDayReminders()"\r
          >\r
            <div class="reminder-content">\r
              <h4 class="reminder-title">{{ reminder.title }}</h4>\r
              <p class="reminder-description" *ngIf="reminder.description">\r
                {{ reminder.description }}\r
              </p>\r
              <div class="reminder-dates">\r
                <div class="date-item">\r
                  <span class="date-label"\r
                    >{{ translate("reminders.event_time") }}:</span\r
                  >\r
                  <span class="date-value">{{\r
                    formatDateTime(reminder.eventTime)\r
                  }}</span>\r
                </div>\r
                <div class="date-item">\r
                  <span class="date-label"\r
                    >{{ translate("reminders.reminder_time") }}:</span\r
                  >\r
                  <span class="date-value">{{\r
                    formatDateTime(reminder.reminderTime)\r
                  }}</span>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="reminder-actions">\r
              <button class="action-btn edit-btn" (click)="onEditDayReminder(reminder)" [attr.data-tooltip]="translate('reminders.edit')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                </svg>\r
              </button>\r
              <button class="action-btn delete-btn" (click)="onDeleteDayReminder(reminder)" [attr.data-tooltip]="translate('reminders.delete')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3,6 5,6 21,6"></polyline>\r
                  <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>\r
                  <line x1="10" y1="11" x2="10" y2="17"></line>\r
                  <line x1="14" y1="11" x2="14" y2="17"></line>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
          <div class="no-reminders" *ngIf="selectedDayReminders().length === 0">\r
            <svg\r
              width="21"\r
              height="21"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="1"\r
            >\r
              <circle cx="12" cy="12" r="10"></circle>\r
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
              <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
            </svg>\r
            <h4>{{ translate("reminders.no_reminders") }}</h4>\r
            <p>{{ translate("reminders.no_reminders_description") }}</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/calendar/calendar.component.css */\n.modern-calendar-container {\n  padding: 16px;\n  max-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f8f43d 0%,\n      #f0f4f12c 50%);\n}\n.modern-calendar-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 21px;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.header-left {\n  flex: 1;\n  min-width: 200px;\n}\n.page-title {\n  font-size: 1.34rem;\n  font-weight: 700;\n  color: #1b1d21;\n  margin: 0 0 3px 0;\n  line-height: 1.2;\n  position: relative;\n}\n.page-subtitle {\n  font-size: 0.74rem;\n  color: #718096;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  flex-wrap: wrap;\n}\n.reminder-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-right: 11px;\n}\n.reminder-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 0.58rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);\n  min-height: 28px;\n}\n.reminder-actions .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  border: 2px solid #B68A35;\n  height: 100% !important;\n  line-height: 1.0;\n}\n.reminder-actions .btn-primary:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #B68A35 100%);\n}\n.reminder-actions .btn-secondary {\n  background: #6C4527;\n  color: white;\n  border: 2px solid #6C4527;\n}\n.reminder-actions .btn-secondary:hover {\n  box-shadow: 0 8px 25px rgba(134, 136, 138, 0.4);\n  background: #6C4527;\n}\n.display-mode-toggle {\n  display: flex;\n  background: white;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  margin-right: 11px;\n}\n.display-btn {\n  padding: 7px 13px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.display-btn:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.display-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.view-mode-toggle {\n  display: flex;\n  background: white;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.view-btn {\n  padding: 7px 13px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  position: relative;\n  overflow: hidden;\n}\n.view-btn:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.view-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.main-content {\n  display: grid;\n  grid-template-columns: 1fr 235px;\n  gap: 16px;\n  align-items: start;\n}\n.main-calendar-section {\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.main-table-section {\n  grid-column: 1 / -1;\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.calendar-stats-widget .stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n}\n.calendar-stats-widget .stat-item {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  border-radius: 8px;\n  padding: 9px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: white;\n  transition: all 0.3s ease;\n}\n.calendar-stats-widget .stat-item:hover {\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-stats-widget .stat-icon {\n  width: 24px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.calendar-stats-widget .stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-stats-widget .stat-count {\n  font-size: 0.94rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.calendar-stats-widget .stat-label {\n  font-size: 0.5rem;\n  opacity: 0.9;\n  margin-top: 1px;\n  font-weight: 600;\n}\n.calendar-stats-widget .total-events {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 4px 8px;\n  border-radius: 10px;\n  font-size: 0.54rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.stats-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 27px 13px;\n}\n.stats-loading .loading-spinner {\n  text-align: center;\n}\n.stats-loading .spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 8px;\n}\n.stats-loading p {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.6rem;\n}\n.stats-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  position: relative;\n  z-index: 1;\n}\n.stats-header h3 {\n  margin: 0;\n  font-size: 1.07rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n.total-events {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 7px 12px;\n  border-radius: 17px;\n  font-size: 0.64rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 11px;\n}\n.stat-item {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 11px;\n  padding: 12px;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.3s ease;\n  position: relative;\n  z-index: 1;\n}\n.stat-item:hover {\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stat-icon {\n  width: 29px;\n  height: 29px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.stat-count {\n  font-size: 1.2rem;\n  font-weight: 800;\n  line-height: 1;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.stat-label {\n  font-size: 0.57rem;\n  opacity: 0.95;\n  margin-top: 3px;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.calendar-navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 11px;\n  border-bottom: 2px solid #f7fafc;\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 29px;\n  height: 29px;\n  border: 2px solid #e2e8f0;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #718096;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.nav-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.current-month h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1b1d21;\n  text-align: center;\n  position: relative;\n}\n.today-btn {\n  padding: 8px 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white !important;\n  border: 1px solid #B68A35;\n  color: #ffffff;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.6rem;\n  min-width: 107px;\n  white-space: nowrap;\n}\n.calendar-grid {\n  display: flex;\n  flex-direction: column;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.week-day {\n  padding: 11px 5px;\n  text-align: center;\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.6rem;\n  background: #f7fafc;\n  border-radius: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 2px;\n}\n.calendar-day {\n  background: white;\n  min-height: 80px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  overflow: hidden;\n}\n.calendar-day:hover {\n  background: #f7fafc;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #B68A35;\n}\n.calendar-day.today {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n  color: white;\n  border-color: #B68A35;\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-day.today .day-number {\n  background: #92722A !important;\n  color: white !important;\n  margin: 3px;\n}\n.calendar-day.selected {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border-color: #1b1d21;\n  box-shadow: 0 4px 15px rgba(27, 29, 33, 0.3);\n}\n.calendar-day.other-month {\n  background: #f7fafc;\n  color: #a0aec0;\n  opacity: 0.6;\n}\n.day-header {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 5px;\n}\n.day-number {\n  font-weight: 700;\n  font-size: 0.67rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  background: #f7fafc;\n  color: #4a5568;\n}\n.day-number.has-events {\n  background: #92722A;\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-number.has-reminders {\n  background:\n    linear-gradient(\n      135deg,\n      #6C4527 0%,\n      #6C4527 100%);\n  color: white;\n}\n.calendar-grid.day-view {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n.calendar-days.day-view-days {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  background: transparent;\n}\n.calendar-day.day-view-day {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: white;\n}\n.day-view-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 21px;\n  gap: 11px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.day-header-info {\n  text-align: center;\n  padding: 16px;\n  background: #B68A35;\n  border-radius: 11px;\n  color: white;\n  margin-bottom: 0;\n  flex: 0 0 auto;\n}\n.day-name {\n  font-size: 1.67rem;\n  font-weight: 700;\n  margin: 0 0 5px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.67px;\n}\n.day-date {\n  font-size: 0.8rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.day-events-section,\n.day-reminders-section {\n  flex: 0 0 auto;\n  min-height: 0;\n  width: 100%;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 13px 0;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.events-list,\n.reminders-list {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 5px;\n}\n.events-list::-webkit-scrollbar,\n.reminders-list::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list::-webkit-scrollbar-track,\n.reminders-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb,\n.reminders-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb:hover,\n.reminders-list::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item,\n.reminder-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  padding: 13px;\n  background: #f7fafc;\n  border-radius: 11px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item:hover,\n.reminder-item:hover {\n  background: white;\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.15);\n}\n.event-dot,\n.reminder-dot {\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.reminder-dot {\n  background-color: #B68A35 !important;\n  animation: reminderPulse 2s infinite;\n}\n.event-details,\n.reminder-details {\n  flex: 1;\n}\n.event-title,\n.reminder-title {\n  font-size: 0.74rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  line-height: 1.3;\n}\n.event-time,\n.reminder-time {\n  font-size: 0.6rem;\n  color: #718096;\n  margin: 0 0 5px 0;\n  font-weight: 600;\n}\n.event-type {\n  font-size: 0.54rem;\n  color: #4a5568;\n  margin: 0;\n  font-weight: 600;\n  background: #e2e8f0;\n  padding: 3px 8px;\n  border-radius: 13px;\n  display: inline-block;\n}\n.no-events {\n  text-align: center;\n  padding: 40px 13px;\n  color: #a0aec0;\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 0;\n}\n.no-events p {\n  margin: 11px 0 0 0;\n  font-size: 0.74rem;\n  font-weight: 600;\n}\n.day-event-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n  min-height: 0;\n  max-height: 87px !important;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  padding-right: 3px;\n  position: relative;\n  z-index: 1;\n}\n.day-event-titles::-webkit-scrollbar {\n  width: 3px;\n}\n.day-event-titles::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n.event-item .event-title {\n  font-size: 0.8rem !important;\n  padding: 0 0 0 0;\n}\n.event-item .event-description {\n  font-size: 0.67rem;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: normal;\n  max-width: 100%;\n  display: block;\n}\n.event-item .event-type {\n  font-size: 0.8rem !important;\n  padding: 0 0 0 0;\n}\n.event-item .event-time {\n  font-size: 0.9rem !important;\n  padding: 0 0 0 0;\n}\n.event-title {\n  font-size: 0.5rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  padding: 4px 7px;\n  border-radius: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n.event-title-mini {\n  font-size: 0.57rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  border-radius: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n  display: block;\n  position: relative;\n  z-index: 1;\n}\n.user-event-title {\n  background: #92722A;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  display: block;\n  position: relative;\n  z-index: 1;\n  min-height: 20px;\n}\n.user-event-title:hover {\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.reminder-event-title {\n  background: #6C4527;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-word;\n  display: block;\n  position: relative;\n  z-index: 1;\n  min-height: 20px;\n}\n.reminder-event-title:hover {\n  box-shadow: 0 2px 8px rgba(134, 136, 138, 0.3);\n}\n.more-events-indicator {\n  font-size: 0.47rem;\n  font-weight: 700;\n  padding: 3px 5px;\n  border-radius: 8px;\n  white-space: nowrap;\n  background: #4a5568;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  margin-top: 3px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.more-events-indicator:hover {\n  background: #2d3748;\n}\n.sidebar-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.calendar-stats-widget,\n.mini-calendar-widget,\n.todays-events-widget {\n  background: white;\n  border-radius: 13px;\n  padding: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(182, 138, 53, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.calendar-stats-widget::before,\n.mini-calendar-widget::before,\n.todays-events-widget::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35 0%,\n      #A87D2A 100%);\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 11px;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #f7fafc;\n}\n.widget-header h3 {\n  margin: 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #1B1D21;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.event-count {\n  background: #E8F3FF;\n  color: #A87D2A;\n  padding: 4px 9px;\n  border-radius: 13px;\n  font-size: 0.57rem;\n  font-weight: 700;\n}\n.mini-calendar {\n  display: flex;\n  flex-direction: column;\n}\n.mini-week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 5px;\n}\n.mini-week-day {\n  padding: 5px 3px;\n  text-align: center;\n  font-weight: 700;\n  color: #A87D2A;\n  font-size: 0.5rem;\n  background: #F2ECCF;\n  border-radius: 4px;\n}\n.mini-calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.mini-calendar-day {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.54rem;\n  font-weight: 600;\n  color: #4a5568;\n  background: #f7fafc;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.mini-calendar-day:hover {\n  background: #F2ECCF !important;\n}\n.mini-calendar-day.today {\n  background: #B68A35 !important;\n  color: #ffffff !important;\n}\n.mini-calendar-day.today:hover {\n  background: #A87D2A !important;\n  color: #ffffff;\n}\n.mini-calendar-day.has-events {\n  border: 1px solid #B68A35;\n  background: #E6D7A2;\n  color: #B68A35;\n}\n.mini-calendar-day.other-month {\n  color: #a0aec0;\n  opacity: 0.5;\n}\n.todays-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  max-height: 268px;\n  overflow-y: auto;\n}\n.todays-events-list::-webkit-scrollbar {\n  width: 4px;\n}\n.todays-events-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.todays-events-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.event-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px;\n  background: #f7fafc;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n  min-height: 107px;\n}\n.event-item:hover {\n  background: white;\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n}\n.event-item .event-time {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #718096;\n  min-width: 100px;\n  margin: 0;\n}\n.event-item .event-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-item .event-info {\n  flex: 1;\n  min-width: 0;\n}\n.event-item .event-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-item .event-type {\n  font-size: 0.7rem;\n  color: #718096;\n  margin: 0;\n  background: #e2e8f0;\n  padding: 2px 8px;\n  border-radius: 12px;\n  display: inline-block;\n}\n.reminder-item .event-dot {\n  background-color: #B68A35 !important;\n  animation: reminderPulse 2s infinite;\n}\n.event-details-modal,\n.all-user-events-modal,\n.day-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.event-details-modal .modal-content {\n  max-width: 85vw;\n  width: 90%;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.event-details-modal .modal-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n  padding: 14px;\n}\n.event-details-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: 268px;\n  gap: 14px;\n  padding: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  min-height: 0;\n  max-height: 100%;\n  height: 100%;\n  align-items: start;\n}\n.event-details-modal .events-list::-webkit-scrollbar {\n  width: 8px;\n}\n.event-details-modal .events-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.event-details-modal .events-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.event-details-modal .events-list::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-details-modal .event-details-item {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: 11px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 268px;\n}\n.event-details-modal .event-details-item:hover {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.12);\n}\n.event-details-modal .event-header {\n  display: flex;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 11px 14px 8px 14px;\n  border-bottom: 1px solid #f1f5f9;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #ffffff59 100%);\n}\n.event-details-modal .event-type-badge {\n  padding: 4px 8px;\n  border-radius: 11px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.53rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.event-details-modal .priority-badge {\n  padding: 3px 6px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.47rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  color: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.event-details-modal .priority-badge.priority-1 {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.event-details-modal .priority-badge.priority-2 {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.event-details-modal .priority-badge.priority-3 {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.event-details-modal .priority-badge:not(.priority-1):not(.priority-2):not(.priority-3) {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.event-details-modal .event-content {\n  padding: 11px;\n  width: 100%;\n  min-width: 0;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.event-details-modal .event-title {\n  margin: 0 0 5px 0;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: white;\n  line-height: 1.3;\n  padding: 5px 8px;\n  border-radius: 5px;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  word-break: break-word;\n  max-height: calc(1.3em * 2 + 10px);\n}\n.event-details-modal .event-description {\n  margin: 0 0 8px 0;\n  font-size: 0.6rem;\n  color: #64748b;\n  line-height: 1.4;\n  font-weight: 400;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  word-break: break-word;\n  max-height: calc(1.4em * 2);\n}\n.event-details-modal .event-details-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.event-details-modal .detail-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 5px;\n  padding: 5px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-details-modal .detail-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  transform: translateX(3px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);\n}\n.event-details-modal .detail-icon {\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  font-size: 8px;\n  flex-shrink: 0;\n  background: rgba(182, 138, 53, 0.1);\n  border: 1px solid rgba(182, 138, 53, 0.2);\n}\n.event-details-modal .detail-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.event-details-modal .detail-label {\n  font-size: 0.5rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.event-details-modal .detail-value {\n  font-size: 0.6rem;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  max-height: calc(1.3em * 2);\n}\n.event-details-modal .detail-value.link {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.event-details-modal .detail-value.link:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.event-details-modal .event-footer {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 8px;\n  border-top: 1px solid #f1f5f9;\n  margin-top: auto;\n  flex-shrink: 0;\n}\n.event-details-modal .status-badge {\n  padding: 4px 8px;\n  border-radius: 11px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.53rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.modal-content {\n  background: white;\n  border-radius: 13px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 70vw;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 21px;\n  border-bottom: 2px solid #f7fafc;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 27px;\n  height: 27px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 7px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-body {\n  padding: 21px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.all-user-events-modal .modal-content {\n  max-width: 90vw;\n  width: 95%;\n  height: 90vh;\n}\n.all-user-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));\n  gap: 16px;\n  padding: 0;\n}\n.all-user-events-modal .event-item {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  border-radius: 13px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  min-height: auto;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.all-user-events-modal .event-item:hover {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  box-shadow: 0 20px 40px rgba(182, 138, 53, 0.15);\n}\n.all-user-events-modal .event-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.all-user-events-modal .event-item:hover::before {\n  opacity: 1;\n}\n.event-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 13px 16px 11px 16px;\n  border-bottom: 1px solid #f1f5f9;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #ffffff 100%);\n}\n.event-type-badge {\n  padding: 5px 11px;\n  border-radius: 13px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n  margin-right: 3px;\n  margin-left: 3px;\n}\n.event-type-badge::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.event-type-badge:hover::before {\n  left: 100%;\n}\n.event-type-text {\n  position: relative;\n  z-index: 1;\n}\n.priority-badge {\n  padding: 4px 8px;\n  border-radius: 11px;\n  font-weight: 600;\n  font-size: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  color: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.priority-badge.priority-1 {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n}\n.priority-badge.priority-2 {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 100%);\n}\n.priority-badge.priority-3 {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981 0%,\n      #059669 100%);\n}\n.priority-badge:not(.priority-1):not(.priority-2):not(.priority-3) {\n  background:\n    linear-gradient(\n      135deg,\n      #6b7280 0%,\n      #4b5563 100%);\n}\n.all-user-events-modal .event-content {\n  padding: 16px;\n}\n.all-user-events-modal .event-title {\n  margin: 0 0 11px 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e293b;\n  line-height: 1.4;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.all-user-events-modal .event-description {\n  margin: 0 0 16px 0;\n  font-size: 0.67rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-weight: 400;\n}\n.event-details-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 11px;\n  margin-bottom: 16px;\n}\n.detail-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  border-radius: 8px;\n  border: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.detail-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.detail-icon {\n  width: 21px;\n  height: 21px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  font-size: 11px;\n  flex-shrink: 0;\n  background: rgba(182, 138, 53, 0.1);\n  border: 1px solid rgba(182, 138, 53, 0.2);\n}\n.detail-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.detail-label {\n  font-size: 0.54rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n}\n.detail-value {\n  font-size: 0.64rem;\n  font-weight: 500;\n  color: #1e293b;\n  line-height: 1.4;\n}\n.detail-value.link {\n  color: #3b82f6;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.detail-value.link:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.event-footer {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row-reverse;\n  padding-top: 11px;\n  border-top: 1px solid #f1f5f9;\n}\n.status-badge {\n  padding: 5px 11px;\n  border-radius: 13px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.57rem;\n  text-transform: uppercase;\n  letter-spacing: 0.33px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.status-badge::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.status-badge:hover::before {\n  left: 100%;\n}\n.status-text {\n  position: relative;\n  z-index: 1;\n}\n.day-reminders-modal .modal-content {\n  max-width: 80vw;\n  width: 90%;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.day-reminders-modal .modal-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.day-reminders-modal .reminders-list {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  padding: 4px;\n}\n.day-reminders-modal .reminder-item {\n  border-radius: 16px;\n  margin-bottom: 16px;\n  align-items: flex-start;\n  padding: 12px;\n  min-height: 170px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  background: #f7fafc;\n  min-height: 120px;\n  max-height: 180px;\n}\n.day-reminders-modal .reminder-item:hover {\n  border-color: #B68A35;\n  background: white;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.day-reminders-modal .reminder-content {\n  margin: 0 0 12px 0;\n  font-size: 1.2rem;\n  flex: 1;\n  margin-right: 10px;\n}\n.day-reminders-modal .reminder-title {\n  margin: 0 0 6px 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #2d3748;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n}\n.day-reminders-modal .reminder-description {\n  margin: 0 0 8px 0;\n  color: #6b7280;\n  font-size: 0.65rem;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: calc(1.3em * 2);\n}\n.day-reminders-modal .reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.day-reminders-modal .date-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.6rem;\n}\n.day-reminders-modal .date-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 80px;\n}\n.day-reminders-modal .date-value {\n  color: #6b7280;\n}\n.day-reminders-modal .reminder-actions {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  min-width: auto;\n}\n.day-reminders-modal .action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: visible;\n}\n.day-reminders-modal .action-btn svg {\n  width: 16px;\n  height: 16px;\n  stroke: currentColor;\n}\n.day-reminders-modal .edit-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-reminders-modal .edit-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AF5F 0%,\n      #B68A35 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.4);\n}\n.day-reminders-modal .delete-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);\n}\n.day-reminders-modal .delete-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);\n}\n.day-reminders-modal .action-btn[data-tooltip]::before,\n.day-reminders-modal .action-btn[data-tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  z-index: 9999;\n}\n.day-reminders-modal .action-btn[data-tooltip]::before {\n  content: attr(data-tooltip);\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-5px);\n  margin-bottom: 8px;\n  padding: 6px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.95) 0%,\n      rgba(30, 30, 30, 0.95) 100%);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 500;\n  border-radius: 6px;\n  white-space: nowrap;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  letter-spacing: 0.3px;\n}\n.day-reminders-modal .action-btn[data-tooltip]::after {\n  content: "";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-2px);\n  margin-bottom: 2px;\n  border: 5px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.95);\n}\n.day-reminders-modal .action-btn[data-tooltip]:hover::before,\n.day-reminders-modal .action-btn[data-tooltip]:hover::after {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.day-reminders-modal .action-btn:active {\n  transform: translateY(0) !important;\n}\n.day-reminders-modal .status-badge {\n  padding: 3px 6px;\n  border-radius: 6px;\n  color: white;\n  font-weight: 600;\n  font-size: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n  position: relative;\n  overflow: hidden;\n}\n.status-badge::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.status-badge:hover::before {\n  left: 100%;\n}\n.status-text {\n  position: relative;\n  z-index: 1;\n}\n.view-details-btn {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #B68A35 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.57rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.2);\n}\n.view-details-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #A87D2A 0%,\n      #B68A35 100%);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.35);\n}\n.view-details-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 6px rgba(182, 138, 53, 0.25);\n}\n.view-details-btn svg {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  color: white;\n}\n.day-reminders-modal .no-reminders {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 12px;\n  text-align: center;\n  color: #6b7280;\n}\n.day-reminders-modal .no-reminders svg {\n  margin-bottom: 10px;\n  color: #d1d5db;\n}\n.day-reminders-modal .no-reminders h4 {\n  margin: 0 0 6px 0;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #374151;\n}\n.day-reminders-modal .no-reminders p {\n  margin: 0;\n  font-size: 0.65rem;\n  line-height: 1.3;\n}\n@media (max-width: 1024px) {\n  .day-reminders-modal .reminders-list {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 10px;\n  }\n  .day-reminders-modal .reminder-item {\n    padding: 10px;\n  }\n  .day-reminders-modal .reminder-title {\n    font-size: 0.7rem;\n  }\n  .day-reminders-modal .reminder-description {\n    font-size: 0.6rem;\n  }\n  .day-reminders-modal .date-item {\n    font-size: 0.55rem;\n  }\n  .day-reminders-modal .action-btn {\n    width: 28px;\n    height: 28px;\n  }\n  .day-reminders-modal .action-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .day-reminders-modal .reminders-list {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .day-reminders-modal .reminder-item {\n    padding: 10px;\n  }\n  .day-reminders-modal .reminder-content {\n    margin-right: 0;\n    margin-bottom: 8px;\n  }\n  .day-reminders-modal .reminder-actions {\n    justify-content: flex-start;\n  }\n  .day-reminders-modal .action-btn {\n    width: 32px;\n    height: 32px;\n  }\n  .day-reminders-modal .action-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .day-reminders-modal .modal-content {\n    width: 100%;\n    margin: 0;\n    border-radius: 0;\n    max-height: 85vh;\n  }\n  .day-reminders-modal .modal-body {\n    padding: 8px;\n  }\n  .day-reminders-modal .reminders-list {\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n  .day-reminders-modal .reminder-item {\n    padding: 8px;\n  }\n  .day-reminders-modal .reminder-title {\n    font-size: 0.65rem;\n  }\n  .day-reminders-modal .reminder-description {\n    font-size: 0.55rem;\n  }\n  .day-reminders-modal .date-item {\n    font-size: 0.5rem;\n  }\n  .day-reminders-modal .date-label {\n    min-width: 60px;\n  }\n  .day-reminders-modal .action-btn {\n    width: 28px;\n    height: 28px;\n  }\n  .day-reminders-modal .action-btn svg {\n    width: 12px;\n    height: 12px;\n  }\n  .day-reminders-modal .no-reminders {\n    font-size: 0.44rem;\n  }\n  .day-reminders-modal .no-reminders h4 {\n    font-size: 0.75rem;\n  }\n  .day-reminders-modal .no-reminders p {\n    font-size: 0.6rem;\n  }\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  width: 34px;\n  height: 34px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 13px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner p {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.74rem;\n}\n.error-message {\n  position: fixed;\n  top: 13px;\n  right: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  padding: 13px 16px;\n  border-radius: 11px;\n  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.3);\n  z-index: 1000;\n  max-width: 268px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-content {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n.error-content svg {\n  flex-shrink: 0;\n}\n.error-content p {\n  margin: 0;\n  flex: 1;\n  font-weight: 600;\n}\n.retry-btn {\n  padding: 5px 11px;\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 0.54rem;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.retry-btn:hover {\n  background: white;\n  color: #dc3545;\n  transform: scale(1.05);\n}\n@keyframes reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1024px) {\n  ::ng-deep body,\n  ::ng-deep html {\n    overflow: hidden !important;\n    height: 100vh !important;\n    max-height: 100vh !important;\n  }\n  .modern-calendar-container {\n    padding: 7px;\n    min-height: 100vh;\n    max-height: 100vh;\n    height: 100vh;\n    overflow: hidden !important;\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: 0;\n  }\n  .modern-calendar-container * {\n    max-width: 100%;\n  }\n  .calendar-header {\n    margin-bottom: 8px;\n    gap: 5px;\n    flex-shrink: 0;\n  }\n  .page-title {\n    font-size: 1rem;\n    margin-bottom: 1px;\n  }\n  .page-subtitle {\n    font-size: 0.6rem;\n    margin: 0;\n  }\n  .main-content {\n    grid-template-columns: 1fr 200px;\n    gap: 8px;\n    max-height: calc(100vh - 120px);\n    overflow: hidden;\n    align-items: start;\n    flex: 1;\n    min-height: 0;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .main-calendar-section {\n    padding: 8px;\n    border-radius: 8px;\n    max-height: calc(100vh - 120px);\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n  }\n  .calendar-grid {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    min-height: 0;\n    overflow: hidden;\n  }\n  .calendar-days {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n  }\n  .calendar-days::-webkit-scrollbar {\n    width: 4px;\n  }\n  .calendar-days::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 2px;\n  }\n  .calendar-days::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 2px;\n  }\n  .main-calendar-section::-webkit-scrollbar {\n    width: 4px;\n  }\n  .main-calendar-section::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 2px;\n  }\n  .main-calendar-section::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 2px;\n  }\n  .calendar-stats-widget,\n  .mini-calendar-widget,\n  .todays-events-widget {\n    padding: 8px;\n    border-radius: 8px;\n    flex-shrink: 0;\n  }\n  .calendar-navigation {\n    margin-bottom: 7px;\n    padding-bottom: 5px;\n  }\n  .current-month h2 {\n    font-size: 0.87rem;\n  }\n  .nav-btn {\n    width: 24px;\n    height: 24px;\n  }\n  .nav-btn svg {\n    width: 11px;\n    height: 11px;\n  }\n  .today-btn {\n    padding: 5px 13px;\n    font-size: 0.5rem;\n    min-width: 80px;\n  }\n  .week-day {\n    padding: 5px 3px;\n    font-size: 0.5rem;\n  }\n  .calendar-day {\n    min-height: 50px;\n    padding: 4px;\n    overflow: hidden;\n  }\n  .day-number {\n    width: 16px;\n    height: 16px;\n    font-size: 0.57rem;\n  }\n  .event-title {\n    font-size: 0.3rem;\n    padding: 3px 4px;\n    line-height: 1.1;\n  }\n  .stats-header h3 {\n    font-size: 0.5rem;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 5px;\n  }\n  .stat-item {\n    padding: 7px;\n    gap: 5px;\n  }\n  .stat-icon {\n    width: 21px;\n    height: 21px;\n  }\n  .stat-icon svg {\n    width: 11px;\n    height: 11px;\n  }\n  .stat-count {\n    font-size: 0.87rem;\n  }\n  .stat-label {\n    font-size: 0.47rem;\n  }\n  .widget-header {\n    margin-bottom: 7px;\n    padding-bottom: 5px;\n  }\n  .widget-header h3 {\n    font-size: 0.64rem;\n  }\n  .widget-header svg {\n    width: 11px;\n    height: 11px;\n  }\n  .mini-week-day {\n    padding: 3px 1px;\n    font-size: 0.44rem;\n  }\n  .mini-calendar-day {\n    font-size: 0.47rem;\n  }\n  .event-item {\n    padding: 5px;\n    min-height: 67px;\n  }\n  .event-item .event-time {\n    font-size: 0.44rem;\n    min-width: 50px;\n  }\n  .event-item .event-title {\n    font-size: 0.5rem;\n  }\n  .event-item .event-type {\n    font-size: 0.4rem;\n  }\n  .reminder-actions {\n    gap: 5px;\n    margin-right: 5px;\n  }\n  .reminder-actions .btn {\n    padding: 5px 8px;\n    font-size: 0.5rem;\n  }\n  .reminder-actions .btn svg {\n    width: 9px;\n    height: 9px;\n  }\n  .display-btn,\n  .view-btn {\n    padding: 4px 8px;\n    font-size: 0.5rem;\n  }\n  .display-btn svg,\n  .view-btn svg {\n    width: 9px;\n    height: 9px;\n  }\n  .display-mode-toggle,\n  .view-mode-toggle {\n    padding: 3px;\n  }\n  .todays-events-list {\n    max-height: 187px;\n    gap: 5px;\n  }\n  .day-view-content {\n    padding: 11px;\n    gap: 11px;\n  }\n  .day-name {\n    font-size: 1.2rem;\n  }\n  .day-date {\n    font-size: 0.67rem;\n  }\n  .section-title {\n    font-size: 0.74rem;\n    margin-bottom: 8px;\n  }\n  .section-title svg {\n    width: 9px;\n    height: 9px;\n  }\n  .events-list,\n  .reminders-list {\n    gap: 7px;\n  }\n  .event-item,\n  .reminder-item {\n    padding: 8px;\n  }\n  .event-title,\n  .reminder-title {\n    font-size: 0.6rem;\n  }\n  .event-time,\n  .reminder-time {\n    font-size: 0.54rem;\n  }\n  .day-event-titles {\n    max-height: 47px !important;\n    gap: 1px;\n  }\n  .more-events-indicator {\n    font-size: 0.4rem;\n    padding: 1px 3px;\n    margin-top: 1px;\n  }\n  .sidebar-section {\n    gap: 8px;\n    max-height: calc(100vh - 120px);\n    overflow-y: auto !important;\n    overflow-x: hidden;\n    padding-right: 3px;\n    position: relative;\n    height: 100%;\n    box-sizing: border-box;\n  }\n  .sidebar-section::-webkit-scrollbar {\n    width: 5px;\n  }\n  .sidebar-section::-webkit-scrollbar-track {\n    background: #f1f1f1;\n    border-radius: 3px;\n  }\n  .sidebar-section::-webkit-scrollbar-thumb {\n    background: #c1c1c1;\n    border-radius: 3px;\n  }\n  .sidebar-section::-webkit-scrollbar-thumb:hover {\n    background: #a8a8a8;\n  }\n  .calendar-stats-widget {\n    padding-bottom: 8px;\n  }\n  .stats-header {\n    margin-bottom: 7px;\n    padding-bottom: 4px;\n  }\n  .mini-calendar-widget,\n  .todays-events-widget {\n    padding-bottom: 8px;\n  }\n  .modal-content {\n    max-width: 65vw;\n    width: 85%;\n  }\n  .modal-header {\n    padding: 11px 16px;\n  }\n  .modal-header h3 {\n    font-size: 0.8rem;\n  }\n  .modal-body {\n    padding: 13px;\n    max-height: 68vh;\n  }\n}\n@media (max-width: 1200px) {\n  .main-content {\n    grid-template-columns: 1fr 200px;\n    gap: 13px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .main-content {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .sidebar-section {\n    order: -1;\n  }\n  .calendar-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .display-mode-toggle {\n    margin-right: 0;\n    margin-bottom: 16px;\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .modern-calendar-container {\n    padding: 11px;\n  }\n  .page-title {\n    font-size: 1.34rem;\n  }\n  .main-calendar-section {\n    padding: 11px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 8px;\n  }\n  .stat-item {\n    padding: 8px;\n    gap: 5px;\n  }\n  .stat-icon {\n    width: 21px;\n    height: 21px;\n  }\n  .stat-count {\n    font-size: 0.8rem;\n  }\n  .calendar-navigation {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .current-month h2 {\n    font-size: 0.94rem;\n  }\n  .calendar-day {\n    min-height: 54px;\n    padding: 5px;\n  }\n  .day-number {\n    width: 16px;\n    height: 16px;\n    font-size: 0.6rem;\n  }\n  .event-title {\n    font-size: 0.47rem;\n    padding: 3px 5px;\n  }\n  .day-view-content {\n    padding: 13px;\n    gap: 13px;\n  }\n  .day-name {\n    font-size: 1.34rem;\n  }\n  .section-title {\n    font-size: 0.8rem;\n  }\n  .event-item,\n  .reminder-item {\n    padding: 11px;\n    gap: 8px;\n  }\n  .event-title,\n  .reminder-title {\n    font-size: 0.67rem;\n  }\n  .mini-calendar-widget,\n  .todays-events-widget,\n  .quick-actions-widget {\n    padding: 11px;\n  }\n}\n@media (max-width: 576px) {\n  .modern-calendar-container {\n    padding: 8px;\n  }\n  .page-title {\n    font-size: 1.2rem;\n  }\n  .page-subtitle {\n    font-size: 0.67rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .display-mode-toggle {\n    margin-right: 0;\n    grid-auto-rows: 350px;\n    gap: 16px;\n  }\n  .display-mode-toggle .display-btn {\n    padding: 5px 11px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle .reminder-actions {\n    max-height: 350px;\n    border-radius: 14px;\n    margin-right: 0;\n    margin-bottom: 11px;\n  }\n  .display-mode-toggle .view-mode-toggle {\n    width: 100%;\n    justify-content: center;\n    border-radius: 8px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 14px 18px 10px 18px;\n  }\n  .display-mode-toggle .calendar-navigation {\n    flex-direction: column;\n    gap: 11px;\n  }\n  .display-mode-toggle .nav-btn {\n    padding: 5px 10px;\n    font-size: 0.7rem;\n    border-radius: 14px;\n    height: 27px;\n  }\n  .display-mode-toggle .calendar-day {\n    font-size: 0.65rem;\n    border-radius: 10px;\n  }\n  .display-mode-toggle .day-number {\n    padding: 18px;\n    height: 13px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle .event-item .event-content {\n    min-width: 0;\n  }\n  .display-mode-toggle .event-item .event-title {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n    padding: 8px 12px;\n    border-radius: 8px;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    white-space: nowrap;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    position: relative;\n    z-index: 1;\n    max-height: calc(1.4em * 2 + 16px);\n  }\n  .display-mode-toggle .event-item .event-content .event-description,\n  .display-mode-toggle .reminder-description {\n    font-size: 0.67rem;\n    margin-bottom: 16px;\n    overflow-wrap: break-word;\n    white-space: normal;\n    max-width: 100%;\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n    text-wrap: wrap;\n    max-height: calc(1.5em * 3);\n  }\n  .display-mode-toggle .event-item .event-content .event-type,\n  .display-mode-toggle .reminder-type {\n    gap: 10px;\n    margin-bottom: 16px;\n    font-size: 0.75rem !important;\n    text-wrap: wrap;\n    padding: 8px;\n    border-radius: 8px;\n  }\n  .display-mode-toggle .reminder-item .reminder-content {\n    min-width: 0 !important;\n  }\n  .display-mode-toggle .reminder-item .reminder-content .reminder-title,\n  .display-mode-toggle .reminder-description {\n    font-size: 0.75rem;\n    margin-bottom: 8px;\n    word-wrap: break-word;\n  }\n  .display-mode-toggle .event-title {\n    font-size: 0.8rem;\n    padding: 3px 6px;\n    overflow-wrap: break-word;\n    white-space: nowrap;\n    max-width: 100%;\n    text-overflow: ellipsis;\n    max-height: calc(1.4em * 2);\n    position: relative;\n    z-index: 1;\n  }\n  .display-mode-toggle .date-label {\n    padding-top: 10px;\n    font-size: 0.8rem !important;\n    width: 80px !important;\n  }\n  .display-mode-toggle .date-value {\n    font-size: 0.7rem !important;\n  }\n  .display-mode-toggle .week-day {\n    padding: 5px 3px;\n    font-size: 0.54rem;\n  }\n  .display-mode-toggle .day-view-content {\n    padding: 11px;\n    gap: 11px;\n  }\n  .display-mode-toggle .day-name {\n    font-size: 1.2rem;\n  }\n  .display-mode-toggle .day-date {\n    font-size: 0.67rem;\n  }\n  .display-mode-toggle .section-title {\n    font-size: 0.74rem;\n  }\n  .display-mode-toggle .event-item,\n  .display-mode-toggle .reminder-item {\n    padding: 7px;\n    gap: 7px;\n  }\n  .display-mode-toggle .event-title,\n  .display-mode-toggle .reminder-title {\n    font-size: 0.6rem;\n  }\n  .display-mode-toggle .mini-calendar-widget,\n  .display-mode-toggle .todays-events-widget {\n    padding: 7px;\n  }\n  .display-mode-toggle .modal-content {\n    margin: 7px;\n    max-height: 80vh;\n    max-width: 100vw !important;\n  }\n  .display-mode-toggle .modal-header,\n  .display-mode-toggle .modal-body {\n    padding: 11px;\n  }\n  .display-mode-toggle .modal-header h3 {\n    font-size: 0.8rem;\n  }\n  .display-mode-toggle .all-user-events-modal .modal-content {\n    padding: 22px;\n    max-height: 95vh;\n    max-width: 100vw !important;\n    width: 98%;\n  }\n  .display-mode-toggle .all-user-events-modal .events-list {\n    padding: 0;\n  }\n  .display-mode-toggle .all-user-events-modal .event-item {\n    border-radius: 16px;\n    margin: 0;\n  }\n  .display-mode-toggle .event-header {\n    max-height: calc(1.4em * 2 + 22px);\n    padding: 16px 20px 12px 20px;\n    flex-direction: column;\n    gap: 8px;\n    font-size: 0.95rem;\n    margin-bottom: 20px;\n    margin-right: 5px;\n    align-items: flex-start;\n  }\n  .display-mode-toggle .event-type-badge {\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n    border-radius: 16px;\n  }\n  .display-mode-toggle .priority-badge {\n    max-height: calc(1.5em * 3);\n    padding: 4px 8px;\n    font-size: 0.7rem;\n    border-radius: 12px;\n  }\n  .display-mode-toggle .all-user-events-modal .event-content {\n    padding: 20px;\n    gap: 14px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle .all-user-events-modal .event-title {\n    padding: 11px;\n    gap: 11px;\n    font-size: 1.3rem;\n    margin-bottom: 12px;\n  }\n  .display-mode-toggle .detail-icon {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle .event-details-grid {\n    font-size: 0.8rem;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .display-mode-toggle .detail-item {\n    max-height: calc(1.4em * 2);\n    border-radius: 10px;\n    padding: 7px 14px;\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle .detail-label {\n    font-size: 0.75rem;\n    padding: 5px 10px;\n  }\n  .display-mode-toggle .detail-value {\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle .detail-value {\n    font-size: 0.85rem;\n  }\n  .display-mode-toggle .event-footer {\n    padding-top: 12px;\n  }\n  .display-mode-toggle .status-badge {\n    padding: 6px 12px;\n    font-size: 0.75rem;\n    border-radius: 16px;\n  }\n  .display-mode-toggle .event-details-modal .modal-content {\n    margin: 5px;\n    max-height: 90vh;\n    max-width: 100vw !important;\n    width: 98%;\n  }\n  .display-mode-toggle .event-details-modal .modal-body {\n    padding: 8px;\n    flex: 1;\n    overflow: hidden;\n    min-height: 0;\n  }\n  .display-mode-toggle .event-details-modal .events-list {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 220px;\n    gap: 8px;\n    height: 100%;\n    overflow-y: auto;\n    align-items: start;\n  }\n  .display-mode-toggle .event-details-modal .event-details-item {\n    height: 100%;\n    max-height: 220px;\n    border-radius: 8px;\n  }\n  .display-mode-toggle .event-details-modal .event-details-item:hover {\n    transform: translateY(-1px);\n  }\n  .display-mode-toggle .event-details-modal .event-header {\n    border-radius: 6px;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding: 6px 8px 5px 8px;\n    flex-direction: column;\n    gap: 4px;\n    align-items: flex-start;\n  }\n  .display-mode-toggle .event-details-modal .event-type-badge {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  .display-mode-toggle .event-details-modal .priority-badge {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  .display-mode-toggle .event-details-modal .event-content {\n    padding: 8px;\n    width: 100%;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .display-mode-toggle .event-details-modal .event-title {\n    font-size: 0.65rem;\n    margin-bottom: 4px;\n    padding: 4px 6px;\n    border-radius: 4px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-height: calc(1.3em * 2 + 12px);\n  }\n  .display-mode-toggle .event-details-modal .event-description {\n    font-size: 0.55rem;\n    margin-bottom: 6px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    word-wrap: break-word;\n    word-break: break-word;\n    max-height: calc(1.4em * 2);\n  }\n  .display-mode-toggle .event-details-modal .event-details-grid {\n    gap: 4px;\n    margin-bottom: 6px;\n  }\n  .display-mode-toggle .event-details-modal .detail-item {\n    padding: 4px;\n    border-radius: 4px;\n    gap: 4px;\n  }\n  .display-mode-toggle .event-details-modal .detail-item:hover {\n    transform: translateX(2px);\n  }\n  .display-mode-toggle .event-details-modal .detail-icon {\n    width: 12px;\n    height: 12px;\n    font-size: 7px;\n    border-radius: 3px;\n  }\n  .display-mode-toggle .event-details-modal .detail-label {\n    font-size: 0.5rem;\n  }\n  .display-mode-toggle .event-details-modal .detail-value {\n    font-size: 0.55rem;\n    max-height: calc(1.3em * 2);\n  }\n  .display-mode-toggle .event-details-modal .event-footer {\n    padding-top: 5px;\n  }\n  .display-mode-toggle .event-details-modal .status-badge {\n    padding: 3px 6px;\n    font-size: 0.5rem;\n    border-radius: 6px;\n  }\n  @media (max-width: 768px) and (min-width: 577px) {\n    .all-user-events-modal .events-list {\n      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n      gap: 20px;\n    }\n    .all-user-events-modal .event-content {\n      padding: 20px;\n    }\n    .all-user-events-modal .event-title {\n      font-size: 0.8rem;\n    }\n    .all-user-events-modal .event-description {\n      font-size: 0.67rem;\n    }\n    .event-details-grid {\n      gap: 14px;\n    }\n    .detail-item {\n      padding: 11px;\n    }\n    .event-details-modal .modal-content {\n      max-width: 80vw;\n      width: 85%;\n      max-height: 90vh;\n    }\n    .event-details-modal .modal-body {\n      padding: 8px;\n      flex: 1;\n      overflow: hidden;\n      min-height: 0;\n    }\n    .event-details-modal .events-list {\n      grid-template-columns: 1fr;\n      grid-auto-rows: 190px;\n      gap: 8px;\n      height: 100%;\n      overflow-y: auto;\n      align-items: start;\n    }\n    .event-details-modal .event-details-item {\n      height: 100%;\n      max-height: 190px;\n    }\n    .event-details-modal .event-content {\n      padding: 8px;\n      width: 100%;\n      min-width: 0;\n      overflow: hidden;\n    }\n    .event-details-modal .event-title {\n      font-size: 0.65rem;\n      padding: 4px 6px;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n      word-wrap: break-word;\n      word-break: break-word;\n      max-height: calc(1.3em * 2 + 12px);\n    }\n    .event-details-modal .event-description {\n      font-size: 0.55rem;\n      margin-bottom: 6px;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      line-clamp: 2;\n      -webkit-box-orient: vertical;\n      word-wrap: break-word;\n      word-break: break-word;\n      max-height: calc(1.4em * 2);\n    }\n    .event-details-modal .event-details-grid {\n      gap: 4px;\n      margin-bottom: 6px;\n    }\n    .event-details-modal .detail-item {\n      padding: 4px;\n      gap: 4px;\n    }\n    .event-details-modal .detail-icon {\n      width: 12px;\n      height: 12px;\n      font-size: 7px;\n    }\n    .event-details-modal .detail-label {\n      font-size: 0.5rem;\n    }\n    .event-details-modal .detail-value {\n      font-size: 0.55rem;\n      max-height: calc(1.3em * 2);\n    }\n    .event-details-modal .event-header {\n      padding: 6px 8px 5px 8px;\n    }\n    .event-details-modal .event-type-badge {\n      padding: 3px 6px;\n      font-size: 0.5rem;\n    }\n    .event-details-modal .priority-badge {\n      padding: 3px 6px;\n      font-size: 0.5rem;\n    }\n  }\n  .modern-calendar-container.rtl .calendar-header {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl .event-details,\n  .modern-calendar-container.rtl .reminder-details {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl .modal-header.rtl {\n    flex-direction: row-reverse;\n  }\n  .modern-calendar-container.rtl .modal-header.rtl h3 {\n    text-align: right;\n  }\n  .modern-calendar-container.rtl .modal-header.rtl .close-btn {\n    order: -1;\n  }\n}\n/*# sourceMappingURL=calendar.component-EXK2ONLC.css.map */\n'] }]
  }], () => [{ type: CalendarService }, { type: CalendarStatsService }, { type: TranslationService }, { type: LangService }, { type: ReminderService }, { type: Router }], { allRemindersModal: [{
    type: ViewChild,
    args: ["allRemindersModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/components/calendar/calendar.component.ts", lineNumber: 30 });
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
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [CalendarService, ReminderService, CalendarStatsService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    CalendarRoutingModule,
    CalendarTableViewComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      declarations: [
        CalendarComponent,
        AddReminderModalComponent,
        EditReminderModalComponent,
        AllRemindersModalComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        SharedModule,
        CalendarRoutingModule,
        CalendarTableViewComponent
      ],
      providers: [CalendarService, ReminderService, CalendarStatsService],
      exports: [CalendarComponent]
    }]
  }], null, null);
})();
export {
  CalendarModule
};
//# sourceMappingURL=chunk-D3LYV4XL.js.map
