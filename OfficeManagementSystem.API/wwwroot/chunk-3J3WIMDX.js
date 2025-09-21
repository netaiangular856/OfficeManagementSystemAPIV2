import {
  SharedModule
} from "./chunk-Q3OCNH2X.js";
import {
  UsersService
} from "./chunk-AB3H54HS.js";
import "./chunk-MTXLR2EH.js";
import {
  ConfirmationModalComponent
} from "./chunk-WEYYT6CR.js";
import "./chunk-N3L5GGM5.js";
import {
  RouterModule
} from "./chunk-O632SAIF.js";
import "./chunk-FKP4CUQH.js";
import "./chunk-OTJ6H5LH.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormGroupName,
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
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Subject,
  TranslationService,
  ViewChild,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-66AA6EL7.js";
import {
  __export,
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/services/visits.service.ts
var VisitsService = class _VisitsService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Visits`;
  constructor(http) {
    this.http = http;
  }
  getAllVisits(params = {}) {
    let httpParams = new HttpParams();
    if (params.Search)
      httpParams = httpParams.set("Search", params.Search);
    if (params.Type !== void 0)
      httpParams = httpParams.set("Type", params.Type.toString());
    if (params.From)
      httpParams = httpParams.set("From", params.From);
    if (params.To)
      httpParams = httpParams.set("To", params.To);
    if (params.PageSize)
      httpParams = httpParams.set("PageSize", params.PageSize.toString());
    if (params.PageNumber)
      httpParams = httpParams.set("PageNumber", params.PageNumber.toString());
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getVisitById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createVisit(visit) {
    const visitData = __spreadProps(__spreadValues({}, visit), {
      type: Number(visit.type)
    });
    console.log("Service - API URL:", this.apiUrl);
    console.log("Service - Request body being sent:", visitData);
    return this.http.post(this.apiUrl, visitData);
  }
  updateVisit(id, visit) {
    const visitData = __spreadProps(__spreadValues({}, visit), {
      type: Number(visit.type)
    });
    console.log("Service - Request body being sent:", visitData);
    return this.http.put(`${this.apiUrl}/${id}`, visitData);
  }
  deleteVisit(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getVisitParticipants(id) {
    return this.http.get(`${this.apiUrl}/${id}/participants`);
  }
  deleteParticipant(visitId, participantId) {
    return this.http.delete(`${this.apiUrl}/${visitId}/participants/${participantId}`);
  }
  getVisitsOverview() {
    return this.http.get(`${environment.apiBaseUrl}/Dashboard/visits/overview`);
  }
  static \u0275fac = function VisitsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitsService, factory: _VisitsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/visits/add-visit/add-visit.ts
var _c0 = ["confirmationModal"];
function AddVisit_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 42);
    \u0275\u0275element(2, "circle", 43)(3, "line", 44)(4, "line", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AddVisit_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function AddVisit_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.name, " ");
  }
}
function AddVisit_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function AddVisit_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("address"), " ");
  }
}
function AddVisit_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("visitDate"), " ");
  }
}
function AddVisit_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("purpose"), " ");
  }
}
function AddVisit_div_62_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    \u0275\u0275property("value", type_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r6.name, " ");
  }
}
function AddVisit_div_62_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "kind"), " ");
  }
}
function AddVisit_div_62_div_17_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    \u0275\u0275property("value", user_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r8.name, " - ", user_r8.departmentName, " ");
  }
}
function AddVisit_div_62_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "userId"), " ");
  }
}
function AddVisit_div_62_div_17_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.loading"), "... ");
  }
}
function AddVisit_div_62_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "select", 61);
    \u0275\u0275listener("change", function AddVisit_div_62_div_17_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUserSelectionChangeEvent(i_r5, $event));
    });
    \u0275\u0275elementStart(6, "option", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AddVisit_div_62_div_17_option_8_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AddVisit_div_62_div_17_div_9_Template, 2, 1, "div", 18)(10, AddVisit_div_62_div_17_div_10_Template, 3, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", "userId" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.select_user"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "userId"));
    \u0275\u0275property("id", "userId" + i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.select_user_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userNames);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "userId"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingUsers);
  }
}
function AddVisit_div_62_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "displayName"), " ");
  }
}
function AddVisit_div_62_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 65);
    \u0275\u0275template(6, AddVisit_div_62_div_18_div_6_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("for", "displayName" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.participant_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "displayName"));
    \u0275\u0275property("id", "displayName" + i_r5)("placeholder", ctx_r1.translate("visits.participant_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "displayName"));
  }
}
function AddVisit_div_62_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "department"), " ");
  }
}
function AddVisit_div_62_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.department_auto_filled"), " ");
  }
}
function AddVisit_div_62_label_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("for", "jobTitle" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.job_title"), " ");
  }
}
function AddVisit_div_62_input_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 66);
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "jobTitle"));
    \u0275\u0275property("id", "jobTitle" + i_r5)("placeholder", ctx_r1.translate("visits.job_title_placeholder"));
  }
}
function AddVisit_div_62_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "jobTitle"), " ");
  }
}
function AddVisit_div_62_div_32_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "organization"), " ");
  }
}
function AddVisit_div_62_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldErrorInArray("participants", i_r5, "email"), " ");
  }
}
function AddVisit_div_62_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "label", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "input", 67);
    \u0275\u0275template(7, AddVisit_div_62_div_32_div_7_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "label", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 68);
    \u0275\u0275template(12, AddVisit_div_62_div_32_div_12_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "organization" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.organization"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "organization"));
    \u0275\u0275property("id", "organization" + i_r5)("placeholder", ctx_r1.translate("visits.organization_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "organization"));
    \u0275\u0275advance(2);
    \u0275\u0275property("for", "email" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.email"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "email"));
    \u0275\u0275property("id", "email" + i_r5)("placeholder", ctx_r1.translate("visits.email_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "email"));
  }
}
function AddVisit_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "h6", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function AddVisit_div_62_Template_button_click_4_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeParticipant(i_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 52);
    \u0275\u0275element(6, "line", 6)(7, "line", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "label", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 16);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 54);
    \u0275\u0275listener("change", function AddVisit_div_62_Template_select_change_14_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onParticipantTypeChange(i_r5));
    });
    \u0275\u0275template(15, AddVisit_div_62_option_15_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, AddVisit_div_62_div_16_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AddVisit_div_62_div_17_Template, 11, 9, "div", 55)(18, AddVisit_div_62_div_18_Template, 7, 7, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "label", 53);
    \u0275\u0275text(22);
    \u0275\u0275elementStart(23, "span", 16);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "input", 56);
    \u0275\u0275template(26, AddVisit_div_62_div_26_Template, 2, 1, "div", 18)(27, AddVisit_div_62_div_27_Template, 2, 1, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 14);
    \u0275\u0275template(29, AddVisit_div_62_label_29_Template, 4, 2, "label", 58)(30, AddVisit_div_62_input_30_Template, 1, 4, "input", 59)(31, AddVisit_div_62_div_31_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, AddVisit_div_62_div_32_Template, 13, 14, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.translate("visits.participant"), " #", i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.participantsArray.length === 1);
    \u0275\u0275advance(6);
    \u0275\u0275property("for", "kind" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.participant_type"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "kind"));
    \u0275\u0275property("id", "kind" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.participantTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "kind"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInternalParticipant(i_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExternalParticipant(i_r5));
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "department" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.department"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ctx_r1.isFieldInvalidInArray("participants", i_r5, "department"));
    \u0275\u0275property("id", "department" + i_r5)("placeholder", ctx_r1.translate("visits.department_placeholder"))("readonly", ctx_r1.isInternalParticipant(i_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalidInArray("participants", i_r5, "department"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isInternalParticipant(i_r5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isExternalParticipant(i_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExternalParticipant(i_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExternalParticipant(i_r5) && ctx_r1.isFieldInvalidInArray("participants", i_r5, "jobTitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isExternalParticipant(i_r5));
  }
}
function AddVisit_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
  }
}
var AddVisit = class _AddVisit {
  fb;
  visitsService;
  usersService;
  translationService;
  cdr;
  confirmationModal;
  visitAdded = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  destroy$ = new Subject();
  visitForm;
  loading = false;
  error = null;
  visitTypes = [];
  participantTypes = [];
  userNames = [];
  loadingUsers = false;
  constructor(fb, visitsService, usersService, translationService, cdr) {
    this.fb = fb;
    this.visitsService = visitsService;
    this.usersService = usersService;
    this.translationService = translationService;
    this.cdr = cdr;
    this.visitForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      type: [0, Validators.required],
      address: ["", [Validators.required, Validators.minLength(5)]],
      purpose: ["", [Validators.required, Validators.minLength(10)]],
      visitDate: ["", Validators.required],
      participants: this.fb.array([])
    });
  }
  ngOnInit() {
    this.initializeVisitTypes();
    this.loadUserNames();
    this.addDefaultParticipant();
  }
  initializeVisitTypes() {
    this.visitTypes = [
      { value: 0, name: this.translate("visits.visit_types.0") },
      { value: 1, name: this.translate("visits.visit_types.1") },
      { value: 2, name: this.translate("visits.visit_types.2") },
      { value: 3, name: this.translate("visits.visit_types.3") },
      { value: 4, name: this.translate("visits.visit_types.4") },
      { value: 5, name: this.translate("visits.visit_types.5") },
      { value: 6, name: this.translate("visits.visit_types.6") }
    ];
    this.participantTypes = [
      { value: 0, name: this.translate("visits.participant_types.internal") },
      { value: 1, name: this.translate("visits.participant_types.external") }
    ];
  }
  loadUserNames() {
    this.loadingUsers = true;
    this.usersService.getUserNames().pipe(takeUntil(this.destroy$)).subscribe({
      next: (users) => {
        this.userNames = users;
        this.loadingUsers = false;
      },
      error: (err) => {
        console.error("Error loading user names:", err);
        this.loadingUsers = false;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
    this.resetForm();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  onSubmit() {
    if (this.visitForm.valid) {
      this.loading = true;
      this.error = null;
      const formValue = this.visitForm.value;
      console.log("Form values:", formValue);
      const visitData = {
        title: formValue.title,
        type: Number(formValue.type),
        // Ensure type is a number
        address: formValue.address,
        purpose: formValue.purpose,
        visitDate: new Date(formValue.visitDate).toISOString(),
        participants: formValue.participants.map((p) => ({
          kind: Number(p.kind),
          // Ensure kind is a number
          userId: p.userId || void 0,
          displayName: p.displayName,
          organization: p.organization || void 0,
          jobTitle: p.jobTitle,
          department: p.department,
          email: p.email || void 0
        }))
      };
      console.log("Visit data being sent:", visitData);
      this.visitsService.createVisit(visitData).subscribe({
        next: () => {
          this.loading = false;
          this.visitAdded.emit();
          this.close();
          if (this.confirmationModal) {
            const successData = {
              title: this.translate("visits.add_success_title"),
              message: this.translate("visits.add_success_message"),
              confirmText: this.translate("common.ok"),
              cancelText: "",
              type: "info"
            };
            this.confirmationModal.show(successData);
          }
        },
        error: (err) => {
          console.error("Error creating visit:", err);
          this.error = "Failed to create visit. Please try again.";
          this.loading = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.visitForm.controls).forEach((key) => {
      const control = this.visitForm.get(key);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach((subKey) => {
          const subControl = control.get(subKey);
          subControl?.markAsTouched();
        });
      } else {
        control?.markAsTouched();
      }
    });
  }
  resetForm() {
    this.visitForm.reset({
      type: 0
    });
    this.participantsArray.clear();
    this.addDefaultParticipant();
    this.error = null;
    this.loading = false;
  }
  isFieldInvalid(fieldName) {
    const field = this.visitForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  isFieldInvalidInArray(arrayName, index, fieldName) {
    const array = this.visitForm.get(arrayName);
    const field = array.at(index).get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.visitForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return this.translate("common.field_required");
      if (field.errors["minlength"])
        return `Minimum length is ${field.errors["minlength"].requiredLength} characters`;
      if (field.errors["email"])
        return this.translate("common.email_invalid");
    }
    return "";
  }
  getFieldErrorInArray(arrayName, index, fieldName) {
    const array = this.visitForm.get(arrayName);
    const field = array.at(index).get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return this.translate("common.field_required");
      if (field.errors["minlength"])
        return `Minimum length is ${field.errors["minlength"].requiredLength} characters`;
      if (field.errors["email"])
        return this.translate("common.email_invalid");
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  // Participants management methods
  get participantsArray() {
    return this.visitForm.get("participants");
  }
  isInternalParticipant(index) {
    const participant = this.participantsArray.at(index);
    return participant.get("kind")?.value == 0;
  }
  isExternalParticipant(index) {
    const participant = this.participantsArray.at(index);
    return participant.get("kind")?.value == 1;
  }
  addDefaultParticipant() {
    const participantGroup = this.fb.group({
      kind: [0, Validators.required],
      userId: [""],
      displayName: [""],
      jobTitle: [""],
      department: [""],
      organization: [""],
      email: ["", [Validators.email]]
    });
    this.participantsArray.push(participantGroup);
    const index = this.participantsArray.length - 1;
    this.initializeParticipantValidation(index);
  }
  addParticipant() {
    const participantGroup = this.fb.group({
      kind: [0, Validators.required],
      userId: [""],
      displayName: [""],
      jobTitle: [""],
      department: [""],
      organization: [""],
      email: ["", [Validators.email]]
    });
    this.participantsArray.push(participantGroup);
    const index = this.participantsArray.length - 1;
    this.initializeParticipantValidation(index);
  }
  removeParticipant(index) {
    if (this.participantsArray.length > 1) {
      this.participantsArray.removeAt(index);
    }
  }
  initializeParticipantValidation(index) {
    const participant = this.participantsArray.at(index);
    const kind = participant.get("kind")?.value;
    if (kind == 0) {
      participant.get("userId")?.setValidators([Validators.required]);
      participant.get("displayName")?.clearValidators();
      participant.get("jobTitle")?.clearValidators();
      participant.get("department")?.setValidators([Validators.required, Validators.minLength(2)]);
      participant.get("organization")?.clearValidators();
      participant.get("email")?.clearValidators();
    } else {
      participant.get("userId")?.clearValidators();
      participant.get("displayName")?.setValidators([Validators.required, Validators.minLength(2)]);
      participant.get("jobTitle")?.setValidators([Validators.required, Validators.minLength(2)]);
      participant.get("department")?.setValidators([Validators.required, Validators.minLength(2)]);
      participant.get("organization")?.setValidators([Validators.required, Validators.minLength(2)]);
      participant.get("email")?.setValidators([Validators.email]);
    }
    participant.get("userId")?.updateValueAndValidity();
    participant.get("displayName")?.updateValueAndValidity();
    participant.get("jobTitle")?.updateValueAndValidity();
    participant.get("department")?.updateValueAndValidity();
    participant.get("organization")?.updateValueAndValidity();
    participant.get("email")?.updateValueAndValidity();
  }
  onParticipantTypeChange(index) {
    const participant = this.participantsArray.at(index);
    const newKind = participant.get("kind")?.value;
    participant.get("userId")?.setValue("");
    participant.get("displayName")?.setValue("");
    participant.get("jobTitle")?.setValue("");
    participant.get("department")?.setValue("");
    participant.get("organization")?.setValue("");
    participant.get("email")?.setValue("");
    this.initializeParticipantValidation(index);
  }
  onUserSelectionChangeEvent(index, event) {
    const target = event.target;
    const userId = target.value;
    this.onUserSelectionChange(index, userId);
  }
  onUserSelectionChange(index, userId) {
    const participant = this.participantsArray.at(index);
    const selectedUser = this.userNames.find((user) => user.id === userId);
    if (selectedUser) {
      participant.get("userId")?.setValue(selectedUser.id);
      participant.get("displayName")?.setValue(selectedUser.name);
      participant.get("department")?.setValue(selectedUser.departmentName);
      participant.get("jobTitle")?.setValue("");
      participant.get("email")?.setValue("");
    }
  }
  static \u0275fac = function AddVisit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddVisit)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VisitsService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddVisit, selectors: [["app-add-visit"]], viewQuery: function AddVisit_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { visitAdded: "visitAdded" }, standalone: false, decls: 71, vars: 37, consts: [["confirmationModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "modal-body", 3, "ngSubmit", "formGroup"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-section"], [1, "section-title"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "title", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "visitDate", 1, "form-label"], ["type", "datetime-local", "id", "visitDate", "formControlName", "visitDate", 1, "form-control"], [1, "mb-3"], ["for", "purpose", 1, "form-label"], ["id", "purpose", "rows", "3", "formControlName", "purpose", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "section-title", "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["formArrayName", "participants", 1, "participants-container"], ["class", "participant-card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "modal-footer", "gap-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "invalid-feedback"], [3, "value"], [1, "participant-card", 3, "formGroupName"], [1, "participant-header"], [1, "participant-number"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "form-label", 3, "for"], ["formControlName", "kind", 1, "form-select", 3, "change", "id"], ["class", "col-md-6 mb-3", 4, "ngIf"], ["type", "text", "formControlName", "department", 1, "form-control", 3, "id", "placeholder", "readonly"], ["class", "form-text", 4, "ngIf"], ["class", "form-label", 3, "for", 4, "ngIf"], ["type", "text", "class", "form-control", "formControlName", "jobTitle", 3, "id", "is-invalid", "placeholder", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["formControlName", "userId", 1, "form-select", 3, "change", "id"], ["value", ""], [1, "form-text"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], ["type", "text", "formControlName", "displayName", 1, "form-control", 3, "id", "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-control", 3, "id", "placeholder"], ["type", "text", "formControlName", "organization", 1, "form-control", 3, "id", "placeholder"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "id", "placeholder"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddVisit_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function AddVisit_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function AddVisit_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "line", 6)(6, "line", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h2", 8);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 9);
      \u0275\u0275listener("ngSubmit", function AddVisit_Template_form_ngSubmit_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(10, AddVisit_div_10_Template, 6, 1, "div", 10);
      \u0275\u0275elementStart(11, "div", 11)(12, "h5", 12);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "label", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "span", 16);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "input", 17);
      \u0275\u0275template(21, AddVisit_div_21_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "label", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "select", 20);
      \u0275\u0275template(28, AddVisit_option_28_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, AddVisit_div_29_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "label", 22);
      \u0275\u0275text(33);
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 23);
      \u0275\u0275template(37, AddVisit_div_37_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14)(39, "label", 24);
      \u0275\u0275text(40);
      \u0275\u0275elementStart(41, "span", 16);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 25);
      \u0275\u0275template(44, AddVisit_div_44_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 26)(46, "label", 27);
      \u0275\u0275text(47);
      \u0275\u0275elementStart(48, "span", 16);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "textarea", 28);
      \u0275\u0275template(51, AddVisit_div_51_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 11)(53, "div", 29)(54, "h5", 30);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 31);
      \u0275\u0275listener("click", function AddVisit_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addParticipant());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 32);
      \u0275\u0275element(58, "line", 33)(59, "line", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "div", 35);
      \u0275\u0275template(62, AddVisit_div_62_Template, 33, 26, "div", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 37)(64, "button", 38);
      \u0275\u0275listener("click", function AddVisit_Template_button_click_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(65, AddVisit_span_65_Template, 1, 0, "span", 39);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 40);
      \u0275\u0275listener("click", function AddVisit_Template_button_click_67_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(69, "app-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.add_visit"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.visitForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("visits.visit_details"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("title"));
      \u0275\u0275property("placeholder", ctx.translate("visits.visit_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_type"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("type"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.visitTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("type"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.address"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("address"));
      \u0275\u0275property("placeholder", ctx.translate("visits.address_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("address"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_date"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("visitDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("visitDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.purpose"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("purpose"));
      \u0275\u0275property("placeholder", ctx.translate("visits.purpose_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("purpose"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("visits.participants"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.add_participant"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.participantsArray.controls);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.visitForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? ctx.translate("common.saving") : ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, ConfirmationModalComponent], styles: [`

.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.modal-overlay.open[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
}
.modal-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
  position: relative;
}
.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {
  transform: scale(1) translateY(0);
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #E6D7A2;
  background: #D4AF5F;
  color: #5F646D;
}
.modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #5F646D;
  order: 1;
}
.close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #5F646D;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}
.close-btn[_ngcontent-%COMP%]:hover {
  background-color: rgba(95, 100, 109, 0.1);
  color: #5F646D;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  text-align: right;
  flex-direction: row-reverse;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  order: 2;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  order: 1;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-family: "IBM Plex Sans Arabic", sans-serif !important;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-family: "Poppins", sans-serif !important;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}
.form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.section-title[_ngcontent-%COMP%] {
  color: #5F646D;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #E6D7A2;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #5F646D;
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
}
.form-control.is-invalid[_ngcontent-%COMP%], 
.form-select.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #dc3545;
  margin-top: 0.25rem;
}
.participants-container[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.participant-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.2s ease;
}
.participant-card[_ngcontent-%COMP%]:hover {
  border-color: #d4ab3ab9;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
}
.participant-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}
.participant-number[_ngcontent-%COMP%] {
  color: #495057;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
}
.participant-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
.row[_ngcontent-%COMP%] {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.col-md-6[_ngcontent-%COMP%] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  border: #B68A35;
  color: #FFFFFF;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #A87D2A;
  border: #A87D2A;
  color: #FFFFFF;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);
}
.btn-outline-primary[_ngcontent-%COMP%] {
  border-color: #B68A35;
  color: #B68A35;
  background: transparent;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-danger[_ngcontent-%COMP%] {
  border-color: #C62828;
  color: #C62828;
  background: transparent;
}
.btn-outline-danger[_ngcontent-%COMP%]:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-outline-danger[_ngcontent-%COMP%]:disabled {
  border-color: #6c757d;
  color: #6c757d;
  opacity: 0.6;
}
.modal-footer[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-top: 1px solid #E6D7A2;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
}
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}
.spinner-border-sm[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.alert[_ngcontent-%COMP%] {
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.alert-danger[_ngcontent-%COMP%] {
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}
.alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #dc3545;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-position: left 0.75rem center;
  padding-left: 2.25rem;
  padding-right: 0.75rem;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
  padding-left: 0.75rem;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  background-position: left 0.75rem center;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  background-position: right 0.75rem center;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select.is-invalid[_ngcontent-%COMP%] {
  background-position: left 0.75rem center;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select.is-invalid[_ngcontent-%COMP%] {
  background-position: right 0.75rem center;
}
/*# sourceMappingURL=add-visit-PA4VYPZJ.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddVisit, [{
    type: Component,
    args: [{ selector: "app-add-visit", standalone: false, template: `<div class="modal-overlay" [class.open]="isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-container">\r
    <div class="modal-header">\r
      \r
      <button type="button" class="close-btn" (click)="close()" aria-label="Close">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
      <h2 class="modal-title">\r
\r
        {{ translate('visits.add_visit') }}\r
      </h2>\r
    </div>\r
\r
    <form [formGroup]="visitForm" (ngSubmit)="onSubmit()" class="modal-body">\r
      <!-- Error Display -->\r
      <div *ngIf="error" class="alert alert-danger" role="alert">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
          <circle cx="12" cy="12" r="10"/>\r
          <line x1="15" y1="9" x2="9" y2="15"/>\r
          <line x1="9" y1="9" x2="15" y2="15"/>\r
        </svg>\r
        {{ error }}\r
      </div>\r
\r
      <!-- Visit Details Section -->\r
      <div class="form-section">\r
        <h5 class="section-title">{{ translate('visits.visit_details') }}</h5>\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label for="title" class="form-label">\r
              {{ translate('visits.visit_title') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="title"\r
              formControlName="title"\r
              [class.is-invalid]="isFieldInvalid('title')"\r
              [placeholder]="translate('visits.visit_title_placeholder')">\r
            <div *ngIf="isFieldInvalid('title')" class="invalid-feedback">\r
              {{ getFieldError('title') }}\r
            </div>\r
          </div>\r
\r
          <div class="col-md-6 mb-3">\r
            <label for="type" class="form-label">\r
              {{ translate('visits.visit_type') }} <span class="text-danger">*</span>\r
            </label>\r
            <select \r
              class="form-select" \r
              id="type"\r
              formControlName="type"\r
              [class.is-invalid]="isFieldInvalid('type')">\r
              <option *ngFor="let type of visitTypes" [value]="type.value">\r
                {{ type.name }}\r
              </option>\r
            </select>\r
            <div *ngIf="isFieldInvalid('type')" class="invalid-feedback">\r
              {{ getFieldError('type') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label for="address" class="form-label">\r
              {{ translate('visits.address') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="address"\r
              formControlName="address"\r
              [class.is-invalid]="isFieldInvalid('address')"\r
              [placeholder]="translate('visits.address_placeholder')">\r
            <div *ngIf="isFieldInvalid('address')" class="invalid-feedback">\r
              {{ getFieldError('address') }}\r
            </div>\r
          </div>\r
\r
          <div class="col-md-6 mb-3">\r
            <label for="visitDate" class="form-label">\r
              {{ translate('visits.visit_date') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="datetime-local" \r
              class="form-control" \r
              id="visitDate"\r
              formControlName="visitDate"\r
              [class.is-invalid]="isFieldInvalid('visitDate')">\r
            <div *ngIf="isFieldInvalid('visitDate')" class="invalid-feedback">\r
              {{ getFieldError('visitDate') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="purpose" class="form-label">\r
            {{ translate('visits.purpose') }} <span class="text-danger">*</span>\r
          </label>\r
          <textarea \r
            class="form-control" \r
            id="purpose"\r
            rows="3"\r
            formControlName="purpose"\r
            [class.is-invalid]="isFieldInvalid('purpose')"\r
            [placeholder]="translate('visits.purpose_placeholder')"></textarea>\r
          <div *ngIf="isFieldInvalid('purpose')" class="invalid-feedback">\r
            {{ getFieldError('purpose') }}\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Participants Section -->\r
      <div class="form-section">\r
        <div class="d-flex justify-content-between align-items-center mb-3">\r
          <h5 class="section-title mb-0">{{ translate('visits.participants') }}</h5>\r
          <button type="button" class="btn btn-outline-primary btn-sm" (click)="addParticipant()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-1">\r
              <line x1="12" y1="5" x2="12" y2="19"/>\r
              <line x1="5" y1="12" x2="19" y2="12"/>\r
            </svg>\r
            {{ translate('visits.add_participant') }}\r
          </button>\r
        </div>\r
\r
        <div formArrayName="participants" class="participants-container">\r
          <div *ngFor="let participant of participantsArray.controls; let i = index" \r
               [formGroupName]="i" \r
               class="participant-card">\r
            \r
            <div class="participant-header">\r
              <h6 class="participant-number">{{ translate('visits.participant') }} #{{ i + 1 }}</h6>\r
              <button \r
                type="button" \r
                class="btn btn-outline-danger btn-sm"\r
                (click)="removeParticipant(i)"\r
                [disabled]="participantsArray.length === 1">\r
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <line x1="18" y1="6" x2="6" y2="18"/>\r
                  <line x1="6" y1="6" x2="18" y2="18"/>\r
                </svg>\r
              </button>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label [for]="'kind' + i" class="form-label">\r
                  {{ translate('visits.participant_type') }} <span class="text-danger">*</span>\r
                </label>\r
                <select \r
                  class="form-select" \r
                  [id]="'kind' + i"\r
                  formControlName="kind"\r
                  (change)="onParticipantTypeChange(i)"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'kind')">\r
                  <option *ngFor="let type of participantTypes" [value]="type.value">\r
                    {{ type.name }}\r
                  </option>\r
                </select>\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'kind')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'kind') }}\r
                </div>\r
              </div>\r
\r
              <!-- Internal participant - show user dropdown -->\r
              <div *ngIf="isInternalParticipant(i)" class="col-md-6 mb-3">\r
                <label [for]="'userId' + i" class="form-label">\r
                  {{ translate('visits.select_user') }} <span class="text-danger">*</span>\r
                </label>\r
                <select \r
                  class="form-select" \r
                  [id]="'userId' + i"\r
                  formControlName="userId"\r
                  (change)="onUserSelectionChangeEvent(i, $event)"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'userId')">\r
                  <option value="">{{ translate('visits.select_user_placeholder') }}</option>\r
                  <option *ngFor="let user of userNames" [value]="user.id">\r
                    {{ user.name }} - {{ user.departmentName }}\r
                  </option>\r
                </select>\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'userId')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'userId') }}\r
                </div>\r
                <div *ngIf="loadingUsers" class="form-text">\r
                  <span class="spinner-border spinner-border-sm me-1" role="status"></span>\r
                  {{ translate('common.loading') }}...\r
                </div>\r
              </div>\r
\r
              <!-- External participant - show manual name input -->\r
              <div *ngIf="isExternalParticipant(i)" class="col-md-6 mb-3">\r
                <label [for]="'displayName' + i" class="form-label">\r
                  {{ translate('visits.participant_name') }} <span class="text-danger">*</span>\r
                </label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  [id]="'displayName' + i"\r
                  formControlName="displayName"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'displayName')"\r
                  [placeholder]="translate('visits.participant_name_placeholder')">\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'displayName')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'displayName') }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Department field - always visible -->\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label [for]="'department' + i" class="form-label">\r
                  {{ translate('visits.department') }} <span class="text-danger">*</span>\r
                </label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  [id]="'department' + i"\r
                  formControlName="department"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'department')"\r
                  [placeholder]="translate('visits.department_placeholder')"\r
                  [readonly]="isInternalParticipant(i)">\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'department')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'department') }}\r
                </div>\r
                <div *ngIf="isInternalParticipant(i)" class="form-text">\r
                  {{ translate('visits.department_auto_filled') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <!-- Empty column for internal participants, job title for external -->\r
                <label *ngIf="isExternalParticipant(i)" [for]="'jobTitle' + i" class="form-label">\r
                  {{ translate('visits.job_title') }} <span class="text-danger">*</span>\r
                </label>\r
                <input \r
                  *ngIf="isExternalParticipant(i)"\r
                  type="text" \r
                  class="form-control" \r
                  [id]="'jobTitle' + i"\r
                  formControlName="jobTitle"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'jobTitle')"\r
                  [placeholder]="translate('visits.job_title_placeholder')">\r
                <div *ngIf="isExternalParticipant(i) && isFieldInvalidInArray('participants', i, 'jobTitle')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'jobTitle') }}\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Organization and Email fields - only for external participants -->\r
            <div *ngIf="isExternalParticipant(i)" class="row">\r
              <div class="col-md-6 mb-3">\r
                <label [for]="'organization' + i" class="form-label">\r
                  {{ translate('visits.organization') }} <span class="text-danger">*</span>\r
                </label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  [id]="'organization' + i"\r
                  formControlName="organization"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'organization')"\r
                  [placeholder]="translate('visits.organization_placeholder')">\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'organization')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'organization') }}\r
                </div>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label [for]="'email' + i" class="form-label">\r
                  {{ translate('visits.email') }}\r
                </label>\r
                <input \r
                  type="email" \r
                  class="form-control" \r
                  [id]="'email' + i"\r
                  formControlName="email"\r
                  [class.is-invalid]="isFieldInvalidInArray('participants', i, 'email')"\r
                  [placeholder]="translate('visits.email_placeholder')">\r
                <div *ngIf="isFieldInvalidInArray('participants', i, 'email')" class="invalid-feedback">\r
                  {{ getFieldErrorInArray('participants', i, 'email') }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </form>\r
\r
    <div class="modal-footer gap-2">\r
      <button \r
        type="button" \r
        class="btn btn-primary" \r
        (click)="onSubmit()"\r
        [disabled]="loading || visitForm.invalid">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2" role="status"></span>\r
        {{ loading ? translate('common.saving') : translate('common.save') }}\r
      </button>\r
      <button type="button" class="btn btn-secondary" (click)="close()">\r
        {{ translate('common.cancel') }}\r
      </button>\r
      \r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>`, styles: [`/* src/app/components/visits/add-visit/add-visit.css */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.modal-overlay.open {
  opacity: 1;
  visibility: visible;
}
.modal-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  overflow: hidden;
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
  position: relative;
}
.modal-overlay.open .modal-container {
  transform: scale(1) translateY(0);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #E6D7A2;
  background: #D4AF5F;
  color: #5F646D;
}
.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #5F646D;
  order: 1;
}
.close-btn {
  background: none;
  border: none;
  color: #5F646D;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}
.close-btn:hover {
  background-color: rgba(95, 100, 109, 0.1);
  color: #5F646D;
}
[dir=rtl] .modal-header {
  text-align: right;
  flex-direction: row-reverse;
}
[dir=rtl] .modal-header .modal-title {
  order: 2;
}
[dir=rtl] .modal-header .close-btn {
  order: 1;
}
[dir=rtl] .modal-title {
  font-family: "IBM Plex Sans Arabic", sans-serif !important;
}
[dir=ltr] .modal-title {
  font-family: "Poppins", sans-serif !important;
}
.modal-body {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}
.form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.section-title {
  color: #5F646D;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #E6D7A2;
}
.form-label {
  font-weight: 500;
  color: #5F646D;
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
}
.form-control.is-invalid,
.form-select.is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback {
  font-size: 0.75rem;
  color: #dc3545;
  margin-top: 0.25rem;
}
.participants-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.participant-card {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.2s ease;
}
.participant-card:hover {
  border-color: #d4ab3ab9;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);
}
.participant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}
.participant-number {
  color: #495057;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
}
.participant-header .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
.row {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.col-md-6 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.btn {
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary {
  background: #B68A35;
  border: #B68A35;
  color: #FFFFFF;
}
.btn-primary:hover {
  background: #A87D2A;
  border: #A87D2A;
  color: #FFFFFF;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);
}
.btn-outline-primary {
  border-color: #B68A35;
  color: #B68A35;
  background: transparent;
}
.btn-outline-primary:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-danger {
  border-color: #C62828;
  color: #C62828;
  background: transparent;
}
.btn-outline-danger:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-outline-danger:disabled {
  border-color: #6c757d;
  color: #6c757d;
  opacity: 0.6;
}
.modal-footer {
  background: #f8f9fa;
  border-top: 1px solid #E6D7A2;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
}
.modal-footer .btn {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
.alert {
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.alert-danger {
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}
.alert svg {
  color: #dc3545;
}
[dir=rtl] .form-select {
  background-position: left 0.75rem center;
  padding-left: 2.25rem;
  padding-right: 0.75rem;
}
[dir=ltr] .form-select {
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
  padding-left: 0.75rem;
}
[dir=rtl] .form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=ltr] .form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=rtl] .form-select:focus {
  background-position: left 0.75rem center;
}
[dir=ltr] .form-select:focus {
  background-position: right 0.75rem center;
}
[dir=rtl] .form-select.is-invalid {
  background-position: left 0.75rem center;
}
[dir=ltr] .form-select.is-invalid {
  background-position: right 0.75rem center;
}
/*# sourceMappingURL=add-visit-PA4VYPZJ.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: VisitsService }, { type: UsersService }, { type: TranslationService }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], visitAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddVisit, { className: "AddVisit", filePath: "src/app/components/visits/add-visit/add-visit.ts", lineNumber: 15 });
})();

// src/app/components/visits/edit-visit/edit-visit.ts
var _c02 = ["confirmationModal"];
function EditVisit_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 33);
    \u0275\u0275element(2, "circle", 34)(3, "line", 41)(4, "line", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function EditVisit_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function EditVisit_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.name, " ");
  }
}
function EditVisit_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function EditVisit_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("address"), " ");
  }
}
function EditVisit_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("visitDate"), " ");
  }
}
function EditVisit_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("purpose"), " ");
  }
}
function EditVisit_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
var EditVisit = class _EditVisit {
  fb;
  visitsService;
  translationService;
  confirmationModal;
  visitUpdated = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  destroy$ = new Subject();
  visitForm;
  loading = false;
  error = null;
  currentVisit = null;
  visitTypes = [];
  constructor(fb, visitsService, translationService) {
    this.fb = fb;
    this.visitsService = visitsService;
    this.translationService = translationService;
    this.visitForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      type: [0, Validators.required],
      address: ["", [Validators.required, Validators.minLength(5)]],
      purpose: ["", [Validators.required, Validators.minLength(10)]],
      visitDate: ["", Validators.required],
      isCompleted: [false]
    });
  }
  ngOnInit() {
    this.initializeVisitTypes();
  }
  initializeVisitTypes() {
    this.visitTypes = [
      { value: 0, name: this.translate("visits.visit_types.0") },
      { value: 1, name: this.translate("visits.visit_types.1") },
      { value: 2, name: this.translate("visits.visit_types.2") },
      { value: 3, name: this.translate("visits.visit_types.3") },
      { value: 4, name: this.translate("visits.visit_types.4") },
      { value: 5, name: this.translate("visits.visit_types.5") },
      { value: 6, name: this.translate("visits.visit_types.6") }
    ];
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  open(visit) {
    this.currentVisit = visit;
    this.populateForm(visit);
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
    this.resetForm();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  populateForm(visit) {
    const visitDate = new Date(visit.visitDate);
    const localDate = new Date(visitDate.getTime() - visitDate.getTimezoneOffset() * 6e4);
    this.visitForm.patchValue({
      title: visit.title,
      type: visit.type,
      address: visit.address,
      purpose: visit.purpose,
      visitDate: localDate.toISOString().slice(0, 16),
      isCompleted: visit.isCompleted || false
    });
  }
  onSubmit() {
    if (this.visitForm.valid && this.currentVisit) {
      this.loading = true;
      this.error = null;
      const formValue = this.visitForm.value;
      console.log("Form values:", formValue);
      const visitData = {
        title: formValue.title,
        type: Number(formValue.type),
        // Ensure type is a number
        address: formValue.address,
        purpose: formValue.purpose,
        visitDate: new Date(formValue.visitDate).toISOString(),
        isCompleted: formValue.isCompleted
      };
      console.log("Visit data being sent:", visitData);
      this.visitsService.updateVisit(this.currentVisit.id, visitData).subscribe({
        next: () => {
          this.loading = false;
          this.visitUpdated.emit();
          this.close();
          if (this.confirmationModal) {
            const successData = {
              title: this.translate("visits.edit_success_title"),
              message: this.translate("visits.edit_success_message"),
              confirmText: this.translate("common.ok"),
              cancelText: "",
              type: "info"
            };
            this.confirmationModal.show(successData);
          }
        },
        error: (err) => {
          console.error("Error updating visit:", err);
          this.error = "Failed to update visit. Please try again.";
          this.loading = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.visitForm.controls).forEach((key) => {
      const control = this.visitForm.get(key);
      control?.markAsTouched();
    });
  }
  resetForm() {
    this.visitForm.reset({
      type: 0,
      isCompleted: false
    });
    this.currentVisit = null;
    this.error = null;
    this.loading = false;
  }
  isFieldInvalid(fieldName) {
    const field = this.visitForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.visitForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return this.translate("common.field_required");
      if (field.errors["minlength"])
        return `Minimum length is ${field.errors["minlength"].requiredLength} characters`;
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function EditVisit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditVisit)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VisitsService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditVisit, selectors: [["app-edit-visit"]], viewQuery: function EditVisit_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { visitUpdated: "visitUpdated" }, standalone: false, decls: 70, vars: 38, consts: [["confirmationModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "modal-body", 3, "ngSubmit", "formGroup"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-section"], [1, "section-title"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "title", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "visitDate", 1, "form-label"], ["type", "datetime-local", "id", "visitDate", "formControlName", "visitDate", 1, "form-control"], [1, "mb-3"], ["for", "purpose", 1, "form-label"], ["id", "purpose", "rows", "3", "formControlName", "purpose", 1, "form-control", 3, "placeholder"], [1, "form-check"], ["type", "checkbox", "id", "isCompleted", "formControlName", "isCompleted", 1, "form-check-input"], ["for", "isCompleted", 1, "form-check-label"], ["role", "alert", 1, "alert", "alert-info"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4M12 8h.01"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", 3, "click"], ["role", "alert", 1, "alert", "alert-danger"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "invalid-feedback"], [3, "value"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EditVisit_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function EditVisit_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function EditVisit_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "line", 6)(6, "line", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h2", 8);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "form", 9);
      \u0275\u0275listener("ngSubmit", function EditVisit_Template_form_ngSubmit_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(10, EditVisit_div_10_Template, 6, 1, "div", 10);
      \u0275\u0275elementStart(11, "div", 11)(12, "h5", 12);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "label", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "span", 16);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "input", 17);
      \u0275\u0275template(21, EditVisit_div_21_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "label", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "select", 20);
      \u0275\u0275template(28, EditVisit_option_28_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, EditVisit_div_29_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "label", 22);
      \u0275\u0275text(33);
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 23);
      \u0275\u0275template(37, EditVisit_div_37_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 14)(39, "label", 24);
      \u0275\u0275text(40);
      \u0275\u0275elementStart(41, "span", 16);
      \u0275\u0275text(42, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(43, "input", 25);
      \u0275\u0275template(44, EditVisit_div_44_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 26)(46, "label", 27);
      \u0275\u0275text(47);
      \u0275\u0275elementStart(48, "span", 16);
      \u0275\u0275text(49, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(50, "textarea", 28);
      \u0275\u0275template(51, EditVisit_div_51_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 26)(53, "div", 29);
      \u0275\u0275element(54, "input", 30);
      \u0275\u0275elementStart(55, "label", 31);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 32);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 33);
      \u0275\u0275element(59, "circle", 34)(60, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "div", 36)(63, "button", 37);
      \u0275\u0275listener("click", function EditVisit_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(64, EditVisit_span_64_Template, 1, 0, "span", 38);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "button", 39);
      \u0275\u0275listener("click", function EditVisit_Template_button_click_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(68, "app-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.edit_visit"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.visitForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("visits.visit_details"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("title"));
      \u0275\u0275property("placeholder", ctx.translate("visits.visit_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_type"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("type"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.visitTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("type"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.address"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("address"));
      \u0275\u0275property("placeholder", ctx.translate("visits.address_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("address"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.visit_date"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("visitDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("visitDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.purpose"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("purpose"));
      \u0275\u0275property("placeholder", ctx.translate("visits.purpose_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("purpose"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.is_completed"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.participants_edit_note"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading || ctx.visitForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? ctx.translate("common.updating") : ctx.translate("common.update"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: [`

.modal-overlay[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.modal-overlay.open[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
}
.modal-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
  position: relative;
}
.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {
  transform: scale(1) translateY(0);
}
.modal-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #E6D7A2;
  background: #D4AF5F;
  color: #5F646D;
}
.modal-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #5F646D;
  order: 1;
}
.close-btn[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #5F646D;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}
.close-btn[_ngcontent-%COMP%]:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}
.form-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.section-title[_ngcontent-%COMP%] {
  color: #495057;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
}
.form-control.is-invalid[_ngcontent-%COMP%], 
.form-select.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #dc3545;
  margin-top: 0.25rem;
}
.row[_ngcontent-%COMP%] {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.col-md-6[_ngcontent-%COMP%] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  border-color: #B68A35;
  border: none;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(218, 199, 91, 0.3);
}
.btn-outline-primary[_ngcontent-%COMP%] {
  border-color: #B68A35;
  color: #B68A35;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: white;
}
.modal-footer[_ngcontent-%COMP%] {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
}
.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}
.spinner-border-sm[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
}
.alert[_ngcontent-%COMP%] {
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.alert-danger[_ngcontent-%COMP%] {
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}
.alert-info[_ngcontent-%COMP%] {
  background: #d1ecf1;
  color: #0c5460;
  border-left: 4px solid #17a2b8;
}
.alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: inherit;
}
@media (max-width: 768px) {
  .modal-lg[_ngcontent-%COMP%] {
    max-width: 95%;
    margin: 1rem;
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: 60vh;
  }
  .form-section[_ngcontent-%COMP%] {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .row[_ngcontent-%COMP%] {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
  .col-md-6[_ngcontent-%COMP%] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .modal-footer[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}
@media (max-width: 576px) {
  .modal-lg[_ngcontent-%COMP%] {
    max-width: 100%;
    margin: 0;
    height: 100vh;
  }
  .modal-dialog[_ngcontent-%COMP%] {
    height: 100vh;
    margin: 0;
  }
  .modal-content[_ngcontent-%COMP%] {
    height: 100vh;
    border-radius: 0;
  }
  .modal-header[_ngcontent-%COMP%] {
    border-radius: 0;
  }
  .modal-footer[_ngcontent-%COMP%] {
    border-radius: 0;
  }
  .form-section[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  text-align: right;
  flex-direction: row-reverse;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  order: 2;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {
  order: 1;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-family: "IBM Plex Sans Arabic", sans-serif !important;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  font-family: "Poppins", sans-serif !important;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus, 
.btn[_ngcontent-%COMP%]:focus {
  border: 1px solid #B68A35;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-position: left 0.75rem center;
  padding-left: 2.25rem;
  padding-right: 0.75rem;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
  padding-left: 0.75rem;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  background-position: left 0.75rem center;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {
  background-position: right 0.75rem center;
}
[dir=rtl][_ngcontent-%COMP%]   .form-select.is-invalid[_ngcontent-%COMP%] {
  background-position: left 0.75rem center;
}
[dir=ltr][_ngcontent-%COMP%]   .form-select.is-invalid[_ngcontent-%COMP%] {
  background-position: right 0.75rem center;
}
.form-check.rtl[_ngcontent-%COMP%] {
  direction: rtl;
  text-align: right;
}
.form-check.rtl[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
  margin-right: 0;
  float: right;
}
.form-check.rtl[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
  margin-left: 0;
  font-family: "IBM Plex Sans Arabic", sans-serif;
}
.form-check[_ngcontent-%COMP%]:not(.rtl) {
  direction: ltr;
  text-align: left;
}
.form-check[_ngcontent-%COMP%]:not(.rtl)   .form-check-input[_ngcontent-%COMP%] {
  margin-right: 0.5rem;
  margin-left: 0;
  float: left;
}
.form-check[_ngcontent-%COMP%]:not(.rtl)   .form-check-label[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
  margin-right: 0;
  font-family: "Poppins", sans-serif;
}
/*# sourceMappingURL=edit-visit-5PMU7SPZ.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditVisit, [{
    type: Component,
    args: [{ selector: "app-edit-visit", standalone: false, template: `<div class="modal-overlay" [class.open]="isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-container">\r
    <div class="modal-header">\r
      \r
      <button type="button" class="close-btn" (click)="close()" aria-label="Close">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
      <h2 class="modal-title">\r
        \r
        {{ translate('visits.edit_visit') }}\r
      </h2>\r
    </div>\r
\r
    <form [formGroup]="visitForm" (ngSubmit)="onSubmit()" class="modal-body">\r
      <!-- Error Display -->\r
      <div *ngIf="error" class="alert alert-danger" role="alert">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
          <circle cx="12" cy="12" r="10"/>\r
          <line x1="15" y1="9" x2="9" y2="15"/>\r
          <line x1="9" y1="9" x2="15" y2="15"/>\r
        </svg>\r
        {{ error }}\r
      </div>\r
\r
      <!-- Visit Details Section -->\r
      <div class="form-section">\r
        <h5 class="section-title">{{ translate('visits.visit_details') }}</h5>\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label for="title" class="form-label">\r
              {{ translate('visits.visit_title') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="title"\r
              formControlName="title"\r
              [class.is-invalid]="isFieldInvalid('title')"\r
              [placeholder]="translate('visits.visit_title_placeholder')">\r
            <div *ngIf="isFieldInvalid('title')" class="invalid-feedback">\r
              {{ getFieldError('title') }}\r
            </div>\r
          </div>\r
\r
          <div class="col-md-6 mb-3">\r
            <label for="type" class="form-label">\r
              {{ translate('visits.visit_type') }} <span class="text-danger">*</span>\r
            </label>\r
            <select \r
              class="form-select" \r
              id="type"\r
              formControlName="type"\r
              [class.is-invalid]="isFieldInvalid('type')">\r
              <option *ngFor="let type of visitTypes" [value]="type.value">\r
                {{ type.name }}\r
              </option>\r
            </select>\r
            <div *ngIf="isFieldInvalid('type')" class="invalid-feedback">\r
              {{ getFieldError('type') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="col-md-6 mb-3">\r
            <label for="address" class="form-label">\r
              {{ translate('visits.address') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="address"\r
              formControlName="address"\r
              [class.is-invalid]="isFieldInvalid('address')"\r
              [placeholder]="translate('visits.address_placeholder')">\r
            <div *ngIf="isFieldInvalid('address')" class="invalid-feedback">\r
              {{ getFieldError('address') }}\r
            </div>\r
          </div>\r
\r
          <div class="col-md-6 mb-3">\r
            <label for="visitDate" class="form-label">\r
              {{ translate('visits.visit_date') }} <span class="text-danger">*</span>\r
            </label>\r
            <input \r
              type="datetime-local" \r
              class="form-control" \r
              id="visitDate"\r
              formControlName="visitDate"\r
              [class.is-invalid]="isFieldInvalid('visitDate')">\r
            <div *ngIf="isFieldInvalid('visitDate')" class="invalid-feedback">\r
              {{ getFieldError('visitDate') }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <label for="purpose" class="form-label">\r
            {{ translate('visits.purpose') }} <span class="text-danger">*</span>\r
          </label>\r
          <textarea \r
            class="form-control" \r
            id="purpose"\r
            rows="3"\r
            formControlName="purpose"\r
            [class.is-invalid]="isFieldInvalid('purpose')"\r
            [placeholder]="translate('visits.purpose_placeholder')"></textarea>\r
          <div *ngIf="isFieldInvalid('purpose')" class="invalid-feedback">\r
            {{ getFieldError('purpose') }}\r
          </div>\r
        </div>\r
\r
        <div class="mb-3">\r
          <div class="form-check" [class.rtl]="isRTL()">\r
            <input \r
              class="form-check-input" \r
              type="checkbox" \r
              id="isCompleted"\r
              formControlName="isCompleted">\r
            <label class="form-check-label" for="isCompleted">\r
              {{ translate('visits.is_completed') }}\r
            </label>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Note about participants -->\r
      <div class="alert alert-info" role="alert">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
          <circle cx="12" cy="12" r="10"/>\r
          <path d="M12 16v-4M12 8h.01"/>\r
        </svg>\r
        {{ translate('visits.participants_edit_note') }}\r
      </div>\r
    </form>\r
\r
    <div class="modal-footer">\r
      \r
      <button \r
        type="button" \r
        class="btn btn-primary" \r
        (click)="onSubmit()"\r
        [disabled]="loading || visitForm.invalid">\r
        <span *ngIf="loading" class="spinner-border spinner-border-sm me-2" role="status"></span>\r
        {{ loading ? translate('common.updating') : translate('common.update') }}\r
      </button>\r
      <button type="button" class="btn btn-secondary ms-2" (click)="close()">\r
        {{ translate('common.cancel') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>`, styles: [`/* src/app/components/visits/edit-visit/edit-visit.css */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.modal-overlay.open {
  opacity: 1;
  visibility: visible;
}
.modal-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  transform: scale(0.9) translateY(20px);
  transition: all 0.3s ease;
  position: relative;
}
.modal-overlay.open .modal-container {
  transform: scale(1) translateY(0);
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #E6D7A2;
  background: #D4AF5F;
  color: #5F646D;
}
.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #5F646D;
  order: 1;
}
.close-btn {
  background: none;
  border: none;
  color: #5F646D;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}
.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}
.modal-body {
  padding: 2rem;
  max-height: 70vh;
  overflow-y: auto;
}
.form-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}
.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
}
.form-label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);
}
.form-control.is-invalid,
.form-select.is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback {
  font-size: 0.75rem;
  color: #dc3545;
  margin-top: 0.25rem;
}
.row {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.col-md-6 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.btn {
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary {
  background: #B68A35;
  border-color: #B68A35;
  border: none;
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(218, 199, 91, 0.3);
}
.btn-outline-primary {
  border-color: #B68A35;
  color: #B68A35;
}
.btn-outline-primary:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: white;
}
.modal-footer {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 1.5rem;
  border-radius: 0 0 12px 12px;
}
.modal-footer .btn {
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}
.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
.alert {
  border-radius: 8px;
  border: none;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.alert-danger {
  background: #f8d7da;
  color: #721c24;
  border-left: 4px solid #dc3545;
}
.alert-info {
  background: #d1ecf1;
  color: #0c5460;
  border-left: 4px solid #17a2b8;
}
.alert svg {
  color: inherit;
}
@media (max-width: 768px) {
  .modal-lg {
    max-width: 95%;
    margin: 1rem;
  }
  .modal-body {
    padding: 1rem;
    max-height: 60vh;
  }
  .form-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .row {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
  .col-md-6 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .modal-footer {
    padding: 1rem;
  }
}
@media (max-width: 576px) {
  .modal-lg {
    max-width: 100%;
    margin: 0;
    height: 100vh;
  }
  .modal-dialog {
    height: 100vh;
    margin: 0;
  }
  .modal-content {
    height: 100vh;
    border-radius: 0;
  }
  .modal-header {
    border-radius: 0;
  }
  .modal-footer {
    border-radius: 0;
  }
  .form-section {
    margin-bottom: 1rem;
  }
}
[dir=rtl] .modal-header {
  text-align: right;
  flex-direction: row-reverse;
}
[dir=rtl] .modal-header .modal-title {
  order: 2;
}
[dir=rtl] .modal-header .close-btn {
  order: 1;
}
[dir=rtl] .modal-title {
  font-family: "IBM Plex Sans Arabic", sans-serif !important;
}
[dir=ltr] .modal-title {
  font-family: "Poppins", sans-serif !important;
}
[dir=rtl] .modal-footer {
  flex-direction: row-reverse;
}
.form-control:focus,
.form-select:focus,
.btn:focus {
  border: 1px solid #B68A35;
}
.modal-body::-webkit-scrollbar {
  width: 6px;
}
.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
[dir=rtl] .form-select {
  background-position: left 0.75rem center;
  padding-left: 2.25rem;
  padding-right: 0.75rem;
}
[dir=ltr] .form-select {
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
  padding-left: 0.75rem;
}
[dir=rtl] .form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=ltr] .form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 16px 12px;
}
[dir=rtl] .form-select:focus {
  background-position: left 0.75rem center;
}
[dir=ltr] .form-select:focus {
  background-position: right 0.75rem center;
}
[dir=rtl] .form-select.is-invalid {
  background-position: left 0.75rem center;
}
[dir=ltr] .form-select.is-invalid {
  background-position: right 0.75rem center;
}
.form-check.rtl {
  direction: rtl;
  text-align: right;
}
.form-check.rtl .form-check-input {
  margin-left: 0.5rem;
  margin-right: 0;
  float: right;
}
.form-check.rtl .form-check-label {
  margin-right: 0.5rem;
  margin-left: 0;
  font-family: "IBM Plex Sans Arabic", sans-serif;
}
.form-check:not(.rtl) {
  direction: ltr;
  text-align: left;
}
.form-check:not(.rtl) .form-check-input {
  margin-right: 0.5rem;
  margin-left: 0;
  float: left;
}
.form-check:not(.rtl) .form-check-label {
  margin-left: 0.5rem;
  margin-right: 0;
  font-family: "Poppins", sans-serif;
}
/*# sourceMappingURL=edit-visit-5PMU7SPZ.css.map */
`] }]
  }], () => [{ type: FormBuilder }, { type: VisitsService }, { type: TranslationService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], visitUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditVisit, { className: "EditVisit", filePath: "src/app/components/visits/edit-visit/edit-visit.ts", lineNumber: 15 });
})();

// node_modules/@popperjs/core/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  afterMain: () => afterMain,
  afterRead: () => afterRead,
  afterWrite: () => afterWrite,
  applyStyles: () => applyStyles_default,
  arrow: () => arrow_default,
  auto: () => auto,
  basePlacements: () => basePlacements,
  beforeMain: () => beforeMain,
  beforeRead: () => beforeRead,
  beforeWrite: () => beforeWrite,
  bottom: () => bottom,
  clippingParents: () => clippingParents,
  computeStyles: () => computeStyles_default,
  createPopper: () => createPopper3,
  createPopperBase: () => createPopper,
  createPopperLite: () => createPopper2,
  detectOverflow: () => detectOverflow,
  end: () => end,
  eventListeners: () => eventListeners_default,
  flip: () => flip_default,
  hide: () => hide_default,
  left: () => left,
  main: () => main,
  modifierPhases: () => modifierPhases,
  offset: () => offset_default,
  placements: () => placements,
  popper: () => popper,
  popperGenerator: () => popperGenerator,
  popperOffsets: () => popperOffsets_default,
  preventOverflow: () => preventOverflow_default,
  read: () => read,
  reference: () => reference,
  right: () => right,
  start: () => start,
  top: () => top,
  variationPlacements: () => variationPlacements,
  viewport: () => viewport,
  write: () => write
});

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle2(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle2(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle2(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle2(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /* @__PURE__ */ popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = /* @__PURE__ */ popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/bootstrap/dist/js/bootstrap.esm.js
var elementMap = /* @__PURE__ */ new Map();
var Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, /* @__PURE__ */ new Map());
    }
    const instanceMap = elementMap.get(element);
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
var MAX_UID = 1e6;
var MILLISECONDS_MULTIPLIER = 1e3;
var TRANSITION_END = "transitionend";
var parseSelector = (selector) => {
  if (selector && window.CSS && window.CSS.escape) {
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};
var toType = (object) => {
  if (object === null || object === void 0) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
var getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement2 = (object) => {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }
  return typeof object.nodeType !== "undefined";
};
var getElement = (object) => {
  if (isElement2(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === "string" && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
var isVisible = (element) => {
  if (!isElement2(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
  const closedDetails = element.closest("details:not([open])");
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains("disabled")) {
    return true;
  }
  if (typeof element.disabled !== "undefined") {
    return element.disabled;
  }
  return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
var findShadowRoot = (element) => {
  if (!document.documentElement.attachShadow) {
    return null;
  }
  if (typeof element.getRootNode === "function") {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
var noop = () => {
};
var reflow = (element) => {
  element.offsetHeight;
};
var getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = (callback) => {
  if (document.readyState === "loading") {
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener("DOMContentLoaded", () => {
        for (const callback2 of DOMContentLoadedCallbacks) {
          callback2();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = () => document.documentElement.dir === "rtl";
var defineJQueryPlugin = (plugin) => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
};
var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn2) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn2);
    }
    return fn2.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn2) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn2);
        }
        return fn2.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === "string";
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
  if (originalTypeEvent in customEvents) {
    const wrapFunction = (fn3) => {
      return function(event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn3.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
  const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn2.delegationSelector = isDelegated ? handler : null;
  fn2.callable = callable;
  fn2.oneOff = oneOff;
  fn2.uidEvent = uid;
  handlers[uid] = fn2;
  element.addEventListener(typeEvent, fn2, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn2) {
    return;
  }
  element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
  delete events[typeEvent][fn2.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  event = event.replace(stripNameRegex, "");
  return customEvents[event] || event;
}
var EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith(".");
    if (typeof callable !== "undefined") {
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, "");
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== "string" || !element) {
      return null;
    }
    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
function normalizeData(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === "" || value === "null") {
    return null;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
var Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, "");
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};
var Config = class {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), typeof jsonConfig === "object" ? jsonConfig : {}), isElement2(element) ? Manipulator.getDataAttributes(element) : {}), typeof config === "object" ? config : {});
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement2(value) ? "element" : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
};
var VERSION = "5.3.8";
var BaseComponent = class extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }
  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  // Private
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
};
var getSelector = (element) => {
  let selector = element.getAttribute("data-bs-target");
  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");
    if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
      return null;
    }
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
};
var SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
    return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};
var enableDismissTrigger = (component, method = "hide") => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);
    instance[method]();
  });
};
var NAME$f = "alert";
var DATA_KEY$a = "bs.alert";
var EVENT_KEY$b = `.${DATA_KEY$a}`;
var EVENT_CLOSE = `close${EVENT_KEY$b}`;
var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
var CLASS_NAME_FADE$5 = "fade";
var CLASS_NAME_SHOW$8 = "show";
var Alert = class _Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }
  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }
  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Alert.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
enableDismissTrigger(Alert, "close");
defineJQueryPlugin(Alert);
var NAME$e = "button";
var DATA_KEY$9 = "bs.button";
var EVENT_KEY$a = `.${DATA_KEY$9}`;
var DATA_API_KEY$6 = ".data-api";
var CLASS_NAME_ACTIVE$3 = "active";
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
var Button = class _Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Button.getOrCreateInstance(this);
      if (config === "toggle") {
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
defineJQueryPlugin(Button);
var NAME$d = "swipe";
var EVENT_KEY$9 = ".bs.swipe";
var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
var POINTER_TYPE_TOUCH = "touch";
var POINTER_TYPE_PEN = "pen";
var CLASS_NAME_POINTER_EVENT = "pointer-event";
var SWIPE_THRESHOLD = 40;
var Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
var DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
var Swipe = class _Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !_Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }
  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }
  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }
  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
};
var NAME$c = "carousel";
var DATA_KEY$8 = "bs.carousel";
var EVENT_KEY$8 = `.${DATA_KEY$8}`;
var DATA_API_KEY$5 = ".data-api";
var ARROW_LEFT_KEY$1 = "ArrowLeft";
var ARROW_RIGHT_KEY$1 = "ArrowRight";
var TOUCHEVENT_COMPAT_WAIT = 500;
var ORDER_NEXT = "next";
var ORDER_PREV = "prev";
var DIRECTION_LEFT = "left";
var DIRECTION_RIGHT = "right";
var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
var EVENT_SLID = `slid${EVENT_KEY$8}`;
var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
var CLASS_NAME_CAROUSEL = "carousel";
var CLASS_NAME_ACTIVE$2 = "active";
var CLASS_NAME_SLIDE = "slide";
var CLASS_NAME_END = "carousel-item-end";
var CLASS_NAME_START = "carousel-item-start";
var CLASS_NAME_NEXT = "carousel-item-next";
var CLASS_NAME_PREV = "carousel-item-prev";
var SELECTOR_ACTIVE = ".active";
var SELECTOR_ITEM = ".carousel-item";
var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
var SELECTOR_ITEM_IMG = ".carousel-item img";
var SELECTOR_INDICATORS = ".carousel-indicators";
var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
var Default$b = {
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  ride: false,
  touch: true,
  wrap: true
};
var DefaultType$b = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
var Carousel = class _Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }
  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }
  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order2, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
    }
    if (this._config.pause === "hover") {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== "hover") {
        return;
      }
      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute("aria-current");
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute("aria-current", "true");
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order2, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order2 === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order2),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order2) {
    if (isRTL()) {
      return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Carousel.getOrCreateInstance(this, config);
      if (typeof config === "number") {
        data.to(config);
        return;
      }
      if (typeof config === "string") {
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute("data-bs-slide-to");
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, "slide") === "next") {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
defineJQueryPlugin(Carousel);
var NAME$b = "collapse";
var DATA_KEY$7 = "bs.collapse";
var EVENT_KEY$7 = `.${DATA_KEY$7}`;
var DATA_API_KEY$4 = ".data-api";
var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
var CLASS_NAME_SHOW$7 = "show";
var CLASS_NAME_COLLAPSE = "collapse";
var CLASS_NAME_COLLAPSING = "collapsing";
var CLASS_NAME_COLLAPSED = "collapsed";
var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
var WIDTH = "width";
var HEIGHT = "height";
var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Default$a = {
  parent: null,
  toggle: true
};
var DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};
var Collapse = class _Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }
  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }
  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = "";
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = "";
    this._queueCallback(complete, this._element, true);
  }
  // Private
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle);
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute("aria-expanded", isOpen);
    }
  }
  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === "string" && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function() {
      const data = _Collapse.getOrCreateInstance(this, _config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
  if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
defineJQueryPlugin(Collapse);
var NAME$a = "dropdown";
var DATA_KEY$6 = "bs.dropdown";
var EVENT_KEY$6 = `.${DATA_KEY$6}`;
var DATA_API_KEY$3 = ".data-api";
var ESCAPE_KEY$2 = "Escape";
var TAB_KEY$1 = "Tab";
var ARROW_UP_KEY$1 = "ArrowUp";
var ARROW_DOWN_KEY$1 = "ArrowDown";
var RIGHT_MOUSE_BUTTON = 2;
var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
var CLASS_NAME_SHOW$6 = "show";
var CLASS_NAME_DROPUP = "dropup";
var CLASS_NAME_DROPEND = "dropend";
var CLASS_NAME_DROPSTART = "dropstart";
var CLASS_NAME_DROPUP_CENTER = "dropup-center";
var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
var SELECTOR_MENU = ".dropdown-menu";
var SELECTOR_NAVBAR = ".navbar";
var SELECTOR_NAVBAR_NAV = ".navbar-nav";
var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
var PLACEMENT_TOPCENTER = "top";
var PLACEMENT_BOTTOMCENTER = "bottom";
var Default$9 = {
  autoClose: true,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
};
var DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
var Dropdown = class _Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode;
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();
    if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    this._element.focus();
    this._element.setAttribute("aria-expanded", true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }
  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute("aria-expanded", "false");
    Manipulator.removeDataAttribute(this._menu, "popper");
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    }
    let referenceElement = this._element;
    if (this._config.reference === "parent") {
      referenceElement = this._parent;
    } else if (isElement2(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === "object") {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = createPopper3(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }
    const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    if (this._inNavbar || this._config.display === "static") {
      Manipulator.setDataAttribute(this._menu, "popper", "static");
      defaultBsPopperConfig.modifiers = [{
        name: "applyStyles",
        enabled: false
      }];
    }
    return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [void 0, defaultBsPopperConfig]));
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
    if (!items.length) {
      return;
    }
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = _Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
        continue;
      }
      if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === "click") {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = _Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
};
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
var NAME$9 = "backdrop";
var CLASS_NAME_FADE$4 = "fade";
var CLASS_NAME_SHOW$5 = "show";
var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
var Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
};
var DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
var Backdrop = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }
  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }
  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }
  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement("div");
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
};
var NAME$8 = "focustrap";
var DATA_KEY$5 = "bs.focustrap";
var EVENT_KEY$5 = `.${DATA_KEY$5}`;
var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
var TAB_KEY = "Tab";
var TAB_NAV_FORWARD = "forward";
var TAB_NAV_BACKWARD = "backward";
var Default$7 = {
  autofocus: true,
  trapElement: null
  // The element to trap focus inside of
};
var DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};
var FocusTrap = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }
  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5);
    EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }
  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
};
var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var SELECTOR_STICKY_CONTENT = ".sticky-top";
var PROPERTY_PADDING = "padding-right";
var PROPERTY_MARGIN = "margin-right";
var ScrollBarHelper = class {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow");
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow");
    this._element.style.overflow = "hidden";
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = (element) => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = (element) => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement2(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
};
var NAME$7 = "modal";
var DATA_KEY$4 = "bs.modal";
var EVENT_KEY$4 = `.${DATA_KEY$4}`;
var DATA_API_KEY$2 = ".data-api";
var ESCAPE_KEY$1 = "Escape";
var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
var CLASS_NAME_OPEN = "modal-open";
var CLASS_NAME_FADE$3 = "fade";
var CLASS_NAME_SHOW$4 = "show";
var CLASS_NAME_STATIC = "modal-static";
var OPEN_SELECTOR$1 = ".modal.show";
var SELECTOR_DIALOG = ".modal-dialog";
var SELECTOR_MODAL_BODY = ".modal-body";
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
var DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
var Modal = class _Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = "block";
    this._element.removeAttribute("aria-hidden");
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === "static") {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none";
    this._element.setAttribute("aria-hidden", true);
    this._element.removeAttribute("aria-modal");
    this._element.removeAttribute("role");
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = "hidden";
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "";
    this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function() {
      const data = _Modal.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
    if (showEvent.defaultPrevented) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
var NAME$6 = "offcanvas";
var DATA_KEY$3 = "bs.offcanvas";
var EVENT_KEY$3 = `.${DATA_KEY$3}`;
var DATA_API_KEY$1 = ".data-api";
var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
var ESCAPE_KEY = "Escape";
var CLASS_NAME_SHOW$3 = "show";
var CLASS_NAME_SHOWING$1 = "showing";
var CLASS_NAME_HIDING = "hiding";
var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
var OPEN_SELECTOR = ".offcanvas.show";
var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
var Offcanvas = class _Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === "static") {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };
    const isVisible2 = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: isVisible2,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible2 ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    if (isVisible(this)) {
      this.focus();
    }
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
    if (getComputedStyle(element).position !== "fixed") {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
var DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
var allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }
  return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === "function") {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
  const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}
var NAME$5 = "TemplateFactory";
var Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: "<div></div>"
};
var DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
};
var DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
var TemplateFactory = class extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }
  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = __spreadValues(__spreadValues({}, this._config.content), content);
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement("div");
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(" "));
    }
    return template;
  }
  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement2(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [void 0, this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = "";
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
};
var NAME$4 = "tooltip";
var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var CLASS_NAME_FADE$2 = "fade";
var CLASS_NAME_MODAL = "modal";
var CLASS_NAME_SHOW$2 = "show";
var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
var EVENT_MODAL_HIDE = "hide.bs.modal";
var TRIGGER_HOVER = "hover";
var TRIGGER_FOCUS = "focus";
var TRIGGER_CLICK = "click";
var TRIGGER_MANUAL = "manual";
var EVENT_HIDE$2 = "hide";
var EVENT_HIDDEN$2 = "hidden";
var EVENT_SHOW$2 = "show";
var EVENT_SHOWN$2 = "shown";
var EVENT_INSERTED = "inserted";
var EVENT_CLICK$1 = "click";
var EVENT_FOCUSIN$1 = "focusin";
var EVENT_FOCUSOUT$1 = "focusout";
var EVENT_MOUSEENTER = "mouseenter";
var EVENT_MOUSELEAVE = "mouseleave";
var AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
};
var Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: "clippingParents",
  container: false,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: false,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
};
var DefaultType$3 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
var Tooltip = class _Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof lib_exports === "undefined") {
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    }
    super(element, config);
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }
  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute("data-bs-original-title")) {
      this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === "none") {
      throw new Error("Please use show on visible elements");
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null;
    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute("aria-describedby");
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }
  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute("id", tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory(__spreadProps(__spreadValues({}, this._config), {
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      }));
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return createPopper3(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element, this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: true,
        phase: "beforeMain",
        fn: (data) => {
          this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
        }
      }]
    };
    return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [void 0, defaultBsPopperConfig]));
  }
  _setListeners() {
    const triggers = this._config.trigger.split(" ");
    for (const trigger of triggers) {
      if (trigger === "click") {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute("title");
    if (!title) {
      return;
    }
    if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
      this._element.setAttribute("aria-label", title);
    }
    this._element.setAttribute("data-bs-original-title", title);
    this._element.removeAttribute("title");
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = __spreadValues(__spreadValues({}, dataAttributes), typeof config === "object" && config ? config : {});
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === "number") {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === "number") {
      config.title = config.title.toString();
    }
    if (typeof config.content === "number") {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = "manual";
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Tooltip);
var NAME$3 = "popover";
var SELECTOR_TITLE = ".popover-header";
var SELECTOR_CONTENT = ".popover-body";
var Default$2 = __spreadProps(__spreadValues({}, Tooltip.Default), {
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
});
var DefaultType$2 = __spreadProps(__spreadValues({}, Tooltip.DefaultType), {
  content: "(null|string|element|function)"
});
var Popover = class _Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Popover.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy";
var DATA_KEY$2 = "bs.scrollspy";
var EVENT_KEY$2 = `.${DATA_KEY$2}`;
var DATA_API_KEY = ".data-api";
var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
var EVENT_CLICK = `click${EVENT_KEY$2}`;
var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
var CLASS_NAME_ACTIVE$1 = "active";
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_TARGET_LINKS = "[href]";
var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
var SELECTOR_NAV_LINKS = ".nav-link";
var SELECTOR_NAV_ITEMS = ".nav-item";
var SELECTOR_LIST_ITEMS = ".list-group-item";
var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
var SELECTOR_DROPDOWN = ".dropdown";
var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
var Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
var DefaultType$1 = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
var ScrollSpy = class _ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh();
  }
  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target) || document.body;
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === "string") {
      config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: "smooth"
          });
          return;
        }
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((entries) => this._observerCallback(entries), options);
  }
  // The logic of selection
  _observerCallback(entries) {
    const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
    const activate = (entry) => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        if (!parentScrollTop) {
          return;
        }
        continue;
      }
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab";
var DATA_KEY$1 = "bs.tab";
var EVENT_KEY$1 = `.${DATA_KEY$1}`;
var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
var ARROW_LEFT_KEY = "ArrowLeft";
var ARROW_RIGHT_KEY = "ArrowRight";
var ARROW_UP_KEY = "ArrowUp";
var ARROW_DOWN_KEY = "ArrowDown";
var HOME_KEY = "Home";
var END_KEY = "End";
var CLASS_NAME_ACTIVE = "active";
var CLASS_NAME_FADE$1 = "fade";
var CLASS_NAME_SHOW$1 = "show";
var CLASS_DROPDOWN = "dropdown";
var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
var SELECTOR_OUTER = ".nav-item, .list-group-item";
var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
var Tab = class _Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
    }
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
  }
  // Getters
  static get NAME() {
    return NAME$1;
  }
  // Public
  show() {
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }
  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute("tabindex");
      element.setAttribute("aria-selected", true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", "-1");
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const children = this._getChildren().filter((element) => !isDisabled(element));
    let nextActiveElement;
    if ([HOME_KEY, END_KEY].includes(event.key)) {
      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
    } else {
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
    }
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      _Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((child) => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, "role", "tablist");
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute("aria-selected", isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, "role", "presentation");
    }
    if (!isActive) {
      child.setAttribute("tabindex", "-1");
    }
    this._setAttributeIfNotExists(child, "role", "tab");
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, "role", "tabpanel");
    if (child.id) {
      this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element2 = SelectorEngine.findOne(selector, outerElem);
      if (element2) {
        element2.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute("aria-expanded", open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Tab.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
};
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
defineJQueryPlugin(Tab);
var NAME = "toast";
var DATA_KEY = "bs.toast";
var EVENT_KEY = `.${DATA_KEY}`;
var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
var EVENT_HIDE = `hide${EVENT_KEY}`;
var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
var EVENT_SHOW = `show${EVENT_KEY}`;
var EVENT_SHOWN = `shown${EVENT_KEY}`;
var CLASS_NAME_FADE = "fade";
var CLASS_NAME_HIDE = "hide";
var CLASS_NAME_SHOW = "show";
var CLASS_NAME_SHOWING = "showing";
var DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
var Default = {
  animation: true,
  autohide: true,
  delay: 5e3
};
var Toast = class _Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }
  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }
  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE);
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }
  // Private
  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = isInteracting;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = isInteracting;
        break;
      }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = _Toast.getOrCreateInstance(this, config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
};
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);

// src/app/components/visits/add-participant/add-participant.ts
var _c03 = ["addParticipant"];
function AddParticipant_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 6);
    \u0275\u0275element(2, "circle", 38)(3, "line", 39)(4, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function AddParticipant_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.name, " ");
  }
}
function AddParticipant_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("kind"), " ");
  }
}
function AddParticipant_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("displayName"), " ");
  }
}
function AddParticipant_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("jobTitle"), " ");
  }
}
function AddParticipant_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("department"), " ");
  }
}
function AddParticipant_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("organization"), " ");
  }
}
function AddParticipant_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("email"), " ");
  }
}
function AddParticipant_span_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 43);
  }
}
var AddParticipant = class _AddParticipant {
  fb;
  translationService;
  addParticipant;
  modal;
  destroy$ = new Subject();
  participantForm;
  loading = false;
  error = null;
  participantTypes = [];
  constructor(fb, translationService) {
    this.fb = fb;
    this.translationService = translationService;
    this.participantForm = this.fb.group({
      kind: [0, Validators.required],
      userId: [""],
      displayName: ["", [Validators.required, Validators.minLength(2)]],
      organization: [""],
      jobTitle: ["", [Validators.required, Validators.minLength(2)]],
      department: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.email]]
    });
  }
  ngOnInit() {
    this.initializeParticipantTypes();
  }
  initializeParticipantTypes() {
    this.participantTypes = [
      { value: 0, name: this.translate("visits.participant_types.internal") },
      { value: 1, name: this.translate("visits.participant_types.external") }
    ];
  }
  ngAfterViewInit() {
    this.setupModal();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupModal() {
    if (this.addParticipant && this.addParticipant.nativeElement) {
      this.modal = new Modal(this.addParticipant.nativeElement, {
        backdrop: true,
        keyboard: true,
        focus: true
      });
      this.addParticipant.nativeElement.addEventListener("hidden.bs.modal", () => {
        this.resetForm();
      });
    }
  }
  open() {
    if (this.modal) {
      this.modal.show();
    }
  }
  close() {
    if (this.modal) {
      this.modal.hide();
    }
  }
  onSubmit() {
    if (this.participantForm.valid) {
      this.loading = true;
      this.error = null;
      console.log("Participant data:", this.participantForm.value);
      setTimeout(() => {
        this.loading = false;
        this.close();
      }, 1e3);
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.participantForm.controls).forEach((key) => {
      const control = this.participantForm.get(key);
      control?.markAsTouched();
    });
  }
  resetForm() {
    this.participantForm.reset({
      kind: 0
    });
    this.error = null;
    this.loading = false;
  }
  isFieldInvalid(fieldName) {
    const field = this.participantForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.participantForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors["required"])
        return this.translate("common.field_required");
      if (field.errors["minlength"])
        return `Minimum length is ${field.errors["minlength"].requiredLength} characters`;
      if (field.errors["email"])
        return this.translate("common.email_invalid");
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  static \u0275fac = function AddParticipant_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddParticipant)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddParticipant, selectors: [["app-add-participant"]], viewQuery: function AddParticipant_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addParticipant = _t.first);
    }
  }, standalone: false, decls: 66, vars: 38, consts: [["addParticipant", ""], ["id", "addParticipantModal", "tabindex", "-1", "aria-labelledby", "addParticipantModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "addParticipantModalLabel", 1, "modal-title", "fs-5"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", 3, "ngSubmit", "formGroup"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-section"], [1, "section-title"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "kind", 1, "form-label"], [1, "text-danger"], ["id", "kind", "formControlName", "kind", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "displayName", 1, "form-label"], ["type", "text", "id", "displayName", "formControlName", "displayName", 1, "form-control", 3, "placeholder"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "id", "jobTitle", "formControlName", "jobTitle", 1, "form-control", 3, "placeholder"], ["for", "department", 1, "form-label"], ["type", "text", "id", "department", "formControlName", "department", 1, "form-control", 3, "placeholder"], ["for", "organization", 1, "form-label"], ["type", "text", "id", "organization", "formControlName", "organization", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [3, "value"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddParticipant_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7)(8, "circle", 8)(9, "path", 9)(10, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 11);
      \u0275\u0275listener("click", function AddParticipant_Template_button_click_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "form", 12);
      \u0275\u0275listener("ngSubmit", function AddParticipant_Template_form_ngSubmit_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(14, AddParticipant_div_14_Template, 6, 1, "div", 13);
      \u0275\u0275elementStart(15, "div", 14)(16, "h5", 15);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 16)(19, "div", 17)(20, "label", 18);
      \u0275\u0275text(21);
      \u0275\u0275elementStart(22, "span", 19);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "select", 20);
      \u0275\u0275template(25, AddParticipant_option_25_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, AddParticipant_div_26_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 17)(28, "label", 23);
      \u0275\u0275text(29);
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275text(31, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(32, "input", 24);
      \u0275\u0275template(33, AddParticipant_div_33_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 16)(35, "div", 17)(36, "label", 25);
      \u0275\u0275text(37);
      \u0275\u0275elementStart(38, "span", 19);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(40, "input", 26);
      \u0275\u0275template(41, AddParticipant_div_41_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 17)(43, "label", 27);
      \u0275\u0275text(44);
      \u0275\u0275elementStart(45, "span", 19);
      \u0275\u0275text(46, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "input", 28);
      \u0275\u0275template(48, AddParticipant_div_48_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 16)(50, "div", 17)(51, "label", 29);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 30);
      \u0275\u0275template(54, AddParticipant_div_54_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 17)(56, "label", 31);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 32);
      \u0275\u0275template(59, AddParticipant_div_59_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 33)(61, "button", 34);
      \u0275\u0275listener("click", function AddParticipant_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 35);
      \u0275\u0275listener("click", function AddParticipant_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275template(64, AddParticipant_span_64_Template, 1, 0, "span", 36);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.add_participant"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.participantForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("visits.participant_details"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.participant_type"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("kind"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.participantTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("kind"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.participant_name"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("displayName"));
      \u0275\u0275property("placeholder", ctx.translate("visits.participant_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("displayName"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.job_title"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275property("placeholder", ctx.translate("visits.job_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("jobTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.department"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("department"));
      \u0275\u0275property("placeholder", ctx.translate("visits.department_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("department"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.organization"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("organization"));
      \u0275\u0275property("placeholder", ctx.translate("visits.organization_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("organization"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("visits.email"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldInvalid("email"));
      \u0275\u0275property("placeholder", ctx.translate("visits.email_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldInvalid("email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading || ctx.participantForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? ctx.translate("common.saving") : ctx.translate("common.save"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.modal.show[_ngcontent-%COMP%] {\n  z-index: 1060 !important;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #E6D7A2 100%);\n  color: white;\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.modal-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n.btn-close[_ngcontent-%COMP%] {\n  filter: invert(1);\n  opacity: 0.8;\n  order: 2;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #dee2e6;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.row[_ngcontent-%COMP%] {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.col-md-6[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2c3e50 0%,\n      #34495e 100%);\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  color: #B68A35;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem;\n  border-radius: 0 0 12px 12px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border-left: 4px solid #dc3545;\n}\n.alert[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n@media (max-width: 768px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 95%;\n    margin: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .row[_ngcontent-%COMP%] {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n  .col-md-6[_ngcontent-%COMP%] {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n    height: 100vh;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin: 0;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  order: 2;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  order: 1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif !important;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #28a745;\n  outline-offset: 2px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=add-participant-MFR3CW6M.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddParticipant, [{
    type: Component,
    args: [{ selector: "app-add-participant", standalone: false, template: `<div class="modal fade" #addParticipant id="addParticipantModal" tabindex="-1" aria-labelledby="addParticipantModalLabel" aria-hidden="true">\r
  <div class="modal-dialog modal-dialog-centered modal-lg">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <h1 class="modal-title fs-5" id="addParticipantModalLabel">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
            <circle cx="9" cy="7" r="4"/>\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
          </svg>\r
          {{ translate('visits.add_participant') }}\r
        </h1>\r
        <button type="button" class="btn-close" (click)="close()" aria-label="Close"></button>\r
      </div>\r
\r
      <form [formGroup]="participantForm" (ngSubmit)="onSubmit()" class="modal-body">\r
        <!-- Error Display -->\r
        <div *ngIf="error" class="alert alert-danger" role="alert">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="15" y1="9" x2="9" y2="15"/>\r
            <line x1="9" y1="9" x2="15" y2="15"/>\r
          </svg>\r
          {{ error }}\r
        </div>\r
\r
        <!-- Participant Details Section -->\r
        <div class="form-section">\r
          <h5 class="section-title">{{ translate('visits.participant_details') }}</h5>\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label for="kind" class="form-label">\r
                {{ translate('visits.participant_type') }} <span class="text-danger">*</span>\r
              </label>\r
              <select \r
                class="form-select" \r
                id="kind"\r
                formControlName="kind"\r
                [class.is-invalid]="isFieldInvalid('kind')">\r
                <option *ngFor="let type of participantTypes" [value]="type.value">\r
                  {{ type.name }}\r
                </option>\r
              </select>\r
              <div *ngIf="isFieldInvalid('kind')" class="invalid-feedback">\r
                {{ getFieldError('kind') }}\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6 mb-3">\r
              <label for="displayName" class="form-label">\r
                {{ translate('visits.participant_name') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="displayName"\r
                formControlName="displayName"\r
                [class.is-invalid]="isFieldInvalid('displayName')"\r
                [placeholder]="translate('visits.participant_name_placeholder')">\r
              <div *ngIf="isFieldInvalid('displayName')" class="invalid-feedback">\r
                {{ getFieldError('displayName') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label for="jobTitle" class="form-label">\r
                {{ translate('visits.job_title') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="jobTitle"\r
                formControlName="jobTitle"\r
                [class.is-invalid]="isFieldInvalid('jobTitle')"\r
                [placeholder]="translate('visits.job_title_placeholder')">\r
              <div *ngIf="isFieldInvalid('jobTitle')" class="invalid-feedback">\r
                {{ getFieldError('jobTitle') }}\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6 mb-3">\r
              <label for="department" class="form-label">\r
                {{ translate('visits.department') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="department"\r
                formControlName="department"\r
                [class.is-invalid]="isFieldInvalid('department')"\r
                [placeholder]="translate('visits.department_placeholder')">\r
              <div *ngIf="isFieldInvalid('department')" class="invalid-feedback">\r
                {{ getFieldError('department') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row">\r
            <div class="col-md-6 mb-3">\r
              <label for="organization" class="form-label">\r
                {{ translate('visits.organization') }}\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="organization"\r
                formControlName="organization"\r
                [class.is-invalid]="isFieldInvalid('organization')"\r
                [placeholder]="translate('visits.organization_placeholder')">\r
              <div *ngIf="isFieldInvalid('organization')" class="invalid-feedback">\r
                {{ getFieldError('organization') }}\r
              </div>\r
            </div>\r
\r
            <div class="col-md-6 mb-3">\r
              <label for="email" class="form-label">\r
                {{ translate('visits.email') }}\r
              </label>\r
              <input \r
                type="email" \r
                class="form-control" \r
                id="email"\r
                formControlName="email"\r
                [class.is-invalid]="isFieldInvalid('email')"\r
                [placeholder]="translate('visits.email_placeholder')">\r
              <div *ngIf="isFieldInvalid('email')" class="invalid-feedback">\r
                {{ getFieldError('email') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="close()">\r
          {{ translate('common.cancel') }}\r
        </button>\r
        <button \r
          type="button" \r
          class="btn btn-primary" \r
          (click)="onSubmit()"\r
          [disabled]="loading || participantForm.invalid">\r
          <span *ngIf="loading" class="spinner-border spinner-border-sm me-2" role="status"></span>\r
          {{ loading ? translate('common.saving') : translate('common.save') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/components/visits/add-participant/add-participant.css */\n.modal.show {\n  z-index: 1060 !important;\n}\n.modal-lg {\n  max-width: 800px;\n}\n.modal-content {\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.modal-header {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #E6D7A2 100%);\n  color: white;\n  border-bottom: none;\n  border-radius: 12px 12px 0 0;\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-title {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  margin: 0;\n  order: 1;\n}\n.modal-title svg {\n  color: rgba(255, 255, 255, 0.9);\n}\n.btn-close {\n  filter: invert(1);\n  opacity: 0.8;\n  order: 2;\n}\n.btn-close:hover {\n  opacity: 1;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-section {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.section-title {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #dee2e6;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.75rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.col-md-6 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.btn {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #2c3e50 0%,\n      #34495e 100%);\n  border: none;\n}\n.btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n}\n.btn-outline-primary {\n  border-color: #B68A35;\n  color: #B68A35;\n}\n.btn-outline-primary:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n}\n.modal-footer {\n  background: #f8f9fa;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem;\n  border-radius: 0 0 12px 12px;\n}\n.modal-footer .btn {\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.alert {\n  border-radius: 8px;\n  border: none;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n}\n.alert-danger {\n  background: #f8d7da;\n  color: #721c24;\n  border-left: 4px solid #dc3545;\n}\n.alert svg {\n  color: #dc3545;\n}\n@media (max-width: 768px) {\n  .modal-lg {\n    max-width: 95%;\n    margin: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .form-section {\n    padding: 1rem;\n    margin-bottom: 1.5rem;\n  }\n  .row {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n  .col-md-6 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .modal-footer {\n    padding: 1rem;\n  }\n}\n@media (max-width: 576px) {\n  .modal-lg {\n    max-width: 100%;\n    margin: 0;\n    height: 100vh;\n  }\n  .modal-dialog {\n    height: 100vh;\n    margin: 0;\n  }\n  .modal-content {\n    height: 100vh;\n    border-radius: 0;\n  }\n  .modal-header {\n    border-radius: 0;\n  }\n  .modal-footer {\n    border-radius: 0;\n  }\n  .form-section {\n    margin-bottom: 1rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n  flex-direction: row-reverse;\n}\n[dir=rtl] .modal-header .modal-title {\n  order: 2;\n}\n[dir=rtl] .modal-header .btn-close {\n  order: 1;\n}\n[dir=rtl] .modal-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif !important;\n}\n[dir=ltr] .modal-title {\n  font-family: "Poppins", sans-serif !important;\n}\n[dir=rtl] .modal-footer {\n  flex-direction: row-reverse;\n}\n.form-control:focus,\n.form-select:focus,\n.btn:focus {\n  outline: 2px solid #28a745;\n  outline-offset: 2px;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=add-participant-MFR3CW6M.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: TranslationService }], { addParticipant: [{
    type: ViewChild,
    args: ["addParticipant"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddParticipant, { className: "AddParticipant", filePath: "src/app/components/visits/add-participant/add-participant.ts", lineNumber: 13 });
})();

// src/app/components/visits/visits-list/visits-list.ts
var _c04 = ["addVisit"];
var _c1 = ["editVisit"];
var _c2 = ["addParticipant"];
var _c3 = ["confirmationModal"];
function VisitsList_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.loading_visits"));
  }
}
function VisitsList_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "line", 15)(4, "line", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 17);
    \u0275\u0275listener("click", function VisitsList_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadVisits());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.error"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.refresh"), " ");
  }
}
function VisitsList_div_3_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function VisitsList_div_3_button_66_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClearSearchInput());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "line", 86)(3, "line", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("common.clear")));
  }
}
function VisitsList_div_3_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    \u0275\u0275property("value", type_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r6.name, " ");
  }
}
function VisitsList_div_3_div_87_div_1_div_44_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const participant_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(participant_r9.organization);
  }
}
function VisitsList_div_3_div_87_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "span", 124);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 125);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VisitsList_div_3_div_87_div_1_div_44_span_6_Template, 2, 1, "span", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 127);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const participant_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(participant_r9.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", participant_r9.jobTitle, " - ", participant_r9.department);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", participant_r9.organization);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + participant_r9.kind);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getParticipantTypeName(participant_r9.kind), " ");
  }
}
function VisitsList_div_3_div_87_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 94)(5, "button", 95);
    \u0275\u0275listener("click", function VisitsList_div_3_div_87_div_1_Template_button_click_5_listener() {
      const visit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditVisitModal(visit_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 23);
    \u0275\u0275element(7, "path", 96)(8, "path", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 98);
    \u0275\u0275listener("click", function VisitsList_div_3_div_87_div_1_Template_button_click_9_listener() {
      const visit_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onVisitDeleted(visit_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 23);
    \u0275\u0275element(11, "polyline", 99)(12, "path", 100)(13, "line", 101)(14, "line", 102);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 103)(16, "h3", 104);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 105)(19, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 23);
    \u0275\u0275element(21, "path", 107)(22, "circle", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 23);
    \u0275\u0275element(27, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 106);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 23);
    \u0275\u0275element(33, "path", 40)(34, "path", 110)(35, "path", 111)(36, "path", 112)(37, "path", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 114)(41, "h4");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 115);
    \u0275\u0275template(44, VisitsList_div_3_div_87_div_1_div_44_Template, 9, 7, "div", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 117)(46, "div", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 23);
    \u0275\u0275element(48, "path", 119)(49, "circle", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 121);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const visit_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("type-" + visit_r8.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getVisitTypeName(visit_r8.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("visits.edit_visit")));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("visits.delete_visit")));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(visit_r8.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(visit_r8.address);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 16, visit_r8.visitDate, "mediumDate"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(visit_r8.purpose);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.translate("visits.participants"), " (", visit_r8.participants.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", visit_r8.participants);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(visit_r8.createdByName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 19, visit_r8.createdAt, "short"), " ");
  }
}
function VisitsList_div_3_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, VisitsList_div_3_div_87_div_1_Template, 55, 22, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.allVisits);
  }
}
function VisitsList_div_3_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 130);
    \u0275\u0275element(2, "path", 109);
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
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.no_visits_found"));
  }
}
function VisitsList_div_3_li_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 80)(1, "button", 131);
    \u0275\u0275listener("click", function VisitsList_div_3_li_112_Template_button_click_1_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r11));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r11);
  }
}
function VisitsList_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "button", 22);
    \u0275\u0275listener("click", function VisitsList_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddVisitModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 23);
    \u0275\u0275element(10, "line", 24)(11, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 26)(14, "div", 27)(15, "div", 28)(16, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 30);
    \u0275\u0275element(18, "path", 31)(19, "circle", 32)(20, "path", 33)(21, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 36);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 37)(27, "div", 28)(28, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 39);
    \u0275\u0275element(30, "path", 40)(31, "circle", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 35);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 36);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 27)(37, "div", 28)(38, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 30);
    \u0275\u0275element(40, "circle", 14)(41, "polyline", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "div", 35);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 36);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 27)(47, "div", 28)(48, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 30);
    \u0275\u0275element(50, "path", 42)(51, "polyline", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 35);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 36);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 44)(58, "form", 45);
    \u0275\u0275listener("ngSubmit", function VisitsList_div_3_Template_form_ngSubmit_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    });
    \u0275\u0275elementStart(59, "div", 46)(60, "div", 47)(61, "label", 48);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 49)(64, "div", 50);
    \u0275\u0275element(65, "input", 51);
    \u0275\u0275template(66, VisitsList_div_3_button_66_Template, 4, 2, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 53);
    \u0275\u0275listener("click", function VisitsList_div_3_Template_button_click_67_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch($event));
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 54)(70, "label", 55);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "select", 56)(73, "option", 57);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, VisitsList_div_3_option_75_Template, 2, 2, "option", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 59)(77, "label", 60);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275element(79, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 59)(81, "label", 62);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 64)(85, "button", 65);
    \u0275\u0275listener("click", function VisitsList_div_3_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearFilters());
    });
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(87, VisitsList_div_3_div_87_Template, 2, 1, "div", 66)(88, VisitsList_div_3_div_88_Template, 7, 2, "div", 67);
    \u0275\u0275elementStart(89, "div", 68)(90, "div", 69)(91, "div", 70)(92, "label", 71);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function VisitsList_div_3_Template_select_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function VisitsList_div_3_Template_select_change_94_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(95, "option", 73);
    \u0275\u0275text(96, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "option", 74);
    \u0275\u0275text(98, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "option", 75);
    \u0275\u0275text(100, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "option", 76);
    \u0275\u0275text(102, "48");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 77)(104, "span");
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "nav", 78)(107, "ul", 79)(108, "li", 80)(109, "button", 81);
    \u0275\u0275listener("click", function VisitsList_div_3_Template_button_click_109_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(110, "svg", 23);
    \u0275\u0275element(111, "polyline", 82);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(112, VisitsList_div_3_li_112_Template, 3, 3, "li", 83);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(113, "li", 80)(114, "button", 81);
    \u0275\u0275listener("click", function VisitsList_div_3_Template_button_click_114_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(115, "svg", 23);
    \u0275\u0275element(116, "polyline", 84);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.description"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.add_visit"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.kpi.total_visits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalVisits);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.kpi.completed_visits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.completedVisits);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.kpi.overdue_visits"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.overdueVisits);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.kpi.completion_rate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(56, 39, ctx_r1.completionRate, "1.2-2"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.searchForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.search"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx_r1.translate("visits.search_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_19_0 = ctx_r1.searchForm.get("search")) == null ? null : tmp_19_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.search"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.filter_by_type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.all"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.visitTypes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.from_date"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("visits.to_date"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("visits.clear_filters"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allVisits.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allVisits.length === 0 && !ctx_r1.loading);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("common.page_size"), ":");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate6("", ctx_r1.translate("common.showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, "-", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.totalCount), " ", ctx_r1.translate("common.of"), " ", ctx_r1.totalCount, " ", ctx_r1.translate("visits.title"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var VisitsList = class _VisitsList {
  visitsService;
  fb;
  translationService;
  addVisit;
  editVisit;
  addParticipant;
  confirmationModal;
  allVisits = [];
  loading = false;
  error = null;
  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalCount = 0;
  // Search and filters
  searchForm;
  searchTerm = "";
  selectedType = null;
  fromDate = null;
  toDate = null;
  // KPI data
  lastVisitsThisMonth = 0;
  visitsOverview = null;
  totalVisits = 0;
  completedVisits = 0;
  overdueVisits = 0;
  completionRate = 0;
  // Visit types and participant types will be initialized in ngOnInit
  visitTypes = [];
  participantTypes = {};
  destroy$ = new Subject();
  constructor(visitsService, fb, translationService) {
    this.visitsService = visitsService;
    this.fb = fb;
    this.translationService = translationService;
    this.searchForm = this.fb.group({
      search: [""],
      type: [null],
      fromDate: [null],
      toDate: [null]
    });
  }
  ngOnInit() {
    this.initializeVisitTypes();
    this.loadVisitsOverview();
    this.loadVisits();
    this.setupSearchListener();
  }
  initializeVisitTypes() {
    this.visitTypes = [
      { value: 0, name: this.translate("visits.visit_types.0") },
      { value: 1, name: this.translate("visits.visit_types.1") },
      { value: 2, name: this.translate("visits.visit_types.2") },
      { value: 3, name: this.translate("visits.visit_types.3") },
      { value: 4, name: this.translate("visits.visit_types.4") },
      { value: 5, name: this.translate("visits.visit_types.5") },
      { value: 6, name: this.translate("visits.visit_types.6") }
    ];
    this.participantTypes = {
      0: this.translate("visits.participant_types.internal"),
      1: this.translate("visits.participant_types.external")
    };
  }
  loadVisitsOverview() {
    this.visitsService.getVisitsOverview().subscribe({
      next: (response) => {
        this.visitsOverview = response;
        this.totalVisits = response.totalVisits || 0;
        this.completedVisits = response.completedVisits || 0;
        this.overdueVisits = response.overdueVisits || 0;
        this.completionRate = response.completionRate || 0;
        console.log("Visits overview loaded:", response);
      },
      error: (error) => {
        console.error("Error loading visits overview:", error);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setupSearchListener() {
    this.searchForm.get("type")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((type) => {
      this.selectedType = type;
      this.currentPage = 1;
      this.loadVisits();
    });
    this.searchForm.get("fromDate")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((fromDate) => {
      this.fromDate = fromDate;
      this.currentPage = 1;
      this.loadVisits();
    });
    this.searchForm.get("toDate")?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((toDate) => {
      this.toDate = toDate;
      this.currentPage = 1;
      this.loadVisits();
    });
  }
  loadVisits() {
    this.loading = true;
    this.error = null;
    const params = {
      Search: this.searchTerm || void 0,
      Type: this.selectedType || void 0,
      From: this.fromDate || void 0,
      To: this.toDate || void 0,
      PageSize: this.pageSize,
      PageNumber: this.currentPage
    };
    this.visitsService.getAllVisits(params).subscribe({
      next: (response) => {
        this.allVisits = response.data.items;
        this.totalCount = response.data.totalCount;
        this.currentPage = response.data.page;
        this.pageSize = response.data.pageSize;
        this.calculateKPIs();
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading visits:", err);
        this.error = "Failed to load visits";
        this.loading = false;
      }
    });
  }
  calculateKPIs() {
    const currentDate = /* @__PURE__ */ new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    this.lastVisitsThisMonth = this.allVisits.filter((visit) => {
      const visitDate = new Date(visit.visitDate);
      return visitDate.getMonth() === currentMonth && visitDate.getFullYear() === currentYear;
    }).length;
  }
  onSearch(event) {
    if (event) {
      event.preventDefault();
    }
    const searchValue = this.searchForm.get("search")?.value?.trim();
    if (searchValue && searchValue.length > 0) {
      this.searchTerm = searchValue;
      this.currentPage = 1;
      this.loadVisits();
    }
  }
  onClearSearchInput() {
    this.searchForm.get("search")?.setValue("");
    this.searchTerm = "";
    this.currentPage = 1;
    this.loadVisits();
  }
  onClearFilters() {
    this.searchForm.reset();
    this.searchTerm = "";
    this.selectedType = null;
    this.fromDate = null;
    this.toDate = null;
    this.currentPage = 1;
    this.loadVisits();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadVisits();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadVisits();
  }
  openAddVisitModal() {
    this.addVisit.open();
  }
  openEditVisitModal(visit) {
    this.editVisit.open(visit);
  }
  openAddParticipantModal() {
    this.addParticipant.open();
  }
  onVisitAdded() {
    this.loadVisits();
  }
  onVisitUpdated() {
    this.loadVisits();
  }
  onVisitDeleted(visit) {
    this.confirmationModal.show({
      title: this.translate("visits.delete_visit"),
      message: this.translate("visits.confirm_delete_visit"),
      confirmText: this.translate("common.delete"),
      cancelText: this.translate("common.cancel"),
      type: "delete"
    });
    this.confirmationModal.confirm.subscribe(() => {
      this.deleteVisit(visit.id);
    });
  }
  deleteVisit(visitId) {
    this.visitsService.deleteVisit(visitId).subscribe({
      next: () => {
        this.loadVisits();
      },
      error: (err) => {
        console.error("Error deleting visit:", err);
      }
    });
  }
  getVisitTypeName(type) {
    const visitType = this.visitTypes.find((t) => t.value === type);
    return visitType ? visitType.name : "Unknown";
  }
  getParticipantTypeName(kind) {
    return this.participantTypes[kind] || this.translate("visits.participant_types.unknown");
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
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  get Math() {
    return Math;
  }
  static \u0275fac = function VisitsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitsList)(\u0275\u0275directiveInject(VisitsService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitsList, selectors: [["app-visits-list"]], viewQuery: function VisitsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addVisit = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editVisit = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addParticipant = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 12, vars: 5, consts: [["addVisit", ""], ["editVisit", ""], ["addParticipant", ""], ["confirmationModal", ""], [1, "visits-container", "rounded-5"], ["class", "loading-container", 4, "ngIf"], ["class", "error-container", 4, "ngIf"], ["class", "visits-content", 4, "ngIf"], [3, "visitAdded"], [3, "visitUpdated"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-container"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "error-icon"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "btn", "btn-primary", 3, "click"], [1, "visits-content"], [1, "visits-header"], [1, "header-left"], [1, "header-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "kpi-section"], [1, "kpi-card"], [1, "kpi-header"], [1, "kpi-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "kpi-title"], [1, "kpi-value"], [1, "kpi-card", "completed-card"], [1, "kpi-icon", "completed-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M9 12l2 2 4-4"], ["points", "12,6 12,12 16,14"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "search-filters-section"], [1, "search-form", 3, "ngSubmit", "formGroup"], [1, "search-row"], [1, "search-group", "search-input-group"], ["for", "search"], [1, "search-input-wrapper"], [1, "input-with-clear"], ["type", "text", "id", "search", "formControlName", "search", 1, "form-control", 3, "placeholder"], ["type", "button", "class", "btn btn-clear-input", 3, "title", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "search-btn", 3, "click"], [1, "search-group", "filter-type-group"], ["for", "type"], ["id", "type", "formControlName", "type", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "search-group"], ["for", "fromDate"], ["type", "date", "id", "fromDate", "formControlName", "fromDate", 1, "form-control"], ["for", "toDate"], ["type", "date", "id", "toDate", "formControlName", "toDate", 1, "form-control"], [1, "search-actions"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["class", "visits-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "pagination-section", "ltr"], [1, "pagination-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "pagination-info"], ["aria-label", "Visits pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], ["type", "button", 1, "btn", "btn-clear-input", 3, "click", "title"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [3, "value"], [1, "visits-grid"], ["class", "visit-card", 4, "ngFor", "ngForOf"], [1, "visit-card"], [1, "card-header"], [1, "visit-type-badge"], [1, "visit-actions"], [1, "action-btn", "edit-btn", 3, "click", "title"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "action-btn", "delete-btn", 3, "click", "title"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "card-content"], [1, "visit-title"], [1, "visit-meta"], [1, "meta-item"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["d", "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"], ["d", "M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"], ["d", "M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"], ["d", "M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"], ["d", "M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"], [1, "participants-section"], [1, "participants-list"], ["class", "participant-item", 4, "ngFor", "ngForOf"], [1, "visit-footer"], [1, "created-by"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "created-date"], [1, "participant-item"], [1, "participant-info"], [1, "participant-name"], [1, "participant-role"], ["class", "participant-org", 4, "ngIf"], [1, "participant-type"], [1, "participant-org"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "empty-icon"], [1, "page-link", 3, "click"]], template: function VisitsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4);
      \u0275\u0275template(1, VisitsList_div_1_Template, 4, 1, "div", 5)(2, VisitsList_div_2_Template, 11, 3, "div", 6)(3, VisitsList_div_3_Template, 117, 42, "div", 7);
      \u0275\u0275elementStart(4, "app-add-visit", 8, 0);
      \u0275\u0275listener("visitAdded", function VisitsList_Template_app_add_visit_visitAdded_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onVisitAdded());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "app-edit-visit", 9, 1);
      \u0275\u0275listener("visitUpdated", function VisitsList_Template_app_edit_visit_visitUpdated_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onVisitUpdated());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "app-add-participant", null, 2)(10, "app-confirmation-modal", null, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, ConfirmationModalComponent, AddVisit, EditVisit, AddParticipant, DecimalPipe, DatePipe], styles: ['\n\n.visits-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n}\n.visits-container.ltr[_ngcontent-%COMP%], \nhtml[dir=ltr][_ngcontent-%COMP%]   .visits-container[_ngcontent-%COMP%] {\n  font-family: "Poppins", sans-serif;\n}\n.visits-container.rtl[_ngcontent-%COMP%], \nhtml[dir=rtl][_ngcontent-%COMP%]   .visits-container[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.visits-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.loading-container[_ngcontent-%COMP%], \n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e9ecef;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-bottom: 1rem;\n}\n.error-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #dc3545;\n  margin-bottom: 0.5rem;\n}\n.visits-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.header-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c757d;\n  font-size: 1rem;\n}\n.header-right[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.kpi-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f1f3f4;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.kpi-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.kpi-header[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-right: 1rem;\n}\n.completed-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda,\n      #c3e6cb);\n  color: #28a745;\n  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.2);\n}\n.kpi-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  flex: 1;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: #2c3e50;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.completed-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.kpi-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #6c757d;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.completed-card[_ngcontent-%COMP%]   .kpi-subtitle[_ngcontent-%COMP%] {\n  color: #155724;\n}\n.visits-container.rtl[_ngcontent-%COMP%]   .kpi-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.visits-container.rtl[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n.visits-container.rtl[_ngcontent-%COMP%]   .kpi-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .kpi-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n  .kpi-value[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .kpi-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .kpi-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n}\n@media (max-width: 480px) {\n  .kpi-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .kpi-value[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .kpi-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .kpi-icon[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n}\n.search-filters-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\n.search-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n}\n.search-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.search-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.search-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.search-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.search-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.input-with-clear[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.input-with-clear[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 40px;\n}\n.btn-clear-input[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.btn-clear-input[_ngcontent-%COMP%]:hover {\n  color: #78260D;\n}\n.search-input-wrapper[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 0.75rem 1rem;\n  transition: all 0.2s ease;\n}\n.search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filter-type-group[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.search-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: end;\n}\n.search-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #5F646D;\n  border: 1px solid#5F646D;\n  background: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #5F646D;\n  border: 1px solid#5F646D;\n  color: #FFFFFF;\n}\n.visits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.visit-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.visit-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #B68A35;\n  transition: 0.5s ease;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.visit-type-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.visit-type-badge.type-0[_ngcontent-%COMP%] {\n  background: #34495E;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-1[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-2[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n  color: #5F646D;\n}\n.visit-type-badge.type-3[_ngcontent-%COMP%] {\n  background: #E54B1D;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-4[_ngcontent-%COMP%] {\n  background: #B45253;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-5[_ngcontent-%COMP%] {\n  background: #555555;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-6[_ngcontent-%COMP%] {\n  background: #78260D;\n  color: #FFFFFF;\n}\n.visit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #6c757d;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n.action-btn.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.action-btn.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #ffebee;\n  color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.visit-title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.visit-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.meta-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  flex-shrink: 0;\n}\n.participants-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.participants-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n}\n.participants-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.participant-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.participant-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.participant-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.875rem;\n}\n.participant-role[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.participant-org[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  font-size: 0.75rem;\n  font-style: italic;\n}\n.participant-type[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.participant-type.type-0[_ngcontent-%COMP%] {\n  background: #e8f5e8;\n  color: #388e3c;\n}\n.participant-type.type-1[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.visit-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n  font-size: 0.75rem;\n  color: #adb5bd;\n}\n.created-by[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.created-date[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.875rem;\n  color: #2c3e50;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #6c757d;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #adb5bd;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .visits-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .visits-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .search-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .search-input-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .input-with-clear[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .input-with-clear[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .search-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .filter-type-group[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .search-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100% !important;\n  }\n  .visits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .kpi-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .visit-card[_ngcontent-%COMP%] {\n    margin: 0 -0.5rem;\n    border-radius: 0;\n  }\n  .card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .participant-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .visit-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=visits-list-HKUKRA44.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitsList, [{
    type: Component,
    args: [{ selector: "app-visits-list", standalone: false, template: `<div class="visits-container rounded-5" [class.rtl]="isRTL()">\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('visits.loading_visits') }}</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="error-container">\r
    <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
      <circle cx="12" cy="12" r="10"/>\r
      <line x1="15" y1="9" x2="9" y2="15"/>\r
      <line x1="9" y1="9" x2="15" y2="15"/>\r
    </svg>\r
    <h3>{{ translate('common.error') }}</h3>\r
    <p>{{ error }}</p>\r
    <button class="btn btn-primary" (click)="loadVisits()">\r
      {{ translate('common.refresh') }}\r
    </button>\r
  </div>\r
\r
  <!-- Main Content -->\r
  <div *ngIf="!loading && !error" class="visits-content">\r
    <!-- Header -->\r
    <div class="visits-header">\r
      <div class="header-left">\r
        <h2>{{ translate('visits.title') }}</h2>\r
        <p>{{ translate('visits.description') }}</p>\r
      </div>\r
      <div class="header-right">\r
        <button type="button" class="btn btn-primary" (click)="openAddVisitModal()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"/>\r
            <line x1="5" y1="12" x2="19" y2="12"/>\r
          </svg>\r
          {{ translate('visits.add_visit') }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- KPI Cards -->\r
    <div class="kpi-section">\r
      <div class="kpi-card">\r
        <div class="kpi-header">\r
          <div class="kpi-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
              <circle cx="9" cy="7" r="4"/>\r
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>\r
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-title">{{ translate('visits.kpi.total_visits') }}</div>\r
        </div>\r
        <div class="kpi-value">{{ totalVisits }}</div>\r
      </div>\r
\r
       <div class="kpi-card completed-card">\r
         <div class="kpi-header">\r
           <div class="kpi-icon completed-icon">\r
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
               <path d="M9 12l2 2 4-4"/>\r
               <circle cx="12" cy="12" r="10"/>\r
             </svg>\r
           </div>\r
           <div class="kpi-title">{{ translate('visits.kpi.completed_visits') }}</div>\r
         </div>\r
         <div class="kpi-value">{{ completedVisits }}</div>\r
       </div>\r
\r
      <div class="kpi-card">\r
        <div class="kpi-header">\r
          <div class="kpi-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="10"/>\r
              <polyline points="12,6 12,12 16,14"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-title">{{ translate('visits.kpi.overdue_visits') }}</div>\r
        </div>\r
        <div class="kpi-value">{{ overdueVisits }}</div>\r
      </div>\r
\r
      <div class="kpi-card">\r
        <div class="kpi-header">\r
          <div class="kpi-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>\r
              <polyline points="22,4 12,14.01 9,11.01"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-title">{{ translate('visits.kpi.completion_rate') }}</div>\r
        </div>\r
        <div class="kpi-value">{{ completionRate | number:'1.2-2' }}%</div>\r
      </div>\r
    </div>\r
\r
    <!-- Search and Filters -->\r
    <div class="search-filters-section">\r
      <form [formGroup]="searchForm" (ngSubmit)="onSearch()" class="search-form">\r
        <div class="search-row">\r
          <div class="search-group search-input-group">\r
            <label for="search">{{ translate('visits.search') }}</label>\r
            <div class="search-input-wrapper">\r
              <div class="input-with-clear">\r
                <input\r
                  type="text"\r
                  id="search"\r
                  formControlName="search"\r
                  [placeholder]="translate('visits.search_placeholder')"\r
                  class="form-control" />\r
                <button \r
                  type="button" \r
                  class="btn btn-clear-input" \r
                  (click)="onClearSearchInput()" \r
                  title="{{ translate('common.clear') }}"\r
                  *ngIf="searchForm.get('search')?.value">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <line x1="18" y1="6" x2="6" y2="18"></line>\r
                    <line x1="6" y1="6" x2="18" y2="18"></line>\r
                  </svg>\r
                </button>\r
              </div>\r
              <button type="submit" class="btn btn-primary search-btn" (click)="onSearch($event)">\r
                {{ translate('visits.search') }}\r
              </button>\r
            </div>\r
          </div>\r
          \r
          <div class="search-group filter-type-group">\r
            <label for="type">{{ translate('visits.filter_by_type') }}</label>\r
            <select id="type" formControlName="type" class="form-select">\r
              <option value="">{{ translate('common.all') }}</option>\r
              <option *ngFor="let type of visitTypes" [value]="type.value">\r
                {{ type.name }}\r
              </option>\r
            </select>\r
          </div>\r
\r
          <div class="search-group">\r
            <label for="fromDate">{{ translate('visits.from_date') }}</label>\r
            <input\r
              type="date"\r
              id="fromDate"\r
              formControlName="fromDate"\r
              class="form-control">\r
          </div>\r
\r
          <div class="search-group">\r
            <label for="toDate">{{ translate('visits.to_date') }}</label>\r
            <input\r
              type="date"\r
              id="toDate"\r
              formControlName="toDate"\r
              class="form-control">\r
          </div>\r
\r
          <div class="search-actions">\r
            <button type="button" class="btn btn-outline-secondary" (click)="onClearFilters()">\r
              {{ translate('visits.clear_filters') }}\r
            </button>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Visits Grid -->\r
    <div class="visits-grid" *ngIf="allVisits.length > 0">\r
      <div *ngFor="let visit of allVisits" class="visit-card">\r
        <div class="card-header">\r
          <div class="visit-type-badge" [class]="'type-' + visit.type">\r
            {{ getVisitTypeName(visit.type) }}\r
          </div>\r
          <div class="visit-actions">\r
            <button class="action-btn edit-btn" (click)="openEditVisitModal(visit)" title="{{ translate('visits.edit_visit') }}">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
              </svg>\r
            </button>\r
            <button class="action-btn delete-btn" (click)="onVisitDeleted(visit)" title="{{ translate('visits.delete_visit') }}">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="3,6 5,6 21,6"/>\r
                <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>\r
                <line x1="10" y1="11" x2="10" y2="17"/>\r
                <line x1="14" y1="11" x2="14" y2="17"/>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="card-content">\r
          <h3 class="visit-title">{{ visit.title }}</h3>\r
\r
          <div class="visit-meta">\r
            <div class="meta-item">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>\r
                <circle cx="12" cy="10" r="3"/>\r
              </svg>\r
              <span>{{ visit.address }}</span>\r
            </div>\r
\r
            <div class="meta-item">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>\r
              </svg>\r
              <span>{{ visit.visitDate | date:'mediumDate' }}</span>\r
            </div>\r
\r
            <div class="meta-item">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M9 12l2 2 4-4"/>\r
                <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>\r
                <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>\r
                <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>\r
                <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>\r
              </svg>\r
              <span>{{ visit.purpose }}</span>\r
            </div>\r
          </div>\r
\r
          <div class="participants-section">\r
            <h4>{{ translate('visits.participants') }} ({{ visit.participants.length }})</h4>\r
            <div class="participants-list">\r
              <div *ngFor="let participant of visit.participants" class="participant-item">\r
                <div class="participant-info">\r
                  <span class="participant-name">{{ participant.displayName }}</span>\r
                  <span class="participant-role">{{ participant.jobTitle }} - {{ participant.department }}</span>\r
                  <span *ngIf="participant.organization" class="participant-org">{{ participant.organization }}</span>\r
                </div>\r
                <div class="participant-type" [class]="'type-' + participant.kind">\r
                  {{ getParticipantTypeName(participant.kind) }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="visit-footer">\r
            <div class="created-by">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>\r
                <circle cx="12" cy="7" r="4"/>\r
              </svg>\r
              <span>{{ visit.createdByName }}</span>\r
            </div>\r
            <div class="created-date">\r
              {{ visit.createdAt | date:'short' }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="allVisits.length === 0 && !loading" class="empty-state">\r
      <svg class="empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>\r
      </svg>\r
      <h3>{{ translate('visits.title') }}</h3>\r
      <p>{{ translate('visits.no_visits_found') }}</p>\r
    </div>\r
\r
    <!-- Pagination Info and Controls -->\r
    <div class="pagination-section ltr">\r
\r
\r
      <div class="pagination-controls">\r
        <div class="page-size-control">\r
          <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
                  <select id="pageSize" [(ngModel)]="pageSize" (change)="onPageSizeChange()">\r
          <option value="6">6</option>\r
          <option value="12">12</option>\r
          <option value="24">24</option>\r
          <option value="48">48</option>\r
        </select>\r
        </div>\r
        <div class="pagination-info">\r
          <span>{{ translate('common.showing') }} {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalCount) }} {{ translate('common.of') }} {{ totalCount }} {{ translate('visits.title') }}</span>\r
        </div>\r
        <nav aria-label="Visits pagination">\r
          <ul class="pagination">\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
              <button class="page-link" (click)="onPageChange(currentPage - 1)" [disabled]="currentPage === 1">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="15,18 9,12 15,6"/>\r
                </svg>\r
              </button>\r
            </li>\r
\r
            <li *ngFor="let page of pages" class="page-item" [class.active]="page === currentPage">\r
              <button class="page-link" (click)="onPageChange(page)">{{ page }}</button>\r
            </li>\r
\r
            <li class="page-item" [class.disabled]="currentPage === totalPages">\r
              <button class="page-link" (click)="onPageChange(currentPage + 1)" [disabled]="currentPage === totalPages">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="9,18 15,12 9,6"/>\r
                </svg>\r
              </button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Modals -->\r
  <app-add-visit #addVisit (visitAdded)="onVisitAdded()"></app-add-visit>\r
  <app-edit-visit #editVisit (visitUpdated)="onVisitUpdated()"></app-edit-visit>\r
  <app-add-participant #addParticipant></app-add-participant>\r
  <app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
</div>\r
`, styles: ['/* src/app/components/visits/visits-list/visits-list.css */\n.visits-container {\n  padding: 2rem;\n  min-height: 100vh;\n  font-family: "Poppins", sans-serif;\n}\n.visits-container.ltr,\nhtml[dir=ltr] .visits-container {\n  font-family: "Poppins", sans-serif;\n}\n.visits-container.rtl,\nhtml[dir=rtl] .visits-container {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.visits-container.rtl {\n  direction: rtl;\n}\n.loading-container,\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.loading-spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e9ecef;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.error-icon {\n  color: #dc3545;\n  margin-bottom: 1rem;\n}\n.error-container h3 {\n  color: #dc3545;\n  margin-bottom: 0.5rem;\n}\n.visits-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.header-left h2 {\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  font-size: 2rem;\n  font-weight: 600;\n}\n.header-left p {\n  margin: 0;\n  color: #6c757d;\n  font-size: 1rem;\n}\n.header-right .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.kpi-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.kpi-card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f1f3f4;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.kpi-card:hover {\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.kpi-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.kpi-header {\n  flex-direction: row;\n}\n.kpi-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa,\n      #e9ecef);\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-right: 1rem;\n}\n.completed-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda,\n      #c3e6cb);\n  color: #28a745;\n  box-shadow: 0 2px 8px rgba(40, 167, 69, 0.2);\n}\n.kpi-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  flex: 1;\n}\n.kpi-value {\n  font-size: 2.2rem;\n  font-weight: 800;\n  color: #2c3e50;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.completed-card .kpi-value {\n  color: #28a745;\n}\n.kpi-subtitle {\n  font-size: 0.9rem;\n  color: #6c757d;\n  font-weight: 500;\n  line-height: 1.4;\n}\n.completed-card .kpi-subtitle {\n  color: #155724;\n}\n.visits-container.rtl .kpi-header {\n  flex-direction: row-reverse;\n}\n.visits-container.rtl .kpi-icon {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n.visits-container.rtl .kpi-title {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .kpi-section {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .kpi-card {\n    padding: 1.25rem;\n  }\n  .kpi-value {\n    font-size: 2rem;\n  }\n  .kpi-title {\n    font-size: 0.9rem;\n  }\n  .kpi-icon {\n    width: 36px;\n    height: 36px;\n  }\n}\n@media (max-width: 480px) {\n  .kpi-card {\n    padding: 1rem;\n  }\n  .kpi-value {\n    font-size: 1.8rem;\n  }\n  .kpi-title {\n    font-size: 0.85rem;\n  }\n  .kpi-icon {\n    width: 32px;\n    height: 32px;\n  }\n}\n.search-filters-section {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 2rem;\n  overflow: hidden;\n}\n.search-form {\n  padding: 1.5rem;\n}\n.search-row {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr auto;\n  gap: 1rem;\n  align-items: end;\n}\n.search-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.875rem;\n}\n.search-group .form-control,\n.search-group .form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.search-group .form-control:focus,\n.search-group .form-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.input-with-clear {\n  position: relative;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.input-with-clear .form-control {\n  width: 100%;\n  padding-right: 40px;\n}\n.btn-clear-input {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: #6c757d;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n}\n.btn-clear-input:hover {\n  color: #78260D;\n}\n.search-input-wrapper .form-control {\n  flex: 1;\n}\n.search-btn {\n  white-space: nowrap;\n  padding: 0.75rem 1rem;\n  transition: all 0.2s ease;\n}\n.search-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.filter-type-group {\n  min-width: 150px;\n}\n.search-actions {\n  display: flex;\n  gap: 0.75rem;\n  align-items: end;\n}\n.search-actions .btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  font-weight: 500;\n  border-radius: 8px;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-outline-secondary {\n  color: #5F646D;\n  border: 1px solid#5F646D;\n  background: transparent;\n}\n.btn-outline-secondary:hover {\n  background: #5F646D;\n  border: 1px solid#5F646D;\n  color: #FFFFFF;\n}\n.visits-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.visit-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.visit-card:hover {\n  border: 1px solid #B68A35;\n  transition: 0.5s ease;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.visit-type-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.visit-type-badge.type-0 {\n  background: #34495E;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-1 {\n  background: #D4AF5F;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-2 {\n  background: #E6D7A2;\n  color: #5F646D;\n}\n.visit-type-badge.type-3 {\n  background: #E54B1D;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-4 {\n  background: #B45253;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-5 {\n  background: #555555;\n  color: #FFFFFF;\n}\n.visit-type-badge.type-6 {\n  background: #78260D;\n  color: #FFFFFF;\n}\n.visit-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.action-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: #6c757d;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.action-btn:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n.action-btn.edit-btn:hover {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.action-btn.delete-btn:hover {\n  background: #ffebee;\n  color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.card-content {\n  padding: 1.5rem;\n}\n.visit-title {\n  margin: 0 0 1rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.visit-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.meta-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #6c757d;\n  font-size: 0.875rem;\n}\n.meta-item svg {\n  color: #adb5bd;\n  flex-shrink: 0;\n}\n.participants-section {\n  margin-bottom: 1.5rem;\n}\n.participants-section h4 {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #495057;\n}\n.participants-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.participant-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n.participant-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.participant-name {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.875rem;\n}\n.participant-role {\n  color: #6c757d;\n  font-size: 0.75rem;\n}\n.participant-org {\n  color: #adb5bd;\n  font-size: 0.75rem;\n  font-style: italic;\n}\n.participant-type {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.participant-type.type-0 {\n  background: #e8f5e8;\n  color: #388e3c;\n}\n.participant-type.type-1 {\n  background: #fff3e0;\n  color: #f57c00;\n}\n.visit-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  border-top: 1px solid #e9ecef;\n  font-size: 0.75rem;\n  color: #adb5bd;\n}\n.created-by {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.created-date {\n  font-style: italic;\n  font-size: 0.875rem;\n  color: #2c3e50;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.empty-icon {\n  color: #adb5bd;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  margin: 0 0 0.5rem 0;\n  color: #6c757d;\n  font-weight: 600;\n}\n.empty-state p {\n  margin: 0;\n  color: #adb5bd;\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.pagination-info {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-control select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active .page-link {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .visits-container {\n    padding: 1rem;\n  }\n  .visits-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .header-right {\n    display: flex;\n    justify-content: center;\n  }\n  .search-row {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .search-input-wrapper {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .input-with-clear {\n    width: 100%;\n  }\n  .input-with-clear .form-control {\n    width: 100%;\n  }\n  .search-btn {\n    width: 100%;\n  }\n  .filter-type-group {\n    min-width: unset;\n  }\n  .search-actions {\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100% !important;\n  }\n  .visits-grid {\n    grid-template-columns: 1fr;\n  }\n  .kpi-section {\n    grid-template-columns: 1fr;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n}\n@media (max-width: 480px) {\n  .visit-card {\n    margin: 0 -0.5rem;\n    border-radius: 0;\n  }\n  .card-content {\n    padding: 1rem;\n  }\n  .participant-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .pagination {\n    justify-content: center;\n  }\n  .visit-footer {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=visits-list-HKUKRA44.css.map */\n'] }]
  }], () => [{ type: VisitsService }, { type: FormBuilder }, { type: TranslationService }], { addVisit: [{
    type: ViewChild,
    args: ["addVisit"]
  }], editVisit: [{
    type: ViewChild,
    args: ["editVisit"]
  }], addParticipant: [{
    type: ViewChild,
    args: ["addParticipant"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitsList, { className: "VisitsList", filePath: "src/app/components/visits/visits-list/visits-list.ts", lineNumber: 18 });
})();

// src/app/components/visits/visits-routing-module.ts
var routes = [
  {
    path: "",
    component: VisitsList
  }
];
var VisitsRoutingModule = class _VisitsRoutingModule {
  static \u0275fac = function VisitsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/visits/visits-module.ts
var VisitsModule = class _VisitsModule {
  static \u0275fac = function VisitsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VisitsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VisitsRoutingModule,
    SharedModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        VisitsList,
        AddVisit,
        EditVisit,
        AddParticipant
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        VisitsRoutingModule,
        SharedModule
      ]
    }]
  }], null, null);
})();
export {
  VisitsModule
};
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=chunk-3J3WIMDX.js.map
