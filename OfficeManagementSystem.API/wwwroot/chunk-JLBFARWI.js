import {
  UsersService
} from "./chunk-4SHJB6U3.js";
import "./chunk-DNZ6YJ3A.js";
import {
  ConfirmationModalComponent
} from "./chunk-KDMT3COD.js";
import "./chunk-CKE7UXF6.js";
import {
  DepartmentService
} from "./chunk-KPVTX4PW.js";
import {
  RouterModule
} from "./chunk-LQXSMMP4.js";
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
} from "./chunk-HY6UJAEU.js";
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
  ɵɵtextInterpolate6,
  ɵɵviewQuery
} from "./chunk-J5ZZ35GX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

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
  getAllTasksForCounting() {
    return this.http.get(`${this.apiUrl}?page=1&pageSize=1000`);
  }
  getTasksOverview() {
    return this.http.get(`${environment.apiBaseUrl}/Dashboard/tasks/overview`);
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
function TasksComponent_div_72_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275element(2, "span", 148);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 149)(5, "span", 150);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 151);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + status_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusDisplayName(status_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(status_r2.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(9, 5, status_r2.percentage, "1.1-1"), "%)");
  }
}
function TasksComponent_div_72_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147);
    \u0275\u0275element(2, "span", 152);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 149)(5, "span", 150);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 151);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const priority_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("priority-" + priority_r4.priority.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPriorityDisplayName(priority_r4.priority), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(priority_r4.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(9, 5, priority_r4.percentage, "1.1-1"), "%)");
  }
}
function TasksComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 84)(2, "div", 136)(3, "div", 137)(4, "h6", 138);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 139);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 140);
    \u0275\u0275element(8, "path", 141)(9, "path", 142);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 143);
    \u0275\u0275template(11, TasksComponent_div_72_div_11_Template, 10, 8, "div", 144);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 84)(13, "div", 136)(14, "div", 137)(15, "h6", 138);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 139);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 140);
    \u0275\u0275element(19, "path", 145);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 143);
    \u0275\u0275template(21, TasksComponent_div_72_div_21_Template, 10, 8, "div", 144);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.insights.statusDistribution"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.tasksOverview.statusDistribution);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.translate("tasks.insights.priorityDistribution"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.tasksOverview.priorityDistribution);
  }
}
function TasksComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275listener("click", function TasksComponent_div_91_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_91_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_91_Template_input_change_1_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedTasks.has(task_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r6.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(task_r6.dueDate), " ");
  }
}
function TasksComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275listener("click", function TasksComponent_div_99_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_99_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_99_Template_input_change_1_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showBulkToolbar ? "block" : "none");
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
function TasksComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275listener("click", function TasksComponent_div_107_Template_div_click_0_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r10));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_107_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_107_Template_input_change_1_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
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
function TasksComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275listener("click", function TasksComponent_div_115_Template_div_click_0_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r12));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_115_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_115_Template_input_change_1_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r12.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.showBulkToolbar ? "block" : "none");
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
function TasksComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275listener("click", function TasksComponent_div_123_Template_div_click_0_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r14));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_123_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_123_Template_input_change_1_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r14.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
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
function TasksComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275listener("click", function TasksComponent_div_131_Template_div_click_0_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r16));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_131_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_131_Template_input_change_1_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r16.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
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
function TasksComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 153);
  }
}
function TasksComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275listener("click", function TasksComponent_div_139_Template_div_click_0_listener() {
      const task_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTaskDetailsModal(task_r18));
    });
    \u0275\u0275elementStart(1, "input", 155);
    \u0275\u0275listener("click", function TasksComponent_div_139_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_139_Template_input_change_1_listener() {
      const task_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTaskSelection(task_r18.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 156)(3, "h6", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 159)(8, "small", 160)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 160)(13, "strong");
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
function TasksComponent_div_140_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 170)(1, "a", 171);
    \u0275\u0275listener("click", function TasksComponent_div_140_li_7_Template_a_click_1_listener($event) {
      const page_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.goToPage(page_r21);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r21 === ctx_r2.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r21);
  }
}
function TasksComponent_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 167)(1, "nav", 168)(2, "ul", 169)(3, "li", 170)(4, "a", 171);
    \u0275\u0275listener("click", function TasksComponent_div_140_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.goToPage(ctx_r2.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TasksComponent_div_140_li_7_Template, 3, 3, "li", 172);
    \u0275\u0275elementStart(8, "li", 170)(9, "a", 171);
    \u0275\u0275listener("click", function TasksComponent_div_140_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.goToPage(ctx_r2.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 173)(13, "span", 65);
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
function TasksComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "div", 175)(2, "span", 176);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_small_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 177);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTitleErrorMessage(ctx_r2.addTaskForm), " ");
  }
}
function TasksComponent_option_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r22 = ctx.$implicit;
    \u0275\u0275property("value", user_r22.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r22.name);
  }
}
function TasksComponent_option_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r23.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentLang === "ar" ? dept_r23.nameAr : dept_r23.nameEn);
  }
}
function TasksComponent_div_216_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275element(1, "i", 182);
    \u0275\u0275elementStart(2, "span", 183);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 184);
    \u0275\u0275listener("click", function TasksComponent_div_216_div_1_Template_button_click_4_listener() {
      const i_r26 = \u0275\u0275restoreView(_r25).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSelectedFile(i_r26));
    });
    \u0275\u0275element(5, "i", 185);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r27 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r27.name);
  }
}
function TasksComponent_div_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, TasksComponent_div_216_div_1_Template, 6, 1, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function TasksComponent_small_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 177);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getTitleErrorMessage(ctx_r2.editTaskForm), " ");
  }
}
function TasksComponent_option_253_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r28 = ctx.$implicit;
    \u0275\u0275property("value", user_r28.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r28.name);
  }
}
function TasksComponent_option_264_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", dept_r29.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.currentLang === "ar" ? dept_r29.nameAr : dept_r29.nameEn);
  }
}
function TasksComponent_div_288_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275element(1, "i", 182);
    \u0275\u0275elementStart(2, "span", 183);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 184);
    \u0275\u0275listener("click", function TasksComponent_div_288_div_1_Template_button_click_4_listener() {
      const i_r32 = \u0275\u0275restoreView(_r31).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeSelectedFile(i_r32));
    });
    \u0275\u0275element(5, "i", 185);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r33 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r33.name);
  }
}
function TasksComponent_div_288_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275template(1, TasksComponent_div_288_div_1_Template, 6, 1, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function TasksComponent_div_300_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noAttachments"), " ");
  }
}
function TasksComponent_div_300_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 214);
    \u0275\u0275element(1, "i", 215);
    \u0275\u0275elementStart(2, "div", 183)(3, "div", 216);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 184);
    \u0275\u0275listener("click", function TasksComponent_div_300_div_41_Template_button_click_7_listener() {
      const attachment_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteAttachment(attachment_r36.id, ctx_r2.currentTask.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 217);
    \u0275\u0275element(9, "polyline", 218)(10, "path", 219)(11, "path", 220)(12, "path", 221)(13, "path", 222);
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
function TasksComponent_div_300_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noUpdates"), " ");
  }
}
function TasksComponent_div_300_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "div", 183)(2, "div", 216);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 65);
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
function TasksComponent_div_300_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 197);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.task.noFeedback"), " ");
  }
}
function TasksComponent_div_300_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 223)(1, "div", 183)(2, "div", 216);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 65);
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
function TasksComponent_div_300_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 186)(3, "h4", 115);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 187)(6, "div", 188)(7, "div", 189);
    \u0275\u0275element(8, "i", 190);
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 191);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 189);
    \u0275\u0275element(14, "i", 192);
    \u0275\u0275elementStart(15, "span", 65);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 193);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 188)(20, "div", 189);
    \u0275\u0275element(21, "i", 194);
    \u0275\u0275elementStart(22, "span", 65);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 191);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 189);
    \u0275\u0275element(27, "i", 195);
    \u0275\u0275elementStart(28, "span", 65);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 191);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 196)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 197);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 196)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TasksComponent_div_300_div_40_Template, 2, 1, "div", 198)(41, TasksComponent_div_300_div_41_Template, 14, 3, "div", 199);
    \u0275\u0275elementStart(42, "div", 200)(43, "input", 201, 3);
    \u0275\u0275listener("change", function TasksComponent_div_300_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event, ctx_r2.currentTask.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 202);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r34);
      const detailsFileInput_r37 = \u0275\u0275reference(44);
      return \u0275\u0275resetView(detailsFileInput_r37.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 203);
    \u0275\u0275element(47, "line", 204)(48, "line", 205);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 196)(51, "h6");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, TasksComponent_div_300_div_53_Template, 2, 1, "div", 198)(54, TasksComponent_div_300_div_54_Template, 6, 3, "div", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 196)(56, "h6");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, TasksComponent_div_300_div_58_Template, 2, 1, "div", 198)(59, TasksComponent_div_300_div_59_Template, 6, 3, "div", 206);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 207)(61, "div", 208)(62, "button", 209);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditTaskModal(ctx_r2.currentTask));
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 210);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showStatusUpdateModal = true);
    });
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 211);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAddUpdateModal = true);
    });
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 212);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showReassignModal = true);
    });
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 213);
    \u0275\u0275listener("click", function TasksComponent_div_300_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteTask(ctx_r2.currentTask));
    });
    \u0275\u0275text(71);
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.reassign"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.actions.delete"), " ");
  }
}
function TasksComponent_div_312_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275element(1, "i", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.dialogs.taskCompletedWarning"), " ");
  }
}
function TasksComponent_option_373_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r40 = ctx.$implicit;
    \u0275\u0275property("value", user_r40.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r40.name);
  }
}
function TasksComponent_div_391_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224);
    \u0275\u0275element(1, "i", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("tasks.bulk.completedTasksWarning"), " ");
  }
}
function TasksComponent_option_435_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r41 = ctx.$implicit;
    \u0275\u0275property("value", user_r41.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r41.name);
  }
}
var TasksComponent = class _TasksComponent {
  tasksService;
  departmentService;
  usersService;
  translationService;
  langService;
  fb;
  cdr;
  confirmationModal;
  // Data
  tasks = [];
  allTasksForCounting = [];
  // Store all tasks for status counting
  tasksOverview = null;
  departments = [];
  users = [];
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
  constructor(tasksService, departmentService, usersService, translationService, langService, fb, cdr) {
    this.tasksService = tasksService;
    this.departmentService = departmentService;
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
    this.addTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(30)]],
      description: [""],
      deptId: ["", Validators.required],
      assigneeUserId: ["", Validators.required],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.editTaskForm = this.fb.group({
      title: ["", [Validators.required, Validators.maxLength(30)]],
      description: [""],
      deptId: ["", Validators.required],
      assigneeUserId: ["", Validators.required],
      priority: ["", Validators.required],
      dueDate: ["", Validators.required],
      sourceType: [0]
    });
    this.statusUpdateForm = this.fb.group({
      status: ["", Validators.required],
      note: ["", Validators.required]
    });
    this.reassignForm = this.fb.group({
      newAssigneeUserId: ["", Validators.required],
      note: ["", Validators.required]
    });
    this.addUpdateForm = this.fb.group({
      note: ["", Validators.required]
    });
    this.bulkStatusForm = this.fb.group({
      status: ["", Validators.required],
      note: ["", Validators.required]
    });
    this.bulkReassignForm = this.fb.group({
      newAssigneeUserId: ["", Validators.required],
      note: ["", Validators.required]
    });
  }
  loadData() {
    return __async(this, null, function* () {
      this.isLoading = true;
      try {
        yield Promise.all([
          this.loadTasksOverview(),
          this.loadTasks(),
          this.loadAllTasksForCounting(),
          this.loadDepartments(),
          this.loadUsers()
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.isLoading = false;
      }
    });
  }
  loadTasksOverview() {
    return __async(this, null, function* () {
      try {
        const overview = yield this.tasksService.getTasksOverview().toPromise();
        this.tasksOverview = overview || null;
      } catch (error) {
        console.error("Error loading tasks overview:", error);
        this.tasksOverview = null;
      }
    });
  }
  loadTasks() {
    return __async(this, null, function* () {
      console.log("Loading tasks with page:", this.currentPage, "pageSize:", this.pageSize);
      return new Promise((resolve, reject) => {
        this.tasksService.getAllTasks(this.currentPage, this.pageSize).subscribe({
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
      console.log("Loading all tasks for counting...");
      return new Promise((resolve, reject) => {
        this.tasksService.getAllTasksForCounting().subscribe({
          next: (response) => {
            console.log("All tasks for counting response:", response);
            if (response.success && response.data?.items) {
              this.allTasksForCounting = response.data.items;
              console.log("All tasks for counting loaded:", this.allTasksForCounting.length, "tasks");
            } else {
              console.log("No tasks found for counting or API error:", response);
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
  loadDepartments() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.departmentService.getDepartmentNames().subscribe({
          next: (departments) => {
            this.departments = departments;
            resolve();
          },
          error: reject
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
  // Task grouping by status - show max 5 tasks per column with custom pagination
  getTasksByStatus(status) {
    const allStatusTasks = this.allTasks.filter((task) => task.status === status);
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
    return this.tasks.filter((task) => task.status === status).length;
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
        deptId: task.deptId,
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
            deptId: Number(formValue.deptId),
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
            deptId: Number(formValue.deptId),
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
    return this.tasksOverview?.totalTasks || 0;
  }
  get completedTasksCount() {
    return this.tasksOverview?.completedTasks || 0;
  }
  get inProgressTasksCount() {
    return this.tasksOverview?.statusDistribution?.find((s) => s.status === "In_Progress")?.count || 0;
  }
  get pendingTasksCount() {
    return this.tasksOverview?.pendingTasks || 0;
  }
  get lateTasksCount() {
    return this.tasksOverview?.overdueTasks || 0;
  }
  get completionRate() {
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
    if (!this.tasksOverview)
      return "N/A";
    const score = Math.round(this.tasksOverview.completedTasks / this.tasksOverview.totalTasks * 100);
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
    if (!this.tasksOverview)
      return "N/A";
    const overdueRatio = this.tasksOverview.overdueTasks / this.tasksOverview.totalTasks;
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
  static \u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TasksComponent)(\u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(DepartmentService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 447, vars: 229, consts: [["fileInput", ""], ["editFileInput", ""], ["confirmationModal", ""], ["detailsFileInput", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "row", "mb-4", "kpi-cards-row", "d-flex", "g-4"], [1, "col-lg-2", "col-md-4", "col-sm-6", "mb-4"], [1, "kpi-card", "kpi-total"], [1, "kpi-content"], [1, "kpi-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "12", "x2", "15", "y2", "12", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15", "stroke", "currentColor", "stroke-width", "2"], [1, "kpi-info"], [1, "kpi-number"], [1, "kpi-label"], [1, "kpi-card", "kpi-progress"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["points", "12,6 12,12 16,14", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completed"], ["d", "M20 6L9 17L4 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "kpi-card", "kpi-late"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completion-rate"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "completion-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-labels"], [1, "progress-min"], [1, "progress-max"], ["class", "row mb-4 p-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "btn", "btn-add", "gap-2", 3, "click"], [1, "plus"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "green"], ["class", "task-card status-done compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "gray"], ["class", "task-card status-stopped compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "red"], ["class", "task-card status-late compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "yellow"], ["class", "task-card status-review compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], [1, "bulk-bar"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "text-muted"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-12", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", "name", "title", "maxlength", "20", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], ["class", "text-danger", 4, "ngIf"], [1, "text-muted", "ms-auto"], [1, "col-md-6", "mb-3"], ["formControlName", "assigneeUserId", "name", "assigneeUserId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["rows", "3", "formControlName", "description", "name", "description", 1, "form-control", 3, "placeholder"], ["formControlName", "deptId", "name", "deptId", 1, "form-select"], ["formControlName", "priority", "name", "priority", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "datetime-local", "formControlName", "dueDate", "name", "dueDate", 1, "form-control"], [1, "border", "rounded", "p-4", "text-center", "text-muted"], [1, "fas", "fa-cloud-upload-alt", "fa-2x", "mb-2"], [1, "mb-2"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["class", "mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "text", "formControlName", "title", "name", "editTitle", "maxlength", "30", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editStartDate", 1, "form-control"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editEndDate", 1, "form-control"], ["formControlName", "assigneeUserId", "name", "editAssigneeUserId", 1, "form-select"], ["rows", "3", "formControlName", "description", "name", "editDescription", 1, "form-control", 3, "placeholder"], ["formControlName", "deptId", "name", "editDeptId", 1, "form-select"], ["formControlName", "priority", "name", "editPriority", 1, "form-select"], [1, "modal-dialog", "modal-xl"], ["class", "modal-body", 4, "ngIf"], [1, "modal-dialog"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "status", 1, "form-select", 3, "disabled"], ["value", "0", 3, "disabled"], ["value", "1", 3, "disabled"], ["value", "2", 3, "disabled"], ["value", "3", 3, "disabled"], ["value", "4", 3, "disabled"], ["value", "5", 3, "disabled"], ["value", "6", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder", "disabled"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["formControlName", "newAssigneeUserId", 1, "form-select"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["formControlName", "status", 1, "form-select"], ["value", "0"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "row", "mb-4", "p-2"], [1, "insight-card"], [1, "insight-header"], [1, "insight-title"], [1, "insight-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3 3v18h18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M18.7 8l-5.1 5.2-2.8-2.7L7 14.3", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "insight-content"], ["class", "insight-item", 4, "ngFor", "ngForOf"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "insight-item"], [1, "insight-label"], [1, "status-dot"], [1, "insight-value"], [1, "insight-count"], [1, "insight-percentage"], [1, "priority-dot"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], ["type", "checkbox", 1, "bulk-check", "form-check-input", 3, "click", "change", "checked"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-desc", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-card", "status-done", "compact", 3, "click"], [1, "task-card", "status-stopped", "compact", 3, "click"], [1, "task-card", "status-late", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "task-card", "status-review", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-danger"], [3, "value"], [1, "mt-2"], ["class", "d-flex align-items-center p-2 border rounded mb-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "p-2", "border", "rounded", "mb-1"], [1, "fas", "fa-file", "me-2", "text-muted"], [1, "flex-grow-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-center p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "file", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "me-1"], ["x1", "8", "y1", "1", "x2", "8", "y2", "15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "1", "y1", "8", "x2", "15", "y2", "8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "edit-task-btn", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], [1, "btn", "btn-outline-info", 3, "click"], [1, "btn", "btn-reassign", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "d-flex", "align-items-center", "p-2", "border-bottom"], [1, "fas", "fa-file", "me-2"], [1, "fw-bold"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "alert", "alert-warning", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2"]], template: function TasksComponent_Template(rf, ctx) {
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
      \u0275\u0275template(72, TasksComponent_div_72_Template, 22, 4, "div", 34);
      \u0275\u0275elementStart(73, "div", 35)(74, "div", 36)(75, "h1", 37);
      \u0275\u0275text(76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 38);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "button", 39);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_79_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddTaskModal());
      });
      \u0275\u0275text(80);
      \u0275\u0275elementStart(81, "span", 40);
      \u0275\u0275text(82, "+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 41)(84, "div", 42)(85, "div", 43);
      \u0275\u0275text(86);
      \u0275\u0275elementStart(87, "span", 44);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, TasksComponent_div_89_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 46);
      \u0275\u0275template(91, TasksComponent_div_91_Template, 16, 7, "div", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 42)(93, "div", 48);
      \u0275\u0275text(94);
      \u0275\u0275elementStart(95, "span", 44);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd();
      \u0275\u0275template(97, TasksComponent_div_97_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 46);
      \u0275\u0275template(99, TasksComponent_div_99_Template, 16, 9, "div", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 42)(101, "div", 50);
      \u0275\u0275text(102);
      \u0275\u0275elementStart(103, "span", 44);
      \u0275\u0275text(104);
      \u0275\u0275elementEnd();
      \u0275\u0275template(105, TasksComponent_div_105_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 46);
      \u0275\u0275template(107, TasksComponent_div_107_Template, 16, 7, "div", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 42)(109, "div", 52);
      \u0275\u0275text(110);
      \u0275\u0275elementStart(111, "span", 44);
      \u0275\u0275text(112);
      \u0275\u0275elementEnd();
      \u0275\u0275template(113, TasksComponent_div_113_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 46);
      \u0275\u0275template(115, TasksComponent_div_115_Template, 16, 9, "div", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 42)(117, "div", 54);
      \u0275\u0275text(118);
      \u0275\u0275elementStart(119, "span", 44);
      \u0275\u0275text(120);
      \u0275\u0275elementEnd();
      \u0275\u0275template(121, TasksComponent_div_121_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 46);
      \u0275\u0275template(123, TasksComponent_div_123_Template, 16, 7, "div", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 42)(125, "div", 56);
      \u0275\u0275text(126);
      \u0275\u0275elementStart(127, "span", 44);
      \u0275\u0275text(128);
      \u0275\u0275elementEnd();
      \u0275\u0275template(129, TasksComponent_div_129_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 46);
      \u0275\u0275template(131, TasksComponent_div_131_Template, 16, 7, "div", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 42)(133, "div", 58);
      \u0275\u0275text(134);
      \u0275\u0275elementStart(135, "span", 44);
      \u0275\u0275text(136);
      \u0275\u0275elementEnd();
      \u0275\u0275template(137, TasksComponent_div_137_Template, 1, 0, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 46);
      \u0275\u0275template(139, TasksComponent_div_139_Template, 16, 7, "div", 59);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(140, TasksComponent_div_140_Template, 18, 14, "div", 60);
      \u0275\u0275elementStart(141, "div", 61)(142, "div", 62)(143, "div", 63)(144, "button", 64);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_144_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAllTasks());
      });
      \u0275\u0275text(145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span", 65);
      \u0275\u0275text(147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 66)(149, "button", 67);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_149_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkStatusModal = true);
      });
      \u0275\u0275text(150);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "button", 68);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_151_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkReassignModal = true);
      });
      \u0275\u0275text(152);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(153, TasksComponent_div_153_Template, 4, 0, "div", 69);
      \u0275\u0275elementStart(154, "div", 70)(155, "div", 71)(156, "div", 72)(157, "div", 73)(158, "h5", 74);
      \u0275\u0275text(159);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_160_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275elementStart(161, "div", 76)(162, "div", 77)(163, "div", 78)(164, "label", 79);
      \u0275\u0275text(165);
      \u0275\u0275elementEnd();
      \u0275\u0275element(166, "input", 80);
      \u0275\u0275elementStart(167, "div", 81);
      \u0275\u0275template(168, TasksComponent_small_168_Template, 2, 1, "small", 82);
      \u0275\u0275elementStart(169, "small", 83);
      \u0275\u0275text(170);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "div", 84)(172, "label", 79);
      \u0275\u0275text(173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "select", 85)(175, "option", 86);
      \u0275\u0275text(176);
      \u0275\u0275elementEnd();
      \u0275\u0275template(177, TasksComponent_option_177_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 78)(179, "label", 79);
      \u0275\u0275text(180);
      \u0275\u0275elementEnd();
      \u0275\u0275element(181, "textarea", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 84)(183, "label", 79);
      \u0275\u0275text(184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "select", 89)(186, "option", 86);
      \u0275\u0275text(187);
      \u0275\u0275elementEnd();
      \u0275\u0275template(188, TasksComponent_option_188_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 84)(190, "label", 79);
      \u0275\u0275text(191);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "select", 90)(193, "option", 86);
      \u0275\u0275text(194);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "option", 91);
      \u0275\u0275text(196);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "option", 92);
      \u0275\u0275text(198);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "option", 93);
      \u0275\u0275text(200);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "div", 78)(202, "label", 79);
      \u0275\u0275text(203);
      \u0275\u0275elementEnd();
      \u0275\u0275element(204, "input", 94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "div", 78)(206, "label", 79);
      \u0275\u0275text(207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "div", 95);
      \u0275\u0275element(209, "i", 96);
      \u0275\u0275elementStart(210, "p", 97);
      \u0275\u0275text(211);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "input", 98, 0);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_212_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "button", 99);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_214_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r24 = \u0275\u0275reference(213);
        return \u0275\u0275resetView(fileInput_r24.click());
      });
      \u0275\u0275text(215);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(216, TasksComponent_div_216_Template, 2, 1, "div", 100);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "div", 101)(218, "button", 102);
      \u0275\u0275text(219);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_220_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddTaskModal"));
      });
      \u0275\u0275text(221);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(222, "div", 70)(223, "div", 71)(224, "div", 72)(225, "div", 73)(226, "h5", 74);
      \u0275\u0275text(227);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_228_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(229, "div", 76)(230, "div", 77)(231, "div", 78)(232, "label", 79);
      \u0275\u0275text(233);
      \u0275\u0275elementEnd();
      \u0275\u0275element(234, "input", 104);
      \u0275\u0275elementStart(235, "div", 81);
      \u0275\u0275template(236, TasksComponent_small_236_Template, 2, 1, "small", 82);
      \u0275\u0275elementStart(237, "small", 83);
      \u0275\u0275text(238);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "div", 84)(240, "label", 79);
      \u0275\u0275text(241);
      \u0275\u0275elementEnd();
      \u0275\u0275element(242, "input", 105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "div", 84)(244, "label", 79);
      \u0275\u0275text(245);
      \u0275\u0275elementEnd();
      \u0275\u0275element(246, "input", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "div", 78)(248, "label", 79);
      \u0275\u0275text(249);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "select", 107)(251, "option", 86);
      \u0275\u0275text(252);
      \u0275\u0275elementEnd();
      \u0275\u0275template(253, TasksComponent_option_253_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "div", 78)(255, "label", 79);
      \u0275\u0275text(256);
      \u0275\u0275elementEnd();
      \u0275\u0275element(257, "textarea", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div", 84)(259, "label", 79);
      \u0275\u0275text(260);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "select", 109)(262, "option", 86);
      \u0275\u0275text(263);
      \u0275\u0275elementEnd();
      \u0275\u0275template(264, TasksComponent_option_264_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(265, "div", 84)(266, "label", 79);
      \u0275\u0275text(267);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "select", 110)(269, "option", 86);
      \u0275\u0275text(270);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "option", 91);
      \u0275\u0275text(272);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "option", 92);
      \u0275\u0275text(274);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "option", 93);
      \u0275\u0275text(276);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "div", 78)(278, "label", 79);
      \u0275\u0275text(279);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "div", 95);
      \u0275\u0275element(281, "i", 96);
      \u0275\u0275elementStart(282, "p", 97);
      \u0275\u0275text(283);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "input", 98, 1);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_284_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event, ctx.currentTask == null ? null : ctx.currentTask.id));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "button", 99);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_286_listener() {
        \u0275\u0275restoreView(_r1);
        const editFileInput_r30 = \u0275\u0275reference(285);
        return \u0275\u0275resetView(editFileInput_r30.click());
      });
      \u0275\u0275text(287);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(288, TasksComponent_div_288_Template, 2, 1, "div", 100);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 101)(290, "button", 102);
      \u0275\u0275text(291);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_292_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275text(293);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(294, "div", 70)(295, "div", 111)(296, "div", 72)(297, "div", 73)(298, "h5", 74);
      \u0275\u0275text(299);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(300, TasksComponent_div_300_Template, 72, 29, "div", 112);
      \u0275\u0275elementStart(301, "div", 101)(302, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_302_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(303);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(304, "div", 70)(305, "div", 113)(306, "div", 72)(307, "div", 73)(308, "h5", 74);
      \u0275\u0275text(309);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_310_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTaskStatus());
      });
      \u0275\u0275elementStart(311, "div", 76);
      \u0275\u0275template(312, TasksComponent_div_312_Template, 3, 1, "div", 114);
      \u0275\u0275elementStart(313, "div", 115)(314, "label", 79);
      \u0275\u0275text(315);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "select", 116)(317, "option", 86);
      \u0275\u0275text(318);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "option", 117);
      \u0275\u0275text(320);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "option", 118);
      \u0275\u0275text(322);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "option", 119);
      \u0275\u0275text(324);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "option", 120);
      \u0275\u0275text(326);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "option", 121);
      \u0275\u0275text(328);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "option", 122);
      \u0275\u0275text(330);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "option", 123);
      \u0275\u0275text(332);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(333, "div", 115)(334, "label", 79);
      \u0275\u0275text(335);
      \u0275\u0275elementEnd();
      \u0275\u0275element(336, "textarea", 124);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(337, "div", 101)(338, "button", 125);
      \u0275\u0275text(339);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_340_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showStatusUpdateModal"));
      });
      \u0275\u0275text(341);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(342, "div", 70)(343, "div", 113)(344, "div", 72)(345, "div", 73)(346, "h5", 74);
      \u0275\u0275text(347);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_348_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTaskUpdate());
      });
      \u0275\u0275elementStart(349, "div", 76)(350, "div", 115)(351, "label", 79);
      \u0275\u0275text(352);
      \u0275\u0275elementEnd();
      \u0275\u0275element(353, "textarea", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "div", 101)(355, "button", 127);
      \u0275\u0275text(356);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_357_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddUpdateModal"));
      });
      \u0275\u0275text(358);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(359, "div", 70)(360, "div", 113)(361, "div", 72)(362, "div", 73)(363, "h5", 74);
      \u0275\u0275text(364);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_365_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reassignTask());
      });
      \u0275\u0275elementStart(366, "div", 76)(367, "div", 115)(368, "label", 79);
      \u0275\u0275text(369);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "select", 128)(371, "option", 86);
      \u0275\u0275text(372);
      \u0275\u0275elementEnd();
      \u0275\u0275template(373, TasksComponent_option_373_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 115)(375, "label", 79);
      \u0275\u0275text(376);
      \u0275\u0275elementEnd();
      \u0275\u0275element(377, "textarea", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "div", 101)(379, "button", 129);
      \u0275\u0275text(380);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_381_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showReassignModal"));
      });
      \u0275\u0275text(382);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(383, "div", 70)(384, "div", 113)(385, "div", 72)(386, "div", 73)(387, "h5", 74);
      \u0275\u0275text(388);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_389_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkUpdateStatus());
      });
      \u0275\u0275elementStart(390, "div", 76);
      \u0275\u0275template(391, TasksComponent_div_391_Template, 3, 1, "div", 114);
      \u0275\u0275elementStart(392, "div", 115)(393, "label", 79);
      \u0275\u0275text(394);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "select", 130)(396, "option", 86);
      \u0275\u0275text(397);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "option", 131);
      \u0275\u0275text(399);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "option", 91);
      \u0275\u0275text(401);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "option", 92);
      \u0275\u0275text(403);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "option", 93);
      \u0275\u0275text(405);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "option", 132);
      \u0275\u0275text(407);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "option", 133);
      \u0275\u0275text(409);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "option", 134);
      \u0275\u0275text(411);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(412, "div", 115)(413, "label", 79);
      \u0275\u0275text(414);
      \u0275\u0275elementEnd();
      \u0275\u0275element(415, "textarea", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 101)(417, "button", 125);
      \u0275\u0275text(418);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_419_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkStatusModal"));
      });
      \u0275\u0275text(420);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(421, "div", 70)(422, "div", 113)(423, "div", 72)(424, "div", 73)(425, "h5", 74);
      \u0275\u0275text(426);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "form", 75);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_427_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkReassign());
      });
      \u0275\u0275elementStart(428, "div", 76)(429, "div", 115)(430, "label", 79);
      \u0275\u0275text(431);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "select", 128)(433, "option", 86);
      \u0275\u0275text(434);
      \u0275\u0275elementEnd();
      \u0275\u0275template(435, TasksComponent_option_435_Template, 2, 2, "option", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "div", 115)(437, "label", 79);
      \u0275\u0275text(438);
      \u0275\u0275elementEnd();
      \u0275\u0275element(439, "textarea", 126);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "div", 101)(441, "button", 127);
      \u0275\u0275text(442);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "button", 103);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_443_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkReassignModal"));
      });
      \u0275\u0275text(444);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(445, "app-confirmation-modal", null, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_64_0;
      let tmp_95_0;
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
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(61, 226, ctx.completionRate, "1.1-1"), "%");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.kpi.completionRate"));
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.completionRate, "%");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.tasksOverview);
      \u0275\u0275advance(3);
      \u0275\u0275attribute("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.subtitle"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("tasks.add_task"), " ");
      \u0275\u0275advance(6);
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
      \u0275\u0275textInterpolate1(" ", ((tmp_64_0 = ctx.addTaskForm.get("title")) == null ? null : tmp_64_0.value == null ? null : tmp_64_0.value.length) || 0, "/20 ");
      \u0275\u0275advance(3);
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.department"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectDepartment"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments);
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
      \u0275\u0275textInterpolate1(" ", ((tmp_95_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_95_0.value == null ? null : tmp_95_0.value.length) || 0, "/30 ");
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
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.department"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectDepartment"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.departments);
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
      \u0275\u0275property("ngForOf", ctx.users);
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
      \u0275\u0275property("ngForOf", ctx.users);
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
  background: #D4AA3A;
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
  color: #D4AA3A;
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
  color: #8b5cf6;
  background: #f3e8ff;
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
  transform: translateY(-2px);
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
.task-card.status-new[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #8b5cf6;
}
.task-card.status-review[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #eab308;
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
  background-color: #8b5cf6;
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
  background: #f3e8ff;
  color: #8b5cf6;
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
.modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  border-color: #D4AA3A;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #D4AA3A;
  border-color: #D4AA3A;
  color: #FFFFFF;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #B8941F;
  border-color: #B8941F;
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
  color: #D4AA3A;
  border-color: #D4AA3A;
  background: transparent;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #D4AA3A;
  border-color: #D4AA3A;
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
  transform: translateY(-2px);
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
  color: #8b5cf6;
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
  color: #D4AA3A;
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
  background-color: #D4AA3A;
  color: white;
  border-color: #D4AA3A;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #D4AA3A;
  border-color: #D4AA3A;
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
  border-left: 4px solid #D4AA3A;
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
/*# sourceMappingURL=tasks.component-VNKY6QN6.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TasksComponent, [{
    type: Component,
    args: [{ selector: "app-tasks", standalone: false, template: `\r
<div class="container-fluid py-4" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
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
  <!-- Professional Insights Section -->\r
  <div class="row mb-4 p-2" *ngIf="tasksOverview">\r
    <div class="col-md-6 mb-3">\r
      <div class="insight-card">\r
        <div class="insight-header">\r
          <h6 class="insight-title">{{ translate('tasks.insights.statusDistribution') }}</h6>\r
          <div class="insight-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <path d="M3 3v18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="insight-content">\r
          <div *ngFor="let status of tasksOverview.statusDistribution" class="insight-item">\r
            <div class="insight-label">\r
              <span class="status-dot" [class]="'status-' + status.status.toLowerCase()"></span>\r
              {{ getStatusDisplayName(status.status) }}\r
            </div>\r
            <div class="insight-value">\r
              <span class="insight-count">{{ status.count }}</span>\r
              <span class="insight-percentage">({{ status.percentage | number:'1.1-1' }}%)</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    \r
    <div class="col-md-6 mb-3">\r
      <div class="insight-card">\r
        <div class="insight-header">\r
          <h6 class="insight-title">{{ translate('tasks.insights.priorityDistribution') }}</h6>\r
          <div class="insight-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <div class="insight-content">\r
          <div *ngFor="let priority of tasksOverview.priorityDistribution" class="insight-item">\r
            <div class="insight-label">\r
              <span class="priority-dot" [class]="'priority-' + priority.priority.toLowerCase()"></span>\r
              {{ getPriorityDisplayName(priority.priority) }}\r
            </div>\r
            <div class="insight-value">\r
              <span class="insight-count">{{ priority.count }}</span>\r
              <span class="insight-percentage">({{ priority.percentage | number:'1.1-1' }}%)</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
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
                       maxlength="20">\r
                <div class="d-flex justify-content-between align-items-center mt-1">\r
                  <small class="text-danger" *ngIf="isTitleInvalid(addTaskForm)">\r
                    {{ getTitleErrorMessage(addTaskForm) }}\r
                  </small>\r
                  <small class="text-muted ms-auto">\r
                    {{ addTaskForm.get('title')?.value?.length || 0 }}/20\r
                  </small>\r
                </div>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.assignTo') }}</label>\r
                <select class="form-select" formControlName="assigneeUserId" name="assigneeUserId">\r
                  <option value="">{{ translate('tasks.form.selectMembers') }}</option>\r
                  <option *ngFor="let user of users" [value]="user.id">{{ user.name}}</option>\r
                </select>\r
              </div>\r
              \r
\r
              \r
              <div class="col-12 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.description') }}</label>\r
                <textarea class="form-control" rows="3" formControlName="description" name="description"\r
                          [placeholder]="translate('tasks.form.descriptionPlaceholder')"></textarea>\r
              </div>\r
              \r
              <div class="col-md-6 mb-3">\r
                <label class="form-label">{{ translate('tasks.form.department') }}</label>\r
                <select class="form-select" formControlName="deptId" name="deptId">\r
                  <option value="">{{ translate('tasks.form.selectDepartment') }}</option>\r
                  <option *ngFor="let dept of departments" [value]="dept.id">{{ currentLang === 'ar' ? dept.nameAr : dept.nameEn }}</option>\r
                </select>\r
              </div>\r
              \r
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
                <label class="form-label">{{ translate('tasks.form.department') }}</label>\r
                <select class="form-select" formControlName="deptId" name="editDeptId">\r
                  <option value="">{{ translate('tasks.form.selectDepartment') }}</option>\r
                  <option *ngFor="let dept of departments" [value]="dept.id">{{ currentLang === 'ar' ? dept.nameAr : dept.nameEn }}</option>\r
                </select>\r
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
                <button class="btn btn-reassign" (click)="showReassignModal = true">\r
                  {{ translate('tasks.actions.reassign') }}\r
                </button>\r
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
                <option *ngFor="let user of users" [value]="user.id">{{ user.name}}</option>\r
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
                <option *ngFor="let user of users" [value]="user.id">{{ user.name}}</option>\r
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
  background: #D4AA3A;
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
  color: #D4AA3A;
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
  color: #8b5cf6;
  background: #f3e8ff;
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
  transform: translateY(-2px);
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
.task-card.status-new {
  border-inline-start: 4px solid #0ea5e9;
}
.task-card.status-progress {
  border-inline-start: 4px solid #fb923c;
}
.task-card.status-done {
  border-inline-start: 4px solid #22c55e;
}
.task-card.status-stopped {
  border-inline-start: 4px solid #94a3b8;
}
.task-card.status-late {
  border-inline-start: 4px solid #ef4444;
}
.task-card.status-returned {
  border-inline-start: 4px solid #8b5cf6;
}
.task-card.status-review {
  border-inline-start: 4px solid #eab308;
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
  background-color: #8b5cf6;
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
  background: #f3e8ff;
  color: #8b5cf6;
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
.modal-body {
  padding: 1.5rem;
}
.modal-footer {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  border-color: #D4AA3A;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}
.btn-primary {
  background: #D4AA3A;
  border-color: #D4AA3A;
  color: #FFFFFF;
}
.btn-primary:hover {
  background: #B8941F;
  border-color: #B8941F;
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
  color: #D4AA3A;
  border-color: #D4AA3A;
  background: transparent;
}
.btn-outline-primary:hover {
  background: #D4AA3A;
  border-color: #D4AA3A;
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
  transform: translateY(-2px);
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
  color: #8b5cf6;
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
  color: #D4AA3A;
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
  background-color: #D4AA3A;
  color: white;
  border-color: #D4AA3A;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #D4AA3A;
  border-color: #D4AA3A;
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
  border-left: 4px solid #D4AA3A;
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
/*# sourceMappingURL=tasks.component-VNKY6QN6.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: DepartmentService }, { type: UsersService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/components/tasks/tasks.component.ts", lineNumber: 20 });
})();

// src/app/components/tasks/my-tasks/my-tasks.component.ts
var _c02 = ["confirmationModal"];
function MyTasksComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function MyTasksComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function MyTasksComponent_div_15_Template_div_click_0_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r3));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "h6", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "small", 42)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 42)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r3.description);
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
function MyTasksComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function MyTasksComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function MyTasksComponent_div_23_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 44)(3, "h6", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 50)(16, "small", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 12, task_r6.title, 0, 20), "", task_r6.title.length > 20 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(task_r6.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(10, 16, task_r6.description, 0, 50), "", task_r6.description.length > 50 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.translate("tasks.task.department"), " ", task_r6.deptName, " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getPriorityClass(task_r6.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getPriorityText(task_r6.priority), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.translate("tasks.task.dueDate"), ": ", ctx_r3.formatDate(task_r6.dueDate), " ");
  }
}
function MyTasksComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function MyTasksComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275listener("click", function MyTasksComponent_div_31_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "div", 44)(3, "h6", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "span", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 50)(16, "small", 51);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(5, 12, task_r8.title, 0, 20), "", task_r8.title.length > 20 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(task_r8.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(10, 16, task_r8.description, 0, 50), "", task_r8.description.length > 50 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.translate("tasks.task.department"), " ", task_r8.deptName, " \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.getPriorityClass(task_r8.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getPriorityText(task_r8.priority), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r3.translate("tasks.task.dueDate"), ": ", ctx_r3.formatDate(task_r8.dueDate), " ");
  }
}
function MyTasksComponent_div_32_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 56)(1, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_li_7_Template_a_click_1_listener($event) {
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
function MyTasksComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "nav", 54)(2, "ul", 55)(3, "li", 56)(4, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, MyTasksComponent_div_32_li_7_Template, 3, 3, "li", 58);
    \u0275\u0275elementStart(8, "li", 56)(9, "a", 57);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 59)(13, "span", 51);
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
function MyTasksComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "span", 62);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MyTasksComponent_div_40_div_40_Template(rf, ctx) {
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
function MyTasksComponent_div_40_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 51);
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
function MyTasksComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 63)(2, "div", 64)(3, "h4", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66)(7, "div", 67);
    \u0275\u0275element(8, "i", 68);
    \u0275\u0275elementStart(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 69);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 67);
    \u0275\u0275element(14, "i", 70);
    \u0275\u0275elementStart(15, "span", 51);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 71);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 66)(20, "div", 67);
    \u0275\u0275element(21, "i", 72);
    \u0275\u0275elementStart(22, "span", 51);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 69);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 67);
    \u0275\u0275element(27, "i", 73);
    \u0275\u0275elementStart(28, "span", 51);
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
    \u0275\u0275template(40, MyTasksComponent_div_40_div_40_Template, 2, 1, "div", 76)(41, MyTasksComponent_div_40_div_41_Template, 6, 3, "div", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 78)(43, "div", 79)(44, "button", 80);
    \u0275\u0275listener("click", function MyTasksComponent_div_40_Template_button_click_44_listener() {
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
function MyTasksComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.myTasks.form.feedbackRequired"), " ");
  }
}
function MyTasksComponent_div_57_div_2_Template(rf, ctx) {
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
function MyTasksComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, MyTasksComponent_div_57_div_1_Template, 2, 1, "div", 85)(2, MyTasksComponent_div_57_div_2_Template, 2, 1, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r3.feedbackForm.get("feedbackText")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r3.feedbackForm.get("feedbackText")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function MyTasksComponent_div_63_Template(rf, ctx) {
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
    this.feedbackForm = this.fb.group({
      feedbackText: ["", [Validators.required, Validators.minLength(10)]]
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
        this.tasksService.getEmployeeTasks().subscribe({
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
  }, standalone: false, decls: 66, vars: 42, consts: [["confirmationModal", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["rows", "4", "formControlName", "feedbackText", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-desc", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "task-title", "mb-0"], [1, "task-meta"], [1, "task-desc"], [1, "task-meta", "mb-2"], [1, "badge"], [1, "task-footer"], [1, "text-muted"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-backdrop", "fade"]], template: function MyTasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementStart(11, "span", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, MyTasksComponent_div_13_Template, 1, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11);
      \u0275\u0275template(15, MyTasksComponent_div_15_Template, 15, 6, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, MyTasksComponent_div_21_Template, 1, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11);
      \u0275\u0275template(23, MyTasksComponent_div_23_Template, 18, 20, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementStart(27, "span", 9);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, MyTasksComponent_div_29_Template, 1, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275template(31, MyTasksComponent_div_31_Template, 18, 20, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, MyTasksComponent_div_32_Template, 18, 14, "div", 17)(33, MyTasksComponent_div_33_Template, 4, 0, "div", 18);
      \u0275\u0275elementStart(34, "div", 19)(35, "div", 20)(36, "div", 21)(37, "div", 22)(38, "h5", 23);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(40, MyTasksComponent_div_40_Template, 46, 19, "div", 24);
      \u0275\u0275elementStart(41, "div", 25)(42, "button", 26);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(44, "div", 19)(45, "div", 27)(46, "div", 21)(47, "div", 22)(48, "h5", 23);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "form", 28);
      \u0275\u0275listener("ngSubmit", function MyTasksComponent_Template_form_ngSubmit_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitFeedback());
      });
      \u0275\u0275elementStart(51, "div", 29)(52, "div", 30)(53, "label", 31);
      \u0275\u0275text(54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "textarea", 32);
      \u0275\u0275text(56, "              ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, MyTasksComponent_div_57_Template, 3, 2, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "button", 26);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showFeedbackModal"));
      });
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 34);
      \u0275\u0275text(62);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(63, MyTasksComponent_div_63_Template, 1, 2, "div", 35);
      \u0275\u0275element(64, "app-confirmation-modal", null, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_31_0;
      let tmp_33_0;
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("tasks.myTasks.subtitle"));
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
      \u0275\u0275classProp("is-invalid", ((tmp_31_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_31_0.invalid) && ((tmp_31_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_31_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("tasks.myTasks.form.feedbackPlaceholder"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ((tmp_33_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_33_0.invalid) && ((tmp_33_0 = ctx.feedbackForm.get("feedbackText")) == null ? null : tmp_33_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.feedbackForm.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.submit"), " ");
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
  background: #D4AA3A;
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
  color: #D4AA3A;
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
  color: #8b5cf6;
  background: #f3e8ff;
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
  transform: translateY(-2px);
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
.task-card.status-new[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #0ea5e9;
}
.task-card.status-progress[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #fb923c;
}
.task-card.status-done[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #22c55e;
}
.task-card.status-stopped[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #94a3b8;
}
.task-card.status-late[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #ef4444;
}
.task-card.status-returned[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #8b5cf6;
}
.task-card.status-review[_ngcontent-%COMP%] {
  border-inline-start: 4px solid #eab308;
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
  background-color: #8b5cf6;
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
  background: #f3e8ff;
  color: #8b5cf6;
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
.modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  border-color: #D4AA3A;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn[_ngcontent-%COMP%] {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #D4AA3A;
  border-color: #D4AA3A;
  color: #FFFFFF;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #B8941F;
  border-color: #B8941F;
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
  color: #D4AA3A;
  border-color: #D4AA3A;
  background: transparent;
}
.btn-outline-primary[_ngcontent-%COMP%]:hover {
  background: #D4AA3A;
  border-color: #D4AA3A;
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
  transform: translateY(-2px);
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
  color: #8b5cf6;
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
  color: #D4AA3A;
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
  background-color: #D4AA3A;
  color: white;
  border-color: #D4AA3A;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {
  background-color: #D4AA3A;
  border-color: #D4AA3A;
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
  border-left: 4px solid #D4AA3A;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
  gap: 1.5rem;
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
.task-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #e5e7eb;
  transition: background-color 0.2s ease;
}
.task-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card[_ngcontent-%COMP%]:hover::before {
  background: #3b82f6;
}
.task-card.compact[_ngcontent-%COMP%] {
  padding: 0.75rem;
}
.task-content[_ngcontent-%COMP%] {
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
.status-new[_ngcontent-%COMP%]::before {
  background: #3b82f6 !important;
}
.status-progress[_ngcontent-%COMP%]::before {
  background: #f59e0b !important;
}
.status-returned[_ngcontent-%COMP%]::before {
  background: #ef4444 !important;
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
  border-color: #3b82f6;
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
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8 0%,
      #1e40af 100%);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.btn-secondary[_ngcontent-%COMP%] {
  background: #6b7280;
  color: white;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background: #4b5563;
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
/*# sourceMappingURL=my-tasks.component-EU6DYJAK.css.map */`] });
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
            <div class="d-flex justify-content-between align-items-start mb-2">\r
              <h6 class="task-title mb-0">{{ task.title | slice:0:20 }}{{ task.title.length > 20 ? '...' : '' }}</h6>\r
              <small class="task-meta">{{ formatDate(task.createdAt) }}</small>\r
            </div>\r
            \r
            <p class="task-desc">{{ task.description | slice:0:50 }}{{ task.description.length > 50 ? '...' : '' }}</p>\r
            \r
            <div class="task-meta mb-2">\r
              {{ translate('tasks.task.department') }} {{ task.deptName }} \xB7 \r
              <span class="badge" [class]="getPriorityClass(task.priority)">\r
                {{ getPriorityText(task.priority) }}\r
              </span>\r
            </div>\r
            \r
            <div class="task-footer">\r
              <small class="text-muted">\r
                {{ translate('tasks.task.dueDate') }}: {{ formatDate(task.dueDate) }}\r
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
            <div class="d-flex justify-content-between align-items-start mb-2">\r
              <h6 class="task-title mb-0">{{ task.title | slice:0:20 }}{{ task.title.length > 20 ? '...' : '' }}</h6>\r
              <small class="task-meta">{{ formatDate(task.createdAt) }}</small>\r
            </div>\r
            \r
            <p class="task-desc">{{ task.description | slice:0:50 }}{{ task.description.length > 50 ? '...' : '' }}</p>\r
            \r
            <div class="task-meta mb-2">\r
              {{ translate('tasks.task.department') }} {{ task.deptName }} \xB7 \r
              <span class="badge" [class]="getPriorityClass(task.priority)">\r
                {{ getPriorityText(task.priority) }}\r
              </span>\r
            </div>\r
            \r
            <div class="task-footer">\r
              <small class="text-muted">\r
                {{ translate('tasks.task.dueDate') }}: {{ formatDate(task.dueDate) }}\r
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
                <div *ngIf="feedbackForm.get('feedbackText')?.errors?.['required']">\r
                  {{ translate('tasks.myTasks.form.feedbackRequired') }}\r
                </div>\r
                <div *ngIf="feedbackForm.get('feedbackText')?.errors?.['minlength']">\r
                  {{ translate('tasks.myTasks.form.feedbackMinLength') }}\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          \r
          <div class="modal-footer">\r
            <button type="button" class="btn btn-secondary" (click)="closeModal('showFeedbackModal')">\r
              {{ translate('common.cancel') }}\r
            </button>\r
            <button type="submit" class="btn btn-primary" [disabled]="!feedbackForm.valid">\r
              {{ translate('common.submit') }}\r
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
  background: #D4AA3A;
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
  color: #D4AA3A;
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
  color: #8b5cf6;
  background: #f3e8ff;
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
  transform: translateY(-2px);
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
.task-card.status-new {
  border-inline-start: 4px solid #0ea5e9;
}
.task-card.status-progress {
  border-inline-start: 4px solid #fb923c;
}
.task-card.status-done {
  border-inline-start: 4px solid #22c55e;
}
.task-card.status-stopped {
  border-inline-start: 4px solid #94a3b8;
}
.task-card.status-late {
  border-inline-start: 4px solid #ef4444;
}
.task-card.status-returned {
  border-inline-start: 4px solid #8b5cf6;
}
.task-card.status-review {
  border-inline-start: 4px solid #eab308;
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
  background-color: #8b5cf6;
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
  background: #f3e8ff;
  color: #8b5cf6;
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
.modal-body {
  padding: 1.5rem;
}
.modal-footer {
  border-top: 1px solid #E6D7A2;
  padding: 1rem 1.5rem 1.5rem;
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
  border-color: #D4AA3A;
  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);
}
.btn {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
}
.btn-primary {
  background: #D4AA3A;
  border-color: #D4AA3A;
  color: #FFFFFF;
}
.btn-primary:hover {
  background: #B8941F;
  border-color: #B8941F;
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
  color: #D4AA3A;
  border-color: #D4AA3A;
  background: transparent;
}
.btn-outline-primary:hover {
  background: #D4AA3A;
  border-color: #D4AA3A;
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
  transform: translateY(-2px);
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
  color: #8b5cf6;
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
  color: #D4AA3A;
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
  background-color: #D4AA3A;
  color: white;
  border-color: #D4AA3A;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(38, 102, 127, 0.2);
}
.pagination .page-item.active .page-link {
  background-color: #D4AA3A;
  border-color: #D4AA3A;
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
  border-left: 4px solid #D4AA3A;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
  gap: 1.5rem;
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
.task-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #e5e7eb;
  transition: background-color 0.2s ease;
}
.task-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}
.task-card:hover::before {
  background: #3b82f6;
}
.task-card.compact {
  padding: 0.75rem;
}
.task-content {
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
.status-new::before {
  background: #3b82f6 !important;
}
.status-progress::before {
  background: #f59e0b !important;
}
.status-returned::before {
  background: #ef4444 !important;
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
  border-color: #3b82f6;
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
  background:
    linear-gradient(
      135deg,
      #3b82f6 0%,
      #1d4ed8 100%);
  color: white;
}
.btn-primary:hover {
  background:
    linear-gradient(
      135deg,
      #1d4ed8 0%,
      #1e40af 100%);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.btn-secondary {
  background: #6b7280;
  color: white;
}
.btn-secondary:hover {
  background: #4b5563;
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
/*# sourceMappingURL=my-tasks.component-EU6DYJAK.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: TranslationService }, { type: LangService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyTasksComponent, { className: "MyTasksComponent", filePath: "src/app/components/tasks/my-tasks/my-tasks.component.ts", lineNumber: 16 });
})();

// src/app/components/tasks/tasks-routing-module.ts
var routes = [
  {
    path: "",
    component: TasksComponent
  },
  {
    path: "my-tasks",
    component: MyTasksComponent
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
        MyTasksComponent
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
//# sourceMappingURL=chunk-JLBFARWI.js.map
