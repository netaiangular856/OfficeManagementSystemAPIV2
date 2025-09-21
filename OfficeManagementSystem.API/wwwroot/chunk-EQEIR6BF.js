import {
  RolesService
} from "./chunk-KOUSMZGT.js";
import {
  AuthService
} from "./chunk-L6NSXISC.js";
import {
  ConfirmationModalComponent
} from "./chunk-YS3XUX24.js";
import "./chunk-IPDCSBCV.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-K7XYKDLO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-PK4NVWGP.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
  Injectable,
  Input,
  KeyValuePipe,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  TranslationService,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate7
} from "./chunk-T743GANX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/services/permissions.service.ts
var PermissionsService = class _PermissionsService {
  http;
  authService;
  apiUrl = `${environment.apiBaseUrl}/Admin/permissions`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }
  getPermissions(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("Page", params.page.toString());
    if (params.pageSize)
      httpParams = httpParams.set("PageSize", params.pageSize.toString());
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params: httpParams
    });
  }
  getAllPermissions() {
    return this.http.get(`${this.apiUrl}/all`, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data && response.data.items) {
        return response.data.items;
      }
      return [];
    }));
  }
  getPermissionById(permissionId) {
    return this.http.get(`${this.apiUrl}/${permissionId}`, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to get permission");
    }));
  }
  createPermission(permissionData) {
    return this.http.post(this.apiUrl, permissionData, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to create permission");
    }));
  }
  updatePermission(permissionId, permissionData) {
    return this.http.put(`${this.apiUrl}/${permissionId}`, permissionData, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to update permission");
    }));
  }
  deletePermission(permissionId) {
    return this.http.delete(`${this.apiUrl}/${permissionId}`, { headers: this.getAuthHeaders() });
  }
  static \u0275fac = function PermissionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionsService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionsService, factory: _PermissionsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/components/shared/permissions-assignment-modal/permissions-assignment-modal.component.ts
function PermissionsAssignmentModalComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.loading_permissions"));
  }
}
function PermissionsAssignmentModalComponent_div_0_div_11_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_div_11_div_1_div_10_Template_div_click_0_listener() {
      const permission_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.togglePermission(permission_r6.id));
    });
    \u0275\u0275elementStart(1, "label", 29)(2, "input", 30);
    \u0275\u0275listener("change", function PermissionsAssignmentModalComponent_div_0_div_11_div_1_div_10_Template_input_change_2_listener($event) {
      const permission_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.onPermissionToggle(permission_r6.id, $event);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 31);
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35)(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("assigned", ctx_r1.selectedPermissions().includes(permission_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedPermissions().includes(permission_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(permission_r6.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r6.controller);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r6.action);
  }
}
function PermissionsAssignmentModalComponent_div_0_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h4", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "button", 24);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_div_11_div_1_Template_button_click_5_listener() {
      const group_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectAllInGroup(group_r4.value));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_div_11_div_1_Template_button_click_7_listener() {
      const group_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deselectAllInGroup(group_r4.value));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275template(10, PermissionsAssignmentModalComponent_div_0_div_11_div_1_div_10_Template, 14, 7, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r4.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.select_all"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.deselect_all"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r4.value);
  }
}
function PermissionsAssignmentModalComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, PermissionsAssignmentModalComponent_div_0_div_11_div_1_Template, 11, 4, "div", 19);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.getAllPermissionGroups()));
  }
}
function PermissionsAssignmentModalComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.saving"), " ");
  }
}
function PermissionsAssignmentModalComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.assign_permissions"), " ");
  }
}
function PermissionsAssignmentModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 6)(8, "line", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 8);
    \u0275\u0275template(10, PermissionsAssignmentModalComponent_div_0_div_10_Template, 4, 1, "div", 9)(11, PermissionsAssignmentModalComponent_div_0_div_11_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function PermissionsAssignmentModalComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAssign());
    });
    \u0275\u0275template(16, PermissionsAssignmentModalComponent_div_0_div_16_Template, 3, 1, "div", 14)(17, PermissionsAssignmentModalComponent_div_0_div_17_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl", ctx_r1.isRTL())("ltr", !ctx_r1.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.assign_permissions"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.allPermissions().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allPermissions().length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving());
  }
}
var PermissionsAssignmentModalComponent = class _PermissionsAssignmentModalComponent {
  isVisible = false;
  roleId = null;
  assign = new EventEmitter();
  cancel = new EventEmitter();
  rolesService = inject(RolesService);
  permissionsService = inject(PermissionsService);
  translationService = inject(TranslationService);
  langService = inject(LangService);
  allPermissions = signal([], ...ngDevMode ? [{ debugName: "allPermissions" }] : []);
  selectedPermissions = signal([], ...ngDevMode ? [{ debugName: "selectedPermissions" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  ngOnInit() {
    if (this.isVisible) {
      this.loadAllPermissions();
      this.loadRolePermissions();
    }
  }
  ngOnChanges(changes) {
    if (changes["isVisible"] && this.isVisible) {
      this.loadAllPermissions();
      this.loadRolePermissions();
    }
    if (changes["roleId"] && this.roleId) {
      this.loadRolePermissions();
    }
  }
  loadAllPermissions() {
    this.permissionsService.getAllPermissions().subscribe({
      next: (permissions) => {
        this.allPermissions.set(permissions);
      },
      error: (error) => {
        console.error("Error loading permissions:", error);
      }
    });
  }
  loadRolePermissions() {
    const roleId = this.roleId;
    if (!roleId)
      return;
    this.rolesService.getRolePermissions(roleId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const permissionIds = response.data.map((permission) => permission.id);
          this.selectedPermissions.set(permissionIds);
        } else {
          this.selectedPermissions.set([]);
        }
      },
      error: (error) => {
        console.error("Error loading role permissions:", error);
        this.selectedPermissions.set([]);
      }
    });
  }
  onPermissionToggle(permissionId, event) {
    const target = event.target;
    const isChecked = target.checked;
    console.log("Toggling permission:", permissionId, "checked:", isChecked);
    const current = this.selectedPermissions();
    if (isChecked) {
      if (!current.includes(permissionId)) {
        this.selectedPermissions.set([...current, permissionId]);
      }
    } else {
      this.selectedPermissions.set(current.filter((id) => id !== permissionId));
    }
    console.log("Updated selected permissions:", this.selectedPermissions());
  }
  togglePermission(permissionId) {
    const current = this.selectedPermissions();
    const isCurrentlySelected = current.includes(permissionId);
    console.log("Toggling permission via click:", permissionId, "currently selected:", isCurrentlySelected);
    if (isCurrentlySelected) {
      this.selectedPermissions.set(current.filter((id) => id !== permissionId));
    } else {
      this.selectedPermissions.set([...current, permissionId]);
    }
    console.log("Updated selected permissions:", this.selectedPermissions());
  }
  onAssign() {
    this.saving.set(true);
    this.assign.emit(this.selectedPermissions());
  }
  onCancel() {
    this.cancel.emit();
  }
  onOverlayClick() {
    this.onCancel();
  }
  getAllPermissionGroups() {
    const groups = {};
    this.allPermissions().forEach((permission) => {
      const controller = permission.controller;
      if (!groups[controller]) {
        groups[controller] = [];
      }
      groups[controller].push(permission);
    });
    return groups;
  }
  selectAllInGroup(permissions) {
    const current = this.selectedPermissions();
    const newIds = permissions.map((p) => p.id);
    const updated = [.../* @__PURE__ */ new Set([...current, ...newIds])];
    this.selectedPermissions.set(updated);
  }
  deselectAllInGroup(permissions) {
    const current = this.selectedPermissions();
    const groupIds = permissions.map((p) => p.id);
    const updated = current.filter((id) => !groupIds.includes(id));
    this.selectedPermissions.set(updated);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.langService.getCurrentLang() === "ar";
  }
  static \u0275fac = function PermissionsAssignmentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionsAssignmentModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsAssignmentModalComponent, selectors: [["app-permissions-assignment-modal"]], inputs: { isVisible: "isVisible", roleId: "roleId" }, outputs: { assign: "assign", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "permissions-modal-overlay", 3, "click", 4, "ngIf"], [1, "permissions-modal-overlay", 3, "click"], [1, "permissions-modal", 3, "click"], [1, "modal-header"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-content"], ["class", "loading-container", 4, "ngIf"], ["class", "permissions-container", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "btn-loading", 4, "ngIf"], [4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "permissions-container"], ["class", "permission-group", 4, "ngFor", "ngForOf"], [1, "permission-group"], [1, "group-header"], [1, "group-title"], [1, "group-actions"], ["type", "button", 1, "btn-select-all", 3, "click"], ["type", "button", 1, "btn-deselect-all", 3, "click"], [1, "permissions-grid"], ["class", "permission-item", 3, "assigned", "click", 4, "ngFor", "ngForOf"], [1, "permission-item", 3, "click"], [1, "permission-checkbox"], ["type", "checkbox", 1, "permission-input", 3, "change", "checked"], [1, "permission-custom"], [1, "permission-content"], [1, "permission-name"], [1, "permission-description"], [1, "permission-meta"], [1, "permission-controller"], [1, "permission-action"], [1, "btn-loading"], [1, "loading-spinner-small"]], template: function PermissionsAssignmentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PermissionsAssignmentModalComponent_div_0_Template, 18, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, KeyValuePipe], styles: ["\n\n.permissions-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-header.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.modal-header.rtl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-header.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-header.ltr[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  order: 1;\n}\n.modal-header.ltr[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permission-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n.group-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all[_ngcontent-%COMP%], \n.btn-deselect-all[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-deselect-all[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.permission-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-item.assigned[_ngcontent-%COMP%] {\n  border-color: #158638;\n  background: #f0fdf4;\n}\n.permission-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  accent-color: #158638;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.permission-custom[_ngcontent-%COMP%] {\n  display: none;\n}\n.permission-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.permission-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.permission-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.permission-controller[_ngcontent-%COMP%], \n.permission-action[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=permissions-assignment-modal.component-IIQHN7NT.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsAssignmentModalComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-assignment-modal", standalone: true, imports: [CommonModule, FormsModule], template: `
    <div *ngIf="isVisible" class="permissions-modal-overlay" (click)="onOverlayClick()">
      <div class="permissions-modal" (click)="$event.stopPropagation()">
        <div class="modal-header" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">
          <h3>{{ translate('roles.assign_permissions') }}</h3>
          <button class="close-btn" (click)="onCancel()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="modal-content">
          <!-- Loading State -->
          <div *ngIf="allPermissions().length === 0" class="loading-container">
            <div class="loading-spinner"></div>
            <p>{{ translate('roles.loading_permissions') }}</p>
          </div>
        
          <!-- Permissions List -->
          <div *ngIf="allPermissions().length > 0" class="permissions-container">
            <div *ngFor="let group of getAllPermissionGroups() | keyvalue" class="permission-group">
              <div class="group-header">
                <h4 class="group-title">{{ group.key }}</h4>
                <div class="group-actions">
                  <button
                    type="button"
                    class="btn-select-all"
                    (click)="selectAllInGroup(group.value)"
                  >
                    {{ translate('roles.select_all') }}
                  </button>
                  <button
                    type="button"
                    class="btn-deselect-all"
                    (click)="deselectAllInGroup(group.value)"
                  >
                    {{ translate('roles.deselect_all') }}
                  </button>
                </div>
              </div>
              
              <div class="permissions-grid">
                <div *ngFor="let permission of group.value" 
                     class="permission-item" 
                     [class.assigned]="selectedPermissions().includes(permission.id)"
                     (click)="togglePermission(permission.id)">
                  <label class="permission-checkbox">
                    <input
                      type="checkbox"
                      [checked]="selectedPermissions().includes(permission.id)"
                      (change)="onPermissionToggle(permission.id, $event); $event.stopPropagation()"
                      class="permission-input"
                    />
                    <span class="permission-custom"></span>
                    <div class="permission-content">
                      <div class="permission-name">{{ permission.displayName }}</div>
                      <div class="permission-description">{{ permission.description }}</div>
                      <div class="permission-meta">
                        <span class="permission-controller">{{ permission.controller }}</span>
                        <span class="permission-action">{{ permission.action }}</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="modal-actions">
          <button
            type="button"
            class="btn btn-secondary"
            (click)="onCancel()"
            [disabled]="saving()"
          >
            {{ translate('roles.cancel') }}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            (click)="onAssign()"
            [disabled]="saving()"
          >
            <div *ngIf="saving()" class="btn-loading">
              <div class="loading-spinner-small"></div>
              {{ translate('roles.saving') }}
            </div>
            <div *ngIf="!saving()">
              {{ translate('roles.assign_permissions') }}
            </div>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;17c36de55b7fdebc34e523498f1a990185c7c70c73e823a5262fb94136c4e618;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/shared/permissions-assignment-modal/permissions-assignment-modal.component.ts */\n.permissions-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header.rtl {\n  flex-direction: row-reverse;\n}\n.modal-header.ltr {\n  flex-direction: row;\n}\n.modal-header.rtl h3 {\n  order: 2;\n}\n.modal-header.rtl .close-btn {\n  order: 1;\n}\n.modal-header.ltr h3 {\n  order: 1;\n}\n.modal-header.ltr .close-btn {\n  order: 2;\n}\n.modal-header h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permission-group {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n.group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.group-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.group-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all,\n.btn-deselect-all {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-deselect-all:hover {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.permissions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.permission-item {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.permission-item:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-item.assigned {\n  border-color: #158638;\n  background: #f0fdf4;\n}\n.permission-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input {\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  accent-color: #158638;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.permission-custom {\n  display: none;\n}\n.permission-content {\n  flex: 1;\n}\n.permission-name {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.permission-description {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.permission-controller,\n.permission-action {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  text-align: center;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f4f6;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=permissions-assignment-modal.component-IIQHN7NT.css.map */\n"] }]
  }], null, { isVisible: [{
    type: Input
  }], roleId: [{
    type: Input
  }], assign: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsAssignmentModalComponent, { className: "PermissionsAssignmentModalComponent", filePath: "src/app/components/shared/permissions-assignment-modal/permissions-assignment-modal.component.ts", lineNumber: 382 });
})();

// src/app/components/roles/roles-list/roles-list.component.ts
function RolesListComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function RolesListComponent_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "line", 35)(3, "line", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.clear_search"));
  }
}
function RolesListComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.loading_roles"));
  }
}
function RolesListComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 41);
    \u0275\u0275element(3, "path", 42)(4, "circle", 43)(5, "path", 44)(6, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function RolesListComponent_div_37_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addNewRole());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 8);
    \u0275\u0275element(13, "line", 12)(14, "line", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.no_roles_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.no_roles_description"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.add_first_role"), " ");
  }
}
function RolesListComponent_div_38_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50)(2, "div", 51)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 53)(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 54)(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 55)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 56)(17, "div", 57)(18, "button", 58);
    \u0275\u0275listener("click", function RolesListComponent_div_38_tr_15_Template_button_click_18_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewRoleDetails(role_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 8);
    \u0275\u0275element(20, "path", 59)(21, "circle", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 60);
    \u0275\u0275listener("click", function RolesListComponent_div_38_tr_15_Template_button_click_22_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editRole(role_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 8);
    \u0275\u0275element(24, "path", 61)(25, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 63);
    \u0275\u0275listener("click", function RolesListComponent_div_38_tr_15_Template_button_click_26_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.managePermissions(role_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 64);
    \u0275\u0275element(28, "path", 65)(29, "path", 66)(30, "path", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 68);
    \u0275\u0275listener("click", function RolesListComponent_div_38_tr_15_Template_button_click_31_listener() {
      const role_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(role_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 8);
    \u0275\u0275element(33, "polyline", 69)(34, "path", 70)(35, "line", 71)(36, "line", 72);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", role_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r5.description || ctx_r1.translate("roles.no_description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r5.permissionCount || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(role_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.view_details"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.edit_role"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.manage_permissions"));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.delete_role"));
  }
}
function RolesListComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 47)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, RolesListComponent_div_38_tr_15_Template, 37, 9, "tr", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.role_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions_count"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.created_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.roles());
  }
}
function RolesListComponent_div_39_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function RolesListComponent_div_39_button_22_Template_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r8 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function RolesListComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 76);
    \u0275\u0275listener("change", function RolesListComponent_div_39_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event.target.value));
    });
    \u0275\u0275elementStart(8, "option", 77);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 78);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 79);
    \u0275\u0275text(13, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 80);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 81)(17, "button", 82);
    \u0275\u0275listener("click", function RolesListComponent_div_39_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 8);
    \u0275\u0275element(19, "polyline", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 84);
    \u0275\u0275template(22, RolesListComponent_div_39_button_22_Template, 2, 3, "button", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 82);
    \u0275\u0275listener("click", function RolesListComponent_div_39_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 8);
    \u0275\u0275element(26, "polyline", 86);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate7("", ctx_r1.translate("roles.showing"), " ", (ctx_r1.currentPage() - 1) * ctx_r1.pageSize() + 1, " ", ctx_r1.translate("roles.to"), " ", ctx_r1.Math.min(ctx_r1.currentPage() * ctx_r1.pageSize(), ctx_r1.totalCount()), " ", ctx_r1.translate("roles.of"), " ", ctx_r1.totalCount(), " ", ctx_r1.translate("roles.results"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("roles.show"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize());
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.next"), " ");
  }
}
function RolesListComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 91);
    \u0275\u0275element(4, "path", 92)(5, "polyline", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 94);
    \u0275\u0275listener("click", function RolesListComponent_div_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 8);
    \u0275\u0275element(10, "line", 35)(11, "line", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
var RolesListComponent = class _RolesListComponent {
  rolesService;
  permissionsService;
  translationService;
  langService;
  router;
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // Pagination
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  // Modal state
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  roleToDelete = signal(null, ...ngDevMode ? [{ debugName: "roleToDelete" }] : []);
  deleteModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  constructor(rolesService, permissionsService, translationService, langService, router) {
    this.rolesService = rolesService;
    this.permissionsService = permissionsService;
    this.translationService = translationService;
    this.langService = langService;
    this.router = router;
  }
  ngOnInit() {
    this.loadRoles();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  loadRoles() {
    this.loading.set(true);
    const params = {
      page: this.currentPage(),
      pageSize: this.pageSize(),
      search: this.searchTerm() || void 0
    };
    this.rolesService.getRoles(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.roles.set(response.data.items || []);
          this.totalCount.set(response.data.totalCount || 0);
          this.currentPage.set(response.data.page || 1);
          this.pageSize.set(response.data.pageSize || 10);
          this.loadPermissionCounts();
        } else {
          this.roles.set([]);
          this.totalCount.set(0);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading roles:", error);
        this.roles.set([]);
        this.totalCount.set(0);
        this.loading.set(false);
      }
    });
  }
  loadPermissionCounts() {
    const roles = this.roles();
    roles.forEach((role) => {
      this.rolesService.getRolePermissions(role.id).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            const updatedRoles = this.roles().map((r) => r.id === role.id ? __spreadProps(__spreadValues({}, r), { permissionCount: response.data.length }) : r);
            this.roles.set(updatedRoles);
          }
        },
        error: (error) => {
          console.error(`Error loading permissions for role ${role.id}:`, error);
        }
      });
    });
  }
  onSearchChange(searchTerm) {
    this.searchTerm.set(searchTerm);
    this.currentPage.set(1);
    this.loadRoles();
  }
  onSearchClick() {
    this.currentPage.set(1);
    this.loadRoles();
  }
  clearSearch() {
    this.searchTerm.set("");
    this.currentPage.set(1);
    this.loadRoles();
  }
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadRoles();
  }
  onPageSizeChange(newPageSize) {
    this.pageSize.set(parseInt(newPageSize));
    this.currentPage.set(1);
    this.loadRoles();
  }
  openDeleteModal(role) {
    this.roleToDelete.set(role);
    this.deleteModalData.set({
      title: this.translate("roles.delete_role"),
      message: this.translate("roles.confirm_delete_role").replace("%name%", role.name),
      confirmText: this.translate("roles.delete"),
      cancelText: this.translate("roles.cancel"),
      type: "delete"
    });
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    const role = this.roleToDelete();
    if (role) {
      this.rolesService.deleteRole(role.id).subscribe({
        next: () => {
          this.roles.update((roles) => roles.filter((r) => r.id !== role.id));
          this.showDeleteModal.set(false);
          this.roleToDelete.set(null);
          this.successMessage.set(this.translate("roles.deleted_success"));
          this.showSuccessModal.set(true);
          setTimeout(() => {
            this.showSuccessModal.set(false);
          }, 3e3);
        },
        error: (error) => {
          console.error("Error deleting role:", error);
          this.showDeleteModal.set(false);
          this.roleToDelete.set(null);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.roleToDelete.set(null);
  }
  editRole(role) {
    this.router.navigate(["/roles", role.id, "edit"]);
  }
  viewRoleDetails(role) {
    this.router.navigate(["/roles", role.id, "details"]);
  }
  managePermissions(role) {
    this.roleId.set(role.id);
    this.showPermissionsModal.set(true);
  }
  // Modal state for roles list
  showPermissionsModal = signal(false, ...ngDevMode ? [{ debugName: "showPermissionsModal" }] : []);
  roleId = signal(null, ...ngDevMode ? [{ debugName: "roleId" }] : []);
  addNewRole() {
    this.router.navigate(["/roles/add"]);
  }
  manageAllPermissions() {
    this.router.navigate(["/roles/permissions"]);
  }
  onPermissionsAssign(permissionIds) {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.rolesService.assignPermissionsToRole(roleId, permissionIds).subscribe({
      next: () => {
        this.successMessage.set(this.translate("roles.permissions_assigned_success"));
        this.showSuccessModal.set(true);
        this.showPermissionsModal.set(false);
        this.roleId.set(null);
        this.loadRoles();
      },
      error: (error) => {
        console.error("Error assigning permissions:", error);
      }
    });
  }
  onPermissionsCancel() {
    this.showPermissionsModal.set(false);
    this.roleId.set(null);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  translate(key) {
    return this.translationService.translate(key);
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
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLang() === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      calendar: "gregory"
    });
  }
  static \u0275fac = function RolesListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesListComponent)(\u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesListComponent, selectors: [["app-roles-list"]], standalone: false, decls: 43, vars: 37, consts: [[1, "roles-container", "rounded-5"], [1, "page-header"], [1, "header-content"], [1, "title-section"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M12 1v6m0 6v6m11-7h-6m-6 0H1"], [1, "btn", "btn-primary", 3, "click"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-section"], [1, "search-container"], [1, "search-input-group"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", 1, "search-input", 3, "input", "keyup.enter", "placeholder", "value"], ["class", "clear-search-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "count-badge"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], [3, "confirm", "cancel", "data", "isVisible", "isRTL"], ["class", "success-modal", 4, "ngIf"], [3, "assign", "cancel", "isVisible", "roleId"], [1, "clear-search-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "loading-container"], [1, "loading-spinner"], [1, "empty-state"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "table-wrapper"], [1, "roles-table"], ["class", "role-row", 4, "ngFor", "ngForOf"], [1, "role-row"], [1, "role-name"], [1, "role-info"], [1, "role-id"], [1, "role-description"], [1, "permissions-count"], [1, "created-date"], [1, "actions"], [1, "action-buttons"], [1, "btn-icon", "btn-view", 3, "click"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], [1, "btn-icon", "btn-edit", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn-icon", "btn-permissions", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"], ["d", "M12 8v4"], ["d", "M12 16h.01"], [1, "btn-icon", "btn-delete", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "pagination-container"], [1, "pagination-info"], [1, "page-size-selector"], [3, "change", "value"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "pagination-controls"], [1, "btn-pagination", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], [1, "page-numbers"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "btn-page", 3, "click"], [1, "success-modal"], [1, "success-content"], [1, "success-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-success", 3, "click"]], template: function RolesListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
      \u0275\u0275listener("click", function RolesListComponent_Template_button_click_9_listener() {
        return ctx.manageAllPermissions();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 8);
      \u0275\u0275element(11, "circle", 9)(12, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function RolesListComponent_Template_button_click_14_listener() {
        return ctx.addNewRole();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 8);
      \u0275\u0275element(16, "line", 12)(17, "line", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "div", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 17);
      \u0275\u0275element(23, "circle", 18)(24, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "input", 20);
      \u0275\u0275listener("input", function RolesListComponent_Template_input_input_25_listener($event) {
        return ctx.onSearchChange($event.target.value);
      })("keyup.enter", function RolesListComponent_Template_input_keyup_enter_25_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, RolesListComponent_button_26_Template, 4, 1, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 22);
      \u0275\u0275listener("click", function RolesListComponent_Template_button_click_27_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 23)(30, "div", 24)(31, "div", 25)(32, "h3");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 26);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, RolesListComponent_div_36_Template, 4, 1, "div", 27)(37, RolesListComponent_div_37_Template, 16, 3, "div", 28)(38, RolesListComponent_div_38_Template, 16, 6, "div", 29)(39, RolesListComponent_div_39_Template, 27, 14, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "app-confirmation-modal", 31);
      \u0275\u0275listener("confirm", function RolesListComponent_Template_app_confirmation_modal_confirm_40_listener() {
        return ctx.onDeleteConfirm();
      })("cancel", function RolesListComponent_Template_app_confirmation_modal_cancel_40_listener() {
        return ctx.onDeleteCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, RolesListComponent_div_41_Template, 12, 1, "div", 32);
      \u0275\u0275elementStart(42, "app-permissions-assignment-modal", 33);
      \u0275\u0275listener("assign", function RolesListComponent_Template_app_permissions_assignment_modal_assign_42_listener($event) {
        return ctx.onPermissionsAssign($event);
      })("cancel", function RolesListComponent_Template_app_permissions_assignment_modal_cancel_42_listener() {
        return ctx.onPermissionsCancel();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("roles.roles_management"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("roles.roles_management_description"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.manage_permissions"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.add_new_role"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", ctx.translate("roles.search_roles"))("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.search"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("roles.roles_list"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.totalCount(), " ", ctx.translate("roles.roles"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.roles().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.roles().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.roles().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.deleteModalData())("isVisible", ctx.showDeleteModal())("isRTL", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
      \u0275\u0275advance();
      \u0275\u0275property("isVisible", ctx.showPermissionsModal())("roleId", ctx.roleId());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, ConfirmationModalComponent, PermissionsAssignmentModalComponent], styles: ["\n\n.roles-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.roles-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 2;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #2a2d33;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(27, 29, 33, 0.3);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.search-section.rtl[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row-reverse;\n}\n.search-section.ltr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  max-width: 500px;\n}\n.search-container.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input-group.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input-group.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.table-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.table-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.roles-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem 2rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.role-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.role-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.role-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-family: monospace;\n}\n.role-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n  max-width: 300px;\n}\n.permissions-count[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.created-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-view[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  color: #d97706;\n}\n.btn-permissions[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n}\n.btn-pagination[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-pagination[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-page[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .roles-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.roles-container.rtl[_ngcontent-%COMP%]   .roles-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .roles-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1.5rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .roles-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    max-width: 100%;\n  }\n  .search-input-group[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .roles-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn-pagination[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));\n    gap: 0.25rem;\n    width: 100%;\n  }\n  .btn-page[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 40px;\n  }\n  .success-modal[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content[_ngcontent-%COMP%] {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .roles-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .btn-pagination[_ngcontent-%COMP%] {\n    padding: 0.625rem;\n    font-size: 0.8rem;\n  }\n  .btn-page[_ngcontent-%COMP%] {\n    min-width: 36px;\n    height: 36px;\n    font-size: 0.8rem;\n  }\n}\n.permissions-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white !important;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permissions-grid-3col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.permission-column[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  min-height: 300px;\n}\n.column-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.column-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n  text-align: center;\n}\n.permissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.permission-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-item.currently-assigned[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  background: #f0fdf4;\n}\n.assigned-badge[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  margin-left: 0.5rem;\n  font-weight: 500;\n}\n.permission-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  accent-color: #B68A35;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.permission-custom[_ngcontent-%COMP%] {\n  display: none;\n}\n.permission-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.permission-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.permission-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .permissions-modal[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl[_ngcontent-%COMP%]   .permission-checkbox[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .permissions-grid-3col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .permissions-modal[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 1rem;\n  }\n}\n/*# sourceMappingURL=roles-list.component-5MY4AJKK.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesListComponent, [{
    type: Component,
    args: [{ selector: "app-roles-list", standalone: false, template: `<div class="roles-container rounded-5" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="page-header">\r
    <div class="header-content" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="title-section">\r
        <h1 class="page-title">{{ translate('roles.roles_management') }}</h1>\r
        <p class="page-subtitle">{{ translate('roles.roles_management_description') }}</p>\r
      </div>\r
      <div class="header-actions">\r
        <button class="btn btn-secondary" (click)="manageAllPermissions()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="3"></circle>\r
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>\r
          </svg>\r
          {{ translate('roles.manage_permissions') }}\r
        </button>\r
        <button class="btn btn-primary" (click)="addNewRole()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"></line>\r
            <line x1="5" y1="12" x2="19" y2="12"></line>\r
          </svg>\r
          {{ translate('roles.add_new_role') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters Section -->\r
  <div class="search-section" [class.rtl]="isRTL()">\r
    <div class="search-container" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="search-input-group" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="11" cy="11" r="8"></circle>\r
          <path d="m21 21-4.35-4.35"></path>\r
        </svg>\r
        <input \r
          type="text" \r
          class="search-input" \r
          [placeholder]="translate('roles.search_roles')"\r
          [value]="searchTerm()"\r
          (input)="onSearchChange($event.target.value)"\r
          (keyup.enter)="onSearchClick()"\r
        />\r
        <button \r
          *ngIf="searchTerm()" \r
          class="clear-search-btn" \r
          (click)="clearSearch()"\r
          [attr.aria-label]="translate('roles.clear_search')"\r
        >\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <button class="btn btn-outline" (click)="onSearchClick()">\r
        {{ translate('roles.search') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Roles Table -->\r
  <div class="table-container">\r
    <div class="table-header">\r
      <div class="table-title">\r
        <h3>{{ translate('roles.roles_list') }}</h3>\r
        <span class="count-badge">{{ totalCount() }} {{ translate('roles.roles') }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Loading State -->\r
    <div *ngIf="loading()" class="loading-container">\r
      <div class="loading-spinner"></div>\r
      <p>{{ translate('roles.loading_roles') }}</p>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="!loading() && roles().length === 0" class="empty-state">\r
      <div class="empty-icon">\r
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
          <circle cx="9" cy="7" r="4"></circle>\r
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
        </svg>\r
      </div>\r
      <h3>{{ translate('roles.no_roles_found') }}</h3>\r
      <p>{{ translate('roles.no_roles_description') }}</p>\r
      <button class="btn btn-primary" (click)="addNewRole()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="12" y1="5" x2="12" y2="19"></line>\r
          <line x1="5" y1="12" x2="19" y2="12"></line>\r
        </svg>\r
        {{ translate('roles.add_first_role') }}\r
      </button>\r
    </div>\r
\r
    <!-- Roles Table -->\r
    <div *ngIf="!loading() && roles().length > 0" class="table-wrapper">\r
      <table class="roles-table">\r
        <thead>\r
          <tr>\r
            <th>{{ translate('roles.role_name') }}</th>\r
            <th>{{ translate('roles.description') }}</th>\r
            <th>{{ translate('roles.permissions_count') }}</th>\r
            <th>{{ translate('roles.created_date') }}</th>\r
            <th>{{ translate('roles.actions') }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let role of roles()" class="role-row">\r
            <td class="role-name">\r
              <div class="role-info">\r
                <h4>{{ role.name }}</h4>\r
                <span class="role-id">ID: {{ role.id }}</span>\r
              </div>\r
            </td>\r
            <td class="role-description">\r
              <p>{{ role.description || translate('roles.no_description') }}</p>\r
            </td>\r
             <td class="permissions-count">\r
               <span class="count-badge">{{ role.permissionCount || 0 }}</span>\r
             </td>\r
            <td class="created-date">\r
              <span>{{ formatDate(role.createdAt) }}</span>\r
            </td>\r
            <td class="actions">\r
              <div class="action-buttons">\r
                <button \r
                  class="btn-icon btn-view" \r
                  (click)="viewRoleDetails(role)"\r
                  [attr.aria-label]="translate('roles.view_details')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>\r
                    <circle cx="12" cy="12" r="3"></circle>\r
                  </svg>\r
                </button>\r
                <button \r
                  class="btn-icon btn-edit" \r
                  (click)="editRole(role)"\r
                  [attr.aria-label]="translate('roles.edit_role')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                  </svg>\r
                </button>\r
                <button \r
                  class="btn-icon btn-permissions" \r
                  (click)="managePermissions(role)"\r
                  [attr.aria-label]="translate('roles.manage_permissions')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>\r
                    <path d="M12 8v4"/>\r
                    <path d="M12 16h.01"/>\r
                  </svg>\r
                </button>\r
                <button \r
                  class="btn-icon btn-delete" \r
                  (click)="openDeleteModal(role)"\r
                  [attr.aria-label]="translate('roles.delete_role')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polyline points="3,6 5,6 21,6"></polyline>\r
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6"></path>\r
                    <line x1="10" y1="11" x2="10" y2="17"></line>\r
                    <line x1="14" y1="11" x2="14" y2="17"></line>\r
                  </svg>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="!loading() && roles().length > 0" class="pagination-container">\r
      <div class="pagination-info">\r
        <span>{{ translate('roles.showing') }} {{ (currentPage() - 1) * pageSize() + 1 }} {{ translate('roles.to') }} {{ Math.min(currentPage() * pageSize(), totalCount()) }} {{ translate('roles.of') }} {{ totalCount() }} {{ translate('roles.results') }}</span>\r
        <div class="page-size-selector">\r
          <label>{{ translate('roles.show') }}:</label>\r
          <select [value]="pageSize()" (change)="onPageSizeChange($any($event.target).value)">\r
            <option value="5">5</option>\r
            <option value="10">10</option>\r
            <option value="20">20</option>\r
            <option value="50">50</option>\r
          </select>\r
        </div>\r
      </div>\r
      \r
      <div class="pagination-controls">\r
        <button \r
          class="btn-pagination" \r
          [disabled]="currentPage() === 1"\r
          (click)="onPageChange(currentPage() - 1)"\r
        >\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('roles.previous') }}\r
        </button>\r
        \r
        <div class="page-numbers">\r
          <button \r
            *ngFor="let page of pages" \r
            class="btn-page"\r
            [class.active]="page === currentPage()"\r
            (click)="onPageChange(page)"\r
          >\r
            {{ page }}\r
          </button>\r
        </div>\r
        \r
        <button \r
          class="btn-pagination" \r
          [disabled]="currentPage() === totalPages"\r
          (click)="onPageChange(currentPage() + 1)"\r
        >\r
          {{ translate('roles.next') }}\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal\r
    [data]="deleteModalData()"\r
    [isVisible]="showDeleteModal()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()"\r
  ></app-confirmation-modal>\r
\r
  <!-- Success Modal -->\r
  <div *ngIf="showSuccessModal()" class="success-modal">\r
    <div class="success-content">\r
      <div class="success-icon">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
          <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
        </svg>\r
      </div>\r
      <p>{{ successMessage() }}</p>\r
      <button class="close-success" (click)="closeSuccessModal()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
\r
   <!-- Permissions Assignment Modal -->\r
   <app-permissions-assignment-modal\r
     [isVisible]="showPermissionsModal()"\r
     [roleId]="roleId()"\r
     (assign)="onPermissionsAssign($event)"\r
     (cancel)="onPermissionsCancel()"\r
   ></app-permissions-assignment-modal>\r
</div>\r
\r
`, styles: ["/* src/app/components/roles/roles-list/roles-list.component.css */\n.roles-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.roles-container.rtl {\n  direction: rtl;\n}\n.page-header {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl {\n  flex-direction: row-reverse;\n}\n.header-content.ltr {\n  flex-direction: row;\n}\n.header-content.rtl .title-section {\n  order: 2;\n}\n.header-content.rtl .header-actions {\n  order: 1;\n}\n.header-content.ltr .title-section {\n  order: 1;\n}\n.header-content.ltr .header-actions {\n  order: 2;\n}\n.header-content.rtl .title-section .back-btn {\n  order: 2;\n}\n.header-content.rtl .title-section .title-content {\n  order: 1;\n}\n.header-content.ltr .title-section .back-btn {\n  order: 1;\n}\n.header-content.ltr .title-section .title-content {\n  order: 2;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary:hover {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary {\n  background: #1B1D21;\n  color: white;\n}\n.btn-secondary:hover {\n  background: #2a2d33;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(27, 29, 33, 0.3);\n}\n.btn-outline {\n  background: #B68A35;\n  color: white;\n}\n.btn-outline:hover {\n  background: #B68A35;\n}\n.search-section {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.search-section.rtl {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row-reverse;\n}\n.search-section.ltr {\n  display: flex;\n  justify-content: flex-start;\n}\n.search-container {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  max-width: 500px;\n}\n.search-container.ltr {\n  flex-direction: row;\n}\n.search-input-group {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input-group.rtl .search-icon {\n  left: auto;\n  right: 1rem;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input-group.rtl .search-input {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-search-btn {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.clear-search-btn:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n.table-container {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.table-header {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.table-title {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-title h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.count-badge {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-state h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-state p {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.roles-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.roles-table th {\n  background: #f9fafb;\n  padding: 1rem 2rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.roles-table td {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.role-row:hover {\n  background: #f9fafb;\n}\n.role-name h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.role-id {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-family: monospace;\n}\n.role-description p {\n  color: #6b7280;\n  margin: 0;\n  line-height: 1.5;\n  max-width: 300px;\n}\n.permissions-count {\n  text-align: center;\n}\n.created-date {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.actions {\n  text-align: right;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n}\n.btn-icon:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-view:hover {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.btn-edit:hover {\n  background: #fef3c7;\n  color: #d97706;\n}\n.btn-permissions:hover {\n  background: #e0f2fe;\n  color: #0284c7;\n}\n.btn-delete:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-selector select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.875rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-pagination {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n}\n.btn-pagination:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-pagination:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.btn-page {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-page:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-page.active {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.success-modal {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: slideInRight 0.3s ease-out;\n}\n.success-content {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content p {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.roles-container.rtl .header-content {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .header-actions {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .roles-table th,\n.roles-container.rtl .roles-table td {\n  text-align: right;\n}\n.roles-container.rtl .actions {\n  text-align: left;\n}\n.roles-container.rtl .action-buttons {\n  justify-content: flex-start;\n}\n.roles-container.rtl .pagination-container {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .pagination-controls {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .success-modal {\n  right: auto;\n  left: 2rem;\n}\n.roles-container.rtl .success-content {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .roles-container {\n    padding: 1.5rem;\n  }\n  .page-header {\n    padding: 1.5rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1.5rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .search-container {\n    max-width: 100%;\n  }\n  .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .pagination-controls {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-numbers {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .roles-container {\n    padding: 1rem;\n  }\n  .page-header {\n    padding: 1rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .page-subtitle {\n    font-size: 0.875rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .search-container {\n    flex-direction: column;\n    gap: 1rem;\n    max-width: 100%;\n  }\n  .search-input-group {\n    max-width: none;\n  }\n  .table-wrapper {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .roles-table {\n    min-width: 600px;\n  }\n  .pagination-container {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn-pagination {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .page-numbers {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));\n    gap: 0.25rem;\n    width: 100%;\n  }\n  .btn-page {\n    width: 100%;\n    min-width: 40px;\n  }\n  .success-modal {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .roles-container {\n    padding: 0.5rem;\n  }\n  .page-header {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title {\n    font-size: 1.25rem;\n  }\n  .page-subtitle {\n    font-size: 0.8rem;\n  }\n  .search-section {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .pagination-container {\n    padding: 0.75rem;\n  }\n  .pagination-info {\n    font-size: 0.8rem;\n  }\n  .btn {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .btn-pagination {\n    padding: 0.625rem;\n    font-size: 0.8rem;\n  }\n  .btn-page {\n    min-width: 36px;\n    height: 36px;\n    font-size: 0.8rem;\n  }\n}\n.permissions-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 1000px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n.modal-header h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: white !important;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permissions-grid-3col {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.permission-column {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  min-height: 300px;\n}\n.column-header {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e2e8f0;\n}\n.column-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n  text-align: center;\n}\n.permissions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.permission-item {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.permission-item:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-item.currently-assigned {\n  border-color: #B68A35;\n  background: #f0fdf4;\n}\n.assigned-badge {\n  background: #B68A35;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  margin-left: 0.5rem;\n  font-weight: 500;\n}\n.permission-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input {\n  margin: 0;\n  width: 18px;\n  height: 18px;\n  accent-color: #B68A35;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.permission-custom {\n  display: none;\n}\n.permission-content {\n  flex: 1;\n}\n.permission-name {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n  font-size: 0.95rem;\n}\n.permission-description {\n  color: #64748b;\n  font-size: 0.875rem;\n  line-height: 1.4;\n}\n.btn-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.roles-container.rtl .permissions-modal {\n  direction: rtl;\n}\n.roles-container.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n.roles-container.rtl .permission-checkbox {\n  flex-direction: row-reverse;\n}\n@media (max-width: 768px) {\n  .permissions-grid-3col {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .permissions-modal {\n    max-width: 95vw;\n    margin: 1rem;\n  }\n}\n/*# sourceMappingURL=roles-list.component-5MY4AJKK.css.map */\n"] }]
  }], () => [{ type: RolesService }, { type: PermissionsService }, { type: TranslationService }, { type: LangService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesListComponent, { className: "RolesListComponent", filePath: "src/app/components/roles/roles-list/roles-list.component.ts", lineNumber: 18 });
})();

// src/app/components/roles/role-form/role-form.component.ts
function RoleFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.loading_role"));
  }
}
function RoleFormComponent_div_14_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("name"), " ");
  }
}
function RoleFormComponent_div_14_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getFieldError("description"), " ");
  }
}
function RoleFormComponent_div_14_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("roles.role_form.saving"), " ");
  }
}
function RoleFormComponent_div_14_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode() ? ctx_r0.translate("roles.role_form.save_changes") : ctx_r0.translate("roles.role_form.save"), " ");
  }
}
function RoleFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "form", 17);
    \u0275\u0275listener("ngSubmit", function RoleFormComponent_div_14_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "div", 19)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "label", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 24);
    \u0275\u0275template(15, RoleFormComponent_div_14_div_15_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26)(17, "label", 27);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "textarea", 28);
    \u0275\u0275template(22, RoleFormComponent_div_14_div_22_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "button", 30);
    \u0275\u0275template(25, RoleFormComponent_div_14_div_25_Template, 3, 1, "div", 31)(26, RoleFormComponent_div_14_div_26_Template, 2, 1, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 33);
    \u0275\u0275listener("click", function RoleFormComponent_div_14_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.roleForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.basic_information"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.basic_information_description"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("roles.role_form.role_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r0.isFieldInvalid("name"));
    \u0275\u0275property("placeholder", ctx_r0.translate("roles.role_form.role_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("roles.role_form.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r0.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", ctx_r0.translate("roles.role_form.description_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isFieldInvalid("description"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.roleForm.invalid || ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("roles.role_form.back"), " ");
  }
}
function RoleFormComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 40);
    \u0275\u0275element(4, "path", 41)(5, "polyline", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function RoleFormComponent_div_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 44);
    \u0275\u0275element(10, "line", 45)(11, "line", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
var RoleFormComponent = class _RoleFormComponent {
  fb;
  rolesService;
  permissionsService;
  translationService;
  langService;
  route;
  router;
  roleForm;
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  selectedPermissions = signal([], ...ngDevMode ? [{ debugName: "selectedPermissions" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  roleId = signal(null, ...ngDevMode ? [{ debugName: "roleId" }] : []);
  role = signal(null, ...ngDevMode ? [{ debugName: "role" }] : []);
  // Modal state
  showCancelModal = signal(false, ...ngDevMode ? [{ debugName: "showCancelModal" }] : []);
  cancelModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "warning"
  }, ...ngDevMode ? [{ debugName: "cancelModalData" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  constructor(fb, rolesService, permissionsService, translationService, langService, route, router) {
    this.fb = fb;
    this.rolesService = rolesService;
    this.permissionsService = permissionsService;
    this.translationService = translationService;
    this.langService = langService;
    this.route = route;
    this.router = router;
    this.initializeForm();
  }
  ngOnInit() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
    this.route.params.subscribe((params) => {
      if (params["roleId"]) {
        this.isEditMode.set(true);
        this.roleId.set(params["roleId"]);
        this.loadRole();
      }
    });
    this.loadPermissions();
  }
  initializeForm() {
    this.roleForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
      permissions: this.fb.array([])
    });
  }
  loadRole() {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.loading.set(true);
    this.rolesService.getRoleById(roleId).subscribe({
      next: (role) => {
        this.role.set(role);
        this.roleForm.patchValue({
          name: role.name,
          description: role.description
        });
        const selectedIds = role.availablePermissions?.map((p) => p.id) || [];
        this.selectedPermissions.set(selectedIds);
        this.updatePermissionsFormArray();
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading role:", error);
        this.loading.set(false);
      }
    });
  }
  loadPermissions() {
    this.permissionsService.getAllPermissions().subscribe({
      next: (permissions) => {
        this.permissions.set(permissions);
        this.updatePermissionsFormArray();
      },
      error: (error) => {
        console.error("Error loading permissions:", error);
      }
    });
  }
  updatePermissionsFormArray() {
    const permissionsArray = this.roleForm.get("permissions");
    permissionsArray.clear();
    this.permissions().forEach((permission) => {
      const isSelected = this.selectedPermissions().includes(permission.id);
      permissionsArray.push(this.fb.control(isSelected));
    });
  }
  onPermissionToggle(permissionId, isChecked) {
    const current = this.selectedPermissions();
    if (isChecked) {
      this.selectedPermissions.set([...current, permissionId]);
    } else {
      this.selectedPermissions.set(current.filter((id) => id !== permissionId));
    }
    this.updatePermissionsFormArray();
  }
  onSubmit() {
    if (this.roleForm.valid) {
      this.saving.set(true);
      const formValue = this.roleForm.value;
      const roleData = {
        name: formValue.name,
        description: formValue.description
      };
      if (this.isEditMode()) {
        this.updateRole(roleData);
      } else {
        this.createRole(roleData);
      }
    } else {
      this.markFormGroupTouched();
    }
  }
  createRole(roleData) {
    this.rolesService.createRole(roleData).subscribe({
      next: (role) => {
        if (this.selectedPermissions().length > 0) {
          this.rolesService.assignPermissionsToRole(role.id, this.selectedPermissions()).subscribe({
            next: () => {
              this.showSuccessMessage(this.translate("roles.role_form.role_created"));
              this.router.navigate(["/roles"]);
            },
            error: (error) => {
              console.error("Error assigning permissions:", error);
              this.showSuccessMessage(this.translate("roles.role_form.role_created"));
              this.router.navigate(["/roles"]);
            }
          });
        } else {
          this.showSuccessMessage(this.translate("roles.role_form.role_created"));
          this.router.navigate(["/roles"]);
        }
        this.saving.set(false);
      },
      error: (error) => {
        console.error("Error creating role:", error);
        this.saving.set(false);
      }
    });
  }
  updateRole(roleData) {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.rolesService.updateRole(roleId, roleData).subscribe({
      next: (role) => {
        this.rolesService.assignPermissionsToRole(roleId, this.selectedPermissions()).subscribe({
          next: () => {
            this.showSuccessMessage(this.translate("roles.role_form.role_updated"));
            this.router.navigate(["/roles"]);
          },
          error: (error) => {
            console.error("Error updating permissions:", error);
            this.showSuccessMessage(this.translate("roles.role_form.role_updated"));
            this.router.navigate(["/roles"]);
          }
        });
        this.saving.set(false);
      },
      error: (error) => {
        console.error("Error updating role:", error);
        this.saving.set(false);
      }
    });
  }
  onCancel() {
    if (this.roleForm.dirty) {
      this.cancelModalData.set({
        title: this.translate("roles.role_form.back"),
        message: this.translate("roles.unsaved_changes_message"),
        confirmText: this.translate("roles.discard_changes"),
        cancelText: this.translate("roles.keep_editing"),
        type: "warning"
      });
      this.showCancelModal.set(true);
    } else {
      this.goBack();
    }
  }
  goBack() {
    this.router.navigate(["/roles"]);
  }
  onCancelConfirm() {
    this.showCancelModal.set(false);
    this.router.navigate(["/roles"]);
  }
  onCancelCancel() {
    this.showCancelModal.set(false);
  }
  showSuccessMessage(message) {
    this.successMessage.set(message);
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  markFormGroupTouched() {
    Object.keys(this.roleForm.controls).forEach((key) => {
      const control = this.roleForm.get(key);
      control?.markAsTouched();
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.roleForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate(`roles.role_form.${fieldName}_required`);
      }
      if (field.errors["minlength"]) {
        return this.translate("roles.min_length_required");
      }
    }
    return "";
  }
  isFieldInvalid(fieldName) {
    const field = this.roleForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }
  getPermissionGroups() {
    const groups = {};
    this.permissions().forEach((permission) => {
      const controller = permission.controller;
      if (!groups[controller]) {
        groups[controller] = [];
      }
      groups[controller].push(permission);
    });
    return groups;
  }
  selectAllInGroup(permissions) {
    const current = this.selectedPermissions();
    const newIds = permissions.map((p) => p.id);
    const updated = [.../* @__PURE__ */ new Set([...current, ...newIds])];
    this.selectedPermissions.set(updated);
    this.updatePermissionsFormArray();
  }
  deselectAllInGroup(permissions) {
    const current = this.selectedPermissions();
    const groupIds = permissions.map((p) => p.id);
    const updated = current.filter((id) => !groupIds.includes(id));
    this.selectedPermissions.set(updated);
    this.updatePermissionsFormArray();
  }
  static \u0275fac = function RoleFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleFormComponent, selectors: [["app-role-form"]], standalone: false, decls: 17, vars: 15, consts: [[1, "role-form-container"], [1, "page-header"], [1, "header-content"], [1, "title-section"], [1, "back-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "title-content"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "form-content", 4, "ngIf"], [3, "confirm", "cancel", "data", "isVisible", "isRTL"], ["class", "success-modal", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "form-content"], [1, "role-form", 3, "ngSubmit", "formGroup"], [1, "form-card"], [1, "card-header"], [1, "form-grid"], [1, "form-group"], ["for", "name", 1, "form-label"], [1, "required"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], [1, "form-group", "full-width"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "btn-loading", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "error-message"], [1, "btn-loading"], [1, "loading-spinner-small"], [1, "success-modal"], [1, "success-content"], [1, "success-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-success", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"]], template: function RoleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function RoleFormComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "polyline", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7)(9, "h1", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(13, RoleFormComponent_div_13_Template, 4, 1, "div", 10)(14, RoleFormComponent_div_14_Template, 29, 18, "div", 11);
      \u0275\u0275elementStart(15, "app-confirmation-modal", 12);
      \u0275\u0275listener("confirm", function RoleFormComponent_Template_app_confirmation_modal_confirm_15_listener() {
        return ctx.onCancelConfirm();
      })("cancel", function RoleFormComponent_Template_app_confirmation_modal_cancel_15_listener() {
        return ctx.onCancelCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, RoleFormComponent_div_16_Template, 12, 1, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.role_form.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode() ? ctx.translate("roles.role_form.edit_role") : ctx.translate("roles.role_form.add_role"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode() ? ctx.translate("roles.edit_role_description") : ctx.translate("roles.add_role_description"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.cancelModalData())("isVisible", ctx.showCancelModal())("isRTL", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ['\n\n.role-form-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.role-form-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  background: #D4AF5F;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n}\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 2;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.form-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.role-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox-custom[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.permissions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.permission-group[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.group-header[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  text-transform: capitalize;\n}\n.group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all[_ngcontent-%COMP%], \n.btn-deselect-all[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.btn-deselect-all[_ngcontent-%COMP%]:hover {\n  background: #6b7280;\n  color: white;\n  border-color: #6b7280;\n}\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1.5rem;\n}\n.permission-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.permission-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n.permission-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.permission-custom[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.permission-input[_ngcontent-%COMP%]:checked    + .permission-custom[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.permission-input[_ngcontent-%COMP%]:checked    + .permission-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.permission-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.permission-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n}\n.permission-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.permission-controller[_ngcontent-%COMP%], \n.permission-action[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .permission-checkbox[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .permission-meta[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.role-form-container.rtl[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 768px) {\n  .role-form-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .permissions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .success-modal[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=role-form.component-TVUWK52U.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleFormComponent, [{
    type: Component,
    args: [{ selector: "app-role-form", standalone: false, template: `<div class="role-form-container" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="page-header">\r
    <div class="header-content" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="title-section">\r
        <button class="back-btn" (click)="goBack()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('roles.role_form.back') }}\r
        </button>\r
        <div class="title-content">\r
          <h1 class="page-title">\r
            {{ isEditMode() ? translate('roles.role_form.edit_role') : translate('roles.role_form.add_role') }}\r
          </h1>\r
          <p class="page-subtitle">\r
            {{ isEditMode() ? translate('roles.edit_role_description') : translate('roles.add_role_description') }}\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('roles.loading_role') }}</p>\r
  </div>\r
\r
  <!-- Form Content -->\r
  <div *ngIf="!loading()" class="form-content">\r
    <form [formGroup]="roleForm" (ngSubmit)="onSubmit()" class="role-form">\r
      <!-- Basic Information Card -->\r
      <div class="form-card">\r
        <div class="card-header">\r
          <h3>{{ translate('roles.basic_information') }}</h3>\r
          <p>{{ translate('roles.basic_information_description') }}</p>\r
        </div>\r
        \r
        <div class="form-grid">\r
          <div class="form-group">\r
            <label for="name" class="form-label">\r
              {{ translate('roles.role_form.role_name') }}\r
              <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="name"\r
              formControlName="name"\r
              class="form-input"\r
              [class.error]="isFieldInvalid('name')"\r
              [placeholder]="translate('roles.role_form.role_name_placeholder')"\r
            />\r
            <div *ngIf="isFieldInvalid('name')" class="error-message">\r
              {{ getFieldError('name') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group full-width">\r
            <label for="description" class="form-label">\r
              {{ translate('roles.role_form.description') }}\r
              <span class="required">*</span>\r
            </label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              class="form-textarea"\r
              [class.error]="isFieldInvalid('description')"\r
              [placeholder]="translate('roles.role_form.description_placeholder')"\r
              rows="3"\r
            ></textarea>\r
            <div *ngIf="isFieldInvalid('description')" class="error-message">\r
              {{ getFieldError('description') }}\r
            </div>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
\r
      <!-- Form Actions -->\r
      <div class="form-actions">\r
     \r
        <button\r
          type="submit"\r
          class="btn btn-primary"\r
          [disabled]="roleForm.invalid || saving()"\r
        >\r
          <div *ngIf="saving()" class="btn-loading">\r
            <div class="loading-spinner-small"></div>\r
            {{ translate('roles.role_form.saving') }}\r
          </div>\r
          <div *ngIf="!saving()">\r
            {{ isEditMode() ? translate('roles.role_form.save_changes') : translate('roles.role_form.save') }}\r
          </div>\r
        </button>\r
        <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="goBack()"\r
        [disabled]="saving()"\r
      >\r
        {{ translate('roles.role_form.back') }}\r
      </button>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal\r
    [data]="cancelModalData()"\r
    [isVisible]="showCancelModal()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onCancelConfirm()"\r
    (cancel)="onCancelCancel()"\r
  ></app-confirmation-modal>\r
\r
  <!-- Success Modal -->\r
  <div *ngIf="showSuccessModal()" class="success-modal">\r
    <div class="success-content">\r
      <div class="success-icon">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
          <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
        </svg>\r
      </div>\r
      <p>{{ successMessage() }}</p>\r
      <button class="close-success" (click)="closeSuccessModal()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/roles/role-form/role-form.component.css */\n.role-form-container {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.role-form-container.rtl {\n  direction: rtl;\n}\n.page-header {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  background: #D4AF5F;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl {\n  flex-direction: row-reverse;\n}\n.header-content.ltr {\n  flex-direction: row;\n}\n.header-content.rtl .title-section {\n  order: 2;\n}\n.header-content.rtl .header-actions {\n  order: 1;\n}\n.header-content.ltr .title-section {\n  order: 1;\n}\n.header-content.ltr .header-actions {\n  order: 2;\n}\n.title-section {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.header-content.ltr .title-section {\n  flex-direction: row;\n}\n.header-content.rtl .title-section .back-btn {\n  order: 2;\n}\n.header-content.rtl .title-section .title-content {\n  order: 1;\n}\n.header-content.ltr .title-section .back-btn {\n  order: 1;\n}\n.header-content.ltr .title-section .title-content {\n  order: 2;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl .back-btn svg {\n  transform: scaleX(-1);\n}\n.back-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content {\n  flex: 1;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  color: white;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.form-content {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.role-form {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n}\n.card-header p {\n  color: #6b7280;\n  margin: 0;\n  font-size: 0.875rem;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.form-input,\n.form-textarea {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-textarea.error {\n  border-color: #dc2626;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-input {\n  display: none;\n}\n.checkbox-custom {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.checkbox-input:checked + .checkbox-custom {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.checkbox-input:checked + .checkbox-custom::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.permissions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.permission-group {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.group-header {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.group-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  text-transform: capitalize;\n}\n.group-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all,\n.btn-deselect-all {\n  padding: 0.25rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all:hover {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.btn-deselect-all:hover {\n  background: #6b7280;\n  color: white;\n  border-color: #6b7280;\n}\n.permissions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n  padding: 1.5rem;\n}\n.permission-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.permission-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.permission-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n}\n.permission-input {\n  display: none;\n}\n.permission-custom {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n  margin-top: 0.25rem;\n}\n.permission-input:checked + .permission-custom {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.permission-input:checked + .permission-custom::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.permission-content {\n  flex: 1;\n}\n.permission-name {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n}\n.permission-description {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.permission-controller,\n.permission-action {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.success-modal {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: slideInRight 0.3s ease-out;\n}\n.success-content {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content p {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.role-form-container.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .permission-checkbox {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .permission-meta {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .group-header {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .group-actions {\n  flex-direction: row-reverse;\n}\n.role-form-container.rtl .success-modal {\n  right: auto;\n  left: 2rem;\n}\n.role-form-container.rtl .success-content {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 768px) {\n  .role-form-container {\n    padding: 1rem;\n  }\n  .page-header {\n    padding: 1.5rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .permissions-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .success-modal {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content {\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=role-form.component-TVUWK52U.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: RolesService }, { type: PermissionsService }, { type: TranslationService }, { type: LangService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleFormComponent, { className: "RoleFormComponent", filePath: "src/app/components/roles/role-form/role-form.component.ts", lineNumber: 17 });
})();

// src/app/components/roles/role-details/role-details.component.ts
function RoleDetailsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.loading_role"));
  }
}
function RoleDetailsComponent_div_20_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "circle", 36)(4, "line", 37)(5, "line", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function RoleDetailsComponent_div_20_div_33_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPermissionsModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 12);
    \u0275\u0275element(12, "line", 39)(13, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.role_details.no_permissions"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.no_permissions_description"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("roles.assign_permissions"), " ");
  }
}
function RoleDetailsComponent_div_20_div_34_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53)(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 56)(12, "button", 57);
    \u0275\u0275listener("click", function RoleDetailsComponent_div_20_div_34_div_1_div_7_Template_button_click_12_listener() {
      const permission_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openRemoveModal(permission_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 12);
    \u0275\u0275element(14, "line", 58)(15, "line", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const permission_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r4.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r4.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r4.controller);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(permission_r4.action);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r0.translate("roles.role_details.remove_permission"));
  }
}
function RoleDetailsComponent_div_20_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h4", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275template(7, RoleDetailsComponent_div_20_div_34_div_1_div_7_Template, 16, 5, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", group_r5.value.length, " ", ctx_r0.translate("roles.permissions_count"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", group_r5.value);
  }
}
function RoleDetailsComponent_div_20_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, RoleDetailsComponent_div_20_div_34_div_1_Template, 8, 4, "div", 42);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r0.getPermissionGroups()));
  }
}
function RoleDetailsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 25)(6, "div", 26)(7, "label", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 26)(12, "label", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 26)(17, "label", 27);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 28);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 26)(22, "label", 27);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28)(25, "span", 29);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "div", 30)(28, "div", 24)(29, "h3");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, RoleDetailsComponent_div_20_div_33_Template, 15, 3, "div", 31)(34, RoleDetailsComponent_div_20_div_34_Template, 3, 3, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.role_information"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.role_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.role()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r0.role()) == null ? null : tmp_5_0.description) || ctx_r0.translate("roles.no_description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.created_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(((tmp_7_0 = ctx_r0.role()) == null ? null : tmp_7_0.createdAt) || ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.permissions_count"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.permissions().length);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.role_details.assigned_permissions"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("roles.permissions_description"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.permissions().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.permissions().length > 0);
  }
}
function RoleDetailsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 63);
    \u0275\u0275element(4, "path", 64)(5, "polyline", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function RoleDetailsComponent_div_22_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 12);
    \u0275\u0275element(10, "line", 58)(11, "line", 59);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
  }
}
var RoleDetailsComponent = class _RoleDetailsComponent {
  rolesService;
  permissionsService;
  translationService;
  langService;
  route;
  router;
  role = signal(null, ...ngDevMode ? [{ debugName: "role" }] : []);
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  allPermissions = signal([], ...ngDevMode ? [{ debugName: "allPermissions" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  roleId = signal(null, ...ngDevMode ? [{ debugName: "roleId" }] : []);
  // Permissions assignment modal state
  showPermissionsModal = signal(false, ...ngDevMode ? [{ debugName: "showPermissionsModal" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Modal state
  showRemoveModal = signal(false, ...ngDevMode ? [{ debugName: "showRemoveModal" }] : []);
  permissionToRemove = signal(null, ...ngDevMode ? [{ debugName: "permissionToRemove" }] : []);
  removeModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "removeModalData" }] : []);
  constructor(rolesService, permissionsService, translationService, langService, route, router) {
    this.rolesService = rolesService;
    this.permissionsService = permissionsService;
    this.translationService = translationService;
    this.langService = langService;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
    this.route.params.subscribe((params) => {
      if (params["roleId"]) {
        this.roleId.set(params["roleId"]);
        this.loadRole();
      }
    });
  }
  loadRole() {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.loading.set(true);
    this.rolesService.getRoleById(roleId).subscribe({
      next: (role) => {
        this.role.set(role);
        this.loadRolePermissions();
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading role:", error);
        this.loading.set(false);
      }
    });
  }
  loadRolePermissions() {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.rolesService.getRolePermissions(roleId).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.permissions.set(response.data);
        } else {
          this.permissions.set([]);
        }
      },
      error: (error) => {
        console.error("Error loading role permissions:", error);
        this.permissions.set([]);
      }
    });
  }
  openPermissionsModal() {
    this.showPermissionsModal.set(true);
  }
  onPermissionsAssign(permissionIds) {
    const roleId = this.roleId();
    if (!roleId)
      return;
    this.rolesService.assignPermissionsToRole(roleId, permissionIds).subscribe({
      next: () => {
        this.successMessage.set(this.translate("roles.permissions_assigned_success"));
        this.showSuccessModal.set(true);
        this.showPermissionsModal.set(false);
        this.loadRolePermissions();
      },
      error: (error) => {
        console.error("Error assigning permissions:", error);
      }
    });
  }
  onPermissionsCancel() {
    this.showPermissionsModal.set(false);
  }
  openRemoveModal(permission) {
    this.permissionToRemove.set(permission);
    this.removeModalData.set({
      title: this.translate("roles.role_details.remove_permission"),
      message: this.translate("roles.role_details.confirm_remove_permission"),
      confirmText: this.translate("roles.role_details.remove_permission"),
      cancelText: this.translate("roles.cancel"),
      type: "delete"
    });
    this.showRemoveModal.set(true);
  }
  onRemoveConfirm() {
    const permission = this.permissionToRemove();
    const roleId = this.roleId();
    if (permission && roleId) {
      this.rolesService.removePermissionFromRole(roleId, permission.id).subscribe({
        next: () => {
          this.permissions.update((permissions) => permissions.filter((p) => p.id !== permission.id));
          this.showRemoveModal.set(false);
          this.permissionToRemove.set(null);
          this.showSuccessMessage(this.translate("roles.role_details.permission_removed"));
        },
        error: (error) => {
          console.error("Error removing permission:", error);
          this.showRemoveModal.set(false);
          this.permissionToRemove.set(null);
        }
      });
    }
  }
  onRemoveCancel() {
    this.showRemoveModal.set(false);
    this.permissionToRemove.set(null);
  }
  editRole() {
    const roleId = this.roleId();
    if (roleId) {
      this.router.navigate(["/roles", roleId, "edit"]);
    }
  }
  goBack() {
    this.router.navigate(["/roles"]);
  }
  showSuccessMessage(message) {
    this.successMessage.set(message);
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLang() === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      calendar: "gregory"
    });
  }
  getPermissionGroups() {
    const groups = {};
    this.permissions().forEach((permission) => {
      const controller = permission.controller;
      if (!groups[controller]) {
        groups[controller] = [];
      }
      groups[controller].push(permission);
    });
    return groups;
  }
  static \u0275fac = function RoleDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleDetailsComponent)(\u0275\u0275directiveInject(RolesService), \u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleDetailsComponent, selectors: [["app-role-details"]], standalone: false, decls: 24, vars: 18, consts: [[1, "role-details-container"], [1, "page-header"], [1, "header-content"], [1, "title-section"], [1, "back-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "title-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["class", "loading-container", 4, "ngIf"], ["class", "details-content", 4, "ngIf"], [3, "confirm", "cancel", "data", "isVisible", "isRTL"], ["class", "success-modal", 4, "ngIf"], [3, "assign", "cancel", "isVisible", "roleId"], [1, "loading-container"], [1, "loading-spinner"], [1, "details-content"], [1, "info-card"], [1, "card-header"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "count-badge"], [1, "permissions-card"], ["class", "empty-permissions", 4, "ngIf"], ["class", "permissions-container", 4, "ngIf"], [1, "empty-permissions"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "permissions-container"], ["class", "permission-group", 4, "ngFor", "ngForOf"], [1, "permission-group"], [1, "group-header"], [1, "group-title"], [1, "group-count"], [1, "permissions-list"], ["class", "permission-item", 4, "ngFor", "ngForOf"], [1, "permission-item"], [1, "permission-info"], [1, "permission-name"], [1, "permission-description"], [1, "permission-meta"], [1, "permission-controller"], [1, "permission-action"], [1, "permission-actions"], [1, "btn-icon", "btn-remove", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "success-modal"], [1, "success-content"], [1, "success-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-success", 3, "click"]], template: function RoleDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function RoleDetailsComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "polyline", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7)(9, "h1", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
      \u0275\u0275listener("click", function RoleDetailsComponent_Template_button_click_14_listener() {
        return ctx.editRole();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "path", 13)(17, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(19, RoleDetailsComponent_div_19_Template, 4, 1, "div", 15)(20, RoleDetailsComponent_div_20_Template, 35, 13, "div", 16);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "app-confirmation-modal", 17);
      \u0275\u0275listener("confirm", function RoleDetailsComponent_Template_app_confirmation_modal_confirm_21_listener() {
        return ctx.onRemoveConfirm();
      })("cancel", function RoleDetailsComponent_Template_app_confirmation_modal_cancel_21_listener() {
        return ctx.onRemoveCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, RoleDetailsComponent_div_22_Template, 12, 1, "div", 18);
      \u0275\u0275elementStart(23, "app-permissions-assignment-modal", 19);
      \u0275\u0275listener("assign", function RoleDetailsComponent_Template_app_permissions_assignment_modal_assign_23_listener($event) {
        return ctx.onPermissionsAssign($event);
      })("cancel", function RoleDetailsComponent_Template_app_permissions_assignment_modal_cancel_23_listener() {
        return ctx.onPermissionsCancel();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.role_form.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("roles.role_details.role_details"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("roles.role_details_description"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.edit_role"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.role());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.removeModalData())("isVisible", ctx.showRemoveModal())("isRTL", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
      \u0275\u0275advance();
      \u0275\u0275property("isVisible", ctx.showPermissionsModal())("roleId", ctx.roleId());
    }
  }, dependencies: [NgForOf, NgIf, ConfirmationModalComponent, PermissionsAssignmentModalComponent, KeyValuePipe], styles: ["\n\n.role-details-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.role-details-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n}\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 2;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.details-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.permissions-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0.5rem 0 0 0;\n  font-size: 0.875rem;\n}\n.empty-permissions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-permissions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-permissions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.permissions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.permission-group[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.group-header[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  text-transform: capitalize;\n}\n.group-count[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #6b7280;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.permissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.permission-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  transition: all 0.2s ease;\n}\n.permission-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.permission-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.permission-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n}\n.permission-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.permission-controller[_ngcontent-%COMP%], \n.permission-action[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.permission-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .permission-item[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .permission-meta[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .role-details-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .role-details-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .permissions-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .permission-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .permission-actions[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .success-modal[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content[_ngcontent-%COMP%] {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .role-details-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .permissions-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .permission-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .info-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.permissions-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permissions-container[_ngcontent-%COMP%]   .permission-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.permissions-container[_ngcontent-%COMP%]   .group-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.permissions-container[_ngcontent-%COMP%]   .group-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all[_ngcontent-%COMP%], \n.btn-deselect-all[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-deselect-all[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.permissions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.permission-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.permission-item[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  accent-color: #B68A35;\n}\n.permission-custom[_ngcontent-%COMP%] {\n  display: none;\n}\n.permission-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.permission-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n}\n.permission-description[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.permission-controller[_ngcontent-%COMP%], \n.permission-action[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .permissions-modal[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .group-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl[_ngcontent-%COMP%]   .permission-checkbox[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permission-item.currently-assigned[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  background: #fdf8f0;\n}\n.assigned-badge[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  margin-left: 0.5rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=role-details.component-M32FS47A.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-role-details", standalone: false, template: `<div class="role-details-container" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="page-header">\r
    <div class="header-content" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="title-section">\r
        <button class="back-btn" (click)="goBack()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('roles.role_form.back') }}\r
        </button>\r
        <div class="title-content">\r
          <h1 class="page-title">{{ translate('roles.role_details.role_details') }}</h1>\r
          <p class="page-subtitle">{{ translate('roles.role_details_description') }}</p>\r
        </div>\r
      </div>\r
      <div class="header-actions">\r
        <button class="btn btn-primary" (click)="editRole()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
          </svg>\r
          {{ translate('roles.edit_role') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate('roles.loading_role') }}</p>\r
  </div>\r
\r
  <!-- Role Details Content -->\r
  <div *ngIf="!loading() && role()" class="details-content">\r
    <!-- Role Information Card -->\r
    <div class="info-card">\r
      <div class="card-header">\r
        <h3>{{ translate('roles.role_information') }}</h3>\r
      </div>\r
      <div class="info-grid">\r
        <div class="info-item">\r
          <label class="info-label">{{ translate('roles.role_name') }}</label>\r
          <div class="info-value">{{ role()?.name }}</div>\r
        </div>\r
        <div class="info-item">\r
          <label class="info-label">{{ translate('roles.description') }}</label>\r
          <div class="info-value">{{ role()?.description || translate('roles.no_description') }}</div>\r
        </div>\r
        <div class="info-item">\r
          <label class="info-label">{{ translate('roles.created_date') }}</label>\r
          <div class="info-value">{{ formatDate(role()?.createdAt || '') }}</div>\r
        </div>\r
        <div class="info-item">\r
          <label class="info-label">{{ translate('roles.permissions_count') }}</label>\r
          <div class="info-value">\r
            <span class="count-badge">{{ permissions().length }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Permissions Card -->\r
    <div class="permissions-card">\r
      <div class="card-header">\r
        <h3>{{ translate('roles.role_details.assigned_permissions') }}</h3>\r
        <p>{{ translate('roles.permissions_description') }}</p>\r
      </div>\r
\r
\r
      <!-- Empty State -->\r
      <div *ngIf="permissions().length === 0" class="empty-permissions">\r
        <div class="empty-icon">\r
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
            <circle cx="12" cy="12" r="10"></circle>\r
            <line x1="12" y1="8" x2="12" y2="12"></line>\r
            <line x1="12" y1="16" x2="12.01" y2="16"></line>\r
          </svg>\r
        </div>\r
        <h4>{{ translate('roles.role_details.no_permissions') }}</h4>\r
        <p>{{ translate('roles.no_permissions_description') }}</p>\r
        <button class="btn btn-primary" (click)="openPermissionsModal()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"></line>\r
            <line x1="5" y1="12" x2="19" y2="12"></line>\r
          </svg>\r
          {{ translate('roles.assign_permissions') }}\r
        </button>\r
      </div>\r
\r
      <!-- Permissions List -->\r
      <div *ngIf="permissions().length > 0" class="permissions-container">\r
        <div *ngFor="let group of getPermissionGroups() | keyvalue" class="permission-group">\r
          <div class="group-header">\r
            <h4 class="group-title">{{ group.key }}</h4>\r
            <span class="group-count">{{ group.value.length }} {{ translate('roles.permissions_count') }}</span>\r
          </div>\r
          \r
          <div class="permissions-list">\r
            <div *ngFor="let permission of group.value" class="permission-item">\r
              <div class="permission-info">\r
                <div class="permission-name">{{ permission.displayName }}</div>\r
                <div class="permission-description">{{ permission.description }}</div>\r
                <div class="permission-meta">\r
                  <span class="permission-controller">{{ permission.controller }}</span>\r
                  <span class="permission-action">{{ permission.action }}</span>\r
                </div>\r
              </div>\r
              <div class="permission-actions">\r
                <button \r
                  class="btn-icon btn-remove" \r
                  (click)="openRemoveModal(permission)"\r
                  [attr.aria-label]="translate('roles.role_details.remove_permission')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <line x1="18" y1="6" x2="6" y2="18"></line>\r
                    <line x1="6" y1="6" x2="18" y2="18"></line>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal\r
    [data]="removeModalData()"\r
    [isVisible]="showRemoveModal()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onRemoveConfirm()"\r
    (cancel)="onRemoveCancel()"\r
  ></app-confirmation-modal>\r
\r
   <!-- Success Modal -->\r
   <div *ngIf="showSuccessModal()" class="success-modal">\r
     <div class="success-content">\r
       <div class="success-icon">\r
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
           <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
         </svg>\r
       </div>\r
       <p>{{ successMessage() }}</p>\r
       <button class="close-success" (click)="closeSuccessModal()">\r
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
           <line x1="18" y1="6" x2="6" y2="18"></line>\r
           <line x1="6" y1="6" x2="18" y2="18"></line>\r
         </svg>\r
       </button>\r
     </div>\r
   </div>\r
\r
   <!-- Permissions Assignment Modal -->\r
   <app-permissions-assignment-modal\r
     [isVisible]="showPermissionsModal()"\r
     [roleId]="roleId()"\r
     (assign)="onPermissionsAssign($event)"\r
     (cancel)="onPermissionsCancel()"\r
   ></app-permissions-assignment-modal>\r
</div>\r
\r
`, styles: ["/* src/app/components/roles/role-details/role-details.component.css */\n.role-details-container {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.role-details-container.rtl {\n  direction: rtl;\n}\n.page-header {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl {\n  flex-direction: row-reverse;\n}\n.header-content.ltr {\n  flex-direction: row;\n}\n.header-content.rtl .title-section {\n  order: 2;\n}\n.header-content.rtl .header-actions {\n  order: 1;\n}\n.header-content.ltr .title-section {\n  order: 1;\n}\n.header-content.ltr .header-actions {\n  order: 2;\n}\n.title-section {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.header-content.ltr .title-section {\n  flex-direction: row;\n}\n.header-content.rtl .title-section .back-btn {\n  order: 2;\n}\n.header-content.rtl .title-section .title-content {\n  order: 1;\n}\n.header-content.ltr .title-section .back-btn {\n  order: 1;\n}\n.header-content.ltr .title-section .title-content {\n  order: 2;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl .back-btn svg {\n  transform: scaleX(-1);\n}\n.back-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content {\n  flex: 1;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.details-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.info-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header {\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.info-label {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.info-value {\n  color: #1f2937;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.count-badge {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n}\n.permissions-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.card-header p {\n  color: #6b7280;\n  margin: 0.5rem 0 0 0;\n  font-size: 0.875rem;\n}\n.empty-permissions {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-permissions h4 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-permissions p {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.permissions-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.permission-group {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.group-header {\n  background: #f9fafb;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.group-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  text-transform: capitalize;\n}\n.group-count {\n  background: #e5e7eb;\n  color: #6b7280;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.permissions-list {\n  display: flex;\n  flex-direction: column;\n}\n.permission-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  transition: all 0.2s ease;\n}\n.permission-item:last-child {\n  border-bottom: none;\n}\n.permission-item:hover {\n  background: #f9fafb;\n}\n.permission-info {\n  flex: 1;\n}\n.permission-name {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.25rem;\n  font-size: 0.875rem;\n}\n.permission-description {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta {\n  display: flex;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n}\n.permission-controller,\n.permission-action {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.permission-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-icon:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-remove:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.btn-primary {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary:hover {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.success-modal {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: slideInRight 0.3s ease-out;\n}\n.success-content {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content p {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.role-details-container.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .header-content {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .permission-item {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .permission-meta {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .group-header {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .success-modal {\n  right: auto;\n  left: 2rem;\n}\n.role-details-container.rtl .success-content {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .role-details-container {\n    padding: 1.5rem;\n  }\n  .page-header {\n    padding: 1.5rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .info-grid {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 768px) {\n  .role-details-container {\n    padding: 1rem;\n  }\n  .page-header {\n    padding: 1rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .page-subtitle {\n    font-size: 0.875rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item {\n    padding: 1rem;\n  }\n  .permissions-card {\n    padding: 1.5rem;\n  }\n  .permission-item {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .permission-actions {\n    justify-content: flex-end;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .success-modal {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .role-details-container {\n    padding: 0.5rem;\n  }\n  .page-header {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title {\n    font-size: 1.25rem;\n  }\n  .page-subtitle {\n    font-size: 0.8rem;\n  }\n  .info-grid {\n    gap: 0.75rem;\n  }\n  .info-item {\n    padding: 0.75rem;\n  }\n  .permissions-card {\n    padding: 1rem;\n  }\n  .permission-item {\n    padding: 0.75rem;\n  }\n  .btn {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .info-label {\n    font-size: 0.8rem;\n  }\n  .info-value {\n    font-size: 0.875rem;\n  }\n}\n.permissions-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.permissions-modal {\n  background: white;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-header h3 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1B1D21;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.close-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n  border-radius: 0 0 12px 12px;\n}\n.permissions-container .permission-group {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n.permissions-container .group-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.permissions-container .group-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.permissions-container .group-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.btn-select-all,\n.btn-deselect-all {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-select-all:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.btn-deselect-all:hover {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.permissions-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.permission-item {\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  transition: all 0.2s ease;\n}\n.permission-item:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.permission-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  width: 100%;\n}\n.permission-input {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  accent-color: #B68A35;\n}\n.permission-custom {\n  display: none;\n}\n.permission-content {\n  flex: 1;\n}\n.permission-name {\n  font-weight: 500;\n  color: #1e293b;\n  margin-bottom: 0.25rem;\n}\n.permission-description {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.permission-meta {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.permission-controller,\n.permission-action {\n  background: #f1f5f9;\n  color: #475569;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.btn-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #f3f4f6;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.role-details-container.rtl .permissions-modal {\n  direction: rtl;\n}\n.role-details-container.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .group-header {\n  flex-direction: row-reverse;\n}\n.role-details-container.rtl .permission-checkbox {\n  flex-direction: row-reverse;\n}\n.permission-item.currently-assigned {\n  border-color: #B68A35;\n  background: #fdf8f0;\n}\n.assigned-badge {\n  background: #B68A35;\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  margin-left: 0.5rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=role-details.component-M32FS47A.css.map */\n"] }]
  }], () => [{ type: RolesService }, { type: PermissionsService }, { type: TranslationService }, { type: LangService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleDetailsComponent, { className: "RoleDetailsComponent", filePath: "src/app/components/roles/role-details/role-details.component.ts", lineNumber: 17 });
})();

// src/app/components/roles/permissions-management/permissions-management.component.ts
function PermissionsManagementComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function PermissionsManagementComponent_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 12);
    \u0275\u0275element(2, "line", 36)(3, "line", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.clear_search"));
  }
}
function PermissionsManagementComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.loading_permissions"));
  }
}
function PermissionsManagementComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 42);
    \u0275\u0275element(3, "circle", 43)(4, "line", 44)(5, "line", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_37_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 12);
    \u0275\u0275element(12, "line", 13)(13, "line", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.no_permissions_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.no_permissions_description"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.add_first_permission"), " ");
  }
}
function PermissionsManagementComponent_div_38_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50)(2, "div", 51)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 53)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 54)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 56)(14, "span", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 58)(17, "span", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 60)(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 61)(23, "div", 62)(24, "button", 63);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_38_tr_19_Template_button_click_24_listener() {
      const permission_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditForm(permission_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 12);
    \u0275\u0275element(26, "path", 64)(27, "path", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 66);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_38_tr_19_Template_button_click_28_listener() {
      const permission_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDeleteModal(permission_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 12);
    \u0275\u0275element(30, "polyline", 67)(31, "path", 68)(32, "line", 69)(33, "line", 70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const permission_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(permission_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", permission_r5.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r5.displayName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r5.controller);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(permission_r5.action);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", permission_r5.isActive)("inactive", !permission_r5.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", permission_r5.isActive ? ctx_r1.translate("roles.active") : ctx_r1.translate("roles.inactive"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(permission_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.permissions.edit_permission"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r1.translate("roles.permissions.delete_permission"));
  }
}
function PermissionsManagementComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 47)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, PermissionsManagementComponent_div_38_tr_19_Template, 34, 13, "tr", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.permission_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.display_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.controller"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.action"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.permissions.created_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.permissions());
  }
}
function PermissionsManagementComponent_div_39_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_39_button_22_Template_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r8 === ctx_r1.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function PermissionsManagementComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 74);
    \u0275\u0275listener("change", function PermissionsManagementComponent_div_39_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event.target.value));
    });
    \u0275\u0275elementStart(8, "option", 75);
    \u0275\u0275text(9, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 76);
    \u0275\u0275text(11, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 77);
    \u0275\u0275text(13, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 78);
    \u0275\u0275text(15, "50");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 79)(17, "button", 80);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_39_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 12);
    \u0275\u0275element(19, "polyline", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 81);
    \u0275\u0275template(22, PermissionsManagementComponent_div_39_button_22_Template, 2, 3, "button", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 80);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_39_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275text(24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 12);
    \u0275\u0275element(26, "polyline", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate7("", ctx_r1.translate("roles.showing"), " ", (ctx_r1.currentPage() - 1) * ctx_r1.pageSize() + 1, " ", ctx_r1.translate("roles.to"), " ", ctx_r1.Math.min(ctx_r1.currentPage() * ctx_r1.pageSize(), ctx_r1.totalCount()), " ", ctx_r1.translate("roles.of"), " ", ctx_r1.totalCount(), " ", ctx_r1.translate("roles.results"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("roles.show"), ":");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize());
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.previous"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage() === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.next"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("name"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("displayName"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("controller"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("action"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("description"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275element(1, "div", 116);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.saving"), " ");
  }
}
function PermissionsManagementComponent_div_40_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode() ? ctx_r1.translate("roles.save_changes") : ctx_r1.translate("roles.save"), " ");
  }
}
function PermissionsManagementComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 87)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_40_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 36)(8, "line", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 89);
    \u0275\u0275listener("ngSubmit", function PermissionsManagementComponent_div_40_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div", 90)(11, "div", 91)(12, "label", 92);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 93);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 94);
    \u0275\u0275template(17, PermissionsManagementComponent_div_40_div_17_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 91)(19, "label", 96);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 93);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 97);
    \u0275\u0275template(24, PermissionsManagementComponent_div_40_div_24_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 91)(26, "label", 98);
    \u0275\u0275text(27);
    \u0275\u0275elementStart(28, "span", 93);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(30, "input", 99);
    \u0275\u0275template(31, PermissionsManagementComponent_div_40_div_31_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 91)(33, "label", 100);
    \u0275\u0275text(34);
    \u0275\u0275elementStart(35, "span", 93);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 101);
    \u0275\u0275template(38, PermissionsManagementComponent_div_40_div_38_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 102)(40, "label", 103);
    \u0275\u0275text(41);
    \u0275\u0275elementStart(42, "span", 93);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(44, "textarea", 104);
    \u0275\u0275template(45, PermissionsManagementComponent_div_40_div_45_Template, 2, 1, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 91)(47, "label", 105);
    \u0275\u0275element(48, "input", 106)(49, "span", 107);
    \u0275\u0275elementStart(50, "span", 108);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 109)(53, "button", 110);
    \u0275\u0275template(54, PermissionsManagementComponent_div_40_div_54_Template, 3, 1, "div", 111)(55, PermissionsManagementComponent_div_40_div_55_Template, 2, 1, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 113);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_40_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeForm());
    });
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl", ctx_r1.isRTL())("ltr", !ctx_r1.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode() ? ctx_r1.translate("roles.permissions.edit_permission") : ctx_r1.translate("roles.permissions.add_new_permission"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.permissionForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.permissions.permission_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275property("placeholder", ctx_r1.translate("roles.permission_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.permissions.display_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("displayName"));
    \u0275\u0275property("placeholder", ctx_r1.translate("roles.display_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("displayName"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.permissions.controller"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("controller"));
    \u0275\u0275property("placeholder", ctx_r1.translate("roles.controller_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("controller"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.permissions.action"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("action"));
    \u0275\u0275property("placeholder", ctx_r1.translate("roles.action_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("action"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275property("placeholder", ctx_r1.translate("roles.description_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFieldInvalid("description"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.translate("roles.active"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.permissionForm.invalid || ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("roles.cancel"), " ");
  }
}
function PermissionsManagementComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "div", 119);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 120);
    \u0275\u0275element(4, "path", 121)(5, "polyline", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 123);
    \u0275\u0275listener("click", function PermissionsManagementComponent_div_42_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSuccessModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 12);
    \u0275\u0275element(10, "line", 36)(11, "line", 37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.successMessage());
  }
}
var PermissionsManagementComponent = class _PermissionsManagementComponent {
  permissionsService;
  translationService;
  langService;
  fb;
  router;
  permissions = signal([], ...ngDevMode ? [{ debugName: "permissions" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // Pagination
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  // Form state
  showForm = signal(false, ...ngDevMode ? [{ debugName: "showForm" }] : []);
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  editingPermission = signal(null, ...ngDevMode ? [{ debugName: "editingPermission" }] : []);
  permissionForm;
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  // Modal state
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  permissionToDelete = signal(null, ...ngDevMode ? [{ debugName: "permissionToDelete" }] : []);
  deleteModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  constructor(permissionsService, translationService, langService, fb, router) {
    this.permissionsService = permissionsService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.router = router;
    this.initializeForm();
  }
  ngOnInit() {
    this.loadPermissions();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  initializeForm() {
    this.permissionForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      displayName: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
      controller: ["", [Validators.required, Validators.minLength(2)]],
      action: ["", [Validators.required, Validators.minLength(2)]],
      isActive: [true]
    });
  }
  loadPermissions() {
    this.loading.set(true);
    const params = {
      page: this.currentPage(),
      pageSize: this.pageSize(),
      search: this.searchTerm() || void 0
    };
    this.permissionsService.getPermissions(params).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.permissions.set(response.data.items || []);
          this.totalCount.set(response.data.totalCount || 0);
          this.currentPage.set(response.data.page || 1);
          this.pageSize.set(response.data.pageSize || 10);
        } else {
          this.permissions.set([]);
          this.totalCount.set(0);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading permissions:", error);
        this.permissions.set([]);
        this.totalCount.set(0);
        this.loading.set(false);
      }
    });
  }
  onSearchChange(searchTerm) {
    this.searchTerm.set(searchTerm);
    this.currentPage.set(1);
    this.loadPermissions();
  }
  onSearchClick() {
    this.currentPage.set(1);
    this.loadPermissions();
  }
  clearSearch() {
    this.searchTerm.set("");
    this.currentPage.set(1);
    this.loadPermissions();
  }
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadPermissions();
  }
  onPageSizeChange(newPageSize) {
    this.pageSize.set(parseInt(newPageSize));
    this.currentPage.set(1);
    this.loadPermissions();
  }
  openAddForm() {
    this.isEditMode.set(false);
    this.editingPermission.set(null);
    this.permissionForm.reset({ isActive: true });
    this.showForm.set(true);
  }
  openEditForm(permission) {
    this.isEditMode.set(true);
    this.editingPermission.set(permission);
    this.permissionForm.patchValue({
      name: permission.name,
      displayName: permission.displayName,
      description: permission.description,
      controller: permission.controller,
      action: permission.action,
      isActive: permission.isActive
    });
    this.showForm.set(true);
  }
  closeForm() {
    this.showForm.set(false);
    this.isEditMode.set(false);
    this.editingPermission.set(null);
    this.permissionForm.reset({ isActive: true });
  }
  onSubmit() {
    if (this.permissionForm.valid) {
      this.saving.set(true);
      const formValue = this.permissionForm.value;
      const permissionData = {
        name: formValue.name,
        displayName: formValue.displayName,
        description: formValue.description,
        controller: formValue.controller,
        action: formValue.action,
        isActive: formValue.isActive
      };
      if (this.isEditMode()) {
        this.updatePermission(permissionData);
      } else {
        this.createPermission(permissionData);
      }
    } else {
      this.markFormGroupTouched();
    }
  }
  createPermission(permissionData) {
    this.permissionsService.createPermission(permissionData).subscribe({
      next: (permission) => {
        this.permissions.update((permissions) => [permission, ...permissions]);
        this.closeForm();
        this.showSuccessMessage(this.translate("roles.permissions.permission_created"));
        this.saving.set(false);
      },
      error: (error) => {
        console.error("Error creating permission:", error);
        this.saving.set(false);
      }
    });
  }
  updatePermission(permissionData) {
    const permission = this.editingPermission();
    if (!permission)
      return;
    this.permissionsService.updatePermission(permission.id, permissionData).subscribe({
      next: (updatedPermission) => {
        this.permissions.update((permissions) => permissions.map((p) => p.id === permission.id ? updatedPermission : p));
        this.closeForm();
        this.showSuccessMessage(this.translate("roles.permissions.permission_updated"));
        this.saving.set(false);
      },
      error: (error) => {
        console.error("Error updating permission:", error);
        this.saving.set(false);
      }
    });
  }
  openDeleteModal(permission) {
    this.permissionToDelete.set(permission);
    this.deleteModalData.set({
      title: this.translate("roles.permissions.delete_permission"),
      message: this.translate("roles.permissions.confirm_delete_permission"),
      confirmText: this.translate("roles.permissions.delete_permission"),
      cancelText: this.translate("roles.cancel"),
      type: "delete"
    });
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    const permission = this.permissionToDelete();
    if (permission) {
      this.permissionsService.deletePermission(permission.id).subscribe({
        next: () => {
          this.permissions.update((permissions) => permissions.filter((p) => p.id !== permission.id));
          this.showDeleteModal.set(false);
          this.permissionToDelete.set(null);
          this.showSuccessMessage(this.translate("roles.permissions.permission_deleted"));
        },
        error: (error) => {
          console.error("Error deleting permission:", error);
          this.showDeleteModal.set(false);
          this.permissionToDelete.set(null);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.permissionToDelete.set(null);
  }
  showSuccessMessage(message) {
    this.successMessage.set(message);
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  markFormGroupTouched() {
    Object.keys(this.permissionForm.controls).forEach((key) => {
      const control = this.permissionForm.get(key);
      control?.markAsTouched();
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.permissionForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate(`roles.permissions.${fieldName}_required`);
      }
      if (field.errors["minlength"]) {
        return this.translate("roles.min_length_required");
      }
    }
    return "";
  }
  isFieldInvalid(fieldName) {
    const field = this.permissionForm.get(fieldName);
    return !!(field?.invalid && field.touched);
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
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(this.currentLang() === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      calendar: "gregory"
    });
  }
  goBack() {
    this.router.navigate(["/roles"]);
  }
  static \u0275fac = function PermissionsManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionsManagementComponent)(\u0275\u0275directiveInject(PermissionsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PermissionsManagementComponent, selectors: [["app-permissions-management"]], standalone: false, decls: 43, vars: 34, consts: [[1, "permissions-container"], [1, "page-header"], [1, "header-content"], [1, "title-section"], [1, "back-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], [1, "title-content"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn", "btn-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-section"], [1, "search-container"], [1, "search-input-group"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", 1, "search-input", 3, "input", "keyup.enter", "placeholder", "value"], ["class", "clear-search-btn", 3, "click", 4, "ngIf"], [1, "btn", "btn-outline", 3, "click"], [1, "table-container"], [1, "table-header"], [1, "table-title"], [1, "count-badge"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "pagination-container", 4, "ngIf"], ["class", "form-modal-overlay", 3, "click", 4, "ngIf"], [3, "confirm", "cancel", "data", "isVisible", "isRTL"], ["class", "success-modal", 4, "ngIf"], [1, "clear-search-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "loading-container"], [1, "loading-spinner"], [1, "empty-state"], [1, "empty-icon"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "table-wrapper"], [1, "permissions-table"], ["class", "permission-row", 4, "ngFor", "ngForOf"], [1, "permission-row"], [1, "permission-name"], [1, "permission-info"], [1, "permission-id"], [1, "display-name"], [1, "controller"], [1, "controller-badge"], [1, "action"], [1, "action-badge"], [1, "status"], [1, "status-badge"], [1, "created-date"], [1, "actions"], [1, "action-buttons"], [1, "btn-icon", "btn-edit", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn-icon", "btn-delete", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "pagination-container"], [1, "pagination-info"], [1, "page-size-selector"], [3, "change", "value"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "pagination-controls"], [1, "btn-pagination", 3, "click", "disabled"], [1, "page-numbers"], ["class", "btn-page", 3, "active", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "btn-page", 3, "click"], [1, "form-modal-overlay", 3, "click"], [1, "form-modal", 3, "click"], [1, "form-modal-header"], [1, "close-btn", 3, "click"], [1, "permission-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], ["for", "name", 1, "form-label"], [1, "required"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "displayName", 1, "form-label"], ["type", "text", "id", "displayName", "formControlName", "displayName", 1, "form-input", 3, "placeholder"], ["for", "controller", 1, "form-label"], ["type", "text", "id", "controller", "formControlName", "controller", 1, "form-input", 3, "placeholder"], ["for", "action", 1, "form-label"], ["type", "text", "id", "action", "formControlName", "action", 1, "form-input", 3, "placeholder"], [1, "form-group", "full-width"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "isActive", 1, "checkbox-input"], [1, "checkbox-custom"], [1, "checkbox-text"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "btn-loading", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "error-message"], [1, "btn-loading"], [1, "loading-spinner-small"], [1, "success-modal"], [1, "success-content"], [1, "success-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-success", 3, "click"]], template: function PermissionsManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      \u0275\u0275listener("click", function PermissionsManagementComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "polyline", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7)(9, "h1", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
      \u0275\u0275listener("click", function PermissionsManagementComponent_Template_button_click_14_listener() {
        return ctx.openAddForm();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 12);
      \u0275\u0275element(16, "line", 13)(17, "line", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 16)(21, "div", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(22, "svg", 18);
      \u0275\u0275element(23, "circle", 19)(24, "path", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "input", 21);
      \u0275\u0275listener("input", function PermissionsManagementComponent_Template_input_input_25_listener($event) {
        return ctx.onSearchChange($event.target.value);
      })("keyup.enter", function PermissionsManagementComponent_Template_input_keyup_enter_25_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PermissionsManagementComponent_button_26_Template, 4, 1, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 23);
      \u0275\u0275listener("click", function PermissionsManagementComponent_Template_button_click_27_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 24)(30, "div", 25)(31, "div", 26)(32, "h3");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 27);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, PermissionsManagementComponent_div_36_Template, 4, 1, "div", 28)(37, PermissionsManagementComponent_div_37_Template, 15, 3, "div", 29)(38, PermissionsManagementComponent_div_38_Template, 20, 8, "div", 30)(39, PermissionsManagementComponent_div_39_Template, 27, 14, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, PermissionsManagementComponent_div_40_Template, 58, 37, "div", 32);
      \u0275\u0275elementStart(41, "app-confirmation-modal", 33);
      \u0275\u0275listener("confirm", function PermissionsManagementComponent_Template_app_confirmation_modal_confirm_41_listener() {
        return ctx.onDeleteConfirm();
      })("cancel", function PermissionsManagementComponent_Template_app_confirmation_modal_cancel_41_listener() {
        return ctx.onDeleteCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(42, PermissionsManagementComponent_div_42_Template, 12, 1, "div", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.role_form.back"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("roles.permissions.permissions_management"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("roles.permissions.permissions_management_description"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.permissions.add_new_permission"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl", ctx.isRTL())("ltr", !ctx.isRTL());
      \u0275\u0275advance(4);
      \u0275\u0275property("placeholder", ctx.translate("roles.search_permissions"))("value", ctx.searchTerm());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchTerm());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("roles.search"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("roles.permissions.permissions_list"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.totalCount(), " ", ctx.translate("roles.permissions_count"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.permissions().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.permissions().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.permissions().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm());
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.deleteModalData())("isVisible", ctx.showDeleteModal())("isRTL", ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ['\n\n.permissions-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.permissions-container.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  order: 2;\n}\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.header-content.ltr[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%] {\n  order: 2;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.search-section.rtl[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.search-section.ltr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  max-width: 500px;\n}\n.search-container.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input-group.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input-group.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-search-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.clear-search-btn[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.table-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.table-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.permissions-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.permissions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 1rem 2rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.permissions-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.permission-row[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.permission-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.permission-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-family: monospace;\n}\n.display-name[_ngcontent-%COMP%] {\n  color: #1f2937;\n  font-weight: 500;\n}\n.controller-badge[_ngcontent-%COMP%], \n.action-badge[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.created-date[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.form-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.form-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.form-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.form-modal-header.rtl[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.form-modal-header.ltr[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.form-modal-header.rtl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  order: 2;\n}\n.form-modal-header.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 1;\n}\n.form-modal-header.ltr[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  order: 1;\n}\n.form-modal-header.ltr[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: 2;\n}\n.form-modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: white;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  background: transparent;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(27, 29, 33, 0.1);\n  color: white;\n}\n.permission-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-input[_ngcontent-%COMP%] {\n  display: none;\n}\n.checkbox-custom[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.checkbox-input[_ngcontent-%COMP%]:checked    + .checkbox-custom[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n}\n.btn-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.875rem;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n}\n.btn-pagination[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-pagination[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.btn-page[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-page[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-page.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_slideInRight 0.3s ease-out;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success[_ngcontent-%COMP%]:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .clear-search-btn[_ngcontent-%COMP%] {\n  right: auto;\n  left: 1rem;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .permissions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.permissions-container.rtl[_ngcontent-%COMP%]   .permissions-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .pagination-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .form-modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .success-modal[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.permissions-container.rtl[_ngcontent-%COMP%]   .success-content[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .permissions-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1.5rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .permissions-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    max-width: 100%;\n  }\n  .search-input-group[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .permissions-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn-pagination[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .page-numbers[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));\n    gap: 0.25rem;\n    width: 100%;\n  }\n  .btn-page[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 40px;\n  }\n  .form-modal[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .success-modal[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content[_ngcontent-%COMP%] {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .permissions-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .pagination-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .btn-pagination[_ngcontent-%COMP%] {\n    padding: 0.625rem;\n    font-size: 0.8rem;\n  }\n  .btn-page[_ngcontent-%COMP%] {\n    min-width: 36px;\n    height: 36px;\n    font-size: 0.8rem;\n  }\n  .form-modal[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n}\n/*# sourceMappingURL=permissions-management.component-ONKILBKZ.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsManagementComponent, [{
    type: Component,
    args: [{ selector: "app-permissions-management", standalone: false, template: `<div class="permissions-container" [class.rtl]="isRTL()">\r
  <!-- Header Section -->\r
  <div class="page-header">\r
    <div class="header-content" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="title-section">\r
        <button class="back-btn" (click)="goBack()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('roles.role_form.back') }}\r
        </button>\r
        <div class="title-content">\r
          <h1 class="page-title">{{ translate('roles.permissions.permissions_management') }}</h1>\r
          <p class="page-subtitle">{{ translate('roles.permissions.permissions_management_description') }}</p>\r
        </div>\r
      </div>\r
      <div class="header-actions">\r
        <button class="btn btn-primary" (click)="openAddForm()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"></line>\r
            <line x1="5" y1="12" x2="19" y2="12"></line>\r
          </svg>\r
          {{ translate('roles.permissions.add_new_permission') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search Section -->\r
  <div class="search-section">\r
    <div class="search-container" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
      <div class="search-input-group" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
        <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="11" cy="11" r="8"></circle>\r
          <path d="m21 21-4.35-4.35"></path>\r
        </svg>\r
        <input \r
          type="text" \r
          class="search-input" \r
          [placeholder]="translate('roles.search_permissions')"\r
          [value]="searchTerm()"\r
          (input)="onSearchChange($event.target.value)"\r
          (keyup.enter)="onSearchClick()"\r
        />\r
        <button \r
          *ngIf="searchTerm()" \r
          class="clear-search-btn" \r
          (click)="clearSearch()"\r
          [attr.aria-label]="translate('roles.clear_search')"\r
        >\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      <button class="btn btn-outline" (click)="onSearchClick()">\r
        {{ translate('roles.search') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Permissions Table -->\r
  <div class="table-container">\r
    <div class="table-header">\r
      <div class="table-title">\r
        <h3>{{ translate('roles.permissions.permissions_list') }}</h3>\r
        <span class="count-badge">{{ totalCount() }} {{ translate('roles.permissions_count') }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Loading State -->\r
    <div *ngIf="loading()" class="loading-container">\r
      <div class="loading-spinner"></div>\r
      <p>{{ translate('roles.loading_permissions') }}</p>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div *ngIf="!loading() && permissions().length === 0" class="empty-state">\r
      <div class="empty-icon">\r
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
          <circle cx="12" cy="12" r="10"></circle>\r
          <line x1="12" y1="8" x2="12" y2="12"></line>\r
          <line x1="12" y1="16" x2="12.01" y2="16"></line>\r
        </svg>\r
      </div>\r
      <h3>{{ translate('roles.no_permissions_found') }}</h3>\r
      <p>{{ translate('roles.no_permissions_description') }}</p>\r
      <button class="btn btn-primary" (click)="openAddForm()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="12" y1="5" x2="12" y2="19"></line>\r
          <line x1="5" y1="12" x2="19" y2="12"></line>\r
        </svg>\r
        {{ translate('roles.add_first_permission') }}\r
      </button>\r
    </div>\r
\r
    <!-- Permissions Table -->\r
    <div *ngIf="!loading() && permissions().length > 0" class="table-wrapper">\r
      <table class="permissions-table">\r
        <thead>\r
          <tr>\r
            <th>{{ translate('roles.permissions.permission_name') }}</th>\r
            <th>{{ translate('roles.permissions.display_name') }}</th>\r
            <th>{{ translate('roles.permissions.controller') }}</th>\r
            <th>{{ translate('roles.permissions.action') }}</th>\r
            <th>{{ translate('roles.permissions.status') }}</th>\r
            <th>{{ translate('roles.permissions.created_date') }}</th>\r
            <th>{{ translate('roles.actions') }}</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let permission of permissions()" class="permission-row">\r
            <td class="permission-name">\r
              <div class="permission-info">\r
                <h4>{{ permission.name }}</h4>\r
                <span class="permission-id">ID: {{ permission.id }}</span>\r
              </div>\r
            </td>\r
            <td class="display-name">\r
              <span>{{ permission.displayName }}</span>\r
            </td>\r
            <td class="controller">\r
              <span class="controller-badge">{{ permission.controller }}</span>\r
            </td>\r
            <td class="action">\r
              <span class="action-badge">{{ permission.action }}</span>\r
            </td>\r
            <td class="status">\r
              <span class="status-badge" [class.active]="permission.isActive" [class.inactive]="!permission.isActive">\r
                {{ permission.isActive ? translate('roles.active') : translate('roles.inactive') }}\r
              </span>\r
            </td>\r
            <td class="created-date">\r
              <span>{{ formatDate(permission.createdAt) }}</span>\r
            </td>\r
            <td class="actions">\r
              <div class="action-buttons">\r
                <button \r
                  class="btn-icon btn-edit" \r
                  (click)="openEditForm(permission)"\r
                  [attr.aria-label]="translate('roles.permissions.edit_permission')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                  </svg>\r
                </button>\r
                <button \r
                  class="btn-icon btn-delete" \r
                  (click)="openDeleteModal(permission)"\r
                  [attr.aria-label]="translate('roles.permissions.delete_permission')"\r
                >\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polyline points="3,6 5,6 21,6"></polyline>\r
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v6"></path>\r
                    <line x1="10" y1="11" x2="10" y2="17"></line>\r
                    <line x1="14" y1="11" x2="14" y2="17"></line>\r
                  </svg>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <!-- Pagination -->\r
    <div *ngIf="!loading() && permissions().length > 0" class="pagination-container">\r
      <div class="pagination-info">\r
        <span>{{ translate('roles.showing') }} {{ (currentPage() - 1) * pageSize() + 1 }} {{ translate('roles.to') }} {{ Math.min(currentPage() * pageSize(), totalCount()) }} {{ translate('roles.of') }} {{ totalCount() }} {{ translate('roles.results') }}</span>\r
        <div class="page-size-selector">\r
          <label>{{ translate('roles.show') }}:</label>\r
          <select [value]="pageSize()" (change)="onPageSizeChange($any($event.target).value)">\r
            <option value="5">5</option>\r
            <option value="10">10</option>\r
            <option value="20">20</option>\r
            <option value="50">50</option>\r
          </select>\r
        </div>\r
      </div>\r
      \r
      <div class="pagination-controls">\r
        <button \r
          class="btn-pagination" \r
          [disabled]="currentPage() === 1"\r
          (click)="onPageChange(currentPage() - 1)"\r
        >\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
          {{ translate('roles.previous') }}\r
        </button>\r
        \r
        <div class="page-numbers">\r
          <button \r
            *ngFor="let page of pages" \r
            class="btn-page"\r
            [class.active]="page === currentPage()"\r
            (click)="onPageChange(page)"\r
          >\r
            {{ page }}\r
          </button>\r
        </div>\r
        \r
        <button \r
          class="btn-pagination" \r
          [disabled]="currentPage() === totalPages"\r
          (click)="onPageChange(currentPage() + 1)"\r
        >\r
          {{ translate('roles.next') }}\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Permission Form Modal -->\r
  <div *ngIf="showForm()" class="form-modal-overlay" (click)="closeForm()">\r
    <div class="form-modal" (click)="$event.stopPropagation()">\r
      <div class="form-modal-header" [class.rtl]="isRTL()" [class.ltr]="!isRTL()">\r
        <h3>{{ isEditMode() ? translate('roles.permissions.edit_permission') : translate('roles.permissions.add_new_permission') }}</h3>\r
        <button class="close-btn" (click)="closeForm()">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="18" y1="6" x2="6" y2="18"></line>\r
            <line x1="6" y1="6" x2="18" y2="18"></line>\r
          </svg>\r
        </button>\r
      </div>\r
      \r
      <form [formGroup]="permissionForm" (ngSubmit)="onSubmit()" class="permission-form">\r
        <div class="form-grid">\r
          <div class="form-group">\r
            <label for="name" class="form-label">\r
              {{ translate('roles.permissions.permission_name') }}\r
              <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="name"\r
              formControlName="name"\r
              class="form-input"\r
              [class.error]="isFieldInvalid('name')"\r
              [placeholder]="translate('roles.permission_name_placeholder')"\r
            />\r
            <div *ngIf="isFieldInvalid('name')" class="error-message">\r
              {{ getFieldError('name') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="displayName" class="form-label">\r
              {{ translate('roles.permissions.display_name') }}\r
              <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="displayName"\r
              formControlName="displayName"\r
              class="form-input"\r
              [class.error]="isFieldInvalid('displayName')"\r
              [placeholder]="translate('roles.display_name_placeholder')"\r
            />\r
            <div *ngIf="isFieldInvalid('displayName')" class="error-message">\r
              {{ getFieldError('displayName') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="controller" class="form-label">\r
              {{ translate('roles.permissions.controller') }}\r
              <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="controller"\r
              formControlName="controller"\r
              class="form-input"\r
              [class.error]="isFieldInvalid('controller')"\r
              [placeholder]="translate('roles.controller_placeholder')"\r
            />\r
            <div *ngIf="isFieldInvalid('controller')" class="error-message">\r
              {{ getFieldError('controller') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="action" class="form-label">\r
              {{ translate('roles.permissions.action') }}\r
              <span class="required">*</span>\r
            </label>\r
            <input\r
              type="text"\r
              id="action"\r
              formControlName="action"\r
              class="form-input"\r
              [class.error]="isFieldInvalid('action')"\r
              [placeholder]="translate('roles.action_placeholder')"\r
            />\r
            <div *ngIf="isFieldInvalid('action')" class="error-message">\r
              {{ getFieldError('action') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group full-width">\r
            <label for="description" class="form-label">\r
              {{ translate('roles.description') }}\r
              <span class="required">*</span>\r
            </label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              class="form-textarea"\r
              [class.error]="isFieldInvalid('description')"\r
              [placeholder]="translate('roles.description_placeholder')"\r
              rows="3"\r
            ></textarea>\r
            <div *ngIf="isFieldInvalid('description')" class="error-message">\r
              {{ getFieldError('description') }}\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label class="checkbox-label">\r
              <input\r
                type="checkbox"\r
                formControlName="isActive"\r
                class="checkbox-input"\r
              />\r
              <span class="checkbox-custom"></span>\r
              <span class="checkbox-text">{{ translate('roles.active') }}</span>\r
            </label>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
       \r
          <button\r
            type="submit"\r
            class="btn btn-primary"\r
            [disabled]="permissionForm.invalid || saving()"\r
          >\r
            <div *ngIf="saving()" class="btn-loading">\r
              <div class="loading-spinner-small"></div>\r
              {{ translate('roles.saving') }}\r
            </div>\r
            <div *ngIf="!saving()">\r
              {{ isEditMode() ? translate('roles.save_changes') : translate('roles.save') }}\r
            </div>\r
          </button>\r
          <button\r
          type="button"\r
          class="btn btn-secondary"\r
          (click)="closeForm()"\r
          [disabled]="saving()"\r
        >\r
          {{ translate('roles.cancel') }}\r
        </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal\r
    [data]="deleteModalData()"\r
    [isVisible]="showDeleteModal()"\r
    [isRTL]="isRTL()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()"\r
  ></app-confirmation-modal>\r
\r
  <!-- Success Modal -->\r
  <div *ngIf="showSuccessModal()" class="success-modal">\r
    <div class="success-content">\r
      <div class="success-icon">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
          <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
        </svg>\r
      </div>\r
      <p>{{ successMessage() }}</p>\r
      <button class="close-success" (click)="closeSuccessModal()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ['/* src/app/components/roles/permissions-management/permissions-management.component.css */\n.permissions-container {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\n.permissions-container.rtl {\n  direction: rtl;\n}\n.page-header {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n.header-content.rtl {\n  flex-direction: row-reverse;\n}\n.header-content.ltr {\n  flex-direction: row;\n}\n.header-content.rtl .title-section {\n  order: 2;\n}\n.header-content.rtl .header-actions {\n  order: 1;\n}\n.header-content.ltr .title-section {\n  order: 1;\n}\n.header-content.ltr .header-actions {\n  order: 2;\n}\n.title-section {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  flex: 1;\n}\n.header-content.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.header-content.ltr .title-section {\n  flex-direction: row;\n}\n.header-content.rtl .title-section .back-btn {\n  order: 2;\n}\n.header-content.rtl .title-section .title-content {\n  order: 1;\n}\n.header-content.ltr .title-section .back-btn {\n  order: 1;\n}\n.header-content.ltr .title-section .title-content {\n  order: 2;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  color: #374151;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.header-content.rtl .back-btn svg {\n  transform: scaleX(-1);\n}\n.back-btn:hover {\n  background: #e5e7eb;\n  color: #1f2937;\n}\n.title-content {\n  flex: 1;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.2;\n}\n.page-subtitle {\n  color: #6b7280;\n  font-size: 1rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.header-actions {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.search-section {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.search-section.rtl {\n  display: flex;\n  justify-content: flex-end;\n}\n.search-section.ltr {\n  display: flex;\n  justify-content: flex-start;\n}\n.search-container {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  max-width: 500px;\n}\n.search-container.ltr {\n  flex-direction: row;\n}\n.search-input-group {\n  position: relative;\n  flex: 1;\n  max-width: 400px;\n}\n.search-icon {\n  position: absolute;\n  left: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  pointer-events: none;\n}\n.search-input-group.rtl .search-icon {\n  left: auto;\n  right: 1rem;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 3rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.search-input-group.rtl .search-input {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-search-btn {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.clear-search-btn:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n.table-container {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.table-header {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.table-title {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.table-title h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.count-badge {\n  background: #B68A35;\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n.empty-icon {\n  color: #d1d5db;\n  margin-bottom: 1.5rem;\n}\n.empty-state h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.5rem 0;\n}\n.empty-state p {\n  color: #6b7280;\n  margin: 0 0 2rem 0;\n  max-width: 400px;\n}\n.table-wrapper {\n  overflow-x: auto;\n}\n.permissions-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.permissions-table th {\n  background: #f9fafb;\n  padding: 1rem 2rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid #e5e7eb;\n}\n.permissions-table td {\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.permission-row:hover {\n  background: #f9fafb;\n}\n.permission-name h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 0.25rem 0;\n}\n.permission-id {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  font-family: monospace;\n}\n.display-name {\n  color: #1f2937;\n  font-weight: 500;\n}\n.controller-badge,\n.action-badge {\n  background: #f3f4f6;\n  color: #6b7280;\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-family: monospace;\n}\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.active {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.inactive {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.created-date {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.actions {\n  text-align: right;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: white;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-icon:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-edit:hover {\n  background: #fef3c7;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.btn-delete:hover {\n  background: #fee2e2;\n  color: #dc2626;\n  border-color: #fecaca;\n}\n.form-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  padding: 1rem;\n}\n.form-modal {\n  background: white;\n  border-radius: 12px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.form-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  background: #D4AF5F;\n}\n.form-modal-header.rtl {\n  flex-direction: row-reverse;\n}\n.form-modal-header.ltr {\n  flex-direction: row;\n}\n.form-modal-header.rtl h3 {\n  order: 2;\n}\n.form-modal-header.rtl .close-btn {\n  order: 1;\n}\n.form-modal-header.ltr h3 {\n  order: 1;\n}\n.form-modal-header.ltr .close-btn {\n  order: 2;\n}\n.form-modal-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: white;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  background: transparent;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: rgba(27, 29, 33, 0.1);\n  color: white;\n}\n.permission-form {\n  padding: 2rem;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\n.form-label {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.required {\n  color: #dc2626;\n  margin-left: 0.25rem;\n}\n.form-input,\n.form-textarea {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-input:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-textarea.error {\n  border-color: #dc2626;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #374151;\n}\n.checkbox-input {\n  display: none;\n}\n.checkbox-custom {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 4px;\n  background: white;\n  position: relative;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.checkbox-input:checked + .checkbox-custom {\n  background: #B68A35;\n  border-color: #B68A35;\n}\n.checkbox-input:checked + .checkbox-custom::after {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #B68A35;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.btn-secondary {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-outline {\n  background: #B68A35;\n  color: white;\n}\n.btn-outline:hover:not(:disabled) {\n  background: #B68A35;\n}\n.btn-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.loading-spinner-small {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e5e7eb;\n  background: #f9fafb;\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.page-size-selector {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-selector select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  font-size: 0.875rem;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-pagination {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n}\n.btn-pagination:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-pagination:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-numbers {\n  display: flex;\n  gap: 0.25rem;\n}\n.btn-page {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #d1d5db;\n  background: white;\n  color: #374151;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-page:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.btn-page.active {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.success-modal {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  z-index: 10000;\n  animation: slideInRight 0.3s ease-out;\n}\n.success-content {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem 1.5rem;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  border-left: 4px solid #B68A35;\n  min-width: 300px;\n}\n.success-icon {\n  color: #B68A35;\n  flex-shrink: 0;\n}\n.success-content p {\n  margin: 0;\n  color: #374151;\n  font-weight: 500;\n  flex: 1;\n}\n.close-success {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n.close-success:hover {\n  color: #6b7280;\n  background: #f3f4f6;\n}\n@keyframes slideInRight {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.permissions-container.rtl .title-section {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .header-content {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .search-icon {\n  left: auto;\n  right: 1rem;\n}\n.permissions-container.rtl .clear-search-btn {\n  right: auto;\n  left: 1rem;\n}\n.permissions-container.rtl .search-input {\n  padding: 0.75rem 3rem 0.75rem 1rem;\n}\n.permissions-container.rtl .permissions-table th,\n.permissions-container.rtl .permissions-table td {\n  text-align: right;\n}\n.permissions-container.rtl .actions {\n  text-align: left;\n}\n.permissions-container.rtl .action-buttons {\n  justify-content: flex-start;\n}\n.permissions-container.rtl .pagination-container {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .pagination-controls {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .form-modal-header {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .form-actions {\n  flex-direction: row-reverse;\n}\n.permissions-container.rtl .success-modal {\n  right: auto;\n  left: 2rem;\n}\n.permissions-container.rtl .success-content {\n  border-left: none;\n  border-right: 4px solid #B68A35;\n}\n@media (max-width: 1024px) {\n  .permissions-container {\n    padding: 1.5rem;\n  }\n  .page-header {\n    padding: 1.5rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1.5rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .header-actions {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    justify-content: flex-start;\n  }\n  .search-container {\n    max-width: 100%;\n  }\n  .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info {\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .pagination-controls {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-numbers {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .permissions-container {\n    padding: 1rem;\n  }\n  .page-header {\n    padding: 1rem;\n  }\n  .header-content {\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap-reverse;\n    gap: 1rem;\n  }\n  .title-section {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .page-subtitle {\n    font-size: 0.875rem;\n  }\n  .header-actions {\n    flex-direction: column;\n    gap: 0.5rem;\n    width: 100%;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem 1rem;\n    font-size: 0.875rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .search-container {\n    flex-direction: column;\n    gap: 1rem;\n    max-width: 100%;\n  }\n  .search-input-group {\n    max-width: none;\n  }\n  .table-wrapper {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .permissions-table {\n    min-width: 600px;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .pagination-container {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-info {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .btn-pagination {\n    width: 100%;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .page-numbers {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));\n    gap: 0.25rem;\n    width: 100%;\n  }\n  .btn-page {\n    width: 100%;\n    min-width: 40px;\n  }\n  .form-modal {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .success-modal {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .success-content {\n    min-width: auto;\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .permissions-container {\n    padding: 0.5rem;\n  }\n  .page-header {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .page-title {\n    font-size: 1.25rem;\n  }\n  .page-subtitle {\n    font-size: 0.8rem;\n  }\n  .search-section {\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n  }\n  .pagination-container {\n    padding: 0.75rem;\n  }\n  .pagination-info {\n    font-size: 0.8rem;\n  }\n  .btn {\n    padding: 0.625rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .btn-pagination {\n    padding: 0.625rem;\n    font-size: 0.8rem;\n  }\n  .btn-page {\n    min-width: 36px;\n    height: 36px;\n    font-size: 0.8rem;\n  }\n  .form-modal {\n    margin: 0.5rem;\n    max-height: calc(100vh - 1rem);\n  }\n}\n/*# sourceMappingURL=permissions-management.component-ONKILBKZ.css.map */\n'] }]
  }], () => [{ type: PermissionsService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PermissionsManagementComponent, { className: "PermissionsManagementComponent", filePath: "src/app/components/roles/permissions-management/permissions-management.component.ts", lineNumber: 17 });
})();

// src/app/components/roles/roles-routing.module.ts
var routes = [
  {
    path: "",
    component: RolesListComponent
  },
  {
    path: "add",
    component: RoleFormComponent
  },
  {
    path: ":roleId/edit",
    component: RoleFormComponent
  },
  {
    path: ":roleId/details",
    component: RoleDetailsComponent
  },
  {
    path: "permissions",
    component: PermissionsManagementComponent
  }
];
var RolesRoutingModule = class _RolesRoutingModule {
  static \u0275fac = function RolesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/roles/roles.module.ts
var RolesModule = class _RolesModule {
  static \u0275fac = function RolesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RolesRoutingModule,
    ConfirmationModalComponent,
    PermissionsAssignmentModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesModule, [{
    type: NgModule,
    args: [{
      declarations: [
        RolesListComponent,
        RoleFormComponent,
        RoleDetailsComponent,
        PermissionsManagementComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RolesRoutingModule,
        ConfirmationModalComponent,
        PermissionsAssignmentModalComponent
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  RolesModule
};
//# sourceMappingURL=chunk-EQEIR6BF.js.map
