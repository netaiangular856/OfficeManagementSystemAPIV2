import {
  PermissionGuard
} from "./chunk-VVAISPMG.js";
import {
  UsersService
} from "./chunk-J23YWITA.js";
import {
  AuthService
} from "./chunk-WVYR2STR.js";
import {
  ConfirmationModalComponent
} from "./chunk-ULJRQXHX.js";
import "./chunk-2FUVCS3A.js";
import {
  RouterModule
} from "./chunk-U5SZNZ4Q.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FCGZBQQA.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  Injectable,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  SlicePipe,
  TranslationService,
  ViewChild,
  setClassMetadata,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
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
  ɵɵviewQuery
} from "./chunk-MEAE725W.js";
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
    return this.http.post(`${this.apiUrl}/${id}/attachments`, attachment);
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
    return this.http.get(`${environment.apiBaseUrl}/Employees/names`);
  }
  // Get employees under manager
  getEmployeesUnderManager() {
    return this.http.get(`${environment.apiBaseUrl}/Employees/names`);
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
function TasksComponent_div_98_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275listener("click", function TasksComponent_div_98_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAllEmployees());
    });
    \u0275\u0275elementStart(1, "div", 148)(2, "div", 149);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.filters.showAllEmployees"));
  }
}
function TasksComponent_div_98_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 150);
    \u0275\u0275listener("click", function TasksComponent_div_98_div_3_Template_div_click_0_listener() {
      const employee_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEmployee(employee_r5));
    });
    \u0275\u0275elementStart(1, "div", 148)(2, "div", 149);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 151);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(employee_r5.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r5.jobTitle);
  }
}
function TasksComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "div", 144);
    \u0275\u0275template(2, TasksComponent_div_98_div_2_Template, 4, 1, "div", 145)(3, TasksComponent_div_98_div_3_Template, 6, 2, "div", 146);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r2.filterForm.get("employeeSearch")) == null ? null : tmp_4_0.value) && ctx_r2.filteredEmployees.length < ctx_r2.employeesUnderManager.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredEmployees);
  }
}
function TasksComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 152)(1, "div", 153)(2, "div", 148)(3, "div", 149);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 151);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 154);
    \u0275\u0275listener("click", function TasksComponent_div_99_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedEmployee());
    });
    \u0275\u0275element(8, "i", 155);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.getSelectedEmployee()) == null ? null : tmp_4_0.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r2.getSelectedEmployee()) == null ? null : tmp_5_0.jobTitle);
  }
}
function TasksComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275listener("click", function TasksComponent_div_113_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_113_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_113_Template_input_change_1_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r8.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r8.dueDate), " ");
  }
}
function TasksComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function TasksComponent_div_121_Template_div_click_0_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r10));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_121_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_121_Template_input_change_1_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showBulkToolbar ? "block" : "none");
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r10.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r10.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r10.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r10.dueDate), " ");
  }
}
function TasksComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275listener("click", function TasksComponent_div_129_Template_div_click_0_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r12));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_129_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_129_Template_input_change_1_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r12.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r12.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r12.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r12.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r12.dueDate), " ");
  }
}
function TasksComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167);
    \u0275\u0275listener("click", function TasksComponent_div_137_Template_div_click_0_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r14));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_137_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_137_Template_input_change_1_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r14.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showBulkToolbar ? "block" : "none");
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r14.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r14.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r14.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r14.dueDate), " ");
  }
}
function TasksComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275listener("click", function TasksComponent_div_145_Template_div_click_0_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r16));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_145_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_145_Template_input_change_1_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r16.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r16.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r16.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r16.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r16.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r16.dueDate), " ");
  }
}
function TasksComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275listener("click", function TasksComponent_div_153_Template_div_click_0_listener() {
      const task_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r18));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_153_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_153_Template_input_change_1_listener() {
      const task_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r18.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r18.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r18.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r18.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r18.dueDate), " ");
  }
}
function TasksComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 156);
  }
}
function TasksComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275listener("click", function TasksComponent_div_161_Template_div_click_0_listener() {
      const task_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r20));
    });
    \u0275\u0275elementStart(1, "input", 158);
    \u0275\u0275listener("click", function TasksComponent_div_161_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_161_Template_input_change_1_listener() {
      const task_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r20.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 159)(3, "h6", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 161);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 162)(8, "small", 163)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 163)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r20.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r20.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r20.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r20.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r20.dueDate), " ");
  }
}
function TasksComponent_div_162_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 174)(1, "a", 175);
    \u0275\u0275listener("click", function TasksComponent_div_162_li_7_Template_a_click_1_listener($event) {
      const page_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.goToPage(page_r23);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r23 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r23);
  }
}
function TasksComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "nav", 172)(2, "ul", 173)(3, "li", 174)(4, "a", 175);
    \u0275\u0275listener("click", function TasksComponent_div_162_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.goToPage(ctx_r2.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TasksComponent_div_162_li_7_Template, 3, 3, "li", 176);
    \u0275\u0275elementStart(8, "li", 174)(9, "a", 175);
    \u0275\u0275listener("click", function TasksComponent_div_162_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.goToPage(ctx_r2.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 177)(13, "span", 77);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.previous"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r2.currentPage === ctx_r2.getMaxPagesForAnyStatus());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.next"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6(" ", ctx_r2.translate("common.showing"), " ", ctx_r2.getStartIndex(), " - ", ctx_r2.getEndIndex(), " ", ctx_r2.translate("common.of"), " ", ctx_r2.getTotalTasks(), " ", ctx_r2.translate("common.results"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.pagination.note"));
  }
}
function TasksComponent_div_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179)(2, "span", 180);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_small_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTitleErrorMessage(ctx_r2.addTaskForm), " ");
  }
}
function TasksComponent_option_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 182);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r24 = ctx.$implicit;
    \u0275\u0275property("value", employee_r24.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r24.fullName);
  }
}
function TasksComponent_div_231_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275element(1, "i", 186);
    \u0275\u0275elementStart(2, "span", 187);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 188);
    \u0275\u0275listener("click", function TasksComponent_div_231_div_1_Template_button_click_4_listener() {
      const i_r27 = \u0275\u0275restoreView(_r26).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSelectedFile(i_r27));
    });
    \u0275\u0275element(5, "i", 189);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r28 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r28.name);
  }
}
function TasksComponent_div_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275template(1, TasksComponent_div_231_div_1_Template, 6, 1, "div", 184);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function TasksComponent_small_251_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTitleErrorMessage(ctx_r2.editTaskForm), " ");
  }
}
function TasksComponent_option_268_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 182);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r29 = ctx.$implicit;
    \u0275\u0275property("value", user_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r29.name);
  }
}
function TasksComponent_div_296_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185);
    \u0275\u0275element(1, "i", 186);
    \u0275\u0275elementStart(2, "span", 187);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 188);
    \u0275\u0275listener("click", function TasksComponent_div_296_div_1_Template_button_click_4_listener() {
      const i_r32 = \u0275\u0275restoreView(_r31).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSelectedFile(i_r32));
    });
    \u0275\u0275element(5, "i", 189);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r33 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r33.name);
  }
}
function TasksComponent_div_296_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275template(1, TasksComponent_div_296_div_1_Template, 6, 1, "div", 184);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function TasksComponent_div_308_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noAttachments"), " ");
  }
}
function TasksComponent_div_308_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 217);
    \u0275\u0275element(1, "i", 218);
    \u0275\u0275elementStart(2, "div", 187)(3, "div", 219);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 188);
    \u0275\u0275listener("click", function TasksComponent_div_308_div_41_Template_button_click_7_listener() {
      const attachment_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteAttachment(attachment_r36.id, ctx_r2.currentTask.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 220);
    \u0275\u0275element(9, "polyline", 221)(10, "path", 222)(11, "path", 223)(12, "path", 224)(13, "path", 225);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r36 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r36.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", attachment_r36.uploadedByName, " - ", ctx_r2.formatDate(attachment_r36.uploadedAt));
  }
}
function TasksComponent_div_308_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noUpdates"), " ");
  }
}
function TasksComponent_div_308_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226)(1, "div", 187)(2, "div", 219);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const update_r38 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(update_r38.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", update_r38.createdByName, " - ", ctx_r2.formatDate(update_r38.createdAt));
  }
}
function TasksComponent_div_308_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noFeedback"), " ");
  }
}
function TasksComponent_div_308_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 226)(1, "div", 187)(2, "div", 219);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r39 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r39.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r39.employeeName, " - ", ctx_r2.formatDate(feedback_r39.createdAt));
  }
}
function TasksComponent_div_308_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 42)(2, "div", 190)(3, "h4", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 191)(6, "div", 192)(7, "div", 193);
    \u0275\u0275element(8, "i", 194);
    \u0275\u0275elementStart(9, "span", 77);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 195);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 193);
    \u0275\u0275element(14, "i", 196);
    \u0275\u0275elementStart(15, "span", 77);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 197);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 192)(20, "div", 193);
    \u0275\u0275element(21, "i", 198);
    \u0275\u0275elementStart(22, "span", 77);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 195);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 193);
    \u0275\u0275element(27, "i", 199);
    \u0275\u0275elementStart(28, "span", 77);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 195);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 200)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 201);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 200)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TasksComponent_div_308_div_40_Template, 2, 1, "div", 202)(41, TasksComponent_div_308_div_41_Template, 14, 3, "div", 203);
    \u0275\u0275elementStart(42, "div", 204)(43, "input", 205, 3);
    \u0275\u0275listener("change", function TasksComponent_div_308_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event, ctx_r2.currentTask.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 206);
    \u0275\u0275listener("click", function TasksComponent_div_308_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r34);
      const detailsFileInput_r37 = \u0275\u0275reference(44);
      return \u0275\u0275resetView(detailsFileInput_r37.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 207);
    \u0275\u0275element(47, "line", 208)(48, "line", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 200)(51, "h6");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, TasksComponent_div_308_div_53_Template, 2, 1, "div", 202)(54, TasksComponent_div_308_div_54_Template, 6, 3, "div", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 200)(56, "h6");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, TasksComponent_div_308_div_58_Template, 2, 1, "div", 202)(59, TasksComponent_div_308_div_59_Template, 6, 3, "div", 210);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 211)(61, "div", 212)(62, "button", 213);
    \u0275\u0275listener("click", function TasksComponent_div_308_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditTaskModal(ctx_r2.currentTask));
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 214);
    \u0275\u0275listener("click", function TasksComponent_div_308_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatusUpdateModal = true);
    });
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 215);
    \u0275\u0275listener("click", function TasksComponent_div_308_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddUpdateModal = true);
    });
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 216);
    \u0275\u0275listener("click", function TasksComponent_div_308_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteTask(ctx_r2.currentTask));
    });
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.currentTask.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentTask.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.status"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.getStatusClass(ctx_r2.currentTask.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusText(ctx_r2.currentTask.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.duration"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.formatDate(ctx_r2.currentTask.createdAt), " - ", ctx_r2.formatDate(ctx_r2.currentTask.dueDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentTask.assigneeName || ctx_r2.translate("tasks.task.noAssignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.task.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentTask.description || ctx_r2.translate("tasks.task.noSubtasks"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.task.attachments"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentTaskAttachments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.currentTaskAttachments);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.addAttachment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.task.updatesTimeline"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentTaskUpdates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.currentTaskUpdates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.task.feedback"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentTaskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.currentTaskFeedback);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.changeStatus"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.addUpdate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.delete"), " ");
  }
}
function TasksComponent_div_320_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275element(1, "i", 228);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.dialogs.taskCompletedWarning"), " ");
  }
}
function TasksComponent_option_381_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 182);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r40 = ctx.$implicit;
    \u0275\u0275property("value", employee_r40.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r40.fullName);
  }
}
function TasksComponent_div_399_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227);
    \u0275\u0275element(1, "i", 228);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.bulk.completedTasksWarning"), " ");
  }
}
function TasksComponent_option_443_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 182);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r41 = ctx.$implicit;
    \u0275\u0275property("value", employee_r41.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r41.fullName);
  }
}
var TasksComponent = class _TasksComponent {
  tasksService;
  usersService;
  translationService;
  langService;
  authService;
  fb;
  cdr;
  confirmationModal;
  // Data
  tasks = [];
  allTasksForCounting = [];
  // Store all tasks for status counting
  tasksOverview = null;
  managerTasksOverview = null;
  users = [];
  directEmployees = [];
  employeesUnderManager = [];
  filteredEmployees = [];
  showEmployeeDropdown = false;
  // User role
  isManager = false;
  // Language
  currentLang = "en";
  // UI state
  selectedTasks = /* @__PURE__ */ new Set();
  isLoading = false;
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
  constructor(tasksService, usersService, translationService, langService, authService, fb, cdr) {
    this.tasksService = tasksService;
    this.usersService = usersService;
    this.translationService = translationService;
    this.langService = langService;
    this.authService = authService;
    this.fb = fb;
    this.cdr = cdr;
    this.initializeForms();
  }
  ngOnInit() {
    this.checkUserRole();
    this.loadData();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.cdr.detectChanges();
    });
  }
  initializeForms() {
    this.filterForm = this.fb.group({
      dueDateFrom: [""],
      dueDateTo: [""],
      employeeId: [""],
      employeeSearch: [""]
    });
    this.addTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(30)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(40)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
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
        if (this.isManager) {
          const overview = yield this.tasksService.getManagerTasksOverview().toPromise();
          this.managerTasksOverview = overview || null;
        } else {
          const overview = yield this.tasksService.getTasksOverview().toPromise();
          this.tasksOverview = overview || null;
        }
      } catch (error) {
        console.error("Error loading tasks overview:", error);
        this.tasksOverview = null;
        this.managerTasksOverview = null;
      }
    });
  }
  loadTasks() {
    return __async(this, null, function* () {
      console.log("Loading tasks with page:", this.currentPage, "pageSize:", this.pageSize);
      return new Promise((resolve, reject) => {
        const formValue = this.filterForm.value;
        this.tasksService.getAllTasksWithDateFilters(this.currentPage, this.pageSize, formValue.dueDateFrom || void 0, formValue.dueDateTo || void 0, formValue.employeeId || void 0).subscribe({
          next: (response) => {
            console.log("Tasks API response:", response);
            if (response.success && response.data?.items) {
              this.tasks = response.data.items;
              this.totalCount = response.data.totalCount || 0;
              this.totalPages = Math.ceil(this.totalCount / this.pageSize);
              this.allTasks = response.data.items;
              console.log("Tasks loaded successfully:", this.tasks.length, "tasks");
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
        this.tasksService.getAllTasksForCountingWithDateFilters(formValue.dueDateFrom || void 0, formValue.dueDateTo || void 0, formValue.employeeId || void 0).subscribe({
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
      this.updateBodyClass();
    }
  }
  openEditTaskModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.editTaskForm.patchValue({
        title: task.title,
        description: task.description,
        assigneeUserId: task.assigneeUserId,
        priority: task.priority,
        dueDate: this.formatDateForInput(task.dueDate),
        sourceType: task.sourceType
      });
      this.showEditTaskModal = true;
      this.updateBodyClass();
    }
  }
  openTaskDetailsModal(task) {
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.showTaskDetailsModal = true;
      this.loadTaskAttachments(task.id);
      this.loadTaskUpdates(task.id);
      this.loadTaskFeedback(task.id);
      this.updateBodyClass();
    }
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
        }
      }
    });
  }
  onSubmitEditTask() {
    return __async(this, null, function* () {
      if (this.editTaskForm.valid && this.currentTask) {
        try {
          const formValue = this.editTaskForm.value;
          const taskData = {
            title: formValue.title,
            description: formValue.description || "",
            assigneeUserId: formValue.assigneeUserId,
            priority: Number(formValue.priority),
            dueDate: formValue.dueDate,
            sourceType: Number(formValue.sourceType || 0)
          };
          console.log("Updating task data:", taskData);
          yield this.tasksService.updateTask(this.currentTask.id, taskData).toPromise();
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
  // Select employee from dropdown
  selectEmployee(employee) {
    this.filterForm.get("employeeId")?.setValue(employee.id);
    this.filterForm.get("employeeSearch")?.setValue("");
    this.filteredEmployees = this.employeesUnderManager;
    this.showEmployeeDropdown = false;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.onFilterChange();
    }, 100);
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
    this.onFilterChange();
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
    return date.toLocaleDateString(this.langService.getCurrentLang() === "ar" ? "ar-EG" : "en-US");
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
        break;
      case "showEditTaskModal":
        this.showEditTaskModal = false;
        this.editTaskForm.reset();
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
        break;
    }
    if (modalName !== "showTaskDetailsModal") {
      if (this.showTaskDetailsModal && this.currentTask) {
      }
    }
  }
  // Bulk operations
  bulkUpdateStatus() {
    return __async(this, null, function* () {
      if (this.bulkStatusForm.valid) {
        const formData = this.bulkStatusForm.value;
        const eligibleTaskIds = Array.from(this.selectedTasks).filter((taskId) => {
          const task = this.tasks.find((t) => t.id === taskId);
          return task && task.status !== 2 && task.status !== 3;
        });
        const completedTaskIds = Array.from(this.selectedTasks).filter((taskId) => {
          const task = this.tasks.find((t) => t.id === taskId);
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
          bulkCloseDto: {
            taskIds: eligibleTaskIds,
            status: Number(formData.status),
            note: formData.note
          }
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
  // Check if any selected tasks are completed or stopped
  hasCompletedOrStoppedTasks() {
    return Array.from(this.selectedTasks).some((taskId) => {
      const task = this.tasks.find((t) => t.id === taskId);
      return task && (task.status === 2 || task.status === 3);
    });
  }
  // Status update
  updateTaskStatus() {
    return __async(this, null, function* () {
      if (this.statusUpdateForm.valid && this.currentTask) {
        const formData = this.statusUpdateForm.value;
        const newStatus = Number(formData.status);
        console.log("Current task status:", this.currentTask.status);
        console.log("Attempting to update to status:", newStatus);
        console.log("Current task:", this.currentTask);
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
      }
    }
  }
  uploadAttachment(taskId, file) {
    return __async(this, null, function* () {
      try {
        const formData = new FormData();
        formData.append("file", file);
        yield this.tasksService.addTaskAttachment(taskId, formData).toPromise();
        if (this.currentTask && this.currentTask.id === taskId) {
          yield this.loadTaskAttachments(taskId);
        }
        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
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
      this.selectedFiles.splice(index, 1);
    }
  }
  // KPI Data
  get totalTasksCount() {
    if (this.isManager) {
      return this.managerTasksOverview?.totalTasks || 0;
    }
    return this.tasksOverview?.totalTasks || 0;
  }
  get completedTasksCount() {
    if (this.isManager) {
      return this.managerTasksOverview?.completedTasks || 0;
    }
    return this.tasksOverview?.completedTasks || 0;
  }
  get inProgressTasksCount() {
    if (this.isManager) {
      return this.managerTasksOverview?.statusDistribution?.find((s) => s.status === "In_Progress")?.count || 0;
    }
    return this.tasksOverview?.statusDistribution?.find((s) => s.status === "In_Progress")?.count || 0;
  }
  get pendingTasksCount() {
    if (this.isManager) {
      return this.managerTasksOverview?.pendingTasks || 0;
    }
    return this.tasksOverview?.pendingTasks || 0;
  }
  get lateTasksCount() {
    if (this.isManager) {
      return this.managerTasksOverview?.overdueTasks || 0;
    }
    return this.tasksOverview?.overdueTasks || 0;
  }
  get completionRate() {
    if (this.isManager) {
      return this.managerTasksOverview?.completionRate || 0;
    }
    return this.tasksOverview?.completionRate || 0;
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
    const overview = this.isManager ? this.managerTasksOverview : this.tasksOverview;
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
    const overview = this.isManager ? this.managerTasksOverview : this.tasksOverview;
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
    if (this.isManager) {
      return this.managerTasksOverview?.statusDistribution || [];
    }
    return this.tasksOverview?.statusDistribution || [];
  }
  // Get priority distribution for display
  getPriorityDistribution() {
    if (this.isManager) {
      return this.managerTasksOverview?.priorityDistribution || [];
    }
    return this.tasksOverview?.priorityDistribution || [];
  }
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 455, vars: 231, consts: [["fileInput", ""], ["editFileInput", ""], ["confirmationModal", ""], ["detailsFileInput", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "row", "mb-4", "kpi-cards-row", "d-flex", "g-4"], [1, "col-lg-2", "col-md-4", "col-sm-6", "mb-4"], [1, "kpi-card", "kpi-total"], [1, "kpi-content"], [1, "kpi-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "12", "x2", "15", "y2", "12", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15", "stroke", "currentColor", "stroke-width", "2"], [1, "kpi-info"], [1, "kpi-number"], [1, "kpi-label"], [1, "kpi-card", "kpi-progress"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["points", "12,6 12,12 16,14", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completed"], ["d", "M20 6L9 17L4 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "kpi-card", "kpi-late"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completion-rate"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "completion-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-labels"], [1, "progress-min"], [1, "progress-max"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "btn", "btn-add", "gap-2", 3, "click"], [1, "plus"], [1, "filter-section", "mb-4"], [3, "formGroup"], [1, "row"], [1, "col-md-2"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change"], [1, "col-md-3"], [1, "employee-search-container", "position-relative"], ["type", "text", "formControlName", "employeeSearch", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "placeholder"], ["class", "employee-dropdown", 4, "ngIf"], ["class", "selected-employee result", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "green"], ["class", "task-card status-done compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "gray"], ["class", "task-card status-stopped compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "red"], ["class", "task-card status-late compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "yellow"], ["class", "task-card status-review compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], [1, "bulk-bar"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "text-muted"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "col-12", "mb-3"], ["type", "text", "formControlName", "title", "name", "title", "maxlength", "30", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], ["class", "text-danger", 4, "ngIf"], [1, "text-muted", "ms-auto"], [1, "col-md-6", "mb-3"], ["formControlName", "assigneeUserId", "name", "assigneeUserId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "priority", "name", "priority", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["rows", "3", "formControlName", "description", "name", "description", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "dueDate", 1, "form-control"], [1, "border", "rounded", "p-4", "text-center", "text-muted"], [1, "fas", "fa-cloud-upload-alt", "fa-2x", "mb-2"], [1, "mb-2"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["class", "mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "text", "formControlName", "title", "name", "editTitle", "maxlength", "30", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editStartDate", 1, "form-control"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editEndDate", 1, "form-control"], ["formControlName", "assigneeUserId", "name", "editAssigneeUserId", 1, "form-select"], ["rows", "3", "formControlName", "description", "name", "editDescription", 1, "form-control", 3, "placeholder"], ["formControlName", "priority", "name", "editPriority", 1, "form-select"], [1, "modal-dialog", "modal-xl"], ["class", "modal-body", 4, "ngIf"], [1, "modal-dialog"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "status", 1, "form-select", 3, "disabled"], ["value", "0", 3, "disabled"], ["value", "1", 3, "disabled"], ["value", "2", 3, "disabled"], ["value", "3", 3, "disabled"], ["value", "4", 3, "disabled"], ["value", "5", 3, "disabled"], ["value", "6", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder", "disabled"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["formControlName", "newAssigneeUserId", 1, "form-select"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["formControlName", "status", 1, "form-select"], ["value", "0"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "employee-dropdown"], [1, "employee-list"], ["class", "employee-item show-all-option", 3, "click", 4, "ngIf"], ["class", "employee-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "employee-item", "show-all-option", 3, "click"], [1, "employee-info"], [1, "employee-name"], [1, "employee-item", 3, "click"], [1, "employee-job"], [1, "selected-employee", "result"], [1, "selected-employee-info"], ["type", "button", 1, "btn-remove-employee", 3, "click"], [1, "fa", "fa-x"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], ["type", "checkbox", 1, "bulk-check", "form-check-input", 3, "click", "change", "checked"], [1, "task-content"], [1, "task-title", "mb-2", "mt-2"], [1, "task-desc", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-title", "mb-2"], [1, "task-card", "status-done", "compact", 3, "click"], [1, "task-card", "status-stopped", "compact", 3, "click"], [1, "task-card", "status-late", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "task-card", "status-review", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-danger"], [3, "value"], [1, "mt-2"], ["class", "d-flex align-items-center p-2 border rounded mb-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "p-2", "border", "rounded", "mb-1"], [1, "fas", "fa-file", "me-2", "text-muted"], [1, "flex-grow-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-center p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "file", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "me-1"], ["x1", "8", "y1", "1", "x2", "8", "y2", "15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "1", "y1", "8", "x2", "15", "y2", "8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "edit-task-btn", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], [1, "btn", "btn-outline-info", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "d-flex", "align-items-center", "p-2", "border-bottom"], [1, "fas", "fa-file", "me-2"], [1, "fw-bold"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "alert", "alert-warning", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2"]], template: function TasksComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(52, "div", 6)(53, "div", 26)(54, "div", 8)(55, "div", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 10);
      \u0275\u0275element(57, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "div", 15)(59, "div", 16);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 17);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 28)(65, "div", 29);
      \u0275\u0275element(66, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 31)(68, "span", 32);
      \u0275\u0275text(69, "0%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 33);
      \u0275\u0275text(71, "100%");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(72, "div", 34)(73, "div", 35)(74, "h1", 36);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 37);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "button", 38);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddTaskModal());
      });
      \u0275\u0275text(79);
      \u0275\u0275elementStart(80, "span", 39);
      \u0275\u0275text(81, "+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 40)(83, "form", 41)(84, "div", 42)(85, "div", 43)(86, "label", 44);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "input", 45);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_88_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 43)(90, "label", 44);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "input", 46);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_92_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 47)(94, "label", 44);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 48)(97, "input", 49);
      \u0275\u0275listener("input", function TasksComponent_Template_input_input_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeSearch());
      })("focus", function TasksComponent_Template_input_focus_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeSearchFocus());
      })("blur", function TasksComponent_Template_input_blur_97_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmployeeSearchBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(98, TasksComponent_div_98_Template, 4, 2, "div", 50)(99, TasksComponent_div_99_Template, 9, 2, "div", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 43)(101, "label", 44);
      \u0275\u0275text(102, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 52);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_103_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275text(104);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(105, "div", 53)(106, "div", 54)(107, "div", 55);
      \u0275\u0275text(108);
      \u0275\u0275elementStart(109, "span", 56);
      \u0275\u0275text(110);
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, TasksComponent_div_111_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 58);
      \u0275\u0275template(113, TasksComponent_div_113_Template, 16, 7, "div", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 54)(115, "div", 60);
      \u0275\u0275text(116);
      \u0275\u0275elementStart(117, "span", 56);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd();
      \u0275\u0275template(119, TasksComponent_div_119_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 58);
      \u0275\u0275template(121, TasksComponent_div_121_Template, 16, 9, "div", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 54)(123, "div", 62);
      \u0275\u0275text(124);
      \u0275\u0275elementStart(125, "span", 56);
      \u0275\u0275text(126);
      \u0275\u0275elementEnd();
      \u0275\u0275template(127, TasksComponent_div_127_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 58);
      \u0275\u0275template(129, TasksComponent_div_129_Template, 16, 7, "div", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 54)(131, "div", 64);
      \u0275\u0275text(132);
      \u0275\u0275elementStart(133, "span", 56);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275template(135, TasksComponent_div_135_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 58);
      \u0275\u0275template(137, TasksComponent_div_137_Template, 16, 9, "div", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(138, "div", 54)(139, "div", 66);
      \u0275\u0275text(140);
      \u0275\u0275elementStart(141, "span", 56);
      \u0275\u0275text(142);
      \u0275\u0275elementEnd();
      \u0275\u0275template(143, TasksComponent_div_143_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 58);
      \u0275\u0275template(145, TasksComponent_div_145_Template, 16, 7, "div", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 54)(147, "div", 68);
      \u0275\u0275text(148);
      \u0275\u0275elementStart(149, "span", 56);
      \u0275\u0275text(150);
      \u0275\u0275elementEnd();
      \u0275\u0275template(151, TasksComponent_div_151_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 58);
      \u0275\u0275template(153, TasksComponent_div_153_Template, 16, 7, "div", 69);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 54)(155, "div", 70);
      \u0275\u0275text(156);
      \u0275\u0275elementStart(157, "span", 56);
      \u0275\u0275text(158);
      \u0275\u0275elementEnd();
      \u0275\u0275template(159, TasksComponent_div_159_Template, 1, 0, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 58);
      \u0275\u0275template(161, TasksComponent_div_161_Template, 16, 7, "div", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(162, TasksComponent_div_162_Template, 18, 14, "div", 72);
      \u0275\u0275elementStart(163, "div", 73)(164, "div", 74)(165, "div", 75)(166, "button", 76);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_166_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAllTasks());
      });
      \u0275\u0275text(167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "span", 77);
      \u0275\u0275text(169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 78)(171, "button", 79);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_171_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkStatusModal = true);
      });
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "button", 80);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_173_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkReassignModal = true);
      });
      \u0275\u0275text(174);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(175, TasksComponent_div_175_Template, 4, 0, "div", 81);
      \u0275\u0275elementStart(176, "div", 82)(177, "div", 83)(178, "div", 84)(179, "div", 85)(180, "h5", 86);
      \u0275\u0275text(181);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_182_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275elementStart(183, "div", 88)(184, "div", 42)(185, "div", 89)(186, "label", 44);
      \u0275\u0275text(187);
      \u0275\u0275elementEnd();
      \u0275\u0275element(188, "input", 90);
      \u0275\u0275elementStart(189, "div", 91);
      \u0275\u0275template(190, TasksComponent_small_190_Template, 2, 1, "small", 92);
      \u0275\u0275elementStart(191, "small", 93);
      \u0275\u0275text(192);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(193, "div", 94)(194, "label", 44);
      \u0275\u0275text(195);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "select", 95)(197, "option", 96);
      \u0275\u0275text(198);
      \u0275\u0275elementEnd();
      \u0275\u0275template(199, TasksComponent_option_199_Template, 2, 2, "option", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "div", 94)(201, "label", 44);
      \u0275\u0275text(202);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "select", 98)(204, "option", 96);
      \u0275\u0275text(205);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "option", 99);
      \u0275\u0275text(207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "option", 100);
      \u0275\u0275text(209);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "option", 101);
      \u0275\u0275text(211);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(212, "div", 89)(213, "label", 44);
      \u0275\u0275text(214);
      \u0275\u0275elementEnd();
      \u0275\u0275element(215, "textarea", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div", 89)(217, "label", 44);
      \u0275\u0275text(218);
      \u0275\u0275elementEnd();
      \u0275\u0275element(219, "input", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "div", 89)(221, "label", 44);
      \u0275\u0275text(222);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 104);
      \u0275\u0275element(224, "i", 105);
      \u0275\u0275elementStart(225, "p", 106);
      \u0275\u0275text(226);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "input", 107, 0);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_227_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "button", 108);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_229_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r25 = \u0275\u0275reference(228);
        return \u0275\u0275resetView(fileInput_r25.click());
      });
      \u0275\u0275text(230);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(231, TasksComponent_div_231_Template, 2, 1, "div", 109);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(232, "div", 110)(233, "button", 111);
      \u0275\u0275text(234);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_235_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddTaskModal"));
      });
      \u0275\u0275text(236);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(237, "div", 82)(238, "div", 83)(239, "div", 84)(240, "div", 85)(241, "h5", 86);
      \u0275\u0275text(242);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_243_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(244, "div", 88)(245, "div", 42)(246, "div", 89)(247, "label", 44);
      \u0275\u0275text(248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(249, "input", 113);
      \u0275\u0275elementStart(250, "div", 91);
      \u0275\u0275template(251, TasksComponent_small_251_Template, 2, 1, "small", 92);
      \u0275\u0275elementStart(252, "small", 93);
      \u0275\u0275text(253);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 94)(255, "label", 44);
      \u0275\u0275text(256);
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "input", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 94)(259, "label", 44);
      \u0275\u0275text(260);
      \u0275\u0275elementEnd();
      \u0275\u0275element(261, "input", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 89)(263, "label", 44);
      \u0275\u0275text(264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "select", 116)(266, "option", 96);
      \u0275\u0275text(267);
      \u0275\u0275elementEnd();
      \u0275\u0275template(268, TasksComponent_option_268_Template, 2, 2, "option", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 89)(270, "label", 44);
      \u0275\u0275text(271);
      \u0275\u0275elementEnd();
      \u0275\u0275element(272, "textarea", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 94)(274, "label", 44);
      \u0275\u0275text(275);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "select", 118)(277, "option", 96);
      \u0275\u0275text(278);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "option", 99);
      \u0275\u0275text(280);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "option", 100);
      \u0275\u0275text(282);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "option", 101);
      \u0275\u0275text(284);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(285, "div", 89)(286, "label", 44);
      \u0275\u0275text(287);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "div", 104);
      \u0275\u0275element(289, "i", 105);
      \u0275\u0275elementStart(290, "p", 106);
      \u0275\u0275text(291);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "input", 107, 1);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_292_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event, ctx.currentTask == null ? null : ctx.currentTask.id));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "button", 108);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_294_listener() {
        \u0275\u0275restoreView(_r1);
        const editFileInput_r30 = \u0275\u0275reference(293);
        return \u0275\u0275resetView(editFileInput_r30.click());
      });
      \u0275\u0275text(295);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(296, TasksComponent_div_296_Template, 2, 1, "div", 109);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(297, "div", 110)(298, "button", 111);
      \u0275\u0275text(299);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_300_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275text(301);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(302, "div", 82)(303, "div", 119)(304, "div", 84)(305, "div", 85)(306, "h5", 86);
      \u0275\u0275text(307);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(308, TasksComponent_div_308_Template, 70, 28, "div", 120);
      \u0275\u0275elementStart(309, "div", 110)(310, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_310_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(311);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(312, "div", 82)(313, "div", 121)(314, "div", 84)(315, "div", 85)(316, "h5", 86);
      \u0275\u0275text(317);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_318_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTaskStatus());
      });
      \u0275\u0275elementStart(319, "div", 88);
      \u0275\u0275template(320, TasksComponent_div_320_Template, 3, 1, "div", 122);
      \u0275\u0275elementStart(321, "div", 123)(322, "label", 44);
      \u0275\u0275text(323);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "select", 124)(325, "option", 96);
      \u0275\u0275text(326);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "option", 125);
      \u0275\u0275text(328);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "option", 126);
      \u0275\u0275text(330);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "option", 127);
      \u0275\u0275text(332);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "option", 128);
      \u0275\u0275text(334);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "option", 129);
      \u0275\u0275text(336);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "option", 130);
      \u0275\u0275text(338);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(339, "option", 131);
      \u0275\u0275text(340);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(341, "div", 123)(342, "label", 44);
      \u0275\u0275text(343);
      \u0275\u0275elementEnd();
      \u0275\u0275element(344, "textarea", 132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 110)(346, "button", 133);
      \u0275\u0275text(347);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_348_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showStatusUpdateModal"));
      });
      \u0275\u0275text(349);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(350, "div", 82)(351, "div", 121)(352, "div", 84)(353, "div", 85)(354, "h5", 86);
      \u0275\u0275text(355);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(356, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_356_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTaskUpdate());
      });
      \u0275\u0275elementStart(357, "div", 88)(358, "div", 123)(359, "label", 44);
      \u0275\u0275text(360);
      \u0275\u0275elementEnd();
      \u0275\u0275element(361, "textarea", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(362, "div", 110)(363, "button", 135);
      \u0275\u0275text(364);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_365_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddUpdateModal"));
      });
      \u0275\u0275text(366);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(367, "div", 82)(368, "div", 121)(369, "div", 84)(370, "div", 85)(371, "h5", 86);
      \u0275\u0275text(372);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_373_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reassignTask());
      });
      \u0275\u0275elementStart(374, "div", 88)(375, "div", 123)(376, "label", 44);
      \u0275\u0275text(377);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "select", 136)(379, "option", 96);
      \u0275\u0275text(380);
      \u0275\u0275elementEnd();
      \u0275\u0275template(381, TasksComponent_option_381_Template, 2, 2, "option", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(382, "div", 123)(383, "label", 44);
      \u0275\u0275text(384);
      \u0275\u0275elementEnd();
      \u0275\u0275element(385, "textarea", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div", 110)(387, "button", 137);
      \u0275\u0275text(388);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_389_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showReassignModal"));
      });
      \u0275\u0275text(390);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(391, "div", 82)(392, "div", 121)(393, "div", 84)(394, "div", 85)(395, "h5", 86);
      \u0275\u0275text(396);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_397_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkUpdateStatus());
      });
      \u0275\u0275elementStart(398, "div", 88);
      \u0275\u0275template(399, TasksComponent_div_399_Template, 3, 1, "div", 122);
      \u0275\u0275elementStart(400, "div", 123)(401, "label", 44);
      \u0275\u0275text(402);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "select", 138)(404, "option", 96);
      \u0275\u0275text(405);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "option", 139);
      \u0275\u0275text(407);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "option", 99);
      \u0275\u0275text(409);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "option", 100);
      \u0275\u0275text(411);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(412, "option", 101);
      \u0275\u0275text(413);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "option", 140);
      \u0275\u0275text(415);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "option", 141);
      \u0275\u0275text(417);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "option", 142);
      \u0275\u0275text(419);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(420, "div", 123)(421, "label", 44);
      \u0275\u0275text(422);
      \u0275\u0275elementEnd();
      \u0275\u0275element(423, "textarea", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(424, "div", 110)(425, "button", 133);
      \u0275\u0275text(426);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_427_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkStatusModal"));
      });
      \u0275\u0275text(428);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(429, "div", 82)(430, "div", 121)(431, "div", 84)(432, "div", 85)(433, "h5", 86);
      \u0275\u0275text(434);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(435, "form", 87);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_435_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkReassign());
      });
      \u0275\u0275elementStart(436, "div", 88)(437, "div", 123)(438, "label", 44);
      \u0275\u0275text(439);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "select", 136)(441, "option", 96);
      \u0275\u0275text(442);
      \u0275\u0275elementEnd();
      \u0275\u0275template(443, TasksComponent_option_443_Template, 2, 2, "option", 97);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "div", 123)(445, "label", 44);
      \u0275\u0275text(446);
      \u0275\u0275elementEnd();
      \u0275\u0275element(447, "textarea", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "div", 110)(449, "button", 135);
      \u0275\u0275text(450);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "button", 112);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_451_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkReassignModal"));
      });
      \u0275\u0275text(452);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(453, "app-confirmation-modal", null, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_71_0;
      let tmp_99_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.totalTasks"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.inProgressTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.inProgressTasks"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.completedTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.completedTasks"));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.lateTasksCount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.overdueTasks"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(61, 228, ctx.completionRate, "1.1-1"), "%");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.completionRate"));
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.completionRate, "%");
      \u0275\u0275advance(8);
      \u0275\u0275attribute("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.subtitle"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.add_task"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateFrom"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateTo"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.employee"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("tasks.filters.searchEmployeePlaceholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEmployeeDropdown && ctx.filteredEmployees.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getSelectedEmployee());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.filters.clearFilters"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.new"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(0), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.inProgress"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(1), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(1) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.done"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(2), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(2) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(2));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.stopped"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(3), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(3) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.late"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(4), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(4) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(4));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.returned"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(5), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(5) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(5));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.review"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(6), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(6) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(6));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getMaxPagesForAnyStatus() > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("show", ctx.showBulkToolbar);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.selectAll"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.selected").replace("{count}", ctx.selectedTasks.size.toString()));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.updateStatus"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.bulk.reassign"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275styleProp("display", ctx.showAddTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showAddTaskModal);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.add_task"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addTaskForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.title"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isTitleInvalid(ctx.addTaskForm));
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.titlePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isTitleInvalid(ctx.addTaskForm));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ((tmp_71_0 = ctx.addTaskForm.get("title")) == null ? null : tmp_71_0.value == null ? null : tmp_71_0.value.length) || 0, "/30 ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectMembers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.employeesUnderManager);
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
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.dueDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.attachments"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.dragDropFiles"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.browseFiles"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFiles && ctx.selectedFiles.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.addTaskForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.save"), " ");
      \u0275\u0275advance(2);
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
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ((tmp_99_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_99_0.value == null ? null : tmp_99_0.value.length) || 0, "/30 ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.startDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.endDate"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectMembers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.description"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.form.descriptionPlaceholder"));
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.attachments"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.dragDropFiles"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.form.browseFiles"), " ");
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.statusUpdate"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.statusUpdateForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && (ctx.currentTask.status === 2 || ctx.currentTask.status === 3)));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.new"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 1));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.inProgress"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 2));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.done"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 3));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.stopped"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 4));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.late"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 5));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.returned"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !!(ctx.currentTask && ctx.currentTask.status === 6));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.review"));
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.dialogs.addUpdate"));
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
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectMembers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.employeesUnderManager);
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.updateStatus"));
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.bulkStatusForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hasCompletedOrStoppedTasks());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.newStatus"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectStatus"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.new"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.inProgress"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.done"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.stopped"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.late"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.returned"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.status.review"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.bulk.note"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.bulk.notePlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.bulkStatusForm.valid);
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
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectMembers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.employeesUnderManager);
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, ConfirmationModalComponent, DecimalPipe], styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";



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
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: .2px;
  text-align: left;
}
.top-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.page-title[dir=rtl][_ngcontent-%COMP%] {
  text-align: right;
}
.page-title[dir=ltr][_ngcontent-%COMP%] {
  text-align: left;
}
.subtle[_ngcontent-%COMP%] {
  color: #8294A8;
  font-size: .95rem;
}
.btn-add[_ngcontent-%COMP%] {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}
.btn-add[_ngcontent-%COMP%]:hover {
  background: #B68A35;
}
.btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x proximity;
}
.kanban-col[_ngcontent-%COMP%] {
  scroll-snap-align: start;
  min-width: 200px;
  max-width: 240px;
  flex: 0 0 auto;
}
.kanban-col.small[_ngcontent-%COMP%] {
  min-width: 180px;
}
.col-head[_ngcontent-%COMP%] {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
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
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.8;
}
.task-count-detail[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.2;
}
.task-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.task-card[_ngcontent-%COMP%] {
  position: relative;
  background: #fff;
  border: 1px solid rgba(9, 54, 95, .08);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: .6rem .75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: .5rem .65rem;
}
.task-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(9, 54, 95, .18);
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
}
.task-content[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.task-title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #173653;
  font-size: 0.95rem;
  margin: 0 0 .2rem;
  line-height: 1.2;
}
.task-desc[_ngcontent-%COMP%] {
  color: #7B8DA1;
  font-size: 0.85rem;
  margin: 0 0 .3rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  font-size: .82rem;
  color: #95A6B8;
}
.task-dates[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  line-height: 1.2;
}
.task-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: .35rem;
}
.task-card.status-new[_ngcontent-%COMP%]:hover {
  border: 1px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%]:hover {
  border: 1px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%]:hover {
  border: 1px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%]:hover {
  border: 1px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%]:hover {
  border: 1px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%]:hover {
  border: 1px solid 34495E;
}
.task-card.status-review[_ngcontent-%COMP%]:hover {
  border: 1px solid #eab308;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
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
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
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
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.bulk-check[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline-end: .55rem;
  inset-block-start: .55rem;
  transform: scale(1.1);
  z-index: 10;
}
.dropdown-menu[_ngcontent-%COMP%] {
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .05);
}
.dropdown-item[_ngcontent-%COMP%] {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
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
  border-top: 1px solid #E6EEF5;
  padding: .6rem .85rem;
  box-shadow: 0 -6px 18px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show[_ngcontent-%COMP%] {
  display: block;
}
.modal[_ngcontent-%COMP%] {
  z-index: 1050;
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
  border-radius: 16px;
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 1px solid #E6D7A2;
  padding: 1.5rem 1.5rem 1rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 1.5rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border-radius: 8px;
  border: 1px solid #D1D5DB;
  padding: 0.75rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
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
.edit-task-btn[_ngcontent-%COMP%] {
  color: #29ABE2;
}
.edit-task-btn[_ngcontent-%COMP%]:hover {
  background: #29ABE2;
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
  color: #3b82f6;
  border-color: #3b82f6;
  background: transparent;
}
.btn-outline-info[_ngcontent-%COMP%]:hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.filter-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  border: 2px dashed #D1D5DB !important;
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
  width: 3rem;
  height: 3rem;
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
    padding: 0.5rem 0.6rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.8rem;
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
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.5rem 0.6rem;
  }
  .task-content[_ngcontent-%COMP%] {
    margin-top: 1rem;
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
  inset-inline-end: auto;
  inset-inline-start: .55rem;
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
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
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
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.5rem;
}
.pagination-container[_ngcontent-%COMP%] {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
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
  gap: 0.25rem;
  flex-wrap: wrap;
}
.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {
  margin: 0;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #B68A35;
  border: 1px solid #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 0.875rem;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(38, 102, 127, 0.3);
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
  font-size: 0.875rem;
}
.pagination-info[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.875rem;
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
.modal[_ngcontent-%COMP%], 
.modal[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  z-index: 9999 !important;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  height: 120px;
  min-width: 280px;
  max-width: 320px;
  margin-bottom: 1rem;
  border: 1px solid rgba(238, 238, 238, 0.05);
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
  margin-bottom: 2rem;
}
.kpi-cards-row.g-4[_ngcontent-%COMP%] {
  --bs-gutter-x: 19.7rem;
  --bs-gutter-y: 1.5rem;
}
.kpi-cards-row.g-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: calc(var(--bs-gutter-y) * 0.5);
  margin-bottom: calc(var(--bs-gutter-y) * 0.5);
}
.kpi-cards-row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], 
.kpi-cards-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], 
.kpi-cards-row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  margin-bottom: 0;
  height: 100%;
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-cards-row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {
  margin-top: 2rem;
}
@media (max-width: 1200px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
@media (max-width: 576px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
.kpi-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.kpi-total[_ngcontent-%COMP%]:hover {
  border: 1px solid #09365F;
}
.kpi-progress[_ngcontent-%COMP%]:hover {
  border: 1px solid #B54708;
}
.kpi-completed[_ngcontent-%COMP%]:hover {
  border: 1px solid #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]:hover {
  border: 1px solid #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]:hover {
  border: 1px solid #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]:hover {
  border: 1px solid #059669;
}
.kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
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
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.kpi-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.25rem;
  font-style: italic;
}
.completion-progress[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 3px;
  transition: width 0.8s ease-in-out;
}
.progress-labels[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  color: #9ca3af;
  font-weight: 500;
}
.insight-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  border-left: 4px solid #B68A35;
}
.insight-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.insight-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.insight-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}
.insight-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.insight-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}
.insight-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.insight-count[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.75rem;
}
.status-dot[_ngcontent-%COMP%], 
.priority-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.efficiency-summary-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}
.summary-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.summary-title-section[_ngcontent-%COMP%] {
  flex: 1;
}
.summary-title[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}
.summary-subtitle[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}
.metric-item[_ngcontent-%COMP%] {
  text-align: center;
  min-width: 80px;
}
.metric-value[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.metric-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.summary-chart[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.chart-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 120px;
  width: 100%;
  justify-content: center;
}
.chart-bar[_ngcontent-%COMP%] {
  width: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: _ngcontent-%COMP%_chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar[_ngcontent-%COMP%]:hover   .chart-tooltip[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(-5px);
}
.chart-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
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
  border: 4px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.chart-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.8;
  text-align: center;
  min-width: 40px;
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
  .kpi-card[_ngcontent-%COMP%] {
    min-width: 100%;
    height: auto;
    min-height: 120px;
  }
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
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}
.employee-list[_ngcontent-%COMP%] {
  padding: 8px 0;
}
.employee-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.employee-item[_ngcontent-%COMP%]:hover {
  background-color: #F2ECCE;
}
.employee-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.employee-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.result[_ngcontent-%COMP%] {
  background-color: #C8E6C9 !important;
  border: 1px solid #2BA149 !important;
}
.employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee[_ngcontent-%COMP%] {
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}
.selected-employee-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-remove-employee[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee[_ngcontent-%COMP%]:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef !important;
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
  margin-right: 12px;
}
[dir=rtl][_ngcontent-%COMP%]   .btn-remove-employee[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: auto;
}
/*# sourceMappingURL=tasks.component-HZMH2SLH.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: false, template: `\r
<div class="container-fluid py-4" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
\r
\r
  <!-- KPI Cards Section -->\r
  <div class="row mb-4 kpi-cards-row d-flex g-4">\r
    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">\r
      <div class="kpi-card kpi-total">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>\r
              <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" stroke-width="2"/>\r
              <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" stroke-width="2"/>\r
              <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ totalTasksCount }}</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.totalTasks') }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">\r
      <div class="kpi-card kpi-progress">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>\r
              <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2" fill="none"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ inProgressTasksCount }}</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.inProgressTasks') }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">\r
      <div class="kpi-card kpi-completed">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ completedTasksCount }}</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.completedTasks') }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">\r
      <div class="kpi-card kpi-late">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>\r
              <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" stroke="currentColor" stroke-width="2" fill="none"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ lateTasksCount }}</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.overdueTasks') }}</div>\r
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
    <div class="col-lg-2 col-md-4 col-sm-6 mb-4">\r
      <div class="kpi-card kpi-completion-rate">\r
        <div class="kpi-content">\r
          <div class="kpi-icon">\r
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
            </svg>\r
          </div>\r
          <div class="kpi-info">\r
            <div class="kpi-number">{{ completionRate | number:'1.1-1' }}%</div>\r
            <div class="kpi-label">{{ translate('tasks.kpi.completionRate') }}</div>\r
            <div class="completion-progress">\r
              <div class="progress-bar">\r
                <div class="progress-fill" [style.width.%]="completionRate"></div>\r
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
\r
  <!-- Header Section -->\r
  <div class="d-flex justify-content-between align-items-start mb-4 top-header">\r
\r
    \r
    <div class="text-end">\r
      <h1 class="page-title mb-1" [attr.dir]="isRTL() ? 'rtl' : 'ltr'">{{ translate('tasks.title') }}</h1>\r
      <p class="subtle">{{ translate('tasks.subtitle') }}</p>\r
    </div>\r
    <button class="btn btn-add gap-2" (click)="openAddTaskModal()">\r
      {{ translate('tasks.add_task') }}\r
      <span class="plus">+</span>\r
    </button>\r
  </div>\r
\r
  <!-- Date Filter Section -->\r
  <div class="filter-section mb-4">\r
    <form [formGroup]="filterForm">\r
      <div class="row">\r
        <div class="col-md-2">\r
          <label class="form-label">{{ translate('tasks.filters.dueDateFrom') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateFrom" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">{{ translate('tasks.filters.dueDateTo') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateTo" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-3">\r
          <label class="form-label">{{ translate('tasks.filters.employee') }}</label>\r
          <div class="employee-search-container position-relative">\r
            <input type="text" \r
                   class="form-control" \r
                   formControlName="employeeSearch" \r
                   (input)="onEmployeeSearch()" \r
                   (focus)="onEmployeeSearchFocus()"\r
                   (blur)="onEmployeeSearchBlur()"\r
                   placeholder="{{ translate('tasks.filters.searchEmployeePlaceholder') }}"\r
                   autocomplete="off">\r
            \r
            <!-- Employee dropdown list -->\r
            <div class="employee-dropdown" *ngIf="showEmployeeDropdown && filteredEmployees.length > 0">\r
              <div class="employee-list">\r
                <!-- Show All Employees option when searching -->\r
                <div *ngIf="filterForm.get('employeeSearch')?.value && filteredEmployees.length < employeesUnderManager.length" \r
                     class="employee-item show-all-option" \r
                     (click)="showAllEmployees()">\r
                  \r
                  <div class="employee-info">\r
                    <div class="employee-name">{{ translate('tasks.filters.showAllEmployees') }}</div>\r
                  </div>\r
                </div>\r
                \r
                <div *ngFor="let employee of filteredEmployees" \r
                     class="employee-item" \r
                     (click)="selectEmployee(employee)">\r
                  <div class="employee-info">\r
                    <div class="employee-name">{{ employee.fullName }}</div>\r
                    <div class="employee-job">{{ employee.jobTitle }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <!-- Selected employee display -->\r
            <div class="selected-employee result" *ngIf="getSelectedEmployee()">\r
              <div class="selected-employee-info ">\r
                \r
                <div class="employee-info ">\r
                  <div class="employee-name">{{ getSelectedEmployee()?.fullName }}</div>\r
                  <div class="employee-job">{{ getSelectedEmployee()?.jobTitle }}</div>\r
                </div>\r
                <button type="button" class="btn-remove-employee" (click)="clearSelectedEmployee()">\r
                  <i class="fa fa-x"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">&nbsp;</label>\r
          <button type="button" class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
            {{ translate('tasks.filters.clearFilters') }}\r
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
        <span class="task-count">({{ getStatusTaskCount(0) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(0) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(0)" \r
             class="task-card status-new compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)">\r
          \r
\r
\r
          <!-- Task Content -->\r
          <div class="task-content">\r
            <h6 class="task-title mb-2 mt-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- In Progress Column -->\r
    <div class="kanban-col">\r
      <div class="col-head orange">\r
        {{ translate('tasks.status.inProgress') }}\r
        <span class="task-count">({{ getStatusTaskCount(1) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(1) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(1)" \r
             class="task-card status-progress compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)"\r
                 [style.display]="showBulkToolbar ? 'block' : 'none'">\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- Done Column -->\r
    <div class="kanban-col">\r
      <div class="col-head green">\r
        {{ translate('tasks.status.done') }}\r
        <span class="task-count">({{ getStatusTaskCount(2) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(2) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(2)" \r
             class="task-card status-done compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)">\r
          \r
\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- Stopped Column -->\r
    <div class="kanban-col">\r
      <div class="col-head gray">\r
        {{ translate('tasks.status.stopped') }}\r
        <span class="task-count">({{ getStatusTaskCount(3) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(3) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(3)" \r
             class="task-card status-stopped compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)"\r
                 [style.display]="showBulkToolbar ? 'block' : 'none'">\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- Late Column -->\r
    <div class="kanban-col">\r
      <div class="col-head red">\r
        {{ translate('tasks.status.late') }}\r
        <span class="task-count">({{ getStatusTaskCount(4) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(4) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(4)" \r
             class="task-card status-late compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)">\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- Returned Column -->\r
    <div class="kanban-col">\r
      <div class="col-head purple">\r
        {{ translate('tasks.status.returned') }}\r
        <span class="task-count">({{ getStatusTaskCount(5) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(5) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(5)" \r
             class="task-card status-returned compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)">\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
      </div>\r
    </div>\r
\r
    <!-- Review Column -->\r
    <div class="kanban-col">\r
      <div class="col-head yellow">\r
        {{ translate('tasks.status.review') }}\r
        <span class="task-count">({{ getStatusTaskCount(6) }})</span>\r
        <div class="task-count-detail" *ngIf="getStatusTasksOnOtherPages(6) > 0">\r
        </div>\r
      </div>\r
      <div class="task-list">\r
        <div *ngFor="let task of getTasksByStatus(6)" \r
             class="task-card status-review compact"\r
             (click)="openTaskDetailsModal(task)">\r
          \r
          <input type="checkbox" \r
                 class="bulk-check form-check-input" \r
                 [checked]="selectedTasks.has(task.id)"\r
                 (click)="$event.stopPropagation()"\r
                 (change)="toggleTaskSelection(task.id)">\r
\r
          <div class="task-content">\r
            <h6 class="task-title mb-2">{{ task.title }}</h6>\r
            \r
            <p class="task-desc mb-2">{{ task.description }}</p>\r
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
        \r
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
  <!-- Bulk Actions Toolbar -->\r
  <div class="bulk-bar" [class.show]="showBulkToolbar">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <div class="d-flex align-items-center gap-3">\r
        <button class="btn btn-sm btn-outline-primary" (click)="selectAllTasks()">\r
          {{ translate('tasks.bulk.selectAll') }}\r
        </button>\r
                 <span class="text-muted">{{ translate('tasks.bulk.selected').replace('{count}', selectedTasks.size.toString()) }}</span>\r
      </div>\r
      \r
      <div class="d-flex gap-2">\r
        <button class="btn btn-sm btn-outline-warning" (click)="showBulkStatusModal = true">\r
          {{ translate('tasks.bulk.updateStatus') }}\r
        </button>\r
        <button class="btn btn-sm btn-outline-info" (click)="showBulkReassignModal = true">\r
          {{ translate('tasks.bulk.reassign') }}\r
        </button>\r
      </div>\r
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
  <div class="modal fade" [class.show]="showAddTaskModal" [style.display]="showAddTaskModal ? 'block' : 'none'">\r
    <div class="modal-dialog modal-lg">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.add_task') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="addTaskForm" (ngSubmit)="onSubmitAddTask()">\r
          <div class="modal-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.title') }}</label>\r
                <input type="text" class="form-control" formControlName="title" name="title"\r
                       [class.is-invalid]="isTitleInvalid(addTaskForm)"\r
                       [placeholder]="translate('tasks.form.titlePlaceholder')"\r
                       maxlength="30">\r
                <div class="d-flex justify-content-between align-items-center mt-1">\r
                  <small class="text-danger" *ngIf="isTitleInvalid(addTaskForm)">\r
                    {{ getTitleErrorMessage(addTaskForm) }}\r
                  </small>\r
                  <small class="text-muted ms-auto">\r
                    {{ addTaskForm.get('title')?.value?.length || 0 }}/30\r
                  </small>\r
                </div>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.assignTo') }}</label>\r
                <select class="form-select" formControlName="assigneeUserId" name="assigneeUserId">\r
                  <option value="">{{ translate('tasks.form.selectMembers') }}</option>\r
                  <option *ngFor="let employee of employeesUnderManager" [value]="employee.id">{{ employee.fullName}}</option>\r
                </select>\r
              </div>\r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.priority') }}</label>\r
                <select class="form-select" formControlName="priority" name="priority">\r
                  <option value="">{{ translate('tasks.form.selectPriority') }}</option>\r
                  <option value="1">{{ translate('tasks.priority.high') }}</option>\r
                  <option value="2">{{ translate('tasks.priority.medium') }}</option>\r
                  <option value="3">{{ translate('tasks.priority.low') }}</option>\r
                </select>\r
              </div>\r
\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.description') }}</label>\r
                <textarea class="form-control" rows="3" formControlName="description" name="description"\r
                          [placeholder]="translate('tasks.form.descriptionPlaceholder')"></textarea>\r
              </div>\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.dueDate') }}</label>\r
                <input type="datetime-local" class="form-control" formControlName="dueDate" name="dueDate">\r
              </div>\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.attachments') }}</label>\r
                <div class="border rounded p-4 text-center text-muted">\r
                  <i class="fas fa-cloud-upload-alt fa-2x mb-2"></i>\r
                  <p class="mb-2">{{ translate('tasks.form.dragDropFiles') }}</p>\r
                  <input type="file" #fileInput class="d-none" (change)="onFileSelected($event)" multiple>\r
                  <button type="button" class="btn btn-outline-secondary btn-sm" (click)="fileInput.click()">\r
                    {{ translate('tasks.form.browseFiles') }}\r
                  </button>\r
                </div>\r
                \r
                <!-- Selected Files List -->\r
                <div *ngIf="selectedFiles && selectedFiles.length > 0" class="mt-2">\r
                  <div *ngFor="let file of selectedFiles; let i = index" class="d-flex align-items-center p-2 border rounded mb-1">\r
                    <i class="fas fa-file me-2 text-muted"></i>\r
                    <span class="flex-grow-1">{{ file.name }}</span>\r
                    <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeSelectedFile(i)">\r
                      <i class="fas fa-times"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="submit" class="btn btn-primary" [disabled]="!addTaskForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showAddTaskModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
           \r
          </div>\r
        </form>\r
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
        </div>\r
        \r
        <form [formGroup]="editTaskForm" (ngSubmit)="onSubmitEditTask()">\r
          <div class="modal-body">\r
            <div class="row">\r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.title') }}</label>\r
                <input type="text" class="form-control" formControlName="title" name="editTitle"\r
                       [class.is-invalid]="isTitleInvalid(editTaskForm)"\r
                       [placeholder]="translate('tasks.form.titlePlaceholder')"\r
                       maxlength="30">\r
                <div class="d-flex justify-content-between align-items-center mt-1">\r
                  <small class="text-danger" *ngIf="isTitleInvalid(editTaskForm)">\r
                    {{ getTitleErrorMessage(editTaskForm) }}\r
                  </small>\r
                  <small class="text-muted ms-auto">\r
                    {{ editTaskForm.get('title')?.value?.length || 0 }}/30\r
                  </small>\r
                </div>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.startDate') }}</label>\r
                <input type="datetime-local" class="form-control" formControlName="dueDate" name="editStartDate">\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.endDate') }}</label>\r
                <input type="datetime-local" class="form-control" formControlName="dueDate" name="editEndDate">\r
              </div>\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.assignTo') }}</label>\r
                <select class="form-select" formControlName="assigneeUserId" name="editAssigneeUserId">\r
                  <option value="">{{ translate('tasks.form.selectMembers') }}</option>\r
                  <option *ngFor="let user of users" [value]="user.id">{{ user.name}}</option>\r
                </select>\r
              </div>\r
              \r
\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.description') }}</label>\r
                <textarea class="form-control" rows="3" formControlName="description" name="editDescription"\r
                          [placeholder]="translate('tasks.form.descriptionPlaceholder')"></textarea>\r
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
                <label class="form-label">{{ translate('tasks.form.attachments') }}</label>\r
                <div class="border rounded p-4 text-center text-muted">\r
                  <i class="fas fa-cloud-upload-alt fa-2x mb-2"></i>\r
                  <p class="mb-2">{{ translate('tasks.form.dragDropFiles') }}</p>\r
                  <input type="file" #editFileInput class="d-none" (change)="onFileSelected($event, currentTask?.id)" multiple>\r
                  <button type="button" class="btn btn-outline-secondary btn-sm" (click)="editFileInput.click()">\r
                    {{ translate('tasks.form.browseFiles') }}\r
                  </button>\r
                </div>\r
                \r
                <!-- Selected Files List -->\r
                <div *ngIf="selectedFiles && selectedFiles.length > 0" class="mt-2">\r
                  <div *ngFor="let file of selectedFiles; let i = index" class="d-flex align-items-center p-2 border rounded mb-1">\r
                    <i class="fas fa-file me-2 text-muted"></i>\r
                    <span class="flex-grow-1">{{ file.name }}</span>\r
                    <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeSelectedFile(i)">\r
                      <i class="fas fa-times"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            \r
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
  <!-- Task Details Modal -->\r
  <div class="modal fade" [class.show]="showTaskDetailsModal" [style.display]="showTaskDetailsModal ? 'block' : 'none'">\r
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
              <div class="mb-4">\r
                <h6>{{ translate('tasks.task.attachments') }}</h6>\r
                <div class="bg-light p-3 rounded" *ngIf="currentTaskAttachments.length === 0">\r
                  {{ translate('tasks.task.noAttachments') }}\r
                </div>\r
                <div *ngFor="let attachment of currentTaskAttachments" class="d-flex align-items-center p-2 border-bottom">\r
                  <i class="fas fa-file me-2"></i>\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ attachment.fileName }}</div>\r
                    <small class="text-muted">{{ attachment.uploadedByName }} - {{ formatDate(attachment.uploadedAt) }}</small>\r
                  </div>\r
                  <button type="button" class="btn btn-sm btn-outline-danger" (click)="deleteAttachment(attachment.id, currentTask!.id)">\r
                    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" \r
                        fill="none" stroke="currentColor" stroke-width="2" \r
                        stroke-linecap="round" stroke-linejoin="round" aria-label="Delete">\r
                      <polyline points="3 6 5 6 21 6"></polyline>\r
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>\r
                      <path d="M10 11v6"></path>\r
                      <path d="M14 11v6"></path>\r
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>\r
                    </svg>\r
\r
                  </button>\r
                </div>\r
                \r
                <!-- Add New Attachment -->\r
                <div class="mt-3">\r
                  <input type="file" #detailsFileInput class="d-none" (change)="onFileSelected($event, currentTask.id)">\r
                  <button type="button" class="btn btn-outline-primary btn-sm" (click)="detailsFileInput.click()">\r
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="me-1">\r
                      <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\r
                      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>\r
                    </svg>\r
                    {{ translate('tasks.task.addAttachment') }}\r
                  </button>\r
                </div>\r
              </div>\r
              \r
\r
              \r
              <div class="mb-4">\r
                <h6>{{ translate('tasks.task.updatesTimeline') }}</h6>\r
                <div class="bg-light p-3 rounded" *ngIf="currentTaskUpdates.length === 0">\r
                  {{ translate('tasks.task.noUpdates') }}\r
                </div>\r
                <div *ngFor="let update of currentTaskUpdates" class="d-flex align-items-start p-2 border-bottom">\r
                  <div class="flex-grow-1">\r
                    <div class="fw-bold">{{ update.note }}</div>\r
                    <small class="text-muted">{{ update.createdByName }} - {{ formatDate(update.createdAt) }}</small>\r
                  </div>\r
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
                <button class="btn edit-task-btn" (click)="openEditTaskModal(currentTask)">\r
                  {{ translate('tasks.actions.edit') }}\r
                </button>\r
                <button class="btn btn-outline-warning" (click)="showStatusUpdateModal = true">\r
                  {{ translate('tasks.actions.changeStatus') }}\r
                </button>\r
                <button class="btn btn-outline-info" (click)="showAddUpdateModal = true">\r
                  {{ translate('tasks.actions.addUpdate') }}\r
                </button>\r
                <!-- <button class="btn btn-reassign" (click)="showReassignModal = true">\r
                  {{ translate('tasks.actions.reassign') }}\r
                </button> -->\r
                <button class="btn btn-outline-danger" (click)="deleteTask(currentTask)">\r
                  {{ translate('tasks.actions.delete') }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="closeModal('showTaskDetailsModal')">\r
            {{ translate('common.cancel') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Status Update Modal -->\r
  <div class="modal fade" [class.show]="showStatusUpdateModal" [style.display]="showStatusUpdateModal ? 'block' : 'none'">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.dialogs.statusUpdate') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="statusUpdateForm" (ngSubmit)="updateTaskStatus()">\r
          <div class="modal-body">\r
            <!-- Warning message for completed/stopped tasks -->\r
            <div *ngIf="currentTask && (currentTask.status === 2 || currentTask.status === 3)" \r
                 class="alert alert-warning mb-3">\r
              <i class="fas fa-exclamation-triangle me-2"></i>\r
              {{ translate('tasks.dialogs.taskCompletedWarning') }}\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.newStatus') }}</label>\r
              <select class="form-select" formControlName="status" \r
                      [disabled]="!!(currentTask && (currentTask.status === 2 || currentTask.status === 3))">\r
                <option value="">{{ translate('tasks.form.selectStatus') }}</option>\r
                <option value="0" [disabled]="!!(currentTask && currentTask.status === 0)">{{ translate('tasks.status.new') }}</option>\r
                <option value="1" [disabled]="!!(currentTask && currentTask.status === 1)">{{ translate('tasks.status.inProgress') }}</option>\r
                <option value="2" [disabled]="!!(currentTask && currentTask.status === 2)">{{ translate('tasks.status.done') }}</option>\r
                <option value="3" [disabled]="!!(currentTask && currentTask.status === 3)">{{ translate('tasks.status.stopped') }}</option>\r
                <option value="4" [disabled]="!!(currentTask && currentTask.status === 4)">{{ translate('tasks.status.late') }}</option>\r
                <option value="5" [disabled]="!!(currentTask && currentTask.status === 5)">{{ translate('tasks.status.returned') }}</option>\r
                <option value="6" [disabled]="!!(currentTask && currentTask.status === 6)">{{ translate('tasks.status.review') }}</option>\r
              </select>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control" rows="3" formControlName="note"\r
                        [placeholder]="translate('tasks.bulk.notePlaceholder')"\r
                        [disabled]="!!(currentTask && (currentTask.status === 2 || currentTask.status === 3))"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="submit" class="btn btn-warning" \r
            [disabled]="!statusUpdateForm.valid || !!(currentTask && (currentTask.status === 2 || currentTask.status === 3))">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showStatusUpdateModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
         \r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Add Update Modal -->\r
  <div class="modal fade" [class.show]="showAddUpdateModal" [style.display]="showAddUpdateModal ? 'block' : 'none'">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.dialogs.addUpdate') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="addUpdateForm" (ngSubmit)="addTaskUpdate()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control" rows="3" formControlName="note"\r
                        [placeholder]="translate('tasks.bulk.notePlaceholder')"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="submit" class="btn btn-info" [disabled]="!addUpdateForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showAddUpdateModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
            \r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Reassign Modal -->\r
  <div class="modal fade" [class.show]="showReassignModal" [style.display]="showReassignModal ? 'block' : 'none'">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.dialogs.reassign') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="reassignForm" (ngSubmit)="reassignTask()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.newAssignee') }}</label>\r
              <select class="form-select" formControlName="newAssigneeUserId">\r
                <option value="">{{ translate('tasks.form.selectMembers') }}</option>\r
                <option *ngFor="let employee of employeesUnderManager" [value]="employee.id">{{ employee.fullName}}</option>\r
              </select>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control" rows="3" formControlName="note"\r
                        [placeholder]="translate('tasks.bulk.notePlaceholder')"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            \r
            <button type="submit" class="btn btn-secondary" [disabled]="!reassignForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showReassignModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Status Update Modal -->\r
  <div class="modal fade" [class.show]="showBulkStatusModal" [style.display]="showBulkStatusModal ? 'block' : 'none'">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.bulk.updateStatus') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="bulkStatusForm" (ngSubmit)="bulkUpdateStatus()">\r
          <div class="modal-body">\r
            <!-- Warning message for completed/stopped tasks -->\r
            <div *ngIf="hasCompletedOrStoppedTasks()" \r
                 class="alert alert-warning mb-3">\r
              <i class="fas fa-exclamation-triangle me-2"></i>\r
              {{ translate('tasks.bulk.completedTasksWarning') }}\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.newStatus') }}</label>\r
              <select class="form-select" formControlName="status">\r
                <option value="">{{ translate('tasks.form.selectStatus') }}</option>\r
                <option value="0">{{ translate('tasks.status.new') }}</option>\r
                <option value="1">{{ translate('tasks.status.inProgress') }}</option>\r
                <option value="2">{{ translate('tasks.status.done') }}</option>\r
                <option value="3">{{ translate('tasks.status.stopped') }}</option>\r
                <option value="4">{{ translate('tasks.status.late') }}</option>\r
                <option value="5">{{ translate('tasks.status.returned') }}</option>\r
                <option value="6">{{ translate('tasks.status.review') }}</option>\r
              </select>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control" rows="3" formControlName="note"\r
                        [placeholder]="translate('tasks.bulk.notePlaceholder')"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            \r
            <button type="submit" class="btn btn-warning" [disabled]="!bulkStatusForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showBulkStatusModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Bulk Reassign Modal -->\r
  <div class="modal fade" [class.show]="showBulkReassignModal" [style.display]="showBulkReassignModal ? 'block' : 'none'">\r
    <div class="modal-dialog">\r
      <div class="modal-content">\r
        <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
          <h5 class="modal-title">{{ translate('tasks.bulk.reassign') }}</h5>\r
        </div>\r
        \r
        <form [formGroup]="bulkReassignForm" (ngSubmit)="bulkReassign()">\r
          <div class="modal-body">\r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.newAssignee') }}</label>\r
              <select class="form-select" formControlName="newAssigneeUserId">\r
                <option value="">{{ translate('tasks.form.selectMembers') }}</option>\r
                <option *ngFor="let employee of employeesUnderManager" [value]="employee.id">{{ employee.fullName}}</option>\r
              </select>\r
            </div>\r
            \r
            <div class="mb-3">\r
              <label class="form-label">{{ translate('tasks.bulk.note') }}</label>\r
              <textarea class="form-control" rows="3" formControlName="note"\r
                        [placeholder]="translate('tasks.bulk.notePlaceholder')"></textarea>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            \r
            <button type="submit" class="btn btn-info" [disabled]="!bulkReassignForm.valid">\r
              {{ translate('common.save') }}\r
            </button>\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showBulkReassignModal')">\r
              {{ translate('common.cancel') }}\r
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
`, styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";

/* src/app/components/tasks/tasks.component.css */
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
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: .2px;
  text-align: left;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.page-title[dir=rtl] {
  text-align: right;
}
.page-title[dir=ltr] {
  text-align: left;
}
.subtle {
  color: #8294A8;
  font-size: .95rem;
}
.btn-add {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}
.btn-add:hover {
  background: #B68A35;
}
.btn-add .plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
}
.kanban {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x proximity;
}
.kanban-col {
  scroll-snap-align: start;
  min-width: 200px;
  max-width: 240px;
  flex: 0 0 auto;
}
.kanban-col.small {
  min-width: 180px;
}
.col-head {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
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
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.8;
}
.task-count-detail small {
  display: block;
  line-height: 1.2;
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.task-card {
  position: relative;
  background: #fff;
  border: 1px solid rgba(9, 54, 95, .08);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: .6rem .75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.task-card.compact {
  padding: .5rem .65rem;
}
.task-card:hover {
  border-color: rgba(9, 54, 95, .18);
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
}
.task-content {
  margin-top: 1rem;
}
.task-title {
  font-weight: 600;
  color: #173653;
  font-size: 0.95rem;
  margin: 0 0 .2rem;
  line-height: 1.2;
}
.task-desc {
  color: #7B8DA1;
  font-size: 0.85rem;
  margin: 0 0 .3rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  font-size: .82rem;
  color: #95A6B8;
}
.task-dates {
  margin-top: 0.5rem;
}
.task-dates small {
  font-size: 0.75rem;
  line-height: 1.2;
}
.task-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: .35rem;
}
.task-card.status-new:hover {
  border: 1px solid #0ea5e9;
}
.task-card.status-progress:hover {
  border: 1px solid #fb923c;
}
.task-card.status-done:hover {
  border: 1px solid #22c55e;
}
.task-card.status-stopped:hover {
  border: 1px solid #94a3b8;
}
.task-card.status-late:hover {
  border: 1px solid #ef4444;
}
.task-card.status-returned:hover {
  border: 1px solid 34495E;
}
.task-card.status-review:hover {
  border: 1px solid #eab308;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
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
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
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
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.bulk-check {
  position: absolute;
  inset-inline-end: .55rem;
  inset-block-start: .55rem;
  transform: scale(1.1);
  z-index: 10;
}
.dropdown-menu {
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .05);
}
.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
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
  border-top: 1px solid #E6EEF5;
  padding: .6rem .85rem;
  box-shadow: 0 -6px 18px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show {
  display: block;
}
.modal {
  z-index: 1050;
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
  border-radius: 16px;
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);
}
.modal-header {
  border-bottom: 1px solid #E6D7A2;
  padding: 1.5rem 1.5rem 1rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
}
.filters-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 1.5rem;
}
.modal-footer {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border-radius: 8px;
  border: 1px solid #D1D5DB;
  padding: 0.75rem;
  transition: all 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
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
.edit-task-btn {
  color: #29ABE2;
}
.edit-task-btn:hover {
  background: #29ABE2;
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
  color: #3b82f6;
  border-color: #3b82f6;
  background: transparent;
}
.btn-outline-info:hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.filter-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  border: 2px dashed #D1D5DB !important;
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
  width: 3rem;
  height: 3rem;
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
    padding: 0.5rem 0.6rem;
  }
  .task-title {
    font-size: 0.9rem;
  }
  .task-desc {
    font-size: 0.8rem;
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
  .task-card.compact {
    padding: 0.5rem 0.6rem;
  }
  .task-content {
    margin-top: 1rem;
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
  inset-inline-end: auto;
  inset-inline-start: .55rem;
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
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.task-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
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
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.5rem;
}
.pagination-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
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
  gap: 0.25rem;
  flex-wrap: wrap;
}
.pagination .page-item {
  margin: 0;
}
.pagination .page-link {
  color: #B68A35;
  border: 1px solid #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 0.875rem;
}
.pagination .page-link:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(38, 102, 127, 0.3);
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
  font-size: 0.875rem;
}
.pagination-info {
  text-align: center;
  font-size: 0.875rem;
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
.modal,
.modal * {
  z-index: 9999 !important;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  height: 120px;
  min-width: 280px;
  max-width: 320px;
  margin-bottom: 1rem;
  border: 1px solid rgba(238, 238, 238, 0.05);
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
  margin-bottom: 2rem;
}
.kpi-cards-row.g-4 {
  --bs-gutter-x: 19.7rem;
  --bs-gutter-y: 1.5rem;
}
.kpi-cards-row.g-4 > * {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: calc(var(--bs-gutter-y) * 0.5);
  margin-bottom: calc(var(--bs-gutter-y) * 0.5);
}
.kpi-cards-row .col-lg-2,
.kpi-cards-row .col-md-4,
.kpi-cards-row .col-sm-6 {
  margin-bottom: 1.5rem;
}
.kpi-cards-row .kpi-card {
  margin-bottom: 0;
  height: 100%;
}
.kpi-cards-row .kpi-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-cards-row + .row {
  margin-top: 2rem;
}
@media (max-width: 1200px) {
  .kpi-cards-row .col-lg-2 {
    margin-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .kpi-cards-row .col-md-4 {
    margin-bottom: 1rem;
  }
}
@media (max-width: 576px) {
  .kpi-cards-row .col-sm-6 {
    margin-bottom: 1rem;
  }
}
.kpi-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.kpi-total:hover {
  border: 1px solid #09365F;
}
.kpi-progress:hover {
  border: 1px solid #B54708;
}
.kpi-completed:hover {
  border: 1px solid #0f7a2f;
}
.kpi-late:hover {
  border: 1px solid #dc2626;
}
.kpi-pending:hover {
  border: 1px solid #6b7280;
}
.kpi-completion-rate:hover {
  border: 1px solid #059669;
}
.kpi-content {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
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
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.kpi-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.25rem;
  font-style: italic;
}
.completion-progress {
  margin-top: 0.75rem;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 3px;
  transition: width 0.8s ease-in-out;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  color: #9ca3af;
  font-weight: 500;
}
.insight-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  border-left: 4px solid #B68A35;
}
.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.insight-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon {
  width: 32px;
  height: 32px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.insight-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}
.insight-item:last-child {
  border-bottom: none;
}
.insight-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}
.insight-value {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.insight-count {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage {
  color: #6b7280;
  font-size: 0.75rem;
}
.status-dot,
.priority-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.efficiency-summary-card {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}
.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.summary-title-section {
  flex: 1;
}
.summary-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}
.summary-subtitle {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}
.metric-item {
  text-align: center;
  min-width: 80px;
}
.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.metric-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.summary-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.chart-container {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 120px;
  width: 100%;
  justify-content: center;
}
.chart-bar {
  width: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar:hover .chart-tooltip {
  opacity: 1;
  transform: translateY(-5px);
}
.chart-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
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
  border: 4px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.chart-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-align: center;
  min-width: 40px;
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
  .kpi-card {
    min-width: 100%;
    height: auto;
    min-height: 120px;
  }
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
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}
.employee-list {
  padding: 8px 0;
}
.employee-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.employee-item:hover {
  background-color: #F2ECCE;
}
.employee-item:last-child {
  border-bottom: none;
}
.employee-info {
  flex: 1;
  min-width: 0;
}
.result {
  background-color: #C8E6C9 !important;
  border: 1px solid #2BA149 !important;
}
.employee-name {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee {
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}
.selected-employee-info {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-remove-employee {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option {
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef !important;
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
  margin-right: 12px;
}
[dir=rtl] .btn-remove-employee {
  margin-left: 0;
  margin-right: auto;
}
/*# sourceMappingURL=tasks.component-HZMH2SLH.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: UsersService }, { type: TranslationService }, { type: LangService }, { type: AuthService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent" });
})();

// src/app/components/tasks/my-tasks/my-tasks.component.ts
var _c02 = ["confirmationModal"];
function MyTasksComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function MyTasksComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_Template_div_click_0_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r3));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "h6", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49)(5, "small", 50)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 50)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r3.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r3.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r3.dueDate), " ");
  }
}
function MyTasksComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function MyTasksComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function MyTasksComponent_div_40_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "h6", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "small", 50)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 50)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, task_r6.title, 0, 20), "", task_r6.title.length > 20 ? "..." : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r6.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r6.dueDate), " ");
  }
}
function MyTasksComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
}
function MyTasksComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function MyTasksComponent_div_48_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "div", 47)(2, "h6", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "small", 50)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 50)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(4, 6, task_r8.title, 0, 20), "", task_r8.title.length > 20 ? "..." : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r8.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r8.dueDate), " ");
  }
}
function MyTasksComponent_div_49_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 56)(1, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_49_li_7_Template_a_click_1_listener($event) {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.goToPage(page_r11);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r3.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r11);
  }
}
function MyTasksComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "nav", 54)(2, "ul", 55)(3, "li", 56)(4, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_49_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, MyTasksComponent_div_49_li_7_Template, 3, 3, "li", 58);
    \u0275\u0275elementStart(8, "li", 56)(9, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_49_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 59)(13, "span", 60);
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("common.previous"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r3.currentPage === ctx_r3.getMaxPagesForAnyStatus());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("common.next"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate6(" ", ctx_r3.translate("common.showing"), " ", ctx_r3.getStartIndex(), " - ", ctx_r3.getEndIndex(), " ", ctx_r3.translate("common.of"), " ", ctx_r3.getTotalTasks(), " ", ctx_r3.translate("common.results"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.pagination.note"));
  }
}
function MyTasksComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62)(2, "span", 63);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MyTasksComponent_div_57_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.task.noFeedback"), " ");
  }
}
function MyTasksComponent_div_57_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r13.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r13.employeeName, " - ", ctx_r3.formatDate(feedback_r13.createdAt));
  }
}
function MyTasksComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 8)(2, "div", 64)(3, "h4", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66)(7, "div", 67);
    \u0275\u0275element(8, "i", 68);
    \u0275\u0275elementStart(9, "span", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 69);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 67);
    \u0275\u0275element(14, "i", 70);
    \u0275\u0275elementStart(15, "span", 60);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 71);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 66)(20, "div", 67);
    \u0275\u0275element(21, "i", 72);
    \u0275\u0275elementStart(22, "span", 60);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 69);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 67);
    \u0275\u0275element(27, "i", 73);
    \u0275\u0275elementStart(28, "span", 60);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 69);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 74)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 75);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 74)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, MyTasksComponent_div_57_div_40_Template, 2, 1, "div", 76)(41, MyTasksComponent_div_57_div_41_Template, 6, 3, "div", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 78)(43, "div", 79)(44, "button", 80);
    \u0275\u0275listener("click", function MyTasksComponent_div_57_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openFeedbackModal(ctx_r3.currentTask));
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.currentTask.title);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.currentTask.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.status"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getStatusClass(ctx_r3.currentTask.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusText(ctx_r3.currentTask.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.duration"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.formatDate(ctx_r3.currentTask.createdAt), " - ", ctx_r3.formatDate(ctx_r3.currentTask.dueDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.currentTask.assigneeName || ctx_r3.translate("tasks.task.noAssignee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.task.description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.currentTask.description || ctx_r3.translate("tasks.task.noSubtasks"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.task.feedback"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentTaskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.currentTaskFeedback);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r3.canSubmitFeedback(ctx_r3.currentTask));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.myTasks.actions.submitFeedback"), " ");
  }
}
function MyTasksComponent_div_74_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.myTasks.form.feedbackMinLength"), " ");
  }
}
function MyTasksComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, MyTasksComponent_div_74_div_1_Template, 2, 1, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r3.feedbackForm.get("feedbackText")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function MyTasksComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 86);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r3.showFeedbackModal || ctx_r3.showTaskDetailsModal);
  }
}
var MyTasksComponent = class _MyTasksComponent {
  tasksService;
  translationService;
  langService;
  fb;
  cdr;
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
  constructor(tasksService, translationService, langService, fb, cdr) {
    this.tasksService = tasksService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.cdr = cdr;
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
        this.tasksService.getEmployeeTasksWithFilters(formValue.dueDateFrom || void 0, formValue.dueDateTo || void 0).subscribe({
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
    if (this.canOpenModal()) {
      this.closeAllModals();
      this.currentTask = task;
      this.showTaskDetailsModal = true;
      this.loadTaskFeedback(task.id);
      this.updateBodyClass();
    }
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
  clearFilters() {
    this.filterForm.reset();
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
    return new (__ngFactoryType__ || _MyTasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyTasksComponent, selectors: [["app-my-tasks"]], viewQuery: function MyTasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 83, vars: 45, consts: [["confirmationModal", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "filter-section", "mb-4"], [3, "formGroup"], [1, "row"], [1, "col-md-3"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], ["rows", "4", "formControlName", "feedbackText", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-muted"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-backdrop", "fade"]], template: function MyTasksComponent_Template(rf, ctx) {
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
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "label", 10);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275listener("change", function MyTasksComponent_Template_input_change_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 13)(19, "label", 10);
      \u0275\u0275text(20, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(22, "i", 15);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 17)(26, "div", 18);
      \u0275\u0275text(27);
      \u0275\u0275elementStart(28, "span", 19);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, MyTasksComponent_div_30_Template, 1, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 21);
      \u0275\u0275template(32, MyTasksComponent_div_32_Template, 13, 5, "div", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 17)(34, "div", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementStart(36, "span", 19);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, MyTasksComponent_div_38_Template, 1, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 21);
      \u0275\u0275template(40, MyTasksComponent_div_40_Template, 14, 10, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 17)(42, "div", 25);
      \u0275\u0275text(43);
      \u0275\u0275elementStart(44, "span", 19);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, MyTasksComponent_div_46_Template, 1, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 21);
      \u0275\u0275template(48, MyTasksComponent_div_48_Template, 14, 10, "div", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(49, MyTasksComponent_div_49_Template, 18, 14, "div", 27)(50, MyTasksComponent_div_50_Template, 4, 0, "div", 28);
      \u0275\u0275elementStart(51, "div", 29)(52, "div", 30)(53, "div", 31)(54, "div", 32)(55, "h5", 33);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(57, MyTasksComponent_div_57_Template, 46, 19, "div", 34);
      \u0275\u0275elementStart(58, "div", 35)(59, "button", 36);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(61, "div", 29)(62, "div", 37)(63, "div", 31)(64, "div", 32)(65, "h5", 33);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "form", 38);
      \u0275\u0275listener("ngSubmit", function MyTasksComponent_Template_form_ngSubmit_67_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitFeedback());
      });
      \u0275\u0275elementStart(68, "div", 39)(69, "div", 40)(70, "label", 10);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "textarea", 41);
      \u0275\u0275text(73, "              ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, MyTasksComponent_div_74_Template, 2, 1, "div", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 35)(76, "button", 43);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "button", 36);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showFeedbackModal"));
      });
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(80, MyTasksComponent_div_80_Template, 1, 2, "div", 44);
      \u0275\u0275element(81, "app-confirmation-modal", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_35_0;
      let tmp_37_0;
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateFrom"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.filters.dueDateTo"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.filters.clearFilters"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.new"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(0), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(0) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.inProgress"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(1), ")");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getStatusTasksOnOtherPages(1) > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.getTasksByStatus(1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.status.returned"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.getStatusTaskCount(5), ")");
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
      \u0275\u0275classProp("is-invalid", ((tmp_35_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_35_0.invalid) && ((tmp_35_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_35_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("tasks.myTasks.form.feedbackPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_37_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_37_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.submit"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showFeedbackModal || ctx.showTaskDetailsModal);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent, SlicePipe], styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";



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
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: .2px;
  text-align: left;
}
.top-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.page-title[dir=rtl][_ngcontent-%COMP%] {
  text-align: right;
}
.page-title[dir=ltr][_ngcontent-%COMP%] {
  text-align: left;
}
.subtle[_ngcontent-%COMP%] {
  color: #8294A8;
  font-size: .95rem;
}
.btn-add[_ngcontent-%COMP%] {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}
.btn-add[_ngcontent-%COMP%]:hover {
  background: #B68A35;
}
.btn-add[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x proximity;
}
.kanban-col[_ngcontent-%COMP%] {
  scroll-snap-align: start;
  min-width: 200px;
  max-width: 240px;
  flex: 0 0 auto;
}
.kanban-col.small[_ngcontent-%COMP%] {
  min-width: 180px;
}
.col-head[_ngcontent-%COMP%] {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
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
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.8;
}
.task-count-detail[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  display: block;
  line-height: 1.2;
}
.task-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.task-card[_ngcontent-%COMP%] {
  position: relative;
  background: #fff;
  border: 1px solid rgba(9, 54, 95, .08);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: .6rem .75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: .5rem .65rem;
}
.task-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(9, 54, 95, .18);
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
}
.task-content[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.task-title[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #173653;
  font-size: 0.95rem;
  margin: 0 0 .2rem;
  line-height: 1.2;
}
.task-desc[_ngcontent-%COMP%] {
  color: #7B8DA1;
  font-size: 0.85rem;
  margin: 0 0 .3rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  font-size: .82rem;
  color: #95A6B8;
}
.task-dates[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.task-dates[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  line-height: 1.2;
}
.task-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: .35rem;
}
.task-card.status-new[_ngcontent-%COMP%]:hover {
  border: 1px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%]:hover {
  border: 1px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%]:hover {
  border: 1px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%]:hover {
  border: 1px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%]:hover {
  border: 1px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%]:hover {
  border: 1px solid 34495E;
}
.task-card.status-review[_ngcontent-%COMP%]:hover {
  border: 1px solid #eab308;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
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
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
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
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review[_ngcontent-%COMP%] {
  background: #fefce8;
  color: #eab308;
}
.bulk-check[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline-end: .55rem;
  inset-block-start: .55rem;
  transform: scale(1.1);
  z-index: 10;
}
.dropdown-menu[_ngcontent-%COMP%] {
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .05);
}
.dropdown-item[_ngcontent-%COMP%] {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
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
  border-top: 1px solid #E6EEF5;
  padding: .6rem .85rem;
  box-shadow: 0 -6px 18px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show[_ngcontent-%COMP%] {
  display: block;
}
.modal[_ngcontent-%COMP%] {
  z-index: 1050;
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
  border-radius: 16px;
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 1px solid #E6D7A2;
  padding: 1.5rem 1.5rem 1rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
}
.filters-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 1.5rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border-radius: 8px;
  border: 1px solid #D1D5DB;
  padding: 0.75rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
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
.edit-task-btn[_ngcontent-%COMP%] {
  color: #29ABE2;
}
.edit-task-btn[_ngcontent-%COMP%]:hover {
  background: #29ABE2;
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
  color: #3b82f6;
  border-color: #3b82f6;
  background: transparent;
}
.btn-outline-info[_ngcontent-%COMP%]:hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.filter-section[_ngcontent-%COMP%] {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  border: 2px dashed #D1D5DB !important;
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
  width: 3rem;
  height: 3rem;
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
    padding: 0.5rem 0.6rem;
  }
  .task-title[_ngcontent-%COMP%] {
    font-size: 0.9rem;
  }
  .task-desc[_ngcontent-%COMP%] {
    font-size: 0.8rem;
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
  .task-card.compact[_ngcontent-%COMP%] {
    padding: 0.5rem 0.6rem;
  }
  .task-content[_ngcontent-%COMP%] {
    margin-top: 1rem;
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
  inset-inline-end: auto;
  inset-inline-start: .55rem;
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
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
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
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.5rem;
}
.pagination-container[_ngcontent-%COMP%] {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
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
  gap: 0.25rem;
  flex-wrap: wrap;
}
.pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {
  margin: 0;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  color: #B68A35;
  border: 1px solid #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 0.875rem;
}
.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(38, 102, 127, 0.3);
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
  font-size: 0.875rem;
}
.pagination-info[_ngcontent-%COMP%] {
  text-align: center;
  font-size: 0.875rem;
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
.modal[_ngcontent-%COMP%], 
.modal[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {
  z-index: 9999 !important;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  height: 120px;
  min-width: 280px;
  max-width: 320px;
  margin-bottom: 1rem;
  border: 1px solid rgba(238, 238, 238, 0.05);
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
  margin-bottom: 2rem;
}
.kpi-cards-row.g-4[_ngcontent-%COMP%] {
  --bs-gutter-x: 19.7rem;
  --bs-gutter-y: 1.5rem;
}
.kpi-cards-row.g-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: calc(var(--bs-gutter-y) * 0.5);
  margin-bottom: calc(var(--bs-gutter-y) * 0.5);
}
.kpi-cards-row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%], 
.kpi-cards-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], 
.kpi-cards-row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  margin-bottom: 0;
  height: 100%;
}
.kpi-cards-row[_ngcontent-%COMP%]   .kpi-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-cards-row[_ngcontent-%COMP%]    + .row[_ngcontent-%COMP%] {
  margin-top: 2rem;
}
@media (max-width: 1200px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-lg-2[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
@media (max-width: 576px) {
  .kpi-cards-row[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {
    margin-bottom: 1rem;
  }
}
.kpi-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.kpi-total[_ngcontent-%COMP%]:hover {
  border: 1px solid #09365F;
}
.kpi-progress[_ngcontent-%COMP%]:hover {
  border: 1px solid #B54708;
}
.kpi-completed[_ngcontent-%COMP%]:hover {
  border: 1px solid #0f7a2f;
}
.kpi-late[_ngcontent-%COMP%]:hover {
  border: 1px solid #dc2626;
}
.kpi-pending[_ngcontent-%COMP%]:hover {
  border: 1px solid #6b7280;
}
.kpi-completion-rate[_ngcontent-%COMP%]:hover {
  border: 1px solid #059669;
}
.kpi-content[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
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
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.kpi-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.25rem;
  font-style: italic;
}
.completion-progress[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
}
.progress-bar[_ngcontent-%COMP%] {
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 3px;
  transition: width 0.8s ease-in-out;
}
.progress-labels[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  color: #9ca3af;
  font-weight: 500;
}
.insight-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  border-left: 4px solid #B68A35;
}
.insight-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.insight-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon[_ngcontent-%COMP%] {
  width: 32px;
  height: 32px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.insight-item[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}
.insight-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.insight-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}
.insight-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.insight-count[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage[_ngcontent-%COMP%] {
  color: #6b7280;
  font-size: 0.75rem;
}
.status-dot[_ngcontent-%COMP%], 
.priority-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.efficiency-summary-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}
.summary-header[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.summary-title-section[_ngcontent-%COMP%] {
  flex: 1;
}
.summary-title[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}
.summary-subtitle[_ngcontent-%COMP%] {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}
.metric-item[_ngcontent-%COMP%] {
  text-align: center;
  min-width: 80px;
}
.metric-value[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.metric-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.summary-chart[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.chart-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 120px;
  width: 100%;
  justify-content: center;
}
.chart-bar[_ngcontent-%COMP%] {
  width: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: _ngcontent-%COMP%_chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar[_ngcontent-%COMP%]:hover   .chart-tooltip[_ngcontent-%COMP%] {
  opacity: 1;
  transform: translateY(-5px);
}
.chart-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
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
  border: 4px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.chart-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.8;
  text-align: center;
  min-width: 40px;
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
  .kpi-card[_ngcontent-%COMP%] {
    min-width: 100%;
    height: auto;
    min-height: 120px;
  }
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
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}
.employee-list[_ngcontent-%COMP%] {
  padding: 8px 0;
}
.employee-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.employee-item[_ngcontent-%COMP%]:hover {
  background-color: #F2ECCE;
}
.employee-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.employee-info[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.result[_ngcontent-%COMP%] {
  background-color: #C8E6C9 !important;
  border: 1px solid #2BA149 !important;
}
.employee-name[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job[_ngcontent-%COMP%] {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee[_ngcontent-%COMP%] {
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}
.selected-employee-info[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-remove-employee[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee[_ngcontent-%COMP%]:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option[_ngcontent-%COMP%] {
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef !important;
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
  margin-right: 12px;
}
[dir=rtl][_ngcontent-%COMP%]   .btn-remove-employee[_ngcontent-%COMP%] {
  margin-left: 0;
  margin-right: auto;
}



.container-fluid[_ngcontent-%COMP%] {
  min-height: 100vh;
}
.top-header[_ngcontent-%COMP%] {
  background: white;
  color: #5F646D;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
}
.top-header[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row !important;
  align-items: flex-start;
}
.page-title[_ngcontent-%COMP%] {
  color: #5F646D !important;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}
.subtle[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}
.kanban[_ngcontent-%COMP%] {
  display: flex;
  margin-bottom: 2rem;
}
.kanban-col[_ngcontent-%COMP%] {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.col-head[_ngcontent-%COMP%] {
  padding: 1.25rem 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
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
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}
.task-list[_ngcontent-%COMP%] {
  padding: 1rem;
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
}
.task-card[_ngcontent-%COMP%] {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: 0.75rem;
}
.task-content[_ngcontent-%COMP%] {
  margin-top: 0px !important;
  position: relative;
  z-index: 1;
}
.task-title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  margin: 0;
}
.task-desc[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #9ca3af;
  line-height: 1.3;
}
.task-footer[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
}
.badge[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
.priority-high[_ngcontent-%COMP%] {
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
.priority-medium[_ngcontent-%COMP%] {
  background-color: #fffbeb;
  color: #d97706;
  border: 1px solid #fed7aa;
}
.priority-low[_ngcontent-%COMP%] {
  background-color: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.modal-content[_ngcontent-%COMP%] {
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1050;
}
.modal-dialog[_ngcontent-%COMP%] {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  max-width: 500px;
  width: 90%;
  margin: 0;
}
.modal-dialog.modal-xl[_ngcontent-%COMP%] {
  max-width: 800px;
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
  border-radius: 12px 12px 0 0;
  border-bottom: none;
  padding: 1.5rem;
}
.modal-title[_ngcontent-%COMP%] {
  font-weight: 600;
  margin: 0;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 2rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0 0 12px 12px;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%] {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control[_ngcontent-%COMP%]:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.form-control.is-invalid[_ngcontent-%COMP%] {
  border-color: #ef4444;
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #B68A35;
  color: white;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  box-shadow: 0 4px 12px rgba(246, 202, 59, 0.3);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: transparent;
  color: #1B1D21;
  border: 1px solid #1B1D21;
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
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}
@media (max-width: 768px) {
  .kanban[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .page-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .task-card[_ngcontent-%COMP%] {
    padding: 0.75rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
/*# sourceMappingURL=my-tasks.component-YXB6QU2E.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyTasksComponent, [{
    type: Component,
    args: [{ selector: "app-my-tasks", standalone: false, template: `<div class="container-fluid py-4" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
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
      <div class="row">\r
        <div class="col-md-3">\r
          <label class="form-label">{{ translate('tasks.filters.dueDateFrom') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateFrom" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-3">\r
          <label class="form-label">{{ translate('tasks.filters.dueDateTo') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateTo" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">&nbsp;</label>\r
          <button type="button" class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
            <i class="bi bi-x-circle me-2"></i>\r
            {{ translate('tasks.filters.clearFilters') }}\r
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
        <span class="task-count">({{ getStatusTaskCount(0) }})</span>\r
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
        <span class="task-count">({{ getStatusTaskCount(1) }})</span>\r
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
        <span class="task-count">({{ getStatusTaskCount(5) }})</span>\r
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
</div>`, styles: [`@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";

/* src/app/components/tasks/tasks.component.css */
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
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: .2px;
  text-align: left;
}
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.page-title[dir=rtl] {
  text-align: right;
}
.page-title[dir=ltr] {
  text-align: left;
}
.subtle {
  color: #8294A8;
  font-size: .95rem;
}
.btn-add {
  background: #B68A35;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}
.btn-add:hover {
  background: #B68A35;
}
.btn-add .plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #fff;
  color: #B68A35;
  margin-inline-end: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
}
.kanban {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x proximity;
}
.kanban-col {
  scroll-snap-align: start;
  min-width: 200px;
  max-width: 240px;
  flex: 0 0 auto;
}
.kanban-col.small {
  min-width: 180px;
}
.col-head {
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
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
  margin-top: 0.25rem;
  font-size: 0.75rem;
  opacity: 0.8;
}
.task-count-detail small {
  display: block;
  line-height: 1.2;
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.task-card {
  position: relative;
  background: #fff;
  border: 1px solid rgba(9, 54, 95, .08);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: .6rem .75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.task-card.compact {
  padding: .5rem .65rem;
}
.task-card:hover {
  border-color: rgba(9, 54, 95, .18);
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
}
.task-content {
  margin-top: 1rem;
}
.task-title {
  font-weight: 600;
  color: #173653;
  font-size: 0.95rem;
  margin: 0 0 .2rem;
  line-height: 1.2;
}
.task-desc {
  color: #7B8DA1;
  font-size: 0.85rem;
  margin: 0 0 .3rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  font-size: .82rem;
  color: #95A6B8;
}
.task-dates {
  margin-top: 0.5rem;
}
.task-dates small {
  font-size: 0.75rem;
  line-height: 1.2;
}
.task-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-top: .35rem;
}
.task-card.status-new:hover {
  border: 1px solid #0ea5e9;
}
.task-card.status-progress:hover {
  border: 1px solid #fb923c;
}
.task-card.status-done:hover {
  border: 1px solid #22c55e;
}
.task-card.status-stopped:hover {
  border: 1px solid #94a3b8;
}
.task-card.status-late:hover {
  border: 1px solid #ef4444;
}
.task-card.status-returned:hover {
  border: 1px solid 34495E;
}
.task-card.status-review:hover {
  border: 1px solid #eab308;
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
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
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
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
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
  background: #34495e3f;
  color: #34495E;
}
.badge-status.review {
  background: #fefce8;
  color: #eab308;
}
.bulk-check {
  position: absolute;
  inset-inline-end: .55rem;
  inset-block-start: .55rem;
  transform: scale(1.1);
  z-index: 10;
}
.dropdown-menu {
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .1);
  border: 1px solid rgba(0, 0, 0, .05);
}
.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
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
  border-top: 1px solid #E6EEF5;
  padding: .6rem .85rem;
  box-shadow: 0 -6px 18px rgba(0, 0, 0, .04);
  display: none;
  z-index: 1030;
}
.bulk-bar.show {
  display: block;
}
.modal {
  z-index: 1050;
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
  border-radius: 16px;
  border: none;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);
}
.modal-header {
  border-bottom: 1px solid #E6D7A2;
  padding: 1.5rem 1.5rem 1rem;
  background: #D4AF5F;
  color: #5F646D;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 40px;
}
.filters-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 1.5rem;
}
.modal-footer {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border-radius: 8px;
  border: 1px solid #D1D5DB;
  padding: 0.75rem;
  transition: all 0.2s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
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
.edit-task-btn {
  color: #29ABE2;
}
.edit-task-btn:hover {
  background: #29ABE2;
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
  color: #3b82f6;
  border-color: #3b82f6;
  background: transparent;
}
.btn-outline-info:hover {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}
.filter-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  border: 2px dashed #D1D5DB !important;
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
  width: 3rem;
  height: 3rem;
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
    padding: 0.5rem 0.6rem;
  }
  .task-title {
    font-size: 0.9rem;
  }
  .task-desc {
    font-size: 0.8rem;
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
  .task-card.compact {
    padding: 0.5rem 0.6rem;
  }
  .task-content {
    margin-top: 1rem;
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
  inset-inline-end: auto;
  inset-inline-start: .55rem;
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
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.task-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
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
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.8;
  margin-left: 0.5rem;
}
.pagination-container {
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
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
  gap: 0.25rem;
  flex-wrap: wrap;
}
.pagination .page-item {
  margin: 0;
}
.pagination .page-link {
  color: #B68A35;
  border: 1px solid #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  font-weight: 500;
  font-size: 0.875rem;
}
.pagination .page-link:hover:not(.disabled) {
  background-color: #B68A35;
  color: white;
  border-color: #B68A35;
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #B68A35;
  border-color: #B68A35;
  color: white;
  box-shadow: 0 2px 4px rgba(38, 102, 127, 0.3);
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
  font-size: 0.875rem;
}
.pagination-info {
  text-align: center;
  font-size: 0.875rem;
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
.modal,
.modal * {
  z-index: 9999 !important;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  height: 120px;
  min-width: 280px;
  max-width: 320px;
  margin-bottom: 1rem;
  border: 1px solid rgba(238, 238, 238, 0.05);
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
  margin-bottom: 2rem;
}
.kpi-cards-row.g-4 {
  --bs-gutter-x: 19.7rem;
  --bs-gutter-y: 1.5rem;
}
.kpi-cards-row.g-4 > * {
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: calc(var(--bs-gutter-y) * 0.5);
  margin-bottom: calc(var(--bs-gutter-y) * 0.5);
}
.kpi-cards-row .col-lg-2,
.kpi-cards-row .col-md-4,
.kpi-cards-row .col-sm-6 {
  margin-bottom: 1.5rem;
}
.kpi-cards-row .kpi-card {
  margin-bottom: 0;
  height: 100%;
}
.kpi-cards-row .kpi-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kpi-cards-row + .row {
  margin-top: 2rem;
}
@media (max-width: 1200px) {
  .kpi-cards-row .col-lg-2 {
    margin-bottom: 1rem;
  }
}
@media (max-width: 768px) {
  .kpi-cards-row .col-md-4 {
    margin-bottom: 1rem;
  }
}
@media (max-width: 576px) {
  .kpi-cards-row .col-sm-6 {
    margin-bottom: 1rem;
  }
}
.kpi-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
.kpi-total:hover {
  border: 1px solid #09365F;
}
.kpi-progress:hover {
  border: 1px solid #B54708;
}
.kpi-completed:hover {
  border: 1px solid #0f7a2f;
}
.kpi-late:hover {
  border: 1px solid #dc2626;
}
.kpi-pending:hover {
  border: 1px solid #6b7280;
}
.kpi-completion-rate:hover {
  border: 1px solid #059669;
}
.kpi-content {
  display: flex;
  align-items: center;
  height: 100%;
}
.kpi-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
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
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  line-height: 1;
  margin-bottom: 0.25rem;
}
.kpi-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: capitalize;
}
.kpi-subtitle {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 400;
  margin-top: 0.25rem;
  font-style: italic;
}
.completion-progress {
  margin-top: 0.75rem;
}
.progress-bar {
  width: 100%;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #158638 0%,
      #059669 100%);
  border-radius: 3px;
  transition: width 0.8s ease-in-out;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.625rem;
  color: #9ca3af;
  font-weight: 500;
}
.insight-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  border-left: 4px solid #B68A35;
}
.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.insight-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}
.insight-icon {
  width: 32px;
  height: 32px;
  background-color: #f3f4f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
.insight-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.insight-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}
.insight-item:last-child {
  border-bottom: none;
}
.insight-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  font-weight: 500;
}
.insight-value {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.insight-count {
  font-weight: 600;
  color: #1f2937;
}
.insight-percentage {
  color: #6b7280;
  font-size: 0.75rem;
}
.status-dot,
.priority-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.efficiency-summary-card {
  background:
    linear-gradient(
      135deg,
      #667eea 0%,
      #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}
.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.summary-title-section {
  flex: 1;
}
.summary-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: white;
}
.summary-subtitle {
  font-size: 1rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}
.summary-metrics {
  display: flex;
  gap: 2rem;
  flex-shrink: 0;
}
.metric-item {
  text-align: center;
  min-width: 80px;
}
.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.metric-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.summary-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.chart-container {
  display: flex;
  align-items: end;
  gap: 1rem;
  height: 120px;
  width: 100%;
  justify-content: center;
}
.chart-bar {
  width: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px 4px 0 0;
  position: relative;
  transition: all 0.6s ease-out;
  animation: chartBarGrow 0.8s ease-out forwards;
  transform: scaleY(0);
  transform-origin: bottom;
}
.chart-bar:hover .chart-tooltip {
  opacity: 1;
  transform: translateY(-5px);
}
.chart-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
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
  border: 4px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}
.chart-labels {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.chart-label {
  font-size: 0.75rem;
  opacity: 0.8;
  text-align: center;
  min-width: 40px;
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
  .kpi-card {
    min-width: 100%;
    height: auto;
    min-height: 120px;
  }
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
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}
.employee-list {
  padding: 8px 0;
}
.employee-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.employee-item:hover {
  background-color: #F2ECCE;
}
.employee-item:last-child {
  border-bottom: none;
}
.employee-info {
  flex: 1;
  min-width: 0;
}
.result {
  background-color: #C8E6C9 !important;
  border: 1px solid #2BA149 !important;
}
.employee-name {
  font-weight: 500;
  color: #333;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.employee-job {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selected-employee {
  margin-top: 8px;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
}
.selected-employee-info {
  display: flex;
  align-items: center;
  gap: 12px;
}
.btn-remove-employee {
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;
  margin-left: auto;
}
.btn-remove-employee:hover {
  background: #e9ecef;
  color: #dc3545;
}
.show-all-option {
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef !important;
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
  margin-right: 12px;
}
[dir=rtl] .btn-remove-employee {
  margin-left: 0;
  margin-right: auto;
}

/* src/app/components/tasks/my-tasks/my-tasks.component.css */
.container-fluid {
  min-height: 100vh;
}
.top-header {
  background: white;
  color: #5F646D;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
}
.top-header [dir=rtl] {
  display: flex;
  flex-direction: row !important;
  align-items: flex-start;
}
.page-title {
  color: #5F646D !important;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
}
.subtle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}
.kanban {
  display: flex;
  margin-bottom: 2rem;
}
.kanban-col {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.col-head {
  padding: 1.25rem 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
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
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
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
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}
.task-list {
  padding: 1rem;
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
}
.task-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}
.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card.compact {
  padding: 0.75rem;
}
.task-content {
  margin-top: 0px !important;
  position: relative;
  z-index: 1;
}
.task-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
  margin: 0;
}
.task-desc {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.task-meta {
  font-size: 0.75rem;
  color: #9ca3af;
  line-height: 1.3;
}
.task-footer {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #f3f4f6;
}
.badge {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}
.priority-high {
  background-color: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
.priority-medium {
  background-color: #fffbeb;
  color: #d97706;
  border: 1px solid #fed7aa;
}
.priority-low {
  background-color: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.modal-content {
  border: none;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1050;
}
.modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  max-width: 500px;
  width: 90%;
  margin: 0;
}
.modal-dialog.modal-xl {
  max-width: 800px;
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
  border-radius: 12px 12px 0 0;
  border-bottom: none;
  padding: 1.5rem;
}
.modal-title {
  font-weight: 600;
  margin: 0;
}
.modal-body {
  padding: 2rem;
}
.modal-footer {
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem;
  background-color: #f9fafb;
  border-radius: 0 0 12px 12px;
}
.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}
.form-control {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}
.form-control:focus {
  border-color: #B68A35;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
.form-control.is-invalid {
  border-color: #ef4444;
}
.invalid-feedback {
  display: block;
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
}
.btn {
  border-radius: 8px;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.btn-primary {
  background: #B68A35;
  color: white;
}
.btn-primary:hover {
  background: #B68A35;
  box-shadow: 0 4px 12px rgba(246, 202, 59, 0.3);
}
.btn-secondary {
  background: transparent;
  color: #1B1D21;
  border: 1px solid #1B1D21;
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
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}
@media (max-width: 768px) {
  .kanban {
    grid-template-columns: 1fr;
  }
  .page-title {
    font-size: 2rem;
  }
  .modal-body {
    padding: 1.5rem;
  }
  .task-card {
    padding: 0.75rem;
  }
}
[dir=rtl] .task-meta {
  text-align: right;
}
[dir=rtl] .ms-2 {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
[dir=rtl] .me-2 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
/*# sourceMappingURL=my-tasks.component-YXB6QU2E.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTasksComponent, { className: "MyTasksComponent" });
})();

// src/app/components/tasks/all-tasks/all-tasks.component.ts
var _c03 = ["confirmationModal"];
function AllTasksComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "div", 79);
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
function AllTasksComponent_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function AllTasksComponent_div_29_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAllManagers());
    });
    \u0275\u0275elementStart(1, "div", 85)(2, "div", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.show_all_managers"));
  }
}
function AllTasksComponent_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275listener("click", function AllTasksComponent_div_29_div_3_Template_div_click_0_listener() {
      const manager_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectManager(manager_r5));
    });
    \u0275\u0275elementStart(1, "div", 85)(2, "div", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const manager_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(manager_r5.name);
  }
}
function AllTasksComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81);
    \u0275\u0275template(2, AllTasksComponent_div_29_div_2_Template, 4, 1, "div", 82)(3, AllTasksComponent_div_29_div_3_Template, 4, 1, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.filterForm.get("managerSearch")) == null ? null : tmp_2_0.value) && ctx_r1.filteredManagers.length < ctx_r1.managers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredManagers);
  }
}
function AllTasksComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 85)(5, "div", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 91);
    \u0275\u0275listener("click", function AllTasksComponent_div_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelectedManager());
    });
    \u0275\u0275element(8, "i", 92);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getManagerInitials(((tmp_2_0 = ctx_r1.getSelectedManager()) == null ? null : tmp_2_0.name) || ""), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r1.getSelectedManager()) == null ? null : tmp_3_0.name);
  }
}
function AllTasksComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
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
function AllTasksComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
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
function AllTasksComponent_div_92_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "p", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.description);
  }
}
function AllTasksComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97)(3, "div", 98)(4, "h6", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 100)(7, "span", 101);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 102);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 103);
    \u0275\u0275template(12, AllTasksComponent_div_92_div_12_Template, 3, 1, "div", 104);
    \u0275\u0275elementStart(13, "div", 105)(14, "span", 106);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 107);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 105)(19, "span", 106);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 107);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 105);
    \u0275\u0275element(24, "i", 108);
    \u0275\u0275elementStart(25, "span", 106);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 107);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 105);
    \u0275\u0275element(30, "i", 109);
    \u0275\u0275elementStart(31, "span", 106);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 107);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 105);
    \u0275\u0275element(36, "i", 110);
    \u0275\u0275elementStart(37, "span", 106);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 107);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 111)(42, "button", 112);
    \u0275\u0275listener("click", function AllTasksComponent_div_92_Template_button_click_42_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 113);
    \u0275\u0275listener("click", function AllTasksComponent_div_92_Template_button_click_44_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTaskModal(task_r8));
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 114);
    \u0275\u0275listener("click", function AllTasksComponent_div_92_Template_button_click_46_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTask(task_r8));
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getPriorityClass(task_r8.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityText(task_r8.priority), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(task_r8.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(task_r8.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", task_r8.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.assigneeName || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.createdByName || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.department"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.deptName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.due_date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(task_r8.dueDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.created_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateTime(task_r8.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.details"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.delete"), " ");
  }
}
function AllTasksComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117);
    \u0275\u0275element(2, "i", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 106);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.no_tasks"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.no_tasks_description"));
  }
}
function AllTasksComponent_div_94_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 122)(1, "button", 128);
    \u0275\u0275listener("click", function AllTasksComponent_div_94_li_7_Template_button_click_1_listener() {
      const page_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r11));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r11 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", page_r11, " ");
  }
}
function AllTasksComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "nav", 120)(2, "ul", 121)(3, "li", 122)(4, "button", 123);
    \u0275\u0275listener("click", function AllTasksComponent_div_94_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(5, "i", 124);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AllTasksComponent_div_94_li_7_Template, 3, 3, "li", 125);
    \u0275\u0275elementStart(8, "li", 122)(9, "button", 123);
    \u0275\u0275listener("click", function AllTasksComponent_div_94_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(10);
    \u0275\u0275element(11, "i", 126);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 127)(13, "small", 106);
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
function AllTasksComponent_option_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r12 = ctx.$implicit;
    \u0275\u0275property("value", user_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r12.name);
  }
}
function AllTasksComponent_option_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    \u0275\u0275property("value", user_r13.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r13.name);
  }
}
function AllTasksComponent_div_194_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "h6", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 143)(4, "p", 144);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("tasks.all_tasks.description"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentTaskDetails.description);
  }
}
function AllTasksComponent_div_194_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 130)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 131)(5, "div", 132)(6, "div", 133)(7, "div", 19)(8, "div", 134)(9, "span", 135);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 136);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 134)(14, "span", 135);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 136);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 134);
    \u0275\u0275element(19, "i", 110);
    \u0275\u0275elementStart(20, "span", 135);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 137);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 134);
    \u0275\u0275element(25, "i", 138);
    \u0275\u0275elementStart(26, "span", 135);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 137);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 19)(31, "div", 134)(32, "span", 135);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 136);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 134)(37, "span", 135);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 136);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 134)(42, "span", 135);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 136);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(46, AllTasksComponent_div_194_div_46_Template, 6, 2, "div", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 140)(48, "button", 69);
    \u0275\u0275listener("click", function AllTasksComponent_div_194_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAllModals());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.assignee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.assigneeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.createdBy"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.createdByName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.status"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getStatusClass(ctx_r1.currentTaskDetails.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusText(ctx_r1.currentTaskDetails.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.priority"), ":");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getPriorityClass(ctx_r1.currentTaskDetails.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPriorityText(ctx_r1.currentTaskDetails.priority), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.department"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentTaskDetails.deptName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("tasks.all_tasks.due_date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.currentTaskDetails.dueDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("tasks.all_tasks.created_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDateTime(ctx_r1.currentTaskDetails.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentTaskDetails.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.close"), " ");
  }
}
var AllTasksComponent = class _AllTasksComponent {
  tasksService;
  usersService;
  translationService;
  langService;
  fb;
  cdr;
  confirmationModal;
  // Data
  tasks = [];
  managers = [];
  filteredManagers = [];
  showManagerDropdown = false;
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
  showAddTaskModal = false;
  showEditTaskModal = false;
  showTaskDetailsModal = false;
  // Current task and details
  currentTask = null;
  currentTaskDetails = null;
  // Forms
  addTaskForm;
  editTaskForm;
  // Users for dropdowns
  users = [];
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
  constructor(tasksService, usersService, translationService, langService, fb, cdr) {
    this.tasksService = tasksService;
    this.usersService = usersService;
    this.translationService = translationService;
    this.langService = langService;
    this.fb = fb;
    this.cdr = cdr;
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
      managerId: [""],
      managerSearch: [""]
    });
    this.addTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(30)]],
      description: [""],
      assigneeUserId: ["", Validators.required],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(40)]],
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
          this.loadManagers()
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
  loadManagers() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.tasksService.getManagerNames().subscribe({
          next: (response) => {
            if (response.success && response.data) {
              this.managers = response.data;
              this.filteredManagers = response.data;
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
        this.tasksService.getAllTasksWithFilters(this.currentPage, this.pageSize, statusFilter, formValue.dueDateFrom || void 0, formValue.dueDateTo || void 0, formValue.managerId || void 0).subscribe({
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
        this.tasksService.getAllTasksForCountingWithFilters(
          void 0,
          // No status filter for counting
          formValue.dueDateFrom || void 0,
          formValue.dueDateTo || void 0,
          formValue.managerId || void 0
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
  clearFilters() {
    this.filterForm.reset();
    this.selectedStatus = null;
    this.currentPage = 1;
    this.filteredManagers = this.managers;
    this.loadData();
  }
  // Manager search functionality
  onManagerSearch() {
    const searchTerm = this.filterForm.get("managerSearch")?.value;
    if (searchTerm && searchTerm.length > 0) {
      this.filteredManagers = this.managers.filter((manager) => manager.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      this.filteredManagers = this.managers;
    }
    this.showManagerDropdown = true;
  }
  // Show all managers when field is focused
  onManagerSearchFocus() {
    this.filteredManagers = this.managers;
    this.showManagerDropdown = true;
  }
  // Hide dropdown when clicking outside
  onManagerSearchBlur() {
    setTimeout(() => {
      this.showManagerDropdown = false;
    }, 200);
  }
  // Clear manager search
  clearManagerSearch() {
    this.filterForm.get("managerSearch")?.setValue("");
    this.filteredManagers = this.managers;
  }
  // Select manager from dropdown
  selectManager(manager) {
    this.filterForm.get("managerId")?.setValue(manager.id);
    this.filterForm.get("managerSearch")?.setValue("");
    this.filteredManagers = this.managers;
    this.showManagerDropdown = false;
    this.onFilterChange();
  }
  // Get selected manager
  getSelectedManager() {
    const managerId = this.filterForm.get("managerId")?.value;
    if (managerId) {
      return this.managers.find((m) => m.id === managerId) || null;
    }
    return null;
  }
  // Clear selected manager
  clearSelectedManager() {
    this.filterForm.get("managerId")?.setValue("");
    this.filterForm.get("managerSearch")?.setValue("");
    this.showManagerDropdown = false;
    this.onFilterChange();
  }
  // Get manager initials for avatar
  getManagerInitials(name) {
    if (!name)
      return "";
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  }
  // Show all managers (clear search)
  showAllManagers() {
    this.filterForm.get("managerSearch")?.setValue("");
    this.filteredManagers = this.managers;
    this.showManagerDropdown = true;
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
  // Modal management methods
  openAddTaskModal() {
    this.closeAllModals();
    this.showAddTaskModal = true;
    this.addTaskForm.reset();
    this.updateBodyClass();
  }
  openEditTaskModal(task) {
    this.closeAllModals();
    this.currentTask = task;
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
    this.updateBodyClass();
  }
  openTaskDetailsModal(task) {
    this.closeAllModals();
    this.currentTask = task;
    this.showTaskDetailsModal = true;
    this.loadTaskDetails(task.id);
    this.updateBodyClass();
  }
  closeAllModals() {
    this.showAddTaskModal = false;
    this.showEditTaskModal = false;
    this.showTaskDetailsModal = false;
    this.currentTask = null;
    this.currentTaskDetails = null;
    this.updateBodyClass();
  }
  updateBodyClass() {
    const hasOpenModal = this.showAddTaskModal || this.showEditTaskModal || this.showTaskDetailsModal;
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
  onSubmitAddTask() {
    return __async(this, null, function* () {
      if (this.addTaskForm.valid) {
        try {
          const formValue = this.addTaskForm.value;
          const taskData = {
            title: formValue.title,
            description: formValue.description,
            assigneeUserId: formValue.assigneeUserId,
            priority: formValue.priority,
            dueDate: new Date(formValue.dueDate).toISOString(),
            sourceType: formValue.sourceType
          };
          const response = yield this.tasksService.createTask(taskData).toPromise();
          if (response && response.success) {
            this.closeAllModals();
            this.loadData();
            this.showSuccessMessage(this.translate("tasks.add_task_success"));
          }
        } catch (error) {
          console.error("Error creating task:", error);
          this.showErrorMessage(this.translate("tasks.add_task_error"));
        }
      }
    });
  }
  onSubmitEditTask() {
    return __async(this, null, function* () {
      if (this.editTaskForm.valid && this.currentTask) {
        try {
          const formValue = this.editTaskForm.value;
          const taskData = {
            title: formValue.title,
            description: formValue.description,
            assigneeUserId: formValue.assigneeUserId,
            priority: formValue.priority,
            dueDate: new Date(formValue.dueDate).toISOString(),
            sourceType: formValue.sourceType
          };
          const response = yield this.tasksService.updateTask(this.currentTask.id, taskData).toPromise();
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
    return new (__ngFactoryType__ || _AllTasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AllTasksComponent, selectors: [["app-all-tasks"]], viewQuery: function AllTasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 197, vars: 100, consts: [["confirmationModal", ""], [1, "all-tasks-container", 3, "dir"], ["class", "loading-overlay", 4, "ngIf"], [1, "all-tasks-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "all-tasks-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "px-2"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "search-section", "mb-4"], [3, "formGroup"], [1, "row"], [1, "col-md-2"], [1, "form-label"], ["type", "date", "formControlName", "dueDateFrom", 1, "form-control", 3, "change"], ["type", "date", "formControlName", "dueDateTo", 1, "form-control", 3, "change"], [1, "col-md-6"], [1, "manager-search-container", "position-relative"], ["type", "text", "formControlName", "managerSearch", "autocomplete", "off", 1, "form-control", 3, "input", "focus", "blur", "placeholder"], ["class", "manager-dropdown", 4, "ngIf"], ["class", "selected-manager", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], [1, "status-tabs-section", "mb-4"], [1, "status-tabs-container"], ["role", "tablist", 1, "nav", "nav-tabs", "status-tabs", "p-2"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "nav-link", "status-tab", "px-2", 3, "click"], ["class", "badge ms-4", 3, "class", 4, "ngIf"], ["type", "button", 1, "nav-link", "status-tab", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "badge ms-2", 3, "class", 4, "ngIf"], [1, "bi", "bi-check-circle", "me-2"], [1, "bi", "bi-pause-circle", "me-2"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "bi", "bi-arrow-return-left", "me-2"], [1, "bi", "bi-eye", "me-2"], [1, "results-summary", "mb-3"], [1, "mb-0", "text-muted"], [1, "tasks-cards-container"], [1, "row", "g-4"], ["class", "col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], ["class", "empty-state text-center py-5", 4, "ngIf"], ["class", "pagination-container mt-4", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-title"], [1, "modal-body"], [3, "ngSubmit", "formGroup"], [1, "col-md-12", "mb-3"], ["type", "text", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], [1, "col-md-6", "mb-3"], ["formControlName", "assigneeUserId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "priority", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "date", "formControlName", "dueDate", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "text", "formControlName", "title", 1, "form-control"], ["formControlName", "description", "rows", "3", 1, "form-control"], ["value", "", "disabled", ""], ["tabindex", "-1", "role", "dialog", "aria-modal", "true", 1, "modal", "fade", "task-details-modal", 3, "click"], [1, "modal-dialog", "modal-xl", 3, "click"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-spinner"], [1, "spinner"], [1, "manager-dropdown"], [1, "manager-list"], ["class", "manager-item show-all-option", 3, "click", 4, "ngIf"], ["class", "manager-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "manager-item", "show-all-option", 3, "click"], [1, "manager-info"], [1, "manager-name"], [1, "manager-item", 3, "click"], [1, "selected-manager"], [1, "selected-manager-info"], [1, "manager-avatar"], ["type", "button", 1, "btn-remove-manager", 3, "click"], [1, "bi", "bi-x"], [1, "badge", "ms-4"], [1, "badge", "ms-2"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "task-card"], [1, "card-header"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "task-title", "mb-0"], [1, "task-badges"], [1, "badge", "me-1"], [1, "badge"], [1, "card-body"], ["class", "task-description mb-3", 4, "ngIf"], [1, "task-info-item", "mb-2"], [1, "text-muted"], [1, "ms-1"], [1, "bi", "bi-building", "me-2", "text-muted"], [1, "bi", "bi-calendar-date", "me-2", "text-muted"], [1, "bi", "bi-clock", "me-2", "text-muted"], [1, "task-actions"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-secondary", "me-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "task-description", "mb-3"], [1, "empty-state", "text-center", "py-5"], [1, "empty-icon", "mb-3"], [1, "bi", "bi-list-task", "fa-3x", "text-muted"], [1, "pagination-container", "mt-4"], ["aria-label", "Tasks pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], [1, "fas", "fa-chevron-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "text-center", "mt-2"], [1, "page-link", 3, "click"], [3, "value"], [1, "task-details-header"], [1, "row", "w-100"], [1, "col-md-12"], [1, "row", "mb-4"], [1, "d-flex", "align-items-center", "mb-3", "px-2"], [1, "text-muted", "me-2"], [1, "ms-2", "me-2", "fw-medium"], [1, "ms-2", "badge"], [1, "bi", "bi-flag", "me-2", "text-muted"], ["class", "mb-4", 4, "ngIf"], [1, "col-md-4", "close-btn-div"], [1, "mb-4"], [1, "text-dark", "mb-1"], [1, "p-3", "bg-light", "rounded"], [1, "mb-0"]], template: function AllTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, AllTasksComponent_div_1_Template, 5, 1, "div", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "h1", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddTaskModal());
      });
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 9);
      \u0275\u0275element(11, "line", 10)(12, "line", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 12)(14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "label", 16);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 17);
      \u0275\u0275listener("change", function AllTasksComponent_Template_input_change_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "label", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 18);
      \u0275\u0275listener("change", function AllTasksComponent_Template_input_change_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 19)(25, "label", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "input", 21);
      \u0275\u0275listener("input", function AllTasksComponent_Template_input_input_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onManagerSearch());
      })("focus", function AllTasksComponent_Template_input_focus_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onManagerSearchFocus());
      })("blur", function AllTasksComponent_Template_input_blur_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onManagerSearchBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, AllTasksComponent_div_29_Template, 4, 2, "div", 22)(30, AllTasksComponent_div_30_Template, 9, 2, "div", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 15)(32, "label", 16);
      \u0275\u0275text(33, "\xA0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 24);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_34_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(35, "i", 25);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "ul", 28)(40, "li", 29)(41, "button", 30);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(null));
      });
      \u0275\u0275elementStart(42, "span", 8);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, AllTasksComponent_span_44_Template, 2, 3, "span", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li", 29)(46, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(0));
      });
      \u0275\u0275element(47, "i", 33);
      \u0275\u0275elementStart(48, "span", 8);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, AllTasksComponent_span_50_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li", 29)(52, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(1));
      });
      \u0275\u0275elementStart(53, "span", 8);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, AllTasksComponent_span_55_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li", 29)(57, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(2));
      });
      \u0275\u0275element(58, "i", 35);
      \u0275\u0275elementStart(59, "span", 8);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275template(61, AllTasksComponent_span_61_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li", 29)(63, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(3));
      });
      \u0275\u0275element(64, "i", 36);
      \u0275\u0275elementStart(65, "span", 8);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, AllTasksComponent_span_67_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li", 29)(69, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_69_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(4));
      });
      \u0275\u0275element(70, "i", 37);
      \u0275\u0275elementStart(71, "span", 8);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275template(73, AllTasksComponent_span_73_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li", 29)(75, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_75_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(5));
      });
      \u0275\u0275element(76, "i", 38);
      \u0275\u0275elementStart(77, "span", 8);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, AllTasksComponent_span_79_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li", 29)(81, "button", 32);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_81_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onStatusTabClick(6));
      });
      \u0275\u0275element(82, "i", 39);
      \u0275\u0275elementStart(83, "span", 8);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, AllTasksComponent_span_85_Template, 2, 3, "span", 34);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "div", 40)(87, "div", 4)(88, "p", 41);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 42)(91, "div", 43);
      \u0275\u0275template(92, AllTasksComponent_div_92_Template, 48, 21, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, AllTasksComponent_div_93_Template, 7, 2, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, AllTasksComponent_div_94_Template, 15, 13, "div", 46);
      \u0275\u0275elementStart(95, "div", 47)(96, "div", 48)(97, "div", 49)(98, "div", 50)(99, "button", 51);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_99_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h5", 52);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 53)(103, "form", 54);
      \u0275\u0275listener("ngSubmit", function AllTasksComponent_Template_form_ngSubmit_103_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275elementStart(104, "div", 14)(105, "div", 55)(106, "label", 16);
      \u0275\u0275text(107);
      \u0275\u0275elementEnd();
      \u0275\u0275element(108, "input", 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 55)(110, "label", 16);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275element(112, "textarea", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 58)(114, "label", 16);
      \u0275\u0275text(115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "select", 59)(117, "option", 60);
      \u0275\u0275text(118);
      \u0275\u0275elementEnd();
      \u0275\u0275template(119, AllTasksComponent_option_119_Template, 2, 2, "option", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 58)(121, "label", 16);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "select", 62)(124, "option", 60);
      \u0275\u0275text(125);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "option", 63);
      \u0275\u0275text(127);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "option", 64);
      \u0275\u0275text(129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "option", 65);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 58)(133, "label", 16);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd();
      \u0275\u0275element(135, "input", 66);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 67)(137, "button", 68);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_137_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275text(138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "button", 69);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_139_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275text(140);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(141, "div", 47)(142, "div", 48)(143, "div", 49)(144, "div", 50)(145, "button", 51);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_145_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "h5", 52);
      \u0275\u0275text(147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 53)(149, "form", 54);
      \u0275\u0275listener("ngSubmit", function AllTasksComponent_Template_form_ngSubmit_149_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(150, "div", 14)(151, "div", 55)(152, "label", 16);
      \u0275\u0275text(153);
      \u0275\u0275elementEnd();
      \u0275\u0275element(154, "input", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 55)(156, "label", 16);
      \u0275\u0275text(157);
      \u0275\u0275elementEnd();
      \u0275\u0275element(158, "textarea", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 58)(160, "label", 16);
      \u0275\u0275text(161);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "select", 59)(163, "option", 72);
      \u0275\u0275text(164);
      \u0275\u0275elementEnd();
      \u0275\u0275template(165, AllTasksComponent_option_165_Template, 2, 2, "option", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 58)(167, "label", 16);
      \u0275\u0275text(168);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "select", 62)(170, "option", 72);
      \u0275\u0275text(171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "option", 63);
      \u0275\u0275text(173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "option", 64);
      \u0275\u0275text(175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "option", 65);
      \u0275\u0275text(177);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "div", 58)(179, "label", 16);
      \u0275\u0275text(180);
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "input", 66);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(182, "div", 67)(183, "button", 68);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_183_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275text(184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "button", 69);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_185_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275text(186);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(187, "div", 73);
      \u0275\u0275listener("click", function AllTasksComponent_Template_div_click_187_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onModalBackdropClick($event));
      });
      \u0275\u0275elementStart(188, "div", 74);
      \u0275\u0275listener("click", function AllTasksComponent_Template_div_click_188_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275elementStart(189, "div", 49)(190, "div", 50)(191, "button", 75);
      \u0275\u0275listener("click", function AllTasksComponent_Template_button_click_191_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeAllModals());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "h5", 52);
      \u0275\u0275text(193);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(194, AllTasksComponent_div_194_Template, 50, 21, "div", 76);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(195, "app-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.add_task"));
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_from"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date_to"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.select_manager"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx.translate("tasks.all_tasks.search_manager_placeholder")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showManagerDropdown && ctx.filteredManagers.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getSelectedManager());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.all_tasks.clear_filters"), " ");
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
      \u0275\u0275styleProp("display", ctx.showAddTaskModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showAddTaskModal);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translate("tasks.add_task"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.addTaskForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.title_column"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.title_placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.description"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("tasks.description_placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.assignee"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.select_assignee"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.select_priority"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.high"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.medium"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.low"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.due_date"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.add_task"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
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
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.select_assignee"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.all_tasks.priority"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.select_priority"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.high"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.medium"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.priority.low"));
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ['\n\n.all-tasks-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.all-tasks-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.all-tasks-title[_ngcontent-%COMP%] {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-section[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.3s ease;\n}\n.search-section[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.status-tabs-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.status-tabs-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs[_ngcontent-%COMP%] {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.5rem;\n}\n.status-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active[_ngcontent-%COMP%] {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active[_ngcontent-%COMP%]:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.status-tab.active[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.results-summary[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n.results-summary[_ngcontent-%COMP%]   .form-select-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 4px;\n}\n.tasks-cards-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n}\n.task-card[_ngcontent-%COMP%] {\n  border: 1px solid #F2ECCE;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  height: 100%;\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n.task-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #B68A35;\n}\n.task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f2ecce8c;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n  border-radius: 12px 12px 0 0;\n}\n.task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.task-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  line-height: 1.3;\n  margin-bottom: 0;\n}\n.task-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.task-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.4;\n  color: #6c757d;\n}\n.task-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n}\n.task-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  text-align: center;\n}\n.task-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 1rem;\n  border-top: 1px solid #f4f4f4;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: 80px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.priority-high[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.priority-medium[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.priority-low[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.status-new[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.status-inProgress[_ngcontent-%COMP%] {\n  background-color: #D87E37;\n  color: white;\n}\n.status-done[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.status-stopped[_ngcontent-%COMP%] {\n  background-color: #464545;\n  color: white;\n}\n.status-late[_ngcontent-%COMP%] {\n  background-color: #B45253;\n  color: white;\n}\n.status-returned[_ngcontent-%COMP%] {\n  background-color: #78260D;\n  color: white;\n}\n.status-review[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  color: white;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35 !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #555555 !important;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%] {\n  color: #92722A;\n  border: 1px solid #92722A;\n  background: #E6D7A2;\n  transition: all 0.3s ease;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #D4AF5F;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n  background: #F2ECCE;\n  transition: all 0.3s ease;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #D4AF5F;\n  color: white;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%] {\n  color: #C62828;\n  border: 1px solid #C62828;\n  background-color: #f9c8cd96;\n  transition: all 0.3s ease;\n}\n.task-actions[_ngcontent-%COMP%]   .btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #ffc6cccc;\n  color: #c95454;\n  box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.25);\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.task-actions[_ngcontent-%COMP%]   .btn.loading[_ngcontent-%COMP%] {\n  position: relative;\n  color: transparent;\n}\n.task-actions[_ngcontent-%COMP%]   .btn.loading[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  border: 2px solid transparent;\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_button-spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_button-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  color: #92722A;\n  border: 1px solid #F2ECCE;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  background-color: #fff;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  border-radius: 5px;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  color: #B68A35;\n  background-color: #F2ECCE;\n  border-color: #F2ECCE;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #F2ECCE;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n@media (max-width: 768px) {\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-section[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], \n   .search-section[_ngcontent-%COMP%]   .col-md-2[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .results-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .task-badges[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .task-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n@media (max-width: 576px) {\n  .all-tasks-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .all-tasks-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .task-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .task-title[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.5rem;\n  }\n  .task-info-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .stat-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .task-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .task-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.4rem 0.8rem;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  margin: 1.75rem auto;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  overflow: hidden;\n  border-radius: 12px !important;\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F !important;\n  border-bottom: none;\n  padding: 1.5rem 2rem;\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 15%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]::before {\n  content: "\\d7";\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #fafafa;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem 2rem;\n  gap: 0.75rem;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 0;\n  margin-left: auto;\n  order: 2;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 0;\n  margin-right: auto;\n  order: 2;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n[dir=ltr][_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-body[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \n.modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e9ecef;\n  font: 1em sans-serif;\n  padding: 0.75rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \n.modal-body[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.task-details-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.task-details-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n}\n.task-details-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 1.5rem;\n  margin-bottom: 2rem;\n}\n.task-details-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.task-details-stats[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.close-btn-div[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  display: flex;\n  width: 100%;\n}\n.task-details-stats[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: transparent;\n  border-bottom: 1px solid #dee2e6;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n.task-details-stats[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n  margin: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: -1px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-1[_ngcontent-%COMP%], \n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.25rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-end[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.manager-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.manager-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.manager-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.manager-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.manager-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.manager-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.show-all-option[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.show-all-option[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.show-all-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #28a745 0%,\n      #20c997 100%) !important;\n  color: white;\n}\n.manager-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.manager-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.manager-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-manager[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-manager-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-manager[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-manager[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n[dir=rtl][_ngcontent-%COMP%]   .manager-avatar[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-remove-manager[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=all-tasks.component-4MWVI4W2.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AllTasksComponent, [{
    type: Component,
    args: [{ selector: "app-all-tasks", standalone: false, template: `<div class="all-tasks-container" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Loading Spinner -->\r
  <div *ngIf="isLoading" class="loading-overlay">\r
    <div class="loading-spinner">\r
      <div class="spinner"></div>\r
      <p>{{ translate('common.loading') }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- Header Section -->\r
  <div class="all-tasks-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="all-tasks-title">{{ translate('tasks.all_tasks.title') }}</h1>\r
      <div class="d-flex gap-2">\r
        <!-- Add Task Button -->\r
        <button class="btn btn-primary" (click)="openAddTaskModal()">\r
          <span class="px-2">{{ translate('tasks.add_task') }}</span>\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="5" x2="12" y2="19"/>\r
            <line x1="5" y1="12" x2="19" y2="12"/>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters Section -->\r
  <div class="search-section mb-4">\r
    <form [formGroup]="filterForm">\r
      <div class="row">\r
        <div class="col-md-2">\r
          <label class="form-label">{{ translate('tasks.all_tasks.due_date_from') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateFrom" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">{{ translate('tasks.all_tasks.due_date_to') }}</label>\r
          <input type="date" class="form-control" formControlName="dueDateTo" (change)="onFilterChange()">\r
        </div>\r
        <div class="col-md-6">\r
          <label class="form-label">{{ translate('tasks.all_tasks.select_manager') }}</label>\r
          <div class="manager-search-container position-relative">\r
            <input type="text" \r
                   class="form-control" \r
                   formControlName="managerSearch" \r
                   (input)="onManagerSearch()" \r
                   (focus)="onManagerSearchFocus()"\r
                   (blur)="onManagerSearchBlur()"\r
                   placeholder="{{ translate('tasks.all_tasks.search_manager_placeholder') }}"\r
                   autocomplete="off">\r
            \r
            <!-- Manager dropdown list -->\r
            <div class="manager-dropdown" *ngIf="showManagerDropdown && filteredManagers.length > 0">\r
              <div class="manager-list">\r
                <!-- Show All Managers option when searching -->\r
                <div *ngIf="filterForm.get('managerSearch')?.value && filteredManagers.length < managers.length" \r
                     class="manager-item show-all-option" \r
                     (click)="showAllManagers()">\r
                  <div class="manager-info">\r
                    <div class="manager-name">{{ translate('tasks.all_tasks.show_all_managers') }}</div>\r
                  </div>\r
                </div>\r
                \r
                <div *ngFor="let manager of filteredManagers" \r
                     class="manager-item" \r
                     (click)="selectManager(manager)">\r
                 \r
                  <div class="manager-info">\r
                    <div class="manager-name">{{ manager.name }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <!-- Selected manager display -->\r
            <div class="selected-manager" *ngIf="getSelectedManager()">\r
              <div class="selected-manager-info">\r
                <div class="manager-avatar">\r
                  {{ getManagerInitials(getSelectedManager()?.name || '') }}\r
                </div>\r
                <div class="manager-info">\r
                  <div class="manager-name">{{ getSelectedManager()?.name }}</div>\r
                </div>\r
                <button type="button" class="btn-remove-manager" (click)="clearSelectedManager()">\r
                  <i class="bi bi-x"></i>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="col-md-2">\r
          <label class="form-label">&nbsp;</label>\r
          <button type="button" class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
            <i class="bi bi-x-circle me-2"></i>\r
            {{ translate('tasks.all_tasks.clear_filters') }}\r
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
            <span class="px-2">{{ translate('tasks.all_tasks.all_statuses') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.new') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.inProgress') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.done') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.stopped') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.late') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.returned') }}</span>\r
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
            <span class="px-2">{{ translate('tasks.status.review') }}</span>\r
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
        {{ translate('tasks.all_tasks.showing') }} \r
        {{ getStartIndex() }} - {{ getEndIndex() }} \r
        {{ translate('tasks.all_tasks.of') }} \r
        {{ totalCount }} \r
        {{ translate('tasks.all_tasks.tasks') }}\r
      </p>\r
    </div>\r
  </div>\r
\r
<!-- Tasks Cards -->\r
<div class="tasks-cards-container">\r
  <div class="row g-4">\r
    <div class="col-lg-4 col-md-6 col-sm-12" *ngFor="let task of tasks">\r
      <div class="task-card">\r
        <div class="card-header">\r
          <div class="d-flex justify-content-between align-items-start">\r
            <h6 class="task-title mb-0">{{ task.title }}</h6>\r
            <div class="task-badges">\r
              <span class="badge me-1" [class]="getPriorityClass(task.priority)">\r
                {{ getPriorityText(task.priority) }}\r
              </span>\r
              <span class="badge" [class]="getStatusClass(task.status)">\r
                {{ getStatusText(task.status) }}\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="card-body">\r
          <!-- Description -->\r
          <div class="task-description mb-3" *ngIf="task.description">\r
            <p class="mb-0 text-muted">{{ task.description }}</p>\r
          </div>\r
          \r
          <!-- Assignee -->\r
          <div class="task-info-item mb-2">\r
            <span class="text-muted">{{ translate('tasks.all_tasks.assignee') }}:</span>\r
            <span class="ms-1">{{ task.assigneeName || '-' }}</span>\r
          </div>\r
          <!-- created by -->\r
          <div class="task-info-item mb-2">\r
            <span class="text-muted">{{ translate('tasks.all_tasks.createdBy') }}:</span>\r
            <span class="ms-1">{{ task.createdByName || '-' }}</span>\r
          </div>\r
          \r
          <!-- Department -->\r
          <div class="task-info-item mb-2">\r
            <i class="bi bi-building me-2 text-muted"></i>\r
            <span class="text-muted">{{ translate('tasks.all_tasks.department') }}:</span>\r
            <span class="ms-1">{{ task.deptName }}</span>\r
          </div>\r
          \r
          <!-- Due Date -->\r
          <div class="task-info-item mb-2">\r
            <i class="bi bi-calendar-date me-2 text-muted"></i>\r
            <span class="text-muted">{{ translate('tasks.all_tasks.due_date') }}:</span>\r
            <span class="ms-1">{{ formatDate(task.dueDate) }}</span>\r
          </div>\r
          \r
          <!-- Created Date -->\r
          <div class="task-info-item mb-2">\r
            <i class="bi bi-clock me-2 text-muted"></i>\r
            <span class="text-muted">{{ translate('tasks.all_tasks.created_at') }}:</span>\r
            <span class="ms-1">{{ formatDateTime(task.createdAt) }}</span>\r
          </div>\r
          \r
          <!-- Action Buttons -->\r
          <div class="task-actions">\r
            <button class="btn btn-sm btn-outline-primary me-2" (click)="openTaskDetailsModal(task)">\r
              {{ translate('common.details') }}\r
            </button>\r
            <button class="btn btn-sm btn-outline-secondary me-2" (click)="openEditTaskModal(task)">\r
              {{ translate('common.edit') }}\r
            </button>\r
            <button class="btn btn-sm btn-outline-danger" (click)="deleteTask(task)">\r
              {{ translate('common.delete') }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="tasks.length === 0 && !isLoading" class="empty-state text-center py-5">\r
    <div class="empty-icon mb-3">\r
      <i class="bi bi-list-task fa-3x text-muted"></i>\r
    </div>\r
    <h5 class="text-muted">{{ translate('tasks.all_tasks.no_tasks') }}</h5>\r
    <p class="text-muted">{{ translate('tasks.all_tasks.no_tasks_description') }}</p>\r
  </div>\r
</div>\r
\r
<!-- Pagination -->\r
<div *ngIf="totalPages > 1" class="pagination-container mt-4">\r
  <nav aria-label="Tasks pagination">\r
    <ul class="pagination justify-content-center">\r
      <!-- Previous Button -->\r
      <li class="page-item" [class.disabled]="currentPage === 1">\r
        <button class="page-link" \r
                (click)="goToPage(currentPage - 1)"\r
                [disabled]="currentPage === 1">\r
          <i class="fas fa-chevron-left"></i>\r
          {{ translate('common.previous') }}\r
        </button>\r
      </li>\r
\r
      <!-- Page Numbers -->\r
      <li *ngFor="let page of getPageNumbers()" \r
          class="page-item" \r
          [class.active]="page === currentPage">\r
        <button class="page-link" (click)="goToPage(page)">\r
          {{ page }}\r
        </button>\r
      </li>\r
\r
      <!-- Next Button -->\r
      <li class="page-item" [class.disabled]="currentPage === totalPages">\r
        <button class="page-link" \r
                (click)="goToPage(currentPage + 1)"\r
                [disabled]="currentPage === totalPages">\r
          {{ translate('common.next') }}\r
          <i class="fas fa-chevron-right"></i>\r
        </button>\r
      </li>\r
    </ul>\r
  </nav>\r
\r
  <!-- Page Info -->\r
  <div class="text-center mt-2">\r
    <small class="text-muted">\r
      {{ translate('tasks.all_tasks.page') }} {{ currentPage }} {{ translate('tasks.all_tasks.of') }} {{ totalPages }}\r
    </small>\r
  </div>\r
</div>\r
\r
<!-- Add Task Modal -->\r
<div class="modal fade" [class.show]="showAddTaskModal" [style.display]="showAddTaskModal ? 'block' : 'none'">\r
  <div class="modal-dialog modal-lg">\r
    <div class="modal-content ">\r
       <div class="modal-header">\r
         <button type="button" class="btn-close" (click)="closeAllModals()"></button>\r
         <h5 class="modal-title">{{ translate('tasks.add_task') }}</h5>\r
       </div>\r
      <div class="modal-body">\r
        <form [formGroup]="addTaskForm" (ngSubmit)="onSubmitAddTask()">\r
          <div class="row">\r
             <div class="col-md-12 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.title_column') }}</label>\r
               <input type="text" class="form-control" formControlName="title" \r
                      [placeholder]="translate('tasks.title_placeholder')">\r
             </div>\r
             <div class="col-md-12 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.description') }}</label>\r
               <textarea class="form-control" formControlName="description" rows="3"\r
                         [placeholder]="translate('tasks.description_placeholder')"></textarea>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.assignee') }}</label>\r
               <select class="form-select" formControlName="assigneeUserId">\r
                 <option value="">{{ translate('tasks.select_assignee') }}</option>\r
                 <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>\r
               </select>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.priority') }}</label>\r
               <select class="form-select" formControlName="priority">\r
                 <option value="">{{ translate('tasks.select_priority') }}</option>\r
                 <option value="1">{{ translate('tasks.priority.high') }}</option>\r
                 <option value="2">{{ translate('tasks.priority.medium') }}</option>\r
                 <option value="3">{{ translate('tasks.priority.low') }}</option>\r
               </select>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.due_date') }}</label>\r
               <input type="date" class="form-control" formControlName="dueDate">\r
             </div>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        <button type="button" class="btn btn-primary" (click)="onSubmitAddTask()">\r
              {{ translate('tasks.add_task') }}\r
        </button>\r
        <button type="button" class="btn btn-secondary" (click)="closeAllModals()">\r
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
       <div class="modal-header">\r
         <button type="button" class="btn-close" (click)="closeAllModals()"></button>\r
         <h5 class="modal-title">{{ translate('tasks.edit_task') }}</h5>\r
       </div>\r
      <div class="modal-body">\r
        <form [formGroup]="editTaskForm" (ngSubmit)="onSubmitEditTask()">\r
          <div class="row">\r
             <div class="col-md-12 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.title_column') }}</label>\r
               <input type="text" class="form-control" formControlName="title">\r
             </div>\r
             <div class="col-md-12 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.description') }}</label>\r
               <textarea class="form-control" formControlName="description" rows="3"></textarea>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.assignee') }}</label>\r
               <select class="form-select" formControlName="assigneeUserId">\r
                 <option value="" disabled>{{ translate('tasks.select_assignee') }}</option>\r
                 <option *ngFor="let user of users" [value]="user.id">{{ user.name }}</option>\r
               </select>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.priority') }}</label>\r
               <select class="form-select" formControlName="priority">\r
                 <option value="" disabled>{{ translate('tasks.select_priority') }}</option>\r
                 <option value="1">{{ translate('tasks.priority.high') }}</option>\r
                 <option value="2">{{ translate('tasks.priority.medium') }}</option>\r
                 <option value="3">{{ translate('tasks.priority.low') }}</option>\r
               </select>\r
             </div>\r
             <div class="col-md-6 mb-3">\r
               <label class="form-label">{{ translate('tasks.all_tasks.due_date') }}</label>\r
               <input type="date" class="form-control" formControlName="dueDate">\r
             </div>\r
          </div>\r
        </form>\r
      </div>\r
      <div class="modal-footer">\r
        \r
        <button type="button" class="btn btn-primary" (click)="onSubmitEditTask()">\r
          {{ translate('tasks.edit_task') }}\r
        </button>\r
        <button type="button" class="btn btn-secondary" (click)="closeAllModals()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Task Details Modal -->\r
<div class="modal fade task-details-modal" [class.show]="showTaskDetailsModal" [style.display]="showTaskDetailsModal ? 'block' : 'none'" tabindex="-1" role="dialog" aria-modal="true" (click)="onModalBackdropClick($event)">\r
  <div class="modal-dialog modal-xl" (click)="$event.stopPropagation()">\r
    <div class="modal-content">\r
      <div class="modal-header">\r
        <button type="button" class="btn-close" (click)="closeAllModals()" aria-label="Close"></button>\r
        <h5 class="modal-title">{{ translate('tasks.task_details') }}</h5>\r
      </div>\r
      <div class="modal-body" *ngIf="currentTaskDetails">\r
          <div class="task-details-header">\r
            <h4>{{ currentTaskDetails.title }}</h4>\r
          </div>\r
          \r
          <div class="row w-100">\r
            <div class="col-md-12">\r
              <div class="row mb-4">\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <span class="text-muted me-2">{{ translate('tasks.all_tasks.assignee') }}:</span>\r
                    <span class="ms-2 me-2 fw-medium">{{ currentTaskDetails.assigneeName }}</span>\r
                  </div>\r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <span class="text-muted me-2">{{ translate('tasks.all_tasks.createdBy') }}:</span>\r
                    <span class="ms-2 me-2 fw-medium">{{ currentTaskDetails.createdByName }}</span>\r
                  </div>\r
                  \r
                <div class="d-flex align-items-center mb-3 px-2">\r
                  <i class="bi bi-clock me-2 text-muted"></i>\r
                  <span class="text-muted me-2">{{ translate('tasks.all_tasks.status') }}:</span>\r
                  <span class="ms-2 badge" [class]="getStatusClass(currentTaskDetails.status)">\r
                    {{ getStatusText(currentTaskDetails.status) }}\r
                  </span>\r
                </div>\r
                  \r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <i class="bi bi-flag me-2 text-muted"></i>\r
                    <span class="text-muted me-2">{{ translate('tasks.all_tasks.priority') }}:</span>\r
                    <span class="ms-2 badge" [class]="getPriorityClass(currentTaskDetails.priority)">\r
                      {{ getPriorityText(currentTaskDetails.priority) }}\r
                    </span>\r
                  </div>\r
                </div>\r
\r
                <div class="col-md-6">\r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <span class="text-muted me-2">{{ translate('tasks.all_tasks.department') }}:</span>\r
                    <span class="ms-2 me-2 fw-medium">{{ currentTaskDetails.deptName }}</span>\r
                  </div>\r
                  \r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <span class="text-muted me-2">{{ translate('tasks.all_tasks.due_date') }}:</span>\r
                    <span class="ms-2 me-2 fw-medium">{{ formatDate(currentTaskDetails.dueDate) }}</span>\r
                  </div>\r
                  \r
                  <div class="d-flex align-items-center mb-3 px-2">\r
                    <span class="text-muted me-2"> {{ translate('tasks.all_tasks.created_at') }}:</span>\r
                    <span class="ms-2 me-2 fw-medium"> {{ formatDateTime(currentTaskDetails.createdAt) }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="mb-4" *ngIf="currentTaskDetails.description">\r
                <h6 class="text-dark mb-1">{{ translate('tasks.all_tasks.description') }}</h6>\r
                <div class="p-3 bg-light rounded">\r
                  <p class="mb-0"> {{ currentTaskDetails.description }}</p>\r
                </div>\r
              </div>\r
            </div>\r
        </div>\r
        <div class="col-md-4 close-btn-div">\r
            <button type="button" class="btn btn-secondary" (click)="closeAllModals()">\r
                {{ translate('common.close') }}\r
          </button>\r
        </div>\r
        </div>\r
      </div>\r
      \r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
`, styles: ['/* src/app/components/tasks/all-tasks/all-tasks.component.css */\n.all-tasks-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n.loading-spinner {\n  text-align: center;\n}\n.spinner {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #B68A35;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.all-tasks-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.all-tasks-title {\n  color: #5f646d;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-section .form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.search-section .form-control {\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  padding: 0.5rem 0.75rem;\n  transition: all 0.3s ease;\n}\n.search-section .form-control:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.status-tabs-section {\n  background: white;\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.status-tabs-container {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.status-tabs {\n  border-bottom: none;\n  display: flex;\n  flex-wrap: nowrap;\n  min-width: max-content;\n  gap: 0.5rem;\n}\n.status-tab {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n  color: #6c757d;\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  min-width: fit-content;\n}\n.status-tab:hover {\n  background: #e9ecef;\n  border-color: #dee2e6;\n  color: #495057;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.status-tab.active {\n  background: #B68A35;\n  border-color: #B68A35;\n  color: white;\n  box-shadow: 0 2px 8px rgba(191, 171, 134, 0.3);\n}\n.status-tab.active:hover {\n  background: #b68a35;\n  border-color: #b68a35;\n  box-shadow: 0 4px 12px rgba(191, 171, 134, 0.4);\n}\n.status-tab .badge {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 600;\n}\n.status-tab.active .badge {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n}\n.results-summary {\n  background-color: #f8f9fa;\n  padding: 1rem;\n  border-radius: 6px;\n  border: 1px solid #e9ecef;\n}\n.results-summary .form-select-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 4px;\n}\n.tasks-cards-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n}\n.task-card {\n  border: 1px solid #F2ECCE;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  height: 100%;\n  background: white;\n  display: flex;\n  flex-direction: column;\n}\n.task-card:hover {\n  border: 1px solid #B68A35;\n}\n.task-card .card-header {\n  background-color: #f2ecce8c;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n  border-radius: 12px 12px 0 0;\n}\n.task-card .card-body {\n  padding: 1.25rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.task-title {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1.1rem;\n  line-height: 1.3;\n  margin-bottom: 0;\n}\n.task-badges {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.task-description {\n  font-size: 0.9rem;\n  line-height: 1.4;\n  color: #6c757d;\n}\n.task-info-item {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n}\n.task-info-item i {\n  width: 16px;\n  text-align: center;\n}\n.task-actions {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 1rem;\n  border-top: 1px solid #f4f4f4;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.task-actions .btn {\n  font-size: 0.8rem;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  min-width: 80px;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.priority-high {\n  background-color: #dc3545;\n  color: white;\n}\n.priority-medium {\n  background-color: #B68A35;\n  color: white;\n}\n.priority-low {\n  background-color: #28a745;\n  color: white;\n}\n.status-new {\n  background-color: #6c757d;\n  color: white;\n}\n.status-inProgress {\n  background-color: #D87E37;\n  color: white;\n}\n.status-done {\n  background-color: #28a745;\n  color: white;\n}\n.status-stopped {\n  background-color: #464545;\n  color: white;\n}\n.status-late {\n  background-color: #B45253;\n  color: white;\n}\n.status-returned {\n  background-color: #78260D;\n  color: white;\n}\n.status-review {\n  background-color: #D4AA3A;\n  color: white;\n}\n.bg-primary {\n  background-color: #B68A35 !important;\n}\n.bg-secondary {\n  background-color: #555555 !important;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n.task-actions .btn-outline-primary {\n  color: #92722A;\n  border: 1px solid #92722A;\n  background: #E6D7A2;\n  transition: all 0.3s ease;\n}\n.task-actions .btn-outline-primary:hover {\n  background-color: #D4AF5F;\n  color: white;\n}\n.task-actions .btn-outline-secondary {\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n  background: #F2ECCE;\n  transition: all 0.3s ease;\n}\n.task-actions .btn-outline-secondary:hover {\n  background-color: #D4AF5F;\n  color: white;\n}\n.task-actions .btn-outline-danger {\n  color: #C62828;\n  border: 1px solid #C62828;\n  background-color: #f9c8cd96;\n  transition: all 0.3s ease;\n}\n.task-actions .btn-outline-danger:hover {\n  background-color: #ffc6cccc;\n  color: #c95454;\n  box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);\n}\n.task-actions .btn:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.task-actions .btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(182, 138, 53, 0.25);\n}\n.task-actions .btn i {\n  margin-right: 0.25rem;\n  font-size: 0.75rem;\n}\n.task-actions .btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: none !important;\n}\n.task-actions .btn.loading {\n  position: relative;\n  color: transparent;\n}\n.task-actions .btn.loading::after {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  top: 50%;\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  border: 2px solid transparent;\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: button-spin 1s linear infinite;\n}\n@keyframes button-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  padding: 3rem 2rem;\n}\n.empty-icon {\n  opacity: 0.5;\n}\n.pagination-container {\n  margin-top: 2rem;\n}\n.pagination {\n  margin-bottom: 0;\n}\n.page-link {\n  color: #92722A;\n  border: 1px solid #F2ECCE;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  background-color: #fff;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n  border-radius: 5px;\n}\n.page-link:hover {\n  color: #B68A35;\n  background-color: #F2ECCE;\n  border-color: #F2ECCE;\n}\n.page-item.active .page-link {\n  background-color: #B68A35;\n  color: white;\n}\n.page-item.disabled .page-link {\n  color: #6c757d;\n  background-color: #fff;\n  border-color: #F2ECCE;\n  cursor: not-allowed;\n}\n.btn {\n  border-radius: 6px;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: white;\n}\n@media (max-width: 768px) {\n  .search-section .row {\n    flex-direction: column;\n  }\n  .search-section .col-md-4,\n  .search-section .col-md-3,\n  .search-section .col-md-2 {\n    margin-bottom: 1rem;\n  }\n  .results-summary {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .task-card .card-header {\n    padding: 0.75rem 1rem;\n  }\n  .task-card .card-body {\n    padding: 1rem;\n  }\n  .task-title {\n    font-size: 1rem;\n  }\n  .task-badges {\n    gap: 0.25rem;\n  }\n  .task-actions {\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .task-actions .btn {\n    width: 100%;\n    min-width: auto;\n  }\n}\n@media (max-width: 576px) {\n  .all-tasks-container {\n    padding: 1rem;\n  }\n  .all-tasks-title {\n    font-size: 1.5rem;\n  }\n  .task-card .card-header {\n    padding: 0.75rem;\n  }\n  .task-card .card-body {\n    padding: 0.75rem;\n  }\n  .task-title {\n    font-size: 0.95rem;\n  }\n  .badge {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.5rem;\n  }\n  .task-info-item {\n    font-size: 0.8rem;\n  }\n  .stat-item {\n    font-size: 0.8rem;\n  }\n  .task-actions {\n    gap: 0.5rem;\n  }\n  .task-actions .btn {\n    font-size: 0.75rem;\n    padding: 0.4rem 0.8rem;\n  }\n}\n.modal {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog {\n  margin: 1.75rem auto;\n}\n.modal-content {\n  border: none;\n  overflow: hidden;\n  border-radius: 12px !important;\n}\n.modal-header {\n  background: #D4AF5F !important;\n  border-bottom: none;\n  padding: 1.5rem 2rem;\n  position: relative;\n}\n.modal-header .modal-title {\n  color: white;\n  font-weight: 600;\n  font-size: 1.25rem;\n  margin: 0;\n}\n.modal-header .btn-close {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 15%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: all 0.3s ease;\n}\n.modal-header .btn-close:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(1.1);\n}\n.modal-header .btn-close::before {\n  content: "\\d7";\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n.modal-body {\n  padding: 2rem;\n  background: #fafafa;\n}\n.modal-footer {\n  background: white;\n  border-top: 1px solid #e9ecef;\n  padding: 1.5rem 2rem;\n  gap: 0.75rem;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir=ltr] .modal-header {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl] .modal-header {\n  flex-direction: row-reverse !important;\n}\n[dir=rtl] .modal-header .modal-title {\n  text-align: right;\n  margin-right: 0;\n  margin-left: auto;\n  order: 2;\n}\n[dir=ltr] .modal-header .modal-title {\n  text-align: left;\n  margin-left: 0;\n  margin-right: auto;\n  order: 2;\n}\n[dir=rtl] .modal-header .btn-close {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=ltr] .modal-header .btn-close {\n  margin-left: 0;\n  margin-right: 0;\n  order: 1;\n}\n[dir=rtl] .modal-footer {\n  flex-direction: row-reverse;\n}\n[dir=ltr] .modal-footer {\n  flex-direction: row-reverse;\n}\n.modal-body .form-label {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.modal-body .form-control,\n.modal-body .form-select {\n  border: 2px solid #e9ecef;\n  font: 1em sans-serif;\n  padding: 0.75rem 1rem;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.modal-body .form-control:focus,\n.modal-body .form-select:focus {\n  border-color: #B68A35;\n  box-shadow: 0 0 0 0.2rem rgba(182, 138, 53, 0.25);\n}\n.task-details-modal .modal-dialog {\n  max-width: 900px;\n}\n.task-details-content {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n}\n.task-details-header {\n  border-bottom: 2px solid #e9ecef;\n  padding-bottom: 1.5rem;\n  margin-bottom: 2rem;\n}\n.task-details-header h4 {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.task-details-stats {\n  background: #f8f9fa;\n  border-radius: 12px;\n  padding: 1.5rem;\n}\n.close-btn-div {\n  border-top: 1px solid #dee2e6;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  display: flex;\n  width: 100%;\n}\n.task-details-stats .card-header {\n  background: transparent;\n  border-bottom: 1px solid #dee2e6;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n}\n.task-details-stats h6 {\n  color: #495057;\n  font-weight: 600;\n  margin: 0;\n}\n[dir=rtl] .page-link {\n  margin-left: 0;\n  margin-right: -1px;\n}\n[dir=rtl] .me-1,\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.25rem !important;\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .text-end {\n  text-align: right !important;\n}\n[dir=rtl] .text-center {\n  text-align: center !important;\n}\n.manager-search-container {\n  position: relative;\n}\n.manager-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.manager-list {\n  padding: 8px 0;\n}\n.manager-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.manager-item:hover {\n  background-color: #f8f9fa;\n}\n.manager-item:last-child {\n  border-bottom: none;\n}\n.show-all-option {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #e9ecef !important;\n}\n.show-all-option:hover {\n  background-color: #e9ecef;\n}\n.show-all-avatar {\n  background:\n    linear-gradient(\n      135deg,\n      #28a745 0%,\n      #20c997 100%) !important;\n  color: white;\n}\n.manager-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 12px;\n  flex-shrink: 0;\n}\n.manager-info {\n  flex: 1;\n  min-width: 0;\n}\n.manager-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.selected-manager {\n  margin-top: 8px;\n  padding: 12px;\n  background: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n}\n.selected-manager-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-remove-manager {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: all 0.2s;\n  margin-left: auto;\n}\n.btn-remove-manager:hover {\n  background: #e9ecef;\n  color: #dc3545;\n}\n[dir=rtl] .manager-avatar {\n  margin-left: 0;\n  margin-right: 12px;\n}\n[dir=rtl] .btn-remove-manager {\n  margin-left: 0;\n  margin-right: auto;\n}\n/*# sourceMappingURL=all-tasks.component-4MWVI4W2.css.map */\n'] }]
  }], () => [{ type: TasksService }, { type: UsersService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AllTasksComponent, { className: "AllTasksComponent" });
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
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TasksComponent,
        MyTasksComponent,
        AllTasksComponent
      ],
      imports: [
        CommonModule,
        TasksRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ConfirmationModalComponent
      ]
    }]
  }], null, null);
})();
export {
  TasksModule
};
//# sourceMappingURL=chunk-DZBYDTO2.js.map
