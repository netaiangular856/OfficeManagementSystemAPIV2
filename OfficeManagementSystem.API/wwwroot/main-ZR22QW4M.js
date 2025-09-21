import {
  JwtModule
} from "./chunk-IPDCSBCV.js";
import {
  BrowserModule,
  RouterModule,
  RouterOutlet,
  platformBrowser
} from "./chunk-K7XYKDLO.js";
import {
  Component,
  HTTP_INTERCEPTORS,
  HttpClientModule,
  Injectable,
  LangService,
  NgModule,
  TranslationService,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement
} from "./chunk-T743GANX.js";
import "./chunk-EVSPGG2W.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  translationService;
  langService;
  title = signal("echo-office", ...ngDevMode ? [{ debugName: "title" }] : []);
  constructor(translationService, langService) {
    this.translationService = translationService;
    this.langService = langService;
  }
  ngOnInit() {
    const currentLang = this.langService.getCurrentLang();
    this.translationService.loadTranslations(currentLang);
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(TranslationService), \u0275\u0275directiveInject(LangService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n  margin: 0;\n  padding: 0;\n  line-height: 1.6;\n  color: #333;\n}\n[dir=rtl][_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n*[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.font-english[_ngcontent-%COMP%] {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.font-arabic[_ngcontent-%COMP%] {\n  font-family:\n    "IBM Plex Sans Arabic",\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl][_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%] {\n  text-align: left;\n}\n/*# sourceMappingURL=app-IORT64MC.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<router-outlet></router-outlet>\r\n", styles: ['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";\n@import "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap";\n\n/* src/app/app.css */\nbody {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n  margin: 0;\n  padding: 0;\n  line-height: 1.6;\n  color: #333;\n}\n[dir=rtl] body {\n  font-family:\n    "IBM Plex Sans Arabic",\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n* {\n  font-family: inherit;\n}\n.font-english {\n  font-family:\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.font-arabic {\n  font-family:\n    "IBM Plex Sans Arabic",\n    "Poppins",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.text-center {\n  text-align: center;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n[dir=rtl] .text-left {\n  text-align: right;\n}\n[dir=rtl] .text-right {\n  text-align: left;\n}\n/*# sourceMappingURL=app-IORT64MC.css.map */\n'] }]
  }], () => [{ type: TranslationService }, { type: LangService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 });
})();

// src/app/app-routing.module.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-GT64UJCD.js").then((m) => m.LayoutModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./chunk-6YR6V6QJ.js").then((m) => m.AuthModule)
  },
  {
    path: "unauthorized",
    loadChildren: () => import("./chunk-FUMTVFAQ.js").then((m) => m.UnauthorizedModule)
  },
  {
    path: "**",
    loadChildren: () => import("./chunk-JXMQU554.js").then((m) => m.NotFoundModule)
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/services/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    if (this.isAuthEndpoint(req.url)) {
      return next.handle(req);
    }
    let token = localStorage.getItem("access_token");
    if (!token) {
      token = localStorage.getItem("token") || localStorage.getItem("authToken") || localStorage.getItem("jwt") || localStorage.getItem("userToken");
    }
    if (token) {
      token = token.trim();
      if (token.startsWith("Bearer ")) {
        token = token.substring(7);
      }
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
  isAuthEndpoint(url) {
    const authEndpoints = [
      "/api/Auth/login",
      "/api/Auth/reset-password",
      "/api/Auth/change-password",
      "/api/Auth/send-email-password",
      "/api/Auth/logout"
    ];
    return authEndpoints.some((endpoint) => url.endsWith(endpoint));
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ], imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("access_token") || localStorage.getItem("token");
        },
        allowedDomains: ["localhost", "your-api-domain.com"],
        // Add your API domains here
        disallowedRoutes: ["/auth/login", "/auth/register"]
        // Add routes that don't need JWT
      }
    })
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return localStorage.getItem("access_token") || localStorage.getItem("token");
            },
            allowedDomains: ["localhost", "your-api-domain.com"],
            // Add your API domains here
            disallowedRoutes: ["/auth/login", "/auth/register"]
            // Add routes that don't need JWT
          }
        })
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
//# sourceMappingURL=main-ZR22QW4M.js.map
