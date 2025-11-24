import {
  ConfirmationModalComponent
} from "./chunk-LL4SE2Y3.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
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
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2OJPVZW4.js";
import {
  environment
} from "./chunk-6Z2ZBWA2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Observable,
  Output,
  RouterModule,
  Subject,
  TranslationService,
  ViewChild,
  catchError,
  debounceTime,
  distinctUntilChanged,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L7ZNDW2L.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/services/partners.service.ts
var PartnersService = class _PartnersService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Partners`;
  constructor(http) {
    this.http = http;
  }
  getAllPartners(params = {}) {
    let url = this.apiUrl;
    const queryParams = new URLSearchParams();
    if (params.Search)
      queryParams.append("Search", params.Search);
    if (params.PageSize)
      queryParams.append("PageSize", params.PageSize.toString());
    if (params.PageNumber)
      queryParams.append("PageNumber", params.PageNumber.toString());
    if (params.Category !== void 0)
      queryParams.append("Category", params.Category.toString());
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    return this.http.get(url);
  }
  addPartner(partner) {
    return this.http.post(this.apiUrl, partner);
  }
  updatePartner(id, partner) {
    return this.http.put(`${this.apiUrl}/${id}`, partner);
  }
  getPartner(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getContacts(partnerId) {
    return this.http.get(`${this.apiUrl}/${partnerId}/contacts`).pipe(map((response) => response.success ? response.data : []));
  }
  addContact(partnerId, contact) {
    return this.http.post(`${this.apiUrl}/${partnerId}/contacts`, contact);
  }
  updateContact(partnerId, contactId, contact) {
    return this.http.put(`${this.apiUrl}/${partnerId}/contacts/${contactId}`, contact);
  }
  deleteContact(partnerId, contactId) {
    const url = `${this.apiUrl}/${partnerId}/contacts/${contactId}`;
    return this.http.delete(url, {
      observe: "response"
    });
  }
  deletePartner(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getPartnerById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Partner Employees API methods
  partnerEmployeesApiUrl = `${environment.apiBaseUrl}/PartnerEmployees`;
  getPartnerEmployees(params = {}) {
    let url = this.partnerEmployeesApiUrl;
    const queryParams = new URLSearchParams();
    if (params.PartnerId)
      queryParams.append("PartnerId", params.PartnerId.toString());
    if (params.Search)
      queryParams.append("Search", params.Search);
    if (params.JobTitle)
      queryParams.append("JobTitle", params.JobTitle);
    if (params.IsActive !== void 0)
      queryParams.append("IsActive", params.IsActive.toString());
    if (params.PageSize)
      queryParams.append("PageSize", params.PageSize.toString());
    if (params.PageNumber)
      queryParams.append("PageNumber", params.PageNumber.toString());
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    return this.http.get(url);
  }
  getPartnerEmployeeById(id) {
    return this.http.get(`${this.partnerEmployeesApiUrl}/${id}`);
  }
  getPartnerEmployeesByPartnerId(partnerId) {
    const params = new URLSearchParams();
    params.append("PartnerId", partnerId.toString());
    return this.http.get(`${this.partnerEmployeesApiUrl}?${params.toString()}`);
  }
  createPartnerEmployee(employee) {
    return this.http.post(this.partnerEmployeesApiUrl, employee);
  }
  updatePartnerEmployee(id, employee) {
    return this.http.put(`${this.partnerEmployeesApiUrl}/${id}`, employee);
  }
  deletePartnerEmployee(id) {
    return this.http.delete(`${this.partnerEmployeesApiUrl}/${id}`, {
      observe: "response"
    });
  }
  static \u0275fac = function PartnersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PartnersService, factory: _PartnersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/countries.service.ts
var CountriesService = class _CountriesService {
  http;
  countriesNowUrl = "https://countriesnow.space/api/v0.1/countries";
  // Fallback countries list in case API is unavailable
  fallbackCountries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Argentina", code: "AR" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Bangladesh", code: "BD" },
    { name: "Belgium", code: "BE" },
    { name: "Brazil", code: "BR" },
    { name: "Canada", code: "CA" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Denmark", code: "DK" },
    { name: "Egypt", code: "EG" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Mexico", code: "MX" },
    { name: "Netherlands", code: "NL" },
    { name: "Norway", code: "NO" },
    { name: "Poland", code: "PL" },
    { name: "Russia", code: "RU" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" }
  ];
  constructor(http) {
    this.http = http;
  }
  /**
   * Get all countries
   */
  getCountries() {
    return this.http.get(this.countriesNowUrl).pipe(map((response) => {
      if (response.error === false && response.data) {
        return response.data.map((country) => ({
          name: country.country,
          code: country.iso2
        }));
      }
      return this.fallbackCountries;
    }), catchError((error) => {
      console.error("Error fetching countries:", error);
      return of(this.fallbackCountries);
    }));
  }
  /**
   * Get cities by country name using CountriesNow API
   */
  getCitiesByCountry(countryName) {
    if (!countryName) {
      return of([]);
    }
    return this.http.post(`${this.countriesNowUrl}/cities`, { country: countryName }).pipe(map((response) => {
      if (response.error === false && response.data && Array.isArray(response.data)) {
        return response.data.map((city) => ({
          name: city,
          country: countryName
        }));
      }
      return [];
    }), catchError((error) => {
      console.error("Error fetching cities from CountriesNow:", error);
      return of([]);
    }));
  }
  /**
   * Search for cities by name and country using CountriesNow API
   */
  searchCities(countryName, searchTerm) {
    if (!searchTerm || searchTerm.length < 2 || !countryName) {
      return of([]);
    }
    return this.getCitiesByCountry(countryName).pipe(map((cities) => {
      const term = searchTerm.toLowerCase();
      const filteredCities = cities.filter((city) => city.name.toLowerCase().includes(term)).slice(0, 10);
      return filteredCities;
    }), catchError((error) => {
      console.error("Error filtering cities:", error);
      return of([]);
    }));
  }
  /**
   * Search for cities by name only (without country filter)
   * Since CountriesNow doesn't support global city search, we'll search in major countries
   */
  searchCitiesByName(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) {
      return of([]);
    }
    const majorCountries = [
      "Jordan",
      "Iraq",
      "Kuwait",
      "Qatar",
      "Bahrain",
      "Oman",
      "United Arab Emirates",
      "Egypt",
      "Saudi Arabia",
      "United States",
      "United Kingdom",
      "France",
      "Germany",
      "Canada",
      "Australia",
      "Japan",
      "Brazil",
      "India",
      "China"
    ];
    const searchObservables = majorCountries.map((country) => this.getCitiesByCountry(country).pipe(map((cities) => cities.filter((city) => city.name.toLowerCase().includes(searchTerm.toLowerCase()))), catchError(() => of([]))));
    return new Observable((observer) => {
      let allCities = [];
      let completed = 0;
      const total = searchObservables.length;
      searchObservables.forEach((obs) => {
        obs.subscribe({
          next: (cities) => {
            allCities = allCities.concat(cities);
          },
          complete: () => {
            completed++;
            if (completed === total) {
              const uniqueCities = allCities.filter((city, index, self) => index === self.findIndex((c) => c.name === city.name)).slice(0, 15);
              observer.next(uniqueCities);
              observer.complete();
            }
          },
          error: (error) => {
            completed++;
            if (completed === total) {
              observer.next(allCities.slice(0, 15));
              observer.complete();
            }
          }
        });
      });
    });
  }
  static \u0275fac = function CountriesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountriesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CountriesService, factory: _CountriesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountriesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/partners/partners-confirmation-modal/partners-confirmation-modal.component.ts
function PartnersConfirmationModalComponent_div_0__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "polyline", 16)(2, "path", 17)(3, "line", 18)(4, "line", 19);
    \u0275\u0275elementEnd();
  }
}
function PartnersConfirmationModalComponent_div_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 20)(2, "line", 21)(3, "line", 22);
    \u0275\u0275elementEnd();
  }
}
function PartnersConfirmationModalComponent_div_0__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 23)(1, "g", 24);
    \u0275\u0275element(2, "path", 25)(3, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "defs")(5, "clipPath", 27);
    \u0275\u0275element(6, "rect", 28);
    \u0275\u0275elementEnd()()();
  }
}
function PartnersConfirmationModalComponent_div_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function PartnersConfirmationModalComponent_div_0_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.cancelText || "Cancel", " ");
  }
}
function PartnersConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PartnersConfirmationModalComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function PartnersConfirmationModalComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 4);
    \u0275\u0275element(4, "line", 5)(5, "line", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275template(7, PartnersConfirmationModalComponent_div_0__svg_svg_7_Template, 5, 0, "svg", 8)(8, PartnersConfirmationModalComponent_div_0__svg_svg_8_Template, 4, 0, "svg", 8)(9, PartnersConfirmationModalComponent_div_0__svg_svg_9_Template, 7, 0, "svg", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 10);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275template(15, PartnersConfirmationModalComponent_div_0_button_15_Template, 2, 1, "button", 13);
    \u0275\u0275elementStart(16, "button", 14);
    \u0275\u0275listener("click", function PartnersConfirmationModalComponent_div_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dir", ctx_r1.isRTL ? "rtl" : "ltr");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("icon-" + ctx_r1.data.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "delete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.title || "No Title");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.message || "No Message");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.data.cancelText);
    \u0275\u0275advance();
    \u0275\u0275classMap("btn-" + ctx_r1.data.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.confirmText || "Confirm", " ");
  }
}
var PartnersConfirmationModalComponent = class _PartnersConfirmationModalComponent {
  data;
  isRTL = false;
  isVisible = false;
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  show(data) {
    this.data = data;
    this.isVisible = true;
  }
  hide() {
    this.isVisible = false;
  }
  onConfirm() {
    this.confirm.emit();
    this.hide();
  }
  onCancel() {
    this.cancel.emit();
    this.hide();
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  static \u0275fac = function PartnersConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnersConfirmationModalComponent, selectors: [["app-partners-confirmation-modal"]], inputs: { data: "data", isRTL: "isRTL", isVisible: "isVisible" }, outputs: { confirm: "confirm", cancel: "cancel" }, standalone: false, decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "dir"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1", 4, "ngIf"], [1, "modal-title"], [1, "modal-message"], [1, "modal-actions"], ["class", "btn btn-cancel", 3, "click", 4, "ngIf"], [1, "btn", "btn-confirm", 3, "click"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["clip-path", "url(#clip0_4418_7375)"], ["d", "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z", "fill", "white", 2, "fill", "#4A9D5C"], ["d", "M10.5799 15.5796C10.3799 15.5796 10.1899 15.4996 10.0499 15.3596L7.21994 12.5296C6.92994 12.2396 6.92994 11.7596 7.21994 11.4696C7.50994 11.1796 7.98994 11.1796 8.27994 11.4696L10.5799 13.7696L15.7199 8.62961C16.0099 8.33961 16.4899 8.33961 16.7799 8.62961C17.0699 8.91961 17.0699 9.39961 16.7799 9.68961L11.1099 15.3596C10.9699 15.4996 10.7799 15.5796 10.5799 15.5796Z", "fill", "white", 2, "fill", "#4A9D5C"], ["id", "clip0_4418_7375"], ["width", "48", "height", "48", "fill", "#4A9D5C"], [1, "btn", "btn-cancel", 3, "click"]], template: function PartnersConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PartnersConfirmationModalComponent_div_0_Template, 18, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon-delete[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.icon-info[_ngcontent-%COMP%] {\n  color: #4A9D5C;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center !important;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  color: white;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: #4A9D5C;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background: #3F8E50;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-message[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partners-confirmation-modal.component-I4ABJTPD.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-partners-confirmation-modal", standalone: false, template: `
    <div class="modal-overlay" *ngIf="isVisible" (click)="onOverlayClick($event)">
      <div class="modal-container" [dir]="isRTL ? 'rtl' : 'ltr'">
        <!-- Close Button -->
        <button class="close-btn" (click)="onCancel()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Icon -->
        <div class="modal-icon" [class]="'icon-' + data.type">
          <svg *ngIf="data.type === 'delete'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          <svg *ngIf="data.type === 'warning'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <svg *ngIf="data.type === 'info'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <g clip-path="url(#clip0_4418_7375)">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="white" style="fill: #4A9D5C;"/>
            <path d="M10.5799 15.5796C10.3799 15.5796 10.1899 15.4996 10.0499 15.3596L7.21994 12.5296C6.92994 12.2396 6.92994 11.7596 7.21994 11.4696C7.50994 11.1796 7.98994 11.1796 8.27994 11.4696L10.5799 13.7696L15.7199 8.62961C16.0099 8.33961 16.4899 8.33961 16.7799 8.62961C17.0699 8.91961 17.0699 9.39961 16.7799 9.68961L11.1099 15.3596C10.9699 15.4996 10.7799 15.5796 10.5799 15.5796Z" fill="white" style="fill: #4A9D5C;"/>
            </g>
            <defs>
            <clipPath id="clip0_4418_7375">
            <rect width="48" height="48" fill="#4A9D5C"/>
            </clipPath>
            </defs>
            </svg>
        </div>

        <!-- Title -->
        <h2 class="modal-title">{{ data.title || 'No Title' }}</h2>

        <!-- Message -->
        <p class="modal-message">{{ data.message || 'No Message' }}</p>

        <!-- Action Buttons -->
        <div class="modal-actions">
          <button class="btn btn-cancel" (click)="onCancel()" *ngIf="data.cancelText">
            {{ data.cancelText || 'Cancel' }}
          </button>
          <button class="btn btn-confirm" [class]="'btn-' + data.type" (click)="onConfirm()">
            {{ data.confirmText || 'Confirm' }}
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;157dcb01c0e3f845ffe25377626ba111589affaf7d3456a74b86bc1bdcd06622;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/partners/partners-confirmation-modal/partners-confirmation-modal.component.ts */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n  text-align: center;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n}\n.modal-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon-delete {\n  color: #dc2626;\n}\n.icon-warning {\n  color: #f59e0b;\n}\n.icon-info {\n  color: #4A9D5C;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message {\n  color: #6b7280;\n  text-align: center !important;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm {\n  color: white;\n}\n.btn-delete {\n  background: #dc2626;\n}\n.btn-delete:hover {\n  background: #b91c1c;\n}\n.btn-warning {\n  background: #f59e0b;\n}\n.btn-warning:hover {\n  background: #d97706;\n}\n.btn-info {\n  background: #4A9D5C;\n}\n.btn-info:hover {\n  background: #3F8E50;\n}\n.modal-container[dir=rtl] .close-btn {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl] .modal-title,\n.modal-container[dir=rtl] .modal-message {\n  text-align: center !important;\n}\n@media (max-width: 480px) {\n  .modal-container {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partners-confirmation-modal.component-I4ABJTPD.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], isRTL: [{
    type: Input
  }], isVisible: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnersConfirmationModalComponent, { className: "PartnersConfirmationModalComponent", filePath: "src/app/components/partners/partners-confirmation-modal/partners-confirmation-modal.component.ts", lineNumber: 245 });
})();

// src/app/components/partners/add-partner/add-partner.ts
var _c0 = ["confirmationModal"];
function AddPartner_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("name"), " ");
  }
}
function AddPartner_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("name"), " ");
  }
}
function AddPartner_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", cat_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate(cat_r3.value), " ");
  }
}
function AddPartner_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("category"), " ");
  }
}
function AddPartner_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("category"), " ");
  }
}
function AddPartner_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("sector"), " ");
  }
}
function AddPartner_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("sector"), " ");
  }
}
function AddPartner_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function AddPartner_button_40_Template_button_click_0_listener() {
      const country_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCountry(country_r5));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.name);
  }
}
function AddPartner_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("country"), " ");
  }
}
function AddPartner_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("country"), " ");
  }
}
function AddPartner_button_49_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", city_r7.country, " ");
  }
}
function AddPartner_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function AddPartner_button_49_Template_button_click_0_listener() {
      const city_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity(city_r7));
    });
    \u0275\u0275elementStart(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddPartner_button_49_small_4_Template, 2, 1, "small", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const city_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(city_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", city_r7.country);
  }
}
function AddPartner_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("city"), " ");
  }
}
function AddPartner_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("city"), " ");
  }
}
function AddPartner_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("note"), " ");
  }
}
function AddPartner_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("note"), " ");
  }
}
function AddPartner_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("website"), " ");
  }
}
function AddPartner_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("website"), " ");
  }
}
function AddPartner_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("address"), " ");
  }
}
function AddPartner_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("address"), " ");
  }
}
function AddPartner_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("contractStartDate"), " ");
  }
}
function AddPartner_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("contractStartDate"), " ");
  }
}
function AddPartner_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("status"), " ");
  }
}
function AddPartner_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("status"), " ");
  }
}
function AddPartner_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorName"), " ");
  }
}
function AddPartner_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorName"), " ");
  }
}
function AddPartner_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorEmail"), " ");
  }
}
function AddPartner_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorEmail"), " ");
  }
}
function AddPartner_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorPhone"), " ");
  }
}
function AddPartner_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorPhone"), " ");
  }
}
function AddPartner_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorJobTitle"), " ");
  }
}
function AddPartner_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorJobTitle"), " ");
  }
}
function AddPartner_div_134_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function AddPartner_div_134_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r9 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeContact(i_r9));
    });
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275elementEnd();
  }
}
function AddPartner_div_134_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r10.get("email"), "email"), " ");
  }
}
function AddPartner_div_134_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r10.get("phone"), "phone"), " ");
  }
}
function AddPartner_div_134_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r10.get("mobile"), "mobile"), " ");
  }
}
function AddPartner_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AddPartner_div_134_button_6_Template, 2, 0, "button", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 86)(8, "div", 87)(9, "label", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 89);
    \u0275\u0275template(12, AddPartner_div_134_div_12_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 87)(14, "label", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 90);
    \u0275\u0275template(17, AddPartner_div_134_div_17_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 87)(19, "label", 88);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 91);
    \u0275\u0275template(22, AddPartner_div_134_div_22_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    const contact_r10 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.translate("partners.contact"), " ", i_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.contacts.length > 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.email"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = contact_r10.get("email")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = contact_r10.get("email")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.email_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = contact_r10.get("email")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = contact_r10.get("email")) == null ? null : tmp_10_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.phone"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = contact_r10.get("phone")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = contact_r10.get("phone")) == null ? null : tmp_12_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.phone_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = contact_r10.get("phone")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = contact_r10.get("phone")) == null ? null : tmp_14_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.mobile"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = contact_r10.get("mobile")) == null ? null : tmp_16_0.touched) && ((tmp_16_0 = contact_r10.get("mobile")) == null ? null : tmp_16_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.mobile_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = contact_r10.get("mobile")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = contact_r10.get("mobile")) == null ? null : tmp_18_0.invalid));
  }
}
function AddPartner_div_148_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function AddPartner_div_148_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const i_r12 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeEmployee(i_r12));
    });
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275elementEnd();
  }
}
function AddPartner_div_148_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEmployeeErrorMessage(employee_r13.get("name"), "name"), " ");
  }
}
function AddPartner_div_148_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEmployeeErrorMessage(employee_r13.get("email"), "email"), " ");
  }
}
function AddPartner_div_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 81)(2, "div", 82);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AddPartner_div_148_button_6_Template, 2, 0, "button", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 86)(8, "div", 95)(9, "label", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 96);
    \u0275\u0275template(12, AddPartner_div_148_div_12_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 95)(14, "label", 88);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 89);
    \u0275\u0275template(17, AddPartner_div_148_div_17_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 95)(19, "label", 88);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 95)(23, "label", 88);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 98);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    const employee_r13 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r12);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.translate("partners.employee"), " ", i_r12 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.employees.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.employee_name"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = employee_r13.get("name")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = employee_r13.get("name")) == null ? null : tmp_8_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.employee_name"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = employee_r13.get("name")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = employee_r13.get("name")) == null ? null : tmp_10_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.email"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = employee_r13.get("email")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = employee_r13.get("email")) == null ? null : tmp_12_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.email_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_14_0 = employee_r13.get("email")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = employee_r13.get("email")) == null ? null : tmp_14_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.phone_number"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.phone_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.job_title"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.job_title"));
  }
}
function AddPartner_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275elementStart(2, "p", 101);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.no_employees_added"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.add_employees_optional"));
  }
}
function AddPartner_i_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 102);
  }
}
function AddPartner_span_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 103);
  }
}
var AddPartner = class _AddPartner {
  partnersService;
  fb;
  translationService;
  countriesService;
  confirmationModal;
  // Custom modal properties
  isOpen = false;
  addForm;
  // Country and city properties
  countries = [];
  filteredCountries = [];
  countrySearchTerm = "";
  showCountryDropdown = false;
  selectedCountry = null;
  filteredCities = [];
  citySearchTerm = "";
  showCityDropdown = false;
  selectedCity = null;
  citySearchSubject = new Subject();
  // Loading state
  isSubmitting = false;
  constructor(partnersService, fb, translationService, countriesService) {
    this.partnersService = partnersService;
    this.fb = fb;
    this.translationService = translationService;
    this.countriesService = countriesService;
  }
  ngAfterViewInit() {
    this.loadCountries();
    this.citySearchSubject.pipe(debounceTime(300), distinctUntilChanged(), switchMap((searchTerm) => {
      if (!searchTerm || searchTerm.length < 1) {
        return of([]);
      }
      if (this.selectedCountry) {
        return this.countriesService.getCitiesByCountry(this.selectedCountry.name).pipe(map((cities) => {
          const term = searchTerm.toLowerCase();
          return cities.filter((city) => city.name.toLowerCase().includes(term)).slice(0, 50);
        }));
      } else if (searchTerm.length >= 2) {
        return this.countriesService.searchCitiesByName(searchTerm);
      }
      return of([]);
    })).subscribe((cities) => {
      this.filteredCities = cities;
      this.showCityDropdown = cities.length > 0;
    });
  }
  open() {
    this.isOpen = true;
    this.addForm.reset();
  }
  close() {
    this.isOpen = false;
    this.addForm.reset();
    this.contacts.clear();
    this.addContact();
    this.employees.clear();
    this.selectedCountry = null;
    this.selectedCity = null;
    this.countrySearchTerm = "";
    this.citySearchTerm = "";
    this.filteredCountries = this.countries;
    this.filteredCities = [];
    this.showCountryDropdown = false;
    this.showCityDropdown = false;
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  categories = [
    { key: 0, value: "partners.categories.0" },
    { key: 1, value: "partners.categories.1" },
    { key: 2, value: "partners.categories.2" },
    { key: 3, value: "partners.categories.3" },
    { key: 4, value: "partners.categories.4" },
    { key: 5, value: "partners.categories.5" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  // Load countries
  loadCountries() {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.filteredCountries = countries;
    });
  }
  // Country selection methods
  onCountrySearch(event) {
    const searchTerm = event.target.value;
    this.countrySearchTerm = searchTerm;
    if (this.selectedCountry && searchTerm !== this.selectedCountry.name) {
      this.selectedCountry = null;
    }
    this.addForm.patchValue({ country: searchTerm });
    if (searchTerm && searchTerm.length >= 2) {
      this.filteredCountries = this.countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
      this.showCountryDropdown = this.filteredCountries.length > 0;
    } else if (searchTerm.length === 0) {
      this.filteredCountries = this.countries;
      this.showCountryDropdown = false;
      this.selectedCountry = null;
    } else {
      this.filteredCountries = this.countries;
      this.showCountryDropdown = true;
    }
  }
  onCountryFocus() {
    this.filteredCountries = this.countries;
    this.showCountryDropdown = true;
  }
  onCountryBlur() {
    setTimeout(() => {
      this.showCountryDropdown = false;
    }, 200);
  }
  selectCountry(country) {
    this.selectedCountry = country;
    this.countrySearchTerm = country.name;
    this.addForm.patchValue({ country: country.name });
    this.filteredCountries = [];
    this.showCountryDropdown = false;
    this.selectedCity = null;
    this.citySearchTerm = "";
    this.addForm.patchValue({ city: "" });
    this.filteredCities = [];
    this.showCityDropdown = false;
  }
  // City search methods
  onCitySearch(event) {
    const searchTerm = event.target.value;
    this.citySearchTerm = searchTerm;
    this.selectedCity = null;
    this.addForm.patchValue({ city: searchTerm });
    console.log("City search term:", searchTerm);
    console.log("Selected country:", this.selectedCountry);
    if (searchTerm && searchTerm.length >= 1) {
      this.citySearchSubject.next(searchTerm);
    } else if (searchTerm.length === 0 && this.selectedCountry) {
      this.loadCitiesForCountry();
    } else {
      this.filteredCities = [];
      this.showCityDropdown = false;
    }
  }
  onCityFocus() {
    if (!this.selectedCountry) {
      this.showCityDropdown = false;
      return;
    }
    if (this.citySearchTerm && this.citySearchTerm.length >= 2) {
      this.citySearchSubject.next(this.citySearchTerm);
    } else {
      this.loadCitiesForCountry();
    }
  }
  // Load all cities for the selected country
  loadCitiesForCountry() {
    if (!this.selectedCountry) {
      return;
    }
    this.countriesService.getCitiesByCountry(this.selectedCountry.name).subscribe((cities) => {
      this.filteredCities = cities.slice(0, 50);
      this.showCityDropdown = cities.length > 0;
    });
  }
  onCityBlur() {
    setTimeout(() => {
      this.showCityDropdown = false;
    }, 200);
  }
  selectCity(city) {
    this.selectedCity = city;
    this.citySearchTerm = city.name;
    this.addForm.patchValue({ city: city.name });
    this.filteredCities = [];
    this.showCityDropdown = false;
  }
  initializeForm() {
    this.addForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      category: ["", Validators.required],
      sector: ["", [Validators.required, Validators.minLength(2)]],
      country: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      note: [""],
      website: ["", [Validators.required, Validators.minLength(5)]],
      address: ["", [Validators.required, Validators.minLength(5)]],
      contractStartDate: ["", [Validators.required]],
      status: ["", Validators.required],
      internalCoordinatorName: [""],
      internalCoordinatorEmail: ["", [Validators.email]],
      internalCoordinatorPhone: [""],
      internalCoordinatorJobTitle: [""],
      contacts: this.fb.array([]),
      employees: this.fb.array([])
    });
    this.addContact();
  }
  // Get contacts FormArray
  get contacts() {
    return this.addForm.get("contacts");
  }
  // Get employees FormArray
  get employees() {
    return this.addForm.get("employees");
  }
  // Add a new contact
  addContact(contact) {
    const contactGroup = this.fb.group({
      email: [contact?.email || ""],
      phone: [contact?.phone || ""],
      mobile: [contact?.mobile || ""]
    });
    this.contacts.push(contactGroup);
  }
  // Remove a contact
  removeContact(index) {
    this.contacts.removeAt(index);
  }
  // Add a new employee
  addEmployeeToForm() {
    const employeeGroup = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.email]],
      phoneNumber: [""],
      jobTitle: [""]
    });
    this.employees.push(employeeGroup);
  }
  // Remove an employee
  removeEmployee(index) {
    this.employees.removeAt(index);
  }
  isFieldValid(field) {
    const control = this.addForm.get(field);
    return control?.touched && control?.invalid;
  }
  hasServerError(field) {
    const control = this.addForm.get(field);
    return control?.errors?.["serverError"];
  }
  getServerErrorMessage(field) {
    const control = this.addForm.get(field);
    return control?.errors?.["serverError"] || "";
  }
  getErrorMessage(field) {
    const control = this.addForm.get(field);
    if (!control?.errors)
      return "";
    if (control.errors["required"]) {
      return this.translate("common.field_required");
    }
    if (control.errors["minlength"]) {
      const requiredLength = control.errors["minlength"]["requiredLength"];
      if (requiredLength === 2) {
        return this.translate("partners.min_length_2");
      } else if (requiredLength === 3) {
        return this.translate("partners.min_length_3");
      } else if (requiredLength === 5) {
        return this.translate("partners.min_length_5");
      } else if (requiredLength === 10) {
        return this.translate("partners.min_length_10");
      }
      return `Minimum length is ${requiredLength} characters`;
    }
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      if (requiredLength === 15) {
        return this.translate("partners.max_length_15");
      }
      if (requiredLength === 200) {
        return this.translate("partners.max_length_300");
      }
      return `Maximum length is ${requiredLength} characters`;
    }
    if (control.errors["pastDate"]) {
      return this.translate("partners.future_date_required");
    }
    return "Invalid field";
  }
  getContactErrorMessage(control, fieldName) {
    if (!control || !control.errors)
      return "";
    const errors = control.errors;
    if (errors["required"]) {
      return this.translate("partners." + fieldName + "_required");
    }
    if (errors["email"]) {
      return this.translate("partners.invalid_email");
    }
    if (errors["minlength"]) {
      return this.translate("partners.min_length_5");
    }
    return "";
  }
  getEmployeeErrorMessage(control, fieldName) {
    if (!control || !control.errors)
      return "";
    const errors = control.errors;
    if (errors["required"]) {
      return this.translate("common.field_required");
    }
    if (errors["email"]) {
      return this.translate("partners.invalid_email");
    }
    if (errors["minlength"]) {
      return this.translate("partners.min_length_2");
    }
    return "";
  }
  onSubmit() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    const formValue = this.addForm.value;
    const partnerData = {
      name: formValue.name,
      category: parseInt(formValue.category),
      sector: formValue.sector,
      country: formValue.country,
      city: formValue.city,
      note: formValue.note,
      website: formValue.website,
      address: formValue.address,
      contractStartDate: new Date(formValue.contractStartDate).toISOString(),
      status: parseInt(formValue.status),
      internalCoordinatorName: formValue.internalCoordinatorName || void 0,
      internalCoordinatorEmail: formValue.internalCoordinatorEmail || void 0,
      internalCoordinatorPhone: formValue.internalCoordinatorPhone || void 0,
      internalCoordinatorJobTitle: formValue.internalCoordinatorJobTitle || void 0
    };
    console.log("Submitting partner data:", partnerData);
    this.partnersService.addPartner(partnerData).subscribe({
      next: (res) => {
        console.log("Partner created successfully:", res);
        const partnerId = res.data?.id || res.id;
        if (partnerId) {
          const hasContacts = formValue.contacts && formValue.contacts.length > 0;
          const hasEmployees = formValue.employees && formValue.employees.length > 0;
          if (hasContacts || hasEmployees) {
            this.createContactsAndEmployees(partnerId, formValue.contacts || [], formValue.employees || []);
          } else {
            this.isSubmitting = false;
            this.showSuccessMessage(this.translate("partners.created_success"));
            this.close();
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        } else {
          this.isSubmitting = false;
          this.showSuccessMessage(this.translate("partners.created_success"));
        }
      },
      error: (error) => {
        console.error("Error creating partner:", error);
        this.isSubmitting = false;
        this.handleApiErrors(error);
      }
    });
  }
  createContactsAndEmployees(partnerId, contacts, employees) {
    const validContacts = contacts.filter((contact) => contact.email && contact.phone && contact.mobile);
    const validEmployees = employees.filter((employee) => employee.name && employee.name.trim().length >= 2);
    const totalOperations = validContacts.length + validEmployees.length;
    if (totalOperations === 0) {
      this.isSubmitting = false;
      this.showSuccessMessage(this.translate("partners.created_success"));
      return;
    }
    let completedOperations = 0;
    let hasError = false;
    validContacts.forEach((contact, index) => {
      this.partnersService.addContact(partnerId, contact).subscribe({
        next: (res) => {
          console.log(`Contact ${index + 1} created successfully:`, res);
          completedOperations++;
          if (completedOperations === totalOperations && !hasError) {
            this.isSubmitting = false;
            this.showSuccessMessage(this.translate("partners.created_success"));
            this.close();
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        },
        error: (error) => {
          console.error(`Error creating contact ${index + 1}:`, error);
          hasError = true;
          this.isSubmitting = false;
          this.handleApiErrors(error);
        }
      });
    });
    validEmployees.forEach((employee, index) => {
      const employeeDto = {
        partnerId,
        name: employee.name,
        email: employee.email || "",
        phoneNumber: employee.phoneNumber || "",
        jobTitle: employee.jobTitle || ""
      };
      this.partnersService.createPartnerEmployee(employeeDto).subscribe({
        next: (res) => {
          console.log(`Employee ${index + 1} created successfully:`, res);
          completedOperations++;
          if (completedOperations === totalOperations && !hasError) {
            this.isSubmitting = false;
            this.showSuccessMessage(this.translate("partners.created_success"));
            this.close();
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          }
        },
        error: (error) => {
          console.error(`Error creating employee ${index + 1}:`, error);
          hasError = true;
          this.isSubmitting = false;
          this.handleApiErrors(error);
        }
      });
    });
  }
  handleApiErrors(error) {
    if (error.error?.errors) {
      const errors = error.error.errors;
      Object.keys(errors).forEach((fieldName) => {
        const control = this.addForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        }
      });
    } else {
      let errorMessage = "Unknown error occurred";
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
    }
  }
  getFormFieldName(apiFieldName) {
    const fieldMapping = {
      "Name": "name",
      "Category": "category",
      "Sector": "sector",
      "Country": "country",
      "City": "city",
      "Note": "note",
      "Website": "website",
      "Address": "address",
      "ContractStartDate": "contractStartDate",
      "Status": "status",
      "InternalCoordinatorName": "internalCoordinatorName",
      "InternalCoordinatorEmail": "internalCoordinatorEmail",
      "InternalCoordinatorPhone": "internalCoordinatorPhone",
      "InternalCoordinatorJobTitle": "internalCoordinatorJobTitle"
    };
    return fieldMapping[apiFieldName] || apiFieldName.toLowerCase();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  showSuccessMessage(message) {
    const successData = {
      title: this.translate("common.success"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(successData);
  }
  showErrorMessage(message) {
    const errorData = {
      title: this.translate("common.error"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "warning"
    };
    this.confirmationModal.show(errorData);
  }
  static \u0275fac = function AddPartner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPartner)(\u0275\u0275directiveInject(PartnersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(CountriesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPartner, selectors: [["app-add-partner"]], viewQuery: function AddPartner_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 159, vars: 118, consts: [["confirmationModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "bi", "bi-plus-circle", "me-2"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category", 1, "form-label"], ["id", "category", "formControlName", "category", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sector", 1, "form-label"], ["type", "text", "id", "sector", "formControlName", "sector", 1, "form-control", 3, "placeholder"], ["for", "country", 1, "form-label"], [1, "position-relative"], ["type", "text", "id", "country", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["for", "city", 1, "form-label"], ["type", "text", "id", "city", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "col-12", "mb-3"], ["for", "note", 1, "form-label"], ["id", "note", "rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["for", "website", 1, "form-label"], ["type", "url", "id", "website", "formControlName", "website", 1, "form-control", 3, "placeholder"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "contractStartDate", 1, "form-label"], ["type", "date", "id", "contractStartDate", "formControlName", "contractStartDate", 1, "form-control", 3, "placeholder"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "0"], [1, "row", "mt-4"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "bi", "bi-person-badge", "me-2"], [1, "card-body"], ["for", "internalCoordinatorName", 1, "form-label"], ["type", "text", "id", "internalCoordinatorName", "formControlName", "internalCoordinatorName", 1, "form-control", 3, "placeholder"], ["for", "internalCoordinatorEmail", 1, "form-label"], ["type", "email", "id", "internalCoordinatorEmail", "formControlName", "internalCoordinatorEmail", 1, "form-control", 3, "placeholder"], ["for", "internalCoordinatorPhone", 1, "form-label"], ["type", "tel", "id", "internalCoordinatorPhone", "formControlName", "internalCoordinatorPhone", 1, "form-control", 3, "placeholder"], ["for", "internalCoordinatorJobTitle", 1, "form-label"], ["type", "text", "id", "internalCoordinatorJobTitle", "formControlName", "internalCoordinatorJobTitle", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-people-fill", "me-2"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["formArrayName", "contacts"], ["class", "contact-row mb-3 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["formArrayName", "employees"], ["class", "employee-row mb-3 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "no-employees-message text-center py-4", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-check-circle me-2", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "invalid-feedback"], [3, "value"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "d-flex", "flex-column"], [1, "fw-medium"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "contact-row", "mb-3", "p-3", "border", "rounded", 3, "formGroupName"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-fill", "me-2", "text-primary"], [1, "fw-bold"], ["type", "button", "class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngIf"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-label", "small"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "mobile", 1, "form-control", 3, "placeholder"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"], [1, "employee-row", "mb-3", "p-3", "border", "rounded", 3, "formGroupName"], [1, "col-md-6"], ["type", "text", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "phoneNumber", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-control", 3, "placeholder"], [1, "no-employees-message", "text-center", "py-4"], [1, "bi", "bi-people", "text-muted", 2, "font-size", "2rem"], [1, "text-muted", "mt-2", "mb-0"], [1, "bi", "bi-check-circle", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddPartner_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function AddPartner_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function AddPartner_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 5);
      \u0275\u0275element(5, "line", 6)(6, "line", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h2", 8);
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 10)(11, "form", 11);
      \u0275\u0275listener("ngSubmit", function AddPartner_Template_form_ngSubmit_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "label", 14);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 15);
      \u0275\u0275template(17, AddPartner_div_17_Template, 2, 1, "div", 16)(18, AddPartner_div_18_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "label", 17);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 18)(23, "option", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, AddPartner_option_25_Template, 2, 2, "option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, AddPartner_div_26_Template, 2, 1, "div", 16)(27, AddPartner_div_27_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 13)(29, "label", 21);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275template(32, AddPartner_div_32_Template, 2, 1, "div", 16)(33, AddPartner_div_33_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 13)(35, "label", 23);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 24)(38, "input", 25);
      \u0275\u0275listener("input", function AddPartner_Template_input_input_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountrySearch($event));
      })("focus", function AddPartner_Template_input_focus_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryFocus());
      })("blur", function AddPartner_Template_input_blur_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 26);
      \u0275\u0275template(40, AddPartner_button_40_Template, 3, 1, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, AddPartner_div_41_Template, 2, 1, "div", 16)(42, AddPartner_div_42_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 13)(44, "label", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 24)(47, "input", 29);
      \u0275\u0275listener("input", function AddPartner_Template_input_input_47_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCitySearch($event));
      })("focus", function AddPartner_Template_input_focus_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityFocus());
      })("blur", function AddPartner_Template_input_blur_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 26);
      \u0275\u0275template(49, AddPartner_button_49_Template, 5, 2, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, AddPartner_div_50_Template, 2, 1, "div", 16)(51, AddPartner_div_51_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 30)(53, "label", 31);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "textarea", 32);
      \u0275\u0275template(56, AddPartner_div_56_Template, 2, 1, "div", 16)(57, AddPartner_div_57_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 13)(59, "label", 33);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 34);
      \u0275\u0275template(62, AddPartner_div_62_Template, 2, 1, "div", 16)(63, AddPartner_div_63_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 13)(65, "label", 35);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 36);
      \u0275\u0275template(68, AddPartner_div_68_Template, 2, 1, "div", 16)(69, AddPartner_div_69_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 13)(71, "label", 37);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 38);
      \u0275\u0275template(74, AddPartner_div_74_Template, 2, 1, "div", 16)(75, AddPartner_div_75_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 13)(77, "label", 39);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "select", 40)(80, "option", 41);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "option", 42);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "option", 43);
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(86, AddPartner_div_86_Template, 2, 1, "div", 16)(87, AddPartner_div_87_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 44)(89, "div", 45)(90, "div", 46)(91, "div", 47)(92, "h6", 48);
      \u0275\u0275element(93, "i", 49);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 50)(96, "div", 12)(97, "div", 13)(98, "label", 51);
      \u0275\u0275text(99);
      \u0275\u0275elementEnd();
      \u0275\u0275element(100, "input", 52);
      \u0275\u0275template(101, AddPartner_div_101_Template, 2, 1, "div", 16)(102, AddPartner_div_102_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 13)(104, "label", 53);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 54);
      \u0275\u0275template(107, AddPartner_div_107_Template, 2, 1, "div", 16)(108, AddPartner_div_108_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 13)(110, "label", 55);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "input", 56);
      \u0275\u0275template(113, AddPartner_div_113_Template, 2, 1, "div", 16)(114, AddPartner_div_114_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 13)(116, "label", 57);
      \u0275\u0275text(117);
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "input", 58);
      \u0275\u0275template(119, AddPartner_div_119_Template, 2, 1, "div", 16)(120, AddPartner_div_120_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(121, "div", 44)(122, "div", 45)(123, "div", 46)(124, "div", 47)(125, "div", 59)(126, "h6", 48);
      \u0275\u0275element(127, "i", 60);
      \u0275\u0275text(128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 61);
      \u0275\u0275listener("click", function AddPartner_Template_button_click_129_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addContact());
      });
      \u0275\u0275element(130, "i", 62);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 50)(133, "div", 63);
      \u0275\u0275template(134, AddPartner_div_134_Template, 23, 19, "div", 64);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(135, "div", 44)(136, "div", 45)(137, "div", 46)(138, "div", 47)(139, "div", 59)(140, "h6", 48);
      \u0275\u0275element(141, "i", 60);
      \u0275\u0275text(142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "button", 61);
      \u0275\u0275listener("click", function AddPartner_Template_button_click_143_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addEmployeeToForm());
      });
      \u0275\u0275element(144, "i", 62);
      \u0275\u0275text(145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "div", 50)(147, "div", 65);
      \u0275\u0275template(148, AddPartner_div_148_Template, 26, 18, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275template(149, AddPartner_div_149_Template, 6, 2, "div", 67);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "div", 68)(151, "button", 69);
      \u0275\u0275template(152, AddPartner_i_152_Template, 1, 0, "i", 70)(153, AddPartner_span_153_Template, 1, 0, "span", 71);
      \u0275\u0275text(154);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "button", 72);
      \u0275\u0275listener("click", function AddPartner_Template_button_click_155_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(156);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(157, "app-partners-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.add_partner"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.addForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.name"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("name") || ctx.hasServerError("name"));
      \u0275\u0275property("placeholder", ctx.translate("partners.name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.category"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("category") || ctx.hasServerError("category"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.select_category"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("category"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("category"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.sector"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("sector") || ctx.hasServerError("sector"));
      \u0275\u0275property("placeholder", ctx.translate("partners.sector_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("sector"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("sector"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.country"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("country") || ctx.hasServerError("country"));
      \u0275\u0275property("value", ctx.countrySearchTerm)("placeholder", ctx.translate("partners.country_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showCountryDropdown && ctx.filteredCountries.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredCountries);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("country"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("country"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.city"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("city") || ctx.hasServerError("city"));
      \u0275\u0275property("value", ctx.citySearchTerm)("placeholder", ctx.translate("partners.city_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showCityDropdown && ctx.filteredCities.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredCities);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("city"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("city"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.note"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("note") || ctx.hasServerError("note"));
      \u0275\u0275property("placeholder", ctx.translate("partners.note_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("note"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("note"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.website"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("website") || ctx.hasServerError("website"));
      \u0275\u0275property("placeholder", ctx.translate("partners.website_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("website"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("website"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.address"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("address") || ctx.hasServerError("address"));
      \u0275\u0275property("placeholder", ctx.translate("partners.address_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("address"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("address"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.contract_start_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("contractStartDate") || ctx.hasServerError("contractStartDate"));
      \u0275\u0275property("placeholder", ctx.translate("partners.contract_date_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("contractStartDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("contractStartDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.status"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("status") || ctx.hasServerError("status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.select_status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.active"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.inactive"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("status"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("status"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.internal_coordinator"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_name"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorName") || ctx.hasServerError("internalCoordinatorName"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_email"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorEmail") || ctx.hasServerError("internalCoordinatorEmail"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_email_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorEmail"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorEmail"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_phone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorPhone") || ctx.hasServerError("internalCoordinatorPhone"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_phone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorPhone"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorPhone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_job_title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorJobTitle") || ctx.hasServerError("internalCoordinatorJobTitle"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_job_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorJobTitle"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorJobTitle"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.contact_details"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.add_contact"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.contacts.controls);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.employees"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.add_employee"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.employees.controls);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.employees.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? ctx.translate("common.saving") : ctx.translate("common.save"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, PartnersConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #E6D7A2;\n  padding: 1.5rem 2rem;\n  gap: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.65rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  border-color: #B68A35 !important;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.section-header[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.employee-row[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef !important;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.employee-row[_ngcontent-%COMP%]:hover {\n  border-color: #dee2e6 !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.employee-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n.employee-row[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.employee-row[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.25rem;\n}\n.employee-row[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n}\n.no-employees-message[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  color: #6c757d;\n}\n.no-employees-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n}\n.card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #B2550B;\n  color: #B2550B;\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.card-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n  color: white;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n@media (max-width: 768px) {\n  .employee-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .employee-row[_ngcontent-%COMP%]   .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 0.5rem;\n  }\n  .employee-row[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n/*# sourceMappingURL=add-partner-WVCVYROE.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPartner, [{
    type: Component,
    args: [{ selector: "app-add-partner", standalone: false, template: `<!-- Add Partner Modal -->\r
<div class="modal-overlay" [class.open]="isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-container">\r
    <!-- Modal Header -->\r
    <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
      \r
      <button type="button" class="close-btn" (click)="close()" aria-label="Close">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
      <h2 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
        <i class="bi bi-plus-circle me-2"></i>\r
        {{ translate('partners.add_partner') }}\r
      </h2>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <form [formGroup]="addForm" (ngSubmit)="onSubmit()">\r
        <div class="row">\r
          <!-- Partner Name -->\r
          <div class="col-md-6 mb-3">\r
            <label for="name" class="form-label">{{ translate('partners.name') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="name" \r
              formControlName="name"\r
              [placeholder]="translate('partners.name_placeholder')"\r
              [class.is-invalid]="isFieldValid('name') || hasServerError('name')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('name')">\r
              {{ getErrorMessage('name') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('name')">\r
              {{ getServerErrorMessage('name') }}\r
            </div>\r
          </div>\r
\r
          <!-- Category -->\r
          <div class="col-md-6 mb-3">\r
            <label for="category" class="form-label">{{ translate('partners.category') }} *</label>\r
            <select \r
              class="form-select" \r
              id="category" \r
              formControlName="category"\r
              [class.is-invalid]="isFieldValid('category') || hasServerError('category')"\r
            >\r
              <option value="" disabled>{{ translate('partners.select_category') }}</option>\r
              <option *ngFor="let cat of categories" [value]="cat.key">\r
                {{ translate(cat.value) }}\r
              </option>\r
            </select>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('category')">\r
              {{ getErrorMessage('category') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('category')">\r
              {{ getServerErrorMessage('category') }}\r
            </div>\r
          </div>\r
\r
          <!-- Sector -->\r
          <div class="col-md-6 mb-3">\r
            <label for="sector" class="form-label">{{ translate('partners.sector') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="sector" \r
              formControlName="sector"\r
              [placeholder]="translate('partners.sector_placeholder')"\r
              [class.is-invalid]="isFieldValid('sector') || hasServerError('sector')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('sector')">\r
              {{ getErrorMessage('sector') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('sector')">\r
              {{ getServerErrorMessage('sector') }}\r
            </div>\r
          </div>\r
\r
          <!-- Country -->\r
          <div class="col-md-6 mb-3">\r
            <label for="country" class="form-label">{{ translate('partners.country') }} *</label>\r
            <div class="position-relative">\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="country" \r
                [value]="countrySearchTerm"\r
                [placeholder]="translate('partners.country_placeholder')"\r
                [class.is-invalid]="isFieldValid('country') || hasServerError('country')"\r
                (input)="onCountrySearch($event)"\r
                (focus)="onCountryFocus()"\r
                (blur)="onCountryBlur()"\r
                autocomplete="off"\r
              >\r
              <!-- Country dropdown -->\r
              <div class="dropdown-menu w-100 position-absolute" \r
                   [class.show]="showCountryDropdown && filteredCountries.length > 0"\r
                   style="max-height: 200px; overflow-y: auto; z-index: 1050;">\r
                <button type="button" \r
                        class="dropdown-item" \r
                        *ngFor="let country of filteredCountries"\r
                        (click)="selectCountry(country)">\r
                  <span>{{ country.name }}</span>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('country')">\r
              {{ getErrorMessage('country') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('country')">\r
              {{ getServerErrorMessage('country') }}\r
            </div>\r
          </div>\r
\r
          <!-- City -->\r
          <div class="col-md-6 mb-3">\r
            <label for="city" class="form-label">{{ translate('partners.city') }} *</label>\r
            <div class="position-relative">\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="city" \r
                [value]="citySearchTerm"\r
                [placeholder]="translate('partners.city_placeholder')"\r
                [class.is-invalid]="isFieldValid('city') || hasServerError('city')"\r
                (input)="onCitySearch($event)"\r
                (focus)="onCityFocus()"\r
                (blur)="onCityBlur()"\r
                autocomplete="off"\r
              >\r
              <!-- City dropdown -->\r
              <div class="dropdown-menu w-100 position-absolute" \r
                   [class.show]="showCityDropdown && filteredCities.length > 0"\r
                   style="max-height: 200px; overflow-y: auto; z-index: 1050;">\r
                <button type="button" \r
                        class="dropdown-item" \r
                        *ngFor="let city of filteredCities"\r
                        (click)="selectCity(city)">\r
                  <div class="d-flex flex-column">\r
                    <span class="fw-medium">{{ city.name }}</span>\r
                    <small class="text-muted" *ngIf="city.country">\r
                      {{ city.country }}\r
                    </small>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('city')">\r
              {{ getErrorMessage('city') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('city')">\r
              {{ getServerErrorMessage('city') }}\r
            </div>\r
          </div>\r
\r
          <!-- Note -->\r
          <div class="col-12 mb-3">\r
            <label for="note" class="form-label">{{ translate('partners.note') }} </label>\r
            <textarea \r
              class="form-control" \r
              id="note" \r
              rows="3"\r
              formControlName="note"\r
              [placeholder]="translate('partners.note_placeholder')"\r
              [class.is-invalid]="isFieldValid('note') || hasServerError('note')"\r
            ></textarea>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('note')">\r
              {{ getErrorMessage('note') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('note')">\r
              {{ getServerErrorMessage('note') }}\r
            </div>\r
          </div>\r
\r
          <!-- Website -->\r
          <div class="col-md-6 mb-3">\r
            <label for="website" class="form-label">{{ translate('partners.website') }} *</label>\r
            <input \r
              type="url" \r
              class="form-control" \r
              id="website" \r
              formControlName="website"\r
              [placeholder]="translate('partners.website_placeholder')"\r
              [class.is-invalid]="isFieldValid('website') || hasServerError('website')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('website')">\r
              {{ getErrorMessage('website') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('website')">\r
              {{ getServerErrorMessage('website') }}\r
            </div>\r
          </div>\r
\r
          <!-- Address -->\r
          <div class="col-md-6 mb-3">\r
            <label for="address" class="form-label">{{ translate('partners.address') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="address" \r
              formControlName="address"\r
              [placeholder]="translate('partners.address_placeholder')"\r
              [class.is-invalid]="isFieldValid('address') || hasServerError('address')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('address')">\r
              {{ getErrorMessage('address') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('address')">\r
              {{ getServerErrorMessage('address') }}\r
            </div>\r
          </div>\r
\r
          <!-- Contract Start Date -->\r
          <div class="col-md-6 mb-3">\r
            <label for="contractStartDate" class="form-label">{{ translate('partners.contract_start_date') }} *</label>\r
            <input \r
              type="date" \r
              class="form-control" \r
              id="contractStartDate" \r
              formControlName="contractStartDate"\r
              [placeholder]="translate('partners.contract_date_placeholder')"\r
              [class.is-invalid]="isFieldValid('contractStartDate') || hasServerError('contractStartDate')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('contractStartDate')">\r
              {{ getErrorMessage('contractStartDate') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('contractStartDate')">\r
              {{ getServerErrorMessage('contractStartDate') }}\r
            </div>\r
          </div>\r
\r
          <!-- Status -->\r
          <div class="col-md-6 mb-3">\r
            <label for="status" class="form-label">{{ translate('partners.status') }} *</label>\r
            <select \r
              class="form-select" \r
              id="status" \r
              formControlName="status"\r
              [class.is-invalid]="isFieldValid('status') || hasServerError('status')"\r
            >\r
              <option value="">{{ translate('partners.select_status') }}</option>\r
              <option value="1">{{ translate('partners.active') }}</option>\r
              <option value="0">{{ translate('partners.inactive') }}</option>\r
            </select>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('status')">\r
              {{ getErrorMessage('status') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('status')">\r
              {{ getServerErrorMessage('status') }}\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Internal Coordinator Section -->\r
        <div class="row mt-4">\r
          <div class="col-12">\r
            <div class="card">\r
              <div class="card-header">\r
                <h6 class="mb-0">\r
                  <i class="bi bi-person-badge me-2"></i>\r
                  {{ translate('partners.internal_coordinator') }}\r
                </h6>\r
              </div>\r
              <div class="card-body">\r
                <div class="row">\r
                  <!-- Internal Coordinator Name -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="internalCoordinatorName" class="form-label">{{ translate('partners.internal_coordinator_name') }}</label>\r
                    <input \r
                      type="text" \r
                      class="form-control" \r
                      id="internalCoordinatorName" \r
                      formControlName="internalCoordinatorName"\r
                      [placeholder]="translate('partners.internal_coordinator_name_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorName') || hasServerError('internalCoordinatorName')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorName')">\r
                      {{ getErrorMessage('internalCoordinatorName') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorName')">\r
                      {{ getServerErrorMessage('internalCoordinatorName') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Email -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="internalCoordinatorEmail" class="form-label">{{ translate('partners.internal_coordinator_email') }}</label>\r
                    <input \r
                      type="email" \r
                      class="form-control" \r
                      id="internalCoordinatorEmail" \r
                      formControlName="internalCoordinatorEmail"\r
                      [placeholder]="translate('partners.internal_coordinator_email_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorEmail') || hasServerError('internalCoordinatorEmail')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorEmail')">\r
                      {{ getErrorMessage('internalCoordinatorEmail') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorEmail')">\r
                      {{ getServerErrorMessage('internalCoordinatorEmail') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Phone -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="internalCoordinatorPhone" class="form-label">{{ translate('partners.internal_coordinator_phone') }}</label>\r
                    <input \r
                      type="tel" \r
                      class="form-control" \r
                      id="internalCoordinatorPhone" \r
                      formControlName="internalCoordinatorPhone"\r
                      [placeholder]="translate('partners.internal_coordinator_phone_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorPhone') || hasServerError('internalCoordinatorPhone')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorPhone')">\r
                      {{ getErrorMessage('internalCoordinatorPhone') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorPhone')">\r
                      {{ getServerErrorMessage('internalCoordinatorPhone') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Job Title -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="internalCoordinatorJobTitle" class="form-label">{{ translate('partners.internal_coordinator_job_title') }}</label>\r
                    <input \r
                      type="text" \r
                      class="form-control" \r
                      id="internalCoordinatorJobTitle" \r
                      formControlName="internalCoordinatorJobTitle"\r
                      [placeholder]="translate('partners.internal_coordinator_job_title_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorJobTitle') || hasServerError('internalCoordinatorJobTitle')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorJobTitle')">\r
                      {{ getErrorMessage('internalCoordinatorJobTitle') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorJobTitle')">\r
                      {{ getServerErrorMessage('internalCoordinatorJobTitle') }}\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Contact Details Section -->\r
        <div class="row mt-4">\r
          <div class="col-12">\r
            <div class="card">\r
              <div class="card-header">\r
                <div class="d-flex justify-content-between align-items-center">\r
                  <h6 class="mb-0">\r
                    <i class="bi bi-people-fill me-2"></i>\r
                    {{ translate('partners.contact_details') }}\r
                  </h6>\r
                  <button type="button" class="btn btn-outline-primary btn-sm" (click)="addContact()">\r
                    <i class="bi bi-plus-circle me-1"></i>\r
                    {{ translate('partners.add_contact') }}\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="card-body">\r
                <div formArrayName="contacts">\r
                  <div *ngFor="let contact of contacts.controls; let i = index" [formGroupName]="i" class="contact-row mb-3 p-3 border rounded">\r
                    <!-- Contact Header -->\r
                    <div class="d-flex justify-content-between align-items-center mb-2">\r
                      <div class="d-flex align-items-center">\r
                        <i class="bi bi-person-fill me-2 text-primary"></i>\r
                        <span class="fw-bold">{{ translate('partners.contact') }} {{ i + 1 }}</span>\r
                      </div>\r
                      <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeContact(i)" *ngIf="contacts.length > 1">\r
                        <i class="bi bi-trash"></i>\r
                      </button>\r
                    </div>\r
                    \r
                    <!-- Contact Form Fields -->\r
                    <div class="row g-2">\r
                      <div class="col-md-4">\r
                        <label class="form-label small">{{ translate('partners.email') }} </label>\r
                        <input \r
                          type="email" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.email_placeholder')"\r
                          formControlName="email"\r
                          [class.is-invalid]="contact.get('email')?.touched && contact.get('email')?.invalid"\r
                        >\r
                        <div class="invalid-feedback" *ngIf="contact.get('email')?.touched && contact.get('email')?.invalid">\r
                          {{ getContactErrorMessage(contact.get('email'), 'email') }}\r
                        </div>\r
                      </div>\r
                      <div class="col-md-4">\r
                        <label class="form-label small">{{ translate('partners.phone') }} </label>\r
                        <input \r
                          type="tel" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.phone_placeholder')"\r
                          formControlName="phone"\r
                          [class.is-invalid]="contact.get('phone')?.touched && contact.get('phone')?.invalid"\r
                        >\r
                        <div class="invalid-feedback" *ngIf="contact.get('phone')?.touched && contact.get('phone')?.invalid">\r
                          {{ getContactErrorMessage(contact.get('phone'), 'phone') }}\r
                        </div>\r
                      </div>\r
                      <div class="col-md-4">\r
                        <label class="form-label small">{{ translate('partners.mobile') }} </label>\r
                        <input \r
                          type="tel" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.mobile_placeholder')"\r
                          formControlName="mobile"\r
                          [class.is-invalid]="contact.get('mobile')?.touched && contact.get('mobile')?.invalid"\r
                        >\r
                        <div class="invalid-feedback" *ngIf="contact.get('mobile')?.touched && contact.get('mobile')?.invalid">\r
                          {{ getContactErrorMessage(contact.get('mobile'), 'mobile') }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Partner Employees Section -->\r
        <div class="row mt-4">\r
          <div class="col-12">\r
            <div class="card">\r
              <div class="card-header">\r
                <div class="d-flex justify-content-between align-items-center">\r
                  <h6 class="mb-0">\r
                    <i class="bi bi-people-fill me-2"></i>\r
                    {{ translate('partners.employees') }}\r
                  </h6>\r
                  <button type="button" class="btn btn-outline-primary btn-sm" (click)="addEmployeeToForm()">\r
                    <i class="bi bi-plus-circle me-1"></i>\r
                    {{ translate('partners.add_employee') }}\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="card-body">\r
                <div formArrayName="employees">\r
                  <div *ngFor="let employee of employees.controls; let i = index" [formGroupName]="i" class="employee-row mb-3 p-3 border rounded">\r
                    <!-- Employee Header -->\r
                    <div class="d-flex justify-content-between align-items-center mb-2">\r
                      <div class="d-flex align-items-center">\r
                        <i class="bi bi-person-fill me-2 text-primary"></i>\r
                        <span class="fw-bold">{{ translate('partners.employee') }} {{ i + 1 }}</span>\r
                      </div>\r
                      <button type="button" class="btn btn-outline-danger btn-sm" (click)="removeEmployee(i)" *ngIf="employees.length > 0">\r
                        <i class="bi bi-trash"></i>\r
                      </button>\r
                    </div>\r
                    \r
                    <!-- Employee Form Fields -->\r
                    <div class="row g-2">\r
                      <div class="col-md-6">\r
                        <label class="form-label small">{{ translate('partners.employee_name') }} *</label>\r
                        <input \r
                          type="text" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.employee_name')"\r
                          formControlName="name"\r
                          [class.is-invalid]="employee.get('name')?.touched && employee.get('name')?.invalid"\r
                        >\r
                        <div class="invalid-feedback" *ngIf="employee.get('name')?.touched && employee.get('name')?.invalid">\r
                          {{ getEmployeeErrorMessage(employee.get('name'), 'name') }}\r
                        </div>\r
                      </div>\r
                      <div class="col-md-6">\r
                        <label class="form-label small">{{ translate('partners.email') }}</label>\r
                        <input \r
                          type="email" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.email_placeholder')"\r
                          formControlName="email"\r
                          [class.is-invalid]="employee.get('email')?.touched && employee.get('email')?.invalid"\r
                        >\r
                        <div class="invalid-feedback" *ngIf="employee.get('email')?.touched && employee.get('email')?.invalid">\r
                          {{ getEmployeeErrorMessage(employee.get('email'), 'email') }}\r
                        </div>\r
                      </div>\r
                      <div class="col-md-6">\r
                        <label class="form-label small">{{ translate('partners.phone_number') }}</label>\r
                        <input \r
                          type="tel" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.phone_placeholder')"\r
                          formControlName="phoneNumber"\r
                        >\r
                      </div>\r
                      <div class="col-md-6">\r
                        <label class="form-label small">{{ translate('partners.job_title') }}</label>\r
                        <input \r
                          type="text" \r
                          class="form-control" \r
                          [placeholder]="translate('partners.job_title')"\r
                          formControlName="jobTitle"\r
                        >\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                \r
                <!-- No Employees Message -->\r
                <div *ngIf="employees.length === 0" class="no-employees-message text-center py-4">\r
                  <i class="bi bi-people text-muted" style="font-size: 2rem;"></i>\r
                  <p class="text-muted mt-2 mb-0">{{ translate('partners.no_employees_added') }}</p>\r
                  <small class="text-muted">{{ translate('partners.add_employees_optional') }}</small>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Modal Footer -->\r
        <div class="modal-footer">\r
          \r
          <button type="submit" class="btn btn-primary" [disabled]="isSubmitting">\r
            <i class="bi bi-check-circle me-2" *ngIf="!isSubmitting"></i>\r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="isSubmitting" role="status" aria-hidden="true"></span>\r
            {{ isSubmitting ? translate('common.saving') : translate('common.save') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()" [disabled]="isSubmitting">\r
            {{ translate('common.cancel') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-partners-confirmation-modal #confirmationModal></app-partners-confirmation-modal>\r
\r
`, styles: ["/* src/app/components/partners/add-partner/add-partner.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open .modal-container {\n  transform: scale(1) translateY(0);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #E6D7A2;\n  padding: 1.5rem 2rem;\n  gap: 1rem;\n}\n.form-label {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.65rem;\n}\n.form-control,\n.form-select {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  border-color: #B68A35 !important;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .modal-body {\n    padding: 1.5rem;\n  }\n  .modal-footer {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog {\n    margin: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-header {\n    padding: 0.5rem;\n  }\n  .modal-title {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row:last-child {\n  margin-bottom: 0;\n}\n.contact-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .form-label {\n  text-align: right;\n}\n[dir=rtl] .btn-close {\n  margin-left: 0;\n  margin-right: auto;\n}\n.card {\n  box-shadow: none !important;\n}\n.section-header {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.employee-row {\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef !important;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n}\n.employee-row:hover {\n  border-color: #dee2e6 !important;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.employee-row .form-control {\n  border: 1px solid #ced4da;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n.employee-row .form-control:focus {\n  border-color: #86b7fe;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.employee-row .form-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.25rem;\n}\n.employee-row .btn-outline-danger {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n}\n.no-employees-message {\n  background-color: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  color: #6c757d;\n}\n.no-employees-message i {\n  opacity: 0.5;\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n}\n.card-header h6 {\n  color: #495057;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.card-header .btn-outline-primary {\n  border-color: #B2550B;\n  color: #B2550B;\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n}\n.card-header .btn-outline-primary:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n  color: white;\n}\n.card-body {\n  padding: 1.25rem;\n}\n@media (max-width: 768px) {\n  .employee-row .row .col-md-6 {\n    margin-bottom: 1rem;\n  }\n  .employee-row .d-flex.justify-content-between {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 0.5rem;\n  }\n  .employee-row .btn-outline-danger {\n    align-self: flex-end;\n  }\n}\n/*# sourceMappingURL=add-partner-WVCVYROE.css.map */\n"] }]
  }], () => [{ type: PartnersService }, { type: FormBuilder }, { type: TranslationService }, { type: CountriesService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPartner, { className: "AddPartner", filePath: "src/app/components/partners/add-partner/add-partner.ts", lineNumber: 18 });
})();

// src/app/components/partners/partner-employees-modal/partner-employees-modal.component.ts
var _c02 = ["confirmationModal"];
function PartnerEmployeesModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementEnd();
  }
}
function PartnerEmployeesModalComponent_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.cancel"), " ");
  }
}
function PartnerEmployeesModalComponent_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("validation.required"), " ");
  }
}
function PartnerEmployeesModalComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("validation.invalid_email"), " ");
  }
}
function PartnerEmployeesModalComponent_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function PartnerEmployeesModalComponent_div_1_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 47);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.loading"));
  }
}
function PartnerEmployeesModalComponent_div_1_div_51_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 52)(11, "button", 53);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_div_51_tr_15_Template_button_click_11_listener() {
      const employee_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editEmployee(employee_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 54);
    \u0275\u0275element(13, "path", 55)(14, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "button", 57);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_div_51_tr_15_Template_button_click_15_listener() {
      const employee_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteEmployee(employee_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 54);
    \u0275\u0275element(17, "polyline", 58)(18, "path", 59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const employee_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r7.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r7.phoneNumber || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r7.jobTitle || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r2.translate("common.edit")))("disabled", ctx_r2.isEditMode && ctx_r2.currentEmployeeId === employee_r7.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r2.translate("common.delete")));
  }
}
function PartnerEmployeesModalComponent_div_1_div_51_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.no_employees_found"), " ");
  }
}
function PartnerEmployeesModalComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(15, PartnerEmployeesModalComponent_div_1_div_51_tr_15_Template, 19, 9, "tr", 50)(16, PartnerEmployeesModalComponent_div_1_div_51_tr_16_Template, 3, 1, "tr", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.employee_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.phone_number"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.job_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.employees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.employees.length === 0);
  }
}
function PartnerEmployeesModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "div", 8)(4, "h5", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "h6", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PartnerEmployeesModalComponent_div_1_button_12_Template, 2, 1, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "form", 16);
    \u0275\u0275listener("ngSubmit", function PartnerEmployeesModalComponent_div_1_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275elementStart(14, "div", 17)(15, "div", 18)(16, "label", 19);
    \u0275\u0275text(17);
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "input", 21);
    \u0275\u0275template(21, PartnerEmployeesModalComponent_div_1_div_21_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 18)(23, "label", 23);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 24);
    \u0275\u0275template(26, PartnerEmployeesModalComponent_div_1_div_26_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18)(28, "label", 25);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18)(32, "label", 27);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 29)(36, "button", 30);
    \u0275\u0275template(37, PartnerEmployeesModalComponent_div_1_span_37_Template, 1, 0, "span", 31);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 32);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetForm());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 33)(42, "div", 13)(43, "h6", 14);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 34);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addEmployee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 35);
    \u0275\u0275element(47, "line", 36)(48, "line", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, PartnerEmployeesModalComponent_div_1_div_50_Template, 4, 1, "div", 38)(51, PartnerEmployeesModalComponent_div_1_div_51_Template, 17, 7, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "div", 40)(53, "button", 41);
    \u0275\u0275listener("click", function PartnerEmployeesModalComponent_div_1_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("dir", ctx_r2.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.translate("partners.manage_employees"), " - ", ctx_r2.partnerName);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.isEditMode ? ctx_r2.translate("partners.edit_employee") : ctx_r2.translate("partners.add_employee"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.employeeForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.employee_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r2.employeeForm.get("name")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r2.employeeForm.get("name")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r2.employeeForm.get("name")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r2.employeeForm.get("name")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.email"));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_11_0 = ctx_r2.employeeForm.get("email")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r2.employeeForm.get("email")) == null ? null : tmp_11_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_12_0 = ctx_r2.employeeForm.get("email")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r2.employeeForm.get("email")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.phone_number"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.job_title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.isSubmitting || ctx_r2.employeeForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isEditMode ? ctx_r2.translate("common.update") : ctx_r2.translate("common.add"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.reset"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.employees_list"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.add_employee"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.close"), " ");
  }
}
var PartnerEmployeesModalComponent = class _PartnerEmployeesModalComponent {
  partnersService;
  translationService;
  fb;
  partnerId;
  partnerName;
  close = new EventEmitter();
  confirmationModal;
  // Modal properties
  isOpen = false;
  isEditMode = false;
  currentEmployeeId = null;
  // Form
  employeeForm;
  // Data
  employees = [];
  isLoading = false;
  isSubmitting = false;
  employeeToDelete = null;
  destroy$ = new Subject();
  constructor(partnersService, translationService, fb) {
    this.partnersService = partnersService;
    this.translationService = translationService;
    this.fb = fb;
  }
  ngOnInit() {
    this.initializeForm();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.employeeForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.email]],
      phoneNumber: [""],
      jobTitle: [""]
    });
  }
  openModal() {
    this.isOpen = true;
    this.loadEmployees();
  }
  closeModal() {
    this.isOpen = false;
    this.resetForm();
    this.employees = [];
    this.close.emit();
  }
  resetForm() {
    this.employeeForm.reset();
    this.isEditMode = false;
    this.currentEmployeeId = null;
  }
  loadEmployees() {
    if (!this.partnerId)
      return;
    this.isLoading = true;
    console.log("Loading employees for partner ID:", this.partnerId);
    this.partnersService.getPartnerEmployeesByPartnerId(this.partnerId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Employees API response:", response);
        if (response && response.success) {
          if (Array.isArray(response.data)) {
            this.employees = response.data;
          } else if (response.data && "items" in response.data) {
            this.employees = response.data.items;
          } else {
            this.employees = [];
          }
        } else {
          this.employees = [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.employees = [];
        this.isLoading = false;
      }
    });
  }
  addEmployee() {
    this.resetForm();
    this.isEditMode = false;
  }
  editEmployee(employee) {
    this.isEditMode = true;
    this.currentEmployeeId = employee.id;
    this.employeeForm.patchValue({
      name: employee.name,
      email: employee.email || "",
      phoneNumber: employee.phoneNumber || "",
      jobTitle: employee.jobTitle || ""
    });
  }
  deleteEmployee(employee) {
    const confirmData = {
      title: this.translate("common.confirm"),
      message: this.translate("partners.confirm_delete_employee"),
      confirmText: this.translate("common.delete"),
      cancelText: this.translate("common.cancel"),
      type: "delete"
    };
    this.confirmationModal.show(confirmData);
    this.employeeToDelete = employee;
  }
  confirmDelete() {
    if (!this.employeeToDelete)
      return;
    this.partnersService.deletePartnerEmployee(this.employeeToDelete.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Delete employee response:", response);
        this.loadEmployees();
        this.showSuccessMessage(this.translate("partners.employee_deleted_successfully") || "Employee deleted successfully");
        this.employeeToDelete = null;
      },
      error: (error) => {
        console.error("Error deleting employee:", error);
        this.showErrorMessage(this.translate("partners.employee_delete_error") || "Failed to delete employee");
        this.employeeToDelete = null;
      }
    });
  }
  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      console.log("Form is invalid:", this.employeeForm.errors);
      return;
    }
    this.isSubmitting = true;
    const formValue = this.employeeForm.value;
    console.log("Form submission - isEditMode:", this.isEditMode, "formValue:", formValue);
    if (this.isEditMode && this.currentEmployeeId) {
      const updateDto = {
        name: formValue.name,
        email: formValue.email,
        phoneNumber: formValue.phoneNumber,
        jobTitle: formValue.jobTitle
      };
      console.log("Updating employee with data:", updateDto);
      this.partnersService.updatePartnerEmployee(this.currentEmployeeId, updateDto).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("Update employee response:", response);
          if (response && response.success) {
            this.loadEmployees();
            this.resetForm();
            this.showSuccessMessage(this.translate("partners.employee_updated_successfully") || "Employee updated successfully");
          } else {
            this.showErrorMessage(this.translate("partners.employee_update_error") || "Failed to update employee");
          }
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error("Error updating employee:", error);
          this.isSubmitting = false;
        }
      });
    } else {
      const createDto = {
        partnerId: this.partnerId,
        name: formValue.name,
        email: formValue.email,
        phoneNumber: formValue.phoneNumber,
        jobTitle: formValue.jobTitle
      };
      console.log("Creating employee with data:", createDto);
      this.partnersService.createPartnerEmployee(createDto).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          console.log("Create employee response:", response);
          if (response && response.success) {
            this.loadEmployees();
            this.resetForm();
            this.showSuccessMessage(this.translate("partners.employee_added_successfully") || "Employee added successfully");
          } else {
            this.showErrorMessage(this.translate("partners.employee_add_error") || "Failed to add employee");
          }
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error("Error creating employee:", error);
          this.isSubmitting = false;
        }
      });
    }
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  showSuccessMessage(message) {
    const successData = {
      title: this.translate("common.success"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(successData);
  }
  showErrorMessage(message) {
    const errorData = {
      title: this.translate("common.error"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "warning"
    };
    this.confirmationModal.show(errorData);
  }
  static \u0275fac = function PartnerEmployeesModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnerEmployeesModalComponent)(\u0275\u0275directiveInject(PartnersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerEmployeesModalComponent, selectors: [["app-partner-employees-modal"]], viewQuery: function PartnerEmployeesModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, inputs: { partnerId: "partnerId", partnerName: "partnerName" }, outputs: { close: "close" }, standalone: false, decls: 4, vars: 3, consts: [["confirmationModal", ""], ["class", "modal-backdrop fade show", 3, "click", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "role", "dialog", 4, "ngIf"], [3, "confirm", "cancel", "isRTL"], [1, "modal-backdrop", "fade", "show", 3, "click"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", "d-block"], ["role", "document", 1, "modal-dialog", "modal-lg", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "employee-form-section", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "mb-0"], ["type", "button", "class", "btn btn-sm btn-secondary", 3, "click", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "name", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "text", "id", "phoneNumber", "formControlName", "phoneNumber", 1, "form-control"], ["for", "jobTitle", 1, "form-label"], ["type", "text", "id", "jobTitle", "formControlName", "jobTitle", 1, "form-control"], [1, "d-flex", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "employees-list-section"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "text-center py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "invalid-feedback"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn-group", "btn-group-sm"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled", "title"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "title"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["colspan", "5", 1, "text-center", "text-muted", "py-4"]], template: function PartnerEmployeesModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, PartnerEmployeesModalComponent_div_0_Template, 1, 0, "div", 1)(1, PartnerEmployeesModalComponent_div_1_Template, 55, 26, "div", 2);
      \u0275\u0275elementStart(2, "app-confirmation-modal", 3, 0);
      \u0275\u0275listener("confirm", function PartnerEmployeesModalComponent_Template_app_confirmation_modal_confirm_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmDelete());
      })("cancel", function PartnerEmployeesModalComponent_Template_app_confirmation_modal_cancel_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.employeeToDelete = null);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ['\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  z-index: 1040;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 6.7px;\n  box-shadow: 0 5.4px 16px rgba(0, 0, 0, 0.12);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.6rem 0.74rem;\n  background-color: #f8f9fa;\n  border-radius: 6.7px 6.7px 0 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  margin: 0;\n  font-size: 0.67rem;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0.74rem;\n  max-height: 45.6vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding: 0.57rem 0.74rem;\n  background-color: #f8f9fa;\n  border-radius: 0 0 6.7px 6.7px;\n}\n.employee-form-section[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 0.6rem;\n  border-radius: 54px;\n  border: 1px solid #e9ecef;\n}\n.employee-form-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 0.4rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.23rem;\n  font-size: 0.55rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 3.35px;\n  padding: 0.34rem 0.44rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.17rem rgba(13, 110, 253, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.17rem;\n  font-size: 0.52rem;\n  color: #dc3545;\n}\n.modal-section[_ngcontent-%COMP%] {\n  padding: 18px !important;\n}\n.employees-list-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 0.95rem;\n}\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  border-radius: 5.36px;\n  overflow: hidden;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1.34px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  padding: 0.4rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  vertical-align: middle;\n  border-bottom: 0.67px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 3.35px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n  font-size: 0.55rem;\n  padding: 0.27rem 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.section-header[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-right: 10px !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.13rem 0.3rem;\n  font-size: 0.54rem;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.1em;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 0.67rem;\n  height: 0.67rem;\n  border-width: 0.07em;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.67rem;\n  height: 0.67rem;\n  vertical-align: middle;\n}\n.employee-form-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 0.67px solid #E6D7A2;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.05);\n}\n.employee-form-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  margin-bottom: 0.67rem;\n  display: flex;\n  align-items: center;\n  gap: 0.34rem;\n}\n.table[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.08);\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: white;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.59rem;\n  letter-spacing: 0.34px;\n  padding: 0.67rem 0.5rem;\n  border: none;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.67rem 0.5rem;\n  vertical-align: middle;\n  border-bottom: 0.67px solid #e9ecef;\n  font-weight: 500;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 1.34px solid #D4AF5F;\n  color: #D4AF5F;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background: #D4AF5F;\n  border-color: #D4AF5F;\n  color: white;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1.34px solid #dc3545;\n  color: #dc3545;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 10.72px;\n  box-shadow: 0 13.4px 40px rgba(0, 0, 0, 0.3);\n  border: none;\n  background: white;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  border-bottom: 0.67px solid #E6D7A2;\n  border-radius: 10.72px 10.72px 0 0;\n  padding: 1rem 1.34rem;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  font-size: 0.84rem;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.34rem;\n  background-color: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-top: 0.67px solid #E6D7A2;\n  border-radius: 0 0 10.72px 10.72px;\n  padding: 1rem 1.34rem;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 1.34rem;\n  height: 1.34rem;\n  border-width: 0.13em;\n  border-color: #D4AF5F transparent #D4AF5F transparent;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[colspan="5"][_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #6c757d;\n  font-style: italic;\n  padding: 2rem 0.67rem;\n  text-align: center;\n  font-size: 0.74rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: white;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #a87f31;\n  color: #ffffff;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  border-color: #545b62;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.34rem;\n    max-width: calc(100% - 0.67rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0.67rem;\n  }\n  .employee-form-section[_ngcontent-%COMP%] {\n    padding: 0.67rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    border-radius: 5.36px;\n  }\n  .btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.13rem 0.27rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n  margin-left: -1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n}\n/*# sourceMappingURL=partner-employees-modal.component-IL3GCPCB.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerEmployeesModalComponent, [{
    type: Component,
    args: [{ selector: "app-partner-employees-modal", standalone: false, template: `<!-- Modal Backdrop -->\r
<div *ngIf="isOpen" class="modal-backdrop fade show" (click)="closeModal()"></div>\r
\r
<!-- Modal -->\r
<div *ngIf="isOpen" class="modal fade show d-block" tabindex="-1" role="dialog" [attr.dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <div class="modal-dialog modal-lg" role="document" (click)="$event.stopPropagation()">\r
    <div class="modal-content">\r
      <!-- Modal Header -->\r
      <div class="modal-header">\r
        <h5 class\r
        ="modal-title">{{ translate('partners.manage_employees') }} - {{ partnerName }}</h5>\r
        <button type="button" class="btn-close" (click)="closeModal()" aria-label="Close"></button>\r
      </div>\r
\r
      <!-- Modal Body -->\r
      <div class="modal-body">\r
        <!-- Add/Edit Employee Form -->\r
        <div class="employee-form-section mb-4">\r
          <div class="d-flex justify-content-between align-items-center mb-3">\r
            <h6 class="mb-0">{{ isEditMode ? translate('partners.edit_employee') : translate('partners.add_employee') }}</h6>\r
            <button *ngIf="isEditMode" type="button" class="btn btn-sm btn-secondary" (click)="resetForm()">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
\r
          <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">\r
            <div class="row">\r
              <div class="col-md-6 mb-3">\r
                <label for="name" class="form-label">{{ translate('partners.employee_name') }} <span class="text-danger">*</span></label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  id="name"\r
                  formControlName="name"\r
                  [class.is-invalid]="employeeForm.get('name')?.invalid && employeeForm.get('name')?.touched"\r
                >\r
                <div *ngIf="employeeForm.get('name')?.invalid && employeeForm.get('name')?.touched" class="invalid-feedback">\r
                  {{ translate('validation.required') }}\r
                </div>\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label for="email" class="form-label">{{ translate('partners.email') }}</label>\r
                <input \r
                  type="email" \r
                  class="form-control" \r
                  id="email"\r
                  formControlName="email"\r
                  [class.is-invalid]="employeeForm.get('email')?.invalid && employeeForm.get('email')?.touched"\r
                >\r
                <div *ngIf="employeeForm.get('email')?.invalid && employeeForm.get('email')?.touched" class="invalid-feedback">\r
                  {{ translate('validation.invalid_email') }}\r
                </div>\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label for="phoneNumber" class="form-label">{{ translate('partners.phone_number') }}</label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  id="phoneNumber"\r
                  formControlName="phoneNumber"\r
                >\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label for="jobTitle" class="form-label">{{ translate('partners.job_title') }}</label>\r
                <input \r
                  type="text" \r
                  class="form-control" \r
                  id="jobTitle"\r
                  formControlName="jobTitle"\r
                >\r
              </div>\r
            </div>\r
\r
            <div class="d-flex gap-2">\r
              <button \r
                type="submit" \r
                class="btn btn-primary"\r
                [disabled]="isSubmitting || employeeForm.invalid"\r
              >\r
                <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>\r
                {{ isEditMode ? translate('common.update') : translate('common.add') }}\r
              </button>\r
              <button \r
                type="button" \r
                class="btn btn-secondary" \r
                (click)="resetForm()"\r
                [disabled]="isSubmitting"\r
              >\r
                {{ translate('common.reset') }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
\r
        <!-- Employees List -->\r
        <div class="employees-list-section">\r
          <div class="d-flex justify-content-between align-items-center mb-3">\r
            <h6 class="mb-0">{{ translate('partners.employees_list') }}</h6>\r
            <button \r
              type="button" \r
              class="btn btn-sm btn-outline-primary" \r
              (click)="addEmployee()"\r
            >\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <line x1="12" y1="5" x2="12" y2="19"/>\r
                <line x1="5" y1="12" x2="19" y2="12"/>\r
              </svg>\r
              {{ translate('partners.add_employee') }}\r
            </button>\r
          </div>\r
\r
          <!-- Loading State -->\r
          <div *ngIf="isLoading" class="text-center py-4">\r
            <div class="spinner-border" role="status">\r
              <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Employees Table -->\r
          <div *ngIf="!isLoading" class="table-responsive">\r
            <table class="table table-hover">\r
              <thead>\r
                <tr>\r
                  <th>{{ translate('partners.employee_name') }}</th>\r
                  <th>{{ translate('partners.email') }}</th>\r
                  <th>{{ translate('partners.phone_number') }}</th>\r
                  <th>{{ translate('partners.job_title') }}</th>\r
                  <th>{{ translate('common.actions') }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let employee of employees">\r
                  <td>{{ employee.name }}</td>\r
                  <td>{{ employee.email || '-' }}</td>\r
                  <td>{{ employee.phoneNumber || '-' }}</td>\r
                  <td>{{ employee.jobTitle || '-' }}</td>\r
                  <td>\r
                    <div class="btn-group btn-group-sm">\r
                      <button \r
                        type="button" \r
                        class="btn btn-outline-primary"\r
                        (click)="editEmployee(employee)"\r
                        [disabled]="isEditMode && currentEmployeeId === employee.id"\r
                        title="{{ translate('common.edit') }}"\r
                      >\r
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
                        </svg>\r
                      </button>\r
                      <button \r
                        type="button" \r
                        class="btn btn-outline-danger"\r
                        (click)="deleteEmployee(employee)"\r
                        title="{{ translate('common.delete') }}"\r
                      >\r
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                          <polyline points="3,6 5,6 21,6"/>\r
                          <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>\r
                        </svg>\r
                      </button>\r
                    </div>\r
                  </td>\r
                </tr>\r
                <tr *ngIf="employees.length === 0">\r
                  <td colspan="5" class="text-center text-muted py-4">\r
                    {{ translate('partners.no_employees_found') }}\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Modal Footer -->\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-secondary" (click)="closeModal()">\r
          {{ translate('common.close') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal \r
  #confirmationModal\r
  [isRTL]="isRTL()"\r
  (confirm)="confirmDelete()"\r
  (cancel)="employeeToDelete = null"\r
></app-confirmation-modal>`, styles: ['/* src/app/components/partners/partner-employees-modal/partner-employees-modal.component.css */\n.modal-backdrop {\n  z-index: 1040;\n}\n.modal {\n  z-index: 1050;\n}\n.modal-content {\n  border: none;\n  border-radius: 6.7px;\n  box-shadow: 0 5.4px 16px rgba(0, 0, 0, 0.12);\n}\n.modal-header {\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.6rem 0.74rem;\n  background-color: #f8f9fa;\n  border-radius: 6.7px 6.7px 0 0;\n}\n.modal-title {\n  font-weight: 600;\n  color: #495057;\n  margin: 0;\n  font-size: 0.67rem;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 0.84rem;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close:hover {\n  opacity: 0.75;\n}\n.modal-body {\n  padding: 0.74rem;\n  max-height: 45.6vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #e9ecef;\n  padding: 0.57rem 0.74rem;\n  background-color: #f8f9fa;\n  border-radius: 0 0 6.7px 6.7px;\n}\n.employee-form-section {\n  background-color: #f8f9fa;\n  padding: 0.6rem;\n  border-radius: 54px;\n  border: 1px solid #e9ecef;\n}\n.employee-form-section h6 {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 0.4rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.23rem;\n  font-size: 0.55rem;\n}\n.form-control {\n  border: 1px solid #ced4da;\n  border-radius: 3.35px;\n  padding: 0.34rem 0.44rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.17rem rgba(13, 110, 253, 0.25);\n}\n.form-control.is-invalid {\n  border-color: #dc3545;\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.17rem;\n  font-size: 0.52rem;\n  color: #dc3545;\n}\n.modal-section {\n  padding: 18px !important;\n}\n.employees-list-section h6 {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  font-size: 0.95rem;\n}\n.table {\n  margin-bottom: 0;\n  border-radius: 5.36px;\n  overflow: hidden;\n}\n.table thead th {\n  background-color: #f8f9fa;\n  border-bottom: 1.34px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  padding: 0.4rem;\n}\n.table tbody td {\n  padding: 0.4rem;\n  vertical-align: middle;\n  border-bottom: 0.67px solid #dee2e6;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.btn {\n  border-radius: 3.35px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n  font-size: 0.55rem;\n  padding: 0.27rem 0.5rem;\n}\n.btn-primary {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-primary:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary:hover {\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.section-header {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0;\n  margin-right: 10px !important;\n}\n.btn-outline-primary {\n  color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-outline-primary:hover {\n  background-color: #B2550B;\n  border-color: #B2550B;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-group-sm .btn {\n  padding: 0.13rem 0.3rem;\n  font-size: 0.54rem;\n}\n.spinner-border {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.1em;\n}\n.spinner-border-sm {\n  width: 0.67rem;\n  height: 0.67rem;\n  border-width: 0.07em;\n}\n.btn svg {\n  width: 0.67rem;\n  height: 0.67rem;\n  vertical-align: middle;\n}\n.employee-form-section {\n  background: #f8f9fa;\n  border: 0.67px solid #E6D7A2;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.05);\n}\n.employee-form-section h6 {\n  color: #5F646D;\n  font-weight: 700;\n  margin-bottom: 0.67rem;\n  display: flex;\n  align-items: center;\n  gap: 0.34rem;\n}\n.table {\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.08);\n}\n.table thead th {\n  background: #D4AF5F;\n  color: white;\n  font-weight: 600;\n  text-transform: uppercase;\n  font-size: 0.59rem;\n  letter-spacing: 0.34px;\n  padding: 0.67rem 0.5rem;\n  border: none;\n}\n.table tbody tr {\n  transition: all 0.3s ease;\n}\n.table tbody tr:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.table tbody td {\n  padding: 0.67rem 0.5rem;\n  vertical-align: middle;\n  border-bottom: 0.67px solid #e9ecef;\n  font-weight: 500;\n}\n.table tbody tr:last-child td {\n  border-bottom: none;\n}\n.btn-outline-primary {\n  border: 1.34px solid #D4AF5F;\n  color: #D4AF5F;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-outline-primary:hover {\n  background: #D4AF5F;\n  border-color: #D4AF5F;\n  color: white;\n}\n.btn-outline-danger {\n  border: 1.34px solid #dc3545;\n  color: #dc3545;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-outline-danger:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc3545 0%,\n      #c82333 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.modal-content {\n  border-radius: 10.72px;\n  box-shadow: 0 13.4px 40px rgba(0, 0, 0, 0.3);\n  border: none;\n  background: white;\n}\n.modal-header {\n  background: #D4AF5F;\n  border-bottom: 0.67px solid #E6D7A2;\n  border-radius: 10.72px 10.72px 0 0;\n  padding: 1rem 1.34rem;\n  color: #5F646D;\n}\n.modal-title {\n  font-weight: 600;\n  color: #5F646D;\n  font-size: 0.84rem;\n  margin: 0;\n}\n.modal-body {\n  padding: 1.34rem;\n  background-color: #ffffff;\n}\n.modal-footer {\n  background: #f8f9fa;\n  border-top: 0.67px solid #E6D7A2;\n  border-radius: 0 0 10.72px 10.72px;\n  padding: 1rem 1.34rem;\n}\n.spinner-border {\n  width: 1.34rem;\n  height: 1.34rem;\n  border-width: 0.13em;\n  border-color: #D4AF5F transparent #D4AF5F transparent;\n}\n.table tbody tr td[colspan="5"] {\n  background: #f8f9fa;\n  color: #6c757d;\n  font-style: italic;\n  padding: 2rem 0.67rem;\n  text-align: center;\n  font-size: 0.74rem;\n}\n.btn-primary {\n  background: #D4AF5F;\n  color: white;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-primary:hover {\n  background: #a87f31;\n  color: #ffffff;\n}\n.btn-secondary {\n  background: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.btn-secondary:hover {\n  background: #5a6268;\n  border-color: #545b62;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.34rem;\n    max-width: calc(100% - 0.67rem);\n  }\n  .modal-body {\n    padding: 0.67rem;\n  }\n  .employee-form-section {\n    padding: 0.67rem;\n  }\n  .table-responsive {\n    border-radius: 5.36px;\n  }\n  .btn-group-sm .btn {\n    padding: 0.13rem 0.27rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .modal-footer {\n  text-align: left;\n}\n[dir=rtl] .form-label {\n  text-align: right;\n}\n[dir=rtl] .btn-group .btn:not(:last-child) {\n  margin-right: 0;\n  margin-left: -1px;\n}\n[dir=rtl] .btn-group .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n[dir=rtl] .btn-group .btn:last-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 0.375rem;\n  border-bottom-left-radius: 0.375rem;\n}\n/*# sourceMappingURL=partner-employees-modal.component-IL3GCPCB.css.map */\n'] }]
  }], () => [{ type: PartnersService }, { type: TranslationService }, { type: FormBuilder }], { partnerId: [{
    type: Input
  }], partnerName: [{
    type: Input
  }], close: [{
    type: Output
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerEmployeesModalComponent, { className: "PartnerEmployeesModalComponent", filePath: "src/app/components/partners/partner-employees-modal/partner-employees-modal.component.ts", lineNumber: 15 });
})();

// src/app/components/partners/edit-partner/edit-partner.ts
var _c03 = ["confirmationModal"];
var _c1 = ["employeesModal"];
function EditPartner_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("name"), " ");
  }
}
function EditPartner_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("name"), " ");
  }
}
function EditPartner_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", cat_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate(cat_r3.value), " ");
  }
}
function EditPartner_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("category"), " ");
  }
}
function EditPartner_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("category"), " ");
  }
}
function EditPartner_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("sector"), " ");
  }
}
function EditPartner_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("sector"), " ");
  }
}
function EditPartner_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function EditPartner_button_39_Template_button_click_0_listener() {
      const country_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCountry(country_r5));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.name);
  }
}
function EditPartner_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("country"), " ");
  }
}
function EditPartner_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("country"), " ");
  }
}
function EditPartner_button_48_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", city_r7.country, " ");
  }
}
function EditPartner_button_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function EditPartner_button_48_Template_button_click_0_listener() {
      const city_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity(city_r7));
    });
    \u0275\u0275elementStart(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EditPartner_button_48_small_4_Template, 2, 1, "small", 68);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const city_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(city_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", city_r7.country);
  }
}
function EditPartner_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("city"), " ");
  }
}
function EditPartner_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("city"), " ");
  }
}
function EditPartner_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("note"), " ");
  }
}
function EditPartner_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("note"), " ");
  }
}
function EditPartner_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("website"), " ");
  }
}
function EditPartner_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("website"), " ");
  }
}
function EditPartner_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("address"), " ");
  }
}
function EditPartner_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("address"), " ");
  }
}
function EditPartner_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("contractStartDate"), " ");
  }
}
function EditPartner_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("contractStartDate"), " ");
  }
}
function EditPartner_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("status"), " ");
  }
}
function EditPartner_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("status"), " ");
  }
}
function EditPartner_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorName"), " ");
  }
}
function EditPartner_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorName"), " ");
  }
}
function EditPartner_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorEmail"), " ");
  }
}
function EditPartner_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorEmail"), " ");
  }
}
function EditPartner_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorPhone"), " ");
  }
}
function EditPartner_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorPhone"), " ");
  }
}
function EditPartner_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("internalCoordinatorJobTitle"), " ");
  }
}
function EditPartner_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("internalCoordinatorJobTitle"), " ");
  }
}
var EditPartner = class _EditPartner {
  partnersService;
  fb;
  translationService;
  countriesService;
  confirmationModal;
  employeesModal;
  // Custom modal properties
  isOpen = false;
  editForm;
  currentPartner = null;
  // Country and city properties
  countries = [];
  filteredCountries = [];
  countrySearchTerm = "";
  showCountryDropdown = false;
  selectedCountry = null;
  filteredCities = [];
  citySearchTerm = "";
  showCityDropdown = false;
  selectedCity = null;
  citySearchSubject = new Subject();
  constructor(partnersService, fb, translationService, countriesService) {
    this.partnersService = partnersService;
    this.fb = fb;
    this.translationService = translationService;
    this.countriesService = countriesService;
  }
  ngAfterViewInit() {
    this.loadCountries();
    this.citySearchSubject.pipe(debounceTime(300), distinctUntilChanged(), switchMap((searchTerm) => {
      if (!searchTerm || searchTerm.length < 2) {
        return [];
      }
      if (this.selectedCountry) {
        return this.countriesService.searchCities(this.selectedCountry.name, searchTerm);
      } else {
        return this.countriesService.searchCitiesByName(searchTerm);
      }
    })).subscribe((cities) => {
      console.log("Received cities:", cities);
      this.filteredCities = cities;
      this.showCityDropdown = cities.length > 0;
    });
  }
  open(partner) {
    this.initializeForm();
    if (partner) {
      this.currentPartner = partner;
      this.loadPartnerData(partner);
    }
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
    this.editForm.reset();
    this.contacts.clear();
    this.currentPartner = null;
    this.selectedCountry = null;
    this.selectedCity = null;
    this.countrySearchTerm = "";
    this.citySearchTerm = "";
    this.filteredCountries = this.countries;
    this.filteredCities = [];
    this.showCountryDropdown = false;
    this.showCityDropdown = false;
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  categories = [
    { key: 0, value: "partners.categories.0" },
    { key: 1, value: "partners.categories.1" },
    { key: 2, value: "partners.categories.2" },
    { key: 3, value: "partners.categories.3" },
    { key: 4, value: "partners.categories.4" },
    { key: 5, value: "partners.categories.5" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  // Load countries
  loadCountries() {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.filteredCountries = countries;
    });
  }
  // Country selection methods
  onCountrySearch(event) {
    const searchTerm = event.target.value;
    this.countrySearchTerm = searchTerm;
    if (this.selectedCountry && searchTerm !== this.selectedCountry.name) {
      this.selectedCountry = null;
    }
    this.editForm.patchValue({ country: searchTerm });
    if (searchTerm && searchTerm.length >= 2) {
      this.filteredCountries = this.countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
      this.showCountryDropdown = this.filteredCountries.length > 0;
    } else if (searchTerm.length === 0) {
      this.filteredCountries = this.countries;
      this.showCountryDropdown = false;
      this.selectedCountry = null;
    } else {
      this.filteredCountries = this.countries;
      this.showCountryDropdown = true;
    }
  }
  onCountryFocus() {
    this.filteredCountries = this.countries;
    this.showCountryDropdown = true;
  }
  onCountryBlur() {
    setTimeout(() => {
      this.showCountryDropdown = false;
    }, 200);
  }
  selectCountry(country) {
    this.selectedCountry = country;
    this.countrySearchTerm = country.name;
    this.editForm.patchValue({ country: country.name });
    this.filteredCountries = [];
    this.showCountryDropdown = false;
    this.selectedCity = null;
    this.citySearchTerm = "";
    this.editForm.patchValue({ city: "" });
  }
  // City search methods
  onCitySearch(event) {
    const searchTerm = event.target.value;
    this.citySearchTerm = searchTerm;
    this.selectedCity = null;
    this.editForm.patchValue({ city: searchTerm });
    console.log("City search term:", searchTerm);
    console.log("Selected country:", this.selectedCountry);
    if (searchTerm && searchTerm.length >= 2) {
      this.citySearchSubject.next(searchTerm);
    } else {
      this.filteredCities = [];
      this.showCityDropdown = false;
    }
  }
  onCityFocus() {
    if (this.citySearchTerm && this.citySearchTerm.length >= 2) {
      this.citySearchSubject.next(this.citySearchTerm);
    }
  }
  onCityBlur() {
    setTimeout(() => {
      this.showCityDropdown = false;
    }, 200);
  }
  selectCity(city) {
    this.selectedCity = city;
    this.citySearchTerm = city.name;
    this.editForm.patchValue({ city: city.name });
    this.filteredCities = [];
    this.showCityDropdown = false;
  }
  initializeForm() {
    this.editForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(300)]],
      category: ["", Validators.required],
      sector: ["", [Validators.required, Validators.minLength(2)]],
      country: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      note: ["", [Validators.minLength(5)]],
      website: ["", [Validators.required, Validators.minLength(5)]],
      address: ["", [Validators.required, Validators.minLength(5)]],
      contractStartDate: ["", [Validators.required]],
      status: ["", Validators.required],
      internalCoordinatorName: [""],
      internalCoordinatorEmail: ["", [Validators.email]],
      internalCoordinatorPhone: [""],
      internalCoordinatorJobTitle: [""]
    });
    this.editForm.addControl("contacts", this.fb.array([]));
  }
  // Contacts management methods
  get contacts() {
    return this.editForm.get("contacts");
  }
  addContact() {
    const contactGroup = this.fb.group({
      email: [""],
      phone: [""],
      mobile: [""]
    });
    this.contacts.push(contactGroup);
  }
  removeContact(index) {
    if (this.contacts.length > 1) {
      this.contacts.removeAt(index);
    }
  }
  getContactErrorMessage(control, field) {
    if (!control?.errors)
      return "";
    if (control.errors["required"]) {
      return this.translate("common.field_required");
    }
    if (control.errors["email"]) {
      return this.translate("common.invalid_email");
    }
    if (control.errors["minlength"]) {
      const requiredLength = control.errors["minlength"]["requiredLength"];
      if (requiredLength === 2) {
        return this.translate("partners.min_length_2");
      } else if (requiredLength === 10) {
        return this.translate("partners.min_length_10");
      }
      return `Minimum length is ${requiredLength} characters`;
    }
    return "Invalid field";
  }
  loadPartnerData(partner) {
    this.contacts.clear();
    this.countrySearchTerm = partner.country || "";
    this.citySearchTerm = partner.city || "";
    this.editForm.patchValue({
      name: partner.name,
      category: partner.category,
      sector: partner.sector,
      country: partner.country,
      city: partner.city,
      note: partner.note,
      // description: '', // Default value since it's not in Item interface
      website: partner.website || "",
      address: partner.address || "",
      contractStartDate: partner.contractStartDate ? partner.contractStartDate.split("T")[0] : "",
      // Convert ISO string to date input format
      status: partner.isActive ? 1 : 0,
      internalCoordinatorName: partner.internalCoordinatorName || "",
      internalCoordinatorEmail: partner.internalCoordinatorEmail || "",
      internalCoordinatorPhone: partner.internalCoordinatorPhone || "",
      internalCoordinatorJobTitle: partner.internalCoordinatorJobTitle || ""
    });
    if (partner.contacts && partner.contacts.length > 0) {
      partner.contacts.forEach((contact) => {
        const contactGroup = this.fb.group({
          email: [contact.email],
          // Remove validation
          phone: [contact.phone],
          // Remove validation
          mobile: [contact.mobile]
          // Remove validation
        });
        this.contacts.push(contactGroup);
      });
    }
    this.editForm.markAsTouched();
  }
  isFieldValid(field) {
    const control = this.editForm.get(field);
    return control?.touched && control?.invalid;
  }
  hasServerError(field) {
    const control = this.editForm.get(field);
    return control?.errors?.["serverError"];
  }
  getServerErrorMessage(field) {
    const control = this.editForm.get(field);
    return control?.errors?.["serverError"] || "";
  }
  getErrorMessage(field) {
    const control = this.editForm.get(field);
    if (!control?.errors)
      return "";
    if (control.errors["required"]) {
      return this.translate("common.field_required");
    }
    if (control.errors["minlength"]) {
      const requiredLength = control.errors["minlength"]["requiredLength"];
      if (requiredLength === 2) {
        return this.translate("partners.min_length_2");
      } else if (requiredLength === 3) {
        return this.translate("partners.min_length_3");
      } else if (requiredLength === 5) {
        return this.translate("partners.min_length_5");
      } else if (requiredLength === 10) {
        return this.translate("partners.min_length_10");
      }
      return `Minimum length is ${requiredLength} characters`;
    }
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      if (requiredLength === 15) {
        return this.translate("partners.max_length_15");
      }
      if (requiredLength === 300) {
        return this.translate("partners.max_length_300");
      }
      return `Maximum length is ${requiredLength} characters`;
    }
    if (control.errors["pastDate"]) {
      return this.translate("partners.future_date_required");
    }
    return "Invalid field";
  }
  onSubmit() {
    if (this.editForm.invalid || !this.currentPartner) {
      this.editForm.markAllAsTouched();
      return;
    }
    const formValue = this.editForm.value;
    const updatedPartner = __spreadProps(__spreadValues({}, this.currentPartner), {
      name: formValue.name,
      category: parseInt(formValue.category),
      sector: formValue.sector,
      country: formValue.country,
      city: formValue.city,
      note: formValue.note,
      // description: formValue.description, // Add missing description field
      website: formValue.website,
      address: formValue.address,
      contractStartDate: new Date(formValue.contractStartDate).toISOString(),
      isActive: formValue.status === 1,
      internalCoordinatorName: formValue.internalCoordinatorName || void 0,
      internalCoordinatorEmail: formValue.internalCoordinatorEmail || void 0,
      internalCoordinatorPhone: formValue.internalCoordinatorPhone || void 0,
      internalCoordinatorJobTitle: formValue.internalCoordinatorJobTitle || void 0
    });
    const partnerData = {
      success: true,
      message: "",
      data: {
        totalCount: 1,
        page: 1,
        pageSize: 1,
        items: [updatedPartner]
      },
      errors: []
    };
    this.partnersService.updatePartner(this.currentPartner.id, updatedPartner).subscribe({
      next: (res) => {
        this.showSuccessMessage(this.translate("partners.updated_success"));
        this.close();
        this.editForm.reset();
        this.currentPartner = null;
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      error: (error) => {
        this.handleApiErrors(error);
      }
    });
  }
  handleApiErrors(error) {
    if (error.error?.errors) {
      const errors = error.error.errors;
      Object.keys(errors).forEach((fieldName) => {
        const control = this.editForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        }
      });
    } else {
      let errorMessage = "Unknown error occurred";
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
    }
  }
  getFormFieldName(apiFieldName) {
    const fieldMapping = {
      "Name": "name",
      "Category": "category",
      "Sector": "sector",
      "Country": "country",
      "City": "city",
      "Note": "note",
      // 'Description': 'description',
      "Website": "website",
      "Address": "address",
      "ContractStartDate": "contractStartDate",
      "Status": "status",
      "InternalCoordinatorName": "internalCoordinatorName",
      "InternalCoordinatorEmail": "internalCoordinatorEmail",
      "InternalCoordinatorPhone": "internalCoordinatorPhone",
      "InternalCoordinatorJobTitle": "internalCoordinatorJobTitle"
    };
    return fieldMapping[apiFieldName] || apiFieldName.toLowerCase();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  showSuccessMessage(message) {
    const successData = {
      title: this.translate("common.success"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(successData);
  }
  showErrorMessage(message) {
    const errorData = {
      title: this.translate("common.error"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "warning"
    };
    this.confirmationModal.show(errorData);
  }
  resetForm() {
    this.editForm.reset();
    this.contacts.clear();
    this.currentPartner = null;
    this.countrySearchTerm = "";
    this.filteredCountries = [...this.countries];
  }
  // Method to check if save button should be enabled
  isSaveButtonEnabled() {
    const isValid = this.editForm.valid;
    const hasPartner = this.currentPartner !== null;
    return isValid && hasPartner;
  }
  openEmployeesModal() {
    if (this.currentPartner && this.employeesModal) {
      this.employeesModal.partnerId = this.currentPartner.id;
      this.employeesModal.partnerName = this.currentPartner.name;
      this.employeesModal.openModal();
    }
  }
  static \u0275fac = function EditPartner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPartner)(\u0275\u0275directiveInject(PartnersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(CountriesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPartner, selectors: [["app-edit-partner"]], viewQuery: function EditPartner_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.employeesModal = _t.first);
    }
  }, standalone: false, decls: 131, vars: 110, consts: [["confirmationModal", ""], ["employeesModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "editName", 1, "form-label"], ["type", "text", "id", "editName", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "editCategory", 1, "form-label"], ["id", "editCategory", "formControlName", "category", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "editSector", 1, "form-label"], ["type", "text", "id", "editSector", "formControlName", "sector", 1, "form-control", 3, "placeholder"], ["for", "editCountry", 1, "form-label"], [1, "position-relative"], ["type", "text", "id", "editCountry", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["for", "editCity", 1, "form-label"], ["type", "text", "id", "editCity", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "col-12", "mb-3"], ["for", "editNote", 1, "form-label"], ["id", "editNote", "rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["for", "editWebsite", 1, "form-label"], ["type", "url", "id", "editWebsite", "formControlName", "website", 1, "form-control", 3, "placeholder"], ["for", "editAddress", 1, "form-label"], ["type", "text", "id", "editAddress", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "editContractStartDate", 1, "form-label"], ["type", "date", "id", "editContractStartDate", "formControlName", "contractStartDate", 1, "form-control", 3, "placeholder"], ["for", "editStatus", 1, "form-label"], ["id", "editStatus", "formControlName", "status", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "0"], [1, "row", "mt-4"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["for", "editInternalCoordinatorName", 1, "form-label"], ["type", "text", "id", "editInternalCoordinatorName", "formControlName", "internalCoordinatorName", 1, "form-control", 3, "placeholder"], ["for", "editInternalCoordinatorEmail", 1, "form-label"], ["type", "email", "id", "editInternalCoordinatorEmail", "formControlName", "internalCoordinatorEmail", 1, "form-control", 3, "placeholder"], ["for", "editInternalCoordinatorPhone", 1, "form-label"], ["type", "tel", "id", "editInternalCoordinatorPhone", "formControlName", "internalCoordinatorPhone", 1, "form-control", 3, "placeholder"], ["for", "editInternalCoordinatorJobTitle", 1, "form-label"], ["type", "text", "id", "editInternalCoordinatorJobTitle", "formControlName", "internalCoordinatorJobTitle", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "bi", "bi-check-circle", "me-2"], ["type", "button", 1, "btn", "btn-outline-primary", "me-2", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [3, "value"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "d-flex", "flex-column"], [1, "fw-medium"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"]], template: function EditPartner_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function EditPartner_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "button", 5);
      \u0275\u0275listener("click", function EditPartner_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 6);
      \u0275\u0275element(5, "line", 7)(6, "line", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h2", 9);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 10)(10, "form", 11);
      \u0275\u0275listener("ngSubmit", function EditPartner_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(11, "div", 12)(12, "div", 13)(13, "label", 14);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 15);
      \u0275\u0275template(16, EditPartner_div_16_Template, 2, 1, "div", 16)(17, EditPartner_div_17_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13)(19, "label", 17);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 18)(22, "option", 19);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, EditPartner_option_24_Template, 2, 2, "option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, EditPartner_div_25_Template, 2, 1, "div", 16)(26, EditPartner_div_26_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "label", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 22);
      \u0275\u0275template(31, EditPartner_div_31_Template, 2, 1, "div", 16)(32, EditPartner_div_32_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 13)(34, "label", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 24)(37, "input", 25);
      \u0275\u0275listener("input", function EditPartner_Template_input_input_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountrySearch($event));
      })("focus", function EditPartner_Template_input_focus_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryFocus());
      })("blur", function EditPartner_Template_input_blur_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 26);
      \u0275\u0275template(39, EditPartner_button_39_Template, 3, 1, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, EditPartner_div_40_Template, 2, 1, "div", 16)(41, EditPartner_div_41_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 13)(43, "label", 28);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 24)(46, "input", 29);
      \u0275\u0275listener("input", function EditPartner_Template_input_input_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCitySearch($event));
      })("focus", function EditPartner_Template_input_focus_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityFocus());
      })("blur", function EditPartner_Template_input_blur_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 26);
      \u0275\u0275template(48, EditPartner_button_48_Template, 5, 2, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(49, EditPartner_div_49_Template, 2, 1, "div", 16)(50, EditPartner_div_50_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 30)(52, "label", 31);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "textarea", 32);
      \u0275\u0275template(55, EditPartner_div_55_Template, 2, 1, "div", 16)(56, EditPartner_div_56_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 13)(58, "label", 33);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "input", 34);
      \u0275\u0275template(61, EditPartner_div_61_Template, 2, 1, "div", 16)(62, EditPartner_div_62_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 13)(64, "label", 35);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 36);
      \u0275\u0275template(67, EditPartner_div_67_Template, 2, 1, "div", 16)(68, EditPartner_div_68_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 13)(70, "label", 37);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 38);
      \u0275\u0275template(73, EditPartner_div_73_Template, 2, 1, "div", 16)(74, EditPartner_div_74_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 13)(76, "label", 39);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "select", 40)(79, "option", 41);
      \u0275\u0275text(80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "option", 42);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "option", 43);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(85, EditPartner_div_85_Template, 2, 1, "div", 16)(86, EditPartner_div_86_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 44)(88, "div", 45)(89, "div", 46)(90, "div", 47)(91, "h6", 48);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 49)(94, "div", 12)(95, "div", 13)(96, "label", 50);
      \u0275\u0275text(97);
      \u0275\u0275elementEnd();
      \u0275\u0275element(98, "input", 51);
      \u0275\u0275template(99, EditPartner_div_99_Template, 2, 1, "div", 16)(100, EditPartner_div_100_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 13)(102, "label", 52);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275element(104, "input", 53);
      \u0275\u0275template(105, EditPartner_div_105_Template, 2, 1, "div", 16)(106, EditPartner_div_106_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 13)(108, "label", 54);
      \u0275\u0275text(109);
      \u0275\u0275elementEnd();
      \u0275\u0275element(110, "input", 55);
      \u0275\u0275template(111, EditPartner_div_111_Template, 2, 1, "div", 16)(112, EditPartner_div_112_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 13)(114, "label", 56);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275element(116, "input", 57);
      \u0275\u0275template(117, EditPartner_div_117_Template, 2, 1, "div", 16)(118, EditPartner_div_118_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(119, "div", 58)(120, "button", 59);
      \u0275\u0275element(121, "i", 60);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "button", 61);
      \u0275\u0275listener("click", function EditPartner_Template_button_click_123_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openEmployeesModal());
      });
      \u0275\u0275text(124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "button", 62);
      \u0275\u0275listener("click", function EditPartner_Template_button_click_125_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(126);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(127, "app-partners-confirmation-modal", null, 0)(129, "app-partner-employees-modal", null, 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.edit_partner"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.name"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("name") || ctx.hasServerError("name"));
      \u0275\u0275property("placeholder", ctx.translate("partners.name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.category"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("category") || ctx.hasServerError("category"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.select_category"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("category"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("category"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.sector"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("sector") || ctx.hasServerError("sector"));
      \u0275\u0275property("placeholder", ctx.translate("partners.sector_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("sector"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("sector"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.country"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("country") || ctx.hasServerError("country"));
      \u0275\u0275property("value", ctx.countrySearchTerm)("placeholder", ctx.translate("partners.country_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showCountryDropdown && ctx.filteredCountries.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredCountries);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("country"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("country"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.city"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("city") || ctx.hasServerError("city"));
      \u0275\u0275property("value", ctx.citySearchTerm)("placeholder", ctx.translate("partners.city_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showCityDropdown && ctx.filteredCities.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredCities);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("city"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("city"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.note"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("note") || ctx.hasServerError("note"));
      \u0275\u0275property("placeholder", ctx.translate("partners.note_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("note"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("note"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.website"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("website") || ctx.hasServerError("website"));
      \u0275\u0275property("placeholder", ctx.translate("partners.website_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("website"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("website"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.address"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("address") || ctx.hasServerError("address"));
      \u0275\u0275property("placeholder", ctx.translate("partners.address_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("address"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("address"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.contract_start_date"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("contractStartDate") || ctx.hasServerError("contractStartDate"));
      \u0275\u0275property("placeholder", ctx.translate("partners.contract_date_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("contractStartDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("contractStartDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("partners.status"), " *");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("status") || ctx.hasServerError("status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.select_status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.active"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("partners.inactive"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("status"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("status"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.internal_coordinator"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_name"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorName") || ctx.hasServerError("internalCoordinatorName"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_name_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorName"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorName"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_email"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorEmail") || ctx.hasServerError("internalCoordinatorEmail"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_email_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorEmail"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorEmail"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_phone"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorPhone") || ctx.hasServerError("internalCoordinatorPhone"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_phone_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorPhone"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorPhone"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("partners.internal_coordinator_job_title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("internalCoordinatorJobTitle") || ctx.hasServerError("internalCoordinatorJobTitle"));
      \u0275\u0275property("placeholder", ctx.translate("partners.internal_coordinator_job_title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("internalCoordinatorJobTitle"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("internalCoordinatorJobTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isSaveButtonEnabled());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.currentPartner);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.manage_employees"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PartnersConfirmationModalComponent, PartnerEmployeesModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);\n  width: 88%;\n  max-width: 680px;\n  max-height: 88vh;\n  overflow: hidden;\n  transform: scale(0.94) translateY(16px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.4rem;\n  max-height: 66vh;\n  overflow-y: auto;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #B2550B;\n  border: 1px solid #B2550B !important;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #B2550B;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  border-top: 1px solid #E6D7A2;\n  padding: 0.85rem 1.4rem 0rem 1.25rem;\n  gap: 0.75rem;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.4rem;\n  font-size: 0.78rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  padding: 0.55rem 0.85rem;\n  font-size: 0.78rem;\n  transition: all 0.25s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.78rem;\n  padding: 0.6rem 1.2rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-0.5px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n@media (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.9rem 1rem;\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 0.95rem 1rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n  }\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 0.85rem;\n  margin-bottom: 0.85rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 5px;\n  padding: 0.8rem;\n  margin-bottom: 0.65rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=edit-partner-EQRLSLRI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPartner, [{
    type: Component,
    args: [{ selector: "app-edit-partner", standalone: false, template: `<!-- Edit Partner Modal -->\r
<div class="modal-overlay" [class.open]="isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-container">\r
    <!-- Modal Header -->\r
    <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
      \r
      <button type="button" class="close-btn" (click)="close()" aria-label="Close">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
      <h2 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
        {{ translate('partners.edit_partner') }}\r
      </h2>\r
    </div>\r
    <!-- Modal Body -->\r
    <div class="modal-body">\r
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()">\r
        <div class="row">\r
          <!-- Partner Name -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editName" class="form-label">{{ translate('partners.name') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="editName" \r
              formControlName="name"\r
              [placeholder]="translate('partners.name_placeholder')"\r
              [class.is-invalid]="isFieldValid('name') || hasServerError('name')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('name')">\r
              {{ getErrorMessage('name') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('name')">\r
              {{ getServerErrorMessage('name') }}\r
            </div>\r
          </div>\r
\r
          <!-- Category -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editCategory" class="form-label">{{ translate('partners.category') }} *</label>\r
            <select \r
              class="form-select" \r
              id="editCategory" \r
              formControlName="category"\r
              [class.is-invalid]="isFieldValid('category') || hasServerError('category')"\r
            >\r
              <option value="" disabled>{{ translate('partners.select_category') }}</option>\r
              <option *ngFor="let cat of categories" [value]="cat.key">\r
                {{ translate(cat.value) }}\r
              </option>\r
            </select>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('category')">\r
              {{ getErrorMessage('category') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('category')">\r
              {{ getServerErrorMessage('category') }}\r
            </div>\r
          </div>\r
\r
          <!-- Sector -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editSector" class="form-label">{{ translate('partners.sector') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="editSector" \r
              formControlName="sector"\r
              [placeholder]="translate('partners.sector_placeholder')"\r
              [class.is-invalid]="isFieldValid('sector') || hasServerError('sector')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('sector')">\r
              {{ getErrorMessage('sector') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('sector')">\r
              {{ getServerErrorMessage('sector') }}\r
            </div>\r
          </div>\r
\r
          <!-- Country -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editCountry" class="form-label">{{ translate('partners.country') }} *</label>\r
            <div class="position-relative">\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="editCountry" \r
                [value]="countrySearchTerm"\r
                [placeholder]="translate('partners.country_placeholder')"\r
                [class.is-invalid]="isFieldValid('country') || hasServerError('country')"\r
                (input)="onCountrySearch($event)"\r
                (focus)="onCountryFocus()"\r
                (blur)="onCountryBlur()"\r
                autocomplete="off"\r
              >\r
              <!-- Country dropdown -->\r
              <div class="dropdown-menu w-100 position-absolute" \r
                   [class.show]="showCountryDropdown && filteredCountries.length > 0"\r
                   style="max-height: 200px; overflow-y: auto; z-index: 1050;">\r
                <button type="button" \r
                        class="dropdown-item" \r
                        *ngFor="let country of filteredCountries"\r
                        (click)="selectCountry(country)">\r
                  <span>{{ country.name }}</span>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('country')">\r
              {{ getErrorMessage('country') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('country')">\r
              {{ getServerErrorMessage('country') }}\r
            </div>\r
          </div>\r
\r
          <!-- City -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editCity" class="form-label">{{ translate('partners.city') }} *</label>\r
            <div class="position-relative">\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="editCity" \r
                [value]="citySearchTerm"\r
                [placeholder]="translate('partners.city_placeholder')"\r
                [class.is-invalid]="isFieldValid('city') || hasServerError('city')"\r
                (input)="onCitySearch($event)"\r
                (focus)="onCityFocus()"\r
                (blur)="onCityBlur()"\r
                autocomplete="off"\r
              >\r
              <!-- City dropdown -->\r
              <div class="dropdown-menu w-100 position-absolute" \r
                   [class.show]="showCityDropdown && filteredCities.length > 0"\r
                   style="max-height: 200px; overflow-y: auto; z-index: 1050;">\r
                <button type="button" \r
                        class="dropdown-item" \r
                        *ngFor="let city of filteredCities"\r
                        (click)="selectCity(city)">\r
                  <div class="d-flex flex-column">\r
                    <span class="fw-medium">{{ city.name }}</span>\r
                    <small class="text-muted" *ngIf="city.country">\r
                      {{ city.country }}\r
                    </small>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('city')">\r
              {{ getErrorMessage('city') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('city')">\r
              {{ getServerErrorMessage('city') }}\r
            </div>\r
          </div>\r
\r
          <!-- Note -->\r
          <div class="col-12 mb-3">\r
            <label for="editNote" class="form-label">{{ translate('partners.note') }} </label>\r
            <textarea \r
              class="form-control" \r
              id="editNote" \r
              rows="3"\r
              formControlName="note"\r
              [placeholder]="translate('partners.note_placeholder')"\r
              [class.is-invalid]="isFieldValid('note') || hasServerError('note')"\r
            ></textarea>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('note')">\r
              {{ getErrorMessage('note') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('note')">\r
              {{ getServerErrorMessage('note') }}\r
            </div>\r
          </div>\r
\r
        \r
          \r
\r
          <!-- Website -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editWebsite" class="form-label">{{ translate('partners.website') }} *</label>\r
            <input \r
              type="url" \r
              class="form-control" \r
              id="editWebsite" \r
              formControlName="website"\r
              [placeholder]="translate('partners.website_placeholder')"\r
              [class.is-invalid]="isFieldValid('website') || hasServerError('website')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('website')">\r
              {{ getErrorMessage('website') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('website')">\r
              {{ getServerErrorMessage('website') }}\r
            </div>\r
          </div>\r
\r
          <!-- Address -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editAddress" class="form-label">{{ translate('partners.address') }} *</label>\r
            <input \r
              type="text" \r
              class="form-control" \r
              id="editAddress" \r
              formControlName="address"\r
              [placeholder]="translate('partners.address_placeholder')"\r
              [class.is-invalid]="isFieldValid('address') || hasServerError('address')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('address')">\r
              {{ getErrorMessage('address') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('address')">\r
              {{ getServerErrorMessage('address') }}\r
            </div>\r
          </div>\r
\r
          <!-- Contract Start Date -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editContractStartDate" class="form-label">{{ translate('partners.contract_start_date') }} *</label>\r
            <input \r
              type="date" \r
              class="form-control" \r
              id="editContractStartDate" \r
              formControlName="contractStartDate"\r
              [placeholder]="translate('partners.contract_date_placeholder')"\r
              [class.is-invalid]="isFieldValid('contractStartDate') || hasServerError('contractStartDate')"\r
            >\r
            <div class="invalid-feedback" *ngIf="isFieldValid('contractStartDate')">\r
              {{ getErrorMessage('contractStartDate') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('contractStartDate')">\r
              {{ getServerErrorMessage('contractStartDate') }}\r
            </div>\r
          </div>\r
\r
          <!-- Status -->\r
          <div class="col-md-6 mb-3">\r
            <label for="editStatus" class="form-label">{{ translate('partners.status') }} *</label>\r
            <select \r
              class="form-select" \r
              id="editStatus" \r
              formControlName="status"\r
              [class.is-invalid]="isFieldValid('status') || hasServerError('status')"\r
            >\r
              <option value="">{{ translate('partners.select_status') }}</option>\r
              <option value="1">{{ translate('partners.active') }}</option>\r
              <option value="0">{{ translate('partners.inactive') }}</option>\r
            </select>\r
            <div class="invalid-feedback" *ngIf="isFieldValid('status')">\r
              {{ getErrorMessage('status') }}\r
            </div>\r
            <div class="invalid-feedback" *ngIf="hasServerError('status')">\r
              {{ getServerErrorMessage('status') }}\r
            </div>\r
          </div>\r
\r
        </div>\r
\r
        <!-- Internal Coordinator Section -->\r
        <div class="row mt-4">\r
          <div class="col-12">\r
            <div class="card">\r
              <div class="card-header">\r
                <h6 class="mb-0">\r
                  {{ translate('partners.internal_coordinator') }}\r
                </h6>\r
              </div>\r
              <div class="card-body">\r
                <div class="row">\r
                  <!-- Internal Coordinator Name -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="editInternalCoordinatorName" class="form-label">{{ translate('partners.internal_coordinator_name') }}</label>\r
                    <input \r
                      type="text" \r
                      class="form-control" \r
                      id="editInternalCoordinatorName" \r
                      formControlName="internalCoordinatorName"\r
                      [placeholder]="translate('partners.internal_coordinator_name_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorName') || hasServerError('internalCoordinatorName')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorName')">\r
                      {{ getErrorMessage('internalCoordinatorName') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorName')">\r
                      {{ getServerErrorMessage('internalCoordinatorName') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Email -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="editInternalCoordinatorEmail" class="form-label">{{ translate('partners.internal_coordinator_email') }}</label>\r
                    <input \r
                      type="email" \r
                      class="form-control" \r
                      id="editInternalCoordinatorEmail" \r
                      formControlName="internalCoordinatorEmail"\r
                      [placeholder]="translate('partners.internal_coordinator_email_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorEmail') || hasServerError('internalCoordinatorEmail')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorEmail')">\r
                      {{ getErrorMessage('internalCoordinatorEmail') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorEmail')">\r
                      {{ getServerErrorMessage('internalCoordinatorEmail') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Phone -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="editInternalCoordinatorPhone" class="form-label">{{ translate('partners.internal_coordinator_phone') }}</label>\r
                    <input \r
                      type="tel" \r
                      class="form-control" \r
                      id="editInternalCoordinatorPhone" \r
                      formControlName="internalCoordinatorPhone"\r
                      [placeholder]="translate('partners.internal_coordinator_phone_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorPhone') || hasServerError('internalCoordinatorPhone')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorPhone')">\r
                      {{ getErrorMessage('internalCoordinatorPhone') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorPhone')">\r
                      {{ getServerErrorMessage('internalCoordinatorPhone') }}\r
                    </div>\r
                  </div>\r
\r
                  <!-- Internal Coordinator Job Title -->\r
                  <div class="col-md-6 mb-3">\r
                    <label for="editInternalCoordinatorJobTitle" class="form-label">{{ translate('partners.internal_coordinator_job_title') }}</label>\r
                    <input \r
                      type="text" \r
                      class="form-control" \r
                      id="editInternalCoordinatorJobTitle" \r
                      formControlName="internalCoordinatorJobTitle"\r
                      [placeholder]="translate('partners.internal_coordinator_job_title_placeholder')"\r
                      [class.is-invalid]="isFieldValid('internalCoordinatorJobTitle') || hasServerError('internalCoordinatorJobTitle')"\r
                    >\r
                    <div class="invalid-feedback" *ngIf="isFieldValid('internalCoordinatorJobTitle')">\r
                      {{ getErrorMessage('internalCoordinatorJobTitle') }}\r
                    </div>\r
                    <div class="invalid-feedback" *ngIf="hasServerError('internalCoordinatorJobTitle')">\r
                      {{ getServerErrorMessage('internalCoordinatorJobTitle') }}\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Modal Footer -->\r
        <div class="modal-footer">\r
          <!-- Debug information (remove this in production) -->\r
          <button type="submit" class="btn btn-primary" [disabled]="!isSaveButtonEnabled()">\r
            <i class="bi bi-check-circle me-2"></i>\r
            {{ translate('common.save') }}\r
          </button>\r
          \r
          <button type="button" class="btn btn-outline-primary me-2" (click)="openEmployeesModal()" [disabled]="!currentPartner">\r
            {{ translate('partners.manage_employees') }}\r
          </button>\r
          \r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
         \r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-partners-confirmation-modal #confirmationModal></app-partners-confirmation-modal>\r
\r
<!-- Partner Employees Modal -->\r
<app-partner-employees-modal #employeesModal></app-partner-employees-modal>\r
`, styles: ["/* src/app/components/partners/edit-partner/edit-partner.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n[dir=rtl] .modal-footer {\n  justify-content: flex-end;\n}\n[dir=ltr] .modal-footer {\n  justify-content: flex-start;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);\n  width: 88%;\n  max-width: 680px;\n  max-height: 88vh;\n  overflow: hidden;\n  transform: scale(0.94) translateY(16px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open .modal-container {\n  transform: scale(1) translateY(0);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body {\n  padding: 1.25rem 1.4rem;\n  max-height: 66vh;\n  overflow-y: auto;\n}\n.btn-outline-primary {\n  color: #B2550B;\n  border: 1px solid #B2550B !important;\n}\n.btn-outline-primary:hover {\n  color: white;\n  background: #B2550B;\n}\n.modal-footer {\n  padding-top: 0.5rem;\n  border-top: 1px solid #E6D7A2;\n  padding: 0.85rem 1.4rem 0rem 1.25rem;\n  gap: 0.75rem;\n}\n.card {\n  box-shadow: none !important;\n  margin-bottom: 0.5rem;\n}\n.form-label {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.4rem;\n  font-size: 0.78rem;\n}\n.form-control,\n.form-select {\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  padding: 0.55rem 0.85rem;\n  font-size: 0.78rem;\n  transition: all 0.25s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn {\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 0.78rem;\n  padding: 0.6rem 1.2rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-0.5px);\n}\n.btn-primary:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n@media (max-width: 768px) {\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 0.9rem 1rem;\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog {\n    margin: 1rem;\n  }\n  .modal-body {\n    padding: 0.85rem;\n  }\n  .modal-header {\n    padding: 0.95rem 1rem;\n  }\n  .modal-title {\n    font-size: 1.05rem;\n  }\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 0.85rem;\n  margin-bottom: 0.85rem;\n}\n.contact-row {\n  background: white;\n  border-radius: 5px;\n  padding: 0.8rem;\n  margin-bottom: 0.65rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row:last-child {\n  margin-bottom: 0;\n}\n.contact-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .form-label {\n  text-align: right;\n}\n[dir=rtl] .btn-close {\n  margin-left: 0;\n  margin-right: auto;\n}\nhtml[dir=rtl] .modal-footer {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=edit-partner-EQRLSLRI.css.map */\n"] }]
  }], () => [{ type: PartnersService }, { type: FormBuilder }, { type: TranslationService }, { type: CountriesService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], employeesModal: [{
    type: ViewChild,
    args: ["employeesModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPartner, { className: "EditPartner", filePath: "src/app/components/partners/edit-partner/edit-partner.ts", lineNumber: 18 });
})();

// src/app/components/partners/edit-contacts-modal/edit-contacts-modal.component.ts
var _c04 = ["confirmationModal"];
function EditContactsModalComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.loading_contacts"));
  }
}
function EditContactsModalComponent_div_0_form_12_div_9_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("ID: ", contact_r5.value.id);
  }
}
function EditContactsModalComponent_div_0_form_12_div_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r5.get("email"), "email"), " ");
  }
}
function EditContactsModalComponent_div_0_form_12_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r5.get("phone"), "phone"), " ");
  }
}
function EditContactsModalComponent_div_0_form_12_div_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getContactErrorMessage(contact_r5.get("mobile"), "mobile"), " ");
  }
}
function EditContactsModalComponent_div_0_form_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EditContactsModalComponent_div_0_form_12_div_9_span_6_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35)(9, "label", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 37);
    \u0275\u0275template(12, EditContactsModalComponent_div_0_form_12_div_9_div_12_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 39)(14, "label", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 40);
    \u0275\u0275template(17, EditContactsModalComponent_div_0_form_12_div_9_div_17_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 39)(19, "label", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 41);
    \u0275\u0275template(22, EditContactsModalComponent_div_0_form_12_div_9_div_22_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 42)(24, "div", 43)(25, "label", 44);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 45)(28, "button", 46);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_form_12_div_9_Template_button_click_28_listener() {
      const i_r6 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveContact(i_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 47);
    \u0275\u0275element(30, "polyline", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 49);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_form_12_div_9_Template_button_click_31_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r4);
      const contact_r5 = ctx_r6.$implicit;
      const i_r6 = ctx_r6.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteContact(i_r6, contact_r5.value.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 50);
    \u0275\u0275element(33, "polyline", 51)(34, "path", 52)(35, "path", 53)(36, "path", 54)(37, "path", 55);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_18_0;
    let tmp_20_0;
    const contact_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", contact_r5.value.id ? ctx_r1.translate("partners.existing_contact") : ctx_r1.translate("partners.new_contact"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", contact_r5.value.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.email"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = contact_r5.get("email")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = contact_r5.get("email")) == null ? null : tmp_10_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.email_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_12_0 = contact_r5.get("email")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = contact_r5.get("email")) == null ? null : tmp_12_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.phone"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_14_0 = contact_r5.get("phone")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = contact_r5.get("phone")) == null ? null : tmp_14_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.phone_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = contact_r5.get("phone")) == null ? null : tmp_16_0.touched) && ((tmp_16_0 = contact_r5.get("phone")) == null ? null : tmp_16_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("partners.mobile"), " *");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", ((tmp_18_0 = contact_r5.get("mobile")) == null ? null : tmp_18_0.touched) && ((tmp_18_0 = contact_r5.get("mobile")) == null ? null : tmp_18_0.invalid));
    \u0275\u0275property("placeholder", ctx_r1.translate("partners.mobile_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = contact_r5.get("mobile")) == null ? null : tmp_20_0.touched) && ((tmp_20_0 = contact_r5.get("mobile")) == null ? null : tmp_20_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", contact_r5.invalid || ctx_r1.isLoading);
  }
}
function EditContactsModalComponent_div_0_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 20)(1, "div", 21)(2, "div", 22)(3, "label", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_form_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addContact());
    });
    \u0275\u0275element(6, "i", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275template(9, EditContactsModalComponent_div_0_form_12_div_9_Template, 38, 20, "div", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.contactsForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("partners.contacts"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("partners.add_contact"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.contacts.controls);
  }
}
function EditContactsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "button", 4);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 5);
    \u0275\u0275element(4, "line", 6)(5, "line", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 8)(7, "h5", 9);
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11);
    \u0275\u0275template(11, EditContactsModalComponent_div_0_div_11_Template, 6, 2, "div", 12)(12, EditContactsModalComponent_div_0_form_12_Template, 10, 4, "form", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "button", 15);
    \u0275\u0275listener("click", function EditContactsModalComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", ctx_r1.translate("partners.edit_contacts"), " - ", ctx_r1.partner == null ? null : ctx_r1.partner.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.close"), " ");
  }
}
var EditContactsModalComponent = class _EditContactsModalComponent {
  fb;
  translationService;
  partnersService;
  partner = null;
  isVisible = false;
  contactsUpdated = new EventEmitter();
  cancel = new EventEmitter();
  confirmationModal;
  contactsForm;
  isLoading = false;
  constructor(fb, translationService, partnersService) {
    this.fb = fb;
    this.translationService = translationService;
    this.partnersService = partnersService;
  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.contactsForm = this.fb.group({
      contacts: this.fb.array([])
    });
  }
  get contacts() {
    return this.contactsForm.get("contacts");
  }
  get translate() {
    return this.translationService.translate.bind(this.translationService);
  }
  show(partner) {
    this.partner = partner;
    this.isVisible = true;
    this.loadContacts();
  }
  hide() {
    this.isVisible = false;
    this.partner = null;
    this.contacts.clear();
  }
  loadContacts() {
    if (!this.partner)
      return;
    this.isLoading = true;
    this.partnersService.getContacts(this.partner.id).subscribe({
      next: (contacts) => {
        this.contacts.clear();
        if (contacts && contacts.length > 0) {
          contacts.forEach((contact) => {
            this.addContact(contact);
          });
        } else {
          if (this.partner?.contacts && this.partner.contacts.length > 0) {
            this.partner.contacts.forEach((contact) => {
              this.addContact(contact);
            });
          } else {
            this.addContact();
          }
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.contacts.clear();
        if (this.partner?.contacts && this.partner.contacts.length > 0) {
          this.partner.contacts.forEach((contact) => {
            this.addContact(contact);
          });
        } else {
          this.addContact();
        }
        this.isLoading = false;
      }
    });
  }
  addContact(contact) {
    const contactGroup = this.fb.group({
      id: [contact?.id || null],
      email: [contact?.email || "", [Validators.email]],
      phone: [contact?.phone || "", [Validators.minLength(5)]],
      mobile: [contact?.mobile || "", [Validators.minLength(5)]]
    });
    this.contacts.push(contactGroup);
  }
  saveContact(index) {
    const contactControl = this.contacts.at(index);
    if (contactControl.invalid) {
      contactControl.markAllAsTouched();
      return;
    }
    const contactData = contactControl.value;
    if (!this.partner)
      return;
    this.isLoading = true;
    if (contactData.id) {
      this.partnersService.updateContact(this.partner.id, contactData.id, contactData).subscribe({
        next: (updatedContact) => {
          this.showSuccessMessage(this.translate("partners.contact_updated_success"));
          this.contactsUpdated.emit(this.partner.id);
          contactControl.patchValue(updatedContact);
        },
        error: (error) => {
          this.showErrorMessage(this.translate("partners.contact_update_error"));
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.partnersService.addContact(this.partner.id, contactData).subscribe({
        next: (newContact) => {
          contactControl.patchValue({ id: newContact.id });
          this.showSuccessMessage(this.translate("partners.contact_added_success"));
          this.contactsUpdated.emit(this.partner.id);
        },
        error: (error) => {
          this.showErrorMessage(this.translate("partners.contact_add_error"));
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
  deleteContact(index, contactId) {
    if (!this.partner)
      return;
    if (contactId) {
      const confirmData = {
        title: this.translate("partners.delete_contact"),
        message: this.translate("partners.confirm_delete_contact"),
        confirmText: this.translate("common.delete"),
        cancelText: this.translate("common.cancel"),
        type: "delete"
      };
      this.confirmationModal.show(confirmData);
      this.confirmationModal.confirm.pipe(take(1)).subscribe(() => {
        this.isLoading = true;
        this.partnersService.deleteContact(this.partner.id, contactId).subscribe({
          next: (response) => {
            this.contacts.removeAt(index);
            this.showSuccessMessage(this.translate("partners.contact_deleted_success"));
            this.contactsUpdated.emit(this.partner.id);
          },
          error: (error) => {
            this.showErrorMessage(this.translate("partners.contact_delete_error"));
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      });
    } else {
      console.log("Removing unsaved contact from form only");
      this.contacts.removeAt(index);
    }
  }
  onCancel() {
    this.cancel.emit();
    this.hide();
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  showSuccessMessage(message) {
    const confirmData = {
      title: this.translate("common.success"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(confirmData);
  }
  showErrorMessage(message) {
    const confirmData = {
      title: this.translate("common.error"),
      message,
      confirmText: this.translate("common.ok"),
      cancelText: "",
      type: "warning"
    };
    this.confirmationModal.show(confirmData);
  }
  getContactErrorMessage(control, fieldName) {
    if (!control || !control.errors)
      return "";
    const errors = control.errors;
    if (errors["required"]) {
      return this.translate("partners." + fieldName + "_required");
    }
    if (errors["email"]) {
      return this.translate("partners.invalid_email");
    }
    if (errors["minlength"]) {
      return this.translate("partners.min_length_5");
    }
    return "";
  }
  static \u0275fac = function EditContactsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditContactsModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(PartnersService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditContactsModalComponent, selectors: [["app-edit-contacts-modal"]], viewQuery: function EditContactsModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, inputs: { partner: "partner", isVisible: "isVisible" }, outputs: { contactsUpdated: "contactsUpdated", cancel: "cancel" }, standalone: false, decls: 3, vars: 1, consts: [["confirmationModal", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "contacts-modal", "rounded-5"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-header"], [1, "modal-title"], [1, "bi", "bi-people-fill", "me-2"], [1, "modal-body", "rounded-5"], ["class", "text-center py-4", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [3, "formGroup"], [1, "contacts-section"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "form-label", "mb-0"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["formArrayName", "contacts"], ["class", "contact-row mb-3 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "contact-row", "mb-3", "p-3", "border", "rounded", 3, "formGroupName"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-person-fill", "me-2", "text-primary"], [1, "fw-bold"], ["class", "badge bg-secondary ms-2", 4, "ngIf"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-label", "small"], ["type", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-3"], ["type", "tel", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["type", "tel", "formControlName", "mobile", 1, "form-control", 3, "placeholder"], [1, "col-md-2", "d-flex", "align-items-end"], [1, "w-100"], [1, "form-label", "small", "text-muted"], [1, "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", "flex-fill", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Check", 1, "nav-icon"], ["points", "20 6 9 17 4 12"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", "flex-fill", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "badge", "bg-secondary", "ms-2"], [1, "invalid-feedback"]], template: function EditContactsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditContactsModalComponent_div_0_Template, 16, 5, "div", 1);
      \u0275\u0275element(1, "app-partners-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, PartnersConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 0.75rem;\n}\n.contacts-modal[_ngcontent-%COMP%] {\n  max-width: 680px;\n  width: 100%;\n}\n.modal-container[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  background: white;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.35rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n  z-index: 1;\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-radius: 12px 12px 0 0 !important;\n  padding: 1rem 1.1rem 0.85rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n  color: #5F646D;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-header[_ngcontent-%COMP%]   .ltr[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 0.85rem 1.1rem 1.1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-color: #e5e7eb !important;\n}\n.contact-row[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.65rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #059669;\n  border-color: #059669;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #047857;\n  border-color: #047857;\n  color: white !important;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .contacts-modal[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-width: calc(100vw - 2rem);\n  }\n  .contact-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contact-row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    justify-content: center;\n  }\n  .contact-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .contact-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=edit-contacts-modal.component-MUDH75AM.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditContactsModalComponent, [{
    type: Component,
    args: [{ selector: "app-edit-contacts-modal", standalone: false, template: `<div class="modal-overlay"  *ngIf="isVisible" (click)="onOverlayClick($event)">\r
  <div class="modal-container contacts-modal rounded-5">\r
    <!-- Close Button -->\r
    <button class="close-btn" (click)="onCancel()">\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <line x1="18" y1="6" x2="6" y2="18"></line>\r
        <line x1="6" y1="6" x2="18" y2="18"></line>\r
      </svg>\r
    </button>\r
\r
    <!-- Modal Header -->\r
    <div class="modal-header">\r
      <h5 class="modal-title">\r
        <i class="bi bi-people-fill me-2"></i>\r
        {{ translate('partners.edit_contacts') }} - {{ partner?.name }}\r
      </h5>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body rounded-5">\r
      <!-- Loading Indicator -->\r
      <div *ngIf="isLoading" class="text-center py-4">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
        </div>\r
        <p class="mt-2 text-muted">{{ translate('partners.loading_contacts') }}</p>\r
      </div>\r
      \r
      <form [formGroup]="contactsForm" *ngIf="!isLoading">\r
        <!-- Contacts List -->\r
        <div class="contacts-section">\r
          <div class="d-flex justify-content-between align-items-center mb-3">\r
            <label class="form-label mb-0">{{ translate('partners.contacts') }}</label>\r
            <button type="button" class="btn btn-outline-primary btn-sm" (click)="addContact()">\r
              <i class="bi bi-plus-circle me-1"></i>\r
              {{ translate('partners.add_contact') }}\r
            </button>\r
          </div>\r
          \r
          <div formArrayName="contacts">\r
            <div *ngFor="let contact of contacts.controls; let i = index" [formGroupName]="i" class="contact-row mb-3 p-3 border rounded">\r
              <!-- Contact Header -->\r
              <div class="d-flex justify-content-between align-items-center mb-2">\r
                <div class="d-flex align-items-center">\r
                  <i class="bi bi-person-fill me-2 text-primary"></i>\r
                  <span class="fw-bold">\r
                    {{ contact.value.id ? translate('partners.existing_contact') : translate('partners.new_contact') }}\r
                  </span>\r
                  <span *ngIf="contact.value.id" class="badge bg-secondary ms-2">ID: {{ contact.value.id }}</span>\r
                </div>\r
                <!-- <div class="d-flex align-items-center gap-1">\r
                  <button type="button" class="btn btn-success text-white btn-sm" (click)="saveContact(i)" [disabled]="contact.invalid || isLoading">\r
                    \r
                    {{ contact.value.id ? translate('common.update') : translate('common.save') }}\r
                  </button>\r
                  <button type="button" class="btn btn-danger text-white btn-sm" (click)="deleteContact(i, contact.value.id)">\r
                    \r
                    {{ translate('common.delete') }}\r
                  </button>\r
                </div> -->\r
              </div>\r
              \r
              <!-- Contact Form Fields -->\r
              <div class="row g-2">\r
                <div class="col-md-4">\r
                  <label class="form-label small">{{ translate('partners.email') }} *</label>\r
                  <input \r
                    type="email" \r
                    class="form-control" \r
                    [placeholder]="translate('partners.email_placeholder')"\r
                    formControlName="email"\r
                    [class.is-invalid]="contact.get('email')?.touched && contact.get('email')?.invalid"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="contact.get('email')?.touched && contact.get('email')?.invalid">\r
                    {{ getContactErrorMessage(contact.get('email'), 'email') }}\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <label class="form-label small">{{ translate('partners.phone') }} *</label>\r
                  <input \r
                    type="tel" \r
                    class="form-control" \r
                    [placeholder]="translate('partners.phone_placeholder')"\r
                    formControlName="phone"\r
                    [class.is-invalid]="contact.get('phone')?.touched && contact.get('phone')?.invalid"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="contact.get('phone')?.touched && contact.get('phone')?.invalid">\r
                    {{ getContactErrorMessage(contact.get('phone'), 'phone') }}\r
                  </div>\r
                </div>\r
                <div class="col-md-3">\r
                  <label class="form-label small">{{ translate('partners.mobile') }} *</label>\r
                  <input \r
                    type="tel" \r
                    class="form-control" \r
                    [placeholder]="translate('partners.mobile_placeholder')"\r
                    formControlName="mobile"\r
                    [class.is-invalid]="contact.get('mobile')?.touched && contact.get('mobile')?.invalid"\r
                  >\r
                  <div class="invalid-feedback" *ngIf="contact.get('mobile')?.touched && contact.get('mobile')?.invalid">\r
                    {{ getContactErrorMessage(contact.get('mobile'), 'mobile') }}\r
                  </div>\r
                </div>\r
                <div class="col-md-2 d-flex align-items-end">\r
                  <div class="w-100">\r
                    <label class="form-label small text-muted">{{ translate('common.actions') }}</label>\r
                    <div class="d-flex gap-1">\r
                      <button type="button" class="btn btn-outline-success btn-sm flex-fill" (click)="saveContact(i)" [disabled]="contact.invalid || isLoading">\r
                        <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24"\r
                        fill="none" stroke="currentColor" stroke-width="2"\r
                        stroke-linecap="round" stroke-linejoin="round" aria-label="Check">\r
                        <polyline points="20 6 9 17 4 12"></polyline>\r
                        </svg>\r
                      </button>\r
                      <button type="button" class="btn btn-outline-danger btn-sm flex-fill" (click)="deleteContact(i, contact.value.id)">\r
                        <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" \r
                                fill="none" stroke="currentColor" stroke-width="2" \r
                                stroke-linecap="round" stroke-linejoin="round" aria-label="Delete">\r
                            <polyline points="3 6 5 6 21 6"></polyline>\r
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>\r
                            <path d="M10 11v6"></path>\r
                            <path d="M14 11v6"></path>\r
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>\r
                        </svg>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
      <button type="button" class="btn btn-secondary" (click)="onCancel()">\r
        {{ translate('common.close') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal for Delete -->\r
<app-partners-confirmation-modal #confirmationModal></app-partners-confirmation-modal>\r
`, styles: ["/* src/app/components/partners/edit-contacts-modal/edit-contacts-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 0.75rem;\n}\n.contacts-modal {\n  max-width: 680px;\n  width: 100%;\n}\n.modal-container {\n  border-radius: 12px !important;\n  background: white;\n  border-radius: 10px;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.35rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n  z-index: 1;\n  color: white;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.modal-header {\n  border-radius: 12px 12px 0 0 !important;\n  padding: 1rem 1.1rem 0.85rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n  color: #5F646D;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.modal-header .modal-title {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-header .ltr {\n  justify-content: flex-start;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #5F646D;\n}\n.modal-body {\n  padding: 1.1rem;\n}\n.modal-footer {\n  padding: 0.85rem 1.1rem 1.1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-row {\n  background: #f9fafb;\n  border-color: #e5e7eb !important;\n}\n.contact-row:hover {\n  background: #f3f4f6;\n}\n.btn-sm {\n  padding: 0.3rem 0.65rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-success {\n  color: white !important;\n  background-color: #059669;\n  border-color: #059669;\n}\n.btn-success:hover {\n  background-color: #047857;\n  border-color: #047857;\n  color: white !important;\n}\n.btn-danger {\n  color: white !important;\n  background-color: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .contacts-modal {\n    margin: 1rem;\n    max-width: calc(100vw - 2rem);\n  }\n  .contact-row .row {\n    flex-direction: column;\n  }\n  .contact-row .col-md-2 {\n    margin-top: 0.5rem;\n    justify-content: center;\n  }\n  .contact-row .btn {\n    min-width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .contact-row .btn i {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=edit-contacts-modal.component-MUDH75AM.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: TranslationService }, { type: PartnersService }], { partner: [{
    type: Input
  }], isVisible: [{
    type: Input
  }], contactsUpdated: [{
    type: Output
  }], cancel: [{
    type: Output
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditContactsModalComponent, { className: "EditContactsModalComponent", filePath: "src/app/components/partners/edit-contacts-modal/edit-contacts-modal.component.ts", lineNumber: 15 });
})();

// src/app/components/partners/view-partner-modal/view-partner-modal.component.ts
var _c05 = ["confirmationModal"];
var _c12 = ["partnerEmployeesModal"];
function ViewPartnerModal_div_0_div_10_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.note"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.note);
  }
}
function ViewPartnerModal_div_0_div_10_div_45_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.internal_coordinator_name"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.internalCoordinatorName);
  }
}
function ViewPartnerModal_div_0_div_10_div_45_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38)(4, "a", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.internal_coordinator_email"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + ctx_r2.partner.internalCoordinatorEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.partner.internalCoordinatorEmail, " ");
  }
}
function ViewPartnerModal_div_0_div_10_div_45_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38)(4, "a", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.internal_coordinator_phone"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "tel:" + ctx_r2.partner.internalCoordinatorPhone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.partner.internalCoordinatorPhone, " ");
  }
}
function ViewPartnerModal_div_0_div_10_div_45_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.internal_coordinator_job_title"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.internalCoordinatorJobTitle);
  }
}
function ViewPartnerModal_div_0_div_10_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "h3", 33);
    \u0275\u0275element(3, "i", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 36);
    \u0275\u0275template(6, ViewPartnerModal_div_0_div_10_div_45_div_6_Template, 5, 2, "div", 40)(7, ViewPartnerModal_div_0_div_10_div_45_div_7_Template, 6, 3, "div", 40)(8, ViewPartnerModal_div_0_div_10_div_45_div_8_Template, 6, 3, "div", 40)(9, ViewPartnerModal_div_0_div_10_div_45_div_9_Template, 5, 2, "div", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl-layout", ctx_r2.isRTL());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.internal_coordinator"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.partner.internalCoordinatorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner.internalCoordinatorEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner.internalCoordinatorPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner.internalCoordinatorJobTitle);
  }
}
function ViewPartnerModal_div_0_div_10_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().email, $event) || (ctx_r2.newContact().email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().phone, $event) || (ctx_r2.newContact().phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().mobile, $event) || (ctx_r2.newContact().mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_55_Template_input_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 57)(17, "button", 24);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_55_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addContact());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 27);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_55_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.add_new_contact"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.email"), " *");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r2.translate("partners.enter_email")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newContact().email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r2.translate("partners.enter_phone")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newContact().phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.mobile"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r2.translate("partners.enter_mobile")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newContact().mobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.contactFormValid() || ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.add"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.cancel"), " ");
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 76)(3, "polyline", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(contact_r7.email);
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contact_r7.phone);
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "rect", 79)(3, "line", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(contact_r7.mobile);
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "circle", 82)(3, "line", 83)(4, "line", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.no_contact_details"));
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "button", 65);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const contact_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editContact(contact_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 66);
    \u0275\u0275element(4, "path", 67)(5, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 69);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const contact_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteContact(contact_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 66);
    \u0275\u0275element(9, "polyline", 70)(10, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 72);
    \u0275\u0275template(13, ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_13_Template, 6, 1, "div", 73)(14, ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_14_Template, 5, 1, "div", 73)(15, ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_15_Template, 6, 1, "div", 73)(16, ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_div_16_Template, 7, 1, "div", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.edit"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.delete"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", contact_r7.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", contact_r7.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", contact_r7.mobile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !contact_r7.email && !contact_r7.phone && !contact_r7.mobile);
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 86);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("email", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 87);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("phone", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 54)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 87);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("mobile", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 57)(17, "button", 24);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateContact());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 27);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.edit_contact"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.email"), " *");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_12_0 = ctx_r2.editingContact()) == null ? null : tmp_12_0.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_14_0 = ctx_r2.editingContact()) == null ? null : tmp_14_0.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.mobile"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_16_0 = ctx_r2.editingContact()) == null ? null : tmp_16_0.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.contactFormValid() || ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.cancel"), " ");
  }
}
function ViewPartnerModal_div_0_div_10_div_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_10_div_56_div_1_div_1_Template, 17, 8, "div", 61)(2, ViewPartnerModal_div_0_div_10_div_56_div_1_div_2_Template, 21, 10, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const contact_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.editingContact() || ((tmp_9_0 = ctx_r2.editingContact()) == null ? null : tmp_9_0.id) !== contact_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingContact() && ((tmp_10_0 = ctx_r2.editingContact()) == null ? null : tmp_10_0.id) === contact_r7.id);
  }
}
function ViewPartnerModal_div_0_div_10_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_10_div_56_div_1_Template, 3, 2, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.partner.contacts);
  }
}
function ViewPartnerModal_div_0_div_10_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 89);
    \u0275\u0275element(2, "path", 20)(3, "circle", 21)(4, "path", 22)(5, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 90);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_ng_template_57_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showAddContactForm.set(true));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.no_contacts"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.add_first_contact"), " ");
  }
}
function ViewPartnerModal_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "h3", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 34)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 36)(12, "div", 37)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 37)(18, "label");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 37)(23, "label");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 37)(28, "label");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 37)(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 38)(36, "a", 39);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 37)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ViewPartnerModal_div_0_div_10_div_44_Template, 5, 2, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, ViewPartnerModal_div_0_div_10_div_45_Template, 10, 7, "div", 41);
    \u0275\u0275elementStart(46, "div", 42)(47, "div", 43)(48, "h3");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 44);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_10_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAddContactForm.set(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 45);
    \u0275\u0275element(52, "line", 46)(53, "line", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, ViewPartnerModal_div_0_div_10_div_55_Template, 21, 16, "div", 48)(56, ViewPartnerModal_div_0_div_10_div_56_Template, 2, 1, "div", 49)(57, ViewPartnerModal_div_0_div_10_ng_template_57_Template, 10, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noContacts_r10 = \u0275\u0275reference(58);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("rtl-layout", ctx_r2.isRTL());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.partner.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl-layout", ctx_r2.isRTL());
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("category-badge category-", ctx_r2.partner.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryLabel(ctx_r2.partner.category), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.partner.isActive ? "status-active" : "status-inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.partner.isActive ? ctx_r2.translate("partners.active") : ctx_r2.translate("partners.inactive"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.sector"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.sector);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.country"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.city"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.address"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.partner.address);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.website"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.partner.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.partner.website, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.contract_start_date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 34, ctx_r2.partner.contractStartDate, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.partner.note);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner.internalCoordinatorName || ctx_r2.partner.internalCoordinatorEmail || ctx_r2.partner.internalCoordinatorPhone || ctx_r2.partner.internalCoordinatorJobTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.translate("partners.contacts"), " (", ctx_r2.partner.contacts.length || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.add_contact"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showAddContactForm());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner.contacts && ctx_r2.partner.contacts.length > 0)("ngIfElse", noContacts_r10);
  }
}
function ViewPartnerModal_div_0_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.loading"));
  }
}
function ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 106);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r11.jobTitle);
  }
}
function ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 76)(3, "polyline", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(employee_r11.email);
  }
}
function ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const employee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(employee_r11.phoneNumber);
  }
}
function ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_span_5_Template, 2, 1, "span", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 104);
    \u0275\u0275template(7, ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_div_7_Template, 6, 1, "div", 105)(8, ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_div_8_Template, 5, 1, "div", 105);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const employee_r11 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(employee_r11.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", employee_r11.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", employee_r11.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", employee_r11.phoneNumber);
  }
}
function ViewPartnerModal_div_0_div_22_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_22_div_2_div_1_div_1_Template, 9, 4, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.employees());
  }
}
function ViewPartnerModal_div_0_div_22_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 89);
    \u0275\u0275element(2, "path", 20)(3, "circle", 21)(4, "path", 22)(5, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.no_employees_found"));
  }
}
function ViewPartnerModal_div_0_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_22_div_2_div_1_Template, 2, 1, "div", 97)(2, ViewPartnerModal_div_0_div_22_div_2_ng_template_2_Template, 8, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noEmployees_r12 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.employees().length > 0)("ngIfElse", noEmployees_r12);
  }
}
function ViewPartnerModal_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_22_div_1_Template, 4, 1, "div", 92)(2, ViewPartnerModal_div_0_div_22_div_2_Template, 4, 2, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loadingEmployees());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loadingEmployees());
  }
}
function ViewPartnerModal_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "div", 110);
    \u0275\u0275elementEnd();
  }
}
function ViewPartnerModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "button", 10);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 11);
    \u0275\u0275element(5, "line", 12)(6, "line", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h2", 14);
    \u0275\u0275element(8, "i", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ViewPartnerModal_div_0_div_10_Template, 59, 37, "div", 16);
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 18);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEmployees());
    });
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 19);
    \u0275\u0275element(15, "path", 20)(16, "circle", 21)(17, "path", 22)(18, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 24);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openManageEmployeesModal());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ViewPartnerModal_div_0_div_22_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 26)(24, "button", 27);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, ViewPartnerModal_div_0_div_26_Template, 2, 0, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dir", ctx_r2.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance();
    \u0275\u0275property("dir", ctx_r2.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("text-end", ctx_r2.isRTL())("text-start", !ctx_r2.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.partner_details"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.employees"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.manage_employees"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showEmployees());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.close"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.loading());
  }
}
var ViewPartnerModal = class _ViewPartnerModal {
  partner = null;
  contactsUpdated = new EventEmitter();
  partnerUpdated = new EventEmitter();
  confirmationModal;
  partnerEmployeesModal;
  partnersService = inject(PartnersService);
  translationService = inject(TranslationService);
  // UI State
  showModal = signal(false, ...ngDevMode ? [{ debugName: "showModal" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  editingContact = signal(null, ...ngDevMode ? [{ debugName: "editingContact" }] : []);
  showAddContactForm = signal(false, ...ngDevMode ? [{ debugName: "showAddContactForm" }] : []);
  newContact = signal({
    email: "",
    phone: "",
    mobile: ""
  }, ...ngDevMode ? [{ debugName: "newContact" }] : []);
  // Contact form validation
  contactFormValid = signal(false, ...ngDevMode ? [{ debugName: "contactFormValid" }] : []);
  validationTimeout = null;
  // Contact to be deleted
  contactToDelete = null;
  // Partner Employees
  employees = signal([], ...ngDevMode ? [{ debugName: "employees" }] : []);
  loadingEmployees = signal(false, ...ngDevMode ? [{ debugName: "loadingEmployees" }] : []);
  showEmployees = signal(false, ...ngDevMode ? [{ debugName: "showEmployees" }] : []);
  open(partner) {
    this.partner = partner;
    this.showModal.set(true);
    if (!partner.contacts || partner.contacts.length === 0) {
      this.loadContacts();
    }
    this.loadEmployees();
    this.showEmployees.set(true);
  }
  close() {
    this.showModal.set(false);
    this.partner = null;
    this.editingContact.set(null);
    this.showAddContactForm.set(false);
    this.resetNewContact();
    this.employees.set([]);
    this.showEmployees.set(false);
  }
  loadContacts() {
    if (!this.partner)
      return;
    console.log("Loading contacts for partner:", this.partner.id);
    this.loading.set(true);
    this.partnersService.getContacts(this.partner.id).subscribe({
      next: (contacts) => {
        console.log("Contacts loaded:", contacts);
        if (this.partner) {
          this.partner.contacts = contacts || [];
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading contacts:", error);
        if (this.partner) {
          this.partner.contacts = [];
        }
        this.loading.set(false);
      }
    });
  }
  // Contact Management Methods
  addContact() {
    if (!this.partner || !this.contactFormValid())
      return;
    const contactData = this.newContact();
    console.log("Adding contact:", contactData, "for partner:", this.partner.id);
    this.loading.set(true);
    this.partnersService.addContact(this.partner.id, contactData).subscribe({
      next: (response) => {
        console.log("Contact added successfully:", response);
        if (response.success && response.data && this.partner) {
          if (!this.partner.contacts) {
            this.partner.contacts = [];
          }
          this.partner.contacts.push(response.data);
          this.partner.contacts = [...this.partner.contacts];
          this.forceUIUpdate();
        } else {
          console.error("Failed to add contact:", response.message);
        }
        this.resetNewContact();
        this.showAddContactForm.set(false);
        this.loading.set(false);
        this.contactsUpdated.emit(this.partner?.id);
      },
      error: (error) => {
        console.error("Error adding contact:", error);
        this.loading.set(false);
      }
    });
  }
  editContact(contact) {
    this.editingContact.set(__spreadValues({}, contact));
    this.showAddContactForm.set(false);
  }
  updateContact() {
    if (!this.partner || !this.editingContact())
      return;
    const contact = this.editingContact();
    console.log("Updating contact:", contact, "for partner:", this.partner.id);
    this.loading.set(true);
    this.partnersService.updateContact(this.partner.id, contact.id, contact).subscribe({
      next: (response) => {
        console.log("Contact updated successfully:", response);
        if (response.success && response.data && this.partner) {
          const index = this.partner.contacts.findIndex((c) => c.id === contact.id);
          if (index !== -1) {
            this.partner.contacts[index] = response.data;
            this.partner.contacts = [...this.partner.contacts];
            this.forceUIUpdate();
          }
        } else {
          console.error("Failed to update contact:", response.message);
        }
        this.editingContact.set(null);
        this.loading.set(false);
        this.contactsUpdated.emit(this.partner?.id);
      },
      error: (error) => {
        console.error("Error updating contact:", error);
        this.loading.set(false);
      }
    });
  }
  deleteContact(contact) {
    if (!this.partner)
      return;
    this.contactToDelete = contact;
    const modalData = {
      title: this.translate("partners.delete_contact"),
      message: this.translate("partners.confirm_delete_contact"),
      confirmText: this.translate("partners.delete"),
      cancelText: this.translate("partners.cancel"),
      type: "delete"
    };
    this.confirmationModal.show(modalData);
  }
  onConfirmDelete() {
    if (!this.partner || !this.contactToDelete)
      return;
    console.log("Deleting contact:", this.contactToDelete, "for partner:", this.partner.id);
    this.loading.set(true);
    this.partnersService.deleteContact(this.partner.id, this.contactToDelete.id).subscribe({
      next: () => {
        console.log("Contact deleted successfully");
        if (this.partner) {
          this.partner.contacts = this.partner.contacts.filter((c) => c.id !== this.contactToDelete.id);
          this.partner.contacts = [...this.partner.contacts];
          this.forceUIUpdate();
        }
        this.loading.set(false);
        this.contactsUpdated.emit(this.partner?.id);
        this.contactToDelete = null;
      },
      error: (error) => {
        console.error("Error deleting contact:", error);
        this.loading.set(false);
        this.contactToDelete = null;
      }
    });
  }
  onCancelDelete() {
    this.contactToDelete = null;
  }
  cancelEdit() {
    this.editingContact.set(null);
    this.showAddContactForm.set(false);
    this.resetNewContact();
  }
  resetNewContact() {
    this.newContact.set({
      email: "",
      phone: "",
      mobile: ""
    });
    this.validateContactForm();
  }
  validateContactForm() {
    const contact = this.editingContact() || this.newContact();
    const email = contact.email?.trim();
    const phone = contact.phone?.trim();
    const mobile = contact.mobile?.trim();
    const isValid = !!(email && (phone || mobile));
    if (this.contactFormValid() !== isValid) {
      this.contactFormValid.set(isValid);
    }
  }
  onContactFieldChange() {
    this.debouncedValidation();
  }
  onEditingContactFieldChange(field, value) {
    const contact = this.editingContact();
    if (contact) {
      contact[field] = value;
      this.debouncedValidation();
    }
  }
  debouncedValidation() {
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout);
    }
    this.validationTimeout = setTimeout(() => {
      this.validateContactForm();
    }, 150);
  }
  forceUIUpdate() {
    if (this.partner) {
      this.partner = __spreadValues({}, this.partner);
    }
  }
  getCategoryLabel(category) {
    const categories = {
      0: this.translate("partners.categories.0"),
      1: this.translate("partners.categories.1"),
      2: this.translate("partners.categories.2"),
      3: this.translate("partners.categories.3"),
      4: this.translate("partners.categories.4"),
      5: this.translate("partners.categories.5")
    };
    return categories[category] || "Unknown";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  // Partner Employees Methods
  toggleEmployees() {
    this.showEmployees.set(!this.showEmployees());
  }
  loadEmployees() {
    if (!this.partner)
      return;
    this.loadingEmployees.set(true);
    console.log("Loading employees for partner in view modal:", this.partner.id);
    this.partnersService.getPartnerEmployeesByPartnerId(this.partner.id).subscribe({
      next: (response) => {
        console.log("View modal employees API response:", response);
        if (response && response.success) {
          if (Array.isArray(response.data)) {
            this.employees.set(response.data);
          } else if (response.data && "items" in response.data) {
            this.employees.set(response.data.items);
          } else {
            this.employees.set([]);
          }
        } else {
          this.employees.set([]);
        }
        this.loadingEmployees.set(false);
      },
      error: (error) => {
        console.error("Error loading employees in view modal:", error);
        this.employees.set([]);
        this.loadingEmployees.set(false);
      }
    });
  }
  openManageEmployeesModal() {
    if (this.partnerEmployeesModal && this.partner) {
      this.partnerEmployeesModal.openModal();
    }
  }
  onEmployeesModalClose() {
    this.loadEmployees();
  }
  ngOnDestroy() {
    if (this.validationTimeout) {
      clearTimeout(this.validationTimeout);
    }
  }
  static \u0275fac = function ViewPartnerModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPartnerModal)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPartnerModal, selectors: [["app-view-partner-modal"]], viewQuery: function ViewPartnerModal_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.partnerEmployeesModal = _t.first);
    }
  }, inputs: { partner: "partner" }, outputs: { contactsUpdated: "contactsUpdated", partnerUpdated: "partnerUpdated" }, standalone: false, decls: 5, vars: 4, consts: [["confirmationModal", ""], ["partnerEmployeesModal", ""], ["noContacts", ""], ["noEmployees", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "confirm", "cancel", "isRTL"], [3, "close", "partnerId", "partnerName"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click", "dir"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "modal-body", 4, "ngIf"], [1, "modal-section", "p-5"], [1, "section-header", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "section-content", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["class", "loading-overlay", 4, "ngIf"], [1, "modal-body"], [1, "partner-info-section"], [1, "info-header"], [1, "partner-title-section"], [1, "partner-name"], [1, "partner-badges"], [1, "status-badge"], [1, "info-grid"], [1, "info-item"], [1, "website-link"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "info-item", 4, "ngIf"], ["class", "partner-info-section", 4, "ngIf"], [1, "contacts-section"], [1, "contacts-header"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "add-contact-form", 4, "ngIf"], ["class", "contacts-list", 4, "ngIf", "ngIfElse"], [1, "note-text"], [1, "bi", "bi-person-badge", "me-2"], [1, "add-contact-form"], [1, "form-row"], [1, "form-group"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-actions"], [1, "contacts-list"], ["class", "contact-item", 4, "ngFor", "ngForOf"], [1, "contact-item"], ["class", "contact-display", 4, "ngIf"], ["class", "contact-edit", 4, "ngIf"], [1, "contact-display"], [1, "contact-actions"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"], [1, "contact-info"], ["class", "contact-field", 4, "ngIf"], ["class", "contact-field no-data", 4, "ngIf"], [1, "contact-field"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["x", "5", "y", "2", "width", "14", "height", "20", "rx", "2", "ry", "2"], ["x1", "12", "y1", "18", "x2", "12.01", "y2", "18"], [1, "contact-field", "no-data"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "contact-edit"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "no-contacts"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], [1, "btn", "btn-primary", 3, "click"], [1, "section-content"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"], ["class", "employees-list", 4, "ngIf", "ngIfElse"], [1, "employees-list"], ["class", "employee-item", 4, "ngFor", "ngForOf"], [1, "employee-item"], [1, "employee-info"], [1, "employee-header"], ["class", "job-title", 4, "ngIf"], [1, "employee-details"], ["class", "detail-item", 4, "ngIf"], [1, "job-title"], [1, "detail-item"], [1, "no-employees"], [1, "loading-overlay"], [1, "spinner"]], template: function ViewPartnerModal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, ViewPartnerModal_div_0_Template, 27, 14, "div", 4);
      \u0275\u0275elementStart(1, "app-confirmation-modal", 5, 0);
      \u0275\u0275listener("confirm", function ViewPartnerModal_Template_app_confirmation_modal_confirm_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onConfirmDelete());
      })("cancel", function ViewPartnerModal_Template_app_confirmation_modal_cancel_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancelDelete());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "app-partner-employees-modal", 6, 1);
      \u0275\u0275listener("close", function ViewPartnerModal_Template_app_partner_employees_modal_close_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeesModalClose());
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showModal());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275property("partnerId", (ctx.partner == null ? null : ctx.partner.id) || 0)("partnerName", (ctx.partner == null ? null : ctx.partner.name) || "");
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmationModalComponent, PartnerEmployeesModalComponent, DatePipe], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  padding: 6px;\n}\nmodal-section[_ngcontent-%COMP%] {\n  padding: 30px !important;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  max-width: 700px;\n  width: 100%;\n  max-height: 88vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease-in-out;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(255, 255, 255, 0.6);\n  outline-offset: 2px;\n}\n.close-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 20px 20px 20px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 18px 20px 18px 20px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 18px;\n}\n.modal-footer.rtl-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.partner-info-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 18px;\n  margin-top: 18px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  max-width: 100%;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-title-section[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  text-align: right;\n}\n.partner-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  max-width: 100%;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-name[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.partner-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 16px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.category-0[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.category-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.category-2[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.category-3[_ngcontent-%COMP%] {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.category-4[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.category-5[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 16px;\n  font-size: 0.72rem;\n  font-weight: 500;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 12px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.78rem;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.78rem;\n}\n.modal-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: 10px 14px;\n  background-color: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s ease;\n  margin-bottom: 12px;\n}\n.section-header[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f4;\n  border-color: #d1d5db;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.chevron[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n  color: #6b7280;\n}\n.chevron.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.section-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.employees-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.employee-item[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.employee-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n  transform: translateY(-2px);\n}\n.employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.employee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.employee-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.35;\n  flex: 1;\n}\n.job-title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  padding: 4px 10px;\n  border-radius: 14px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.45px;\n  box-shadow: 0 2px 4px rgba(182, 138, 53, 0.3);\n}\n.employee-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #4b5563;\n  font-size: 0.78rem;\n  padding: 3px 0;\n}\n.detail-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #B68A35;\n  width: 16px;\n  height: 16px;\n}\n.detail-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.no-employees[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 36px 18px;\n  color: #6b7280;\n  background-color: #f9fafb;\n  border-radius: 10px;\n  border: 1.5px dashed #e5e7eb;\n}\n.no-employees[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 20px;\n  width: 48px;\n  height: 48px;\n}\n.no-employees[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  font-weight: 500;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  text-decoration: none;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-text[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 3px solid #e5e7eb;\n  font-style: italic;\n}\n.contacts-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 18px;\n}\n.contacts-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.contacts-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.add-contact-form[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 18px;\n  border: 1px solid #e5e7eb;\n}\n.add-contact-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.78rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.contacts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.contact-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  background-color: white;\n}\n.contact-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n@media (min-width: 769px) {\n  .contact-display[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .contact-info[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .contact-actions[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n.contact-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.contact-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #374151;\n  font-size: 0.78rem;\n  min-width: 0;\n}\n.contact-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.contact-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-field.no-data[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n}\n.contact-field.no-data[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.contact-edit[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 5px;\n  border: 1px solid #e5e7eb;\n}\n.contact-edit[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.no-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 16px;\n  color: #6b7280;\n}\n.no-contacts[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.no-contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 0.9rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 5px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #C62828;\n  color: white;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-display[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  order: -1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-display[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  order: 2;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%]   .partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  text-align: right;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%]   .partner-badges[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-badges[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: calc(90vh);\n    width: 100%;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px 16px 16px 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0 16px 16px 16px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px 16px 16px;\n  }\n  .info-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-display[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: flex-start !important;\n    gap: 12px !important;\n  }\n  .contact-actions[_ngcontent-%COMP%] {\n    width: 100% !important;\n    justify-content: flex-end !important;\n    order: -1 !important;\n    margin-bottom: 8px !important;\n  }\n  .contact-info[_ngcontent-%COMP%] {\n    order: 1 !important;\n    width: 100% !important;\n  }\n}\n@media (max-width: 480px) {\n  .contact-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .contact-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    font-size: 0.75rem;\n    padding: 6px 8px;\n  }\n  .contact-field[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .contact-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: calc(90vh);\n    width: 100vw !important;\n    max-width: 100vw !important;\n  }\n}\n/*# sourceMappingURL=view-partner-modal.component-6GGQ63IZ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPartnerModal, [{
    type: Component,
    args: [{ selector: "app-view-partner-modal", standalone: false, template: `<!-- Modal Overlay -->\r
<div class="modal-overlay" *ngIf="showModal()" (click)="close()">\r
  <div class="modal-container" (click)="$event.stopPropagation()" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
    \r
    <!-- Modal Header -->\r
    <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
      \r
      <button type="button" class="close-btn" (click)="close()" aria-label="Close">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
      <h2 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
        <i class="bi bi-plus-circle me-2"></i>\r
        {{ translate('partners.partner_details') }}\r
      </h2>\r
    </div>\r
\r
    <!-- Modal Body -->\r
    <div class="modal-body" *ngIf="partner">\r
      \r
      <!-- Partner Basic Information -->\r
      <div class="partner-info-section">\r
        <div class="info-header" [class.rtl-layout]="isRTL()">\r
          <div class="partner-title-section">\r
            <h3 class="partner-name">{{ partner.name }}</h3>\r
            <div class="partner-badges" [class.rtl-layout]="isRTL()">\r
              <span class="category-badge category-{{ partner.category }}">\r
                {{ getCategoryLabel(partner.category) }}\r
              </span>\r
              <span class="status-badge" [class]="partner.isActive ? 'status-active' : 'status-inactive'">\r
                {{ partner.isActive ? translate('partners.active') : translate('partners.inactive') }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="info-grid">\r
          <div class="info-item">\r
            <label>{{ translate('partners.sector') }}:</label>\r
            <span>{{ partner.sector }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>{{ translate('partners.country') }}:</label>\r
            <span>{{ partner.country }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>{{ translate('partners.city') }}:</label>\r
            <span>{{ partner.city }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>{{ translate('partners.address') }}:</label>\r
            <span>{{ partner.address }}</span>\r
          </div>\r
          <div class="info-item">\r
            <label>{{ translate('partners.website') }}:</label>\r
            <span class="website-link">\r
              <a [href]="partner.website" target="_blank" rel="noopener noreferrer">\r
                {{ partner.website }}\r
              </a>\r
            </span>\r
          </div>\r
          <div class="info-item">\r
            <label>{{ translate('partners.contract_start_date') }}:</label>\r
            <span>{{ partner.contractStartDate | date:'dd/MM/yyyy' }}</span>\r
          </div>\r
          <div class="info-item" *ngIf="partner.note">\r
            <label>{{ translate('partners.note') }}:</label>\r
            <span class="note-text">{{ partner.note }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Internal Coordinator Section -->\r
      <div class="partner-info-section" *ngIf="partner.internalCoordinatorName || partner.internalCoordinatorEmail || partner.internalCoordinatorPhone || partner.internalCoordinatorJobTitle">\r
        <div class="info-header" [class.rtl-layout]="isRTL()">\r
          <h3 class="partner-name">\r
            <i class="bi bi-person-badge me-2"></i>\r
            {{ translate('partners.internal_coordinator') }}\r
          </h3>\r
        </div>\r
\r
        <div class="info-grid">\r
          <div class="info-item" *ngIf="partner.internalCoordinatorName">\r
            <label>{{ translate('partners.internal_coordinator_name') }}:</label>\r
            <span>{{ partner.internalCoordinatorName }}</span>\r
          </div>\r
          <div class="info-item" *ngIf="partner.internalCoordinatorEmail">\r
            <label>{{ translate('partners.internal_coordinator_email') }}:</label>\r
            <span class="website-link">\r
              <a [href]="'mailto:' + partner.internalCoordinatorEmail" target="_blank" rel="noopener noreferrer">\r
                {{ partner.internalCoordinatorEmail }}\r
              </a>\r
            </span>\r
          </div>\r
          <div class="info-item" *ngIf="partner.internalCoordinatorPhone">\r
            <label>{{ translate('partners.internal_coordinator_phone') }}:</label>\r
            <span class="website-link">\r
              <a [href]="'tel:' + partner.internalCoordinatorPhone" target="_blank" rel="noopener noreferrer">\r
                {{ partner.internalCoordinatorPhone }}\r
              </a>\r
            </span>\r
          </div>\r
          <div class="info-item" *ngIf="partner.internalCoordinatorJobTitle">\r
            <label>{{ translate('partners.internal_coordinator_job_title') }}:</label>\r
            <span>{{ partner.internalCoordinatorJobTitle }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Contacts Section -->\r
      <div class="contacts-section">\r
        <div class="contacts-header">\r
          <h3>{{ translate('partners.contacts') }} ({{ partner.contacts.length || 0 }})</h3>\r
          <button class="btn btn-primary btn-sm" (click)="showAddContactForm.set(true)" [disabled]="loading()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="12" y1="5" x2="12" y2="19"></line>\r
              <line x1="5" y1="12" x2="19" y2="12"></line>\r
            </svg>\r
            {{ translate('partners.add_contact') }}\r
          </button>\r
        </div>\r
\r
        <!-- Add Contact Form -->\r
        <div class="add-contact-form" *ngIf="showAddContactForm()">\r
          <h4>{{ translate('partners.add_new_contact') }}</h4>\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label>{{ translate('partners.email') }} *</label>\r
              <input \r
                type="email" \r
                class="form-control" \r
                [(ngModel)]="newContact().email"\r
                (ngModelChange)="onContactFieldChange()"\r
                placeholder="{{ translate('partners.enter_email') }}"\r
              >\r
            </div>\r
            <div class="form-group">\r
              <label>{{ translate('partners.phone') }}</label>\r
              <input \r
                type="tel" \r
                class="form-control" \r
                [(ngModel)]="newContact().phone"\r
                (ngModelChange)="onContactFieldChange()"\r
                placeholder="{{ translate('partners.enter_phone') }}"\r
              >\r
            </div>\r
            <div class="form-group">\r
              <label>{{ translate('partners.mobile') }}</label>\r
              <input \r
                type="tel" \r
                class="form-control" \r
                [(ngModel)]="newContact().mobile"\r
                (ngModelChange)="onContactFieldChange()"\r
                placeholder="{{ translate('partners.enter_mobile') }}"\r
              >\r
            </div>\r
          </div>\r
          <div class="form-actions">\r
            <button class="btn btn-primary" (click)="addContact()" [disabled]="!contactFormValid() || loading()">\r
              {{ translate('common.add') }}\r
            </button>\r
            <button class="btn btn-secondary" (click)="cancelEdit()">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Contacts List -->\r
        <div class="contacts-list" *ngIf="partner.contacts && partner.contacts.length > 0; else noContacts">\r
          <div class="contact-item" *ngFor="let contact of partner.contacts; let i = index">\r
            \r
            <!-- Display Mode -->\r
            <div class="contact-display" *ngIf="!editingContact() || editingContact()?.id !== contact.id">\r
              <!-- Action Buttons - First on mobile -->\r
              <div class="contact-actions">\r
                <button class="btn btn-sm btn-outline-primary" (click)="editContact(contact)" [disabled]="loading()">\r
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                  </svg>\r
                  {{ translate('common.edit') }}\r
                </button>\r
                <button class="btn btn-sm btn-outline-danger" (click)="deleteContact(contact)" [disabled]="loading()">\r
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <polyline points="3,6 5,6 21,6"></polyline>\r
                    <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"></path>\r
                  </svg>\r
                  {{ translate('common.delete') }}\r
                </button>\r
              </div>\r
              \r
              <!-- Contact Info - Second on mobile -->\r
              <div class="contact-info">\r
                <div class="contact-field" *ngIf="contact.email">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>\r
                    <polyline points="22,6 12,13 2,6"></polyline>\r
                  </svg>\r
                  <span>{{ contact.email }}</span>\r
                </div>\r
                <div class="contact-field" *ngIf="contact.phone">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>\r
                  </svg>\r
                  <span>{{ contact.phone }}</span>\r
                </div>\r
                <div class="contact-field" *ngIf="contact.mobile">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>\r
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>\r
                  </svg>\r
                  <span>{{ contact.mobile }}</span>\r
                </div>\r
                \r
                <!-- Show message when no contact details are available -->\r
                <div class="contact-field no-data" *ngIf="!contact.email && !contact.phone && !contact.mobile">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <circle cx="12" cy="12" r="10"></circle>\r
                    <line x1="12" y1="8" x2="12" y2="12"></line>\r
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>\r
                  </svg>\r
                  <span>{{ translate('partners.no_contact_details') }}</span>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Edit Mode -->\r
            <div class="contact-edit" *ngIf="editingContact() && editingContact()?.id === contact.id">\r
              <h5>{{ translate('partners.edit_contact') }}</h5>\r
              <div class="form-row">\r
                <div class="form-group">\r
                  <label>{{ translate('partners.email') }} *</label>\r
                  <input \r
                    type="email" \r
                    class="form-control" \r
                    [ngModel]="editingContact()?.email"\r
                    (ngModelChange)="onEditingContactFieldChange('email', $event)"\r
                  >\r
                </div>\r
                <div class="form-group">\r
                  <label>{{ translate('partners.phone') }}</label>\r
                  <input \r
                    type="tel" \r
                    class="form-control" \r
                    [ngModel]="editingContact()?.phone"\r
                    (ngModelChange)="onEditingContactFieldChange('phone', $event)"\r
                  >\r
                </div>\r
                <div class="form-group">\r
                  <label>{{ translate('partners.mobile') }}</label>\r
                  <input \r
                    type="tel" \r
                    class="form-control" \r
                    [ngModel]="editingContact()?.mobile"\r
                    (ngModelChange)="onEditingContactFieldChange('mobile', $event)"\r
                  >\r
                </div>\r
              </div>\r
              <div class="form-actions">\r
                <button class="btn btn-primary" (click)="updateContact()" [disabled]="!contactFormValid() || loading()">\r
                  {{ translate('common.save') }}\r
                </button>\r
                <button class="btn btn-secondary" (click)="cancelEdit()">\r
                  {{ translate('common.cancel') }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- No Contacts Template -->\r
        <ng-template #noContacts>\r
          <div class="no-contacts">\r
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
              <circle cx="9" cy="7" r="4"></circle>\r
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
            </svg>\r
            <p>{{ translate('partners.no_contacts') }}</p>\r
            <button class="btn btn-primary" (click)="showAddContactForm.set(true)">\r
              {{ translate('partners.add_first_contact') }}\r
            </button>\r
          </div>\r
        </ng-template>\r
      </div>\r
    </div>\r
\r
    <!-- Partner Employees Section -->\r
    <div class="modal-section p-5\r
    ">\r
      <div class="section-header" (click)="toggleEmployees()">\r
        <h3>\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
            <circle cx="9" cy="7" r="4"></circle>\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
          </svg>\r
          {{ translate('partners.employees') }}\r
        </h3>\r
        <button class="btn btn-primary" (click)="openManageEmployeesModal()" [disabled]="loading()">\r
          \r
          {{ translate('partners.manage_employees') }}\r
        </button>\r
      </div>\r
\r
      <div class="section-content" *ngIf="showEmployees()">\r
        <!-- Loading State -->\r
        <div *ngIf="loadingEmployees()" class="text-center py-4">\r
          <div class="spinner-border" role="status">\r
            <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
          </div>\r
        </div>\r
\r
        <!-- Employees List -->\r
        <div *ngIf="!loadingEmployees()">\r
          <div *ngIf="employees().length > 0; else noEmployees" class="employees-list">\r
            <div *ngFor="let employee of employees()" class="employee-item">\r
              <div class="employee-info">\r
                <div class="employee-header">\r
                  <h4>{{ employee.name }}</h4>\r
                  <span class="job-title" *ngIf="employee.jobTitle">{{ employee.jobTitle }}</span>\r
                </div>\r
                <div class="employee-details">\r
                  <div class="detail-item" *ngIf="employee.email">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>\r
                      <polyline points="22,6 12,13 2,6"></polyline>\r
                    </svg>\r
                    <span>{{ employee.email }}</span>\r
                  </div>\r
                  <div class="detail-item" *ngIf="employee.phoneNumber">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>\r
                    </svg>\r
                    <span>{{ employee.phoneNumber }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- No Employees Template -->\r
          <ng-template #noEmployees>\r
            <div class="no-employees">\r
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">\r
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
                <circle cx="9" cy="7" r="4"></circle>\r
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
              </svg>\r
              <p>{{ translate('partners.no_employees_found') }}</p>\r
            </div>\r
          </ng-template>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
    \r
      <button class="btn btn-secondary" (click)="close()">\r
        {{ translate('common.close') }}\r
      </button>\r
    </div>\r
\r
    <!-- Loading State -->\r
    <div class="loading-overlay" *ngIf="loading()">\r
      <div class="spinner"></div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal \r
  #confirmationModal\r
  [isRTL]="isRTL()"\r
  (confirm)="onConfirmDelete()"\r
  (cancel)="onCancelDelete()">\r
</app-confirmation-modal>\r
\r
<!-- Partner Employees Modal -->\r
<app-partner-employees-modal\r
  #partnerEmployeesModal\r
  [partnerId]="partner?.id || 0"\r
  [partnerName]="partner?.name || ''"\r
  (close)="onEmployeesModalClose()">\r
</app-partner-employees-modal>\r
`, styles: ["/* src/app/components/partners/view-partner-modal/view-partner-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  padding: 6px;\n}\nmodal-section {\n  padding: 30px !important;\n}\n.modal-container {\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  max-width: 700px;\n  width: 100%;\n  max-height: 88vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-start;\n  flex-direction: row-reverse;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease-in-out;\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.6);\n}\n.close-btn:focus-visible {\n  outline: 2px solid rgba(255, 255, 255, 0.6);\n  outline-offset: 2px;\n}\n.close-btn svg {\n  display: block;\n}\n.modal-body {\n  padding: 0 20px 20px 20px;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  padding: 18px 20px 18px 20px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 18px;\n}\n.modal-footer.rtl-footer {\n  justify-content: flex-start;\n}\n.partner-info-section {\n  margin-bottom: 24px;\n}\n.info-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 18px;\n  margin-top: 18px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  max-width: 100%;\n}\n[dir=rtl] .partner-title-section {\n  align-items: flex-end;\n  text-align: right;\n}\n.partner-name {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n  max-width: 100%;\n}\n[dir=rtl] .partner-name {\n  text-align: right;\n}\n.partner-badges {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.category-badge {\n  padding: 3px 10px;\n  border-radius: 16px;\n  font-size: 0.72rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.category-0 {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.category-1 {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.category-2 {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.category-3 {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.category-4 {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.category-5 {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.status-badge {\n  padding: 3px 10px;\n  border-radius: 16px;\n  font-size: 0.72rem;\n  font-weight: 500;\n}\n.status-active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 12px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.info-item label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.78rem;\n}\n.info-item span {\n  color: #6b7280;\n  font-size: 0.78rem;\n}\n.modal-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  padding: 10px 14px;\n  background-color: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  transition: all 0.2s ease;\n  margin-bottom: 12px;\n}\n.section-header:hover {\n  background-color: #f1f3f4;\n  border-color: #d1d5db;\n}\n.section-header h3 {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.section-header svg {\n  color: #6b7280;\n}\n.chevron {\n  transition: transform 0.2s ease;\n  color: #6b7280;\n}\n.chevron.rotated {\n  transform: rotate(180deg);\n}\n.section-content {\n  animation: slideDown 0.3s ease-out;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.employees-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.employee-item {\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 16px;\n  transition: all 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.employee-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.15);\n  transform: translateY(-2px);\n}\n.employee-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.employee-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 6px;\n}\n.employee-header h4 {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.35;\n  flex: 1;\n}\n.job-title {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AF5F 100%);\n  color: white;\n  padding: 4px 10px;\n  border-radius: 14px;\n  font-size: 0.68rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: uppercase;\n  letter-spacing: 0.45px;\n  box-shadow: 0 2px 4px rgba(182, 138, 53, 0.3);\n}\n.employee-details {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.detail-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #4b5563;\n  font-size: 0.78rem;\n  padding: 3px 0;\n}\n.detail-item svg {\n  flex-shrink: 0;\n  color: #B68A35;\n  width: 16px;\n  height: 16px;\n}\n.detail-item span {\n  font-weight: 500;\n}\n.no-employees {\n  text-align: center;\n  padding: 36px 18px;\n  color: #6b7280;\n  background-color: #f9fafb;\n  border-radius: 10px;\n  border: 1.5px dashed #e5e7eb;\n}\n.no-employees svg {\n  color: #d1d5db;\n  margin-bottom: 20px;\n  width: 48px;\n  height: 48px;\n}\n.no-employees p {\n  font-size: 0.95rem;\n  margin: 0;\n  font-weight: 500;\n}\n.website-link a {\n  color: #3b82f6;\n  text-decoration: none;\n}\n.website-link a:hover {\n  text-decoration: underline;\n}\n.note-text {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 3px solid #e5e7eb;\n  font-style: italic;\n}\n.contacts-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 18px;\n}\n.contacts-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.contacts-header h3 {\n  font-size: 1.05rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.add-contact-form {\n  background-color: #f9fafb;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 18px;\n  border: 1px solid #e5e7eb;\n}\n.add-contact-form h4 {\n  margin: 0 0 12px 0;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.78rem;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n}\n.contacts-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.contact-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  background-color: white;\n}\n.contact-display {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 10px;\n}\n@media (min-width: 769px) {\n  .contact-display {\n    flex-direction: row;\n  }\n  .contact-info {\n    order: 1;\n  }\n  .contact-actions {\n    order: 2;\n  }\n}\n.contact-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.contact-field {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #374151;\n  font-size: 0.78rem;\n  min-width: 0;\n}\n.contact-field svg {\n  color: #6b7280;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.contact-field span {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-field.no-data {\n  color: #6b7280;\n  font-style: italic;\n}\n.contact-field.no-data svg {\n  color: #9ca3af;\n}\n.contact-actions {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.contact-edit {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 5px;\n  border: 1px solid #e5e7eb;\n}\n.contact-edit h5 {\n  margin: 0 0 12px 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.no-contacts {\n  text-align: center;\n  padding: 28px 16px;\n  color: #6b7280;\n}\n.no-contacts svg {\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.no-contacts p {\n  margin: 0 0 16px 0;\n  font-size: 0.9rem;\n}\n.btn {\n  padding: 6px 14px;\n  border-radius: 5px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary {\n  background-color: transparent;\n  border: 1px solid #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-outline-primary {\n  background-color: transparent;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-outline-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-outline-danger {\n  background-color: transparent;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-outline-danger:hover:not(:disabled) {\n  background-color: #C62828;\n  color: white;\n}\n.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[dir=rtl] .info-header {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-display {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .form-actions {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-actions {\n  flex-direction: row-reverse;\n  order: -1;\n}\n[dir=rtl] .contact-display {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-info {\n  order: 2;\n}\n.info-header.rtl-layout {\n  justify-content: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout .partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  text-align: right;\n}\n.info-header.rtl-layout .partner-badges {\n  justify-content: flex-end;\n}\n[dir=rtl] .info-header {\n  justify-content: flex-end;\n  text-align: right;\n}\n[dir=rtl] .partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n[dir=rtl] .partner-badges {\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    max-height: calc(90vh);\n    width: 100%;\n  }\n  .modal-header {\n    padding: 16px 16px 16px 16px;\n  }\n  .modal-body {\n    padding: 0 16px 16px 16px;\n  }\n  .modal-footer {\n    padding: 12px 16px 16px 16px;\n  }\n  .info-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .contact-display {\n    flex-direction: column !important;\n    align-items: flex-start !important;\n    gap: 12px !important;\n  }\n  .contact-actions {\n    width: 100% !important;\n    justify-content: flex-end !important;\n    order: -1 !important;\n    margin-bottom: 8px !important;\n  }\n  .contact-info {\n    order: 1 !important;\n    width: 100% !important;\n  }\n}\n@media (max-width: 480px) {\n  .contact-actions {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .contact-actions .btn {\n    flex: 1;\n    min-width: 0;\n    font-size: 0.75rem;\n    padding: 6px 8px;\n  }\n  .contact-field {\n    font-size: 0.8rem;\n  }\n  .contact-field svg {\n    width: 14px;\n    height: 14px;\n  }\n  .modal-container {\n    max-height: calc(90vh);\n    width: 100vw !important;\n    max-width: 100vw !important;\n  }\n}\n/*# sourceMappingURL=view-partner-modal.component-6GGQ63IZ.css.map */\n"] }]
  }], null, { partner: [{
    type: Input
  }], contactsUpdated: [{
    type: Output
  }], partnerUpdated: [{
    type: Output
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], partnerEmployeesModal: [{
    type: ViewChild,
    args: ["partnerEmployeesModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPartnerModal, { className: "ViewPartnerModal", filePath: "src/app/components/partners/view-partner-modal/view-partner-modal.component.ts", lineNumber: 21 });
})();

// src/app/components/partners/partners-list/partners-list.ts
var _c06 = ["addPartnerModal"];
var _c13 = ["editPartnerModal"];
var _c2 = ["editContactsModal"];
var _c3 = ["confirmationModal"];
var _c4 = ["viewPartnerModal"];
function PartnersList_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PartnersList_button_24_Template_button_click_0_listener() {
      const category_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectCategory(category_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate(category_r3.value), " ");
  }
}
function PartnersList_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("common.loading"));
  }
}
function PartnersList_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.try_different_search"));
  }
}
function PartnersList_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.get_started_message"));
  }
}
function PartnersList_div_30_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function PartnersList_div_30_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("common.clear_filters"), " ");
  }
}
function PartnersList_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "div", 55);
    \u0275\u0275elementStart(2, "h3", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275template(5, PartnersList_div_30_span_5_Template, 2, 1, "span", 58)(6, PartnersList_div_30_span_6_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 59);
    \u0275\u0275template(8, PartnersList_div_30_button_8_Template, 2, 1, "button", 60);
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function PartnersList_div_30_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openAddModal());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.no_search_results"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.searchTerm || ctx_r3.selectedCategory !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.searchTerm && ctx_r3.selectedCategory === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.searchTerm || ctx_r3.selectedCategory !== null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("partners.add_partner"), " ");
  }
}
function PartnersList_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 68)(3, "div", 69)(4, "h3", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 71)(7, "span", 72);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74)(11, "div", 75)(12, "div", 76)(13, "span", 77);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 78);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 76)(18, "span", 77);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 78);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 76)(23, "span", 77);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 78);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 76)(28, "span", 77);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 79);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 80)(33, "button", 81);
    \u0275\u0275listener("click", function PartnersList_div_31_div_2_Template_button_click_33_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewPartner(partner_r8.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 82);
    \u0275\u0275element(35, "path", 83)(36, "circle", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "button", 85);
    \u0275\u0275listener("click", function PartnersList_div_31_div_2_Template_button_click_37_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editPartner(partner_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 82);
    \u0275\u0275element(39, "path", 86)(40, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "button", 88);
    \u0275\u0275listener("click", function PartnersList_div_31_div_2_Template_button_click_41_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deletePartner(partner_r8.id, partner_r8.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(42, "svg", 82);
    \u0275\u0275element(43, "path", 89)(44, "path", 90)(45, "path", 91)(46, "path", 92)(47, "path", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const partner_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(partner_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "category-pill-" + partner_r8.category);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getCategoryLabel(partner_r8.category), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.country"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.city"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.sector"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.sector);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("partners.website"));
    \u0275\u0275advance();
    \u0275\u0275property("href", partner_r8.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", partner_r8.website, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r3.translate("common.details"))("data-tooltip", ctx_r3.translate("notifications.view_details"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r3.translate("partners.edit_partner"))("data-tooltip", ctx_r3.translate("partners.edit_partner"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", ctx_r3.translate("partners.delete_partner"))("data-tooltip", ctx_r3.translate("partners.delete_partner"));
  }
}
function PartnersList_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275template(2, PartnersList_div_31_div_2_Template, 48, 18, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.filteredPartners);
  }
}
function PartnersList_li_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 44)(1, "button", 94);
    \u0275\u0275listener("click", function PartnersList_li_55_Template_button_click_1_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange(page_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", page_r10 === ctx_r3.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10);
  }
}
var PartnersList = class _PartnersList {
  partnersService;
  translationService;
  addPartnerModal;
  editPartnerModal;
  editContactsModal;
  confirmationModal;
  viewPartnerModal;
  allPartners = [];
  filteredPartners = [];
  searchTerm = "";
  isLoading = false;
  expandedContacts = {};
  // Pagination
  currentPage = 1;
  pageSize = 9;
  totalCount = 0;
  selectedCategory = null;
  // Category dropdown properties
  categorySearchTerm = "";
  showCategoryDropdown = false;
  filteredCategories = [];
  constructor(partnersService, translationService) {
    this.partnersService = partnersService;
    this.translationService = translationService;
  }
  get categories() {
    return {
      0: this.translate("partners.categories.0"),
      1: this.translate("partners.categories.1"),
      2: this.translate("partners.categories.2"),
      3: this.translate("partners.categories.3"),
      4: this.translate("partners.categories.4"),
      5: this.translate("partners.categories.5")
    };
  }
  get categoriesList() {
    return [
      { key: 0, value: "partners.categories.0" },
      { key: 1, value: "partners.categories.1" },
      { key: 2, value: "partners.categories.2" },
      { key: 3, value: "partners.categories.3" },
      { key: 4, value: "partners.categories.4" },
      { key: 5, value: "partners.categories.5" }
    ];
  }
  ngOnInit() {
    this.loadPartners();
  }
  loadPartners() {
    this.isLoading = true;
    const params = {
      Search: this.searchTerm || void 0,
      PageSize: this.pageSize,
      PageNumber: this.currentPage,
      Category: this.selectedCategory !== null ? this.selectedCategory : void 0
    };
    this.partnersService.getAllPartners(params).subscribe({
      next: (res) => {
        this.allPartners = res.data.items;
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize || 16;
        this.filteredPartners = [...this.allPartners];
        this.allPartners.forEach((partner) => {
          if (!partner.contacts) {
            partner.contacts = [];
          }
        });
        const contactPromises = this.allPartners.map((partner) => {
          return new Promise((resolve) => {
            if (partner.contacts && partner.contacts.length > 0) {
              resolve();
              return;
            }
            this.partnersService.getContacts(partner.id).subscribe({
              next: (contacts) => {
                partner.contacts = contacts || [];
                resolve();
              },
              error: (error) => {
                if (!partner.contacts) {
                  partner.contacts = [];
                }
                resolve();
              }
            });
          });
        });
        Promise.all(contactPromises).then(() => {
          this.filteredPartners = [...this.allPartners];
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadPartners();
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
    this.loadPartners();
  }
  onCategoryChange(category) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.loadPartners();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadPartners();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadPartners();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategory = null;
    this.categorySearchTerm = "";
    this.currentPage = 1;
    this.loadPartners();
  }
  // Category dropdown methods
  onCategorySearch(event) {
  }
  onCategoryFocus() {
    this.filteredCategories = this.categoriesList;
    this.showCategoryDropdown = true;
  }
  onCategoryBlur() {
    setTimeout(() => {
      this.showCategoryDropdown = false;
    }, 200);
  }
  selectCategory(category) {
    if (category === null) {
      this.selectedCategory = null;
      this.categorySearchTerm = "";
    } else {
      this.selectedCategory = category.key;
      this.categorySearchTerm = this.translate(category.value);
    }
    this.filteredCategories = [];
    this.showCategoryDropdown = false;
    this.onCategoryChange(this.selectedCategory);
  }
  getCategoryLabel(category) {
    return this.categories[category] || "Unknown";
  }
  getCategoryLabelAr(category) {
    const arCategories = {
      0: "\u062D\u0643\u0648\u0645\u064A",
      1: "\u0623\u0643\u0627\u062F\u064A\u0645\u064A",
      2: "\u062E\u0627\u0635",
      3: "\u0645\u0646\u0638\u0645\u0629 \u063A\u064A\u0631 \u062D\u0643\u0648\u0645\u064A\u0629",
      4: "\u062F\u0648\u0644\u064A",
      5: "\u0623\u062E\u0631\u0649"
    };
    return arCategories[category] || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
  }
  getContactsDisplay(contacts) {
    if (!contacts || contacts.length === 0) {
      return "";
    }
    const displayContacts = contacts.slice(0, 2);
    const contactStrings = displayContacts.map((contact) => `${contact.email} - ${contact.phone} - ${contact.mobile}`);
    if (contacts.length > 2) {
      return contactStrings.join(" | ") + ` +${contacts.length - 2} more`;
    }
    return contactStrings.join(" | ");
  }
  openAddModal() {
    this.addPartnerModal.open();
  }
  deletePartner(id, name) {
    const confirmData = {
      title: this.translationService.translate("partners.delete_partner"),
      message: this.translationService.translate("partners.confirm_delete_message").replace("%name%", name),
      confirmText: this.translationService.translate("common.delete"),
      cancelText: this.translationService.translate("common.cancel"),
      type: "delete"
    };
    this.confirmationModal.show(confirmData);
    this.confirmationModal.confirm.subscribe(() => {
      this.partnersService.deletePartner(id).subscribe({
        next: (res) => {
          this.allPartners = this.allPartners.filter((p) => p.id !== id);
          this.onSearchChange();
          this.showSuccessMessage(this.translationService.translate("partners.deleted_success"));
        },
        error: (error) => {
          const errorMessage = error.error?.message || error.message || "Unknown error occurred";
          this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
        }
      });
    });
  }
  showSuccessMessage(message) {
    const successData = {
      title: this.translationService.translate("common.success"),
      message,
      confirmText: this.translationService.translate("common.ok"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(successData);
  }
  showErrorMessage(message) {
    const errorData = {
      title: this.translationService.translate("common.error"),
      message,
      confirmText: this.translationService.translate("common.ok"),
      cancelText: "",
      type: "warning"
    };
    this.confirmationModal.show(errorData);
  }
  toggleContacts(partnerId) {
    this.expandedContacts[partnerId] = !this.expandedContacts[partnerId];
  }
  editPartnerContacts(partner, event) {
    if (event) {
      event.stopPropagation();
    }
    this.editContactsModal.show(partner);
  }
  refreshPartnerContacts(partnerId) {
    const partner = this.allPartners.find((p) => p.id === partnerId);
    if (partner) {
      this.partnersService.getContacts(partnerId).subscribe({
        next: (contacts) => {
          partner.contacts = contacts || [];
          const filteredIndex = this.filteredPartners.findIndex((p) => p.id === partnerId);
          if (filteredIndex !== -1) {
            this.filteredPartners[filteredIndex].contacts = contacts || [];
          }
          this.filteredPartners = [...this.filteredPartners];
        },
        error: (error) => {
        }
      });
    }
  }
  debugContacts() {
  }
  editPartner(partner) {
    this.editPartnerModal.open(partner);
  }
  viewPartner(id) {
    this.partnersService.getPartnerById(id).subscribe((response) => {
      if (response.success && response.data) {
        this.viewPartnerModal.open(response.data);
      } else {
        console.error("Failed to load partner:", response.message);
        this.showErrorMessage(this.translate("common.error") + ": " + response.message);
      }
    }, (error) => {
      console.error("Error loading partner:", error);
      this.showErrorMessage(this.translate("common.error") + ": " + (error.error?.message || error.message || "Unknown error"));
    });
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
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
  get Math() {
    return Math;
  }
  static \u0275fac = function PartnersList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersList)(\u0275\u0275directiveInject(PartnersService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnersList, selectors: [["app-partners-list"]], viewQuery: function PartnersList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c06, 5);
      \u0275\u0275viewQuery(_c13, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addPartnerModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editPartnerModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editContactsModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewPartnerModal = _t.first);
    }
  }, standalone: false, decls: 70, vars: 34, consts: [["addPartnerModal", ""], ["editPartnerModal", ""], ["editContactsModal", ""], ["confirmationModal", ""], ["viewPartnerModal", ""], [1, "partners-container", "rounded-5", "custom-scrollbar", 3, "dir"], [1, "partners-header", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "partners-title"], [1, "d-flex", "gap-2"], [1, "btn-icon-with-tooltip", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-section", "mb-3"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "input", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "col-md-3"], [1, "position-relative"], ["type", "text", "readonly", "", 1, "form-control", 3, "ngModelChange", "input", "focus", "blur", "placeholder", "ngModel"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", 1, "dropdown-item", 3, "click"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "empty-state text-center py-5", 4, "ngIf"], ["class", "partners-grid", 4, "ngIf"], [1, "pagination-section"], [1, "pagination-controls", "ltr"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "pagination-info"], ["aria-label", "Partners pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [3, "contactsUpdated"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "empty-state", "text-center", "py-5"], [1, "empty-state-icon", "mb-3"], [1, "empty-state-title", "mb-2"], [1, "empty-state-message", "text-muted", "mb-4"], [4, "ngIf"], [1, "empty-state-actions"], ["class", "btn btn-outline-secondary btn-lg me-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "ms-2", "me-2", 3, "click"], [1, "btn", "btn-outline-secondary", "btn-lg", "me-2", 3, "click"], [1, "partners-grid"], [1, "partners-grid-inner"], ["class", "partner-card", 4, "ngFor", "ngForOf"], [1, "partner-card"], [1, "card-top"], [1, "card-summary-grid"], [1, "summary-item", "name"], [1, "summary-value"], [1, "summary-item", "category"], [1, "summary-pill", "category-pill", 3, "ngClass"], [1, "summary-item", "country"], [1, "card-body-section"], [1, "details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["target", "_blank", "rel", "noopener noreferrer", 1, "detail-link", 3, "href"], [1, "card-actions"], ["type", "button", 1, "icon-btn", "icon-view", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1.5 12s3.5-7.5 10.5-7.5S22.5 12 22.5 12 19 19.5 12 19.5 1.5 12 1.5 12Z"], ["cx", "12", "cy", "12", "r", "3.5"], ["type", "button", 1, "icon-btn", "icon-edit", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.375 2.625a1.25 1.25 0 0 1 1.768 0l1.232 1.232a1.25 1.25 0 0 1 0 1.768l-9.8 9.8a2 2 0 0 1-.848.505l-3.21.94.94-3.21a2 2 0 0 1 .505-.848z"], ["type", "button", 1, "icon-btn", "icon-delete", 3, "click"], ["d", "M3 6h18"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["d", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["d", "M10 11v6"], ["d", "M14 11v6"], [1, "page-link", 3, "click"]], template: function PartnersList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 8);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 11);
      \u0275\u0275element(8, "line", 12)(9, "line", 13);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "input", 18);
      \u0275\u0275listener("ngModelChange", function PartnersList_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchTerm = $event);
      })("input", function PartnersList_Template_input_input_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchInput($event));
      })("keyup.enter", function PartnersList_Template_input_keyup_enter_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 19)(16, "button", 20);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 21)(19, "div", 22)(20, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PartnersList_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.categorySearchTerm, $event) || (ctx.categorySearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function PartnersList_Template_input_input_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCategorySearch($event));
      })("focus", function PartnersList_Template_input_focus_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCategoryFocus());
      })("blur", function PartnersList_Template_input_blur_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCategoryBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 24)(22, "button", 25);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectCategory(null));
      });
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, PartnersList_button_24_Template, 2, 1, "button", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "button", 27);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_26_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(27, "i", 28);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(29, PartnersList_div_29_Template, 4, 1, "div", 29)(30, PartnersList_div_30_Template, 11, 5, "div", 30)(31, PartnersList_div_31_Template, 3, 1, "div", 31);
      \u0275\u0275elementStart(32, "div", 32)(33, "div", 33)(34, "div", 34)(35, "label", 35);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "select", 36);
      \u0275\u0275twoWayListener("ngModelChange", function PartnersList_Template_select_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function PartnersList_Template_select_change_37_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageSizeChange());
      });
      \u0275\u0275elementStart(38, "option", 37);
      \u0275\u0275text(39, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 38);
      \u0275\u0275text(41, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 39);
      \u0275\u0275text(43, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 40);
      \u0275\u0275text(45, "48");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 41)(47, "span");
      \u0275\u0275text(48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "nav", 42)(50, "ul", 43)(51, "li", 44)(52, "button", 45);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange(ctx.currentPage - 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 46);
      \u0275\u0275element(54, "polyline", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(55, PartnersList_li_55_Template, 3, 3, "li", 48);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "li", 44)(57, "button", 45);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange(ctx.currentPage + 1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 46);
      \u0275\u0275element(59, "polyline", 49);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(60, "app-add-partner", null, 0)(62, "app-edit-partner", null, 1);
      \u0275\u0275elementStart(64, "app-edit-contacts-modal", 50, 2);
      \u0275\u0275listener("contactsUpdated", function PartnersList_Template_app_edit_contacts_modal_contactsUpdated_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshPartnerContacts($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "app-partners-confirmation-modal", null, 3);
      \u0275\u0275elementStart(68, "app-view-partner-modal", 50, 4);
      \u0275\u0275listener("contactsUpdated", function PartnersList_Template_app_view_partner_modal_contactsUpdated_68_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.refreshPartnerContacts($event));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("partners.title"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("data-tooltip", ctx.translate("partners.add_partner"))("aria-label", ctx.translate("partners.add_partner"));
      \u0275\u0275advance(8);
      \u0275\u0275property("placeholder", ctx.translate("partners.search_partners"))("ngModel", ctx.searchTerm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", ctx.translate("partners.category_filter"));
      \u0275\u0275twoWayProperty("ngModel", ctx.categorySearchTerm);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showCategoryDropdown)("rtl-dropdown", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("partners.all_categories"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredCategories);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPartners.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredPartners.length > 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.translate("common.page_size"), ":");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate6("", ctx.translate("common.showing"), " ", (ctx.currentPage - 1) * ctx.pageSize + 1, "-", ctx.Math.min(ctx.currentPage * ctx.pageSize, ctx.totalCount), " ", ctx.translate("common.of"), " ", ctx.totalCount, " ", ctx.translate("partners.title"));
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
    }
  }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AddPartner, EditPartner, PartnersConfirmationModalComponent, EditContactsModalComponent, ViewPartnerModal], styles: ['\n\n.partners-container[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  min-height: 100vh;\n}\n.partners-header[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.partners-title[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 1.3rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.search-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.65rem;\n  font-size: 0.78rem;\n  border-radius: 8px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: white !important;\n  outline: white !important;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(216, 170, 42, 0.473);\n}\n.partners-grid[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.partners-grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.partners-grid[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], \n.partners-grid[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], \n.partners-grid[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n.partners-grid[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.partner-card[_ngcontent-%COMP%] {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.partner-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.card-header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #f1f3f4;\n  width: 100%;\n  overflow: hidden;\n  min-width: 0;\n  gap: 0.75rem;\n}\n.partner-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.partner-name[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 0.92rem;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.25;\n  display: block;\n  max-width: 20ch;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.partner-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 0.28rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.64rem;\n  font-weight: 600;\n  display: inline-block;\n  width: fit-content;\n  max-width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.category-badge.category-0[_ngcontent-%COMP%] {\n  background: #34495E;\n  color: #FFFFFF;\n  border: 1px solid #34495E;\n}\n.category-badge.category-1[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: #FFFFFF;\n  border: 1px solid #D4AF5F;\n}\n.category-badge.category-2[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n  color: #5F646D;\n  border: 1px solid #E6D7A2;\n}\n.category-badge.category-3[_ngcontent-%COMP%] {\n  background: #E54B1D;\n  color: #FFFFFF;\n  border: 1px solid #E54B1D;\n}\n.category-badge.category-4[_ngcontent-%COMP%] {\n  background: #B45253;\n  color: #FFFFFF;\n  border: 1px solid #B45253;\n}\n.category-badge.category-5[_ngcontent-%COMP%] {\n  background: #555555;\n  color: #FFFFFF;\n  border: 1px solid #555555;\n}\n.sector-text[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.45rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  display: inline-block;\n  width: fit-content;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.64rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.status-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%);\n  color: #155724;\n  border-color: #c3e6cb;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%);\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n.card-body-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 0.7rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f8f9fa;\n  align-items: center;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-family: "Poppins", sans-serif;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 0.72rem;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family: "Poppins", sans-serif;\n  max-width: 20ch;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #158638;\n  text-decoration: none;\n  word-break: break-all;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #495057;\n}\n.partners-grid[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.partners-grid-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.1rem;\n}\n.partner-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(249, 247, 237, 0.82));\n  border: 1px solid rgba(182, 138, 53, 0.14);\n  border-radius: 18px;\n  padding: 1.1rem;\n  box-shadow: 0 10px 28px rgba(17, 24, 39, 0.08);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: hidden;\n  min-width: 0;\n}\n.partner-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 22px 48px rgba(17, 24, 39, 0.16);\n  border-color: #B68A35;\n}\n.status-flag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  inset-inline-end: 1rem;\n  padding: 0.35rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.12);\n  background: rgba(182, 138, 53, 0.12);\n  border: 1px solid rgba(182, 138, 53, 0.18);\n  color: #8B6B1F;\n  z-index: 2;\n}\n.status-flag.is-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(35, 155, 86, 0.2),\n      rgba(35, 155, 86, 0.08));\n  border-color: rgba(35, 155, 86, 0.24);\n  color: #1f7a4d;\n}\n.status-flag.is-inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 53, 69, 0.2),\n      rgba(220, 53, 69, 0.08));\n  border-color: rgba(220, 53, 69, 0.24);\n  color: #9c1d2a;\n}\n.card-top[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.card-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  min-width: 0;\n}\n.summary-item.name[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.25;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #374151;\n}\n.summary-pill[_ngcontent-%COMP%], \n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.32rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: rgba(55, 65, 81, 0.08);\n  color: #374151;\n  border: 1px solid rgba(55, 65, 81, 0.12);\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.summary-pill.category-pill[_ngcontent-%COMP%] {\n  background: rgba(182, 138, 53, 0.12);\n  border-color: rgba(182, 138, 53, 0.22);\n  color: #8B6B1F;\n}\n.summary-pill.category-pill.category-pill-0[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(52, 73, 94, 0.18),\n      rgba(52, 73, 94, 0.08));\n  border-color: rgba(52, 73, 94, 0.25);\n  color: #213246;\n}\n.summary-pill.category-pill.category-pill-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(204, 143, 85, 0.2),\n      rgba(204, 143, 85, 0.08));\n  border-color: rgba(204, 143, 85, 0.28);\n  color: #6C4527;\n}\n.summary-pill.category-pill.category-pill-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(12, 192, 117, 0.2),\n      rgba(12, 192, 117, 0.08));\n  border-color: rgba(12, 192, 117, 0.28);\n  color: #2F663C;\n}\n.summary-pill.category-pill.category-pill-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.22),\n      rgba(245, 158, 11, 0.1));\n  border-color: rgba(245, 158, 11, 0.28);\n  color: #b45309;\n}\n.summary-pill.category-pill.category-pill-4[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 164, 233, 0.397),\n      rgba(14, 165, 233, 0.1));\n  border-color: rgba(14, 164, 233, 0.616);\n  color: #00608D;\n}\n.summary-pill.category-pill.category-pill-5[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(156, 163, 175, 0.2),\n      rgba(156, 163, 175, 0.08));\n  border-color: rgba(156, 163, 175, 0.26);\n  color: #4b5563;\n}\n.summary-pill.country-pill[_ngcontent-%COMP%] {\n  background: rgba(17, 94, 89, 0.12);\n  border-color: rgba(17, 94, 89, 0.22);\n  color: #0f4a43;\n}\n.status-pill[_ngcontent-%COMP%] {\n  background: rgba(182, 138, 53, 0.12);\n  border-color: rgba(182, 138, 53, 0.22);\n  color: #8B6B1F;\n}\n.status-pill.is-inactive[_ngcontent-%COMP%] {\n  background: rgba(220, 53, 69, 0.12);\n  border-color: rgba(220, 53, 69, 0.22);\n  color: #9c1d2a;\n}\n.card-body-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 0;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.detail-item.full[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.64rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #9ca3af;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n  white-space: normal;\n  word-break: break-word;\n}\n.detail-link[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #0f766e;\n  text-decoration: none;\n  border-bottom: 1px dashed transparent;\n  transition: color 0.2s ease, border-color 0.2s ease;\n  white-space: normal;\n  word-break: break-word;\n}\n.detail-link[_ngcontent-%COMP%]:hover {\n  color: #0d5c55;\n  border-color: rgba(13, 92, 85, 0.4);\n}\n.note-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #6b7280;\n  white-space: normal;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  gap: 0.55rem;\n  padding-top: 0.8rem;\n  border-top: 1px solid rgba(182, 138, 53, 0.18);\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  background: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.1);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  color: #374151;\n}\n.icon-btn[_ngcontent-%COMP%]:hover, \n.icon-btn[_ngcontent-%COMP%]:focus-visible {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 32px rgba(17, 24, 39, 0.18);\n}\n.icon-view[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], \n.icon-view[_ngcontent-%COMP%]:focus-visible   svg[_ngcontent-%COMP%] {\n  color: #0f766e;\n}\n.icon-edit[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #B68A35;\n}\n.icon-edit[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], \n.icon-edit[_ngcontent-%COMP%]:focus-visible   svg[_ngcontent-%COMP%] {\n  color: #8B6B1F;\n}\n.icon-delete[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d22626;\n}\n.icon-delete[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%], \n.icon-delete[_ngcontent-%COMP%]:focus-visible   svg[_ngcontent-%COMP%] {\n  color: #b31818;\n}\n.icon-btn[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%) translateY(6px);\n  padding: 0.35rem 0.6rem;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(27, 29, 33, 0.94),\n      rgba(27, 29, 33, 0.78));\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.24);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover::after, \n.icon-btn[_ngcontent-%COMP%]:hover::before, \n.icon-btn[_ngcontent-%COMP%]:focus-visible::after, \n.icon-btn[_ngcontent-%COMP%]:focus-visible::before {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.35);\n  outline-offset: 2px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n@media (max-width: 1600px) {\n  .partners-grid-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .partners-grid-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 0.85rem;\n  }\n  .card-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.65rem;\n  }\n}\n@media (max-width: 480px) {\n  .partners-grid-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .partner-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.contacts-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.contacts-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #158638 0%,\n      #09365F 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.contacts-header[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.contacts-count[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background: #e9ecef;\n  padding: 0.5rem 0.5rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.contacts-header[_ngcontent-%COMP%]:hover   .contacts-count[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-down[_ngcontent-%COMP%], \n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-up[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease;\n}\n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-up[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.contacts-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.5rem;\n}\n.contacts-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.contacts-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  color: #B68A35;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  min-width: auto;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-right: 0.25rem;\n}\n.contacts-content[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.85rem;\n  line-height: 1.5;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n.contact-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.contact-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.contact-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  min-width: 16px;\n}\n.contact-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.85rem;\n  font-weight: 500;\n  word-break: break-word;\n}\n.more-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  background: #e9ecef;\n  border-radius: 6px;\n  margin-top: 0.5rem;\n}\n.more-contacts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.no-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px dashed #dee2e6;\n}\n.no-contacts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.55rem;\n  flex-direction: row;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f3f4;\n  flex-shrink: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.45rem 0.85rem;\n  transition: all 0.2s ease;\n}\n.card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 0;\n  max-width: 100%;\n  flex: 1 1 auto;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n  border-color: #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #2A2D33;\n  border-color: #2A2D33;\n  color: #FFFFFF;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #d22626;\n  color: #d22626;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #d22626;\n  border-color: #d22626;\n  color: #FFFFFF;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.spinner-border.text-primary[_ngcontent-%COMP%] {\n  color: #B68A35 !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon[_ngcontent-%COMP%] {\n  color: #dee2e6;\n}\n.empty-state-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.empty-state-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-card[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  grid-template-columns: 2fr 1fr;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n@media (max-width: 1200px) {\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 1800px) {\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .partners-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .partners-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .partners-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.85rem;\n  }\n  .partner-card[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n  .card-header-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: flex-start;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 0;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .partners-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .partners-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 1.05rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.72rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.72rem;\n  cursor: pointer;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  padding: 0.35rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  font-size: 0.68rem;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.85rem;\n    align-items: stretch;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.rtl-dropdown[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.rtl-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  text-align: right;\n  direction: rtl;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.no-results[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-results-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.no-results-title[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 600;\n}\n.no-results-message[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n@media (max-width: 1024px) {\n  .partners-grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.85rem;\n  }\n  .partners-grid[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    flex: 0 0 100% !important;\n  }\n}\n@media (max-width: 820px) {\n  .partners-grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.85rem;\n  }\n  .partners-grid[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    flex: 0 0 100% !important;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .partners-grid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.9rem;\n  }\n  .partners-grid[_ngcontent-%COMP%]   .col-lg-3[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \n   .partners-grid[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .partners-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .partner-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 220px;\n  }\n  .partners-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .card-header-section[_ngcontent-%COMP%] {\n    margin-bottom: 0.4rem;\n    padding-bottom: 0.4rem;\n    gap: 0.5rem;\n  }\n  .partner-name[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin: 0 0 0.45rem 0;\n  }\n  .partner-subtitle[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n  }\n  .category-badge[_ngcontent-%COMP%], \n   .status-badge[_ngcontent-%COMP%] {\n    font-size: 0.62rem;\n    padding: 0.28rem 0.6rem;\n  }\n  .sector-text[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.2rem 0.45rem;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n    margin-bottom: 0.6rem;\n    padding: 0.4rem 0;\n  }\n  .info-label[_ngcontent-%COMP%], \n   .info-value[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 0.9rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    row-gap: 0.6rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.65rem;\n    font-size: 0.78rem;\n  }\n  .search-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.45rem 0.85rem;\n    font-size: 0.78rem;\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-edit[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    padding: 0.32rem 0.7rem;\n    font-size: 0.58rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    padding-top: 0.6rem;\n    gap: 0.4rem;\n  }\n  .card-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.7rem;\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=partners-list-CJAG6HAR.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersList, [{
    type: Component,
    args: [{ selector: "app-partners-list", standalone: false, template: `<div class="partners-container rounded-5 custom-scrollbar" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
    <!-- Header Section -->\r
  <div class="partners-header mb-3">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="partners-title">{{ translate('partners.title') }}</h1>\r
      <div class="d-flex gap-2">\r
        <button \r
          class="btn-icon-with-tooltip" \r
          (click)="openAddModal()"\r
          [attr.data-tooltip]="translate('partners.add_partner')"\r
          [attr.aria-label]="translate('partners.add_partner')">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"/>\r
            <line x1="5" y1="12" x2="19" y2="12"/>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
   <!-- Search and Filters -->\r
   <div class="search-section mb-3">\r
     <div class="row">\r
       <div class="col-md-5">\r
         <div class="search-input-wrapper">\r
           <input\r
             type="text"\r
             class="form-control search-input"\r
             [placeholder]="translate('partners.search_partners')"\r
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
       <div class="col-md-3">\r
         <div class="position-relative">\r
           <input\r
             type="text"\r
             class="form-control"\r
             [placeholder]="translate('partners.category_filter')"\r
             [(ngModel)]="categorySearchTerm"\r
             (input)="onCategorySearch($event)"\r
             (focus)="onCategoryFocus()"\r
             (blur)="onCategoryBlur()"\r
             readonly\r
           >\r
           <!-- Category dropdown -->\r
           <div class="dropdown-menu w-100 position-absolute" \r
                [class.show]="showCategoryDropdown"\r
                [class.rtl-dropdown]="isRTL()"\r
                style="max-height: 200px; overflow-y: auto; z-index: 1050;">\r
             <button type="button" \r
                     class="dropdown-item" \r
                     (click)="selectCategory(null)">\r
               {{ translate('partners.all_categories') }}\r
             </button>\r
             <button type="button" \r
                     class="dropdown-item" \r
                     *ngFor="let category of filteredCategories"\r
                     (click)="selectCategory(category)">\r
               {{ translate(category.value) }}\r
             </button>\r
           </div>\r
         </div>\r
       </div>\r
       <div class="col-md-2">\r
         <button class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
           <i class="bi bi-x-circle me-2"></i>\r
           {{ translate('common.clear') }}\r
         </button>\r
       </div>\r
     </div>\r
   </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
    </div>\r
  </div>\r
\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!isLoading && filteredPartners.length === 0" class="empty-state text-center py-5" >\r
    <div class="empty-state-icon mb-3">\r
    </div>\r
    <h3 class="empty-state-title mb-2">{{ translate('partners.no_search_results') }}</h3>\r
    <p class="empty-state-message text-muted mb-4">\r
      <span *ngIf="searchTerm || selectedCategory !== null">{{ translate('partners.try_different_search') }}</span>\r
      <span *ngIf="!searchTerm && selectedCategory === null">{{ translate('partners.get_started_message') }}</span>\r
    </p>\r
    <div class="empty-state-actions">\r
      <button *ngIf="searchTerm || selectedCategory !== null" class="btn btn-outline-secondary btn-lg me-2" (click)="clearFilters()">\r
        {{ translate('common.clear_filters') }}\r
      </button>\r
      <button class="btn btn-primary btn-lg ms-2 me-2" (click)="openAddModal()">\r
        {{ translate('partners.add_partner') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Partners Grid -->\r
  <div *ngIf="!isLoading && filteredPartners.length > 0" class="partners-grid">\r
    <div class="partners-grid-inner">\r
      <div *ngFor="let partner of filteredPartners" class="partner-card">\r
        <!-- <div class="status-flag" [ngClass]="partner.isActive ? 'is-active' : 'is-inactive'">\r
          {{ partner.isActive ? translate('partners.active') : translate('partners.inactive') }}\r
        </div> -->\r
\r
        <div class="card-top">\r
          <div class="card-summary-grid">\r
            <div class="summary-item name">\r
              <!-- <span class="summary-label">{{ translate('partners.name') }}</span> -->\r
              <h3 class="summary-value">{{ partner.name }}</h3>\r
              </div>\r
            <!-- <div class="summary-item status">\r
              <span class="summary-label">{{ translate('partners.status') }}</span>\r
              <span class="status-pill" [ngClass]="partner.isActive ? 'is-active' : 'is-inactive'">\r
                {{ partner.isActive ? translate('partners.active') : translate('partners.inactive') }}\r
              </span>\r
            </div> -->\r
            <div class="summary-item category">\r
              <!-- <span class="summary-label">{{ translate('partners.category') }}</span> -->\r
              <span class="summary-pill category-pill" [ngClass]="'category-pill-' + partner.category">\r
                {{ getCategoryLabel(partner.category) }}\r
              </span>\r
            </div>\r
            <div class="summary-item country">\r
              <!-- <span class="summary-label">{{ translate('partners.country') }}</span> -->\r
              <!-- <span class="summary-pill country-pill">\r
                {{ partner.country }}\r
              </span> -->\r
            </div>\r
            </div>\r
          </div>\r
\r
           <div class="card-body-section">\r
          <div class="details-grid">\r
            <div class="detail-item">\r
              <span class="detail-label">{{ translate('partners.country') }}</span>\r
              <span class="detail-value">{{ partner.country }}</span>\r
            </div>\r
            <div class="detail-item">\r
              <span class="detail-label">{{ translate('partners.city') }}</span>\r
              <span class="detail-value">{{ partner.city }}</span>\r
             </div>\r
            <div class="detail-item">\r
              <span class="detail-label">{{ translate('partners.sector') }}</span>\r
              <span class="detail-value">{{ partner.sector }}</span>\r
             </div>\r
            <div class="detail-item ">\r
              <span class="detail-label">{{ translate('partners.website') }}</span>\r
              <a\r
                class="detail-link"\r
                [href]="partner.website"\r
                target="_blank"\r
                rel="noopener noreferrer">\r
                   {{ partner.website }}\r
                 </a>\r
               </div>\r
            <!-- <div class="detail-item full" *ngIf="partner.note">\r
              <span class="detail-label">{{ translate('partners.note') }}</span>\r
              <span class="detail-value note-text">{{ partner.note }}</span>\r
            </div> -->\r
             </div>\r
             </div>\r
\r
          <div class="card-actions">\r
          <button\r
            type="button"\r
            class="icon-btn icon-view"\r
            (click)="viewPartner(partner.id)"\r
            [attr.aria-label]="translate('common.details')"\r
            [attr.data-tooltip]="translate('notifications.view_details')">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <path d="M1.5 12s3.5-7.5 10.5-7.5S22.5 12 22.5 12 19 19.5 12 19.5 1.5 12 1.5 12Z"/>\r
              <circle cx="12" cy="12" r="3.5"/>\r
            </svg>\r
            </button>\r
          <button\r
            type="button"\r
            class="icon-btn icon-edit"\r
            (click)="editPartner(partner)"\r
            [attr.aria-label]="translate('partners.edit_partner')"\r
            [attr.data-tooltip]="translate('partners.edit_partner')">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
              <path d="M18.375 2.625a1.25 1.25 0 0 1 1.768 0l1.232 1.232a1.25 1.25 0 0 1 0 1.768l-9.8 9.8a2 2 0 0 1-.848.505l-3.21.94.94-3.21a2 2 0 0 1 .505-.848z"/>\r
            </svg>\r
            </button>\r
          <button\r
            type="button"\r
            class="icon-btn icon-delete"\r
            (click)="deletePartner(partner.id, partner.name)"\r
            [attr.aria-label]="translate('partners.delete_partner')"\r
            [attr.data-tooltip]="translate('partners.delete_partner')">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <path d="M3 6h18"/>\r
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>\r
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>\r
              <path d="M10 11v6"/>\r
              <path d="M14 11v6"/>\r
            </svg>\r
            </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination Info and Controls -->\r
  <div class="pagination-section">\r
\r
\r
    <div class="pagination-controls ltr">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
        <select id="pageSize" [(ngModel)]="pageSize" (change)="onPageSizeChange()">\r
          <option value="6">6</option>\r
          <option value="12">12</option>\r
          <option value="24">24</option>\r
          <option value="48">48</option>\r
        </select>\r
\r
      </div>\r
      <div class="pagination-info">\r
        <span>{{ translate('common.showing') }} {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalCount) }} {{ translate('common.of') }} {{ totalCount }} {{ translate('partners.title') }}</span>\r
      </div>\r
\r
      <nav aria-label="Partners pagination">\r
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
\r
  <!-- Add Partner Modal -->\r
  <app-add-partner #addPartnerModal></app-add-partner>\r
\r
  <!-- Edit Partner Modal -->\r
  <app-edit-partner #editPartnerModal></app-edit-partner>\r
\r
  <!-- Edit Contacts Modal -->\r
  <app-edit-contacts-modal #editContactsModal (contactsUpdated)="refreshPartnerContacts($event)"></app-edit-contacts-modal>\r
\r
  <!-- Confirmation Modal -->\r
  <app-partners-confirmation-modal #confirmationModal></app-partners-confirmation-modal>\r
\r
  <!-- View Partner Modal -->\r
  <app-view-partner-modal #viewPartnerModal (contactsUpdated)="refreshPartnerContacts($event)"></app-view-partner-modal>\r
</div>\r
`, styles: ['/* src/app/components/partners/partners-list/partners-list.css */\n.partners-container {\n  padding: 0 1.25rem;\n  min-height: 100vh;\n}\n.partners-header {\n  border-radius: 12px;\n}\n.partners-title {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 1.3rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1rem;\n  border-radius: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.search-section .form-control,\n.search-section .btn {\n  padding: 0.45rem 0.65rem;\n  font-size: 0.78rem;\n  border-radius: 8px;\n}\n.form-control:focus {\n  border-color: white !important;\n  outline: white !important;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 32px;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(216, 170, 42, 0.473);\n}\n.partners-grid {\n  margin-top: 1.25rem;\n}\n.partners-grid .row {\n  display: flex;\n  flex-wrap: wrap;\n}\n.partners-grid .col-lg-3,\n.partners-grid .col-lg-4,\n.partners-grid .col-md-6,\n.partners-grid .col-12 {\n  display: flex;\n  flex-direction: column;\n}\n.partner-card {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.partner-card:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.card-header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #f1f3f4;\n  width: 100%;\n  overflow: hidden;\n  min-width: 0;\n  gap: 0.75rem;\n}\n.partner-info {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.partner-name {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 0.92rem;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.25;\n  display: block;\n  max-width: 20ch;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.partner-subtitle {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 0;\n  overflow: hidden;\n}\n.category-badge {\n  padding: 0.28rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.64rem;\n  font-weight: 600;\n  display: inline-block;\n  width: fit-content;\n  max-width: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.category-badge.category-0 {\n  background: #34495E;\n  color: #FFFFFF;\n  border: 1px solid #34495E;\n}\n.category-badge.category-1 {\n  background: #D4AF5F;\n  color: #FFFFFF;\n  border: 1px solid #D4AF5F;\n}\n.category-badge.category-2 {\n  background: #E6D7A2;\n  color: #5F646D;\n  border: 1px solid #E6D7A2;\n}\n.category-badge.category-3 {\n  background: #E54B1D;\n  color: #FFFFFF;\n  border: 1px solid #E54B1D;\n}\n.category-badge.category-4 {\n  background: #B45253;\n  color: #FFFFFF;\n  border: 1px solid #B45253;\n}\n.category-badge.category-5 {\n  background: #555555;\n  color: #FFFFFF;\n  border: 1px solid #555555;\n}\n.sector-text {\n  color: #495057;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.45rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  display: inline-block;\n  width: fit-content;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  padding: 0.3rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.64rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.status-active {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%);\n  color: #155724;\n  border-color: #c3e6cb;\n}\n.status-inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%);\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n.card-body-section {\n  flex: 1;\n  padding: 0.5rem 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n.info-row {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 0.7rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f8f9fa;\n  align-items: center;\n}\n.info-row:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.info-label {\n  color: #6c757d;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-family: "Poppins", sans-serif;\n}\n.info-value {\n  color: #212529;\n  font-size: 0.72rem;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family: "Poppins", sans-serif;\n  max-width: 20ch;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[dir=rtl] .info-label,\n[dir=rtl] .info-value {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.website-link a {\n  color: #158638;\n  text-decoration: none;\n  word-break: break-all;\n}\n.website-link a:hover {\n  text-decoration: underline;\n}\n.note-text {\n  font-style: italic;\n  color: #495057;\n}\n.partners-grid {\n  margin-top: 2rem;\n}\n.partners-grid-inner {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.1rem;\n}\n.partner-card {\n  position: relative;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.96),\n      rgba(249, 247, 237, 0.82));\n  border: 1px solid rgba(182, 138, 53, 0.14);\n  border-radius: 18px;\n  padding: 1.1rem;\n  box-shadow: 0 10px 28px rgba(17, 24, 39, 0.08);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: hidden;\n  min-width: 0;\n}\n.partner-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 22px 48px rgba(17, 24, 39, 0.16);\n  border-color: #B68A35;\n}\n.status-flag {\n  position: absolute;\n  top: 1rem;\n  inset-inline-end: 1rem;\n  padding: 0.35rem 0.9rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.12);\n  background: rgba(182, 138, 53, 0.12);\n  border: 1px solid rgba(182, 138, 53, 0.18);\n  color: #8B6B1F;\n  z-index: 2;\n}\n.status-flag.is-active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(35, 155, 86, 0.2),\n      rgba(35, 155, 86, 0.08));\n  border-color: rgba(35, 155, 86, 0.24);\n  color: #1f7a4d;\n}\n.status-flag.is-inactive {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 53, 69, 0.2),\n      rgba(220, 53, 69, 0.08));\n  border-color: rgba(220, 53, 69, 0.24);\n  color: #9c1d2a;\n}\n.card-top {\n  position: relative;\n  z-index: 1;\n}\n.card-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n.summary-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  min-width: 0;\n}\n.summary-item.name .summary-value {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.25;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  word-wrap: break-word;\n}\n.summary-label {\n  font-size: 0.62rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #6b7280;\n}\n.summary-value {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #374151;\n}\n.summary-pill,\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.32rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: rgba(55, 65, 81, 0.08);\n  color: #374151;\n  border: 1px solid rgba(55, 65, 81, 0.12);\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.summary-pill.category-pill {\n  background: rgba(182, 138, 53, 0.12);\n  border-color: rgba(182, 138, 53, 0.22);\n  color: #8B6B1F;\n}\n.summary-pill.category-pill.category-pill-0 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(52, 73, 94, 0.18),\n      rgba(52, 73, 94, 0.08));\n  border-color: rgba(52, 73, 94, 0.25);\n  color: #213246;\n}\n.summary-pill.category-pill.category-pill-1 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(204, 143, 85, 0.2),\n      rgba(204, 143, 85, 0.08));\n  border-color: rgba(204, 143, 85, 0.28);\n  color: #6C4527;\n}\n.summary-pill.category-pill.category-pill-2 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(12, 192, 117, 0.2),\n      rgba(12, 192, 117, 0.08));\n  border-color: rgba(12, 192, 117, 0.28);\n  color: #2F663C;\n}\n.summary-pill.category-pill.category-pill-3 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(245, 158, 11, 0.22),\n      rgba(245, 158, 11, 0.1));\n  border-color: rgba(245, 158, 11, 0.28);\n  color: #b45309;\n}\n.summary-pill.category-pill.category-pill-4 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(14, 164, 233, 0.397),\n      rgba(14, 165, 233, 0.1));\n  border-color: rgba(14, 164, 233, 0.616);\n  color: #00608D;\n}\n.summary-pill.category-pill.category-pill-5 {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(156, 163, 175, 0.2),\n      rgba(156, 163, 175, 0.08));\n  border-color: rgba(156, 163, 175, 0.26);\n  color: #4b5563;\n}\n.summary-pill.country-pill {\n  background: rgba(17, 94, 89, 0.12);\n  border-color: rgba(17, 94, 89, 0.22);\n  color: #0f4a43;\n}\n.status-pill {\n  background: rgba(182, 138, 53, 0.12);\n  border-color: rgba(182, 138, 53, 0.22);\n  color: #8B6B1F;\n}\n.status-pill.is-inactive {\n  background: rgba(220, 53, 69, 0.12);\n  border-color: rgba(220, 53, 69, 0.22);\n  color: #9c1d2a;\n}\n.card-body-section {\n  position: relative;\n  z-index: 1;\n  padding: 0;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.detail-item.full {\n  grid-column: 1 / -1;\n}\n.detail-label {\n  font-size: 0.64rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #9ca3af;\n}\n.detail-value {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n  white-space: normal;\n  word-break: break-word;\n}\n.detail-link {\n  font-size: 0.76rem;\n  font-weight: 600;\n  color: #0f766e;\n  text-decoration: none;\n  border-bottom: 1px dashed transparent;\n  transition: color 0.2s ease, border-color 0.2s ease;\n  white-space: normal;\n  word-break: break-word;\n}\n.detail-link:hover {\n  color: #0d5c55;\n  border-color: rgba(13, 92, 85, 0.4);\n}\n.note-text {\n  font-style: italic;\n  color: #6b7280;\n  white-space: normal;\n}\n.card-actions {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  gap: 0.55rem;\n  padding-top: 0.8rem;\n  border-top: 1px solid rgba(182, 138, 53, 0.18);\n}\n.icon-btn {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  border: 1px solid rgba(17, 24, 39, 0.08);\n  background: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(17, 24, 39, 0.1);\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease,\n    background 0.2s ease;\n}\n.icon-btn svg {\n  width: 16px;\n  height: 16px;\n  color: #374151;\n}\n.icon-btn:hover,\n.icon-btn:focus-visible {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 32px rgba(17, 24, 39, 0.18);\n}\n.icon-view:hover svg,\n.icon-view:focus-visible svg {\n  color: #0f766e;\n}\n.icon-edit svg {\n  color: #B68A35;\n}\n.icon-edit:hover svg,\n.icon-edit:focus-visible svg {\n  color: #8B6B1F;\n}\n.icon-delete svg {\n  color: #d22626;\n}\n.icon-delete:hover svg,\n.icon-delete:focus-visible svg {\n  color: #b31818;\n}\n.icon-btn::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%) translateY(6px);\n  padding: 0.35rem 0.6rem;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(27, 29, 33, 0.94),\n      rgba(27, 29, 33, 0.78));\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.24);\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.icon-btn:hover::after,\n.icon-btn:hover::before,\n.icon-btn:focus-visible::after,\n.icon-btn:focus-visible::before {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n.icon-btn:focus-visible {\n  outline: 2px solid rgba(182, 138, 53, 0.35);\n  outline-offset: 2px;\n}\n[dir=rtl] .card-actions {\n  justify-content: center !important;\n}\n@media (max-width: 1600px) {\n  .partners-grid-inner {\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .partners-grid-inner {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 0.85rem;\n  }\n  .card-summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .details-grid {\n    grid-template-columns: 1fr;\n    gap: 0.65rem;\n  }\n}\n@media (max-width: 480px) {\n  .partners-grid-inner {\n    grid-template-columns: 1fr;\n  }\n  .partner-card {\n    padding: 1rem;\n  }\n  .card-actions {\n    justify-content: center;\n  }\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.contacts-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.contacts-header::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #158638 0%,\n      #09365F 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.contacts-header:hover {\n  background-color: #f8f9fa;\n}\n.contacts-count {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background: #e9ecef;\n  padding: 0.5rem 0.5rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.contacts-header:hover .contacts-count {\n  background: #B68A35;\n  color: white;\n}\n.contacts-header .bi-chevron-down,\n.contacts-header .bi-chevron-up {\n  color: #6c757d;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease;\n}\n.contacts-header .bi-chevron-up {\n  transform: rotate(180deg);\n}\n.contacts-header .d-flex {\n  align-items: center;\n  gap: 0.5rem;\n}\n.contacts-header i {\n  font-size: 1rem;\n}\n.contacts-header span {\n  color: #495057;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.contacts-header .btn-outline-primary {\n  border-color: #B68A35;\n  color: #B68A35;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  min-width: auto;\n}\n.contacts-header .btn-outline-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.contacts-header .btn-outline-primary i {\n  font-size: 0.75rem;\n  margin-right: 0.25rem;\n}\n.contacts-content {\n  color: #495057;\n  font-size: 0.85rem;\n  line-height: 1.5;\n  animation: slideDown 0.3s ease-out;\n  overflow: hidden;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n.contact-item {\n  background: white;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.contact-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.contact-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.contact-row i {\n  color: #6c757d;\n  font-size: 0.8rem;\n  min-width: 16px;\n}\n.contact-row span {\n  color: #495057;\n  font-size: 0.85rem;\n  font-weight: 500;\n  word-break: break-word;\n}\n.more-contacts {\n  text-align: center;\n  padding: 0.5rem;\n  background: #e9ecef;\n  border-radius: 6px;\n  margin-top: 0.5rem;\n}\n.more-contacts span {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.no-contacts {\n  text-align: center;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px dashed #dee2e6;\n}\n.no-contacts span {\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.card-actions {\n  display: flex;\n  gap: 0.55rem;\n  flex-direction: row;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid #f1f3f4;\n  flex-shrink: 0;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 0.78rem;\n  padding: 0.45rem 0.85rem;\n  transition: all 0.2s ease;\n}\n.card-actions .btn {\n  min-width: 0;\n  max-width: 100%;\n  flex: 1 1 auto;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-secondary {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n  border-color: #1B1D21;\n}\n.btn-secondary:hover {\n  background-color: #2A2D33;\n  border-color: #2A2D33;\n  color: #FFFFFF;\n}\n.btn-danger {\n  background-color: #ffffff;\n  border: 1px solid #d22626;\n  color: #d22626;\n}\n.btn-danger:hover {\n  background-color: #d22626;\n  border-color: #d22626;\n  color: #FFFFFF;\n}\n.btn-edit {\n  background-color: #ffffff;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-edit:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.spinner-border.text-primary {\n  color: #B68A35 !important;\n}\n.empty-state {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon {\n  color: #dee2e6;\n}\n.empty-state-title {\n  color: #495057;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .empty-state-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.empty-state-message {\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto;\n}\n[dir=rtl] .partner-card {\n  text-align: right;\n}\n[dir=rtl] .info-row {\n  grid-template-columns: 2fr 1fr;\n}\n[dir=rtl] .card-actions {\n  justify-content: center !important;\n}\n[dir=rtl] .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-input {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n@media (max-width: 1200px) {\n  .card-actions {\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 1800px) {\n  .card-actions {\n    flex-direction: row;\n    gap: 0.5rem;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 768px) {\n  .partners-container {\n    padding: 0.75rem;\n  }\n  .partners-header {\n    padding: 0.75rem;\n  }\n  .partners-title {\n    font-size: 1.1rem;\n  }\n  .search-section {\n    padding: 0.85rem;\n  }\n  .partner-card {\n    padding: 0.9rem;\n  }\n  .card-header-section {\n    flex-direction: column;\n    gap: 0.7rem;\n    align-items: flex-start;\n  }\n  .status-badge {\n    align-self: flex-start;\n  }\n  .info-row {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value {\n    text-align: left;\n    margin-left: 0;\n  }\n  .card-actions {\n    flex-direction: row;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .partners-header .d-flex {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .partners-title {\n    text-align: center;\n    font-size: 1.05rem;\n  }\n  .btn {\n    text-align: center;\n  }\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n  padding: 1rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.pagination-info {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.page-size-control label {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.72rem;\n}\n.page-size-control select {\n  padding: 0.35rem 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.72rem;\n  cursor: pointer;\n}\n.page-size-control select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 34px;\n  height: 34px;\n  padding: 0.35rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  font-size: 0.68rem;\n}\n.page-link:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active .page-link {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pagination-controls {\n    flex-direction: column;\n    gap: 0.85rem;\n    align-items: stretch;\n  }\n  .pagination {\n    justify-content: center;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n}\n.rtl-dropdown {\n  direction: rtl;\n  text-align: right;\n}\n.rtl-dropdown .dropdown-item {\n  text-align: right;\n  direction: rtl;\n}\n.rtl-dropdown::-webkit-scrollbar {\n  width: 8px;\n}\n.rtl-dropdown::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.rtl-dropdown::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.rtl-dropdown::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.no-results {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-results-icon {\n  color: #6c757d;\n}\n.no-results-title {\n  color: #5F646D;\n  font-weight: 600;\n}\n.no-results-message {\n  color: #6c757d;\n}\n@media (max-width: 1024px) {\n  .partners-grid .row {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 0.85rem;\n  }\n  .partners-grid .col-lg-3,\n  .partners-grid .col-lg-4,\n  .partners-grid .col-md-6,\n  .partners-grid .col-12 {\n    width: 100% !important;\n    max-width: 100% !important;\n    flex: 0 0 100% !important;\n  }\n}\n@media (max-width: 820px) {\n  .partners-grid .row {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 0.85rem;\n  }\n  .partners-grid .col-lg-3,\n  .partners-grid .col-lg-4,\n  .partners-grid .col-md-6,\n  .partners-grid .col-12 {\n    width: 100% !important;\n    max-width: 100% !important;\n    flex: 0 0 100% !important;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .partners-grid .row {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.9rem;\n  }\n  .partners-grid .col-lg-3,\n  .partners-grid .col-lg-4,\n  .partners-grid .col-md-6,\n  .partners-grid .col-12 {\n    width: 100% !important;\n    max-width: 100% !important;\n  }\n  .partners-container {\n    padding: 1rem;\n  }\n  .partner-card {\n    padding: 1rem;\n    min-height: 220px;\n  }\n  .partners-title {\n    font-size: 1.2rem;\n  }\n  .card-header-section {\n    margin-bottom: 0.4rem;\n    padding-bottom: 0.4rem;\n    gap: 0.5rem;\n  }\n  .partner-name {\n    font-size: 0.95rem;\n    margin: 0 0 0.45rem 0;\n  }\n  .partner-subtitle {\n    gap: 0.4rem;\n  }\n  .category-badge,\n  .status-badge {\n    font-size: 0.62rem;\n    padding: 0.28rem 0.6rem;\n  }\n  .sector-text {\n    font-size: 0.7rem;\n    padding: 0.2rem 0.45rem;\n  }\n  .info-row {\n    gap: 0.6rem;\n    margin-bottom: 0.6rem;\n    padding: 0.4rem 0;\n  }\n  .info-label,\n  .info-value {\n    font-size: 0.7rem;\n  }\n  .search-section {\n    padding: 0.9rem;\n  }\n  .search-section .row {\n    row-gap: 0.6rem;\n  }\n  .search-section .form-label {\n    font-size: 0.72rem;\n  }\n  .search-section .form-control {\n    padding: 0.4rem 0.65rem;\n    font-size: 0.78rem;\n  }\n  .search-section .btn {\n    padding: 0.45rem 0.85rem;\n    font-size: 0.78rem;\n  }\n  .btn-primary,\n  .btn-edit,\n  .btn-secondary {\n    padding: 0.32rem 0.7rem;\n    font-size: 0.58rem;\n  }\n  .card-actions {\n    padding-top: 0.6rem;\n    gap: 0.4rem;\n  }\n  .card-actions .btn {\n    padding: 0.35rem 0.7rem;\n    font-size: 0.7rem;\n  }\n}\n/*# sourceMappingURL=partners-list-CJAG6HAR.css.map */\n'] }]
  }], () => [{ type: PartnersService }, { type: TranslationService }], { addPartnerModal: [{
    type: ViewChild,
    args: ["addPartnerModal"]
  }], editPartnerModal: [{
    type: ViewChild,
    args: ["editPartnerModal"]
  }], editContactsModal: [{
    type: ViewChild,
    args: ["editContactsModal"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], viewPartnerModal: [{
    type: ViewChild,
    args: ["viewPartnerModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnersList, { className: "PartnersList", filePath: "src/app/components/partners/partners-list/partners-list.ts", lineNumber: 17 });
})();

// src/app/components/partners/partners-routing-module.ts
var routes = [
  {
    path: "",
    component: PartnersList
  }
];
var PartnersRoutingModule = class _PartnersRoutingModule {
  static \u0275fac = function PartnersRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PartnersRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/partners/partners-module.ts
var PartnersModule = class _PartnersModule {
  static \u0275fac = function PartnersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PartnersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    PartnersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersModule, [{
    type: NgModule,
    args: [{
      declarations: [
        PartnersList,
        AddPartner,
        EditPartner,
        PartnersConfirmationModalComponent,
        EditContactsModalComponent,
        ViewPartnerModal,
        PartnerEmployeesModalComponent
      ],
      imports: [
        CommonModule,
        PartnersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ConfirmationModalComponent
      ]
    }]
  }], null, null);
})();
export {
  PartnersModule
};
//# sourceMappingURL=chunk-WIR4VCKB.js.map
