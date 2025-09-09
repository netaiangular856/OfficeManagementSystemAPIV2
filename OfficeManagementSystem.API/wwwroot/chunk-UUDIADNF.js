import {
  environment
} from "./chunk-TBUK7V5T.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  Injectable,
  catchError,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-MGTM5SLA.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  currentUserSubject = new BehaviorSubject(null);
  currentUser$ = this.currentUserSubject.asObservable();
  isAuthenticatedSubject = new BehaviorSubject(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  constructor(http) {
    this.http = http;
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    const token = this.getToken();
    const user = this.getUserFromStorage();
    if (token && user) {
      this.currentUserSubject.next(user);
      this.isAuthenticatedSubject.next(true);
    }
  }
  login(credentials) {
    return this.http.post(`${environment.apiBaseUrl}/Auth/login`, credentials).pipe(tap((response) => {
      if (response.success && response.data) {
        const data = response.data;
        this.setToken(data.token);
        const user = {
          id: data.userId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          roles: data.roles,
          lastLoginAt: data.lastLoginAt
        };
        this.setUser(user);
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
      } else {
        throw new Error("Login failed: " + (response.message || "Unknown error"));
      }
    }), catchError(this.handleError));
  }
  logout() {
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${environment.apiBaseUrl}/Auth/logout`, {}, { headers }).pipe(tap(() => {
      this.clearAuth();
    }), catchError((error) => {
      this.clearAuth();
      return throwError(() => error);
    }));
  }
  changePassword(request) {
    const token = this.getToken();
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http.post(`${environment.apiBaseUrl}/Auth/change-password`, request, { headers }).pipe(catchError(this.handleError));
  }
  sendResetEmail(email) {
    return this.http.get(`${environment.apiBaseUrl}/Auth/send-email-password`, {
      params: { email }
    }).pipe(catchError(this.handleError));
  }
  resetPassword(request) {
    return this.http.post(`${environment.apiBaseUrl}/Auth/reset-password`, request).pipe(catchError(this.handleError));
  }
  // Token management
  setToken(token) {
    localStorage.setItem("access_token", token);
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("access_token") || localStorage.getItem("token");
  }
  clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("jwt");
    localStorage.removeItem("userToken");
  }
  // User management
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  getUserFromStorage() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }
  clearUser() {
    localStorage.removeItem("user");
  }
  clearAuth() {
    this.clearToken();
    this.clearUser();
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }
  // Utility methods
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }
  handleError(error) {
    let errorMessage = "An error occurred";
    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return throwError(() => ({ message: errorMessage }));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-UUDIADNF.js.map
