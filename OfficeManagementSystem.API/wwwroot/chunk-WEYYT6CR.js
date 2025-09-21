import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-66AA6EL7.js";

// src/app/components/shared/confirmation-modal/confirmation-modal.component.ts
function ConfirmationModalComponent_div_0__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "polyline", 14)(2, "path", 15)(3, "line", 16)(4, "line", 17);
    \u0275\u0275elementEnd();
  }
}
function ConfirmationModalComponent_div_0__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 18)(2, "line", 19)(3, "line", 20);
    \u0275\u0275elementEnd();
  }
}
function ConfirmationModalComponent_div_0__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "circle", 21)(2, "line", 22)(3, "line", 23);
    \u0275\u0275elementEnd();
  }
}
function ConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ConfirmationModalComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "button", 3);
    \u0275\u0275listener("click", function ConfirmationModalComponent_div_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 4);
    \u0275\u0275element(4, "line", 5)(5, "line", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275template(7, ConfirmationModalComponent_div_0__svg_svg_7_Template, 5, 0, "svg", 8)(8, ConfirmationModalComponent_div_0__svg_svg_8_Template, 4, 0, "svg", 8)(9, ConfirmationModalComponent_div_0__svg_svg_9_Template, 4, 0, "svg", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
    \u0275\u0275listener("click", function ConfirmationModalComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dir", ctx_r1.isRTL ? "rtl" : "ltr");
    \u0275\u0275advance(5);
    \u0275\u0275classMap("icon-" + ctx_r1.data.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "delete");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.data.type === "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.title || "No Title");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.data.message || "No Message");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("btn-" + ctx_r1.data.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.confirmText || "Confirm", " ");
  }
}
var ConfirmationModalComponent = class _ConfirmationModalComponent {
  data;
  isRTL = false;
  isVisible = false;
  confirm = new EventEmitter();
  cancel = new EventEmitter();
  ngOnInit() {
    console.log("ConfirmationModal initialized with data:", this.data);
    console.log("ConfirmationModal isVisible:", this.isVisible);
  }
  show(data) {
    this.data = data;
    this.isVisible = true;
  }
  hide() {
    this.isVisible = false;
  }
  onConfirm() {
    this.confirm.emit();
    this.hide();
  }
  onCancel() {
    this.cancel.emit();
    this.hide();
  }
  onOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.onCancel();
    }
  }
  static \u0275fac = function ConfirmationModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationModalComponent, selectors: [["app-confirmation-modal"]], inputs: { data: "data", isRTL: "isRTL", isVisible: "isVisible" }, outputs: { confirm: "confirm", cancel: "cancel" }, decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "dir"], [1, "close-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "modal-icon"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], [1, "modal-title"], [1, "modal-message"], [1, "modal-actions"], [1, "btn", "btn-confirm", 3, "click"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3,6 5,6 21,6"], ["d", "M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function ConfirmationModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ConfirmationModalComponent_div_0_Template, 17, 11, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.isVisible);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_modalSlideIn 0.3s ease-out;\n  justify-content: center !important;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  color: white;\n  background: #2BA149;\n}\n@keyframes _ngcontent-%COMP%_modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.icon-delete[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.icon-warning[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.icon-info[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message[_ngcontent-%COMP%] {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n  justify-content: center !important;\n}\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  color: white;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%], \n.modal-container[dir=rtl][_ngcontent-%COMP%]   .modal-message[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .modal-container[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=confirmation-modal.component-TRKGV33B.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationModalComponent, [{
    type: Component,
    args: [{ selector: "app-confirmation-modal", standalone: true, imports: [CommonModule], template: `
    <div class="modal-overlay" *ngIf="isVisible" (click)="onOverlayClick($event)">
      <div class="modal-container" [dir]="isRTL ? 'rtl' : 'ltr'">
        <!-- Close Button -->
        <button class="close-btn" (click)="onCancel()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Icon -->
        <div class="modal-icon" [class]="'icon-' + data.type">
          <svg *ngIf="data.type === 'delete'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
          <svg *ngIf="data.type === 'warning'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <svg *ngIf="data.type === 'info'" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </div>

        <!-- Title -->
        <h2 class="modal-title">{{ data.title || 'No Title' }}</h2>

        <!-- Message -->
        <p class="modal-message">{{ data.message || 'No Message' }}</p>

        <!-- Action Buttons -->
        <div class="modal-actions">
          <button class="btn btn-confirm" [class]="'btn-' + data.type" (click)="onConfirm()">
            {{ data.confirmText || 'Confirm' }}
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;a3507d29e377a6c1351ba862df1c6b70931443386c370ab582a7dfb3f7c28c46;D:/web/EXSUS/\u062B\u0624\u062E\u0629/v2/echo-office-new/src/app/components/shared/confirmation-modal/confirmation-modal.component.ts */\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n  padding: 1rem;\n}\n.modal-container {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 400px;\n  width: 100%;\n  position: relative;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  animation: modalSlideIn 0.3s ease-out;\n  justify-content: center !important;\n}\n.btn-confirm {\n  color: white;\n  background: #2BA149;\n}\n@keyframes modalSlideIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: none;\n  border: none;\n  color: #6b7280;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-btn:hover {\n  background: #f3f4f6;\n  color: #374151;\n}\n.modal-icon {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.icon-delete {\n  color: #dc2626;\n}\n.icon-warning {\n  color: #f59e0b;\n}\n.icon-info {\n  color: #3b82f6;\n}\n.modal-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: center !important;\n  margin-bottom: 1rem;\n  line-height: 1.4;\n}\n.modal-message {\n  color: #6b7280;\n  text-align: center;\n  margin-bottom: 2rem;\n  line-height: 1.6;\n  font-size: 1rem;\n  justify-content: center !important;\n}\n.modal-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: none;\n  min-width: 100px;\n}\n.btn-cancel {\n  background: white;\n  color: #374151;\n  border: 2px solid #e5e7eb;\n}\n.btn-cancel:hover {\n  background: #f9fafb;\n  border-color: #d1d5db;\n}\n.btn-confirm {\n  color: white;\n}\n.btn-delete {\n  background: #dc2626;\n}\n.btn-delete:hover {\n  background: #b91c1c;\n}\n.btn-warning {\n  background: #f59e0b;\n}\n.btn-warning:hover {\n  background: #d97706;\n}\n.btn-info {\n  background: #3b82f6;\n}\n.btn-info:hover {\n  background: #2563eb;\n}\n.modal-container[dir=rtl] .close-btn {\n  left: auto;\n  right: 1rem;\n}\n.modal-container[dir=rtl] .modal-title,\n.modal-container[dir=rtl] .modal-message {\n  text-align: center;\n  justify-content: center;\n}\n@media (max-width: 480px) {\n  .modal-container {\n    padding: 1.5rem;\n    margin: 1rem;\n  }\n  .modal-actions {\n    flex-direction: column;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=confirmation-modal.component-TRKGV33B.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], isRTL: [{
    type: Input
  }], isVisible: [{
    type: Input
  }], confirm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationModalComponent, { className: "ConfirmationModalComponent", filePath: "src/app/components/shared/confirmation-modal/confirmation-modal.component.ts", lineNumber: 245 });
})();

export {
  ConfirmationModalComponent
};
//# sourceMappingURL=chunk-WEYYT6CR.js.map
