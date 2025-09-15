import {
  environment
} from "./chunk-HY6UJAEU.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J5ZZ35GX.js";

// src/app/services/profile.service.ts
var ProfileService = class _ProfileService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getProfile() {
    return this.http.get(`${this.baseUrl}/Users/profile`);
  }
  updateProfile(profileData) {
    return this.http.put(`${this.baseUrl}/Users/profile`, profileData);
  }
  updateProfileWithFormData(formData) {
    return this.http.put(`${this.baseUrl}/Users/profile`, formData);
  }
  getUserById(userId) {
    return this.http.get(`${this.baseUrl}/Users/${userId}`);
  }
  updateUserById(userId, userData) {
    return this.http.put(`${this.baseUrl}/Users/${userId}`, userData);
  }
  updateUserRole(userId, role) {
    return this.http.put(`${this.baseUrl}/Users/${userId}/role`, { role });
  }
  updateUserStatus(userId, status) {
    return this.http.patch(`${this.baseUrl}/Users/${userId}/status`, { isActive: status });
  }
  static \u0275fac = function ProfileService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProfileService
};
//# sourceMappingURL=chunk-TNFDJQHP.js.map
