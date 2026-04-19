import {
  PermissionGuard
} from "./chunk-SSHCWUIF.js";
import {
  NgNotFoundTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-FL5DCK2E.js";
import {
  HasPermissionDirective,
  SharedModule
} from "./chunk-MEXZR5J4.js";
import {
  UsersService
} from "./chunk-3KSNCDS2.js";
import {
  ConfirmationModalComponent
} from "./chunk-LL4SE2Y3.js";
import {
  EmployeesService
} from "./chunk-5VH27PGN.js";
import "./chunk-5HB5JJNO.js";
import {
  AuthService
} from "./chunk-WFDNWXZA.js";
import "./chunk-3NDCE7HG.js";
import "./chunk-N3R5LOFH.js";
import "./chunk-P35E4WF6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  Injectable,
  LangService,
  Location,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  SlicePipe,
  Subject,
  TranslationService,
  UpperCasePipe,
  ViewChild,
  map,
  setClassMetadata,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L7ZNDW2L.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// src/app/services/tasks.service.ts
var TasksService = class _TasksService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Tasks`;
  constructor(http) {
    this.http = http;
  }
  getAllTasks(page = 1, pageSize = 10) {
    return this.http.get(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
  }
  getAllTasksWithDateFilters(page = 1, pageSize = 10, dueDateFrom, dueDateTo, userSearchId) {
    let params = `page=${page}&pageSize=${pageSize}`;
    if (dueDateFrom) {
      params += `&dueDateFrom=${dueDateFrom}`;
    }
    if (dueDateTo) {
      params += `&dueDateTo=${dueDateTo}`;
    }
    if (userSearchId) {
      params += `&UserSearchId=${userSearchId}`;
    }
    return this.http.get(`${this.apiUrl}?${params}`);
  }
  getAllTasksForCounting() {
    return this.http.get(`${this.apiUrl}?page=1&pageSize=1000`);
  }
  getAllTasksForCountingWithDateFilters(dueDateFrom, dueDateTo, userSearchId) {
    let params = "page=1&pageSize=1000";
    if (dueDateFrom) {
      params += `&dueDateFrom=${dueDateFrom}`;
    }
    if (dueDateTo) {
      params += `&dueDateTo=${dueDateTo}`;
    }
    if (userSearchId) {
      params += `&UserSearchId=${userSearchId}`;
    }
    return this.http.get(`${this.apiUrl}?${params}`);
  }
  getTasksOverview() {
    return this.http.get(`${environment.apiBaseUrl}/Dashboard/tasks/overview`);
  }
  getManagerTasksOverview() {
    return this.http.get(`${environment.apiBaseUrl}/Dashboard/tasks/manager-overview`);
  }
  getTaskById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createTask(task) {
    return this.http.post(this.apiUrl, task);
  }
  updateTask(id, task) {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }
  deleteTask(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateTaskStatus(id, statusUpdate) {
    return this.http.post(`${this.apiUrl}/${id}/status`, statusUpdate);
  }
  bulkUpdateStatus(bulkUpdate) {
    return this.http.post(`${this.apiUrl}/bulk/status`, bulkUpdate);
  }
  bulkReassign(bulkReassign) {
    return this.http.post(`${this.apiUrl}/bulk/reassign`, bulkReassign);
  }
  getTaskUpdates(id) {
    return this.http.get(`${this.apiUrl}/${id}/updates`);
  }
  addTaskUpdate(id, update) {
    return this.http.post(`${this.apiUrl}/${id}/updates`, update);
  }
  getTaskAttachments(id) {
    return this.http.get(`${this.apiUrl}/${id}/attachments`);
  }
  addTaskAttachment(id, attachment) {
    const formData = new FormData();
    formData.append("file", attachment.file);
    if (attachment.description) {
      formData.append("description", attachment.description);
    }
    if (attachment.documentSource) {
      formData.append("documentSource", attachment.documentSource.toString());
    }
    return this.http.post(`${this.apiUrl}/${id}/attachments`, formData);
  }
  deleteAttachment(taskId, attachmentId) {
    return this.http.delete(`${this.apiUrl}/${taskId}/attachments/${attachmentId}`);
  }
  // Employee tasks
  getEmployeeTasks() {
    return this.http.get(`${this.apiUrl}/employee-tasks`);
  }
  // Employee tasks with filters
  getEmployeeTasksWithFilters(dueDateFrom, dueDateTo) {
    let params = "";
    if (dueDateFrom) {
      params += `?dueDateFrom=${dueDateFrom}`;
    }
    if (dueDateTo) {
      params += params ? `&dueDateTo=${dueDateTo}` : `?dueDateTo=${dueDateTo}`;
    }
    return this.http.get(`${this.apiUrl}/employee-tasks${params}`);
  }
  // Feedback functionality
  submitTaskFeedback(taskId, feedback) {
    return this.http.post(`${this.apiUrl}/${taskId}/feedback`, feedback);
  }
  getTaskFeedback(taskId) {
    return this.http.get(`${this.apiUrl}/${taskId}/feedback`);
  }
  // Bulk reassignment
  bulkReassignTasks(bulkReassign) {
    return this.http.post(`${this.apiUrl}/bulk/reassign`, bulkReassign);
  }
  // Get employee names for reassignment
  getEmployeeNames() {
    return this.http.get(`${environment.apiBaseUrl}/Users/names`);
  }
  // Get employees under manager
  getEmployeesUnderManager() {
    return this.http.get(`${environment.apiBaseUrl}/Users/names`).pipe(map((response) => __spreadProps(__spreadValues({}, response), {
      data: response.data.map((item) => ({
        id: item.id,
        fullName: item.name,
        jobTitle: item.departmentName || "",
        email: ""
        // API doesn't return email
      }))
    })));
  }
  // Get managers with search
  getManagerNames(search) {
    let url = `${environment.apiBaseUrl}/Users/manager-names`;
    if (search) {
      url += `?search=${search}`;
    }
    return this.http.get(url);
  }
  // Get all tasks with filters (all endpoint)
  getAllTasksWithFilters(page = 1, pageSize = 10, status, dueDateFrom, dueDateTo, userSearchId) {
    let params = `page=${page}&pageSize=${pageSize}`;
    if (status !== void 0) {
      params += `&status=${status}`;
    }
    if (dueDateFrom) {
      params += `&dueDateFrom=${dueDateFrom}`;
    }
    if (dueDateTo) {
      params += `&dueDateTo=${dueDateTo}`;
    }
    if (userSearchId) {
      params += `&UserSearchId=${userSearchId}`;
    }
    return this.http.get(`${environment.apiBaseUrl}/Tasks/all?${params}`);
  }
  // Get all tasks for counting with filters (all endpoint)
  getAllTasksForCountingWithFilters(status, dueDateFrom, dueDateTo, userSearchId) {
    let params = "page=1&pageSize=1000";
    if (status !== void 0) {
      params += `&status=${status}`;
    }
    if (dueDateFrom) {
      params += `&dueDateFrom=${dueDateFrom}`;
    }
    if (dueDateTo) {
      params += `&dueDateTo=${dueDateTo}`;
    }
    if (userSearchId) {
      params += `&UserSearchId=${userSearchId}`;
    }
    return this.http.get(`${environment.apiBaseUrl}/Tasks/all?${params}`);
  }
  static \u0275fac = function TasksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TasksService, factory: _TasksService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/tasks/tasks.component.ts
var _c0 = ["confirmationModal"];
function TasksComponent_small_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.filters.to_date_before_from_date_error"), " ");
  }
}
function TasksComponent_ng_template_98_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.jobTitle, " ");
  }
}
function TasksComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_ng_template_98_div_3_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.jobTitle);
  }
}
function TasksComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TasksComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275listener("click", function TasksComponent_div_119_Template_div_click_0_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r5));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_119_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_119_Template_input_change_1_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r5.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 162);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 165)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r5.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 7, ctx_r1.translate("tasks.task.createdAt")), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 9, ctx_r1.formatDate(task_r5.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 12, ctx_r1.translate("tasks.task.dueDate")), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 14, ctx_r1.formatDate(task_r5.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275listener("click", function TasksComponent_div_127_Template_div_click_0_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r7));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_127_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_127_Template_input_change_1_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r7.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small", 165)(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r7.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r7.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 7, ctx_r1.translate("tasks.task.createdAt")), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 9, ctx_r1.formatDate(task_r7.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 12, ctx_r1.translate("tasks.task.dueDate")), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 14, ctx_r1.formatDate(task_r7.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function TasksComponent_div_135_Template_div_click_0_listener() {
      const task_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r9));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_135_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_135_Template_input_change_1_listener() {
      const task_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r9.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 165)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r9.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r9.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx_r1.formatDate(task_r9.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.formatDate(task_r9.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275listener("click", function TasksComponent_div_143_Template_div_click_0_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r11));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_143_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_143_Template_input_change_1_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 165)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r11.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r11.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r11.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx_r1.formatDate(task_r11.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.formatDate(task_r11.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275listener("click", function TasksComponent_div_151_Template_div_click_0_listener() {
      const task_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r13));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_151_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_151_Template_input_change_1_listener() {
      const task_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 165)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r13.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r13.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r13.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx_r1.formatDate(task_r13.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.formatDate(task_r13.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171);
    \u0275\u0275listener("click", function TasksComponent_div_159_Template_div_click_0_listener() {
      const task_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r15));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_159_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_159_Template_input_change_1_listener() {
      const task_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r15.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 165)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r15.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r15.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r15.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx_r1.formatDate(task_r15.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.formatDate(task_r15.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 158);
  }
}
function TasksComponent_div_167_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275listener("click", function TasksComponent_div_167_Template_div_click_0_listener() {
      const task_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r17));
    });
    \u0275\u0275elementStart(1, "input", 160);
    \u0275\u0275listener("click", function TasksComponent_div_167_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_167_Template_input_change_1_listener() {
      const task_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTaskSelection(task_r17.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 161)(3, "h6", 167);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 163);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 164)(8, "small", 165)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small", 165)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedTasks.has(task_r17.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateTaskTitle(task_r17.title));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r17.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, ctx_r1.formatDate(task_r17.createdAt), "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 10, ctx_r1.formatDate(task_r17.dueDate), "dd/MM/yyyy"), " ");
  }
}
function TasksComponent_div_182_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 176)(1, "a", 177);
    \u0275\u0275listener("click", function TasksComponent_div_182_li_7_Template_a_click_1_listener($event) {
      const page_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.goToPage(page_r20);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r20 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r20);
  }
}
function TasksComponent_div_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173)(1, "nav", 174)(2, "ul", 175)(3, "li", 176)(4, "a", 177);
    \u0275\u0275listener("click", function TasksComponent_div_182_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goToPage(ctx_r1.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TasksComponent_div_182_li_7_Template, 3, 3, "li", 178);
    \u0275\u0275elementStart(8, "li", 176)(9, "a", 177);
    \u0275\u0275listener("click", function TasksComponent_div_182_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goToPage(ctx_r1.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 179)(13, "span", 82);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.previous"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.getMaxPagesForAnyStatus());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.next"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6(" ", ctx_r1.translate("common.showing"), " ", ctx_r1.getStartIndex(), " - ", ctx_r1.getEndIndex(), " ", ctx_r1.translate("common.of"), " ", ctx_r1.getTotalTasks(), " ", ctx_r1.translate("common.results"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.pagination.note"));
  }
}
function TasksComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "div", 181)(2, "span", 182);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_small_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTitleErrorMessage(ctx_r1.addTaskForm), " ");
  }
}
function TasksComponent_ng_template_207_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r21 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r21.jobTitle, " ");
  }
}
function TasksComponent_ng_template_207_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_ng_template_207_div_3_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r21.jobTitle);
  }
}
function TasksComponent_ng_template_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TasksComponent_small_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
function TasksComponent_div_240_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 112)(2, "div", 187)(3, "span", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 189);
    \u0275\u0275listener("click", function TasksComponent_div_240_div_1_Template_button_click_5_listener() {
      const i_r24 = \u0275\u0275restoreView(_r23).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSelectedFile(i_r24));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 190);
    \u0275\u0275element(7, "path", 191)(8, "path", 192)(9, "path", 193)(10, "path", 194)(11, "path", 195);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 196)(13, "label", 197);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 198);
    \u0275\u0275listener("input", function TasksComponent_div_240_div_1_Template_input_input_15_listener($event) {
      const file_r25 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDescriptionChange(file_r25.name, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 196)(17, "label", 197);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 199);
    \u0275\u0275listener("change", function TasksComponent_div_240_div_1_Template_select_change_19_listener($event) {
      const file_r25 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDocumentSourceChange(file_r25.name, $event));
    });
    \u0275\u0275elementStart(20, "option", 200);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 107);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 108);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 109);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_r25 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(file_r25.name);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isUploadingAttachments)("title", ctx_r1.translate("common.delete") || "Delete");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.form.attachmentDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getAttachmentDescription(file_r25.name))("placeholder", ctx_r1.translate("tasks.form.attachmentDescriptionPlaceholder"))("disabled", ctx_r1.isUploadingAttachments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.form.documentSource"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getAttachmentDocumentSource(file_r25.name))("disabled", ctx_r1.isUploadingAttachments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.selectDocumentSource"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource3"), " ");
  }
}
function TasksComponent_div_240_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275template(1, TasksComponent_div_240_div_1_Template, 28, 14, "div", 185);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedFiles);
  }
}
function TasksComponent_span_243_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 201);
  }
}
function TasksComponent_span_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("common.save"));
  }
}
function TasksComponent_span_245_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("common.saving"));
  }
}
function TasksComponent_span_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("common.saving"));
  }
}
function TasksComponent_small_263_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTitleErrorMessage(ctx_r1.editTaskForm), " ");
  }
}
function TasksComponent_ng_template_276_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r26 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r26.jobTitle, " ");
  }
}
function TasksComponent_ng_template_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_ng_template_276_div_3_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r26 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r26.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r26.jobTitle);
  }
}
function TasksComponent_ng_template_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TasksComponent_small_278_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
function TasksComponent_div_305_div_3_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attachment_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(attachment_r29.description);
  }
}
function TasksComponent_div_305_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 204);
    \u0275\u0275element(1, "i", 205);
    \u0275\u0275elementStart(2, "div", 206)(3, "div", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TasksComponent_div_305_div_3_small_5_Template, 2, 1, "small", 207);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 208);
    \u0275\u0275listener("click", function TasksComponent_div_305_div_3_Template_button_click_6_listener() {
      const attachment_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAttachment(attachment_r29.id, ctx_r1.currentTask.id));
    });
    \u0275\u0275element(7, "i", 209);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r29 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r29.fileName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r29.description);
  }
}
function TasksComponent_div_305_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "h6", 202);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_div_305_div_3_Template, 8, 2, "div", 203);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.existingAttachments"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentTaskAttachments);
  }
}
function TasksComponent_div_306_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212);
    \u0275\u0275element(2, "i", 205);
    \u0275\u0275elementStart(3, "span", 213);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 208);
    \u0275\u0275listener("click", function TasksComponent_div_306_div_3_Template_button_click_5_listener() {
      const i_r31 = \u0275\u0275restoreView(_r30).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSelectedFile(i_r31));
    });
    \u0275\u0275element(6, "i", 209);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 196)(8, "label", 197);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 198);
    \u0275\u0275listener("input", function TasksComponent_div_306_div_3_Template_input_input_10_listener($event) {
      const file_r32 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDescriptionChange(file_r32.name, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 196)(12, "label", 197);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 199);
    \u0275\u0275listener("change", function TasksComponent_div_306_div_3_Template_select_change_14_listener($event) {
      const file_r32 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDocumentSourceChange(file_r32.name, $event));
    });
    \u0275\u0275elementStart(15, "option", 200);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 107);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 108);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 109);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(file_r32.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.form.attachmentDescription"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getAttachmentDescription(file_r32.name))("placeholder", ctx_r1.translate("tasks.form.attachmentDescriptionPlaceholder"))("disabled", ctx_r1.isUploadingAttachments);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.form.documentSource"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.getAttachmentDocumentSource(file_r32.name))("disabled", ctx_r1.isUploadingAttachments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.selectDocumentSource"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource2"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.documentSource3"), " ");
  }
}
function TasksComponent_div_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "h6", 202);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_div_306_div_3_Template, 23, 12, "div", 210);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.newAttachments"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedFiles);
  }
}
function TasksComponent_div_318_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noAttachments"), " ");
  }
}
function TasksComponent_div_318_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 235);
    \u0275\u0275element(1, "i", 236);
    \u0275\u0275elementStart(2, "div", 206)(3, "div", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 82);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 208);
    \u0275\u0275listener("click", function TasksComponent_div_318_div_43_Template_button_click_8_listener() {
      const attachment_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAttachment(attachment_r35.id, ctx_r1.currentTask.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 237);
    \u0275\u0275element(10, "polyline", 238)(11, "path", 239)(12, "path", 191)(13, "path", 192)(14, "path", 240);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r35 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r35.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", attachment_r35.uploadedByName, " - ", \u0275\u0275pipeBind2(7, 3, ctx_r1.formatDate(attachment_r35.uploadedAt), "dd/MM/yyyy"));
  }
}
function TasksComponent_div_318_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noUpdates"), " ");
  }
}
function TasksComponent_div_318_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 241)(1, "div", 206)(2, "div", 188);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 82);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const update_r37 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(update_r37.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", update_r37.createdByName, " - ", \u0275\u0275pipeBind2(6, 3, ctx_r1.formatDate(update_r37.createdAt), "dd/MM/yyyy"));
  }
}
function TasksComponent_div_318_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noFeedback"), " ");
  }
}
function TasksComponent_div_318_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 241)(1, "div", 206)(2, "div", 188);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 82);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r38.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r38.employeeName, " - ", \u0275\u0275pipeBind2(6, 3, ctx_r1.formatDate(feedback_r38.createdAt), "dd/MM/yyyy"));
  }
}
function TasksComponent_div_318_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 45)(2, "div", 214)(3, "h4", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 215)(6, "div", 216)(7, "div", 212);
    \u0275\u0275element(8, "i", 217);
    \u0275\u0275elementStart(9, "span", 82);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 218);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 212);
    \u0275\u0275element(14, "i", 219);
    \u0275\u0275elementStart(15, "span", 82);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 220);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 216)(20, "div", 212);
    \u0275\u0275element(21, "i", 221);
    \u0275\u0275elementStart(22, "span", 82);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 218);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 212);
    \u0275\u0275element(29, "i", 222);
    \u0275\u0275elementStart(30, "span", 82);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 218);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 223)(35, "h6");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 224);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 223)(40, "h6");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, TasksComponent_div_318_div_42_Template, 2, 1, "div", 225)(43, TasksComponent_div_318_div_43_Template, 15, 6, "div", 226);
    \u0275\u0275elementStart(44, "div", 184)(45, "input", 227, 3);
    \u0275\u0275listener("change", function TasksComponent_div_318_Template_input_change_45_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event, ctx_r1.currentTask.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 115);
    \u0275\u0275listener("click", function TasksComponent_div_318_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r33);
      const detailsFileInput_r36 = \u0275\u0275reference(46);
      return \u0275\u0275resetView(detailsFileInput_r36.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 116);
    \u0275\u0275element(49, "line", 41)(50, "line", 42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 223)(52, "h6");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, TasksComponent_div_318_div_54_Template, 2, 1, "div", 225)(55, TasksComponent_div_318_div_55_Template, 7, 6, "div", 228);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 223)(57, "h6");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, TasksComponent_div_318_div_59_Template, 2, 1, "div", 225)(60, TasksComponent_div_318_div_60_Template, 7, 6, "div", 228);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 229)(62, "div", 230)(63, "button", 231);
    \u0275\u0275listener("click", function TasksComponent_div_318_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTaskModal(ctx_r1.currentTask));
    });
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 232);
    \u0275\u0275listener("click", function TasksComponent_div_318_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatusUpdateModal = true);
    });
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "button", 233);
    \u0275\u0275listener("click", function TasksComponent_div_318_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddUpdateModal = true);
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 234);
    \u0275\u0275listener("click", function TasksComponent_div_318_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTask(ctx_r1.currentTask));
    });
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.status"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.currentTask.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(ctx_r1.currentTask.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.duration"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(26, 29, ctx_r1.formatDate(ctx_r1.currentTask.createdAt), "dd/MM/yyyy"), " - ", \u0275\u0275pipeBind2(27, 32, ctx_r1.formatDate(ctx_r1.currentTask.dueDate), "dd/MM/yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.assigneeName || ctx_r1.translate("tasks.task.noAssignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTask.description || ctx_r1.translate("tasks.task.noSubtasks"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.attachments"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskAttachments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentTaskAttachments);
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("tasks.task.addAttachment"))("aria-label", ctx_r1.translate("tasks.task.addAttachment"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.updatesTimeline"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskUpdates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentTaskUpdates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.feedback"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentTaskFeedback);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.changeStatus"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.addUpdate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.delete"), " ");
  }
}
function TasksComponent_div_330_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275element(1, "i", 243);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.dialogs.taskCompletedWarning"), " ");
  }
}
function TasksComponent_option_337_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 200);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.new"), " ");
  }
}
function TasksComponent_option_338_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.inProgress"), " ");
  }
}
function TasksComponent_option_339_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.done"), " ");
  }
}
function TasksComponent_option_340_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.stopped"), " ");
  }
}
function TasksComponent_option_341_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 244);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.late"), " ");
  }
}
function TasksComponent_option_342_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 245);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.returned"), " ");
  }
}
function TasksComponent_option_343_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 246);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.review"), " ");
  }
}
function TasksComponent_ng_template_382_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r39 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r39.jobTitle, " ");
  }
}
function TasksComponent_ng_template_382_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_ng_template_382_div_3_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r39 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r39.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r39.jobTitle);
  }
}
function TasksComponent_ng_template_383_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reassignEmployeeSearchError || ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TasksComponent_small_384_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
function TasksComponent_div_402_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 247);
    \u0275\u0275element(2, "path", 248)(3, "path", 249)(4, "path", 250);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.bulk.completedTasksWarning"), " ");
  }
}
function TasksComponent_option_409_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 200);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.new"), " ");
  }
}
function TasksComponent_option_410_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.inProgress"), " ");
  }
}
function TasksComponent_option_411_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.done"), " ");
  }
}
function TasksComponent_option_412_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.stopped"), " ");
  }
}
function TasksComponent_option_413_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 244);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.late"), " ");
  }
}
function TasksComponent_option_414_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 245);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.returned"), " ");
  }
}
function TasksComponent_option_415_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 246);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.status.review"), " ");
  }
}
function TasksComponent_ng_template_437_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r40 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r40.jobTitle, " ");
  }
}
function TasksComponent_ng_template_437_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TasksComponent_ng_template_437_div_3_Template, 2, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r40 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r40.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r40.jobTitle);
  }
}
function TasksComponent_ng_template_438_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275element(1, "i", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.bulkReassignEmployeeSearchError || ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TasksComponent_small_439_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 183);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
var TasksComponent = class _TasksComponent {
  tasksService;
  usersService;
  employeesService;
  translationService;
  langService;
  authService;
  fb;
  cdr;
  router;
  route;
  confirmationModal;
  // Data
  tasks = [];
  allTasksForCounting = [];
  // Store all tasks for status counting
  managerTasksOverview = null;
  users = [];
  directEmployees = [];
  employeesUnderManager = [];
  filteredEmployees = [];
  showEmployeeDropdown = false;
  // Add task modal employee search
  addTaskModalEmployees = [];
  isSearchingEmployees = false;
  employeeSearchError = null;
  // Edit task modal employee search
  editTaskModalEmployees = [];
  filteredEditTaskModalEmployees = [];
  showEditTaskModalEmployeeDropdown = false;
  isSearchingEditTaskEmployees = false;
  editTaskEmployeeSearchError = null;
  // Reassign modal employee search
  reassignModalEmployees = [];
  filteredReassignModalEmployees = [];
  showReassignModalEmployeeDropdown = false;
  isSearchingReassignEmployees = false;
  reassignEmployeeSearchError = null;
  // Bulk reassign modal employee search
  bulkReassignModalEmployees = [];
  filteredBulkReassignModalEmployees = [];
  showBulkReassignModalEmployeeDropdown = false;
  isSearchingBulkReassignEmployees = false;
  bulkReassignEmployeeSearchError = null;
  // User role
  isManager = false;
  // Language
  currentLang = "en";
  // UI state
  selectedTasks = /* @__PURE__ */ new Set();
  isLoading = false;
  isSavingTask = false;
  showBulkToolbar = false;
  // Server-side pagination state
  currentPage = 1;
  pageSize = 10;
  // Small page size to force pagination
  totalCount = 0;
  totalPages = 1;
  pageSizeOptions = [5, 10, 15, 20];
  // Custom pagination for better column distribution
  allTasks = [];
  // Store all tasks for custom pagination
  // Modal visibility
  showAddTaskModal = false;
  showEditTaskModal = false;
  showTaskDetailsModal = false;
  showStatusUpdateModal = false;
  showReassignModal = false;
  showAddUpdateModal = false;
  showBulkStatusModal = false;
  showBulkReassignModal = false;
  // Current task and details
  currentTask = null;
  currentTaskDetails = null;
  currentTaskAttachments = [];
  currentTaskUpdates = [];
  currentTaskFeedback = [];
  // File handling
  selectedFiles = [];
  attachmentDescriptions = {};
  attachmentDocumentSources = {};
  isUploadingAttachments = false;
  uploadProgress = { current: 0, total: 0 };
  // Forms
  addTaskForm;
  editTaskForm;
  statusUpdateForm;
  reassignForm;
  addUpdateForm;
  bulkStatusForm;
  bulkReassignForm;
  filterForm;
  // Status mapping
  STATUS_MAP = {
    0: "new",
    1: "inProgress",
    2: "done",
    3: "stopped",
    4: "late",
    5: "returned",
    6: "review"
  };
  PRIORITY_MAP = {
    1: "high",
    2: "medium",
    3: "low"
  };
  constructor(tasksService, usersService, employeesService, translationService, langService, authService, fb, cdr, router, route) {
    this.tasksService = tasksService;
    this.usersService = usersService;
    this.employeesService = employeesService;
    this.translationService = translationService;
    this.langService = langService;
    this.authService = authService;
    this.fb = fb;
    this.cdr = cdr;
    this.router = router;
    this.route = route;
    this.initializeForms();
  }
  ngOnInit() {
    this.checkUserRole();
    this.loadData().then(() => {
      this.route.queryParams.pipe(take(1)).subscribe((params) => {
        const editTaskId = params["editTaskId"];
        if (editTaskId) {
          const taskId = +editTaskId;
          const foundTask = this.tasks.find((t) => t.id === taskId);
          if (foundTask) {
            this.openEditModalForTask(foundTask);
          } else {
            this.tasksService.getTaskById(taskId).subscribe({
              next: (response) => {
                if (response.success && response.data) {
                  this.openEditModalForTask(response.data);
                }
              },
              error: (error) => {
                console.error("Error loading task for edit:", error);
              }
            });
          }
        }
      });
    });
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });
  }
  openEditModalForTask(task) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { editTaskId: null },
      queryParamsHandling: "merge"
    });
    setTimeout(() => {
      this.openEditTaskModal(task);
    }, 100);
  }
  initializeForms() {
    this.filterForm = this.fb.group({
      dueDateFrom: [""],
      dueDateTo: [""],
      employeeId: [""],
      employeeSearch: [""]
    });
    this.addTaskForm = this.fb.group({
      title: ["", [Validators.required]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      assigneeSearch: [""],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(40)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      assigneeSearch: [""],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.statusUpdateForm = this.fb.group({
      status: ["", Validators.required],
      note: [""]
      // Made optional for status update
    });
    this.reassignForm = this.fb.group({
      newAssigneeUserId: ["", Validators.required],
      assigneeSearch: [""],
      note: [""]
      // Made optional for reassign
    });
    this.addUpdateForm = this.fb.group({
      note: ["", Validators.required]
    });
    this.bulkStatusForm = this.fb.group({
      status: ["", Validators.required],
      note: [""]
      // Made optional for bulk status update
    });
    this.bulkReassignForm = this.fb.group({
      newAssigneeUserId: ["", Validators.required],
      assigneeSearch: [""],
      note: [""]
      // Made optional for bulk reassign
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield this.loadTasks();
        yield this.loadAllTasksForCounting();
        yield Promise.all([
          this.loadTasksOverview(),
          this.loadUsers(),
          this.loadDirectEmployees(),
          this.loadEmployeesUnderManager()
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  checkUserRole() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.roles) {
      this.isManager = currentUser.roles.includes("Manager") || currentUser.roles.includes("manager");
    }
  }
  loadTasksOverview() {
    return __async(this, null, function* () {
      try {
        const overview = yield this.tasksService.getManagerTasksOverview().toPromise();
        this.managerTasksOverview = overview || null;
      } catch (error) {
        console.error("Error loading tasks overview:", error);
        this.managerTasksOverview = null;
      }
    });
  }
  loadTasks() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        const adjustedToDate = this.getInclusiveEndDate(formValue.dueDateTo);
        this.tasksService.getAllTasksWithDateFilters(this.currentPage, this.pageSize, formValue.dueDateFrom || void 0, adjustedToDate, formValue.employeeId || void 0).subscribe({
          next: (response) => {
            if (response.success && response.data?.items) {
              this.tasks = response.data.items;
              this.totalCount = response.data.totalCount || 0;
              this.totalPages = Math.ceil(this.totalCount / this.pageSize);
              this.allTasks = response.data.items;
            } else {
              console.log("No tasks found or API error:", response);
            }
            resolve();
          },
          error: (error) => {
            console.error("Error loading tasks:", error);
            reject(error);
          }
        });
      });
    });
  }
  loadAllTasksForCounting() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        const adjustedToDate = this.getInclusiveEndDate(formValue.dueDateTo);
        this.tasksService.getAllTasksForCountingWithDateFilters(formValue.dueDateFrom || void 0, adjustedToDate, formValue.employeeId || void 0).subscribe({
          next: (response) => {
            if (response.success && response.data?.items) {
              this.allTasksForCounting = response.data.items;
            }
            resolve();
          },
          error: (error) => {
            console.error("Error loading all tasks for counting:", error);
            reject(error);
          }
        });
      });
    });
  }
  /**
   * Adjust end date to be inclusive by adding one day
   */
  getInclusiveEndDate(dateValue) {
    if (!dateValue) {
      return void 0;
    }
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      return dateValue;
    }
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  loadUsers() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.usersService.getUserNames().subscribe({
          next: (users) => {
            this.users = users;
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadDirectEmployees() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.usersService.getDirectEmployees().subscribe({
          next: (employees) => {
            this.directEmployees = employees;
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadEmployeesUnderManager() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getEmployeesUnderManager().subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.employeesUnderManager = response.data.map((emp) => ({
                id: emp.id,
                fullName: emp.fullName,
                jobTitle: emp.jobTitle,
                email: emp.email
              }));
              this.filteredEmployees = this.employeesUnderManager;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  // Task grouping by status - show max 5 tasks per column with custom pagination
  getTasksByStatus(status) {
    const allStatusTasks = this.allTasksForCounting.filter((task) => task.status === status);
    const tasksPerPage = 5;
    const startIndex = (this.currentPage - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    return allStatusTasks.slice(startIndex, endIndex);
  }
  // Task selection
  toggleTaskSelection(taskId) {
    if (this.selectedTasks.has(taskId)) {
      this.selectedTasks.delete(taskId);
    } else {
      this.selectedTasks.add(taskId);
    }
    this.updateBulkToolbar();
  }
  selectAllTasks() {
    if (this.selectedTasks.size === this.tasks.length) {
      this.selectedTasks.clear();
    } else {
      this.tasks.forEach((task) => this.selectedTasks.add(task.id));
    }
    this.updateBulkToolbar();
  }
  deselectAllTasks() {
    this.selectedTasks.clear();
    this.updateBulkToolbar();
  }
  // Custom pagination methods for column-based distribution
  goToPage(page) {
    if (page >= 1 && page <= this.getMaxPagesForAnyStatus() && page !== this.currentPage) {
      this.currentPage = page;
    }
  }
  getMaxPagesForAnyStatus() {
    const maxTasks = Math.max(
      this.getStatusTaskCount(0),
      // New
      this.getStatusTaskCount(1),
      // In Progress
      this.getStatusTaskCount(2),
      // Done
      this.getStatusTaskCount(3),
      // Stopped
      this.getStatusTaskCount(4),
      // Late
      this.getStatusTaskCount(5),
      // Returned
      this.getStatusTaskCount(6)
      // Review
    );
    return Math.ceil(maxTasks / 5);
  }
  onPageSizeChange(event) {
    const target = event.target;
    const newPageSize = +target.value;
    if (newPageSize !== this.pageSize) {
      this.pageSize = newPageSize;
      this.currentPage = 1;
      this.loadTasks();
    }
  }
  getPageNumbers() {
    const pages = [];
    const maxPages = this.getMaxPagesForAnyStatus();
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(maxPages, this.currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStartIndex() {
    return (this.currentPage - 1) * 5 + 1;
  }
  getEndIndex() {
    const maxTasks = Math.max(this.getStatusTaskCount(0), this.getStatusTaskCount(1), this.getStatusTaskCount(2), this.getStatusTaskCount(3), this.getStatusTaskCount(4), this.getStatusTaskCount(5), this.getStatusTaskCount(6));
    return Math.min(this.currentPage * 5, maxTasks);
  }
  getTotalTasks() {
    return this.totalCount;
  }
  getStatusTaskCount(status) {
    return this.allTasksForCounting.filter((task) => task.status === status).length;
  }
  getStatusTasksOnCurrentPage(status) {
    const allStatusTasks = this.allTasksForCounting.filter((task) => task.status === status);
    const tasksPerPage = 5;
    const startIndex = (this.currentPage - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    return allStatusTasks.slice(startIndex, endIndex).length;
  }
  getStatusTasksOnOtherPages(status) {
    const totalForStatus = this.getStatusTaskCount(status);
    const onCurrentPage = this.getStatusTasksOnCurrentPage(status);
    return Math.max(0, totalForStatus - onCurrentPage);
  }
  updateBulkToolbar() {
    this.showBulkToolbar = this.selectedTasks.size > 0;
  }
  // Modal management
  closeAllModals() {
    this.showAddTaskModal = false;
    this.showEditTaskModal = false;
    this.showTaskDetailsModal = false;
    this.showStatusUpdateModal = false;
    this.showReassignModal = false;
    this.showAddUpdateModal = false;
    this.showBulkStatusModal = false;
    this.showBulkReassignModal = false;
    this.isSavingTask = false;
    this.isUploadingAttachments = false;
    this.updateBodyClass();
  }
  canOpenModal() {
    return !this.showAddTaskModal && !this.showEditTaskModal && !this.showStatusUpdateModal && !this.showReassignModal && !this.showAddUpdateModal && !this.showBulkStatusModal && !this.showBulkReassignModal;
  }
  updateBodyClass() {
    const hasOpenModal = this.showAddTaskModal || this.showEditTaskModal || this.showTaskDetailsModal || this.showStatusUpdateModal || this.showReassignModal || this.showAddUpdateModal || this.showBulkStatusModal || this.showBulkReassignModal;
    if (hasOpenModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }
  // Task actions
  openAddTaskModal() {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.showAddTaskModal = true;
      this.addTaskForm.reset();
      this.addTaskModalEmployees = [];
      this.employeeSearchError = null;
      this.updateBodyClass();
    }
  }
  openEditTaskModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.editTaskModalEmployees = [];
      this.filteredEditTaskModalEmployees = [];
      this.showEditTaskModalEmployeeDropdown = false;
      this.editTaskEmployeeSearchError = null;
      this.editTaskForm.patchValue({
        title: task.title,
        description: task.description,
        assigneeUserId: task.assigneeUserId,
        assigneeSearch: task.assigneeName || "",
        priority: task.priority,
        dueDate: this.formatDateForInput(task.dueDate),
        sourceType: task.sourceType
      });
      this.loadTaskAttachments(task.id);
      this.showEditTaskModal = true;
      this.updateBodyClass();
    }
  }
  openTaskDetailsModal(task) {
    this.router.navigate(["/tasks/details", task.id]);
  }
  openStatusUpdateModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.showStatusUpdateModal = true;
      this.statusUpdateForm.reset();
      this.updateBodyClass();
    }
  }
  openReassignModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.reassignModalEmployees = [];
      this.filteredReassignModalEmployees = [];
      this.showReassignModalEmployeeDropdown = false;
      this.reassignEmployeeSearchError = null;
      this.showReassignModal = true;
      this.reassignForm.reset();
      this.updateBodyClass();
    }
  }
  openAddUpdateModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.showAddUpdateModal = true;
      this.addUpdateForm.reset();
      this.updateBodyClass();
    }
  }
  openBulkStatusModal() {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.showBulkStatusModal = true;
      this.bulkStatusForm.reset();
      this.updateBodyClass();
    }
  }
  openBulkReassignModal() {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.bulkReassignModalEmployees = [];
      this.filteredBulkReassignModalEmployees = [];
      this.showBulkReassignModalEmployeeDropdown = false;
      this.bulkReassignEmployeeSearchError = null;
      this.showBulkReassignModal = true;
      this.bulkReassignForm.reset();
      this.updateBodyClass();
    }
  }
  loadTaskAttachments(taskId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskAttachments(taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.currentTaskAttachments = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadTaskUpdates(taskId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskUpdates(taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.currentTaskUpdates = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadTaskFeedback(taskId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskFeedback(taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.currentTaskFeedback = response.data;
            } else {
              this.currentTaskFeedback = [];
            }
            resolve();
          },
          error: (error) => {
            console.error("Error loading task feedback:", error);
            this.currentTaskFeedback = [];
            resolve();
          }
        });
      });
    });
  }
  // Form submissions
  onSubmitAddTask() {
    return __async(this, null, function* () {
      if (this.addTaskForm.valid) {
        try {
          this.isSavingTask = true;
          this.isLoading = true;
          const formValue = this.addTaskForm.value;
          const taskData = {
            title: formValue.title,
            description: formValue.description || "",
            assigneeUserId: formValue.assigneeUserId,
            priority: Number(formValue.priority),
            dueDate: formValue.dueDate,
            sourceType: Number(formValue.sourceType || 0)
          };
          console.log("Submitting task data:", taskData);
          const response = yield this.tasksService.createTask(taskData).toPromise();
          if (response && response.success) {
            const taskId = response.data?.id;
            if (this.selectedFiles && this.selectedFiles.length > 0 && taskId) {
              this.isUploadingAttachments = true;
              yield this.uploadAttachmentsToTask(taskId);
              this.isUploadingAttachments = false;
            }
            yield this.loadTasks();
            yield this.loadAllTasksForCounting();
            this.closeModal("showAddTaskModal");
            if (this.confirmationModal) {
              const modalData = {
                title: this.translate("tasks.dialogs.createSuccess"),
                message: this.translate("tasks.dialogs.createSuccess"),
                confirmText: this.translate("common.ok"),
                cancelText: this.translate("common.close"),
                type: "info"
              };
              this.confirmationModal.show(modalData);
              const subscription = this.confirmationModal.confirm.subscribe(() => {
                subscription.unsubscribe();
              });
            }
          }
        } catch (error) {
          console.error("Error creating task:", error);
          this.showErrorMessage(this.translate("tasks.dialogs.createError"));
        } finally {
          this.isLoading = false;
          this.isSavingTask = false;
          this.isUploadingAttachments = false;
        }
      }
    });
  }
  onSubmitEditTask() {
    return __async(this, null, function* () {
      if (this.editTaskForm.valid && this.currentTask) {
        try {
          const formValue = this.editTaskForm.value;
          const titleValue = String(formValue.title || "").trim();
          if (!titleValue) {
            this.showErrorMessage("Title is required");
            return;
          }
          let priorityValue;
          if (typeof formValue.priority === "string") {
            priorityValue = parseInt(formValue.priority, 10);
          } else if (typeof formValue.priority === "number") {
            priorityValue = formValue.priority;
          } else {
            this.showErrorMessage("Invalid priority value");
            return;
          }
          if (isNaN(priorityValue) || priorityValue < 1 || priorityValue > 3) {
            this.showErrorMessage("Invalid priority value");
            return;
          }
          let formattedDueDate = formValue.dueDate;
          if (formattedDueDate && typeof formattedDueDate === "string") {
            if (formattedDueDate.includes("T") && !formattedDueDate.includes("Z")) {
              formattedDueDate = new Date(formattedDueDate).toISOString();
            }
          } else if (formattedDueDate instanceof Date) {
            formattedDueDate = formattedDueDate.toISOString();
          }
          let sourceTypeValue;
          if (typeof formValue.sourceType === "string") {
            sourceTypeValue = parseInt(formValue.sourceType, 10);
          } else if (typeof formValue.sourceType === "number") {
            sourceTypeValue = formValue.sourceType;
          } else {
            sourceTypeValue = 0;
          }
          const updateRequest = {
            title: titleValue,
            // Use validated title
            description: String(formValue.description || ""),
            assigneeUserId: String(formValue.assigneeUserId || ""),
            priority: +priorityValue,
            // Use unary plus to ensure it's a number
            dueDate: String(formattedDueDate || ""),
            sourceType: +sourceTypeValue,
            // Use unary plus to ensure it's a number
            sourceId: 0
            // Optional field from API schema
          };
          yield this.tasksService.updateTask(this.currentTask.id, updateRequest).toPromise();
          yield this.loadTasks();
          yield this.loadAllTasksForCounting();
          this.closeModal("showEditTaskModal");
          if (this.confirmationModal) {
            const modalData = {
              title: this.translate("tasks.dialogs.updateSuccess"),
              message: this.translate("tasks.dialogs.updateSuccess"),
              confirmText: this.translate("common.ok"),
              cancelText: this.translate("common.close"),
              type: "info"
            };
            this.confirmationModal.show(modalData);
            const subscription = this.confirmationModal.confirm.subscribe(() => {
              subscription.unsubscribe();
            });
          }
        } catch (error) {
          console.error("Error updating task:", error);
          this.showErrorMessage(this.translate("tasks.dialogs.updateError"));
        }
      }
    });
  }
  // Task actions
  deleteTask(task) {
    return __async(this, null, function* () {
      if (!this.confirmationModal) {
        console.error("Confirmation modal not initialized");
        return;
      }
      const modalData = {
        title: this.translate("tasks.dialogs.confirmDelete"),
        message: this.translate("tasks.dialogs.confirmDelete"),
        confirmText: this.translate("common.delete"),
        cancelText: this.translate("common.cancel"),
        type: "delete"
      };
      this.confirmationModal.show(modalData);
      const confirmSubscription = this.confirmationModal.confirm.subscribe(() => __async(this, null, function* () {
        try {
          yield this.tasksService.deleteTask(task.id).toPromise();
          yield this.loadTasks();
          yield this.loadAllTasksForCounting();
          if (this.showTaskDetailsModal && this.currentTask?.id === task.id) {
            this.closeModal("showTaskDetailsModal");
          }
          this.showSuccessMessage(this.translate("tasks.dialogs.deleteSuccess"));
          confirmSubscription.unsubscribe();
          cancelSubscription.unsubscribe();
        } catch (error) {
          console.error("Error deleting task:", error);
          this.showErrorMessage(this.translate("tasks.dialogs.deleteError"));
          confirmSubscription.unsubscribe();
          cancelSubscription.unsubscribe();
        }
      }));
      const cancelSubscription = this.confirmationModal.cancel.subscribe(() => {
        confirmSubscription.unsubscribe();
        cancelSubscription.unsubscribe();
      });
    });
  }
  // Filter methods
  onFilterChange() {
    this.currentPage = 1;
    this.loadData();
  }
  /**
   * Handle from date change
   * Validates that to date is not before from date
   */
  onFromDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (fromDateValue && toDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Handle to date change
   * Validates that to date is not before from date
   */
  onToDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (toDateValue && fromDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Get minimum date for to date input (should be from date if selected)
   */
  getMinToDate() {
    return this.filterForm.get("dueDateFrom")?.value || "";
  }
  applyFilters() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (fromDateValue && toDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
    this.currentPage = 1;
    this.loadData();
  }
  clearFilters() {
    this.filterForm.reset();
    this.currentPage = 1;
    this.filteredEmployees = this.employeesUnderManager;
    this.showEmployeeDropdown = false;
    this.loadData();
  }
  // Employee search functionality
  onEmployeeSearch() {
    const searchTerm = this.filterForm.get("employeeSearch")?.value;
    if (searchTerm && searchTerm.length > 0) {
      this.filteredEmployees = this.employeesUnderManager.filter((employee) => employee.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      this.filteredEmployees = this.employeesUnderManager;
    }
    this.showEmployeeDropdown = true;
  }
  // Show all employees when field is focused
  onEmployeeSearchFocus() {
    this.filteredEmployees = this.employeesUnderManager;
    this.showEmployeeDropdown = true;
  }
  // Hide dropdown when clicking outside
  onEmployeeSearchBlur() {
    setTimeout(() => {
      this.showEmployeeDropdown = false;
    }, 200);
  }
  // ng-select methods for employee filter
  onEmployeeFilterSearchNgSelect(event) {
  }
  onEmployeeFilterSearchFocus() {
    if (this.employeesUnderManager.length === 0) {
      this.loadEmployeesUnderManager();
    }
  }
  // Select employee from dropdown
  selectEmployee(employee) {
    this.filterForm.get("employeeId")?.setValue(employee.id);
    this.filterForm.get("employeeSearch")?.setValue("");
    this.filteredEmployees = this.employeesUnderManager;
    this.showEmployeeDropdown = false;
    this.cdr.detectChanges();
  }
  // Get selected employee
  getSelectedEmployee() {
    const employeeId = this.filterForm.get("employeeId")?.value;
    if (employeeId) {
      return this.employeesUnderManager.find((e) => e.id === employeeId) || null;
    }
    return null;
  }
  // Clear selected employee
  clearSelectedEmployee() {
    this.filterForm.get("employeeId")?.setValue("");
    this.filterForm.get("employeeSearch")?.setValue("");
    this.showEmployeeDropdown = false;
  }
  // Get employee initials for avatar
  getEmployeeInitials(name) {
    if (!name)
      return "";
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  }
  // Show all employees (clear search)
  showAllEmployees() {
    this.filterForm.get("employeeSearch")?.setValue("");
    this.filteredEmployees = this.employeesUnderManager;
    this.showEmployeeDropdown = true;
  }
  // Add task modal employee search functionality for ng-select
  onAddTaskModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isSearchingEmployees = true;
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.searchEmployeesForAddTask(searchTerm.trim());
      }, 300);
    } else if (searchTerm.length === 0) {
      this.loadAllEmployeesForAddTask();
    }
  }
  searchEmployeesForAddTask(searchTerm) {
    this.employeeSearchError = null;
    this.employeesService.searchEmployeeNames(searchTerm).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.addTaskModalEmployees = response.data;
        } else {
          this.addTaskModalEmployees = [];
        }
        this.isSearchingEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching employees:", error);
        this.addTaskModalEmployees = [];
        this.isSearchingEmployees = false;
        this.cdr.detectChanges();
      }
    });
  }
  onAddTaskModalEmployeeSearchFocus() {
    if (this.addTaskModalEmployees.length === 0) {
      this.loadAllEmployeesForAddTask();
    }
  }
  loadAllEmployeesForAddTask() {
    this.employeeSearchError = null;
    this.isSearchingEmployees = true;
    this.employeesService.searchEmployeeNames("").subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.addTaskModalEmployees = response.data;
        } else {
          this.addTaskModalEmployees = [];
        }
        this.isSearchingEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.addTaskModalEmployees = [];
        this.isSearchingEmployees = false;
        this.cdr.detectChanges();
      }
    });
  }
  // Edit task modal employee search functionality
  onEditTaskModalEmployeeSearch() {
    const searchTerm = this.editTaskForm.get("assigneeSearch")?.value;
    if (searchTerm && searchTerm.length >= 2) {
      this.isSearchingEditTaskEmployees = true;
      clearTimeout(this.editTaskSearchTimeout);
      this.editTaskSearchTimeout = setTimeout(() => {
        this.searchEmployeesForEditTask(searchTerm);
      }, 300);
    } else if (searchTerm && searchTerm.length === 0) {
      if (this.editTaskModalEmployees.length > 0) {
        this.filteredEditTaskModalEmployees = this.editTaskModalEmployees;
        this.showEditTaskModalEmployeeDropdown = true;
      } else {
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = false;
      }
    } else if (searchTerm && searchTerm.length === 1) {
      if (this.editTaskModalEmployees.length > 0) {
        this.filteredEditTaskModalEmployees = this.editTaskModalEmployees.filter((emp) => emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || emp.jobTitle && emp.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));
        this.showEditTaskModalEmployeeDropdown = this.filteredEditTaskModalEmployees.length > 0;
      } else {
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = false;
      }
    }
  }
  // private searchEmployeesForEditTask(searchTerm: string) {
  //   this.editTaskEmployeeSearchError = null;
  //   this.employeesService.searchEmployeeNames(searchTerm).subscribe({
  //     next: (response) => {
  //       if (response.success && response.data && response.data.length > 0) {
  //         this.editTaskModalEmployees = response.data;
  //         this.filteredEditTaskModalEmployees = response.data;
  //         this.showEditTaskModalEmployeeDropdown = true;
  //         this.editTaskEmployeeSearchError = null;
  //       } else if (response.success && response.data && response.data.length === 0) {
  //         const apiMessage = response.message || '';
  //         if (apiMessage.toLowerCase().includes('subordinate') || apiMessage.toLowerCase().includes('no employees')) {
  //           this.filteredEditTaskModalEmployees = [];
  //           this.showEditTaskModalEmployeeDropdown = true;
  //           this.editTaskEmployeeSearchError = this.translate('tasks.form.noSubordinatesEmployeeFound');
  //         } else {
  //           this.filteredEditTaskModalEmployees = [];
  //           this.showEditTaskModalEmployeeDropdown = true;
  //           this.editTaskEmployeeSearchError = null;
  //         }
  //       } else {
  //         const apiMessage = response.message || '';
  //         if (apiMessage.toLowerCase().includes('subordinate') || apiMessage.toLowerCase().includes('no employees')) {
  //           this.filteredEditTaskModalEmployees = [];
  //           this.showEditTaskModalEmployeeDropdown = true;
  //           this.editTaskEmployeeSearchError = this.translate('tasks.form.noSubordinatesEmployeeFound');
  //         } else {
  //           this.filteredEditTaskModalEmployees = [];
  //           this.showEditTaskModalEmployeeDropdown = true;
  //           this.editTaskEmployeeSearchError = this.translate('tasks.form.failedToSearchEmployees');
  //         }
  //       }
  //       this.isSearchingEditTaskEmployees = false;
  //       this.cdr.detectChanges();
  //     },
  //     error: (error) => {
  //       console.error('Error searching employees:', error);
  //       this.filteredEditTaskModalEmployees = [];
  //       this.showEditTaskModalEmployeeDropdown = true;
  //       this.isSearchingEditTaskEmployees = false;
  //       const errorMessage = error.error?.message || error.message || '';
  //       if (errorMessage.toLowerCase().includes('subordinate') || errorMessage.toLowerCase().includes('no employees')) {
  //         this.editTaskEmployeeSearchError = this.translate('tasks.form.noSubordinatesEmployeeFound');
  //       } else {
  //         this.editTaskEmployeeSearchError = errorMessage || this.translate('tasks.form.failedToLoadEmployees');
  //       }
  //       this.cdr.detectChanges();
  //     }
  //   });
  // }
  onEditTaskModalEmployeeSearchFocus(event) {
    if (event) {
      const target = event.target;
      if (target) {
        target.select();
      }
    }
    const searchTerm = this.editTaskForm.get("assigneeSearch")?.value;
    if (this.filteredEditTaskModalEmployees.length > 0) {
      this.showEditTaskModalEmployeeDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onEditTaskModalEmployeeSearch();
    } else {
      this.loadAllEmployeesForEditTask();
    }
  }
  onEditTaskModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isSearchingEditTaskEmployees = true;
      clearTimeout(this.editTaskSearchTimeout);
      this.editTaskSearchTimeout = setTimeout(() => {
        this.searchEmployeesForEditTask(searchTerm.trim());
      }, 300);
    } else if (searchTerm.length === 0) {
      this.loadAllEmployeesForEditTask();
    }
  }
  searchEmployeesForEditTask(searchTerm) {
    this.editTaskEmployeeSearchError = null;
    this.employeesService.searchEmployeeNames(searchTerm).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.editTaskModalEmployees = response.data;
        } else {
          this.editTaskModalEmployees = [];
        }
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching employees:", error);
        this.editTaskModalEmployees = [];
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadAllEmployeesForEditTask() {
    this.editTaskEmployeeSearchError = null;
    this.isSearchingEditTaskEmployees = true;
    this.employeesService.searchEmployeeNames("").subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.editTaskModalEmployees = response.data;
          this.filteredEditTaskModalEmployees = response.data;
          this.showEditTaskModalEmployeeDropdown = true;
          this.editTaskEmployeeSearchError = null;
        } else if (response.success && response.data && response.data.length === 0) {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredEditTaskModalEmployees = [];
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredEditTaskModalEmployees = [];
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = null;
          }
        } else {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredEditTaskModalEmployees = [];
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredEditTaskModalEmployees = [];
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = this.translate("tasks.form.failedToLoadEmployees");
          }
        }
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = true;
        this.isSearchingEditTaskEmployees = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees")) {
          this.editTaskEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
        } else {
          this.editTaskEmployeeSearchError = errorMessage || this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onEditTaskModalEmployeeSearchBlur() {
    setTimeout(() => {
      this.showEditTaskModalEmployeeDropdown = false;
    }, 200);
  }
  selectEditTaskModalEmployee(employee) {
    this.editTaskForm.get("assigneeUserId")?.setValue(employee.id);
    this.editTaskForm.get("assigneeUserId")?.markAsTouched();
    this.editTaskForm.get("assigneeSearch")?.setValue(employee.fullName);
    this.showEditTaskModalEmployeeDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedEditTaskModalEmployee() {
    const employeeId = this.editTaskForm.get("assigneeUserId")?.value;
    if (employeeId && this.editTaskModalEmployees.length > 0) {
      return this.editTaskModalEmployees.find((e) => e.id === employeeId) || null;
    }
    return null;
  }
  clearSelectedEditTaskModalEmployee() {
    this.editTaskForm.get("assigneeUserId")?.setValue("");
    this.editTaskForm.get("assigneeSearch")?.setValue("");
    this.showEditTaskModalEmployeeDropdown = false;
    this.editTaskModalEmployees = [];
    this.filteredEditTaskModalEmployees = [];
    this.editTaskEmployeeSearchError = null;
  }
  // Reassign modal employee search functionality
  onReassignModalEmployeeSearch() {
    const searchTerm = this.reassignForm.get("assigneeSearch")?.value;
    if (searchTerm && searchTerm.length >= 2) {
      this.isSearchingReassignEmployees = true;
      clearTimeout(this.reassignSearchTimeout);
      this.reassignSearchTimeout = setTimeout(() => {
        this.searchEmployeesForReassign(searchTerm);
      }, 300);
    } else if (searchTerm && searchTerm.length === 0) {
      if (this.reassignModalEmployees.length > 0) {
        this.filteredReassignModalEmployees = this.reassignModalEmployees;
        this.showReassignModalEmployeeDropdown = true;
      } else {
        this.filteredReassignModalEmployees = [];
        this.showReassignModalEmployeeDropdown = false;
      }
    } else if (searchTerm && searchTerm.length === 1) {
      if (this.reassignModalEmployees.length > 0) {
        this.filteredReassignModalEmployees = this.reassignModalEmployees.filter((emp) => emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || emp.jobTitle && emp.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));
        this.showReassignModalEmployeeDropdown = this.filteredReassignModalEmployees.length > 0;
      } else {
        this.filteredReassignModalEmployees = [];
        this.showReassignModalEmployeeDropdown = false;
      }
    }
  }
  searchEmployeesForReassign(searchTerm) {
    this.reassignEmployeeSearchError = null;
    this.employeesService.searchEmployeeNames(searchTerm).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.reassignModalEmployees = response.data;
          this.filteredReassignModalEmployees = response.data;
          this.showReassignModalEmployeeDropdown = true;
          this.reassignEmployeeSearchError = null;
        } else if (response.success && response.data && response.data.length === 0) {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = null;
          }
        } else {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.failedToSearchEmployees");
          }
        }
        this.isSearchingReassignEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching employees:", error);
        this.filteredReassignModalEmployees = [];
        this.showReassignModalEmployeeDropdown = true;
        this.isSearchingReassignEmployees = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees")) {
          this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
        } else {
          this.reassignEmployeeSearchError = errorMessage || this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onReassignModalEmployeeSearchFocus(event) {
    if (event) {
      const target = event.target;
      if (target) {
        target.select();
      }
    }
    const searchTerm = this.reassignForm.get("assigneeSearch")?.value;
    if (this.filteredReassignModalEmployees.length > 0) {
      this.showReassignModalEmployeeDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onReassignModalEmployeeSearch();
    } else {
      this.loadAllEmployeesForReassign();
    }
  }
  onReassignModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isSearchingReassignEmployees = true;
      clearTimeout(this.reassignSearchTimeout);
      this.reassignSearchTimeout = setTimeout(() => {
        this.searchEmployeesForReassign(searchTerm.trim());
      }, 300);
    } else if (searchTerm.length === 0) {
      this.loadAllEmployeesForReassign();
    }
  }
  loadAllEmployeesForReassign() {
    this.reassignEmployeeSearchError = null;
    this.isSearchingReassignEmployees = true;
    this.employeesService.searchEmployeeNames("").subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.reassignModalEmployees = response.data;
          this.filteredReassignModalEmployees = response.data;
          this.showReassignModalEmployeeDropdown = true;
          this.reassignEmployeeSearchError = null;
        } else if (response.success && response.data && response.data.length === 0) {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = null;
          }
        } else {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredReassignModalEmployees = [];
            this.showReassignModalEmployeeDropdown = true;
            this.reassignEmployeeSearchError = this.translate("tasks.form.failedToLoadEmployees");
          }
        }
        this.isSearchingReassignEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.filteredReassignModalEmployees = [];
        this.showReassignModalEmployeeDropdown = true;
        this.isSearchingReassignEmployees = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees")) {
          this.reassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
        } else {
          this.reassignEmployeeSearchError = errorMessage || this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onReassignModalEmployeeSearchBlur() {
    setTimeout(() => {
      this.showReassignModalEmployeeDropdown = false;
    }, 200);
  }
  selectReassignModalEmployee(employee) {
    this.reassignForm.get("newAssigneeUserId")?.setValue(employee.id);
    this.reassignForm.get("newAssigneeUserId")?.markAsTouched();
    this.reassignForm.get("assigneeSearch")?.setValue(employee.fullName);
    this.showReassignModalEmployeeDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedReassignModalEmployee() {
    const employeeId = this.reassignForm.get("newAssigneeUserId")?.value;
    if (employeeId && this.reassignModalEmployees.length > 0) {
      return this.reassignModalEmployees.find((e) => e.id === employeeId) || null;
    }
    return null;
  }
  clearSelectedReassignModalEmployee() {
    this.reassignForm.get("newAssigneeUserId")?.setValue("");
    this.reassignForm.get("assigneeSearch")?.setValue("");
    this.showReassignModalEmployeeDropdown = false;
    this.reassignModalEmployees = [];
    this.filteredReassignModalEmployees = [];
    this.reassignEmployeeSearchError = null;
  }
  // Bulk reassign modal employee search functionality
  onBulkReassignModalEmployeeSearch() {
    const searchTerm = this.bulkReassignForm.get("assigneeSearch")?.value;
    if (searchTerm && searchTerm.length >= 2) {
      this.isSearchingBulkReassignEmployees = true;
      clearTimeout(this.bulkReassignSearchTimeout);
      this.bulkReassignSearchTimeout = setTimeout(() => {
        this.searchEmployeesForBulkReassign(searchTerm);
      }, 300);
    } else if (searchTerm && searchTerm.length === 0) {
      if (this.bulkReassignModalEmployees.length > 0) {
        this.filteredBulkReassignModalEmployees = this.bulkReassignModalEmployees;
        this.showBulkReassignModalEmployeeDropdown = true;
      } else {
        this.filteredBulkReassignModalEmployees = [];
        this.showBulkReassignModalEmployeeDropdown = false;
      }
    } else if (searchTerm && searchTerm.length === 1) {
      if (this.bulkReassignModalEmployees.length > 0) {
        this.filteredBulkReassignModalEmployees = this.bulkReassignModalEmployees.filter((emp) => emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || emp.jobTitle && emp.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));
        this.showBulkReassignModalEmployeeDropdown = this.filteredBulkReassignModalEmployees.length > 0;
      } else {
        this.filteredBulkReassignModalEmployees = [];
        this.showBulkReassignModalEmployeeDropdown = false;
      }
    }
  }
  searchEmployeesForBulkReassign(searchTerm) {
    this.bulkReassignEmployeeSearchError = null;
    this.employeesService.searchEmployeeNames(searchTerm).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.bulkReassignModalEmployees = response.data;
          this.filteredBulkReassignModalEmployees = response.data;
          this.showBulkReassignModalEmployeeDropdown = true;
          this.bulkReassignEmployeeSearchError = null;
        } else if (response.success && response.data && response.data.length === 0) {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = null;
          }
        } else {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.failedToSearchEmployees");
          }
        }
        this.isSearchingBulkReassignEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching employees:", error);
        this.filteredBulkReassignModalEmployees = [];
        this.showBulkReassignModalEmployeeDropdown = true;
        this.isSearchingBulkReassignEmployees = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees")) {
          this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
        } else {
          this.bulkReassignEmployeeSearchError = errorMessage || this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onBulkReassignModalEmployeeSearchFocus(event) {
    if (event) {
      const target = event.target;
      if (target) {
        target.select();
      }
    }
    const searchTerm = this.bulkReassignForm.get("assigneeSearch")?.value;
    if (this.filteredBulkReassignModalEmployees.length > 0) {
      this.showBulkReassignModalEmployeeDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onBulkReassignModalEmployeeSearch();
    } else {
      this.loadAllEmployeesForBulkReassign();
    }
  }
  onBulkReassignModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isSearchingBulkReassignEmployees = true;
      clearTimeout(this.bulkReassignSearchTimeout);
      this.bulkReassignSearchTimeout = setTimeout(() => {
        this.searchEmployeesForBulkReassign(searchTerm.trim());
      }, 300);
    } else if (searchTerm.length === 0) {
      this.loadAllEmployeesForBulkReassign();
    }
  }
  loadAllEmployeesForBulkReassign() {
    this.bulkReassignEmployeeSearchError = null;
    this.isSearchingBulkReassignEmployees = true;
    this.employeesService.searchEmployeeNames("").subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.bulkReassignModalEmployees = response.data;
          this.filteredBulkReassignModalEmployees = response.data;
          this.showBulkReassignModalEmployeeDropdown = true;
          this.bulkReassignEmployeeSearchError = null;
        } else if (response.success && response.data && response.data.length === 0) {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = null;
          }
        } else {
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees")) {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
          } else {
            this.filteredBulkReassignModalEmployees = [];
            this.showBulkReassignModalEmployeeDropdown = true;
            this.bulkReassignEmployeeSearchError = this.translate("tasks.form.failedToLoadEmployees");
          }
        }
        this.isSearchingBulkReassignEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.filteredBulkReassignModalEmployees = [];
        this.showBulkReassignModalEmployeeDropdown = true;
        this.isSearchingBulkReassignEmployees = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees")) {
          this.bulkReassignEmployeeSearchError = this.translate("tasks.form.noSubordinatesEmployeeFound");
        } else {
          this.bulkReassignEmployeeSearchError = errorMessage || this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onBulkReassignModalEmployeeSearchBlur() {
    setTimeout(() => {
      this.showBulkReassignModalEmployeeDropdown = false;
    }, 200);
  }
  selectBulkReassignModalEmployee(employee) {
    this.bulkReassignForm.get("newAssigneeUserId")?.setValue(employee.id);
    this.bulkReassignForm.get("newAssigneeUserId")?.markAsTouched();
    this.bulkReassignForm.get("assigneeSearch")?.setValue(employee.fullName);
    this.showBulkReassignModalEmployeeDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedBulkReassignModalEmployee() {
    const employeeId = this.bulkReassignForm.get("newAssigneeUserId")?.value;
    if (employeeId && this.bulkReassignModalEmployees.length > 0) {
      return this.bulkReassignModalEmployees.find((e) => e.id === employeeId) || null;
    }
    return null;
  }
  clearSelectedBulkReassignModalEmployee() {
    this.bulkReassignForm.get("newAssigneeUserId")?.setValue("");
    this.bulkReassignForm.get("assigneeSearch")?.setValue("");
    this.showBulkReassignModalEmployeeDropdown = false;
    this.bulkReassignModalEmployees = [];
    this.filteredBulkReassignModalEmployees = [];
    this.bulkReassignEmployeeSearchError = null;
  }
  // Utility methods
  translate(key) {
    return this.translationService.translate(key);
  }
  // Message display methods
  showSuccessMessage(message) {
    console.log("Success:", message);
  }
  showErrorMessage(message) {
    console.log("Error:", message);
  }
  isRTL() {
    return this.langService.isRTL();
  }
  getStatusClass(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? `status-${statusKey}` : "";
  }
  getPriorityClass(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? `priority-${priorityKey}` : "";
  }
  getPriorityText(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? this.translate(`tasks.priority.${priorityKey}`) : "";
  }
  getStatusText(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? this.translate(`tasks.status.${statusKey}`) : "";
  }
  // Form validation helpers
  isTitleInvalid(form) {
    const titleControl = form.get("title");
    return titleControl ? titleControl.invalid && (titleControl.dirty || titleControl.touched) : false;
  }
  getTitleErrorMessage(form) {
    const titleControl = form.get("title");
    if (titleControl?.errors) {
      if (titleControl.errors["required"]) {
        return this.translate("tasks.form.titleRequired");
      }
      if (titleControl.errors["maxlength"]) {
        return this.translate("tasks.form.titleTooLong");
      }
    }
    return "";
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US");
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  // Close modals
  closeModal(modalName) {
    switch (modalName) {
      case "showAddTaskModal":
        this.showAddTaskModal = false;
        this.addTaskForm.reset();
        this.addTaskForm.get("assigneeUserId")?.setValue("");
        this.addTaskModalEmployees = [];
        this.isSavingTask = false;
        this.isUploadingAttachments = false;
        break;
      case "showEditTaskModal":
        this.showEditTaskModal = false;
        this.editTaskForm.reset();
        this.clearSelectedEditTaskModalEmployee();
        break;
      case "showTaskDetailsModal":
        this.showTaskDetailsModal = false;
        this.currentTask = null;
        this.currentTaskDetails = null;
        this.currentTaskAttachments = [];
        this.currentTaskUpdates = [];
        break;
      case "showStatusUpdateModal":
        this.showStatusUpdateModal = false;
        this.statusUpdateForm.reset();
        break;
      case "showReassignModal":
        this.showReassignModal = false;
        this.reassignForm.reset();
        this.clearSelectedReassignModalEmployee();
        break;
      case "showAddUpdateModal":
        this.showAddUpdateModal = false;
        this.addUpdateForm.reset();
        break;
      case "showBulkStatusModal":
        this.showBulkStatusModal = false;
        this.bulkStatusForm.reset();
        break;
      case "showBulkReassignModal":
        this.showBulkReassignModal = false;
        this.bulkReassignForm.reset();
        this.clearSelectedBulkReassignModalEmployee();
        break;
    }
    if (modalName !== "showTaskDetailsModal") {
      if (this.showTaskDetailsModal && this.currentTask) {
      }
    }
    this.updateBodyClass();
  }
  // Bulk operations
  bulkUpdateStatus() {
    return __async(this, null, function* () {
      if (this.bulkStatusForm.valid) {
        const formData = this.bulkStatusForm.value;
        const eligibleTaskIds = Array.from(this.selectedTasks).filter((taskId) => {
          let task = this.tasks.find((t) => t.id === taskId);
          if (!task) {
            task = this.allTasksForCounting.find((t) => t.id === taskId);
          }
          return task && task.status !== 2 && task.status !== 3;
        });
        const completedTaskIds = Array.from(this.selectedTasks).filter((taskId) => {
          let task = this.tasks.find((t) => t.id === taskId);
          if (!task) {
            task = this.allTasksForCounting.find((t) => t.id === taskId);
          }
          return task && (task.status === 2 || task.status === 3);
        });
        if (eligibleTaskIds.length === 0) {
          this.showErrorMessage("All selected tasks are already completed or stopped and cannot be updated.");
          return;
        }
        if (completedTaskIds.length > 0) {
          console.log("Skipping completed/stopped tasks:", completedTaskIds);
        }
        const bulkUpdate = {
          taskIds: eligibleTaskIds,
          status: Number(formData.status),
          note: formData.note || ""
        };
        try {
          const response = yield this.tasksService.bulkUpdateStatus(bulkUpdate).toPromise();
          if (response.success) {
            this.showBulkStatusModal = false;
            this.bulkStatusForm.reset();
            this.selectedTasks.clear();
            this.updateBulkToolbar();
            yield this.loadTasks();
            yield this.loadAllTasksForCounting();
            let message = "Status updated successfully for selected tasks.";
            if (completedTaskIds.length > 0) {
              message += ` ${completedTaskIds.length} completed/stopped tasks were skipped.`;
            }
            this.showSuccessMessage(message);
          }
        } catch (error) {
          console.error("Error updating bulk status:", error);
          if (error.error && error.error.message) {
            this.showErrorMessage(error.error.message);
          } else {
            this.showErrorMessage("Error updating task statuses. Please try again.");
          }
        }
      }
    });
  }
  bulkReassign() {
    return __async(this, null, function* () {
      if (this.bulkReassignForm.valid) {
        const formData = this.bulkReassignForm.value;
        const bulkReassign = {
          taskIds: Array.from(this.selectedTasks),
          newAssigneeUserId: formData.newAssigneeUserId,
          note: formData.note
        };
        try {
          const response = yield this.tasksService.bulkReassignTasks(bulkReassign).toPromise();
          if (response.success) {
            this.showBulkReassignModal = false;
            this.bulkReassignForm.reset();
            this.selectedTasks.clear();
            this.updateBulkToolbar();
            yield this.loadTasks();
            yield this.loadAllTasksForCounting();
            this.showSuccessMessage(this.translate("tasks.dialogs.bulkReassignSuccess"));
          }
        } catch (error) {
          console.error("Error bulk reassigning:", error);
          this.showErrorMessage(this.translate("tasks.dialogs.bulkReassignError"));
        }
      }
    });
  }
  // Check if any selected tasks are completed or stopped (checks both tasks and allTasksForCounting for pagination)
  hasCompletedOrStoppedTasks() {
    return Array.from(this.selectedTasks).some((taskId) => {
      let task = this.tasks.find((t) => t.id === taskId);
      if (!task) {
        task = this.allTasksForCounting.find((t) => t.id === taskId);
      }
      return task && (task.status === 2 || task.status === 3);
    });
  }
  // Check if any selected task has a specific status (for hiding status options in bulk update)
  // Checks both tasks and allTasksForCounting to handle pagination
  hasSelectedTaskWithStatus(status) {
    if (this.selectedTasks.size === 0) {
      return false;
    }
    return Array.from(this.selectedTasks).some((taskId) => {
      let task = this.tasks.find((t) => t.id === taskId);
      if (!task) {
        task = this.allTasksForCounting.find((t) => t.id === taskId);
      }
      return task && task.status === status;
    });
  }
  // Check if all selected tasks are Done or Stopped (cannot be bulk updated)
  areAllSelectedTasksDoneOrStopped() {
    if (this.selectedTasks.size === 0) {
      return false;
    }
    const eligibleTasks = Array.from(this.selectedTasks).filter((taskId) => {
      let task = this.tasks.find((t) => t.id === taskId);
      if (!task) {
        task = this.allTasksForCounting.find((t) => t.id === taskId);
      }
      return task && (task.status === 2 || task.status === 3);
    });
    return eligibleTasks.length === this.selectedTasks.size;
  }
  // Status update
  updateTaskStatus() {
    return __async(this, null, function* () {
      if (this.statusUpdateForm.valid && this.currentTask) {
        const formData = this.statusUpdateForm.value;
        const newStatus = Number(formData.status);
        if (newStatus === this.currentTask.status) {
          this.showErrorMessage("Cannot update to the same status");
          return;
        }
        if (this.currentTask.status === 2 || this.currentTask.status === 3) {
          this.showErrorMessage("Cannot update status of a completed or stopped task");
          return;
        }
        const statusUpdate = {
          status: newStatus,
          note: formData.note || ""
        };
        console.log("Sending status update:", statusUpdate);
        try {
          const response = yield this.tasksService.updateTaskStatus(this.currentTask.id, statusUpdate).toPromise();
          if (response && response.success) {
            this.showStatusUpdateModal = false;
            this.statusUpdateForm.reset();
            yield this.loadTasks();
            yield this.loadAllTasksForCounting();
            this.showSuccessMessage(this.translate("tasks.dialogs.statusUpdateSuccess"));
          } else if (response && !response.success) {
            this.showErrorMessage(response.message || this.translate("tasks.dialogs.statusUpdateError"));
          }
        } catch (error) {
          console.error("Error updating task status:", error);
          console.error("Error details:", error.error);
          if (error.error && error.error.message) {
            if (error.error.message.includes("already closed")) {
              this.showErrorMessage("This task cannot be updated because it is already completed or stopped. Please select a different task.");
            } else {
              this.showErrorMessage(error.error.message);
            }
          } else {
            this.showErrorMessage(this.translate("tasks.dialogs.statusUpdateError"));
          }
        }
      }
    });
  }
  // Add task update
  addTaskUpdate() {
    return __async(this, null, function* () {
      if (this.addUpdateForm.valid && this.currentTask) {
        const formData = this.addUpdateForm.value;
        const taskUpdate = {
          note: formData.note
        };
        try {
          const response = yield this.tasksService.addTaskUpdate(this.currentTask.id, taskUpdate).toPromise();
          if (response.success) {
            this.showAddUpdateModal = false;
            this.addUpdateForm.reset();
            yield this.loadTaskUpdates(this.currentTask.id);
            yield this.loadAllTasksForCounting();
          }
        } catch (error) {
          console.error("Error adding task update:", error);
        }
      }
    });
  }
  // Reassign task
  reassignTask() {
    return __async(this, null, function* () {
      if (this.reassignForm.valid && this.currentTask) {
        const formData = this.reassignForm.value;
        const reassignData = __spreadProps(__spreadValues({}, this.currentTask), {
          assigneeUserId: formData.newAssigneeUserId
        });
        try {
          const response = yield this.tasksService.updateTask(this.currentTask.id, reassignData).toPromise();
          if (response.success) {
            this.showReassignModal = false;
            this.reassignForm.reset();
            yield this.loadTasks();
            yield this.loadAllTasksForCounting();
          }
        } catch (error) {
          console.error("Error reassigning task:", error);
        }
      }
    });
  }
  // File handling
  onFileSelected(event, taskId) {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (taskId) {
        this.uploadAttachment(taskId, files[0]);
      } else {
        this.selectedFiles = Array.from(files);
        this.selectedFiles.forEach((file) => {
          if (!this.attachmentDescriptions[file.name]) {
            this.attachmentDescriptions[file.name] = "";
          }
          if (!this.attachmentDocumentSources[file.name]) {
            this.attachmentDocumentSources[file.name] = 0;
          }
        });
      }
    }
  }
  uploadAttachment(taskId, file) {
    return __async(this, null, function* () {
      try {
        const attachment = {
          file,
          description: this.attachmentDescriptions[file.name] || "",
          documentSource: this.attachmentDocumentSources[file.name] || 0
        };
        yield this.tasksService.addTaskAttachment(taskId, attachment).toPromise();
        if (this.currentTask && this.currentTask.id === taskId) {
          yield this.loadTaskAttachments(taskId);
        }
        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    });
  }
  uploadAttachmentsToTask(taskId) {
    return __async(this, null, function* () {
      try {
        const totalFiles = this.selectedFiles.length;
        this.uploadProgress = { current: 0, total: totalFiles };
        for (const file of this.selectedFiles) {
          const attachment = {
            file,
            description: this.attachmentDescriptions[file.name] || "",
            documentSource: this.attachmentDocumentSources[file.name] || 0
          };
          yield this.tasksService.addTaskAttachment(taskId, attachment).toPromise();
          this.uploadProgress.current++;
          console.log(`Uploaded ${this.uploadProgress.current}/${this.uploadProgress.total} files`);
        }
        this.selectedFiles = [];
        this.attachmentDescriptions = {};
        this.attachmentDocumentSources = {};
        this.uploadProgress = { current: 0, total: 0 };
        console.log("All attachments uploaded successfully");
      } catch (error) {
        console.error("Error uploading attachments:", error);
        this.showErrorMessage(this.translate("tasks.dialogs.attachmentUploadError"));
        this.uploadProgress = { current: 0, total: 0 };
      }
    });
  }
  deleteAttachment(attachmentId, taskId) {
    return __async(this, null, function* () {
      try {
        yield this.tasksService.deleteAttachment(taskId, attachmentId).toPromise();
        if (this.currentTask && this.currentTask.id === taskId) {
          yield this.loadTaskAttachments(taskId);
        }
        console.log("Attachment deleted successfully");
      } catch (error) {
        console.error("Error deleting attachment:", error);
      }
    });
  }
  removeSelectedFile(index) {
    if (this.selectedFiles) {
      const file = this.selectedFiles[index];
      delete this.attachmentDescriptions[file.name];
      delete this.attachmentDocumentSources[file.name];
      this.selectedFiles.splice(index, 1);
    }
  }
  updateAttachmentDescription(fileName, description) {
    this.attachmentDescriptions[fileName] = description;
  }
  updateAttachmentDocumentSource(fileName, documentSource) {
    this.attachmentDocumentSources[fileName] = documentSource;
  }
  getAttachmentDescription(fileName) {
    return this.attachmentDescriptions[fileName] || "";
  }
  getAttachmentDocumentSource(fileName) {
    return this.attachmentDocumentSources[fileName] || 0;
  }
  onDescriptionChange(fileName, event) {
    const target = event.target;
    this.updateAttachmentDescription(fileName, target.value);
  }
  onDocumentSourceChange(fileName, event) {
    const target = event.target;
    this.updateAttachmentDocumentSource(fileName, +target.value);
  }
  // KPI Data - Using manager-overview endpoint for all users
  get totalTasksCount() {
    return this.managerTasksOverview?.totalTasks || 0;
  }
  get completedTasksCount() {
    return this.managerTasksOverview?.completedTasks || 0;
  }
  get inProgressTasksCount() {
    return this.managerTasksOverview?.statusDistribution?.find((s) => s.status === "In_Progress")?.count || 0;
  }
  get pendingTasksCount() {
    return this.managerTasksOverview?.pendingTasks || 0;
  }
  get lateTasksCount() {
    return this.managerTasksOverview?.overdueTasks || 0;
  }
  get completionRate() {
    return this.managerTasksOverview?.completionRate || 0;
  }
  getStatusDisplayName(status) {
    const statusMap = {
      "New": this.translate("tasks.status.new"),
      "In_Progress": this.translate("tasks.status.inProgress"),
      "Done": this.translate("tasks.status.done"),
      "Stopped": this.translate("tasks.status.stopped"),
      "Late": this.translate("tasks.status.late")
    };
    return statusMap[status] || status;
  }
  getPriorityDisplayName(priority) {
    const priorityMap = {
      "High": this.translate("tasks.priority.high"),
      "Medium": this.translate("tasks.priority.medium"),
      "Low": this.translate("tasks.priority.low")
    };
    return priorityMap[priority] || priority;
  }
  getEfficiencyScore() {
    const overview = this.managerTasksOverview;
    if (!overview)
      return "N/A";
    const score = Math.round(overview.completedTasks / overview.totalTasks * 100);
    if (score >= 90)
      return "A+";
    if (score >= 80)
      return "A";
    if (score >= 70)
      return "B+";
    if (score >= 60)
      return "B";
    if (score >= 50)
      return "C+";
    if (score >= 40)
      return "C";
    return "D";
  }
  getProductivityTrend() {
    const overview = this.managerTasksOverview;
    if (!overview)
      return "N/A";
    const overdueRatio = overview.overdueTasks / overview.totalTasks;
    if (overdueRatio <= 0.1)
      return "\u{1F4C8} Excellent";
    if (overdueRatio <= 0.2)
      return "\u{1F4CA} Good";
    if (overdueRatio <= 0.3)
      return "\u{1F4CB} Fair";
    return "\u26A0\uFE0F Needs Attention";
  }
  getStatusColor(status) {
    const colorMap = {
      "New": "#3b82f6",
      "In_Progress": "#f59e0b",
      "Done": "#10b981",
      "Stopped": "#6b7280",
      "Late": "#ef4444"
    };
    return colorMap[status] || "#6b7280";
  }
  // Get status distribution for display
  getStatusDistribution() {
    return this.managerTasksOverview?.statusDistribution || [];
  }
  // Get priority distribution for display
  getPriorityDistribution() {
    return this.managerTasksOverview?.priorityDistribution || [];
  }
  // Truncate task title to specified number of characters
  truncateTaskTitle(title, maxLength = 20) {
    if (!title)
      return "";
    if (title.length <= maxLength)
      return title;
    return title.substring(0, maxLength) + "...";
  }
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(EmployeesService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 451, vars: 255, consts: [["fileInput", ""], ["editFileInput", ""], ["confirmationModal", ""], ["detailsFileInput", ""], [1, "container-fluid", "p-4", 3, "dir"], [1, "row", "mb-4", "kpi-cards-row", "g-3"], [1, "col-xl-2", "col-lg-3", "col-md-4", "col-sm-6", "col-12"], [1, "kpi-card", "kpi-total"], [1, "kpi-content"], [1, "kpi-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "12", "x2", "15", "y2", "12", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15", "stroke", "currentColor", "stroke-width", "2"], [1, "kpi-info"], [1, "kpi-number"], [1, "kpi-label"], [1, "kpi-card", "kpi-progress"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["points", "12,6 12,12 16,14", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completed"], ["d", "M20 6L9 17L4 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "kpi-card", "kpi-late"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "col-xl-2", "col-lg-6", "col-md-8", "col-sm-6", "col-12", "col-completion-rate"], [1, "kpi-card", "kpi-completion-rate"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "completion-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-labels"], [1, "progress-min"], [1, "progress-max"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "btn-icon-with-tooltip", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "filter-section", "mb-4"], [3, "formGroup"], [1, "row"], [1, "col-md-2"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change", "min"], ["class", "error-message text-danger", 4, "ngIf"], [1, "col-md-3"], ["bindLabel", "fullName", "bindValue", "id", "formControlName", "employeeId", 3, "search", "open", "items", "searchable", "clearable"], ["ng-option-tmp", ""], ["ng-notfound-tmp", ""], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-search", "me-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "green"], ["class", "task-card status-done compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "gray"], ["class", "task-card status-stopped compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "red"], ["class", "task-card status-late compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "yellow"], ["class", "task-card status-review compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "bulk-bar"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "text-muted"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], ["class", "pagination-container", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content", "position-relative"], [1, "modal-header", 3, "dir"], [1, "modal-title", "mb-0"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "col-12", "mb-3"], ["type", "text", "formControlName", "title", "name", "title", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6", "mb-3"], ["bindLabel", "fullName", "bindValue", "id", "formControlName", "assigneeUserId", 3, "search", "open", "items", "searchable", "clearable", "loading"], ["formControlName", "priority", "name", "priority", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["rows", "3", "formControlName", "description", "name", "description", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "dueDate", 1, "form-control"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "form-label", "mb-0"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["type", "button", 1, "btn-icon-with-tooltip", "btn-sm", 2, "min-width", "36px", "min-height", "36px", "padding", "8px", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["class", "mt-3", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], [1, "modal-content"], [1, "modal-title"], ["type", "text", "formControlName", "title", "name", "editTitle", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editStartDate", 1, "form-control"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editEndDate", 1, "form-control"], ["rows", "3", "formControlName", "description", "name", "editDescription", 1, "form-control", 3, "placeholder"], ["formControlName", "priority", "name", "editPriority", 1, "form-select"], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog", "modal-xl"], ["class", "modal-body", 4, "ngIf"], [1, "modal-dialog"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "status", 1, "form-select", 3, "disabled"], ["value", "0", 4, "ngIf"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "6", 4, "ngIf"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder", "disabled"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["bindLabel", "fullName", "bindValue", "id", "formControlName", "newAssigneeUserId", 3, "search", "open", "items", "searchable", "clearable", "loading"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], [1, "error-message", "text-danger"], [1, "employee-option"], [1, "employee-name"], ["class", "employee-job", 4, "ngIf"], [1, "employee-job"], [1, "text-muted", "text-center", "p-2"], [1, "fas", "fa-info-circle", "me-2"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], ["type", "checkbox", 1, "bulk-check", "form-check-input", 3, "click", "change", "checked"], [1, "task-content"], [1, "task-title", "mb-2", "mt-2"], [1, "task-desc", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-title", "mb-2"], [1, "task-card", "status-done", "compact", 3, "click"], [1, "task-card", "status-stopped", "compact", 3, "click"], [1, "task-card", "status-late", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "task-card", "status-review", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-danger"], [1, "mt-3"], ["class", "border rounded p-3 mb-3 position-relative", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-3", "position-relative"], [1, "d-flex", "align-items-center", "flex-grow-1"], [1, "fw-bold"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click", "disabled", "title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-trash2-icon", "lucide-trash-2"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["d", "M3 6h18"], ["d", "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "mb-2"], [1, "form-label", "small"], ["type", "text", 1, "form-control", "form-control-sm", 3, "input", "value", "placeholder", "disabled"], [1, "form-select", "form-select-sm", 3, "change", "value", "disabled"], ["value", "0"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"], [1, "small", "text-muted", "mb-2"], ["class", "d-flex align-items-center p-2 border rounded mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "p-2", "border", "rounded", "mb-2"], [1, "fas", "fa-file", "me-2", "text-muted"], [1, "flex-grow-1"], ["class", "text-muted", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], ["class", "border rounded p-3 mb-3", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-3", "mb-3"], [1, "d-flex", "align-items-center", "mb-2"], [1, "flex-grow-1", "fw-bold"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-center p-2 border-bottom", 4, "ngFor", "ngForOf"], ["type", "file", 1, "d-none", 3, "change"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "edit-task-btn", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], [1, "btn", "btn-outline-info", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "d-flex", "align-items-center", "p-2", "border-bottom"], [1, "fas", "fa-file", "me-2"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "alert", "alert-warning", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2"], ["value", "4"], ["value", "5"], ["value", "6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-triangle-alert-icon", "lucide-triangle-alert"], ["d", "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"], ["d", "M12 9v4"], ["d", "M12 17h.01"]], template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 10);
      \u0275\u0275element(7, "rect", 11)(8, "line", 12)(9, "line", 13)(10, "line", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 15)(12, "div", 16);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 17);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "div", 6)(17, "div", 18)(18, "div", 8)(19, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 10);
      \u0275\u0275element(21, "circle", 19)(22, "polyline", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 6)(29, "div", 21)(30, "div", 8)(31, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 10);
      \u0275\u0275element(33, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "div", 15)(35, "div", 16);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 17);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 6)(40, "div", 23)(41, "div", 8)(42, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 10);
      \u0275\u0275element(44, "circle", 19)(45, "path", 24)(46, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "div", 15)(48, "div", 16);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 17);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "div", 26)(53, "div", 27)(54, "div", 8)(55, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 10);
      \u0275\u0275element(57, "path", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "div", 15)(59, "div", 16);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 17);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 29)(65, "div", 30);
      \u0275\u0275element(66, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 32)(68, "span", 33);
      \u0275\u0275text(69, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 34);
      \u0275\u0275text(71, "100%");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(72, "div", 35)(73, "div", 36)(74, "h1", 37);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 38);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "button", 39);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddTaskModal());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(79, "svg", 40);
      \u0275\u0275element(80, "line", 41)(81, "line", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "div", 43)(83, "form", 44)(84, "div", 45)(85, "div", 46)(86, "label", 47);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "input", 48);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_88_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFromDateChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 46)(90, "label", 47);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "input", 49);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onToDateChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, TasksComponent_small_93_Template, 2, 1, "small", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 51)(95, "label", 47);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "ng-select", 52);
      \u0275\u0275listener("search", function TasksComponent_Template_ng_select_search_97_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeFilterSearchNgSelect($event));
      })("open", function TasksComponent_Template_ng_select_open_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeFilterSearchFocus());
      });
      \u0275\u0275template(98, TasksComponent_ng_template_98_Template, 4, 2, "ng-template", 53)(99, TasksComponent_ng_template_99_Template, 3, 1, "ng-template", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 46)(101, "label", 47);
      \u0275\u0275text(102, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 55);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_103_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275element(104, "i", 56);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "div", 46)(107, "label", 47);
      \u0275\u0275text(108, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "button", 57);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_109_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275text(110);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(111, "div", 58)(112, "div", 59)(113, "div", 60);
      \u0275\u0275text(114);
      \u0275\u0275elementStart(115, "span", 61);
      \u0275\u0275text(116);
      \u0275\u0275elementEnd();
      \u0275\u0275template(117, TasksComponent_div_117_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "div", 63);
      \u0275\u0275template(119, TasksComponent_div_119_Template, 20, 17, "div", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 59)(121, "div", 65);
      \u0275\u0275text(122);
      \u0275\u0275elementStart(123, "span", 61);
      \u0275\u0275text(124);
      \u0275\u0275elementEnd();
      \u0275\u0275template(125, TasksComponent_div_125_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 63);
      \u0275\u0275template(127, TasksComponent_div_127_Template, 20, 17, "div", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 59)(129, "div", 67);
      \u0275\u0275text(130);
      \u0275\u0275elementStart(131, "span", 61);
      \u0275\u0275text(132);
      \u0275\u0275elementEnd();
      \u0275\u0275template(133, TasksComponent_div_133_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 63);
      \u0275\u0275template(135, TasksComponent_div_135_Template, 18, 13, "div", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 59)(137, "div", 69);
      \u0275\u0275text(138);
      \u0275\u0275elementStart(139, "span", 61);
      \u0275\u0275text(140);
      \u0275\u0275elementEnd();
      \u0275\u0275template(141, TasksComponent_div_141_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 63);
      \u0275\u0275template(143, TasksComponent_div_143_Template, 18, 13, "div", 70);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 59)(145, "div", 71);
      \u0275\u0275text(146);
      \u0275\u0275elementStart(147, "span", 61);
      \u0275\u0275text(148);
      \u0275\u0275elementEnd();
      \u0275\u0275template(149, TasksComponent_div_149_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 63);
      \u0275\u0275template(151, TasksComponent_div_151_Template, 18, 13, "div", 72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 59)(153, "div", 73);
      \u0275\u0275text(154);
      \u0275\u0275elementStart(155, "span", 61);
      \u0275\u0275text(156);
      \u0275\u0275elementEnd();
      \u0275\u0275template(157, TasksComponent_div_157_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 63);
      \u0275\u0275template(159, TasksComponent_div_159_Template, 18, 13, "div", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 59)(161, "div", 75);
      \u0275\u0275text(162);
      \u0275\u0275elementStart(163, "span", 61);
      \u0275\u0275text(164);
      \u0275\u0275elementEnd();
      \u0275\u0275template(165, TasksComponent_div_165_Template, 1, 0, "div", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 63);
      \u0275\u0275template(167, TasksComponent_div_167_Template, 18, 13, "div", 76);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(168, "div", 77)(169, "div", 78)(170, "div", 79)(171, "button", 80);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_171_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAllTasks());
      });
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "button", 81);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_173_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.deselectAllTasks());
      });
      \u0275\u0275text(174);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "span", 82);
      \u0275\u0275text(176);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 83)(178, "button", 84);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_178_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkStatusModal = true);
      });
      \u0275\u0275text(179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 85);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_180_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkReassignModal = true);
      });
      \u0275\u0275text(181);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(182, TasksComponent_div_182_Template, 18, 14, "div", 86)(183, TasksComponent_div_183_Template, 4, 0, "div", 87);
      \u0275\u0275elementStart(184, "div", 88)(185, "div", 89)(186, "div", 90)(187, "div", 91)(188, "h5", 92);
      \u0275\u0275text(189);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "button", 93);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_190_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddTaskModal"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(191, "svg", 94);
      \u0275\u0275element(192, "line", 95)(193, "line", 96);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(194, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_194_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275elementStart(195, "div", 98)(196, "div", 45)(197, "div", 99)(198, "label", 47);
      \u0275\u0275text(199);
      \u0275\u0275elementEnd();
      \u0275\u0275element(200, "input", 100);
      \u0275\u0275elementStart(201, "div", 101);
      \u0275\u0275template(202, TasksComponent_small_202_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div", 103)(204, "label", 47);
      \u0275\u0275text(205);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "ng-select", 104);
      \u0275\u0275listener("search", function TasksComponent_Template_ng_select_search_206_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAddTaskModalEmployeeSearchNgSelect($event));
      })("open", function TasksComponent_Template_ng_select_open_206_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onAddTaskModalEmployeeSearchFocus());
      });
      \u0275\u0275template(207, TasksComponent_ng_template_207_Template, 4, 2, "ng-template", 53)(208, TasksComponent_ng_template_208_Template, 3, 1, "ng-template", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(209, TasksComponent_small_209_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 103)(211, "label", 47);
      \u0275\u0275text(212);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "select", 105)(214, "option", 106);
      \u0275\u0275text(215);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "option", 107);
      \u0275\u0275text(217);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "option", 108);
      \u0275\u0275text(219);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "option", 109);
      \u0275\u0275text(221);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(222, "div", 99)(223, "label", 47);
      \u0275\u0275text(224);
      \u0275\u0275elementEnd();
      \u0275\u0275element(225, "textarea", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "div", 99)(227, "label", 47);
      \u0275\u0275text(228);
      \u0275\u0275elementEnd();
      \u0275\u0275element(229, "input", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div", 99)(231, "div", 112)(232, "label", 113);
      \u0275\u0275text(233);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "input", 114, 0);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_234_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "button", 115);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_236_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r22 = \u0275\u0275reference(235);
        return \u0275\u0275resetView(fileInput_r22.click());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(237, "svg", 116);
      \u0275\u0275element(238, "line", 41)(239, "line", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(240, TasksComponent_div_240_Template, 2, 1, "div", 117);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(241, "div", 118)(242, "button", 119);
      \u0275\u0275template(243, TasksComponent_span_243_Template, 1, 0, "span", 120)(244, TasksComponent_span_244_Template, 2, 1, "span", 121)(245, TasksComponent_span_245_Template, 2, 1, "span", 121)(246, TasksComponent_span_246_Template, 2, 1, "span", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "button", 122);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_247_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddTaskModal"));
      });
      \u0275\u0275text(248);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(249, "div", 88)(250, "div", 89)(251, "div", 123)(252, "div", 91)(253, "h5", 124);
      \u0275\u0275text(254);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_255_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(256, "div", 98)(257, "div", 45)(258, "div", 99)(259, "label", 47);
      \u0275\u0275text(260);
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 125);
      \u0275\u0275elementStart(262, "div", 101);
      \u0275\u0275template(263, TasksComponent_small_263_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 103)(265, "label", 47);
      \u0275\u0275text(266);
      \u0275\u0275elementEnd();
      \u0275\u0275element(267, "input", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "div", 103)(269, "label", 47);
      \u0275\u0275text(270);
      \u0275\u0275elementEnd();
      \u0275\u0275element(271, "input", 127);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 99)(273, "label", 47);
      \u0275\u0275text(274);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "ng-select", 104);
      \u0275\u0275listener("search", function TasksComponent_Template_ng_select_search_275_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchNgSelect($event));
      })("open", function TasksComponent_Template_ng_select_open_275_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchFocus());
      });
      \u0275\u0275template(276, TasksComponent_ng_template_276_Template, 4, 2, "ng-template", 53)(277, TasksComponent_ng_template_277_Template, 3, 1, "ng-template", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(278, TasksComponent_small_278_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 99)(280, "label", 47);
      \u0275\u0275text(281);
      \u0275\u0275elementEnd();
      \u0275\u0275element(282, "textarea", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "div", 103)(284, "label", 47);
      \u0275\u0275text(285);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "select", 129)(287, "option", 106);
      \u0275\u0275text(288);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "option", 107);
      \u0275\u0275text(290);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "option", 108);
      \u0275\u0275text(292);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "option", 109);
      \u0275\u0275text(294);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(295, "div", 99)(296, "div", 112)(297, "label", 113);
      \u0275\u0275text(298);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "input", 114, 1);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_299_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event, ctx.currentTask == null ? null : ctx.currentTask.id));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "button", 115);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_301_listener() {
        \u0275\u0275restoreView(_r1);
        const editFileInput_r27 = \u0275\u0275reference(300);
        return \u0275\u0275resetView(editFileInput_r27.click());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(302, "svg", 116);
      \u0275\u0275element(303, "line", 41)(304, "line", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(305, TasksComponent_div_305_Template, 4, 2, "div", 130)(306, TasksComponent_div_306_Template, 4, 2, "div", 117);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(307, "div", 118)(308, "button", 119);
      \u0275\u0275text(309);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_310_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275text(311);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(312, "div", 88)(313, "div", 132)(314, "div", 123)(315, "div", 91)(316, "h5", 124);
      \u0275\u0275text(317);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(318, TasksComponent_div_318_Template, 71, 35, "div", 133);
      \u0275\u0275elementStart(319, "div", 118)(320, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_320_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(321);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(322, "div", 88)(323, "div", 134)(324, "div", 123)(325, "div", 91)(326, "h5", 124);
      \u0275\u0275text(327);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(328, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_328_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTaskStatus());
      });
      \u0275\u0275elementStart(329, "div", 98);
      \u0275\u0275template(330, TasksComponent_div_330_Template, 3, 1, "div", 135);
      \u0275\u0275elementStart(331, "div", 136)(332, "label", 47);
      \u0275\u0275text(333);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "select", 137)(335, "option", 106);
      \u0275\u0275text(336);
      \u0275\u0275elementEnd();
      \u0275\u0275template(337, TasksComponent_option_337_Template, 2, 1, "option", 138)(338, TasksComponent_option_338_Template, 2, 1, "option", 139)(339, TasksComponent_option_339_Template, 2, 1, "option", 140)(340, TasksComponent_option_340_Template, 2, 1, "option", 141)(341, TasksComponent_option_341_Template, 2, 1, "option", 142)(342, TasksComponent_option_342_Template, 2, 1, "option", 143)(343, TasksComponent_option_343_Template, 2, 1, "option", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "div", 136)(345, "label", 47);
      \u0275\u0275text(346);
      \u0275\u0275elementEnd();
      \u0275\u0275element(347, "textarea", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 118)(349, "button", 146);
      \u0275\u0275text(350);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_351_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showStatusUpdateModal"));
      });
      \u0275\u0275text(352);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(353, "div", 88)(354, "div", 134)(355, "div", 123)(356, "div", 91)(357, "h5", 124);
      \u0275\u0275text(358);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_359_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTaskUpdate());
      });
      \u0275\u0275elementStart(360, "div", 98)(361, "div", 136)(362, "label", 47);
      \u0275\u0275text(363);
      \u0275\u0275elementEnd();
      \u0275\u0275element(364, "textarea", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 118)(366, "button", 148);
      \u0275\u0275text(367);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_368_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddUpdateModal"));
      });
      \u0275\u0275text(369);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(370, "div", 88)(371, "div", 134)(372, "div", 123)(373, "div", 91)(374, "h5", 124);
      \u0275\u0275text(375);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_376_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reassignTask());
      });
      \u0275\u0275elementStart(377, "div", 98)(378, "div", 136)(379, "label", 47);
      \u0275\u0275text(380);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "ng-select", 149);
      \u0275\u0275listener("search", function TasksComponent_Template_ng_select_search_381_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReassignModalEmployeeSearchNgSelect($event));
      })("open", function TasksComponent_Template_ng_select_open_381_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onReassignModalEmployeeSearchFocus());
      });
      \u0275\u0275template(382, TasksComponent_ng_template_382_Template, 4, 2, "ng-template", 53)(383, TasksComponent_ng_template_383_Template, 3, 1, "ng-template", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(384, TasksComponent_small_384_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 136)(386, "label", 47);
      \u0275\u0275text(387);
      \u0275\u0275elementEnd();
      \u0275\u0275element(388, "textarea", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "div", 118)(390, "button", 150);
      \u0275\u0275text(391);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_392_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showReassignModal"));
      });
      \u0275\u0275text(393);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(394, "div", 88)(395, "div", 134)(396, "div", 123)(397, "div", 91)(398, "h5", 124);
      \u0275\u0275text(399);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_400_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkUpdateStatus());
      });
      \u0275\u0275elementStart(401, "div", 98);
      \u0275\u0275template(402, TasksComponent_div_402_Template, 6, 1, "div", 135);
      \u0275\u0275elementStart(403, "div", 136)(404, "label", 47);
      \u0275\u0275text(405);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "select", 137)(407, "option", 106);
      \u0275\u0275text(408);
      \u0275\u0275elementEnd();
      \u0275\u0275template(409, TasksComponent_option_409_Template, 2, 1, "option", 138)(410, TasksComponent_option_410_Template, 2, 1, "option", 139)(411, TasksComponent_option_411_Template, 2, 1, "option", 140)(412, TasksComponent_option_412_Template, 2, 1, "option", 141)(413, TasksComponent_option_413_Template, 2, 1, "option", 142)(414, TasksComponent_option_414_Template, 2, 1, "option", 143)(415, TasksComponent_option_415_Template, 2, 1, "option", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 136)(417, "label", 47);
      \u0275\u0275text(418);
      \u0275\u0275elementEnd();
      \u0275\u0275element(419, "textarea", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(420, "div", 118)(421, "button", 146);
      \u0275\u0275text(422);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_423_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkStatusModal"));
      });
      \u0275\u0275text(424);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(425, "div", 88)(426, "div", 134)(427, "div", 123)(428, "div", 91)(429, "h5", 124);
      \u0275\u0275text(430);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "form", 97);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_431_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkReassign());
      });
      \u0275\u0275elementStart(432, "div", 98)(433, "div", 136)(434, "label", 47);
      \u0275\u0275text(435);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "ng-select", 149);
      \u0275\u0275listener("search", function TasksComponent_Template_ng_select_search_436_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBulkReassignModalEmployeeSearchNgSelect($event));
      })("open", function TasksComponent_Template_ng_select_open_436_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBulkReassignModalEmployeeSearchFocus());
      });
      \u0275\u0275template(437, TasksComponent_ng_template_437_Template, 4, 2, "ng-template", 53)(438, TasksComponent_ng_template_438_Template, 3, 1, "ng-template", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(439, TasksComponent_small_439_Template, 2, 1, "small", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "div", 136)(441, "label", 47);
      \u0275\u0275text(442);
      \u0275\u0275elementEnd();
      \u0275\u0275element(443, "textarea", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "div", 118)(445, "button", 148);
      \u0275\u0275text(446);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "button", 131);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_447_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkReassignModal"));
      });
      \u0275\u0275text(448);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(449, "app-confirmation-modal", null, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_23_0;
      let tmp_25_0;
      let tmp_79_0;
      let tmp_84_0;
      let tmp_116_0;
      let tmp_121_0;
      let tmp_181_0;
      let tmp_186_0;
      let tmp_219_0;
      let tmp_224_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.totalTasks"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.inProgressTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.kpi.inProgressTasks"), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.completedTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.kpi.completedTasks"), " ");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.lateTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.kpi.overdueTasks"), " ");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 252, ctx.completionRate, "1.1-1"), "% ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.kpi.completionRate"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.completionRate, "%");
      \u0275\u0275advance(8);
      \u0275\u0275attribute("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.title"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.subtitle"));
      \u0275\u0275advance();
      \u0275\u0275attribute("data-tooltip", ctx.translate("tasks.add_task"))("aria-label", ctx.translate("tasks.add_task"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateFrom"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateTo"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.getMinToDate() && ((tmp_23_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_23_0.value) && ((tmp_23_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_23_0.value) < ctx.getMinToDate());
      \u0275\u0275property("min", ctx.getMinToDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMinToDate() && ((tmp_25_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_25_0.value) && ((tmp_25_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_25_0.value) < ctx.getMinToDate());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.employee"));
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.employeesUnderManager)("searchable", true)("clearable", true);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.apply"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.filters.clearFilters"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.new"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.inProgress"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(1));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(1) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.done"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(2) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(2));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.stopped"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(3));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(3) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.late"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(4));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(4) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(4));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.returned"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(5));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(5) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(5));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.review"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(6));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(6) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(6));
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showBulkToolbar);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.selectAll"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.selectedTasks.size === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.deselectAll"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.selected").replace("{count}", ctx.selectedTasks.size.toString()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.updateStatus"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.reassign"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMaxPagesForAnyStatus() > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showAddTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showAddTaskModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.add_task"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.addTaskForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isTitleInvalid(ctx.addTaskForm));
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.titlePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isTitleInvalid(ctx.addTaskForm));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_79_0 = ctx.addTaskForm.get("assigneeUserId")) == null ? null : tmp_79_0.invalid) && ((tmp_79_0 = ctx.addTaskForm.get("assigneeUserId")) == null ? null : tmp_79_0.touched));
      \u0275\u0275property("items", ctx.addTaskModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_84_0 = ctx.addTaskForm.get("assigneeUserId")) == null ? null : tmp_84_0.invalid) && ((tmp_84_0 = ctx.addTaskForm.get("assigneeUserId")) == null ? null : tmp_84_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.selectPriority"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.high"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.medium"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.low"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.description"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.descriptionPlaceholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.dueDate"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.attachments"));
      \u0275\u0275advance(3);
      \u0275\u0275attribute("data-tooltip", ctx.translate("tasks.form.browseFiles"))("aria-label", ctx.translate("tasks.form.browseFiles"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.selectedFiles && ctx.selectedFiles.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.addTaskForm.valid || ctx.isSavingTask || ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSavingTask && !ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSavingTask && !ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSavingTask && !ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSavingTask || ctx.isUploadingAttachments);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showEditTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showEditTaskModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.edit_task"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.editTaskForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isTitleInvalid(ctx.editTaskForm));
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.titlePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isTitleInvalid(ctx.editTaskForm));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.startDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.endDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_116_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_116_0.invalid) && ((tmp_116_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_116_0.touched));
      \u0275\u0275property("items", ctx.editTaskModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingEditTaskEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_121_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_121_0.invalid) && ((tmp_121_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_121_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.description"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.descriptionPlaceholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.selectPriority"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.high"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.medium"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.low"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.attachments"));
      \u0275\u0275advance(3);
      \u0275\u0275attribute("data-tooltip", ctx.translate("tasks.form.browseFiles"))("aria-label", ctx.translate("tasks.form.browseFiles"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.currentTaskAttachments && ctx.currentTaskAttachments.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFiles && ctx.selectedFiles.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.editTaskForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showTaskDetailsModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showTaskDetailsModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.task_details"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentTask);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showStatusUpdateModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showStatusUpdateModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.dialogs.statusUpdate"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.statusUpdateForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.selectStatus"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentTask || ctx.currentTask.status !== 6);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"))("disabled", !!(ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3)));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.statusUpdateForm.valid || !!(ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3)));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showAddUpdateModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showAddUpdateModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.dialogs.addUpdate"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addUpdateForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.addUpdateForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showReassignModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showReassignModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.reassign"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.reassignForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newAssignee"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_181_0 = ctx.reassignForm.get("newAssigneeUserId")) == null ? null : tmp_181_0.invalid) && ((tmp_181_0 = ctx.reassignForm.get("newAssigneeUserId")) == null ? null : tmp_181_0.touched));
      \u0275\u0275property("items", ctx.reassignModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingReassignEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_186_0 = ctx.reassignForm.get("newAssigneeUserId")) == null ? null : tmp_186_0.invalid) && ((tmp_186_0 = ctx.reassignForm.get("newAssigneeUserId")) == null ? null : tmp_186_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.reassignForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showBulkStatusModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showBulkStatusModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.updateStatus"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.bulkStatusForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasCompletedOrStoppedTasks());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.areAllSelectedTasksDoneOrStopped());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.selectStatus"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(1));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(3));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(4));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(5));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSelectedTaskWithStatus(6));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.bulkStatusForm.valid || ctx.areAllSelectedTasksDoneOrStopped());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showBulkReassignModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showBulkReassignModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.reassign"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.bulkReassignForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newAssignee"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_219_0 = ctx.bulkReassignForm.get("newAssigneeUserId")) == null ? null : tmp_219_0.invalid) && ((tmp_219_0 = ctx.bulkReassignForm.get("newAssigneeUserId")) == null ? null : tmp_219_0.touched));
      \u0275\u0275property("items", ctx.bulkReassignModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingBulkReassignEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_224_0 = ctx.bulkReassignForm.get("newAssigneeUserId")) == null ? null : tmp_224_0.invalid) && ((tmp_224_0 = ctx.bulkReassignForm.get("newAssigneeUserId")) == null ? null : tmp_224_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.bulkReassignForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent, NgSelectComponent, NgOptionTemplateDirective, NgNotFoundTemplateDirective, UpperCasePipe, DecimalPipe, DatePipe], styles: [`

[_nghost-%COMP%] {
  --col-blue: #E9F6FB;
  --col-orange: #FFF1E3;
  --col-green: #EAF7F0;
  --col-gray: #F2F4F7;
  --col-red: #FEECEC;
  --card-radius: 16px;
  --card-shadow: 0 4px 18px rgba(0,0,0,.05);
  display: block;
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
  overflow-x: hidden;
}
[dir="ltr"][_nghost-%COMP%], [dir="ltr"]   [_nghost-%COMP%] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.page-title[_ngcontent-%COMP%] {
  color: var(--brand-secondary);
  font-size: 1.34rem;
  font-weight: 700;
  letter-spacing: .13px;
  text-align: left;
}
.top-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.34rem;
}
.page-title[dir=rtl][_ngcontent-%COMP%] {
  text-align: right;
}
.page-title[dir=ltr][_ngcontent-%COMP%] {
  text-align: left;
}
.subtle[_ngcontent-%COMP%] {
  color: #8294A8;
  font-size: .64rem;
}
.btn-add[_ngcontent-%COMP%] {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-add[_ngcontent-%COMP%]:hover {
  background: #B68A35;
}
.btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13.4px;
  height: 13.4px;
  border-radius: 2.68px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.34rem;
  font-weight: 700;
  font-size: 0.59rem;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.67rem;
  overflow-x: auto;
  padding-bottom: 0.67rem;
  scroll-snap-type: x proximity;
}
.kanban-col[_ngcontent-%COMP%] {
  scroll-snap-align: start;
  min-width: 134px;
  max-width: 161px;
  flex: 0 0 auto;
}
.kanban-col.small[_ngcontent-%COMP%] {
  min-width: 121px;
}
.col-head[_ngcontent-%COMP%] {
  padding: 0.67rem 0.84rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.64rem;
  color: #fff;
  margin-bottom: 0.67rem;
  text-align: center;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, .1);
}
.col-head.blue[_ngcontent-%COMP%] {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange[_ngcontent-%COMP%] {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.green[_ngcontent-%COMP%] {
  background: #E5FAF2;
  color: #00B789;
}
.col-head.gray[_ngcontent-%COMP%] {
  color: #404d49b9;
  background: #4e5c703d;
}
.col-head.red[_ngcontent-%COMP%] {
  color: #d80f0f;
  background: #f7151534;
}
.col-head.purple[_ngcontent-%COMP%] {
  color: #34495E;
  background: #34495e1f;
}
.col-head.yellow[_ngcontent-%COMP%] {
  color: #eab308;
  background: #fefce8;
}
.task-count-detail[_ngcontent-%COMP%] {
  margin-top: 0.17rem;
  font-size: 0.5rem;
  opacity: 0.8;
}
.task-count-detail[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.2;
}
.task-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: .54rem;
}
.task-card[_ngcontent-%COMP%] {
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 1rem 1.15rem 1rem 1rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: 0.4rem 0.5rem 0.4rem 0.5rem;
}
.task-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  border-color: rgba(182, 138, 53, 0.35);
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.task-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 0;
  width: 100%;
  min-width: 0;
}
.task-title[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #0f172a;
  font-size: 0.72rem;
  margin: 0;
  line-height: 1.25;
  letter-spacing: 0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.task-desc[_ngcontent-%COMP%] {
  color: #5f6d7a;
  font-size: 0.6rem;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.52rem;
  color: #7b8da1;
}
.task-dates[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.25rem;
  background:
    linear-gradient(
      135deg,
      rgba(38, 114, 209, 0.08),
      rgba(182, 138, 53, 0.05));
  border: 1px dashed rgba(38, 114, 209, 0.25);
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  font-size: 0.54rem;
  line-height: 1.35;
  color: #3f4c5a;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.task-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .34rem;
  margin-top: .23rem;
}
.task-card.status-new[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%]:hover {
  border: 0.67px solid 34495E;
}
.task-card.status-review[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #eab308;
}
.badge.status-new[_ngcontent-%COMP%] {
  background-color: #0ea5e9;
  color: white;
}
.badge.status-inProgress[_ngcontent-%COMP%] {
  background-color: #fb923c;
  color: white;
}
.badge.status-done[_ngcontent-%COMP%] {
  background-color: #22c55e;
  color: white;
}
.badge.status-stopped[_ngcontent-%COMP%] {
  background-color: #94a3b8;
  color: white;
}
.badge.status-late[_ngcontent-%COMP%] {
  background-color: #ef4444;
  color: white;
}
.badge.status-returned[_ngcontent-%COMP%] {
  background-color: #34495E;
  color: white;
}
.badge.status-review[_ngcontent-%COMP%] {
  background-color: #eab308;
  color: white;
}
.badge[_ngcontent-%COMP%] {
  padding: 0.17rem 0.34rem;
  font-size: 0.5rem;
  font-weight: 600;
  border-radius: 4px;
}
.priority-high[_ngcontent-%COMP%] {
  background: #FEF2F2;
  color: #DC2626;
}
.priority-medium[_ngcontent-%COMP%] {
  background: #FFFBEB;
  color: #D97706;
}
.priority-low[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #16A34A;
}
.badge-status[_ngcontent-%COMP%] {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  font-weight: 600;
  border-radius: 5.36px;
}
.badge-status.new[_ngcontent-%COMP%] {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress[_ngcontent-%COMP%] {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done[_ngcontent-%COMP%] {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped[_ngcontent-%COMP%] {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late[_ngcontent-%COMP%] {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned[_ngcontent-%COMP%] {
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.bulk-check[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-end: 0.90rem;
  inset-inline-end: 0.65rem;
  inset-block-start: 0rem;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid rgba(182, 138, 53, 0.6);
  background-color: #ffffff;
  transform: scale(0.95);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
}
.bulk-check[_ngcontent-%COMP%]:checked {
  background-color: #2672d1;
  border-color: #2672d1;
}
.bulk-check[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 3px rgba(38, 114, 209, 0.2);
}
.dropdown-menu[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, .1);
  border: 0.67px solid rgba(0, 0, 0, .05);
}
.dropdown-item[_ngcontent-%COMP%] {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.dropdown-item[_ngcontent-%COMP%]:hover {
  background: #F8FAFC;
}
.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {
  background: #FEF2F2;
}
.bulk-bar[_ngcontent-%COMP%] {
  position: sticky;
  bottom: 0;
  inset-inline: 0;
  background: #fff;
  border-top: 0.67px solid #E6EEF5;
  padding: .4rem .57rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show[_ngcontent-%COMP%] {
  display: block;
}
.modal[_ngcontent-%COMP%] {
  z-index: 1050;
}
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
.modal.fade.show[_ngcontent-%COMP%] {
  display: block !important;
  background: rgba(0, 0, 0, 0.5);
}
.modal-backdrop[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.modal-content[_ngcontent-%COMP%] {
  border-radius: 10.7px;
  border: none;
  box-shadow: 0 13.4px 16.75px -3.35px rgba(0, 0, 0, .1), 0 6.7px 6.7px -3.35px rgba(0, 0, 0, .04);
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 0.67px solid #E6D7A2;
  padding: 1rem 1rem 0.67rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 27px;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.btn-outline-secondary[_ngcontent-%COMP%] {
  background-color: #6c757d !important;
  color: #5F646D !important;
}
.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background-color: #5F646D !important;
  color: white !important;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 0.67px solid #E6D7A2;
  padding: 0.67rem 1rem 1rem;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  justify-content: flex-start;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  justify-content: flex-start;
}
.modal-title[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #5F646D;
  flex: 1;
  width: 100%;
  margin: 0;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  text-align: left !important;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  text-align: right !important;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
  font-size: 0.75rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  border: 0.67px solid #D1D5DB;
  padding: 0.5rem;
  transition: all 0.2s ease;
  font-size: 0.6rem;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #A87D2A;
  border-color: #A87D2A;
  color: #FFFFFF;
}
.btn-outline-primary[_ngcontent-%COMP%] {
  color: #B68A35;
  border-color: #B68A35;
  background: transparent;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-warning[_ngcontent-%COMP%] {
  color: #f59e0b;
  border-color: #f59e0b;
  background: transparent;
}
.btn-outline-warning[_ngcontent-%COMP%]:hover {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}
.btn-outline-info[_ngcontent-%COMP%] {
  color: #4A9D5C;
  border-color: #4A9D5C;
  background: transparent;
}
.btn-outline-info[_ngcontent-%COMP%]:hover {
  background: #3F8E50;
  border-color: #3F8E50;
  color: white;
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
.filter-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
.btn-outline-secondary[_ngcontent-%COMP%] {
  color: #1B1D21 !important;
  border-color: #1B1D21 !important;
  background: transparent !important;
}
.btn-reassign[_ngcontent-%COMP%] {
  color: #555555;
  border-color: #555555;
  background: transparent;
}
.btn-reassign[_ngcontent-%COMP%]:hover {
  background: #555555;
  color: #FFFFFF;
}
.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21;
  color: #FFFFFF;
}
.btn-outline-danger[_ngcontent-%COMP%] {
  color: #C62828;
  border-color: #C62828;
  background: transparent;
}
.btn-outline-danger[_ngcontent-%COMP%]:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-cancel[_ngcontent-%COMP%], 
.btn-secondary[_ngcontent-%COMP%] {
  background: transparent !important;
  border-color: #1B1D21;
  color: #1B1D21;
}
.btn-cancel[_ngcontent-%COMP%]:hover, 
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21 !important;
  color: #FFFFFF;
}
.border.rounded[_ngcontent-%COMP%] {
  border: 1.34px dashed #D1D5DB !important;
  transition: all 0.2s ease;
}
.border.rounded[_ngcontent-%COMP%]:hover {
  border-color: var(--brand-primary) !important;
  background: #F8FAFC;
}
.cursor-pointer[_ngcontent-%COMP%] {
  cursor: pointer;
}
.spinner-border[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 1200px) {
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 220px;
    max-width: 260px;
  }
}
@media (max-width: 992px) {
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 200px;
    max-width: 240px;
  }
  .kanban[_ngcontent-%COMP%] {
    gap: 0.75rem;
  }
}
@media (max-width: 768px) {
  .kanban[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 100%;
    max-width: 100%;
  }
  .col-head[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.95rem 1rem 0.95rem 0.85rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.88rem;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.78rem;
  }
  .modal-dialog[_ngcontent-%COMP%] {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
  .bulk-bar[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
  .bulk-bar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn-add[_ngcontent-%COMP%] {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  .btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
}
@media (max-width: 576px) {
  .container-fluid[_ngcontent-%COMP%] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .subtle[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.9rem 0.95rem 0.9rem 0.8rem;
  }
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.75rem 0.85rem 0.75rem 0.7rem;
  }
  .task-content[_ngcontent-%COMP%] {
    margin-top: 0.85rem;
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-header[_ngcontent-%COMP%] {
    padding: 1rem 1rem 0.75rem;
  }
  .modal-footer[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem 1rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .bulk-check[_ngcontent-%COMP%] {
  inset-inline-start: auto;
  inset-inline-end: 0.85rem;
}
[dir=rtl][_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {
  right: auto;
  left: 0.5rem;
}
[dir=rtl][_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
.modal.fade.show[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.task-card[_ngcontent-%COMP%] {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s ease;
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.badge-status[_ngcontent-%COMP%] {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.badge-status.new[_ngcontent-%COMP%] {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress[_ngcontent-%COMP%] {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done[_ngcontent-%COMP%] {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped[_ngcontent-%COMP%] {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late[_ngcontent-%COMP%] {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned[_ngcontent-%COMP%] {
  background: #f3e8ff;
  color: 34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 8px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
.task-count[_ngcontent-%COMP%] {
  font-size: 0.54rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.34rem;
}
.pagination-container[_ngcontent-%COMP%] {
  margin-top: 1.34rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  border: 0.67px solid #e9ecef;
}
@media (max-width: 768px) {
  .pagination-container[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .pagination[_ngcontent-%COMP%] {
    gap: 0.125rem;
  }
  .pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
    min-width: 36px;
    height: 36px;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
  }
  .pagination-info[_ngcontent-%COMP%] {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
.pagination[_ngcontent-%COMP%] {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.17rem;
  flex-wrap: wrap;
}
.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {
  margin: 0;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #B68A35;
  border: 0.67px solid #e9ecef;
  padding: 0.34rem 0.5rem;
  border-radius: 5.36px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 27px;
  height: 27px;
  font-weight: 500;
  font-size: 0.59rem;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 2.68px 5.36px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 1.34px 2.68px rgba(38, 102, 127, 0.3);
  font-weight: 600;
}
.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #adb5bd;
  background-color: #f8f9fa;
  border-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {
  background-color: #f8f9fa;
  color: #adb5bd;
  border-color: #e9ecef;
  transform: none;
  box-shadow: none;
}
.arrow-icon[_ngcontent-%COMP%] {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow-icon.rtl-arrow[_ngcontent-%COMP%] {
  transform: scaleX(-1);
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 0.59rem;
}
.pagination-info[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.59rem;
  color: #6c757d;
  font-weight: 500;
}
[dir=rtl][_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {
  direction: rtl;
}
[dir=rtl][_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {
  text-align: center;
}
.modal[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal.show[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-backdrop[_ngcontent-%COMP%] {
  z-index: 9998 !important;
}
.modal-xl[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-lg[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-dialog[_ngcontent-%COMP%]:not(.modal-xl) {
  z-index: 9999 !important;
}
app-confirmation-modal[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {
  z-index: 99999;
}
.modal.fade.show[_ngcontent-%COMP%] {
  z-index: inherit;
}
.sidebar[_ngcontent-%COMP%], 
.sidebar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  z-index: 1000 !important;
}
.modal[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%], 
.modal[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
body.modal-open[_ngcontent-%COMP%] {
  overflow: hidden;
}
body.modal-open[_ngcontent-%COMP%]::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1039;
  pointer-events: none;
}
.modal-backdrop[_ngcontent-%COMP%] {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6) !important;
}
.modal.show[_ngcontent-%COMP%] {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.kpi-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 80px;
  width: 100%;
  border: 0.67px solid rgba(238, 238, 238, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-card[dir=ltr][_ngcontent-%COMP%] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.kpi-card[dir=rtl][_ngcontent-%COMP%] {
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
}
.kpi-cards-row[_ngcontent-%COMP%] {
  margin-bottom: 1.34rem;
}
.kpi-cards-row.g-3[_ngcontent-%COMP%] {
  --bs-gutter-x: 0.67rem;
  --bs-gutter-y: 0.67rem;
}
.kpi-cards-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-bottom: var(--bs-gutter-y);
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  height: 100%;
  min-height: 80px;
}
.kpi-cards-row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {
  margin-top: 1.34rem;
}
@media (min-width: 1600px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.75rem;
    min-height: 140px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 64px;
    height: 64px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 2.25rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 0.2rem 0.5rem;
    min-height: 120px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.25rem;
    min-height: 120px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 52px;
    height: 52px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.875rem;
    --bs-gutter-y: 0.875rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.25rem;
    min-height: 115px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 48px;
    height: 48px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.75rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.825rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.75rem;
    --bs-gutter-y: 0.75rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.125rem;
    min-height: 110px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 44px;
    height: 44px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.625rem;
    --bs-gutter-y: 0.625rem;
  }
}
@media (max-width: 575px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1rem;
    min-height: 100px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5rem;
  }
}
.kpi-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 2.68px 10.7px rgba(0, 0, 0, 0.15);
}
.kpi-total[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #09365F;
}
.kpi-progress[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #B54708;
}
.kpi-completed[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #059669;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.67rem;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
  flex: 1;
  width: 100%;
}
@media (min-width: 1024px) and (max-width: 1599px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    font-size: 1rem;
    flex: 0 0 auto;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1;
    min-width: 200px;
    margin-top: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {
    height: 8px;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-cards-row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:has(.kpi-completion-rate) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-cards-row[_ngcontent-%COMP%]    > .col-completion-rate[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-completion-rate[_ngcontent-%COMP%] {
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    gap: 1rem;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
    flex-shrink: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%], 
   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
  }
}
@media (min-width: 992px) and (max-width: 1599px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    min-width: 250px;
  }
}
@media (max-width: 1024px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    overflow: hidden;
    max-width: 100%;
    min-width: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.75rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    margin-top: 0.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {
    width: 100%;
  }
  @media (max-width: 767px) {
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%], 
   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
      width: 100%;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
      width: 100%;
      margin-top: 0.75rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: nowrap;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
      font-size: 1.5rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
      font-size: 0.75rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 200px;
      margin-top: 0;
    }
  }
  .filter-section[_ngcontent-%COMP%] {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    row-gap: 1rem;
  }
  .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
    margin-bottom: 0.75rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  .filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  @media (max-width: 767px) {
    .filter-section[_ngcontent-%COMP%] {
      padding: 0.875rem;
    }
    .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      row-gap: 0.875rem;
    }
    .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
      width: 100%;
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 0.5rem;
    }
    .filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
      width: 100%;
      padding: 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%] {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
    .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      margin-top: 0.5rem;
    }
    .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > .col-md-2[_ngcontent-%COMP%]:last-child, 
   .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > .col-md-2[_ngcontent-%COMP%]:nth-last-child(2) {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
  }
}
.kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon[_ngcontent-%COMP%] {
  width: 37.5px;
  height: 37.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.67rem;
  flex-shrink: 0;
}
.kpi-total[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(204, 227, 237);
  color: #09365F;
}
.kpi-progress[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(251, 236, 212);
  color: #B54708;
}
.kpi-completed[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(237, 250, 246);
  color: #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(253, 226, 226);
  color: #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(248, 250, 252);
  color: #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(237, 250, 246);
  color: #059669;
}
.kpi-info[_ngcontent-%COMP%] {
  flex: 1;
}
.kpi-number[_ngcontent-%COMP%] {
  font-size: 1.34rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.17rem;
}
.kpi-label[_ngcontent-%COMP%] {
  font-size: 0.59rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.17rem;
  font-style: italic;
}
.completion-progress[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  width: 100%;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.34rem;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 2px;
  transition: width 0.8s ease-in-out;
}
.progress-labels[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.42rem;
  color: #9ca3af;
  font-weight: 500;
}
@media (min-width: 1600px) {
  .progress-bar[_ngcontent-%COMP%] {
    height: 8px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.7rem;
  }
}
@media (max-width: 575px) {
  .progress-bar[_ngcontent-%COMP%] {
    height: 5px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.55rem;
  }
  .completion-progress[_ngcontent-%COMP%] {
    margin-top: 0.5rem;
  }
}
.insight-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100%;
  border-left: 2.68px solid #B68A35;
}
.insight-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.67rem;
}
.insight-title[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon[_ngcontent-%COMP%] {
  width: 21.5px;
  height: 21.5px;
  background-color: #f3f4f6;
  border-radius: 5.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.insight-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.34rem 0;
  border-bottom: 0.67px solid #f3f4f6;
}
.insight-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.insight-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 0.59rem;
  color: #374151;
  font-weight: 500;
}
.insight-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.17rem;
}
.insight-count[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.5rem;
}
.status-dot[_ngcontent-%COMP%], 
.priority-dot[_ngcontent-%COMP%] {
  width: 5.36px;
  height: 5.36px;
  border-radius: 50%;
}
.efficiency-summary-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 10.7px;
  padding: 1.34rem;
  color: white;
  box-shadow: 0 5.36px 21.4px rgba(102, 126, 234, 0.3);
}
.summary-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.34rem;
}
.summary-title-section[_ngcontent-%COMP%] {
  flex: 1;
}
.summary-title[_ngcontent-%COMP%] {
  font-size: 1.17rem;
  font-weight: 700;
  margin: 0 0 0.34rem 0;
  color: white;
}
.summary-subtitle[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.34rem;
  flex-shrink: 0;
}
.metric-item[_ngcontent-%COMP%] {
  text-align: center;
  min-width: 53.6px;
}
.metric-value[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.17rem;
}
.metric-label[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.34px;
}
.summary-chart[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.67rem;
}
.chart-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: end;
  gap: 0.67rem;
  height: 80px;
  width: 100%;
  justify-content: center;
}
.chart-bar[_ngcontent-%COMP%] {
  width: 27px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2.68px 2.68px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: _ngcontent-%COMP%_chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar[_ngcontent-%COMP%]:hover   .chart-tooltip[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(-3.35px);
}
.chart-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.34rem;
  border-radius: 4px;
  font-size: 0.5rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}
.chart-tooltip[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 2.68px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.67rem;
  justify-content: center;
}
.chart-label[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  opacity: 0.8;
  text-align: center;
  min-width: 27px;
}
@keyframes _ngcontent-%COMP%_chartBarGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
@media (max-width: 768px) {
  .summary-header[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .summary-metrics[_ngcontent-%COMP%] {
    gap: 1rem;
    justify-content: space-around;
    width: 100%;
  }
  .metric-item[_ngcontent-%COMP%] {
    min-width: auto;
    flex: 1;
  }
  .chart-container[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .chart-bar[_ngcontent-%COMP%] {
    width: 30px;
  }
  .chart-labels[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .chart-label[_ngcontent-%COMP%] {
    font-size: 0.625rem;
    min-width: 30px;
  }
  .insight-card[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .insight-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .insight-icon[_ngcontent-%COMP%] {
    align-self: flex-end;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  margin-right: 0;
  margin-left: 1rem;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
@media (min-width: 768px) and (max-width: 1599px) {
  [dir=rtl][_ngcontent-%COMP%]   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row-reverse;
  }
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
.employee-search-container[_ngcontent-%COMP%] {
  position: relative;
}
.employee-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 0.67px solid #ddd;
  border-radius: 5.36px;
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: auto;
}
.modal[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1000000;
  overflow: visible;
}
.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
.employee-list[_ngcontent-%COMP%] {
  padding: 5.36px 0;
}
.employee-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 8px 10.7px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 0.67px solid #f0f0f0;
}
.employee-item[_ngcontent-%COMP%]:hover {
  background-color: #F2ECCE;
}
.employee-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.employee-item.text-danger[_ngcontent-%COMP%], 
.employee-item.text-muted[_ngcontent-%COMP%] {
  cursor: default !important;
  pointer-events: none;
}
.employee-item.text-danger[_ngcontent-%COMP%]:hover, 
.employee-item.text-muted[_ngcontent-%COMP%]:hover {
  background-color: transparent !important;
}
.employee-item.text-danger[_ngcontent-%COMP%] {
  color: #dc3545 !important;
  font-weight: 500;
  padding: 10.7px;
}
.employee-item.text-muted[_ngcontent-%COMP%] {
  color: #6c757d !important;
  font-weight: 400;
  padding: 10.7px;
}
.employee-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.result[_ngcontent-%COMP%] {
  background-color: #C8E6C9 !important;
  border: 0.67px solid #2BA149 !important;
}
.employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 9.38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job[_ngcontent-%COMP%] {
  font-size: 8.04px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee[_ngcontent-%COMP%] {
  margin-top: 5.36px;
  padding: 8px;
  background: #f8f9fa;
  border: 0.67px solid #e9ecef;
  border-radius: 5.36px;
}
.selected-employee-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-remove-employee[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 2.68px;
  border-radius: 2.68px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee[_ngcontent-%COMP%]:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border-bottom: 1.34px solid #e9ecef !important;
}
.show-all-option[_ngcontent-%COMP%]:hover {
  background-color: #e9ecef;
}
.show-all-avatar[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #28a745 0%,
      #20c997 100%) !important;
  color: white;
}
[dir=rtl][_ngcontent-%COMP%]   .employee-avatar[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: 8px;
}
[dir=rtl][_ngcontent-%COMP%]   .btn-remove-employee[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: auto;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.21rem;
  }
  .subtle[_ngcontent-%COMP%] {
    font-size: 0.6rem;
  }
  .btn-add[_ngcontent-%COMP%] {
    padding: 0.4rem 0.8rem;
    font-size: 0.57rem;
  }
  .btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
    width: 12.06px;
    height: 12.06px;
    font-size: 0.54rem;
  }
  .kanban[_ngcontent-%COMP%] {
    gap: 0.57rem;
    padding-bottom: 0.5rem;
  }
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 127px;
    max-width: 154px;
  }
  .col-head[_ngcontent-%COMP%] {
    padding: 0.57rem 0.67rem;
    font-size: 0.6rem;
    margin-bottom: 0.57rem;
  }
  .task-count-detail[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .task-list[_ngcontent-%COMP%] {
    gap: 0.47rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.85rem 0.95rem 0.85rem 0.75rem;
  }
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.7rem 0.85rem 0.7rem 0.7rem;
  }
  .task-content[_ngcontent-%COMP%] {
    gap: 0.45rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.54rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .task-meta[_ngcontent-%COMP%] {
    font-size: 0.52rem;
  }
  .task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .task-footer[_ngcontent-%COMP%] {
    gap: 0.27rem;
    margin-top: 0.2rem;
  }
  .kpi-cards-row[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .kpi-card[_ngcontent-%COMP%] {
    padding: 0.74rem;
    min-height: 72px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.17rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.54rem;
  }
  .kpi-subtitle[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.6rem;
    --bs-gutter-y: 0.6rem;
  }
  .bulk-check[_ngcontent-%COMP%] {
    inset-block-start: 0rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    gap: 0.67rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.34rem;
  }
  .completion-progress[_ngcontent-%COMP%] {
    margin-top: 0.34rem;
  }
  .progress-bar[_ngcontent-%COMP%] {
    height: 3.35px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
}
  .ng-select {
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
}
  .ng-select .ng-select-container {
  border: 1px solid #e9ecef !important;
  border-radius: 6px !important;
  min-height: 38px !important;
  background-color: #fff !important;
  padding: 0 12px !important;
  cursor: text !important;
}
  .ng-select .ng-select-container .ng-value-container {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-placeholder {
  color: #6c757d !important;
  font-size: 14px !important;
  padding: 0 !important;
  margin: 0 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-input {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-input input {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  background: transparent !important;
  height: auto !important;
  line-height: 1.5 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-value {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  max-width: none !important;
  overflow: visible !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  flex: 0 1 auto !important;
  min-width: 0 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {
  display: block !important;
  line-height: 1.5 !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  max-width: none !important;
  width: auto !important;
  min-width: 0 !important;
}
  .ng-select .ng-select-container .ng-arrow-wrapper {
  width: 25px !important;
  height: 25px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
  .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: #6c757d transparent transparent !important;
  border-style: solid !important;
  border-width: 5px 5px 2.5px !important;
  height: 0 !important;
  width: 0 !important;
}
  .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: transparent transparent #6c757d !important;
  border-width: 0 5px 5px !important;
}
  .ng-select.ng-select-focused .ng-select-container {
  border-color: #b68a35 !important;
  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;
}
  .ng-select.ng-select-disabled .ng-select-container {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}
  .ng-dropdown-panel {
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background: white !important;
  margin-top: 4px !important;
  z-index: 10000 !important;
}
  .ng-dropdown-panel .ng-dropdown-panel-items {
  max-height: 300px !important;
  overflow-y: auto !important;
}
  .ng-select .ng-option {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f0f0f0 !important;
  cursor: pointer !important;
  font-size: 14px !important;
  color: #333 !important;
  min-width: 300px !important;
  white-space: normal !important;
}
  .ng-select .ng-dropdown-panel {
  min-width: 300px !important;
  max-width: none !important;
}
  .ng-select .ng-option:last-child {
  border-bottom: none !important;
}
  .ng-select .ng-option:hover {
  background-color: #f8f9fa !important;
}
  .ng-select .ng-option.ng-option-selected {
  background-color: #e9ecef !important;
  color: #333 !important;
}
  .ng-select .ng-option.ng-option-marked {
  background-color: #f8f9fa !important;
}
  .ng-select .ng-option.ng-option-disabled {
  color: #999 !important;
  cursor: not-allowed !important;
}
  .ng-select .ng-clear-wrapper {
  width: 20px !important;
  height: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
}
  .ng-select .ng-clear-wrapper .ng-clear {
  font-size: 18px !important;
  color: #999 !important;
  line-height: 1 !important;
}
  .ng-select .ng-clear-wrapper:hover .ng-clear {
  color: #333 !important;
}
  .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {
  display: none !important;
}
  .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {
  width: 20px !important;
  height: 20px !important;
  border: 2px solid #f3f3f3 !important;
  border-top: 2px solid #b68a35 !important;
  border-radius: 50% !important;
  animation: spin 1s linear infinite !important;
}
.employee-option[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 300px;
  max-width: none;
  width: auto;
}
.employee-option[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
.employee-option[_ngcontent-%COMP%]   .employee-job[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #6c757d;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
/*# sourceMappingURL=tasks.component-7LSNDGFN.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: false, template: `<div class="container-fluid p-4" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- KPI Cards Section -->\r
  <div class="row mb-4 kpi-cards-row g-3">\r
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">\r
      <div class="kpi-card kpi-total">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <rect\r
                x="3"\r
                y="3"\r
                width="18"\r
                height="18"\r
                rx="2"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                fill="none"\r
              />\r
              <line\r
                x1="9"\r
                y1="9"\r
                x2="15"\r
                y2="9"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              />\r
              <line\r
                x1="9"\r
                y1="12"\r
                x2="15"\r
                y2="12"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              />\r
              <line\r
                x1="9"\r
                y1="15"\r
                x2="15"\r
                y2="15"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              />\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ totalTasksCount }}</div>\r
            <div class="kpi-label">{{ translate("tasks.kpi.totalTasks") }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">\r
      <div class="kpi-card kpi-progress">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <circle\r
                cx="12"\r
                cy="12"\r
                r="10"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                fill="none"\r
              />\r
              <polyline\r
                points="12,6 12,12 16,14"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                fill="none"\r
              />\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ inProgressTasksCount }}</div>\r
            <div class="kpi-label">\r
              {{ translate("tasks.kpi.inProgressTasks") }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">\r
      <div class="kpi-card kpi-completed">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                d="M20 6L9 17L4 12"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
              />\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ completedTasksCount }}</div>\r
            <div class="kpi-label">\r
              {{ translate("tasks.kpi.completedTasks") }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">\r
      <div class="kpi-card kpi-late">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <circle\r
                cx="12"\r
                cy="12"\r
                r="10"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                fill="none"\r
              />\r
              <path\r
                d="M12 6v6l4 2"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
              />\r
              <path\r
                d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                fill="none"\r
              />\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ lateTasksCount }}</div>\r
            <div class="kpi-label">\r
              {{ translate("tasks.kpi.overdueTasks") }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- <div class="col-md-2 mb-3">\r
      <div class="kpi-card kpi-pending">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>\r
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ pendingTasksCount }}</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.pendingTasks') }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div> -->\r
\r
    <div class="col-xl-2 col-lg-6 col-md-8 col-sm-6 col-12 col-completion-rate">\r
      <div class="kpi-card kpi-completion-rate">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
              />\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">\r
              {{ completionRate | number : "1.1-1" }}%\r
            </div>\r
            <div class="kpi-label">\r
              {{ translate("tasks.kpi.completionRate") }}\r
            </div>\r
            <div class="completion-progress">\r
              <div class="progress-bar">\r
                <div\r
                  class="progress-fill"\r
                  [style.width.%]="completionRate"\r
                ></div>\r
              </div>\r
              <div class="progress-labels">\r
                <span class="progress-min">0%</span>\r
                <span class="progress-max">100%</span>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Header Section -->\r
  <div class="d-flex justify-content-between align-items-start mb-4 top-header">\r
    <div class="text-end">\r
      <h1 class="page-title mb-1" [attr.dir]="isRTL() ? 'rtl' : 'ltr'">\r
        {{ translate("tasks.title") }}\r
      </h1>\r
      <p class="subtle">{{ translate("tasks.subtitle") }}</p>\r
    </div>\r
    <button\r
      class="btn-icon-with-tooltip"\r
      (click)="openAddTaskModal()"\r
      [attr.data-tooltip]="translate('tasks.add_task')"\r
      [attr.aria-label]="translate('tasks.add_task')"\r
    >\r
      <svg\r
        width="20"\r
        height="20"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <line x1="12" y1="5" x2="12" y2="19"></line>\r
        <line x1="5" y1="12" x2="19" y2="12"></line>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <!-- Date Filter Section -->\r
  <div class="filter-section mb-4">\r
    <form [formGroup]="filterForm">\r
      <div class="row">\r
        <div class="col-md-2">\r
          <label class="form-label">{{\r
            translate("tasks.filters.dueDateFrom")\r
          }}</label>\r
          <input\r
            type="date"\r
            class="form-control"\r
            formControlName="dueDateFrom"\r
            (change)="onFromDateChange()"\r
          />\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">{{\r
            translate("tasks.filters.dueDateTo")\r
          }}</label>\r
          <input\r
            type="date"\r
            class="form-control"\r
            formControlName="dueDateTo"\r
            [min]="getMinToDate()"\r
            (change)="onToDateChange()"\r
            [class.error]="\r
              getMinToDate() &&\r
              filterForm.get('dueDateTo')?.value &&\r
              filterForm.get('dueDateTo')?.value < getMinToDate()\r
            "\r
          />\r
          <small\r
            *ngIf="\r
              getMinToDate() &&\r
              filterForm.get('dueDateTo')?.value &&\r
              filterForm.get('dueDateTo')?.value < getMinToDate()\r
            "\r
            class="error-message text-danger"\r
          >\r
            {{ translate("tasks.filters.to_date_before_from_date_error") }}\r
          </small>\r
        </div>\r
        <div class="col-md-3">\r
          <label class="form-label">{{\r
            translate("tasks.filters.employee")\r
          }}</label>\r
          <ng-select\r
            [items]="employeesUnderManager"\r
            bindLabel="fullName"\r
            bindValue="id"\r
            [searchable]="true"\r
            [clearable]="true"\r
            formControlName="employeeId"\r
            (search)="onEmployeeFilterSearchNgSelect($event)"\r
            (open)="onEmployeeFilterSearchFocus()"\r
          >\r
            <ng-template ng-option-tmp let-item="item">\r
              <div class="employee-option">\r
                <div class="employee-name">{{ item.fullName }}</div>\r
                <div class="employee-job" *ngIf="item.jobTitle">\r
                  {{ item.jobTitle }}\r
                </div>\r
              </div>\r
            </ng-template>\r
            <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
              <div class="text-muted text-center p-2">\r
                <i class="fas fa-info-circle me-2"></i>\r
                {{ translate("tasks.form.noEmployeesFound") || "No employees found" }}\r
              </div>\r
            </ng-template>\r
          </ng-select>\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">&nbsp;</label>\r
          <button\r
            type="button"\r
            class="btn btn-primary w-100"\r
            (click)="applyFilters()"\r
          >\r
            <i class="bi bi-search me-2"></i>\r
            {{ translate("common.apply") }}\r
          </button>\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">&nbsp;</label>\r
          <button\r
            type="button"\r
            class="btn btn-outline-secondary w-100"\r
            (click)="clearFilters()"\r
          >\r
            {{ translate("tasks.filters.clearFilters") }}\r
          </button>\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Kanban Board -->\r
  <div class="kanban">\r
    <!-- New Column -->\r
    <div class="kanban-col">\r
      <div class="col-head blue">\r
        {{ translate("tasks.status.new") }}\r
        <span class="task-count">{{ getStatusTaskCount(0) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(0) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(0)"\r
          class="task-card status-new compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <!-- Task Content -->\r
          <div class="task-content">\r
            <h6 class="task-title mb-2 mt-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong\r
                  >{{ translate("tasks.task.createdAt") | uppercase }}:</strong\r
                >\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong\r
                  >{{ translate("tasks.task.dueDate") | uppercase }}:</strong\r
                >\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- In Progress Column -->\r
    <div class="kanban-col">\r
      <div class="col-head orange">\r
        {{ translate("tasks.status.inProgress") }}\r
        <span class="task-count">{{ getStatusTaskCount(1) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(1) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(1)"\r
          class="task-card status-progress compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong\r
                  >{{ translate("tasks.task.createdAt") | uppercase }}:</strong\r
                >\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong\r
                  >{{ translate("tasks.task.dueDate") | uppercase }}:</strong\r
                >\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Done Column -->\r
    <div class="kanban-col">\r
      <div class="col-head green">\r
        {{ translate("tasks.status.done") }}\r
        <span class="task-count">{{ getStatusTaskCount(2) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(2) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(2)"\r
          class="task-card status-done compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.createdAt") }}:</strong>\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.dueDate") }}:</strong>\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Stopped Column -->\r
    <div class="kanban-col">\r
      <div class="col-head gray">\r
        {{ translate("tasks.status.stopped") }}\r
        <span class="task-count">{{ getStatusTaskCount(3) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(3) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(3)"\r
          class="task-card status-stopped compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.createdAt") }}:</strong>\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.dueDate") }}:</strong>\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Late Column -->\r
    <div class="kanban-col">\r
      <div class="col-head red">\r
        {{ translate("tasks.status.late") }}\r
        <span class="task-count">{{ getStatusTaskCount(4) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(4) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(4)"\r
          class="task-card status-late compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.createdAt") }}:</strong>\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.dueDate") }}:</strong>\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Returned Column -->\r
    <div class="kanban-col">\r
      <div class="col-head purple">\r
        {{ translate("tasks.status.returned") }}\r
        <span class="task-count">{{ getStatusTaskCount(5) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(5) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(5)"\r
          class="task-card status-returned compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.createdAt") }}:</strong>\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.dueDate") }}:</strong>\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Review Column -->\r
    <div class="kanban-col">\r
      <div class="col-head yellow">\r
        {{ translate("tasks.status.review") }}\r
        <span class="task-count">{{ getStatusTaskCount(6) }}</span>\r
        <div\r
          class="task-count-detail"\r
          *ngIf="getStatusTasksOnOtherPages(6) > 0"\r
        ></div>\r
      </div>\r
      <div class="task-list">\r
        <div\r
          *ngFor="let task of getTasksByStatus(6)"\r
          class="task-card status-review compact"\r
          (click)="openTaskDetailsModal(task)"\r
        >\r
          <input\r
            type="checkbox"\r
            class="bulk-check form-check-input"\r
            [checked]="selectedTasks.has(task.id)"\r
            (click)="$event.stopPropagation()"\r
            (change)="toggleTaskSelection(task.id)"\r
          />\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ truncateTaskTitle(task.title) }}</h6>\r
\r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
\r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.createdAt") }}:</strong>\r
                {{ formatDate(task.createdAt) | date : "dd/MM/yyyy" }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate("tasks.task.dueDate") }}:</strong>\r
                {{ formatDate(task.dueDate) | date : "dd/MM/yyyy" }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <!-- Bulk Actions Toolbar -->\r
  <div class="bulk-bar" [class.show]="showBulkToolbar">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <div class="d-flex align-items-center gap-3">\r
        <button\r
          class="btn btn-sm btn-outline-primary"\r
          (click)="selectAllTasks()"\r
        >\r
          {{ translate("tasks.bulk.selectAll") }}\r
        </button>\r
        <button\r
          class="btn btn-sm btn-outline-secondary"\r
          (click)="deselectAllTasks()"\r
          [disabled]="selectedTasks.size === 0"\r
        >\r
          {{ translate("tasks.bulk.deselectAll") }}\r
        </button>\r
        <span class="text-muted">{{\r
          translate("tasks.bulk.selected").replace(\r
            "{count}",\r
            selectedTasks.size.toString()\r
          )\r
        }}</span>\r
      </div>\r
\r
      <div class="d-flex gap-2">\r
        <button\r
          class="btn btn-sm btn-outline-warning"\r
          (click)="showBulkStatusModal = true"\r
        >\r
          {{ translate("tasks.bulk.updateStatus") }}\r
        </button>\r
        <button\r
          class="btn btn-sm btn-outline-info"\r
          (click)="showBulkReassignModal = true"\r
        >\r
          {{ translate("tasks.bulk.reassign") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination Controls -->\r
  <div class="pagination-container" *ngIf="getMaxPagesForAnyStatus() > 1">\r
    <nav aria-label="Task pagination">\r
      <ul class="pagination justify-content-center">\r
        <!-- Previous Button -->\r
        <li class="page-item" [class.disabled]="currentPage === 1">\r
          <a\r
            class="page-link"\r
            href="#"\r
            (click)="goToPage(currentPage - 1); $event.preventDefault()"\r
          >\r
            <div>{{ translate("common.previous") }}</div>\r
          </a>\r
        </li>\r
\r
        <!-- Page Numbers -->\r
        <li\r
          class="page-item"\r
          *ngFor="let page of getPageNumbers()"\r
          [class.active]="page === currentPage"\r
        >\r
          <a\r
            class="page-link"\r
            href="#"\r
            (click)="goToPage(page); $event.preventDefault()"\r
            >{{ page }}</a\r
          >\r
        </li>\r
\r
        <!-- Next Button -->\r
        <li\r
          class="page-item"\r
          [class.disabled]="currentPage === getMaxPagesForAnyStatus()"\r
        >\r
          <a\r
            class="page-link"\r
            href="#"\r
            (click)="goToPage(currentPage + 1); $event.preventDefault()"\r
          >\r
            <div>{{ translate("common.next") }}</div>\r
          </a>\r
        </li>\r
      </ul>\r
    </nav>\r
\r
    <div class="pagination-info text-center mt-3">\r
      <span class="text-muted">\r
        {{ translate("common.showing") }} {{ getStartIndex() }} -\r
        {{ getEndIndex() }} {{ translate("common.of") }} {{ getTotalTasks() }}\r
        {{ translate("common.results") }}\r
        <br />\r
        <small>{{ translate("tasks.pagination.note") }}</small>\r
      </span>\r
    </div>\r
  </div>\r
\r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Add Task Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showAddTaskModal"\r
    [style.display]="showAddTaskModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content position-relative">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title mb-0">{{ translate("tasks.add_task") }}</h5>\r
          <button\r
            type="button"\r
            class="close-btn"\r
            (click)="closeModal('showAddTaskModal')"\r
            aria-label="Close"\r
          >\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
            >\r
              <line x1="18" y1="6" x2="6" y2="18"></line>\r
              <line x1="6" y1="6" x2="18" y2="18"></line>\r
            </svg>\r
          </button>\r
        </div>\r
\r
        <form [formGroup]="addTaskForm" (ngSubmit)="onSubmitAddTask()">\r
          <div class="modal-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.title")\r
                }}</label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  formControlName="title"\r
                  name="title"\r
                  [class.is-invalid]="isTitleInvalid(addTaskForm)"\r
                  [placeholder]="translate('tasks.form.titlePlaceholder')"\r
                />\r
                <div\r
                  class="d-flex justify-content-between align-items-center mt-1"\r
                >\r
                  <small\r
                    class="text-danger"\r
                    *ngIf="isTitleInvalid(addTaskForm)"\r
                  >\r
                    {{ getTitleErrorMessage(addTaskForm) }}\r
                  </small>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.assignTo")\r
                }}</label>\r
                <ng-select\r
                  [items]="addTaskModalEmployees"\r
                  bindLabel="fullName"\r
                  bindValue="id"\r
                  [searchable]="true"\r
                  [clearable]="true"\r
                  [loading]="isSearchingEmployees"\r
                  [class.is-invalid]="\r
                    addTaskForm.get('assigneeUserId')?.invalid &&\r
                    addTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                  formControlName="assigneeUserId"\r
                  (search)="onAddTaskModalEmployeeSearchNgSelect($event)"\r
                  (open)="onAddTaskModalEmployeeSearchFocus()"\r
                >\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="employee-option">\r
                      <div class="employee-name">{{ item.fullName }}</div>\r
                      <div class="employee-job" *ngIf="item.jobTitle">\r
                        {{ item.jobTitle }}\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                    <div class="text-muted text-center p-2">\r
                      <i class="fas fa-info-circle me-2"></i>\r
                      {{\r
                        translate("tasks.form.noEmployeesFound") ||\r
                          "No employees found"\r
                      }}\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
                <small\r
                  class="text-danger"\r
                  *ngIf="\r
                    addTaskForm.get('assigneeUserId')?.invalid &&\r
                    addTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                >\r
                  {{\r
                    translate("tasks.form.assigneeRequired") ||\r
                      "Please select an employee"\r
                  }}\r
                </small>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.priority")\r
                }}</label>\r
                <select\r
                  class="form-select"\r
                  formControlName="priority"\r
                  name="priority"\r
                >\r
                  <option value="">\r
                    {{ translate("tasks.form.selectPriority") }}\r
                  </option>\r
                  <option value="1">\r
                    {{ translate("tasks.priority.high") }}\r
                  </option>\r
                  <option value="2">\r
                    {{ translate("tasks.priority.medium") }}\r
                  </option>\r
                  <option value="3">\r
                    {{ translate("tasks.priority.low") }}\r
                  </option>\r
                </select>\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.description")\r
                }}</label>\r
                <textarea\r
                  class="form-control"\r
                  rows="3"\r
                  formControlName="description"\r
                  name="description"\r
                  [placeholder]="translate('tasks.form.descriptionPlaceholder')"\r
                ></textarea>\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.dueDate")\r
                }}</label>\r
                <input\r
                  type="datetime-local"\r
                  class="form-control"\r
                  formControlName="dueDate"\r
                  name="dueDate"\r
                />\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <div\r
                  class="d-flex align-items-center justify-content-between mb-2"\r
                >\r
                  <label class="form-label mb-0">{{\r
                    translate("tasks.form.attachments")\r
                  }}</label>\r
                  <input\r
                    type="file"\r
                    #fileInput\r
                    class="d-none"\r
                    (change)="onFileSelected($event)"\r
                    multiple\r
                  />\r
                  <button\r
                    type="button"\r
                    class="btn-icon-with-tooltip btn-sm"\r
                    (click)="fileInput.click()"\r
                    [attr.data-tooltip]="translate('tasks.form.browseFiles')"\r
                    [attr.aria-label]="translate('tasks.form.browseFiles')"\r
                    style="min-width: 36px; min-height: 36px; padding: 8px"\r
                  >\r
                    <svg\r
                      width="16"\r
                      height="16"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                    >\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                  </button>\r
                </div>\r
\r
                <!-- Selected Files List with Details -->\r
                <div\r
                  *ngIf="selectedFiles && selectedFiles.length > 0"\r
                  class="mt-3"\r
                >\r
                  <div\r
                    *ngFor="let file of selectedFiles; let i = index"\r
                    class="border rounded p-3 mb-3 position-relative"\r
                  >\r
                    <div\r
                      class="d-flex align-items-center justify-content-between mb-2"\r
                    >\r
                      <div class="d-flex align-items-center flex-grow-1">\r
                        <span class="fw-bold">{{ file.name }}</span>\r
                      </div>\r
                      <button\r
                        type="button"\r
                        class="btn btn-sm btn-outline-danger ms-2"\r
                        (click)="removeSelectedFile(i)"\r
                        [disabled]="isUploadingAttachments"\r
                        [title]="translate('common.delete') || 'Delete'"\r
                      >\r
                        <svg\r
                          xmlns="http://www.w3.org/2000/svg"\r
                          width="24"\r
                          height="24"\r
                          viewBox="0 0 24 24"\r
                          fill="none"\r
                          stroke="currentColor"\r
                          stroke-width="2"\r
                          stroke-linecap="round"\r
                          stroke-linejoin="round"\r
                          class="lucide lucide-trash2-icon lucide-trash-2"\r
                        >\r
                          <path d="M10 11v6" />\r
                          <path d="M14 11v6" />\r
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />\r
                          <path d="M3 6h18" />\r
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />\r
                        </svg>\r
                      </button>\r
                    </div>\r
\r
                    <!-- File Description -->\r
                    <div class="mb-2">\r
                      <label class="form-label small">{{\r
                        translate("tasks.form.attachmentDescription")\r
                      }}</label>\r
                      <input\r
                        type="text"\r
                        class="form-control form-control-sm"\r
                        [value]="getAttachmentDescription(file.name)"\r
                        (input)="onDescriptionChange(file.name, $event)"\r
                        [placeholder]="\r
                          translate(\r
                            'tasks.form.attachmentDescriptionPlaceholder'\r
                          )\r
                        "\r
                        [disabled]="isUploadingAttachments"\r
                      />\r
                    </div>\r
\r
                    <!-- Document Source -->\r
                    <div class="mb-2">\r
                      <label class="form-label small">{{translate("tasks.form.documentSource")}}</label>\r
                      <select\r
                        class="form-select form-select-sm"\r
                        [value]="getAttachmentDocumentSource(file.name)"\r
                        (change)="onDocumentSourceChange(file.name, $event)"\r
                        [disabled]="isUploadingAttachments"\r
                      >\r
                        <option value="0">\r
                          {{ translate("tasks.form.selectDocumentSource") }}\r
                        </option>\r
                        <option value="1">\r
                          {{ translate("tasks.form.documentSource1") }}\r
                        </option>\r
                        <option value="2">\r
                          {{ translate("tasks.form.documentSource2") }}\r
                        </option>\r
                        <option value="3">\r
                          {{ translate("tasks.form.documentSource3") }}\r
                        </option>\r
                      </select>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-primary"\r
              [disabled]="\r
                !addTaskForm.valid || isSavingTask || isUploadingAttachments\r
              "\r
            >\r
              <span\r
                *ngIf="isSavingTask && !isUploadingAttachments"\r
                class="spinner-border spinner-border-sm me-2"\r
                role="status"\r
                aria-hidden="true"\r
              ></span>\r
              <span *ngIf="!isSavingTask && !isUploadingAttachments">{{\r
                translate("common.save")\r
              }}</span>\r
              <span *ngIf="isSavingTask && !isUploadingAttachments">{{\r
                translate("common.saving")\r
              }}</span>\r
              <span *ngIf="isUploadingAttachments">{{\r
                translate("common.saving")\r
              }}</span>\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showAddTaskModal')"\r
              [disabled]="isSavingTask || isUploadingAttachments"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Edit Task Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showEditTaskModal"\r
    [style.display]="showEditTaskModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate("tasks.edit_task") }}</h5>\r
        </div>\r
\r
        <form [formGroup]="editTaskForm" (ngSubmit)="onSubmitEditTask()">\r
          <div class="modal-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.title")\r
                }}</label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  formControlName="title"\r
                  name="editTitle"\r
                  [class.is-invalid]="isTitleInvalid(editTaskForm)"\r
                  [placeholder]="translate('tasks.form.titlePlaceholder')"\r
                />\r
                <div\r
                  class="d-flex justify-content-between align-items-center mt-1"\r
                >\r
                  <small\r
                    class="text-danger"\r
                    *ngIf="isTitleInvalid(editTaskForm)"\r
                  >\r
                    {{ getTitleErrorMessage(editTaskForm) }}\r
                  </small>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.startDate")\r
                }}</label>\r
                <input\r
                  type="datetime-local"\r
                  class="form-control"\r
                  formControlName="dueDate"\r
                  name="editStartDate"\r
                />\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.endDate")\r
                }}</label>\r
                <input\r
                  type="datetime-local"\r
                  class="form-control"\r
                  formControlName="dueDate"\r
                  name="editEndDate"\r
                />\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.assignTo")\r
                }}</label>\r
                <ng-select\r
                  [items]="editTaskModalEmployees"\r
                  bindLabel="fullName"\r
                  bindValue="id"\r
                  [searchable]="true"\r
                  [clearable]="true"\r
                  [loading]="isSearchingEditTaskEmployees"\r
                  [class.is-invalid]="\r
                    editTaskForm.get('assigneeUserId')?.invalid &&\r
                    editTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                  formControlName="assigneeUserId"\r
                  (search)="onEditTaskModalEmployeeSearchNgSelect($event)"\r
                  (open)="onEditTaskModalEmployeeSearchFocus()"\r
                >\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="employee-option">\r
                      <div class="employee-name">{{ item.fullName }}</div>\r
                      <div class="employee-job" *ngIf="item.jobTitle">\r
                        {{ item.jobTitle }}\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                    <div class="text-muted text-center p-2">\r
                      <i class="fas fa-info-circle me-2"></i>\r
                      {{\r
                        translate("tasks.form.noEmployeesFound") ||\r
                          "No employees found"\r
                      }}\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
                <small\r
                  class="text-danger"\r
                  *ngIf="\r
                    editTaskForm.get('assigneeUserId')?.invalid &&\r
                    editTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                >\r
                  {{\r
                    translate("tasks.form.assigneeRequired") ||\r
                      "Please select an employee"\r
                  }}\r
                </small>\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.description")\r
                }}</label>\r
                <textarea\r
                  class="form-control"\r
                  rows="3"\r
                  formControlName="description"\r
                  name="editDescription"\r
                  [placeholder]="translate('tasks.form.descriptionPlaceholder')"\r
                ></textarea>\r
              </div>\r
\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.form.priority")\r
                }}</label>\r
                <select\r
                  class="form-select"\r
                  formControlName="priority"\r
                  name="editPriority"\r
                >\r
                  <option value="">\r
                    {{ translate("tasks.form.selectPriority") }}\r
                  </option>\r
                  <option value="1">\r
                    {{ translate("tasks.priority.high") }}\r
                  </option>\r
                  <option value="2">\r
                    {{ translate("tasks.priority.medium") }}\r
                  </option>\r
                  <option value="3">\r
                    {{ translate("tasks.priority.low") }}\r
                  </option>\r
                </select>\r
              </div>\r
\r
              <div class="col-12 mb-3">\r
                <div\r
                  class="d-flex align-items-center justify-content-between mb-2"\r
                >\r
                  <label class="form-label mb-0">{{\r
                    translate("tasks.form.attachments")\r
                  }}</label>\r
                  <input\r
                    type="file"\r
                    #editFileInput\r
                    class="d-none"\r
                    (change)="onFileSelected($event, currentTask?.id)"\r
                    multiple\r
                  />\r
                  <button\r
                    type="button"\r
                    class="btn-icon-with-tooltip btn-sm"\r
                    (click)="editFileInput.click()"\r
                    [attr.data-tooltip]="translate('tasks.form.browseFiles')"\r
                    [attr.aria-label]="translate('tasks.form.browseFiles')"\r
                    style="min-width: 36px; min-height: 36px; padding: 8px"\r
                  >\r
                    <svg\r
                      width="16"\r
                      height="16"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                    >\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                  </button>\r
                </div>\r
\r
                <!-- Existing Attachments -->\r
                <div\r
                  *ngIf="\r
                    currentTaskAttachments && currentTaskAttachments.length > 0\r
                  "\r
                  class="mb-3"\r
                >\r
                  <h6 class="small text-muted mb-2">\r
                    {{ translate("tasks.form.existingAttachments") }}\r
                  </h6>\r
                  <div\r
                    *ngFor="let attachment of currentTaskAttachments"\r
                    class="d-flex align-items-center p-2 border rounded mb-2"\r
                  >\r
                    <i class="fas fa-file me-2 text-muted"></i>\r
                    <div class="flex-grow-1">\r
                      <div class="fw-bold">{{ attachment.fileName }}</div>\r
                      <small\r
                        class="text-muted"\r
                        *ngIf="attachment.description"\r
                        >{{ attachment.description }}</small\r
                      >\r
                    </div>\r
                    <button\r
                      type="button"\r
                      class="btn btn-sm btn-outline-danger"\r
                      (click)="deleteAttachment(attachment.id, currentTask!.id)"\r
                    >\r
                      <i class="fas fa-times"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
\r
                <!-- Selected Files List with Details -->\r
                <div\r
                  *ngIf="selectedFiles && selectedFiles.length > 0"\r
                  class="mt-3"\r
                >\r
                  <h6 class="small text-muted mb-2">\r
                    {{ translate("tasks.form.newAttachments") }}\r
                  </h6>\r
                  <div\r
                    *ngFor="let file of selectedFiles; let i = index"\r
                    class="border rounded p-3 mb-3"\r
                  >\r
                    <div class="d-flex align-items-center mb-2">\r
                      <i class="fas fa-file me-2 text-muted"></i>\r
                      <span class="flex-grow-1 fw-bold">{{ file.name }}</span>\r
                      <button\r
                        type="button"\r
                        class="btn btn-sm btn-outline-danger"\r
                        (click)="removeSelectedFile(i)"\r
                      >\r
                        <i class="fas fa-times"></i>\r
                      </button>\r
                    </div>\r
\r
                    <!-- File Description -->\r
                    <div class="mb-2">\r
                      <label class="form-label small">{{\r
                        translate("tasks.form.attachmentDescription")\r
                      }}</label>\r
                      <input\r
                        type="text"\r
                        class="form-control form-control-sm"\r
                        [value]="getAttachmentDescription(file.name)"\r
                        (input)="onDescriptionChange(file.name, $event)"\r
                        [placeholder]="\r
                          translate(\r
                            'tasks.form.attachmentDescriptionPlaceholder'\r
                          )\r
                        "\r
                        [disabled]="isUploadingAttachments"\r
                      />\r
                    </div>\r
\r
                    <!-- Document Source -->\r
                    <div class="mb-2">\r
                      <label class="form-label small">{{\r
                        translate("tasks.form.documentSource")\r
                      }}</label>\r
                      <select\r
                        class="form-select form-select-sm"\r
                        [value]="getAttachmentDocumentSource(file.name)"\r
                        (change)="onDocumentSourceChange(file.name, $event)"\r
                        [disabled]="isUploadingAttachments"\r
                      >\r
                        <option value="0">\r
                          {{ translate("tasks.form.selectDocumentSource") }}\r
                        </option>\r
                        <option value="1">\r
                          {{ translate("tasks.form.documentSource1") }}\r
                        </option>\r
                        <option value="2">\r
                          {{ translate("tasks.form.documentSource2") }}\r
                        </option>\r
                        <option value="3">\r
                          {{ translate("tasks.form.documentSource3") }}\r
                        </option>\r
                      </select>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-primary"\r
              [disabled]="!editTaskForm.valid"\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showEditTaskModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Task Details Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showTaskDetailsModal"\r
    [style.display]="showTaskDetailsModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog modal-xl">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate("tasks.task_details") }}</h5>\r
        </div>\r
\r
        <div class="modal-body" *ngIf="currentTask">\r
          <div class="row">\r
            <div class="col-md-8">\r
              <h4 class="mb-3">{{ currentTask.title }}</h4>\r
\r
              <div class="row mb-4">\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-user me-2 text-muted"></i>\r
                    <span class="text-muted"\r
                      >{{ translate("tasks.task.createdBy") }}:</span\r
                    >\r
                    <span class="ms-2">{{ currentTask.createdByName }}</span>\r
                  </div>\r
\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-clock me-2 text-muted"></i>\r
                    <span class="text-muted"\r
                      >{{ translate("tasks.task.status") }}:</span\r
                    >\r
                    <span\r
                      class="ms-2 badge"\r
                      [class]="getStatusClass(currentTask.status)"\r
                    >\r
                      {{ getStatusText(currentTask.status) }}\r
                    </span>\r
                  </div>\r
                </div>\r
\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-calendar me-2 text-muted"></i>\r
                    <span class="text-muted"\r
                      >{{ translate("tasks.task.duration") }}:</span\r
                    >\r
                    <span class="ms-2"\r
                      >{{\r
                        formatDate(currentTask.createdAt) | date : "dd/MM/yyyy"\r
                      }}\r
                      -\r
                      {{\r
                        formatDate(currentTask.dueDate) | date : "dd/MM/yyyy"\r
                      }}</span\r
                    >\r
                  </div>\r
\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-users me-2 text-muted"></i>\r
                    <span class="text-muted"\r
                      >{{ translate("tasks.task.assignee") }}:</span\r
                    >\r
                    <span class="ms-2">{{\r
                      currentTask.assigneeName ||\r
                        translate("tasks.task.noAssignee")\r
                    }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="mb-4">\r
                <h6>{{ translate("tasks.task.description") }}</h6>\r
                <div class="bg-light p-3 rounded">\r
                  {{\r
                    currentTask.description ||\r
                      translate("tasks.task.noSubtasks")\r
                  }}\r
                </div>\r
              </div>\r
\r
              <div class="mb-4">\r
                <h6>{{ translate("tasks.task.attachments") }}</h6>\r
                <div\r
                  class="bg-light p-3 rounded"\r
                  *ngIf="currentTaskAttachments.length === 0"\r
                >\r
                  {{ translate("tasks.task.noAttachments") }}\r
                </div>\r
                <div\r
                  *ngFor="let attachment of currentTaskAttachments"\r
                  class="d-flex align-items-center p-2 border-bottom"\r
                >\r
                  <i class="fas fa-file me-2"></i>\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ attachment.fileName }}</div>\r
                    <small class="text-muted"\r
                      >{{ attachment.uploadedByName }} -\r
                      {{\r
                        formatDate(attachment.uploadedAt) | date : "dd/MM/yyyy"\r
                      }}</small\r
                    >\r
                  </div>\r
                  <button\r
                    type="button"\r
                    class="btn btn-sm btn-outline-danger"\r
                    (click)="deleteAttachment(attachment.id, currentTask!.id)"\r
                  >\r
                    <svg\r
                      class="nav-icon"\r
                      width="20"\r
                      height="20"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                      stroke-linecap="round"\r
                      stroke-linejoin="round"\r
                      aria-label="Delete"\r
                    >\r
                      <polyline points="3 6 5 6 21 6"></polyline>\r
                      <path\r
                        d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"\r
                      ></path>\r
                      <path d="M10 11v6"></path>\r
                      <path d="M14 11v6"></path>\r
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>\r
                    </svg>\r
                  </button>\r
                </div>\r
\r
                <!-- Add New Attachment -->\r
                <div class="mt-3">\r
                  <input\r
                    type="file"\r
                    #detailsFileInput\r
                    class="d-none"\r
                    (change)="onFileSelected($event, currentTask.id)"\r
                  />\r
                  <button\r
                    type="button"\r
                    class="btn-icon-with-tooltip btn-sm"\r
                    (click)="detailsFileInput.click()"\r
                    [attr.data-tooltip]="translate('tasks.task.addAttachment')"\r
                    [attr.aria-label]="translate('tasks.task.addAttachment')"\r
                    style="min-width: 36px; min-height: 36px; padding: 8px"\r
                  >\r
                    <svg\r
                      width="16"\r
                      height="16"\r
                      viewBox="0 0 24 24"\r
                      fill="none"\r
                      stroke="currentColor"\r
                      stroke-width="2"\r
                    >\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                  </button>\r
                </div>\r
              </div>\r
\r
              <div class="mb-4">\r
                <h6>{{ translate("tasks.task.updatesTimeline") }}</h6>\r
                <div\r
                  class="bg-light p-3 rounded"\r
                  *ngIf="currentTaskUpdates.length === 0"\r
                >\r
                  {{ translate("tasks.task.noUpdates") }}\r
                </div>\r
                <div\r
                  *ngFor="let update of currentTaskUpdates"\r
                  class="d-flex align-items-start p-2 border-bottom"\r
                >\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ update.note }}</div>\r
                    <small class="text-muted"\r
                      >{{ update.createdByName }} -\r
                      {{\r
                        formatDate(update.createdAt) | date : "dd/MM/yyyy"\r
                      }}</small\r
                    >\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Feedback Section -->\r
              <div class="mb-4">\r
                <h6>{{ translate("tasks.task.feedback") }}</h6>\r
                <div\r
                  class="bg-light p-3 rounded"\r
                  *ngIf="currentTaskFeedback.length === 0"\r
                >\r
                  {{ translate("tasks.task.noFeedback") }}\r
                </div>\r
                <div\r
                  *ngFor="let feedback of currentTaskFeedback"\r
                  class="d-flex align-items-start p-2 border-bottom"\r
                >\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ feedback.feedbackText }}</div>\r
                    <small class="text-muted"\r
                      >{{ feedback.employeeName }} -\r
                      {{\r
                        formatDate(feedback.createdAt) | date : "dd/MM/yyyy"\r
                      }}</small\r
                    >\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="col-md-4">\r
              <div class="d-grid gap-2">\r
                <button\r
                  class="btn edit-task-btn"\r
                  (click)="openEditTaskModal(currentTask)"\r
                >\r
                  {{ translate("tasks.actions.edit") }}\r
                </button>\r
                <button\r
                  class="btn btn-outline-warning"\r
                  (click)="showStatusUpdateModal = true"\r
                >\r
                  {{ translate("tasks.actions.changeStatus") }}\r
                </button>\r
                <button\r
                  class="btn btn-outline-info"\r
                  (click)="showAddUpdateModal = true"\r
                >\r
                  {{ translate("tasks.actions.addUpdate") }}\r
                </button>\r
                <!-- <button class="btn btn-reassign" (click)="showReassignModal = true">\r
                  {{ translate('tasks.actions.reassign') }}\r
                </button> -->\r
                <button\r
                  class="btn btn-outline-danger"\r
                  (click)="deleteTask(currentTask)"\r
                >\r
                  {{ translate("tasks.actions.delete") }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeModal('showTaskDetailsModal')"\r
          >\r
            {{ translate("common.cancel") }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Status Update Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showStatusUpdateModal"\r
    [style.display]="showStatusUpdateModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">\r
            {{ translate("tasks.dialogs.statusUpdate") }}\r
          </h5>\r
        </div>\r
\r
        <form [formGroup]="statusUpdateForm" (ngSubmit)="updateTaskStatus()">\r
          <div class="modal-body">\r
            <!-- Warning message for completed/stopped tasks -->\r
            <div\r
              *ngIf="\r
                currentTask &&\r
                (currentTask.status === 2 || currentTask.status === 3)\r
              "\r
              class="alert alert-warning mb-3"\r
            >\r
              <i class="fas fa-exclamation-triangle me-2"></i>\r
              {{ translate("tasks.dialogs.taskCompletedWarning") }}\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.newStatus")\r
              }}</label>\r
              <select\r
                class="form-select"\r
                formControlName="status"\r
                [disabled]="\r
                  !!(\r
                    currentTask &&\r
                    (currentTask.status === 2 || currentTask.status === 3)\r
                  )\r
                "\r
              >\r
                <option value="">\r
                  {{ translate("tasks.form.selectStatus") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 0"\r
                  value="0"\r
                >\r
                  {{ translate("tasks.status.new") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 1"\r
                  value="1"\r
                >\r
                  {{ translate("tasks.status.inProgress") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 2"\r
                  value="2"\r
                >\r
                  {{ translate("tasks.status.done") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 3"\r
                  value="3"\r
                >\r
                  {{ translate("tasks.status.stopped") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 4"\r
                  value="4"\r
                >\r
                  {{ translate("tasks.status.late") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 5"\r
                  value="5"\r
                >\r
                  {{ translate("tasks.status.returned") }}\r
                </option>\r
                <option\r
                  *ngIf="!currentTask || currentTask.status !== 6"\r
                  value="6"\r
                >\r
                  {{ translate("tasks.status.review") }}\r
                </option>\r
              </select>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.note")\r
              }}</label>\r
              <textarea\r
                class="form-control"\r
                rows="3"\r
                formControlName="note"\r
                [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
                [disabled]="\r
                  !!(\r
                    currentTask &&\r
                    (currentTask.status === 2 || currentTask.status === 3)\r
                  )\r
                "\r
              ></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-warning"\r
              [disabled]="\r
                !statusUpdateForm.valid ||\r
                !!(\r
                  currentTask &&\r
                  (currentTask.status === 2 || currentTask.status === 3)\r
                )\r
              "\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showStatusUpdateModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Add Update Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showAddUpdateModal"\r
    [style.display]="showAddUpdateModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">\r
            {{ translate("tasks.dialogs.addUpdate") }}\r
          </h5>\r
        </div>\r
\r
        <form [formGroup]="addUpdateForm" (ngSubmit)="addTaskUpdate()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.note")\r
              }}</label>\r
              <textarea\r
                class="form-control"\r
                rows="3"\r
                formControlName="note"\r
                [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
              ></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-info"\r
              [disabled]="!addUpdateForm.valid"\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showAddUpdateModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Reassign Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showReassignModal"\r
    [style.display]="showReassignModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate("tasks.dialogs.reassign") }}</h5>\r
        </div>\r
\r
        <form [formGroup]="reassignForm" (ngSubmit)="reassignTask()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.newAssignee")\r
              }}</label>\r
              <ng-select\r
                [items]="reassignModalEmployees"\r
                bindLabel="fullName"\r
                bindValue="id"\r
                [searchable]="true"\r
                [clearable]="true"\r
                [loading]="isSearchingReassignEmployees"\r
                [class.is-invalid]="\r
                  reassignForm.get('newAssigneeUserId')?.invalid &&\r
                  reassignForm.get('newAssigneeUserId')?.touched\r
                "\r
                formControlName="newAssigneeUserId"\r
                (search)="onReassignModalEmployeeSearchNgSelect($event)"\r
                (open)="onReassignModalEmployeeSearchFocus()"\r
              >\r
                <ng-template ng-option-tmp let-item="item">\r
                  <div class="employee-option">\r
                    <div class="employee-name">{{ item.fullName }}</div>\r
                    <div class="employee-job" *ngIf="item.jobTitle">\r
                      {{ item.jobTitle }}\r
                    </div>\r
                  </div>\r
                </ng-template>\r
                <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                  <div class="text-muted text-center p-2">\r
                    <i class="fas fa-info-circle me-2"></i>\r
                    {{\r
                      reassignEmployeeSearchError ||\r
                        translate("tasks.form.noEmployeesFound") ||\r
                        "No employees found"\r
                    }}\r
                  </div>\r
                </ng-template>\r
              </ng-select>\r
              <small\r
                class="text-danger"\r
                *ngIf="\r
                  reassignForm.get('newAssigneeUserId')?.invalid &&\r
                  reassignForm.get('newAssigneeUserId')?.touched\r
                "\r
              >\r
                {{\r
                  translate("tasks.form.assigneeRequired") ||\r
                    "Please select an employee"\r
                }}\r
              </small>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.note")\r
              }}</label>\r
              <textarea\r
                class="form-control"\r
                rows="3"\r
                formControlName="note"\r
                [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
              ></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-secondary"\r
              [disabled]="!reassignForm.valid"\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showReassignModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Status Update Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showBulkStatusModal"\r
    [style.display]="showBulkStatusModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">\r
            {{ translate("tasks.bulk.updateStatus") }}\r
          </h5>\r
        </div>\r
\r
        <form [formGroup]="bulkStatusForm" (ngSubmit)="bulkUpdateStatus()">\r
          <div class="modal-body">\r
            <!-- Warning message for completed/stopped tasks -->\r
            <div\r
              *ngIf="hasCompletedOrStoppedTasks()"\r
              class="alert alert-warning mb-3"\r
            >\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                width="16"\r
                height="16"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
                stroke-linecap="round"\r
                stroke-linejoin="round"\r
                class="lucide lucide-triangle-alert-icon lucide-triangle-alert"\r
              >\r
                <path\r
                  d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"\r
                />\r
                <path d="M12 9v4" />\r
                <path d="M12 17h.01" />\r
              </svg>\r
              {{ translate("tasks.bulk.completedTasksWarning") }}\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.newStatus")\r
              }}</label>\r
              <select\r
                class="form-select"\r
                formControlName="status"\r
                [disabled]="areAllSelectedTasksDoneOrStopped()"\r
              >\r
                <option value="">\r
                  {{ translate("tasks.form.selectStatus") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(0)" value="0">\r
                  {{ translate("tasks.status.new") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(1)" value="1">\r
                  {{ translate("tasks.status.inProgress") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(2)" value="2">\r
                  {{ translate("tasks.status.done") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(3)" value="3">\r
                  {{ translate("tasks.status.stopped") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(4)" value="4">\r
                  {{ translate("tasks.status.late") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(5)" value="5">\r
                  {{ translate("tasks.status.returned") }}\r
                </option>\r
                <option *ngIf="!hasSelectedTaskWithStatus(6)" value="6">\r
                  {{ translate("tasks.status.review") }}\r
                </option>\r
              </select>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.note")\r
              }}</label>\r
              <textarea\r
                class="form-control"\r
                rows="3"\r
                formControlName="note"\r
                [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
              ></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-warning"\r
              [disabled]="\r
                !bulkStatusForm.valid || areAllSelectedTasksDoneOrStopped()\r
              "\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showBulkStatusModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Reassign Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showBulkReassignModal"\r
    [style.display]="showBulkReassignModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate("tasks.bulk.reassign") }}</h5>\r
        </div>\r
\r
        <form [formGroup]="bulkReassignForm" (ngSubmit)="bulkReassign()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.newAssignee")\r
              }}</label>\r
              <ng-select\r
                [items]="bulkReassignModalEmployees"\r
                bindLabel="fullName"\r
                bindValue="id"\r
                [searchable]="true"\r
                [clearable]="true"\r
                [loading]="isSearchingBulkReassignEmployees"\r
                [class.is-invalid]="\r
                  bulkReassignForm.get('newAssigneeUserId')?.invalid &&\r
                  bulkReassignForm.get('newAssigneeUserId')?.touched\r
                "\r
                formControlName="newAssigneeUserId"\r
                (search)="onBulkReassignModalEmployeeSearchNgSelect($event)"\r
                (open)="onBulkReassignModalEmployeeSearchFocus()"\r
              >\r
                <ng-template ng-option-tmp let-item="item">\r
                  <div class="employee-option">\r
                    <div class="employee-name">{{ item.fullName }}</div>\r
                    <div class="employee-job" *ngIf="item.jobTitle">\r
                      {{ item.jobTitle }}\r
                    </div>\r
                  </div>\r
                </ng-template>\r
                <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                  <div class="text-muted text-center p-2">\r
                    <i class="fas fa-info-circle me-2"></i>\r
                    {{\r
                      bulkReassignEmployeeSearchError ||\r
                        translate("tasks.form.noEmployeesFound") ||\r
                        "No employees found"\r
                    }}\r
                  </div>\r
                </ng-template>\r
              </ng-select>\r
              <small\r
                class="text-danger"\r
                *ngIf="\r
                  bulkReassignForm.get('newAssigneeUserId')?.invalid &&\r
                  bulkReassignForm.get('newAssigneeUserId')?.touched\r
                "\r
              >\r
                {{\r
                  translate("tasks.form.assigneeRequired") ||\r
                    "Please select an employee"\r
                }}\r
              </small>\r
            </div>\r
\r
            <div class="mb-3">\r
              <label class="form-label">{{\r
                translate("tasks.bulk.note")\r
              }}</label>\r
              <textarea\r
                class="form-control"\r
                rows="3"\r
                formControlName="note"\r
                [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
              ></textarea>\r
            </div>\r
          </div>\r
\r
          <div class="modal-footer">\r
            <button\r
              type="submit"\r
              class="btn btn-info"\r
              [disabled]="!bulkReassignForm.valid"\r
            >\r
              {{ translate("common.save") }}\r
            </button>\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              (click)="closeModal('showBulkReassignModal')"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
</div>\r
`, styles: [`/* src/app/components/tasks/tasks.component.css */
:host {
  --col-blue: #E9F6FB;
  --col-orange: #FFF1E3;
  --col-green: #EAF7F0;
  --col-gray: #F2F4F7;
  --col-red: #FEECEC;
  --card-radius: 16px;
  --card-shadow: 0 4px 18px rgba(0,0,0,.05);
  display: block;
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
  overflow-x: hidden;
}
:host-context([dir="ltr"]) {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.page-title {
  color: var(--brand-secondary);
  font-size: 1.34rem;
  font-weight: 700;
  letter-spacing: .13px;
  text-align: left;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.34rem;
}
.page-title[dir=rtl] {
  text-align: right;
}
.page-title[dir=ltr] {
  text-align: left;
}
.subtle {
  color: #8294A8;
  font-size: .64rem;
}
.btn-add {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-add:hover {
  background: #B68A35;
}
.btn-add .plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13.4px;
  height: 13.4px;
  border-radius: 2.68px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.34rem;
  font-weight: 700;
  font-size: 0.59rem;
}
.kanban {
  display: flex;
  gap: 0.67rem;
  overflow-x: auto;
  padding-bottom: 0.67rem;
  scroll-snap-type: x proximity;
}
.kanban-col {
  scroll-snap-align: start;
  min-width: 134px;
  max-width: 161px;
  flex: 0 0 auto;
}
.kanban-col.small {
  min-width: 121px;
}
.col-head {
  padding: 0.67rem 0.84rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.64rem;
  color: #fff;
  margin-bottom: 0.67rem;
  text-align: center;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, .1);
}
.col-head.blue {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.green {
  background: #E5FAF2;
  color: #00B789;
}
.col-head.gray {
  color: #404d49b9;
  background: #4e5c703d;
}
.col-head.red {
  color: #d80f0f;
  background: #f7151534;
}
.col-head.purple {
  color: #34495E;
  background: #34495e1f;
}
.col-head.yellow {
  color: #eab308;
  background: #fefce8;
}
.task-count-detail {
  margin-top: 0.17rem;
  font-size: 0.5rem;
  opacity: 0.8;
}
.task-count-detail small {
  display: block;
  line-height: 1.2;
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: .54rem;
}
.task-card {
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 1rem 1.15rem 1rem 1rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.task-card.compact {
  padding: 0.4rem 0.5rem 0.4rem 0.5rem;
}
.task-card:hover {
  transform: translateY(-4px);
  border-color: rgba(182, 138, 53, 0.35);
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.task-content {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 0;
  width: 100%;
  min-width: 0;
}
.task-title {
  font-weight: 700;
  color: #0f172a;
  font-size: 0.72rem;
  margin: 0;
  line-height: 1.25;
  letter-spacing: 0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.task-desc {
  color: #5f6d7a;
  font-size: 0.6rem;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.52rem;
  color: #7b8da1;
}
.task-dates {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.25rem;
  background:
    linear-gradient(
      135deg,
      rgba(38, 114, 209, 0.08),
      rgba(182, 138, 53, 0.05));
  border: 1px dashed rgba(38, 114, 209, 0.25);
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
}
.task-dates small {
  font-size: 0.54rem;
  line-height: 1.35;
  color: #3f4c5a;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.task-dates small strong {
  color: #0f172a;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.task-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .34rem;
  margin-top: .23rem;
}
.task-card.status-new:hover {
  border: 0.67px solid #0ea5e9;
}
.task-card.status-progress:hover {
  border: 0.67px solid #fb923c;
}
.task-card.status-done:hover {
  border: 0.67px solid #22c55e;
}
.task-card.status-stopped:hover {
  border: 0.67px solid #94a3b8;
}
.task-card.status-late:hover {
  border: 0.67px solid #ef4444;
}
.task-card.status-returned:hover {
  border: 0.67px solid 34495E;
}
.task-card.status-review:hover {
  border: 0.67px solid #eab308;
}
.badge.status-new {
  background-color: #0ea5e9;
  color: white;
}
.badge.status-inProgress {
  background-color: #fb923c;
  color: white;
}
.badge.status-done {
  background-color: #22c55e;
  color: white;
}
.badge.status-stopped {
  background-color: #94a3b8;
  color: white;
}
.badge.status-late {
  background-color: #ef4444;
  color: white;
}
.badge.status-returned {
  background-color: #34495E;
  color: white;
}
.badge.status-review {
  background-color: #eab308;
  color: white;
}
.badge {
  padding: 0.17rem 0.34rem;
  font-size: 0.5rem;
  font-weight: 600;
  border-radius: 4px;
}
.priority-high {
  background: #FEF2F2;
  color: #DC2626;
}
.priority-medium {
  background: #FFFBEB;
  color: #D97706;
}
.priority-low {
  background: #F0FDF4;
  color: #16A34A;
}
.badge-status {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  font-weight: 600;
  border-radius: 5.36px;
}
.badge-status.new {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned {
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.bulk-check {
  position: absolute;
  inset-block-end: 0.90rem;
  inset-inline-end: 0.65rem;
  inset-block-start: 0rem;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid rgba(182, 138, 53, 0.6);
  background-color: #ffffff;
  transform: scale(0.95);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
}
.bulk-check:checked {
  background-color: #2672d1;
  border-color: #2672d1;
}
.bulk-check:focus {
  box-shadow: 0 0 0 3px rgba(38, 114, 209, 0.2);
}
.dropdown-menu {
  border-radius: 5.36px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, .1);
  border: 0.67px solid rgba(0, 0, 0, .05);
}
.dropdown-item {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.dropdown-item:hover {
  background: #F8FAFC;
}
.dropdown-item.text-danger:hover {
  background: #FEF2F2;
}
.bulk-bar {
  position: sticky;
  bottom: 0;
  inset-inline: 0;
  background: #fff;
  border-top: 0.67px solid #E6EEF5;
  padding: .4rem .57rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show {
  display: block;
}
.modal {
  z-index: 1050;
}
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
.modal.fade.show {
  display: block !important;
  background: rgba(0, 0, 0, 0.5);
}
.modal-backdrop {
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.modal-content {
  border-radius: 10.7px;
  border: none;
  box-shadow: 0 13.4px 16.75px -3.35px rgba(0, 0, 0, .1), 0 6.7px 6.7px -3.35px rgba(0, 0, 0, .04);
}
.modal-header {
  border-bottom: 0.67px solid #E6D7A2;
  padding: 1rem 1rem 0.67rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 27px;
}
.filters-section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.btn-outline-secondary {
  background-color: #6c757d !important;
  color: #5F646D !important;
}
.btn-outline-secondary:hover {
  background-color: #5F646D !important;
  color: white !important;
}
.modal-body {
  padding: 1rem;
}
.modal-footer {
  border-top: 0.67px solid #E6D7A2;
  padding: 0.67rem 1rem 1rem;
}
[dir=rtl] .modal-footer {
  justify-content: flex-end;
}
[dir=ltr] .modal-footer {
  justify-content: flex-start;
}
[dir=rtl] .modal-header {
  justify-content: flex-end;
}
[dir=ltr] .modal-header {
  justify-content: flex-start;
}
.modal-title {
  font-weight: 700;
  color: #5F646D;
  flex: 1;
  width: 100%;
  margin: 0;
}
[dir=ltr] .modal-title {
  text-align: left !important;
}
[dir=rtl] .modal-title {
  text-align: right !important;
}
.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
  font-size: 0.75rem;
}
.form-control,
.form-select {
  border-radius: 5.36px;
  border: 0.67px solid #D1D5DB;
  padding: 0.5rem;
  transition: all 0.2s ease;
  font-size: 0.6rem;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-primary {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-primary:hover {
  background: #A87D2A;
  border-color: #A87D2A;
  color: #FFFFFF;
}
.btn-outline-primary {
  color: #B68A35;
  border-color: #B68A35;
  background: transparent;
}
.btn-outline-primary:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-warning {
  color: #f59e0b;
  border-color: #f59e0b;
  background: transparent;
}
.btn-outline-warning:hover {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}
.btn-outline-info {
  color: #4A9D5C;
  border-color: #4A9D5C;
  background: transparent;
}
.btn-outline-info:hover {
  background: #3F8E50;
  border-color: #3F8E50;
  color: white;
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
.filter-section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.filter-section .row {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
.btn-outline-secondary {
  color: #1B1D21 !important;
  border-color: #1B1D21 !important;
  background: transparent !important;
}
.btn-reassign {
  color: #555555;
  border-color: #555555;
  background: transparent;
}
.btn-reassign:hover {
  background: #555555;
  color: #FFFFFF;
}
.btn-outline-secondary:hover {
  background: #1B1D21;
  color: #FFFFFF;
}
.btn-outline-danger {
  color: #C62828;
  border-color: #C62828;
  background: transparent;
}
.btn-outline-danger:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-cancel,
.btn-secondary {
  background: transparent !important;
  border-color: #1B1D21;
  color: #1B1D21;
}
.btn-cancel:hover,
.btn-secondary:hover {
  background: #1B1D21 !important;
  color: #FFFFFF;
}
.border.rounded {
  border: 1.34px dashed #D1D5DB !important;
  transition: all 0.2s ease;
}
.border.rounded:hover {
  border-color: var(--brand-primary) !important;
  background: #F8FAFC;
}
.cursor-pointer {
  cursor: pointer;
}
.spinner-border {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 1200px) {
  .kanban-col {
    min-width: 220px;
    max-width: 260px;
  }
}
@media (max-width: 992px) {
  .kanban-col {
    min-width: 200px;
    max-width: 240px;
  }
  .kanban {
    gap: 0.75rem;
  }
}
@media (max-width: 768px) {
  .kanban {
    flex-direction: column;
    gap: 1rem;
  }
  .kanban-col {
    min-width: 100%;
    max-width: 100%;
  }
  .col-head {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  .task-card {
    padding: 0.95rem 1rem 0.95rem 0.85rem;
  }
  .task-title {
    font-size: 0.88rem;
  }
  .task-desc {
    font-size: 0.78rem;
  }
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
  .bulk-bar {
    padding: 0.5rem;
  }
  .bulk-bar .d-flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn-add {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  .btn-add .plus {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
}
@media (max-width: 576px) {
  .container-fluid {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .page-title {
    font-size: 1.5rem;
  }
  .subtle {
    font-size: 0.85rem;
  }
  .task-card {
    padding: 0.9rem 0.95rem 0.9rem 0.8rem;
  }
  .task-card.compact {
    padding: 0.75rem 0.85rem 0.75rem 0.7rem;
  }
  .task-content {
    margin-top: 0.85rem;
  }
  .modal-body {
    padding: 1rem;
  }
  .modal-header {
    padding: 1rem 1rem 0.75rem;
  }
  .modal-footer {
    padding: 0.75rem 1rem 1rem;
  }
}
[dir=rtl] .bulk-check {
  inset-inline-start: auto;
  inset-inline-end: 0.85rem;
}
[dir=rtl] .dropdown {
  right: auto;
  left: 0.5rem;
}
[dir=rtl] .task-footer {
  flex-direction: row-reverse;
}
.modal.fade.show {
  animation: modalFadeIn 0.3s ease-out;
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.task-card {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s ease;
}
.task-card:hover {
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.badge-status {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.badge-status.new {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned {
  background: #f3e8ff;
  color: 34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.kanban::-webkit-scrollbar {
  height: 8px;
}
.kanban::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kanban::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.kanban::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
.task-count {
  font-size: 0.54rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.34rem;
}
.pagination-container {
  margin-top: 1.34rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  border: 0.67px solid #e9ecef;
}
@media (max-width: 768px) {
  .pagination-container {
    padding: 1rem;
  }
  .pagination {
    gap: 0.125rem;
  }
  .pagination .page-link {
    min-width: 36px;
    height: 36px;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
  }
  .pagination-info {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
.pagination {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.17rem;
  flex-wrap: wrap;
}
.pagination .page-item {
  margin: 0;
}
.pagination .page-link {
  color: #B68A35;
  border: 0.67px solid #e9ecef;
  padding: 0.34rem 0.5rem;
  border-radius: 5.36px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 27px;
  height: 27px;
  font-weight: 500;
  font-size: 0.59rem;
}
.pagination .page-link:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 2.68px 5.36px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 1.34px 2.68px rgba(38, 102, 127, 0.3);
  font-weight: 600;
}
.pagination .page-item.disabled .page-link {
  color: #adb5bd;
  background-color: #f8f9fa;
  border-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination .page-item.disabled .page-link:hover {
  background-color: #f8f9fa;
  color: #adb5bd;
  border-color: #e9ecef;
  transform: none;
  box-shadow: none;
}
.arrow-icon {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow-icon.rtl-arrow {
  transform: scaleX(-1);
}
.pagination .page-link i {
  font-size: 0.59rem;
}
.pagination-info {
  text-align: center;
  font-size: 0.59rem;
  color: #6c757d;
  font-weight: 500;
}
[dir=rtl] .pagination {
  direction: rtl;
}
[dir=rtl] .pagination-info {
  text-align: center;
}
.modal {
  z-index: 9999 !important;
}
.modal.show {
  z-index: 9999 !important;
}
.modal-backdrop {
  z-index: 9998 !important;
}
.modal-xl {
  z-index: 9999 !important;
}
.modal-lg {
  z-index: 9999 !important;
}
.modal-dialog:not(.modal-xl) {
  z-index: 9999 !important;
}
app-confirmation-modal .modal-overlay {
  z-index: 99999;
}
.modal.fade.show {
  z-index: inherit;
}
.sidebar,
.sidebar * {
  z-index: 1000 !important;
}
.modal {
  z-index: 9999 !important;
}
.modal .employee-dropdown,
.modal .employee-search-container .employee-dropdown {
  z-index: 10000 !important;
}
body.modal-open {
  overflow: hidden;
}
body.modal-open::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1039;
  pointer-events: none;
}
.modal-backdrop {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6) !important;
}
.modal.show {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.kpi-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 80px;
  width: 100%;
  border: 0.67px solid rgba(238, 238, 238, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-card[dir=ltr] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.kpi-card[dir=rtl] {
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
}
.kpi-cards-row {
  margin-bottom: 1.34rem;
}
.kpi-cards-row.g-3 {
  --bs-gutter-x: 0.67rem;
  --bs-gutter-y: 0.67rem;
}
.kpi-cards-row > * {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-bottom: var(--bs-gutter-y);
}
.kpi-cards-row .kpi-card {
  height: 100%;
  min-height: 80px;
}
.kpi-cards-row + .row {
  margin-top: 1.34rem;
}
@media (min-width: 1600px) {
  .kpi-card {
    padding: 1.75rem;
    min-height: 140px;
  }
  .kpi-icon {
    width: 64px;
    height: 64px;
  }
  .kpi-number {
    font-size: 2.25rem;
  }
  .kpi-label {
    font-size: 1rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-card {
    padding: 0.2rem 0.5rem;
    min-height: 120px;
  }
  .kpi-icon {
    width: 40px;
    height: 40px;
  }
  .kpi-number {
    font-size: 1.1rem;
  }
  .kpi-label {
    font-size: 0.9rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .kpi-card {
    padding: 1.25rem;
    min-height: 120px;
  }
  .kpi-icon {
    width: 52px;
    height: 52px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.85rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.875rem;
    --bs-gutter-y: 0.875rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-card {
    padding: 1.25rem;
    min-height: 115px;
  }
  .kpi-icon {
    width: 48px;
    height: 48px;
  }
  .kpi-number {
    font-size: 1.75rem;
  }
  .kpi-label {
    font-size: 0.825rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.75rem;
    --bs-gutter-y: 0.75rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .kpi-card {
    padding: 1.125rem;
    min-height: 110px;
  }
  .kpi-icon {
    width: 44px;
    height: 44px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.8rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.625rem;
    --bs-gutter-y: 0.625rem;
  }
}
@media (max-width: 575px) {
  .kpi-card {
    padding: 1rem;
    min-height: 100px;
  }
  .kpi-icon {
    width: 40px;
    height: 40px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.75rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5rem;
  }
}
.kpi-card:hover {
  box-shadow: 0 2.68px 10.7px rgba(0, 0, 0, 0.15);
}
.kpi-total:hover {
  border: 0.67px solid #09365F;
}
.kpi-progress:hover {
  border: 0.67px solid #B54708;
}
.kpi-completed:hover {
  border: 0.67px solid #0f7a2f;
}
.kpi-late:hover {
  border: 0.67px solid #dc2626;
}
.kpi-pending:hover {
  border: 0.67px solid #6b7280;
}
.kpi-completion-rate:hover {
  border: 0.67px solid #059669;
}
.kpi-completion-rate .kpi-content {
  display: flex;
  align-items: center;
  gap: 0.67rem;
}
.kpi-completion-rate .kpi-info {
  flex: 1;
  width: 100%;
}
@media (min-width: 1024px) and (max-width: 1599px) {
  .kpi-completion-rate .kpi-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate .kpi-info {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .kpi-completion-rate .kpi-number {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .kpi-completion-rate .kpi-label {
    font-size: 1rem;
    flex: 0 0 auto;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1;
    min-width: 200px;
    margin-top: 0;
  }
  .kpi-completion-rate .progress-bar {
    height: 8px;
  }
  .kpi-completion-rate .progress-labels {
    font-size: 0.75rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-cards-row > [class*=col-]:has(.kpi-completion-rate) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-cards-row > .col-completion-rate {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-completion-rate {
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-content {
    gap: 1rem;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-icon {
    flex-shrink: 0;
  }
  .kpi-completion-rate .kpi-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-number {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-completion-rate .kpi-info {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate .kpi-number,
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
  }
}
@media (min-width: 992px) and (max-width: 1599px) {
  .kpi-completion-rate .kpi-info {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .kpi-completion-rate .completion-progress {
    min-width: 250px;
  }
}
@media (max-width: 1024px) {
  .kpi-completion-rate .kpi-content {
    overflow: hidden;
    max-width: 100%;
    min-width: 0;
  }
  .kpi-completion-rate .kpi-info {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .kpi-completion-rate .kpi-number {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.75rem;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    margin-top: 0.5rem;
  }
  .kpi-completion-rate .progress-bar {
    width: 100%;
  }
  @media (max-width: 767px) {
    .kpi-completion-rate .kpi-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .kpi-completion-rate .kpi-number,
    .kpi-completion-rate .kpi-label {
      width: 100%;
    }
    .kpi-completion-rate .completion-progress {
      width: 100%;
      margin-top: 0.75rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .kpi-completion-rate .kpi-info {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: nowrap;
    }
    .kpi-completion-rate .kpi-number {
      font-size: 1.5rem;
    }
    .kpi-completion-rate .kpi-label {
      font-size: 0.75rem;
    }
    .kpi-completion-rate .completion-progress {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 200px;
      margin-top: 0;
    }
  }
  .filter-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .filter-section .row {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    row-gap: 1rem;
  }
  .filter-section .col-md-2,
  .filter-section .col-md-3 {
    margin-bottom: 0.75rem;
  }
  .filter-section .form-label {
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
  }
  .filter-section .form-control,
  .filter-section .form-select {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  .filter-section .btn {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  @media (max-width: 767px) {
    .filter-section {
      padding: 0.875rem;
    }
    .filter-section .row {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      row-gap: 0.875rem;
    }
    .filter-section .col-md-2,
    .filter-section .col-md-3 {
      width: 100%;
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 0.5rem;
    }
    .filter-section .form-label {
      font-size: 0.8125rem;
    }
    .filter-section .form-control,
    .filter-section .form-select {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section .btn {
      width: 100%;
      padding: 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section .employee-search-container {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .filter-section .col-md-2 {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
    .filter-section .col-md-3 {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      margin-top: 0.5rem;
    }
    .filter-section .row > .col-md-2:last-child,
    .filter-section .row > .col-md-2:nth-last-child(2) {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
  }
}
.kpi-content {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon {
  width: 37.5px;
  height: 37.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.67rem;
  flex-shrink: 0;
}
.kpi-total .kpi-icon {
  background-color: rgb(204, 227, 237);
  color: #09365F;
}
.kpi-progress .kpi-icon {
  background-color: rgb(251, 236, 212);
  color: #B54708;
}
.kpi-completed .kpi-icon {
  background-color: rgb(237, 250, 246);
  color: #0f7a2f;
}
.kpi-late .kpi-icon {
  background-color: rgb(253, 226, 226);
  color: #dc2626;
}
.kpi-pending .kpi-icon {
  background-color: rgb(248, 250, 252);
  color: #6b7280;
}
.kpi-completion-rate .kpi-icon {
  background-color: rgb(237, 250, 246);
  color: #059669;
}
.kpi-info {
  flex: 1;
}
.kpi-number {
  font-size: 1.34rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.17rem;
}
.kpi-label {
  font-size: 0.59rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle {
  font-size: 0.5rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.17rem;
  font-style: italic;
}
.completion-progress {
  margin-top: 0.5rem;
  width: 100%;
}
.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.34rem;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 2px;
  transition: width 0.8s ease-in-out;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.42rem;
  color: #9ca3af;
  font-weight: 500;
}
@media (min-width: 1600px) {
  .progress-bar {
    height: 8px;
  }
  .progress-labels {
    font-size: 0.7rem;
  }
}
@media (max-width: 575px) {
  .progress-bar {
    height: 5px;
  }
  .progress-labels {
    font-size: 0.55rem;
  }
  .completion-progress {
    margin-top: 0.5rem;
  }
}
.insight-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100%;
  border-left: 2.68px solid #B68A35;
}
.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.67rem;
}
.insight-title {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon {
  width: 21.5px;
  height: 21.5px;
  background-color: #f3f4f6;
  border-radius: 5.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.insight-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.34rem 0;
  border-bottom: 0.67px solid #f3f4f6;
}
.insight-item:last-child {
  border-bottom: none;
}
.insight-label {
  display: flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 0.59rem;
  color: #374151;
  font-weight: 500;
}
.insight-value {
  display: flex;
  align-items: center;
  gap: 0.17rem;
}
.insight-count {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage {
  color: #6b7280;
  font-size: 0.5rem;
}
.status-dot,
.priority-dot {
  width: 5.36px;
  height: 5.36px;
  border-radius: 50%;
}
.efficiency-summary-card {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 10.7px;
  padding: 1.34rem;
  color: white;
  box-shadow: 0 5.36px 21.4px rgba(102, 126, 234, 0.3);
}
.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.34rem;
}
.summary-title-section {
  flex: 1;
}
.summary-title {
  font-size: 1.17rem;
  font-weight: 700;
  margin: 0 0 0.34rem 0;
  color: white;
}
.summary-subtitle {
  font-size: 0.67rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics {
  display: flex;
  gap: 1.34rem;
  flex-shrink: 0;
}
.metric-item {
  text-align: center;
  min-width: 53.6px;
}
.metric-value {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.17rem;
}
.metric-label {
  font-size: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.34px;
}
.summary-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.67rem;
}
.chart-container {
  display: flex;
  align-items: end;
  gap: 0.67rem;
  height: 80px;
  width: 100%;
  justify-content: center;
}
.chart-bar {
  width: 27px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2.68px 2.68px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar:hover .chart-tooltip {
  opacity: 1;
  transform: translateY(-3.35px);
}
.chart-tooltip {
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.34rem;
  border-radius: 4px;
  font-size: 0.5rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}
.chart-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 2.68px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels {
  display: flex;
  gap: 0.67rem;
  justify-content: center;
}
.chart-label {
  font-size: 0.5rem;
  opacity: 0.8;
  text-align: center;
  min-width: 27px;
}
@keyframes chartBarGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
@media (max-width: 768px) {
  .summary-header {
    flex-direction: column;
    gap: 1rem;
  }
  .summary-metrics {
    gap: 1rem;
    justify-content: space-around;
    width: 100%;
  }
  .metric-item {
    min-width: auto;
    flex: 1;
  }
  .chart-container {
    gap: 0.5rem;
  }
  .chart-bar {
    width: 30px;
  }
  .chart-labels {
    gap: 0.5rem;
  }
  .chart-label {
    font-size: 0.625rem;
    min-width: 30px;
  }
  .insight-card {
    margin-bottom: 1rem;
  }
  .insight-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .insight-icon {
    align-self: flex-end;
  }
}
[dir=rtl] .kpi-content {
  flex-direction: row-reverse;
}
[dir=rtl] .kpi-icon {
  margin-right: 0;
  margin-left: 1rem;
}
[dir=rtl] .kpi-info {
  text-align: right;
}
[dir=rtl] .kpi-completion-rate .kpi-content {
  flex-direction: row-reverse;
}
@media (min-width: 768px) and (max-width: 1599px) {
  [dir=rtl] .kpi-completion-rate .kpi-info {
    flex-direction: row-reverse;
  }
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
.employee-search-container {
  position: relative;
}
.employee-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 0.67px solid #ddd;
  border-radius: 5.36px;
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: auto;
}
.modal .employee-dropdown {
  z-index: 10000 !important;
}
.modal-body .employee-search-container {
  position: relative;
  z-index: 1000000;
  overflow: visible;
}
.modal-body .employee-search-container .employee-dropdown {
  z-index: 10000 !important;
}
.employee-list {
  padding: 5.36px 0;
}
.employee-item {
  display: flex;
  align-items: center;
  padding: 8px 10.7px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 0.67px solid #f0f0f0;
}
.employee-item:hover {
  background-color: #F2ECCE;
}
.employee-item:last-child {
  border-bottom: none;
}
.employee-item.text-danger,
.employee-item.text-muted {
  cursor: default !important;
  pointer-events: none;
}
.employee-item.text-danger:hover,
.employee-item.text-muted:hover {
  background-color: transparent !important;
}
.employee-item.text-danger {
  color: #dc3545 !important;
  font-weight: 500;
  padding: 10.7px;
}
.employee-item.text-muted {
  color: #6c757d !important;
  font-weight: 400;
  padding: 10.7px;
}
.employee-info {
  flex: 1;
  min-width: 0;
}
.result {
  background-color: #C8E6C9 !important;
  border: 0.67px solid #2BA149 !important;
}
.employee-name {
  font-weight: 500;
  color: #333;
  font-size: 9.38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job {
  font-size: 8.04px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee {
  margin-top: 5.36px;
  padding: 8px;
  background: #f8f9fa;
  border: 0.67px solid #e9ecef;
  border-radius: 5.36px;
}
.selected-employee-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-remove-employee {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 2.68px;
  border-radius: 2.68px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option {
  background-color: #f8f9fa;
  border-bottom: 1.34px solid #e9ecef !important;
}
.show-all-option:hover {
  background-color: #e9ecef;
}
.show-all-avatar {
  background:
    linear-gradient(
      135deg,
      #28a745 0%,
      #20c997 100%) !important;
  color: white;
}
[dir=rtl] .employee-avatar {
  margin-left: 0;
  margin-right: 8px;
}
[dir=rtl] .btn-remove-employee {
  margin-left: 0;
  margin-right: auto;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .page-title {
    font-size: 1.21rem;
  }
  .subtle {
    font-size: 0.6rem;
  }
  .btn-add {
    padding: 0.4rem 0.8rem;
    font-size: 0.57rem;
  }
  .btn-add .plus {
    width: 12.06px;
    height: 12.06px;
    font-size: 0.54rem;
  }
  .kanban {
    gap: 0.57rem;
    padding-bottom: 0.5rem;
  }
  .kanban-col {
    min-width: 127px;
    max-width: 154px;
  }
  .col-head {
    padding: 0.57rem 0.67rem;
    font-size: 0.6rem;
    margin-bottom: 0.57rem;
  }
  .task-count-detail {
    font-size: 0.47rem;
  }
  .task-list {
    gap: 0.47rem;
  }
  .task-card {
    padding: 0.85rem 0.95rem 0.85rem 0.75rem;
  }
  .task-card.compact {
    padding: 0.7rem 0.85rem 0.7rem 0.7rem;
  }
  .task-content {
    gap: 0.45rem;
  }
  .task-title {
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .task-desc {
    font-size: 0.54rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .task-meta {
    font-size: 0.52rem;
  }
  .task-dates small {
    font-size: 0.47rem;
  }
  .task-footer {
    gap: 0.27rem;
    margin-top: 0.2rem;
  }
  .kpi-cards-row {
    margin-bottom: 1rem;
  }
  .kpi-card {
    padding: 0.74rem;
    min-height: 72px;
  }
  .kpi-icon {
    width: 32px;
    height: 32px;
  }
  .kpi-number {
    font-size: 1.17rem;
  }
  .kpi-label {
    font-size: 0.54rem;
  }
  .kpi-subtitle {
    font-size: 0.47rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.6rem;
    --bs-gutter-y: 0.6rem;
  }
  .bulk-check {
    inset-block-start: 0rem;
  }
  .kpi-completion-rate .kpi-content {
    gap: 0.5rem;
  }
  .kpi-completion-rate .kpi-info {
    gap: 0.67rem;
  }
  .kpi-completion-rate .kpi-number {
    font-size: 1.34rem;
  }
  .completion-progress {
    margin-top: 0.34rem;
  }
  .progress-bar {
    height: 3.35px;
  }
  .progress-labels {
    font-size: 0.47rem;
  }
}
::ng-deep .ng-select {
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
}
::ng-deep .ng-select .ng-select-container {
  border: 1px solid #e9ecef !important;
  border-radius: 6px !important;
  min-height: 38px !important;
  background-color: #fff !important;
  padding: 0 12px !important;
  cursor: text !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-placeholder {
  color: #6c757d !important;
  font-size: 14px !important;
  padding: 0 !important;
  margin: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-input {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-input input {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  background: transparent !important;
  height: auto !important;
  line-height: 1.5 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-value {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  max-width: none !important;
  overflow: visible !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  flex: 0 1 auto !important;
  min-width: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {
  display: block !important;
  line-height: 1.5 !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  max-width: none !important;
  width: auto !important;
  min-width: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-arrow-wrapper {
  width: 25px !important;
  height: 25px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: #6c757d transparent transparent !important;
  border-style: solid !important;
  border-width: 5px 5px 2.5px !important;
  height: 0 !important;
  width: 0 !important;
}
::ng-deep .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: transparent transparent #6c757d !important;
  border-width: 0 5px 5px !important;
}
::ng-deep .ng-select.ng-select-focused .ng-select-container {
  border-color: #b68a35 !important;
  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;
}
::ng-deep .ng-select.ng-select-disabled .ng-select-container {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}
::ng-deep .ng-dropdown-panel {
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background: white !important;
  margin-top: 4px !important;
  z-index: 10000 !important;
}
::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items {
  max-height: 300px !important;
  overflow-y: auto !important;
}
::ng-deep .ng-select .ng-option {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f0f0f0 !important;
  cursor: pointer !important;
  font-size: 14px !important;
  color: #333 !important;
  min-width: 300px !important;
  white-space: normal !important;
}
::ng-deep .ng-select .ng-dropdown-panel {
  min-width: 300px !important;
  max-width: none !important;
}
::ng-deep .ng-select .ng-option:last-child {
  border-bottom: none !important;
}
::ng-deep .ng-select .ng-option:hover {
  background-color: #f8f9fa !important;
}
::ng-deep .ng-select .ng-option.ng-option-selected {
  background-color: #e9ecef !important;
  color: #333 !important;
}
::ng-deep .ng-select .ng-option.ng-option-marked {
  background-color: #f8f9fa !important;
}
::ng-deep .ng-select .ng-option.ng-option-disabled {
  color: #999 !important;
  cursor: not-allowed !important;
}
::ng-deep .ng-select .ng-clear-wrapper {
  width: 20px !important;
  height: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
}
::ng-deep .ng-select .ng-clear-wrapper .ng-clear {
  font-size: 18px !important;
  color: #999 !important;
  line-height: 1 !important;
}
::ng-deep .ng-select .ng-clear-wrapper:hover .ng-clear {
  color: #333 !important;
}
::ng-deep .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {
  display: none !important;
}
::ng-deep .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {
  width: 20px !important;
  height: 20px !important;
  border: 2px solid #f3f3f3 !important;
  border-top: 2px solid #b68a35 !important;
  border-radius: 50% !important;
  animation: spin 1s linear infinite !important;
}
.employee-option {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 300px;
  max-width: none;
  width: auto;
}
.employee-option .employee-name {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
.employee-option .employee-job {
  font-size: 12px;
  color: #6c757d;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
/*# sourceMappingURL=tasks.component-7LSNDGFN.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: UsersService }, { type: EmployeesService }, { type: TranslationService }, { type: LangService }, { type: AuthService }, { type: FormBuilder }, { type: ChangeDetectorRef }, { type: Router }, { type: ActivatedRoute }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/components/tasks/tasks.component.ts", lineNumber: 23 });
})();

// src/app/components/tasks/my-tasks/my-tasks.component.ts
var _c02 = ["confirmationModal"];
function MyTasksComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.filters.to_date_before_from_date_error"), " ");
  }
}
function MyTasksComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function MyTasksComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function MyTasksComponent_div_34_Template_div_click_0_listener() {
      const task_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r4));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53)(5, "small", 54)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 54)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r4.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r4.dueDate), " ");
  }
}
function MyTasksComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function MyTasksComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function MyTasksComponent_div_42_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "small", 54)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 54)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, task_r6.title, 0, 20), "", task_r6.title.length > 20 ? "..." : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r6.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r6.dueDate), " ");
  }
}
function MyTasksComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function MyTasksComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function MyTasksComponent_div_50_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 53)(6, "small", 54)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 54)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, task_r8.title, 0, 20), "", task_r8.title.length > 20 ? "..." : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r8.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(task_r8.dueDate), " ");
  }
}
function MyTasksComponent_div_51_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 60)(1, "a", 61);
    \u0275\u0275listener("click", function MyTasksComponent_div_51_li_7_Template_a_click_1_listener($event) {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.goToPage(page_r11);
      return \u0275\u0275resetView($event.preventDefault());
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
function MyTasksComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "nav", 58)(2, "ul", 59)(3, "li", 60)(4, "a", 61);
    \u0275\u0275listener("click", function MyTasksComponent_div_51_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goToPage(ctx_r1.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, MyTasksComponent_div_51_li_7_Template, 3, 3, "li", 62);
    \u0275\u0275elementStart(8, "li", 60)(9, "a", 61);
    \u0275\u0275listener("click", function MyTasksComponent_div_51_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.goToPage(ctx_r1.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 63)(13, "span", 64);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.previous"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.getMaxPagesForAnyStatus());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.next"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6(" ", ctx_r1.translate("common.showing"), " ", ctx_r1.getStartIndex(), " - ", ctx_r1.getEndIndex(), " ", ctx_r1.translate("common.of"), " ", ctx_r1.getTotalTasks(), " ", ctx_r1.translate("common.results"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.pagination.note"));
  }
}
function MyTasksComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MyTasksComponent_div_59_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noFeedback"), " ");
  }
}
function MyTasksComponent_div_59_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r13.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r13.employeeName, " - ", ctx_r1.formatDate(feedback_r13.createdAt));
  }
}
function MyTasksComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 68)(2, "div", 69)(3, "h4", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 70)(6, "div", 71)(7, "div", 72);
    \u0275\u0275element(8, "i", 73);
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 74);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 72);
    \u0275\u0275element(14, "i", 75);
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 76);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 71)(20, "div", 72);
    \u0275\u0275element(21, "i", 77);
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 72);
    \u0275\u0275element(27, "i", 78);
    \u0275\u0275elementStart(28, "span", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 74);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 79)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 80);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 79)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, MyTasksComponent_div_59_div_40_Template, 2, 1, "div", 81)(41, MyTasksComponent_div_59_div_41_Template, 6, 3, "div", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 83)(43, "div", 84)(44, "button", 85);
    \u0275\u0275listener("click", function MyTasksComponent_div_59_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFeedbackModal(ctx_r1.currentTask));
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.status"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.currentTask.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(ctx_r1.currentTask.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.duration"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.formatDate(ctx_r1.currentTask.createdAt), " - ", ctx_r1.formatDate(ctx_r1.currentTask.dueDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.task.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTask.assigneeName || ctx_r1.translate("tasks.task.noAssignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTask.description || ctx_r1.translate("tasks.task.noSubtasks"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.feedback"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.currentTaskFeedback);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canSubmitFeedback(ctx_r1.currentTask));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.myTasks.actions.submitFeedback"), " ");
  }
}
function MyTasksComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.myTasks.form.feedbackMinLength"), " ");
  }
}
function MyTasksComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, MyTasksComponent_div_76_div_1_Template, 2, 1, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.feedbackForm.get("feedbackText")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function MyTasksComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 91);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showFeedbackModal || ctx_r1.showTaskDetailsModal);
  }
}
var MyTasksComponent = class _MyTasksComponent {
  tasksService;
  translationService;
  langService;
  fb;
  cdr;
  router;
  confirmationModal;
  // Data
  tasks = [];
  allTasksForCounting = [];
  // Store all tasks for status counting
  // Language
  currentLang = "en";
  // UI state
  isLoading = false;
  // Pagination state
  currentPage = 1;
  pageSize = 5;
  // 5 tasks per column per page
  totalCount = 0;
  totalPages = 1;
  // Modal visibility
  showFeedbackModal = false;
  showTaskDetailsModal = false;
  // Current task and details
  currentTask = null;
  currentTaskDetails = null;
  currentTaskFeedback = [];
  // Forms
  feedbackForm;
  filterForm;
  // Status mapping
  STATUS_MAP = {
    0: "new",
    1: "inProgress",
    2: "done",
    3: "stopped",
    4: "late",
    5: "returned",
    6: "review"
  };
  PRIORITY_MAP = {
    1: "high",
    2: "medium",
    3: "low"
  };
  constructor(tasksService, translationService, langService, fb, cdr, router) {
    this.tasksService = tasksService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.cdr = cdr;
    this.router = router;
    this.initializeForms();
  }
  ngOnInit() {
    this.loadData();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });
  }
  initializeForms() {
    this.filterForm = this.fb.group({
      dueDateFrom: [""],
      dueDateTo: [""]
    });
    this.feedbackForm = this.fb.group({
      feedbackText: ["", [Validators.minLength(10)]]
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield this.loadMyTasks();
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadMyTasks() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        const adjustedToDate = this.getInclusiveEndDate(formValue.dueDateTo);
        this.tasksService.getEmployeeTasksWithFilters(formValue.dueDateFrom || void 0, adjustedToDate).subscribe({
          next: (response) => {
            if (response.success && response.data?.items) {
              this.tasks = response.data.items.filter((task) => task.status === 0 || task.status === 1 || task.status === 5);
              this.allTasksForCounting = this.tasks;
              this.totalCount = this.tasks.length;
              this.totalPages = Math.ceil(this.totalCount / this.pageSize);
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  // Modal management
  closeAllModals() {
    this.showFeedbackModal = false;
    this.showTaskDetailsModal = false;
    this.updateBodyClass();
  }
  canOpenModal() {
    return !this.showFeedbackModal && !this.showTaskDetailsModal;
  }
  updateBodyClass() {
    const hasOpenModal = this.showFeedbackModal || this.showTaskDetailsModal;
    if (hasOpenModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }
  // Task actions
  openTaskDetailsModal(task) {
    this.router.navigate(["/tasks/details", task.id]);
  }
  openFeedbackModal(task) {
    this.closeAllModals();
    this.currentTask = task;
    this.showFeedbackModal = true;
    this.feedbackForm.reset();
    this.updateBodyClass();
  }
  loadTaskFeedback(taskId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskFeedback(taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.currentTaskFeedback = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  // Form submissions
  onSubmitFeedback() {
    return __async(this, null, function* () {
      if (this.feedbackForm.valid && this.currentTask) {
        try {
          const formValue = this.feedbackForm.value;
          const feedbackData = {
            feedbackText: formValue.feedbackText
          };
          const response = yield this.tasksService.submitTaskFeedback(this.currentTask.id, feedbackData).toPromise();
          if (response && response.success) {
            yield this.loadMyTasks();
            this.closeModal("showFeedbackModal");
            if (this.confirmationModal) {
              const modalData = {
                title: this.translate("tasks.myTasks.dialogs.feedbackSuccess"),
                message: this.translate("tasks.myTasks.dialogs.feedbackSuccess"),
                confirmText: this.translate("common.ok"),
                cancelText: this.translate("common.close"),
                type: "info"
              };
              this.confirmationModal.show(modalData);
              const subscription = this.confirmationModal.confirm.subscribe(() => {
                subscription.unsubscribe();
              });
            }
          }
        } catch (error) {
          console.error("Error submitting feedback:", error);
          this.showErrorMessage(this.translate("tasks.myTasks.dialogs.feedbackError"));
        }
      }
    });
  }
  // Filter methods
  onFilterChange() {
    this.currentPage = 1;
    this.loadData();
  }
  /**
   * Handle from date change
   * Validates that to date is not before from date
   */
  onFromDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (fromDateValue && toDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Handle to date change
   * Validates that to date is not before from date
   */
  onToDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (toDateValue && fromDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Get minimum date for to date input (should be from date if selected)
   */
  getMinToDate() {
    return this.filterForm.get("dueDateFrom")?.value || "";
  }
  clearFilters() {
    this.filterForm.reset();
    this.currentPage = 1;
    this.loadData();
  }
  applyFilters() {
    this.currentPage = 1;
    this.loadData();
  }
  // Utility methods
  translate(key) {
    return this.translationService.translate(key);
  }
  // Message display methods
  showSuccessMessage(message) {
    console.log("Success:", message);
  }
  showErrorMessage(message) {
    console.log("Error:", message);
  }
  isRTL() {
    return this.langService.isRTL();
  }
  getStatusClass(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? `status-${statusKey}` : "";
  }
  getPriorityClass(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? `priority-${priorityKey}` : "";
  }
  getPriorityText(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? this.translate(`tasks.priority.${priorityKey}`) : "";
  }
  /**
   * Adjust end date to be inclusive by adding one day
   */
  getInclusiveEndDate(dateValue) {
    if (!dateValue) {
      return void 0;
    }
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      return dateValue;
    }
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  getStatusText(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? this.translate(`tasks.status.${statusKey}`) : "";
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US");
  }
  // Close modals
  closeModal(modalName) {
    switch (modalName) {
      case "showFeedbackModal":
        this.showFeedbackModal = false;
        this.feedbackForm.reset();
        break;
      case "showTaskDetailsModal":
        this.showTaskDetailsModal = false;
        this.currentTask = null;
        this.currentTaskDetails = null;
        this.currentTaskFeedback = [];
        break;
    }
    this.updateBodyClass();
  }
  // Check if task can have feedback submitted
  canSubmitFeedback(task) {
    return task.status === 0 || task.status === 1 || task.status === 5;
  }
  // Get tasks by status for display with pagination
  getTasksByStatus(status) {
    const allStatusTasks = this.allTasksForCounting.filter((task) => task.status === status);
    const tasksPerPage = 5;
    const startIndex = (this.currentPage - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    return allStatusTasks.slice(startIndex, endIndex);
  }
  getStatusTaskCount(status) {
    return this.allTasksForCounting.filter((task) => task.status === status).length;
  }
  // Pagination methods
  goToPage(page) {
    if (page >= 1 && page <= this.getMaxPagesForAnyStatus() && page !== this.currentPage) {
      this.currentPage = page;
    }
  }
  getMaxPagesForAnyStatus() {
    const maxTasks = Math.max(
      this.getStatusTaskCount(0),
      // New
      this.getStatusTaskCount(1),
      // In Progress
      this.getStatusTaskCount(5)
      // Returned
    );
    return Math.ceil(maxTasks / 5);
  }
  getPageNumbers() {
    const pages = [];
    const maxPages = this.getMaxPagesForAnyStatus();
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(maxPages, this.currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStartIndex() {
    return (this.currentPage - 1) * 5 + 1;
  }
  getEndIndex() {
    const maxTasks = Math.max(this.getStatusTaskCount(0), this.getStatusTaskCount(1), this.getStatusTaskCount(5));
    return Math.min(this.currentPage * 5, maxTasks);
  }
  getTotalTasks() {
    return this.totalCount;
  }
  getStatusTasksOnOtherPages(status) {
    const totalForStatus = this.getStatusTaskCount(status);
    const onCurrentPage = this.tasks.filter((task) => task.status === status).length;
    return Math.max(0, totalForStatus - onCurrentPage);
  }
  static \u0275fac = function MyTasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyTasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTasksComponent, selectors: [["app-my-tasks"]], viewQuery: function MyTasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 85, vars: 50, consts: [["confirmationModal", ""], [1, "container-fluid", "my-tasks-container", 3, "dir"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "filter-section", "mb-4"], [3, "formGroup"], [1, "filter-row"], [1, "filter-group"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change", "min"], ["class", "error-message text-danger", 4, "ngIf"], [1, "filter-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-search", "me-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], ["rows", "4", "formControlName", "feedbackText", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "error-message", "text-danger"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-muted"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-backdrop", "fade"]], template: function MyTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "form", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275listener("change", function MyTasksComponent_Template_input_change_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFromDateChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275listener("change", function MyTasksComponent_Template_input_change_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onToDateChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, MyTasksComponent_small_18_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21);
      \u0275\u0275text(29);
      \u0275\u0275elementStart(30, "span", 22);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(32, MyTasksComponent_div_32_Template, 1, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 24);
      \u0275\u0275template(34, MyTasksComponent_div_34_Template, 13, 5, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 20)(36, "div", 26);
      \u0275\u0275text(37);
      \u0275\u0275elementStart(38, "span", 22);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(40, MyTasksComponent_div_40_Template, 1, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 24);
      \u0275\u0275template(42, MyTasksComponent_div_42_Template, 14, 10, "div", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 20)(44, "div", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementStart(46, "span", 22);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, MyTasksComponent_div_48_Template, 1, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 24);
      \u0275\u0275template(50, MyTasksComponent_div_50_Template, 14, 10, "div", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, MyTasksComponent_div_51_Template, 18, 14, "div", 30)(52, MyTasksComponent_div_52_Template, 4, 0, "div", 31);
      \u0275\u0275elementStart(53, "div", 32)(54, "div", 33)(55, "div", 34)(56, "div", 35)(57, "h5", 36);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(59, MyTasksComponent_div_59_Template, 46, 19, "div", 37);
      \u0275\u0275elementStart(60, "div", 38)(61, "button", 39);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "div", 32)(64, "div", 40)(65, "div", 34)(66, "div", 35)(67, "h5", 36);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "form", 41);
      \u0275\u0275listener("ngSubmit", function MyTasksComponent_Template_form_ngSubmit_69_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitFeedback());
      });
      \u0275\u0275elementStart(70, "div", 42)(71, "div", 43)(72, "label", 10);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "textarea", 44);
      \u0275\u0275text(75, "              ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, MyTasksComponent_div_76_Template, 2, 1, "div", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 38)(78, "button", 46);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "button", 39);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showFeedbackModal"));
      });
      \u0275\u0275text(81);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(82, MyTasksComponent_div_82_Template, 1, 2, "div", 47);
      \u0275\u0275element(83, "app-confirmation-modal", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_10_0;
      let tmp_39_0;
      let tmp_41_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.subtitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_from"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_to"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.getMinToDate() && ((tmp_8_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_8_0.value) && ((tmp_8_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_8_0.value) < ctx.getMinToDate());
      \u0275\u0275property("min", ctx.getMinToDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMinToDate() && ((tmp_10_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_10_0.value) && ((tmp_10_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_10_0.value) < ctx.getMinToDate());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear_filters"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.new"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(0));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.inProgress"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(1));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(1) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.returned"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getStatusTaskCount(5));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(5) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(5));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMaxPagesForAnyStatus() > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showTaskDetailsModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showTaskDetailsModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.task_details"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentTask);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.close"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showFeedbackModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showFeedbackModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.dialogs.submitFeedback"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.feedbackForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.form.feedbackText"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_39_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_39_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("tasks.myTasks.form.feedbackPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_41_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_41_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.submit"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFeedbackModal || ctx.showTaskDetailsModal);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent, SlicePipe], styles: [`

[_nghost-%COMP%] {
  --col-blue: #E9F6FB;
  --col-orange: #FFF1E3;
  --col-green: #EAF7F0;
  --col-gray: #F2F4F7;
  --col-red: #FEECEC;
  --card-radius: 16px;
  --card-shadow: 0 4px 18px rgba(0,0,0,.05);
  display: block;
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
  overflow-x: hidden;
}
[dir="ltr"][_nghost-%COMP%], [dir="ltr"]   [_nghost-%COMP%] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.page-title[_ngcontent-%COMP%] {
  color: var(--brand-secondary);
  font-size: 1.34rem;
  font-weight: 700;
  letter-spacing: .13px;
  text-align: left;
}
.top-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.34rem;
}
.page-title[dir=rtl][_ngcontent-%COMP%] {
  text-align: right;
}
.page-title[dir=ltr][_ngcontent-%COMP%] {
  text-align: left;
}
.subtle[_ngcontent-%COMP%] {
  color: #8294A8;
  font-size: .64rem;
}
.btn-add[_ngcontent-%COMP%] {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-add[_ngcontent-%COMP%]:hover {
  background: #B68A35;
}
.btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13.4px;
  height: 13.4px;
  border-radius: 2.68px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.34rem;
  font-weight: 700;
  font-size: 0.59rem;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.67rem;
  overflow-x: auto;
  padding-bottom: 0.67rem;
  scroll-snap-type: x proximity;
}
.kanban-col[_ngcontent-%COMP%] {
  scroll-snap-align: start;
  min-width: 134px;
  max-width: 161px;
  flex: 0 0 auto;
}
.kanban-col.small[_ngcontent-%COMP%] {
  min-width: 121px;
}
.col-head[_ngcontent-%COMP%] {
  padding: 0.67rem 0.84rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.64rem;
  color: #fff;
  margin-bottom: 0.67rem;
  text-align: center;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, .1);
}
.col-head.blue[_ngcontent-%COMP%] {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange[_ngcontent-%COMP%] {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.green[_ngcontent-%COMP%] {
  background: #E5FAF2;
  color: #00B789;
}
.col-head.gray[_ngcontent-%COMP%] {
  color: #404d49b9;
  background: #4e5c703d;
}
.col-head.red[_ngcontent-%COMP%] {
  color: #d80f0f;
  background: #f7151534;
}
.col-head.purple[_ngcontent-%COMP%] {
  color: #34495E;
  background: #34495e1f;
}
.col-head.yellow[_ngcontent-%COMP%] {
  color: #eab308;
  background: #fefce8;
}
.task-count-detail[_ngcontent-%COMP%] {
  margin-top: 0.17rem;
  font-size: 0.5rem;
  opacity: 0.8;
}
.task-count-detail[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.2;
}
.task-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: .54rem;
}
.task-card[_ngcontent-%COMP%] {
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 1rem 1.15rem 1rem 1rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: 0.4rem 0.5rem 0.4rem 0.5rem;
}
.task-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  border-color: rgba(182, 138, 53, 0.35);
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.task-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 0;
  width: 100%;
  min-width: 0;
}
.task-title[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #0f172a;
  font-size: 0.72rem;
  margin: 0;
  line-height: 1.25;
  letter-spacing: 0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.task-desc[_ngcontent-%COMP%] {
  color: #5f6d7a;
  font-size: 0.6rem;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.52rem;
  color: #7b8da1;
}
.task-dates[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.25rem;
  background:
    linear-gradient(
      135deg,
      rgba(38, 114, 209, 0.08),
      rgba(182, 138, 53, 0.05));
  border: 1px dashed rgba(38, 114, 209, 0.25);
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  font-size: 0.54rem;
  line-height: 1.35;
  color: #3f4c5a;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  color: #0f172a;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.task-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .34rem;
  margin-top: .23rem;
}
.task-card.status-new[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%]:hover {
  border: 0.67px solid 34495E;
}
.task-card.status-review[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #eab308;
}
.badge.status-new[_ngcontent-%COMP%] {
  background-color: #0ea5e9;
  color: white;
}
.badge.status-inProgress[_ngcontent-%COMP%] {
  background-color: #fb923c;
  color: white;
}
.badge.status-done[_ngcontent-%COMP%] {
  background-color: #22c55e;
  color: white;
}
.badge.status-stopped[_ngcontent-%COMP%] {
  background-color: #94a3b8;
  color: white;
}
.badge.status-late[_ngcontent-%COMP%] {
  background-color: #ef4444;
  color: white;
}
.badge.status-returned[_ngcontent-%COMP%] {
  background-color: #34495E;
  color: white;
}
.badge.status-review[_ngcontent-%COMP%] {
  background-color: #eab308;
  color: white;
}
.badge[_ngcontent-%COMP%] {
  padding: 0.17rem 0.34rem;
  font-size: 0.5rem;
  font-weight: 600;
  border-radius: 4px;
}
.priority-high[_ngcontent-%COMP%] {
  background: #FEF2F2;
  color: #DC2626;
}
.priority-medium[_ngcontent-%COMP%] {
  background: #FFFBEB;
  color: #D97706;
}
.priority-low[_ngcontent-%COMP%] {
  background: #F0FDF4;
  color: #16A34A;
}
.badge-status[_ngcontent-%COMP%] {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  font-weight: 600;
  border-radius: 5.36px;
}
.badge-status.new[_ngcontent-%COMP%] {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress[_ngcontent-%COMP%] {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done[_ngcontent-%COMP%] {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped[_ngcontent-%COMP%] {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late[_ngcontent-%COMP%] {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned[_ngcontent-%COMP%] {
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.bulk-check[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-end: 0.90rem;
  inset-inline-end: 0.65rem;
  inset-block-start: 0rem;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid rgba(182, 138, 53, 0.6);
  background-color: #ffffff;
  transform: scale(0.95);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
}
.bulk-check[_ngcontent-%COMP%]:checked {
  background-color: #2672d1;
  border-color: #2672d1;
}
.bulk-check[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 3px rgba(38, 114, 209, 0.2);
}
.dropdown-menu[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, .1);
  border: 0.67px solid rgba(0, 0, 0, .05);
}
.dropdown-item[_ngcontent-%COMP%] {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.dropdown-item[_ngcontent-%COMP%]:hover {
  background: #F8FAFC;
}
.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {
  background: #FEF2F2;
}
.bulk-bar[_ngcontent-%COMP%] {
  position: sticky;
  bottom: 0;
  inset-inline: 0;
  background: #fff;
  border-top: 0.67px solid #E6EEF5;
  padding: .4rem .57rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show[_ngcontent-%COMP%] {
  display: block;
}
.modal[_ngcontent-%COMP%] {
  z-index: 1050;
}
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
.modal.fade.show[_ngcontent-%COMP%] {
  display: block !important;
  background: rgba(0, 0, 0, 0.5);
}
.modal-backdrop[_ngcontent-%COMP%] {
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.modal-content[_ngcontent-%COMP%] {
  border-radius: 10.7px;
  border: none;
  box-shadow: 0 13.4px 16.75px -3.35px rgba(0, 0, 0, .1), 0 6.7px 6.7px -3.35px rgba(0, 0, 0, .04);
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 0.67px solid #E6D7A2;
  padding: 1rem 1rem 0.67rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 27px;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.btn-outline-secondary[_ngcontent-%COMP%] {
  background-color: #6c757d !important;
  color: #5F646D !important;
}
.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background-color: #5F646D !important;
  color: white !important;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 0.67px solid #E6D7A2;
  padding: 0.67rem 1rem 1rem;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {
  justify-content: flex-start;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  justify-content: flex-start;
}
.modal-title[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #5F646D;
  flex: 1;
  width: 100%;
  margin: 0;
}
[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  text-align: left !important;
}
[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  text-align: right !important;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
  font-size: 0.75rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  border: 0.67px solid #D1D5DB;
  padding: 0.5rem;
  transition: all 0.2s ease;
  font-size: 0.6rem;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #A87D2A;
  border-color: #A87D2A;
  color: #FFFFFF;
}
.btn-outline-primary[_ngcontent-%COMP%] {
  color: #B68A35;
  border-color: #B68A35;
  background: transparent;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-warning[_ngcontent-%COMP%] {
  color: #f59e0b;
  border-color: #f59e0b;
  background: transparent;
}
.btn-outline-warning[_ngcontent-%COMP%]:hover {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}
.btn-outline-info[_ngcontent-%COMP%] {
  color: #4A9D5C;
  border-color: #4A9D5C;
  background: transparent;
}
.btn-outline-info[_ngcontent-%COMP%]:hover {
  background: #3F8E50;
  border-color: #3F8E50;
  color: white;
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
.filter-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
.btn-outline-secondary[_ngcontent-%COMP%] {
  color: #1B1D21 !important;
  border-color: #1B1D21 !important;
  background: transparent !important;
}
.btn-reassign[_ngcontent-%COMP%] {
  color: #555555;
  border-color: #555555;
  background: transparent;
}
.btn-reassign[_ngcontent-%COMP%]:hover {
  background: #555555;
  color: #FFFFFF;
}
.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21;
  color: #FFFFFF;
}
.btn-outline-danger[_ngcontent-%COMP%] {
  color: #C62828;
  border-color: #C62828;
  background: transparent;
}
.btn-outline-danger[_ngcontent-%COMP%]:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-cancel[_ngcontent-%COMP%], 
.btn-secondary[_ngcontent-%COMP%] {
  background: transparent !important;
  border-color: #1B1D21;
  color: #1B1D21;
}
.btn-cancel[_ngcontent-%COMP%]:hover, 
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21 !important;
  color: #FFFFFF;
}
.border.rounded[_ngcontent-%COMP%] {
  border: 1.34px dashed #D1D5DB !important;
  transition: all 0.2s ease;
}
.border.rounded[_ngcontent-%COMP%]:hover {
  border-color: var(--brand-primary) !important;
  background: #F8FAFC;
}
.cursor-pointer[_ngcontent-%COMP%] {
  cursor: pointer;
}
.spinner-border[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 1200px) {
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 220px;
    max-width: 260px;
  }
}
@media (max-width: 992px) {
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 200px;
    max-width: 240px;
  }
  .kanban[_ngcontent-%COMP%] {
    gap: 0.75rem;
  }
}
@media (max-width: 768px) {
  .kanban[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 100%;
    max-width: 100%;
  }
  .col-head[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.95rem 1rem 0.95rem 0.85rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.88rem;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.78rem;
  }
  .modal-dialog[_ngcontent-%COMP%] {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
  .bulk-bar[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
  .bulk-bar[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn-add[_ngcontent-%COMP%] {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  .btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
}
@media (max-width: 576px) {
  .container-fluid[_ngcontent-%COMP%] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .subtle[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.9rem 0.95rem 0.9rem 0.8rem;
  }
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.75rem 0.85rem 0.75rem 0.7rem;
  }
  .task-content[_ngcontent-%COMP%] {
    margin-top: 0.85rem;
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .modal-header[_ngcontent-%COMP%] {
    padding: 1rem 1rem 0.75rem;
  }
  .modal-footer[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem 1rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .bulk-check[_ngcontent-%COMP%] {
  inset-inline-start: auto;
  inset-inline-end: 0.85rem;
}
[dir=rtl][_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {
  right: auto;
  left: 0.5rem;
}
[dir=rtl][_ngcontent-%COMP%]   .task-footer[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
.modal.fade.show[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease-out;
}
@keyframes _ngcontent-%COMP%_modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.task-card[_ngcontent-%COMP%] {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s ease;
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.badge-status[_ngcontent-%COMP%] {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.badge-status.new[_ngcontent-%COMP%] {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress[_ngcontent-%COMP%] {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done[_ngcontent-%COMP%] {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped[_ngcontent-%COMP%] {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late[_ngcontent-%COMP%] {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned[_ngcontent-%COMP%] {
  background: #f3e8ff;
  color: 34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar {
  height: 8px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.kanban[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
.task-count[_ngcontent-%COMP%] {
  font-size: 0.54rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.34rem;
}
.pagination-container[_ngcontent-%COMP%] {
  margin-top: 1.34rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  border: 0.67px solid #e9ecef;
}
@media (max-width: 768px) {
  .pagination-container[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .pagination[_ngcontent-%COMP%] {
    gap: 0.125rem;
  }
  .pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
    min-width: 36px;
    height: 36px;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
  }
  .pagination-info[_ngcontent-%COMP%] {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
.pagination[_ngcontent-%COMP%] {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.17rem;
  flex-wrap: wrap;
}
.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {
  margin: 0;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #B68A35;
  border: 0.67px solid #e9ecef;
  padding: 0.34rem 0.5rem;
  border-radius: 5.36px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 27px;
  height: 27px;
  font-weight: 500;
  font-size: 0.59rem;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 2.68px 5.36px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 1.34px 2.68px rgba(38, 102, 127, 0.3);
  font-weight: 600;
}
.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #adb5bd;
  background-color: #f8f9fa;
  border-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination[_ngcontent-%COMP%]   .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {
  background-color: #f8f9fa;
  color: #adb5bd;
  border-color: #e9ecef;
  transform: none;
  box-shadow: none;
}
.arrow-icon[_ngcontent-%COMP%] {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow-icon.rtl-arrow[_ngcontent-%COMP%] {
  transform: scaleX(-1);
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {
  font-size: 0.59rem;
}
.pagination-info[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.59rem;
  color: #6c757d;
  font-weight: 500;
}
[dir=rtl][_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {
  direction: rtl;
}
[dir=rtl][_ngcontent-%COMP%]   .pagination-info[_ngcontent-%COMP%] {
  text-align: center;
}
.modal[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal.show[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-backdrop[_ngcontent-%COMP%] {
  z-index: 9998 !important;
}
.modal-xl[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-lg[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal-dialog[_ngcontent-%COMP%]:not(.modal-xl) {
  z-index: 9999 !important;
}
app-confirmation-modal[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {
  z-index: 99999;
}
.modal.fade.show[_ngcontent-%COMP%] {
  z-index: inherit;
}
.sidebar[_ngcontent-%COMP%], 
.sidebar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  z-index: 1000 !important;
}
.modal[_ngcontent-%COMP%] {
  z-index: 9999 !important;
}
.modal[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%], 
.modal[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
body.modal-open[_ngcontent-%COMP%] {
  overflow: hidden;
}
body.modal-open[_ngcontent-%COMP%]::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1039;
  pointer-events: none;
}
.modal-backdrop[_ngcontent-%COMP%] {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6) !important;
}
.modal.show[_ngcontent-%COMP%] {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.kpi-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 80px;
  width: 100%;
  border: 0.67px solid rgba(238, 238, 238, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-card[dir=ltr][_ngcontent-%COMP%] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.kpi-card[dir=rtl][_ngcontent-%COMP%] {
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
}
.kpi-cards-row[_ngcontent-%COMP%] {
  margin-bottom: 1.34rem;
}
.kpi-cards-row.g-3[_ngcontent-%COMP%] {
  --bs-gutter-x: 0.67rem;
  --bs-gutter-y: 0.67rem;
}
.kpi-cards-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-bottom: var(--bs-gutter-y);
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  height: 100%;
  min-height: 80px;
}
.kpi-cards-row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {
  margin-top: 1.34rem;
}
@media (min-width: 1600px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.75rem;
    min-height: 140px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 64px;
    height: 64px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 2.25rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 0.2rem 0.5rem;
    min-height: 120px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.1rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.25rem;
    min-height: 120px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 52px;
    height: 52px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.85rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.875rem;
    --bs-gutter-y: 0.875rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.25rem;
    min-height: 115px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 48px;
    height: 48px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.75rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.825rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.75rem;
    --bs-gutter-y: 0.75rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1.125rem;
    min-height: 110px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 44px;
    height: 44px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.8rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.625rem;
    --bs-gutter-y: 0.625rem;
  }
}
@media (max-width: 575px) {
  .kpi-card[_ngcontent-%COMP%] {
    padding: 1rem;
    min-height: 100px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5rem;
  }
}
.kpi-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 2.68px 10.7px rgba(0, 0, 0, 0.15);
}
.kpi-total[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #09365F;
}
.kpi-progress[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #B54708;
}
.kpi-completed[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]:hover {
  border: 0.67px solid #059669;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.67rem;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
  flex: 1;
  width: 100%;
}
@media (min-width: 1024px) and (max-width: 1599px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    font-size: 1rem;
    flex: 0 0 auto;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1;
    min-width: 200px;
    margin-top: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {
    height: 8px;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.75rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-cards-row[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%]:has(.kpi-completion-rate) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-cards-row[_ngcontent-%COMP%]    > .col-completion-rate[_ngcontent-%COMP%] {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-completion-rate[_ngcontent-%COMP%] {
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    gap: 1rem;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
    flex-shrink: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%], 
   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
  }
}
@media (min-width: 992px) and (max-width: 1599px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    min-width: 250px;
  }
}
@media (max-width: 1024px) {
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    overflow: hidden;
    max-width: 100%;
    min-width: 0;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.75rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    margin-top: 0.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {
    width: 100%;
  }
  @media (max-width: 767px) {
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%], 
   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
      width: 100%;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
      width: 100%;
      margin-top: 0.75rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: nowrap;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
      font-size: 1.5rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {
      font-size: 0.75rem;
    }
    .kpi-completion-rate[_ngcontent-%COMP%]   .completion-progress[_ngcontent-%COMP%] {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 200px;
      margin-top: 0;
    }
  }
  .filter-section[_ngcontent-%COMP%] {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    row-gap: 1rem;
  }
  .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
    margin-bottom: 0.75rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  .filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  @media (max-width: 767px) {
    .filter-section[_ngcontent-%COMP%] {
      padding: 0.875rem;
    }
    .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      row-gap: 0.875rem;
    }
    .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
      width: 100%;
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 0.5rem;
    }
    .filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
      width: 100%;
      padding: 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%] {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .filter-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
    .filter-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      margin-top: 0.5rem;
    }
    .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > .col-md-2[_ngcontent-%COMP%]:last-child, 
   .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > .col-md-2[_ngcontent-%COMP%]:nth-last-child(2) {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
  }
}
.kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon[_ngcontent-%COMP%] {
  width: 37.5px;
  height: 37.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.67rem;
  flex-shrink: 0;
}
.kpi-total[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(204, 227, 237);
  color: #09365F;
}
.kpi-progress[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(251, 236, 212);
  color: #B54708;
}
.kpi-completed[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(237, 250, 246);
  color: #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(253, 226, 226);
  color: #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(248, 250, 252);
  color: #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  background-color: rgb(237, 250, 246);
  color: #059669;
}
.kpi-info[_ngcontent-%COMP%] {
  flex: 1;
}
.kpi-number[_ngcontent-%COMP%] {
  font-size: 1.34rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.17rem;
}
.kpi-label[_ngcontent-%COMP%] {
  font-size: 0.59rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.17rem;
  font-style: italic;
}
.completion-progress[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  width: 100%;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.34rem;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 2px;
  transition: width 0.8s ease-in-out;
}
.progress-labels[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.42rem;
  color: #9ca3af;
  font-weight: 500;
}
@media (min-width: 1600px) {
  .progress-bar[_ngcontent-%COMP%] {
    height: 8px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.7rem;
  }
}
@media (max-width: 575px) {
  .progress-bar[_ngcontent-%COMP%] {
    height: 5px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.55rem;
  }
  .completion-progress[_ngcontent-%COMP%] {
    margin-top: 0.5rem;
  }
}
.insight-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100%;
  border-left: 2.68px solid #B68A35;
}
.insight-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.67rem;
}
.insight-title[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon[_ngcontent-%COMP%] {
  width: 21.5px;
  height: 21.5px;
  background-color: #f3f4f6;
  border-radius: 5.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.insight-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.34rem 0;
  border-bottom: 0.67px solid #f3f4f6;
}
.insight-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.insight-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 0.59rem;
  color: #374151;
  font-weight: 500;
}
.insight-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.17rem;
}
.insight-count[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.5rem;
}
.status-dot[_ngcontent-%COMP%], 
.priority-dot[_ngcontent-%COMP%] {
  width: 5.36px;
  height: 5.36px;
  border-radius: 50%;
}
.efficiency-summary-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 10.7px;
  padding: 1.34rem;
  color: white;
  box-shadow: 0 5.36px 21.4px rgba(102, 126, 234, 0.3);
}
.summary-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.34rem;
}
.summary-title-section[_ngcontent-%COMP%] {
  flex: 1;
}
.summary-title[_ngcontent-%COMP%] {
  font-size: 1.17rem;
  font-weight: 700;
  margin: 0 0 0.34rem 0;
  color: white;
}
.summary-subtitle[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.34rem;
  flex-shrink: 0;
}
.metric-item[_ngcontent-%COMP%] {
  text-align: center;
  min-width: 53.6px;
}
.metric-value[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.17rem;
}
.metric-label[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.34px;
}
.summary-chart[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.67rem;
}
.chart-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: end;
  gap: 0.67rem;
  height: 80px;
  width: 100%;
  justify-content: center;
}
.chart-bar[_ngcontent-%COMP%] {
  width: 27px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2.68px 2.68px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: _ngcontent-%COMP%_chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar[_ngcontent-%COMP%]:hover   .chart-tooltip[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(-3.35px);
}
.chart-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.34rem;
  border-radius: 4px;
  font-size: 0.5rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}
.chart-tooltip[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 2.68px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.67rem;
  justify-content: center;
}
.chart-label[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  opacity: 0.8;
  text-align: center;
  min-width: 27px;
}
@keyframes _ngcontent-%COMP%_chartBarGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
@media (max-width: 768px) {
  .summary-header[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 1rem;
  }
  .summary-metrics[_ngcontent-%COMP%] {
    gap: 1rem;
    justify-content: space-around;
    width: 100%;
  }
  .metric-item[_ngcontent-%COMP%] {
    min-width: auto;
    flex: 1;
  }
  .chart-container[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .chart-bar[_ngcontent-%COMP%] {
    width: 30px;
  }
  .chart-labels[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .chart-label[_ngcontent-%COMP%] {
    font-size: 0.625rem;
    min-width: 30px;
  }
  .insight-card[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .insight-header[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .insight-icon[_ngcontent-%COMP%] {
    align-self: flex-end;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {
  margin-right: 0;
  margin-left: 1rem;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
  flex-direction: row-reverse;
}
@media (min-width: 768px) and (max-width: 1599px) {
  [dir=rtl][_ngcontent-%COMP%]   .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    flex-direction: row-reverse;
  }
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
.employee-search-container[_ngcontent-%COMP%] {
  position: relative;
}
.employee-dropdown[_ngcontent-%COMP%] {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 0.67px solid #ddd;
  border-radius: 5.36px;
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: auto;
}
.modal[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1000000;
  overflow: visible;
}
.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {
  z-index: 10000 !important;
}
.employee-list[_ngcontent-%COMP%] {
  padding: 5.36px 0;
}
.employee-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 8px 10.7px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 0.67px solid #f0f0f0;
}
.employee-item[_ngcontent-%COMP%]:hover {
  background-color: #F2ECCE;
}
.employee-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.employee-item.text-danger[_ngcontent-%COMP%], 
.employee-item.text-muted[_ngcontent-%COMP%] {
  cursor: default !important;
  pointer-events: none;
}
.employee-item.text-danger[_ngcontent-%COMP%]:hover, 
.employee-item.text-muted[_ngcontent-%COMP%]:hover {
  background-color: transparent !important;
}
.employee-item.text-danger[_ngcontent-%COMP%] {
  color: #dc3545 !important;
  font-weight: 500;
  padding: 10.7px;
}
.employee-item.text-muted[_ngcontent-%COMP%] {
  color: #6c757d !important;
  font-weight: 400;
  padding: 10.7px;
}
.employee-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.result[_ngcontent-%COMP%] {
  background-color: #C8E6C9 !important;
  border: 0.67px solid #2BA149 !important;
}
.employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 9.38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job[_ngcontent-%COMP%] {
  font-size: 8.04px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee[_ngcontent-%COMP%] {
  margin-top: 5.36px;
  padding: 8px;
  background: #f8f9fa;
  border: 0.67px solid #e9ecef;
  border-radius: 5.36px;
}
.selected-employee-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-remove-employee[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 2.68px;
  border-radius: 2.68px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee[_ngcontent-%COMP%]:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border-bottom: 1.34px solid #e9ecef !important;
}
.show-all-option[_ngcontent-%COMP%]:hover {
  background-color: #e9ecef;
}
.show-all-avatar[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #28a745 0%,
      #20c997 100%) !important;
  color: white;
}
[dir=rtl][_ngcontent-%COMP%]   .employee-avatar[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: 8px;
}
[dir=rtl][_ngcontent-%COMP%]   .btn-remove-employee[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: auto;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.21rem;
  }
  .subtle[_ngcontent-%COMP%] {
    font-size: 0.6rem;
  }
  .btn-add[_ngcontent-%COMP%] {
    padding: 0.4rem 0.8rem;
    font-size: 0.57rem;
  }
  .btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
    width: 12.06px;
    height: 12.06px;
    font-size: 0.54rem;
  }
  .kanban[_ngcontent-%COMP%] {
    gap: 0.57rem;
    padding-bottom: 0.5rem;
  }
  .kanban-col[_ngcontent-%COMP%] {
    min-width: 127px;
    max-width: 154px;
  }
  .col-head[_ngcontent-%COMP%] {
    padding: 0.57rem 0.67rem;
    font-size: 0.6rem;
    margin-bottom: 0.57rem;
  }
  .task-count-detail[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .task-list[_ngcontent-%COMP%] {
    gap: 0.47rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.85rem 0.95rem 0.85rem 0.75rem;
  }
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.7rem 0.85rem 0.7rem 0.7rem;
  }
  .task-content[_ngcontent-%COMP%] {
    gap: 0.45rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.54rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .task-meta[_ngcontent-%COMP%] {
    font-size: 0.52rem;
  }
  .task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .task-footer[_ngcontent-%COMP%] {
    gap: 0.27rem;
    margin-top: 0.2rem;
  }
  .kpi-cards-row[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .kpi-card[_ngcontent-%COMP%] {
    padding: 0.74rem;
    min-height: 72px;
  }
  .kpi-icon[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
  }
  .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.17rem;
  }
  .kpi-label[_ngcontent-%COMP%] {
    font-size: 0.54rem;
  }
  .kpi-subtitle[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
  .kpi-cards-row.g-3[_ngcontent-%COMP%] {
    --bs-gutter-x: 0.6rem;
    --bs-gutter-y: 0.6rem;
  }
  .bulk-check[_ngcontent-%COMP%] {
    inset-block-start: 0rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-content[_ngcontent-%COMP%] {
    gap: 0.5rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-info[_ngcontent-%COMP%] {
    gap: 0.67rem;
  }
  .kpi-completion-rate[_ngcontent-%COMP%]   .kpi-number[_ngcontent-%COMP%] {
    font-size: 1.34rem;
  }
  .completion-progress[_ngcontent-%COMP%] {
    margin-top: 0.34rem;
  }
  .progress-bar[_ngcontent-%COMP%] {
    height: 3.35px;
  }
  .progress-labels[_ngcontent-%COMP%] {
    font-size: 0.47rem;
  }
}
  .ng-select {
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
}
  .ng-select .ng-select-container {
  border: 1px solid #e9ecef !important;
  border-radius: 6px !important;
  min-height: 38px !important;
  background-color: #fff !important;
  padding: 0 12px !important;
  cursor: text !important;
}
  .ng-select .ng-select-container .ng-value-container {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-placeholder {
  color: #6c757d !important;
  font-size: 14px !important;
  padding: 0 !important;
  margin: 0 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-input {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-input input {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  background: transparent !important;
  height: auto !important;
  line-height: 1.5 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-value {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  max-width: none !important;
  overflow: visible !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  flex: 0 1 auto !important;
  min-width: 0 !important;
}
  .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {
  display: block !important;
  line-height: 1.5 !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  max-width: none !important;
  width: auto !important;
  min-width: 0 !important;
}
  .ng-select .ng-select-container .ng-arrow-wrapper {
  width: 25px !important;
  height: 25px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
  .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: #6c757d transparent transparent !important;
  border-style: solid !important;
  border-width: 5px 5px 2.5px !important;
  height: 0 !important;
  width: 0 !important;
}
  .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: transparent transparent #6c757d !important;
  border-width: 0 5px 5px !important;
}
  .ng-select.ng-select-focused .ng-select-container {
  border-color: #b68a35 !important;
  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;
}
  .ng-select.ng-select-disabled .ng-select-container {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}
  .ng-dropdown-panel {
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background: white !important;
  margin-top: 4px !important;
  z-index: 10000 !important;
}
  .ng-dropdown-panel .ng-dropdown-panel-items {
  max-height: 300px !important;
  overflow-y: auto !important;
}
  .ng-select .ng-option {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f0f0f0 !important;
  cursor: pointer !important;
  font-size: 14px !important;
  color: #333 !important;
  min-width: 300px !important;
  white-space: normal !important;
}
  .ng-select .ng-dropdown-panel {
  min-width: 300px !important;
  max-width: none !important;
}
  .ng-select .ng-option:last-child {
  border-bottom: none !important;
}
  .ng-select .ng-option:hover {
  background-color: #f8f9fa !important;
}
  .ng-select .ng-option.ng-option-selected {
  background-color: #e9ecef !important;
  color: #333 !important;
}
  .ng-select .ng-option.ng-option-marked {
  background-color: #f8f9fa !important;
}
  .ng-select .ng-option.ng-option-disabled {
  color: #999 !important;
  cursor: not-allowed !important;
}
  .ng-select .ng-clear-wrapper {
  width: 20px !important;
  height: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
}
  .ng-select .ng-clear-wrapper .ng-clear {
  font-size: 18px !important;
  color: #999 !important;
  line-height: 1 !important;
}
  .ng-select .ng-clear-wrapper:hover .ng-clear {
  color: #333 !important;
}
  .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {
  display: none !important;
}
  .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {
  width: 20px !important;
  height: 20px !important;
  border: 2px solid #f3f3f3 !important;
  border-top: 2px solid #b68a35 !important;
  border-radius: 50% !important;
  animation: spin 1s linear infinite !important;
}
.employee-option[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 300px;
  max-width: none;
  width: auto;
}
.employee-option[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
.employee-option[_ngcontent-%COMP%]   .employee-job[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #6c757d;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}



.my-tasks-container[_ngcontent-%COMP%] {
  padding: 0 1rem;
  font-size: 0.5rem;
  max-height: 100vh;
  overflow-y: auto;
}
.top-header[_ngcontent-%COMP%] {
  color: #5F646D;
  border-radius: 5.36px;
  margin-bottom: 0.67rem;
  display: flex;
}
.top-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row !important;
  align-items: flex-start;
}
.page-title[_ngcontent-%COMP%] {
  color: #5F646D !important;
  font-size: 1.21rem;
  font-weight: 700;
  margin: 0;
}
.subtle[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  opacity: 0.9;
  margin: 0;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 0.67rem;
  gap: 0.34rem;
}
.kanban-col[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
}
.col-head[_ngcontent-%COMP%] {
  padding: 0.6rem 0.54rem;
  font-weight: 600;
  font-size: 0.7rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.col-head[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%);
  pointer-events: none;
}
.filter-section[_ngcontent-%COMP%] {
  background: white;
  padding: 0.5rem;
  border-radius: 5.36px;
  box-shadow: 0 0.67px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.67rem;
}
.filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  font-size: 0.47rem;
  font-weight: 500;
  margin-bottom: 0.17rem;
}
.filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
.filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  padding: 0.23rem 0.4rem;
}
.filter-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(134px, 1fr));
  gap: 0.67rem;
  align-items: end;
}
.filter-group[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.34rem;
}
.filter-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0;
  font-size: 0.59rem;
}
.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {
  width: 100%;
}
.filter-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  align-items: end;
  flex-wrap: wrap;
}
.filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-message[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  margin-top: 0.17rem;
  display: block;
}
.btn-outline-secondary[_ngcontent-%COMP%] {
  color: #1B1D21;
  border: 0.67px solid #1B1D21;
  background: transparent;
}
.btn-outline-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21;
  color: white;
}
@media (max-width: 768px) {
  .filter-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .filter-actions[_ngcontent-%COMP%] {
    width: 100%;
    flex-direction: column;
  }
  .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .filter-row[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .filter-actions[_ngcontent-%COMP%] {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
}
.col-head.blue[_ngcontent-%COMP%] {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange[_ngcontent-%COMP%] {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.red[_ngcontent-%COMP%] {
  background: #f7151534;
  color: #d80f0f;
}
.task-count[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.34rem;
  border-radius: 8px;
  font-size: 0.54rem;
  font-weight: 500;
}
.task-list[_ngcontent-%COMP%] {
  padding: 0.67rem;
  min-height: 134px;
  max-height: 402px;
  overflow-y: auto;
}
.task-card[_ngcontent-%COMP%] {
  background: white;
  border: 0.67px solid #e5e7eb;
  border-radius: 5.36px;
  padding: 0.67rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: 0.5rem;
}
.task-content[_ngcontent-%COMP%] {
  margin-top: 0px !important;
  position: relative;
  z-index: 1;
}
.task-title[_ngcontent-%COMP%] {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  margin: 0;
}
.task-desc[_ngcontent-%COMP%] {
  font-size: 0.59rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0.34rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  font-size: 0.5rem;
  color: #9ca3af;
  line-height: 1.3;
}
.task-footer[_ngcontent-%COMP%] {
  margin-top: 0.34rem;
  padding-top: 0.34rem;
  border-top: 0.67px solid #f3f4f6;
}
.badge[_ngcontent-%COMP%] {
  font-size: 0.47rem;
  font-weight: 500;
  padding: 0.17rem 0.34rem;
  border-radius: 2.68px;
  text-transform: uppercase;
  letter-spacing: 0.017em;
}
.priority-high[_ngcontent-%COMP%] {
  background-color: #fef2f2;
  color: #dc2626;
  border: 0.67px solid #fecaca;
}
.priority-medium[_ngcontent-%COMP%] {
  background-color: #fffbeb;
  color: #d97706;
  border: 0.67px solid #fed7aa;
}
.priority-low[_ngcontent-%COMP%] {
  background-color: #f0fdf4;
  color: #16a34a;
  border: 0.67px solid #bbf7d0;
}
.modal-content[_ngcontent-%COMP%] {
  border: none;
  border-radius: 8px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1050;
}
.modal-dialog[_ngcontent-%COMP%] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  max-width: 335px;
  width: 90%;
  margin: 0;
}
.modal-dialog.modal-xl[_ngcontent-%COMP%] {
  max-width: 536px;
}
.modal.show[_ngcontent-%COMP%] {
  display: block !important;
}
.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {
  transform: translate(-50%, -50%);
}
.modal-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
}
.modal-backdrop.show[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.modal-header[_ngcontent-%COMP%] {
  color: #5F646D;
  border-radius: 8px 8px 0 0;
  border-bottom: none;
  padding: 1rem;
}
.modal-title[_ngcontent-%COMP%] {
  font-weight: 600;
  margin: 0;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1.34rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 0.67px solid #e5e7eb;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0 0 8px 8px;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
}
.form-control[_ngcontent-%COMP%] {
  border: 0.67px solid #d1d5db;
  border-radius: 5.36px;
  padding: 0.5rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}
.form-control.is-invalid[_ngcontent-%COMP%] {
  border-color: #ef4444;
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.5rem;
  color: #ef4444;
  margin-top: 0.17rem;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 5.36px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: 0.6rem;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  color: white;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  box-shadow: 0 2.68px 8px rgba(246, 202, 59, 0.3);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: transparent;
  color: #1B1D21;
  border: 0.67px solid #1B1D21;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #1B1D21;
  color: white;
}
.btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
.spinner-border[_ngcontent-%COMP%] {
  width: 2rem;
  height: 2rem;
  border-width: 0.2em;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .my-tasks-container[_ngcontent-%COMP%] {
    padding: 0.34rem 1rem;
  }
  .top-header[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.07rem;
  }
  .subtle[_ngcontent-%COMP%] {
    font-size: 0.54rem;
  }
  .filter-section[_ngcontent-%COMP%] {
    padding: 0.84rem;
    margin-bottom: 1rem;
  }
  .filter-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {
    row-gap: 0.5rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {
    font-size: 0.57rem;
  }
  .filter-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], 
   .filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {
    padding: 0.37rem 0.54rem;
    font-size: 0.6rem;
  }
  .filter-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    padding: 0.37rem 0.67rem;
    font-size: 0.7rem;
  }
  .kanban[_ngcontent-%COMP%] {
    gap: 0.67rem;
  }
  .col-head[_ngcontent-%COMP%] {
    padding: 0.47rem 0.84rem;
    font-size: 0.67rem;
  }
  .task-count[_ngcontent-%COMP%] {
    font-size: 0.57rem;
  }
  .task-list[_ngcontent-%COMP%] {
    padding: 0.57rem;
    max-height: 348px;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.57rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.64rem;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.55rem;
  }
  .task-meta[_ngcontent-%COMP%] {
    font-size: 0.48rem;
  }
  .task-footer[_ngcontent-%COMP%] {
    margin-top: 0.27rem;
    padding-top: 0.27rem;
  }
  .badge[_ngcontent-%COMP%] {
    font-size: 0.44rem;
    padding: 0.13rem 0.3rem;
  }
}
@media (max-width: 768px) {
  .kanban[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .page-title[_ngcontent-%COMP%] {
    font-size: 1.34rem;
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: 0.34rem !important;
}
[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {
  margin-right: 0 !important;
  margin-left: 0.34rem !important;
}
/*# sourceMappingURL=my-tasks.component-DBCAAJ6Q.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyTasksComponent, [{
    type: Component,
    args: [{ selector: "app-my-tasks", standalone: false, template: `<div class="container-fluid my-tasks-container" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
\r
  <!-- Header Section -->\r
  <div class="d-flex justify-content-between align-items-start mb-4 top-header">\r
    <div class="text-end">\r
      <h1 class="page-title mb-1" [attr.dir]="isRTL() ? 'rtl' : 'ltr'">{{ translate('tasks.myTasks.title') }}</h1>\r
      <p class="subtle">{{ translate('tasks.myTasks.subtitle') }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Date Filter Section -->\r
  <div class="filter-section mb-4">\r
    <form [formGroup]="filterForm">\r
      <div class="filter-row">\r
        <div class="filter-group">\r
          <label class="form-label">{{ translate('tasks.all_tasks.due_date_from') }}</label>\r
          <input \r
            type="date" \r
            class="form-control" \r
            formControlName="dueDateFrom" \r
            (change)="onFromDateChange()">\r
        </div>\r
        <div class="filter-group">\r
          <label class="form-label">{{ translate('tasks.all_tasks.due_date_to') }}</label>\r
          <input \r
            type="date" \r
            class="form-control" \r
            formControlName="dueDateTo"\r
            [min]="getMinToDate()"\r
            (change)="onToDateChange()"\r
            [class.error]="getMinToDate() && filterForm.get('dueDateTo')?.value && filterForm.get('dueDateTo')?.value < getMinToDate()">\r
          <small *ngIf="getMinToDate() && filterForm.get('dueDateTo')?.value && filterForm.get('dueDateTo')?.value < getMinToDate()" class="error-message text-danger">\r
            {{ translate('tasks.filters.to_date_before_from_date_error') }}\r
          </small>\r
        </div>\r
        <div class="filter-actions">\r
          <button type="button" class="btn btn-primary" (click)="applyFilters()">\r
            <i class="bi bi-search me-2"></i>\r
            {{ translate('common.search') }}\r
          </button>\r
          <button type="button" class="btn btn-outline-secondary" (click)="clearFilters()">\r
            <i class="bi bi-x-circle me-2"></i>\r
            {{ translate('common.clear_filters') }}\r
          </button>\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Kanban Board -->\r
  <div class="kanban">\r
    <!-- New Column -->\r
    <div class="kanban-col">\r
      <div class="col-head blue">\r
        {{ translate('tasks.status.new') }}\r
        <span class="task-count">{{ getStatusTaskCount(0) }}</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(0) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(0)" \r
             class="task-card status-new compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <!-- Task Content -->\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            \r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.createdAt') }}:</strong> {{ formatDate(task.createdAt) }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.dueDate') }}:</strong> {{ formatDate(task.dueDate) }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- In Progress Column -->\r
    <div class="kanban-col">\r
      <div class="col-head orange">\r
        {{ translate('tasks.status.inProgress') }}\r
        <span class="task-count">{{ getStatusTaskCount(1) }}</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(1) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(1)" \r
             class="task-card status-progress compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title | slice:0:20 }}{{ task.title.length > 20 ? '...' : '' }}</h6>\r
            \r
            <!-- <p class="task-desc">{{ task.description | slice:0:50 }}{{ task.description.length > 50 ? '...' : '' }}</p> -->\r
            \r
            <!-- Removed department information -->\r
            \r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.createdAt') }}:</strong> {{ formatDate(task.createdAt) }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.dueDate') }}:</strong> {{ formatDate(task.dueDate) }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Returned Column -->\r
    <div class="kanban-col">\r
      <div class="col-head purple">\r
        {{ translate('tasks.status.returned') }}\r
        <span class="task-count">{{ getStatusTaskCount(5) }}</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(5) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(5)" \r
             class="task-card status-returned compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title | slice:0:20 }}{{ task.title.length > 20 ? '...' : '' }}</h6>\r
            \r
            \r
            <!-- Removed department information -->\r
            \r
            <div class="task-dates">\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.createdAt') }}:</strong> {{ formatDate(task.createdAt) }}\r
              </small>\r
              <small class="text-muted d-block">\r
                <strong>{{ translate('tasks.task.dueDate') }}:</strong> {{ formatDate(task.dueDate) }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination Controls -->\r
  <div class="pagination-container" *ngIf="getMaxPagesForAnyStatus() > 1">\r
    <nav aria-label="Task pagination">\r
      <ul class="pagination justify-content-center">\r
        <!-- Previous Button -->\r
        <li class="page-item" [class.disabled]="currentPage === 1">\r
          <a class="page-link" href="#" (click)="goToPage(currentPage - 1); $event.preventDefault()">\r
            <div>{{translate('common.previous')}}</div>\r
          </a>\r
        </li>\r
        \r
        <!-- Page Numbers -->\r
        <li class="page-item" *ngFor="let page of getPageNumbers()" [class.active]="page === currentPage">\r
          <a class="page-link" href="#" (click)="goToPage(page); $event.preventDefault()">{{ page }}</a>\r
        </li>\r
        \r
        <!-- Next Button -->\r
        <li class="page-item" [class.disabled]="currentPage === getMaxPagesForAnyStatus()">\r
          <a class="page-link" href="#" (click)="goToPage(currentPage + 1); $event.preventDefault()">\r
            <div>{{translate('common.next')}}</div>\r
          </a>\r
        </li>\r
      </ul>\r
    </nav>\r
    \r
    <div class="pagination-info text-center mt-3">\r
      <span class="text-muted">\r
        {{ translate('common.showing') }} {{ getStartIndex() }} - {{ getEndIndex() }} \r
        {{ translate('common.of') }} {{ getTotalTasks() }} {{ translate('common.results') }}\r
        <br>\r
        <small>{{ translate('tasks.pagination.note') }}</small>\r
      </span>\r
    </div>\r
  </div>\r
\r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">Loading...</span>\r
    </div>\r
  </div>\r
\r
  <!-- Task Details Modal -->\r
  <div class="modal fade" [class.show]="showTaskDetailsModal" [style.display]="showTaskDetailsModal ? 'block' : 'none'" tabindex="-1" role="dialog">\r
    <div class="modal-dialog modal-xl">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.task_details') }}</h5>\r
        </div>\r
        \r
        <div class="modal-body" *ngIf="currentTask">\r
          <div class="row">\r
            <div class="col-md-8">\r
              <h4 class="mb-3">{{ currentTask.title }}</h4>\r
              \r
              <div class="row mb-4">\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-user me-2 text-muted"></i>\r
                    <span class="text-muted">{{ translate('tasks.task.createdBy') }}:</span>\r
                    <span class="ms-2">{{ currentTask.createdByName }}</span>\r
                  </div>\r
                  \r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-clock me-2 text-muted"></i>\r
                    <span class="text-muted">{{ translate('tasks.task.status') }}:</span>\r
                    <span class="ms-2 badge" [class]="getStatusClass(currentTask.status)">\r
                      {{ getStatusText(currentTask.status) }}\r
                    </span>\r
                  </div>\r
                </div>\r
\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-calendar me-2 text-muted"></i>\r
                    <span class="text-muted">{{ translate('tasks.task.duration') }}:</span>\r
                    <span class="ms-2">{{ formatDate(currentTask.createdAt) }} - {{ formatDate(currentTask.dueDate) }}</span>\r
                  </div>\r
                  \r
                  <div class="d-flex align-items-center mb-2">\r
                    <i class="fas fa-users me-2 text-muted"></i>\r
                    <span class="text-muted">{{ translate('tasks.task.assignee') }}:</span>\r
                    <span class="ms-2">{{ currentTask.assigneeName || translate('tasks.task.noAssignee') }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <div class="mb-4">\r
                <h6>{{ translate('tasks.task.description') }}</h6>\r
                <div class="bg-light p-3 rounded">\r
                  {{ currentTask.description || translate('tasks.task.noSubtasks') }}\r
                </div>\r
              </div>\r
              \r
              <!-- Feedback Section -->\r
              <div class="mb-4">\r
                <h6>{{ translate('tasks.task.feedback') }}</h6>\r
                <div class="bg-light p-3 rounded" *ngIf="currentTaskFeedback.length === 0">\r
                  {{ translate('tasks.task.noFeedback') }}\r
                </div>\r
                <div *ngFor="let feedback of currentTaskFeedback" class="d-flex align-items-start p-2 border-bottom">\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ feedback.feedbackText }}</div>\r
                    <small class="text-muted">{{ feedback.employeeName }} - {{ formatDate(feedback.createdAt) }}</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div class="col-md-4">\r
              <div class="d-grid gap-2">\r
                <button class="btn btn-primary" \r
                        (click)="openFeedbackModal(currentTask)"\r
                        [disabled]="!canSubmitFeedback(currentTask)">\r
                  {{ translate('tasks.myTasks.actions.submitFeedback') }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeModal('showTaskDetailsModal')">\r
            {{ translate('common.close') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Feedback Modal -->\r
  <div class="modal fade" [class.show]="showFeedbackModal" [style.display]="showFeedbackModal ? 'block' : 'none'" tabindex="-1" role="dialog">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.myTasks.dialogs.submitFeedback') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="feedbackForm" (ngSubmit)="onSubmitFeedback()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.myTasks.form.feedbackText') }}</label>\r
              <textarea class="form-control" rows="4" formControlName="feedbackText"\r
                        [placeholder]="translate('tasks.myTasks.form.feedbackPlaceholder')"\r
                        [class.is-invalid]="feedbackForm.get('feedbackText')?.invalid && feedbackForm.get('feedbackText')?.touched">\r
              </textarea>\r
              <div class="invalid-feedback" *ngIf="feedbackForm.get('feedbackText')?.invalid && feedbackForm.get('feedbackText')?.touched">\r
                <div *ngIf="feedbackForm.get('feedbackText')?.errors?.['minlength']">\r
                  {{ translate('tasks.myTasks.form.feedbackMinLength') }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
           \r
            <button type="submit" class="btn btn-primary">\r
              {{ translate('common.submit') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showFeedbackModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Modal Backdrop -->\r
  <div class="modal-backdrop fade" [class.show]="showFeedbackModal || showTaskDetailsModal" *ngIf="showFeedbackModal || showTaskDetailsModal"></div>\r
\r
  <!-- Confirmation Modal -->\r
  <app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
</div>`, styles: [`/* src/app/components/tasks/tasks.component.css */
:host {
  --col-blue: #E9F6FB;
  --col-orange: #FFF1E3;
  --col-green: #EAF7F0;
  --col-gray: #F2F4F7;
  --col-red: #FEECEC;
  --card-radius: 16px;
  --card-shadow: 0 4px 18px rgba(0,0,0,.05);
  display: block;
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
  overflow-x: hidden;
}
:host-context([dir="ltr"]) {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.page-title {
  color: var(--brand-secondary);
  font-size: 1.34rem;
  font-weight: 700;
  letter-spacing: .13px;
  text-align: left;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.34rem;
}
.page-title[dir=rtl] {
  text-align: right;
}
.page-title[dir=ltr] {
  text-align: left;
}
.subtle {
  color: #8294A8;
  font-size: .64rem;
}
.btn-add {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-add:hover {
  background: #B68A35;
}
.btn-add .plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13.4px;
  height: 13.4px;
  border-radius: 2.68px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.34rem;
  font-weight: 700;
  font-size: 0.59rem;
}
.kanban {
  display: flex;
  gap: 0.67rem;
  overflow-x: auto;
  padding-bottom: 0.67rem;
  scroll-snap-type: x proximity;
}
.kanban-col {
  scroll-snap-align: start;
  min-width: 134px;
  max-width: 161px;
  flex: 0 0 auto;
}
.kanban-col.small {
  min-width: 121px;
}
.col-head {
  padding: 0.67rem 0.84rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.64rem;
  color: #fff;
  margin-bottom: 0.67rem;
  text-align: center;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, .1);
}
.col-head.blue {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.green {
  background: #E5FAF2;
  color: #00B789;
}
.col-head.gray {
  color: #404d49b9;
  background: #4e5c703d;
}
.col-head.red {
  color: #d80f0f;
  background: #f7151534;
}
.col-head.purple {
  color: #34495E;
  background: #34495e1f;
}
.col-head.yellow {
  color: #eab308;
  background: #fefce8;
}
.task-count-detail {
  margin-top: 0.17rem;
  font-size: 0.5rem;
  opacity: 0.8;
}
.task-count-detail small {
  display: block;
  line-height: 1.2;
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: .54rem;
}
.task-card {
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 1rem 1.15rem 1rem 1rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.task-card.compact {
  padding: 0.4rem 0.5rem 0.4rem 0.5rem;
}
.task-card:hover {
  transform: translateY(-4px);
  border-color: rgba(182, 138, 53, 0.35);
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.task-content {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin-top: 0;
  width: 100%;
  min-width: 0;
}
.task-title {
  font-weight: 700;
  color: #0f172a;
  font-size: 0.72rem;
  margin: 0;
  line-height: 1.25;
  letter-spacing: 0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
.task-desc {
  color: #5f6d7a;
  font-size: 0.6rem;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.52rem;
  color: #7b8da1;
}
.task-dates {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.25rem;
  background:
    linear-gradient(
      135deg,
      rgba(38, 114, 209, 0.08),
      rgba(182, 138, 53, 0.05));
  border: 1px dashed rgba(38, 114, 209, 0.25);
  border-radius: 14px;
  padding: 0.7rem 0.75rem;
}
.task-dates small {
  font-size: 0.54rem;
  line-height: 1.35;
  color: #3f4c5a;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}
.task-dates small strong {
  color: #0f172a;
  font-weight: 700;
  letter-spacing: 0.015em;
}
.task-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .34rem;
  margin-top: .23rem;
}
.task-card.status-new:hover {
  border: 0.67px solid #0ea5e9;
}
.task-card.status-progress:hover {
  border: 0.67px solid #fb923c;
}
.task-card.status-done:hover {
  border: 0.67px solid #22c55e;
}
.task-card.status-stopped:hover {
  border: 0.67px solid #94a3b8;
}
.task-card.status-late:hover {
  border: 0.67px solid #ef4444;
}
.task-card.status-returned:hover {
  border: 0.67px solid 34495E;
}
.task-card.status-review:hover {
  border: 0.67px solid #eab308;
}
.badge.status-new {
  background-color: #0ea5e9;
  color: white;
}
.badge.status-inProgress {
  background-color: #fb923c;
  color: white;
}
.badge.status-done {
  background-color: #22c55e;
  color: white;
}
.badge.status-stopped {
  background-color: #94a3b8;
  color: white;
}
.badge.status-late {
  background-color: #ef4444;
  color: white;
}
.badge.status-returned {
  background-color: #34495E;
  color: white;
}
.badge.status-review {
  background-color: #eab308;
  color: white;
}
.badge {
  padding: 0.17rem 0.34rem;
  font-size: 0.5rem;
  font-weight: 600;
  border-radius: 4px;
}
.priority-high {
  background: #FEF2F2;
  color: #DC2626;
}
.priority-medium {
  background: #FFFBEB;
  color: #D97706;
}
.priority-low {
  background: #F0FDF4;
  color: #16A34A;
}
.badge-status {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  font-weight: 600;
  border-radius: 5.36px;
}
.badge-status.new {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned {
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.bulk-check {
  position: absolute;
  inset-block-end: 0.90rem;
  inset-inline-end: 0.65rem;
  inset-block-start: 0rem;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid rgba(182, 138, 53, 0.6);
  background-color: #ffffff;
  transform: scale(0.95);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
}
.bulk-check:checked {
  background-color: #2672d1;
  border-color: #2672d1;
}
.bulk-check:focus {
  box-shadow: 0 0 0 3px rgba(38, 114, 209, 0.2);
}
.dropdown-menu {
  border-radius: 5.36px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, .1);
  border: 0.67px solid rgba(0, 0, 0, .05);
}
.dropdown-item {
  padding: 0.34rem 0.67rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.dropdown-item:hover {
  background: #F8FAFC;
}
.dropdown-item.text-danger:hover {
  background: #FEF2F2;
}
.bulk-bar {
  position: sticky;
  bottom: 0;
  inset-inline: 0;
  background: #fff;
  border-top: 0.67px solid #E6EEF5;
  padding: .4rem .57rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show {
  display: block;
}
.modal {
  z-index: 1050;
}
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
.modal.fade.show {
  display: block !important;
  background: rgba(0, 0, 0, 0.5);
}
.modal-backdrop {
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}
.modal-content {
  border-radius: 10.7px;
  border: none;
  box-shadow: 0 13.4px 16.75px -3.35px rgba(0, 0, 0, .1), 0 6.7px 6.7px -3.35px rgba(0, 0, 0, .04);
}
.modal-header {
  border-bottom: 0.67px solid #E6D7A2;
  padding: 1rem 1rem 0.67rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 27px;
}
.filters-section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.btn-outline-secondary {
  background-color: #6c757d !important;
  color: #5F646D !important;
}
.btn-outline-secondary:hover {
  background-color: #5F646D !important;
  color: white !important;
}
.modal-body {
  padding: 1rem;
}
.modal-footer {
  border-top: 0.67px solid #E6D7A2;
  padding: 0.67rem 1rem 1rem;
}
[dir=rtl] .modal-footer {
  justify-content: flex-end;
}
[dir=ltr] .modal-footer {
  justify-content: flex-start;
}
[dir=rtl] .modal-header {
  justify-content: flex-end;
}
[dir=ltr] .modal-header {
  justify-content: flex-start;
}
.modal-title {
  font-weight: 700;
  color: #5F646D;
  flex: 1;
  width: 100%;
  margin: 0;
}
[dir=ltr] .modal-title {
  text-align: left !important;
}
[dir=rtl] .modal-title {
  text-align: right !important;
}
.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
  font-size: 0.75rem;
}
.form-control,
.form-select {
  border-radius: 5.36px;
  border: 0.67px solid #D1D5DB;
  padding: 0.5rem;
  transition: all 0.2s ease;
  font-size: 0.6rem;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 5.36px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-size: 0.59rem;
}
.btn-primary {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-primary:hover {
  background: #A87D2A;
  border-color: #A87D2A;
  color: #FFFFFF;
}
.btn-outline-primary {
  color: #B68A35;
  border-color: #B68A35;
  background: transparent;
}
.btn-outline-primary:hover {
  background: #B68A35;
  border-color: #B68A35;
  color: #FFFFFF;
}
.btn-outline-warning {
  color: #f59e0b;
  border-color: #f59e0b;
  background: transparent;
}
.btn-outline-warning:hover {
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
}
.btn-outline-info {
  color: #4A9D5C;
  border-color: #4A9D5C;
  background: transparent;
}
.btn-outline-info:hover {
  background: #3F8E50;
  border-color: #3F8E50;
  color: white;
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
.filter-section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 1.34px 1.34px 5.36px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.34rem;
}
.filter-section .row {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}
.btn-outline-secondary {
  color: #1B1D21 !important;
  border-color: #1B1D21 !important;
  background: transparent !important;
}
.btn-reassign {
  color: #555555;
  border-color: #555555;
  background: transparent;
}
.btn-reassign:hover {
  background: #555555;
  color: #FFFFFF;
}
.btn-outline-secondary:hover {
  background: #1B1D21;
  color: #FFFFFF;
}
.btn-outline-danger {
  color: #C62828;
  border-color: #C62828;
  background: transparent;
}
.btn-outline-danger:hover {
  background: #C62828;
  border-color: #C62828;
  color: #FFFFFF;
}
.btn-cancel,
.btn-secondary {
  background: transparent !important;
  border-color: #1B1D21;
  color: #1B1D21;
}
.btn-cancel:hover,
.btn-secondary:hover {
  background: #1B1D21 !important;
  color: #FFFFFF;
}
.border.rounded {
  border: 1.34px dashed #D1D5DB !important;
  transition: all 0.2s ease;
}
.border.rounded:hover {
  border-color: var(--brand-primary) !important;
  background: #F8FAFC;
}
.cursor-pointer {
  cursor: pointer;
}
.spinner-border {
  width: 2rem;
  height: 2rem;
}
@media (max-width: 1200px) {
  .kanban-col {
    min-width: 220px;
    max-width: 260px;
  }
}
@media (max-width: 992px) {
  .kanban-col {
    min-width: 200px;
    max-width: 240px;
  }
  .kanban {
    gap: 0.75rem;
  }
}
@media (max-width: 768px) {
  .kanban {
    flex-direction: column;
    gap: 1rem;
  }
  .kanban-col {
    min-width: 100%;
    max-width: 100%;
  }
  .col-head {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  .task-card {
    padding: 0.95rem 1rem 0.95rem 0.85rem;
  }
  .task-title {
    font-size: 0.88rem;
  }
  .task-desc {
    font-size: 0.78rem;
  }
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
  .bulk-bar {
    padding: 0.5rem;
  }
  .bulk-bar .d-flex {
    flex-direction: column;
    gap: 0.5rem;
  }
  .btn-add {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
  .btn-add .plus {
    width: 18px;
    height: 18px;
    font-size: 0.8rem;
  }
}
@media (max-width: 576px) {
  .container-fluid {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .page-title {
    font-size: 1.5rem;
  }
  .subtle {
    font-size: 0.85rem;
  }
  .task-card {
    padding: 0.9rem 0.95rem 0.9rem 0.8rem;
  }
  .task-card.compact {
    padding: 0.75rem 0.85rem 0.75rem 0.7rem;
  }
  .task-content {
    margin-top: 0.85rem;
  }
  .modal-body {
    padding: 1rem;
  }
  .modal-header {
    padding: 1rem 1rem 0.75rem;
  }
  .modal-footer {
    padding: 0.75rem 1rem 1rem;
  }
}
[dir=rtl] .bulk-check {
  inset-inline-start: auto;
  inset-inline-end: 0.85rem;
}
[dir=rtl] .dropdown {
  right: auto;
  left: 0.5rem;
}
[dir=rtl] .task-footer {
  flex-direction: row-reverse;
}
.modal.fade.show {
  animation: modalFadeIn 0.3s ease-out;
}
@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.task-card {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s ease;
}
.task-card:hover {
  box-shadow: 0 24px 42px -22px rgba(15, 23, 42, 0.35);
}
.badge-status {
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.badge-status.new {
  background: #E9F6FB;
  color: #0ea5e9;
}
.badge-status.progress {
  background: #FFF1E3;
  color: #d97706;
}
.badge-status.done {
  background: #EAF7F0;
  color: #16a34a;
}
.badge-status.stopped {
  background: #F2F4F7;
  color: #475569;
}
.badge-status.late {
  background: #FEECEC;
  color: #b91c1c;
}
.badge-status.returned {
  background: #f3e8ff;
  color: 34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.kanban::-webkit-scrollbar {
  height: 8px;
}
.kanban::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.kanban::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.kanban::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
.task-count {
  font-size: 0.54rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.34rem;
}
.pagination-container {
  margin-top: 1.34rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  border: 0.67px solid #e9ecef;
}
@media (max-width: 768px) {
  .pagination-container {
    padding: 1rem;
  }
  .pagination {
    gap: 0.125rem;
  }
  .pagination .page-link {
    min-width: 36px;
    height: 36px;
    padding: 0.375rem 0.5rem;
    font-size: 0.8rem;
  }
  .pagination-info {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
.pagination {
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.17rem;
  flex-wrap: wrap;
}
.pagination .page-item {
  margin: 0;
}
.pagination .page-link {
  color: #B68A35;
  border: 0.67px solid #e9ecef;
  padding: 0.34rem 0.5rem;
  border-radius: 5.36px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 27px;
  height: 27px;
  font-weight: 500;
  font-size: 0.59rem;
}
.pagination .page-link:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 2.68px 5.36px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 1.34px 2.68px rgba(38, 102, 127, 0.3);
  font-weight: 600;
}
.pagination .page-item.disabled .page-link {
  color: #adb5bd;
  background-color: #f8f9fa;
  border-color: #e9ecef;
  cursor: not-allowed;
  opacity: 0.5;
}
.pagination .page-item.disabled .page-link:hover {
  background-color: #f8f9fa;
  color: #adb5bd;
  border-color: #e9ecef;
  transform: none;
  box-shadow: none;
}
.arrow-icon {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow-icon.rtl-arrow {
  transform: scaleX(-1);
}
.pagination .page-link i {
  font-size: 0.59rem;
}
.pagination-info {
  text-align: center;
  font-size: 0.59rem;
  color: #6c757d;
  font-weight: 500;
}
[dir=rtl] .pagination {
  direction: rtl;
}
[dir=rtl] .pagination-info {
  text-align: center;
}
.modal {
  z-index: 9999 !important;
}
.modal.show {
  z-index: 9999 !important;
}
.modal-backdrop {
  z-index: 9998 !important;
}
.modal-xl {
  z-index: 9999 !important;
}
.modal-lg {
  z-index: 9999 !important;
}
.modal-dialog:not(.modal-xl) {
  z-index: 9999 !important;
}
app-confirmation-modal .modal-overlay {
  z-index: 99999;
}
.modal.fade.show {
  z-index: inherit;
}
.sidebar,
.sidebar * {
  z-index: 1000 !important;
}
.modal {
  z-index: 9999 !important;
}
.modal .employee-dropdown,
.modal .employee-search-container .employee-dropdown {
  z-index: 10000 !important;
}
body.modal-open {
  overflow: hidden;
}
body.modal-open::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1039;
  pointer-events: none;
}
.modal-backdrop {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6) !important;
}
.modal.show {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.kpi-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  min-height: 80px;
  width: 100%;
  border: 0.67px solid rgba(238, 238, 238, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-card[dir=ltr] {
  font-family:
    "Poppins",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif;
}
.kpi-card[dir=rtl] {
  font-family:
    "IBM Plex Sans Arabic",
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans Arabic";
}
.kpi-cards-row {
  margin-bottom: 1.34rem;
}
.kpi-cards-row.g-3 {
  --bs-gutter-x: 0.67rem;
  --bs-gutter-y: 0.67rem;
}
.kpi-cards-row > * {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-bottom: var(--bs-gutter-y);
}
.kpi-cards-row .kpi-card {
  height: 100%;
  min-height: 80px;
}
.kpi-cards-row + .row {
  margin-top: 1.34rem;
}
@media (min-width: 1600px) {
  .kpi-card {
    padding: 1.75rem;
    min-height: 140px;
  }
  .kpi-icon {
    width: 64px;
    height: 64px;
  }
  .kpi-number {
    font-size: 2.25rem;
  }
  .kpi-label {
    font-size: 1rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-card {
    padding: 0.2rem 0.5rem;
    min-height: 120px;
  }
  .kpi-icon {
    width: 40px;
    height: 40px;
  }
  .kpi-number {
    font-size: 1.1rem;
  }
  .kpi-label {
    font-size: 0.9rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 1rem;
    --bs-gutter-y: 1rem;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .kpi-card {
    padding: 1.25rem;
    min-height: 120px;
  }
  .kpi-icon {
    width: 52px;
    height: 52px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.85rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.875rem;
    --bs-gutter-y: 0.875rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-card {
    padding: 1.25rem;
    min-height: 115px;
  }
  .kpi-icon {
    width: 48px;
    height: 48px;
  }
  .kpi-number {
    font-size: 1.75rem;
  }
  .kpi-label {
    font-size: 0.825rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.75rem;
    --bs-gutter-y: 0.75rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .kpi-card {
    padding: 1.125rem;
    min-height: 110px;
  }
  .kpi-icon {
    width: 44px;
    height: 44px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.8rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.625rem;
    --bs-gutter-y: 0.625rem;
  }
}
@media (max-width: 575px) {
  .kpi-card {
    padding: 1rem;
    min-height: 100px;
  }
  .kpi-icon {
    width: 40px;
    height: 40px;
  }
  .kpi-number {
    font-size: 1.5rem;
  }
  .kpi-label {
    font-size: 0.75rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5rem;
  }
}
.kpi-card:hover {
  box-shadow: 0 2.68px 10.7px rgba(0, 0, 0, 0.15);
}
.kpi-total:hover {
  border: 0.67px solid #09365F;
}
.kpi-progress:hover {
  border: 0.67px solid #B54708;
}
.kpi-completed:hover {
  border: 0.67px solid #0f7a2f;
}
.kpi-late:hover {
  border: 0.67px solid #dc2626;
}
.kpi-pending:hover {
  border: 0.67px solid #6b7280;
}
.kpi-completion-rate:hover {
  border: 0.67px solid #059669;
}
.kpi-completion-rate .kpi-content {
  display: flex;
  align-items: center;
  gap: 0.67rem;
}
.kpi-completion-rate .kpi-info {
  flex: 1;
  width: 100%;
}
@media (min-width: 1024px) and (max-width: 1599px) {
  .kpi-completion-rate .kpi-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate .kpi-info {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .kpi-completion-rate .kpi-number {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .kpi-completion-rate .kpi-label {
    font-size: 1rem;
    flex: 0 0 auto;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1;
    min-width: 200px;
    margin-top: 0;
  }
  .kpi-completion-rate .progress-bar {
    height: 8px;
  }
  .kpi-completion-rate .progress-labels {
    font-size: 0.75rem;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  .kpi-cards-row > [class*=col-]:has(.kpi-completion-rate) {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-cards-row > .col-completion-rate {
    flex: 0 0 auto;
    width: 33.33333333% !important;
    max-width: 33.33333333% !important;
  }
  .kpi-completion-rate {
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-content {
    gap: 1rem;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-icon {
    flex-shrink: 0;
  }
  .kpi-completion-rate .kpi-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
  .kpi-completion-rate .kpi-number {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .kpi-completion-rate .kpi-info {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
  .kpi-completion-rate .kpi-number,
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
  }
}
@media (min-width: 992px) and (max-width: 1599px) {
  .kpi-completion-rate .kpi-info {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .kpi-completion-rate .completion-progress {
    min-width: 250px;
  }
}
@media (max-width: 1024px) {
  .kpi-completion-rate .kpi-content {
    overflow: hidden;
    max-width: 100%;
    min-width: 0;
  }
  .kpi-completion-rate .kpi-info {
    flex: 1 1 auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .kpi-completion-rate .kpi-number {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .kpi-completion-rate .kpi-label {
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 0.75rem;
  }
  .kpi-completion-rate .completion-progress {
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
    margin-top: 0.5rem;
  }
  .kpi-completion-rate .progress-bar {
    width: 100%;
  }
  @media (max-width: 767px) {
    .kpi-completion-rate .kpi-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    .kpi-completion-rate .kpi-number,
    .kpi-completion-rate .kpi-label {
      width: 100%;
    }
    .kpi-completion-rate .completion-progress {
      width: 100%;
      margin-top: 0.75rem;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .kpi-completion-rate .kpi-info {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: nowrap;
    }
    .kpi-completion-rate .kpi-number {
      font-size: 1.5rem;
    }
    .kpi-completion-rate .kpi-label {
      font-size: 0.75rem;
    }
    .kpi-completion-rate .completion-progress {
      flex: 1 1 auto;
      min-width: 0;
      max-width: 200px;
      margin-top: 0;
    }
  }
  .filter-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  .filter-section .row {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    row-gap: 1rem;
  }
  .filter-section .col-md-2,
  .filter-section .col-md-3 {
    margin-bottom: 0.75rem;
  }
  .filter-section .form-label {
    font-size: 0.875rem;
    margin-bottom: 0.375rem;
  }
  .filter-section .form-control,
  .filter-section .form-select {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  .filter-section .btn {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  @media (max-width: 767px) {
    .filter-section {
      padding: 0.875rem;
    }
    .filter-section .row {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
      row-gap: 0.875rem;
    }
    .filter-section .col-md-2,
    .filter-section .col-md-3 {
      width: 100%;
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: 0.5rem;
    }
    .filter-section .form-label {
      font-size: 0.8125rem;
    }
    .filter-section .form-control,
    .filter-section .form-select {
      padding: 0.5rem 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section .btn {
      width: 100%;
      padding: 0.625rem;
      font-size: 0.8125rem;
    }
    .filter-section .employee-search-container {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .filter-section .col-md-2 {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
    .filter-section .col-md-3 {
      flex: 0 0 auto;
      width: 100%;
      max-width: 100%;
      margin-top: 0.5rem;
    }
    .filter-section .row > .col-md-2:last-child,
    .filter-section .row > .col-md-2:nth-last-child(2) {
      flex: 0 0 auto;
      width: calc(50% - 0.5rem);
      max-width: calc(50% - 0.5rem);
    }
  }
}
.kpi-content {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon {
  width: 37.5px;
  height: 37.5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.67rem;
  flex-shrink: 0;
}
.kpi-total .kpi-icon {
  background-color: rgb(204, 227, 237);
  color: #09365F;
}
.kpi-progress .kpi-icon {
  background-color: rgb(251, 236, 212);
  color: #B54708;
}
.kpi-completed .kpi-icon {
  background-color: rgb(237, 250, 246);
  color: #0f7a2f;
}
.kpi-late .kpi-icon {
  background-color: rgb(253, 226, 226);
  color: #dc2626;
}
.kpi-pending .kpi-icon {
  background-color: rgb(248, 250, 252);
  color: #6b7280;
}
.kpi-completion-rate .kpi-icon {
  background-color: rgb(237, 250, 246);
  color: #059669;
}
.kpi-info {
  flex: 1;
}
.kpi-number {
  font-size: 1.34rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.17rem;
}
.kpi-label {
  font-size: 0.59rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle {
  font-size: 0.5rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.17rem;
  font-style: italic;
}
.completion-progress {
  margin-top: 0.5rem;
  width: 100%;
}
.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.34rem;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 2px;
  transition: width 0.8s ease-in-out;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.42rem;
  color: #9ca3af;
  font-weight: 500;
}
@media (min-width: 1600px) {
  .progress-bar {
    height: 8px;
  }
  .progress-labels {
    font-size: 0.7rem;
  }
}
@media (max-width: 575px) {
  .progress-bar {
    height: 5px;
  }
  .progress-labels {
    font-size: 0.55rem;
  }
  .completion-progress {
    margin-top: 0.5rem;
  }
}
.insight-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1.34px 5.36px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 100%;
  border-left: 2.68px solid #B68A35;
}
.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.67rem;
}
.insight-title {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon {
  width: 21.5px;
  height: 21.5px;
  background-color: #f3f4f6;
  border-radius: 5.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.insight-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.34rem 0;
  border-bottom: 0.67px solid #f3f4f6;
}
.insight-item:last-child {
  border-bottom: none;
}
.insight-label {
  display: flex;
  align-items: center;
  gap: 0.34rem;
  font-size: 0.59rem;
  color: #374151;
  font-weight: 500;
}
.insight-value {
  display: flex;
  align-items: center;
  gap: 0.17rem;
}
.insight-count {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage {
  color: #6b7280;
  font-size: 0.5rem;
}
.status-dot,
.priority-dot {
  width: 5.36px;
  height: 5.36px;
  border-radius: 50%;
}
.efficiency-summary-card {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 10.7px;
  padding: 1.34rem;
  color: white;
  box-shadow: 0 5.36px 21.4px rgba(102, 126, 234, 0.3);
}
.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.34rem;
}
.summary-title-section {
  flex: 1;
}
.summary-title {
  font-size: 1.17rem;
  font-weight: 700;
  margin: 0 0 0.34rem 0;
  color: white;
}
.summary-subtitle {
  font-size: 0.67rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics {
  display: flex;
  gap: 1.34rem;
  flex-shrink: 0;
}
.metric-item {
  text-align: center;
  min-width: 53.6px;
}
.metric-value {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.17rem;
}
.metric-label {
  font-size: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.34px;
}
.summary-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.67rem;
}
.chart-container {
  display: flex;
  align-items: end;
  gap: 0.67rem;
  height: 80px;
  width: 100%;
  justify-content: center;
}
.chart-bar {
  width: 27px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2.68px 2.68px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar:hover .chart-tooltip {
  opacity: 1;
  transform: translateY(-3.35px);
}
.chart-tooltip {
  position: absolute;
  top: -27px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.34rem;
  border-radius: 4px;
  font-size: 0.5rem;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.2s ease;
  pointer-events: none;
}
.chart-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 2.68px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels {
  display: flex;
  gap: 0.67rem;
  justify-content: center;
}
.chart-label {
  font-size: 0.5rem;
  opacity: 0.8;
  text-align: center;
  min-width: 27px;
}
@keyframes chartBarGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
@media (max-width: 768px) {
  .summary-header {
    flex-direction: column;
    gap: 1rem;
  }
  .summary-metrics {
    gap: 1rem;
    justify-content: space-around;
    width: 100%;
  }
  .metric-item {
    min-width: auto;
    flex: 1;
  }
  .chart-container {
    gap: 0.5rem;
  }
  .chart-bar {
    width: 30px;
  }
  .chart-labels {
    gap: 0.5rem;
  }
  .chart-label {
    font-size: 0.625rem;
    min-width: 30px;
  }
  .insight-card {
    margin-bottom: 1rem;
  }
  .insight-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .insight-icon {
    align-self: flex-end;
  }
}
[dir=rtl] .kpi-content {
  flex-direction: row-reverse;
}
[dir=rtl] .kpi-icon {
  margin-right: 0;
  margin-left: 1rem;
}
[dir=rtl] .kpi-info {
  text-align: right;
}
[dir=rtl] .kpi-completion-rate .kpi-content {
  flex-direction: row-reverse;
}
@media (min-width: 768px) and (max-width: 1599px) {
  [dir=rtl] .kpi-completion-rate .kpi-info {
    flex-direction: row-reverse;
  }
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
.employee-search-container {
  position: relative;
}
.employee-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 0.67px solid #ddd;
  border-radius: 5.36px;
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.15);
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: auto;
}
.modal .employee-dropdown {
  z-index: 10000 !important;
}
.modal-body .employee-search-container {
  position: relative;
  z-index: 1000000;
  overflow: visible;
}
.modal-body .employee-search-container .employee-dropdown {
  z-index: 10000 !important;
}
.employee-list {
  padding: 5.36px 0;
}
.employee-item {
  display: flex;
  align-items: center;
  padding: 8px 10.7px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 0.67px solid #f0f0f0;
}
.employee-item:hover {
  background-color: #F2ECCE;
}
.employee-item:last-child {
  border-bottom: none;
}
.employee-item.text-danger,
.employee-item.text-muted {
  cursor: default !important;
  pointer-events: none;
}
.employee-item.text-danger:hover,
.employee-item.text-muted:hover {
  background-color: transparent !important;
}
.employee-item.text-danger {
  color: #dc3545 !important;
  font-weight: 500;
  padding: 10.7px;
}
.employee-item.text-muted {
  color: #6c757d !important;
  font-weight: 400;
  padding: 10.7px;
}
.employee-info {
  flex: 1;
  min-width: 0;
}
.result {
  background-color: #C8E6C9 !important;
  border: 0.67px solid #2BA149 !important;
}
.employee-name {
  font-weight: 500;
  color: #333;
  font-size: 9.38px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job {
  font-size: 8.04px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee {
  margin-top: 5.36px;
  padding: 8px;
  background: #f8f9fa;
  border: 0.67px solid #e9ecef;
  border-radius: 5.36px;
}
.selected-employee-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn-remove-employee {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 2.68px;
  border-radius: 2.68px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option {
  background-color: #f8f9fa;
  border-bottom: 1.34px solid #e9ecef !important;
}
.show-all-option:hover {
  background-color: #e9ecef;
}
.show-all-avatar {
  background:
    linear-gradient(
      135deg,
      #28a745 0%,
      #20c997 100%) !important;
  color: white;
}
[dir=rtl] .employee-avatar {
  margin-left: 0;
  margin-right: 8px;
}
[dir=rtl] .btn-remove-employee {
  margin-left: 0;
  margin-right: auto;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .page-title {
    font-size: 1.21rem;
  }
  .subtle {
    font-size: 0.6rem;
  }
  .btn-add {
    padding: 0.4rem 0.8rem;
    font-size: 0.57rem;
  }
  .btn-add .plus {
    width: 12.06px;
    height: 12.06px;
    font-size: 0.54rem;
  }
  .kanban {
    gap: 0.57rem;
    padding-bottom: 0.5rem;
  }
  .kanban-col {
    min-width: 127px;
    max-width: 154px;
  }
  .col-head {
    padding: 0.57rem 0.67rem;
    font-size: 0.6rem;
    margin-bottom: 0.57rem;
  }
  .task-count-detail {
    font-size: 0.47rem;
  }
  .task-list {
    gap: 0.47rem;
  }
  .task-card {
    padding: 0.85rem 0.95rem 0.85rem 0.75rem;
  }
  .task-card.compact {
    padding: 0.7rem 0.85rem 0.7rem 0.7rem;
  }
  .task-content {
    gap: 0.45rem;
  }
  .task-title {
    font-size: 0.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  .task-desc {
    font-size: 0.54rem;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .task-meta {
    font-size: 0.52rem;
  }
  .task-dates small {
    font-size: 0.47rem;
  }
  .task-footer {
    gap: 0.27rem;
    margin-top: 0.2rem;
  }
  .kpi-cards-row {
    margin-bottom: 1rem;
  }
  .kpi-card {
    padding: 0.74rem;
    min-height: 72px;
  }
  .kpi-icon {
    width: 32px;
    height: 32px;
  }
  .kpi-number {
    font-size: 1.17rem;
  }
  .kpi-label {
    font-size: 0.54rem;
  }
  .kpi-subtitle {
    font-size: 0.47rem;
  }
  .kpi-cards-row.g-3 {
    --bs-gutter-x: 0.6rem;
    --bs-gutter-y: 0.6rem;
  }
  .bulk-check {
    inset-block-start: 0rem;
  }
  .kpi-completion-rate .kpi-content {
    gap: 0.5rem;
  }
  .kpi-completion-rate .kpi-info {
    gap: 0.67rem;
  }
  .kpi-completion-rate .kpi-number {
    font-size: 1.34rem;
  }
  .completion-progress {
    margin-top: 0.34rem;
  }
  .progress-bar {
    height: 3.35px;
  }
  .progress-labels {
    font-size: 0.47rem;
  }
}
::ng-deep .ng-select {
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
}
::ng-deep .ng-select .ng-select-container {
  border: 1px solid #e9ecef !important;
  border-radius: 6px !important;
  min-height: 38px !important;
  background-color: #fff !important;
  padding: 0 12px !important;
  cursor: text !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-placeholder {
  color: #6c757d !important;
  font-size: 14px !important;
  padding: 0 !important;
  margin: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-input {
  padding: 0 !important;
  min-height: 36px !important;
  display: flex !important;
  align-items: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-input input {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  background: transparent !important;
  height: auto !important;
  line-height: 1.5 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-value {
  font-size: 14px !important;
  color: #333 !important;
  padding: 0 !important;
  margin: 0 !important;
  display: flex !important;
  align-items: center !important;
  max-width: none !important;
  overflow: visible !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  flex: 0 1 auto !important;
  min-width: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {
  display: block !important;
  line-height: 1.5 !important;
  white-space: nowrap !important;
  word-wrap: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  max-width: none !important;
  width: auto !important;
  min-width: 0 !important;
}
::ng-deep .ng-select .ng-select-container .ng-arrow-wrapper {
  width: 25px !important;
  height: 25px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
::ng-deep .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: #6c757d transparent transparent !important;
  border-style: solid !important;
  border-width: 5px 5px 2.5px !important;
  height: 0 !important;
  width: 0 !important;
}
::ng-deep .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {
  border-color: transparent transparent #6c757d !important;
  border-width: 0 5px 5px !important;
}
::ng-deep .ng-select.ng-select-focused .ng-select-container {
  border-color: #b68a35 !important;
  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;
}
::ng-deep .ng-select.ng-select-disabled .ng-select-container {
  background-color: #f5f5f5 !important;
  cursor: not-allowed !important;
}
::ng-deep .ng-dropdown-panel {
  border: 1px solid #ddd !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  background: white !important;
  margin-top: 4px !important;
  z-index: 10000 !important;
}
::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items {
  max-height: 300px !important;
  overflow-y: auto !important;
}
::ng-deep .ng-select .ng-option {
  padding: 12px 16px !important;
  border-bottom: 1px solid #f0f0f0 !important;
  cursor: pointer !important;
  font-size: 14px !important;
  color: #333 !important;
  min-width: 300px !important;
  white-space: normal !important;
}
::ng-deep .ng-select .ng-dropdown-panel {
  min-width: 300px !important;
  max-width: none !important;
}
::ng-deep .ng-select .ng-option:last-child {
  border-bottom: none !important;
}
::ng-deep .ng-select .ng-option:hover {
  background-color: #f8f9fa !important;
}
::ng-deep .ng-select .ng-option.ng-option-selected {
  background-color: #e9ecef !important;
  color: #333 !important;
}
::ng-deep .ng-select .ng-option.ng-option-marked {
  background-color: #f8f9fa !important;
}
::ng-deep .ng-select .ng-option.ng-option-disabled {
  color: #999 !important;
  cursor: not-allowed !important;
}
::ng-deep .ng-select .ng-clear-wrapper {
  width: 20px !important;
  height: 20px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
}
::ng-deep .ng-select .ng-clear-wrapper .ng-clear {
  font-size: 18px !important;
  color: #999 !important;
  line-height: 1 !important;
}
::ng-deep .ng-select .ng-clear-wrapper:hover .ng-clear {
  color: #333 !important;
}
::ng-deep .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {
  display: none !important;
}
::ng-deep .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {
  width: 20px !important;
  height: 20px !important;
  border: 2px solid #f3f3f3 !important;
  border-top: 2px solid #b68a35 !important;
  border-radius: 50% !important;
  animation: spin 1s linear infinite !important;
}
.employee-option {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 300px;
  max-width: none;
  width: auto;
}
.employee-option .employee-name {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}
.employee-option .employee-job {
  font-size: 12px;
  color: #6c757d;
  white-space: normal;
  word-wrap: break-word;
  overflow: visible;
}

/* src/app/components/tasks/my-tasks/my-tasks.component.css */
.my-tasks-container {
  padding: 0 1rem;
  font-size: 0.5rem;
  max-height: 100vh;
  overflow-y: auto;
}
.top-header {
  color: #5F646D;
  border-radius: 5.36px;
  margin-bottom: 0.67rem;
  display: flex;
}
.top-header [dir=rtl] {
  display: flex;
  flex-direction: row !important;
  align-items: flex-start;
}
.page-title {
  color: #5F646D !important;
  font-size: 1.21rem;
  font-weight: 700;
  margin: 0;
}
.subtle {
  font-size: 0.67rem;
  opacity: 0.9;
  margin: 0;
}
.kanban {
  display: flex;
  margin-bottom: 0.67rem;
  gap: 0.34rem;
}
.kanban-col {
  border-radius: 5.36px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex: 1;
}
.col-head {
  padding: 0.6rem 0.54rem;
  font-weight: 600;
  font-size: 0.7rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.col-head::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 100%);
  pointer-events: none;
}
.filter-section {
  background: white;
  padding: 0.5rem;
  border-radius: 5.36px;
  box-shadow: 0 0.67px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.67rem;
}
.filter-section .form-label {
  font-size: 0.47rem;
  font-weight: 500;
  margin-bottom: 0.17rem;
}
.filter-section .form-control,
.filter-section .btn {
  font-size: 0.67rem;
  padding: 0.23rem 0.4rem;
}
.filter-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(134px, 1fr));
  gap: 0.67rem;
  align-items: end;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.34rem;
}
.filter-group .form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0;
  font-size: 0.59rem;
}
.filter-group .form-control {
  width: 100%;
}
.filter-actions {
  display: flex;
  gap: 0.5rem;
  align-items: end;
  flex-wrap: wrap;
}
.filter-actions .btn {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-message {
  font-size: 0.5rem;
  margin-top: 0.17rem;
  display: block;
}
.btn-outline-secondary {
  color: #1B1D21;
  border: 0.67px solid #1B1D21;
  background: transparent;
}
.btn-outline-secondary:hover {
  background: #1B1D21;
  color: white;
}
@media (max-width: 768px) {
  .filter-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .filter-actions {
    width: 100%;
    flex-direction: column;
  }
  .filter-actions .btn {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .filter-row {
    grid-template-columns: repeat(2, 1fr);
  }
  .filter-actions {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
}
.col-head.blue {
  background: #6fb3d3a8;
  color: #0091d4;
}
.col-head.orange {
  background: #f7c9798f;
  color: #B54708;
}
.col-head.red {
  background: #f7151534;
  color: #d80f0f;
}
.task-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.1rem 0.34rem;
  border-radius: 8px;
  font-size: 0.54rem;
  font-weight: 500;
}
.task-list {
  padding: 0.67rem;
  min-height: 134px;
  max-height: 402px;
  overflow-y: auto;
}
.task-card {
  background: white;
  border: 0.67px solid #e5e7eb;
  border-radius: 5.36px;
  padding: 0.67rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.task-card:hover {
  box-shadow: 0 2.68px 8px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card.compact {
  padding: 0.5rem;
}
.task-content {
  margin-top: 0px !important;
  position: relative;
  z-index: 1;
}
.task-title {
  font-size: 0.67rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  margin: 0;
}
.task-desc {
  font-size: 0.59rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0.34rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  font-size: 0.5rem;
  color: #9ca3af;
  line-height: 1.3;
}
.task-footer {
  margin-top: 0.34rem;
  padding-top: 0.34rem;
  border-top: 0.67px solid #f3f4f6;
}
.badge {
  font-size: 0.47rem;
  font-weight: 500;
  padding: 0.17rem 0.34rem;
  border-radius: 2.68px;
  text-transform: uppercase;
  letter-spacing: 0.017em;
}
.priority-high {
  background-color: #fef2f2;
  color: #dc2626;
  border: 0.67px solid #fecaca;
}
.priority-medium {
  background-color: #fffbeb;
  color: #d97706;
  border: 0.67px solid #fed7aa;
}
.priority-low {
  background-color: #f0fdf4;
  color: #16a34a;
  border: 0.67px solid #bbf7d0;
}
.modal-content {
  border: none;
  border-radius: 8px;
  box-shadow: 0 6.7px 16.75px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1050;
}
.modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  max-width: 335px;
  width: 90%;
  margin: 0;
}
.modal-dialog.modal-xl {
  max-width: 536px;
}
.modal.show {
  display: block !important;
}
.modal.show .modal-dialog {
  transform: translate(-50%, -50%);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-header {
  color: #5F646D;
  border-radius: 8px 8px 0 0;
  border-bottom: none;
  padding: 1rem;
}
.modal-title {
  font-weight: 600;
  margin: 0;
}
.modal-body {
  padding: 1.34rem;
}
.modal-footer {
  border-top: 0.67px solid #e5e7eb;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0 0 8px 8px;
}
.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.34rem;
}
.form-control {
  border: 0.67px solid #d1d5db;
  border-radius: 5.36px;
  padding: 0.5rem;
  font-size: 0.59rem;
  transition: all 0.2s ease;
}
.form-control:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}
.form-control.is-invalid {
  border-color: #ef4444;
}
.invalid-feedback {
  display: block;
  font-size: 0.5rem;
  color: #ef4444;
  margin-top: 0.17rem;
}
.btn {
  border-radius: 5.36px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: 0.6rem;
}
.btn-primary {
  background: #B68A35;
  color: white;
}
.btn-primary:hover {
  background: #B68A35;
  box-shadow: 0 2.68px 8px rgba(246, 202, 59, 0.3);
}
.btn-secondary {
  background: transparent;
  color: #1B1D21;
  border: 0.67px solid #1B1D21;
}
.btn-secondary:hover {
  background: #1B1D21;
  color: white;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
.spinner-border {
  width: 2rem;
  height: 2rem;
  border-width: 0.2em;
}
@media (max-width: 1400px) and (min-width: 1025px) {
  .my-tasks-container {
    padding: 0.34rem 1rem;
  }
  .top-header {
    margin-bottom: 1rem;
  }
  .page-title {
    font-size: 1.07rem;
  }
  .subtle {
    font-size: 0.54rem;
  }
  .filter-section {
    padding: 0.84rem;
    margin-bottom: 1rem;
  }
  .filter-section .row {
    row-gap: 0.5rem;
  }
  .filter-section .form-label {
    font-size: 0.57rem;
  }
  .filter-section .form-control,
  .filter-section .form-select {
    padding: 0.37rem 0.54rem;
    font-size: 0.6rem;
  }
  .filter-section .btn {
    padding: 0.37rem 0.67rem;
    font-size: 0.7rem;
  }
  .kanban {
    gap: 0.67rem;
  }
  .col-head {
    padding: 0.47rem 0.84rem;
    font-size: 0.67rem;
  }
  .task-count {
    font-size: 0.57rem;
  }
  .task-list {
    padding: 0.57rem;
    max-height: 348px;
  }
  .task-card {
    padding: 0.57rem;
  }
  .task-title {
    font-size: 0.64rem;
  }
  .task-desc {
    font-size: 0.55rem;
  }
  .task-meta {
    font-size: 0.48rem;
  }
  .task-footer {
    margin-top: 0.27rem;
    padding-top: 0.27rem;
  }
  .badge {
    font-size: 0.44rem;
    padding: 0.13rem 0.3rem;
  }
}
@media (max-width: 768px) {
  .kanban {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 1.34rem;
  }
  .modal-body {
    padding: 1rem;
  }
  .task-card {
    padding: 0.5rem;
  }
}
[dir=rtl] .task-meta {
  text-align: right;
}
[dir=rtl] .ms-2 {
  margin-left: 0 !important;
  margin-right: 0.34rem !important;
}
[dir=rtl] .me-2 {
  margin-right: 0 !important;
  margin-left: 0.34rem !important;
}
/*# sourceMappingURL=my-tasks.component-DBCAAJ6Q.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }, { type: Router }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTasksComponent, { className: "MyTasksComponent", filePath: "src/app/components/tasks/my-tasks/my-tasks.component.ts", lineNumber: 17 });
})();

// src/app/components/tasks/all-tasks/all-tasks.component.ts
var _c03 = ["confirmationModal"];
function AllTasksComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275element(2, "div", 73);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function AllTasksComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.filters.to_date_before_from_date_error"), " ");
  }
}
function AllTasksComponent_ng_template_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.departmentName, " ");
  }
}
function AllTasksComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AllTasksComponent_ng_template_22_div_3_Template, 2, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.departmentName);
  }
}
function AllTasksComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(null));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(null));
  }
}
function AllTasksComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(0));
  }
}
function AllTasksComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(1));
  }
}
function AllTasksComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(2));
  }
}
function AllTasksComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(3));
  }
}
function AllTasksComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(4));
  }
}
function AllTasksComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(5));
  }
}
function AllTasksComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusCount(6));
  }
}
function AllTasksComponent_div_85_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "p", 114);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.description);
  }
}
function AllTasksComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "div", 84)(4, "h6", 85);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 89);
    \u0275\u0275template(12, AllTasksComponent_div_85_div_12_Template, 3, 1, "div", 90);
    \u0275\u0275elementStart(13, "div", 91)(14, "div", 92)(15, "div", 93)(16, "span", 94);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 95);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 93)(21, "span", 94);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 95);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 96)(26, "div", 97)(27, "span", 94);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 95);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 92)(32, "div", 93)(33, "span", 94);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 95);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 93)(38, "span", 94);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 95);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "div", 98)(43, "div", 99)(44, "button", 100);
    \u0275\u0275listener("click", function AllTasksComponent_div_85_Template_button_click_44_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 101);
    \u0275\u0275element(46, "path", 102)(47, "circle", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "button", 104);
    \u0275\u0275listener("click", function AllTasksComponent_div_85_Template_button_click_48_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTaskModal(task_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 101);
    \u0275\u0275element(50, "path", 105)(51, "path", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "button", 107);
    \u0275\u0275listener("click", function AllTasksComponent_div_85_Template_button_click_52_listener() {
      const task_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 101);
    \u0275\u0275element(54, "polyline", 108)(55, "path", 109)(56, "path", 110)(57, "path", 111)(58, "path", 112);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getPriorityClass(task_r5.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityText(task_r5.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(task_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(task_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r5.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.assignee"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.assigneeName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.createdBy"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.createdByName || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r5.deptName || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.due_date"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(task_r5.dueDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.created_at"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(task_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("common.details"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("common.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("data-tooltip", ctx_r1.translate("common.delete"));
  }
}
function AllTasksComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116);
    \u0275\u0275element(2, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 118);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.no_tasks"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.no_tasks_description"), " ");
  }
}
function AllTasksComponent_div_87_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 122)(1, "button", 128);
    \u0275\u0275listener("click", function AllTasksComponent_div_87_li_7_Template_button_click_1_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r8));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r8 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function AllTasksComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "nav", 120)(2, "ul", 121)(3, "li", 122)(4, "button", 123);
    \u0275\u0275listener("click", function AllTasksComponent_div_87_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AllTasksComponent_div_87_li_7_Template, 3, 3, "li", 125);
    \u0275\u0275elementStart(8, "li", 122)(9, "button", 123);
    \u0275\u0275listener("click", function AllTasksComponent_div_87_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(10);
    \u0275\u0275element(11, "i", 126);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 127)(13, "small", 118);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.previous"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.next"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate4(" ", ctx_r1.translate("tasks.all_tasks.page"), " ", ctx_r1.currentPage, " ", ctx_r1.translate("tasks.all_tasks.of"), " ", ctx_r1.totalPages, " ");
  }
}
function AllTasksComponent_ng_template_110_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r9.departmentName, " ");
  }
}
function AllTasksComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AllTasksComponent_ng_template_110_div_3_Template, 2, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r9.departmentName);
  }
}
function AllTasksComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function AllTasksComponent_small_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
function AllTasksComponent_div_141_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 149)(1, "h6", 139);
    \u0275\u0275element(2, "i", 150);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 151)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.description"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.description);
  }
}
function AllTasksComponent_div_141_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 132)(2, "div", 133)(3, "h4", 134);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 135)(6, "span", 136);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 51)(11, "div", 137)(12, "div", 138)(13, "h6", 139);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 140)(16, "div", 141)(17, "div", 142);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 143);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 141)(22, "div", 142);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 143);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 141)(27, "div", 142);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 143);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 141)(32, "div", 142);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 143);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 141)(37, "div", 142);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 143);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(41, AllTasksComponent_div_141_div_41_Template, 7, 2, "div", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 145)(43, "h6", 139);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 146)(46, "button", 66);
    \u0275\u0275listener("click", function AllTasksComponent_div_141_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 147);
    \u0275\u0275listener("click", function AllTasksComponent_div_141_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTaskModal(ctx_r1.currentTaskDetails));
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 148);
    \u0275\u0275listener("click", function AllTasksComponent_div_141_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTask(ctx_r1.currentTaskDetails));
    });
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.currentTaskDetails.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(ctx_r1.currentTaskDetails.status), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPriorityClass(ctx_r1.currentTaskDetails.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityText(ctx_r1.currentTaskDetails.priority), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.task_information"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.assignee"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTaskDetails.assigneeName || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.createdBy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTaskDetails.createdByName || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.department"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTaskDetails.deptName || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.due_date"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.currentTaskDetails.dueDate), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.created_at"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateTime(ctx_r1.currentTaskDetails.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskDetails.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.actions"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.delete"), " ");
  }
}
var AllTasksComponent = class _AllTasksComponent {
  tasksService;
  usersService;
  translationService;
  langService;
  fb;
  cdr;
  router;
  confirmationModal;
  // Data
  tasks = [];
  employees = [];
  // Language
  currentLang = "en";
  // UI state
  isLoading = false;
  // Pagination state
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  totalPages = 1;
  pageSizeOptions = [5, 10, 15, 20];
  // Filters
  filterForm;
  // Tab state
  selectedStatus = null;
  allTasksForCounting = [];
  // Store all tasks for counting by status
  // Modal visibility
  showEditTaskModal = false;
  showTaskDetailsModal = false;
  // Current task and details
  currentTask = null;
  currentTaskDetails = null;
  // Forms
  editTaskForm;
  // Users for dropdowns
  users = [];
  // Edit task modal employee search
  editTaskModalEmployees = [];
  isSearchingEditTaskEmployees = false;
  editTaskEmployeeSearchError = null;
  // Status mapping
  STATUS_MAP = {
    0: "new",
    1: "inProgress",
    2: "done",
    3: "stopped",
    4: "late",
    5: "returned",
    6: "review"
  };
  PRIORITY_MAP = {
    1: "high",
    2: "medium",
    3: "low"
  };
  constructor(tasksService, usersService, translationService, langService, fb, cdr, router) {
    this.tasksService = tasksService;
    this.usersService = usersService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.cdr = cdr;
    this.router = router;
    this.initializeForms();
  }
  ngOnInit() {
    this.loadData();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });
  }
  initializeForms() {
    this.filterForm = this.fb.group({
      status: [""],
      dueDateFrom: [""],
      dueDateTo: [""],
      employeeId: [""]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(250)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield Promise.all([
          this.loadAllTasks(),
          this.loadUsers(),
          this.loadEmployees()
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadUsers() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.usersService.getUserNames().subscribe({
          next: (users) => {
            this.users = users;
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadEmployees() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.usersService.searchUserNames("").subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.employees = response.data;
              const selectedEmployeeId = this.filterForm.get("employeeId")?.value;
              if (selectedEmployeeId) {
                const selectedEmployee = this.employees.find((e) => e.id === selectedEmployeeId);
                if (!selectedEmployee) {
                }
              }
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadAllTasks() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        const statusFilter = this.selectedStatus !== null ? this.selectedStatus : formValue.status || void 0;
        const adjustedToDate = this.getInclusiveEndDate(formValue.dueDateTo);
        this.tasksService.getAllTasksWithFilters(this.currentPage, this.pageSize, statusFilter, formValue.dueDateFrom || void 0, adjustedToDate, formValue.employeeId || void 0).subscribe({
          next: (response) => {
            if (response.success && response.data?.items) {
              this.tasks = response.data.items;
              this.totalCount = response.data.totalCount;
              this.totalPages = Math.ceil(this.totalCount / this.pageSize);
              this.loadAllTasksForCounting();
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadAllTasksForCounting() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        const adjustedToDate = this.getInclusiveEndDate(formValue.dueDateTo);
        this.tasksService.getAllTasksForCountingWithFilters(
          void 0,
          // No status filter for counting
          formValue.dueDateFrom || void 0,
          adjustedToDate,
          formValue.employeeId || void 0
        ).subscribe({
          next: (response) => {
            if (response.success && response.data?.items) {
              this.allTasksForCounting = response.data.items;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  // Filter methods
  onFilterChange() {
    this.currentPage = 1;
    this.selectedStatus = null;
    this.loadData();
  }
  /**
   * Handle from date change
   * Validates that to date is not before from date
   */
  onFromDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (fromDateValue && toDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Handle to date change
   * Validates that to date is not before from date
   */
  onToDateChange() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (toDateValue && fromDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
  }
  /**
   * Get minimum date for to date input (should be from date if selected)
   */
  getMinToDate() {
    return this.filterForm.get("dueDateFrom")?.value || "";
  }
  // Apply filters manually (called by search button)
  applyFilters() {
    const fromDateValue = this.filterForm.get("dueDateFrom")?.value;
    const toDateValue = this.filterForm.get("dueDateTo")?.value;
    if (fromDateValue && toDateValue && toDateValue < fromDateValue) {
      this.filterForm.get("dueDateTo")?.setValue("");
    }
    this.currentPage = 1;
    this.selectedStatus = null;
    this.loadData();
  }
  clearFilters() {
    this.filterForm.reset();
    this.selectedStatus = null;
    this.currentPage = 1;
    this.loadEmployees();
    this.loadData();
  }
  // Employee search functionality for ng-select
  onEmployeeSearch(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isLoading = true;
      this.usersService.searchUserNames(searchTerm.trim()).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            const selectedEmployeeId = this.filterForm.get("employeeId")?.value;
            let updatedEmployees = response.data;
            if (selectedEmployeeId) {
              const selectedEmployee = this.employees.find((e) => e.id === selectedEmployeeId);
              if (selectedEmployee && !updatedEmployees.find((e) => e.id === selectedEmployeeId)) {
                updatedEmployees = [selectedEmployee, ...updatedEmployees];
              }
            }
            this.employees = updatedEmployees;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error searching employees:", error);
          this.employees = [];
          this.isLoading = false;
        }
      });
    } else if (!searchTerm || searchTerm.trim().length === 0) {
      this.loadEmployees();
    }
  }
  // Handle employee dropdown open
  onEmployeeDropdownOpen() {
    if (this.employees.length === 0) {
      this.loadEmployees();
    }
  }
  // Handle employee selection change
  onEmployeeChange() {
    const selectedEmployeeId = this.filterForm.get("employeeId")?.value;
    if (selectedEmployeeId) {
      const selectedEmployee = this.employees.find((e) => e.id === selectedEmployeeId);
      if (!selectedEmployee) {
        this.loadEmployees().then(() => {
          const employee = this.employees.find((e) => e.id === selectedEmployeeId);
          if (!employee) {
            this.filterForm.get("employeeId")?.setValue("");
          }
        });
      }
    }
  }
  // Handle employee clear
  onEmployeeClear() {
    this.loadEmployees();
  }
  // Edit task modal employee search functionality for ng-select
  onEditTaskModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.trim().length >= 2) {
      this.isSearchingEditTaskEmployees = true;
      clearTimeout(this.editTaskSearchTimeout);
      this.editTaskSearchTimeout = setTimeout(() => {
        this.searchEmployeesForEditTask(searchTerm.trim());
      }, 300);
    } else if (searchTerm.length === 0) {
      this.loadEmployeesForEditTask();
    }
  }
  onEditTaskModalEmployeeSearchFocus() {
    if (this.editTaskModalEmployees.length === 0) {
      this.loadEmployeesForEditTask();
    }
  }
  searchEmployeesForEditTask(searchTerm) {
    this.editTaskEmployeeSearchError = null;
    this.usersService.searchUserNames(searchTerm).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.editTaskModalEmployees = response.data;
        } else {
          this.editTaskModalEmployees = [];
        }
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching employees:", error);
        this.editTaskModalEmployees = [];
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadEmployeesForEditTask() {
    this.editTaskEmployeeSearchError = null;
    this.isSearchingEditTaskEmployees = true;
    this.usersService.searchUserNames("").subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.editTaskModalEmployees = response.data;
          const selectedEmployeeId = this.editTaskForm.get("assigneeUserId")?.value;
          if (selectedEmployeeId) {
            const selectedEmployee = this.editTaskModalEmployees.find((e) => e.id === selectedEmployeeId);
            if (!selectedEmployee) {
            }
          }
        } else {
          this.editTaskModalEmployees = [];
        }
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.editTaskModalEmployees = [];
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      }
    });
  }
  /**
   * Adjust end date to be inclusive by adding one day
   */
  getInclusiveEndDate(dateValue) {
    if (!dateValue) {
      return void 0;
    }
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      return dateValue;
    }
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // Tab methods
  onStatusTabClick(status) {
    this.selectedStatus = status;
    this.currentPage = 1;
    this.loadData();
  }
  getStatusCount(status) {
    if (status === null) {
      return this.allTasksForCounting.length;
    }
    return this.allTasksForCounting.filter((task) => task.status === status).length;
  }
  // Pagination methods
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.loadData();
    }
  }
  changePageSize(pageSize) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.loadData();
  }
  getPageNumbers() {
    const pages = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }
  getStartIndex() {
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  getEndIndex() {
    return Math.min(this.currentPage * this.pageSize, this.totalCount);
  }
  // Utility methods
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.langService.isRTL();
  }
  getStatusClass(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? `status-${statusKey}` : "";
  }
  getPriorityClass(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? `priority-${priorityKey}` : "";
  }
  getPriorityText(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? this.translate(`tasks.priority.${priorityKey}`) : "";
  }
  getStatusText(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? this.translate(`tasks.status.${statusKey}`) : "";
  }
  getStatusBadgeClass(status) {
    if (status === null) {
      return "bg-secondary";
    }
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? `status-${statusKey}` : "bg-secondary";
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US");
  }
  formatDateTime(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US");
  }
  // Get status options for filter dropdown
  getStatusOptions() {
    return [
      { value: "", text: this.translate("tasks.all_tasks.all_statuses") },
      { value: 0, text: this.translate("tasks.status.new") },
      { value: 1, text: this.translate("tasks.status.inProgress") },
      { value: 2, text: this.translate("tasks.status.done") },
      { value: 3, text: this.translate("tasks.status.stopped") },
      { value: 4, text: this.translate("tasks.status.late") },
      { value: 5, text: this.translate("tasks.status.returned") },
      { value: 6, text: this.translate("tasks.status.review") }
    ];
  }
  openEditTaskModal(task) {
    this.closeAllModals();
    this.currentTask = task;
    this.editTaskModalEmployees = [];
    this.editTaskEmployeeSearchError = null;
    this.showEditTaskModal = true;
    this.editTaskForm.patchValue({
      title: task.title,
      description: task.description,
      assigneeUserId: task.assigneeUserId,
      priority: task.priority,
      dueDate: task.dueDate.split("T")[0],
      // Format for date input
      sourceType: task.sourceType
    });
    if (task.assigneeUserId) {
      this.loadEmployeesForEditTask();
    }
    this.updateBodyClass();
  }
  openTaskDetailsModal(task) {
    this.router.navigate(["/tasks/details", task.id]);
  }
  closeAllModals() {
    this.showEditTaskModal = false;
    this.showTaskDetailsModal = false;
    this.currentTask = null;
    this.currentTaskDetails = null;
    this.editTaskModalEmployees = [];
    this.editTaskEmployeeSearchError = null;
    this.updateBodyClass();
  }
  updateBodyClass() {
    const hasOpenModal = this.showEditTaskModal || this.showTaskDetailsModal;
    if (hasOpenModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }
  onModalBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.closeAllModals();
    }
  }
  loadTaskDetails(taskId) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskById(taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.currentTaskDetails = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  // Form submissions
  onSubmitEditTask() {
    return __async(this, null, function* () {
      if (this.editTaskForm.valid && this.currentTask) {
        try {
          const formValue = this.editTaskForm.value;
          const titleValue = String(formValue.title || "").trim();
          if (!titleValue) {
            this.showErrorMessage("Title is required");
            return;
          }
          let priorityValue;
          if (typeof formValue.priority === "string") {
            priorityValue = parseInt(formValue.priority, 10);
          } else if (typeof formValue.priority === "number") {
            priorityValue = formValue.priority;
          } else {
            this.showErrorMessage("Invalid priority value");
            return;
          }
          if (isNaN(priorityValue) || priorityValue < 1 || priorityValue > 3) {
            this.showErrorMessage("Invalid priority value");
            return;
          }
          let sourceTypeValue;
          if (typeof formValue.sourceType === "string") {
            sourceTypeValue = parseInt(formValue.sourceType, 10);
          } else if (typeof formValue.sourceType === "number") {
            sourceTypeValue = formValue.sourceType;
          } else {
            sourceTypeValue = 0;
          }
          let formattedDueDate;
          if (formValue.dueDate) {
            if (typeof formValue.dueDate === "string") {
              formattedDueDate = new Date(formValue.dueDate).toISOString();
            } else if (formValue.dueDate instanceof Date) {
              formattedDueDate = formValue.dueDate.toISOString();
            } else {
              formattedDueDate = new Date(formValue.dueDate).toISOString();
            }
          } else {
            this.showErrorMessage("Due date is required");
            return;
          }
          const updateRequest = {
            title: titleValue,
            // Use validated title
            description: String(formValue.description || ""),
            assigneeUserId: String(formValue.assigneeUserId || ""),
            priority: +priorityValue,
            // Use unary plus to ensure it's a number
            dueDate: formattedDueDate,
            sourceType: +sourceTypeValue,
            // Use unary plus to ensure it's a number
            sourceId: 0
            // Optional field from API schema
          };
          const response = yield this.tasksService.updateTask(this.currentTask.id, updateRequest).toPromise();
          if (response && response.success) {
            this.closeAllModals();
            this.loadData();
            this.showSuccessMessage(this.translate("tasks.edit_task_success"));
          }
        } catch (error) {
          console.error("Error updating task:", error);
          this.showErrorMessage(this.translate("tasks.edit_task_error"));
        }
      }
    });
  }
  deleteTask(task) {
    return __async(this, null, function* () {
      if (this.confirmationModal) {
        const modalData = {
          title: this.translate("tasks.delete_task"),
          message: this.translate("tasks.confirm_delete_task").replace("{name}", task.title),
          confirmText: this.translate("common.delete"),
          cancelText: this.translate("common.cancel"),
          type: "delete"
        };
        this.confirmationModal.show(modalData);
        const subscription = this.confirmationModal.confirm.subscribe(() => __async(this, null, function* () {
          try {
            const response = yield this.tasksService.deleteTask(task.id).toPromise();
            if (response && response.success) {
              this.loadData();
              this.showSuccessMessage(this.translate("tasks.delete_task_success"));
            }
          } catch (error) {
            console.error("Error deleting task:", error);
            this.showErrorMessage(this.translate("tasks.delete_task_error"));
          }
          subscription.unsubscribe();
        }));
      }
    });
  }
  // Utility methods for messages
  showSuccessMessage(message) {
    console.log("Success:", message);
  }
  showErrorMessage(message) {
    console.log("Error:", message);
  }
  static \u0275fac = function AllTasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AllTasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllTasksComponent, selectors: [["app-all-tasks"]], viewQuery: function AllTasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 144, vars: 88, consts: [["confirmationModal", ""], [1, "all-tasks-container", 3, "dir"], ["class", "loading-overlay", 4, "ngIf"], [1, "all-tasks-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "all-tasks-title"], [1, "search-section", "mb-4", "filter-section"], [3, "formGroup"], [1, "filter-row"], [1, "filter-group"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change", "min"], ["class", "error-message text-danger", 4, "ngIf"], ["bindLabel", "name", "bindValue", "id", "formControlName", "employeeId", 3, "change", "clear", "open", "search", "items", "searchable", "clearable", "loading"], ["ng-option-tmp", ""], [1, "filter-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-search", "me-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "status-tabs-section", "mb-4"], [1, "status-tabs-container"], ["role", "tablist", 1, "nav", "nav-tabs", "status-tabs", "p-2"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "nav-link", "status-tab", "px-2", 3, "click"], [1, "px-2"], ["class", "badge ms-4", 3, "class", 4, "ngIf"], ["type", "button", 1, "nav-link", "status-tab", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "badge ms-2", 3, "class", 4, "ngIf"], [1, "bi", "bi-check-circle", "me-2"], [1, "bi", "bi-pause-circle", "me-2"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "bi", "bi-arrow-return-left", "me-2"], [1, "bi", "bi-eye", "me-2"], [1, "results-summary", "mb-3"], [1, "mb-0", "text-muted"], [1, "tasks-cards-container"], [1, "row", "tasks-grid"], ["class", "col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], ["class", "empty-state text-center py-5", 4, "ngIf"], ["class", "pagination-container mt-4", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-12", "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control"], ["formControlName", "description", "rows", "3", 1, "form-control"], [1, "col-md-6", "mb-3"], ["bindLabel", "name", "bindValue", "id", "formControlName", "assigneeUserId", 3, "search", "open", "items", "searchable", "clearable", "loading"], ["ng-notfound-tmp", ""], ["class", "text-danger", 4, "ngIf"], ["formControlName", "priority", 1, "form-select"], ["value", "", "disabled", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "date", "formControlName", "dueDate", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "task-details-modal", 3, "click"], [1, "modal-dialog", "modal-fullscreen-lg-down", "modal-xl", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner"], [1, "error-message", "text-danger"], [1, "employee-option"], [1, "employee-name"], ["class", "employee-department", 4, "ngIf"], [1, "employee-department"], [1, "badge", "ms-4"], [1, "badge", "ms-2"], [1, "col-xxl-3", "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12"], [1, "task-card"], [1, "task-card-header"], [1, "header-main"], [1, "task-title", "mb-1"], [1, "task-badges"], [1, "badge", "me-1"], [1, "badge"], [1, "task-card-body"], ["class", "task-description", 4, "ngIf"], [1, "task-info-grid"], [1, "info-row", "two-column"], [1, "info-chip"], [1, "chip-label"], [1, "chip-value"], [1, "info-row", "single-column"], [1, "info-chip", "full-width"], [1, "task-card-footer"], [1, "task-actions"], ["type", "button", 1, "icon-action", "btn-icon-with-tooltip", "view-action", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["type", "button", 1, "icon-action", "btn-icon-with-tooltip", "edit-action", 3, "click"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"], ["type", "button", 1, "icon-action", "btn-icon-with-tooltip", "delete-action", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"], [1, "task-description"], [1, "mb-0"], [1, "empty-state", "text-center", "py-5"], [1, "empty-icon", "mb-3"], [1, "bi", "bi-list-task", "fa-3x", "text-muted"], [1, "text-muted"], [1, "pagination-container", "mt-4"], ["aria-label", "Tasks pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "text-center", "mt-2"], [1, "page-link", 3, "click"], [1, "text-muted", "text-center", "p-2"], [1, "fas", "fa-info-circle", "me-2"], [1, "text-danger"], [1, "task-details-container"], [1, "task-details-header"], [1, "task-title-main"], [1, "task-status-priority"], [1, "badge", "me-2"], [1, "col-12"], [1, "task-info-section"], [1, "section-title"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["class", "task-description-section", 4, "ngIf"], [1, "task-actions-section-bottom"], [1, "action-buttons-row"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "task-description-section"], [1, "bi", "bi-file-text", "me-2"], [1, "description-content"]], template: function AllTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AllTasksComponent_div_1_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "h1", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "form", 7)(8, "div", 8)(9, "div", 9)(10, "label", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 11);
      \u0275\u0275listener("change", function AllTasksComponent_Template_input_change_12_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFromDateChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 12);
      \u0275\u0275listener("change", function AllTasksComponent_Template_input_change_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onToDateChange());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, AllTasksComponent_small_17_Template, 2, 1, "small", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9)(19, "label", 10);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ng-select", 14);
      \u0275\u0275listener("change", function AllTasksComponent_Template_ng_select_change_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeChange());
      })("clear", function AllTasksComponent_Template_ng_select_clear_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeClear());
      })("open", function AllTasksComponent_Template_ng_select_open_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeDropdownOpen());
      })("search", function AllTasksComponent_Template_ng_select_search_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeSearch($event));
      });
      \u0275\u0275template(22, AllTasksComponent_ng_template_22_Template, 4, 2, "ng-template", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16)(24, "button", 17);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 19);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_27_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(28, "i", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "ul", 23)(33, "li", 24)(34, "button", 25);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(null));
      });
      \u0275\u0275elementStart(35, "span", 26);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, AllTasksComponent_span_37_Template, 2, 3, "span", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li", 24)(39, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(0));
      });
      \u0275\u0275element(40, "i", 29);
      \u0275\u0275elementStart(41, "span", 26);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, AllTasksComponent_span_43_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li", 24)(45, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_45_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(1));
      });
      \u0275\u0275elementStart(46, "span", 26);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, AllTasksComponent_span_48_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li", 24)(50, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(2));
      });
      \u0275\u0275element(51, "i", 31);
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275template(54, AllTasksComponent_span_54_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li", 24)(56, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(3));
      });
      \u0275\u0275element(57, "i", 32);
      \u0275\u0275elementStart(58, "span", 26);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, AllTasksComponent_span_60_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "li", 24)(62, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(4));
      });
      \u0275\u0275element(63, "i", 33);
      \u0275\u0275elementStart(64, "span", 26);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275template(66, AllTasksComponent_span_66_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li", 24)(68, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(5));
      });
      \u0275\u0275element(69, "i", 34);
      \u0275\u0275elementStart(70, "span", 26);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, AllTasksComponent_span_72_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li", 24)(74, "button", 28);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(6));
      });
      \u0275\u0275element(75, "i", 35);
      \u0275\u0275elementStart(76, "span", 26);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275template(78, AllTasksComponent_span_78_Template, 2, 3, "span", 30);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 36)(80, "div", 4)(81, "p", 37);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 38)(84, "div", 39);
      \u0275\u0275template(85, AllTasksComponent_div_85_Template, 59, 21, "div", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, AllTasksComponent_div_86_Template, 7, 2, "div", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, AllTasksComponent_div_87_Template, 15, 13, "div", 42);
      \u0275\u0275elementStart(88, "div", 43)(89, "div", 44)(90, "div", 45)(91, "div", 46)(92, "button", 47);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "h5", 48);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 49)(96, "form", 50);
      \u0275\u0275listener("ngSubmit", function AllTasksComponent_Template_form_ngSubmit_96_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(97, "div", 51)(98, "div", 52)(99, "label", 10);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd();
      \u0275\u0275element(101, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 52)(103, "label", 10);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd();
      \u0275\u0275element(105, "textarea", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 55)(107, "label", 10);
      \u0275\u0275text(108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "ng-select", 56);
      \u0275\u0275listener("search", function AllTasksComponent_Template_ng_select_search_109_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchNgSelect($event));
      })("open", function AllTasksComponent_Template_ng_select_open_109_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchFocus());
      });
      \u0275\u0275template(110, AllTasksComponent_ng_template_110_Template, 4, 2, "ng-template", 15)(111, AllTasksComponent_ng_template_111_Template, 3, 1, "ng-template", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275template(112, AllTasksComponent_small_112_Template, 2, 1, "small", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 55)(114, "label", 10);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "select", 59)(117, "option", 60);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "option", 61);
      \u0275\u0275text(120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "option", 62);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "option", 63);
      \u0275\u0275text(124);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "div", 55)(126, "label", 10);
      \u0275\u0275text(127);
      \u0275\u0275elementEnd();
      \u0275\u0275element(128, "input", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "div", 65)(130, "button", 17);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_130_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275text(131);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "button", 66);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_132_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275text(133);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(134, "div", 67);
      \u0275\u0275listener("click", function AllTasksComponent_Template_div_click_134_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onModalBackdropClick($event));
      });
      \u0275\u0275elementStart(135, "div", 68);
      \u0275\u0275listener("click", function AllTasksComponent_Template_div_click_135_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementStart(136, "div", 45)(137, "div", 46)(138, "button", 69);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_138_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h5", 48);
      \u0275\u0275text(140);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(141, AllTasksComponent_div_141_Template, 52, 23, "div", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(142, "app-confirmation-modal", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_7_0;
      let tmp_9_0;
      let tmp_52_0;
      let tmp_57_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_from"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_to"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ctx.getMinToDate() && ((tmp_7_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_7_0.value) && ((tmp_7_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_7_0.value) < ctx.getMinToDate());
      \u0275\u0275property("min", ctx.getMinToDate());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMinToDate() && ((tmp_9_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx.filterForm.get("dueDateTo")) == null ? null : tmp_9_0.value) < ctx.getMinToDate());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.select_employee"));
      \u0275\u0275advance();
      \u0275\u0275property("items", ctx.employees)("searchable", true)("clearable", true)("loading", ctx.isLoading);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear_filters"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.selectedStatus === null);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.all_statuses"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(null) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.new"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.inProgress"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(1) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 2);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.done"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(2) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 3);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.stopped"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(3) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 4);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.late"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(4) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 5);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.returned"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(5) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedStatus === 6);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.review"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusCount(6) > 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate6(" ", ctx.translate("tasks.all_tasks.showing"), " ", ctx.getStartIndex(), " - ", ctx.getEndIndex(), " ", ctx.translate("tasks.all_tasks.of"), " ", ctx.totalCount, " ", ctx.translate("tasks.all_tasks.tasks"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tasks);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tasks.length === 0 && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showEditTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showEditTaskModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translate("tasks.edit_task"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.editTaskForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.title_column"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.description"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.assignee"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_52_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_52_0.invalid) && ((tmp_52_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_52_0.touched));
      \u0275\u0275property("items", ctx.editTaskModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingEditTaskEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_57_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_57_0.invalid) && ((tmp_57_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_57_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.select_priority"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.high"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.medium"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.priority.low"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.edit_task"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showTaskDetailsModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showTaskDetailsModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translate("tasks.task_details"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentTaskDetails);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent, NgSelectComponent, NgOptionTemplateDirective, NgNotFoundTemplateDirective], styles: ['\n\n.all-tasks-container[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  min-height: 100vh;\n  font-size: 0.75rem;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #b68a35;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.all-tasks-header[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.all-tasks-title[_ngcontent-%COMP%] {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 1.3rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.75rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 0.75rem;\n}\n.search-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.25rem;\n  font-size: 0.7rem;\n}\n.search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.search-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.35rem 0.6rem;\n  transition: all 0.2s ease;\n  font-size: 0.7rem;\n}\n.search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #b68a35;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15);\n}\n.filter-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: end;\n  flex-wrap: wrap;\n}\n.filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #1b1d21;\n  border: 1px solid #1b1d21;\n  background: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #1b1d21;\n  color: white;\n}\n.status-tabs-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 0.75rem;\n}\n.status-tabs-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.35rem;\n}\n.status-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active[_ngcontent-%COMP%] {\n  background: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active[_ngcontent-%COMP%]:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.status-tab.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.results-summary[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  font-size: 0.7rem;\n}\n.results-summary[_ngcontent-%COMP%]   .form-select-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.4rem;\n  font-size: 0.7rem;\n  border-radius: 4px;\n}\n.tasks-cards-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  padding: 0.5rem;\n}\n.tasks-grid[_ngcontent-%COMP%] {\n  --bs-gutter-x: 0.8rem;\n  --bs-gutter-y: 0.8rem;\n}\n.task-card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 18px;\n  transition: all 0.25s ease;\n  height: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1.1rem;\n  box-shadow: 0 12px 28px -18px rgba(15, 23, 42, 0.25);\n  position: relative;\n  overflow: hidden;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(182, 138, 53, 0.45);\n  box-shadow: 0 28px 48px -20px rgba(15, 23, 42, 0.35);\n  transform: translateY(-4px);\n}\n.task-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.header-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.3;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n}\n.task-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  letter-spacing: 0.01em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.task-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.task-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  flex: 1;\n}\n.task-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.4;\n  color: #475569;\n  background: rgba(241, 245, 249, 0.6);\n  border-radius: 12px;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n}\n.task-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-clamp: 3;\n  word-wrap: break-word;\n}\n.task-info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: nowrap;\n}\n.info-row.two-column[_ngcontent-%COMP%]   .info-chip[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n}\n.info-row.single-column[_ngcontent-%COMP%]   .info-chip[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n.info-chip[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.85);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 12px;\n  padding: 0.55rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tasks-grid[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (max-width: 575px) {\n  .tasks-grid[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.chip-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #64748b;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n}\n.chip-value[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #1f2937;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.task-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.icon-action[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fafc;\n  color: #0f172a;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.icon-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.icon-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 18px -10px rgba(15, 23, 42, 0.22);\n}\n.icon-action.view-action[_ngcontent-%COMP%] {\n  border-color: rgba(38, 114, 209, 0.18);\n  background: rgba(38, 114, 209, 0.08);\n  color: #2563eb;\n}\n.icon-action.edit-action[_ngcontent-%COMP%] {\n  border-color: rgba(182, 138, 53, 0.2);\n  background: rgba(182, 138, 53, 0.12);\n  color: #b68a35;\n}\n.icon-action.delete-action[_ngcontent-%COMP%] {\n  border-color: rgba(220, 38, 38, 0.18);\n  background: rgba(220, 38, 38, 0.08);\n  color: #dc2626;\n}\n.icon-action.view-action[_ngcontent-%COMP%]:hover {\n  border-color: rgba(38, 114, 209, 0.4);\n}\n.icon-action.edit-action[_ngcontent-%COMP%]:hover {\n  border-color: rgba(182, 138, 53, 0.45);\n}\n.icon-action.delete-action[_ngcontent-%COMP%]:hover {\n  border-color: rgba(220, 38, 38, 0.4);\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  padding: 0.25rem 0.55rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.priority-high[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.priority-medium[_ngcontent-%COMP%] {\n  background-color: #b68a35;\n  color: white;\n}\n.priority-low[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.status-new[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.status-inProgress[_ngcontent-%COMP%] {\n  background-color: #d87e37;\n  color: white;\n}\n.status-done[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.status-stopped[_ngcontent-%COMP%] {\n  background-color: #464545;\n  color: white;\n}\n.status-late[_ngcontent-%COMP%] {\n  background-color: #b45253;\n  color: white;\n}\n.status-returned[_ngcontent-%COMP%] {\n  background-color: #78260d;\n  color: white;\n}\n.status-review[_ngcontent-%COMP%] {\n  background-color: #d4aa3a;\n  color: white;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #b68a35 !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #555555 !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  color: #92722a;\n  border: 1px solid #92722a;\n  background: #fff;\n  transition: all 0.3s ease;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #d4af5f;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #7c5e24;\n  border: 1px solid #7c5e24;\n  background: #f2ecce;\n  transition: all 0.3s ease;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #d4af5f;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #d22626;\n  border: 1px solid #d22626;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #d22626 !important;\n  color: #ffffff;\n  border-color: #d22626 !important;\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.25);\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.task-actions[_ngcontent-%COMP%]   .btn.loading[_ngcontent-%COMP%] {\n  position: relative;\n  color: transparent;\n}\n.task-actions[_ngcontent-%COMP%]   .btn.loading[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  border: 2px solid transparent;\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_button-spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_button-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  color: #92722a;\n  border: 1px solid #f2ecce;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  font-size: 0.7rem;\n  line-height: 1.25;\n  background-color: #fff;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  border-radius: 5px;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  color: #b68a35;\n  background-color: #f2ecce;\n  border-color: #f2ecce;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #b68a35;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #f2ecce;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .filter-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 1024px) {\n  .task-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .all-tasks-container[_ngcontent-%COMP%] {\n    padding: 0 0.4rem;\n  }\n  .all-tasks-title[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    gap: 0.65rem;\n  }\n  .filter-group[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.55rem;\n    font-size: 0.78rem;\n  }\n  .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.45rem 0.85rem;\n    font-size: 0.78rem;\n  }\n  .status-tabs-section[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.85rem;\n  }\n  .status-tab[_ngcontent-%COMP%] {\n    padding: 0.35rem 0.45rem;\n    font-size: 0.58rem;\n  }\n  .status-tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .results-summary[_ngcontent-%COMP%] {\n    padding: 0.7rem;\n  }\n  .tasks-cards-container[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.6rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.55rem 0.6rem 0.6rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .task-description[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .task-info-item[_ngcontent-%COMP%] {\n    font-size: 0.68rem;\n  }\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 0.25rem 0.5rem;\n  }\n  .task-actions[_ngcontent-%COMP%] {\n    gap: 0.35rem;\n    padding-top: 0.55rem;\n  }\n  .task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.64rem;\n    padding: 0.35rem 0.7rem;\n    min-width: 64px;\n  }\n  .action-buttons-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem;\n    font-size: 0.75rem;\n    min-width: 108px;\n  }\n}\n@media (max-width: 1400px) {\n  .all-tasks-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin-top: 10% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 1% auto;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .all-tasks-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin-top: 20% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 95vw;\n    margin: 1% auto;\n  }\n  .task-title-main[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .task-details-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .task-info-section[_ngcontent-%COMP%], \n   .task-description-section[_ngcontent-%COMP%], \n   .task-actions-section-bottom[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .action-buttons-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .action-buttons-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n  .filter-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .filter-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .results-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.55rem 0.7rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.65rem 0.7rem 0.75rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .task-badges[_ngcontent-%COMP%] {\n    gap: 0.3rem;\n  }\n  .task-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 0.6rem;\n  }\n  .task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n@media (max-width: 576px) {\n  .all-tasks-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin-top: 20% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 98vw;\n    margin: 0.5% auto;\n  }\n  .task-title-main[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .task-details-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .task-info-section[_ngcontent-%COMP%], \n   .task-description-section[_ngcontent-%COMP%], \n   .task-actions-section-bottom[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .info-label[_ngcontent-%COMP%], \n   .info-value[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .action-buttons-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.6rem 0.8rem;\n  }\n  .all-tasks-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.65rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.6rem 0.65rem 0.7rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 0.22rem 0.45rem;\n  }\n  .task-info-item[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .task-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.4rem 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n}\n@media (max-width: 400px) {\n  .info-item[_ngcontent-%COMP%] {\n    width: 60% !important;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 7% auto;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  overflow: hidden;\n  border-radius: 12px !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #d4af5f !important;\n  border-bottom: none;\n  padding: 1.5rem 2rem;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 15%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]::before {\n  content: "\\d7";\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #fafafa;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem 2rem;\n  gap: 0.75rem;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 0;\n  margin-left: auto;\n  order: 2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 0;\n  margin-right: auto;\n  order: 2;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  font: 1em sans-serif;\n  padding: 0.75rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #b68a35;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.task-details-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 2% auto;\n}\n.task-details-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  min-height: 80vh;\n}\n.task-details-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 0;\n}\n.task-details-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #dee2e6;\n}\n.task-title-main[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.75rem;\n  margin-bottom: 1rem;\n  line-height: 1.3;\n}\n.task-status-priority[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.task-status-priority[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n  display: flex;\n  align-items: center;\n}\n.section-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b68a35;\n  font-size: 1.2rem;\n}\n.task-info-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #e9ecef;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.info-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.info-item[_ngcontent-%COMP%]:hover {\n  border-color: #b68a35;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.1);\n  transform: translateY(-2px);\n}\n.info-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.info-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b68a35;\n  font-size: 1rem;\n  width: 20px;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 600;\n  font-size: 1rem;\n  word-break: break-word;\n}\n.task-description-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #e9ecef;\n}\n.description-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.description-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.task-actions-section-bottom[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  border: 1px solid #e9ecef;\n  margin-top: 2rem;\n}\n.action-buttons-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 140px;\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  color: #b68a35;\n  border-color: #b68a35;\n  background: rgba(182, 138, 53, 0.1);\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.action-buttons-row[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5a6268;\n  border-color: #545b62;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n[dir=rtl][_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: -1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-1[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.25rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-end[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.employee-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.employee-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.employee-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.employee-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.show-all-option[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.show-all-option[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-department[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-employee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-employee[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-employee[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n.manager-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.manager-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.manager-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.manager-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.manager-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.manager-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.manager-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.manager-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-manager[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-manager-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-manager[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-manager[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n  .filter-group .ng-select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.5;\n  display: block;\n}\n  .filter-group .ng-select .ng-select-container {\n  border: 1px solid #e9ecef !important;\n  border-radius: 6px !important;\n  min-height: 38px !important;\n  background-color: #fff !important;\n  padding: 0 12px !important;\n  cursor: text !important;\n  display: flex !important;\n  align-items: center !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  flex: 1 !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder, \n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value) {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) .ng-placeholder, \n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder, \n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value), \n  .filter-group .ng-select[ng-reflect-model]:not([ng-reflect-model=""]) .ng-select-container .ng-value-container .ng-placeholder, \n  .filter-group .ng-select.ng-select-has-value .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value:not(.ng-value-disabled)) .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n}\n  .filter-group .ng-select.ng-select-has-value .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n  .filter-group .ng-select.ng-select-focused .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n  .filter-group .ng-select.ng-select-opened .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-input input:not(:placeholder-shown) ~ .ng-placeholder, \n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  width: 100% !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-input input {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  background: transparent !important;\n  height: auto !important;\n  line-height: 1.5 !important;\n  width: 100% !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  z-index: 10 !important;\n  background-color: transparent !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n  overflow: visible !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  flex: 0 1 auto !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  position: relative !important;\n  z-index: 11 !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container:not(:empty) .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) > .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder, \n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value) {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-value-container {\n  min-width: 0 !important;\n  flex: 1 1 auto !important;\n  overflow: visible !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-arrow-wrapper {\n  width: 25px !important;\n  height: 25px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin-left: 8px !important;\n}\n  .filter-group .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: #6c757d transparent transparent !important;\n  border-style: solid !important;\n  border-width: 5px 5px 2.5px !important;\n  height: 0 !important;\n  width: 0 !important;\n}\n  .filter-group .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: transparent transparent #6c757d !important;\n  border-width: 0 5px 5px !important;\n}\n  .filter-group .ng-select.ng-select-focused .ng-select-container {\n  border-color: #b68a35 !important;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;\n}\n  .filter-group .ng-select.ng-select-disabled .ng-select-container {\n  background-color: #f5f5f5 !important;\n  cursor: not-allowed !important;\n}\n  .filter-group .ng-dropdown-panel {\n  border: 1px solid #ddd !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n  background: white !important;\n  margin-top: 4px !important;\n  z-index: 10000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n  .filter-group .ng-dropdown-panel .ng-dropdown-panel-items {\n  max-height: 300px !important;\n  overflow-y: auto !important;\n}\n  .filter-group .ng-select .ng-option {\n  padding: 12px 16px !important;\n  border-bottom: 1px solid #f0f0f0 !important;\n  cursor: pointer !important;\n  font-size: 14px !important;\n  color: #333 !important;\n  display: block !important;\n}\n  .filter-group .ng-select .ng-option:last-child {\n  border-bottom: none !important;\n}\n  .filter-group .ng-select .ng-option:hover {\n  background-color: #f8f9fa !important;\n}\n  .filter-group .ng-select .ng-option.ng-option-selected {\n  background-color: #e9ecef !important;\n  color: #333 !important;\n}\n  .filter-group .ng-select .ng-option.ng-option-marked {\n  background-color: #f8f9fa !important;\n}\n  .filter-group .ng-select .ng-option.ng-option-disabled {\n  color: #999 !important;\n  cursor: not-allowed !important;\n}\n  .filter-group .ng-select .ng-clear-wrapper {\n  width: 20px !important;\n  height: 20px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  margin-left: 8px !important;\n}\n  .filter-group .ng-select .ng-clear-wrapper .ng-clear {\n  font-size: 18px !important;\n  color: #999 !important;\n  line-height: 1 !important;\n}\n  .filter-group .ng-select .ng-clear-wrapper:hover .ng-clear {\n  color: #333 !important;\n}\n  .filter-group .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {\n  display: none !important;\n}\n  .filter-group .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #f3f3f3 !important;\n  border-top: 2px solid #b68a35 !important;\n  border-radius: 50% !important;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite !important;\n  margin-left: 8px !important;\n}\n  .filter-group .employee-option {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n  .filter-group .employee-option .employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n  .filter-group .employee-option .employee-department {\n  font-size: 12px;\n  color: #6c757d;\n}\n  .modal-body .ng-select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.5;\n  display: block;\n}\n  .modal-body .ng-select .ng-select-container {\n  border: 1px solid #e9ecef !important;\n  border-radius: 6px !important;\n  min-height: 38px !important;\n  background-color: #fff !important;\n  padding: 0 12px !important;\n  cursor: text !important;\n  display: flex !important;\n  align-items: center !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  flex: 1 !important;\n  min-width: 0 !important;\n  overflow: visible !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container .ng-value {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  z-index: 10 !important;\n  background-color: transparent !important;\n  max-width: none !important;\n  overflow: visible !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  flex: 0 1 auto !important;\n  min-width: 0 !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  width: 100% !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-value-container .ng-input input {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  background: transparent !important;\n  height: auto !important;\n  line-height: 1.5 !important;\n  width: 100% !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-arrow-wrapper {\n  width: 25px !important;\n  height: 25px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin-left: 8px !important;\n}\n  .modal-body .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: #6c757d transparent transparent !important;\n  border-style: solid !important;\n  border-width: 5px 5px 2.5px !important;\n  height: 0 !important;\n  width: 0 !important;\n}\n  .modal-body .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: transparent transparent #6c757d !important;\n  border-width: 0 5px 5px !important;\n}\n  .modal-body .ng-select.ng-select-focused .ng-select-container {\n  border-color: #b68a35 !important;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;\n}\n  .modal-body .ng-select.ng-select-disabled .ng-select-container {\n  background-color: #f5f5f5 !important;\n  cursor: not-allowed !important;\n}\n  .modal-body .ng-dropdown-panel {\n  border: 1px solid #ddd !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n  background: white !important;\n  margin-top: 4px !important;\n  z-index: 10000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n  .modal-body .ng-dropdown-panel .ng-dropdown-panel-items {\n  max-height: 300px !important;\n  overflow-y: auto !important;\n}\n  .modal-body .ng-select .ng-option {\n  padding: 12px 16px !important;\n  border-bottom: 1px solid #f0f0f0 !important;\n  cursor: pointer !important;\n  font-size: 14px !important;\n  color: #333 !important;\n  display: block !important;\n}\n  .modal-body .ng-select .ng-option:last-child {\n  border-bottom: none !important;\n}\n  .modal-body .ng-select .ng-option:hover {\n  background-color: #f8f9fa !important;\n}\n  .modal-body .ng-select .ng-option.ng-option-selected {\n  background-color: #e9ecef !important;\n  color: #333 !important;\n}\n  .modal-body .ng-select .ng-option.ng-option-marked {\n  background-color: #f8f9fa !important;\n}\n  .modal-body .ng-select .ng-option.ng-option-disabled {\n  color: #999 !important;\n  cursor: not-allowed !important;\n}\n  .modal-body .ng-select .ng-clear-wrapper {\n  width: 20px !important;\n  height: 20px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  margin-left: 8px !important;\n}\n  .modal-body .ng-select .ng-clear-wrapper .ng-clear {\n  font-size: 18px !important;\n  color: #999 !important;\n  line-height: 1 !important;\n}\n  .modal-body .ng-select .ng-clear-wrapper:hover .ng-clear {\n  color: #333 !important;\n}\n  .modal-body .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {\n  display: none !important;\n}\n  .modal-body .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #f3f3f3 !important;\n  border-top: 2px solid #b68a35 !important;\n  border-radius: 50% !important;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite !important;\n  margin-left: 8px !important;\n}\n  .modal-body .employee-option {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n  .modal-body .employee-option .employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n  .modal-body .employee-option .employee-department {\n  font-size: 12px;\n  color: #6c757d;\n}\n/*# sourceMappingURL=all-tasks.component-VYPLAUJR.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllTasksComponent, [{
    type: Component,
    args: [{ selector: "app-all-tasks", standalone: false, template: `<div class="all-tasks-container" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="loading-overlay">\r
    <div class="loading-spinner">\r
      <div class="spinner"></div>\r
      <p>{{ translate("common.loading") }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Header Section -->\r
  <div class="all-tasks-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="all-tasks-title">{{ translate("tasks.all_tasks.title") }}</h1>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters Section -->\r
  <div class="search-section mb-4 filter-section">\r
    <form [formGroup]="filterForm">\r
      <div class="filter-row">\r
        <div class="filter-group">\r
          <label class="form-label">{{\r
            translate("tasks.all_tasks.due_date_from")\r
          }}</label>\r
          <input\r
            type="date"\r
            class="form-control"\r
            formControlName="dueDateFrom"\r
            (change)="onFromDateChange()"\r
          />\r
        </div>\r
        <div class="filter-group">\r
          <label class="form-label">{{\r
            translate("tasks.all_tasks.due_date_to")\r
          }}</label>\r
          <input\r
            type="date"\r
            class="form-control"\r
            formControlName="dueDateTo"\r
            [min]="getMinToDate()"\r
            (change)="onToDateChange()"\r
            [class.error]="\r
              getMinToDate() &&\r
              filterForm.get('dueDateTo')?.value &&\r
              filterForm.get('dueDateTo')?.value < getMinToDate()\r
            "\r
          />\r
          <small\r
            *ngIf="\r
              getMinToDate() &&\r
              filterForm.get('dueDateTo')?.value &&\r
              filterForm.get('dueDateTo')?.value < getMinToDate()\r
            "\r
            class="error-message text-danger"\r
          >\r
            {{ translate("tasks.filters.to_date_before_from_date_error") }}\r
          </small>\r
        </div>\r
        <div class="filter-group">\r
          <label class="form-label">{{\r
            translate("tasks.all_tasks.select_employee")\r
          }}</label>\r
          <ng-select\r
            [items]="employees"\r
            bindLabel="name"\r
            bindValue="id"\r
            [searchable]="true"\r
            [clearable]="true"\r
            [loading]="isLoading"\r
            formControlName="employeeId"\r
            (change)="onEmployeeChange()"\r
            (clear)="onEmployeeClear()"\r
            (open)="onEmployeeDropdownOpen()"\r
            (search)="onEmployeeSearch($event)"\r
          >\r
            <ng-template ng-option-tmp let-item="item">\r
              <div class="employee-option">\r
                <div class="employee-name">{{ item.name }}</div>\r
                <div class="employee-department" *ngIf="item.departmentName">\r
                  {{ item.departmentName }}\r
                </div>\r
              </div>\r
            </ng-template>\r
          </ng-select>\r
        </div>\r
        <div class="filter-actions">\r
          <button\r
            type="button"\r
            class="btn btn-primary"\r
            (click)="applyFilters()"\r
          >\r
            <i class="bi bi-search me-2"></i>\r
            {{ translate("common.search") }}\r
          </button>\r
          <button\r
            type="button"\r
            class="btn btn-outline-secondary"\r
            (click)="clearFilters()"\r
          >\r
            <i class="bi bi-x-circle me-2"></i>\r
            {{ translate("common.clear_filters") }}\r
          </button>\r
        </div>\r
      </div>\r
    </form>\r
  </div>\r
\r
  <!-- Status Tabs Section -->\r
  <div class="status-tabs-section mb-4">\r
    <div class="status-tabs-container">\r
      <ul class="nav nav-tabs status-tabs p-2" role="tablist">\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab px-2"\r
            [class.active]="selectedStatus === null"\r
            (click)="onStatusTabClick(null)"\r
            type="button"\r
          >\r
            <span class="px-2">{{\r
              translate("tasks.all_tasks.all_statuses")\r
            }}</span>\r
            <span\r
              class="badge ms-4"\r
              [class]="getStatusBadgeClass(null)"\r
              *ngIf="getStatusCount(null) > 0"\r
              >{{ getStatusCount(null) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 0"\r
            (click)="onStatusTabClick(0)"\r
            type="button"\r
          >\r
            <i class="bi bi-plus-circle me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.new") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(0)"\r
              *ngIf="getStatusCount(0) > 0"\r
              >{{ getStatusCount(0) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 1"\r
            (click)="onStatusTabClick(1)"\r
            type="button"\r
          >\r
            <span class="px-2">{{ translate("tasks.status.inProgress") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(1)"\r
              *ngIf="getStatusCount(1) > 0"\r
              >{{ getStatusCount(1) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 2"\r
            (click)="onStatusTabClick(2)"\r
            type="button"\r
          >\r
            <i class="bi bi-check-circle me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.done") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(2)"\r
              *ngIf="getStatusCount(2) > 0"\r
              >{{ getStatusCount(2) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 3"\r
            (click)="onStatusTabClick(3)"\r
            type="button"\r
          >\r
            <i class="bi bi-pause-circle me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.stopped") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(3)"\r
              *ngIf="getStatusCount(3) > 0"\r
              >{{ getStatusCount(3) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 4"\r
            (click)="onStatusTabClick(4)"\r
            type="button"\r
          >\r
            <i class="bi bi-exclamation-triangle me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.late") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(4)"\r
              *ngIf="getStatusCount(4) > 0"\r
              >{{ getStatusCount(4) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 5"\r
            (click)="onStatusTabClick(5)"\r
            type="button"\r
          >\r
            <i class="bi bi-arrow-return-left me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.returned") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(5)"\r
              *ngIf="getStatusCount(5) > 0"\r
              >{{ getStatusCount(5) }}</span\r
            >\r
          </button>\r
        </li>\r
        <li class="nav-item" role="presentation">\r
          <button\r
            class="nav-link status-tab"\r
            [class.active]="selectedStatus === 6"\r
            (click)="onStatusTabClick(6)"\r
            type="button"\r
          >\r
            <i class="bi bi-eye me-2"></i>\r
            <span class="px-2">{{ translate("tasks.status.review") }}</span>\r
            <span\r
              class="badge ms-2"\r
              [class]="getStatusBadgeClass(6)"\r
              *ngIf="getStatusCount(6) > 0"\r
              >{{ getStatusCount(6) }}</span\r
            >\r
          </button>\r
        </li>\r
      </ul>\r
    </div>\r
  </div>\r
\r
  <!-- Results Summary -->\r
  <div class="results-summary mb-3">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <p class="mb-0 text-muted">\r
        {{ translate("tasks.all_tasks.showing") }}\r
        {{ getStartIndex() }} - {{ getEndIndex() }}\r
        {{ translate("tasks.all_tasks.of") }}\r
        {{ totalCount }}\r
        {{ translate("tasks.all_tasks.tasks") }}\r
      </p>\r
    </div>\r
  </div>\r
\r
  <!-- Tasks Cards -->\r
  <div class="tasks-cards-container">\r
    <div class="row tasks-grid">\r
      <div\r
        class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12"\r
        *ngFor="let task of tasks"\r
      >\r
        <div class="task-card">\r
          <div class="task-card-header">\r
            <div class="header-main">\r
              <h6 class="task-title mb-1">{{ task.title }}</h6>\r
              <!-- <div class="task-subtitle text-muted" *ngIf="task.taskNumber">\r
              {{ task.taskNumber }}\r
            </div> -->\r
            </div>\r
            <div class="task-badges">\r
              <span\r
                class="badge me-1"\r
                [class]="getPriorityClass(task.priority)"\r
              >\r
                {{ getPriorityText(task.priority) }}\r
              </span>\r
              <span class="badge" [class]="getStatusClass(task.status)">\r
                {{ getStatusText(task.status) }}\r
              </span>\r
            </div>\r
          </div>\r
\r
          <div class="task-card-body">\r
            <div class="task-description" *ngIf="task.description">\r
              <p class="mb-0">{{ task.description }}</p>\r
            </div>\r
\r
            <div class="task-info-grid">\r
              <div class="info-row two-column">\r
                <div class="info-chip">\r
                  <span class="chip-label">{{\r
                    translate("tasks.all_tasks.assignee")\r
                  }}</span>\r
                  <span class="chip-value">{{ task.assigneeName || "-" }}</span>\r
                </div>\r
                <div class="info-chip">\r
                  <span class="chip-label">{{\r
                    translate("tasks.all_tasks.createdBy")\r
                  }}</span>\r
                  <span class="chip-value">{{\r
                    task.createdByName || "-"\r
                  }}</span>\r
                </div>\r
              </div>\r
              <div class="info-row single-column">\r
                <div class="info-chip full-width">\r
                  <span class="chip-label">{{\r
                    translate("tasks.all_tasks.department")\r
                  }}</span>\r
                  <span class="chip-value">{{ task.deptName || "-" }}</span>\r
                </div>\r
              </div>\r
              <div class="info-row two-column">\r
                <div class="info-chip">\r
                  <span class="chip-label">{{\r
                    translate("tasks.all_tasks.due_date")\r
                  }}</span>\r
                  <span class="chip-value">{{ formatDate(task.dueDate) }}</span>\r
                </div>\r
                <div class="info-chip">\r
                  <span class="chip-label">{{\r
                    translate("tasks.all_tasks.created_at")\r
                  }}</span>\r
                  <span class="chip-value">{{\r
                    formatDateTime(task.createdAt)\r
                  }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="task-card-footer">\r
            <div class="task-actions">\r
              <button\r
                type="button"\r
                class="icon-action btn-icon-with-tooltip view-action"\r
                (click)="openTaskDetailsModal(task)"\r
                [attr.data-tooltip]="translate('common.details')"\r
              >\r
                <svg\r
                  width="18"\r
                  height="18"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="1.8"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                >\r
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\r
                  <circle cx="12" cy="12" r="3" />\r
                </svg>\r
              </button>\r
              <button\r
                type="button"\r
                class="icon-action btn-icon-with-tooltip edit-action"\r
                (click)="openEditTaskModal(task)"\r
                [attr.data-tooltip]="translate('common.edit')"\r
              >\r
                <svg\r
                  width="18"\r
                  height="18"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="1.8"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                >\r
                  <path d="M12 20h9" />\r
                  <path\r
                    d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"\r
                  />\r
                </svg>\r
              </button>\r
              <button\r
                type="button"\r
                class="icon-action btn-icon-with-tooltip delete-action"\r
                (click)="deleteTask(task)"\r
                [attr.data-tooltip]="translate('common.delete')"\r
              >\r
                <svg\r
                  width="18"\r
                  height="18"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="1.8"\r
                  stroke-linecap="round"\r
                  stroke-linejoin="round"\r
                >\r
                  <polyline points="3 6 5 6 21 6" />\r
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />\r
                  <path d="M10 11v6" />\r
                  <path d="M14 11v6" />\r
                  <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div\r
      *ngIf="tasks.length === 0 && !isLoading"\r
      class="empty-state text-center py-5"\r
    >\r
      <div class="empty-icon mb-3">\r
        <i class="bi bi-list-task fa-3x text-muted"></i>\r
      </div>\r
      <h5 class="text-muted">{{ translate("tasks.all_tasks.no_tasks") }}</h5>\r
      <p class="text-muted">\r
        {{ translate("tasks.all_tasks.no_tasks_description") }}\r
      </p>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="totalPages > 1" class="pagination-container mt-4">\r
    <nav aria-label="Tasks pagination">\r
      <ul class="pagination justify-content-center">\r
        <!-- Previous Button -->\r
        <li class="page-item" [class.disabled]="currentPage === 1">\r
          <button\r
            class="page-link"\r
            (click)="goToPage(currentPage - 1)"\r
            [disabled]="currentPage === 1"\r
          >\r
            <i class="fas fa-chevron-left"></i>\r
            {{ translate("common.previous") }}\r
          </button>\r
        </li>\r
\r
        <!-- Page Numbers -->\r
        <li\r
          *ngFor="let page of getPageNumbers()"\r
          class="page-item"\r
          [class.active]="page === currentPage"\r
        >\r
          <button class="page-link" (click)="goToPage(page)">\r
            {{ page }}\r
          </button>\r
        </li>\r
\r
        <!-- Next Button -->\r
        <li class="page-item" [class.disabled]="currentPage === totalPages">\r
          <button\r
            class="page-link"\r
            (click)="goToPage(currentPage + 1)"\r
            [disabled]="currentPage === totalPages"\r
          >\r
            {{ translate("common.next") }}\r
            <i class="fas fa-chevron-right"></i>\r
          </button>\r
        </li>\r
      </ul>\r
    </nav>\r
\r
    <!-- Page Info -->\r
    <div class="text-center mt-2">\r
      <small class="text-muted">\r
        {{ translate("tasks.all_tasks.page") }} {{ currentPage }}\r
        {{ translate("tasks.all_tasks.of") }} {{ totalPages }}\r
      </small>\r
    </div>\r
  </div>\r
\r
  <!-- Edit Task Modal -->\r
  <div\r
    class="modal fade"\r
    [class.show]="showEditTaskModal"\r
    [style.display]="showEditTaskModal ? 'block' : 'none'"\r
  >\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <button\r
            type="button"\r
            class="btn-close"\r
            (click)="closeAllModals()"\r
          ></button>\r
          <h5 class="modal-title">{{ translate("tasks.edit_task") }}</h5>\r
        </div>\r
        <div class="modal-body">\r
          <form [formGroup]="editTaskForm" (ngSubmit)="onSubmitEditTask()">\r
            <div class="row">\r
              <div class="col-md-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.all_tasks.title_column")\r
                }}</label>\r
                <input\r
                  type="text"\r
                  class="form-control"\r
                  formControlName="title"\r
                />\r
              </div>\r
              <div class="col-md-12 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.all_tasks.description")\r
                }}</label>\r
                <textarea\r
                  class="form-control"\r
                  formControlName="description"\r
                  rows="3"\r
                ></textarea>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.all_tasks.assignee")\r
                }}</label>\r
                <ng-select\r
                  [items]="editTaskModalEmployees"\r
                  bindLabel="name"\r
                  bindValue="id"\r
                  [searchable]="true"\r
                  [clearable]="true"\r
                  [loading]="isSearchingEditTaskEmployees"\r
                  [class.is-invalid]="\r
                    editTaskForm.get('assigneeUserId')?.invalid &&\r
                    editTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                  formControlName="assigneeUserId"\r
                  (search)="onEditTaskModalEmployeeSearchNgSelect($event)"\r
                  (open)="onEditTaskModalEmployeeSearchFocus()"\r
                >\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="employee-option">\r
                      <div class="employee-name">{{ item.name }}</div>\r
                      <div\r
                        class="employee-department"\r
                        *ngIf="item.departmentName"\r
                      >\r
                        {{ item.departmentName }}\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                    <div class="text-muted text-center p-2">\r
                      <i class="fas fa-info-circle me-2"></i>\r
                      {{\r
                        translate("tasks.form.noEmployeesFound") ||\r
                          "No employees found"\r
                      }}\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
                <small\r
                  class="text-danger"\r
                  *ngIf="\r
                    editTaskForm.get('assigneeUserId')?.invalid &&\r
                    editTaskForm.get('assigneeUserId')?.touched\r
                  "\r
                >\r
                  {{\r
                    translate("tasks.form.assigneeRequired") ||\r
                      "Please select an employee"\r
                  }}\r
                </small>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.all_tasks.priority")\r
                }}</label>\r
                <select class="form-select" formControlName="priority">\r
                  <option value="" disabled>\r
                    {{ translate("tasks.select_priority") }}\r
                  </option>\r
                  <option value="1">\r
                    {{ translate("tasks.priority.high") }}\r
                  </option>\r
                  <option value="2">\r
                    {{ translate("tasks.priority.medium") }}\r
                  </option>\r
                  <option value="3">\r
                    {{ translate("tasks.priority.low") }}\r
                  </option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{\r
                  translate("tasks.all_tasks.due_date")\r
                }}</label>\r
                <input\r
                  type="date"\r
                  class="form-control"\r
                  formControlName="dueDate"\r
                />\r
              </div>\r
            </div>\r
          </form>\r
        </div>\r
        <div class="modal-footer">\r
          <button\r
            type="button"\r
            class="btn btn-primary"\r
            (click)="onSubmitEditTask()"\r
          >\r
            {{ translate("tasks.edit_task") }}\r
          </button>\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeAllModals()"\r
          >\r
            {{ translate("common.cancel") }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Task Details Modal -->\r
  <div\r
    class="modal fade task-details-modal"\r
    [class.show]="showTaskDetailsModal"\r
    [style.display]="showTaskDetailsModal ? 'block' : 'none'"\r
    tabindex="-1"\r
    role="dialog"\r
    aria-modal="true"\r
    (click)="onModalBackdropClick($event)"\r
  >\r
    <div\r
      class="modal-dialog modal-fullscreen-lg-down modal-xl"\r
      (click)="$event.stopPropagation()"\r
    >\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <button\r
            type="button"\r
            class="btn-close"\r
            (click)="closeAllModals()"\r
            aria-label="Close"\r
          ></button>\r
          <h5 class="modal-title">{{ translate("tasks.task_details") }}</h5>\r
        </div>\r
        <div class="modal-body" *ngIf="currentTaskDetails">\r
          <div class="task-details-container">\r
            <div class="task-details-header">\r
              <h4 class="task-title-main">{{ currentTaskDetails.title }}</h4>\r
              <div class="task-status-priority">\r
                <span\r
                  class="badge me-2"\r
                  [class]="getStatusClass(currentTaskDetails.status)"\r
                >\r
                  {{ getStatusText(currentTaskDetails.status) }}\r
                </span>\r
                <span\r
                  class="badge"\r
                  [class]="getPriorityClass(currentTaskDetails.priority)"\r
                >\r
                  {{ getPriorityText(currentTaskDetails.priority) }}\r
                </span>\r
              </div>\r
            </div>\r
\r
            <div class="row">\r
              <div class="col-12">\r
                <div class="task-info-section">\r
                  <h6 class="section-title">\r
                    {{ translate("tasks.all_tasks.task_information") }}\r
                  </h6>\r
\r
                  <div class="info-grid">\r
                    <div class="info-item">\r
                      <div class="info-label">\r
                        {{ translate("tasks.all_tasks.assignee") }}\r
                      </div>\r
                      <div class="info-value">\r
                        {{ currentTaskDetails.assigneeName || "-" }}\r
                      </div>\r
                    </div>\r
\r
                    <div class="info-item">\r
                      <div class="info-label">\r
                        {{ translate("tasks.all_tasks.createdBy") }}\r
                      </div>\r
                      <div class="info-value">\r
                        {{ currentTaskDetails.createdByName || "-" }}\r
                      </div>\r
                    </div>\r
\r
                    <div class="info-item">\r
                      <div class="info-label">\r
                        {{ translate("tasks.all_tasks.department") }}\r
                      </div>\r
                      <div class="info-value">\r
                        {{ currentTaskDetails.deptName || "-" }}\r
                      </div>\r
                    </div>\r
\r
                    <div class="info-item">\r
                      <div class="info-label">\r
                        {{ translate("tasks.all_tasks.due_date") }}\r
                      </div>\r
                      <div class="info-value">\r
                        {{ formatDate(currentTaskDetails.dueDate) }}\r
                      </div>\r
                    </div>\r
\r
                    <div class="info-item">\r
                      <div class="info-label">\r
                        {{ translate("tasks.all_tasks.created_at") }}\r
                      </div>\r
                      <div class="info-value">\r
                        {{ formatDateTime(currentTaskDetails.createdAt) }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div\r
                  class="task-description-section"\r
                  *ngIf="currentTaskDetails.description"\r
                >\r
                  <h6 class="section-title">\r
                    <i class="bi bi-file-text me-2"></i>\r
                    {{ translate("tasks.all_tasks.description") }}\r
                  </h6>\r
                  <div class="description-content">\r
                    <p>{{ currentTaskDetails.description }}</p>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Actions Section as Row at Bottom -->\r
            <div class="task-actions-section-bottom">\r
              <h6 class="section-title">\r
                {{ translate("common.actions") }}\r
              </h6>\r
              <div class="action-buttons-row">\r
                <button\r
                  type="button"\r
                  class="btn btn-secondary"\r
                  (click)="closeAllModals()"\r
                >\r
                  {{ translate("common.close") }}\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-primary"\r
                  (click)="openEditTaskModal(currentTaskDetails)"\r
                >\r
                  {{ translate("common.edit") }}\r
                </button>\r
                <button\r
                  type="button"\r
                  class="btn btn-outline-danger"\r
                  (click)="deleteTask(currentTaskDetails)"\r
                >\r
                  {{ translate("common.delete") }}\r
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
  <app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
</div>\r
`, styles: ['/* src/app/components/tasks/all-tasks/all-tasks.component.css */\n.all-tasks-container {\n  padding: 0.75rem;\n  min-height: 100vh;\n  font-size: 0.75rem;\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #b68a35;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.all-tasks-header {\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.all-tasks-title {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 1.3rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 0.75rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 0.75rem;\n}\n.search-section .form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.25rem;\n  font-size: 0.7rem;\n}\n.search-section .form-control,\n.search-section .btn {\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  padding: 0.35rem 0.6rem;\n  transition: all 0.2s ease;\n  font-size: 0.7rem;\n}\n.search-section .form-control:focus {\n  border-color: #b68a35;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15);\n}\n.filter-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  align-items: end;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.filter-group .form-label {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n}\n.filter-group .form-control {\n  width: 100%;\n}\n.filter-actions {\n  display: flex;\n  gap: 0.75rem;\n  align-items: end;\n  flex-wrap: wrap;\n}\n.filter-actions .btn {\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.error-message {\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.btn-outline-secondary {\n  color: #1b1d21;\n  border: 1px solid #1b1d21;\n  background: transparent;\n}\n.btn-outline-secondary:hover {\n  background: #1b1d21;\n  color: white;\n}\n.status-tabs-section {\n  background: white;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-bottom: 0.75rem;\n}\n.status-tabs-container {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.35rem;\n}\n.status-tab {\n  display: flex;\n  align-items: center;\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active {\n  background: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab .badge {\n  font-size: 0.6rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.status-tab.active .badge {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.results-summary {\n  background-color: #f8f9fa;\n  padding: 0.5rem 0.75rem;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n  font-size: 0.7rem;\n}\n.results-summary .form-select-sm {\n  padding: 0.25rem 0.4rem;\n  font-size: 0.7rem;\n  border-radius: 4px;\n}\n.tasks-cards-container {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  padding: 0.5rem;\n}\n.tasks-grid {\n  --bs-gutter-x: 0.8rem;\n  --bs-gutter-y: 0.8rem;\n}\n.task-card {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 18px;\n  transition: all 0.25s ease;\n  height: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem 1.1rem;\n  box-shadow: 0 12px 28px -18px rgba(15, 23, 42, 0.25);\n  position: relative;\n  overflow: hidden;\n}\n.task-card:hover {\n  border-color: rgba(182, 138, 53, 0.45);\n  box-shadow: 0 28px 48px -20px rgba(15, 23, 42, 0.35);\n  transform: translateY(-4px);\n}\n.task-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.header-main {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n.task-title {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 0.9rem;\n  line-height: 1.3;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n}\n.task-subtitle {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  letter-spacing: 0.01em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.task-badges {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.task-card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n  flex: 1;\n}\n.task-description {\n  font-size: 0.75rem;\n  line-height: 1.4;\n  color: #475569;\n  background: rgba(241, 245, 249, 0.6);\n  border-radius: 12px;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid rgba(148, 163, 184, 0.15);\n}\n.task-description p {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  line-clamp: 3;\n  word-wrap: break-word;\n}\n.task-info-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.info-row {\n  display: flex;\n  gap: 0.6rem;\n  flex-wrap: nowrap;\n}\n.info-row.two-column .info-chip {\n  flex: 1 1 0;\n}\n.info-row.single-column .info-chip {\n  flex: 1 1 100%;\n}\n.info-chip {\n  background: rgba(248, 250, 252, 0.85);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 12px;\n  padding: 0.55rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n@media (max-width: 768px) {\n  .info-row {\n    flex-direction: column;\n  }\n  .tasks-grid > [class*=col-] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n@media (max-width: 575px) {\n  .tasks-grid > [class*=col-] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n.chip-label {\n  font-size: 0.68rem;\n  color: #64748b;\n  font-weight: 500;\n  letter-spacing: 0.01em;\n}\n.chip-value {\n  font-size: 0.75rem;\n  color: #1f2937;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.task-card-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.task-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n}\n.icon-action {\n  width: 34px;\n  height: 34px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fafc;\n  color: #0f172a;\n  transition: all 0.2s ease;\n  padding: 0;\n}\n.icon-action svg {\n  pointer-events: none;\n}\n.icon-action:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 18px -10px rgba(15, 23, 42, 0.22);\n}\n.icon-action.view-action {\n  border-color: rgba(38, 114, 209, 0.18);\n  background: rgba(38, 114, 209, 0.08);\n  color: #2563eb;\n}\n.icon-action.edit-action {\n  border-color: rgba(182, 138, 53, 0.2);\n  background: rgba(182, 138, 53, 0.12);\n  color: #b68a35;\n}\n.icon-action.delete-action {\n  border-color: rgba(220, 38, 38, 0.18);\n  background: rgba(220, 38, 38, 0.08);\n  color: #dc2626;\n}\n.icon-action.view-action:hover {\n  border-color: rgba(38, 114, 209, 0.4);\n}\n.icon-action.edit-action:hover {\n  border-color: rgba(182, 138, 53, 0.45);\n}\n.icon-action.delete-action:hover {\n  border-color: rgba(220, 38, 38, 0.4);\n}\n.badge {\n  font-size: 0.65rem;\n  padding: 0.25rem 0.55rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.priority-high {\n  background-color: #dc3545;\n  color: white;\n}\n.priority-medium {\n  background-color: #b68a35;\n  color: white;\n}\n.priority-low {\n  background-color: #28a745;\n  color: white;\n}\n.status-new {\n  background-color: #6c757d;\n  color: white;\n}\n.status-inProgress {\n  background-color: #d87e37;\n  color: white;\n}\n.status-done {\n  background-color: #28a745;\n  color: white;\n}\n.status-stopped {\n  background-color: #464545;\n  color: white;\n}\n.status-late {\n  background-color: #b45253;\n  color: white;\n}\n.status-returned {\n  background-color: #78260d;\n  color: white;\n}\n.status-review {\n  background-color: #d4aa3a;\n  color: white;\n}\n.bg-primary {\n  background-color: #b68a35 !important;\n}\n.bg-secondary {\n  background-color: #555555 !important;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.task-actions .btn-outline-primary {\n  color: #92722a;\n  border: 1px solid #92722a;\n  background: #fff;\n  transition: all 0.3s ease;\n}\n.task-actions .btn-outline-primary:hover {\n  background-color: #d4af5f;\n  color: white;\n}\n.task-actions .btn-outline-secondary {\n  color: #7c5e24;\n  border: 1px solid #7c5e24;\n  background: #f2ecce;\n  transition: all 0.3s ease;\n}\n.task-actions .btn-outline-secondary:hover {\n  background-color: #d4af5f;\n  color: white;\n}\n.task-actions .btn-outline-danger {\n  background-color: #ffffff;\n  color: #d22626;\n  border: 1px solid #d22626;\n}\n.task-actions .btn-outline-danger:hover {\n  background-color: #d22626 !important;\n  color: #ffffff;\n  border-color: #d22626 !important;\n}\n.task-actions .btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.task-actions .btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.25);\n}\n.task-actions .btn i {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.task-actions .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.task-actions .btn.loading {\n  position: relative;\n  color: transparent;\n}\n.task-actions .btn.loading::after {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  border: 2px solid transparent;\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: button-spin 1s linear infinite;\n}\n@keyframes button-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  padding: 3rem 2rem;\n}\n.empty-icon {\n  opacity: 0.5;\n}\n.pagination-container {\n  margin-top: 2rem;\n}\n.pagination {\n  margin-bottom: 0;\n}\n.page-link {\n  color: #92722a;\n  border: 1px solid #f2ecce;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  font-size: 0.7rem;\n  line-height: 1.25;\n  background-color: #fff;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  border-radius: 5px;\n}\n.page-link:hover {\n  color: #b68a35;\n  background-color: #f2ecce;\n  border-color: #f2ecce;\n}\n.page-item.active .page-link {\n  background-color: #b68a35;\n  color: white;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #f2ecce;\n  cursor: not-allowed;\n}\n.btn {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .filter-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .filter-actions {\n    grid-column: 1 / -1;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 1024px) {\n  .task-actions {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    gap: 0.75rem;\n  }\n}\n@media (max-width: 1400px) and (min-width: 1025px) {\n  .all-tasks-container {\n    padding: 0 0.4rem;\n  }\n  .all-tasks-title {\n    font-size: 1.15rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .filter-row {\n    gap: 0.65rem;\n  }\n  .filter-group .form-label {\n    font-size: 0.75rem;\n  }\n  .filter-group .form-control {\n    padding: 0.4rem 0.55rem;\n    font-size: 0.78rem;\n  }\n  .filter-actions .btn {\n    padding: 0.45rem 0.85rem;\n    font-size: 0.78rem;\n  }\n  .status-tabs-section {\n    padding: 0.5rem 0.85rem;\n  }\n  .status-tab {\n    padding: 0.35rem 0.45rem;\n    font-size: 0.58rem;\n  }\n  .status-tab .badge {\n    font-size: 0.6rem;\n  }\n  .results-summary {\n    padding: 0.7rem;\n  }\n  .tasks-cards-container {\n    padding: 0.6rem;\n  }\n  .task-card .card-header {\n    padding: 0.5rem 0.6rem;\n  }\n  .task-card .card-body {\n    padding: 0.55rem 0.6rem 0.6rem;\n  }\n  .task-title {\n    font-size: 0.85rem;\n  }\n  .task-description {\n    font-size: 0.72rem;\n  }\n  .task-info-item {\n    font-size: 0.68rem;\n  }\n  .badge {\n    font-size: 0.6rem;\n    padding: 0.25rem 0.5rem;\n  }\n  .task-actions {\n    gap: 0.35rem;\n    padding-top: 0.55rem;\n  }\n  .task-actions .btn {\n    font-size: 0.64rem;\n    padding: 0.35rem 0.7rem;\n    min-width: 64px;\n  }\n  .action-buttons-row .btn {\n    padding: 0.5rem 1rem;\n    font-size: 0.75rem;\n    min-width: 108px;\n  }\n}\n@media (max-width: 1400px) {\n  .all-tasks-container {\n    padding: 0.75rem;\n  }\n  .modal-dialog {\n    margin-top: 10% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal .modal-dialog {\n    max-width: 95vw;\n    margin: 1% auto;\n  }\n  .info-grid {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .all-tasks-container {\n    padding: 0.5rem;\n  }\n  .modal-dialog {\n    margin-top: 20% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal .modal-dialog {\n    max-width: 95vw;\n    margin: 1% auto;\n  }\n  .task-title-main {\n    font-size: 1.5rem;\n  }\n  .task-details-header {\n    padding: 1.5rem;\n  }\n  .task-info-section,\n  .task-description-section,\n  .task-actions-section-bottom {\n    padding: 1.5rem;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item {\n    padding: 1rem;\n  }\n  .action-buttons-row {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .action-buttons-row .btn {\n    width: 100%;\n    min-width: auto;\n  }\n  .filter-row {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .filter-actions {\n    width: 100%;\n    flex-direction: column;\n  }\n  .filter-actions .btn {\n    width: 100%;\n  }\n  .results-summary {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .task-card .card-header {\n    padding: 0.55rem 0.7rem;\n  }\n  .task-card .card-body {\n    padding: 0.65rem 0.7rem 0.75rem;\n  }\n  .task-title {\n    font-size: 0.9rem;\n  }\n  .task-badges {\n    gap: 0.3rem;\n  }\n  .task-actions {\n    flex-direction: row;\n    gap: 0.6rem;\n  }\n  .task-actions .btn {\n    width: 100%;\n    min-width: auto;\n  }\n}\n@media (max-width: 576px) {\n  .all-tasks-container {\n    padding: 0.5rem;\n  }\n  .modal-dialog {\n    margin-top: 20% !important;\n    max-width: 90vw !important;\n  }\n  .task-details-modal .modal-dialog {\n    max-width: 98vw;\n    margin: 0.5% auto;\n  }\n  .task-title-main {\n    font-size: 1.25rem;\n  }\n  .task-details-header {\n    padding: 1rem;\n  }\n  .task-info-section,\n  .task-description-section,\n  .task-actions-section-bottom {\n    padding: 1rem;\n  }\n  .info-item {\n    padding: 0.75rem;\n  }\n  .section-title {\n    font-size: 1rem;\n  }\n  .info-label,\n  .info-value {\n    font-size: 0.875rem;\n  }\n  .action-buttons-row .btn {\n    font-size: 0.8rem;\n    padding: 0.6rem 0.8rem;\n  }\n  .all-tasks-title {\n    font-size: 1.2rem;\n  }\n  .task-card .card-header {\n    padding: 0.5rem 0.65rem;\n  }\n  .task-card .card-body {\n    padding: 0.6rem 0.65rem 0.7rem;\n  }\n  .task-title {\n    font-size: 0.85rem;\n  }\n  .badge {\n    font-size: 0.6rem;\n    padding: 0.22rem 0.45rem;\n  }\n  .task-info-item {\n    font-size: 0.7rem;\n  }\n  .stat-item {\n    font-size: 0.8rem;\n  }\n  .task-actions {\n    gap: 0.5rem;\n  }\n  .task-actions .btn {\n    font-size: 0.75rem;\n    padding: 0.4rem 0.8rem;\n  }\n}\n@media (max-width: 480px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .info-item {\n    width: 80% !important;\n  }\n}\n@media (max-width: 400px) {\n  .info-item {\n    width: 60% !important;\n  }\n}\n.modal {\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog {\n  margin: 7% auto;\n}\n.modal-content {\n  border: none;\n  overflow: hidden;\n  border-radius: 12px !important;\n}\n.modal-header {\n  background: #d4af5f !important;\n  border-bottom: none;\n  padding: 1.5rem 2rem;\n  position: relative;\n}\n.modal-header .modal-title {\n  color: white;\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.modal-header .btn-close {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 15%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.modal-header .btn-close:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-header .btn-close::before {\n  content: "\\d7";\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-body {\n  padding: 2rem;\n  background: #fafafa;\n}\n.modal-footer {\n  background: white;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem 2rem;\n  gap: 0.75rem;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir=ltr] .modal-header {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl] .modal-header {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl] .modal-header .modal-title {\n  text-align: right;\n  margin-right: 0;\n  margin-left: auto;\n  order: 2;\n}\n[dir=ltr] .modal-header .modal-title {\n  text-align: left;\n  margin-left: 0;\n  margin-right: auto;\n  order: 2;\n}\n[dir=rtl] .modal-header .btn-close {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=ltr] .modal-header .btn-close {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=rtl] .modal-footer {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .modal-footer {\n  flex-direction: row-reverse;\n}\n.modal-body .form-label {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.modal-body .form-control,\n.modal-body .form-select {\n  border: 2px solid #e9ecef;\n  font: 1em sans-serif;\n  padding: 0.75rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.modal-body .form-control:focus,\n.modal-body .form-select:focus {\n  border-color: #b68a35;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.task-details-modal .modal-dialog {\n  max-width: 1200px;\n  margin: 2% auto;\n}\n.task-details-modal .modal-content {\n  min-height: 80vh;\n}\n.task-details-container {\n  background: white;\n  border-radius: 12px;\n  padding: 0;\n}\n.task-details-header {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #dee2e6;\n}\n.task-title-main {\n  color: #2c3e50;\n  font-weight: 700;\n  font-size: 1.75rem;\n  margin-bottom: 1rem;\n  line-height: 1.3;\n}\n.task-status-priority {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.task-status-priority .badge {\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title {\n  color: #495057;\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e9ecef;\n  display: flex;\n  align-items: center;\n}\n.section-title i {\n  color: #b68a35;\n  font-size: 1.2rem;\n}\n.task-info-section {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #e9ecef;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.info-item {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.info-item:hover {\n  border-color: #b68a35;\n  box-shadow: 0 2px 8px rgba(182, 138, 53, 0.1);\n  transform: translateY(-2px);\n}\n.info-label {\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n}\n.info-label i {\n  color: #b68a35;\n  font-size: 1rem;\n  width: 20px;\n}\n.info-value {\n  color: #2c3e50;\n  font-weight: 600;\n  font-size: 1rem;\n  word-break: break-word;\n}\n.task-description-section {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  border: 1px solid #e9ecef;\n}\n.description-content {\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n.description-content p {\n  color: #495057;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin: 0;\n  white-space: pre-wrap;\n}\n.task-actions-section-bottom {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 2rem;\n  border: 1px solid #e9ecef;\n  margin-top: 2rem;\n}\n.action-buttons-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.action-buttons-row .btn {\n  font-weight: 500;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 140px;\n}\n.action-buttons-row .btn i {\n  font-size: 1rem;\n}\n.action-buttons-row .btn-outline-primary {\n  color: #b68a35;\n  border-color: #b68a35;\n  background: rgba(182, 138, 53, 0.1);\n}\n.action-buttons-row .btn-outline-primary:hover {\n  background-color: #b68a35;\n  border-color: #b68a35;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(182, 138, 53, 0.3);\n}\n.action-buttons-row .btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n}\n.action-buttons-row .btn-outline-danger:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);\n}\n.action-buttons-row .btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.action-buttons-row .btn-secondary:hover {\n  background-color: #5a6268;\n  border-color: #545b62;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);\n}\n[dir=rtl] .page-link {\n  margin-left: 0;\n  margin-right: -1px;\n}\n[dir=rtl] .me-1,\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.25rem !important;\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .text-end {\n  text-align: right !important;\n}\n[dir=rtl] .text-center {\n  text-align: center !important;\n}\n.employee-search-container {\n  position: relative;\n}\n.employee-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list {\n  padding: 8px 0;\n}\n.employee-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item:hover {\n  background-color: #f8f9fa;\n}\n.employee-item:last-child {\n  border-bottom: none;\n}\n.show-all-option {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.show-all-option:hover {\n  background-color: #e9ecef;\n}\n.employee-info {\n  flex: 1;\n  min-width: 0;\n}\n.employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-department {\n  font-size: 12px;\n  color: #6c757d;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-employee {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-employee-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-employee {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-employee:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n.manager-search-container {\n  position: relative;\n}\n.manager-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.manager-list {\n  padding: 8px 0;\n}\n.manager-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.manager-item:hover {\n  background-color: #f8f9fa;\n}\n.manager-item:last-child {\n  border-bottom: none;\n}\n.manager-info {\n  flex: 1;\n  min-width: 0;\n}\n.manager-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-manager {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-manager-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-manager {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-manager:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n::ng-deep .filter-group .ng-select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.5;\n  display: block;\n}\n::ng-deep .filter-group .ng-select .ng-select-container {\n  border: 1px solid #e9ecef !important;\n  border-radius: 6px !important;\n  min-height: 38px !important;\n  background-color: #fff !important;\n  padding: 0 12px !important;\n  cursor: text !important;\n  display: flex !important;\n  align-items: center !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  flex: 1 !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder,\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value) {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) .ng-placeholder,\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder,\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value),\n::ng-deep .filter-group .ng-select[ng-reflect-model]:not([ng-reflect-model=""]) .ng-select-container .ng-value-container .ng-placeholder,\n::ng-deep .filter-group .ng-select.ng-select-has-value .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value:not(.ng-value-disabled)) .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-has-value .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-focused .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-opened .ng-select-container .ng-value-container .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-input input:not(:placeholder-shown) ~ .ng-placeholder,\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder {\n  opacity: 0 !important;\n  display: none !important;\n  visibility: hidden !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  width: 100% !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-input input {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  background: transparent !important;\n  height: auto !important;\n  line-height: 1.5 !important;\n  width: 100% !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  z-index: 10 !important;\n  background-color: transparent !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n  overflow: visible !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  flex: 0 1 auto !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  position: relative !important;\n  z-index: 11 !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container:not(:empty) .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container:has(.ng-value) > .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value ~ .ng-placeholder,\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-placeholder:has(+ .ng-value) {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-value-container {\n  min-width: 0 !important;\n  flex: 1 1 auto !important;\n  overflow: visible !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-arrow-wrapper {\n  width: 25px !important;\n  height: 25px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin-left: 8px !important;\n}\n::ng-deep .filter-group .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: #6c757d transparent transparent !important;\n  border-style: solid !important;\n  border-width: 5px 5px 2.5px !important;\n  height: 0 !important;\n  width: 0 !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: transparent transparent #6c757d !important;\n  border-width: 0 5px 5px !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-focused .ng-select-container {\n  border-color: #b68a35 !important;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-disabled .ng-select-container {\n  background-color: #f5f5f5 !important;\n  cursor: not-allowed !important;\n}\n::ng-deep .filter-group .ng-dropdown-panel {\n  border: 1px solid #ddd !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n  background: white !important;\n  margin-top: 4px !important;\n  z-index: 10000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n::ng-deep .filter-group .ng-dropdown-panel .ng-dropdown-panel-items {\n  max-height: 300px !important;\n  overflow-y: auto !important;\n}\n::ng-deep .filter-group .ng-select .ng-option {\n  padding: 12px 16px !important;\n  border-bottom: 1px solid #f0f0f0 !important;\n  cursor: pointer !important;\n  font-size: 14px !important;\n  color: #333 !important;\n  display: block !important;\n}\n::ng-deep .filter-group .ng-select .ng-option:last-child {\n  border-bottom: none !important;\n}\n::ng-deep .filter-group .ng-select .ng-option:hover {\n  background-color: #f8f9fa !important;\n}\n::ng-deep .filter-group .ng-select .ng-option.ng-option-selected {\n  background-color: #e9ecef !important;\n  color: #333 !important;\n}\n::ng-deep .filter-group .ng-select .ng-option.ng-option-marked {\n  background-color: #f8f9fa !important;\n}\n::ng-deep .filter-group .ng-select .ng-option.ng-option-disabled {\n  color: #999 !important;\n  cursor: not-allowed !important;\n}\n::ng-deep .filter-group .ng-select .ng-clear-wrapper {\n  width: 20px !important;\n  height: 20px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  margin-left: 8px !important;\n}\n::ng-deep .filter-group .ng-select .ng-clear-wrapper .ng-clear {\n  font-size: 18px !important;\n  color: #999 !important;\n  line-height: 1 !important;\n}\n::ng-deep .filter-group .ng-select .ng-clear-wrapper:hover .ng-clear {\n  color: #333 !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {\n  display: none !important;\n}\n::ng-deep .filter-group .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #f3f3f3 !important;\n  border-top: 2px solid #b68a35 !important;\n  border-radius: 50% !important;\n  animation: spin 1s linear infinite !important;\n  margin-left: 8px !important;\n}\n::ng-deep .filter-group .employee-option {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n::ng-deep .filter-group .employee-option .employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n::ng-deep .filter-group .employee-option .employee-department {\n  font-size: 12px;\n  color: #6c757d;\n}\n::ng-deep .modal-body .ng-select {\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.5;\n  display: block;\n}\n::ng-deep .modal-body .ng-select .ng-select-container {\n  border: 1px solid #e9ecef !important;\n  border-radius: 6px !important;\n  min-height: 38px !important;\n  background-color: #fff !important;\n  padding: 0 12px !important;\n  cursor: text !important;\n  display: flex !important;\n  align-items: center !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  flex: 1 !important;\n  min-width: 0 !important;\n  overflow: visible !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container .ng-value {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  z-index: 10 !important;\n  background-color: transparent !important;\n  max-width: none !important;\n  overflow: visible !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  flex: 0 1 auto !important;\n  min-width: 0 !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container .ng-value .ng-value-label {\n  display: block !important;\n  line-height: 1.5 !important;\n  white-space: nowrap !important;\n  word-wrap: normal !important;\n  overflow: visible !important;\n  text-overflow: clip !important;\n  max-width: none !important;\n  width: auto !important;\n  min-width: 0 !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container .ng-placeholder {\n  display: none !important;\n  opacity: 0 !important;\n  visibility: hidden !important;\n  height: 0 !important;\n  width: 0 !important;\n  max-height: 0 !important;\n  max-width: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  left: -9999px !important;\n  top: -9999px !important;\n  z-index: -1 !important;\n  pointer-events: none !important;\n  font-size: 0 !important;\n  line-height: 0 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container .ng-input {\n  padding: 0 !important;\n  min-height: 36px !important;\n  display: flex !important;\n  align-items: center !important;\n  position: relative !important;\n  width: 100% !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-value-container .ng-input input {\n  font-size: 14px !important;\n  color: #333 !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n  background: transparent !important;\n  height: auto !important;\n  line-height: 1.5 !important;\n  width: 100% !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-arrow-wrapper {\n  width: 25px !important;\n  height: 25px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin-left: 8px !important;\n}\n::ng-deep .modal-body .ng-select .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: #6c757d transparent transparent !important;\n  border-style: solid !important;\n  border-width: 5px 5px 2.5px !important;\n  height: 0 !important;\n  width: 0 !important;\n}\n::ng-deep .modal-body .ng-select.ng-select-opened .ng-select-container .ng-arrow-wrapper .ng-arrow {\n  border-color: transparent transparent #6c757d !important;\n  border-width: 0 5px 5px !important;\n}\n::ng-deep .modal-body .ng-select.ng-select-focused .ng-select-container {\n  border-color: #b68a35 !important;\n  box-shadow: 0 0 0 0.15rem rgba(212, 170, 58, 0.15) !important;\n}\n::ng-deep .modal-body .ng-select.ng-select-disabled .ng-select-container {\n  background-color: #f5f5f5 !important;\n  cursor: not-allowed !important;\n}\n::ng-deep .modal-body .ng-dropdown-panel {\n  border: 1px solid #ddd !important;\n  border-radius: 8px !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n  background: white !important;\n  margin-top: 4px !important;\n  z-index: 10000 !important;\n  position: absolute !important;\n  display: block !important;\n}\n::ng-deep .modal-body .ng-dropdown-panel .ng-dropdown-panel-items {\n  max-height: 300px !important;\n  overflow-y: auto !important;\n}\n::ng-deep .modal-body .ng-select .ng-option {\n  padding: 12px 16px !important;\n  border-bottom: 1px solid #f0f0f0 !important;\n  cursor: pointer !important;\n  font-size: 14px !important;\n  color: #333 !important;\n  display: block !important;\n}\n::ng-deep .modal-body .ng-select .ng-option:last-child {\n  border-bottom: none !important;\n}\n::ng-deep .modal-body .ng-select .ng-option:hover {\n  background-color: #f8f9fa !important;\n}\n::ng-deep .modal-body .ng-select .ng-option.ng-option-selected {\n  background-color: #e9ecef !important;\n  color: #333 !important;\n}\n::ng-deep .modal-body .ng-select .ng-option.ng-option-marked {\n  background-color: #f8f9fa !important;\n}\n::ng-deep .modal-body .ng-select .ng-option.ng-option-disabled {\n  color: #999 !important;\n  cursor: not-allowed !important;\n}\n::ng-deep .modal-body .ng-select .ng-clear-wrapper {\n  width: 20px !important;\n  height: 20px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  cursor: pointer !important;\n  margin-left: 8px !important;\n}\n::ng-deep .modal-body .ng-select .ng-clear-wrapper .ng-clear {\n  font-size: 18px !important;\n  color: #999 !important;\n  line-height: 1 !important;\n}\n::ng-deep .modal-body .ng-select .ng-clear-wrapper:hover .ng-clear {\n  color: #333 !important;\n}\n::ng-deep .modal-body .ng-select.ng-select-loading .ng-select-container .ng-arrow-wrapper {\n  display: none !important;\n}\n::ng-deep .modal-body .ng-select.ng-select-loading .ng-select-container .ng-spinner-loader {\n  width: 20px !important;\n  height: 20px !important;\n  border: 2px solid #f3f3f3 !important;\n  border-top: 2px solid #b68a35 !important;\n  border-radius: 50% !important;\n  animation: spin 1s linear infinite !important;\n  margin-left: 8px !important;\n}\n::ng-deep .modal-body .employee-option {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n::ng-deep .modal-body .employee-option .employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n}\n::ng-deep .modal-body .employee-option .employee-department {\n  font-size: 12px;\n  color: #6c757d;\n}\n/*# sourceMappingURL=all-tasks.component-VYPLAUJR.css.map */\n'] }]
  }], () => [{ type: TasksService }, { type: UsersService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }, { type: Router }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllTasksComponent, { className: "AllTasksComponent", filePath: "src/app/components/tasks/all-tasks/all-tasks.component.ts", lineNumber: 27 });
})();

// src/app/components/tasks/task-details/task-details.component.ts
var _c04 = ["confirmationModal"];
function TaskDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function TaskDetailsComponent_div_2_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 100);
  }
}
function TaskDetailsComponent_div_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 101);
  }
}
function TaskDetailsComponent_div_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noAttachments"), " ");
  }
}
function TaskDetailsComponent_div_2_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 107);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_div_55_Template_button_click_6_listener() {
      const attachment_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAttachment(attachment_r6.id));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attachment_r6.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", attachment_r6.uploadedByName, " \u2022 ", ctx_r1.formatDate(attachment_r6.uploadedAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.delete"), " ");
  }
}
function TaskDetailsComponent_div_2_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noUpdates"), " ");
  }
}
function TaskDetailsComponent_div_2_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const update_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(update_r7.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", update_r7.createdByName, " \u2022 ", ctx_r1.formatDate(update_r7.createdAt));
  }
}
function TaskDetailsComponent_div_2_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.noFeedback"), " ");
  }
}
function TaskDetailsComponent_div_2_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feedback_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r8.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r8.employeeName, " \u2022 ", ctx_r1.formatDate(feedback_r8.createdAt));
  }
}
function TaskDetailsComponent_div_2_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_button_77_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editTask());
    });
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.edit"), " ");
  }
}
function TaskDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "button", 64);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275template(3, TaskDetailsComponent_div_2_i_3_Template, 1, 0, "i", 65)(4, TaskDetailsComponent_div_2_i_4_Template, 1, 0, "i", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 68)(9, "div", 69)(10, "div", 70)(11, "h2", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 72)(14, "span", 73);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 73);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 74)(19, "div", 75)(20, "div", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 77);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 75)(25, "div", 76);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 77);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 75)(30, "div", 76);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 77);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 75)(35, "div", 76);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 77);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 70)(40, "h3", 78);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 79);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 70)(45, "div", 80)(46, "h3", 78);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 81);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const fileInput_r4 = \u0275\u0275reference(52);
      return \u0275\u0275resetView(fileInput_r4.click());
    });
    \u0275\u0275element(49, "i", 82);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 83, 1);
    \u0275\u0275listener("change", function TaskDetailsComponent_div_2_Template_input_change_51_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 84);
    \u0275\u0275template(54, TaskDetailsComponent_div_2_div_54_Template, 2, 1, "div", 85)(55, TaskDetailsComponent_div_2_div_55_Template, 8, 4, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 70)(57, "div", 80)(58, "h3", 78);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 81);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddUpdateModal = true);
    });
    \u0275\u0275element(61, "i", 82);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 87);
    \u0275\u0275template(64, TaskDetailsComponent_div_2_div_64_Template, 2, 1, "div", 85)(65, TaskDetailsComponent_div_2_div_65_Template, 5, 3, "div", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 70)(67, "h3", 78);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 89);
    \u0275\u0275template(70, TaskDetailsComponent_div_2_div_70_Template, 2, 1, "div", 85)(71, TaskDetailsComponent_div_2_div_71_Template, 5, 3, "div", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 91)(73, "div", 92)(74, "h3", 93);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 94);
    \u0275\u0275template(77, TaskDetailsComponent_div_2_button_77_Template, 3, 1, "button", 95);
    \u0275\u0275elementStart(78, "button", 96);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showStatusUpdateModal = true);
    });
    \u0275\u0275element(79, "i", 97);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "button", 98);
    \u0275\u0275listener("click", function TaskDetailsComponent_div_2_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteModal());
    });
    \u0275\u0275element(82, "i", 99);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isRTL());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isRTL());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.back"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task_details"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.task.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.task.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(ctx_r1.task.status), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPriorityClass(ctx_r1.task.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityText(ctx_r1.task.priority), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.createdBy"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.task.createdByName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.assignee"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.task.assigneeName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.createdAt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.task.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.dueDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.task.dueDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.task.description || ctx_r1.translate("tasks.task.noDescription"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.attachments"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.task.addAttachment"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.taskAttachments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.taskAttachments);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.updatesTimeline"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.addUpdate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.taskUpdates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.taskUpdates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.task.feedback"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.taskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.taskFeedback);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.actions.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("appHasPermission", "task.index");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.changeStatus"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.actions.delete"), " ");
  }
}
function TaskDetailsComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.new"));
  }
}
function TaskDetailsComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.inProgress"));
  }
}
function TaskDetailsComponent_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.done"));
  }
}
function TaskDetailsComponent_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.stopped"));
  }
}
function TaskDetailsComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.late"));
  }
}
function TaskDetailsComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.returned"));
  }
}
function TaskDetailsComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.status.review"));
  }
}
function TaskDetailsComponent_small_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.titleRequired") || "Title is required", " ");
  }
}
function TaskDetailsComponent_ng_template_93_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().item;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.jobTitle, " ");
  }
}
function TaskDetailsComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TaskDetailsComponent_ng_template_93_div_3_Template, 2, 1, "div", 123);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r10.jobTitle);
  }
}
function TaskDetailsComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275element(1, "i", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.noEmployeesFound") || "No employees found", " ");
  }
}
function TaskDetailsComponent_small_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.form.assigneeRequired") || "Please select an employee", " ");
  }
}
var TaskDetailsComponent = class _TaskDetailsComponent {
  route;
  router;
  location;
  tasksService;
  translationService;
  langService;
  fb;
  authService;
  employeesService;
  cdr;
  confirmationModal;
  destroy$ = new Subject();
  taskId;
  task = null;
  taskAttachments = [];
  taskUpdates = [];
  taskFeedback = [];
  isLoading = false;
  currentLang = "en";
  showStatusUpdateModal = false;
  showAddUpdateModal = false;
  showDeleteConfirmModal = false;
  showEditTaskModal = false;
  selectedStatus = "";
  statusNote = "";
  statusUpdateForm;
  addUpdateForm;
  editTaskForm;
  // Edit modal employee search
  editTaskModalEmployees = [];
  filteredEditTaskModalEmployees = [];
  showEditTaskModalEmployeeDropdown = false;
  isSearchingEditTaskEmployees = false;
  editTaskEmployeeSearchError = null;
  currentTaskAttachments = [];
  selectedFiles = [];
  isUploadingAttachments = false;
  STATUS_MAP = {
    0: "new",
    1: "inProgress",
    2: "done",
    3: "stopped",
    4: "late",
    5: "returned",
    6: "review"
  };
  PRIORITY_MAP = {
    1: "high",
    2: "medium",
    3: "low"
  };
  constructor(route, router, location, tasksService, translationService, langService, fb, authService, employeesService, cdr) {
    this.route = route;
    this.router = router;
    this.location = location;
    this.tasksService = tasksService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.authService = authService;
    this.employeesService = employeesService;
    this.cdr = cdr;
    this.initializeForms();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.taskId = +params["id"];
      this.loadTaskDetails();
    });
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }
  initializeForms() {
    this.statusUpdateForm = this.fb.group({
      status: ["", Validators.required],
      note: [""]
    });
    this.addUpdateForm = this.fb.group({
      note: ["", Validators.required]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(40)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      assigneeSearch: [""],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
  }
  loadTaskDetails() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield Promise.all([
          this.loadTask(),
          this.loadTaskAttachments(),
          this.loadTaskUpdates(),
          this.loadTaskFeedback()
        ]);
      } catch (error) {
        console.error("Error loading task details:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadTask() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskById(this.taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.task = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadTaskAttachments() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskAttachments(this.taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.taskAttachments = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadTaskUpdates() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskUpdates(this.taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.taskUpdates = response.data;
            }
            resolve();
          },
          error: reject
        });
      });
    });
  }
  loadTaskFeedback() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getTaskFeedback(this.taskId).subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.taskFeedback = response.data;
            } else {
              this.taskFeedback = [];
            }
            resolve();
          },
          error: (error) => {
            console.error("Error loading task feedback:", error);
            this.taskFeedback = [];
            resolve();
          }
        });
      });
    });
  }
  updateTaskStatus() {
    return __async(this, null, function* () {
      if (!this.selectedStatus) {
        console.error("No status selected");
        return;
      }
      if (!this.task) {
        console.error("No task found");
        return;
      }
      const newStatus = Number(this.selectedStatus);
      if (newStatus === this.task.status) {
        this.showStatusUpdateModal = false;
        this.selectedStatus = "";
        this.statusNote = "";
        return;
      }
      const statusUpdate = {
        status: newStatus,
        note: this.statusNote || ""
      };
      try {
        console.log("Sending status update:", statusUpdate);
        const response = yield this.tasksService.updateTaskStatus(this.task.id, statusUpdate).toPromise();
        if (response && response.success) {
          this.showStatusUpdateModal = false;
          this.selectedStatus = "";
          this.statusNote = "";
          yield this.loadTaskDetails();
        } else {
        }
      } catch (error) {
      }
    });
  }
  addTaskUpdate() {
    return __async(this, null, function* () {
      if (this.addUpdateForm.valid && this.task) {
        const formData = this.addUpdateForm.value;
        const taskUpdate = {
          note: formData.note
        };
        try {
          const response = yield this.tasksService.addTaskUpdate(this.task.id, taskUpdate).toPromise();
          if (response.success) {
            this.showAddUpdateModal = false;
            this.addUpdateForm.reset();
            yield this.loadTaskUpdates();
          }
        } catch (error) {
          console.error("Error adding task update:", error);
        }
      }
    });
  }
  deleteAttachment(attachmentId) {
    return __async(this, null, function* () {
      try {
        yield this.tasksService.deleteAttachment(this.taskId, attachmentId).toPromise();
        yield this.loadTaskAttachments();
      } catch (error) {
        console.error("Error deleting attachment:", error);
      }
    });
  }
  onFileSelected(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.uploadAttachment(files[0]);
    }
  }
  uploadAttachment(file) {
    return __async(this, null, function* () {
      try {
        const attachment = {
          file,
          description: "",
          documentSource: 0
        };
        yield this.tasksService.addTaskAttachment(this.taskId, attachment).toPromise();
        yield this.loadTaskAttachments();
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    });
  }
  goBack() {
    this.location.back();
  }
  editTask() {
    if (this.task) {
      this.openEditTaskModal(this.task);
    }
  }
  openEditTaskModal(task) {
    this.showEditTaskModal = true;
    this.editTaskModalEmployees = [];
    this.filteredEditTaskModalEmployees = [];
    this.showEditTaskModalEmployeeDropdown = false;
    this.editTaskEmployeeSearchError = null;
    this.editTaskForm.patchValue({
      title: task.title,
      description: task.description,
      assigneeUserId: task.assigneeUserId,
      assigneeSearch: task.assigneeName || "",
      priority: task.priority,
      dueDate: this.formatDateForInput(task.dueDate),
      sourceType: task.sourceType || 0
    });
    this.loadEditTaskAttachments(task.id);
  }
  formatDateForInput(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  loadEditTaskAttachments(taskId) {
    return __async(this, null, function* () {
      try {
        const response = yield this.tasksService.getTaskAttachments(taskId).toPromise();
        if (response?.success && response.data) {
          this.currentTaskAttachments = response.data;
        }
      } catch (error) {
        console.error("Error loading task attachments:", error);
        this.currentTaskAttachments = [];
      }
    });
  }
  hasPermission(permission) {
    return this.authService.hasPermission(permission);
  }
  openDeleteModal() {
    this.showDeleteConfirmModal = true;
  }
  confirmDelete() {
    return __async(this, null, function* () {
      try {
        yield this.tasksService.deleteTask(this.taskId).toPromise();
        this.showDeleteConfirmModal = false;
        this.location.back();
      } catch (error) {
        console.error("Error deleting task:", error);
        this.showDeleteConfirmModal = false;
      }
    });
  }
  cancelDelete() {
    this.showDeleteConfirmModal = false;
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.langService.isRTL();
  }
  getStatusClass(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? `status-${statusKey}` : "";
  }
  getPriorityClass(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? `priority-${priorityKey}` : "";
  }
  getStatusText(status) {
    const statusKey = this.STATUS_MAP[status];
    return statusKey ? this.translate(`tasks.status.${statusKey}`) : "";
  }
  getPriorityText(priority) {
    const priorityKey = this.PRIORITY_MAP[priority];
    return priorityKey ? this.translate(`tasks.priority.${priorityKey}`) : "";
  }
  formatDate(dateString) {
    if (!dateString)
      return "";
    const date = new Date(dateString);
    return date.toLocaleDateString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  closeModal(modalName) {
    if (modalName === "showStatusUpdateModal") {
      this.showStatusUpdateModal = false;
      this.selectedStatus = "";
      this.statusNote = "";
    } else if (modalName === "showAddUpdateModal") {
      this.showAddUpdateModal = false;
    } else if (modalName === "showDeleteConfirmModal") {
      this.showDeleteConfirmModal = false;
    } else if (modalName === "showEditTaskModal") {
      this.showEditTaskModal = false;
      this.editTaskForm.reset();
      this.clearSelectedEditTaskModalEmployee();
    }
  }
  // Employee search for edit modal
  onEditTaskModalEmployeeSearch() {
    const searchTerm = this.editTaskForm.get("assigneeSearch")?.value || "";
    if (searchTerm && searchTerm.length >= 2) {
      this.isSearchingEditTaskEmployees = true;
      this.employeesService.searchEmployeeNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success && response.data && response.data.length > 0) {
            this.editTaskModalEmployees = response.data;
            this.filteredEditTaskModalEmployees = response.data;
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = null;
          } else {
            this.editTaskModalEmployees = [];
            this.filteredEditTaskModalEmployees = [];
            this.showEditTaskModalEmployeeDropdown = true;
            this.editTaskEmployeeSearchError = this.translate("tasks.form.noEmployeesFound");
          }
          this.isSearchingEditTaskEmployees = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error searching employees:", error);
          this.editTaskModalEmployees = [];
          this.filteredEditTaskModalEmployees = [];
          this.showEditTaskModalEmployeeDropdown = true;
          this.isSearchingEditTaskEmployees = false;
          this.editTaskEmployeeSearchError = this.translate("tasks.form.failedToSearchEmployees");
          this.cdr.detectChanges();
        }
      });
    } else if (searchTerm && searchTerm.length === 0) {
      if (this.editTaskModalEmployees.length > 0) {
        this.filteredEditTaskModalEmployees = this.editTaskModalEmployees;
        this.showEditTaskModalEmployeeDropdown = true;
      } else {
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = false;
      }
    } else if (searchTerm && searchTerm.length === 1) {
      if (this.editTaskModalEmployees.length > 0) {
        this.filteredEditTaskModalEmployees = this.editTaskModalEmployees.filter((emp) => emp.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || emp.jobTitle && emp.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()));
        this.showEditTaskModalEmployeeDropdown = this.filteredEditTaskModalEmployees.length > 0;
      } else {
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = false;
      }
    }
  }
  onEditTaskModalEmployeeSearchFocus() {
    if (this.editTaskModalEmployees.length > 0) {
      this.filteredEditTaskModalEmployees = this.editTaskModalEmployees;
      this.showEditTaskModalEmployeeDropdown = true;
    } else {
      this.loadAllEmployeesForEditTask();
    }
  }
  onEditTaskModalEmployeeSearchNgSelect(event) {
    const searchTerm = event.term || "";
    if (searchTerm && searchTerm.length >= 2) {
      this.isSearchingEditTaskEmployees = true;
      this.employeesService.searchEmployeeNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
        next: (response) => {
          if (response.success && response.data && response.data.length > 0) {
            this.editTaskModalEmployees = response.data;
          } else {
            this.editTaskModalEmployees = [];
          }
          this.isSearchingEditTaskEmployees = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error("Error searching employees:", error);
          this.editTaskModalEmployees = [];
          this.isSearchingEditTaskEmployees = false;
          this.cdr.detectChanges();
        }
      });
    } else if (searchTerm.length === 0) {
      this.loadAllEmployeesForEditTask();
    }
  }
  onEditTaskModalEmployeeSearchBlur() {
    setTimeout(() => {
      this.showEditTaskModalEmployeeDropdown = false;
    }, 200);
  }
  loadAllEmployeesForEditTask() {
    this.isSearchingEditTaskEmployees = true;
    this.employeesService.searchEmployeeNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.editTaskModalEmployees = response.data;
          this.filteredEditTaskModalEmployees = response.data;
          this.showEditTaskModalEmployeeDropdown = true;
          this.editTaskEmployeeSearchError = null;
        } else {
          this.editTaskModalEmployees = [];
          this.filteredEditTaskModalEmployees = [];
          this.showEditTaskModalEmployeeDropdown = true;
          this.editTaskEmployeeSearchError = this.translate("tasks.form.noEmployeesFound");
        }
        this.isSearchingEditTaskEmployees = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading employees:", error);
        this.editTaskModalEmployees = [];
        this.filteredEditTaskModalEmployees = [];
        this.showEditTaskModalEmployeeDropdown = true;
        this.isSearchingEditTaskEmployees = false;
        this.editTaskEmployeeSearchError = this.translate("tasks.form.failedToLoadEmployees");
        this.cdr.detectChanges();
      }
    });
  }
  selectEditTaskModalEmployee(employee, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.editTaskForm.get("assigneeUserId")?.setValue(employee.id);
    this.editTaskForm.get("assigneeSearch")?.setValue(employee.fullName);
    this.showEditTaskModalEmployeeDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedEditTaskModalEmployee() {
    const employeeId = this.editTaskForm.get("assigneeUserId")?.value;
    if (employeeId && this.editTaskModalEmployees.length > 0) {
      return this.editTaskModalEmployees.find((emp) => emp.id === employeeId) || null;
    }
    return null;
  }
  clearSelectedEditTaskModalEmployee() {
    this.editTaskForm.get("assigneeUserId")?.setValue("");
    this.editTaskForm.get("assigneeSearch")?.setValue("");
    this.showEditTaskModalEmployeeDropdown = false;
    this.editTaskModalEmployees = [];
    this.filteredEditTaskModalEmployees = [];
    this.editTaskEmployeeSearchError = null;
  }
  onSubmitEditTask() {
    return __async(this, null, function* () {
      if (this.editTaskForm.valid && this.task) {
        try {
          const formValue = this.editTaskForm.value;
          let formattedDueDate = formValue.dueDate;
          if (formattedDueDate && typeof formattedDueDate === "string") {
            if (formattedDueDate.includes("T") && !formattedDueDate.includes("Z")) {
              formattedDueDate = new Date(formattedDueDate).toISOString();
            }
          } else if (formattedDueDate instanceof Date) {
            formattedDueDate = formattedDueDate.toISOString();
          }
          const updateRequest = {
            title: formValue.title,
            description: formValue.description || "",
            assigneeUserId: formValue.assigneeUserId,
            priority: +formValue.priority,
            dueDate: String(formattedDueDate || ""),
            sourceType: formValue.sourceType || 0
          };
          yield this.tasksService.updateTask(this.task.id, updateRequest).toPromise();
          yield this.loadTaskDetails();
          this.closeModal("showEditTaskModal");
          if (this.confirmationModal) {
            const modalData = {
              title: this.translate("tasks.dialogs.updateSuccess"),
              message: this.translate("tasks.dialogs.updateSuccess"),
              confirmText: this.translate("common.ok"),
              cancelText: this.translate("common.close"),
              type: "info"
            };
            this.confirmationModal.show(modalData);
          }
        } catch (error) {
          console.error("Error updating task:", error);
          if (this.confirmationModal) {
            const modalData = {
              title: this.translate("tasks.dialogs.updateError"),
              message: this.translate("tasks.dialogs.updateError"),
              confirmText: this.translate("common.ok"),
              cancelText: this.translate("common.close"),
              type: "warning"
            };
            this.confirmationModal.show(modalData);
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function TaskDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(EmployeesService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailsComponent, selectors: [["app-task-details"]], viewQuery: function TaskDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 119, vars: 72, consts: [["confirmationModal", ""], ["fileInput", ""], [1, "task-details-page", "rounded-3", 3, "dir"], ["class", "loading-container", 4, "ngIf"], ["class", "content-wrapper", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "mb-2"], [1, "form-label-sm"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "0", 4, "ngIf"], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["value", "4", 4, "ngIf"], ["value", "5", 4, "ngIf"], ["value", "6", 4, "ngIf"], ["rows", "2", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [3, "ngSubmit", "formGroup"], ["rows", "3", "formControlName", "note", 1, "form-control", "form-control-sm"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"], [1, "modal-header", "bg-danger"], [1, "modal-title", "text-white"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "fas", "fa-check", "me-1"], [1, "fas", "fa-times", "me-1"], [1, "modal-dialog", "modal-lg"], [1, "modal-header", 3, "dir"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "row"], [1, "col-12", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", "name", "editTitle", 1, "form-control", 3, "placeholder"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6", "mb-3"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editDueDate", 1, "form-control"], ["bindLabel", "fullName", "bindValue", "id", "formControlName", "assigneeUserId", 3, "search", "open", "items", "searchable", "clearable", "loading"], ["ng-option-tmp", ""], ["ng-notfound-tmp", ""], ["formControlName", "priority", "name", "editPriority", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["rows", "3", "formControlName", "description", "name", "editDescription", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "loading-container"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "content-wrapper"], [1, "header-section"], [1, "btn-back", 3, "click"], ["class", "fas fa-arrow-right", 4, "ngIf"], ["class", "fas fa-arrow-left", 4, "ngIf"], [1, "page-title"], [1, "details-grid"], [1, "main-info"], [1, "info-card"], [1, "task-title"], [1, "status-priority-row"], [1, "badge"], [1, "quick-info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value"], [1, "section-title"], [1, "description-text"], [1, "section-header"], [1, "btn-add-small", 3, "click"], [1, "fas", "fa-plus"], ["type", "file", 1, "d-none", 3, "change"], [1, "attachments-list"], ["class", "empty-state", 4, "ngIf"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "updates-list"], ["class", "update-item", 4, "ngFor", "ngForOf"], [1, "feedback-list"], ["class", "feedback-item", 4, "ngFor", "ngForOf"], [1, "actions-sidebar"], [1, "actions-card"], [1, "actions-title"], [1, "actions-list"], ["class", "action-btn btn-edit", 3, "click", 4, "appHasPermission"], [1, "action-btn", "btn-status", 3, "click"], [1, "fas", "fa-sync"], [1, "action-btn", "btn-delete", 3, "click"], [1, "fas", "fa-trash"], [1, "fas", "fa-arrow-right"], [1, "fas", "fa-arrow-left"], [1, "empty-state"], [1, "attachment-item"], [1, "attachment-info"], [1, "attachment-name"], [1, "attachment-meta"], [1, "btn-delete-small", 3, "click"], [1, "update-item"], [1, "update-content"], [1, "update-meta"], [1, "feedback-item"], [1, "feedback-content"], [1, "feedback-meta"], [1, "action-btn", "btn-edit", 3, "click"], [1, "fas", "fa-edit"], ["value", "0"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "text-danger"], [1, "employee-option"], [1, "employee-name"], ["class", "employee-job", 4, "ngIf"], [1, "employee-job"], [1, "text-muted", "text-center", "p-2"], [1, "fas", "fa-info-circle", "me-2"]], template: function TaskDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, TaskDetailsComponent_div_1_Template, 4, 1, "div", 3)(2, TaskDetailsComponent_div_2_Template, 84, 36, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h5", 9);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div")(10, "div", 10)(11, "div", 11)(12, "label", 12);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function TaskDetailsComponent_Template_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(15, "option", 14);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, TaskDetailsComponent_option_17_Template, 2, 1, "option", 15)(18, TaskDetailsComponent_option_18_Template, 2, 1, "option", 16)(19, TaskDetailsComponent_option_19_Template, 2, 1, "option", 17)(20, TaskDetailsComponent_option_20_Template, 2, 1, "option", 18)(21, TaskDetailsComponent_option_21_Template, 2, 1, "option", 19)(22, TaskDetailsComponent_option_22_Template, 2, 1, "option", 20)(23, TaskDetailsComponent_option_23_Template, 2, 1, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11)(25, "label", 12);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "textarea", 22);
      \u0275\u0275twoWayListener("ngModelChange", function TaskDetailsComponent_Template_textarea_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.statusNote, $event) || (ctx.statusNote = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 23)(29, "button", 24);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTaskStatus());
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 25);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showStatusUpdateModal"));
      });
      \u0275\u0275text(32);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(33, "div", 5)(34, "div", 6)(35, "div", 7)(36, "div", 8)(37, "h5", 9);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "form", 26);
      \u0275\u0275listener("ngSubmit", function TaskDetailsComponent_Template_form_ngSubmit_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTaskUpdate());
      });
      \u0275\u0275elementStart(40, "div", 10)(41, "div", 11)(42, "label", 12);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "textarea", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 23)(46, "button", 28);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 25);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddUpdateModal"));
      });
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(50, "div", 5)(51, "div", 6)(52, "div", 7)(53, "div", 29)(54, "h5", 30);
      \u0275\u0275element(55, "i", 31);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 10)(58, "p", 32);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 23)(61, "button", 33);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirmDelete());
      });
      \u0275\u0275element(62, "i", 34);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 25);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancelDelete());
      });
      \u0275\u0275element(65, "i", 35);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 5)(68, "div", 36)(69, "div", 7)(70, "div", 37)(71, "h5", 9);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "button", 38);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_73_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(74, "svg", 39);
      \u0275\u0275element(75, "line", 40)(76, "line", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(77, "form", 26);
      \u0275\u0275listener("ngSubmit", function TaskDetailsComponent_Template_form_ngSubmit_77_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(78, "div", 10)(79, "div", 42)(80, "div", 43)(81, "label", 44);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275element(83, "input", 45);
      \u0275\u0275template(84, TaskDetailsComponent_small_84_Template, 2, 1, "small", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 47)(86, "label", 44);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275element(88, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 43)(90, "label", 44);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "ng-select", 49);
      \u0275\u0275listener("search", function TaskDetailsComponent_Template_ng_select_search_92_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchNgSelect($event));
      })("open", function TaskDetailsComponent_Template_ng_select_open_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEditTaskModalEmployeeSearchFocus());
      });
      \u0275\u0275template(93, TaskDetailsComponent_ng_template_93_Template, 4, 2, "ng-template", 50)(94, TaskDetailsComponent_ng_template_94_Template, 3, 1, "ng-template", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(95, TaskDetailsComponent_small_95_Template, 2, 1, "small", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 47)(97, "label", 44);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "select", 52)(100, "option", 14);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "option", 53);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "option", 54);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "option", 55);
      \u0275\u0275text(107);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 43)(109, "label", 44);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275element(111, "textarea", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 23)(113, "button", 57);
      \u0275\u0275text(114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "button", 58);
      \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_115_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275text(116);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(117, "app-confirmation-modal", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_42_0;
      let tmp_44_0;
      let tmp_47_0;
      let tmp_52_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.task);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showStatusUpdateModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showStatusUpdateModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.statusUpdate"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newStatus"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 4);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 5);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.task || ctx.task.status !== 6);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.statusNote);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.selectedStatus);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showAddUpdateModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showAddUpdateModal);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.addUpdate"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addUpdateForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.addUpdateForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showDeleteConfirmModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showDeleteConfirmModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.dialogs.confirmDelete"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.confirmDeleteMessage"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.delete"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showEditTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showEditTaskModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.edit_task"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.editTaskForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_42_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_42_0.invalid) && ((tmp_42_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_42_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.titlePlaceholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_44_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_44_0.invalid) && ((tmp_44_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_44_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.dueDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ((tmp_47_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_47_0.invalid) && ((tmp_47_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_47_0.touched));
      \u0275\u0275property("items", ctx.editTaskModalEmployees)("searchable", true)("clearable", true)("loading", ctx.isSearchingEditTaskEmployees);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ((tmp_52_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_52_0.invalid) && ((tmp_52_0 = ctx.editTaskForm.get("assigneeUserId")) == null ? null : tmp_52_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectPriority"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.high"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.medium"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.low"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.description"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.descriptionPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.editTaskForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, NgModel, ConfirmationModalComponent, HasPermissionDirective, NgSelectComponent, NgOptionTemplateDirective, NgNotFoundTemplateDirective], styles: ["\n\n.task-details-page[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  font-size: 0.8rem;\n  background: #f5f5f5;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.loading-container[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-width: 0.15rem;\n  color: #B68A35;\n}\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.btn-back[_ngcontent-%COMP%] {\n  border: 1px solid #B68A35 !important;\n  background-color: transparent;\n  padding: 0.35rem 0.75rem;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #B68A35;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition: all 0.2s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #9a7329;\n  color: #fff;\n}\n.btn-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #2c3e50;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  gap: 0.75rem;\n}\n.info-card[_ngcontent-%COMP%], \n.actions-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.task-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  line-height: 1.3;\n}\n.status-priority-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.status-new[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-inProgress[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-done[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-stopped[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.status-late[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-returned[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-review[_ngcontent-%COMP%] {\n  background: #fff9c4;\n  color: #f57f17;\n}\n.priority-high[_ngcontent-%COMP%] {\n  background: #ffcdd2;\n  color: #c62828;\n}\n.priority-medium[_ngcontent-%COMP%] {\n  background: #ffe0b2;\n  color: #B68A35;\n}\n.priority-low[_ngcontent-%COMP%] {\n  background: #c8e6c9;\n  color: #388e3c;\n}\n.quick-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background: #fafafa;\n  border-radius: 5px;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e8e8e8;\n}\n.info-item[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e8e8e8;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #757575;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #2c3e50;\n  font-weight: 500;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  padding-bottom: 0.4rem;\n  border-bottom: 2px solid #B68A35;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.description-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: #4a5568;\n  margin: 0;\n  white-space: pre-wrap;\n  padding: 0.6rem;\n  background: #fafafa;\n  border-radius: 5px;\n  border-left: 3px solid #B68A35;\n}\n.btn-add-small[_ngcontent-%COMP%], \n.btn-delete-small[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition: all 0.2s ease;\n}\n.btn-add-small[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-add-small[_ngcontent-%COMP%]:hover {\n  background: #9a7329;\n}\n.btn-delete-small[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  padding: 0.35rem;\n  border-radius: 4px;\n}\n.btn-delete-small[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.attachments-list[_ngcontent-%COMP%], \n.updates-list[_ngcontent-%COMP%], \n.feedback-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.attachment-item[_ngcontent-%COMP%], \n.update-item[_ngcontent-%COMP%], \n.feedback-item[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  background: #fafafa;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  border: 1px solid #e8e8e8;\n  transition: all 0.2s ease;\n}\n.attachment-item[_ngcontent-%COMP%]:hover, \n.update-item[_ngcontent-%COMP%]:hover, \n.feedback-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  background: #fff;\n}\n.attachment-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #B68A35;\n  font-size: 1rem;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fef5e7;\n  border-radius: 4px;\n}\n.attachment-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 0.8rem;\n  margin-bottom: 0.15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.attachment-meta[_ngcontent-%COMP%], \n.update-meta[_ngcontent-%COMP%], \n.feedback-meta[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #757575;\n  margin-top: 0.15rem;\n}\n.update-item[_ngcontent-%COMP%], \n.feedback-item[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.update-content[_ngcontent-%COMP%], \n.feedback-content[_ngcontent-%COMP%] {\n  color: #4a5568;\n  line-height: 1.5;\n  width: 100%;\n  font-size: 0.8rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 0.8rem;\n  font-style: italic;\n  background: #fafafa;\n  border-radius: 5px;\n  border: 1px dashed #d0d0d0;\n}\n.actions-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0.75rem;\n}\n.actions-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin: 0 0 0.75rem 0;\n  color: #2c3e50;\n  text-align: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e0e0e0;\n}\n.actions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  color: #2c3e50;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  border-color: #B68A35;\n}\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n  border-color: #2196f3;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #1976d2;\n  border-color: #1976d2;\n}\n.btn-status[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.btn-status[_ngcontent-%COMP%]:hover {\n  background: #9a7329;\n  border-color: #9a7329;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc3545;\n  color: white;\n  border-color: #dc3545;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  border-color: #c82333;\n}\n.modal-dialog.modal-sm[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n  background: #D4AF5F;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #e0e0e0;\n  gap: 0.5rem;\n  background: #fafafa;\n}\n.form-label-sm[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.4rem;\n  color: #2c3e50;\n}\n.form-control-sm[_ngcontent-%COMP%], \n.form-select-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d0d0d0;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.form-control-sm[_ngcontent-%COMP%]:focus, \n.form-select-sm[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.15rem rgba(182, 138, 53, 0.1);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #9a7329;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #1B1D21 !important;\n  border: none;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #1B1D21;\n  color: #fff;\n}\n.attachments-list[_ngcontent-%COMP%], \n.updates-list[_ngcontent-%COMP%], \n.feedback-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.updates-list[_ngcontent-%COMP%]::-webkit-scrollbar, \n.feedback-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.updates-list[_ngcontent-%COMP%]::-webkit-scrollbar-track, \n.feedback-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 6px;\n}\n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.updates-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, \n.feedback-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #B68A35;\n  border-radius: 6px;\n}\n.attachments-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.updates-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, \n.feedback-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9a7329;\n}\n@media (max-width: 1200px) {\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 260px;\n  }\n}\n@media (max-width: 992px) {\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .actions-list[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 150px;\n  }\n  .quick-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .task-details-page[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .quick-info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .details-grid[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .info-card[_ngcontent-%COMP%], \n   .actions-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n  .header-section[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    flex-wrap: wrap;\n  }\n  .btn-back[_ngcontent-%COMP%] {\n    padding: 0.45rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=rtl][_ngcontent-%COMP%]   .attachment-item[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1050;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  max-width: 450px;\n  width: 90%;\n}\n.modal-header.bg-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AA3A 100%) !important;\n  border-bottom: none;\n  border-radius: 6px 6px 0 0;\n}\n.modal-header.bg-danger[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  border: 2px solid #B68A35;\n  border-radius: 6px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 6px 6px 0 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #e0e0e0;\n  background: #fafafa;\n  border-radius: 0 0 6px 6px;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border: none;\n  color: white;\n  font-weight: 500;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #9a7329;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.employee-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.employee-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.modal[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n}\n.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1000000;\n  overflow: visible;\n}\n.modal-body[_ngcontent-%COMP%]   .employee-search-container[_ngcontent-%COMP%]   .employee-dropdown[_ngcontent-%COMP%] {\n  z-index: 10000 !important;\n}\n.employee-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.employee-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.employee-item[_ngcontent-%COMP%]:hover {\n  background-color: #F2ECCE;\n}\n.employee-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%], \n.employee-item.text-muted[_ngcontent-%COMP%] {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%]:hover, \n.employee-item.text-muted[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 2px;\n}\n.employee-job[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.selected-employee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e0e0e0;\n}\n.selected-employee.result[_ngcontent-%COMP%] {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.btn-remove-employee[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.btn-remove-employee[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n/*# sourceMappingURL=task-details.component-DE2VDXQ6.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-task-details", standalone: false, template: `<div class="task-details-page rounded-3" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="loading-container">\r
    <div class="spinner-border text-primary" role="status">\r
      <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
    </div>\r
  </div>\r
\r
  <div *ngIf="!isLoading && task" class="content-wrapper">\r
    <!-- Header -->\r
    <div class="header-section">\r
      <button class="btn-back" (click)="goBack()">\r
        <i class="fas fa-arrow-right" *ngIf="isRTL()"></i>\r
        <i class="fas fa-arrow-left" *ngIf="!isRTL()"></i>\r
        {{ translate('common.back') }}\r
      </button>\r
      <h1 class="page-title">{{ translate('tasks.task_details') }}</h1>\r
    </div>\r
\r
    <!-- Main Content Grid -->\r
    <div class="details-grid">\r
      <!-- Left Column - Main Info -->\r
      <div class="main-info">\r
        <!-- Task Title & Status -->\r
        <div class="info-card">\r
          <h2 class="task-title">{{ task.title }}</h2>\r
          <div class="status-priority-row">\r
            <span class="badge" [class]="getStatusClass(task.status)">\r
              {{ getStatusText(task.status) }}\r
            </span>\r
            <span class="badge" [class]="getPriorityClass(task.priority)">\r
              {{ getPriorityText(task.priority) }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Quick Info Grid -->\r
        <div class="quick-info-grid">\r
          <div class="info-item">\r
            <div class="info-label">{{ translate('tasks.task.createdBy') }}</div>\r
            <div class="info-value">{{ task.createdByName || '-' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">{{ translate('tasks.task.assignee') }}</div>\r
            <div class="info-value">{{ task.assigneeName || '-' }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">{{ translate('tasks.task.createdAt') }}</div>\r
            <div class="info-value">{{ formatDate(task.createdAt) }}</div>\r
          </div>\r
          <div class="info-item">\r
            <div class="info-label">{{ translate('tasks.task.dueDate') }}</div>\r
            <div class="info-value">{{ formatDate(task.dueDate) }}</div>\r
          </div>\r
        </div>\r
\r
        <!-- Description -->\r
        <div class="info-card">\r
          <h3 class="section-title">{{ translate('tasks.task.description') }}</h3>\r
          <p class="description-text">{{ task.description || translate('tasks.task.noDescription') }}</p>\r
        </div>\r
\r
        <!-- Attachments -->\r
        <div class="info-card">\r
          <div class="section-header">\r
            <h3 class="section-title">{{ translate('tasks.task.attachments') }}</h3>\r
            <button class="btn-add-small" (click)="fileInput.click()">\r
              <i class="fas fa-plus"></i>\r
              {{ translate('tasks.task.addAttachment') }}\r
            </button>\r
            <input type="file" #fileInput class="d-none" (change)="onFileSelected($event)">\r
          </div>\r
          \r
          <div class="attachments-list">\r
            <div *ngIf="taskAttachments.length === 0" class="empty-state">\r
              {{ translate('tasks.task.noAttachments') }}\r
            </div>\r
            <div *ngFor="let attachment of taskAttachments" class="attachment-item">\r
              <div class="attachment-info">\r
                <div class="attachment-name">{{ attachment.fileName }}</div>\r
                <div class="attachment-meta">{{ attachment.uploadedByName }} \u2022 {{ formatDate(attachment.uploadedAt) }}</div>\r
              </div>\r
              <button class="btn-delete-small" (click)="deleteAttachment(attachment.id)">\r
                {{translate('common.delete')}} \r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Updates Timeline -->\r
        <div class="info-card">\r
          <div class="section-header">\r
            <h3 class="section-title">{{ translate('tasks.task.updatesTimeline') }}</h3>\r
            <button class="btn-add-small" (click)="showAddUpdateModal = true">\r
              <i class="fas fa-plus"></i>\r
              {{ translate('tasks.actions.addUpdate') }}\r
            </button>\r
          </div>\r
          \r
          <div class="updates-list">\r
            <div *ngIf="taskUpdates.length === 0" class="empty-state">\r
              {{ translate('tasks.task.noUpdates') }}\r
            </div>\r
            <div *ngFor="let update of taskUpdates" class="update-item">\r
              <div class="update-content">{{ update.note }}</div>\r
              <div class="update-meta">{{ update.createdByName }} \u2022 {{ formatDate(update.createdAt) }}</div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Feedback -->\r
        <div class="info-card">\r
          <h3 class="section-title">{{ translate('tasks.task.feedback') }}</h3>\r
          <div class="feedback-list">\r
            <div *ngIf="taskFeedback.length === 0" class="empty-state">\r
              {{ translate('tasks.task.noFeedback') }}\r
            </div>\r
            <div *ngFor="let feedback of taskFeedback" class="feedback-item">\r
              <div class="feedback-content">{{ feedback.feedbackText }}</div>\r
              <div class="feedback-meta">{{ feedback.employeeName }} \u2022 {{ formatDate(feedback.createdAt) }}</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Right Column - Actions -->\r
      <div class="actions-sidebar">\r
        <div class="actions-card">\r
          <h3 class="actions-title">{{ translate('tasks.actions.title') }}</h3>\r
          <div class="actions-list">\r
            <button \r
              *appHasPermission="'task.index'"\r
              class="action-btn btn-edit" \r
              (click)="editTask()">\r
              <i class="fas fa-edit"></i>\r
              {{ translate('tasks.actions.edit') }}\r
            </button>\r
            <button class="action-btn btn-status" (click)="showStatusUpdateModal = true">\r
              <i class="fas fa-sync"></i>\r
              {{ translate('tasks.actions.changeStatus') }}\r
            </button>\r
            <button class="action-btn btn-delete" (click)="openDeleteModal()">\r
              <i class="fas fa-trash"></i>\r
              {{ translate('tasks.actions.delete') }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Status Update Modal -->\r
  <div class="modal fade" [class.show]="showStatusUpdateModal" [style.display]="showStatusUpdateModal ? 'block' : 'none'">\r
    <div class="modal-dialog modal-sm">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ translate('tasks.dialogs.statusUpdate') }}</h5>\r
        </div>\r
        \r
        <div>\r
          <div class="modal-body">\r
            <div class="mb-2">\r
              <label class="form-label-sm">{{ translate('tasks.bulk.newStatus') }}</label>\r
              <select class="form-select form-select-sm" [(ngModel)]="selectedStatus">\r
                <option value="">{{ translate('tasks.form.selectStatus') }}</option>\r
                <option *ngIf="!task || task.status !== 0" value="0">{{ translate('tasks.status.new') }}</option>\r
                <option *ngIf="!task || task.status !== 1" value="1">{{ translate('tasks.status.inProgress') }}</option>\r
                <option *ngIf="!task || task.status !== 2" value="2">{{ translate('tasks.status.done') }}</option>\r
                <option *ngIf="!task || task.status !== 3" value="3">{{ translate('tasks.status.stopped') }}</option>\r
                <option *ngIf="!task || task.status !== 4" value="4">{{ translate('tasks.status.late') }}</option>\r
                <option *ngIf="!task || task.status !== 5" value="5">{{ translate('tasks.status.returned') }}</option>\r
                <option *ngIf="!task || task.status !== 6" value="6">{{ translate('tasks.status.review') }}</option>\r
              </select>\r
            </div>\r
            \r
            <div class="mb-2">\r
              <label class="form-label-sm">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control form-control-sm" rows="2" [(ngModel)]="statusNote"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-sm btn-primary" (click)="updateTaskStatus()" [disabled]="!selectedStatus">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="closeModal('showStatusUpdateModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Add Update Modal -->\r
  <div class="modal fade" [class.show]="showAddUpdateModal" [style.display]="showAddUpdateModal ? 'block' : 'none'">\r
    <div class="modal-dialog modal-sm">\r
      <div class="modal-content">\r
        <div class="modal-header">\r
          <h5 class="modal-title">{{ translate('tasks.dialogs.addUpdate') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="addUpdateForm" (ngSubmit)="addTaskUpdate()">\r
          <div class="modal-body">\r
            <div class="mb-2">\r
              <label class="form-label-sm">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control form-control-sm" rows="3" formControlName="note"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="submit" class="btn btn-sm btn-primary" [disabled]="!addUpdateForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-sm btn-secondary" (click)="closeModal('showAddUpdateModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <div class="modal fade" [class.show]="showDeleteConfirmModal" [style.display]="showDeleteConfirmModal ? 'block' : 'none'">\r
    <div class="modal-dialog modal-sm">\r
      <div class="modal-content">\r
        <div class="modal-header bg-danger">\r
          <h5 class="modal-title text-white">\r
            <i class="fas fa-exclamation-triangle me-2"></i>\r
            {{ translate('tasks.dialogs.confirmDelete') }}\r
          </h5>\r
        </div>\r
        \r
        <div class="modal-body">\r
          <p class="mb-0">{{ translate('tasks.dialogs.confirmDeleteMessage') }}</p>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-sm btn-danger" (click)="confirmDelete()">\r
            <i class="fas fa-check me-1"></i>\r
            {{ translate('common.delete') }}\r
          </button>\r
          <button type="button" class="btn btn-sm btn-secondary" (click)="cancelDelete()">\r
            <i class="fas fa-times me-1"></i>\r
            {{ translate('common.cancel') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Edit Task Modal -->\r
  <div class="modal fade" [class.show]="showEditTaskModal" [style.display]="showEditTaskModal ? 'block' : 'none'">\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.edit_task') }}</h5>\r
          <button type="button" class="close-btn" (click)="closeModal('showEditTaskModal')" aria-label="Close">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <line x1="18" y1="6" x2="6" y2="18"></line>\r
              <line x1="6" y1="6" x2="18" y2="18"></line>\r
            </svg>\r
          </button>\r
        </div>\r
        \r
        <form [formGroup]="editTaskForm" (ngSubmit)="onSubmitEditTask()">\r
          <div class="modal-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.title') }}</label>\r
                <input type="text" class="form-control" formControlName="title" name="editTitle"\r
                       [class.is-invalid]="editTaskForm.get('title')?.invalid && editTaskForm.get('title')?.touched"\r
                       [placeholder]="translate('tasks.form.titlePlaceholder')">\r
                <small class="text-danger" *ngIf="editTaskForm.get('title')?.invalid && editTaskForm.get('title')?.touched">\r
                  {{ translate('tasks.form.titleRequired') || 'Title is required' }}\r
                </small>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.dueDate') }}</label>\r
                <input type="datetime-local" class="form-control" formControlName="dueDate" name="editDueDate">\r
              </div>\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.assignTo') }}</label>\r
                <ng-select\r
                  [items]="editTaskModalEmployees"\r
                  bindLabel="fullName"\r
                  bindValue="id"\r
                  [searchable]="true"\r
                  [clearable]="true"\r
                  [loading]="isSearchingEditTaskEmployees"\r
                  [class.is-invalid]="editTaskForm.get('assigneeUserId')?.invalid && editTaskForm.get('assigneeUserId')?.touched"\r
                  formControlName="assigneeUserId"\r
                  (search)="onEditTaskModalEmployeeSearchNgSelect($event)"\r
                  (open)="onEditTaskModalEmployeeSearchFocus()"\r
                >\r
                  <ng-template ng-option-tmp let-item="item">\r
                    <div class="employee-option">\r
                      <div class="employee-name">{{ item.fullName }}</div>\r
                      <div class="employee-job" *ngIf="item.jobTitle">\r
                        {{ item.jobTitle }}\r
                      </div>\r
                    </div>\r
                  </ng-template>\r
                  <ng-template ng-notfound-tmp let-searchTerm="searchTerm">\r
                    <div class="text-muted text-center p-2">\r
                      <i class="fas fa-info-circle me-2"></i>\r
                      {{ translate('tasks.form.noEmployeesFound') || 'No employees found' }}\r
                    </div>\r
                  </ng-template>\r
                </ng-select>\r
                <small\r
                  class="text-danger"\r
                  *ngIf="editTaskForm.get('assigneeUserId')?.invalid && editTaskForm.get('assigneeUserId')?.touched"\r
                >\r
                  {{ translate('tasks.form.assigneeRequired') || 'Please select an employee' }}\r
                </small>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.priority') }}</label>\r
                <select class="form-select" formControlName="priority" name="editPriority">\r
                  <option value="">{{ translate('tasks.form.selectPriority') }}</option>\r
                  <option value="1">{{ translate('tasks.priority.high') }}</option>\r
                  <option value="2">{{ translate('tasks.priority.medium') }}</option>\r
                  <option value="3">{{ translate('tasks.priority.low') }}</option>\r
                </select>\r
              </div>\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.description') }}</label>\r
                <textarea class="form-control" rows="3" formControlName="description" name="editDescription"\r
                          [placeholder]="translate('tasks.form.descriptionPlaceholder')"></textarea>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="submit" class="btn btn-primary" [disabled]="!editTaskForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showEditTaskModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Confirmation Modal Component -->\r
  <app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
</div>\r
\r
`, styles: ["/* src/app/components/tasks/task-details/task-details.component.css */\n.task-details-page {\n  padding: 0.75rem;\n  max-width: 1400px;\n  margin: 0 auto;\n  font-size: 0.8rem;\n  background: #f5f5f5;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.loading-container .spinner-border {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-width: 0.15rem;\n  color: #B68A35;\n}\n.header-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n.btn-back {\n  border: 1px solid #B68A35 !important;\n  background-color: transparent;\n  padding: 0.35rem 0.75rem;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #B68A35;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition: all 0.2s;\n}\n.btn-back:hover {\n  background: #9a7329;\n  color: #fff;\n}\n.btn-back i {\n  font-size: 0.85rem;\n}\n.page-title {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #2c3e50;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: 1fr 240px;\n  gap: 0.75rem;\n}\n.info-card,\n.actions-card {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 0.75rem;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);\n}\n.info-card:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n}\n.task-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  line-height: 1.3;\n}\n.status-priority-row {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  display: inline-block;\n}\n.status-new {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status-inProgress {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-done {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-stopped {\n  background: #f5f5f5;\n  color: #616161;\n}\n.status-late {\n  background: #ffebee;\n  color: #c62828;\n}\n.status-returned {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status-review {\n  background: #fff9c4;\n  color: #f57f17;\n}\n.priority-high {\n  background: #ffcdd2;\n  color: #c62828;\n}\n.priority-medium {\n  background: #ffe0b2;\n  color: #B68A35;\n}\n.priority-low {\n  background: #c8e6c9;\n  color: #388e3c;\n}\n.quick-info-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n  padding: 0.75rem;\n  background: #fafafa;\n  border-radius: 5px;\n  margin-bottom: 0.75rem;\n  border: 1px solid #e8e8e8;\n}\n.info-item {\n  padding: 0.5rem;\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #e8e8e8;\n}\n.info-label {\n  font-size: 0.7rem;\n  color: #757575;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.info-value {\n  font-size: 0.8rem;\n  color: #2c3e50;\n  font-weight: 500;\n}\n.section-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #2c3e50;\n  padding-bottom: 0.4rem;\n  border-bottom: 2px solid #B68A35;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n.description-text {\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: #4a5568;\n  margin: 0;\n  white-space: pre-wrap;\n  padding: 0.6rem;\n  background: #fafafa;\n  border-radius: 5px;\n  border-left: 3px solid #B68A35;\n}\n.btn-add-small,\n.btn-delete-small {\n  padding: 0.35rem 0.65rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  transition: all 0.2s ease;\n}\n.btn-add-small {\n  background: #B68A35;\n  color: white;\n}\n.btn-add-small:hover {\n  background: #9a7329;\n}\n.btn-delete-small {\n  background: #dc3545;\n  color: white;\n  padding: 0.35rem;\n  border-radius: 4px;\n}\n.btn-delete-small:hover {\n  background: #c82333;\n}\n.attachments-list,\n.updates-list,\n.feedback-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.attachment-item,\n.update-item,\n.feedback-item {\n  padding: 0.5rem;\n  background: #fafafa;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  border: 1px solid #e8e8e8;\n  transition: all 0.2s ease;\n}\n.attachment-item:hover,\n.update-item:hover,\n.feedback-item:hover {\n  border-color: #B68A35;\n  background: #fff;\n}\n.attachment-item i {\n  color: #B68A35;\n  font-size: 1rem;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fef5e7;\n  border-radius: 4px;\n}\n.attachment-info {\n  flex: 1;\n  min-width: 0;\n}\n.attachment-name {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 0.8rem;\n  margin-bottom: 0.15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.attachment-meta,\n.update-meta,\n.feedback-meta {\n  font-size: 0.7rem;\n  color: #757575;\n  margin-top: 0.15rem;\n}\n.update-item,\n.feedback-item {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.update-content,\n.feedback-content {\n  color: #4a5568;\n  line-height: 1.5;\n  width: 100%;\n  font-size: 0.8rem;\n}\n.empty-state {\n  padding: 1.5rem;\n  text-align: center;\n  color: #9e9e9e;\n  font-size: 0.8rem;\n  font-style: italic;\n  background: #fafafa;\n  border-radius: 5px;\n  border: 1px dashed #d0d0d0;\n}\n.actions-card {\n  position: sticky;\n  top: 0.75rem;\n}\n.actions-title {\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin: 0 0 0.75rem 0;\n  color: #2c3e50;\n  text-align: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid #e0e0e0;\n}\n.actions-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.action-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 5px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n  width: 100%;\n  justify-content: center;\n  background: white;\n  color: #2c3e50;\n}\n.action-btn:hover {\n  background: #f5f5f5;\n  border-color: #B68A35;\n}\n.action-btn i {\n  font-size: 0.9rem;\n}\n.btn-edit {\n  background: #2196f3;\n  color: white;\n  border-color: #2196f3;\n}\n.btn-edit:hover {\n  background: #1976d2;\n  border-color: #1976d2;\n}\n.btn-status {\n  background: #B68A35;\n  color: white;\n  border-color: #B68A35;\n}\n.btn-status:hover {\n  background: #9a7329;\n  border-color: #9a7329;\n}\n.btn-delete {\n  background: #dc3545;\n  color: white;\n  border-color: #dc3545;\n}\n.btn-delete:hover {\n  background: #c82333;\n  border-color: #c82333;\n}\n.modal-dialog.modal-sm {\n  max-width: 450px;\n}\n.modal-content {\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n.modal-header {\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n  background: #D4AF5F;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #5F646D;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  order: 2;\n}\n.close-btn:hover {\n  background-color: rgba(95, 100, 109, 0.1);\n  color: #5F646D;\n}\n.modal-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.modal-body {\n  padding: 1rem;\n}\n.modal-footer {\n  padding: 1rem;\n  border-top: 1px solid #e0e0e0;\n  gap: 0.5rem;\n  background: #fafafa;\n}\n.form-label-sm {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin-bottom: 0.4rem;\n  color: #2c3e50;\n}\n.form-control-sm,\n.form-select-sm {\n  font-size: 0.875rem;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d0d0d0;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.form-control-sm:focus,\n.form-select-sm:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.15rem rgba(182, 138, 53, 0.1);\n}\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n.btn-primary {\n  background: #B68A35;\n  border: none;\n}\n.btn-primary:hover {\n  background: #9a7329;\n}\n.btn-secondary {\n  background: #fff;\n  border: 1px solid #1B1D21 !important;\n  border: none;\n}\n.btn-secondary:hover {\n  background: #1B1D21;\n  color: #fff;\n}\n.attachments-list,\n.updates-list,\n.feedback-list {\n  max-height: 350px;\n  overflow-y: auto;\n}\n.attachments-list::-webkit-scrollbar,\n.updates-list::-webkit-scrollbar,\n.feedback-list::-webkit-scrollbar {\n  width: 6px;\n}\n.attachments-list::-webkit-scrollbar-track,\n.updates-list::-webkit-scrollbar-track,\n.feedback-list::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 6px;\n}\n.attachments-list::-webkit-scrollbar-thumb,\n.updates-list::-webkit-scrollbar-thumb,\n.feedback-list::-webkit-scrollbar-thumb {\n  background: #B68A35;\n  border-radius: 6px;\n}\n.attachments-list::-webkit-scrollbar-thumb:hover,\n.updates-list::-webkit-scrollbar-thumb:hover,\n.feedback-list::-webkit-scrollbar-thumb:hover {\n  background: #9a7329;\n}\n@media (max-width: 1200px) {\n  .details-grid {\n    grid-template-columns: 1fr 260px;\n  }\n}\n@media (max-width: 992px) {\n  .details-grid {\n    grid-template-columns: 1fr;\n  }\n  .actions-card {\n    position: static;\n  }\n  .actions-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .action-btn {\n    flex: 1;\n    min-width: 150px;\n  }\n  .quick-info-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .task-details-page {\n    padding: 0.75rem;\n  }\n  .quick-info-grid {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .page-title {\n    font-size: 1.1rem;\n  }\n  .task-title {\n    font-size: 1rem;\n  }\n  .details-grid {\n    gap: 0.75rem;\n  }\n  .info-card,\n  .actions-card {\n    padding: 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n  .header-section {\n    padding: 0.75rem;\n    flex-wrap: wrap;\n  }\n  .btn-back {\n    padding: 0.45rem 0.75rem;\n    font-size: 0.8rem;\n  }\n  .section-title {\n    font-size: 0.9rem;\n  }\n}\n[dir=rtl] .btn-back {\n  flex-direction: row-reverse;\n}\n[dir=rtl] .attachment-item,\n[dir=rtl] .action-btn {\n  flex-direction: row-reverse;\n}\n.modal.show {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1050;\n}\n.modal-dialog {\n  margin: 0 !important;\n  max-width: 450px;\n  width: 90%;\n}\n.modal-header.bg-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35 0%,\n      #D4AA3A 100%) !important;\n  border-bottom: none;\n  border-radius: 6px 6px 0 0;\n}\n.modal-header.bg-danger .modal-title {\n  color: white !important;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.modal-dialog .modal-content {\n  border: 2px solid #B68A35;\n  border-radius: 6px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n  animation: modalFadeIn 0.3s ease-out;\n}\n@keyframes modalFadeIn {\n  from {\n    opacity: 0;\n    transform: scale(0.9) translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  padding: 1rem;\n  border-radius: 6px 6px 0 0;\n}\n.modal-title {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body {\n  padding: 1rem;\n  font-size: 0.875rem;\n  color: #4a5568;\n}\n.modal-footer {\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #e0e0e0;\n  background: #fafafa;\n  border-radius: 0 0 6px 6px;\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.btn-danger {\n  background: #B68A35;\n  border: none;\n  color: white;\n  font-weight: 500;\n}\n.btn-danger:hover {\n  background: #9a7329;\n  color: white;\n}\n.btn-danger i {\n  font-size: 0.85rem;\n}\n.employee-search-container {\n  position: relative;\n}\n.employee-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.modal .employee-dropdown {\n  z-index: 10000 !important;\n}\n.modal-body .employee-search-container {\n  position: relative;\n  z-index: 1000000;\n  overflow: visible;\n}\n.modal-body .employee-search-container .employee-dropdown {\n  z-index: 10000 !important;\n}\n.employee-list {\n  padding: 8px 0;\n}\n.employee-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n.employee-item:hover {\n  background-color: #F2ECCE;\n}\n.employee-item:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger,\n.employee-item.text-muted {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger:hover,\n.employee-item.text-muted:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info {\n  flex: 1;\n  min-width: 0;\n}\n.employee-name {\n  font-weight: 500;\n  color: #2c3e50;\n  margin-bottom: 2px;\n}\n.employee-job {\n  font-size: 0.85rem;\n  color: #6c757d;\n}\n.selected-employee {\n  margin-top: 8px;\n  padding: 8px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #e0e0e0;\n}\n.selected-employee.result {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.btn-remove-employee {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n}\n.btn-remove-employee:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n/*# sourceMappingURL=task-details.component-DE2VDXQ6.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: Location }, { type: TasksService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: AuthService }, { type: EmployeesService }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailsComponent, { className: "TaskDetailsComponent", filePath: "src/app/components/tasks/task-details/task-details.component.ts", lineNumber: 21 });
})();

// src/app/components/tasks/tasks-routing-module.ts
var routes = [
  {
    path: "",
    component: TasksComponent,
    canActivate: [PermissionGuard],
    data: { permission: "task.index" }
  },
  {
    path: "details/:id",
    component: TaskDetailsComponent,
    // canActivate: [PermissionGuard],
    data: { permission: "task.index" }
  },
  {
    path: "my-tasks",
    component: MyTasksComponent,
    canActivate: [PermissionGuard],
    data: { permission: "MyTasks.index" }
  },
  {
    path: "all-tasks",
    component: AllTasksComponent,
    canActivate: [PermissionGuard],
    data: { permission: "allTasks.index" }
  }
];
var TasksRoutingModule = class _TasksRoutingModule {
  static \u0275fac = function TasksRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/tasks/tasks-module.ts
var TasksModule = class _TasksModule {
  static \u0275fac = function TasksModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TasksModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgSelectModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TasksComponent,
        MyTasksComponent,
        AllTasksComponent,
        TaskDetailsComponent
      ],
      imports: [
        CommonModule,
        TasksRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        NgSelectModule
      ]
    }]
  }], null, null);
})();
export {
  TasksModule
};
//# sourceMappingURL=chunk-C57MJMPA.js.map
