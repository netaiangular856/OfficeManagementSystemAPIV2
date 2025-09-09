import {
  SharedModule
} from "./chunk-NGX3ER46.js";
import "./chunk-ROWEGEGF.js";
import "./chunk-UUDIADNF.js";
import {
  ConfirmationModalComponent
} from "./chunk-P4Q5J7RB.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-IHVPCVXT.js";
import "./chunk-KSXFQXVU.js";
import "./chunk-A4IG6PG4.js";
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
} from "./chunk-TBUK7V5T.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  HttpParams,
  Injectable,
  Input,
  LangService,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  TranslationService,
  catchError,
  computed,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-MGTM5SLA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EVSPGG2W.js";

// src/app/models/meeting.model.ts
var DocumentSource;
(function(DocumentSource2) {
  DocumentSource2[DocumentSource2["Incoming"] = 0] = "Incoming";
  DocumentSource2[DocumentSource2["Outgoing"] = 1] = "Outgoing";
  DocumentSource2[DocumentSource2["Internal"] = 2] = "Internal";
})(DocumentSource || (DocumentSource = {}));
var MeetingStatus;
(function(MeetingStatus2) {
  MeetingStatus2[MeetingStatus2["Scheduled"] = 0] = "Scheduled";
  MeetingStatus2[MeetingStatus2["InProgress"] = 1] = "InProgress";
  MeetingStatus2[MeetingStatus2["Done"] = 2] = "Done";
  MeetingStatus2[MeetingStatus2["Cancelled"] = 3] = "Cancelled";
})(MeetingStatus || (MeetingStatus = {}));
var MeetingType;
(function(MeetingType2) {
  MeetingType2[MeetingType2["Internal"] = 0] = "Internal";
  MeetingType2[MeetingType2["External"] = 1] = "External";
  MeetingType2[MeetingType2["Other"] = 2] = "Other";
})(MeetingType || (MeetingType = {}));
var MeetingLocationMode;
(function(MeetingLocationMode2) {
  MeetingLocationMode2[MeetingLocationMode2["InPerson"] = 0] = "InPerson";
  MeetingLocationMode2[MeetingLocationMode2["Online"] = 1] = "Online";
  MeetingLocationMode2[MeetingLocationMode2["Hybrid"] = 2] = "Hybrid";
})(MeetingLocationMode || (MeetingLocationMode = {}));
var AttendeeKind;
(function(AttendeeKind2) {
  AttendeeKind2[AttendeeKind2["Internal"] = 0] = "Internal";
  AttendeeKind2[AttendeeKind2["External"] = 1] = "External";
})(AttendeeKind || (AttendeeKind = {}));
var RSVP;
(function(RSVP2) {
  RSVP2[RSVP2["Invited"] = 0] = "Invited";
  RSVP2[RSVP2["Accepted"] = 1] = "Accepted";
  RSVP2[RSVP2["Declined"] = 2] = "Declined";
  RSVP2[RSVP2["Attended"] = 3] = "Attended";
  RSVP2[RSVP2["Absent"] = 4] = "Absent";
})(RSVP || (RSVP = {}));
var PlaceType;
(function(PlaceType2) {
  PlaceType2[PlaceType2["InternalRoom"] = 0] = "InternalRoom";
  PlaceType2[PlaceType2["ExternalVenue"] = 1] = "ExternalVenue";
  PlaceType2[PlaceType2["Other"] = 2] = "Other";
})(PlaceType || (PlaceType = {}));
var AttendeeRole;
(function(AttendeeRole2) {
  AttendeeRole2[AttendeeRole2["Required"] = 0] = "Required";
  AttendeeRole2[AttendeeRole2["Optional"] = 1] = "Optional";
  AttendeeRole2[AttendeeRole2["Speaker"] = 2] = "Speaker";
})(AttendeeRole || (AttendeeRole = {}));
var AttendanceStatus;
(function(AttendanceStatus2) {
  AttendanceStatus2[AttendanceStatus2["Invited"] = 0] = "Invited";
  AttendanceStatus2[AttendanceStatus2["Accepted"] = 1] = "Accepted";
  AttendanceStatus2[AttendanceStatus2["Declined"] = 2] = "Declined";
  AttendanceStatus2[AttendanceStatus2["Attended"] = 3] = "Attended";
  AttendanceStatus2[AttendanceStatus2["Absent"] = 4] = "Absent";
})(AttendanceStatus || (AttendanceStatus = {}));

// src/app/services/meetings.service.ts
var MeetingsService = class _MeetingsService {
  http;
  baseUrl = environment.apiBaseUrl;
  constructor(http) {
    this.http = http;
  }
  getMeetings(search, status, from, to, pageNumber = 1, pageSize = 10) {
    let params = new HttpParams().set("PageNumber", pageNumber.toString()).set("PageSize", pageSize.toString());
    if (search) {
      params = params.set("Search", search);
    }
    if (status !== void 0) {
      params = params.set("Status", status.toString());
    }
    if (from) {
      params = params.set("From", from);
    }
    if (to) {
      params = params.set("To", to);
    }
    return this.http.get(`${this.baseUrl}/Meetings`, {
      params
    });
  }
  getMeetingById(id) {
    return this.http.get(`${this.baseUrl}/Meetings/${id}`);
  }
  createMeeting(meeting) {
    console.log("Service - Meeting data:", meeting);
    return this.http.post(`${this.baseUrl}/Meetings`, meeting);
  }
  updateMeeting(id, meeting) {
    return this.http.put(`${this.baseUrl}/Meetings/${id}`, meeting);
  }
  deleteMeeting(id) {
    return this.http.delete(`${this.baseUrl}/Meetings/${id}`);
  }
  updateMeetingStatus(id, statusUpdate) {
    const requestBody = {
      status: statusUpdate.status
    };
    console.log("Update Meeting Status Request Body:", requestBody);
    console.log("Status value type:", typeof statusUpdate.status);
    return this.http.patch(`${this.baseUrl}/Meetings/${id}/status`, requestBody);
  }
  // Get user names for attendees
  getUserNames(search) {
    let url = `${this.baseUrl}/Users/names`;
    if (search) {
      url += `?search=${encodeURIComponent(search)}`;
    }
    return this.http.get(url);
  }
  // Add attendee to meeting
  addAttendee(meetingId, attendee) {
    return this.http.post(`${this.baseUrl}/Meetings/${meetingId}/attendees`, attendee);
  }
  // Update attendee
  updateAttendee(meetingId, attendeeId, attendee) {
    return this.http.put(`${this.baseUrl}/Meetings/${meetingId}/attendees/${attendeeId}`, attendee);
  }
  // Delete attendee
  deleteAttendee(meetingId, attendeeId) {
    return this.http.delete(`${this.baseUrl}/Meetings/${meetingId}/attendees/${attendeeId}`);
  }
  // Add recommendation to meeting
  addRecommendation(meetingId, recommendation) {
    return this.http.post(`${this.baseUrl}/Meetings/${meetingId}/recommendations`, recommendation);
  }
  // Update recommendation
  updateRecommendation(recommendationId, recommendation) {
    return this.http.put(`${this.baseUrl}/Meetings/recommendations/${recommendationId}`, recommendation);
  }
  // Delete recommendation
  deleteRecommendation(recommendationId) {
    return this.http.delete(`${this.baseUrl}/Meetings/recommendations/${recommendationId}`);
  }
  // Add attachment to meeting
  addAttachment(meetingId, attachment) {
    const formData = new FormData();
    formData.append("File", attachment.file);
    formData.append("Description", attachment.description);
    formData.append("DocumentSource", attachment.documentSource.toString());
    console.log("Service - Attachment data:", attachment);
    console.log("Service - FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    console.log("Service - Meeting ID:", meetingId);
    console.log("Service - DocumentSource type:", typeof attachment.documentSource);
    console.log("Service - DocumentSource value:", attachment.documentSource);
    return this.http.post(`${this.baseUrl}/Meetings/${meetingId}/attachments`, formData);
  }
  // Delete attachment
  deleteAttachment(meetingId, attachmentId) {
    return this.http.delete(`${this.baseUrl}/Meetings/${meetingId}/attachments/${attachmentId}`);
  }
  // Add minutes to meeting
  addMinutes(meetingId, minutes) {
    return this.http.post(`${this.baseUrl}/Meetings/${meetingId}/minutes`, minutes);
  }
  // Update minutes
  updateMinutes(meetingId, minutes) {
    return this.http.put(`${this.baseUrl}/Meetings/${meetingId}/minutes`, minutes);
  }
  // Update attendee status
  updateAttendeeStatus(meetingId, attendeeId, statusUpdate) {
    return this.http.patch(`${this.baseUrl}/Meetings/${meetingId}/attendees/${attendeeId}/status`, statusUpdate);
  }
  static \u0275fac = function MeetingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MeetingsService, factory: _MeetingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/meetings/update-status-modal/update-status-modal.component.ts
function UpdateStatusModalComponent_div_0_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", status_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate(status_r3.label), " ");
  }
}
function UpdateStatusModalComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("status"), " ");
  }
}
function UpdateStatusModalComponent_div_0_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 23);
  }
}
function UpdateStatusModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function UpdateStatusModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function UpdateStatusModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function UpdateStatusModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 6);
    \u0275\u0275element(7, "line", 7)(8, "line", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "form", 9);
    \u0275\u0275listener("ngSubmit", function UpdateStatusModalComponent_div_0_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(10, "div", 10)(11, "label", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "label", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 13)(19, "option", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, UpdateStatusModalComponent_div_0_option_21_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, UpdateStatusModalComponent_div_0_div_22_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 17)(24, "button", 18);
    \u0275\u0275listener("click", function UpdateStatusModalComponent_div_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 19);
    \u0275\u0275template(27, UpdateStatusModalComponent_div_0_span_27_Template, 1, 0, "span", 20);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl", ctx_r1.isRTL);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("meetings.update_status"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.statusForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("meetings.meeting_title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.meeting == null ? null : ctx_r1.meeting.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("meetings.statuses"), " *");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.translate("meetings.select_status"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.meetingStatuses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("status"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("meetings.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.statusForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? ctx_r1.translate("common.updating") : ctx_r1.translate("meetings.update"), " ");
  }
}
var UpdateStatusModalComponent = class _UpdateStatusModalComponent {
  fb;
  meetingsService;
  translationService;
  langService;
  meeting = null;
  isVisible = false;
  statusUpdated = new EventEmitter();
  modalClosed = new EventEmitter();
  statusForm;
  loading = false;
  currentLang = "en";
  isRTL = false;
  meetingStatuses = [
    { value: MeetingStatus.Scheduled, label: "meetings.status.scheduled" },
    { value: MeetingStatus.InProgress, label: "meetings.status.in_progress" },
    { value: MeetingStatus.Done, label: "meetings.status.done" },
    { value: MeetingStatus.Cancelled, label: "meetings.status.cancelled" }
  ];
  constructor(fb, meetingsService, translationService, langService) {
    this.fb = fb;
    this.meetingsService = meetingsService;
    this.translationService = translationService;
    this.langService = langService;
    this.statusForm = this.fb.group({
      status: ["", Validators.required]
    });
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang = lang;
      this.isRTL = lang === "ar";
    });
  }
  ngOnChanges() {
    if (this.meeting && this.isVisible) {
      this.statusForm.patchValue({
        status: this.meeting.status
      });
    }
  }
  onSubmit() {
    if (this.statusForm.valid && this.meeting) {
      this.loading = true;
      const newStatus = Number(this.statusForm.value.status);
      this.meetingsService.updateMeetingStatus(this.meeting.id, { status: newStatus }).subscribe({
        next: (response) => {
          if (response.success) {
            const updatedMeeting = __spreadProps(__spreadValues({}, this.meeting), { status: newStatus });
            this.statusUpdated.emit(updatedMeeting);
            this.closeModal();
          }
          this.loading = false;
        },
        error: (error) => {
          console.error("Error updating meeting status:", error);
          this.loading = false;
        }
      });
    }
  }
  closeModal() {
    this.modalClosed.emit();
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getFieldError(fieldName) {
    const field = this.statusForm.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.["required"]) {
        return this.translate("common.field_required");
      }
    }
    return "";
  }
  static \u0275fac = function UpdateStatusModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdateStatusModalComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MeetingsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdateStatusModalComponent, selectors: [["app-update-status-modal"]], inputs: { meeting: "meeting", isVisible: "isVisible" }, outputs: { statusUpdated: "statusUpdated", modalClosed: "modalClosed" }, standalone: false, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], [1, "meeting-title-display"], ["formControlName", "status", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-update", 3, "disabled"], ["class", "loading-spinner", 4, "ngIf"], [3, "value"], [1, "error-message"], [1, "loading-spinner"]], template: function UpdateStatusModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, UpdateStatusModalComponent_div_0_Template, 29, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.meeting-title-display[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-select.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn-update[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn-update[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl[_ngcontent-%COMP%]   .modal-actions[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=update-status-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdateStatusModalComponent, [{
    type: Component,
    args: [{ selector: "app-update-status-modal", standalone: false, template: `<div class="modal-overlay" *ngIf="isVisible" (click)="closeModal()">\r
  <div\r
    class="modal-content"\r
    [class.rtl]="isRTL"\r
    (click)="$event.stopPropagation()"\r
  >\r
    <!-- Header -->\r
    <div class="modal-header">\r
      <h2 class="modal-title">{{ translate("meetings.update_status") }}</h2>\r
      <button class="close-btn" (click)="closeModal()">\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <!-- Form -->\r
    <form [formGroup]="statusForm" (ngSubmit)="onSubmit()" class="modal-form">\r
      <div class="form-group">\r
        <label class="form-label">{{\r
          translate("meetings.meeting_title")\r
        }}</label>\r
        <div class="meeting-title-display">{{ meeting?.title }}</div>\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="form-label">{{ translate("meetings.statuses") }} *</label>\r
        <select formControlName="status" class="form-select">\r
          <option value="">{{ translate("meetings.select_status") }}</option>\r
          <option *ngFor="let status of meetingStatuses" [value]="status.value">\r
            {{ translate(status.label) }}\r
          </option>\r
        </select>\r
        <div *ngIf="getFieldError('status')" class="error-message">\r
          {{ getFieldError("status") }}\r
        </div>\r
      </div>\r
\r
      <!-- Action Buttons -->\r
      <div class="modal-actions">\r
        <button type="button" class="btn btn-cancel" (click)="closeModal()">\r
          {{ translate("meetings.cancel") }}\r
        </button>\r
        <button\r
          type="submit"\r
          class="btn btn-update"\r
          [disabled]="loading || statusForm.invalid"\r
        >\r
          <span *ngIf="loading" class="loading-spinner"></span>\r
          {{\r
            loading\r
              ? translate("common.updating")\r
              : translate("meetings.update")\r
          }}\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/meetings/update-status-modal/update-status-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-form {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-label {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.meeting-title-display {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-select.invalid {\n  border-color: #dc2626;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-cancel:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.btn-update {\n  background: #3b82f6;\n  color: white;\n}\n.btn-update:hover:not(:disabled) {\n  background: #2563eb;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-content.rtl .modal-header {\n  flex-direction: row-reverse;\n}\n.modal-content.rtl .modal-actions {\n  flex-direction: row-reverse;\n}\n@media (max-width: 640px) {\n  .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=update-status-modal.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MeetingsService }, { type: TranslationService }, { type: LangService }], { meeting: [{
    type: Input
  }], isVisible: [{
    type: Input
  }], statusUpdated: [{
    type: Output
  }], modalClosed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdateStatusModalComponent, { className: "UpdateStatusModalComponent", filePath: "src/app/components/meetings/update-status-modal/update-status-modal.component.ts", lineNumber: 20 });
})();

// src/app/components/meetings/meetings-list/meetings-list.component.ts
var _c0 = (a0) => ["details", a0];
function MeetingsListComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "div", 51);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function MeetingsListComponent_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "h3", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 58)(7, "div", 59)(8, "div", 60)(9, "span", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 60)(14, "span", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "span", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 60)(24, "span", 61);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 60)(29, "span", 61);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 62);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 63)(34, "button", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 39);
    \u0275\u0275element(36, "path", 65)(37, "circle", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "button", 67);
    \u0275\u0275listener("click", function MeetingsListComponent_div_62_div_1_Template_button_click_39_listener() {
      const meeting_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openStatusModal(meeting_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 39);
    \u0275\u0275element(41, "path", 68)(42, "circle", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "button", 70);
    \u0275\u0275listener("click", function MeetingsListComponent_div_62_div_1_Template_button_click_44_listener() {
      const meeting_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDeleteModal(meeting_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 39);
    \u0275\u0275element(46, "polyline", 71)(47, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const meeting_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rtl", ctx_r0.isRTL());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(meeting_r3.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getMeetingStatusClass(meeting_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingStatusText(meeting_r3.status), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.agenda"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meeting_r3.agenda);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.types"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMeetingTypeText(meeting_r3.type));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.locations"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getLocationModeText(meeting_r3.locationMode));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.start_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(meeting_r3.startAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.end_time"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(meeting_r3.endAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, meeting_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.view_details"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.update_status"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete"), " ");
  }
}
function MeetingsListComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, MeetingsListComponent_div_62_div_1_Template, 49, 22, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.meetings());
  }
}
function MeetingsListComponent_div_63_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 76);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 77)(17, "button", 64);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 78);
    \u0275\u0275element(19, "path", 65)(20, "circle", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 79);
    \u0275\u0275listener("click", function MeetingsListComponent_div_63_tr_21_Template_button_click_21_listener() {
      const meeting_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openStatusModal(meeting_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 78);
    \u0275\u0275element(23, "path", 80)(24, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 70);
    \u0275\u0275listener("click", function MeetingsListComponent_div_63_tr_21_Template_button_click_25_listener() {
      const meeting_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDeleteModal(meeting_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 78);
    \u0275\u0275element(27, "polyline", 71)(28, "path", 72);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const meeting_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meeting_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(meeting_r5.agenda);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getMeetingTypeText(meeting_r5.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getLocationModeText(meeting_r5.locationMode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(meeting_r5.startAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(meeting_r5.endAt));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getMeetingStatusClass(meeting_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingStatusText(meeting_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, meeting_r5.id));
  }
}
function MeetingsListComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "table", 74)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, MeetingsListComponent_div_63_tr_21_Template, 29, 12, "tr", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.agenda"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.types"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.locations"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.start_time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.end_time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.statuses"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.meetings());
  }
}
function MeetingsListComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 83);
    \u0275\u0275element(2, "rect", 84)(3, "line", 85)(4, "line", 86)(5, "line", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 3);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_meetings"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_meetings_description"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.add_first_meeting"), " ");
  }
}
function MeetingsListComponent_div_65_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function MeetingsListComponent_div_65_button_26_Template_button_click_0_listener() {
      const page_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageChange(page_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r8 === ctx_r0.currentPage());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r8, " ");
  }
}
function MeetingsListComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 91);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 92)(13, "select", 93);
    \u0275\u0275listener("change", function MeetingsListComponent_div_65_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(14, "option", 94);
    \u0275\u0275text(15, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 95);
    \u0275\u0275text(17, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 96);
    \u0275\u0275text(19, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 97);
    \u0275\u0275text(21, "50");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 98)(23, "button", 99);
    \u0275\u0275listener("click", function MeetingsListComponent_div_65_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage() - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 39);
    \u0275\u0275element(25, "polyline", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, MeetingsListComponent_div_65_button_26_Template, 2, 3, "button", 101);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 99);
    \u0275\u0275listener("click", function MeetingsListComponent_div_65_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange(ctx_r0.currentPage() + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 39);
    \u0275\u0275element(29, "polyline", 102);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.showing"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", (ctx_r0.currentPage() - 1) * ctx_r0.pageSize() + 1, " - ", ctx_r0.Math.min(ctx_r0.currentPage() * ctx_r0.pageSize(), ctx_r0.totalCount()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.of"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.totalCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.results"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.pageSize());
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r0.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.getPageNumbers());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.currentPage() === ctx_r0.totalPages());
  }
}
function MeetingsListComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 106);
    \u0275\u0275element(3, "path", 107)(4, "polyline", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 109);
    \u0275\u0275listener("click", function MeetingsListComponent_div_67_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeSuccessModal());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.successMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.close"), " ");
  }
}
var MeetingsListComponent = class _MeetingsListComponent {
  meetingsService;
  translationService;
  langService;
  meetings = signal([], ...ngDevMode ? [{ debugName: "meetings" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  viewMode = signal("cards", ...ngDevMode ? [{ debugName: "viewMode" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  // Math property for template
  Math = Math;
  // Pagination state
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  pageSize = signal(10, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
  totalCount = signal(0, ...ngDevMode ? [{ debugName: "totalCount" }] : []);
  totalPages = signal(0, ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  // Search and filter state
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  statusFilter = signal(void 0, ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  fromDate = signal("", ...ngDevMode ? [{ debugName: "fromDate" }] : []);
  toDate = signal("", ...ngDevMode ? [{ debugName: "toDate" }] : []);
  // Modal state
  showDeleteModal = signal(false, ...ngDevMode ? [{ debugName: "showDeleteModal" }] : []);
  meetingToDelete = signal(null, ...ngDevMode ? [{ debugName: "meetingToDelete" }] : []);
  deleteModalData = signal({
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "delete"
  }, ...ngDevMode ? [{ debugName: "deleteModalData" }] : []);
  // Edit/Status modal state
  showEditModal = signal(false, ...ngDevMode ? [{ debugName: "showEditModal" }] : []);
  showStatusModal = signal(false, ...ngDevMode ? [{ debugName: "showStatusModal" }] : []);
  meetingToEdit = signal(null, ...ngDevMode ? [{ debugName: "meetingToEdit" }] : []);
  meetingToUpdateStatus = signal(null, ...ngDevMode ? [{ debugName: "meetingToUpdateStatus" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  constructor(meetingsService, translationService, langService) {
    this.meetingsService = meetingsService;
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    this.loadMeetings();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTL.set(lang === "ar");
    });
  }
  loadMeetings() {
    this.loading.set(true);
    let fromDateISO = void 0;
    let toDateISO = void 0;
    if (this.fromDate()) {
      fromDateISO = (/* @__PURE__ */ new Date(this.fromDate() + "T00:00:00")).toISOString();
    }
    if (this.toDate()) {
      toDateISO = (/* @__PURE__ */ new Date(this.toDate() + "T23:59:59")).toISOString();
    }
    this.meetingsService.getMeetings(this.searchTerm() || void 0, this.statusFilter(), fromDateISO, toDateISO, this.currentPage(), this.pageSize()).subscribe({
      next: (response) => {
        if (response && response.success) {
          if (response.data && response.data.items) {
            this.meetings.set(response.data.items);
            this.totalCount.set(response.data.totalCount || 0);
            this.totalPages.set(Math.ceil((response.data.totalCount || 0) / this.pageSize()));
          }
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading meetings:", error);
        this.loading.set(false);
      }
    });
  }
  openDeleteModal(meeting) {
    this.meetingToDelete.set(meeting);
    this.deleteModalData.set({
      title: this.translate("meetings.delete_meeting"),
      message: this.translate("meetings.confirm_delete_meeting").replace("%title%", meeting.title),
      confirmText: this.translate("meetings.delete"),
      cancelText: this.translate("meetings.cancel"),
      type: "delete"
    });
    this.showDeleteModal.set(true);
  }
  onDeleteConfirm() {
    const meeting = this.meetingToDelete();
    if (meeting) {
      this.meetingsService.deleteMeeting(meeting.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.meetings.update((meetings) => meetings.filter((m) => m.id !== meeting.id));
            this.showDeleteModal.set(false);
            this.meetingToDelete.set(null);
            this.successMessage.set(this.translate("meetings.deleted_success"));
            this.showSuccessModal.set(true);
            setTimeout(() => {
              this.showSuccessModal.set(false);
            }, 3e3);
          }
        },
        error: (error) => {
          console.error("Error deleting meeting:", error);
          this.showDeleteModal.set(false);
          this.meetingToDelete.set(null);
        }
      });
    }
  }
  onDeleteCancel() {
    this.showDeleteModal.set(false);
    this.meetingToDelete.set(null);
  }
  openEditModal(meeting) {
    this.meetingToEdit.set(meeting);
    this.showEditModal.set(true);
  }
  openStatusModal(meeting) {
    this.meetingToUpdateStatus.set(meeting);
    this.showStatusModal.set(true);
  }
  onEditModalClose() {
    this.showEditModal.set(false);
    this.meetingToEdit.set(null);
  }
  onStatusModalClose() {
    this.showStatusModal.set(false);
    this.meetingToUpdateStatus.set(null);
  }
  onMeetingUpdated(updatedMeeting) {
    this.meetings.update((meetings) => meetings.map((m) => m.id === updatedMeeting.id ? updatedMeeting : m));
    this.showEditModal.set(false);
    this.meetingToEdit.set(null);
    this.successMessage.set(this.translate("meetings.updated_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  onStatusUpdated(updatedMeeting) {
    this.meetings.update((meetings) => meetings.map((m) => m.id === updatedMeeting.id ? updatedMeeting : m));
    this.showStatusModal.set(false);
    this.meetingToUpdateStatus.set(null);
    this.successMessage.set(this.translate("meetings.status_updated_success"));
    this.showSuccessModal.set(true);
    setTimeout(() => {
      this.showSuccessModal.set(false);
    }, 3e3);
  }
  closeSuccessModal() {
    this.showSuccessModal.set(false);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }
  getMeetingStatusText(status) {
    switch (status) {
      case MeetingStatus.Scheduled:
        return this.translate("meetings.status.scheduled");
      case MeetingStatus.InProgress:
        return this.translate("meetings.status.in_progress");
      case MeetingStatus.Done:
        return this.translate("meetings.status.done");
      case MeetingStatus.Cancelled:
        return this.translate("meetings.status.cancelled");
      default:
        return this.translate("meetings.status.unknown");
    }
  }
  getMeetingStatusClass(status) {
    switch (status) {
      case MeetingStatus.Scheduled:
        return "status-scheduled";
      case MeetingStatus.InProgress:
        return "status-in-progress";
      case MeetingStatus.Done:
        return "status-done";
      case MeetingStatus.Cancelled:
        return "status-cancelled";
      default:
        return "status-unknown";
    }
  }
  getMeetingTypeText(type) {
    switch (type) {
      case 0:
        return this.translate("meetings.type.internal");
      case 1:
        return this.translate("meetings.type.external");
      case 2:
        return this.translate("meetings.type.other");
      default:
        return this.translate("meetings.type.unknown");
    }
  }
  getLocationModeText(mode) {
    switch (mode) {
      case 0:
        return this.translate("meetings.location.in_person");
      case 1:
        return this.translate("meetings.location.online");
      case 2:
        return this.translate("meetings.location.hybrid");
      default:
        return this.translate("meetings.location.unknown");
    }
  }
  // Pagination methods
  onPageChange(page) {
    this.currentPage.set(page);
    this.loadMeetings();
  }
  onPageSizeChange(event) {
    const size = +event.target.value;
    this.pageSize.set(size);
    this.currentPage.set(1);
    this.loadMeetings();
  }
  onSearch(event) {
    const search = event.target.value;
    this.searchTerm.set(search);
    this.currentPage.set(1);
    this.loadMeetings();
  }
  onStatusFilterChange(event) {
    const value = event.target.value;
    this.statusFilter.set(value === "" ? void 0 : +value);
    this.currentPage.set(1);
    this.loadMeetings();
  }
  /**
   * Handle date filter changes
   * This method is called when user changes either fromDate or toDate
   * It resets to page 1 and reloads meetings with new date filters
   */
  onDateFilter() {
    this.currentPage.set(1);
    this.loadMeetings();
  }
  clearFilters() {
    this.searchTerm.set("");
    this.statusFilter.set(void 0);
    this.fromDate.set("");
    this.toDate.set("");
    this.currentPage.set(1);
    this.loadMeetings();
  }
  getPageNumbers() {
    const pages = [];
    const totalPages = this.totalPages();
    const currentPage = this.currentPage();
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  static \u0275fac = function MeetingsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingsListComponent)(\u0275\u0275directiveInject(MeetingsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingsListComponent, selectors: [["app-meetings-list"]], standalone: false, decls: 69, vars: 39, consts: [[1, "meetings-page", "rounded-5"], [1, "top-bar"], [1, "top-bar-left"], ["routerLink", "add", 1, "add-meeting-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "plus-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "top-bar-right"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["d", "M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"], [1, "page-title"], [1, "search-filters"], [1, "search-box"], [1, "search-label"], [1, "search-input-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "status-filter"], [1, "status-label"], [1, "status-select", 3, "change", "value"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "date-filters"], [1, "date-input-group"], [1, "date-label"], ["type", "date", 1, "date-input", 3, "ngModelChange", "change", "ngModel"], [1, "clear-filters"], [1, "clear-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "loading-container", 4, "ngIf"], ["class", "cards-container", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [3, "confirm", "cancel", "isVisible", "data"], ["class", "success-modal", 4, "ngIf"], [3, "statusUpdated", "modalClosed", "isVisible", "meeting"], [1, "loading-container"], [1, "loading-spinner"], [1, "cards-container"], ["class", "meeting-card", 3, "rtl", 4, "ngFor", "ngForOf"], [1, "meeting-card"], [1, "card-header"], [1, "meeting-title"], [1, "meeting-status"], [1, "card-content"], [1, "meeting-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "card-actions"], [1, "action-btn", "details-btn", 3, "routerLink"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "action-btn", "status-btn", 3, "click"], ["d", "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"], ["cx", "7", "cy", "7", "r", "1"], [1, "action-btn", "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], [1, "table-container"], [1, "meetings-table"], [4, "ngFor", "ngForOf"], [1, "status-badge"], [1, "actions-cell"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "action-btn", "edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "pagination"], [1, "pagination-info"], [1, "current-range"], [1, "total-count"], [1, "pagination-controls"], [1, "page-size-select", 3, "change", "value"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "page-buttons"], [1, "page-btn", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-btn", 3, "click"], [1, "success-modal"], [1, "success-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-btn", 3, "click"]], template: function MeetingsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "line", 5)(6, "line", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "button", 9);
      \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_10_listener() {
        return ctx.viewMode.set("cards");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 10);
      \u0275\u0275element(12, "rect", 11)(13, "rect", 12)(14, "rect", 13)(15, "rect", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_17_listener() {
        return ctx.viewMode.set("table");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "h1", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "label", 19);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 20)(28, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function MeetingsListComponent_Template_input_input_28_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 22);
      \u0275\u0275element(30, "circle", 23)(31, "path", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "div", 25)(33, "label", 26);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 27);
      \u0275\u0275listener("change", function MeetingsListComponent_Template_select_change_35_listener($event) {
        return ctx.onStatusFilterChange($event);
      });
      \u0275\u0275elementStart(36, "option", 28);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 29);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 30);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "option", 31);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "option", 32);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 33)(47, "div", 34)(48, "label", 35);
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function MeetingsListComponent_Template_input_change_50_listener() {
        return ctx.onDateFilter();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 34)(52, "label", 35);
      \u0275\u0275text(53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function MeetingsListComponent_Template_input_ngModelChange_54_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function MeetingsListComponent_Template_input_change_54_listener() {
        return ctx.onDateFilter();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 37)(56, "button", 38);
      \u0275\u0275listener("click", function MeetingsListComponent_Template_button_click_56_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 39);
      \u0275\u0275element(58, "line", 40)(59, "line", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(60);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(61, MeetingsListComponent_div_61_Template, 4, 1, "div", 42)(62, MeetingsListComponent_div_62_Template, 2, 1, "div", 43)(63, MeetingsListComponent_div_63_Template, 22, 9, "div", 44)(64, MeetingsListComponent_div_64_Template, 12, 3, "div", 45)(65, MeetingsListComponent_div_65_Template, 30, 10, "div", 46);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "app-confirmation-modal", 47);
      \u0275\u0275listener("confirm", function MeetingsListComponent_Template_app_confirmation_modal_confirm_66_listener() {
        return ctx.onDeleteConfirm();
      })("cancel", function MeetingsListComponent_Template_app_confirmation_modal_cancel_66_listener() {
        return ctx.onDeleteCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, MeetingsListComponent_div_67_Template, 9, 2, "div", 48);
      \u0275\u0275elementStart(68, "app-update-status-modal", 49);
      \u0275\u0275listener("statusUpdated", function MeetingsListComponent_Template_app_update_status_modal_statusUpdated_68_listener($event) {
        return ctx.onStatusUpdated($event);
      })("modalClosed", function MeetingsListComponent_Template_app_update_status_modal_modalClosed_68_listener() {
        return ctx.onStatusModalClose();
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("ltr-right", !ctx.isRTL());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.add_meeting"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("ltr-left", !ctx.isRTL());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.viewMode() === "cards");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.view_cards"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.viewMode() === "table");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.view_table"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.search_label"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.translate("common.search"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.translate("meetings.status_filter"));
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.statusFilter() || "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.all_statuses"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.status.scheduled"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.status.in_progress"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.status.done"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.status.cancelled"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.from_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("meetings.to_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.clear_filters"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.viewMode() === "cards");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.viewMode() === "table");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.meetings().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.meetings().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("isVisible", ctx.showDeleteModal())("data", ctx.deleteModalData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessModal());
      \u0275\u0275advance();
      \u0275\u0275property("isVisible", ctx.showStatusModal())("meeting", ctx.meetingToUpdateStatus());
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, ConfirmationModalComponent, UpdateStatusModalComponent], styles: ['\n\n.meetings-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #f8fafc;\n  min-height: 100vh;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.meetings-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.top-bar-left.ltr-right[_ngcontent-%COMP%] {\n  order: 2;\n}\n.top-bar-right.ltr-left[_ngcontent-%COMP%] {\n  order: 1;\n}\n.add-meeting-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-meeting-btn[_ngcontent-%COMP%]:hover {\n  background-color: #072a4a;\n  box-shadow: 0 4px 12px rgba(9, 54, 95, 0.3);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--brand-blue, #09365f);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 1rem;\n  -webkit-text-fill-color: transparent;\n  background:\n    linear-gradient(\n      135deg,\n      #09365f 0%,\n      #1e40af 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.search-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto auto auto;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: end;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.status-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.status-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.date-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.clear-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid var(--brand-blue, #09365f);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cards-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.meeting-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  border: 1px solid #e5e7eb;\n}\n.meeting-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n  line-height: 1.4;\n  flex: 1;\n}\n.meeting-status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.status-scheduled[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.status-done[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #059669;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.status-unknown[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.meeting-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  min-width: 80px;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.875rem;\n  text-align: right;\n  flex: 1;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  gap: 0.75rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.details-btn[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #2563eb;\n}\n.details-btn[_ngcontent-%COMP%]:hover {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.status-btn[_ngcontent-%COMP%] {\n  background-color: #ecfdf5;\n  color: #059669;\n}\n.status-btn[_ngcontent-%COMP%]:hover {\n  background-color: #d1fae5;\n  color: #047857;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #111827;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fee2e2;\n  color: #b91c1c;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n  border: 1px solid #e5e7eb;\n}\n.meetings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.meetings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.meetings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.meetings-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.375rem;\n  border-radius: 0.25rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-size: 0.875rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.current-range[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n.total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background-color: white;\n}\n.page-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border-color: var(--brand-blue, #09365f);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n}\n.success-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #059669;\n  margin-bottom: 1rem;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #072a4a;\n}\n@media (max-width: 1024px) {\n  .search-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .date-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cards-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .meetings-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .cards-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .meetings-table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .meetings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .meetings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=meetings-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsListComponent, [{
    type: Component,
    args: [{ selector: "app-meetings-list", standalone: false, template: `<div class="meetings-page rounded-5" [class.rtl]="isRTL()">
  <!-- Top Bar -->
  <div class="top-bar">
    <!-- LTR: Button on right, view toggle on left -->
    <div class="top-bar-left" [class.ltr-right]="!isRTL()">
      <button class="add-meeting-btn" routerLink="add">
        <svg
          class="plus-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        {{ translate("meetings.add_meeting") }}
      </button>
    </div>
    <div class="top-bar-right" [class.ltr-left]="!isRTL()">
      <div class="view-toggle">
        <button
          class="toggle-btn"
          [class.active]="viewMode() === 'cards'"
          (click)="viewMode.set('cards')"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          {{ translate("meetings.view_cards") }}
        </button>
        <button
          class="toggle-btn"
          [class.active]="viewMode() === 'table'"
          (click)="viewMode.set('table')"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"></path>
          </svg>
          {{ translate("meetings.view_table") }}
        </button>
      </div>
    </div>
  </div>

  <!-- Page Title -->
  <h1 class="page-title">{{ translate("meetings.title") }}</h1>

  <!-- Search and Filters -->
  <div class="search-filters">
    <div class="search-box">
      <label class="search-label">{{
        translate("meetings.search_label")
      }}</label>
      <div class="search-input-container">
        <input
          type="text"
          [placeholder]="translate('common.search')"
          [(ngModel)]="searchTerm"
          (input)="onSearch($event)"
          class="search-input"
        />
        <svg
          class="search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>
    </div>

    <!-- Status Filter -->
    <div class="status-filter">
      <label class="status-label">{{
        translate("meetings.status_filter")
      }}</label>
      <select
        class="status-select"
        [value]="statusFilter() || ''"
        (change)="onStatusFilterChange($event)"
      >
        <option value="">{{ translate("meetings.all_statuses") }}</option>
        <option value="0">{{ translate("meetings.status.scheduled") }}</option>
        <option value="1">
          {{ translate("meetings.status.in_progress") }}
        </option>
        <option value="2">{{ translate("meetings.status.done") }}</option>
        <option value="3">{{ translate("meetings.status.cancelled") }}</option>
      </select>
    </div>

    <!-- Date Range Filter -->
    <div class="date-filters">
      <div class="date-input-group">
        <label class="date-label">{{ translate("meetings.from_date") }}</label>
        <input
          type="date"
          [(ngModel)]="fromDate"
          (change)="onDateFilter()"
          class="date-input"
        />
      </div>
      <div class="date-input-group">
        <label class="date-label">{{ translate("meetings.to_date") }}</label>
        <input
          type="date"
          [(ngModel)]="toDate"
          (change)="onDateFilter()"
          class="date-input"
        />
      </div>
    </div>

    <!-- Clear Filters Button -->
    <div class="clear-filters">
      <button class="clear-btn" (click)="clearFilters()">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        {{ translate("meetings.clear_filters") }}
      </button>
    </div>
  </div>

  <!-- Loading Spinner -->
  <div *ngIf="loading()" class="loading-container">
    <div class="loading-spinner"></div>
    <p>{{ translate("common.loading") }}</p>
  </div>

  <!-- Cards View -->
  <div *ngIf="!loading() && viewMode() === 'cards'" class="cards-container">
    <div
      *ngFor="let meeting of meetings()"
      class="meeting-card"
      [class.rtl]="isRTL()"
    >
      <div class="card-header">
        <h3 class="meeting-title">{{ meeting.title }}</h3>
        <div
          class="meeting-status"
          [class]="getMeetingStatusClass(meeting.status)"
        >
          {{ getMeetingStatusText(meeting.status) }}
        </div>
      </div>

      <div class="card-content">
        <div class="meeting-info">
          <div class="info-row">
            <span class="info-label">{{ translate("meetings.agenda") }}:</span>
            <span class="info-value">{{ meeting.agenda }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">{{ translate("meetings.types") }}:</span>
            <span class="info-value">{{
              getMeetingTypeText(meeting.type)
            }}</span>
          </div>
          <div class="info-row">
            <span class="info-label"
              >{{ translate("meetings.locations") }}:</span
            >
            <span class="info-value">{{
              getLocationModeText(meeting.locationMode)
            }}</span>
          </div>
          <div class="info-row">
            <span class="info-label"
              >{{ translate("meetings.start_time") }}:</span
            >
            <span class="info-value">{{ formatDate(meeting.startAt) }}</span>
          </div>
          <div class="info-row">
            <span class="info-label"
              >{{ translate("meetings.end_time") }}:</span
            >
            <span class="info-value">{{ formatDate(meeting.endAt) }}</span>
          </div>
        </div>
      </div>

      <div class="card-actions">
        <button
          class="action-btn details-btn"
          [routerLink]="['details', meeting.id]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {{ translate("meetings.view_details") }}
        </button>
        <button
          class="action-btn status-btn"
          (click)="openStatusModal(meeting)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
            ></path>
            <circle cx="7" cy="7" r="1"></circle>
          </svg>
          {{ translate("meetings.update_status") }}
        </button>
        <button
          class="action-btn delete-btn"
          (click)="openDeleteModal(meeting)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="3,6 5,6 21,6"></polyline>
            <path
              d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"
            ></path>
          </svg>
          {{ translate("meetings.delete") }}
        </button>
      </div>
    </div>
  </div>

  <!-- Table View -->
  <div *ngIf="!loading() && viewMode() === 'table'" class="table-container">
    <table class="meetings-table">
      <thead>
        <tr>
          <th>{{ translate("meetings.title") }}</th>
          <th>{{ translate("meetings.agenda") }}</th>
          <th>{{ translate("meetings.types") }}</th>
          <th>{{ translate("meetings.locations") }}</th>
          <th>{{ translate("meetings.start_time") }}</th>
          <th>{{ translate("meetings.end_time") }}</th>
          <th>{{ translate("meetings.statuses") }}</th>
          <th>{{ translate("meetings.actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let meeting of meetings()">
          <td>{{ meeting.title }}</td>
          <td>{{ meeting.agenda }}</td>
          <td>{{ getMeetingTypeText(meeting.type) }}</td>
          <td>{{ getLocationModeText(meeting.locationMode) }}</td>
          <td>{{ formatDate(meeting.startAt) }}</td>
          <td>{{ formatDate(meeting.endAt) }}</td>
          <td>
            <span
              class="status-badge"
              [class]="getMeetingStatusClass(meeting.status)"
            >
              {{ getMeetingStatusText(meeting.status) }}
            </span>
          </td>

          <td class="actions-cell">
            <button
              class="action-btn details-btn"
              [routerLink]="['details', meeting.id]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <button
              class="action-btn edit-btn"
              (click)="openStatusModal(meeting)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                ></path>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button
              class="action-btn delete-btn"
              (click)="openDeleteModal(meeting)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="3,6 5,6 21,6"></polyline>
                <path
                  d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"
                ></path>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Empty State -->
  <div *ngIf="!loading() && meetings().length === 0" class="empty-state">
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
    <h3>{{ translate("meetings.no_meetings") }}</h3>
    <p>{{ translate("meetings.no_meetings_description") }}</p>
    <button class="add-meeting-btn" routerLink="add">
      {{ translate("meetings.add_first_meeting") }}
    </button>
  </div>

  <!-- Pagination -->
  <div *ngIf="!loading() && meetings().length > 0" class="pagination">
    <div class="pagination-info">
      <span>{{ translate("common.showing") }}</span>
      <span class="current-range">
        {{ (currentPage() - 1) * pageSize() + 1 }} -
        {{ Math.min(currentPage() * pageSize(), totalCount()) }}
      </span>
      <span>{{ translate("common.of") }}</span>
      <span class="total-count">{{ totalCount() }}</span>
      <span>{{ translate("common.results") }}</span>
    </div>

    <div class="pagination-controls">
      <select
        class="page-size-select"
        [value]="pageSize()"
        (change)="onPageSizeChange($event)"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

      <div class="page-buttons">
        <button
          class="page-btn"
          [disabled]="currentPage() === 1"
          (click)="onPageChange(currentPage() - 1)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        <button
          *ngFor="let page of getPageNumbers()"
          class="page-btn"
          [class.active]="page === currentPage()"
          (click)="onPageChange(page)"
        >
          {{ page }}
        </button>

        <button
          class="page-btn"
          [disabled]="currentPage() === totalPages()"
          (click)="onPageChange(currentPage() + 1)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <app-confirmation-modal
    [isVisible]="showDeleteModal()"
    [data]="deleteModalData()"
    (confirm)="onDeleteConfirm()"
    (cancel)="onDeleteCancel()"
  ></app-confirmation-modal>

  <!-- Success Modal -->
  <div *ngIf="showSuccessModal()" class="success-modal">
    <div class="success-content">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22,4 12,14.01 9,11.01"></polyline>
      </svg>
      <p>{{ successMessage() }}</p>
      <button class="close-btn" (click)="closeSuccessModal()">
        {{ translate("common.close") }}
      </button>
    </div>
  </div>

  <!-- Update Status Modal -->
  <app-update-status-modal
    [isVisible]="showStatusModal()"
    [meeting]="meetingToUpdateStatus()"
    (statusUpdated)="onStatusUpdated($event)"
    (modalClosed)="onStatusModalClose()"
  ></app-update-status-modal>
</div>
`, styles: ['/* src/app/components/meetings/meetings-list/meetings-list.component.css */\n.meetings-page {\n  padding: 2rem;\n  background: #f8fafc;\n  min-height: 100vh;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.meetings-page.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.top-bar-left.ltr-right {\n  order: 2;\n}\n.top-bar-right.ltr-left {\n  order: 1;\n}\n.add-meeting-btn {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-meeting-btn:hover {\n  background-color: #072a4a;\n  box-shadow: 0 4px 12px rgba(9, 54, 95, 0.3);\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active {\n  background-color: white;\n  color: var(--brand-blue, #09365f);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 1rem;\n  -webkit-text-fill-color: transparent;\n  background:\n    linear-gradient(\n      135deg,\n      #09365f 0%,\n      #1e40af 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n}\n.search-filters {\n  display: grid;\n  grid-template-columns: 1fr auto auto auto auto;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: end;\n}\n.search-box {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.search-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.search-input-container {\n  position: relative;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.search-input:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.status-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.status-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.status-select {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.status-select:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.date-filters {\n  display: flex;\n  gap: 1rem;\n}\n.date-input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.date-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.date-input {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.date-input:focus {\n  outline: none;\n  border-color: var(--brand-blue, #09365f);\n  box-shadow: 0 0 0 3px rgba(9, 54, 95, 0.1);\n}\n.clear-filters {\n  display: flex;\n  align-items: end;\n}\n.clear-btn {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.clear-btn:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid var(--brand-blue, #09365f);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.meeting-card {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  border: 1px solid #e5e7eb;\n}\n.meeting-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transform: translateY(-2px);\n}\n.card-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.meeting-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n  line-height: 1.4;\n  flex: 1;\n}\n.meeting-status {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.status-scheduled {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-in-progress {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.status-done {\n  background-color: #d1fae5;\n  color: #059669;\n}\n.status-cancelled {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.status-unknown {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.card-content {\n  padding: 1.5rem;\n}\n.meeting-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.info-label {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  min-width: 80px;\n}\n.info-value {\n  color: #111827;\n  font-size: 0.875rem;\n  text-align: right;\n  flex: 1;\n}\n.card-actions {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  gap: 0.75rem;\n}\n.action-btn {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.details-btn {\n  background-color: #eff6ff;\n  color: #2563eb;\n}\n.details-btn:hover {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n.status-btn {\n  background-color: #ecfdf5;\n  color: #059669;\n}\n.status-btn:hover {\n  background-color: #d1fae5;\n  color: #047857;\n}\n.edit-btn {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n.edit-btn:hover {\n  background-color: #e5e7eb;\n  color: #111827;\n}\n.delete-btn {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.delete-btn:hover {\n  background-color: #fee2e2;\n  color: #b91c1c;\n}\n.table-container {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n  border: 1px solid #e5e7eb;\n}\n.meetings-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.meetings-table th {\n  background-color: #f9fafb;\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.meetings-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.meetings-table tr:hover {\n  background-color: #f9fafb;\n}\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.actions-cell {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions-cell .action-btn {\n  flex: none;\n  padding: 0.375rem;\n  border-radius: 0.25rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.empty-state svg {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-state h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  margin-bottom: 2rem;\n  font-size: 0.875rem;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.current-range {\n  font-weight: 600;\n  color: #374151;\n}\n.total-count {\n  font-weight: 600;\n  color: #374151;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background-color: white;\n}\n.page-buttons {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.page-btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-btn.active {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border-color: var(--brand-blue, #09365f);\n}\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.success-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-content {\n  background: white;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n}\n.success-content svg {\n  color: #059669;\n  margin-bottom: 1rem;\n}\n.success-content p {\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.close-btn {\n  background-color: var(--brand-blue, #09365f);\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.close-btn:hover {\n  background-color: #072a4a;\n}\n@media (max-width: 1024px) {\n  .search-filters {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .date-filters {\n    flex-direction: column;\n  }\n  .cards-container {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .meetings-page {\n    padding: 1rem;\n  }\n  .top-bar {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .view-toggle {\n    justify-content: center;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .cards-container {\n    grid-template-columns: 1fr;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls {\n    justify-content: center;\n  }\n  .meetings-table {\n    font-size: 0.75rem;\n  }\n  .meetings-table th,\n  .meetings-table td {\n    padding: 0.75rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .card-actions {\n    flex-direction: column;\n  }\n  .info-row {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=meetings-list.component.css.map */\n'] }]
  }], () => [{ type: MeetingsService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingsListComponent, { className: "MeetingsListComponent", filePath: "src/app/components/meetings/meetings-list/meetings-list.component.ts", lineNumber: 17 });
})();

// src/app/components/meetings/add-meeting/add-meeting.component.ts
function AddMeetingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function AddMeetingComponent_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSuccess());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 47)(3, "polyline", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.success(), " ");
  }
}
function AddMeetingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function AddMeetingComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "circle", 50)(3, "line", 51)(4, "line", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function AddMeetingComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.min_length"));
  }
}
function AddMeetingComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_18_span_1_Template, 2, 1, "span", 54)(2, AddMeetingComponent_div_18_span_2_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("title")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("title")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function AddMeetingComponent_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.min_length"));
  }
}
function AddMeetingComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_23_span_1_Template, 2, 1, "span", 54)(2, AddMeetingComponent_div_23_span_2_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("agenda")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("agenda")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
function AddMeetingComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_34_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("type")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function AddMeetingComponent_div_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_45_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("locationMode")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function AddMeetingComponent_div_46_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_46_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_46_div_4_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function AddMeetingComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 55);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 56);
    \u0275\u0275template(4, AddMeetingComponent_div_46_div_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("meetings.location_text"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_3_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_3_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("meetings.location_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_5_0.touched));
  }
}
function AddMeetingComponent_div_47_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_47_div_4_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function AddMeetingComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 58);
    \u0275\u0275template(4, AddMeetingComponent_div_47_div_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("meetings.online_url"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_3_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_3_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("meetings.online_url_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_5_0.touched));
  }
}
function AddMeetingComponent_div_52_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_52_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("startAt")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function AddMeetingComponent_div_57_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_57_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("meetings.invalid_end_time"));
  }
}
function AddMeetingComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_57_span_1_Template, 2, 1, "span", 54)(2, AddMeetingComponent_div_57_span_2_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.meetingForm.get("endAt")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("endAt")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["invalidTimeRange"]);
  }
}
function AddMeetingComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "path", 61)(3, "circle", 62)(4, "path", 63)(5, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.attendee"));
  }
}
function AddMeetingComponent_div_69_div_29_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    \u0275\u0275property("value", user_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r8.name, " - ", user_r8.departmentName, " ");
  }
}
function AddMeetingComponent_div_69_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const attendee_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = attendee_r9.get("displayName")) == null ? null : tmp_6_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = attendee_r9.get("department")) == null ? null : tmp_7_0.value);
  }
}
function AddMeetingComponent_div_69_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 12)(2, "label", 75);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 82);
    \u0275\u0275listener("change", function AddMeetingComponent_div_69_div_29_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUserSelect($event, i_r6));
    });
    \u0275\u0275elementStart(5, "option", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AddMeetingComponent_div_69_div_29_option_7_Template, 2, 3, "option", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AddMeetingComponent_div_69_div_29_div_8_Template, 5, 2, "div", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("Add-Meeting.select_user"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_6_0 = attendee_r9.get("userId")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = attendee_r9.get("userId")) == null ? null : tmp_6_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("Add-Meeting.select_user_placeholder"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredUsers());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_9_0 = attendee_r9.get("userId")) == null ? null : tmp_9_0.value);
  }
}
function AddMeetingComponent_div_69_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 74)(2, "div", 12)(3, "label", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "label", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74)(11, "div", 12)(12, "label", 75);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12)(16, "label", 75);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label", 75);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_15_0;
    let tmp_18_0;
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("Add-Meeting.display_name"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_6_0 = attendee_r9.get("displayName")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = attendee_r9.get("displayName")) == null ? null : tmp_6_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.display_name_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.organization"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_9_0 = attendee_r9.get("organization")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = attendee_r9.get("organization")) == null ? null : tmp_9_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.organization_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.job_title"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_12_0 = attendee_r9.get("jobTitle")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = attendee_r9.get("jobTitle")) == null ? null : tmp_12_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.job_title_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("meetings.department"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_15_0 = attendee_r9.get("department")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = attendee_r9.get("department")) == null ? null : tmp_15_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.department_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("meetings.email"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_18_0 = attendee_r9.get("email")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = attendee_r9.get("email")) == null ? null : tmp_18_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.email_placeholder"));
  }
}
function AddMeetingComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "h3", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 69);
    \u0275\u0275listener("click", function AddMeetingComponent_div_69_Template_button_click_4_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeAttendee(i_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 70);
    \u0275\u0275element(6, "polyline", 71)(7, "path", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 73)(10, "div", 74)(11, "div", 12)(12, "label", 75);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 76);
    \u0275\u0275listener("change", function AddMeetingComponent_div_69_Template_select_change_14_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttendeeKindChange($event, i_r6));
    });
    \u0275\u0275elementStart(15, "option", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 12)(20, "label", 75);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 77)(23, "option", 20);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 20);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, AddMeetingComponent_div_69_div_29_Template, 9, 6, "div", 78)(30, AddMeetingComponent_div_69_div_30_Template, 23, 20, "div", 79);
    \u0275\u0275elementStart(31, "div", 12)(32, "label", 75);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.translate("Add-Meeting.attendee"), " ", i_r6 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.meetingCreated());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.delete"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("Add-Meeting.attendee_kind"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.AttendeeKind.Internal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAttendeeKindLabel(ctx_r2.AttendeeKind.Internal), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.AttendeeKind.External);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAttendeeKindLabel(ctx_r2.AttendeeKind.External), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("Add-Meeting.attendee_role"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.AttendeeRole.Required);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAttendeeRoleLabel(ctx_r2.AttendeeRole.Required), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.AttendeeRole.Optional);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAttendeeRoleLabel(ctx_r2.AttendeeRole.Optional), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.AttendeeRole.Speaker);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getAttendeeRoleLabel(ctx_r2.AttendeeRole.Speaker), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showInternalFields()[i_r6]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showExternalFields()[i_r6]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.notes"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.notes_placeholder"));
  }
}
function AddMeetingComponent_div_70_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("login.field_required"));
  }
}
function AddMeetingComponent_div_70_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.attendee"));
  }
}
function AddMeetingComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, AddMeetingComponent_div_70_span_1_Template, 2, 1, "span", 54)(2, AddMeetingComponent_div_70_span_2_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.attendees.errors == null ? null : ctx_r2.attendees.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.attendees.errors == null ? null : ctx_r2.attendees.errors["minlength"]);
  }
}
function AddMeetingComponent__svg_svg_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 95)(1, "circle", 96);
    \u0275\u0275element(2, "animate", 97)(3, "animate", 98);
    \u0275\u0275elementEnd()();
  }
}
function AddMeetingComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.no_recommendations"), " ");
  }
}
function AddMeetingComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r12 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recommendation_r11);
  }
}
function AddMeetingComponent__svg_svg_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 95)(1, "circle", 96);
    \u0275\u0275element(2, "animate", 97)(3, "animate", 98);
    \u0275\u0275elementEnd()();
  }
}
var AddMeetingComponent = class _AddMeetingComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  meetingsService = inject(MeetingsService);
  translationService = inject(TranslationService);
  langService = inject(LangService);
  cdr = inject(ChangeDetectorRef);
  // Signals
  isRTL = signal(false, ...ngDevMode ? [{ debugName: "isRTL" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : []);
  isAddingRecommendation = signal(false, ...ngDevMode ? [{ debugName: "isAddingRecommendation" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal("", ...ngDevMode ? [{ debugName: "success" }] : []);
  meetingCreated = signal(false, ...ngDevMode ? [{ debugName: "meetingCreated" }] : []);
  createdMeetingId = signal(null, ...ngDevMode ? [{ debugName: "createdMeetingId" }] : []);
  filteredUsers = signal([], ...ngDevMode ? [{ debugName: "filteredUsers" }] : []);
  recommendations = signal([], ...ngDevMode ? [{ debugName: "recommendations" }] : []);
  currentLocationMode = signal(MeetingLocationMode.InPerson, ...ngDevMode ? [{ debugName: "currentLocationMode" }] : []);
  // Form
  meetingForm;
  // Enums for template
  MeetingType = MeetingType;
  MeetingLocationMode = MeetingLocationMode;
  AttendeeKind = AttendeeKind;
  AttendeeRole = AttendeeRole;
  // Computed values
  showLocationText = computed(() => {
    const mode = this.currentLocationMode();
    return mode === MeetingLocationMode.InPerson || mode === MeetingLocationMode.Hybrid;
  }, ...ngDevMode ? [{ debugName: "showLocationText" }] : []);
  showOnlineUrl = computed(() => {
    const mode = this.currentLocationMode();
    return mode === MeetingLocationMode.Online || mode === MeetingLocationMode.Hybrid;
  }, ...ngDevMode ? [{ debugName: "showOnlineUrl" }] : []);
  // Signals for attendee kind tracking
  currentAttendeeKinds = signal([], ...ngDevMode ? [{ debugName: "currentAttendeeKinds" }] : []);
  // Computed values for attendee display
  showInternalFields = computed(() => {
    return this.currentAttendeeKinds().map((kind) => kind === AttendeeKind.Internal);
  }, ...ngDevMode ? [{ debugName: "showInternalFields" }] : []);
  showExternalFields = computed(() => {
    return this.currentAttendeeKinds().map((kind) => kind === AttendeeKind.External);
  }, ...ngDevMode ? [{ debugName: "showExternalFields" }] : []);
  ngOnInit() {
    this.isRTL.set(this.langService.isRTL());
    this.initializeForm();
    this.loadAllUsers();
    this.addAttendee();
    this.currentLocationMode.set(MeetingLocationMode.InPerson);
    this.currentAttendeeKinds.set([AttendeeKind.Internal]);
  }
  initializeForm() {
    this.meetingForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      agenda: ["", [Validators.required, Validators.minLength(3)]],
      type: [MeetingType.Internal, Validators.required],
      locationMode: [MeetingLocationMode.InPerson, Validators.required],
      startAt: ["", Validators.required],
      endAt: ["", Validators.required],
      locationText: [""],
      onlineUrl: [""],
      attendees: this.fb.array([], [Validators.required, Validators.minLength(1)])
    });
    setTimeout(() => {
      this.meetingForm.patchValue({
        title: "",
        agenda: "",
        type: MeetingType.Internal,
        locationMode: MeetingLocationMode.InPerson,
        startAt: "",
        endAt: "",
        locationText: ""
      });
    }, 100);
    this.meetingForm.get("locationMode")?.valueChanges.subscribe((mode) => {
      const numericMode = typeof mode === "string" ? parseInt(mode, 10) : mode;
      this.updateLocationValidators(numericMode);
    });
    this.meetingForm.get("startAt")?.valueChanges.subscribe(() => {
      this.validateTimeRange();
    });
    this.meetingForm.get("endAt")?.valueChanges.subscribe(() => {
      this.validateTimeRange();
    });
  }
  updateLocationValidators(mode) {
    this.currentLocationMode.set(mode);
    const locationTextControl = this.meetingForm.get("locationText");
    const onlineUrlControl = this.meetingForm.get("onlineUrl");
    locationTextControl?.clearValidators();
    onlineUrlControl?.clearValidators();
    switch (mode) {
      case MeetingLocationMode.InPerson:
        locationTextControl?.setValidators([Validators.required]);
        onlineUrlControl?.setValue("");
        break;
      case MeetingLocationMode.Online:
        onlineUrlControl?.setValidators([Validators.required]);
        locationTextControl?.setValue("");
        break;
      case MeetingLocationMode.Hybrid:
        locationTextControl?.setValidators([Validators.required]);
        onlineUrlControl?.setValidators([Validators.required]);
        break;
    }
    locationTextControl?.updateValueAndValidity();
    onlineUrlControl?.updateValueAndValidity();
  }
  validateTimeRange() {
    const startAt = this.meetingForm.get("startAt")?.value;
    const endAt = this.meetingForm.get("endAt")?.value;
    if (startAt && endAt) {
      const startDate = new Date(startAt);
      const endDate = new Date(endAt);
      if (endDate <= startDate) {
        this.meetingForm.get("endAt")?.setErrors({ invalidTimeRange: true });
      } else {
        this.meetingForm.get("endAt")?.setErrors(null);
      }
    }
  }
  // Form getters
  get attendees() {
    return this.meetingForm.get("attendees");
  }
  loadAllUsers() {
    this.getAllUsers().subscribe((users) => {
      this.filteredUsers.set(users);
    });
  }
  // Attendee management
  addAttendee() {
    const attendeeGroup = this.fb.group({
      kind: [AttendeeKind.Internal, Validators.required],
      userId: [""],
      displayName: [""],
      organization: [""],
      jobTitle: [""],
      department: [""],
      email: ["", [Validators.email]],
      role: [AttendeeRole.Required, Validators.required],
      notes: [""]
    });
    this.attendees.push(attendeeGroup);
    const index = this.attendees.length - 1;
    this.setupAttendeeValidators(attendeeGroup, index);
    const currentKinds = this.currentAttendeeKinds();
    currentKinds.push(AttendeeKind.Internal);
    this.currentAttendeeKinds.set([...currentKinds]);
  }
  removeAttendee(index) {
    this.attendees.removeAt(index);
    const currentKinds = this.currentAttendeeKinds();
    currentKinds.splice(index, 1);
    this.currentAttendeeKinds.set([...currentKinds]);
  }
  updateAttendeeKind(index, kind) {
    const currentKinds = this.currentAttendeeKinds();
    currentKinds[index] = kind;
    this.currentAttendeeKinds.set([...currentKinds]);
  }
  setupAttendeeValidators(attendeeGroup, index) {
    const kindControl = attendeeGroup.get("kind");
    const userIdControl = attendeeGroup.get("userId");
    const displayNameControl = attendeeGroup.get("displayName");
    const organizationControl = attendeeGroup.get("organization");
    const jobTitleControl = attendeeGroup.get("jobTitle");
    const departmentControl = attendeeGroup.get("department");
    const emailControl = attendeeGroup.get("email");
    const initialKind = kindControl?.value;
    this.updateAttendeeKind(index, initialKind);
    this.setAttendeeValidators(initialKind, userIdControl, displayNameControl, organizationControl, jobTitleControl, departmentControl, emailControl);
    kindControl?.valueChanges.subscribe((kind) => {
      this.updateAttendeeKind(index, kind);
      this.setAttendeeValidators(kind, userIdControl, displayNameControl, organizationControl, jobTitleControl, departmentControl, emailControl);
    });
  }
  setAttendeeValidators(kind, userIdControl, displayNameControl, organizationControl, jobTitleControl, departmentControl, emailControl) {
    if (kind === AttendeeKind.Internal) {
      userIdControl?.setValidators([Validators.required]);
      displayNameControl?.clearValidators();
      organizationControl?.clearValidators();
      jobTitleControl?.clearValidators();
      departmentControl?.clearValidators();
      emailControl?.clearValidators();
    } else {
      userIdControl?.clearValidators();
      displayNameControl?.setValidators([Validators.required]);
      organizationControl?.setValidators([Validators.required]);
      jobTitleControl?.setValidators([Validators.required]);
      departmentControl?.setValidators([Validators.required]);
      emailControl?.setValidators([Validators.required, Validators.email]);
    }
    userIdControl?.updateValueAndValidity();
    displayNameControl?.updateValueAndValidity();
    organizationControl?.updateValueAndValidity();
    jobTitleControl?.updateValueAndValidity();
    departmentControl?.updateValueAndValidity();
    emailControl?.updateValueAndValidity();
  }
  // Get all users for internal attendees dropdown
  getAllUsers() {
    return this.meetingsService.getUserNames("").pipe(catchError(() => of({
      success: false,
      data: [],
      message: "",
      errors: []
    })), switchMap((response) => of(response.success ? response.data : [])));
  }
  onAttendeeKindChange(event, index) {
    const target = event?.target;
    if (!target)
      return;
    const kind = parseInt(target.value, 10);
    this.updateAttendeeKind(index, kind);
  }
  onUserSelect(event, attendeeIndex) {
    const target = event?.target;
    if (!target)
      return;
    const userId = target.value;
    if (!userId)
      return;
    const user = this.filteredUsers().find((u) => u.id === userId);
    if (user) {
      const attendeeGroup = this.attendees.at(attendeeIndex);
      attendeeGroup.patchValue({
        userId: user.id,
        displayName: user.name,
        department: user.departmentName
      });
    }
  }
  // Form submission
  onSubmit() {
    if (this.meetingForm.valid && !this.isSubmitting()) {
      this.isSubmitting.set(true);
      this.error.set("");
      const formValue = this.meetingForm.value;
      const meetingData = {
        Title: formValue.title,
        Agenda: formValue.agenda,
        Type: parseInt(formValue.type, 10),
        LocationMode: parseInt(formValue.locationMode, 10),
        StartAt: new Date(formValue.startAt).toISOString(),
        EndAt: new Date(formValue.endAt).toISOString(),
        LocationText: formValue.locationText || "",
        OnlineUrl: formValue.onlineUrl || "",
        Attendees: this.buildAttendeesArray(formValue.attendees)
      };
      this.meetingsService.createMeeting(meetingData).subscribe({
        next: (response) => {
          if (response.success) {
            this.success.set(response.message);
            this.createdMeetingId.set(response.data.id);
            this.meetingCreated.set(true);
            this.meetingForm.disable();
            console.log("Meeting created successfully with ID:", response.data.id);
            this.sendStoredRecommendationsToAPI(response.data.id);
            setTimeout(() => {
              this.router.navigate(["/meetings"]);
            }, 100);
          } else {
            this.error.set(response.message || "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639");
          }
          this.isSubmitting.set(false);
        },
        error: (err) => {
          this.error.set("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639");
          this.isSubmitting.set(false);
        }
      });
    } else {
      console.log("Form is not valid:", this.meetingForm.errors);
      console.log("Form controls:", this.meetingForm.controls);
    }
  }
  // Send stored recommendations to API
  sendStoredRecommendationsToAPI(meetingId) {
    const storedRecommendations = this.recommendations();
    if (storedRecommendations.length === 0) {
      return;
    }
    storedRecommendations.forEach((recommendationText, index) => {
      setTimeout(() => {
        const recommendation = {
          text: recommendationText
        };
        this.meetingsService.addRecommendation(meetingId, recommendation).subscribe({
          next: (response) => {
            if (response.success) {
              console.log(`Recommendation ${index + 1} sent successfully:`, response.data);
            } else {
              console.error(`Failed to send recommendation ${index + 1}:`, response.message);
            }
          },
          error: (err) => {
            console.error(`Error sending recommendation ${index + 1}:`, err);
          }
        });
      }, index * 500);
    });
  }
  buildAttendeesArray(attendees) {
    return attendees.map((attendee) => {
      const attendeeRequest = {
        Kind: parseInt(attendee.kind, 10),
        Role: parseInt(attendee.role, 10),
        Notes: attendee.notes || ""
      };
      if (parseInt(attendee.kind, 10) === AttendeeKind.Internal) {
        attendeeRequest.UserId = attendee.userId;
        attendeeRequest.DisplayName = attendee.displayName;
        attendeeRequest.Department = attendee.department;
      } else {
        attendeeRequest.DisplayName = attendee.displayName;
        attendeeRequest.Organization = attendee.organization;
        attendeeRequest.JobTitle = attendee.jobTitle;
        attendeeRequest.Department = attendee.department;
        attendeeRequest.Email = attendee.email;
      }
      console.log("Built attendee:", attendeeRequest);
      return attendeeRequest;
    });
  }
  // Recommendations
  addRecommendation(recommendationText) {
    if (!recommendationText.trim() || this.isAddingRecommendation()) {
      return;
    }
    this.isAddingRecommendation.set(true);
    const recommendation = {
      text: recommendationText.trim()
    };
    if (this.createdMeetingId()) {
      this.meetingsService.addRecommendation(this.createdMeetingId(), recommendation).subscribe({
        next: (response) => {
          if (response.success) {
            this.recommendations.update((recs) => [
              ...recs,
              recommendationText.trim()
            ]);
            this.success.set(response.message);
            console.log("Recommendation added successfully:", response.data);
          } else {
            this.error.set(response.message || "\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0629");
            console.error("Failed to add recommendation:", response.message);
          }
          setTimeout(() => {
            this.isAddingRecommendation.set(false);
          }, 100);
        },
        error: (err) => {
          console.error("Error adding recommendation:", err);
          this.error.set("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0629");
          setTimeout(() => {
            this.isAddingRecommendation.set(false);
          }, 100);
        }
      });
    } else {
      this.recommendations.update((recs) => [
        ...recs,
        recommendationText.trim()
      ]);
      this.success.set("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0629 \u0628\u0646\u062C\u0627\u062D");
      setTimeout(() => {
        this.isAddingRecommendation.set(false);
      }, 100);
    }
    this.cdr.detectChanges();
  }
  // Utility methods
  translate(key) {
    return this.translationService.translate(key);
  }
  clearError() {
    this.error.set("");
  }
  clearSuccess() {
    this.success.set("");
  }
  getAttendeeKindLabel(kind) {
    return kind === AttendeeKind.Internal ? this.translate("meetings.attendee.internal") : this.translate("meetings.attendee.external");
  }
  getAttendeeRoleLabel(role) {
    switch (role) {
      case AttendeeRole.Required:
        return this.translate("meetings.attendee.required");
      case AttendeeRole.Optional:
        return this.translate("meetings.attendee.optional");
      case AttendeeRole.Speaker:
        return this.translate("meetings.attendee.speaker");
      default:
        return "";
    }
  }
  getMeetingTypeLabel(type) {
    switch (type) {
      case MeetingType.Internal:
        return this.translate("meetings.type.internal");
      case MeetingType.External:
        return this.translate("meetings.type.external");
      case MeetingType.Other:
        return this.translate("meetings.type.other");
      default:
        return "";
    }
  }
  getLocationModeLabel(mode) {
    switch (mode) {
      case MeetingLocationMode.InPerson:
        return this.translate("meetings.location.in_person");
      case MeetingLocationMode.Online:
        return this.translate("meetings.location.online");
      case MeetingLocationMode.Hybrid:
        return this.translate("meetings.location.hybrid");
      default:
        return "";
    }
  }
  static \u0275fac = function AddMeetingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddMeetingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddMeetingComponent, selectors: [["app-add-meeting"]], standalone: false, decls: 90, vars: 62, consts: [["recommendationText", ""], [1, "add-meeting-page"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["class", "alert alert-success", 3, "click", 4, "ngIf"], ["class", "alert alert-error", 3, "click", 4, "ngIf"], [1, "meeting-form", 3, "ngSubmit", "formGroup"], [1, "form-sections"], [1, "form-section"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], ["for", "title", 1, "form-label"], ["id", "title", "type", "text", "formControlName", "title", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "agenda", 1, "form-label"], ["id", "agenda", "formControlName", "agenda", "rows", "3", 1, "form-textarea", 3, "placeholder"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-select"], [3, "value"], ["for", "locationMode", 1, "form-label"], ["id", "locationMode", "formControlName", "locationMode", 1, "form-select"], ["class", "form-group", 4, "ngIf"], ["for", "startAt", 1, "form-label"], ["id", "startAt", "type", "datetime-local", "formControlName", "startAt", 1, "form-input"], ["for", "endAt", 1, "form-label"], ["id", "endAt", "type", "datetime-local", "formControlName", "endAt", 1, "form-input"], [1, "section-header"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "empty-state", 4, "ngIf"], ["formArrayName", "attendees", 1, "attendees-list"], ["class", "attendee-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "recommendations-form"], ["for", "recommendationText", 1, "form-label"], ["id", "recommendationText", "rows", "3", 1, "form-textarea", 3, "placeholder"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "btn-spinner", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-success", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "alert-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "alert", "alert-error", 3, "click"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "error-message"], [4, "ngIf"], ["for", "locationText", 1, "form-label"], ["id", "locationText", "type", "text", "formControlName", "locationText", 1, "form-input", 3, "placeholder"], ["for", "onlineUrl", 1, "form-label"], ["id", "onlineUrl", "type", "url", "formControlName", "onlineUrl", 1, "form-input", 3, "placeholder"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "empty-icon"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "empty-text"], [1, "attendee-item", 3, "formGroupName"], [1, "attendee-header"], [1, "attendee-title"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], [1, "attendee-form"], [1, "form-row"], [1, "form-label"], ["formControlName", "kind", 1, "form-select", 3, "change"], ["formControlName", "role", 1, "form-select"], ["class", "internal-fields", 4, "ngIf"], ["class", "external-fields", 4, "ngIf"], ["formControlName", "notes", "rows", "2", 1, "form-textarea", 3, "placeholder"], [1, "internal-fields"], [1, "form-select", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "selected-user", 4, "ngIf"], [1, "selected-user"], [1, "selected-user-name"], [1, "selected-user-department"], [1, "external-fields"], ["type", "text", "formControlName", "displayName", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "organization", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "department", 1, "form-input", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "31.416", "stroke-dashoffset", "31.416"], ["attributeName", "stroke-dasharray", "dur", "2s", "values", "0 31.416;15.708 15.708;0 31.416", "repeatCount", "indefinite"], ["attributeName", "stroke-dashoffset", "dur", "2s", "values", "0;-15.708;-31.416", "repeatCount", "indefinite"], [1, "recommendation-item"], [1, "recommendation-number"], [1, "recommendation-text"]], template: function AddMeetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, AddMeetingComponent_div_6_Template, 5, 1, "div", 5)(7, AddMeetingComponent_div_7_Template, 6, 1, "div", 6);
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddMeetingComponent_Template_form_ngSubmit_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "h2", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "label", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 14);
      \u0275\u0275template(18, AddMeetingComponent_div_18_Template, 3, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 12)(20, "label", 16);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "textarea", 17);
      \u0275\u0275template(23, AddMeetingComponent_div_23_Template, 3, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "label", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "select", 19)(28, "option", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option", 20);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 20);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, AddMeetingComponent_div_34_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "label", 21);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 22)(39, "option", 20);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 20);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 20);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(45, AddMeetingComponent_div_45_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, AddMeetingComponent_div_46_Template, 5, 5, "div", 23)(47, AddMeetingComponent_div_47_Template, 5, 5, "div", 23);
      \u0275\u0275elementStart(48, "div", 12)(49, "label", 24);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 25);
      \u0275\u0275template(52, AddMeetingComponent_div_52_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 12)(54, "label", 26);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "input", 27);
      \u0275\u0275template(57, AddMeetingComponent_div_57_Template, 3, 2, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 9)(59, "div", 28)(60, "h2", 10);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 29);
      \u0275\u0275listener("click", function AddMeetingComponent_Template_button_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addAttendee());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 30);
      \u0275\u0275element(64, "line", 31)(65, "line", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(66);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(67, AddMeetingComponent_div_67_Template, 8, 1, "div", 33);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(68, "div", 34);
      \u0275\u0275template(69, AddMeetingComponent_div_69_Template, 35, 21, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, AddMeetingComponent_div_70_Template, 3, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 9)(72, "h2", 10);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 36)(75, "div", 12)(76, "label", 37);
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 38, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "button", 39);
      \u0275\u0275listener("click", function AddMeetingComponent_Template_button_click_80_listener() {
        \u0275\u0275restoreView(_r1);
        const recommendationText_r10 = \u0275\u0275reference(79);
        ctx.addRecommendation(recommendationText_r10.value);
        recommendationText_r10.value = "";
        return \u0275\u0275resetView(recommendationText_r10.focus());
      });
      \u0275\u0275template(81, AddMeetingComponent__svg_svg_81_Template, 4, 0, "svg", 40);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 41);
      \u0275\u0275template(84, AddMeetingComponent_div_84_Template, 3, 1, "div", 33)(85, AddMeetingComponent_div_85_Template, 5, 2, "div", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 43)(87, "button", 44);
      \u0275\u0275template(88, AddMeetingComponent__svg_svg_88_Template, 4, 0, "svg", 40);
      \u0275\u0275text(89);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_10_0;
      let tmp_12_0;
      let tmp_14_0;
      let tmp_16_0;
      let tmp_23_0;
      let tmp_25_0;
      let tmp_32_0;
      let tmp_36_0;
      let tmp_37_0;
      let tmp_39_0;
      let tmp_40_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("meetings.add_meeting"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.create"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.meetingForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.basic_info"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.title_label"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_8_0 = ctx.meetingForm.get("title")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.meetingForm.get("title")) == null ? null : tmp_8_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("meetings.title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_10_0 = ctx.meetingForm.get("title")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.meetingForm.get("title")) == null ? null : tmp_10_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.agenda"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_12_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_12_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("meetings.agenda_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_14_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_14_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.types"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_16_0 = ctx.meetingForm.get("type")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.meetingForm.get("type")) == null ? null : tmp_16_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingType.Internal);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getMeetingTypeLabel(ctx.MeetingType.Internal), " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingType.External);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getMeetingTypeLabel(ctx.MeetingType.External), " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingType.Other);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getMeetingTypeLabel(ctx.MeetingType.Other), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_23_0 = ctx.meetingForm.get("type")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx.meetingForm.get("type")) == null ? null : tmp_23_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.locations"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_25_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_25_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingLocationMode.InPerson);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getLocationModeLabel(ctx.MeetingLocationMode.InPerson), " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingLocationMode.Online);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getLocationModeLabel(ctx.MeetingLocationMode.Online), " ");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.MeetingLocationMode.Hybrid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.getLocationModeLabel(ctx.MeetingLocationMode.Hybrid), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_32_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_32_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLocationText());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOnlineUrl());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.start_time"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_36_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_36_0.invalid) && ((tmp_36_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_36_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_37_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_37_0.invalid) && ((tmp_37_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_37_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.end_time"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_39_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_39_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_40_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_40_0.invalid) && ((tmp_40_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_40_0.touched));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.attendees"));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.meetingCreated());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("Add-Meeting.add_attendee"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.attendees.length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.attendees.controls);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.attendees.invalid && ctx.attendees.touched);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.recommendations"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.add_recommendation"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("meetings.recommendation_placeholder"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isAddingRecommendation());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isAddingRecommendation() ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u0625\u0636\u0627\u0641\u0629", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.recommendations().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.recommendations());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.meetingForm.invalid || ctx.isSubmitting() || ctx.meetingCreated());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? ctx.translate("login.saving") : ctx.translate("login.save"), " ");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName], styles: ["\n\n.add-meeting-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  background: #fff;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.page-description[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.1rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.alert[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #fff;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e5e7eb;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dc2626;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.attendees-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.attendee-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n}\n.attendee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.attendee-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.attendee-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.user-search-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s;\n}\n.user-search-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.user-search-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.user-department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.selected-user[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #dbeafe;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selected-user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e40af;\n}\n.selected-user-department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.post-creation-sections[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.recommendations-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.recommendations-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.recommendations-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  min-width: 120px;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.recommendations-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 2px dashed #d1d5db;\n}\n.recommendations-list[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n  margin: 0;\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border-left: 4px solid #3b82f6;\n}\n.recommendation-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 1.5rem;\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  color: #374151;\n  line-height: 1.5;\n  flex: 1;\n}\n.attachments-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.attachments-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.attachments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.attachment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.attachment-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.attachment-description[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.attachment-source[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.add-meeting-page.rtl[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #3b82f6;\n}\n.add-meeting-page.rtl[_ngcontent-%COMP%]   .user-search-results[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n@media (max-width: 768px) {\n  .add-meeting-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .recommendations-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .attendee-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .attachment-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .attachment-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=add-meeting.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddMeetingComponent, [{
    type: Component,
    args: [{ selector: "app-add-meeting", standalone: false, template: `<div class="add-meeting-page">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <h1 class="page-title">{{ translate("meetings.add_meeting") }}</h1>\r
    <p class="page-description">{{ translate("meetings.create") }}</p>\r
  </div>\r
\r
  <!-- Success/Error Messages -->\r
  <div *ngIf="success()" class="alert alert-success" (click)="clearSuccess()">\r
    <svg\r
      class="alert-icon"\r
      width="20"\r
      height="20"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="2"\r
    >\r
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
      <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
    </svg>\r
    {{ success() }}\r
  </div>\r
\r
  <div *ngIf="error()" class="alert alert-error" (click)="clearError()">\r
    <svg\r
      class="alert-icon"\r
      width="20"\r
      height="20"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="2"\r
    >\r
      <circle cx="12" cy="12" r="10"></circle>\r
      <line x1="15" y1="9" x2="9" y2="15"></line>\r
      <line x1="9" y1="9" x2="15" y2="15"></line>\r
    </svg>\r
    {{ error() }}\r
  </div>\r
\r
  <!-- Meeting Form -->\r
  <form [formGroup]="meetingForm" (ngSubmit)="onSubmit()" class="meeting-form">\r
    <div class="form-sections">\r
      <!-- Basic Information Section -->\r
      <div class="form-section">\r
        <h2 class="section-title">{{ translate("meetings.basic_info") }}</h2>\r
\r
        <div class="form-grid">\r
          <!-- Title -->\r
          <div class="form-group">\r
            <label for="title" class="form-label"\r
              >{{ translate("meetings.title_label") }}\r
            </label>\r
            <input\r
              id="title"\r
              type="text"\r
              formControlName="title"\r
              [placeholder]="translate('meetings.title_placeholder')"\r
              class="form-input"\r
              [class.error]="\r
                meetingForm.get('title')?.invalid &&\r
                meetingForm.get('title')?.touched\r
              "\r
            />\r
            <div\r
              *ngIf="\r
                meetingForm.get('title')?.invalid &&\r
                meetingForm.get('title')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span *ngIf="meetingForm.get('title')?.errors?.['required']">{{\r
                translate("login.field_required")\r
              }}</span>\r
              <span *ngIf="meetingForm.get('title')?.errors?.['minlength']">{{\r
                translate("login.min_length")\r
              }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Agenda -->\r
          <div class="form-group">\r
            <label for="agenda" class="form-label"\r
              >{{ translate("meetings.agenda") }}\r
            </label>\r
            <textarea\r
              id="agenda"\r
              formControlName="agenda"\r
              [placeholder]="translate('meetings.agenda_placeholder')"\r
              class="form-textarea"\r
              rows="3"\r
              [class.error]="\r
                meetingForm.get('agenda')?.invalid &&\r
                meetingForm.get('agenda')?.touched\r
              "\r
            ></textarea>\r
            <div\r
              *ngIf="\r
                meetingForm.get('agenda')?.invalid &&\r
                meetingForm.get('agenda')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span *ngIf="meetingForm.get('agenda')?.errors?.['required']">{{\r
                translate("login.field_required")\r
              }}</span>\r
              <span *ngIf="meetingForm.get('agenda')?.errors?.['minlength']">{{\r
                translate("login.min_length")\r
              }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Meeting Type -->\r
          <div class="form-group">\r
            <label for="type" class="form-label"\r
              >{{ translate("meetings.types") }}\r
            </label>\r
            <select\r
              id="type"\r
              formControlName="type"\r
              class="form-select"\r
              [class.error]="\r
                meetingForm.get('type')?.invalid &&\r
                meetingForm.get('type')?.touched\r
              "\r
            >\r
              <option [value]="MeetingType.Internal">\r
                {{ getMeetingTypeLabel(MeetingType.Internal) }}\r
              </option>\r
              <option [value]="MeetingType.External">\r
                {{ getMeetingTypeLabel(MeetingType.External) }}\r
              </option>\r
              <option [value]="MeetingType.Other">\r
                {{ getMeetingTypeLabel(MeetingType.Other) }}\r
              </option>\r
            </select>\r
            <div\r
              *ngIf="\r
                meetingForm.get('type')?.invalid &&\r
                meetingForm.get('type')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span *ngIf="meetingForm.get('type')?.errors?.['required']">{{\r
                translate("login.field_required")\r
              }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Location Mode -->\r
          <div class="form-group">\r
            <label for="locationMode" class="form-label"\r
              >{{ translate("meetings.locations") }}\r
            </label>\r
\r
            <select\r
              id="locationMode"\r
              formControlName="locationMode"\r
              class="form-select"\r
              [class.error]="\r
                meetingForm.get('locationMode')?.invalid &&\r
                meetingForm.get('locationMode')?.touched\r
              "\r
            >\r
              <option [value]="MeetingLocationMode.InPerson">\r
                {{ getLocationModeLabel(MeetingLocationMode.InPerson) }}\r
              </option>\r
              <option [value]="MeetingLocationMode.Online">\r
                {{ getLocationModeLabel(MeetingLocationMode.Online) }}\r
              </option>\r
              <option [value]="MeetingLocationMode.Hybrid">\r
                {{ getLocationModeLabel(MeetingLocationMode.Hybrid) }}\r
              </option>\r
            </select>\r
            <div\r
              *ngIf="\r
                meetingForm.get('locationMode')?.invalid &&\r
                meetingForm.get('locationMode')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span\r
                *ngIf="meetingForm.get('locationMode')?.errors?.['required']"\r
                >{{ translate("login.field_required") }}</span\r
              >\r
            </div>\r
          </div>\r
\r
          <!-- Location Text (conditional) -->\r
          <div class="form-group" *ngIf="showLocationText()">\r
            <label for="locationText" class="form-label"\r
              >{{ translate("meetings.location_text") }}\r
            </label>\r
            <input\r
              id="locationText"\r
              type="text"\r
              formControlName="locationText"\r
              [placeholder]="translate('meetings.location_placeholder')"\r
              class="form-input"\r
              [class.error]="\r
                meetingForm.get('locationText')?.invalid &&\r
                meetingForm.get('locationText')?.touched\r
              "\r
            />\r
            <div\r
              *ngIf="\r
                meetingForm.get('locationText')?.invalid &&\r
                meetingForm.get('locationText')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span\r
                *ngIf="meetingForm.get('locationText')?.errors?.['required']"\r
                >{{ translate("login.field_required") }}</span\r
              >\r
            </div>\r
          </div>\r
\r
          <!-- Online URL (conditional) -->\r
          <div class="form-group" *ngIf="showOnlineUrl()">\r
            <label for="onlineUrl" class="form-label"\r
              >{{ translate("meetings.online_url") }}\r
            </label>\r
            <input\r
              id="onlineUrl"\r
              type="url"\r
              formControlName="onlineUrl"\r
              [placeholder]="translate('meetings.online_url_placeholder')"\r
              class="form-input"\r
              [class.error]="\r
                meetingForm.get('onlineUrl')?.invalid &&\r
                meetingForm.get('onlineUrl')?.touched\r
              " \r
            />\r
            <div\r
              *ngIf="\r
                meetingForm.get('onlineUrl')?.invalid &&\r
                meetingForm.get('onlineUrl')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span\r
                *ngIf="meetingForm.get('onlineUrl')?.errors?.['required']"\r
                >{{ translate("login.field_required") }}</span\r
              >\r
            </div>\r
          </div>\r
\r
          <!-- Start Time -->\r
          <div class="form-group">\r
            <label for="startAt" class="form-label"\r
              >{{ translate("meetings.start_time") }}\r
            </label>\r
            <input\r
              id="startAt"\r
              type="datetime-local"\r
              formControlName="startAt"\r
              class="form-input"\r
              [class.error]="\r
                meetingForm.get('startAt')?.invalid &&\r
                meetingForm.get('startAt')?.touched\r
              "\r
            />\r
            <div\r
              *ngIf="\r
                meetingForm.get('startAt')?.invalid &&\r
                meetingForm.get('startAt')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span *ngIf="meetingForm.get('startAt')?.errors?.['required']">{{\r
                translate("login.field_required")\r
              }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- End Time -->\r
          <div class="form-group">\r
            <label for="endAt" class="form-label"\r
              >{{ translate("meetings.end_time") }}\r
            </label>\r
            <input\r
              id="endAt"\r
              type="datetime-local"\r
              formControlName="endAt"\r
              class="form-input"\r
              [class.error]="\r
                meetingForm.get('endAt')?.invalid &&\r
                meetingForm.get('endAt')?.touched\r
              "\r
            />\r
            <div\r
              *ngIf="\r
                meetingForm.get('endAt')?.invalid &&\r
                meetingForm.get('endAt')?.touched\r
              "\r
              class="error-message"\r
            >\r
              <span *ngIf="meetingForm.get('endAt')?.errors?.['required']">{{\r
                translate("login.field_required")\r
              }}</span>\r
              <span\r
                *ngIf="meetingForm.get('endAt')?.errors?.['invalidTimeRange']"\r
                >{{ translate("meetings.invalid_end_time") }}</span\r
              >\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Attendees Section -->\r
      <div class="form-section">\r
        <div class="section-header">\r
          <h2 class="section-title">{{ translate("meetings.attendees") }}</h2>\r
          <button\r
            type="button"\r
            (click)="addAttendee()"\r
            class="btn btn-secondary"\r
            [disabled]="meetingCreated()"\r
          >\r
            <svg\r
              class="btn-icon"\r
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
            {{ translate("Add-Meeting.add_attendee") }}\r
          </button>\r
        </div>\r
\r
        <div *ngIf="attendees.length === 0" class="empty-state">\r
          <svg\r
            class="empty-icon"\r
            width="48"\r
            height="48"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>\r
            <circle cx="9" cy="7" r="4"></circle>\r
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>\r
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
          </svg>\r
          <p class="empty-text">{{ translate("Add-Meeting.attendee") }}</p>\r
        </div>\r
\r
        <div formArrayName="attendees" class="attendees-list">\r
          <div\r
            *ngFor="let attendee of attendees.controls; let i = index"\r
            [formGroupName]="i"\r
            class="attendee-item"\r
          >\r
            <div class="attendee-header">\r
              <h3 class="attendee-title">\r
                {{ translate("Add-Meeting.attendee") }} {{ i + 1 }}\r
              </h3>\r
              <button\r
                type="button"\r
                (click)="removeAttendee(i)"\r
                class="btn btn-danger btn-sm"\r
                [disabled]="meetingCreated()"\r
              >\r
                <svg\r
                  class="btn-icon"\r
                  width="14"\r
                  height="14"\r
                  viewBox="0 0 24 24"\r
                  fill="none"\r
                  stroke="currentColor"\r
                  stroke-width="2"\r
                >\r
                  <polyline points="3,6 5,6 21,6"></polyline>\r
                  <path\r
                    d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
                  ></path>\r
                </svg>\r
                {{ translate("meetings.delete") }}\r
              </button>\r
            </div>\r
\r
            <div class="attendee-form">\r
              <div class="form-row">\r
                <!-- Attendee Kind -->\r
                <div class="form-group">\r
                  <label class="form-label"\r
                    >{{ translate("Add-Meeting.attendee_kind") }}\r
                  </label>\r
                  <select\r
                    formControlName="kind"\r
                    class="form-select"\r
                    (change)="onAttendeeKindChange($event, i)"\r
                  >\r
                    <option [value]="AttendeeKind.Internal">\r
                      {{ getAttendeeKindLabel(AttendeeKind.Internal) }}\r
                    </option>\r
                    <option [value]="AttendeeKind.External">\r
                      {{ getAttendeeKindLabel(AttendeeKind.External) }}\r
                    </option>\r
                  </select>\r
                </div>\r
\r
                <!-- Attendee Role -->\r
                <div class="form-group">\r
                  <label class="form-label"\r
                    >{{ translate("Add-Meeting.attendee_role") }}\r
                  </label>\r
                  <select formControlName="role" class="form-select">\r
                    <option [value]="AttendeeRole.Required">\r
                      {{ getAttendeeRoleLabel(AttendeeRole.Required) }}\r
                    </option>\r
                    <option [value]="AttendeeRole.Optional">\r
                      {{ getAttendeeRoleLabel(AttendeeRole.Optional) }}\r
                    </option>\r
                    <option [value]="AttendeeRole.Speaker">\r
                      {{ getAttendeeRoleLabel(AttendeeRole.Speaker) }}\r
                    </option>\r
                  </select>\r
                </div>\r
              </div>\r
\r
              <!-- Internal Attendee Fields -->\r
              <div *ngIf="showInternalFields()[i]" class="internal-fields">\r
                <div class="form-group">\r
                  <label class="form-label"\r
                    >{{ translate("Add-Meeting.select_user") }}\r
                  </label>\r
                  <select\r
                    (change)="onUserSelect($event, i)"\r
                    class="form-select"\r
                    [class.error]="\r
                      attendee.get('userId')?.invalid &&\r
                      attendee.get('userId')?.touched\r
                    "\r
                  >\r
                    <option value="">\r
                      {{ translate("Add-Meeting.select_user_placeholder") }}\r
                    </option>\r
                    <option\r
                      *ngFor="let user of filteredUsers()"\r
                      [value]="user.id"\r
                    >\r
                      {{ user.name }} - {{ user.departmentName }}\r
                    </option>\r
                  </select>\r
\r
                  <!-- Selected User Display -->\r
                  <div\r
                    *ngIf="attendee.get('userId')?.value"\r
                    class="selected-user"\r
                  >\r
                    <span class="selected-user-name">{{\r
                      attendee.get("displayName")?.value\r
                    }}</span>\r
                    <span class="selected-user-department">{{\r
                      attendee.get("department")?.value\r
                    }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- External Attendee Fields -->\r
              <div *ngIf="showExternalFields()[i]" class="external-fields">\r
                <div class="form-row">\r
                  <div class="form-group">\r
                    <label class="form-label"\r
                      >{{ translate("Add-Meeting.display_name") }}\r
                    </label>\r
                    <input\r
                      type="text"\r
                      formControlName="displayName"\r
                      [placeholder]="\r
                        translate('Add-Meeting.display_name_placeholder')\r
                      "\r
                      class="form-input"\r
                      [class.error]="\r
                        attendee.get('displayName')?.invalid &&\r
                        attendee.get('displayName')?.touched\r
                      "\r
                    />\r
                  </div>\r
\r
                  <div class="form-group">\r
                    <label class="form-label">{{\r
                      translate("Add-Meeting.organization")\r
                    }}</label>\r
                    <input\r
                      type="text"\r
                      formControlName="organization"\r
                      [placeholder]="\r
                        translate('Add-Meeting.organization_placeholder')\r
                      "\r
                      class="form-input"\r
                      [class.error]="\r
                        attendee.get('organization')?.invalid &&\r
                        attendee.get('organization')?.touched\r
                      "\r
                    />\r
                  </div>\r
                </div>\r
\r
                <div class="form-row">\r
                  <div class="form-group">\r
                    <label class="form-label">{{\r
                      translate("Add-Meeting.job_title")\r
                    }}</label>\r
                    <input\r
                      type="text"\r
                      formControlName="jobTitle"\r
                      [placeholder]="\r
                        translate('Add-Meeting.job_title_placeholder')\r
                      "\r
                      class="form-input"\r
                      [class.error]="\r
                        attendee.get('jobTitle')?.invalid &&\r
                        attendee.get('jobTitle')?.touched\r
                      "\r
                    />\r
                  </div>\r
\r
                  <div class="form-group">\r
                    <label class="form-label">{{\r
                      translate("meetings.department")\r
                    }}</label>\r
                    <input\r
                      type="text"\r
                      formControlName="department"\r
                      [placeholder]="\r
                        translate('Add-Meeting.department_placeholder')\r
                      "\r
                      class="form-input"\r
                      [class.error]="\r
                        attendee.get('department')?.invalid &&\r
                        attendee.get('department')?.touched\r
                      "\r
                    />\r
                  </div>\r
                </div>\r
\r
                <div class="form-group">\r
                  <label class="form-label">{{\r
                    translate("meetings.email")\r
                  }}</label>\r
                  <input\r
                    type="email"\r
                    formControlName="email"\r
                    [placeholder]="translate('Add-Meeting.email_placeholder')"\r
                    class="form-input"\r
                    [class.error]="\r
                      attendee.get('email')?.invalid &&\r
                      attendee.get('email')?.touched\r
                    "\r
                  />\r
                </div>\r
              </div>\r
\r
              <!-- Notes -->\r
              <div class="form-group">\r
                <label class="form-label">{{\r
                  translate("Add-Meeting.notes")\r
                }}</label>\r
                <textarea\r
                  formControlName="notes"\r
                  [placeholder]="translate('Add-Meeting.notes_placeholder')"\r
                  class="form-textarea"\r
                  rows="2"\r
                ></textarea>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Attendees Validation Error -->\r
        <div\r
          *ngIf="attendees.invalid && attendees.touched"\r
          class="error-message"\r
        >\r
          <span *ngIf="attendees.errors?.['required']">{{\r
            translate("login.field_required")\r
          }}</span>\r
          <span *ngIf="attendees.errors?.['minlength']">{{\r
            translate("Add-Meeting.attendee")\r
          }}</span>\r
        </div>\r
      </div>\r
\r
      <!-- Recommendations Section -->\r
      <div class="form-section">\r
        <h2 class="section-title">\r
          {{ translate("meetings.recommendations") }}\r
        </h2>\r
\r
        <div class="recommendations-form">\r
          <div class="form-group">\r
            <label for="recommendationText" class="form-label">{{\r
              translate("meetings.add_recommendation")\r
            }}</label>\r
            <textarea\r
              id="recommendationText"\r
              #recommendationText\r
              [placeholder]="translate('meetings.recommendation_placeholder')"\r
              class="form-textarea"\r
              rows="3"\r
            ></textarea>\r
          </div>\r
          <button\r
            type="button"\r
            (click)="\r
              addRecommendation(recommendationText.value);\r
              recommendationText.value = '';\r
              recommendationText.focus()\r
            "\r
            class="btn btn-secondary"\r
\r
          >\r
            <svg\r
              *ngIf="isAddingRecommendation()"\r
              class="btn-spinner"\r
              width="16"\r
              height="16"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
            >\r
              <circle\r
                cx="12"\r
                cy="12"\r
                r="10"\r
                stroke-dasharray="31.416"\r
                stroke-dashoffset="31.416"\r
              >\r
                <animate\r
                  attributeName="stroke-dasharray"\r
                  dur="2s"\r
                  values="0 31.416;15.708 15.708;0 31.416"\r
                  repeatCount="indefinite"\r
                />\r
                <animate\r
                  attributeName="stroke-dashoffset"\r
                  dur="2s"\r
                  values="0;-15.708;-31.416"\r
                  repeatCount="indefinite"\r
                />\r
              </circle>\r
            </svg>\r
            {{ isAddingRecommendation() ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629..." : "\u0625\u0636\u0627\u0641\u0629" }}\r
          </button>\r
        </div>\r
\r
        <div class="recommendations-list">\r
          <div *ngIf="recommendations().length === 0" class="empty-state">\r
            <p class="empty-text">\r
              {{ translate("meetings.no_recommendations") }}\r
            </p>\r
          </div>\r
          <div\r
            *ngFor="let recommendation of recommendations(); let i = index"\r
            class="recommendation-item"\r
          >\r
            <span class="recommendation-number">{{ i + 1 }}.</span>\r
            <span class="recommendation-text">{{ recommendation }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Submit Button -->\r
      <div class="form-actions">\r
        <button\r
          type="submit"\r
          class="btn btn-primary"\r
          [disabled]="meetingForm.invalid || isSubmitting() || meetingCreated()"\r
        >\r
          <svg\r
            *ngIf="isSubmitting()"\r
            class="btn-spinner"\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <circle\r
              cx="12"\r
              cy="12"\r
              r="10"\r
              stroke-dasharray="31.416"\r
              stroke-dashoffset="31.416"\r
            >\r
              <animate\r
                attributeName="stroke-dasharray"\r
                dur="2s"\r
                values="0 31.416;15.708 15.708;0 31.416"\r
                repeatCount="indefinite"\r
              />\r
              <animate\r
                attributeName="stroke-dashoffset"\r
                dur="2s"\r
                values="0;-15.708;-31.416"\r
                repeatCount="indefinite"\r
              />\r
            </circle>\r
          </svg>\r
          {{\r
            isSubmitting() ? translate("login.saving") : translate("login.save")\r
          }}\r
        </button>\r
      </div>\r
    </div>\r
  </form>\r
</div>\r
`, styles: ["/* src/app/components/meetings/add-meeting/add-meeting.component.css */\n.add-meeting-page {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  background: #fff;\n  min-height: 100vh;\n}\n.page-header {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n}\n.page-description {\n  color: #6b7280;\n  font-size: 1.1rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.alert:hover {\n  opacity: 0.8;\n}\n.alert-success {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error {\n  background-color: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.alert-icon {\n  flex-shrink: 0;\n}\n.form-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-section {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-textarea,\n.form-select {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #fff;\n}\n.form-input:focus,\n.form-textarea:focus,\n.form-select:focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-input.error,\n.form-textarea.error,\n.form-select.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  justify-content: center;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #2563eb;\n}\n.btn-secondary {\n  background-color: #f3f4f6;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #e5e7eb;\n}\n.btn-danger {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #dc2626;\n}\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.btn-icon {\n  flex-shrink: 0;\n}\n.btn-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.empty-icon {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-text {\n  font-size: 0.875rem;\n}\n.attendees-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.attendee-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n}\n.attendee-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.attendee-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.attendee-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.search-input-container {\n  position: relative;\n}\n.user-search-results {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.user-search-item {\n  padding: 0.75rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s;\n}\n.user-search-item:hover {\n  background-color: #f9fafb;\n}\n.user-search-item:last-child {\n  border-bottom: none;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.user-name {\n  font-weight: 500;\n  color: #374151;\n}\n.user-department {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.selected-user {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #dbeafe;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selected-user-name {\n  font-weight: 500;\n  color: #1e40af;\n}\n.selected-user-department {\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.post-creation-sections {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.recommendations-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.recommendations-form .form-group {\n  margin-bottom: 0;\n}\n.recommendations-form button {\n  align-self: flex-start;\n  min-width: 120px;\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.recommendations-list .empty-state {\n  text-align: center;\n  padding: 2rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 2px dashed #d1d5db;\n}\n.recommendations-list .empty-text {\n  color: #6b7280;\n  font-style: italic;\n  margin: 0;\n}\n.recommendation-item {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border-left: 4px solid #3b82f6;\n}\n.recommendation-number {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 1.5rem;\n}\n.recommendation-text {\n  color: #374151;\n  line-height: 1.5;\n  flex: 1;\n}\n.attachments-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.attachments-form .form-row {\n  margin-bottom: 1rem;\n}\n.attachments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.attachment-item {\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.attachment-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.attachment-name {\n  font-weight: 500;\n  color: #374151;\n}\n.attachment-type {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.attachment-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.attachment-description {\n  font-weight: 500;\n}\n.attachment-source {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.add-meeting-page.rtl .recommendation-item {\n  border-left: none;\n  border-right: 4px solid #3b82f6;\n}\n.add-meeting-page.rtl .user-search-results {\n  left: auto;\n  right: 0;\n}\n@media (max-width: 768px) {\n  .add-meeting-page {\n    padding: 1rem;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .section-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .recommendations-form {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .attendee-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .attachment-header {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .attachment-details {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .form-section {\n    padding: 1rem;\n  }\n  .btn {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=add-meeting.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddMeetingComponent, { className: "AddMeetingComponent", filePath: "src/app/components/meetings/add-meeting/add-meeting.component.ts", lineNumber: 47 });
})();

// src/app/components/meetings/meeting-details/meeting-details.component.ts
function MeetingDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.loading"));
  }
}
function MeetingDetailsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 5);
    \u0275\u0275element(2, "circle", 15)(3, "line", 16)(4, "line", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MeetingDetailsComponent_div_11_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 50);
    \u0275\u0275element(2, "path", 51)(3, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.edit"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.agenda"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meeting.agenda);
  }
}
function MeetingDetailsComponent_div_11_div_10_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.location_text"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meeting.locationText);
  }
}
function MeetingDetailsComponent_div_11_div_10_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "a", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.online_url"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r0.meeting.onlineUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.meeting.onlineUrl, " ");
  }
}
function MeetingDetailsComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_10_div_2_Template, 5, 2, "div", 55);
    \u0275\u0275elementStart(3, "div", 56)(4, "div", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56)(9, "div", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 56)(14, "div", 57);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 58);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 56)(19, "div", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 58);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 56)(24, "div", 57);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 58);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_11_div_10_div_28_Template, 5, 2, "div", 55)(29, MeetingDetailsComponent_div_11_div_10_div_29_Template, 6, 3, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.meeting.agenda);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.types"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingTypeLabel(ctx_r0.meeting.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.organizer"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.meeting.organizerName || "N/A", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.start_time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDateTime(ctx_r0.meeting.startAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.end_time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatDateTime(ctx_r0.meeting.endAt), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.locations"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLocationModeLabel(ctx_r0.meeting.locationMode), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.locationText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.onlineUrl);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_8_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("title")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_15_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_15_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("agenda")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_28_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("type")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_35_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("startAt")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_42_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("endAt")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_55_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.editForm.get("locationMode")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_56_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_56_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_56_div_6_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.editForm.get("locationText")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "label", 82);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 83);
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_div_11_div_56_div_6_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.location_text"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.editForm.get("locationText")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.editForm.get("locationText")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.location_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.editForm.get("locationText")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.editForm.get("locationText")) == null ? null : tmp_6_0.touched));
  }
}
function MeetingDetailsComponent_div_11_div_11_div_57_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_11_div_57_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_57_div_6_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.editForm.get("onlineUrl")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_11_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "label", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 64);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 85);
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_div_11_div_57_div_6_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.online_url"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.editForm.get("onlineUrl")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.editForm.get("onlineUrl")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.online_url_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.editForm.get("onlineUrl")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.editForm.get("onlineUrl")) == null ? null : tmp_6_0.touched));
  }
}
function MeetingDetailsComponent_div_11_div_11_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.saving"));
  }
}
function MeetingDetailsComponent_div_11_div_11_span_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.save"));
  }
}
function MeetingDetailsComponent_div_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_11_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "label", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 65);
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_11_div_8_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 62)(10, "label", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 64);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "textarea", 67);
    \u0275\u0275template(15, MeetingDetailsComponent_div_11_div_11_div_15_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 62)(17, "label", 68);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 64);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 69)(22, "option", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 70);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 70);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_11_div_11_div_28_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 71);
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "span", 64);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 72);
    \u0275\u0275template(35, MeetingDetailsComponent_div_11_div_11_div_35_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 62)(37, "label", 73);
    \u0275\u0275text(38);
    \u0275\u0275elementStart(39, "span", 64);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 74);
    \u0275\u0275template(42, MeetingDetailsComponent_div_11_div_11_div_42_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 62)(44, "label", 75);
    \u0275\u0275text(45);
    \u0275\u0275elementStart(46, "span", 64);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 76)(49, "option", 70);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 70);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 70);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, MeetingDetailsComponent_div_11_div_11_div_55_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, MeetingDetailsComponent_div_11_div_11_div_56_Template, 7, 5, "div", 77)(57, MeetingDetailsComponent_div_11_div_11_div_57_Template, 7, 5, "div", 77);
    \u0275\u0275elementStart(58, "div", 78)(59, "button", 79);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_11_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 80);
    \u0275\u0275template(62, MeetingDetailsComponent_div_11_div_11_span_62_Template, 2, 1, "span", 81)(63, MeetingDetailsComponent_div_11_div_11_span_63_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_17_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_25_0;
    let tmp_32_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.editForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.editForm.get("title")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.editForm.get("title")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.editForm.get("title")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.editForm.get("title")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.agenda"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx_r0.editForm.get("agenda")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.editForm.get("agenda")) == null ? null : tmp_7_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r0.editForm.get("agenda")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.editForm.get("agenda")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.type"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_10_0 = ctx_r0.editForm.get("type")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.editForm.get("type")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingType.Internal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingTypeLabel(ctx_r0.MeetingType.Internal), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingType.External);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingTypeLabel(ctx_r0.MeetingType.External), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingType.Other);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingTypeLabel(ctx_r0.MeetingType.Other), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_17_0 = ctx_r0.editForm.get("type")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.editForm.get("type")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.start_time"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_19_0 = ctx_r0.editForm.get("startAt")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r0.editForm.get("startAt")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_20_0 = ctx_r0.editForm.get("startAt")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = ctx_r0.editForm.get("startAt")) == null ? null : tmp_20_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.end_time"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_22_0 = ctx_r0.editForm.get("endAt")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r0.editForm.get("endAt")) == null ? null : tmp_22_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_23_0 = ctx_r0.editForm.get("endAt")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r0.editForm.get("endAt")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.locations"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_25_0 = ctx_r0.editForm.get("locationMode")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx_r0.editForm.get("locationMode")) == null ? null : tmp_25_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingLocationMode.InPerson);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLocationModeLabel(ctx_r0.MeetingLocationMode.InPerson), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingLocationMode.Online);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLocationModeLabel(ctx_r0.MeetingLocationMode.Online), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.MeetingLocationMode.Hybrid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLocationModeLabel(ctx_r0.MeetingLocationMode.Hybrid), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_32_0 = ctx_r0.editForm.get("locationMode")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx_r0.editForm.get("locationMode")) == null ? null : tmp_32_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showLocationText());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showOnlineUrl());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.editForm.invalid || ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.saving);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275property("value", user_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r7.name, " - ", user_r7.departmentName, " ");
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 89)(2, "div", 62)(3, "label", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62)(7, "label", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.display_name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.attendeesForm.get("displayName")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.attendeesForm.get("displayName")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.department"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_7_0 = ctx_r0.attendeesForm.get("department")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r0.attendeesForm.get("department")) == null ? null : tmp_7_0.touched));
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97)(1, "div", 62)(2, "label", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 98);
    \u0275\u0275listener("change", function MeetingDetailsComponent_div_11_div_21_div_27_Template_select_change_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onUserSelect($event));
    });
    \u0275\u0275elementStart(5, "option", 99);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingDetailsComponent_div_11_div_21_div_27_option_7_Template, 2, 3, "option", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_21_div_27_div_8_Template, 10, 6, "div", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.select_user"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("Add-Meeting.select_user_placeholder"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.users);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_7_0.value);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 89)(2, "div", 62)(3, "label", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62)(7, "label", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 89)(11, "div", 62)(12, "label", 90);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 62)(16, "label", 90);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 62)(20, "label", 90);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 110);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.display_name"));
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.attendeesForm.get("displayName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.attendeesForm.get("displayName")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.display_name_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.organization"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.organization_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.job_title"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.job_title_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.department"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.department_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.email"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.email_placeholder"));
  }
}
function MeetingDetailsComponent_div_11_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 29)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttendeeForm());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_21_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAttendee());
    });
    \u0275\u0275elementStart(8, "div", 89)(9, "div", 62)(10, "label", 90);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 91);
    \u0275\u0275listener("change", function MeetingDetailsComponent_div_11_div_21_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAttendeeKindChange($event));
    });
    \u0275\u0275elementStart(13, "option", 70);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 70);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 62)(18, "label", 90);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 92)(21, "option", 70);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 70);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 70);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, MeetingDetailsComponent_div_11_div_21_div_27_Template, 9, 6, "div", 93)(28, MeetingDetailsComponent_div_11_div_21_div_28_Template, 23, 12, "div", 94);
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 90);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 78)(34, "button", 79);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttendeeForm());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 96);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingAttendee ? ctx_r0.translate("common.edit") : ctx_r0.translate("Add-Meeting.add_attendee"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.attendeesForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.attendee_kind"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.AttendeeKind.Internal);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeKindLabel(ctx_r0.AttendeeKind.Internal), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.AttendeeKind.External);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeKindLabel(ctx_r0.AttendeeKind.External), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.attendee_role"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.AttendeeRole.Required);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeRoleLabel(ctx_r0.AttendeeRole.Required), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.AttendeeRole.Optional);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeRoleLabel(ctx_r0.AttendeeRole.Optional), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.AttendeeRole.Speaker);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeRoleLabel(ctx_r0.AttendeeRole.Speaker), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showInternalFields());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showExternalFields());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.notes"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.notes_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingAttendee ? ctx_r0.translate("common.save") : ctx_r0.translate("Add-Meeting.add_attendee"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r9.organization, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r9.jobTitle, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r9.email, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r9.department, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 115)(1, "td", 116)(2, "div", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingDetailsComponent_div_11_div_22_tr_20_div_4_Template, 2, 1, "div", 118)(5, MeetingDetailsComponent_div_11_div_22_tr_20_div_5_Template, 2, 1, "div", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 120)(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 121)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 122)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 123);
    \u0275\u0275template(16, MeetingDetailsComponent_div_11_div_22_tr_20_span_16_Template, 2, 1, "span", 124)(17, MeetingDetailsComponent_div_11_div_22_tr_20_span_17_Template, 2, 0, "span", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 126);
    \u0275\u0275template(19, MeetingDetailsComponent_div_11_div_22_tr_20_span_19_Template, 2, 1, "span", 127)(20, MeetingDetailsComponent_div_11_div_22_tr_20_span_20_Template, 2, 0, "span", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 128)(22, "div", 129)(23, "button", 130);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_23_listener() {
      const attendee_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editAttendeeStatus(attendee_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 131);
    \u0275\u0275element(25, "path", 51)(26, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 132);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_27_listener() {
      const attendee_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editAttendee(attendee_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 131);
    \u0275\u0275element(29, "path", 51)(30, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "button", 133);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_31_listener() {
      const attendee_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAttendee(attendee_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 131);
    \u0275\u0275element(33, "polyline", 134)(34, "path", 135)(35, "line", 136)(36, "line", 137);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const attendee_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attendee_r9.displayName || attendee_r9.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendee_r9.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendee_r9.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + attendee_r9.attendanceStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendanceStatusLabel(attendee_r9.attendanceStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("kind-badge kind-" + (attendee_r9.kind === 0 ? "internal" : "external"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeKindLabel(attendee_r9.kind), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-badge role-" + (attendee_r9.role === 0 ? "speaker" : "attendee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeRoleLabel(attendee_r9.role), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendee_r9.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendee_r9.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendee_r9.department);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendee_r9.department);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.translate("meetings.edit_attendance_status"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.translate("common.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.translate("meetings.delete"));
  }
}
function MeetingDetailsComponent_div_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112)(2, "table", 113)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, MeetingDetailsComponent_div_11_div_22_tr_20_Template, 37, 19, "tr", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.translate("Add-Meeting.attendee"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attendance_status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attendee_kind"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attendee_role"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("employees.department"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("common.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.meeting.attendees);
  }
}
function MeetingDetailsComponent_div_11_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_attendees"));
  }
}
function MeetingDetailsComponent_div_11_div_33_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "span", 157);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 158);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", (ctx_r0.selectedFile.size / 1024 / 1024).toFixed(2), " MB)");
  }
}
function MeetingDetailsComponent_div_11_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 87)(2, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_33_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAttachment());
    });
    \u0275\u0275elementStart(3, "div", 62)(4, "label", 145);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 146);
    \u0275\u0275listener("change", function MeetingDetailsComponent_div_11_div_33_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingDetailsComponent_div_11_div_33_div_7_Template, 5, 2, "div", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 62)(9, "label", 148);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 62)(13, "label", 150);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 151)(16, "option", 99);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 152);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 153);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 154);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 78)(25, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_33_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttachmentForm());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 155);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.attachmentsForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.file"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedFile);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.translate("meetings.description_placeholder")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.document_source"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.document_sources.All"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.document_sources.incoming"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.document_sources.outgoing"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.document_sources.internal"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.attachmentsForm.invalid || !ctx_r0.selectedFile);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.save"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.document_sources.incoming"));
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.document_sources.outgoing"));
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.document_sources.internal"));
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "span", 177);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attachment_r12.description);
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 162)(2, "div", 163);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 164)(5, "div", 165)(6, "span", 166);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_34_div_1_span_8_Template, 2, 1, "span", 167)(9, MeetingDetailsComponent_div_11_div_34_div_1_span_9_Template, 2, 1, "span", 167)(10, MeetingDetailsComponent_div_11_div_34_div_1_span_10_Template, 2, 1, "span", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MeetingDetailsComponent_div_11_div_34_div_1_div_11_Template, 3, 1, "div", 168);
    \u0275\u0275elementStart(12, "div", 165)(13, "span", 169);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 170)(16, "button", 171);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_34_div_1_Template_button_click_16_listener() {
      const attachment_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadAttachment(attachment_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 50);
    \u0275\u0275element(18, "path", 172)(19, "polyline", 173)(20, "line", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 175);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_34_div_1_Template_button_click_22_listener() {
      const attachment_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAttachment(attachment_r12));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 50);
    \u0275\u0275element(24, "polyline", 134)(25, "path", 135)(26, "line", 136)(27, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attachment_r12.fileName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r12.fileType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r12.documentSource === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r12.documentSource === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r12.documentSource === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r12.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(attachment_r12.uploadedAt));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.download"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_34_div_1_Template, 29, 9, "div", 160);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.meeting.attachments);
  }
}
function MeetingDetailsComponent_div_11_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "p", 179);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.no_attachments"), " ");
  }
}
function MeetingDetailsComponent_div_11_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showAddMinutes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "line", 33)(3, "line", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.add_minutes"), " ");
  }
}
function MeetingDetailsComponent_div_11_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editMinutes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "path", 51)(3, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.edit_minutes"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 87)(2, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_42_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveMinutes());
    });
    \u0275\u0275elementStart(3, "div", 62)(4, "label", 180);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "textarea", 181);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62)(8, "label", 182);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 78)(12, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_42_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelMinutesForm());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 155);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r0.minutesForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.notes"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.translate("meetings.notes_placeholder")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.summary_ai"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.translate("meetings.summary_ai_placeholder")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.minutesForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingMinutes ? ctx_r0.translate("common.update") : ctx_r0.translate("common.save"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_43_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 189);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.ai_summary"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meeting.minutes.summaryAI);
  }
}
function MeetingDetailsComponent_div_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "div", 185)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 186);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_div_43_div_6_Template, 5, 2, "div", 187);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.notes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meeting.minutes.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.minutes.summaryAI);
  }
}
function MeetingDetailsComponent_div_11_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 190)(1, "p", 191);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_minutes"));
  }
}
function MeetingDetailsComponent_div_11_div_54_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_54_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_54_div_14_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 87)(2, "div", 29)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 88);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_54_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationForm());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_54_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveRecommendation());
    });
    \u0275\u0275elementStart(8, "div", 62)(9, "label", 90);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 64);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 192);
    \u0275\u0275template(14, MeetingDetailsComponent_div_11_div_54_div_14_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 78)(16, "button", 79);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_54_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationForm());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 96);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingRecommendation ? ctx_r0.translate("common.edit") : ctx_r0.translate("meetings.add_recommendation"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.recommendationsForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.recommendation_text"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_6_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_6_0.touched));
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.recommendation_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_8_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingRecommendation ? ctx_r0.translate("common.save") : ctx_r0.translate("meetings.add_recommendation"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_55_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 199)(1, "div", 200);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 201)(4, "button", 132);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_55_div_1_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const recommendation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editRecommendation(recommendation_r18));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 131);
    \u0275\u0275element(6, "path", 51)(7, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "button", 133);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_55_div_1_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r17);
      const recommendation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteRecommendation(recommendation_r18));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 131);
    \u0275\u0275element(11, "polyline", 134)(12, "path", 135)(13, "line", 136)(14, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const recommendation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recommendation_r18.text);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("common.edit")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.edit"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("common.delete")));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_55_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 202);
    \u0275\u0275element(1, "textarea", 203, 0);
    \u0275\u0275elementStart(3, "div", 204)(4, "button", 205);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_55_div_1_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const editTextarea_r20 = \u0275\u0275reference(2);
      const recommendation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveRecommendationInline(recommendation_r18, editTextarea_r20.value));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 131);
    \u0275\u0275element(6, "polyline", 206);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "button", 132);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_55_div_1_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 131);
    \u0275\u0275element(10, "line", 207)(11, "line", 208);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const recommendation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.translate("meetings.recommendation_placeholder")))("value", recommendation_r18.text);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("common.save")));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.save"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r0.translate("common.cancel")));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 195)(1, "div", 196);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_55_div_1_div_2_Template, 16, 7, "div", 197)(3, MeetingDetailsComponent_div_11_div_55_div_1_div_3_Template, 13, 9, "div", 198);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingRecommendation(recommendation_r18.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingRecommendation(recommendation_r18.id));
  }
}
function MeetingDetailsComponent_div_11_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_55_div_1_Template, 4, 2, "div", 194);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.meeting.recommendations);
  }
}
function MeetingDetailsComponent_div_11_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_recommendations"));
  }
}
function MeetingDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "h2", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_button_6_Template, 5, 1, "button", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24)(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, MeetingDetailsComponent_div_11_div_10_Template, 30, 13, "div", 26)(11, MeetingDetailsComponent_div_11_div_11_Template, 64, 43, "div", 27);
    \u0275\u0275elementStart(12, "div", 28)(13, "div", 29)(14, "h3", 30);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 32);
    \u0275\u0275element(18, "line", 33)(19, "line", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, MeetingDetailsComponent_div_11_div_21_Template, 38, 21, "div", 35)(22, MeetingDetailsComponent_div_11_div_22_Template, 21, 8, "div", 36)(23, MeetingDetailsComponent_div_11_div_23_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 28)(25, "div", 29)(26, "h3", 30);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddAttachment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 32);
    \u0275\u0275element(30, "line", 33)(31, "line", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, MeetingDetailsComponent_div_11_div_33_Template, 29, 14, "div", 38)(34, MeetingDetailsComponent_div_11_div_34_Template, 2, 1, "div", 39)(35, MeetingDetailsComponent_div_11_div_35_Template, 3, 1, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 28)(37, "div", 29)(38, "h3", 30);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, MeetingDetailsComponent_div_11_button_40_Template, 5, 1, "button", 41)(41, MeetingDetailsComponent_div_11_button_41_Template, 5, 1, "button", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, MeetingDetailsComponent_div_11_div_42_Template, 16, 10, "div", 38)(43, MeetingDetailsComponent_div_11_div_43_Template, 7, 3, "div", 42)(44, MeetingDetailsComponent_div_11_div_44_Template, 3, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "h3", 30);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddRecommendation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 32);
    \u0275\u0275element(51, "line", 33)(52, "line", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, MeetingDetailsComponent_div_11_div_54_Template, 20, 10, "div", 38)(55, MeetingDetailsComponent_div_11_div_55_Template, 2, 1, "div", 44)(56, MeetingDetailsComponent_div_11_div_56_Template, 3, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(57, "div", 28)(58, "h3", 30);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 45)(61, "div", 46)(62, "span", 47);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 48);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 46)(67, "span", 47);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 48);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.meeting.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.editing);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + ctx_r0.meeting.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getMeetingStatusLabel(ctx_r0.meeting.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.editing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editing);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attendees"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("Add-Meeting.add_attendee"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddAttendeeForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.attendees && ctx_r0.meeting.attendees.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.meeting.attendees || ctx_r0.meeting.attendees.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attachments"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.add_attachment"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddAttachmentForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.attachments && ctx_r0.meeting.attachments.length > 0 && !ctx_r0.showAddAttachmentForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (!ctx_r0.meeting.attachments || ctx_r0.meeting.attachments.length === 0) && !ctx_r0.showAddAttachmentForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.minutes"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasMinutes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasMinutes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddMinutesForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.minutes && !ctx_r0.showAddMinutesForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasMinutes() && !ctx_r0.showAddMinutesForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.recommendations"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.add_recommendation"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddRecommendationForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.recommendations && ctx_r0.meeting.recommendations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.meeting.recommendations || ctx_r0.meeting.recommendations.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.metadata"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.created_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.meeting.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.updated_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(ctx_r0.meeting.updatedAt));
  }
}
function MeetingDetailsComponent_div_12_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_12_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_12_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_12_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_12_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_12_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_12_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_12_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAttendee.displayName || ctx_r0.selectedAttendee.userName || "N/A", " ");
  }
}
function MeetingDetailsComponent_div_13_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_13_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_13_div_28_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_13_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.saving"));
  }
}
function MeetingDetailsComponent_div_13_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.save"));
  }
}
function MeetingDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_13_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_13_div_11_Template, 5, 2, "div", 231);
    \u0275\u0275elementStart(12, "div", 62)(13, "label", 232);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 233)(18, "option", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 70);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 70);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 70);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_13_div_28_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 180);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 78)(34, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 155);
    \u0275\u0275template(37, MeetingDetailsComponent_div_13_span_37_Template, 2, 1, "span", 81)(38, MeetingDetailsComponent_div_13_span_38_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.edit_attendance_status"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.attendanceStatusForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAttendee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.attendance_status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.invited"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.accepted"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.declined"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attended"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.absent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.notes"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.attendance_notes_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.attendanceStatusForm.invalid || ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingStatus);
  }
}
function MeetingDetailsComponent_div_14_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_14_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_14_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_14_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_14_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_14_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_14_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_14_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.recommendation_text"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.recommendationToDelete.text);
  }
}
function MeetingDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_15_div_17_Template, 5, 2, "div", 236);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteRecommendation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_recommendation"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_recommendation_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.recommendationToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_16_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_16_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_16_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_16_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_16_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_16_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_16_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAttendee.displayName || ctx_r0.selectedAttendee.userName || "N/A", " ");
  }
}
function MeetingDetailsComponent_div_17_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_17_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_17_div_28_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_17_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.saving"));
  }
}
function MeetingDetailsComponent_div_17_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.save"));
  }
}
function MeetingDetailsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_17_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_17_div_11_Template, 5, 2, "div", 231);
    \u0275\u0275elementStart(12, "div", 62)(13, "label", 232);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 233)(18, "option", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 70);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 70);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 70);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_17_div_28_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 180);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 78)(34, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 155);
    \u0275\u0275template(37, MeetingDetailsComponent_div_17_span_37_Template, 2, 1, "span", 81)(38, MeetingDetailsComponent_div_17_span_38_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.edit_attendance_status"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.attendanceStatusForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAttendee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.attendance_status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.invited"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.accepted"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.declined"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attended"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.absent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.notes"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.attendance_notes_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.attendanceStatusForm.invalid || ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingStatus);
  }
}
function MeetingDetailsComponent_div_18_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_18_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_18_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_18_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_18_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_18_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_18_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_18_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 239)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.file_name"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.attachmentToDelete.fileName);
  }
}
function MeetingDetailsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r28);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_19_div_17_Template, 5, 2, "div", 238);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttachment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.delete_attachment"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attachment_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attachmentToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_20_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_20_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_20_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_20_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_20_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_20_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_20_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r29);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_20_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_21_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAttendee.displayName || ctx_r0.selectedAttendee.userName || "N/A", " ");
  }
}
function MeetingDetailsComponent_div_21_div_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("login.field_required"), " ");
  }
}
function MeetingDetailsComponent_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MeetingDetailsComponent_div_21_div_28_span_1_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_21_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.saving"));
  }
}
function MeetingDetailsComponent_div_21_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("common.save"));
  }
}
function MeetingDetailsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "form", 61);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_21_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_21_div_11_Template, 5, 2, "div", 231);
    \u0275\u0275elementStart(12, "div", 62)(13, "label", 232);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 64);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 233)(18, "option", 70);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 70);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 70);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 70);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_21_div_28_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 62)(30, "label", 180);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 78)(34, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 155);
    \u0275\u0275template(37, MeetingDetailsComponent_div_21_span_37_Template, 2, 1, "span", 81)(38, MeetingDetailsComponent_div_21_span_38_Template, 2, 1, "span", 81);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.edit_attendance_status"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r0.attendanceStatusForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAttendee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.attendance_status"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.invited"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.accepted"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.declined"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attended"));
    \u0275\u0275advance();
    \u0275\u0275property("value", 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.absent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r0.attendanceStatusForm.get("attendanceStatus")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.notes"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.attendance_notes_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.attendanceStatusForm.invalid || ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingStatus);
  }
}
function MeetingDetailsComponent_div_22_div_17_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("partners.organization"), ": ", ctx_r0.attendeeToDelete.organization, " ");
  }
}
function MeetingDetailsComponent_div_22_div_17_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.translate("employees.department"), ": ", ctx_r0.attendeeToDelete.department, " ");
  }
}
function MeetingDetailsComponent_div_22_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 228);
    \u0275\u0275template(1, MeetingDetailsComponent_div_22_div_17_div_5_div_1_Template, 2, 2, "div", 229)(2, MeetingDetailsComponent_div_22_div_17_div_5_div_2_Template, 2, 2, "div", 229);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "div", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_22_div_17_div_5_Template, 3, 2, "div", 227);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.attendee"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.attendeeToDelete.displayName || ctx_r0.attendeeToDelete.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete.organization || ctx_r0.attendeeToDelete.department);
  }
}
function MeetingDetailsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 209);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 210);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 211)(3, "h3", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 5);
    \u0275\u0275element(7, "line", 207)(8, "line", 208);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 214)(10, "div", 215);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 216);
    \u0275\u0275element(12, "path", 217)(13, "line", 218)(14, "line", 219);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 220);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_22_div_17_Template, 6, 3, "div", 221);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 222)(19, "button", 31);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 223);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 50);
    \u0275\u0275element(23, "polyline", 134)(24, "path", 135)(25, "line", 136)(26, "line", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee"), " ");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.delete_attendee_confirm"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.attendeeToDelete);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
var MeetingDetailsComponent = class _MeetingDetailsComponent {
  route;
  router;
  meetingsService;
  translationService;
  fb;
  meeting = null;
  loading = false;
  editing = false;
  saving = false;
  errorMessage = "";
  // Form for editing
  editForm;
  // Enums for template access
  MeetingLocationMode = MeetingLocationMode;
  MeetingType = MeetingType;
  MeetingStatus = MeetingStatus;
  AttendeeKind = AttendeeKind;
  AttendeeRole = AttendeeRole;
  // Attendees management
  showAddAttendeeForm = false;
  editingAttendee = null;
  users = [];
  attendeesForm;
  // Recommendations management
  showAddRecommendationForm = false;
  editingRecommendation = null;
  recommendationsForm;
  editingRecommendationId = null;
  // Minutes management
  showAddMinutesForm = false;
  editingMinutes = null;
  minutesForm;
  editingMinutesId = null;
  // Attachments management
  showAddAttachmentForm = false;
  attachmentsForm;
  selectedFile = null;
  // Delete modal
  showDeleteModal = false;
  recommendationToDelete = null;
  // Attachment delete modal
  showAttachmentDeleteModal = false;
  attachmentToDelete = null;
  // Edit attendance status modal
  showEditStatusModal = false;
  selectedAttendee = null;
  savingStatus = false;
  attendanceStatusForm;
  // Delete attendee modal
  showDeleteAttendeeModal = false;
  attendeeToDelete = null;
  // Signal for current location mode
  currentLocationMode = signal(MeetingLocationMode.InPerson, ...ngDevMode ? [{ debugName: "currentLocationMode" }] : []);
  // Computed values for showing/hiding fields
  showLocationText = computed(() => {
    const mode = this.currentLocationMode();
    return mode === MeetingLocationMode.InPerson || mode === MeetingLocationMode.Hybrid;
  }, ...ngDevMode ? [{ debugName: "showLocationText" }] : []);
  showOnlineUrl = computed(() => {
    const mode = this.currentLocationMode();
    return mode === MeetingLocationMode.Online || mode === MeetingLocationMode.Hybrid;
  }, ...ngDevMode ? [{ debugName: "showOnlineUrl" }] : []);
  constructor(route, router, meetingsService, translationService, fb) {
    this.route = route;
    this.router = router;
    this.meetingsService = meetingsService;
    this.translationService = translationService;
    this.fb = fb;
    this.editForm = this.fb.group({
      title: ["", [Validators.required]],
      agenda: ["", [Validators.required]],
      type: [MeetingType.Internal, [Validators.required]],
      locationMode: [MeetingLocationMode.InPerson, [Validators.required]],
      startAt: ["", [Validators.required]],
      endAt: ["", [Validators.required]],
      locationText: [""],
      onlineUrl: [""]
    });
    this.attendeesForm = this.fb.group({
      kind: [AttendeeKind.Internal, [Validators.required]],
      userId: [""],
      displayName: [""],
      organization: [""],
      jobTitle: [""],
      department: [""],
      email: [""],
      role: [AttendeeRole.Required, [Validators.required]],
      notes: [""]
    });
    this.recommendationsForm = this.fb.group({
      text: ["", [Validators.required]]
    });
    this.minutesForm = this.fb.group({
      notes: [""],
      summaryAI: [""]
    });
    this.attachmentsForm = this.fb.group({
      description: ["", [Validators.required]],
      documentSource: [0, [Validators.required]]
      // DocumentSource.Incoming
    });
    this.attendanceStatusForm = this.fb.group({
      attendanceStatus: [0, [Validators.required]],
      notes: [""]
    });
  }
  ngOnInit() {
    this.loadMeetingDetails();
    this.editForm.get("locationMode")?.valueChanges.subscribe((mode) => {
      const numericMode = typeof mode === "string" ? parseInt(mode, 10) : mode;
      this.updateLocationValidators(numericMode);
    });
    this.attendeesForm.get("kind")?.valueChanges.subscribe((kind) => {
      const numericKind = typeof kind === "string" ? parseInt(kind, 10) : kind;
      this.updateAttendeeValidators(numericKind);
    });
  }
  loadMeetingDetails() {
    const meetingId = this.route.snapshot.paramMap.get("id");
    if (!meetingId) {
      this.errorMessage = "Meeting ID not found";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.meetingsService.getMeetingById(+meetingId).subscribe({
      next: (response) => {
        if (response.success) {
          this.meeting = response.data;
          this.populateForm();
        } else {
          this.errorMessage = response.message || "Failed to load meeting details";
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading meeting details:", error);
        this.errorMessage = "Failed to load meeting details";
        this.loading = false;
      }
    });
  }
  populateForm() {
    if (!this.meeting)
      return;
    this.editForm.patchValue({
      title: this.meeting.title,
      agenda: this.meeting.agenda,
      type: this.meeting.type,
      locationMode: this.meeting.locationMode,
      startAt: this.formatDateTimeForInput(this.meeting.startAt),
      endAt: this.formatDateTimeForInput(this.meeting.endAt),
      locationText: this.meeting.locationText || "",
      onlineUrl: this.meeting.onlineUrl || ""
    });
    this.updateLocationValidators(this.meeting.locationMode);
  }
  formatDateTimeForInput(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  updateLocationValidators(mode) {
    this.currentLocationMode.set(mode);
    const locationTextControl = this.editForm.get("locationText");
    const onlineUrlControl = this.editForm.get("onlineUrl");
    locationTextControl?.clearValidators();
    onlineUrlControl?.clearValidators();
    switch (mode) {
      case MeetingLocationMode.InPerson:
        locationTextControl?.setValidators([Validators.required]);
        onlineUrlControl?.setValue("");
        break;
      case MeetingLocationMode.Online:
        onlineUrlControl?.setValidators([Validators.required]);
        locationTextControl?.setValue("");
        break;
      case MeetingLocationMode.Hybrid:
        locationTextControl?.setValidators([Validators.required]);
        onlineUrlControl?.setValidators([Validators.required]);
        break;
    }
    locationTextControl?.updateValueAndValidity();
    onlineUrlControl?.updateValueAndValidity();
  }
  startEdit() {
    this.editing = true;
    this.populateForm();
  }
  cancelEdit() {
    this.editing = false;
    this.errorMessage = "";
  }
  saveChanges() {
    if (this.editForm.invalid || !this.meeting) {
      this.markFormGroupTouched();
      return;
    }
    this.saving = true;
    this.errorMessage = "";
    const formValue = this.editForm.value;
    const updateRequest = {
      title: formValue.title,
      agenda: formValue.agenda,
      type: parseInt(formValue.type, 10),
      locationMode: parseInt(formValue.locationMode, 10),
      startAt: new Date(formValue.startAt).toISOString(),
      endAt: new Date(formValue.endAt).toISOString(),
      locationText: formValue.locationText || "",
      onlineUrl: formValue.onlineUrl || ""
    };
    this.meetingsService.updateMeeting(this.meeting.id, updateRequest).subscribe({
      next: (response) => {
        if (response.success) {
          this.meeting = response.data;
          this.editing = false;
          this.loadMeetingDetails();
        } else {
          this.errorMessage = response.message || "Failed to update meeting";
        }
        this.saving = false;
      },
      error: (error) => {
        console.error("Error updating meeting:", error);
        this.errorMessage = "Failed to update meeting";
        this.saving = false;
      }
    });
  }
  markFormGroupTouched(formGroup = this.editForm) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  goBack() {
    this.router.navigate(["/meetings"]);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  getLocationModeLabel(mode) {
    switch (mode) {
      case MeetingLocationMode.InPerson:
        return this.translate("meetings.in_person");
      case MeetingLocationMode.Online:
        return this.translate("meetings.online");
      case MeetingLocationMode.Hybrid:
        return this.translate("meetings.hybrid");
      default:
        return "";
    }
  }
  getMeetingTypeLabel(type) {
    switch (type) {
      case MeetingType.Internal:
        return this.translate("meetings.internal");
      case MeetingType.External:
        return this.translate("meetings.external");
      case MeetingType.Other:
        return this.translate("meetings.other");
      default:
        return "";
    }
  }
  getMeetingStatusLabel(status) {
    switch (status) {
      case MeetingStatus.Scheduled:
        return this.translate("meetings.scheduled");
      case MeetingStatus.InProgress:
        return this.translate("meetings.in_progress");
      case MeetingStatus.Done:
        return this.translate("meetings.done");
      case MeetingStatus.Cancelled:
        return this.translate("meetings.cancelled");
      default:
        return "";
    }
  }
  getAttendanceStatusLabel(status) {
    switch (status) {
      case 0:
        return this.translate("meetings.invited");
      case 1:
        return this.translate("meetings.accepted");
      case 2:
        return this.translate("meetings.declined");
      case 3:
        return this.translate("meetings.attended");
      case 4:
        return this.translate("meetings.absent");
      default:
        return "";
    }
  }
  getAttendeeRoleLabel(role) {
    switch (role) {
      case AttendeeRole.Required:
        return this.translate("meetings.required");
      case AttendeeRole.Optional:
        return this.translate("meetings.optional");
      case AttendeeRole.Speaker:
        return this.translate("meetings.speaker");
      default:
        return this.translate("meetings.required");
    }
  }
  getAttendeeKindLabel(kind) {
    switch (kind) {
      case AttendeeKind.Internal:
        return this.translate("meetings.internal");
      case AttendeeKind.External:
        return this.translate("meetings.external");
      default:
        return this.translate("meetings.internal");
    }
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }
  formatDateTime(dateString) {
    return new Date(dateString).toLocaleString();
  }
  hasValue(value) {
    return value !== null && value !== void 0 && value !== "";
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  // Attendees management methods
  loadUsers() {
    this.meetingsService.getUserNames().subscribe({
      next: (response) => {
        this.users = response.data || [];
      },
      error: (error) => {
        console.error("Error loading users:", error);
      }
    });
  }
  showAddAttendee() {
    console.log("showAddAttendee called");
    this.showAddAttendeeForm = true;
    this.editingAttendee = null;
    this.attendeesForm.reset({
      kind: AttendeeKind.Internal,
      role: AttendeeRole.Required
    });
    this.loadUsers();
    this.updateAttendeeValidators(AttendeeKind.Internal);
    console.log("Form values after showAddAttendee:", this.attendeesForm.value);
  }
  editAttendee(attendee) {
    this.editingAttendee = attendee;
    this.showAddAttendeeForm = true;
    this.loadUsers();
    this.attendeesForm.patchValue({
      kind: attendee.kind,
      userId: attendee.userId || "",
      displayName: attendee.displayName || "",
      organization: attendee.organization || "",
      jobTitle: attendee.jobTitle || "",
      department: attendee.department || "",
      email: attendee.email || "",
      role: attendee.role,
      notes: attendee.notes || ""
    });
    this.updateAttendeeValidators(attendee.kind);
  }
  cancelAttendeeForm() {
    this.showAddAttendeeForm = false;
    this.editingAttendee = null;
    this.attendeesForm.reset();
  }
  onAttendeeKindChange(event) {
    const kind = parseInt(event.target.value, 10);
    console.log("onAttendeeKindChange called with kind:", kind);
    this.updateAttendeeValidators(kind);
  }
  updateAttendeeValidators(kind) {
    console.log("updateAttendeeValidators called with kind:", kind);
    const userIdControl = this.attendeesForm.get("userId");
    const displayNameControl = this.attendeesForm.get("displayName");
    const organizationControl = this.attendeesForm.get("organization");
    const jobTitleControl = this.attendeesForm.get("jobTitle");
    const departmentControl = this.attendeesForm.get("department");
    const emailControl = this.attendeesForm.get("email");
    if (kind === AttendeeKind.Internal) {
      userIdControl?.setValidators([Validators.required]);
      displayNameControl?.clearValidators();
      organizationControl?.clearValidators();
      jobTitleControl?.clearValidators();
      departmentControl?.clearValidators();
      emailControl?.clearValidators();
      this.attendeesForm.patchValue({
        organization: ""
      });
    } else {
      userIdControl?.clearValidators();
      displayNameControl?.setValidators([Validators.required]);
      organizationControl?.setValidators([Validators.required]);
      jobTitleControl?.setValidators([Validators.required]);
      departmentControl?.setValidators([Validators.required]);
      emailControl?.setValidators([Validators.required, Validators.email]);
      this.attendeesForm.patchValue({
        userId: "",
        displayName: "",
        department: "",
        jobTitle: "",
        email: ""
      });
    }
    userIdControl?.updateValueAndValidity();
    displayNameControl?.updateValueAndValidity();
    organizationControl?.updateValueAndValidity();
    jobTitleControl?.updateValueAndValidity();
    departmentControl?.updateValueAndValidity();
    emailControl?.updateValueAndValidity();
    console.log("Form values after updateAttendeeValidators:", this.attendeesForm.value);
  }
  onUserSelect(event) {
    const target = event?.target;
    if (!target)
      return;
    const userId = target.value;
    if (userId) {
      const user = this.users.find((u) => u.id === userId);
      if (user) {
        console.log("Selected user:", user);
        this.attendeesForm.patchValue({
          userId: user.id,
          displayName: user.name,
          department: user.departmentName,
          jobTitle: user.jobTitle || "",
          email: user.email || ""
        });
        console.log("Form values after patch:", this.attendeesForm.value);
      }
    } else {
      this.attendeesForm.patchValue({
        userId: "",
        displayName: "",
        department: "",
        jobTitle: "",
        email: ""
      });
    }
  }
  saveAttendee() {
    if (this.attendeesForm.invalid || !this.meeting) {
      this.markFormGroupTouched(this.attendeesForm);
      return;
    }
    const formValue = this.attendeesForm.value;
    console.log("Form value before processing:", formValue);
    const attendeeData = this.buildAttendeeData(formValue);
    console.log("Attendee data to send:", attendeeData);
    if (this.editingAttendee) {
      this.meetingsService.updateAttendee(this.meeting.id, this.editingAttendee.id, attendeeData).subscribe({
        next: (response) => {
          if (response.success) {
            console.log("Attendee updated successfully:", response.data);
            this.loadMeetingDetails();
            this.cancelAttendeeForm();
          } else {
            console.error("Failed to update attendee:", response.message);
          }
        },
        error: (error) => {
          console.error("Error updating attendee:", error);
        }
      });
    } else {
      this.meetingsService.addAttendee(this.meeting.id, attendeeData).subscribe({
        next: (response) => {
          if (response.success) {
            console.log("Attendee added successfully:", response.data);
            this.loadMeetingDetails();
            this.cancelAttendeeForm();
          } else {
            console.error("Failed to add attendee:", response.message);
          }
        },
        error: (error) => {
          console.error("Error adding attendee:", error);
        }
      });
    }
  }
  buildAttendeeData(formValue) {
    const attendeeData = {
      kind: parseInt(formValue.kind, 10),
      role: parseInt(formValue.role, 10),
      notes: formValue.notes || ""
    };
    if (parseInt(formValue.kind, 10) === AttendeeKind.Internal) {
      attendeeData.userId = formValue.userId;
      attendeeData.displayName = formValue.displayName;
      attendeeData.department = formValue.department;
    } else {
      attendeeData.displayName = formValue.displayName;
      attendeeData.organization = formValue.organization;
      attendeeData.jobTitle = formValue.jobTitle;
      attendeeData.department = formValue.department;
      attendeeData.email = formValue.email;
    }
    return attendeeData;
  }
  deleteAttendee(attendee) {
    this.attendeeToDelete = attendee;
    this.showDeleteAttendeeModal = true;
  }
  confirmDeleteAttendee() {
    if (this.attendeeToDelete && this.meeting) {
      this.meetingsService.deleteAttendee(this.meeting.id, this.attendeeToDelete.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.closeDeleteAttendeeModal();
          } else {
            console.error("Failed to delete attendee:", response.message);
          }
        },
        error: (error) => {
          console.error("Error deleting attendee:", error);
        }
      });
    }
  }
  closeDeleteAttendeeModal() {
    this.showDeleteAttendeeModal = false;
    this.attendeeToDelete = null;
  }
  showInternalFields() {
    const kindValue = this.attendeesForm.get("kind")?.value;
    const result = kindValue === AttendeeKind.Internal || kindValue === 0 || kindValue === "0";
    return result;
  }
  showExternalFields() {
    const kindValue = this.attendeesForm.get("kind")?.value;
    const result = kindValue === AttendeeKind.External || kindValue === 1 || kindValue === "1";
    return result;
  }
  // Recommendations management methods
  showAddRecommendation() {
    this.showAddRecommendationForm = true;
    this.editingRecommendation = null;
    this.recommendationsForm.reset();
  }
  editRecommendation(recommendation) {
    this.editingRecommendationId = recommendation.id;
    this.editingRecommendation = recommendation;
  }
  cancelRecommendationEdit() {
    this.editingRecommendationId = null;
    this.editingRecommendation = null;
  }
  cancelRecommendationForm() {
    this.showAddRecommendationForm = false;
    this.editingRecommendation = null;
    this.editingRecommendationId = null;
    this.recommendationsForm.reset();
  }
  saveRecommendation() {
    if (this.recommendationsForm.invalid || !this.meeting) {
      this.markFormGroupTouched(this.recommendationsForm);
      return;
    }
    const formValue = this.recommendationsForm.value;
    const recommendationData = {
      text: formValue.text
    };
    if (this.editingRecommendation) {
      this.meetingsService.updateRecommendation(this.editingRecommendation.id, recommendationData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.cancelRecommendationForm();
          } else {
            console.error("Failed to update recommendation:", response.message);
          }
        },
        error: (error) => {
          console.error("Error updating recommendation:", error);
        }
      });
    } else {
      this.meetingsService.addRecommendation(this.meeting.id, recommendationData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.cancelRecommendationForm();
          } else {
            console.error("Failed to add recommendation:", response.message);
          }
        },
        error: (error) => {
          console.error("Error adding recommendation:", error);
        }
      });
    }
  }
  saveRecommendationInline(recommendation, newText) {
    if (!newText.trim()) {
      return;
    }
    const recommendationData = {
      text: newText.trim()
    };
    this.meetingsService.updateRecommendation(recommendation.id, recommendationData).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadMeetingDetails();
          this.cancelRecommendationEdit();
        } else {
          console.error("Failed to update recommendation:", response.message);
        }
      },
      error: (error) => {
        console.error("Error updating recommendation:", error);
      }
    });
  }
  isEditingRecommendation(recommendationId) {
    return this.editingRecommendationId === recommendationId;
  }
  deleteRecommendation(recommendation) {
    this.recommendationToDelete = recommendation;
    this.showDeleteModal = true;
  }
  confirmDeleteRecommendation() {
    if (this.recommendationToDelete) {
      this.meetingsService.deleteRecommendation(this.recommendationToDelete.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.closeDeleteModal();
          }
        },
        error: (error) => {
          console.error("Error deleting recommendation:", error);
        }
      });
    }
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
    this.recommendationToDelete = null;
  }
  // Minutes management methods
  showAddMinutes() {
    this.showAddMinutesForm = true;
    this.minutesForm.reset();
  }
  editMinutes() {
    if (this.meeting?.minutes) {
      this.editingMinutes = this.meeting.minutes;
      this.minutesForm.patchValue({
        notes: this.meeting.minutes.notes,
        summaryAI: this.meeting.minutes.summaryAI
      });
      this.showAddMinutesForm = true;
    }
  }
  cancelMinutesForm() {
    this.showAddMinutesForm = false;
    this.editingMinutes = null;
    this.minutesForm.reset();
  }
  saveMinutes() {
    if (this.minutesForm.valid && this.meeting) {
      const minutesData = this.minutesForm.value;
      if (this.editingMinutes) {
        this.meetingsService.updateMinutes(this.meeting.id, minutesData).subscribe({
          next: (response) => {
            if (response.success) {
              this.loadMeetingDetails();
              this.cancelMinutesForm();
            } else {
              console.error("Failed to update minutes:", response.message);
            }
          },
          error: (error) => {
            console.error("Error updating minutes:", error);
          }
        });
      } else {
        this.meetingsService.addMinutes(this.meeting.id, minutesData).subscribe({
          next: (response) => {
            if (response.success) {
              this.loadMeetingDetails();
              this.cancelMinutesForm();
            } else {
              console.error("Failed to add minutes:", response.message);
            }
          },
          error: (error) => {
            console.error("Error adding minutes:", error);
          }
        });
      }
    }
  }
  hasMinutes() {
    return this.meeting?.minutes !== null && this.meeting?.minutes !== void 0;
  }
  // Attachments management methods
  showAddAttachment() {
    this.showAddAttachmentForm = true;
    this.attachmentsForm.reset();
    this.selectedFile = null;
  }
  cancelAttachmentForm() {
    this.showAddAttachmentForm = false;
    this.attachmentsForm.reset();
    this.selectedFile = null;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  saveAttachment() {
    if (this.attachmentsForm.valid && this.selectedFile && this.meeting) {
      const attachmentData = {
        file: this.selectedFile,
        description: this.attachmentsForm.get("description")?.value,
        documentSource: this.attachmentsForm.get("documentSource")?.value
      };
      this.meetingsService.addAttachment(this.meeting.id, attachmentData).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.cancelAttachmentForm();
          } else {
            console.error("Failed to add attachment:", response.message);
          }
        },
        error: (error) => {
          console.error("Error adding attachment:", error);
        }
      });
    }
  }
  deleteAttachment(attachment) {
    this.attachmentToDelete = attachment;
    this.showAttachmentDeleteModal = true;
  }
  confirmDeleteAttachment() {
    if (this.attachmentToDelete && this.meeting) {
      this.meetingsService.deleteAttachment(this.meeting.id, this.attachmentToDelete.id).subscribe({
        next: (response) => {
          if (response.success) {
            this.loadMeetingDetails();
            this.closeAttachmentDeleteModal();
          } else {
            console.error("Failed to delete attachment:", response.message);
          }
        },
        error: (error) => {
          console.error("Error deleting attachment:", error);
        }
      });
    }
  }
  closeAttachmentDeleteModal() {
    this.showAttachmentDeleteModal = false;
    this.attachmentToDelete = null;
  }
  downloadAttachment(attachment) {
    const link = document.createElement("a");
    link.href = `${environment.apiBaseUrl}/Documents/${attachment.id}/download`;
    link.download = attachment.fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  getFileIcon(fileType) {
    const type = fileType.toLowerCase();
    if (type.includes("pdf"))
      return "\u{1F4C4}";
    if (type.includes("doc") || type.includes("docx"))
      return "\u{1F4DD}";
    if (type.includes("xls") || type.includes("xlsx"))
      return "\u{1F4CA}";
    if (type.includes("ppt") || type.includes("pptx"))
      return "\u{1F4FD}\uFE0F";
    if (type.includes("image") || type.includes("jpg") || type.includes("png") || type.includes("gif"))
      return "\u{1F5BC}\uFE0F";
    return "";
  }
  getDocumentSourceLabel(source) {
    const sourceMap = {
      0: "meetings.document_source.incoming",
      1: "meetings.document_source.outgoing",
      2: "meetings.document_source.internal"
    };
    const key = sourceMap[source] || "meetings.document_source.incoming";
    return this.translate(key);
  }
  // Edit attendance status methods
  editAttendeeStatus(attendee) {
    this.selectedAttendee = attendee;
    this.showEditStatusModal = true;
    this.attendanceStatusForm.patchValue({
      attendanceStatus: attendee.attendanceStatus,
      notes: attendee.notes || ""
    });
  }
  closeEditStatusModal() {
    this.showEditStatusModal = false;
    this.selectedAttendee = null;
    this.attendanceStatusForm.reset({
      attendanceStatus: 0,
      notes: ""
    });
  }
  saveAttendanceStatus() {
    if (this.attendanceStatusForm.invalid || !this.meeting || !this.selectedAttendee) {
      this.markFormGroupTouched(this.attendanceStatusForm);
      return;
    }
    this.savingStatus = true;
    const formValue = this.attendanceStatusForm.value;
    const statusUpdate = {
      attendanceStatus: parseInt(formValue.attendanceStatus, 10),
      notes: formValue.notes || ""
    };
    this.meetingsService.updateAttendeeStatus(this.meeting.id, this.selectedAttendee.id, statusUpdate).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadMeetingDetails();
          this.closeEditStatusModal();
        } else {
          console.error("Failed to update attendance status:", response.message);
        }
        this.savingStatus = false;
      },
      error: (error) => {
        console.error("Error updating attendance status:", error);
        this.savingStatus = false;
      }
    });
  }
  static \u0275fac = function MeetingDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MeetingsService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingDetailsComponent, selectors: [["app-meeting-details"]], decls: 23, vars: 16, consts: [["editTextarea", ""], [1, "meeting-details-container", "rounded-5"], [1, "header", "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "back-btn", "rtl", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["d", "M12 19l-7-7 7-7"], ["class", "loading-container", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "meeting-content", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-message"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "meeting-content"], [1, "meeting-header"], [1, "meeting-title-section"], [1, "header-top", "d-flex", "justify-content-between", "align-items-center"], [1, "meeting-title"], ["class", "edit-btn", 3, "click", 4, "ngIf"], [1, "meeting-status"], [1, "status-badge"], ["class", "meeting-info", 4, "ngIf"], ["class", "edit-form", 4, "ngIf"], [1, "section"], [1, "section-header"], [1, "section-title"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "attendee-form-section", 4, "ngIf"], ["class", "attendees-table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "recommendation-form-section", 4, "ngIf"], ["class", "attachments-list", 4, "ngIf"], ["class", "no-attachments", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "minutes-content", 4, "ngIf"], ["class", "no-minutes", 4, "ngIf"], ["class", "recommendations-list", 4, "ngIf"], [1, "metadata-grid"], [1, "metadata-item"], [1, "metadata-label"], [1, "metadata-value"], [1, "edit-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "meeting-info"], [1, "info-grid"], ["class", "info-item", 4, "ngIf"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["target", "_blank", 1, "link", 3, "href"], [1, "edit-form"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], [1, "required"], ["id", "title", "type", "text", "formControlName", "title", 1, "form-input"], ["for", "agenda", 1, "form-label"], ["id", "agenda", "formControlName", "agenda", "rows", "4", 1, "form-textarea"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", "dir", "ltr", 1, "form-select"], [3, "value"], ["for", "startAt", 1, "form-label"], ["id", "startAt", "type", "datetime-local", "formControlName", "startAt", 1, "form-input"], ["for", "endAt", 1, "form-label"], ["id", "endAt", "type", "datetime-local", "formControlName", "endAt", 1, "form-input"], ["for", "locationMode", 1, "form-label"], ["id", "locationMode", "formControlName", "locationMode", "dir", "ltr", 1, "form-select"], ["class", "form-group", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "save-btn", 3, "disabled"], [4, "ngIf"], ["for", "locationText", 1, "form-label"], ["id", "locationText", "type", "text", "formControlName", "locationText", 1, "form-input", 3, "placeholder"], ["for", "onlineUrl", 1, "form-label"], ["id", "onlineUrl", "type", "url", "formControlName", "onlineUrl", 1, "form-input", 3, "placeholder"], [1, "attendee-form-section"], [1, "form-section"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "form-row"], [1, "form-label"], ["formControlName", "kind", "dir", "ltr", 1, "form-select", 3, "change"], ["formControlName", "role", "dir", "ltr", 1, "form-select"], ["class", "internal-fields", 4, "ngIf"], ["class", "external-fields", 4, "ngIf"], ["formControlName", "notes", "rows", "2", 1, "form-textarea", 3, "placeholder"], ["type", "submit", 1, "save-btn"], [1, "internal-fields"], ["formControlName", "userId", "dir", "ltr", 1, "form-select", 3, "change"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "selected-user", 4, "ngIf"], [1, "selected-user"], ["type", "text", "formControlName", "displayName", "readonly", "", 1, "form-input"], ["type", "text", "formControlName", "department", "readonly", "", 1, "form-input"], [1, "external-fields"], ["type", "text", "formControlName", "displayName", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "organization", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "department", 1, "form-input", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], [1, "attendees-table-container"], [1, "table-responsive"], [1, "attendees-table"], ["class", "attendee-row", 4, "ngFor", "ngForOf"], [1, "attendee-row"], [1, "attendee-name-cell"], [1, "attendee-name"], ["class", "attendee-org", 4, "ngIf"], ["class", "attendee-job", 4, "ngIf"], [1, "status-cell"], [1, "kind-cell"], [1, "role-cell"], [1, "email-cell"], ["class", "email-text", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "department-cell"], ["class", "department-text", 4, "ngIf"], [1, "actions-cell"], [1, "action-buttons"], ["type", "button", 1, "btn-sm", "btn-primary", 3, "click", "title"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["type", "button", 1, "btn-sm", "btn-secondary", 3, "click", "title"], ["type", "button", 1, "btn-sm", "btn-danger", 3, "click", "title"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "attendee-org"], [1, "attendee-job"], [1, "email-text"], [1, "no-data"], [1, "department-text"], [1, "empty-state"], [1, "recommendation-form-section"], ["for", "file", 1, "form-label"], ["type", "file", "id", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif", "required", "", 1, "form-input", 3, "change"], ["class", "file-selected", 4, "ngIf"], ["for", "description", 1, "form-label"], ["type", "text", "id", "description", "formControlName", "description", 1, "form-input", 3, "placeholder"], ["for", "documentSource", 1, "form-label"], ["id", "documentSource", "formControlName", "documentSource", 1, "form-select", "ltr"], ["value", "0"], ["value", "1"], ["value", "2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "file-selected"], [1, "file-name"], [1, "file-size"], [1, "attachments-list"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "attachment-item"], [1, "attachment-header"], [1, "attachment-name"], [1, "attachment-meta"], [1, "meta-row"], [1, "attachment-type"], ["class", "attachment-source", 4, "ngIf"], ["class", "meta-row", 4, "ngIf"], [1, "attachment-date"], [1, "attachment-actions"], [1, "download-btn", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "delete-btn", 3, "click"], [1, "attachment-source"], [1, "attachment-description"], [1, "no-attachments"], [1, "no-attachments-text"], ["for", "notes", 1, "form-label"], ["id", "notes", "formControlName", "notes", "rows", "4", 1, "form-textarea", 3, "placeholder"], ["for", "summaryAI", 1, "form-label"], ["id", "summaryAI", "formControlName", "summaryAI", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "minutes-content"], [1, "minutes-notes"], [1, "notes-text"], ["class", "minutes-summary", 4, "ngIf"], [1, "minutes-summary"], [1, "summary-text"], [1, "no-minutes"], [1, "no-minutes-text"], ["formControlName", "text", "rows", "4", 1, "form-textarea", 3, "placeholder"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "recommendation-item"], [1, "recommendation-content"], ["class", "recommendation-display", 4, "ngIf"], ["class", "recommendation-edit", 4, "ngIf"], [1, "recommendation-display"], [1, "recommendation-text"], [1, "recommendation-actions"], [1, "recommendation-edit"], ["rows", "3", 1, "recommendation-edit-textarea", 3, "value", "placeholder"], [1, "recommendation-edit-actions"], ["type", "button", 1, "btn-sm", "btn-success", 3, "click", "title"], ["points", "20,6 9,17 4,12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "modal-close", 3, "click"], [1, "modal-body"], [1, "warning-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "modal-message"], ["class", "attendee-preview", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "attendee-preview"], [1, "preview-label"], [1, "preview-text"], ["class", "preview-details", 4, "ngIf"], [1, "preview-details"], ["class", "preview-detail", 4, "ngIf"], [1, "preview-detail"], ["class", "attendee-info", 4, "ngIf"], ["for", "attendanceStatus", 1, "form-label"], ["id", "attendanceStatus", "formControlName", "attendanceStatus", "dir", "ltr", 1, "form-select"], ["id", "notes", "formControlName", "notes", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "attendee-info"], ["class", "recommendation-preview", 4, "ngIf"], [1, "recommendation-preview"], ["class", "attachment-preview", 4, "ngIf"], [1, "attachment-preview"]], template: function MeetingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function MeetingDetailsComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6)(8, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, MeetingDetailsComponent_div_9_Template, 4, 1, "div", 8)(10, MeetingDetailsComponent_div_10_Template, 6, 1, "div", 9)(11, MeetingDetailsComponent_div_11_Template, 71, 33, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, MeetingDetailsComponent_div_12_Template, 28, 5, "div", 11)(13, MeetingDetailsComponent_div_13_Template, 39, 23, "div", 11)(14, MeetingDetailsComponent_div_14_Template, 28, 5, "div", 11)(15, MeetingDetailsComponent_div_15_Template, 28, 5, "div", 11)(16, MeetingDetailsComponent_div_16_Template, 28, 5, "div", 11)(17, MeetingDetailsComponent_div_17_Template, 39, 23, "div", 11)(18, MeetingDetailsComponent_div_18_Template, 28, 5, "div", 11)(19, MeetingDetailsComponent_div_19_Template, 28, 5, "div", 11)(20, MeetingDetailsComponent_div_20_Template, 28, 5, "div", 11)(21, MeetingDetailsComponent_div_21_Template, 39, 23, "div", 11)(22, MeetingDetailsComponent_div_22_Template, 28, 5, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("meetings.meeting_details"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.back"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.meeting && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditStatusModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditStatusModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAttachmentDeleteModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditStatusModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDeleteAttendeeModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.meeting-details-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  min-height: 100vh;\n  position: relative;\n}\n.meeting-details-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(21, 134, 56, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(9, 54, 95, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.meeting-details-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding: 20px 0;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background-color: #ffffff;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  box-shadow: var(--shadow-light);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--sidebar-bg);\n  border-color: var(--brand-green);\n  color: var(--brand-green);\n  transform: translateY(-1px);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  margin: 2rem 0;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(226, 232, 240, 0.3);\n  border-top: 4px solid var(--brand-green);\n  border-right: 4px solid var(--brand-blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  margin-bottom: 20px;\n  position: relative;\n}\n.loading-spinner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  border: 2px solid transparent;\n  border-top: 2px solid rgba(21, 134, 56, 0.2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 2s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin: 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.meeting-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  animation: _ngcontent-%COMP%_slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meeting-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  border-radius: 20px 20px 0 0;\n}\n.meeting-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      var(--brand-blue) 100%);\n  color: white;\n  padding: 32px;\n}\n.meeting-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.meeting-status[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-0[_ngcontent-%COMP%] {\n  background-color: rgba(16, 91, 231, 0.849);\n  color: white;\n}\n.status-1[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.status-2[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.status-3[_ngcontent-%COMP%] {\n  background-color: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-0[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-2[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-3[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n  border: 1px solid #fed7aa;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-lg);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.5);\n  transform: translateY(-1px);\n}\n.meeting-info[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.info-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.info-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.link[_ngcontent-%COMP%] {\n  color: var(--brand-green);\n  text-decoration: none;\n  font-weight: 500;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-blue);\n  text-decoration: underline;\n}\n.edit-form[_ngcontent-%COMP%] {\n  padding: 32px;\n  background-color: var(--sidebar-bg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin-bottom: 8px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid rgba(226, 232, 240, 0.8);\n  border-radius: 12px;\n  font-size: 16px;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 52px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-green);\n  box-shadow:\n    0 0 0 4px rgba(21, 134, 56, 0.15),\n    0 4px 8px rgba(21, 134, 56, 0.1),\n    inset 0 1px 2px rgba(255, 255, 255, 0.9);\n  transform: translateY(-1px);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #ef4444;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.save-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  min-width: 130px;\n  min-height: 52px;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.save-btn[_ngcontent-%COMP%]::before, \n.cancel-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.save-btn[_ngcontent-%COMP%]:hover::before, \n.cancel-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      #16a34a 100%);\n  color: white;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-blue) 0%,\n      #1d4ed8 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(21, 134, 56, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #9ca3af 0%,\n      #6b7280 100%);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  color: var(--text-secondary);\n  border: 2px solid rgba(226, 232, 240, 0.8);\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--sidebar-bg) 0%,\n      #f1f5f9 100%);\n  border-color: var(--brand-green);\n  color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.section[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-top: 1px solid var(--border-color);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.attendees-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.attendee-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 12px;\n  padding: 1rem;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.attendee-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-green);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transform: translateY(-3px);\n}\n.attendee-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attendee-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.attendee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n  gap: 0.5rem;\n}\n.attendee-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.attendee-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  flex: 1;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.375rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 8px;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  min-height: 2.5rem;\n  transition: all 0.2s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.detail-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-1px);\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  margin-bottom: 0.05rem;\n  line-height: 1;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 0.8rem;\n  font-weight: 500;\n  word-break: break-word;\n  line-height: 1.2;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.attendee-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.7rem;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 60px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f1f5f9;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-green);\n  color: white;\n  border-color: var(--brand-green);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.kind-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.15rem 0.3rem;\n  border-radius: 8px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n}\n.kind-badge.kind-internal[_ngcontent-%COMP%] {\n  background-color: var(--brand-green);\n  color: white;\n}\n.kind-badge.kind-external[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n  color: white;\n}\n.role-badge.role-speaker[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.role-badge.role-attendee[_ngcontent-%COMP%] {\n  background-color: #6366f1;\n  color: white;\n}\n.attachments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  gap: 16px;\n}\n.attachment-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.attachment-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attachment-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.attachment-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  word-break: break-word;\n  line-height: 1.4;\n  margin: 0;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.attachment-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--brand-blue);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      #16a34a 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(21, 134, 56, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.download-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.download-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-blue) 0%,\n      #1d4ed8 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.delete-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.delete-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n.minutes-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.minutes-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  border-radius: 16px 16px 0 0;\n}\n.minutes-notes[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.minutes-notes[_ngcontent-%COMP%]:last-child, \n.minutes-summary[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  font-size: 16px;\n}\n.minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: "\\1f916";\n  font-size: 16px;\n}\n.notes-text[_ngcontent-%COMP%], \n.summary-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.notes-text[_ngcontent-%COMP%]:hover, \n.summary-text[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.minutes-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.meta-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.05) 0%,\n      rgba(9, 54, 95, 0.03) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recommendation-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--brand-blue);\n  position: relative;\n  z-index: 1;\n}\n.metadata-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.metadata-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.metadata-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.metadata-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.metadata-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.metadata-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metadata-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.attendee-form-section[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.selected-user[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #f0fdf4;\n  border-radius: 4px;\n  border: 1px solid #bbf7d0;\n}\n.selected-user[_ngcontent-%COMP%]   .form-input[readonly][_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #374151;\n  cursor: default;\n  border: 1px solid #bbf7d0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]::before {\n  content: "\\1f4a1";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--brand-blue);\n  font-weight: 500;\n  margin: 0;\n  font-style: italic;\n}\n.form-section[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  background-color: white;\n  transition: var(--t-fast);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--brand-green);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: #f3f4f6;\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.save-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: var(--brand-green);\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-blue);\n}\n.internal-fields[_ngcontent-%COMP%], \n.external-fields[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.attendee-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n  }\n  .attendees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .attachment-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n    padding: 20px 18px;\n  }\n  .attachment-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .attachment-details[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 8px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n    width: 100%;\n    justify-content: stretch;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 44px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n    margin-top: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px 14px;\n    font-size: 13px;\n    min-height: 44px;\n    justify-content: center;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .back-btn[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .meeting-header[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .meeting-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n  .meeting-title-section[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .meeting-info[_ngcontent-%COMP%], \n   .edit-form[_ngcontent-%COMP%], \n   .section[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .attendees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .attendee-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .detail-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    min-height: auto;\n  }\n  .detail-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 2px;\n  }\n  .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: auto;\n    padding: 8px 12px;\n    font-size: 0.75rem;\n  }\n  .attendee-form-section[_ngcontent-%COMP%], \n   .recommendation-form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .empty-state[_ngcontent-%COMP%]::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .no-attachments[_ngcontent-%COMP%], \n   .no-minutes[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .no-attachments[_ngcontent-%COMP%]::before, \n   .no-minutes[_ngcontent-%COMP%]::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .no-attachments-text[_ngcontent-%COMP%], \n   .no-minutes-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 0.95rem;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n    margin-top: 16px;\n    padding-top: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px 16px;\n    min-width: auto;\n  }\n  .recommendation-edit-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 8px 12px;\n    min-width: auto;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    gap: 12px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .attachment-meta[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-top: 4px;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n    min-height: 42px;\n  }\n  .download-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n   .minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 14px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    margin-top: 16px;\n    align-items: stretch;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 14px;\n    min-height: 44px;\n    justify-content: center;\n    border-radius: 10px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 8px;\n  }\n  .metadata-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .metadata-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 16px;\n  }\n  .metadata-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .metadata-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n    word-break: break-word;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 16px;\n    max-width: calc(100% - 32px);\n    border-radius: 16px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 20px 0 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .meeting-header[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .meeting-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .meeting-info[_ngcontent-%COMP%], \n   .edit-form[_ngcontent-%COMP%], \n   .section[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .attendee-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .btn-sm[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 0.7rem;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n    gap: 10px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .attachment-meta[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .attachment-type[_ngcontent-%COMP%], \n   .attachment-source[_ngcontent-%COMP%], \n   .attachment-description[_ngcontent-%COMP%], \n   .attachment-date[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 3px 6px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 8px;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    flex: none;\n  }\n  .download-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 1.5;\n    margin-bottom: 12px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    width: 100%;\n    justify-content: center;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:first-child {\n    order: 1;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:last-child {\n    order: 2;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 13px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .metadata-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .metadata-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .metadata-value[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .empty-state[_ngcontent-%COMP%], \n   .no-attachments[_ngcontent-%COMP%], \n   .no-minutes[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.75rem;\n  }\n  .empty-state[_ngcontent-%COMP%]::before, \n   .no-attachments[_ngcontent-%COMP%]::before, \n   .no-minutes[_ngcontent-%COMP%]::before {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .no-attachments-text[_ngcontent-%COMP%], \n   .no-minutes-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 12px;\n    max-width: calc(100% - 24px);\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: both;\n}\n.section[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.section[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.section[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.section[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.section[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.section[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.section[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n}\n.section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.section[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--brand-blue);\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-green);\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.recommendation-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromLeft 0.5s ease-out;\n  animation-fill-mode: both;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 16px;\n  padding: 2rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--brand-green);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.08);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);\n  transform: translateY(-3px);\n}\n.recommendation-item[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.recommendation-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.recommendation-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-bottom: 1rem;\n  padding: 1.5rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 12px;\n  font-weight: 400;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-text[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.1);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.recommendation-edit-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  font-size: 1rem;\n  line-height: 1.6;\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1e293b;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(59, 130, 246, 0.2);\n  transform: translateY(-1px);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: var(--brand-green);\n  color: white;\n  box-shadow: 0 4px 14px rgba(21, 134, 56, 0.3);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  background: var(--brand-blue);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(9, 54, 95, 0.4);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: var(--brand-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(9, 54, 95, 0.3);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.4);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  max-width: 350px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  margin-bottom: 16px;\n  font-size: 32px;\n}\n.modal-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 16px;\n  line-height: 1.4;\n}\n.recommendation-preview[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 12px;\n  text-align: left;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n.preview-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.4;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px 20px 20px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  min-width: 80px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #4b5563;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.minutes-display[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.minutes-content[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.minutes-notes[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%], \n.minutes-attachments[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.minutes-notes[_ngcontent-%COMP%]:last-child, \n.minutes-summary[_ngcontent-%COMP%]:last-child, \n.minutes-attachments[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.minutes-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin: 0 0 0.75rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  font-size: 0.875rem;\n}\n.minutes-summary[_ngcontent-%COMP%]   .minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f916";\n}\n.minutes-attachments[_ngcontent-%COMP%]   .minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f4ce";\n}\n.minutes-text[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  font-weight: 400;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.no-minutes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n}\n.no-minutes-text[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  font-size: 1rem;\n  margin: 0;\n  font-style: italic;\n}\n.file-selected[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  border-radius: 12px;\n  border: 1px solid rgba(21, 134, 56, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.file-selected[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n}\n.file-selected[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.08) 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.15);\n}\n.file-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-blue);\n  display: block;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n}\n.attachment-item[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.08);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.attachment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n.attachment-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(21, 134, 56, 0.1);\n  border-radius: 8px;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-blue);\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: var(--brand-green);\n}\n.attachment-type[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.attachment-source[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(21, 134, 56, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  color: var(--brand-blue);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  font-size: 12px;\n}\n.attachment-description[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-secondary);\n  font-size: 12px;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(107, 114, 128, 0.2);\n}\n.attachment-date[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  font-size: 12px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.attachment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n  margin-top: 8px;\n}\n.download-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.download-btn[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.1);\n  color: var(--brand-green);\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.2);\n  transform: translateY(-1px);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.2);\n  transform: translateY(-1px);\n}\n.no-attachments[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-attachments[_ngcontent-%COMP%]::before {\n  content: "\\1f4ce";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-attachments-text[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.no-minutes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-minutes[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-minutes-text[_ngcontent-%COMP%] {\n  color: var(--brand-blue);\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.attachment-preview[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.preview-text[_ngcontent-%COMP%] {\n  color: var(--brand-green);\n  font-size: 0.875rem;\n  word-break: break-word;\n}\n.recommendation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.5);\n  flex-wrap: wrap;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 110px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(59, 130, 246, 0.5);\n  outline-offset: 2px;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: var(--brand-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(9, 54, 95, 0.3);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--brand-green);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.4);\n  transform: translateY(-2px);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);\n  transform: translateY(-2px);\n}\n.attendee-info[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.attendee-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n}\n.attendee-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.attendees-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-top: 20px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.attendees-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.attendees-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.attendee-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.attendee-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.attendee-name-cell[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.attendee-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.attendee-org[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 2px;\n}\n.attendee-job[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.status-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 100px;\n}\n.kind-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 80px;\n}\n.role-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 80px;\n}\n.email-cell[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.email-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n  word-break: break-all;\n}\n.department-cell[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.department-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n}\n.no-data[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 120px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #3b82f6;\n  color: white;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #2563eb;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6b7280;\n  color: white;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #4b5563;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-align: center;\n  min-width: 60px;\n}\n.status-0[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-2[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.status-3[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.status-4[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.kind-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.kind-internal[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.kind-external[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.role-speaker[_ngcontent-%COMP%] {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.role-attendee[_ngcontent-%COMP%] {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n@media (max-width: 1024px) {\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .attendee-name-cell[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n  .email-cell[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n}\n@media (max-width: 768px) {\n  .attendees-table-container[_ngcontent-%COMP%] {\n    margin: 0 -16px;\n    border-radius: 0;\n  }\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 6px;\n    font-size: 0.75rem;\n  }\n  .attendee-name-cell[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .status-cell[_ngcontent-%COMP%], \n   .kind-cell[_ngcontent-%COMP%], \n   .role-cell[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n  .email-cell[_ngcontent-%COMP%], \n   .department-cell[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .actions-cell[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n}\n@media (max-width: 640px) {\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), \n   .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    display: none;\n  }\n}\n.attendee-preview[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.preview-text[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.preview-details[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.preview-detail[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=meeting-details.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-meeting-details", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="meeting-details-container rounded-5">\r
  <!-- Header -->\r
  <div class="header d-flex justify-content-between align-items-center">\r
    <h1 class="page-title">{{ translate("meetings.meeting_details") }}</h1>\r
    <button class="back-btn rtl" (click)="goBack()">\r
      {{ translate("common.back") }}\r
      <svg\r
        width="20"\r
        height="20"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <path d="M19 12H5"></path>\r
        <path d="M12 19l-7-7 7-7"></path>\r
      </svg>\r
    </button>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate("common.loading") }}</p>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div *ngIf="errorMessage" class="error-message">\r
    <svg\r
      width="20"\r
      height="20"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="2"\r
    >\r
      <circle cx="12" cy="12" r="10"></circle>\r
      <line x1="15" y1="9" x2="9" y2="15"></line>\r
      <line x1="9" y1="9" x2="15" y2="15"></line>\r
    </svg>\r
    {{ errorMessage }}\r
  </div>\r
\r
  <!-- Meeting Details -->\r
  <div *ngIf="meeting && !loading" class="meeting-content">\r
    <!-- Meeting Header -->\r
    <div class="meeting-header">\r
      <div class="meeting-title-section">\r
        <div\r
          class="header-top d-flex justify-content-between align-items-center"\r
        >\r
          <h2 class="meeting-title">{{ meeting.title }}</h2>\r
          <button *ngIf="!editing" class="edit-btn" (click)="startEdit()">\r
            <svg\r
              width="16"\r
              height="16"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              stroke="currentColor"\r
              stroke-width="2"\r
            >\r
              <path\r
                d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
              ></path>\r
              <path\r
                d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
              ></path>\r
            </svg>\r
            {{ translate("common.edit") }}\r
          </button>\r
        </div>\r
\r
        <div class="meeting-status">\r
          <span class="status-badge" [class]="'status-' + meeting.status">\r
            {{ getMeetingStatusLabel(meeting.status) }}\r
          </span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Meeting Information -->\r
    <div class="meeting-info" *ngIf="!editing">\r
      <div class="info-grid">\r
        <!-- Agenda -->\r
        <div class="info-item" *ngIf="meeting.agenda">\r
          <div class="info-label">{{ translate("meetings.agenda") }}</div>\r
          <div class="info-value">{{ meeting.agenda }}</div>\r
        </div>\r
\r
        <!-- Type -->\r
        <div class="info-item">\r
          <div class="info-label">{{ translate("meetings.types") }}</div>\r
          <div class="info-value">\r
            {{ getMeetingTypeLabel(meeting.type) }}\r
          </div>\r
        </div>\r
\r
        <!-- Organizer -->\r
        <div class="info-item">\r
          <div class="info-label">{{ translate("meetings.organizer") }}</div>\r
          <div class="info-value">\r
            {{ meeting.organizerName || "N/A" }}\r
          </div>\r
        </div>\r
\r
        <!-- Start Time -->\r
        <div class="info-item">\r
          <div class="info-label">{{ translate("meetings.start_time") }}</div>\r
          <div class="info-value">\r
            {{ formatDateTime(meeting.startAt) }}\r
          </div>\r
        </div>\r
\r
        <!-- End Time -->\r
        <div class="info-item">\r
          <div class="info-label">{{ translate("meetings.end_time") }}</div>\r
          <div class="info-value">\r
            {{ formatDateTime(meeting.endAt) }}\r
          </div>\r
        </div>\r
\r
        <!-- Location Mode -->\r
        <div class="info-item">\r
          <div class="info-label">{{ translate("meetings.locations") }}</div>\r
          <div class="info-value">\r
            {{ getLocationModeLabel(meeting.locationMode) }}\r
          </div>\r
        </div>\r
\r
        <!-- Location Text -->\r
        <div class="info-item" *ngIf="meeting.locationText">\r
          <div class="info-label">\r
            {{ translate("meetings.location_text") }}\r
          </div>\r
          <div class="info-value">{{ meeting.locationText }}</div>\r
        </div>\r
\r
        <!-- Online URL -->\r
        <div class="info-item" *ngIf="meeting.onlineUrl">\r
          <div class="info-label">{{ translate("meetings.online_url") }}</div>\r
          <div class="info-value">\r
            <a [href]="meeting.onlineUrl" target="_blank" class="link">\r
              {{ meeting.onlineUrl }}\r
            </a>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Edit Form -->\r
    <div class="edit-form" *ngIf="editing">\r
      <form [formGroup]="editForm" (ngSubmit)="saveChanges()">\r
        <!-- Title -->\r
        <div class="form-group">\r
          <label for="title" class="form-label">\r
            {{ translate("meetings.title") }} <span class="required">*</span>\r
          </label>\r
          <input\r
            id="title"\r
            type="text"\r
            formControlName="title"\r
            class="form-input"\r
            [class.error]="\r
              editForm.get('title')?.invalid && editForm.get('title')?.touched\r
            "\r
          />\r
          <div\r
            *ngIf="\r
              editForm.get('title')?.invalid && editForm.get('title')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('title')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Agenda -->\r
        <div class="form-group">\r
          <label for="agenda" class="form-label">\r
            {{ translate("meetings.agenda") }} <span class="required">*</span>\r
          </label>\r
          <textarea\r
            id="agenda"\r
            formControlName="agenda"\r
            class="form-textarea"\r
            rows="4"\r
            [class.error]="\r
              editForm.get('agenda')?.invalid && editForm.get('agenda')?.touched\r
            "\r
          ></textarea>\r
          <div\r
            *ngIf="\r
              editForm.get('agenda')?.invalid && editForm.get('agenda')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('agenda')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Type -->\r
        <div class="form-group">\r
          <label for="type" class="form-label">\r
            {{ translate("meetings.type") }} <span class="required">*</span>\r
          </label>\r
          <select\r
            id="type"\r
            formControlName="type"\r
            class="form-select"\r
            dir="ltr"\r
            [class.error]="\r
              editForm.get('type')?.invalid && editForm.get('type')?.touched\r
            "\r
          >\r
            <option [value]="MeetingType.Internal">\r
              {{ getMeetingTypeLabel(MeetingType.Internal) }}\r
            </option>\r
            <option [value]="MeetingType.External">\r
              {{ getMeetingTypeLabel(MeetingType.External) }}\r
            </option>\r
            <option [value]="MeetingType.Other">\r
              {{ getMeetingTypeLabel(MeetingType.Other) }}\r
            </option>\r
          </select>\r
          <div\r
            *ngIf="\r
              editForm.get('type')?.invalid && editForm.get('type')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('type')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Start Time -->\r
        <div class="form-group">\r
          <label for="startAt" class="form-label">\r
            {{ translate("meetings.start_time") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            id="startAt"\r
            type="datetime-local"\r
            formControlName="startAt"\r
            class="form-input"\r
            [class.error]="\r
              editForm.get('startAt')?.invalid &&\r
              editForm.get('startAt')?.touched\r
            "\r
          />\r
          <div\r
            *ngIf="\r
              editForm.get('startAt')?.invalid &&\r
              editForm.get('startAt')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('startAt')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- End Time -->\r
        <div class="form-group">\r
          <label for="endAt" class="form-label">\r
            {{ translate("meetings.end_time") }} <span class="required">*</span>\r
          </label>\r
          <input\r
            id="endAt"\r
            type="datetime-local"\r
            formControlName="endAt"\r
            class="form-input"\r
            [class.error]="\r
              editForm.get('endAt')?.invalid && editForm.get('endAt')?.touched\r
            "\r
          />\r
          <div\r
            *ngIf="\r
              editForm.get('endAt')?.invalid && editForm.get('endAt')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('endAt')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Location Mode -->\r
        <div class="form-group">\r
          <label for="locationMode" class="form-label">\r
            {{ translate("meetings.locations") }}\r
            <span class="required">*</span>\r
          </label>\r
          <select\r
            id="locationMode"\r
            formControlName="locationMode"\r
            class="form-select"\r
            dir="ltr"\r
            [class.error]="\r
              editForm.get('locationMode')?.invalid &&\r
              editForm.get('locationMode')?.touched\r
            "\r
          >\r
            <option [value]="MeetingLocationMode.InPerson">\r
              {{ getLocationModeLabel(MeetingLocationMode.InPerson) }}\r
            </option>\r
            <option [value]="MeetingLocationMode.Online">\r
              {{ getLocationModeLabel(MeetingLocationMode.Online) }}\r
            </option>\r
            <option [value]="MeetingLocationMode.Hybrid">\r
              {{ getLocationModeLabel(MeetingLocationMode.Hybrid) }}\r
            </option>\r
          </select>\r
          <div\r
            *ngIf="\r
              editForm.get('locationMode')?.invalid &&\r
              editForm.get('locationMode')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('locationMode')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Location Text (conditional) -->\r
        <div class="form-group" *ngIf="showLocationText()">\r
          <label for="locationText" class="form-label">\r
            {{ translate("meetings.location_text") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            id="locationText"\r
            type="text"\r
            formControlName="locationText"\r
            class="form-input"\r
            [placeholder]="translate('meetings.location_placeholder')"\r
            [class.error]="\r
              editForm.get('locationText')?.invalid &&\r
              editForm.get('locationText')?.touched\r
            "\r
          />\r
          <div\r
            *ngIf="\r
              editForm.get('locationText')?.invalid &&\r
              editForm.get('locationText')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('locationText')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Online URL (conditional) -->\r
        <div class="form-group" *ngIf="showOnlineUrl()">\r
          <label for="onlineUrl" class="form-label">\r
            {{ translate("meetings.online_url") }}\r
            <span class="required">*</span>\r
          </label>\r
          <input\r
            id="onlineUrl"\r
            type="url"\r
            formControlName="onlineUrl"\r
            class="form-input"\r
            [placeholder]="translate('meetings.online_url_placeholder')"\r
            [class.error]="\r
              editForm.get('onlineUrl')?.invalid &&\r
              editForm.get('onlineUrl')?.touched\r
            "\r
          />\r
          <div\r
            *ngIf="\r
              editForm.get('onlineUrl')?.invalid &&\r
              editForm.get('onlineUrl')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span *ngIf="editForm.get('onlineUrl')?.errors?.['required']">\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="form-actions">\r
          <button type="button" class="cancel-btn" (click)="cancelEdit()">\r
            {{ translate("common.cancel") }}\r
          </button>\r
          <button\r
            type="submit"\r
            class="save-btn"\r
            [disabled]="editForm.invalid || saving"\r
          >\r
            <span *ngIf="saving">{{ translate("common.saving") }}</span>\r
            <span *ngIf="!saving">{{ translate("common.save") }}</span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
\r
    <!-- Attendees Section -->\r
    <div class="section">\r
      <div class="section-header">\r
        <h3 class="section-title">{{ translate("meetings.attendees") }}</h3>\r
        <button\r
          type="button"\r
          (click)="showAddAttendee()"\r
          class="btn btn-secondary"\r
        >\r
          <svg\r
            class="btn-icon"\r
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
          {{ translate("Add-Meeting.add_attendee") }}\r
        </button>\r
      </div>\r
\r
      <!-- Add/Edit Attendee Form -->\r
      <div *ngIf="showAddAttendeeForm" class="attendee-form-section">\r
        <div class="form-section">\r
          <div class="section-header">\r
            <h4>\r
              {{\r
                editingAttendee\r
                  ? translate("common.edit")\r
                  : translate("Add-Meeting.add_attendee")\r
              }}\r
            </h4>\r
            <button\r
              type="button"\r
              (click)="cancelAttendeeForm()"\r
              class="btn btn-secondary btn-sm"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
\r
          <form [formGroup]="attendeesForm" (ngSubmit)="saveAttendee()">\r
            <div class="form-row">\r
              <!-- Attendee Kind -->\r
              <div class="form-group">\r
                <label class="form-label">{{\r
                  translate("Add-Meeting.attendee_kind")\r
                }}</label>\r
                <select\r
                  formControlName="kind"\r
                  class="form-select"\r
                  (change)="onAttendeeKindChange($event)"\r
                  dir="ltr"\r
                >\r
                  <option [value]="AttendeeKind.Internal">\r
                    {{ getAttendeeKindLabel(AttendeeKind.Internal) }}\r
                  </option>\r
                  <option [value]="AttendeeKind.External">\r
                    {{ getAttendeeKindLabel(AttendeeKind.External) }}\r
                  </option>\r
                </select>\r
              </div>\r
\r
              <!-- Attendee Role -->\r
              <div class="form-group">\r
                <label class="form-label">{{\r
                  translate("Add-Meeting.attendee_role")\r
                }}</label>\r
                <select formControlName="role" class="form-select" dir="ltr">\r
                  <option [value]="AttendeeRole.Required">\r
                    {{ getAttendeeRoleLabel(AttendeeRole.Required) }}\r
                  </option>\r
                  <option [value]="AttendeeRole.Optional">\r
                    {{ getAttendeeRoleLabel(AttendeeRole.Optional) }}\r
                  </option>\r
                  <option [value]="AttendeeRole.Speaker">\r
                    {{ getAttendeeRoleLabel(AttendeeRole.Speaker) }}\r
                  </option>\r
                </select>\r
              </div>\r
            </div>\r
\r
            <!-- Internal Attendee Fields -->\r
            <div *ngIf="showInternalFields()" class="internal-fields">\r
              <div class="form-group">\r
                <label class="form-label">{{\r
                  translate("Add-Meeting.select_user")\r
                }}</label>\r
                <select\r
                  formControlName="userId"\r
                  (change)="onUserSelect($event)"\r
                  class="form-select"\r
                  dir="ltr"\r
                  [class.error]="\r
                    attendeesForm.get('userId')?.invalid &&\r
                    attendeesForm.get('userId')?.touched\r
                  "\r
                >\r
                  <option value="" selected>\r
                    {{ translate("Add-Meeting.select_user_placeholder") }}\r
                  </option>\r
                  <option *ngFor="let user of users" [value]="user.id">\r
                    {{ user.name }} - {{ user.departmentName }}\r
                  </option>\r
                </select>\r
\r
                <!-- Selected User Display -->\r
                <div\r
                  *ngIf="attendeesForm.get('userId')?.value"\r
                  class="selected-user"\r
                >\r
                  <div class="form-row">\r
                    <div class="form-group">\r
                      <label class="form-label">{{\r
                        translate("Add-Meeting.display_name")\r
                      }}</label>\r
                      <input\r
                        type="text"\r
                        formControlName="displayName"\r
                        class="form-input"\r
                        readonly\r
                        [class.error]="\r
                          attendeesForm.get('displayName')?.invalid &&\r
                          attendeesForm.get('displayName')?.touched\r
                        "\r
                      />\r
                    </div>\r
\r
                    <div class="form-group">\r
                      <label class="form-label">{{\r
                        translate("meetings.department")\r
                      }}</label>\r
                      <input\r
                        type="text"\r
                        formControlName="department"\r
                        class="form-input"\r
                        readonly\r
                        [class.error]="\r
                          attendeesForm.get('department')?.invalid &&\r
                          attendeesForm.get('department')?.touched\r
                        "\r
                      />\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- External Attendee Fields -->\r
            <div *ngIf="showExternalFields()" class="external-fields">\r
              <div class="form-row">\r
                <div class="form-group">\r
                  <label class="form-label">{{\r
                    translate("Add-Meeting.display_name")\r
                  }}</label>\r
                  <input\r
                    type="text"\r
                    formControlName="displayName"\r
                    [placeholder]="\r
                      translate('Add-Meeting.display_name_placeholder')\r
                    "\r
                    class="form-input"\r
                    [class.error]="\r
                      attendeesForm.get('displayName')?.invalid &&\r
                      attendeesForm.get('displayName')?.touched\r
                    "\r
                  />\r
                </div>\r
\r
                <div class="form-group">\r
                  <label class="form-label">{{\r
                    translate("Add-Meeting.organization")\r
                  }}</label>\r
                  <input\r
                    type="text"\r
                    formControlName="organization"\r
                    [placeholder]="\r
                      translate('Add-Meeting.organization_placeholder')\r
                    "\r
                    class="form-input"\r
                  />\r
                </div>\r
              </div>\r
\r
              <div class="form-row">\r
                <div class="form-group">\r
                  <label class="form-label">{{\r
                    translate("Add-Meeting.job_title")\r
                  }}</label>\r
                  <input\r
                    type="text"\r
                    formControlName="jobTitle"\r
                    [placeholder]="\r
                      translate('Add-Meeting.job_title_placeholder')\r
                    "\r
                    class="form-input"\r
                  />\r
                </div>\r
\r
                <div class="form-group">\r
                  <label class="form-label">{{\r
                    translate("meetings.department")\r
                  }}</label>\r
                  <input\r
                    type="text"\r
                    formControlName="department"\r
                    [placeholder]="\r
                      translate('Add-Meeting.department_placeholder')\r
                    "\r
                    class="form-input"\r
                  />\r
                </div>\r
              </div>\r
\r
              <div class="form-group">\r
                <label class="form-label">{{\r
                  translate("meetings.email")\r
                }}</label>\r
                <input\r
                  type="email"\r
                  formControlName="email"\r
                  [placeholder]="translate('Add-Meeting.email_placeholder')"\r
                  class="form-input"\r
                />\r
              </div>\r
            </div>\r
\r
            <!-- Notes -->\r
            <div class="form-group">\r
              <label class="form-label">{{\r
                translate("Add-Meeting.notes")\r
              }}</label>\r
              <textarea\r
                formControlName="notes"\r
                [placeholder]="translate('Add-Meeting.notes_placeholder')"\r
                class="form-textarea"\r
                rows="2"\r
              ></textarea>\r
            </div>\r
\r
            <div class="form-actions">\r
              <button\r
                type="button"\r
                class="cancel-btn"\r
                (click)="cancelAttendeeForm()"\r
              >\r
                {{ translate("common.cancel") }}\r
              </button>\r
              <button type="submit" class="save-btn">\r
                {{\r
                  editingAttendee\r
                    ? translate("common.save")\r
                    : translate("Add-Meeting.add_attendee")\r
                }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Attendees Table -->\r
      <div\r
        *ngIf="meeting.attendees && meeting.attendees.length > 0"\r
        class="attendees-table-container"\r
      >\r
        <div class="table-responsive">\r
          <table class="attendees-table">\r
            <thead>\r
              <tr>\r
                <th>{{ translate("Add-Meeting.attendee") }}</th>\r
                <th>{{ translate("meetings.attendance_status") }}</th>\r
                <th>{{ translate("meetings.attendee_kind") }}</th>\r
                <th>{{ translate("meetings.attendee_role") }}</th>\r
                <th>{{ translate("common.email") }}</th>\r
                <th>{{ translate("employees.department") }}</th>\r
                <th>{{ translate("common.actions") }}</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr\r
                *ngFor="let attendee of meeting.attendees"\r
                class="attendee-row"\r
              >\r
                <!-- Name -->\r
                <td class="attendee-name-cell">\r
                  <div class="attendee-name">\r
                    {{ attendee.displayName || attendee.userName || "N/A" }}\r
                  </div>\r
                  <div class="attendee-org" *ngIf="attendee.organization">\r
                    {{ attendee.organization }}\r
                  </div>\r
                  <div class="attendee-job" *ngIf="attendee.jobTitle">\r
                    {{ attendee.jobTitle }}\r
                  </div>\r
                </td>\r
\r
                <!-- Status -->\r
                <td class="status-cell">\r
                  <span\r
                    class="status-badge"\r
                    [class]="'status-' + attendee.attendanceStatus"\r
                  >\r
                    {{ getAttendanceStatusLabel(attendee.attendanceStatus) }}\r
                  </span>\r
                </td>\r
\r
                <!-- Kind -->\r
                <td class="kind-cell">\r
                  <span\r
                    [class]="\r
                      'kind-badge kind-' +\r
                      (attendee.kind === 0 ? 'internal' : 'external')\r
                    "\r
                  >\r
                    {{ getAttendeeKindLabel(attendee.kind) }}\r
                  </span>\r
                </td>\r
\r
                <!-- Role -->\r
                <td class="role-cell">\r
                  <span\r
                    [class]="\r
                      'role-badge role-' +\r
                      (attendee.role === 0 ? 'speaker' : 'attendee')\r
                    "\r
                  >\r
                    {{ getAttendeeRoleLabel(attendee.role) }}\r
                  </span>\r
                </td>\r
\r
                <!-- Email -->\r
                <td class="email-cell">\r
                  <span *ngIf="attendee.email" class="email-text">\r
                    {{ attendee.email }}\r
                  </span>\r
                  <span *ngIf="!attendee.email" class="no-data">-</span>\r
                </td>\r
\r
                <!-- Department -->\r
                <td class="department-cell">\r
                  <span *ngIf="attendee.department" class="department-text">\r
                    {{ attendee.department }}\r
                  </span>\r
                  <span *ngIf="!attendee.department" class="no-data">-</span>\r
                </td>\r
\r
                <!-- Actions -->\r
                <td class="actions-cell">\r
                  <div class="action-buttons">\r
                    <button\r
                      type="button"\r
                      (click)="editAttendeeStatus(attendee)"\r
                      class="btn-sm btn-primary"\r
                      [title]="translate('meetings.edit_attendance_status')"\r
                    >\r
                      <svg\r
                        width="14"\r
                        height="14"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                      >\r
                        <path\r
                          d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
                        ></path>\r
                        <path\r
                          d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
                        ></path>\r
                      </svg>\r
                    </button>\r
                    <button\r
                      type="button"\r
                      (click)="editAttendee(attendee)"\r
                      class="btn-sm btn-secondary"\r
                      [title]="translate('common.edit')"\r
                    >\r
                      <svg\r
                        width="14"\r
                        height="14"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                      >\r
                        <path\r
                          d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
                        ></path>\r
                        <path\r
                          d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
                        ></path>\r
                      </svg>\r
                    </button>\r
                    <button\r
                      type="button"\r
                      (click)="deleteAttendee(attendee)"\r
                      class="btn-sm btn-danger"\r
                      [title]="translate('meetings.delete')"\r
                    >\r
                      <svg\r
                        width="14"\r
                        height="14"\r
                        viewBox="0 0 24 24"\r
                        fill="none"\r
                        stroke="currentColor"\r
                        stroke-width="2"\r
                      >\r
                        <polyline points="3,6 5,6 21,6"></polyline>\r
                        <path\r
                          d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
                        ></path>\r
                        <line x1="10" y1="11" x2="10" y2="17"></line>\r
                        <line x1="14" y1="11" x2="14" y2="17"></line>\r
                      </svg>\r
                    </button>\r
                  </div>\r
                </td>\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      </div>\r
      <div\r
        *ngIf="!meeting.attendees || meeting.attendees.length === 0"\r
        class="empty-state"\r
      >\r
        <p>{{ translate("meetings.no_attendees") }}</p>\r
      </div>\r
    </div>\r
\r
    <!-- Attachments Section -->\r
    <div class="section">\r
      <div class="section-header">\r
        <h3 class="section-title">{{ translate("meetings.attachments") }}</h3>\r
        <button\r
          type="button"\r
          (click)="showAddAttachment()"\r
          class="btn btn-secondary"\r
        >\r
          <svg\r
            class="btn-icon"\r
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
          {{ translate("meetings.add_attachment") }}\r
        </button>\r
      </div>\r
\r
      <!-- Attachment Form -->\r
      <div *ngIf="showAddAttachmentForm" class="recommendation-form-section">\r
        <div class="form-section">\r
          <form [formGroup]="attachmentsForm" (ngSubmit)="saveAttachment()">\r
            <!-- File Upload -->\r
            <div class="form-group">\r
              <label for="file" class="form-label">\r
                {{ translate("meetings.file") }}\r
              </label>\r
              <input\r
                type="file"\r
                id="file"\r
                (change)="onFileSelected($event)"\r
                class="form-input"\r
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif"\r
                required\r
              />\r
              <div *ngIf="selectedFile" class="file-selected">\r
                <span class="file-name">{{ selectedFile.name }}</span>\r
                <span class="file-size"\r
                  >({{ (selectedFile.size / 1024 / 1024).toFixed(2) }} MB)</span\r
                >\r
              </div>\r
            </div>\r
\r
            <!-- Description -->\r
            <div class="form-group">\r
              <label for="description" class="form-label">\r
                {{ translate("meetings.description") }}\r
              </label>\r
              <input\r
                type="text"\r
                id="description"\r
                formControlName="description"\r
                class="form-input"\r
                placeholder="{{\r
                  translate('meetings.description_placeholder')\r
                }}"\r
              />\r
            </div>\r
\r
            <!-- Document Source -->\r
            <div class="form-group">\r
              <label for="documentSource" class="form-label">\r
                {{ translate("meetings.document_source") }}\r
              </label>\r
              <select\r
                id="documentSource"\r
                formControlName="documentSource"\r
                class="form-select ltr"\r
              >\r
                <option value="" selected>\r
                  {{ translate("meetings.document_sources.All") }}\r
                </option>\r
                <option value="0">\r
                  {{ translate("meetings.document_sources.incoming") }}\r
                </option>\r
                <option value="1">\r
                  {{ translate("meetings.document_sources.outgoing") }}\r
                </option>\r
                <option value="2">\r
                  {{ translate("meetings.document_sources.internal") }}\r
                </option>\r
              </select>\r
            </div>\r
\r
            <!-- Form Actions -->\r
            <div class="form-actions">\r
              <button\r
                type="button"\r
                (click)="cancelAttachmentForm()"\r
                class="btn btn-secondary"\r
              >\r
                {{ translate("common.cancel") }}\r
              </button>\r
              <button\r
                type="submit"\r
                class="btn btn-primary"\r
                [disabled]="attachmentsForm.invalid || !selectedFile"\r
              >\r
                {{ translate("common.save") }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Attachments List -->\r
      <div\r
        *ngIf="\r
          meeting.attachments &&\r
          meeting.attachments.length > 0 &&\r
          !showAddAttachmentForm\r
        "\r
        class="attachments-list"\r
      >\r
        <div\r
          *ngFor="let attachment of meeting.attachments"\r
          class="attachment-item"\r
        >\r
          <!-- File Name -->\r
          <div class="attachment-header">\r
            <div class="attachment-name">{{ attachment.fileName }}</div>\r
          </div>\r
\r
          <!-- File Details -->\r
          <div class="attachment-meta">\r
            <div class="meta-row">\r
              <span class="attachment-type">{{ attachment.fileType }}</span>\r
              <span\r
                class="attachment-source"\r
                *ngIf="attachment.documentSource === 0"\r
                >{{ translate("meetings.document_sources.incoming") }}</span\r
              >\r
              <span\r
                class="attachment-source"\r
                *ngIf="attachment.documentSource === 1"\r
                >{{ translate("meetings.document_sources.outgoing") }}</span\r
              >\r
              <span\r
                class="attachment-source"\r
                *ngIf="attachment.documentSource === 2"\r
                >{{ translate("meetings.document_sources.internal") }}</span\r
              >\r
            </div>\r
            <div class="meta-row" *ngIf="attachment.description">\r
              <span class="attachment-description">{{\r
                attachment.description\r
              }}</span>\r
            </div>\r
            <div class="meta-row">\r
              <span class="attachment-date">{{\r
                formatDateTime(attachment.uploadedAt)\r
              }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Actions -->\r
          <div class="attachment-actions">\r
            <button\r
              class="download-btn"\r
              (click)="downloadAttachment(attachment)"\r
            >\r
              <svg\r
                width="16"\r
                height="16"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                <polyline points="7,10 12,15 17,10"></polyline>\r
                <line x1="12" y1="15" x2="12" y2="3"></line>\r
              </svg>\r
              {{ translate("common.download") }}\r
            </button>\r
            <button class="delete-btn" (click)="deleteAttachment(attachment)">\r
              <svg\r
                width="16"\r
                height="16"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <polyline points="3,6 5,6 21,6"></polyline>\r
                <path\r
                  d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
                ></path>\r
                <line x1="10" y1="11" x2="10" y2="17"></line>\r
                <line x1="14" y1="11" x2="14" y2="17"></line>\r
              </svg>\r
              {{ translate("common.delete") }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- No Attachments Message -->\r
      <div\r
        *ngIf="\r
          (!meeting.attachments || meeting.attachments.length === 0) &&\r
          !showAddAttachmentForm\r
        "\r
        class="no-attachments"\r
      >\r
        <p class="no-attachments-text">\r
          {{ translate("meetings.no_attachments") }}\r
        </p>\r
      </div>\r
    </div>\r
\r
    <!-- Minutes Section -->\r
    <div class="section">\r
      <div class="section-header">\r
        <h3 class="section-title">{{ translate("meetings.minutes") }}</h3>\r
        <button\r
          *ngIf="!hasMinutes()"\r
          type="button"\r
          (click)="showAddMinutes()"\r
          class="btn btn-secondary"\r
        >\r
          <svg\r
            class="btn-icon"\r
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
          {{ translate("meetings.add_minutes") }}\r
        </button>\r
        <button\r
          *ngIf="hasMinutes()"\r
          type="button"\r
          (click)="editMinutes()"\r
          class="btn btn-secondary"\r
        >\r
          <svg\r
            class="btn-icon"\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
            ></path>\r
            <path\r
              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
            ></path>\r
          </svg>\r
          {{ translate("meetings.edit_minutes") }}\r
        </button>\r
      </div>\r
\r
      <!-- Minutes Form -->\r
      <div *ngIf="showAddMinutesForm" class="recommendation-form-section">\r
        <div class="form-section">\r
          <form [formGroup]="minutesForm" (ngSubmit)="saveMinutes()">\r
            <!-- Notes -->\r
            <div class="form-group">\r
              <label for="notes" class="form-label">\r
                {{ translate("meetings.notes") }}\r
              </label>\r
              <textarea\r
                id="notes"\r
                formControlName="notes"\r
                class="form-textarea"\r
                rows="4"\r
                placeholder="{{ translate('meetings.notes_placeholder') }}"\r
              ></textarea>\r
            </div>\r
\r
            <!-- Summary AI -->\r
            <div class="form-group">\r
              <label for="summaryAI" class="form-label">\r
                {{ translate("meetings.summary_ai") }}\r
              </label>\r
              <textarea\r
                id="summaryAI"\r
                formControlName="summaryAI"\r
                class="form-textarea"\r
                rows="3"\r
                placeholder="{{ translate('meetings.summary_ai_placeholder') }}"\r
              ></textarea>\r
            </div>\r
\r
            <!-- Form Actions -->\r
            <div class="form-actions">\r
              <button\r
                type="button"\r
                (click)="cancelMinutesForm()"\r
                class="btn btn-secondary"\r
              >\r
                {{ translate("common.cancel") }}\r
              </button>\r
              <button\r
                type="submit"\r
                class="btn btn-primary"\r
                [disabled]="minutesForm.invalid"\r
              >\r
                {{\r
                  editingMinutes\r
                    ? translate("common.update")\r
                    : translate("common.save")\r
                }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Minutes Display -->\r
      <div\r
        *ngIf="meeting.minutes && !showAddMinutesForm"\r
        class="minutes-content"\r
      >\r
        <div class="minutes-notes">\r
          <h4>{{ translate("meetings.notes") }}</h4>\r
          <div class="notes-text">{{ meeting.minutes.notes }}</div>\r
        </div>\r
        <div class="minutes-summary" *ngIf="meeting.minutes.summaryAI">\r
          <h4>{{ translate("meetings.ai_summary") }}</h4>\r
          <div class="summary-text">{{ meeting.minutes.summaryAI }}</div>\r
        </div>\r
      </div>\r
\r
      <!-- No Minutes Message -->\r
      <div *ngIf="!hasMinutes() && !showAddMinutesForm" class="no-minutes">\r
        <p class="no-minutes-text">{{ translate("meetings.no_minutes") }}</p>\r
      </div>\r
    </div>\r
\r
    <!-- Recommendations Section -->\r
    <div class="section">\r
      <div class="section-header">\r
        <h3 class="section-title">\r
          {{ translate("meetings.recommendations") }}\r
        </h3>\r
        <button\r
          type="button"\r
          (click)="showAddRecommendation()"\r
          class="btn btn-secondary"\r
        >\r
          <svg\r
            class="btn-icon"\r
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
          {{ translate("meetings.add_recommendation") }}\r
        </button>\r
      </div>\r
\r
      <!-- Add/Edit Recommendation Form -->\r
      <div\r
        *ngIf="showAddRecommendationForm"\r
        class="recommendation-form-section"\r
      >\r
        <div class="form-section">\r
          <div class="section-header">\r
            <h4>\r
              {{\r
                editingRecommendation\r
                  ? translate("common.edit")\r
                  : translate("meetings.add_recommendation")\r
              }}\r
            </h4>\r
            <button\r
              type="button"\r
              (click)="cancelRecommendationForm()"\r
              class="btn btn-secondary btn-sm"\r
            >\r
              {{ translate("common.cancel") }}\r
            </button>\r
          </div>\r
\r
          <form\r
            [formGroup]="recommendationsForm"\r
            (ngSubmit)="saveRecommendation()"\r
          >\r
            <div class="form-group">\r
              <label class="form-label">\r
                {{ translate("meetings.recommendation_text") }}\r
                <span class="required">*</span>\r
              </label>\r
              <textarea\r
                formControlName="text"\r
                [placeholder]="translate('meetings.recommendation_placeholder')"\r
                class="form-textarea"\r
                rows="4"\r
                [class.error]="\r
                  recommendationsForm.get('text')?.invalid &&\r
                  recommendationsForm.get('text')?.touched\r
                "\r
              ></textarea>\r
              <div\r
                *ngIf="\r
                  recommendationsForm.get('text')?.invalid &&\r
                  recommendationsForm.get('text')?.touched\r
                "\r
                class="error-message"\r
              >\r
                <span\r
                  *ngIf="recommendationsForm.get('text')?.errors?.['required']"\r
                >\r
                  {{ translate("login.field_required") }}\r
                </span>\r
              </div>\r
            </div>\r
\r
            <div class="form-actions">\r
              <button\r
                type="button"\r
                class="cancel-btn"\r
                (click)="cancelRecommendationForm()"\r
              >\r
                {{ translate("common.cancel") }}\r
              </button>\r
              <button type="submit" class="save-btn">\r
                {{\r
                  editingRecommendation\r
                    ? translate("common.save")\r
                    : translate("meetings.add_recommendation")\r
                }}\r
              </button>\r
            </div>\r
          </form>\r
        </div>\r
      </div>\r
\r
      <!-- Recommendations List -->\r
      <div\r
        *ngIf="meeting.recommendations && meeting.recommendations.length > 0"\r
        class="recommendations-list"\r
      >\r
        <div\r
          *ngFor="let recommendation of meeting.recommendations"\r
          class="recommendation-item"\r
        >\r
          <div class="recommendation-content">\r
            <!-- Display mode -->\r
            <div\r
              *ngIf="!isEditingRecommendation(recommendation.id)"\r
              class="recommendation-display"\r
            >\r
              <div class="recommendation-text">{{ recommendation.text }}</div>\r
              <div class="recommendation-actions">\r
                <button\r
                  type="button"\r
                  (click)="editRecommendation(recommendation)"\r
                  class="btn-sm btn-secondary"\r
                  title="{{ translate('common.edit') }}"\r
                >\r
                  <svg\r
                    width="14"\r
                    height="14"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <path\r
                      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\r
                    ></path>\r
                    <path\r
                      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"\r
                    ></path>\r
                  </svg>\r
                  {{ translate("common.edit") }}\r
                </button>\r
                <button\r
                  type="button"\r
                  (click)="deleteRecommendation(recommendation)"\r
                  class="btn-sm btn-danger"\r
                  title="{{ translate('common.delete') }}"\r
                >\r
                  <svg\r
                    width="14"\r
                    height="14"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <polyline points="3,6 5,6 21,6"></polyline>\r
                    <path\r
                      d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
                    ></path>\r
                    <line x1="10" y1="11" x2="10" y2="17"></line>\r
                    <line x1="14" y1="11" x2="14" y2="17"></line>\r
                  </svg>\r
                  {{ translate("common.delete") }}\r
                </button>\r
              </div>\r
            </div>\r
\r
            <!-- Edit mode -->\r
            <div\r
              *ngIf="isEditingRecommendation(recommendation.id)"\r
              class="recommendation-edit"\r
            >\r
              <textarea\r
                #editTextarea\r
                [value]="recommendation.text"\r
                class="recommendation-edit-textarea"\r
                rows="3"\r
                placeholder="{{\r
                  translate('meetings.recommendation_placeholder')\r
                }}"\r
              ></textarea>\r
              <div class="recommendation-edit-actions">\r
                <button\r
                  type="button"\r
                  (click)="\r
                    saveRecommendationInline(recommendation, editTextarea.value)\r
                  "\r
                  class="btn-sm btn-success"\r
                  title="{{ translate('common.save') }}"\r
                >\r
                  <svg\r
                    width="14"\r
                    height="14"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <polyline points="20,6 9,17 4,12"></polyline>\r
                  </svg>\r
                  {{ translate("common.save") }}\r
                </button>\r
                <button\r
                  type="button"\r
                  (click)="cancelRecommendationEdit()"\r
                  class="btn-sm btn-secondary"\r
                  title="{{ translate('common.cancel') }}"\r
                >\r
                  <svg\r
                    width="14"\r
                    height="14"\r
                    viewBox="0 0 24 24"\r
                    fill="none"\r
                    stroke="currentColor"\r
                    stroke-width="2"\r
                  >\r
                    <line x1="18" y1="6" x2="6" y2="18"></line>\r
                    <line x1="6" y1="6" x2="18" y2="18"></line>\r
                  </svg>\r
                  {{ translate("common.cancel") }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
      <div\r
        *ngIf="\r
          !meeting.recommendations || meeting.recommendations.length === 0\r
        "\r
        class="empty-state"\r
      >\r
        <p>{{ translate("meetings.no_recommendations") }}</p>\r
      </div>\r
    </div>\r
\r
    <!-- Metadata Section -->\r
    <div class="section">\r
      <h3 class="section-title">{{ translate("meetings.metadata") }}</h3>\r
      <div class="metadata-grid">\r
        <div class="metadata-item">\r
          <span class="metadata-label"\r
            >{{ translate("meetings.created_at") }}:</span\r
          >\r
          <span class="metadata-value">{{\r
            formatDateTime(meeting.createdAt!)\r
          }}</span>\r
        </div>\r
        <div class="metadata-item">\r
          <span class="metadata-label"\r
            >{{ translate("meetings.updated_at") }}:</span\r
          >\r
          <span class="metadata-value">{{\r
            formatDateTime(meeting.updatedAt!)\r
          }}</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Edit Attendance Status Modal -->\r
<div\r
  *ngIf="showEditStatusModal"\r
  class="modal-overlay"\r
  (click)="closeEditStatusModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.edit_attendance_status") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeEditStatusModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <form\r
        [formGroup]="attendanceStatusForm"\r
        (ngSubmit)="saveAttendanceStatus()"\r
      >\r
        <!-- Attendee Info -->\r
        <div class="attendee-info" *ngIf="selectedAttendee">\r
          <div class="info-label">{{ translate("meetings.attendee") }}:</div>\r
          <div class="info-value">\r
            {{\r
              selectedAttendee.displayName || selectedAttendee.userName || "N/A"\r
            }}\r
          </div>\r
        </div>\r
\r
        <!-- Attendance Status -->\r
        <div class="form-group">\r
          <label for="attendanceStatus" class="form-label">\r
            {{ translate("meetings.attendance_status") }}\r
            <span class="required">*</span>\r
          </label>\r
          <select\r
            id="attendanceStatus"\r
            formControlName="attendanceStatus"\r
            class="form-select"\r
            dir="ltr"\r
            [class.error]="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
          >\r
            <option [value]="0">{{ translate("meetings.invited") }}</option>\r
            <option [value]="1">{{ translate("meetings.accepted") }}</option>\r
            <option [value]="2">{{ translate("meetings.declined") }}</option>\r
            <option [value]="3">{{ translate("meetings.attended") }}</option>\r
            <option [value]="4">{{ translate("meetings.absent") }}</option>\r
          </select>\r
          <div\r
            *ngIf="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span\r
              *ngIf="attendanceStatusForm.get('attendanceStatus')?.errors?.['required']"\r
            >\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Notes -->\r
        <div class="form-group">\r
          <label for="notes" class="form-label">\r
            {{ translate("common.notes") }}\r
          </label>\r
          <textarea\r
            id="notes"\r
            formControlName="notes"\r
            class="form-textarea"\r
            rows="3"\r
            [placeholder]="translate('meetings.attendance_notes_placeholder')"\r
          ></textarea>\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="form-actions">\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeEditStatusModal()"\r
          >\r
            {{ translate("common.cancel") }}\r
          </button>\r
          <button\r
            type="submit"\r
            class="btn btn-primary"\r
            [disabled]="attendanceStatusForm.invalid || savingStatus"\r
          >\r
            <span *ngIf="savingStatus">{{ translate("common.saving") }}</span>\r
            <span *ngIf="!savingStatus">{{ translate("common.save") }}</span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Confirmation Modal -->\r
<div *ngIf="showDeleteModal" class="modal-overlay" (click)="closeDeleteModal()">\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_recommendation") }}\r
      </h3>\r
      <button type="button" class="modal-close" (click)="closeDeleteModal()">\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_recommendation_confirm") }}\r
      </p>\r
\r
      <div *ngIf="recommendationToDelete" class="recommendation-preview">\r
        <div class="preview-label">\r
          {{ translate("meetings.recommendation_text") }}:\r
        </div>\r
        <div class="preview-text">{{ recommendationToDelete.text }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteRecommendation()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Edit Attendance Status Modal -->\r
<div\r
  *ngIf="showEditStatusModal"\r
  class="modal-overlay"\r
  (click)="closeEditStatusModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.edit_attendance_status") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeEditStatusModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <form\r
        [formGroup]="attendanceStatusForm"\r
        (ngSubmit)="saveAttendanceStatus()"\r
      >\r
        <!-- Attendee Info -->\r
        <div class="attendee-info" *ngIf="selectedAttendee">\r
          <div class="info-label">{{ translate("meetings.attendee") }}:</div>\r
          <div class="info-value">\r
            {{\r
              selectedAttendee.displayName || selectedAttendee.userName || "N/A"\r
            }}\r
          </div>\r
        </div>\r
\r
        <!-- Attendance Status -->\r
        <div class="form-group">\r
          <label for="attendanceStatus" class="form-label">\r
            {{ translate("meetings.attendance_status") }}\r
            <span class="required">*</span>\r
          </label>\r
          <select\r
            id="attendanceStatus"\r
            formControlName="attendanceStatus"\r
            class="form-select"\r
            dir="ltr"\r
            [class.error]="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
          >\r
            <option [value]="0">{{ translate("meetings.invited") }}</option>\r
            <option [value]="1">{{ translate("meetings.accepted") }}</option>\r
            <option [value]="2">{{ translate("meetings.declined") }}</option>\r
            <option [value]="3">{{ translate("meetings.attended") }}</option>\r
            <option [value]="4">{{ translate("meetings.absent") }}</option>\r
          </select>\r
          <div\r
            *ngIf="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span\r
              *ngIf="attendanceStatusForm.get('attendanceStatus')?.errors?.['required']"\r
            >\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Notes -->\r
        <div class="form-group">\r
          <label for="notes" class="form-label">\r
            {{ translate("common.notes") }}\r
          </label>\r
          <textarea\r
            id="notes"\r
            formControlName="notes"\r
            class="form-textarea"\r
            rows="3"\r
            [placeholder]="translate('meetings.attendance_notes_placeholder')"\r
          ></textarea>\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="form-actions">\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeEditStatusModal()"\r
          >\r
            {{ translate("common.cancel") }}\r
          </button>\r
          <button\r
            type="submit"\r
            class="btn btn-primary"\r
            [disabled]="attendanceStatusForm.invalid || savingStatus"\r
          >\r
            <span *ngIf="savingStatus">{{ translate("common.saving") }}</span>\r
            <span *ngIf="!savingStatus">{{ translate("common.save") }}</span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Attachment Delete Confirmation Modal -->\r
<div\r
  *ngIf="showAttachmentDeleteModal"\r
  class="modal-overlay"\r
  (click)="closeAttachmentDeleteModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">{{ translate("meetings.delete_attachment") }}</h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeAttachmentDeleteModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attachment_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attachmentToDelete" class="attachment-preview">\r
        <div class="preview-label">{{ translate("meetings.file_name") }}:</div>\r
        <div class="preview-text">{{ attachmentToDelete.fileName }}</div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeAttachmentDeleteModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttachment()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Edit Attendance Status Modal -->\r
<div\r
  *ngIf="showEditStatusModal"\r
  class="modal-overlay"\r
  (click)="closeEditStatusModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.edit_attendance_status") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeEditStatusModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <form\r
        [formGroup]="attendanceStatusForm"\r
        (ngSubmit)="saveAttendanceStatus()"\r
      >\r
        <!-- Attendee Info -->\r
        <div class="attendee-info" *ngIf="selectedAttendee">\r
          <div class="info-label">{{ translate("meetings.attendee") }}:</div>\r
          <div class="info-value">\r
            {{\r
              selectedAttendee.displayName || selectedAttendee.userName || "N/A"\r
            }}\r
          </div>\r
        </div>\r
\r
        <!-- Attendance Status -->\r
        <div class="form-group">\r
          <label for="attendanceStatus" class="form-label">\r
            {{ translate("meetings.attendance_status") }}\r
            <span class="required">*</span>\r
          </label>\r
          <select\r
            id="attendanceStatus"\r
            formControlName="attendanceStatus"\r
            class="form-select"\r
            dir="ltr"\r
            [class.error]="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
          >\r
            <option [value]="0">{{ translate("meetings.invited") }}</option>\r
            <option [value]="1">{{ translate("meetings.accepted") }}</option>\r
            <option [value]="2">{{ translate("meetings.declined") }}</option>\r
            <option [value]="3">{{ translate("meetings.attended") }}</option>\r
            <option [value]="4">{{ translate("meetings.absent") }}</option>\r
          </select>\r
          <div\r
            *ngIf="\r
              attendanceStatusForm.get('attendanceStatus')?.invalid &&\r
              attendanceStatusForm.get('attendanceStatus')?.touched\r
            "\r
            class="error-message"\r
          >\r
            <span\r
              *ngIf="attendanceStatusForm.get('attendanceStatus')?.errors?.['required']"\r
            >\r
              {{ translate("login.field_required") }}\r
            </span>\r
          </div>\r
        </div>\r
\r
        <!-- Notes -->\r
        <div class="form-group">\r
          <label for="notes" class="form-label">\r
            {{ translate("common.notes") }}\r
          </label>\r
          <textarea\r
            id="notes"\r
            formControlName="notes"\r
            class="form-textarea"\r
            rows="3"\r
            [placeholder]="translate('meetings.attendance_notes_placeholder')"\r
          ></textarea>\r
        </div>\r
\r
        <!-- Form Actions -->\r
        <div class="form-actions">\r
          <button\r
            type="button"\r
            class="btn btn-secondary"\r
            (click)="closeEditStatusModal()"\r
          >\r
            {{ translate("common.cancel") }}\r
          </button>\r
          <button\r
            type="submit"\r
            class="btn btn-primary"\r
            [disabled]="attendanceStatusForm.invalid || savingStatus"\r
          >\r
            <span *ngIf="savingStatus">{{ translate("common.saving") }}</span>\r
            <span *ngIf="!savingStatus">{{ translate("common.save") }}</span>\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Delete Attendee Modal -->\r
<div\r
  *ngIf="showDeleteAttendeeModal"\r
  class="modal-overlay"\r
  (click)="closeDeleteAttendeeModal()"\r
>\r
  <div class="modal-content" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h3 class="modal-title">\r
        {{ translate("meetings.delete_attendee") }}\r
      </h3>\r
      <button\r
        type="button"\r
        class="modal-close"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        <svg\r
          width="20"\r
          height="20"\r
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
    <div class="modal-body">\r
      <div class="warning-icon">\r
        <svg\r
          width="48"\r
          height="48"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <path\r
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"\r
          ></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <p class="modal-message">\r
        {{ translate("meetings.delete_attendee_confirm") }}\r
      </p>\r
\r
      <div *ngIf="attendeeToDelete" class="attendee-preview">\r
        <div class="preview-label">{{ translate("meetings.attendee") }}:</div>\r
        <div class="preview-text">\r
          {{\r
            attendeeToDelete.displayName || attendeeToDelete.userName || "N/A"\r
          }}\r
        </div>\r
        <div\r
          class="preview-details"\r
          *ngIf="attendeeToDelete.organization || attendeeToDelete.department"\r
        >\r
          <div *ngIf="attendeeToDelete.organization" class="preview-detail">\r
            {{ translate("partners.organization") }}:\r
            {{ attendeeToDelete.organization }}\r
          </div>\r
          <div *ngIf="attendeeToDelete.department" class="preview-detail">\r
            {{ translate("employees.department") }}:\r
            {{ attendeeToDelete.department }}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button\r
        type="button"\r
        class="btn btn-secondary"\r
        (click)="closeDeleteAttendeeModal()"\r
      >\r
        {{ translate("common.cancel") }}\r
      </button>\r
      <button\r
        type="button"\r
        class="btn btn-danger"\r
        (click)="confirmDeleteAttendee()"\r
      >\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <polyline points="3,6 5,6 21,6"></polyline>\r
          <path\r
            d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
          ></path>\r
          <line x1="10" y1="11" x2="10" y2="17"></line>\r
          <line x1="14" y1="11" x2="14" y2="17"></line>\r
        </svg>\r
        {{ translate("common.delete") }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/meetings/meeting-details/meeting-details.component.css */\n.meeting-details-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #f1f5f9 100%);\n  min-height: 100vh;\n  position: relative;\n}\n.meeting-details-container::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(21, 134, 56, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(9, 54, 95, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.meeting-details-container > * {\n  position: relative;\n  z-index: 1;\n}\n.header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding: 20px 0;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background-color: #ffffff;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  box-shadow: var(--shadow-light);\n}\n.back-btn:hover {\n  background-color: var(--sidebar-bg);\n  border-color: var(--brand-green);\n  color: var(--brand-green);\n  transform: translateY(-1px);\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  margin: 2rem 0;\n}\n.loading-spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(226, 232, 240, 0.3);\n  border-top: 4px solid var(--brand-green);\n  border-right: 4px solid var(--brand-blue);\n  border-radius: 50%;\n  animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  margin-bottom: 20px;\n  position: relative;\n}\n.loading-spinner::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  border: 2px solid transparent;\n  border-top: 2px solid rgba(21, 134, 56, 0.2);\n  border-radius: 50%;\n  animation: spin 2s linear infinite reverse;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-container p {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin: 0;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.meeting-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meeting-content::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  border-radius: 20px 20px 0 0;\n}\n.meeting-header {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      var(--brand-blue) 100%);\n  color: white;\n  padding: 32px;\n}\n.meeting-title-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.header-top {\n  display: flex;\n  justify-content: flex-end;\n}\n.meeting-title {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.meeting-status {\n  align-self: flex-start;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-0 {\n  background-color: rgba(16, 91, 231, 0.849);\n  color: white;\n}\n.status-1 {\n  background-color: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.status-2 {\n  background-color: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.status-3 {\n  background-color: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.attendee-card .status-0 {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.attendee-card .status-1 {\n  background-color: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.attendee-card .status-2 {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.attendee-card .status-3 {\n  background-color: #fef3c7;\n  color: #d97706;\n  border: 1px solid #fed7aa;\n}\n.edit-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background-color: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: var(--radius-lg);\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.edit-btn:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.5);\n  transform: translateY(-1px);\n}\n.meeting-info {\n  padding: 32px;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.info-item {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.info-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.info-item:hover::before {\n  opacity: 1;\n}\n.info-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.info-value {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.link {\n  color: var(--brand-green);\n  text-decoration: none;\n  font-weight: 500;\n}\n.link:hover {\n  color: var(--brand-blue);\n  text-decoration: underline;\n}\n.edit-form {\n  padding: 32px;\n  background-color: var(--sidebar-bg);\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin-bottom: 8px;\n}\n.required {\n  color: #ef4444;\n}\n.form-input,\n.form-textarea,\n.form-select {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid rgba(226, 232, 240, 0.8);\n  border-radius: 12px;\n  font-size: 16px;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 52px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.form-input:focus,\n.form-textarea:focus,\n.form-select:focus {\n  outline: none;\n  border-color: var(--brand-green);\n  box-shadow:\n    0 0 0 4px rgba(21, 134, 56, 0.15),\n    0 4px 8px rgba(21, 134, 56, 0.1),\n    inset 0 1px 2px rgba(255, 255, 255, 0.9);\n  transform: translateY(-1px);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.form-input.error,\n.form-textarea.error,\n.form-select.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #ef4444;\n}\n.form-actions {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.save-btn,\n.cancel-btn {\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  min-width: 130px;\n  min-height: 52px;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.save-btn::before,\n.cancel-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.save-btn:hover::before,\n.cancel-btn:hover::before {\n  left: 100%;\n}\n.save-btn {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      #16a34a 100%);\n  color: white;\n}\n.save-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-blue) 0%,\n      #1d4ed8 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(21, 134, 56, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.save-btn:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #9ca3af 0%,\n      #6b7280 100%);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.cancel-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  color: var(--text-secondary);\n  border: 2px solid rgba(226, 232, 240, 0.8);\n}\n.cancel-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--sidebar-bg) 0%,\n      #f1f5f9 100%);\n  border-color: var(--brand-green);\n  color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.section {\n  padding: 32px;\n  border-top: 1px solid var(--border-color);\n}\n.section-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.attendees-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.attendee-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 12px;\n  padding: 1rem;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.attendee-card:hover {\n  border-color: var(--brand-green);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  transform: translateY(-3px);\n}\n.attendee-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attendee-card:hover::before {\n  opacity: 1;\n}\n.attendee-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n  gap: 0.5rem;\n}\n.attendee-name {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.attendee-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  flex: 1;\n}\n.detail-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.375rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 8px;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  min-height: 2.5rem;\n  transition: all 0.2s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.detail-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-1px);\n}\n.detail-item.full-width {\n  grid-column: 1 / -1;\n}\n.detail-label {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  margin-bottom: 0.05rem;\n  line-height: 1;\n}\n.detail-value {\n  color: #334155;\n  font-size: 0.8rem;\n  font-weight: 500;\n  word-break: break-word;\n  line-height: 1.2;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.attendee-actions {\n  margin-top: auto;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n}\n.btn-sm {\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.7rem;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 60px;\n}\n.btn-secondary {\n  background-color: #f1f5f9;\n  color: #475569;\n  border: 1px solid #cbd5e1;\n}\n.btn-secondary:hover {\n  background-color: var(--brand-green);\n  color: white;\n  border-color: var(--brand-green);\n}\n.btn-danger {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger:hover {\n  background-color: #dc2626;\n}\n.kind-badge,\n.role-badge {\n  display: inline-block;\n  padding: 0.15rem 0.3rem;\n  border-radius: 8px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n}\n.kind-badge.kind-internal {\n  background-color: var(--brand-green);\n  color: white;\n}\n.kind-badge.kind-external {\n  background-color: #f59e0b;\n  color: white;\n}\n.role-badge.role-speaker {\n  background-color: #ef4444;\n  color: white;\n}\n.role-badge.role-attendee {\n  background-color: #6366f1;\n  color: white;\n}\n.attachments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.attachment-item {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  gap: 16px;\n}\n.attachment-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.attachment-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attachment-item:hover::before {\n  opacity: 1;\n}\n.attachment-header {\n  width: 100%;\n}\n.attachment-name {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  word-break: break-word;\n  line-height: 1.4;\n  margin: 0;\n}\n.attachment-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.meta-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.attachment-type {\n  font-size: 12px;\n  color: var(--brand-blue);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-green) 0%,\n      #16a34a 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(21, 134, 56, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.download-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.download-btn:hover::before {\n  left: 100%;\n}\n.download-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-blue) 0%,\n      #1d4ed8 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.3);\n}\n.delete-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.delete-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.delete-btn:hover::before {\n  left: 100%;\n}\n.delete-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626 0%,\n      #b91c1c 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);\n}\n.minutes-content {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.minutes-content::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  border-radius: 16px 16px 0 0;\n}\n.minutes-notes,\n.minutes-summary {\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.minutes-notes:last-child,\n.minutes-summary:last-child {\n  margin-bottom: 0;\n}\n.minutes-notes h4,\n.minutes-summary h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.minutes-notes h4::before {\n  content: "\\1f4dd";\n  font-size: 16px;\n}\n.minutes-summary h4::before {\n  content: "\\1f916";\n  font-size: 16px;\n}\n.notes-text,\n.summary-text {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.notes-text:hover,\n.summary-text:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transform: translateY(-1px);\n}\n.minutes-meta {\n  display: flex;\n  gap: 24px;\n}\n.meta-item {\n  display: flex;\n  gap: 8px;\n}\n.meta-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.meta-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.recommendation-item {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.05) 0%,\n      rgba(9, 54, 95, 0.03) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recommendation-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.recommendation-item:hover::before {\n  opacity: 1;\n}\n.recommendation-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.recommendation-text {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--brand-blue);\n  position: relative;\n  z-index: 1;\n}\n.metadata-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.metadata-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.metadata-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.metadata-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.metadata-item:hover::before {\n  opacity: 1;\n}\n.metadata-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metadata-value {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.attendee-form-section {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.selected-user {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #f0fdf4;\n  border-radius: 4px;\n  border: 1px solid #bbf7d0;\n}\n.selected-user .form-input[readonly] {\n  background-color: #f0fdf4;\n  color: #374151;\n  cursor: default;\n  border: 1px solid #bbf7d0;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.5rem;\n}\n.empty-state::before {\n  content: "\\1f4a1";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 1.1rem;\n  color: var(--brand-blue);\n  font-weight: 500;\n  margin: 0;\n  font-style: italic;\n}\n.form-section {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.form-label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-input,\n.form-select,\n.form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  background-color: white;\n  transition: var(--t-fast);\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: var(--brand-green);\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.error,\n.form-select.error,\n.form-textarea.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.cancel-btn {\n  padding: 12px 24px;\n  background-color: #f3f4f6;\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.cancel-btn:hover {\n  background-color: #e5e7eb;\n}\n.save-btn {\n  padding: 12px 24px;\n  background-color: var(--brand-green);\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.save-btn:hover {\n  background-color: var(--brand-blue);\n}\n.internal-fields,\n.external-fields {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.attendee-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn-sm {\n  padding: 8px 12px;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .meeting-details-container {\n    padding: 20px;\n  }\n  .info-grid {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n  }\n  .attendees-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 1rem;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .attachment-item {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n    padding: 20px 18px;\n  }\n  .attachment-info {\n    width: 100%;\n  }\n  .attachment-details {\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 8px;\n  }\n  .attachment-actions {\n    display: flex;\n    gap: 12px;\n    width: 100%;\n    justify-content: stretch;\n  }\n  .download-btn,\n  .delete-btn {\n    flex: 1;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 44px;\n  }\n  .recommendation-item {\n    padding: 20px 18px;\n  }\n  .recommendation-actions {\n    display: flex;\n    gap: 10px;\n    margin-top: 16px;\n  }\n  .recommendation-actions .btn-sm {\n    flex: 1;\n    padding: 10px 14px;\n    font-size: 13px;\n    min-height: 44px;\n    justify-content: center;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 14px;\n    height: 14px;\n  }\n  .meeting-details-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n  }\n  .page-title {\n    font-size: 24px;\n  }\n  .back-btn {\n    align-self: flex-start;\n  }\n  .meeting-header {\n    padding: 24px 20px;\n  }\n  .meeting-title {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n  .meeting-title-section {\n    gap: 12px;\n  }\n  .header-top {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .meeting-info,\n  .edit-form,\n  .section {\n    padding: 20px 16px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .info-item {\n    padding: 16px;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .section-title {\n    font-size: 20px;\n  }\n  .attendees-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .attendee-card {\n    padding: 16px;\n  }\n  .detail-row {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .detail-item {\n    padding: 8px;\n    min-height: auto;\n  }\n  .detail-label {\n    font-size: 0.7rem;\n    margin-bottom: 2px;\n  }\n  .detail-value {\n    font-size: 0.85rem;\n  }\n  .action-buttons {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .btn-sm {\n    flex: 1;\n    min-width: auto;\n    padding: 8px 12px;\n    font-size: 0.75rem;\n  }\n  .attendee-form-section,\n  .recommendation-form-section {\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .form-section {\n    padding: 16px;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions .cancel-btn,\n  .form-actions .save-btn {\n    width: 100%;\n  }\n  .empty-state {\n    padding: 2rem 1rem;\n  }\n  .empty-state::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .empty-state p {\n    font-size: 1rem;\n  }\n  .no-attachments,\n  .no-minutes {\n    padding: 2rem 1rem;\n  }\n  .no-attachments::before,\n  .no-minutes::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .no-attachments-text,\n  .no-minutes-text {\n    font-size: 1rem;\n  }\n  .recommendation-item {\n    padding: 20px 16px;\n  }\n  .recommendation-text {\n    padding: 16px;\n    font-size: 0.95rem;\n  }\n  .recommendation-actions {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n    margin-top: 16px;\n    padding-top: 16px;\n  }\n  .recommendation-actions .btn-sm {\n    flex: 1;\n    padding: 10px 16px;\n    min-width: auto;\n  }\n  .recommendation-edit-actions {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .recommendation-edit-actions .btn-sm {\n    flex: 1;\n    padding: 8px 12px;\n    min-width: auto;\n  }\n  .attachment-item {\n    padding: 16px 18px;\n    gap: 12px;\n  }\n  .attachment-name {\n    font-size: 16px;\n  }\n  .attachment-meta {\n    gap: 6px;\n  }\n  .meta-row {\n    gap: 6px;\n  }\n  .attachment-actions {\n    gap: 10px;\n    margin-top: 4px;\n  }\n  .download-btn,\n  .delete-btn {\n    padding: 10px 16px;\n    font-size: 13px;\n    min-height: 42px;\n  }\n  .download-btn svg,\n  .delete-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n  .minutes-content {\n    padding: 20px 16px;\n  }\n  .minutes-notes h4,\n  .minutes-summary h4 {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 16px;\n    font-size: 14px;\n  }\n  .recommendation-item {\n    padding: 20px 16px;\n  }\n  .recommendation-text {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n  }\n  .recommendation-actions {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    margin-top: 16px;\n    align-items: stretch;\n  }\n  .recommendation-actions .btn-sm {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 14px;\n    min-height: 44px;\n    justify-content: center;\n    border-radius: 10px;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions .btn-sm:first-child {\n    margin-bottom: 8px;\n  }\n  .metadata-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .metadata-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 16px;\n  }\n  .metadata-label {\n    font-size: 13px;\n  }\n  .metadata-value {\n    font-size: 14px;\n    word-break: break-word;\n  }\n  .modal-content {\n    margin: 16px;\n    max-width: calc(100% - 32px);\n    border-radius: 16px;\n  }\n  .modal-header {\n    padding: 20px 20px 0 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modal-body {\n    padding: 0 20px 20px 20px;\n  }\n  .modal-footer {\n    padding: 0 20px 20px 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    min-width: auto;\n  }\n  .minutes-content {\n    padding: 16px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .meeting-details-container {\n    padding: 12px;\n  }\n  .meeting-header {\n    padding: 20px 16px;\n  }\n  .meeting-title {\n    font-size: 20px;\n  }\n  .meeting-info,\n  .edit-form,\n  .section {\n    padding: 16px 12px;\n  }\n  .info-item {\n    padding: 12px;\n  }\n  .attendee-card {\n    padding: 12px;\n  }\n  .detail-item {\n    padding: 6px;\n  }\n  .btn-sm {\n    padding: 6px 10px;\n    font-size: 0.7rem;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .recommendation-text {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n  .attachment-item {\n    padding: 16px 12px;\n    gap: 10px;\n  }\n  .attachment-name {\n    font-size: 15px;\n  }\n  .attachment-meta {\n    gap: 4px;\n  }\n  .meta-row {\n    gap: 4px;\n  }\n  .attachment-type,\n  .attachment-source,\n  .attachment-description,\n  .attachment-date {\n    font-size: 11px;\n    padding: 3px 6px;\n  }\n  .attachment-actions {\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 8px;\n  }\n  .download-btn,\n  .delete-btn {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    flex: none;\n  }\n  .download-btn svg,\n  .delete-btn svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .recommendation-text {\n    font-size: 13px;\n    line-height: 1.5;\n    margin-bottom: 12px;\n  }\n  .recommendation-actions {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .recommendation-actions .btn-sm {\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    width: 100%;\n    justify-content: center;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions .btn-sm:first-child {\n    order: 1;\n  }\n  .recommendation-actions .btn-sm:last-child {\n    order: 2;\n  }\n  .minutes-content {\n    padding: 16px 12px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 12px;\n    font-size: 13px;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .metadata-item {\n    padding: 12px;\n  }\n  .metadata-label {\n    font-size: 12px;\n  }\n  .metadata-value {\n    font-size: 13px;\n  }\n  .empty-state,\n  .no-attachments,\n  .no-minutes {\n    padding: 1.5rem 0.75rem;\n  }\n  .empty-state::before,\n  .no-attachments::before,\n  .no-minutes::before {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n  }\n  .empty-state p,\n  .no-attachments-text,\n  .no-minutes-text {\n    font-size: 0.9rem;\n  }\n  .attachment-item {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .attachment-name {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .recommendation-item {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .recommendation-text {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .modal-content {\n    margin: 12px;\n    max-width: calc(100% - 24px);\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n.section {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: both;\n}\n.section:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.section:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.section:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.section:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.section:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.section:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.section:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section:hover {\n  box-shadow:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.9);\n  transform: translateY(-2px);\n}\n.section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.section:hover::before {\n  opacity: 1;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.btn-secondary {\n  background: var(--brand-blue);\n  color: white;\n}\n.btn-secondary:hover {\n  background: var(--brand-green);\n}\n.btn-icon {\n  width: 16px;\n  height: 16px;\n}\n.recommendation-form-section {\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.form-section {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: fadeInUp 0.6s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recommendation-item {\n  animation: slideInFromLeft 0.5s ease-out;\n  animation-fill-mode: both;\n}\n.recommendation-item:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.recommendation-item:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.recommendation-item:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.recommendation-item:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.recommendation-item:nth-child(5) {\n  animation-delay: 0.5s;\n}\n@keyframes slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.recommendation-item {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 16px;\n  padding: 2rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);\n  margin-bottom: 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--brand-green);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.recommendation-item:hover {\n  background: rgba(21, 134, 56, 0.08);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);\n  transform: translateY(-3px);\n}\n.recommendation-item:hover::before {\n  transform: scaleX(1);\n}\n.recommendation-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.recommendation-display {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-text {\n  color: var(--brand-blue);\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-bottom: 1rem;\n  padding: 1.5rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 12px;\n  font-weight: 400;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-text:hover {\n  background: rgba(21, 134, 56, 0.1);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n.recommendation-edit-textarea {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  font-size: 1rem;\n  line-height: 1.6;\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1e293b;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(59, 130, 246, 0.2);\n  transform: translateY(-1px);\n}\n.recommendation-edit-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.recommendation-edit-actions .btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-edit-actions .btn-sm::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-edit-actions .btn-sm:hover::before {\n  left: 100%;\n}\n.recommendation-edit-actions .btn-success {\n  background: var(--brand-green);\n  color: white;\n  box-shadow: 0 4px 14px rgba(21, 134, 56, 0.3);\n}\n.recommendation-edit-actions .btn-success:hover {\n  background: var(--brand-blue);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(9, 54, 95, 0.4);\n}\n.recommendation-edit-actions .btn-secondary {\n  background: var(--brand-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(9, 54, 95, 0.3);\n}\n.recommendation-edit-actions .btn-secondary:hover {\n  background: var(--brand-green);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.4);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  max-width: 350px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.modal-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-close {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close:hover {\n  background-color: #f3f4f6;\n}\n.modal-body {\n  padding: 20px;\n  text-align: center;\n}\n.warning-icon {\n  color: #f59e0b;\n  margin-bottom: 16px;\n  font-size: 32px;\n}\n.modal-message {\n  font-size: 14px;\n  margin-bottom: 16px;\n  line-height: 1.4;\n}\n.recommendation-preview {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 12px;\n  text-align: left;\n}\n.preview-label {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n.preview-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n.modal-footer {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px 20px 20px;\n}\n.modal-footer .btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  min-width: 80px;\n}\n.modal-footer .btn-secondary {\n  background: #6b7280;\n  color: white;\n}\n.modal-footer .btn-secondary:hover {\n  background: #4b5563;\n}\n.modal-footer .btn-danger {\n  background: #ef4444;\n  color: white;\n}\n.modal-footer .btn-danger:hover {\n  background: #dc2626;\n}\n.minutes-display {\n  margin-top: 1rem;\n}\n.minutes-content {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.minutes-notes,\n.minutes-summary,\n.minutes-attachments {\n  margin-bottom: 1.5rem;\n}\n.minutes-notes:last-child,\n.minutes-summary:last-child,\n.minutes-attachments:last-child {\n  margin-bottom: 0;\n}\n.minutes-label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin: 0 0 0.75rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.minutes-label::before {\n  content: "\\1f4dd";\n  font-size: 0.875rem;\n}\n.minutes-summary .minutes-label::before {\n  content: "\\1f916";\n}\n.minutes-attachments .minutes-label::before {\n  content: "\\1f4ce";\n}\n.minutes-text {\n  color: var(--brand-blue);\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  font-weight: 400;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.no-minutes {\n  text-align: center;\n  padding: 2rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n}\n.no-minutes-text {\n  color: var(--brand-blue);\n  font-size: 1rem;\n  margin: 0;\n  font-style: italic;\n}\n.file-selected {\n  margin-top: 12px;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  border-radius: 12px;\n  border: 1px solid rgba(21, 134, 56, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.file-selected::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-green),\n      var(--brand-blue));\n}\n.file-selected:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.08) 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.15);\n}\n.file-name {\n  font-weight: 600;\n  color: var(--brand-blue);\n  display: block;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.file-size {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.attachment-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n}\n.attachment-item:hover {\n  background: rgba(21, 134, 56, 0.08);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.attachment-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n.attachment-icon {\n  font-size: 1.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(21, 134, 56, 0.1);\n  border-radius: 8px;\n}\n.attachment-details {\n  flex: 1;\n}\n.attachment-name {\n  font-weight: 600;\n  color: var(--brand-blue);\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.attachment-meta {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: var(--brand-green);\n}\n.attachment-type {\n  background: rgba(21, 134, 56, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.attachment-source {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(21, 134, 56, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  color: var(--brand-blue);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  font-size: 12px;\n}\n.attachment-description {\n  font-style: italic;\n  color: var(--text-secondary);\n  font-size: 12px;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(107, 114, 128, 0.2);\n}\n.attachment-date {\n  color: var(--brand-blue);\n  font-size: 12px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.attachment-actions {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n  margin-top: 8px;\n}\n.download-btn,\n.delete-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.download-btn {\n  background: rgba(21, 134, 56, 0.1);\n  color: var(--brand-green);\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn:hover {\n  background: rgba(21, 134, 56, 0.2);\n  transform: translateY(-1px);\n}\n.delete-btn {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.delete-btn:hover {\n  background: rgba(220, 38, 38, 0.2);\n  transform: translateY(-1px);\n}\n.no-attachments {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-attachments::before {\n  content: "\\1f4ce";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-attachments-text {\n  color: var(--brand-blue);\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.no-minutes {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-minutes::before {\n  content: "\\1f4dd";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-minutes-text {\n  color: var(--brand-blue);\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.attachment-preview {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.preview-label {\n  font-weight: 600;\n  color: var(--brand-blue);\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.preview-text {\n  color: var(--brand-green);\n  font-size: 0.875rem;\n  word-break: break-word;\n}\n.recommendation-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.5);\n  flex-wrap: wrap;\n}\n.recommendation-actions .btn-sm {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 110px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-actions .btn-sm::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-actions .btn-sm:hover::before {\n  left: 100%;\n}\n.recommendation-actions .btn-sm:focus {\n  outline: 2px solid rgba(59, 130, 246, 0.5);\n  outline-offset: 2px;\n}\n.recommendation-actions .btn-secondary {\n  background: var(--brand-blue);\n  color: white;\n  box-shadow: 0 4px 14px rgba(9, 54, 95, 0.3);\n}\n.recommendation-actions .btn-secondary:hover {\n  background: var(--brand-green);\n  box-shadow: 0 8px 25px rgba(21, 134, 56, 0.4);\n  transform: translateY(-2px);\n}\n.recommendation-actions .btn-danger {\n  background: #dc2626;\n  color: white;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);\n}\n.recommendation-actions .btn-danger:hover {\n  background: #b91c1c;\n  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);\n  transform: translateY(-2px);\n}\n.attendee-info {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.attendee-info .info-label {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n}\n.attendee-info .info-value {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.attendees-table-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-top: 20px;\n}\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.attendees-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.attendees-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.attendees-table th {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.attendees-table td {\n  padding: 16px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.attendee-row:hover {\n  background-color: #f9fafb;\n}\n.attendee-row:last-child td {\n  border-bottom: none;\n}\n.attendee-name-cell {\n  min-width: 180px;\n}\n.attendee-name {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.attendee-org {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 2px;\n}\n.attendee-job {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.status-cell {\n  text-align: center;\n  min-width: 100px;\n}\n.kind-cell {\n  text-align: center;\n  min-width: 80px;\n}\n.role-cell {\n  text-align: center;\n  min-width: 80px;\n}\n.email-cell {\n  min-width: 150px;\n}\n.email-text {\n  font-size: 0.8rem;\n  color: #374151;\n  word-break: break-all;\n}\n.department-cell {\n  min-width: 120px;\n}\n.department-text {\n  font-size: 0.8rem;\n  color: #374151;\n}\n.no-data {\n  color: #9ca3af;\n  font-style: italic;\n}\n.actions-cell {\n  text-align: center;\n  min-width: 120px;\n}\n.action-buttons {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.action-buttons .btn-sm {\n  padding: 6px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-buttons .btn-sm:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.action-buttons .btn-primary {\n  background-color: #3b82f6;\n  color: white;\n}\n.action-buttons .btn-primary:hover {\n  background-color: #2563eb;\n}\n.action-buttons .btn-secondary {\n  background-color: #6b7280;\n  color: white;\n}\n.action-buttons .btn-secondary:hover {\n  background-color: #4b5563;\n}\n.action-buttons .btn-danger {\n  background-color: #ef4444;\n  color: white;\n}\n.action-buttons .btn-danger:hover {\n  background-color: #dc2626;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-align: center;\n  min-width: 60px;\n}\n.status-0 {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-1 {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-2 {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.status-3 {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.status-4 {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.kind-badge,\n.role-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.kind-internal {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.kind-external {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.role-speaker {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.role-attendee {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n@media (max-width: 1024px) {\n  .attendees-table th,\n  .attendees-table td {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .attendee-name-cell {\n    min-width: 150px;\n  }\n  .email-cell {\n    min-width: 120px;\n  }\n}\n@media (max-width: 768px) {\n  .attendees-table-container {\n    margin: 0 -16px;\n    border-radius: 0;\n  }\n  .attendees-table th,\n  .attendees-table td {\n    padding: 10px 6px;\n    font-size: 0.75rem;\n  }\n  .attendee-name-cell {\n    min-width: 120px;\n  }\n  .status-cell,\n  .kind-cell,\n  .role-cell {\n    min-width: 60px;\n  }\n  .email-cell,\n  .department-cell {\n    min-width: 100px;\n  }\n  .actions-cell {\n    min-width: 80px;\n  }\n  .action-buttons {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .action-buttons .btn-sm {\n    padding: 4px;\n  }\n}\n@media (max-width: 640px) {\n  .attendees-table th:nth-child(5),\n  .attendees-table td:nth-child(5),\n  .attendees-table th:nth-child(6),\n  .attendees-table td:nth-child(6) {\n    display: none;\n  }\n}\n.attendee-preview {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.preview-label {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.preview-text {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.preview-details {\n  margin-top: 8px;\n}\n.preview-detail {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=meeting-details.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: MeetingsService }, { type: TranslationService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingDetailsComponent, { className: "MeetingDetailsComponent", filePath: "src/app/components/meetings/meeting-details/meeting-details.component.ts", lineNumber: 30 });
})();

// src/app/components/meetings/meetings-routing.module.ts
var routes = [
  {
    path: "",
    component: MeetingsListComponent
  },
  {
    path: "add",
    component: AddMeetingComponent
  },
  {
    path: "details/:id",
    component: MeetingDetailsComponent
  }
];
var MeetingsRoutingModule = class _MeetingsRoutingModule {
  static \u0275fac = function MeetingsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/meetings/meetings.module.ts
var MeetingsModule = class _MeetingsModule {
  static \u0275fac = function MeetingsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MeetingsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MeetingsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        MeetingsListComponent,
        UpdateStatusModalComponent,
        AddMeetingComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule,
        MeetingsRoutingModule
      ],
      exports: [
        MeetingsListComponent,
        UpdateStatusModalComponent,
        AddMeetingComponent
      ]
    }]
  }], null, null);
})();
export {
  MeetingsModule
};
//# sourceMappingURL=chunk-7HMQGXM3.js.map
