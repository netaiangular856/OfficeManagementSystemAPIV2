import {
  SharedModule
} from "./chunk-NW5BUEAG.js";
import {
  CalendarService,
  EventStatus,
  EventType
} from "./chunk-RE5JEETO.js";
import "./chunk-4SHJB6U3.js";
import "./chunk-DNZ6YJ3A.js";
import "./chunk-KDMT3COD.js";
import "./chunk-CKE7UXF6.js";
import {
  RouterModule
} from "./chunk-LQXSMMP4.js";
import "./chunk-P32CWFJ2.js";
import "./chunk-TNFDJQHP.js";
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
} from "./chunk-HY6UJAEU.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-J5ZZ35GX.js";
import {
  __spreadValues
} from "./chunk-EVSPGG2W.js";

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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.add-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-reminder-modal.component-SFFAP45O.css.map */"] });
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
`, styles: ["/* src/app/components/calendar/add-reminder-modal/add-reminder-modal.component.css */\n.add-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #D4AA3A;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-reminder-modal.component-SFFAP45O.css.map */\n"] }]
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
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.edit-reminder-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.error[_ngcontent-%COMP%]:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-M7XD2B7L.css.map */"] });
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
`, styles: ["/* src/app/components/calendar/edit-reminder-modal/edit-reminder-modal.component.css */\n.edit-reminder-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  box-sizing: border-box;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-control.error {\n  border-color: #ef4444;\n}\n.form-control.error:focus {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 4px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-primary {\n  background-color: #D4AA3A;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-reminder-modal.component-M7XD2B7L.css.map */\n"] }]
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
  }, dependencies: [NgForOf, NgIf, EditReminderModalComponent], styles: ["\n\n.all-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 1;\n  text-align: right;\n}\n.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #D4AA3A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 8px 16px;\n  background-color: #D4AA3A;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.reminders-list[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n}\n.reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 16px;\n}\n.reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.date-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 100px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  color: white;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.delete-confirm-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.delete-confirm-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 400px;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.rtl[_ngcontent-%COMP%]   .reminder-actions[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .reminder-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .reminder-content[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 12px;\n  }\n  .reminder-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-ESM7I5MZ.css.map */"] });
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
`, styles: ["/* src/app/components/calendar/all-reminders-modal/all-reminders-modal.component.css */\n.all-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  flex: 1;\n}\n.rtl .modal-header {\n  flex-direction: row-reverse;\n  text-align: right;\n  direction: rtl;\n}\n.rtl .modal-title {\n  order: 1;\n  text-align: right;\n}\n.rtl .close-btn {\n  order: 2;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: #1B1D21;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 24px;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f4f6;\n  border-top: 3px solid #D4AA3A;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  text-align: center;\n  color: #ef4444;\n}\n.error-state svg {\n  margin-bottom: 16px;\n}\n.retry-btn {\n  margin-top: 16px;\n  padding: 8px 16px;\n  background-color: #D4AA3A;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.retry-btn:hover {\n  background-color: #B68A35;\n}\n.reminders-list {\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.reminder-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n}\n.reminder-item:hover {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.reminder-content {\n  flex: 1;\n  margin-right: 16px;\n}\n.reminder-title {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.reminder-description {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.date-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.date-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.date-value {\n  color: #6b7280;\n}\n.reminder-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 100px;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.edit-btn {\n  background-color: #D4AA3A;\n  color: white;\n}\n.edit-btn:hover {\n  background-color: #B68A35;\n}\n.delete-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background-color: #fee2e2;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n}\n.empty-state svg {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.empty-state h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.delete-confirm-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.delete-confirm-modal .modal-content {\n  width: 90%;\n  max-width: 400px;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n.btn {\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secondary {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #2a2d33;\n}\n.btn-danger {\n  background-color: #dc2626;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #b91c1c;\n}\n.rtl .modal-header {\n  direction: rtl;\n}\n.rtl .reminder-item {\n  flex-direction: row-reverse;\n}\n.rtl .reminder-content {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.rtl .reminder-actions {\n  flex-direction: column;\n}\n.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    width: 95%;\n    margin: 20px;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .reminder-item {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .reminder-content {\n    margin-right: 0;\n    margin-bottom: 12px;\n  }\n  .reminder-actions {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .action-btn {\n    flex: 1;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=all-reminders-modal.component-ESM7I5MZ.css.map */\n"] }]
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
function CalendarComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "h4", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 50);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-left-color", event_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 7, event_r2.startDate, "short"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", event_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r2.type), " ");
  }
}
function CalendarComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275listener("click", function CalendarComponent_div_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.viewAllUserEvents($event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.view_all"));
  }
}
function CalendarComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r5, " ");
  }
}
function CalendarComponent_div_60_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    \u0275\u0275styleProp("color", event_r8.color);
    \u0275\u0275property("title", event_r8.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r8.title);
  }
}
function CalendarComponent_div_60_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r9 = ctx.$implicit;
    \u0275\u0275property("title", reminder_r9.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reminder_r9.title);
  }
}
function CalendarComponent_div_60_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    \u0275\u0275styleProp("background-color", event_r10.color);
    \u0275\u0275property("title", event_r10.title);
  }
}
function CalendarComponent_div_60_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 67);
  }
  if (rf & 2) {
    const reminder_r11 = ctx.$implicit;
    \u0275\u0275property("title", reminder_r11.title);
  }
}
function CalendarComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function CalendarComponent_div_60_Template_div_click_0_listener() {
      const day_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateClick(day_r7));
    });
    \u0275\u0275elementStart(1, "div", 56)(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 58);
    \u0275\u0275template(5, CalendarComponent_div_60_div_5_Template, 2, 4, "div", 59)(6, CalendarComponent_div_60_div_6_Template, 2, 2, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 61);
    \u0275\u0275template(8, CalendarComponent_div_60_div_8_Template, 1, 3, "div", 62)(9, CalendarComponent_div_60_div_9_Template, 1, 1, "div", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("today", ctx_r2.isToday(day_r7))("selected", ctx_r2.isSelectedDate(day_r7))("other-month", !ctx_r2.isCurrentMonth(day_r7));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-events", ctx_r2.getUserEventsForDate(day_r7).length > 0)("has-reminders", ctx_r2.getRemindersForDate(day_r7).length > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r7.getDate());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUserEventsForDate(day_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getRemindersForDate(day_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getUserEventsForDate(day_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getRemindersForDate(day_r7));
  }
}
function CalendarComponent_div_61_div_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r13.description);
  }
}
function CalendarComponent_div_61_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "div", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "h4", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_61_div_12_p_5_Template, 2, 1, "p", 81);
    \u0275\u0275elementStart(6, "div", 82)(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 84);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r13.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r13.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r13.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r13.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r13.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r13.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r13.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r13.status), " ");
  }
}
function CalendarComponent_div_61_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_today"));
  }
}
function CalendarComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275listener("click", function CalendarComponent_div_61_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function CalendarComponent_div_61_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 71);
    \u0275\u0275listener("click", function CalendarComponent_div_61_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedDate.set(null));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 30);
    \u0275\u0275element(8, "line", 72)(9, "line", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 74)(11, "div", 75);
    \u0275\u0275template(12, CalendarComponent_div_61_div_12_Template, 15, 18, "div", 76)(13, CalendarComponent_div_61_div_13_Template, 3, 1, "div", 77);
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
function CalendarComponent_div_62_div_11_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r15.description);
  }
}
function CalendarComponent_div_62_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "div", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "h4", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_62_div_11_p_5_Template, 2, 1, "p", 81);
    \u0275\u0275elementStart(6, "div", 82)(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 84);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", event_r15.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r15.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r15.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, event_r15.startDate, "short"), " - ", \u0275\u0275pipeBind2(10, 15, event_r15.endDate, "short"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", event_r15.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventTypeLabel(event_r15.type), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.getEventStatusColor(event_r15.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getEventStatusLabel(event_r15.status), " ");
  }
}
function CalendarComponent_div_62_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.no_events_found"));
  }
}
function CalendarComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function CalendarComponent_div_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function CalendarComponent_div_62_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 71);
    \u0275\u0275listener("click", function CalendarComponent_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeAllUserEventsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 30);
    \u0275\u0275element(7, "line", 72)(8, "line", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 74)(10, "div", 75);
    \u0275\u0275template(11, CalendarComponent_div_62_div_11_Template, 15, 18, "div", 76)(12, CalendarComponent_div_62_div_12_Template, 3, 1, "div", 77);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("calendar.all_my_events"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.userEvents());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userEvents().length === 0);
  }
}
function CalendarComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275element(2, "div", 91);
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
function CalendarComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 94);
    \u0275\u0275element(3, "circle", 10)(4, "line", 95)(5, "line", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 97);
    \u0275\u0275listener("click", function CalendarComponent_div_64_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r16);
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
function CalendarComponent_div_68_div_12_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reminder_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reminder_r18.description);
  }
}
function CalendarComponent_div_68_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275element(1, "div", 103);
    \u0275\u0275elementStart(2, "div", 104)(3, "h4", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CalendarComponent_div_68_div_12_p_5_Template, 2, 1, "p", 106);
    \u0275\u0275elementStart(6, "div", 107)(7, "div", 108)(8, "span", 109);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 110);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 108)(13, "span", 109);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 110);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const reminder_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.getReminderColor(reminder_r18, 0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reminder_r18.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", reminder_r18.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.event_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r18.eventTime));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("reminders.reminder_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(reminder_r18.reminderTime));
  }
}
function CalendarComponent_div_68_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 113);
    \u0275\u0275element(2, "circle", 10)(3, "path", 14)(4, "line", 15);
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
function CalendarComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275listener("click", function CalendarComponent_div_68_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275elementStart(1, "div", 69);
    \u0275\u0275listener("click", function CalendarComponent_div_68_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 70)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 71);
    \u0275\u0275listener("click", function CalendarComponent_div_68_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDayRemindersModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 30);
    \u0275\u0275element(8, "line", 72)(9, "line", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 74)(11, "div", 99);
    \u0275\u0275template(12, CalendarComponent_div_68_div_12_Template, 17, 8, "div", 100)(13, CalendarComponent_div_68_div_13_Template, 9, 2, "div", 101);
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
  allRemindersModal;
  subscriptions = [];
  constructor(calendarService, translationService, langService, reminderService) {
    this.calendarService = calendarService;
    this.translationService = translationService;
    this.langService = langService;
    this.reminderService = reminderService;
  }
  ngOnInit() {
    this.initializeCalendar();
    this.loadEvents();
    this.loadReminders();
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
    const dateStr = date.toISOString().split("T")[0];
    return this.reminders().filter((reminder) => {
      const reminderDate = new Date(reminder.reminderTime).toISOString().split("T")[0];
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
  static \u0275fac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarComponent)(\u0275\u0275directiveInject(CalendarService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(ReminderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.allRemindersModal = _t.first);
    }
  }, standalone: false, decls: 69, vars: 36, consts: [["allRemindersModal", ""], [1, "calendar-container", "rounded-5"], [1, "calendar-header"], [1, "header-left"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "reminder-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [1, "btn", "btn-secondary", 3, "click"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "reminder-indicator"], [1, "indicator-dot", "reminder-event"], [1, "view-mode-toggle"], [1, "view-btn", 3, "click"], [1, "calendar-content"], [1, "user-events-widget"], [1, "widget-header"], [1, "event-count"], [1, "user-events-list"], ["class", "user-event-item", 3, "border-left-color", 4, "ngFor", "ngForOf"], ["class", "view-all-link", 4, "ngIf"], [1, "calendar-grid-container"], [1, "calendar-navigation"], [1, "nav-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "current-month"], ["points", "9,18 15,12 9,6"], [1, "today-btn", 3, "click"], [1, "calendar-grid"], [1, "week-days"], ["class", "week-day", 4, "ngFor", "ngForOf"], [1, "calendar-days"], ["class", "calendar-day", 3, "today", "selected", "other-month", "click", 4, "ngFor", "ngForOf"], ["class", "event-details-modal", 3, "click", 4, "ngIf"], ["class", "all-user-events-modal", 3, "click", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [3, "reminderCreated", "closeModal", "isOpen"], [3, "reminderUpdated", "closeModal", "isOpen"], ["class", "day-reminders-modal", 3, "click", 4, "ngIf"], [1, "user-event-item"], [1, "event-info"], [1, "event-title"], [1, "event-date"], [1, "event-type-badge"], [1, "view-all-link"], [1, "view-all-btn", 3, "click"], [1, "week-day"], [1, "calendar-day", 3, "click"], [1, "day-header"], [1, "day-number"], [1, "day-event-titles"], ["class", "event-title user-event-title", 3, "color", "title", 4, "ngFor", "ngForOf"], ["class", "event-title reminder-event-title", 3, "title", 4, "ngFor", "ngForOf"], [1, "day-events"], ["class", "event-dot user-event", 3, "background-color", "title", 4, "ngFor", "ngForOf"], ["class", "event-dot reminder-event", 3, "title", 4, "ngFor", "ngForOf"], [1, "event-title", "user-event-title", 3, "title"], [1, "event-title", "reminder-event-title", 3, "title"], [1, "event-dot", "user-event", 3, "title"], [1, "event-dot", "reminder-event", 3, "title"], [1, "event-details-modal", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-body"], [1, "events-list"], ["class", "event-item", 4, "ngFor", "ngForOf"], ["class", "no-events", 4, "ngIf"], [1, "event-item"], [1, "event-color-bar"], [1, "event-content"], ["class", "event-description", 4, "ngIf"], [1, "event-meta"], [1, "event-time"], [1, "event-type"], [1, "event-status"], [1, "event-description"], [1, "no-events"], [1, "all-user-events-modal", 3, "click"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner"], [1, "error-message"], [1, "error-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "day-reminders-modal", 3, "click"], [1, "reminders-list"], ["class", "reminder-item", 4, "ngFor", "ngForOf"], ["class", "no-reminders", 4, "ngIf"], [1, "reminder-item"], [1, "reminder-color-bar"], [1, "reminder-content"], [1, "reminder-title"], ["class", "reminder-description", 4, "ngIf"], [1, "reminder-dates"], [1, "date-item"], [1, "date-label"], [1, "date-value"], [1, "reminder-description"], [1, "no-reminders"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"]], template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddReminderModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "circle", 10)(12, "line", 11)(13, "line", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAllRemindersModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 9);
      \u0275\u0275element(17, "circle", 10)(18, "path", 14)(19, "line", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 16);
      \u0275\u0275element(22, "div", 17);
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 18)(26, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onViewModeChange("month"));
      });
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onViewModeChange("week"));
      });
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 19);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onViewModeChange("day"));
      });
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "h3");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 23);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 24);
      \u0275\u0275template(40, CalendarComponent_div_40_Template, 9, 10, "div", 25);
      \u0275\u0275pipe(41, "slice");
      \u0275\u0275template(42, CalendarComponent_div_42_Template, 3, 1, "div", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27)(44, "div", 28)(45, "button", 29);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.previousMonth());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 30);
      \u0275\u0275element(47, "polyline", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "div", 32)(49, "h2");
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "button", 29);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextMonth());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 30);
      \u0275\u0275element(53, "polyline", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "button", 34);
      \u0275\u0275listener("click", function CalendarComponent_Template_button_click_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goToToday());
      });
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 35)(57, "div", 36);
      \u0275\u0275template(58, CalendarComponent_div_58_Template, 2, 1, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 38);
      \u0275\u0275template(60, CalendarComponent_div_60_Template, 10, 15, "div", 39);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(61, CalendarComponent_div_61_Template, 14, 6, "div", 40)(62, CalendarComponent_div_62_Template, 13, 3, "div", 41)(63, CalendarComponent_div_63_Template, 5, 1, "div", 42)(64, CalendarComponent_div_64_Template, 10, 2, "div", 43);
      \u0275\u0275elementStart(65, "app-add-reminder-modal", 44);
      \u0275\u0275listener("reminderCreated", function CalendarComponent_Template_app_add_reminder_modal_reminderCreated_65_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderCreated());
      })("closeModal", function CalendarComponent_Template_app_add_reminder_modal_closeModal_65_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAddReminderModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "app-all-reminders-modal", 45, 0);
      \u0275\u0275listener("reminderUpdated", function CalendarComponent_Template_app_all_reminders_modal_reminderUpdated_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReminderUpdated());
      })("closeModal", function CalendarComponent_Template_app_all_reminders_modal_closeModal_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllRemindersModal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, CalendarComponent_div_68_Template, 14, 6, "div", 46);
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
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("reminders.all_reminders"));
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
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("calendar.my_events"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userEvents().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(41, 32, ctx.userEvents(), 0, 5));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.userEvents().length > 5);
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
  }, dependencies: [NgForOf, NgIf, AddReminderModalComponent, AllRemindersModalComponent, SlicePipe, DatePipe], styles: ['\n\n.calendar-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-dot[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 1399px) {\n}\n@media (min-width: 1400px) {\n  .event-dot[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .event-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 4px 6px;\n  }\n}\n.calendar-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.reminder-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-right: 16px;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  text-decoration: none;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  color: white;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #D4AA3A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(253, 166, 52, 0.3);\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.reminder-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.reminder-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-right: 16px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.reminder-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.indicator-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.indicator-dot.reminder-event[_ngcontent-%COMP%] {\n  background-color: #FF3B3B;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.view-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.view-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.view-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.view-btn.active[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);\n}\n.calendar-mode-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.mode-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.mode-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.mode-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.mode-btn.active[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);\n}\n.calendar-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1200px) {\n  .calendar-content[_ngcontent-%COMP%] {\n    grid-template-columns: 300px 1fr;\n  }\n}\n.user-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-count[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.user-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-event-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.user-event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.event-date[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.event-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 8px;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #D4AA3A;\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: inline-block;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9ff;\n  text-decoration: underline;\n}\n.view-all-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n.system-events-widget[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.system-events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-event-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.system-event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.calendar-grid-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.calendar-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e9ecef;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #D4AA3A;\n  color: #D4AA3A;\n}\n.current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.today-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 1px solid #D4AA3A;\n  background: #D4AA3A;\n  color: white;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.today-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.calendar-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.week-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  margin-bottom: 8px;\n}\n.week-day[_ngcontent-%COMP%] {\n  padding: 12px 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 0.9rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n.calendar-days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calendar-day[_ngcontent-%COMP%] {\n  background: white;\n  min-height: 120px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-day[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border: 2px solid #2196f3;\n}\n.calendar-day.selected[_ngcontent-%COMP%] {\n  background: #D4AA3A;\n  color: white;\n}\n.calendar-day.other-month[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #adb5bd;\n}\n.day-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 4px;\n}\n.day-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.day-number.has-events[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border: 2px solid #2196f3;\n  color: #1976d2;\n}\n.day-number.has-reminders[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  border: 2px solid #f44336;\n  color: #d32f2f;\n}\n.day-number.has-reminders.has-events[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  border: 2px solid #f44336;\n  color: #d32f2f;\n}\n.day-event-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 4px;\n  flex: 1;\n  min-height: 0;\n  max-height: 60px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 1px;\n}\n.event-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 2px 4px;\n  border-radius: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  max-width: 100%;\n}\n.user-event-title[_ngcontent-%COMP%] {\n  background-color: rgba(33, 150, 243, 0.1);\n  border-left: 3px solid #2196f3;\n  color: #1976d2;\n}\n.reminder-event-title[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.1);\n  border-left: 3px solid #f44336;\n  color: #d32f2f;\n  font-weight: 600;\n}\n.day-events[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-top: auto;\n}\n.event-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-dot.user-event[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n.event-dot.system-event[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.event-dot.reminder-event[_ngcontent-%COMP%] {\n  background-color: #FF3B3B;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  animation: _ngcontent-%COMP%_reminderPulse 2s infinite;\n}\n.event-dot.reminder-event[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  border-radius: 50%;\n  background: inherit;\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_reminderGlow 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n@keyframes _ngcontent-%COMP%_reminderGlow {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.2);\n  }\n}\n.event-details-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .event-details-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #e9ecef17;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef98;\n  color: #495057;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n}\n.event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.event-type[_ngcontent-%COMP%], \n.event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n.all-user-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-user-events-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  border-radius: 12px 12px 0 0;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-user-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .all-user-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .all-user-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.all-system-events-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-system-events-modal[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  border-radius: 12px 12px 0 0;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%], \n.all-system-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-type[_ngcontent-%COMP%] {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .event-status[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-system-events-modal[_ngcontent-%COMP%]   .no-events[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .all-system-events-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .events-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .all-system-events-modal[_ngcontent-%COMP%]   .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #D4AA3A;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-weight: 500;\n}\n.error-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #f8d7da;\n  color: #721c24;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 1px solid #f5c6cb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-width: 400px;\n}\n.error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.error-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #721c24;\n  background: transparent;\n  color: #721c24;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #721c24;\n  color: white;\n}\n@media (max-width: 1200px) {\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    position: static;\n    order: -1;\n    max-width: 100%;\n  }\n  .calendar-mode-toggle[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .mode-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mode-btn[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    width: 20px;\n    height: 20px;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 10px;\n    height: 10px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin: 0 -8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n}\n@media (max-width: 576px) {\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-mode-toggle[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .mode-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mode-btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .calendar-days[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 2px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 12px;\n    margin: 0 -8px;\n    width: calc(100% + 16px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 16px);\n    margin: 0 -8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    margin-bottom: 4px;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 2px 5px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 430px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 8px;\n    margin: 0 -4px;\n    width: calc(100% + 8px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 8px);\n    margin: 0 -4px;\n    padding: 12px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 6px;\n    margin-bottom: 6px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 3px;\n    line-height: 1.2;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 4px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    padding: 2px 6px;\n  }\n  .widget-header[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n    padding-bottom: 8px;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .today-btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 50px;\n    padding: 1px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    width: 18px;\n    height: 18px;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 5px;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n}\n@media (max-width: 390px) {\n  .calendar-container[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .user-events-widget[_ngcontent-%COMP%], \n   .system-events-widget[_ngcontent-%COMP%] {\n    padding: 6px;\n    margin: 0 -2px;\n    width: calc(100% + 4px);\n  }\n  .calendar-grid-container[_ngcontent-%COMP%] {\n    width: calc(100% + 4px);\n    margin: 0 -2px;\n    padding: 8px;\n  }\n  .user-event-item[_ngcontent-%COMP%], \n   .system-event-item[_ngcontent-%COMP%] {\n    padding: 4px;\n    margin-bottom: 4px;\n  }\n  .event-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n    line-height: 1.1;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    margin-bottom: 3px;\n  }\n  .event-type-badge[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n    padding: 1px 3px;\n  }\n  .widget-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .event-count[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 1px 4px;\n  }\n  .widget-header[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n    padding-bottom: 6px;\n  }\n  .calendar-navigation[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .nav-btn[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .current-month[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .today-btn[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n    font-size: 0.7rem;\n  }\n  .calendar-day[_ngcontent-%COMP%] {\n    min-height: 45px;\n    padding: 0.5px;\n  }\n  .day-number[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    width: 16px;\n    height: 16px;\n  }\n  .event-dot[_ngcontent-%COMP%] {\n    width: 6px;\n    height: 6px;\n  }\n  .event-dot.reminder-event[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .event-dot.reminder-event[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .week-day[_ngcontent-%COMP%] {\n    padding: 4px 1px;\n    font-size: 0.65rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 2px;\n    max-height: 98vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .event-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .event-description[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .event-meta[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    gap: 6px;\n  }\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 12px 48px 12px 16px;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 16px;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .event-color-bar[_ngcontent-%COMP%] {\n  order: 1;\n}\n.calendar-container.rtl[_ngcontent-%COMP%]   .event-content[_ngcontent-%COMP%] {\n  order: 0;\n}\n.day-reminders-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #1B1D21;\n  border-radius: 12px 12px 0 0;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: white;\n  transition: all 0.2s;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminders-list[_ngcontent-%COMP%] {\n  max-height: 50vh;\n  overflow-y: auto;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n  background: #fafafa;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #FF3B3B;\n  box-shadow: 0 2px 8px rgba(255, 59, 59, 0.1);\n  transform: translateY(-1px);\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-color-bar[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  border-radius: 2px;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-description[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .reminder-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.day-reminders-modal[_ngcontent-%COMP%]   .no-reminders[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.rtl[_ngcontent-%COMP%]   .day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .day-reminders-modal[_ngcontent-%COMP%]   .reminder-color-bar[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 16px;\n}\n@media (max-width: 768px) {\n  .reminder-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], \n   .day-reminders-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .reminder-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .day-reminders-modal[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=calendar.component-W232LKHG.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{ selector: "app-calendar", standalone: false, template: `<div class="calendar-container rounded-5" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="calendar-header">\r
    <div class="header-left">\r
      <h1 class="page-title">{{ translate('calendar.my_calendar') }}</h1>\r
      <p class="page-subtitle">{{ translate('calendar.subtitle') }}</p>\r
    </div>\r
    \r
    <div class="header-actions">\r
      <!-- Reminder Actions -->\r
      <div class="reminder-actions">\r
        <button class="btn btn-primary" (click)="openAddReminderModal()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <line x1="12" y1="8" x2="12" y2="16"></line>\r
            <line x1="8" y1="12" x2="16" y2="12"></line>\r
          </svg>\r
          {{ translate('reminders.add_reminder') }}\r
        </button>\r
        <button class="btn btn-secondary" (click)="openAllRemindersModal()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\r
            <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
          </svg>\r
          {{ translate('reminders.all_reminders') }}\r
        </button>\r
      </div>\r
\r
      <!-- Reminder Indicator -->\r
      <div class="reminder-indicator">\r
        <div class="indicator-dot reminder-event"></div>\r
        <span>{{ translate('reminders.all_reminders') }}</span>\r
      </div>\r
\r
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
\r
  <!-- Main Content -->\r
  <div class="calendar-content">\r
    <!-- User Events Widget -->\r
    <div class="user-events-widget">\r
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
            <div class="day-header">\r
              <div \r
                class="day-number"\r
                [class.has-events]="getUserEventsForDate(day).length > 0"\r
                [class.has-reminders]="getRemindersForDate(day).length > 0"\r
              >{{ day.getDate() }}</div>\r
            </div>\r
            \r
            <!-- Event titles for this day -->\r
            <div class="day-event-titles">\r
              <!-- User Events -->\r
              <div \r
                class="event-title user-event-title"\r
                *ngFor="let event of getUserEventsForDate(day)"\r
                [style.color]="event.color"\r
                [title]="event.title"\r
              >{{ event.title }}</div>\r
\r
              <!-- Reminders -->\r
              <div \r
                class="event-title reminder-event-title"\r
                *ngFor="let reminder of getRemindersForDate(day)"\r
                [title]="reminder.title"\r
              >{{ reminder.title }}</div>\r
            </div>\r
            \r
             <!-- Events for this day -->\r
             <div class="day-events">\r
               <!-- User Events -->\r
               <div \r
                 class="event-dot user-event"\r
                 *ngFor="let event of getUserEventsForDate(day)"\r
                 [style.background-color]="event.color"\r
                 [title]="event.title"\r
               ></div>\r
\r
               <!-- Reminders (always visible) -->\r
               <div \r
                 class="event-dot reminder-event"\r
                 *ngFor="let reminder of getRemindersForDate(day)"\r
                 [title]="reminder.title"\r
               ></div>\r
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
\r
  <!-- Add Reminder Modal -->\r
  <app-add-reminder-modal\r
    [isOpen]="showAddReminderModal"\r
    (reminderCreated)="onReminderCreated()"\r
    (closeModal)="closeAddReminderModal()"\r
  ></app-add-reminder-modal>\r
\r
  <!-- All Reminders Modal -->\r
  <app-all-reminders-modal\r
    #allRemindersModal\r
    [isOpen]="showAllRemindersModal"\r
    (reminderUpdated)="onReminderUpdated()"\r
    (closeModal)="closeAllRemindersModal()"\r
  ></app-all-reminders-modal>\r
\r
  <!-- Day Reminders Modal -->\r
  <div class="day-reminders-modal" *ngIf="showDayRemindersModal()" (click)="closeDayRemindersModal()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <div class="modal-header">\r
        <h3>{{ selectedDayDate() | date:'fullDate' }}</h3>\r
        <button class="close-btn" (click)="closeDayRemindersModal()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <div class="reminders-list">\r
          <div class="reminder-item" *ngFor="let reminder of selectedDayReminders()">\r
            <div class="reminder-color-bar" [style.background-color]="getReminderColor(reminder, 0)"></div>\r
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
          </div>\r
          \r
          <div class="no-reminders" *ngIf="selectedDayReminders().length === 0">\r
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
  </div>\r
</div>\r
`, styles: ['/* src/app/components/calendar/calendar.component.css */\n.calendar-container {\n  padding: 24px;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n@media (min-width: 992px) and (max-width: 1399px) {\n  .event-dot {\n    width: 14px;\n    height: 14px;\n  }\n  .day-number {\n    width: 28px;\n    height: 28px;\n  }\n}\n@media (max-width: 1399px) {\n}\n@media (min-width: 1400px) {\n  .event-dot {\n    width: 16px;\n    height: 16px;\n  }\n  .day-number {\n    width: 32px;\n    height: 32px;\n  }\n  .event-title {\n    font-size: 0.8rem;\n    padding: 4px 6px;\n  }\n}\n.calendar-container.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.calendar-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.header-left {\n  flex: 1;\n  min-width: 300px;\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 8px 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  font-size: 1.1rem;\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.4;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.reminder-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-right: 16px;\n}\n.reminder-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  text-decoration: none;\n}\n.reminder-actions .btn-primary {\n  background-color: #D4AA3A;\n  color: white;\n}\n.reminder-actions .btn-primary:hover {\n  background-color: #D4AA3A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(253, 166, 52, 0.3);\n}\n.reminder-actions .btn-secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.reminder-actions .btn-secondary:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.reminder-indicator {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-right: 16px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.reminder-indicator span {\n  font-size: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.indicator-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.indicator-dot.reminder-event {\n  background-color: #FF3B3B;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  animation: reminderPulse 2s infinite;\n}\n.view-mode-toggle {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.view-btn {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.view-btn:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.view-btn.active {\n  background: #D4AA3A;\n  color: white;\n  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);\n}\n.calendar-mode-toggle {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.mode-buttons {\n  display: flex;\n  background: #fff;\n  border-radius: 8px;\n  padding: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.mode-btn {\n  padding: 12px 24px;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  font-weight: 500;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n  min-width: 140px;\n}\n.mode-btn:hover {\n  background: #f8f9fa;\n  color: #495057;\n}\n.mode-btn.active {\n  background: #D4AA3A;\n  color: white;\n  box-shadow: 0 2px 4px rgba(212, 170, 58, 0.3);\n}\n.calendar-content {\n  display: grid;\n  grid-template-columns: 350px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 1200px) {\n  .calendar-content {\n    grid-template-columns: 300px 1fr;\n  }\n}\n.user-events-widget {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.widget-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.widget-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-count {\n  background: #D4AA3A;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.user-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-event-item {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.user-event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-info h4 {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.event-date {\n  margin: 0 0 8px 0;\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.event-type-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.view-all-link {\n  text-align: center;\n  margin-top: 8px;\n}\n.view-all-btn {\n  background: none;\n  border: none;\n  color: #D4AA3A;\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 8px 16px;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: inline-block;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.view-all-btn:hover {\n  background: #f8f9ff;\n  text-decoration: underline;\n}\n.view-all-btn:active {\n  transform: translateY(1px);\n}\n.system-events-widget {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  height: fit-content;\n  position: sticky;\n  top: 24px;\n}\n.system-events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.system-event-item {\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.system-event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.calendar-grid-container {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.calendar-navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n.nav-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e9ecef;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.nav-btn:hover {\n  background: #f8f9fa;\n  border-color: #D4AA3A;\n  color: #D4AA3A;\n}\n.current-month h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.today-btn {\n  padding: 8px 16px;\n  border: 1px solid #D4AA3A;\n  background: #D4AA3A;\n  color: white;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.9rem;\n}\n.today-btn:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.calendar-grid {\n  display: flex;\n  flex-direction: column;\n}\n.week-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  margin-bottom: 8px;\n}\n.week-day {\n  padding: 12px 8px;\n  text-align: center;\n  font-weight: 600;\n  color: #6c757d;\n  font-size: 0.9rem;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n.calendar-days {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e9ecef;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calendar-day {\n  background: white;\n  min-height: 120px;\n  padding: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.calendar-day:hover {\n  background: #f8f9fa;\n}\n.calendar-day.today {\n  background: #e3f2fd;\n  border: 2px solid #2196f3;\n}\n.calendar-day.selected {\n  background: #D4AA3A;\n  color: white;\n}\n.calendar-day.other-month {\n  background: #f8f9fa;\n  color: #adb5bd;\n}\n.day-header {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 4px;\n}\n.day-number {\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.day-number.has-events {\n  background-color: #e3f2fd;\n  border: 2px solid #2196f3;\n  color: #1976d2;\n}\n.day-number.has-reminders {\n  background-color: #ffebee;\n  border: 2px solid #f44336;\n  color: #d32f2f;\n}\n.day-number.has-reminders.has-events {\n  background-color: #ffebee;\n  border: 2px solid #f44336;\n  color: #d32f2f;\n}\n.day-event-titles {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 4px;\n  flex: 1;\n  min-height: 0;\n  max-height: 60px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n.day-event-titles::-webkit-scrollbar {\n  width: 2px;\n}\n.day-event-titles::-webkit-scrollbar-track {\n  background: transparent;\n}\n.day-event-titles::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 1px;\n}\n.event-title {\n  font-size: 0.7rem;\n  font-weight: 500;\n  padding: 2px 4px;\n  border-radius: 3px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  max-width: 100%;\n}\n.user-event-title {\n  background-color: rgba(33, 150, 243, 0.1);\n  border-left: 3px solid #2196f3;\n  color: #1976d2;\n}\n.reminder-event-title {\n  background-color: rgba(244, 67, 54, 0.1);\n  border-left: 3px solid #f44336;\n  color: #d32f2f;\n  font-weight: 600;\n}\n.day-events {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2px;\n  margin-top: auto;\n}\n.event-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.event-dot.user-event {\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n.event-dot.system-event {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.event-dot.reminder-event {\n  background-color: #FF3B3B;\n  border: 2px solid rgba(255, 255, 255, 0.9);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  animation: reminderPulse 2s infinite;\n}\n.event-dot.reminder-event::after {\n  content: "";\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  border-radius: 50%;\n  background: inherit;\n  opacity: 0.3;\n  animation: reminderGlow 2s infinite;\n}\n@keyframes reminderPulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n@keyframes reminderGlow {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.2);\n  }\n}\n.event-details-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .event-details-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.modal-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 500px;\n  width: 100%;\n  max-height: 80vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: #e9ecef17;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: #6c757d;\n}\n.close-btn:hover {\n  background: #e9ecef98;\n  color: #495057;\n}\n.modal-body {\n  padding: 24px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.events-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-1px);\n}\n.event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.event-content {\n  flex: 1;\n  padding: 16px;\n}\n.event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n}\n.event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.event-meta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 0.8rem;\n}\n.event-time {\n  color: #6c757d;\n}\n.event-type,\n.event-status {\n  font-weight: 500;\n}\n.no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n.all-user-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-user-events-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-user-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-user-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  border-radius: 12px 12px 0 0;\n}\n.all-user-events-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.all-user-events-modal .modal-body {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-user-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-user-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-user-events-modal .event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-user-events-modal .event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-user-events-modal .event-content {\n  flex: 1;\n  padding: 16px;\n}\n.all-user-events-modal .event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-user-events-modal .event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-user-events-modal .event-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-user-events-modal .event-time {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-user-events-modal .event-type,\n.all-user-events-modal .event-status {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-user-events-modal .event-type {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-user-events-modal .event-status {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-user-events-modal .no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-user-events-modal .modal-content {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-user-events-modal .modal-header,\n  .all-user-events-modal .modal-body {\n    padding: 16px;\n  }\n  .all-user-events-modal .events-list {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-user-events-modal .event-item {\n    flex-direction: column;\n  }\n  .all-user-events-modal .event-color-bar {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-user-events-modal .modal-content {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-user-events-modal .modal-header h3 {\n    font-size: 1.25rem;\n  }\n  .all-user-events-modal .event-content h4 {\n    font-size: 1rem;\n  }\n  .all-user-events-modal .event-meta {\n    font-size: 0.75rem;\n  }\n}\n.all-system-events-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1001;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n@supports not (backdrop-filter: blur(10px)) {\n  .all-system-events-modal {\n    background: rgba(0, 0, 0, 0.8);\n  }\n}\n.all-system-events-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  animation: modalSlideIn 0.3s ease-out;\n  transform: scale(1);\n}\n.all-system-events-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  border-radius: 12px 12px 0 0;\n}\n.all-system-events-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.all-system-events-modal .modal-body {\n  padding: 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.all-system-events-modal .events-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.all-system-events-modal .event-item {\n  display: flex;\n  background: #f8f9fa;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.2s ease;\n}\n.all-system-events-modal .event-item:hover {\n  background: #e9ecef;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.all-system-events-modal .event-color-bar {\n  width: 4px;\n  flex-shrink: 0;\n}\n.all-system-events-modal .event-content {\n  flex: 1;\n  padding: 16px;\n}\n.all-system-events-modal .event-content h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  line-height: 1.3;\n}\n.all-system-events-modal .event-description {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  color: #6c757d;\n  line-height: 1.4;\n}\n.all-system-events-modal .event-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.all-system-events-modal .event-time {\n  color: #6c757d;\n  font-weight: 500;\n}\n.all-system-events-modal .event-type,\n.all-system-events-modal .event-status {\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 12px;\n  display: inline-block;\n  width: fit-content;\n}\n.all-system-events-modal .event-type {\n  background: rgba(67, 133, 244, 0.1);\n  color: #4285F4;\n}\n.all-system-events-modal .event-status {\n  background: rgba(0, 0, 0, 0.05);\n}\n.all-system-events-modal .no-events {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n  grid-column: 1 / -1;\n}\n@media (max-width: 768px) {\n  .all-system-events-modal .modal-content {\n    margin: 10px;\n    max-height: 95vh;\n  }\n  .all-system-events-modal .modal-header,\n  .all-system-events-modal .modal-body {\n    padding: 16px;\n  }\n  .all-system-events-modal .events-list {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .all-system-events-modal .event-item {\n    flex-direction: column;\n  }\n  .all-system-events-modal .event-color-bar {\n    width: 100%;\n    height: 4px;\n  }\n}\n@media (max-width: 576px) {\n  .all-system-events-modal .modal-content {\n    margin: 5px;\n    max-height: 98vh;\n  }\n  .all-system-events-modal .modal-header h3 {\n    font-size: 1.25rem;\n  }\n  .all-system-events-modal .event-content h4 {\n    font-size: 1rem;\n  }\n  .all-system-events-modal .event-meta {\n    font-size: 0.75rem;\n  }\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #D4AA3A;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-spinner p {\n  margin: 0;\n  color: #6c757d;\n  font-weight: 500;\n}\n.error-message {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #f8d7da;\n  color: #721c24;\n  padding: 16px 20px;\n  border-radius: 8px;\n  border: 1px solid #f5c6cb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-width: 400px;\n}\n.error-content {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.error-content svg {\n  flex-shrink: 0;\n}\n.error-content p {\n  margin: 0;\n  flex: 1;\n}\n.retry-btn {\n  padding: 6px 12px;\n  border: 1px solid #721c24;\n  background: transparent;\n  color: #721c24;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.retry-btn:hover {\n  background: #721c24;\n  color: white;\n}\n@media (max-width: 1200px) {\n  .user-events-widget,\n  .system-events-widget {\n    padding: 20px;\n  }\n}\n@media (max-width: 992px) {\n  .calendar-content {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    position: static;\n    order: -1;\n    max-width: 100%;\n  }\n  .calendar-mode-toggle {\n    margin-bottom: 16px;\n  }\n  .mode-buttons {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .mode-btn {\n    min-width: auto;\n  }\n}\n@media (max-width: 768px) {\n  .calendar-container {\n    padding: 16px;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .calendar-navigation {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .current-month h2 {\n    font-size: 1.25rem;\n  }\n  .calendar-day {\n    min-height: 80px;\n    padding: 4px;\n  }\n  .day-number {\n    font-size: 0.8rem;\n    width: 20px;\n    height: 20px;\n  }\n  .event-dot {\n    width: 10px;\n    height: 10px;\n  }\n  .modal-content {\n    margin: 10px;\n    max-height: 90vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 16px;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 16px;\n    margin: 0 -8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 12px;\n  }\n  .event-info h4 {\n    font-size: 0.9rem;\n  }\n  .event-date {\n    font-size: 0.8rem;\n  }\n  .event-type-badge {\n    font-size: 0.7rem;\n    padding: 3px 6px;\n  }\n}\n@media (max-width: 576px) {\n  .header-actions {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-mode-toggle {\n    width: 100%;\n    justify-content: center;\n  }\n  .view-btn {\n    flex: 1;\n  }\n  .mode-buttons {\n    width: 100%;\n  }\n  .mode-btn {\n    flex: 1;\n  }\n  .calendar-days {\n    gap: 0;\n  }\n  .calendar-day {\n    min-height: 60px;\n    padding: 2px;\n  }\n  .week-day {\n    padding: 8px 4px;\n    font-size: 0.8rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 12px;\n    margin: 0 -8px;\n    width: calc(100% + 16px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 16px);\n    margin: 0 -8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 8px;\n    margin-bottom: 8px;\n  }\n  .event-info h4 {\n    font-size: 0.85rem;\n    margin-bottom: 4px;\n  }\n  .event-date {\n    font-size: 0.75rem;\n    margin-bottom: 6px;\n  }\n  .event-type-badge {\n    font-size: 0.65rem;\n    padding: 2px 5px;\n  }\n  .widget-header h3 {\n    font-size: 1.1rem;\n  }\n  .event-count {\n    font-size: 0.7rem;\n    padding: 3px 8px;\n  }\n}\n@media (max-width: 430px) {\n  .calendar-container {\n    padding: 8px;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .page-subtitle {\n    font-size: 0.9rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 8px;\n    margin: 0 -4px;\n    width: calc(100% + 8px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 8px);\n    margin: 0 -4px;\n    padding: 12px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 6px;\n    margin-bottom: 6px;\n  }\n  .event-info h4 {\n    font-size: 0.8rem;\n    margin-bottom: 3px;\n    line-height: 1.2;\n  }\n  .event-date {\n    font-size: 0.7rem;\n    margin-bottom: 4px;\n  }\n  .event-type-badge {\n    font-size: 0.6rem;\n    padding: 2px 4px;\n  }\n  .widget-header h3 {\n    font-size: 1rem;\n  }\n  .event-count {\n    font-size: 0.65rem;\n    padding: 2px 6px;\n  }\n  .widget-header {\n    margin-bottom: 12px;\n    padding-bottom: 8px;\n  }\n  .calendar-navigation {\n    flex-direction: column;\n    gap: 8px;\n    align-items: center;\n  }\n  .nav-btn {\n    width: 32px;\n    height: 32px;\n  }\n  .current-month h2 {\n    font-size: 1.1rem;\n  }\n  .today-btn {\n    padding: 6px 12px;\n    font-size: 0.8rem;\n  }\n  .calendar-day {\n    min-height: 50px;\n    padding: 1px;\n  }\n  .day-number {\n    font-size: 0.75rem;\n    width: 18px;\n    height: 18px;\n  }\n  .event-dot {\n    width: 8px;\n    height: 8px;\n  }\n  .week-day {\n    padding: 6px 2px;\n    font-size: 0.7rem;\n  }\n  .modal-content {\n    margin: 5px;\n    max-height: 95vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 12px;\n  }\n  .modal-header h3 {\n    font-size: 1.1rem;\n  }\n  .event-content h4 {\n    font-size: 0.9rem;\n  }\n  .event-description {\n    font-size: 0.8rem;\n  }\n  .event-meta {\n    font-size: 0.7rem;\n    gap: 8px;\n  }\n}\n@media (max-width: 390px) {\n  .calendar-container {\n    padding: 4px;\n  }\n  .page-title {\n    font-size: 1.3rem;\n  }\n  .page-subtitle {\n    font-size: 0.8rem;\n  }\n  .user-events-widget,\n  .system-events-widget {\n    padding: 6px;\n    margin: 0 -2px;\n    width: calc(100% + 4px);\n  }\n  .calendar-grid-container {\n    width: calc(100% + 4px);\n    margin: 0 -2px;\n    padding: 8px;\n  }\n  .user-event-item,\n  .system-event-item {\n    padding: 4px;\n    margin-bottom: 4px;\n  }\n  .event-info h4 {\n    font-size: 0.75rem;\n    margin-bottom: 2px;\n    line-height: 1.1;\n  }\n  .event-date {\n    font-size: 0.65rem;\n    margin-bottom: 3px;\n  }\n  .event-type-badge {\n    font-size: 0.55rem;\n    padding: 1px 3px;\n  }\n  .widget-header h3 {\n    font-size: 0.9rem;\n  }\n  .event-count {\n    font-size: 0.6rem;\n    padding: 1px 4px;\n  }\n  .widget-header {\n    margin-bottom: 8px;\n    padding-bottom: 6px;\n  }\n  .calendar-navigation {\n    gap: 6px;\n  }\n  .nav-btn {\n    width: 28px;\n    height: 28px;\n  }\n  .current-month h2 {\n    font-size: 1rem;\n  }\n  .today-btn {\n    padding: 4px 8px;\n    font-size: 0.7rem;\n  }\n  .calendar-day {\n    min-height: 45px;\n    padding: 0.5px;\n  }\n  .day-number {\n    font-size: 0.7rem;\n    width: 16px;\n    height: 16px;\n  }\n  .event-dot {\n    width: 6px;\n    height: 6px;\n  }\n  .event-dot.reminder-event {\n    animation: none;\n  }\n  .event-dot.reminder-event::after {\n    display: none;\n  }\n  .week-day {\n    padding: 4px 1px;\n    font-size: 0.65rem;\n  }\n  .modal-content {\n    margin: 2px;\n    max-height: 98vh;\n  }\n  .modal-header,\n  .modal-body {\n    padding: 8px;\n  }\n  .modal-header h3 {\n    font-size: 1rem;\n  }\n  .event-content h4 {\n    font-size: 0.85rem;\n  }\n  .event-description {\n    font-size: 0.75rem;\n  }\n  .event-meta {\n    font-size: 0.65rem;\n    gap: 6px;\n  }\n}\n.calendar-container.rtl .search-input {\n  padding: 12px 48px 12px 16px;\n}\n.calendar-container.rtl .search-icon {\n  left: auto;\n  right: 16px;\n}\n.calendar-container.rtl .event-color-bar {\n  order: 1;\n}\n.calendar-container.rtl .event-content {\n  order: 0;\n}\n.day-reminders-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.day-reminders-modal .modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 90%;\n  max-width: 600px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.day-reminders-modal .modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #1B1D21;\n  border-radius: 12px 12px 0 0;\n}\n.day-reminders-modal .modal-header h3 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1B1D21;\n}\n.day-reminders-modal .close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  color: white;\n  transition: all 0.2s;\n}\n.day-reminders-modal .close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.day-reminders-modal .modal-body {\n  padding: 24px;\n}\n.day-reminders-modal .reminders-list {\n  max-height: 50vh;\n  overflow-y: auto;\n}\n.day-reminders-modal .reminder-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: all 0.2s;\n  background: #fafafa;\n}\n.day-reminders-modal .reminder-item:hover {\n  border-color: #FF3B3B;\n  box-shadow: 0 2px 8px rgba(255, 59, 59, 0.1);\n  transform: translateY(-1px);\n}\n.day-reminders-modal .reminder-color-bar {\n  width: 4px;\n  height: 100%;\n  border-radius: 2px;\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n.day-reminders-modal .reminder-content {\n  flex: 1;\n}\n.day-reminders-modal .reminder-title {\n  margin: 0 0 8px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #111827;\n}\n.day-reminders-modal .reminder-description {\n  margin: 0 0 12px 0;\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.day-reminders-modal .reminder-dates {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.day-reminders-modal .date-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n}\n.day-reminders-modal .date-label {\n  font-weight: 500;\n  color: #374151;\n  min-width: 120px;\n}\n.day-reminders-modal .date-value {\n  color: #6b7280;\n}\n.day-reminders-modal .no-reminders {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6b7280;\n}\n.day-reminders-modal .no-reminders svg {\n  margin-bottom: 16px;\n  color: #d1d5db;\n}\n.day-reminders-modal .no-reminders h4 {\n  margin: 0 0 8px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.day-reminders-modal .no-reminders p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.rtl .day-reminders-modal .reminder-item {\n  flex-direction: row-reverse;\n}\n.rtl .day-reminders-modal .reminder-color-bar {\n  margin-right: 0;\n  margin-left: 16px;\n}\n@media (max-width: 768px) {\n  .reminder-indicator {\n    display: none;\n  }\n  .day-reminders-modal .modal-content {\n    width: 95%;\n    margin: 20px;\n  }\n  .day-reminders-modal .modal-header,\n  .day-reminders-modal .modal-body {\n    padding: 16px;\n  }\n  .day-reminders-modal .reminder-item {\n    padding: 12px;\n  }\n  .day-reminders-modal .date-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .day-reminders-modal .date-label {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=calendar.component-W232LKHG.css.map */\n'] }]
  }], () => [{ type: CalendarService }, { type: TranslationService }, { type: LangService }, { type: ReminderService }], { allRemindersModal: [{
    type: ViewChild,
    args: ["allRemindersModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalendarComponent, { className: "CalendarComponent", filePath: "src/app/components/calendar/calendar.component.ts", lineNumber: 22 });
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
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [CalendarService, ReminderService], imports: [
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
      providers: [CalendarService, ReminderService],
      exports: [
        CalendarComponent
      ]
    }]
  }], null, null);
})();
export {
  CalendarModule
};
//# sourceMappingURL=chunk-IG5NAUHG.js.map
