import {
  UsersService
} from "./chunk-4F2KD3XG.js";
import {
  AuthService
} from "./chunk-RASZSSEP.js";
import {
  ConfirmationModalComponent
} from "./chunk-AZWPXQOC.js";
import "./chunk-EQJ2EME2.js";
import {
  RouterModule
} from "./chunk-NPJF3A32.js";
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
} from "./chunk-L22Y656D.js";
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
} from "./chunk-OWCDAEJQ.js";
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
function TasksComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275listener("click", function TasksComponent_div_90_Template_div_click_0_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r3));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_90_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_90_Template_input_change_1_listener() {
      const task_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r3.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r3.id));
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
function TasksComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275listener("click", function TasksComponent_div_98_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_98_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_98_Template_input_change_1_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r3.showBulkToolbar ? "block" : "none");
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r6.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r6.dueDate), " ");
  }
}
function TasksComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275listener("click", function TasksComponent_div_106_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_106_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_106_Template_input_change_1_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r8.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r8.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r8.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r8.dueDate), " ");
  }
}
function TasksComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275listener("click", function TasksComponent_div_114_Template_div_click_0_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r10));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_114_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_114_Template_input_change_1_listener() {
      const task_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r10.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r3.showBulkToolbar ? "block" : "none");
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r10.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r10.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r10.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r10.dueDate), " ");
  }
}
function TasksComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275listener("click", function TasksComponent_div_122_Template_div_click_0_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r12));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_122_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_122_Template_input_change_1_listener() {
      const task_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r12.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r12.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r12.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r12.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r12.dueDate), " ");
  }
}
function TasksComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275listener("click", function TasksComponent_div_130_Template_div_click_0_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r14));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_130_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_130_Template_input_change_1_listener() {
      const task_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r14.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r14.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r14.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r14.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r14.dueDate), " ");
  }
}
function TasksComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 132);
  }
}
function TasksComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275listener("click", function TasksComponent_div_138_Template_div_click_0_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r16));
    });
    \u0275\u0275elementStart(1, "input", 134);
    \u0275\u0275listener("click", function TasksComponent_div_138_Template_input_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function TasksComponent_div_138_Template_input_change_1_listener() {
      const task_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTaskSelection(task_r16.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 135)(3, "h6", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 137);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 138)(8, "small", 139)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "small", 139)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.selectedTasks.has(task_r16.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r16.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r16.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.createdAt"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r16.createdAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.translate("tasks.task.dueDate"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(task_r16.dueDate), " ");
  }
}
function TasksComponent_div_139_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 149)(1, "a", 150);
    \u0275\u0275listener("click", function TasksComponent_div_139_li_7_Template_a_click_1_listener($event) {
      const page_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      ctx_r3.goToPage(page_r19);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r19 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r19 === ctx_r3.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r19);
  }
}
function TasksComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "nav", 147)(2, "ul", 148)(3, "li", 149)(4, "a", 150);
    \u0275\u0275listener("click", function TasksComponent_div_139_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TasksComponent_div_139_li_7_Template, 3, 3, "li", 151);
    \u0275\u0275elementStart(8, "li", 149)(9, "a", 150);
    \u0275\u0275listener("click", function TasksComponent_div_139_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 152)(13, "span", 64);
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
function TasksComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "div", 154)(2, "span", 155);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function TasksComponent_small_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getTitleErrorMessage(ctx_r3.addTaskForm), " ");
  }
}
function TasksComponent_option_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r20 = ctx.$implicit;
    \u0275\u0275property("value", user_r20.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r20.name);
  }
}
function TasksComponent_div_208_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275element(1, "i", 161);
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 163);
    \u0275\u0275listener("click", function TasksComponent_div_208_div_1_Template_button_click_4_listener() {
      const i_r23 = \u0275\u0275restoreView(_r22).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeSelectedFile(i_r23));
    });
    \u0275\u0275element(5, "i", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r24 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r24.name);
  }
}
function TasksComponent_div_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275template(1, TasksComponent_div_208_div_1_Template, 6, 1, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.selectedFiles);
  }
}
function TasksComponent_small_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 156);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getTitleErrorMessage(ctx_r3.editTaskForm), " ");
  }
}
function TasksComponent_option_245_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r25 = ctx.$implicit;
    \u0275\u0275property("value", user_r25.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r25.name);
  }
}
function TasksComponent_div_273_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160);
    \u0275\u0275element(1, "i", 161);
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 163);
    \u0275\u0275listener("click", function TasksComponent_div_273_div_1_Template_button_click_4_listener() {
      const i_r28 = \u0275\u0275restoreView(_r27).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeSelectedFile(i_r28));
    });
    \u0275\u0275element(5, "i", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r29 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r29.name);
  }
}
function TasksComponent_div_273_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158);
    \u0275\u0275template(1, TasksComponent_div_273_div_1_Template, 6, 1, "div", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.selectedFiles);
  }
}
function TasksComponent_div_285_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.task.noAttachments"), " ");
  }
}
function TasksComponent_div_285_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 192);
    \u0275\u0275element(1, "i", 193);
    \u0275\u0275elementStart(2, "div", 162)(3, "div", 194);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 64);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 163);
    \u0275\u0275listener("click", function TasksComponent_div_285_div_41_Template_button_click_7_listener() {
      const attachment_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteAttachment(attachment_r32.id, ctx_r3.currentTask.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 195);
    \u0275\u0275element(9, "polyline", 196)(10, "path", 197)(11, "path", 198)(12, "path", 199)(13, "path", 200);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r32 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r32.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", attachment_r32.uploadedByName, " - ", ctx_r3.formatDate(attachment_r32.uploadedAt));
  }
}
function TasksComponent_div_285_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.task.noUpdates"), " ");
  }
}
function TasksComponent_div_285_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 162)(2, "div", 194);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const update_r34 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(update_r34.note);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", update_r34.createdByName, " - ", ctx_r3.formatDate(update_r34.createdAt));
  }
}
function TasksComponent_div_285_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.task.noFeedback"), " ");
  }
}
function TasksComponent_div_285_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "div", 162)(2, "div", 194);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feedback_r35 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r35.feedbackText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", feedback_r35.employeeName, " - ", ctx_r3.formatDate(feedback_r35.createdAt));
  }
}
function TasksComponent_div_285_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 165)(3, "h4", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 166)(6, "div", 167)(7, "div", 168);
    \u0275\u0275element(8, "i", 169);
    \u0275\u0275elementStart(9, "span", 64);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 170);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 168);
    \u0275\u0275element(14, "i", 171);
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 172);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 167)(20, "div", 168);
    \u0275\u0275element(21, "i", 173);
    \u0275\u0275elementStart(22, "span", 64);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 170);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 168);
    \u0275\u0275element(27, "i", 174);
    \u0275\u0275elementStart(28, "span", 64);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 170);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 175)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 176);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 175)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TasksComponent_div_285_div_40_Template, 2, 1, "div", 177)(41, TasksComponent_div_285_div_41_Template, 14, 3, "div", 178);
    \u0275\u0275elementStart(42, "div", 179)(43, "input", 180, 3);
    \u0275\u0275listener("change", function TasksComponent_div_285_Template_input_change_43_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event, ctx_r3.currentTask.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 181);
    \u0275\u0275listener("click", function TasksComponent_div_285_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r30);
      const detailsFileInput_r33 = \u0275\u0275reference(44);
      return \u0275\u0275resetView(detailsFileInput_r33.click());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 182);
    \u0275\u0275element(47, "line", 183)(48, "line", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 175)(51, "h6");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, TasksComponent_div_285_div_53_Template, 2, 1, "div", 177)(54, TasksComponent_div_285_div_54_Template, 6, 3, "div", 185);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 175)(56, "h6");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, TasksComponent_div_285_div_58_Template, 2, 1, "div", 177)(59, TasksComponent_div_285_div_59_Template, 6, 3, "div", 185);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 186)(61, "div", 187)(62, "button", 188);
    \u0275\u0275listener("click", function TasksComponent_div_285_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditTaskModal(ctx_r3.currentTask));
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 189);
    \u0275\u0275listener("click", function TasksComponent_div_285_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showStatusUpdateModal = true);
    });
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 190);
    \u0275\u0275listener("click", function TasksComponent_div_285_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showAddUpdateModal = true);
    });
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "button", 191);
    \u0275\u0275listener("click", function TasksComponent_div_285_Template_button_click_68_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteTask(ctx_r3.currentTask));
    });
    \u0275\u0275text(69);
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
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.task.attachments"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentTaskAttachments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.currentTaskAttachments);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.task.addAttachment"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.task.updatesTimeline"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentTaskUpdates.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.currentTaskUpdates);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.translate("tasks.task.feedback"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentTaskFeedback.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.currentTaskFeedback);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.actions.edit"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.actions.changeStatus"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.actions.addUpdate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.actions.delete"), " ");
  }
}
function TasksComponent_div_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275element(1, "i", 203);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.dialogs.taskCompletedWarning"), " ");
  }
}
function TasksComponent_option_358_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r36 = ctx.$implicit;
    \u0275\u0275property("value", employee_r36.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r36.name);
  }
}
function TasksComponent_div_376_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275element(1, "i", 203);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.bulk.completedTasksWarning"), " ");
  }
}
function TasksComponent_option_420_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const employee_r37 = ctx.$implicit;
    \u0275\u0275property("value", employee_r37.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(employee_r37.name);
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
        yield Promise.all([
          this.loadTasksOverview(),
          this.loadTasks(),
          this.loadAllTasksForCounting(),
          this.loadUsers(),
          this.loadDirectEmployees()
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
  }, standalone: false, decls: 432, vars: 222, consts: [["fileInput", ""], ["editFileInput", ""], ["confirmationModal", ""], ["detailsFileInput", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "row", "mb-4", "kpi-cards-row", "d-flex", "g-4"], [1, "col-lg-2", "col-md-4", "col-sm-6", "mb-4"], [1, "kpi-card", "kpi-total"], [1, "kpi-content"], [1, "kpi-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "12", "x2", "15", "y2", "12", "stroke", "currentColor", "stroke-width", "2"], ["x1", "9", "y1", "15", "x2", "15", "y2", "15", "stroke", "currentColor", "stroke-width", "2"], [1, "kpi-info"], [1, "kpi-number"], [1, "kpi-label"], [1, "kpi-card", "kpi-progress"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["points", "12,6 12,12 16,14", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completed"], ["d", "M20 6L9 17L4 12", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "kpi-card", "kpi-late"], ["d", "M12 6v6l4 2", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], [1, "kpi-card", "kpi-completion-rate"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "completion-progress"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-labels"], [1, "progress-min"], [1, "progress-max"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "btn", "btn-add", "gap-2", 3, "click"], [1, "plus"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "green"], ["class", "task-card status-done compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "gray"], ["class", "task-card status-stopped compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "red"], ["class", "task-card status-late compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "yellow"], ["class", "task-card status-review compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], [1, "bulk-bar"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "gap-3"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "text-muted"], [1, "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], [1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-12", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "title", "name", "title", "maxlength", "30", 1, "form-control", 3, "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-1"], ["class", "text-danger", 4, "ngIf"], [1, "text-muted", "ms-auto"], [1, "col-md-6", "mb-3"], ["formControlName", "assigneeUserId", "name", "assigneeUserId", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "priority", "name", "priority", 1, "form-select"], ["value", "1"], ["value", "2"], ["value", "3"], ["rows", "3", "formControlName", "description", "name", "description", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "dueDate", 1, "form-control"], [1, "border", "rounded", "p-4", "text-center", "text-muted"], [1, "fas", "fa-cloud-upload-alt", "fa-2x", "mb-2"], [1, "mb-2"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["class", "mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "text", "formControlName", "title", "name", "editTitle", "maxlength", "30", 1, "form-control", 3, "placeholder"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editStartDate", 1, "form-control"], ["type", "datetime-local", "formControlName", "dueDate", "name", "editEndDate", 1, "form-control"], ["formControlName", "assigneeUserId", "name", "editAssigneeUserId", 1, "form-select"], ["rows", "3", "formControlName", "description", "name", "editDescription", 1, "form-control", 3, "placeholder"], ["formControlName", "priority", "name", "editPriority", 1, "form-select"], [1, "modal-dialog", "modal-xl"], ["class", "modal-body", 4, "ngIf"], [1, "modal-dialog"], ["class", "alert alert-warning mb-3", 4, "ngIf"], [1, "mb-3"], ["formControlName", "status", 1, "form-select", 3, "disabled"], ["value", "0", 3, "disabled"], ["value", "1", 3, "disabled"], ["value", "2", 3, "disabled"], ["value", "3", 3, "disabled"], ["value", "4", 3, "disabled"], ["value", "5", 3, "disabled"], ["value", "6", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder", "disabled"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["rows", "3", "formControlName", "note", 1, "form-control", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["formControlName", "newAssigneeUserId", 1, "form-select"], ["type", "submit", 1, "btn", "btn-secondary", 3, "disabled"], ["formControlName", "status", 1, "form-select"], ["value", "0"], ["value", "4"], ["value", "5"], ["value", "6"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], ["type", "checkbox", 1, "bulk-check", "form-check-input", 3, "click", "change", "checked"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-desc", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-card", "status-done", "compact", 3, "click"], [1, "task-card", "status-stopped", "compact", 3, "click"], [1, "task-card", "status-late", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "task-card", "status-review", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "text-danger"], [3, "value"], [1, "mt-2"], ["class", "d-flex align-items-center p-2 border rounded mb-1", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "p-2", "border", "rounded", "mb-1"], [1, "fas", "fa-file", "me-2", "text-muted"], [1, "flex-grow-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-center p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "file", 1, "d-none", 3, "change"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "me-1"], ["x1", "8", "y1", "1", "x2", "8", "y2", "15", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["x1", "1", "y1", "8", "x2", "15", "y2", "8", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "edit-task-btn", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], [1, "btn", "btn-outline-info", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "d-flex", "align-items-center", "p-2", "border-bottom"], [1, "fas", "fa-file", "me-2"], [1, "fw-bold"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "alert", "alert-warning", "mb-3"], [1, "fas", "fa-exclamation-triangle", "me-2"]], template: function TasksComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(82, "div", 40)(83, "div", 41)(84, "div", 42);
      \u0275\u0275text(85);
      \u0275\u0275elementStart(86, "span", 43);
      \u0275\u0275text(87);
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, TasksComponent_div_88_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 45);
      \u0275\u0275template(90, TasksComponent_div_90_Template, 16, 7, "div", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 41)(92, "div", 47);
      \u0275\u0275text(93);
      \u0275\u0275elementStart(94, "span", 43);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275template(96, TasksComponent_div_96_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 45);
      \u0275\u0275template(98, TasksComponent_div_98_Template, 16, 9, "div", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 41)(100, "div", 49);
      \u0275\u0275text(101);
      \u0275\u0275elementStart(102, "span", 43);
      \u0275\u0275text(103);
      \u0275\u0275elementEnd();
      \u0275\u0275template(104, TasksComponent_div_104_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 45);
      \u0275\u0275template(106, TasksComponent_div_106_Template, 16, 7, "div", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 41)(108, "div", 51);
      \u0275\u0275text(109);
      \u0275\u0275elementStart(110, "span", 43);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275template(112, TasksComponent_div_112_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 45);
      \u0275\u0275template(114, TasksComponent_div_114_Template, 16, 9, "div", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 41)(116, "div", 53);
      \u0275\u0275text(117);
      \u0275\u0275elementStart(118, "span", 43);
      \u0275\u0275text(119);
      \u0275\u0275elementEnd();
      \u0275\u0275template(120, TasksComponent_div_120_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 45);
      \u0275\u0275template(122, TasksComponent_div_122_Template, 16, 7, "div", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 41)(124, "div", 55);
      \u0275\u0275text(125);
      \u0275\u0275elementStart(126, "span", 43);
      \u0275\u0275text(127);
      \u0275\u0275elementEnd();
      \u0275\u0275template(128, TasksComponent_div_128_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 45);
      \u0275\u0275template(130, TasksComponent_div_130_Template, 16, 7, "div", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 41)(132, "div", 57);
      \u0275\u0275text(133);
      \u0275\u0275elementStart(134, "span", 43);
      \u0275\u0275text(135);
      \u0275\u0275elementEnd();
      \u0275\u0275template(136, TasksComponent_div_136_Template, 1, 0, "div", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 45);
      \u0275\u0275template(138, TasksComponent_div_138_Template, 16, 7, "div", 58);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(139, TasksComponent_div_139_Template, 18, 14, "div", 59);
      \u0275\u0275elementStart(140, "div", 60)(141, "div", 61)(142, "div", 62)(143, "button", 63);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_143_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAllTasks());
      });
      \u0275\u0275text(144);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "span", 64);
      \u0275\u0275text(146);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 65)(148, "button", 66);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_148_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkStatusModal = true);
      });
      \u0275\u0275text(149);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "button", 67);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_150_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showBulkReassignModal = true);
      });
      \u0275\u0275text(151);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(152, TasksComponent_div_152_Template, 4, 0, "div", 68);
      \u0275\u0275elementStart(153, "div", 69)(154, "div", 70)(155, "div", 71)(156, "div", 72)(157, "h5", 73);
      \u0275\u0275text(158);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_159_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitAddTask());
      });
      \u0275\u0275elementStart(160, "div", 75)(161, "div", 76)(162, "div", 77)(163, "label", 78);
      \u0275\u0275text(164);
      \u0275\u0275elementEnd();
      \u0275\u0275element(165, "input", 79);
      \u0275\u0275elementStart(166, "div", 80);
      \u0275\u0275template(167, TasksComponent_small_167_Template, 2, 1, "small", 81);
      \u0275\u0275elementStart(168, "small", 82);
      \u0275\u0275text(169);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div", 83)(171, "label", 78);
      \u0275\u0275text(172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "select", 84)(174, "option", 85);
      \u0275\u0275text(175);
      \u0275\u0275elementEnd();
      \u0275\u0275template(176, TasksComponent_option_176_Template, 2, 2, "option", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 83)(178, "label", 78);
      \u0275\u0275text(179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "select", 87)(181, "option", 85);
      \u0275\u0275text(182);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "option", 88);
      \u0275\u0275text(184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "option", 89);
      \u0275\u0275text(186);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "option", 90);
      \u0275\u0275text(188);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "div", 77)(190, "label", 78);
      \u0275\u0275text(191);
      \u0275\u0275elementEnd();
      \u0275\u0275element(192, "textarea", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 77)(194, "label", 78);
      \u0275\u0275text(195);
      \u0275\u0275elementEnd();
      \u0275\u0275element(196, "input", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 77)(198, "label", 78);
      \u0275\u0275text(199);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 93);
      \u0275\u0275element(201, "i", 94);
      \u0275\u0275elementStart(202, "p", 95);
      \u0275\u0275text(203);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "input", 96, 0);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_204_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "button", 97);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_206_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r21 = \u0275\u0275reference(205);
        return \u0275\u0275resetView(fileInput_r21.click());
      });
      \u0275\u0275text(207);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(208, TasksComponent_div_208_Template, 2, 1, "div", 98);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 99)(210, "button", 100);
      \u0275\u0275text(211);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_212_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddTaskModal"));
      });
      \u0275\u0275text(213);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(214, "div", 69)(215, "div", 70)(216, "div", 71)(217, "div", 72)(218, "h5", 73);
      \u0275\u0275text(219);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_220_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmitEditTask());
      });
      \u0275\u0275elementStart(221, "div", 75)(222, "div", 76)(223, "div", 77)(224, "label", 78);
      \u0275\u0275text(225);
      \u0275\u0275elementEnd();
      \u0275\u0275element(226, "input", 102);
      \u0275\u0275elementStart(227, "div", 80);
      \u0275\u0275template(228, TasksComponent_small_228_Template, 2, 1, "small", 81);
      \u0275\u0275elementStart(229, "small", 82);
      \u0275\u0275text(230);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(231, "div", 83)(232, "label", 78);
      \u0275\u0275text(233);
      \u0275\u0275elementEnd();
      \u0275\u0275element(234, "input", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 83)(236, "label", 78);
      \u0275\u0275text(237);
      \u0275\u0275elementEnd();
      \u0275\u0275element(238, "input", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 77)(240, "label", 78);
      \u0275\u0275text(241);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "select", 105)(243, "option", 85);
      \u0275\u0275text(244);
      \u0275\u0275elementEnd();
      \u0275\u0275template(245, TasksComponent_option_245_Template, 2, 2, "option", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(246, "div", 77)(247, "label", 78);
      \u0275\u0275text(248);
      \u0275\u0275elementEnd();
      \u0275\u0275element(249, "textarea", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 83)(251, "label", 78);
      \u0275\u0275text(252);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "select", 107)(254, "option", 85);
      \u0275\u0275text(255);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "option", 88);
      \u0275\u0275text(257);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "option", 89);
      \u0275\u0275text(259);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "option", 90);
      \u0275\u0275text(261);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(262, "div", 77)(263, "label", 78);
      \u0275\u0275text(264);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 93);
      \u0275\u0275element(266, "i", 94);
      \u0275\u0275elementStart(267, "p", 95);
      \u0275\u0275text(268);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "input", 96, 1);
      \u0275\u0275listener("change", function TasksComponent_Template_input_change_269_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event, ctx.currentTask == null ? null : ctx.currentTask.id));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "button", 97);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_271_listener() {
        \u0275\u0275restoreView(_r1);
        const editFileInput_r26 = \u0275\u0275reference(270);
        return \u0275\u0275resetView(editFileInput_r26.click());
      });
      \u0275\u0275text(272);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(273, TasksComponent_div_273_Template, 2, 1, "div", 98);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(274, "div", 99)(275, "button", 100);
      \u0275\u0275text(276);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_277_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showEditTaskModal"));
      });
      \u0275\u0275text(278);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(279, "div", 69)(280, "div", 108)(281, "div", 71)(282, "div", 72)(283, "h5", 73);
      \u0275\u0275text(284);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(285, TasksComponent_div_285_Template, 70, 28, "div", 109);
      \u0275\u0275elementStart(286, "div", 99)(287, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_287_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showTaskDetailsModal"));
      });
      \u0275\u0275text(288);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "div", 69)(290, "div", 110)(291, "div", 71)(292, "div", 72)(293, "h5", 73);
      \u0275\u0275text(294);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_295_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTaskStatus());
      });
      \u0275\u0275elementStart(296, "div", 75);
      \u0275\u0275template(297, TasksComponent_div_297_Template, 3, 1, "div", 111);
      \u0275\u0275elementStart(298, "div", 112)(299, "label", 78);
      \u0275\u0275text(300);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "select", 113)(302, "option", 85);
      \u0275\u0275text(303);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "option", 114);
      \u0275\u0275text(305);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "option", 115);
      \u0275\u0275text(307);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "option", 116);
      \u0275\u0275text(309);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "option", 117);
      \u0275\u0275text(311);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "option", 118);
      \u0275\u0275text(313);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "option", 119);
      \u0275\u0275text(315);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "option", 120);
      \u0275\u0275text(317);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(318, "div", 112)(319, "label", 78);
      \u0275\u0275text(320);
      \u0275\u0275elementEnd();
      \u0275\u0275element(321, "textarea", 121);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "div", 99)(323, "button", 122);
      \u0275\u0275text(324);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_325_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showStatusUpdateModal"));
      });
      \u0275\u0275text(326);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(327, "div", 69)(328, "div", 110)(329, "div", 71)(330, "div", 72)(331, "h5", 73);
      \u0275\u0275text(332);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(333, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_333_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addTaskUpdate());
      });
      \u0275\u0275elementStart(334, "div", 75)(335, "div", 112)(336, "label", 78);
      \u0275\u0275text(337);
      \u0275\u0275elementEnd();
      \u0275\u0275element(338, "textarea", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "div", 99)(340, "button", 124);
      \u0275\u0275text(341);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_342_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showAddUpdateModal"));
      });
      \u0275\u0275text(343);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(344, "div", 69)(345, "div", 110)(346, "div", 71)(347, "div", 72)(348, "h5", 73);
      \u0275\u0275text(349);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_350_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reassignTask());
      });
      \u0275\u0275elementStart(351, "div", 75)(352, "div", 112)(353, "label", 78);
      \u0275\u0275text(354);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "select", 125)(356, "option", 85);
      \u0275\u0275text(357);
      \u0275\u0275elementEnd();
      \u0275\u0275template(358, TasksComponent_option_358_Template, 2, 2, "option", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 112)(360, "label", 78);
      \u0275\u0275text(361);
      \u0275\u0275elementEnd();
      \u0275\u0275element(362, "textarea", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "div", 99)(364, "button", 126);
      \u0275\u0275text(365);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_366_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showReassignModal"));
      });
      \u0275\u0275text(367);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(368, "div", 69)(369, "div", 110)(370, "div", 71)(371, "div", 72)(372, "h5", 73);
      \u0275\u0275text(373);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_374_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkUpdateStatus());
      });
      \u0275\u0275elementStart(375, "div", 75);
      \u0275\u0275template(376, TasksComponent_div_376_Template, 3, 1, "div", 111);
      \u0275\u0275elementStart(377, "div", 112)(378, "label", 78);
      \u0275\u0275text(379);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "select", 127)(381, "option", 85);
      \u0275\u0275text(382);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "option", 128);
      \u0275\u0275text(384);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "option", 88);
      \u0275\u0275text(386);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "option", 89);
      \u0275\u0275text(388);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "option", 90);
      \u0275\u0275text(390);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "option", 129);
      \u0275\u0275text(392);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "option", 130);
      \u0275\u0275text(394);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "option", 131);
      \u0275\u0275text(396);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(397, "div", 112)(398, "label", 78);
      \u0275\u0275text(399);
      \u0275\u0275elementEnd();
      \u0275\u0275element(400, "textarea", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 99)(402, "button", 122);
      \u0275\u0275text(403);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_404_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkStatusModal"));
      });
      \u0275\u0275text(405);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(406, "div", 69)(407, "div", 110)(408, "div", 71)(409, "div", 72)(410, "h5", 73);
      \u0275\u0275text(411);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(412, "form", 74);
      \u0275\u0275listener("ngSubmit", function TasksComponent_Template_form_ngSubmit_412_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.bulkReassign());
      });
      \u0275\u0275elementStart(413, "div", 75)(414, "div", 112)(415, "label", 78);
      \u0275\u0275text(416);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "select", 125)(418, "option", 85);
      \u0275\u0275text(419);
      \u0275\u0275elementEnd();
      \u0275\u0275template(420, TasksComponent_option_420_Template, 2, 2, "option", 86);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "div", 112)(422, "label", 78);
      \u0275\u0275text(423);
      \u0275\u0275elementEnd();
      \u0275\u0275element(424, "textarea", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(425, "div", 99)(426, "button", 124);
      \u0275\u0275text(427);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "button", 101);
      \u0275\u0275listener("click", function TasksComponent_Template_button_click_428_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showBulkReassignModal"));
      });
      \u0275\u0275text(429);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(430, "app-confirmation-modal", null, 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_63_0;
      let tmp_91_0;
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
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(61, 219, ctx.completionRate, "1.1-1"), "%");
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
      \u0275\u0275textInterpolate1(" ", ((tmp_63_0 = ctx.addTaskForm.get("title")) == null ? null : tmp_63_0.value == null ? null : tmp_63_0.value.length) || 0, "/30 ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.assignTo"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("tasks.form.selectMembers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.users);
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
      \u0275\u0275textInterpolate1(" ", ((tmp_91_0 = ctx.editTaskForm.get("title")) == null ? null : tmp_91_0.value == null ? null : tmp_91_0.value.length) || 0, "/30 ");
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
      \u0275\u0275property("ngForOf", ctx.directEmployees);
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
      \u0275\u0275property("ngForOf", ctx.directEmployees);
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
/*# sourceMappingURL=tasks.component-2JZ2BBZF.css.map */`] });
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
                  <option *ngFor="let user of users" [value]="user.id">{{ user.name}}</option>\r
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
                <option *ngFor="let employee of directEmployees" [value]="employee.id">{{ employee.name}}</option>\r
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
                <option *ngFor="let employee of directEmployees" [value]="employee.id">{{ employee.name}}</option>\r
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
/*# sourceMappingURL=tasks.component-2JZ2BBZF.css.map */
`] }]
  }], () => [{ type: TasksService }, { type: UsersService }, { type: TranslationService }, { type: LangService }, { type: AuthService }, { type: FormBuilder }, { type: ChangeDetectorRef }], { confirmationModal: [{
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
    \u0275\u0275elementStart(4, "div", 40)(5, "small", 41)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 41)(10, "strong");
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
function MyTasksComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function MyTasksComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function MyTasksComponent_div_23_Template_div_click_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r6));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "h6", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "small", 41)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 41)(11, "strong");
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
function MyTasksComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
}
function MyTasksComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function MyTasksComponent_div_31_Template_div_click_0_listener() {
      const task_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openTaskDetailsModal(task_r8));
    });
    \u0275\u0275elementStart(1, "div", 38)(2, "h6", 39);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "small", 41)(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 41)(11, "strong");
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
function MyTasksComponent_div_32_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 47)(1, "a", 48);
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
    \u0275\u0275elementStart(0, "div", 44)(1, "nav", 45)(2, "ul", 46)(3, "li", 47)(4, "a", 48);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_Template_a_click_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage - 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, MyTasksComponent_div_32_li_7_Template, 3, 3, "li", 49);
    \u0275\u0275elementStart(8, "li", 47)(9, "a", 48);
    \u0275\u0275listener("click", function MyTasksComponent_div_32_Template_a_click_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.goToPage(ctx_r3.currentPage + 1);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 50)(13, "span", 51);
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
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MyTasksComponent_div_40_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
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
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75);
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
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 55)(2, "div", 56)(3, "h4", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57)(6, "div", 58)(7, "div", 59);
    \u0275\u0275element(8, "i", 60);
    \u0275\u0275elementStart(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 59);
    \u0275\u0275element(14, "i", 62);
    \u0275\u0275elementStart(15, "span", 51);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 63);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 58)(20, "div", 59);
    \u0275\u0275element(21, "i", 64);
    \u0275\u0275elementStart(22, "span", 51);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 61);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 59);
    \u0275\u0275element(27, "i", 65);
    \u0275\u0275elementStart(28, "span", 51);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 61);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 66)(33, "h6");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 67);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 66)(38, "h6");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, MyTasksComponent_div_40_div_40_Template, 2, 1, "div", 68)(41, MyTasksComponent_div_40_div_41_Template, 6, 3, "div", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 70)(43, "div", 71)(44, "button", 72);
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
    \u0275\u0275textInterpolate1(" ", ctx_r3.translate("tasks.myTasks.form.feedbackMinLength"), " ");
  }
}
function MyTasksComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275template(1, MyTasksComponent_div_57_div_1_Template, 2, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r3.feedbackForm.get("feedbackText")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function MyTasksComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 78);
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
  }, standalone: false, decls: 66, vars: 41, consts: [["confirmationModal", ""], [1, "container-fluid", "py-4", 3, "dir"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4", "top-header"], [1, "text-end"], [1, "page-title", "mb-1"], [1, "subtle"], [1, "kanban"], [1, "kanban-col"], [1, "col-head", "blue"], [1, "task-count"], ["class", "task-count-detail", 4, "ngIf"], [1, "task-list"], ["class", "task-card status-new compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "orange"], ["class", "task-card status-progress compact", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-head", "purple"], ["class", "task-card status-returned compact", 3, "click", 4, "ngFor", "ngForOf"], ["class", "pagination-container", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-dialog"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["rows", "4", "formControlName", "feedbackText", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "task-count-detail"], [1, "task-card", "status-new", "compact", 3, "click"], [1, "task-content"], [1, "task-title", "mb-2"], [1, "task-dates"], [1, "text-muted", "d-block"], [1, "task-card", "status-progress", "compact", 3, "click"], [1, "task-card", "status-returned", "compact", 3, "click"], [1, "pagination-container"], ["aria-label", "Task pagination"], [1, "pagination", "justify-content-center"], [1, "page-item"], ["href", "#", 1, "page-link", 3, "click"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "pagination-info", "text-center", "mt-3"], [1, "text-muted"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row"], [1, "col-md-8"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user", "me-2", "text-muted"], [1, "ms-2"], [1, "fas", "fa-clock", "me-2", "text-muted"], [1, "ms-2", "badge"], [1, "fas", "fa-calendar", "me-2", "text-muted"], [1, "fas", "fa-users", "me-2", "text-muted"], [1, "mb-4"], [1, "bg-light", "p-3", "rounded"], ["class", "bg-light p-3 rounded", 4, "ngIf"], ["class", "d-flex align-items-start p-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "d-flex", "align-items-start", "p-2", "border-bottom"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "invalid-feedback"], [4, "ngIf"], [1, "modal-backdrop", "fade"]], template: function MyTasksComponent_Template(rf, ctx) {
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
      \u0275\u0275template(15, MyTasksComponent_div_15_Template, 13, 5, "div", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "div", 13);
      \u0275\u0275text(18);
      \u0275\u0275elementStart(19, "span", 9);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, MyTasksComponent_div_21_Template, 1, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11);
      \u0275\u0275template(23, MyTasksComponent_div_23_Template, 14, 10, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementStart(27, "span", 9);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, MyTasksComponent_div_29_Template, 1, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11);
      \u0275\u0275template(31, MyTasksComponent_div_31_Template, 14, 10, "div", 16);
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
      \u0275\u0275template(57, MyTasksComponent_div_57_Template, 2, 1, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 25)(59, "button", 34);
      \u0275\u0275text(60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 26);
      \u0275\u0275listener("click", function MyTasksComponent_Template_button_click_61_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeModal("showFeedbackModal"));
      });
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
  background: #B68A35;
  color: white;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #B68A35;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
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
/*# sourceMappingURL=my-tasks.component-4OZQVYSF.css.map */`] });
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
  background: #B68A35;
  color: white;
}
.btn-primary:hover {
  background: #B68A35;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
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
/*# sourceMappingURL=my-tasks.component-4OZQVYSF.css.map */
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
//# sourceMappingURL=chunk-AVJHTJ4B.js.map
