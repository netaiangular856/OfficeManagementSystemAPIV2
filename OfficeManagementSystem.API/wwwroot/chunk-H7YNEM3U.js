import {
  SharedModule
} from "./chunk-Q3OCNH2X.js";
import {
  CalendarService,
  EventStatus,
  EventType
} from "./chunk-A37QRR6I.js";
import "./chunk-AB3H54HS.js";
import "./chunk-MTXLR2EH.js";
import "./chunk-WEYYT6CR.js";
import "./chunk-N3L5GGM5.js";
import {
  RouterModule
} from "./chunk-O632SAIF.js";
import "./chunk-FKP4CUQH.js";
import "./chunk-OTJ6H5LH.js";
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
  environment,
  ɵNgNoValidate
} from "./chunk-ODVCO6WW.js";
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
  SlicePipe,
  TranslationService,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-66AA6EL7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

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
      this.loading.set(true);
      this.error.set(null);
      const formValue = this.reminderForm.value;
      const reminderData = {
        title: formValue.title,
        description: formValue.description,
        eventTime: new Date(formValue.eventTime).toISOString(),
        reminderTime: new Date(formValue.reminderTime).toISOString()
      };
      this.reminderService.createReminder(reminderData).subscribe({
        next: (response) => {
          this.loading.set(false);
          if (response.success) {
            this.reminderCreated.emit();
            this.closeModal.emit();
            this.resetForm();
          } else {
            this.error.set(response.message || this.translate("reminders.create_error"));
          }
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error creating reminder:", error);
          this.error.set(this.translate("reminders.create_error"));
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.add-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-reminder-modal.component-N2ON3RFK.css.map */"] });
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
`, styles: ["/* src/app/components/calendar/add-reminder-modal/add-reminder-modal.component.css */\n.add-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-reminder-modal.component-N2ON3RFK.css.map */\n"] }]
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
      const eventTime = new Date(this.reminder.eventTime);
      const reminderTime = new Date(this.reminder.reminderTime);
      const eventTimeFormatted = this.formatDateTimeForInput(eventTime);
      const reminderTimeFormatted = this.formatDateTimeForInput(reminderTime);
      this.reminderForm.patchValue({
        title: this.reminder.title,
        description: this.reminder.description,
        eventTime: eventTimeFormatted,
        reminderTime: reminderTimeFormatted
      });
    }
  }
  formatDateTimeForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  onSubmit() {
    if (this.reminderForm.valid && this.reminder) {
      this.loading.set(true);
      this.error.set(null);
      const formValue = this.reminderForm.value;
      const reminderData = {
        id: this.reminder.id,
        title: formValue.title,
        description: formValue.description,
        eventTime: new Date(formValue.eventTime).toISOString(),
        reminderTime: new Date(formValue.reminderTime).toISOString()
      };
      this.reminderService.updateReminder(reminderData).subscribe({
        next: (response) => {
          this.loading.set(false);
          if (response.success) {
            this.reminderUpdated.emit();
            this.closeModal.emit();
          } else {
            this.error.set(response.message || this.translate("reminders.update_error"));
          }
        },
        error: (error) => {
          this.loading.set(false);
          console.error("Error updating reminder:", error);
          this.error.set(this.translate("reminders.update_error"));
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.edit-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-LQJ6J4RN.css.map */"] });
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
`, styles: ["/* src/app/components/calendar/edit-reminder-modal/edit-reminder-modal.component.css */\n.edit-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  max-width: 700px;\n  max-height: 95vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-LQJ6J4RN.css.map */\n"] }]
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
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("loading"));
  }
}
function AllRemindersModalComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "circle", 19)(3, "line", 20)(4, "line", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 22);
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("retry"), " ");
  }
}
function AllRemindersModalComponent_div_0_div_12_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
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
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h4", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AllRemindersModalComponent_div_0_div_12_div_1_p_4_Template, 2, 1, "p", 29);
    \u0275\u0275elementStart(5, "div", 30)(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 31)(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 34)(17, "button", 35);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_12_div_1_Template_button_click_17_listener() {
      const reminder_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onEditReminder(reminder_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 36);
    \u0275\u0275element(19, "path", 37)(20, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 39);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_12_div_1_Template_button_click_22_listener() {
      const reminder_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeleteReminder(reminder_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 36);
    \u0275\u0275element(24, "polyline", 40)(25, "path", 41)(26, "line", 42)(27, "line", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.edit"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.delete"), " ");
  }
}
function AllRemindersModalComponent_div_0_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 19)(3, "path", 47)(4, "line", 48);
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
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, AllRemindersModalComponent_div_0_div_12_div_1_Template, 29, 8, "div", 24)(2, AllRemindersModalComponent_div_0_div_12_div_2_Template, 9, 2, "div", 25);
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
function AllRemindersModalComponent_div_0_div_14_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function AllRemindersModalComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 9)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50)(13, "button", 51);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelDelete());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 52);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_div_14_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275template(16, AllRemindersModalComponent_div_0_div_14_span_16_Template, 1, 0, "span", 53);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.confirm_delete"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("reminders.confirm_delete"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("reminders.delete"), " ");
  }
}
function AllRemindersModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function AllRemindersModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275template(10, AllRemindersModalComponent_div_0_div_10_Template, 4, 1, "div", 10)(11, AllRemindersModalComponent_div_0_div_11_Template, 9, 2, "div", 11)(12, AllRemindersModalComponent_div_0_div_12_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "app-edit-reminder-modal", 13);
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
    \u0275\u0275template(14, AllRemindersModalComponent_div_0_div_14_Template, 18, 7, "div", 14);
    \u0275\u0275elementEnd();
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
    \u0275\u0275property("ngIf", ctx_r1.showDeleteConfirm());
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
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  static \u0275fac = function AllRemindersModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AllRemindersModalComponent)(\u0275\u0275directiveInject(ReminderService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllRemindersModalComponent, selectors: [["app-all-reminders-modal"]], inputs: { isOpen: "isOpen" }, outputs: { closeModal: "closeModal", reminderUpdated: "reminderUpdated" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "all-reminders-modal", 3, "click", 4, "ngIf"], [1, "all-reminders-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "reminders-list", 4, "ngIf"], [3, "reminderUpdated", "closeModal", "isOpen", "reminder"], ["class", "delete-confirm-modal", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "reminders-list"], ["class", "reminder-item", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "reminder-item"], [1, "reminder-content"], [1, "reminder-title"], ["class", "reminder-description", 4, "ngIf"], [1, "reminder-dates"], [1, "date-item"], [1, "date-label"], [1, "date-value"], [1, "reminder-actions"], [1, "action-btn", "edit-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "action-btn", "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "reminder-description"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "delete-confirm-modal", 3, "click"], [1, "modal-actions"], [1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "btn", "btn-danger", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"]], template: function AllRemindersModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AllRemindersModalComponent_div_0_Template, 15, 7, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen());
    }
  }, dependencies: [NgForOf, NgIf, EditReminderModalComponent], styles: ["\n\n.all-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px !important;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  height: 98vh;\n  max-width: 1400px;\n  max-height: 98vh;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 12px 12px 0px 0px !important;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: calc(100% - 80px);\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  flex: 1;\n  height: 100%;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 8px 16px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.reminders-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n}\n.reminder-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.date-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 100px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n  flex: 1;\n  height: 100%;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.delete-confirm-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.delete-confirm-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 1024px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    max-width: 1000px;\n    height: 96vh;\n    max-height: 96vh;\n    margin: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n    max-height: 97vh;\n    height: 97vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 12px;\n  }\n  .reminder-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 12px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    margin-bottom: 6px;\n  }\n  .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 8px;\n  }\n  .reminder-dates[_ngcontent-%COMP%] {\n    gap: 2px;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .date-label[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .reminder-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n    padding: 8px 12px;\n    font-size: 0.8rem;\n  }\n  .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    padding: 10px;\n    margin-bottom: 8px;\n  }\n  .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .reminder-description[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .date-label[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    font-size: 0.75rem;\n  }\n  .action-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-A6JB4WQ2.css.map */"] });
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
        <p>{{ translate('loading') }}</p>\r
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
          {{ translate('retry') }}\r
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
            <button class="action-btn edit-btn" (click)="onEditReminder(reminder)">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
              </svg>\r
              {{ translate('reminders.edit') }}\r
            </button>\r
            <button class="action-btn delete-btn" (click)="onDeleteReminder(reminder)">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="3,6 5,6 21,6"></polyline>\r
                <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>\r
                <line x1="10" y1="11" x2="10" y2="17"></line>\r
                <line x1="14" y1="11" x2="14" y2="17"></line>\r
              </svg>\r
              {{ translate('reminders.delete') }}\r
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
  <div class="delete-confirm-modal" *ngIf="showDeleteConfirm()" (click)="cancelDelete()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ translate('reminders.confirm_delete') }}</h3>\r
        <button class="close-btn" (click)="cancelDelete()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <div class="modal-body">\r
        <p>{{ translate('reminders.confirm_delete') }}</p>\r
        <div class="modal-actions">\r
          <button class="btn btn-secondary" (click)="cancelDelete()" [disabled]="loading()">\r
            {{ translate('reminders.cancel') }}\r
          </button>\r
          <button class="btn btn-danger" (click)="confirmDelete()" [disabled]="loading()">\r
            <span *ngIf="loading()" class="spinner"></span>\r
            {{ translate('reminders.delete') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.css */\n.all-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px !important;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 95%;\n  height: 98vh;\n  max-width: 1400px;\n  max-height: 98vh;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 12px 12px 0px 0px !important;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: calc(100% - 80px);\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  flex: 1;\n  height: 100%;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state svg {\n  margin-bottom: 16px;\n}\n.retry-btn {\n  margin-top: 16px;\n  padding: 8px 16px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.retry-btn:hover {\n  background-color: #B68A35;\n}\n.reminders-list {\n  flex: 1;\n  overflow-y: auto;\n}\n.reminder-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n}\n.reminder-item:last-child {\n  margin-bottom: 0;\n}\n.reminder-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content {\n  flex: 1;\n  margin-right: 16px;\n}\n.reminder-title {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.reminder-description {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.date-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.date-value {\n  color: #6b7280;\n}\n.reminder-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 100px;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-btn {\n  background-color: #B68A35;\n  color: white;\n}\n.edit-btn:hover {\n  background-color: #B68A35;\n}\n.delete-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background-color: #fee2e2;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n  flex: 1;\n  height: 100%;\n}\n.empty-state svg {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.delete-confirm-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.delete-confirm-modal .modal-content {\n  width: 90%;\n  max-width: 400px;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .reminder-item {\n  flex-direction: row-reverse;\n}\n.rtl .reminder-content {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.rtl .reminder-actions {\n  flex-direction: column;\n}\n.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 1024px) {\n  .modal-content {\n    width: 98%;\n    max-width: 1000px;\n    height: 96vh;\n    max-height: 96vh;\n    margin: 20px;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 20px;\n  }\n  .reminder-item {\n    padding: 14px;\n  }\n  .reminder-title {\n    font-size: 0.95rem;\n  }\n  .reminder-description {\n    font-size: 0.8rem;\n  }\n  .date-item {\n    font-size: 0.8rem;\n  }\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 98%;\n    margin: 10px;\n    max-width: none;\n    max-height: 97vh;\n    height: 97vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .modal-title {\n    font-size: 1.1rem;\n  }\n  .reminder-item {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 12px;\n  }\n  .reminder-content {\n    margin-right: 0;\n    margin-bottom: 12px;\n  }\n  .reminder-title {\n    font-size: 0.9rem;\n    margin-bottom: 6px;\n  }\n  .reminder-description {\n    font-size: 0.75rem;\n    margin-bottom: 8px;\n  }\n  .reminder-dates {\n    gap: 2px;\n  }\n  .date-item {\n    font-size: 0.75rem;\n  }\n  .date-label {\n    min-width: 100px;\n  }\n  .reminder-actions {\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  .action-btn {\n    flex: 1;\n    justify-content: center;\n    padding: 8px 12px;\n    font-size: 0.8rem;\n  }\n  .action-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content {\n    width: 100%;\n    height: 100vh;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header {\n    padding: 12px 16px;\n  }\n  .modal-body {\n    padding: 12px;\n  }\n  .modal-title {\n    font-size: 1rem;\n  }\n  .reminder-item {\n    padding: 10px;\n    margin-bottom: 8px;\n  }\n  .reminder-title {\n    font-size: 0.85rem;\n  }\n  .reminder-description {\n    font-size: 0.7rem;\n  }\n  .date-item {\n    font-size: 0.7rem;\n  }\n  .date-label {\n    min-width: 80px;\n  }\n  .action-btn {\n    padding: 6px 8px;\n    font-size: 0.75rem;\n  }\n  .action-btn svg {\n    width: 12px;\n    height: 12px;\n  }\n  .empty-state {\n    padding: 40px 16px;\n  }\n  .empty-state svg {\n    width: 40px;\n    height: 40px;\n  }\n  .empty-state h4 {\n    font-size: 1rem;\n  }\n  .empty-state p {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-A6JB4WQ2.css.map */\n"] }]
  }], () => [{ type: ReminderService }, { type: TranslationService }, { type: LangService }], { isOpen: [{
    type: Input
  }], closeModal: [{
    type: Output
  }], reminderUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllRemindersModalComponent, { className: "AllRemindersModalComponent", filePath: "src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.ts", lineNumber: 13 });
})();

// src/app/components/calendar/calendar.component.ts
var _c0 = ["allRemindersModal"];
function CalendarComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r2, " ");
  }
}
function CalendarComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, CalendarComponent_div_43_div_1_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.weekDays);
  }
}
function CalendarComponent_div_45_div_4_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "div", 84);
    \u0275\u0275elementStart(2, "div", 85)(3, "div", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r6.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 6, event_r6.startDate, "shortTime"), " - ", \u0275\u0275pipeBind2(8, 9, event_r6.endDate, "shortTime"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r6.type), " ");
  }
}
function CalendarComponent_div_45_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "h4", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "rect", 37)(4, "line", 38)(5, "line", 39)(6, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 82);
    \u0275\u0275template(9, CalendarComponent_div_45_div_4_div_7_div_9_Template, 11, 12, "div", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("calendar.events"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUserEventsForDate(day_r5));
  }
}
function CalendarComponent_div_45_div_4_div_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "div", 93);
    \u0275\u0275elementStart(2, "div", 94)(3, "div", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 96);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reminder_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getReminderColor(reminder_r7, 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, reminder_r7.reminderTime, "shortTime"), " ");
  }
}
function CalendarComponent_div_45_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "h4", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "circle", 12)(4, "path", 16)(5, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 90);
    \u0275\u0275template(8, CalendarComponent_div_45_div_4_div_8_div_8_Template, 8, 7, "div", 91);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("reminders.all_reminders"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getRemindersForDate(day_r5));
  }
}
function CalendarComponent_div_45_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 98);
    \u0275\u0275element(2, "rect", 37)(3, "line", 38)(4, "line", 39)(5, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "div", 75)(2, "h3", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CalendarComponent_div_45_div_4_div_7_Template, 10, 2, "div", 78)(8, CalendarComponent_div_45_div_4_div_8_Template, 9, 2, "div", 79)(9, CalendarComponent_div_45_div_4_div_9_Template, 8, 1, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getDayName(day_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, day_r5, "fullDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(day_r5).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getRemindersForDate(day_r5).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(day_r5).length === 0 && ctx_r2.getRemindersForDate(day_r5).length === 0);
  }
}
function CalendarComponent_div_45_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    \u0275\u0275property("title", event_r8.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r8.title, " ");
  }
}
function CalendarComponent_div_45_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r9 = ctx.$implicit;
    \u0275\u0275property("title", reminder_r9.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reminder_r9.title, " ");
  }
}
function CalendarComponent_div_45_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" +", ctx_r2.getUserEventsForDate(day_r5).length + ctx_r2.getRemindersForDate(day_r5).length - 5, " ", ctx_r2.translate("calendar.more"), " ");
  }
}
function CalendarComponent_div_45_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275template(1, CalendarComponent_div_45_div_5_div_1_Template, 2, 2, "div", 100);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, CalendarComponent_div_45_div_5_div_3_Template, 2, 2, "div", 101);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275template(5, CalendarComponent_div_45_div_5_div_5_Template, 2, 2, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 3, ctx_r2.getUserEventsForDate(day_r5), 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 7, ctx_r2.getRemindersForDate(day_r5), 0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.getUserEventsForDate(day_r5).length + ctx_r2.getRemindersForDate(day_r5).length > 5);
  }
}
function CalendarComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function CalendarComponent_div_45_Template_div_click_0_listener() {
      const day_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r5));
    });
    \u0275\u0275elementStart(1, "div", 70)(2, "div", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CalendarComponent_div_45_div_4_Template, 10, 8, "div", 72)(5, CalendarComponent_div_45_div_5_Template, 6, 11, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("day-view-day", ctx_r2.viewMode() === "day")("today", ctx_r2.isToday(day_r5))("selected", ctx_r2.isSelectedDate(day_r5))("other-month", !ctx_r2.isCurrentMonth(day_r5));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-events", ctx_r2.getUserEventsForDate(day_r5).length > 0)("has-reminders", ctx_r2.getRemindersForDate(day_r5).length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r5.getDate(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.viewMode() !== "day");
  }
}
function CalendarComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r10.charAt(0), " ");
  }
}
function CalendarComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275listener("click", function CalendarComponent_div_61_Template_div_click_0_listener() {
      const day_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r12))("has-events", ctx_r2.getUserEventsForDate(day_r12).length > 0 || ctx_r2.getRemindersForDate(day_r12).length > 0)("other-month", !ctx_r2.isCurrentMonth(day_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r12.getDate(), " ");
  }
}
function CalendarComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 84);
    \u0275\u0275elementStart(5, "div", 108)(6, "div", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, event_r13.startDate, "shortTime"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r13.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r13.type));
  }
}
function CalendarComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 108)(2, "div", 110);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, reminder_r14.title, 0, 20), " ", reminder_r14.title.length > 20 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 10, reminder_r14.reminderTime, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("reminders.reminder"), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getReminderColor(reminder_r14, 0));
  }
}
function CalendarComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 112);
    \u0275\u0275element(2, "rect", 37)(3, "line", 38)(4, "line", 39)(5, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.month"));
  }
}
function CalendarComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1("", ctx_r2.translate("calendar.loading"), "...");
  }
}
function CalendarComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.getTotalEventsCount(), " ", ctx_r2.translate("calendar.total_events"));
  }
}
function CalendarComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "rect", 37)(5, "line", 38)(6, "line", 39)(7, "line", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 118)(9, "span", 119);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 120);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 121)(14, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 117);
    \u0275\u0275element(16, "path", 122)(17, "path", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 118)(19, "span", 119);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 120);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 124)(24, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 117);
    \u0275\u0275element(26, "path", 125)(27, "polyline", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 118)(29, "span", 119);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 120);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 127)(34, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 117);
    \u0275\u0275element(36, "path", 128)(37, "path", 129)(38, "path", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "div", 118)(40, "span", 119);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 120);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
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
function CalendarComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132);
    \u0275\u0275element(2, "div", 133);
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
function CalendarComponent_div_92_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r16.description, " ");
  }
}
function CalendarComponent_div_92_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 141)(2, "h4", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CalendarComponent_div_92_div_12_p_4_Template, 2, 1, "p", 142);
    \u0275\u0275elementStart(5, "div", 143)(6, "span", 87);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 144);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r16.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r16.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 10, event_r16.startDate, "short"), " - ", \u0275\u0275pipeBind2(9, 13, event_r16.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r16.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r16.type));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r16.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r16.status), " ");
  }
}
function CalendarComponent_div_92_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function CalendarComponent_div_92_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275listener("click", function CalendarComponent_div_92_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 136)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 137);
    \u0275\u0275listener("click", function CalendarComponent_div_92_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 24);
    \u0275\u0275element(8, "line", 138)(9, "line", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 140)(11, "div", 82);
    \u0275\u0275template(12, CalendarComponent_div_92_div_12_Template, 14, 16, "div", 51)(13, CalendarComponent_div_92_div_13_Template, 3, 1, "div", 53);
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
function CalendarComponent_div_93_div_11_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r18.description, " ");
  }
}
function CalendarComponent_div_93_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 141)(2, "h4", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CalendarComponent_div_93_div_11_p_4_Template, 2, 1, "p", 142);
    \u0275\u0275elementStart(5, "div", 143)(6, "span", 87);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 144);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r18.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r18.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 10, event_r18.startDate, "short"), " - ", \u0275\u0275pipeBind2(9, 13, event_r18.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r18.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getEventTypeLabel(event_r18.type));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r18.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r18.status), " ");
  }
}
function CalendarComponent_div_93_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_found"));
  }
}
function CalendarComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275listener("click", function CalendarComponent_div_93_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275listener("click", function CalendarComponent_div_93_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 136)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 137);
    \u0275\u0275listener("click", function CalendarComponent_div_93_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 24);
    \u0275\u0275element(7, "line", 138)(8, "line", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 140)(10, "div", 82);
    \u0275\u0275template(11, CalendarComponent_div_93_div_11_Template, 14, 16, "div", 51)(12, CalendarComponent_div_93_div_12_Template, 3, 1, "div", 53);
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
function CalendarComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 132);
    \u0275\u0275element(2, "div", 133);
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
function CalendarComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 149);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 150);
    \u0275\u0275element(3, "circle", 12)(4, "line", 151)(5, "line", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 153);
    \u0275\u0275listener("click", function CalendarComponent_div_95_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r19);
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
function CalendarComponent_div_99_div_12_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", reminder_r21.description, " ");
  }
}
function CalendarComponent_div_99_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 156)(2, "h4", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CalendarComponent_div_99_div_12_p_4_Template, 2, 1, "p", 157);
    \u0275\u0275elementStart(5, "div", 158)(6, "div", 159)(7, "span", 160);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 161);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 159)(12, "span", 160);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 161);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const reminder_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r21.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reminder_r21.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.event_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r21.eventTime));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.reminder_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r21.reminderTime));
  }
}
function CalendarComponent_div_99_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 98);
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
function CalendarComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275listener("click", function CalendarComponent_div_99_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275elementStart(1, "div", 135);
    \u0275\u0275listener("click", function CalendarComponent_div_99_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 136)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 137);
    \u0275\u0275listener("click", function CalendarComponent_div_99_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 24);
    \u0275\u0275element(8, "line", 138)(9, "line", 139);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 140)(11, "div", 90);
    \u0275\u0275template(12, CalendarComponent_div_99_div_12_Template, 16, 6, "div", 91)(13, CalendarComponent_div_99_div_13_Template, 9, 2, "div", 155);
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
  // Calendar stats
  calendarStats = signal(null, ...ngDevMode ? [{ debugName: "calendarStats" }] : []);
  statsLoading = signal(false, ...ngDevMode ? [{ debugName: "statsLoading" }] : []);
  allRemindersModal;
  subscriptions = [];
  constructor(calendarService, calendarStatsService, translationService, langService, reminderService) {
    this.calendarService = calendarService;
    this.calendarStatsService = calendarStatsService;
    this.translationService = translationService;
    this.langService = langService;
    this.reminderService = reminderService;
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
      this.weekDays = [
        "\u0627\u0644\u0623\u062D\u062F",
        "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
        "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
        "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
        "\u0627\u0644\u062E\u0645\u064A\u0633",
        "\u0627\u0644\u062C\u0645\u0639\u0629",
        "\u0627\u0644\u0633\u0628\u062A"
      ];
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
    const userEventsSub = this.calendarService.getUserEvents().subscribe({
      next: (response) => {
        if (response.success) {
          const eventsWithColors = response.data.map((event) => __spreadProps(__spreadValues({}, event), {
            color: this.getEventTypeColor(event.type)
          }));
          this.userEvents.set(eventsWithColors);
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
    return "#FF3B3B";
  }
  // Day reminders modal methods
  closeDayRemindersModal() {
    this.showDayRemindersModal.set(false);
    this.selectedDayReminders.set([]);
    this.selectedDayDate.set(null);
  }
  formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  onDayReminderUpdated() {
    this.loadReminders();
    if (this.selectedDayDate()) {
      const dayReminders = this.getRemindersForDate(this.selectedDayDate());
      this.selectedDayReminders.set(dayReminders);
    }
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
        console.log("Calendar stats response:", response);
        if (response.success) {
          this.calendarStats.set(response.data);
          console.log("Calendar stats set:", response.data);
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
  isLargeScreen() {
    return window.innerWidth > 991;
  }
  getAdditionalEventsColor(day) {
    const userEvents = this.getUserEventsForDate(day);
    const reminders = this.getRemindersForDate(day);
    const visibleUserEvents = userEvents.slice(0, 3);
    const visibleReminders = reminders.slice(0, 3);
    if (visibleReminders.length > 0) {
      return "#f44336";
    }
    if (visibleUserEvents.length > 0) {
      return "#2196f3";
    }
    return "#6c757d";
  }
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(CalendarStatsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(ReminderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.allRemindersModal = _t.first);
    }
  }, standalone: false, decls: 100, vars: 48, consts: [["loadingPeriod", ""], ["loadingStats", ""], ["allRemindersModal", ""], [1, "modern-calendar-container", "rounded-4"], [1, "calendar-header"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "reminder-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "view-mode-toggle"], [1, "view-btn", 3, "click"], [1, "main-content"], [1, "main-calendar-section"], [1, "calendar-navigation", "ltr"], [1, "nav-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "current-month"], ["points", "9,18 15,12 9,6"], [1, "today-btn", 3, "click"], [1, "calendar-grid"], ["class", "week-days", 4, "ngIf"], [1, "calendar-days"], ["class", "calendar-day", 3, "day-view-day", "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-section"], [1, "mini-calendar-widget"], [1, "widget-header"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "margin-right", "8px"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "px-2"], [1, "mini-calendar"], [1, "mini-week-days"], ["class", "mini-week-day", 4, "ngFor", "ngForOf"], [1, "mini-calendar-days"], ["class", "mini-calendar-day", 3, "today", "has-events", "other-month", "click", 4, "ngFor", "ngForOf"], [1, "todays-events-widget"], ["points", "12,6 12,12 16,14"], [1, "event-count"], [1, "todays-events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], ["class", "event-item reminder-item", 4, "ngFor", "ngForOf"], ["class", "no-events", 4, "ngIf"], [1, "calendar-stats-widget"], [1, "stats-header"], ["class", "px-2", 4, "ngIf", "ngIfElse"], ["class", "total-events", 4, "ngIf"], ["class", "stats-grid", 4, "ngIf", "ngIfElse"], ["class", "event-details-modal", 3, "click", 4, "ngIf"], ["class", "all-user-events-modal", 3, "click", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [3, "reminderCreated", "closeModal", "isOpen"], [3, "reminderUpdated", "closeModal", "isOpen"], ["class", "day-reminders-modal", 3, "click", 4, "ngIf"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "week-day"], [1, "calendar-day", 3, "click"], [1, "day-header"], [1, "day-number"], ["class", "day-view-content", 4, "ngIf"], ["class", "day-event-titles", 4, "ngIf"], [1, "day-view-content"], [1, "day-header-info"], [1, "day-name"], [1, "day-date"], ["class", "day-events-section", 4, "ngIf"], ["class", "day-reminders-section", 4, "ngIf"], [1, "day-events-section"], [1, "section-title"], [1, "events-list"], [1, "event-item"], [1, "event-dot"], [1, "event-details"], [1, "event-title"], [1, "event-time"], [1, "event-type"], [1, "day-reminders-section"], [1, "reminders-list"], ["class", "reminder-item", 4, "ngFor", "ngForOf"], [1, "reminder-item"], [1, "reminder-dot"], [1, "reminder-details"], [1, "reminder-title"], [1, "reminder-time"], [1, "no-events"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "day-event-titles"], ["class", "event-title user-event-title", 3, "title", 4, "ngFor", "ngForOf"], ["class", "event-title reminder-event-title", 3, "title", 4, "ngFor", "ngForOf"], ["class", "more-events-indicator", 4, "ngIf"], [1, "event-title", "user-event-title", 3, "title"], [1, "event-title", "reminder-event-title", 3, "title"], [1, "more-events-indicator"], [1, "mini-week-day"], [1, "mini-calendar-day", 3, "click"], [1, "event-info"], [1, "event-item", "reminder-item"], [1, "event-title-mini"], [1, "event-dot", "reminder-dot"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "total-events"], [1, "stats-grid"], [1, "stat-item", "meetings"], [1, "stat-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "stat-info"], [1, "stat-count"], [1, "stat-label"], [1, "stat-item", "tasks"], ["d", "M9 11l3 3L22 4"], ["d", "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"], [1, "stat-item", "visits"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], [1, "stat-item", "travels"], ["d", "M12 2L2 7l10 5 10-5-10-5z"], ["d", "M2 17l10 5 10-5"], ["d", "M2 12l10 5 10-5"], [1, "stats-loading"], [1, "loading-spinner"], [1, "spinner"], [1, "event-details-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-status"], [1, "event-description"], [1, "all-user-events-modal", 3, "click"], [1, "loading-overlay"], [1, "error-message"], [1, "error-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "day-reminders-modal", 3, "click"], ["class", "no-reminders", 4, "ngIf"], [1, "reminder-content"], ["class", "reminder-description", 4, "ngIf"], [1, "reminder-dates"], [1, "date-item"], [1, "date-label"], [1, "date-value"], [1, "reminder-description"], [1, "no-reminders"]], template: function CalendarComponent_Template(rf, ctx) {
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
        return \u0275\u0275resetView(ctx.onViewModeChange("month"));
      });
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onViewModeChange("week"));
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onViewModeChange("day"));
      });
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "div", 22)(31, "button", 23);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previousMonth());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 24);
      \u0275\u0275element(33, "polyline", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 26)(35, "h2");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 23);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextMonth());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 24);
      \u0275\u0275element(39, "polyline", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "button", 28);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToToday());
      });
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 29);
      \u0275\u0275template(43, CalendarComponent_div_43_Template, 2, 1, "div", 30);
      \u0275\u0275elementStart(44, "div", 31);
      \u0275\u0275template(45, CalendarComponent_div_45_Template, 6, 15, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 33)(47, "div", 34)(48, "div", 35)(49, "h3");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 36);
      \u0275\u0275element(51, "rect", 37)(52, "line", 38)(53, "line", 39)(54, "line", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "span", 41);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 42)(58, "div", 43);
      \u0275\u0275template(59, CalendarComponent_div_59_Template, 2, 1, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 45);
      \u0275\u0275template(61, CalendarComponent_div_61_Template, 2, 7, "div", 46);
      \u0275\u0275pipe(62, "slice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 47)(64, "div", 35)(65, "h3");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 36);
      \u0275\u0275element(67, "circle", 12)(68, "polyline", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "span", 41);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "span", 49);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 50);
      \u0275\u0275template(74, CalendarComponent_div_74_Template, 10, 8, "div", 51)(75, CalendarComponent_div_75_Template, 11, 13, "div", 52)(76, CalendarComponent_div_76_Template, 8, 1, "div", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 54)(78, "div", 55)(79, "h3");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 36);
      \u0275\u0275element(81, "rect", 37)(82, "line", 38)(83, "line", 39)(84, "line", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, CalendarComponent_span_85_Template, 2, 1, "span", 56)(86, CalendarComponent_ng_template_86_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, CalendarComponent_span_88_Template, 2, 2, "span", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, CalendarComponent_div_89_Template, 44, 8, "div", 58)(90, CalendarComponent_ng_template_90_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(92, CalendarComponent_div_92_Template, 14, 6, "div", 59)(93, CalendarComponent_div_93_Template, 13, 5, "div", 60)(94, CalendarComponent_div_94_Template, 5, 1, "div", 61)(95, CalendarComponent_div_95_Template, 10, 2, "div", 62);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(96, "app-add-reminder-modal", 63);
      \u0275\u0275listener("reminderCreated", function CalendarComponent_Template_app_add_reminder_modal_reminderCreated_96_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderCreated());
      })("closeModal", function CalendarComponent_Template_app_add_reminder_modal_closeModal_96_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAddReminderModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "app-all-reminders-modal", 64, 2);
      \u0275\u0275listener("reminderUpdated", function CalendarComponent_Template_app_all_reminders_modal_reminderUpdated_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderUpdated());
      })("closeModal", function CalendarComponent_Template_app_all_reminders_modal_closeModal_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllRemindersModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(99, CalendarComponent_div_99_Template, 14, 6, "div", 65);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const loadingPeriod_r22 = \u0275\u0275reference(87);
      const loadingStats_r23 = \u0275\u0275reference(91);
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
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2(" ", ctx.monthNames[ctx.currentDate().getMonth()], " ", ctx.currentDate().getFullYear(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("calendar.today"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("day-view", ctx.viewMode() === "day");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewMode() !== "day");
      \u0275\u0275advance();
      \u0275\u0275classProp("day-view-days", ctx.viewMode() === "day");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.calendarDays);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.translate("calendar.mini_calendar"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.weekDays);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(62, 44, ctx.calendarDays, 0, 35));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.translate("calendar.todays_events"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getUserEventsForDate(ctx.getToday()).length + ctx.getRemindersForDate(ctx.getToday()).length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getUserEventsForDate(ctx.getToday()));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.getRemindersForDate(ctx.getToday()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getUserEventsForDate(ctx.getToday()).length === 0 && ctx.getRemindersForDate(ctx.getToday()).length === 0);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", !ctx.statsLoading())("ngIfElse", loadingPeriod_r22);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.statsLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.statsLoading())("ngIfElse", loadingStats_r23);
      \u0275\u0275advance(3);
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
  }, dependencies: [NgForOf, NgIf, AddReminderModalComponent, AllRemindersModalComponent, SlicePipe, DatePipe], styles: ['\n\n.modern-calendar-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f8f4 0%,\n      #f0f4f1 100%);\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1b1d21;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n  position: relative;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #718096;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-right: 16px;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  border: 2px solid #b68a35;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #a87d2a 0%,\n      #b68a35 100%);\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border: 2px solid #1b1d21;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(27, 29, 33, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #2d3748 0%,\n      #1b1d21 100%);\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: white;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  position: relative;\n  overflow: hidden;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.main-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n  align-items: start;\n}\n.main-calendar-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  transition: all 0.3s ease;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-count[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  margin-top: 2px;\n  font-weight: 600;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]   .total-events[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.stats-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.stats-loading[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stats-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #b68a35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 12px;\n}\n.stats-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.stats-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.stats-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n.total-events[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 10px 18px;\n  border-radius: 25px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.3s ease;\n  position: relative;\n  z-index: 1;\n}\n.stat-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-count[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.95;\n  margin-top: 4px;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #f7fafc;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 2px solid #e2e8f0;\n  background: white;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #718096;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-color: #b68a35;\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1b1d21;\n  text-align: center;\n  position: relative;\n}\n.today-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: 2px solid #b68a35;\n  background:\n    linear-gradient(\n      135deg,\n      #E6D7A2 0%,\n      #a87d2a 100%);\n  color: #ffffff;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 16px 8px;\n  text-align: center;\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.9rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  background: #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  padding: 2px;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 120px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  overflow: hidden;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f7fafc;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #b68a35;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  border-color: #b68a35;\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-day.today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%] {\n  background: #1b1d21 !important;\n  color: white !important;\n  margin: 3px;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border-color: #1b1d21;\n  box-shadow: 0 4px 15px rgba(27, 29, 33, 0.3);\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #f7fafc;\n  color: #a0aec0;\n  opacity: 0.6;\n}\n.day-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 8px;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  background: #f7fafc;\n  color: #4a5568;\n}\n.day-number.has-events[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-number.has-reminders[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #C23D3D 0%,\n      #A83232 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(194, 61, 61, 0.3);\n}\n.calendar-grid.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n.calendar-days.day-view-days[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  background: transparent;\n}\n.calendar-day.day-view-day[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: white;\n}\n.day-view-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 32px;\n  gap: 32px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.day-header-info[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-radius: 16px;\n  color: white;\n  margin-bottom: 24px;\n}\n.day-name[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.day-events-section[_ngcontent-%COMP%], \n.day-reminders-section[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 3px solid #e2e8f0;\n}\n.events-list[_ngcontent-%COMP%], \n.reminders-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.reminders-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item[_ngcontent-%COMP%], \n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px;\n  background: #f7fafc;\n  border-radius: 16px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover, \n.reminder-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #b68a35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.15);\n}\n.event-dot[_ngcontent-%COMP%], \n.reminder-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.reminder-dot[_ngcontent-%COMP%] {\n  background-color: #C23D3D !important;\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.event-details[_ngcontent-%COMP%], \n.reminder-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.event-title[_ngcontent-%COMP%], \n.reminder-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 6px 0;\n  line-height: 1.3;\n}\n.event-time[_ngcontent-%COMP%], \n.reminder-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #718096;\n  margin: 0 0 8px 0;\n  font-weight: 600;\n}\n.event-type[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #4a5568;\n  margin: 0;\n  font-weight: 600;\n  background: #e2e8f0;\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #a0aec0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-events[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 16px 0 0 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.day-event-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 8px;\n  flex: 1;\n  min-height: 0;\n  max-height: 90px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  padding-right: 4px;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  padding: 6px 10px;\n  border-radius: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n}\n.event-title-mini[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  border-radius: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n}\n.user-event-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.user-event-title[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.reminder-event-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #C23D3D 0%,\n      #A83232 100%);\n  color: white;\n}\n.reminder-event-title[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(194, 61, 61, 0.3);\n}\n.more-events-indicator[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n  background: #4a5568;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  margin-top: 4px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.more-events-indicator[_ngcontent-%COMP%]:hover {\n  background: #2d3748;\n  transform: scale(1.05);\n}\n.sidebar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.calendar-stats-widget[_ngcontent-%COMP%], \n.mini-calendar-widget[_ngcontent-%COMP%], \n.todays-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(182, 138, 53, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.calendar-stats-widget[_ngcontent-%COMP%]::before, \n.mini-calendar-widget[_ngcontent-%COMP%]::before, \n.todays-events-widget[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #f7fafc;\n}\n.widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1b1d21;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.event-count[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n  color: #92722A;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.mini-calendar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mini-week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.mini-week-day[_ngcontent-%COMP%] {\n  padding: 8px 4px;\n  text-align: center;\n  font-weight: 700;\n  color: #718096;\n  font-size: 0.75rem;\n  background: #f7fafc;\n  border-radius: 6px;\n}\n.mini-calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.mini-calendar-day[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4a5568;\n  background: #f7fafc;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.mini-calendar-day[_ngcontent-%COMP%]:hover {\n  background: #E6D7A2 !important;\n}\n.mini-calendar-day.today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: #7C5E24;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mini-calendar-day.has-events[_ngcontent-%COMP%] {\n  border-color: #b68a35;\n  background: #fef9f0;\n}\n.mini-calendar-day.other-month[_ngcontent-%COMP%] {\n  color: #a0aec0;\n  opacity: 0.5;\n}\n.todays-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.todays-events-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f7fafc;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n}\n.event-item[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #718096;\n  min-width: 60px;\n  margin: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.event-item[_ngcontent-%COMP%]   .event-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-item[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #718096;\n  margin: 0;\n  background: #e2e8f0;\n  padding: 2px 8px;\n  border-radius: 12px;\n  display: inline-block;\n}\n.reminder-item[_ngcontent-%COMP%]   .event-dot[_ngcontent-%COMP%] {\n  background-color: #C23D3D !important;\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.event-details-modal[_ngcontent-%COMP%], \n.all-user-events-modal[_ngcontent-%COMP%], \n.day-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 70vw;\n  height: 90vh;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 2px solid #f7fafc;\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 80vw;\n  height: 90vh;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  background: #f7fafc;\n  border-radius: 16px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n  padding: 20px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: #667eea;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n  line-height: 1.3;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 0.9rem;\n  color: #718096;\n  line-height: 1.5;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  color: #718096;\n  font-weight: 600;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 20px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 80vw;\n  width: 90%;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 20px;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n  background: #f7fafc;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #C23D3D;\n  background: white;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4a5568;\n  min-width: 120px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  color: #718096;\n  font-weight: 600;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #a0aec0;\n  flex: 1;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 16px 0 8px 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #4a5568;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #b68a35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  padding: 20px 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.3);\n  z-index: 1000;\n  max-width: 400px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.error-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  font-weight: 600;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #dc3545;\n  transform: scale(1.05);\n}\n@keyframes _ngcontent-%COMP%_reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1200px) {\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 300px;\n    gap: 20px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .main-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .sidebar-section[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .calendar-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .modern-calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .main-calendar-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 8px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .stat-count[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 80px;\n    padding: 8px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 0.9rem;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 4px 8px;\n  }\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .event-item[_ngcontent-%COMP%], \n   .reminder-item[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 12px;\n  }\n  .event-title[_ngcontent-%COMP%], \n   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .mini-calendar-widget[_ngcontent-%COMP%], \n   .todays-events-widget[_ngcontent-%COMP%], \n   .quick-actions-widget[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .modern-calendar-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .reminder-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    margin-right: 0;\n    margin-bottom: 16px;\n  }\n  .view-mode-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    font-size: 0.8rem;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 3px 6px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .day-view-content[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 16px;\n  }\n  .day-name[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .day-date[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .event-item[_ngcontent-%COMP%], \n   .reminder-item[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 10px;\n  }\n  .event-title[_ngcontent-%COMP%], \n   .reminder-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .mini-calendar-widget[_ngcontent-%COMP%], \n   .todays-events-widget[_ngcontent-%COMP%], \n   .quick-actions-widget[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .calendar-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .event-details[_ngcontent-%COMP%], \n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .reminder-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modern-calendar-container.rtl[_ngcontent-%COMP%]   .modal-header.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: -1;\n}\n/*# sourceMappingURL=calendar.component-4C24ZI7S.css.map */'] });
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
            width="16"\r
            height="16"\r
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
            width="16"\r
            height="16"\r
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
      <!-- View Mode Toggle -->\r
      <div class="view-mode-toggle">\r
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
    <!-- Left Side - Main Calendar -->\r
    <div class="main-calendar-section">\r
      <!-- Calendar Navigation -->\r
      <div class="calendar-navigation ltr">\r
        <button class="nav-btn" (click)="previousMonth()">\r
          <svg\r
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
\r
        <div class="current-month">\r
          <h2>\r
            {{ monthNames[currentDate().getMonth()] }}\r
            {{ currentDate().getFullYear() }}\r
          </h2>\r
        </div>\r
\r
        <button class="nav-btn" (click)="nextMonth()">\r
          <svg\r
            width="20"\r
            height="20"\r
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
          {{ translate("calendar.today") }}\r
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
              <div class="day-header-info">\r
                <h3 class="day-name">{{ getDayName(day) }}</h3>\r
                <p class="day-date">{{ day | date : "fullDate" }}</p>\r
              </div>\r
\r
              <!-- Events Section -->\r
              <div\r
                class="day-events-section"\r
                *ngIf="getUserEventsForDate(day).length > 0"\r
              >\r
                <h4 class="section-title">\r
                  <svg\r
                    width="16"\r
                    height="16"\r
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
                    width="16"\r
                    height="16"\r
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
              <!-- User Events -->\r
              <div\r
                class="event-title user-event-title"\r
                *ngFor="let event of getUserEventsForDate(day) | slice : 0 : 3"\r
                [title]="event.title"\r
              >\r
                {{ event.title }}\r
              </div>\r
\r
              <!-- Reminders -->\r
              <div\r
                class="event-title reminder-event-title"\r
                *ngFor="\r
                  let reminder of getRemindersForDate(day) | slice : 0 : 2\r
                "\r
                [title]="reminder.title"\r
              >\r
                {{ reminder.title }}\r
              </div>\r
\r
              <!-- More events indicator -->\r
              <div\r
                class="more-events-indicator"\r
                *ngIf="\r
                  getUserEventsForDate(day).length +\r
                    getRemindersForDate(day).length >\r
                  5\r
                "\r
              >\r
                +{{\r
                  getUserEventsForDate(day).length +\r
                    getRemindersForDate(day).length -\r
                    5\r
                }}\r
                {{ translate("calendar.more") }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Right Side - Mini Calendar & Events List -->\r
    <div class="sidebar-section">\r
      <!-- Mini Calendar -->\r
      <div class="mini-calendar-widget">\r
        <div class="widget-header">\r
          <h3>\r
            <svg\r
              width="20"\r
              height="20"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 8px"\r
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
              {{ day.charAt(0) }}\r
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
              width="20"\r
              height="20"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 8px"\r
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
              {{ event.startDate | date : "shortTime" }}\r
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
              width="32"\r
              height="32"\r
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
      <!-- Calendar Stats -->\r
      <div class="calendar-stats-widget">\r
        <div class="stats-header">\r
          <h3>\r
            <svg\r
              width="20"\r
              height="20"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
              style="margin-right: 8px"\r
            >\r
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
              <line x1="16" y1="2" x2="16" y2="6"></line>\r
              <line x1="8" y1="2" x2="8" y2="6"></line>\r
              <line x1="3" y1="10" x2="21" y2="10"></line>\r
            </svg>\r
            <span class="px-2" *ngIf="!statsLoading(); else loadingPeriod">{{ translate("calendar.month")\r
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
                width="18"\r
                height="18"\r
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
                width="18"\r
                height="18"\r
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
                width="18"\r
                height="18"\r
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
                width="18"\r
                height="18"\r
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
          <div\r
            class="event-item"\r
            *ngFor="let event of getEventsForDate(selectedDate()!)"\r
          >\r
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              <p class="event-description" *ngIf="event.description">\r
                {{ event.description }}\r
              </p>\r
              <div class="event-meta">\r
                <span class="event-time">\r
                  {{ event.startDate | date : "short" }} -\r
                  {{ event.endDate | date : "short" }}\r
                </span>\r
                <span class="event-type" [style.color]="event.color">{{\r
                  getEventTypeLabel(event.type)\r
                }}</span>\r
                <span\r
                  class="event-status"\r
                  [style.color]="getEventStatusColor(event.status)"\r
                >\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
              </div>\r
            </div>\r
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
            <div class="event-content">\r
              <h4 class="event-title">{{ event.title }}</h4>\r
              <p class="event-description" *ngIf="event.description">\r
                {{ event.description }}\r
              </p>\r
              <div class="event-meta">\r
                <span class="event-time">\r
                  {{ event.startDate | date : "short" }} -\r
                  {{ event.endDate | date : "short" }}\r
                </span>\r
                <span class="event-type" [style.color]="event.color">{{\r
                  getEventTypeLabel(event.type)\r
                }}</span>\r
                <span\r
                  class="event-status"\r
                  [style.color]="getEventStatusColor(event.status)"\r
                >\r
                  {{ getEventStatusLabel(event.status) }}\r
                </span>\r
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
        width="24"\r
        height="24"\r
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
          </div>\r
          <div class="no-reminders" *ngIf="selectedDayReminders().length === 0">\r
            <svg\r
              width="48"\r
              height="48"\r
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
`, styles: ['/* src/app/components/calendar/calendar.component.css */\n.modern-calendar-container {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f8f4 0%,\n      #f0f4f1 100%);\n}\n.modern-calendar-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1b1d21;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n  position: relative;\n}\n.page-subtitle {\n  font-size: 1.1rem;\n  color: #718096;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.reminder-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-right: 16px;\n}\n.reminder-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  text-decoration: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.reminder-actions .btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  border: 2px solid #b68a35;\n}\n.reminder-actions .btn-primary:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #a87d2a 0%,\n      #b68a35 100%);\n}\n.reminder-actions .btn-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border: 2px solid #1b1d21;\n}\n.reminder-actions .btn-secondary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(27, 29, 33, 0.4);\n  background:\n    linear-gradient(\n      135deg,\n      #2d3748 0%,\n      #1b1d21 100%);\n}\n.view-mode-toggle {\n  display: flex;\n  background: white;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.view-btn {\n  padding: 10px 20px;\n  border: none;\n  background: transparent;\n  color: #718096;\n  font-weight: 600;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  position: relative;\n  overflow: hidden;\n}\n.view-btn:hover {\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n}\n.view-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.main-content {\n  display: grid;\n  grid-template-columns: 1fr 350px;\n  gap: 24px;\n  align-items: start;\n}\n.main-calendar-section {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.calendar-stats-widget .stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.calendar-stats-widget .stat-item {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-radius: 12px;\n  padding: 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  transition: all 0.3s ease;\n}\n.calendar-stats-widget .stat-item:hover {\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-stats-widget .stat-icon {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.calendar-stats-widget .stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.calendar-stats-widget .stat-count {\n  font-size: 1.4rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.calendar-stats-widget .stat-label {\n  font-size: 0.75rem;\n  opacity: 0.9;\n  margin-top: 2px;\n  font-weight: 600;\n}\n.calendar-stats-widget .total-events {\n  background: rgba(255, 255, 255, 0.2);\n  padding: 6px 12px;\n  border-radius: 15px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.stats-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.stats-loading .loading-spinner {\n  text-align: center;\n}\n.stats-loading .spinner {\n  width: 30px;\n  height: 30px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #b68a35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 12px;\n}\n.stats-loading p {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.stats-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.stats-header h3 {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n}\n.total-events {\n  background: rgba(255, 255, 255, 0.25);\n  padding: 10px 18px;\n  border-radius: 25px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.stat-item {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 16px;\n  padding: 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.3s ease;\n  position: relative;\n  z-index: 1;\n}\n.stat-item:hover {\n  background: rgba(255, 255, 255, 0.25);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-info {\n  display: flex;\n  flex-direction: column;\n}\n.stat-count {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.stat-label {\n  font-size: 0.85rem;\n  opacity: 0.95;\n  margin-top: 4px;\n  font-weight: 600;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.calendar-navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #f7fafc;\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 2px solid #e2e8f0;\n  background: white;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: #718096;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.nav-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-color: #b68a35;\n  color: white;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.current-month h2 {\n  margin: 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #1b1d21;\n  text-align: center;\n  position: relative;\n}\n.today-btn {\n  padding: 12px 24px;\n  border: 2px solid #b68a35;\n  background:\n    linear-gradient(\n      135deg,\n      #E6D7A2 0%,\n      #a87d2a 100%);\n  color: #ffffff;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.today-btn:hover {\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.4);\n}\n.calendar-grid {\n  display: flex;\n  flex-direction: column;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.week-day {\n  padding: 16px 8px;\n  text-align: center;\n  font-weight: 700;\n  color: #4a5568;\n  font-size: 0.9rem;\n  background: #f7fafc;\n  border-radius: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  background: #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  padding: 2px;\n}\n.calendar-day {\n  background: white;\n  min-height: 120px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  overflow: hidden;\n}\n.calendar-day:hover {\n  background: #f7fafc;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #b68a35;\n}\n.calendar-day.today {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  border-color: #b68a35;\n  box-shadow: 0 4px 15px rgba(182, 138, 53, 0.3);\n}\n.calendar-day.today .day-number {\n  background: #1b1d21 !important;\n  color: white !important;\n  margin: 3px;\n}\n.calendar-day.selected {\n  background:\n    linear-gradient(\n      135deg,\n      #1b1d21 0%,\n      #2d3748 100%);\n  color: white;\n  border-color: #1b1d21;\n  box-shadow: 0 4px 15px rgba(27, 29, 33, 0.3);\n}\n.calendar-day.other-month {\n  background: #f7fafc;\n  color: #a0aec0;\n  opacity: 0.6;\n}\n.day-header {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 8px;\n}\n.day-number {\n  font-weight: 700;\n  font-size: 1rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n  background: #f7fafc;\n  color: #4a5568;\n}\n.day-number.has-events {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.day-number.has-reminders {\n  background:\n    linear-gradient(\n      135deg,\n      #C23D3D 0%,\n      #A83232 100%);\n  color: white;\n  box-shadow: 0 2px 8px rgba(194, 61, 61, 0.3);\n}\n.calendar-grid.day-view {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n.calendar-days.day-view-days {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  background: transparent;\n}\n.calendar-day.day-view-day {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background: white;\n}\n.day-view-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 32px;\n  gap: 32px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.day-header-info {\n  text-align: center;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  border-radius: 16px;\n  color: white;\n  margin-bottom: 24px;\n}\n.day-name {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.day-date {\n  font-size: 1.2rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.day-events-section,\n.day-reminders-section {\n  flex: 1;\n  min-height: 0;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 20px 0;\n  padding-bottom: 12px;\n  border-bottom: 3px solid #e2e8f0;\n}\n.events-list,\n.reminders-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  max-height: 100%;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.events-list::-webkit-scrollbar,\n.reminders-list::-webkit-scrollbar {\n  width: 6px;\n}\n.events-list::-webkit-scrollbar-track,\n.reminders-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb,\n.reminders-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.events-list::-webkit-scrollbar-thumb:hover,\n.reminders-list::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.event-item,\n.reminder-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 20px;\n  background: #f7fafc;\n  border-radius: 16px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item:hover,\n.reminder-item:hover {\n  background: white;\n  border-color: #b68a35;\n  box-shadow: 0 8px 25px rgba(182, 138, 53, 0.15);\n}\n.event-dot,\n.reminder-dot {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.reminder-dot {\n  background-color: #C23D3D !important;\n  animation: reminderPulse 2s infinite;\n}\n.event-details,\n.reminder-details {\n  flex: 1;\n}\n.event-title,\n.reminder-title {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n  margin: 0 0 6px 0;\n  line-height: 1.3;\n}\n.event-time,\n.reminder-time {\n  font-size: 0.9rem;\n  color: #718096;\n  margin: 0 0 8px 0;\n  font-weight: 600;\n}\n.event-type {\n  font-size: 0.8rem;\n  color: #4a5568;\n  margin: 0;\n  font-weight: 600;\n  background: #e2e8f0;\n  padding: 4px 12px;\n  border-radius: 20px;\n  display: inline-block;\n}\n.no-events {\n  text-align: center;\n  padding: 60px 20px;\n  color: #a0aec0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.no-events p {\n  margin: 16px 0 0 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.day-event-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-top: 8px;\n  flex: 1;\n  min-height: 0;\n  max-height: 90px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: thin;\n  padding-right: 4px;\n}\n.day-event-titles::-webkit-scrollbar {\n  width: 3px;\n}\n.day-event-titles::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n}\n.event-title {\n  font-size: 0.75rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  padding: 6px 10px;\n  border-radius: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n}\n.event-title-mini {\n  font-size: 0.85rem;\n  margin-left: 0px !important;\n  font-weight: 600;\n  border-radius: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  word-break: break-word;\n  max-width: 100%;\n}\n.user-event-title {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.user-event-title:hover {\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.reminder-event-title {\n  background:\n    linear-gradient(\n      135deg,\n      #C23D3D 0%,\n      #A83232 100%);\n  color: white;\n}\n.reminder-event-title:hover {\n  box-shadow: 0 2px 8px rgba(194, 61, 61, 0.3);\n}\n.more-events-indicator {\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 4px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n  background: #4a5568;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: center;\n  margin-top: 4px;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.more-events-indicator:hover {\n  background: #2d3748;\n  transform: scale(1.05);\n}\n.sidebar-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.calendar-stats-widget,\n.mini-calendar-widget,\n.todays-events-widget {\n  background: white;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(182, 138, 53, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n.calendar-stats-widget::before,\n.mini-calendar-widget::before,\n.todays-events-widget::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #f7fafc;\n}\n.widget-header h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1b1d21;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.event-count {\n  background: #E6D7A2;\n  color: #92722A;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.mini-calendar {\n  display: flex;\n  flex-direction: column;\n}\n.mini-week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.mini-week-day {\n  padding: 8px 4px;\n  text-align: center;\n  font-weight: 700;\n  color: #718096;\n  font-size: 0.75rem;\n  background: #f7fafc;\n  border-radius: 6px;\n}\n.mini-calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px;\n}\n.mini-calendar-day {\n  aspect-ratio: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4a5568;\n  background: #f7fafc;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.mini-calendar-day:hover {\n  background: #E6D7A2 !important;\n}\n.mini-calendar-day.today {\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: #7C5E24;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.3);\n}\n.mini-calendar-day.has-events {\n  border-color: #b68a35;\n  background: #fef9f0;\n}\n.mini-calendar-day.other-month {\n  color: #a0aec0;\n  opacity: 0.5;\n}\n.todays-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.todays-events-list::-webkit-scrollbar {\n  width: 4px;\n}\n.todays-events-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.todays-events-list::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.event-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f7fafc;\n  border-radius: 12px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.event-item:hover {\n  background: white;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n}\n.event-item .event-time {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #718096;\n  min-width: 60px;\n  margin: 0;\n}\n.event-item .event-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-item .event-info {\n  flex: 1;\n  min-width: 0;\n}\n.event-item .event-title {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #2d3748;\n  margin: 0 0 4px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.event-item .event-type {\n  font-size: 0.7rem;\n  color: #718096;\n  margin: 0;\n  background: #e2e8f0;\n  padding: 2px 8px;\n  border-radius: 12px;\n  display: inline-block;\n}\n.reminder-item .event-dot {\n  background-color: #C23D3D !important;\n  animation: reminderPulse 2s infinite;\n}\n.event-details-modal,\n.all-user-events-modal,\n.day-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n.modal-content {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 70vw;\n  height: 90vh;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 32px;\n  border-bottom: 2px solid #f7fafc;\n  background:\n    linear-gradient(\n      135deg,\n      #b68a35 0%,\n      #a87d2a 100%);\n  color: white;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-body {\n  padding: 32px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.all-user-events-modal .modal-content {\n  max-width: 80vw;\n  height: 90vh;\n}\n.all-user-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.all-user-events-modal .event-item {\n  background: #f7fafc;\n  border-radius: 16px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n  padding: 20px;\n}\n.all-user-events-modal .event-item:hover {\n  background: white;\n  border-color: #667eea;\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);\n}\n.all-user-events-modal .event-content h4 {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n  line-height: 1.3;\n}\n.all-user-events-modal .event-description {\n  margin: 0 0 16px 0;\n  font-size: 0.9rem;\n  color: #718096;\n  line-height: 1.5;\n}\n.all-user-events-modal .event-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal .event-time {\n  color: #718096;\n  font-weight: 600;\n}\n.all-user-events-modal .event-type,\n.all-user-events-modal .event-status {\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 20px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal .event-type {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.all-user-events-modal .event-status {\n  background: #e2e8f0;\n  color: #4a5568;\n}\n.day-reminders-modal .modal-content {\n  max-width: 80vw;\n  width: 90%;\n}\n.day-reminders-modal .reminders-list {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.day-reminders-modal .reminder-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 20px;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 16px;\n  transition: all 0.3s ease;\n  background: #f7fafc;\n}\n.day-reminders-modal .reminder-item:hover {\n  border-color: #C23D3D;\n  background: white;\n}\n.day-reminders-modal .reminder-content {\n  flex: 1;\n}\n.day-reminders-modal .reminder-title {\n  margin: 0 0 12px 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2d3748;\n}\n.day-reminders-modal .reminder-description {\n  margin: 0 0 16px 0;\n  color: #718096;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.day-reminders-modal .reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.day-reminders-modal .date-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n}\n.day-reminders-modal .date-label {\n  font-weight: 700;\n  color: #4a5568;\n  min-width: 120px;\n}\n.day-reminders-modal .date-value {\n  color: #718096;\n  font-weight: 600;\n}\n.day-reminders-modal .no-reminders {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #a0aec0;\n  flex: 1;\n}\n.day-reminders-modal .no-reminders h4 {\n  margin: 16px 0 8px 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #4a5568;\n}\n.day-reminders-modal .no-reminders p {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #b68a35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner p {\n  margin: 0;\n  color: #718096;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.error-message {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  padding: 20px 24px;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(220, 53, 69, 0.3);\n  z-index: 1000;\n  max-width: 400px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.error-content {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.error-content svg {\n  flex-shrink: 0;\n}\n.error-content p {\n  margin: 0;\n  flex: 1;\n  font-weight: 600;\n}\n.retry-btn {\n  padding: 8px 16px;\n  border: 2px solid white;\n  background: transparent;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 700;\n  transition: all 0.3s ease;\n}\n.retry-btn:hover {\n  background: white;\n  color: #dc3545;\n  transform: scale(1.05);\n}\n@keyframes reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n}\n@media (max-width: 1200px) {\n  .main-content {\n    grid-template-columns: 1fr 300px;\n    gap: 20px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 992px) {\n  .main-content {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .sidebar-section {\n    order: -1;\n  }\n  .calendar-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header-actions {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .modern-calendar-container {\n    padding: 16px;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .main-calendar-section {\n    padding: 16px;\n  }\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 12px;\n  }\n  .stat-item {\n    padding: 12px;\n    gap: 8px;\n  }\n  .stat-icon {\n    width: 32px;\n    height: 32px;\n  }\n  .stat-count {\n    font-size: 1.2rem;\n  }\n  .calendar-navigation {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month h2 {\n    font-size: 1.4rem;\n  }\n  .calendar-day {\n    min-height: 80px;\n    padding: 8px;\n  }\n  .day-number {\n    width: 24px;\n    height: 24px;\n    font-size: 0.9rem;\n  }\n  .event-title {\n    font-size: 0.7rem;\n    padding: 4px 8px;\n  }\n  .day-view-content {\n    padding: 20px;\n    gap: 20px;\n  }\n  .day-name {\n    font-size: 2rem;\n  }\n  .section-title {\n    font-size: 1.2rem;\n  }\n  .event-item,\n  .reminder-item {\n    padding: 16px;\n    gap: 12px;\n  }\n  .event-title,\n  .reminder-title {\n    font-size: 1rem;\n  }\n  .mini-calendar-widget,\n  .todays-events-widget,\n  .quick-actions-widget {\n    padding: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .modern-calendar-container {\n    padding: 12px;\n  }\n  .page-title {\n    font-size: 1.8rem;\n  }\n  .page-subtitle {\n    font-size: 1rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .reminder-actions {\n    width: 100%;\n    justify-content: center;\n    margin-right: 0;\n    margin-bottom: 16px;\n  }\n  .view-mode-toggle {\n    width: 100%;\n    justify-content: center;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .calendar-navigation {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .nav-btn {\n    width: 40px;\n    height: 40px;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 4px;\n  }\n  .day-number {\n    width: 20px;\n    height: 20px;\n    font-size: 0.8rem;\n  }\n  .event-title {\n    font-size: 0.65rem;\n    padding: 3px 6px;\n  }\n  .week-day {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .day-view-content {\n    padding: 16px;\n    gap: 16px;\n  }\n  .day-name {\n    font-size: 1.8rem;\n  }\n  .day-date {\n    font-size: 1rem;\n  }\n  .section-title {\n    font-size: 1.1rem;\n  }\n  .event-item,\n  .reminder-item {\n    padding: 12px;\n    gap: 10px;\n  }\n  .event-title,\n  .reminder-title {\n    font-size: 0.9rem;\n  }\n  .mini-calendar-widget,\n  .todays-events-widget,\n  .quick-actions-widget {\n    padding: 12px;\n  }\n  .modal-content {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .modal-header h3 {\n    font-size: 1.2rem;\n  }\n}\n.modern-calendar-container.rtl .calendar-header {\n  text-align: right;\n}\n.modern-calendar-container.rtl .event-details,\n.modern-calendar-container.rtl .reminder-details {\n  text-align: right;\n}\n.modern-calendar-container.rtl .modal-header.rtl {\n  flex-direction: row-reverse;\n}\n.modern-calendar-container.rtl .modal-header.rtl h3 {\n  text-align: right;\n}\n.modern-calendar-container.rtl .modal-header.rtl .close-btn {\n  order: -1;\n}\n/*# sourceMappingURL=calendar.component-4C24ZI7S.css.map */\n'] }]
  }], () => [{ type: CalendarService }, { type: CalendarStatsService }, { type: TranslationService }, { type: LangService }, { type: ReminderService }], { allRemindersModal: [{
    type: ViewChild,
    args: ["allRemindersModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/components/calendar/calendar.component.ts", lineNumber: 27 });
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
    CalendarRoutingModule
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
        CalendarRoutingModule
      ],
      providers: [CalendarService, ReminderService, CalendarStatsService],
      exports: [CalendarComponent]
    }]
  }], null, null);
})();
export {
  CalendarModule
};
//# sourceMappingURL=chunk-H7YNEM3U.js.map
