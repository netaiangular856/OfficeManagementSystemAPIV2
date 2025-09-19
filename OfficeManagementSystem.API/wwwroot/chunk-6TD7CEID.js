import {
  environment
} from "./chunk-HY6UJAEU.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-J5ZZ35GX.js";

// src/app/models/calendar.model.ts
var EventType;
(function(EventType2) {
  EventType2[EventType2["Meeting"] = 0] = "Meeting";
  EventType2[EventType2["Task"] = 1] = "Task";
  EventType2[EventType2["Visit"] = 2] = "Visit";
  EventType2[EventType2["Travel"] = 3] = "Travel";
})(EventType || (EventType = {}));
var EventStatus;
(function(EventStatus2) {
  EventStatus2[EventStatus2["Scheduled"] = 0] = "Scheduled";
  EventStatus2[EventStatus2["InProgress"] = 1] = "InProgress";
  EventStatus2[EventStatus2["Completed"] = 2] = "Completed";
  EventStatus2[EventStatus2["Cancelled"] = 3] = "Cancelled";
  EventStatus2[EventStatus2["Overdue"] = 4] = "Overdue";
})(EventStatus || (EventStatus = {}));

// src/app/services/calendar.service.ts
var CalendarService = class _CalendarService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getUserEvents() {
    return this.http.get(`${this.baseUrl}/Calendar/user/events`);
  }
  getSystemEvents(type, status, search) {
    let params = new HttpParams();
    if (type !== void 0) {
      params = params.set("type", type.toString());
    }
    if (status !== void 0) {
      params = params.set("status", status.toString());
    }
    if (search) {
      params = params.set("search", search);
    }
    return this.http.get(`${this.baseUrl}/Calendar/system/events`, {
      params
    });
  }
  getEventTypeLabel(type) {
    switch (type) {
      case EventType.Meeting:
        return "calendar.event_types.meeting";
      case EventType.Task:
        return "calendar.event_types.task";
      case EventType.Visit:
        return "calendar.event_types.visit";
      case EventType.Travel:
        return "calendar.event_types.travel";
      default:
        return "Unknown";
    }
  }
  getEventStatusLabel(status) {
    switch (status) {
      case EventStatus.Scheduled:
        return "calendar.event_statuses.scheduled";
      case EventStatus.InProgress:
        return "calendar.event_statuses.in_progress";
      case EventStatus.Completed:
        return "calendar.event_statuses.completed";
      case EventStatus.Cancelled:
        return "calendar.event_statuses.cancelled";
      case EventStatus.Overdue:
        return "calendar.event_statuses.overdue";
      default:
        return "Unknown";
    }
  }
  getEventStatusColor(status) {
    switch (status) {
      case EventStatus.Scheduled:
        return "#4285F4";
      case EventStatus.InProgress:
        return "#FBBC04";
      case EventStatus.Completed:
        return "#34A853";
      case EventStatus.Cancelled:
        return "#EA4335";
      case EventStatus.Overdue:
        return "#FF6B6B";
      default:
        return "#6C757D";
    }
  }
  getPriorityColor(priority) {
    switch (priority) {
      case 1:
        return "#34A853";
      // High priority - Green
      case 2:
        return "#FBBC04";
      // Medium priority - Yellow
      case 3:
        return "#EA4335";
      // Low priority - Red
      default:
        return "#6C757D";
    }
  }
  getEventTypeColor(type) {
    switch (type) {
      case EventType.Meeting:
        return "#361E12";
      // Meeting - Brown/Gold
      case EventType.Task:
        return "#FBBC04";
      // Task - Golden Yellow
      case EventType.Visit:
        return "#D4AF5F";
      // Visit - Gold
      case EventType.Travel:
        return "#555555";
      // Travel - Light Gold/Beige
      default:
        return "#6C757D";
    }
  }
  static \u0275fac = function CalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  EventType,
  EventStatus,
  CalendarService
};
//# sourceMappingURL=chunk-6TD7CEID.js.map
