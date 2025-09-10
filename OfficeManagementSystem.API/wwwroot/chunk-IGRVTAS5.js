import {
  AuthService
} from "./chunk-ZROT3MZN.js";
import {
  environment
} from "./chunk-DECC4EAS.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NBW6TLAW.js";

// src/app/services/users.service.ts
var UsersService = class _UsersService {
  http;
  authService;
  apiUrl = `${environment.apiBaseUrl}/Users`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders().set("Authorization", `Bearer ${token}`);
  }
  getUsers(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("page", params.page.toString());
    if (params.pageSize)
      httpParams = httpParams.set("pageSize", params.pageSize.toString());
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    return this.http.get(this.apiUrl, {
      headers: this.getAuthHeaders(),
      params: httpParams
    });
  }
  getUserNames() {
    return this.http.get(`${this.apiUrl}/names`, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  getUserById(userId) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
  getUserProfile() {
    return this.http.get(`${this.apiUrl}/profile`, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to get user profile");
    }));
  }
  createUser(userData) {
    return this.http.post(this.apiUrl, userData, { headers: this.getAuthHeaders() }).pipe(map((response) => {
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error("Failed to create user");
    }));
  }
  updateUser(userId, userData) {
    return this.http.put(`${this.apiUrl}/${userId}`, userData, { headers: this.getAuthHeaders() });
  }
  updateUserProfile(userData) {
    return this.http.put(`${this.apiUrl}/profile`, userData, { headers: this.getAuthHeaders() });
  }
  deleteUser(userId) {
    return this.http.delete(`${this.apiUrl}/${userId}`, { headers: this.getAuthHeaders() });
  }
  updateUserRole(userId, role) {
    return this.http.put(`${this.apiUrl}/${userId}/role`, { role }, { headers: this.getAuthHeaders() });
  }
  updateUserStatus(userId, isActive) {
    return this.http.patch(`${this.apiUrl}/${userId}/status`, { isActive }, { headers: this.getAuthHeaders() });
  }
  static \u0275fac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

export {
  UsersService
};
//# sourceMappingURL=chunk-IGRVTAS5.js.map
