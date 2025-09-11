import {
  SharedModule
} from "./chunk-GZJOPUJF.js";
import {
  UsersService
} from "./chunk-KNY2KTVE.js";
import "./chunk-PZNXBELC.js";
import {
  ConfirmationModalComponent
} from "./chunk-Q4VN4X77.js";
import "./chunk-JM5F2KPM.js";
import {
  DepartmentService
} from "./chunk-CNH26RN2.js";
import {
  RouterModule
} from "./chunk-AKEMWEBI.js";
import "./chunk-PA6IG3FH.js";
import "./chunk-ODI2QPTF.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-KHAMYMVY.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  HttpClientModule,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Output,
  TranslationService,
  ViewChild,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate5,
  ɵɵviewQuery
} from "./chunk-UOGSXFNT.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/departments/department-form/department-form.component.ts
function DepartmentFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 36);
    \u0275\u0275element(2, "circle", 37)(3, "line", 38)(4, "line", 39);
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
function DepartmentFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("code"), " ");
  }
}
function DepartmentFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("nameAr"), " ");
  }
}
function DepartmentFormComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("nameEn"), " ");
  }
}
function DepartmentFormComponent_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", type_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate(type_r2.label), " ");
  }
}
function DepartmentFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("type"), " ");
  }
}
function DepartmentFormComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("order"), " ");
  }
}
function DepartmentFormComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isRTL() ? dept_r3.nameAr : dept_r3.nameEn, " ");
  }
}
function DepartmentFormComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275property("value", user_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.name, " ");
  }
}
function DepartmentFormComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "label", 45);
    \u0275\u0275element(5, "input", 46)(6, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.status"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.active"));
  }
}
function DepartmentFormComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
var DepartmentFormComponent = class _DepartmentFormComponent {
  fb;
  departmentService;
  usersService;
  translationService;
  department;
  isEdit = false;
  isOpen = false;
  close = new EventEmitter();
  departmentCreated = new EventEmitter();
  departmentUpdated = new EventEmitter();
  form;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Data for dropdowns
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  departmentTypes = [
    { value: 0, label: "departments.department_type.0" },
    { value: 1, label: "departments.department_type.1" },
    { value: 2, label: "departments.department_type.2" },
    { value: 3, label: "departments.department_type.3" },
    { value: 4, label: "departments.department_type.4" },
    { value: 5, label: "departments.department_type.5" },
    { value: 6, label: "departments.department_type.6" }
  ];
  constructor(fb, departmentService, usersService, translationService) {
    this.fb = fb;
    this.departmentService = departmentService;
    this.usersService = usersService;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.initForm();
    this.loadDropdownData();
  }
  loadDropdownData() {
    this.departmentService.getDepartments().subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.items) {
          const departments = this.isEdit && this.department ? response.data.items.filter((dept) => dept.id !== this.department.id) : response.data.items;
          this.departments.set(departments);
        }
      },
      error: (error) => {
        console.error("Error loading departments:", error);
      }
    });
    this.usersService.getUserNames().subscribe({
      next: (users) => {
        this.users.set(users);
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.users.set([]);
      }
    });
  }
  initForm() {
    this.form = this.fb.group({
      code: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      nameAr: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      nameEn: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      type: [1, Validators.required],
      parentId: [null],
      order: [0, [Validators.required, Validators.min(0)]],
      managerUserId: [null],
      isActive: [true]
    });
    if (this.isEdit && this.department) {
      this.form.patchValue({
        code: this.department.code,
        nameAr: this.department.nameAr,
        nameEn: this.department.nameEn,
        type: this.department.type,
        parentId: this.department.parentId,
        order: this.department.order,
        managerUserId: this.department.managerUserId,
        isActive: this.department.isActive
      });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      this.markFormGroupTouched();
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const formValue = this.form.value;
    if (this.isEdit && this.department) {
      const updateRequest = {
        nameAr: formValue.nameAr,
        nameEn: formValue.nameEn,
        type: formValue.type,
        parentId: formValue.parentId || void 0,
        order: formValue.order,
        managerUserId: formValue.managerUserId || void 0,
        isActive: formValue.isActive
      };
      this.departmentService.updateDepartment(this.department.id, updateRequest).subscribe({
        next: (response) => {
          if (response.success) {
            this.departmentUpdated.emit();
            this.close.emit();
          } else {
            this.error.set(response.message || "Failed to update department");
          }
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set("Failed to update department");
          this.loading.set(false);
          console.error("Error updating department:", err);
        }
      });
    } else {
      const createRequest = {
        code: formValue.code,
        nameAr: formValue.nameAr,
        nameEn: formValue.nameEn,
        type: formValue.type,
        parentId: formValue.parentId || void 0,
        order: formValue.order,
        managerUserId: formValue.managerUserId || void 0
      };
      this.departmentService.createDepartment(createRequest).subscribe({
        next: (response) => {
          if (response.success) {
            this.departmentCreated.emit();
            this.close.emit();
          } else {
            this.error.set(response.message || "Failed to create department");
          }
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set("Failed to create department");
          this.loading.set(false);
          console.error("Error creating department:", err);
        }
      });
    }
  }
  onCancel() {
    this.close.emit();
  }
  markFormGroupTouched() {
    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.form.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors?.["minlength"]) {
        return `${this.translate("common.min_length")} ${field.errors["minlength"].requiredLength}`;
      }
      if (field.errors?.["maxlength"]) {
        return `${this.translate("common.max_length")} ${field.errors["maxlength"].requiredLength}`;
      }
      if (field.errors?.["min"]) {
        return `${this.translate("common.min_value")} ${field.errors["min"].min}`;
      }
    }
    return "";
  }
  isFieldInvalid(fieldName) {
    const field = this.form.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getTitle() {
    return this.isEdit ? this.translate("departments.edit") : this.translate("departments.add");
  }
  getSubmitButtonText() {
    return this.isEdit ? this.translate("common.save") : this.translate("common.create");
  }
  static \u0275fac = function DepartmentFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentFormComponent, selectors: [["app-department-form"]], inputs: { department: "department", isEdit: "isEdit", isOpen: "isOpen" }, outputs: { close: "close", departmentCreated: "departmentCreated", departmentUpdated: "departmentUpdated" }, standalone: false, decls: 62, vars: 45, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "department-form", 3, "ngSubmit", "formGroup"], [1, "form-content"], ["class", "error-message", 4, "ngIf"], [1, "form-group"], ["for", "code"], ["type", "text", "id", "code", "formControlName", "code", 3, "placeholder", "readonly"], ["class", "error-text", 4, "ngIf"], [1, "form-row"], ["for", "nameAr"], ["type", "text", "id", "nameAr", "formControlName", "nameAr", 3, "placeholder"], ["for", "nameEn"], ["type", "text", "id", "nameEn", "formControlName", "nameEn", 3, "placeholder"], ["for", "type"], ["id", "type", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "order"], ["type", "number", "id", "order", "formControlName", "order", "min", "0", 3, "placeholder"], ["for", "parentId"], ["id", "parentId", "formControlName", "parentId"], ["value", "null"], ["for", "managerUserId"], ["id", "managerUserId", "formControlName", "managerUserId"], ["class", "form-group status-toggle-group", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn-content"], ["class", "loading-spinner", 4, "ngIf"], [1, "error-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "error-text"], [3, "value"], [1, "form-group", "status-toggle-group"], [1, "status-label"], [1, "toggle-container"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive"], [1, "toggle-slider"], [1, "toggle-text"], [1, "loading-spinner"]], template: function DepartmentFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function DepartmentFormComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function DepartmentFormComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function DepartmentFormComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "line", 5)(8, "line", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function DepartmentFormComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275template(11, DepartmentFormComponent_div_11_Template, 6, 1, "div", 9);
      \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 12);
      \u0275\u0275template(16, DepartmentFormComponent_div_16_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 10)(19, "label", 15);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 16);
      \u0275\u0275template(22, DepartmentFormComponent_div_22_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 10)(24, "label", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275template(27, DepartmentFormComponent_div_27_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 14)(29, "div", 10)(30, "label", 19);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 20);
      \u0275\u0275template(33, DepartmentFormComponent_option_33_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, DepartmentFormComponent_div_34_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10)(36, "label", 22);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 23);
      \u0275\u0275template(39, DepartmentFormComponent_div_39_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 10)(41, "label", 24);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 25)(44, "option", 26);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, DepartmentFormComponent_option_46_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 10)(48, "label", 27);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "select", 28)(51, "option", 26);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, DepartmentFormComponent_option_53_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(54, DepartmentFormComponent_div_54_Template, 9, 2, "div", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 30)(56, "button", 31);
      \u0275\u0275listener("click", function DepartmentFormComponent_Template_button_click_56_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 32)(59, "div", 33);
      \u0275\u0275template(60, DepartmentFormComponent_div_60_Template, 1, 0, "div", 34);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getTitle());
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("code"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.code"), " *");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("departments.code"))("readonly", ctx.isEdit);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("code"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("nameAr"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.name_ar"), " *");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("departments.name_ar"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("nameAr"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("nameEn"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.name_en"), " *");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("departments.name_en"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("nameEn"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("type"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.type"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.departmentTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("type"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("order"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.order"), " *");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("departments.order"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("order"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.parent"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.no_parent"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.manager"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.no_manager"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEdit);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.form.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getSubmitButtonText(), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.department-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:read-only {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-group.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.status-toggle-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d1d5db;\n  transition: all 0.3s ease;\n  border-radius: 24px;\n}\n.toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: all 0.3s ease;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #158638;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(24px);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.rtl[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]:before {\n  left: auto;\n  right: 3px;\n}\n.rtl[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(-24px);\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4b5563;\n  transform: translateY(-1px);\n}\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .form-content[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=department-form.component-QVSWNXOO.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentFormComponent, [{
    type: Component,
    args: [{ selector: "app-department-form", standalone: false, template: `<div class="modal-overlay" [class.show]="isOpen" (click)="onCancel()">\r
  <div class="modal-content" [class.rtl]="isRTL()" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ getTitle() }}</h2>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"/>\r
          <line x1="6" y1="6" x2="18" y2="18"/>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="department-form">\r
      <div class="form-content">\r
        <!-- Error Message -->\r
        <div *ngIf="error()" class="error-message">\r
          <svg class="error-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="15" y1="9" x2="9" y2="15"/>\r
            <line x1="9" y1="9" x2="15" y2="15"/>\r
          </svg>\r
          {{ error() }}\r
        </div>\r
\r
        <!-- Code Field -->\r
        <div class="form-group" [class.invalid]="isFieldInvalid('code')">\r
          <label for="code">{{ translate('departments.code') }} *</label>\r
          <input \r
            type="text" \r
            id="code" \r
            formControlName="code"\r
            [placeholder]="translate('departments.code')"\r
            [readonly]="isEdit">\r
          <div class="error-text" *ngIf="getFieldError('code')">\r
            {{ getFieldError('code') }}\r
          </div>\r
        </div>\r
\r
        <!-- Name Fields Row -->\r
        <div class="form-row">\r
          <div class="form-group" [class.invalid]="isFieldInvalid('nameAr')">\r
            <label for="nameAr">{{ translate('departments.name_ar') }} *</label>\r
            <input \r
              type="text" \r
              id="nameAr" \r
              formControlName="nameAr"\r
              [placeholder]="translate('departments.name_ar')">\r
            <div class="error-text" *ngIf="getFieldError('nameAr')">\r
              {{ getFieldError('nameAr') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group" [class.invalid]="isFieldInvalid('nameEn')">\r
            <label for="nameEn">{{ translate('departments.name_en') }} *</label>\r
            <input \r
              type="text" \r
              id="nameEn" \r
              formControlName="nameEn"\r
              [placeholder]="translate('departments.name_en')">\r
            <div class="error-text" *ngIf="getFieldError('nameEn')">\r
              {{ getFieldError('nameEn') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Type and Order Row -->\r
        <div class="form-row">\r
          <div class="form-group" [class.invalid]="isFieldInvalid('type')">\r
            <label for="type">{{ translate('departments.type') }} *</label>\r
            <select id="type" formControlName="type">\r
              <option *ngFor="let type of departmentTypes" [value]="type.value">\r
                {{ translate(type.label) }}\r
              </option>\r
            </select>\r
            <div class="error-text" *ngIf="getFieldError('type')">\r
              {{ getFieldError('type') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group" [class.invalid]="isFieldInvalid('order')">\r
            <label for="order">{{ translate('departments.order') }} *</label>\r
            <input \r
              type="number" \r
              id="order" \r
              formControlName="order"\r
              min="0"\r
              [placeholder]="translate('departments.order')">\r
            <div class="error-text" *ngIf="getFieldError('order')">\r
              {{ getFieldError('order') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Parent Department -->\r
        <div class="form-group">\r
          <label for="parentId">{{ translate('departments.parent') }}</label>\r
          <select id="parentId" formControlName="parentId">\r
            <option value="null">{{ translate('departments.no_parent') }}</option>\r
            <option *ngFor="let dept of departments()" [value]="dept.id">\r
              {{ isRTL() ? dept.nameAr : dept.nameEn }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Manager -->\r
        <div class="form-group">\r
          <label for="managerUserId">{{ translate('departments.manager') }}</label>\r
          <select id="managerUserId" formControlName="managerUserId">\r
            <option value="null">{{ translate('departments.no_manager') }}</option>\r
            <option *ngFor="let user of users()" [value]="user.id">\r
              {{ user.name }}\r
            </option>\r
          </select>\r
        </div>\r
\r
        <!-- Active Status (Edit mode only) -->\r
        <div class="form-group status-toggle-group" *ngIf="isEdit">\r
          <label class="status-label">{{ translate('departments.status') }}</label>\r
          <div class="toggle-container">\r
            <label class="toggle-switch">\r
              <input type="checkbox" formControlName="isActive">\r
              <span class="toggle-slider"></span>\r
            </label>\r
            <span class="toggle-text">{{ translate('departments.active') }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button \r
          type="button" \r
          class="btn btn-secondary" \r
          (click)="onCancel()"\r
          [disabled]="loading()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        \r
        <button \r
          type="submit" \r
          class="btn btn-primary" \r
          [disabled]="loading() || form.invalid">\r
          <div class="btn-content">\r
            <div *ngIf="loading()" class="loading-spinner"></div>\r
            {{ getSubmitButtonText() }}\r
          </div>\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/department-form/department-form.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header h2 {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.department-form {\n  display: flex;\n  flex-direction: column;\n}\n.form-content {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-group input:read-only {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-group.invalid input,\n.form-group.invalid select {\n  border-color: #ef4444;\n}\n.form-group.invalid input:focus,\n.form-group.invalid select:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.status-toggle-group {\n  margin-bottom: 1.5rem;\n}\n.status-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.75rem;\n}\n.toggle-container {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 24px;\n  cursor: pointer;\n}\n.toggle-switch input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #d1d5db;\n  transition: all 0.3s ease;\n  border-radius: 24px;\n}\n.toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: all 0.3s ease;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch input[type=checkbox]:checked + .toggle-slider {\n  background-color: #158638;\n}\n.toggle-switch input[type=checkbox]:checked + .toggle-slider:before {\n  transform: translateX(24px);\n}\n.toggle-text {\n  font-size: 0.875rem;\n  color: #374151;\n  font-weight: 500;\n}\n.rtl .toggle-slider:before {\n  left: auto;\n  right: 3px;\n}\n.rtl .toggle-switch input[type=checkbox]:checked + .toggle-slider:before {\n  transform: translateX(-24px);\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message .error-icon {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #4b5563;\n  transform: translateY(-1px);\n}\n.btn-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .modal-header h2 {\n  order: 2;\n}\n.modal-content.rtl .close-btn {\n  order: 1;\n}\n.modal-content.rtl .form-row {\n  direction: rtl;\n}\n.modal-content.rtl .modal-footer {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .checkbox-label {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header,\n  .form-content,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .modal-header h2 {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=department-form.component-QVSWNXOO.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: DepartmentService }, { type: UsersService }, { type: TranslationService }], { department: [{
    type: Input
  }], isEdit: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], departmentCreated: [{
    type: Output
  }], departmentUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentFormComponent, { className: "DepartmentFormComponent", filePath: "src/app/components/departments/department-form/department-form.component.ts", lineNumber: 16 });
})();

// src/app/components/departments/department-actions/department-actions.component.ts
var DepartmentActionsComponent = class _DepartmentActionsComponent {
  translationService;
  department;
  changeManager = new EventEmitter();
  move = new EventEmitter();
  edit = new EventEmitter();
  delete = new EventEmitter();
  showMenu = signal(false, ...ngDevMode ? [{ debugName: "showMenu" }] : []);
  constructor(translationService) {
    this.translationService = translationService;
  }
  toggleMenu() {
    this.showMenu.update((show) => !show);
  }
  closeMenu() {
    this.showMenu.set(false);
  }
  onDocumentClick(event) {
    if (this.showMenu()) {
      const target = event.target;
      if (!target.closest(".actions-container")) {
        this.showMenu.set(false);
      }
    }
  }
  onAction(action) {
    this.closeMenu();
    switch (action) {
      case "changeManager":
        this.changeManager.emit(this.department);
        break;
      case "move":
        this.move.emit(this.department);
        break;
      case "edit":
        this.edit.emit(this.department);
        break;
      case "delete":
        this.delete.emit(this.department);
        break;
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function DepartmentActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentActionsComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentActionsComponent, selectors: [["app-department-actions"]], hostBindings: function DepartmentActionsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DepartmentActionsComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { department: "department" }, outputs: { changeManager: "changeManager", move: "move", edit: "edit", delete: "delete" }, standalone: false, decls: 31, vars: 12, consts: [[1, "actions-container"], [1, "actions-trigger", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "1"], ["cx", "19", "cy", "12", "r", "1"], ["cx", "5", "cy", "12", "r", "1"], [1, "actions-menu"], [1, "action-item", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "action-icon"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["points", "9,18 15,12 9,6"], ["d", "M21 12H3"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1 2-2h4a2,2,0,0,1 2,2v6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"]], template: function DepartmentActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function DepartmentActionsComponent_Template_button_click_1_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "circle", 3)(4, "circle", 4)(5, "circle", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function DepartmentActionsComponent_Template_button_click_7_listener() {
        return ctx.onAction("changeManager");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9)(10, "circle", 10)(11, "path", 11)(12, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 7);
      \u0275\u0275listener("click", function DepartmentActionsComponent_Template_button_click_14_listener() {
        return ctx.onAction("move");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 8);
      \u0275\u0275element(16, "polyline", 13)(17, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "button", 7);
      \u0275\u0275listener("click", function DepartmentActionsComponent_Template_button_click_19_listener() {
        return ctx.onAction("edit");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 8);
      \u0275\u0275element(21, "path", 15)(22, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "button", 7);
      \u0275\u0275listener("click", function DepartmentActionsComponent_Template_button_click_24_listener() {
        return ctx.onAction("delete");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 8);
      \u0275\u0275element(26, "polyline", 17)(27, "path", 18)(28, "line", 19)(29, "line", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.showMenu());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("show", ctx.showMenu())("rtl", ctx.isRTL());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.change_manager"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.move"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.edit"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.delete"), " ");
    }
  }, styles: ['\n\n.actions-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n}\n.actions-trigger[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-trigger[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.actions-trigger.active[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.actions-trigger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.actions-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  margin-block-end: 0.5rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e2e8f0;\n  min-width: 200px;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  transform: translateY(10px);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.actions-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.actions-menu.rtl[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n.actions-menu[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  right: 1rem;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid white;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.actions-menu.rtl[_ngcontent-%COMP%]::after {\n  right: auto;\n  left: 1rem;\n}\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  font-weight: 600;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  color: #374151;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n}\n.action-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.action-item[_ngcontent-%COMP%]:first-child {\n  border-radius: 8px 8px 0 0;\n}\n.action-item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.action-item.action-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.action-item.action-danger[_ngcontent-%COMP%]:hover {\n  background-color: #fef2f2;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.action-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 0.5rem 0;\n}\n.actions-container.rtl[_ngcontent-%COMP%]   .actions-menu[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n.actions-container.rtl[_ngcontent-%COMP%]   .action-item[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .actions-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-width: 300px;\n    right: auto;\n    left: auto;\n    bottom: auto;\n    margin-block-end: 0;\n  }\n  .actions-menu.show[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%);\n  }\n  .actions-menu.rtl[_ngcontent-%COMP%] {\n    right: auto;\n    left: auto;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.actions-menu.show[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.2s ease-out;\n}\n/*# sourceMappingURL=department-actions.component-5BD5LJXB.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentActionsComponent, [{
    type: Component,
    args: [{ selector: "app-department-actions", standalone: false, template: `<div class="actions-container" [class.rtl]="isRTL()">\r
  <button \r
    class="actions-trigger" \r
    (click)="toggleMenu()"\r
    [class.active]="showMenu()">\r
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <circle cx="12" cy="12" r="1"/>\r
      <circle cx="19" cy="12" r="1"/>\r
      <circle cx="5" cy="12" r="1"/>\r
    </svg>\r
  </button>\r
  \r
  <div class="actions-menu" [class.show]="showMenu()" [class.rtl]="isRTL()">\r
    <button \r
      class="action-item" \r
      (click)="onAction('changeManager')">\r
      <svg class="action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>\r
        <circle cx="9" cy="7" r="4"/>\r
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>\r
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
      </svg>\r
      {{ translate('departments.change_manager') }}\r
    </button>\r
    \r
    <button \r
      class="action-item" \r
      (click)="onAction('move')">\r
      <svg class="action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <polyline points="9,18 15,12 9,6"/>\r
        <path d="M21 12H3"/>\r
      </svg>\r
      {{ translate('departments.move') }}\r
    </button>\r
    \r
    <button \r
      class="action-item" \r
      (click)="onAction('edit')">\r
      <svg class="action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
      </svg>\r
      {{ translate('departments.edit') }}\r
    </button>\r
    \r
    <button \r
      class="action-item" \r
      (click)="onAction('delete')">\r
      <svg class="action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <polyline points="3,6 5,6 21,6"/>\r
        <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1 2-2h4a2,2,0,0,1 2,2v6"/>\r
        <line x1="10" y1="11" x2="10" y2="17"/>\r
        <line x1="14" y1="11" x2="14" y2="17"/>\r
      </svg>\r
      {{ translate('departments.delete') }}\r
    </button>\r
    \r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/department-actions/department-actions.component.css */\n.actions-container {\n  position: relative;\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n}\n.actions-trigger {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.actions-trigger:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.actions-trigger.active {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.actions-trigger svg {\n  width: 16px;\n  height: 16px;\n}\n.actions-menu {\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  margin-block-end: 0.5rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e2e8f0;\n  min-width: 200px;\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  transform: translateY(10px);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.actions-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.actions-menu.rtl {\n  right: auto;\n  left: 0;\n}\n.actions-menu::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  right: 1rem;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid white;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));\n}\n.actions-menu.rtl::after {\n  right: auto;\n  left: 1rem;\n}\n.action-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  font-weight: 600;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  color: #374151;\n  font-size: 0.9rem;\n  font-family: "Poppins", sans-serif;\n}\n.action-item:hover {\n  background-color: #f3f4f6;\n}\n.action-item:first-child {\n  border-radius: 8px 8px 0 0;\n}\n.action-item:last-child {\n  border-radius: 0 0 8px 8px;\n}\n.action-item.action-danger {\n  color: #dc2626;\n}\n.action-item.action-danger:hover {\n  background-color: #fef2f2;\n}\n.action-icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.action-divider {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 0.5rem 0;\n}\n.actions-container.rtl .actions-menu {\n  right: auto;\n  left: 0;\n}\n.actions-container.rtl .action-item {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .actions-menu {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-width: 300px;\n    right: auto;\n    left: auto;\n    bottom: auto;\n    margin-block-end: 0;\n  }\n  .actions-menu.show {\n    transform: translate(-50%, -50%);\n  }\n  .actions-menu.rtl {\n    right: auto;\n    left: auto;\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.actions-menu.show {\n  animation: slideIn 0.2s ease-out;\n}\n/*# sourceMappingURL=department-actions.component-5BD5LJXB.css.map */\n'] }]
  }], () => [{ type: TranslationService }], { department: [{
    type: Input
  }], changeManager: [{
    type: Output
  }], move: [{
    type: Output
  }], edit: [{
    type: Output
  }], delete: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentActionsComponent, { className: "DepartmentActionsComponent", filePath: "src/app/components/departments/department-actions/department-actions.component.ts", lineNumber: 13 });
})();

// src/app/components/departments/change-manager-modal/change-manager-modal.component.ts
function ChangeManagerModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 29);
    \u0275\u0275element(2, "circle", 30)(3, "line", 31)(4, "line", 32);
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
function ChangeManagerModalComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function ChangeManagerModalComponent_div_31_Template_div_click_0_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ managerUserId: user_r3.id }));
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 4);
    \u0275\u0275element(3, "path", 35)(4, "circle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 37)(6, "div", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 40);
    \u0275\u0275element(11, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.form.value.managerUserId === user_r3.id);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getUserDisplayName(user_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r0.form.value.managerUserId === user_r3.id);
  }
}
function ChangeManagerModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 43);
    \u0275\u0275element(2, "path", 44)(3, "circle", 45)(4, "path", 46)(5, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.no_results"));
  }
}
function ChangeManagerModalComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 48);
  }
}
var ChangeManagerModalComponent = class _ChangeManagerModalComponent {
  fb;
  departmentService;
  translationService;
  usersService;
  department;
  isOpen = false;
  close = new EventEmitter();
  managerChanged = new EventEmitter();
  form;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Real users from the system
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  filteredUsers = signal([], ...ngDevMode ? [{ debugName: "filteredUsers" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  constructor(fb, departmentService, translationService, usersService) {
    this.fb = fb;
    this.departmentService = departmentService;
    this.translationService = translationService;
    this.usersService = usersService;
  }
  ngOnInit() {
    this.initForm();
    this.loadUsers();
  }
  loadUsers() {
    this.loading.set(true);
    this.usersService.getUsers().subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.items) {
          this.users.set(response.data.items);
          this.filteredUsers.set(response.data.items);
        } else {
          console.warn("Unexpected response structure for users:", response);
          this.users.set([]);
          this.filteredUsers.set([]);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Error loading users:", err);
        this.error.set("Failed to load users");
        this.loading.set(false);
      }
    });
  }
  initForm() {
    this.form = this.fb.group({
      managerUserId: ["", Validators.required]
    });
    if (this.department.managerUserId) {
      this.form.patchValue({
        managerUserId: this.department.managerUserId
      });
    }
  }
  onSearch(event) {
    const term = event.target.value.toLowerCase();
    this.searchTerm.set(term);
    if (!term) {
      this.filteredUsers.set(this.users());
    } else {
      const filtered = this.users().filter((user) => user.firstName?.toLowerCase().includes(term) || user.lastName?.toLowerCase().includes(term) || user.email?.toLowerCase().includes(term));
      this.filteredUsers.set(filtered);
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const managerUserId = this.form.value.managerUserId;
    this.departmentService.changeManager(this.department.id, { managerUserId }).subscribe({
      next: (response) => {
        if (response.success) {
          this.managerChanged.emit();
          this.close.emit();
        } else {
          this.error.set(response.message || "Failed to change manager");
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Error changing manager:", err);
        this.error.set("Failed to change manager");
        this.loading.set(false);
      }
    });
  }
  onCancel() {
    this.close.emit();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getUserDisplayName(user) {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user.email || "Unknown User";
  }
  static \u0275fac = function ChangeManagerModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangeManagerModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(UsersService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangeManagerModalComponent, selectors: [["app-change-manager-modal"]], inputs: { department: "department", isOpen: "isOpen" }, outputs: { close: "close", managerChanged: "managerChanged" }, standalone: false, decls: 40, vars: 20, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "change-manager-form", 3, "ngSubmit", "formGroup"], [1, "form-content"], [1, "department-info"], [1, "department-code"], ["class", "error-message", 4, "ngIf"], [1, "search-container"], ["for", "search"], [1, "search-input-wrapper"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["type", "text", "id", "search", 3, "input", "placeholder"], [1, "users-list"], [1, "users-container"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "no-users", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn-content"], ["class", "loading-spinner", 4, "ngIf"], [1, "error-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "user-item", 3, "click"], [1, "user-avatar"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-radio"], [1, "radio-circle"], [1, "no-users"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "no-users-icon"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "loading-spinner"]], template: function ChangeManagerModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function ChangeManagerModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function ChangeManagerModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function ChangeManagerModalComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "line", 5)(8, "line", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function ChangeManagerModalComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "h3");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, ChangeManagerModalComponent_div_18_Template, 6, 1, "div", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 15);
      \u0275\u0275element(24, "circle", 16)(25, "path", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "input", 18);
      \u0275\u0275listener("input", function ChangeManagerModalComponent_Template_input_input_26_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "label");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275template(31, ChangeManagerModalComponent_div_31_Template, 12, 6, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, ChangeManagerModalComponent_div_32_Template, 8, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 23)(34, "button", 24);
      \u0275\u0275listener("click", function ChangeManagerModalComponent_Template_button_click_34_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 25)(37, "div", 26);
      \u0275\u0275template(38, ChangeManagerModalComponent_div_38_Template, 1, 0, "div", 27);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.change_manager"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("departments.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isRTL() ? ctx.department.nameAr : ctx.department.nameEn);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.department.code);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.search_manager"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", ctx.translate("departments.search_manager"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.select_manager"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredUsers());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredUsers().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.form.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgControlStatusGroup, FormGroupDirective], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.change-manager-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.department-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.department-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.search-container[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.search-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  width: 20px;\n  height: 20px;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.users-list[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.users-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.users-container[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: white;\n}\n.user-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n.user-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.user-item.selected[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border-color: #158638;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: #e5e7eb;\n  border-radius: 50%;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-radio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.radio-circle[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 50%;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.radio-circle.selected[_ngcontent-%COMP%] {\n  border-color: #158638;\n  background-color: #158638;\n}\n.radio-circle.selected[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 8px;\n  height: 8px;\n  background-color: white;\n  border-radius: 50%;\n}\n.no-users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  color: #6b7280;\n}\n.no-users-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.no-users[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4b5563;\n}\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .user-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .form-content[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .department-info[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .user-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .user-avatar[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=change-manager-modal.component-JRPAD2S3.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangeManagerModalComponent, [{
    type: Component,
    args: [{ selector: "app-change-manager-modal", standalone: false, template: `<div class="modal-overlay" [class.show]="isOpen" (click)="onCancel()">\r
  <div class="modal-content" [class.rtl]="isRTL()" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ translate('departments.change_manager') }}</h2>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"/>\r
          <line x1="6" y1="6" x2="18" y2="18"/>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="change-manager-form">\r
      <div class="form-content">\r
        <!-- Department Info -->\r
        <div class="department-info">\r
          <h3>{{ translate('departments.title') }}</h3>\r
          <p>{{ isRTL() ? department.nameAr : department.nameEn }}</p>\r
          <span class="department-code">{{ department.code }}</span>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="error()" class="error-message">\r
          <svg class="error-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="15" y1="9" x2="9" y2="15"/>\r
            <line x1="9" y1="9" x2="15" y2="15"/>\r
          </svg>\r
          {{ error() }}\r
        </div>\r
\r
        <!-- Search Input -->\r
        <div class="search-container">\r
          <label for="search">{{ translate('departments.search_manager') }}</label>\r
          <div class="search-input-wrapper">\r
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="11" cy="11" r="8"/>\r
              <path d="M21 21l-4.35-4.35"/>\r
            </svg>\r
            <input \r
              type="text" \r
              id="search"\r
              [placeholder]="translate('departments.search_manager')"\r
              (input)="onSearch($event)">\r
          </div>\r
        </div>\r
\r
        <!-- Users List -->\r
        <div class="users-list">\r
          <label>{{ translate('departments.select_manager') }}</label>\r
          <div class="users-container">\r
            <div \r
              *ngFor="let user of filteredUsers()" \r
              class="user-item"\r
              [class.selected]="form.value.managerUserId === user.id"\r
              (click)="form.patchValue({ managerUserId: user.id })">\r
              <div class="user-avatar">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>\r
                  <circle cx="12" cy="7" r="4"/>\r
                </svg>\r
              </div>\r
              <div class="user-info">\r
                <div class="user-name">{{ getUserDisplayName(user) }}</div>\r
                <div class="user-email">{{ user.email }}</div>\r
              </div>\r
              <div class="user-radio">\r
                <div class="radio-circle" [class.selected]="form.value.managerUserId === user.id"></div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- No Users Message -->\r
        <div *ngIf="filteredUsers().length === 0" class="no-users">\r
          <svg class="no-users-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>\r
            <circle cx="9" cy="7" r="4"/>\r
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
          </svg>\r
          <p>{{ translate('common.no_results') }}</p>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button \r
          type="button" \r
          class="btn btn-secondary" \r
          (click)="onCancel()"\r
          [disabled]="loading()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        \r
        <button \r
          type="submit" \r
          class="btn btn-primary" \r
          [disabled]="loading() || form.invalid">\r
          <div class="btn-content">\r
            <div *ngIf="loading()" class="loading-spinner"></div>\r
            {{ translate('common.save') }}\r
          </div>\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/change-manager-modal/change-manager-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header h2 {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.change-manager-form {\n  display: flex;\n  flex-direction: column;\n}\n.form-content {\n  padding: 1.5rem;\n}\n.department-info {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.department-info h3 {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-info p {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-code {\n  display: inline-block;\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message .error-icon {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.search-container {\n  margin-bottom: 1.5rem;\n}\n.search-container label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  width: 20px;\n  height: 20px;\n}\n.search-input-wrapper input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.search-input-wrapper input:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.users-list {\n  margin-bottom: 1.5rem;\n}\n.users-list label {\n  display: block;\n  margin-bottom: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.users-container {\n  max-height: 300px;\n  overflow-y: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: white;\n}\n.user-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f3f4f6;\n}\n.user-item:last-child {\n  border-bottom: none;\n}\n.user-item:hover {\n  background-color: #f9fafb;\n}\n.user-item.selected {\n  background-color: #f0fdf4;\n  border-color: #158638;\n}\n.user-avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: #e5e7eb;\n  border-radius: 50%;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.user-info {\n  flex: 1;\n  min-width: 0;\n}\n.user-name {\n  color: #111827;\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.user-email {\n  color: #6b7280;\n  font-size: 0.75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-radio {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.radio-circle {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 50%;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.radio-circle.selected {\n  border-color: #158638;\n  background-color: #158638;\n}\n.radio-circle.selected::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 8px;\n  height: 8px;\n  background-color: white;\n  border-radius: 50%;\n}\n.no-users {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n  color: #6b7280;\n}\n.no-users-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.no-users p {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #4b5563;\n}\n.btn-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .modal-header h2 {\n  order: 2;\n}\n.modal-content.rtl .close-btn {\n  order: 1;\n}\n.modal-content.rtl .modal-footer {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .search-icon {\n  left: auto;\n  right: 1rem;\n}\n.modal-content.rtl .search-input-wrapper input {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.modal-content.rtl .user-item {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header,\n  .form-content,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .modal-header h2 {\n    font-size: 1.25rem;\n  }\n  .department-info {\n    padding: 1rem;\n  }\n  .user-item {\n    padding: 0.75rem;\n  }\n  .user-avatar {\n    width: 32px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=change-manager-modal.component-JRPAD2S3.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: DepartmentService }, { type: TranslationService }, { type: UsersService }], { department: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], managerChanged: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangeManagerModalComponent, { className: "ChangeManagerModalComponent", filePath: "src/app/components/departments/change-manager-modal/change-manager-modal.component.ts", lineNumber: 16 });
})();

// src/app/components/departments/move-department-modal/move-department-modal.component.ts
function MoveDepartmentModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "circle", 33)(3, "line", 34)(4, "line", 35);
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
function MoveDepartmentModalComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const parent_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", parent_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.getDepartmentDisplayName(parent_r2), " (", parent_r2.code, ") ");
  }
}
function MoveDepartmentModalComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("newOrder"), " ");
  }
}
function MoveDepartmentModalComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
}
var MoveDepartmentModalComponent = class _MoveDepartmentModalComponent {
  fb;
  departmentService;
  translationService;
  department;
  departments;
  isOpen = false;
  close = new EventEmitter();
  departmentMoved = new EventEmitter();
  form;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  availableParents = signal([], ...ngDevMode ? [{ debugName: "availableParents" }] : []);
  constructor(fb, departmentService, translationService) {
    this.fb = fb;
    this.departmentService = departmentService;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.initForm();
    this.filterAvailableParents();
  }
  initForm() {
    this.form = this.fb.group({
      newParentId: [null],
      newOrder: [0, [Validators.required, Validators.min(0)]]
    });
    if (this.department.parentId) {
      this.form.patchValue({
        newParentId: this.department.parentId
      });
    }
  }
  filterAvailableParents() {
    const available = this.departments.filter((dept) => dept.id !== this.department.id && !this.isDescendant(dept, this.department));
    this.availableParents.set(available);
  }
  isDescendant(potentialParent, target) {
    if (!potentialParent.children || potentialParent.children.length === 0) {
      return false;
    }
    for (const child of potentialParent.children) {
      if (child.id === target.id) {
        return true;
      }
      if (this.isDescendant(child, target)) {
        return true;
      }
    }
    return false;
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading.set(true);
    this.error.set(null);
    const { newParentId, newOrder } = this.form.value;
    this.departmentService.moveDepartment(this.department.id, {
      newParentId: newParentId || 0,
      // 0 means no parent (root level)
      newOrder
    }).subscribe({
      next: (response) => {
        if (response.success) {
          this.departmentMoved.emit();
          this.close.emit();
        } else {
          this.error.set(response.message || "Failed to move department");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to move department");
        this.loading.set(false);
        console.error("Error moving department:", err);
      }
    });
  }
  onCancel() {
    this.close.emit();
  }
  getFieldError(fieldName) {
    const field = this.form.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors?.["min"]) {
        return `${this.translate("common.min_value")} ${field.errors["min"].min}`;
      }
    }
    return "";
  }
  isFieldInvalid(fieldName) {
    const field = this.form.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
  getDepartmentDisplayName(dept) {
    return this.isRTL() ? dept.nameAr : dept.nameEn;
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function MoveDepartmentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoveDepartmentModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoveDepartmentModalComponent, selectors: [["app-move-department-modal"]], inputs: { department: "department", departments: "departments", isOpen: "isOpen" }, outputs: { close: "close", departmentMoved: "departmentMoved" }, standalone: false, decls: 56, vars: 30, consts: [[1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "move-department-form", 3, "ngSubmit", "formGroup"], [1, "form-content"], [1, "department-info"], [1, "department-code"], ["class", "error-message", 4, "ngIf"], [1, "form-group"], ["for", "newParentId"], ["id", "newParentId", "formControlName", "newParentId"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "help-text"], ["for", "newOrder"], ["type", "number", "id", "newOrder", "formControlName", "newOrder", "min", "0", 3, "placeholder"], ["class", "error-text", 4, "ngIf"], [1, "current-position"], [1, "position-details"], [1, "position-item"], [1, "position-label"], [1, "position-value"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "btn-content"], ["class", "loading-spinner", 4, "ngIf"], [1, "error-message"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [3, "value"], [1, "error-text"], [1, "loading-spinner"]], template: function MoveDepartmentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function MoveDepartmentModalComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function MoveDepartmentModalComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function MoveDepartmentModalComponent_Template_button_click_5_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 4);
      \u0275\u0275element(7, "line", 5)(8, "line", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function MoveDepartmentModalComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "h3");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, MoveDepartmentModalComponent_div_18_Template, 6, 1, "div", 11);
      \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 14)(23, "option", 15);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, MoveDepartmentModalComponent_option_25_Template, 2, 3, "option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12)(29, "label", 18);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 19);
      \u0275\u0275template(32, MoveDepartmentModalComponent_div_32_Template, 2, 1, "div", 20);
      \u0275\u0275elementStart(33, "div", 17);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 21)(36, "h4");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 23)(40, "span", 24);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 25);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 23)(45, "span", 24);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 25);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 26)(50, "button", 27);
      \u0275\u0275listener("click", function MoveDepartmentModalComponent_Template_button_click_50_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 28)(53, "div", 29);
      \u0275\u0275template(54, MoveDepartmentModalComponent_div_54_Template, 1, 0, "div", 30);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.move"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("departments.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isRTL() ? ctx.department.nameAr : ctx.department.nameEn);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.department.code);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.parent"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("departments.no_parent"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.availableParents());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.select_parent"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("newOrder"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.order"), " *");
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("departments.order"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getFieldError("newOrder"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.order"), ": 0 = first, 1 = second, etc. ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("common.current_position"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.parent"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.department.parentId ? "#" + ctx.department.parentId : ctx.translate("departments.no_parent"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("departments.order"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.department.order);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.form.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.move"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.move-department-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-group.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.help-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  font-style: italic;\n}\n.department-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.department-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-code[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.current-position[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.current-position[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 1rem 0;\n}\n.position-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.position-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: white;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.position-label[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.position-value[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.875rem;\n  font-weight: 600;\n  background-color: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4b5563;\n  transform: translateY(-1px);\n}\n.btn-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .position-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .position-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .form-content[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .department-info[_ngcontent-%COMP%], \n   .current-position[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=move-department-modal.component-KMTTFN26.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoveDepartmentModalComponent, [{
    type: Component,
    args: [{ selector: "app-move-department-modal", standalone: false, template: `<div class="modal-overlay" [class.show]="isOpen" (click)="onCancel()">\r
  <div class="modal-content" [class.rtl]="isRTL()" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ translate('departments.move') }}</h2>\r
      <button class="close-btn" (click)="onCancel()">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"/>\r
          <line x1="6" y1="6" x2="18" y2="18"/>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="move-department-form">\r
      <div class="form-content">\r
        <!-- Department Info -->\r
        <div class="department-info">\r
          <h3>{{ translate('departments.title') }}</h3>\r
          <p>{{ isRTL() ? department.nameAr : department.nameEn }}</p>\r
          <span class="department-code">{{ department.code }}</span>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="error()" class="error-message">\r
          <svg class="error-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="15" y1="9" x2="9" y2="15"/>\r
            <line x1="9" y1="9" x2="15" y2="15"/>\r
          </svg>\r
          {{ error() }}\r
        </div>\r
\r
        <!-- Parent Department Selection -->\r
        <div class="form-group">\r
          <label for="newParentId">{{ translate('departments.parent') }}</label>\r
          <select id="newParentId" formControlName="newParentId">\r
            <option value="null">{{ translate('departments.no_parent') }}</option>\r
            <option \r
              *ngFor="let parent of availableParents()" \r
              [value]="parent.id">\r
              {{ getDepartmentDisplayName(parent) }} ({{ parent.code }})\r
            </option>\r
          </select>\r
          <div class="help-text">\r
            {{ translate('departments.select_parent') }}\r
          </div>\r
        </div>\r
\r
        <!-- Order Input -->\r
        <div class="form-group" [class.invalid]="isFieldInvalid('newOrder')">\r
          <label for="newOrder">{{ translate('departments.order') }} *</label>\r
          <input \r
            type="number" \r
            id="newOrder" \r
            formControlName="newOrder"\r
            min="0"\r
            [placeholder]="translate('departments.order')">\r
          <div class="error-text" *ngIf="getFieldError('newOrder')">\r
            {{ getFieldError('newOrder') }}\r
          </div>\r
          <div class="help-text">\r
            {{ translate('departments.order') }}: 0 = first, 1 = second, etc.\r
          </div>\r
        </div>\r
\r
        <!-- Current Position Info -->\r
        <div class="current-position">\r
          <h4>{{ translate('common.current_position') }}</h4>\r
          <div class="position-details">\r
            <div class="position-item">\r
              <span class="position-label">{{ translate('departments.parent') }}:</span>\r
              <span class="position-value">\r
                {{ department.parentId ? '#' + department.parentId : translate('departments.no_parent') }}\r
              </span>\r
            </div>\r
            <div class="position-item">\r
              <span class="position-label">{{ translate('departments.order') }}:</span>\r
              <span class="position-value">{{ department.order }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="modal-footer">\r
        <button \r
          type="button" \r
          class="btn btn-secondary" \r
          (click)="onCancel()"\r
          [disabled]="loading()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        \r
        <button \r
          type="submit" \r
          class="btn btn-primary" \r
          [disabled]="loading() || form.invalid">\r
          <div class="btn-content">\r
            <div *ngIf="loading()" class="loading-spinner"></div>\r
            {{ translate('common.move') }}\r
          </div>\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/move-department-modal/move-department-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  padding: 1rem;\n}\n.modal-overlay.show {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: slideIn 0.3s ease-out;\n  font-family: "Poppins", sans-serif;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #26667F;\n  color: white;\n}\n.modal-header h2 {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.close-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.move-department-form {\n  display: flex;\n  flex-direction: column;\n}\n.form-content {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #374151;\n  background: white;\n  transition: all 0.2s ease;\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.form-group input:focus,\n.form-group select:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-group.invalid input,\n.form-group.invalid select {\n  border-color: #ef4444;\n}\n.form-group.invalid input:focus,\n.form-group.invalid select:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.error-text {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.help-text {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  font-style: italic;\n}\n.department-info {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.department-info h3 {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-info p {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n}\n.department-code {\n  display: inline-block;\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family: "Courier New", monospace;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #991b1b;\n  margin-bottom: 1.5rem;\n  font-size: 0.875rem;\n}\n.error-message .error-icon {\n  color: #ef4444;\n  flex-shrink: 0;\n}\n.current-position {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.current-position h4 {\n  color: #374151;\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 1rem 0;\n}\n.position-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.position-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background-color: white;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.position-label {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.position-value {\n  color: #111827;\n  font-size: 0.875rem;\n  font-weight: 600;\n  background-color: #f3f4f6;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.btn {\n  font-family:\n    "IBM Plex Sans Arabic",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.btn-secondary {\n  background: #6b7280;\n  color: white;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #4b5563;\n  transform: translateY(-1px);\n}\n.btn-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .modal-header h2 {\n  order: 2;\n}\n.modal-content.rtl .close-btn {\n  order: 1;\n}\n.modal-content.rtl .modal-footer {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .position-item {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .modal-content {\n    max-width: 95vw;\n    margin: 0.5rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .position-item {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 480px) {\n  .modal-content {\n    max-width: 100vw;\n    margin: 0;\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  .modal-header,\n  .form-content,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .modal-header h2 {\n    font-size: 1.25rem;\n  }\n  .department-info,\n  .current-position {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=move-department-modal.component-KMTTFN26.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: DepartmentService }, { type: TranslationService }], { department: [{
    type: Input
  }], departments: [{
    type: Input
  }], isOpen: [{
    type: Input
  }], close: [{
    type: Output
  }], departmentMoved: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoveDepartmentModalComponent, { className: "MoveDepartmentModalComponent", filePath: "src/app/components/departments/move-department-modal/move-department-modal.component.ts", lineNumber: 14 });
})();

// src/app/components/departments/departments-cards-view/departments-cards-view.component.ts
var _c0 = () => ({ standalone: true });
function DepartmentsCardsViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function DepartmentsCardsViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 11);
    \u0275\u0275element(2, "circle", 12)(3, "line", 13)(4, "line", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 15);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadDepartments());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.refresh"), " ");
  }
}
function DepartmentsCardsViewComponent_div_3_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 49);
    \u0275\u0275element(4, "rect", 50)(5, "rect", 51)(6, "rect", 52)(7, "rect", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 54)(9, "app-department-actions", 55);
    \u0275\u0275listener("changeManager", function DepartmentsCardsViewComponent_div_3_div_57_Template_app_department_actions_changeManager_9_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChangeManagerModal(dept_r5));
    })("move", function DepartmentsCardsViewComponent_div_3_div_57_Template_app_department_actions_move_9_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMoveModal(dept_r5));
    })("edit", function DepartmentsCardsViewComponent_div_3_div_57_Template_app_department_actions_edit_9_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(dept_r5));
    })("delete", function DepartmentsCardsViewComponent_div_3_div_57_Template_app_department_actions_delete_9_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDeleteDepartment(dept_r5));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 56)(11, "h3", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 61);
    \u0275\u0275element(18, "path", 62)(19, "circle", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 61);
    \u0275\u0275element(24, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span", 65);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 66)(28, "div", 67);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 68)(31, "button", 69);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_3_div_57_Template_button_click_31_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(dept_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 70);
    \u0275\u0275element(33, "path", 71)(34, "path", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "button", 73);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_3_div_57_Template_button_click_35_listener() {
      const dept_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDeleteDepartment(dept_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 70);
    \u0275\u0275element(37, "polyline", 74)(38, "path", 75)(39, "line", 76)(40, "line", 77);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const dept_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("department", dept_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isRTL() ? dept_r5.nameAr : dept_r5.nameEn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dept_r5.id, "#");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(dept_r5.managerName || ctx_r0.translate("departments.no_manager"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getDepartmentTypeName(dept_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", dept_r5.isActive)("inactive", !dept_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r5.isActive ? ctx_r0.translate("departments.active") : ctx_r0.translate("departments.inactive"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("departments.edit")));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("departments.delete")));
  }
}
function DepartmentsCardsViewComponent_div_3_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.no_data"));
  }
}
function DepartmentsCardsViewComponent_div_3_div_59_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_3_div_59_button_10_Template_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(page_r8 > 0 && ctx_r0.goToPage(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r8 === ctx_r0.currentPage())("dots", page_r8 === -1);
    \u0275\u0275property("disabled", page_r8 === -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8 === -1 ? "..." : page_r8, " ");
  }
}
function DepartmentsCardsViewComponent_div_3_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 83)(5, "button", 84);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_3_div_59_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.previousPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 70);
    \u0275\u0275element(7, "polyline", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 86);
    \u0275\u0275template(10, DepartmentsCardsViewComponent_div_3_div_59_button_10_Template, 2, 6, "button", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 84);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_3_div_59_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275text(12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 70);
    \u0275\u0275element(14, "polyline", 88);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5("", ctx_r0.translate("common.showing"), " ", ctx_r0.getStartRecord(), "-", ctx_r0.getEndRecord(), " ", ctx_r0.translate("common.of"), " ", ctx_r0.totalCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.next"), " ");
  }
}
function DepartmentsCardsViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "div", 19)(8, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 21);
    \u0275\u0275element(10, "circle", 22)(11, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "input", 24);
    \u0275\u0275listener("ngModelChange", function DepartmentsCardsViewComponent_div_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 25)(14, "div", 26)(15, "label");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 27);
    \u0275\u0275listener("ngModelChange", function DepartmentsCardsViewComponent_div_3_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onTypeChange($event === "" ? void 0 : +$event));
    });
    \u0275\u0275elementStart(18, "option", 28);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 30);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 33);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 34);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 35);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 26)(35, "label");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 27);
    \u0275\u0275listener("ngModelChange", function DepartmentsCardsViewComponent_div_3_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStatusChange($event === "" ? void 0 : $event === "true"));
    });
    \u0275\u0275elementStart(38, "option", 28);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 36);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 37);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 26)(45, "label");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 27);
    \u0275\u0275listener("ngModelChange", function DepartmentsCardsViewComponent_div_3_Template_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changePageSize(+$event));
    });
    \u0275\u0275elementStart(48, "option", 38);
    \u0275\u0275text(49, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 39);
    \u0275\u0275text(51, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 40);
    \u0275\u0275text(53, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 41);
    \u0275\u0275text(55, "48");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(56, "div", 42);
    \u0275\u0275template(57, DepartmentsCardsViewComponent_div_3_div_57_Template, 41, 14, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, DepartmentsCardsViewComponent_div_3_div_58_Template, 7, 2, "div", 44)(59, DepartmentsCardsViewComponent_div_3_div_59_Template, 15, 10, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.views.cards"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.searchTerm())("ngModelOptions", \u0275\u0275pureFunction0(28, _c0))("placeholder", ctx_r0.translate("departments.search_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.type"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.selectedType())("ngModelOptions", \u0275\u0275pureFunction0(29, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.all"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.3"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.4"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.department_type.6"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.status"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.selectedStatus())("ngModelOptions", \u0275\u0275pureFunction0(30, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.all"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.active"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.inactive"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.page_size"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.pageSize())("ngModelOptions", \u0275\u0275pureFunction0(31, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r0.departments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.departments().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.departments().length > 0);
  }
}
function DepartmentsCardsViewComponent_app_change_manager_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-change-manager-modal", 90);
    \u0275\u0275listener("close", function DepartmentsCardsViewComponent_app_change_manager_modal_4_Template_app_change_manager_modal_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showChangeManagerModal.set(false));
    })("managerChanged", function DepartmentsCardsViewComponent_app_change_manager_modal_4_Template_app_change_manager_modal_managerChanged_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onManagerChanged());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isOpen", ctx_r0.showChangeManagerModal());
  }
}
function DepartmentsCardsViewComponent_app_move_department_modal_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-move-department-modal", 91);
    \u0275\u0275listener("close", function DepartmentsCardsViewComponent_app_move_department_modal_5_Template_app_move_department_modal_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showMoveModal.set(false));
    })("departmentMoved", function DepartmentsCardsViewComponent_app_move_department_modal_5_Template_app_move_department_modal_departmentMoved_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentMoved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("departments", ctx_r0.departments())("isOpen", ctx_r0.showMoveModal());
  }
}
function DepartmentsCardsViewComponent_app_department_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-department-form", 92);
    \u0275\u0275listener("close", function DepartmentsCardsViewComponent_app_department_form_6_Template_app_department_form_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showEditModal.set(false));
    })("departmentUpdated", function DepartmentsCardsViewComponent_app_department_form_6_Template_app_department_form_departmentUpdated_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentUpdated());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isEdit", true)("isOpen", ctx_r0.showEditModal());
  }
}
function DepartmentsCardsViewComponent_div_7_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isRTL() ? ctx_r0.departmentToDelete().nameAr : ctx_r0.departmentToDelete().nameEn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r0.departmentToDelete().code, ")");
  }
}
function DepartmentsCardsViewComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteCancel());
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 95)(3, "div", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 97);
    \u0275\u0275element(5, "path", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 99);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 100);
    \u0275\u0275element(10, "line", 101)(11, "line", 102);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 103)(13, "p", 104);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DepartmentsCardsViewComponent_div_7_div_15_Template, 5, 2, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 106)(17, "button", 107);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_7_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteCancel());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 108);
    \u0275\u0275listener("click", function DepartmentsCardsViewComponent_div_7_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteConfirm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 70);
    \u0275\u0275element(21, "path", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.confirm_delete"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.confirm_delete"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.departmentToDelete());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
var DepartmentsCardsViewComponent = class _DepartmentsCardsViewComponent {
  departmentService;
  translationService;
  refresh = new EventEmitter();
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Pagination state
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  // Filter state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedType = signal(void 0, ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  selectedStatus = signal(void 0, ...ngDevMode ? [{ debugName: "selectedStatus" }] : []);
  selectedParentId = signal(void 0, ...ngDevMode ? [{ debugName: "selectedParentId" }] : []);
  // Modal states
  showChangeManagerModal = signal(false, ...ngDevMode ? [{ debugName: "showChangeManagerModal" }] : []);
  showMoveModal = signal(false, ...ngDevMode ? [{ debugName: "showMoveModal" }] : []);
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  selectedDepartment = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartment" }] : []);
  departmentToDelete = signal(null, ...ngDevMode ? [{ debugName: "departmentToDelete" }] : []);
  deleteModalData = computed(() => ({
    title: this.translate("departments.delete"),
    message: this.translate("departments.confirm_delete"),
    confirmText: this.translate("common.delete"),
    cancelText: this.translate("common.cancel"),
    type: "delete"
  }), ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  constructor(departmentService, translationService) {
    this.departmentService = departmentService;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.loadDepartments();
  }
  loadDepartments() {
    this.loading.set(true);
    this.error.set(null);
    this.departmentService.getDepartments(this.currentPage(), this.pageSize(), this.searchTerm() || void 0, this.selectedType(), this.selectedStatus(), this.selectedParentId()).subscribe({
      next: (response) => {
        if (response.success) {
          this.departments.set(response.data.items);
          this.totalCount.set(response.data.totalCount);
          this.totalPages.set(Math.ceil(response.data.totalCount / this.pageSize()));
        } else {
          this.error.set(response.message || "Failed to load departments");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load departments");
        this.loading.set(false);
        console.error("Error loading departments:", err);
      }
    });
  }
  // Pagination methods
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      this.loadDepartments();
    }
  }
  changePageSize(newSize) {
    this.pageSize.set(newSize);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.goToPage(this.currentPage() + 1);
    }
  }
  previousPage() {
    if (this.currentPage() > 1) {
      this.goToPage(this.currentPage() - 1);
    }
  }
  // Search and filter methods
  onSearchChange(term) {
    this.searchTerm.set(term);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  onTypeChange(type2) {
    this.selectedType.set(type2);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  onStatusChange(status) {
    this.selectedStatus.set(status);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  onParentChange(parentId) {
    this.selectedParentId.set(parentId);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  // Helper methods for pagination display
  getPageNumbers() {
    const total = this.totalPages();
    const current = this.currentPage();
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
      range.push(i);
    }
    if (current - delta > 2) {
      rangeWithDots.push(1, -1);
    } else {
      rangeWithDots.push(1);
    }
    rangeWithDots.push(...range);
    if (current + delta < total - 1) {
      rangeWithDots.push(-1, total);
    } else if (total > 1) {
      rangeWithDots.push(total);
    }
    return rangeWithDots;
  }
  getStartRecord() {
    return (this.currentPage() - 1) * this.pageSize() + 1;
  }
  getEndRecord() {
    return Math.min(this.currentPage() * this.pageSize(), this.totalCount());
  }
  openChangeManagerModal(department) {
    this.selectedDepartment.set(department);
    this.showChangeManagerModal.set(true);
  }
  openMoveModal(department) {
    this.selectedDepartment.set(department);
    this.showMoveModal.set(true);
  }
  openEditModal(department) {
    this.selectedDepartment.set(department);
    this.showEditModal.set(true);
  }
  onManagerChanged() {
    this.showChangeManagerModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentMoved() {
    this.showMoveModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentUpdated() {
    this.showEditModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentDeleted() {
    this.loadDepartments();
    this.refresh.emit();
  }
  confirmDeleteDepartment(department) {
    this.departmentToDelete.set(department);
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    if (this.departmentToDelete()) {
      this.deleteDepartment(this.departmentToDelete());
      this.showDeleteModal.set(false);
      this.departmentToDelete.set(null);
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.departmentToDelete.set(null);
  }
  deleteDepartment(department) {
    this.departmentService.deleteDepartment(department.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadDepartments();
          this.refresh.emit();
        } else {
          console.error("Failed to delete department:", response.message);
        }
      },
      error: (err) => {
        console.error("Error deleting department:", err);
      }
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getDepartmentTypeName(type2) {
    const typeKey = `departments.department_type.${type2}`;
    return this.translate(typeKey);
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.isRTL() ? "ar-SA" : "en-US");
  }
  getDepartmentIcon(type2) {
    switch (type2) {
      case 1:
        return "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
      // Star icon
      case 2:
        return "M3 3h18v18H3V3zm5 5h8M8 12h8";
      // Board icon
      case 3:
        return "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z";
      // Person icon
      case 4:
        return "M3 21h18M5 21V7l8-4v18M13 9h4v12";
      // Building icon
      case 5:
        return "M3 3h18v18H3V3zM8 12h8M12 8v8";
      // Grid icon
      case 6:
        return "M4 6h16M4 12h16M4 18h16";
      // List icon
      case 7:
        return "M9 11H5a2 2 0 0 0-2 2v7h18v-7a2 2 0 0 0-2-2h-4M9 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M9 11h6";
      // Box icon
      default:
        return "M3 3h18v18H3V3zM8 12h8M12 8v8";
    }
  }
  static \u0275fac = function DepartmentsCardsViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsCardsViewComponent)(\u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsCardsViewComponent, selectors: [["app-departments-cards-view"]], outputs: { refresh: "refresh" }, standalone: false, decls: 8, vars: 9, consts: [[1, "cards-view-container"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "cards-content", 4, "ngIf"], [3, "department", "isOpen", "close", "managerChanged", 4, "ngIf"], [3, "department", "departments", "isOpen", "close", "departmentMoved", 4, "ngIf"], [3, "department", "isEdit", "isOpen", "close", "departmentUpdated", 4, "ngIf"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn", "btn-primary", 3, "click"], [1, "cards-content"], [1, "cards-header"], [1, "filters-section"], [1, "search-bar"], [1, "search-input-wrapper"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["type", "text", 1, "search-input", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [1, "filters-row"], [1, "filter-group"], [1, "filter-select", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["value", "", "selected", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "true"], ["value", "false"], ["value", "6", "selected", ""], ["value", "12"], ["value", "24"], ["value", "48"], [1, "cards-grid"], ["class", "department-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [1, "department-card"], [1, "card-header"], [1, "card-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], [1, "options-menu"], [3, "changeManager", "move", "edit", "delete", "department"], [1, "card-content"], [1, "card-title"], [1, "card-id"], [1, "card-meta"], [1, "meta-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "meta-icon"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["d", "M3 3h18v18H3V3zM8 12h8M12 8v8"], [1, "department-type"], [1, "card-footer"], [1, "status-badge"], [1, "card-actions"], [1, "action-btn", "edit-btn", 3, "click", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "action-btn", "delete-btn", 3, "click", "title"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "empty-icon"], ["d", "M3 3h18v18H3zM8 12h8M12 8v8"], [1, "pagination-section"], [1, "pagination-info"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], [1, "page-numbers"], ["class", "page-btn", 3, "active", "dots", "disabled", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-btn", 3, "click", "disabled"], [3, "close", "managerChanged", "department", "isOpen"], [3, "close", "departmentMoved", "department", "departments", "isOpen"], [3, "close", "departmentUpdated", "department", "isEdit", "isOpen"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], [1, "delete-modal-header"], [1, "delete-modal-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "delete-modal-body"], [1, "delete-modal-message"], ["class", "delete-modal-department", 4, "ngIf"], [1, "delete-modal-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "delete-modal-department"], [1, "department-code"]], template: function DepartmentsCardsViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, DepartmentsCardsViewComponent_div_1_Template, 4, 1, "div", 1)(2, DepartmentsCardsViewComponent_div_2_Template, 11, 3, "div", 2)(3, DepartmentsCardsViewComponent_div_3_Template, 60, 32, "div", 3)(4, DepartmentsCardsViewComponent_app_change_manager_modal_4_Template, 1, 2, "app-change-manager-modal", 4)(5, DepartmentsCardsViewComponent_app_move_department_modal_5_Template, 1, 3, "app-move-department-modal", 5)(6, DepartmentsCardsViewComponent_app_department_form_6_Template, 1, 3, "app-department-form", 6)(7, DepartmentsCardsViewComponent_div_7_Template, 23, 5, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showChangeManagerModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMoveModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, DepartmentFormComponent, DepartmentActionsComponent, ChangeManagerModalComponent, MoveDepartmentModalComponent], styles: ['\n\n.cards-view-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  overflow: visible;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 0.75rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 0.75rem;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1rem;\n}\n.cards-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n.cards-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e5e7eb;\n}\n.cards-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #09365F;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.cards-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.filters-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: end;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 120px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.filter-select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #158638;\n  border-color: #158638;\n  color: white;\n}\n.page-btn.dots[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  cursor: default;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n  padding: 0.5rem 0;\n  overflow: visible;\n}\n.department-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n  min-height: 160px;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.department-card[_ngcontent-%COMP%]:hover {\n  border-color: #158638;\n  box-shadow: 0 2px 8px rgba(21, 134, 56, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.card-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  border-radius: 8px;\n  color: white;\n  flex-shrink: 0;\n}\n.options-menu[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 0.75rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-id[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin-bottom: 0.75rem;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.8rem;\n}\n.meta-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.department-type[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #158638;\n  text-transform: capitalize;\n}\n.card-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: transparent;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  color: #158638;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f0fdf4;\n  color: #0f6b2a;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fef2f2;\n  color: #b91c1c;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 0.75rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .cards-view-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .filters-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: stretch;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .pagination-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    text-align: center;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 0.75rem;\n  }\n  .department-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    min-height: 140px;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .department-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    min-height: 130px;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n.cards-view-container.rtl[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.cards-view-container.rtl[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.cards-view-container.rtl[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n}\n.btn.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.btn.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(21, 134, 56, 0.3);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.department-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.3s ease-out;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.department-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.delete-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.delete-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 480px;\n  width: 90%;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.delete-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  background: #26667F;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n.delete-modal-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  color: white;\n  flex-shrink: 0;\n}\n.delete-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  flex: 1;\n  order: 1;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.delete-modal-body[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.delete-modal-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  color: #4b5563;\n  font-size: 1.125rem;\n  line-height: 1.6;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.delete-modal-department[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.delete-modal-department[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.department-code[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.delete-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #c82333;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.rtl[_ngcontent-%COMP%]   .delete-modal-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.rtl[_ngcontent-%COMP%]   .delete-modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.rtl[_ngcontent-%COMP%]   .delete-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  order: 2;\n}\n.rtl[_ngcontent-%COMP%]   .delete-modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.rtl[_ngcontent-%COMP%]   .delete-modal-department[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=departments-cards-view.component-WLPTFI22.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsCardsViewComponent, [{
    type: Component,
    args: [{ selector: "app-departments-cards-view", standalone: false, template: `<div class="cards-view-container" [class.rtl]="isRTL()">\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('common.loading') }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error() && !loading()" class="error-container">\r
    <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <circle cx="12" cy="12" r="10"/>\r
      <line x1="15" y1="9" x2="9" y2="15"/>\r
      <line x1="9" y1="9" x2="15" y2="15"/>\r
    </svg>\r
    <h3>{{ translate('common.error') }}</h3>\r
    <p>{{ error() }}</p>\r
    <button class="btn btn-primary" (click)="loadDepartments()">\r
      {{ translate('common.refresh') }}\r
    </button>\r
  </div>\r
\r
  <!-- Cards Content -->\r
  <div *ngIf="!loading() && !error()" class="cards-content">\r
    <div class="cards-header">\r
      <h2>{{ translate('departments.title') }}</h2>\r
      <p>{{ translate('departments.views.cards') }}</p>\r
    </div>\r
\r
    <!-- Search and Filters -->\r
    <div class="filters-section">\r
      <div class="search-bar">\r
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
            [placeholder]="translate('departments.search_placeholder')">\r
        </div>\r
      </div>\r
\r
      <div class="filters-row">\r
        <div class="filter-group">\r
          <label>{{ translate('departments.type') }}</label>\r
          <select \r
            [ngModel]="selectedType()"\r
            (ngModelChange)="onTypeChange($event === '' ? undefined : +$event)"\r
            [ngModelOptions]="{standalone: true}"\r
            class="filter-select">\r
            <option value="" selected>{{ translate('common.all') }}</option>\r
            <option value="0">{{ translate('departments.department_type.0') }}</option>\r
            <option value="1">{{ translate('departments.department_type.1') }}</option>\r
            <option value="2">{{ translate('departments.department_type.2') }}</option>\r
            <option value="3">{{ translate('departments.department_type.3') }}</option>\r
            <option value="4">{{ translate('departments.department_type.4') }}</option>\r
            <option value="5">{{ translate('departments.department_type.5') }}</option>\r
            <option value="6">{{ translate('departments.department_type.6') }}</option>\r
          </select>\r
        </div>\r
\r
        <div class="filter-group">\r
          <label>{{ translate('departments.status') }}</label>\r
          <select \r
            [ngModel]="selectedStatus()"\r
            (ngModelChange)="onStatusChange($event === '' ? undefined : $event === 'true')"\r
            [ngModelOptions]="{standalone: true}"\r
            class="filter-select">\r
            <option value="" selected>{{ translate('common.all') }}</option>\r
            <option value="true">{{ translate('departments.active') }}</option>\r
            <option value="false">{{ translate('departments.inactive') }}</option>\r
          </select>\r
        </div>\r
\r
        <div class="filter-group">\r
          <label>{{ translate('common.page_size') }}</label>\r
          <select \r
            [ngModel]="pageSize()"\r
            (ngModelChange)="changePageSize(+$event)"\r
            [ngModelOptions]="{standalone: true}"\r
            class="filter-select">\r
            <option value="6" selected>6</option>\r
            <option value="12">12</option>\r
            <option value="24">24</option>\r
            <option value="48">48</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="cards-grid">\r
      <div *ngFor="let dept of departments()" class="department-card">\r
        <div class="card-header">\r
          <div class="card-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <rect x="3" y="3" width="7" height="7" rx="1"></rect>\r
              <rect x="14" y="3" width="7" height="7" rx="1"></rect>\r
              <rect x="3" y="14" width="7" height="7" rx="1"></rect>\r
              <rect x="14" y="14" width="7" height="7" rx="1"></rect>\r
            </svg>\r
            \r
          </div>\r
          \r
          <div class="options-menu">\r
            <app-department-actions\r
              [department]="dept"\r
              (changeManager)="openChangeManagerModal(dept)"\r
              (move)="openMoveModal(dept)"\r
              (edit)="openEditModal(dept)"\r
              (delete)="confirmDeleteDepartment(dept)">\r
            </app-department-actions>\r
          </div>\r
        </div>\r
\r
        <div class="card-content">\r
          <h3 class="card-title">{{ isRTL() ? dept.nameAr : dept.nameEn }}</h3>\r
          <div class="card-id">{{ dept.id }}#</div>\r
          \r
          <div class="card-meta">\r
            <div class="meta-item">\r
              <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>\r
                <circle cx="12" cy="7" r="4"/>\r
              </svg>\r
              <span>{{ dept.managerName || translate('departments.no_manager') }}</span>\r
            </div>\r
            <div class="meta-item">\r
              <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M3 3h18v18H3V3zM8 12h8M12 8v8"/>\r
              </svg>\r
              <span class="department-type">{{ getDepartmentTypeName(dept.type) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="card-footer">\r
          <div class="status-badge" [class.active]="dept.isActive" [class.inactive]="!dept.isActive">\r
            {{ dept.isActive ? translate('departments.active') : translate('departments.inactive') }}\r
          </div>\r
          <div class="card-actions">\r
                          <button class="action-btn edit-btn" (click)="openEditModal(dept)" title="{{ translate('departments.edit') }}">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
                </svg>\r
              </button>\r
                          <button class="action-btn delete-btn" (click)="confirmDeleteDepartment(dept)" title="{{ translate('departments.delete') }}">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3,6 5,6 21,6"/>\r
                  <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>\r
                  <line x1="10" y1="11" x2="10" y2="17"/>\r
                  <line x1="14" y1="11" x2="14" y2="17"/>\r
                </svg>\r
              </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="departments().length === 0" class="empty-state">\r
      <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M3 3h18v18H3zM8 12h8M12 8v8"/>\r
      </svg>\r
      <h3>{{ translate('departments.title') }}</h3>\r
      <p>{{ translate('common.no_data') }}</p>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="departments().length > 0" class="pagination-section">\r
      <div class="pagination-info">\r
        <span>{{ translate('common.showing') }} {{ getStartRecord() }}-{{ getEndRecord() }} {{ translate('common.of') }} {{ totalCount() }}</span>\r
      </div>\r
      \r
      <div class="pagination-controls">\r
        <button \r
          class="pagination-btn"\r
          [disabled]="currentPage() === 1"\r
          (click)="previousPage()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('common.previous') }}\r
        </button>\r
\r
        <div class="page-numbers">\r
          <button \r
            *ngFor="let page of getPageNumbers()"\r
            class="page-btn"\r
            [class.active]="page === currentPage()"\r
            [class.dots]="page === -1"\r
            [disabled]="page === -1"\r
            (click)="page > 0 && goToPage(page)">\r
            {{ page === -1 ? '...' : page }}\r
          </button>\r
        </div>\r
\r
        <button \r
          class="pagination-btn"\r
          [disabled]="currentPage() === totalPages()"\r
          (click)="nextPage()">\r
          {{ translate('common.next') }}\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Modals -->\r
  <app-change-manager-modal\r
    *ngIf="showChangeManagerModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isOpen]="showChangeManagerModal()"\r
    (close)="showChangeManagerModal.set(false)"\r
    (managerChanged)="onManagerChanged()">\r
  </app-change-manager-modal>\r
\r
  <app-move-department-modal\r
    *ngIf="showMoveModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [departments]="departments()"\r
    [isOpen]="showMoveModal()"\r
    (close)="showMoveModal.set(false)"\r
    (departmentMoved)="onDepartmentMoved()">\r
  </app-move-department-modal>\r
\r
  <app-department-form\r
    *ngIf="showEditModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isEdit]="true"\r
    [isOpen]="showEditModal()"\r
    (close)="showEditModal.set(false)"\r
    (departmentUpdated)="onDepartmentUpdated()">\r
  </app-department-form>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <div *ngIf="showDeleteModal()" class="delete-modal-overlay" (click)="onDeleteCancel()">\r
    <div class="delete-modal" (click)="$event.stopPropagation()">\r
      <div class="delete-modal-header">\r
        <div class="delete-modal-icon">\r
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>\r
          </svg>\r
        </div>\r
        <h3>{{ translate('departments.confirm_delete') }}</h3>\r
        <button class="close-btn" (click)="onDeleteCancel()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"/>\r
            <line x1="6" y1="6" x2="18" y2="18"/>\r
          </svg>\r
        </button>\r
      </div>\r
      <div class="delete-modal-body">\r
        <p class="delete-modal-message">{{ translate('departments.confirm_delete') }}</p>\r
        <div class="delete-modal-department" *ngIf="departmentToDelete()">\r
          <strong>{{ isRTL() ? departmentToDelete()!.nameAr : departmentToDelete()!.nameEn }}</strong>\r
          <span class="department-code">({{ departmentToDelete()!.code }})</span>\r
        </div>\r
      </div>\r
      <div class="delete-modal-actions">\r
        <button class="btn btn-secondary" (click)="onDeleteCancel()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        <button class="btn btn-danger" (click)="onDeleteConfirm()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>\r
          </svg>\r
          {{ translate('common.delete') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/departments-cards-view/departments-cards-view.component.css */\n.cards-view-container {\n  padding: 1rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  overflow: visible;\n}\n.loading-container,\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  text-align: center;\n}\n.loading-spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e2e8f0;\n  border-top: 3px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 0.75rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container .error-icon {\n  color: #ef4444;\n  margin-bottom: 0.75rem;\n}\n.error-container h3 {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container p {\n  color: #6b7280;\n  margin-bottom: 1rem;\n}\n.cards-header [dir=rtl] {\n  text-align: right;\n}\n.cards-header {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  border-bottom: 1px solid #e5e7eb;\n}\n.cards-header h2 {\n  color: #09365F;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.cards-header p {\n  color: #6b7280;\n  font-size: 1rem;\n}\n.filters-section {\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.search-bar {\n  margin-bottom: 1rem;\n}\n.search-input-wrapper {\n  position: relative;\n  max-width: 400px;\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.filters-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  align-items: end;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  min-width: 120px;\n}\n.filter-group label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n.filter-select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  background: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.filter-select:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.pagination-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.page-btn:hover:not(:disabled):not(.active) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.page-btn.active {\n  background: #158638;\n  border-color: #158638;\n  color: white;\n}\n.page-btn.dots {\n  border: none;\n  background: none;\n  cursor: default;\n}\n.page-btn:disabled {\n  cursor: not-allowed;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n  padding: 0.5rem 0;\n  overflow: visible;\n}\n.department-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 1rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  position: relative;\n  min-height: 160px;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.department-card:hover {\n  border-color: #158638;\n  box-shadow: 0 2px 8px rgba(21, 134, 56, 0.15);\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.card-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  border-radius: 8px;\n  color: white;\n  flex-shrink: 0;\n}\n.options-menu {\n  margin-left: auto;\n}\n.card-content {\n  flex: 1;\n  margin-bottom: 0.75rem;\n}\n.card-title {\n  color: #111827;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  line-height: 1.3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card-id {\n  color: #6b7280;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin-bottom: 0.75rem;\n}\n.card-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.8rem;\n}\n.meta-icon {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.department-type {\n  font-weight: 500;\n  color: #158638;\n  text-transform: capitalize;\n}\n.card-footer {\n  margin-top: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n}\n.card-actions {\n  display: flex;\n  gap: 0.25rem;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: transparent;\n}\n.edit-btn {\n  color: #158638;\n}\n.edit-btn:hover {\n  background-color: #f0fdf4;\n  color: #0f6b2a;\n}\n.delete-btn {\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background-color: #fef2f2;\n  color: #b91c1c;\n}\n.status-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1.5rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #9ca3af;\n  margin-bottom: 0.75rem;\n}\n.empty-state h3 {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  color: #6b7280;\n}\n@media (max-width: 768px) {\n  .cards-view-container {\n    padding: 0.75rem;\n  }\n  .filters-section {\n    padding: 0.75rem;\n  }\n  .filters-row {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: stretch;\n  }\n  .filter-group {\n    min-width: auto;\n  }\n  .pagination-section {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    text-align: center;\n  }\n  .pagination-controls {\n    justify-content: center;\n  }\n  .page-numbers {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .cards-grid {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 0.75rem;\n  }\n  .department-card {\n    padding: 0.75rem;\n    min-height: 140px;\n  }\n  .card-icon {\n    width: 32px;\n    height: 32px;\n  }\n  .card-title {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .cards-grid {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .department-card {\n    padding: 0.75rem;\n    min-height: 130px;\n  }\n  .card-header {\n    flex-direction: column;\n    gap: 0.75rem;\n    align-items: flex-start;\n  }\n  .card-actions {\n    align-self: flex-end;\n  }\n}\n.cards-view-container.rtl .card-header {\n  flex-direction: row-reverse;\n}\n.cards-view-container.rtl .card-footer {\n  flex-direction: row-reverse;\n}\n.cards-view-container.rtl .meta-item {\n  flex-direction: row-reverse;\n}\n.btn {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n}\n.btn.ltr,\nhtml[dir=ltr] .btn {\n  font-family: "Poppins", sans-serif;\n}\n.btn.rtl,\nhtml[dir=rtl] .btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(21, 134, 56, 0.3);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.department-card {\n  animation: fadeInUp 0.3s ease-out;\n}\n.department-card:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.department-card:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.department-card:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.department-card:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.department-card:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.department-card:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.delete-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.delete-modal {\n  background: white;\n  border-radius: 16px;\n  padding: 2rem;\n  max-width: 480px;\n  width: 90%;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.delete-modal-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  background: #26667F;\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n.delete-modal-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  color: white;\n  flex-shrink: 0;\n}\n.delete-modal-header h3 {\n  margin: 0;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  flex: 1;\n  order: 1;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n}\n.delete-modal-body {\n  margin-bottom: 2rem;\n}\n.delete-modal-message {\n  margin: 0 0 1rem 0;\n  color: #4b5563;\n  font-size: 1.125rem;\n  line-height: 1.6;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.delete-modal-department {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.delete-modal-department strong {\n  color: #1f2937;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.department-code {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.delete-modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n}\n.btn-secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-secondary:hover {\n  background-color: #e5e7eb;\n  border-color: #9ca3af;\n}\n.btn-danger {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-danger:hover {\n  background-color: #c82333;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.rtl .delete-modal-actions {\n  justify-content: flex-start;\n}\n.rtl .delete-modal-header {\n  flex-direction: row-reverse;\n}\n.rtl .delete-modal-header h3 {\n  order: 2;\n}\n.rtl .delete-modal-header .close-btn {\n  order: 1;\n}\n.rtl .delete-modal-department {\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=departments-cards-view.component-WLPTFI22.css.map */\n'] }]
  }], () => [{ type: DepartmentService }, { type: TranslationService }], { refresh: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsCardsViewComponent, { className: "DepartmentsCardsViewComponent", filePath: "src/app/components/departments/departments-cards-view/departments-cards-view.component.ts", lineNumber: 18 });
})();

// src/app/components/departments/departments-table-view/departments-table-view.component.ts
function DepartmentsTableViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function DepartmentsTableViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "circle", 13)(3, "line", 14)(4, "line", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadDepartments());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.refresh"), " ");
  }
}
function DepartmentsTableViewComponent_div_3_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37)(1, "td", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 41);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 42);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 43)(24, "app-department-actions", 44);
    \u0275\u0275listener("changeManager", function DepartmentsTableViewComponent_div_3_tr_60_Template_app_department_actions_changeManager_24_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChangeManagerModal(dept_r6));
    })("move", function DepartmentsTableViewComponent_div_3_tr_60_Template_app_department_actions_move_24_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMoveModal(dept_r6));
    })("edit", function DepartmentsTableViewComponent_div_3_tr_60_Template_app_department_actions_edit_24_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(dept_r6));
    })("delete", function DepartmentsTableViewComponent_div_3_tr_60_Template_app_department_actions_delete_24_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDeleteDepartment(dept_r6));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r6.nameAr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r6.nameEn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getDepartmentTypeName(dept_r6.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r6.parentId ? "#" + dept_r6.parentId : ctx_r0.translate("departments.no_parent"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dept_r6.managerName || ctx_r0.translate("departments.no_manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r6.employeesCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(dept_r6.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", dept_r6.isActive)("inactive", !dept_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r6.isActive ? ctx_r0.translate("departments.active") : ctx_r0.translate("departments.inactive"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("department", dept_r6);
  }
}
function DepartmentsTableViewComponent_div_3_div_61_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_div_61_button_10_Template_button_click_0_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(page_r9 !== -1 && ctx_r0.onPageChange(page_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", page_r9 === ctx_r0.currentPage())("ellipsis", page_r9 === -1);
    \u0275\u0275property("disabled", page_r9 === -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r9 === -1 ? "..." : page_r9, " ");
  }
}
function DepartmentsTableViewComponent_div_3_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 47)(5, "button", 48);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_div_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 49);
    \u0275\u0275element(7, "polyline", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275template(10, DepartmentsTableViewComponent_div_3_div_61_button_10_Template, 2, 6, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_div_61_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275text(12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 49);
    \u0275\u0275element(14, "polyline", 53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate5("", ctx_r0.translate("common.showing"), " ", (ctx_r0.currentPage() - 1) * ctx_r0.pageSize() + 1, "-", ctx_r0.Math.min(ctx_r0.currentPage() * ctx_r0.pageSize(), ctx_r0.totalCount()), " ", ctx_r0.translate("common.of"), " ", ctx_r0.totalCount());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.getTotalPages());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.next"), " ");
  }
}
function DepartmentsTableViewComponent_div_3_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.no_data"));
  }
}
function DepartmentsTableViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20)(8, "label", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 22, 0);
    \u0275\u0275listener("change", function DepartmentsTableViewComponent_div_3_Template_select_change_10_listener() {
      \u0275\u0275restoreView(_r3);
      const pageSizeSelect_r4 = \u0275\u0275reference(11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange(+pageSizeSelect_r4.value));
    });
    \u0275\u0275elementStart(12, "option", 23);
    \u0275\u0275text(13, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 24);
    \u0275\u0275text(15, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 25);
    \u0275\u0275text(17, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 26);
    \u0275\u0275text(19, "48");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 27)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 28)(24, "table", 29)(25, "thead")(26, "tr")(27, "th", 30);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_Template_th_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSort("code"));
    });
    \u0275\u0275elementStart(28, "div", 31);
    \u0275\u0275text(29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 32);
    \u0275\u0275element(31, "polyline", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "th", 30);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_Template_th_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSort("nameAr"));
    });
    \u0275\u0275elementStart(33, "div", 31);
    \u0275\u0275text(34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 32);
    \u0275\u0275element(36, "polyline", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "th", 30);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_Template_th_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSort("nameEn"));
    });
    \u0275\u0275elementStart(38, "div", 31);
    \u0275\u0275text(39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 32);
    \u0275\u0275element(41, "polyline", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 30);
    \u0275\u0275listener("click", function DepartmentsTableViewComponent_div_3_Template_th_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSort("createdAt"));
    });
    \u0275\u0275elementStart(51, "div", 31);
    \u0275\u0275text(52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 32);
    \u0275\u0275element(54, "polyline", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "tbody");
    \u0275\u0275template(60, DepartmentsTableViewComponent_div_3_tr_60_Template, 25, 14, "tr", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, DepartmentsTableViewComponent_div_3_div_61_Template, 15, 10, "div", 35)(62, DepartmentsTableViewComponent_div_3_div_62_Template, 7, 2, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.views.table"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("common.page_size"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.pageSize());
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate5("", ctx_r0.translate("common.showing"), " ", (ctx_r0.currentPage() - 1) * ctx_r0.pageSize() + 1, "-", ctx_r0.Math.min(ctx_r0.currentPage() * ctx_r0.pageSize(), ctx_r0.totalCount()), " ", ctx_r0.translate("common.of"), " ", ctx_r0.totalCount());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("departments.code"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("asc", ctx_r0.sortField() === "code" && ctx_r0.sortDirection() === "asc")("desc", ctx_r0.sortField() === "code" && ctx_r0.sortDirection() === "desc");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("departments.name_ar"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("asc", ctx_r0.sortField() === "nameAr" && ctx_r0.sortDirection() === "asc")("desc", ctx_r0.sortField() === "nameAr" && ctx_r0.sortDirection() === "desc");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("departments.name_en"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("asc", ctx_r0.sortField() === "nameEn" && ctx_r0.sortDirection() === "asc")("desc", ctx_r0.sortField() === "nameEn" && ctx_r0.sortDirection() === "desc");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.parent"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.manager"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.employees_count"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("departments.created_at"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("asc", ctx_r0.sortField() === "createdAt" && ctx_r0.sortDirection() === "asc")("desc", ctx_r0.sortField() === "createdAt" && ctx_r0.sortDirection() === "desc");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.departments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalCount() > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.departments().length === 0);
  }
}
function DepartmentsTableViewComponent_app_change_manager_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-change-manager-modal", 58);
    \u0275\u0275listener("close", function DepartmentsTableViewComponent_app_change_manager_modal_4_Template_app_change_manager_modal_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showChangeManagerModal.set(false));
    })("managerChanged", function DepartmentsTableViewComponent_app_change_manager_modal_4_Template_app_change_manager_modal_managerChanged_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onManagerChanged());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isOpen", ctx_r0.showChangeManagerModal());
  }
}
function DepartmentsTableViewComponent_app_move_department_modal_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-move-department-modal", 59);
    \u0275\u0275listener("close", function DepartmentsTableViewComponent_app_move_department_modal_5_Template_app_move_department_modal_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showMoveModal.set(false));
    })("departmentMoved", function DepartmentsTableViewComponent_app_move_department_modal_5_Template_app_move_department_modal_departmentMoved_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentMoved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("departments", ctx_r0.departments())("isOpen", ctx_r0.showMoveModal());
  }
}
function DepartmentsTableViewComponent_app_department_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-department-form", 60);
    \u0275\u0275listener("close", function DepartmentsTableViewComponent_app_department_form_6_Template_app_department_form_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showEditModal.set(false));
    })("departmentUpdated", function DepartmentsTableViewComponent_app_department_form_6_Template_app_department_form_departmentUpdated_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentUpdated());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isEdit", true)("isOpen", ctx_r0.showEditModal());
  }
}
function DepartmentsTableViewComponent_app_confirmation_modal_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirmation-modal", 61);
    \u0275\u0275listener("confirm", function DepartmentsTableViewComponent_app_confirmation_modal_7_Template_app_confirmation_modal_confirm_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteConfirm());
    })("cancel", function DepartmentsTableViewComponent_app_confirmation_modal_7_Template_app_confirmation_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.deleteModalData())("isRTL", ctx_r0.isRTL());
  }
}
var DepartmentsTableViewComponent = class _DepartmentsTableViewComponent {
  departmentService;
  translationService;
  refresh = new EventEmitter();
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Pagination
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  // Sorting
  sortField = signal("createdAt", ...ngDevMode ? [{ debugName: "sortField" }] : []);
  sortDirection = signal("desc", ...ngDevMode ? [{ debugName: "sortDirection" }] : []);
  // Modal states
  showChangeManagerModal = signal(false, ...ngDevMode ? [{ debugName: "showChangeManagerModal" }] : []);
  showMoveModal = signal(false, ...ngDevMode ? [{ debugName: "showMoveModal" }] : []);
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  selectedDepartment = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartment" }] : []);
  departmentToDelete = signal(null, ...ngDevMode ? [{ debugName: "departmentToDelete" }] : []);
  // Math object for template
  Math = Math;
  // Computed properties
  deleteModalData = computed(() => ({
    title: this.translate("departments.delete"),
    message: this.translate("departments.confirm_delete"),
    confirmText: this.translate("common.delete"),
    cancelText: this.translate("common.cancel"),
    type: "delete"
  }), ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  constructor(departmentService, translationService) {
    this.departmentService = departmentService;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.loadDepartments();
  }
  loadDepartments() {
    this.loading.set(true);
    this.error.set(null);
    this.departmentService.getDepartments(this.currentPage(), this.pageSize()).subscribe({
      next: (response) => {
        if (response.success) {
          this.departments.set(response.data.items);
          this.totalCount.set(response.data.totalCount);
        } else {
          this.error.set(response.message || "Failed to load departments");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load departments");
        this.loading.set(false);
        console.error("Error loading departments:", err);
      }
    });
  }
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadDepartments();
  }
  onPageSizeChange(size) {
    this.pageSize.set(size);
    this.currentPage.set(1);
    this.loadDepartments();
  }
  onSort(field) {
    if (this.sortField() === field) {
      this.sortDirection.update((direction) => direction === "asc" ? "desc" : "asc");
    } else {
      this.sortField.set(field);
      this.sortDirection.set("asc");
    }
    this.loadDepartments();
  }
  openChangeManagerModal(department) {
    this.selectedDepartment.set(department);
    this.showChangeManagerModal.set(true);
  }
  openMoveModal(department) {
    this.selectedDepartment.set(department);
    this.showMoveModal.set(true);
  }
  openEditModal(department) {
    this.selectedDepartment.set(department);
    this.showEditModal.set(true);
  }
  onManagerChanged() {
    this.showChangeManagerModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentMoved() {
    this.showMoveModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentUpdated() {
    this.showEditModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentDeleted() {
    this.loadDepartments();
    this.refresh.emit();
  }
  confirmDeleteDepartment(department) {
    this.departmentToDelete.set(department);
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    if (this.departmentToDelete()) {
      this.departmentService.deleteDepartment(this.departmentToDelete().id).subscribe({
        next: (response) => {
          if (response.success) {
            this.showDeleteModal.set(false);
            this.departmentToDelete.set(null);
            this.loadDepartments();
            this.refresh.emit();
          } else {
            console.error("Failed to delete department:", response.message);
          }
        },
        error: (err) => {
          console.error("Error deleting department:", err);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.departmentToDelete.set(null);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getDepartmentTypeName(type2) {
    const typeKey = `departments.department_type.${type2}`;
    return this.translate(typeKey);
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.isRTL() ? "ar-EG" : "en-US");
  }
  getTotalPages() {
    return Math.ceil(this.totalCount() / this.pageSize());
  }
  getPageNumbers() {
    const totalPages = this.getTotalPages();
    const current = this.currentPage();
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (current >= totalPages - 3) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    return pages;
  }
  static \u0275fac = function DepartmentsTableViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsTableViewComponent)(\u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsTableViewComponent, selectors: [["app-departments-table-view"]], outputs: { refresh: "refresh" }, standalone: false, decls: 8, vars: 9, consts: [["pageSizeSelect", ""], [1, "table-view-container"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "table-content", 4, "ngIf"], [3, "department", "isOpen", "close", "managerChanged", 4, "ngIf"], [3, "department", "departments", "isOpen", "close", "departmentMoved", 4, "ngIf"], [3, "department", "isEdit", "isOpen", "close", "departmentUpdated", 4, "ngIf"], [3, "data", "isRTL", "confirm", "cancel", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn", "btn-primary", 3, "click"], [1, "table-content"], [1, "table-header"], [1, "table-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "change", "value"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "table-info"], [1, "table-wrapper"], [1, "departments-table"], [1, "sortable", 3, "click"], [1, "th-content"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "sort-icon"], ["points", "6,9 12,15 18,9"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "table-row"], [1, "code-cell"], [1, "code-badge"], [1, "type-badge"], [1, "employees-badge"], [1, "status-badge"], [1, "actions-cell"], [3, "changeManager", "move", "edit", "delete", "department"], [1, "pagination"], [1, "pagination-info"], [1, "pagination-controls"], [1, "pagination-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "page-numbers"], ["class", "page-btn", 3, "active", "ellipsis", "disabled", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-btn", 3, "click", "disabled"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "empty-icon"], ["d", "M3 3h18v18H3zM8 12h8M12 8v8"], [3, "close", "managerChanged", "department", "isOpen"], [3, "close", "departmentMoved", "department", "departments", "isOpen"], [3, "close", "departmentUpdated", "department", "isEdit", "isOpen"], [3, "confirm", "cancel", "data", "isRTL"]], template: function DepartmentsTableViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, DepartmentsTableViewComponent_div_1_Template, 4, 1, "div", 2)(2, DepartmentsTableViewComponent_div_2_Template, 11, 3, "div", 3)(3, DepartmentsTableViewComponent_div_3_Template, 63, 38, "div", 4)(4, DepartmentsTableViewComponent_app_change_manager_modal_4_Template, 1, 2, "app-change-manager-modal", 5)(5, DepartmentsTableViewComponent_app_move_department_modal_5_Template, 1, 3, "app-move-department-modal", 6)(6, DepartmentsTableViewComponent_app_department_form_6_Template, 1, 3, "app-department-form", 7)(7, DepartmentsTableViewComponent_app_confirmation_modal_7_Template, 1, 2, "app-confirmation-modal", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showChangeManagerModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMoveModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, ConfirmationModalComponent, DepartmentFormComponent, DepartmentActionsComponent, ChangeManagerModalComponent, MoveDepartmentModalComponent], styles: ['\n\n.table-view-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  overflow: visible;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.table-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n.table-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n}\n.table-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #09365F;\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.table-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n.table-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  overflow-y: visible;\n}\n.departments-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 0.875rem;\n}\n.departments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.departments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n}\n.departments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.departments-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.departments-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.th-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sort-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.sort-icon.asc[_ngcontent-%COMP%] {\n  color: #158638;\n  transform: rotate(180deg);\n}\n.sort-icon.desc[_ngcontent-%COMP%] {\n  color: #158638;\n}\n.table-row[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.departments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #374151;\n  vertical-align: middle;\n}\n.code-badge[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.type-badge[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.employees-badge[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n  overflow: visible;\n  position: relative;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 40px;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background-color: #158638;\n  color: white;\n  border-color: #158638;\n}\n.page-btn.ellipsis[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: transparent;\n  border: none;\n}\n.page-btn.ellipsis[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n}\n.btn.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.btn.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.table-view-container.rtl[_ngcontent-%COMP%]   .table-controls[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl[_ngcontent-%COMP%]   .page-numbers[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl[_ngcontent-%COMP%]   .th-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 1024px) {\n  .departments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .departments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .table-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .table-view-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .departments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .departments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n  .code-badge[_ngcontent-%COMP%], \n   .type-badge[_ngcontent-%COMP%], \n   .employees-badge[_ngcontent-%COMP%] {\n    font-size: 0.625rem;\n    padding: 0.125rem 0.25rem;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.625rem;\n    padding: 0.25rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .departments-table[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .departments-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .departments-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.125rem;\n  }\n  .page-btn[_ngcontent-%COMP%] {\n    min-width: 32px;\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=departments-table-view.component-CUGBYWQO.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsTableViewComponent, [{
    type: Component,
    args: [{ selector: "app-departments-table-view", standalone: false, template: `<div class="table-view-container" [class.rtl]="isRTL()">\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('common.loading') }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error() && !loading()" class="error-container">\r
    <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <circle cx="12" cy="12" r="10"/>\r
      <line x1="15" y1="9" x2="9" y2="15"/>\r
      <line x1="9" y1="9" x2="15" y2="15"/>\r
    </svg>\r
    <h3>{{ translate('common.error') }}</h3>\r
    <p>{{ error() }}</p>\r
    <button class="btn btn-primary" (click)="loadDepartments()">\r
      {{ translate('common.refresh') }}\r
    </button>\r
  </div>\r
\r
  <!-- Table Content -->\r
  <div *ngIf="!loading() && !error()" class="table-content">\r
    <div class="table-header">\r
      <h2>{{ translate('departments.title') }}</h2>\r
      <p>{{ translate('departments.views.table') }}</p>\r
    </div>\r
\r
    <!-- Table Controls -->\r
    <div class="table-controls">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
        <select \r
          #pageSizeSelect\r
          id="pageSize" \r
          [value]="pageSize()" \r
          (change)="onPageSizeChange(+pageSizeSelect.value)">\r
          <option value="6">6</option>\r
          <option value="12">12</option>\r
          <option value="24">24</option>\r
          <option value="48">48</option>\r
        </select>\r
      </div>\r
      \r
      <div class="table-info">\r
        <span>{{ translate('common.showing') }} {{ (currentPage() - 1) * pageSize() + 1 }}-{{ Math.min(currentPage() * pageSize(), totalCount()) }} {{ translate('common.of') }} {{ totalCount() }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Data Table -->\r
    <div class="table-wrapper">\r
      <table class="departments-table">\r
        <thead>\r
          <tr>\r
            <th class="sortable" (click)="onSort('code')">\r
              <div class="th-content">\r
                {{ translate('departments.code') }}\r
                <svg class="sort-icon" [class.asc]="sortField() === 'code' && sortDirection() === 'asc'" [class.desc]="sortField() === 'code' && sortDirection() === 'desc'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6,9 12,15 18,9"/>\r
                </svg>\r
              </div>\r
            </th>\r
            <th class="sortable" (click)="onSort('nameAr')">\r
              <div class="th-content">\r
                {{ translate('departments.name_ar') }}\r
                <svg class="sort-icon" [class.asc]="sortField() === 'nameAr' && sortDirection() === 'asc'" [class.desc]="sortField() === 'nameAr' && sortDirection() === 'desc'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6,9 12,15 18,9"/>\r
                </svg>\r
              </div>\r
            </th>\r
            <th class="sortable" (click)="onSort('nameEn')">\r
              <div class="th-content">\r
                {{ translate('departments.name_en') }}\r
                <svg class="sort-icon" [class.asc]="sortField() === 'nameEn' && sortDirection() === 'asc'" [class.desc]="sortField() === 'nameEn' && sortDirection() === 'desc'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6,9 12,15 18,9"/>\r
                </svg>\r
              </div>\r
            </th>\r
            <th>{{ translate('departments.type') }}</th>\r
            <th>{{ translate('departments.parent') }}</th>\r
            <th>{{ translate('departments.manager') }}</th>\r
            <th>{{ translate('departments.employees_count') }}</th>\r
            <th class="sortable" (click)="onSort('createdAt')">\r
              <div class="th-content">\r
                {{ translate('departments.created_at') }}\r
                <svg class="sort-icon" [class.asc]="sortField() === 'createdAt' && sortDirection() === 'asc'" [class.desc]="sortField() === 'createdAt' && sortDirection() === 'desc'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6,9 12,15 18,9"/>\r
                </svg>\r
              </div>\r
            </th>\r
            <th>{{ translate('departments.status') }}</th>\r
            <th>{{ translate('common.actions') }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let dept of departments()" class="table-row">\r
            <td class="code-cell">\r
              <span class="code-badge">{{ dept.code }}</span>\r
            </td>\r
            <td>{{ dept.nameAr }}</td>\r
            <td>{{ dept.nameEn }}</td>\r
            <td>\r
              <span class="type-badge">{{ getDepartmentTypeName(dept.type) }}</span>\r
            </td>\r
            <td>{{ dept.parentId ? '#' + dept.parentId : translate('departments.no_parent') }}</td>\r
            <td>{{ dept.managerName || translate('departments.no_manager') }}</td>\r
            <td>\r
              <span class="employees-badge">{{ dept.employeesCount }}</span>\r
            </td>\r
            <td>{{ formatDate(dept.createdAt) }}</td>\r
            <td>\r
              <span class="status-badge" [class.active]="dept.isActive" [class.inactive]="!dept.isActive">\r
                {{ dept.isActive ? translate('departments.active') : translate('departments.inactive') }}\r
              </span>\r
            </td>\r
            <td class="actions-cell">\r
              <app-department-actions\r
                [department]="dept"\r
                (changeManager)="openChangeManagerModal(dept)"\r
                (move)="openMoveModal(dept)"\r
                (edit)="openEditModal(dept)"\r
                (delete)="confirmDeleteDepartment(dept)">\r
              </app-department-actions>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div class="pagination" *ngIf="totalCount() > 0">\r
      <div class="pagination-info">\r
        <span>{{ translate('common.showing') }} {{ (currentPage() - 1) * pageSize() + 1 }}-{{ Math.min(currentPage() * pageSize(), totalCount()) }} {{ translate('common.of') }} {{ totalCount() }}</span>\r
      </div>\r
      \r
      <div class="pagination-controls">\r
        <button \r
          class="pagination-btn" \r
          [disabled]="currentPage() === 1"\r
          (click)="onPageChange(currentPage() - 1)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"/>\r
          </svg>\r
          {{ translate('common.previous') }}\r
        </button>\r
        \r
        <div class="page-numbers">\r
          <button \r
            *ngFor="let page of getPageNumbers()" \r
            class="page-btn" \r
            [class.active]="page === currentPage()"\r
            [class.ellipsis]="page === -1"\r
            [disabled]="page === -1"\r
            (click)="page !== -1 && onPageChange(page)">\r
            {{ page === -1 ? '...' : page }}\r
          </button>\r
        </div>\r
        \r
        <button \r
          class="pagination-btn" \r
          [disabled]="currentPage() === getTotalPages()"\r
          (click)="onPageChange(currentPage() + 1)">\r
          {{ translate('common.next') }}\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="9,18 15,12 9,6"/>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="departments().length === 0" class="empty-state">\r
      <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M3 3h18v18H3zM8 12h8M12 8v8"/>\r
      </svg>\r
      <h3>{{ translate('departments.title') }}</h3>\r
      <p>{{ translate('common.no_data') }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Modals -->\r
  <app-change-manager-modal\r
    *ngIf="showChangeManagerModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isOpen]="showChangeManagerModal()"\r
    (close)="showChangeManagerModal.set(false)"\r
    (managerChanged)="onManagerChanged()">\r
  </app-change-manager-modal>\r
\r
  <app-move-department-modal\r
    *ngIf="showMoveModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [departments]="departments()"\r
    [isOpen]="showMoveModal()"\r
    (close)="showMoveModal.set(false)"\r
    (departmentMoved)="onDepartmentMoved()">\r
  </app-move-department-modal>\r
\r
  <app-department-form\r
    *ngIf="showEditModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isEdit]="true"\r
    [isOpen]="showEditModal()"\r
    (close)="showEditModal.set(false)"\r
    (departmentUpdated)="onDepartmentUpdated()">\r
  </app-department-form>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-confirmation-modal\r
    *ngIf="showDeleteModal()"\r
    [data]="deleteModalData()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()">\r
  </app-confirmation-modal>\r
</div>\r
`, styles: ['/* src/app/components/departments/departments-table-view/departments-table-view.component.css */\n.table-view-container {\n  padding: 1.5rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  overflow: visible;\n}\n.loading-container,\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-container h3 {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.table-header [dir=rtl] {\n  text-align: right;\n}\n.table-header {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n}\n.table-header h2 {\n  color: #09365F;\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.table-header p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n.table-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table-info {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.table-wrapper {\n  overflow-x: auto;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  overflow-y: visible;\n}\n.departments-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  font-size: 0.875rem;\n}\n.departments-table th,\n.departments-table td {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n}\n.departments-table th {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.departments-table th.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.departments-table th.sortable:hover {\n  background-color: #f3f4f6;\n}\n.th-content {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sort-icon {\n  color: #9ca3af;\n  transition: all 0.2s ease;\n}\n.sort-icon.asc {\n  color: #158638;\n  transform: rotate(180deg);\n}\n.sort-icon.desc {\n  color: #158638;\n}\n.table-row {\n  transition: background-color 0.2s ease;\n}\n.table-row:hover {\n  background-color: #f9fafb;\n}\n.departments-table td {\n  color: #374151;\n  vertical-align: middle;\n}\n.code-badge {\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.type-badge {\n  background-color: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n.employees-badge {\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.status-badge {\n  padding: 0.375rem 0.75rem;\n  border-radius: 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.actions-cell {\n  width: 80px;\n  text-align: center;\n  overflow: visible;\n  position: relative;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pagination-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  padding: 0.5rem 0.75rem;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 40px;\n}\n.page-btn:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.page-btn.active {\n  background-color: #158638;\n  color: white;\n  border-color: #158638;\n}\n.page-btn.ellipsis {\n  cursor: default;\n  background-color: transparent;\n  border: none;\n}\n.page-btn.ellipsis:hover {\n  background-color: transparent;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  color: #6b7280;\n}\n.btn {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n}\n.btn.ltr,\nhtml[dir=ltr] .btn {\n  font-family: "Poppins", sans-serif;\n}\n.btn.rtl,\nhtml[dir=rtl] .btn {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-primary:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0f6b2a 0%,\n      #0a4d1f 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.table-view-container.rtl .table-controls {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl .pagination {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl .pagination-controls {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl .page-numbers {\n  flex-direction: row-reverse;\n}\n.table-view-container.rtl .th-content {\n  flex-direction: row-reverse;\n}\n@media (max-width: 1024px) {\n  .departments-table th,\n  .departments-table td {\n    padding: 0.75rem 0.5rem;\n  }\n  .table-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls {\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .table-view-container {\n    padding: 1rem;\n  }\n  .departments-table th,\n  .departments-table td {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n  .code-badge,\n  .type-badge,\n  .employees-badge {\n    font-size: 0.625rem;\n    padding: 0.125rem 0.25rem;\n  }\n  .status-badge {\n    font-size: 0.625rem;\n    padding: 0.25rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .departments-table {\n    font-size: 0.7rem;\n  }\n  .departments-table th,\n  .departments-table td {\n    padding: 0.25rem 0.125rem;\n  }\n  .page-btn {\n    min-width: 32px;\n    padding: 0.25rem 0.5rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=departments-table-view.component-CUGBYWQO.css.map */\n'] }]
  }], () => [{ type: DepartmentService }, { type: TranslationService }], { refresh: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsTableViewComponent, { className: "DepartmentsTableViewComponent", filePath: "src/app/components/departments/departments-table-view/departments-table-view.component.ts", lineNumber: 20 });
})();

// node_modules/d3-array/src/cumsum.js
function cumsum(values, valueof) {
  var sum2 = 0, index = 0;
  return Float64Array.from(values, valueof === void 0 ? (v) => sum2 += +v || 0 : (v) => sum2 += +valueof(v, index++, values) || 0);
}

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  }
  return max3;
}

// node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min3;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  }
  return min3;
}

// node_modules/d3-array/src/sum.js
function sum(values, valueof) {
  let sum2 = 0;
  if (valueof === void 0) {
    for (let value of values) {
      if (value = +value) {
        sum2 += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum2 += value;
      }
    }
  }
  return sum2;
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return { type: t, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c; i < n; ++i) {
    if ((c = type2[i]).name === name) {
      return c.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null) type2.push({ name, value: callback });
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x2) {
  return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
      exit[i] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size = 0;
  for (const node of this) ++size;
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return { type: t, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o];
    else on.push(o);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-drag/src/noevent.js
var nonpassivecapture = { capture: true, passive: false };
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min3 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s = max3 - min3, l = (max3 + min3) / 2;
  if (s) {
    if (r === max3) h = (g - b) / s + (g < b) * 6;
    else if (g === max3) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant_default2(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = (function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
})(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a, b) {
    var s = [], q = [];
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x2) {
  return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
}
function sinh(x2) {
  return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
}
function tanh(x2) {
  return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
}
var zoom_default = (function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }
    i.duration = S * 1e3 * rho / Math.SQRT2;
    return i;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
})(Math.SQRT2, 2, 4);

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart((elapsed) => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED) return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;
      if (o.state === STARTED) return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
  var c;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error();
    set2(this, id2).ease = v;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id2) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
          if (child = children2[k]) {
            schedule_default(child, name, id2, k, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min: min2 } = Math;
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x2, e) {
    return x2 == null ? null : [[+x2[0], e[0][1]], [+x2[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y2, e) {
    return y2 == null ? null : [[e[0][0], +y2[0]], [e[1][0], +y2[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t) {
  return { type: t };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum2 = 0, children2 = node.children, i = children2 && children2.length;
  if (!i) sum2 = 1;
  else while (--i >= 0) sum2 += children2[i].value;
  node.value = sum2;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback, that) {
  let index = -1;
  for (const node of this) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback, that) {
  var node = this, nodes = [node], children2, i, index = -1;
  while (node = nodes.pop()) {
    callback.call(that, node, ++index, this);
    if (children2 = node.children) {
      for (i = children2.length - 1; i >= 0; --i) {
        nodes.push(children2[i]);
      }
    }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback, that) {
  var node = this, nodes = [node], next = [], children2, i, n, index = -1;
  while (node = nodes.pop()) {
    next.push(node);
    if (children2 = node.children) {
      for (i = 0, n = children2.length; i < n; ++i) {
        nodes.push(children2[i]);
      }
    }
  }
  while (node = next.pop()) {
    callback.call(that, node, ++index, this);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/find.js
function find_default(callback, that) {
  let index = -1;
  for (const node of this) {
    if (callback.call(that, node, ++index, this)) {
      return node;
    }
  }
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum2 = +value(node.data) || 0, children2 = node.children, i = children2 && children2.length;
    while (--i >= 0) sum2 += children2[i].value;
    node.value = sum2;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  return Array.from(this);
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root2 = this, links = [];
  root2.each(function(node) {
    if (node !== root2) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* iterator_default2() {
  var node = this, current, next = [node], children2, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      yield node;
      if (children2 = node.children) {
        for (i = 0, n = children2.length; i < n; ++i) {
          next.push(children2[i]);
        }
      }
    }
  } while (next.length);
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children2) {
  if (data instanceof Map) {
    data = [void 0, data];
    if (children2 === void 0) children2 = mapChildren;
  } else if (children2 === void 0) {
    children2 = objectChildren;
  }
  var root2 = new Node(data), node, nodes = [root2], child, childs, i, n;
  while (node = nodes.pop()) {
    if ((childs = children2(node.data)) && (n = (childs = Array.from(childs)).length)) {
      node.children = childs;
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = childs[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root2.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function objectChildren(d) {
  return d.children;
}
function mapChildren(d) {
  return Array.isArray(d) ? d[1] : null;
}
function copyData(node) {
  if (node.data.value !== void 0) node.value = node.data.value;
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  find: find_default,
  sum: sum_default,
  sort: sort_default2,
  path: path_default,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy,
  [Symbol.iterator]: iterator_default2
};

// node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function") throw new Error();
  return f;
}

// node_modules/d3-hierarchy/src/stratify.js
var preroot = { depth: -1 };
var ambiguous = {};
var imputed = {};
function defaultId(d) {
  return d.id;
}
function defaultParentId(d) {
  return d.parentId;
}
function stratify_default() {
  var id2 = defaultId, parentId = defaultParentId, path2;
  function stratify(data) {
    var nodes = Array.from(data), currentId = id2, currentParentId = parentId, n, d, i, root2, parent, node, nodeId, nodeKey, nodeByKey = /* @__PURE__ */ new Map();
    if (path2 != null) {
      const I = nodes.map((d2, i2) => normalize(path2(d2, i2, data)));
      const P = I.map(parentof);
      const S = new Set(I).add("");
      for (const i2 of P) {
        if (!S.has(i2)) {
          S.add(i2);
          I.push(i2);
          P.push(parentof(i2));
          nodes.push(imputed);
        }
      }
      currentId = (_, i2) => I[i2];
      currentParentId = (_, i2) => P[i2];
    }
    for (i = 0, n = nodes.length; i < n; ++i) {
      d = nodes[i], node = nodes[i] = new Node(d);
      if ((nodeId = currentId(d, i, data)) != null && (nodeId += "")) {
        nodeKey = node.id = nodeId;
        nodeByKey.set(nodeKey, nodeByKey.has(nodeKey) ? ambiguous : node);
      }
      if ((nodeId = currentParentId(d, i, data)) != null && (nodeId += "")) {
        node.parent = nodeId;
      }
    }
    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (nodeId = node.parent) {
        parent = nodeByKey.get(nodeId);
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      } else {
        if (root2) throw new Error("multiple roots");
        root2 = node;
      }
    }
    if (!root2) throw new Error("no root");
    if (path2 != null) {
      while (root2.data === imputed && root2.children.length === 1) {
        root2 = root2.children[0], --n;
      }
      for (let i2 = nodes.length - 1; i2 >= 0; --i2) {
        node = nodes[i2];
        if (node.data !== imputed) break;
        node.data = null;
      }
    }
    root2.parent = preroot;
    root2.eachBefore(function(node2) {
      node2.depth = node2.parent.depth + 1;
      --n;
    }).eachBefore(computeHeight);
    root2.parent = null;
    if (n > 0) throw new Error("cycle");
    return root2;
  }
  stratify.id = function(x2) {
    return arguments.length ? (id2 = optional(x2), stratify) : id2;
  };
  stratify.parentId = function(x2) {
    return arguments.length ? (parentId = optional(x2), stratify) : parentId;
  };
  stratify.path = function(x2) {
    return arguments.length ? (path2 = optional(x2), stratify) : path2;
  };
  return stratify;
}
function normalize(path2) {
  path2 = `${path2}`;
  let i = path2.length;
  if (slash(path2, i - 1) && !slash(path2, i - 2)) path2 = path2.slice(0, -1);
  return path2[0] === "/" ? path2 : `/${path2}`;
}
function parentof(path2) {
  let i = path2.length;
  if (i < 2) return "";
  while (--i > 1) if (slash(path2, i)) break;
  return path2.slice(0, i);
}
function slash(path2, i) {
  if (path2[i] === "/") {
    let k = 0;
    while (i > 0 && path2[--i] === "\\") ++k;
    if ((k & 1) === 0) return true;
  }
  return false;
}

// node_modules/d3-hierarchy/src/tree.js
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}
function nextLeft(v) {
  var children2 = v.children;
  return children2 ? children2[0] : v.t;
}
function nextRight(v) {
  var children2 = v.children;
  return children2 ? children2[children2.length - 1] : v.t;
}
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}
function executeShifts(v) {
  var shift = 0, change = 0, children2 = v.children, i = children2.length, w;
  while (--i >= 0) {
    w = children2[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
TreeNode.prototype = Object.create(Node.prototype);
function treeRoot(root2) {
  var tree = new TreeNode(root2, 0), node, nodes = [tree], child, children2, i, n;
  while (node = nodes.pop()) {
    if (children2 = node._.children) {
      node.children = new Array(n = children2.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children2[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}
function tree_default() {
  var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = null;
  function tree(root2) {
    var t = treeRoot(root2);
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);
    if (nodeSize) root2.eachBefore(sizeNode);
    else {
      var left = root2, right = root2, bottom = root2;
      root2.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
      root2.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }
    return root2;
  }
  function firstWalk(v) {
    var children2 = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
    if (children2) {
      executeShifts(v);
      var midpoint = (children2[0].z + children2[children2.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function(x2) {
    return arguments.length ? (separation = x2, tree) : separation;
  };
  tree.size = function(x2) {
    return arguments.length ? (nodeSize = false, dx = +x2[0], dy = +x2[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function(x2) {
    return arguments.length ? (nodeSize = true, dx = +x2[0], dy = +x2[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

// node_modules/d3-shape/src/constant.js
function constant_default4(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/curve/bump.js
var Bump = class {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x2, y2);
        else this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
};
function bumpX(context) {
  return new Bump(context, true);
}

// node_modules/d3-shape/src/link.js
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link(curve) {
  let source = linkSource, target = linkTarget, x2 = x, y2 = y, context = null, output = null, path2 = withPath(link2);
  function link2() {
    let buffer;
    const argv = slice.call(arguments);
    const s = source.apply(this, argv);
    const t = target.apply(this, argv);
    if (context == null) output = curve(buffer = path2());
    output.lineStart();
    argv[0] = s, output.point(+x2.apply(this, argv), +y2.apply(this, argv));
    argv[0] = t, output.point(+x2.apply(this, argv), +y2.apply(this, argv));
    output.lineEnd();
    if (buffer) return output = null, buffer + "" || null;
  }
  link2.source = function(_) {
    return arguments.length ? (source = _, link2) : source;
  };
  link2.target = function(_) {
    return arguments.length ? (target = _, link2) : target;
  };
  link2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default4(+_), link2) : x2;
  };
  link2.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default4(+_), link2) : y2;
  };
  link2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), link2) : context;
  };
  return link2;
}
function linkHorizontal() {
  return link(bumpX);
}

// node_modules/d3-zoom/src/constant.js
var constant_default5 = (x2) => () => x2;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type2, {
  sourceEvent,
  target,
  transform: transform2,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform2, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k, x2, y2) {
  this.k = k;
  this.x = x2;
  this.y = y2;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x2, y2) {
    return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x2) {
    return x2 * this.k + this.x;
  },
  applyY: function(y2) {
    return y2 * this.k + this.y;
  },
  invert: function(location2) {
    return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
  },
  invertX: function(x2) {
    return (x2 - this.x) / this.k;
  },
  invertY: function(y2) {
    return (y2 - this.y) / this.k;
  },
  rescaleX: function(x2) {
    return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
  },
  rescaleY: function(y2) {
    return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default3(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k, p, event) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };
  zoom.scaleTo = function(selection2, k, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };
  zoom.translateBy = function(selection2, x2, y2, event) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x2 === "function" ? x2.apply(this, arguments) : x2,
        typeof y2 === "function" ? y2.apply(this, arguments) : y2
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom.translateTo = function(selection2, x2, y2, p, event) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x2 === "function" ? -x2.apply(this, arguments) : -x2,
        typeof y2 === "function" ? -y2.apply(this, arguments) : -y2
      ), e, translateExtent);
    }, p, event);
  };
  function scale(transform2, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
  }
  function translate(transform2, p0, p1) {
    var x2 = p0[0] - p1[0] * transform2.k, y2 = p0[1] - p1[1] * transform2.k;
    return x2 === transform2.x && y2 === transform2.y ? transform2 : new Transform(transform2.k, x2, y2);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1) t = b;
        else {
          var l = i(t), k = w / l[2];
          t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      var d = select_default2(this.that).datum();
      listeners.call(
        type2,
        this.that,
        new ZoomEvent(type2, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type: type2,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k) return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default3(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter2.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved(event2) {
      noevent_default3(event2);
      if (!g.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped(event2) {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g.moved);
      noevent_default3(event2);
      g.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
    noevent_default3(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select_default2(this).call(zoom.transform, t1, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter2.apply(this, arguments)) return;
    var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
    nopropagation2(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default3(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer_default(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        t = pointer_default(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select_default2(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default5(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : filter2;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default5(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default5([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };
  return zoom;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/count.js
function count2(node) {
  var sum2 = 0, children2 = node.children, i = children2 && children2.length;
  if (!i) sum2 = 1;
  else while (--i >= 0) sum2 += children2[i].value;
  node.value = sum2;
}
function count_default2() {
  return this.eachAfter(count2);
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default3(callback) {
  var node = this, current, next = [node], children2, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children2 = node.children;
      if (children2) for (i = 0, n = children2.length; i < n; ++i) {
        next.push(children2[i]);
      }
    }
  } while (next.length);
  return this;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default2(callback) {
  var node = this, nodes = [node], children2, i;
  while (node = nodes.pop()) {
    callback(node), children2 = node.children;
    if (children2) for (i = children2.length - 1; i >= 0; --i) {
      nodes.push(children2[i]);
    }
  }
  return this;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default2(callback) {
  var node = this, nodes = [node], next = [], children2, i, n;
  while (node = nodes.pop()) {
    next.push(node), children2 = node.children;
    if (children2) for (i = 0, n = children2.length; i < n; ++i) {
      nodes.push(children2[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default2(value) {
  return this.eachAfter(function(node) {
    var sum2 = +value(node.data) || 0, children2 = node.children, i = children2 && children2.length;
    while (--i >= 0) sum2 += children2[i].value;
    node.value = sum2;
  });
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default3(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default2(end) {
  var start2 = this, ancestor = leastCommonAncestor2(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor2(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default2() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default2() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default2() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default2() {
  var root2 = this, links = [];
  root2.each(function(node) {
    if (node !== root2) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-flextree/node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy2(data, children2) {
  var root2 = new Node2(data), valued = +data.value && (root2.value = data.value), node, nodes = [root2], child, childs, i, n;
  if (children2 == null) children2 = defaultChildren;
  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children2(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node2(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root2.eachBefore(computeHeight2);
}
function node_copy2() {
  return hierarchy2(this).eachBefore(copyData2);
}
function defaultChildren(d) {
  return d.children;
}
function copyData2(node) {
  node.data = node.data.data;
}
function computeHeight2(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node2(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node2.prototype = hierarchy2.prototype = {
  constructor: Node2,
  count: count_default2,
  each: each_default3,
  eachAfter: eachAfter_default2,
  eachBefore: eachBefore_default2,
  sum: sum_default2,
  sort: sort_default3,
  path: path_default2,
  ancestors: ancestors_default2,
  descendants: descendants_default2,
  leaves: leaves_default2,
  links: links_default2,
  copy: node_copy2
};

// node_modules/d3-flextree/package.json
var package_default = {
  name: "d3-flextree",
  version: "2.1.2",
  main: "build/d3-flextree.js",
  module: "index",
  "jsnext:main": "index",
  author: {
    name: "Chris Maloney",
    url: "http://chrismaloney.org"
  },
  description: "Flexible tree layout algorithm that allows for variable node sizes.",
  keywords: [
    "d3",
    "d3-module",
    "layout",
    "tree",
    "hierarchy",
    "d3-hierarchy",
    "plugin",
    "d3-plugin",
    "infovis",
    "visualization",
    "2d"
  ],
  homepage: "https://github.com/klortho/d3-flextree",
  license: "WTFPL",
  repository: {
    type: "git",
    url: "https://github.com/klortho/d3-flextree.git"
  },
  scripts: {
    clean: "rm -rf build demo test",
    "build:demo": "rollup -c --environment BUILD:demo",
    "build:dev": "rollup -c --environment BUILD:dev",
    "build:prod": "rollup -c --environment BUILD:prod",
    "build:test": "rollup -c --environment BUILD:test",
    build: "rollup -c",
    lint: "eslint index.js src",
    "test:main": "node test/bundle.js",
    "test:browser": "node test/browser-tests.js",
    test: "npm-run-all test:*",
    prepare: "npm-run-all clean build lint test"
  },
  dependencies: {
    "d3-hierarchy": "^1.1.5"
  },
  devDependencies: {
    "babel-plugin-external-helpers": "^6.22.0",
    "babel-preset-es2015-rollup": "^3.0.0",
    d3: "^4.13.0",
    "d3-selection-multi": "^1.0.1",
    eslint: "^4.19.1",
    jsdom: "^11.6.2",
    "npm-run-all": "^4.1.2",
    rollup: "^0.55.3",
    "rollup-plugin-babel": "^2.7.1",
    "rollup-plugin-commonjs": "^8.0.2",
    "rollup-plugin-copy": "^0.2.3",
    "rollup-plugin-json": "^2.3.0",
    "rollup-plugin-node-resolve": "^3.0.2",
    "rollup-plugin-uglify": "^3.0.0",
    "uglify-es": "^3.3.9"
  }
};

// node_modules/d3-flextree/src/flextree.js
var { version } = package_default;
var defaults = Object.freeze({
  children: (data) => data.children,
  nodeSize: (node) => node.data.size,
  spacing: 0
});
function flextree(options) {
  const opts = Object.assign({}, defaults, options);
  function accessor(name) {
    const opt = opts[name];
    return typeof opt === "function" ? opt : () => opt;
  }
  function layout(tree) {
    const wtree = wrap(getWrapper(), tree, (node) => node.children);
    wtree.update();
    return wtree.data;
  }
  function getFlexNode() {
    const nodeSize = accessor("nodeSize");
    const spacing = accessor("spacing");
    return class FlexNode extends hierarchy2.prototype.constructor {
      constructor(data) {
        super(data);
      }
      copy() {
        const c = wrap(this.constructor, this, (node) => node.children);
        c.each((node) => node.data = node.data.data);
        return c;
      }
      get size() {
        return nodeSize(this);
      }
      spacing(oNode) {
        return spacing(this, oNode);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const ancs = this.ancestors();
        return ancs[ancs.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce(
          (acc, kid) => FlexNode.maxExtents(acc, kid.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(e0, e1) {
        return {
          top: Math.min(e0.top, e1.top),
          bottom: Math.max(e0.bottom, e1.bottom),
          left: Math.min(e0.left, e1.left),
          right: Math.max(e0.right, e1.right)
        };
      }
    };
  }
  function getWrapper() {
    const FlexNode = getFlexNode();
    const nodeSize = accessor("nodeSize");
    const spacing = accessor("spacing");
    return class extends FlexNode {
      constructor(data) {
        super(data);
        Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return nodeSize(this.data);
      }
      spacing(oNode) {
        return spacing(this.data, oNode.data);
      }
      get x() {
        return this.data.x;
      }
      set x(v) {
        this.data.x = v;
      }
      get y() {
        return this.data.y;
      }
      set y(v) {
        this.data.y = v;
      }
      update() {
        layoutChildren(this);
        resolveX(this);
        return this;
      }
    };
  }
  function wrap(FlexClass, treeData, children2) {
    const _wrap = (data, parent) => {
      const node = new FlexClass(data);
      Object.assign(node, {
        parent,
        depth: parent === null ? 0 : parent.depth + 1,
        height: 0,
        length: 1
      });
      const kidsData = children2(data) || [];
      node.children = kidsData.length === 0 ? null : kidsData.map((kd) => _wrap(kd, node));
      if (node.children) {
        Object.assign(node, node.children.reduce(
          (hl, kid) => ({
            height: Math.max(hl.height, kid.height + 1),
            length: hl.length + kid.length
          }),
          node
        ));
      }
      return node;
    };
    return _wrap(treeData, null);
  }
  Object.assign(layout, {
    nodeSize(arg) {
      return arguments.length ? (opts.nodeSize = arg, layout) : opts.nodeSize;
    },
    spacing(arg) {
      return arguments.length ? (opts.spacing = arg, layout) : opts.spacing;
    },
    children(arg) {
      return arguments.length ? (opts.children = arg, layout) : opts.children;
    },
    hierarchy(treeData, children2) {
      const kids = typeof children2 === "undefined" ? opts.children : children2;
      return wrap(getFlexNode(), treeData, kids);
    },
    dump(tree) {
      const nodeSize = accessor("nodeSize");
      const _dump = (i0) => (node) => {
        const i1 = i0 + "  ";
        const i2 = i0 + "    ";
        const { x: x2, y: y2 } = node;
        const size = nodeSize(node);
        const kids = node.children || [];
        const kdumps = kids.length === 0 ? " " : `,${i1}children: [${i2}${kids.map(_dump(i2)).join(i2)}${i1}],${i0}`;
        return `{ size: [${size.join(", ")}],${i1}x: ${x2}, y: ${y2}${kdumps}},`;
      };
      return _dump("\n")(tree);
    }
  });
  return layout;
}
flextree.version = version;
var layoutChildren = (w, y2 = 0) => {
  w.y = y2;
  (w.children || []).reduce((acc, kid) => {
    const [i, lastLows] = acc;
    layoutChildren(kid, w.y + w.ySize);
    const lowY = (i === 0 ? kid.lExt : kid.rExt).bottom;
    if (i !== 0) separate(w, i, lastLows);
    const lows = updateLows(lowY, i, lastLows);
    return [i + 1, lows];
  }, [0, null]);
  shiftChange(w);
  positionRoot(w);
  return w;
};
var resolveX = (w, prevSum, parentX) => {
  if (typeof prevSum === "undefined") {
    prevSum = -w.relX - w.prelim;
    parentX = 0;
  }
  const sum2 = prevSum + w.relX;
  w.relX = sum2 + w.prelim - parentX;
  w.prelim = 0;
  w.x = parentX + w.relX;
  (w.children || []).forEach((k) => resolveX(k, sum2, w.x));
  return w;
};
var shiftChange = (w) => {
  (w.children || []).reduce((acc, child) => {
    const [lastShiftSum, lastChangeSum] = acc;
    const shiftSum = lastShiftSum + child.shift;
    const changeSum = lastChangeSum + shiftSum + child.change;
    child.relX += changeSum;
    return [shiftSum, changeSum];
  }, [0, 0]);
};
var separate = (w, i, lows) => {
  const lSib = w.children[i - 1];
  const curSubtree = w.children[i];
  let rContour = lSib;
  let rSumMods = lSib.relX;
  let lContour = curSubtree;
  let lSumMods = curSubtree.relX;
  let isFirst = true;
  while (rContour && lContour) {
    if (rContour.bottom > lows.lowY) lows = lows.next;
    const dist = rSumMods + rContour.prelim - (lSumMods + lContour.prelim) + rContour.xSize / 2 + lContour.xSize / 2 + rContour.spacing(lContour);
    if (dist > 0 || dist < 0 && isFirst) {
      lSumMods += dist;
      moveSubtree2(curSubtree, dist);
      distributeExtra(w, i, lows.index, dist);
    }
    isFirst = false;
    const rightBottom = rContour.bottom;
    const leftBottom = lContour.bottom;
    if (rightBottom <= leftBottom) {
      rContour = nextRContour(rContour);
      if (rContour) rSumMods += rContour.relX;
    }
    if (rightBottom >= leftBottom) {
      lContour = nextLContour(lContour);
      if (lContour) lSumMods += lContour.relX;
    }
  }
  if (!rContour && lContour) setLThr(w, i, lContour, lSumMods);
  else if (rContour && !lContour) setRThr(w, i, rContour, rSumMods);
};
var moveSubtree2 = (subtree, distance) => {
  subtree.relX += distance;
  subtree.lExtRelX += distance;
  subtree.rExtRelX += distance;
};
var distributeExtra = (w, curSubtreeI, leftSibI, dist) => {
  const curSubtree = w.children[curSubtreeI];
  const n = curSubtreeI - leftSibI;
  if (n > 1) {
    const delta = dist / n;
    w.children[leftSibI + 1].shift += delta;
    curSubtree.shift -= delta;
    curSubtree.change -= dist - delta;
  }
};
var nextLContour = (w) => {
  return w.hasChildren ? w.firstChild : w.lThr;
};
var nextRContour = (w) => {
  return w.hasChildren ? w.lastChild : w.rThr;
};
var setLThr = (w, i, lContour, lSumMods) => {
  const firstChild = w.firstChild;
  const lExt = firstChild.lExt;
  const curSubtree = w.children[i];
  lExt.lThr = lContour;
  const diff = lSumMods - lContour.relX - firstChild.lExtRelX;
  lExt.relX += diff;
  lExt.prelim -= diff;
  firstChild.lExt = curSubtree.lExt;
  firstChild.lExtRelX = curSubtree.lExtRelX;
};
var setRThr = (w, i, rContour, rSumMods) => {
  const curSubtree = w.children[i];
  const rExt = curSubtree.rExt;
  const lSib = w.children[i - 1];
  rExt.rThr = rContour;
  const diff = rSumMods - rContour.relX - curSubtree.rExtRelX;
  rExt.relX += diff;
  rExt.prelim -= diff;
  curSubtree.rExt = lSib.rExt;
  curSubtree.rExtRelX = lSib.rExtRelX;
};
var positionRoot = (w) => {
  if (w.hasChildren) {
    const k0 = w.firstChild;
    const kf = w.lastChild;
    const prelim = (k0.prelim + k0.relX - k0.xSize / 2 + kf.relX + kf.prelim + kf.xSize / 2) / 2;
    Object.assign(w, {
      prelim,
      lExt: k0.lExt,
      lExtRelX: k0.lExtRelX,
      rExt: kf.rExt,
      rExtRelX: kf.rExtRelX
    });
  }
};
var updateLows = (lowY, index, lastLows) => {
  while (lastLows !== null && lowY >= lastLows.lowY)
    lastLows = lastLows.next;
  return {
    lowY,
    index,
    next: lastLows
  };
};

// node_modules/d3-org-chart/src/d3-org-chart.js
var d3 = {
  selection: selection_default,
  select: select_default2,
  max,
  min,
  sum,
  cumsum,
  tree: tree_default,
  stratify: stratify_default,
  zoom: zoom_default2,
  zoomIdentity: identity2,
  linkHorizontal,
  flextree
};
var OrgChart = class {
  constructor() {
    const attrs = {
      /* NOT INTENDED FOR PUBLIC OVERRIDE */
      id: `ID${Math.floor(Math.random() * 1e6)}`,
      // Id for event handlings
      firstDraw: true,
      // Whether chart is drawn for the first time
      ctx: document.createElement("canvas").getContext("2d"),
      initialExpandLevel: 1,
      nodeDefaultBackground: "none",
      lastTransform: { x: 0, y: 0, k: 1 },
      // Panning and zooming values
      allowedNodesCount: {},
      zoomBehavior: null,
      generateRoot: null,
      /*  INTENDED FOR PUBLIC OVERRIDE */
      svgWidth: 800,
      // Configure svg width
      svgHeight: window.innerHeight - 100,
      // Configure svg height
      container: "body",
      // Set parent container, either CSS style selector or DOM element
      data: null,
      // Set data, it must be an array of objects, where hierarchy is clearly defined via id and parent ID (property names are configurable)
      connections: [],
      // Sets connection data, array of objects, SAMPLE:  [{from:"145",to:"201",label:"Conflicts of interest"}]
      defaultFont: "Helvetica",
      // Set default font
      nodeId: (d) => d.nodeId || d.id,
      // Configure accessor for node id, default is either odeId or id
      parentNodeId: (d) => d.parentNodeId || d.parentId,
      // Configure accessor for parent node id, default is either parentNodeId or parentId
      rootMargin: 40,
      // Configure how much root node is offset from top
      nodeWidth: (d3Node) => 250,
      // Configure each node width, use with caution, it is better to have the same value set for all nodes
      nodeHeight: (d) => 150,
      //  Configure each node height, use with caution, it is better to have the same value set for all nodes
      neighbourMargin: (n1, n2) => 80,
      // Configure margin between two nodes, use with caution, it is better to have the same value set for all nodes
      siblingsMargin: (d3Node) => 20,
      // Configure margin between two siblings, use with caution, it is better to have the same value set for all nodes
      childrenMargin: (d) => 60,
      // Configure margin between parent and children, use with caution, it is better to have the same value set for all nodes
      compactMarginPair: (d) => 100,
      // Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
      compactMarginBetween: ((d3Node) => 20),
      // Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
      nodeButtonWidth: (d) => 40,
      // Configure expand & collapse button width
      nodeButtonHeight: (d) => 40,
      // Configure expand & collapse button height
      nodeButtonX: (d) => -20,
      // Configure expand & collapse button x position
      nodeButtonY: (d) => -20,
      // Configure expand & collapse button y position
      linkYOffset: 30,
      // When correcting links which is not working for safari
      pagingStep: (d) => 5,
      // Configure how many nodes to show when making new nodes appear
      minPagingVisibleNodes: (d) => 2e3,
      // Configure minimum number of visible nodes , after which paging button appears
      scaleExtent: [1e-3, 20],
      // Configure zoom scale extent , if you don't want any kind of zooming, set it to [1,1]
      duration: 400,
      // Configure duration of transitions
      imageName: "Chart",
      // Configure exported PNG and SVG image name
      setActiveNodeCentered: true,
      // Configure if active node should be centered when expanded and collapsed
      layout: "top",
      // Configure layout direction , possible values are "top", "left", "right", "bottom"
      compact: true,
      // Configure if compact mode is enabled , when enabled, nodes are shown in compact positions, instead of horizontal spread
      createZoom: (d) => d3.zoom(),
      onZoomStart: (e) => {
      },
      // Callback for zoom & panning start
      onZoom: (e) => {
      },
      // Callback for zoom & panning 
      onZoomEnd: (e) => {
      },
      // Callback for zoom & panning end
      onNodeClick: (d) => d,
      // Callback for node click
      onExpandOrCollapse: (d) => d,
      // Callback for node expand or collapse
      /*
                  * Node HTML content generation , remember that you can access some helper methods:
      
                  * node=> node.data - to access node's original data
                  * node=> node.leaves() - to access node's leaves
                  * node=> node.descendants() - to access node's descendants
                  * node=> node.children - to access node's children
                  * node=> node.parent - to access node's parent
                  * node=> node.depth - to access node's depth
                  * node=> node.hierarchyHeight - to access node's hierarchy height ( Height, which d3 assigns to hierarchy nodes)
                  * node=> node.height - to access node's height
                  * node=> node.width - to access node's width
                  * 
                  * You can also access additional properties to style your node:
                  * 
                  * d=>d.data._centeredWithDescendants - when node is centered with descendants
                  * d=>d.data._directSubordinatesPaging - subordinates count in paging mode
                  * d=>d.data._directSubordinates - subordinates count
                  * d=>d.data._totalSubordinates - total subordinates count
                  * d=>d._highlighted - when node is highlighted
                  * d=>d._upToTheRootHighlighted - when node is highlighted up to the root
                  * d=>d._expanded - when node is expanded
                  * d=>d.data._centered - when node is centered
                  */
      nodeContent: (d) => `<div style="padding:5px;font-size:10px;">Sample Node(id=${d.id}), override using <br/> 
            <code>chart.nodeContent({data}=>{ <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;return '' // Custom HTML <br/>
             })</code>
             <br/> 
             Or check different <a href="https://github.com/bumbeishvili/org-chart#jump-to-examples" target="_blank">layout examples</a>
             </div>`,
      /* Node expand & collapse button content and styling. You can access same helper methods as above */
      buttonContent: ({ node, state }) => {
        const icons = {
          "left": (d) => d ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.283 3.50094L6.51 11.4749C6.37348 11.615 6.29707 11.8029 6.29707 11.9984C6.29707 12.194 6.37348 12.3819 6.51 12.5219L14.283 20.4989C14.3466 20.5643 14.4226 20.6162 14.5066 20.6516C14.5906 20.6871 14.6808 20.7053 14.772 20.7053C14.8632 20.7053 14.9534 20.6871 15.0374 20.6516C15.1214 20.6162 15.1974 20.5643 15.261 20.4989C15.3918 20.365 15.4651 20.1852 15.4651 19.9979C15.4651 19.8107 15.3918 19.6309 15.261 19.4969L7.9515 11.9984L15.261 4.50144C15.3914 4.36756 15.4643 4.18807 15.4643 4.00119C15.4643 3.81431 15.3914 3.63482 15.261 3.50094C15.1974 3.43563 15.1214 3.38371 15.0374 3.34827C14.9534 3.31282 14.8632 3.29456 14.772 3.29456C14.6808 3.29456 14.5906 3.31282 14.5066 3.34827C14.4226 3.38371 14.3466 3.43563 14.283 3.50094V3.50094Z" fill="#716E7B" stroke="#716E7B"/>
                      </svg></span><span style="color:#716E7B">${node.data._directSubordinatesPaging} </span></div>` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.989 3.49944C7.85817 3.63339 7.78492 3.8132 7.78492 4.00044C7.78492 4.18768 7.85817 4.36749 7.989 4.50144L15.2985 11.9999L7.989 19.4969C7.85817 19.6309 7.78492 19.8107 7.78492 19.9979C7.78492 20.1852 7.85817 20.365 7.989 20.4989C8.05259 20.5643 8.12863 20.6162 8.21261 20.6516C8.2966 20.6871 8.38684 20.7053 8.478 20.7053C8.56916 20.7053 8.6594 20.6871 8.74338 20.6516C8.82737 20.6162 8.90341 20.5643 8.967 20.4989L16.74 12.5234C16.8765 12.3834 16.9529 12.1955 16.9529 11.9999C16.9529 11.8044 16.8765 11.6165 16.74 11.4764L8.967 3.50094C8.90341 3.43563 8.82737 3.38371 8.74338 3.34827C8.6594 3.31282 8.56916 3.29456 8.478 3.29456C8.38684 3.29456 8.2966 3.31282 8.21261 3.34827C8.12863 3.38371 8.05259 3.43563 7.989 3.50094V3.49944Z" fill="#716E7B" stroke="#716E7B"/>
                          </svg></span><span style="color:#716E7B">${node.data._directSubordinatesPaging} </span></div>`,
          "bottom": (d) => d ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M19.497 7.98903L12 15.297L4.503 7.98903C4.36905 7.85819 4.18924 7.78495 4.002 7.78495C3.81476 7.78495 3.63495 7.85819 3.501 7.98903C3.43614 8.05257 3.38462 8.12842 3.34944 8.21213C3.31427 8.29584 3.29615 8.38573 3.29615 8.47653C3.29615 8.56733 3.31427 8.65721 3.34944 8.74092C3.38462 8.82463 3.43614 8.90048 3.501 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.3651 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="margin-left:1px;color:#716E7B" >${node.data._directSubordinatesPaging} </span></div>
                       ` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M11.457 8.07005L3.49199 16.4296C3.35903 16.569 3.28485 16.7543 3.28485 16.9471C3.28485 17.1398 3.35903 17.3251 3.49199 17.4646L3.50099 17.4736C3.56545 17.5414 3.64304 17.5954 3.72904 17.6324C3.81504 17.6693 3.90765 17.6883 4.00124 17.6883C4.09483 17.6883 4.18745 17.6693 4.27344 17.6324C4.35944 17.5954 4.43703 17.5414 4.50149 17.4736L12.0015 9.60155L19.4985 17.4736C19.563 17.5414 19.6405 17.5954 19.7265 17.6324C19.8125 17.6693 19.9052 17.6883 19.9987 17.6883C20.0923 17.6883 20.1849 17.6693 20.2709 17.6324C20.3569 17.5954 20.4345 17.5414 20.499 17.4736L20.508 17.4646C20.641 17.3251 20.7151 17.1398 20.7151 16.9471C20.7151 16.7543 20.641 16.569 20.508 16.4296L12.543 8.07005C12.4729 7.99653 12.3887 7.93801 12.2954 7.89801C12.202 7.85802 12.1015 7.8374 12 7.8374C11.8984 7.8374 11.798 7.85802 11.7046 7.89801C11.6113 7.93801 11.527 7.99653 11.457 8.07005Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="margin-left:1px;color:#716E7B" >${node.data._directSubordinatesPaging} </span></div>
                    `,
          "right": (d) => d ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7.989 3.49944C7.85817 3.63339 7.78492 3.8132 7.78492 4.00044C7.78492 4.18768 7.85817 4.36749 7.989 4.50144L15.2985 11.9999L7.989 19.4969C7.85817 19.6309 7.78492 19.8107 7.78492 19.9979C7.78492 20.1852 7.85817 20.365 7.989 20.4989C8.05259 20.5643 8.12863 20.6162 8.21261 20.6516C8.2966 20.6871 8.38684 20.7053 8.478 20.7053C8.56916 20.7053 8.6594 20.6871 8.74338 20.6516C8.82737 20.6162 8.90341 20.5643 8.967 20.4989L16.74 12.5234C16.8765 12.3834 16.9529 12.1955 16.9529 11.9999C16.9529 11.8044 16.8765 11.6165 16.74 11.4764L8.967 3.50094C8.90341 3.43563 8.82737 3.38371 8.74338 3.34827C8.6594 3.31282 8.56916 3.29456 8.478 3.29456C8.38684 3.29456 8.2966 3.31282 8.21261 3.34827C8.12863 3.38371 8.05259 3.43563 7.989 3.50094V3.49944Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="color:#716E7B">${node.data._directSubordinatesPaging} </span></div>` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M14.283 3.50094L6.51 11.4749C6.37348 11.615 6.29707 11.8029 6.29707 11.9984C6.29707 12.194 6.37348 12.3819 6.51 12.5219L14.283 20.4989C14.3466 20.5643 14.4226 20.6162 14.5066 20.6516C14.5906 20.6871 14.6808 20.7053 14.772 20.7053C14.8632 20.7053 14.9534 20.6871 15.0374 20.6516C15.1214 20.6162 15.1974 20.5643 15.261 20.4989C15.3918 20.365 15.4651 20.1852 15.4651 19.9979C15.4651 19.8107 15.3918 19.6309 15.261 19.4969L7.9515 11.9984L15.261 4.50144C15.3914 4.36756 15.4643 4.18807 15.4643 4.00119C15.4643 3.81431 15.3914 3.63482 15.261 3.50094C15.1974 3.43563 15.1214 3.38371 15.0374 3.34827C14.9534 3.31282 14.8632 3.29456 14.772 3.29456C14.6808 3.29456 14.5906 3.31282 14.5066 3.34827C14.4226 3.38371 14.3466 3.43563 14.283 3.50094V3.50094Z" fill="#716E7B" stroke="#716E7B"/>
                       </svg></span><span style="color:#716E7B">${node.data._directSubordinatesPaging} </span></div>`,
          "top": (d) => d ? `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.457 8.07005L3.49199 16.4296C3.35903 16.569 3.28485 16.7543 3.28485 16.9471C3.28485 17.1398 3.35903 17.3251 3.49199 17.4646L3.50099 17.4736C3.56545 17.5414 3.64304 17.5954 3.72904 17.6324C3.81504 17.6693 3.90765 17.6883 4.00124 17.6883C4.09483 17.6883 4.18745 17.6693 4.27344 17.6324C4.35944 17.5954 4.43703 17.5414 4.50149 17.4736L12.0015 9.60155L19.4985 17.4736C19.563 17.5414 19.6405 17.5954 19.7265 17.6324C19.8125 17.6693 19.9052 17.6883 19.9987 17.6883C20.0923 17.6883 20.1849 17.6693 20.2709 17.6324C20.3569 17.5954 20.4345 17.5414 20.499 17.4736L20.508 17.4646C20.641 17.3251 20.7151 17.1398 20.7151 16.9471C20.7151 16.7543 20.641 16.569 20.508 16.4296L12.543 8.07005C12.4729 7.99653 12.3887 7.93801 12.2954 7.89801C12.202 7.85802 12.1015 7.8374 12 7.8374C11.8984 7.8374 11.798 7.85802 11.7046 7.89801C11.6113 7.93801 11.527 7.99653 11.457 8.07005Z" fill="#716E7B" stroke="#716E7B"/>
                        </svg></span><span style="margin-left:1px;color:#716E7B">${node.data._directSubordinatesPaging} </span></div>
                        ` : `<div style="display:flex;"><span style="align-items:center;display:flex;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.497 7.98903L12 15.297L4.503 7.98903C4.36905 7.85819 4.18924 7.78495 4.002 7.78495C3.81476 7.78495 3.63495 7.85819 3.501 7.98903C3.43614 8.05257 3.38462 8.12842 3.34944 8.21213C3.31427 8.29584 3.29615 8.38573 3.29615 8.47653C3.29615 8.56733 3.31427 8.65721 3.34944 8.74092C3.38462 8.82463 3.43614 8.90048 3.501 8.96403L11.4765 16.74C11.6166 16.8765 11.8044 16.953 12 16.953C12.1956 16.953 12.3834 16.8765 12.5235 16.74L20.499 8.96553C20.5643 8.90193 20.6162 8.8259 20.6517 8.74191C20.6871 8.65792 20.7054 8.56769 20.7054 8.47653C20.7054 8.38537 20.6871 8.29513 20.6517 8.21114C20.6162 8.12715 20.5643 8.05112 20.499 7.98753C20.3651 7.85669 20.1852 7.78345 19.998 7.78345C19.8108 7.78345 19.6309 7.85669 19.497 7.98753V7.98903Z" fill="#716E7B" stroke="#716E7B"/>
                        </svg></span><span style="margin-left:1px;color:#716E7B">${node.data._directSubordinatesPaging} </span></div>
                    `
        };
        return `<div style="border:1px solid #E4E2E9;border-radius:3px;padding:3px;font-size:9px;margin:auto auto;background-color:white"> ${icons[state.layout](node.children)}  </div>`;
      },
      /* Node paging button content and styling. You can access same helper methods as above. */
      pagingButton: (d, i, arr, state) => {
        const step = state.pagingStep(d.parent);
        const currentIndex = d.parent.data._pagingStep;
        const diff = d.parent.data._directSubordinatesPaging - currentIndex;
        const min3 = Math.min(diff, step);
        return `
                   <div style="margin-top:90px;">
                      <div style="display:flex;width:170px;border-radius:20px;padding:5px 15px; padding-bottom:4px;;background-color:#E5E9F2">
                      <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.59 7.41L10.18 12L5.59 16.59L7 18L13 12L7 6L5.59 7.41ZM16 6H18V18H16V6Z" fill="#716E7B" stroke="#716E7B"/>
                      </svg>
                      </div><div style="line-height:2"> Show next ${min3}  nodes </div></div>
                   </div>
                `;
      },
      /* You can access and modify actual node DOM element in runtime using this method. */
      nodeUpdate: function(d, i, arr) {
        d3.select(this).select(".node-rect").attr("stroke", (d2) => d2.data._highlighted || d2.data._upToTheRootHighlighted ? "#E27396" : "none").attr("stroke-width", d.data._highlighted || d.data._upToTheRootHighlighted ? 10 : 1);
      },
      nodeEnter: (d) => d,
      // Custom handling of node update
      nodeExit: (d) => d,
      // Custom handling of exit node
      /* You can access and modify actual link DOM element in runtime using this method. */
      linkUpdate: function(d, i, arr) {
        d3.select(this).attr("stroke", (d2) => d2.data._upToTheRootHighlighted ? "#E27396" : "#E4E2E9").attr("stroke-width", (d2) => d2.data._upToTheRootHighlighted ? 5 : 1);
        if (d.data._upToTheRootHighlighted) {
          d3.select(this).raise();
        }
      },
      /* Horizontal diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compact-horizontal */
      hdiagonal: function(s, t, m) {
        const x2 = s.x;
        const y2 = s.y;
        const ex = t.x;
        const ey = t.y;
        let mx = m && m.x != null ? m.x : x2;
        let my = m && m.y != null ? m.y : y2;
        let xrvs = ex - x2 < 0 ? -1 : 1;
        let yrvs = ey - y2 < 0 ? -1 : 1;
        let rdef = 35;
        let r = Math.abs(ex - x2) / 2 < rdef ? Math.abs(ex - x2) / 2 : rdef;
        r = Math.abs(ey - y2) / 2 < r ? Math.abs(ey - y2) / 2 : r;
        let h = Math.abs(ey - y2) / 2 - r;
        let w = Math.abs(ex - x2) / 2 - r;
        return `
                          M ${mx} ${my}
                          L ${mx} ${y2}
                          L ${x2} ${y2}
                          L ${x2 + w * xrvs} ${y2}
                          C ${x2 + w * xrvs + r * xrvs} ${y2} 
                            ${x2 + w * xrvs + r * xrvs} ${y2} 
                            ${x2 + w * xrvs + r * xrvs} ${y2 + r * yrvs}
                          L ${x2 + w * xrvs + r * xrvs} ${ey - r * yrvs} 
                          C ${x2 + w * xrvs + r * xrvs}  ${ey} 
                            ${x2 + w * xrvs + r * xrvs}  ${ey} 
                            ${ex - w * xrvs}  ${ey}
                          L ${ex} ${ey}
               `;
      },
      /* Vertical diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compacty-vertical */
      diagonal: function(s, t, m, offsets = { sy: 0 }) {
        const x2 = s.x;
        let y2 = s.y;
        const ex = t.x;
        const ey = t.y;
        let mx = m && m.x != null ? m.x : x2;
        let my = m && m.y != null ? m.y : y2;
        let xrvs = ex - x2 < 0 ? -1 : 1;
        let yrvs = ey - y2 < 0 ? -1 : 1;
        y2 += offsets.sy;
        let rdef = 35;
        let r = Math.abs(ex - x2) / 2 < rdef ? Math.abs(ex - x2) / 2 : rdef;
        r = Math.abs(ey - y2) / 2 < r ? Math.abs(ey - y2) / 2 : r;
        let h = Math.abs(ey - y2) / 2 - r;
        let w = Math.abs(ex - x2) - r * 2;
        const path2 = `
                          M ${mx} ${my}
                          L ${x2} ${my}
                          L ${x2} ${y2}
                          L ${x2} ${y2 + h * yrvs}
                          C  ${x2} ${y2 + h * yrvs + r * yrvs} ${x2} ${y2 + h * yrvs + r * yrvs} ${x2 + r * xrvs} ${y2 + h * yrvs + r * yrvs}
                          L ${x2 + w * xrvs + r * xrvs} ${y2 + h * yrvs + r * yrvs}
                          C  ${ex}  ${y2 + h * yrvs + r * yrvs} ${ex}  ${y2 + h * yrvs + r * yrvs} ${ex} ${ey - h * yrvs}
                          L ${ex} ${ey}
               `;
        return path2;
      },
      // Defining arrows with markers for connections
      defs: function(state, visibleConnections) {
        return `<defs>
                    ${visibleConnections.map((conn) => {
          const labelWidth = this.getTextWidth(conn.label, { ctx: state.ctx, fontSize: 2, defaultFont: state.defaultFont });
          return `
                       <marker id="${conn.from + "_" + conn.to}" refX="${conn._source.x < conn._target.x ? -7 : 7}" refY="5" markerWidth="500"  markerHeight="500"  orient="${conn._source.x < conn._target.x ? "auto" : "auto-start-reverse"}" >
                       <rect rx=0.5 width=${conn.label ? labelWidth + 3 : 0} height=3 y=1  fill="#E27396"></rect>
                       <text font-size="2px" x=1 fill="white" y=3>${conn.label || ""}</text>
                       </marker>

                       <marker id="arrow-${conn.from + "_" + conn.to}"  markerWidth="500"  markerHeight="500"  refY="2"  refX="1" orient="${conn._source.x < conn._target.x ? "auto" : "auto-start-reverse"}" >
                       <path transform="translate(0)" d='M0,0 V4 L2,2 Z' fill='#E27396' />
                       </marker>
                    `;
        }).join("")}
                    </defs>
                    `;
      },
      /* You can update connections with custom styling using this function */
      connectionsUpdate: function(d, i, arr) {
        d3.select(this).attr("stroke", (d2) => "#E27396").attr("stroke-linecap", "round").attr("stroke-width", (d2) => "5").attr("pointer-events", "none").attr("marker-start", (d2) => `url(#${d2.from + "_" + d2.to})`).attr("marker-end", (d2) => `url(#arrow-${d2.from + "_" + d2.to})`);
      },
      // Link generator for connections
      linkGroupArc: d3.linkHorizontal().x((d) => d.x).y((d) => d.y),
      /*
      *   You can customize/offset positions for each node and link by overriding these functions
      *   For example, suppose you want to move link y position 30 px bellow in top layout. You can do it like this:
      *   ```javascript
      *   const layout = chart.layoutBindings();
      *   layout.top.linkY = node => node.y + 30;
      *   chart.layoutBindings(layout);
      *   ```
      */
      layoutBindings: {
        "left": {
          "nodeLeftX": (node) => 0,
          "nodeRightX": (node) => node.width,
          "nodeTopY": (node) => -node.height / 2,
          "nodeBottomY": (node) => node.height / 2,
          "nodeJoinX": (node) => node.x + node.width,
          "nodeJoinY": (node) => node.y - node.height / 2,
          "linkJoinX": (node) => node.x + node.width,
          "linkJoinY": (node) => node.y,
          "linkX": (node) => node.x,
          "linkY": (node) => node.y,
          "linkCompactXStart": (node) => node.x + node.width / 2,
          //node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": (node) => node.y + (node.compactEven ? node.height / 2 : -node.height / 2),
          "compactLinkMidX": (node, state) => node.firstCompactNode.x,
          // node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node, state) => node.firstCompactNode.y + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "linkParentX": (node) => node.parent.x + node.parent.width,
          "linkParentY": (node) => node.parent.y,
          "buttonX": (node) => node.width,
          "buttonY": (node) => node.height / 2,
          "centerTransform": ({ root: root2, rootMargin, centerY, scale, centerX }) => `translate(${rootMargin},${centerY}) scale(${scale})`,
          "compactDimension": {
            sizeColumn: (node) => node.height,
            sizeRow: (node) => node.width,
            reverse: (arr) => arr.slice().reverse()
          },
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]];
              return result;
            }
            ;
            return [height + siblingsMargin, width + childrenMargin];
          },
          "zoomTransform": ({ centerY, scale }) => `translate(${0},${centerY}) scale(${scale})`,
          "diagonal": this.hdiagonal.bind(this),
          "swap": (d) => {
            const x2 = d.x;
            d.x = d.y;
            d.y = x2;
          },
          "nodeUpdateTransform": ({ x: x2, y: y2, width, height }) => `translate(${x2},${y2 - height / 2})`
        },
        "top": {
          "nodeLeftX": (node) => -node.width / 2,
          "nodeRightX": (node) => node.width / 2,
          "nodeTopY": (node) => 0,
          "nodeBottomY": (node) => node.height,
          "nodeJoinX": (node) => node.x - node.width / 2,
          "nodeJoinY": (node) => node.y + node.height,
          "linkJoinX": (node) => node.x,
          "linkJoinY": (node) => node.y + node.height,
          "linkCompactXStart": (node) => node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": (node) => node.y + node.height / 2,
          "compactLinkMidX": (node, state) => node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node) => node.firstCompactNode.y,
          "compactDimension": {
            sizeColumn: (node) => node.width,
            sizeRow: (node) => node.height,
            reverse: (arr) => arr
          },
          "linkX": (node) => node.x,
          "linkY": (node) => node.y,
          "linkParentX": (node) => node.parent.x,
          "linkParentY": (node) => node.parent.y + node.parent.height,
          "buttonX": (node) => node.width / 2,
          "buttonY": (node) => node.height,
          "centerTransform": ({ root: root2, rootMargin, centerY, scale, centerX }) => `translate(${centerX},${rootMargin}) scale(${scale})`,
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node, compactViewIndex }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]];
              return result;
            }
            ;
            return [width + siblingsMargin, height + childrenMargin];
          },
          "zoomTransform": ({ centerX, scale }) => `translate(${centerX},0}) scale(${scale})`,
          "diagonal": this.diagonal.bind(this),
          "swap": (d) => {
          },
          "nodeUpdateTransform": ({ x: x2, y: y2, width, height }) => `translate(${x2 - width / 2},${y2})`
        },
        "bottom": {
          "nodeLeftX": (node) => -node.width / 2,
          "nodeRightX": (node) => node.width / 2,
          "nodeTopY": (node) => -node.height,
          "nodeBottomY": (node) => 0,
          "nodeJoinX": (node) => node.x - node.width / 2,
          "nodeJoinY": (node) => node.y - node.height - node.height,
          "linkJoinX": (node) => node.x,
          "linkJoinY": (node) => node.y - node.height,
          "linkCompactXStart": (node) => node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": (node) => node.y - node.height / 2,
          "compactLinkMidX": (node, state) => node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node) => node.firstCompactNode.y,
          "linkX": (node) => node.x,
          "linkY": (node) => node.y,
          "compactDimension": {
            sizeColumn: (node) => node.width,
            sizeRow: (node) => node.height,
            reverse: (arr) => arr
          },
          "linkParentX": (node) => node.parent.x,
          "linkParentY": (node) => node.parent.y - node.parent.height,
          "buttonX": (node) => node.width / 2,
          "buttonY": (node) => 0,
          "centerTransform": ({ root: root2, rootMargin, centerY, scale, centerX, chartHeight }) => `translate(${centerX},${chartHeight - rootMargin}) scale(${scale})`,
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]];
              return result;
            }
            ;
            return [width + siblingsMargin, height + childrenMargin];
          },
          "zoomTransform": ({ centerX, scale }) => `translate(${centerX},0}) scale(${scale})`,
          "diagonal": this.diagonal.bind(this),
          "swap": (d) => {
            d.y = -d.y;
          },
          "nodeUpdateTransform": ({ x: x2, y: y2, width, height }) => `translate(${x2 - width / 2},${y2 - height})`
        },
        "right": {
          "nodeLeftX": (node) => -node.width,
          "nodeRightX": (node) => 0,
          "nodeTopY": (node) => -node.height / 2,
          "nodeBottomY": (node) => node.height / 2,
          "nodeJoinX": (node) => node.x - node.width - node.width,
          "nodeJoinY": (node) => node.y - node.height / 2,
          "linkJoinX": (node) => node.x - node.width,
          "linkJoinY": (node) => node.y,
          "linkX": (node) => node.x,
          "linkY": (node) => node.y,
          "linkParentX": (node) => node.parent.x - node.parent.width,
          "linkParentY": (node) => node.parent.y,
          "buttonX": (node) => 0,
          "buttonY": (node) => node.height / 2,
          "linkCompactXStart": (node) => node.x - node.width / 2,
          //node.x + (node.compactEven ? node.width / 2 : -node.width / 2),
          "linkCompactYStart": (node) => node.y + (node.compactEven ? node.height / 2 : -node.height / 2),
          "compactLinkMidX": (node, state) => node.firstCompactNode.x,
          // node.firstCompactNode.x + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "compactLinkMidY": (node, state) => node.firstCompactNode.y + node.firstCompactNode.flexCompactDim[0] / 4 + state.compactMarginPair(node) / 4,
          "centerTransform": ({ root: root2, rootMargin, centerY, scale, centerX, chartWidth }) => `translate(${chartWidth - rootMargin},${centerY}) scale(${scale})`,
          "nodeFlexSize": ({ height, width, siblingsMargin, childrenMargin, state, node }) => {
            if (state.compact && node.flexCompactDim) {
              const result = [node.flexCompactDim[0], node.flexCompactDim[1]];
              return result;
            }
            ;
            return [height + siblingsMargin, width + childrenMargin];
          },
          "compactDimension": {
            sizeColumn: (node) => node.height,
            sizeRow: (node) => node.width,
            reverse: (arr) => arr.slice().reverse()
          },
          "zoomTransform": ({ centerY, scale }) => `translate(${0},${centerY}) scale(${scale})`,
          "diagonal": this.hdiagonal.bind(this),
          "swap": (d) => {
            const x2 = d.x;
            d.x = -d.y;
            d.y = x2;
          },
          "nodeUpdateTransform": ({ x: x2, y: y2, width, height }) => `translate(${x2 - width},${y2 - height / 2})`
        }
      }
    };
    this.getChartState = () => attrs;
    Object.keys(attrs).forEach((key) => {
      this[key] = function(_) {
        if (!arguments.length) {
          return attrs[key];
        } else {
          attrs[key] = _;
        }
        return this;
      };
    });
    this.initializeEnterExitUpdatePattern();
  }
  initializeEnterExitUpdatePattern() {
    d3.selection.prototype.patternify = function(params) {
      var container = this;
      var selector = params.selector;
      var elementTag = params.tag;
      var data = params.data || [selector];
      var selection2 = container.selectAll("." + selector).data(data, (d, i) => {
        if (typeof d === "object") {
          if (d.id) {
            return d.id;
          }
        }
        return i;
      });
      selection2.exit().remove();
      selection2 = selection2.enter().append(elementTag).merge(selection2);
      selection2.attr("class", selector);
      return selection2;
    };
  }
  // This method retrieves passed node's children IDs (including node)
  getNodeChildren({ data, children: children2, _children }, nodeStore) {
    nodeStore.push(data);
    if (children2) {
      children2.forEach((d) => {
        this.getNodeChildren(d, nodeStore);
      });
    }
    if (_children) {
      _children.forEach((d) => {
        this.getNodeChildren(d, nodeStore);
      });
    }
    return nodeStore;
  }
  // This method can be invoked via chart.setZoomFactor API, it zooms to particulat scale
  initialZoom(zoomLevel) {
    const attrs = this.getChartState();
    attrs.lastTransform.k = zoomLevel;
    return this;
  }
  render() {
    const attrs = this.getChartState();
    if (!attrs.data || attrs.data.length == 0) {
      console.log("ORG CHART - Data is empty");
      if (attrs.container) {
        select_default2(attrs.container).select(".nodes-wrapper").remove();
        select_default2(attrs.container).select(".links-wrapper").remove();
        select_default2(attrs.container).select(".connections-wrapper").remove();
      }
      return this;
    }
    const container = d3.select(attrs.container);
    const containerRect = container.node().getBoundingClientRect();
    if (containerRect.width > 0) attrs.svgWidth = containerRect.width;
    const calc = {
      id: `ID${Math.floor(Math.random() * 1e6)}`,
      // id for event handlings,
      chartWidth: attrs.svgWidth,
      chartHeight: attrs.svgHeight
    };
    attrs.calc = calc;
    calc.centerX = calc.chartWidth / 2;
    calc.centerY = calc.chartHeight / 2;
    if (attrs.firstDraw) {
      const behaviors = {
        zoom: null
      };
      behaviors.zoom = attrs.createZoom().clickDistance(10).on("start", (event, d) => attrs.onZoomStart(event)).on("end", (event, d) => attrs.onZoomEnd(event)).on("zoom", (event, d) => {
        attrs.onZoom(event);
        this.zoomed(event, d);
      }).scaleExtent(attrs.scaleExtent);
      attrs.zoomBehavior = behaviors.zoom;
    }
    attrs.flexTreeLayout = flextree({
      nodeSize: (node) => {
        const width = attrs.nodeWidth(node);
        ;
        const height = attrs.nodeHeight(node);
        const siblingsMargin = attrs.siblingsMargin(node);
        const childrenMargin = attrs.childrenMargin(node);
        return attrs.layoutBindings[attrs.layout].nodeFlexSize({
          state: attrs,
          node,
          width,
          height,
          siblingsMargin,
          childrenMargin
        });
      }
    }).spacing((nodeA, nodeB) => nodeA.parent == nodeB.parent ? 0 : attrs.neighbourMargin(nodeA, nodeB));
    this.setLayouts({ expandNodesFirst: false });
    const svg = container.patternify({
      tag: "svg",
      selector: "svg-chart-container"
    }).attr("width", attrs.svgWidth).attr("height", attrs.svgHeight).attr("font-family", attrs.defaultFont);
    if (attrs.firstDraw) {
      svg.call(attrs.zoomBehavior).on("dblclick.zoom", null).attr("cursor", "move");
    }
    attrs.svg = svg;
    const chart = svg.patternify({
      tag: "g",
      selector: "chart"
    });
    attrs.centerG = chart.patternify({
      tag: "g",
      selector: "center-group"
    });
    attrs.linksWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "links-wrapper"
    });
    attrs.nodesWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "nodes-wrapper"
    });
    attrs.connectionsWrapper = attrs.centerG.patternify({
      tag: "g",
      selector: "connections-wrapper"
    });
    attrs.defsWrapper = svg.patternify({
      tag: "g",
      selector: "defs-wrapper"
    });
    if (attrs.firstDraw) {
      attrs.centerG.attr("transform", () => {
        return attrs.layoutBindings[attrs.layout].centerTransform({
          centerX: calc.centerX,
          centerY: calc.centerY,
          scale: attrs.lastTransform.k,
          rootMargin: attrs.rootMargin,
          root: attrs.root,
          chartHeight: calc.chartHeight,
          chartWidth: calc.chartWidth
        });
      });
    }
    attrs.chart = chart;
    this.update(attrs.root);
    d3.select(window).on(`resize.${attrs.id}`, () => {
      const containerRect2 = d3.select(attrs.container).node().getBoundingClientRect();
      attrs.svg.attr("width", containerRect2.width);
    });
    if (attrs.firstDraw) {
      attrs.firstDraw = false;
    }
    return this;
  }
  // This function can be invoked via chart.addNode API, and it adds node in tree at runtime
  addNode(obj) {
    const attrs = this.getChartState();
    if (obj && (attrs.parentNodeId(obj) == null || attrs.parentNodeId(obj) == attrs.nodeId(obj)) && attrs.data.length == 0) {
      attrs.data.push(obj);
      this.render();
      return this;
    }
    const root2 = attrs.generateRoot(attrs.data);
    const descendants = root2.descendants();
    const nodeFound = descendants.filter(({ data }) => attrs.nodeId(data).toString() === attrs.nodeId(obj).toString())[0];
    const parentFound = descendants.filter(({ data }) => attrs.nodeId(data).toString() === attrs.parentNodeId(obj).toString())[0];
    if (nodeFound) {
      console.log(`ORG CHART - ADD - Node with id "${attrs.nodeId(obj)}" already exists in tree`);
      return this;
    }
    if (obj._centered && !obj._expanded) obj._expanded = true;
    attrs.data.push(obj);
    this.updateNodesState();
    return this;
  }
  // This function can be invoked via chart.removeNode API, and it removes node from tree at runtime
  removeNode(nodeId) {
    const attrs = this.getChartState();
    const root2 = attrs.generateRoot(attrs.data);
    const descendants = root2.descendants();
    const node = descendants.filter(({ data }) => attrs.nodeId(data) == nodeId)[0];
    if (!node) {
      console.log(`ORG CHART - REMOVE - Node with id "${nodeId}" not found in the tree`);
      return this;
    }
    const nodeDescendants = node.descendants();
    nodeDescendants.forEach((d) => d.data._filteredOut = true);
    attrs.data = attrs.data.filter((d) => !d._filteredOut);
    if (attrs.data.length == 0) {
      this.render();
    } else {
      const updateNodesState = this.updateNodesState.bind(this);
      updateNodesState();
    }
    return this;
  }
  groupBy(array2, accessor, aggegator) {
    const grouped = {};
    array2.forEach((item) => {
      const key = accessor(item);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item);
    });
    Object.keys(grouped).forEach((key) => {
      grouped[key] = aggegator(grouped[key]);
    });
    return Object.entries(grouped);
  }
  calculateCompactFlexDimensions(root2) {
    const attrs = this.getChartState();
    root2.eachBefore((node) => {
      node.firstCompact = null;
      node.compactEven = null;
      node.flexCompactDim = null;
      node.firstCompactNode = null;
    });
    root2.eachBefore((node) => {
      if (node.children && node.children.length > 1) {
        const compactChildren = node.children.filter((d) => !d.children);
        if (compactChildren.length < 2) return;
        compactChildren.forEach((child, i) => {
          if (!i) child.firstCompact = true;
          if (i % 2) child.compactEven = false;
          else child.compactEven = true;
          child.row = Math.floor(i / 2);
        });
        const evenMaxColumnDimension = d3.max(compactChildren.filter((d) => d.compactEven), attrs.layoutBindings[attrs.layout].compactDimension.sizeColumn);
        const oddMaxColumnDimension = d3.max(compactChildren.filter((d) => !d.compactEven), attrs.layoutBindings[attrs.layout].compactDimension.sizeColumn);
        const columnSize = Math.max(evenMaxColumnDimension, oddMaxColumnDimension) * 2;
        const rowsMapNew = this.groupBy(compactChildren, (d) => d.row, (reducedGroup) => d3.max(reducedGroup, (d) => attrs.layoutBindings[attrs.layout].compactDimension.sizeRow(d) + attrs.compactMarginBetween(d)));
        const rowSize = d3.sum(rowsMapNew.map((v) => v[1]));
        compactChildren.forEach((node2) => {
          node2.firstCompactNode = compactChildren[0];
          if (node2.firstCompact) {
            node2.flexCompactDim = [
              columnSize + attrs.compactMarginPair(node2),
              rowSize - attrs.compactMarginBetween(node2)
            ];
          } else {
            node2.flexCompactDim = [0, 0];
          }
        });
        node.flexCompactDim = null;
      }
    });
  }
  calculateCompactFlexPositions(root2) {
    const attrs = this.getChartState();
    root2.eachBefore((node) => {
      if (node.children) {
        const compactChildren = node.children.filter((d) => d.flexCompactDim);
        const fch = compactChildren[0];
        if (!fch) return;
        compactChildren.forEach((child, i, arr) => {
          if (i == 0) fch.x -= fch.flexCompactDim[0] / 2;
          if (i & i % 2 - 1) child.x = fch.x + fch.flexCompactDim[0] * 0.25 - attrs.compactMarginPair(child) / 4;
          else if (i) child.x = fch.x + fch.flexCompactDim[0] * 0.75 + attrs.compactMarginPair(child) / 4;
        });
        const centerX = fch.x + fch.flexCompactDim[0] * 0.5;
        fch.x = fch.x + fch.flexCompactDim[0] * 0.25 - attrs.compactMarginPair(fch) / 4;
        const offsetX = node.x - centerX;
        if (Math.abs(offsetX) < 10) {
          compactChildren.forEach((d) => d.x += offsetX);
        }
        const rowsMapNew = this.groupBy(compactChildren, (d) => d.row, (reducedGroup) => d3.max(reducedGroup, (d) => attrs.layoutBindings[attrs.layout].compactDimension.sizeRow(d)));
        const cumSum = d3.cumsum(rowsMapNew.map((d) => d[1] + attrs.compactMarginBetween(d)));
        compactChildren.forEach((node2, i) => {
          if (node2.row) {
            node2.y = fch.y + cumSum[node2.row - 1];
          } else {
            node2.y = fch.y;
          }
        });
      }
    });
  }
  // This function basically redraws visible graph, based on nodes state
  update({ x0, y0, x: x2 = 0, y: y2 = 0, width, height }) {
    const attrs = this.getChartState();
    const calc = attrs.calc;
    if (attrs.compact) {
      this.calculateCompactFlexDimensions(attrs.root);
    }
    const treeData = attrs.flexTreeLayout(attrs.root);
    if (attrs.compact) {
      this.calculateCompactFlexPositions(attrs.root);
    }
    const nodes = treeData.descendants();
    const links = treeData.descendants().slice(1);
    nodes.forEach(attrs.layoutBindings[attrs.layout].swap);
    const connections = attrs.connections;
    const allNodesMap = {};
    attrs.allNodes.forEach((d) => allNodesMap[attrs.nodeId(d.data)] = d);
    const visibleNodesMap = {};
    nodes.forEach((d) => visibleNodesMap[attrs.nodeId(d.data)] = d);
    connections.forEach((connection) => {
      const source = allNodesMap[connection.from];
      const target = allNodesMap[connection.to];
      connection._source = source;
      connection._target = target;
    });
    const visibleConnections = connections.filter((d) => visibleNodesMap[d.from] && visibleNodesMap[d.to]);
    const defsString = attrs.defs.bind(this)(attrs, visibleConnections);
    const existingString = attrs.defsWrapper.html();
    if (defsString !== existingString) {
      attrs.defsWrapper.html(defsString);
    }
    const linkSelection = attrs.linksWrapper.selectAll("path.link").data(links, (d) => attrs.nodeId(d.data));
    const linkEnter = linkSelection.enter().insert("path", "g").attr("class", "link").attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({ x: x0, y: y0, width, height });
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({ x: x0, y: y0, width, height });
      const o = { x: xo, y: yo };
      return attrs.layoutBindings[attrs.layout].diagonal(o, o, o);
    });
    const linkUpdate = linkEnter.merge(linkSelection);
    linkUpdate.attr("fill", "none");
    if (this.isEdge()) {
      linkUpdate.style("display", (d) => {
        const display = d.data._pagingButton ? "none" : "auto";
        return display;
      });
    } else {
      linkUpdate.attr("display", (d) => {
        const display = d.data._pagingButton ? "none" : "auto";
        return display;
      });
    }
    linkUpdate.each(attrs.linkUpdate);
    linkUpdate.transition().duration(attrs.duration).attr("d", (d) => {
      const n = attrs.compact && d.flexCompactDim ? {
        x: attrs.layoutBindings[attrs.layout].compactLinkMidX(d, attrs),
        y: attrs.layoutBindings[attrs.layout].compactLinkMidY(d, attrs)
      } : {
        x: attrs.layoutBindings[attrs.layout].linkX(d),
        y: attrs.layoutBindings[attrs.layout].linkY(d)
      };
      const p = {
        x: attrs.layoutBindings[attrs.layout].linkParentX(d),
        y: attrs.layoutBindings[attrs.layout].linkParentY(d)
      };
      const m = attrs.compact && d.flexCompactDim ? {
        x: attrs.layoutBindings[attrs.layout].linkCompactXStart(d),
        y: attrs.layoutBindings[attrs.layout].linkCompactYStart(d)
      } : n;
      return attrs.layoutBindings[attrs.layout].diagonal(n, p, m, { sy: attrs.linkYOffset });
    });
    const linkExit = linkSelection.exit().transition().duration(attrs.duration).attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({ x: x2, y: y2, width, height });
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({ x: x2, y: y2, width, height });
      const o = { x: xo, y: yo };
      return attrs.layoutBindings[attrs.layout].diagonal(o, o, null, { sy: attrs.linkYOffset });
    }).remove();
    const connectionsSel = attrs.connectionsWrapper.selectAll("path.connection").data(visibleConnections);
    const connEnter = connectionsSel.enter().insert("path", "g").attr("class", "connection").attr("d", (d) => {
      const xo = attrs.layoutBindings[attrs.layout].linkJoinX({ x: x0, y: y0, width, height });
      const yo = attrs.layoutBindings[attrs.layout].linkJoinY({ x: x0, y: y0, width, height });
      const o = { x: xo, y: yo };
      return attrs.layoutBindings[attrs.layout].diagonal(o, o, null, { sy: attrs.linkYOffset });
    });
    const connUpdate = connEnter.merge(connectionsSel);
    connUpdate.attr("fill", "none");
    connUpdate.transition().duration(attrs.duration).attr("d", (d) => {
      const xs = attrs.layoutBindings[attrs.layout].linkX({ x: d._source.x, y: d._source.y, width: d._source.width, height: d._source.height });
      const ys = attrs.layoutBindings[attrs.layout].linkY({ x: d._source.x, y: d._source.y, width: d._source.width, height: d._source.height });
      const xt = attrs.layoutBindings[attrs.layout].linkJoinX({ x: d._target.x, y: d._target.y, width: d._target.width, height: d._target.height });
      const yt = attrs.layoutBindings[attrs.layout].linkJoinY({ x: d._target.x, y: d._target.y, width: d._target.width, height: d._target.height });
      return attrs.linkGroupArc({ source: { x: xs, y: ys }, target: { x: xt, y: yt } });
    });
    connUpdate.each(attrs.connectionsUpdate);
    const connExit = connectionsSel.exit().transition().duration(attrs.duration).attr("opacity", 0).remove();
    const nodesSelection = attrs.nodesWrapper.selectAll("g.node").data(nodes, ({ data }) => attrs.nodeId(data));
    const nodeEnter = nodesSelection.enter().append("g").attr("class", "node").attr("transform", (d) => {
      if (d == attrs.root) return `translate(${x0},${y0})`;
      const xj = attrs.layoutBindings[attrs.layout].nodeJoinX({ x: x0, y: y0, width, height });
      const yj = attrs.layoutBindings[attrs.layout].nodeJoinY({ x: x0, y: y0, width, height });
      return `translate(${xj},${yj})`;
    }).attr("cursor", "pointer").on("click.node", (event, node) => {
      const { data } = node;
      if ([...event.srcElement.classList].includes("node-button-foreign-object")) {
        return;
      }
      if ([...event.srcElement.classList].includes("paging-button-wrapper")) {
        this.loadPagingNodes(node);
        return;
      }
      if (!data._pagingButton) {
        attrs.onNodeClick(node);
        return;
      }
      console.log("event fired, no handlers");
    }).on("keydown.node", (event, node) => {
      const { data } = node;
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        if ([...event.srcElement.classList].includes("node-button-foreign-object")) {
          return;
        }
        if ([...event.srcElement.classList].includes("paging-button-wrapper")) {
          this.loadPagingNodes(node);
          return;
        }
        if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
          this.onButtonClick(event, node);
        }
      }
    });
    nodeEnter.each(attrs.nodeEnter);
    nodeEnter.patternify({
      tag: "rect",
      selector: "node-rect",
      data: (d) => [d]
    });
    const nodeUpdate = nodeEnter.merge(nodesSelection).style("font", "12px sans-serif");
    const fo = nodeUpdate.patternify({
      tag: "foreignObject",
      selector: "node-foreign-object",
      data: (d) => [d]
    }).style("overflow", "visible");
    fo.patternify({
      tag: "xhtml:div",
      selector: "node-foreign-object-div",
      data: (d) => [d]
    });
    this.restyleForeignObjectElements();
    const nodeButtonGroups = nodeEnter.patternify({
      tag: "g",
      selector: "node-button-g",
      data: (d) => [d]
    }).on("click", (event, d) => this.onButtonClick(event, d)).on("keydown", (event, d) => {
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        this.onButtonClick(event, d);
      }
    });
    nodeButtonGroups.patternify({
      tag: "rect",
      selector: "node-button-rect",
      data: (d) => [d]
    }).attr("opacity", 0).attr("pointer-events", "all").attr("width", (d) => attrs.nodeButtonWidth(d)).attr("height", (d) => attrs.nodeButtonHeight(d)).attr("x", (d) => attrs.nodeButtonX(d)).attr("y", (d) => attrs.nodeButtonY(d));
    const nodeFo = nodeButtonGroups.patternify({
      tag: "foreignObject",
      selector: "node-button-foreign-object",
      data: (d) => [d]
    }).attr("width", (d) => attrs.nodeButtonWidth(d)).attr("height", (d) => attrs.nodeButtonHeight(d)).attr("x", (d) => attrs.nodeButtonX(d)).attr("y", (d) => attrs.nodeButtonY(d)).style("overflow", "visible").patternify({
      tag: "xhtml:div",
      selector: "node-button-div",
      data: (d) => [d]
    }).style("pointer-events", "none").style("display", "flex").style("width", "100%").style("height", "100%");
    nodeUpdate.transition().attr("opacity", 0).duration(attrs.duration).attr("transform", ({ x: x3, y: y3, width: width2, height: height2 }) => {
      return attrs.layoutBindings[attrs.layout].nodeUpdateTransform({ x: x3, y: y3, width: width2, height: height2 });
    }).attr("opacity", 1);
    nodeUpdate.select(".node-rect").attr("width", ({ width: width2 }) => width2).attr("height", ({ height: height2 }) => height2).attr("x", ({ width: width2 }) => 0).attr("y", ({ height: height2 }) => 0).attr("cursor", "pointer").attr("rx", 3).attr("fill", attrs.nodeDefaultBackground);
    nodeUpdate.select(".node-button-g").attr("transform", ({ data, width: width2, height: height2 }) => {
      const x3 = attrs.layoutBindings[attrs.layout].buttonX({ width: width2, height: height2 });
      const y3 = attrs.layoutBindings[attrs.layout].buttonY({ width: width2, height: height2 });
      return `translate(${x3},${y3})`;
    }).attr("display", ({ data }) => {
      return data._directSubordinates > 0 ? null : "none";
    }).attr("opacity", ({ data, children: children2, _children }) => {
      if (data._pagingButton) {
        return 0;
      }
      if (children2 || _children) {
        return 1;
      }
      return 0;
    });
    nodeUpdate.select(".node-button-foreign-object .node-button-div").html((node) => {
      return attrs.buttonContent({ node, state: attrs });
    });
    nodeUpdate.select(".node-button-text").attr("text-anchor", "middle").attr("alignment-baseline", "middle").attr("font-size", ({ children: children2 }) => {
      if (children2) return 40;
      return 26;
    }).text(({ children: children2 }) => {
      if (children2) return "-";
      return "+";
    }).attr("y", this.isEdge() ? 10 : 0);
    nodeUpdate.each(attrs.nodeUpdate);
    const nodeExitTransition = nodesSelection.exit();
    nodeExitTransition.each(attrs.nodeExit);
    const maxDepthNode = nodeExitTransition.data().reduce((a, b) => a.depth < b.depth ? a : b, { depth: Infinity });
    nodeExitTransition.attr("opacity", 1).transition().duration(attrs.duration).attr("transform", (d) => {
      let { x: x3, y: y3, width: width2, height: height2 } = maxDepthNode.parent || {};
      const ex = attrs.layoutBindings[attrs.layout].nodeJoinX({ x: x3, y: y3, width: width2, height: height2 });
      const ey = attrs.layoutBindings[attrs.layout].nodeJoinY({ x: x3, y: y3, width: width2, height: height2 });
      return `translate(${ex},${ey})`;
    }).on("end", function() {
      d3.select(this).remove();
    }).attr("opacity", 0);
    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    const centeredNode = attrs.allNodes.filter((d) => d.data._centered)[0];
    if (centeredNode) {
      let centeredNodes = [centeredNode];
      if (centeredNode.data._centeredWithDescendants) {
        if (attrs.compact) {
          centeredNodes = centeredNode.descendants().filter((d, i) => i < 7);
        } else {
          centeredNodes = centeredNode.descendants().filter((d, i, arr) => {
            const h = Math.round(arr.length / 2);
            const spread = 2;
            if (arr.length % 2) {
              return i > h - spread && i < h + spread - 1;
            }
            return i > h - spread && i < h + spread;
          });
        }
      }
      centeredNode.data._centeredWithDescendants = null;
      centeredNode.data._centered = null;
      this.fit({
        animate: true,
        scale: false,
        nodes: centeredNodes
      });
    }
  }
  // This function detects whether current browser is edge
  isEdge() {
    return window.navigator.userAgent.includes("Edge");
  }
  // Generate horizontal diagonal - play with it here - https://observablehq.com/@bumbeishvili/curved-edges-horizontal-d3-v3-v4-v5-v6
  hdiagonal(s, t, m, offsets) {
    const state = this.getChartState();
    return state.hdiagonal(s, t, m, offsets);
  }
  // Generate custom diagonal - play with it here - https://observablehq.com/@bumbeishvili/curved-edges
  diagonal(s, t, m, offsets) {
    const state = this.getChartState();
    return state.diagonal(s, t, m, offsets);
  }
  restyleForeignObjectElements() {
    const attrs = this.getChartState();
    attrs.svg.selectAll(".node-foreign-object").attr("width", ({ width }) => width).attr("height", ({ height }) => height).attr("x", ({ width }) => 0).attr("y", ({ height }) => 0);
    attrs.svg.selectAll(".node-foreign-object-div").style("width", ({ width }) => `${width}px`).style("height", ({ height }) => `${height}px`).html(function(d, i, arr) {
      if (d.data._pagingButton) {
        return `<div class="paging-button-wrapper"><div style="pointer-events:none">${attrs.pagingButton(d, i, arr, attrs)}</div></div>`;
      }
      return attrs.nodeContent.bind(this)(d, i, arr, attrs);
    });
  }
  // Toggle children on click.
  onButtonClick(event, d) {
    const attrs = this.getChartState();
    if (d.data._pagingButton) {
      return;
    }
    if (attrs.setActiveNodeCentered) {
      d.data._centered = true;
      d.data._centeredWithDescendants = true;
    }
    if (d.children) {
      d._children = d.children;
      d.children = null;
      this.setExpansionFlagToChildren(d, false);
    } else {
      d.children = d._children;
      d._children = null;
      if (d.children) {
        d.children.forEach(({ data }) => data._expanded = true);
      }
    }
    this.update(d);
    event.stopPropagation();
    attrs.onExpandOrCollapse(d);
  }
  // This function changes `expanded` property to descendants
  setExpansionFlagToChildren({ data, children: children2, _children }, flag) {
    data._expanded = flag;
    if (children2) {
      children2.forEach((d) => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }
    if (_children) {
      _children.forEach((d) => {
        this.setExpansionFlagToChildren(d, flag);
      });
    }
  }
  // Method which only expands nodes, which have property set "expanded=true"
  expandSomeNodes(d) {
    if (d.data._expanded) {
      let parent = d.parent;
      while (parent && parent._children) {
        parent.children = parent._children;
        parent._children = null;
        parent = parent.parent;
      }
    }
    if (d._children) {
      d._children.forEach((ch) => this.expandSomeNodes(ch));
    }
    if (d.children) {
      d.children.forEach((ch) => this.expandSomeNodes(ch));
    }
  }
  // This function updates nodes state and redraws graph, usually after data change
  updateNodesState() {
    const attrs = this.getChartState();
    this.setLayouts({ expandNodesFirst: true });
    this.update(attrs.root);
  }
  setLayouts({ expandNodesFirst = true }) {
    const attrs = this.getChartState();
    attrs.generateRoot = d3.stratify().id((d) => attrs.nodeId(d)).parentId((d) => attrs.parentNodeId(d));
    attrs.root = attrs.generateRoot(attrs.data);
    const descendantsBefore = attrs.root.descendants();
    if (attrs.initialExpandLevel > 1 && descendantsBefore.length > 0) {
      descendantsBefore.forEach((d) => {
        if (d.depth <= attrs.initialExpandLevel) {
          d.data._expanded = true;
        }
      });
      attrs.initialExpandLevel = 1;
    }
    const hiddenNodesMap = {};
    attrs.root.descendants().filter((node) => node.children).filter((node) => !node.data._pagingStep).forEach((node) => {
      node.data._pagingStep = attrs.minPagingVisibleNodes(node);
    });
    attrs.root.eachBefore((node, i) => {
      node.data._directSubordinatesPaging = node.children ? node.children.length : 0;
      if (node.children) {
        node.children.forEach((child, j) => {
          child.data._pagingButton = false;
          if (j > node.data._pagingStep) {
            hiddenNodesMap[child.id] = true;
          }
          if (j === node.data._pagingStep && node.children.length - 1 > node.data._pagingStep) {
            child.data._pagingButton = true;
          }
          if (hiddenNodesMap[child.parent.id]) {
            hiddenNodesMap[child.id] = true;
          }
          if (child.data._expanded || child.data._centered || child.data._highlighted || child.data._upToTheRootHighlighted) {
            let localNode = child;
            while (localNode && (hiddenNodesMap[localNode.id] || localNode.data._pagingButton)) {
              hiddenNodesMap[localNode.id] = false;
              if (localNode.data._pagingButton) {
                localNode.data._pagingButton = false;
                localNode.parent.children.forEach((ch) => {
                  ch.data._expanded = true;
                  hiddenNodesMap[ch.id] = false;
                });
              }
              localNode = localNode.parent;
            }
          }
        });
      }
    });
    attrs.root = d3.stratify().id((d) => attrs.nodeId(d)).parentId((d) => attrs.parentNodeId(d))(attrs.data.filter((d) => hiddenNodesMap[d.id] !== true));
    attrs.root.each((node, i, arr) => {
      let _hierarchyHeight = node._hierarchyHeight || node.height;
      let width = attrs.nodeWidth(node);
      let height = attrs.nodeHeight(node);
      Object.assign(node, { width, height, _hierarchyHeight });
    });
    attrs.root.x0 = 0;
    attrs.root.y0 = 0;
    attrs.allNodes = attrs.root.descendants();
    attrs.allNodes.forEach((d) => {
      Object.assign(d.data, {
        _directSubordinates: d.children ? d.children.length : 0,
        _totalSubordinates: d.descendants().length - 1
      });
    });
    if (attrs.root.children) {
      if (expandNodesFirst) {
        attrs.root.children.forEach(this.expand);
      }
      attrs.root.children.forEach((d) => this.collapse(d));
      if (attrs.initialExpandLevel == 0) {
        attrs.root._children = attrs.root.children;
        attrs.root.children = null;
      }
      [attrs.root].forEach((ch) => this.expandSomeNodes(ch));
    }
  }
  // Function which collapses passed node and it's descendants
  collapse(d) {
    if (d.children) {
      d._children = d.children;
      d._children.forEach((ch) => this.collapse(ch));
      d.children = null;
    }
  }
  // Function which expands passed node and it's descendants
  expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach((ch) => this.expand(ch));
      d._children = null;
    }
  }
  // Zoom handler function
  zoomed(event, d) {
    const attrs = this.getChartState();
    const chart = attrs.chart;
    const transform2 = event.transform;
    attrs.lastTransform = transform2;
    chart.attr("transform", transform2);
    if (this.isEdge()) {
      this.restyleForeignObjectElements();
    }
  }
  zoomTreeBounds({ x0, x1, y0, y1, params = { animate: true, scale: true, onCompleted: () => {
  } } }) {
    const { centerG, svgWidth: w, svgHeight: h, svg, zoomBehavior, duration, lastTransform } = this.getChartState();
    let scaleVal = Math.min(8, 0.9 / Math.max((x1 - x0) / w, (y1 - y0) / h));
    let identity3 = d3.zoomIdentity.translate(w / 2, h / 2);
    identity3 = identity3.scale(params.scale ? scaleVal : lastTransform.k);
    identity3 = identity3.translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
    svg.transition().duration(params.animate ? duration : 0).call(zoomBehavior.transform, identity3);
    centerG.transition().duration(params.animate ? duration : 0).attr("transform", "translate(0,0)").on("end", function() {
      if (params.onCompleted) {
        params.onCompleted();
      }
    });
  }
  fit({ animate = true, nodes, scale = true, onCompleted = () => {
  } } = {}) {
    const attrs = this.getChartState();
    const { root: root2 } = attrs;
    let descendants = nodes ? nodes : root2.descendants();
    const minX = d3.min(descendants, (d) => d.x + attrs.layoutBindings[attrs.layout].nodeLeftX(d));
    const maxX = d3.max(descendants, (d) => d.x + attrs.layoutBindings[attrs.layout].nodeRightX(d));
    const minY = d3.min(descendants, (d) => d.y + attrs.layoutBindings[attrs.layout].nodeTopY(d));
    const maxY = d3.max(descendants, (d) => d.y + attrs.layoutBindings[attrs.layout].nodeBottomY(d));
    this.zoomTreeBounds({
      params: { animate, scale, onCompleted },
      x0: minX - 50,
      x1: maxX + 50,
      y0: minY - 50,
      y1: maxY + 50
    });
    return this;
  }
  // Load Paging Nodes
  loadPagingNodes(node) {
    const attrs = this.getChartState();
    node.data._pagingButton = false;
    const current = node.parent.data._pagingStep;
    const step = attrs.pagingStep(node.parent);
    const newPagingIndex = current + step;
    node.parent.data._pagingStep = newPagingIndex;
    this.updateNodesState();
  }
  // This function can be invoked via chart.setExpanded API, it expands or collapses particular node
  setExpanded(id2, expandedFlag = true) {
    const attrs = this.getChartState();
    const node = attrs.allNodes.filter(({ data }) => attrs.nodeId(data) == id2)[0];
    if (!node) {
      console.log(`ORG CHART - ${expandedFlag ? "EXPAND" : "COLLAPSE"} - Node with id (${id2})  not found in the tree`);
      return this;
    }
    node.data._expanded = expandedFlag;
    if (expandedFlag == false) {
      const parent = node.parent || { descendants: () => [] };
      const descendants = parent.descendants().filter((d) => d != parent);
      descendants.forEach((d) => d.data._expanded = false);
    }
    return this;
  }
  setCentered(nodeId) {
    const attrs = this.getChartState();
    const root2 = attrs.generateRoot(attrs.data);
    const descendants = root2.descendants();
    const node = descendants.filter(({ data }) => attrs.nodeId(data).toString() == nodeId.toString())[0];
    if (!node) {
      console.log(`ORG CHART - CENTER - Node with id (${nodeId}) not found in the tree`);
      return this;
    }
    const ancestors = node.ancestors();
    ancestors.forEach((d) => d.data._expanded = true);
    node.data._centered = true;
    node.data._expanded = true;
    return this;
  }
  setHighlighted(nodeId) {
    const attrs = this.getChartState();
    const root2 = attrs.generateRoot(attrs.data);
    const descendants = root2.descendants();
    const node = descendants.filter((d) => attrs.nodeId(d.data).toString() === nodeId.toString())[0];
    if (!node) {
      console.log(`ORG CHART - HIGHLIGHT - Node with id (${nodeId})  not found in the tree`);
      return this;
    }
    const ancestors = node.ancestors();
    ancestors.forEach((d) => d.data._expanded = true);
    node.data._highlighted = true;
    node.data._expanded = true;
    node.data._centered = true;
    return this;
  }
  setUpToTheRootHighlighted(nodeId) {
    const attrs = this.getChartState();
    const root2 = attrs.generateRoot(attrs.data);
    const descendants = root2.descendants();
    const node = descendants.filter((d) => attrs.nodeId(d.data).toString() === nodeId.toString())[0];
    if (!node) {
      console.log(`ORG CHART - HIGHLIGHTROOT - Node with id (${nodeId}) not found in the tree`);
      return this;
    }
    const ancestors = node.ancestors();
    ancestors.forEach((d) => d.data._expanded = true);
    node.data._upToTheRootHighlighted = true;
    node.data._expanded = true;
    node.ancestors().forEach((d) => d.data._upToTheRootHighlighted = true);
    return this;
  }
  clearHighlighting() {
    const attrs = this.getChartState();
    attrs.allNodes.forEach((d) => {
      d.data._highlighted = false;
      d.data._upToTheRootHighlighted = false;
    });
    this.update(attrs.root);
    return this;
  }
  // It can take selector which would go fullscreen
  fullscreen(elem) {
    const attrs = this.getChartState();
    const el = d3.select(elem || attrs.container).node();
    d3.select(document).on("fullscreenchange." + attrs.id, function(d) {
      const fsElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
      if (fsElement == el) {
        setTimeout((d2) => {
          attrs.svg.attr("height", window.innerHeight - 40);
        }, 500);
      } else {
        attrs.svg.attr("height", attrs.svgHeight);
      }
    });
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  }
  // Zoom in exposed method
  zoomIn() {
    const { svg, zoomBehavior } = this.getChartState();
    svg.transition().call(zoomBehavior.scaleBy, 1.3);
  }
  // Zoom out exposed method
  zoomOut() {
    const { svg, zoomBehavior } = this.getChartState();
    svg.transition().call(zoomBehavior.scaleBy, 0.78);
  }
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
  exportImg({ full = false, scale = 3, onLoad = (d) => d, save = true, backgroundColor = "#FAFAFA" } = {}) {
    const that = this;
    const attrs = this.getChartState();
    const { svg: svgImg, root: root2 } = attrs;
    let count3 = 0;
    const selection2 = svgImg.selectAll("img");
    let total = selection2.size();
    const exportImage = () => {
      const transform2 = JSON.parse(JSON.stringify(that.lastTransform()));
      const duration = that.duration();
      if (full) {
        that.fit();
      }
      const { svg } = that.getChartState();
      setTimeout((d) => {
        that.downloadImage({
          node: svg.node(),
          scale,
          isSvg: false,
          backgroundColor,
          onAlreadySerialized: (d2) => {
            that.update(root2);
          },
          imageName: attrs.imageName,
          onLoad,
          save
        });
      }, full ? duration + 10 : 0);
    };
    if (total > 0) {
      selection2.each(function() {
        that.toDataURL(this.src, (dataUrl) => {
          this.src = dataUrl;
          if (++count3 == total) {
            exportImage();
          }
        });
      });
    } else {
      exportImage();
    }
  }
  exportSvg() {
    const { svg, imageName } = this.getChartState();
    this.downloadImage({ imageName, node: svg.node(), scale: 3, isSvg: true });
    return this;
  }
  expandAll() {
    const { allNodes, root: root2, data } = this.getChartState();
    data.forEach((d) => d._expanded = true);
    this.render();
    return this;
  }
  collapseAll() {
    const { allNodes, root: root2 } = this.getChartState();
    allNodes.forEach((d) => d.data._expanded = false);
    this.initialExpandLevel(0);
    this.render();
    return this;
  }
  downloadImage({ node, scale = 2, imageName = "graph", isSvg = false, save = true, backgroundColor = "#FAFAFA", onAlreadySerialized = (d) => {
  }, onLoad = (d) => {
  } }) {
    const svgNode2 = node;
    function saveAs(uri, filename) {
      var link2 = document.createElement("a");
      if (typeof link2.download === "string") {
        document.body.appendChild(link2);
        link2.download = filename;
        link2.href = uri;
        link2.click();
        document.body.removeChild(link2);
      } else {
        location.replace(uri);
      }
    }
    function serializeString(svg) {
      const xmlns = "http://www.w3.org/2000/xmlns/";
      const xlinkns = "http://www.w3.org/1999/xlink";
      const svgns = "http://www.w3.org/2000/svg";
      svg = svg.cloneNode(true);
      const fragment = window.location.href + "#";
      const walker = document.createTreeWalker(svg, NodeFilter.SHOW_ELEMENT, null, false);
      while (walker.nextNode()) {
        for (const attr of walker.currentNode.attributes) {
          if (attr.value.includes(fragment)) {
            attr.value = attr.value.replace(fragment, "#");
          }
        }
      }
      svg.setAttributeNS(xmlns, "xmlns", svgns);
      svg.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);
      const serializer = new XMLSerializer();
      const string = serializer.serializeToString(svg);
      return string;
    }
    if (isSvg) {
      let source = serializeString(svgNode2);
      source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
      var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
      saveAs(url, imageName + ".svg");
      onAlreadySerialized();
      return;
    }
    const quality = scale;
    const image = document.createElement("img");
    image.onload = function() {
      const canvas = document.createElement("canvas");
      const rect = svgNode2.getBoundingClientRect();
      canvas.width = rect.width * quality;
      canvas.height = rect.height * quality;
      const context = canvas.getContext("2d");
      context.fillStyle = backgroundColor;
      ;
      context.fillRect(0, 0, rect.width * quality, rect.height * quality);
      context.drawImage(image, 0, 0, rect.width * quality, rect.height * quality);
      let dt = canvas.toDataURL("image/png");
      if (onLoad) {
        onLoad(dt);
      }
      if (save) {
        saveAs(dt, imageName + ".png");
      }
    };
    var url = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(serializeString(svgNode2));
    onAlreadySerialized();
    image.src = url;
  }
  // Calculate what size text will take
  getTextWidth(text, {
    fontSize = 14,
    fontWeight = 400,
    defaultFont = "Helvetice",
    ctx
  } = {}) {
    ctx.font = `${fontWeight || ""} ${fontSize}px ${defaultFont} `;
    const measurement = ctx.measureText(text);
    return measurement.width;
  }
  // Clear after moving off from the page
  clear() {
    const attrs = this.getChartState();
    d3.select(window).on(`resize.${attrs.id}`, null);
    attrs.svg && attrs.svg.selectAll("*").remove();
  }
};

// src/app/components/departments/org-chart/org-chart.component.ts
var _c02 = ["chartContainer"];
function OrgChartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function OrgChartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function OrgChartComponent_div_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadDepartments());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.refresh"), " ");
  }
}
function OrgChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "h1", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleHorizontal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 16);
    \u0275\u0275element(6, "path", 17)(7, "path", 18)(8, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCompact());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 16);
    \u0275\u0275element(12, "rect", 20)(13, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fitToScreen());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 16);
    \u0275\u0275element(17, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomIn());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 16);
    \u0275\u0275element(21, "circle", 23)(22, "path", 24)(23, "path", 25)(24, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.zoomOut());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 16);
    \u0275\u0275element(28, "circle", 23)(29, "path", 24)(30, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resetTo100());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 16);
    \u0275\u0275element(34, "path", 27)(35, "path", 28)(36, "path", 29)(37, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.expandAll());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 16);
    \u0275\u0275element(41, "path", 22)(42, "path", 18)(43, "path", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "button", 15);
    \u0275\u0275listener("click", function OrgChartComponent_div_3_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.collapseAll());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 16);
    \u0275\u0275element(47, "path", 22)(48, "path", 31)(49, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("orgchart.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.horizontal_view")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.horizontal"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.compact_view")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.compact"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.fit_to_screen")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.fit"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.zoom_in")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.zoom_in"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.zoom_out")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.zoom_out"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.fullscreen_tooltip")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.fullscreen"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.expand_all_tooltip")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.expand_all"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("orgchart.collapse_all_tooltip")));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("orgchart.collapse_all"), " ");
  }
}
function OrgChartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33, 0);
  }
}
function OrgChartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.no_data"));
  }
}
var OrgChartComponent = class _OrgChartComponent {
  departmentService;
  translationService;
  chartContainer;
  // State
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  selectedDepartment = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartment" }] : []);
  // D3 Org Chart
  chart = null;
  chartData = [];
  // Level colors for visual hierarchy
  levelColors = [
    "#09365F",
    // Root level - Dark blue
    "#158638",
    // Level 1 - Green
    "#0B4B7A",
    // Level 2 - Blue
    "#1B9A54",
    // Level 3 - Light green
    "#0E577F",
    // Level 4 - Dark blue
    "#1FA661"
    // Level 5 - Bright green
  ];
  constructor(departmentService, translationService) {
    this.departmentService = departmentService;
    this.translationService = translationService;
    effect(() => {
      if (this.departments().length > 0) {
        setTimeout(() => this.renderChart(), 100);
      }
    });
  }
  ngOnInit() {
    this.loadDepartments();
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart = null;
    }
  }
  onWindowResize() {
    if (this.chart) {
      this.chart.render().fit();
    }
  }
  // Transform department data to d3-org-chart format
  transformDataToChartFormat(departments) {
    const chartData = [];
    const processDepartment = (dept, parentId = null) => {
      const nodeData = {
        id: dept.id.toString(),
        parentId,
        name: this.isRTL() ? dept.nameAr : dept.nameEn,
        level: this.getDepartmentLevel(dept)
      };
      chartData.push(nodeData);
      if (dept.children && dept.children.length > 0) {
        dept.children.forEach((child) => {
          processDepartment(child, dept.id.toString());
        });
      }
    };
    const rootDepartments = departments.filter((dept) => !dept.parentId);
    rootDepartments.forEach((rootDept) => {
      processDepartment(rootDept);
    });
    return chartData;
  }
  // Render the d3 org chart
  renderChart() {
    if (!this.chartContainer || this.departments().length === 0) {
      return;
    }
    if (this.chart) {
      this.chart = null;
    }
    this.chartData = this.transformDataToChartFormat(this.departments());
    select_default2(this.chartContainer.nativeElement).selectAll("*").remove();
    this.chart = new OrgChart().nodeHeight((d) => 120).nodeWidth((d) => 220).childrenMargin((d) => 40).compactMarginBetween((d) => 25).compactMarginPair((d) => 20).neighbourMargin((a, b) => 15).nodeContent((d, i, arr, state) => {
      const levelColor = this.getLevelColorForNode(d.data.level);
      const isRoot = d.data.level === 0;
      return `
          <div style='width:${d.width}px;height:${d.height}px;padding:6px;'>
            <div style="
              font-family: 'Inter', sans-serif;
              background: ${isRoot ? `linear-gradient(135deg, ${levelColor} 0%, ${levelColor}dd 100%)` : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"};
              color: ${isRoot ? "#FFFFFF" : "#2c3e50"};
              margin: 0;
              width: ${d.width - 12}px;
              height: ${d.height - 12}px;
              border-radius: 12px;
              border: 2px solid ${isRoot ? "rgba(255,255,255,0.2)" : "#e1e8ed"};
              box-shadow: ${isRoot ? "0 8px 25px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)" : "0 4px 15px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)"};
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 20px 16px;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              cursor: pointer;
              position: relative;
              overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px) scale(1.02)'; this.style.boxShadow='${isRoot ? "0 12px 35px rgba(0,0,0,0.2), 0 6px 18px rgba(0,0,0,0.15)" : "0 8px 25px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)"}';" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='${isRoot ? "0 8px 25px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)" : "0 4px 15px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.05)"}';">
              <div style="
                font-size: 16px;
                font-weight: 700;
                line-height: 1.5;
                word-break: break-word;
                max-width: 100%;
                overflow: visible;
                text-overflow: unset;
                white-space: normal;
                display: block;
                text-shadow: ${isRoot ? "0 1px 2px rgba(0,0,0,0.3)" : "none"};
                padding: 4px 0;
              ">${d.data.name}</div>
            </div>
          </div>
        `;
    }).container(this.chartContainer.nativeElement).data(this.chartData).render();
  }
  // Get level color for node
  getLevelColorForNode(level) {
    if (level >= this.levelColors.length) {
      return this.levelColors[this.levelColors.length - 1];
    }
    return this.levelColors[level];
  }
  // Public control methods
  fitToScreen() {
    if (this.chart) {
      this.chart.render().fit();
    }
  }
  resetTo100() {
    if (this.chart) {
      this.chart.fullscreen();
    }
  }
  zoomIn() {
    if (this.chart) {
      this.chart.zoomIn();
    }
  }
  zoomOut() {
    if (this.chart) {
      this.chart.zoomOut();
    }
  }
  // Toggle between horizontal and compact view
  toggleHorizontal() {
    if (this.chart) {
      this.chart.compact(false).render().fit();
    }
  }
  toggleCompact() {
    if (this.chart) {
      this.chart.compact(true).render().fit();
    }
  }
  // Expand all departments
  expandAll() {
    if (this.chart) {
      this.chart.expandAll().fit();
    }
  }
  // Collapse all departments
  collapseAll() {
    if (this.chart) {
      this.chart.collapseAll().fit();
    }
  }
  // Language/direction change handler
  onLanguageChange() {
    setTimeout(() => {
      this.renderChart();
    }, 100);
  }
  // Translation method for template
  translate(key) {
    return this.translationService.translate(key);
  }
  loadDepartments() {
    this.loading.set(true);
    this.error.set(null);
    this.departmentService.getDepartmentsTree().subscribe({
      next: (response) => {
        if (response.success) {
          this.departments.set(this.processDepartments(response.data));
          console.log("Departments loaded:", this.departments());
        } else {
          this.error.set(response.message || "Failed to load departments");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load departments");
        this.loading.set(false);
        console.error("Error loading departments:", err);
      }
    });
  }
  processDepartments(departments) {
    return departments;
  }
  // Calculate department level
  getDepartmentLevel(department) {
    let level = 0;
    let current = department;
    while (current.parentId) {
      level++;
      const parent = this.findDepartmentById(current.parentId);
      if (!parent)
        break;
      current = parent;
    }
    return level;
  }
  // Utility methods
  isRTL() {
    return this.translationService.isRTL();
  }
  getDepartmentTypeName(type2) {
    const typeKey = `departments.department_type.${type2}`;
    return this.translationService.translate(typeKey);
  }
  getStatusClass(isActive) {
    return isActive ? "status-active" : "status-inactive";
  }
  getStatusText(isActive) {
    const key = isActive ? "orgchart.status.active" : "orgchart.status.inactive";
    return this.translationService.translate(key);
  }
  findDepartmentById(id2) {
    const searchInDepartments = (depts) => {
      for (const dept of depts) {
        if (dept.id === id2)
          return dept;
        if (dept.children && dept.children.length > 0) {
          const found = searchInDepartments(dept.children);
          if (found)
            return found;
        }
      }
      return null;
    };
    return searchInDepartments(this.departments());
  }
  static \u0275fac = function OrgChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrgChartComponent)(\u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrgChartComponent, selectors: [["app-org-chart"]], viewQuery: function OrgChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartContainer = _t.first);
    }
  }, hostBindings: function OrgChartComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function OrgChartComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, standalone: false, decls: 6, vars: 7, consts: [["chartContainer", ""], [1, "orgchart"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "chart-header", 4, "ngIf"], ["class", "chart-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], [1, "error-message"], [1, "btn", "btn-primary", 3, "click"], [1, "chart-header"], [1, "orgchart-title"], [1, "chart-controls"], [1, "control-btn", 3, "click", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 12h18"], ["d", "M8 8l4-4 4 4"], ["d", "M8 16l4 4 4-4"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["d", "M9 9h6v6H9z"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["d", "M11 8v6"], ["d", "M8 11h6"], ["d", "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"], ["d", "M21 3v5h-5"], ["d", "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"], ["d", "M3 21v-5h5"], ["d", "M8 8l4 4-4 4"], ["d", "M16 8l-4 4 4 4"], [1, "chart-container"], [1, "empty-state"]], template: function OrgChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, OrgChartComponent_div_1_Template, 4, 1, "div", 2)(2, OrgChartComponent_div_2_Template, 5, 2, "div", 3)(3, OrgChartComponent_div_3_Template, 51, 25, "div", 4)(4, OrgChartComponent_div_4_Template, 2, 0, "div", 5)(5, OrgChartComponent_div_5_Template, 3, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error() && ctx.departments().length === 0);
    }
  }, dependencies: [NgIf], styles: ['\n\n.orgchart[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px 16px;\n  overflow: hidden;\n  max-width: 100%;\n  height: 100vh;\n}\n.orgchart.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.orgchart-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.orgchart-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #09365f;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 16px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 16px;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 32px;\n  width: 100%;\n}\n.chart-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.control-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  color: #495057;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.control-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.control-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.control-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 600px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.chart-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.chart-container[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.chart-container[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  filter: brightness(1.08);\n}\n.chart-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #09365f;\n  stroke-width: 2px;\n  opacity: 0.6;\n  transition: all 0.3s ease;\n}\n.chart-container[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  stroke-width: 3px;\n  opacity: 0.9;\n  stroke: #158638;\n}\n.chart-container[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  fill: #495057;\n}\n.chart-container[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-0[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #09365f 0%,\n      #0d4a7a 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(9, 54, 95, 0.3);\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-1[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fffe 100%);\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-2[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9ff 100%);\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-3[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff9 100%);\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-4[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9ff 100%);\n}\n.chart-container[_ngcontent-%COMP%]   .node.level-5[_ngcontent-%COMP%]   .node-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff9 100%);\n}\n@media (max-width: 768px) {\n  .orgchart[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n    height: 100vh;\n  }\n  .orgchart-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 24px;\n  }\n  .chart-controls[_ngcontent-%COMP%] {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .control-btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 13px;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 180px);\n    min-height: 400px;\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .orgchart[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    height: 100vh;\n  }\n  .orgchart-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n  .chart-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n  .control-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 200px;\n    justify-content: center;\n  }\n  .chart-container[_ngcontent-%COMP%] {\n    height: calc(100vh - 160px);\n    min-height: 350px;\n    padding: 12px;\n  }\n}\n.control-btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #158638;\n  outline-offset: 2px;\n}\n@media (prefers-contrast: high) {\n  .node-card[_ngcontent-%COMP%] {\n    border-width: 2px;\n  }\n  .children-container[_ngcontent-%COMP%] {\n    border-width: 2px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .children-container[_ngcontent-%COMP%], \n   .control-btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media print {\n  .orgchart[_ngcontent-%COMP%] {\n    padding: 0;\n    overflow: visible;\n  }\n}\n/*# sourceMappingURL=org-chart.component-4WNMAXMY.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgChartComponent, [{
    type: Component,
    args: [{ selector: "app-org-chart", standalone: false, template: `<div class="orgchart" [class.rtl]="isRTL()">\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate("common.loading") }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error() && !loading()" class="error-container">\r
    <p class="error-message">{{ error() }}</p>\r
    <button class="btn btn-primary" (click)="loadDepartments()">\r
      {{ translate("common.refresh") }}\r
    </button>\r
  </div>\r
\r
  <!-- Chart Header -->\r
  <div *ngIf="!loading() && !error()" class="chart-header">\r
    <h1 class="orgchart-title">{{ translate("orgchart.title") }}</h1>\r
\r
    <!-- Chart Controls -->\r
    <div class="chart-controls">\r
      <button\r
        class="control-btn"\r
        (click)="toggleHorizontal()"\r
        title="{{ translate('orgchart.horizontal_view') }}"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path d="M3 12h18" />\r
          <path d="M8 8l4-4 4 4" />\r
          <path d="M8 16l4 4 4-4" />\r
        </svg>\r
        {{ translate("orgchart.horizontal") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="toggleCompact()"\r
        title="{{ translate('orgchart.compact_view') }}"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />\r
          <path d="M9 9h6v6H9z" />\r
        </svg>\r
        {{ translate("orgchart.compact") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="fitToScreen()"\r
        title="{{ translate('orgchart.fit_to_screen') }}"\r
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
            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"\r
          />\r
        </svg>\r
        {{ translate("orgchart.fit") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="zoomIn()"\r
        title="{{ translate('orgchart.zoom_in') }}"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="11" cy="11" r="8" />\r
          <path d="M21 21l-4.35-4.35" />\r
          <path d="M11 8v6" />\r
          <path d="M8 11h6" />\r
        </svg>\r
        {{ translate("orgchart.zoom_in") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="zoomOut()"\r
        title="{{ translate('orgchart.zoom_out') }}"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="11" cy="11" r="8" />\r
          <path d="M21 21l-4.35-4.35" />\r
          <path d="M8 11h6" />\r
        </svg>\r
        {{ translate("orgchart.zoom_out") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="resetTo100()"\r
        title="{{ translate('orgchart.fullscreen_tooltip') }}"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />\r
          <path d="M21 3v5h-5" />\r
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />\r
          <path d="M3 21v-5h5" />\r
        </svg>\r
        {{ translate("orgchart.fullscreen") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="expandAll()"\r
        title="{{ translate('orgchart.expand_all_tooltip') }}"\r
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
            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"\r
          />\r
          <path d="M8 8l4-4 4 4" />\r
          <path d="M8 16l4 4 4-4" />\r
        </svg>\r
        {{ translate("orgchart.expand_all") }}\r
      </button>\r
      <button\r
        class="control-btn"\r
        (click)="collapseAll()"\r
        title="{{ translate('orgchart.collapse_all_tooltip') }}"\r
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
            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"\r
          />\r
          <path d="M8 8l4 4-4 4" />\r
          <path d="M16 8l-4 4 4 4" />\r
        </svg>\r
        {{ translate("orgchart.collapse_all") }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- D3 Org Chart Container -->\r
  <div\r
    *ngIf="!loading() && !error()"\r
    class="chart-container"\r
    #chartContainer\r
  ></div>\r
\r
  <!-- Empty State -->\r
  <div\r
    *ngIf="!loading() && !error() && departments().length === 0"\r
    class="empty-state"\r
  >\r
    <p>{{ translate("common.no_data") }}</p>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/departments/org-chart/org-chart.component.css */\n.orgchart {\n  position: relative;\n  padding: 24px 16px;\n  overflow: hidden;\n  max-width: 100%;\n  height: 100vh;\n}\n.orgchart.rtl {\n  direction: rtl;\n}\n.orgchart-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n.orgchart-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #09365f;\n  margin-bottom: 32px;\n  text-align: center;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n}\n.error-message {\n  color: #dc3545;\n  font-size: 16px;\n  margin-bottom: 16px;\n}\n.empty-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #6c757d;\n  font-size: 16px;\n}\n.chart-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 32px;\n  width: 100%;\n}\n.chart-controls {\n  display: flex;\n  gap: 8px;\n  margin-top: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.control-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  color: #495057;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.control-btn:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.control-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.control-btn svg {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.chart-container {\n  width: 100%;\n  min-height: 600px;\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.chart-container svg {\n  width: 100%;\n  height: 100%;\n}\n.chart-container .node {\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.chart-container .node:hover {\n  transform: scale(1.05);\n  filter: brightness(1.08);\n}\n.chart-container .link {\n  fill: none;\n  stroke: #09365f;\n  stroke-width: 2px;\n  opacity: 0.6;\n  transition: all 0.3s ease;\n}\n.chart-container .link:hover {\n  stroke-width: 3px;\n  opacity: 0.9;\n  stroke: #158638;\n}\n.chart-container text {\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  fill: #495057;\n}\n.chart-container .node-content {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.chart-container .node.level-0 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #09365f 0%,\n      #0d4a7a 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(9, 54, 95, 0.3);\n}\n.chart-container .node.level-1 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fffe 100%);\n}\n.chart-container .node.level-2 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9ff 100%);\n}\n.chart-container .node.level-3 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff9 100%);\n}\n.chart-container .node.level-4 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8f9ff 100%);\n}\n.chart-container .node.level-5 .node-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fff9 100%);\n}\n@media (max-width: 768px) {\n  .orgchart {\n    padding: 16px 12px;\n    height: 100vh;\n  }\n  .orgchart-title {\n    font-size: 24px;\n    margin-bottom: 24px;\n  }\n  .chart-controls {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .control-btn {\n    padding: 6px 10px;\n    font-size: 13px;\n  }\n  .chart-container {\n    height: calc(100vh - 180px);\n    min-height: 400px;\n    padding: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .orgchart {\n    padding: 12px 8px;\n    height: 100vh;\n  }\n  .orgchart-title {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n  .chart-controls {\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n  }\n  .control-btn {\n    width: 100%;\n    max-width: 200px;\n    justify-content: center;\n  }\n  .chart-container {\n    height: calc(100vh - 160px);\n    min-height: 350px;\n    padding: 12px;\n  }\n}\n.control-btn:focus {\n  outline: 2px solid #158638;\n  outline-offset: 2px;\n}\n@media (prefers-contrast: high) {\n  .node-card {\n    border-width: 2px;\n  }\n  .children-container {\n    border-width: 2px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .children-container,\n  .control-btn {\n    transition: none;\n  }\n}\n@media print {\n  .orgchart {\n    padding: 0;\n    overflow: visible;\n  }\n}\n/*# sourceMappingURL=org-chart.component-4WNMAXMY.css.map */\n'] }]
  }], () => [{ type: DepartmentService }, { type: TranslationService }], { chartContainer: [{
    type: ViewChild,
    args: ["chartContainer", { static: false }]
  }], onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrgChartComponent, { className: "OrgChartComponent", filePath: "src/app/components/departments/org-chart/org-chart.component.ts", lineNumber: 28 });
})();

// src/app/components/departments/departments.component.ts
function DepartmentsComponent_app_org_chart_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-org-chart", 37);
    \u0275\u0275listener("refresh", function DepartmentsComponent_app_org_chart_45_Template_app_org_chart_refresh_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDepartmentCreated());
    });
    \u0275\u0275elementEnd();
  }
}
function DepartmentsComponent_app_departments_cards_view_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-departments-cards-view", 37);
    \u0275\u0275listener("refresh", function DepartmentsComponent_app_departments_cards_view_46_Template_app_departments_cards_view_refresh_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDepartmentCreated());
    });
    \u0275\u0275elementEnd();
  }
}
function DepartmentsComponent_app_departments_table_view_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-departments-table-view", 37);
    \u0275\u0275listener("refresh", function DepartmentsComponent_app_departments_table_view_47_Template_app_departments_table_view_refresh_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDepartmentCreated());
    });
    \u0275\u0275elementEnd();
  }
}
function DepartmentsComponent_app_department_form_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-department-form", 38);
    \u0275\u0275listener("close", function DepartmentsComponent_app_department_form_48_Template_app_department_form_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAddModal());
    })("departmentCreated", function DepartmentsComponent_app_department_form_48_Template_app_department_form_departmentCreated_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDepartmentCreated());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", ctx_r1.showAddModal());
  }
}
var DepartmentsComponent = class _DepartmentsComponent {
  translationService;
  currentView = signal("orgchart", ...ngDevMode ? [{ debugName: "currentView" }] : []);
  showViewMenu = signal(false, ...ngDevMode ? [{ debugName: "showViewMenu" }] : []);
  showAddModal = signal(false, ...ngDevMode ? [{ debugName: "showAddModal" }] : []);
  constructor(translationService) {
    this.translationService = translationService;
  }
  ngOnInit() {
    this.currentView.set("orgchart");
  }
  setView(view) {
    this.currentView.set(view);
    this.showViewMenu.set(false);
  }
  toggleViewMenu() {
    this.showViewMenu.update((show) => !show);
  }
  onDocumentClick(event) {
    if (this.showViewMenu()) {
      const target = event.target;
      if (!target.closest(".view-selector")) {
        this.showViewMenu.set(false);
      }
    }
  }
  openAddModal() {
    this.showAddModal.set(true);
  }
  closeAddModal() {
    this.showAddModal.set(false);
  }
  onDepartmentCreated() {
    this.closeAddModal();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function DepartmentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsComponent, selectors: [["app-departments"]], hostBindings: function DepartmentsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function DepartmentsComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument);
    }
  }, standalone: false, decls: 49, vars: 23, consts: [[1, "departments-container", "rounded-5"], [1, "departments-toolbar"], [1, "toolbar-left"], [1, "view-selector"], [1, "btn", "btn-primary", "departments-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "chevron"], ["points", "6,9 12,15 18,9"], [1, "view-menu"], [1, "view-menu-item", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "icon"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "7.5,4.21 12,6.81 16.5,4.21"], ["points", "7.5,19.79 7.5,14.6 3,16"], ["points", "21,16 16.5,14.6 16.5,19.79"], ["points", "3.27,6.96 12,12.01 20.73,6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["x1", "3", "y1", "9", "x2", "21", "y2", "9"], ["x1", "3", "y1", "15", "x2", "21", "y2", "15"], ["x1", "9", "y1", "3", "x2", "9", "y2", "21"], ["x1", "15", "y1", "3", "x2", "15", "y2", "21"], [1, "toolbar-right"], [1, "btn", "btn-secondary", "add-department-btn", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "departments-content"], [3, "refresh", 4, "ngIf"], [3, "isOpen", "close", "departmentCreated", 4, "ngIf"], [3, "refresh"], [3, "close", "departmentCreated", "isOpen"]], template: function DepartmentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function DepartmentsComponent_Template_button_click_4_listener() {
        return ctx.toggleViewMenu();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "rect", 6)(7, "rect", 7)(8, "rect", 8)(9, "rect", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(10);
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "polyline", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 12)(14, "button", 13);
      \u0275\u0275listener("click", function DepartmentsComponent_Template_button_click_14_listener() {
        return ctx.setView("orgchart");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 14);
      \u0275\u0275element(16, "path", 15)(17, "polyline", 16)(18, "polyline", 17)(19, "polyline", 18)(20, "polyline", 19)(21, "line", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function DepartmentsComponent_Template_button_click_23_listener() {
        return ctx.setView("cards");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 14);
      \u0275\u0275element(25, "rect", 21)(26, "rect", 22)(27, "rect", 23)(28, "rect", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "button", 13);
      \u0275\u0275listener("click", function DepartmentsComponent_Template_button_click_30_listener() {
        return ctx.setView("table");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(31, "svg", 5);
      \u0275\u0275element(32, "rect", 25)(33, "line", 26)(34, "line", 27)(35, "line", 28)(36, "line", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 30)(39, "button", 31);
      \u0275\u0275listener("click", function DepartmentsComponent_Template_button_click_39_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 14);
      \u0275\u0275element(41, "line", 32)(42, "line", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "div", 34);
      \u0275\u0275template(45, DepartmentsComponent_app_org_chart_45_Template, 1, 0, "app-org-chart", 35)(46, DepartmentsComponent_app_departments_cards_view_46_Template, 1, 0, "app-departments-cards-view", 35)(47, DepartmentsComponent_app_departments_table_view_47_Template, 1, 0, "app-departments-table-view", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, DepartmentsComponent_app_department_form_48_Template, 1, 1, "app-department-form", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.showViewMenu());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("show", ctx.showViewMenu())("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentView() === "orgchart");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.views.orgchart"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentView() === "cards");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.views.cards"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentView() === "table");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.views.table"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("departments.add"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentView() === "orgchart");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView() === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentView() === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddModal());
    }
  }, dependencies: [NgIf, DepartmentsCardsViewComponent, DepartmentsTableViewComponent, DepartmentFormComponent, OrgChartComponent], styles: ['\n\n.departments-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  min-height: calc(100vh - 80px);\n  font-family: "Poppins", sans-serif;\n}\n.departments-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.view-selector[_ngcontent-%COMP%] {\n  position: relative;\n}\n.departments-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: transparent !important;\n  color: #09365F !important;\n  border: none;\n  border-radius: 8px;\n  border: 1px solid #09365F !important;\n  font-weight: 600;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.departments-btn[_ngcontent-%COMP%]:hover {\n  background: #09365F !important;\n  color: white !important;\n}\n.departments-btn.active[_ngcontent-%COMP%] {\n  background: #09365F;\n}\n.departments-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.departments-btn[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.departments-btn.active[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.view-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  margin-block-start: 0.5rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e2e8f0;\n  min-width: 200px;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  border-radius: 12px;\n  transform: translateY(-10px);\n}\n.view-menu.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.view-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  color: #374151;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.view-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.view-menu-item.active[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background-color: #09365F;\n  color: white;\n}\n.view-menu-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.add-department-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: #158638 !important;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-department-btn[_ngcontent-%COMP%]:hover {\n  background: #0f6b2a !important;\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.add-department-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.departments-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.departments-container.rtl[_ngcontent-%COMP%]   .departments-toolbar[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n[dir=rtl][_ngcontent-%COMP%]   .departments-toolbar[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n.departments-container.rtl[_ngcontent-%COMP%]   .view-menu[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n.departments-container.rtl[_ngcontent-%COMP%]   .view-menu-item[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.departments-container.rtl[_ngcontent-%COMP%]   .toolbar-left[_ngcontent-%COMP%] {\n  order: 2;\n}\n.departments-container.rtl[_ngcontent-%COMP%]   .toolbar-right[_ngcontent-%COMP%] {\n  order: 1;\n}\n@media (max-width: 768px) {\n  .departments-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .departments-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .toolbar-left[_ngcontent-%COMP%], \n   .toolbar-right[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .view-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-width: 300px;\n  }\n  .view-menu.show[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #09365F;\n  color: white;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=departments.component-OXPGTUN5.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsComponent, [{
    type: Component,
    args: [{ selector: "app-departments", standalone: false, template: `<div class="departments-container rounded-5"  [class.rtl]="isRTL()">\r
  <!-- Toolbar -->\r
  <div class="departments-toolbar">\r
    <div class="toolbar-left">\r
      <div class="view-selector">\r
        <button \r
          class="btn btn-primary departments-btn" \r
          (click)="toggleViewMenu()"\r
          [class.active]="showViewMenu()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>\r
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>\r
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>\r
            <rect x="14" y="14" width="7" height="7" rx="1"></rect>\r
          </svg>\r
          \r
          {{ translate('departments.title') }}\r
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="6,9 12,15 18,9"></polyline>\r
          </svg>\r
        </button>\r
        \r
        <!-- View Menu -->\r
        <div class="view-menu" [class.show]="showViewMenu()" [class.rtl]="isRTL()">\r
          <button \r
            class="view-menu-item" \r
            [class.active]="currentView() === 'orgchart'"\r
            (click)="setView('orgchart')">\r
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>\r
              <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>\r
              <polyline points="7.5,19.79 7.5,14.6 3,16"/>\r
              <polyline points="21,16 16.5,14.6 16.5,19.79"/>\r
              <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>\r
              <line x1="12" y1="22.08" x2="12" y2="12"/>\r
            </svg>\r
            {{ translate('departments.views.orgchart') }}\r
          </button>\r
          \r
          <button \r
            class="view-menu-item" \r
            [class.active]="currentView() === 'cards'"\r
            (click)="setView('cards')">\r
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="3" width="7" height="7"/>\r
              <rect x="14" y="3" width="7" height="7"/>\r
              <rect x="14" y="14" width="7" height="7"/>\r
              <rect x="3" y="14" width="7" height="7"/>\r
            </svg>\r
            {{ translate('departments.views.cards') }}\r
          </button>\r
          \r
          <button \r
            class="view-menu-item" \r
            [class.active]="currentView() === 'table'"\r
            (click)="setView('table')">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>\r
              <line x1="3" y1="9" x2="21" y2="9"></line>\r
              <line x1="3" y1="15" x2="21" y2="15"></line>\r
              <line x1="9" y1="3" x2="9" y2="21"></line>\r
              <line x1="15" y1="3" x2="15" y2="21"></line>\r
            </svg>\r
            \r
            {{ translate('departments.views.table') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="toolbar-right">\r
      <button \r
        class="btn btn-secondary add-department-btn" \r
        (click)="openAddModal()">\r
        <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="12" y1="5" x2="12" y2="19"/>\r
          <line x1="5" y1="12" x2="19" y2="12"/>\r
        </svg>\r
        {{ translate('departments.add') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Content Area -->\r
  <div class="departments-content">\r
    <!-- Org Chart View -->\r
    <app-org-chart \r
      *ngIf="currentView() === 'orgchart'"\r
      (refresh)="onDepartmentCreated()">\r
    </app-org-chart>\r
\r
    <!-- Cards View -->\r
    <app-departments-cards-view \r
      *ngIf="currentView() === 'cards'"\r
      (refresh)="onDepartmentCreated()">\r
    </app-departments-cards-view>\r
\r
    <!-- Table View -->\r
    <app-departments-table-view \r
      *ngIf="currentView() === 'table'"\r
      (refresh)="onDepartmentCreated()">\r
    </app-departments-table-view>\r
  </div>\r
\r
  <!-- Add Department Modal -->\r
  <app-department-form \r
    *ngIf="showAddModal()"\r
    [isOpen]="showAddModal()"\r
    (close)="closeAddModal()"\r
    (departmentCreated)="onDepartmentCreated()">\r
  </app-department-form>\r
</div>\r
`, styles: ['/* src/app/components/departments/departments.component.css */\n.departments-container {\n  padding: 1.5rem;\n  min-height: calc(100vh - 80px);\n  font-family: "Poppins", sans-serif;\n}\n.departments-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.toolbar-right {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.view-selector {\n  position: relative;\n}\n.departments-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: transparent !important;\n  color: #09365F !important;\n  border: none;\n  border-radius: 8px;\n  border: 1px solid #09365F !important;\n  font-weight: 600;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.departments-btn:hover {\n  background: #09365F !important;\n  color: white !important;\n}\n.departments-btn.active {\n  background: #09365F;\n}\n.departments-btn .icon {\n  width: 18px;\n  height: 18px;\n}\n.departments-btn .chevron {\n  transition: transform 0.2s ease;\n}\n.departments-btn.active .chevron {\n  transform: rotate(180deg);\n}\n.view-menu {\n  position: absolute;\n  top: 100%;\n  margin-block-start: 0.5rem;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  border: 1px solid #e2e8f0;\n  min-width: 200px;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.2s ease;\n  border-radius: 12px;\n  transform: translateY(-10px);\n}\n.view-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.view-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: none;\n  border: none;\n  text-align: start;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  color: #374151;\n  font-weight: 600;\n  font-size: 1rem;\n}\n.view-menu-item:hover {\n  background-color: #f3f4f6;\n}\n.view-menu-item.active {\n  border-radius: 12px;\n  background-color: #09365F;\n  color: white;\n}\n.view-menu-item .icon {\n  width: 16px;\n  height: 16px;\n}\n.add-department-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: #158638 !important;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.add-department-btn:hover {\n  background: #0f6b2a !important;\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.3);\n}\n.add-department-btn .icon {\n  width: 16px;\n  height: 16px;\n}\n.departments-content {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.departments-container.rtl .departments-toolbar {\n  direction: rtl;\n}\n[dir=rtl] .departments-toolbar {\n  flex-direction: row-reverse !important;\n}\n.departments-container.rtl .view-menu {\n  right: 0;\n  left: auto;\n}\n.departments-container.rtl .view-menu-item {\n  text-align: right !important;\n}\n.departments-container.rtl .toolbar-left {\n  order: 2;\n}\n.departments-container.rtl .toolbar-right {\n  order: 1;\n}\n@media (max-width: 768px) {\n  .departments-container {\n    padding: 1rem;\n  }\n  .departments-toolbar {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .toolbar-left,\n  .toolbar-right {\n    justify-content: center;\n  }\n  .view-menu {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90%;\n    max-width: 300px;\n  }\n  .view-menu.show {\n    transform: translate(-50%, -50%);\n  }\n}\n.btn {\n  font-family: "Poppins", sans-serif;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  color: white;\n}\n.btn-secondary {\n  background: #09365F;\n  color: white;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.icon {\n  flex-shrink: 0;\n}\n.fade-in {\n  animation: fadeIn 0.3s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=departments.component-OXPGTUN5.css.map */\n'] }]
  }], () => [{ type: TranslationService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsComponent, { className: "DepartmentsComponent", filePath: "src/app/components/departments/departments.component.ts", lineNumber: 22 });
})();

// src/app/components/departments/departments-tree-view/departments-tree-view.component.ts
var _c03 = (a0) => ({ $implicit: a0, level: 0 });
var _c1 = (a0, a1) => ({ $implicit: a0, level: a1 });
function DepartmentsTreeViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function DepartmentsTreeViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "circle", 13)(3, "line", 14)(4, "line", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function DepartmentsTreeViewComponent_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadDepartments());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.error());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.refresh"), " ");
  }
}
function DepartmentsTreeViewComponent_div_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DepartmentsTreeViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19);
    \u0275\u0275template(7, DepartmentsTreeViewComponent_div_3_ng_container_7_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const treeNode_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("departments.views.tree"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", treeNode_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c03, ctx_r0.departments()));
  }
}
function DepartmentsTreeViewComponent_ng_template_4_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function DepartmentsTreeViewComponent_ng_template_4_div_1_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const dept_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleExpanded(dept_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 45);
    \u0275\u0275element(3, "polyline", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", dept_r6.expanded);
  }
}
function DepartmentsTreeViewComponent_ng_template_4_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("departments.manager"), ": ", dept_r6.managerName, " ");
  }
}
function DepartmentsTreeViewComponent_ng_template_4_div_1_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DepartmentsTreeViewComponent_ng_template_4_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, DepartmentsTreeViewComponent_ng_template_4_div_1_div_24_ng_container_1_Template, 1, 0, "ng-container", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = \u0275\u0275nextContext().$implicit;
    const level_r7 = \u0275\u0275nextContext().level;
    \u0275\u0275nextContext();
    const treeNode_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", treeNode_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c1, dept_r6.children, level_r7 + 1));
  }
}
function DepartmentsTreeViewComponent_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275template(4, DepartmentsTreeViewComponent_ng_template_4_div_1_div_4_Template, 4, 2, "div", 27);
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 29);
    \u0275\u0275element(7, "path", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 31)(9, "h3", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33)(12, "span", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, DepartmentsTreeViewComponent_ng_template_4_div_1_span_16_Template, 2, 2, "span", 36);
    \u0275\u0275elementStart(17, "span", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 38)(20, "span", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 40)(23, "app-department-actions", 41);
    \u0275\u0275listener("changeManager", function DepartmentsTreeViewComponent_ng_template_4_div_1_Template_app_department_actions_changeManager_23_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openChangeManagerModal(dept_r6));
    })("move", function DepartmentsTreeViewComponent_ng_template_4_div_1_Template_app_department_actions_move_23_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMoveModal(dept_r6));
    })("edit", function DepartmentsTreeViewComponent_ng_template_4_div_1_Template_app_department_actions_edit_23_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEditModal(dept_r6));
    })("delete", function DepartmentsTreeViewComponent_ng_template_4_div_1_Template_app_department_actions_delete_23_listener() {
      const dept_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmDeleteDepartment(dept_r6));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, DepartmentsTreeViewComponent_ng_template_4_div_1_div_24_Template, 2, 5, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("sibling-group-" + (i_r8 % 6 + 1));
    \u0275\u0275classProp("expanded", dept_r6.expanded);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", dept_r6.children && dept_r6.children.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.isRTL() ? dept_r6.nameAr : dept_r6.nameEn);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r6.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getDepartmentTypeName(dept_r6.type));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r6.managerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("departments.employees_count"), ": ", dept_r6.employeesCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", dept_r6.isActive)("inactive", !dept_r6.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", dept_r6.isActive ? ctx_r0.translate("departments.active") : ctx_r0.translate("departments.inactive"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("department", dept_r6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dept_r6.expanded && dept_r6.children && dept_r6.children.length > 0);
  }
}
function DepartmentsTreeViewComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, DepartmentsTreeViewComponent_ng_template_4_div_1_Template, 25, 18, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const departments_r9 = ctx.$implicit;
    const level_r7 = ctx.level;
    \u0275\u0275styleProp("margin-inline-start", level_r7 * 2 + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", departments_r9);
  }
}
function DepartmentsTreeViewComponent_app_change_manager_modal_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-change-manager-modal", 49);
    \u0275\u0275listener("close", function DepartmentsTreeViewComponent_app_change_manager_modal_6_Template_app_change_manager_modal_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showChangeManagerModal.set(false));
    })("managerChanged", function DepartmentsTreeViewComponent_app_change_manager_modal_6_Template_app_change_manager_modal_managerChanged_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onManagerChanged());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isOpen", ctx_r0.showChangeManagerModal());
  }
}
function DepartmentsTreeViewComponent_app_move_department_modal_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-move-department-modal", 50);
    \u0275\u0275listener("close", function DepartmentsTreeViewComponent_app_move_department_modal_7_Template_app_move_department_modal_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showMoveModal.set(false));
    })("departmentMoved", function DepartmentsTreeViewComponent_app_move_department_modal_7_Template_app_move_department_modal_departmentMoved_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentMoved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("departments", ctx_r0.departments())("isOpen", ctx_r0.showMoveModal());
  }
}
function DepartmentsTreeViewComponent_app_department_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-department-form", 51);
    \u0275\u0275listener("close", function DepartmentsTreeViewComponent_app_department_form_8_Template_app_department_form_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showEditModal.set(false));
    })("departmentUpdated", function DepartmentsTreeViewComponent_app_department_form_8_Template_app_department_form_departmentUpdated_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDepartmentUpdated());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("department", ctx_r0.selectedDepartment())("isEdit", true)("isOpen", ctx_r0.showEditModal());
  }
}
function DepartmentsTreeViewComponent_app_confirmation_modal_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirmation-modal", 52);
    \u0275\u0275listener("confirm", function DepartmentsTreeViewComponent_app_confirmation_modal_9_Template_app_confirmation_modal_confirm_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteConfirm());
    })("cancel", function DepartmentsTreeViewComponent_app_confirmation_modal_9_Template_app_confirmation_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDeleteCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.deleteModalData())("isRTL", ctx_r0.isRTL());
  }
}
var DepartmentsTreeViewComponent = class _DepartmentsTreeViewComponent {
  departmentService;
  translationService;
  refresh = new EventEmitter();
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  // Modal states
  showChangeManagerModal = signal(false, ...ngDevMode ? [{ debugName: "showChangeManagerModal" }] : []);
  showMoveModal = signal(false, ...ngDevMode ? [{ debugName: "showMoveModal" }] : []);
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  selectedDepartment = signal(null, ...ngDevMode ? [{ debugName: "selectedDepartment" }] : []);
  departmentToDelete = signal(null, ...ngDevMode ? [{ debugName: "departmentToDelete" }] : []);
  // Computed properties
  deleteModalData = computed(() => ({
    title: this.translate("departments.delete"),
    message: this.translate("departments.confirm_delete"),
    confirmText: this.translate("common.delete"),
    cancelText: this.translate("common.cancel"),
    type: "delete"
  }), ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  constructor(departmentService, translationService) {
    this.departmentService = departmentService;
    this.translationService = translationService;
  }
  ngOnInit() {
    this.loadDepartments();
  }
  loadDepartments() {
    this.loading.set(true);
    this.error.set(null);
    this.departmentService.getDepartmentsTree().subscribe({
      next: (response) => {
        if (response.success) {
          this.departments.set(response.data);
        } else {
          this.error.set(response.message || "Failed to load departments");
        }
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set("Failed to load departments");
        this.loading.set(false);
        console.error("Error loading departments:", err);
      }
    });
  }
  toggleExpanded(department) {
    department.expanded = !department.expanded;
  }
  openChangeManagerModal(department) {
    this.selectedDepartment.set(department);
    this.showChangeManagerModal.set(true);
  }
  openMoveModal(department) {
    this.selectedDepartment.set(department);
    this.showMoveModal.set(true);
  }
  openEditModal(department) {
    this.selectedDepartment.set(department);
    this.showEditModal.set(true);
  }
  onManagerChanged() {
    this.showChangeManagerModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentMoved() {
    this.showMoveModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentUpdated() {
    this.showEditModal.set(false);
    this.selectedDepartment.set(null);
    this.loadDepartments();
    this.refresh.emit();
  }
  onDepartmentDeleted() {
    this.loadDepartments();
    this.refresh.emit();
  }
  confirmDeleteDepartment(department) {
    this.departmentToDelete.set(department);
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    if (this.departmentToDelete()) {
      this.departmentService.deleteDepartment(this.departmentToDelete().id).subscribe({
        next: (response) => {
          if (response.success) {
            this.showDeleteModal.set(false);
            this.departmentToDelete.set(null);
            this.loadDepartments();
            this.refresh.emit();
          } else {
            console.error("Failed to delete department:", response.message);
          }
        },
        error: (err) => {
          console.error("Error deleting department:", err);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.departmentToDelete.set(null);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getDepartmentTypeName(type2) {
    const typeKey = `departments.department_type.${type2}`;
    return this.translate(typeKey);
  }
  formatDate(dateString) {
    if (!dateString)
      return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.isRTL() ? "ar-SA" : "en-US");
  }
  static \u0275fac = function DepartmentsTreeViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsTreeViewComponent)(\u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsTreeViewComponent, selectors: [["app-departments-tree-view"]], outputs: { refresh: "refresh" }, standalone: false, decls: 10, vars: 9, consts: [["treeNode", ""], [1, "tree-view-container"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "tree-content", 4, "ngIf"], [3, "department", "isOpen", "close", "managerChanged", 4, "ngIf"], [3, "department", "departments", "isOpen", "close", "departmentMoved", 4, "ngIf"], [3, "department", "isEdit", "isOpen", "close", "departmentUpdated", 4, "ngIf"], [3, "data", "isRTL", "confirm", "cancel", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn", "btn-primary", 3, "click"], [1, "tree-content"], [1, "tree-header"], [1, "tree-nodes"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "tree-level"], ["class", "tree-node", 4, "ngFor", "ngForOf"], [1, "tree-node"], [1, "node-card"], [1, "node-header"], [1, "node-info"], ["class", "expand-toggle", 4, "ngIf"], [1, "node-icon"], ["_ngcontent-ng-c625843223", "", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["_ngcontent-ng-c625843223", "", "d", "M3 3h18v18H3zM8 12h8M12 8v8"], [1, "node-details"], [1, "node-title"], [1, "node-meta"], [1, "node-code"], [1, "node-type"], ["class", "node-manager", 4, "ngIf"], [1, "node-employees"], [1, "node-status"], [1, "status-badge"], [1, "node-actions"], [3, "changeManager", "move", "edit", "delete", "department"], ["class", "node-children", 4, "ngIf"], [1, "expand-toggle"], [1, "expand-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "9,18 15,12 9,6"], [1, "node-manager"], [1, "node-children"], [3, "close", "managerChanged", "department", "isOpen"], [3, "close", "departmentMoved", "department", "departments", "isOpen"], [3, "close", "departmentUpdated", "department", "isEdit", "isOpen"], [3, "confirm", "cancel", "data", "isRTL"]], template: function DepartmentsTreeViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, DepartmentsTreeViewComponent_div_1_Template, 4, 1, "div", 2)(2, DepartmentsTreeViewComponent_div_2_Template, 11, 3, "div", 3)(3, DepartmentsTreeViewComponent_div_3_Template, 8, 6, "div", 4)(4, DepartmentsTreeViewComponent_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, DepartmentsTreeViewComponent_app_change_manager_modal_6_Template, 1, 2, "app-change-manager-modal", 5)(7, DepartmentsTreeViewComponent_app_move_department_modal_7_Template, 1, 3, "app-move-department-modal", 6)(8, DepartmentsTreeViewComponent_app_department_form_8_Template, 1, 3, "app-department-form", 7)(9, DepartmentsTreeViewComponent_app_confirmation_modal_9_Template, 1, 2, "app-confirmation-modal", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error() && !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && !ctx.error());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showChangeManagerModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMoveModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal() && ctx.selectedDepartment());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
    }
  }, dependencies: [NgForOf, NgIf, NgTemplateOutlet, ConfirmationModalComponent, DepartmentFormComponent, DepartmentActionsComponent, ChangeManagerModalComponent, MoveDepartmentModalComponent], styles: ['\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h-full[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.tree-view-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  overflow-x: auto;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  min-height: 300px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 12px;\n  margin: 2rem 0;\n}\n.error-container[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-radius: 12px;\n  margin: 2rem 0;\n  border: 1px solid #fecaca;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: "Poppins", sans-serif;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #158638;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #166534;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.tree-content[_ngcontent-%COMP%] {\n  width: 100%;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tree-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {\n  text-align: right;\n}\n.tree-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 12px;\n}\n.tree-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #158638;\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.tree-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n.tree-nodes[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.tree-level[_ngcontent-%COMP%] {\n  transition: margin-inline-start 0.3s ease;\n  position: relative;\n}\n.tree-node[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.tree-node[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: -0.75rem;\n  left: 2rem;\n  right: 2rem;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #e5e7eb 50%,\n      transparent 100%);\n}\n.tree-node[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n.node-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.node-card.sibling-group-1[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border-left: 4px solid #3b82f6;\n}\n.node-card.sibling-group-2[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  border-left: 4px solid #10b981;\n}\n.node-card.sibling-group-3[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  border-left: 4px solid #f59e0b;\n}\n.node-card.sibling-group-4[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  border-left: 4px solid #ef4444;\n}\n.node-card.sibling-group-5[_ngcontent-%COMP%] {\n  background-color: #f3e8ff;\n  border-left: 4px solid #8b5cf6;\n}\n.node-card.sibling-group-6[_ngcontent-%COMP%] {\n  background-color: #ecfdf5;\n  border-left: 4px solid #059669;\n}\n.node-card.sibling-group-1[_ngcontent-%COMP%]:hover {\n  background-color: #e2e8f0;\n  border-left-color: #2563eb;\n}\n.node-card.sibling-group-2[_ngcontent-%COMP%]:hover {\n  background-color: #dcfce7;\n  border-left-color: #059669;\n}\n.node-card.sibling-group-3[_ngcontent-%COMP%]:hover {\n  background-color: #fde68a;\n  border-left-color: #d97706;\n}\n.node-card.sibling-group-4[_ngcontent-%COMP%]:hover {\n  background-color: #fecaca;\n  border-left-color: #dc2626;\n}\n.node-card.sibling-group-5[_ngcontent-%COMP%]:hover {\n  background-color: #e9d5ff;\n  border-left-color: #7c3aed;\n}\n.node-card.sibling-group-6[_ngcontent-%COMP%]:hover {\n  background-color: #d1fae5;\n  border-left-color: #047857;\n}\n.node-card[_ngcontent-%COMP%]:hover {\n  border-color: #158638;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.node-card.expanded[_ngcontent-%COMP%] {\n  border-color: #158638;\n  background-color: #f0fdf4;\n}\n.node-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.node-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n  min-width: 0;\n}\n.node-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.expand-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.expand-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  min-height: 32px;\n}\n.expand-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #158638;\n}\n.expand-btn.expanded[_ngcontent-%COMP%] {\n  color: #158638;\n  background-color: #dcfce7;\n}\n.expand-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n}\n.expand-btn.expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.node-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  border-radius: 12px;\n  color: white;\n  flex-shrink: 0;\n}\n.node-title[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.node-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  align-items: center;\n}\n.node-code[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n}\n.node-type[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n}\n.node-manager[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.node-employees[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.node-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 1rem;\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.node-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 1rem;\n}\n.node-children[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-inline-start: 2rem;\n  border-inline-start: 2px solid #e5e7eb;\n  position: relative;\n}\n.node-children[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -1px;\n  width: 2px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #e5e7eb 0%,\n      transparent 100%);\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .tree-level[_ngcontent-%COMP%] {\n  margin-inline-start: 0 !important;\n  margin-inline-end: 0 !important;\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .node-children[_ngcontent-%COMP%] {\n  border-inline-start: none;\n  border-inline-end: 2px solid #e5e7eb;\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .node-children[_ngcontent-%COMP%]::before {\n  left: auto;\n  right: -1px;\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .expand-btn.expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n.tree-view-container.rtl[_ngcontent-%COMP%]   .expand-toggle[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n@media (max-width: 768px) {\n  .tree-view-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .tree-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .tree-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .node-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .node-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .node-meta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .node-children[_ngcontent-%COMP%] {\n    padding-inline-start: 1rem;\n  }\n  .tree-level[_ngcontent-%COMP%] {\n    margin-inline-start: 1rem !important;\n  }\n  .node-status[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 0.5rem;\n  }\n  .expand-toggle[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .tree-view-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .tree-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .tree-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .tree-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .node-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .node-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .node-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .tree-level[_ngcontent-%COMP%] {\n    margin-inline-start: 0.5rem !important;\n  }\n  .node-children[_ngcontent-%COMP%] {\n    padding-inline-start: 0.5rem;\n  }\n  .node-meta[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .node-code[_ngcontent-%COMP%], \n   .node-type[_ngcontent-%COMP%], \n   .node-manager[_ngcontent-%COMP%], \n   .node-employees[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.125rem 0.375rem;\n  }\n}\n/*# sourceMappingURL=departments-tree-view.component-KA5377FP.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsTreeViewComponent, [{
    type: Component,
    args: [{ selector: "app-departments-tree-view", standalone: false, template: `<div class="tree-view-container" [class.rtl]="isRTL()">\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('common.loading') }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error() && !loading()" class="error-container">\r
    <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <circle cx="12" cy="12" r="10"/>\r
      <line x1="15" y1="9" x2="9" y2="15"/>\r
      <line x1="9" y1="9" x2="15" y2="15"/>\r
    </svg>\r
    <h3>{{ translate('common.error') }}</h3>\r
    <p>{{ error() }}</p>\r
    <button class="btn btn-primary" (click)="loadDepartments()">\r
      {{ translate('common.refresh') }}\r
    </button>\r
  </div>\r
\r
  <!-- Tree Content -->\r
  <div *ngIf="!loading() && !error()" class="tree-content">\r
    <div class="tree-header">\r
      <h2>{{ translate('departments.title') }}</h2>\r
      <p>{{ translate('departments.views.tree') }}</p>\r
    </div>\r
\r
    <div class="tree-nodes">\r
      <ng-container *ngTemplateOutlet="treeNode; context: { $implicit: departments(), level: 0 }"></ng-container>\r
    </div>\r
  </div>\r
\r
  <!-- Tree Node Template -->\r
  <ng-template #treeNode let-departments let-level="level">\r
    <div class="tree-level" [style.margin-inline-start]="level * 2 + 'rem'">\r
      <div *ngFor="let dept of departments; let i = index" class="tree-node">\r
        <div class="node-card" \r
             [class.expanded]="dept.expanded"\r
             [class]="'sibling-group-' + ((i % 6) + 1)">\r
          <div class="node-header">\r
            <div class="node-info">\r
              <div class="expand-toggle" *ngIf="dept.children && dept.children.length > 0">\r
                <button \r
                  class="expand-btn" \r
                  (click)="toggleExpanded(dept)"\r
                  [class.expanded]="dept.expanded">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polyline points="9,18 15,12 9,6"></polyline>\r
                  </svg>\r
                </button>\r
              </div>\r
              \r
              <div class="node-icon">\r
                <svg _ngcontent-ng-c625843223="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path _ngcontent-ng-c625843223="" d="M3 3h18v18H3zM8 12h8M12 8v8"></path></svg>\r
              </div>\r
              \r
              <div class="node-details">\r
                <h3 class="node-title">{{ isRTL() ? dept.nameAr : dept.nameEn }}</h3>\r
                <div class="node-meta">\r
                  <span class="node-code">{{ dept.code }}</span>\r
                  <span class="node-type">{{ getDepartmentTypeName(dept.type) }}</span>\r
                  <span class="node-manager" *ngIf="dept.managerName">\r
                    {{ translate('departments.manager') }}: {{ dept.managerName }}\r
                  </span>\r
                  <span class="node-employees">\r
                    {{ translate('departments.employees_count') }}: {{ dept.employeesCount }}\r
                  </span>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div class="node-status">\r
              <span class="status-badge" [class.active]="dept.isActive" [class.inactive]="!dept.isActive">\r
                {{ dept.isActive ? translate('departments.active') : translate('departments.inactive') }}\r
              </span>\r
            </div>\r
          </div>\r
          \r
          <div class="node-actions">\r
            <app-department-actions\r
              [department]="dept"\r
              (changeManager)="openChangeManagerModal(dept)"\r
              (move)="openMoveModal(dept)"\r
              (edit)="openEditModal(dept)"\r
              (delete)="confirmDeleteDepartment(dept)">\r
            </app-department-actions>\r
          </div>\r
        </div>\r
        \r
        <!-- Children -->\r
        <div *ngIf="dept.expanded && dept.children && dept.children.length > 0" class="node-children">\r
          <ng-container *ngTemplateOutlet="treeNode; context: { $implicit: dept.children, level: level + 1 }"></ng-container>\r
        </div>\r
      </div>\r
    </div>\r
  </ng-template>\r
\r
  <!-- Modals -->\r
  <app-change-manager-modal\r
    *ngIf="showChangeManagerModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isOpen]="showChangeManagerModal()"\r
    (close)="showChangeManagerModal.set(false)"\r
    (managerChanged)="onManagerChanged()">\r
  </app-change-manager-modal>\r
\r
  <app-move-department-modal\r
    *ngIf="showMoveModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [departments]="departments()"\r
    [isOpen]="showMoveModal()"\r
    (close)="showMoveModal.set(false)"\r
    (departmentMoved)="onDepartmentMoved()">\r
  </app-move-department-modal>\r
\r
  <app-department-form\r
    *ngIf="showEditModal() && selectedDepartment()"\r
    [department]="selectedDepartment()!"\r
    [isEdit]="true"\r
    [isOpen]="showEditModal()"\r
    (close)="showEditModal.set(false)"\r
    (departmentUpdated)="onDepartmentUpdated()">\r
  </app-department-form>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-confirmation-modal\r
    *ngIf="showDeleteModal()"\r
    [data]="deleteModalData()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()">\r
  </app-confirmation-modal>\r
</div>\r
`, styles: ['/* src/app/components/departments/departments-tree-view/departments-tree-view.component.css */\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-left {\n  text-align: left;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.w-full {\n  width: 100%;\n}\n.h-full {\n  height: 100%;\n}\n.tree-view-container {\n  padding: 1.5rem;\n  background: white;\n  min-height: 400px;\n  font-family: "Poppins", sans-serif;\n  position: relative;\n  overflow-x: auto;\n}\n.loading-container,\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n  min-height: 300px;\n}\n.loading-container {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 12px;\n  margin: 2rem 0;\n}\n.error-container {\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2 0%,\n      #fee2e2 100%);\n  border-radius: 12px;\n  margin: 2rem 0;\n  border: 1px solid #fecaca;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e2e8f0;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-container .error-icon {\n  color: #ef4444;\n  margin-bottom: 1rem;\n}\n.error-container h3 {\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.error-container p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: "Poppins", sans-serif;\n}\n.btn-primary {\n  background-color: #158638;\n  color: white;\n}\n.btn-primary:hover {\n  background-color: #166534;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.btn-primary:active {\n  transform: translateY(0);\n}\n.tree-content {\n  width: 100%;\n  animation: fadeIn 0.3s ease-in-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tree-header [dir=rtl] {\n  text-align: right;\n}\n.tree-header {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  font-weight: 600;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 12px;\n}\n.tree-header h2 {\n  color: #158638;\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.tree-header p {\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n.tree-nodes {\n  padding: 1rem 0;\n}\n.tree-level {\n  transition: margin-inline-start 0.3s ease;\n  position: relative;\n}\n.tree-node {\n  margin-bottom: 1.5rem;\n  position: relative;\n}\n.tree-node:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  bottom: -0.75rem;\n  left: 2rem;\n  right: 2rem;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent 0%,\n      #e5e7eb 50%,\n      transparent 100%);\n}\n.tree-node:last-child::after {\n  display: none;\n}\n.node-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.node-card.sibling-group-1 {\n  background-color: #f8fafc;\n  border-left: 4px solid #3b82f6;\n}\n.node-card.sibling-group-2 {\n  background-color: #f0fdf4;\n  border-left: 4px solid #10b981;\n}\n.node-card.sibling-group-3 {\n  background-color: #fef3c7;\n  border-left: 4px solid #f59e0b;\n}\n.node-card.sibling-group-4 {\n  background-color: #fef2f2;\n  border-left: 4px solid #ef4444;\n}\n.node-card.sibling-group-5 {\n  background-color: #f3e8ff;\n  border-left: 4px solid #8b5cf6;\n}\n.node-card.sibling-group-6 {\n  background-color: #ecfdf5;\n  border-left: 4px solid #059669;\n}\n.node-card.sibling-group-1:hover {\n  background-color: #e2e8f0;\n  border-left-color: #2563eb;\n}\n.node-card.sibling-group-2:hover {\n  background-color: #dcfce7;\n  border-left-color: #059669;\n}\n.node-card.sibling-group-3:hover {\n  background-color: #fde68a;\n  border-left-color: #d97706;\n}\n.node-card.sibling-group-4:hover {\n  background-color: #fecaca;\n  border-left-color: #dc2626;\n}\n.node-card.sibling-group-5:hover {\n  background-color: #e9d5ff;\n  border-left-color: #7c3aed;\n}\n.node-card.sibling-group-6:hover {\n  background-color: #d1fae5;\n  border-left-color: #047857;\n}\n.node-card:hover {\n  border-color: #158638;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.node-card.expanded {\n  border-color: #158638;\n  background-color: #f0fdf4;\n}\n.node-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.node-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n  min-width: 0;\n}\n.node-details {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.expand-toggle {\n  display: flex;\n  align-items: center;\n  margin-right: 0.5rem;\n}\n.expand-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 32px;\n  min-height: 32px;\n}\n.expand-btn:hover {\n  background-color: #f3f4f6;\n  color: #158638;\n}\n.expand-btn.expanded {\n  color: #158638;\n  background-color: #dcfce7;\n}\n.expand-btn svg {\n  transition: transform 0.2s ease;\n}\n.expand-btn.expanded svg {\n  transform: rotate(90deg);\n}\n.node-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  background:\n    linear-gradient(\n      135deg,\n      #158638 0%,\n      #0f6b2a 100%);\n  border-radius: 12px;\n  color: white;\n  flex-shrink: 0;\n}\n.node-title {\n  color: #111827;\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.node-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n  align-items: center;\n}\n.node-code {\n  background-color: #f3f4f6;\n  color: #374151;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n}\n.node-type {\n  background-color: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n}\n.node-manager {\n  background-color: #fef3c7;\n  color: #92400e;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.node-employees {\n  background-color: #e0e7ff;\n  color: #3730a3;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n}\n.node-status {\n  display: flex;\n  align-items: center;\n  margin-left: 1rem;\n  flex-shrink: 0;\n}\n.status-badge {\n  padding: 0.375rem 0.75rem;\n  border-radius: 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-badge.inactive {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.node-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 1rem;\n}\n.node-children {\n  margin-top: 1rem;\n  padding-inline-start: 2rem;\n  border-inline-start: 2px solid #e5e7eb;\n  position: relative;\n}\n.node-children::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -1px;\n  width: 2px;\n  height: 100%;\n  background:\n    linear-gradient(\n      180deg,\n      #e5e7eb 0%,\n      transparent 100%);\n}\n.tree-view-container.rtl .tree-level {\n  margin-inline-start: 0 !important;\n  margin-inline-end: 0 !important;\n}\n.tree-view-container.rtl .node-children {\n  border-inline-start: none;\n  border-inline-end: 2px solid #e5e7eb;\n}\n.tree-view-container.rtl .node-children::before {\n  left: auto;\n  right: -1px;\n}\n.tree-view-container.rtl .expand-btn.expanded svg {\n  transform: rotate(-90deg);\n}\n.tree-view-container.rtl .node-status {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n.tree-view-container.rtl .expand-toggle {\n  margin-right: 0;\n  margin-left: 0.5rem;\n}\n@media (max-width: 768px) {\n  .tree-view-container {\n    padding: 1rem;\n  }\n  .tree-header {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .tree-header h2 {\n    font-size: 1.5rem;\n  }\n  .node-header {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .node-info {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .node-meta {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .node-children {\n    padding-inline-start: 1rem;\n  }\n  .tree-level {\n    margin-inline-start: 1rem !important;\n  }\n  .node-status {\n    margin-left: 0;\n    margin-top: 0.5rem;\n  }\n  .expand-toggle {\n    margin-right: 0;\n    margin-bottom: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .tree-view-container {\n    padding: 0.5rem;\n  }\n  .tree-header {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .tree-header h2 {\n    font-size: 1.25rem;\n  }\n  .tree-header p {\n    font-size: 1rem;\n  }\n  .node-card {\n    padding: 1rem;\n  }\n  .node-icon {\n    width: 40px;\n    height: 40px;\n  }\n  .node-title {\n    font-size: 1.125rem;\n  }\n  .tree-level {\n    margin-inline-start: 0.5rem !important;\n  }\n  .node-children {\n    padding-inline-start: 0.5rem;\n  }\n  .node-meta {\n    gap: 0.25rem;\n  }\n  .node-code,\n  .node-type,\n  .node-manager,\n  .node-employees {\n    font-size: 0.75rem;\n    padding: 0.125rem 0.375rem;\n  }\n}\n/*# sourceMappingURL=departments-tree-view.component-KA5377FP.css.map */\n'] }]
  }], () => [{ type: DepartmentService }, { type: TranslationService }], { refresh: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsTreeViewComponent, { className: "DepartmentsTreeViewComponent", filePath: "src/app/components/departments/departments-tree-view/departments-tree-view.component.ts", lineNumber: 19 });
})();

// src/app/components/departments/departments-routing.module.ts
var routes = [
  {
    path: "",
    component: DepartmentsComponent
  }
];
var DepartmentsRoutingModule = class _DepartmentsRoutingModule {
  static \u0275fac = function DepartmentsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/departments/departments.module.ts
var DepartmentsModule = class _DepartmentsModule {
  static \u0275fac = function DepartmentsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DepartmentsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    DepartmentsRoutingModule,
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DepartmentsComponent,
        DepartmentsTreeViewComponent,
        DepartmentsCardsViewComponent,
        DepartmentsTableViewComponent,
        DepartmentFormComponent,
        DepartmentActionsComponent,
        ChangeManagerModalComponent,
        MoveDepartmentModalComponent,
        OrgChartComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        DepartmentsRoutingModule,
        ConfirmationModalComponent
      ],
      exports: [
        DepartmentsComponent
      ]
    }]
  }], null, null);
})();
export {
  DepartmentsModule
};
//# sourceMappingURL=chunk-3GW3U3WB.js.map
