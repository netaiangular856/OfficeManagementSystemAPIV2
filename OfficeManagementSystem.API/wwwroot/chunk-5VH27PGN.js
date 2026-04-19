import {
  environment
} from "./chunk-6Z2ZBWA2.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-L7ZNDW2L.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/services/employees.service.ts
var EmployeesService = class _EmployeesService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Employees`;
  constructor(http) {
    this.http = http;
  }
  getEmployees(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("PageNumber", params.page.toString());
    if (params.pageSize)
      httpParams = httpParams.set("pageSize", params.pageSize.toString());
    if (params.search)
      httpParams = httpParams.set("Search", params.search);
    return this.http.get(this.apiUrl, { params: httpParams });
  }
  getEmployee(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addEmployee(employee) {
    return this.http.post(this.apiUrl, employee);
  }
  updateEmployee(id, employee) {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }
  deleteEmployee(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getEmployeeKpiTrend(date) {
    let url = `${environment.apiBaseUrl}/Dashboard/employees/kpi-trend`;
    if (date) {
      url += `?date=${date}`;
    }
    return this.http.get(url);
  }
  // Search employee names
  searchEmployeeNames(search) {
    let httpParams = new HttpParams();
    if (search) {
      httpParams = httpParams.set("search", search);
    }
    return this.http.get(`${environment.apiBaseUrl}/Users/names`, { params: httpParams }).pipe(map((response) => __spreadProps(__spreadValues({}, response), {
      data: (response.data || []).map((item) => ({
        id: item.id,
        fullName: item.name,
        jobTitle: item.departmentName || "",
        email: ""
        // API doesn't return email
      }))
    })));
  }
  static \u0275fac = function EmployeesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeesService, factory: _EmployeesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EmployeesService
};
//# sourceMappingURL=chunk-5VH27PGN.js.map
