import {
  RouterModule
} from "./chunk-AKEMWEBI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  environment,
  ɵNgSelectMultipleOption
} from "./chunk-KHAMYMVY.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  TranslationService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UOGSXFNT.js";
import "./chunk-EVSPGG2W.js";

// src/app/services/workflow.service.ts
var WorkflowService = class _WorkflowService {
  http;
  apiUrl = `${environment.apiBaseUrl}/WorkFlow`;
  constructor(http) {
    this.http = http;
  }
  getWorkflow(params = {}) {
    let url = this.apiUrl;
    const queryParams = new URLSearchParams();
    if (params.FromDate)
      queryParams.append("FromDate", params.FromDate);
    if (params.ToDate)
      queryParams.append("ToDate", params.ToDate);
    if (params.Search)
      queryParams.append("Search", params.Search);
    if (params.Page)
      queryParams.append("Page", params.Page.toString());
    if (params.PageSize)
      queryParams.append("PageSize", params.PageSize.toString());
    if (params.EntityType)
      queryParams.append("EntityType", params.EntityType);
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    return this.http.get(url);
  }
  getWorkflowItem(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function WorkflowService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowService, factory: _WorkflowService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/workflow/workflow-list/workflow-list.ts
function WorkflowList_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", entity_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("workflow.entity_types." + entity_r1.key), " ");
  }
}
function WorkflowList_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("common.loading"), "...");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("common.loading"), "...");
  }
}
function WorkflowList_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "h5", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.no_items_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.try_adjusting_filters"));
  }
}
function WorkflowList_div_55_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "span", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 51);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 52)(15, "span", 53);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "div", 54)(19, "span", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "div", 54)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", item_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getEntityTypeBadgeClass(item_r3.entityName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("workflow.entity_types." + item_r3.entityName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", item_r3.entityId);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getActionTypeBadgeClass(item_r3.actionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("workflow.action_types." + item_r3.actionType), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", item_r3.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.userName || "Unknown User");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(item_r3.createdAt));
  }
}
function WorkflowList_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "table", 47)(2, "thead", 48)(3, "tr")(4, "th");
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
    \u0275\u0275template(19, WorkflowList_div_55_tr_19_Template, 25, 10, "tr", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.id"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.entity_type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.entity_id"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.action_type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.user"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("workflow.created_at"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredWorkflowItems)("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function WorkflowList_div_56_li_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63)(1, "button", 69);
    \u0275\u0275listener("click", function WorkflowList_div_56_li_25_Template_button_click_1_listener() {
      const page_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r6 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r6);
  }
}
function WorkflowList_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "label", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_div_56_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function WorkflowList_div_56_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(6, "option", 30);
    \u0275\u0275text(7, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 31);
    \u0275\u0275text(9, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 32);
    \u0275\u0275text(11, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 33);
    \u0275\u0275text(13, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 34);
    \u0275\u0275text(15, "100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 60)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "nav", 61)(20, "ul", 62)(21, "li", 63)(22, "button", 64);
    \u0275\u0275listener("click", function WorkflowList_div_56_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 65);
    \u0275\u0275element(24, "polyline", 66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, WorkflowList_div_56_li_25_Template, 3, 3, "li", 67);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "li", 63)(27, "button", 64);
    \u0275\u0275listener("click", function WorkflowList_div_56_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 65);
    \u0275\u0275element(29, "polyline", 68);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("common.page_size"), ":");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate6("", ctx_r1.translate("common.showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, "-", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.totalCount), " ", ctx_r1.translate("common.of"), " ", ctx_r1.totalCount, " ", ctx_r1.translate("workflow.workflow_items"));
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
var WorkflowList = class _WorkflowList {
  workflowService;
  translationService;
  allWorkflowItems = [];
  filteredWorkflowItems = [];
  searchTerm = "";
  isLoading = false;
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  // Filters
  fromDate = "";
  toDate = "";
  selectedEntityType = "";
  selectedActionType = "";
  constructor(workflowService, translationService) {
    this.workflowService = workflowService;
    this.translationService = translationService;
  }
  actionTypes = {
    "Created": "Created",
    "Updated": "Updated",
    "Deleted": "Deleted",
    "Approved": "Approved",
    "Rejected": "Rejected",
    "Assigned": "Assigned",
    "Completed": "Completed"
  };
  entityTypes = {
    "Task": "Task",
    "Letter": "Letter",
    "Employee": "Employee",
    "Department": "Department",
    "User": "User",
    "Partner": "Partner",
    "Travel": "Travel",
    "Visit": "Visit"
  };
  ngOnInit() {
    this.loadWorkflow();
  }
  loadWorkflow() {
    this.isLoading = true;
    const params = {
      Search: this.searchTerm || void 0,
      PageSize: this.pageSize,
      Page: this.currentPage,
      FromDate: this.fromDate || void 0,
      ToDate: this.toDate || void 0,
      EntityType: this.selectedEntityType || void 0
    };
    this.workflowService.getWorkflow(params).subscribe({
      next: (res) => {
        console.log("Workflow loaded:", res);
        this.allWorkflowItems = res.items || [];
        this.totalCount = res.totalCount || 0;
        this.currentPage = res.page || 1;
        this.pageSize = res.pageSize || 10;
        this.filteredWorkflowItems = [...this.allWorkflowItems];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading workflow:", error);
        this.isLoading = false;
      }
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadWorkflow();
  }
  onSearchClick() {
    this.currentPage = 1;
    this.loadWorkflow();
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadWorkflow();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadWorkflow();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadWorkflow();
  }
  clearFilters() {
    this.searchTerm = "";
    this.fromDate = "";
    this.toDate = "";
    this.selectedEntityType = "";
    this.selectedActionType = "";
    this.currentPage = 1;
    this.loadWorkflow();
  }
  getActionTypeLabel(actionType) {
    return this.actionTypes[actionType] || actionType;
  }
  getEntityTypeLabel(entityType) {
    return this.entityTypes[entityType] || entityType;
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
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  getActionTypeBadgeClass(actionType) {
    switch (actionType) {
      case "Created":
        return "bg-success";
      case "Updated":
        return "bg-info";
      case "Deleted":
        return "bg-danger";
      case "Approved":
        return "bg-success";
      case "Rejected":
        return "bg-warning";
      case "Assigned":
        return "bg-primary";
      case "Completed":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  }
  getEntityTypeBadgeClass(entityType) {
    switch (entityType) {
      case "Task":
        return "bg-primary";
      case "Letter":
        return "bg-info";
      case "Employee":
        return "bg-success";
      case "Department":
        return "bg-warning";
      case "User":
        return "bg-secondary";
      case "Partner":
        return "bg-dark";
      case "Travel":
        return "bg-info";
      case "Visit":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  }
  trackByFn(index, item) {
    return item.id;
  }
  static \u0275fac = function WorkflowList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowList)(\u0275\u0275directiveInject(WorkflowService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowList, selectors: [["app-workflow-list"]], standalone: false, decls: 57, vars: 23, consts: [[1, "workflow-container", "rounded-5", 3, "dir"], [1, "workflow-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "workflow-title"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-4"], [1, "search-input-wrapper"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-1"], [1, "btn", "btn-primary", "w-100", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "col-md-2"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "placeholder"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-1", "d-flex", "gap-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "col-12"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "mb-0"], [1, "fas", "fa-list", "me-2"], [1, "badge", "bg-primary", "ms-2"], [1, "d-flex", "align-items-center", "gap-2"], ["for", "pageSize", 1, "form-label", "mb-0"], ["id", "pageSize", 1, "form-select", "form-select-sm", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "card-body", "p-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], ["class", "card-footer", 4, "ngIf"], [3, "value"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "fas", "fa-inbox", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "fw-bold"], [1, "badge", 3, "ngClass"], [1, "workflow-description"], [1, "text-truncate", "d-inline-block", 3, "title"], [1, "d-flex", "flex-column"], [1, "card-footer"], [1, "pagination-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], [1, "pagination-info"], ["aria-label", "Workflow pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-link", 3, "click"]], template: function WorkflowList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function WorkflowList_Template_input_keyup_enter_9_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function WorkflowList_Template_button_click_11_listener() {
        return ctx.onSearchClick();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "circle", 12)(14, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(16, "div", 14)(17, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function WorkflowList_Template_input_change_17_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 14)(19, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function WorkflowList_Template_input_change_19_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14)(21, "select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEntityType, $event) || (ctx.selectedEntityType = $event);
        return $event;
      });
      \u0275\u0275listener("change", function WorkflowList_Template_select_change_21_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(22, "option", 17);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, WorkflowList_option_24_Template, 2, 2, "option", 18);
      \u0275\u0275pipe(25, "keyvalue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 19)(27, "button", 20);
      \u0275\u0275listener("click", function WorkflowList_Template_button_click_27_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 5)(30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "h5", 24);
      \u0275\u0275element(34, "i", 25);
      \u0275\u0275text(35);
      \u0275\u0275elementStart(36, "span", 26);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 27)(39, "label", 28);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function WorkflowList_Template_select_ngModelChange_41_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275listener("change", function WorkflowList_Template_select_change_41_listener() {
        return ctx.onPageSizeChange();
      });
      \u0275\u0275elementStart(42, "option", 30);
      \u0275\u0275text(43, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 31);
      \u0275\u0275text(45, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "option", 32);
      \u0275\u0275text(47, "25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "option", 33);
      \u0275\u0275text(49, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 34);
      \u0275\u0275text(51, "100");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 35);
      \u0275\u0275template(53, WorkflowList_div_53_Template, 6, 2, "div", 36)(54, WorkflowList_div_54_Template, 6, 2, "div", 36)(55, WorkflowList_div_55_Template, 20, 9, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, WorkflowList_div_56_Template, 30, 15, "div", 38);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("workflow.title"));
      \u0275\u0275advance(5);
      \u0275\u0275property("placeholder", ctx.translate("workflow.search_placeholder"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275property("placeholder", ctx.translate("common.from_date"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275property("placeholder", ctx.translate("common.to_date"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEntityType);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("workflow.entity_type"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(25, 21, ctx.entityTypes));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("workflow.workflow_items"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.totalCount);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("common.items_per_page"), ":");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredWorkflowItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredWorkflowItems.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.totalPages > 1);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, KeyValuePipe], styles: ['\n\n.workflow-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.workflow-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.workflow-title[_ngcontent-%COMP%] {\n  color: #09365F;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  background-color: #fff;\n}\n.form-control[_ngcontent-%COMP%]:hover, \n.form-select[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.1rem rgba(21, 134, 56, 0.15);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n  outline: none;\n}\n.form-control[_ngcontent-%COMP%]:focus-visible, \n.form-select[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n  outline-offset: 2px;\n}\n.form-control[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:checked {\n  color: white;\n}\n.form-control[_ngcontent-%COMP%]:not([value=""])   option[_ngcontent-%COMP%]:first-child {\n  color: #6c757d;\n  font-style: italic;\n}\n[dir=rtl][_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-position: left 0.75rem center;\n  padding-right: 0.75rem;\n  padding-left: 2.5rem;\n}\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  padding: 0.75rem 0.5rem;\n  font-size: 0.8rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.5rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #f1f3f4;\n  font-size: 0.8rem;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%) !important;\n  color: #155724 !important;\n  border: 1px solid #c3e6cb;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1ecf1 0%,\n      #bee5eb 100%) !important;\n  color: #0c5460 !important;\n  border: 1px solid #bee5eb;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%) !important;\n  color: #721c24 !important;\n  border: 1px solid #f5c6cb;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3cd 0%,\n      #ffeaa7 100%) !important;\n  color: #856404 !important;\n  border: 1px solid #ffeaa7;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #cce5ff 0%,\n      #99d6ff 100%) !important;\n  color: #004085 !important;\n  border: 1px solid #99d6ff;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e2e3e5 0%,\n      #d6d8db 100%) !important;\n  color: #383d41 !important;\n  border: 1px solid #d6d8db;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1d3d4 0%,\n      #c6c8ca 100%) !important;\n  color: #1b1e21 !important;\n  border: 1px solid #c6c8ca;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043DFF;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #043DFF;\n  border-color: #043DFF;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #158638;\n  border-color: #158638;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0f5c2a;\n  border-color: #0f5c2a;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 0;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon[_ngcontent-%COMP%] {\n  color: #dee2e6;\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.empty-state-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.empty-state-message[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1.1rem;\n}\n.workflow-description[_ngcontent-%COMP%] {\n  max-width: 200px;\n  word-wrap: break-word;\n}\n.workflow-description[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.2;\n  max-width: 180px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  max-width: 120px;\n  font-size: 0.75rem;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6)   .fw-bold[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  max-width: 200px;\n  font-size: 0.75rem;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n  padding: 1.5rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1.5rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .pagination-controls[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-end[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-start[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n@media (max-width: 1200px) {\n  .workflow-description[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n  .workflow-description[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 130px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    max-width: 150px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    max-width: 100px;\n  }\n}\n@media (max-width: 992px) {\n  .workflow-description[_ngcontent-%COMP%] {\n    max-width: 120px;\n  }\n  .workflow-description[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    max-width: 120px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    max-width: 80px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .workflow-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .workflow-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .workflow-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .workflow-description[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n  .workflow-description[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 80px;\n    font-size: 0.7rem;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.2rem;\n    font-size: 0.7rem;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    max-width: 100px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    max-width: 70px;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  .card-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-link[_ngcontent-%COMP%] {\n    min-width: 32px;\n    height: 32px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 576px) {\n  .workflow-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .workflow-description[_ngcontent-%COMP%] {\n    max-width: 80px;\n  }\n  .workflow-description[_ngcontent-%COMP%]   .text-truncate[_ngcontent-%COMP%] {\n    max-width: 60px;\n    font-size: 0.65rem;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.1rem;\n    font-size: 0.65rem;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    max-width: 80px;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    max-width: 60px;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease-in-out;\n}\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-in-out;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 8px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-responsive[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=workflow-list-H5F4UVRO.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowList, [{
    type: Component,
    args: [{ selector: "app-workflow-list", standalone: false, template: `<div class="workflow-container rounded-5" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Header Section -->\r
  <div class="workflow-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="workflow-title">{{ translate('workflow.title') }}</h1>\r
      \r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters -->\r
  <div class="search-section mb-4">\r
    <div class="row">\r
      <div class="col-md-4">\r
        <div class="search-input-wrapper">\r
          <input \r
            type="text" \r
            class="form-control search-input" \r
            [placeholder]="translate('workflow.search_placeholder')"\r
            [(ngModel)]="searchTerm"\r
            (keyup.enter)="onSearchClick()"\r
          >\r
        </div>\r
      </div>\r
      <div class="col-md-1">\r
        <button class="btn btn-primary w-100" (click)="onSearchClick()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
            <circle cx="11" cy="11" r="8"></circle>\r
            <path d="m21 21-4.35-4.35"></path>\r
          </svg>\r
          {{ translate('common.search') }}\r
        </button>\r
      </div>\r
      <div class="col-md-2">\r
        <input\r
          type="date"\r
          class="form-control"\r
          [(ngModel)]="fromDate"\r
          (change)="onFilterChange()"\r
          [placeholder]="translate('common.from_date')"\r
        />\r
      </div>\r
      <div class="col-md-2">\r
        <input\r
          type="date"\r
          class="form-control"\r
          [(ngModel)]="toDate"\r
          (change)="onFilterChange()"\r
          [placeholder]="translate('common.to_date')"\r
        />\r
      </div>\r
      <div class="col-md-2">\r
        <select\r
          class="form-control"\r
          [(ngModel)]="selectedEntityType"\r
          (change)="onFilterChange()"\r
        >\r
          <option value="">{{ translate('workflow.entity_type') }}</option>\r
          <option *ngFor="let entity of entityTypes | keyvalue" [value]="entity.key">\r
            {{ translate('workflow.entity_types.' + entity.key) }}\r
          </option>\r
        </select>\r
      </div>\r
      <div class="col-md-1 d-flex gap-2">\r
        <button class="btn btn-outline-secondary" (click)="clearFilters()">\r
          {{ translate('common.clear') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Results -->\r
  <div class="row">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-header d-flex justify-content-between align-items-center">\r
          <h5 class="mb-0">\r
            <i class="fas fa-list me-2"></i>\r
            {{ translate('workflow.workflow_items') }}\r
            <span class="badge bg-primary ms-2">{{ totalCount }}</span>\r
          </h5>\r
          \r
          <!-- Page Size Selector -->\r
          <div class="d-flex align-items-center gap-2">\r
            <label for="pageSize" class="form-label mb-0">{{ translate('common.items_per_page') }}:</label>\r
            <select\r
              id="pageSize"\r
              class="form-select form-select-sm"\r
              style="width: auto;"\r
              [(ngModel)]="pageSize"\r
              (change)="onPageSizeChange()"\r
            >\r
              <option value="5">5</option>\r
              <option value="10">10</option>\r
              <option value="25">25</option>\r
              <option value="50">50</option>\r
              <option value="100">100</option>\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="card-body p-0">\r
          <!-- Loading Spinner -->\r
          <div *ngIf="isLoading" class="text-center py-5">\r
            <div class="spinner-border text-primary" role="status">\r
              <span class="visually-hidden">{{ translate('common.loading') }}...</span>\r
            </div>\r
            <p class="mt-2 text-muted">{{ translate('common.loading') }}...</p>\r
          </div>\r
\r
          <!-- No Data -->\r
          <div *ngIf="!isLoading && filteredWorkflowItems.length === 0" class="text-center py-5">\r
            <i class="fas fa-inbox fa-3x text-muted mb-3"></i>\r
            <h5 class="text-muted">{{ translate('workflow.no_items_found') }}</h5>\r
            <p class="text-muted">{{ translate('workflow.try_adjusting_filters') }}</p>\r
          </div>\r
\r
          <!-- Workflow Items Table -->\r
          <div *ngIf="!isLoading && filteredWorkflowItems.length > 0" class="table-responsive">\r
            <table class="table table-hover mb-0">\r
              <thead class="table-light">\r
                <tr>\r
                  <th>{{ translate('workflow.id') }}</th>\r
                  <th>{{ translate('workflow.entity_type') }}</th>\r
                  <th>{{ translate('workflow.entity_id') }}</th>\r
                  <th>{{ translate('workflow.action_type') }}</th>\r
                  <th>{{ translate('workflow.description') }}</th>\r
                  <th>{{ translate('workflow.user') }}</th>\r
                  <th>{{ translate('workflow.created_at') }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let item of filteredWorkflowItems; trackBy: trackByFn">\r
                  <td>\r
                    <span class="fw-bold">#{{ item.id }}</span>\r
                  </td>\r
                  <td>\r
                    <span class="badge" [ngClass]="getEntityTypeBadgeClass(item.entityName)">\r
                      {{ translate('workflow.entity_types.' + item.entityName) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <span class="text-muted">#{{ item.entityId }}</span>\r
                  </td>\r
                  <td>\r
                    <span class="badge" [ngClass]="getActionTypeBadgeClass(item.actionType)">\r
                      {{ translate('workflow.action_types.' + item.actionType) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <div class="workflow-description">\r
                      <span class="text-truncate d-inline-block" [title]="item.description">\r
                        {{ item.description }}\r
                      </span>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex flex-column">\r
                      <span class="fw-bold">{{ item.userName || 'Unknown User' }}</span>\r
                      <!-- <small class="text-muted">{{ item.userId }}</small> -->\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex flex-column">\r
                      <span>{{ formatDate(item.createdAt) }}</span>\r
                    </div>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
\r
        <!-- Pagination -->\r
        <div *ngIf="!isLoading && totalPages > 1" class="card-footer">\r
          <div class="pagination-controls">\r
            <div class="page-size-control">\r
              <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
              <select id="pageSize" [(ngModel)]="pageSize" (change)="onPageSizeChange()">\r
                <option value="5">5</option>\r
                <option value="10">10</option>\r
                <option value="25">25</option>\r
                <option value="50">50</option>\r
                <option value="100">100</option>\r
              </select>\r
            </div>\r
            <div class="pagination-info">\r
              <span>{{ translate('common.showing') }} {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalCount) }} {{ translate('common.of') }} {{ totalCount }} {{ translate('workflow.workflow_items') }}</span>\r
            </div>\r
            \r
            <nav aria-label="Workflow pagination">\r
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
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/workflow/workflow-list/workflow-list.css */\n.workflow-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.workflow-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.workflow-title {\n  color: #09365F;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.form-control,\n.form-select {\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  background-color: #fff;\n}\n.form-control:hover,\n.form-select:hover {\n  box-shadow: 0 0 0 0.1rem rgba(21, 134, 56, 0.15);\n}\n.form-control:focus,\n.form-select:focus {\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n  outline: none;\n}\n.form-control:focus-visible,\n.form-select:focus-visible {\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n  outline-offset: 2px;\n}\n.form-control option:checked {\n  color: white;\n}\n.form-control:not([value=""]) option:first-child {\n  color: #6c757d;\n  font-style: italic;\n}\n[dir=rtl] .form-control {\n  background-position: left 0.75rem center;\n  padding-right: 0.75rem;\n  padding-left: 2.5rem;\n}\n.table {\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.table th {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n  padding: 0.75rem 0.5rem;\n  font-size: 0.8rem;\n}\n.table td {\n  padding: 0.75rem 0.5rem;\n  vertical-align: middle;\n  border-bottom: 1px solid #f1f3f4;\n  font-size: 0.8rem;\n}\n.table tbody tr:hover {\n  background-color: #f8f9fa;\n}\n.badge {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 0.5rem 0.75rem;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.bg-success {\n  background:\n    linear-gradient(\n      135deg,\n      #d4edda 0%,\n      #c3e6cb 100%) !important;\n  color: #155724 !important;\n  border: 1px solid #c3e6cb;\n}\n.bg-info {\n  background:\n    linear-gradient(\n      135deg,\n      #d1ecf1 0%,\n      #bee5eb 100%) !important;\n  color: #0c5460 !important;\n  border: 1px solid #bee5eb;\n}\n.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #f8d7da 0%,\n      #f5c6cb 100%) !important;\n  color: #721c24 !important;\n  border: 1px solid #f5c6cb;\n}\n.bg-warning {\n  background:\n    linear-gradient(\n      135deg,\n      #fff3cd 0%,\n      #ffeaa7 100%) !important;\n  color: #856404 !important;\n  border: 1px solid #ffeaa7;\n}\n.bg-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #cce5ff 0%,\n      #99d6ff 100%) !important;\n  color: #004085 !important;\n  border: 1px solid #99d6ff;\n}\n.bg-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #e2e3e5 0%,\n      #d6d8db 100%) !important;\n  color: #383d41 !important;\n  border: 1px solid #d6d8db;\n}\n.bg-dark {\n  background:\n    linear-gradient(\n      135deg,\n      #d1d3d4 0%,\n      #c6c8ca 100%) !important;\n  color: #1b1e21 !important;\n  border: 1px solid #c6c8ca;\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043DFF;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active .page-link {\n  background: #043DFF;\n  border-color: #043DFF;\n  color: white;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n.btn {\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background-color: #158638;\n  border-color: #158638;\n}\n.btn-primary:hover {\n  background-color: #0f5c2a;\n  border-color: #0f5c2a;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.loading-state {\n  text-align: center;\n  padding: 3rem 0;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.empty-state-icon {\n  color: #dee2e6;\n  font-size: 4rem;\n  margin-bottom: 1rem;\n}\n.empty-state-title {\n  color: #495057;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.empty-state-message {\n  color: #6c757d;\n  font-size: 1.1rem;\n}\n.workflow-description {\n  max-width: 200px;\n  word-wrap: break-word;\n}\n.workflow-description .text-truncate {\n  font-size: 0.75rem;\n  line-height: 1.2;\n  max-width: 180px;\n}\n.table td:nth-child(6) {\n  max-width: 120px;\n  font-size: 0.75rem;\n}\n.table td:nth-child(6) .fw-bold {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.table td:nth-child(5) {\n  max-width: 200px;\n  font-size: 0.75rem;\n}\n.card {\n  border: 1px solid #dee2e6;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n  padding: 1.5rem;\n}\n.card-body {\n  padding: 0;\n}\n.card-footer {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1.5rem;\n}\n[dir=rtl] .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-input {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl] .pagination-controls {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n[dir=rtl] .text-end {\n  text-align: left !important;\n}\n[dir=rtl] .text-start {\n  text-align: right !important;\n}\n@media (max-width: 1200px) {\n  .workflow-description {\n    max-width: 150px;\n  }\n  .workflow-description .text-truncate {\n    max-width: 130px;\n  }\n  .table td:nth-child(5) {\n    max-width: 150px;\n  }\n  .table td:nth-child(6) {\n    max-width: 100px;\n  }\n}\n@media (max-width: 992px) {\n  .workflow-description {\n    max-width: 120px;\n  }\n  .workflow-description .text-truncate {\n    max-width: 100px;\n  }\n  .table td:nth-child(5) {\n    max-width: 120px;\n  }\n  .table td:nth-child(6) {\n    max-width: 80px;\n  }\n  .table th,\n  .table td {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .workflow-container {\n    padding: 1rem;\n  }\n  .workflow-header {\n    padding: 1rem;\n  }\n  .workflow-title {\n    font-size: 1.5rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n  .workflow-description {\n    max-width: 100px;\n  }\n  .workflow-description .text-truncate {\n    max-width: 80px;\n    font-size: 0.7rem;\n  }\n  .table-responsive {\n    font-size: 0.75rem;\n  }\n  .table th,\n  .table td {\n    padding: 0.4rem 0.2rem;\n    font-size: 0.7rem;\n  }\n  .table td:nth-child(5) {\n    max-width: 100px;\n  }\n  .table td:nth-child(6) {\n    max-width: 70px;\n  }\n  .d-flex.gap-2 {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  .card-header .d-flex {\n    flex-direction: column;\n    align-items: flex-start !important;\n    gap: 1rem;\n  }\n  .pagination {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  .page-link {\n    min-width: 32px;\n    height: 32px;\n    font-size: 0.75rem;\n  }\n}\n@media (max-width: 576px) {\n  .workflow-container {\n    padding: 0.5rem;\n  }\n  .workflow-description {\n    max-width: 80px;\n  }\n  .workflow-description .text-truncate {\n    max-width: 60px;\n    font-size: 0.65rem;\n  }\n  .table th,\n  .table td {\n    padding: 0.3rem 0.1rem;\n    font-size: 0.65rem;\n  }\n  .table td:nth-child(5) {\n    max-width: 80px;\n  }\n  .table td:nth-child(6) {\n    max-width: 60px;\n  }\n  .pagination-controls {\n    gap: 0.5rem;\n  }\n  .pagination-info {\n    font-size: 0.75rem;\n  }\n}\n.table tbody tr {\n  transition: background-color 0.15s ease-in-out;\n}\n.btn {\n  transition: all 0.15s ease-in-out;\n}\n.table-responsive::-webkit-scrollbar {\n  height: 8px;\n}\n.table-responsive::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n.table-responsive::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n/*# sourceMappingURL=workflow-list-H5F4UVRO.css.map */\n'] }]
  }], () => [{ type: WorkflowService }, { type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowList, { className: "WorkflowList", filePath: "src/app/components/workflow/workflow-list/workflow-list.ts", lineNumber: 12 });
})();

// src/app/components/workflow/workflow-routing.module.ts
var routes = [
  {
    path: "",
    component: WorkflowList
  }
];
var WorkflowRoutingModule = class _WorkflowRoutingModule {
  static \u0275fac = function WorkflowRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/workflow/workflow.module.ts
var WorkflowModule = class _WorkflowModule {
  static \u0275fac = function WorkflowModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WorkflowModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    WorkflowRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowModule, [{
    type: NgModule,
    args: [{
      declarations: [
        WorkflowList
      ],
      imports: [
        CommonModule,
        WorkflowRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }]
  }], null, null);
})();
export {
  WorkflowModule
};
//# sourceMappingURL=chunk-NZHVVHS2.js.map
