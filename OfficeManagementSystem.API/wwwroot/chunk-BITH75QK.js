import {
  RouterModule
} from "./chunk-AKEMWEBI.js";
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
  environment,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-KHAMYMVY.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  SlicePipe,
  Subject,
  TranslationService,
  ViewChild,
  setClassMetadata,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-UOGSXFNT.js";
import {
  __async
} from "./chunk-EVSPGG2W.js";

// src/app/models/letter.model.ts
var LetterDirection;
(function(LetterDirection2) {
  LetterDirection2[LetterDirection2["In"] = 0] = "In";
  LetterDirection2[LetterDirection2["Out"] = 1] = "Out";
})(LetterDirection || (LetterDirection = {}));
var LetterConfidentiality;
(function(LetterConfidentiality2) {
  LetterConfidentiality2[LetterConfidentiality2["Public"] = 0] = "Public";
  LetterConfidentiality2[LetterConfidentiality2["Restricted"] = 1] = "Restricted";
  LetterConfidentiality2[LetterConfidentiality2["Secret"] = 2] = "Secret";
})(LetterConfidentiality || (LetterConfidentiality = {}));
var LetterStatus;
(function(LetterStatus2) {
  LetterStatus2[LetterStatus2["Draft"] = 0] = "Draft";
  LetterStatus2[LetterStatus2["Approved"] = 1] = "Approved";
  LetterStatus2[LetterStatus2["Sent"] = 2] = "Sent";
  LetterStatus2[LetterStatus2["Archived"] = 3] = "Archived";
})(LetterStatus || (LetterStatus = {}));

// src/app/services/letters.service.ts
var LettersService = class _LettersService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Letters`;
  constructor(http) {
    this.http = http;
  }
  getAllLetters(params = {}) {
    let url = this.apiUrl;
    const queryParams = new URLSearchParams();
    if (params.search)
      queryParams.append("search", params.search);
    if (params.PageSize)
      queryParams.append("PageSize", params.PageSize.toString());
    if (params.PageNumber)
      queryParams.append("PageNumber", params.PageNumber.toString());
    if (params.Confidentiality !== void 0)
      queryParams.append("Confidentiality", params.Confidentiality.toString());
    if (params.Direction !== void 0)
      queryParams.append("Direction", params.Direction.toString());
    if (params.From)
      queryParams.append("From", params.From);
    if (params.To)
      queryParams.append("To", params.To);
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    return this.http.get(url);
  }
  getLetter(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createLetter(letter) {
    return this.http.post(this.apiUrl, letter);
  }
  updateLetter(id, letter) {
    return this.http.put(`${this.apiUrl}/${id}`, letter);
  }
  deleteLetter(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Attachment methods
  addAttachment(letterId, attachment) {
    const formData = new FormData();
    formData.append("File", attachment.file);
    if (attachment.description) {
      formData.append("Description", attachment.description);
    }
    if (attachment.documentSource !== void 0) {
      formData.append("DocumentSource", attachment.documentSource.toString());
    }
    return this.http.post(`${this.apiUrl}/${letterId}/attachments`, formData);
  }
  deleteAttachment(letterId, attachmentId) {
    return this.http.delete(`${this.apiUrl}/${letterId}/attachments/${attachmentId}`);
  }
  updateAttachment(letterId, attachmentId, attachment) {
    return this.http.put(`${this.apiUrl}/${letterId}/attachments/${attachmentId}`, attachment);
  }
  getLetterAttachments(letterId) {
    return this.http.get(`${this.apiUrl}/${letterId}/attachments`);
  }
  static \u0275fac = function LettersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LettersService, factory: _LettersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts
function LettersConfirmationModalComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function LettersConfirmationModalComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data == null ? null : ctx_r1.data.cancelText, " ");
  }
}
function LettersConfirmationModalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.isVisible);
  }
}
var LettersConfirmationModalComponent = class _LettersConfirmationModalComponent {
  data = null;
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  isVisible = false;
  confirmSubject = new Subject();
  cancelSubject = new Subject();
  resolvePromise = null;
  show(data) {
    this.data = data;
    this.isVisible = true;
    document.body.classList.add("modal-open");
    return new Promise((resolve) => {
      this.resolvePromise = resolve;
    });
  }
  hide() {
    this.isVisible = false;
    document.body.classList.remove("modal-open");
    this.data = null;
  }
  onConfirm() {
    this.confirm.emit();
    this.confirmSubject.next();
    if (this.resolvePromise) {
      this.resolvePromise(true);
      this.resolvePromise = null;
    }
    this.hide();
  }
  onCancel() {
    this.cancel.emit();
    this.cancelSubject.next();
    if (this.resolvePromise) {
      this.resolvePromise(false);
      this.resolvePromise = null;
    }
    this.hide();
  }
  // Get the confirm subject for subscription
  get confirm$() {
    return this.confirmSubject.asObservable();
  }
  // Get the cancel subject for subscription
  get cancel$() {
    return this.cancelSubject.asObservable();
  }
  ngOnDestroy() {
    this.confirmSubject.complete();
    this.cancelSubject.complete();
  }
  static \u0275fac = function LettersConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LettersConfirmationModalComponent, selectors: [["app-letters-confirmation-modal"]], inputs: { data: "data" }, outputs: { confirm: "confirm", cancel: "cancel" }, standalone: false, decls: 14, vars: 20, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 3, "click"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-backdrop", "fade"]], template: function LettersConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function LettersConfirmationModalComponent_Template_button_click_6_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275element(8, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275template(10, LettersConfirmationModalComponent_button_10_Template, 2, 1, "button", 9);
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function LettersConfirmationModalComponent_Template_button_click_11_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(13, LettersConfirmationModalComponent_div_13_Template, 1, 2, "div", 11);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isVisible ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isVisible);
      \u0275\u0275attribute("aria-hidden", !ctx.isVisible);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("bg-danger", (ctx.data == null ? null : ctx.data.type) === "delete")("bg-warning", (ctx.data == null ? null : ctx.data.type) === "warning")("bg-info", (ctx.data == null ? null : ctx.data.type) === "info")("bg-success", (ctx.data == null ? null : ctx.data.type) === "success");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data == null ? null : ctx.data.title);
      \u0275\u0275advance(3);
      \u0275\u0275property("innerHTML", ctx.data == null ? null : ctx.data.message, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.data == null ? null : ctx.data.cancelText);
      \u0275\u0275advance();
      \u0275\u0275classMap("btn " + ((ctx.data == null ? null : ctx.data.type) === "delete" ? "btn-danger" : "btn-primary"));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data == null ? null : ctx.data.confirmText, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgIf], styles: ["\n\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=letters-confirmation-modal.component-7Z7TEKYG.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-letters-confirmation-modal", standalone: false, template: `
    <div class="modal fade" [class.show]="isVisible" [style.display]="isVisible ? 'block' : 'none'" 
         tabindex="-1" role="dialog" [attr.aria-hidden]="!isVisible">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" [class.bg-danger]="data?.type === 'delete'" 
               [class.bg-warning]="data?.type === 'warning'" 
               [class.bg-info]="data?.type === 'info'"
               [class.bg-success]="data?.type === 'success'">
            <h5 class="modal-title text-white">{{ data?.title }}</h5>
            <button type="button" class="btn-close btn-close-white" (click)="onCancel()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div [innerHTML]="data?.message"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" (click)="onCancel()" *ngIf="data?.cancelText">
              {{ data?.cancelText }}
            </button>
            <button type="button" 
                    [class]="'btn ' + (data?.type === 'delete' ? 'btn-danger' : 'btn-primary')" 
                    (click)="onConfirm()">
              {{ data?.confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" [class.show]="isVisible" *ngIf="isVisible"></div>
  `, styles: ["/* angular:styles/component:css;2a9855366ab905f792e9e05977c24df3ba6913752a3f8464fbefe86e20dfe8f1;D:/web/EXSUS/\u062B\u0624\u062E\u0629/Project/echo-office/src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts */\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=letters-confirmation-modal.component-7Z7TEKYG.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LettersConfirmationModalComponent, { className: "LettersConfirmationModalComponent", filePath: "src/app/components/letters/letters-confirmation-modal/letters-confirmation-modal.component.ts", lineNumber: 54 });
})();

// src/app/components/letters/add-letter/add-letter.ts
var _c0 = ["confirmationModal"];
function AddLetter_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", direction_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDirectionLabel(direction_r2.key), " ");
  }
}
function AddLetter_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("direction"), " ");
  }
}
function AddLetter_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("direction"), " ");
  }
}
function AddLetter_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const confidentiality_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", confidentiality_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getConfidentialityLabel(confidentiality_r4.key), " ");
  }
}
function AddLetter_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("confidentiality"), " ");
  }
}
function AddLetter_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("confidentiality"), " ");
  }
}
function AddLetter_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("subject"), " ");
  }
}
function AddLetter_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("subject"), " ");
  }
}
function AddLetter_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("body"), " ");
  }
}
function AddLetter_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("body"), " ");
  }
}
function AddLetter_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("to"), " ");
  }
}
function AddLetter_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("to"), " ");
  }
}
function AddLetter_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("letterDate"), " ");
  }
}
function AddLetter_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("letterDate"), " ");
  }
}
function AddLetter_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("cc"), " ");
  }
}
function AddLetter_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("cc"), " ");
  }
}
function AddLetter_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("bcc"), " ");
  }
}
function AddLetter_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("bcc"), " ");
  }
}
function AddLetter_option_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", status_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(status_r5.key), " ");
  }
}
function AddLetter_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("status"), " ");
  }
}
function AddLetter_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("status"), " ");
  }
}
function AddLetter_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("referenceNumbers"), " ");
  }
}
function AddLetter_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("referenceNumbers"), " ");
  }
}
function AddLetter_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.isOpen);
  }
}
var AddLetter = class _AddLetter {
  lettersService;
  fb;
  translationService;
  confirmationModal;
  letterAdded = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  addForm;
  constructor(lettersService, fb, translationService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
  }
  ngAfterViewInit() {
  }
  open() {
    this.isOpen = true;
    this.addForm.reset();
    this.addForm.patchValue({
      direction: LetterDirection.In,
      confidentiality: LetterConfidentiality.Public,
      status: LetterStatus.Draft,
      letterDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
  }
  close() {
    this.isOpen = false;
    this.addForm.reset();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  directions = [
    { key: LetterDirection.In, value: "Incoming" },
    { key: LetterDirection.Out, value: "Outgoing" }
  ];
  confidentialities = [
    { key: LetterConfidentiality.Public, value: "Public" },
    { key: LetterConfidentiality.Restricted, value: "Restricted" },
    { key: LetterConfidentiality.Secret, value: "Secret" }
  ];
  statuses = [
    { key: LetterStatus.Draft, value: "Draft" },
    { key: LetterStatus.Approved, value: "Approved" },
    { key: LetterStatus.Sent, value: "Sent" },
    { key: LetterStatus.Archived, value: "Archived" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.addForm = this.fb.group({
      direction: ["", Validators.required],
      subject: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      body: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      confidentiality: ["", Validators.required],
      to: ["", [Validators.required, Validators.minLength(3)]],
      cc: [""],
      bcc: [""],
      letterDate: ["", Validators.required],
      status: ["", Validators.required],
      referenceNumbers: [""]
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
      if (requiredLength === 3) {
        return this.translate("letters.min_length_3");
      } else if (requiredLength === 10) {
        return this.translate("letters.min_length_10");
      }
      return `Minimum length is ${requiredLength} characters`;
    }
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      if (requiredLength === 200) {
        return this.translate("letters.max_length_200");
      } else if (requiredLength === 500) {
        return this.translate("letters.max_length_500");
      }
      return `Maximum length is ${requiredLength} characters`;
    }
    return "Invalid field";
  }
  onSubmit() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    const formValue = this.addForm.value;
    const letterData = {
      direction: parseInt(formValue.direction),
      subject: formValue.subject,
      body: formValue.body,
      confidentiality: parseInt(formValue.confidentiality),
      to: formValue.to,
      cc: formValue.cc || "",
      bcc: formValue.bcc || "",
      letterDate: new Date(formValue.letterDate).toISOString(),
      status: parseInt(formValue.status),
      referenceNumbers: formValue.referenceNumbers || ""
    };
    console.log("Submitting letter data:", letterData);
    this.lettersService.createLetter(letterData).subscribe({
      next: (res) => {
        this.showSuccessMessage(this.translate("letters.add_letter_success"));
        this.close();
        this.addForm.reset();
        this.letterAdded.emit();
      },
      error: (error) => {
        console.error("Error adding letter:", error);
        this.handleApiErrors(error);
      }
    });
  }
  handleApiErrors(error) {
    console.log("Full error response:", error);
    if (error.error?.errors) {
      const errors = error.error.errors;
      console.log("API validation errors:", errors);
      Object.keys(errors).forEach((fieldName) => {
        const control = this.addForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        } else {
          console.warn(`Form control not found for field: ${fieldName}`);
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
      "Direction": "direction",
      "Subject": "subject",
      "Body": "body",
      "Confidentiality": "confidentiality",
      "To": "to",
      "Cc": "cc",
      "Bcc": "bcc",
      "LetterDate": "letterDate",
      "Status": "status",
      "ReferenceNumbers": "referenceNumbers"
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
  getDirectionLabel(direction) {
    return this.translate("letters.directions." + direction);
  }
  getConfidentialityLabel(confidentiality) {
    return this.translate("letters.confidentialities." + confidentiality);
  }
  getStatusLabel(status) {
    return this.translate("letters.statuses." + status);
  }
  static \u0275fac = function AddLetter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddLetter)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddLetter, selectors: [["app-add-letter"]], viewQuery: function AddLetter_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { letterAdded: "letterAdded" }, standalone: false, decls: 100, vars: 78, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["formControlName", "direction", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "confidentiality", 1, "form-select"], [1, "col-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "placeholder"], ["formControlName", "body", "rows", "4", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "to", 1, "form-control", 3, "placeholder"], ["type", "date", "formControlName", "letterDate", 1, "form-control"], ["type", "text", "formControlName", "cc", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "bcc", 1, "form-control", 3, "placeholder"], ["formControlName", "status", 1, "form-select"], ["type", "text", "formControlName", "referenceNumbers", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [1, "modal-backdrop", "fade"]], template: function AddLetter_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function AddLetter_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 6);
      \u0275\u0275listener("ngSubmit", function AddLetter_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "label", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 12)(15, "option", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, AddLetter_option_17_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, AddLetter_div_18_Template, 2, 1, "div", 15)(19, AddLetter_div_19_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "select", 16)(26, "option", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, AddLetter_option_28_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, AddLetter_div_29_Template, 2, 1, "div", 15)(30, AddLetter_div_30_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 17)(32, "label", 10);
      \u0275\u0275text(33);
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 18);
      \u0275\u0275template(37, AddLetter_div_37_Template, 2, 1, "div", 15)(38, AddLetter_div_38_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 17)(40, "label", 10);
      \u0275\u0275text(41);
      \u0275\u0275elementStart(42, "span", 11);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "textarea", 19);
      \u0275\u0275template(45, AddLetter_div_45_Template, 2, 1, "div", 15)(46, AddLetter_div_46_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 9)(48, "label", 10);
      \u0275\u0275text(49);
      \u0275\u0275elementStart(50, "span", 11);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 20);
      \u0275\u0275template(53, AddLetter_div_53_Template, 2, 1, "div", 15)(54, AddLetter_div_54_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 9)(56, "label", 10);
      \u0275\u0275text(57);
      \u0275\u0275elementStart(58, "span", 11);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "input", 21);
      \u0275\u0275template(61, AddLetter_div_61_Template, 2, 1, "div", 15)(62, AddLetter_div_62_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 9)(64, "label", 10);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 22);
      \u0275\u0275template(67, AddLetter_div_67_Template, 2, 1, "div", 15)(68, AddLetter_div_68_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 9)(70, "label", 10);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 23);
      \u0275\u0275template(73, AddLetter_div_73_Template, 2, 1, "div", 15)(74, AddLetter_div_74_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 9)(76, "label", 10);
      \u0275\u0275text(77);
      \u0275\u0275elementStart(78, "span", 11);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "select", 24)(81, "option", 13);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, AddLetter_option_83_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, AddLetter_div_84_Template, 2, 1, "div", 15)(85, AddLetter_div_85_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 9)(87, "label", 10);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "input", 25);
      \u0275\u0275template(90, AddLetter_div_90_Template, 2, 1, "div", 15)(91, AddLetter_div_91_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 26)(93, "button", 27);
      \u0275\u0275listener("click", function AddLetter_Template_button_click_93_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(94);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "button", 28);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(97, AddLetter_div_97_Template, 1, 2, "div", 29);
      \u0275\u0275element(98, "app-letters-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.add_letter"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.direction"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("direction") || ctx.hasServerError("direction"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.direction_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.directions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("direction"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("direction"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.confidentiality"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("confidentiality") || ctx.hasServerError("confidentiality"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.confidentiality_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.confidentialities);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("confidentiality"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("confidentiality"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.subject"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("subject") || ctx.hasServerError("subject"));
      \u0275\u0275property("placeholder", ctx.translate("letters.subject_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("subject"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("subject"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.body"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("body") || ctx.hasServerError("body"));
      \u0275\u0275property("placeholder", ctx.translate("letters.body_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("body"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("body"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.to"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("to") || ctx.hasServerError("to"));
      \u0275\u0275property("placeholder", ctx.translate("letters.to_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("to"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("to"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.letter_date"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("letterDate") || ctx.hasServerError("letterDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("letterDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("letterDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.cc"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("cc") || ctx.hasServerError("cc"));
      \u0275\u0275property("placeholder", ctx.translate("letters.cc_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("cc"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("cc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.bcc"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("bcc") || ctx.hasServerError("bcc"));
      \u0275\u0275property("placeholder", ctx.translate("letters.bcc_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("bcc"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("bcc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.status"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("status") || ctx.hasServerError("status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.status_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("status"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.reference_numbers"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("referenceNumbers") || ctx.hasServerError("referenceNumbers"));
      \u0275\u0275property("placeholder", ctx.translate("letters.reference_numbers_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("referenceNumbers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("referenceNumbers"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.addForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.create"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: [`

.modal[_ngcontent-%COMP%] {
  z-index: 1055;
}
.modal.show[_ngcontent-%COMP%] {
  display: block !important;
}
.modal-backdrop.show[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.modal-dialog[_ngcontent-%COMP%] {
  max-width: 800px;
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 1.5rem;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.modal-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}
.modal-header[dir=rtl][_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.modal-header[dir=ltr][_ngcontent-%COMP%] {
  justify-content: flex-start;
}
.modal-title[class*=text-end][_ngcontent-%COMP%] {
  text-align: right !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  order: 2;
}
.modal-title[class*=text-start][_ngcontent-%COMP%] {
  text-align: left !important;
  margin-left: 0 !important;
  margin-right: auto !important;
  order: 1;
}
.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  margin-left: auto !important;
  margin-right: 0 !important;
  text-align: right !important;
}
.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #dee2e6;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #043DFF;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  outline: 0;
}
.form-control.is-invalid[_ngcontent-%COMP%], 
.form-select.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.form-control.is-invalid[_ngcontent-%COMP%]:focus, 
.form-select.is-invalid[_ngcontent-%COMP%]:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}
textarea.form-control[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 100px;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 0.375rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;
}
.btn-primary[_ngcontent-%COMP%] {
  background-color: #043DFF;
  border-color: #043DFF;
  color: #fff;
}
.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}
.btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary[_ngcontent-%COMP%] {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #545b62;
  border-color: #4e555b;
}
.text-danger[_ngcontent-%COMP%] {
  color: #dc3545 !important;
}
.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0.75rem;
}
.fas[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.btn-close[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
}
.btn-close[_ngcontent-%COMP%]:hover {
  opacity: 0.75;
}
.btn-close[_ngcontent-%COMP%]:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px) {
  .modal-dialog[_ngcontent-%COMP%] {
    margin: 0.5rem;
    max-width: calc(100% - 1rem);
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: 60vh;
  }
  .modal-header[_ngcontent-%COMP%], 
   .modal-footer[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
  }
  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {
  transform: none;
}
.form-control[_ngcontent-%COMP%]:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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
/*# sourceMappingURL=add-letter-UNEFSMAY.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddLetter, [{
    type: Component,
    args: [{ selector: "app-add-letter", standalone: false, template: `<!-- Add Letter Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-primary text-white" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
        <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
         \r
          {{ translate('letters.add_letter') }}\r
        </h5>\r
      </div>\r
      \r
      <form [formGroup]="addForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row g-3">\r
            <!-- Direction -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.direction') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="direction" \r
                      [class.is-invalid]="isFieldValid('direction') || hasServerError('direction')">\r
                <option value="">{{ translate('letters.direction_required') }}</option>\r
                <option *ngFor="let direction of directions" [value]="direction.key">\r
                  {{ getDirectionLabel(direction.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('direction')">\r
                {{ getErrorMessage('direction') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('direction')">\r
                {{ getServerErrorMessage('direction') }}\r
              </div>\r
            </div>\r
\r
            <!-- Confidentiality -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.confidentiality') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="confidentiality" \r
                      [class.is-invalid]="isFieldValid('confidentiality') || hasServerError('confidentiality')">\r
                <option value="">{{ translate('letters.confidentiality_required') }}</option>\r
                <option *ngFor="let confidentiality of confidentialities" [value]="confidentiality.key">\r
                  {{ getConfidentialityLabel(confidentiality.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('confidentiality')">\r
                {{ getErrorMessage('confidentiality') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('confidentiality')">\r
                {{ getServerErrorMessage('confidentiality') }}\r
              </div>\r
            </div>\r
\r
            <!-- Subject -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.subject') }} <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control" formControlName="subject" \r
                     [placeholder]="translate('letters.subject_placeholder')"\r
                     [class.is-invalid]="isFieldValid('subject') || hasServerError('subject')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('subject')">\r
                {{ getErrorMessage('subject') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('subject')">\r
                {{ getServerErrorMessage('subject') }}\r
              </div>\r
            </div>\r
\r
            <!-- Body -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.body') }} <span class="text-danger">*</span></label>\r
              <textarea class="form-control" formControlName="body" rows="4" \r
                        [placeholder]="translate('letters.body_placeholder')"\r
                        [class.is-invalid]="isFieldValid('body') || hasServerError('body')"></textarea>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('body')">\r
                {{ getErrorMessage('body') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('body')">\r
                {{ getServerErrorMessage('body') }}\r
              </div>\r
            </div>\r
\r
            <!-- To -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.to') }} <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control" formControlName="to" \r
                     [placeholder]="translate('letters.to_placeholder')"\r
                     [class.is-invalid]="isFieldValid('to') || hasServerError('to')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('to')">\r
                {{ getErrorMessage('to') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('to')">\r
                {{ getServerErrorMessage('to') }}\r
              </div>\r
            </div>\r
\r
            <!-- Letter Date -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.letter_date') }} <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control" formControlName="letterDate" \r
                     [class.is-invalid]="isFieldValid('letterDate') || hasServerError('letterDate')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('letterDate')">\r
                {{ getErrorMessage('letterDate') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('letterDate')">\r
                {{ getServerErrorMessage('letterDate') }}\r
              </div>\r
            </div>\r
\r
            <!-- CC -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.cc') }}</label>\r
              <input type="text" class="form-control" formControlName="cc" \r
                     [placeholder]="translate('letters.cc_placeholder')"\r
                     [class.is-invalid]="isFieldValid('cc') || hasServerError('cc')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('cc')">\r
                {{ getErrorMessage('cc') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('cc')">\r
                {{ getServerErrorMessage('cc') }}\r
              </div>\r
            </div>\r
\r
            <!-- BCC -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.bcc') }}</label>\r
              <input type="text" class="form-control" formControlName="bcc" \r
                     [placeholder]="translate('letters.bcc_placeholder')"\r
                     [class.is-invalid]="isFieldValid('bcc') || hasServerError('bcc')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('bcc')">\r
                {{ getErrorMessage('bcc') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('bcc')">\r
                {{ getServerErrorMessage('bcc') }}\r
              </div>\r
            </div>\r
\r
            <!-- Status -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.status') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="status" \r
                      [class.is-invalid]="isFieldValid('status') || hasServerError('status')">\r
                <option value="">{{ translate('letters.status_required') }}</option>\r
                <option *ngFor="let status of statuses" [value]="status.key">\r
                  {{ getStatusLabel(status.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('status')">\r
                {{ getErrorMessage('status') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('status')">\r
                {{ getServerErrorMessage('status') }}\r
              </div>\r
            </div>\r
\r
            <!-- Reference Numbers -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.reference_numbers') }}</label>\r
              <input type="text" class="form-control" formControlName="referenceNumbers" \r
                     [placeholder]="translate('letters.reference_numbers_placeholder')"\r
                     [class.is-invalid]="isFieldValid('referenceNumbers') || hasServerError('referenceNumbers')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('referenceNumbers')">\r
                {{ getErrorMessage('referenceNumbers') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('referenceNumbers')">\r
                {{ getServerErrorMessage('referenceNumbers') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-primary" [disabled]="addForm.invalid">\r
            {{ translate('letters.create') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade" [class.show]="isOpen" *ngIf="isOpen"></div>\r
\r
<!-- Confirmation Modal -->\r
<app-letters-confirmation-modal #confirmationModal></app-letters-confirmation-modal>\r
`, styles: [`/* src/app/components/letters/add-letter/add-letter.css */
.modal {
  z-index: 1055;
}
.modal.show {
  display: block !important;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-dialog {
  max-width: 800px;
}
.modal-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 1.5rem;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}
.modal-header[dir=rtl] {
  justify-content: flex-end;
}
.modal-header[dir=ltr] {
  justify-content: flex-start;
}
.modal-title[class*=text-end] {
  text-align: right !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  order: 2;
}
.modal-title[class*=text-start] {
  text-align: left !important;
  margin-left: 0 !important;
  margin-right: auto !important;
  order: 1;
}
.modal-header[dir=rtl] .modal-title {
  margin-left: auto !important;
  margin-right: 0 !important;
  text-align: right !important;
}
.modal-header[dir=ltr] .modal-title {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}
.modal-body {
  padding: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
}
.modal-footer {
  border-top: 1px solid #dee2e6;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
}
.form-label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:focus,
.form-select:focus {
  border-color: #043DFF;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  outline: 0;
}
.form-control.is-invalid,
.form-select.is-invalid {
  border-color: #dc3545;
}
.form-control.is-invalid:focus,
.form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}
textarea.form-control {
  resize: vertical;
  min-height: 100px;
}
.btn {
  border-radius: 0.375rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;
}
.btn-primary {
  background-color: #043DFF;
  border-color: #043DFF;
  color: #fff;
}
.btn-primary:hover:not(:disabled) {
  background-color: #0056b3;
  border-color: #0056b3;
}
.btn-primary:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
.btn-secondary:hover {
  background-color: #545b62;
  border-color: #4e555b;
}
.text-danger {
  color: #dc3545 !important;
}
.row.g-3 > * {
  padding: 0.75rem;
}
.fas {
  font-size: 0.875rem;
}
.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
}
.btn-close:hover {
  opacity: 0.75;
}
.btn-close:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100% - 1rem);
  }
  .modal-body {
    padding: 1rem;
    max-height: 60vh;
  }
  .modal-header,
  .modal-footer {
    padding: 0.75rem 1rem;
  }
  .row.g-3 > * {
    padding: 0.5rem;
  }
}
[dir=rtl] .modal-header {
  text-align: right;
}
[dir=rtl] .me-2 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
[dir=rtl] .ms-2 {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal.show .modal-dialog {
  transform: none;
}
.form-control:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.btn:disabled {
  cursor: not-allowed;
}
.modal-body::-webkit-scrollbar {
  width: 6px;
}
.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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
/*# sourceMappingURL=add-letter-UNEFSMAY.css.map */
`] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], letterAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddLetter, { className: "AddLetter", filePath: "src/app/components/letters/add-letter/add-letter.ts", lineNumber: 14 });
})();

// src/app/components/letters/edit-letter/edit-letter.ts
var _c02 = ["confirmationModal"];
function EditLetter_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const direction_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", direction_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getDirectionLabel(direction_r2.key), " ");
  }
}
function EditLetter_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("direction"), " ");
  }
}
function EditLetter_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("direction"), " ");
  }
}
function EditLetter_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const confidentiality_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", confidentiality_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getConfidentialityLabel(confidentiality_r4.key), " ");
  }
}
function EditLetter_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("confidentiality"), " ");
  }
}
function EditLetter_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("confidentiality"), " ");
  }
}
function EditLetter_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("subject"), " ");
  }
}
function EditLetter_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("subject"), " ");
  }
}
function EditLetter_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("body"), " ");
  }
}
function EditLetter_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("body"), " ");
  }
}
function EditLetter_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("to"), " ");
  }
}
function EditLetter_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("to"), " ");
  }
}
function EditLetter_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("letterDate"), " ");
  }
}
function EditLetter_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("letterDate"), " ");
  }
}
function EditLetter_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("cc"), " ");
  }
}
function EditLetter_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("cc"), " ");
  }
}
function EditLetter_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("bcc"), " ");
  }
}
function EditLetter_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("bcc"), " ");
  }
}
function EditLetter_option_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", status_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getStatusLabel(status_r5.key), " ");
  }
}
function EditLetter_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("status"), " ");
  }
}
function EditLetter_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("status"), " ");
  }
}
function EditLetter_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getErrorMessage("referenceNumbers"), " ");
  }
}
function EditLetter_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getServerErrorMessage("referenceNumbers"), " ");
  }
}
function EditLetter_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r2.isOpen);
  }
}
var EditLetter = class _EditLetter {
  lettersService;
  fb;
  translationService;
  confirmationModal;
  letterUpdated = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  currentLetter = null;
  editForm;
  constructor(lettersService, fb, translationService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
  }
  ngAfterViewInit() {
  }
  open(letter) {
    this.currentLetter = letter;
    this.isOpen = true;
    this.initializeForm();
    this.populateForm(letter);
  }
  close() {
    this.isOpen = false;
    this.currentLetter = null;
    this.editForm.reset();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  directions = [
    { key: LetterDirection.In, value: "Incoming" },
    { key: LetterDirection.Out, value: "Outgoing" }
  ];
  confidentialities = [
    { key: LetterConfidentiality.Public, value: "Public" },
    { key: LetterConfidentiality.Restricted, value: "Restricted" },
    { key: LetterConfidentiality.Secret, value: "Secret" }
  ];
  statuses = [
    { key: LetterStatus.Draft, value: "Draft" },
    { key: LetterStatus.Approved, value: "Approved" },
    { key: LetterStatus.Sent, value: "Sent" },
    { key: LetterStatus.Archived, value: "Archived" }
  ];
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.editForm = this.fb.group({
      direction: ["", Validators.required],
      subject: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      body: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      confidentiality: ["", Validators.required],
      to: ["", [Validators.required, Validators.minLength(3)]],
      cc: [""],
      bcc: [""],
      letterDate: ["", Validators.required],
      status: ["", Validators.required],
      referenceNumbers: [""]
    });
  }
  populateForm(letter) {
    const letterDate = new Date(letter.letterDate);
    const formattedDate = letterDate.toISOString().split("T")[0];
    this.editForm.patchValue({
      direction: letter.direction,
      subject: letter.subject,
      body: letter.body,
      confidentiality: letter.confidentiality,
      to: letter.to,
      cc: letter.cc || "",
      bcc: letter.bcc || "",
      letterDate: formattedDate,
      status: letter.status || LetterStatus.Draft,
      referenceNumbers: letter.referenceNumbers || ""
    });
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
      if (requiredLength === 3) {
        return this.translate("letters.min_length_3");
      } else if (requiredLength === 10) {
        return this.translate("letters.min_length_10");
      }
      return `Minimum length is ${requiredLength} characters`;
    }
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      if (requiredLength === 200) {
        return this.translate("letters.max_length_200");
      } else if (requiredLength === 500) {
        return this.translate("letters.max_length_500");
      }
      return `Maximum length is ${requiredLength} characters`;
    }
    return "Invalid field";
  }
  onSubmit() {
    if (this.editForm.invalid || !this.currentLetter) {
      this.editForm.markAllAsTouched();
      return;
    }
    const formValue = this.editForm.value;
    const letterData = {
      id: this.currentLetter.id,
      direction: parseInt(formValue.direction),
      subject: formValue.subject,
      body: formValue.body,
      confidentiality: parseInt(formValue.confidentiality),
      to: formValue.to,
      cc: formValue.cc || "",
      bcc: formValue.bcc || "",
      letterDate: new Date(formValue.letterDate).toISOString(),
      status: parseInt(formValue.status),
      referenceNumbers: formValue.referenceNumbers || ""
    };
    console.log("Updating letter data:", letterData);
    this.lettersService.updateLetter(this.currentLetter.id, letterData).subscribe({
      next: (res) => {
        this.showSuccessMessage(this.translate("letters.edit_letter_success"));
        this.close();
        this.editForm.reset();
        this.letterUpdated.emit();
      },
      error: (error) => {
        console.error("Error updating letter:", error);
        this.handleApiErrors(error);
      }
    });
  }
  handleApiErrors(error) {
    console.log("Full error response:", error);
    if (error.error?.errors) {
      const errors = error.error.errors;
      console.log("API validation errors:", errors);
      Object.keys(errors).forEach((fieldName) => {
        const control = this.editForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        } else {
          console.warn(`Form control not found for field: ${fieldName}`);
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
      "Direction": "direction",
      "Subject": "subject",
      "Body": "body",
      "Confidentiality": "confidentiality",
      "To": "to",
      "Cc": "cc",
      "Bcc": "bcc",
      "LetterDate": "letterDate",
      "Status": "status",
      "ReferenceNumbers": "referenceNumbers"
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
  getDirectionLabel(direction) {
    return this.translate("letters.directions." + direction);
  }
  getConfidentialityLabel(confidentiality) {
    return this.translate("letters.confidentialities." + confidentiality);
  }
  getStatusLabel(status) {
    return this.translate("letters.statuses." + status);
  }
  static \u0275fac = function EditLetter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditLetter)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditLetter, selectors: [["app-edit-letter"]], viewQuery: function EditLetter_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { letterUpdated: "letterUpdated" }, standalone: false, decls: 102, vars: 78, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-warning", "text-dark", 3, "dir"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["formControlName", "direction", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "confidentiality", 1, "form-select"], [1, "col-12"], ["type", "text", "formControlName", "subject", 1, "form-control", 3, "placeholder"], ["formControlName", "body", "rows", "4", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "to", 1, "form-control", 3, "placeholder"], ["type", "date", "formControlName", "letterDate", 1, "form-control"], ["type", "text", "formControlName", "cc", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "bcc", 1, "form-control", 3, "placeholder"], ["formControlName", "status", 1, "form-select"], ["type", "text", "formControlName", "referenceNumbers", 1, "form-control", 3, "placeholder"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times", "me-2"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], [1, "fas", "fa-save", "me-2"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [3, "value"], [1, "invalid-feedback"], [1, "modal-backdrop", "fade"]], template: function EditLetter_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function EditLetter_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 6);
      \u0275\u0275listener("ngSubmit", function EditLetter_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "label", 10);
      \u0275\u0275text(11);
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "select", 12)(15, "option", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, EditLetter_option_17_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, EditLetter_div_18_Template, 2, 1, "div", 15)(19, EditLetter_div_19_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10);
      \u0275\u0275text(22);
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275text(24, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "select", 16)(26, "option", 13);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, EditLetter_option_28_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, EditLetter_div_29_Template, 2, 1, "div", 15)(30, EditLetter_div_30_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 17)(32, "label", 10);
      \u0275\u0275text(33);
      \u0275\u0275elementStart(34, "span", 11);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(36, "input", 18);
      \u0275\u0275template(37, EditLetter_div_37_Template, 2, 1, "div", 15)(38, EditLetter_div_38_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 17)(40, "label", 10);
      \u0275\u0275text(41);
      \u0275\u0275elementStart(42, "span", 11);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "textarea", 19);
      \u0275\u0275template(45, EditLetter_div_45_Template, 2, 1, "div", 15)(46, EditLetter_div_46_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 9)(48, "label", 10);
      \u0275\u0275text(49);
      \u0275\u0275elementStart(50, "span", 11);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 20);
      \u0275\u0275template(53, EditLetter_div_53_Template, 2, 1, "div", 15)(54, EditLetter_div_54_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 9)(56, "label", 10);
      \u0275\u0275text(57);
      \u0275\u0275elementStart(58, "span", 11);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "input", 21);
      \u0275\u0275template(61, EditLetter_div_61_Template, 2, 1, "div", 15)(62, EditLetter_div_62_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 9)(64, "label", 10);
      \u0275\u0275text(65);
      \u0275\u0275elementEnd();
      \u0275\u0275element(66, "input", 22);
      \u0275\u0275template(67, EditLetter_div_67_Template, 2, 1, "div", 15)(68, EditLetter_div_68_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 9)(70, "label", 10);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 23);
      \u0275\u0275template(73, EditLetter_div_73_Template, 2, 1, "div", 15)(74, EditLetter_div_74_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 9)(76, "label", 10);
      \u0275\u0275text(77);
      \u0275\u0275elementStart(78, "span", 11);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "select", 24)(81, "option", 13);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, EditLetter_option_83_Template, 2, 2, "option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, EditLetter_div_84_Template, 2, 1, "div", 15)(85, EditLetter_div_85_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 9)(87, "label", 10);
      \u0275\u0275text(88);
      \u0275\u0275elementEnd();
      \u0275\u0275element(89, "input", 25);
      \u0275\u0275template(90, EditLetter_div_90_Template, 2, 1, "div", 15)(91, EditLetter_div_91_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 26)(93, "button", 27);
      \u0275\u0275listener("click", function EditLetter_Template_button_click_93_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275element(94, "i", 28);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "button", 29);
      \u0275\u0275element(97, "i", 30);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(99, EditLetter_div_99_Template, 1, 2, "div", 31);
      \u0275\u0275element(100, "app-letters-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.edit_letter"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.direction"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("direction") || ctx.hasServerError("direction"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.direction_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.directions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("direction"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("direction"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.confidentiality"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("confidentiality") || ctx.hasServerError("confidentiality"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.confidentiality_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.confidentialities);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("confidentiality"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("confidentiality"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.subject"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("subject") || ctx.hasServerError("subject"));
      \u0275\u0275property("placeholder", ctx.translate("letters.subject_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("subject"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("subject"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.body"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("body") || ctx.hasServerError("body"));
      \u0275\u0275property("placeholder", ctx.translate("letters.body_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("body"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("body"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.to"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("to") || ctx.hasServerError("to"));
      \u0275\u0275property("placeholder", ctx.translate("letters.to_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("to"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("to"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.letter_date"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("letterDate") || ctx.hasServerError("letterDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("letterDate"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("letterDate"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.cc"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("cc") || ctx.hasServerError("cc"));
      \u0275\u0275property("placeholder", ctx.translate("letters.cc_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("cc"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("cc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.bcc"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("bcc") || ctx.hasServerError("bcc"));
      \u0275\u0275property("placeholder", ctx.translate("letters.bcc_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("bcc"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("bcc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.status"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("status") || ctx.hasServerError("status"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.status_required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.statuses);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("status"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("status"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.reference_numbers"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("referenceNumbers") || ctx.hasServerError("referenceNumbers"));
      \u0275\u0275property("placeholder", ctx.translate("letters.reference_numbers_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("referenceNumbers"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("referenceNumbers"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.editForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.update"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: [`

.modal[_ngcontent-%COMP%] {
  z-index: 1055;
}
.modal.show[_ngcontent-%COMP%] {
  display: block !important;
}
.modal-backdrop.show[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.modal-dialog[_ngcontent-%COMP%] {
  max-width: 800px;
}
.modal-header[_ngcontent-%COMP%] {
  border-bottom: 1px solid rgba(255, 193, 7, 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.modal-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}
.modal-header[dir=rtl][_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.modal-header[dir=ltr][_ngcontent-%COMP%] {
  justify-content: flex-start;
}
.modal-title[class*=text-end][_ngcontent-%COMP%] {
  text-align: right !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  order: 2;
}
.modal-title[class*=text-start][_ngcontent-%COMP%] {
  text-align: left !important;
  margin-left: 0 !important;
  margin-right: auto !important;
  order: 1;
}
.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  margin-left: auto !important;
  margin-right: 0 !important;
  text-align: right !important;
}
.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}
.modal-body[_ngcontent-%COMP%] {
  padding: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
}
.modal-footer[_ngcontent-%COMP%] {
  border-top: 1px solid #dee2e6;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
}
.form-label[_ngcontent-%COMP%] {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control[_ngcontent-%COMP%], 
.form-select[_ngcontent-%COMP%] {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control[_ngcontent-%COMP%]:focus, 
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #ffc107;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
  outline: 0;
}
.form-control.is-invalid[_ngcontent-%COMP%], 
.form-select.is-invalid[_ngcontent-%COMP%] {
  border-color: #dc3545;
}
.form-control.is-invalid[_ngcontent-%COMP%]:focus, 
.form-select.is-invalid[_ngcontent-%COMP%]:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}
textarea.form-control[_ngcontent-%COMP%] {
  resize: vertical;
  min-height: 100px;
}
.btn[_ngcontent-%COMP%] {
  border-radius: 0.375rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;
}
.btn-warning[_ngcontent-%COMP%] {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}
.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: #e0a800;
  border-color: #d39e00;
}
.btn-warning[_ngcontent-%COMP%]:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary[_ngcontent-%COMP%] {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
.btn-secondary[_ngcontent-%COMP%]:hover {
  background-color: #545b62;
  border-color: #4e555b;
}
.text-danger[_ngcontent-%COMP%] {
  color: #dc3545 !important;
}
.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  padding: 0.75rem;
}
.fas[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
.btn-close[_ngcontent-%COMP%] {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
}
.btn-close[_ngcontent-%COMP%]:hover {
  opacity: 0.75;
}
.btn-close[_ngcontent-%COMP%]:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px) {
  .modal-dialog[_ngcontent-%COMP%] {
    margin: 0.5rem;
    max-width: calc(100% - 1rem);
  }
  .modal-body[_ngcontent-%COMP%] {
    padding: 1rem;
    max-height: 60vh;
  }
  .modal-header[_ngcontent-%COMP%], 
   .modal-footer[_ngcontent-%COMP%] {
    padding: 0.75rem 1rem;
  }
  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    padding: 0.5rem;
  }
}
[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {
  text-align: right;
}
[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {
  transform: none;
}
.form-control[_ngcontent-%COMP%]:valid {
  border-color: #28a745;
}
.form-control[_ngcontent-%COMP%]:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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
/*# sourceMappingURL=edit-letter-LM63KE3F.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditLetter, [{
    type: Component,
    args: [{ selector: "app-edit-letter", standalone: false, template: `<!-- Edit Letter Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-warning text-dark" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
        <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
          {{ translate('letters.edit_letter') }}\r
        </h5>\r
      </div>\r
      \r
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row g-3">\r
            <!-- Direction -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.direction') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="direction" \r
                      [class.is-invalid]="isFieldValid('direction') || hasServerError('direction')">\r
                <option value="">{{ translate('letters.direction_required') }}</option>\r
                <option *ngFor="let direction of directions" [value]="direction.key">\r
                  {{ getDirectionLabel(direction.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('direction')">\r
                {{ getErrorMessage('direction') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('direction')">\r
                {{ getServerErrorMessage('direction') }}\r
              </div>\r
            </div>\r
\r
            <!-- Confidentiality -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.confidentiality') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="confidentiality" \r
                      [class.is-invalid]="isFieldValid('confidentiality') || hasServerError('confidentiality')">\r
                <option value="">{{ translate('letters.confidentiality_required') }}</option>\r
                <option *ngFor="let confidentiality of confidentialities" [value]="confidentiality.key">\r
                  {{ getConfidentialityLabel(confidentiality.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('confidentiality')">\r
                {{ getErrorMessage('confidentiality') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('confidentiality')">\r
                {{ getServerErrorMessage('confidentiality') }}\r
              </div>\r
            </div>\r
\r
            <!-- Subject -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.subject') }} <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control" formControlName="subject" \r
                     [placeholder]="translate('letters.subject_placeholder')"\r
                     [class.is-invalid]="isFieldValid('subject') || hasServerError('subject')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('subject')">\r
                {{ getErrorMessage('subject') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('subject')">\r
                {{ getServerErrorMessage('subject') }}\r
              </div>\r
            </div>\r
\r
            <!-- Body -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.body') }} <span class="text-danger">*</span></label>\r
              <textarea class="form-control" formControlName="body" rows="4" \r
                        [placeholder]="translate('letters.body_placeholder')"\r
                        [class.is-invalid]="isFieldValid('body') || hasServerError('body')"></textarea>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('body')">\r
                {{ getErrorMessage('body') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('body')">\r
                {{ getServerErrorMessage('body') }}\r
              </div>\r
            </div>\r
\r
            <!-- To -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.to') }} <span class="text-danger">*</span></label>\r
              <input type="text" class="form-control" formControlName="to" \r
                     [placeholder]="translate('letters.to_placeholder')"\r
                     [class.is-invalid]="isFieldValid('to') || hasServerError('to')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('to')">\r
                {{ getErrorMessage('to') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('to')">\r
                {{ getServerErrorMessage('to') }}\r
              </div>\r
            </div>\r
\r
            <!-- Letter Date -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.letter_date') }} <span class="text-danger">*</span></label>\r
              <input type="date" class="form-control" formControlName="letterDate" \r
                     [class.is-invalid]="isFieldValid('letterDate') || hasServerError('letterDate')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('letterDate')">\r
                {{ getErrorMessage('letterDate') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('letterDate')">\r
                {{ getServerErrorMessage('letterDate') }}\r
              </div>\r
            </div>\r
\r
            <!-- CC -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.cc') }}</label>\r
              <input type="text" class="form-control" formControlName="cc" \r
                     [placeholder]="translate('letters.cc_placeholder')"\r
                     [class.is-invalid]="isFieldValid('cc') || hasServerError('cc')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('cc')">\r
                {{ getErrorMessage('cc') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('cc')">\r
                {{ getServerErrorMessage('cc') }}\r
              </div>\r
            </div>\r
\r
            <!-- BCC -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.bcc') }}</label>\r
              <input type="text" class="form-control" formControlName="bcc" \r
                     [placeholder]="translate('letters.bcc_placeholder')"\r
                     [class.is-invalid]="isFieldValid('bcc') || hasServerError('bcc')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('bcc')">\r
                {{ getErrorMessage('bcc') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('bcc')">\r
                {{ getServerErrorMessage('bcc') }}\r
              </div>\r
            </div>\r
\r
            <!-- Status -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.status') }} <span class="text-danger">*</span></label>\r
              <select class="form-select" formControlName="status" \r
                      [class.is-invalid]="isFieldValid('status') || hasServerError('status')">\r
                <option value="">{{ translate('letters.status_required') }}</option>\r
                <option *ngFor="let status of statuses" [value]="status.key">\r
                  {{ getStatusLabel(status.key) }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('status')">\r
                {{ getErrorMessage('status') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('status')">\r
                {{ getServerErrorMessage('status') }}\r
              </div>\r
            </div>\r
\r
            <!-- Reference Numbers -->\r
            <div class="col-md-6">\r
              <label class="form-label">{{ translate('letters.reference_numbers') }}</label>\r
              <input type="text" class="form-control" formControlName="referenceNumbers" \r
                     [placeholder]="translate('letters.reference_numbers_placeholder')"\r
                     [class.is-invalid]="isFieldValid('referenceNumbers') || hasServerError('referenceNumbers')">\r
              <div class="invalid-feedback" *ngIf="isFieldValid('referenceNumbers')">\r
                {{ getErrorMessage('referenceNumbers') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('referenceNumbers')">\r
                {{ getServerErrorMessage('referenceNumbers') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            <i class="fas fa-times me-2"></i>{{ translate('common.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-warning" [disabled]="editForm.invalid">\r
            <i class="fas fa-save me-2"></i>{{ translate('letters.update') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade" [class.show]="isOpen" *ngIf="isOpen"></div>\r
\r
<!-- Confirmation Modal -->\r
<app-letters-confirmation-modal #confirmationModal></app-letters-confirmation-modal>\r
`, styles: [`/* src/app/components/letters/edit-letter/edit-letter.css */
.modal {
  z-index: 1055;
}
.modal.show {
  display: block !important;
}
.modal-backdrop.show {
  opacity: 0.5;
}
.modal-dialog {
  max-width: 800px;
}
.modal-header {
  border-bottom: 1px solid rgba(255, 193, 7, 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}
.modal-header[dir=rtl] {
  justify-content: flex-end;
}
.modal-header[dir=ltr] {
  justify-content: flex-start;
}
.modal-title[class*=text-end] {
  text-align: right !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  order: 2;
}
.modal-title[class*=text-start] {
  text-align: left !important;
  margin-left: 0 !important;
  margin-right: auto !important;
  order: 1;
}
.modal-header[dir=rtl] .modal-title {
  margin-left: auto !important;
  margin-right: 0 !important;
  text-align: right !important;
}
.modal-header[dir=ltr] .modal-title {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}
.modal-body {
  padding: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
}
.modal-footer {
  border-top: 1px solid #dee2e6;
  padding: 1rem 1.5rem;
  background-color: #f8f9fa;
}
.form-label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}
.form-control,
.form-select {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:focus,
.form-select:focus {
  border-color: #ffc107;
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
  outline: 0;
}
.form-control.is-invalid,
.form-select.is-invalid {
  border-color: #dc3545;
}
.form-control.is-invalid:focus,
.form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}
textarea.form-control {
  resize: vertical;
  min-height: 100px;
}
.btn {
  border-radius: 0.375rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;
}
.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}
.btn-warning:hover:not(:disabled) {
  background-color: #e0a800;
  border-color: #d39e00;
}
.btn-warning:disabled {
  background-color: #6c757d;
  border-color: #6c757d;
  opacity: 0.65;
}
.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}
.btn-secondary:hover {
  background-color: #545b62;
  border-color: #4e555b;
}
.text-danger {
  color: #dc3545 !important;
}
.row.g-3 > * {
  padding: 0.75rem;
}
.fas {
  font-size: 0.875rem;
}
.btn-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
}
.btn-close:hover {
  opacity: 0.75;
}
.btn-close:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100% - 1rem);
  }
  .modal-body {
    padding: 1rem;
    max-height: 60vh;
  }
  .modal-header,
  .modal-footer {
    padding: 0.75rem 1rem;
  }
  .row.g-3 > * {
    padding: 0.5rem;
  }
}
[dir=rtl] .modal-header {
  text-align: right;
}
[dir=rtl] .me-2 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}
[dir=rtl] .ms-2 {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal.show .modal-dialog {
  transform: none;
}
.form-control:valid {
  border-color: #28a745;
}
.form-control:valid:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}
.btn:disabled {
  cursor: not-allowed;
}
.modal-body::-webkit-scrollbar {
  width: 6px;
}
.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
.modal-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
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
/*# sourceMappingURL=edit-letter-LM63KE3F.css.map */
`] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], letterUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditLetter, { className: "EditLetter", filePath: "src/app/components/letters/edit-letter/edit-letter.ts", lineNumber: 14 });
})();

// src/app/components/letters/add-attachment/add-attachment.ts
var _c03 = ["confirmationModal"];
var _c1 = ["fileInput"];
function AddAttachment_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.letter_details"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLetter.subject, " ");
  }
}
function AddAttachment_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "h5", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.drag_drop_files"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.file_requirements"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.browse_files"), " ");
  }
}
function AddAttachment_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(2, "svg");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "div", 37)(4, "h6", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 39);
    \u0275\u0275listener("click", function AddAttachment_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFile());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 40);
    \u0275\u0275element(10, "line", 41)(11, "line", 42);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.getFileIcon(ctx_r1.selectedFile.type) + " -2x me-3");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(ctx_r1.selectedFile.size));
  }
}
function AddAttachment_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("description"), " ");
  }
}
function AddAttachment_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("description"), " ");
  }
}
function AddAttachment_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("documentSource"), " ");
  }
}
function AddAttachment_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("documentSource"), " ");
  }
}
function AddAttachment_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function AddAttachment_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.isOpen);
  }
}
var AddAttachment = class _AddAttachment {
  lettersService;
  fb;
  translationService;
  confirmationModal;
  fileInput;
  attachmentAdded = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  currentLetter = null;
  selectedFile = null;
  isUploading = false;
  addForm;
  // Supported file types
  supportedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "image/jpeg",
    "image/png",
    "image/gif"
  ];
  maxFileSize = 10 * 1024 * 1024;
  // 10MB
  constructor(lettersService, fb, translationService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
  }
  ngAfterViewInit() {
  }
  open(letter) {
    this.currentLetter = letter;
    this.isOpen = true;
    this.initializeForm();
    this.resetForm();
  }
  close() {
    this.isOpen = false;
    this.currentLetter = null;
    this.selectedFile = null;
    this.isUploading = false;
    this.resetForm();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.addForm = this.fb.group({
      description: ["", [Validators.maxLength(200)]],
      documentSource: [""]
    });
  }
  resetForm() {
    this.addForm.reset();
    this.selectedFile = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      if (!this.supportedFileTypes.includes(file.type)) {
        this.showErrorMessage(this.translate("letters.file_format_error"));
        this.resetForm();
        return;
      }
      if (file.size > this.maxFileSize) {
        this.showErrorMessage(this.translate("letters.file_size_error"));
        this.resetForm();
        return;
      }
      this.selectedFile = file;
    } else {
      this.selectedFile = null;
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!this.supportedFileTypes.includes(file.type)) {
        this.showErrorMessage(this.translate("letters.file_format_error"));
        return;
      }
      if (file.size > this.maxFileSize) {
        this.showErrorMessage(this.translate("letters.file_size_error"));
        return;
      }
      this.selectedFile = file;
      if (this.fileInput) {
        this.fileInput.nativeElement.files = files;
      }
    }
  }
  removeFile() {
    this.selectedFile = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
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
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      return `Maximum length is ${requiredLength} characters`;
    }
    return "Invalid field";
  }
  onSubmit() {
    if (!this.selectedFile || !this.currentLetter) {
      this.showErrorMessage(this.translate("letters.file_required"));
      return;
    }
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }
    this.isUploading = true;
    const formValue = this.addForm.value;
    const attachmentData = {
      file: this.selectedFile,
      description: formValue.description || void 0,
      documentSource: formValue.documentSource ? parseInt(formValue.documentSource) : void 0
    };
    console.log("Uploading attachment:", attachmentData);
    this.lettersService.addAttachment(this.currentLetter.id, attachmentData).subscribe({
      next: (res) => {
        this.isUploading = false;
        this.showSuccessMessage(this.translate("letters.add_attachment_success"));
        this.close();
        this.attachmentAdded.emit();
      },
      error: (error) => {
        this.isUploading = false;
        console.error("Error adding attachment:", error);
        this.handleApiErrors(error);
      }
    });
  }
  handleApiErrors(error) {
    console.log("Full error response:", error);
    if (error.error?.errors) {
      const errors = error.error.errors;
      console.log("API validation errors:", errors);
      Object.keys(errors).forEach((fieldName) => {
        const control = this.addForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        } else {
          console.warn(`Form control not found for field: ${fieldName}`);
        }
      });
    } else {
      let errorMessage = "Unknown error occurred";
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
    }
  }
  getFormFieldName(apiFieldName) {
    const fieldMapping = {
      "Description": "description",
      "DocumentSource": "documentSource"
    };
    return fieldMapping[apiFieldName] || apiFieldName.toLowerCase();
  }
  translate(key) {
    return this.translationService.translate(key);
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
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  getFileIcon(fileType) {
    if (fileType.includes("pdf"))
      return "fas fa-file-pdf text-danger";
    if (fileType.includes("word") || fileType.includes("document"))
      return "fas fa-file-word text-primary";
    if (fileType.includes("excel") || fileType.includes("spreadsheet"))
      return "fas fa-file-excel text-success";
    if (fileType.includes("powerpoint") || fileType.includes("presentation"))
      return "fas fa-file-powerpoint text-warning";
    if (fileType.includes("image"))
      return "fas fa-file-image text-info";
    return "fas fa-file text-secondary";
  }
  static \u0275fac = function AddAttachment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddAttachment)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddAttachment, selectors: [["app-add-attachment"]], viewQuery: function AddAttachment_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, outputs: { attachmentAdded: "attachmentAdded" }, standalone: false, decls: 49, vars: 34, consts: [["fileInput", ""], ["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-info", 4, "ngIf"], [1, "row", "g-3"], [1, "col-12"], [1, "form-label"], [1, "text-danger"], [1, "file-drop-zone", 3, "dragover", "dragleave", "drop", "click"], ["class", "file-drop-content", 4, "ngIf"], ["class", "selected-file-display", 4, "ngIf"], ["type", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif", 1, "d-none", 3, "change"], ["formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "documentSource", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "alert", "alert-info"], [1, "file-drop-content"], [1, "text-muted"], [1, "text-muted", "small"], ["type", "button", 1, "btn", "btn-outline-primary"], [1, "selected-file-display"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade"]], template: function AddAttachment_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function AddAttachment_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "h5", 6);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddAttachment_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "div", 8);
      \u0275\u0275template(8, AddAttachment_div_8_Template, 4, 2, "div", 9);
      \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "label", 12);
      \u0275\u0275text(12);
      \u0275\u0275elementStart(13, "span", 13);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275listener("dragover", function AddAttachment_Template_div_dragover_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragleave", function AddAttachment_Template_div_dragleave_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave($event));
      })("drop", function AddAttachment_Template_div_drop_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      })("click", function AddAttachment_Template_div_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r3 = \u0275\u0275reference(19);
        return \u0275\u0275resetView(fileInput_r3.click());
      });
      \u0275\u0275template(16, AddAttachment_div_16_Template, 7, 3, "div", 15)(17, AddAttachment_div_17_Template, 12, 4, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 17, 0);
      \u0275\u0275listener("change", function AddAttachment_Template_input_change_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "label", 12);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "textarea", 18);
      \u0275\u0275template(24, AddAttachment_div_24_Template, 2, 1, "div", 19)(25, AddAttachment_div_25_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 12);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 20)(30, "option", 21);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "option", 22);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "option", 23);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 24);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(38, AddAttachment_div_38_Template, 2, 1, "div", 19)(39, AddAttachment_div_39_Template, 2, 1, "div", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 25)(41, "button", 26);
      \u0275\u0275listener("click", function AddAttachment_Template_button_click_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 27);
      \u0275\u0275template(44, AddAttachment_span_44_Template, 1, 0, "span", 28);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(46, AddAttachment_div_46_Template, 1, 2, "div", 29);
      \u0275\u0275element(47, "app-letters-confirmation-modal", null, 1);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.add_attachment"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.addForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentLetter);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.translate("letters.file"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("has-file", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("letters.attachment_description"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("description") || ctx.hasServerError("description"));
      \u0275\u0275property("placeholder", ctx.translate("letters.attachment_description_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("description"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("documentSource") || ctx.hasServerError("documentSource"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.select_document_source"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_1"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_2"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_3"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("documentSource"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("documentSource"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.selectedFile || ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUploading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isUploading ? ctx.translate("letters.uploading") : ctx.translate("letters.add_attachment"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(23, 162, 184, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: flex-start !important;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.file-drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #ced4da;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.file-drop-zone[_ngcontent-%COMP%]:hover {\n  border-color: #17a2b8;\n  background-color: #e6f7ff;\n}\n.file-drop-zone.has-file[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background-color: #e8f5e8;\n}\n.file-drop-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.file-drop-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.file-drop-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.selected-file-display[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border: 1px solid #dee2e6;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #17a2b8;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: #fff;\n}\n.btn-info[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #043DFF;\n  border-color: #043DFF;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #043DFF;\n  border-color: #043DFF;\n  color: #fff;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.fa-file-pdf[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.fa-file-word[_ngcontent-%COMP%] {\n  color: #043DFF !important;\n}\n.fa-file-excel[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.fa-file-image[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\n.fa-file[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-close[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .file-drop-zone[_ngcontent-%COMP%] {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .file-drop-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: none;\n}\n.form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n}\n.form-control[_ngcontent-%COMP%]:valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.file-drop-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: #17a2b8;\n  background-color: #e6f7ff;\n  transform: scale(1.02);\n}\n.selected-file-display[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=add-attachment-B3I7CL4Z.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddAttachment, [{
    type: Component,
    args: [{ selector: "app-add-attachment", standalone: false, template: `<!-- Add Attachment Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-info text-white">\r
        <h5 class="modal-title">\r
        {{ translate('letters.add_attachment') }}\r
        </h5>\r
      </div>\r
      \r
      <form [formGroup]="addForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <!-- Letter Info -->\r
          <div class="alert alert-info" *ngIf="currentLetter">\r
            <strong>{{ translate('letters.letter_details') }}:</strong> {{ currentLetter.subject }}\r
          </div>\r
\r
          <div class="row g-3">\r
            <!-- File Upload Area -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.file') }} <span class="text-danger">*</span></label>\r
              \r
              <!-- File Drop Zone -->\r
              <div class="file-drop-zone" \r
                   [class.has-file]="selectedFile"\r
                   (dragover)="onDragOver($event)"\r
                   (dragleave)="onDragLeave($event)"\r
                   (drop)="onDrop($event)"\r
                   (click)="fileInput.click()">\r
                \r
                <div class="file-drop-content" *ngIf="!selectedFile">\r
                  \r
                  <h5 class="text-muted">{{ translate('letters.drag_drop_files') }}</h5>\r
                  <p class="text-muted small">{{ translate('letters.file_requirements') }}</p>\r
                  <button type="button" class="btn btn-outline-primary">\r
                    {{ translate('letters.browse_files') }}\r
                  </button>\r
                </div>\r
\r
                <!-- Selected File Display -->\r
                <div class="selected-file-display" *ngIf="selectedFile">\r
                  <div class="d-flex align-items-center">\r
                    <svg [class]="getFileIcon(selectedFile.type) + ' -2x me-3'"></svg>\r
                    <div class="flex-grow-1">\r
                      <h6 class="mb-1">{{ selectedFile.name }}</h6>\r
                      <small class="text-muted">{{ formatFileSize(selectedFile.size) }}</small>\r
                    </div>\r
                    <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeFile()">\r
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                        <line x1="18" y1="6" x2="6" y2="18"></line>\r
                        <line x1="6" y1="6" x2="18" y2="18"></line>\r
                      </svg>\r
                    </button>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Hidden File Input -->\r
              <input #fileInput type="file" class="d-none" \r
                     (change)="onFileSelected($event)"\r
                     accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif">\r
            </div>\r
\r
            <!-- Description -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.attachment_description') }}</label>\r
              <textarea class="form-control" formControlName="description" rows="3" \r
                        [placeholder]="translate('letters.attachment_description_placeholder')"\r
                        [class.is-invalid]="isFieldValid('description') || hasServerError('description')"></textarea>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('description')">\r
                {{ getErrorMessage('description') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('description')">\r
                {{ getServerErrorMessage('description') }}\r
              </div>\r
            </div>\r
\r
            <!-- Document Source (Optional) -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.document_source') }}</label>\r
              <select class="form-select" formControlName="documentSource" \r
                      [class.is-invalid]="isFieldValid('documentSource') || hasServerError('documentSource')">\r
                <option value="">{{ translate('letters.select_document_source') }}</option>\r
                <option value="1">{{ translate('letters.document_source_1') }}</option>\r
                <option value="2">{{ translate('letters.document_source_2') }}</option>\r
                <option value="3">{{ translate('letters.document_source_3') }}</option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('documentSource')">\r
                {{ getErrorMessage('documentSource') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('documentSource')">\r
                {{ getServerErrorMessage('documentSource') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="close()" [disabled]="isUploading">\r
            {{ translate('common.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-info" [disabled]="!selectedFile || isUploading">\r
            \r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="isUploading"></span>\r
            {{ isUploading ? translate('letters.uploading') : translate('letters.add_attachment') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade" [class.show]="isOpen" *ngIf="isOpen"></div>\r
\r
<!-- Confirmation Modal -->\r
<app-letters-confirmation-modal #confirmationModal></app-letters-confirmation-modal>\r
`, styles: ["/* src/app/components/letters/add-attachment/add-attachment.css */\n.modal {\n  z-index: 1055;\n}\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-dialog {\n  max-width: 600px;\n}\n.modal-header {\n  border-bottom: 1px solid rgba(23, 162, 184, 0.2);\n  padding: 1rem 1.5rem;\n  display: flex;\n  align-items: flex-start !important;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.file-drop-zone {\n  border: 2px dashed #ced4da;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n  min-height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.file-drop-zone:hover {\n  border-color: #17a2b8;\n  background-color: #e6f7ff;\n}\n.file-drop-zone.has-file {\n  border-color: #28a745;\n  background-color: #e8f5e8;\n}\n.file-drop-content {\n  width: 100%;\n}\n.file-drop-content h5 {\n  margin-bottom: 0.5rem;\n}\n.file-drop-content p {\n  margin-bottom: 1rem;\n}\n.selected-file-display {\n  width: 100%;\n  padding: 1rem;\n  background-color: #fff;\n  border-radius: 0.375rem;\n  border: 1px solid #dee2e6;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #17a2b8;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: #fff;\n}\n.btn-info:hover:not(:disabled) {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-outline-primary {\n  color: #043DFF;\n  border-color: #043DFF;\n}\n.btn-outline-primary:hover {\n  background-color: #043DFF;\n  border-color: #043DFF;\n  color: #fff;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.row.g-3 > * {\n  padding: 0.75rem;\n}\n.fas {\n  font-size: 0.875rem;\n}\n.fa-file-pdf {\n  color: #dc3545 !important;\n}\n.fa-file-word {\n  color: #043DFF !important;\n}\n.fa-file-excel {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint {\n  color: #ffc107 !important;\n}\n.fa-file-image {\n  color: #17a2b8 !important;\n}\n.fa-file {\n  color: #6c757d !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close:hover {\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header,\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3 > * {\n    padding: 0.5rem;\n  }\n  .file-drop-zone {\n    padding: 1rem;\n    min-height: 150px;\n  }\n  .file-drop-content h5 {\n    font-size: 1rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.form-control:valid {\n  border-color: #28a745;\n}\n.form-control:valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.btn:disabled {\n  cursor: not-allowed;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.file-drop-zone.drag-over {\n  border-color: #17a2b8;\n  background-color: #e6f7ff;\n  transform: scale(1.02);\n}\n.selected-file-display {\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=add-attachment-B3I7CL4Z.css.map */\n"] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], attachmentAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddAttachment, { className: "AddAttachment", filePath: "src/app/components/letters/add-attachment/add-attachment.ts", lineNumber: 14 });
})();

// src/app/components/letters/edit-attachment/edit-attachment.ts
var _c04 = ["confirmationModal"];
function EditAttachment_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.letter_details"), ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.currentLetter.subject, " ");
  }
}
function EditAttachment_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementStart(5, "div", 31)(6, "h6", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getFileIcon(ctx_r1.currentAttachment.fileType) + " fa-2x me-3");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentAttachment.fileName || "Unnamed file");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.currentAttachment.uploadedByName || "Unknown", " | ", ctx_r1.formatDate(ctx_r1.currentAttachment.uploadedAt), " ");
  }
}
function EditAttachment_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("description"), " ");
  }
}
function EditAttachment_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("description"), " ");
  }
}
function EditAttachment_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getErrorMessage("documentSource"), " ");
  }
}
function EditAttachment_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getServerErrorMessage("documentSource"), " ");
  }
}
function EditAttachment_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
}
function EditAttachment_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.isOpen);
  }
}
var EditAttachment = class _EditAttachment {
  lettersService;
  fb;
  translationService;
  confirmationModal;
  attachmentUpdated = new EventEmitter();
  // Custom modal properties
  isOpen = false;
  currentLetter = null;
  currentAttachment = null;
  isUpdating = false;
  editForm;
  constructor(lettersService, fb, translationService) {
    this.lettersService = lettersService;
    this.fb = fb;
    this.translationService = translationService;
  }
  ngAfterViewInit() {
  }
  open(letter, attachment) {
    this.currentLetter = letter;
    this.currentAttachment = attachment;
    this.isOpen = true;
    this.initializeForm();
    this.populateForm(attachment);
  }
  close() {
    this.isOpen = false;
    this.currentLetter = null;
    this.currentAttachment = null;
    this.isUpdating = false;
    this.editForm.reset();
  }
  // Handle backdrop click
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.editForm = this.fb.group({
      description: ["", [Validators.maxLength(200)]],
      documentSource: [""]
    });
  }
  populateForm(attachment) {
    this.editForm.patchValue({
      description: attachment.description || "",
      documentSource: attachment.documentSource || ""
    });
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
    if (control.errors["maxlength"]) {
      const requiredLength = control.errors["maxlength"]["requiredLength"];
      return `Maximum length is ${requiredLength} characters`;
    }
    return "Invalid field";
  }
  onSubmit() {
    if (this.editForm.invalid || !this.currentLetter || !this.currentAttachment) {
      this.editForm.markAllAsTouched();
      return;
    }
    this.isUpdating = true;
    const formValue = this.editForm.value;
    const attachmentData = {
      description: formValue.description || null,
      documentSource: formValue.documentSource ? parseInt(formValue.documentSource) : null
    };
    console.log("Updating attachment:", attachmentData);
    this.lettersService.updateAttachment(this.currentLetter.id, this.currentAttachment.id, attachmentData).subscribe({
      next: (res) => {
        this.isUpdating = false;
        this.showSuccessMessage(this.translate("letters.edit_attachment_success"));
        this.close();
        this.attachmentUpdated.emit();
      },
      error: (error) => {
        this.isUpdating = false;
        console.error("Error updating attachment:", error);
        this.handleApiErrors(error);
      }
    });
  }
  handleApiErrors(error) {
    console.log("Full error response:", error);
    if (error.error?.errors) {
      const errors = error.error.errors;
      console.log("API validation errors:", errors);
      Object.keys(errors).forEach((fieldName) => {
        const control = this.editForm.get(this.getFormFieldName(fieldName));
        if (control) {
          control.setErrors({ serverError: errors[fieldName][0] });
          control.markAsTouched();
        } else {
          console.warn(`Form control not found for field: ${fieldName}`);
        }
      });
    } else {
      let errorMessage = "Unknown error occurred";
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
    }
  }
  getFormFieldName(apiFieldName) {
    const fieldMapping = {
      "Description": "description",
      "DocumentSource": "documentSource"
    };
    return fieldMapping[apiFieldName] || apiFieldName.toLowerCase();
  }
  translate(key) {
    return this.translationService.translate(key);
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
  getFileIcon(fileType) {
    if (!fileType)
      return "fas fa-file text-secondary";
    if (fileType.includes("pdf"))
      return "fas fa-file-pdf text-danger";
    if (fileType.includes("word") || fileType.includes("document"))
      return "fas fa-file-word text-primary";
    if (fileType.includes("excel") || fileType.includes("spreadsheet"))
      return "fas fa-file-excel text-success";
    if (fileType.includes("powerpoint") || fileType.includes("presentation"))
      return "fas fa-file-powerpoint text-warning";
    if (fileType.includes("image"))
      return "fas fa-file-image text-info";
    return "fas fa-file text-secondary";
  }
  formatDate(dateString) {
    if (!dateString || dateString === "0001-01-01T00:00:00")
      return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  }
  static \u0275fac = function EditAttachment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditAttachment)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditAttachment, selectors: [["app-edit-attachment"]], viewQuery: function EditAttachment_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c04, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { attachmentUpdated: "attachmentUpdated" }, standalone: false, decls: 41, vars: 30, consts: [["confirmationModal", ""], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "bg-warning", "text-dark"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], ["class", "alert alert-info", 4, "ngIf"], ["class", "attachment-info", 4, "ngIf"], [1, "row", "g-3", "mt-3"], [1, "col-12"], [1, "form-label"], ["formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "documentSource", 1, "form-select"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-warning", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "alert", "alert-info"], [1, "attachment-info"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1"], [1, "text-muted"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "modal-backdrop", "fade"]], template: function EditAttachment_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function EditAttachment_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdropClick($event));
      });
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h5", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 6);
      \u0275\u0275listener("click", function EditAttachment_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "form", 7);
      \u0275\u0275listener("ngSubmit", function EditAttachment_Template_form_ngSubmit_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(8, "div", 8);
      \u0275\u0275template(9, EditAttachment_div_9_Template, 4, 2, "div", 9)(10, EditAttachment_div_10_Template, 10, 5, "div", 10);
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "label", 13);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "textarea", 14);
      \u0275\u0275template(16, EditAttachment_div_16_Template, 2, 1, "div", 15)(17, EditAttachment_div_17_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 16)(22, "option", 17);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "option", 18);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 19);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 20);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, EditAttachment_div_30_Template, 2, 1, "div", 15)(31, EditAttachment_div_31_Template, 2, 1, "div", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 21)(33, "button", 22);
      \u0275\u0275listener("click", function EditAttachment_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 23);
      \u0275\u0275template(36, EditAttachment_span_36_Template, 1, 0, "span", 24);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(38, EditAttachment_div_38_Template, 1, 2, "div", 25);
      \u0275\u0275element(39, "app-letters-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.isOpen ? "block" : "none");
      \u0275\u0275classProp("show", ctx.isOpen);
      \u0275\u0275attribute("aria-hidden", !ctx.isOpen);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.edit_attachment"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.editForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentLetter);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentAttachment);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("letters.attachment_description"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("description") || ctx.hasServerError("description"));
      \u0275\u0275property("placeholder", ctx.translate("letters.attachment_description_placeholder"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("description"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("description"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-invalid", ctx.isFieldValid("documentSource") || ctx.hasServerError("documentSource"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.select_document_source"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_1"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_2"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("letters.document_source_3"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isFieldValid("documentSource"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasServerError("documentSource"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.cancel"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.editForm.invalid || ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUpdating);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isUpdating ? ctx.translate("common.updating") : ctx.translate("letters.update"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isOpen);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LettersConfirmationModalComponent], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  z-index: 1055;\n}\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 193, 7, 0.2);\n  padding: 1rem 1.5rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #ffc107;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, \n.form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #212529;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning[_ngcontent-%COMP%]:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.fa-file-pdf[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.fa-file-word[_ngcontent-%COMP%] {\n  color: #043DFF !important;\n}\n.fa-file-excel[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.fa-file-image[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\n.fa-file[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-close[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .attachment-info[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: none;\n}\n.form-control[_ngcontent-%COMP%]:valid {\n  border-color: #28a745;\n}\n.form-control[_ngcontent-%COMP%]:valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.attachment-info[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=edit-attachment-XV5AM6XV.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditAttachment, [{
    type: Component,
    args: [{ selector: "app-edit-attachment", standalone: false, template: `<!-- Edit Attachment Modal -->\r
<div class="modal fade" [class.show]="isOpen" [style.display]="isOpen ? 'block' : 'none'" \r
     tabindex="-1" role="dialog" [attr.aria-hidden]="!isOpen" (click)="onBackdropClick($event)">\r
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">\r
    <div class="modal-content">\r
      <div class="modal-header bg-warning text-dark">\r
        <h5 class="modal-title">\r
          {{ translate('letters.edit_attachment') }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="close()" aria-label="Close"></button>\r
      </div>\r
      \r
      <form [formGroup]="editForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <!-- Letter Info -->\r
          <div class="alert alert-info" *ngIf="currentLetter">\r
            \r
            <strong>{{ translate('letters.letter_details') }}:</strong> {{ currentLetter.subject }}\r
          </div>\r
\r
          <!-- Attachment Info -->\r
          <div class="attachment-info" *ngIf="currentAttachment">\r
            <div class="card">\r
              <div class="card-body">\r
                <div class="d-flex align-items-center">\r
                  <i [class]="getFileIcon(currentAttachment.fileType) + ' fa-2x me-3'"></i>\r
                  <div class="flex-grow-1">\r
                    <h6 class="mb-1">{{ currentAttachment.fileName || 'Unnamed file' }}</h6>\r
                    <small class="text-muted">\r
                      {{ currentAttachment.uploadedByName || 'Unknown' }} | \r
                      {{ formatDate(currentAttachment.uploadedAt) }}\r
                    </small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="row g-3 mt-3">\r
            <!-- Description -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.attachment_description') }}</label>\r
              <textarea class="form-control" formControlName="description" rows="3" \r
                        [placeholder]="translate('letters.attachment_description_placeholder')"\r
                        [class.is-invalid]="isFieldValid('description') || hasServerError('description')"></textarea>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('description')">\r
                {{ getErrorMessage('description') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('description')">\r
                {{ getServerErrorMessage('description') }}\r
              </div>\r
            </div>\r
\r
            <!-- Document Source -->\r
            <div class="col-12">\r
              <label class="form-label">{{ translate('letters.document_source') }}</label>\r
              <select class="form-select" formControlName="documentSource" \r
                      [class.is-invalid]="isFieldValid('documentSource') || hasServerError('documentSource')">\r
                <option value="">{{ translate('letters.select_document_source') }}</option>\r
                <option value="1">{{ translate('letters.document_source_1') }}</option>\r
                <option value="2">{{ translate('letters.document_source_2') }}</option>\r
                <option value="3">{{ translate('letters.document_source_3') }}</option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="isFieldValid('documentSource')">\r
                {{ getErrorMessage('documentSource') }}\r
              </div>\r
              <div class="invalid-feedback" *ngIf="hasServerError('documentSource')">\r
                {{ getServerErrorMessage('documentSource') }}\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        \r
        <div class="modal-footer">\r
          <button type="button" class="btn btn-secondary" (click)="close()" [disabled]="isUpdating">\r
            {{ translate('common.cancel') }}\r
          </button>\r
          <button type="submit" class="btn btn-warning" [disabled]="editForm.invalid || isUpdating">\r
            \r
            <span class="spinner-border spinner-border-sm me-2" *ngIf="isUpdating"></span>\r
            {{ isUpdating ? translate('common.updating') : translate('letters.update') }}\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade" [class.show]="isOpen" *ngIf="isOpen"></div>\r
\r
<!-- Confirmation Modal -->\r
<app-letters-confirmation-modal #confirmationModal></app-letters-confirmation-modal>\r
`, styles: ["/* src/app/components/letters/edit-attachment/edit-attachment.css */\n.modal {\n  z-index: 1055;\n}\n.modal.show {\n  display: block !important;\n}\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n.modal-dialog {\n  max-width: 600px;\n}\n.modal-header {\n  border-bottom: 1px solid rgba(255, 193, 7, 0.2);\n  padding: 1rem 1.5rem;\n}\n.modal-title {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n}\n.modal-body {\n  padding: 1.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info .card {\n  border: 1px solid #dee2e6;\n  border-radius: 0.5rem;\n  background-color: #f8f9fa;\n}\n.attachment-info .card-body {\n  padding: 1rem;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #ffc107;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);\n  outline: 0;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.form-control.is-invalid:focus,\n.form-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: #dc3545;\n}\ntextarea.form-control {\n  resize: vertical;\n  min-height: 80px;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  transition: all 0.15s ease-in-out;\n}\n.btn-warning {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #212529;\n}\n.btn-warning:hover:not(:disabled) {\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning:disabled {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  opacity: 0.65;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary:hover:not(:disabled) {\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.row.g-3 > * {\n  padding: 0.75rem;\n}\n.fas {\n  font-size: 0.875rem;\n}\n.fa-file-pdf {\n  color: #dc3545 !important;\n}\n.fa-file-word {\n  color: #043DFF !important;\n}\n.fa-file-excel {\n  color: #28a745 !important;\n}\n.fa-file-powerpoint {\n  color: #ffc107 !important;\n}\n.fa-file-image {\n  color: #17a2b8 !important;\n}\n.fa-file {\n  color: #6c757d !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in-out;\n}\n.btn-close:hover {\n  opacity: 0.75;\n}\n.btn-close:focus {\n  outline: none;\n  box-shadow: none;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n    max-height: 60vh;\n  }\n  .modal-header,\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n  .row.g-3 > * {\n    padding: 0.5rem;\n  }\n  .attachment-info .card-body {\n    padding: 0.75rem;\n  }\n}\n[dir=rtl] .modal-header {\n  text-align: right;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.form-control:valid {\n  border-color: #28a745;\n}\n.form-control:valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.btn:disabled {\n  cursor: not-allowed;\n}\n.modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-body::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.modal-body::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.attachment-info .card {\n  animation: slideIn 0.3s ease-out;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=edit-attachment-XV5AM6XV.css.map */\n"] }]
  }], () => [{ type: LettersService }, { type: FormBuilder }, { type: TranslationService }], { confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], attachmentUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditAttachment, { className: "EditAttachment", filePath: "src/app/components/letters/edit-attachment/edit-attachment.ts", lineNumber: 14 });
})();

// src/app/components/letters/letters-list/letters-list.ts
var _c05 = ["addLetterModal"];
var _c12 = ["editLetterModal"];
var _c2 = ["addAttachmentModal"];
var _c3 = ["editAttachmentModal"];
var _c4 = ["confirmationModal"];
function LettersList_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.loading_letters"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.loading_letters"));
  }
}
function LettersList_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 39);
    \u0275\u0275element(2, "path", 40)(3, "polyline", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h4", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 10);
    \u0275\u0275listener("click", function LettersList_div_42_div_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.no_letters_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("letters.get_started_message"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.add_letter"), " ");
  }
}
function LettersList_div_42_div_3_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.getStatusBadgeClass(letter_r5.status || 0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.statuses." + letter_r5.status), " ");
  }
}
function LettersList_div_42_div_3_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.loading"));
  }
}
function LettersList_div_42_div_3_div_1__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 39);
    \u0275\u0275element(1, "path", 69)(2, "path", 70)(3, "path", 71);
    \u0275\u0275elementEnd();
  }
}
function LettersList_div_42_div_3_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 32)(2, "small", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.reference_numbers"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(letter_r5.referenceNumbers);
  }
}
function LettersList_div_42_div_3_div_1_div_35_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_div_35_div_13_Template_div_click_1_listener() {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showAttachmentDetails(letter_r5.id, attachment_r8));
    });
    \u0275\u0275elementStart(2, "div", 84)(3, "div", 85)(4, "div", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 87);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 88)(9, "button", 50);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_div_35_div_13_Template_button_click_9_listener($event) {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.editAttachment(letter_r5, attachment_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 77);
    \u0275\u0275element(11, "path", 51)(12, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 89);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_div_35_div_13_Template_button_click_13_listener($event) {
      const attachment_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const letter_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.deleteAttachment(letter_r5.id, attachment_r8.id, attachment_r8.fileName);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 77);
    \u0275\u0275element(15, "path", 69)(16, "path", 70)(17, "path", 71);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const attachment_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getAttachmentDisplayName(attachment_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.translate("letters.uploaded_by"), ": ", attachment_r8.uploadedByName, " | ", ctx_r1.formatDate(attachment_r8.uploadedAt), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.edit")));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.delete")));
  }
}
function LettersList_div_42_div_3_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 75);
    \u0275\u0275element(4, "path", 40)(5, "polyline", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 50);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_div_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addAttachment(letter_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 77);
    \u0275\u0275element(10, "line", 78)(11, "line", 79);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 80);
    \u0275\u0275template(13, LettersList_div_42_div_3_div_1_div_35_div_13_Template, 18, 8, "div", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const letter_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.translate("letters.attachments"), " (", letter_r5.attachments.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.add_attachment")));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", letter_r5.attachments);
  }
}
function LettersList_div_42_div_3_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 7)(2, "small", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 90);
    \u0275\u0275element(4, "path", 40)(5, "polyline", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "button", 91);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_div_36_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const letter_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addAttachment(letter_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 92);
    \u0275\u0275element(9, "line", 78)(10, "line", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.no_attachments"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.add_attachment"), " ");
  }
}
function LettersList_div_42_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 9)(4, "span", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, LettersList_div_42_div_3_div_1_span_8_Template, 2, 3, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9)(10, "button", 50);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_Template_button_click_10_listener() {
      const letter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editLetter(letter_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 39);
    \u0275\u0275element(12, "path", 51)(13, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function LettersList_div_42_div_3_div_1_Template_button_click_14_listener() {
      const letter_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteLetter(letter_r5.id, letter_r5.subject));
    });
    \u0275\u0275template(15, LettersList_div_42_div_3_div_1_span_15_Template, 3, 1, "span", 54)(16, LettersList_div_42_div_3_div_1__svg_svg_16_Template, 4, 0, "svg", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 56)(18, "h5", 57);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 58);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 59)(24, "div", 60)(25, "small", 61);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "small", 62);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 60)(30, "small", 61);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "small", 62);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, LettersList_div_42_div_3_div_1_div_34_Template, 6, 2, "div", 63)(35, LettersList_div_42_div_3_div_1_div_35_Template, 14, 5, "div", 64)(36, LettersList_div_42_div_3_div_1_div_36_Template, 12, 2, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 65)(38, "small", 66);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "small", 67);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const letter_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.getDirectionBadgeClass(letter_r5.direction));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.directions." + letter_r5.direction), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getConfidentialityBadgeClass(letter_r5.confidentiality));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("letters.confidentialities." + letter_r5.confidentiality), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.status !== void 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.edit")));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275interpolate(ctx_r1.translate("letters.delete")))("disabled", ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.isDeleting && ctx_r1.deletingLetterId === letter_r5.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(letter_r5.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(22, 27, letter_r5.body, 0, 100), "", letter_r5.body.length > 100 ? "..." : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.to"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(letter_r5.to);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("letters.letter_date"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(letter_r5.letterDate));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.referenceNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", letter_r5.attachments && letter_r5.attachments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !letter_r5.attachments || letter_r5.attachments.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.translate("common.created_by"), ": ", letter_r5.createdByName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(letter_r5.createdAt), " ");
  }
}
function LettersList_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, LettersList_div_42_div_3_div_1_Template, 42, 31, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredLetters);
  }
}
function LettersList_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 32);
    \u0275\u0275template(2, LettersList_div_42_div_2_Template, 10, 3, "div", 37)(3, LettersList_div_42_div_3_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredLetters.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredLetters.length > 0);
  }
}
function LettersList_div_43_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 105)(1, "button", 110);
    \u0275\u0275listener("click", function LettersList_div_43_li_23_Template_button_click_1_listener() {
      const page_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r12));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r12 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r12);
  }
}
function LettersList_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "label", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function LettersList_div_43_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function LettersList_div_43_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(6, "option", 98);
    \u0275\u0275text(7, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 99);
    \u0275\u0275text(9, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 100);
    \u0275\u0275text(11, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 101);
    \u0275\u0275text(13, "50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 102)(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "nav", 103)(18, "ul", 104)(19, "li", 105)(20, "button", 106);
    \u0275\u0275listener("click", function LettersList_div_43_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 39);
    \u0275\u0275element(22, "polyline", 107);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, LettersList_div_43_li_23_Template, 3, 3, "li", 108);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "li", 105)(25, "button", 106);
    \u0275\u0275listener("click", function LettersList_div_43_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 39);
    \u0275\u0275element(27, "polyline", 109);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("common.page_size"), ":");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate6("", ctx_r1.translate("common.showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, "-", ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.totalCount), " ", ctx_r1.translate("common.of"), " ", ctx_r1.totalCount, " ", ctx_r1.translate("letters.title"));
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
var LettersList = class _LettersList {
  lettersService;
  translationService;
  addLetterModal;
  editLetterModal;
  addAttachmentModal;
  editAttachmentModal;
  confirmationModal;
  allLetters = [];
  filteredLetters = [];
  searchTerm = "";
  isLoading = false;
  isDeleting = false;
  deletingLetterId = null;
  expandedAttachments = {};
  destroy$ = new Subject();
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  // Filters
  selectedDirection = null;
  selectedConfidentiality = null;
  selectedStatus = null;
  fromDate = "";
  toDate = "";
  constructor(lettersService, translationService) {
    this.lettersService = lettersService;
    this.translationService = translationService;
  }
  directions = {
    0: "Incoming",
    1: "Outgoing"
  };
  confidentialities = {
    0: "Public",
    1: "Restricted",
    2: "Secret"
  };
  statuses = {
    0: "Draft",
    1: "Approved",
    2: "Sent",
    3: "Archived"
  };
  ngOnInit() {
    this.loadLetters();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadLetters() {
    this.isLoading = true;
    const params = {
      search: this.searchTerm || void 0,
      PageSize: this.pageSize,
      PageNumber: this.currentPage,
      Direction: this.selectedDirection || void 0,
      Confidentiality: this.selectedConfidentiality || void 0
    };
    this.lettersService.getAllLetters(params).subscribe({
      next: (res) => {
        console.log("Letters loaded:", res.data.items);
        this.allLetters = res.data.items;
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
        this.filteredLetters = [...this.allLetters];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading letters:", error);
        this.isLoading = false;
      }
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadLetters();
  }
  onSearchClick() {
    this.currentPage = 1;
    this.loadLetters();
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadLetters();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadLetters();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadLetters();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedDirection = null;
    this.selectedConfidentiality = null;
    this.selectedStatus = null;
    this.fromDate = "";
    this.toDate = "";
    this.currentPage = 1;
    this.loadLetters();
  }
  getDirectionLabel(direction) {
    return this.directions[direction] || "Unknown";
  }
  getConfidentialityLabel(confidentiality) {
    return this.confidentialities[confidentiality] || "Unknown";
  }
  getStatusLabel(status) {
    return this.statuses[status] || "Unknown";
  }
  getAttachmentsDisplay(attachments) {
    if (!attachments || attachments.length === 0) {
      return "";
    }
    const displayAttachments = attachments.slice(0, 2);
    const attachmentStrings = displayAttachments.map((attachment) => this.getAttachmentDisplayName(attachment));
    if (attachments.length > 2) {
      return attachmentStrings.join(", ") + ` +${attachments.length - 2} more`;
    }
    return attachmentStrings.join(", ");
  }
  getAttachmentDisplayName(attachment) {
    if (attachment.fileName && attachment.fileName.trim()) {
      return attachment.fileName;
    }
    if (attachment.filePath) {
      const pathParts = attachment.filePath.split("/");
      const fileName = pathParts[pathParts.length - 1];
      if (fileName && fileName.trim()) {
        return fileName;
      }
    }
    return "Document";
  }
  openAddModal() {
    this.addLetterModal.open();
  }
  deleteLetter(id, subject) {
    return __async(this, null, function* () {
      if (this.isDeleting || this.deletingLetterId === id) {
        console.log("Delete operation already in progress for letter:", id);
        return;
      }
      const letterExists = this.allLetters.some((l) => l.id === id);
      if (!letterExists) {
        console.log("Letter not found in list:", id);
        return;
      }
      const confirmData = {
        title: this.translationService.translate("letters.delete_letter"),
        message: this.translationService.translate("letters.confirm_delete_letter"),
        confirmText: this.translationService.translate("common.delete"),
        cancelText: this.translationService.translate("common.cancel"),
        type: "delete"
      };
      try {
        const confirmed = yield this.confirmationModal.show(confirmData);
        if (!confirmed) {
          console.log("User cancelled deletion");
          return;
        }
        if (this.isDeleting || this.deletingLetterId === id) {
          console.log("Delete operation already in progress, skipping");
          return;
        }
        this.isDeleting = true;
        this.deletingLetterId = id;
        console.log("Starting deletion of letter:", id);
        this.lettersService.deleteLetter(id).pipe(takeUntil(this.destroy$)).subscribe({
          next: (res) => {
            console.log("Letter deleted successfully:", id);
            this.allLetters = this.allLetters.filter((l) => l.id !== id);
            this.filteredLetters = this.filteredLetters.filter((l) => l.id !== id);
            this.showSuccessMessage(this.translationService.translate("letters.delete_letter_success"));
            this.isDeleting = false;
            this.deletingLetterId = null;
          },
          error: (error) => {
            console.error("Error deleting letter:", error);
            const errorMessage = error.error?.message || error.message || "Unknown error occurred";
            this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
            this.isDeleting = false;
            this.deletingLetterId = null;
          }
        });
      } catch (error) {
        console.error("Error in delete confirmation:", error);
        this.isDeleting = false;
        this.deletingLetterId = null;
      }
    });
  }
  deleteAttachment(letterId, attachmentId, fileName) {
    return __async(this, null, function* () {
      if (this.isDeleting) {
        return;
      }
      const confirmData = {
        title: this.translationService.translate("letters.delete_attachment"),
        message: this.translationService.translate("letters.confirm_delete_attachment"),
        confirmText: this.translationService.translate("common.delete"),
        cancelText: this.translationService.translate("common.cancel"),
        type: "delete"
      };
      try {
        const confirmed = yield this.confirmationModal.show(confirmData);
        if (!confirmed) {
          console.log("User cancelled attachment deletion");
          return;
        }
        this.isDeleting = true;
        this.lettersService.deleteAttachment(letterId, attachmentId).pipe(takeUntil(this.destroy$)).subscribe({
          next: (res) => {
            const letter = this.allLetters.find((l) => l.id === letterId);
            if (letter) {
              letter.attachments = letter.attachments.filter((a) => a.id !== attachmentId);
            }
            const filteredLetter = this.filteredLetters.find((l) => l.id === letterId);
            if (filteredLetter) {
              filteredLetter.attachments = filteredLetter.attachments.filter((a) => a.id !== attachmentId);
            }
            this.showSuccessMessage(this.translationService.translate("letters.delete_attachment_success"));
            this.isDeleting = false;
          },
          error: (error) => {
            console.error("Error deleting attachment:", error);
            const errorMessage = error.error?.message || error.message || "Unknown error occurred";
            this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
            this.isDeleting = false;
          }
        });
      } catch (error) {
        console.error("Error in attachment delete confirmation:", error);
        this.isDeleting = false;
      }
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
  toggleAttachments(letterId) {
    this.expandedAttachments[letterId] = !this.expandedAttachments[letterId];
  }
  editLetter(letter) {
    this.editLetterModal.open(letter);
  }
  addAttachment(letter) {
    this.addAttachmentModal.open(letter);
  }
  editAttachment(letter, attachment) {
    this.editAttachmentModal.open(letter, attachment);
  }
  showAttachmentDetails(letterId, attachment) {
    this.lettersService.getLetterAttachments(letterId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const attachmentDetails = res.data.find((a) => a.id === attachment.id);
          if (attachmentDetails) {
            this.showAttachmentDetailsModal(attachmentDetails);
          }
        }
      },
      error: (error) => {
        console.error("Error loading attachment details:", error);
        this.showErrorMessage(this.translationService.translate("common.error") + ": " + (error.error?.message || error.message || "Unknown error occurred"));
      }
    });
  }
  showAttachmentDetailsModal(attachment) {
    const detailsData = {
      title: this.translationService.translate("letters.attachment_details"),
      message: `
        <div class="attachment-details">
          <div class="row">
            <div class="col-md-6">
              <p><strong>${this.translationService.translate("letters.file_name")}:</strong> ${attachment.fileName || "N/A"}</p>
              <p><strong>${this.translationService.translate("letters.file_type")}:</strong> ${attachment.fileType || "N/A"}</p>
              <p><strong>${this.translationService.translate("letters.uploaded_by")}:</strong> ${attachment.uploadedByName || "N/A"}</p>
            </div>
            <div class="col-md-6">
              <p><strong>${this.translationService.translate("letters.uploaded_at")}:</strong> ${this.formatDate(attachment.uploadedAt)}</p>
              <p><strong>${this.translationService.translate("letters.attachment_description")}:</strong> ${attachment.description || "N/A"}</p>
            </div>
          </div>
        </div>
      `,
      confirmText: this.translationService.translate("common.close"),
      cancelText: "",
      type: "info"
    };
    this.confirmationModal.show(detailsData);
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
    return date.toLocaleDateString();
  }
  getDirectionBadgeClass(direction) {
    return direction === LetterDirection.In ? "bg-primary" : "bg-success";
  }
  getConfidentialityBadgeClass(confidentiality) {
    switch (confidentiality) {
      case LetterConfidentiality.Public:
        return "bg-success";
      case LetterConfidentiality.Restricted:
        return "bg-warning";
      case LetterConfidentiality.Secret:
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case LetterStatus.Draft:
        return "bg-secondary";
      case LetterStatus.Approved:
        return "bg-info";
      case LetterStatus.Sent:
        return "bg-success";
      case LetterStatus.Archived:
        return "bg-dark";
      default:
        return "bg-secondary";
    }
  }
  static \u0275fac = function LettersList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersList)(\u0275\u0275directiveInject(LettersService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LettersList, selectors: [["app-letters-list"]], viewQuery: function LettersList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
      \u0275\u0275viewQuery(_c12, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
      \u0275\u0275viewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addLetterModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editLetterModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addAttachmentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editAttachmentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 54, vars: 26, consts: [["addLetterModal", ""], ["editLetterModal", ""], ["addAttachmentModal", ""], ["editAttachmentModal", ""], ["confirmationModal", ""], [1, "letters-container", "rounded-5", "custom-scrollbar", 3, "dir"], [1, "letters-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "letters-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "search-section", "mb-4"], [1, "row"], [1, "col-md-5"], [1, "search-input-wrapper"], [1, "bi", "bi-search", "search-icon"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-2"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "bi", "bi-search", "me-2"], [1, "form-control", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "col-md-1"], [1, "btn", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["class", "row", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [3, "letterAdded"], [3, "letterUpdated"], [3, "attachmentAdded"], [3, "attachmentUpdated"], [1, "col-12"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"], ["points", "14,2 14,8 20,8"], [1, "text-muted"], [1, "row", "g-4"], ["class", "col-lg-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-4"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], ["class", "badge", 3, "class", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click", "title"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled", "title"], ["class", "spinner-border spinner-border-sm me-1", "role", "status", 4, "ngIf"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text", "text-muted", "small", "mb-2"], [1, "row", "g-2", "mb-3"], [1, "col-6"], [1, "text-muted", "d-block"], [1, "fw-medium"], ["class", "row g-2 mb-3", 4, "ngIf"], ["class", "attachments-section", 4, "ngIf"], [1, "card-footer", "bg-transparent", "d-flex", "justify-content-between", "align-items-center"], [1, "text-bold", "fw-medium"], [1, ""], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-1"], ["d", "M3 6h18"], ["d", "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"], ["d", "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"], [1, "attachments-section"], [1, "attachments-header", "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "d-flex", "align-items-center"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2", "text-muted"], [1, "fw-medium", "text-muted"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "attachments-list"], ["class", "attachment-item", 4, "ngFor", "ngForOf"], [1, "attachment-item"], [1, "attachment-content", "d-flex", "justify-content-between", "align-items-center", "p-2", "rounded", 2, "cursor", "pointer", "transition", "background-color 0.2s", 3, "click"], [1, "d-flex", "align-items-center", "flex-grow-1"], [1, "attachment-info"], [1, "attachment-name", "fw-medium"], [1, "attachment-meta", "text-muted", "small"], [1, "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-1"], [1, "pagination-section"], [1, "pagination-controls"], [1, "page-size-control"], ["for", "pageSize"], ["id", "pageSize", 3, "ngModelChange", "change", "ngModel"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "50"], [1, "pagination-info"], ["aria-label", "Letters pagination"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "click", "disabled"], ["points", "15,18 9,12 15,6"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], ["points", "9,18 15,12 9,6"], [1, "page-link", 3, "click"]], template: function LettersList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "h1", 8);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 9)(6, "button", 10);
      \u0275\u0275listener("click", function LettersList_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddModal());
      });
      \u0275\u0275element(7, "i", 11);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 12)(10, "div", 13)(11, "div", 14)(12, "div", 15);
      \u0275\u0275element(13, "i", 16);
      \u0275\u0275elementStart(14, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function LettersList_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function LettersList_Template_input_keyup_enter_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 18)(16, "button", 19);
      \u0275\u0275listener("click", function LettersList_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchClick());
      });
      \u0275\u0275element(17, "i", 20);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 18)(20, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function LettersList_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDirection, $event) || (ctx.selectedDirection = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function LettersList_Template_select_change_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementStart(21, "option", 22);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "option", 22);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 22);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 18)(28, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function LettersList_Template_select_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedConfidentiality, $event) || (ctx.selectedConfidentiality = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function LettersList_Template_select_change_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementStart(29, "option", 22);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 22);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 22);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 22);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 23)(38, "button", 24);
      \u0275\u0275listener("click", function LettersList_Template_button_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275element(39, "i", 25);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(41, LettersList_div_41_Template, 8, 2, "div", 26)(42, LettersList_div_42_Template, 4, 2, "div", 26)(43, LettersList_div_43_Template, 28, 15, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "app-add-letter", 28, 0);
      \u0275\u0275listener("letterAdded", function LettersList_Template_app_add_letter_letterAdded_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "app-edit-letter", 29, 1);
      \u0275\u0275listener("letterUpdated", function LettersList_Template_app_edit_letter_letterUpdated_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "app-add-attachment", 30, 2);
      \u0275\u0275listener("attachmentAdded", function LettersList_Template_app_add_attachment_attachmentAdded_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "app-edit-attachment", 31, 3);
      \u0275\u0275listener("attachmentUpdated", function LettersList_Template_app_edit_attachment_attachmentUpdated_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadLetters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "app-letters-confirmation-modal", null, 4);
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("letters.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("letters.add_letter"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275property("placeholder", ctx.translate("letters.search_letters"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDirection);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.all_directions"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.directions.0"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.directions.1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedConfidentiality);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.all_confidentialities"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.confidentialities.0"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.confidentialities.1"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("letters.confidentialities.2"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.clear"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredLetters.length > 0);
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, AddLetter, EditLetter, AddAttachment, EditAttachment, LettersConfirmationModalComponent, SlicePipe], styles: ["\n\n.letters-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.letters-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.letters-title[_ngcontent-%COMP%] {\n  color: #09365F;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.card[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.card-text[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  color: #6c757d;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #043DFF !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n  color: #212529 !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #343a40 !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\n.attachments-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #e9ecef;\n  padding-top: 0.75rem;\n  margin-top: 0.75rem;\n}\n.attachments-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f8f9fa;\n  padding-bottom: 0.5rem;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.attachment-content[_ngcontent-%COMP%] {\n  border: 1px solid #f8f9fa;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease;\n}\n.attachment-content[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachment-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.attachment-name[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.attachment-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.form-control[_ngcontent-%COMP%], \n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #043DFF;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #043DFF;\n  border: 1px solid #dee2e6;\n  padding: 0.5rem 0.75rem;\n}\n.pagination[_ngcontent-%COMP%]   .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background-color: #043DFF;\n  border-color: #043DFF;\n}\n.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  transition: background-color 0.15s ease-in-out;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n}\n.text-center.py-5[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n}\n.fa-envelope[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.attachment-details[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.attachment-details[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.attachment-details[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.attachment-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  line-height: 1.6;\n}\n.attachment-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.attachment-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n  border-color: #218838;\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #043DFF;\n  border-color: #043DFF;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  background-color: #043DFF;\n  border-color: #043DFF;\n  color: #fff;\n}\n.pagination-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043DFF;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #043DFF;\n  border-color: #043DFF;\n  color: white;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .letters-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .letters-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .letters-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .letters-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pagination-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    justify-content: center;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .page-size-control[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.375rem;\n  }\n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.25rem !important;\n  }\n  .search-section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1rem !important;\n  }\n}\n/*# sourceMappingURL=letters-list-POFTKIR3.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersList, [{
    type: Component,
    args: [{ selector: "app-letters-list", standalone: false, template: `<div class="letters-container rounded-5 custom-scrollbar" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Header Section -->\r
  <div class="letters-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="letters-title">{{ translate('letters.title') }}</h1>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-primary" (click)="openAddModal()">\r
          <i class="bi bi-plus-circle me-2"></i>\r
          {{ translate('letters.add_letter') }}\r
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
          <i class="bi bi-search search-icon"></i>\r
          <input \r
            type="text" \r
            class="form-control search-input" \r
            [placeholder]="translate('letters.search_letters')"\r
            [(ngModel)]="searchTerm"\r
            (keyup.enter)="onSearchClick()"\r
          >\r
        </div>\r
      </div>\r
      <div class="col-md-2">\r
        <button class="btn btn-primary w-100" (click)="onSearchClick()">\r
          <i class="bi bi-search me-2"></i>\r
          {{ translate('common.search') }}\r
        </button>\r
      </div>\r
      <div class="col-md-2">\r
        <select \r
          class="form-control" \r
          [(ngModel)]="selectedDirection" \r
          (change)="onFilterChange()"\r
        >\r
          <option [value]="null">{{ translate('letters.all_directions') }}</option>\r
          <option [value]="0">{{ translate('letters.directions.0') }}</option>\r
          <option [value]="1">{{ translate('letters.directions.1') }}</option>\r
        </select>\r
      </div>\r
      <div class="col-md-2">\r
        <select \r
          class="form-control" \r
          [(ngModel)]="selectedConfidentiality" \r
          (change)="onFilterChange()"\r
        >\r
          <option [value]="null">{{ translate('letters.all_confidentialities') }}</option>\r
          <option [value]="0">{{ translate('letters.confidentialities.0') }}</option>\r
          <option [value]="1">{{ translate('letters.confidentialities.1') }}</option>\r
          <option [value]="2">{{ translate('letters.confidentialities.2') }}</option>\r
        </select>\r
      </div>\r
      <div class="col-md-1">\r
        <button class="btn btn-outline-secondary w-100" (click)="clearFilters()">\r
          <i class="bi bi-x-circle me-2"></i>\r
          {{ translate('common.clear') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="row" *ngIf="isLoading">\r
    <div class="col-12">\r
      <div class="text-center py-5">\r
        <div class="spinner-border text-primary" role="status">\r
          <span class="visually-hidden">{{ translate('letters.loading_letters') }}</span>\r
        </div>\r
        <p class="mt-3 text-muted">{{ translate('letters.loading_letters') }}</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Letters List -->\r
  <div class="row" *ngIf="!isLoading">\r
    <div class="col-12">\r
      <!-- No Letters Found -->\r
      <div class="text-center py-5" *ngIf="filteredLetters.length === 0">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>\r
          <polyline points="14,2 14,8 20,8"></polyline>\r
        </svg>\r
        <h4 class="text-muted">{{ translate('letters.no_letters_found') }}</h4>\r
        <p class="text-muted">{{ translate('letters.get_started_message') }}</p>\r
        <button class="btn btn-primary" (click)="openAddModal()">\r
          {{ translate('letters.add_letter') }}\r
        </button>\r
      </div>\r
\r
      <!-- Letters Cards -->\r
      <div class="row g-4" *ngIf="filteredLetters.length > 0">\r
        <div class="col-lg-6 col-xl-4" *ngFor="let letter of filteredLetters">\r
          <div class="card h-100 shadow-sm">\r
            <div class="card-header d-flex justify-content-between align-items-center">\r
              <div class="d-flex gap-2">\r
                <span class="badge" [class]="getDirectionBadgeClass(letter.direction)">\r
                  {{ translate('letters.directions.' + letter.direction) }}\r
                </span>\r
                <span class="badge" [class]="getConfidentialityBadgeClass(letter.confidentiality)">\r
                  {{ translate('letters.confidentialities.' + letter.confidentiality) }}\r
                </span>\r
                <span class="badge" [class]="getStatusBadgeClass(letter.status || 0)" *ngIf="letter.status !== undefined">\r
                  {{ translate('letters.statuses.' + letter.status) }}\r
                </span>\r
              </div>\r
              <div class="d-flex gap-2">\r
                <button class="btn btn-sm btn-outline-primary" (click)="editLetter(letter)" title="{{ translate('letters.edit') }}">\r
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                    <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                  </svg>\r
                </button>\r
                <button class="btn btn-sm btn-outline-danger" \r
                        (click)="deleteLetter(letter.id, letter.subject)" \r
                        [disabled]="isDeleting && deletingLetterId === letter.id"\r
                        title="{{ translate('letters.delete') }}">\r
                  <span *ngIf="isDeleting && deletingLetterId === letter.id" class="spinner-border spinner-border-sm me-1" role="status">\r
                    <span class="visually-hidden">{{ translate('common.loading') }}</span>\r
                  </span>\r
                  <svg *ngIf="!(isDeleting && deletingLetterId === letter.id)" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                    <path d="M3 6h18"></path>\r
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>\r
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
            \r
            <div class="card-body">\r
              <h5 class="card-title">{{ letter.subject }}</h5>\r
              <p class="card-text text-muted small mb-2">{{ letter.body | slice:0:100 }}{{ letter.body.length > 100 ? '...' : '' }}</p>\r
              \r
              <div class="row g-2 mb-3">\r
                <div class="col-6">\r
                  <small class="text-muted d-block">{{ translate('letters.to') }}:</small>\r
                  <small class="fw-medium">{{ letter.to }}</small>\r
                </div>\r
                <div class="col-6">\r
                  <small class="text-muted d-block">{{ translate('letters.letter_date') }}:</small>\r
                  <small class="fw-medium">{{ formatDate(letter.letterDate) }}</small>\r
                </div>\r
              </div>\r
\r
              <div class="row g-2 mb-3" *ngIf="letter.referenceNumbers">\r
                <div class="col-12">\r
                  <small class="text-muted d-block">{{ translate('letters.reference_numbers') }}:</small>\r
                  <small class="fw-medium">{{ letter.referenceNumbers }}</small>\r
                </div>\r
              </div>\r
\r
              <!-- Attachments Section -->\r
              <div class="attachments-section" *ngIf="letter.attachments && letter.attachments.length > 0">\r
                <div class="attachments-header d-flex justify-content-between align-items-center mb-3">\r
                  <div class="d-flex align-items-center">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2 text-muted">\r
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>\r
                      <polyline points="14,2 14,8 20,8"></polyline>\r
                    </svg>\r
                    <span class="fw-medium text-muted">{{ translate('letters.attachments') }} ({{ letter.attachments.length }})</span>\r
                  </div>\r
                  <button class="btn btn-sm btn-outline-primary" (click)="addAttachment(letter)" title="{{ translate('letters.add_attachment') }}">\r
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                  </button>\r
                </div>\r
                \r
                <!-- Attachments List -->\r
                <div class="attachments-list">\r
                  <div class="attachment-item" *ngFor="let attachment of letter.attachments">\r
                    <div class="attachment-content d-flex justify-content-between align-items-center p-2 rounded" \r
                         (click)="showAttachmentDetails(letter.id, attachment)" \r
                         style="cursor: pointer; transition: background-color 0.2s;">\r
                      <div class="d-flex align-items-center flex-grow-1">\r
                        <!-- \r
                         -->\r
                        <div class="attachment-info">\r
                          <div class="attachment-name fw-medium">{{ getAttachmentDisplayName(attachment) }}</div>\r
                          <div class="attachment-meta text-muted small">\r
                            {{ translate('letters.uploaded_by') }}: {{ attachment.uploadedByName }} | {{ formatDate(attachment.uploadedAt) }}\r
                          </div>\r
                        </div>\r
                      </div>\r
                      <div class="d-flex gap-1">\r
                        <button class="btn btn-sm btn-outline-primary" (click)="editAttachment(letter, attachment); $event.stopPropagation()" title="{{ translate('letters.edit') }}">\r
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
                            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
                          </svg>\r
                        </button>\r
                        <button class="btn btn-sm btn-outline-danger" (click)="deleteAttachment(letter.id, attachment.id, attachment.fileName); $event.stopPropagation()" title="{{ translate('letters.delete') }}">\r
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                            <path d="M3 6h18"></path>\r
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>\r
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>\r
                          </svg>\r
                        </button>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- No Attachments -->\r
              <div class="attachments-section" *ngIf="!letter.attachments || letter.attachments.length === 0">\r
                <div class="d-flex justify-content-between align-items-center">\r
                  <small class="text-muted">\r
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-1">\r
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>\r
                      <polyline points="14,2 14,8 20,8"></polyline>\r
                    </svg>\r
                    {{ translate('letters.no_attachments') }}\r
                  </small>\r
                  <button class="btn btn-sm btn-outline-primary" (click)="addAttachment(letter)">\r
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-1">\r
                      <line x1="12" y1="5" x2="12" y2="19"></line>\r
                      <line x1="5" y1="12" x2="19" y2="12"></line>\r
                    </svg>\r
                    {{ translate('letters.add_attachment') }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
            \r
            <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">\r
              <small class="text-bold fw-medium">\r
                {{ translate('common.created_by') }}: {{ letter.createdByName }}  \r
              </small>\r
              <small class="">\r
                {{ formatDate(letter.createdAt) }}\r
              </small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination Info and Controls -->\r
  <div class="pagination-section" *ngIf="!isLoading && filteredLetters.length > 0">\r
    <div class="pagination-controls">\r
      <div class="page-size-control">\r
        <label for="pageSize">{{ translate('common.page_size') }}:</label>\r
        <select id="pageSize" [(ngModel)]="pageSize" (change)="onPageSizeChange()">\r
          <option value="5">5</option>\r
          <option value="10">10</option>\r
          <option value="20">20</option>\r
          <option value="50">50</option>\r
        </select>\r
      </div>\r
      <div class="pagination-info">\r
        <span>{{ translate('common.showing') }} {{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, totalCount) }} {{ translate('common.of') }} {{ totalCount }} {{ translate('letters.title') }}</span>\r
      </div>\r
      \r
      <nav aria-label="Letters pagination">\r
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
\r
<!-- Modals -->\r
<app-add-letter #addLetterModal (letterAdded)="loadLetters()"></app-add-letter>\r
<app-edit-letter #editLetterModal (letterUpdated)="loadLetters()"></app-edit-letter>\r
<app-add-attachment #addAttachmentModal (attachmentAdded)="loadLetters()"></app-add-attachment>\r
<app-edit-attachment #editAttachmentModal (attachmentUpdated)="loadLetters()"></app-edit-attachment>\r
<app-letters-confirmation-modal #confirmationModal></app-letters-confirmation-modal>\r
`, styles: ["/* src/app/components/letters/letters-list/letters-list.css */\n.letters-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.letters-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.letters-title {\n  color: #09365F;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #158638;\n  box-shadow: 0 0 0 0.2rem rgba(21, 134, 56, 0.25);\n}\n.card {\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n}\n.card-header {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 0.75rem 1rem;\n}\n.card-title {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n.card-text {\n  line-height: 1.5;\n  color: #6c757d;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.5rem;\n}\n.bg-primary {\n  background-color: #043DFF !important;\n}\n.bg-success {\n  background-color: #28a745 !important;\n}\n.bg-warning {\n  background-color: #ffc107 !important;\n  color: #212529 !important;\n}\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n.bg-dark {\n  background-color: #343a40 !important;\n}\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n.attachments-section {\n  border-top: 1px solid #e9ecef;\n  padding-top: 0.75rem;\n  margin-top: 0.75rem;\n}\n.attachments-header {\n  border-bottom: 1px solid #f8f9fa;\n  padding-bottom: 0.5rem;\n}\n.attachment-item {\n  margin-bottom: 0.5rem;\n}\n.attachment-content {\n  border: 1px solid #f8f9fa;\n  border-radius: 0.375rem;\n  transition: all 0.2s ease;\n}\n.attachment-content:hover {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.attachment-info {\n  min-width: 0;\n}\n.attachment-name {\n  color: #495057;\n  margin-bottom: 0.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n}\n.attachment-meta {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n.form-control,\n.form-select {\n  border: 1px solid #ced4da;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus,\n.form-select:focus {\n  border-color: #043DFF;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.pagination .page-link {\n  color: #043DFF;\n  border: 1px solid #dee2e6;\n  padding: 0.5rem 0.75rem;\n}\n.pagination .page-item.active .page-link {\n  background-color: #043DFF;\n  border-color: #043DFF;\n}\n.pagination .page-link:hover {\n  color: #0056b3;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.dropdown-menu {\n  border: 1px solid #e9ecef;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.dropdown-item {\n  padding: 0.5rem 1rem;\n  transition: background-color 0.15s ease-in-out;\n}\n.dropdown-item:hover {\n  background-color: #f8f9fa;\n}\n.dropdown-item.text-danger:hover {\n  background-color: #f8d7da;\n  color: #721c24 !important;\n}\n[dir=rtl] .card-header {\n  text-align: right;\n}\n[dir=rtl] .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n[dir=rtl] .me-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n[dir=rtl] .ms-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;\n}\n.text-center.py-5 {\n  padding: 3rem 0;\n}\n.fa-envelope {\n  opacity: 0.5;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n.btn {\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.15s ease-in-out;\n}\n.attachment-details {\n  padding: 1rem 0;\n}\n.attachment-details .row {\n  margin: 0;\n}\n.attachment-details .col-md-6 {\n  padding: 0.5rem 1rem;\n}\n.attachment-details p {\n  margin-bottom: 0.75rem;\n  line-height: 1.6;\n}\n.attachment-details strong {\n  color: #495057;\n  font-weight: 600;\n}\n.attachment-details p:last-child {\n  margin-bottom: 0;\n}\n.btn-primary {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-primary:hover {\n  background-color: #218838;\n  border-color: #218838;\n}\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary:hover {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-outline-primary {\n  color: #043DFF;\n  border-color: #043DFF;\n}\n.btn-outline-primary:hover {\n  background-color: #043DFF;\n  border-color: #043DFF;\n  color: #fff;\n}\n.pagination-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f9fafb;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n}\n.pagination-info {\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-controls {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.page-size-control {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-size-control label {\n  color: #374151;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.page-size-control select {\n  padding: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.pagination {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 0.25rem;\n}\n.page-item {\n  margin: 0;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  height: 40px;\n  padding: 0.5rem;\n  border: 1px solid #dee2e6;\n  background: white;\n  color: #043DFF;\n  text-decoration: none;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.page-link:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n  color: #0056b3;\n}\n.page-item.active .page-link {\n  background: #043DFF;\n  border-color: #043DFF;\n  color: white;\n}\n.page-item.disabled .page-link {\n  background: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n[dir=rtl] .search-icon {\n  left: auto;\n  right: 12px;\n}\n[dir=rtl] .search-input {\n  padding-left: 12px;\n  padding-right: 40px;\n}\n[dir=rtl] .letters-container {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .letters-container {\n    padding: 1rem;\n  }\n  .letters-header {\n    padding: 1rem;\n  }\n  .letters-title {\n    font-size: 1.5rem;\n  }\n  .search-section {\n    padding: 1rem;\n  }\n  .pagination-controls {\n    flex-direction: column;\n    gap: 1rem;\n    align-items: stretch;\n    justify-content: center;\n  }\n  .pagination {\n    justify-content: center;\n  }\n  .page-size-control {\n    justify-content: center;\n  }\n  .card-title {\n    font-size: 1rem;\n  }\n  .badge {\n    font-size: 0.7rem;\n    padding: 0.25rem 0.375rem;\n  }\n  .d-flex.gap-2 {\n    flex-wrap: wrap;\n    gap: 0.25rem !important;\n  }\n  .search-section .row {\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 1rem !important;\n  }\n}\n/*# sourceMappingURL=letters-list-POFTKIR3.css.map */\n"] }]
  }], () => [{ type: LettersService }, { type: TranslationService }], { addLetterModal: [{
    type: ViewChild,
    args: ["addLetterModal"]
  }], editLetterModal: [{
    type: ViewChild,
    args: ["editLetterModal"]
  }], addAttachmentModal: [{
    type: ViewChild,
    args: ["addAttachmentModal"]
  }], editAttachmentModal: [{
    type: ViewChild,
    args: ["editAttachmentModal"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LettersList, { className: "LettersList", filePath: "src/app/components/letters/letters-list/letters-list.ts", lineNumber: 19 });
})();

// src/app/components/letters/letters-routing.module.ts
var routes = [
  {
    path: "",
    component: LettersList
  }
];
var LettersRoutingModule = class _LettersRoutingModule {
  static \u0275fac = function LettersRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LettersRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/letters/letters.module.ts
var LettersModule = class _LettersModule {
  static \u0275fac = function LettersModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LettersModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LettersModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    LettersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LettersModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LettersList,
        AddLetter,
        EditLetter,
        AddAttachment,
        EditAttachment,
        LettersConfirmationModalComponent
      ],
      imports: [
        CommonModule,
        LettersRoutingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }]
  }], null, null);
})();
export {
  LettersModule
};
//# sourceMappingURL=chunk-BITH75QK.js.map
