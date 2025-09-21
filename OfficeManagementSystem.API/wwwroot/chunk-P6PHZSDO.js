import {
  environment
} from "./chunk-ODVCO6WW.js";
import {
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-66AA6EL7.js";

// src/app/services/department.service.ts
var DepartmentService = class _DepartmentService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  // Get department names for dropdowns
  getDepartmentNames() {
    return this.http.get(`${this.baseUrl}/Departments/names`).pipe(map((response) => {
      if (response.success && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Get paged departments list
  getDepartments(page = 1, pageSize = 10, searchTerm, type, isActive, parentId) {
    let url = `${this.baseUrl}/Departments?page=${page}&pageSize=${pageSize}`;
    if (searchTerm) {
      url += `&SearchTerm=${encodeURIComponent(searchTerm)}`;
    }
    if (type !== void 0) {
      url += `&Type=${type}`;
    }
    if (isActive !== void 0) {
      url += `&IsActive=${isActive}`;
    }
    if (parentId !== void 0) {
      url += `&ParentId=${parentId}`;
    }
    return this.http.get(url);
  }
  // Get departments tree
  getDepartmentsTree() {
    return this.http.get(`${this.baseUrl}/Departments/tree`);
  }
  // Get department by ID
  getDepartment(id) {
    return this.http.get(`${this.baseUrl}/Departments/${id}`);
  }
  // Create new department
  createDepartment(department) {
    return this.http.post(`${this.baseUrl}/Departments`, department);
  }
  // Update department
  updateDepartment(id, department) {
    return this.http.put(`${this.baseUrl}/Departments/${id}`, department);
  }
  // Delete department
  deleteDepartment(id) {
    return this.http.delete(`${this.baseUrl}/Departments/${id}`);
  }
  // Move department to new parent
  moveDepartment(id, moveRequest) {
    return this.http.post(`${this.baseUrl}/Departments/${id}/move`, moveRequest);
  }
  // Change department manager
  changeManager(id, managerRequest) {
    return this.http.post(`${this.baseUrl}/Departments/${id}/manager`, managerRequest);
  }
  // Get active departments (legacy method)
  getActiveDepartments() {
    return this.getDepartments(1, 10, void 0, 1, true);
  }
  static \u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DepartmentService
};
//# sourceMappingURL=chunk-P6PHZSDO.js.map
