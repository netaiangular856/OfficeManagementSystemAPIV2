import {
  ImageService
} from "./chunk-PA6IG3FH.js";
import {
  ProfileService
} from "./chunk-ODI2QPTF.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-KHAMYMVY.js";
import {
  CommonModule,
  Component,
  LangService,
  NgIf,
  TranslationService,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UOGSXFNT.js";
import "./chunk-EVSPGG2W.js";

// src/app/components/profile/profile.component.ts
function ProfileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
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
function ProfileComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 46);
    \u0275\u0275element(3, "polyline", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Preview ");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_div_7_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ProfileComponent_div_7_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeImagePreview());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "line", 49)(3, "line", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("profile.cancel"), " ");
  }
}
function ProfileComponent_div_7_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("profile.first_name_required"), " ");
  }
}
function ProfileComponent_div_7_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("profile.last_name_required"), " ");
  }
}
function ProfileComponent_div_7_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("profile.phone_required"), " ");
  }
}
function ProfileComponent_div_7_span_49_Template(rf, ctx) {
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
function ProfileComponent_div_7_span_50_Template(rf, ctx) {
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
function ProfileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "img", 14);
    \u0275\u0275listener("error", function ProfileComponent_div_7_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.src = "assets/images/user.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProfileComponent_div_7_div_5_Template, 5, 0, "div", 15);
    \u0275\u0275elementStart(6, "div", 16)(7, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.triggerImageUpload());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 18);
    \u0275\u0275element(9, "path", 19)(10, "circle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProfileComponent_div_7_button_12_Template, 5, 1, "button", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "input", 22, 0);
    \u0275\u0275listener("change", function ProfileComponent_div_7_Template_input_change_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onImageChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 23)(16, "form", 24);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_div_7_Template_form_ngSubmit_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(17, "div", 25)(18, "div", 26)(19, "label", 27);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 28);
    \u0275\u0275template(22, ProfileComponent_div_7_div_22_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 26)(24, "label", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 31);
    \u0275\u0275template(27, ProfileComponent_div_7_div_27_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 26)(29, "label", 32);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 33);
    \u0275\u0275elementStart(32, "small", 34);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 26)(35, "label", 35);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 36);
    \u0275\u0275template(38, ProfileComponent_div_7_div_38_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26)(40, "label", 37);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 26)(44, "label", 39);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 41)(48, "button", 42);
    \u0275\u0275template(49, ProfileComponent_div_7_span_49_Template, 2, 1, "span", 43)(50, ProfileComponent_div_7_span_50_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_19_0;
    let tmp_21_0;
    let tmp_23_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getDisplayImageUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.getFullName());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedImagePreview());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedImagePreview() ? ctx_r0.translate("profile.change_image") : ctx_r0.translate("profile.select_image"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedImagePreview());
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r0.profileForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.first_name"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("profile.first_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r0.profileForm.get("firstName")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.profileForm.get("firstName")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.last_name"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("profile.last_name_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r0.profileForm.get("lastName")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx_r0.profileForm.get("lastName")) == null ? null : tmp_13_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.email"));
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_15_0 = ctx_r0.profile()) == null ? null : tmp_15_0.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.email_help"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.phone"));
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.translate("profile.phone_placeholder"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_19_0 = ctx_r0.profileForm.get("phoneNumber")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r0.profileForm.get("phoneNumber")) == null ? null : tmp_19_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.department"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ((tmp_21_0 = ctx_r0.profile()) == null ? null : tmp_21_0.departmentName) || ctx_r0.translate("profile.no_department"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.roles"));
    \u0275\u0275advance();
    \u0275\u0275property("value", ((tmp_23_0 = ctx_r0.profile()) == null ? null : tmp_23_0.roles == null ? null : tmp_23_0.roles.join(", ")) || ctx_r0.translate("profile.no_roles"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.profileForm.invalid || ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.saving());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving());
  }
}
function ProfileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 54);
    \u0275\u0275element(3, "polyline", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function ProfileComponent_div_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hideSuccessMessage());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.translate("profile.update_success"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.translate("common.close"), " ");
  }
}
var ProfileComponent = class _ProfileComponent {
  profileService;
  imageService;
  fb;
  translationService;
  langService;
  profile = signal(null, ...ngDevMode ? [{ debugName: "profile" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : []);
  isRTLDirection = signal(false, ...ngDevMode ? [{ debugName: "isRTLDirection" }] : []);
  // Success modal state
  showSuccessModal = signal(false, ...ngDevMode ? [{ debugName: "showSuccessModal" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  // Image preview state
  selectedImagePreview = signal(null, ...ngDevMode ? [{ debugName: "selectedImagePreview" }] : []);
  selectedFile = null;
  profileForm;
  constructor(profileService, imageService, fb, translationService, langService) {
    this.profileService = profileService;
    this.imageService = imageService;
    this.fb = fb;
    this.translationService = translationService;
    this.langService = langService;
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      phoneNumber: ["", [Validators.required, Validators.minLength(5)]]
      // More permissive phone validation
    });
  }
  ngOnInit() {
    this.loadProfile();
    this.langService.currentLang$.subscribe((lang) => {
      this.currentLang.set(lang);
      this.isRTLDirection.set(lang === "ar");
    });
  }
  ngOnDestroy() {
  }
  loadProfile() {
    this.loading.set(true);
    this.profileService.getProfile().subscribe({
      next: (response) => {
        console.log("Profile API response:", response);
        if (response.success) {
          console.log("Profile data received:", response.data);
          this.profile.set(response.data);
          this.populateForm(response.data);
        }
        this.loading.set(false);
      },
      error: (error) => {
        console.error("Error loading profile:", error);
        this.loading.set(false);
      }
    });
  }
  populateForm(profileData) {
    console.log("Populating form with data:", profileData);
    console.log("All available properties:", Object.keys(profileData));
    const phoneValue = profileData.phoneNumber || profileData.phone || profileData.phoneNumber || profileData.PhoneNumber || "";
    console.log("Phone number found:", phoneValue);
    const formData = {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      phoneNumber: phoneValue
    };
    console.log("Form data to patch:", formData);
    this.profileForm.patchValue(formData);
    console.log("Form values after patch:", this.profileForm.value);
    console.log("Phone number form control value:", this.profileForm.get("phoneNumber")?.value);
  }
  onSubmit() {
    console.log("Form valid:", this.profileForm.valid);
    console.log("Form errors:", this.profileForm.errors);
    console.log("Form value:", this.profileForm.value);
    console.log("Profile exists:", !!this.profile());
    console.log("Selected file:", this.selectedFile);
    if (this.profileForm.valid && this.profile()) {
      this.saving.set(true);
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Image = e.target?.result;
          this.updateProfileWithImage(base64Image);
        };
        reader.readAsDataURL(this.selectedFile);
      } else {
        this.updateProfileWithoutImage();
      }
    } else {
      console.error("Form is invalid or profile not loaded");
      this.markFormGroupTouched();
    }
  }
  markFormGroupTouched() {
    Object.keys(this.profileForm.controls).forEach((key) => {
      const control = this.profileForm.get(key);
      control?.markAsTouched();
    });
  }
  base64ToBinary(base64) {
    const base64Data = base64.includes(",") ? base64.split(",")[1] : base64;
    const binaryString = atob(base64Data);
    return binaryString;
  }
  base64ToBlob(base64) {
    const base64Data = base64.includes(",") ? base64.split(",")[1] : base64;
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const mimeType = base64.match(/data:([^;]+);/)?.[1] || "image/png";
    return new Blob([bytes], { type: mimeType });
  }
  updateProfileWithImage(base64Image) {
    const formData = new FormData();
    formData.append("FirstName", this.profileForm.get("firstName")?.value);
    formData.append("LastName", this.profileForm.get("lastName")?.value);
    formData.append("PhoneNumber", this.profileForm.get("phoneNumber")?.value);
    const blob = this.base64ToBlob(base64Image);
    formData.append("NewImage", blob, "profile-image.png");
    console.log("Sending profile update with image (FormData):", {
      FirstName: this.profileForm.get("firstName")?.value,
      LastName: this.profileForm.get("lastName")?.value,
      PhoneNumber: this.profileForm.get("phoneNumber")?.value,
      NewImage: "File blob"
    });
    this.profileService.updateProfileWithFormData(formData).subscribe({
      next: (response) => {
        this.handleUpdateSuccess(response);
      },
      error: (error) => {
        console.error("Error updating profile with image:", error);
        this.saving.set(false);
      }
    });
  }
  updateProfileWithoutImage() {
    const formData = new FormData();
    formData.append("FirstName", this.profileForm.get("firstName")?.value);
    formData.append("LastName", this.profileForm.get("lastName")?.value);
    formData.append("PhoneNumber", this.profileForm.get("phoneNumber")?.value);
    console.log("Sending profile update without image (FormData):", {
      FirstName: this.profileForm.get("firstName")?.value,
      LastName: this.profileForm.get("lastName")?.value,
      PhoneNumber: this.profileForm.get("phoneNumber")?.value
    });
    this.profileService.updateProfileWithFormData(formData).subscribe({
      next: (response) => {
        console.log("Profile update response:", response);
        this.handleUpdateSuccess(response);
      },
      error: (error) => {
        console.error("Error updating profile:", error);
        this.saving.set(false);
      }
    });
  }
  handleUpdateSuccess(response) {
    console.log("Handling update success:", response);
    if (response.success) {
      console.log("Update successful, updating profile data");
      this.profile.set(response.data);
      this.populateForm(response.data);
      this.selectedImagePreview.set(null);
      this.selectedFile = null;
      this.successMessage.set(this.translate("profile.update_success"));
      this.showSuccessModal.set(true);
      setTimeout(() => {
        this.showSuccessModal.set(false);
      }, 3e3);
    } else {
      console.error("Update failed:", response.message || "Unknown error");
    }
    this.saving.set(false);
  }
  triggerImageUpload() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => this.onImageChange(event);
    fileInput.click();
  }
  onImageChange(event) {
    const target = event.target;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImagePreview.set(e.target?.result);
      };
      reader.readAsDataURL(file);
      console.log("Image selected:", file);
    }
  }
  removeImagePreview() {
    this.selectedImagePreview.set(null);
    this.selectedFile = null;
  }
  getDisplayImageUrl() {
    if (this.selectedImagePreview()) {
      return this.selectedImagePreview();
    }
    return this.getUserImageUrl();
  }
  getFullName() {
    const profileData = this.profile();
    if (profileData) {
      return `${profileData.firstName} ${profileData.lastName}`;
    }
    return "";
  }
  showSuccessMessage() {
    return this.showSuccessModal();
  }
  hideSuccessMessage() {
    this.showSuccessModal.set(false);
  }
  translate(key) {
    return this.translationService.translate(key);
  }
  isRTL() {
    return this.translationService.isRTL();
  }
  getUserImageUrl() {
    const profileData = this.profile();
    if (profileData) {
      return this.imageService.getImageUrl(profileData.imageUrl, `${profileData.firstName} ${profileData.lastName}`);
    }
    return this.imageService.getImageUrl();
  }
  getUserInitials() {
    const profileData = this.profile();
    if (profileData) {
      return this.imageService.getUserInitials(profileData.firstName, profileData.lastName);
    }
    return "U";
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ImageService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 9, vars: 8, consts: [["imageInput", ""], [1, "profile-page", 3, "dir"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "loading-state", 4, "ngIf"], ["class", "profile-content", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "profile-content"], [1, "profile-grid"], [1, "profile-image-section"], [1, "profile-image-container"], [1, "profile-image", 3, "error", "src", "alt"], ["class", "image-preview-overlay", 4, "ngIf"], [1, "image-controls"], [1, "change-image-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"], ["cx", "12", "cy", "13", "r", "4"], ["class", "remove-preview-btn", "type", "button", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "profile-form-section"], [1, "profile-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-input", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-input", 3, "placeholder"], ["for", "email"], ["type", "email", "id", "email", "disabled", "", 1, "form-input", "disabled", 3, "value"], [1, "form-help"], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phoneNumber", 1, "form-input", 3, "placeholder"], ["for", "department"], ["type", "text", "id", "department", "disabled", "", 1, "form-input", "disabled", 3, "value"], ["for", "roles"], ["type", "text", "id", "roles", "disabled", "", 1, "form-input", "disabled", 3, "value"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "image-preview-overlay"], [1, "preview-badge"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "20,6 9,17 4,12"], ["type", "button", 1, "remove-preview-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "error-message"], [1, "success-message"], [1, "success-content"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "success-icon"], [1, "close-btn", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ProfileComponent_div_6_Template, 4, 1, "div", 5)(7, ProfileComponent_div_7_Template, 51, 25, "div", 6)(8, ProfileComponent_div_8_Template, 8, 2, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("rtl", ctx.isRTL());
      \u0275\u0275property("dir", ctx.isRTL() ? "rtl" : "ltr");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.translate("profile.title"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.translate("profile.subtitle"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.profile());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showSuccessMessage());
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #09365F;\n  margin: 0 0 0.5rem 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.profile-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  align-items: start;\n}\n.profile-image-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.profile-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.profile-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.profile-image-placeholder[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  border: 4px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.change-image-btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n.change-image-btn[_ngcontent-%COMP%]:hover {\n  background: #0f6b2a;\n}\n.change-image-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.image-preview-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  pointer-events: none;\n  z-index: 10;\n}\n.preview-badge[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.image-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n.remove-preview-btn[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.remove-preview-btn[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n}\n.remove-preview-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.profile-form-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.disabled[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #158638;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0f6b2a;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.success-message[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  background: #10b981;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n}\n.success-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.success-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-decoration: underline;\n  margin-left: 1rem;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.profile-page.rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.profile-page.rtl[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.profile-page.rtl[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n  right: auto;\n  left: 2rem;\n}\n.profile-page.rtl[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n@media (max-width: 1024px) and (min-width: 769px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n    align-items: center;\n  }\n  .profile-image-section[_ngcontent-%COMP%] {\n    order: 1;\n    margin-bottom: 1rem;\n  }\n  .profile-form-section[_ngcontent-%COMP%] {\n    order: 2;\n    max-width: 600px;\n    margin: 0 auto;\n    width: 100%;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n  }\n  .profile-image[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .profile-image-placeholder[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n  .page-subtitle[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .profile-form[_ngcontent-%COMP%] {\n    gap: 1.75rem;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .profile-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .success-message[_ngcontent-%COMP%] {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .profile-page.rtl[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%] {\n    right: 1rem;\n    left: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .profile-page[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .profile-form-section[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .profile-image-section[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 85% !important;\n  }\n  .profile-form-section[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0.5rem;\n    width: 90% !important;\n  }\n  #lastName[_ngcontent-%COMP%], \n   #firstName[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .profile-image[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n  .profile-image-placeholder[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=profile.component-32X5MTUI.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="profile-page" [class.rtl]="isRTL()" [dir]="isRTL() ? 'rtl' : 'ltr'">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <h1 class="page-title">{{ translate('profile.title') }}</h1>\r
    <p class="page-subtitle">{{ translate('profile.subtitle') }}</p>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div class="loading-state" *ngIf="loading()">\r
    <div class="spinner"></div>\r
    <p>{{ translate('common.loading') }}</p>\r
  </div>\r
\r
  <!-- Profile Content -->\r
  <div class="profile-content" *ngIf="!loading() && profile()">\r
    <div class="profile-grid">\r
      <!-- Profile Image Section -->\r
      <div class="profile-image-section">\r
        <div class="profile-image-container">\r
          <img \r
            [src]="getDisplayImageUrl()" \r
            [alt]="getFullName()"\r
            class="profile-image"\r
            (error)="$event.target.src='assets/images/user.png'">\r
          \r
          <!-- Image preview overlay -->\r
          <div class="image-preview-overlay" *ngIf="selectedImagePreview()">\r
            <div class="preview-badge">\r
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <polyline points="20,6 9,17 4,12"></polyline>\r
              </svg>\r
              Preview\r
            </div>\r
          </div>\r
          \r
          <div class="image-controls">\r
            <button class="change-image-btn" (click)="triggerImageUpload()">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>\r
                <circle cx="12" cy="13" r="4"></circle>\r
              </svg>\r
              {{ selectedImagePreview() ? translate('profile.change_image') : translate('profile.select_image') }}\r
            </button>\r
            \r
            <button \r
              *ngIf="selectedImagePreview()" \r
              class="remove-preview-btn" \r
              (click)="removeImagePreview()"\r
              type="button">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <line x1="18" y1="6" x2="6" y2="18"></line>\r
                <line x1="6" y1="6" x2="18" y2="18"></line>\r
              </svg>\r
              {{ translate('profile.cancel') }}\r
            </button>\r
          </div>\r
          \r
          <input \r
            #imageInput \r
            type="file" \r
            accept="image/*" \r
            (change)="onImageChange($event)" \r
            style="display: none;">\r
        </div>\r
      </div>\r
\r
      <!-- Profile Form Section -->\r
      <div class="profile-form-section">\r
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">\r
          <div class="form-row">\r
            <div class="form-group">\r
              <label for="firstName">{{ translate('profile.first_name') }}</label>\r
              <input \r
                type="text" \r
                id="firstName" \r
                formControlName="firstName" \r
                [placeholder]="translate('profile.first_name_placeholder')"\r
                class="form-input">\r
              <div class="error-message" *ngIf="profileForm.get('firstName')?.invalid && profileForm.get('firstName')?.touched">\r
                {{ translate('profile.first_name_required') }}\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="lastName">{{ translate('profile.last_name') }}</label>\r
              <input \r
                type="text" \r
                id="lastName" \r
                formControlName="lastName" \r
                [placeholder]="translate('profile.last_name_placeholder')"\r
                class="form-input">\r
              <div class="error-message" *ngIf="profileForm.get('lastName')?.invalid && profileForm.get('lastName')?.touched">\r
                {{ translate('profile.last_name_required') }}\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="email">{{ translate('profile.email') }}</label>\r
            <input \r
              type="email" \r
              id="email" \r
              [value]="profile()?.email" \r
              disabled\r
              class="form-input disabled">\r
            <small class="form-help">{{ translate('profile.email_help') }}</small>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="phone">{{ translate('profile.phone') }}</label>\r
            <input \r
              type="tel" \r
              id="phone" \r
              formControlName="phoneNumber" \r
              [placeholder]="translate('profile.phone_placeholder')"\r
              class="form-input">\r
            <div class="error-message" *ngIf="profileForm.get('phoneNumber')?.invalid && profileForm.get('phoneNumber')?.touched">\r
              {{ translate('profile.phone_required') }}\r
            </div>\r
          </div>\r
\r
                        <div class="form-group">\r
                <label for="department">{{ translate('profile.department') }}</label>\r
                <input \r
                  type="text" \r
                  id="department" \r
                  [value]="profile()?.departmentName || translate('profile.no_department')" \r
                  disabled\r
                  class="form-input disabled">\r
              </div>\r
\r
              <div class="form-group">\r
                <label for="roles">{{ translate('profile.roles') }}</label>\r
                <input \r
                  type="text" \r
                  id="roles" \r
                  [value]="profile()?.roles?.join(', ') || translate('profile.no_roles')" \r
                  disabled\r
                  class="form-input disabled">\r
              </div>\r
\r
          <div class="form-actions">\r
            <button type="submit" class="btn btn-primary" [disabled]="profileForm.invalid || saving()">\r
              <span *ngIf="!saving()">{{ translate('common.save') }}</span>\r
              <span *ngIf="saving()">{{ translate('common.saving') }}</span>\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Success Message -->\r
  <div class="success-message" *ngIf="showSuccessMessage()">\r
    <div class="success-content">\r
      <svg class="success-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <polyline points="20,6 9,17 4,12"></polyline>\r
      </svg>\r
      <span>{{ translate('profile.update_success') }}</span>\r
      <button class="close-btn" (click)="hideSuccessMessage()">\r
        {{ translate('common.close') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
`, styles: ["/* src/app/components/profile/profile.component.css */\n.profile-page {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.page-title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #09365F;\n  margin: 0 0 0.5rem 0;\n}\n.page-subtitle {\n  font-size: 1.1rem;\n  color: #6b7280;\n  margin: 0;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #158638;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 1rem;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.profile-grid {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  align-items: start;\n}\n.profile-image-section {\n  text-align: center;\n}\n.profile-image-container {\n  position: relative;\n  display: inline-block;\n}\n.profile-image {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #e5e7eb;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n}\n.profile-image-placeholder {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  border: 4px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #9ca3af;\n}\n.change-image-btn {\n  margin-top: 1rem;\n  background: #158638;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n.change-image-btn:hover {\n  background: #0f6b2a;\n}\n.change-image-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.image-preview-overlay {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  pointer-events: none;\n  z-index: 10;\n}\n.preview-badge {\n  background: #158638;\n  color: white;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.image-controls {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n}\n.remove-preview-btn {\n  background: #dc2626;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n.remove-preview-btn:hover {\n  background: #b91c1c;\n}\n.remove-preview-btn svg {\n  width: 14px;\n  height: 14px;\n}\n.profile-form-section {\n  background: white;\n  padding: 2rem;\n  border-radius: 1rem;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n}\n.profile-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.form-group label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.form-input {\n  padding: 0.75rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-input:focus {\n  outline: none;\n  border-color: #158638;\n  box-shadow: 0 0 0 3px rgba(21, 134, 56, 0.1);\n}\n.form-input.disabled {\n  background: #f9fafb;\n  color: #6b7280;\n  cursor: not-allowed;\n}\n.form-help {\n  color: #6b7280;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.error-message {\n  color: #dc2626;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1rem;\n}\n.btn {\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary {\n  background: #158638;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #0f6b2a;\n}\n.btn-primary:disabled {\n  background: #9ca3af;\n  cursor: not-allowed;\n}\n.success-message {\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  background: #10b981;\n  color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  animation: slideIn 0.3s ease;\n}\n.success-content {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.success-icon {\n  color: white;\n}\n.close-btn {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-decoration: underline;\n  margin-left: 1rem;\n}\n.close-btn:hover {\n  opacity: 0.8;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.profile-page.rtl {\n  direction: rtl;\n}\n.profile-page.rtl .form-actions {\n  justify-content: flex-start;\n}\n.profile-page.rtl .success-message {\n  right: auto;\n  left: 2rem;\n}\n.profile-page.rtl .close-btn {\n  margin-left: 0;\n  margin-right: 1rem;\n}\n@media (max-width: 1024px) and (min-width: 769px) {\n  .profile-page {\n    padding: 1.5rem;\n  }\n  .profile-grid {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n    align-items: center;\n  }\n  .profile-image-section {\n    order: 1;\n    margin-bottom: 1rem;\n  }\n  .profile-form-section {\n    order: 2;\n    max-width: 600px;\n    margin: 0 auto;\n    width: 100%;\n  }\n  .form-row {\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n  }\n  .profile-image {\n    width: 180px;\n    height: 180px;\n  }\n  .profile-image-placeholder {\n    width: 180px;\n    height: 180px;\n  }\n  .page-title {\n    font-size: 2.25rem;\n  }\n  .page-subtitle {\n    font-size: 1.2rem;\n  }\n  .profile-form {\n    gap: 1.75rem;\n  }\n  .form-actions {\n    justify-content: center;\n    margin-top: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .profile-page {\n    padding: 1rem;\n  }\n  .profile-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .page-title {\n    font-size: 2rem;\n  }\n  .success-message {\n    top: 1rem;\n    right: 1rem;\n    left: 1rem;\n  }\n  .profile-page.rtl .success-message {\n    right: 1rem;\n    left: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .profile-page {\n    padding: 0.5rem;\n  }\n  .profile-form-section {\n    padding: 1.5rem;\n  }\n  .profile-image-section {\n    justify-content: center;\n    width: 85% !important;\n  }\n  .profile-form-section {\n    justify-content: center;\n    padding: 0.5rem;\n    width: 90% !important;\n  }\n  #lastName,\n  #firstName {\n    width: 100% !important;\n  }\n  .profile-image {\n    width: 150px;\n    height: 150px;\n  }\n  .profile-image-placeholder {\n    width: 150px;\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=profile.component-32X5MTUI.css.map */\n"] }]
  }], () => [{ type: ProfileService }, { type: ImageService }, { type: FormBuilder }, { type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/components/profile/profile.component.ts", lineNumber: 16 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-6FDHBEJZ.js.map
