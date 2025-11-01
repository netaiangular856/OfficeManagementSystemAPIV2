import {
  SharedModule
} from "./chunk-RD6ZTEUV.js";
import {
  UsersService
} from "./chunk-IC3VYVY3.js";
import "./chunk-PNMAZEJT.js";
import {
  ConfirmationModalComponent
} from "./chunk-MEYPHTY3.js";
import "./chunk-SG2HFLTC.js";
import "./chunk-DKOAWFM7.js";
import "./chunk-OQCKSXR4.js";
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
} from "./chunk-NCA4XVJW.js";
import {
  environment
} from "./chunk-6Z2ZBWA2.js";
import {
  ActivatedRoute,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
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
  Router,
  RouterLink,
  RouterModule,
  Subject,
  TranslationService,
  catchError,
  computed,
  debounceTime,
  inject,
  of,
  setClassMetadata,
  signal,
  switchMap,
  takeUntil,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YBWKTZKF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

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
  // Get all users for assignment dropdown
  getAllUsers() {
    return this.http.get(`${this.baseUrl}/Users/names`);
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
  // Download attachment
  downloadAttachment(meetingId, attachmentId) {
    return this.http.get(`${this.baseUrl}/Meetings/${meetingId}/attachments/${attachmentId}/download`, { responseType: "blob" });
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
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.meeting-title-display[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-select.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-update[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n}\n.btn-update[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=update-status-modal.component-KYPETRIF.css.map */"] });
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
`, styles: ["/* src/app/components/meetings/update-status-modal/update-status-modal.component.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-content {\n  background: white;\n  border-radius: 12px;\n  max-width: 500px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-form {\n  padding: 1.5rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-label {\n  display: block;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.meeting-title-display {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 0.75rem;\n  color: #374151;\n  font-weight: 500;\n}\n.form-select {\n  width: 100%;\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  transition: border-color 0.2s;\n}\n.form-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.form-select.invalid {\n  border-color: #dc2626;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel {\n  background: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21 !important;\n}\n.btn-cancel:hover:not(:disabled) {\n  background: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-update {\n  background: #B68A35;\n  color: white;\n}\n.btn-update:hover:not(:disabled) {\n  background: #B68A35;\n}\n.loading-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 640px) {\n  .modal-content {\n    margin: 1rem;\n    max-height: calc(100vh - 2rem);\n  }\n  .modal-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=update-status-modal.component-KYPETRIF.css.map */\n"] }]
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
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.meeting_type"), ":");
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
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.meeting_type"));
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
  pageSize = signal(9, ...ngDevMode ? [{ debugName: "pageSize" }] : []);
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
            this.totalPages.set(Math.ceil((response.data.totalCount || 0) / this.pageSize()) || 9);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingsListComponent, selectors: [["app-meetings-list"]], standalone: false, decls: 69, vars: 39, consts: [[1, "meetings-page", "rounded-5"], [1, "top-bar"], [1, "top-bar-left"], ["routerLink", "add", 1, "add-meeting-btn"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "plus-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "top-bar-right"], [1, "view-toggle"], [1, "toggle-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["d", "M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"], [1, "page-title"], [1, "search-filters"], [1, "search-box"], [1, "search-label"], [1, "search-input-container"], ["type", "text", 1, "search-input", 3, "ngModelChange", "input", "placeholder", "ngModel"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], [1, "status-filter"], [1, "status-label"], [1, "status-select", 3, "change", "value"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "date-filters"], [1, "date-input-group"], [1, "date-label"], ["type", "date", 1, "date-input", 3, "ngModelChange", "change", "ngModel"], [1, "clear-filters"], [1, "clear-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "loading-container", 4, "ngIf"], ["class", "cards-container", 4, "ngIf"], ["class", "table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "pagination ltr", 4, "ngIf"], [3, "confirm", "cancel", "isVisible", "data"], ["class", "success-modal", 4, "ngIf"], [3, "statusUpdated", "modalClosed", "isVisible", "meeting"], [1, "loading-container"], [1, "loading-spinner"], [1, "cards-container"], ["class", "meeting-card", 3, "rtl", 4, "ngFor", "ngForOf"], [1, "meeting-card"], [1, "card-header"], [1, "meeting-title"], [1, "meeting-status"], [1, "card-content"], [1, "meeting-info"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "card-actions"], [1, "action-btn", "details-btn", 3, "routerLink"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "action-btn", "status-btn", 3, "click"], ["d", "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"], ["cx", "7", "cy", "7", "r", "1"], [1, "action-btn", "delete-btn", 3, "click"], ["points", "3,6 5,6 21,6"], ["d", "m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], [1, "table-container"], [1, "meetings-table"], [4, "ngFor", "ngForOf"], [1, "status-badge"], [1, "actions-cell"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "action-btn", "edit-btn", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "pagination", "ltr"], [1, "pagination-info"], [1, "current-range"], [1, "total-count"], [1, "pagination-controls"], [1, "page-size-select", 3, "change", "value"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "page-buttons"], [1, "page-btn", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-btn", 3, "click"], [1, "success-modal"], [1, "success-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "close-btn", 3, "click"]], template: function MeetingsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275text(4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "line", 5)(7, "line", 6);
      \u0275\u0275elementEnd()()();
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
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("meetings.add_meeting"), " ");
      \u0275\u0275advance(4);
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
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, ConfirmationModalComponent, UpdateStatusModalComponent], styles: ["\n\n.meetings-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.meetings-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row-reverse;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.add-meeting-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-meeting-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.plus-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 1rem;\n}\n.search-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto auto auto auto;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: end;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.status-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.status-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.status-select[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.status-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.date-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.date-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.date-input[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.date-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cards-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.meeting-card[_ngcontent-%COMP%] {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.meeting-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #CBA344;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  line-height: 1.4;\n  flex: 1;\n  min-height: 2.5rem;\n  display: flex;\n  align-items: flex-start;\n}\n.meeting-status[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.status-scheduled[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.status-done[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #059669;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.status-unknown[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1;\n}\n.meeting-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  min-width: 80px;\n}\n.info-value[_ngcontent-%COMP%] {\n  color: #111827;\n  font-size: 0.875rem;\n  text-align: right;\n  flex: 1;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  gap: 0.75rem;\n}\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.details-btn[_ngcontent-%COMP%] {\n  background-color: #F2ECCE;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.details-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.status-btn[_ngcontent-%COMP%] {\n  background-color: #F9F7ED;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.status-btn[_ngcontent-%COMP%]:hover {\n  background-color: #E6D7A2;\n  color: #7C5E24;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  background-color: #F9F7ED;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  color: #F9F7ED;\n  border: 1px solid #7C5E24;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n  border: 1px solid #e5e7eb;\n}\n.meetings-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.meetings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.meetings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.meetings-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions-cell[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 0.375rem;\n  border-radius: 0.25rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-size: 0.875rem;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.current-range[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n.total-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background-color: white;\n}\n.page-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.success-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n}\n.success-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #059669;\n  margin-bottom: 1rem;\n}\n.success-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #A87D2A;\n}\n@media (max-width: 1024px) {\n  .search-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .date-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cards-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .meetings-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .cards-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .meetings-table[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .meetings-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .meetings-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .card-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .add-meeting-btn[_ngcontent-%COMP%], \n   .clear-btn[_ngcontent-%COMP%], \n   .date-input[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    justify-content: center !important;\n  }\n  .view-toggle[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    justify-content: center !important;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=meetings-list.component-3FX3TI2K.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingsListComponent, [{
    type: Component,
    args: [{ selector: "app-meetings-list", standalone: false, template: `<div class="meetings-page rounded-5" [class.rtl]="isRTL()">\r
  <!-- Top Bar -->\r
  <div class="top-bar">\r
    <!-- LTR: Button on right, view toggle on left -->\r
    <div class="top-bar-left" [class.ltr-right]="!isRTL()">\r
      <button class="add-meeting-btn" routerLink="add">\r
        {{ translate("meetings.add_meeting") }}\r
        <svg\r
          class="plus-icon"\r
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
    <div class="top-bar-right" [class.ltr-left]="!isRTL()">\r
      <div class="view-toggle">\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'cards'"\r
          (click)="viewMode.set('cards')"\r
        >\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <rect x="3" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="3" width="7" height="7"></rect>\r
            <rect x="14" y="14" width="7" height="7"></rect>\r
            <rect x="3" y="14" width="7" height="7"></rect>\r
          </svg>\r
          {{ translate("meetings.view_cards") }}\r
        </button>\r
        <button\r
          class="toggle-btn"\r
          [class.active]="viewMode() === 'table'"\r
          (click)="viewMode.set('table')"\r
        >\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 9v12"></path>\r
          </svg>\r
          {{ translate("meetings.view_table") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Page Title -->\r
  <h1 class="page-title">{{ translate("meetings.title") }}</h1>\r
\r
  <!-- Search and Filters -->\r
  <div class="search-filters">\r
    <div class="search-box">\r
      <label class="search-label">{{\r
        translate("meetings.search_label")\r
      }}</label>\r
      <div class="search-input-container">\r
        <input\r
          type="text"\r
          [placeholder]="translate('common.search')"\r
          [(ngModel)]="searchTerm"\r
          (input)="onSearch($event)"\r
          class="search-input"\r
        />\r
        <svg\r
          class="search-icon"\r
          width="20"\r
          height="20"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <circle cx="11" cy="11" r="8"></circle>\r
          <path d="m21 21-4.35-4.35"></path>\r
        </svg>\r
      </div>\r
    </div>\r
\r
    <!-- Status Filter -->\r
    <div class="status-filter">\r
      <label class="status-label">{{\r
        translate("meetings.status_filter")\r
      }}</label>\r
      <select\r
        class="status-select"\r
        [value]="statusFilter() || ''"\r
        (change)="onStatusFilterChange($event)"\r
      >\r
        <option value="">{{ translate("meetings.all_statuses") }}</option>\r
        <option value="0">{{ translate("meetings.status.scheduled") }}</option>\r
        <option value="1">\r
          {{ translate("meetings.status.in_progress") }}\r
        </option>\r
        <option value="2">{{ translate("meetings.status.done") }}</option>\r
        <option value="3">{{ translate("meetings.status.cancelled") }}</option>\r
      </select>\r
    </div>\r
\r
    <!-- Date Range Filter -->\r
    <div class="date-filters">\r
      <div class="date-input-group">\r
        <label class="date-label">{{ translate("meetings.from_date") }}</label>\r
        <input\r
          type="date"\r
          [(ngModel)]="fromDate"\r
          (change)="onDateFilter()"\r
          class="date-input"\r
        />\r
      </div>\r
      <div class="date-input-group">\r
        <label class="date-label">{{ translate("meetings.to_date") }}</label>\r
        <input\r
          type="date"\r
          [(ngModel)]="toDate"\r
          (change)="onDateFilter()"\r
          class="date-input"\r
        />\r
      </div>\r
    </div>\r
\r
    <!-- Clear Filters Button -->\r
    <div class="clear-filters">\r
      <button class="clear-btn" (click)="clearFilters()">\r
        <svg\r
          width="16"\r
          height="16"\r
          viewBox="0 0 24 24"\r
          fill="none"\r
          stroke="currentColor"\r
          stroke-width="2"\r
        >\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
        {{ translate("meetings.clear_filters") }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading Spinner -->\r
  <div *ngIf="loading()" class="loading-container">\r
    <div class="loading-spinner"></div>\r
    <p>{{ translate("common.loading") }}</p>\r
  </div>\r
\r
  <!-- Cards View -->\r
  <div *ngIf="!loading() && viewMode() === 'cards'" class="cards-container">\r
    <div\r
      *ngFor="let meeting of meetings()"\r
      class="meeting-card"\r
      [class.rtl]="isRTL()"\r
    >\r
      <div class="card-header">\r
        <h3 class="meeting-title">{{ meeting.title }}</h3>\r
        <div\r
          class="meeting-status"\r
          [class]="getMeetingStatusClass(meeting.status)"\r
        >\r
          {{ getMeetingStatusText(meeting.status) }}\r
        </div>\r
      </div>\r
\r
      <div class="card-content">\r
        <div class="meeting-info">\r
          <div class="info-row">\r
            <span class="info-label">{{ translate("meetings.agenda") }}:</span>\r
            <span class="info-value">{{ meeting.agenda }}</span>\r
          </div>\r
          <div class="info-row">\r
            <span class="info-label">{{ translate("meetings.meeting_type") }}:</span>\r
            <span class="info-value">{{\r
              getMeetingTypeText(meeting.type)\r
            }}</span>\r
          </div>\r
          <div class="info-row">\r
            <span class="info-label"\r
              >{{ translate("meetings.locations") }}:</span\r
            >\r
            <span class="info-value">{{\r
              getLocationModeText(meeting.locationMode)\r
            }}</span>\r
          </div>\r
          <div class="info-row">\r
            <span class="info-label"\r
              >{{ translate("meetings.start_time") }}:</span\r
            >\r
            <span class="info-value">{{ formatDate(meeting.startAt) }}</span>\r
          </div>\r
          <div class="info-row">\r
            <span class="info-label"\r
              >{{ translate("meetings.end_time") }}:</span\r
            >\r
            <span class="info-value">{{ formatDate(meeting.endAt) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="card-actions">\r
        <button\r
          class="action-btn details-btn"\r
          [routerLink]="['details', meeting.id]"\r
        >\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>\r
            <circle cx="12" cy="12" r="3"></circle>\r
          </svg>\r
          {{ translate("meetings.view_details") }}\r
        </button>\r
        <button\r
          class="action-btn status-btn"\r
          (click)="openStatusModal(meeting)"\r
        >\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <path\r
              d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"\r
            ></path>\r
            <circle cx="7" cy="7" r="1"></circle>\r
          </svg>\r
          {{ translate("meetings.update_status") }}\r
        </button>\r
        <button\r
          class="action-btn delete-btn"\r
          (click)="openDeleteModal(meeting)"\r
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
              d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
            ></path>\r
          </svg>\r
          {{ translate("meetings.delete") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Table View -->\r
  <div *ngIf="!loading() && viewMode() === 'table'" class="table-container">\r
    <table class="meetings-table">\r
      <thead>\r
        <tr>\r
          <th>{{ translate("meetings.title") }}</th>\r
          <th>{{ translate("meetings.agenda") }}</th>\r
          <th>{{ translate("meetings.meeting_type") }}</th>\r
          <th>{{ translate("meetings.locations") }}</th>\r
          <th>{{ translate("meetings.start_time") }}</th>\r
          <th>{{ translate("meetings.end_time") }}</th>\r
          <th>{{ translate("meetings.statuses") }}</th>\r
          <th>{{ translate("meetings.actions") }}</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let meeting of meetings()">\r
          <td>{{ meeting.title }}</td>\r
          <td>{{ meeting.agenda }}</td>\r
          <td>{{ getMeetingTypeText(meeting.type) }}</td>\r
          <td>{{ getLocationModeText(meeting.locationMode) }}</td>\r
          <td>{{ formatDate(meeting.startAt) }}</td>\r
          <td>{{ formatDate(meeting.endAt) }}</td>\r
          <td>\r
            <span\r
              class="status-badge"\r
              [class]="getMeetingStatusClass(meeting.status)"\r
            >\r
              {{ getMeetingStatusText(meeting.status) }}\r
            </span>\r
          </td>\r
\r
          <td class="actions-cell">\r
            <button\r
              class="action-btn details-btn"\r
              [routerLink]="['details', meeting.id]"\r
            >\r
              <svg\r
                width="14"\r
                height="14"\r
                viewBox="0 0 24 24"\r
                fill="none"\r
                stroke="currentColor"\r
                stroke-width="2"\r
              >\r
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>\r
                <circle cx="12" cy="12" r="3"></circle>\r
              </svg>\r
            </button>\r
            <button\r
              class="action-btn edit-btn"\r
              (click)="openStatusModal(meeting)"\r
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
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
              </svg>\r
            </button>\r
            <button\r
              class="action-btn delete-btn"\r
              (click)="openDeleteModal(meeting)"\r
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
                  d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"\r
                ></path>\r
              </svg>\r
            </button>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading() && meetings().length === 0" class="empty-state">\r
    <svg\r
      width="64"\r
      height="64"\r
      viewBox="0 0 24 24"\r
      fill="none"\r
      stroke="currentColor"\r
      stroke-width="1"\r
    >\r
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>\r
      <line x1="16" y1="2" x2="16" y2="6"></line>\r
      <line x1="8" y1="2" x2="8" y2="6"></line>\r
      <line x1="3" y1="10" x2="21" y2="10"></line>\r
    </svg>\r
    <h3>{{ translate("meetings.no_meetings") }}</h3>\r
    <p>{{ translate("meetings.no_meetings_description") }}</p>\r
    <button class="add-meeting-btn" routerLink="add">\r
      {{ translate("meetings.add_first_meeting") }}\r
    </button>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div *ngIf="!loading() && meetings().length > 0" class="pagination ltr">\r
    <div class="pagination-info">\r
      <span>{{ translate("common.showing") }}</span>\r
      <span class="current-range">\r
        {{ (currentPage() - 1) * pageSize() + 1 }} -\r
        {{ Math.min(currentPage() * pageSize(), totalCount()) }}\r
      </span>\r
      <span>{{ translate("common.of") }}</span>\r
      <span class="total-count">{{ totalCount() }}</span>\r
      <span>{{ translate("common.results") }}</span>\r
    </div>\r
\r
    <div class="pagination-controls">\r
      <select\r
        class="page-size-select"\r
        [value]="pageSize()"\r
        (change)="onPageSizeChange($event)"\r
      >\r
        <option value="5">5</option>\r
        <option value="10">10</option>\r
        <option value="20">20</option>\r
        <option value="50">50</option>\r
      </select>\r
\r
      <div class="page-buttons">\r
        <button\r
          class="page-btn"\r
          [disabled]="currentPage() === 1"\r
          (click)="onPageChange(currentPage() - 1)"\r
        >\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <polyline points="15,18 9,12 15,6"></polyline>\r
          </svg>\r
        </button>\r
\r
        <button\r
          *ngFor="let page of getPageNumbers()"\r
          class="page-btn"\r
          [class.active]="page === currentPage()"\r
          (click)="onPageChange(page)"\r
        >\r
          {{ page }}\r
        </button>\r
\r
        <button\r
          class="page-btn"\r
          [disabled]="currentPage() === totalPages()"\r
          (click)="onPageChange(currentPage() + 1)"\r
        >\r
          <svg\r
            width="16"\r
            height="16"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="currentColor"\r
            stroke-width="2"\r
          >\r
            <polyline points="9,18 15,12 9,6"></polyline>\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Delete Confirmation Modal -->\r
  <app-confirmation-modal\r
    [isVisible]="showDeleteModal()"\r
    [data]="deleteModalData()"\r
    (confirm)="onDeleteConfirm()"\r
    (cancel)="onDeleteCancel()"\r
  ></app-confirmation-modal>\r
\r
  <!-- Success Modal -->\r
  <div *ngIf="showSuccessModal()" class="success-modal">\r
    <div class="success-content">\r
      <svg\r
        width="24"\r
        height="24"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>\r
        <polyline points="22,4 12,14.01 9,11.01"></polyline>\r
      </svg>\r
      <p>{{ successMessage() }}</p>\r
      <button class="close-btn" (click)="closeSuccessModal()">\r
        {{ translate("common.close") }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Update Status Modal -->\r
  <app-update-status-modal\r
    [isVisible]="showStatusModal()"\r
    [meeting]="meetingToUpdateStatus()"\r
    (statusUpdated)="onStatusUpdated($event)"\r
    (modalClosed)="onStatusModalClose()"\r
  ></app-update-status-modal>\r
</div>\r
`, styles: ["/* src/app/components/meetings/meetings-list/meetings-list.component.css */\n.meetings-page {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.meetings-page.rtl {\n  direction: rtl;\n  text-align: right;\n}\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row-reverse;\n  margin-bottom: 2rem;\n  padding: 1rem 0;\n}\n.add-meeting-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 16px !important;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background-color 0.2s ease, box-shadow 0.2s ease;\n  font-family: inherit;\n}\n.add-meeting-btn:hover {\n  background-color: #A87D2A;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.plus-icon {\n  width: 20px;\n  height: 20px;\n}\n.view-toggle {\n  display: flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.25rem;\n  gap: 0.25rem;\n}\n.toggle-btn {\n  background: none;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.toggle-btn:hover {\n  color: #374151;\n  background-color: #e5e7eb;\n}\n.toggle-btn.active {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #5F646D;\n  margin-bottom: 1rem;\n}\n.search-filters {\n  display: grid;\n  grid-template-columns: 1fr auto auto auto auto;\n  gap: 1rem;\n  margin-bottom: 2rem;\n  align-items: end;\n}\n.search-box {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.search-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.search-input-container {\n  position: relative;\n}\n.search-input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n  background-color: white;\n}\n.search-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.search-icon {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n}\n.status-filter {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.status-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.status-select {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  cursor: pointer;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.status-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.date-filters {\n  display: flex;\n  gap: 1rem;\n}\n.date-input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.date-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.date-input {\n  padding: 0.75rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  background-color: white;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.date-input:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.clear-filters {\n  display: flex;\n  align-items: end;\n}\n.clear-btn {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 1rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.clear-btn:hover {\n  background-color: #e5e7eb;\n  color: #374151;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.loading-spinner {\n  width: 2rem;\n  height: 2rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid #B68A35;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.cards-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.meeting-card {\n  background: #f2eccf25;\n  border: 1px solid #F4F4F4;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.meeting-card:hover {\n  border: 1px solid #CBA344;\n}\n.card-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f3f4f6;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.meeting-title {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0;\n  line-height: 1.4;\n  flex: 1;\n  min-height: 2.5rem;\n  display: flex;\n  align-items: flex-start;\n}\n.meeting-status {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n}\n.status-scheduled {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-in-progress {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.status-done {\n  background-color: #d1fae5;\n  color: #059669;\n}\n.status-cancelled {\n  background-color: #fee2e2;\n  color: #dc2626;\n}\n.status-unknown {\n  background-color: #f3f4f6;\n  color: #6b7280;\n}\n.card-content {\n  padding: 1.5rem;\n  flex: 1;\n}\n.meeting-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.info-label {\n  font-weight: 600;\n  color: #6b7280;\n  font-size: 0.875rem;\n  min-width: 80px;\n}\n.info-value {\n  color: #111827;\n  font-size: 0.875rem;\n  text-align: right;\n  flex: 1;\n}\n.card-actions {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f3f4f6;\n  display: flex;\n  gap: 0.75rem;\n}\n.action-btn {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.details-btn {\n  background-color: #F2ECCE;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.details-btn:hover {\n  background-color: #B68A35;\n  border-color: #F9F7ED;\n  color: #F9F7ED;\n}\n.status-btn {\n  background-color: #F9F7ED;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.status-btn:hover {\n  background-color: #E6D7A2;\n  color: #7C5E24;\n}\n.edit-btn {\n  background-color: #F9F7ED;\n  color: #7C5E24;\n  border: 1px solid #7C5E24;\n}\n.edit-btn:hover {\n  background-color: #B68A35;\n  color: #F9F7ED;\n  border: 1px solid #7C5E24;\n}\n.delete-btn {\n  background-color: #ffcdd236;\n  color: #c62828c9;\n  border: 1px solid #c62828a9;\n}\n.delete-btn:hover {\n  background-color: #c62828c9;\n  color: #FFFFFF;\n  border-color: #c62828a9;\n}\n.table-container {\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  margin-bottom: 2rem;\n  border: 1px solid #e5e7eb;\n}\n.meetings-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.meetings-table th {\n  background-color: #f9fafb;\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n.meetings-table td {\n  padding: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #111827;\n  font-size: 0.875rem;\n}\n.meetings-table tr:hover {\n  background-color: #f9fafb;\n}\n.status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.actions-cell {\n  display: flex;\n  gap: 0.5rem;\n}\n.actions-cell .action-btn {\n  flex: none;\n  padding: 0.375rem;\n  border-radius: 0.25rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #6b7280;\n}\n.empty-state svg {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-state h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n}\n.empty-state p {\n  margin-bottom: 2rem;\n  font-size: 0.875rem;\n}\n.pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n  border-top: 1px solid #e5e7eb;\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.current-range {\n  font-weight: 600;\n  color: #374151;\n}\n.total-count {\n  font-weight: 600;\n  color: #374151;\n}\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  background-color: white;\n}\n.page-buttons {\n  display: flex;\n  gap: 0.25rem;\n}\n.page-btn {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #d1d5db;\n  background-color: white;\n  color: #374151;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  font-family: inherit;\n}\n.page-btn:hover:not(:disabled) {\n  background-color: #f9fafb;\n  border-color: #9ca3af;\n}\n.page-btn.active {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.success-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.success-content {\n  background: white;\n  padding: 2rem;\n  border-radius: 0.75rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  max-width: 400px;\n  width: 90%;\n}\n.success-content svg {\n  color: #059669;\n  margin-bottom: 1rem;\n}\n.success-content p {\n  margin-bottom: 1.5rem;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.close-btn {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  font-family: inherit;\n}\n.close-btn:hover {\n  background-color: #A87D2A;\n}\n@media (max-width: 1024px) {\n  .search-filters {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .date-filters {\n    flex-direction: column;\n  }\n  .cards-container {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .meetings-page {\n    padding: 1rem;\n  }\n  .top-bar {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .view-toggle {\n    justify-content: center;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .cards-container {\n    grid-template-columns: 1fr;\n  }\n  .pagination {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .pagination-controls {\n    justify-content: center;\n  }\n  .meetings-table {\n    font-size: 0.75rem;\n  }\n  .meetings-table th,\n  .meetings-table td {\n    padding: 0.75rem 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .card-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .add-meeting-btn,\n  .clear-btn,\n  .date-input {\n    width: 100% !important;\n    max-width: 100% !important;\n    justify-content: center !important;\n  }\n  .view-toggle {\n    width: 100% !important;\n    max-width: 100% !important;\n    justify-content: center !important;\n  }\n  .card-actions {\n    flex-direction: column;\n  }\n  .pagination-info {\n    justify-content: center;\n  }\n  .info-row {\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .info-value {\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=meetings-list.component-3FX3TI2K.css.map */\n"] }]
  }], () => [{ type: MeetingsService }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingsListComponent, { className: "MeetingsListComponent", filePath: "src/app/components/meetings/meetings-list/meetings-list.component.ts", lineNumber: 17 });
})();

// src/app/components/meetings/add-meeting/add-meeting.component.ts
var _c02 = () => ({ standalone: true });
function AddMeetingComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function AddMeetingComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startOver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 32);
    \u0275\u0275element(2, "polyline", 56)(3, "path", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r2.translate("meetings.start_over_tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.start_over"), " ");
  }
}
function AddMeetingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function AddMeetingComponent_div_8_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSuccess());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "path", 60)(3, "polyline", 61);
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
function AddMeetingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function AddMeetingComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearError());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 63)(3, "line", 64)(4, "line", 65);
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
function AddMeetingComponent_div_20_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_20_span_2_Template(rf, ctx) {
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
function AddMeetingComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_20_span_1_Template, 2, 1, "span", 67)(2, AddMeetingComponent_div_20_span_2_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("title")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.meetingForm.get("title")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function AddMeetingComponent_div_25_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_25_span_2_Template(rf, ctx) {
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
function AddMeetingComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_25_span_1_Template, 2, 1, "span", 67)(2, AddMeetingComponent_div_25_span_2_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("agenda")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.meetingForm.get("agenda")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
  }
}
function AddMeetingComponent_div_36_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_36_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("type")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function AddMeetingComponent_div_47_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_47_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("locationMode")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function AddMeetingComponent_div_48_div_4_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_48_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_48_div_4_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function AddMeetingComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 69);
    \u0275\u0275template(4, AddMeetingComponent_div_48_div_4_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("meetings.location_text"), " * ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("meetings.location_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.meetingForm.get("locationText")) == null ? null : tmp_6_0.touched));
  }
}
function AddMeetingComponent_div_49_div_4_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_49_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_49_div_4_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function AddMeetingComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 71);
    \u0275\u0275template(4, AddMeetingComponent_div_49_div_4_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("meetings.online_url"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("meetings.online_url_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r2.meetingForm.get("onlineUrl")) == null ? null : tmp_6_0.touched));
  }
}
function AddMeetingComponent_div_54_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_54_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("startAt")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function AddMeetingComponent_div_59_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_59_span_2_Template(rf, ctx) {
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
function AddMeetingComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_59_span_1_Template, 2, 1, "span", 67)(2, AddMeetingComponent_div_59_span_2_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.meetingForm.get("endAt")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.meetingForm.get("endAt")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["invalidTimeRange"]);
  }
}
function AddMeetingComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 74)(3, "circle", 75)(4, "path", 76)(5, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p", 78);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.attendee"));
  }
}
function AddMeetingComponent_div_71_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("right", ctx_r2.isRTL() ? "auto" : "10px")("left", ctx_r2.isRTL() ? "10px" : "auto");
  }
}
function AddMeetingComponent_div_71_div_29_div_9_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r10.departmentName);
  }
}
function AddMeetingComponent_div_71_div_29_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function AddMeetingComponent_div_71_div_29_div_9_div_2_Template_div_click_0_listener() {
      const user_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const i_r7 = \u0275\u0275nextContext(3).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectUserForAttendee(i_r7, user_r10));
    });
    \u0275\u0275elementStart(1, "div", 105)(2, "div", 106);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddMeetingComponent_div_71_div_29_div_9_div_2_div_4_Template, 2, 1, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r10.departmentName);
  }
}
function AddMeetingComponent_div_71_div_29_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275template(2, AddMeetingComponent_div_71_div_29_div_9_div_2_Template, 5, 2, "div", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext(2).index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredUsersForSearch[i_r7]);
  }
}
function AddMeetingComponent_div_71_div_29_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 109);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext(2).index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.userSearchError[i_r7], " ");
  }
}
function AddMeetingComponent_div_71_div_29_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 111);
    \u0275\u0275element(3, "i", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.no_users_found"), " ");
  }
}
function AddMeetingComponent_div_71_div_29_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const i_r7 = \u0275\u0275nextContext(3).index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_8_0 = ctx_r2.getSelectedUserForAttendee(i_r7)) == null ? null : tmp_8_0.departmentName, " ");
  }
}
function AddMeetingComponent_div_71_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 105)(3, "div", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddMeetingComponent_div_71_div_29_div_12_div_5_Template, 2, 1, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 115);
    \u0275\u0275listener("click", function AddMeetingComponent_div_71_div_29_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const i_r7 = \u0275\u0275nextContext(2).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedUserForAttendee(i_r7));
    });
    \u0275\u0275element(7, "i", 116);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const i_r7 = \u0275\u0275nextContext(2).index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r2.getSelectedUserForAttendee(i_r7)) == null ? null : tmp_7_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r2.getSelectedUserForAttendee(i_r7)) == null ? null : tmp_8_0.departmentName);
  }
}
function AddMeetingComponent_div_71_div_29_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("login.field_required"), " ");
  }
}
function AddMeetingComponent_div_71_div_29_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_71_div_29_div_14_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const attendee_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = attendee_r12.get("userId")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
  }
}
function AddMeetingComponent_div_71_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 14)(2, "label", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "input", 96);
    \u0275\u0275listener("input", function AddMeetingComponent_div_71_div_29_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttendeeUserSearch(i_r7));
    })("focus", function AddMeetingComponent_div_71_div_29_Template_input_focus_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttendeeUserSearchFocus(i_r7, $event));
    })("blur", function AddMeetingComponent_div_71_div_29_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r7 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttendeeUserSearchBlur(i_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AddMeetingComponent_div_71_div_29_div_8_Template, 4, 4, "div", 44)(9, AddMeetingComponent_div_71_div_29_div_9_Template, 3, 1, "div", 45)(10, AddMeetingComponent_div_71_div_29_div_10_Template, 5, 1, "div", 45)(11, AddMeetingComponent_div_71_div_29_div_11_Template, 5, 1, "div", 45)(12, AddMeetingComponent_div_71_div_29_div_12_Template, 8, 2, "div", 46);
    \u0275\u0275element(13, "input", 97);
    \u0275\u0275template(14, AddMeetingComponent_div_71_div_29_div_14_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r12 = \u0275\u0275nextContext();
    const attendee_r12 = ctx_r12.$implicit;
    const i_r7 = ctx_r12.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("Add-Meeting.select_user"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_7_0 = attendee_r12.get("userId")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = attendee_r12.get("userId")) == null ? null : tmp_7_0.touched));
    \u0275\u0275property("id", "userSearch" + i_r7)("placeholder", ctx_r2.translate("Add-Meeting.select_user_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSearchingUsers[i_r7]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showUserDropdown[i_r7] && ctx_r2.filteredUsersForSearch[i_r7] && ctx_r2.filteredUsersForSearch[i_r7].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showUserDropdown[i_r7] && ctx_r2.userSearchError[i_r7] && !ctx_r2.isSearchingUsers[i_r7]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showUserDropdown[i_r7] && !ctx_r2.userSearchError[i_r7] && (!ctx_r2.filteredUsersForSearch[i_r7] || ctx_r2.filteredUsersForSearch[i_r7].length === 0) && !ctx_r2.isSearchingUsers[i_r7] && (!ctx_r2.usersForSearch[i_r7] || ctx_r2.usersForSearch[i_r7].length === 0) && ((tmp_13_0 = attendee_r12.get("userSearch")) == null ? null : tmp_13_0.value) && ((tmp_13_0 = attendee_r12.get("userSearch")) == null ? null : tmp_13_0.value.toString().trim().length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getSelectedUserForAttendee(i_r7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_15_0 = attendee_r12.get("userId")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = attendee_r12.get("userId")) == null ? null : tmp_15_0.touched));
  }
}
function AddMeetingComponent_div_71_div_30_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("login.field_required"), " ");
  }
}
function AddMeetingComponent_div_71_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_71_div_30_div_8_span_1_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const attendee_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = attendee_r12.get("displayName")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
  }
}
function AddMeetingComponent_div_71_div_30_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("login.field_required"), " ");
  }
}
function AddMeetingComponent_div_71_div_30_div_34_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("login.email_invalid"), " ");
  }
}
function AddMeetingComponent_div_71_div_30_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_71_div_30_div_34_span_1_Template, 2, 1, "span", 67)(2, AddMeetingComponent_div_71_div_30_div_34_span_2_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    const attendee_r12 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_7_0 = attendee_r12.get("email")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = attendee_r12.get("email")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["email"]);
  }
}
function AddMeetingComponent_div_71_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 87)(2, "div", 14)(3, "label", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 95);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 118);
    \u0275\u0275template(8, AddMeetingComponent_div_71_div_30_div_8_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "label", 88);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 119);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 87)(16, "div", 14)(17, "label", 88);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 119);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14)(23, "label", 88);
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "span", 119);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(27, "input", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "label", 88);
    \u0275\u0275text(30);
    \u0275\u0275elementStart(31, "span", 95);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "input", 123);
    \u0275\u0275template(34, AddMeetingComponent_div_71_div_30_div_34_Template, 3, 2, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    let tmp_12_0;
    let tmp_16_0;
    let tmp_20_0;
    let tmp_23_0;
    let tmp_25_0;
    const attendee_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("Add-Meeting.display_name"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_7_0 = attendee_r12.get("displayName")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = attendee_r12.get("displayName")) == null ? null : tmp_7_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.display_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = attendee_r12.get("displayName")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = attendee_r12.get("displayName")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("Add-Meeting.organization"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r2.translate("common.optional"), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_12_0 = attendee_r12.get("organization")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = attendee_r12.get("organization")) == null ? null : tmp_12_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.organization_placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("Add-Meeting.job_title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r2.translate("common.optional"), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_16_0 = attendee_r12.get("jobTitle")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = attendee_r12.get("jobTitle")) == null ? null : tmp_16_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.job_title_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.department"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r2.translate("common.optional"), ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_20_0 = attendee_r12.get("department")) == null ? null : tmp_20_0.invalid) && ((tmp_20_0 = attendee_r12.get("department")) == null ? null : tmp_20_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.department_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.email"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("error", ((tmp_23_0 = attendee_r12.get("email")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = attendee_r12.get("email")) == null ? null : tmp_23_0.touched));
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.email_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_25_0 = attendee_r12.get("email")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = attendee_r12.get("email")) == null ? null : tmp_25_0.touched));
  }
}
function AddMeetingComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "h3", 81);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 82);
    \u0275\u0275listener("click", function AddMeetingComponent_div_71_Template_button_click_4_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeAttendee(i_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 83);
    \u0275\u0275element(6, "polyline", 84)(7, "path", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 86)(10, "div", 87)(11, "div", 14)(12, "label", 88);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 89);
    \u0275\u0275listener("change", function AddMeetingComponent_div_71_Template_select_change_14_listener($event) {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAttendeeKindChange($event, i_r7));
    });
    \u0275\u0275elementStart(15, "option", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 14)(20, "label", 88);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 90)(23, "option", 22);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 22);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 22);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, AddMeetingComponent_div_71_div_29_Template, 15, 11, "div", 91)(30, AddMeetingComponent_div_71_div_30_Template, 35, 25, "div", 92);
    \u0275\u0275elementStart(31, "div", 14)(32, "label", 88);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "textarea", 93);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r2.translate("Add-Meeting.attendee"), " ", i_r7 + 1, " ");
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
    \u0275\u0275property("ngIf", ctx_r2.showInternalFields()[i_r7]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showExternalFields()[i_r7]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("Add-Meeting.notes"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r2.translate("Add-Meeting.notes_placeholder"));
  }
}
function AddMeetingComponent_div_72_span_1_Template(rf, ctx) {
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
function AddMeetingComponent_div_72_span_2_Template(rf, ctx) {
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
function AddMeetingComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, AddMeetingComponent_div_72_span_1_Template, 2, 1, "span", 67)(2, AddMeetingComponent_div_72_span_2_Template, 2, 1, "span", 67);
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
function AddMeetingComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "span", 100);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("right", ctx_r2.isRTL() ? "auto" : "10px")("left", ctx_r2.isRTL() ? "10px" : "auto");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.translate("common.loading"));
  }
}
function AddMeetingComponent_div_88_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r15.departmentName);
  }
}
function AddMeetingComponent_div_88_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275listener("click", function AddMeetingComponent_div_88_div_2_Template_div_click_0_listener() {
      const user_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectUserForRecommendation(user_r15));
    });
    \u0275\u0275elementStart(1, "div", 105)(2, "div", 106);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddMeetingComponent_div_88_div_2_div_4_Template, 2, 1, "div", 107);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r15.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r15.departmentName);
  }
}
function AddMeetingComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102);
    \u0275\u0275template(2, AddMeetingComponent_div_88_div_2_Template, 5, 2, "div", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.recommendationFilteredUsersForSearch);
  }
}
function AddMeetingComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 109);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.recommendationUserSearchError, " ");
  }
}
function AddMeetingComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 111);
    \u0275\u0275element(3, "i", 112);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.no_users_found"), " ");
  }
}
function AddMeetingComponent_div_91_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r2.getSelectedUserForRecommendation()) == null ? null : tmp_4_0.departmentName, " ");
  }
}
function AddMeetingComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 105)(3, "div", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddMeetingComponent_div_91_div_5_Template, 2, 1, "div", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 115);
    \u0275\u0275listener("click", function AddMeetingComponent_div_91_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedUserForRecommendation());
    });
    \u0275\u0275element(7, "i", 116);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r2.getSelectedUserForRecommendation()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r2.getSelectedUserForRecommendation()) == null ? null : tmp_4_0.departmentName);
  }
}
function AddMeetingComponent__svg_svg_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 124)(1, "circle", 125);
    \u0275\u0275element(2, "animate", 126)(3, "animate", 127);
    \u0275\u0275elementEnd()();
  }
}
function AddMeetingComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "p", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.no_recommendations"), " ");
  }
}
function AddMeetingComponent_div_99_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132)(1, "span", 133);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 134);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.translate("meetings.assigned_to"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getUserNameById(recommendation_r18.assigneeUserId));
  }
}
function AddMeetingComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "span", 129);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 130);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddMeetingComponent_div_99_div_5_Template, 5, 2, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recommendation_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", i_r19 + 1, ".");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recommendation_r18.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", recommendation_r18.assigneeUserId);
  }
}
function AddMeetingComponent__svg_svg_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 124)(1, "circle", 125);
    \u0275\u0275element(2, "animate", 126)(3, "animate", 127);
    \u0275\u0275elementEnd()();
  }
}
function AddMeetingComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function AddMeetingComponent_div_106_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelStartOver());
    });
    \u0275\u0275elementStart(1, "div", 136);
    \u0275\u0275listener("click", function AddMeetingComponent_div_106_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 137);
    \u0275\u0275listener("click", function AddMeetingComponent_div_106_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelStartOver());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 138);
    \u0275\u0275element(4, "line", 139)(5, "line", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 141);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 142);
    \u0275\u0275element(8, "path", 143)(9, "line", 144)(10, "line", 145);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "h2", 146);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 147);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 148)(16, "button", 149);
    \u0275\u0275listener("click", function AddMeetingComponent_div_106_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelStartOver());
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 150);
    \u0275\u0275listener("click", function AddMeetingComponent_div_106_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmStartOver());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("rtl", ctx_r2.isRTL());
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.translate("meetings.start_over"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.translate("meetings.confirm_start_over"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("login.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.translate("meetings.start_over"), " ");
  }
}
var AddMeetingComponent = class _AddMeetingComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  meetingsService = inject(MeetingsService);
  usersService = inject(UsersService);
  translationService = inject(TranslationService);
  langService = inject(LangService);
  cdr = inject(ChangeDetectorRef);
  destroy$ = new Subject();
  // Local storage key for draft
  DRAFT_STORAGE_KEY = "meeting_draft";
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
  allUsers = [];
  currentLocationMode = signal(MeetingLocationMode.InPerson, ...ngDevMode ? [{ debugName: "currentLocationMode" }] : []);
  hasDraft = signal(false, ...ngDevMode ? [{ debugName: "hasDraft" }] : []);
  showStartOverModal = signal(false, ...ngDevMode ? [{ debugName: "showStartOverModal" }] : []);
  // User search state for each attendee (indexed by attendee index)
  usersForSearch = [];
  filteredUsersForSearch = [];
  showUserDropdown = [];
  isSearchingUsers = [];
  userSearchError = [];
  // User search state for recommendation assignee
  recommendationUsersForSearch = [];
  recommendationFilteredUsersForSearch = [];
  showRecommendationUserDropdown = false;
  isSearchingRecommendationUsers = false;
  recommendationUserSearchError = null;
  recommendationUserSearch = "";
  selectedRecommendationUserId = null;
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
    const savedDraft = this.loadDraft();
    if (savedDraft) {
      this.hasDraft.set(true);
      this.loadFormFromDraft(savedDraft);
    } else {
      this.addAttendee();
      this.currentLocationMode.set(MeetingLocationMode.InPerson);
      this.currentAttendeeKinds.set([AttendeeKind.Internal]);
    }
    this.setupAutoSave();
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
      this.allUsers = users;
    });
  }
  // Attendee management
  addAttendee() {
    const attendeeGroup = this.fb.group({
      kind: [AttendeeKind.Internal, Validators.required],
      userId: [""],
      userSearch: [""],
      // New field for searchable input
      displayName: [""],
      organization: [""],
      jobTitle: [""],
      department: [""],
      email: [""],
      role: [AttendeeRole.Required, Validators.required],
      notes: [""]
    });
    this.attendees.push(attendeeGroup);
    const index = this.attendees.length - 1;
    this.setupAttendeeValidators(attendeeGroup, index);
    this.initializeAttendeeUserSearch(index);
    const currentKinds = this.currentAttendeeKinds();
    currentKinds.push(AttendeeKind.Internal);
    this.currentAttendeeKinds.set([...currentKinds]);
  }
  removeAttendee(index) {
    this.clearAttendeeUserSearch(index);
    this.usersForSearch.splice(index, 1);
    this.filteredUsersForSearch.splice(index, 1);
    this.showUserDropdown.splice(index, 1);
    this.isSearchingUsers.splice(index, 1);
    this.userSearchError.splice(index, 1);
    this.attendees.removeAt(index);
    const currentKinds = this.currentAttendeeKinds();
    currentKinds.splice(index, 1);
    this.currentAttendeeKinds.set([...currentKinds]);
    this.reindexAttendeeUserSearch();
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
      organizationControl?.clearValidators();
      jobTitleControl?.clearValidators();
      departmentControl?.clearValidators();
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
  // Get user name by ID
  getUserNameById(userId) {
    const user = this.allUsers.find((u) => u.id === userId);
    return user ? `${user.name} - ${user.departmentName}` : "Unknown User";
  }
  onAttendeeKindChange(event, index) {
    const target = event?.target;
    if (!target)
      return;
    const kind = parseInt(target.value, 10);
    this.updateAttendeeKind(index, kind);
    if (kind !== AttendeeKind.Internal) {
      this.clearAttendeeUserSearch(index);
      const attendeeGroup = this.attendees.at(index);
      attendeeGroup.patchValue({
        userId: "",
        userSearch: "",
        displayName: "",
        department: ""
      });
    }
  }
  // Initialize user search state for an attendee
  initializeAttendeeUserSearch(index) {
    if (!this.usersForSearch[index]) {
      this.usersForSearch[index] = [];
      this.filteredUsersForSearch[index] = [];
      this.showUserDropdown[index] = false;
      this.isSearchingUsers[index] = false;
      this.userSearchError[index] = null;
    }
  }
  // Clear user search state for an attendee
  clearAttendeeUserSearch(index) {
    this.usersForSearch[index] = [];
    this.filteredUsersForSearch[index] = [];
    this.showUserDropdown[index] = false;
    this.isSearchingUsers[index] = false;
    this.userSearchError[index] = null;
  }
  // User search functionality for attendee
  onAttendeeUserSearch(index) {
    this.initializeAttendeeUserSearch(index);
    const attendee = this.attendees.at(index);
    const searchTerm = attendee.get("userSearch")?.value || "";
    if (searchTerm && searchTerm.toString().trim().length >= 2) {
      this.searchUsersForAttendee(index, searchTerm.toString().trim());
    } else {
      this.filteredUsersForSearch[index] = [];
      this.showUserDropdown[index] = false;
    }
  }
  searchUsersForAttendee(index, searchTerm) {
    this.userSearchError[index] = null;
    this.isSearchingUsers[index] = true;
    this.usersService.searchUserNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.usersForSearch[index] = response.data;
          this.filteredUsersForSearch[index] = response.data;
          this.showUserDropdown[index] = true;
          this.userSearchError[index] = null;
        } else {
          this.usersForSearch[index] = [];
          this.filteredUsersForSearch[index] = [];
          const searchValue = this.attendees.at(index).get("userSearch")?.value;
          this.showUserDropdown[index] = searchValue && searchValue.toString().trim().length > 0;
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.userSearchError[index] = this.translate("meetings.no_users_found");
          } else {
            this.userSearchError[index] = null;
          }
        }
        this.isSearchingUsers[index] = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching users:", error);
        this.usersForSearch[index] = [];
        this.filteredUsersForSearch[index] = [];
        const searchValue = this.attendees.at(index).get("userSearch")?.value;
        this.showUserDropdown[index] = searchValue && searchValue.toString().trim().length > 0;
        this.isSearchingUsers[index] = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.userSearchError[index] = this.translate("meetings.no_users_found");
        } else {
          this.userSearchError[index] = this.translate("tasks.form.failedToSearchEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onAttendeeUserSearchFocus(index, event) {
    this.initializeAttendeeUserSearch(index);
    const target = event.target;
    if (target) {
      target.select();
    }
    const searchTerm = this.attendees.at(index).get("userSearch")?.value;
    if (this.filteredUsersForSearch[index] && this.filteredUsersForSearch[index].length > 0) {
      this.showUserDropdown[index] = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onAttendeeUserSearch(index);
    } else {
      this.loadAllUsersForAttendee(index);
    }
  }
  loadAllUsersForAttendee(index) {
    this.initializeAttendeeUserSearch(index);
    this.userSearchError[index] = null;
    this.isSearchingUsers[index] = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.usersForSearch[index] = response.data;
          this.filteredUsersForSearch[index] = response.data;
          this.showUserDropdown[index] = true;
          this.userSearchError[index] = null;
        } else {
          this.usersForSearch[index] = [];
          this.filteredUsersForSearch[index] = [];
          const searchValue = this.attendees.at(index).get("userSearch")?.value;
          this.showUserDropdown[index] = searchValue && searchValue.toString().trim().length > 0;
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.userSearchError[index] = this.translate("meetings.no_users_found");
          } else {
            this.userSearchError[index] = null;
          }
        }
        this.isSearchingUsers[index] = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.usersForSearch[index] = [];
        this.filteredUsersForSearch[index] = [];
        const searchValue = this.attendees.at(index).get("userSearch")?.value;
        this.showUserDropdown[index] = searchValue && searchValue.toString().trim().length > 0;
        this.isSearchingUsers[index] = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.userSearchError[index] = this.translate("meetings.no_users_found");
        } else {
          this.userSearchError[index] = this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onAttendeeUserSearchBlur(index) {
    setTimeout(() => {
      this.showUserDropdown[index] = false;
    }, 200);
  }
  selectUserForAttendee(index, user) {
    const attendeeGroup = this.attendees.at(index);
    attendeeGroup.patchValue({
      userId: user.id,
      userSearch: user.name,
      displayName: user.name,
      department: user.departmentName
    });
    this.showUserDropdown[index] = false;
    this.cdr.detectChanges();
  }
  getSelectedUserForAttendee(index) {
    const attendeeGroup = this.attendees.at(index);
    const userId = attendeeGroup.get("userId")?.value;
    if (!userId)
      return null;
    const allUsers = this.usersForSearch[index] || [];
    return allUsers.find((u) => u.id === userId) || null;
  }
  clearSelectedUserForAttendee(index) {
    const attendeeGroup = this.attendees.at(index);
    attendeeGroup.patchValue({
      userId: "",
      userSearch: "",
      displayName: "",
      department: ""
    });
    this.showUserDropdown[index] = false;
    this.cdr.detectChanges();
  }
  // Re-index user search arrays after attendee removal
  reindexAttendeeUserSearch() {
    const newUsersForSearch = [];
    const newFilteredUsersForSearch = [];
    const newShowUserDropdown = [];
    const newIsSearchingUsers = [];
    const newUserSearchError = [];
    for (let i = 0; i < this.attendees.length; i++) {
      newUsersForSearch[i] = this.usersForSearch[i] || [];
      newFilteredUsersForSearch[i] = this.filteredUsersForSearch[i] || [];
      newShowUserDropdown[i] = this.showUserDropdown[i] || false;
      newIsSearchingUsers[i] = this.isSearchingUsers[i] || false;
      newUserSearchError[i] = this.userSearchError[i] || null;
    }
    this.usersForSearch = newUsersForSearch;
    this.filteredUsersForSearch = newFilteredUsersForSearch;
    this.showUserDropdown = newShowUserDropdown;
    this.isSearchingUsers = newIsSearchingUsers;
    this.userSearchError = newUserSearchError;
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
            this.clearDraft();
            console.log("Meeting created successfully with ID:", response.data.id);
            this.sendStoredRecommendationsToAPI(response.data.id);
            setTimeout(() => {
              this.router.navigate(["/meetings"]);
            }, 100);
          } else {
            const errorMessage = this.translateApiError(response.message);
            this.error.set(errorMessage);
          }
          this.isSubmitting.set(false);
        },
        error: (err) => {
          const apiMessage = err?.error?.message || err?.message || "";
          const errorMessage = this.translateApiError(apiMessage);
          this.error.set(errorMessage);
          console.error("Error creating meeting:", err);
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
    storedRecommendations.forEach((recommendationData, index) => {
      setTimeout(() => {
        const recommendation = {
          text: recommendationData.text,
          assigneeUserId: recommendationData.assigneeUserId
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
  // User search functionality for recommendation assignee
  onRecommendationUserSearch() {
    const searchTerm = this.recommendationUserSearch || "";
    if (searchTerm && searchTerm.toString().trim().length >= 2) {
      this.searchUsersForRecommendation(searchTerm.toString().trim());
    } else {
      this.recommendationFilteredUsersForSearch = [];
      this.showRecommendationUserDropdown = false;
    }
  }
  searchUsersForRecommendation(searchTerm) {
    this.recommendationUserSearchError = null;
    this.isSearchingRecommendationUsers = true;
    this.usersService.searchUserNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.recommendationUsersForSearch = response.data;
          this.recommendationFilteredUsersForSearch = response.data;
          this.showRecommendationUserDropdown = true;
          this.recommendationUserSearchError = null;
        } else {
          this.recommendationUsersForSearch = [];
          this.recommendationFilteredUsersForSearch = [];
          this.showRecommendationUserDropdown = !!(this.recommendationUserSearch && this.recommendationUserSearch.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.recommendationUserSearchError = this.translate("meetings.no_users_found");
          } else {
            this.recommendationUserSearchError = null;
          }
        }
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching users for recommendation:", error);
        this.recommendationUsersForSearch = [];
        this.recommendationFilteredUsersForSearch = [];
        this.showRecommendationUserDropdown = !!(this.recommendationUserSearch && this.recommendationUserSearch.toString().trim().length > 0);
        this.isSearchingRecommendationUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.recommendationUserSearchError = this.translate("meetings.no_users_found");
        } else {
          this.recommendationUserSearchError = this.translate("tasks.form.failedToSearchEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onRecommendationUserSearchFocus(event) {
    const target = event.target;
    if (target) {
      target.select();
    }
    const searchTerm = this.recommendationUserSearch;
    if (this.recommendationFilteredUsersForSearch && this.recommendationFilteredUsersForSearch.length > 0) {
      this.showRecommendationUserDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onRecommendationUserSearch();
    } else {
      this.loadAllUsersForRecommendation();
    }
  }
  loadAllUsersForRecommendation() {
    this.recommendationUserSearchError = null;
    this.isSearchingRecommendationUsers = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.recommendationUsersForSearch = response.data;
          this.recommendationFilteredUsersForSearch = response.data;
          this.showRecommendationUserDropdown = true;
          this.recommendationUserSearchError = null;
        } else {
          this.recommendationUsersForSearch = [];
          this.recommendationFilteredUsersForSearch = [];
          this.showRecommendationUserDropdown = !!(this.recommendationUserSearch && this.recommendationUserSearch.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.recommendationUserSearchError = this.translate("meetings.no_users_found");
          } else {
            this.recommendationUserSearchError = null;
          }
        }
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users for recommendation:", error);
        this.recommendationUsersForSearch = [];
        this.recommendationFilteredUsersForSearch = [];
        this.showRecommendationUserDropdown = !!(this.recommendationUserSearch && this.recommendationUserSearch.toString().trim().length > 0);
        this.isSearchingRecommendationUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.recommendationUserSearchError = this.translate("meetings.no_users_found");
        } else {
          this.recommendationUserSearchError = this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onRecommendationUserSearchBlur() {
    setTimeout(() => {
      this.showRecommendationUserDropdown = false;
    }, 200);
  }
  selectUserForRecommendation(user) {
    this.selectedRecommendationUserId = user.id;
    this.recommendationUserSearch = user.name;
    this.showRecommendationUserDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedUserForRecommendation() {
    if (!this.selectedRecommendationUserId)
      return null;
    return this.recommendationUsersForSearch.find((u) => u.id === this.selectedRecommendationUserId) || null;
  }
  clearSelectedUserForRecommendation() {
    this.selectedRecommendationUserId = null;
    this.recommendationUserSearch = "";
    this.showRecommendationUserDropdown = false;
    this.cdr.detectChanges();
  }
  // Recommendations
  addRecommendation(recommendationText, textArea) {
    if (!recommendationText.trim() || this.isAddingRecommendation()) {
      return;
    }
    this.isAddingRecommendation.set(true);
    this.cdr.detectChanges();
    const userId = this.selectedRecommendationUserId || void 0;
    const recommendation = {
      text: recommendationText.trim(),
      assigneeUserId: userId || void 0
    };
    if (this.createdMeetingId()) {
      this.meetingsService.addRecommendation(this.createdMeetingId(), recommendation).subscribe({
        next: (response) => {
          if (response.success) {
            this.recommendations.update((recs) => [
              ...recs,
              { text: recommendationText.trim(), assigneeUserId: userId || void 0 }
            ]);
            this.success.set(response.message);
            textArea.value = "";
            this.clearSelectedUserForRecommendation();
            textArea.focus();
          } else {
            this.error.set(response.message || "\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0629");
            console.error("Failed to add recommendation:", response.message);
          }
          this.isAddingRecommendation.set(false);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Error adding recommendation:", err);
          this.error.set("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0629");
          this.isAddingRecommendation.set(false);
          this.cdr.detectChanges();
        }
      });
    } else {
      this.recommendations.update((recs) => [
        ...recs,
        { text: recommendationText.trim(), assigneeUserId: userId || void 0 }
      ]);
      this.success.set(this.translate("meetings.recommendation_added"));
      this.saveDraft(this.meetingForm.value);
      textArea.value = "";
      this.clearSelectedUserForRecommendation();
      this.isAddingRecommendation.set(false);
      textArea.focus();
      this.cdr.detectChanges();
    }
  }
  // Utility methods
  translate(key) {
    return this.translationService.translate(key);
  }
  // Translate API error messages if they match known patterns
  translateApiError(message) {
    if (!message)
      return this.translate("meetings.create_error");
    const errorMappings = {
      "\u0627\u0644\u0645\u0643\u0627\u0646 \u0645\u062D\u062C\u0648\u0632 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0648\u0642\u062A": "meetings.location_already_booked",
      "Location is already booked at this time": "meetings.location_already_booked",
      "\u0627\u0644\u0645\u0643\u0627\u0646 \u0645\u062D\u062C\u0648\u0632": "meetings.location_already_booked"
    };
    for (const [apiMessage, translationKey] of Object.entries(errorMappings)) {
      if (message.includes(apiMessage)) {
        return this.translate(translationKey);
      }
    }
    return message;
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
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // Draft functionality
  setupAutoSave() {
    this.meetingForm.valueChanges.pipe(
      debounceTime(1e3),
      // Wait 1 second after user stops typing
      takeUntil(this.destroy$)
    ).subscribe((formValue) => {
      if (!this.meetingCreated()) {
        this.saveDraft(formValue);
      }
    });
  }
  saveDraft(formValue) {
    try {
      const draft = {
        formData: formValue,
        recommendations: this.recommendations(),
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      localStorage.setItem(this.DRAFT_STORAGE_KEY, JSON.stringify(draft));
      this.hasDraft.set(true);
    } catch (error) {
      console.error("Error saving draft to local storage:", error);
    }
  }
  loadDraft() {
    try {
      const draftStr = localStorage.getItem(this.DRAFT_STORAGE_KEY);
      if (draftStr) {
        const draft = JSON.parse(draftStr);
        return draft;
      }
      return null;
    } catch (error) {
      console.error("Error loading draft from local storage:", error);
      return null;
    }
  }
  loadFormFromDraft(draft) {
    if (!draft || !draft.formData)
      return;
    const formData = draft.formData;
    const locationMode = typeof formData.locationMode === "string" ? parseInt(formData.locationMode, 10) : formData.locationMode;
    this.currentLocationMode.set(locationMode);
    this.updateLocationValidators(locationMode);
    if (formData.attendees && Array.isArray(formData.attendees)) {
      while (this.attendees.length > 0) {
        this.attendees.removeAt(0);
      }
      const attendeeKinds = [];
      formData.attendees.forEach((attendeeData, index) => {
        const attendeeGroup = this.fb.group({
          kind: [attendeeData.kind || AttendeeKind.Internal, Validators.required],
          userId: [attendeeData.userId || ""],
          userSearch: [attendeeData.userSearch || ""],
          displayName: [attendeeData.displayName || ""],
          organization: [attendeeData.organization || ""],
          jobTitle: [attendeeData.jobTitle || ""],
          department: [attendeeData.department || ""],
          email: [attendeeData.email || "", [Validators.email]],
          role: [attendeeData.role || AttendeeRole.Required, Validators.required],
          notes: [attendeeData.notes || ""]
        });
        this.attendees.push(attendeeGroup);
        this.setupAttendeeValidators(attendeeGroup, index);
        this.initializeAttendeeUserSearch(index);
        const kind = typeof attendeeData.kind === "string" ? parseInt(attendeeData.kind, 10) : attendeeData.kind;
        attendeeKinds.push(kind);
      });
      this.currentAttendeeKinds.set(attendeeKinds);
    } else {
      this.addAttendee();
      this.currentAttendeeKinds.set([AttendeeKind.Internal]);
    }
    setTimeout(() => {
      this.meetingForm.patchValue({
        title: formData.title || "",
        agenda: formData.agenda || "",
        type: formData.type || MeetingType.Internal,
        locationMode: formData.locationMode || MeetingLocationMode.InPerson,
        startAt: formData.startAt || "",
        endAt: formData.endAt || "",
        locationText: formData.locationText || "",
        onlineUrl: formData.onlineUrl || ""
      }, { emitEvent: true });
    }, 100);
    if (draft.recommendations && Array.isArray(draft.recommendations)) {
      this.recommendations.set(draft.recommendations);
    }
    this.cdr.detectChanges();
  }
  startOver() {
    this.showStartOverModal.set(true);
  }
  confirmStartOver() {
    this.showStartOverModal.set(false);
    this.clearDraft();
    this.resetForm();
    this.success.set(this.translate("meetings.draft_cleared"));
    setTimeout(() => this.success.set(""), 3e3);
  }
  cancelStartOver() {
    this.showStartOverModal.set(false);
  }
  clearDraft() {
    try {
      localStorage.removeItem(this.DRAFT_STORAGE_KEY);
      this.hasDraft.set(false);
    } catch (error) {
      console.error("Error clearing draft from local storage:", error);
    }
  }
  resetForm() {
    this.meetingForm.reset({
      title: "",
      agenda: "",
      type: MeetingType.Internal,
      locationMode: MeetingLocationMode.InPerson,
      startAt: "",
      endAt: "",
      locationText: "",
      onlineUrl: ""
    });
    while (this.attendees.length > 0) {
      this.attendees.removeAt(0);
    }
    this.recommendations.set([]);
    this.usersForSearch = [];
    this.filteredUsersForSearch = [];
    this.showUserDropdown = [];
    this.isSearchingUsers = [];
    this.userSearchError = [];
    this.clearSelectedUserForRecommendation();
    this.currentLocationMode.set(MeetingLocationMode.InPerson);
    this.currentAttendeeKinds.set([AttendeeKind.Internal]);
    this.addAttendee();
    this.cdr.detectChanges();
  }
  static \u0275fac = function AddMeetingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddMeetingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddMeetingComponent, selectors: [["app-add-meeting"]], standalone: false, decls: 107, vars: 77, consts: [["recommendationText", ""], ["assigneeUserId", ""], [1, "add-meeting-page", "rounded-5"], [1, "page-header"], [1, "page-title"], [1, "page-description"], ["type", "button", "class", "btn btn-outline-danger", 3, "title", "click", 4, "ngIf"], ["class", "alert alert-success", 3, "click", 4, "ngIf"], ["class", "alert alert-error", 3, "click", 4, "ngIf"], [1, "meeting-form", 3, "ngSubmit", "formGroup"], [1, "form-sections"], [1, "form-section"], [1, "section-title"], [1, "form-grid"], [1, "form-group"], ["for", "title", 1, "form-label"], ["id", "title", "type", "text", "formControlName", "title", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "agenda", 1, "form-label"], ["id", "agenda", "formControlName", "agenda", "rows", "3", 1, "form-textarea", 3, "placeholder"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-select"], [3, "value"], ["for", "locationMode", 1, "form-label"], ["id", "locationMode", "formControlName", "locationMode", 1, "form-select"], ["class", "form-group", 4, "ngIf"], ["for", "startAt", 1, "form-label"], ["id", "startAt", "type", "datetime-local", "formControlName", "startAt", 1, "form-input"], ["for", "endAt", 1, "form-label"], ["id", "endAt", "type", "datetime-local", "formControlName", "endAt", 1, "form-input"], [1, "section-header"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "empty-state", 4, "ngIf"], ["formArrayName", "attendees", 1, "attendees-list"], ["class", "attendee-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "recommendations-form"], ["for", "recommendationText", 1, "form-label"], ["id", "recommendationText", "rows", "3", 1, "form-textarea", 3, "placeholder"], ["for", "recommendationUserSearch", 1, "form-label"], [1, "employee-search-container", "position-relative"], ["type", "text", "id", "recommendationUserSearch", "autocomplete", "off", 1, "form-input", 3, "ngModelChange", "input", "focus", "blur", "ngModel", "ngModelOptions", "placeholder"], ["class", "position-absolute", "style", "top: 50%; transform: translateY(-50%); pointer-events: none;", 3, "right", "left", 4, "ngIf"], ["class", "employee-dropdown", 4, "ngIf"], ["class", "selected-employee result", 4, "ngIf"], ["type", "hidden", "id", "assigneeUserId", 3, "value"], ["class", "btn-spinner", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["type", "button", "routerLink", "/meetings", 1, "btn", "btn-secondary", "me-2", "ms-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click", "title"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"], [1, "alert", "alert-success", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "alert-icon"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22,4 12,14.01 9,11.01"], [1, "alert", "alert-error", 3, "click"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "error-message"], [4, "ngIf"], ["for", "locationText", 1, "form-label"], ["id", "locationText", "type", "text", "formControlName", "locationText", 1, "form-input", 3, "placeholder"], ["for", "onlineUrl", 1, "form-label"], ["id", "onlineUrl", "type", "url", "formControlName", "onlineUrl", 1, "form-input", 3, "placeholder"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "empty-icon"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "empty-text"], [1, "attendee-item", 3, "formGroupName"], [1, "attendee-header"], [1, "attendee-title"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], [1, "attendee-form"], [1, "form-row"], [1, "form-label"], ["formControlName", "kind", 1, "form-select", 3, "change"], ["formControlName", "role", 1, "form-select"], ["class", "internal-fields", 4, "ngIf"], ["class", "external-fields", 4, "ngIf"], ["formControlName", "notes", "rows", "2", 1, "form-textarea", 3, "placeholder"], [1, "internal-fields"], [1, "text-danger"], ["type", "text", "formControlName", "userSearch", "autocomplete", "off", 1, "form-input", 3, "input", "focus", "blur", "id", "placeholder"], ["type", "hidden", "formControlName", "userId"], [1, "position-absolute", 2, "top", "50%", "transform", "translateY(-50%)", "pointer-events", "none"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", 2, "width", "1rem", "height", "1rem", "border-width", "0.15rem"], [1, "visually-hidden"], [1, "employee-dropdown"], [1, "employee-list"], ["class", "employee-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "employee-item", 3, "click"], [1, "employee-info"], [1, "employee-name"], ["class", "employee-job", 4, "ngIf"], [1, "employee-job"], [1, "employee-item", "text-danger", "text-center"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "employee-item", "text-muted", "text-center"], [1, "fas", "fa-info-circle", "me-2"], [1, "selected-employee", "result"], [1, "selected-employee-info"], ["type", "button", 1, "btn-remove-employee", 3, "click"], [1, "fa", "fa-x"], [1, "external-fields"], ["type", "text", "formControlName", "displayName", 1, "form-input", 3, "placeholder"], [1, "text-muted", 2, "font-size", "0.875rem"], ["type", "text", "formControlName", "organization", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "department", 1, "form-input", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-spinner"], ["cx", "12", "cy", "12", "r", "10", "stroke-dasharray", "31.416", "stroke-dashoffset", "31.416"], ["attributeName", "stroke-dasharray", "dur", "2s", "values", "0 31.416;15.708 15.708;0 31.416", "repeatCount", "indefinite"], ["attributeName", "stroke-dashoffset", "dur", "2s", "values", "0;-15.708;-31.416", "repeatCount", "indefinite"], [1, "recommendation-item"], [1, "recommendation-number"], [1, "recommendation-text"], ["class", "recommendation-assignee", 4, "ngIf"], [1, "recommendation-assignee"], [1, "assignee-label"], [1, "assignee-name"], [1, "modal-overlay", 3, "click"], [1, "confirmation-modal", 3, "click"], [1, "modal-close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-icon", "icon-warning"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "modal-title"], [1, "modal-message"], [1, "modal-actions"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-confirm-warning", 3, "click"]], template: function AddMeetingComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, AddMeetingComponent_button_7_Template, 5, 2, "button", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, AddMeetingComponent_div_8_Template, 5, 1, "div", 7)(9, AddMeetingComponent_div_9_Template, 6, 1, "div", 8);
      \u0275\u0275elementStart(10, "form", 9);
      \u0275\u0275listener("ngSubmit", function AddMeetingComponent_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "h2", 12);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "label", 15);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 16);
      \u0275\u0275template(20, AddMeetingComponent_div_20_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 14)(22, "label", 18);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "textarea", 19);
      \u0275\u0275template(25, AddMeetingComponent_div_25_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "label", 20);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 21)(30, "option", 22);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 22);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 22);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(36, AddMeetingComponent_div_36_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 14)(38, "label", 23);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "select", 24)(41, "option", 22);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 22);
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 22);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, AddMeetingComponent_div_47_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, AddMeetingComponent_div_48_Template, 5, 5, "div", 25)(49, AddMeetingComponent_div_49_Template, 5, 5, "div", 25);
      \u0275\u0275elementStart(50, "div", 14)(51, "label", 26);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "input", 27);
      \u0275\u0275template(54, AddMeetingComponent_div_54_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 14)(56, "label", 28);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 29);
      \u0275\u0275template(59, AddMeetingComponent_div_59_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 11)(61, "div", 30)(62, "h2", 12);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 31);
      \u0275\u0275listener("click", function AddMeetingComponent_Template_button_click_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addAttendee());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(65, "svg", 32);
      \u0275\u0275element(66, "line", 33)(67, "line", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, AddMeetingComponent_div_69_Template, 8, 1, "div", 35);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(70, "div", 36);
      \u0275\u0275template(71, AddMeetingComponent_div_71_Template, 35, 21, "div", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, AddMeetingComponent_div_72_Template, 3, 2, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 11)(74, "h2", 12);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 38)(77, "div", 14)(78, "label", 39);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd();
      \u0275\u0275element(80, "textarea", 40, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 14)(83, "label", 41);
      \u0275\u0275text(84);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 42)(86, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function AddMeetingComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.recommendationUserSearch, $event) || (ctx.recommendationUserSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("input", function AddMeetingComponent_Template_input_input_86_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRecommendationUserSearch());
      })("focus", function AddMeetingComponent_Template_input_focus_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRecommendationUserSearchFocus($event));
      })("blur", function AddMeetingComponent_Template_input_blur_86_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRecommendationUserSearchBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, AddMeetingComponent_div_87_Template, 4, 5, "div", 44)(88, AddMeetingComponent_div_88_Template, 3, 1, "div", 45)(89, AddMeetingComponent_div_89_Template, 5, 1, "div", 45)(90, AddMeetingComponent_div_90_Template, 5, 1, "div", 45)(91, AddMeetingComponent_div_91_Template, 8, 2, "div", 46);
      \u0275\u0275element(92, "input", 47, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "button", 31);
      \u0275\u0275listener("click", function AddMeetingComponent_Template_button_click_94_listener() {
        \u0275\u0275restoreView(_r1);
        const recommendationText_r17 = \u0275\u0275reference(81);
        return \u0275\u0275resetView(ctx.addRecommendation(recommendationText_r17.value, recommendationText_r17));
      });
      \u0275\u0275template(95, AddMeetingComponent__svg_svg_95_Template, 4, 0, "svg", 48);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 49);
      \u0275\u0275template(98, AddMeetingComponent_div_98_Template, 3, 1, "div", 35)(99, AddMeetingComponent_div_99_Template, 6, 3, "div", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 51)(101, "button", 52);
      \u0275\u0275text(102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "button", 53);
      \u0275\u0275template(104, AddMeetingComponent__svg_svg_104_Template, 4, 0, "svg", 48);
      \u0275\u0275text(105);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(106, AddMeetingComponent_div_106_Template, 20, 6, "div", 54);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_10_0;
      let tmp_12_0;
      let tmp_14_0;
      let tmp_16_0;
      let tmp_18_0;
      let tmp_25_0;
      let tmp_27_0;
      let tmp_34_0;
      let tmp_38_0;
      let tmp_39_0;
      let tmp_41_0;
      let tmp_42_0;
      const recommendationText_r17 = \u0275\u0275reference(81);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.add_meeting"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("meetings.create"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasDraft() && !ctx.meetingCreated());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.meetingForm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.basic_info"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.title_label"), "* ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_10_0 = ctx.meetingForm.get("title")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.meetingForm.get("title")) == null ? null : tmp_10_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("meetings.title_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_12_0 = ctx.meetingForm.get("title")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.meetingForm.get("title")) == null ? null : tmp_12_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.agenda"), "* ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_14_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_14_0.touched));
      \u0275\u0275property("placeholder", ctx.translate("meetings.agenda_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_16_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx.meetingForm.get("agenda")) == null ? null : tmp_16_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.meeting_type"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_18_0 = ctx.meetingForm.get("type")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx.meetingForm.get("type")) == null ? null : tmp_18_0.touched));
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
      \u0275\u0275property("ngIf", ((tmp_25_0 = ctx.meetingForm.get("type")) == null ? null : tmp_25_0.invalid) && ((tmp_25_0 = ctx.meetingForm.get("type")) == null ? null : tmp_25_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.locations"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_27_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_27_0.invalid) && ((tmp_27_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_27_0.touched));
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
      \u0275\u0275property("ngIf", ((tmp_34_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_34_0.invalid) && ((tmp_34_0 = ctx.meetingForm.get("locationMode")) == null ? null : tmp_34_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showLocationText());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showOnlineUrl());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.start_time"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_38_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_38_0.invalid) && ((tmp_38_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_38_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_39_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_39_0.invalid) && ((tmp_39_0 = ctx.meetingForm.get("startAt")) == null ? null : tmp_39_0.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("meetings.end_time"), " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("error", ((tmp_41_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_41_0.invalid) && ((tmp_41_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_41_0.touched));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ((tmp_42_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_42_0.invalid) && ((tmp_42_0 = ctx.meetingForm.get("endAt")) == null ? null : tmp_42_0.touched));
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
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("meetings.assign_to_user"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.recommendationUserSearch);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(76, _c02))("placeholder", ctx.translate("meetings.select_user"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSearchingRecommendationUsers);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRecommendationUserDropdown && ctx.recommendationFilteredUsersForSearch && ctx.recommendationFilteredUsersForSearch.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRecommendationUserDropdown && ctx.recommendationUserSearchError && !ctx.isSearchingRecommendationUsers);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showRecommendationUserDropdown && !ctx.recommendationUserSearchError && (!ctx.recommendationFilteredUsersForSearch || ctx.recommendationFilteredUsersForSearch.length === 0) && !ctx.isSearchingRecommendationUsers && (!ctx.recommendationUsersForSearch || ctx.recommendationUsersForSearch.length === 0) && ctx.recommendationUserSearch && ctx.recommendationUserSearch.toString().trim().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getSelectedUserForRecommendation());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.selectedRecommendationUserId);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isAddingRecommendation() || !recommendationText_r17.value.trim());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAddingRecommendation());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isAddingRecommendation() ? ctx.translate("meetings.adding_recommendation") : ctx.translate("meetings.add_recommendation"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.recommendations().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.recommendations());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("login.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.meetingForm.invalid || ctx.isSubmitting() || ctx.meetingCreated());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting() ? ctx.translate("login.saving") : ctx.translate("login.save"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showStartOverModal());
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink], styles: ["\n\n.employee-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.employee-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.employee-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item[_ngcontent-%COMP%]:hover {\n  background-color: #F2ECCE;\n}\n.employee-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%], \n.employee-item.text-muted[_ngcontent-%COMP%] {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%]:hover, \n.employee-item.text-muted[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.result[_ngcontent-%COMP%] {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  border-radius: 6px;\n}\n.selected-employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-job[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-remove-employee[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-size: 14px;\n}\n.btn-remove-employee[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.add-meeting-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 100vh;\n}\n.page-header[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: white !important;\n  padding: 1.5rem 2rem;\n  border-radius: 12px 12px 0 0;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white !important;\n  border: 2px solid white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.3s;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: #D4AF5F !important;\n}\n.btn-outline-danger[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.confirmation-modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.confirmation-modal.rtl[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.icon-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.modal-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151 !important;\n  border: 2px solid #e5e7eb !important;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db !important;\n}\n.btn-confirm-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: white !important;\n}\n.btn-confirm-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white !important;\n  margin-bottom: 0.5rem;\n}\n.page-description[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 1.1rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.alert[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.alert-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.form-sections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #5F646D;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #fff;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1B1D21;\n  border-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #dc2626;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.attendees-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.attendee-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n}\n.attendee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.attendee-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.attendee-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.search-input-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.user-search-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s;\n}\n.user-search-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.user-search-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.user-department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.selected-user[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #dbeafe;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selected-user-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1e40af;\n}\n.selected-user-department[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.post-creation-sections[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.recommendations-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.recommendations-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.recommendations-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  min-width: 120px;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.recommendations-list[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 2px dashed #d1d5db;\n}\n.recommendations-list[_ngcontent-%COMP%]   .empty-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-style: italic;\n  margin: 0;\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border-left: 4px solid #3b82f6;\n}\n.recommendation-number[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 1.5rem;\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  color: #374151;\n  line-height: 1.5;\n  flex: 1;\n}\n.recommendation-assignee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #e3f2fd;\n  border-radius: 4px;\n  border-left: 3px solid #2196f3;\n  font-size: 0.9rem;\n}\n.assignee-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1976d2;\n  margin-right: 8px;\n}\n.assignee-name[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-weight: 600;\n}\n.attachments-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.attachments-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.attachments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.attachment-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n}\n.attachment-type[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.attachment-description[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.attachment-source[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.add-meeting-page.rtl[_ngcontent-%COMP%]   .recommendation-item[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: 4px solid #3b82f6;\n}\n.add-meeting-page.rtl[_ngcontent-%COMP%]   .user-search-results[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n@media (max-width: 768px) {\n  .add-meeting-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .recommendations-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .attendee-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .attachment-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .attachment-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=add-meeting.component-LDHKD7KD.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddMeetingComponent, [{
    type: Component,
    args: [{ selector: "app-add-meeting", standalone: false, template: `<div class="add-meeting-page rounded-5">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">{{ translate("meetings.add_meeting") }}</h1>\r
      <p class="page-description">{{ translate("meetings.create") }}</p>\r
    </div>\r
    <button \r
      *ngIf="hasDraft() && !meetingCreated()" \r
      type="button" \r
      class="btn btn-outline-danger"\r
      (click)="startOver()"\r
      [title]="translate('meetings.start_over_tooltip')">\r
      <svg\r
        class="btn-icon"\r
        width="16"\r
        height="16"\r
        viewBox="0 0 24 24"\r
        fill="none"\r
        stroke="currentColor"\r
        stroke-width="2"\r
      >\r
        <polyline points="1 4 1 10 7 10"></polyline>\r
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>\r
      </svg>\r
      {{ translate("meetings.start_over") }}\r
    </button>\r
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
              >{{ translate("meetings.title_label") }}*\r
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
              >{{ translate("meetings.agenda") }}*\r
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
              >{{ translate("meetings.meeting_type") }}\r
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
              >{{ translate("meetings.location_text") }} *\r
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
                    <span class="text-danger">*</span>\r
                  </label>\r
                  <div class="employee-search-container position-relative">\r
                    <input \r
                      type="text" \r
                      class="form-input" \r
                      [id]="'userSearch' + i"\r
                      formControlName="userSearch" \r
                      (input)="onAttendeeUserSearch(i)" \r
                      (focus)="onAttendeeUserSearchFocus(i, $event)"\r
                      (blur)="onAttendeeUserSearchBlur(i)"\r
                      [placeholder]="translate('Add-Meeting.select_user_placeholder')"\r
                      autocomplete="off"\r
                      [class.error]="attendee.get('userId')?.invalid && attendee.get('userId')?.touched">\r
                    \r
                    <!-- Loading indicator -->\r
                    <div *ngIf="isSearchingUsers[i]" class="position-absolute" \r
                         [style.right]="isRTL() ? 'auto' : '10px'"\r
                         [style.left]="isRTL() ? '10px' : 'auto'"\r
                         style="top: 50%; transform: translateY(-50%); pointer-events: none;">\r
                      <div class="spinner-border spinner-border-sm text-primary" \r
                           style="width: 1rem; height: 1rem; border-width: 0.15rem;" \r
                           role="status">\r
                        <span class="visually-hidden">Loading...</span>\r
                      </div>\r
                    </div>\r
                    \r
                    <!-- User dropdown list -->\r
                    <div class="employee-dropdown" *ngIf="showUserDropdown[i] && filteredUsersForSearch[i] && filteredUsersForSearch[i].length > 0">\r
                      <div class="employee-list">\r
                        <div *ngFor="let user of filteredUsersForSearch[i]" \r
                             class="employee-item" \r
                             (click)="selectUserForAttendee(i, user)">\r
                          <div class="employee-info">\r
                            <div class="employee-name">{{ user.name }}</div>\r
                            <div class="employee-job" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                    \r
                    <!-- Error message -->\r
                    <div class="employee-dropdown" *ngIf="showUserDropdown[i] && userSearchError[i] && !isSearchingUsers[i]">\r
                      <div class="employee-list">\r
                        <div class="employee-item text-danger text-center">\r
                          <i class="fas fa-exclamation-circle me-2"></i>\r
                          {{ userSearchError[i] }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                    \r
                    <!-- No results message -->\r
                    <div class="employee-dropdown" *ngIf="showUserDropdown[i] && !userSearchError[i] && (!filteredUsersForSearch[i] || filteredUsersForSearch[i].length === 0) && !isSearchingUsers[i] && (!usersForSearch[i] || usersForSearch[i].length === 0) && attendee.get('userSearch')?.value && attendee.get('userSearch')?.value.toString().trim().length > 0">\r
                      <div class="employee-list">\r
                        <div class="employee-item text-muted text-center">\r
                          <i class="fas fa-info-circle me-2"></i>\r
                          {{ translate('meetings.no_users_found') }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                    \r
                    <!-- Selected user display -->\r
                    <div class="selected-employee result" *ngIf="getSelectedUserForAttendee(i)">\r
                      <div class="selected-employee-info">\r
                        <div class="employee-info">\r
                          <div class="employee-name">{{ getSelectedUserForAttendee(i)?.name }}</div>\r
                          <div class="employee-job" *ngIf="getSelectedUserForAttendee(i)?.departmentName">\r
                            {{ getSelectedUserForAttendee(i)?.departmentName }}\r
                          </div>\r
                        </div>\r
                        <button type="button" class="btn-remove-employee" (click)="clearSelectedUserForAttendee(i)">\r
                          <i class="fa fa-x"></i>\r
                        </button>\r
                      </div>\r
                    </div>\r
                    \r
                    <!-- Hidden input for form validation -->\r
                    <input type="hidden" formControlName="userId">\r
                    \r
                    <!-- Validation error message -->\r
                    <div *ngIf="attendee.get('userId')?.invalid && attendee.get('userId')?.touched" class="error-message">\r
                      <span *ngIf="attendee.get('userId')?.errors?.['required']">\r
                        {{ translate("login.field_required") }}\r
                      </span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- External Attendee Fields -->\r
              <div *ngIf="showExternalFields()[i]" class="external-fields">\r
                <div class="form-row">\r
                  <div class="form-group">\r
                    <label class="form-label">\r
                      {{ translate("Add-Meeting.display_name") }}\r
                      <span class="text-danger">*</span>\r
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
                    <div\r
                      *ngIf="\r
                        attendee.get('displayName')?.invalid &&\r
                        attendee.get('displayName')?.touched\r
                      "\r
                      class="error-message"\r
                    >\r
                      <span *ngIf="attendee.get('displayName')?.errors?.['required']">\r
                        {{ translate("login.field_required") }}\r
                      </span>\r
                    </div>\r
                  </div>\r
\r
                  <div class="form-group">\r
                    <label class="form-label">\r
                      {{ translate("Add-Meeting.organization") }}\r
                      <span class="text-muted" style="font-size: 0.875rem">({{ translate("common.optional") }})</span>\r
                    </label>\r
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
                    <label class="form-label">\r
                      {{ translate("Add-Meeting.job_title") }}\r
                      <span class="text-muted" style="font-size: 0.875rem">({{ translate("common.optional") }})</span>\r
                    </label>\r
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
                    <label class="form-label">\r
                      {{ translate("meetings.department") }}\r
                      <span class="text-muted" style="font-size: 0.875rem">({{ translate("common.optional") }})</span>\r
                    </label>\r
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
                  <label class="form-label">\r
                    {{ translate("meetings.email") }}\r
                    <span class="text-danger">*</span>\r
                  </label>\r
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
                  <div\r
                    *ngIf="\r
                      attendee.get('email')?.invalid &&\r
                      attendee.get('email')?.touched\r
                    "\r
                    class="error-message"\r
                  >\r
                    <span *ngIf="attendee.get('email')?.errors?.['required']">\r
                      {{ translate("login.field_required") }}\r
                    </span>\r
                    <span *ngIf="attendee.get('email')?.errors?.['email']">\r
                      {{ translate("login.email_invalid") }}\r
                    </span>\r
                  </div>\r
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
\r
          <div class="form-group">\r
            <label for="recommendationUserSearch" class="form-label">{{\r
              translate("meetings.assign_to_user")\r
            }}</label>\r
            <div class="employee-search-container position-relative">\r
              <input \r
                type="text" \r
                id="recommendationUserSearch"\r
                class="form-input" \r
                [(ngModel)]="recommendationUserSearch"\r
                [ngModelOptions]="{standalone: true}"\r
                (input)="onRecommendationUserSearch()" \r
                (focus)="onRecommendationUserSearchFocus($event)"\r
                (blur)="onRecommendationUserSearchBlur()"\r
                [placeholder]="translate('meetings.select_user')"\r
                autocomplete="off">\r
              \r
              <!-- Loading indicator -->\r
              <div *ngIf="isSearchingRecommendationUsers" class="position-absolute" \r
                   [style.right]="isRTL() ? 'auto' : '10px'"\r
                   [style.left]="isRTL() ? '10px' : 'auto'"\r
                   style="top: 50%; transform: translateY(-50%); pointer-events: none;">\r
                <div class="spinner-border spinner-border-sm text-primary" \r
                     style="width: 1rem; height: 1rem; border-width: 0.15rem;" \r
                     role="status">\r
                  <span class="visually-hidden">{{translate('common.loading')}}</span>\r
                </div>\r
              </div>\r
              \r
              <!-- User dropdown list -->\r
              <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && recommendationFilteredUsersForSearch && recommendationFilteredUsersForSearch.length > 0">\r
                <div class="employee-list">\r
                  <div *ngFor="let user of recommendationFilteredUsersForSearch" \r
                       class="employee-item" \r
                       (click)="selectUserForRecommendation(user)">\r
                    <div class="employee-info">\r
                      <div class="employee-name">{{ user.name }}</div>\r
                      <div class="employee-job" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <!-- Error message -->\r
              <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && recommendationUserSearchError && !isSearchingRecommendationUsers">\r
                <div class="employee-list">\r
                  <div class="employee-item text-danger text-center">\r
                    <i class="fas fa-exclamation-circle me-2"></i>\r
                    {{ recommendationUserSearchError }}\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <!-- No results message -->\r
              <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && !recommendationUserSearchError && (!recommendationFilteredUsersForSearch || recommendationFilteredUsersForSearch.length === 0) && !isSearchingRecommendationUsers && (!recommendationUsersForSearch || recommendationUsersForSearch.length === 0) && recommendationUserSearch && recommendationUserSearch.toString().trim().length > 0">\r
                <div class="employee-list">\r
                  <div class="employee-item text-muted text-center">\r
                    <i class="fas fa-info-circle me-2"></i>\r
                    {{ translate('meetings.no_users_found') }}\r
                  </div>\r
                </div>\r
              </div>\r
              \r
              <!-- Selected user display -->\r
              <div class="selected-employee result" *ngIf="getSelectedUserForRecommendation()">\r
                <div class="selected-employee-info">\r
                  <div class="employee-info">\r
                    <div class="employee-name">{{ getSelectedUserForRecommendation()?.name }}</div>\r
                    <div class="employee-job" *ngIf="getSelectedUserForRecommendation()?.departmentName">\r
                      {{ getSelectedUserForRecommendation()?.departmentName }}\r
                    </div>\r
                  </div>\r
                  <button type="button" class="btn-remove-employee" (click)="clearSelectedUserForRecommendation()">\r
                    <i class="fa fa-x"></i>\r
                  </button>\r
                </div>\r
              </div>\r
              \r
              <!-- Hidden input for assignee user ID -->\r
              <input type="hidden" [value]="selectedRecommendationUserId" id="assigneeUserId" #assigneeUserId>\r
            </div>\r
          </div>\r
          <button\r
            type="button"\r
            (click)="addRecommendation(recommendationText.value, recommendationText)"\r
            class="btn btn-secondary"\r
            [disabled]="isAddingRecommendation() || !recommendationText.value.trim()"\r
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
            {{ isAddingRecommendation() ? translate('meetings.adding_recommendation') : translate('meetings.add_recommendation') }}\r
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
            <span class="recommendation-text">{{ recommendation.text }}</span>\r
            <div class="recommendation-assignee" *ngIf="recommendation.assigneeUserId">\r
              <span class="assignee-label">{{ translate("meetings.assigned_to") }}:</span>\r
              <span class="assignee-name">{{ getUserNameById(recommendation.assigneeUserId) }}</span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Submit Button -->\r
      <div class="form-actions">\r
        <button type="button" class="btn btn-secondary me-2 ms-2" routerLink="/meetings">\r
          {{ translate("login.cancel") }}\r
        </button>\r
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
        \r
      </div>\r
    </div>\r
  </form>\r
\r
  <!-- Start Over Confirmation Modal -->\r
  <div *ngIf="showStartOverModal()" class="modal-overlay" (click)="cancelStartOver()">\r
    <div class="confirmation-modal" (click)="$event.stopPropagation()" [class.rtl]="isRTL()">\r
      <button class="modal-close-btn" (click)="cancelStartOver()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <line x1="18" y1="6" x2="6" y2="18"></line>\r
          <line x1="6" y1="6" x2="18" y2="18"></line>\r
        </svg>\r
      </button>\r
\r
      <div class="modal-icon icon-warning">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>\r
          <line x1="12" y1="9" x2="12" y2="13"></line>\r
          <line x1="12" y1="17" x2="12.01" y2="17"></line>\r
        </svg>\r
      </div>\r
\r
      <h2 class="modal-title">{{ translate("meetings.start_over") }}</h2>\r
      <p class="modal-message">{{ translate("meetings.confirm_start_over") }}</p>\r
\r
      <div class="modal-actions">\r
        <button type="button" class="btn btn-cancel" (click)="cancelStartOver()">\r
          {{ translate("login.cancel") }}\r
        </button>\r
        <button type="button" class="btn btn-confirm-warning" (click)="confirmStartOver()">\r
          {{ translate("meetings.start_over") }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/meetings/add-meeting/add-meeting.component.css */\n.employee-search-container {\n  position: relative;\n}\n.employee-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list {\n  padding: 8px 0;\n}\n.employee-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item:hover {\n  background-color: #F2ECCE;\n}\n.employee-item:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger,\n.employee-item.text-muted {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger:hover,\n.employee-item.text-muted:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info {\n  flex: 1;\n  min-width: 0;\n}\n.result {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee {\n  margin-top: 8px;\n  padding: 12px;\n  border-radius: 6px;\n}\n.selected-employee-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-job {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-remove-employee {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-size: 14px;\n}\n.btn-remove-employee:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.add-meeting-page {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem;\n  min-height: 100vh;\n}\n.page-header {\n  background: #D4AF5F;\n  color: white !important;\n  padding: 1.5rem 2rem;\n  border-radius: 12px 12px 0 0;\n  margin-bottom: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-header > div {\n  flex: 1;\n  text-align: center;\n}\n.btn-outline-danger {\n  background: transparent;\n  color: white !important;\n  border: 2px solid white;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.3s;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-outline-danger:hover {\n  background: white;\n  color: #D4AF5F !important;\n}\n.btn-outline-danger .btn-icon {\n  width: 16px;\n  height: 16px;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n  animation: fadeIn 0.2s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.confirmation-modal {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-close-btn {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-close-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.confirmation-modal.rtl .modal-close-btn {\n  left: auto;\n  right: 1rem;\n}\n.modal-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.icon-warning {\n  color: #f59e0b;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.modal-actions .btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151 !important;\n  border: 2px solid #e5e7eb !important;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db !important;\n}\n.btn-confirm-warning {\n  background: #f59e0b;\n  color: white !important;\n}\n.btn-confirm-warning:hover {\n  background: #d97706;\n}\n.page-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: white !important;\n  margin-bottom: 0.5rem;\n}\n.page-description {\n  color: white !important;\n  font-size: 1.1rem;\n}\n.alert {\n  padding: 1rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.alert:hover {\n  opacity: 0.8;\n}\n.alert-success {\n  background-color: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error {\n  background-color: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.alert-icon {\n  flex-shrink: 0;\n}\n.form-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form-section {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.75rem;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.section-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  border-bottom: 2px solid #f3f4f6;\n  padding-bottom: 0.75rem;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #5F646D;\n  font-size: 0.875rem;\n}\n.form-input,\n.form-textarea,\n.form-select {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  background: #fff;\n}\n.form-input:focus,\n.form-textarea:focus,\n.form-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-textarea.error,\n.form-select.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.error-message {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-decoration: none;\n  justify-content: center;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #A87D2A;\n}\n.btn-secondary {\n  background-color: transparent;\n  color: #1B1D21 !important;\n  border: 1px solid #1B1D21;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #1B1D21;\n  border-color: #1B1D21;\n  color: #FFFFFF !important;\n}\n.btn-danger {\n  background-color: #ef4444;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background-color: #dc2626;\n}\n.btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.75rem;\n}\n.btn-icon {\n  flex-shrink: 0;\n}\n.btn-spinner {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-actions {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.empty-state {\n  text-align: center;\n  padding: 2rem;\n  color: #6b7280;\n}\n.empty-icon {\n  margin-bottom: 1rem;\n  color: #d1d5db;\n}\n.empty-text {\n  font-size: 0.875rem;\n}\n.attendees-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.attendee-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  padding: 1.5rem;\n  background: #f9fafb;\n}\n.attendee-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.attendee-title {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0;\n}\n.attendee-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.search-input-container {\n  position: relative;\n}\n.user-search-results {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  z-index: 10;\n  max-height: 200px;\n  overflow-y: auto;\n}\n.user-search-item {\n  padding: 0.75rem;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n  transition: background-color 0.2s;\n}\n.user-search-item:hover {\n  background-color: #f9fafb;\n}\n.user-search-item:last-child {\n  border-bottom: none;\n}\n.user-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.user-name {\n  font-weight: 500;\n  color: #374151;\n}\n.user-department {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.selected-user {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #dbeafe;\n  border-radius: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.selected-user-name {\n  font-weight: 500;\n  color: #1e40af;\n}\n.selected-user-department {\n  font-size: 0.75rem;\n  color: #3b82f6;\n}\n.post-creation-sections {\n  margin-top: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.recommendations-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.recommendations-form .form-group {\n  margin-bottom: 0;\n}\n.recommendations-form button {\n  align-self: flex-start;\n  min-width: 120px;\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.recommendations-list .empty-state {\n  text-align: center;\n  padding: 2rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 2px dashed #d1d5db;\n}\n.recommendations-list .empty-text {\n  color: #6b7280;\n  font-style: italic;\n  margin: 0;\n}\n.recommendation-item {\n  display: flex;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border-left: 4px solid #3b82f6;\n}\n.recommendation-number {\n  font-weight: 600;\n  color: #3b82f6;\n  min-width: 1.5rem;\n}\n.recommendation-text {\n  color: #374151;\n  line-height: 1.5;\n  flex: 1;\n}\n.recommendation-assignee {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #e3f2fd;\n  border-radius: 4px;\n  border-left: 3px solid #2196f3;\n  font-size: 0.9rem;\n}\n.assignee-label {\n  font-weight: 500;\n  color: #1976d2;\n  margin-right: 8px;\n}\n.assignee-name {\n  color: #1565c0;\n  font-weight: 600;\n}\n.attachments-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.attachments-form .form-row {\n  margin-bottom: 1rem;\n}\n.attachments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.attachment-item {\n  padding: 1rem;\n  background: #f9fafb;\n  border-radius: 0.5rem;\n  border: 1px solid #e5e7eb;\n}\n.attachment-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.attachment-name {\n  font-weight: 500;\n  color: #374151;\n}\n.attachment-type {\n  font-size: 0.75rem;\n  color: #6b7280;\n  background: #e5e7eb;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.attachment-details {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.attachment-description {\n  font-weight: 500;\n}\n.attachment-source {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n}\n.add-meeting-page.rtl .recommendation-item {\n  border-left: none;\n  border-right: 4px solid #3b82f6;\n}\n.add-meeting-page.rtl .user-search-results {\n  left: auto;\n  right: 0;\n}\n@media (max-width: 768px) {\n  .add-meeting-page {\n    padding: 1rem;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .section-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .recommendations-form {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .attendee-header {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n  }\n  .attachment-header {\n    flex-direction: column;\n    gap: 0.5rem;\n    align-items: flex-start;\n  }\n  .attachment-details {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .page-title {\n    font-size: 1.5rem;\n  }\n  .form-section {\n    padding: 1rem;\n  }\n  .btn {\n    padding: 0.625rem 1.25rem;\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=add-meeting.component-LDHKD7KD.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddMeetingComponent, { className: "AddMeetingComponent", filePath: "src/app/components/meetings/add-meeting/add-meeting.component.ts", lineNumber: 17 });
})();

// src/app/components/meetings/meeting-details/meeting-details.component.ts
function MeetingDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "circle", 17)(3, "line", 18)(4, "line", 19);
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
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 54);
    \u0275\u0275element(2, "path", 55)(3, "path", 56);
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
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
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
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
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
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "a", 63);
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
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_10_div_2_Template, 5, 2, "div", 59);
    \u0275\u0275elementStart(3, "div", 60)(4, "div", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 60)(9, "div", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 62);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 60)(14, "div", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "div", 61);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 60)(24, "div", 61);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_11_div_10_div_28_Template, 5, 2, "div", 59)(29, MeetingDetailsComponent_div_11_div_10_div_29_Template, 6, 3, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.meeting.agenda);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.meeting_type"));
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_8_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_15_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_28_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_35_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_42_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_55_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_56_div_6_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 66)(1, "label", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 87);
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_div_11_div_56_div_6_Template, 2, 1, "div", 11);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_11_div_57_div_6_span_1_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 66)(1, "label", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "input", 89);
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_div_11_div_57_div_6_Template, 2, 1, "div", 11);
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
    \u0275\u0275elementStart(0, "div", 64)(1, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_11_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveChanges());
    });
    \u0275\u0275elementStart(2, "div", 66)(3, "label", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 68);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 69);
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_11_div_8_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 66)(10, "label", 70);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 68);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "textarea", 71);
    \u0275\u0275template(15, MeetingDetailsComponent_div_11_div_11_div_15_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 66)(17, "label", 72);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 68);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 73)(22, "option", 74);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 74);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_11_div_11_div_28_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66)(30, "label", 75);
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "span", 68);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 76);
    \u0275\u0275template(35, MeetingDetailsComponent_div_11_div_11_div_35_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 66)(37, "label", 77);
    \u0275\u0275text(38);
    \u0275\u0275elementStart(39, "span", 68);
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(41, "input", 78);
    \u0275\u0275template(42, MeetingDetailsComponent_div_11_div_11_div_42_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 66)(44, "label", 79);
    \u0275\u0275text(45);
    \u0275\u0275elementStart(46, "span", 68);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "select", 80)(49, "option", 74);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 74);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 74);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, MeetingDetailsComponent_div_11_div_11_div_55_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, MeetingDetailsComponent_div_11_div_11_div_56_Template, 7, 5, "div", 81)(57, MeetingDetailsComponent_div_11_div_11_div_57_Template, 7, 5, "div", 81);
    \u0275\u0275elementStart(58, "div", 82)(59, "button", 83);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_11_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 84);
    \u0275\u0275template(62, MeetingDetailsComponent_div_11_div_11_span_62_Template, 2, 1, "span", 85)(63, MeetingDetailsComponent_div_11_div_11_span_63_Template, 2, 1, "span", 85);
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.meeting_type"), " ");
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
function MeetingDetailsComponent_div_11_div_21_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_9_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r8.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_div_27_div_9_div_2_Template_div_click_0_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.selectUser(user_r8));
    });
    \u0275\u0275elementStart(1, "div", 116)(2, "div", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingDetailsComponent_div_11_div_21_div_27_div_9_div_2_div_4_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r8.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_21_div_27_div_9_div_2_Template, 5, 2, "div", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredUsersForSearch);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 120);
    \u0275\u0275element(3, "i", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.userSearchError, " ");
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 122);
    \u0275\u0275element(3, "i", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.no_users_found"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = ctx_r0.getSelectedUser()) == null ? null : tmp_5_0.departmentName, " ");
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 116)(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_11_div_21_div_27_div_12_div_5_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 126);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_div_27_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.clearSelectedUser());
    });
    \u0275\u0275element(7, "i", 127);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r0.getSelectedUser()) == null ? null : tmp_4_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r0.getSelectedUser()) == null ? null : tmp_5_0.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_div_14_span_1_Template(rf, ctx) {
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
function MeetingDetailsComponent_div_11_div_21_div_27_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_21_div_27_div_14_span_1_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_21_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 66)(2, "label", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 102);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 103)(7, "input", 104);
    \u0275\u0275listener("input", function MeetingDetailsComponent_div_11_div_21_div_27_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onUserSearch());
    })("focus", function MeetingDetailsComponent_div_11_div_21_div_27_Template_input_focus_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onUserSearchFocus($event));
    })("blur", function MeetingDetailsComponent_div_11_div_21_div_27_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onUserSearchBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_21_div_27_div_8_Template, 4, 0, "div", 105)(9, MeetingDetailsComponent_div_11_div_21_div_27_div_9_Template, 3, 1, "div", 106)(10, MeetingDetailsComponent_div_11_div_21_div_27_div_10_Template, 5, 1, "div", 106)(11, MeetingDetailsComponent_div_11_div_21_div_27_div_11_Template, 5, 1, "div", 106)(12, MeetingDetailsComponent_div_11_div_21_div_27_div_12_Template, 8, 2, "div", 107);
    \u0275\u0275element(13, "input", 108);
    \u0275\u0275template(14, MeetingDetailsComponent_div_11_div_21_div_27_div_14_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("Add-Meeting.select_user"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ((tmp_4_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_4_0.touched));
    \u0275\u0275property("placeholder", ctx_r0.translate("Add-Meeting.select_user_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSearchingUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showUserDropdown && ctx_r0.filteredUsersForSearch && ctx_r0.filteredUsersForSearch.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showUserDropdown && ctx_r0.userSearchError && !ctx_r0.isSearchingUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showUserDropdown && !ctx_r0.userSearchError && (!ctx_r0.filteredUsersForSearch || ctx_r0.filteredUsersForSearch.length === 0) && !ctx_r0.isSearchingUsers && (!ctx_r0.usersForSearch || ctx_r0.usersForSearch.length === 0) && ((tmp_9_0 = ctx_r0.attendeesForm.get("userSearch")) == null ? null : tmp_9_0.value) && ((tmp_9_0 = ctx_r0.attendeesForm.get("userSearch")) == null ? null : tmp_9_0.value.toString().trim().length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getSelectedUser());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx_r0.attendeesForm.get("userId")) == null ? null : tmp_11_0.touched));
  }
}
function MeetingDetailsComponent_div_11_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 93)(2, "div", 66)(3, "label", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66)(7, "label", 94);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 130);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 93)(11, "div", 66)(12, "label", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 66)(16, "label", 94);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 66)(20, "label", 94);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 133);
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
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91)(2, "div", 31)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 92);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttendeeForm());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_21_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAttendee());
    });
    \u0275\u0275elementStart(8, "div", 93)(9, "div", 66)(10, "label", 94);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 95);
    \u0275\u0275listener("change", function MeetingDetailsComponent_div_11_div_21_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onAttendeeKindChange($event));
    });
    \u0275\u0275elementStart(13, "option", 74);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 74);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 66)(18, "label", 94);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 96)(21, "option", 74);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 74);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 74);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, MeetingDetailsComponent_div_11_div_21_div_27_Template, 15, 10, "div", 97)(28, MeetingDetailsComponent_div_11_div_21_div_28_Template, 23, 12, "div", 98);
    \u0275\u0275elementStart(29, "div", 66)(30, "label", 94);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 82)(34, "button", 83);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttendeeForm());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 100);
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
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r11.organization, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r11.jobTitle, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 167);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r11.email, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 169);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const attendee_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", attendee_r11.department, " ");
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function MeetingDetailsComponent_div_11_div_22_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 138)(1, "td", 139)(2, "div", 140);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingDetailsComponent_div_11_div_22_tr_20_div_4_Template, 2, 1, "div", 141)(5, MeetingDetailsComponent_div_11_div_22_tr_20_div_5_Template, 2, 1, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 143)(7, "span", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 144)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 145)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 146);
    \u0275\u0275template(16, MeetingDetailsComponent_div_11_div_22_tr_20_span_16_Template, 2, 1, "span", 147)(17, MeetingDetailsComponent_div_11_div_22_tr_20_span_17_Template, 2, 0, "span", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 149);
    \u0275\u0275template(19, MeetingDetailsComponent_div_11_div_22_tr_20_span_19_Template, 2, 1, "span", 150)(20, MeetingDetailsComponent_div_11_div_22_tr_20_span_20_Template, 2, 0, "span", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 151)(22, "div", 152)(23, "button", 153);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_23_listener() {
      const attendee_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editAttendeeStatus(attendee_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 154);
    \u0275\u0275element(25, "path", 155)(26, "path", 156)(27, "circle", 157);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "button", 158);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_28_listener() {
      const attendee_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editAttendee(attendee_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 159);
    \u0275\u0275element(30, "path", 55)(31, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 160);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_22_tr_20_Template_button_click_32_listener() {
      const attendee_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAttendee(attendee_r11));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 159);
    \u0275\u0275element(34, "polyline", 161)(35, "path", 162)(36, "line", 163)(37, "line", 164);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const attendee_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", attendee_r11.displayName || attendee_r11.userName || "N/A", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendee_r11.organization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attendee_r11.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + attendee_r11.attendanceStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendanceStatusLabel(attendee_r11.attendanceStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("kind-badge kind-" + (attendee_r11.kind === 0 ? "internal" : "external"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeKindLabel(attendee_r11.kind), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-badge role-" + (attendee_r11.role === 0 ? "speaker" : "attendee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getAttendeeRoleLabel(attendee_r11.role), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendee_r11.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendee_r11.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", attendee_r11.department);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !attendee_r11.department);
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r0.translate("meetings.edit_attendance_status"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", ctx_r0.translate("common.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r0.translate("meetings.delete"));
  }
}
function MeetingDetailsComponent_div_11_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135)(2, "table", 136)(3, "thead")(4, "tr")(5, "th");
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
    \u0275\u0275template(20, MeetingDetailsComponent_div_11_div_22_tr_20_Template, 38, 19, "tr", 137);
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
    \u0275\u0275elementStart(0, "div", 170)(1, "p");
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
    \u0275\u0275elementStart(0, "div", 184)(1, "span", 185);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 186);
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
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 91)(2, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_33_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveAttachment());
    });
    \u0275\u0275elementStart(3, "div", 66)(4, "label", 172);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 173);
    \u0275\u0275listener("change", function MeetingDetailsComponent_div_11_div_33_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MeetingDetailsComponent_div_11_div_33_div_7_Template, 5, 2, "div", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66)(9, "label", 175);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 66)(13, "label", 177);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 178)(16, "option", 179);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 180);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 181);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 182);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 82)(25, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_33_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelAttachmentForm());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 183);
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
    \u0275\u0275elementStart(0, "span", 204);
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
    \u0275\u0275elementStart(0, "span", 204);
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
    \u0275\u0275elementStart(0, "span", 204);
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
    \u0275\u0275elementStart(0, "div", 193)(1, "span", 205);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const attachment_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(attachment_r14.description);
  }
}
function MeetingDetailsComponent_div_11_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 189)(1, "div", 190)(2, "div", 191);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 192)(5, "div", 193)(6, "span", 194);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_34_div_1_span_8_Template, 2, 1, "span", 195)(9, MeetingDetailsComponent_div_11_div_34_div_1_span_9_Template, 2, 1, "span", 195)(10, MeetingDetailsComponent_div_11_div_34_div_1_span_10_Template, 2, 1, "span", 195);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, MeetingDetailsComponent_div_11_div_34_div_1_div_11_Template, 3, 1, "div", 196);
    \u0275\u0275elementStart(12, "div", 193)(13, "span", 197);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 198)(16, "button", 199);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_34_div_1_Template_button_click_16_listener() {
      const attachment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadAttachment(attachment_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 54);
    \u0275\u0275element(18, "path", 200)(19, "polyline", 201)(20, "line", 202);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "button", 203);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_34_div_1_Template_button_click_22_listener() {
      const attachment_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAttachment(attachment_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 54);
    \u0275\u0275element(24, "polyline", 161)(25, "path", 162)(26, "line", 163)(27, "line", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r14 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(attachment_r14.fileName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(attachment_r14.fileType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r14.documentSource === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r14.documentSource === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r14.documentSource === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", attachment_r14.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDateTime(attachment_r14.uploadedAt));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.download"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.delete"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 187);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_34_div_1_Template, 29, 9, "div", 188);
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
    \u0275\u0275elementStart(0, "div", 206)(1, "p", 207);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.no_attachments"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_45_div_14_span_1_Template(rf, ctx) {
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
function MeetingDetailsComponent_div_11_div_45_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_45_div_14_span_1_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.recommendationsForm.get("text")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_45_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MeetingDetailsComponent_div_11_div_45_div_21_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r17.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_45_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_45_div_21_div_2_Template_div_click_0_listener() {
      const user_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectUserForRecommendation(user_r17));
    });
    \u0275\u0275elementStart(1, "div", 116)(2, "div", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingDetailsComponent_div_11_div_45_div_21_div_2_div_4_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r17.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r17.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_45_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_45_div_21_div_2_Template, 5, 2, "div", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.recommendationFilteredUsersForSearch);
  }
}
function MeetingDetailsComponent_div_11_div_45_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 120);
    \u0275\u0275element(3, "i", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.recommendationUserSearchError, " ");
  }
}
function MeetingDetailsComponent_div_11_div_45_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 122);
    \u0275\u0275element(3, "i", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.no_users_found"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_45_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r0.getSelectedUserForRecommendation()) == null ? null : tmp_4_0.departmentName, " ");
  }
}
function MeetingDetailsComponent_div_11_div_45_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 116)(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_11_div_45_div_24_div_5_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 126);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_45_div_24_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearSelectedUserForRecommendation());
    });
    \u0275\u0275element(7, "i", 127);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.getSelectedUserForRecommendation()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.getSelectedUserForRecommendation()) == null ? null : tmp_4_0.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_45_div_30_span_1_Template(rf, ctx) {
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
function MeetingDetailsComponent_div_11_div_45_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_45_div_30_span_1_Template, 2, 1, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.recommendationsForm.get("dueDate")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function MeetingDetailsComponent_div_11_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 91)(2, "div", 31)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 92);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_45_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationForm());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_45_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveRecommendation());
    });
    \u0275\u0275elementStart(8, "div", 66)(9, "label", 94);
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 68);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "textarea", 208);
    \u0275\u0275template(14, MeetingDetailsComponent_div_11_div_45_div_14_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 66)(16, "label", 94);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 103)(19, "input", 209);
    \u0275\u0275listener("input", function MeetingDetailsComponent_div_11_div_45_Template_input_input_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRecommendationUserSearch());
    })("focus", function MeetingDetailsComponent_div_11_div_45_Template_input_focus_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRecommendationUserSearchFocus($event));
    })("blur", function MeetingDetailsComponent_div_11_div_45_Template_input_blur_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRecommendationUserSearchBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, MeetingDetailsComponent_div_11_div_45_div_20_Template, 4, 0, "div", 105)(21, MeetingDetailsComponent_div_11_div_45_div_21_Template, 3, 1, "div", 106)(22, MeetingDetailsComponent_div_11_div_45_div_22_Template, 5, 1, "div", 106)(23, MeetingDetailsComponent_div_11_div_45_div_23_Template, 5, 1, "div", 106)(24, MeetingDetailsComponent_div_11_div_45_div_24_Template, 8, 2, "div", 107);
    \u0275\u0275element(25, "input", 210);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 66)(27, "label", 94);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 211);
    \u0275\u0275template(30, MeetingDetailsComponent_div_11_div_45_div_30_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 82)(32, "button", 83);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_45_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationForm());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 100);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    let tmp_14_0;
    let tmp_17_0;
    let tmp_18_0;
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.assign_to_user"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", ctx_r0.translate("meetings.select_user"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSearchingRecommendationUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showRecommendationUserDropdown && ctx_r0.recommendationFilteredUsersForSearch && ctx_r0.recommendationFilteredUsersForSearch.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showRecommendationUserDropdown && ctx_r0.recommendationUserSearchError && !ctx_r0.isSearchingRecommendationUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showRecommendationUserDropdown && !ctx_r0.recommendationUserSearchError && (!ctx_r0.recommendationFilteredUsersForSearch || ctx_r0.recommendationFilteredUsersForSearch.length === 0) && !ctx_r0.isSearchingRecommendationUsers && (!ctx_r0.recommendationUsersForSearch || ctx_r0.recommendationUsersForSearch.length === 0) && ((tmp_14_0 = ctx_r0.recommendationsForm.get("userSearch")) == null ? null : tmp_14_0.value) && ((tmp_14_0 = ctx_r0.recommendationsForm.get("userSearch")) == null ? null : tmp_14_0.value.toString().trim().length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getSelectedUserForRecommendation());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.due_date"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("error", ((tmp_17_0 = ctx_r0.recommendationsForm.get("dueDate")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r0.recommendationsForm.get("dueDate")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_18_0 = ctx_r0.recommendationsForm.get("dueDate")) == null ? null : tmp_18_0.invalid) && ((tmp_18_0 = ctx_r0.recommendationsForm.get("dueDate")) == null ? null : tmp_18_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingRecommendation ? ctx_r0.translate("common.save") : ctx_r0.translate("meetings.add_recommendation"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "span", 225);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 226);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.assigned_to"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recommendation_r20.fullName);
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 227)(1, "span", 228);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 229);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.due_date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, recommendation_r20.dueDate, "medium"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 230)(1, "span", 231);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 232);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.translate("meetings.created_at"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, recommendation_r20.createdAt, "medium"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 218)(1, "div", 219);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_3_Template, 5, 2, "div", 220)(4, MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_4_Template, 6, 5, "div", 221)(5, MeetingDetailsComponent_div_11_div_46_div_1_div_2_div_5_Template, 6, 5, "div", 222);
    \u0275\u0275elementStart(6, "div", 223)(7, "button", 158);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editRecommendation(recommendation_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 159);
    \u0275\u0275element(9, "path", 55)(10, "path", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "button", 160);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r19);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteRecommendation(recommendation_r20));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 159);
    \u0275\u0275element(14, "polyline", 161)(15, "path", 162)(16, "line", 163)(17, "line", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(recommendation_r20.text);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", recommendation_r20.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", recommendation_r20.dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", recommendation_r20.createdAt);
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
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "span", 111);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r23.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_div_2_Template_div_click_0_listener() {
      const user_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const recommendation_r20 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectUserForInlineRecommendation(recommendation_r20.id, user_r23));
    });
    \u0275\u0275elementStart(1, "div", 116)(2, "div", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_div_2_div_4_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r23 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r23.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r23.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_div_2_Template, 5, 2, "div", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.inlineRecommendationFilteredUsersForSearch[recommendation_r20.id]);
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 120);
    \u0275\u0275element(3, "i", 121);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.inlineRecommendationUserSearchError[recommendation_r20.id], " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 122);
    \u0275\u0275element(3, "i", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.no_users_found"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const recommendation_r20 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_10_0 = ctx_r0.getSelectedUserForInlineRecommendation(recommendation_r20.id)) == null ? null : tmp_10_0.departmentName, " ");
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125)(2, "div", 116)(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_12_div_5_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 126);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.clearSelectedUserForInlineRecommendation(recommendation_r20.id));
    });
    \u0275\u0275element(7, "i", 127);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const recommendation_r20 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_9_0 = ctx_r0.getSelectedUserForInlineRecommendation(recommendation_r20.id)) == null ? null : tmp_9_0.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_10_0 = ctx_r0.getSelectedUserForInlineRecommendation(recommendation_r20.id)) == null ? null : tmp_10_0.departmentName);
  }
}
function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 233);
    \u0275\u0275element(1, "textarea", 234, 0);
    \u0275\u0275elementStart(3, "div", 235)(4, "label", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 103)(7, "input", 236);
    \u0275\u0275listener("input", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.inlineRecommendationUserSearch[recommendation_r20.id] = $event.target.value;
      return \u0275\u0275resetView(ctx_r0.onInlineRecommendationUserSearch(recommendation_r20.id));
    })("focus", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template_input_focus_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onInlineRecommendationUserSearchFocus(recommendation_r20.id, $event));
    })("blur", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r21);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onInlineRecommendationUserSearchBlur(recommendation_r20.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_8_Template, 4, 0, "div", 105)(9, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_9_Template, 3, 1, "div", 106)(10, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_10_Template, 5, 1, "div", 106)(11, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_11_Template, 5, 1, "div", 106)(12, MeetingDetailsComponent_div_11_div_46_div_1_div_3_div_12_Template, 8, 2, "div", 107);
    \u0275\u0275element(13, "input", 237, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 238)(16, "label", 94);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 239, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 240)(21, "button", 241);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r21);
      const editTextarea_r25 = \u0275\u0275reference(2);
      const editDueDateInput_r26 = \u0275\u0275reference(19);
      const recommendation_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveRecommendationInline(recommendation_r20, editTextarea_r25.value, ctx_r0.inlineRecommendationAssignee[recommendation_r20.id] || "", editDueDateInput_r26.value));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 159);
    \u0275\u0275element(23, "polyline", 242);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 158);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.cancelRecommendationEdit());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 159);
    \u0275\u0275element(27, "line", 243)(28, "line", 244);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const recommendation_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(ctx_r0.translate("meetings.recommendation_placeholder")))("value", recommendation_r20.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.assign_to_user"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "inlineRecommendationUserSearch" + recommendation_r20.id)("value", ctx_r0.inlineRecommendationUserSearch[recommendation_r20.id] || "")("placeholder", ctx_r0.translate("meetings.select_user"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isSearchingInlineRecommendationUsers[recommendation_r20.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showInlineRecommendationUserDropdown[recommendation_r20.id] && ctx_r0.inlineRecommendationFilteredUsersForSearch[recommendation_r20.id] && ctx_r0.inlineRecommendationFilteredUsersForSearch[recommendation_r20.id].length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showInlineRecommendationUserDropdown[recommendation_r20.id] && ctx_r0.inlineRecommendationUserSearchError[recommendation_r20.id] && !ctx_r0.isSearchingInlineRecommendationUsers[recommendation_r20.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showInlineRecommendationUserDropdown[recommendation_r20.id] && !ctx_r0.inlineRecommendationUserSearchError[recommendation_r20.id] && (!ctx_r0.inlineRecommendationFilteredUsersForSearch[recommendation_r20.id] || ctx_r0.inlineRecommendationFilteredUsersForSearch[recommendation_r20.id].length === 0) && !ctx_r0.isSearchingInlineRecommendationUsers[recommendation_r20.id] && (!ctx_r0.inlineRecommendationUsersForSearch[recommendation_r20.id] || ctx_r0.inlineRecommendationUsersForSearch[recommendation_r20.id].length === 0) && ctx_r0.inlineRecommendationUserSearch[recommendation_r20.id] && ctx_r0.inlineRecommendationUserSearch[recommendation_r20.id].toString().trim().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getSelectedUserForInlineRecommendation(recommendation_r20.id));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.inlineRecommendationAssignee[recommendation_r20.id]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.due_date"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.formatDateTimeForInput(recommendation_r20.dueDate || ""));
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
function MeetingDetailsComponent_div_11_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 214)(1, "div", 215);
    \u0275\u0275template(2, MeetingDetailsComponent_div_11_div_46_div_1_div_2_Template, 19, 10, "div", 216)(3, MeetingDetailsComponent_div_11_div_46_div_1_div_3_Template, 30, 21, "div", 217);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recommendation_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingRecommendation(recommendation_r20.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingRecommendation(recommendation_r20.id));
  }
}
function MeetingDetailsComponent_div_11_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 212);
    \u0275\u0275template(1, MeetingDetailsComponent_div_11_div_46_div_1_Template, 4, 2, "div", 213);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.meeting.recommendations);
  }
}
function MeetingDetailsComponent_div_11_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_recommendations"));
  }
}
function MeetingDetailsComponent_div_11_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 245);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startOverMinutes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 246);
    \u0275\u0275element(2, "polyline", 247)(3, "path", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.translate("meetings.start_over_tooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.start_over"), " ");
  }
}
function MeetingDetailsComponent_div_11_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showAddMinutes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "line", 35)(3, "line", 36);
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
function MeetingDetailsComponent_div_11_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_button_55_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editMinutes());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "path", 55)(3, "path", 56);
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
function MeetingDetailsComponent_div_11_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 91)(2, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_11_div_56_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveMinutes());
    });
    \u0275\u0275elementStart(3, "div", 66)(4, "label", 249);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "textarea", 250);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 82)(8, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_div_56_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelMinutesForm());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 183);
    \u0275\u0275text(11);
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.cancel"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.minutesForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingMinutes ? ctx_r0.translate("common.update") : ctx_r0.translate("common.save"), " ");
  }
}
function MeetingDetailsComponent_div_11_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 251)(1, "div", 252)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 253);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.notes"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meeting.minutes.notes);
  }
}
function MeetingDetailsComponent_div_11_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 254)(1, "p", 255);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.no_minutes"));
  }
}
function MeetingDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "h2", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MeetingDetailsComponent_div_11_button_6_Template, 5, 1, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, MeetingDetailsComponent_div_11_div_10_Template, 30, 13, "div", 28)(11, MeetingDetailsComponent_div_11_div_11_Template, 64, 43, "div", 29);
    \u0275\u0275elementStart(12, "div", 30)(13, "div", 31)(14, "h3", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 34);
    \u0275\u0275element(18, "line", 35)(19, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, MeetingDetailsComponent_div_11_div_21_Template, 38, 21, "div", 37)(22, MeetingDetailsComponent_div_11_div_22_Template, 21, 8, "div", 38)(23, MeetingDetailsComponent_div_11_div_23_Template, 3, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "div", 30)(25, "div", 31)(26, "h3", 32);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddAttachment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 34);
    \u0275\u0275element(30, "line", 35)(31, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, MeetingDetailsComponent_div_11_div_33_Template, 29, 14, "div", 40)(34, MeetingDetailsComponent_div_11_div_34_Template, 2, 1, "div", 41)(35, MeetingDetailsComponent_div_11_div_35_Template, 3, 1, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "div", 30)(37, "div", 31)(38, "h3", 32);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_11_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showAddRecommendation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 34);
    \u0275\u0275element(42, "line", 35)(43, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, MeetingDetailsComponent_div_11_div_45_Template, 36, 21, "div", 40)(46, MeetingDetailsComponent_div_11_div_46_Template, 2, 1, "div", 43)(47, MeetingDetailsComponent_div_11_div_47_Template, 3, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div", 30)(49, "div", 31)(50, "h3", 32);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 44);
    \u0275\u0275template(53, MeetingDetailsComponent_div_11_button_53_Template, 5, 2, "button", 45)(54, MeetingDetailsComponent_div_11_button_54_Template, 5, 1, "button", 46)(55, MeetingDetailsComponent_div_11_button_55_Template, 5, 1, "button", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, MeetingDetailsComponent_div_11_div_56_Template, 12, 7, "div", 40)(57, MeetingDetailsComponent_div_11_div_57_Template, 6, 2, "div", 47)(58, MeetingDetailsComponent_div_11_div_58_Template, 3, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 30)(60, "h3", 32);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 49)(63, "div", 50)(64, "span", 51);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 52);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 50)(69, "span", 51);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 52);
    \u0275\u0275text(72);
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.recommendations"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("meetings.add_recommendation"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddRecommendationForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.meeting.recommendations && ctx_r0.meeting.recommendations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.meeting.recommendations || ctx_r0.meeting.recommendations.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.minutes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.hasMinutesDraft && ctx_r0.showAddMinutesForm && !ctx_r0.editingMinutes);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_12_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_12_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_12_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_12_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_12_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 282)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("meetings.attendee"));
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_13_div_28_span_1_Template, 2, 1, "span", 85);
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
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_13_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_13_div_11_Template, 5, 2, "div", 278);
    \u0275\u0275elementStart(12, "div", 66)(13, "label", 279);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 68);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 280)(18, "option", 74);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 74);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 74);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 74);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_13_div_28_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66)(30, "label", 249);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 281);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 82)(34, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_13_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 183);
    \u0275\u0275template(37, MeetingDetailsComponent_div_13_span_37_Template, 2, 1, "span", 85)(38, MeetingDetailsComponent_div_13_span_38_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_14_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_14_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_14_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r33);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_14_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_14_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 284)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
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
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r34);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_15_div_17_Template, 5, 2, "div", 283);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_15_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteRecommendation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_16_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_16_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_16_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_16_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_16_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 282)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_17_div_28_span_1_Template, 2, 1, "span", 85);
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
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_17_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_17_div_11_Template, 5, 2, "div", 278);
    \u0275\u0275elementStart(12, "div", 66)(13, "label", 279);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 68);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 280)(18, "option", 74);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 74);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 74);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 74);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_17_div_28_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66)(30, "label", 249);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 281);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 82)(34, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_17_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 183);
    \u0275\u0275template(37, MeetingDetailsComponent_div_17_span_37_Template, 2, 1, "span", 85)(38, MeetingDetailsComponent_div_17_span_38_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_18_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_18_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_18_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r37);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_18_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_18_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 286)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
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
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r38);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_19_div_17_Template, 5, 2, "div", 285);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAttachmentDeleteModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_19_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttachment());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_20_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_20_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_20_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r39);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_20_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_20_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
    \u0275\u0275elementStart(0, "div", 282)(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
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
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MeetingDetailsComponent_div_21_div_28_span_1_Template, 2, 1, "span", 85);
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
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r40);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "form", 65);
    \u0275\u0275listener("ngSubmit", function MeetingDetailsComponent_div_21_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAttendanceStatus());
    });
    \u0275\u0275template(11, MeetingDetailsComponent_div_21_div_11_Template, 5, 2, "div", 278);
    \u0275\u0275elementStart(12, "div", 66)(13, "label", 279);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 68);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 280)(18, "option", 74);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 74);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 74);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 74);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 74);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MeetingDetailsComponent_div_21_div_28_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 66)(30, "label", 249);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 281);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 82)(34, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_21_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditStatusModal());
    });
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 183);
    \u0275\u0275template(37, MeetingDetailsComponent_div_21_span_37_Template, 2, 1, "span", 85)(38, MeetingDetailsComponent_div_21_span_38_Template, 2, 1, "span", 85);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 277);
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
    \u0275\u0275elementStart(0, "div", 275);
    \u0275\u0275template(1, MeetingDetailsComponent_div_22_div_17_div_5_div_1_Template, 2, 2, "div", 276)(2, MeetingDetailsComponent_div_22_div_17_div_5_div_2_Template, 2, 2, "div", 276);
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
    \u0275\u0275elementStart(0, "div", 271)(1, "div", 272);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 273);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MeetingDetailsComponent_div_22_div_17_div_5_Template, 3, 2, "div", 274);
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
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 256);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275elementStart(1, "div", 257);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r41);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 258)(3, "h3", 259);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 260);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 7);
    \u0275\u0275element(7, "line", 243)(8, "line", 244);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 261)(10, "div", 262);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 263);
    \u0275\u0275element(12, "path", 264)(13, "line", 265)(14, "line", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 267);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, MeetingDetailsComponent_div_22_div_17_Template, 6, 3, "div", 268);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 269)(19, "button", 33);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDeleteAttendeeModal());
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 270);
    \u0275\u0275listener("click", function MeetingDetailsComponent_div_22_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmDeleteAttendee());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 54);
    \u0275\u0275element(23, "polyline", 161)(24, "path", 162)(25, "line", 163)(26, "line", 164);
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
  usersService;
  translationService;
  fb;
  cdr;
  meeting = null;
  loading = false;
  editing = false;
  saving = false;
  errorMessage = "";
  destroy$ = new Subject();
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
  // User search state for attendee form
  usersForSearch = [];
  filteredUsersForSearch = [];
  showUserDropdown = false;
  isSearchingUsers = false;
  userSearchError = null;
  // User search state for recommendation assignee
  recommendationUsersForSearch = [];
  recommendationFilteredUsersForSearch = [];
  showRecommendationUserDropdown = false;
  isSearchingRecommendationUsers = false;
  recommendationUserSearchError = null;
  // Inline edit recommendation assignee (keyed by recommendation ID)
  inlineRecommendationAssignee = {};
  inlineRecommendationUserSearch = {};
  inlineRecommendationUsersForSearch = {};
  inlineRecommendationFilteredUsersForSearch = {};
  showInlineRecommendationUserDropdown = {};
  isSearchingInlineRecommendationUsers = {};
  inlineRecommendationUserSearchError = {};
  // Recommendations management
  showAddRecommendationForm = false;
  editingRecommendation = null;
  recommendationsForm;
  editingRecommendationId = null;
  allUsers = [];
  savingRecommendation = false;
  // Minutes management
  showAddMinutesForm = false;
  editingMinutes = null;
  minutesForm;
  editingMinutesId = null;
  // Draft management for minutes
  MINUTES_DRAFT_KEY = "meeting_minutes_draft_";
  hasMinutesDraft = false;
  showClearMinutesDraftModal = false;
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
  constructor(route, router, meetingsService, usersService, translationService, fb, cdr) {
    this.route = route;
    this.router = router;
    this.meetingsService = meetingsService;
    this.usersService = usersService;
    this.translationService = translationService;
    this.fb = fb;
    this.cdr = cdr;
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
      userSearch: [""],
      // New field for searchable input
      displayName: ["", [Validators.required]],
      organization: [""],
      jobTitle: [""],
      department: [""],
      email: ["", [Validators.required]],
      role: [AttendeeRole.Required, [Validators.required]],
      notes: [""]
    });
    this.recommendationsForm = this.fb.group({
      text: ["", [Validators.required]],
      assigneeUserId: ["", [Validators.required]],
      userSearch: [""],
      // New field for searchable input
      dueDate: [""]
    });
    this.minutesForm = this.fb.group({
      notes: [""]
    });
    this.setupMinutesAutoSave();
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
    this.loadAllUsers();
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
  loadAllUsers() {
    this.meetingsService.getAllUsers().subscribe({
      next: (response) => {
        if (response.success) {
          this.allUsers = response.data;
        }
      },
      error: (error) => {
        console.error("Error loading users:", error);
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
      role: AttendeeRole.Required,
      userSearch: ""
    });
    this.clearUserSearch();
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
      userSearch: attendee.kind === AttendeeKind.Internal && attendee.displayName ? attendee.displayName : "",
      displayName: attendee.displayName || "",
      organization: attendee.organization || "",
      jobTitle: attendee.jobTitle || "",
      department: attendee.department || "",
      email: attendee.email || "",
      role: attendee.role,
      notes: attendee.notes || ""
    });
    this.updateAttendeeValidators(attendee.kind);
    if (attendee.kind === AttendeeKind.Internal && attendee.userId) {
      this.loadUserForExistingAttendee(attendee.userId);
    }
  }
  // Load user details for existing internal attendee
  loadUserForExistingAttendee(userId) {
    this.isSearchingUsers = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.usersForSearch = response.data;
          this.filteredUsersForSearch = response.data;
        }
        this.isSearchingUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users for existing attendee:", error);
        this.isSearchingUsers = false;
        this.cdr.detectChanges();
      }
    });
  }
  cancelAttendeeForm() {
    this.showAddAttendeeForm = false;
    this.editingAttendee = null;
    this.attendeesForm.reset();
    this.clearUserSearch();
  }
  onAttendeeKindChange(event) {
    const kind = parseInt(event.target.value, 10);
    console.log("onAttendeeKindChange called with kind:", kind);
    if (kind !== AttendeeKind.Internal) {
      this.clearUserSearch();
      this.attendeesForm.patchValue({
        userId: "",
        userSearch: "",
        displayName: "",
        department: ""
      });
    }
    this.updateAttendeeValidators(kind);
  }
  // User search functionality
  onUserSearch() {
    const searchTerm = this.attendeesForm.get("userSearch")?.value || "";
    if (searchTerm && searchTerm.toString().trim().length >= 2) {
      this.searchUsers(searchTerm.toString().trim());
    } else {
      this.filteredUsersForSearch = [];
      this.showUserDropdown = false;
    }
  }
  searchUsers(searchTerm) {
    this.userSearchError = null;
    this.isSearchingUsers = true;
    this.usersService.searchUserNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.usersForSearch = response.data;
          this.filteredUsersForSearch = response.data;
          this.showUserDropdown = true;
          this.userSearchError = null;
        } else {
          this.usersForSearch = [];
          this.filteredUsersForSearch = [];
          const searchValue = this.attendeesForm.get("userSearch")?.value;
          this.showUserDropdown = searchValue && searchValue.toString().trim().length > 0;
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.userSearchError = this.translate("meetings.no_users_found");
          } else {
            this.userSearchError = null;
          }
        }
        this.isSearchingUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching users:", error);
        this.usersForSearch = [];
        this.filteredUsersForSearch = [];
        const searchValue = this.attendeesForm.get("userSearch")?.value;
        this.showUserDropdown = searchValue && searchValue.toString().trim().length > 0;
        this.isSearchingUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.userSearchError = this.translate("meetings.no_users_found");
        } else {
          this.userSearchError = this.translate("tasks.form.failedToSearchEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onUserSearchFocus(event) {
    const target = event.target;
    if (target) {
      target.select();
    }
    const searchTerm = this.attendeesForm.get("userSearch")?.value;
    if (this.filteredUsersForSearch && this.filteredUsersForSearch.length > 0) {
      this.showUserDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onUserSearch();
    } else {
      this.loadAllUsersForSearch();
    }
  }
  loadAllUsersForSearch() {
    this.userSearchError = null;
    this.isSearchingUsers = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.usersForSearch = response.data;
          this.filteredUsersForSearch = response.data;
          this.showUserDropdown = true;
          this.userSearchError = null;
        } else {
          this.usersForSearch = [];
          this.filteredUsersForSearch = [];
          const searchValue = this.attendeesForm.get("userSearch")?.value;
          this.showUserDropdown = searchValue && searchValue.toString().trim().length > 0;
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.userSearchError = this.translate("meetings.no_users_found");
          } else {
            this.userSearchError = null;
          }
        }
        this.isSearchingUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users:", error);
        this.usersForSearch = [];
        this.filteredUsersForSearch = [];
        const searchValue = this.attendeesForm.get("userSearch")?.value;
        this.showUserDropdown = searchValue && searchValue.toString().trim().length > 0;
        this.isSearchingUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.userSearchError = this.translate("meetings.no_users_found");
        } else {
          this.userSearchError = this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onUserSearchBlur() {
    setTimeout(() => {
      this.showUserDropdown = false;
    }, 200);
  }
  selectUser(user) {
    this.attendeesForm.patchValue({
      userId: user.id,
      userSearch: user.name,
      displayName: user.name,
      department: user.departmentName
    });
    this.showUserDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedUser() {
    const userId = this.attendeesForm.get("userId")?.value;
    if (!userId)
      return null;
    return this.usersForSearch.find((u) => u.id === userId) || null;
  }
  clearSelectedUser() {
    this.attendeesForm.patchValue({
      userId: "",
      userSearch: "",
      displayName: "",
      department: ""
    });
    this.showUserDropdown = false;
    this.cdr.detectChanges();
  }
  clearUserSearch() {
    this.usersForSearch = [];
    this.filteredUsersForSearch = [];
    this.showUserDropdown = false;
    this.isSearchingUsers = false;
    this.userSearchError = null;
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
    this.recommendationsForm.reset({
      userSearch: "",
      assigneeUserId: ""
    });
    this.clearRecommendationUserSearch();
  }
  editRecommendation(recommendation) {
    this.editingRecommendationId = recommendation.id;
    this.editingRecommendation = recommendation;
    let userName = "";
    if (recommendation.assigneeUserId && this.allUsers.length > 0) {
      const user = this.allUsers.find((u) => u.id === recommendation.assigneeUserId);
      userName = user ? user.name : recommendation.fullName || "";
    } else if (recommendation.fullName) {
      userName = recommendation.fullName;
    }
    this.recommendationsForm.patchValue({
      text: recommendation.text,
      assigneeUserId: recommendation.assigneeUserId || "",
      userSearch: userName,
      dueDate: recommendation.dueDate ? this.formatDateTimeForInput(recommendation.dueDate) : ""
    });
    this.inlineRecommendationAssignee[recommendation.id] = recommendation.assigneeUserId || "";
    this.inlineRecommendationUserSearch[recommendation.id] = userName;
    if (recommendation.assigneeUserId) {
      this.loadUserForExistingRecommendation(recommendation.assigneeUserId);
      this.loadAllUsersForInlineRecommendation(recommendation.id);
    }
  }
  // Load user details for existing recommendation assignee
  loadUserForExistingRecommendation(userId) {
    this.isSearchingRecommendationUsers = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.recommendationUsersForSearch = response.data;
          this.recommendationFilteredUsersForSearch = response.data;
        }
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users for existing recommendation:", error);
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      }
    });
  }
  cancelRecommendationEdit() {
    const editingId = this.editingRecommendationId;
    this.editingRecommendationId = null;
    this.editingRecommendation = null;
    this.recommendationsForm.reset();
    this.clearRecommendationUserSearch();
    if (editingId !== null) {
      this.clearInlineRecommendationUserSearch(editingId);
    }
  }
  // Initialize inline recommendation user search for a specific recommendation
  initializeInlineRecommendationUserSearch(recommendationId) {
    if (!this.inlineRecommendationUsersForSearch[recommendationId]) {
      this.inlineRecommendationUsersForSearch[recommendationId] = [];
      this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
      this.showInlineRecommendationUserDropdown[recommendationId] = false;
      this.isSearchingInlineRecommendationUsers[recommendationId] = false;
      this.inlineRecommendationUserSearchError[recommendationId] = null;
    }
  }
  // User search functionality for inline recommendation assignee
  onInlineRecommendationUserSearch(recommendationId) {
    this.initializeInlineRecommendationUserSearch(recommendationId);
    const searchTerm = this.inlineRecommendationUserSearch[recommendationId] || "";
    if (searchTerm && searchTerm.toString().trim().length >= 2) {
      this.searchUsersForInlineRecommendation(recommendationId, searchTerm.toString().trim());
    } else {
      this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
      this.showInlineRecommendationUserDropdown[recommendationId] = false;
    }
  }
  searchUsersForInlineRecommendation(recommendationId, searchTerm) {
    this.inlineRecommendationUserSearchError[recommendationId] = null;
    this.isSearchingInlineRecommendationUsers[recommendationId] = true;
    this.usersService.searchUserNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.inlineRecommendationUsersForSearch[recommendationId] = response.data;
          this.inlineRecommendationFilteredUsersForSearch[recommendationId] = response.data;
          this.showInlineRecommendationUserDropdown[recommendationId] = true;
          this.inlineRecommendationUserSearchError[recommendationId] = null;
        } else {
          this.inlineRecommendationUsersForSearch[recommendationId] = [];
          this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
          const searchValue = this.inlineRecommendationUserSearch[recommendationId];
          this.showInlineRecommendationUserDropdown[recommendationId] = !!(searchValue && searchValue.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.inlineRecommendationUserSearchError[recommendationId] = this.translate("meetings.no_users_found");
          } else {
            this.inlineRecommendationUserSearchError[recommendationId] = null;
          }
        }
        this.isSearchingInlineRecommendationUsers[recommendationId] = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching users for inline recommendation:", error);
        this.inlineRecommendationUsersForSearch[recommendationId] = [];
        this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
        const searchValue = this.inlineRecommendationUserSearch[recommendationId];
        this.showInlineRecommendationUserDropdown[recommendationId] = !!(searchValue && searchValue.toString().trim().length > 0);
        this.isSearchingInlineRecommendationUsers[recommendationId] = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.inlineRecommendationUserSearchError[recommendationId] = this.translate("meetings.no_users_found");
        } else {
          this.inlineRecommendationUserSearchError[recommendationId] = this.translate("tasks.form.failedToSearchEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onInlineRecommendationUserSearchFocus(recommendationId, event) {
    this.initializeInlineRecommendationUserSearch(recommendationId);
    const target = event.target;
    if (target) {
      target.select();
    }
    const searchTerm = this.inlineRecommendationUserSearch[recommendationId];
    if (this.inlineRecommendationFilteredUsersForSearch[recommendationId] && this.inlineRecommendationFilteredUsersForSearch[recommendationId].length > 0) {
      this.showInlineRecommendationUserDropdown[recommendationId] = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onInlineRecommendationUserSearch(recommendationId);
    } else {
      this.loadAllUsersForInlineRecommendation(recommendationId);
    }
  }
  loadAllUsersForInlineRecommendation(recommendationId) {
    this.inlineRecommendationUserSearchError[recommendationId] = null;
    this.isSearchingInlineRecommendationUsers[recommendationId] = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.inlineRecommendationUsersForSearch[recommendationId] = response.data;
          this.inlineRecommendationFilteredUsersForSearch[recommendationId] = response.data;
          this.showInlineRecommendationUserDropdown[recommendationId] = true;
          this.inlineRecommendationUserSearchError[recommendationId] = null;
        } else {
          this.inlineRecommendationUsersForSearch[recommendationId] = [];
          this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
          const searchValue = this.inlineRecommendationUserSearch[recommendationId];
          this.showInlineRecommendationUserDropdown[recommendationId] = !!(searchValue && searchValue.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.inlineRecommendationUserSearchError[recommendationId] = this.translate("meetings.no_users_found");
          } else {
            this.inlineRecommendationUserSearchError[recommendationId] = null;
          }
        }
        this.isSearchingInlineRecommendationUsers[recommendationId] = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users for inline recommendation:", error);
        this.inlineRecommendationUsersForSearch[recommendationId] = [];
        this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
        const searchValue = this.inlineRecommendationUserSearch[recommendationId];
        this.showInlineRecommendationUserDropdown[recommendationId] = !!(searchValue && searchValue.toString().trim().length > 0);
        this.isSearchingInlineRecommendationUsers[recommendationId] = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.inlineRecommendationUserSearchError[recommendationId] = this.translate("meetings.no_users_found");
        } else {
          this.inlineRecommendationUserSearchError[recommendationId] = this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onInlineRecommendationUserSearchBlur(recommendationId) {
    setTimeout(() => {
      this.showInlineRecommendationUserDropdown[recommendationId] = false;
    }, 200);
  }
  selectUserForInlineRecommendation(recommendationId, user) {
    this.inlineRecommendationAssignee[recommendationId] = user.id;
    this.inlineRecommendationUserSearch[recommendationId] = user.name;
    this.showInlineRecommendationUserDropdown[recommendationId] = false;
    this.cdr.detectChanges();
  }
  getSelectedUserForInlineRecommendation(recommendationId) {
    const userId = this.inlineRecommendationAssignee[recommendationId];
    if (!userId)
      return null;
    const users = this.inlineRecommendationUsersForSearch[recommendationId] || [];
    return users.find((u) => u.id === userId) || null;
  }
  clearSelectedUserForInlineRecommendation(recommendationId) {
    this.inlineRecommendationAssignee[recommendationId] = "";
    this.inlineRecommendationUserSearch[recommendationId] = "";
    this.showInlineRecommendationUserDropdown[recommendationId] = false;
    this.cdr.detectChanges();
  }
  clearInlineRecommendationUserSearch(recommendationId) {
    this.inlineRecommendationUsersForSearch[recommendationId] = [];
    this.inlineRecommendationFilteredUsersForSearch[recommendationId] = [];
    this.showInlineRecommendationUserDropdown[recommendationId] = false;
    this.isSearchingInlineRecommendationUsers[recommendationId] = false;
    this.inlineRecommendationUserSearchError[recommendationId] = null;
    this.inlineRecommendationAssignee[recommendationId] = "";
    this.inlineRecommendationUserSearch[recommendationId] = "";
  }
  cancelRecommendationForm() {
    this.showAddRecommendationForm = false;
    this.editingRecommendation = null;
    this.editingRecommendationId = null;
    this.recommendationsForm.reset();
    this.clearRecommendationUserSearch();
    this.savingRecommendation = false;
  }
  // User search functionality for recommendation assignee
  onRecommendationUserSearch() {
    const searchTerm = this.recommendationsForm.get("userSearch")?.value || "";
    if (searchTerm && searchTerm.toString().trim().length >= 2) {
      this.searchUsersForRecommendation(searchTerm.toString().trim());
    } else {
      this.recommendationFilteredUsersForSearch = [];
      this.showRecommendationUserDropdown = false;
    }
  }
  searchUsersForRecommendation(searchTerm) {
    this.recommendationUserSearchError = null;
    this.isSearchingRecommendationUsers = true;
    this.usersService.searchUserNames(searchTerm).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.recommendationUsersForSearch = response.data;
          this.recommendationFilteredUsersForSearch = response.data;
          this.showRecommendationUserDropdown = true;
          this.recommendationUserSearchError = null;
        } else {
          this.recommendationUsersForSearch = [];
          this.recommendationFilteredUsersForSearch = [];
          const searchValue = this.recommendationsForm.get("userSearch")?.value;
          this.showRecommendationUserDropdown = !!(searchValue && searchValue.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.recommendationUserSearchError = this.translate("meetings.no_users_found");
          } else {
            this.recommendationUserSearchError = null;
          }
        }
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error searching users for recommendation:", error);
        this.recommendationUsersForSearch = [];
        this.recommendationFilteredUsersForSearch = [];
        const searchValue = this.recommendationsForm.get("userSearch")?.value;
        this.showRecommendationUserDropdown = !!(searchValue && searchValue.toString().trim().length > 0);
        this.isSearchingRecommendationUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.recommendationUserSearchError = this.translate("meetings.no_users_found");
        } else {
          this.recommendationUserSearchError = this.translate("tasks.form.failedToSearchEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onRecommendationUserSearchFocus(event) {
    const target = event.target;
    if (target) {
      target.select();
    }
    const searchTerm = this.recommendationsForm.get("userSearch")?.value;
    if (this.recommendationFilteredUsersForSearch && this.recommendationFilteredUsersForSearch.length > 0) {
      this.showRecommendationUserDropdown = true;
    } else if (searchTerm && searchTerm.length >= 2) {
      this.onRecommendationUserSearch();
    } else {
      this.loadAllUsersForRecommendation();
    }
  }
  loadAllUsersForRecommendation() {
    this.recommendationUserSearchError = null;
    this.isSearchingRecommendationUsers = true;
    this.usersService.searchUserNames("").pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          this.recommendationUsersForSearch = response.data;
          this.recommendationFilteredUsersForSearch = response.data;
          this.showRecommendationUserDropdown = true;
          this.recommendationUserSearchError = null;
        } else {
          this.recommendationUsersForSearch = [];
          this.recommendationFilteredUsersForSearch = [];
          const searchValue = this.recommendationsForm.get("userSearch")?.value;
          this.showRecommendationUserDropdown = !!(searchValue && searchValue.toString().trim().length > 0);
          const apiMessage = response.message || "";
          if (apiMessage.toLowerCase().includes("subordinate") || apiMessage.toLowerCase().includes("no employees") || apiMessage.toLowerCase().includes("no user to show")) {
            this.recommendationUserSearchError = this.translate("meetings.no_users_found");
          } else {
            this.recommendationUserSearchError = null;
          }
        }
        this.isSearchingRecommendationUsers = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("Error loading users for recommendation:", error);
        this.recommendationUsersForSearch = [];
        this.recommendationFilteredUsersForSearch = [];
        const searchValue = this.recommendationsForm.get("userSearch")?.value;
        this.showRecommendationUserDropdown = !!(searchValue && searchValue.toString().trim().length > 0);
        this.isSearchingRecommendationUsers = false;
        const errorMessage = error.error?.message || error.message || "";
        if (errorMessage.toLowerCase().includes("subordinate") || errorMessage.toLowerCase().includes("no employees") || errorMessage.toLowerCase().includes("no user to show")) {
          this.recommendationUserSearchError = this.translate("meetings.no_users_found");
        } else {
          this.recommendationUserSearchError = this.translate("tasks.form.failedToLoadEmployees");
        }
        this.cdr.detectChanges();
      }
    });
  }
  onRecommendationUserSearchBlur() {
    setTimeout(() => {
      this.showRecommendationUserDropdown = false;
    }, 200);
  }
  selectUserForRecommendation(user) {
    this.recommendationsForm.patchValue({
      assigneeUserId: user.id,
      userSearch: user.name
    });
    this.showRecommendationUserDropdown = false;
    this.cdr.detectChanges();
  }
  getSelectedUserForRecommendation() {
    const userId = this.recommendationsForm.get("assigneeUserId")?.value;
    if (!userId)
      return null;
    return this.recommendationUsersForSearch.find((u) => u.id === userId) || null;
  }
  clearSelectedUserForRecommendation() {
    this.recommendationsForm.patchValue({
      assigneeUserId: "",
      userSearch: ""
    });
    this.showRecommendationUserDropdown = false;
    this.cdr.detectChanges();
  }
  clearRecommendationUserSearch() {
    this.recommendationUsersForSearch = [];
    this.recommendationFilteredUsersForSearch = [];
    this.showRecommendationUserDropdown = false;
    this.isSearchingRecommendationUsers = false;
    this.recommendationUserSearchError = null;
  }
  saveRecommendation() {
    if (this.recommendationsForm.invalid || !this.meeting) {
      this.markFormGroupTouched(this.recommendationsForm);
      return;
    }
    this.savingRecommendation = true;
    const formValue = this.recommendationsForm.value;
    const recommendationData = {
      text: formValue.text,
      assigneeUserId: formValue.assigneeUserId || void 0,
      dueDate: formValue.dueDate ? new Date(formValue.dueDate).toISOString() : void 0
    };
    if (this.editingRecommendation) {
      this.meetingsService.updateRecommendation(this.editingRecommendation.id, recommendationData).subscribe({
        next: (response) => {
          this.savingRecommendation = false;
          if (response.success) {
            this.loadMeetingDetails();
            this.cancelRecommendationForm();
          } else {
            console.error("Failed to update recommendation:", response.message);
          }
        },
        error: (error) => {
          console.error("Error updating recommendation:", error);
          this.savingRecommendation = false;
        }
      });
    } else {
      this.meetingsService.addRecommendation(this.meeting.id, recommendationData).subscribe({
        next: (response) => {
          this.savingRecommendation = false;
          if (response.success) {
            this.loadMeetingDetails();
            this.cancelRecommendationForm();
          } else {
            console.error("Failed to add recommendation:", response.message);
          }
        },
        error: (error) => {
          console.error("Error adding recommendation:", error);
          this.savingRecommendation = false;
        }
      });
    }
  }
  saveRecommendationInline(recommendation, newText, assigneeUserId, dueDate) {
    if (!newText.trim()) {
      return;
    }
    const userId = assigneeUserId || this.inlineRecommendationAssignee[recommendation.id] || void 0;
    const recommendationData = {
      text: newText.trim(),
      assigneeUserId: userId || void 0,
      dueDate: dueDate ? new Date(dueDate).toISOString() : void 0
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
    const draft = this.loadMinutesDraft();
    if (draft && !this.editingMinutes) {
      this.hasMinutesDraft = true;
      this.minutesForm.patchValue({
        notes: draft.notes || ""
      });
    } else {
      this.minutesForm.reset();
    }
  }
  editMinutes() {
    if (this.meeting?.minutes) {
      this.editingMinutes = this.meeting.minutes;
      this.minutesForm.patchValue({
        notes: this.meeting.minutes.notes
      });
      this.showAddMinutesForm = true;
    }
  }
  cancelMinutesForm() {
    this.showAddMinutesForm = false;
    this.editingMinutes = null;
    this.minutesForm.reset();
    this.hasMinutesDraft = false;
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
              this.clearMinutesDraft();
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
  // Minutes draft management methods
  setupMinutesAutoSave() {
    this.minutesForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((formValue) => {
      if (this.showAddMinutesForm && !this.editingMinutes && this.meeting) {
        this.saveMinutesDraft(formValue);
      }
    });
  }
  getMinutesDraftKey() {
    return `${this.MINUTES_DRAFT_KEY}${this.meeting?.id || ""}`;
  }
  saveMinutesDraft(formValue) {
    if (!this.meeting)
      return;
    try {
      const draft = {
        notes: formValue.notes || "",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      localStorage.setItem(this.getMinutesDraftKey(), JSON.stringify(draft));
      this.hasMinutesDraft = true;
    } catch (error) {
      console.error("Error saving minutes draft:", error);
    }
  }
  loadMinutesDraft() {
    if (!this.meeting)
      return null;
    try {
      const draftStr = localStorage.getItem(this.getMinutesDraftKey());
      if (draftStr) {
        return JSON.parse(draftStr);
      }
      return null;
    } catch (error) {
      console.error("Error loading minutes draft:", error);
      return null;
    }
  }
  clearMinutesDraft() {
    if (!this.meeting)
      return;
    try {
      localStorage.removeItem(this.getMinutesDraftKey());
      this.hasMinutesDraft = false;
    } catch (error) {
      console.error("Error clearing minutes draft:", error);
    }
  }
  startOverMinutes() {
    this.showClearMinutesDraftModal = true;
  }
  confirmClearMinutesDraft() {
    this.showClearMinutesDraftModal = false;
    this.clearMinutesDraft();
    this.minutesForm.reset();
  }
  cancelClearMinutesDraft() {
    this.showClearMinutesDraftModal = false;
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
    if (!this.meeting) {
      console.error("Meeting not found");
      return;
    }
    this.meetingsService.downloadAttachment(this.meeting.id, attachment.id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = attachment.fileName || "attachment";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error("Error downloading attachment:", error);
      }
    });
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
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static \u0275fac = function MeetingDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MeetingDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MeetingsService), \u0275\u0275directiveInject(UsersService), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MeetingDetailsComponent, selectors: [["app-meeting-details"]], decls: 23, vars: 16, consts: [["editTextarea", ""], ["editAssigneeSelect", ""], ["editDueDateInput", ""], [1, "meeting-details-container", "rounded-5"], [1, "header", "d-flex", "justify-content-between", "align-items-center"], [1, "page-title"], [1, "back-btn", "rtl", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["d", "M12 19l-7-7 7-7"], ["class", "loading-container", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "meeting-content", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], [1, "loading-spinner"], [1, "error-message"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], [1, "meeting-content"], [1, "meeting-header"], [1, "meeting-title-section"], [1, "header-top", "d-flex", "justify-content-between", "align-items-center"], [1, "meeting-title"], ["class", "edit-btn", 3, "click", 4, "ngIf"], [1, "meeting-status"], [1, "status-badge"], ["class", "meeting-info", 4, "ngIf"], ["class", "edit-form", 4, "ngIf"], [1, "section"], [1, "section-header"], [1, "section-title"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "attendee-form-section", 4, "ngIf"], ["class", "attendees-table-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "recommendation-form-section", 4, "ngIf"], ["class", "attachments-list", 4, "ngIf"], ["class", "no-attachments", 4, "ngIf"], ["class", "recommendations-list", 4, "ngIf"], [1, "section-header-actions"], ["type", "button", "class", "btn btn-outline-danger btn-sm", 3, "title", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["class", "minutes-content", 4, "ngIf"], ["class", "no-minutes", 4, "ngIf"], [1, "metadata-grid"], [1, "metadata-item"], [1, "metadata-label"], [1, "metadata-value"], [1, "edit-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "meeting-info"], [1, "info-grid"], ["class", "info-item", 4, "ngIf"], [1, "info-item"], [1, "info-label"], [1, "info-value"], ["target", "_blank", 1, "link", 3, "href"], [1, "edit-form"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title", 1, "form-label"], [1, "required"], ["id", "title", "type", "text", "formControlName", "title", 1, "form-input"], ["for", "agenda", 1, "form-label"], ["id", "agenda", "formControlName", "agenda", "rows", "4", 1, "form-textarea"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", "dir", "ltr", 1, "form-select"], [3, "value"], ["for", "startAt", 1, "form-label"], ["id", "startAt", "type", "datetime-local", "formControlName", "startAt", 1, "form-input"], ["for", "endAt", 1, "form-label"], ["id", "endAt", "type", "datetime-local", "formControlName", "endAt", 1, "form-input"], ["for", "locationMode", 1, "form-label"], ["id", "locationMode", "formControlName", "locationMode", "dir", "ltr", 1, "form-select"], ["class", "form-group", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "save-btn", 3, "disabled"], [4, "ngIf"], ["for", "locationText", 1, "form-label"], ["id", "locationText", "type", "text", "formControlName", "locationText", 1, "form-input", 3, "placeholder"], ["for", "onlineUrl", 1, "form-label"], ["id", "onlineUrl", "type", "url", "formControlName", "onlineUrl", 1, "form-input", 3, "placeholder"], [1, "attendee-form-section"], [1, "form-section"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "form-row"], [1, "form-label"], ["formControlName", "kind", "dir", "ltr", 1, "form-select", 3, "change"], ["formControlName", "role", "dir", "ltr", 1, "form-select"], ["class", "internal-fields", 4, "ngIf"], ["class", "external-fields", 4, "ngIf"], ["formControlName", "notes", "rows", "2", 1, "form-textarea", 3, "placeholder"], ["type", "submit", 1, "save-btn"], [1, "internal-fields"], [1, "text-danger"], [1, "employee-search-container", "position-relative"], ["type", "text", "id", "userSearch", "formControlName", "userSearch", "autocomplete", "off", 1, "form-input", 3, "input", "focus", "blur", "placeholder"], ["class", "position-absolute", "style", "right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;", 4, "ngIf"], ["class", "employee-dropdown", 4, "ngIf"], ["class", "selected-employee result", 4, "ngIf"], ["type", "hidden", "formControlName", "userId"], [1, "position-absolute", 2, "right", "10px", "top", "50%", "transform", "translateY(-50%)", "pointer-events", "none"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary", 2, "width", "1rem", "height", "1rem", "border-width", "0.15rem"], [1, "visually-hidden"], [1, "employee-dropdown"], [1, "employee-list"], ["class", "employee-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "employee-item", 3, "click"], [1, "employee-info"], [1, "employee-name"], ["class", "employee-job", 4, "ngIf"], [1, "employee-job"], [1, "employee-item", "text-danger", "text-center"], [1, "fas", "fa-exclamation-circle", "me-2"], [1, "employee-item", "text-muted", "text-center"], [1, "fas", "fa-info-circle", "me-2"], [1, "selected-employee", "result"], [1, "selected-employee-info"], ["type", "button", 1, "btn-remove-employee", 3, "click"], [1, "fa", "fa-x"], [1, "external-fields"], ["type", "text", "formControlName", "displayName", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "organization", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "jobTitle", 1, "form-input", 3, "placeholder"], ["type", "text", "formControlName", "department", 1, "form-input", 3, "placeholder"], ["type", "email", "formControlName", "email", 1, "form-input", 3, "placeholder"], [1, "attendees-table-container"], [1, "table-responsive"], [1, "attendees-table"], ["class", "attendee-row", 4, "ngFor", "ngForOf"], [1, "attendee-row"], [1, "attendee-name-cell"], [1, "attendee-name"], ["class", "attendee-org", 4, "ngIf"], ["class", "attendee-job", 4, "ngIf"], [1, "status-cell"], [1, "kind-cell"], [1, "role-cell"], [1, "email-cell"], ["class", "email-text", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "department-cell"], ["class", "department-text", 4, "ngIf"], [1, "actions-cell"], [1, "action-buttons"], ["type", "button", 1, "btn-sm", "btn-primary", 3, "click", "title"], ["xmlns", "http://www.w3.org/2000/svg", "width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-user-round-pen-icon", "lucide-user-round-pen"], ["d", "M2 21a8 8 0 0 1 10.821-7.487"], ["d", "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"], ["cx", "10", "cy", "8", "r", "5"], ["type", "button", 1, "btn-sm", "btn-secondary", 3, "click", "title"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["type", "button", 1, "btn-sm", "btn-danger", 3, "click", "title"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], [1, "attendee-org"], [1, "attendee-job"], [1, "email-text"], [1, "no-data"], [1, "department-text"], [1, "empty-state"], [1, "recommendation-form-section"], ["for", "file", 1, "form-label"], ["type", "file", "id", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif", "required", "", 1, "form-input", 3, "change"], ["class", "file-selected", 4, "ngIf"], ["for", "description", 1, "form-label"], ["type", "text", "id", "description", "formControlName", "description", 1, "form-input", 3, "placeholder"], ["for", "documentSource", 1, "form-label"], ["id", "documentSource", "formControlName", "documentSource", 1, "form-select", "ltr"], ["value", "", "selected", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "file-selected"], [1, "file-name"], [1, "file-size"], [1, "attachments-list"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "attachment-item"], [1, "attachment-header"], [1, "attachment-name"], [1, "attachment-meta"], [1, "meta-row"], [1, "attachment-type"], ["class", "attachment-source", 4, "ngIf"], ["class", "meta-row", 4, "ngIf"], [1, "attachment-date"], [1, "attachment-actions"], [1, "download-btn", 3, "click"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7,10 12,15 17,10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "delete-btn", 3, "click"], [1, "attachment-source"], [1, "attachment-description"], [1, "no-attachments"], [1, "no-attachments-text"], ["formControlName", "text", "rows", "4", 1, "form-textarea", 3, "placeholder"], ["type", "text", "id", "recommendationUserSearch", "formControlName", "userSearch", "autocomplete", "off", 1, "form-input", 3, "input", "focus", "blur", "placeholder"], ["type", "hidden", "formControlName", "assigneeUserId"], ["type", "datetime-local", "formControlName", "dueDate", 1, "form-input"], [1, "recommendations-list"], ["class", "recommendation-item", 4, "ngFor", "ngForOf"], [1, "recommendation-item"], [1, "recommendation-content"], ["class", "recommendation-display", 4, "ngIf"], ["class", "recommendation-edit", 4, "ngIf"], [1, "recommendation-display"], [1, "recommendation-text"], ["class", "recommendation-assignee", 4, "ngIf"], ["class", "recommendation-due-date", 4, "ngIf"], ["class", "recommendation-created-at", 4, "ngIf"], [1, "recommendation-actions"], [1, "recommendation-assignee"], [1, "assignee-label"], [1, "assignee-name"], [1, "recommendation-due-date"], [1, "due-date-label"], [1, "due-date-value"], [1, "recommendation-created-at"], [1, "created-at-label"], [1, "created-at-value"], [1, "recommendation-edit"], ["rows", "3", 1, "recommendation-edit-textarea", 3, "value", "placeholder"], [1, "recommendation-edit-assignee"], ["type", "text", "autocomplete", "off", 1, "form-input", 3, "input", "focus", "blur", "id", "value", "placeholder"], ["type", "hidden", 3, "value"], [1, "recommendation-edit-due-date"], ["type", "datetime-local", 1, "form-input", 3, "value"], [1, "recommendation-edit-actions"], ["type", "button", 1, "btn-sm", "btn-success", 3, "click", "title"], ["points", "20,6 9,17 4,12"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "title"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "btn-icon"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"], ["for", "notes", 1, "form-label"], ["id", "notes", "formControlName", "notes", "rows", "4", 1, "form-textarea", 3, "placeholder"], [1, "minutes-content"], [1, "minutes-notes"], [1, "notes-text"], [1, "no-minutes"], [1, "no-minutes-text"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "modal-close", 3, "click"], [1, "modal-body"], [1, "warning-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "modal-message"], ["class", "attendee-preview", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "attendee-preview"], [1, "preview-label"], [1, "preview-text"], ["class", "preview-details", 4, "ngIf"], [1, "preview-details"], ["class", "preview-detail", 4, "ngIf"], [1, "preview-detail"], ["class", "attendee-info", 4, "ngIf"], ["for", "attendanceStatus", 1, "form-label"], ["id", "attendanceStatus", "formControlName", "attendanceStatus", "dir", "ltr", 1, "form-select"], ["id", "notes", "formControlName", "notes", "rows", "3", 1, "form-textarea", 3, "placeholder"], [1, "attendee-info"], ["class", "recommendation-preview", 4, "ngIf"], [1, "recommendation-preview"], ["class", "attachment-preview", 4, "ngIf"], [1, "attachment-preview"]], template: function MeetingDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h1", 5);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 6);
      \u0275\u0275listener("click", function MeetingDetailsComponent_Template_button_click_4_listener() {
        return ctx.goBack();
      });
      \u0275\u0275text(5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 7);
      \u0275\u0275element(7, "path", 8)(8, "path", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, MeetingDetailsComponent_div_9_Template, 4, 1, "div", 10)(10, MeetingDetailsComponent_div_10_Template, 6, 1, "div", 11)(11, MeetingDetailsComponent_div_11_Template, 73, 34, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, MeetingDetailsComponent_div_12_Template, 28, 5, "div", 13)(13, MeetingDetailsComponent_div_13_Template, 39, 23, "div", 13)(14, MeetingDetailsComponent_div_14_Template, 28, 5, "div", 13)(15, MeetingDetailsComponent_div_15_Template, 28, 5, "div", 13)(16, MeetingDetailsComponent_div_16_Template, 28, 5, "div", 13)(17, MeetingDetailsComponent_div_17_Template, 39, 23, "div", 13)(18, MeetingDetailsComponent_div_18_Template, 28, 5, "div", 13)(19, MeetingDetailsComponent_div_19_Template, 28, 5, "div", 13)(20, MeetingDetailsComponent_div_20_Template, 28, 5, "div", 13)(21, MeetingDetailsComponent_div_21_Template, 39, 23, "div", 13)(22, MeetingDetailsComponent_div_22_Template, 28, 5, "div", 13);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, DatePipe], styles: ['\n\n.employee-search-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.employee-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.employee-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item[_ngcontent-%COMP%]:hover {\n  background-color: #F2ECCE;\n}\n.employee-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%], \n.employee-item.text-muted[_ngcontent-%COMP%] {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger[_ngcontent-%COMP%]:hover, \n.employee-item.text-muted[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.result[_ngcontent-%COMP%] {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 12px;\n  border-radius: 6px;\n}\n.selected-employee-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.employee-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-job[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-remove-employee[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-size: 14px;\n}\n.btn-remove-employee[_ngcontent-%COMP%]:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.meeting-details-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background: #F9F7ED;\n  min-height: 100vh;\n  position: relative;\n}\n.meeting-details-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(21, 134, 56, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(9, 54, 95, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.meeting-details-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding: 20px 0;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background-color: #ffffff;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  box-shadow: var(--shadow-light);\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--sidebar-bg);\n  border-color: #B68A35;\n  color: #B68A35;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  margin: 2rem 0;\n}\n.loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(226, 232, 240, 0.3);\n  border-top: 4px solid var(--brand-green);\n  border-right: 4px solid var(--brand-blue);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  margin-bottom: 20px;\n  position: relative;\n}\n.loading-spinner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  border: 2px solid transparent;\n  border-top: 2px solid rgba(21, 134, 56, 0.2);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 2s linear infinite reverse;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin: 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.meeting-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  animation: _ngcontent-%COMP%_slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meeting-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  border-radius: 20px 20px 0 0;\n}\n.meeting-header[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  color: #5F646D;\n  padding: 32px;\n}\n.meeting-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.header-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.meeting-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.meeting-status[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-0[_ngcontent-%COMP%] {\n  background-color: rgba(16, 91, 231, 0.849);\n  color: white;\n}\n.status-1[_ngcontent-%COMP%] {\n  background-color: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.status-2[_ngcontent-%COMP%] {\n  background-color: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.status-3[_ngcontent-%COMP%] {\n  background-color: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-0[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-2[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.attendee-card[_ngcontent-%COMP%]   .status-3[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n  border: 1px solid #fed7aa;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #F2ECCE !important;\n  color: #7C5E24 !important;\n  border: 1px solid #7C5E24 !important;\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: #E6D7A2;\n  color: #7C5E24;\n  border-color: #E6D7A2;\n}\n.meeting-info[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.info-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.info-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.link[_ngcontent-%COMP%] {\n  color: #B68A35;\n  text-decoration: none;\n  font-weight: 500;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: #5F646D;\n  text-decoration: underline;\n}\n.edit-form[_ngcontent-%COMP%] {\n  padding: 32px;\n  background-color: var(--sidebar-bg);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 8px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid rgba(226, 232, 240, 0.8);\n  border-radius: 12px;\n  font-size: 16px;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 52px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow:\n    0 0 0 4px rgba(212, 170, 58, 0.15),\n    0 4px 8px rgba(212, 170, 58, 0.1),\n    inset 0 1px 2px rgba(255, 255, 255, 0.9);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #ef4444;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.save-btn[_ngcontent-%COMP%], \n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  min-width: 130px;\n  min-height: 52px;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.save-btn[_ngcontent-%COMP%]::before, \n.cancel-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.save-btn[_ngcontent-%COMP%]:hover::before, \n.cancel-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(212, 170, 58, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #9ca3af 0%,\n      #6b7280 100%);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  color: var(--text-secondary);\n  border: 2px solid rgba(226, 232, 240, 0.8);\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--sidebar-bg) 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.section[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-top: 1px solid var(--border-color);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.attendees-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.attendee-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 12px;\n  padding: 1rem;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.attendee-card[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.attendee-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attendee-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.attendee-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n  gap: 0.5rem;\n}\n.attendee-name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.attendee-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  flex: 1;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.375rem;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 8px;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  min-height: 2.5rem;\n  transition: all 0.2s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.detail-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n}\n.detail-item.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  margin-bottom: 0.05rem;\n  line-height: 1;\n}\n.detail-value[_ngcontent-%COMP%] {\n  color: #334155;\n  font-size: 0.8rem;\n  font-weight: 500;\n  word-break: break-word;\n  line-height: 1.2;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.attendee-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.7rem;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 60px;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: 1px solid #B68A35;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #FFCDD2;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #C62828;\n  color: #FFFFFF;\n  border-color: #C62828;\n}\n.kind-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.15rem 0.3rem;\n  border-radius: 8px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n}\n.kind-badge.kind-internal[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: white;\n}\n.kind-badge.kind-external[_ngcontent-%COMP%] {\n  background-color: #f59e0b;\n  color: white;\n}\n.role-badge.role-speaker[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.role-badge.role-attendee[_ngcontent-%COMP%] {\n  background-color: #6366f1;\n  color: white;\n}\n.attachments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  background: #F9F7ED;\n  border-radius: 16px;\n  border: 1px solid #7C5E24 !important;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  gap: 16px;\n}\n.attachment-item[_ngcontent-%COMP%]:hover {\n  border-color: #B68A35 !important;\n  background: #F9F7ED !important;\n}\n.attachment-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attachment-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.attachment-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  word-break: break-word;\n  line-height: 1.4;\n  margin: 0;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.attachment-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5F646D;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background: #F2ECCE !important;\n  color: #7C5E24 !important;\n  border: 1px solid #CBA344 !important;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-height: 44px;\n}\n.download-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.download-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n  background: #E6D7A2;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background: #FFCDD2;\n  color: #C62828;\n  border: 1px solid #C62828;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.delete-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.delete-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: #C62828;\n  color: #dc2626;\n  border-color: #C62828;\n}\n.minutes-content[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.minutes-content[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  border-radius: 16px 16px 0 0;\n}\n.minutes-notes[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.minutes-notes[_ngcontent-%COMP%]:last-child, \n.minutes-summary[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  font-size: 16px;\n}\n.minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  content: "\\1f916";\n  font-size: 16px;\n}\n.notes-text[_ngcontent-%COMP%], \n.summary-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.notes-text[_ngcontent-%COMP%]:hover, \n.summary-text[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.minutes-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.meta-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.05) 0%,\n      rgba(9, 54, 95, 0.03) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recommendation-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #5F646D;\n  position: relative;\n  z-index: 1;\n}\n.metadata-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.metadata-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.metadata-item[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n}\n.metadata-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.metadata-item[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.metadata-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metadata-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.attendee-form-section[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.selected-user[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #f0fdf4;\n  border-radius: 4px;\n  border: 1px solid #bbf7d0;\n}\n.selected-user[_ngcontent-%COMP%]   .form-input[readonly][_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #374151;\n  cursor: default;\n  border: 1px solid #bbf7d0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.5rem;\n}\n.empty-state[_ngcontent-%COMP%]::before {\n  content: "\\1f4a1";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #5F646D;\n  font-weight: 500;\n  margin: 0;\n  font-style: italic;\n}\n.form-section[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-input[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  background-color: white;\n  transition: var(--t-fast);\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error[_ngcontent-%COMP%], \n.form-select.error[_ngcontent-%COMP%], \n.form-textarea.error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: #f3f4f6;\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.save-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--brand-blue);\n}\n.internal-fields[_ngcontent-%COMP%], \n.external-fields[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.attendee-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n  }\n  .attendees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .attachment-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n    padding: 20px 18px;\n  }\n  .attachment-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .attachment-details[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 8px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 12px;\n    width: 100%;\n    justify-content: stretch;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 44px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 18px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n    margin-top: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px 14px;\n    font-size: 13px;\n    min-height: 44px;\n    justify-content: center;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .back-btn[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .meeting-header[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .meeting-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n  .meeting-title-section[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .header-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .meeting-info[_ngcontent-%COMP%], \n   .edit-form[_ngcontent-%COMP%], \n   .section[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .attendees-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .attendee-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .detail-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    min-height: auto;\n  }\n  .detail-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    margin-bottom: 2px;\n  }\n  .detail-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: auto;\n    padding: 8px 12px;\n    font-size: 0.75rem;\n  }\n  .attendee-form-section[_ngcontent-%COMP%], \n   .recommendation-form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .empty-state[_ngcontent-%COMP%]::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .no-attachments[_ngcontent-%COMP%], \n   .no-minutes[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .no-attachments[_ngcontent-%COMP%]::before, \n   .no-minutes[_ngcontent-%COMP%]::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .no-attachments-text[_ngcontent-%COMP%], \n   .no-minutes-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 0.95rem;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n    margin-top: 16px;\n    padding-top: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 10px 16px;\n    min-width: auto;\n  }\n  .recommendation-edit-actions[_ngcontent-%COMP%] {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 8px 12px;\n    min-width: auto;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    gap: 12px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .attachment-meta[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n    margin-top: 4px;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n    min-height: 42px;\n  }\n  .download-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .minutes-notes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n   .minutes-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 14px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    margin-top: 16px;\n    align-items: stretch;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 14px;\n    min-height: 44px;\n    justify-content: center;\n    border-radius: 10px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 8px;\n  }\n  .metadata-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .metadata-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 16px;\n  }\n  .metadata-label[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .metadata-value[_ngcontent-%COMP%] {\n    font-size: 14px;\n    word-break: break-word;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 16px;\n    max-width: calc(100% - 32px);\n    border-radius: 16px;\n  }\n  .modal-header[_ngcontent-%COMP%] {\n    padding: 20px 20px 0 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .meeting-details-container[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .meeting-header[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .meeting-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .meeting-info[_ngcontent-%COMP%], \n   .edit-form[_ngcontent-%COMP%], \n   .section[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .info-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .attendee-card[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .btn-sm[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 0.7rem;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n    gap: 10px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .attachment-meta[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .meta-row[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .attachment-type[_ngcontent-%COMP%], \n   .attachment-source[_ngcontent-%COMP%], \n   .attachment-description[_ngcontent-%COMP%], \n   .attachment-date[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 3px 6px;\n  }\n  .attachment-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 8px;\n  }\n  .download-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    flex: none;\n  }\n  .download-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 1.5;\n    margin-bottom: 12px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%] {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    width: 100%;\n    justify-content: center;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:first-child {\n    order: 1;\n  }\n  .recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:last-child {\n    order: 2;\n  }\n  .minutes-content[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .notes-text[_ngcontent-%COMP%], \n   .summary-text[_ngcontent-%COMP%] {\n    padding: 12px;\n    font-size: 13px;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .metadata-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .metadata-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .metadata-value[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .empty-state[_ngcontent-%COMP%], \n   .no-attachments[_ngcontent-%COMP%], \n   .no-minutes[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.75rem;\n  }\n  .empty-state[_ngcontent-%COMP%]::before, \n   .no-attachments[_ngcontent-%COMP%]::before, \n   .no-minutes[_ngcontent-%COMP%]::before {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .no-attachments-text[_ngcontent-%COMP%], \n   .no-minutes-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .attachment-item[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .attachment-name[_ngcontent-%COMP%] {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .recommendation-item[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .recommendation-text[_ngcontent-%COMP%] {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 12px;\n    max-width: calc(100% - 24px);\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n.section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: both;\n}\n.section[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.section[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.section[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.section[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.section[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.section[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.section[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section[_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.9);\n}\n.section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2) !important;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.section[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.recommendation-form-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.recommendations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInFromLeft 0.5s ease-out;\n  animation-fill-mode: both;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.recommendation-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.recommendation-item[_ngcontent-%COMP%] {\n  background: #F9F7ED;\n  border-radius: 16px;\n  padding: 2rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-item[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #B68A35;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.recommendation-item[_ngcontent-%COMP%]:hover {\n  background: #f2ecce52;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.recommendation-item[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.recommendation-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.recommendation-assignee[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #F2ECCE;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.assignee-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #92722A;\n  margin-right: 8px;\n}\n.assignee-name[_ngcontent-%COMP%] {\n  color: #92722A;\n  font-weight: 600;\n}\n.recommendation-due-date[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #E8F4FD;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.due-date-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1976D2;\n  margin-right: 8px;\n}\n.due-date-value[_ngcontent-%COMP%] {\n  color: #1976D2;\n  font-weight: 600;\n}\n.recommendation-created-at[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.created-at-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #6B7280;\n  margin-right: 8px;\n}\n.created-at-value[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 600;\n}\n.recommendation-edit-assignee[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.recommendation-edit-assignee[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.recommendation-edit-assignee[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.recommendation-edit-assignee[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF5F;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-due-date[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.recommendation-edit-due-date[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.recommendation-edit-due-date[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.recommendation-edit-due-date[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #D4AF5F;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recommendation-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-text[_ngcontent-%COMP%] {\n  color: #7C5E24;\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-bottom: 1rem;\n  padding: 1.5rem;\n  background: #F2ECCE;\n  border-radius: 12px;\n  font-weight: 400;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-text[_ngcontent-%COMP%]:hover {\n  background: #F2ECCE;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recommendation-edit-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #7C5E24;\n  border-radius: 12px;\n  font-size: 1rem;\n  line-height: 1.6;\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1e293b;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #7C5E24;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(59, 130, 246, 0.2);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: white;\n  box-shadow: 0 4px 14px rgba(7C5E24, 0.3);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(7C5E24, 0.4);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 14px rgba(212, 170, 58, 0.3);\n}\n.recommendation-edit-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(212, 170, 58, 0.4);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  max-width: 350px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  margin-bottom: 16px;\n  font-size: 32px;\n}\n.modal-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 16px;\n  line-height: 1.4;\n}\n.recommendation-preview[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 12px;\n  text-align: left;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n.preview-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.4;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px 20px 20px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  min-width: 80px;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: white;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.minutes-display[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.minutes-content[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.minutes-notes[_ngcontent-%COMP%], \n.minutes-summary[_ngcontent-%COMP%], \n.minutes-attachments[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.minutes-notes[_ngcontent-%COMP%]:last-child, \n.minutes-summary[_ngcontent-%COMP%]:last-child, \n.minutes-attachments[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.minutes-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.75rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  font-size: 0.875rem;\n}\n.minutes-summary[_ngcontent-%COMP%]   .minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f916";\n}\n.minutes-attachments[_ngcontent-%COMP%]   .minutes-label[_ngcontent-%COMP%]::before {\n  content: "\\1f4ce";\n}\n.minutes-text[_ngcontent-%COMP%] {\n  color: #5F646D;\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  font-weight: 400;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.no-minutes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n}\n.no-minutes-text[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-size: 1rem;\n  margin: 0;\n  font-style: italic;\n}\n.file-selected[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  border-radius: 12px;\n  border: 1px solid rgba(21, 134, 56, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.file-selected[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n}\n.file-selected[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.08) 100%);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.15);\n}\n.file-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  display: block;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  background: #F9F7ED;\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: #F9F7ED;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid #7C5E24;\n}\n.attachment-item[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.08);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.attachment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n.attachment-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(21, 134, 56, 0.1);\n  border-radius: 8px;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #B68A35;\n}\n.attachment-type[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.attachment-source[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(21, 134, 56, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  color: #5F646D;\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  font-size: 12px;\n}\n.attachment-description[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-secondary);\n  font-size: 12px;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(107, 114, 128, 0.2);\n}\n.attachment-date[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-size: 12px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.attachment-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n  margin-top: 8px;\n}\n.download-btn[_ngcontent-%COMP%], \n.delete-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.download-btn[_ngcontent-%COMP%] {\n  background: rgba(21, 134, 56, 0.1);\n  color: #B68A35;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 134, 56, 0.2);\n}\n.delete-btn[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.2);\n}\n.no-attachments[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-attachments[_ngcontent-%COMP%]::before {\n  content: "\\1f4ce";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-attachments-text[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.no-minutes[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-minutes[_ngcontent-%COMP%]::before {\n  content: "\\1f4dd";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-minutes-text[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.attachment-preview[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.preview-text[_ngcontent-%COMP%] {\n  color: #B68A35;\n  font-size: 0.875rem;\n  word-break: break-word;\n}\n.recommendation-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.5);\n  flex-wrap: wrap;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 110px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(59, 130, 246, 0.5);\n  outline-offset: 2px;\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 14px rgba(212, 170, 58, 0.3);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(212, 170, 58, 0.4);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);\n}\n.recommendation-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);\n}\n.attendee-info[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.attendee-info[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n}\n.attendee-info[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.attendees-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-top: 20px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.attendees-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.attendees-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.attendee-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.attendee-row[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.attendee-name-cell[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.attendee-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.attendee-org[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 2px;\n}\n.attendee-job[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.status-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 100px;\n}\n.kind-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 80px;\n}\n.role-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 80px;\n}\n.email-cell[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.email-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n  word-break: break-all;\n}\n.department-cell[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.department-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #374151;\n}\n.no-data[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 120px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n}\n.action-buttons[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc2626;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-align: center;\n  min-width: 60px;\n}\n.status-0[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-1[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-2[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.status-3[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.status-4[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.kind-badge[_ngcontent-%COMP%], \n.role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.kind-internal[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.kind-external[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.role-speaker[_ngcontent-%COMP%] {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.role-attendee[_ngcontent-%COMP%] {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n@media (max-width: 1024px) {\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .attendee-name-cell[_ngcontent-%COMP%] {\n    min-width: 150px;\n  }\n  .email-cell[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n}\n@media (max-width: 768px) {\n  .attendees-table-container[_ngcontent-%COMP%] {\n    margin: 0 -16px;\n    border-radius: 0;\n  }\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 6px;\n    font-size: 0.75rem;\n  }\n  .attendee-name-cell[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .status-cell[_ngcontent-%COMP%], \n   .kind-cell[_ngcontent-%COMP%], \n   .role-cell[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n  .email-cell[_ngcontent-%COMP%], \n   .department-cell[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n  .actions-cell[_ngcontent-%COMP%] {\n    min-width: 80px;\n  }\n  .action-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .action-buttons[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n}\n@media (max-width: 640px) {\n  .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5), \n   .attendees-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), \n   .attendees-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    display: none;\n  }\n}\n.attendee-preview[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.preview-text[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.preview-details[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.preview-detail[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=meeting-details.component-ZPYVIO62.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MeetingDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-meeting-details", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="meeting-details-container rounded-5">\r
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
          <div class="info-label">{{ translate("meetings.meeting_type") }}</div>\r
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
            {{ translate("meetings.meeting_type") }} <span class="required">*</span>\r
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
                }}\r
                <span class="text-danger">*</span>\r
                </label>\r
                <div class="employee-search-container position-relative">\r
                  <input \r
                    type="text" \r
                    class="form-input" \r
                    id="userSearch"\r
                    formControlName="userSearch" \r
                    (input)="onUserSearch()" \r
                    (focus)="onUserSearchFocus($event)"\r
                    (blur)="onUserSearchBlur()"\r
                    [placeholder]="translate('Add-Meeting.select_user_placeholder')"\r
                    autocomplete="off"\r
                    [class.error]="attendeesForm.get('userId')?.invalid && attendeesForm.get('userId')?.touched">\r
                  \r
                  <!-- Loading indicator -->\r
                  <div *ngIf="isSearchingUsers" class="position-absolute" \r
                       style="right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;">\r
                    <div class="spinner-border spinner-border-sm text-primary" \r
                         style="width: 1rem; height: 1rem; border-width: 0.15rem;" \r
                         role="status">\r
                      <span class="visually-hidden">Loading...</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- User dropdown list -->\r
                  <div class="employee-dropdown" *ngIf="showUserDropdown && filteredUsersForSearch && filteredUsersForSearch.length > 0">\r
                    <div class="employee-list">\r
                      <div *ngFor="let user of filteredUsersForSearch" \r
                           class="employee-item" \r
                           (click)="selectUser(user)">\r
                        <div class="employee-info">\r
                          <div class="employee-name">{{ user.name }}</div>\r
                          <div class="employee-job" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Error message -->\r
                  <div class="employee-dropdown" *ngIf="showUserDropdown && userSearchError && !isSearchingUsers">\r
                    <div class="employee-list">\r
                      <div class="employee-item text-danger text-center">\r
                        <i class="fas fa-exclamation-circle me-2"></i>\r
                        {{ userSearchError }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- No results message -->\r
                  <div class="employee-dropdown" *ngIf="showUserDropdown && !userSearchError && (!filteredUsersForSearch || filteredUsersForSearch.length === 0) && !isSearchingUsers && (!usersForSearch || usersForSearch.length === 0) && attendeesForm.get('userSearch')?.value && attendeesForm.get('userSearch')?.value.toString().trim().length > 0">\r
                    <div class="employee-list">\r
                      <div class="employee-item text-muted text-center">\r
                        <i class="fas fa-info-circle me-2"></i>\r
                        {{ translate('meetings.no_users_found') }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Selected user display -->\r
                  <div class="selected-employee result" *ngIf="getSelectedUser()">\r
                    <div class="selected-employee-info">\r
                      <div class="employee-info">\r
                        <div class="employee-name">{{ getSelectedUser()?.name }}</div>\r
                        <div class="employee-job" *ngIf="getSelectedUser()?.departmentName">\r
                          {{ getSelectedUser()?.departmentName }}\r
                        </div>\r
                      </div>\r
                      <button type="button" class="btn-remove-employee" (click)="clearSelectedUser()">\r
                        <i class="fa fa-x"></i>\r
                      </button>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Hidden input for form validation -->\r
                  <input type="hidden" formControlName="userId">\r
                  \r
                  <!-- Validation error message -->\r
                  <div *ngIf="attendeesForm.get('userId')?.invalid && attendeesForm.get('userId')?.touched" class="error-message">\r
                    <span *ngIf="attendeesForm.get('userId')?.errors?.['required']">\r
                      {{ translate("login.field_required") }}\r
                    </span>\r
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>\r
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
            <div class="form-group">\r
              <label class="form-label">\r
                {{ translate("meetings.assign_to_user") }}\r
              </label>\r
              <div class="employee-search-container position-relative">\r
                <input \r
                  type="text" \r
                  class="form-input" \r
                  id="recommendationUserSearch"\r
                  formControlName="userSearch" \r
                  (input)="onRecommendationUserSearch()" \r
                  (focus)="onRecommendationUserSearchFocus($event)"\r
                  (blur)="onRecommendationUserSearchBlur()"\r
                  [placeholder]="translate('meetings.select_user')"\r
                  autocomplete="off">\r
                \r
                <!-- Loading indicator -->\r
                <div *ngIf="isSearchingRecommendationUsers" class="position-absolute" \r
                     style="right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;">\r
                  <div class="spinner-border spinner-border-sm text-primary" \r
                       style="width: 1rem; height: 1rem; border-width: 0.15rem;" \r
                       role="status">\r
                    <span class="visually-hidden">Loading...</span>\r
                  </div>\r
                </div>\r
                \r
                <!-- User dropdown list -->\r
                <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && recommendationFilteredUsersForSearch && recommendationFilteredUsersForSearch.length > 0">\r
                  <div class="employee-list">\r
                    <div *ngFor="let user of recommendationFilteredUsersForSearch" \r
                         class="employee-item" \r
                         (click)="selectUserForRecommendation(user)">\r
                      <div class="employee-info">\r
                        <div class="employee-name">{{ user.name }}</div>\r
                        <div class="employee-job" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
                \r
                <!-- Error message -->\r
                <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && recommendationUserSearchError && !isSearchingRecommendationUsers">\r
                  <div class="employee-list">\r
                    <div class="employee-item text-danger text-center">\r
                      <i class="fas fa-exclamation-circle me-2"></i>\r
                      {{ recommendationUserSearchError }}\r
                    </div>\r
                  </div>\r
                </div>\r
                \r
                <!-- No results message -->\r
                <div class="employee-dropdown" *ngIf="showRecommendationUserDropdown && !recommendationUserSearchError && (!recommendationFilteredUsersForSearch || recommendationFilteredUsersForSearch.length === 0) && !isSearchingRecommendationUsers && (!recommendationUsersForSearch || recommendationUsersForSearch.length === 0) && recommendationsForm.get('userSearch')?.value && recommendationsForm.get('userSearch')?.value.toString().trim().length > 0">\r
                  <div class="employee-list">\r
                    <div class="employee-item text-muted text-center">\r
                      <i class="fas fa-info-circle me-2"></i>\r
                      {{ translate('meetings.no_users_found') }}\r
                    </div>\r
                  </div>\r
                </div>\r
                \r
                <!-- Selected user display -->\r
                <div class="selected-employee result" *ngIf="getSelectedUserForRecommendation()">\r
                  <div class="selected-employee-info">\r
                    <div class="employee-info">\r
                      <div class="employee-name">{{ getSelectedUserForRecommendation()?.name }}</div>\r
                      <div class="employee-job" *ngIf="getSelectedUserForRecommendation()?.departmentName">\r
                        {{ getSelectedUserForRecommendation()?.departmentName }}\r
                      </div>\r
                    </div>\r
                    <button type="button" class="btn-remove-employee" (click)="clearSelectedUserForRecommendation()">\r
                      <i class="fa fa-x"></i>\r
                    </button>\r
                  </div>\r
                </div>\r
                \r
                <!-- Hidden input for form validation -->\r
                <input type="hidden" formControlName="assigneeUserId">\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">\r
                {{ translate("meetings.due_date") }}\r
              </label>\r
              <input\r
                type="datetime-local"\r
                formControlName="dueDate"\r
                class="form-input"\r
                [class.error]="\r
                  recommendationsForm.get('dueDate')?.invalid &&\r
                  recommendationsForm.get('dueDate')?.touched\r
                "\r
              />\r
              <div\r
                *ngIf="\r
                  recommendationsForm.get('dueDate')?.invalid &&\r
                  recommendationsForm.get('dueDate')?.touched\r
                "\r
                class="error-message"\r
              >\r
                <span\r
                  *ngIf="recommendationsForm.get('dueDate')?.errors?.['required']"\r
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
              <div class="recommendation-assignee" *ngIf="recommendation.fullName">\r
                <span class="assignee-label">{{ translate("meetings.assigned_to") }}:</span>\r
                <span class="assignee-name">{{ recommendation.fullName }}</span>\r
              </div>\r
              <div class="recommendation-due-date" *ngIf="recommendation.dueDate">\r
                <span class="due-date-label">{{ translate("meetings.due_date") }}:</span>\r
                <span class="due-date-value">{{ recommendation.dueDate |date:'medium' }} </span>\r
              </div>\r
              <div class="recommendation-created-at" *ngIf="recommendation.createdAt">\r
                <span class="created-at-label">{{ translate("meetings.created_at") }}:</span>\r
                <span class="created-at-value">{{ recommendation.createdAt |date:'medium' }} </span>\r
              </div>\r
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
              \r
              <div class="recommendation-edit-assignee">\r
                <label class="form-label">\r
                  {{ translate("meetings.assign_to_user") }}\r
                </label>\r
                <div class="employee-search-container position-relative">\r
                  <input \r
                    type="text" \r
                    class="form-input" \r
                    [id]="'inlineRecommendationUserSearch' + recommendation.id"\r
                    [value]="inlineRecommendationUserSearch[recommendation.id] || ''"\r
                    (input)="inlineRecommendationUserSearch[recommendation.id] = $any($event.target).value; onInlineRecommendationUserSearch(recommendation.id)" \r
                    (focus)="onInlineRecommendationUserSearchFocus(recommendation.id, $event)"\r
                    (blur)="onInlineRecommendationUserSearchBlur(recommendation.id)"\r
                    [placeholder]="translate('meetings.select_user')"\r
                    autocomplete="off">\r
                  \r
                  <!-- Loading indicator -->\r
                  <div *ngIf="isSearchingInlineRecommendationUsers[recommendation.id]" class="position-absolute" \r
                       style="right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none;">\r
                    <div class="spinner-border spinner-border-sm text-primary" \r
                         style="width: 1rem; height: 1rem; border-width: 0.15rem;" \r
                         role="status">\r
                      <span class="visually-hidden">Loading...</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- User dropdown list -->\r
                  <div class="employee-dropdown" *ngIf="showInlineRecommendationUserDropdown[recommendation.id] && inlineRecommendationFilteredUsersForSearch[recommendation.id] && inlineRecommendationFilteredUsersForSearch[recommendation.id].length > 0">\r
                    <div class="employee-list">\r
                      <div *ngFor="let user of inlineRecommendationFilteredUsersForSearch[recommendation.id]" \r
                           class="employee-item" \r
                           (click)="selectUserForInlineRecommendation(recommendation.id, user)">\r
                        <div class="employee-info">\r
                          <div class="employee-name">{{ user.name }}</div>\r
                          <div class="employee-job" *ngIf="user.departmentName">{{ user.departmentName }}</div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Error message -->\r
                  <div class="employee-dropdown" *ngIf="showInlineRecommendationUserDropdown[recommendation.id] && inlineRecommendationUserSearchError[recommendation.id] && !isSearchingInlineRecommendationUsers[recommendation.id]">\r
                    <div class="employee-list">\r
                      <div class="employee-item text-danger text-center">\r
                        <i class="fas fa-exclamation-circle me-2"></i>\r
                        {{ inlineRecommendationUserSearchError[recommendation.id] }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- No results message -->\r
                  <div class="employee-dropdown" *ngIf="showInlineRecommendationUserDropdown[recommendation.id] && !inlineRecommendationUserSearchError[recommendation.id] && (!inlineRecommendationFilteredUsersForSearch[recommendation.id] || inlineRecommendationFilteredUsersForSearch[recommendation.id].length === 0) && !isSearchingInlineRecommendationUsers[recommendation.id] && (!inlineRecommendationUsersForSearch[recommendation.id] || inlineRecommendationUsersForSearch[recommendation.id].length === 0) && inlineRecommendationUserSearch[recommendation.id] && inlineRecommendationUserSearch[recommendation.id].toString().trim().length > 0">\r
                    <div class="employee-list">\r
                      <div class="employee-item text-muted text-center">\r
                        <i class="fas fa-info-circle me-2"></i>\r
                        {{ translate('meetings.no_users_found') }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Selected user display -->\r
                  <div class="selected-employee result" *ngIf="getSelectedUserForInlineRecommendation(recommendation.id)">\r
                    <div class="selected-employee-info">\r
                      <div class="employee-info">\r
                        <div class="employee-name">{{ getSelectedUserForInlineRecommendation(recommendation.id)?.name }}</div>\r
                        <div class="employee-job" *ngIf="getSelectedUserForInlineRecommendation(recommendation.id)?.departmentName">\r
                          {{ getSelectedUserForInlineRecommendation(recommendation.id)?.departmentName }}\r
                        </div>\r
                      </div>\r
                      <button type="button" class="btn-remove-employee" (click)="clearSelectedUserForInlineRecommendation(recommendation.id)">\r
                        <i class="fa fa-x"></i>\r
                      </button>\r
                    </div>\r
                  </div>\r
                  \r
                  <!-- Hidden input for assignee user ID -->\r
                  <input type="hidden" [value]="inlineRecommendationAssignee[recommendation.id]" #editAssigneeSelect>\r
                </div>\r
              </div>\r
\r
              <div class="recommendation-edit-due-date">\r
                <label class="form-label">\r
                  {{ translate("meetings.due_date") }}\r
                </label>\r
                <input\r
                  #editDueDateInput\r
                  type="datetime-local"\r
                  class="form-input"\r
                  [value]="formatDateTimeForInput(recommendation.dueDate || '')"\r
                />\r
              </div>\r
              \r
              <div class="recommendation-edit-actions">\r
                <button\r
                  type="button"\r
                  (click)="\r
                    saveRecommendationInline(recommendation, editTextarea.value, inlineRecommendationAssignee[recommendation.id] || '', editDueDateInput.value)\r
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
\r
\r
    \r
    <!-- Minutes Section -->\r
    <div class="section">\r
      <div class="section-header">\r
        <h3 class="section-title">{{ translate("meetings.minutes") }}</h3>\r
        <div class="section-header-actions">\r
          <button\r
            *ngIf="hasMinutesDraft && showAddMinutesForm && !editingMinutes"\r
            type="button"\r
            (click)="startOverMinutes()"\r
            class="btn btn-outline-danger btn-sm"\r
            [title]="translate('meetings.start_over_tooltip')"\r
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
              <polyline points="1 4 1 10 7 10"></polyline>\r
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>\r
            </svg>\r
            {{ translate("meetings.start_over") }}\r
          </button>\r
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
      </div>\r
\r
      <!-- No Minutes Message -->\r
      <div *ngIf="!hasMinutes() && !showAddMinutesForm" class="no-minutes">\r
        <p class="no-minutes-text">{{ translate("meetings.no_minutes") }}</p>\r
      </div>\r
    </div>\r
\r
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
          <div class="info-label">{{translate("meetings.attendee")}}</div>\r
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
`, styles: ['/* src/app/components/meetings/meeting-details/meeting-details.component.css */\n.employee-search-container {\n  position: relative;\n}\n.employee-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.employee-list {\n  padding: 8px 0;\n}\n.employee-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  border-bottom: 1px solid #f0f0f0;\n}\n.employee-item:hover {\n  background-color: #F2ECCE;\n}\n.employee-item:last-child {\n  border-bottom: none;\n}\n.employee-item.text-danger,\n.employee-item.text-muted {\n  cursor: default !important;\n  pointer-events: none;\n}\n.employee-item.text-danger:hover,\n.employee-item.text-muted:hover {\n  background-color: transparent !important;\n}\n.employee-item.text-danger {\n  color: #dc3545 !important;\n  font-weight: 500;\n  padding: 16px;\n}\n.employee-item.text-muted {\n  color: #6c757d !important;\n  font-weight: 400;\n  padding: 16px;\n}\n.employee-info {\n  flex: 1;\n  min-width: 0;\n}\n.result {\n  background-color: #C8E6C9 !important;\n  border: 1px solid #2BA149 !important;\n}\n.selected-employee {\n  margin-top: 8px;\n  padding: 12px;\n  border-radius: 6px;\n}\n.selected-employee-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.employee-name {\n  font-weight: 500;\n  color: #333;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.employee-job {\n  font-size: 12px;\n  color: #666;\n  margin-top: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.btn-remove-employee {\n  background: none;\n  border: none;\n  color: #dc3545;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s;\n  font-size: 14px;\n}\n.btn-remove-employee:hover {\n  background-color: rgba(220, 53, 69, 0.1);\n}\n.meeting-details-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 24px;\n  background: #F9F7ED;\n  min-height: 100vh;\n  position: relative;\n}\n.meeting-details-container::before {\n  content: "";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    radial-gradient(\n      circle at 20% 80%,\n      rgba(21, 134, 56, 0.05) 0%,\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 20%,\n      rgba(9, 54, 95, 0.05) 0%,\n      transparent 50%);\n  pointer-events: none;\n  z-index: 0;\n}\n.meeting-details-container > * {\n  position: relative;\n  z-index: 1;\n}\n.header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 32px;\n  padding: 20px 0;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background-color: #ffffff;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  box-shadow: var(--shadow-light);\n}\n.back-btn:hover {\n  background-color: var(--sidebar-bg);\n  border-color: #B68A35;\n  color: #B68A35;\n}\n.page-title {\n  font-size: 28px;\n  font-weight: 700;\n  color: #5F646D;\n  margin: 0;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 20px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  margin: 2rem 0;\n}\n.loading-spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(226, 232, 240, 0.3);\n  border-top: 4px solid var(--brand-green);\n  border-right: 4px solid var(--brand-blue);\n  border-radius: 50%;\n  animation: spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;\n  margin-bottom: 20px;\n  position: relative;\n}\n.loading-spinner::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  border: 2px solid transparent;\n  border-top: 2px solid rgba(21, 134, 56, 0.2);\n  border-radius: 50%;\n  animation: spin 2s linear infinite reverse;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n.loading-container p {\n  color: var(--text-secondary);\n  font-size: 16px;\n  margin: 0;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 20px;\n  background-color: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: var(--radius-lg);\n  color: #dc2626;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n.meeting-content {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 20px;\n  box-shadow:\n    0 10px 25px -5px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.meeting-content::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  border-radius: 20px 20px 0 0;\n}\n.meeting-header {\n  background: #D4AF5F;\n  color: #5F646D;\n  padding: 32px;\n}\n.meeting-title-section {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.header-top {\n  display: flex;\n  justify-content: flex-end;\n}\n.meeting-title {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0;\n  line-height: 1.2;\n}\n.meeting-status {\n  align-self: flex-start;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-0 {\n  background-color: rgba(16, 91, 231, 0.849);\n  color: white;\n}\n.status-1 {\n  background-color: rgba(245, 158, 11, 0.9);\n  color: white;\n}\n.status-2 {\n  background-color: rgba(34, 197, 94, 0.9);\n  color: white;\n}\n.status-3 {\n  background-color: rgba(239, 68, 68, 0.9);\n  color: white;\n}\n.attendee-card .status-0 {\n  background-color: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #d1d5db;\n}\n.attendee-card .status-1 {\n  background-color: #dcfce7;\n  color: #166534;\n  border: 1px solid #bbf7d0;\n}\n.attendee-card .status-2 {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.attendee-card .status-3 {\n  background-color: #fef3c7;\n  color: #d97706;\n  border: 1px solid #fed7aa;\n}\n.edit-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #F2ECCE !important;\n  color: #7C5E24 !important;\n  border: 1px solid #7C5E24 !important;\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all var(--t-fast);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.edit-btn:hover {\n  background: #E6D7A2;\n  color: #7C5E24;\n  border-color: #E6D7A2;\n}\n.meeting-info {\n  padding: 32px;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.info-item {\n  padding: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.info-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.info-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.info-item:hover::before {\n  opacity: 1;\n}\n.info-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.info-value {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  line-height: 1.5;\n}\n.link {\n  color: #B68A35;\n  text-decoration: none;\n  font-weight: 500;\n}\n.link:hover {\n  color: #5F646D;\n  text-decoration: underline;\n}\n.edit-form {\n  padding: 32px;\n  background-color: var(--sidebar-bg);\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-label {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 8px;\n}\n.required {\n  color: #ef4444;\n}\n.form-input,\n.form-textarea,\n.form-select {\n  width: 100%;\n  padding: 14px 18px;\n  border: 2px solid rgba(226, 232, 240, 0.8);\n  border-radius: 12px;\n  font-size: 16px;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  min-height: 52px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);\n}\n.form-input:focus,\n.form-textarea:focus,\n.form-select:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow:\n    0 0 0 4px rgba(212, 170, 58, 0.15),\n    0 4px 8px rgba(212, 170, 58, 0.1),\n    inset 0 1px 2px rgba(255, 255, 255, 0.9);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fafbfc 100%);\n}\n.form-input.error,\n.form-textarea.error,\n.form-select.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 100px;\n}\n.error-message {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  font-size: 14px;\n  color: #ef4444;\n}\n.form-actions {\n  display: flex;\n  gap: 16px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.save-btn,\n.cancel-btn {\n  padding: 14px 28px;\n  border-radius: 12px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  min-width: 130px;\n  min-height: 52px;\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.save-btn::before,\n.cancel-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.save-btn:hover::before,\n.cancel-btn:hover::before {\n  left: 100%;\n}\n.save-btn {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.save-btn:hover:not(:disabled) {\n  background: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(212, 170, 58, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);\n}\n.save-btn:disabled {\n  background:\n    linear-gradient(\n      135deg,\n      #9ca3af 0%,\n      #6b7280 100%);\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.cancel-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n  color: var(--text-secondary);\n  border: 2px solid rgba(226, 232, 240, 0.8);\n}\n.cancel-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--sidebar-bg) 0%,\n      #f1f5f9 100%);\n  border-color: #B68A35;\n  color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.section {\n  padding: 32px;\n  border-top: 1px solid var(--border-color);\n}\n.section-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 24px 0;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--border-color);\n}\n.attendees-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.attendee-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 12px;\n  padding: 1rem;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.attendee-card:hover {\n  border-color: #B68A35;\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.attendee-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attendee-card:hover::before {\n  opacity: 1;\n}\n.attendee-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.375rem;\n  gap: 0.5rem;\n}\n.attendee-name {\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n  line-height: 1.2;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.attendee-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  flex: 1;\n}\n.detail-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.375rem;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  padding: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 8px;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  min-height: 2.5rem;\n  transition: all 0.2s ease;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.detail-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n}\n.detail-item.full-width {\n  grid-column: 1 / -1;\n}\n.detail-label {\n  font-weight: 600;\n  color: #64748b;\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n  margin-bottom: 0.05rem;\n  line-height: 1;\n}\n.detail-value {\n  color: #334155;\n  font-size: 0.8rem;\n  font-weight: 500;\n  word-break: break-word;\n  line-height: 1.2;\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.attendee-actions {\n  margin-top: auto;\n  padding-top: 0.5rem;\n  border-top: 1px solid #e5e7eb;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.3rem;\n  justify-content: center;\n}\n.btn-sm {\n  padding: 0.3rem 0.6rem;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 0.7rem;\n  transition: all 0.2s ease;\n  border: none;\n  cursor: pointer;\n  min-width: 60px;\n}\n.btn-secondary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border: 1px solid #B68A35;\n}\n.btn-secondary:hover {\n  background-color: #B68A35;\n  color: #FFFFFF;\n  border-color: #B68A35;\n}\n.btn-danger {\n  background-color: #FFCDD2;\n  color: #C62828;\n  border: 1px solid #C62828;\n}\n.btn-danger:hover {\n  background-color: #C62828;\n  color: #FFFFFF;\n  border-color: #C62828;\n}\n.kind-badge,\n.role-badge {\n  display: inline-block;\n  padding: 0.15rem 0.3rem;\n  border-radius: 8px;\n  font-size: 0.6rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.2px;\n}\n.kind-badge.kind-internal {\n  background-color: #B68A35;\n  color: white;\n}\n.kind-badge.kind-external {\n  background-color: #f59e0b;\n  color: white;\n}\n.role-badge.role-speaker {\n  background-color: #ef4444;\n  color: white;\n}\n.role-badge.role-attendee {\n  background-color: #6366f1;\n  color: white;\n}\n.attachments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.attachment-item {\n  display: flex;\n  flex-direction: column;\n  padding: 20px 24px;\n  background: #F9F7ED;\n  border-radius: 16px;\n  border: 1px solid #7C5E24 !important;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  gap: 16px;\n}\n.attachment-item:hover {\n  border-color: #B68A35 !important;\n  background: #F9F7ED !important;\n}\n.attachment-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.attachment-item:hover::before {\n  opacity: 1;\n}\n.attachment-header {\n  width: 100%;\n}\n.attachment-name {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-primary);\n  word-break: break-word;\n  line-height: 1.4;\n  margin: 0;\n}\n.attachment-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n}\n.meta-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.attachment-type {\n  font-size: 12px;\n  color: #5F646D;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background: #F2ECCE !important;\n  color: #7C5E24 !important;\n  border: 1px solid #CBA344 !important;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  min-height: 44px;\n}\n.download-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.download-btn:hover::before {\n  left: 100%;\n  background: #E6D7A2;\n}\n.download-btn:hover {\n  background: #B68A35;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.delete-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 18px;\n  background: #FFCDD2;\n  color: #C62828;\n  border: 1px solid #C62828;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);\n  flex: 1;\n  min-height: 44px;\n}\n.delete-btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.delete-btn:hover::before {\n  left: 100%;\n}\n.delete-btn:hover {\n  background: #C62828;\n  color: #dc2626;\n  border-color: #C62828;\n}\n.minutes-content {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.minutes-content::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  border-radius: 16px 16px 0 0;\n}\n.minutes-notes,\n.minutes-summary {\n  margin-bottom: 24px;\n  position: relative;\n  z-index: 1;\n}\n.minutes-notes:last-child,\n.minutes-summary:last-child {\n  margin-bottom: 0;\n}\n.minutes-notes h4,\n.minutes-summary h4 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 16px 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.minutes-notes h4::before {\n  content: "\\1f4dd";\n  font-size: 16px;\n}\n.minutes-summary h4::before {\n  content: "\\1f916";\n  font-size: 16px;\n}\n.notes-text,\n.summary-text {\n  font-size: 15px;\n  line-height: 1.7;\n  color: var(--text-primary);\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.notes-text:hover,\n.summary-text:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.minutes-meta {\n  display: flex;\n  gap: 24px;\n}\n.meta-item {\n  display: flex;\n  gap: 8px;\n}\n.meta-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n}\n.meta-value {\n  font-size: 14px;\n  color: var(--text-primary);\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.recommendation-item {\n  padding: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.05) 0%,\n      rgba(9, 54, 95, 0.03) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(21, 134, 56, 0.1);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.recommendation-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.recommendation-item:hover::before {\n  opacity: 1;\n}\n.recommendation-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.recommendation-text {\n  font-size: 15px;\n  line-height: 1.7;\n  color: #5F646D;\n  position: relative;\n  z-index: 1;\n}\n.metadata-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n.metadata-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(248, 250, 252, 0.8) 0%,\n      rgba(241, 245, 249, 0.6) 100%);\n  border-radius: 16px;\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.metadata-item:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.9) 0%,\n      rgba(248, 250, 252, 0.8) 100%);\n  border-color: #B68A35;\n}\n.metadata-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.metadata-item:hover::before {\n  opacity: 1;\n}\n.metadata-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.metadata-value {\n  font-size: 14px;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.attendee-form-section {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.selected-user {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #f0fdf4;\n  border-radius: 4px;\n  border: 1px solid #bbf7d0;\n}\n.selected-user .form-input[readonly] {\n  background-color: #f0fdf4;\n  color: #374151;\n  cursor: default;\n  border: 1px solid #bbf7d0;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.5rem;\n}\n.empty-state::before {\n  content: "\\1f4a1";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.empty-state p {\n  font-size: 1.1rem;\n  color: #5F646D;\n  font-weight: 500;\n  margin: 0;\n  font-style: italic;\n}\n.form-section {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n}\n.form-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-group {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.form-label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: var(--text-primary);\n  font-size: 14px;\n}\n.form-input,\n.form-select,\n.form-textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-size: 14px;\n  background-color: white;\n  transition: var(--t-fast);\n}\n.form-input:focus,\n.form-select:focus,\n.form-textarea:focus {\n  outline: none;\n  border-color: #B68A35;\n  box-shadow: 0 0 0 3px rgba(212, 170, 58, 0.1);\n}\n.form-input.error,\n.form-select.error,\n.form-textarea.error {\n  border-color: #ef4444;\n}\n.form-textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 24px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n}\n.cancel-btn {\n  padding: 12px 24px;\n  background-color: #f3f4f6;\n  color: var(--text-primary);\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.cancel-btn:hover {\n  background-color: #e5e7eb;\n}\n.save-btn {\n  padding: 12px 24px;\n  background-color: #B68A35;\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  font-weight: 600;\n  cursor: pointer;\n  transition: var(--t-fast);\n}\n.save-btn:hover {\n  background-color: var(--brand-blue);\n}\n.internal-fields,\n.external-fields {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border-color);\n}\n.attendee-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n}\n.action-buttons {\n  display: flex;\n  gap: 8px;\n}\n.btn-sm {\n  padding: 8px 12px;\n  font-size: 12px;\n}\n@media (max-width: 1024px) {\n  .meeting-details-container {\n    padding: 20px;\n  }\n  .info-grid {\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n  }\n  .attendees-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n    gap: 1rem;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .attachment-item {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 16px;\n    padding: 20px 18px;\n  }\n  .attachment-info {\n    width: 100%;\n  }\n  .attachment-details {\n    flex-wrap: wrap;\n    gap: 10px;\n    margin-top: 8px;\n  }\n  .attachment-actions {\n    display: flex;\n    gap: 12px;\n    width: 100%;\n    justify-content: stretch;\n  }\n  .download-btn,\n  .delete-btn {\n    flex: 1;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 44px;\n  }\n  .recommendation-item {\n    padding: 20px 18px;\n  }\n  .recommendation-actions {\n    display: flex;\n    gap: 10px;\n    margin-top: 16px;\n  }\n  .recommendation-actions .btn-sm {\n    flex: 1;\n    padding: 10px 14px;\n    font-size: 13px;\n    min-height: 44px;\n    justify-content: center;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 14px;\n    height: 14px;\n  }\n  .meeting-details-container {\n    padding: 16px;\n  }\n  .header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n  }\n  .page-title {\n    font-size: 24px;\n  }\n  .back-btn {\n    align-self: flex-start;\n  }\n  .meeting-header {\n    padding: 24px 20px;\n  }\n  .meeting-title {\n    font-size: 24px;\n    line-height: 1.3;\n  }\n  .meeting-title-section {\n    gap: 12px;\n  }\n  .header-top {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .meeting-info,\n  .edit-form,\n  .section {\n    padding: 20px 16px;\n  }\n  .info-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .info-item {\n    padding: 16px;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 20px;\n  }\n  .section-title {\n    font-size: 20px;\n  }\n  .attendees-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .attendee-card {\n    padding: 16px;\n  }\n  .detail-row {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .detail-item {\n    padding: 8px;\n    min-height: auto;\n  }\n  .detail-label {\n    font-size: 0.7rem;\n    margin-bottom: 2px;\n  }\n  .detail-value {\n    font-size: 0.85rem;\n  }\n  .action-buttons {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .btn-sm {\n    flex: 1;\n    min-width: auto;\n    padding: 8px 12px;\n    font-size: 0.75rem;\n  }\n  .attendee-form-section,\n  .recommendation-form-section {\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n  .form-section {\n    padding: 16px;\n  }\n  .form-row {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n  }\n  .form-actions .cancel-btn,\n  .form-actions .save-btn {\n    width: 100%;\n  }\n  .empty-state {\n    padding: 2rem 1rem;\n  }\n  .empty-state::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .empty-state p {\n    font-size: 1rem;\n  }\n  .no-attachments,\n  .no-minutes {\n    padding: 2rem 1rem;\n  }\n  .no-attachments::before,\n  .no-minutes::before {\n    font-size: 2.5rem;\n    margin-bottom: 0.75rem;\n  }\n  .no-attachments-text,\n  .no-minutes-text {\n    font-size: 1rem;\n  }\n  .recommendation-item {\n    padding: 20px 16px;\n  }\n  .recommendation-text {\n    padding: 16px;\n    font-size: 0.95rem;\n  }\n  .recommendation-actions {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n    margin-top: 16px;\n    padding-top: 16px;\n  }\n  .recommendation-actions .btn-sm {\n    flex: 1;\n    padding: 10px 16px;\n    min-width: auto;\n  }\n  .recommendation-edit-actions {\n    flex-direction: row;\n    gap: 8px;\n    justify-content: center;\n  }\n  .recommendation-edit-actions .btn-sm {\n    flex: 1;\n    padding: 8px 12px;\n    min-width: auto;\n  }\n  .attachment-item {\n    padding: 16px 18px;\n    gap: 12px;\n  }\n  .attachment-name {\n    font-size: 16px;\n  }\n  .attachment-meta {\n    gap: 6px;\n  }\n  .meta-row {\n    gap: 6px;\n  }\n  .attachment-actions {\n    gap: 10px;\n    margin-top: 4px;\n  }\n  .download-btn,\n  .delete-btn {\n    padding: 10px 16px;\n    font-size: 13px;\n    min-height: 42px;\n  }\n  .download-btn svg,\n  .delete-btn svg {\n    width: 14px;\n    height: 14px;\n  }\n  .minutes-content {\n    padding: 20px 16px;\n  }\n  .minutes-notes h4,\n  .minutes-summary h4 {\n    font-size: 16px;\n    margin-bottom: 12px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 16px;\n    font-size: 14px;\n  }\n  .recommendation-item {\n    padding: 20px 16px;\n  }\n  .recommendation-text {\n    font-size: 14px;\n    line-height: 1.6;\n    margin-bottom: 16px;\n  }\n  .recommendation-actions {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    width: 100%;\n    margin-top: 16px;\n    align-items: stretch;\n  }\n  .recommendation-actions .btn-sm {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 14px;\n    min-height: 44px;\n    justify-content: center;\n    border-radius: 10px;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions .btn-sm:first-child {\n    margin-bottom: 8px;\n  }\n  .metadata-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .metadata-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n    padding: 16px;\n  }\n  .metadata-label {\n    font-size: 13px;\n  }\n  .metadata-value {\n    font-size: 14px;\n    word-break: break-word;\n  }\n  .modal-content {\n    margin: 16px;\n    max-width: calc(100% - 32px);\n    border-radius: 16px;\n  }\n  .modal-header {\n    padding: 20px 20px 0 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .modal-body {\n    padding: 0 20px 20px 20px;\n  }\n  .modal-footer {\n    padding: 0 20px 20px 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    min-width: auto;\n  }\n  .minutes-content {\n    padding: 16px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n}\n@media (max-width: 480px) {\n  .meeting-details-container {\n    padding: 12px;\n  }\n  .meeting-header {\n    padding: 20px 16px;\n  }\n  .meeting-title {\n    font-size: 20px;\n  }\n  .meeting-info,\n  .edit-form,\n  .section {\n    padding: 16px 12px;\n  }\n  .info-item {\n    padding: 12px;\n  }\n  .attendee-card {\n    padding: 12px;\n  }\n  .detail-item {\n    padding: 6px;\n  }\n  .btn-sm {\n    padding: 6px 10px;\n    font-size: 0.7rem;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .recommendation-text {\n    padding: 12px;\n    font-size: 0.9rem;\n  }\n  .attachment-item {\n    padding: 16px 12px;\n    gap: 10px;\n  }\n  .attachment-name {\n    font-size: 15px;\n  }\n  .attachment-meta {\n    gap: 4px;\n  }\n  .meta-row {\n    gap: 4px;\n  }\n  .attachment-type,\n  .attachment-source,\n  .attachment-description,\n  .attachment-date {\n    font-size: 11px;\n    padding: 3px 6px;\n  }\n  .attachment-actions {\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 8px;\n  }\n  .download-btn,\n  .delete-btn {\n    width: 100%;\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    flex: none;\n  }\n  .download-btn svg,\n  .delete-btn svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .recommendation-text {\n    font-size: 13px;\n    line-height: 1.5;\n    margin-bottom: 12px;\n  }\n  .recommendation-actions {\n    gap: 6px;\n    margin-top: 12px;\n  }\n  .recommendation-actions .btn-sm {\n    padding: 12px 16px;\n    font-size: 13px;\n    min-height: 48px;\n    width: 100%;\n    justify-content: center;\n  }\n  .recommendation-actions .btn-sm svg {\n    width: 16px;\n    height: 16px;\n  }\n  .recommendation-actions .btn-sm:first-child {\n    order: 1;\n  }\n  .recommendation-actions .btn-sm:last-child {\n    order: 2;\n  }\n  .minutes-content {\n    padding: 16px 12px;\n  }\n  .notes-text,\n  .summary-text {\n    padding: 12px;\n    font-size: 13px;\n  }\n  .recommendation-item {\n    padding: 16px 12px;\n  }\n  .metadata-item {\n    padding: 12px;\n  }\n  .metadata-label {\n    font-size: 12px;\n  }\n  .metadata-value {\n    font-size: 13px;\n  }\n  .empty-state,\n  .no-attachments,\n  .no-minutes {\n    padding: 1.5rem 0.75rem;\n  }\n  .empty-state::before,\n  .no-attachments::before,\n  .no-minutes::before {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n  }\n  .empty-state p,\n  .no-attachments-text,\n  .no-minutes-text {\n    font-size: 0.9rem;\n  }\n  .attachment-item {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .attachment-name {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .recommendation-item {\n    border-radius: 12px;\n    margin-bottom: 12px;\n  }\n  .recommendation-text {\n    word-break: break-word;\n    -webkit-hyphens: auto;\n    hyphens: auto;\n  }\n  .modal-content {\n    margin: 12px;\n    max-width: calc(100% - 24px);\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n}\n.section {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #fefefe 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n  box-shadow:\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06),\n    0 0 0 1px rgba(255, 255, 255, 0.8);\n  border: 1px solid rgba(226, 232, 240, 0.6);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  animation-fill-mode: both;\n}\n.section:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.section:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.section:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.section:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.section:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.section:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.section:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.section:hover {\n  box-shadow:\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05),\n    0 0 0 1px rgba(255, 255, 255, 0.9);\n}\n.section::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2) !important;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.section:hover::before {\n  opacity: 1;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n.section-title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.btn-secondary {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.btn-secondary:hover {\n  background: #B68A35;\n}\n.btn-icon {\n  width: 16px;\n  height: 16px;\n}\n.recommendation-form-section {\n  margin-bottom: 1.5rem;\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  border: 1px solid #e2e8f0;\n}\n.form-section {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 1.5rem;\n}\n.recommendations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: fadeInUp 0.6s ease-out;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.recommendation-item {\n  animation: slideInFromLeft 0.5s ease-out;\n  animation-fill-mode: both;\n}\n.recommendation-item:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.recommendation-item:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.recommendation-item:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.recommendation-item:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.recommendation-item:nth-child(5) {\n  animation-delay: 0.5s;\n}\n@keyframes slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.recommendation-item {\n  background: #F9F7ED;\n  border-radius: 16px;\n  padding: 2rem;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  margin-bottom: 1.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-item::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #B68A35;\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.recommendation-item:hover {\n  background: #f2ecce52;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.recommendation-item:hover::before {\n  transform: scaleX(1);\n}\n.recommendation-content {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: relative;\n  z-index: 1;\n}\n.recommendation-assignee {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #F2ECCE;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.assignee-label {\n  font-weight: 500;\n  color: #92722A;\n  margin-right: 8px;\n}\n.assignee-name {\n  color: #92722A;\n  font-weight: 600;\n}\n.recommendation-due-date {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #E8F4FD;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.due-date-label {\n  font-weight: 500;\n  color: #1976D2;\n  margin-right: 8px;\n}\n.due-date-value {\n  color: #1976D2;\n  font-weight: 600;\n}\n.recommendation-created-at {\n  margin-top: 8px;\n  padding: 6px 12px;\n  background: #F3F4F6;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.created-at-label {\n  font-weight: 500;\n  color: #6B7280;\n  margin-right: 8px;\n}\n.created-at-value {\n  color: #6B7280;\n  font-weight: 600;\n}\n.recommendation-edit-assignee {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.recommendation-edit-assignee .form-label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.recommendation-edit-assignee .form-select {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.recommendation-edit-assignee .form-select:focus {\n  outline: none;\n  border-color: #D4AF5F;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-due-date {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.recommendation-edit-due-date .form-label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 500;\n  color: #374151;\n  font-size: 0.9rem;\n}\n.recommendation-edit-due-date .form-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  background-color: white;\n  transition: border-color 0.2s ease;\n}\n.recommendation-edit-due-date .form-input:focus {\n  outline: none;\n  border-color: #D4AF5F;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.recommendation-display {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.recommendation-text {\n  color: #7C5E24;\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  margin-bottom: 1rem;\n  padding: 1.5rem;\n  background: #F2ECCE;\n  border-radius: 12px;\n  font-weight: 400;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-text:hover {\n  background: #F2ECCE;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.recommendation-edit-textarea {\n  width: 100%;\n  padding: 1rem;\n  border: 2px solid #7C5E24;\n  border-radius: 12px;\n  font-size: 1rem;\n  line-height: 1.6;\n  resize: vertical;\n  min-height: 100px;\n  font-family: inherit;\n  background: #ffffff;\n  color: #1e293b;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);\n}\n.recommendation-edit-textarea:focus {\n  outline: none;\n  border-color: #7C5E24;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(59, 130, 246, 0.2);\n}\n.recommendation-edit-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.recommendation-edit-actions .btn-sm {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 100px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-edit-actions .btn-sm::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-edit-actions .btn-sm:hover::before {\n  left: 100%;\n}\n.recommendation-edit-actions .btn-success {\n  background: #B68A35;\n  color: white;\n  box-shadow: 0 4px 14px rgba(7C5E24, 0.3);\n}\n.recommendation-edit-actions .btn-success:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(7C5E24, 0.4);\n}\n.recommendation-edit-actions .btn-secondary {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 14px rgba(212, 170, 58, 0.3);\n}\n.recommendation-edit-actions .btn-secondary:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(212, 170, 58, 0.4);\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  max-width: 350px;\n  width: 100%;\n  max-height: 90vh;\n  overflow: hidden;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  background: #D4AF5F;\n}\n.modal-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.modal-close {\n  background: none;\n  border: none;\n  color: #9ca3af;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n}\n.modal-close:hover {\n  background-color: #f3f4f6;\n}\n.modal-body {\n  padding: 20px;\n  text-align: center;\n}\n.warning-icon {\n  color: #f59e0b;\n  margin-bottom: 16px;\n  font-size: 32px;\n}\n.modal-message {\n  font-size: 14px;\n  margin-bottom: 16px;\n  line-height: 1.4;\n}\n.recommendation-preview {\n  background-color: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 12px;\n  margin-top: 12px;\n  text-align: left;\n}\n.preview-label {\n  font-size: 12px;\n  margin-bottom: 6px;\n}\n.preview-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n.modal-footer {\n  display: flex;\n  gap: 8px;\n  padding: 12px 20px 20px 20px;\n}\n.modal-footer .btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  min-width: 80px;\n}\n.modal-footer .btn-secondary {\n  background: #B68A35;\n  color: #FFFFFF;\n}\n.modal-footer .btn-secondary:hover {\n  background: #B68A35;\n}\n.modal-footer .btn-danger {\n  background: #ef4444;\n  color: white;\n}\n.modal-footer .btn-danger:hover {\n  background: #dc2626;\n}\n.minutes-display {\n  margin-top: 1rem;\n}\n.minutes-content {\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.minutes-notes,\n.minutes-summary,\n.minutes-attachments {\n  margin-bottom: 1.5rem;\n}\n.minutes-notes:last-child,\n.minutes-summary:last-child,\n.minutes-attachments:last-child {\n  margin-bottom: 0;\n}\n.minutes-label {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #5F646D;\n  margin: 0 0 0.75rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.minutes-label::before {\n  content: "\\1f4dd";\n  font-size: 0.875rem;\n}\n.minutes-summary .minutes-label::before {\n  content: "\\1f916";\n}\n.minutes-attachments .minutes-label::before {\n  content: "\\1f4ce";\n}\n.minutes-text {\n  color: #5F646D;\n  line-height: 1.6;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  font-weight: 400;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.no-minutes {\n  text-align: center;\n  padding: 2rem;\n  background: rgba(21, 134, 56, 0.03);\n  border-radius: 12px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n}\n.no-minutes-text {\n  color: #5F646D;\n  font-size: 1rem;\n  margin: 0;\n  font-style: italic;\n}\n.file-selected {\n  margin-top: 12px;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.08) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  border-radius: 12px;\n  border: 1px solid rgba(21, 134, 56, 0.3);\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.file-selected::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #B68A35,\n      #E6D7A2);\n}\n.file-selected:hover {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.08) 100%);\n  box-shadow: 0 4px 8px rgba(21, 134, 56, 0.15);\n}\n.file-name {\n  font-weight: 600;\n  color: #5F646D;\n  display: block;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.file-size {\n  font-size: 12px;\n  color: var(--text-secondary);\n  font-weight: 500;\n  background: #F9F7ED;\n  padding: 4px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.attachment-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  background: #F9F7ED;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  transition: all 0.3s ease;\n  border: 1px solid #7C5E24;\n}\n.attachment-item:hover {\n  background: rgba(21, 134, 56, 0.08);\n  box-shadow: 0 4px 12px rgba(21, 134, 56, 0.15);\n}\n.attachment-info {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n.attachment-icon {\n  font-size: 1.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(21, 134, 56, 0.1);\n  border-radius: 8px;\n}\n.attachment-details {\n  flex: 1;\n}\n.attachment-name {\n  font-weight: 600;\n  color: #5F646D;\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n.attachment-meta {\n  display: flex;\n  gap: 1rem;\n  font-size: 0.875rem;\n  color: #B68A35;\n}\n.attachment-type {\n  background: rgba(21, 134, 56, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.attachment-source {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1) 0%,\n      rgba(21, 134, 56, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  font-weight: 500;\n  color: #5F646D;\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  font-size: 12px;\n}\n.attachment-description {\n  font-style: italic;\n  color: var(--text-secondary);\n  font-size: 12px;\n  background: rgba(107, 114, 128, 0.1);\n  padding: 4px 8px;\n  border-radius: 6px;\n  border: 1px solid rgba(107, 114, 128, 0.2);\n}\n.attachment-date {\n  color: #5F646D;\n  font-size: 12px;\n  font-weight: 500;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.1) 0%,\n      rgba(9, 54, 95, 0.05) 100%);\n  padding: 4px 10px;\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.attachment-actions {\n  display: flex;\n  gap: 12px;\n  width: 100%;\n  margin-top: 8px;\n}\n.download-btn,\n.delete-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.download-btn {\n  background: rgba(21, 134, 56, 0.1);\n  color: #B68A35;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.download-btn:hover {\n  background: rgba(21, 134, 56, 0.2);\n}\n.delete-btn {\n  background: rgba(220, 38, 38, 0.1);\n  color: #dc2626;\n  border: 1px solid rgba(220, 38, 38, 0.2);\n}\n.delete-btn:hover {\n  background: rgba(220, 38, 38, 0.2);\n}\n.no-attachments {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-attachments::before {\n  content: "\\1f4ce";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-attachments-text {\n  color: #5F646D;\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.no-minutes {\n  text-align: center;\n  padding: 3rem 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(21, 134, 56, 0.03) 0%,\n      rgba(9, 54, 95, 0.02) 100%);\n  border-radius: 16px;\n  border: 2px dashed rgba(21, 134, 56, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n.no-minutes::before {\n  content: "\\1f4dd";\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.no-minutes-text {\n  color: #5F646D;\n  font-size: 1.1rem;\n  margin: 0;\n  font-weight: 500;\n  font-style: italic;\n}\n.attachment-preview {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: rgba(21, 134, 56, 0.05);\n  border-radius: 8px;\n  border: 1px solid rgba(21, 134, 56, 0.2);\n}\n.preview-label {\n  font-weight: 600;\n  color: #5F646D;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.preview-text {\n  color: #B68A35;\n  font-size: 0.875rem;\n  word-break: break-word;\n}\n.recommendation-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.5);\n  flex-wrap: wrap;\n}\n.recommendation-actions .btn-sm {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.875rem;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  min-width: 110px;\n  justify-content: center;\n  font-weight: 600;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n  overflow: hidden;\n}\n.recommendation-actions .btn-sm::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s ease;\n}\n.recommendation-actions .btn-sm:hover::before {\n  left: 100%;\n}\n.recommendation-actions .btn-sm:focus {\n  outline: 2px solid rgba(59, 130, 246, 0.5);\n  outline-offset: 2px;\n}\n.recommendation-actions .btn-secondary {\n  background: #B68A35;\n  color: #FFFFFF;\n  box-shadow: 0 4px 14px rgba(212, 170, 58, 0.3);\n}\n.recommendation-actions .btn-secondary:hover {\n  background: #B68A35;\n  box-shadow: 0 8px 25px rgba(212, 170, 58, 0.4);\n}\n.recommendation-actions .btn-danger {\n  background: #dc2626;\n  color: white;\n  box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3);\n}\n.recommendation-actions .btn-danger:hover {\n  background: #b91c1c;\n  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);\n}\n.attendee-info {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 20px;\n}\n.attendee-info .info-label {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 4px;\n  font-size: 0.875rem;\n}\n.attendee-info .info-value {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.attendees-table-container {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-top: 20px;\n}\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.attendees-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.attendees-table thead {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n}\n.attendees-table th {\n  padding: 16px 12px;\n  text-align: right;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 2px solid #e5e7eb;\n  font-size: 0.875rem;\n  white-space: nowrap;\n}\n.attendees-table td {\n  padding: 16px 12px;\n  border-bottom: 1px solid #f3f4f6;\n  vertical-align: top;\n}\n.attendee-row:hover {\n  background-color: #f9fafb;\n}\n.attendee-row:last-child td {\n  border-bottom: none;\n}\n.attendee-name-cell {\n  min-width: 180px;\n}\n.attendee-name {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.attendee-org {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-bottom: 2px;\n}\n.attendee-job {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.status-cell {\n  text-align: center;\n  min-width: 100px;\n}\n.kind-cell {\n  text-align: center;\n  min-width: 80px;\n}\n.role-cell {\n  text-align: center;\n  min-width: 80px;\n}\n.email-cell {\n  min-width: 150px;\n}\n.email-text {\n  font-size: 0.8rem;\n  color: #374151;\n  word-break: break-all;\n}\n.department-cell {\n  min-width: 120px;\n}\n.department-text {\n  font-size: 0.8rem;\n  color: #374151;\n}\n.no-data {\n  color: #9ca3af;\n  font-style: italic;\n}\n.actions-cell {\n  text-align: center;\n  min-width: 120px;\n}\n.action-buttons {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  align-items: center;\n}\n.action-buttons .btn-sm {\n  padding: 6px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.action-buttons .btn-sm:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.action-buttons .btn-primary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.action-buttons .btn-primary:hover {\n  background-color: #B68A35;\n}\n.action-buttons .btn-secondary {\n  background-color: #B68A35;\n  color: #FFFFFF;\n}\n.action-buttons .btn-secondary:hover {\n  background-color: #B68A35;\n}\n.action-buttons .btn-danger {\n  background-color: #ef4444;\n  color: white;\n}\n.action-buttons .btn-danger:hover {\n  background-color: #dc2626;\n}\n.status-badge {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  text-align: center;\n  min-width: 60px;\n}\n.status-0 {\n  background-color: #dbeafe;\n  color: #1e40af;\n}\n.status-1 {\n  background-color: #dcfce7;\n  color: #166534;\n}\n.status-2 {\n  background-color: #fef2f2;\n  color: #dc2626;\n}\n.status-3 {\n  background-color: #f0fdf4;\n  color: #15803d;\n}\n.status-4 {\n  background-color: #fef3c7;\n  color: #d97706;\n}\n.kind-badge,\n.role-badge {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 500;\n}\n.kind-internal {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n.kind-external {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.role-speaker {\n  background-color: #fce7f3;\n  color: #be185d;\n}\n.role-attendee {\n  background-color: #e0f2fe;\n  color: #0369a1;\n}\n@media (max-width: 1024px) {\n  .attendees-table th,\n  .attendees-table td {\n    padding: 12px 8px;\n    font-size: 0.8rem;\n  }\n  .attendee-name-cell {\n    min-width: 150px;\n  }\n  .email-cell {\n    min-width: 120px;\n  }\n}\n@media (max-width: 768px) {\n  .attendees-table-container {\n    margin: 0 -16px;\n    border-radius: 0;\n  }\n  .attendees-table th,\n  .attendees-table td {\n    padding: 10px 6px;\n    font-size: 0.75rem;\n  }\n  .attendee-name-cell {\n    min-width: 120px;\n  }\n  .status-cell,\n  .kind-cell,\n  .role-cell {\n    min-width: 60px;\n  }\n  .email-cell,\n  .department-cell {\n    min-width: 100px;\n  }\n  .actions-cell {\n    min-width: 80px;\n  }\n  .action-buttons {\n    flex-direction: column;\n    gap: 2px;\n  }\n  .action-buttons .btn-sm {\n    padding: 4px;\n  }\n}\n@media (max-width: 640px) {\n  .attendees-table th:nth-child(5),\n  .attendees-table td:nth-child(5),\n  .attendees-table th:nth-child(6),\n  .attendees-table td:nth-child(6) {\n    display: none;\n  }\n}\n.attendee-preview {\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  margin-top: 16px;\n}\n.preview-label {\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 8px;\n  font-size: 0.875rem;\n}\n.preview-text {\n  color: #1e293b;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.preview-details {\n  margin-top: 8px;\n}\n.preview-detail {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=meeting-details.component-ZPYVIO62.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: MeetingsService }, { type: UsersService }, { type: TranslationService }, { type: FormBuilder }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MeetingDetailsComponent, { className: "MeetingDetailsComponent", filePath: "src/app/components/meetings/meeting-details/meeting-details.component.ts", lineNumber: 33 });
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
//# sourceMappingURL=chunk-HSWGOMVM.js.map
