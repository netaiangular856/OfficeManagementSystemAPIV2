import {
  AuthService
} from "./chunk-L6NSXISC.js";
import {
  environment
} from "./chunk-PK4NVWGP.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-T743GANX.js";

// src/app/services/roles.service.ts
var RolesService = class _RolesService {
  http;
  authService;
  apiUrl = `${environment.apiBaseUrl}/Admin/roles`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }
  getRoles(params = {}) {
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
  getRoleById(roleId) {
    return this.http.get(`${this.apiUrl}/${roleId}`, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to get role");
    }));
  }
  createRole(roleData) {
    return this.http.post(this.apiUrl, roleData, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to create role");
    }));
  }
  updateRole(roleId, roleData) {
    return this.http.put(`${this.apiUrl}/${roleId}`, roleData, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to update role");
    }));
  }
  deleteRole(roleId) {
    return this.http.delete(`${this.apiUrl}/${roleId}`, { headers: this.getAuthHeaders() });
  }
  getRolePermissions(roleId) {
    return this.http.get(`${this.apiUrl}/${roleId}/permissions`, { headers: this.getAuthHeaders() });
  }
  assignPermissionsToRole(roleId, permissionIds) {
    const request = { permissionIds };
    return this.http.post(`${this.apiUrl}/${roleId}/permissions`, request, { headers: this.getAuthHeaders() });
  }
  removePermissionFromRole(roleId, permissionId) {
    return this.http.delete(`${this.apiUrl}/${roleId}/permissions/${permissionId}`, { headers: this.getAuthHeaders() });
  }
  static \u0275fac = function RolesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RolesService, factory: _RolesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  RolesService
};
//# sourceMappingURL=chunk-KOUSMZGT.js.map
