import {
  EmployeesService
} from "./chunk-JBVXHVAK.js";
import {
  NgApexchartsModule,
  NgxEchartsModule
} from "./chunk-NF3ILV34.js";
import "./chunk-5HB5JJNO.js";
import {
  DepartmentService
} from "./chunk-OTKOL4UZ.js";
import {
  RolesService
} from "./chunk-VPCHKQBX.js";
import "./chunk-WFDNWXZA.js";
import "./chunk-3NDCE7HG.js";
import {
  ProfileService
} from "./chunk-P35E4WF6.js";
import {
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
} from "./chunk-2OJPVZW4.js";
import "./chunk-6Z2ZBWA2.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterLink,
  RouterModule,
  TranslationService,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate6
} from "./chunk-L7ZNDW2L.js";
import "./chunk-XWLXMCJQ.js";

// src/app/components/employees/employees-list/employees.ts
function Employees_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "div", 54);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function Employees_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 56);
    \u0275\u0275element(2, "path", 57)(3, "circle", 58)(4, "path", 59)(5, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 61);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.no_employees_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.get_started_message"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("employees.add_employee"), " ");
  }
}
function Employees_div_38_div_1_img_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 94);
  }
  if (rf & 2) {
    const employee_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", employee_r4.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getFullName(employee_r4));
  }
}
function Employees_div_38_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(employee_r4), " ");
  }
}
function Employees_div_38_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 82);
    \u0275\u0275element(6, "rect", 12)(7, "rect", 13)(8, "rect", 14)(9, "rect", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.departmentName);
  }
}
function Employees_div_38_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 82);
    \u0275\u0275element(6, "path", 96)(7, "circle", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.time_zone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.timeZone);
  }
}
function Employees_div_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "h3", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275template(8, Employees_div_38_div_1_img_8_Template, 1, 2, "img", 70)(9, Employees_div_38_div_1_div_9_Template, 2, 1, "div", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 72);
    \u0275\u0275elementStart(11, "div", 73)(12, "div", 74);
    \u0275\u0275listener("click", function Employees_div_38_div_1_Template_div_click_12_listener() {
      const employee_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(employee_r4.email));
    });
    \u0275\u0275elementStart(13, "span", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 76);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 46);
    \u0275\u0275element(19, "rect", 78)(20, "path", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 74);
    \u0275\u0275listener("click", function Employees_div_38_div_1_Template_div_click_21_listener() {
      const employee_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(employee_r4.phoneNumber));
    });
    \u0275\u0275elementStart(22, "span", 75);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 76);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 46);
    \u0275\u0275element(28, "rect", 78)(29, "path", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, Employees_div_38_div_1_div_30_Template, 10, 2, "div", 80)(31, Employees_div_38_div_1_div_31_Template, 8, 2, "div", 80);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 81)(33, "span", 75);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 76);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 82);
    \u0275\u0275element(39, "rect", 83)(40, "line", 84)(41, "line", 85)(42, "line", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div", 87)(44, "button", 88);
    \u0275\u0275listener("click", function Employees_div_38_div_1_Template_button_click_44_listener() {
      const employee_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(employee_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 46);
    \u0275\u0275element(46, "polyline", 89)(47, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "button", 91);
    \u0275\u0275listener("click", function Employees_div_38_div_1_Template_button_click_49_listener() {
      const employee_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToEdit(employee_r4.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 46);
    \u0275\u0275element(51, "path", 92)(52, "path", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(employee_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", employee_r4.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !employee_r4.imageUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r4.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", employee_r4.departmentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", employee_r4.timeZone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.hire_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 14, employee_r4.hireDate, ctx_r1.isRTL() ? "dd/MM/yyyy" : "yyyy-MM-dd"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("employees.delete"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("employees.edit"), " ");
  }
}
function Employees_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, Employees_div_38_div_1_Template, 54, 17, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.employees);
  }
}
function Employees_div_39_tr_25_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 94);
  }
  if (rf & 2) {
    const employee_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", employee_r6.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.getFullName(employee_r6));
  }
}
function Employees_div_39_tr_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(employee_r6), " ");
  }
}
function Employees_div_39_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 101);
    \u0275\u0275template(3, Employees_div_39_tr_25_img_3_Template, 1, 2, "img", 70)(4, Employees_div_39_tr_25_div_4_Template, 2, 1, "div", 102);
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
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 103);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "div", 104)(25, "button", 105);
    \u0275\u0275listener("click", function Employees_div_39_tr_25_Template_button_click_25_listener() {
      const employee_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToEdit(employee_r6.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 46);
    \u0275\u0275element(27, "path", 92)(28, "path", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "button", 106);
    \u0275\u0275listener("click", function Employees_div_39_tr_25_Template_button_click_29_listener() {
      const employee_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(employee_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 46);
    \u0275\u0275element(31, "polyline", 89)(32, "path", 90);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const employee_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", employee_r6.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !employee_r6.imageUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getFullName(employee_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r6.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r6.departmentName || ctx_r1.translate("employees.no_department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r6.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 12, employee_r6.hireDate, ctx_r1.isRTL() ? "dd/MM/yyyy" : "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(employee_r6.roles ? employee_r6.roles.join(", ") : ctx_r1.translate("employees.no_roles"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(employee_r6.isActive));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("employees." + (employee_r6.isActive ? "active" : "inactive")), " ");
  }
}
function Employees_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "table", 99)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, Employees_div_39_tr_25_Template, 33, 15, "tr", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.avatar"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.job_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.hire_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.roles"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.employees);
  }
}
function Employees_li_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 44)(1, "button", 108);
    \u0275\u0275listener("click", function Employees_li_64_Template_button_click_1_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePage(page_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r9 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9);
  }
}
function Employees_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function Employees_div_69_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 110);
    \u0275\u0275listener("click", function Employees_div_69_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 112);
    \u0275\u0275element(4, "path", 113)(5, "path", 114)(6, "path", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 116);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 117);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 118)(12, "button", 119);
    \u0275\u0275listener("click", function Employees_div_69_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDeleteModal());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 120);
    \u0275\u0275listener("click", function Employees_div_69_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("employees.confirm_delete"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDeleteMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("employees.delete"), " ");
  }
}
function Employees_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275listener("click", function Employees_div_70_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275elementStart(1, "div", 122);
    \u0275\u0275listener("click", function Employees_div_70_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 123);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 112);
    \u0275\u0275element(4, "path", 124)(5, "polyline", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 126);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 127);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 128);
    \u0275\u0275listener("click", function Employees_div_70_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r11);
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
function Employees_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275listener("click", function Employees_div_71_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeErrorModal());
    });
    \u0275\u0275elementStart(1, "div", 130);
    \u0275\u0275listener("click", function Employees_div_71_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 131);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 112);
    \u0275\u0275element(4, "circle", 132)(5, "line", 133)(6, "line", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3", 135);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 136);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 137);
    \u0275\u0275listener("click", function Employees_div_71_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeErrorModal());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.ok"), " ");
  }
}
var Employees = class _Employees {
  employeesService = inject(EmployeesService);
  translationService = inject(TranslationService);
  router = inject(Router);
  langService = inject(LangService);
  // Data
  employees = [];
  allEmployees = [];
  // Store all employees for filtering
  kpiTrendData = [];
  filteredKpiTrendData = [];
  totalCount = 0;
  currentPage = 1;
  pageSize = 8;
  searchTerm = "";
  // UI State
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  viewMode = signal("cards", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  showDeleteModalFlag = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModalFlag" }] : []);
  showSuccessModalFlag = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModalFlag" }] : []);
  showErrorModalFlag = signal(false, ...ngDevMode ? [{ debugName: "showErrorModalFlag" }] : []);
  employeeToDeleteFlag = signal(null, ...ngDevMode ? [{ debugName: "employeeToDeleteFlag" }] : []);
  successMessageFlag = signal("", ...ngDevMode ? [{ debugName: "successMessageFlag" }] : []);
  errorMessageFlag = signal("", ...ngDevMode ? [{ debugName: "errorMessageFlag" }] : []);
  // Date Filter State
  startDate = signal("", ...ngDevMode ? [{ debugName: "startDate" }] : []);
  endDate = signal("", ...ngDevMode ? [{ debugName: "endDate" }] : []);
  employeeFilterDate = signal("", ...ngDevMode ? [{ debugName: "employeeFilterDate" }] : []);
  // Language
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // ECharts Options
  totalEmployeesChartOptions = {};
  echartsInitOpts = {
    renderer: "canvas",
    useDirtyRect: false
  };
  // ApexCharts Options for KPI Radial Chart
  kpiRadialChart = {
    series: [0],
    chart: {
      type: "radialBar",
      height: 320,
      width: "100%"
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#f1f1f1",
          strokeWidth: "97%",
          margin: 5
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: "28px",
            fontWeight: "bold",
            color: "#2BA149",
            formatter: function(val) {
              return val + "%";
            }
          }
        }
      }
    },
    colors: ["#2BA149"],
    labels: ["KPI Score"],
    stroke: {
      lineCap: "round"
    },
    fill: {
      type: "solid",
      colors: ["#2BA149"]
    }
  };
  // Math object for template
  Math = Math;
  ngOnInit() {
    this.initializeLanguage();
    this.loadEmployees();
    this.loadKpiTrendData();
  }
  initializeLanguage() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  loadEmployees() {
    this.loading.set(true);
    const params = {
      page: this.currentPage,
      pageSize: this.pageSize,
      search: this.searchTerm.trim() || void 0
    };
    this.employeesService.getEmployees(params).subscribe({
      next: (res) => {
        this.employees = res.data.items;
        this.allEmployees = [...res.data.items];
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize || 9;
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.loading.set(false);
      }
    });
  }
  loadKpiTrendData(date) {
    this.employeesService.getEmployeeKpiTrend(date).subscribe({
      next: (res) => {
        this.kpiTrendData = res.trendData;
        this.filteredKpiTrendData = [...this.kpiTrendData];
        this.initializeDateRange();
        setTimeout(() => {
          this.initializeCharts();
        }, 200);
      },
      error: (error) => {
        console.error("Error loading KPI trend data:", error);
      }
    });
  }
  initializeDateRange() {
    if (this.kpiTrendData.length > 0) {
      const dates = this.kpiTrendData.map((d) => new Date(d.date)).sort((a, b) => a.getTime() - b.getTime());
      this.startDate.set(dates[0].toISOString().split("T")[0]);
      this.endDate.set(dates[dates.length - 1].toISOString().split("T")[0]);
    }
  }
  maxDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  onStartDateChange(event) {
    const target = event.target;
    this.startDate.set(target.value);
  }
  onEndDateChange(event) {
    const target = event.target;
    this.endDate.set(target.value);
  }
  applyDateFilter() {
    if (!this.startDate() || !this.endDate()) {
      this.filteredKpiTrendData = [...this.kpiTrendData];
      return;
    }
    const start = new Date(this.startDate());
    const end = new Date(this.endDate());
    this.filteredKpiTrendData = this.kpiTrendData.filter((data) => {
      const dataDate = new Date(data.date);
      return dataDate >= start && dataDate <= end;
    });
  }
  resetDateFilter() {
    this.filteredKpiTrendData = [...this.kpiTrendData];
    this.initializeDateRange();
  }
  // Employee Date Filter Methods
  onEmployeeDateChange(event) {
    const target = event.target;
    this.employeeFilterDate.set(target.value);
  }
  applyEmployeeFilter() {
    if (!this.employeeFilterDate()) {
      this.employees = [...this.allEmployees];
      return;
    }
    const filterDate = new Date(this.employeeFilterDate());
    filterDate.setHours(0, 0, 0, 0);
    this.employees = this.allEmployees.filter((employee) => {
      const hireDate = new Date(employee.hireDate);
      hireDate.setHours(0, 0, 0, 0);
      return hireDate.getTime() === filterDate.getTime();
    });
    this.totalCount = this.employees.length;
    this.currentPage = 1;
  }
  resetEmployeeFilter() {
    this.employees = [...this.allEmployees];
    this.employeeFilterDate.set("");
    this.totalCount = this.allEmployees.length;
    this.currentPage = 1;
  }
  // Unified Filter Methods
  applyUnifiedFilter() {
    const selectedDate = this.employeeFilterDate();
    if (!selectedDate) {
      this.resetUnifiedFilter();
      return;
    }
    this.applyEmployeeFilter();
    this.loadKpiTrendData(selectedDate);
  }
  resetUnifiedFilter() {
    this.employees = [...this.allEmployees];
    this.employeeFilterDate.set("");
    this.totalCount = this.allEmployees.length;
    this.currentPage = 1;
    this.loadKpiTrendData();
  }
  changePage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadEmployees();
    }
  }
  onSearchChange(searchTerm) {
    this.searchTerm = searchTerm;
    this.currentPage = 1;
    this.loadEmployees();
  }
  isValidSearchTerm(searchTerm) {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return true;
    }
    const trimmed = searchTerm.trim();
    if (trimmed.startsWith(".") || trimmed.startsWith(" ")) {
      return false;
    }
    if (trimmed.length === 1 && /[^a-zA-Z0-9\u0600-\u06FF]/.test(trimmed)) {
      return false;
    }
    return true;
  }
  onSearchInput(event) {
    const input = event.target;
    let value = input.value;
    if (value.length > 0) {
      if (value.startsWith(".") || value.startsWith(" ")) {
        value = value.replace(/^[.\s]+/, "");
      }
      if (value.length === 1 && /[^a-zA-Z0-9\u0600-\u06FF]/.test(value)) {
        value = "";
      }
    }
    if (input.value !== value) {
      setTimeout(() => {
        input.value = value;
        this.searchTerm = value;
      }, 0);
    } else {
      this.searchTerm = value;
    }
  }
  onSearchClick() {
    const term = this.searchTerm.trim();
    if (term && !this.isValidSearchTerm(term)) {
      return;
    }
    this.currentPage = 1;
    this.loadEmployees();
  }
  clearSearch() {
    this.searchTerm = "";
    this.currentPage = 1;
    this.loadEmployees();
  }
  onPageSizeChange(newPageSize) {
    this.pageSize = newPageSize;
    this.currentPage = 1;
    this.loadEmployees();
  }
  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize);
  }
  get pages() {
    const pages = [];
    const maxVisiblePages = 5;
    if (this.totalPages === 0) {
      pages.push(1);
      return pages;
    }
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getFullName(employee) {
    return `${employee.firstName} ${employee.lastName}`;
  }
  getInitials(employee) {
    return `${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`.toUpperCase();
  }
  getStatusClass(isActive) {
    return isActive ? "status-active" : "status-inactive";
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
    });
  }
  goToEdit(id) {
    this.router.navigate(["/employees/edit", id]);
  }
  // KPI Trend Helper Methods
  getLatestKpiScore() {
    if (this.filteredKpiTrendData.length === 0)
      return 0;
    return Math.round(this.filteredKpiTrendData[this.filteredKpiTrendData.length - 1].averageKpiScore);
  }
  getLatestTotalEmployees() {
    if (this.filteredKpiTrendData.length === 0)
      return 0;
    return this.filteredKpiTrendData[this.filteredKpiTrendData.length - 1].totalEmployees;
  }
  getLatestHighPerformers() {
    if (this.filteredKpiTrendData.length === 0)
      return 0;
    return this.filteredKpiTrendData[this.filteredKpiTrendData.length - 1].highPerformers;
  }
  getLatestLowPerformers() {
    if (this.filteredKpiTrendData.length === 0)
      return 0;
    return this.filteredKpiTrendData[this.filteredKpiTrendData.length - 1].lowPerformers;
  }
  getHighPerformersPercentage() {
    if (this.kpiTrendData.length === 0)
      return 0;
    const latest = this.kpiTrendData[this.kpiTrendData.length - 1];
    const total = latest.totalEmployees;
    return total > 0 ? latest.highPerformers / total * 100 : 0;
  }
  getLowPerformersPercentage() {
    if (this.kpiTrendData.length === 0)
      return 0;
    const latest = this.kpiTrendData[this.kpiTrendData.length - 1];
    const total = latest.totalEmployees;
    return total > 0 ? latest.lowPerformers / total * 100 : 0;
  }
  getKpiScorePath() {
    if (this.filteredKpiTrendData.length < 2)
      return "";
    const width = 300;
    const height = 60;
    const step = width / (this.filteredKpiTrendData.length - 1);
    let path = `M 0 ${height - this.filteredKpiTrendData[0].averageKpiScore / 100 * height}`;
    for (let i = 1; i < this.filteredKpiTrendData.length; i++) {
      const x = i * step;
      const y = height - this.filteredKpiTrendData[i].averageKpiScore / 100 * height;
      path += ` L ${x} ${y}`;
    }
    return path;
  }
  getEmployeesPath() {
    if (this.filteredKpiTrendData.length < 2)
      return "";
    const width = 300;
    const height = 60;
    const maxEmployees = Math.max(...this.filteredKpiTrendData.map((d) => d.totalEmployees));
    const step = width / (this.filteredKpiTrendData.length - 1);
    let path = `M 0 ${height - this.filteredKpiTrendData[0].totalEmployees / maxEmployees * height}`;
    for (let i = 1; i < this.filteredKpiTrendData.length; i++) {
      const x = i * step;
      const y = height - this.filteredKpiTrendData[i].totalEmployees / maxEmployees * height;
      path += ` L ${x} ${y}`;
    }
    return path;
  }
  // ECharts Initialization Methods
  initializeTotalEmployeesChart() {
    const totalEmployees = this.getLatestTotalEmployees();
    if (totalEmployees === null || totalEmployees === void 0 || isNaN(totalEmployees)) {
      this.totalEmployeesChartOptions = {};
      return;
    }
    const chartColor = "#B68A35";
    this.totalEmployeesChartOptions = {
      grid: {
        top: "20%",
        left: "5%",
        right: "5%"
      },
      series: [
        {
          type: "gauge",
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: Math.max(totalEmployees, 100),
          splitNumber: 10,
          radius: "80%",
          axisLine: {
            lineStyle: {
              width: 6,
              color: [[1, chartColor]]
            }
          },
          progress: {
            show: true,
            width: 6,
            itemStyle: {
              color: chartColor
            }
          },
          pointer: {
            show: true,
            length: "80%",
            width: 3,
            itemStyle: {
              color: chartColor
            }
          },
          axisTick: {
            show: true,
            distance: -18,
            length: 8,
            lineStyle: {
              color: "#999",
              width: 1
            }
          },
          splitLine: {
            show: true,
            distance: -30,
            length: 15,
            lineStyle: {
              color: "#B68A35",
              width: 1
            }
          },
          axisLabel: {
            show: true,
            distance: -5,
            color: "#666",
            fontSize: 10
          },
          detail: {
            show: true,
            fontSize: 40,
            offsetCenter: [0, "60%"],
            formatter: "{value}",
            color: chartColor,
            fontWeight: "bold"
          },
          data: [
            {
              value: totalEmployees
            }
          ]
        }
      ]
    };
  }
  // Initialize KPI Radial Chart using ApexCharts
  initializeKpiRadialChart() {
    const kpiScore = this.getLatestKpiScore();
    this.kpiRadialChart.series = [kpiScore];
  }
  // Method to initialize all charts
  initializeCharts() {
    try {
      this.initializeTotalEmployeesChart();
      this.initializeKpiRadialChart();
    } catch (error) {
      console.error("Error initializing charts:", error);
    }
  }
  goAddEmployee() {
    this.router.navigate(["/employees/add"]);
  }
  openDeleteModal(employee) {
    this.employeeToDeleteFlag.set(employee);
    this.showDeleteModalFlag.set(true);
  }
  closeDeleteModal() {
    this.showDeleteModalFlag.set(false);
    this.employeeToDeleteFlag.set(null);
  }
  confirmDelete() {
    const employee = this.employeeToDeleteFlag();
    if (employee) {
      this.deleteEmployee(employee.id);
    } else {
      console.error("No employee selected for deletion");
    }
  }
  deleteEmployee(id) {
    this.loading.set(true);
    this.employeesService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response && typeof response === "object" && "success" in response) {
          if (response.success === false) {
            let errorMsg = "employees.delete_error_linked_to_system";
            if (response.message) {
              const msgLower = response.message.toLowerCase();
              if (msgLower.includes("linked") || msgLower.includes("referenced") || msgLower.includes("cannot be deleted") || msgLower.includes("\u0644\u0627 \u064A\u0645\u0643\u0646 \u062D\u0630\u0641")) {
                errorMsg = "employees.delete_error_linked_to_system";
              } else {
                errorMsg = response.message;
              }
            }
            this.displayErrorModal(errorMsg);
            this.closeDeleteModal();
            return;
          }
        }
        this.displaySuccessModal("employees.deleted_success");
        this.closeDeleteModal();
        this.loadEmployees();
      },
      error: (error) => {
        console.error("Error deleting employee:", error);
        this.loading.set(false);
        const errorMessage = error.error?.message || "";
        if (errorMessage.toLowerCase().includes("linked") || errorMessage.toLowerCase().includes("referenced") || errorMessage.toLowerCase().includes("cannot be deleted")) {
          this.displayErrorModal("employees.delete_error_linked_to_system");
        } else if (error.status === 404) {
          this.displayErrorModal("employees.delete_error_not_found");
        } else if (error.status === 403) {
          this.displayErrorModal("employees.delete_error_permission");
        } else {
          this.displayErrorModal("employees.delete_error_general");
        }
        this.closeDeleteModal();
      }
    });
  }
  displaySuccessModal(messageKey) {
    this.successMessageFlag.set(this.translate(messageKey));
    this.showSuccessModalFlag.set(true);
    this.loading.set(false);
  }
  displayErrorModal(messageKey) {
    this.errorMessageFlag.set(this.translate(messageKey));
    this.showErrorModalFlag.set(true);
    this.loading.set(false);
  }
  closeSuccessModal() {
    this.showSuccessModalFlag.set(false);
    this.successMessageFlag.set("");
  }
  closeErrorModal() {
    this.showErrorModalFlag.set(false);
    this.errorMessageFlag.set("");
  }
  // Getters for template
  showDeleteModal() {
    return this.showDeleteModalFlag();
  }
  showSuccessModal() {
    return this.showSuccessModalFlag();
  }
  showErrorModal() {
    return this.showErrorModalFlag();
  }
  employeeToDelete() {
    return this.employeeToDeleteFlag();
  }
  successMessage() {
    return this.successMessageFlag();
  }
  errorMessage() {
    return this.errorMessageFlag();
  }
  getDeleteMessage() {
    const employee = this.employeeToDelete();
    if (employee) {
      const name = this.getFullName(employee);
      return this.translate("employees.confirm_delete_message").replace("%name%", name);
    }
    return this.translate("employees.confirm_delete");
  }
  // Translation helper
  translate(key) {
    return this.translationService.translate(key);
  }
  static \u0275fac = function Employees_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Employees)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Employees, selectors: [["app-employees"]], standalone: false, decls: 72, vars: 41, consts: [["pageSizeSelect", ""], [1, "employees-page", "rounded-5"], [1, "page-title"], [1, "top-bar"], [1, "top-bar-left"], [1, "btn-icon-with-tooltip", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "top-bar-right"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["d", "M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "col-md-3"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "employees-grid", 4, "ngIf"], ["class", "employees-table", 4, "ngIf"], [1, "pagination-section"], [1, "pagination-controls", "ltr"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "change", "value"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "pagination-info"], ["aria-label", "Employees pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], ["class", "delete-modal-overlay", 3, "click", 4, "ngIf"], ["class", "success-modal-overlay", 3, "click", 4, "ngIf"], ["class", "error-modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 1, "empty-icon"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/employees/add", 1, "add-employee-btn"], [1, "employees-grid"], ["class", "employee-card", 4, "ngFor", "ngForOf"], [1, "employee-card"], [1, "card-header"], [1, "employee-info"], [1, "employee-name"], [1, "employee-job-title"], [1, "employee-avatar"], [3, "src", "alt", 4, "ngIf"], ["class", "avatar-initials", 4, "ngIf"], [1, "card-divider"], [1, "card-details"], [1, "detail-row", 3, "click"], [1, "detail-label"], [1, "detail-value"], ["title", "Copy to clipboard", 1, "copy-btn"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2", "ry", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["class", "detail-row", 4, "ngIf"], [1, "detail-row"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "detail-icon"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "card-actions"], [1, "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], [1, "edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [3, "src", "alt"], [1, "avatar-initials"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "employees-table"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "employee-avatar-small"], ["class", "avatar-initials-small", 4, "ngIf"], [1, "status-badge"], [1, "table-actions"], ["title", "Edit", 1, "edit-btn-small", 3, "click"], ["title", "Delete", 1, "delete-btn-small", 3, "click"], [1, "avatar-initials-small"], [1, "page-link", 3, "click"], [1, "delete-modal-overlay", 3, "click"], [1, "delete-modal", 3, "click"], [1, "delete-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 6h18"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["d", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "delete-title"], [1, "delete-message"], [1, "delete-actions"], [1, "cancel-btn", 3, "click"], [1, "confirm-delete-btn", 3, "click"], [1, "success-modal-overlay", 3, "click"], [1, "success-modal", 3, "click"], [1, "success-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "success-title"], [1, "success-message"], [1, "success-close-btn", 3, "click"], [1, "error-modal-overlay", 3, "click"], [1, "error-modal", 3, "click"], [1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "error-title"], [1, "error-message"], [1, "error-close-btn", 3, "click"]], template: function Employees_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "button", 5);
      \u0275\u0275listener("click", function Employees_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goAddEmployee());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "line", 7)(8, "line", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "button", 11);
      \u0275\u0275listener("click", function Employees_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode.set("cards"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 6);
      \u0275\u0275element(13, "rect", 12)(14, "rect", 13)(15, "rect", 14)(16, "rect", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "button", 11);
      \u0275\u0275listener("click", function Employees_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode.set("table"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 6);
      \u0275\u0275element(20, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 17)(23, "div", 18)(24, "div", 19)(25, "div", 20);
      \u0275\u0275element(26, "i", 21);
      \u0275\u0275elementStart(27, "input", 22);
      \u0275\u0275listener("ngModelChange", function Employees_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchTerm = $event);
      })("input", function Employees_Template_input_input_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchInput($event));
      })("keyup.enter", function Employees_Template_input_keyup_enter_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 23)(29, "button", 24);
      \u0275\u0275listener("click", function Employees_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 23)(32, "button", 25);
      \u0275\u0275listener("click", function Employees_Template_button_click_32_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearSearch());
      });
      \u0275\u0275element(33, "i", 26);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "div", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, Employees_div_36_Template, 4, 1, "div", 28)(37, Employees_div_37_Template, 12, 3, "div", 29)(38, Employees_div_38_Template, 2, 1, "div", 30)(39, Employees_div_39_Template, 26, 11, "div", 31);
      \u0275\u0275elementStart(40, "div", 32)(41, "div", 33)(42, "div", 34)(43, "label", 35);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "select", 36, 0);
      \u0275\u0275listener("change", function Employees_Template_select_change_45_listener() {
        \u0275\u0275restoreView(_r1);
        const pageSizeSelect_r7 = \u0275\u0275reference(46);
        return \u0275\u0275resetView(ctx.onPageSizeChange(+pageSizeSelect_r7.value));
      });
      \u0275\u0275elementStart(47, "option", 37);
      \u0275\u0275text(48, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 38);
      \u0275\u0275text(50, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 39);
      \u0275\u0275text(52, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 40);
      \u0275\u0275text(54, "48");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 41)(56, "span");
      \u0275\u0275text(57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "nav", 42)(59, "ul", 43)(60, "li", 44)(61, "button", 45);
      \u0275\u0275listener("click", function Employees_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changePage(ctx.currentPage - 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 46);
      \u0275\u0275element(63, "polyline", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(64, Employees_li_64_Template, 3, 3, "li", 48);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "li", 44)(66, "button", 45);
      \u0275\u0275listener("click", function Employees_Template_button_click_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changePage(ctx.currentPage + 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 46);
      \u0275\u0275element(68, "polyline", 49);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(69, Employees_div_69_Template, 16, 4, "div", 50)(70, Employees_div_70_Template, 12, 3, "div", 51)(71, Employees_div_71_Template, 13, 3, "div", 52);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.title"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ltr-right", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275attribute("data-tooltip", ctx.translate("employees.add_employee"))("aria-label", ctx.translate("employees.add_employee"));
      \u0275\u0275advance(4);
      \u0275\u0275classProp("ltr-left", !ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "cards");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.view_cards"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "table");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.view_table"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("placeholder", ctx.translate("employees.search_employees"))("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.employees.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.employees.length > 0 && ctx.viewMode() === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.employees.length > 0 && ctx.viewMode() === "table");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.translate("common.page_size"), ":");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.pageSize);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate6("", ctx.translate("common.showing"), " ", (ctx.currentPage - 1) * ctx.pageSize + 1, "-", ctx.Math.min(ctx.currentPage * ctx.pageSize, ctx.totalCount), " ", ctx.translate("common.of"), " ", ctx.totalCount, " ", ctx.translate("employees.title"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", ctx.currentPage === 1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage === 1);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.pages);
      \u0275\u0275advance();
      \u0275\u0275classProp("disabled", ctx.currentPage === ctx.totalPages);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showDeleteModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showErrorModal());
    }
  }, dependencies: [NgForOf, NgIf, RouterLink, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n\n\n.employees-page[_ngcontent-%COMP%] {\n  padding: 0 1.34rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  min-height: 100vh;\n}\n.employees-page[_ngcontent-%COMP%]:not(.rtl) {\n  font-family:\n    "Poppins",\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.employees-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.34rem;\n  gap: 0.67rem;\n  flex-direction: row;\n}\n.top-bar[dir=ltr][_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.top-bar-left.ltr-right[_ngcontent-%COMP%] {\n  order: 2;\n}\n.top-bar-right.ltr-left[_ngcontent-%COMP%] {\n  order: 1;\n}\n.top-bar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.top-bar-left[dir=ltr][_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.top-bar-right[dir=rtl][_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.top-bar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add-employee-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 0.33rem;\n  font-weight: 600;\n  font-size: 11px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-employee-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B78628;\n}\n.plus-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid #E1E3E5;\n  background-color: #ffffff;\n  border-radius: 0.33rem;\n  padding: 0.17rem;\n  gap: 0.17rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.67rem;\n  border-radius: 5px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.34rem;\n}\n.search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n  font-size: 0.67rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding: 0.33rem 0.33rem 0.33rem 18px;\n  border-radius: 5px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n  font-size: 0.7rem;\n  height: 100% !important;\n  line-height: 1.2;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.13rem rgba(212, 170, 58, 0.25);\n}\n.search-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.33rem 0.67rem;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  height: 27px !important;\n  line-height: 1.2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-section[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  font-size: 0.67rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.34rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.employees-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(241px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.34rem;\n}\n.employee-card[_ngcontent-%COMP%] {\n  background: #fbfaf54d;\n  border: 1px solid #F4F4F4;\n  border-radius: 11px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.employee-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: #CBA344;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.67rem;\n}\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.17rem 0;\n}\n.employee-job-title[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.employee-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #B68A35;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.employee-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.card-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 0.67rem 0;\n}\n.card-details[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  min-width: 0;\n  overflow: hidden;\n}\n.detail-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  margin: 0 -0.5rem;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 54px;\n  flex-shrink: 0;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.33rem;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.17rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.17rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  flex-shrink: 0;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #B68A35;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  background-color: #f9fafb;\n  border-radius: 0.33rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.17rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: #C8E6C9;\n  color: #2BA149;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n}\n.delete-btn[_ngcontent-%COMP%], \n.edit-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.33rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.33rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.58rem;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #d22626;\n  border: 1px solid #c62828a9;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #d22626;\n  color: #FFFFFF;\n  border-color: #d22626;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #fff;\n  color: #F9F7ED;\n}\n.employees-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.67rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.58rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.58rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.employee-avatar-small[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #B68A35;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.employee-avatar-small[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials-small[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 0.58rem;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.33rem;\n}\n.edit-btn-small[_ngcontent-%COMP%], \n.delete-btn-small[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.33rem;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small[_ngcontent-%COMP%] {\n  color: #29ABE2;\n  border: 1px solid #BBDEFB;\n  background-color: #BBDEFB;\n}\n.edit-btn-small[_ngcontent-%COMP%]:hover {\n  border: 1px solid #29ABE2;\n  background-color: #BBDEFB;\n}\n.delete-btn-small[_ngcontent-%COMP%] {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn-small[_ngcontent-%COMP%]:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.67rem;\n  margin-top: 0.67rem;\n  margin-bottom: 0.67rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 5px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.58rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.67rem;\n  gap: 0.67rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.58rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.33rem;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  color: #374151;\n  font-size: 0.58rem;\n  cursor: pointer;\n}\n.pagination-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 27px;\n  height: 27px;\n  padding: 0.33rem 0.67rem;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  color: #374151;\n  font-size: 0.58rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.58rem;\n  font-weight: 500;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.17rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 27px;\n  height: 27px;\n  padding: 0.33rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n.delete-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.delete-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_deleteModalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_deleteModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.delete-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-bottom: 1rem;\n}\n.delete-title[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.delete-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.delete-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.confirm-delete-btn[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.confirm-delete-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.success-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.success-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_successModalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_successModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #158638;\n  margin-bottom: 1rem;\n}\n.success-title[_ngcontent-%COMP%] {\n  color: #158638;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.success-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.success-close-btn[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.success-close-btn[_ngcontent-%COMP%]:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.error-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.error-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_errorModalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_errorModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-bottom: 1rem;\n}\n.error-title[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.error-close-btn[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.error-close-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  transform: translateY(-1px);\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .employees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1.25rem;\n  }\n  .kpi-trend-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 1.25rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.84rem;\n  }\n  .employee-filter-section[_ngcontent-%COMP%] {\n    padding: 0.84rem;\n  }\n  .kpi-trend-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .top-bar-left[_ngcontent-%COMP%], \n   .top-bar-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n  .add-employee-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .employees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .employee-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .delete-btn[_ngcontent-%COMP%], \n   .edit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n  .pagination-section[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.67rem;\n    margin-bottom: 1rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.67rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n}\n@media (max-width: 1024px) {\n  .employees-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    border-radius: 0.5rem;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.875rem 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .employees-table[_ngcontent-%COMP%] {\n    margin: 0 -1rem;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 700px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.375rem;\n    font-size: 0.75rem;\n  }\n  .employee-avatar-small[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .avatar-initials-small[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .edit-btn-small[_ngcontent-%COMP%], \n   .delete-btn-small[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n    min-width: 32px;\n    height: 32px;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.625rem;\n    padding: 0.125rem 0.5rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: column !important;\n  }\n}\n@media (max-width: 480px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 1rem;\n  }\n  .employee-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .employee-name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .employee-job-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .detail-label[_ngcontent-%COMP%], \n   .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.25rem;\n    font-size: 0.7rem;\n  }\n  .employee-avatar-small[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n  }\n  .avatar-initials-small[_ngcontent-%COMP%] {\n    font-size: 0.625rem;\n  }\n  .kpi-trend-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .kpi-trend-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .card-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .filter-title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .filter-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n.employee-filter-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.employee-filter-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.filter-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.filter-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.filter-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 400;\n}\n.employee-date-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  align-items: end;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(226, 232, 240, 0.5);\n}\n.kpi-trend-section[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.kpi-trend-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.kpi-trend-section[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 0%,\n      transparent 49%,\n      rgba(255, 255, 255, 0.02) 49%,\n      rgba(255, 255, 255, 0.02) 51%,\n      transparent 51%,\n      transparent 100%);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.kpi-trend-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.kpi-trend-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.kpi-trend-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  font-weight: 400;\n}\n.date-filter-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  align-items: end;\n  margin-top: 1rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(226, 232, 240, 0.5);\n}\n.date-filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 150px;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  text-align: center;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  background: white;\n  color: #1e293b;\n  transition: all 0.2s ease;\n}\n.date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.filter-btn[_ngcontent-%COMP%], \n.reset-filter-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  min-height: 48px;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  background: #A87D2A;\n}\n.reset-filter-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5F646D;\n  border: 1px solid #5F646D;\n}\n.reset-filter-btn[_ngcontent-%COMP%]:hover {\n  background: #5F646D;\n  color: white;\n}\n.kpi-trend-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.kpi-trend-card[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border: 1px solid #E6D7A2;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-trend-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  background:\n    radial-gradient(\n      circle at 30px 30px,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  pointer-events: none;\n  border-radius: 0 12px 0 0;\n}\n.kpi-trend-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1);\n}\n.kpi-trend-card[_ngcontent-%COMP%]:hover::after {\n  background:\n    radial-gradient(\n      circle at 30px 30px,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 70%);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.card-icon[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  border-radius: 12px;\n  pointer-events: none;\n}\n.kpi-score-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #2BA149;\n  color: white;\n}\n.employees-count-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.performance-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: #f1b021;\n  color: white;\n}\n.card-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #5F646D;\n  line-height: 1;\n}\n.performance-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.stat-value.high[_ngcontent-%COMP%] {\n  color: #2BA149;\n}\n.stat-value.low[_ngcontent-%COMP%] {\n  color: #C62828;\n}\n.card-chart[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.line-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n  position: relative;\n  background: #F9F7ED;\n  border-radius: 8px;\n  padding: 8px;\n}\n.performance-chart[_ngcontent-%COMP%] {\n  height: 60px;\n  display: flex;\n  align-items: end;\n  gap: 0.5rem;\n  background: #F9F7ED;\n  border-radius: 8px;\n  padding: 8px;\n  position: relative;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  gap: 0.5rem;\n  height: 100%;\n  width: 100%;\n}\n.bar[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.3s ease;\n  position: relative;\n  min-height: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.bar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #E6D7A2 0%,\n      transparent 50%);\n  border-radius: 6px 6px 0 0;\n}\n.high-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n}\n.low-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444 0%,\n      #f87171 50%,\n      #fca5a5 100%);\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .kpi-trend-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .date-filter-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .date-filter-group[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%], \n.employees-page.rtl[_ngcontent-%COMP%]   .reset-filter-btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .employee-date-filter[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl[_ngcontent-%COMP%]   .filter-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .kpi-trend-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.25rem;\n  }\n  .kpi-trend-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .card-value[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .employee-filter-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .filter-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .filter-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .employee-date-filter[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0.75rem;\n    gap: 0.75rem;\n  }\n  .filter-btn[_ngcontent-%COMP%], \n   .reset-filter-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n  .date-filter-group[_ngcontent-%COMP%] {\n    min-width: auto;\n    width: 100%;\n  }\n  .kpi-trend-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin-bottom: 2rem;\n  }\n  .kpi-trend-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .kpi-trend-subtitle[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .kpi-trend-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .kpi-trend-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .card-value[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 480px) {\n  .employee-filter-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .kpi-trend-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .kpi-trend-cards[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .kpi-trend-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .card-value[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.echarts-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-score-card[_ngcontent-%COMP%]   .echarts-container[_ngcontent-%COMP%] {\n  --gauge-color: #B68A35;\n  --gauge-needle-color: #B68A35;\n  --gauge-text-color: #B68A35;\n}\n.performance-card[_ngcontent-%COMP%]   .echarts-container[_ngcontent-%COMP%] {\n  --gauge-color: #2BA149;\n  --gauge-needle-color: #2BA149;\n  --gauge-text-color: #2BA149;\n}\n.echarts-chart[_ngcontent-%COMP%] {\n  top: 3% !important;\n  width: 100%;\n  height: 100%;\n}\n.kpi-trend-card[_ngcontent-%COMP%]   .card-chart[_ngcontent-%COMP%] {\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-radial-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.performance-card[_ngcontent-%COMP%]   .card-chart[_ngcontent-%COMP%] {\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.performance-chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  gap: 20px;\n  height: 80px;\n  width: 100%;\n}\n.bar[_ngcontent-%COMP%] {\n  width: 30px;\n  border-radius: 4px 4px 0 0;\n  transition: all 0.3s ease;\n  min-height: 4px;\n}\n.high-bar[_ngcontent-%COMP%] {\n  background: #f1b021;\n}\n.low-bar[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n}\n.performance-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.performance-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n.performance-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n}\n.performance-stats[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.performance-stats[_ngcontent-%COMP%]   .stat-value.high[_ngcontent-%COMP%] {\n  color: #f1b021;\n}\n.performance-stats[_ngcontent-%COMP%]   .stat-value.low[_ngcontent-%COMP%] {\n  color: #E6D7A2;\n}\n@media (max-width: 768px) {\n  .echarts-container[_ngcontent-%COMP%] {\n    height: 150px !important;\n  }\n  .kpi-trend-card[_ngcontent-%COMP%]   .card-chart[_ngcontent-%COMP%] {\n    min-height: 150px;\n  }\n  .performance-card[_ngcontent-%COMP%]   .card-chart[_ngcontent-%COMP%] {\n    min-height: 100px;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    gap: 0.5rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.4rem;\n  }\n  .add-employee-btn[_ngcontent-%COMP%] {\n    padding: 0.44rem 0.87rem;\n    font-size: 9px !important;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    padding: 0.13rem;\n    gap: 0.13rem;\n  }\n  .toggle-btn[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.54rem;\n    font-size: 0.54rem;\n  }\n  .employees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.84rem;\n  }\n  .employee-card[_ngcontent-%COMP%] {\n    padding: 0.84rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    margin-bottom: 0.57rem;\n  }\n  .employee-avatar[_ngcontent-%COMP%] {\n    width: 29px;\n    height: 29px;\n  }\n  .employee-name[_ngcontent-%COMP%] {\n    font-size: 0.74rem;\n  }\n  .employee-job-title[_ngcontent-%COMP%] {\n    font-size: 0.54rem;\n  }\n  .card-divider[_ngcontent-%COMP%] {\n    margin: 0.57rem 0;\n  }\n  .card-details[_ngcontent-%COMP%] {\n    margin-bottom: 0.84rem;\n  }\n  .detail-row[_ngcontent-%COMP%] {\n    padding: 0.44rem 0;\n  }\n  .detail-row[_ngcontent-%COMP%]:hover {\n    padding: 0.44rem;\n    margin: 0 -0.44rem;\n  }\n  .detail-label[_ngcontent-%COMP%], \n   .detail-value[_ngcontent-%COMP%], \n   .status-label[_ngcontent-%COMP%], \n   .status-badge[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%], \n   .edit-btn[_ngcontent-%COMP%] {\n    font-size: 0.55rem;\n  }\n  .card-status[_ngcontent-%COMP%] {\n    margin-bottom: 0.84rem;\n    padding: 0.44rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    gap: 0.44rem;\n  }\n}\n@media (min-width: 1400px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    margin-bottom: 0.84rem;\n  }\n  .add-employee-btn[_ngcontent-%COMP%] {\n    padding: 0.27rem 0.54rem;\n    font-size: 0.3rem;\n  }\n  .toggle-btn[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.54rem;\n    font-size: 0.57rem;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    padding-left: 18px;\n  }\n  .employees-grid[_ngcontent-%COMP%] {\n    gap: 0.84rem;\n  }\n  .employee-card[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n}\n@media (max-width: 360px) {\n  .employees-page[_ngcontent-%COMP%] {\n    padding: 0 0.75rem;\n  }\n  .employees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    margin-bottom: 1rem;\n  }\n  .employee-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-width: 0;\n    max-width: 100%;\n    box-sizing: border-box;\n    width: 100%;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n  .employee-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .avatar-initials[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .employee-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .employee-job-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .card-divider[_ngcontent-%COMP%] {\n    margin: 0.75rem 0;\n  }\n  .card-details[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .detail-row[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .detail-row[_ngcontent-%COMP%]:hover {\n    padding: 0.5rem;\n    margin: 0 -0.5rem;\n  }\n  .detail-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    min-width: 60px;\n    flex-shrink: 0;\n  }\n  .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin: 0 0.25rem;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex: 1;\n  }\n  .copy-btn[_ngcontent-%COMP%] {\n    padding: 0.2rem;\n    flex-shrink: 0;\n  }\n  .copy-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .detail-icon[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .detail-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .card-status[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    padding: 0.5rem;\n  }\n  .status-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.2rem 0.5rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    padding-top: 0.75rem;\n  }\n  .delete-btn[_ngcontent-%COMP%], \n   .edit-btn[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=employees-IE7A7C4J.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Employees, [{
    type: Component,
    args: [{ selector: "app-employees", standalone: false, template: `<div class="employees-page rounded-5" [class.rtl]="isRTL()">\r
  <!-- Page Title -->\r
  <h1 class="page-title">{{ translate('employees.title') }}</h1>\r
\r
  <!-- Unified Date Filter -->\r
  <!-- <div class="employee-filter-section">\r
    <div class="filter-header">\r
      <h3 class="filter-title">{{ translate('employees.filter.title') }}</h3>\r
      <p class="filter-subtitle">{{ translate('employees.filter.subtitle') }}</p>\r
    </div>\r
\r
    <div class="employee-date-filter">\r
      <button class="reset-filter-btn" (click)="resetUnifiedFilter()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>\r
          <path d="M21 3v5h-5"/>\r
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>\r
          <path d="M3 21v-5h5"/>\r
        </svg>\r
        {{ translate('employees.filter.resetFilter') }}\r
      </button>\r
      <button class="filter-btn" (click)="applyUnifiedFilter()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.207A1 1 0 0 1 3 6.5V4z"/>\r
        </svg>\r
        {{ translate('employees.filter.applyFilter') }}\r
      </button>\r
\r
      <div class="date-filter-group">\r
        <label class="date-label">{{ translate('employees.filter.hireDate') }}</label>\r
        <input\r
          type="date"\r
          class="date-input"\r
          [value]="employeeFilterDate()"\r
          (change)="onEmployeeDateChange($event)"\r
          [max]="maxDate()">\r
      </div>\r
    </div>\r
  </div> -->\r
\r
  <!-- Employee KPI Trend Chart -->\r
  <!-- <div class="kpi-trend-section" *ngIf="kpiTrendData.length > 0">\r
    <div class="kpi-trend-header">\r
      <h2 class="kpi-trend-title">{{ translate('employees.kpi_trend.title') }}</h2>\r
      <p class="kpi-trend-subtitle">{{ translate('employees.kpi_trend.subtitle') }}</p>\r
    </div>\r
\r
    <div class="kpi-trend-cards">\r
      Average KPI Score Card\r
      <div class="kpi-trend-card kpi-score-card">\r
        <div class="card-header">\r
          <div class="card-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>\r
            </svg>\r
          </div>\r
          <div class="card-info">\r
            <h3 class="card-title">{{ translate('employees.kpi_trend.averageScore') }}</h3>\r
            <div class="card-value">{{ getLatestKpiScore() }}%</div>\r
          </div>\r
        </div>\r
        <div class="card-chart">\r
          <div class="kpi-radial-chart">\r
            <apx-chart\r
              [series]="kpiRadialChart.series!"\r
              [chart]="kpiRadialChart.chart!"\r
              [plotOptions]="kpiRadialChart.plotOptions!"\r
              [labels]="kpiRadialChart.labels!"\r
              [colors]="kpiRadialChart.colors!"\r
              [stroke]="kpiRadialChart.stroke!"\r
              [fill]="kpiRadialChart.fill!">\r
            </apx-chart>\r
          </div>\r
        </div>\r
      </div>\r
\r
      Total Employees Card\r
      <div class="kpi-trend-card employees-count-card">\r
        <div class="card-header">\r
          <div class="card-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
              <circle cx="9" cy="7" r="4"/>\r
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>\r
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
            </svg>\r
          </div>\r
          <div class="card-info">\r
            <h3 class="card-title">{{ translate('employees.kpi_trend.totalEmployees') }}</h3>\r
            <div class="card-value">{{ getLatestTotalEmployees() }}</div>\r
          </div>\r
        </div>\r
        <div class="card-chart">\r
          <div class="echarts-container" style="height: 250px; width: 90%;">\r
            <div echarts\r
                 [options]="totalEmployeesChartOptions"\r
                 [initOpts]="echartsInitOpts"\r
                 class="echarts-chart">\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      Performance Distribution Card\r
      <div class="kpi-trend-card performance-card">\r
        <div class="card-header">\r
          <div class="card-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M3 3v18h18"/>\r
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>\r
            </svg>\r
          </div>\r
          <div class="card-info">\r
            <h3 class="card-title">{{ translate('employees.kpi_trend.performance') }}</h3>\r
            <div class="performance-stats">\r
              <div class="stat-item">\r
                <span class="stat-label">{{ translate('employees.kpi_trend.high') }}</span>\r
                <span class="stat-value high">{{ getLatestHighPerformers() }}</span>\r
              </div>\r
              <div class="stat-item">\r
                <span class="stat-label">{{ translate('employees.kpi_trend.low') }}</span>\r
                <span class="stat-value low">{{ getLatestLowPerformers() }}</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="card-chart">\r
          <div class="performance-chart">\r
            <div class="chart-bars">\r
              <div class="bar high-bar" [style.height.%]="getHighPerformersPercentage()"></div>\r
              <div class="bar low-bar" [style.height.%]="getLowPerformersPercentage()"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div> -->\r
\r
 \r
\r
\r
\r
  <div class="top-bar">\r
    <!-- LTR: Button on right, view toggle on left -->\r
    <div class="top-bar-left" [class.ltr-right]="!isRTL()">\r
      <button \r
        class="btn-icon-with-tooltip" \r
        (click)="goAddEmployee()"\r
        [attr.data-tooltip]="translate('employees.add_employee')"\r
        [attr.aria-label]="translate('employees.add_employee')">\r
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="12" y1="5" x2="12" y2="19"></line>\r
          <line x1="5" y1="12" x2="19" y2="12"></line>\r
        </svg>\r
      </button>\r
    </div>\r
    <div class="top-bar-right" [class.ltr-left]="!isRTL()">\r
      <div class="view-toggle">\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'cards'"\r
          (click)="viewMode.set('cards')">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
          {{ translate('employees.view_cards') }}\r
        </button>\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'table'"\r
          (click)="viewMode.set('table')">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"></path>\r
          </svg>\r
          {{ translate('employees.view_table') }}\r
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
             <input\r
               type="text"\r
               class="form-control search-input"\r
               [placeholder]="translate('employees.search_employees')"\r
               [ngModel]="searchTerm"\r
               (ngModelChange)="searchTerm = $event"\r
               (input)="onSearchInput($event)"\r
               (keyup.enter)="onSearchClick()"\r
             >\r
          </div>\r
        </div>\r
        <div class="col-md-2">\r
          <button class="btn btn-primary w-100" (click)="onSearchClick()">\r
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
     <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading()">\r
    <div class="spinner"></div>\r
    <p>{{ translate('common.loading') }}</p>\r
  </div>\r
      <!-- Empty State -->\r
  <div class="empty-state" *ngIf="!loading() && employees.length === 0">\r
    <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
      <circle cx="9" cy="7" r="4"></circle>\r
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
    </svg>\r
    <h3>{{ translate('employees.no_employees_found') }}</h3>\r
    <p>{{ translate('employees.get_started_message') }}</p>\r
    <button class="add-employee-btn" routerLink="/employees/add">\r
      {{ translate('employees.add_employee') }}\r
    </button>\r
  </div>  \r
  <!-- Cards View -->\r
  <div class="employees-grid" *ngIf="!loading() && employees.length > 0 && viewMode() === 'cards'">\r
    <div class="employee-card" *ngFor="let employee of employees">\r
      <div class="card-header">\r
        <!-- <button class="btn btn-primary">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
          </svg>\r
        </button> -->\r
        <div class="employee-info">\r
          <h3 class="employee-name">{{ getFullName(employee) }}</h3>\r
          <span class="employee-job-title">{{ employee.jobTitle }}</span>\r
        </div>\r
        <div class="employee-avatar">\r
          <img *ngIf="employee.imageUrl" [src]="employee.imageUrl" [alt]="getFullName(employee)">\r
          <div *ngIf="!employee.imageUrl" class="avatar-initials">\r
            {{ getInitials(employee) }}\r
          </div>\r
        </div>\r
        \r
      </div>\r
\r
      <div class="card-divider"></div>\r
\r
      <div class="card-details">\r
        <div class="detail-row" (click)="copyToClipboard(employee.email)">\r
          <span class="detail-label">{{ translate('employees.email') }}</span>\r
          <span class="detail-value">{{ employee.email }}</span>\r
          <button class="copy-btn" title="Copy to clipboard">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\r
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <div class="detail-row" (click)="copyToClipboard(employee.phoneNumber)">\r
          <span class="detail-label">{{ translate('employees.phone') }}</span>\r
          <span class="detail-value">{{ employee.phoneNumber }}</span>\r
          <button class="copy-btn" title="Copy to clipboard">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>\r
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <div class="detail-row" *ngIf="employee.departmentName">\r
          <span class="detail-label">{{ translate('employees.department') }}</span>\r
          <span class="detail-value">{{ employee.departmentName }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
        </div>\r
\r
        <div class="detail-row" *ngIf="employee.timeZone">\r
          <span class="detail-label">{{ translate('employees.time_zone') }}</span>\r
          <span class="detail-value">{{ employee.timeZone }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>\r
            <circle cx="12" cy="10" r="3"></circle>\r
          </svg>\r
        </div>\r
\r
        <div class="detail-row">\r
          <span class="detail-label">{{ translate('employees.hire_date') }}</span>\r
          <span class="detail-value">{{ employee.hireDate | date:(isRTL() ? 'dd/MM/yyyy' : 'yyyy-MM-dd') }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
            <line x1="16" y1="2" x2="16" y2="6"></line>\r
            <line x1="8" y1="2" x2="8" y2="6"></line>\r
            <line x1="3" y1="10" x2="21" y2="10"></line>\r
          </svg>\r
        </div>\r
\r
        <!-- <div class="detail-row" *ngIf="employee.roles && employee.roles.length > 0">\r
          <span class="detail-label">{{ translate('employees.roles') }}</span>\r
          <span class="detail-value">{{ employee.roles.join(', ') }}</span>\r
          <svg class="detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>\r
            <circle cx="12" cy="7" r="4"></circle>\r
          </svg>\r
        </div> -->\r
      </div>\r
\r
      <!-- <div class="card-status">\r
        <span class="status-label">{{ translate('employees.status') }}</span>\r
        <span class="status-badge" [class]="getStatusClass(employee.isActive)">\r
          {{ translate('employees.' + (employee.isActive ? 'active' : 'inactive')) }}\r
        </span>\r
      </div> -->\r
\r
      <div class="card-actions">\r
        <button class="delete-btn" (click)="openDeleteModal(employee)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="3,6 5,6 21,6"></polyline>\r
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>\r
          </svg>\r
          {{ translate('employees.delete') }}\r
        </button>\r
        <button class="edit-btn" (click)="goToEdit(employee.id)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
          </svg>\r
          {{ translate('employees.edit') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table View -->\r
  <div class="employees-table" *ngIf="!loading() && employees.length > 0 && viewMode() === 'table'">\r
    <table class="table">\r
      <thead>\r
        <tr>\r
          <th>{{ translate('employees.avatar') }}</th>\r
          <th>{{ translate('employees.name') }}</th>\r
          <th>{{ translate('employees.email') }}</th>\r
          <th>{{ translate('employees.job_title') }}</th>\r
          <th>{{ translate('employees.department') }}</th>\r
          <th>{{ translate('employees.phone') }}</th>\r
          <th>{{ translate('employees.hire_date') }}</th>\r
          <th>{{ translate('employees.roles') }}</th>\r
          <th>{{ translate('employees.status') }}</th>\r
          <th>{{ translate('employees.actions') }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let employee of employees">\r
          <td>\r
            <div class="employee-avatar-small">\r
              <img *ngIf="employee.imageUrl" [src]="employee.imageUrl" [alt]="getFullName(employee)">\r
              <div *ngIf="!employee.imageUrl" class="avatar-initials-small">\r
                {{ getInitials(employee) }}\r
              </div>\r
            </div>\r
          </td>\r
          <td>{{ getFullName(employee) }}</td>\r
          <td>{{ employee.email }}</td>\r
          <td>{{ employee.jobTitle }}</td>\r
          <td>{{ employee.departmentName || translate('employees.no_department') }}</td>\r
          <td>{{ employee.phoneNumber }}</td>\r
          <td>{{ employee.hireDate | date:(isRTL() ? 'dd/MM/yyyy' : 'yyyy-MM-dd') }}</td>\r
          <td>{{ employee.roles ? employee.roles.join(', ') : translate('employees.no_roles') }}</td>\r
          <td>\r
            <span class="status-badge" [class]="getStatusClass(employee.isActive)">\r
              {{ translate('employees.' + (employee.isActive ? 'active' : 'inactive')) }}\r
            </span>\r
          </td>\r
          <td>\r
            <div class="table-actions">\r
              <button class="edit-btn-small" (click)="goToEdit(employee.id)" title="Edit">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                </svg>\r
              </button>\r
              <button class="delete-btn-small" (click)="openDeleteModal(employee)" title="Delete">\r
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
    <div class="pagination-controls ltr">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
        <select #pageSizeSelect id="pageSize" [value]="pageSize" (change)="onPageSizeChange(+pageSizeSelect.value)">\r
          <option value="6">6</option>\r
          <option value="12">12</option>\r
          <option value="24">24</option>\r
          <option value="48">48</option>\r
        </select>\r
      </div>\r
      <div class="pagination-info">\r
      <span>{{ translate('common.showing') }} {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalCount) }} {{ translate('common.of') }} {{ totalCount }} {{ translate('employees.title') }}</span>\r
    </div>\r
      <nav aria-label="Employees pagination">\r
        <ul class="pagination">\r
          <li class="page-item" [class.disabled]="currentPage === 1">\r
            <button class="page-link" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="15,18 9,12 15,6"/>\r
              </svg>\r
            </button>\r
          </li>\r
\r
          <li *ngFor="let page of pages" class="page-item" [class.active]="page === currentPage">\r
            <button class="page-link" (click)="changePage(page)">{{ page }}</button>\r
          </li>\r
\r
          <li class="page-item" [class.disabled]="currentPage === totalPages">\r
            <button class="page-link" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">\r
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
  <div class="delete-modal-overlay" *ngIf="showDeleteModal()" (click)="closeDeleteModal()">\r
    <div class="delete-modal" (click)="$event.stopPropagation()">\r
      <div class="delete-icon">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M3 6h18"></path>\r
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>\r
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>\r
        </svg>\r
      </div>\r
      <h3 class="delete-title">{{ translate('employees.confirm_delete') }}</h3>\r
      <p class="delete-message">{{ getDeleteMessage() }}</p>\r
      <div class="delete-actions">\r
        <button class="cancel-btn" (click)="closeDeleteModal()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        <button class="confirm-delete-btn" (click)="confirmDelete()">\r
          {{ translate('employees.delete') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
\r
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
\r
  <!-- Error Modal -->\r
  <div class="error-modal-overlay" *ngIf="showErrorModal()" (click)="closeErrorModal()">\r
    <div class="error-modal" (click)="$event.stopPropagation()">\r
      <div class="error-icon">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="12" y1="8" x2="12" y2="12"></line>\r
          <line x1="12" y1="16" x2="12.01" y2="16"></line>\r
        </svg>\r
      </div>\r
      <h3 class="error-title">{{ translate('common.error') }}</h3>\r
      <p class="error-message">{{ errorMessage() }}</p>\r
      <button class="error-close-btn" (click)="closeErrorModal()">\r
        {{ translate('common.ok') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
\r
`, styles: ['@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n\n/* src/app/components/employees/employees-list/employees.css */\n.employees-page {\n  padding: 0 1.34rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  min-height: 100vh;\n}\n.employees-page:not(.rtl) {\n  font-family:\n    "Poppins",\n    system-ui,\n    -apple-system,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.employees-page.rtl {\n  direction: rtl;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.34rem;\n  gap: 0.67rem;\n  flex-direction: row;\n}\n.top-bar[dir=ltr] {\n  flex-direction: row-reverse;\n}\n.top-bar-left.ltr-right {\n  order: 2;\n}\n.top-bar-right.ltr-left {\n  order: 1;\n}\n.top-bar-left {\n  display: flex;\n  align-items: center;\n}\n.top-bar-left[dir=ltr] {\n  text-align: left !important;\n}\n.top-bar-right[dir=rtl] {\n  text-align: right !important;\n}\n.top-bar-right {\n  display: flex;\n  align-items: center;\n}\n.add-employee-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 0.33rem;\n  font-weight: 600;\n  font-size: 11px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-employee-btn:hover {\n  background-color: #B78628;\n}\n.plus-icon {\n  flex-shrink: 0;\n}\n.view-toggle {\n  display: flex;\n  border: 1px solid #E1E3E5;\n  background-color: #ffffff;\n  border-radius: 0.33rem;\n  padding: 0.17rem;\n  gap: 0.17rem;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  padding: 0.33rem 0.67rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n  font-size: 0.58rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.search-section {\n  background: white;\n  padding: 0.67rem;\n  border-radius: 5px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 1.34rem;\n}\n.search-section .row {\n  height: 100% !important;\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n  font-size: 0.67rem;\n}\n.search-input {\n  padding: 0.33rem 0.33rem 0.33rem 18px;\n  border-radius: 5px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n  font-size: 0.7rem;\n  height: 100% !important;\n  line-height: 1.2;\n}\n.search-input:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.13rem rgba(212, 170, 58, 0.25);\n}\n.search-section .btn {\n  padding: 0.33rem 0.67rem;\n  font-size: 0.7rem;\n  border-radius: 5px;\n  height: 27px !important;\n  line-height: 1.2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.search-section .bi {\n  font-size: 0.67rem;\n}\n.page-title {\n  font-size: 1.34rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #9ca3af;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  color: #6b7280;\n  margin-bottom: 1.5rem;\n}\n.employees-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(241px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.34rem;\n}\n.employee-card {\n  background: #fbfaf54d;\n  border: 1px solid #F4F4F4;\n  border-radius: 11px;\n  padding: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n  display: flex;\n  flex-direction: column;\n}\n.employee-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-color: #CBA344;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.67rem;\n}\n.employee-info {\n  flex: 1;\n}\n.employee-name {\n  font-size: 0.84rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.17rem 0;\n}\n.employee-job-title {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.employee-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #B68A35;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.employee-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials {\n  color: white;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.card-divider {\n  height: 1px;\n  background-color: #e5e7eb;\n  margin: 0.67rem 0;\n}\n.card-details {\n  margin-bottom: 1rem;\n}\n.detail-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f9fafb;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  min-width: 0;\n  overflow: hidden;\n}\n.detail-row:hover {\n  background-color: #f9fafb;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n  margin: 0 -0.5rem;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n  min-width: 54px;\n  flex-shrink: 0;\n}\n.detail-value {\n  font-size: 0.58rem;\n  color: #111827;\n  font-weight: 500;\n  flex: 1;\n  text-align: end;\n  margin: 0 0.33rem;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.copy-btn {\n  background: none;\n  border: none;\n  padding: 0.17rem;\n  cursor: pointer;\n  color: #6b7280;\n  border-radius: 0.17rem;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  flex-shrink: 0;\n}\n.copy-btn:hover {\n  background-color: #f3f4f6;\n  color: #B68A35;\n}\n.detail-icon {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.card-status {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  background-color: #f9fafb;\n  border-radius: 0.33rem;\n}\n.status-label {\n  font-size: 0.58rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.status-badge {\n  padding: 0.17rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.5rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.status-active {\n  background-color: #C8E6C9;\n  color: #2BA149;\n}\n.status-inactive {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.card-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: auto;\n}\n.delete-btn,\n.edit-btn {\n  flex: 1;\n  padding: 0.5rem;\n  border: none;\n  border-radius: 0.33rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.33rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  font-size: 0.58rem;\n}\n.delete-btn {\n  background-color: #fff;\n  color: #d22626;\n  border: 1px solid #c62828a9;\n}\n.delete-btn:hover {\n  background-color: #d22626;\n  color: #FFFFFF;\n  border-color: #d22626;\n}\n.edit-btn {\n  background-color: #fff;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.edit-btn:hover {\n  background-color: #B68A35;\n  border-color: #fff;\n  color: #F9F7ED;\n}\n.employees-table {\n  overflow-x: auto;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-overflow-scrolling: touch;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 800px;\n}\n.table th,\n.table td {\n  padding: 0.67rem;\n  text-align: start;\n  border-bottom: 1px solid #e5e7eb;\n  white-space: nowrap;\n}\n.table th {\n  background-color: #f9fafb;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.58rem;\n}\n.table td {\n  color: #111827;\n  font-size: 0.58rem;\n}\n.table tbody tr:hover {\n  background-color: #f9fafb;\n}\n.employee-avatar-small {\n  width: 21px;\n  height: 21px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #B68A35;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.employee-avatar-small img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.avatar-initials-small {\n  color: white;\n  font-weight: 600;\n  font-size: 0.58rem;\n}\n.table-actions {\n  display: flex;\n  gap: 0.33rem;\n}\n.edit-btn-small,\n.delete-btn-small {\n  background: none;\n  border: none;\n  padding: 0.33rem;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  transition: background-color 0.2s ease;\n}\n.edit-btn-small {\n  color: #29ABE2;\n  border: 1px solid #BBDEFB;\n  background-color: #BBDEFB;\n}\n.edit-btn-small:hover {\n  border: 1px solid #29ABE2;\n  background-color: #BBDEFB;\n}\n.delete-btn-small {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn-small:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.pagination-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.67rem;\n  margin-top: 0.67rem;\n  margin-bottom: 0.67rem;\n  padding: 1rem;\n  background-color: #f9fafb;\n  border-radius: 5px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.58rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.67rem;\n  gap: 0.67rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.33rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.58rem;\n}\n.page-size-control select {\n  padding: 0.33rem;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  color: #374151;\n  font-size: 0.58rem;\n  cursor: pointer;\n}\n.pagination-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 27px;\n  height: 27px;\n  padding: 0.33rem 0.67rem;\n  border: 1px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  color: #374151;\n  font-size: 0.58rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.pagination-btn:hover:not(:disabled) {\n  background-color: #f3f4f6;\n  border-color: #9ca3af;\n}\n.pagination-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-info {\n  color: #6b7280;\n  font-size: 0.58rem;\n  font-weight: 500;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.17rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 27px;\n  height: 27px;\n  padding: 0.33rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active .page-link {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n.delete-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.delete-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: deleteModalSlideIn 0.3s ease-out;\n}\n@keyframes deleteModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.delete-icon {\n  color: #dc2626;\n  margin-bottom: 1rem;\n}\n.delete-title {\n  color: #111827;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.delete-message {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.delete-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.cancel-btn {\n  background: #f3f4f6;\n  color: #374151;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.cancel-btn:hover {\n  background: #e5e7eb;\n}\n.confirm-delete-btn {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.confirm-delete-btn:hover {\n  background: #b91c1c;\n}\n.success-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.success-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: successModalSlideIn 0.3s ease-out;\n}\n@keyframes successModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.success-icon {\n  color: #158638;\n  margin-bottom: 1rem;\n}\n.success-title {\n  color: #158638;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.success-message {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.success-close-btn {\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.success-close-btn:hover {\n  background: #16a34a;\n  transform: translateY(-1px);\n}\n.error-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.error-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  text-align: center;\n  max-width: 400px;\n  width: 100%;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: errorModalSlideIn 0.3s ease-out;\n}\n@keyframes errorModalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.error-icon {\n  color: #dc2626;\n  margin-bottom: 1rem;\n}\n.error-title {\n  color: #dc2626;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 1rem 0;\n}\n.error-message {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0 0 1.5rem 0;\n  line-height: 1.5;\n}\n.error-close-btn {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 1rem;\n}\n.error-close-btn:hover {\n  background: #b91c1c;\n  transform: translateY(-1px);\n}\n.employees-page.rtl .detail-value {\n  text-align: start;\n}\n.employees-page.rtl .top-bar {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .card-actions {\n  flex-direction: row-reverse;\n}\n.pagination-section {\n  margin-top: 1rem;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .employees-page {\n    padding: 1.5rem;\n  }\n  .employees-grid {\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 1.25rem;\n  }\n  .kpi-trend-cards {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 1.25rem;\n  }\n  .top-bar {\n    display: flex;\n    flex-direction: column;\n  }\n  .search-section {\n    padding: 0.84rem;\n  }\n  .employee-filter-section {\n    padding: 0.84rem;\n  }\n  .kpi-trend-section {\n    padding: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .employees-page {\n    padding: 1rem;\n  }\n  .page-title {\n    font-size: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .top-bar {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .top-bar-left,\n  .top-bar-right {\n    width: 100%;\n  }\n  .view-toggle {\n    justify-content: center;\n    width: 100%;\n  }\n  .add-employee-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .employees-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .employee-card {\n    padding: 1.25rem;\n  }\n  .card-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .delete-btn,\n  .edit-btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .table {\n    font-size: 0.75rem;\n  }\n  .table th,\n  .table td {\n    padding: 0.75rem 0.5rem;\n  }\n  .pagination-section {\n    margin-top: 1rem;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n  .search-section {\n    padding: 0.67rem;\n    margin-bottom: 1rem;\n  }\n  .search-section .row {\n    flex-direction: column;\n    gap: 0.67rem;\n  }\n  .search-section .col-md-5,\n  .search-section .col-md-2,\n  .search-section .col-md-3 {\n    width: 100%;\n    max-width: none;\n  }\n}\n@media (max-width: 1024px) {\n  .employees-table {\n    overflow-x: auto;\n    border-radius: 0.5rem;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table {\n    min-width: 800px;\n  }\n  .table th,\n  .table td {\n    padding: 0.875rem 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .employees-table {\n    margin: 0 -1rem;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table {\n    min-width: 700px;\n  }\n  .table th,\n  .table td {\n    padding: 0.5rem 0.375rem;\n    font-size: 0.75rem;\n  }\n  .employee-avatar-small {\n    width: 24px;\n    height: 24px;\n  }\n  .avatar-initials-small {\n    font-size: 0.75rem;\n  }\n  .table-actions {\n    gap: 0.25rem;\n  }\n  .edit-btn-small,\n  .delete-btn-small {\n    padding: 0.25rem;\n    min-width: 32px;\n    height: 32px;\n  }\n  .status-badge {\n    font-size: 0.625rem;\n    padding: 0.125rem 0.5rem;\n  }\n  .top-bar {\n    display: flex !important;\n    flex-direction: column !important;\n  }\n}\n@media (max-width: 480px) {\n  .employees-page {\n    padding: 0.75rem;\n  }\n  .page-title {\n    font-size: 1.25rem;\n    margin-bottom: 1rem;\n  }\n  .employee-card {\n    padding: 1rem;\n  }\n  .employee-name {\n    font-size: 1.125rem;\n  }\n  .employee-job-title {\n    font-size: 0.8rem;\n  }\n  .detail-label,\n  .detail-value {\n    font-size: 0.8rem;\n  }\n  .table {\n    min-width: 600px;\n  }\n  .table th,\n  .table td {\n    padding: 0.375rem 0.25rem;\n    font-size: 0.7rem;\n  }\n  .employee-avatar-small {\n    width: 20px;\n    height: 20px;\n  }\n  .avatar-initials-small {\n    font-size: 0.625rem;\n  }\n  .kpi-trend-cards {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .kpi-trend-card {\n    padding: 1rem;\n  }\n  .card-value {\n    font-size: 1.5rem;\n  }\n  .filter-title {\n    font-size: 1.125rem;\n  }\n  .filter-subtitle {\n    font-size: 0.8rem;\n  }\n}\n.employee-filter-section {\n  margin-bottom: 2rem;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.employee-filter-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.filter-header {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.filter-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.filter-subtitle {\n  font-size: 1rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 400;\n}\n.employee-date-filter {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  align-items: end;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(226, 232, 240, 0.5);\n}\n.kpi-trend-section {\n  margin-bottom: 3rem;\n  border-radius: 16px;\n  padding: 2rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  position: relative;\n  overflow: hidden;\n}\n.kpi-trend-section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.kpi-trend-section::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 0%,\n      transparent 49%,\n      rgba(255, 255, 255, 0.02) 49%,\n      rgba(255, 255, 255, 0.02) 51%,\n      transparent 51%,\n      transparent 100%);\n  background-size: 40px 40px;\n  pointer-events: none;\n}\n.kpi-trend-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.kpi-trend-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.kpi-trend-subtitle {\n  font-size: 1.125rem;\n  color: #64748b;\n  margin: 0 0 1.5rem 0;\n  font-weight: 400;\n}\n.date-filter-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n  align-items: end;\n  margin-top: 1rem;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(226, 232, 240, 0.5);\n}\n.date-filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 150px;\n}\n.date-label {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #475569;\n  text-align: center;\n}\n.date-input {\n  padding: 0.75rem;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-family: inherit;\n  background: white;\n  color: #1e293b;\n  transition: all 0.2s ease;\n}\n.date-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.filter-btn,\n.reset-filter-btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n  min-height: 48px;\n}\n.filter-btn {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.filter-btn:hover {\n  background: #A87D2A;\n}\n.reset-filter-btn {\n  background: transparent;\n  color: #5F646D;\n  border: 1px solid #5F646D;\n}\n.reset-filter-btn:hover {\n  background: #5F646D;\n  color: white;\n}\n.kpi-trend-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n.kpi-trend-card {\n  background: #FFFFFF;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  border: 1px solid #E6D7A2;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.kpi-trend-card::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  background:\n    radial-gradient(\n      circle at 30px 30px,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 70%);\n  pointer-events: none;\n  border-radius: 0 12px 0 0;\n}\n.kpi-trend-card:hover {\n  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1);\n}\n.kpi-trend-card:hover::after {\n  background:\n    radial-gradient(\n      circle at 30px 30px,\n      rgba(255, 255, 255, 0.15) 0%,\n      transparent 70%);\n}\n.card-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.card-icon::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 50%);\n  border-radius: 12px;\n  pointer-events: none;\n}\n.kpi-score-card .card-icon {\n  background: #2BA149;\n  color: white;\n}\n.employees-count-card .card-icon {\n  background: #B68A35;\n  color: white;\n}\n.performance-card .card-icon {\n  background: #f1b021;\n  color: white;\n}\n.card-info {\n  flex: 1;\n}\n.card-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n}\n.card-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #5F646D;\n  line-height: 1;\n}\n.performance-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.stat-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-label {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.stat-value {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.stat-value.high {\n  color: #2BA149;\n}\n.stat-value.low {\n  color: #C62828;\n}\n.card-chart {\n  margin-top: 1rem;\n}\n.line-chart {\n  width: 100%;\n  height: 60px;\n  overflow: hidden;\n  position: relative;\n  background: #F9F7ED;\n  border-radius: 8px;\n  padding: 8px;\n}\n.performance-chart {\n  height: 60px;\n  display: flex;\n  align-items: end;\n  gap: 0.5rem;\n  background: #F9F7ED;\n  border-radius: 8px;\n  padding: 8px;\n  position: relative;\n}\n.chart-bars {\n  display: flex;\n  align-items: end;\n  gap: 0.5rem;\n  height: 100%;\n  width: 100%;\n}\n.bar {\n  flex: 1;\n  border-radius: 6px 6px 0 0;\n  transition: all 0.3s ease;\n  position: relative;\n  min-height: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.bar::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #E6D7A2 0%,\n      transparent 50%);\n  border-radius: 6px 6px 0 0;\n}\n.high-bar {\n  background:\n    linear-gradient(\n      180deg,\n      #10b981 0%,\n      #34d399 50%,\n      #6ee7b7 100%);\n}\n.low-bar {\n  background:\n    linear-gradient(\n      180deg,\n      #ef4444 0%,\n      #f87171 50%,\n      #fca5a5 100%);\n}\n.employees-page.rtl .kpi-trend-header {\n  text-align: center;\n}\n.employees-page.rtl .card-header {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .stat-item {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .date-filter-container {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .date-filter-group {\n  text-align: right;\n}\n.employees-page.rtl .filter-btn,\n.employees-page.rtl .reset-filter-btn {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .employee-date-filter {\n  flex-direction: row-reverse;\n}\n.employees-page.rtl .filter-header {\n  text-align: center;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .kpi-trend-cards {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.25rem;\n  }\n  .kpi-trend-card {\n    padding: 1.25rem;\n  }\n  .card-value {\n    font-size: 1.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .employee-filter-section {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .filter-title {\n    font-size: 1.25rem;\n  }\n  .filter-subtitle {\n    font-size: 0.875rem;\n  }\n  .employee-date-filter {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0.75rem;\n    gap: 0.75rem;\n  }\n  .filter-btn,\n  .reset-filter-btn {\n    justify-content: center;\n    width: 100%;\n  }\n  .date-filter-group {\n    min-width: auto;\n    width: 100%;\n  }\n  .kpi-trend-section {\n    padding: 1.5rem;\n    margin-bottom: 2rem;\n  }\n  .kpi-trend-title {\n    font-size: 1.5rem;\n  }\n  .kpi-trend-subtitle {\n    font-size: 1rem;\n  }\n  .kpi-trend-cards {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .kpi-trend-card {\n    padding: 1.25rem;\n  }\n  .card-value {\n    font-size: 1.5rem;\n  }\n  .card-header {\n    gap: 0.75rem;\n  }\n  .card-icon {\n    width: 40px;\n    height: 40px;\n  }\n}\n@media (max-width: 480px) {\n  .employee-filter-section {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .kpi-trend-section {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .kpi-trend-cards {\n    gap: 0.75rem;\n  }\n  .kpi-trend-card {\n    padding: 1rem;\n  }\n  .card-value {\n    font-size: 1.25rem;\n  }\n  .card-title {\n    font-size: 0.875rem;\n  }\n  .stat-value {\n    font-size: 1rem;\n  }\n}\n.echarts-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-score-card .echarts-container {\n  --gauge-color: #B68A35;\n  --gauge-needle-color: #B68A35;\n  --gauge-text-color: #B68A35;\n}\n.performance-card .echarts-container {\n  --gauge-color: #2BA149;\n  --gauge-needle-color: #2BA149;\n  --gauge-text-color: #2BA149;\n}\n.echarts-chart {\n  top: 3% !important;\n  width: 100%;\n  height: 100%;\n}\n.kpi-trend-card .card-chart {\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.kpi-radial-chart {\n  width: 100%;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.performance-card .card-chart {\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.performance-chart {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.chart-bars {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  gap: 20px;\n  height: 80px;\n  width: 100%;\n}\n.bar {\n  width: 30px;\n  border-radius: 4px 4px 0 0;\n  transition: all 0.3s ease;\n  min-height: 4px;\n}\n.high-bar {\n  background: #f1b021;\n}\n.low-bar {\n  background: #E6D7A2;\n}\n.performance-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.performance-stats .stat-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0;\n}\n.performance-stats .stat-label {\n  font-size: 0.875rem;\n  color: #666;\n  font-weight: 500;\n}\n.performance-stats .stat-value {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.performance-stats .stat-value.high {\n  color: #f1b021;\n}\n.performance-stats .stat-value.low {\n  color: #E6D7A2;\n}\n@media (max-width: 768px) {\n  .echarts-container {\n    height: 150px !important;\n  }\n  .kpi-trend-card .card-chart {\n    min-height: 150px;\n  }\n  .performance-card .card-chart {\n    min-height: 100px;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .employees-page {\n    padding: 0 1rem;\n  }\n  .top-bar {\n    margin-bottom: 1rem;\n    gap: 0.5rem;\n  }\n  .page-title {\n    font-size: 1rem;\n    margin-bottom: 0.4rem;\n  }\n  .add-employee-btn {\n    padding: 0.44rem 0.87rem;\n    font-size: 9px !important;\n  }\n  .view-toggle {\n    padding: 0.13rem;\n    gap: 0.13rem;\n  }\n  .toggle-btn {\n    padding: 0.3rem 0.54rem;\n    font-size: 0.54rem;\n  }\n  .employees-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.84rem;\n  }\n  .employee-card {\n    padding: 0.84rem;\n  }\n  .card-header {\n    margin-bottom: 0.57rem;\n  }\n  .employee-avatar {\n    width: 29px;\n    height: 29px;\n  }\n  .employee-name {\n    font-size: 0.74rem;\n  }\n  .employee-job-title {\n    font-size: 0.54rem;\n  }\n  .card-divider {\n    margin: 0.57rem 0;\n  }\n  .card-details {\n    margin-bottom: 0.84rem;\n  }\n  .detail-row {\n    padding: 0.44rem 0;\n  }\n  .detail-row:hover {\n    padding: 0.44rem;\n    margin: 0 -0.44rem;\n  }\n  .detail-label,\n  .detail-value,\n  .status-label,\n  .status-badge,\n  .delete-btn,\n  .edit-btn {\n    font-size: 0.55rem;\n  }\n  .card-status {\n    margin-bottom: 0.84rem;\n    padding: 0.44rem;\n  }\n  .card-actions {\n    gap: 0.44rem;\n  }\n}\n@media (min-width: 1400px) {\n  .employees-page {\n    padding: 0 1rem;\n  }\n  .top-bar {\n    margin-bottom: 0.84rem;\n  }\n  .add-employee-btn {\n    padding: 0.27rem 0.54rem;\n    font-size: 0.3rem;\n  }\n  .toggle-btn {\n    padding: 0.3rem 0.54rem;\n    font-size: 0.57rem;\n  }\n  .search-input {\n    padding-left: 18px;\n  }\n  .employees-grid {\n    gap: 0.84rem;\n  }\n  .employee-card {\n    padding: 0.8rem;\n  }\n}\n@media (max-width: 360px) {\n  .employees-page {\n    padding: 0 0.75rem;\n  }\n  .employees-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n    margin-bottom: 1rem;\n  }\n  .employee-card {\n    padding: 1rem;\n    min-width: 0;\n    max-width: 100%;\n    box-sizing: border-box;\n    width: 100%;\n  }\n  .card-header {\n    margin-bottom: 0.75rem;\n  }\n  .employee-avatar {\n    width: 40px;\n    height: 40px;\n  }\n  .avatar-initials {\n    font-size: 1rem;\n  }\n  .employee-name {\n    font-size: 1.1rem;\n  }\n  .employee-job-title {\n    font-size: 0.8rem;\n  }\n  .card-divider {\n    margin: 0.75rem 0;\n  }\n  .card-details {\n    margin-bottom: 1rem;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .detail-row {\n    padding: 0.5rem 0;\n    min-width: 0;\n    overflow: hidden;\n  }\n  .detail-row:hover {\n    padding: 0.5rem;\n    margin: 0 -0.5rem;\n  }\n  .detail-label {\n    font-size: 0.75rem;\n    min-width: 60px;\n    flex-shrink: 0;\n  }\n  .detail-value {\n    font-size: 0.75rem;\n    margin: 0 0.25rem;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex: 1;\n  }\n  .copy-btn {\n    padding: 0.2rem;\n    flex-shrink: 0;\n  }\n  .copy-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n  .detail-icon {\n    flex-shrink: 0;\n  }\n  .detail-icon svg {\n    width: 14px;\n    height: 14px;\n  }\n  .card-status {\n    margin-bottom: 1rem;\n    padding: 0.5rem;\n  }\n  .status-label {\n    font-size: 0.75rem;\n  }\n  .status-badge {\n    font-size: 0.7rem;\n    padding: 0.2rem 0.5rem;\n  }\n  .card-actions {\n    gap: 0.5rem;\n    padding-top: 0.75rem;\n  }\n  .delete-btn,\n  .edit-btn {\n    padding: 0.6rem;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=employees-IE7A7C4J.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Employees, { className: "Employees", filePath: "src/app/components/employees/employees-list/employees.ts", lineNumber: 16 });
})();

// src/app/components/employees/edit-employee/edit-employee.ts
function EditEmployee_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("firstName"), " ");
  }
}
function EditEmployee_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("lastName"), " ");
  }
}
function EditEmployee_div_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("password"), " ");
  }
}
function EditEmployee_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "label", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
    \u0275\u0275template(4, EditEmployee_div_34_div_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("employees.password"));
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ctx_r0.isFieldInvalid("password"));
    \u0275\u0275property("placeholder", ctx_r0.translate("employees.password_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("password"));
  }
}
function EditEmployee_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("jobTitle"), " ");
  }
}
function EditEmployee_option_52_Template(rf, ctx) {
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
function EditEmployee_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("departmentId"), " ");
  }
}
function EditEmployee_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", role_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRoleDisplayName(role_r3), " ");
  }
}
function EditEmployee_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("role"), " ");
  }
}
function EditEmployee_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("hireDate"), " ");
  }
}
function EditEmployee_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentLang() === "ar" ? dept_r4.nameAr : dept_r4.nameEn, " ");
  }
}
function EditEmployee_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("departmentId"), " ");
  }
}
function EditEmployee_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("phoneNumber"), " ");
  }
}
function EditEmployee_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("nationalId"), " ");
  }
}
function EditEmployee_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("timeZone"), " ");
  }
}
function EditEmployee_span_111_Template(rf, ctx) {
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
function EditEmployee_span_112_Template(rf, ctx) {
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
function EditEmployee_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "div", 55);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 56);
    \u0275\u0275element(4, "polyline", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
var EditEmployee = class _EditEmployee {
  formBuilder = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  employeesService = inject(EmployeesService);
  departmentsService = inject(DepartmentService);
  translationService = inject(TranslationService);
  langService = inject(LangService);
  rolesService = inject(RolesService);
  profileService = inject(ProfileService);
  // Form
  employeeForm;
  // Data
  employee = signal(null, ...ngDevMode ? [{ debugName: "employee" }] : []);
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  // UI State
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  showSuccessDialog = signal(false, ...ngDevMode ? [{ debugName: "showSuccessDialog" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Language
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  ngOnInit() {
    this.initializeForm();
    this.loadDepartments();
    this.loadRoles();
    this.loadEmployee();
    this.initializeLanguage();
  }
  initializeLanguage() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: [""],
      jobTitle: ["", [Validators.required]],
      phoneNumber: ["", [Validators.pattern(/^[+]?[\d\s\-\(\)]{5,}$/)]],
      nationalId: [""],
      hireDate: [""],
      departmentId: [""],
      timeZone: ["Asia/Dubai"],
      role: [""]
    });
  }
  loadDepartments() {
    this.departmentsService.getDepartmentNames().subscribe({
      next: (departments) => {
        this.departments.set(departments);
      },
      error: (error) => {
        console.error("Error loading departments:", error);
      }
    });
  }
  loadRoles() {
    this.rolesService.getRoles().subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.items) {
          this.roles.set(response.data.items);
        }
      },
      error: (error) => {
        console.error("Error loading roles:", error);
      }
    });
  }
  loadEmployee() {
    const employeeId = this.route.snapshot.paramMap.get("id");
    if (!employeeId) {
      console.error("No employee ID provided");
      return;
    }
    this.employeesService.getEmployee(employeeId).subscribe({
      next: (response) => {
        let employee;
        if (response.data) {
          employee = response.data;
        } else if (response.id) {
          employee = response;
        } else {
          console.error("Invalid employee response format:", response);
          return;
        }
        this.employee.set(employee);
        this.populateForm(employee);
      },
      error: (error) => {
        console.error("Error loading employee:", error);
      }
    });
  }
  populateForm(employee) {
    if (this.employeeForm) {
      const formValues = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        jobTitle: employee.jobTitle,
        phoneNumber: employee.phoneNumber,
        nationalId: employee.nationalId,
        hireDate: this.formatDateForInput(employee.hireDate),
        departmentId: employee.departmentId,
        timeZone: employee.timeZone,
        role: employee.roles && employee.roles.length > 0 ? employee.roles[0] : ""
      };
      this.employeeForm.patchValue(formValues);
    } else {
      console.error("Form not initialized yet");
    }
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }
  isFieldInvalid(fieldName) {
    const field = this.employeeForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted()));
  }
  getErrorMessage(fieldName) {
    const field = this.employeeForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["email"]) {
        return this.translate("login.email_invalid");
      }
      if (field.errors["minlength"]) {
        const requiredLength = field.errors["minlength"].requiredLength;
        return this.translate("common.min_length").replace("%min%", requiredLength.toString());
      }
      if (field.errors["pattern"]) {
        if (fieldName === "phoneNumber") {
          return this.translate("users.phone_invalid_format");
        }
        if (fieldName === "nationalId") {
          return this.translate("common.field_required");
        }
      }
    }
    return "";
  }
  showSuccessMessage(message) {
    this.successMessage.set(message);
    this.showSuccessDialog.set(true);
    setTimeout(() => {
      this.showSuccessDialog.set(false);
      this.successMessage.set("");
    }, 3e3);
  }
  onSubmit() {
    this.submitted.set(true);
    if (this.employeeForm.invalid) {
      return;
    }
    this.submitting.set(true);
    const employeeId = this.employee()?.id;
    if (!employeeId) {
      console.error("No employee ID available");
      this.submitting.set(false);
      return;
    }
    const formValue = this.employeeForm.value;
    const employeeData = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      jobTitle: formValue.jobTitle,
      timeZone: formValue.timeZone || "Asia/Dubai"
    };
    if (formValue.departmentId) {
      employeeData.departmentId = parseInt(formValue.departmentId);
    }
    if (formValue.phoneNumber && formValue.phoneNumber.trim()) {
      employeeData.phoneNumber = formValue.phoneNumber.trim();
    }
    if (formValue.nationalId && formValue.nationalId.trim()) {
      employeeData.nationalId = formValue.nationalId.trim();
    }
    if (formValue.hireDate && formValue.hireDate.trim()) {
      employeeData.hireDate = formValue.hireDate;
    }
    this.employeesService.updateEmployee(employeeId, employeeData).subscribe({
      next: (response) => {
        const selectedRole = formValue.role;
        if (selectedRole && selectedRole.trim()) {
          this.updateUserRole(employeeId, selectedRole.trim());
        } else {
          this.submitting.set(false);
          this.showSuccessMessage(this.translate("employees.employee_updated_successfully"));
          setTimeout(() => {
            this.router.navigate(["/employees"]);
          }, 2e3);
        }
      },
      error: (error) => {
        console.error("Error updating employee:", error);
        console.error("Error details:", error.error);
        this.submitting.set(false);
        this.showSuccessMessage(this.translate("employees.employee_updated_successfully"));
        setTimeout(() => {
          this.router.navigate(["/employees"]);
        }, 2e3);
      }
    });
  }
  /**
   * Update user role using the ProfileService
   */
  updateUserRole(userId, role) {
    this.profileService.updateUserRole(userId, role).subscribe({
      next: (response) => {
        this.submitting.set(false);
        this.showSuccessMessage(this.translate("employees.employee_updated_successfully"));
        setTimeout(() => {
          this.router.navigate(["/employees"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error updating user role:", error);
        this.submitting.set(false);
        this.showSuccessMessage(this.translate("employees.employee_updated_successfully"));
        setTimeout(() => {
          this.router.navigate(["/employees"]);
        }, 2e3);
      }
    });
  }
  goBack() {
    this.router.navigate(["/employees"]);
  }
  // Translation helper
  translate(key) {
    return this.translationService.translate(key);
  }
  getRoleDisplayName(role) {
    const currentLang = this.currentLang();
    if (currentLang === "ar" && role.arabicName) {
      return role.arabicName;
    }
    return role.name;
  }
  getRoleDisplayNameFromString(roleName) {
    const role = this.roles().find((r) => r.name === roleName);
    if (role) {
      return this.getRoleDisplayName(role);
    }
    return roleName;
  }
  static \u0275fac = function EditEmployee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditEmployee)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEmployee, selectors: [["app-edit-employee"]], standalone: false, decls: 114, vars: 73, consts: [[1, "edit-employee-page"], [1, "page-header", "rounded-top-4"], [1, "header-content"], ["type", "button", 1, "back-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "header-text"], [1, "employee-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "firstName", 1, "form-label"], [1, "required"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "readonly", "", 1, "form-control", 3, "placeholder"], ["class", "form-group", 4, "ngIf"], [1, "form-row-triple"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "id", "jobTitle", "formControlName", "jobTitle", 1, "form-control", 3, "placeholder"], ["for", "departmentId", 1, "form-label"], ["id", "departmentId", "formControlName", "departmentId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "role", 1, "form-label"], ["id", "role", "formControlName", "role", 1, "form-control"], ["for", "hireDate", 1, "form-label"], ["type", "date", "id", "hireDate", "formControlName", "hireDate", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], ["for", "nationalId", 1, "form-label"], ["type", "text", "id", "nationalId", "formControlName", "nationalId", 1, "form-control", 3, "placeholder"], ["for", "timeZone", 1, "form-label"], ["id", "timeZone", "formControlName", "timeZone", 1, "form-control"], ["value", "Asia/Dubai"], ["value", "Africa/Cairo"], ["value", "Europe/London"], ["value", "America/New_York"], ["value", "UTC"], ["value", "Australia/Sydney"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "success-dialog", 4, "ngIf"], [1, "form-error"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "formControlName", "password", 1, "form-control", 3, "placeholder"], [3, "value"], [1, "success-dialog"], [1, "dialog-content"], [1, "dialog-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "20,6 9,17 4,12"], [1, "dialog-message"]], template: function EditEmployee_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function EditEmployee_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function EditEmployee_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "h3", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "input", 14);
      \u0275\u0275template(21, EditEmployee_div_21_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementStart(25, "span", 13);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275template(28, EditEmployee_div_28_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "label", 18);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, EditEmployee_div_34_Template, 5, 5, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 8)(36, "h3", 9);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 21)(39, "div", 11)(40, "label", 22);
      \u0275\u0275text(41);
      \u0275\u0275elementStart(42, "span", 13);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "input", 23);
      \u0275\u0275template(45, EditEmployee_div_45_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 11)(47, "label", 24);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "select", 25)(50, "option", 26);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, EditEmployee_option_52_Template, 2, 2, "option", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, EditEmployee_div_53_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 10)(55, "div", 11)(56, "label", 28);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "select", 29)(59, "option", 26);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, EditEmployee_option_61_Template, 2, 2, "option", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, EditEmployee_div_62_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 11)(64, "label", 30);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 31);
      \u0275\u0275template(67, EditEmployee_div_67_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 21)(69, "div", 11)(70, "label", 24);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "select", 25)(73, "option", 26);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, EditEmployee_option_75_Template, 2, 2, "option", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, EditEmployee_div_76_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 11)(78, "label", 32);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "input", 33);
      \u0275\u0275template(81, EditEmployee_div_81_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 11)(83, "label", 34);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd();
      \u0275\u0275element(85, "input", 35);
      \u0275\u0275template(86, EditEmployee_div_86_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 10)(88, "div", 11)(89, "label", 36);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "select", 37)(92, "option", 26);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "option", 38);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "option", 39);
      \u0275\u0275text(97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "option", 40);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "option", 41);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "option", 42);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "option", 43);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(106, EditEmployee_div_106_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "div", 44)(108, "button", 45);
      \u0275\u0275listener("click", function EditEmployee_Template_button_click_108_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "button", 46);
      \u0275\u0275template(111, EditEmployee_span_111_Template, 2, 1, "span", 47)(112, EditEmployee_span_112_Template, 2, 1, "span", 47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(113, EditEmployee_div_113_Template, 7, 1, "div", 48);
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.edit_employee"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.employeeForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.personal_information"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.first_name"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275property("placeholder", ctx.translate("employees.first_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.last_name"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275property("placeholder", ctx.translate("employees.last_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.email"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("employees.email_help"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.employeeForm.get("password"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.job_information"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.job_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275property("placeholder", ctx.translate("employees.job_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.department"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_department"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.roles"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_role"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.roles());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.hire_date"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.department"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_department"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.phone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275property("placeholder", ctx.translate("employees.phone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.national_id"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("nationalId"));
      \u0275\u0275property("placeholder", ctx.translate("employees.national_id_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("nationalId"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.time_zone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_time_zone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.asia_dubai"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.africa_cairo"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.europe_london"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.america_new_york"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.utc_time_zone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.australia_sydney"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.back"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  color: red !important;\n  font-size: 12px;\n  margin-top: 5px;\n  display: block !important;\n}\n.invalid[_ngcontent-%COMP%] {\n  border-color: #e74c3c !important;\n}\n.edit-employee-page[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.edit-employee-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #c4a055 100%);\n  color: white !important;\n  padding: 6px 10px;\n  box-shadow: 0 2px 8px rgba(212, 175, 95, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: white !important;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.35rem 0.5rem;\n  cursor: pointer;\n  color: white !important;\n  border-radius: 0.375rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid white;\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151 !important;\n  border: 1px solid white;\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.22rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n  margin: 0;\n  font-size: 0.85rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.employee-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  transition: box-shadow 0.3s ease;\n}\n.employee-form[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.8rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.9rem 0;\n  padding-left: 0.6rem;\n  border-left: 3px solid #d4af5f;\n  display: flex;\n  align-items: center;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.form-row-triple[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n@media (max-width: 1200px) {\n  .form-row-triple[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .form-row-triple[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.65rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.3rem;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.65rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.45rem 0.7rem;\n  border: 1.25px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n  min-height: 36px;\n  font-family: inherit;\n  background-color: #fafafa;\n}\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background-color: #ffffff;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #b68a35;\n  box-shadow: 0 0 0 2px rgba(212, 175, 95, 0.15);\n  background-color: #ffffff;\n}\n.form-control.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-control.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.15);\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.4rem;\n  color: #6b7280;\n  font-size: 0.75rem;\n  font-style: italic;\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-error[_ngcontent-%COMP%]::before {\n  content: "\\26a0";\n  font-size: 1rem;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-employee-page[_ngcontent-%COMP%] {\n  max-width: 1050px;\n}\n.employee-form[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n}\n@media (min-width: 1400px) {\n  .edit-employee-page[_ngcontent-%COMP%] {\n    max-width: 1150px;\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f3f4f6;\n}\n@media (max-width: 768px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.45rem 1.1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 34px;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #b89145 100%);\n  color: #ffffff;\n  box-shadow: 0 2px 4px rgba(212, 175, 95, 0.2);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c4a055 0%,\n      #a87d2a 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(212, 175, 95, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #4b5563 !important;\n  border: 1.25px solid #d1d5db;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n  color: #1f2937 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.edit-employee-page.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.edit-employee-page.rtl[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .edit-employee-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .employee-form[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .upload-area[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .preview-image[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n}\n@media (max-width: 480px) {\n  .edit-employee-page[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .employee-form[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .upload-area[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .upload-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .upload-requirements[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n.success-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  background: #2ba149;\n  color: white;\n  padding: 0.8rem 1.2rem;\n  border-radius: 0.4rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 240px;\n}\n.dialog-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-dialog[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInLeft 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=edit-employee-U2BE5R3A.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEmployee, [{
    type: Component,
    args: [{ selector: "app-edit-employee", standalone: false, template: `<div class="edit-employee-page " [class.rtl]="isRTL()">\r
  <!-- Page Header -->\r
  <div class="page-header rounded-top-4">\r
    <div class="header-content">\r
      <button type="button" class="back-btn" (click)="goBack()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <polyline points="15,18 9,12 15,6"></polyline>\r
        </svg>\r
        {{ translate('common.back') }}\r
      </button>\r
      <div class="header-text">\r
        <h1>{{ translate('employees.edit_employee') }}</h1>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Employee Form -->\r
  <form class="employee-form" [formGroup]="employeeForm" (ngSubmit)="onSubmit()">\r
\r
    <!-- Personal Information Section -->\r
    <div class="form-section">\r
      <h3 class="section-title">{{ translate('employees.personal_information') }}</h3>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="firstName">\r
            {{ translate('employees.first_name') }} <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="firstName"\r
            formControlName="firstName"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('firstName')"\r
            [placeholder]="translate('employees.first_name_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('firstName')">\r
            {{ getErrorMessage('firstName') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="lastName">\r
            {{ translate('employees.last_name') }} <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="lastName"\r
            formControlName="lastName"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('lastName')"\r
            [placeholder]="translate('employees.last_name_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('lastName')">\r
            {{ getErrorMessage('lastName') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="email">{{ translate('employees.email') }}</label>\r
          <input\r
            type="email"\r
            id="email"\r
            formControlName="email"\r
            class="form-control"\r
            readonly\r
            [placeholder]="translate('employees.email_help')">\r
        </div>\r
\r
        <div class="form-group" *ngIf="employeeForm.get('password')">\r
          <label class="form-label" for="password">{{ translate('employees.password') }}</label>\r
          <input\r
            type="password"\r
            id="password"\r
            formControlName="password"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('password')"\r
            [placeholder]="translate('employees.password_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('password')">\r
            {{ getErrorMessage('password') }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Job & Contact Information Section (Combined) -->\r
    <div class="form-section">\r
      <h3 class="section-title">{{ translate('employees.job_information') }}</h3>\r
\r
      <div class="form-row-triple">\r
        <div class="form-group">\r
          <label class="form-label" for="jobTitle">\r
            {{ translate('employees.job_title') }} <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="jobTitle"\r
            formControlName="jobTitle"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('jobTitle')"\r
            [placeholder]="translate('employees.job_title_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('jobTitle')">\r
            {{ getErrorMessage('jobTitle') }}\r
          </div>\r
        </div>\r
\r
\r
        <div class="form-group">\r
          <label class="form-label" for="departmentId">{{ translate('employees.department') }}</label>\r
          <select\r
            id="departmentId"\r
            formControlName="departmentId"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('departmentId')">\r
            <option value="">{{ translate('employees.select_department') }}</option>\r
            <option *ngFor="let dept of departments()" [value]="dept.id">\r
              {{ currentLang() === 'ar' ? dept.nameAr : dept.nameEn }}\r
            </option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('departmentId')">\r
            {{ getErrorMessage('departmentId') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Roles + Hire Date Row -->\r
      <div class="form-row">\r
        <div class="form-group">\r
\r
          <label class="form-label" for="role">{{ translate('employees.roles') }}</label>\r
          <select\r
            id="role"\r
            formControlName="role"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('role')">\r
            <option value="">{{ translate('employees.select_role') }}</option>\r
            <option *ngFor="let role of roles()" [value]="role.name">\r
              {{ getRoleDisplayName(role) }}\r
            </option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('role')">\r
            {{ getErrorMessage('role') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="hireDate">{{ translate('employees.hire_date') }}</label>\r
          <input\r
            type="date"\r
            id="hireDate"\r
            formControlName="hireDate"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('hireDate')">\r
          <div class="form-error" *ngIf="isFieldInvalid('hireDate')">\r
            {{ getErrorMessage('hireDate') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row-triple">\r
        <div class="form-group">\r
          <label class="form-label" for="departmentId">{{ translate('employees.department') }}</label>\r
          <select\r
            id="departmentId"\r
            formControlName="departmentId"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('departmentId')">\r
            <option value="">{{ translate('employees.select_department') }}</option>\r
            <option *ngFor="let dept of departments()" [value]="dept.id">\r
              {{ currentLang() === 'ar' ? dept.nameAr : dept.nameEn }}\r
            </option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('departmentId')">\r
            {{ getErrorMessage('departmentId') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="phoneNumber">{{ translate('employees.phone') }}</label>\r
          <input\r
            type="tel"\r
            id="phoneNumber"\r
            formControlName="phoneNumber"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('phoneNumber')"\r
            [placeholder]="translate('employees.phone_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('phoneNumber')">\r
            {{ getErrorMessage('phoneNumber') }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="nationalId">{{ translate('employees.national_id') }}</label>\r
          <input\r
            type="text"\r
            id="nationalId"\r
            formControlName="nationalId"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('nationalId')"\r
            [placeholder]="translate('employees.national_id_placeholder')">\r
          <div class="form-error" *ngIf="isFieldInvalid('nationalId')">\r
            {{ getErrorMessage('nationalId') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="timeZone">{{ translate('employees.time_zone') }}</label>\r
          <select id="timeZone" formControlName="timeZone" class="form-control" [class.invalid]="isFieldInvalid('timeZone')">\r
            <option value="">{{ translate("employees.select_time_zone") }}</option>\r
            <option value="Asia/Dubai">{{ translate("employees.asia_dubai") }}</option>\r
            <option value="Africa/Cairo">{{ translate("employees.africa_cairo") }}</option>\r
            <option value="Europe/London">{{ translate("employees.europe_london") }}</option>\r
            <option value="America/New_York">{{ translate("employees.america_new_york") }}</option>\r
            <option value="UTC">{{ translate("employees.utc_time_zone") }}</option>\r
            <option value="Australia/Sydney">{{ translate("employees.australia_sydney") }}</option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('timeZone')">\r
            {{ getErrorMessage('timeZone') }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Form Actions -->\r
    <div class="form-actions">\r
      <button type="button" class="btn btn-secondary" (click)="goBack()">\r
        {{ translate('common.back') }}\r
      </button>\r
      <button type="submit" class="btn btn-primary" [disabled]="submitting()">\r
        <span *ngIf="!submitting()">{{ translate('common.save') }}</span>\r
        <span *ngIf="submitting()">{{ translate('common.saving') }}</span>\r
      </button>\r
    </div>\r
  </form>\r
</div>\r
\r
<!-- Success Dialog -->\r
<div class="success-dialog" *ngIf="showSuccessDialog()">\r
  <div class="dialog-content">\r
    <div class="dialog-icon">\r
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <polyline points="20,6 9,17 4,12"></polyline>\r
      </svg>\r
    </div>\r
    <div class="dialog-message">\r
      {{ successMessage() }}\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/employees/edit-employee/edit-employee.css */\n.invalid-feedback {\n  color: red !important;\n  font-size: 12px;\n  margin-top: 5px;\n  display: block !important;\n}\n.invalid {\n  border-color: #e74c3c !important;\n}\n.edit-employee-page {\n  padding: 0 1.25rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.edit-employee-page.rtl {\n  direction: rtl;\n}\n.page-header {\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #c4a055 100%);\n  color: white !important;\n  padding: 6px 10px;\n  box-shadow: 0 2px 8px rgba(212, 175, 95, 0.2);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: white !important;\n}\n.back-btn {\n  background: none;\n  border: none;\n  padding: 0.35rem 0.5rem;\n  cursor: pointer;\n  color: white !important;\n  border-radius: 0.375rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid white;\n}\n.back-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.back-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151 !important;\n  border: 1px solid white;\n}\n.header-text {\n  flex: 1;\n}\n.header-text h1 {\n  font-size: 1.22rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.header-text p {\n  color: white !important;\n  margin: 0;\n  font-size: 0.85rem;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.employee-form {\n  background: #ffffff;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  transition: box-shadow 0.3s ease;\n}\n.employee-form:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.form-section {\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.8rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.section-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.9rem 0;\n  padding-left: 0.6rem;\n  border-left: 3px solid #d4af5f;\n  display: flex;\n  align-items: center;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.form-row-triple {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.span-2 {\n  grid-column: span 2;\n}\n@media (max-width: 1200px) {\n  .form-row-triple {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .form-row-triple {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.form-group {\n  margin-bottom: 0.65rem;\n}\n.form-label {\n  display: block;\n  margin-bottom: 0.3rem;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.65rem;\n}\n.required {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-control {\n  width: 100%;\n  padding: 0.45rem 0.7rem;\n  border: 1.25px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n  min-height: 36px;\n  font-family: inherit;\n  background-color: #fafafa;\n}\n.form-control:hover {\n  border-color: #d1d5db;\n  background-color: #ffffff;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #b68a35;\n  box-shadow: 0 0 0 2px rgba(212, 175, 95, 0.15);\n  background-color: #ffffff;\n}\n.form-control.invalid {\n  border-color: #dc2626;\n}\n.form-control.invalid:focus {\n  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.15);\n}\n.form-control[readonly] {\n  background-color: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help {\n  display: block;\n  margin-top: 0.4rem;\n  color: #6b7280;\n  font-size: 0.75rem;\n  font-style: italic;\n}\n.form-error {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-error::before {\n  content: "\\26a0";\n  font-size: 1rem;\n}\n.file-input {\n  display: none;\n}\n.edit-employee-page {\n  max-width: 1050px;\n}\n.employee-form {\n  padding: 1.25rem 1.5rem;\n}\n@media (min-width: 1400px) {\n  .edit-employee-page {\n    max-width: 1150px;\n  }\n}\n.form-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f3f4f6;\n}\n@media (max-width: 768px) {\n  .form-actions {\n    flex-direction: column;\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.45rem 1.1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 34px;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #b89145 100%);\n  color: #ffffff;\n  box-shadow: 0 2px 4px rgba(212, 175, 95, 0.2);\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c4a055 0%,\n      #a87d2a 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(212, 175, 95, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-secondary {\n  background-color: #ffffff;\n  color: #4b5563 !important;\n  border: 1.25px solid #d1d5db;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n  color: #1f2937 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.edit-employee-page.rtl .form-actions {\n  justify-content: flex-start;\n}\n.edit-employee-page.rtl .form-row {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .edit-employee-page {\n    padding: 1rem;\n  }\n  .employee-form {\n    padding: 1.25rem;\n  }\n  .page-title {\n    font-size: 1.4rem;\n  }\n  .section-title {\n    font-size: 1rem;\n  }\n  .upload-area {\n    padding: 1.25rem;\n  }\n  .preview-image {\n    width: 90px;\n    height: 90px;\n  }\n}\n@media (max-width: 480px) {\n  .edit-employee-page {\n    padding: 0.5rem;\n  }\n  .employee-form {\n    padding: 0.85rem;\n  }\n  .form-row {\n    gap: 0.75rem;\n  }\n  .form-group {\n    margin-bottom: 1rem;\n  }\n  .upload-area {\n    padding: 0.85rem;\n  }\n  .upload-text {\n    font-size: 0.9rem;\n  }\n  .upload-requirements {\n    font-size: 0.7rem;\n  }\n}\n.success-dialog {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: slideInRight 0.3s ease-out;\n}\n.dialog-content {\n  background: #2ba149;\n  color: white;\n  padding: 0.8rem 1.2rem;\n  border-radius: 0.4rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 240px;\n}\n.dialog-icon {\n  flex-shrink: 0;\n}\n.dialog-icon svg {\n  color: white;\n}\n.dialog-message {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl] .success-dialog {\n  right: auto;\n  left: 20px;\n}\n[dir=rtl] .success-dialog {\n  animation: slideInLeft 0.3s ease-out;\n}\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=edit-employee-U2BE5R3A.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEmployee, { className: "EditEmployee", filePath: "src/app/components/employees/edit-employee/edit-employee.ts", lineNumber: 29 });
})();

// src/app/components/employees/add-employee/add-employee.ts
function AddEmployee_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("firstName"), " ");
  }
}
function AddEmployee_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("lastName"), " ");
  }
}
function AddEmployee_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("email"), " ");
  }
}
function AddEmployee__svg_svg_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 56)(2, "circle", 57);
    \u0275\u0275elementEnd();
  }
}
function AddEmployee__svg_svg_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 58)(2, "line", 59);
    \u0275\u0275elementEnd();
  }
}
function AddEmployee_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("password"), " ");
  }
}
function AddEmployee_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("jobTitle"), " ");
  }
}
function AddEmployee_option_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", role_r2.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRoleDisplayName(role_r2), " ");
  }
}
function AddEmployee_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("role"), " ");
  }
}
function AddEmployee_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("hireDate"), " ");
  }
}
function AddEmployee_option_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 60);
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
function AddEmployee_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("departmentId"), " ");
  }
}
function AddEmployee_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("phoneNumber"), " ");
  }
}
function AddEmployee_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("nationalId"), " ");
  }
}
function AddEmployee_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getErrorMessage("timeZone"), " ");
  }
}
function AddEmployee_span_117_Template(rf, ctx) {
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
function AddEmployee_span_118_Template(rf, ctx) {
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
function AddEmployee_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 64);
    \u0275\u0275element(4, "circle", 65)(5, "line", 66)(6, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 68);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dir", ctx_r0.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function AddEmployee_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 62)(2, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 64);
    \u0275\u0275element(4, "polyline", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 68);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
var AddEmployee = class _AddEmployee {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  employeesService = inject(EmployeesService);
  departmentsService = inject(DepartmentService);
  translationService = inject(TranslationService);
  langService = inject(LangService);
  rolesService = inject(RolesService);
  // Form
  employeeForm;
  // Data
  departments = signal([], ...ngDevMode ? [{ debugName: "departments" }] : []);
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  // UI State
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  showSuccessDialog = signal(false, ...ngDevMode ? [{ debugName: "showSuccessDialog" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  showErrorDialog = signal(false, ...ngDevMode ? [{ debugName: "showErrorDialog" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  // Language
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  errorTimeoutId = null;
  ngOnInit() {
    this.initializeForm();
    this.loadDepartments();
    this.loadRoles();
    this.initializeLanguage();
  }
  ngOnDestroy() {
    this.hideErrorMessage();
  }
  initializeLanguage() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  initializeForm() {
    this.employeeForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordStrengthValidator()
        ]
      ],
      jobTitle: ["", [Validators.required]],
      role: ["", [Validators.required]],
      phoneNumber: ["", [Validators.pattern(/^[+]?[\d\s\-\(\)]{5,}$/)]],
      nationalId: [""],
      hireDate: [""],
      departmentId: [""],
      timeZone: ["Asia/Dubai"]
    });
  }
  passwordStrengthValidator() {
    return (control) => {
      const password = control.value;
      if (!password)
        return null;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
        return null;
      }
      return { passwordStrength: true };
    };
  }
  loadDepartments() {
    this.departmentsService.getDepartmentNames().subscribe({
      next: (departments) => {
        this.departments.set(departments);
      },
      error: (error) => {
        console.error("Error loading departments:", error);
      }
    });
  }
  loadRoles() {
    this.rolesService.getRoles().subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.items) {
          this.roles.set(response.data.items);
        }
      },
      error: (error) => {
        console.error("Error loading roles:", error);
      }
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.employeeForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted()));
  }
  getErrorMessage(fieldName) {
    const field = this.employeeForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["email"]) {
        return this.translate("login.email_invalid");
      }
      if (field.errors["minlength"]) {
        const requiredLength = field.errors["minlength"].requiredLength;
        return this.translate("common.min_length").replace("%min%", requiredLength.toString());
      }
      if (field.errors["passwordStrength"]) {
        return this.translate("reset_password.password_strength_error");
      }
      if (field.errors["pattern"]) {
        if (fieldName === "phoneNumber") {
          return this.translate("users.phone_invalid_format");
        }
        if (fieldName === "nationalId") {
          return this.translate("common.field_required");
        }
      }
    }
    return "";
  }
  showSuccessMessage(message) {
    this.hideErrorMessage();
    this.successMessage.set(message);
    this.showSuccessDialog.set(true);
    setTimeout(() => {
      this.showSuccessDialog.set(false);
      this.successMessage.set("");
    }, 3e3);
  }
  onSubmit() {
    this.submitted.set(true);
    if (this.employeeForm.invalid) {
      return;
    }
    this.submitting.set(true);
    const formValue = this.employeeForm.value;
    const employeeData = {
      email: formValue.email,
      password: formValue.password,
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      jobTitle: formValue.jobTitle,
      role: formValue.role,
      timeZone: formValue.timeZone || "Asia/Dubai"
    };
    if (formValue.departmentId) {
      employeeData.departmentId = parseInt(formValue.departmentId);
    }
    if (formValue.phoneNumber && formValue.phoneNumber.trim()) {
      employeeData.phoneNumber = formValue.phoneNumber.trim();
    }
    if (formValue.nationalId && formValue.nationalId.trim()) {
      employeeData.nationalId = formValue.nationalId.trim();
    }
    if (formValue.hireDate && formValue.hireDate.trim()) {
      employeeData.hireDate = formValue.hireDate;
    }
    this.employeesService.addEmployee(employeeData).subscribe({
      next: (response) => {
        this.submitting.set(false);
        this.showSuccessMessage(this.translate("employees.employee_created_successfully"));
        this.employeeForm.reset();
        this.submitted.set(false);
        setTimeout(() => {
          this.router.navigate(["/employees"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error creating employee:", error);
        this.submitting.set(false);
        const backendMessage = error?.error?.message;
        let message = this.translate("employees.employee_create_failed");
        if (backendMessage) {
          const lowerMsg = backendMessage.toLowerCase();
          if (lowerMsg.includes("email") && lowerMsg.includes("exists")) {
            message = this.translate("employees.employee_email_exists");
          } else {
            message = backendMessage;
          }
        } else if (error?.message) {
          message = error.message;
        }
        this.showErrorMessage(message);
      }
    });
  }
  goBack() {
    this.router.navigate(["/employees"]);
  }
  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }
  showErrorMessage(message) {
    this.hideErrorMessage();
    this.errorMessage.set(message);
    this.showErrorDialog.set(true);
    this.errorTimeoutId = setTimeout(() => {
      this.hideErrorMessage();
    }, 5e3);
  }
  hideErrorMessage() {
    if (this.errorTimeoutId) {
      clearTimeout(this.errorTimeoutId);
      this.errorTimeoutId = null;
    }
    this.showErrorDialog.set(false);
    this.errorMessage.set("");
  }
  // Translation helper
  translate(key) {
    return this.translationService.translate(key);
  }
  getRoleDisplayName(role) {
    const currentLang = this.currentLang();
    if (currentLang === "ar" && role.arabicName) {
      return role.arabicName;
    }
    return role.name;
  }
  static \u0275fac = function AddEmployee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEmployee)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEmployee, selectors: [["app-add-employee"]], standalone: false, decls: 121, vars: 79, consts: [[1, "add-employee-page"], [1, "page-header", "rounded-top-4"], [1, "header-content"], ["type", "button", 1, "back-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "header-text"], [1, "employee-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-row"], [1, "form-group"], ["for", "firstName", 1, "form-label"], [1, "required"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["class", "form-error", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "password", 1, "form-label"], [1, "password-input-wrapper"], ["id", "password", "formControlName", "password", 1, "form-control", 3, "type", "placeholder"], ["type", "button", 1, "password-toggle-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "form-row-triple"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "id", "jobTitle", "formControlName", "jobTitle", 1, "form-control", 3, "placeholder"], ["for", "role", 1, "form-label"], ["id", "role", "formControlName", "role", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "hireDate", 1, "form-label"], ["type", "date", "id", "hireDate", "formControlName", "hireDate", 1, "form-control"], ["for", "departmentId", 1, "form-label"], ["id", "departmentId", "formControlName", "departmentId", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], ["for", "nationalId", 1, "form-label"], ["type", "text", "id", "nationalId", "formControlName", "nationalId", 1, "form-control", 3, "placeholder"], ["for", "timeZone", 1, "form-label"], ["id", "timeZone", "formControlName", "timeZone", 1, "form-control"], ["value", "Asia/Dubai"], ["value", "Africa/Cairo"], ["value", "Europe/London"], ["value", "America/New_York"], ["value", "UTC"], ["value", "Australia/Sydney"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["class", "error-dialog", 4, "ngIf"], ["class", "success-dialog", 4, "ngIf"], [1, "form-error"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [3, "value"], [1, "error-dialog"], [1, "dialog-content"], [1, "dialog-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "dialog-message"], [1, "success-dialog"], ["points", "20,6 9,17 4,12"]], template: function AddEmployee_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function AddEmployee_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddEmployee_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 8)(12, "h3", 9);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "input", 14);
      \u0275\u0275template(21, AddEmployee_div_21_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementStart(25, "span", 13);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275template(28, AddEmployee_div_28_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "label", 18);
      \u0275\u0275text(32);
      \u0275\u0275elementStart(33, "span", 13);
      \u0275\u0275text(34, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(35, "input", 19);
      \u0275\u0275template(36, AddEmployee_div_36_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 11)(38, "label", 20);
      \u0275\u0275text(39);
      \u0275\u0275elementStart(40, "span", 13);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 21);
      \u0275\u0275element(43, "input", 22);
      \u0275\u0275elementStart(44, "button", 23);
      \u0275\u0275listener("click", function AddEmployee_Template_button_click_44_listener() {
        return ctx.togglePasswordVisibility();
      });
      \u0275\u0275template(45, AddEmployee__svg_svg_45_Template, 3, 0, "svg", 24)(46, AddEmployee__svg_svg_46_Template, 3, 0, "svg", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, AddEmployee_div_47_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 8)(49, "h3", 9);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 25)(52, "div", 11)(53, "label", 26);
      \u0275\u0275text(54);
      \u0275\u0275elementStart(55, "span", 13);
      \u0275\u0275text(56, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(57, "input", 27);
      \u0275\u0275template(58, AddEmployee_div_58_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 11)(60, "label", 28);
      \u0275\u0275text(61);
      \u0275\u0275elementStart(62, "span", 13);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "select", 29)(65, "option", 30);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, AddEmployee_option_67_Template, 2, 2, "option", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(68, AddEmployee_div_68_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 11)(70, "label", 32);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 33);
      \u0275\u0275template(73, AddEmployee_div_73_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 25)(75, "div", 11)(76, "label", 34);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "select", 35)(79, "option", 30);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, AddEmployee_option_81_Template, 2, 2, "option", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, AddEmployee_div_82_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 11)(84, "label", 36);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 37);
      \u0275\u0275template(87, AddEmployee_div_87_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 11)(89, "label", 38);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "input", 39);
      \u0275\u0275template(92, AddEmployee_div_92_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 10)(94, "div", 11)(95, "label", 40);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "select", 41)(98, "option", 30);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "option", 42);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "option", 43);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "option", 44);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "option", 45);
      \u0275\u0275text(107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "option", 46);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "option", 47);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(112, AddEmployee_div_112_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "div", 48)(114, "button", 49);
      \u0275\u0275listener("click", function AddEmployee_Template_button_click_114_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "button", 50);
      \u0275\u0275template(117, AddEmployee_span_117_Template, 2, 1, "span", 51)(118, AddEmployee_span_118_Template, 2, 1, "span", 51);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(119, AddEmployee_div_119_Template, 9, 2, "div", 52)(120, AddEmployee_div_120_Template, 7, 1, "div", 53);
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.add_employee"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.employeeForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.personal_information"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.first_name"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("firstName"));
      \u0275\u0275property("placeholder", ctx.translate("employees.first_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("firstName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.last_name"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("lastName"));
      \u0275\u0275property("placeholder", ctx.translate("employees.last_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("lastName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.email"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275property("placeholder", ctx.translate("employees.email_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.password"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("password"));
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password")("placeholder", ctx.translate("employees.password_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? ctx.translate("login.hide") : ctx.translate("login.show"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("password"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.job_information"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.job_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275property("placeholder", ctx.translate("employees.job_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.roles"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_role"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.roles());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("role"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.hire_date"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("hireDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.department"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("employees.select_department"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("departmentId"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.phone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275property("placeholder", ctx.translate("employees.phone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("phoneNumber"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("employees.national_id"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("nationalId"));
      \u0275\u0275property("placeholder", ctx.translate("employees.national_id_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("nationalId"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("employees.time_zone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("invalid", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.select_time_zone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.asia_dubai"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.africa_cairo"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.europe_london"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.america_new_york"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.utc_time_zone"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("employees.australia_sydney"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("timeZone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.back"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showErrorDialog());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessDialog());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.add-employee-page[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.add-employee-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #c4a055 100%);\n  color: white !important;\n  padding: 6px 10px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(212, 175, 95, 0.2);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: white !important;\n}\n.back-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.35rem 0.5rem;\n  cursor: pointer;\n  color: white !important;\n  border-radius: 0.375rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid white;\n}\n.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151 !important;\n}\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n  margin: 0;\n  font-size: 0.85rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #5f646d;\n  margin: 0 0 0.4rem 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.employee-form[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  transition: box-shadow 0.3s ease;\n}\n.employee-form[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.8rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.9rem 0;\n  padding-left: 0.6rem;\n  border-left: 3px solid #d4af5f;\n  display: flex;\n  align-items: center;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.form-row-triple[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n@media (max-width: 1200px) {\n  .form-row-triple[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .form-row-triple[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.65rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.3rem;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.75rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.45rem 0.7rem;\n  border: 1.25px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n  min-height: 36px;\n  font-family: inherit;\n  background-color: #fafafa;\n}\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background-color: #ffffff;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #b68a35;\n  box-shadow: 0 0 0 2px rgba(212, 175, 95, 0.15);\n  background-color: #ffffff;\n}\n.form-control.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-control.invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-error[_ngcontent-%COMP%]::before {\n  content: "\\26a0";\n  font-size: 1rem;\n}\n.password-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 2.25rem;\n}\n.password-toggle-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s ease;\n  z-index: 10;\n}\n.password-toggle-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #b68a35;\n}\n.password-toggle-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  color: #b68a35;\n}\n.add-employee-page.rtl[_ngcontent-%COMP%]   .password-input-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 0.8rem;\n  padding-left: 2.25rem;\n}\n.add-employee-page.rtl[_ngcontent-%COMP%]   .password-toggle-btn[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0.6rem;\n}\n.file-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f3f4f6;\n}\n@media (max-width: 768px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.45rem 1.1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 34px;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #b89145 100%);\n  color: #ffffff;\n  box-shadow: 0 2px 4px rgba(212, 175, 95, 0.2);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c4a055 0%,\n      #a87d2a 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(212, 175, 95, 0.3);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #4b5563 !important;\n  border: 1.25px solid #d1d5db;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  font-weight: 600 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n  color: #1f2937 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.add-employee-page[_ngcontent-%COMP%] {\n  max-width: 1050px;\n}\n.employee-form[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n}\n@media (min-width: 1400px) {\n  .add-employee-page[_ngcontent-%COMP%] {\n    max-width: 1150px;\n  }\n}\n.add-employee-page.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.add-employee-page.rtl[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .add-employee-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .employee-form[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .upload-area[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .preview-image[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n}\n@media (max-width: 480px) {\n  .add-employee-page[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .employee-form[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .upload-area[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .upload-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .upload-requirements[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n.success-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  background: #2ba149;\n  color: white;\n  padding: 0.8rem 1.2rem;\n  border-radius: 0.4rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 240px;\n}\n.dialog-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.error-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.error-dialog[_ngcontent-%COMP%]   .dialog-content[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.error-dialog[_ngcontent-%COMP%]   .dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-dialog[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .success-dialog[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInLeft 0.3s ease-out;\n}\n[dir=rtl][_ngcontent-%COMP%]   .error-dialog[_ngcontent-%COMP%] {\n  right: auto;\n  left: 20px;\n  animation: _ngcontent-%COMP%_slideInLeft 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=add-employee-FY2PUPTG.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEmployee, [{
    type: Component,
    args: [{ selector: "app-add-employee", standalone: false, template: `<div class="add-employee-page" [class.rtl]="isRTL()">\r
  <!-- Page Header -->\r
  <div class="page-header rounded-top-4">\r
    <div class="header-content">\r
      <button type="button" class="back-btn" (click)="goBack()">\r
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
        {{ translate("common.back") }}\r
      </button>\r
      <div class="header-text">\r
        <h1>{{ translate("employees.add_employee") }}</h1>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Employee Form -->\r
  <form\r
    class="employee-form"\r
    [formGroup]="employeeForm"\r
    (ngSubmit)="onSubmit()"\r
  >\r
    <!-- Personal Information Section -->\r
    <div class="form-section">\r
      <h3 class="section-title">\r
        {{ translate("employees.personal_information") }}\r
      </h3>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="firstName">\r
            {{ translate("employees.first_name") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="firstName"\r
            formControlName="firstName"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('firstName')"\r
            [placeholder]="translate('employees.first_name_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('firstName')">\r
            {{ getErrorMessage("firstName") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="lastName">\r
            {{ translate("employees.last_name") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="lastName"\r
            formControlName="lastName"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('lastName')"\r
            [placeholder]="translate('employees.last_name_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('lastName')">\r
            {{ getErrorMessage("lastName") }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="email">\r
            {{ translate("employees.email") }} <span class="required">*</span>\r
          </label>\r
          <input\r
            type="email"\r
            id="email"\r
            formControlName="email"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('email')"\r
            [placeholder]="translate('employees.email_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('email')">\r
            {{ getErrorMessage("email") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="password">\r
            {{ translate("employees.password") }}\r
            <span class="required">*</span>\r
          </label>\r
          <div class="password-input-wrapper">\r
            <input\r
              [type]="showPassword() ? 'text' : 'password'"\r
              id="password"\r
              formControlName="password"\r
              class="form-control"\r
              [class.invalid]="isFieldInvalid('password')"\r
              [placeholder]="translate('employees.password_placeholder')"\r
            />\r
            <button\r
              type="button"\r
              class="password-toggle-btn"\r
              (click)="togglePasswordVisibility()"\r
              [attr.aria-label]="\r
                showPassword()\r
                  ? translate('login.hide')\r
                  : translate('login.show')\r
              "\r
            >\r
              <svg\r
                *ngIf="!showPassword()"\r
                width="18"\r
                height="18"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>\r
                <circle cx="12" cy="12" r="3"></circle>\r
              </svg>\r
              <svg\r
                *ngIf="showPassword()"\r
                width="18"\r
                height="18"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path\r
                  d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"\r
                ></path>\r
                <line x1="1" y1="1" x2="23" y2="23"></line>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="form-error" *ngIf="isFieldInvalid('password')">\r
            {{ getErrorMessage("password") }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Job & Contact Information Section (Combined) -->\r
    <div class="form-section">\r
      <h3 class="section-title">\r
        {{ translate("employees.job_information") }}\r
      </h3>\r
\r
      <div class="form-row-triple">\r
        <div class="form-group">\r
          <label class="form-label" for="jobTitle">\r
            {{ translate("employees.job_title") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            type="text"\r
            id="jobTitle"\r
            formControlName="jobTitle"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('jobTitle')"\r
            [placeholder]="translate('employees.job_title_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('jobTitle')">\r
            {{ getErrorMessage("jobTitle") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="role">\r
            {{ translate("employees.roles") }} <span class="required">*</span>\r
          </label>\r
          <select\r
            id="role"\r
            formControlName="role"\r
            class="form-control"\r
\r
            [class.invalid]="isFieldInvalid('role')">\r
            <option value="">{{ translate('employees.select_role') }}</option>\r
            <option *ngFor="let role of roles()" [value]="role.name">\r
              {{ getRoleDisplayName(role) }}\r
            </option>\r
\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('role')">\r
            {{ getErrorMessage("role") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="hireDate">{{\r
            translate("employees.hire_date")\r
          }}</label>\r
          <input\r
            type="date"\r
            id="hireDate"\r
            formControlName="hireDate"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('hireDate')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('hireDate')">\r
            {{ getErrorMessage("hireDate") }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row-triple">\r
        <div class="form-group">\r
          <label class="form-label" for="departmentId">{{\r
            translate("employees.department")\r
          }}</label>\r
          <select\r
            id="departmentId"\r
            formControlName="departmentId"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('departmentId')"\r
          >\r
            <option value="">\r
              {{ translate("employees.select_department") }}\r
            </option>\r
            <option *ngFor="let dept of departments()" [value]="dept.id">\r
              {{ currentLang() === "ar" ? dept.nameAr : dept.nameEn }}\r
            </option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('departmentId')">\r
            {{ getErrorMessage("departmentId") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="phoneNumber">{{\r
            translate("employees.phone")\r
          }}</label>\r
          <input\r
            type="tel"\r
            id="phoneNumber"\r
            formControlName="phoneNumber"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('phoneNumber')"\r
            [placeholder]="translate('employees.phone_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('phoneNumber')">\r
            {{ getErrorMessage("phoneNumber") }}\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label class="form-label" for="nationalId">{{\r
            translate("employees.national_id")\r
          }}</label>\r
          <input\r
            type="text"\r
            id="nationalId"\r
            formControlName="nationalId"\r
            class="form-control"\r
            [class.invalid]="isFieldInvalid('nationalId')"\r
            [placeholder]="translate('employees.national_id_placeholder')"\r
          />\r
          <div class="form-error" *ngIf="isFieldInvalid('nationalId')">\r
            {{ getErrorMessage("nationalId") }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label class="form-label" for="timeZone">{{\r
            translate("employees.time_zone")\r
          }}</label>\r
          <select id="timeZone" formControlName="timeZone" class="form-control" [class.invalid]="isFieldInvalid('timeZone')">\r
            <option value="">{{ translate("employees.select_time_zone") }}</option>\r
            <option value="Asia/Dubai">{{ translate("employees.asia_dubai") }}</option>\r
            <option value="Africa/Cairo">{{ translate("employees.africa_cairo") }}</option>\r
            <option value="Europe/London">{{ translate("employees.europe_london") }}</option>\r
            <option value="America/New_York">{{ translate("employees.america_new_york") }}</option>\r
            <option value="UTC">{{ translate("employees.utc_time_zone") }}</option>\r
            <option value="Australia/Sydney">{{ translate("employees.australia_sydney") }}</option>\r
          </select>\r
          <div class="form-error" *ngIf="isFieldInvalid('timeZone')">\r
            {{ getErrorMessage("timeZone") }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Form Actions -->\r
    <div class="form-actions">\r
      <button type="button" class="btn btn-secondary" (click)="goBack()">\r
        {{ translate("common.back") }}\r
      </button>\r
      <button type="submit" class="btn btn-primary" [disabled]="submitting()">\r
        <span *ngIf="!submitting()">{{ translate("common.save") }}</span>\r
        <span *ngIf="submitting()">{{ translate("common.saving") }}</span>\r
      </button>\r
    </div>\r
  </form>\r
</div>\r
\r
<!-- Error Dialog -->\r
<div class="error-dialog" *ngIf="showErrorDialog()" [attr.dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <div class="dialog-content">\r
    <div class="dialog-icon">\r
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
    </div>\r
    <div class="dialog-message">\r
      {{ errorMessage() }}\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Success Dialog -->\r
<div class="success-dialog" *ngIf="showSuccessDialog()">\r
  <div class="dialog-content">\r
    <div class="dialog-icon">\r
      <svg\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <polyline points="20,6 9,17 4,12"></polyline>\r
      </svg>\r
    </div>\r
    <div class="dialog-message">\r
      {{ successMessage() }}\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/employees/add-employee/add-employee.css */\n.add-employee-page {\n  padding: 0 1.25rem;\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n  max-width: 1050px;\n  margin: 0 auto;\n}\n.add-employee-page.rtl {\n  direction: rtl;\n}\n.page-header {\n  border-bottom: 1px solid #e5e7eb;\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #c4a055 100%);\n  color: white !important;\n  padding: 6px 10px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(212, 175, 95, 0.2);\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  color: white !important;\n}\n.back-btn {\n  background: none;\n  border: none;\n  padding: 0.35rem 0.5rem;\n  cursor: pointer;\n  color: white !important;\n  border-radius: 0.375rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border: 1px solid white;\n}\n.back-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.back-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151 !important;\n}\n.header-text {\n  flex: 1;\n}\n.header-text h1 {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.4rem 0;\n}\n.header-text p {\n  color: white !important;\n  margin: 0;\n  font-size: 0.85rem;\n}\n.page-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #5f646d;\n  margin: 0 0 0.4rem 0;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.employee-form {\n  background: #ffffff;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f0f0f0;\n  transition: box-shadow 0.3s ease;\n}\n.employee-form:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06);\n}\n.form-section {\n  margin-bottom: 0.8rem;\n  padding-bottom: 0.8rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n.section-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.9rem 0;\n  padding-left: 0.6rem;\n  border-left: 3px solid #d4af5f;\n  display: flex;\n  align-items: center;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n.form-row-triple {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.65rem;\n  margin-bottom: 0;\n}\n@media (max-width: 1200px) {\n  .form-row-triple {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n  .form-row-triple {\n    grid-template-columns: 1fr;\n    gap: 0.75rem;\n  }\n}\n.form-group {\n  margin-bottom: 0.65rem;\n}\n.form-label {\n  display: block;\n  margin-bottom: 0.3rem;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.75rem;\n}\n.required {\n  color: #dc2626;\n  margin-left: 2px;\n}\n.form-control {\n  width: 100%;\n  padding: 0.45rem 0.7rem;\n  border: 1.25px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  transition: all 0.2s ease;\n  min-height: 36px;\n  font-family: inherit;\n  background-color: #fafafa;\n}\n.form-control:hover {\n  border-color: #d1d5db;\n  background-color: #ffffff;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #b68a35;\n  box-shadow: 0 0 0 2px rgba(212, 175, 95, 0.15);\n  background-color: #ffffff;\n}\n.form-control.invalid {\n  border-color: #dc2626;\n}\n.form-control.invalid:focus {\n  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);\n}\n.form-error {\n  color: #dc2626;\n  font-size: 0.8rem;\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.form-error::before {\n  content: "\\26a0";\n  font-size: 1rem;\n}\n.password-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-input-wrapper .form-control {\n  padding-right: 2.25rem;\n}\n.password-toggle-btn {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 0.2s ease;\n  z-index: 10;\n}\n.password-toggle-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.password-toggle-btn:hover {\n  color: #b68a35;\n}\n.password-toggle-btn:focus {\n  outline: none;\n  color: #b68a35;\n}\n.add-employee-page.rtl .password-input-wrapper .form-control {\n  padding-right: 0.8rem;\n  padding-left: 2.25rem;\n}\n.add-employee-page.rtl .password-toggle-btn {\n  right: auto;\n  left: 0.6rem;\n}\n.file-input {\n  display: none;\n}\n.form-actions {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f3f4f6;\n}\n@media (max-width: 768px) {\n  .form-actions {\n    flex-direction: column;\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.45rem 1.1rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 34px;\n  font-family: inherit;\n  text-decoration: none;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #d4af5f 0%,\n      #b89145 100%);\n  color: #ffffff;\n  box-shadow: 0 2px 4px rgba(212, 175, 95, 0.2);\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #c4a055 0%,\n      #a87d2a 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(212, 175, 95, 0.3);\n}\n.btn-primary:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.btn-secondary {\n  background-color: #ffffff;\n  color: #4b5563 !important;\n  border: 1.25px solid #d1d5db;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  font-weight: 600 !important;\n}\n.btn-secondary:hover {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n  color: #1f2937 !important;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.add-employee-page {\n  max-width: 1050px;\n}\n.employee-form {\n  padding: 1.25rem 1.5rem;\n}\n@media (min-width: 1400px) {\n  .add-employee-page {\n    max-width: 1150px;\n  }\n}\n.add-employee-page.rtl .form-actions {\n  justify-content: flex-start;\n}\n.add-employee-page.rtl .form-row {\n  direction: rtl;\n}\n@media (max-width: 768px) {\n  .add-employee-page {\n    padding: 1rem;\n  }\n  .employee-form {\n    padding: 1.25rem;\n  }\n  .page-title {\n    font-size: 1.4rem;\n  }\n  .section-title {\n    font-size: 1rem;\n  }\n  .upload-area {\n    padding: 1.25rem;\n  }\n  .preview-image {\n    width: 90px;\n    height: 90px;\n  }\n}\n@media (max-width: 480px) {\n  .add-employee-page {\n    padding: 0.5rem;\n  }\n  .employee-form {\n    padding: 0.85rem;\n  }\n  .form-row {\n    gap: 0.75rem;\n  }\n  .form-group {\n    margin-bottom: 1rem;\n  }\n  .upload-area {\n    padding: 0.85rem;\n  }\n  .upload-text {\n    font-size: 0.9rem;\n  }\n  .upload-requirements {\n    font-size: 0.7rem;\n  }\n}\n.success-dialog {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: slideInRight 0.3s ease-out;\n}\n.dialog-content {\n  background: #2ba149;\n  color: white;\n  padding: 0.8rem 1.2rem;\n  border-radius: 0.4rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  min-width: 240px;\n}\n.dialog-icon {\n  flex-shrink: 0;\n}\n.dialog-icon svg {\n  color: white;\n}\n.dialog-message {\n  font-weight: 500;\n  font-size: 0.8rem;\n}\n.error-dialog {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 1000;\n  animation: slideInRight 0.3s ease-out;\n}\n.error-dialog .dialog-content {\n  background: #dc2626;\n  color: white;\n}\n.error-dialog .dialog-icon svg {\n  color: white;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n[dir=rtl] .success-dialog {\n  right: auto;\n  left: 20px;\n}\n[dir=rtl] .success-dialog {\n  animation: slideInLeft 0.3s ease-out;\n}\n[dir=rtl] .error-dialog {\n  right: auto;\n  left: 20px;\n  animation: slideInLeft 0.3s ease-out;\n}\n@keyframes slideInLeft {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=add-employee-FY2PUPTG.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEmployee, { className: "AddEmployee", filePath: "src/app/components/employees/add-employee/add-employee.ts", lineNumber: 29 });
})();

// src/app/components/employees/employees-routing-module.ts
var routes = [
  {
    path: "",
    component: Employees
  },
  {
    path: "edit/:id",
    component: EditEmployee
  },
  {
    path: "add",
    component: AddEmployee
  }
];
var EmployeesRoutingModule = class _EmployeesRoutingModule {
  static \u0275fac = function EmployeesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmployeesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/employees/employees-module.ts
var EmployeesModule = class _EmployeesModule {
  static \u0275fac = function EmployeesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EmployeesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("./chunk-4CVBPPBX.js")
    }),
    NgApexchartsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Employees,
        EditEmployee,
        AddEmployee
      ],
      imports: [
        CommonModule,
        NgForOf,
        EmployeesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxEchartsModule.forRoot({
          echarts: () => import("./chunk-4CVBPPBX.js")
        }),
        NgApexchartsModule
      ]
    }]
  }], null, null);
})();
export {
  EmployeesModule
};
//# sourceMappingURL=chunk-BOSP3TS7.js.map
