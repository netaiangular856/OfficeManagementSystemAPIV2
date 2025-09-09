import {
  UsersService
} from "./chunk-ROWEGEGF.js";
import "./chunk-UUDIADNF.js";
import {
  ConfirmationModalComponent
} from "./chunk-P4Q5J7RB.js";
import {
  DepartmentService
} from "./chunk-J2ODIZIH.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-IHVPCVXT.js";
import {
  ProfileService
} from "./chunk-A4IG6PG4.js";
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
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TBUK7V5T.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClientModule,
  Input,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  TranslationService,
  computed,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MGTM5SLA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/components/users/edit-user-drawer/edit-user-drawer.component.ts
function EditUserDrawerComponent_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", (tmp_1_0 = ctx_r0.userData()) == null ? null : tmp_1_0.user == null ? null : tmp_1_0.user.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.getFullName());
  }
}
function EditUserDrawerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "path", 49)(3, "circle", 50);
    \u0275\u0275elementEnd()();
  }
}
function EditUserDrawerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("users.first_name_required"), " ");
  }
}
function EditUserDrawerComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("users.last_name_required"), " ");
  }
}
function EditUserDrawerComponent_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("users.phone_required"));
  }
}
function EditUserDrawerComponent_div_36_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("users.phone_invalid_format"));
  }
}
function EditUserDrawerComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, EditUserDrawerComponent_div_36_span_1_Template, 2, 1, "span", 45)(2, EditUserDrawerComponent_div_36_span_2_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.editForm.get("phoneNumber")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.editForm.get("phoneNumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function EditUserDrawerComponent_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("users.time_zone_required"));
  }
}
function EditUserDrawerComponent_div_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("users.time_zone_invalid_format"));
  }
}
function EditUserDrawerComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, EditUserDrawerComponent_div_41_span_1_Template, 2, 1, "span", 45)(2, EditUserDrawerComponent_div_41_span_2_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.editForm.get("timeZone")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.editForm.get("timeZone")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function EditUserDrawerComponent_option_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLang() === "ar" ? dept_r2.nameAr : dept_r2.nameEn, " ");
  }
}
function EditUserDrawerComponent_select_52_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275property("value", role_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r3, " ");
  }
}
function EditUserDrawerComponent_select_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 53)(1, "option", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EditUserDrawerComponent_select_52_option_3_Template, 2, 2, "option", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("users.select_role"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.availableRoles());
  }
}
function EditUserDrawerComponent_div_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4, " ");
  }
}
function EditUserDrawerComponent_div_53_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("users.no_role"), " ");
  }
}
function EditUserDrawerComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, EditUserDrawerComponent_div_53_span_1_Template, 2, 1, "span", 56)(2, EditUserDrawerComponent_div_53_span_2_Template, 2, 1, "span", 57);
    \u0275\u0275elementStart(3, "small", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (tmp_1_0 = ctx_r0.userData()) == null ? null : tmp_1_0.user == null ? null : tmp_1_0.user.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_2_0 = ctx_r0.userData()) == null ? null : tmp_2_0.user == null ? null : tmp_2_0.user.roles == null ? null : tmp_2_0.user.roles.length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("users.cannot_change_roles"));
  }
}
function EditUserDrawerComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.save"));
  }
}
function EditUserDrawerComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.saving"));
  }
}
var EditUserDrawerComponent = class _EditUserDrawerComponent {
  profileService;
  departmentService;
  fb;
  translationService;
  langService;
  data;
  isRTL = false;
  close = new EventEmitter();
  userUpdated = new EventEmitter();
  userData = signal(null, ...ngDevMode ? [{ debugName: "userData" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  isRTLSignal = signal(false, ...ngDevMode ? [{ debugName: "isRTLSignal" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  // Computed signals for better reactivity
  isManager = computed(() => this.userData()?.isManager || false, ...ngDevMode ? [{ debugName: "isManager" }] : []);
  availableRoles = computed(() => this.userData()?.availableRoles || [], ...ngDevMode ? [{ debugName: "availableRoles" }] : []);
  editForm;
  constructor(profileService, departmentService, fb, translationService, langService) {
    this.profileService = profileService;
    this.departmentService = departmentService;
    this.fb = fb;
    this.translationService = translationService;
    this.langService = langService;
    this.editForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      phoneNumber: ["", [Validators.required, Validators.minLength(5)]],
      // Very permissive phone validation
      isActive: [true],
      timeZone: ["", [Validators.required]],
      role: [""],
      // No validation required
      departmentId: [""]
      // No validation required
    });
  }
  ngOnInit() {
    this.userData.set(this.data);
    this.populateForm();
    this.loadDepartments();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTLSignal.set(lang === "ar");
    });
  }
  ngOnDestroy() {
  }
  loadDepartments() {
    this.departmentService.getDepartmentNames().subscribe({
      next: (departments) => {
        this.departments.set(departments);
      },
      error: (error) => {
      }
    });
  }
  populateForm() {
    const user = this.userData()?.user;
    if (user) {
      const formValues = {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phoneNumber: user.phoneNumber || "",
        timeZone: user.timeZone || "",
        isActive: user.isActive !== void 0 ? user.isActive : true,
        role: user.roles && user.roles.length > 0 ? user.roles[0] : "",
        departmentId: user.departmentId || ""
      };
      this.editForm.patchValue(formValues);
      this.editForm.markAsPristine();
      this.editForm.markAsUntouched();
      this.editForm.updateValueAndValidity();
    }
  }
  onSubmit() {
    if (this.editForm.valid && this.userData()) {
      this.saving.set(true);
      const userId = this.userData().userId;
      const isManager = this.userData()?.isManager;
      const updateData = {
        firstName: this.editForm.get("firstName")?.value,
        lastName: this.editForm.get("lastName")?.value,
        phoneNumber: this.editForm.get("phoneNumber")?.value,
        timeZone: this.editForm.get("timeZone")?.value || "UTC",
        departmentId: this.editForm.get("departmentId")?.value || null
      };
      this.profileService.updateUserById(userId, updateData).subscribe({
        next: (response) => {
          if (response.success) {
            const role = this.editForm.get("role")?.value;
            if (role) {
              this.updateUserRole(userId, role);
            } else {
              this.userUpdated.emit(response.data);
              this.onClose();
              this.saving.set(false);
            }
          } else {
            this.saving.set(false);
          }
        },
        error: (error) => {
          this.saving.set(false);
        }
      });
    }
  }
  updateUserRole(userId, role) {
    this.profileService.updateUserRole(userId, role).subscribe({
      next: (response) => {
        this.userUpdated.emit(this.userData()?.user);
        this.onClose();
        this.saving.set(false);
      },
      error: (error) => {
        console.error("Error updating role:", error);
        this.userUpdated.emit(this.userData()?.user);
        this.onClose();
        this.saving.set(false);
      }
    });
  }
  onClose() {
    this.close.emit();
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFullName() {
    const user = this.userData()?.user;
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return "";
  }
  static \u0275fac = function EditUserDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditUserDrawerComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditUserDrawerComponent, selectors: [["app-edit-user-drawer"]], inputs: { data: "data", isRTL: "isRTL" }, outputs: { close: "close", userUpdated: "userUpdated" }, decls: 69, vars: 33, consts: [[1, "drawer-overlay", 3, "click"], [1, "drawer-container", 3, "dir"], [1, "drawer-header"], [1, "header-content"], [1, "drawer-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "white", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "drawer-content"], [1, "edit-form", 3, "ngSubmit", "formGroup"], [1, "user-avatar-section"], [1, "avatar-container"], ["class", "user-avatar", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "user-name"], [1, "user-email"], [1, "form-section"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], ["for", "phoneNumber"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-input", 3, "placeholder"], ["for", "timeZone"], ["type", "text", "id", "timeZone", "formControlName", "timeZone", 1, "form-input", 3, "placeholder"], ["for", "department"], ["id", "department", "formControlName", "departmentId", 1, "form-input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "roles"], ["id", "roles", "formControlName", "role", "class", "form-input", 4, "ngIf"], ["class", "roles-display", 4, "ngIf"], ["for", "status"], [1, "status-toggle"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "isActive", 1, "toggle-input"], [1, "toggle-slider"], [1, "status-text"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "user-avatar", 3, "src", "alt"], [1, "avatar-placeholder"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "error-message"], [3, "value"], ["id", "roles", "formControlName", "role", 1, "form-input"], ["value", "", "disabled", ""], [1, "roles-display"], ["class", "role-badge", 4, "ngFor", "ngForOf"], ["class", "no-roles", 4, "ngIf"], [1, "form-help"], [1, "role-badge"], [1, "no-roles"]], template: function EditUserDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function EditUserDrawerComponent_Template_div_click_0_listener($event) {
        return ctx.onOverlayClick($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function EditUserDrawerComponent_Template_button_click_6_listener() {
        return ctx.onClose();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "line", 7)(9, "line", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 9)(11, "form", 10);
      \u0275\u0275listener("ngSubmit", function EditUserDrawerComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12);
      \u0275\u0275template(14, EditUserDrawerComponent_img_14_Template, 1, 2, "img", 13)(15, EditUserDrawerComponent_div_15_Template, 4, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h3", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 16);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 17)(21, "div", 18)(22, "div", 19)(23, "label", 20);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 21);
      \u0275\u0275template(26, EditUserDrawerComponent_div_26_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 19)(28, "label", 23);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 24);
      \u0275\u0275template(31, EditUserDrawerComponent_div_31_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19)(33, "label", 25);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 26);
      \u0275\u0275template(36, EditUserDrawerComponent_div_36_Template, 3, 2, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 19)(38, "label", 27);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 28);
      \u0275\u0275template(41, EditUserDrawerComponent_div_41_Template, 3, 2, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 19)(43, "label", 29);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 30)(46, "option", 31);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, EditUserDrawerComponent_option_48_Template, 2, 2, "option", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 19)(50, "label", 33);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, EditUserDrawerComponent_select_52_Template, 4, 2, "select", 34)(53, EditUserDrawerComponent_div_53_Template, 5, 3, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 19)(55, "label", 36);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 37)(58, "label", 38);
      \u0275\u0275element(59, "input", 39)(60, "span", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 41);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 42)(64, "button", 43);
      \u0275\u0275listener("click", function EditUserDrawerComponent_Template_button_click_64_listener() {
        return ctx.onClose();
      });
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 44);
      \u0275\u0275template(67, EditUserDrawerComponent_span_67_Template, 2, 1, "span", 45)(68, EditUserDrawerComponent_span_68_Template, 2, 1, "span", 45);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      let tmp_5_0;
      let tmp_7_0;
      let tmp_10_0;
      let tmp_13_0;
      let tmp_16_0;
      let tmp_19_0;
      let tmp_27_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTLSignal());
      \u0275\u0275property("dir", ctx.isRTLSignal() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.edit_user"));
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.userData()) == null ? null : tmp_4_0.user == null ? null : tmp_4_0.user.imageUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !((tmp_5_0 = ctx.userData()) == null ? null : tmp_5_0.user == null ? null : tmp_5_0.user.imageUrl));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getFullName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_7_0 = ctx.userData()) == null ? null : tmp_7_0.user == null ? null : tmp_7_0.user.email);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("users.first_name"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("users.first_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.editForm.get("firstName")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.editForm.get("firstName")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.last_name"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("users.last_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.editForm.get("lastName")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.editForm.get("lastName")) == null ? null : tmp_13_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.phone"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("users.phone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_16_0 = ctx.editForm.get("phoneNumber")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.editForm.get("phoneNumber")) == null ? null : tmp_16_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.time_zone"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("users.time_zone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_19_0 = ctx.editForm.get("timeZone")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx.editForm.get("timeZone")) == null ? null : tmp_19_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.department"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.select_department"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.roles"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isManager());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isManager());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.status"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ((tmp_27_0 = ctx.editForm.get("isActive")) == null ? null : tmp_27_0.value) ? ctx.translate("users.active") : ctx.translate("users.inactive"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.drawer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 1rem;\n  isolation: isolate;\n}\n.drawer-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_drawerSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_drawerSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.drawer-header[_ngcontent-%COMP%] {\n  background: #26667F;\n  color: white;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.header-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: rgb(255, 255, 255) !important;\n  min-height: 40px;\n}\n.drawer-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(255, 255, 255);\n  margin: 0;\n  flex: 1;\n}\n[dir=ltr][_ngcontent-%COMP%]   .drawer-title[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .drawer-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  background: none;\n  border: none;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: 0;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgb(255, 255, 255);\n}\n.drawer-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  overflow-y: auto;\n  max-height: calc(90vh - 100px);\n}\n.user-avatar-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avatar-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e5e7eb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  border: 3px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  margin: 0 auto;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.user-email[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n  font-family: inherit;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.disabled[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.roles-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.role-badge[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.no-roles[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n}\n.department-display[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background: #f9fafb;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  color: #6b7280;\n}\n.department-value[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.toggle-input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n.toggle-slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background-color: #158638;\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n.status-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.drawer-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.drawer-container.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n@media (max-width: 650px) {\n  .drawer-overlay[_ngcontent-%COMP%] {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n  }\n  .drawer-container[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n    z-index: 99999999999 !important;\n    position: relative !important;\n  }\n  .drawer-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    overflow-y: auto;\n    max-height: calc(100vh - 200px);\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 430px) {\n  .drawer-overlay[_ngcontent-%COMP%] {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n  }\n  .drawer-container[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n    z-index: 99999999999 !important;\n    position: relative !important;\n    max-width: calc(100vw - 1rem);\n  }\n  .drawer-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n    overflow-y: auto;\n    max-height: calc(100vh - 150px);\n  }\n  .drawer-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .drawer-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 650px) {\n  .drawer-overlay[_ngcontent-%COMP%] {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    isolation: isolate !important;\n    transform: translateZ(0) !important;\n    will-change: transform !important;\n  }\n  .drawer-container[_ngcontent-%COMP%] {\n    z-index: 99999999999 !important;\n    position: relative !important;\n    isolation: isolate !important;\n    transform: translateZ(0) !important;\n  }\n}\n@media (max-width: 650px) {\n  .sidebar[_ngcontent-%COMP%] {\n    z-index: 1 !important;\n  }\n  .drawer-overlay[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%], \n   .drawer-overlay[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n    z-index: 1 !important;\n  }\n}\n@media (max-width: 650px) {\n  body[_ngcontent-%COMP%]:has(.drawer-overlay)   .sidebar[_ngcontent-%COMP%] {\n    z-index: 1 !important;\n  }\n  body[_ngcontent-%COMP%]:has(.drawer-overlay)   .drawer-overlay[_ngcontent-%COMP%] {\n    z-index: 99999999999 !important;\n  }\n}\n/*# sourceMappingURL=edit-user-drawer.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditUserDrawerComponent, [{
    type: Component,
    args: [{ selector: "app-edit-user-drawer", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="drawer-overlay" (click)="onOverlayClick($event)">\r
  <div class="drawer-container" [class.rtl]="isRTLSignal()" [dir]="isRTLSignal() ? 'rtl' : 'ltr'">\r
    <!-- Drawer Header -->\r
    <div class="drawer-header">\r
      <div class="header-content">\r
        <h2 class="drawer-title">{{ translate('users.edit_user') }}</h2>\r
\r
        <button class="close-btn" (click)="onClose()">\r
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Drawer Content -->\r
    <div class="drawer-content">\r
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()" class="edit-form">\r
        <!-- User Avatar -->\r
        <div class="user-avatar-section">\r
          <div class="avatar-container">\r
            <img \r
              *ngIf="userData()?.user?.imageUrl" \r
              [src]="userData()?.user?.imageUrl" \r
              [alt]="getFullName()"\r
              class="user-avatar">\r
            <div *ngIf="!userData()?.user?.imageUrl" class="avatar-placeholder">\r
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
                <circle cx="12" cy="7" r="4"></circle>\r
              </svg>\r
            </div>\r
          </div>\r
          <h3 class="user-name">{{ getFullName() }}</h3>\r
          <p class="user-email">{{ userData()?.user?.email }}</p>\r
        </div>\r
\r
        <!-- Form Fields -->\r
        <div class="form-section">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="firstName">{{ translate('users.first_name') }}</label>\r
              <input \r
                type="text" \r
                id="firstName" \r
                formControlName="firstName" \r
                [placeholder]="translate('users.first_name_placeholder')"\r
                class="form-input">\r
              <div class="error-message" *ngIf="editForm.get('firstName')?.invalid && editForm.get('firstName')?.touched">\r
                {{ translate('users.first_name_required') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="lastName">{{ translate('users.last_name') }}</label>\r
              <input \r
                type="text" \r
                id="lastName" \r
                formControlName="lastName" \r
                [placeholder]="translate('users.last_name_placeholder')"\r
                class="form-input">\r
              <div class="error-message" *ngIf="editForm.get('lastName')?.invalid && editForm.get('lastName')?.touched">\r
                {{ translate('users.last_name_required') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="phoneNumber">{{ translate('users.phone') }}</label>\r
            <input \r
              type="tel" \r
              id="phoneNumber" \r
              formControlName="phoneNumber" \r
              [placeholder]="translate('users.phone_placeholder')"\r
              class="form-input">\r
            <div class="error-message" *ngIf="editForm.get('phoneNumber')?.invalid && editForm.get('phoneNumber')?.touched">\r
              <span *ngIf="editForm.get('phoneNumber')?.errors?.['required']">{{ translate('users.phone_required') }}</span>\r
              <span *ngIf="editForm.get('phoneNumber')?.errors?.['pattern']">{{ translate('users.phone_invalid_format') }}</span>\r
            </div>\r
          </div>\r
          <div class="form-group">\r
            <label for="timeZone">{{ translate('users.time_zone') }}</label>\r
            <input \r
              type="text" \r
              id="timeZone" \r
              formControlName="timeZone" \r
              [placeholder]="translate('users.time_zone_placeholder')"\r
              class="form-input">\r
            <div class="error-message" *ngIf="editForm.get('timeZone')?.invalid && editForm.get('timeZone')?.touched">\r
              <span *ngIf="editForm.get('timeZone')?.errors?.['required']">{{ translate('users.time_zone_required') }}</span>\r
              <span *ngIf="editForm.get('timeZone')?.errors?.['pattern']">{{ translate('users.time_zone_invalid_format') }}</span>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="department">{{ translate('users.department') }}</label>\r
            <select \r
              id="department" \r
              formControlName="departmentId"\r
              class="form-input">\r
              <option value="">{{ translate('users.select_department') }}</option>\r
              <option *ngFor="let dept of departments()" [value]="dept.id">\r
                {{ currentLang() === 'ar' ? dept.nameAr : dept.nameEn }}\r
              </option>\r
            </select>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="roles">{{ translate('users.roles') }}</label>\r
            <select \r
              *ngIf="isManager()" \r
              id="roles" \r
              formControlName="role"\r
              class="form-input">\r
              <option value="" disabled>{{ translate('users.select_role') }}</option>\r
              <option *ngFor="let role of availableRoles()" [value]="role">\r
                {{ role }}\r
              </option>\r
            </select>\r
            <div *ngIf="!isManager()" class="roles-display">\r
              <span *ngFor="let role of userData()?.user?.roles" class="role-badge">\r
                {{ role }}\r
              </span>\r
              <span *ngIf="!userData()?.user?.roles?.length" class="no-roles">\r
                {{ translate('users.no_role') }}\r
              </span>\r
              <small class="form-help">{{ translate('users.cannot_change_roles') }}</small>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="status">{{ translate('users.status') }}</label>\r
            <div class="status-toggle">\r
              <label class="toggle-switch">\r
                <input \r
                  type="checkbox" \r
                  formControlName="isActive"\r
                  class="toggle-input">\r
                <span class="toggle-slider"></span>\r
              </label>\r
              <span class="status-text">\r
                {{ editForm.get('isActive')?.value ? translate('users.active') : translate('users.inactive') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="form-actions">\r
          <button type="button" class="btn btn-secondary" (click)="onClose()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="editForm.invalid || saving()">\r
            <span *ngIf="!saving()">{{ translate('common.save') }}</span>\r
            <span *ngIf="saving()">{{ translate('common.saving') }}</span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/users/edit-user-drawer/edit-user-drawer.component.css */\n.drawer-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 1rem;\n  isolation: isolate;\n}\n.drawer-container {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow: hidden;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: drawerSlideIn 0.3s ease-out;\n}\n@keyframes drawerSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.drawer-header {\n  background: #26667F;\n  color: white;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.header-content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: rgb(255, 255, 255) !important;\n  min-height: 40px;\n}\n.drawer-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgb(255, 255, 255);\n  margin: 0;\n  flex: 1;\n}\n[dir=ltr] .drawer-title {\n  text-align: left;\n}\n[dir=rtl] .drawer-title {\n  text-align: right;\n}\n.close-btn {\n  position: absolute;\n  background: none;\n  border: none;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  transform: translateY(-50%);\n}\n[dir=ltr] .close-btn {\n  right: 0;\n}\n[dir=rtl] .close-btn {\n  left: 0;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: rgb(255, 255, 255);\n}\n.drawer-content {\n  padding: 2rem;\n  overflow-y: auto;\n  max-height: calc(90vh - 100px);\n}\n.user-avatar-section {\n  text-align: center;\n  margin-bottom: 2rem;\n  padding-bottom: 2rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.avatar-container {\n  margin-bottom: 1rem;\n}\n.user-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e5e7eb;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.avatar-placeholder {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  border: 3px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n  margin: 0 auto;\n}\n.user-name {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.user-email {\n  color: #6b7280;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.form-section {\n  margin-bottom: 2rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input {\n  padding: 0.75rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  transition: all 0.2s;\n  font-family: inherit;\n  width: 100%;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.disabled {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.roles-display {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.role-badge {\n  background: #158638;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.no-roles {\n  color: #6b7280;\n  font-style: italic;\n}\n.department-display {\n  padding: 0.75rem;\n  background: #f9fafb;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  color: #6b7280;\n}\n.department-value {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.status-toggle {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n.toggle-input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n  border-radius: 24px;\n}\n.toggle-slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.toggle-input:checked + .toggle-slider {\n  background-color: #158638;\n}\n.toggle-input:checked + .toggle-slider:before {\n  transform: translateX(26px);\n}\n.status-text {\n  font-weight: 500;\n  color: #374151;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.btn-primary {\n  background: #158638;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-secondary:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.drawer-container.rtl {\n  direction: rtl;\n}\n.drawer-container.rtl .form-actions {\n  justify-content: flex-start;\n}\n@media (max-width: 650px) {\n  .drawer-overlay {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n  }\n  .drawer-container {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n    z-index: 99999999999 !important;\n    position: relative !important;\n  }\n  .drawer-content {\n    padding: 1.5rem;\n    overflow-y: auto;\n    max-height: calc(100vh - 200px);\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 430px) {\n  .drawer-overlay {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n  }\n  .drawer-container {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n    z-index: 99999999999 !important;\n    position: relative !important;\n    max-width: calc(100vw - 1rem);\n  }\n  .drawer-content {\n    padding: 1rem;\n    overflow-y: auto;\n    max-height: calc(100vh - 150px);\n  }\n  .drawer-header {\n    padding: 1rem 1.5rem;\n  }\n  .drawer-title {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 650px) {\n  .drawer-overlay {\n    z-index: 99999999999 !important;\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    isolation: isolate !important;\n    transform: translateZ(0) !important;\n    will-change: transform !important;\n  }\n  .drawer-container {\n    z-index: 99999999999 !important;\n    position: relative !important;\n    isolation: isolate !important;\n    transform: translateZ(0) !important;\n  }\n}\n@media (max-width: 650px) {\n  .sidebar {\n    z-index: 1 !important;\n  }\n  .drawer-overlay ~ * .sidebar,\n  .drawer-overlay ~ * * .sidebar,\n  .drawer-overlay ~ * * * .sidebar {\n    z-index: 1 !important;\n  }\n}\n@media (max-width: 650px) {\n  body:has(.drawer-overlay) .sidebar {\n    z-index: 1 !important;\n  }\n  body:has(.drawer-overlay) .drawer-overlay {\n    z-index: 99999999999 !important;\n  }\n}\n/*# sourceMappingURL=edit-user-drawer.component.css.map */\n'] }]
  }], () => [{ type: ProfileService }, { type: DepartmentService }, { type: FormBuilder }, { type: TranslationService }, { type: LangService }], { data: [{
    type: Input
  }], isRTL: [{
    type: Input
  }], close: [{
    type: Output
  }], userUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditUserDrawerComponent, { className: "EditUserDrawerComponent", filePath: "src/app/components/users/edit-user-drawer/edit-user-drawer.component.ts", lineNumber: 23 });
})();

// src/app/components/users/users-list/users-list.ts
function UsersList_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
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
function UsersList_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 58);
    \u0275\u0275element(2, "path", 59)(3, "circle", 60)(4, "path", 61)(5, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "No users found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Get started by adding your first user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 4);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("users.add_user"), " ");
  }
}
function UsersList_div_40_div_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 92);
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", user_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getFullName(user_r4));
  }
}
function UsersList_div_40_div_1__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 93);
    \u0275\u0275element(1, "path", 94)(2, "circle", 95);
    \u0275\u0275elementEnd();
  }
}
function UsersList_div_40_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 97);
    \u0275\u0275element(6, "rect", 12)(7, "rect", 13)(8, "rect", 14)(9, "rect", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDepartment(user_r4));
  }
}
function UsersList_div_40_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 97);
    \u0275\u0275element(6, "path", 98)(7, "circle", 99);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.time_zone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.timeZone);
  }
}
function UsersList_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "h3", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 69);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 70);
    \u0275\u0275template(8, UsersList_div_40_div_1_img_8_Template, 1, 2, "img", 71)(9, UsersList_div_40_div_1__svg_svg_9_Template, 3, 0, "svg", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 73);
    \u0275\u0275elementStart(11, "div", 74)(12, "div", 75);
    \u0275\u0275listener("click", function UsersList_div_40_div_1_Template_div_click_12_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(user_r4.email));
    });
    \u0275\u0275elementStart(13, "span", 76);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 77);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 48);
    \u0275\u0275element(19, "rect", 79)(20, "path", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 75);
    \u0275\u0275listener("click", function UsersList_div_40_div_1_Template_div_click_21_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(user_r4.phoneNumber));
    });
    \u0275\u0275elementStart(22, "span", 76);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 77);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 48);
    \u0275\u0275element(28, "rect", 79)(29, "path", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, UsersList_div_40_div_1_div_30_Template, 10, 2, "div", 81)(31, UsersList_div_40_div_1_div_31_Template, 8, 2, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 82)(33, "span", 83);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 84);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 85)(38, "button", 86);
    \u0275\u0275listener("click", function UsersList_div_40_div_1_Template_button_click_38_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 48);
    \u0275\u0275element(40, "polyline", 87)(41, "path", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "button", 89);
    \u0275\u0275listener("click", function UsersList_div_40_div_1_Template_button_click_43_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditDrawer(user_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 48);
    \u0275\u0275element(45, "path", 90)(46, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(user_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRole(user_r4) || ctx_r1.translate("users.no_role"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r4.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r4.imageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", user_r4.departmentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r4.timeZone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.status"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(user_r4.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("users." + (user_r4.isActive ? "active" : "inactive")), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("users.delete"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("users.edit"), " ");
  }
}
function UsersList_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, UsersList_div_40_div_1_Template, 48, 16, "div", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users());
  }
}
function UsersList_div_41_tr_21_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 92);
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", user_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getFullName(user_r6));
  }
}
function UsersList_div_41_tr_21__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "path", 94)(2, "circle", 95);
    \u0275\u0275elementEnd();
  }
}
function UsersList_div_41_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 103);
    \u0275\u0275template(3, UsersList_div_41_tr_21_img_3_Template, 1, 2, "img", 71)(4, UsersList_div_41_tr_21__svg_svg_4_Template, 3, 0, "svg", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 84);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 105)(20, "button", 106);
    \u0275\u0275listener("click", function UsersList_div_41_tr_21_Template_button_click_20_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditDrawer(user_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 48);
    \u0275\u0275element(22, "path", 90)(23, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 107);
    \u0275\u0275listener("click", function UsersList_div_41_tr_21_Template_button_click_24_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(user_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 48);
    \u0275\u0275element(26, "polyline", 87)(27, "path", 88);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", user_r6.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !user_r6.imageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(user_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDepartment(user_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRole(user_r6) || ctx_r1.translate("users.no_role"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(user_r6.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("users." + (user_r6.isActive ? "active" : "inactive")), " ");
  }
}
function UsersList_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "table", 101)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(21, UsersList_div_41_tr_21_Template, 28, 10, "tr", 102);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.avatar"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.role") || ctx_r1.translate("users.no_role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("users.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.users());
  }
}
function UsersList_li_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 46)(1, "button", 109);
    \u0275\u0275listener("click", function UsersList_li_66_Template_button_click_1_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r9 === ctx_r1.currentPage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9);
  }
}
function UsersList_app_confirmation_modal_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-confirmation-modal", 110);
    \u0275\u0275listener("confirm", function UsersList_app_confirmation_modal_71_Template_app_confirmation_modal_confirm_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteConfirm());
    })("cancel", function UsersList_app_confirmation_modal_71_Template_app_confirmation_modal_cancel_0_listener() {
      \u0275\u0275restoreView(_r10);
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
function UsersList_app_edit_user_drawer_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-edit-user-drawer", 111);
    \u0275\u0275listener("close", function UsersList_app_edit_user_drawer_72_Template_app_edit_user_drawer_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditDrawerClose());
    })("userUpdated", function UsersList_app_edit_user_drawer_72_Template_app_edit_user_drawer_userUpdated_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUserUpdated($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.userToEdit())("isRTL", ctx_r1.isRTL());
  }
}
function UsersList_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function UsersList_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function UsersList_div_73_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 114);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 115);
    \u0275\u0275element(4, "path", 116)(5, "polyline", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 118);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 119);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 120);
    \u0275\u0275listener("click", function UsersList_div_73_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
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
var UsersList = class _UsersList {
  usersService;
  profileService;
  translationService;
  langService;
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  viewMode = signal("cards", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  isManager = signal(false, ...ngDevMode ? [{ debugName: "isManager" }] : []);
  availableRoles = signal([], ...ngDevMode ? [{ debugName: "availableRoles" }] : []);
  // Pagination
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(6, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  // Modal state
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  userToDelete = signal(null, ...ngDevMode ? [{ debugName: "userToDelete" }] : []);
  deleteModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  // Edit drawer state
  showEditDrawer = signal(false, ...ngDevMode ? [{ debugName: "showEditDrawer" }] : []);
  userToEdit = signal(null, ...ngDevMode ? [{ debugName: "userToEdit" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  constructor(usersService, profileService, translationService, langService) {
    this.usersService = usersService;
    this.profileService = profileService;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.loadUsers();
    this.checkUserPermissions();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  checkUserPermissions() {
    this.profileService.getProfile().subscribe({
      next: (response) => {
        if (response.success) {
          const userRoles = response.data.roles || [];
          const isManagerUser = userRoles.length > 0;
          this.isManager.set(isManagerUser);
          if (isManagerUser) {
            const roles = ["Manager", "Admin", "Employee", "Secretary"];
            this.availableRoles.set(roles);
          } else {
            this.availableRoles.set(["User"]);
          }
        } else {
          console.error("Profile service response not successful:", response);
        }
      },
      error: (error) => {
        console.error("Error checking user permissions:", error);
        this.isManager.set(true);
        this.availableRoles.set(["Manager", "Admin", "Employee", "Secretary"]);
      }
    });
  }
  loadUsers() {
    this.loading.set(true);
    const params = {
      page: this.currentPage(),
      pageSize: this.pageSize(),
      search: this.searchTerm() || void 0
    };
    this.usersService.getUsers(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.users.set(response.data.items || []);
          this.totalCount.set(response.data.totalCount || 0);
          this.currentPage.set(response.data.page || 1);
          this.pageSize.set(response.data.pageSize || 6);
        } else {
          this.users.set([]);
          this.totalCount.set(0);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.users.set([]);
        this.totalCount.set(0);
        this.loading.set(false);
      }
    });
  }
  onSearchChange(searchTerm) {
    this.searchTerm.set(searchTerm);
    this.currentPage.set(1);
    this.loadUsers();
  }
  onSearchClick() {
    this.currentPage.set(1);
    this.loadUsers();
  }
  clearSearch() {
    this.searchTerm.set("");
    this.currentPage.set(1);
    this.loadUsers();
  }
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadUsers();
  }
  onPageSizeChange(newPageSize) {
    this.pageSize.set(parseInt(newPageSize));
    this.currentPage.set(1);
    this.loadUsers();
  }
  toggleViewMode() {
    this.viewMode.update((current) => current === "cards" ? "table" : "cards");
  }
  openDeleteModal(user) {
    console.log("Opening delete modal for user:", user);
    this.userToDelete.set(user);
    this.deleteModalData.set({
      title: this.translate("users.delete_user"),
      message: this.translate("users.confirm_delete_user").replace("%name%", this.getFullName(user)),
      confirmText: this.translate("users.delete"),
      cancelText: this.translate("users.cancel"),
      type: "delete"
    });
    this.showDeleteModal.set(true);
    console.log("Delete modal state:", this.showDeleteModal());
    console.log("Delete modal data:", this.deleteModalData());
  }
  onDeleteConfirm() {
    const user = this.userToDelete();
    if (user) {
      this.usersService.deleteUser(user.id).subscribe({
        next: () => {
          this.users.update((users) => users.filter((u) => u.id !== user.id));
          this.showDeleteModal.set(false);
          this.userToDelete.set(null);
          this.successMessage.set(this.translate("users.deleted_success"));
          this.showSuccessModal.set(true);
          setTimeout(() => {
            this.showSuccessModal.set(false);
          }, 3e3);
        },
        error: (error) => {
          console.error("Error deleting user:", error);
          this.showDeleteModal.set(false);
          this.userToDelete.set(null);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.userToDelete.set(null);
  }
  openEditDrawer(user) {
    if (!this.isManager() && this.availableRoles().length === 0) {
      this.checkUserPermissions();
      setTimeout(() => {
        this.openEditDrawer(user);
      }, 100);
      return;
    }
    const userProfile = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      departmentId: user.departmentId || null,
      departmentName: user.departmentName || null,
      imageUrl: user.imageUrl || null,
      timeZone: user.timeZone || "",
      isActive: user.isActive,
      createdAt: user.createdAt || "",
      updatedAt: user.updatedAt || null,
      lastLoginAt: user.lastLoginAt || "",
      roles: user.roles || []
    };
    const editData = {
      userId: user.id,
      user: userProfile,
      isManager: this.isManager(),
      availableRoles: this.availableRoles()
    };
    this.userToEdit.set(editData);
    this.showEditDrawer.set(true);
  }
  onEditDrawerClose() {
    this.showEditDrawer.set(false);
    this.userToEdit.set(null);
  }
  onUserUpdated(updatedUser) {
    this.users.update((users) => users.map((u) => u.id === updatedUser.id ? __spreadProps(__spreadValues({}, u), {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      phoneNumber: updatedUser.phoneNumber,
      isActive: updatedUser.isActive,
      departmentId: updatedUser.departmentId || void 0,
      departmentName: updatedUser.departmentName || void 0,
      roles: updatedUser.roles
    }) : u));
    this.successMessage.set(this.translate("users.edit_user_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  onUserAdded(newUser) {
    this.users.update((users) => [newUser, ...users]);
    this.successMessage.set(this.translate("users.add_user_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard");
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getStatusClass(status) {
    return status ? "status-active" : "status-inactive";
  }
  getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
  }
  getDepartment(user) {
    return user.departmentName || this.translate("users.no_department");
  }
  getRole(user) {
    return user.roles && user.roles.length > 0 ? user.roles[0] : this.translate("users.no_role");
  }
  get totalPages() {
    return Math.ceil(this.totalCount() / this.pageSize());
  }
  get pages() {
    const pages = [];
    const maxVisiblePages = 5;
    if (this.totalPages === 0) {
      pages.push(1);
      return pages;
    }
    let startPage = Math.max(1, this.currentPage() - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  get Math() {
    return Math;
  }
  static \u0275fac = function UsersList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersList)(\u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersList, selectors: [["app-users-list"]], standalone: false, decls: 74, vars: 40, consts: [["pageSizeSelect", ""], [1, "users-page"], [1, "top-bar"], [1, "top-bar-left"], ["routerLink", "/users/add", 1, "add-user-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "plus-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "top-bar-right"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["d", "M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-search", "me-2"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "col-md-3"], [1, "page-title"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "users-grid", 4, "ngIf"], ["class", "users-table", 4, "ngIf"], [1, "pagination-section"], [1, "pagination-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "change", "value"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "pagination-info"], ["aria-label", "Users pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [3, "data", "isRTL", "isVisible", "confirm", "cancel", 4, "ngIf"], [3, "data", "isRTL", "close", "userUpdated", 4, "ngIf"], ["class", "success-modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 1, "empty-icon"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "users-grid"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "card-header"], [1, "user-info"], [1, "user-name"], [1, "user-role"], [1, "user-avatar"], [3, "src", "alt", 4, "ngIf"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 4, "ngIf"], [1, "card-divider"], [1, "card-details"], [1, "detail-row", 3, "click"], [1, "detail-label"], [1, "detail-value"], ["title", "Copy to clipboard", 1, "copy-btn"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["class", "detail-row", 4, "ngIf"], [1, "card-status"], [1, "status-label"], [1, "status-badge"], [1, "card-actions"], [1, "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], [1, "edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [3, "src", "alt"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "detail-row"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "detail-icon"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "users-table"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "user-avatar-small"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 4, "ngIf"], [1, "table-actions"], ["title", "Edit", 1, "edit-btn-small", 3, "click"], ["title", "Delete", 1, "delete-btn-small", 3, "click"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "page-link", 3, "click"], [3, "confirm", "cancel", "data", "isRTL", "isVisible"], [3, "close", "userUpdated", "data", "isRTL"], [1, "success-modal-overlay", 3, "click"], [1, "success-modal", 3, "click"], [1, "success-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "success-title"], [1, "success-message"], [1, "success-close-btn", 3, "click"]], template: function UsersList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "line", 6)(6, "line", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "button", 10);
      \u0275\u0275listener("click", function UsersList_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode.set("cards"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 11);
      \u0275\u0275element(12, "rect", 12)(13, "rect", 13)(14, "rect", 14)(15, "rect", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function UsersList_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode.set("table"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 11);
      \u0275\u0275element(19, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "div", 19)(24, "div", 20);
      \u0275\u0275element(25, "i", 21);
      \u0275\u0275elementStart(26, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function UsersList_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function UsersList_Template_input_keyup_enter_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 23)(28, "button", 24);
      \u0275\u0275listener("click", function UsersList_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275element(29, "i", 25);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 23)(32, "button", 26);
      \u0275\u0275listener("click", function UsersList_Template_button_click_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearSearch());
      });
      \u0275\u0275element(33, "i", 27);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "div", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "h1", 29);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, UsersList_div_38_Template, 4, 1, "div", 30)(39, UsersList_div_39_Template, 12, 1, "div", 31)(40, UsersList_div_40_Template, 2, 1, "div", 32)(41, UsersList_div_41_Template, 22, 9, "div", 33);
      \u0275\u0275elementStart(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "label", 37);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 38, 0);
      \u0275\u0275listener("change", function UsersList_Template_select_change_47_listener() {
        \u0275\u0275restoreView(_r1);
        const pageSizeSelect_r7 = \u0275\u0275reference(48);
        return \u0275\u0275resetView(ctx.onPageSizeChange(pageSizeSelect_r7.value));
      });
      \u0275\u0275elementStart(49, "option", 39);
      \u0275\u0275text(50, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 40);
      \u0275\u0275text(52, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 41);
      \u0275\u0275text(54, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "option", 42);
      \u0275\u0275text(56, "48");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 43)(58, "span");
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "nav", 44)(61, "ul", 45)(62, "li", 46)(63, "button", 47);
      \u0275\u0275listener("click", function UsersList_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange(ctx.currentPage() - 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 48);
      \u0275\u0275element(65, "polyline", 49);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(66, UsersList_li_66_Template, 3, 3, "li", 50);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "li", 46)(68, "button", 47);
      \u0275\u0275listener("click", function UsersList_Template_button_click_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange(ctx.currentPage() + 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 48);
      \u0275\u0275element(70, "polyline", 51);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(71, UsersList_app_confirmation_modal_71_Template, 1, 3, "app-confirmation-modal", 52)(72, UsersList_app_edit_user_drawer_72_Template, 1, 2, "app-edit-user-drawer", 53)(73, UsersList_div_73_Template, 12, 3, "div", 54);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ltr-right", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("users.add_user"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("ltr-left", !ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "cards");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("users.view_cards"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "table");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("users.view_table"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("placeholder", ctx.translate("users.search_users"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.title"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.users().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.users().length > 0 && ctx.viewMode() === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.users().length > 0 && ctx.viewMode() === "table");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.translate("common.page_size"), ":");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.pageSize());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate6("", ctx.translate("common.showing"), " ", (ctx.currentPage() - 1) * ctx.pageSize() + 1, "-", ctx.Math.min(ctx.currentPage() * ctx.pageSize(), ctx.totalCount()), " ", ctx.translate("common.of"), " ", ctx.totalCount(), " ", ctx.translate("users.title"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.pages);
      \u0275\u0275advance();
      \u0275\u0275classProp("disabled", ctx.currentPage() === ctx.totalPages);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage() === ctx.totalPages);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditDrawer());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, ConfirmationModalComponent, EditUserDrawerComponent], styles: ["\n\n.users-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.users-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  flex-direction: row;\n}\n.top-bar-left.ltr-right[_ngcontent-%COMP%] {\n  order: 2;\n}\n.top-bar-right.ltr-left[_ngcontent-%COMP%] {\n  order: 1;\n}\n.top-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.top-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-user-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-green, #158638);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-user-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--brand-blue, #09365F);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.page-title[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.page-title[_ngcontent-%COMP%]   [dir=ltr][_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--brand-blue, #09365F);\n  margin-bottom: 2rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid var(--brand-green, #158638);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.users-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));\n    gap: 2rem;\n    width: 100%;\n    justify-content: center;\n    align-items: start;\n  }\n  .user-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n@media (min-width: 900px) and (max-width: 1200px) {\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\n    gap: 2.5rem;\n    justify-content: center;\n    align-items: start;\n  }\n  .user-card[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: none;\n  }\n}\n.user-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n  width: 100%;\n  box-sizing: border-box;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: #d1d5db;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 1rem 0;\n}\n.card-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.detail-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  margin: 0 -0.75rem;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 80px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.5rem;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.25rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  flex-shrink: 0;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: var(--brand-green, #158638);\n}\n.detail-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n.delete-btn[_ngcontent-%COMP%], \n.edit-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-blue, #09365F);\n  color: white;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #072a4f;\n  box-shadow: 0 4px 12px rgba(9, 54, 95, 0.3);\n}\n.users-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.875rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.user-avatar-small[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-avatar-small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.edit-btn-small[_ngcontent-%COMP%], \n.delete-btn-small[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small[_ngcontent-%COMP%] {\n  color: var(--brand-blue, #09365F);\n}\n.edit-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #eff6ff;\n}\n.delete-btn-small[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.delete-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #fef2f2;\n}\n.users-page.rtl[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.users-page.rtl[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.users-page.rtl[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.users-page.rtl[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n@media (max-width: 768px) {\n  .users-page[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: center !important;\n    width: 100% !important;\n    max-width: 100vw !important;\n    overflow-x: hidden !important;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1.5rem !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n    padding: 0 !important;\n  }\n  .top-bar-left[_ngcontent-%COMP%], \n   .top-bar-right[_ngcontent-%COMP%] {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important;\n    align-items: center !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    justify-content: center !important;\n    width: 100% !important;\n    max-width: 300px !important;\n  }\n  .add-user-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 280px !important;\n    justify-content: center !important;\n    margin: 0 !important;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n    padding: 1rem !important;\n  }\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    width: 100% !important;\n  }\n  .search-section[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 0 1rem 0 !important;\n    padding: 0 !important;\n    flex: none !important;\n  }\n  .search-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0 !important;\n  }\n  .search-input-wrapper[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    text-align: center !important;\n    width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n  }\n  .users-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    max-width: 320px !important;\n    margin: 0 auto 2rem auto !important;\n    justify-items: center !important;\n    padding: 0 !important;\n  }\n  .user-card[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n    box-sizing: border-box !important;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    gap: 0.75rem !important;\n    width: 100% !important;\n  }\n  .delete-btn[_ngcontent-%COMP%], \n   .edit-btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem !important;\n  }\n  .pagination-section[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 320px !important;\n    margin: 0 auto !important;\n    text-align: center !important;\n  }\n  .loading-state[_ngcontent-%COMP%] {\n    width: 100% !important;\n    text-align: center !important;\n    margin: 0 auto !important;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n  }\n  .mb-4[_ngcontent-%COMP%] {\n    margin-bottom: 2rem !important;\n  }\n  .w-100[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0 !important;\n  }\n  .users-page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n  }\n  .users-page[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .users-page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .page-title[_ngcontent-%COMP%], \n   .empty-state[_ngcontent-%COMP%], \n   .loading-state[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .users-grid[_ngcontent-%COMP%] {\n    display: grid !important;\n    place-items: center !important;\n  }\n  .users-page[_ngcontent-%COMP%], \n   .top-bar[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%], \n   .users-grid[_ngcontent-%COMP%], \n   .pagination-section[_ngcontent-%COMP%] {\n    overflow-x: hidden !important;\n  }\n}\n@media (max-width: 1024px) {\n  .users-table[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    border-radius: 0.5rem;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 900px;\n  }\n}\n@media (max-width: 768px) {\n  .users-table[_ngcontent-%COMP%] {\n    margin: 0 -1rem;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n    overflow-x: scroll;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 900px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.8rem;\n  }\n  .user-avatar-small[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .edit-btn-small[_ngcontent-%COMP%], \n   .delete-btn-small[_ngcontent-%COMP%] {\n    padding: 0.375rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.success-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.success-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_successModalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_successModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #158638;\n  margin-bottom: 1rem;\n}\n.success-title[_ngcontent-%COMP%] {\n  color: #158638;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.success-close-btn[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.success-close-btn[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #007bff;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .pagination-section[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .users-page[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    margin-bottom: 1rem;\n    text-align: center !important;\n    justify-content: center;\n    align-self: center;\n  }\n  .users-page.rtl[_ngcontent-%COMP%] {\n    direction: rtl;\n  }\n  .user-card[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 96% !important;\n    margin: 0 auto !important;\n    box-sizing: border-box !important;\n  }\n}\n@media (max-width: 768px) {\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    align-items: center;\n    text-align: center;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n    max-width: 200px;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    order: -1;\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=users-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersList, [{
    type: Component,
    args: [{ selector: "app-users-list", standalone: false, template: `<div class="users-page" [class.rtl]="isRTL()">\r
  <!-- Top Bar -->\r
  <div class="top-bar">\r
    <!-- LTR: Button on right, view toggle on left -->\r
    <div class="top-bar-left" [class.ltr-right]="!isRTL()">\r
      <button class="add-user-btn" routerLink="/users/add">\r
        <svg class="plus-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="12" y1="5" x2="12" y2="19"></line>\r
          <line x1="5" y1="12" x2="19" y2="12"></line>\r
        </svg>\r
        {{ translate('users.add_user') }}\r
      </button>\r
    </div>\r
    <div class="top-bar-right" [class.ltr-left]="!isRTL()">\r
      <div class="view-toggle">\r
        <button \r
          class="toggle-btn" \r
          [class.active]="viewMode() === 'cards'"\r
          (click)="viewMode.set('cards')">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
          {{ translate('users.view_cards') }}\r
        </button>\r
        <button \r
          class="toggle-btn" \r
          [class.active]="viewMode() === 'table'"\r
          (click)="viewMode.set('table')">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"></path>\r
          </svg>\r
          {{ translate('users.view_table') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search Section -->\r
  <div class="search-section mb-4">\r
    <div class="row">\r
      <div class="col-md-5">\r
        <div class="search-input-wrapper">\r
          <i class="bi bi-search search-icon"></i>\r
           <input \r
             type="text" \r
             class="form-control search-input" \r
             [placeholder]="translate('users.search_users')"\r
             [(ngModel)]="searchTerm"\r
             (keyup.enter)="onSearchClick()"\r
           >\r
        </div>\r
      </div>\r
       <div class="col-md-2">\r
         <button class="btn btn-primary w-100" (click)="onSearchClick()">\r
           <i class="bi bi-search me-2"></i>\r
           {{ translate('common.search') }}\r
         </button>\r
       </div>\r
       <div class="col-md-2">\r
         <button class="btn btn-outline-secondary w-100" (click)="clearSearch()">\r
           <i class="bi bi-x-circle me-2"></i>\r
           {{ translate('common.clear') }}\r
         </button>\r
       </div>\r
       <div class="col-md-3">\r
         <!-- Empty space for layout balance -->\r
       </div>\r
    </div>\r
  </div>\r
\r
  <!-- Page Title -->\r
  <h1 class="page-title">{{ translate('users.title') }}</h1>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading()">\r
    <div class="spinner"></div>\r
    <p>{{ translate('login.loading') }}</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading() && users().length === 0">\r
    <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
      <circle cx="9" cy="7" r="4"></circle>\r
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
    </svg>\r
    <h3>No users found</h3>\r
    <p>Get started by adding your first user</p>\r
    <button class="add-user-btn" routerLink="/users/add">\r
      {{ translate('users.add_user') }}\r
    </button>\r
  </div>\r
\r
  <!-- Cards View -->\r
  <div class="users-grid" *ngIf="!loading() && users().length > 0 && viewMode() === 'cards'">\r
    <div class="user-card" *ngFor="let user of users()">\r
      <div class="card-header">\r
        <div class="user-info">\r
          <h3 class="user-name">{{ getFullName(user) }}</h3>\r
          <span class="user-role">{{ getRole(user) || translate('users.no_role') }}</span>\r
        </div>\r
        <div class="user-avatar">\r
          <img *ngIf="user.imageUrl" [src]="user.imageUrl" [alt]="getFullName(user)">\r
          <svg *ngIf="!user.imageUrl" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
            <circle cx="12" cy="7" r="4"></circle>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <div class="card-divider"></div>\r
\r
      <div class="card-details">\r
        <div class="detail-row" (click)="copyToClipboard(user.email)">\r
          <span class="detail-label">{{ translate('users.email') }}</span>\r
          <span class="detail-value">{{ user.email }}</span>\r
          <button class="copy-btn" title="Copy to clipboard">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\r
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <div class="detail-row" (click)="copyToClipboard(user.phoneNumber)">\r
          <span class="detail-label">{{ translate('users.phone') }}</span>\r
          <span class="detail-value">{{ user.phoneNumber }}</span>\r
          <button class="copy-btn" title="Copy to clipboard">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\r
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <div class="detail-row" *ngIf="user.departmentName">\r
          <span class="detail-label">{{ translate('users.department') }}</span>\r
          <span class="detail-value">{{ getDepartment(user) }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
        </div>\r
\r
        <div class="detail-row" *ngIf="user.timeZone">\r
          <span class="detail-label">{{ translate('users.time_zone') }}</span>\r
          <span class="detail-value">{{ user.timeZone }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>\r
            <circle cx="12" cy="10" r="3"></circle>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <div class="card-status">\r
        <span class="status-label">{{ translate('users.status') }}</span>\r
        <span class="status-badge" [class]="getStatusClass(user.isActive)">\r
          {{ translate('users.' + (user.isActive ? 'active' : 'inactive')) }}\r
        </span>\r
      </div>\r
\r
      <div class="card-actions">\r
        <button class="delete-btn" (click)="openDeleteModal(user)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="3,6 5,6 21,6"></polyline>\r
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>\r
          </svg>\r
          {{ translate('users.delete') }}\r
        </button>\r
        <button class="edit-btn" (click)="openEditDrawer(user)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
          </svg>\r
          {{ translate('users.edit') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table View -->\r
  <div class="users-table" *ngIf="!loading() && users().length > 0 && viewMode() === 'table'">\r
    <table class="table">\r
      <thead>\r
        <tr>\r
          <th>{{ translate('users.avatar') }}</th>\r
          <th>{{ translate('users.name') }}</th>\r
          <th>{{ translate('users.email') }}</th>\r
          <th>{{ translate('users.phone') }}</th>\r
          <th>{{ translate('users.department') }}</th>\r
          <th>{{ translate('users.role') || translate('users.no_role') }}</th>\r
          <th>{{ translate('users.status') }}</th>\r
          <th>{{ translate('users.actions') }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let user of users()">\r
          <td>\r
            <div class="user-avatar-small">\r
              <img *ngIf="user.imageUrl" [src]="user.imageUrl" [alt]="getFullName(user)">\r
              <svg *ngIf="!user.imageUrl" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
                <circle cx="12" cy="7" r="4"></circle>\r
              </svg>\r
            </div>\r
          </td>\r
          <td>{{ getFullName(user) }}</td>\r
          <td>{{ user.email }}</td>\r
          <td>{{ user.phoneNumber }}</td>\r
          <td>{{ getDepartment(user) }}</td>\r
          <td>{{ getRole(user) || translate('users.no_role') }}</td>\r
          <td>\r
            <span class="status-badge" [class]="getStatusClass(user.isActive)">\r
              {{ translate('users.' + (user.isActive ? 'active' : 'inactive')) }}\r
            </span>\r
          </td>\r
          <td>\r
            <div class="table-actions">\r
              <button class="edit-btn-small" (click)="openEditDrawer(user)" title="Edit">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                </svg>\r
              </button>\r
              <button class="delete-btn-small" (click)="openDeleteModal(user)" title="Delete">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3,6 5,6 21,6"></polyline>\r
                  <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>\r
                </svg>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Pagination Info and Controls -->\r
  <div class="pagination-section">\r
    \r
    \r
    <div class="pagination-controls">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
        <select #pageSizeSelect id="pageSize" [value]="pageSize()" (change)="onPageSizeChange(pageSizeSelect.value)">\r
          <option value="6">6</option>\r
          <option value="12">12</option>\r
          <option value="24">24</option>\r
          <option value="48">48</option>\r
        </select>\r
      </div>\r
      <div class="pagination-info">\r
        <span>{{ translate('common.showing') }} {{ (currentPage() - 1) * pageSize() + 1 }}-{{ Math.min(currentPage() * pageSize(), totalCount()) }} {{ translate('common.of') }} {{ totalCount() }} {{ translate('users.title') }}</span>\r
      </div>\r
      <nav aria-label="Users pagination">\r
        <ul class="pagination">\r
          <li class="page-item" [class.disabled]="currentPage() === 1">\r
            <button class="page-link" (click)="onPageChange(currentPage() - 1)" [disabled]="currentPage() === 1">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="15,18 9,12 15,6"/>\r
              </svg>\r
            </button>\r
          </li>\r
          \r
          <li *ngFor="let page of pages" class="page-item" [class.active]="page === currentPage()">\r
            <button class="page-link" (click)="onPageChange(page)">{{ page }}</button>\r
          </li>\r
          \r
          <li class="page-item" [class.disabled]="currentPage() === totalPages">\r
            <button class="page-link" (click)="onPageChange(currentPage() + 1)" [disabled]="currentPage() === totalPages">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="9,18 15,12 9,6"/>\r
              </svg>\r
            </button>\r
          </li>\r
        </ul>\r
      </nav>\r
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
    (cancel)="onDeleteCancel()">\r
  </app-confirmation-modal>\r
\r
  <!-- Edit User Drawer -->\r
  <app-edit-user-drawer\r
    *ngIf="showEditDrawer()"\r
    [data]="userToEdit()!"\r
    [isRTL]="isRTL()"\r
    (close)="onEditDrawerClose()"\r
    (userUpdated)="onUserUpdated($event)">\r
  </app-edit-user-drawer>\r
\r
  <!-- Success Modal -->\r
  <div class="success-modal-overlay" *ngIf="showSuccessModal()" (click)="closeSuccessModal()">\r
    <div class="success-modal" (click)="$event.stopPropagation()">\r
      <div class="success-icon">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
          <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
        </svg>\r
      </div>\r
      <h3 class="success-title">{{ translate('common.success') }}</h3>\r
      <p class="success-message">{{ successMessage() }}</p>\r
      <button class="success-close-btn" (click)="closeSuccessModal()">\r
        {{ translate('common.ok') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/users/users-list/users-list.css */\n.users-page {\n  padding: 2rem;\n}\n.users-page.rtl {\n  direction: rtl;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  gap: 1rem;\n  flex-direction: row;\n}\n.top-bar-left.ltr-right {\n  order: 2;\n}\n.top-bar-right.ltr-left {\n  order: 1;\n}\n.top-bar-left {\n  display: flex;\n  align-items: center;\n}\n.top-bar-right {\n  display: flex;\n  align-items: center;\n}\n.add-user-btn {\n  background-color: var(--brand-green, #158638);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-user-btn:hover {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.plus-icon {\n  flex-shrink: 0;\n}\n.view-toggle {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active {\n  background-color: white;\n  color: var(--brand-blue, #09365F);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.page-title [dir=rtl] {\n  text-align: right !important;\n}\n.page-title [dir=ltr] {\n  text-align: left !important;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--brand-blue, #09365F);\n  margin-bottom: 2rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid var(--brand-green, #158638);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.users-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .users-grid {\n    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));\n    gap: 2rem;\n    width: 100%;\n    justify-content: center;\n    align-items: start;\n  }\n  .user-card {\n    width: 100%;\n    max-width: none;\n  }\n}\n@media (min-width: 900px) and (max-width: 1200px) {\n  .users-grid {\n    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\n    gap: 2.5rem;\n    justify-content: center;\n    align-items: start;\n  }\n  .user-card {\n    width: 90%;\n    max-width: none;\n  }\n}\n.user-card {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n  width: 100%;\n  box-sizing: border-box;\n}\n.user-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: #d1d5db;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.user-info {\n  flex: 1;\n}\n.user-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.25rem 0;\n}\n.user-role {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.user-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-avatar svg {\n  color: #9ca3af;\n}\n.card-divider {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 1rem 0;\n}\n.card-details {\n  margin-bottom: 1.5rem;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.detail-row:hover {\n  background-color: #f9fafb;\n  border-radius: 0.375rem;\n  padding: 0.75rem;\n  margin: 0 -0.75rem;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 80px;\n}\n.detail-value {\n  font-size: 0.875rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.5rem;\n}\n.copy-btn {\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.25rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  flex-shrink: 0;\n}\n.copy-btn:hover {\n  background-color: #f3f4f6;\n  color: var(--brand-green, #158638);\n}\n.detail-icon {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-status {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  padding: 0.75rem;\n  background-color: #f9fafb;\n  border-radius: 0.5rem;\n}\n.status-label {\n  font-size: 0.875rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.card-actions {\n  display: flex;\n  gap: 0.75rem;\n}\n.delete-btn,\n.edit-btn {\n  flex: 1;\n  padding: 0.75rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.delete-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.delete-btn:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.edit-btn {\n  background-color: var(--brand-blue, #09365F);\n  color: white;\n}\n.edit-btn:hover {\n  background-color: #072a4f;\n  box-shadow: 0 4px 12px rgba(9, 54, 95, 0.3);\n}\n.users-table {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table th,\n.table td {\n  padding: 1rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table th {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.table td {\n  color: #111827;\n  font-size: 0.875rem;\n}\n.table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.user-avatar-small {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-avatar-small img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.user-avatar-small svg {\n  color: #9ca3af;\n}\n.table-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.edit-btn-small,\n.delete-btn-small {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small {\n  color: var(--brand-blue, #09365F);\n}\n.edit-btn-small:hover {\n  background-color: #eff6ff;\n}\n.delete-btn-small {\n  color: #dc2626;\n}\n.delete-btn-small:hover {\n  background-color: #fef2f2;\n}\n.users-page.rtl .detail-value {\n  text-align: start;\n}\n.users-page.rtl .top-bar {\n  flex-direction: row-reverse;\n}\n.users-page.rtl .card-actions {\n  flex-direction: row-reverse;\n}\n.users-page.rtl .page-title {\n  text-align: right !important;\n}\n@media (max-width: 768px) {\n  .users-page {\n    padding: 0.5rem !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: center !important;\n    width: 100% !important;\n    max-width: 100vw !important;\n    overflow-x: hidden !important;\n  }\n  .top-bar {\n    flex-direction: column !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1.5rem !important;\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n    padding: 0 !important;\n  }\n  .top-bar-left,\n  .top-bar-right {\n    width: 100% !important;\n    display: flex !important;\n    justify-content: center !important;\n    align-items: center !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .view-toggle {\n    justify-content: center !important;\n    width: 100% !important;\n    max-width: 300px !important;\n  }\n  .add-user-btn {\n    width: 100% !important;\n    max-width: 280px !important;\n    justify-content: center !important;\n    margin: 0 !important;\n  }\n  .search-section {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n    padding: 1rem !important;\n  }\n  .search-section .row {\n    margin: 0 !important;\n    display: flex !important;\n    flex-direction: column !important;\n    align-items: center !important;\n    width: 100% !important;\n  }\n  .search-section .col-md-5,\n  .search-section .col-md-2,\n  .search-section .col-md-3 {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 0 1rem 0 !important;\n    padding: 0 !important;\n    flex: none !important;\n  }\n  .search-section .col-md-2:last-of-type {\n    margin-bottom: 0 !important;\n  }\n  .search-input-wrapper {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .search-input {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .page-title {\n    text-align: center !important;\n    width: 100% !important;\n    margin: 0 auto 2rem auto !important;\n  }\n  .users-grid {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    max-width: 320px !important;\n    margin: 0 auto 2rem auto !important;\n    justify-items: center !important;\n    padding: 0 !important;\n  }\n  .user-card {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n    box-sizing: border-box !important;\n  }\n  .card-actions {\n    flex-direction: column !important;\n    gap: 0.75rem !important;\n    width: 100% !important;\n  }\n  .delete-btn,\n  .edit-btn {\n    width: 100% !important;\n    margin: 0 !important;\n  }\n  .table {\n    font-size: 0.75rem !important;\n  }\n  .table th,\n  .table td {\n    padding: 0.75rem 0.5rem !important;\n  }\n  .pagination-section {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n  }\n  .empty-state {\n    width: 100% !important;\n    max-width: 320px !important;\n    margin: 0 auto !important;\n    text-align: center !important;\n  }\n  .loading-state {\n    width: 100% !important;\n    text-align: center !important;\n    margin: 0 auto !important;\n  }\n  .users-table {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: 0 auto !important;\n  }\n  .mb-4 {\n    margin-bottom: 2rem !important;\n  }\n  .w-100 {\n    width: 100% !important;\n  }\n  .form-control {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .btn {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .btn:last-child {\n    margin-bottom: 0 !important;\n  }\n  .users-page > * {\n    width: 100% !important;\n    max-width: 100% !important;\n    box-sizing: border-box !important;\n  }\n  .users-page {\n    text-align: center !important;\n  }\n  .users-page > * {\n    text-align: left !important;\n  }\n  .page-title,\n  .empty-state,\n  .loading-state {\n    text-align: center !important;\n  }\n  .users-grid {\n    display: grid !important;\n    place-items: center !important;\n  }\n  .users-page,\n  .top-bar,\n  .search-section,\n  .users-grid,\n  .pagination-section {\n    overflow-x: hidden !important;\n  }\n}\n@media (max-width: 1024px) {\n  .users-table {\n    overflow-x: scroll;\n    border-radius: 0.5rem;\n  }\n  .table {\n    min-width: 900px;\n  }\n}\n@media (max-width: 768px) {\n  .users-table {\n    margin: 0 -1rem;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n    overflow-x: scroll;\n  }\n  .table {\n    min-width: 900px;\n  }\n  .table th,\n  .table td {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.8rem;\n  }\n  .user-avatar-small {\n    width: 28px;\n    height: 28px;\n  }\n  .table-actions {\n    gap: 0.25rem;\n  }\n  .edit-btn-small,\n  .delete-btn-small {\n    padding: 0.375rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n}\n.success-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.success-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: successModalSlideIn 0.3s ease-out;\n}\n@keyframes successModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon {\n  color: #158638;\n  margin-bottom: 1rem;\n}\n.success-title {\n  color: #158638;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.success-message {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.success-close-btn {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.success-close-btn:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n[dir=rtl] .success-modal {\n  text-align: center;\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #007bff;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active .page-link {\n  background: #007bff;\n  border-color: #007bff;\n  color: white;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .pagination-section {\n    padding: 0.5rem;\n  }\n  .users-page {\n    padding: 0.2rem;\n  }\n  .page-title {\n    font-size: 1.8rem;\n    margin-bottom: 1rem;\n    text-align: center !important;\n    justify-content: center;\n    align-self: center;\n  }\n  .users-page.rtl {\n    direction: rtl;\n  }\n  .user-card {\n    width: 100% !important;\n    max-width: 96% !important;\n    margin: 0 auto !important;\n    box-sizing: border-box !important;\n  }\n}\n@media (max-width: 768px) {\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1.5rem;\n    align-items: center;\n    text-align: center;\n  }\n  .page-size-control {\n    justify-content: center;\n    width: 100%;\n    max-width: 200px;\n  }\n  .pagination {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .pagination-info {\n    order: -1;\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=users-list.css.map */\n"] }]
  }], () => [{ type: UsersService }, { type: ProfileService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersList, { className: "UsersList", filePath: "src/app/components/users/users-list/users-list.ts", lineNumber: 16 });
})();

// src/app/components/users/add-user/add-user.component.ts
function AddUserComponent_img_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 61);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function AddUserComponent__svg_svg_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 62);
    \u0275\u0275element(1, "path", 63)(2, "circle", 64);
    \u0275\u0275elementEnd();
  }
}
function AddUserComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function AddUserComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeAvatar());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 21);
    \u0275\u0275element(2, "line", 6)(3, "line", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("users.remove"), " ");
  }
}
function AddUserComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("firstName"), " ");
  }
}
function AddUserComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("lastName"), " ");
  }
}
function AddUserComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("phoneNumber"), " ");
  }
}
function AddUserComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("email"), " ");
  }
}
function AddUserComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("role"), " ");
  }
}
function AddUserComponent_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLang() === "ar" ? dept_r3.nameAr : dept_r3.nameEn, " ");
  }
}
function AddUserComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("departmentId"), " ");
  }
}
function AddUserComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("password"), " ");
  }
}
function AddUserComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("timeZone"), " ");
  }
}
function AddUserComponent__svg_svg_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 68);
    \u0275\u0275element(1, "path", 69);
    \u0275\u0275elementEnd();
  }
}
function AddUserComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function AddUserComponent_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275elementStart(1, "div", 71);
    \u0275\u0275listener("click", function AddUserComponent_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 73);
    \u0275\u0275element(4, "path", 74)(5, "polyline", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 78);
    \u0275\u0275listener("click", function AddUserComponent_div_102_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.success"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.close"), " ");
  }
}
var AddUserComponent = class _AddUserComponent {
  fb;
  usersService;
  departmentService;
  translationService;
  langService;
  router;
  userForm;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  selectedFile = null;
  previewUrl = null;
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Data
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  constructor(fb, usersService, departmentService, translationService, langService, router) {
    this.fb = fb;
    this.usersService = usersService;
    this.departmentService = departmentService;
    this.translationService = translationService;
    this.langService = langService;
    this.router = router;
    this.userForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.minLength(5)]],
      // More permissive phone validation
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: ["", [Validators.required]],
      departmentId: ["", [Validators.required]],
      timeZone: ["Asia/Dubai"]
    });
  }
  ngOnInit() {
    this.loadDepartments();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  loadDepartments() {
    this.departmentService.getDepartmentNames().subscribe({
      next: (departments) => {
        this.departments.set(departments);
      },
      error: (error) => {
        console.error("Error loading departments:", error);
      }
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
        alert("Please select a valid image file (JPG, PNG)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  removeAvatar() {
    this.selectedFile = null;
    this.previewUrl = null;
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.loading.set(true);
      const userData = __spreadProps(__spreadValues({}, this.userForm.value), {
        departmentId: Number(this.userForm.value.departmentId)
        // Ensure it's a number
      });
      this.usersService.createUser(userData).subscribe({
        next: (user) => {
          this.successMessage.set(this.translate("users.add_user_success"));
          this.showSuccessModal.set(true);
          setTimeout(() => {
            this.showSuccessModal.set(false);
          }, 3e3);
          this.userForm.reset();
          this.previewUrl = null;
          this.selectedFile = null;
          this.loading.set(false);
          console.log(this.translate("users.created_success"));
          this.router.navigate(["/users"]);
        },
        error: (error) => {
          console.error("Error creating user:", error);
          this.loading.set(false);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.userForm.controls).forEach((key) => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
    });
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  cancel() {
    this.router.navigate(["/users"]);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.userForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("login.field_required");
      }
      if (field.errors["email"]) {
        return this.translate("login.email_invalid");
      }
      if (field.errors["minlength"]) {
        return `Minimum length is ${field.errors["minlength"].requiredLength} characters`;
      }
      if (field.errors["pattern"]) {
        return "Please enter a valid phone number";
      }
    }
    return "";
  }
  isFieldInvalid(fieldName) {
    const field = this.userForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
  static \u0275fac = function AddUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUserComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUserComponent, selectors: [["app-add-user"]], standalone: false, decls: 103, vars: 53, consts: [[1, "add-user-page", "rounded-5"], [1, "add-user-container"], [1, "page-header"], [1, "page-title"], [1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "user-form", 3, "ngSubmit", "formGroup"], [1, "avatar-section"], [1, "avatar-upload"], [1, "avatar-preview"], ["alt", "Avatar preview", 3, "src", 4, "ngIf"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 4, "ngIf"], [1, "upload-instructions"], [1, "upload-text"], [1, "upload-hint"], [1, "upload-requirements"], [1, "upload-actions"], ["type", "file", "id", "avatar-input", "accept", "image/jpeg,image/jpg,image/png", 1, "file-input", 3, "change"], ["for", "avatar-input", 1, "upload-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["type", "button", "class", "remove-btn", 3, "click", 4, "ngIf"], [1, "form-fields"], [1, "form-group"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Enter first name", 1, "form-input"], ["class", "error-message", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Enter last name", 1, "form-input"], [1, "form-row"], ["for", "phoneNumber", 1, "form-label"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", "placeholder", "Enter phone number", 1, "form-input"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email address", 1, "form-input"], ["for", "role", 1, "form-label"], ["id", "role", "formControlName", "role", 1, "form-select"], ["value", ""], ["value", "admin"], ["value", "manager"], ["value", "employee"], ["value", "secretary"], ["for", "departmentId", 1, "form-label"], ["id", "departmentId", "formControlName", "departmentId", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter password", 1, "form-input"], ["for", "timeZone", 1, "form-label"], ["id", "timeZone", "formControlName", "timeZone", 1, "form-select"], ["value", "Asia/Dubai"], ["value", "UTC"], ["value", "America/New_York"], ["value", "Europe/London"], [1, "form-actions"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "spinner", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["type", "button", 1, "cancel-btn", 3, "click"], ["class", "success-modal-overlay", 3, "click", 4, "ngIf"], ["alt", "Avatar preview", 3, "src"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], ["type", "button", 1, "remove-btn", 3, "click"], [1, "error-message"], [3, "value"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "spinner"], ["d", "M21 12a9 9 0 11-6.219-8.56"], [1, "success-modal-overlay", 3, "click"], [1, "success-modal", 3, "click"], [1, "success-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "success-title"], [1, "success-message"], [1, "success-close-btn", 3, "click"]], template: function AddUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function AddUserComponent_Template_button_click_5_listener() {
        return ctx.cancel();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "line", 6)(8, "line", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "form", 8);
      \u0275\u0275listener("ngSubmit", function AddUserComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275template(13, AddUserComponent_img_13_Template, 1, 1, "img", 12)(14, AddUserComponent__svg_svg_14_Template, 3, 0, "svg", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 14)(16, "p", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 16);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 17);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 18)(23, "input", 19);
      \u0275\u0275listener("change", function AddUserComponent_Template_input_change_23_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "label", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 21);
      \u0275\u0275element(26, "path", 22)(27, "polyline", 23)(28, "line", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, AddUserComponent_button_30_Template, 5, 1, "button", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 26)(32, "div", 27)(33, "label", 28);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 29);
      \u0275\u0275template(36, AddUserComponent_div_36_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 27)(38, "label", 31);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 32);
      \u0275\u0275template(41, AddUserComponent_div_41_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 33)(43, "div", 27)(44, "label", 34);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 35);
      \u0275\u0275template(47, AddUserComponent_div_47_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 27)(49, "label", 36);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 37);
      \u0275\u0275template(52, AddUserComponent_div_52_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 33)(54, "div", 27)(55, "label", 38);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "select", 39)(58, "option", 40);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "option", 41);
      \u0275\u0275text(61, "Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 42);
      \u0275\u0275text(63, "Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 43);
      \u0275\u0275text(65, "Employee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 44);
      \u0275\u0275text(67, "Secretary");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, AddUserComponent_div_68_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 27)(70, "label", 45);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "select", 46)(73, "option", 40);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, AddUserComponent_option_75_Template, 2, 2, "option", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, AddUserComponent_div_76_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 33)(78, "div", 27)(79, "label", 48);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 49);
      \u0275\u0275template(82, AddUserComponent_div_82_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 27)(84, "label", 50);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "select", 51)(87, "option", 52);
      \u0275\u0275text(88, "Asia/Dubai");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "option", 53);
      \u0275\u0275text(90, "UTC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 54);
      \u0275\u0275text(92, "America/New_York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option", 55);
      \u0275\u0275text(94, "Europe/London");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(95, AddUserComponent_div_95_Template, 2, 1, "div", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 56)(97, "button", 57);
      \u0275\u0275template(98, AddUserComponent__svg_svg_98_Template, 2, 0, "svg", 58);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "button", 59);
      \u0275\u0275listener("click", function AddUserComponent_Template_button_click_100_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(101);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(102, AddUserComponent_div_102_Template, 12, 3, "div", 60);
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.add_user"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("has-image", ctx.previewUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.previewUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.avatar_upload"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("users.avatar_drag_drop"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("users.avatar_requirements"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("users.browse_files"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewUrl);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.first_name"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.last_name"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.phone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.email"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.role"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("users.select_role"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.department"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("users.select_department"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("users.password"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("password"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("users.time_zone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading() || ctx.userForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading() ? ctx.translate("login.loading") : ctx.translate("users.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("users.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.add-user-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.add-user-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.add-user-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n  flex-direction: row;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.page-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n.page-header[_ngcontent-%COMP%]   [dir=ltr][_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--brand-blue, #09365F);\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.user-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.avatar-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 2rem;\n  background-color: #f9fafb;\n  border-radius: 12px;\n  border: 2px dashed #d1d5db;\n  text-align: center;\n}\n.avatar-upload[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.avatar-preview[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 3px solid #f3f4f6;\n}\n.avatar-preview.has-image[_ngcontent-%COMP%] {\n  border-color: var(--brand-green, #158638);\n}\n.avatar-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-preview[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  width: 64px;\n  height: 64px;\n}\n.upload-instructions[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.upload-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.upload-hint[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.25rem 0;\n}\n.upload-requirements[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.upload-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-btn[_ngcontent-%COMP%], \n.remove-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-green, #158638);\n  color: white;\n}\n.upload-btn[_ngcontent-%COMP%]:hover {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.remove-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.form-fields[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-family: inherit;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365F);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.form-input.invalid[_ngcontent-%COMP%], \n.form-select.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-input.invalid[_ngcontent-%COMP%]:focus, \n.form-select.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 48px;\n  height: 24px;\n  background-color: #d1d5db;\n  border-radius: 12px;\n  transition: background-color 0.2s ease;\n}\n.toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  background-color: var(--brand-green, #158638);\n}\n.toggle-input[_ngcontent-%COMP%]:checked    + .toggle-label[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(24px);\n}\n.toggle-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.submit-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-green, #158638);\n  color: white;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.add-user-page.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.add-user-page.rtl[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .add-user-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .add-user-container[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .user-form[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .submit-btn[_ngcontent-%COMP%], \n   .cancel-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .upload-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .upload-btn[_ngcontent-%COMP%], \n   .remove-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.success-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 1rem;\n}\n.success-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #158638;\n}\n.success-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  font-size: 1rem;\n}\n.success-close-btn[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.success-close-btn[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.add-user-page.rtl[_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n/*# sourceMappingURL=add-user.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUserComponent, [{
    type: Component,
    args: [{ selector: "app-add-user", standalone: false, template: `<div class="add-user-page rounded-5" [class.rtl]="isRTL()">\r
  <div class="add-user-container">\r
    <!-- Header -->\r
    <div class="page-header">\r
      <h1 class="page-title">{{ translate('users.add_user') }}</h1>\r
      <button class="close-btn" (click)="cancel()">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
\r
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="user-form">\r
      <!-- Avatar Upload Section -->\r
      <div class="avatar-section">\r
        <div class="avatar-upload">\r
          <div class="avatar-preview" [class.has-image]="previewUrl">\r
            <img *ngIf="previewUrl" [src]="previewUrl" alt="Avatar preview">\r
            <svg *ngIf="!previewUrl" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
              <circle cx="12" cy="7" r="4"></circle>\r
            </svg>\r
          </div>\r
          \r
                     <div class="upload-instructions">\r
             <p class="upload-text">{{ translate('users.avatar_upload') }}</p>\r
             <p class="upload-hint">{{ translate('users.avatar_drag_drop') }}</p>\r
             <p class="upload-requirements">{{ translate('users.avatar_requirements') }}</p>\r
           </div>\r
\r
          <div class="upload-actions">\r
            <input \r
              type="file" \r
              id="avatar-input" \r
              accept="image/jpeg,image/jpg,image/png" \r
              (change)="onFileSelected($event)"\r
              class="file-input">\r
                         <label for="avatar-input" class="upload-btn">\r
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                 <polyline points="7,10 12,15 17,10"></polyline>\r
                 <line x1="12" y1="15" x2="12" y2="3"></line>\r
               </svg>\r
               {{ translate('users.browse_files') }}\r
             </label>\r
            \r
                         <button \r
               *ngIf="previewUrl" \r
               type="button" \r
               class="remove-btn"\r
               (click)="removeAvatar()">\r
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                 <line x1="18" y1="6" x2="6" y2="18"></line>\r
                 <line x1="6" y1="6" x2="18" y2="18"></line>\r
               </svg>\r
               {{ translate('users.remove') }}\r
             </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Form Fields -->\r
      <div class="form-fields">\r
                 <!-- First Name -->\r
         <div class="form-group">\r
           <label for="firstName" class="form-label">{{ translate('users.first_name') }}</label>\r
          <input \r
            type="text" \r
            id="firstName" \r
            formControlName="firstName"\r
            class="form-input"\r
            [class.invalid]="isFieldInvalid('firstName')"\r
            placeholder="Enter first name">\r
          <div class="error-message" *ngIf="isFieldInvalid('firstName')">\r
            {{ getFieldError('firstName') }}\r
          </div>\r
        </div>\r
\r
                 <!-- Last Name -->\r
         <div class="form-group">\r
           <label for="lastName" class="form-label">{{ translate('users.last_name') }}</label>\r
          <input \r
            type="text" \r
            id="lastName" \r
            formControlName="lastName"\r
            class="form-input"\r
            [class.invalid]="isFieldInvalid('lastName')"\r
            placeholder="Enter last name">\r
          <div class="error-message" *ngIf="isFieldInvalid('lastName')">\r
            {{ getFieldError('lastName') }}\r
          </div>\r
        </div>\r
\r
        <!-- Contact Information Row -->\r
        <div class="form-row">\r
                  <div class="form-group">\r
          <label for="phoneNumber" class="form-label">{{ translate('users.phone') }}</label>\r
          <input \r
            type="tel" \r
            id="phoneNumber" \r
            formControlName="phoneNumber"\r
            class="form-input"\r
            [class.invalid]="isFieldInvalid('phoneNumber')"\r
            placeholder="Enter phone number">\r
          <div class="error-message" *ngIf="isFieldInvalid('phoneNumber')">\r
            {{ getFieldError('phoneNumber') }}\r
          </div>\r
        </div>\r
\r
          <div class="form-group">\r
            <label for="email" class="form-label">{{ translate('users.email') }}</label>\r
            <input \r
              type="email" \r
              id="email" \r
              formControlName="email"\r
              class="form-input"\r
              [class.invalid]="isFieldInvalid('email')"\r
              placeholder="Enter email address">\r
            <div class="error-message" *ngIf="isFieldInvalid('email')">\r
              {{ getFieldError('email') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Role and Department Row -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="role" class="form-label">{{ translate('users.role') }}</label>\r
            <select \r
              id="role" \r
              formControlName="role"\r
              class="form-select"\r
              [class.invalid]="isFieldInvalid('role')">\r
              <option value="">{{ translate('users.select_role') }}</option>\r
              <option value="admin">Admin</option>\r
              <option value="manager">Manager</option>\r
              <option value="employee">Employee</option>\r
              <option value="secretary">Secretary</option>\r
            </select>\r
            <div class="error-message" *ngIf="isFieldInvalid('role')">\r
              {{ getFieldError('role') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="departmentId" class="form-label">{{ translate('users.department') }}</label>\r
            <select \r
              id="departmentId" \r
              formControlName="departmentId"\r
              class="form-select"\r
              [class.invalid]="isFieldInvalid('departmentId')">\r
              <option value="">{{ translate('users.select_department') }}</option>\r
              <option *ngFor="let dept of departments()" [value]="dept.id">\r
                {{ currentLang() === 'ar' ? dept.nameAr : dept.nameEn }}\r
              </option>\r
            </select>\r
            <div class="error-message" *ngIf="isFieldInvalid('departmentId')">\r
              {{ getFieldError('departmentId') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Password and Timezone Row -->\r
        <div class="form-row">\r
                     <div class="form-group">\r
             <label for="password" class="form-label">{{ translate('users.password') }}</label>\r
            <input \r
              type="password" \r
              id="password" \r
              formControlName="password"\r
              class="form-input"\r
              [class.invalid]="isFieldInvalid('password')"\r
              placeholder="Enter password">\r
            <div class="error-message" *ngIf="isFieldInvalid('password')">\r
              {{ getFieldError('password') }}\r
            </div>\r
          </div>\r
\r
            <div class="form-group">\r
             <label for="timeZone" class="form-label">{{ translate('users.time_zone') }}</label>\r
            <select \r
              id="timeZone" \r
              formControlName="timeZone"\r
              class="form-select"\r
              [class.invalid]="isFieldInvalid('timeZone')">\r
              <option value="Asia/Dubai">Asia/Dubai</option>\r
              <option value="UTC">UTC</option>\r
              <option value="America/New_York">America/New_York</option>\r
              <option value="Europe/London">Europe/London</option>\r
            </select>\r
            <div class="error-message" *ngIf="isFieldInvalid('timeZone')">\r
              {{ getFieldError('timeZone') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
\r
      </div>\r
\r
      <!-- Form Actions -->\r
      <div class="form-actions">\r
        <button \r
          type="submit" \r
          class="submit-btn"\r
          [disabled]="loading() || userForm.invalid">\r
          <svg *ngIf="loading()" class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>\r
          </svg>\r
          {{ loading() ? translate('login.loading') : translate('users.save') }}\r
        </button>\r
        \r
        <button \r
          type="button" \r
          class="cancel-btn"\r
          (click)="cancel()">\r
          {{ translate('users.cancel') }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
\r
<!-- Success Modal -->\r
<div class="success-modal-overlay" *ngIf="showSuccessModal()" (click)="closeSuccessModal()">\r
  <div class="success-modal" (click)="$event.stopPropagation()">\r
    <div class="success-icon">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
        <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
      </svg>\r
    </div>\r
    <h3 class="success-title">{{ translate('common.success') }}</h3>\r
    <p class="success-message">{{ successMessage() }}</p>\r
    <button class="success-close-btn" (click)="closeSuccessModal()">\r
      {{ translate('common.close') }}\r
    </button>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/users/add-user/add-user.component.css */\n.add-user-page {\n  padding: 2rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  background-color: #f9fafb;\n  min-height: 100vh;\n}\n.add-user-page.rtl {\n  direction: rtl;\n}\n.add-user-container {\n  max-width: 800px;\n  margin: 0 auto;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n  flex-direction: row;\n  border-bottom: 1px solid #e5e7eb;\n  background-color: #f9fafb;\n}\n.page-header [dir=rtl] {\n  flex-direction: row-reverse !important;\n}\n.page-header [dir=ltr] {\n  flex-direction: row !important;\n}\n.page-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--brand-blue, #09365F);\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.375rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.user-form {\n  padding: 2rem;\n}\n.avatar-section {\n  margin-bottom: 2rem;\n  padding: 2rem;\n  background-color: #f9fafb;\n  border-radius: 12px;\n  border: 2px dashed #d1d5db;\n  text-align: center;\n}\n.avatar-upload {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.avatar-preview {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border: 3px solid #f3f4f6;\n}\n.avatar-preview.has-image {\n  border-color: var(--brand-green, #158638);\n}\n.avatar-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-preview svg {\n  color: #9ca3af;\n  width: 64px;\n  height: 64px;\n}\n.upload-instructions {\n  text-align: center;\n}\n.upload-text {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.upload-hint {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin: 0 0 0.25rem 0;\n}\n.upload-requirements {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin: 0;\n}\n.upload-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.file-input {\n  display: none;\n}\n.upload-btn,\n.remove-btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n}\n.upload-btn {\n  background-color: var(--brand-green, #158638);\n  color: white;\n}\n.upload-btn:hover {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.remove-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.remove-btn:hover {\n  background-color: #fee2e2;\n  border-color: #fca5a5;\n}\n.form-fields {\n  margin-bottom: 2rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.form-input,\n.form-select,\n.form-textarea {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-family: inherit;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365F);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.form-input.invalid,\n.form-select.invalid {\n  border-color: #dc2626;\n}\n.form-input.invalid:focus,\n.form-select.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.status-toggle {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.toggle-input {\n  display: none;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n}\n.toggle-slider {\n  position: relative;\n  width: 48px;\n  height: 24px;\n  background-color: #d1d5db;\n  border-radius: 12px;\n  transition: background-color 0.2s ease;\n}\n.toggle-slider::before {\n  content: "";\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n}\n.toggle-input:checked + .toggle-label .toggle-slider {\n  background-color: var(--brand-green, #158638);\n}\n.toggle-input:checked + .toggle-label .toggle-slider::before {\n  transform: translateX(24px);\n}\n.toggle-text {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  padding-top: 2rem;\n  border-top: 1px solid #e5e7eb;\n}\n.submit-btn,\n.cancel-btn {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.875rem;\n  min-width: 120px;\n  justify-content: center;\n}\n.submit-btn {\n  background-color: var(--brand-green, #158638);\n  color: white;\n}\n.submit-btn:hover:not(:disabled) {\n  background-color: #0f6b2a;\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.submit-btn:disabled {\n  background-color: #9ca3af;\n  cursor: not-allowed;\n}\n.cancel-btn {\n  background-color: white;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.cancel-btn:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.add-user-page.rtl .form-actions {\n  justify-content: flex-start;\n}\n.add-user-page.rtl .page-header {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .add-user-page {\n    padding: 1rem;\n  }\n  .add-user-container {\n    border-radius: 12px;\n  }\n  .page-header {\n    padding: 1.5rem;\n  }\n  .user-form {\n    padding: 1.5rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .form-actions {\n    flex-direction: column;\n  }\n  .submit-btn,\n  .cancel-btn {\n    width: 100%;\n  }\n  .upload-actions {\n    flex-direction: column;\n    width: 100%;\n  }\n  .upload-btn,\n  .remove-btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.success-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 1rem;\n}\n.success-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon {\n  margin-bottom: 1rem;\n  color: #158638;\n}\n.success-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem 0;\n}\n.success-message {\n  color: #6b7280;\n  margin: 0 0 1.5rem 0;\n  font-size: 1rem;\n}\n.success-close-btn {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 0.875rem;\n  min-width: 100px;\n}\n.success-close-btn:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.add-user-page.rtl .success-modal {\n  direction: rtl;\n}\n/*# sourceMappingURL=add-user.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: UsersService }, { type: DepartmentService }, { type: TranslationService }, { type: LangService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUserComponent, { className: "AddUserComponent", filePath: "src/app/components/users/add-user/add-user.component.ts", lineNumber: 17 });
})();

// src/app/components/users/users-routing-module.ts
var routes = [
  {
    path: "",
    component: UsersList
  },
  {
    path: "add",
    component: AddUserComponent
  },
  {
    path: ":userId/edit",
    component: AddUserComponent
  }
];
var UsersRoutingModule = class _UsersRoutingModule {
  static \u0275fac = function UsersRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/users/users-module.ts
var UsersModule = class _UsersModule {
  static \u0275fac = function UsersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _UsersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DepartmentService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule,
    ConfirmationModalComponent,
    EditUserDrawerComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersModule, [{
    type: NgModule,
    args: [{
      declarations: [
        UsersList,
        AddUserComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsersRoutingModule,
        ConfirmationModalComponent,
        EditUserDrawerComponent
      ],
      providers: [DepartmentService]
    }]
  }], null, null);
})();
export {
  UsersModule
};
//# sourceMappingURL=chunk-WNSMQSUU.js.map
