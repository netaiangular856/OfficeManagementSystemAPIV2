import {
  ConfirmationModalComponent
} from "./chunk-DMPS4VRK.js";
import {
  RouterModule
} from "./chunk-7FVPEV7K.js";
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
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FCZOOXRM.js";
import {
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Observable,
  Output,
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
} from "./chunk-JZGXYUE5.js";
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
    console.log("API Call - Delete Contact:", {
      url,
      partnerId,
      contactId,
      fullUrl: `${environment.apiBaseUrl}/Partners/${partnerId}/contacts/${contactId}`
    });
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
      console.log("CountriesNow cities response:", response);
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
    console.log("Searching cities for country:", countryName, "with term:", searchTerm);
    return this.getCitiesByCountry(countryName).pipe(map((cities) => {
      const term = searchTerm.toLowerCase();
      const filteredCities = cities.filter((city) => city.name.toLowerCase().includes(term)).slice(0, 10);
      console.log("Filtered cities:", filteredCities);
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
    console.log("Global city search for term:", searchTerm);
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
              console.log("Global search results:", uniqueCities);
              observer.next(uniqueCities);
              observer.complete();
            }
          },
          error: (error) => {
            completed++;
            if (completed === total) {
              console.log("Global search completed with errors:", allCities);
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
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "polyline", 15)(2, "path", 16)(3, "line", 17)(4, "line", 18);
    \u0275\u0275elementEnd();
  }
}
function PartnersConfirmationModalComponent_div_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "path", 19)(2, "line", 20)(3, "line", 21);
    \u0275\u0275elementEnd();
  }
}
function PartnersConfirmationModalComponent_div_0__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 14);
    \u0275\u0275element(1, "circle", 22)(2, "line", 23)(3, "line", 24);
    \u0275\u0275elementEnd();
  }
}
function PartnersConfirmationModalComponent_div_0_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
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
    \u0275\u0275template(7, PartnersConfirmationModalComponent_div_0__svg_svg_7_Template, 5, 0, "svg", 8)(8, PartnersConfirmationModalComponent_div_0__svg_svg_8_Template, 4, 0, "svg", 8)(9, PartnersConfirmationModalComponent_div_0__svg_svg_9_Template, 4, 0, "svg", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11);
    \u0275\u0275template(15, PartnersConfirmationModalComponent_div_0_button_15_Template, 2, 1, "button", 12);
    \u0275\u0275elementStart(16, "button", 13);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnersConfirmationModalComponent, selectors: [["app-partners-confirmation-modal"]], inputs: { data: "data", isRTL: "isRTL", isVisible: "isVisible" }, outputs: { confirm: "confirm", cancel: "cancel" }, standalone: false, decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "dir"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "modal-title"], [1, "modal-message"], [1, "modal-actions"], ["class", "btn btn-cancel", 3, "click", 4, "ngIf"], [1, "btn", "btn-confirm", 3, "click"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], [1, "btn", "btn-cancel", 3, "click"]], template: function PartnersConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PartnersConfirmationModalComponent_div_0_Template, 18, 12, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  text-align: center;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon-delete[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.icon-info[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center !important;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  color: white;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-message[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partners-confirmation-modal.component-Z5SRT2R2.css.map */"] });
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
          <svg *ngIf="data.type === 'info'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
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
  `, styles: ["/* angular:styles/component:css;f7c8a607d64c46eaca6b3125445b4c8c630ac7138a24f0f71e7613b82d8df993;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/partners/partners-confirmation-modal/partners-confirmation-modal.component.ts */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n  text-align: center;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n}\n.modal-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon-delete {\n  color: #dc2626;\n}\n.icon-warning {\n  color: #f59e0b;\n}\n.icon-info {\n  color: #3b82f6;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message {\n  color: #6b7280;\n  text-align: center !important;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm {\n  color: white;\n}\n.btn-delete {\n  background: #dc2626;\n}\n.btn-delete:hover {\n  background: #b91c1c;\n}\n.btn-warning {\n  background: #f59e0b;\n}\n.btn-warning:hover {\n  background: #d97706;\n}\n.btn-info {\n  background: #3b82f6;\n}\n.btn-info:hover {\n  background: #2563eb;\n}\n.modal-container[dir=rtl] .close-btn {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl] .modal-title,\n.modal-container[dir=rtl] .modal-message {\n  text-align: center !important;\n}\n@media (max-width: 480px) {\n  .modal-container {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partners-confirmation-modal.component-Z5SRT2R2.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnersConfirmationModalComponent, { className: "PartnersConfirmationModalComponent", filePath: "src/app/components/partners/partners-confirmation-modal/partners-confirmation-modal.component.ts", lineNumber: 239 });
})();

// src/app/components/partners/add-partner/add-partner.ts
var _c0 = ["confirmationModal"];
function AddPartner_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "option", 50);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "button", 51);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "small", 55);
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
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function AddPartner_button_49_Template_button_click_0_listener() {
      const city_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity(city_r7));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddPartner_button_49_small_4_Template, 2, 1, "small", 54);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
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
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("status"), " ");
  }
}
function AddPartner_i_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
function AddPartner_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
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
  open() {
    this.isOpen = true;
    this.addForm.reset();
  }
  close() {
    this.isOpen = false;
    this.addForm.reset();
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
  }
  // City search methods
  onCitySearch(event) {
    const searchTerm = event.target.value;
    this.citySearchTerm = searchTerm;
    this.selectedCity = null;
    this.addForm.patchValue({ city: searchTerm });
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
    this.addForm.patchValue({ city: city.name });
    this.filteredCities = [];
    this.showCityDropdown = false;
  }
  initializeForm() {
    this.addForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      category: ["", Validators.required],
      sector: ["", [Validators.required, Validators.minLength(2)]],
      country: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      note: [""],
      website: ["", [Validators.required, Validators.minLength(5)]],
      address: ["", [Validators.required, Validators.minLength(5)]],
      contractStartDate: ["", [Validators.required]],
      status: ["", Validators.required]
    });
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
      return `Maximum length is ${requiredLength} characters`;
    }
    if (control.errors["pastDate"]) {
      return this.translate("partners.future_date_required");
    }
    return "Invalid field";
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
      status: parseInt(formValue.status)
    };
    console.log("Submitting partner data:", partnerData);
    this.partnersService.addPartner(partnerData).subscribe({
      next: (res) => {
        console.log("Partner created successfully:", res);
        this.isSubmitting = false;
        this.showSuccessMessage(this.translate("partners.created_success"));
        this.close();
        this.addForm.reset();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      error: (error) => {
        console.error("Error creating partner:", error);
        this.isSubmitting = false;
        this.handleApiErrors(error);
      }
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
      alert(this.translationService.translate("common.error") + ": " + errorMessage);
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
      "Status": "status"
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
  }, standalone: false, decls: 97, vars: 86, consts: [["confirmationModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "bi", "bi-plus-circle", "me-2"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "category", 1, "form-label"], ["id", "category", "formControlName", "category", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sector", 1, "form-label"], ["type", "text", "id", "sector", "formControlName", "sector", 1, "form-control", 3, "placeholder"], ["for", "country", 1, "form-label"], [1, "position-relative"], ["type", "text", "id", "country", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["for", "city", 1, "form-label"], ["type", "text", "id", "city", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "col-12", "mb-3"], ["for", "note", 1, "form-label"], ["id", "note", "rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["for", "website", 1, "form-label"], ["type", "url", "id", "website", "formControlName", "website", 1, "form-control", 3, "placeholder"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "contractStartDate", 1, "form-label"], ["type", "date", "id", "contractStartDate", "formControlName", "contractStartDate", 1, "form-control", 3, "placeholder"], ["for", "status", 1, "form-label"], ["id", "status", "formControlName", "status", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "0"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "bi bi-check-circle me-2", 4, "ngIf"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "invalid-feedback"], [3, "value"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "d-flex", "flex-column"], [1, "fw-medium"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], [1, "bi", "bi-check-circle", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddPartner_Template(rf, ctx) {
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
      \u0275\u0275elementStart(88, "div", 44)(89, "button", 45);
      \u0275\u0275template(90, AddPartner_i_90_Template, 1, 0, "i", 46)(91, AddPartner_span_91_Template, 1, 0, "span", 47);
      \u0275\u0275text(92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 48);
      \u0275\u0275listener("click", function AddPartner_Template_button_click_93_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(95, "app-partners-confirmation-modal", null, 0);
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.addForm.invalid || ctx.isSubmitting);
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PartnersConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #E6D7A2;\n  padding: 1.5rem 2rem;\n  gap: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  border-color: #B68A35 !important;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=add-partner-AQPXYUZE.css.map */"] });
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
        <!-- Modal Footer -->\r
        <div class="modal-footer">\r
          \r
          <button type="submit" class="btn btn-primary" [disabled]="addForm.invalid || isSubmitting">\r
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
`, styles: ["/* src/app/components/partners/add-partner/add-partner.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n.modal-container {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open .modal-container {\n  transform: scale(1) translateY(0);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #E6D7A2;\n  padding: 1.5rem 2rem;\n  gap: 1rem;\n}\n.form-label {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control,\n.form-select {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary {\n  background-color: #B68A35 !important;\n  color: #FFFFFF;\n  border-color: #B68A35 !important;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n@media (max-width: 768px) {\n  .modal-body {\n    padding: 1.5rem;\n  }\n  .modal-footer {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog {\n    margin: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-title {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row:last-child {\n  margin-bottom: 0;\n}\n.contact-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .form-label {\n  text-align: right;\n}\n[dir=rtl] .btn-close {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=add-partner-AQPXYUZE.css.map */\n"] }]
  }], () => [{ type: PartnersService }, { type: FormBuilder }, { type: TranslationService }, { type: CountriesService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPartner, { className: "AddPartner", filePath: "src/app/components/partners/add-partner/add-partner.ts", lineNumber: 16 });
})();

// src/app/components/partners/edit-partner/edit-partner.ts
var _c02 = ["confirmationModal"];
function EditPartner_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("name"), " ");
  }
}
function EditPartner_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("name"), " ");
  }
}
function EditPartner_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
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
function EditPartner_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("category"), " ");
  }
}
function EditPartner_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("category"), " ");
  }
}
function EditPartner_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("sector"), " ");
  }
}
function EditPartner_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("sector"), " ");
  }
}
function EditPartner_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function EditPartner_button_40_Template_button_click_0_listener() {
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
function EditPartner_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("country"), " ");
  }
}
function EditPartner_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("country"), " ");
  }
}
function EditPartner_button_49_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const city_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", city_r7.country, " ");
  }
}
function EditPartner_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function EditPartner_button_49_Template_button_click_0_listener() {
      const city_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCity(city_r7));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, EditPartner_button_49_small_4_Template, 2, 1, "small", 53);
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
function EditPartner_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("city"), " ");
  }
}
function EditPartner_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("city"), " ");
  }
}
function EditPartner_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("note"), " ");
  }
}
function EditPartner_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("note"), " ");
  }
}
function EditPartner_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("website"), " ");
  }
}
function EditPartner_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("website"), " ");
  }
}
function EditPartner_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("address"), " ");
  }
}
function EditPartner_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("address"), " ");
  }
}
function EditPartner_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("contractStartDate"), " ");
  }
}
function EditPartner_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("contractStartDate"), " ");
  }
}
function EditPartner_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("status"), " ");
  }
}
function EditPartner_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("status"), " ");
  }
}
var EditPartner = class _EditPartner {
  partnersService;
  fb;
  translationService;
  countriesService;
  confirmationModal;
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
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      category: ["", Validators.required],
      sector: ["", [Validators.required, Validators.minLength(2)]],
      country: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", [Validators.required, Validators.minLength(2)]],
      note: ["", [Validators.minLength(5)]],
      website: ["", [Validators.required, Validators.minLength(5)]],
      address: ["", [Validators.required, Validators.minLength(5)]],
      contractStartDate: ["", [Validators.required]],
      status: ["", Validators.required]
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
      // Remove validation since contacts section is commented out
      phone: [""],
      // Remove validation since contacts section is commented out
      mobile: [""]
      // Remove validation since contacts section is commented out
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
      status: partner.isActive ? 1 : 0
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
      isActive: formValue.status === 1
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
      alert(this.translationService.translate("common.error") + ": " + errorMessage);
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
      "Status": "status"
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
  static \u0275fac = function EditPartner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPartner)(\u0275\u0275directiveInject(PartnersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(CountriesService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPartner, selectors: [["app-edit-partner"]], viewQuery: function EditPartner_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 96, vars: 83, consts: [["confirmationModal", ""], [1, "modal-overlay", 3, "click"], [1, "modal-container"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-title"], [1, "bi", "bi-pencil-square", "me-2"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "editName", 1, "form-label"], ["type", "text", "id", "editName", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "editCategory", 1, "form-label"], ["id", "editCategory", "formControlName", "category", 1, "form-select"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "editSector", 1, "form-label"], ["type", "text", "id", "editSector", "formControlName", "sector", 1, "form-control", 3, "placeholder"], ["for", "editCountry", 1, "form-label"], [1, "position-relative"], ["type", "text", "id", "editCountry", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["for", "editCity", 1, "form-label"], ["type", "text", "id", "editCity", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "value", "placeholder"], [1, "col-12", "mb-3"], ["for", "editNote", 1, "form-label"], ["id", "editNote", "rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["for", "editWebsite", 1, "form-label"], ["type", "url", "id", "editWebsite", "formControlName", "website", 1, "form-control", 3, "placeholder"], ["for", "editAddress", 1, "form-label"], ["type", "text", "id", "editAddress", "formControlName", "address", 1, "form-control", 3, "placeholder"], ["for", "editContractStartDate", 1, "form-label"], ["type", "date", "id", "editContractStartDate", "formControlName", "contractStartDate", 1, "form-control", 3, "placeholder"], ["for", "editStatus", 1, "form-label"], ["id", "editStatus", "formControlName", "status", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "0"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "bi", "bi-check-circle", "me-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [3, "value"], ["type", "button", 1, "dropdown-item", 3, "click"], [1, "d-flex", "flex-column"], [1, "fw-medium"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"]], template: function EditPartner_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function EditPartner_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275listener("click", function EditPartner_Template_button_click_3_listener() {
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
      \u0275\u0275listener("ngSubmit", function EditPartner_Template_form_ngSubmit_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "label", 14);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 15);
      \u0275\u0275template(17, EditPartner_div_17_Template, 2, 1, "div", 16)(18, EditPartner_div_18_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "label", 17);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 18)(23, "option", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, EditPartner_option_25_Template, 2, 2, "option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, EditPartner_div_26_Template, 2, 1, "div", 16)(27, EditPartner_div_27_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 13)(29, "label", 21);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 22);
      \u0275\u0275template(32, EditPartner_div_32_Template, 2, 1, "div", 16)(33, EditPartner_div_33_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 13)(35, "label", 23);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 24)(38, "input", 25);
      \u0275\u0275listener("input", function EditPartner_Template_input_input_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountrySearch($event));
      })("focus", function EditPartner_Template_input_focus_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryFocus());
      })("blur", function EditPartner_Template_input_blur_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 26);
      \u0275\u0275template(40, EditPartner_button_40_Template, 3, 1, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(41, EditPartner_div_41_Template, 2, 1, "div", 16)(42, EditPartner_div_42_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 13)(44, "label", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 24)(47, "input", 29);
      \u0275\u0275listener("input", function EditPartner_Template_input_input_47_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCitySearch($event));
      })("focus", function EditPartner_Template_input_focus_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityFocus());
      })("blur", function EditPartner_Template_input_blur_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCityBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 26);
      \u0275\u0275template(49, EditPartner_button_49_Template, 5, 2, "button", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(50, EditPartner_div_50_Template, 2, 1, "div", 16)(51, EditPartner_div_51_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 30)(53, "label", 31);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "textarea", 32);
      \u0275\u0275template(56, EditPartner_div_56_Template, 2, 1, "div", 16)(57, EditPartner_div_57_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 13)(59, "label", 33);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "input", 34);
      \u0275\u0275template(62, EditPartner_div_62_Template, 2, 1, "div", 16)(63, EditPartner_div_63_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 13)(65, "label", 35);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 36);
      \u0275\u0275template(68, EditPartner_div_68_Template, 2, 1, "div", 16)(69, EditPartner_div_69_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 13)(71, "label", 37);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "input", 38);
      \u0275\u0275template(74, EditPartner_div_74_Template, 2, 1, "div", 16)(75, EditPartner_div_75_Template, 2, 1, "div", 16);
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
      \u0275\u0275template(86, EditPartner_div_86_Template, 2, 1, "div", 16)(87, EditPartner_div_87_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 44)(89, "button", 45);
      \u0275\u0275element(90, "i", 46);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "button", 47);
      \u0275\u0275listener("click", function EditPartner_Template_button_click_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(94, "app-partners-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance(2);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL());
      \u0275\u0275advance(2);
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
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isSaveButtonEnabled());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, PartnersConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  transform: scale(1) translateY(0);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #E6D7A2;\n  padding: 16px 0px 0px 0px;\n  gap: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n@media (max-width: 768px) {\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 1rem;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\nhtml[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=edit-partner-FRH5NADE.css.map */"] });
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
        <i class="bi bi-pencil-square me-2"></i>\r
        {{ translate('partners.edit_partner') }}\r
      </h2>\r
    </div>\r
\r
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
        <!-- Modal Footer -->\r
        <div class="modal-footer">\r
          <!-- Debug information (remove this in production) -->\r
          <button type="submit" class="btn btn-primary" [disabled]="!isSaveButtonEnabled()">\r
            <i class="bi bi-check-circle me-2"></i>\r
            {{ translate('common.save') }}\r
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
`, styles: ["/* src/app/components/partners/edit-partner/edit-partner.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.modal-overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n[dir=rtl] .modal-footer {\n  justify-content: flex-end;\n}\n[dir=ltr] .modal-footer {\n  justify-content: flex-start;\n}\n.modal-container {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  width: 90%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow: hidden;\n  transform: scale(0.9) translateY(20px);\n  transition: all 0.3s ease;\n  position: relative;\n}\n.modal-overlay.open .modal-container {\n  transform: scale(1) translateY(0);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #E6D7A2;\n  background: #D4AF5F;\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n  color: #5F646D;\n  order: 1;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-body {\n  padding: 2rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #E6D7A2;\n  padding: 16px 0px 0px 0px;\n  gap: 1rem;\n}\n.form-label {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.form-control,\n.form-select {\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  transition: all 0.3s ease;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  font-size: 0.8rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.2s ease;\n  border: none;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-secondary:hover {\n  background-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n@media (max-width: 768px) {\n  .modal-body {\n    padding: 1.5rem;\n  }\n  .modal-footer {\n    padding: 1rem 1.5rem;\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .modal-dialog {\n    margin: 1rem;\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-header {\n    padding: 1rem;\n  }\n  .modal-title {\n    font-size: 1.1rem;\n  }\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n.contact-row {\n  background: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n}\n.contact-row:last-child {\n  margin-bottom: 0;\n}\n.contact-actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .form-label {\n  text-align: right;\n}\n[dir=rtl] .btn-close {\n  margin-left: 0;\n  margin-right: auto;\n}\nhtml[dir=rtl] .modal-footer {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=edit-partner-FRH5NADE.css.map */\n"] }]
  }], () => [{ type: PartnersService }, { type: FormBuilder }, { type: TranslationService }, { type: CountriesService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPartner, { className: "EditPartner", filePath: "src/app/components/partners/edit-partner/edit-partner.ts", lineNumber: 17 });
})();

// src/app/components/partners/edit-contacts-modal/edit-contacts-modal.component.ts
var _c03 = ["confirmationModal"];
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
      email: [contact?.email || "", [Validators.required, Validators.email]],
      phone: [contact?.phone || "", [Validators.required, Validators.minLength(5)]],
      mobile: [contact?.mobile || "", [Validators.required, Validators.minLength(5)]]
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
      \u0275\u0275viewQuery(_c03, 5);
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, PartnersConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.contacts-modal[_ngcontent-%COMP%] {\n  max-width: 800px;\n  width: 100%;\n}\n.modal-container[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  background: white;\n  border-radius: 12px;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n  z-index: 1;\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-radius: 16px 16px 0 0 !important;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n  color: #5F646D;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-header[_ngcontent-%COMP%]   .ltr[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-row[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-color: #e5e7eb !important;\n}\n.contact-row[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-success[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #059669;\n  border-color: #059669;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #047857;\n  border-color: #047857;\n  color: white !important;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: white !important;\n  background-color: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .contacts-modal[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-width: calc(100vw - 2rem);\n  }\n  .contact-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .contact-row[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    justify-content: center;\n  }\n  .contact-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .contact-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=edit-contacts-modal.component-ALNYMQCM.css.map */"] });
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
`, styles: ["/* src/app/components/partners/edit-contacts-modal/edit-contacts-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.contacts-modal {\n  max-width: 800px;\n  width: 100%;\n}\n.modal-container {\n  border-radius: 16px !important;\n  background: white;\n  border-radius: 12px;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n  z-index: 1;\n  color: white;\n}\n.close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.modal-header {\n  border-radius: 16px 16px 0 0 !important;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F !important;\n  color: #5F646D;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n}\n.modal-header .modal-title {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.modal-header .ltr {\n  justify-content: flex-start;\n}\n.modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #5F646D;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  padding: 1rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.contact-row {\n  background: #f9fafb;\n  border-color: #e5e7eb !important;\n}\n.contact-row:hover {\n  background: #f3f4f6;\n}\n.btn-sm {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-success {\n  color: white !important;\n  background-color: #059669;\n  border-color: #059669;\n}\n.btn-success:hover {\n  background-color: #047857;\n  border-color: #047857;\n  color: white !important;\n}\n.btn-danger {\n  color: white !important;\n  background-color: #dc2626;\n  border-color: #dc2626;\n}\n.btn-danger:hover {\n  background-color: #b91c1c;\n  border-color: #b91c1c;\n  color: white !important;\n}\n@media (max-width: 768px) {\n  .contacts-modal {\n    margin: 1rem;\n    max-width: calc(100vw - 2rem);\n  }\n  .contact-row .row {\n    flex-direction: column;\n  }\n  .contact-row .col-md-2 {\n    margin-top: 0.5rem;\n    justify-content: center;\n  }\n  .contact-row .btn {\n    min-width: 36px;\n    height: 36px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .contact-row .btn i {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=edit-contacts-modal.component-ALNYMQCM.css.map */\n"] }]
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
var _c04 = ["confirmationModal"];
function ViewPartnerModal_div_0_div_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
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
function ViewPartnerModal_div_0_div_5_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().email, $event) || (ctx_r2.newContact().email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().phone, $event) || (ctx_r2.newContact().phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.newContact().mobile, $event) || (ctx_r2.newContact().mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_54_Template_input_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onContactFieldChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 38)(17, "button", 39);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_54_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addContact());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_54_Template_button_click_19_listener() {
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 58)(3, "polyline", 59);
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "path", 60);
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "rect", 61)(3, "line", 62);
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 27);
    \u0275\u0275element(2, "circle", 64)(3, "line", 65)(4, "line", 66);
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "button", 47);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const contact_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.editContact(contact_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 48);
    \u0275\u0275element(4, "path", 49)(5, "path", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const contact_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteContact(contact_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 48);
    \u0275\u0275element(9, "polyline", 52)(10, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 54);
    \u0275\u0275template(13, ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_13_Template, 6, 1, "div", 55)(14, ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_14_Template, 5, 1, "div", 55)(15, ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_15_Template, 6, 1, "div", 55)(16, ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_div_16_Template, 7, 1, "div", 56);
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
function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "h5");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35)(5, "label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 68);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("email", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 69);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("phone", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 69);
    \u0275\u0275listener("ngModelChange", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.onEditingContactFieldChange("mobile", $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 38)(17, "button", 39);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.updateContact());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 10);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.edit_contact"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.email"), " *");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_11_0 = ctx_r2.editingContact()) == null ? null : tmp_11_0.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_13_0 = ctx_r2.editingContact()) == null ? null : tmp_13_0.phone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.mobile"));
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_15_0 = ctx_r2.editingContact()) == null ? null : tmp_15_0.mobile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.contactFormValid() || ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.cancel"), " ");
  }
}
function ViewPartnerModal_div_0_div_5_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_5_div_55_div_1_div_1_Template, 17, 8, "div", 43)(2, ViewPartnerModal_div_0_div_5_div_55_div_1_div_2_Template, 21, 10, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    const contact_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.editingContact() || ((tmp_8_0 = ctx_r2.editingContact()) == null ? null : tmp_8_0.id) !== contact_r7.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingContact() && ((tmp_9_0 = ctx_r2.editingContact()) == null ? null : tmp_9_0.id) === contact_r7.id);
  }
}
function ViewPartnerModal_div_0_div_5_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ViewPartnerModal_div_0_div_5_div_55_div_1_Template, 3, 2, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.partner.contacts);
  }
}
function ViewPartnerModal_div_0_div_5_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 71);
    \u0275\u0275element(2, "path", 72)(3, "circle", 73)(4, "path", 74)(5, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_ng_template_56_Template_button_click_8_listener() {
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
function ViewPartnerModal_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "h3", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 19)(12, "div", 20)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 20)(18, "label");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 20)(23, "label");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 20)(28, "label");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 20)(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 21)(36, "a", 22);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 20)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, ViewPartnerModal_div_0_div_5_div_44_Template, 5, 2, "div", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 24)(46, "div", 25)(47, "h3");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_div_5_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAddContactForm.set(true));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 27);
    \u0275\u0275element(51, "line", 28)(52, "line", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, ViewPartnerModal_div_0_div_5_div_54_Template, 21, 16, "div", 30)(55, ViewPartnerModal_div_0_div_5_div_55_Template, 2, 1, "div", 31)(56, ViewPartnerModal_div_0_div_5_ng_template_56_Template, 10, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noContacts_r10 = \u0275\u0275reference(57);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 33, ctx_r2.partner.contractStartDate, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.partner.note);
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
function ViewPartnerModal_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275element(1, "div", 78);
    \u0275\u0275elementEnd();
  }
}
function ViewPartnerModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "h2", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ViewPartnerModal_div_0_div_5_Template, 58, 36, "div", 8);
    \u0275\u0275elementStart(6, "div", 9)(7, "button", 10);
    \u0275\u0275listener("click", function ViewPartnerModal_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ViewPartnerModal_div_0_div_9_Template, 2, 0, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dir", ctx_r2.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl-header", ctx_r2.isRTL());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.partner_details"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.partner);
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
  open(partner) {
    this.partner = partner;
    this.showModal.set(true);
    if (!partner.contacts || partner.contacts.length === 0) {
      this.loadContacts();
    }
  }
  close() {
    this.showModal.set(false);
    this.partner = null;
    this.editingContact.set(null);
    this.showAddContactForm.set(false);
    this.resetNewContact();
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
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, inputs: { partner: "partner" }, outputs: { contactsUpdated: "contactsUpdated", partnerUpdated: "partnerUpdated" }, standalone: false, decls: 3, vars: 2, consts: [["confirmationModal", ""], ["noContacts", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [3, "confirm", "cancel", "isRTL"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click", "dir"], [1, "modal-header"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], ["class", "loading-overlay", 4, "ngIf"], [1, "modal-body"], [1, "partner-info-section"], [1, "info-header"], [1, "partner-title-section"], [1, "partner-name"], [1, "partner-badges"], [1, "status-badge"], [1, "info-grid"], [1, "info-item"], [1, "website-link"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "info-item", 4, "ngIf"], [1, "contacts-section"], [1, "contacts-header"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "add-contact-form", 4, "ngIf"], ["class", "contacts-list", 4, "ngIf", "ngIfElse"], [1, "note-text"], [1, "add-contact-form"], [1, "form-row"], [1, "form-group"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "contacts-list"], ["class", "contact-item", 4, "ngFor", "ngForOf"], [1, "contact-item"], ["class", "contact-display", 4, "ngIf"], ["class", "contact-edit", 4, "ngIf"], [1, "contact-display"], [1, "contact-actions"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v2"], [1, "contact-info"], ["class", "contact-field", 4, "ngIf"], ["class", "contact-field no-data", 4, "ngIf"], [1, "contact-field"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"], ["x", "5", "y", "2", "width", "14", "height", "20", "rx", "2", "ry", "2"], ["x1", "12", "y1", "18", "x2", "12.01", "y2", "18"], [1, "contact-field", "no-data"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "contact-edit"], ["type", "email", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "no-contacts"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "btn", "btn-primary", 3, "click"], [1, "loading-overlay"], [1, "spinner"]], template: function ViewPartnerModal_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, ViewPartnerModal_div_0_Template, 10, 7, "div", 2);
      \u0275\u0275elementStart(1, "app-confirmation-modal", 3, 0);
      \u0275\u0275listener("confirm", function ViewPartnerModal_Template_app_confirmation_modal_confirm_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onConfirmDelete());
      })("cancel", function ViewPartnerModal_Template_app_confirmation_modal_cancel_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancelDelete());
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showModal());
      \u0275\u0275advance();
      \u0275\u0275property("isRTL", ctx.isRTL());
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ConfirmationModalComponent, DatePipe], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  padding: 10px;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  background-color: #D4AF5F;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 24px;\n}\n.modal-header.rtl-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-header.rtl-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: -1;\n}\n.modal-header.rtl-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  order: -1;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  color: #6b7280;\n  transition: all 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 24px 24px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 24px 24px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 24px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-footer.rtl-footer[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.partner-info-section[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n}\n.partner-name[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.partner-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.category-0[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.category-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.category-2[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.category-3[_ngcontent-%COMP%] {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.category-4[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.category-5[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-active[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 16px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  text-decoration: none;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-text[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 3px solid #e5e7eb;\n  font-style: italic;\n}\n.contacts-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 24px;\n}\n.contacts-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.contacts-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.add-contact-form[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  border: 1px solid #e5e7eb;\n}\n.add-contact-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.contacts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.contact-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  background-color: white;\n}\n.contact-display[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n@media (min-width: 769px) {\n  .contact-display[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .contact-info[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .contact-actions[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n.contact-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.contact-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n  font-size: 0.875rem;\n  min-width: 0;\n}\n.contact-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.contact-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-field.no-data[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n}\n.contact-field.no-data[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.contact-edit[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.contact-edit[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.no-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n.no-contacts[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.no-contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  font-size: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #C62828;\n  color: white;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-display[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  order: -1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-display[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  order: 2;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%]   .partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout[_ngcontent-%COMP%]   .partner-badges[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-badges[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: calc(90vh);\n    width: 100%;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 16px 16px 16px 16px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0 16px 16px 16px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 12px 16px 16px 16px;\n  }\n  .info-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact-display[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    align-items: flex-start !important;\n    gap: 12px !important;\n  }\n  .contact-actions[_ngcontent-%COMP%] {\n    width: 100% !important;\n    justify-content: flex-end !important;\n    order: -1 !important;\n    margin-bottom: 8px !important;\n  }\n  .contact-info[_ngcontent-%COMP%] {\n    order: 1 !important;\n    width: 100% !important;\n  }\n}\n@media (max-width: 480px) {\n  .contact-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .contact-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    font-size: 0.75rem;\n    padding: 6px 8px;\n  }\n  .contact-field[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .contact-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    max-height: calc(90vh);\n    width: 100vw !important;\n    max-width: 100vw !important;\n  }\n}\n/*# sourceMappingURL=view-partner-modal.component-CLBJPFIJ.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPartnerModal, [{
    type: Component,
    args: [{ selector: "app-view-partner-modal", standalone: false, template: `<!-- Modal Overlay -->\r
<div class="modal-overlay" *ngIf="showModal()" (click)="close()">\r
  <div class="modal-container" (click)="$event.stopPropagation()" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
    \r
    <!-- Modal Header -->\r
    <div class="modal-header" [class.rtl-header]="isRTL()">\r
      <h2 class="modal-title">{{ translate('partners.partner_details') }}</h2>\r
\r
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
    <!-- Modal Footer -->\r
    <div class="modal-footer">\r
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
`, styles: ["/* src/app/components/partners/view-partner-modal/view-partner-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  padding: 10px;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px;\n  background-color: #D4AF5F;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 24px;\n}\n.modal-header.rtl-header {\n  flex-direction: row-reverse;\n}\n.modal-header.rtl-header .modal-title {\n  text-align: right;\n}\n[dir=rtl] .modal-header {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .modal-header .modal-title {\n  text-align: right;\n}\n[dir=rtl] .modal-footer {\n  flex-direction: row !important;\n}\n[dir=rtl] .modal-header .close-btn {\n  order: -1;\n}\n.modal-header.rtl-header .close-btn {\n  order: -1;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 6px;\n  color: #6b7280;\n  transition: all 0.2s;\n}\n.close-btn:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 0 24px 24px 24px;\n}\n.modal-footer {\n  display: flex;\n  align-items: center;\n  padding: 24px 24px 24px 24px;\n  background-color: #f8f9fa;\n  border-top: 1px solid #e5e7eb;\n  margin-top: 24px;\n}\n[dir=rtl] .modal-footer {\n  justify-content: flex-start;\n}\n.modal-footer.rtl-footer {\n  justify-content: flex-start;\n}\n.partner-info-section {\n  margin-bottom: 32px;\n}\n.info-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n}\n.partner-name {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.partner-badges {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.category-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.category-0 {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.category-1 {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.category-2 {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.category-3 {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.category-4 {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.category-5 {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.status-badge {\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.status-active {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-inactive {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 16px;\n}\n.info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-item label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.info-item span {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.website-link a {\n  color: #3b82f6;\n  text-decoration: none;\n}\n.website-link a:hover {\n  text-decoration: underline;\n}\n.note-text {\n  background-color: #f9fafb;\n  padding: 12px;\n  border-radius: 6px;\n  border-left: 3px solid #e5e7eb;\n  font-style: italic;\n}\n.contacts-section {\n  border-top: 1px solid #e5e7eb;\n  padding-top: 24px;\n}\n.contacts-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.contacts-header h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.add-contact-form {\n  background-color: #f9fafb;\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  border: 1px solid #e5e7eb;\n}\n.add-contact-form h4 {\n  margin: 0 0 16px 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-group label {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-control {\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n}\n.contacts-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.contact-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 16px;\n  background-color: white;\n}\n.contact-display {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n}\n@media (min-width: 769px) {\n  .contact-display {\n    flex-direction: row;\n  }\n  .contact-info {\n    order: 1;\n  }\n  .contact-actions {\n    order: 2;\n  }\n}\n.contact-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 0;\n}\n.contact-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #374151;\n  font-size: 0.875rem;\n  min-width: 0;\n}\n.contact-field svg {\n  color: #6b7280;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.contact-field span {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-field.no-data {\n  color: #6b7280;\n  font-style: italic;\n}\n.contact-field.no-data svg {\n  color: #9ca3af;\n}\n.contact-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.contact-edit {\n  background-color: #f9fafb;\n  padding: 16px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.contact-edit h5 {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.no-contacts {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n.no-contacts svg {\n  color: #d1d5db;\n  margin-bottom: 16px;\n}\n.no-contacts p {\n  margin: 0 0 20px 0;\n  font-size: 1rem;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary {\n  background-color: transparent;\n  border: 1px solid #1B1D21;\n  color: #1B1D21;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  color: white;\n}\n.btn-outline-primary {\n  background-color: transparent;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-outline-primary:hover:not(:disabled) {\n  background-color: #B68A35;\n  color: white;\n}\n.btn-outline-danger {\n  background-color: transparent;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-outline-danger:hover:not(:disabled) {\n  background-color: #C62828;\n  color: white;\n}\n.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.loading-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top: 3px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n[dir=rtl] .info-header {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-display {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .form-actions {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-actions {\n  flex-direction: row-reverse;\n  order: -1;\n}\n[dir=rtl] .contact-display {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .contact-info {\n  order: 2;\n}\n.info-header.rtl-layout {\n  justify-content: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout .partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n.info-header.rtl-layout .partner-badges {\n  justify-content: flex-end;\n}\n[dir=rtl] .info-header {\n  justify-content: flex-end;\n  text-align: right;\n}\n[dir=rtl] .partner-title-section {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-align: right;\n}\n[dir=rtl] .partner-badges {\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .modal-container {\n    max-height: calc(90vh);\n    width: 100%;\n  }\n  .modal-header {\n    padding: 16px 16px 16px 16px;\n  }\n  .modal-body {\n    padding: 0 16px 16px 16px;\n  }\n  .modal-footer {\n    padding: 12px 16px 16px 16px;\n  }\n  .info-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .contact-display {\n    flex-direction: column !important;\n    align-items: flex-start !important;\n    gap: 12px !important;\n  }\n  .contact-actions {\n    width: 100% !important;\n    justify-content: flex-end !important;\n    order: -1 !important;\n    margin-bottom: 8px !important;\n  }\n  .contact-info {\n    order: 1 !important;\n    width: 100% !important;\n  }\n}\n@media (max-width: 480px) {\n  .contact-actions {\n    flex-wrap: wrap;\n    gap: 6px;\n  }\n  .contact-actions .btn {\n    flex: 1;\n    min-width: 0;\n    font-size: 0.75rem;\n    padding: 6px 8px;\n  }\n  .contact-field {\n    font-size: 0.8rem;\n  }\n  .contact-field svg {\n    width: 14px;\n    height: 14px;\n  }\n  .modal-container {\n    max-height: calc(90vh);\n    width: 100vw !important;\n    max-width: 100vw !important;\n  }\n}\n/*# sourceMappingURL=view-partner-modal.component-CLBJPFIJ.css.map */\n"] }]
  }], null, { partner: [{
    type: Input
  }], contactsUpdated: [{
    type: Output
  }], partnerUpdated: [{
    type: Output
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPartnerModal, { className: "ViewPartnerModal", filePath: "src/app/components/partners/view-partner-modal/view-partner-modal.component.ts", lineNumber: 20 });
})();

// src/app/components/partners/partners-list/partners-list.ts
var _c05 = ["addPartnerModal"];
var _c1 = ["editPartnerModal"];
var _c2 = ["editContactsModal"];
var _c3 = ["confirmationModal"];
var _c4 = ["viewPartnerModal"];
function PartnersList_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PartnersList_button_26_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate(category_r2.value), " ");
  }
}
function PartnersList_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.loading"));
  }
}
function PartnersList_div_32_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.try_different_search"));
  }
}
function PartnersList_div_32_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.get_started_message"));
  }
}
function PartnersList_div_32_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PartnersList_div_32_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("common.clear_filters"), " ");
  }
}
function PartnersList_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "h3", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 39);
    \u0275\u0275template(5, PartnersList_div_32_span_5_Template, 2, 1, "span", 40)(6, PartnersList_div_32_span_6_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 41);
    \u0275\u0275template(8, PartnersList_div_32_button_8_Template, 2, 1, "button", 42);
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function PartnersList_div_32_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddModal());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("partners.no_search_results"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchTerm || ctx_r2.selectedCategory !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.searchTerm && ctx_r2.selectedCategory === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.searchTerm || ctx_r2.selectedCategory !== null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("partners.add_partner"), " ");
  }
}
function PartnersList_div_33_div_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const partner_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.note"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.note);
  }
}
function PartnersList_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "div", 68)(3, "div", 69)(4, "h3", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 71)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 72);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 73);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 74)(14, "div", 75)(15, "div", 76);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 77);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 75)(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 75)(25, "div", 76);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 78)(28, "a", 79);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, PartnersList_div_33_div_2_div_30_Template, 5, 2, "div", 80);
    \u0275\u0275elementStart(31, "div", 81)(32, "button", 82);
    \u0275\u0275listener("click", function PartnersList_div_33_div_2_Template_button_click_32_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewPartner(partner_r8.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 83);
    \u0275\u0275element(34, "path", 84)(35, "circle", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "span", 86);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 87);
    \u0275\u0275listener("click", function PartnersList_div_33_div_2_Template_button_click_38_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editPartner(partner_r8));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 88);
    \u0275\u0275element(40, "path", 89)(41, "path", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "span", 86);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "button", 91);
    \u0275\u0275listener("click", function PartnersList_div_33_div_2_Template_button_click_44_listener() {
      const partner_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deletePartner(partner_r8.id, partner_r8.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 92);
    \u0275\u0275element(46, "path", 93)(47, "path", 94)(48, "path", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "span", 86);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const partner_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(partner_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("category-badge category-", partner_r8.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(partner_r8.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.sector);
    \u0275\u0275advance();
    \u0275\u0275classMap(partner_r8.isActive ? "status-active" : "status-inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", partner_r8.isActive ? ctx_r2.translate("partners.active") : ctx_r2.translate("partners.inactive"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.country"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.city"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r8.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("partners.website"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", partner_r8.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", partner_r8.website, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", partner_r8.note);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.details"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.edit"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.delete"));
  }
}
function PartnersList_div_33_li_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 60)(1, "button", 97);
    \u0275\u0275listener("click", function PartnersList_div_33_li_26_Template_button_click_1_listener() {
      const page_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange(page_r10));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r10 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r10);
  }
}
function PartnersList_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275template(2, PartnersList_div_33_div_2_Template, 51, 20, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "div", 49)(5, "div", 50)(6, "label", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PartnersList_div_33_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pageSize, $event) || (ctx_r2.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function PartnersList_div_33_Template_select_change_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange());
    });
    \u0275\u0275elementStart(9, "option", 53);
    \u0275\u0275text(10, "6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 54);
    \u0275\u0275text(12, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 55);
    \u0275\u0275text(14, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 56);
    \u0275\u0275text(16, "48");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 57)(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "nav", 58)(21, "ul", 59)(22, "li", 60)(23, "button", 61);
    \u0275\u0275listener("click", function PartnersList_div_33_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 12);
    \u0275\u0275element(25, "polyline", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, PartnersList_div_33_li_26_Template, 3, 3, "li", 63);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "li", 60)(28, "button", 61);
    \u0275\u0275listener("click", function PartnersList_div_33_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange(ctx_r2.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 12);
    \u0275\u0275element(30, "polyline", 64);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(31, "app-add-partner", null, 0)(33, "app-edit-partner", null, 1);
    \u0275\u0275elementStart(35, "app-edit-contacts-modal", 65, 2);
    \u0275\u0275listener("contactsUpdated", function PartnersList_div_33_Template_app_edit_contacts_modal_contactsUpdated_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refreshPartnerContacts($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "app-partners-confirmation-modal", null, 3);
    \u0275\u0275elementStart(39, "app-view-partner-modal", 65, 4);
    \u0275\u0275listener("contactsUpdated", function PartnersList_div_33_Template_app_view_partner_modal_contactsUpdated_39_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.refreshPartnerContacts($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredPartners);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("common.page_size"), ":");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pageSize);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate6("", ctx_r2.translate("common.showing"), " ", (ctx_r2.currentPage - 1) * ctx_r2.pageSize + 1, "-", ctx_r2.Math.min(ctx_r2.currentPage * ctx_r2.pageSize, ctx_r2.totalCount), " ", ctx_r2.translate("common.of"), " ", ctx_r2.totalCount, " ", ctx_r2.translate("partners.title"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
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
  pageSize = 6;
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
      Category: this.selectedCategory || void 0
    };
    this.partnersService.getAllPartners(params).subscribe({
      next: (res) => {
        this.allPartners = res.data.items;
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
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
  onSearchClick() {
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
      \u0275\u0275viewQuery(_c05, 5);
      \u0275\u0275viewQuery(_c1, 5);
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
  }, standalone: false, decls: 34, vars: 18, consts: [["addPartnerModal", ""], ["editPartnerModal", ""], ["editContactsModal", ""], ["confirmationModal", ""], ["viewPartnerModal", ""], [1, "partners-container", "rounded-5", "custom-scrollbar", 3, "dir"], [1, "partners-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "partners-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", "px-2", 3, "click"], [1, "px-2"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "col-md-3"], [1, "position-relative"], ["type", "text", "readonly", "", 1, "form-control", 3, "ngModelChange", "input", "focus", "blur", "placeholder", "ngModel"], [1, "dropdown-menu", "w-100", "position-absolute", 2, "max-height", "200px", "overflow-y", "auto", "z-index", "1050"], ["type", "button", 1, "dropdown-item", 3, "click"], ["type", "button", "class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "empty-state text-center py-5", 4, "ngIf"], ["class", "partners-grid", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "empty-state", "text-center", "py-5"], [1, "empty-state-icon", "mb-3"], [1, "empty-state-title", "mb-2"], [1, "empty-state-message", "text-muted", "mb-4"], [4, "ngIf"], [1, "empty-state-actions"], ["class", "btn btn-outline-secondary btn-lg me-2", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "ms-2", "me-2", 3, "click"], [1, "btn", "btn-outline-secondary", "btn-lg", "me-2", 3, "click"], [1, "partners-grid"], [1, "row", "g-4"], ["class", "col-lg-4 col-md-6 col-12", 4, "ngFor", "ngForOf"], [1, "pagination-section"], [1, "pagination-controls", "ltr"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], ["value", "6"], ["value", "12"], ["value", "24"], ["value", "48"], [1, "pagination-info"], ["aria-label", "Partners pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [3, "contactsUpdated"], [1, "col-lg-4", "col-md-6", "col-12"], [1, "partner-card"], [1, "card-header-section"], [1, "partner-info"], [1, "partner-name"], [1, "partner-subtitle"], [1, "sector-text"], [1, "status-badge"], [1, "card-body-section"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "info-value", "website-link"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["class", "info-row", 4, "ngIf"], [1, "card-actions"], [1, "btn", "btn-primary", "me-lg-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-eye-icon", "lucide-eye"], ["d", "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"], ["cx", "12", "cy", "12", "r", "3"], [1, "ms-2", "me-2"], [1, "btn", "btn-edit", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-square-pen-icon", "lucide-square-pen"], ["d", "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"], [1, "btn", "btn-danger", "me-lg-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-trash-icon", "lucide-trash"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["d", "M3 6h18"], ["d", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "info-value", "note-text"], [1, "page-link", 3, "click"]], template: function PartnersList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 8);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_6_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275elementStart(7, "span", 11);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 12);
      \u0275\u0275element(10, "line", 13)(11, "line", 14);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 15)(13, "div", 16)(14, "div", 17)(15, "div", 18)(16, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PartnersList_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function PartnersList_Template_input_keyup_enter_16_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "div", 20)(18, "button", 21);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_18_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 22)(21, "div", 23)(22, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PartnersList_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categorySearchTerm, $event) || (ctx.categorySearchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function PartnersList_Template_input_input_22_listener($event) {
        return ctx.onCategorySearch($event);
      })("focus", function PartnersList_Template_input_focus_22_listener() {
        return ctx.onCategoryFocus();
      })("blur", function PartnersList_Template_input_blur_22_listener() {
        return ctx.onCategoryBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 25)(24, "button", 26);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_24_listener() {
        return ctx.selectCategory(null);
      });
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, PartnersList_button_26_Template, 2, 1, "button", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 20)(28, "button", 28);
      \u0275\u0275listener("click", function PartnersList_Template_button_click_28_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275element(29, "i", 29);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(31, PartnersList_div_31_Template, 4, 1, "div", 30)(32, PartnersList_div_32_Template, 11, 5, "div", 31)(33, PartnersList_div_33_Template, 41, 16, "div", 32);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("partners.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("partners.add_partner"));
      \u0275\u0275advance(8);
      \u0275\u0275property("placeholder", ctx.translate("partners.search_partners"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
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
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AddPartner, EditPartner, PartnersConfirmationModalComponent, EditContactsModalComponent, ViewPartnerModal], styles: ['\n\n.partners-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.partners-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.partners-title[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: white !important;\n  outline: white !important;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(216, 170, 42, 0.473);\n}\n.partners-grid[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.partner-card[_ngcontent-%COMP%] {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.partner-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.card-header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #f1f3f4;\n}\n.partner-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.partner-name[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.3;\n}\n.partner-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.category-badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n  width: fit-content;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.category-badge.category-0[_ngcontent-%COMP%] {\n  background: #34495E;\n  color: #FFFFFF;\n  border: 1px solid #34495E;\n}\n.category-badge.category-1[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: #FFFFFF;\n  border: 1px solid #D4AF5F;\n}\n.category-badge.category-2[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n  color: #5F646D;\n  border: 1px solid #E6D7A2;\n}\n.category-badge.category-3[_ngcontent-%COMP%] {\n  background: #E54B1D;\n  color: #FFFFFF;\n  border: 1px solid #E54B1D;\n}\n.category-badge.category-4[_ngcontent-%COMP%] {\n  background: #B45253;\n  color: #FFFFFF;\n  border: 1px solid #B45253;\n}\n.category-badge.category-5[_ngcontent-%COMP%] {\n  background: #555555;\n  color: #FFFFFF;\n  border: 1px solid #555555;\n}\n.sector-text[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  display: inline-block;\n  width: fit-content;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.status-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%);\n  color: #155724;\n  border-color: #c3e6cb;\n}\n.status-inactive[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%);\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n.card-body-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  flex: 1;\n  padding: 0.5rem 0;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f8f9fa;\n  align-items: center;\n}\n.info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.info-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-family: "Poppins", sans-serif;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #212529;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #158638;\n  text-decoration: none;\n  word-break: break-all;\n}\n.website-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.note-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #495057;\n}\n.contacts-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.contacts-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.contacts-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #158638 0%,\n      #09365F 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.contacts-header[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.contacts-count[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background: #e9ecef;\n  padding: 0.5rem 0.5rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.contacts-header[_ngcontent-%COMP%]:hover   .contacts-count[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-down[_ngcontent-%COMP%], \n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-up[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease;\n}\n.contacts-header[_ngcontent-%COMP%]   .bi-chevron-up[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.contacts-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  align-items: center;\n  gap: 0.5rem;\n}\n.contacts-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.contacts-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #B68A35;\n  color: #B68A35;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  min-width: auto;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.contacts-header[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-right: 0.25rem;\n}\n.contacts-content[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.85rem;\n  line-height: 1.5;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease-out;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n.contact-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.contact-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.contact-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  min-width: 16px;\n}\n.contact-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.85rem;\n  font-weight: 500;\n  word-break: break-word;\n}\n.more-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n  background: #e9ecef;\n  border-radius: 6px;\n  margin-top: 0.5rem;\n}\n.more-contacts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.no-contacts[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px dashed #dee2e6;\n}\n.no-contacts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: auto;\n  padding-top: 1.25rem;\n  border-top: 2px solid #f1f3f4;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n  border-color: #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #2A2D33;\n  border-color: #2A2D33;\n  color: #FFFFFF;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ffcdd236;\n  border: 1px solid #c62828a9;\n  color: #c62828c9;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #c62828c9;\n  border-color: #c62828a9;\n  color: #FFFFFF;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.spinner-border.text-primary[_ngcontent-%COMP%] {\n  color: #B68A35 !important;\n}\n.empty-state[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon[_ngcontent-%COMP%] {\n  color: #dee2e6;\n}\n.empty-state-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl][_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.empty-state-message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .partner-card[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  grid-template-columns: 2fr 1fr;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n@media (max-width: 768px) {\n  .partners-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .partners-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .partners-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .partner-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .card-header-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .status-badge[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-left: 0;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .partners-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .partners-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .btn[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.rtl-dropdown[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.rtl-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  text-align: right;\n  direction: rtl;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.rtl-dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.no-results[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-results-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.no-results-title[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 600;\n}\n.no-results-message[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n/*# sourceMappingURL=partners-list-MGIJZNFV.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnersList, [{
    type: Component,
    args: [{ selector: "app-partners-list", standalone: false, template: `<div class="partners-container rounded-5 custom-scrollbar" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
    <!-- Header Section -->\r
  <div class="partners-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="partners-title">{{ translate('partners.title') }}</h1>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-primary px-2" (click)="openAddModal()">\r
          <span class="px-2">{{ translate('partners.add_partner') }}</span>\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"/>\r
            <line x1="5" y1="12" x2="19" y2="12"/>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
   <!-- Search and Filters -->\r
   <div class="search-section mb-4">\r
     <div class="row">\r
       <div class="col-md-5">\r
         <div class="search-input-wrapper">\r
           <input\r
             type="text"\r
             class="form-control search-input"\r
             [placeholder]="translate('partners.search_partners')"\r
             [(ngModel)]="searchTerm"\r
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
    <div class="row g-4">\r
      <div *ngFor="let partner of filteredPartners" class="col-lg-4 col-md-6 col-12">\r
        <div class="partner-card">\r
          <!-- Card Header -->\r
          <div class="card-header-section">\r
            <div class="partner-info">\r
              <h3 class="partner-name">{{ partner.name }}</h3>\r
              <div class="partner-subtitle">\r
                <span class="category-badge category-{{ partner.category }}">{{ getCategoryLabel(partner.category) }}</span>\r
                <span class="sector-text">{{ partner.sector }}</span>\r
              </div>\r
            </div>\r
            <div class="status-badge" [class]="partner.isActive ? 'status-active' : 'status-inactive'">\r
              {{ partner.isActive ? translate('partners.active') : translate('partners.inactive') }}\r
            </div>\r
          </div>\r
\r
           <!-- Card Body -->\r
           <div class="card-body-section">\r
             <div class="info-row">\r
               <div class="info-label">{{ translate('partners.country') }}:</div>\r
               <div class="info-value">{{ partner.country }}</div>\r
             </div>\r
             <div class="info-row">\r
               <div class="info-label">{{ translate('partners.city') }}:</div>\r
               <div class="info-value">{{ partner.city }}</div>\r
             </div>\r
             <div class="info-row">\r
               <div class="info-label">{{ translate('partners.website') }}:</div>\r
               <div class="info-value website-link">\r
                 <a [href]="partner.website" target="_blank" rel="noopener noreferrer">\r
                   {{ partner.website }}\r
                 </a>\r
               </div>\r
             </div>\r
             <div class="info-row" *ngIf="partner.note">\r
               <div class="info-label">{{ translate('partners.note') }}:</div>\r
               <div class="info-value note-text">{{ partner.note }}</div>\r
             </div>\r
          <!-- Card Actions -->\r
          <div class="card-actions">\r
            <button class="btn btn-primary me-lg-2" (click)="viewPartner(partner.id)">\r
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>\r
              <span class="ms-2 me-2">{{ translate('common.details') }}</span>\r
            </button>\r
            <button class="btn btn-edit" (click)="editPartner(partner)">\r
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>\r
              <span class="ms-2 me-2">{{ translate('common.edit') }}</span>\r
            </button>\r
            <button class="btn btn-danger me-lg-2" (click)="deletePartner(partner.id, partner.name)">\r
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>\r
              <span class="ms-2 me-2">{{ translate('common.delete') }}</span>\r
            </button>\r
            \r
\r
          </div>\r
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
`, styles: ['/* src/app/components/partners/partners-list/partners-list.css */\n.partners-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.partners-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.partners-title {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.form-control:focus {\n  border-color: white !important;\n  outline: white !important;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(216, 170, 42, 0.473);\n}\n.partners-grid {\n  margin-top: 2rem;\n}\n.partner-card {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.partner-card:hover {\n  border: 1px solid #CBA344;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n.card-header-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 2px solid #f1f3f4;\n}\n.partner-info {\n  flex: 1;\n}\n.partner-name {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 1.25rem;\n  margin: 0 0 0.75rem 0;\n  line-height: 1.3;\n}\n.partner-subtitle {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.category-badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: inline-block;\n  width: fit-content;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n}\n.category-badge.category-0 {\n  background: #34495E;\n  color: #FFFFFF;\n  border: 1px solid #34495E;\n}\n.category-badge.category-1 {\n  background: #D4AF5F;\n  color: #FFFFFF;\n  border: 1px solid #D4AF5F;\n}\n.category-badge.category-2 {\n  background: #E6D7A2;\n  color: #5F646D;\n  border: 1px solid #E6D7A2;\n}\n.category-badge.category-3 {\n  background: #E54B1D;\n  color: #FFFFFF;\n  border: 1px solid #E54B1D;\n}\n.category-badge.category-4 {\n  background: #B45253;\n  color: #FFFFFF;\n  border: 1px solid #B45253;\n}\n.category-badge.category-5 {\n  background: #555555;\n  color: #FFFFFF;\n  border: 1px solid #555555;\n}\n.sector-text {\n  color: #495057;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  display: inline-block;\n  width: fit-content;\n}\n.status-badge {\n  padding: 0.375rem 0.875rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.status-active {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%);\n  color: #155724;\n  border-color: #c3e6cb;\n}\n.status-inactive {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%);\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n.card-body-section {\n  margin-bottom: 1.5rem;\n  flex: 1;\n  padding: 0.5rem 0;\n}\n.info-row {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid #f8f9fa;\n  align-items: center;\n}\n.info-row:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n}\n.info-label {\n  color: #6c757d;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-family: "Poppins", sans-serif;\n}\n.info-value {\n  color: #212529;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .info-label,\n[dir=rtl] .info-value {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.website-link a {\n  color: #158638;\n  text-decoration: none;\n  word-break: break-all;\n}\n.website-link a:hover {\n  text-decoration: underline;\n}\n.note-text {\n  font-style: italic;\n  color: #495057;\n}\n.contacts-section {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.contacts-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.contacts-header::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #158638 0%,\n      #09365F 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.contacts-header:hover {\n  background-color: #f8f9fa;\n}\n.contacts-count {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n  background: #e9ecef;\n  padding: 0.5rem 0.5rem;\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n.contacts-header:hover .contacts-count {\n  background: #B68A35;\n  color: white;\n}\n.contacts-header .bi-chevron-down,\n.contacts-header .bi-chevron-up {\n  color: #6c757d;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease;\n}\n.contacts-header .bi-chevron-up {\n  transform: rotate(180deg);\n}\n.contacts-header .d-flex {\n  align-items: center;\n  gap: 0.5rem;\n}\n.contacts-header i {\n  font-size: 1rem;\n}\n.contacts-header span {\n  color: #495057;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.contacts-header .btn-outline-primary {\n  border-color: #B68A35;\n  color: #B68A35;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  border-radius: 6px;\n  min-width: auto;\n}\n.contacts-header .btn-outline-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.contacts-header .btn-outline-primary i {\n  font-size: 0.75rem;\n  margin-right: 0.25rem;\n}\n.contacts-content {\n  color: #495057;\n  font-size: 0.85rem;\n  line-height: 1.5;\n  animation: slideDown 0.3s ease-out;\n  overflow: hidden;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    max-height: 500px;\n    transform: translateY(0);\n  }\n}\n.contact-item {\n  background: white;\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.2s ease;\n}\n.contact-item:hover {\n  border-color: #B68A35;\n  box-shadow: 0 2px 8px rgba(212, 170, 58, 0.1);\n}\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.contact-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.25rem 0;\n}\n.contact-row i {\n  color: #6c757d;\n  font-size: 0.8rem;\n  min-width: 16px;\n}\n.contact-row span {\n  color: #495057;\n  font-size: 0.85rem;\n  font-weight: 500;\n  word-break: break-word;\n}\n.more-contacts {\n  text-align: center;\n  padding: 0.5rem;\n  background: #e9ecef;\n  border-radius: 6px;\n  margin-top: 0.5rem;\n}\n.more-contacts span {\n  color: #6c757d;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.no-contacts {\n  text-align: center;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border: 1px dashed #dee2e6;\n}\n.no-contacts span {\n  color: #6c757d;\n  font-size: 0.85rem;\n  font-style: italic;\n}\n.card-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: auto;\n  padding-top: 1.25rem;\n  border-top: 2px solid #f1f3f4;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background-color: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary:hover {\n  background-color: #A87D2A;\n  border-color: #A87D2A;\n  color: #FFFFFF;\n}\n.btn-secondary {\n  background-color: #1B1D21;\n  color: #FFFFFF;\n  border-color: #1B1D21;\n}\n.btn-secondary:hover {\n  background-color: #2A2D33;\n  border-color: #2A2D33;\n  color: #FFFFFF;\n}\n.btn-danger {\n  background-color: #ffcdd236;\n  border: 1px solid #c62828a9;\n  color: #c62828c9;\n}\n.btn-danger:hover {\n  background-color: #c62828c9;\n  border-color: #c62828a9;\n  color: #FFFFFF;\n}\n.btn-edit {\n  background-color: #F9F7ED;\n  color: #B68A35;\n  border: 1px solid #B68A35;\n}\n.btn-edit:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.spinner-border.text-primary {\n  color: #B68A35 !important;\n}\n.empty-state {\n  background: white;\n  border-radius: 16px;\n  padding: 3rem 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon {\n  color: #dee2e6;\n}\n.empty-state-title {\n  color: #495057;\n  font-weight: 600;\n  font-family: "Poppins", sans-serif;\n}\n[dir=rtl] .empty-state-title {\n  font-family: "IBM Plex Sans Arabic", sans-serif;\n}\n.empty-state-message {\n  font-size: 1.1rem;\n  max-width: 500px;\n  margin: 0 auto;\n}\n[dir=rtl] .partner-card {\n  text-align: right;\n}\n[dir=rtl] .info-row {\n  grid-template-columns: 2fr 1fr;\n}\n[dir=rtl] .card-actions {\n  justify-content: flex-start;\n}\n[dir=rtl] .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-input {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n@media (max-width: 768px) {\n  .partners-container {\n    padding: 1rem;\n  }\n  .partners-header {\n    padding: 1rem;\n  }\n  .partners-title {\n    font-size: 1.5rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .partner-card {\n    padding: 1rem;\n  }\n  .card-header-section {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: flex-start;\n  }\n  .status-badge {\n    align-self: flex-start;\n  }\n  .info-row {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value {\n    text-align: left;\n    margin-left: 0;\n  }\n  .card-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .partners-header .d-flex {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .partners-title {\n    text-align: center;\n  }\n  .btn {\n    text-align: center;\n  }\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #FFFFFF;\n  border-radius: 8px;\n  border: 1px solid #E6D7A2;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.pagination-info {\n  text-align: center;\n  color: #5F646D;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #5F646D;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #E6D7A2;\n  border-radius: 6px;\n  background: white;\n  color: #5F646D;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.page-size-control select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #555555;\n  background: white;\n  color: #5F646D;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.active .page-link {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: #FFFFFF;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n@media (max-width: 768px) {\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination {\n    justify-content: center;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n}\n.rtl-dropdown {\n  direction: rtl;\n  text-align: right;\n}\n.rtl-dropdown .dropdown-item {\n  text-align: right;\n  direction: rtl;\n}\n.rtl-dropdown::-webkit-scrollbar {\n  width: 8px;\n}\n.rtl-dropdown::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.rtl-dropdown::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.rtl-dropdown::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.no-results {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-results-icon {\n  color: #6c757d;\n}\n.no-results-title {\n  color: #5F646D;\n  font-weight: 600;\n}\n.no-results-message {\n  color: #6c757d;\n}\n/*# sourceMappingURL=partners-list-MGIJZNFV.css.map */\n'] }]
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
        ViewPartnerModal
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
//# sourceMappingURL=chunk-6CKMQXHW.js.map
