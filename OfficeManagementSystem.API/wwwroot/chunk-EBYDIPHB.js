import {
  AuthService
} from "./chunk-DYSR7UAX.js";
import {
  Router
} from "./chunk-7FVPEV7K.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-JZGXYUE5.js";

// src/app/guards/permission.guard.ts
var PermissionGuard = class _PermissionGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }
    const requiredPermission = route.data["permission"];
    if (!requiredPermission) {
      return true;
    }
    const hasPermission = this.authService.hasPermission(requiredPermission);
    if (!hasPermission) {
      this.router.navigate(["/unauthorized"]);
      return false;
    }
    return true;
  }
  static \u0275fac = function PermissionGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PermissionGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PermissionGuard, factory: _PermissionGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

export {
  PermissionGuard
};
//# sourceMappingURL=chunk-EBYDIPHB.js.map
