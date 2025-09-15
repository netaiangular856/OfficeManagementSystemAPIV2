import {
  ConfirmationModalComponent
} from "./chunk-KDMT3COD.js";
import {
  RouterModule
} from "./chunk-LQXSMMP4.js";
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
} from "./chunk-HY6UJAEU.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  TranslationService,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-J5ZZ35GX.js";
import "./chunk-EVSPGG2W.js";

// src/app/models/document.model.ts
var DocumentType;
(function(DocumentType2) {
  DocumentType2[DocumentType2["Letter"] = 0] = "Letter";
  DocumentType2[DocumentType2["Task"] = 1] = "Task";
  DocumentType2[DocumentType2["Meeting"] = 2] = "Meeting";
  DocumentType2[DocumentType2["Minute"] = 3] = "Minute";
  DocumentType2[DocumentType2["Contract"] = 4] = "Contract";
  DocumentType2[DocumentType2["Report"] = 5] = "Report";
  DocumentType2[DocumentType2["Image"] = 6] = "Image";
  DocumentType2[DocumentType2["Scan"] = 7] = "Scan";
  DocumentType2[DocumentType2["Other"] = 8] = "Other";
})(DocumentType || (DocumentType = {}));
var DocumentSource;
(function(DocumentSource2) {
  DocumentSource2[DocumentSource2["Internal"] = 0] = "Internal";
  DocumentSource2[DocumentSource2["External"] = 1] = "External";
})(DocumentSource || (DocumentSource = {}));

// src/app/services/documents.service.ts
var DocumentsService = class _DocumentsService {
  http;
  apiUrl = `${environment.apiBaseUrl}/Documents`;
  constructor(http) {
    this.http = http;
  }
  getAllDocuments(params = {}) {
    let url = this.apiUrl;
    const queryParams = new URLSearchParams();
    if (params.search)
      queryParams.append("Search", params.search);
    if (params.type !== void 0)
      queryParams.append("Type", params.type.toString());
    if (params.documentSource !== void 0)
      queryParams.append("DocumentSource", params.documentSource.toString());
    if (params.from)
      queryParams.append("From", params.from);
    if (params.to)
      queryParams.append("To", params.to);
    if (params.pageSize)
      queryParams.append("PageSize", params.pageSize.toString());
    if (params.pageNumber)
      queryParams.append("PageNumber", params.pageNumber.toString());
    if (queryParams.toString()) {
      url += "?" + queryParams.toString();
    }
    return this.http.get(url);
  }
  getDocument(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createDocument(document2) {
    const formData = new FormData();
    formData.append("Title", document2.title);
    formData.append("Type", document2.type.toString());
    formData.append("DocumentSource", document2.documentSource.toString());
    formData.append("Description", document2.description);
    formData.append("File", document2.file);
    return this.http.post(this.apiUrl, formData);
  }
  updateDocument(id, document2) {
    const requestBody = {
      Title: document2.title || "",
      Type: document2.type,
      DocumentSource: document2.documentSource,
      Description: document2.description || ""
    };
    console.log("Service - Document data received:", document2);
    console.log("Service - Request body being sent (direct):", requestBody);
    console.log("Service - Title value:", document2.title);
    console.log("Service - Title type:", typeof document2.title);
    console.log("Service - Title length:", document2.title ? document2.title.length : "undefined");
    console.log("Service - JSON stringified:", JSON.stringify(requestBody, null, 2));
    return this.http.put(`${this.apiUrl}/${id}`, requestBody, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  deleteDocument(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  downloadDocument(id) {
    return this.http.get(`${this.apiUrl}/${id}/download`, { responseType: "blob" });
  }
  static \u0275fac = function DocumentsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentsService, factory: _DocumentsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/documents/add-document/add-document.ts
var _c0 = ["fileInput"];
var _c1 = ["confirmationModal"];
function AddDocument_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function AddDocument_div_0_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.label, " ");
  }
}
function AddDocument_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function AddDocument_div_0_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r4 = ctx.$implicit;
    \u0275\u0275property("value", source_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", source_r4.label, " ");
  }
}
function AddDocument_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("documentSource"), " ");
  }
}
function AddDocument_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("file"), " ");
  }
}
function AddDocument_div_0_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275element(3, "i", 41);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function AddDocument_div_0_div_49_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFile());
    });
    \u0275\u0275element(9, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.formatFileSize(ctx_r1.selectedFile.size), ")");
  }
}
function AddDocument_div_0_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 45);
  }
}
function AddDocument_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function AddDocument_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275listener("click", function AddDocument_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 5)(3, "h5", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 7);
    \u0275\u0275element(5, "path", 8)(6, "polyline", 9)(7, "line", 10)(8, "line", 11)(9, "polyline", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "form", 13);
    \u0275\u0275listener("ngSubmit", function AddDocument_div_0_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(12, "div", 14)(13, "div", 15)(14, "div", 16)(15, "label", 17);
    \u0275\u0275text(16);
    \u0275\u0275elementStart(17, "span", 18);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "input", 19);
    \u0275\u0275template(20, AddDocument_div_0_div_20_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 21)(22, "label", 22);
    \u0275\u0275text(23);
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "select", 23);
    \u0275\u0275template(27, AddDocument_div_0_option_27_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AddDocument_div_0_div_28_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 21)(30, "label", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "span", 18);
    \u0275\u0275text(33, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "select", 26);
    \u0275\u0275template(35, AddDocument_div_0_option_35_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AddDocument_div_0_div_36_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 16)(38, "label", 27);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "textarea", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 16)(42, "label", 29);
    \u0275\u0275text(43);
    \u0275\u0275elementStart(44, "span", 18);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "input", 30, 1);
    \u0275\u0275listener("change", function AddDocument_div_0_Template_input_change_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, AddDocument_div_0_div_48_Template, 2, 1, "div", 20)(49, AddDocument_div_0_div_49_Template, 10, 2, "div", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 32)(51, "button", 33);
    \u0275\u0275template(52, AddDocument_div_0_span_52_Template, 1, 0, "span", 34);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 35);
    \u0275\u0275listener("click", function AddDocument_div_0_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_13_0;
    let tmp_17_0;
    let tmp_23_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dir", ctx_r1.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-end", ctx_r1.isRTL())("text-start", !ctx_r1.isRTL());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.add_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.documentForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r1.documentForm.get("title")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.documentForm.get("title")) == null ? null : tmp_9_0.touched));
    \u0275\u0275property("placeholder", ctx_r1.translate("documents.title_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.type"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_13_0 = ctx_r1.documentForm.get("type")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r1.documentForm.get("type")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.source"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_17_0 = ctx_r1.documentForm.get("documentSource")) == null ? null : tmp_17_0.invalid) && ((tmp_17_0 = ctx_r1.documentForm.get("documentSource")) == null ? null : tmp_17_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentSources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("documentSource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("documents.description_placeholder"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.file"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_23_0 = ctx_r1.documentForm.get("file")) == null ? null : tmp_23_0.invalid) && ((tmp_23_0 = ctx_r1.documentForm.get("file")) == null ? null : tmp_23_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("file"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedFile);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting || ctx_r1.documentForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.cancel"), " ");
  }
}
var AddDocument = class _AddDocument {
  fb;
  documentsService;
  translationService;
  fileInput;
  confirmationModal;
  documentForm;
  isSubmitting = false;
  selectedFile = null;
  isVisible = false;
  open() {
    this.resetForm();
    this.isVisible = true;
  }
  close() {
    this.resetForm();
    this.isVisible = false;
  }
  resetForm() {
    this.documentForm.reset({
      title: "",
      type: DocumentType.Other,
      documentSource: DocumentSource.Internal,
      description: "",
      file: null
    });
    this.selectedFile = null;
    this.isSubmitting = false;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.documentForm.patchValue({ file });
      this.documentForm.get("file")?.updateValueAndValidity();
    }
  }
  removeFile() {
    this.selectedFile = null;
    this.documentForm.patchValue({ file: null });
    this.documentForm.get("file")?.updateValueAndValidity();
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
  }
  onSubmit() {
    if (this.documentForm.valid && this.selectedFile) {
      this.isSubmitting = true;
      const formData = {
        title: this.documentForm.value.title,
        type: Number(this.documentForm.value.type),
        documentSource: Number(this.documentForm.value.documentSource),
        description: this.documentForm.value.description,
        file: this.selectedFile
      };
      this.documentsService.createDocument(formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.close();
          this.showSuccessMessage(this.translate("documents.add_document_success"));
          this.documentAdded.emit();
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error("Error creating document:", error);
          const errorMessage = error.error?.message || error.message || "Unknown error occurred";
          this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.documentForm.controls).forEach((key) => {
      const control = this.documentForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.documentForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["minlength"]) {
        return this.translate("common.min_length_error");
      }
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  // Document type options - converted to properties to avoid infinite change detection
  documentTypes = [];
  documentSources = [];
  constructor(fb, documentsService, translationService) {
    this.fb = fb;
    this.documentsService = documentsService;
    this.translationService = translationService;
    this.documentForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      type: [DocumentType.Other, [Validators.required]],
      documentSource: [DocumentSource.Internal, [Validators.required]],
      description: [""],
      file: [null, [Validators.required]]
    });
    this.initializeOptions();
  }
  initializeOptions() {
    this.documentTypes = [
      { value: DocumentType.Letter, label: this.translate("documents.types.0") },
      { value: DocumentType.Task, label: this.translate("documents.types.1") },
      { value: DocumentType.Meeting, label: this.translate("documents.types.2") },
      { value: DocumentType.Minute, label: this.translate("documents.types.3") },
      { value: DocumentType.Contract, label: this.translate("documents.types.4") },
      { value: DocumentType.Report, label: this.translate("documents.types.5") },
      { value: DocumentType.Image, label: this.translate("documents.types.6") },
      { value: DocumentType.Scan, label: this.translate("documents.types.7") },
      { value: DocumentType.Other, label: this.translate("documents.types.8") }
    ];
    this.documentSources = [
      { value: DocumentSource.Internal, label: this.translate("documents.sources.0") },
      { value: DocumentSource.External, label: this.translate("documents.sources.1") }
    ];
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
  // Event emitter for parent component
  documentAdded = new EventEmitter();
  static \u0275fac = function AddDocument_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddDocument)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DocumentsService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddDocument, selectors: [["app-add-document"]], viewQuery: function AddDocument_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { documentAdded: "documentAdded" }, standalone: false, decls: 3, vars: 1, consts: [["confirmationModal", ""], ["fileInput", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14,2 14,8 20,8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10,9 9,9 8,9"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-12"], ["for", "title", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-6"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "documentSource", 1, "form-label"], ["id", "documentSource", "formControlName", "documentSource", 1, "form-select"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["for", "file", 1, "form-label"], ["type", "file", "id", "file", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif", 1, "form-control", 3, "change"], ["class", "mt-2", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [3, "value"], [1, "mt-2"], [1, "alert", "alert-info", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-file", "me-2"], [1, "text-muted", "ms-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-times"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function AddDocument_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AddDocument_div_0_Template, 56, 33, "div", 2);
      \u0275\u0275element(1, "app-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1.5rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  text-align: left !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.form-control[type=file][_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=add-document-AA3LDBPD.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddDocument, [{
    type: Component,
    args: [{ selector: "app-add-document", standalone: false, template: `<!-- Add Document Modal -->\r
<div class="modal-overlay" *ngIf="isVisible" (click)="close()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
      <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>\r
          <polyline points="14,2 14,8 20,8"></polyline>\r
          <line x1="16" y1="13" x2="8" y2="13"></line>\r
          <line x1="16" y1="17" x2="8" y2="17"></line>\r
          <polyline points="10,9 9,9 8,9"></polyline>\r
        </svg>\r
        {{ translate('documents.add_document') }}\r
      </h5>\r
    </div>\r
      \r
      <form [formGroup]="documentForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row g-3">\r
            <!-- Title -->\r
            <div class="col-12">\r
              <label for="title" class="form-label">\r
                {{ translate('documents.title') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="title"\r
                formControlName="title"\r
                [class.is-invalid]="documentForm.get('title')?.invalid && documentForm.get('title')?.touched"\r
                [placeholder]="translate('documents.title_placeholder')">\r
              <div class="invalid-feedback" *ngIf="getFieldError('title')">\r
                {{ getFieldError('title') }}\r
              </div>\r
            </div>\r
\r
            <!-- Type -->\r
            <div class="col-md-6">\r
              <label for="type" class="form-label">\r
                {{ translate('documents.type') }} <span class="text-danger">*</span>\r
              </label>\r
              <select \r
                class="form-select" \r
                id="type"\r
                formControlName="type"\r
                [class.is-invalid]="documentForm.get('type')?.invalid && documentForm.get('type')?.touched">\r
                <option *ngFor="let type of documentTypes" [value]="type.value">\r
                  {{ type.label }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="getFieldError('type')">\r
                {{ getFieldError('type') }}\r
              </div>\r
            </div>\r
\r
            <!-- Document Source -->\r
            <div class="col-md-6">\r
              <label for="documentSource" class="form-label">\r
                {{ translate('documents.source') }} <span class="text-danger">*</span>\r
              </label>\r
              <select \r
                class="form-select" \r
                id="documentSource"\r
                formControlName="documentSource"\r
                [class.is-invalid]="documentForm.get('documentSource')?.invalid && documentForm.get('documentSource')?.touched">\r
                <option *ngFor="let source of documentSources" [value]="source.value">\r
                  {{ source.label }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="getFieldError('documentSource')">\r
                {{ getFieldError('documentSource') }}\r
              </div>\r
            </div>\r
\r
            <!-- Description -->\r
            <div class="col-12">\r
              <label for="description" class="form-label">\r
                {{ translate('documents.description') }}\r
              </label>\r
              <textarea \r
                class="form-control" \r
                id="description"\r
                formControlName="description"\r
                rows="3"\r
                [placeholder]="translate('documents.description_placeholder')"></textarea>\r
            </div>\r
\r
            <!-- File Upload -->\r
            <div class="col-12">\r
              <label for="file" class="form-label">\r
                {{ translate('documents.file') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="file" \r
                class="form-control" \r
                id="file"\r
                #fileInput\r
                (change)="onFileSelected($event)"\r
                [class.is-invalid]="documentForm.get('file')?.invalid && documentForm.get('file')?.touched"\r
                accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif">\r
              <div class="invalid-feedback" *ngIf="getFieldError('file')">\r
                {{ getFieldError('file') }}\r
              </div>\r
              \r
              <!-- Selected File Display -->\r
              <div class="mt-2" *ngIf="selectedFile">\r
                <div class="alert alert-info d-flex justify-content-between align-items-center">\r
                  <div class="d-flex align-items-center">\r
                    <i class="fas fa-file me-2"></i>\r
                    <span>{{ selectedFile.name }}</span>\r
                    <small class="text-muted ms-2">({{ formatFileSize(selectedFile.size) }})</small>\r
                  </div>\r
                  <button type="button" class="btn btn-sm btn-outline-danger" (click)="removeFile()">\r
                    <i class="fas fa-times"></i>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button \r
          type="submit" \r
          class="btn btn-primary" \r
          [disabled]="isSubmitting || documentForm.invalid">\r
          <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
          {{ translate('common.save') }}\r
        </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
       \r
        </div>\r
      </form>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
`, styles: ["/* src/app/components/documents/add-document/add-document.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  background: #D4AF5F;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1.5rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  text-align: left !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 0 1.5rem;\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.invalid-feedback {\n  display: block;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n.form-control[type=file] {\n  padding: 0.375rem 0.75rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .ms-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=add-document-AA3LDBPD.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: DocumentsService }, { type: TranslationService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], documentAdded: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddDocument, { className: "AddDocument", filePath: "src/app/components/documents/add-document/add-document.ts", lineNumber: 14 });
})();

// src/app/components/documents/edit-document/edit-document.ts
var _c02 = ["fileInput"];
var _c12 = ["confirmationModal"];
function EditDocument_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("title"), " ");
  }
}
function EditDocument_div_0_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r3.label, " ");
  }
}
function EditDocument_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("type"), " ");
  }
}
function EditDocument_div_0_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r4 = ctx.$implicit;
    \u0275\u0275property("value", source_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", source_r4.label, " ");
  }
}
function EditDocument_div_0_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFieldError("documentSource"), " ");
  }
}
function EditDocument_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275element(5, "i", 35);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "small", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.current_file"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r1.currentDocument.fileName, "", ctx_r1.currentDocument.fileExtension);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r1.formatFileSize(ctx_r1.currentDocument.fileSize), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.file_cannot_be_changed"));
  }
}
function EditDocument_div_0_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function EditDocument_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function EditDocument_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function EditDocument_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "h5", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 6);
    \u0275\u0275element(5, "path", 7)(6, "path", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "form", 9);
    \u0275\u0275listener("ngSubmit", function EditDocument_div_0_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "label", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 14);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "input", 15);
    \u0275\u0275template(17, EditDocument_div_0_div_17_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "label", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 14);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "select", 19);
    \u0275\u0275template(24, EditDocument_div_0_option_24_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, EditDocument_div_0_div_25_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17)(27, "label", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementStart(29, "span", 14);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "select", 22);
    \u0275\u0275template(32, EditDocument_div_0_option_32_Template, 2, 2, "option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, EditDocument_div_0_div_33_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 12)(35, "label", 23);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "textarea", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EditDocument_div_0_div_38_Template, 12, 5, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 26)(40, "button", 27);
    \u0275\u0275template(41, EditDocument_div_0_span_41_Template, 1, 0, "span", 28);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 29);
    \u0275\u0275listener("click", function EditDocument_div_0_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_12_0;
    let tmp_16_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dir", ctx_r1.isRTL() ? "rtl" : "ltr");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-end", ctx_r1.isRTL())("text-start", !ctx_r1.isRTL());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.edit_document"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.documentForm);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_8_0 = ctx_r1.documentForm.get("title")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.documentForm.get("title")) == null ? null : tmp_8_0.touched));
    \u0275\u0275property("placeholder", ctx_r1.translate("documents.title_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.type"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r1.documentForm.get("type")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.documentForm.get("type")) == null ? null : tmp_12_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("type"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.source"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", ((tmp_16_0 = ctx_r1.documentForm.get("documentSource")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.documentForm.get("documentSource")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.documentSources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getFieldError("documentSource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.description"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.translate("documents.description_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentDocument);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting || ctx_r1.documentForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.save"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.cancel"), " ");
  }
}
var EditDocument = class _EditDocument {
  fb;
  documentsService;
  translationService;
  fileInput;
  confirmationModal;
  documentForm;
  isSubmitting = false;
  selectedFile = null;
  currentDocument = null;
  isVisible = false;
  open(documentItem) {
    this.currentDocument = documentItem;
    this.populateForm(documentItem);
    this.isVisible = true;
  }
  close() {
    this.resetForm();
    this.currentDocument = null;
    this.isVisible = false;
  }
  resetForm() {
    this.documentForm.reset({
      title: "",
      type: DocumentType.Other,
      documentSource: DocumentSource.Internal,
      description: ""
    });
    this.selectedFile = null;
    this.isSubmitting = false;
  }
  populateForm(documentItem) {
    console.log("Populating form with document:", documentItem);
    console.log("Document title:", documentItem.title);
    console.log("Document title type:", typeof documentItem.title);
    this.documentForm.patchValue({
      title: documentItem.title || "",
      type: documentItem.type,
      documentSource: documentItem.documentSource,
      description: documentItem.description || ""
    });
    console.log("Form after population:", this.documentForm.value);
    console.log("Form title after patch:", this.documentForm.value.title);
    console.log("Form valid:", this.documentForm.valid);
    console.log("Form errors:", this.documentForm.errors);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  removeFile() {
    this.selectedFile = null;
    if (this.fileInput) {
      this.fileInput.nativeElement.value = "";
    }
  }
  onSubmit() {
    console.log("Form valid:", this.documentForm.valid);
    console.log("Form errors:", this.documentForm.errors);
    console.log("Form value:", this.documentForm.value);
    console.log("Current document:", this.currentDocument);
    if (this.documentForm.valid && this.currentDocument) {
      console.log("Form is valid, proceeding with submission");
      if (!this.documentForm.value.title || this.documentForm.value.title.trim() === "") {
        console.log("Title validation failed - empty or whitespace");
        console.log("Form title value:", this.documentForm.value.title);
        console.log("Form title type:", typeof this.documentForm.value.title);
        this.showErrorMessage(this.translate("documents.title_required"));
        return;
      }
      const trimmedTitle = this.documentForm.value.title.trim();
      if (trimmedTitle.length === 0) {
        console.log("Title validation failed - only whitespace");
        this.showErrorMessage(this.translate("documents.title_required"));
        return;
      }
      this.isSubmitting = true;
      const formData = {
        title: this.documentForm.value.title.trim(),
        type: Number(this.documentForm.value.type),
        documentSource: Number(this.documentForm.value.documentSource),
        description: this.documentForm.value.description || ""
      };
      console.log("Form values:", this.documentForm.value);
      console.log("Updating document with data:", formData);
      console.log("Document ID:", this.currentDocument.id);
      console.log("Title value:", this.documentForm.value.title);
      console.log("Title type:", typeof this.documentForm.value.title);
      console.log("Final title in formData:", formData.title);
      this.documentsService.updateDocument(this.currentDocument.id, formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.close();
          this.showSuccessMessage(this.translate("documents.edit_document_success"));
          this.documentUpdated.emit();
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error("Error updating document:", error);
          console.error("Error status:", error.status);
          console.error("Error statusText:", error.statusText);
          console.error("Error error:", error.error);
          console.error("Error message:", error.message);
          console.error("Error URL:", error.url);
          let errorMessage = "Unknown error occurred";
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.error?.errors) {
            const validationErrors = error.error.errors;
            const errorMessages = Object.keys(validationErrors).map((key) => `${key}: ${validationErrors[key].join(", ")}`);
            errorMessage = errorMessages.join("; ");
          } else if (error.message) {
            errorMessage = error.message;
          }
          this.showErrorMessage(this.translate("common.error") + ": " + errorMessage);
        }
      });
    } else {
      console.log("Form is not valid or no current document");
      console.log("Form valid:", this.documentForm.valid);
      console.log("Current document:", this.currentDocument);
      console.log("Form errors:", this.documentForm.errors);
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.documentForm.controls).forEach((key) => {
      const control = this.documentForm.get(key);
      control?.markAsTouched();
    });
  }
  getFieldError(fieldName) {
    const field = this.documentForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return this.translate("common.field_required");
      }
      if (field.errors["minlength"]) {
        return this.translate("common.min_length_error");
      }
    }
    return "";
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  // Document type options - converted to properties to avoid infinite change detection
  documentTypes = [];
  documentSources = [];
  constructor(fb, documentsService, translationService) {
    this.fb = fb;
    this.documentsService = documentsService;
    this.translationService = translationService;
    this.documentForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      type: [DocumentType.Other, [Validators.required]],
      documentSource: [DocumentSource.Internal, [Validators.required]],
      description: [""]
    });
    this.initializeOptions();
  }
  initializeOptions() {
    this.documentTypes = [
      { value: DocumentType.Letter, label: this.translate("documents.types.0") },
      { value: DocumentType.Task, label: this.translate("documents.types.1") },
      { value: DocumentType.Meeting, label: this.translate("documents.types.2") },
      { value: DocumentType.Minute, label: this.translate("documents.types.3") },
      { value: DocumentType.Contract, label: this.translate("documents.types.4") },
      { value: DocumentType.Report, label: this.translate("documents.types.5") },
      { value: DocumentType.Image, label: this.translate("documents.types.6") },
      { value: DocumentType.Scan, label: this.translate("documents.types.7") },
      { value: DocumentType.Other, label: this.translate("documents.types.8") }
    ];
    this.documentSources = [
      { value: DocumentSource.Internal, label: this.translate("documents.sources.0") },
      { value: DocumentSource.External, label: this.translate("documents.sources.1") }
    ];
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
  // Event emitter for parent component
  documentUpdated = new EventEmitter();
  static \u0275fac = function EditDocument_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditDocument)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DocumentsService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditDocument, selectors: [["app-edit-document"]], viewQuery: function EditDocument_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, outputs: { documentUpdated: "documentUpdated" }, standalone: false, decls: 3, vars: 1, consts: [["confirmationModal", ""], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header", 3, "dir"], [1, "modal-title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "me-2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [3, "ngSubmit", "formGroup"], [1, "modal-body"], [1, "row", "g-3"], [1, "col-12"], ["for", "editTitle", 1, "form-label"], [1, "text-danger"], ["type", "text", "id", "editTitle", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-md-6"], ["for", "editType", 1, "form-label"], ["id", "editType", "formControlName", "type", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "editDocumentSource", 1, "form-label"], ["id", "editDocumentSource", "formControlName", "documentSource", 1, "form-select"], ["for", "editDescription", 1, "form-label"], ["id", "editDescription", "formControlName", "description", "rows", "3", 1, "form-control", 3, "placeholder"], ["class", "col-12", 4, "ngIf"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], [3, "value"], [1, "form-label"], [1, "alert", "alert-info", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-file", "me-2"], [1, "text-muted", "ms-2"], [1, "text-muted"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function EditDocument_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EditDocument_div_0_Template, 45, 29, "div", 1);
      \u0275\u0275element(1, "app-confirmation-modal", null, 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ConfirmationModalComponent], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  background: #D4AF5F;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1.5rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n  flex-direction: row;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end][_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-title[class*=text-start][_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  text-align: left !important;\n}\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n}\n.form-control.is-invalid[_ngcontent-%COMP%], \n.form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl][_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=edit-document-KPU534XU.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditDocument, [{
    type: Component,
    args: [{ selector: "app-edit-document", standalone: false, template: `<!-- Edit Document Modal -->\r
<div class="modal-overlay" *ngIf="isVisible" (click)="close()">\r
  <div class="modal-container" (click)="$event.stopPropagation()">\r
    <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
      <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">\r
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\r
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\r
        </svg>\r
        {{ translate('documents.edit_document') }}\r
      </h5>\r
    </div>\r
      \r
      <form [formGroup]="documentForm" (ngSubmit)="onSubmit()">\r
        <div class="modal-body">\r
          <div class="row g-3">\r
            <!-- Title -->\r
            <div class="col-12">\r
              <label for="editTitle" class="form-label">\r
                {{ translate('documents.title') }} <span class="text-danger">*</span>\r
              </label>\r
              <input \r
                type="text" \r
                class="form-control" \r
                id="editTitle"\r
                formControlName="title"\r
                [class.is-invalid]="documentForm.get('title')?.invalid && documentForm.get('title')?.touched"\r
                [placeholder]="translate('documents.title_placeholder')">\r
              <div class="invalid-feedback" *ngIf="getFieldError('title')">\r
                {{ getFieldError('title') }}\r
              </div>\r
            </div>\r
\r
            <!-- Type -->\r
            <div class="col-md-6">\r
              <label for="editType" class="form-label">\r
                {{ translate('documents.type') }} <span class="text-danger">*</span>\r
              </label>\r
              <select \r
                class="form-select" \r
                id="editType"\r
                formControlName="type"\r
                [class.is-invalid]="documentForm.get('type')?.invalid && documentForm.get('type')?.touched">\r
                <option *ngFor="let type of documentTypes" [value]="type.value">\r
                  {{ type.label }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="getFieldError('type')">\r
                {{ getFieldError('type') }}\r
              </div>\r
            </div>\r
\r
            <!-- Document Source -->\r
            <div class="col-md-6">\r
              <label for="editDocumentSource" class="form-label">\r
                {{ translate('documents.source') }} <span class="text-danger">*</span>\r
              </label>\r
              <select \r
                class="form-select" \r
                id="editDocumentSource"\r
                formControlName="documentSource"\r
                [class.is-invalid]="documentForm.get('documentSource')?.invalid && documentForm.get('documentSource')?.touched">\r
                <option *ngFor="let source of documentSources" [value]="source.value">\r
                  {{ source.label }}\r
                </option>\r
              </select>\r
              <div class="invalid-feedback" *ngIf="getFieldError('documentSource')">\r
                {{ getFieldError('documentSource') }}\r
              </div>\r
            </div>\r
\r
            <!-- Description -->\r
            <div class="col-12">\r
              <label for="editDescription" class="form-label">\r
                {{ translate('documents.description') }}\r
              </label>\r
              <textarea \r
                class="form-control" \r
                id="editDescription"\r
                formControlName="description"\r
                rows="3"\r
                [placeholder]="translate('documents.description_placeholder')"></textarea>\r
            </div>\r
\r
            <!-- Current File Info -->\r
            <div class="col-12" *ngIf="currentDocument">\r
              <label class="form-label">{{ translate('documents.current_file') }}</label>\r
              <div class="alert alert-info d-flex justify-content-between align-items-center">\r
                <div class="d-flex align-items-center">\r
                  <i class="fas fa-file me-2"></i>\r
                  <span>{{ currentDocument.fileName }}{{ currentDocument.fileExtension }}</span>\r
                  <small class="text-muted ms-2">({{ formatFileSize(currentDocument.fileSize) }})</small>\r
                </div>\r
                <small class="text-muted">{{ translate('documents.file_cannot_be_changed') }}</small>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="modal-footer">\r
          <button \r
            type="submit" \r
            class="btn btn-primary" \r
            [disabled]="isSubmitting || documentForm.invalid">\r
            <span *ngIf="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r
            {{ translate('common.save') }}\r
          </button>\r
          <button type="button" class="btn btn-secondary" (click)="close()">\r
            {{ translate('common.cancel') }}\r
          </button>\r
        </div>\r
      </form>\r
  </div>\r
</div>\r
\r
<!-- Confirmation Modal -->\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
`, styles: ["/* src/app/components/documents/edit-document/edit-document.css */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  max-width: 600px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  background: #D4AF5F;\n  display: flex;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1.5rem 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  margin-bottom: 1.5rem;\n  flex-direction: row;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-header[dir=rtl] {\n  justify-content: flex-end;\n}\n.modal-header[dir=ltr] {\n  justify-content: flex-start;\n}\n.modal-title[class*=text-end] {\n  text-align: right !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-title[class*=text-start] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  order: 1;\n}\n.modal-header[dir=rtl] .modal-title {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  text-align: right !important;\n}\n.modal-header[dir=ltr] .modal-title {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  text-align: left !important;\n}\n.btn-close {\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-close:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-body {\n  padding: 0 1.5rem;\n}\n.modal-footer {\n  padding: 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n}\n.form-label {\n  font-weight: 500;\n  color: #495057;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.invalid-feedback {\n  display: block;\n}\n.form-control.is-invalid,\n.form-select.is-invalid {\n  border-color: #dc3545;\n}\n.alert-info {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  color: #0c5460;\n}\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 768px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-body {\n    padding: 1rem;\n  }\n  .modal-footer {\n    padding: 0.75rem 1rem;\n  }\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n[dir=rtl] .ms-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0 !important;\n}\n/*# sourceMappingURL=edit-document-KPU534XU.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: DocumentsService }, { type: TranslationService }], { fileInput: [{
    type: ViewChild,
    args: ["fileInput"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }], documentUpdated: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditDocument, { className: "EditDocument", filePath: "src/app/components/documents/edit-document/edit-document.ts", lineNumber: 14 });
})();

// src/app/components/documents/documents-list/documents-list.ts
var _c03 = ["addDocumentModal"];
var _c13 = ["editDocumentModal"];
var _c2 = ["confirmationModal"];
function DocumentsList_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.loading_documents"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.loading_documents"));
  }
}
function DocumentsList_div_66_div_23_tr_21_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", document_r5.description, " ");
  }
}
function DocumentsList_div_66_div_23_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DocumentsList_div_66_div_23_tr_21_div_5_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "div", 49);
    \u0275\u0275element(14, "i", 50);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 51)(25, "button", 52);
    \u0275\u0275listener("click", function DocumentsList_div_66_div_23_tr_21_Template_button_click_25_listener() {
      const document_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.downloadDocument(document_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 53);
    \u0275\u0275element(27, "path", 54)(28, "polyline", 55)(29, "line", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "button", 57);
    \u0275\u0275listener("click", function DocumentsList_div_66_div_23_tr_21_Template_button_click_30_listener() {
      const document_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editDocument(document_r5));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(31, "svg", 58);
    \u0275\u0275element(32, "path", 59)(33, "path", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "button", 61);
    \u0275\u0275listener("click", function DocumentsList_div_66_div_23_tr_21_Template_button_click_34_listener() {
      const document_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteDocument(document_r5.id, document_r5.title));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 62);
    \u0275\u0275element(36, "polyline", 63)(37, "path", 64)(38, "path", 65)(39, "path", 66)(40, "path", 67);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const document_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(document_r5.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getTypeBadgeClass(document_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTypeLabel(document_r5.type), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getDocumentSourceBadgeClass(document_r5.documentSource));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getDocumentSourceLabel(document_r5.documentSource), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", document_r5.fileName, "", document_r5.fileExtension);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatFileSize(document_r5.fileSize));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(document_r5.createdByName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(document_r5.createdAt));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.translate("documents.download"));
    \u0275\u0275advance(5);
    \u0275\u0275property("title", ctx_r1.translate("common.edit"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.translate("common.delete"));
  }
}
function DocumentsList_div_66_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "table", 45)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(21, DocumentsList_div_66_div_23_tr_21_Template, 41, 14, "tr", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.type"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.source"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.file_name"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.file_size"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.created_by"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.created_at"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredDocuments);
  }
}
function DocumentsList_div_66_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 69);
    \u0275\u0275element(2, "i", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function DocumentsList_div_66_div_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.no_documents_found"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("documents.no_documents_message"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.add_first_document"), " ");
  }
}
function DocumentsList_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 35)(3, "div", 36)(4, "div", 37)(5, "div")(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 39)(12, "label", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_div_66_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DocumentsList_div_66_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange());
    });
    \u0275\u0275elementStart(15, "option", 16);
    \u0275\u0275text(16, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 16);
    \u0275\u0275text(18, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 16);
    \u0275\u0275text(20, "25");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 16);
    \u0275\u0275text(22, "50");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, DocumentsList_div_66_div_23_Template, 22, 9, "div", 42)(24, DocumentsList_div_66_div_24_Template, 9, 3, "div", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.showing_results"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("documents.documents_found"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.translate("documents.items_per_page"), ":");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 25);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.filteredDocuments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredDocuments.length === 0 && !ctx_r1.isLoading);
  }
}
function DocumentsList_div_67_li_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 76)(1, "button", 90);
    \u0275\u0275listener("click", function DocumentsList_div_67_li_28_Template_button_click_1_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange(page_r9));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r9 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.translate("common.page") + " " + page_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r9, " ");
  }
}
function DocumentsList_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 71)(3, "div", 72)(4, "span", 73);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "nav", 74)(16, "ul", 75)(17, "li", 76)(18, "button", 77);
    \u0275\u0275listener("click", function DocumentsList_div_67_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 78);
    \u0275\u0275element(20, "polyline", 79)(21, "polyline", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "li", 76)(23, "button", 81);
    \u0275\u0275listener("click", function DocumentsList_div_67_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage - 1));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 78);
    \u0275\u0275element(25, "polyline", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span", 83);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, DocumentsList_div_67_li_28_Template, 3, 4, "li", 84);
    \u0275\u0275elementStart(29, "li", 76)(30, "button", 85);
    \u0275\u0275listener("click", function DocumentsList_div_67_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(31, "span", 83);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 78);
    \u0275\u0275element(34, "polyline", 86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "li", 76)(36, "button", 87);
    \u0275\u0275listener("click", function DocumentsList_div_67_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange(ctx_r1.totalPages));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 78);
    \u0275\u0275element(38, "polyline", 88)(39, "polyline", 89);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.showing"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.to"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.Math.min(ctx_r1.currentPage * ctx_r1.pageSize, ctx_r1.totalCount));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.of"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.translate("common.results"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1)("title", ctx_r1.translate("common.first_page"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1)("title", ctx_r1.translate("common.previous"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.previous"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages)("title", ctx_r1.translate("common.next"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.translate("common.next"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages)("title", ctx_r1.translate("common.last_page"));
  }
}
var DocumentsList = class _DocumentsList {
  documentsService;
  translationService;
  addDocumentModal;
  editDocumentModal;
  confirmationModal;
  allDocuments = [];
  filteredDocuments = [];
  searchTerm = "";
  isLoading = false;
  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  // Filters
  selectedType = null;
  selectedDocumentSource = null;
  fromDate = "";
  toDate = "";
  constructor(documentsService, translationService) {
    this.documentsService = documentsService;
    this.translationService = translationService;
  }
  documentTypes = {};
  documentSources = {};
  ngOnInit() {
    this.initializeTranslations();
    this.loadDocuments();
  }
  initializeTranslations() {
    this.documentTypes = {
      0: this.translate("documents.types.0"),
      1: this.translate("documents.types.1"),
      2: this.translate("documents.types.2"),
      3: this.translate("documents.types.3"),
      4: this.translate("documents.types.4"),
      5: this.translate("documents.types.5"),
      6: this.translate("documents.types.6"),
      7: this.translate("documents.types.7"),
      8: this.translate("documents.types.8")
    };
    this.documentSources = {
      0: this.translate("documents.sources.0"),
      1: this.translate("documents.sources.1")
    };
  }
  loadDocuments() {
    this.isLoading = true;
    const params = {
      search: this.searchTerm || void 0,
      type: this.selectedType || void 0,
      documentSource: this.selectedDocumentSource || void 0,
      from: this.fromDate || void 0,
      to: this.toDate || void 0,
      pageSize: this.pageSize,
      pageNumber: this.currentPage
    };
    this.documentsService.getAllDocuments(params).subscribe({
      next: (res) => {
        console.log("Documents loaded:", res.data.items);
        this.allDocuments = res.data.items;
        this.totalCount = res.data.totalCount;
        this.currentPage = res.data.page;
        this.pageSize = res.data.pageSize;
        this.filteredDocuments = [...this.allDocuments];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading documents:", error);
        this.isLoading = false;
      }
    });
  }
  onSearchChange() {
    this.currentPage = 1;
    this.loadDocuments();
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadDocuments();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadDocuments();
  }
  onPageSizeChange() {
    this.currentPage = 1;
    this.loadDocuments();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedType = null;
    this.selectedDocumentSource = null;
    this.fromDate = "";
    this.toDate = "";
    this.currentPage = 1;
    this.loadDocuments();
  }
  getTypeLabel(type) {
    return this.documentTypes[type] || this.translate("documents.unknown");
  }
  getDocumentSourceLabel(source) {
    return this.documentSources[source] || this.translate("documents.unknown");
  }
  openAddModal() {
    this.addDocumentModal.open();
  }
  editDocument(document2) {
    this.editDocumentModal.open(document2);
  }
  deleteDocument(id, title) {
    const confirmData = {
      title: this.translationService.translate("documents.delete_document"),
      message: this.translationService.translate("documents.confirm_delete_document"),
      confirmText: this.translationService.translate("common.delete"),
      cancelText: this.translationService.translate("common.cancel"),
      type: "delete"
    };
    this.confirmationModal.show(confirmData);
    const subscription = this.confirmationModal.confirm.subscribe(() => {
      console.log("User confirmed deletion for document ID:", id);
      console.log("Making DELETE request to:", `${this.documentsService.apiUrl}/${id}`);
      this.documentsService.deleteDocument(id).subscribe({
        next: (res) => {
          console.log("Document deleted successfully:", res);
          this.allDocuments = this.allDocuments.filter((d) => d.id !== id);
          this.filteredDocuments = this.filteredDocuments.filter((d) => d.id !== id);
          this.totalCount = Math.max(0, this.totalCount - 1);
          this.showSuccessMessage(this.translationService.translate("documents.delete_document_success"));
          subscription.unsubscribe();
        },
        error: (error) => {
          console.error("Error deleting document:", error);
          console.error("Error details:", {
            status: error.status,
            statusText: error.statusText,
            error: error.error,
            message: error.message,
            url: error.url
          });
          let errorMessage = this.translate("documents.unknown_error");
          if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          if (error.status === 400) {
            errorMessage = this.translate("documents.delete_constraint_error");
          } else if (error.status === 404) {
            errorMessage = this.translate("documents.document_not_found");
          } else if (error.status === 500) {
            errorMessage = this.translate("documents.server_error");
          } else if (error.status) {
            errorMessage = `HTTP ${error.status}: ${error.statusText || "Server Error"}`;
          }
          this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
          subscription.unsubscribe();
        }
      });
    });
  }
  downloadDocument(documentItem) {
    this.documentsService.downloadDocument(documentItem.id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = documentItem.fileName + documentItem.fileExtension;
        link.click();
        window.URL.revokeObjectURL(url);
        this.showSuccessMessage(this.translationService.translate("documents.download_success"));
      },
      error: (error) => {
        console.error("Error downloading document:", error);
        const errorMessage = error.error?.message || error.message || "Unknown error occurred";
        this.showErrorMessage(this.translationService.translate("common.error") + ": " + errorMessage);
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
  getTypeBadgeClass(type) {
    switch (type) {
      case DocumentType.Letter:
        return "badge-letter";
      // Blue gradient
      case DocumentType.Task:
        return "badge-task";
      // Green gradient
      case DocumentType.Meeting:
        return "badge-meeting";
      // Orange gradient
      case DocumentType.Minute:
        return "badge-minute";
      // Purple gradient
      case DocumentType.Contract:
        return "badge-contract";
      // Red gradient
      case DocumentType.Report:
        return "badge-report";
      // Teal gradient
      case DocumentType.Image:
        return "badge-image";
      // Pink gradient
      case DocumentType.Scan:
        return "badge-scan";
      // Indigo gradient
      case DocumentType.Other:
        return "badge-other";
      // Gray gradient
      default:
        return "badge-other";
    }
  }
  getDocumentSourceBadgeClass(source) {
    switch (source) {
      case DocumentSource.Internal:
        return "badge-internal";
      case DocumentSource.External:
        return "badge-external";
      default:
        return "badge-unknown-source";
    }
  }
  formatFileSize(bytes) {
    if (bytes === 0)
      return this.translate("documents.0_bytes");
    const k = 1024;
    const sizes = [this.translate("documents.bytes"), this.translate("documents.kb"), this.translate("documents.mb"), this.translate("documents.gb")];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  static \u0275fac = function DocumentsList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsList)(\u0275\u0275directiveInject(DocumentsService), \u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsList, selectors: [["app-documents-list"]], viewQuery: function DocumentsList_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c13, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addDocumentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editDocumentModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.confirmationModal = _t.first);
    }
  }, standalone: false, decls: 74, vars: 46, consts: [["addDocumentModal", ""], ["editDocumentModal", ""], ["confirmationModal", ""], [1, "documents-container", "rounded-5", 3, "dir"], [1, "documents-header", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "documents-title"], [1, "d-flex", "gap-2"], [1, "btn", "btn-primary", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "search-section", "mb-4"], [1, "row", "g-3", "mb-3"], [1, "col-md-2"], [1, "form-label"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], [1, "col-md-2", "h-100"], [1, "form-select", "h-100", 3, "ngModelChange", "change", "ngModel"], [1, "row", "g-3"], [1, "search-input-wrapper", "col-md-6"], ["type", "text", 1, "form-control", "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "col-md-3", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-primary", "search-button", 3, "click", "disabled"], [1, "bi", "bi-search", "me-1"], [1, "btn", "btn-outline-secondary", 3, "click"], ["class", "row", 4, "ngIf"], [3, "documentAdded"], [3, "documentUpdated"], [1, "row"], [1, "col-12"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-label", "mb-0"], [1, "form-select", "form-select-sm", 2, "width", "auto", 3, "ngModelChange", "change", "ngModel"], ["class", "table-responsive", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["class", "text-muted small", 4, "ngIf"], [1, "badge", 3, "ngClass"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-file", "me-2"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-primary", "rounded-3", "p-3", 3, "click", "title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Download", 1, "nav-icon"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "btn", "btn-sm", "btn-outline-warning", "rounded-3", "p-3", 3, "click", "title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Edit", 1, "nav-icon"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], [1, "btn", "btn-sm", "btn-outline-danger", "rounded-3", "p-3", 3, "click", "title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-label", "Delete", 1, "nav-icon"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "text-muted", "small"], [1, "mb-3"], [1, "fas", "fa-file-alt", "fa-3x", "text-muted"], [1, "pagination-container"], [1, "pagination-info"], [1, "pagination-text"], ["aria-label", "Documents pagination", 1, "pagination-nav"], [1, "pagination"], [1, "page-item"], [1, "page-link", "page-link-first", 3, "click", "disabled", "title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "11 17 6 12 11 7"], ["points", "18 17 13 12 18 7"], [1, "page-link", "page-link-prev", 3, "click", "disabled", "title"], ["points", "15 18 9 12 15 6"], [1, "page-text"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", "page-link-next", 3, "click", "disabled", "title"], ["points", "9 18 15 12 9 6"], [1, "page-link", "page-link-last", 3, "click", "disabled", "title"], ["points", "13 17 18 12 13 7"], ["points", "6 17 11 12 6 7"], [1, "page-link", "page-link-number", 3, "click", "title"]], template: function DocumentsList_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "h1", 6);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "button", 8);
      \u0275\u0275listener("click", function DocumentsList_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openAddModal());
      });
      \u0275\u0275element(7, "i", 9);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "label", 13);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function DocumentsList_Template_input_change_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function DocumentsList_Template_input_change_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedType, $event) || (ctx.selectedType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function DocumentsList_Template_select_change_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementStart(23, "option", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 16);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 16);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 16);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 16);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "option", 16);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 16);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 16);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 16);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 16);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 17)(44, "label", 13);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_Template_select_ngModelChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDocumentSource, $event) || (ctx.selectedDocumentSource = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function DocumentsList_Template_select_change_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterChange());
      });
      \u0275\u0275elementStart(47, "option", 16);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 16);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 16);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "label", 13);
      \u0275\u0275text(56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentsList_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function DocumentsList_Template_input_keyup_enter_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchChange());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 22)(59, "button", 23);
      \u0275\u0275listener("click", function DocumentsList_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchChange());
      });
      \u0275\u0275element(60, "i", 24);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 22)(63, "button", 25);
      \u0275\u0275listener("click", function DocumentsList_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearFilters());
      });
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(65, DocumentsList_div_65_Template, 8, 2, "div", 26)(66, DocumentsList_div_66_Template, 25, 11, "div", 26)(67, DocumentsList_div_67_Template, 40, 26, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "app-add-document", 27, 0);
      \u0275\u0275listener("documentAdded", function DocumentsList_Template_app_add_document_documentAdded_68_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadDocuments());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "app-edit-document", 28, 1);
      \u0275\u0275listener("documentUpdated", function DocumentsList_Template_app_edit_document_documentUpdated_70_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadDocuments());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "app-confirmation-modal", null, 2);
    }
    if (rf & 2) {
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("documents.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.translate("documents.add_document"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.translate("documents.from_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("documents.to_date"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("documents.filter_by_type"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedType);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.all_types"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.0"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.1"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.2"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 3);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.3"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 4);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.4"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 5);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.5"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 6);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.6"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 7);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.7"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 8);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.types.8"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("documents.filter_by_source"));
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDocumentSource);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.all_sources"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.sources.0"));
      \u0275\u0275advance();
      \u0275\u0275property("value", 1);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.translate("documents.sources.1"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.translate("documents.search_documents"));
      \u0275\u0275advance();
      \u0275\u0275property("placeholder", ctx.translate("documents.search_documents"));
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.translate("common.search"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.translate("documents.clear_filters"), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading && ctx.totalPages > 1);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ConfirmationModalComponent, AddDocument, EditDocument], styles: ['\n\n.documents-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.documents-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.documents-title[_ngcontent-%COMP%] {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.search-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(212, 170, 58, 0.3);\n}\n.search-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-letter[_ngcontent-%COMP%] {\n  background: #34495E;\n  color: white;\n}\n.badge-task[_ngcontent-%COMP%] {\n  background: #4B5320;\n  color: white;\n}\n.badge-meeting[_ngcontent-%COMP%] {\n  background: #E54B1D;\n  color: white;\n}\n.badge-minute[_ngcontent-%COMP%] {\n  background: #B45253;\n  color: white;\n}\n.badge-contract[_ngcontent-%COMP%] {\n  background: #555555;\n  color: white;\n}\n.badge-report[_ngcontent-%COMP%] {\n  background: #E6D7A2;\n  color: #1B1D21;\n}\n.badge-image[_ngcontent-%COMP%] {\n  background: #1B1D21;\n  color: white;\n}\n.badge-scan[_ngcontent-%COMP%] {\n  background: #2BA149;\n  color: white;\n}\n.badge-other[_ngcontent-%COMP%] {\n  background: #6b7280;\n  color: white;\n}\n.badge-internal[_ngcontent-%COMP%] {\n  background: #3b83f688;\n  color: white;\n}\n.badge-external[_ngcontent-%COMP%] {\n  background: #f59e0b96;\n  color: white;\n}\n.badge-unknown-source[_ngcontent-%COMP%] {\n  background: #6b728096;\n  color: white;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.fa-file[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.text-muted.small[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.2;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  margin-top: 2rem;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pagination-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 600;\n}\n.pagination-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.page-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.page-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  border: 1px solid #e5e7eb;\n  background: #ffffff;\n  color: #374151;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.page-link[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #1f2937;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.page-link[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AA3A,\n      #B68A35);\n  border-color: #D4AA3A;\n  color: #ffffff;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35,\n      #92722A);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(212, 170, 58, 0.4);\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  transform: none;\n  box-shadow: none;\n}\n.page-link-first[_ngcontent-%COMP%], \n.page-link-last[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  min-width: 2.5rem;\n}\n.page-link-prev[_ngcontent-%COMP%], \n.page-link-next[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  min-width: auto;\n}\n.page-link-number[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n  padding: 0.75rem;\n}\n.page-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.page-link[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(212, 170, 58, 0.3);\n  transform: translate(-50%, -50%);\n  transition: width 0.3s, height 0.3s;\n}\n.page-link[_ngcontent-%COMP%]:active::before {\n  width: 100px;\n  height: 100px;\n}\n@media (max-width: 768px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .documents-title[_ngcontent-%COMP%] {\n    color: #D4AA3A;\n    font-weight: 700;\n    font-size: 1.2rem;\n    margin: 0;\n  }\n  .pagination-info[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .pagination-nav[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .pagination[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 0.25rem;\n  }\n  .page-link[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    min-width: 2rem;\n    height: 2rem;\n    font-size: 0.8rem;\n  }\n  .page-link-prev[_ngcontent-%COMP%], \n   .page-link-next[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n  }\n  .page-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pagination-text[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .pagination-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .page-link[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.6rem;\n    min-width: 1.75rem;\n    height: 1.75rem;\n    font-size: 0.75rem;\n  }\n  .page-link-first[_ngcontent-%COMP%], \n   .page-link-last[_ngcontent-%COMP%] {\n    padding: 0.4rem;\n    min-width: 1.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .table-responsive[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .fa-file[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n/*# sourceMappingURL=documents-list-T5KBC44E.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsList, [{
    type: Component,
    args: [{ selector: "app-documents-list", standalone: false, template: `<div class="documents-container rounded-5" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Header Section -->\r
  <div class="documents-header mb-4">\r
    <div class="d-flex justify-content-between align-items-center">\r
      <h1 class="documents-title">{{ translate('documents.title') }}</h1>\r
      <div class="d-flex gap-2">\r
        <button class="btn btn-primary" (click)="openAddModal()">\r
          <i class="bi bi-plus-circle me-2"></i>\r
          {{ translate('documents.add_document') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Search and Filters Section -->\r
  <div class="search-section mb-4">\r
          <!-- First Row -->\r
          <div class="row g-3 mb-3">\r
           \r
            \r
            <!-- Date Range -->\r
            <div class="col-md-2">\r
              <label class="form-label">{{ translate('documents.from_date') }}</label>\r
              <input \r
                type="date" \r
                class="form-control" \r
                [(ngModel)]="fromDate"\r
                (change)="onFilterChange()">\r
            </div>\r
\r
            <div class="col-md-2">\r
              <label class="form-label">{{ translate('documents.to_date') }}</label>\r
              <input \r
                type="date" \r
                class="form-control" \r
                [(ngModel)]="toDate"\r
                (change)="onFilterChange()">\r
            </div>\r
\r
            <!-- Type Filter -->\r
            <div class="col-md-2">\r
              <label class="form-label">{{ translate('documents.filter_by_type') }}</label>\r
              <select \r
                class="form-select " \r
                [(ngModel)]="selectedType"\r
                (change)="onFilterChange()">\r
                <option [value]="null">{{ translate('documents.all_types') }}</option>\r
                <option [value]="0">{{ translate('documents.types.0') }}</option>\r
                <option [value]="1">{{ translate('documents.types.1') }}</option>\r
                <option [value]="2">{{ translate('documents.types.2') }}</option>\r
                <option [value]="3">{{ translate('documents.types.3') }}</option>\r
                <option [value]="4">{{ translate('documents.types.4') }}</option>\r
                <option [value]="5">{{ translate('documents.types.5') }}</option>\r
                <option [value]="6">{{ translate('documents.types.6') }}</option>\r
                <option [value]="7">{{ translate('documents.types.7') }}</option>\r
                <option [value]="8">{{ translate('documents.types.8') }}</option>\r
              </select>\r
            </div>\r
\r
            <!-- Document Source Filter -->\r
            <div class="col-md-2 h-100">\r
              <label class="form-label">{{ translate('documents.filter_by_source') }}</label>\r
              <select \r
                class="form-select h-100" \r
                [(ngModel)]="selectedDocumentSource"\r
                (change)="onFilterChange()">\r
                <option [value]="null">{{ translate('documents.all_sources') }}</option>\r
                <option [value]="0">{{ translate('documents.sources.0') }}</option>\r
                <option [value]="1">{{ translate('documents.sources.1') }}</option>\r
              </select>\r
            </div>\r
\r
          </div>\r
\r
          <!-- Second Row -->\r
          <div class="row g-3">\r
            \r
            <div class="search-input-wrapper col-md-6">\r
              <label class="form-label">{{ translate('documents.search_documents') }}</label>\r
              <input \r
                type="text" \r
                class="form-control search-input" \r
                [placeholder]="translate('documents.search_documents')"\r
                [(ngModel)]="searchTerm"\r
                (keyup.enter)="onSearchChange()">\r
            </div>\r
            <div class="col-md-3 d-flex align-items-end">\r
              <button \r
                class="btn btn-primary search-button" \r
                type="button" \r
                (click)="onSearchChange()"\r
                [disabled]="isLoading">\r
                <i class="bi bi-search me-1"></i>\r
                {{ translate('common.search') }}\r
              </button>\r
            </div>\r
            \r
             <!-- Clear Filters -->\r
             <div class="col-md-3 d-flex align-items-end">\r
              <button class="btn btn-outline-secondary " (click)="clearFilters()">\r
                {{ translate('documents.clear_filters') }}\r
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
          <span class="visually-hidden">{{ translate('documents.loading_documents') }}</span>\r
        </div>\r
        <p class="mt-3 text-muted">{{ translate('documents.loading_documents') }}</p>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Documents List -->\r
  <div class="row" *ngIf="!isLoading">\r
    <div class="col-12">\r
      <div class="card">\r
        <div class="card-body">\r
          <!-- Results Summary -->\r
          <div class="d-flex justify-content-between align-items-center mb-3">\r
            <div>\r
              <span class="text-muted">\r
                {{ translate('documents.showing_results') }}: \r
                <strong>{{ totalCount }}</strong> {{ translate('documents.documents_found') }}\r
              </span>\r
            </div>\r
            <div class="d-flex align-items-center gap-2">\r
              <label class="form-label mb-0">{{ translate('documents.items_per_page') }}:</label>\r
              <select \r
                class="form-select form-select-sm" \r
                style="width: auto;"\r
                [(ngModel)]="pageSize"\r
                (change)="onPageSizeChange()">\r
                <option [value]="5">5</option>\r
                <option [value]="10">10</option>\r
                <option [value]="25">25</option>\r
                <option [value]="50">50</option>\r
              </select>\r
            </div>\r
          </div>\r
\r
          <!-- Documents Table -->\r
          <div class="table-responsive" *ngIf="filteredDocuments.length > 0">\r
            <table class="table table-hover">\r
              <thead>\r
                <tr>\r
                  <th>{{ translate('documents.title') }}</th>\r
                  <th>{{ translate('documents.type') }}</th>\r
                  <th>{{ translate('documents.source') }}</th>\r
                  <th>{{ translate('documents.file_name') }}</th>\r
                  <th>{{ translate('documents.file_size') }}</th>\r
                  <th>{{ translate('documents.created_by') }}</th>\r
                  <th>{{ translate('documents.created_at') }}</th>\r
                  <th>{{ translate('common.actions') }}</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let document of filteredDocuments">\r
                  <td>\r
                    <div>\r
                      <strong>{{ document.title }}</strong>\r
                      <div class="text-muted small" *ngIf="document.description">\r
                        {{ document.description }}\r
                      </div>\r
                    </div>\r
                  </td>\r
                  <td>\r
                    <span class="badge" [ngClass]="getTypeBadgeClass(document.type)">\r
                      {{ getTypeLabel(document.type) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <span class="badge" [ngClass]="getDocumentSourceBadgeClass(document.documentSource)">\r
                      {{ getDocumentSourceLabel(document.documentSource) }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <div class="d-flex align-items-center">\r
                      <i class="fas fa-file me-2"></i>\r
                      <span>{{ document.fileName }}{{ document.fileExtension }}</span>\r
                    </div>\r
                  </td>\r
                  <td>{{ formatFileSize(document.fileSize) }}</td>\r
                  <td>{{ document.createdByName }}</td>\r
                  <td>{{ formatDate(document.createdAt) }}</td>\r
                  <td>\r
                    <div class="btn-group" role="group">\r
                      <button \r
                        class="btn btn-sm btn-outline-primary rounded-3 p-3" \r
                        (click)="downloadDocument(document)"\r
                        [title]="translate('documents.download')">\r
                        <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" \r
                                fill="none" stroke="currentColor" stroke-width="2" \r
                                stroke-linecap="round" stroke-linejoin="round" aria-label="Download">\r
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>\r
                            <polyline points="7 10 12 15 17 10"></polyline>\r
                            <line x1="12" y1="15" x2="12" y2="3"></line>\r
                        </svg>\r
                      </button>\r
                      <button \r
                        class="btn btn-sm btn-outline-warning rounded-3 p-3" \r
                        (click)="editDocument(document)"\r
                        [title]="translate('common.edit')">\r
                        <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" \r
                                fill="none" stroke="currentColor" stroke-width="2" \r
                                stroke-linecap="round" stroke-linejoin="round" aria-label="Edit">\r
                            <path d="M12 20h9"></path>\r
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>\r
                        </svg>\r
                      </button>\r
                      <button \r
                        class="btn btn-sm btn-outline-danger rounded-3 p-3" \r
                        (click)="deleteDocument(document.id, document.title)"\r
                        [title]="translate('common.delete')">\r
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
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
\r
          <!-- No Results -->\r
          <div class="text-center py-5" *ngIf="filteredDocuments.length === 0 && !isLoading">\r
            <div class="mb-3">\r
              <i class="fas fa-file-alt fa-3x text-muted"></i>\r
            </div>\r
            <h5 class="text-muted">{{ translate('documents.no_documents_found') }}</h5>\r
            <p class="text-muted">{{ translate('documents.no_documents_message') }}</p>\r
            <button class="btn btn-primary" (click)="openAddModal()">\r
              {{ translate('documents.add_first_document') }}\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Pagination -->\r
  <div class="row" *ngIf="!isLoading && totalPages > 1">\r
    <div class="col-12">\r
      <div class="pagination-container">\r
        <div class="pagination-info">\r
          <span class="pagination-text">\r
            {{ translate('common.showing') }} \r
            <strong>{{ ((currentPage - 1) * pageSize) + 1 }}</strong> \r
            {{ translate('common.to') }} \r
            <strong>{{ Math.min(currentPage * pageSize, totalCount) }}</strong> \r
            {{ translate('common.of') }} \r
            <strong>{{ totalCount }}</strong> \r
            {{ translate('common.results') }}\r
          </span>\r
        </div>\r
        \r
        <nav aria-label="Documents pagination" class="pagination-nav">\r
          <ul class="pagination">\r
            <!-- First Page -->\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
              <button \r
                class="page-link page-link-first" \r
                (click)="onPageChange(1)" \r
                [disabled]="currentPage === 1"\r
                [title]="translate('common.first_page')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="11 17 6 12 11 7"></polyline>\r
                  <polyline points="18 17 13 12 18 7"></polyline>\r
                </svg>\r
              </button>\r
            </li>\r
            \r
            <!-- Previous Page -->\r
            <li class="page-item" [class.disabled]="currentPage === 1">\r
              <button \r
                class="page-link page-link-prev" \r
                (click)="onPageChange(currentPage - 1)" \r
                [disabled]="currentPage === 1"\r
                [title]="translate('common.previous')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="15 18 9 12 15 6"></polyline>\r
                </svg>\r
                <span class="page-text">{{ translate('common.previous') }}</span>\r
              </button>\r
            </li>\r
            \r
            <!-- Page Numbers -->\r
            <li class="page-item" *ngFor="let page of pages" [class.active]="page === currentPage">\r
              <button \r
                class="page-link page-link-number" \r
                (click)="onPageChange(page)"\r
                [title]="translate('common.page') + ' ' + page">\r
                {{ page }}\r
              </button>\r
            </li>\r
            \r
            <!-- Next Page -->\r
            <li class="page-item" [class.disabled]="currentPage === totalPages">\r
              <button \r
                class="page-link page-link-next" \r
                (click)="onPageChange(currentPage + 1)" \r
                [disabled]="currentPage === totalPages"\r
                [title]="translate('common.next')">\r
                <span class="page-text">{{ translate('common.next') }}</span>\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="9 18 15 12 9 6"></polyline>\r
                </svg>\r
              </button>\r
            </li>\r
            \r
            <!-- Last Page -->\r
            <li class="page-item" [class.disabled]="currentPage === totalPages">\r
              <button \r
                class="page-link page-link-last" \r
                (click)="onPageChange(totalPages)" \r
                [disabled]="currentPage === totalPages"\r
                [title]="translate('common.last_page')">\r
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="13 17 18 12 13 7"></polyline>\r
                  <polyline points="6 17 11 12 6 7"></polyline>\r
                </svg>\r
              </button>\r
            </li>\r
          </ul>\r
        </nav>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modals -->\r
<app-add-document #addDocumentModal (documentAdded)="loadDocuments()"></app-add-document>\r
<app-edit-document #editDocumentModal (documentUpdated)="loadDocuments()"></app-edit-document>\r
<app-confirmation-modal #confirmationModal></app-confirmation-modal>\r
`, styles: ['/* src/app/components/documents/documents-list/documents-list.css */\n.documents-container {\n  padding: 2rem;\n  min-height: 100vh;\n}\n.documents-header {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.documents-title {\n  color: #5F646D;\n  font-weight: 700;\n  font-size: 2rem;\n  margin: 0;\n}\n.search-section {\n  background: white;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.search-input-wrapper {\n  position: relative;\n}\n.search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 10;\n}\n.search-input {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 2px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n.search-input:focus {\n  border-color: #D4AA3A;\n  box-shadow: 0 0 0 0.2rem rgba(212, 170, 58, 0.25);\n}\n.search-button {\n  width: 100%;\n  height: 38px;\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.search-button:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(212, 170, 58, 0.3);\n}\n.search-button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.table-responsive {\n  border-radius: 0.375rem;\n}\n.title {\n  font-weight: 600;\n  color: #333;\n}\n.table th {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n.table td {\n  vertical-align: middle;\n}\n.badge {\n  font-size: 0.75rem;\n  padding: 0.375rem 0.75rem;\n  font-weight: 600;\n  border-radius: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.badge-letter {\n  background: #34495E;\n  color: white;\n}\n.badge-task {\n  background: #4B5320;\n  color: white;\n}\n.badge-meeting {\n  background: #E54B1D;\n  color: white;\n}\n.badge-minute {\n  background: #B45253;\n  color: white;\n}\n.badge-contract {\n  background: #555555;\n  color: white;\n}\n.badge-report {\n  background: #E6D7A2;\n  color: #1B1D21;\n}\n.badge-image {\n  background: #1B1D21;\n  color: white;\n}\n.badge-scan {\n  background: #2BA149;\n  color: white;\n}\n.badge-other {\n  background: #6b7280;\n  color: white;\n}\n.badge-internal {\n  background: #3b83f688;\n  color: white;\n}\n.badge-external {\n  background: #f59e0b96;\n  color: white;\n}\n.badge-unknown-source {\n  background: #6b728096;\n  color: white;\n}\n.btn-group .btn {\n  margin-right: 0.25rem;\n}\n.btn-group .btn:last-child {\n  margin-right: 0;\n}\n.fa-file {\n  color: #6c757d;\n}\n.text-muted.small {\n  font-size: 0.875rem;\n  line-height: 1.2;\n}\n.spinner-border {\n  width: 3rem;\n  height: 3rem;\n}\n.pagination-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e5e7eb;\n  margin-top: 2rem;\n}\n.pagination-info {\n  display: flex;\n  align-items: center;\n}\n.pagination-text {\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.pagination-text strong {\n  color: #374151;\n  font-weight: 600;\n}\n.pagination-nav {\n  display: flex;\n  align-items: center;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.page-item {\n  display: flex;\n  align-items: center;\n}\n.page-link {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  min-width: 2.5rem;\n  height: 2.5rem;\n  border: 1px solid #e5e7eb;\n  background: #ffffff;\n  color: #374151;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.875rem;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.page-link:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #1f2937;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.page-link:active:not(:disabled) {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.page-item.active .page-link {\n  background:\n    linear-gradient(\n      135deg,\n      #D4AA3A,\n      #B68A35);\n  border-color: #D4AA3A;\n  color: #ffffff;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(212, 170, 58, 0.3);\n}\n.page-item.active .page-link:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #B68A35,\n      #92722A);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(212, 170, 58, 0.4);\n}\n.page-item.disabled .page-link {\n  color: #9ca3af;\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.page-item.disabled .page-link:hover {\n  background: #f9fafb;\n  border-color: #e5e7eb;\n  transform: none;\n  box-shadow: none;\n}\n.page-link-first,\n.page-link-last {\n  padding: 0.75rem;\n  min-width: 2.5rem;\n}\n.page-link-prev,\n.page-link-next {\n  padding: 0.75rem 1.25rem;\n  min-width: auto;\n}\n.page-link-number {\n  min-width: 2.5rem;\n  padding: 0.75rem;\n}\n.page-text {\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.page-link::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  background: rgba(212, 170, 58, 0.3);\n  transform: translate(-50%, -50%);\n  transition: width 0.3s, height 0.3s;\n}\n.page-link:active::before {\n  width: 100px;\n  height: 100px;\n}\n@media (max-width: 768px) {\n  .pagination-container {\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n  }\n  .documents-title {\n    color: #D4AA3A;\n    font-weight: 700;\n    font-size: 1.2rem;\n    margin: 0;\n  }\n  .pagination-info {\n    order: 2;\n  }\n  .pagination-nav {\n    order: 1;\n  }\n  .pagination {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 0.25rem;\n  }\n  .page-link {\n    padding: 0.5rem 0.75rem;\n    min-width: 2rem;\n    height: 2rem;\n    font-size: 0.8rem;\n  }\n  .page-link-prev,\n  .page-link-next {\n    padding: 0.5rem 0.75rem;\n  }\n  .page-text {\n    display: none;\n  }\n  .pagination-text {\n    font-size: 0.8rem;\n    text-align: center;\n  }\n}\n@media (max-width: 480px) {\n  .pagination-container {\n    padding: 0.75rem;\n  }\n  .page-link {\n    padding: 0.4rem 0.6rem;\n    min-width: 1.75rem;\n    height: 1.75rem;\n    font-size: 0.75rem;\n  }\n  .page-link-first,\n  .page-link-last {\n    padding: 0.4rem;\n    min-width: 1.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .btn-group {\n    flex-direction: column;\n  }\n  .btn-group .btn {\n    margin-right: 0;\n    margin-bottom: 0.25rem;\n  }\n  .btn-group .btn:last-child {\n    margin-bottom: 0;\n  }\n  .table-responsive {\n    font-size: 0.875rem;\n  }\n}\n[dir=rtl] .btn-group .btn {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n[dir=rtl] .btn-group .btn:last-child {\n  margin-left: 0;\n}\n[dir=rtl] .fa-file {\n  margin-left: 0.5rem;\n  margin-right: 0;\n}\n/*# sourceMappingURL=documents-list-T5KBC44E.css.map */\n'] }]
  }], () => [{ type: DocumentsService }, { type: TranslationService }], { addDocumentModal: [{
    type: ViewChild,
    args: ["addDocumentModal"]
  }], editDocumentModal: [{
    type: ViewChild,
    args: ["editDocumentModal"]
  }], confirmationModal: [{
    type: ViewChild,
    args: ["confirmationModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsList, { className: "DocumentsList", filePath: "src/app/components/documents/documents-list/documents-list.ts", lineNumber: 15 });
})();

// src/app/components/documents/documents-routing.module.ts
var routes = [
  {
    path: "",
    component: DocumentsList
  }
];
var DocumentsRoutingModule = class _DocumentsRoutingModule {
  static \u0275fac = function DocumentsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DocumentsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/components/documents/documents-confirmation-modal/documents-confirmation-modal.component.ts
function DocumentsConfirmationModalComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DocumentsConfirmationModalComponent_button_11_Template_button_click_0_listener() {
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
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.cancelText, " ");
  }
}
function DocumentsConfirmationModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("show", ctx_r1.showModal);
  }
}
var DocumentsConfirmationModalComponent = class _DocumentsConfirmationModalComponent {
  translationService;
  showModal = false;
  data = {
    title: "",
    message: "",
    confirmText: "",
    cancelText: "",
    type: "info"
  };
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  constructor(translationService) {
    this.translationService = translationService;
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  show(confirmationData) {
    this.data = confirmationData;
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  onConfirm() {
    this.confirm.emit();
    this.hide();
  }
  onCancel() {
    this.cancel.emit();
    this.hide();
  }
  getModalClass() {
    switch (this.data.type) {
      case "delete":
        return "modal-danger";
      case "warning":
        return "modal-warning";
      case "success":
        return "modal-success";
      default:
        return "modal-info";
    }
  }
  getIconClass() {
    switch (this.data.type) {
      case "delete":
        return "fas fa-exclamation-triangle text-danger";
      case "warning":
        return "fas fa-exclamation-triangle text-warning";
      case "success":
        return "fas fa-check-circle text-success";
      default:
        return "fas fa-info-circle text-info";
    }
  }
  getConfirmButtonClass() {
    switch (this.data.type) {
      case "delete":
        return "btn-danger";
      case "warning":
        return "btn-warning";
      case "success":
        return "btn-success";
      default:
        return "btn-primary";
    }
  }
  static \u0275fac = function DocumentsConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsConfirmationModalComponent)(\u0275\u0275directiveInject(TranslationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentsConfirmationModalComponent, selectors: [["app-documents-confirmation-modal"]], standalone: false, decls: 15, vars: 29, consts: [["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", 3, "ngClass"], [1, "modal-header", 3, "dir"], [1, "modal-title"], [3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "innerHTML"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click", "ngClass"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-backdrop", "fade"]], template: function DocumentsConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function DocumentsConfirmationModalComponent_Template_button_click_7_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275element(9, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275template(11, DocumentsConfirmationModalComponent_button_11_Template, 2, 1, "button", 10);
      \u0275\u0275elementStart(12, "button", 11);
      \u0275\u0275listener("click", function DocumentsConfirmationModalComponent_Template_button_click_12_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(14, DocumentsConfirmationModalComponent_div_14_Template, 1, 2, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("display", ctx.showModal ? "block" : "none");
      \u0275\u0275classProp("show", ctx.showModal);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.getModalClass());
      \u0275\u0275advance();
      \u0275\u0275classProp("rtl-header", ctx.isRTL())("ltr-header", !ctx.isRTL());
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-end", ctx.isRTL())("text-start", !ctx.isRTL())("rtl-title", ctx.isRTL())("ltr-title", !ctx.isRTL());
      \u0275\u0275advance();
      \u0275\u0275classProp("me-2", !ctx.isRTL())("ms-2", ctx.isRTL());
      \u0275\u0275property("ngClass", ctx.getIconClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.title, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("innerHTML", ctx.data.message, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.data.cancelText);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.getConfirmButtonClass());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.confirmText, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [NgClass, NgIf], styles: ["\n\n.modal[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog-centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-content[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  gap: 0.5rem;\n}\n.modal-danger[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-bottom-color: #f5c6cb;\n}\n.modal-warning[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-bottom-color: #ffeaa7;\n}\n.modal-success[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-bottom-color: #c3e6cb;\n}\n.modal-info[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-bottom-color: #bee5eb;\n}\n.fas[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #0dcaf0 !important;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #198754;\n  border-color: #198754;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #D4AA3A;\n  border-color: #D4AA3A;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n@media (max-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-header[_ngcontent-%COMP%], \n   .modal-body[_ngcontent-%COMP%], \n   .modal-footer[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n[dir=rtl][_ngcontent-%COMP%]   .me-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%], \n.rtl-header[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%], \n.ltr-header[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-title[dir=rtl][_ngcontent-%COMP%], \n.rtl-title[_ngcontent-%COMP%] {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n  flex: 1 !important;\n}\n.modal-title[dir=ltr][_ngcontent-%COMP%], \n.ltr-title[_ngcontent-%COMP%] {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n  flex: 1 !important;\n}\n.modal-header[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.rtl-header[_ngcontent-%COMP%]   .rtl-title[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.ltr-header[_ngcontent-%COMP%]   .ltr-title[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=documents-confirmation-modal.component-BDFBOGWY.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-documents-confirmation-modal", standalone: false, template: `<!-- Confirmation Modal -->\r
<div class="modal fade" [class.show]="showModal" [style.display]="showModal ? 'block' : 'none'" tabindex="-1" role="dialog">\r
  <div class="modal-dialog modal-dialog-centered" role="document">\r
    <div class="modal-content" [ngClass]="getModalClass()">\r
      <div class="modal-header" [dir]="isRTL() ? 'rtl' : 'ltr'"\r
           [class.rtl-header]="isRTL()"\r
           [class.ltr-header]="!isRTL()">\r
        <h5 class="modal-title" [class.text-end]="isRTL()" [class.text-start]="!isRTL()" [class.rtl-title]="isRTL()" [class.ltr-title]="!isRTL()">\r
          <i [ngClass]="getIconClass()" [class.me-2]="!isRTL()" [class.ms-2]="isRTL()"></i>\r
          {{ data.title }}\r
        </h5>\r
        <button type="button" class="btn-close" (click)="onCancel()" aria-label="Close"></button>\r
      </div>\r
      \r
      <div class="modal-body">\r
        <div [innerHTML]="data.message"></div>\r
      </div>\r
      \r
      <div class="modal-footer">\r
        <button \r
          type="button" \r
          class="btn btn-secondary" \r
          (click)="onCancel()"\r
          *ngIf="data.cancelText">\r
          {{ data.cancelText }}\r
        </button>\r
        <button \r
          type="button" \r
          class="btn" \r
          [ngClass]="getConfirmButtonClass()"\r
          (click)="onConfirm()">\r
          {{ data.confirmText }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Modal Backdrop -->\r
<div class="modal-backdrop fade" [class.show]="showModal" *ngIf="showModal"></div>\r
`, styles: ["/* src/app/components/documents/documents-confirmation-modal/documents-confirmation-modal.component.css */\n.modal {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-content {\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.modal-header {\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n}\n.modal-title {\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.modal-body {\n  padding: 1.5rem;\n}\n.modal-footer {\n  border-top: 1px solid #dee2e6;\n  padding: 1rem 1.5rem;\n  gap: 0.5rem;\n}\n.modal-danger .modal-header {\n  background-color: #f8d7da;\n  border-bottom-color: #f5c6cb;\n}\n.modal-warning .modal-header {\n  background-color: #fff3cd;\n  border-bottom-color: #ffeaa7;\n}\n.modal-success .modal-header {\n  background-color: #d4edda;\n  border-bottom-color: #c3e6cb;\n}\n.modal-info .modal-header {\n  background-color: #d1ecf1;\n  border-bottom-color: #bee5eb;\n}\n.fas {\n  font-size: 1.25rem;\n}\n.text-danger {\n  color: #dc3545 !important;\n}\n.text-warning {\n  color: #ffc107 !important;\n}\n.text-success {\n  color: #198754 !important;\n}\n.text-info {\n  color: #0dcaf0 !important;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border-color: #6c757d;\n  color: #fff;\n}\n.btn-secondary:hover {\n  background-color: #5c636a;\n  border-color: #565e64;\n}\n.btn-danger {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n.btn-danger:hover {\n  background-color: #bb2d3b;\n  border-color: #b02a37;\n}\n.btn-warning {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.btn-warning:hover {\n  background-color: #ffca2c;\n  border-color: #ffc720;\n}\n.btn-success {\n  background-color: #198754;\n  border-color: #198754;\n  color: #fff;\n}\n.btn-success:hover {\n  background-color: #157347;\n  border-color: #146c43;\n}\n.btn-primary {\n  background-color: #D4AA3A;\n  border-color: #D4AA3A;\n  color: #fff;\n}\n.btn-primary:hover {\n  background-color: #B68A35;\n  border-color: #B68A35;\n}\n@media (max-width: 576px) {\n  .modal-dialog {\n    margin: 0.5rem;\n    max-width: calc(100% - 1rem);\n  }\n  .modal-header,\n  .modal-body,\n  .modal-footer {\n    padding: 1rem;\n  }\n  .modal-footer {\n    flex-direction: column;\n  }\n  .modal-footer .btn {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n  .modal-footer .btn:last-child {\n    margin-bottom: 0;\n  }\n}\n[dir=rtl] .me-2 {\n  margin-left: 0.5rem !important;\n  margin-right: 0 !important;\n}\n.modal-header[dir=rtl],\n.rtl-header {\n  flex-direction: row-reverse !important;\n  justify-content: flex-end !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-header[dir=ltr],\n.ltr-header {\n  flex-direction: row !important;\n  justify-content: flex-start !important;\n  display: flex !important;\n  align-items: center !important;\n}\n.modal-title[dir=rtl],\n.rtl-title {\n  text-align: right !important;\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  order: 2;\n  flex: 1 !important;\n}\n.modal-title[dir=ltr],\n.ltr-title {\n  text-align: left !important;\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  order: 1;\n  flex: 1 !important;\n}\n.modal-header[dir=rtl] .modal-title,\n.rtl-header .rtl-title {\n  margin-left: auto !important;\n  margin-right: 0 !important;\n  text-align: right !important;\n  flex: 1 !important;\n}\n.modal-header[dir=ltr] .modal-title,\n.ltr-header .ltr-title {\n  margin-left: 0 !important;\n  margin-right: auto !important;\n  text-align: left !important;\n  flex: 1 !important;\n}\n/*# sourceMappingURL=documents-confirmation-modal.component-BDFBOGWY.css.map */\n"] }]
  }], () => [{ type: TranslationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentsConfirmationModalComponent, { className: "DocumentsConfirmationModalComponent", filePath: "src/app/components/documents/documents-confirmation-modal/documents-confirmation-modal.component.ts", lineNumber: 18 });
})();

// src/app/components/documents/documents.module.ts
var DocumentsModule = class _DocumentsModule {
  static \u0275fac = function DocumentsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DocumentsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    DocumentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationModalComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        DocumentsList,
        AddDocument,
        EditDocument,
        DocumentsConfirmationModalComponent
      ],
      imports: [
        CommonModule,
        DocumentsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ConfirmationModalComponent
      ]
    }]
  }], null, null);
})();
export {
  DocumentsModule
};
//# sourceMappingURL=chunk-64TN3REY.js.map
