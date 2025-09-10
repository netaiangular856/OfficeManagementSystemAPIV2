import {
  environment
} from "./chunk-DECC4EAS.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-NBW6TLAW.js";

// src/app/services/image.service.ts
var ImageService = class _ImageService {
  apiUrl = environment.apiUrl;
  constructor() {
  }
  /**
   * Get the full URL for a user image
   * @param imageUrl - The relative image URL from the API
   * @param userName - Optional user name for fallback display
   * @returns Full URL for the image or fallback to default user image
   */
  getImageUrl(imageUrl, userName) {
    if (!imageUrl) {
      return "assets/images/user.png";
    }
    return `${this.apiUrl}/${imageUrl}`;
  }
  /**
   * Get user initials for avatar fallback
   * @param firstName - User's first name
   * @param lastName - User's last name
   * @returns Initials string (e.g., "JD" for John Doe)
   */
  getUserInitials(firstName, lastName) {
    if (!firstName && !lastName) {
      return "U";
    }
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
    return firstInitial + lastInitial;
  }
  /**
   * Check if an image URL is valid
   * @param imageUrl - The image URL to validate
   * @returns boolean indicating if the URL is valid
   */
  isValidImageUrl(imageUrl) {
    if (!imageUrl) {
      return false;
    }
    try {
      new URL(imageUrl);
      return true;
    } catch {
      return imageUrl.startsWith("/") || imageUrl.includes(".");
    }
  }
  static \u0275fac = function ImageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ImageService, factory: _ImageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ImageService
};
//# sourceMappingURL=chunk-WSKIHX7F.js.map
