import {
  ConfirmationModalComponent
} from "./chunk-WEYYT6CR.js";
import {
  RouterModule
} from "./chunk-O632SAIF.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ODVCO6WW.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  SlicePipe,
  TranslationService,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-66AA6EL7.js";
import "./chunk-EVSPGG2W.js";

// src/app/services/travel.service.ts
var TravelService = class _TravelService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getTravels(search, from, to, pageNumber = 1, pageSize = 10) {
    let params = new HttpParams().set("PageNumber", pageNumber.toString()).set("PageSize", pageSize.toString());
    if (search) {
      params = params.set("Search", search);
    }
    if (from) {
      params = params.set("From", from);
    }
    if (to) {
      params = params.set("To", to);
    }
    return this.http.get(`${this.baseUrl}/Travel`, { params });
  }
  getTravelById(id) {
    return this.http.get(`${this.baseUrl}/Travel/${id}`);
  }
  createTravel(travel) {
    return this.http.post(`${this.baseUrl}/Travel`, travel);
  }
  updateTravel(id, travel) {
    return this.http.put(`${this.baseUrl}/Travel/${id}`, travel);
  }
  deleteTravel(id) {
    return this.http.delete(`${this.baseUrl}/Travel/${id}`);
  }
  // Travel Results (Achievements) API methods
  getTravelResults(travelId) {
    return this.http.get(`${this.baseUrl}/TravelResult?travelId=${travelId}`);
  }
  createTravelResult(result) {
    return this.http.post(`${this.baseUrl}/TravelResult`, result);
  }
  updateTravelResult(id, result) {
    return this.http.put(`${this.baseUrl}/TravelResult/${id}`, result);
  }
  deleteTravelResult(id) {
    return this.http.delete(`${this.baseUrl}/TravelResult/${id}`);
  }
  static \u0275fac = function TravelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TravelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TravelService, factory: _TravelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TravelService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/travel/add-travel-modal/add-travel-modal.component.ts
function AddTravelModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("title"), " ");
  }
}
function AddTravelModalComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("destination"), " ");
  }
}
function AddTravelModalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("purpose"), " ");
  }
}
function AddTravelModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("startDate"), " ");
  }
}
function AddTravelModalComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("endDate"), " ");
  }
}
function AddTravelModalComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", mode_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", mode_r2.icon, " ", ctx_r0.getTransportModeLabel(mode_r2.value), " ");
  }
}
function AddTravelModalComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("transportMode"), " ");
  }
}
function AddTravelModalComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("accommodation"), " ");
  }
}
function AddTravelModalComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 35);
    \u0275\u0275element(2, "circle", 36)(3, "line", 37)(4, "line", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function AddTravelModalComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
}
var AddTravelModalComponent = class _AddTravelModalComponent {
  fb;
  travelService;
  translationService;
  isRTL = false;
  close = new EventEmitter();
  travelAdded = new EventEmitter();
  travelForm;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  transportModes = [
    { value: "Air", icon: "\u2708\uFE0F" },
    { value: "Train", icon: "\u{1F684}" },
    { value: "Bus", icon: "\u{1F68C}" },
    { value: "Car", icon: "\u{1F697}" },
    { value: "Ship", icon: "\u{1F6A2}" }
  ];
  constructor(fb, travelService, translationService) {
    this.fb = fb;
    this.travelService = travelService;
    this.translationService = translationService;
    this.travelForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      destination: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      purpose: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(400)]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      transportMode: ["Air", [Validators.required]],
      accommodation: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
    this.travelForm.get("endDate")?.valueChanges.subscribe(() => {
      this.validateDates();
    });
  }
  validateDates() {
    const startDate = this.travelForm.get("startDate")?.value;
    const endDate = this.travelForm.get("endDate")?.value;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (end <= start) {
        this.travelForm.get("endDate")?.setErrors({ invalidEndDate: true });
      } else {
        this.travelForm.get("endDate")?.setErrors(null);
      }
    }
  }
  onSubmit() {
    if (this.travelForm.valid) {
      this.loading.set(true);
      this.errorMessage.set("");
      const formValue = this.travelForm.value;
      const travelData = {
        title: formValue.title,
        destination: formValue.destination,
        purpose: formValue.purpose,
        startDate: new Date(formValue.startDate).toISOString(),
        endDate: new Date(formValue.endDate).toISOString(),
        transportMode: formValue.transportMode,
        accommodation: formValue.accommodation
      };
      this.travelService.createTravel(travelData).subscribe({
        next: (response) => {
          if (response.success) {
            this.travelAdded.emit(response.data);
            this.closeModal();
          } else {
            this.errorMessage.set(response.message || this.translate("travel.create_error"));
          }
          this.loading.set(false);
        },
        error: (error) => {
          console.error("Error creating travel:", error);
          this.errorMessage.set(this.translate("travel.create_error"));
          this.loading.set(false);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.travelForm.controls).forEach((key) => {
      const control = this.travelForm.get(key);
      control?.markAsTouched();
    });
  }
  closeModal() {
    this.close.emit();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getTransportModeLabel(mode) {
    return this.translate(`travel.transport_modes.${mode.toLowerCase()}`);
  }
  getFieldError(fieldName) {
    const field = this.travelForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["minlength"]) {
        return this.translate("common.min_length").replace("%min%", field.errors["minlength"].requiredLength);
      }
      if (field.errors["maxlength"]) {
        return this.translate("common.max_length").replace("%max%", field.errors["maxlength"].requiredLength);
      }
      if (field.errors["invalidEndDate"]) {
        return this.translate("travel.invalid_end_date");
      }
    }
    return "";
  }
  static \u0275fac = function AddTravelModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddTravelModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddTravelModalComponent, selectors: [["app-add-travel-modal"]], inputs: { isRTL: "isRTL" }, outputs: { close: "close", travelAdded: "travelAdded" }, standalone: false, decls: 54, vars: 47, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click", "dir"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "travel-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "destination", 1, "form-label"], ["type", "text", "id", "destination", "formControlName", "destination", 1, "form-input", 3, "placeholder"], ["for", "purpose", 1, "form-label"], ["id", "purpose", "formControlName", "purpose", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "form-row"], ["for", "startDate", 1, "form-label"], ["type", "datetime-local", "id", "startDate", "formControlName", "startDate", 1, "form-input"], ["for", "endDate", 1, "form-label"], ["type", "datetime-local", "id", "endDate", "formControlName", "endDate", 1, "form-input"], ["for", "transportMode", 1, "form-label"], ["id", "transportMode", "formControlName", "transportMode", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "accommodation", 1, "form-label"], ["id", "accommodation", "formControlName", "accommodation", "rows", "2", 1, "form-textarea", 3, "placeholder"], ["class", "error-alert", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "error-message"], [3, "value"], [1, "error-alert"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "spinner"]], template: function AddTravelModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddTravelModalComponent_Template_div_click_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddTravelModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function AddTravelModalComponent_Template_button_click_5_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "line", 6)(8, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 8);
      \u0275\u0275listener("ngSubmit", function AddTravelModalComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 11);
      \u0275\u0275template(14, AddTravelModalComponent_div_14_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275template(19, AddTravelModalComponent_div_19_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 16);
      \u0275\u0275template(24, AddTravelModalComponent_div_24_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 9)(27, "label", 18);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 19);
      \u0275\u0275template(30, AddTravelModalComponent_div_30_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 20);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275template(35, AddTravelModalComponent_div_35_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 9)(37, "label", 22);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 23);
      \u0275\u0275template(40, AddTravelModalComponent_option_40_Template, 2, 3, "option", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, AddTravelModalComponent_div_41_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 9)(43, "label", 25);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "textarea", 26);
      \u0275\u0275template(46, AddTravelModalComponent_div_46_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, AddTravelModalComponent_div_47_Template, 6, 1, "div", 27);
      \u0275\u0275elementStart(48, "div", 28)(49, "button", 29);
      \u0275\u0275listener("click", function AddTravelModalComponent_Template_button_click_49_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 30);
      \u0275\u0275template(52, AddTravelModalComponent_div_52_Template, 1, 0, "div", 31);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_9_0;
      let tmp_13_0;
      let tmp_17_0;
      let tmp_20_0;
      let tmp_23_0;
      let tmp_27_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275property("dir", ctx.isRTL ? "rtl" : "ltr");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("travel.add_travel"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.travelForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.title"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_5_0 = ctx.travelForm.get("title")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.travelForm.get("title")) == null ? null : tmp_5_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.title_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.destination"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_9_0 = ctx.travelForm.get("destination")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.travelForm.get("destination")) == null ? null : tmp_9_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.destination_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("destination"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.purpose"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_13_0 = ctx.travelForm.get("purpose")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.travelForm.get("purpose")) == null ? null : tmp_13_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.purpose_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("purpose"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.start_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_17_0 = ctx.travelForm.get("startDate")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.travelForm.get("startDate")) == null ? null : tmp_17_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("startDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.end_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_20_0 = ctx.travelForm.get("endDate")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.travelForm.get("endDate")) == null ? null : tmp_20_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("endDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.transport_mode"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_23_0 = ctx.travelForm.get("transportMode")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.travelForm.get("transportMode")) == null ? null : tmp_23_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transportModes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("transportMode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.accommodation"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_27_0 = ctx.travelForm.get("accommodation")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx.travelForm.get("accommodation")) == null ? null : tmp_27_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.accommodation_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("accommodation"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? ctx.translate("common.creating") : ctx.translate("travel.create"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  max-width: 600px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n  min-height: 40px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  flex: 1;\n  width: 100%;\n}\n.modal-content[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.modal-content[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: 0;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.travel-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: white;\n  color: #1f2937;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.error-alert[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: #B45253 !important;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .travel-form[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-travel-modal.component-IB2IC233.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddTravelModalComponent, [{
    type: Component,
    args: [{ selector: "app-add-travel-modal", standalone: false, template: `<div class="modal-overlay" (click)="closeModal()">\r
  <div\r
    class="modal-content"\r
    (click)="$event.stopPropagation()"\r
    [class.rtl]="isRTL"\r
    [dir]="isRTL ? 'rtl' : 'ltr'"\r
  >\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ translate("travel.add_travel") }}</h2>\r
      <button class="close-btn" (click)="closeModal()">\r
        <svg\r
          width="24"\r
          height="24"\r
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
\r
    <form [formGroup]="travelForm" (ngSubmit)="onSubmit()" class="travel-form">\r
      <div class="form-group">\r
        <label for="title" class="form-label"\r
          >{{ translate("travel.title") }} *</label\r
        >\r
        <input\r
          type="text"\r
          id="title"\r
          formControlName="title"\r
          class="form-input"\r
          [class.error]="\r
            travelForm.get('title')?.invalid && travelForm.get('title')?.touched\r
          "\r
          placeholder="{{ translate('travel.title_placeholder') }}"\r
        />\r
        <div class="error-message" *ngIf="getFieldError('title')">\r
          {{ getFieldError("title") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="destination" class="form-label"\r
          >{{ translate("travel.destination") }} *</label\r
        >\r
        <input\r
          type="text"\r
          id="destination"\r
          formControlName="destination"\r
          class="form-input"\r
          [class.error]="\r
            travelForm.get('destination')?.invalid &&\r
            travelForm.get('destination')?.touched\r
          "\r
          placeholder="{{ translate('travel.destination_placeholder') }}"\r
        />\r
        <div class="error-message" *ngIf="getFieldError('destination')">\r
          {{ getFieldError("destination") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="purpose" class="form-label"\r
          >{{ translate("travel.purpose") }} *</label\r
        >\r
        <textarea\r
          id="purpose"\r
          formControlName="purpose"\r
          class="form-textarea"\r
          [class.error]="\r
            travelForm.get('purpose')?.invalid &&\r
            travelForm.get('purpose')?.touched\r
          "\r
          placeholder="{{ translate('travel.purpose_placeholder') }}"\r
          rows="3"\r
        ></textarea>\r
        <div class="error-message" *ngIf="getFieldError('purpose')">\r
          {{ getFieldError("purpose") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="startDate" class="form-label"\r
            >{{ translate("travel.start_date") }} *</label\r
          >\r
          <input\r
            type="datetime-local"\r
            id="startDate"\r
            formControlName="startDate"\r
            class="form-input"\r
            [class.error]="\r
              travelForm.get('startDate')?.invalid &&\r
              travelForm.get('startDate')?.touched\r
            "\r
          />\r
          <div class="error-message" *ngIf="getFieldError('startDate')">\r
            {{ getFieldError("startDate") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="endDate" class="form-label"\r
            >{{ translate("travel.end_date") }} *</label\r
          >\r
          <input\r
            type="datetime-local"\r
            id="endDate"\r
            formControlName="endDate"\r
            class="form-input"\r
            [class.error]="\r
              travelForm.get('endDate')?.invalid &&\r
              travelForm.get('endDate')?.touched\r
            "\r
          />\r
          <div class="error-message" *ngIf="getFieldError('endDate')">\r
            {{ getFieldError("endDate") }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="transportMode" class="form-label"\r
          >{{ translate("travel.transport_mode") }} *</label\r
        >\r
        <select\r
          id="transportMode"\r
          formControlName="transportMode"\r
          class="form-select"\r
          [class.error]="\r
            travelForm.get('transportMode')?.invalid &&\r
            travelForm.get('transportMode')?.touched\r
          "\r
        >\r
          <option *ngFor="let mode of transportModes" [value]="mode.value">\r
            {{ mode.icon }} {{ getTransportModeLabel(mode.value) }}\r
          </option>\r
        </select>\r
        <div class="error-message" *ngIf="getFieldError('transportMode')">\r
          {{ getFieldError("transportMode") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="accommodation" class="form-label"\r
          >{{ translate("travel.accommodation") }} </label\r
        >\r
        <textarea\r
          id="accommodation"\r
          formControlName="accommodation"\r
          class="form-textarea"\r
          [class.error]="\r
            travelForm.get('accommodation')?.invalid &&\r
            travelForm.get('accommodation')?.touched\r
          "\r
          placeholder="{{ translate('travel.accommodation_placeholder') }}"\r
          rows="2"\r
        ></textarea>\r
        <div class="error-message" *ngIf="getFieldError('accommodation')">\r
          {{ getFieldError("accommodation") }}\r
        </div>\r
      </div>\r
      \r
      <div class="error-alert" *ngIf="errorMessage()">\r
        <svg\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="15" y1="9" x2="9" y2="15"></line>\r
          <line x1="9" y1="9" x2="15" y2="15"></line>\r
        </svg>\r
        {{ errorMessage() }}\r
      </div>\r
\r
      <div class="form-actions">\r
        <button type="button" class="btn-secondary" (click)="closeModal()">\r
          {{ translate("common.cancel") }}\r
        </button>\r
        <button type="submit" class="btn-primary" [disabled]="loading()">\r
          <div class="spinner" *ngIf="loading()"></div>\r
          {{\r
            loading()\r
              ? translate("common.creating")\r
              : translate("travel.create")\r
          }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/travel/add-travel-modal/add-travel-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 0.5rem;\n  max-width: 600px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n  min-height: 40px;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  flex: 1;\n  width: 100%;\n}\n.modal-content[dir=ltr] .modal-title {\n  text-align: left !important;\n}\n.modal-content[dir=rtl] .modal-title {\n  text-align: right !important;\n}\n.close-btn {\n  position: absolute;\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr] .close-btn {\n  right: 0;\n}\n[dir=rtl] .close-btn {\n  left: 0;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.travel-form {\n  padding: 2rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-label {\n  display: block;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-select,\n.form-textarea {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: white;\n  color: #1f2937;\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-select.error,\n.form-textarea.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-select {\n  cursor: pointer;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.error-alert {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-primary,\n.btn-secondary {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary :hover {\n  background-color: #B45253 !important;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.modal-content.rtl .form-actions {\n  justify-content: flex-start;\n}\n.modal-content.rtl .form-row {\n  direction: ltr;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-header {\n    padding: 1rem 1.5rem;\n  }\n  .travel-form {\n    padding: 1.5rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .btn-primary,\n  .btn-secondary {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=add-travel-modal.component-IB2IC233.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TravelService }, { type: TranslationService }], { isRTL: [{
    type: Input
  }], close: [{
    type: Output
  }], travelAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddTravelModalComponent, { className: "AddTravelModalComponent", filePath: "src/app/components/travel/add-travel-modal/add-travel-modal.component.ts", lineNumber: 13 });
})();

// src/app/components/travel/edit-travel-modal/edit-travel-modal.component.ts
function EditTravelModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("title"), " ");
  }
}
function EditTravelModalComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("destination"), " ");
  }
}
function EditTravelModalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("purpose"), " ");
  }
}
function EditTravelModalComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("startDate"), " ");
  }
}
function EditTravelModalComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("endDate"), " ");
  }
}
function EditTravelModalComponent_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mode_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", mode_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", mode_r2.icon, " ", ctx_r0.getTransportModeLabel(mode_r2.value), " ");
  }
}
function EditTravelModalComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("transportMode"), " ");
  }
}
function EditTravelModalComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("accommodation"), " ");
  }
}
function EditTravelModalComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("isCompleted"), " ");
  }
}
function EditTravelModalComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 37);
    \u0275\u0275element(2, "circle", 38)(3, "line", 39)(4, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function EditTravelModalComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
}
var EditTravelModalComponent = class _EditTravelModalComponent {
  fb;
  travelService;
  translationService;
  travel;
  isRTL = false;
  close = new EventEmitter();
  travelUpdated = new EventEmitter();
  travelForm;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  transportModes = [
    { value: "Air", icon: "\u2708\uFE0F" },
    { value: "Train", icon: "\u{1F684}" },
    { value: "Bus", icon: "\u{1F68C}" },
    { value: "Car", icon: "\u{1F697}" },
    { value: "Ship", icon: "\u{1F6A2}" }
  ];
  constructor(fb, travelService, translationService) {
    this.fb = fb;
    this.travelService = travelService;
    this.translationService = translationService;
    this.travelForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      destination: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      purpose: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(400)]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      transportMode: ["Air", [Validators.required]],
      accommodation: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      isCompleted: [false]
    });
    this.travelForm.get("endDate")?.valueChanges.subscribe(() => {
      this.validateDates();
    });
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    const startDate = new Date(this.travel.startDate);
    const endDate = new Date(this.travel.endDate);
    const formatDateForInput = (date) => {
      return date.toISOString().slice(0, 16);
    };
    this.travelForm.patchValue({
      title: this.travel.title,
      destination: this.travel.destination,
      purpose: this.travel.purpose,
      startDate: formatDateForInput(startDate),
      endDate: formatDateForInput(endDate),
      transportMode: this.travel.transportMode,
      accommodation: this.travel.accommodation,
      isCompleted: this.travel.isCompleted || false
    });
  }
  validateDates() {
    const startDate = this.travelForm.get("startDate")?.value;
    const endDate = this.travelForm.get("endDate")?.value;
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (end <= start) {
        this.travelForm.get("endDate")?.setErrors({ invalidEndDate: true });
      } else {
        this.travelForm.get("endDate")?.setErrors(null);
      }
    }
  }
  onSubmit() {
    if (this.travelForm.valid) {
      this.loading.set(true);
      this.errorMessage.set("");
      const formValue = this.travelForm.value;
      const travelData = {
        title: formValue.title,
        destination: formValue.destination,
        purpose: formValue.purpose,
        startDate: new Date(formValue.startDate).toISOString(),
        endDate: new Date(formValue.endDate).toISOString(),
        transportMode: formValue.transportMode,
        accommodation: formValue.accommodation,
        isCompleted: formValue.isCompleted
      };
      this.travelService.updateTravel(this.travel.id, travelData).subscribe({
        next: (response) => {
          if (response.success) {
            this.travelUpdated.emit(response.data);
            this.closeModal();
          } else {
            this.errorMessage.set(response.message || this.translate("travel.update_error"));
          }
          this.loading.set(false);
        },
        error: (error) => {
          console.error("Error updating travel:", error);
          this.errorMessage.set(this.translate("travel.update_error"));
          this.loading.set(false);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.travelForm.controls).forEach((key) => {
      const control = this.travelForm.get(key);
      control?.markAsTouched();
    });
  }
  closeModal() {
    this.close.emit();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getTransportModeLabel(mode) {
    return this.translate(`travel.transport_modes.${mode.toLowerCase()}`);
  }
  getFieldError(fieldName) {
    const field = this.travelForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["minlength"]) {
        return this.translate("common.min_length").replace("%min%", field.errors["minlength"].requiredLength);
      }
      if (field.errors["maxlength"]) {
        return this.translate("common.max_length").replace("%max%", field.errors["maxlength"].requiredLength);
      }
      if (field.errors["invalidEndDate"]) {
        return this.translate("travel.invalid_end_date");
      }
    }
    return "";
  }
  static \u0275fac = function EditTravelModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditTravelModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditTravelModalComponent, selectors: [["app-edit-travel-modal"]], inputs: { travel: "travel", isRTL: "isRTL" }, outputs: { close: "close", travelUpdated: "travelUpdated" }, standalone: false, decls: 59, vars: 49, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click", "dir"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "travel-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "destination", 1, "form-label"], ["type", "text", "id", "destination", "formControlName", "destination", 1, "form-input", 3, "placeholder"], ["for", "purpose", 1, "form-label"], ["id", "purpose", "formControlName", "purpose", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "form-row"], ["for", "startDate", 1, "form-label"], ["type", "datetime-local", "id", "startDate", "formControlName", "startDate", 1, "form-input"], ["for", "endDate", 1, "form-label"], ["type", "datetime-local", "id", "endDate", "formControlName", "endDate", 1, "form-input"], ["for", "transportMode", 1, "form-label"], ["id", "transportMode", "formControlName", "transportMode", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "accommodation", 1, "form-label"], ["id", "accommodation", "formControlName", "accommodation", "rows", "2", 1, "form-textarea", 3, "placeholder"], ["for", "isCompleted", 1, "form-label"], ["type", "checkbox", "id", "isCompleted", "formControlName", "isCompleted", 1, "form-checkbox"], ["class", "error-alert", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "error-message"], [3, "value"], [1, "error-alert"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "spinner"]], template: function EditTravelModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function EditTravelModalComponent_Template_div_click_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function EditTravelModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function EditTravelModalComponent_Template_button_click_5_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "line", 6)(8, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 8);
      \u0275\u0275listener("ngSubmit", function EditTravelModalComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 11);
      \u0275\u0275template(14, EditTravelModalComponent_div_14_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275template(19, EditTravelModalComponent_div_19_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 15);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 16);
      \u0275\u0275template(24, EditTravelModalComponent_div_24_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 9)(27, "label", 18);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 19);
      \u0275\u0275template(30, EditTravelModalComponent_div_30_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "label", 20);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275template(35, EditTravelModalComponent_div_35_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 9)(37, "label", 22);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "select", 23);
      \u0275\u0275template(40, EditTravelModalComponent_option_40_Template, 2, 3, "option", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, EditTravelModalComponent_div_41_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 9)(43, "label", 25);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "textarea", 26);
      \u0275\u0275template(46, EditTravelModalComponent_div_46_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 9)(48, "label", 27);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 28);
      \u0275\u0275template(51, EditTravelModalComponent_div_51_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, EditTravelModalComponent_div_52_Template, 6, 1, "div", 29);
      \u0275\u0275elementStart(53, "div", 30)(54, "button", 31);
      \u0275\u0275listener("click", function EditTravelModalComponent_Template_button_click_54_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 32);
      \u0275\u0275template(57, EditTravelModalComponent_div_57_Template, 1, 0, "div", 33);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_9_0;
      let tmp_13_0;
      let tmp_17_0;
      let tmp_20_0;
      let tmp_23_0;
      let tmp_27_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275property("dir", ctx.isRTL ? "rtl" : "ltr");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("travel.edit_travel"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.travelForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.title"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_5_0 = ctx.travelForm.get("title")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.travelForm.get("title")) == null ? null : tmp_5_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.title_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.destination"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_9_0 = ctx.travelForm.get("destination")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.travelForm.get("destination")) == null ? null : tmp_9_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.destination_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("destination"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.purpose"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_13_0 = ctx.travelForm.get("purpose")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.travelForm.get("purpose")) == null ? null : tmp_13_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.purpose_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("purpose"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.start_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_17_0 = ctx.travelForm.get("startDate")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx.travelForm.get("startDate")) == null ? null : tmp_17_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("startDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.end_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_20_0 = ctx.travelForm.get("endDate")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx.travelForm.get("endDate")) == null ? null : tmp_20_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("endDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("travel.transport_mode"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_23_0 = ctx.travelForm.get("transportMode")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.travelForm.get("transportMode")) == null ? null : tmp_23_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transportModes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("transportMode"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("travel.accommodation"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_27_0 = ctx.travelForm.get("accommodation")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx.travelForm.get("accommodation")) == null ? null : tmp_27_0.touched));
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("travel.accommodation_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("accommodation"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("travel.is_completed"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.getFieldError("isCompleted"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? ctx.translate("common.updating") : ctx.translate("travel.update"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  max-width: 600px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n  min-height: 40px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  flex: 1;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: 0;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.travel-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 0.5rem;\n  accent-color: #B68A35;\n  cursor: pointer;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: white;\n  color: #1f2937;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.error-alert[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .travel-form[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-travel-modal.component-GIDCMOSQ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditTravelModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-travel-modal", standalone: false, template: `<div class="modal-overlay" (click)="closeModal()">\r
  <div\r
    class="modal-content"\r
    (click)="$event.stopPropagation()"\r
    [class.rtl]="isRTL"\r
    [dir]="isRTL ? 'rtl' : 'ltr'"\r
  >\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ translate("travel.edit_travel") }}</h2>\r
      <button class="close-btn" (click)="closeModal()">\r
        <svg\r
          width="24"\r
          height="24"\r
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
\r
    <form [formGroup]="travelForm" (ngSubmit)="onSubmit()" class="travel-form">\r
      <div class="form-group">\r
        <label for="title" class="form-label"\r
          >{{ translate("travel.title") }} *</label\r
        >\r
        <input\r
          type="text"\r
          id="title"\r
          formControlName="title"\r
          class="form-input"\r
          [class.error]="\r
            travelForm.get('title')?.invalid && travelForm.get('title')?.touched\r
          "\r
          placeholder="{{ translate('travel.title_placeholder') }}"\r
        />\r
        <div class="error-message" *ngIf="getFieldError('title')">\r
          {{ getFieldError("title") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="destination" class="form-label"\r
          >{{ translate("travel.destination") }} *</label\r
        >\r
        <input\r
          type="text"\r
          id="destination"\r
          formControlName="destination"\r
          class="form-input"\r
          [class.error]="\r
            travelForm.get('destination')?.invalid &&\r
            travelForm.get('destination')?.touched\r
          "\r
          placeholder="{{ translate('travel.destination_placeholder') }}"\r
        />\r
        <div class="error-message" *ngIf="getFieldError('destination')">\r
          {{ getFieldError("destination") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="purpose" class="form-label"\r
          >{{ translate("travel.purpose") }} *</label\r
        >\r
        <textarea\r
          id="purpose"\r
          formControlName="purpose"\r
          class="form-textarea"\r
          [class.error]="\r
            travelForm.get('purpose')?.invalid &&\r
            travelForm.get('purpose')?.touched\r
          "\r
          placeholder="{{ translate('travel.purpose_placeholder') }}"\r
          rows="3"\r
        ></textarea>\r
        <div class="error-message" *ngIf="getFieldError('purpose')">\r
          {{ getFieldError("purpose") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label for="startDate" class="form-label"\r
            >{{ translate("travel.start_date") }} *</label\r
          >\r
          <input\r
            type="datetime-local"\r
            id="startDate"\r
            formControlName="startDate"\r
            class="form-input"\r
            [class.error]="\r
              travelForm.get('startDate')?.invalid &&\r
              travelForm.get('startDate')?.touched\r
            "\r
          />\r
          <div class="error-message" *ngIf="getFieldError('startDate')">\r
            {{ getFieldError("startDate") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="endDate" class="form-label"\r
            >{{ translate("travel.end_date") }} *</label\r
          >\r
          <input\r
            type="datetime-local"\r
            id="endDate"\r
            formControlName="endDate"\r
            class="form-input"\r
            [class.error]="\r
              travelForm.get('endDate')?.invalid &&\r
              travelForm.get('endDate')?.touched\r
            "\r
          />\r
          <div class="error-message" *ngIf="getFieldError('endDate')">\r
            {{ getFieldError("endDate") }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="transportMode" class="form-label"\r
          >{{ translate("travel.transport_mode") }} *</label\r
        >\r
        <select\r
          id="transportMode"\r
          formControlName="transportMode"\r
          class="form-select"\r
          [class.error]="\r
            travelForm.get('transportMode')?.invalid &&\r
            travelForm.get('transportMode')?.touched\r
          "\r
        >\r
          <option *ngFor="let mode of transportModes" [value]="mode.value">\r
            {{ mode.icon }} {{ getTransportModeLabel(mode.value) }}\r
          </option>\r
        </select>\r
        <div class="error-message" *ngIf="getFieldError('transportMode')">\r
          {{ getFieldError("transportMode") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="accommodation" class="form-label"\r
          >{{ translate("travel.accommodation") }}</label\r
        >\r
        <textarea\r
          id="accommodation"\r
          formControlName="accommodation"\r
          class="form-textarea"\r
          [class.error]="\r
            travelForm.get('accommodation')?.invalid &&\r
            travelForm.get('accommodation')?.touched\r
          "\r
          placeholder="{{ translate('travel.accommodation_placeholder') }}"\r
          rows="2"\r
        ></textarea>\r
        <div class="error-message" *ngIf="getFieldError('accommodation')">\r
          {{ getFieldError("accommodation") }}\r
        </div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label for="isCompleted" class="form-label">{{ translate("travel.is_completed") }}</label>\r
        <input type="checkbox" id="isCompleted" formControlName="isCompleted" class="form-checkbox">\r
        <div class="error-message" *ngIf="getFieldError('isCompleted')">\r
          {{ getFieldError("isCompleted") }}\r
        </div>\r
      </div>\r
      <div class="error-alert" *ngIf="errorMessage()">\r
        <svg\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="15" y1="9" x2="9" y2="15"></line>\r
          <line x1="9" y1="9" x2="15" y2="15"></line>\r
        </svg>\r
        {{ errorMessage() }}\r
      </div>\r
\r
      <div class="form-actions">\r
        <button type="button" class="btn-secondary" (click)="closeModal()">\r
          {{ translate("common.cancel") }}\r
        </button>\r
        <button type="submit" class="btn-primary" [disabled]="loading()">\r
          <div class="spinner" *ngIf="loading()"></div>\r
          {{\r
            loading()\r
              ? translate("common.updating")\r
              : translate("travel.update")\r
          }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/travel/edit-travel-modal/edit-travel-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 0.5rem;\n  max-width: 600px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n  min-height: 40px;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  flex: 1;\n}\n[dir=ltr] .modal-title {\n  text-align: left;\n}\n[dir=rtl] .modal-title {\n  text-align: right;\n}\n.close-btn {\n  position: absolute;\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr] .close-btn {\n  right: 0;\n}\n[dir=rtl] .close-btn {\n  left: 0;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.travel-form {\n  padding: 2rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-checkbox {\n  width: 18px;\n  height: 18px;\n  margin-right: 0.5rem;\n  accent-color: #B68A35;\n  cursor: pointer;\n}\n.form-group label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-label {\n  display: block;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-select,\n.form-textarea {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n  background: white;\n  color: #1f2937;\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-select.error,\n.form-textarea.error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-select {\n  cursor: pointer;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.error-alert {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn-primary,\n.btn-secondary {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.modal-content.rtl .form-actions {\n  justify-content: flex-start;\n}\n.modal-content.rtl .form-row {\n  direction: ltr;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-header {\n    padding: 1rem 1.5rem;\n  }\n  .travel-form {\n    padding: 1.5rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .btn-primary,\n  .btn-secondary {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=edit-travel-modal.component-GIDCMOSQ.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TravelService }, { type: TranslationService }], { travel: [{
    type: Input
  }], isRTL: [{
    type: Input
  }], close: [{
    type: Output
  }], travelUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditTravelModalComponent, { className: "EditTravelModalComponent", filePath: "src/app/components/travel/edit-travel-modal/edit-travel-modal.component.ts", lineNumber: 20 });
})();

// src/app/components/travel/travel-details-modal/travel-details-modal.component.ts
var _c0 = () => ["Air", "Train", "Bus", "Car", "Ship"];
function TravelDetailsModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("login.loading"));
  }
}
function TravelDetailsModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 17);
    \u0275\u0275element(3, "circle", 18)(4, "line", 19)(5, "line", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadTravelDetails());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.retry"), " ");
  }
}
function TravelDetailsModalComponent_div_11__svg_path_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 78);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 79);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 80);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 81);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 82);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 83);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 84);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 85);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 86);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 87);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 88);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 89);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 91);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 92);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 93);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 94);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 95);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 96);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 97);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 75);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 78);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 79);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 80);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 81);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 82);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 83);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 84);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 85);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 86);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 87);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 88);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 89);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 91);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 92);
  }
}
function TravelDetailsModalComponent_div_11__svg_circle_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 93);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 94);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 95);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 96);
  }
}
function TravelDetailsModalComponent_div_11__svg_path_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 97);
  }
}
function TravelDetailsModalComponent_div_11_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "path", 98)(4, "circle", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.created_by"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.travel()) == null ? null : tmp_3_0.createdByUserName);
  }
}
function TravelDetailsModalComponent_div_11_div_114_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_11_div_114_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showAddAchievementForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 109);
    \u0275\u0275element(2, "path", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.add_achievement"), " ");
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112)(2, "label", 113);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 114);
    \u0275\u0275twoWayListener("ngModelChange", function TravelDetailsModalComponent_div_11_div_114_div_9_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.achievementText, $event) || (ctx_r0.achievementText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(5, "            ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 115)(7, "button", 116);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_11_div_114_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveAchievement());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 117);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_11_div_114_div_9_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelAchievementForm());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("travel.achievement_text"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.achievementText);
    \u0275\u0275property("placeholder", ctx_r0.translate("travel.achievement_text_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.achievementText().trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingAchievement() ? ctx_r0.translate("common.update") : ctx_r0.translate("common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_10_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 133);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const achievement_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("common.updated_at"), ": ", \u0275\u0275pipeBind2(2, 2, achievement_r6.updatedAt, "medium"), " ");
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "p", 123);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 124)(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, TravelDetailsModalComponent_div_11_div_114_div_10_div_1_span_8_Template, 3, 5, "span", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 127)(10, "button", 128);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_11_div_114_div_10_div_1_Template_button_click_10_listener() {
      const achievement_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.editAchievement(achievement_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 109);
    \u0275\u0275element(12, "path", 129)(13, "path", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 131);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_11_div_114_div_10_div_1_Template_button_click_15_listener() {
      const achievement_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteAchievement(achievement_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 109);
    \u0275\u0275element(17, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const achievement_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(achievement_r6.achievements);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("common.created_at"), ":", \u0275\u0275pipeBind2(7, 6, achievement_r6.createdAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", achievement_r6.updatedAt);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.edit_achievement"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.delete_achievement"), " ");
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 135);
    \u0275\u0275element(2, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("travel.no_achievements"));
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275template(1, TravelDetailsModalComponent_div_11_div_114_div_10_div_1_Template, 19, 9, "div", 119)(2, TravelDetailsModalComponent_div_11_div_114_div_10_div_2_Template, 5, 1, "div", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.achievements());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.achievements().length === 0);
  }
}
function TravelDetailsModalComponent_div_11_div_114_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275element(1, "div", 137);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("common.loading"), "...");
  }
}
function TravelDetailsModalComponent_div_11_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "h3", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 5);
    \u0275\u0275element(4, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TravelDetailsModalComponent_div_11_div_114_button_6_Template, 4, 1, "button", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TravelDetailsModalComponent_div_11_div_114_div_9_Template, 11, 6, "div", 105)(10, TravelDetailsModalComponent_div_11_div_114_div_10_Template, 3, 2, "div", 106)(11, TravelDetailsModalComponent_div_11_div_114_div_11_Template, 4, 1, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.achievements_title"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showAddAchievement() && !ctx_r0.editingAchievement());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("travel.achievements_description"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddAchievement() || ctx_r0.editingAchievement());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.achievementsLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.achievementsLoading());
  }
}
function TravelDetailsModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 26);
    \u0275\u0275template(5, TravelDetailsModalComponent_div_11__svg_path_5_Template, 1, 0, "path", 27)(6, TravelDetailsModalComponent_div_11__svg_path_6_Template, 1, 0, "path", 28)(7, TravelDetailsModalComponent_div_11__svg_path_7_Template, 1, 0, "path", 29)(8, TravelDetailsModalComponent_div_11__svg_path_8_Template, 1, 0, "path", 30)(9, TravelDetailsModalComponent_div_11__svg_path_9_Template, 1, 0, "path", 31)(10, TravelDetailsModalComponent_div_11__svg_path_10_Template, 1, 0, "path", 32)(11, TravelDetailsModalComponent_div_11__svg_path_11_Template, 1, 0, "path", 33)(12, TravelDetailsModalComponent_div_11__svg_path_12_Template, 1, 0, "path", 34)(13, TravelDetailsModalComponent_div_11__svg_path_13_Template, 1, 0, "path", 35)(14, TravelDetailsModalComponent_div_11__svg_path_14_Template, 1, 0, "path", 36)(15, TravelDetailsModalComponent_div_11__svg_path_15_Template, 1, 0, "path", 37)(16, TravelDetailsModalComponent_div_11__svg_path_16_Template, 1, 0, "path", 38)(17, TravelDetailsModalComponent_div_11__svg_circle_17_Template, 1, 0, "circle", 39)(18, TravelDetailsModalComponent_div_11__svg_path_18_Template, 1, 0, "path", 40)(19, TravelDetailsModalComponent_div_11__svg_circle_19_Template, 1, 0, "circle", 41)(20, TravelDetailsModalComponent_div_11__svg_path_20_Template, 1, 0, "path", 42)(21, TravelDetailsModalComponent_div_11__svg_circle_21_Template, 1, 0, "circle", 43)(22, TravelDetailsModalComponent_div_11__svg_path_22_Template, 1, 0, "path", 44)(23, TravelDetailsModalComponent_div_11__svg_circle_23_Template, 1, 0, "circle", 45)(24, TravelDetailsModalComponent_div_11__svg_path_24_Template, 1, 0, "path", 46)(25, TravelDetailsModalComponent_div_11__svg_path_25_Template, 1, 0, "path", 47)(26, TravelDetailsModalComponent_div_11__svg_path_26_Template, 1, 0, "path", 48)(27, TravelDetailsModalComponent_div_11__svg_path_27_Template, 1, 0, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 50)(29, "h3", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 52);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 53)(34, "span", 54);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 55)(37, "div", 56)(38, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 58);
    \u0275\u0275element(40, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 60);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 61)(45, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 58);
    \u0275\u0275element(47, "rect", 62)(48, "line", 63)(49, "line", 64)(50, "line", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 53);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 61)(55, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 58);
    \u0275\u0275element(57, "rect", 62)(58, "line", 63)(59, "line", 64)(60, "line", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "div", 53);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 61)(65, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 58);
    \u0275\u0275element(67, "path", 66)(68, "circle", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "div", 53)(71, "span", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(72, "svg", 69);
    \u0275\u0275template(73, TravelDetailsModalComponent_div_11__svg_path_73_Template, 1, 0, "path", 27)(74, TravelDetailsModalComponent_div_11__svg_path_74_Template, 1, 0, "path", 28)(75, TravelDetailsModalComponent_div_11__svg_path_75_Template, 1, 0, "path", 29)(76, TravelDetailsModalComponent_div_11__svg_path_76_Template, 1, 0, "path", 30)(77, TravelDetailsModalComponent_div_11__svg_path_77_Template, 1, 0, "path", 31)(78, TravelDetailsModalComponent_div_11__svg_path_78_Template, 1, 0, "path", 32)(79, TravelDetailsModalComponent_div_11__svg_path_79_Template, 1, 0, "path", 33)(80, TravelDetailsModalComponent_div_11__svg_path_80_Template, 1, 0, "path", 34)(81, TravelDetailsModalComponent_div_11__svg_path_81_Template, 1, 0, "path", 35)(82, TravelDetailsModalComponent_div_11__svg_path_82_Template, 1, 0, "path", 36)(83, TravelDetailsModalComponent_div_11__svg_path_83_Template, 1, 0, "path", 37)(84, TravelDetailsModalComponent_div_11__svg_path_84_Template, 1, 0, "path", 38)(85, TravelDetailsModalComponent_div_11__svg_circle_85_Template, 1, 0, "circle", 39)(86, TravelDetailsModalComponent_div_11__svg_path_86_Template, 1, 0, "path", 40)(87, TravelDetailsModalComponent_div_11__svg_circle_87_Template, 1, 0, "circle", 41)(88, TravelDetailsModalComponent_div_11__svg_path_88_Template, 1, 0, "path", 42)(89, TravelDetailsModalComponent_div_11__svg_circle_89_Template, 1, 0, "circle", 43)(90, TravelDetailsModalComponent_div_11__svg_path_90_Template, 1, 0, "path", 44)(91, TravelDetailsModalComponent_div_11__svg_circle_91_Template, 1, 0, "circle", 45)(92, TravelDetailsModalComponent_div_11__svg_path_92_Template, 1, 0, "path", 46)(93, TravelDetailsModalComponent_div_11__svg_path_93_Template, 1, 0, "path", 47)(94, TravelDetailsModalComponent_div_11__svg_path_94_Template, 1, 0, "path", 48)(95, TravelDetailsModalComponent_div_11__svg_path_95_Template, 1, 0, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(97, "div", 61)(98, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 58);
    \u0275\u0275element(100, "path", 70)(101, "polyline", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(102);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(103, "div", 53);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(105, TravelDetailsModalComponent_div_11_div_105_Template, 8, 2, "div", 72);
    \u0275\u0275elementStart(106, "div", 61)(107, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(108, "svg", 58);
    \u0275\u0275element(109, "circle", 18)(110, "polyline", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(112, "div", 53);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(114, TravelDetailsModalComponent_div_11_div_114_Template, 12, 6, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_28_0;
    let tmp_30_0;
    let tmp_32_0;
    let tmp_34_0;
    let tmp_36_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_40_0;
    let tmp_41_0;
    let tmp_42_0;
    let tmp_43_0;
    let tmp_44_0;
    let tmp_45_0;
    let tmp_46_0;
    let tmp_47_0;
    let tmp_48_0;
    let tmp_49_0;
    let tmp_50_0;
    let tmp_51_0;
    let tmp_52_0;
    let tmp_53_0;
    let tmp_54_0;
    let tmp_55_0;
    let tmp_56_0;
    let tmp_57_0;
    let tmp_58_0;
    let tmp_59_0;
    let tmp_61_0;
    let tmp_62_0;
    let tmp_64_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_1_0 = ctx_r0.travel()) == null ? null : tmp_1_0.transportMode) === "Air");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.travel()) == null ? null : tmp_2_0.transportMode) === "Air");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r0.travel()) == null ? null : tmp_3_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.travel()) == null ? null : tmp_4_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.travel()) == null ? null : tmp_5_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.travel()) == null ? null : tmp_6_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r0.travel()) == null ? null : tmp_7_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r0.travel()) == null ? null : tmp_8_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r0.travel()) == null ? null : tmp_9_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r0.travel()) == null ? null : tmp_10_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r0.travel()) == null ? null : tmp_11_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx_r0.travel()) == null ? null : tmp_12_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r0.travel()) == null ? null : tmp_13_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = ctx_r0.travel()) == null ? null : tmp_14_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r0.travel()) == null ? null : tmp_15_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r0.travel()) == null ? null : tmp_16_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r0.travel()) == null ? null : tmp_17_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = ctx_r0.travel()) == null ? null : tmp_18_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_19_0 = ctx_r0.travel()) == null ? null : tmp_19_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = ctx_r0.travel()) == null ? null : tmp_20_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_21_0 = ctx_r0.travel()) == null ? null : tmp_21_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_22_0 = ctx_r0.travel()) == null ? null : tmp_22_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_23_0 = ctx_r0.travel()) == null ? null : tmp_23_0.transportMode) || !\u0275\u0275pureFunction0(67, _c0).includes(((tmp_23_0 = ctx_r0.travel()) == null ? null : tmp_23_0.transportMode) || ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_24_0 = ctx_r0.travel()) == null ? null : tmp_24_0.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_25_0 = ctx_r0.travel()) == null ? null : tmp_25_0.destination);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", (tmp_26_0 = ctx_r0.travel()) == null ? null : tmp_26_0.isCompleted)("not-completed", !((tmp_27_0 = ctx_r0.travel()) == null ? null : tmp_27_0.isCompleted));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_28_0 = ctx_r0.travel()) == null ? null : tmp_28_0.isCompleted) ? ctx_r0.translate("travel.completed") : ctx_r0.translate("travel.not_completed"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.purpose"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_30_0 = ctx_r0.travel()) == null ? null : tmp_30_0.purpose);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.start_date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(((tmp_32_0 = ctx_r0.travel()) == null ? null : tmp_32_0.startDate) || ""));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.end_date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(((tmp_34_0 = ctx_r0.travel()) == null ? null : tmp_34_0.endDate) || ""));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.transport_mode"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ((tmp_36_0 = ctx_r0.travel()) == null ? null : tmp_36_0.transportMode) === "Air");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_37_0 = ctx_r0.travel()) == null ? null : tmp_37_0.transportMode) === "Air");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_38_0 = ctx_r0.travel()) == null ? null : tmp_38_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_39_0 = ctx_r0.travel()) == null ? null : tmp_39_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_40_0 = ctx_r0.travel()) == null ? null : tmp_40_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_41_0 = ctx_r0.travel()) == null ? null : tmp_41_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_42_0 = ctx_r0.travel()) == null ? null : tmp_42_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_43_0 = ctx_r0.travel()) == null ? null : tmp_43_0.transportMode) === "Train");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_44_0 = ctx_r0.travel()) == null ? null : tmp_44_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_45_0 = ctx_r0.travel()) == null ? null : tmp_45_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_46_0 = ctx_r0.travel()) == null ? null : tmp_46_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_47_0 = ctx_r0.travel()) == null ? null : tmp_47_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_48_0 = ctx_r0.travel()) == null ? null : tmp_48_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_49_0 = ctx_r0.travel()) == null ? null : tmp_49_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_50_0 = ctx_r0.travel()) == null ? null : tmp_50_0.transportMode) === "Bus");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_51_0 = ctx_r0.travel()) == null ? null : tmp_51_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_52_0 = ctx_r0.travel()) == null ? null : tmp_52_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_53_0 = ctx_r0.travel()) == null ? null : tmp_53_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_54_0 = ctx_r0.travel()) == null ? null : tmp_54_0.transportMode) === "Car");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_55_0 = ctx_r0.travel()) == null ? null : tmp_55_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_56_0 = ctx_r0.travel()) == null ? null : tmp_56_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_57_0 = ctx_r0.travel()) == null ? null : tmp_57_0.transportMode) === "Ship");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_58_0 = ctx_r0.travel()) == null ? null : tmp_58_0.transportMode) || !\u0275\u0275pureFunction0(68, _c0).includes(((tmp_58_0 = ctx_r0.travel()) == null ? null : tmp_58_0.transportMode) || ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTransportModeLabel(((tmp_59_0 = ctx_r0.travel()) == null ? null : tmp_59_0.transportMode) || ""), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("travel.accommodation"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_61_0 = ctx_r0.travel()) == null ? null : tmp_61_0.accommodation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_62_0 = ctx_r0.travel()) == null ? null : tmp_62_0.createdByUserName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.created_at"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(((tmp_64_0 = ctx_r0.travel()) == null ? null : tmp_64_0.createdAt) || ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading() && !ctx_r0.errorMessage());
  }
}
function TravelDetailsModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "button", 139);
    \u0275\u0275listener("click", function TravelDetailsModalComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.close"), " ");
  }
}
var TravelDetailsModalComponent = class _TravelDetailsModalComponent {
  travelService;
  translationService;
  travelId = null;
  isRTL = false;
  close = new EventEmitter();
  travel = signal(null, ...ngDevMode ? [{ debugName: "travel" }] : []);
  achievements = signal([], ...ngDevMode ? [{ debugName: "achievements" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  achievementsLoading = signal(false, ...ngDevMode ? [{ debugName: "achievementsLoading" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  showAddAchievement = signal(false, ...ngDevMode ? [{ debugName: "showAddAchievement" }] : []);
  editingAchievement = signal(null, ...ngDevMode ? [{ debugName: "editingAchievement" }] : []);
  achievementText = signal("", ...ngDevMode ? [{ debugName: "achievementText" }] : []);
  achievementToDelete = signal(null, ...ngDevMode ? [{ debugName: "achievementToDelete" }] : []);
  showDeleteConfirmation = signal(false, ...ngDevMode ? [{ debugName: "showDeleteConfirmation" }] : []);
  constructor(travelService, translationService) {
    this.travelService = travelService;
    this.translationService = translationService;
  }
  ngOnInit() {
    if (this.travelId) {
      this.loadTravelDetails();
      this.loadAchievements();
    }
  }
  loadTravelDetails() {
    if (!this.travelId)
      return;
    this.loading.set(true);
    this.errorMessage.set("");
    this.travelService.getTravelById(this.travelId).subscribe({
      next: (response) => {
        if (response.success) {
          this.travel.set(response.data);
        } else {
          this.errorMessage.set(response.message || this.translate("travel.load_error"));
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading travel details:", error);
        this.errorMessage.set(this.translate("travel.load_error"));
        this.loading.set(false);
      }
    });
  }
  closeModal() {
    this.close.emit();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  formatDateTime(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  getTransportModeIcon(mode) {
    return "";
  }
  getTransportModeLabel(mode) {
    return this.translate(`travel.transport_modes.${mode.toLowerCase()}`);
  }
  loadAchievements() {
    if (!this.travelId)
      return;
    this.achievementsLoading.set(true);
    this.travelService.getTravelResults(this.travelId).subscribe({
      next: (response) => {
        if (response.success) {
          this.achievements.set(response.data);
        }
        this.achievementsLoading.set(false);
      },
      error: (error) => {
        console.error("Error loading achievements:", error);
        this.achievementsLoading.set(false);
      }
    });
  }
  showAddAchievementForm() {
    this.showAddAchievement.set(true);
    this.editingAchievement.set(null);
    this.achievementText.set("");
  }
  editAchievement(achievement) {
    this.editingAchievement.set(achievement);
    this.achievementText.set(achievement.achievements);
    this.showAddAchievement.set(false);
  }
  cancelAchievementForm() {
    this.showAddAchievement.set(false);
    this.editingAchievement.set(null);
    this.achievementText.set("");
  }
  saveAchievement() {
    if (!this.achievementText().trim() || !this.travelId)
      return;
    const achievementData = {
      travelId: this.travelId,
      achievements: this.achievementText().trim()
    };
    if (this.editingAchievement()) {
      this.travelService.updateTravelResult(this.editingAchievement().id, {
        achievements: this.achievementText().trim()
      }).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadAchievements();
            this.cancelAchievementForm();
          }
        },
        error: (error) => {
          console.error("Error updating achievement:", error);
        }
      });
    } else {
      this.travelService.createTravelResult(achievementData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadAchievements();
            this.cancelAchievementForm();
          }
        },
        error: (error) => {
          console.error("Error creating achievement:", error);
        }
      });
    }
  }
  deleteAchievement(achievement) {
    this.achievementToDelete.set(achievement);
    this.showDeleteConfirmation.set(true);
  }
  confirmDeleteAchievement() {
    const achievement = this.achievementToDelete();
    if (!achievement)
      return;
    this.travelService.deleteTravelResult(achievement.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadAchievements();
        }
        this.showDeleteConfirmation.set(false);
        this.achievementToDelete.set(null);
      },
      error: (error) => {
        console.error("Error deleting achievement:", error);
        this.showDeleteConfirmation.set(false);
        this.achievementToDelete.set(null);
      }
    });
  }
  cancelDeleteAchievement() {
    this.showDeleteConfirmation.set(false);
    this.achievementToDelete.set(null);
  }
  getDeleteConfirmationData() {
    return {
      title: this.translate("travel.delete_achievement"),
      message: this.translate("common.delete_confirmation_message"),
      confirmText: this.translate("common.delete"),
      cancelText: this.translate("common.cancel"),
      type: "delete"
    };
  }
  static \u0275fac = function TravelDetailsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TravelDetailsModalComponent)(\u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TravelDetailsModalComponent, selectors: [["app-travel-details-modal"]], inputs: { travelId: "travelId", isRTL: "isRTL" }, outputs: { close: "close" }, standalone: false, decls: 14, vars: 11, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [3, "confirm", "cancel", "data", "isVisible", "isRTL"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "error-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "retry-btn", 3, "click"], [1, "modal-body"], [1, "travel-details"], [1, "travel-header"], [1, "travel-icon-large"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "transport-icon"], ["d", "M2 22h20", 4, "ngIf"], ["d", "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z", 4, "ngIf"], ["d", "M8 3.1V7a4 4 0 0 0 8 0V3.1", 4, "ngIf"], ["d", "m9 15-1-1", 4, "ngIf"], ["d", "m15 15 1-1", 4, "ngIf"], ["d", "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", 4, "ngIf"], ["d", "m8 19-2 3", 4, "ngIf"], ["d", "m16 19 2 3", 4, "ngIf"], ["d", "M8 6v6", 4, "ngIf"], ["d", "M15 6v6", 4, "ngIf"], ["d", "M2 12h19.6", 4, "ngIf"], ["d", "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3", 4, "ngIf"], ["cx", "7", "cy", "18", "r", "2", 4, "ngIf"], ["d", "M9 18h5", 4, "ngIf"], ["cx", "16", "cy", "18", "r", "2", 4, "ngIf"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2", 4, "ngIf"], ["cx", "7", "cy", "17", "r", "2", 4, "ngIf"], ["d", "M9 17h6", 4, "ngIf"], ["cx", "17", "cy", "17", "r", "2", 4, "ngIf"], ["d", "M10 2v15", 4, "ngIf"], ["d", "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z", 4, "ngIf"], ["d", "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z", 4, "ngIf"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", 4, "ngIf"], [1, "travel-info"], [1, "travel-title"], [1, "travel-destination"], [1, "detail-value"], [1, "status-badge", "mt-2"], [1, "details-grid"], [1, "detail-item", "purpose-item"], [1, "detail-label"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "detail-value", "purpose-text"], [1, "detail-item"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "transport-badge"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], ["class", "detail-item", 4, "ngIf"], ["points", "12,6 12,12 16,14"], ["class", "achievements-section mt-4 rounded-3", 4, "ngIf"], ["d", "M2 22h20"], ["d", "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"], ["d", "M8 3.1V7a4 4 0 0 0 8 0V3.1"], ["d", "m9 15-1-1"], ["d", "m15 15 1-1"], ["d", "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"], ["d", "m8 19-2 3"], ["d", "m16 19 2 3"], ["d", "M8 6v6"], ["d", "M15 6v6"], ["d", "M2 12h19.6"], ["d", "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"], ["cx", "7", "cy", "18", "r", "2"], ["d", "M9 18h5"], ["cx", "16", "cy", "18", "r", "2"], ["d", "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"], ["cx", "7", "cy", "17", "r", "2"], ["d", "M9 17h6"], ["cx", "17", "cy", "17", "r", "2"], ["d", "M10 2v15"], ["d", "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"], ["d", "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "achievements-section", "mt-4", "rounded-3"], [1, "achievements-header"], [1, "achievements-title"], ["class", "add-achievement-btn", 3, "click", 4, "ngIf"], [1, "achievements-description"], ["class", "achievement-form", 4, "ngIf"], ["class", "achievements-list", 4, "ngIf"], ["class", "achievements-loading", 4, "ngIf"], [1, "add-achievement-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14m-7-7h14"], [1, "achievement-form"], [1, "form-group"], [1, "form-label"], ["rows", "4", 1, "form-textarea", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-actions"], [1, "save-btn", 3, "click", "disabled"], [1, "cancel-btn", 3, "click"], [1, "achievements-list"], ["class", "achievement-item", 4, "ngFor", "ngForOf"], ["class", "no-achievements", 4, "ngIf"], [1, "achievement-item"], [1, "achievement-content"], [1, "achievement-text"], [1, "achievement-meta"], [1, "achievement-date"], ["class", "achievement-updated", 4, "ngIf"], [1, "achievement-actions"], [1, "edit-achievement-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "delete-achievement-btn", 3, "click"], ["d", "M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "achievement-updated"], [1, "no-achievements"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "achievements-loading"], [1, "loading-spinner"], [1, "modal-footer"], [1, "close-button", 3, "click"]], template: function TravelDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function TravelDetailsModalComponent_Template_div_click_0_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function TravelDetailsModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function TravelDetailsModalComponent_Template_button_click_5_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "line", 6)(8, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, TravelDetailsModalComponent_div_9_Template, 4, 1, "div", 8)(10, TravelDetailsModalComponent_div_10_Template, 12, 3, "div", 9)(11, TravelDetailsModalComponent_div_11_Template, 115, 69, "div", 10)(12, TravelDetailsModalComponent_div_12_Template, 3, 1, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "app-confirmation-modal", 12);
      \u0275\u0275listener("confirm", function TravelDetailsModalComponent_Template_app_confirmation_modal_confirm_13_listener() {
        return ctx.confirmDeleteAchievement();
      })("cancel", function TravelDetailsModalComponent_Template_app_confirmation_modal_cancel_13_listener() {
        return ctx.cancelDeleteAchievement();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("travel.details"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.translate("common.close"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.errorMessage() && ctx.travel());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.getDeleteConfirmationData())("isVisible", ctx.showDeleteConfirmation())("isRTL", ctx.isRTL);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmationModalComponent, DatePipe], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-content.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f1f5f9;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n}\n.modal-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.travel-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.travel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.travel-icon-large[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  background-color: #B68A35;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.transport-icon[_ngcontent-%COMP%] {\n  color: white;\n  width: 2rem;\n  height: 2rem;\n}\n.travel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.travel-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  word-wrap: break-word;\n}\n.travel-destination[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n  margin: 0;\n  word-wrap: break-word;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.purpose-item[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.purpose-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.detail-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.1);\n}\n.detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.detail-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1f2937;\n  font-weight: 500;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.purpose-text[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 4px solid #B68A35;\n  line-height: 1.6;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  width: 100%;\n}\n.transport-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: #f0f9ff;\n  color: #0369a1;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  border: 1px solid #bae6fd;\n}\n.transport-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #0369a1;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.completed[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-badge.not-completed[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  display: flex;\n  justify-content: flex-end;\n}\n.close-button[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-size: 1rem;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  background-color: #4b5563;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .travel-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .purpose-text[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: 95vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .travel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .travel-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0;\n    border-radius: 12px;\n  }\n  .travel-icon-large[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .transport-icon[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n.achievements-section[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.achievements-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.achievements-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.achievements-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #B68A35;\n}\n.add-achievement-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-achievement-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A67C2A;\n  transform: translateY(-1px);\n}\n.achievements-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.achievement-form[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 100px;\n  transition: border-color 0.2s ease;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.save-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A67C2A;\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.achievement-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.achievement-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.achievement-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.achievement-text[_ngcontent-%COMP%] {\n  color: #1f2937;\n  line-height: 1.6;\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n}\n.achievement-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.achievement-date[_ngcontent-%COMP%], \n.achievement-updated[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.achievement-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.edit-achievement-btn[_ngcontent-%COMP%], \n.delete-achievement-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.edit-achievement-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.edit-achievement-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.delete-achievement-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.delete-achievement-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n}\n.no-achievements[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.no-achievements[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.no-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.achievements-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=travel-details-modal.component-LV2PDO32.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TravelDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "app-travel-details-modal", standalone: false, template: `<div class="modal-overlay" (click)="closeModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()" [class.rtl]="isRTL">\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ translate("travel.details") }}</h2>\r
      <button class="close-btn" (click)="closeModal()" [attr.aria-label]="translate('common.close')">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <!-- Loading State -->\r
    <div class="loading-state" *ngIf="loading()">\r
      <div class="spinner"></div>\r
      <p>{{ translate("login.loading") }}</p>\r
    </div>\r
\r
    <!-- Error State -->\r
    <div class="error-state" *ngIf="!loading() && errorMessage()">\r
      <div class="error-icon">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="15" y1="9" x2="9" y2="15"></line>\r
          <line x1="9" y1="9" x2="15" y2="15"></line>\r
        </svg>\r
      </div>\r
      <h3>{{ translate("common.error") }}</h3>\r
      <p>{{ errorMessage() }}</p>\r
      <button class="retry-btn" (click)="loadTravelDetails()">\r
        {{ translate("common.retry") }}\r
      </button>\r
    </div>\r
\r
    <!-- Travel Details Content -->\r
    <div class="modal-body" *ngIf="!loading() && !errorMessage() && travel()">\r
      <div class="travel-details">\r
        <!-- Travel Header -->\r
         <div class="travel-header">\r
           <div class="travel-icon-large">\r
             <svg class="transport-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
               <path *ngIf="travel()?.transportMode === 'Air'" d="M2 22h20"></path>\r
               <path *ngIf="travel()?.transportMode === 'Air'" d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="M8 3.1V7a4 4 0 0 0 8 0V3.1"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="m9 15-1-1"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="m15 15 1-1"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="m8 19-2 3"></path>\r
               <path *ngIf="travel()?.transportMode === 'Train'" d="m16 19 2 3"></path>\r
               <path *ngIf="travel()?.transportMode === 'Bus'" d="M8 6v6"></path>\r
               <path *ngIf="travel()?.transportMode === 'Bus'" d="M15 6v6"></path>\r
               <path *ngIf="travel()?.transportMode === 'Bus'" d="M2 12h19.6"></path>\r
               <path *ngIf="travel()?.transportMode === 'Bus'" d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>\r
               <circle *ngIf="travel()?.transportMode === 'Bus'" cx="7" cy="18" r="2"></circle>\r
               <path *ngIf="travel()?.transportMode === 'Bus'" d="M9 18h5"></path>\r
               <circle *ngIf="travel()?.transportMode === 'Bus'" cx="16" cy="18" r="2"></circle>\r
               <path *ngIf="travel()?.transportMode === 'Car'" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>\r
               <circle *ngIf="travel()?.transportMode === 'Car'" cx="7" cy="17" r="2"></circle>\r
               <path *ngIf="travel()?.transportMode === 'Car'" d="M9 17h6"></path>\r
               <circle *ngIf="travel()?.transportMode === 'Car'" cx="17" cy="17" r="2"></circle>\r
               <path *ngIf="travel()?.transportMode === 'Ship'" d="M10 2v15"></path>\r
               <path *ngIf="travel()?.transportMode === 'Ship'" d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"></path>\r
               <path *ngIf="travel()?.transportMode === 'Ship'" d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"></path>\r
               <path *ngIf="!travel()?.transportMode || !['Air', 'Train', 'Bus', 'Car', 'Ship'].includes(travel()?.transportMode || '')" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>\r
             </svg>\r
           </div>\r
          <div class="travel-info">\r
            <h3 class="travel-title">{{ travel()?.title }}</h3>\r
            <p class="travel-destination">{{ travel()?.destination }}</p>\r
            <div class="detail-value">\r
                <span class="status-badge mt-2" [class.completed]="travel()?.isCompleted" [class.not-completed]="!travel()?.isCompleted">\r
                  {{ travel()?.isCompleted ? translate("travel.completed") : translate("travel.not_completed") }}\r
                </span>\r
              </div>\r
            </div>\r
        </div>\r
\r
        <!-- Travel Details Grid -->\r
        <div class="details-grid">\r
          <!-- Purpose - Full Width -->\r
          <div class="detail-item purpose-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              {{ translate("travel.purpose") }}\r
            </div>\r
            <div class="detail-value purpose-text">{{ travel()?.purpose }}</div>\r
          </div>\r
\r
          <!-- Start Date -->\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
                <line x1="16" y1="2" x2="16" y2="6"></line>\r
                <line x1="8" y1="2" x2="8" y2="6"></line>\r
                <line x1="3" y1="10" x2="21" y2="10"></line>\r
              </svg>\r
              {{ translate("travel.start_date") }}\r
            </div>\r
            <div class="detail-value">{{ formatDate(travel()?.startDate || '') }}</div>\r
          </div>\r
\r
          <!-- End Date -->\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
                <line x1="16" y1="2" x2="16" y2="6"></line>\r
                <line x1="8" y1="2" x2="8" y2="6"></line>\r
                <line x1="3" y1="10" x2="21" y2="10"></line>\r
              </svg>\r
              {{ translate("travel.end_date") }}\r
            </div>\r
            <div class="detail-value">{{ formatDate(travel()?.endDate || '') }}</div>\r
          </div>\r
\r
          <!-- Transport Mode -->\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>\r
                <circle cx="12" cy="10" r="3"></circle>\r
              </svg>\r
              {{ translate("travel.transport_mode") }}\r
            </div>\r
            <div class="detail-value">\r
              <span class="transport-badge">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                  <path *ngIf="travel()?.transportMode === 'Air'" d="M2 22h20"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Air'" d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="M8 3.1V7a4 4 0 0 0 8 0V3.1"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="m9 15-1-1"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="m15 15 1-1"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="m8 19-2 3"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Train'" d="m16 19 2 3"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Bus'" d="M8 6v6"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Bus'" d="M15 6v6"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Bus'" d="M2 12h19.6"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Bus'" d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path>\r
                  <circle *ngIf="travel()?.transportMode === 'Bus'" cx="7" cy="18" r="2"></circle>\r
                  <path *ngIf="travel()?.transportMode === 'Bus'" d="M9 18h5"></path>\r
                  <circle *ngIf="travel()?.transportMode === 'Bus'" cx="16" cy="18" r="2"></circle>\r
                  <path *ngIf="travel()?.transportMode === 'Car'" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>\r
                  <circle *ngIf="travel()?.transportMode === 'Car'" cx="7" cy="17" r="2"></circle>\r
                  <path *ngIf="travel()?.transportMode === 'Car'" d="M9 17h6"></path>\r
                  <circle *ngIf="travel()?.transportMode === 'Car'" cx="17" cy="17" r="2"></circle>\r
                  <path *ngIf="travel()?.transportMode === 'Ship'" d="M10 2v15"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Ship'" d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"></path>\r
                  <path *ngIf="travel()?.transportMode === 'Ship'" d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"></path>\r
                  <path *ngIf="!travel()?.transportMode || !['Air', 'Train', 'Bus', 'Car', 'Ship'].includes(travel()?.transportMode || '')" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>\r
                </svg>\r
                {{ getTransportModeLabel(travel()?.transportMode || '') }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Accommodation -->\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>\r
                <polyline points="9,22 9,12 15,12 15,22"></polyline>\r
              </svg>\r
              {{ translate("travel.accommodation") }}\r
            </div>\r
            <div class="detail-value">{{ travel()?.accommodation }}</div>\r
          </div>\r
\r
          <!-- Completion Status -->\r
          <!-- <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
              </svg>\r
              {{ translate("travel.status") }}\r
            </div>\r
            <div class="detail-value">\r
              <span class="status-badge" [class.completed]="travel()?.isCompleted" [class.not-completed]="!travel()?.isCompleted">\r
                {{ travel()?.isCompleted ? translate("travel.completed") : translate("travel.not_completed") }}\r
              </span>\r
            </div>\r
          </div> -->\r
\r
          <!-- Created By -->\r
          <div class="detail-item" *ngIf="travel()?.createdByUserName">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
                <circle cx="12" cy="7" r="4"></circle>\r
              </svg>\r
              {{ translate("common.created_by") }}\r
            </div>\r
            <div class="detail-value">{{ travel()?.createdByUserName }}</div>\r
          </div>\r
\r
          <!-- Created At -->\r
          <div class="detail-item">\r
            <div class="detail-label">\r
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <circle cx="12" cy="12" r="10"></circle>\r
                <polyline points="12,6 12,12 16,14"></polyline>\r
              </svg>\r
              {{ translate("common.created_at") }}\r
            </div>\r
            <div class="detail-value">{{ formatDateTime(travel()?.createdAt || '') }}</div>\r
          </div>\r
\r
          \r
        </div>\r
      </div>\r
\r
      <!-- Achievements Section -->\r
      <div class="achievements-section mt-4 rounded-3" *ngIf="!loading() && !errorMessage()">\r
        <div class="achievements-header">\r
          <h3 class="achievements-title">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            {{ translate("travel.achievements_title") }}\r
          </h3>\r
          <button class="add-achievement-btn" (click)="showAddAchievementForm()" *ngIf="!showAddAchievement() && !editingAchievement()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 5v14m-7-7h14"></path>\r
            </svg>\r
            {{ translate("travel.add_achievement") }}\r
          </button>\r
        </div>\r
\r
        <p class="achievements-description">{{ translate("travel.achievements_description") }}</p>\r
\r
        <!-- Add/Edit Achievement Form -->\r
        <div class="achievement-form" *ngIf="showAddAchievement() || editingAchievement()">\r
          <div class="form-group">\r
            <label class="form-label">{{ translate("travel.achievement_text") }}</label>\r
            <textarea \r
              class="form-textarea" \r
              [(ngModel)]="achievementText"\r
              [placeholder]="translate('travel.achievement_text_placeholder')"\r
              rows="4">\r
            </textarea>\r
          </div>\r
          <div class="form-actions">\r
            <button class="save-btn" (click)="saveAchievement()" [disabled]="!achievementText().trim()">\r
              {{ editingAchievement() ? translate("common.update") : translate("common.save") }}\r
            </button>\r
            <button class="cancel-btn" (click)="cancelAchievementForm()">\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Achievements List -->\r
        <div class="achievements-list" *ngIf="!achievementsLoading()">\r
          <div class="achievement-item" *ngFor="let achievement of achievements()">\r
            <div class="achievement-content">\r
              <p class="achievement-text">{{ achievement.achievements }}</p>\r
              <div class="achievement-meta">\r
                <span class="achievement-date">  {{ translate("common.created_at") }}:{{ achievement.createdAt | date:'medium'}}</span>\r
                <span class="achievement-updated" *ngIf="achievement.updatedAt">\r
                  {{ translate("common.updated_at") }}: {{ achievement.updatedAt | date:'medium' }}\r
                </span>\r
              </div>\r
            </div>\r
            <div class="achievement-actions">\r
              <button class="edit-achievement-btn" (click)="editAchievement(achievement)">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                </svg>\r
                {{ translate("travel.edit_achievement") }}\r
              </button>\r
              <button class="delete-achievement-btn" (click)="deleteAchievement(achievement)">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>\r
                </svg>\r
                {{ translate("travel.delete_achievement") }}\r
              </button>\r
            </div>\r
          </div>\r
\r
          <!-- No Achievements Message -->\r
          <div class="no-achievements" *ngIf="achievements().length === 0">\r
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
            <p>{{ translate("travel.no_achievements") }}</p>\r
          </div>\r
        </div>\r
\r
        <!-- Loading State -->\r
        <div class="achievements-loading" *ngIf="achievementsLoading()">\r
          <div class="loading-spinner"></div>\r
          <p>{{ translate("common.loading") }}...</p>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer" *ngIf="!loading() && !errorMessage()">\r
      <button class="close-button" (click)="closeModal()">\r
        {{ translate("common.close") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Confirmation Modal -->\r
<app-confirmation-modal\r
  [data]="getDeleteConfirmationData()"\r
  [isVisible]="showDeleteConfirmation()"\r
  [isRTL]="isRTL"\r
  (confirm)="confirmDeleteAchievement()"\r
  (cancel)="cancelDeleteAchievement()">\r
</app-confirmation-modal>\r
`, styles: ["/* src/app/components/travel/travel-details-modal/travel-details-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.modal-content.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f1f5f9;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-state h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.error-state p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.retry-btn {\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.retry-btn:hover {\n  background-color: #A87D2A;\n}\n.modal-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.travel-details {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.travel-header {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  background: #f8fafc;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.travel-icon-large {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 64px;\n  height: 64px;\n  background-color: #B68A35;\n  border-radius: 12px;\n  flex-shrink: 0;\n}\n.transport-icon {\n  color: white;\n  width: 2rem;\n  height: 2rem;\n}\n.travel-info {\n  flex: 1;\n  min-width: 0;\n}\n.travel-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  word-wrap: break-word;\n}\n.travel-destination {\n  font-size: 1rem;\n  color: #6b7280;\n  font-weight: 500;\n  margin: 0;\n  word-wrap: break-word;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.purpose-item {\n  grid-column: 1 / -1;\n}\n.purpose-item .detail-value {\n  width: 100%;\n  max-width: none;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.detail-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.1);\n}\n.detail-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.detail-label svg {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.detail-value {\n  font-size: 1rem;\n  color: #1f2937;\n  font-weight: 500;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.purpose-text {\n  background: #f8fafc;\n  padding: 1rem;\n  border-radius: 8px;\n  border-left: 4px solid #B68A35;\n  line-height: 1.6;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  width: 100%;\n}\n.transport-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: #f0f9ff;\n  color: #0369a1;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 600;\n  border: 1px solid #bae6fd;\n}\n.transport-badge svg {\n  flex-shrink: 0;\n  color: #0369a1;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.completed {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.status-badge.not-completed {\n  background-color: #fef3c7;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n.modal-footer {\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  display: flex;\n  justify-content: flex-end;\n}\n.close-button {\n  background-color: #6b7280;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-size: 1rem;\n}\n.close-button:hover {\n  background-color: #4b5563;\n}\n.modal-content.rtl .travel-header {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .detail-label {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .purpose-text {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n.modal-content.rtl .modal-footer {\n  justify-content: flex-start;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    margin: 0.5rem;\n    max-height: 95vh;\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .travel-header {\n    flex-direction: column;\n    text-align: center;\n    gap: 1rem;\n  }\n  .details-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .detail-item {\n    padding: 1rem;\n  }\n  .modal-title {\n    font-size: 1.25rem;\n  }\n  .travel-title {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 480px) {\n  .modal-overlay {\n    padding: 0.5rem;\n  }\n  .modal-content {\n    margin: 0;\n    border-radius: 12px;\n  }\n  .travel-icon-large {\n    width: 48px;\n    height: 48px;\n  }\n  .transport-icon {\n    font-size: 1.5rem;\n  }\n}\n.achievements-section {\n  padding: 2rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.achievements-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.achievements-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.achievements-title svg {\n  color: #B68A35;\n}\n.add-achievement-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-achievement-btn:hover {\n  background-color: #A67C2A;\n  transform: translateY(-1px);\n}\n.achievements-description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-bottom: 1.5rem;\n  line-height: 1.5;\n}\n.achievement-form {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-label {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-family: inherit;\n  resize: vertical;\n  min-height: 100px;\n  transition: border-color 0.2s ease;\n}\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.1);\n}\n.form-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.save-btn,\n.cancel-btn {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.save-btn {\n  background-color: #B68A35;\n  color: white;\n}\n.save-btn:hover:not(:disabled) {\n  background-color: #A67C2A;\n}\n.save-btn:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.cancel-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.cancel-btn:hover {\n  background-color: #e5e7eb;\n}\n.achievement-item {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.achievement-item:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.achievement-content {\n  margin-bottom: 1rem;\n}\n.achievement-text {\n  color: #1f2937;\n  line-height: 1.6;\n  margin: 0 0 0.75rem 0;\n  font-size: 0.875rem;\n}\n.achievement-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.achievement-date,\n.achievement-updated {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.achievement-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.edit-achievement-btn,\n.delete-achievement-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n}\n.edit-achievement-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.edit-achievement-btn:hover {\n  background-color: #e5e7eb;\n}\n.delete-achievement-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.delete-achievement-btn:hover {\n  background-color: #fee2e2;\n}\n.no-achievements {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #6b7280;\n}\n.no-achievements svg {\n  color: #d1d5db;\n  margin-bottom: 1rem;\n}\n.no-achievements p {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.achievements-loading {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=travel-details-modal.component-LV2PDO32.css.map */\n"] }]
  }], () => [{ type: TravelService }, { type: TranslationService }], { travelId: [{
    type: Input
  }], isRTL: [{
    type: Input
  }], close: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TravelDetailsModalComponent, { className: "TravelDetailsModalComponent", filePath: "src/app/components/travel/travel-details-modal/travel-details-modal.component.ts", lineNumber: 13 });
})();

// src/app/components/travel/travel-list/travel-list.component.ts
function TravelListComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function TravelListComponent_button_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("travel.clear_filters_tooltip")));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.reset"), " ");
  }
}
function TravelListComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("login.loading"));
  }
}
function TravelListComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 47)(3, "circle", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function TravelListComponent_div_45_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.no_travels_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.get_started_message"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("travel.add_travel"), " ");
  }
}
function TravelListComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_div_click_0_listener() {
      const travel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetailsModal(travel_r5));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53)(3, "h3", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "span", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(11, "div", 58);
    \u0275\u0275elementStart(12, "div", 59)(13, "div", 60)(14, "span", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 63);
    \u0275\u0275element(19, "rect", 64)(20, "line", 65)(21, "line", 66)(22, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 60)(24, "span", 61);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 63);
    \u0275\u0275element(29, "rect", 64)(30, "line", 65)(31, "line", 66)(32, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(33, "div", 60)(34, "span", 61);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 62);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 68);
    \u0275\u0275element(39, "path", 69)(40, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 60)(42, "span", 61);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 62);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 63);
    \u0275\u0275element(48, "path", 71)(49, "polyline", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 73);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_div_click_50_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(51, "button", 74);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_button_click_51_listener() {
      const travel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetailsModal(travel_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(52, "svg", 75);
    \u0275\u0275element(53, "path", 76)(54, "circle", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 78);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_div_click_56_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(57, "button", 79);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_button_click_57_listener() {
      const travel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(travel_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 80);
    \u0275\u0275element(59, "path", 81)(60, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "button", 83);
    \u0275\u0275listener("click", function TravelListComponent_div_46_div_1_Template_button_click_62_listener() {
      const travel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(travel_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 80);
    \u0275\u0275element(64, "polyline", 84)(65, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const travel_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 16, travel_r5.title, 0, 79), " ", travel_r5.title.length > 80 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(travel_r5.destination);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTransportModeIcon(travel_r5.transportMode));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.start_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(travel_r5.startDate));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.end_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(travel_r5.endDate));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.transport_mode"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(travel_r5.transportMode);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.accommodation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(46, 20, travel_r5.accommodation, 0, 10), " ", travel_r5.accommodation.length > 100 ? "..." : "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("travel.details"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("travel.edit"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("travel.delete"), " ");
  }
}
function TravelListComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275template(1, TravelListComponent_div_46_div_1_Template, 67, 24, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.travels());
  }
}
function TravelListComponent_div_47_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 89);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 90)(18, "button", 91);
    \u0275\u0275listener("click", function TravelListComponent_div_47_tr_21_Template_button_click_18_listener() {
      const travel_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(travel_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 80);
    \u0275\u0275element(20, "path", 81)(21, "path", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 92);
    \u0275\u0275listener("click", function TravelListComponent_div_47_tr_21_Template_button_click_22_listener() {
      const travel_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(travel_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 80);
    \u0275\u0275element(24, "polyline", 84)(25, "path", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 93);
    \u0275\u0275listener("click", function TravelListComponent_div_47_tr_21_Template_button_click_26_listener() {
      const travel_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetailsModal(travel_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 94);
    \u0275\u0275element(28, "path", 76)(29, "circle", 77);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const travel_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(travel_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(travel_r7.destination);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(travel_r7.purpose);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(travel_r7.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(travel_r7.endDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getTransportModeIcon(travel_r7.transportMode), " ", travel_r7.transportMode, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(travel_r7.accommodation);
  }
}
function TravelListComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "table", 87)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, TravelListComponent_div_47_tr_21_Template, 30, 8, "tr", 88);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.destination"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.purpose"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.start_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.end_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.transport_mode"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.accommodation"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("travel.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.travels());
  }
}
function TravelListComponent_div_48_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function TravelListComponent_div_48_button_10_Template_button_click_0_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r10 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r10, " ");
  }
}
function TravelListComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 97)(5, "button", 98);
    \u0275\u0275listener("click", function TravelListComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 80);
    \u0275\u0275element(7, "polyline", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 100);
    \u0275\u0275template(10, TravelListComponent_div_48_button_10_Template, 2, 3, "button", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 98);
    \u0275\u0275listener("click", function TravelListComponent_div_48_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 80);
    \u0275\u0275element(14, "polyline", 102);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 103)(16, "select", 104);
    \u0275\u0275listener("change", function TravelListComponent_div_48_Template_select_change_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(17, "option", 105);
    \u0275\u0275text(18, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 106);
    \u0275\u0275text(20, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 107);
    \u0275\u0275text(22, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 108);
    \u0275\u0275text(24, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5("", ctx_r1.translate("common.showing"), " ", (ctx_r1.currentPage() - 1) * ctx_r1.pageSize() + 1, "-", ctx_r1.Math.min(ctx_r1.currentPage() * ctx_r1.pageSize(), ctx_r1.totalCount()), " ", ctx_r1.translate("common.of"), " ", ctx_r1.totalCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.next"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.pageSize());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.page_size"));
  }
}
function TravelListComponent_app_confirmation_modal_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirmation-modal", 110);
    \u0275\u0275listener("confirm", function TravelListComponent_app_confirmation_modal_49_Template_app_confirmation_modal_confirm_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteConfirm());
    })("cancel", function TravelListComponent_app_confirmation_modal_49_Template_app_confirmation_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.deleteModalData())("isRTL", ctx_r1.isRTL())("isVisible", ctx_r1.showDeleteModal());
  }
}
function TravelListComponent_app_edit_travel_modal_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-travel-modal", 111);
    \u0275\u0275listener("close", function TravelListComponent_app_edit_travel_modal_50_Template_app_edit_travel_modal_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditModalClose());
    })("travelUpdated", function TravelListComponent_app_edit_travel_modal_50_Template_app_edit_travel_modal_travelUpdated_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTravelUpdated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("travel", ctx_r1.travelToEdit())("isRTL", ctx_r1.isRTL());
  }
}
function TravelListComponent_app_add_travel_modal_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-travel-modal", 112);
    \u0275\u0275listener("close", function TravelListComponent_app_add_travel_modal_51_Template_app_add_travel_modal_close_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddModalClose());
    })("travelAdded", function TravelListComponent_app_add_travel_modal_51_Template_app_add_travel_modal_travelAdded_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTravelAdded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isRTL", ctx_r1.isRTL());
  }
}
function TravelListComponent_app_travel_details_modal_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-travel-details-modal", 113);
    \u0275\u0275listener("close", function TravelListComponent_app_travel_details_modal_52_Template_app_travel_details_modal_close_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDetailsModalClose());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("travelId", ((tmp_1_0 = ctx_r1.travelToView()) == null ? null : tmp_1_0.id) || null)("isRTL", ctx_r1.isRTL());
  }
}
function TravelListComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275listener("click", function TravelListComponent_div_53_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275elementStart(1, "div", 115);
    \u0275\u0275listener("click", function TravelListComponent_div_53_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 117);
    \u0275\u0275element(4, "path", 118)(5, "polyline", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 122);
    \u0275\u0275listener("click", function TravelListComponent_div_53_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.success"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.ok"), " ");
  }
}
var TravelListComponent = class _TravelListComponent {
  travelService;
  translationService;
  langService;
  travels = signal([], ...ngDevMode ? [{ debugName: "travels" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  viewMode = signal("cards", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // Math property for template
  Math = Math;
  // Pagination state
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  // Search and filter state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  fromDate = signal("", ...ngDevMode ? [{ debugName: "fromDate" }] : []);
  toDate = signal("", ...ngDevMode ? [{ debugName: "toDate" }] : []);
  // Modal state
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  travelToDelete = signal(null, ...ngDevMode ? [{ debugName: "travelToDelete" }] : []);
  deleteModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  // Edit/Add modal state
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showAddModal = signal(false, ...ngDevMode ? [{ debugName: "showAddModal" }] : []);
  travelToEdit = signal(null, ...ngDevMode ? [{ debugName: "travelToEdit" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Details modal state
  showDetailsModal = signal(false, ...ngDevMode ? [{ debugName: "showDetailsModal" }] : []);
  travelToView = signal(null, ...ngDevMode ? [{ debugName: "travelToView" }] : []);
  constructor(travelService, translationService, langService) {
    this.travelService = travelService;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.loadTravels();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  loadTravels() {
    this.loading.set(true);
    let fromDateISO = void 0;
    let toDateISO = void 0;
    if (this.fromDate()) {
      fromDateISO = (/* @__PURE__ */ new Date(this.fromDate() + "T00:00:00")).toISOString();
    }
    if (this.toDate()) {
      toDateISO = (/* @__PURE__ */ new Date(this.toDate() + "T23:59:59")).toISOString();
    }
    this.travelService.getTravels(this.searchTerm() || void 0, fromDateISO, toDateISO, this.currentPage(), this.pageSize()).subscribe({
      next: (response) => {
        if (response.success) {
          this.travels.set(response.data.items);
          this.totalCount.set(response.data.totalCount);
          this.totalPages.set(Math.ceil(response.data.totalCount / this.pageSize()));
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading travels:", error);
        this.loading.set(false);
      }
    });
  }
  openDeleteModal(travel) {
    this.travelToDelete.set(travel);
    this.deleteModalData.set({
      title: this.translate("travel.delete_travel"),
      message: this.translate("travel.confirm_delete_travel").replace("%title%", travel.title),
      confirmText: this.translate("travel.delete"),
      cancelText: this.translate("travel.cancel"),
      type: "delete"
    });
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    const travel = this.travelToDelete();
    if (travel) {
      this.travelService.deleteTravel(travel.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.travels.update((travels) => travels.filter((t) => t.id !== travel.id));
            this.showDeleteModal.set(false);
            this.travelToDelete.set(null);
            this.successMessage.set(this.translate("travel.deleted_success"));
            this.showSuccessModal.set(true);
            setTimeout(() => {
              this.showSuccessModal.set(false);
            }, 3e3);
          }
        },
        error: (error) => {
          console.error("Error deleting travel:", error);
          this.showDeleteModal.set(false);
          this.travelToDelete.set(null);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.travelToDelete.set(null);
  }
  openEditModal(travel) {
    this.travelToEdit.set(travel);
    this.showEditModal.set(true);
  }
  openAddModal() {
    this.showAddModal.set(true);
  }
  onEditModalClose() {
    this.showEditModal.set(false);
    this.travelToEdit.set(null);
  }
  onAddModalClose() {
    this.showAddModal.set(false);
  }
  onTravelUpdated(updatedTravel) {
    this.travels.update((travels) => travels.map((t) => t.id === updatedTravel.id ? updatedTravel : t));
    this.showEditModal.set(false);
    this.travelToEdit.set(null);
    this.successMessage.set(this.translate("travel.updated_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  onTravelAdded(newTravel) {
    this.travels.update((travels) => [newTravel, ...travels]);
    this.showAddModal.set(false);
    this.successMessage.set(this.translate("travel.added_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  openDetailsModal(travel) {
    this.travelToView.set(travel);
    this.showDetailsModal.set(true);
  }
  onDetailsModalClose() {
    this.showDetailsModal.set(false);
    this.travelToView.set(null);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }
  getTransportModeIcon(mode) {
    switch (mode.toLowerCase()) {
      case "air":
        return this.translate("travel.transport_modes.air");
      case "train":
        return this.translate("travel.transport_modes.train");
      case "bus":
        return this.translate("travel.transport_modes.bus");
      case "car":
        return this.translate("travel.transport_modes.car");
      case "ship":
        return this.translate("travel.transport_modes.ship");
      default:
        return this.translate("travel.transport_modes.other");
    }
  }
  // Pagination methods
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadTravels();
  }
  onPageSizeChange(event) {
    const size = +event.target.value;
    this.pageSize.set(size);
    this.currentPage.set(1);
    this.loadTravels();
  }
  onSearch(event) {
    const search = event.target.value;
    this.searchTerm.set(search);
    this.currentPage.set(1);
    this.loadTravels();
  }
  /**
   * Handle date filter changes
   * This method is called when user changes either fromDate or toDate
   * It resets to page 1 and reloads travels with new date filters
   */
  onDateFilter() {
    this.currentPage.set(1);
    this.loadTravels();
  }
  clearFilters() {
    this.searchTerm.set("");
    this.fromDate.set("");
    this.toDate.set("");
    this.currentPage.set(1);
    this.loadTravels();
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = this.totalPages();
    const currentPage = this.currentPage();
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  static \u0275fac = function TravelListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TravelListComponent)(\u0275\u0275directiveInject(TravelService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TravelListComponent, selectors: [["app-travel-list"]], standalone: false, decls: 54, vars: 34, consts: [[1, "travel-page", "rounded-5"], [1, "page-title"], [1, "top-bar"], [1, "top-bar-right"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["d", "M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"], [1, "top-bar-left"], [1, "add-travel-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "plus-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-filters"], [1, "search-box"], [1, "search-label", "fs-5"], [1, "search-input-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "date-filters", "mt-2"], [1, "date-input-group"], [1, "date-label"], ["type", "date", "title", "From Date: Start of travel period", 1, "date-input", 3, "ngModelChange", "change", "ngModel", "placeholder"], [1, "date-separator"], ["type", "date", "title", "To Date: End of travel period", 1, "date-input", 3, "ngModelChange", "change", "ngModel", "placeholder"], ["class", "clear-filters-btn mt-4", 3, "title", "click", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "travels-grid", 4, "ngIf"], ["class", "travels-table", 4, "ngIf"], ["class", "pagination-container ltr", 4, "ngIf"], [3, "data", "isRTL", "isVisible", "confirm", "cancel", 4, "ngIf"], [3, "travel", "isRTL", "close", "travelUpdated", 4, "ngIf"], [3, "isRTL", "close", "travelAdded", 4, "ngIf"], [3, "travelId", "isRTL", "close", 4, "ngIf"], ["class", "success-modal-overlay", 3, "click", 4, "ngIf"], [1, "clear-filters-btn", "mt-4", 3, "click", "title"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 1, "empty-icon"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "travels-grid"], ["class", "travel-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "travel-card", 3, "click"], [1, "card-header"], [1, "travel-info"], [1, "travel-title"], [1, "travel-destination"], [1, "travel-icon"], [1, "transport-icon"], [1, "card-divider"], [1, "card-details"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "detail-icon"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "detail-icon"], ["d", "M2 22h20"], ["d", "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9,22 9,12 15,12 15,22"], [1, "w-100", 3, "click"], [1, "details-btn", "btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-eye-icon", "lucide-eye"], ["d", "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"], ["cx", "12", "cy", "12", "r", "3"], [1, "card-actions", 3, "click"], [1, "edit-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], [1, "travels-table"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "transport-badge"], [1, "table-actions"], ["title", "Edit", 1, "edit-btn-small", 3, "click"], ["title", "Delete", 1, "delete-btn-small", 3, "click"], ["title", "Details", 1, "details-btn-small", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-eye-icon", "lucide-eye"], [1, "pagination-container", "ltr"], [1, "pagination-info"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], [1, "page-numbers"], ["class", "page-number", 3, "active", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-size-selector"], [1, "page-size-select", 3, "change", "value"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "page-number", 3, "click"], [3, "confirm", "cancel", "data", "isRTL", "isVisible"], [3, "close", "travelUpdated", "travel", "isRTL"], [3, "close", "travelAdded", "isRTL"], [3, "close", "travelId", "isRTL"], [1, "success-modal-overlay", 3, "click"], [1, "success-modal", 3, "click"], [1, "success-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "success-title"], [1, "success-message"], [1, "success-close-btn", 3, "click"]], template: function TravelListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function TravelListComponent_Template_button_click_6_listener() {
        return ctx.viewMode.set("cards");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "rect", 7)(9, "rect", 8)(10, "rect", 9)(11, "rect", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function TravelListComponent_Template_button_click_13_listener() {
        return ctx.viewMode.set("table");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 6);
      \u0275\u0275element(15, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 12)(18, "button", 13);
      \u0275\u0275listener("click", function TravelListComponent_Template_button_click_18_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 14);
      \u0275\u0275element(20, "line", 15)(21, "line", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "label", 19);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function TravelListComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function TravelListComponent_Template_input_input_28_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 22);
      \u0275\u0275element(30, "circle", 23)(31, "path", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 25)(33, "div", 26)(34, "label", 27);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function TravelListComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TravelListComponent_Template_input_change_36_listener() {
        return ctx.onDateFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "span", 29);
      \u0275\u0275text(38, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 26)(40, "label", 27);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function TravelListComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function TravelListComponent_Template_input_change_42_listener() {
        return ctx.onDateFilter();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(43, TravelListComponent_button_43_Template, 2, 3, "button", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, TravelListComponent_div_44_Template, 4, 1, "div", 32)(45, TravelListComponent_div_45_Template, 10, 3, "div", 33)(46, TravelListComponent_div_46_Template, 2, 1, "div", 34)(47, TravelListComponent_div_47_Template, 22, 9, "div", 35)(48, TravelListComponent_div_48_Template, 27, 12, "div", 36)(49, TravelListComponent_app_confirmation_modal_49_Template, 1, 3, "app-confirmation-modal", 37)(50, TravelListComponent_app_edit_travel_modal_50_Template, 1, 2, "app-edit-travel-modal", 38)(51, TravelListComponent_app_add_travel_modal_51_Template, 1, 1, "app-add-travel-modal", 39)(52, TravelListComponent_app_travel_details_modal_52_Template, 1, 2, "app-travel-details-modal", 40)(53, TravelListComponent_div_53_Template, 12, 3, "div", 41);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("travel.title"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ltr-left", !ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "cards");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("travel.view_cards"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "table");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("travel.view_table"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("ltr-right", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("travel.add_travel"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("travel.search_label"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.translate("common.search"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.translate("travel.from_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275property("placeholder", ctx.translate("travel.start_date"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("travel.to_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275property("placeholder", ctx.translate("travel.end_date"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm() || ctx.fromDate() || ctx.toDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.travels().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.travels().length > 0 && ctx.viewMode() === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.travels().length > 0 && ctx.viewMode() === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.travels().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailsModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmationModalComponent, AddTravelModalComponent, EditTravelModalComponent, TravelDetailsModalComponent, SlicePipe], styles: ["\n\n.travel-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.travel-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.top-bar-left.ltr-right[_ngcontent-%COMP%] {\n  order: 2;\n}\n.top-bar-right.ltr-left[_ngcontent-%COMP%] {\n  order: 1;\n}\n.add-travel-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-travel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 1rem;\n}\n.search-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.filters-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n  margin-bottom: 1rem;\n}\n.filters-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.filters-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n  min-width: 250px;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.date-separator[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-weight: 500;\n  align-self: flex-end;\n  margin-bottom: 0.5rem;\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f1f5f9;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  margin-bottom: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 2rem;\n}\n.travels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n  align-items: stretch;\n}\n.travel-card[_ngcontent-%COMP%] {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.travel-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.travel-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.travel-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.25rem 0;\n  min-height: 3rem;\n  display: flex;\n  align-items: flex-start;\n  line-height: 1.4;\n}\n.travel-destination[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.travel-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  margin-left: 1rem;\n}\n.transport-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 1rem 0;\n}\n.card-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  flex: 1;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.detail-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  margin: 0 -0.75rem;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 80px;\n  align-items: start;\n  justify-content: start;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.5rem;\n  align-items: start;\n  justify-content: start;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.delete-btn[_ngcontent-%COMP%], \n.edit-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.travels-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.875rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transport-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.edit-btn-small[_ngcontent-%COMP%], \n.delete-btn-small[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border: 1px solid #B68A35;\n  background-color: #F9F7ED;\n}\n.edit-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.delete-btn-small[_ngcontent-%COMP%] {\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n  background-color: #ffcdd236;\n}\n.delete-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #ffb3bb63;\n  border-color: #c62828a9;\n  color: #c62828c9;\n}\n.details-btn-small[_ngcontent-%COMP%] {\n  color: #B68A35;\n  border: 1px solid #B68A35;\n  background-color: #F9F7ED;\n}\n.details-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.success-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n  margin-bottom: 1rem;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.success-close-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.875rem;\n}\n.success-close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.details-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #92722A;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n  color: #92722A;\n  background-color: #E6D7A2;\n  margin-bottom: 1rem;\n}\n.details-btn[_ngcontent-%COMP%]:hover {\n  background-color: #D4AF5F;\n  border-color: #92722A;\n  color: #F9F7ED;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(146, 114, 42, 0.3);\n}\n.rtl[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.rtl[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.rtl[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  padding: 1rem;\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-number[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.page-number[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-number.active[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background-color: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n@media (max-width: 768px) {\n  .travel-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .travels-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .search-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-info[_ngcontent-%COMP%] {\n    min-width: auto;\n    margin-bottom: 0.5rem;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n  .date-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .date-input-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .date-separator[_ngcontent-%COMP%] {\n    align-self: center;\n    margin-bottom: 0;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .details-btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.6rem 0.8rem;\n  }\n}\n/*# sourceMappingURL=travel-list.component-OOE3ML7E.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TravelListComponent, [{
    type: Component,
    args: [{ selector: "app-travel-list", standalone: false, template: `<div class="travel-page rounded-5" [class.rtl]="isRTL()">\r
  <!-- Page Title -->\r
  <h1 class="page-title">{{ translate("travel.title") }}</h1>\r
  <!-- Top Bar -->\r
  <div class="top-bar">\r
\r
    <div class="top-bar-right" [class.ltr-left]="!isRTL()">\r
      <div class="view-toggle">\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'cards'"\r
          (click)="viewMode.set('cards')"\r
        >\r
          <svg\r
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
          {{ translate("travel.view_cards") }}\r
        </button>\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'table'"\r
          (click)="viewMode.set('table')"\r
        >\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"></path>\r
          </svg>\r
          {{ translate("travel.view_table") }}\r
        </button>\r
      </div>\r
    </div>\r
    <!-- LTR: Button on right, view toggle on left -->\r
    <div class="top-bar-left" [class.ltr-right]="!isRTL()">\r
      <button class="add-travel-btn" (click)="openAddModal()">\r
        <svg\r
          class="plus-icon"\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <line x1="12" y1="5" x2="12" y2="19"></line>\r
          <line x1="5" y1="12" x2="19" y2="12"></line>\r
        </svg>\r
        {{ translate("travel.add_travel") }}\r
      </button>\r
    </div>\r
  </div>\r
\r
\r
  <!-- Search and Filters -->\r
  <div class="search-filters">\r
    <div class="search-box">\r
      <label class="search-label fs-5">{{ translate("travel.search_label") }}</label>\r
      <div class="search-input-container">\r
        <input\r
          type="text"\r
          [placeholder]="translate('common.search')"\r
          [(ngModel)]="searchTerm"\r
          (input)="onSearch($event)"\r
          class="search-input"\r
        />\r
        <svg\r
          class="search-icon"\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="11" cy="11" r="8"></circle>\r
          <path d="m21 21-4.35-4.35"></path>\r
        </svg>\r
      </div>\r
    </div>\r
\r
    <!-- Date Range Filter -->\r
    <div class="date-filters mt-2">\r
      <div class="date-input-group">\r
        <label class="date-label">{{ translate("travel.from_date") }}</label>\r
        <input\r
          type="date"\r
          [(ngModel)]="fromDate"\r
          (change)="onDateFilter()"\r
          class="date-input"\r
          [placeholder]="translate('travel.start_date')"\r
          title="From Date: Start of travel period"\r
        />\r
      </div>\r
      <span class="date-separator">-</span>\r
      <div class="date-input-group">\r
        <label class="date-label">{{ translate("travel.to_date") }}</label>\r
        <input\r
          type="date"\r
          [(ngModel)]="toDate"\r
          (change)="onDateFilter()"\r
          class="date-input"\r
          [placeholder]="translate('travel.end_date')"\r
          title="To Date: End of travel period"\r
        />\r
      </div>\r
    </div>\r
\r
    <button\r
      class="clear-filters-btn mt-4"\r
      (click)="clearFilters()"\r
      *ngIf="searchTerm() || fromDate() || toDate()"\r
      title="{{ translate('travel.clear_filters_tooltip') }}"\r
    >\r
      {{ translate("common.reset") }}\r
    </button>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading()">\r
    <div class="spinner"></div>\r
    <p>{{ translate("login.loading") }}</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading() && travels().length === 0">\r
    <svg\r
      class="empty-icon"\r
      width="64"\r
      height="64"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="1"\r
    >\r
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>\r
      <circle cx="12" cy="10" r="3"></circle>\r
    </svg>\r
    <h3>{{ translate("travel.no_travels_found") }}</h3>\r
    <p>{{ translate("travel.get_started_message") }}</p>\r
    <button class="add-travel-btn" (click)="openAddModal()">\r
      {{ translate("travel.add_travel") }}\r
    </button>\r
  </div>\r
\r
  <!-- Cards View -->\r
  <div\r
    class="travels-grid"\r
    *ngIf="!loading() && travels().length > 0 && viewMode() === 'cards'"\r
  >\r
    <div class="travel-card" *ngFor="let travel of travels()" (click)="openDetailsModal(travel)">\r
      <div class="card-header">\r
        <div class="travel-info">\r
          <h3 class="travel-title">{{ travel.title |slice:0:79 }} {{ travel.title.length > 80 ? '...' : '' }}</h3>\r
          <!-- <h3 class="travel-title">{{ travel.title }} </h3> -->\r
          <span class="travel-destination">{{ travel.destination }}</span>\r
        </div>\r
        <div class="travel-icon">\r
          <span class="transport-icon">{{\r
            getTransportModeIcon(travel.transportMode)\r
          }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="card-divider"></div>\r
\r
      <div class="card-details">\r
        <!-- <div class="detail-row">\r
          <span class="detail-label">{{ translate("travel.purpose") }}</span>\r
          <span class="detail-value">{{ travel.purpose | slice:0:25 }} {{ travel.purpose.length > 15 ? '...' : '' }}</span>\r
          <svg\r
            class="detail-icon"\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
          </svg>\r
        </div> -->\r
\r
        <div class="detail-row">\r
          <span class="detail-label">{{ translate("travel.start_date") }}</span>\r
          <span class="detail-value">{{ formatDate(travel.startDate) }}</span>\r
          <svg\r
            class="detail-icon"\r
            width="16"\r
            height="16"\r
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
\r
        <div class="detail-row">\r
          <span class="detail-label">{{ translate("travel.end_date") }}</span>\r
          <span class="detail-value">{{ formatDate(travel.endDate) }}</span>\r
          <svg\r
            class="detail-icon"\r
            width="16"\r
            height="16"\r
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
\r
        <div class="detail-row">\r
          <span class="detail-label">{{\r
            translate("travel.transport_mode")\r
          }}</span>\r
          <span class="detail-value">{{ travel.transportMode }}</span>\r
          <svg\r
            class="detail-icon"\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
            stroke-linecap="round"\r
            stroke-linejoin="round"\r
          >\r
            <path d="M2 22h20"></path>\r
            <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>\r
          </svg>\r
        </div>\r
\r
        <div class="detail-row">\r
          <span class="detail-label">{{\r
            translate("travel.accommodation")\r
          }}</span>\r
          <span class="detail-value">{{ travel.accommodation | slice:0:10 }} {{ travel.accommodation.length > 100 ? '...' : '' }}</span>\r
          <svg\r
            class="detail-icon"\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>\r
            <polyline points="9,22 9,12 15,12 15,22"></polyline>\r
          </svg>\r
        </div>\r
      </div>\r
      <div class="w-100" (click)="$event.stopPropagation()">\r
        <button class="details-btn btn" (click)="openDetailsModal(travel)">\r
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>\r
          {{ translate("travel.details") }}\r
        </button>\r
      </div>\r
      <div class="card-actions" (click)="$event.stopPropagation()">\r
        \r
        <button class="edit-btn" (click)="openEditModal(travel)">\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
            ></path>\r
            <path\r
              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
            ></path>\r
          </svg>\r
          {{ translate("travel.edit") }}\r
        </button>\r
        <button class="delete-btn" (click)="openDeleteModal(travel)">\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <polyline points="3,6 5,6 21,6"></polyline>\r
            <path\r
              d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"\r
            ></path>\r
          </svg>\r
          {{ translate("travel.delete") }}\r
        </button>\r
      </div>\r
      \r
    </div>\r
  </div>\r
\r
  <!-- Table View -->\r
  <div\r
    class="travels-table"\r
    *ngIf="!loading() && travels().length > 0 && viewMode() === 'table'"\r
  >\r
    <table class="table">\r
      <thead>\r
        <tr>\r
          <th>{{ translate("travel.title") }}</th>\r
          <th>{{ translate("travel.destination") }}</th>\r
          <th>{{ translate("travel.purpose") }}</th>\r
          <th>{{ translate("travel.start_date") }}</th>\r
          <th>{{ translate("travel.end_date") }}</th>\r
          <th>{{ translate("travel.transport_mode") }}</th>\r
          <th>{{ translate("travel.accommodation") }}</th>\r
          <th>{{ translate("travel.actions") }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let travel of travels()">\r
          <td>{{ travel.title }}</td>\r
          <td>{{ travel.destination }}</td>\r
          <td>{{ travel.purpose }}</td>\r
          <td>{{ formatDate(travel.startDate) }}</td>\r
          <td>{{ formatDate(travel.endDate) }}</td>\r
          <td>\r
            <span class="transport-badge">\r
              {{ getTransportModeIcon(travel.transportMode) }}\r
              {{ travel.transportMode }}\r
            </span>\r
          </td>\r
          <td>{{ travel.accommodation }}</td>\r
          <td>\r
            <div class="table-actions">\r
              <button\r
                class="edit-btn-small"\r
                (click)="openEditModal(travel)"\r
                title="Edit"\r
              >\r
                <svg\r
                  width="16"\r
                  height="16"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                >\r
                  <path\r
                    d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
                  ></path>\r
                  <path\r
                    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
                  ></path>\r
                </svg>\r
              </button>\r
              <button\r
                class="delete-btn-small"\r
                (click)="openDeleteModal(travel)"\r
                title="Delete"\r
              >\r
                <svg\r
                  width="16"\r
                  height="16"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                >\r
                  <polyline points="3,6 5,6 21,6"></polyline>\r
                  <path\r
                    d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"\r
                  ></path>\r
                </svg>\r
              </button>\r
              <button\r
                class="details-btn-small"\r
                (click)="openDetailsModal(travel)"\r
                title="Details"\r
              >\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="pagination-container ltr" *ngIf="!loading() && travels().length > 0">\r
    <div class="pagination-info">\r
      <span\r
        >{{ translate("common.showing") }}\r
        {{ (currentPage() - 1) * pageSize() + 1 }}-{{\r
          Math.min(currentPage() * pageSize(), totalCount())\r
        }}\r
        {{ translate("common.of") }} {{ totalCount() }}</span\r
      >\r
    </div>\r
\r
    <div class="pagination-controls">\r
      <button\r
        class="pagination-btn"\r
        [disabled]="currentPage() === 1"\r
        (click)="onPageChange(currentPage() - 1)"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="15,18 9,12 15,6"></polyline>\r
        </svg>\r
        {{ translate("common.previous") }}\r
      </button>\r
\r
      <div class="page-numbers">\r
        <button\r
          *ngFor="let page of getPageNumbers()"\r
          class="page-number"\r
          [class.active]="page === currentPage()"\r
          (click)="onPageChange(page)"\r
        >\r
          {{ page }}\r
        </button>\r
      </div>\r
\r
      <button\r
        class="pagination-btn"\r
        [disabled]="currentPage() === totalPages()"\r
        (click)="onPageChange(currentPage() + 1)"\r
      >\r
        {{ translate("common.next") }}\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="9,18 15,12 9,6"></polyline>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <div class="page-size-selector">\r
      <select\r
        [value]="pageSize()"\r
        (change)="onPageSizeChange($event)"\r
        class="page-size-select"\r
      >\r
        <option value="5">5</option>\r
        <option value="10">10</option>\r
        <option value="20">20</option>\r
        <option value="50">50</option>\r
      </select>\r
      <span>{{ translate("common.page_size") }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-confirmation-modal\r
    *ngIf="showDeleteModal()"\r
    [data]="deleteModalData()"\r
    [isRTL]="isRTL()"\r
    [isVisible]="showDeleteModal()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()"\r
  >\r
  </app-confirmation-modal>\r
\r
  <!-- Edit Travel Modal -->\r
  <app-edit-travel-modal\r
    *ngIf="showEditModal()"\r
    [travel]="travelToEdit()!"\r
    [isRTL]="isRTL()"\r
    (close)="onEditModalClose()"\r
    (travelUpdated)="onTravelUpdated($event)"\r
  >\r
  </app-edit-travel-modal>\r
\r
  <!-- Add Travel Modal -->\r
  <app-add-travel-modal\r
    *ngIf="showAddModal()"\r
    [isRTL]="isRTL()"\r
    (close)="onAddModalClose()"\r
    (travelAdded)="onTravelAdded($event)"\r
  >\r
  </app-add-travel-modal>\r
\r
  <!-- Travel Details Modal -->\r
  <app-travel-details-modal\r
    *ngIf="showDetailsModal()"\r
    [travelId]="travelToView()?.id || null"\r
    [isRTL]="isRTL()"\r
    (close)="onDetailsModalClose()"\r
  >\r
  </app-travel-details-modal>\r
\r
  <!-- Success Modal -->\r
  <div\r
    class="success-modal-overlay"\r
    *ngIf="showSuccessModal()"\r
    (click)="closeSuccessModal()"\r
  >\r
    <div class="success-modal" (click)="$event.stopPropagation()">\r
      <div class="success-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
          <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
        </svg>\r
      </div>\r
      <h3 class="success-title">{{ translate("common.success") }}</h3>\r
      <p class="success-message">{{ successMessage() }}</p>\r
      <button class="success-close-btn" (click)="closeSuccessModal()">\r
        {{ translate("common.ok") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/travel/travel-list/travel-list.component.css */\n.travel-page {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.travel-page.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.top-bar-left.ltr-right {\n  order: 2;\n}\n.top-bar-right.ltr-left {\n  order: 1;\n}\n.add-travel-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-travel-btn:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 1rem;\n}\n.search-filters {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.filters-info {\n  flex: 1;\n  min-width: 300px;\n  margin-bottom: 1rem;\n}\n.filters-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0 0 0.5rem 0;\n}\n.filters-description {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0;\n}\n.search-box {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  flex: 1;\n  min-width: 250px;\n}\n.search-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.search-input-container {\n  position: relative;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7280;\n}\n.date-filters {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.date-input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.date-input {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.date-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.date-separator {\n  color: #6b7280;\n  font-weight: 500;\n  align-self: flex-end;\n  margin-bottom: 0.5rem;\n}\n.clear-filters-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.clear-filters-btn:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f1f5f9;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.empty-icon {\n  color: #94a3b8;\n  margin-bottom: 1.5rem;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  color: #64748b;\n  margin-bottom: 2rem;\n}\n.travels-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n  align-items: stretch;\n}\n.travel-card {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.travel-card:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.travel-info {\n  flex: 1;\n}\n.travel-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.25rem 0;\n  min-height: 3rem;\n  display: flex;\n  align-items: flex-start;\n  line-height: 1.4;\n}\n.travel-destination {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.travel-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  margin-left: 1rem;\n}\n.transport-icon {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.card-divider {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 1rem 0;\n}\n.card-details {\n  margin-bottom: 1.5rem;\n  flex: 1;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.detail-row:hover {\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  margin: 0 -0.75rem;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 80px;\n  align-items: start;\n  justify-content: start;\n}\n.detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.5rem;\n  align-items: start;\n  justify-content: start;\n}\n.detail-icon {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.delete-btn,\n.edit-btn {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.delete-btn {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.edit-btn {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.edit-btn:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.travels-table {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table th,\n.table td {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table th {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table td {\n  color: #111827;\n  font-size: 0.875rem;\n}\n.table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.transport-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.table-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.edit-btn-small,\n.delete-btn-small {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small {\n  color: #B68A35;\n  border: 1px solid #B68A35;\n  background-color: #F9F7ED;\n}\n.edit-btn-small:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.delete-btn-small {\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n  background-color: #ffcdd236;\n}\n.delete-btn-small:hover {\n  background-color: #ffb3bb63;\n  border-color: #c62828a9;\n  color: #c62828c9;\n}\n.details-btn-small {\n  color: #B68A35;\n  border: 1px solid #B68A35;\n  background-color: #F9F7ED;\n}\n.details-btn-small:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.success-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-modal {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.success-icon {\n  color: #10b981;\n  margin-bottom: 1rem;\n}\n.success-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.success-message {\n  color: #64748b;\n  margin-bottom: 1.5rem;\n}\n.success-close-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.875rem;\n}\n.success-close-btn:hover {\n  background-color: #A87D2A;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.details-btn {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: 1px solid #92722A;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n  color: #92722A;\n  background-color: #E6D7A2;\n  margin-bottom: 1rem;\n}\n.details-btn:hover {\n  background-color: #D4AF5F;\n  border-color: #92722A;\n  color: #F9F7ED;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(146, 114, 42, 0.3);\n}\n.rtl .detail-value {\n  text-align: left;\n}\n.rtl .table th,\n.rtl .table td {\n  text-align: right;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  padding: 1rem;\n  background-color: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.pagination-info {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-number {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 2.5rem;\n  text-align: center;\n}\n.page-number:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-number.active {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.page-size-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  background-color: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n@media (max-width: 768px) {\n  .travel-page {\n    padding: 1rem;\n  }\n  .top-bar {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .travels-grid {\n    grid-template-columns: 1fr;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .table {\n    font-size: 0.75rem;\n  }\n  .table th,\n  .table td {\n    padding: 0.75rem 0.5rem;\n  }\n  .search-filters {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filters-info {\n    min-width: auto;\n    margin-bottom: 0.5rem;\n  }\n  .search-box {\n    min-width: auto;\n    width: 100%;\n  }\n  .date-filters {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .date-input-group {\n    width: 100%;\n  }\n  .date-separator {\n    align-self: center;\n    margin-bottom: 0;\n  }\n  .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .pagination-controls {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .details-btn {\n    font-size: 0.8rem;\n    padding: 0.6rem 0.8rem;\n  }\n}\n/*# sourceMappingURL=travel-list.component-OOE3ML7E.css.map */\n"] }]
  }], () => [{ type: TravelService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TravelListComponent, { className: "TravelListComponent", filePath: "src/app/components/travel/travel-list/travel-list.component.ts", lineNumber: 17 });
})();

// src/app/components/travel/travel-routing.module.ts
var routes = [
  {
    path: "",
    component: TravelListComponent
  }
];
var TravelRoutingModule = class _TravelRoutingModule {
  static \u0275fac = function TravelRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TravelRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TravelRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TravelRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/travel/travel.module.ts
var TravelModule = class _TravelModule {
  static \u0275fac = function TravelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TravelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TravelModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TravelRoutingModule,
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TravelModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TravelListComponent,
        AddTravelModalComponent,
        EditTravelModalComponent,
        TravelDetailsModalComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TravelRoutingModule,
        ConfirmationModalComponent
      ]
    }]
  }], null, null);
})();
export {
  TravelModule
};
//# sourceMappingURL=chunk-YABVEQFC.js.map
